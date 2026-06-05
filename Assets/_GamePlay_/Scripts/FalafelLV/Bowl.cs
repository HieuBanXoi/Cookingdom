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
    private int cakeCountInBowl = 0;
    private bool hasEnabledSpoon = false;
    public SkeletonAnimation capybaraAnim;
    public string capybaraDanceAnimName = "4-HAPPY-EXTRA/idle-dance";
    public string capybaraIdleAnimName = "3-NORMAL/idle-stand";
    public string capybaraBassSkinName = "hat/MUSICAL-BASS";
    public float capybaraSkinMoveYOffset = 1f;
    public float capybaraSkinMoveDownDuration = 0.2f;
    public float capybaraSkinMoveUpDuration = 0.35f;

    private bool hasDone = false;

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
        gameObject.SetActive(false);
        hasDone = true;
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
                    .SetEase(Ease.OutBack);
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
}
