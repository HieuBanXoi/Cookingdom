using System.Collections.Generic;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

public class Bowl : Item
{
    public bool hasCarrot = false;
    public bool hasCucumber = false;
    public List<Cake> cakes;
    public Transform[] cakePos;
    public Spoon spoon;
    public Plate oil;
    public Transform newBowl;
    public Capybara capybara;
    private int cakeCountInBowl = 0;
    private bool hasEnabledSpoon = false;
    private bool hasEnabledOilTarget = false;
    public SkeletonAnimation capybaraAnim;
    public string capybaraDanceAnimName = "4-HAPPY-EXTRA/idle-dance";
    public string capybaraIdleAnimName = "3-NORMAL/idle-stand";
    public string capybaraBassSkinName = "hat/MUSICAL-BASS";
    public float capybaraSkinMoveYOffset = 1f;
    public float capybaraSkinMoveDownDuration = 0.2f;
    public float capybaraSkinMoveUpDuration = 0.35f;
    public bool playIntroOnStart = true;
    public bool showCapybaraFirstPopupAfterIntro = true;
    public bool startHandTutAfterIntro = true;
    public float introMoveYOffset = 1f;
    public float introMoveDuration = 0.5f;
    public float introFadeDuration = 0.35f;
    public float loseGameDelayAfterPopup2 = 2f;

    private bool hasDone = false;
    private bool hasShownDonePopup = false;

    private void Start()
    {
        PlayIntro();
    }

    public void AddCarrot()
    {
        hasCarrot = true;
        EnableSpoonIfReady();
    }
    public void AddCucumber()
    {
        hasCucumber = true;
        EnableSpoonIfReady();
    }
    public void CanCakeIn()
    {
        if (cakes == null) return;

        int cakeCount = cakes.Count;
        for (int i = 0; i < cakeCount; i++)
        {
            if (cakes[i] != null)
            {
                cakes[i].EnableBowlClick();
            }
        }
    }

    public Transform GetCakePosition(Cake cake)
    {
        if (cake == null || cakes == null || cakePos == null) return null;

        int cakeIndex = cakes.IndexOf(cake);
        if (cakeIndex < 0 || cakeIndex >= cakePos.Length) return null;

        return cakePos[cakeIndex];
    }

    public void AddOneCake()
    {
        if (cakes == null || cakes.Count == 0) return;

        cakeCountInBowl = Mathf.Min(cakeCountInBowl + 1, cakes.Count);
        if (!hasEnabledOilTarget && cakeCountInBowl >= cakes.Count && oil != null && oil.itemDraggable != null)
        {
            hasEnabledOilTarget = true;
            oil.itemDraggable.targetItemType = ItemType.Bowl;
        }
    }

    private void EnableSpoonIfReady()
    {
        if (hasEnabledSpoon || !hasCarrot || !hasCucumber || spoon == null) return;

        hasEnabledSpoon = true;
        spoon.CanUseSpoon(true);
    }

    public void Done()
    {
        if (hasDone) return;
        hasDone = true;
        PlayDoneSound();
        SpawnHeart(false);
        DOVirtual.DelayedCall(1f, TriggerNextAfterDone);
    }

    private void TriggerNextAfterDone()
    {
        if (capybara != null)
        {
            capybara.HideFirstPopup();
        }

        if (animator != null)
        {
            animator.SetTrigger("Next");
        }

        DOVirtual.DelayedCall(1f, SpawnCapybaraHeartAfterDone);
    }

    private void SpawnCapybaraHeartAfterDone()
    {
        if (capybara != null)
        {
            capybara.CapyDone();
        }

        DOVirtual.DelayedCall(2f, FinishBowlAfterDone);
    }

    private void FinishBowlAfterDone()
    {
        if (animator != null)
        {
            animator.SetTrigger("Next");
        }

        ShowNewBowl(ShowCapybaraDonePopupAndLose);
        gameObject.SetActive(false);
    }

    private void ShowCapybaraDonePopupAndLose()
    {
        if (hasShownDonePopup) return;

        hasShownDonePopup = true;
        DOVirtual.DelayedCall(loseGameDelayAfterPopup2, () =>
        {
            if (GameManager.Ins != null)
            {
                GameManager.Ins.LoseGame();
            }
        });
    }

    private void PlayCapybaraDoneSequence()
    {
        if (capybaraAnim == null) return;

        if (!TrySetCapybaraAnimation(capybaraDanceAnimName, false, OnCapybaraDanceComplete))
        {
            OnCapybaraDanceComplete();
        }
    }

    private void OnCapybaraDanceComplete()
    {
        TrySetCapybaraAnimation(capybaraIdleAnimName, true, null);
        PlayCapybaraSkinChange();
    }

    private bool TrySetCapybaraAnimation(string animationName, bool loop, TweenCallback onComplete)
    {
        if (capybaraAnim == null || capybaraAnim.Skeleton == null || string.IsNullOrEmpty(animationName)) return false;
        if (capybaraAnim.Skeleton.Data.FindAnimation(animationName) == null) return false;

        var trackEntry = capybaraAnim.AnimationState.SetAnimation(0, animationName, loop);
        if (!loop && onComplete != null)
        {
            trackEntry.Complete += _ => onComplete();
        }

        return true;
    }

