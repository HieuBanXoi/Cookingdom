using UnityEngine;

public class SinkBlock : Item
{
    public Item sinkBlock;
    public void ChangeSinkBlockType()
    {
        if (itemType == ItemType.None)
        {
            itemType = ItemType.ChodeNapBonNuoc;
            sinkBlock.itemMoveToTarget.SetDefaultTarget(this.transform);
            sinkBlock.itemDraggable.returnTransform = this.transform;
        }
        else if (itemType == ItemType.ChodeNapBonNuoc)
        {
            itemType = ItemType.None;
        }
    }
}
