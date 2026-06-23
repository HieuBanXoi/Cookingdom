using UnityEngine;

public class Chillie : Item
{
    public Item targetBowl;
    public void SetTargetBowl(Item item)
    {
        targetBowl = item;
        itemDraggable.targetItemType = ItemType.SmallBowlTarget;
    }
    public void PutSauceToBowl()
    {
        targetBowl.animator.SetTrigger("ChillieIn");
    }
}
