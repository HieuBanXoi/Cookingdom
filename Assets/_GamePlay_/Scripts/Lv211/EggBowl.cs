using UnityEngine;

public class EggBowl : Item
{
    public Item spoon;
    public void CanUseSpoon()
    {
        spoon.itemDraggable.targetItemType = ItemType.Bowl1;
    }
}
