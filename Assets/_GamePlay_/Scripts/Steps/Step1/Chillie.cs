using UnityEngine;

public class Chillie : Item
{
    public Item targetBowl;
    public void SetTargetBowl(Item item)
    {
        targetBowl = item;
        ComponentCache<ItemDragRaycastTarget>.Get(this.transform).ChangeTargetToFind(item);
    }
    public void PutSauceToBowl()
    {
        targetBowl.animator.SetTrigger("ChillieIn");
    }
}
