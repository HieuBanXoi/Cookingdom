using UnityEngine;

public class SinkBlock : Item
{
    [Header("--- SINK ---")]
    public Sink sink;
    public bool startsInside;

    [Header("--- INSIDE TARGET ---")]
    public ItemType insideTargetType = ItemType.NapTrongBon;
    public Transform insideDefaultTarget;

    [Header("--- OUTSIDE TARGET ---")]
    public Transform outsideDefaultTarget;

    private bool isInside;
    private bool isMoving;
    private bool initialized;

    public bool IsInside => isInside;

    private void Start()
    {
        Initialize();
    }

    private void OnEnable()
    {
        if (initialized)
        {
            Subscribe();
            UpdateDragAvailability();
        }
    }

    private void OnDisable()
    {
        Unsubscribe();
    }

    private void Initialize()
    {
        if (initialized) return;

        itemDraggable = GetComponent<ItemDraggable>();
        itemMoveToTarget = GetComponent<ItemMoveToTarget>();
        isInside = startsInside;
        initialized = true;

        Subscribe();
        ApplyCurrentLocation();

        if (sink != null)
        {
            if (isInside)
            {
                sink.Close();
            }
            else
            {
                sink.Open();
            }
        }

        UpdateDragAvailability();
    }

    private void Subscribe()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(HandleDropSuccess);
            itemDraggable.onDropSuccess.AddListener(HandleDropSuccess);
            itemDraggable.onDropFail.RemoveListener(HandleDropFail);
            itemDraggable.onDropFail.AddListener(HandleDropFail);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
            itemMoveToTarget.onComplete.AddListener(HandleMoveComplete);
        }
    }

    private void Unsubscribe()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(HandleDropSuccess);
            itemDraggable.onDropFail.RemoveListener(HandleDropFail);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
        }
    }

    private void HandleDropSuccess()
    {
        if (!isInside)
        {
            MoveToNextLocation();
            return;
        }

        itemDraggable.ReturnToStartWithoutHeart();
    }

    private void HandleDropFail()
    {
        if (!isInside || itemMoveToTarget == null || outsideDefaultTarget == null) return;

        itemDraggable.ConsumeCurrentDropFail();
        MoveToNextLocation();
    }

    private void MoveToNextLocation()
    {
        if (isMoving || itemMoveToTarget == null) return;

        Transform destination = isInside ? outsideDefaultTarget : insideDefaultTarget;
        if (destination == null)
        {
            Debug.LogWarning("[SinkBlock] Missing destination target.", this);
            return;
        }

        isMoving = true;
        UpdateDragAvailability();
        itemMoveToTarget.ExecuteMove3D(destination);
    }

    private void HandleMoveComplete()
    {
        isMoving = false;
        isInside = !isInside;
        ApplyCurrentLocation();

        if (sink != null)
        {
            if (isInside)
            {
                sink.Close();
            }
            else
            {
                sink.Open();
            }
        }

        UpdateDragAvailability();
    }

    private void ApplyCurrentLocation()
    {
        if (itemDraggable == null || itemMoveToTarget == null) return;

        Transform currentLocation = isInside ? insideDefaultTarget : outsideDefaultTarget;
        Transform nextLocation = isInside ? outsideDefaultTarget : insideDefaultTarget;

        itemDraggable.targetItemType = insideTargetType;
        itemDraggable.returnTransform = currentLocation;
        itemMoveToTarget.SetDefaultTarget(nextLocation);
    }

    private void UpdateDragAvailability()
    {
        if (itemDraggable == null) return;

        itemDraggable.isDraggable = !isMoving;
    }
}
