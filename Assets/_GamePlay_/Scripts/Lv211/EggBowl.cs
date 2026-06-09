using UnityEngine;

public class EggBowl : Item
{
    public Item spoon;
    public FishFillet fishFillet;
    public void CanUseSpoon()
    {
        spoon.itemDraggable.targetItemType = ItemType.Bowl1;
    }

}
