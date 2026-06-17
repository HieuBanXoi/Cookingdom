using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;
using UnityEngine.Events;

[System.Serializable]
public class PhaseData
{
    [Tooltip("GameObject chứa toàn bộ môi trường/đồ vật của phase này")]
    public GameObject phaseObject;
    [Tooltip("Tổng số bước (step) cần hoàn thành để chuyển sang phase kế tiếp")]
    public int totalSteps;
    [Tooltip("Sự kiện được gọi khi phase này bay vào vị trí trung tâm xong")]
    public UnityEvent onPhaseReady;
}

public class PhaseManager : Ply_Singleton<PhaseManager>
{
    [Header("--- CÀI ĐẶT CÁC PHASE ---")]
    public List<PhaseData> phases;

    [Header("--- HIỆU ỨNG CHUYỂN PHASE ---")]
    public float transitionDuration = 1.0f;
    public float delayBeforeNextPhase = 2.0f;
    public float offScreenLeftX = -15f;
    public float offScreenRightX = 15f;
    public float centerScreenX = 0f;
    public GameObject phaseTransitionObject;
    public float phaseTransitionObjectDuration = 1.5f;

    public int currentPhaseIndex = 0;
    public int currentStepCount = 0;

    private bool isChangingPhase;
    private Tween phaseDelayTween;
    private Sequence phaseTransitionSequence;

