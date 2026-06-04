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

    private void ShowNextHandTut()
    {
        RemoveDoneAndNullItems();

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

    private void PrepareHand(Vector3 position)
    {
        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
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

    public void ItemDone(Item item)
    {
        if (item == null) return;

        item.isDone = true;
        items.Remove(item);
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
