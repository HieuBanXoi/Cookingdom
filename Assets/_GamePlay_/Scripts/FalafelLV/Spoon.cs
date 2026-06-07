using UnityEngine;

public class Spoon : Plate
{
    public Sprite spoonEmptySprite;
    public Sprite spoonFullSprite;
    public bool canUse = false;
    public float tahiniRayDistance = 100f;

    private Camera mainCamera;
    private bool isDragging = false;
    private bool isSpoonFull = false;
    private bool hasRegisteredDragEvents = false;

    private void Start()
    {
        mainCamera = Camera.main;
        RegisterDragEvents();
        SetSpoonEmpty();
    }

    private void Update()
    {
        if (!canUse || !isDragging || isSpoonFull) return;

        TryFillSpoonFromTahini();
    }

    public void CanUseSpoon(bool canUse)
    {
        this.canUse = canUse;

        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = canUse ? ItemType.Tahini : ItemType.None;
        }
    }

    public void CanUseSpoon()
    {
        CanUseSpoon(true);
    }
    public void CannotUseSpoon()
    {
        CanUseSpoon(false);
    }

    private void RegisterDragEvents()
    {
        if (hasRegisteredDragEvents || itemDraggable == null) return;

        itemDraggable.onBeginDrag.AddListener(OnBeginDragSpoon);
        itemDraggable.onDropSuccess.AddListener(OnDropSuccessSpoon);
        itemDraggable.onDropFail.AddListener(OnDropFailSpoon);
        hasRegisteredDragEvents = true;
    }

    private void OnBeginDragSpoon()
    {
        if (!canUse) return;

        isDragging = true;
        if (!isSpoonFull)
        {
            SetSpoonEmpty();
        }
    }

    private void OnDropSuccessSpoon()
    {
        isDragging = false;
    }

    private void OnDropFailSpoon()
    {
        isDragging = false;
        SetSpoonEmpty();
    }

    private void TryFillSpoonFromTahini()
    {
        if (mainCamera == null)
        {
            mainCamera = Camera.main;
        }

        if (mainCamera == null) return;

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, tahiniRayDistance);

        for (int i = 0; i < hits.Length; i++)
        {
            Item hitItem = ComponentCache<Item>.Get(hits[i].collider);
            if (hitItem == null || hitItem == this) continue;
            if (hitItem.itemType != ItemType.Tahini) continue;

            SetSpoonFull();
            return;
        }
    }

    private void SetSpoonFull()
    {
        isSpoonFull = true;
        Ply_SoundManager.Ins.PlayFx(FxType.Hummus);
        if (spoonFullSprite != null)
        {
            ChangeSprite(spoonFullSprite);
        }

        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = ItemType.Bowl;
        }
    }

    private void SetSpoonEmpty()
    {
        isSpoonFull = false;
        if (spoonEmptySprite != null)
        {
            ChangeSprite(spoonEmptySprite);
        }

        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = canUse ? ItemType.Tahini : ItemType.None;
        }
    }

    private void OnDestroy()
    {
        if (!hasRegisteredDragEvents || itemDraggable == null) return;

        itemDraggable.onBeginDrag.RemoveListener(OnBeginDragSpoon);
        itemDraggable.onDropSuccess.RemoveListener(OnDropSuccessSpoon);
        itemDraggable.onDropFail.RemoveListener(OnDropFailSpoon);
    }
}
