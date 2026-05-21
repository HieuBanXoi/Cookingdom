using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HandTutManager : Ply_Singleton<HandTutManager>
{
    [Header("--- HAND TUTORIAL ---")]
    public List<Item> items = new List<Item>();
    public Transform knife;
    public GameObject handTutObject;
    public GameObject tapToCookObject;

    [Header("--- IN WATER TUTORIAL ---")]
    public List<InWaterItem> inWaterItems = new List<InWaterItem>();
    public Sink sink;
    public ItemDraggable napBonNgoai;
    public ItemDraggable napBonTrong;
    public Ply_ToggleEvent waterToggle;

    [Header("--- TIMING ---")]
    public float idleDelay = 5f;
    public float moveDuration = 1.2f;
    public float clickScaleDuration = 0.35f;
    public float waitAtEndDuration = 0.2f;

    [Header("--- DISPLAY ---")]
    public float handZPosition = -9f;
    public float clickScaleMultiplier = 1.25f;
    public Ease moveEase = Ease.InOutSine;

    private float idleTimer;
    private Vector3 defaultHandScale = Vector3.one;
    private Sequence handSequence;
    private bool isWaitingEndPhaseCondition;
    private bool isInitialSinkTutorialActive = true;
    private bool isWaitingTapToCook;
    private bool ignoreInputUntilRelease;

    public bool ShouldBlockGameplayInput => isWaitingTapToCook || ignoreInputUntilRelease;

    public override void Awake()
    {
        base.Awake();

        if (handTutObject != null)
        {
            defaultHandScale = handTutObject.transform.localScale;
            handTutObject.SetActive(false);
        }
    }

    private void Start()
    {
        RemoveDoneAndNullItems();
        RemoveDoneAndNullInWaterItems();
        isWaitingTapToCook = tapToCookObject != null && tapToCookObject.activeInHierarchy;
    }

    private void Update()
    {
        if (handTutObject == null) return;

        if (isWaitingTapToCook)
        {
            if (HasPlayerInputDown())
            {
                StartHandTutAfterTapToCook();
            }

            return;
        }

        if (ignoreInputUntilRelease)
        {
            if (HasPlayerInput()) return;

            ignoreInputUntilRelease = false;
        }

        if (HasPlayerInput())
        {
            ResetIdleTimer();
            HideHandTut();
            return;
        }

        if (GameManager.Ins != null && !GameManager.Ins.isPlaying)
        {
            HideHandTut();
            return;
        }

        idleTimer += Time.deltaTime;
        if (isInitialSinkTutorialActive && handSequence == null)
        {
            if (TryShowInitialSinkHandTut())
            {
                idleTimer = 0f;
                return;
            }
        }

        if (idleTimer >= idleDelay && handSequence == null)
        {
            idleTimer = 0f;
            ShowNextHandTut();
        }
    }

    private bool HasPlayerInput()
    {
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButton(0) || Input.GetMouseButtonUp(0)) return true;

        for (int i = 0; i < Input.touchCount; i++)
        {
            TouchPhase phase = Input.GetTouch(i).phase;
            if (phase == TouchPhase.Began || phase == TouchPhase.Moved || phase == TouchPhase.Stationary || phase == TouchPhase.Ended)
            {
                return true;
            }
        }

        return false;
    }

    private bool HasPlayerInputDown()
    {
        if (Input.GetMouseButtonDown(0)) return true;

        for (int i = 0; i < Input.touchCount; i++)
        {
            if (Input.GetTouch(i).phase == TouchPhase.Began)
            {
                return true;
            }
        }

        return false;
    }

    private void StartHandTutAfterTapToCook()
    {
        isWaitingTapToCook = false;
        ignoreInputUntilRelease = true;

        if (tapToCookObject != null)
        {
            tapToCookObject.SetActive(false);
        }

        ResetIdleTimer();
        if (isInitialSinkTutorialActive && TryShowInitialSinkHandTut())
        {
            return;
        }

        ShowNextHandTut();
    }

    private void ShowNextHandTut()
    {
        RemoveDoneAndNullItems();
        RemoveDoneAndNullInWaterItems();

        if (TryShowEndPhaseConditionHandTut())
        {
            return;
        }

        if (TryShowInWaterHandTut())
        {
            return;
        }

        Item targetItem = GetProcessingItem();
        if (targetItem == null)
        {
            targetItem = GetFirstNotDoneItem();
        }

        if (targetItem == null)
        {
            HideHandTut();
            return;
        }

        if (IsClickableReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            return;
        }

        if (IsDraggableReady(targetItem) && targetItem.itemMoveToTarget != null && targetItem.itemMoveToTarget.defaultTarget != null)
        {
            PlayMoveHint(targetItem.transform, targetItem.itemMoveToTarget.defaultTarget);
            return;
        }

        if (IsKnifeSpriteMaskCutterReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            return;
        }

        if (knife != null)
        {
            PlayMoveHint(knife, targetItem.transform);
        }
    }

    public bool CheckEndPhaseCondition()
    {
        if (sink == null || !sink.gameObject.activeInHierarchy)
        {
            isWaitingEndPhaseCondition = false;
            return true;
        }

        isWaitingEndPhaseCondition = sink.isWaterDrop;
        return !isWaitingEndPhaseCondition;
    }

    private bool TryShowEndPhaseConditionHandTut()
    {
        if (!isWaitingEndPhaseCondition)
        {
            return false;
        }

        if (sink == null || !sink.gameObject.activeInHierarchy)
        {
            isWaitingEndPhaseCondition = false;
            return false;
        }

        if (PhaseManager.Ins != null && !PhaseManager.Ins.IsCurrentPhaseStepComplete())
        {
            isWaitingEndPhaseCondition = false;
            return false;
        }

        if (sink.isWaterDrop && waterToggle != null)
        {
            PlayClickHint(waterToggle.transform);
            return true;
        }

        isWaitingEndPhaseCondition = false;
        return false;
    }

    private bool TryShowInWaterHandTut()
    {
        InWaterItem processingItem = GetProcessingInWaterItem();
        if (processingItem == null)
        {
            return false;
        }

        InWaterItem draggableItem = GetReadyDraggableInWaterItem();
        if (draggableItem != null)
        {
            PlayMoveHint(draggableItem.transform, draggableItem.itemMoveToTarget.defaultTarget);
            return true;
        }

        if (sink == null)
        {
            return false;
        }

        if (!sink.isClose)
        {
            return TryPlayDraggableHint(napBonNgoai);
        }

        if (!sink.isWaterIn && waterToggle != null)
        {
            PlayClickHint(waterToggle.transform);
            return true;
        }

        return false;
    }

    private bool TryShowInitialSinkHandTut()
    {
        if (sink == null || !sink.gameObject.activeInHierarchy)
        {
            isInitialSinkTutorialActive = false;
            return false;
        }

        if (sink.isClose && sink.isWaterIn)
        {
            isInitialSinkTutorialActive = false;
            return false;
        }

        if (!sink.isClose)
        {
            return TryPlayDraggableHint(napBonNgoai);
        }

        if (!sink.isWaterIn && waterToggle != null)
        {
            PlayClickHint(waterToggle.transform);
            return true;
        }

        return false;
    }

    private InWaterItem GetProcessingInWaterItem()
    {
        for (int i = 0; i < inWaterItems.Count; i++)
        {
            InWaterItem item = inWaterItems[i];
            if (item != null && item.onProcess && !item.isDone)
            {
                return item;
            }
        }

        return null;
    }

    private InWaterItem GetReadyDraggableInWaterItem()
    {
        for (int i = 0; i < inWaterItems.Count; i++)
        {
            InWaterItem item = inWaterItems[i];
            if (item == null || !item.onProcess || item.isDone) continue;

            if (IsDraggableReady(item) && item.itemMoveToTarget != null && item.itemMoveToTarget.defaultTarget != null)
            {
                return item;
            }
        }

        return null;
    }

    private bool TryPlayDraggableHint(ItemDraggable draggable)
    {
        if (draggable == null || !draggable.enabled || !draggable.isDraggable)
        {
            return false;
        }

        Item item = ComponentCache<Item>.Get(draggable.transform);
        if (item == null || item.itemMoveToTarget == null || item.itemMoveToTarget.defaultTarget == null)
        {
            return false;
        }

        PlayMoveHint(draggable.transform, item.itemMoveToTarget.defaultTarget);
        return true;
    }

    private Item GetProcessingItem()
    {
        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && item.onProcess && !item.isDone)
            {
                return item;
            }
        }

        return null;
    }

    private Item GetFirstNotDoneItem()
    {
        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && !item.isDone)
            {
                return item;
            }
        }

        return null;
    }

    private bool IsClickableReady(Item item)
    {
        return item.itemClickable != null && item.itemClickable.enabled && item.itemClickable.canClick;
    }

    private bool IsDraggableReady(Item item)
    {
        return item.itemDraggable != null && item.itemDraggable.enabled && item.itemDraggable.isDraggable;
    }

    private bool IsKnifeSpriteMaskCutterReady(Item item)
    {
        return item.itemKnifeSpriteMaskCutter != null && item.itemKnifeSpriteMaskCutter.enabled;
    }

    private void PlayClickHint(Transform target)
    {
        if (target == null) return;

        PrepareHand(target.position);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOScale(defaultHandScale * clickScaleMultiplier, clickScaleDuration).SetEase(Ease.OutSine));
        handSequence.Append(handTutObject.transform.DOScale(defaultHandScale, clickScaleDuration).SetEase(Ease.InSine));
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayMoveHint(Transform start, Transform end)
    {
        if (start == null || end == null) return;

        PrepareHand(start.position);
        Vector3 endPosition = Get2DHandPosition(end.position);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOMove(endPosition, moveDuration).SetEase(moveEase));
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PrepareHand([Bridge.Ref] Vector3 position)
    {
        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
        handTutObject.SetActive(true);
    }

    private Vector3 Get2DHandPosition([Bridge.Ref] Vector3 position)
    {
        return new Vector3(position.x, position.y, handZPosition);
    }

    private void HideHandTut()
    {
        if (handSequence != null)
        {
            handSequence.Kill();
            handSequence = null;
        }

        if (handTutObject == null) return;

        handTutObject.transform.DOKill();
        handTutObject.transform.localScale = defaultHandScale;
        handTutObject.SetActive(false);
    }

    private void ResetIdleTimer()
    {
        idleTimer = 0f;
    }

    private void RemoveDoneAndNullItems()
    {
        for (int i = items.Count - 1; i >= 0; i--)
        {
            if (items[i] == null || items[i].isDone)
            {
                items.RemoveAt(i);
            }
        }
    }

    private void RemoveDoneAndNullInWaterItems()
    {
        for (int i = inWaterItems.Count - 1; i >= 0; i--)
        {
            if (inWaterItems[i] == null || inWaterItems[i].isDone)
            {
                inWaterItems.RemoveAt(i);
            }
        }
    }

    public void ItemDone(Item item)
    {
        if (item == null) return;

        item.isDone = true;
        items.Remove(item);
        InWaterItem inWaterItem = item as InWaterItem;
        if (inWaterItem != null)
        {
            inWaterItems.Remove(inWaterItem);
        }

        HideHandTut();
        ResetIdleTimer();
    }

    public void ItemDone(Transform itemTransform)
    {
        if (itemTransform == null) return;

        Item item = ComponentCache<Item>.Get(itemTransform);
        ItemDone(item);
    }

    public void ItemDone(GameObject itemObject)
    {
        if (itemObject == null) return;

        Item item = ComponentCache<Item>.Get(itemObject.transform);
        ItemDone(item);
    }
}