    public Transform CurrentPhaseObject
    {
        get
        {
            if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.Count)
                return phases[currentPhaseIndex].phaseObject.transform;
            return null;
        }
    }

    private void Start()
    {
        // Setup ban đầu: Chỉ bật phase đầu tiên (ở chính giữa), tắt tất cả các phase còn lại
        for (int i = 0; i < phases.Count; i++)
        {
            if (phases[i].phaseObject != null)
            {
                if (i == 0)
                {
                    phases[i].phaseObject.SetActive(true);
                    Vector3 pos = phases[i].phaseObject.transform.position;
                    pos.x = centerScreenX;
                    phases[i].phaseObject.transform.position = pos;
                    phases[i].onPhaseReady?.Invoke();
                }
                else
                {
                    phases[i].phaseObject.SetActive(false);
                }
            }
        }

        if (phaseTransitionObject != null)
        {
            phaseTransitionObject.SetActive(false);
        }
    }

    private void OnDisable()
    {
        phaseDelayTween?.Kill();
        phaseTransitionSequence?.Kill();
    }

    /// <summary>
    /// Gọi hàm này từ bất kỳ script nào bằng lệnh: PhaseManager.Ins.DoOneStep();
    /// Trả về true nếu là bước cuối cùng của Phase và bắt đầu chuyển Phase.
    /// </summary>
    public bool DoOneStep()
    {
        if (isChangingPhase) return false;
        if (currentPhaseIndex >= phases.Count) return false; // Đã hoàn thành hết các phase

        currentStepCount++;

        // Nếu số lần DoOneStep đạt mức yêu cầu của phase hiện tại => Chuyển Phase
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
        if (isChangingPhase) return false;
        if (!IsCurrentPhaseStepComplete()) return false;

        if (HandTutManager.Ins != null && !HandTutManager.Ins.CheckEndPhaseCondition())
        {
            return false;
        }

        DelayGoToNextPhase();
        return true;
    }

    private void DelayGoToNextPhase()
    {
        isChangingPhase = true;
        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;
        Ply_SoundManager.Ins.PlayFx(FxType.Complete);
        phaseDelayTween?.Kill();
        phaseTransitionSequence?.Kill();

        if (!HasNextPhase())
        {
            phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, FinishGameByPhase);
            return;
        }

        if (phaseTransitionObject != null)
        {
            phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, PlayPhaseObjectTransition);
            return;
        }

        phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, GoToNextPhase);
    }

    private bool HasNextPhase()
    {
        return currentPhaseIndex + 1 < phases.Count;
    }

    private void PlayPhaseObjectTransition()
    {
        phaseTransitionObject.SetActive(true);

        float safeDuration = Mathf.Max(0.01f, phaseTransitionObjectDuration);
        phaseTransitionSequence = DOTween.Sequence();
        phaseTransitionSequence.AppendInterval(safeDuration * 0.5f);
        phaseTransitionSequence.AppendCallback(SwitchToNextPhaseBehindTransition);
        phaseTransitionSequence.AppendInterval(safeDuration * 0.5f);
        phaseTransitionSequence.OnComplete(() =>
        {
            phaseTransitionSequence = null;
            phaseTransitionObject.SetActive(false);
            FinishPhaseTransition();
        });
    }

    private void SwitchToNextPhaseBehindTransition()
    {
        PhaseData oldPhase = phases[currentPhaseIndex];
        currentPhaseIndex++;
        currentStepCount = 0;

        if (oldPhase != null && oldPhase.phaseObject != null)
        {
            oldPhase.phaseObject.SetActive(false);
        }

        if (currentPhaseIndex < phases.Count)
        {
            PhaseData newPhase = phases[currentPhaseIndex];
            if (newPhase != null && newPhase.phaseObject != null)
            {
                GameObject newObj = newPhase.phaseObject;
                Vector3 pos = newObj.transform.position;
                pos.x = centerScreenX;
                newObj.transform.position = pos;
                newObj.SetActive(true);
                if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                {
                    GameManager.Ins.isPlaying = true;
                }
                newPhase.onPhaseReady?.Invoke();
                StartHandTutAfterPhaseReady();
            }
        }
    }

    private void FinishPhaseTransition()
    {
        isChangingPhase = false;

        if (currentPhaseIndex < phases.Count)
        {
            return;
        }

        Debug.Log("Hoàn thành toàn bộ Phase!");
        FinishGameByPhase();
    }

    private void GoToNextPhase()
    {
        PhaseData oldPhase = phases[currentPhaseIndex];
        currentPhaseIndex++;
        currentStepCount = 0; // Reset số đếm step cho phase mới

        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;

        // 1. Chuyển Phase cũ sang phía bên trái màn hình và ẩn đi
        if (oldPhase != null && oldPhase.phaseObject != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Swipe);

            GameObject oldObj = oldPhase.phaseObject;
            oldObj.transform.DOMoveX(offScreenLeftX, transitionDuration)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() => oldObj.SetActive(false));
        }

        // 2. Kiểm tra xem còn phase tiếp theo hay không
        if (currentPhaseIndex < phases.Count)
        {
            PhaseData newPhase = phases[currentPhaseIndex];
            if (newPhase != null && newPhase.phaseObject != null)
            {
                GameObject newObj = newPhase.phaseObject;

                // Đưa phase mới ra chờ ở bên phải màn hình
                Vector3 startPos = newObj.transform.position;
                startPos.x = offScreenRightX;
                newObj.transform.position = startPos;

                newObj.SetActive(true);

                // Di chuyển Phase mới vào chính giữa
                newObj.transform.DOMoveX(centerScreenX, transitionDuration)
                    .SetEase(Ease.InOutQuad).OnComplete(() =>
                    {
                        isChangingPhase = false;
                        if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                        {
                            GameManager.Ins.isPlaying = true;
                        }
                        newPhase.onPhaseReady?.Invoke();
                        StartHandTutAfterPhaseReady();
                    });
            }
            else
            {
                isChangingPhase = false;
                if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                {
                    GameManager.Ins.isPlaying = true;
                }
            }
        }
        else
        {
            isChangingPhase = false;
            // Đã đi qua hết tất cả các Phase trong danh sách, kết thúc game win
            Debug.Log("Hoàn thành toàn bộ Phase!");
            FinishGameByPhase();
        }
    }

    private void FinishGameByPhase()
    {
        isChangingPhase = false;
        currentStepCount = 0;
        if (GameManager.Ins != null)
        {
            GameManager.Ins.WinGame();
        }
    }

    private void StartHandTutAfterPhaseReady()
    {
        if (GameManager.Ins != null)
        {
            if (!GameManager.Ins.isLoseGame)
            {
                GameManager.Ins.isPlaying = true;
            }
        }

        HandTutManager.Ins?.StartHandTutNoDelay();
    }
}
