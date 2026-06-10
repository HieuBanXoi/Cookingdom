using DG.Tweening;
using UnityEngine;

public class Tongs : Item
{
    [Header("Tongs")]
    public FishFillet fishFillet;
    public Transform fishPoint;
    public float catchDuration = 0.2f;
    public float raycastDistance = 100f;
    public LayerMask itemLayerMask;

    private Camera mainCamera;
    private bool isDragging;
    private bool isFishReady;
    private Quaternion fishRotationBeforeCatch;
    private Vector3 fishScaleBeforeCatch;
    private bool fishWasBobbingBeforeCatch;

    private void OnEnable()
    {
        mainCamera = Camera.main;
        itemLayerMask = LayerMask.GetMask("Item");

        if (fishPoint == null)
        {
            fishPoint = transform.Find("FishPoint");
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

        if (fishFillet == null)
        {
            TryCatchFish();
            return;
        }

        if (isFishReady)
        {
            TryMoveFishToTarget();
        }
    }

    private void OnBeginDrag()
    {
        fishFillet = null;
        isFishReady = false;
        isDragging = true;
    }

    private void OnDropSuccess()
    {
        isDragging = false;
    }

    private void OnDropFail()
    {
        isDragging = false;

        if (fishFillet == null) return;
        if (!fishFillet.HasMoveTarget(fishFillet.currentStep - 1))
        {
            Debug.LogWarning($"[Tongs] {fishFillet.name} cannot return to its previous move target.");
            return;
        }

        FishFillet fishToReturn = fishFillet;
        ReleaseFish();
        fishToReturn.ReturnToPreviousTarget(
            fishRotationBeforeCatch,
            fishScaleBeforeCatch,
            fishWasBobbingBeforeCatch
        );
    }

    private void TryCatchFish()
    {
        Item hitItem = FindItemByType(ItemType.Fish);
        if (hitItem == null || !hitItem.TryGetComponent(out FishFillet fish)) return;

        if (fishPoint == null)
        {
            Debug.LogWarning($"[Tongs] {name} cannot find FishPoint.");
            return;
        }

        fishFillet = fish;
        isFishReady = false;
        fishRotationBeforeCatch = fish.transform.rotation;
        fishScaleBeforeCatch = fish.transform.lossyScale;
        fishWasBobbingBeforeCatch = fish.StopBobEffectForCatch();

        if (fish.itemDraggable != null)
        {
            fish.itemDraggable.enabled = false;
        }

        fish.transform.DOKill();
        fish.transform.SetParent(fishPoint, true);
        fish.transform.DOLocalMove(Vector3.zero, catchDuration)
            .SetEase(Ease.OutQuad)
            .OnUpdate(() =>
            {
                fish.transform.rotation = fishRotationBeforeCatch;
                SetWorldScale(fish.transform, fishScaleBeforeCatch);
            })
            .OnComplete(() =>
            {
                fish.transform.rotation = fishRotationBeforeCatch;
                SetWorldScale(fish.transform, fishScaleBeforeCatch);
                isFishReady = fishFillet == fish;
            });
    }

    private void TryMoveFishToTarget()
    {
        if (fishFillet.itemDraggable == null) return;

        ItemType targetType = fishFillet.itemDraggable.targetItemType;
        if (targetType == ItemType.None) return;
        if (!fishFillet.HasMoveTarget(fishFillet.currentStep)) return;

        Item target = FindItemByType(targetType);
        if (target == null) return;

        FishFillet caughtFish = fishFillet;
        caughtFish.ChangeItemType(ItemType.None);
        ReleaseFish();
        caughtFish.MoveToTarget();
    }

    private Item FindItemByType(ItemType targetType)
    {
        if (fishPoint == null) return null;

        Ray ray = new Ray(fishPoint.position, mainCamera.transform.forward);
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
            if (hitItem != null && hitItem != this && hitItem.itemType == targetType)
            {
                return hitItem;
            }
        }

        return null;
    }

    private void ReleaseFish()
    {
        if (fishFillet != null)
        {
            fishFillet.transform.DOKill();
        }

        fishFillet = null;
        isFishReady = false;
    }

    private static void SetWorldScale(Transform target, [Bridge.Ref] Vector3 worldScale)
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
