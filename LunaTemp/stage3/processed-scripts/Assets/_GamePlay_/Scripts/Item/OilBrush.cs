using System.Collections.Generic;
using UnityEngine;

public class OilBrush : ItemDragRaycastTarget
{
    public List<OilFood> oilFoods;
    protected override void OnEnable()
    {
        base.OnEnable();
        onTargetFoundWithItem.RemoveListener(BrushOil);
        onTargetFoundWithItem.AddListener(BrushOil);
    }

    protected override void OnDisable()
    {
        base.OnDisable();
        onTargetFoundWithItem.RemoveListener(BrushOil);

    }
    public void BrushOil(Item item)
    {
        OilFood oilFood = item as OilFood;
        oilFood.OilIn();
        if (oilFood.isOilOnce)
        {
            oilFoods.Remove(oilFood);
            if(oilFoods.Count == 0)
            {
                HandTutManager.Ins.ItemDone(ownerItem);
                return;
            }
            ownerItem.itemMoveToTarget.defaultTarget = oilFoods[0].transform;
        }
        else
        {
            oilFood.isOilOnce = true;
        }


    }
    
}
