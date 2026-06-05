using UnityEngine;
using UnityEngine.Events;

public class Sink : Item
{
    public bool isClose = false;
    public bool isWaterDrop = false;
    public bool isWaterIn = false;
    public GameObject waterDrop;
    public GameObject waterIn;
    public UnityEvent onWaterIn;
    public UnityEvent onNoWaterIn;
    public ItemDraggable napNgoai;
    public ItemDraggable napTrong;

    public void TurnOnWater()
    {
        animator.enabled = true;
        isWaterDrop = true;
        if (isClose)
        {
            if (isWaterIn)
            {
                animator.SetTrigger("BothWaterDrop");
            }
            else
            {
                animator.SetTrigger("TurnOnWater");

                animator.SetBool("WaterUp", true);
                IsWaterIn();
            }
        }
        else
        {
            animator.SetTrigger("TurnOnWater");
        }
    }
    public void TurnOffWater()
    {
        isWaterDrop = false;
        if (!isClose)
        {
            animator.SetTrigger("TurnOffWater");
            NoWaterIn();

        }
        else
        {
            animator.SetTrigger("OnlyWaterIn");
        }

        CheckEndPhaseCondition();
    }
    public void Close()
    {
        Debug.Log("Close");

        isClose = true;
        if (isWaterDrop)
        {
            animator.SetBool("WaterUp", true);
            IsWaterIn();

        }
    }
    public void Open()
    {
        Debug.Log("Open");
        isClose = false;
        if (isWaterIn)
        {

            if (isWaterDrop)
            {
                animator.SetBool("WaterUp", false);
                NoWaterIn();
            }
            else
            {
                animator.SetBool("WaterUp", false);
                NoWaterIn();

            }
        }

        CheckEndPhaseCondition();
    }
    public void IsWaterIn()
    {
        isWaterIn = true;
        onWaterIn?.Invoke();
    }
    public void NoWaterIn()
    {
        isWaterIn = false;
        onNoWaterIn?.Invoke();
    }
    public void TurnOffMoveActionIn()
    {
        napTrong.enabled = false;
    }
    public void TurnOnMoveActionIn()
    {
        napTrong.enabled = true;
    }
    public void TurnOffMoveActionOut()
    {
        napNgoai.enabled = false;
    }
    public void TurnOnMoveActionOut()
    {
        napNgoai.enabled = true;
    }

    public bool CheckEndPhaseCondition()
    {
        bool canEndPhase = HandTutManager.Ins == null || HandTutManager.Ins.CheckEndPhaseCondition();

        if (canEndPhase && PhaseManager.Ins != null && PhaseManager.Ins.IsCurrentPhaseStepComplete())
        {
            PhaseManager.Ins.TryEndCurrentPhase();
        }

        return canEndPhase;
    }

}
