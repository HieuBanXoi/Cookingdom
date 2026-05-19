using UnityEngine;

public class CuttiingBoard : Item
{
    public void IsFoodOn(bool isFoodOn)
    {
        if (isFoodOn)
        {
            itemType = ItemType.None;
        }
        else
        {
            itemType = ItemType.Thot;
        }
    }
}
