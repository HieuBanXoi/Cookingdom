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
    public Item oilItem;
    public Ply_ToggleEvent stoveToggleEvent;
    public int noDelayItemCount = 3;
    public bool waitForBowlIntro = true;


    [Header("--- TIMING ---")]
    public float idleDelay = 5f;
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
        hasStartedHandTut = !waitForBowlIntro;
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

        if (!hasStartedHandTut) return;

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
        float currentIdleDelay = ShouldSkipDelayForCurrentItem() ? 0f : idleDelay;
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
        ShowNextHandTut();
    }

    public void StartHandTut()
    {
        hasStartedHandTut = true;
        isWaitingTapToCook = false;

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
        return true;
    }

    private Item GetFirstTutorialReadyItem()
    {
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

        if (IsClickableReady(item)) return true;
        if (IsKnifeSpriteMaskCutterReady(item)) return true;

        if (IsDraggableReady(item))
        {
            return item.itemMoveToTarget != null && item.itemMoveToTarget.defaultTarget != null;
        }

        return knife != null;
    }

    private bool IsClickableReady(Item item)
    {
        return item.itemClickable != null && item.itemClickable.enabled && item.itemClickable.canClick;
    }

    private bool IsDraggableReady(Item item)
    {
        return item.itemDraggable != null && item.itemDraggable.CanDrag();
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

    private void PrepareHand([Bridge.Ref] Vector3 position)
    {
        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
        SetHandAlpha(defaultHandAlpha);
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
        if (isWaitingStoveToggle) return false;

        Item targetItem = GetFirstTutorialReadyItem();
        return targetItem != null && noDelayItems.Contains(targetItem);
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