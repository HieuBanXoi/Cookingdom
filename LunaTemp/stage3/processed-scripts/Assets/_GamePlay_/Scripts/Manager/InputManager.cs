using UnityEngine;

public class InputManager : Ply_Singleton<InputManager>
{

    public LayerMask toggleButtonLayerMask;
    public LayerMask defaultLayer;
    public LayerMask itemLayer;
    public bool isDragging = false;

    private ItemDraggable currentDraggable;
    private ItemStirring currentStirring;
    private ItemSpriteMaskPainter currentSpriteMaskPainter;



    private void Update()
    {
        if (HandTutManager.Ins != null && HandTutManager.Ins.ShouldBlockGameplayInput)
        {
            return;
        }

        if (!GameManager.Ins.isPlaying && !isDragging)
        {
            return;
        }

        if (Input.GetMouseButtonDown(0) && GameManager.Ins.isPlaying)
        {
            HandleMouseDown();
        }

        if (Input.GetMouseButton(0))
        {
            HandleMouseDrag();
        }

        if (Input.GetMouseButtonUp(0))
        {
            HandleMouseUp();
        }
    }

    private void HandleMouseDown()
    {
        Camera mainCamera = Camera.main;
        if (mainCamera == null) return;

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);

        if (TryHandleCapybara(ray))
        {
            return;
        }

        if (TryHandleToggleButton(ray))
        {
            return;
        }

        RaycastHit[] hits = Physics.RaycastAll(ray, 100f, itemLayer);

        if (hits.Length == 0) return;

        Item interactableItem = GetClosestInteractableItem(hits);

        if (interactableItem != null)
        {
            bool isInteracted = false;

            if (interactableItem.itemDraggable != null && interactableItem.itemDraggable.enabled)
            {
                currentDraggable = interactableItem.itemDraggable;
                currentDraggable.BeginDrag();
                isDragging = true;
                isInteracted = true;
            }
            else if (interactableItem.itemStirring != null && interactableItem.itemStirring.enabled)
            {
                currentStirring = interactableItem.itemStirring;
                currentStirring.BeginStir();
                isDragging = true;
                isInteracted = true;
            }
            else if (interactableItem.itemSpriteMaskPainter != null && interactableItem.itemSpriteMaskPainter.enabled)
            {
                currentSpriteMaskPainter = interactableItem.itemSpriteMaskPainter;
                currentSpriteMaskPainter.BeginPaint();
                isDragging = true;
                isInteracted = true;
            }
            else if (interactableItem.itemKnifeSpriteMaskCutter != null && interactableItem.itemKnifeSpriteMaskCutter.enabled)
            {
                interactableItem.itemKnifeSpriteMaskCutter.PerformCut();
                isInteracted = true;
            }
            else if (interactableItem.itemClickable != null && interactableItem.itemClickable.enabled)
            {
                interactableItem.itemClickable.PerformClick();
                isInteracted = true;
            }

            if (isInteracted)
            {
                if (GameManager.Ins != null) GameManager.Ins.TurnOffTut();
                if (Ply_TransformConveyor.Ins != null) Ply_TransformConveyor.Ins.isMoving = true;
            }
        }
    }

    private Item GetClosestInteractableItem(RaycastHit[] hits)
    {
        Item interactableItem = null;
        float minDistance = float.MaxValue;

        for (int i = 0; i < hits.Length; i++)
        {
            Item hitItem = ComponentCache<Item>.Get(hits[i].collider);
            if (hitItem == null || !CanInteract(hitItem)) continue;

            if (hits[i].distance < minDistance)
            {
                minDistance = hits[i].distance;
                interactableItem = hitItem;
            }
        }

        return interactableItem;
    }

    private bool CanInteract(Item item)
    {
        return item.itemDraggable != null && item.itemDraggable.enabled
            || item.itemStirring != null && item.itemStirring.enabled
            || item.itemSpriteMaskPainter != null && item.itemSpriteMaskPainter.enabled
            || item.itemKnifeSpriteMaskCutter != null && item.itemKnifeSpriteMaskCutter.enabled
            || item.itemClickable != null && item.itemClickable.enabled;
    }

    private bool TryHandleCapybara([Bridge.Ref] Ray ray)
    {
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);
        if (hits.Length == 0) return false;

        Capybara closestCapybara = null;
        float minDistance = float.MaxValue;

        for (int i = 0; i < hits.Length; i++)
        {
            Capybara capybara = hits[i].collider.GetComponentInParent<Capybara>();
            if (capybara == null) continue;

            if (hits[i].distance < minDistance)
            {
                minDistance = hits[i].distance;
                closestCapybara = capybara;
            }
        }

        if (closestCapybara == null) return false;

        closestCapybara.ClickCapybara();
        return true;
    }

    private bool TryHandleToggleButton([Bridge.Ref] Ray ray)
    {
        if (!Physics.Raycast(ray, out RaycastHit hit, 100f, toggleButtonLayerMask)) return false;

        Ply_ToggleEvent toggleEvent = hit.collider.GetComponentInParent<Ply_ToggleEvent>();
        if (toggleEvent == null || !toggleEvent.enabled || !toggleEvent.applyStateOnClick) return false;

        toggleEvent.ApplyState();
        if (HandTutManager.Ins != null)
        {
            HandTutManager.Ins.StoveToggleDone(toggleEvent);
        }

        return true;
    }

    private void HandleMouseDrag()
    {
        if (currentDraggable != null) currentDraggable.Drag();
        else if (currentStirring != null) currentStirring.Stir();
        else if (currentSpriteMaskPainter != null) currentSpriteMaskPainter.Paint();
    }

    private void HandleMouseUp()
    {
        if (currentDraggable != null) { currentDraggable.EndDrag(); currentDraggable = null; }
        if (currentStirring != null) { currentStirring.EndStir(); currentStirring = null; }
        if (currentSpriteMaskPainter != null) { currentSpriteMaskPainter.EndPaint(); currentSpriteMaskPainter = null; }
        isDragging = false;
    }
}
