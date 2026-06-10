using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

[System.Serializable]
public class PhaseData
{
    public GameObject phaseObject;
    public int totalSteps;
    public UnityEvent onPhaseReady;
}

public class PhaseManager : Ply_Singleton<PhaseManager>
{
    [Header("Phases")]
    public List<PhaseData> phases;

    [Header("Transition Timing")]
    public float delayBeforeNextPhase = 2f;
    public float transitionMoveDuration = 1f;
    public float backgroundFadeInDuration = 0.6f;
    public float backgroundFadeOutDuration = 0.6f;
    public Ease transitionMoveEase = Ease.InOutQuad;
    public Ease backgroundFadeEase = Ease.InOutSine;

    [Header("Transition Object")]
    public GameObject transitionObject;
    public Transform transitionStartPos;
    public Transform transitionEndPos;

    [Header("Transition Background")]
    public SpriteRenderer transitionBackground;

    public int currentPhaseIndex;
    public int currentStepCount;

    private bool isChangingPhase;
    private Tween phaseDelayTween;
    private Sequence transitionSequence;

    public Transform CurrentPhaseObject
    {
        get
        {
            if (currentPhaseIndex < 0 || currentPhaseIndex >= phases.Count)
            {
                return null;
            }

            GameObject phaseObject = phases[currentPhaseIndex].phaseObject;
            return phaseObject != null ? phaseObject.transform : null;
        }
    }

    private void Start()
    {
        SetupPhases();
        ResetTransitionVisuals();
    }

    private void SetupPhases()
    {
        for (int i = 0; i < phases.Count; i++)
        {
            GameObject phaseObject = phases[i].phaseObject;
            if (phaseObject == null) continue;

            bool isCurrentPhase = i == currentPhaseIndex;
            phaseObject.SetActive(isCurrentPhase);
            if (isCurrentPhase)
            {
                phases[i].onPhaseReady?.Invoke();
            }
        }
    }

    private void ResetTransitionVisuals()
    {
        if (transitionObject != null)
        {
            transitionObject.SetActive(false);
        }

        if (transitionBackground != null)
        {
            SetBackgroundAlpha(0f);
            transitionBackground.gameObject.SetActive(false);
        }
    }

    [ContextMenu("DôneStep")]
    public bool DoOneStep()
    {
        if (isChangingPhase) return false;
        if (currentPhaseIndex < 0 || currentPhaseIndex >= phases.Count) return false;

        currentStepCount++;
        if (currentStepCount >= phases[currentPhaseIndex].totalSteps)
        {
            return TryEndCurrentPhase();
        }

        return false;
    }

    public bool IsCurrentPhaseStepComplete()
    {
        if (currentPhaseIndex < 0 || currentPhaseIndex >= phases.Count) return false;

        return currentStepCount >= phases[currentPhaseIndex].totalSteps;
    }

    public bool TryEndCurrentPhase()
    {
        if (isChangingPhase || !IsCurrentPhaseStepComplete()) return false;

        if (HandTutManager.Ins != null && !HandTutManager.Ins.CheckEndPhaseCondition())
        {
            return false;
        }

        BeginPhaseChangeAfterDelay();
        return true;
    }

    private void BeginPhaseChangeAfterDelay()
    {
        isChangingPhase = true;
        if (GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = false;
        }

        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.FoodDone);
        }

        phaseDelayTween?.Kill();
        phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, PlayPhaseTransition);
    }

    private void PlayPhaseTransition()
    {
        phaseDelayTween = null;
        transitionSequence?.Kill();
        transitionSequence = DOTween.Sequence();

        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.ChangePhase);
        }

        bool hasCoverAnimation = false;

        if (transitionObject != null && transitionStartPos != null && transitionEndPos != null)
        {
            hasCoverAnimation = true;
            transitionObject.transform.position = transitionStartPos.position;
            transitionObject.SetActive(true);

            transitionSequence.Join(
                transitionObject.transform
                    .DOMove(transitionEndPos.position, transitionMoveDuration)
                    .SetEase(transitionMoveEase)
                    .OnComplete(() => transitionObject.SetActive(false))
            );
        }

        if (transitionBackground != null)
        {
            hasCoverAnimation = true;
            transitionBackground.gameObject.SetActive(true);
            SetBackgroundAlpha(0f);
            transitionSequence.Join(
                transitionBackground
                    .DOFade(1f, backgroundFadeInDuration)
                    .SetEase(backgroundFadeEase)
            );
        }

        if (!hasCoverAnimation)
        {
            SwapPhase();
            FinishPhaseTransition();
            return;
        }

        transitionSequence.AppendCallback(SwapPhase);

        if (transitionBackground != null)
        {
            transitionSequence.Append(
                transitionBackground
                    .DOFade(0f, backgroundFadeOutDuration)
                    .SetEase(backgroundFadeEase)
            );
        }

        transitionSequence.OnComplete(FinishPhaseTransition);
    }

    private void SwapPhase()
    {
        if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.Count)
        {
            GameObject oldPhaseObject = phases[currentPhaseIndex].phaseObject;
            if (oldPhaseObject != null)
            {
                oldPhaseObject.SetActive(false);
            }
        }

        currentPhaseIndex++;
        currentStepCount = 0;

        if (currentPhaseIndex >= phases.Count)
        {
            return;
        }

        GameObject newPhaseObject = phases[currentPhaseIndex].phaseObject;
        if (newPhaseObject != null)
        {
            newPhaseObject.SetActive(true);
        }

        if (HandTutManager.Ins != null)
        {
            HandTutManager.Ins.OnPhaseChanged();
        }
    }

    private void FinishPhaseTransition()
    {
        transitionSequence = null;

        if (transitionBackground != null)
        {
            SetBackgroundAlpha(0f);
            transitionBackground.gameObject.SetActive(false);
        }

        if (transitionObject != null)
        {
            transitionObject.SetActive(false);
        }

        isChangingPhase = false;

        if (currentPhaseIndex >= phases.Count)
        {
            if (GameManager.Ins != null)
            {
                GameManager.Ins.WinGame();
            }
            return;
        }
        if (GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = true;
        }
        phases[currentPhaseIndex].onPhaseReady?.Invoke();
        
    }

    private void SetBackgroundAlpha(float alpha)
    {
        Color color = transitionBackground.color;
        color.a = alpha;
        transitionBackground.color = color;
    }

    private void OnDisable()
    {
        phaseDelayTween?.Kill();
        phaseDelayTween = null;
        transitionSequence?.Kill();
        transitionSequence = null;
    }
}
