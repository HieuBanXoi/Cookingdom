using UnityEngine;

public class CuttingBoard : Item
{
    public void IsFoodOn(bool isFoodOn)
    {
        if (isFoodOn)
        {
            itemType = ItemType.None;
        }
        else
        {
            itemType = ItemType.CuttingBoard;
        }
    }
}
