using UnityEngine;

public class OilBrush : ItemDragRaycastTarget
{
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
        Debug.Log("BrushOil");
        OilFood oilFood = item as OilFood;
        oilFood.OilIn();
    }
    
}
