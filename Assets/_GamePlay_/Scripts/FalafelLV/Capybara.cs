using System;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

public class Capybara : MonoBehaviour
{
    public Transform popup1;
    public Transform popup2;
    public Transform tick;
    public float popupShowScale = 1.5f;
    public float popupShowDuration = 0.25f;
    public float popupHideDuration = 0.2f;
    public float popupHideDelay = 2f;
    public Transform spawnHeartPoint;
    [Min(0f)] public float heartEffectScale = 2f;
    public SkeletonAnimation skeletonAnimation;
    public string bassSkinName = "hat/MUSICAL-BASS";
    public float skinChangeDelay = 2f;
    public float skinMoveYOffset = 1f;
    public float skinMoveDownDuration = 0.2f;
    public float skinMoveUpDuration = 0.35f;

    private Transform currentPopup;
    private Tween hidePopupTween;
    private Tween skinChangeDelayTween;

    private void Awake()
    {
        if (skeletonAnimation == null)
        {
            skeletonAnimation = GetComponentInChildren<SkeletonAnimation>();
        }
    }

    private void Start()
    {
        HideTickIcon();
        HidePopupImmediately(popup1);
        HidePopupImmediately(popup2);
        ShowFirstPopup();
    }

    private void HideTickIcon()
    {
        tick.localScale = Vector3.zero;
    }

    public void ClickCapybara()
    {
        // Popup is controlled by game flow now, not by clicking capybara.
    }

    public void ShowFirstPopup()
    {
        currentPopup = popup1;
        ShowCurrentPopup(false);
    }

    public void ShowSecondPopup()
    {
        currentPopup = popup2;
        ShowCurrentPopup(false);
    }

    public void HideFirstPopup()
    {
        HidePopup(popup1);
    }

    public void CapyDone()
    {
        SpawnHeart(false);
        if (Ply_SoundManager.Ins != null)
        {
            // Ply_SoundManager.Ins.PlayFx(FxType.CapyYay);
        }

        skinChangeDelayTween?.Kill();
        skinChangeDelayTween = DOVirtual.DelayedCall(skinChangeDelay, () =>
        {
            PlaySkinChange(ShowSecondPopup);
        });
    }

    public void SpawnHeart(bool isBreak)
    {
        if (Ply_Pool.Ins == null) return;

        Vector3 spawnPosition = spawnHeartPoint != null ? spawnHeartPoint.position : transform.position;
        if (isBreak)
        {
            HeartBreakEffect heartEffect = Ply_Pool.Ins.Spawn<HeartBreakEffect>(PoolType.HeartBreakFX, spawnPosition, transform.rotation);
            if (heartEffect == null) return;

            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawnWithScale(heartEffectScale);
            return;
        }

        HeartEffect normalHeartEffect = Ply_Pool.Ins.Spawn<HeartEffect>(PoolType.HeartFX, spawnPosition, transform.rotation);
        if (normalHeartEffect == null) return;

        normalHeartEffect.transform.localRotation = Quaternion.identity;
        normalHeartEffect.PlaySpawnWithScale(heartEffectScale);
    }

    private void ShowCurrentPopup(bool autoHide)
    {
        if (currentPopup == null) return;

        Transform popupToShow = currentPopup;
        Transform otherPopup = popupToShow == popup1 ? popup2 : popup1;
        HidePopupImmediately(otherPopup);

        hidePopupTween?.Kill();
        popupToShow.DOKill();
        popupToShow.gameObject.SetActive(true);
        popupToShow.localScale = Vector3.zero;
        popupToShow.DOScale(Vector3.one * popupShowScale, popupShowDuration).SetEase(Ease.OutBack);

        if (!autoHide) return;

        hidePopupTween = DOVirtual.DelayedCall(popupHideDelay, () =>
        {
            HidePopup(popupToShow);
        });
    }

    private void HidePopup(Transform popup)
    {
        if (popup == null) return;

        popup.DOKill();
        popup.DOScale(Vector3.zero, popupHideDuration)
            .SetEase(Ease.InBack)
            .OnComplete(() => popup.gameObject.SetActive(false));
    }

    private void HidePopupImmediately(Transform popup)
    {
        if (popup == null) return;

        popup.DOKill();
        popup.localScale = Vector3.zero;
        popup.gameObject.SetActive(false);
    }

    private void PlaySkinChange(TweenCallback onComplete = null)
    {
        if (skeletonAnimation == null)
        {
            onComplete?.Invoke();
            return;
        }

        Transform capybaraTransform = skeletonAnimation.transform;
        Vector3 startLocalPosition = capybaraTransform.localPosition;
        Vector3 downLocalPosition = startLocalPosition + Vector3.down * skinMoveYOffset;

        capybaraTransform.DOKill();
        capybaraTransform.DOLocalMoveY(downLocalPosition.y, skinMoveDownDuration)
            .SetEase(Ease.InQuad)
            .OnComplete(() =>
            {
                HideTickIcon();
                HidePopup(popup1);
                SetSkin(bassSkinName);
                capybaraTransform.DOLocalMoveY(startLocalPosition.y, skinMoveUpDuration)
                    .SetEase(Ease.OutBack)
                    .OnComplete(onComplete);
            });
    }

    private void SetSkin(string skinName)
    {
        if (skeletonAnimation == null || skeletonAnimation.Skeleton == null || string.IsNullOrEmpty(skinName)) return;
        if (skeletonAnimation.Skeleton.Data.FindSkin(skinName) == null) return;

        skeletonAnimation.Skeleton.SetSkin(skinName);
        skeletonAnimation.Skeleton.SetSlotsToSetupPose();
        skeletonAnimation.AnimationState.Apply(skeletonAnimation.Skeleton);
    }

    private void OnDestroy()
    {
        hidePopupTween?.Kill();
        skinChangeDelayTween?.Kill();
        if (skeletonAnimation != null)
        {
            skeletonAnimation.transform.DOKill();
        }
    }
    public void TickAppear()
    {
        tick.DOScale(2.27f,0.5f);
    }
}
