using System.Collections.Generic;
using UnityEngine;

public class Bowl : Item
{
    public bool hasCarrot = false;
    public bool hasCucumber = false;
    public List<Cake> cakes;
    public Transform[] cakePos;
    public void AddCarrot()
    {
        hasCarrot = true;
        if (hasCucumber)
        {
            CanCakeIn();
        }
    }
    public void AddCucumber()
    {
        hasCucumber = true;
        if (hasCarrot)
        {
            CanCakeIn();
        }
    }
    public void CanCakeIn()
    {
        int cakeCount = cakes.Count;
        for (int i = 0; i < cakeCount; i++)
        {
            cakes[i].itemDraggable.targetItemType = ItemType.Bowl;
        }
    }
}