    private void PlayCapybaraSkinChange()
    {
        Transform capybaraTransform = capybaraAnim.transform;
        Vector3 startLocalPosition = capybaraTransform.localPosition;
        Vector3 downLocalPosition = startLocalPosition + Vector3.down * capybaraSkinMoveYOffset;

        capybaraTransform.DOKill();
        capybaraTransform.DOLocalMoveY(downLocalPosition.y, capybaraSkinMoveDownDuration)
            .SetEase(Ease.InQuad)
            .OnComplete(() =>
            {
                SetCapybaraSkin(capybaraBassSkinName);
                capybaraTransform.DOLocalMoveY(startLocalPosition.y, capybaraSkinMoveUpDuration)
                    .SetEase(Ease.OutBack)
                    .OnComplete(() =>
                    {
                        if (capybara != null)
                        {
                            capybara.ShowSecondPopup();
                        }
                    });
            });
    }

    private void SetCapybaraSkin(string skinName)
    {
        if (capybaraAnim == null || capybaraAnim.Skeleton == null || string.IsNullOrEmpty(skinName)) return;
        if (capybaraAnim.Skeleton.Data.FindSkin(skinName) == null) return;

        capybaraAnim.Skeleton.SetSkin(skinName);
        capybaraAnim.Skeleton.SetSlotsToSetupPose();
        capybaraAnim.AnimationState.Apply(capybaraAnim.Skeleton);
    }

    private void PlayIntro(bool force = false, TweenCallback onComplete = null)
    {
        if (!force && !playIntroOnStart) return;

        if (animator == null)
        {
            animator = GetComponent<Animator>();
        }

        if (spriteRenderer == null)
        {
            spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        }

        if (animator != null)
        {
            animator.enabled = false;
        }

        Vector3 targetLocalPosition = transform.localPosition;
        transform.localPosition = targetLocalPosition + Vector3.down * introMoveYOffset;

        if (spriteRenderer != null)
        {
            Color color = spriteRenderer.color;
            color.a = 0f;
            spriteRenderer.color = color;
        }

        transform.DOKill();
        Sequence introSequence = DOTween.Sequence();
        introSequence.Join(transform.DOLocalMove(targetLocalPosition, introMoveDuration).SetEase(Ease.OutQuad));

        if (spriteRenderer != null)
        {
            introSequence.Join(spriteRenderer.DOFade(1f, introFadeDuration).SetEase(Ease.OutQuad));
        }

        introSequence.OnComplete(() =>
        {
            EnableAnimator();
            onComplete?.Invoke();
        });
    }

    private void ShowNewBowl(TweenCallback onComplete = null)
    {
        if (newBowl == null)
        {
            onComplete?.Invoke();
            return;
        }

        if (newBowl.IsChildOf(transform))
        {
            newBowl.SetParent(transform.parent, true);
        }

        Bowl newBowlComponent = newBowl.GetComponent<Bowl>();
        if (newBowlComponent != null && newBowlComponent != this)
        {
            newBowlComponent.playIntroOnStart = false;
            newBowlComponent.showCapybaraFirstPopupAfterIntro = false;
            newBowlComponent.startHandTutAfterIntro = false;
        }

        newBowl.gameObject.SetActive(true);

        if (newBowlComponent != null && newBowlComponent != this)
        {
            newBowlComponent.PlayIntro(true, onComplete);
            return;
        }

        PlayIntro(newBowl, onComplete);
    }

    private void PlayIntro(Transform introTransform, TweenCallback onComplete = null)
    {
        if (introTransform == null)
        {
            onComplete?.Invoke();
            return;
        }

        Animator introAnimator = introTransform.GetComponent<Animator>();
        SpriteRenderer introSpriteRenderer = introTransform.GetComponentInChildren<SpriteRenderer>();

        if (introAnimator != null)
        {
            introAnimator.enabled = false;
        }

        Vector3 targetLocalPosition = introTransform.localPosition;
        introTransform.localPosition = targetLocalPosition + Vector3.down * introMoveYOffset;

        if (introSpriteRenderer != null)
        {
            Color color = introSpriteRenderer.color;
            color.a = 0f;
            introSpriteRenderer.color = color;
        }

        introTransform.DOKill();
        Sequence introSequence = DOTween.Sequence();
        introSequence.Join(introTransform.DOLocalMove(targetLocalPosition, introMoveDuration).SetEase(Ease.OutQuad));

        if (introSpriteRenderer != null)
        {
            introSequence.Join(introSpriteRenderer.DOFade(1f, introFadeDuration).SetEase(Ease.OutQuad));
        }

        if (introAnimator != null)
        {
            introSequence.OnComplete(() =>
            {
                introAnimator.enabled = true;
                onComplete?.Invoke();
            });
        }
        else
        {
            introSequence.OnComplete(onComplete);
        }
    }

    private void EnableAnimator()
    {
        if (animator != null)
        {
            animator.enabled = true;
        }

        if (startHandTutAfterIntro && HandTutManager.Ins != null)
        {
            HandTutManager.Ins.StartHandTut();
        }

        if (showCapybaraFirstPopupAfterIntro && capybara != null)
        {
            capybara.ShowFirstPopup();
        }
    }
    public void PlayDoneSound()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.FoodDone);
    }
    public void PlayLeafToBowlSound()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.LeafToBowl);
    }
    public void PlayFoodToBowlSound()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.FoodToBowl);
    }
    public void PlayCreamSound()
    {
        Ply_SoundManager.Ins.PlayFxLoop(FxType.CreamDown);
    }
    public void StopCreamSound()
    {
        Ply_SoundManager.Ins.StopFxLoop(FxType.CreamDown);
    }
}
