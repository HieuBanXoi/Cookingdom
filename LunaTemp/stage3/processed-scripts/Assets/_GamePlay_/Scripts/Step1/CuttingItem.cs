using UnityEngine;

public class CuttingItem : Bread
{
    public GameObject itemKnife;
    public GameObject itemBeforeCut;
    public GameObject itemWaitToCut;
    public GameObject knifeBeforeCut;
    public void TurnOnCutting()
    {
        TurnOnKnifeCutter();
        itemKnife.SetActive(true);
    }
    public override void FlyToCuttingBoard()
    {
        base.FlyToCuttingBoard();
    }
    public override void TurnOffClick()
    {
        itemKnifeSpriteMaskCutter.enabled = false;
        itemDraggable.enabled = true;
        itemDraggable.targetItemType = targetPlateType;
        itemDraggable.returnTransform = cuttingBoard.transform;
        itemMoveToTarget.defaultTarget = targetPlate;
    }
    public void TurnOnKnifeCutter()
    {
        itemKnifeSpriteMaskCutter.enabled = true;
    }
    public void TurnOffAnim()
    {
        animator.enabled = false;
        itemBeforeCut.SetActive(false);
        itemWaitToCut.SetActive(true);
        knifeBeforeCut.SetActive(false);
    }
}
