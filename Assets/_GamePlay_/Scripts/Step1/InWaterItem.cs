using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class InWaterItem : Item
{
    [Header("--- WATER ITEM TARGETS ---")]
    public Transform waterTarget;
    public Transform cuttingBoardTarget;
    public Transform plateTarget;
    public Transform[] childObject;

    public Ply_TimerEvent ply_TimerEvent;
    public Ply_BobEffect ply_BobEffect;
    public Collider collider1;
    public Sink sink;
    public bool isInWater = false;
    public bool isOnCuttingBoard = false;
    public bool isOnPlate = false;
    public bool isClean = false;
    public bool isCutDone = false;

    [Header("--- JUMP TO PLATE ---")]
    public float jumpToPlatePower = 1f;
    public float jumpToPlateDuration = 0.5f;
    public Vector3 platePunchScale = new Vector3(0.1f, -0.1f, 0f);
    public float platePunchDuration = 0.3f;

    [Header("--- EVENTS ---")]
    public UnityEvent onMoveToCuttingBoardComplete;

    private bool initialized;
    private bool isMoving;
    private MoveDestination moveDestination;

    private enum MoveDestination
    {
        Water,
        CuttingBoard,
        Plate
    }

    private void Start()
    {
        InitializeMovement();
    }

    private void OnEnable()
    {
        if (initialized)
        {
            SubscribeMovementEvents();
        }
    }

    private void OnDisable()
    {
        UnsubscribeMovementEvents();
    }

    private void LateUpdate()
    {
        if (isMoving) return;

        if (isOnPlate && plateTarget != null)
        {
            transform.position = plateTarget.position;
        }
        else if (isOnCuttingBoard && cuttingBoardTarget != null)
        {
            transform.position = cuttingBoardTarget.position;
        }
    }

    public void StartTimer()
    {
        if (sink != null && sink.isWaterIn && isInWater && !isOnPlate && !isClean)
        {
            ply_TimerEvent?.StartTimer();
        }
    }

    public void StartWaterEffects()
    {
        if (sink == null || !sink.isWaterIn || !isInWater || isOnPlate) return;

        if (ply_BobEffect != null)
        {
            ply_BobEffect.enabled = true;
            ply_BobEffect.CacheStartPosition();
            ply_BobEffect.Play();
        }

        if (!isClean)
        {
            ply_TimerEvent?.StartTimer();
        }
    }

    public void StopWaterEffects()
    {
        ply_BobEffect?.Stop();
        ply_TimerEvent?.StopTimer();
    }

    public override bool ShouldPlayBobEffectAfterReturn()
    {
        if (!isInWater) return true;

        return sink != null && sink.isWaterIn;
    }

    public void SetClean()
    {
        isClean = true;
        isCutDone = false;
        ply_TimerEvent?.StopTimer();
        ConfigureNextTarget();
    }

    public void CutDone()
    {
        InitializeMovement();
        if (!isOnCuttingBoard || isOnPlate || isMoving) return;
        itemType = ItemType.None;
        isCutDone = true;
        itemClickable.enabled = false;
        if (ply_BobEffect != null)
        {
            ply_BobEffect.Stop(false);
            ply_BobEffect.enabled = false;
        }
        JumpToPlate();
    }

    public void PlayAnim(bool isTrue)
    {
        if (!isInWater || isOnPlate || ply_BobEffect == null) return;

        if (isTrue)
        {
            ply_BobEffect.enabled = true;
            ply_BobEffect.CacheStartPosition();
            ply_BobEffect.Play();
        }
        else
        {
            ply_BobEffect.Stop();
        }
    }

    public void MoveToWater()
    {
        if (sink.isWaterIn &&  !isInWater)
        {
            SpawnWaterSplash(sink.waterSplashPos.position);
        }
        if(itemMoveToTarget != null)
        {
            itemMoveToTarget.rotate360DuringJump = false;
        }
        OnMoveIntoWaterComplete();
    }

    public void MoveToCurrentTarget()
    {
        InitializeMovement();
        if (isMoving || itemMoveToTarget == null) return;

        moveDestination = GetNextDestination();
        Transform destination = GetDestinationTarget(moveDestination);
        if (destination == null)
        {
            Debug.LogWarning(
                $"[InWaterItem] {name} is missing the {moveDestination} target.",
                this
            );
            return;
        }

        if (moveDestination == MoveDestination.Plate)
        {
            JumpToPlate();
            return;
        }

        if (moveDestination == MoveDestination.CuttingBoard && ply_BobEffect != null)
        {
            ply_BobEffect.Stop(false);
            ply_BobEffect.enabled = false;
        }

        isMoving = true;
        UpdateDragAvailability();
        itemMoveToTarget.ExecuteMove3D(destination);
    }

    private void JumpToPlate()
    {
        if (plateTarget == null)
        {
            Debug.LogWarning($"[InWaterItem] {name} is missing the Plate target.", this);
            return;
        }

        isMoving = true;
        if (itemDraggable != null)
        {
            itemDraggable.returnTransform = plateTarget;
            itemDraggable.targetItemType = ItemType.None;
            itemDraggable.enabled = false;
        }
        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.SetDefaultTarget(plateTarget);
        }
        UpdateDragAvailability();

        transform.DOKill();
        transform.DOJump(plateTarget.position, jumpToPlatePower, 1, jumpToPlateDuration)
            .SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                transform.DOKill();
                transform.position = plateTarget.position;
                isMoving = false;
                OnMoveToPlateComplete();
                plateTarget.DOPunchScale(platePunchScale, platePunchDuration);
                UpdateDragAvailability();
            });
    }

    public void OnMoveIntoWaterComplete()
    {
        isInWater = true;
        isOnCuttingBoard = false;
        isOnPlate = false;
        onProcess = true;

        if (sink != null)
        {
            sink.RegisterInWaterItem(this);
            if (sink.isWaterIn)
            {
                StartWaterEffects();
            }
        }

        ConfigureNextTarget();
    }

    public void OnMoveToCuttingBoardComplete()
    {
        ply_BobEffect?.Stop(false);
        ply_TimerEvent?.StopTimer();
        sink?.UnregisterInWaterItem(this);
        transform.DOKill();
        transform.position = cuttingBoardTarget.position;

        isInWater = false;
        isOnCuttingBoard = true;
        isOnPlate = false;
        onProcess = true;
        itemType = ItemType.FoodOnCuttingBoard;

        CuttingBoard cuttingBoard = GetTargetItem(cuttingBoardTarget) as CuttingBoard;
        cuttingBoard?.IsFoodOn(true);
        cuttingBoard?.Punch();

        ConfigureNextTarget();
        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;
        }
        onMoveToCuttingBoardComplete?.Invoke();
    }

    public void OnMoveToPlateComplete()
    {
        ply_BobEffect?.Stop(false);
        ply_TimerEvent?.StopTimer();
        sink?.UnregisterInWaterItem(this);

        CuttingBoard cuttingBoard = GetTargetItem(cuttingBoardTarget) as CuttingBoard;
        cuttingBoard?.IsFoodOn(false);

        isInWater = false;
        isOnCuttingBoard = false;
        isOnPlate = true;
        onProcess = false;

        if (itemDraggable != null)
        {
            itemDraggable.returnTransform = plateTarget;
            itemDraggable.targetItemType = ItemType.None;
        }
    }

    private void InitializeMovement()
    {
        if (initialized) return;

        itemDraggable = GetComponent<ItemDraggable>();
        itemMoveToTarget = GetComponent<ItemMoveToTarget>();
        initialized = true;

        SubscribeMovementEvents();
        ConfigureNextTarget();
        UpdateDragAvailability();
    }

    private void SubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(MoveToCurrentTarget);
            itemDraggable.onDropSuccess.AddListener(MoveToCurrentTarget);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
            itemMoveToTarget.onComplete.AddListener(HandleMoveComplete);
        }
    }

    private void UnsubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(MoveToCurrentTarget);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
        }
    }

    private void HandleMoveComplete()
    {
        isMoving = false;

        switch (moveDestination)
        {
            case MoveDestination.Water:
                OnMoveIntoWaterComplete();
                break;

            case MoveDestination.CuttingBoard:
                OnMoveToCuttingBoardComplete();
                break;

            case MoveDestination.Plate:
                OnMoveToPlateComplete();
                break;
        }

        UpdateDragAvailability();
    }

    private void ConfigureNextTarget()
    {
        if (itemDraggable == null || itemMoveToTarget == null) return;

        if (isInWater && !isClean)
        {
            itemDraggable.targetItemType = ItemType.None;
            itemDraggable.returnTransform = waterTarget;
            itemMoveToTarget.SetDefaultTarget(null);
            return;
        }

        MoveDestination nextDestination = GetNextDestination();
        Transform nextTarget = GetDestinationTarget(nextDestination);
        Item targetItem = nextDestination == MoveDestination.Water
            ? sink
            : GetTargetItem(nextTarget);

        if (targetItem != null)
        {
            itemDraggable.targetItemType = targetItem.itemType;
        }
        else if (nextDestination == MoveDestination.Water)
        {
            Debug.LogWarning(
                $"[InWaterItem] {name} needs a Sink reference to use as its initial drop target.",
                this
            );
        }

        itemMoveToTarget.SetDefaultTarget(nextTarget);

        if (isOnPlate)
        {
            itemDraggable.returnTransform = plateTarget;
        }
        else if (isOnCuttingBoard)
        {
            itemDraggable.returnTransform = cuttingBoardTarget;
        }
        else if (isInWater)
        {
            itemDraggable.returnTransform = waterTarget;
        }
    }

    private MoveDestination GetNextDestination()
    {
        if (!isClean) return MoveDestination.Water;
        if (!isCutDone) return MoveDestination.CuttingBoard;

        return MoveDestination.Plate;
    }

    private Transform GetDestinationTarget(MoveDestination destination)
    {
        switch (destination)
        {
            case MoveDestination.Water:
                return waterTarget;

            case MoveDestination.CuttingBoard:
                return cuttingBoardTarget;

            case MoveDestination.Plate:
                return plateTarget;

            default:
                return null;
        }
    }

    private Item GetTargetItem(Transform target)
    {
        if (target == null) return null;

        Item targetItem = ComponentCache<Item>.Get(target);
        if (targetItem == null)
        {
            Debug.LogWarning(
                $"[InWaterItem] Target {target.name} needs an Item component to provide ItemType.",
                target
            );
        }

        return targetItem;
    }

    private void UpdateDragAvailability()
    {
        if (itemDraggable == null) return;

        itemDraggable.isDraggable = !isMoving
            && !isOnPlate
            && (!isOnCuttingBoard || isCutDone);
    }

    public void ResetChildRotate()
    {
        if(childObject != null)
        {
            for(int i = 0; i < childObject.Length; i++)
            {
                childObject[i].DORotate(new Vector3(0,0,0),0.1f);
            }
        }
    }
    public void EnableKnife()
    {
        HandTutManager.Ins.knife.gameObject.SetActive(true);
    }
    public void EnablePeeler()
    {
        HandTutManager.Ins.peeler.gameObject.SetActive(true);
    }
}
