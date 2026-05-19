using UnityEngine;

public class Bread : Item
{
    public Knife knife;
    public CuttiingBoard cuttiingBoard;
    public Transform targetPlate;
    public bool isOnBoard = false;
    public void KnifeOut()
    {
        knife.gameObject.SetActive(true);
    }
    public void TurnOffClick()
    {
        itemClickable.enabled = false;
        itemDraggable.enabled = true;
        itemDraggable.targetItemType = ItemType.DiaBanhMi;
        itemDraggable.returnTransform = cuttiingBoard.transform;
        itemMoveToTarget.defaultTarget = targetPlate;
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
            animator.SetTrigger("FlyToDish");
            itemType = ItemType.None;
        }
        else
        {
            knife.itemMoveToTarget.defaultTarget = transform;
            itemType = ItemType.FoodOnCuttingBoard;

        }
    }
}
