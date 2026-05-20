using UnityEngine;

public class Bread : Item
{
    public Knife knife;
    public CuttingBoard cuttingBoard;
    public Transform targetPlate;
    public bool isOnBoard = false;
    public ItemType targetPlateType;
    public string flyToDish = null;
    public bool isFlyToDishAnim = false;
    public bool cantCutOnFirst = false;

    public void KnifeOut()
    {
        knife.gameObject.SetActive(true);
    }
    public virtual void TurnOffClick()
    {
        if (itemClickable != null)
        {
            itemClickable.enabled = false;

        }
        itemDraggable.enabled = true;
        itemDraggable.targetItemType = targetPlateType;
        itemDraggable.returnTransform = cuttingBoard.transform;
        itemMoveToTarget.defaultTarget = targetPlate;
        ResetType();
    }
    public void Undraggable()
    {
        itemDraggable.enabled = false;
    }
    public void IsOnBoard()
    {
        isOnBoard = true;
    }
    public void FlyToPlate()
    {
        if (isOnBoard)
        {
            if (isFlyToDishAnim)
            {
                animator.SetTrigger(flyToDish);
            }
            cuttingBoard.IsFoodOn(false);
            itemType = ItemType.None;
            ItemDone();
            PhaseManager.Ins.DoOneStep();
        }
        else
        {
            FlyToCuttingBoard();
        }
    }
    public virtual void FlyToCuttingBoard()
    {
        onProcess = true;
        knife.itemMoveToTarget.defaultTarget = transform;
        if (!cantCutOnFirst)
        {
            ItemOnCuttingBoard();
        }
    }
    public void ResetType()
    {
        itemType = ItemType.None;
    }
    public void TurnOnClickable()
    {
        itemClickable.enabled = true;
    }
    public void TurnOffClickable()
    {
        itemClickable.enabled = false;
    }
    public void ItemOnCuttingBoard()
    {
        itemType = ItemType.FoodOnCuttingBoard;
    }
}
