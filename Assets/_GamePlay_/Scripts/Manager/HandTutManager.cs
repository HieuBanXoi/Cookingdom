using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HandTutManager : Ply_Singleton<HandTutManager>
{
    [Header("--- HAND TUTORIAL ---")]
    public List<Item> items = new List<Item>();
    public Transform knife;
    public Transform peeler;
    public GameObject handTutObject;
    public GameObject tapToCookObject;
    public Item oilItem;
    public Ply_ToggleEvent stoveToggleEvent;
    public Ply_ToggleEvent waterToggleEvent;
    public SinkBlock sinkBlock;
    public List<InWaterItem> itemsInWater = new List<InWaterItem>();
    public int noDelayItemCount = 3;
    public int breakHeartNoDelayThreshold = 3;
    [Tooltip("So lan hien hand tutorial toi da. De 0 de khong gioi han.")]
    [Min(0)] public int maxHandTutShowCount = 0;
    public bool showSinkWaterTutorialOnStart = true;
    public bool waitForBowlIntro = true;


    [Header("--- TIMING ---")]
    public float idleDelay = 5f;
    [Min(0f)] public float firstHandTutDelay = 5f;
    [Min(0f)] public float phaseHandTutDelay = 0f;
    public float moveDuration = 1.2f;
    public float dragFadeDuration = 0.2f;
    public float clickScaleDuration = 0.35f;
    public float waitAtEndDuration = 0.2f;

    [Header("--- DISPLAY ---")]
    public float handZPosition = -9f;
    public float clickScaleMultiplier = 1.25f;
    public Ease moveEase = Ease.InOutSine;

    private float idleTimer;
    private Vector3 defaultHandScale = Vector3.one;
    private SpriteRenderer handSpriteRenderer;
    private float defaultHandAlpha = 1f;
    private Sequence handSequence;
    private bool isWaitingTapToCook;
    private bool ignoreInputUntilRelease;
    private bool isWaitingStoveToggle;
    private bool hasCompletedStoveToggle;
    private bool hasStartedHandTut;
    private bool hasHiddenTapToCook;
    private bool isWaitingInitialSinkWaterTutorial;
    private int consecutiveBreakHeartDropFails;
    private int startupNoDelayTutorialCount;
    private int handTutShowCount;
    private bool hasShownFirstHandTut;
    private bool forceNoDelayForNextHandTut;
    private bool isWaitingPhaseHandTutDelay;
    private float phaseHandTutDelayTimer;
    private readonly List<Item> noDelayItems = new List<Item>();

    public bool ShouldBlockGameplayInput => isWaitingTapToCook || ignoreInputUntilRelease;

    public override void Awake()
    {
        base.Awake();

        if (handTutObject != null)
        {
            defaultHandScale = handTutObject.transform.localScale;
            handSpriteRenderer = handTutObject.GetComponentInChildren<SpriteRenderer>();
            if (handSpriteRenderer != null)
            {
                defaultHandAlpha = handSpriteRenderer.color.a;
            }

            handTutObject.SetActive(false);
        }
    }

    private void Start()
    {
        RemoveDoneAndNullItems();
        CacheNoDelayItems();
        isWaitingTapToCook = false;
        isWaitingInitialSinkWaterTutorial = showSinkWaterTutorialOnStart;
        hasStartedHandTut = isWaitingInitialSinkWaterTutorial || !waitForBowlIntro;
        if (tapToCookObject != null)
        {
            tapToCookObject.SetActive(waitForBowlIntro && !isWaitingInitialSinkWaterTutorial);
        }
    }

    private void Update()
    {
        if (handTutObject == null) return;

        if (!hasHiddenTapToCook && tapToCookObject != null && tapToCookObject.activeInHierarchy && HasPlayerInputDown())
        {
            hasHiddenTapToCook = true;
            tapToCookObject.SetActive(false);
        }

        if (!hasStartedHandTut) return;

        if (isWaitingPhaseHandTutDelay)
        {
            if (HasPlayerInput())
            {
                ResetIdleTimer();
            }

            phaseHandTutDelayTimer -= Time.deltaTime;
            if (phaseHandTutDelayTimer > 0f) return;

            isWaitingPhaseHandTutDelay = false;
            StartHandTutNoDelay();
            return;
        }

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

        if (GameManager.Ins != null && !GameManager.Ins.isPlaying && !GameManager.Ins.isLoseGame)
        {
            HideHandTut();
            return;
        }

        idleTimer += Time.deltaTime;
        float currentIdleDelay = ShouldSkipDelayForCurrentItem() ? 0f : GetCurrentIdleDelay();
        if (idleTimer >= currentIdleDelay && handSequence == null)
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
        hasStartedHandTut = true;
        ignoreInputUntilRelease = true;

        if (tapToCookObject != null)
        {
            tapToCookObject.SetActive(false);
        }

        ResetIdleTimer();
        ShowHandTutIfDelayCanBeSkipped();
    }

    public void StartHandTut()
    {
        hasStartedHandTut = true;
        isWaitingTapToCook = false;

        ResetIdleTimer();
        ShowHandTutIfDelayCanBeSkipped();
    }

    public void StartHandTutNoDelay()
    {
        hasStartedHandTut = true;
        isWaitingTapToCook = false;
        isWaitingPhaseHandTutDelay = false;
        forceNoDelayForNextHandTut = HasStartupNoDelayItemCount();

        ResetIdleTimer();
        ShowHandTutIfDelayCanBeSkipped();
    }

    public void StartHandTutAfterPhaseChange()
    {
        hasStartedHandTut = true;
        isWaitingTapToCook = false;
        HideHandTut();
        ResetIdleTimer();

        if (phaseHandTutDelay <= 0f)
        {
            StartHandTutNoDelay();
            return;
        }

        isWaitingPhaseHandTutDelay = true;
        phaseHandTutDelayTimer = phaseHandTutDelay;
        forceNoDelayForNextHandTut = false;
    }

    private void ShowHandTutIfDelayCanBeSkipped()
    {
        if (!ShouldSkipDelayForCurrentItem()) return;

        idleTimer = 0f;
        ShowNextHandTut();
    }

    private void ShowNextHandTut()
    {
        if (!CanShowMoreHandTut())
        {
            HideHandTut();
            return;
        }

        RemoveDoneAndNullItems();

        if (isWaitingInitialSinkWaterTutorial)
        {
            if (ShowSinkWaterHandTut(false))
            {
                return;
            }

            isWaitingInitialSinkWaterTutorial = false;
        }

        if (isWaitingStoveToggle)
        {
            if (stoveToggleEvent != null)
            {
                PlayClickHint(stoveToggleEvent.transform);
                return;
            }

            isWaitingStoveToggle = false;
        }

        Item targetItem = GetFirstTutorialReadyItem();
        if (targetItem == null)
        {
            if (!ShowSinkWaterHandTut(true))
            {
                HideHandTut();
            }

            return;
        }

        if (IsClickableReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            ConsumeForcedNoDelay();
            return;
        }

        if (IsDraggableReady(targetItem) && targetItem.itemMoveToTarget != null && targetItem.itemMoveToTarget.defaultTarget != null)
        {
            PlayMoveHint(targetItem.transform, targetItem.itemMoveToTarget.defaultTarget);
            ConsumeStartupNoDelayForItem(targetItem);
            ConsumeForcedNoDelay();
            return;
        }

        if (IsKnifeSpriteMaskCutterReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            ConsumeStartupNoDelayForItem(targetItem);
            ConsumeForcedNoDelay();
            return;
        }

        if (IsStirringReady(targetItem))
        {
            PlayStirringHint(targetItem.itemStirring);
            ConsumeStartupNoDelayForItem(targetItem);
            ConsumeForcedNoDelay();
            return;
        }

        if (IsDragSpriteMaskPainterReady(targetItem))
        {
            PlayMoveHint(targetItem.itemDragSpriteMaskPainter.GetTutorialStart(), targetItem.itemDragSpriteMaskPainter.GetTutorialTarget());
            ConsumeStartupNoDelayForItem(targetItem);
            ConsumeForcedNoDelay();
            return;
        }

        Transform targetTool = GetToolTargetingItem(targetItem);
        if (targetTool != null)
        {
            PlayMoveHint(targetTool, targetItem.transform);
            ConsumeStartupNoDelayForItem(targetItem);
            ConsumeForcedNoDelay();
        }
    }

    public bool CheckEndPhaseCondition()
    {
        return true;
    }

    private Item GetFirstTutorialReadyItem()
    {
        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            InWaterItem inWaterItem = item as InWaterItem;
            if (inWaterItem != null
                && inWaterItem.isOnCuttingBoard
                && !inWaterItem.isDone
                && CanShowTutorialForItem(inWaterItem))
            {
                return inWaterItem;
            }
        }

        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && item.onProcess && !item.isDone && CanShowTutorialForItem(item))
            {
                return item;
            }
        }

        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && !item.isDone && CanShowTutorialForItem(item))
            {
                return item;
            }
        }

        return null;
    }

    private bool CanShowTutorialForItem(Item item)
    {
        if (item == null || item.isDone) return false;
        if (!item.gameObject.activeInHierarchy) return false;

        if (IsClickableReady(item)) return true;
        if (IsKnifeSpriteMaskCutterReady(item)) return true;
        if (IsStirringReady(item)) return true;
        if (IsDragSpriteMaskPainterReady(item)) return true;

        if (IsDraggableReady(item))
        {
            return item.itemMoveToTarget != null && item.itemMoveToTarget.defaultTarget != null;
        }

        return GetToolTargetingItem(item) != null;
    }

    private bool IsClickableReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemClickable != null
            && item.itemClickable.enabled
            && item.itemClickable.canClick;
    }

    private bool IsDraggableReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemDraggable != null
            && item.itemDraggable.CanDrag();
    }

    private bool IsKnifeSpriteMaskCutterReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemKnifeSpriteMaskCutter != null
            && item.itemKnifeSpriteMaskCutter.enabled;
    }

    private bool IsStirringReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemStirring != null
            && item.itemStirring.enabled
            && item.itemStirring.gameObject.activeInHierarchy
            && !item.itemStirring.IsDone;
    }

    private bool IsDragSpriteMaskPainterReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemDragSpriteMaskPainter != null
            && item.itemDragSpriteMaskPainter.enabled
            && item.itemDragSpriteMaskPainter.gameObject.activeInHierarchy
            && !item.itemDragSpriteMaskPainter.IsPaintComplete
            && item.itemDragSpriteMaskPainter.GetTutorialTarget() != null
            && item.itemDragSpriteMaskPainter.GetTutorialTarget().gameObject.activeInHierarchy
            && IsDraggableReady(item);
    }

    private Transform GetToolTargetingItem(Item item)
    {
        if (item == null) return null;

        if (IsToolTargetingItem(knife, item)) return knife;
        if (IsToolTargetingItem(peeler, item)) return peeler;

        return null;
    }

    private bool IsToolTargetingItem(Transform tool, Item item)
    {
        if (tool == null || item == null || !tool.gameObject.activeInHierarchy) return false;

        ItemMoveToTarget toolMoveToTarget = ComponentCache<ItemMoveToTarget>.Get(tool);
        return toolMoveToTarget != null && toolMoveToTarget.defaultTarget == item.transform;
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
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayStirringHint(ItemStirring itemStirring)
    {
        if (itemStirring == null) return;

        if (itemStirring.movementMode == StirMovementMode.Line)
        {
            PlayMoveHint(itemStirring.GetTutorialLineStartPosition(), itemStirring.GetTutorialLineEndPosition());
            return;
        }

        PlayCircleHint(itemStirring.GetTutorialCenterPosition(), itemStirring.GetTutorialRadius());
    }

    private void PlayMoveHint(Vector3 start, Vector3 end)
    {
        PrepareHand(start);
        Vector3 endPosition = Get2DHandPosition(end);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOMove(endPosition, moveDuration).SetEase(moveEase));
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayCircleHint(Vector3 center, float radius)
    {
        float angle = 0f;
        float safeRadius = Mathf.Max(0.01f, radius);
        Vector3 startPosition = center + new Vector3(safeRadius, 0f, 0f);

        PrepareHand(startPosition);

        handSequence = DOTween.Sequence();
        handSequence.Append(DOTween.To(() => angle, value =>
        {
            angle = value;
            Vector3 position = center + new Vector3(Mathf.Cos(angle), Mathf.Sin(angle), 0f) * safeRadius;
            handTutObject.transform.position = Get2DHandPosition(position);
        }, Mathf.PI * 2f, moveDuration).SetEase(Ease.Linear));
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PrepareHand(Vector3 position)
    {
        RegisterHandTutShown();

        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
        SetHandAlpha(defaultHandAlpha);
        handTutObject.SetActive(true);
    }

    private bool CanShowMoreHandTut()
    {
        return maxHandTutShowCount <= 0 || handTutShowCount < maxHandTutShowCount;
    }

    private void RegisterHandTutShown()
    {
        hasShownFirstHandTut = true;

        if (maxHandTutShowCount <= 0) return;

        handTutShowCount++;
    }

    private Vector3 Get2DHandPosition(Vector3 position)
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
        SetHandAlpha(defaultHandAlpha);
        handTutObject.SetActive(false);
    }

    private void SetHandAlpha(float alpha)
    {
        if (handSpriteRenderer == null) return;

        Color color = handSpriteRenderer.color;
        color.a = alpha;
        handSpriteRenderer.color = color;
    }

    private void ResetIdleTimer()
    {
        idleTimer = 0f;
    }

    private float GetCurrentIdleDelay()
    {
        return hasShownFirstHandTut ? idleDelay : firstHandTutDelay;
    }

    private void CacheNoDelayItems()
    {
        noDelayItems.Clear();

        for (int i = 0; i < items.Count && noDelayItems.Count < noDelayItemCount; i++)
        {
            if (items[i] != null)
            {
                noDelayItems.Add(items[i]);
            }
        }
    }

    private bool ShouldSkipDelayForCurrentItem()
    {
        if (isWaitingInitialSinkWaterTutorial) return HasStartupNoDelayItemCount();
        if (isWaitingStoveToggle) return false;

        Item targetItem = GetFirstTutorialReadyItem();
        if (targetItem != null)
        {
            if (IsClickableReady(targetItem)) return false;

            return forceNoDelayForNextHandTut || ShouldUseStartupNoDelayForItem(targetItem);
        }

        if (forceNoDelayForNextHandTut) return true;

        return HasInWaterItemNeedingHandTut();
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

    public void ItemDone(Item item)
    {
        if (item == null) return;

        item.isDone = true;
        items.Remove(item);
        RegisterCorrectAction();
        if (!hasCompletedStoveToggle && oilItem != null && item == oilItem)
        {
            StartStoveToggleTutorial();
        }

        HideHandTut();
        ResetIdleTimer();
    }

    public void OilDone()
    {
        if (oilItem != null)
        {
            ItemDone(oilItem);
            return;
        }

        StartStoveToggleTutorial();
        HideHandTut();
        ResetIdleTimer();
    }

    private void StartStoveToggleTutorial()
    {
        isWaitingStoveToggle = true;
        ignoreInputUntilRelease = true;
    }

    public void StoveToggleDone(Ply_ToggleEvent toggleEvent)
    {
        if (stoveToggleEvent != null && toggleEvent != stoveToggleEvent) return;

        hasCompletedStoveToggle = true;
        isWaitingStoveToggle = false;
        RegisterCorrectAction();
        HideHandTut();
        ResetIdleTimer();
    }

    public void WaterToggleDone(Ply_ToggleEvent toggleEvent)
    {
        if (waterToggleEvent == null) return;
        if (waterToggleEvent != null && toggleEvent != waterToggleEvent) return;

        isWaitingInitialSinkWaterTutorial = false;
        RegisterCorrectAction();
        HideHandTut();
        ResetIdleTimer();
    }

    public void SinkBlockMoveDone(SinkBlock movedSinkBlock)
    {
        if (sinkBlock != null && movedSinkBlock != sinkBlock) return;
        if (!isWaitingInitialSinkWaterTutorial && !HasInWaterItemNeedingHandTut()) return;

        forceNoDelayForNextHandTut = true;
        HideHandTut();
        ResetIdleTimer();
    }

    public void RegisterBreakHeartDropFail()
    {
        consecutiveBreakHeartDropFails++;

        if (consecutiveBreakHeartDropFails >= breakHeartNoDelayThreshold)
        {
            forceNoDelayForNextHandTut = true;
            ResetIdleTimer();
        }
    }

    public void RegisterCorrectAction()
    {
        consecutiveBreakHeartDropFails = 0;
        forceNoDelayForNextHandTut = false;
    }

    public void RegisterItemInWater(InWaterItem item)
    {
        if (item == null || itemsInWater.Contains(item)) return;

        itemsInWater.Add(item);
        forceNoDelayForNextHandTut = true;
        ResetIdleTimer();
    }

    public void UnregisterItemInWater(InWaterItem item)
    {
        if (item == null) return;

        itemsInWater.Remove(item);
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

    private bool ShowSinkWaterHandTut(bool requireInWaterItem)
    {
        if (requireInWaterItem && !HasInWaterItemNeedingHandTut()) return false;

        if (sinkBlock != null && !sinkBlock.IsInside)
        {
            PlayMoveHint(sinkBlock.transform, sinkBlock.insideDefaultTarget);
            ConsumeStartupNoDelay();
            ConsumeForcedNoDelay();
            return true;
        }

        if (ShouldShowWaterToggleHandTut())
        {
            PlayClickHint(waterToggleEvent.transform);
            ConsumeStartupNoDelay();
            ConsumeForcedNoDelay();
            return true;
        }

        if (!requireInWaterItem)
        {
            isWaitingInitialSinkWaterTutorial = false;
        }

        return false;
    }

    private bool HasInWaterItemNeedingHandTut()
    {
        for (int i = itemsInWater.Count - 1; i >= 0; i--)
        {
            InWaterItem item = itemsInWater[i];
            if (item == null || item.isDone || !item.isInWater || item.isOnPlate)
            {
                itemsInWater.RemoveAt(i);
                continue;
            }

            return true;
        }

        return false;
    }

    private bool ShouldShowWaterToggleHandTut()
    {
        if (waterToggleEvent == null) return false;

        Sink sink = sinkBlock != null ? sinkBlock.sink : null;
        return sink == null || !sink.isWaterDrop;
    }

    private void ConsumeForcedNoDelay()
    {
        if (forceNoDelayForNextHandTut)
        {
            forceNoDelayForNextHandTut = false;
        }
    }

    private bool ShouldUseStartupNoDelayForItem(Item item)
    {
        return item != null
            && HasStartupNoDelayItemCount()
            && startupNoDelayTutorialCount < noDelayItemCount
            && noDelayItems.Contains(item);
    }

    private bool HasStartupNoDelayItemCount()
    {
        return noDelayItemCount > 0;
    }

    private void ConsumeStartupNoDelay()
    {
        if (startupNoDelayTutorialCount < noDelayItemCount)
        {
            startupNoDelayTutorialCount++;
        }
    }

    private void ConsumeStartupNoDelayForItem(Item item)
    {
        if (ShouldUseStartupNoDelayForItem(item))
        {
            ConsumeStartupNoDelay();
        }
    }
}
