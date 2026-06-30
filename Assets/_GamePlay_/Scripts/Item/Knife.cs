using DG.Tweening;
using UnityEngine;

public class Knife : Item
{
    public GameObject knifeIdle;
    public GameObject knifeOnDrag;
    public Vector3 knifeOnDragRotationOffset;
    public float knifeOnDragRotateDuration = 0.15f;
    public Ease knifeOnDragRotateEase = Ease.OutQuad;

    private bool hasCachedKnifeOnDragRotation;
    private Quaternion knifeOnDragOriginalLocalRotation;
    private Tween knifeOnDragRotateTween;

    public void KnifeOnDrag()
    {
        CacheKnifeOnDragRotation();
        knifeIdle.SetActive(false);
        knifeOnDrag.SetActive(true);
        RotateKnifeOnDragTo(knifeOnDragOriginalLocalRotation * Quaternion.Euler(knifeOnDragRotationOffset));
    }
    public void KnifeIdle()
    {
        ResetKnifeOnDragRotation();
        knifeIdle.SetActive(true);
        knifeOnDrag.SetActive(false);
    }
    public void TargetKnifeFlyEvent()
    {
        Debug.Log("TargetKnifeFlyEvent");
        Item target = ComponentCache<Item>.Get(itemMoveToTarget.defaultTarget);
        target.KnifeIn();
    }
    public void SetTarget(Transform target)
    {
        Item targetItem = ComponentCache<Item>.Get(target);
        itemDraggable.targetItemType = targetItem.itemType;
        itemMoveToTarget.defaultTarget = target;
    }

    public override void OnDragFailReturnComplete()
    {
        base.OnDragFailReturnComplete();

        if (Ply_SoundManager.Ins == null) return;

        PlayKnifeSound();
    }
    public void OnKnifeDone()
    {
        itemDraggable.targetItemType = ItemType.None;
        itemMoveToTarget.defaultTarget = null;
    }
    public void PlayKnifeSound()
    {
        // Ply_SoundManager.Ins.PlayFx(FxType.PlaceKnife);
    }

    private void OnDisable()
    {
        ResetKnifeOnDragRotation();
    }

    private void CacheKnifeOnDragRotation()
    {
        if (hasCachedKnifeOnDragRotation || knifeOnDrag == null) return;

        knifeOnDragOriginalLocalRotation = knifeOnDrag.transform.localRotation;
        hasCachedKnifeOnDragRotation = true;
    }

    private void ResetKnifeOnDragRotation()
    {
        CacheKnifeOnDragRotation();
        if (!hasCachedKnifeOnDragRotation || knifeOnDrag == null) return;

        RotateKnifeOnDragTo(knifeOnDragOriginalLocalRotation);
    }

    private void RotateKnifeOnDragTo(Quaternion targetRotation)
    {
        if (knifeOnDrag == null) return;

        knifeOnDragRotateTween?.Kill();
        knifeOnDragRotateTween = knifeOnDrag.transform
            .DOLocalRotateQuaternion(targetRotation, knifeOnDragRotateDuration)
            .SetEase(knifeOnDragRotateEase);
    }
}
