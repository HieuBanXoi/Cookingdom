using DG.Tweening;
using UnityEngine;

public class Spartula : Item
{
    [Header("Tongs")]
    public Item caughtItem; // Changed from FishFillet to generic Item
    public Transform foodPoint;
    public float catchDuration = 0.2f;
    public float raycastDistance = 100f;
    public LayerMask itemLayerMask;

    private Camera mainCamera;
    private Transform caughtItemOriginalParent; // Added to store original parent
    private bool isDragging;
    private bool isFoodReady;
    private Quaternion caughtItemRotationBeforeCatch; // Renamed
    private Vector3 caughtItemScaleBeforeCatch;       // Renamed
    private bool caughtItemWasBobbingBeforeCatch;     // Renamed

    private void OnEnable()
    {
        mainCamera = Camera.main;
        itemLayerMask = LayerMask.GetMask("Item");

        if (foodPoint == null)
        {
            foodPoint = transform.Find("FishPoint");
        }

        if (itemDraggable == null) return;

        itemDraggable.onBeginDrag.RemoveListener(OnBeginDrag);
        itemDraggable.onDropSuccess.RemoveListener(OnDropSuccess);
        itemDraggable.onDropFail.RemoveListener(OnDropFail);
        itemDraggable.onBeginDrag.AddListener(OnBeginDrag);
        itemDraggable.onDropSuccess.AddListener(OnDropSuccess);
        itemDraggable.onDropFail.AddListener(OnDropFail);
    }

    private void OnDisable()
    {
        isDragging = false;
        if (itemDraggable == null) return;

        itemDraggable.onBeginDrag.RemoveListener(OnBeginDrag);
        itemDraggable.onDropSuccess.RemoveListener(OnDropSuccess);
        itemDraggable.onDropFail.RemoveListener(OnDropFail);
    }

    private void Update()
    {
        if (!isDragging || mainCamera == null) return;
        
        if (caughtItem == null) // Check for generic caughtItem
        {
            TryCatchItem(); // Renamed method
        }
        else if (isFoodReady) // isFishReady now means isItemReady
        {
            TryMoveCaughtItemToTarget(); // Renamed method
        }
    }

    private void OnBeginDrag()
    {
        isFoodReady = false;
        isDragging = true;
    }

    private void OnDropSuccess()
    {
        isDragging = false;
    }

    private void OnDropFail()
    {
        isDragging = false;
        
        if (caughtItem == null) return;

        // Restore original rotation and scale before ItemDraggable takes over to return it.
        caughtItem.transform.rotation = caughtItemRotationBeforeCatch;
        SetWorldScale(caughtItem.transform, caughtItemScaleBeforeCatch);

        // Re-enable draggable so it can return to its returnTransform.
        if (caughtItem.itemDraggable != null)
        {
            caughtItem.itemDraggable.enabled = true;
        }

        // If it was an InWaterItem and was bobbing, restart bob effect.
        if (caughtItemWasBobbingBeforeCatch && caughtItem is InWaterItem inWaterItem)
        {
            inWaterItem.StartWaterEffects();
        }

        // Release the item from Spartula's control.
        ReleaseItem();
    }

    private void TryCatchItem() // Renamed method
    {
        // Raycast for any Item under the foodPoint
        Item hitItem = FindItemUnderFoodPoint();
        if(hitItem!=caughtItem)
        {
            return;
        }
        isFoodReady = false;
        caughtItemRotationBeforeCatch = caughtItem.transform.rotation;
        caughtItemScaleBeforeCatch = caughtItem.transform.lossyScale;
        caughtItemOriginalParent = caughtItem.transform.parent; // Store original parent

        // Stop bob effect if it's an InWaterItem
        caughtItemWasBobbingBeforeCatch = (caughtItem is InWaterItem inWaterItem) && inWaterItem.ply_BobEffect != null && inWaterItem.ply_BobEffect.isActiveAndEnabled;
        if (caughtItem is InWaterItem inWaterItemToStop) inWaterItemToStop.StopWaterEffects();

        if (caughtItem.itemDraggable != null)
        {
            caughtItem.itemDraggable.enabled = false;
        }
        animator.SetTrigger("Next");
        caughtItem.transform.DOKill();
        caughtItem.transform.SetParent(foodPoint, true);
        caughtItem.transform.DOLocalMove(Vector3.zero, catchDuration)
            .SetEase(Ease.OutQuad)
            .OnUpdate(() =>
            {
                caughtItem.transform.rotation = caughtItemRotationBeforeCatch;
                SetWorldScale(caughtItem.transform, caughtItemScaleBeforeCatch);
            })
            .OnComplete(() =>
            {
                caughtItem.transform.rotation = caughtItemRotationBeforeCatch;
                SetWorldScale(caughtItem.transform, caughtItemScaleBeforeCatch);
                isFoodReady = caughtItem == hitItem; // isItemReady
            });
    }

    private void TryMoveCaughtItemToTarget() // Renamed method
    {
        if (caughtItem == null || caughtItem.itemDraggable == null || caughtItem.itemMoveToTarget == null) return;

        ItemType targetType = caughtItem.itemDraggable.targetItemType;
        if (targetType == ItemType.None) return;

        // Use itemMoveToTarget.defaultTarget directly
        Transform defaultMoveTargetTransform = caughtItem.itemMoveToTarget.defaultTarget;
        if (defaultMoveTargetTransform == null) return;

        Item targetItemComponent = ComponentCache<Item>.Get(defaultMoveTargetTransform);
        if (targetItemComponent == null) return;

        // Check if the target type of the caught item matches the type of the default target.
        // This ensures the caught item is being moved to an appropriate place.
        if (caughtItem.itemDraggable.targetItemType != ItemType.None &&
            targetItemComponent.itemType != caughtItem.itemDraggable.targetItemType)
        {
            return;
        }

        Item itemToMove = caughtItem;
        ReleaseItem(); // Release from Spartula's control
        itemToMove.itemMoveToTarget.ExecuteMove(); // Use generic move
    }

    // Helper to find any item under the foodPoint
    private Item FindItemUnderFoodPoint()
    {
        if (foodPoint == null) return null;

        Ray ray = new Ray(foodPoint.position, mainCamera.transform.forward);
        Debug.DrawRay(ray.origin, ray.direction * raycastDistance, Color.red);
        RaycastHit[] hits = Physics.RaycastAll(
            ray,
            raycastDistance,
            itemLayerMask,
            QueryTriggerInteraction.Collide
        );

        for (int i = 0; i < hits.Length; i++)
        {
            Item hitItem = hits[i].collider.GetComponentInParent<Item>();
            if (hitItem != null && hitItem != this) // Find any item, not filtering by type here
            {
                return hitItem;
            }
        }

        return null;
    }

    private void ReleaseItem()
    {
        if (caughtItem != null)
        {
            caughtItem.transform.DOKill();
        }

        caughtItem = null;
        isFoodReady = false;
    }

    private static void SetWorldScale(Transform target, Vector3 worldScale)
    {
        if (target.parent == null)
        {
            target.localScale = worldScale;
            return;
        }

        Vector3 parentScale = target.parent.lossyScale;
        target.localScale = new Vector3(
            parentScale.x != 0f ? worldScale.x / parentScale.x : target.localScale.x,
            parentScale.y != 0f ? worldScale.y / parentScale.y : target.localScale.y,
            parentScale.z != 0f ? worldScale.z / parentScale.z : target.localScale.z
        );
    }
}