using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Fish : InWaterItem
{
    public Transform lastPlate;
    public GameObject waterFx;
    public GameObject fishIntestine;
    public GameObject fishBranchial;
    public Transform panPos;
    public GameObject fishOnPan;
    public GameObject oilTop;

    private Vector3 originalScale;
    private bool wasInWaterOnDrag;
    private bool isSubscribedToDragEvents;

    private void Awake()
    {
        // Item.Awake() được gọi trước, đã cache itemDraggable.
        // Chúng ta đăng ký các sự kiện kéo thả ở đây.
        SubscribeToDragEvents();
    }

    private void OnEnable()
    {
        // Đảm bảo đã đăng ký sự kiện khi object được bật lại.
        SubscribeToDragEvents();
    }

    private void OnDisable()
    {
        // Hủy đăng ký sự kiện để tránh memory leak.
        UnsubscribeFromDragEvents();
    }

    private void SubscribeToDragEvents()
    {
        if (itemDraggable != null && !isSubscribedToDragEvents)
        {
            itemDraggable.onBeginDrag.AddListener(OnBeginDragFish);
            itemDraggable.onDropSuccess.AddListener(OnDropSuccessFish);
            isSubscribedToDragEvents = true;
        }
    }

    private void UnsubscribeFromDragEvents()
    {
        if (itemDraggable != null && isSubscribedToDragEvents)
        {
            itemDraggable.onBeginDrag.RemoveListener(OnBeginDragFish);
            itemDraggable.onDropSuccess.RemoveListener(OnDropSuccessFish);
            isSubscribedToDragEvents = false;
        }
    }

    private void OnBeginDragFish()
    {
        if (isInWater)
        {
            wasInWaterOnDrag = true;
            originalScale = transform.localScale;
            transform.DOScale(1f, 0.2f);
            if (waterFx != null) waterFx.SetActive(true);
        }
        else
        {
            wasInWaterOnDrag = false;
        }
    }

    protected override void OnMoveToCuttingBoard()
    {
        ChangeItemType(ItemType.FishWet);
        animator.enabled = true;
        animator.SetTrigger("Wet");
    }

    private void OnDropSuccessFish()
    {
        // Khi thả thành công, không scale về cũ, chỉ tắt hiệu ứng.
        if (wasInWaterOnDrag)
        {
            if (waterFx != null) waterFx.SetActive(false);
            wasInWaterOnDrag = false; // Reset lại trạng thái
        }
    }

    public override void OnDragFailReturnComplete()
    {
        base.OnDragFailReturnComplete();

        // Khi thả thất bại và quay về vị trí cũ, scale về ban đầu và tắt hiệu ứng.
        if (wasInWaterOnDrag)
        {
            transform.DOScale(originalScale, 0.2f);
            if (waterFx != null) waterFx.SetActive(false);
            wasInWaterOnDrag = false; // Reset lại trạng thái
        }
    }

    public void EnablePlateTarget()
    {
        // ChangeItemType(ItemType.Fish);
        if (itemDraggable == null) return;

        itemDraggable.targetItemType = ItemType.Plate;
        itemMoveToTarget.defaultTarget = lastPlate;
    }

    private void ChangerItemType(ItemType newType)
    {
        itemType = newType;
    }
    public void ChangeToFishKnife()
    {
        ChangerItemType(ItemType.FishKnife);
    }
    public void ChangeWetFish()
    {
        ChangerItemType(ItemType.FishWet);
    }
    public void ChangeToFishSalt()
    {
        ChangerItemType(ItemType.FishSalt);
    }
    public void EnableFishIntestine()
    {
        if (fishIntestine != null) fishIntestine.SetActive(true);
    }
    public void EnableFishBranchial()
    {
        if (fishBranchial != null) fishBranchial.SetActive(true);
    }
    public void EnableClick()
    {
        if (itemClickable != null) itemClickable.enabled = true;
    }
    public void FishDone()
    {
        // Đánh dấu là đã cắt xong để logic của lớp cha (InWaterItem) cho phép kéo thả.
        isCutDone = true;

        if (itemDraggable != null) itemDraggable.enabled = true;
        itemDraggable.targetItemType = ItemType.PanBoiling;
        itemMoveToTarget.defaultTarget = panPos;
        animator.enabled = false;
        itemMoveToTarget.SetEndScale(0.85f);
        // Cập nhật lại trạng thái có thể kéo thả sau khi thay đổi state.
        UpdateDragAvailability();
            itemDraggable.onDropSuccess.RemoveListener(OnDropSuccessFish);

        itemDraggable.onDropSuccess.AddListener(() =>
        {
            if (fishOnPan != null) fishOnPan.SetActive(true);
            oilTop.SetActive(true);
            gameObject.SetActive(false);

        });

    }
}
