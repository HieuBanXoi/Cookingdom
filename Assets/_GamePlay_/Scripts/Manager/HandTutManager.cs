using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HandTutManager : Ply_Singleton<HandTutManager>
{
    private enum TutorialAction
    {
        None,
        Click,
        Drag,
        Stir,
        Knife
    }

    [Header("--- HAND TUTORIAL ---")]
    public List<Item> items = new List<Item>();
    public Transform knife;
    public GameObject handTutObject;
    public GameObject tapToCookObject;
    public Item oilItem;
    public Ply_ToggleEvent stoveToggleEvent;


    [Header("--- TIMING ---")]
    public float idleDelay = 5f;
    public float moveDuration = 1.2f;
    public float dragFadeDuration = 0.2f;
    public float clickScaleDuration = 0.35f;
    public float waitAtEndDuration = 0.2f;
    public float stirLoopDuration = 1.5f;

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
    private bool isWaitingStoveForFish;
    private bool hasCompletedStoveToggle;
    private bool hasHiddenTapToCook;
    private bool wasCurrentTutorialBusy;
    private Item currentTutorialItem;
    private TutorialAction currentTutorialAction;
    private readonly HashSet<Item> immediateTutorialItems = new HashSet<Item>();
    private readonly HashSet<Item> usedImmediateTutorialItems = new HashSet<Item>();
    private bool currentTutorialIsImmediate;
    private Item priorityTutorialItem;

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
        CacheImmediateTutorialItems();
        RemoveDoneAndNullItems();
        isWaitingTapToCook = false;
        if (tapToCookObject != null)
        {
            tapToCookObject.SetActive(true);
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

        if (GameManager.Ins != null
            && !GameManager.Ins.isPlaying
            && !GameManager.Ins.isLoseGame)
        {
            HideHandTut();
            return;
        }

        bool shouldShowStoveTutorial = ShouldShowStoveTutorialForFish();
        if (shouldShowStoveTutorial && !isWaitingStoveToggle)
        {
            isWaitingStoveToggle = true;
            isWaitingStoveForFish = true;
            HideHandTut();
            ResetIdleTimer();
            return;
        }

        if (isWaitingStoveForFish && !shouldShowStoveTutorial)
        {
            isWaitingStoveToggle = false;
            isWaitingStoveForFish = false;
            HideHandTut();
            ResetIdleTimer();
            return;
        }

        if (IsCurrentTutorialTemporarilyBusy())
        {
            wasCurrentTutorialBusy = true;
            HideHandTut();
            return;
        }

        if (wasCurrentTutorialBusy)
        {
            wasCurrentTutorialBusy = false;
            ShowNextHandTut();
            return;
        }

        Item readyItem = GetFirstTutorialReadyItem();
        TutorialAction readyAction = GetTutorialAction(readyItem);
        if (!isWaitingStoveToggle
            && (readyItem != currentTutorialItem || readyAction != currentTutorialAction))
        {
            ShowNextHandTut();
            return;
        }

        if (!isWaitingStoveToggle && handSequence == null && currentTutorialIsImmediate)
        {
            ShowNextHandTut();
            return;
        }

        idleTimer += Time.deltaTime;
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
        ShowNextHandTut();
    }

    public void StartHandTut()
    {
        isWaitingTapToCook = false;

        if (tapToCookObject != null)
        {
            tapToCookObject.SetActive(false);
        }

        ResetIdleTimer();
        ShowNextHandTut();
    }

    private void ShowNextHandTut()
    {
        RemoveDoneAndNullItems();

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
        TutorialAction action = GetTutorialAction(targetItem);
        bool tutorialChanged = targetItem != currentTutorialItem
            || action != currentTutorialAction;

        if (tutorialChanged)
        {
            HideHandTut();
            currentTutorialIsImmediate = targetItem != null
                && immediateTutorialItems.Contains(targetItem)
                && !usedImmediateTutorialItems.Contains(targetItem);

            if (currentTutorialIsImmediate)
            {
                usedImmediateTutorialItems.Add(targetItem);
            }
        }

        currentTutorialItem = targetItem;
        currentTutorialAction = action;

        if (targetItem == null)
        {
            HideHandTut();
            return;
        }

        if (tutorialChanged && !currentTutorialIsImmediate)
        {
            ResetIdleTimer();
            return;
        }

        ShowTutorial(targetItem, action);
    }

    private bool ShouldShowStoveTutorialForFish()
    {
        if (stoveToggleEvent == null) return false;

        for (int i = 0; i < items.Count; i++)
        {
            if (!(items[i] is FishFillet fish) || fish.pan == null)
            {
                continue;
            }

            bool needsStoveOn = fish.itemDraggable != null
                && fish.itemDraggable.targetItemType == ItemType.PanBoiling
                && fish.pan.isOilIn
                && !fish.pan.isTurnOnStove;
            bool needsStoveOff = fish.pan.IsFishCooked && fish.pan.isTurnOnStove;
            if (needsStoveOn || needsStoveOff)
            {
                return true;
            }
        }

        return false;
    }

    private void CacheImmediateTutorialItems()
    {
        immediateTutorialItems.Clear();

        for (int i = 0; i < items.Count && immediateTutorialItems.Count < 3; i++)
        {
            if (items[i] != null)
            {
                immediateTutorialItems.Add(items[i]);
            }
        }
    }

    private bool IsCurrentTutorialTemporarilyBusy()
    {
        if (!(currentTutorialItem is FishFillet)
            || currentTutorialAction != TutorialAction.Click)
        {
            return false;
        }

        ItemClickable clickable = currentTutorialItem.itemClickable;
        return clickable != null && clickable.enabled && !clickable.canClick;
    }

    private void ShowTutorial(Item targetItem, TutorialAction action)
    {
        if (targetItem == null
            || targetItem != currentTutorialItem
            || action != currentTutorialAction
            || GetTutorialAction(targetItem) != action)
        {
            return;
        }

        if (action == TutorialAction.Click)
        {
            Transform clickTarget = targetItem is Blender blender && blender.button != null
                ? blender.button.transform
                : targetItem.transform;
            PlayClickHint(clickTarget);
            return;
        }

        if (action == TutorialAction.Drag && TryGetDragHintTarget(targetItem, out Transform dragTarget))
        {
            if (targetItem is Tongs
                && TryGetTongsFinalTarget(dragTarget, out Transform finalTarget))
            {
                PlayMoveHint(targetItem.transform, dragTarget, finalTarget);
                return;
            }

            PlayMoveHint(targetItem.transform, dragTarget);
            return;
        }

        if (action == TutorialAction.Stir)
        {
            PlayStirHint(targetItem.itemStirring);
            return;
        }

        if (action == TutorialAction.Knife)
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
        return true;
    }

    private Item GetFirstTutorialReadyItem()
    {
        if (priorityTutorialItem != null
            && priorityTutorialItem.gameObject.activeInHierarchy
            && !priorityTutorialItem.isDone
            && CanShowTutorialForItem(priorityTutorialItem))
        {
            return priorityTutorialItem;
        }

        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null
                && item.gameObject.activeInHierarchy
                && !item.isDone
                && CanShowTutorialForItem(item))
            {
                return item;
            }
        }

        return null;
    }

    private bool CanShowTutorialForItem(Item item)
    {
        return GetTutorialAction(item) != TutorialAction.None;
    }

    private TutorialAction GetTutorialAction(Item item)
    {
        if (item == null || item.isDone) return TutorialAction.None;

        if (IsClickableReady(item)) return TutorialAction.Click;
        if (IsDraggableReady(item) && TryGetDragHintTarget(item, out _)) return TutorialAction.Drag;
        if (IsStirringReady(item)) return TutorialAction.Stir;
        if (IsKnifeSpriteMaskCutterReady(item)) return TutorialAction.Knife;
        if (knife != null) return TutorialAction.Knife;

        return TutorialAction.None;
    }

    private bool IsClickableReady(Item item)
    {
        return item.itemClickable != null && item.itemClickable.enabled && item.itemClickable.canClick;
    }

    private bool IsDraggableReady(Item item)
    {
        if (item.itemDraggable == null || !item.itemDraggable.CanDrag()) return false;

        if (item is Tongs tongs)
        {
            return GetTongsFishTarget(tongs) != null;
        }

        return true;
    }

    private bool TryGetDragHintTarget(Item item, out Transform target)
    {
        target = null;
        if (!IsDraggableReady(item)) return false;

        if (item is Tongs tongs)
        {
            target = GetTongsFishTarget(tongs);
            return target != null;
        }

        if (item.itemMoveToTarget != null)
        {
            target = item.itemMoveToTarget.defaultTarget;
        }

        return target != null;
    }

    private Transform GetTongsFishTarget(Tongs tongs)
    {
        if (tongs != null
            && tongs.fishFillet != null
            && tongs.fishFillet.itemType == ItemType.Fish)
        {
            return tongs.fishFillet.transform;
        }

        return FindItemTransformByType(ItemType.Fish, tongs);
    }

    private static bool TryGetTongsFinalTarget(Transform fishTransform, out Transform finalTarget)
    {
        finalTarget = null;
        if (fishTransform == null) return false;

        Item fish = ComponentCache<Item>.Get(fishTransform);
        if (fish == null || fish.itemMoveToTarget == null) return false;

        finalTarget = fish.itemMoveToTarget.defaultTarget;
        return finalTarget != null;
    }

    private Transform FindItemTransformByType(ItemType itemType, Item excludedItem)
    {
        for (int i = 0; i < items.Count; i++)
        {
            Item candidate = items[i];
            if (candidate != null && candidate != excludedItem && candidate.itemType == itemType)
            {
                return candidate.transform;
            }
        }

        return null;
    }

    private bool IsStirringReady(Item item)
    {
        return item.itemStirring != null
            && item.itemStirring.enabled
            && !item.itemStirring.IsDone;
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
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayMoveHint(Transform start, Transform middle, Transform end)
    {
        if (start == null || middle == null || end == null) return;

        PrepareHand(start.position);
        Vector3 middlePosition = Get2DHandPosition(middle.position);
        Vector3 endPosition = Get2DHandPosition(end.position);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOMove(middlePosition, moveDuration).SetEase(moveEase));
        handSequence.Append(handTutObject.transform.DOMove(endPosition, moveDuration).SetEase(moveEase));
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayStirHint(ItemStirring stirring)
    {
        if (stirring == null) return;

        Transform centerTransform = stirring.centerPoint != null
            ? stirring.centerPoint
            : stirring.transform;
        Vector3 center = Get2DHandPosition(centerTransform.position);
        float radius = Mathf.Max(stirring.stirRadius, 0.1f);
        const int pointCount = 8;
        Vector3[] path = new Vector3[pointCount + 1];

        for (int i = 0; i <= pointCount; i++)
        {
            float angle = Mathf.PI * 2f * i / pointCount;
            path[i] = center + new Vector3(Mathf.Cos(angle), Mathf.Sin(angle), 0f) * radius;
        }

        PrepareHand(path[0]);
        handSequence = DOTween.Sequence();
        handSequence.Append(
            handTutObject.transform
                .DOPath(path, stirLoopDuration, PathType.CatmullRom)
                .SetEase(Ease.Linear)
        );
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PrepareHand(Vector3 position)
    {
        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
        SetHandAlpha(defaultHandAlpha);
        handTutObject.SetActive(true);
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

    private void RemoveDoneAndNullItems()
    {
        for (int i = items.Count - 1; i >= 0; i--)
        {
            Item item = items[i];
            if (item == null || item.isDone && !ShouldKeepItemInTutorialList(item))
            {
                items.RemoveAt(i);
            }
        }
    }

    public void ItemDone(Item item)
    {
        if (item == null) return;

        if (priorityTutorialItem == item)
        {
            priorityTutorialItem = null;
        }

        if (ShouldKeepItemInTutorialList(item))
        {
            item.isDone = false;
        }
        else
        {
            item.isDone = true;
            items.RemoveAll(candidate => candidate == item);
        }

        if (!hasCompletedStoveToggle && oilItem != null && item == oilItem)
        {
            StartStoveToggleTutorial();
            return;
        }

        HideHandTut();
        ResetIdleTimer();
        ShowNextHandTut();
    }

    private static bool ShouldKeepItemInTutorialList(Item item)
    {
        return item is FishFillet || item is Tongs;
    }

    public void OilDone()
    {
        if (oilItem != null)
        {
            ItemDone(oilItem);
            return;
        }

        StartStoveToggleTutorial();
    }

    private void StartStoveToggleTutorial()
    {
        isWaitingStoveToggle = true;
        isWaitingStoveForFish = false;
        ignoreInputUntilRelease = true;
        HideHandTut();
        ResetIdleTimer();
    }

    public void StoveToggleDone(Ply_ToggleEvent toggleEvent)
    {
        if (stoveToggleEvent != null && toggleEvent != stoveToggleEvent) return;

        hasCompletedStoveToggle = true;
        isWaitingStoveToggle = ShouldShowStoveTutorialForFish();
        isWaitingStoveForFish = isWaitingStoveToggle;
        HideHandTut();
        ResetIdleTimer();
        currentTutorialItem = null;
        currentTutorialAction = TutorialAction.None;
        currentTutorialIsImmediate = false;
    }

    public void OnPhaseChanged()
    {
        priorityTutorialItem = null;
        items.RemoveAll(item => item == null || item is FishFillet || item is Tongs);
        immediateTutorialItems.Clear();
        usedImmediateTutorialItems.Clear();

        for (int i = 0; i < items.Count && immediateTutorialItems.Count < 2; i++)
        {
            Item item = items[i];
            if (item != null
                && item.gameObject.activeInHierarchy
                && !item.isDone)
            {
                immediateTutorialItems.Add(item);
            }
        }

        currentTutorialItem = null;
        currentTutorialAction = TutorialAction.None;
        currentTutorialIsImmediate = false;
        isWaitingStoveToggle = false;
        isWaitingStoveForFish = false;
        wasCurrentTutorialBusy = false;
        HideHandTut();
        ResetIdleTimer();
    }

    public void ItemReady(Item item)
    {
        if (item == null || !items.Contains(item)) return;

        priorityTutorialItem = item;
        currentTutorialItem = null;
        currentTutorialAction = TutorialAction.None;
        currentTutorialIsImmediate = false;
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
