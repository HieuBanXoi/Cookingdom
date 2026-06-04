using UnityEngine;

public class Bread : Item
{
    public Knife knife;
    public Transform targetPlate;
    public bool isOnBoard = false;
    public ItemType targetPlateType;
    public string flyToDish = null;
    public bool isFlyToDishAnim = false;
    public bool cantCutOnFirst = false;

    public void KnifeOut()
    {
        knife.gameObject.SetActive(true);
        Ply_SoundManager.Ins.PlayFx(FxType.PlaceKnife);
    }
    public virtual void TurnOffClick()
    {
        if (itemClickable != null)
        {
            itemClickable.enabled = false;

        }
        itemDraggable.enabled = true;
        itemDraggable.targetItemType = targetPlateType;
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
}
