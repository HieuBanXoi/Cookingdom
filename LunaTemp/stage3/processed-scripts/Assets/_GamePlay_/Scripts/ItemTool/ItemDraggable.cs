using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

[RequireComponent(typeof(Collider))] // Chuyển sang Collider 3D
public class ItemDraggable : MonoBehaviour
{
    [Header("--- CÀI ĐẶT DRAG 3D ---")]
    public bool isDraggable = true;
    public bool isUseOrderlayer = false;
    public Transform returnTransform;
    public bool setParentToReturnTransform = true;
    public bool returnToExactReturnTransformPosition = true;
    public ItemType targetItemType;
    public Item item;
    public bool checkState = false;
    public GameObject shadowObject;

    [Header("--- RETURN TO START SOUND ---")]
    public bool playReturnToStartFinishSound = false;
    public FxType returnToStartFinishFxType = FxType.Wrong;

    [Tooltip("Khi nhấc lên, vật sẽ nhích lại gần Camera (hoặc bay cao lên) bao nhiêu để không kẹt vào bàn?")]
    public float liftOffset = 1.0f;

    [Header("--- SỰ KIỆN ---")]
    public UnityEvent onBeginDrag;
    public UnityEvent onDropSuccess;
    public UnityEvent onDropFail;

    private Transform originalParent;
    private Vector3 originalLocalPos;
    private Vector3 originalScale;
    private float originalZ;
    private Vector3 offset;
    private float zCoord;
    private Camera mainCam;
    private Collider myCollider;
    private Renderer myRenderer;
    private Ply_BobEffect bobEffect;
    private int originalSortingOrder;
    private bool shadowDefaultActive;
    private Tween scaleTween;
    private bool hasOriginalScale;


    void Start()
    {
        item = ComponentCache<Item>.Get(transform);
        mainCam = Camera.main;
        myCollider = ComponentCache<Collider>.Get(transform);
        bobEffect = ComponentCache<Ply_BobEffect>.Get(transform);
        originalParent = transform.parent;
        originalLocalPos = transform.localPosition;
        originalScale = transform.localScale;
        hasOriginalScale = true;
        originalZ = transform.position.z;
        myRenderer = GetComponentInChildren<Renderer>();
        if (myRenderer != null)
        {
            originalSortingOrder = myRenderer.sortingOrder;
        }
        if (shadowObject != null)
        {
            shadowDefaultActive = shadowObject.activeSelf;
        }
    }

    public void ReturnToStart()
    {
        Tween returnTween = null;

        transform.DOKill();

        if (bobEffect != null && bobEffect.isActiveAndEnabled)
        {
            bobEffect.Stop(false);
        }

        if (returnTransform != null)
        {
            if (setParentToReturnTransform)
            {
                transform.SetParent(returnTransform);
                Vector3 localTargetPos = returnToExactReturnTransformPosition ? Vector3.zero : new Vector3(0, 0, originalLocalPos.z);
                returnTween = transform.DOLocalMove(localTargetPos, 0.3f).SetEase(Ease.OutQuart);
            }
            else
            {
                Vector3 targetPos = returnToExactReturnTransformPosition ? returnTransform.position : new Vector3(returnTransform.position.x, returnTransform.position.y, originalZ);
                returnTween = transform.DOMove(targetPos, 0.3f).SetEase(Ease.OutQuart);
            }
        }
        else if (originalParent != null)
        {
            transform.SetParent(originalParent); // Đưa về parent gốc ngay để bám theo băng chuyền
            returnTween = transform.DOLocalMove(originalLocalPos, 0.3f).SetEase(Ease.OutQuart);
        }
        else
        {
            Vector3 targetPos = transform.position;
            targetPos.z = originalZ;
            returnTween = transform.DOMove(targetPos, 0.3f).SetEase(Ease.OutQuart);
        }

        returnTween?.OnComplete(OnReturnToStartComplete);
    }

    public void TeleportToStart()
    {
        transform.DOKill();

        if (bobEffect != null && bobEffect.isActiveAndEnabled)
        {
            bobEffect.Stop(false);
        }

        ResetScale();

        if (myRenderer != null)
        {
            myRenderer.sortingOrder = originalSortingOrder;
        }

        SetShadowActive(shadowDefaultActive);

        if (returnTransform != null)
        {
            if (setParentToReturnTransform)
            {
                transform.SetParent(returnTransform);
                transform.localPosition = returnToExactReturnTransformPosition ? Vector3.zero : new Vector3(0, 0, originalLocalPos.z);
            }
            else
            {
                transform.position = returnToExactReturnTransformPosition ? returnTransform.position : new Vector3(returnTransform.position.x, returnTransform.position.y, originalZ);
            }
        }
        else if (originalParent != null)
        {
            transform.SetParent(originalParent);
            transform.localPosition = originalLocalPos;
        }
        else
        {
            Vector3 targetPos = transform.position;
            targetPos.z = originalZ;
            transform.position = targetPos;
        }

        PlayBobEffectIfEnabled();
    }

