using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Fish : InWaterItem
{
    public Transform lastPlate;
    protected override void SpecialMove()
    {
        Debug.Log("SpecialMove");
        transform.DOScale(1f,0.1f);
    }
    public void EnablePlateTarget()
    {
        // ChangeItemType(ItemType.Fish);
        if (itemDraggable == null) return;

        itemDraggable.targetItemType = ItemType.Plate;
        itemMoveToTarget.defaultTarget = lastPlate;
    }
}
