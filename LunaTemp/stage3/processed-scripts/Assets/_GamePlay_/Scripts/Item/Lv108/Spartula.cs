using DG.Tweening;
using UnityEngine;

public class Spartula : Item
{
    [Header("Tongs")]
    public Item carriedItem;
    public Transform fishPoint;
    public float catchDuration = 0.2f;
    public float raycastDistance = 100f;
    public LayerMask itemLayerMask;

    private Camera mainCamera;
    private bool isDragging;
    private bool isItemReady;
    private Quaternion carriedItemRotationBeforeCatch;
    private Vector3 carriedItemBaseWorldScale;
    private bool hasCarriedItemBaseWorldScale;

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

        if (carriedItem == null)
        {
            TryCatchItem();
            return;
        }

        if (isItemReady)
        {
            TryMoveCaughtItemToTarget();
        }
    }

    private void OnBeginDrag()
    {
        carriedItem = null;
        isItemReady = false;
        isDragging = true;
    }

    private void OnDropSuccess()
    {
        isDragging = false;
    }

    private void OnDropFail()
    {
        isDragging = false;

        if (carriedItem == null) return;

        Item itemToReturn = carriedItem;
        ReleaseCarriedItem();
        ReturnItemToStart(itemToReturn);
    }

    private void TryCatchItem()
    {
        if (fishPoint == null)
        {
            Debug.LogWarning($"[Tongs] {name} cannot find FishPoint.");
            return;
        }

        Item hitItem = FindItemByType(ItemType.FishDone);
        if (hitItem == null || hitItem == this) return;

        carriedItem = hitItem;
        isItemReady = false;
        carriedItemRotationBeforeCatch = carriedItem.transform.rotation;
        if (!hasCarriedItemBaseWorldScale)
        {
            carriedItemBaseWorldScale = carriedItem.transform.lossyScale;
            hasCarriedItemBaseWorldScale = true;
        }

        if (carriedItem.itemDraggable != null)
        {
            carriedItem.itemDraggable.enabled = false;
        }
        itemDraggable.TurnOnSpawnBreakHeartOnFailed(false);
        carriedItem.transform.DOKill();
        carriedItem.transform.SetParent(fishPoint, true);
        carriedItem.transform.DOLocalMove(Vector3.zero, catchDuration)
            .SetEase(Ease.OutQuad)
            .OnUpdate(() =>
            {
                carriedItem.transform.rotation = carriedItemRotationBeforeCatch;
                SetWorldScale(carriedItem.transform, carriedItemBaseWorldScale);
            })
            .OnComplete(() =>
            {
                carriedItem.transform.rotation = carriedItemRotationBeforeCatch;
                SetWorldScale(carriedItem.transform, carriedItemBaseWorldScale);
                isItemReady = carriedItem == hitItem;
            });
    }

    private void TryMoveCaughtItemToTarget()
    {
        if (carriedItem == null || carriedItem.itemDraggable == null) return;

        ItemType targetType = carriedItem.itemDraggable.targetItemType;
        if (targetType == ItemType.None) return;

        Item target = FindItemByType(targetType);
        if (target == null) return;

        Item itemToMove = carriedItem;
        carriedItem.ChangeItemType(ItemType.None);
        ReleaseCarriedItem();

        if (itemToMove.itemMoveToTarget != null)
        {
            itemToMove.itemMoveToTarget.ExecuteMove3D(target.transform);
        }
        else
        {
            itemToMove.transform.SetParent(target.transform, true);
            itemToMove.transform.position = target.transform.position;
        }

        if (itemToMove.itemDraggable != null)
        {
            itemToMove.itemDraggable.enabled = true;
        }
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

    private void ReleaseCarriedItem()
    {
        if (carriedItem != null)
        {
            carriedItem.transform.DOKill();
        }

        carriedItem = null;
        isItemReady = false;
    }

    private void ReturnItemToStart(Item itemToReturn)
    {
        if (itemToReturn == null) return;

        if (itemToReturn.itemDraggable != null)
        {
            itemToReturn.itemDraggable.enabled = true;
            itemToReturn.itemDraggable.ReturnToStart();
        }
        else
        {
            itemToReturn.transform.DOKill();
        }
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