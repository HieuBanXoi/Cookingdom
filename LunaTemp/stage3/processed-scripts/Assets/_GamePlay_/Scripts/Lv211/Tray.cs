using UnityEngine;

public class Tray : Item
{
    public FishFillet fishFillet;
    public void CanFishDrag()
    {
        if (fishFillet != null)
        {
            fishFillet.itemDraggable.enabled = true;
        }
    }
}
