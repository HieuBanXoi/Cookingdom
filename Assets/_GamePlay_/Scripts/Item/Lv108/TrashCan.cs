using UnityEngine;

public class TrashCan : Item
{
    public void TrashOpen()
    {
        itemType = ItemType.Trash;
    }
    public void TrashClose()
    {
        itemType = ItemType.None;
    }
}
