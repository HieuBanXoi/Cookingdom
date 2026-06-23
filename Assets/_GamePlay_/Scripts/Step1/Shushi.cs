using UnityEngine;

public class Shushi : Item
{
    public Item knife;
    public void OilInDone()
    {
        itemType = ItemType.ShushiOilIn;
    }
    public void BeanInDone()
    {
        itemType = ItemType.ShushiBeanIn;
    }
    public void CutDone()
    {
        itemDraggable.enabled = true;
        SpawnBlinkEffect();
        knife.transform.gameObject.SetActive(true);
    }
}
