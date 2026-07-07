using UnityEngine;

public class OilFood : Item
{   
    public bool isOilOnce;
    public void OilIn()
    {
        animator.SetTrigger("OilIn");
        itemType = ItemType.None;
    }
    public void CanOil()
    {
        itemType = ItemType.FoodOnCuttingBoard;
    }
    public void OilItemDone()
    {
        PhaseManager.Ins.DoOneStep();
        if (PhaseManager.Ins.currentStepCount >= 5)
        {
            GameManager.Ins.LoseGame();
        }
    }
}