    public void BeginDrag()
    {
        if (!enabled || !isDraggable) return;

        transform.DOKill(); // Dừng tween bay về nếu người chơi cầm lại vật thể giữa chừng

        PlayDragScale();

        SetShadowActive(false);

        Ply_SoundManager.Ins.PlayFx(FxType.Click);
        if (myRenderer != null && isUseOrderlayer) myRenderer.sortingOrder = 200;

        transform.SetParent(originalParent);

        zCoord = mainCam.WorldToScreenPoint(transform.position).z;
        transform.position += mainCam.transform.forward * -liftOffset;

        // Ép Z của vật thể lên -5 thay vì dùng liftOffset
        Vector3 pos = transform.position;
        pos.z = -7f;
        transform.position = pos;

        offset = transform.position - GetMouseWorldPos();
        onBeginDrag?.Invoke();
    }

    public void Drag()
    {
        if (!enabled || !isDraggable) return;
        transform.position = GetMouseWorldPos() + offset;
        Vector3 newPos = GetMouseWorldPos() + offset;
        newPos.z = -7f; // Đảm bảo vật thể luôn giữ ở mức Z = -5 trong suốt quá trình kéo
        transform.position = newPos;
    }

    public void EndDrag()
    {
        if (!enabled || !isDraggable) return;

        if (myRenderer != null) myRenderer.sortingOrder = originalSortingOrder;
        SetShadowActive(shadowDefaultActive);

        myCollider.enabled = false; // Tắt collider của mình để tia xuyên qua

        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);
        bool isHitValid = false;

        Item targetItem = null;
        for (int i = 0; i < hits.Length; i++)
        {
            targetItem = ComponentCache<Item>.Get(hits[i].collider);
            if (targetItem != null && targetItem != this.item) // Đảm bảo không phải chính nó
            {
                if (targetItem.itemType == targetItemType)
                {
                    isHitValid = true;
                    break;
                }
            }
        }

        myCollider.enabled = true; // Bật lại collider

        if (isHitValid)
        {
            ResetScale();
            onDropSuccess?.Invoke();
        }
        else
        {
            ResetScale();
            onDropFail?.Invoke();
            ReturnToStart();
        }
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = zCoord;
        return mainCam.ScreenToWorldPoint(mousePos);
    }
    public void IsDraggable(bool isDraggable)
    {
        this.isDraggable = isDraggable;
    }

    public void ChangeReturnPoint(Transform returnPoint)
    {
        returnTransform = returnPoint;
    }

    private void SetShadowActive(bool isActive)
    {
        if (shadowObject != null)
        {
            shadowObject.SetActive(isActive);
        }
    }

    private void PlayBobEffectIfEnabled()
    {
        if (bobEffect == null || !bobEffect.isActiveAndEnabled) return;

        bobEffect.CacheStartPosition();
        bobEffect.Play();
    }

    private void ResetScale()
    {
        scaleTween?.Kill();
        scaleTween = null;
        if (!hasOriginalScale) return;

        transform.localScale = originalScale;
    }

    private void PlayDragScale()
    {
        scaleTween?.Kill();
        scaleTween = transform.DOScale(originalScale * 1.1f, 0.15f).SetEase(Ease.OutBack);
    }

    private void OnDisable()
    {
        ResetScale();
    }

    private void OnReturnToStartComplete()
    {
        PlayBobEffectIfEnabled();
        PlayReturnToStartFinishSound();

        if (item != null)
        {
            item.OnDragFailReturnComplete();
        }
    }

    private void PlayReturnToStartFinishSound()
    {
        if (!playReturnToStartFinishSound || Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(returnToStartFinishFxType);
    }

    public void ChangeTargetItemType(Transform transform)
    {
        this.targetItemType = ComponentCache<Item>.Get(transform).itemType;
        item.itemMoveToTarget.defaultTarget = transform;
    }
    public void UnDraggable(Transform transform)
    {
        ItemType newItemType = ComponentCache<Item>.Get(transform).itemType;
        if (targetItemType == newItemType)
        {
            this.enabled = false;
        }
    }
}
