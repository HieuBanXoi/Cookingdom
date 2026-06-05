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
    public Transform newBowl;
    public Capybara capybara;
    private int cakeCountInBowl = 0;
    private bool hasEnabledSpoon = false;
    public SkeletonAnimation capybaraAnim;
    public string capybaraDanceAnimName = "4-HAPPY-EXTRA/idle-dance";
    public string capybaraIdleAnimName = "3-NORMAL/idle-stand";
    public string capybaraBassSkinName = "hat/MUSICAL-BASS";
    public float capybaraSkinMoveYOffset = 1f;
    public float capybaraSkinMoveDownDuration = 0.2f;
    public float capybaraSkinMoveUpDuration = 0.35f;
    public bool playIntroOnStart = true;
    public bool showCapybaraFirstPopupAfterIntro = true;
    public float introMoveYOffset = 1f;
    public float introMoveDuration = 0.5f;
    public float introFadeDuration = 0.35f;

    private bool hasDone = false;

    private void Start()
    {
        PlayIntro();
    }

    public void AddCarrot()
    {
        hasCarrot = true;
        if (hasCucumber)
        {
            CanCakeIn();
        }
    }
    public void AddCucumber()
    {
        hasCucumber = true;
        if (hasCarrot)
        {
            CanCakeIn();
        }
    }
    public void CanCakeIn()
    {
        int cakeCount = cakes.Count;
        for (int i = 0; i < cakeCount; i++)
        {
            cakes[i].itemDraggable.targetItemType = ItemType.Bowl;
        }
    }
    public void AddOneCake()
    {
        if (cakes == null || cakes.Count == 0) return;

        cakeCountInBowl = Mathf.Min(cakeCountInBowl + 1, cakes.Count);
        if (!hasEnabledSpoon && cakeCountInBowl >= cakes.Count && spoon != null)
        {
            hasEnabledSpoon = true;
            spoon.CanUseSpoon(true);
        }
    }

    public void Done()
    {
        if (hasDone) return;

        hasDone = true;
        ShowNewBowl();
        gameObject.SetActive(false);
        PlayCapybaraDoneSequence();
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

    private void PlayIntro(bool force = false)
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

        introSequence.OnComplete(EnableAnimator);
    }

    private void ShowNewBowl()
    {
        if (newBowl == null) return;

        if (newBowl.IsChildOf(transform))
        {
            newBowl.SetParent(transform.parent, true);
        }

        Bowl newBowlComponent = newBowl.GetComponent<Bowl>();
        if (newBowlComponent != null && newBowlComponent != this)
        {
            newBowlComponent.playIntroOnStart = false;
        }

        newBowl.gameObject.SetActive(true);

        if (newBowlComponent != null && newBowlComponent != this)
        {
            newBowlComponent.PlayIntro(true);
            return;
        }

        PlayIntro(newBowl);
    }

    private void PlayIntro(Transform introTransform)
    {
        if (introTransform == null) return;

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
            introSequence.OnComplete(() => introAnimator.enabled = true);
        }
    }

    private void EnableAnimator()
    {
        if (animator != null)
        {
            animator.enabled = true;
        }

        if (showCapybaraFirstPopupAfterIntro && capybara != null)
        {
            capybara.ShowFirstPopup();
        }
    }
}
