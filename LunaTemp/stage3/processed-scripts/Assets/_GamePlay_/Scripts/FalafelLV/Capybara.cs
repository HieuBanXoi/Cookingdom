using System;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

public enum PlaySkinChangeMode
{
    PlaySkinChange,
    NoChangeSkin
}
public class Capybara : MonoBehaviour
{


    [LunaPlaygroundField("Play Skin Change", 0, "Play Skin Change")]
    public PlaySkinChangeMode playSkinChangeMode = PlaySkinChangeMode.PlaySkinChange;

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
    public Transform skinObject1;  // Skin ban đầu
    public Transform skinObject2;  // Skin sau khi thay đổi
    public float skinChangeDelay = 2f;
    public float skinMoveYOffset = 1f;
    public float skinMoveDownDuration = 0.2f;
    public float skinMoveUpDuration = 0.35f;

    private Transform currentPopup;
    private Tween hidePopupTween;
    private Tween skinChangeDelayTween;
    private Vector3 skinObject1StartLocalPos;
    private Vector3 skinObject2StartLocalPos;

    private void Awake()
    {
        if (skeletonAnimation == null)
        {
            skeletonAnimation = GetComponentInChildren<SkeletonAnimation>();
        }
    }

    private void Start()
    {
        if (skinObject1 != null)
        {
            skinObject1StartLocalPos = skinObject1.localPosition;
        }

        if (skinObject2 != null)
        {
            skinObject2StartLocalPos = skinObject2.localPosition;
        }

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
    [ContextMenu("CapyDone")]
    public void CapyDone()
    {
        SpawnHeart(false);
        HandTutManager.Ins.enabled = false;
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.CapyYay);
        }

        skinChangeDelayTween?.Kill();
        skinChangeDelayTween = DOVirtual.DelayedCall(skinChangeDelay, () =>
            {
                if (playSkinChangeMode == PlaySkinChangeMode.PlaySkinChange)
                {
                    PlaySkinChange(ShowSecondPopup);
                    HandTutManager.Ins.enabled = true;
                    GameManager.Ins.LoseGame();
                }
                else
                {
                    GameManager.Ins.WinGame();
                }
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
        if (skinObject1 == null)
        {
            onComplete?.Invoke();
            return;
        }

        HideTickIcon();
        HidePopup(popup1);

        Vector3 startLocalPosition = skinObject1.localPosition;
        Vector3 downLocalPosition = startLocalPosition + Vector3.down * skinMoveYOffset;

        if (skinObject2 != null)
        {
            skinObject2.localPosition = skinObject2StartLocalPos - Vector3.up * skinMoveYOffset;
            skinObject2.gameObject.SetActive(false);
        }

        Sequence skinChangeSequence = DOTween.Sequence();

        skinChangeSequence.Append(skinObject1.DOLocalMoveY(downLocalPosition.y, skinMoveDownDuration).SetEase(Ease.InQuad));

        skinChangeSequence.AppendCallback(() =>
        {
            if (skinObject1 != null)
            {
                skinObject1.gameObject.SetActive(false);
            }

            if (skinObject2 != null)
            {
                skinObject2.gameObject.SetActive(true);
            }
        });

        skinChangeSequence.Append(skinObject1.DOLocalMoveY(startLocalPosition.y, skinMoveUpDuration).SetEase(Ease.OutBack));

        if (skinObject2 != null)
        {
            skinChangeSequence.Join(skinObject2.DOLocalMoveY(skinObject2StartLocalPos.y, skinMoveUpDuration).SetEase(Ease.OutBack));
        }

        skinChangeSequence.OnComplete(onComplete);
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
        tick.DOScale(2.27f, 0.5f);
    }
}
