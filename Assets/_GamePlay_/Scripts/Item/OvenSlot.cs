using UnityEngine;
using System.Collections.Generic;
 
public class OvenSlot : Item
{
    [Header("ClockPos")]
    public RectTransform[] clockPos1;
    public RectTransform[] clockPos4;
    public RectTransform[] clockPos6;
    
    [Header("Foods")]
    public FoodOnOven[] foodOnOvens;

    private List<FoodOnOven> activeFoods = new List<FoodOnOven>();


    public void PlaceFood(ItemType foodType)
    {
        this.itemType = ItemType.None;

        FoodOnOvenType activatedFoodType = OvenManager.Ins.ActivateFoodOnOven(foodType, transform);

        if (activatedFoodType != null && activatedFoodType.foodOnOvens != null)
        {
            activeFoods.Clear();
            RectTransform[] targetClockPos = null;
            int foodCount = activatedFoodType.foodOnOvens.Length;

            if (foodCount == 1)
            {
                targetClockPos = clockPos1;
            }
            else if (foodCount == 4)
            {
                targetClockPos = clockPos4;
            }
            else if (foodCount == 6)
            {
                targetClockPos = clockPos6;
            }

            if (targetClockPos != null)
            {
                for (int i = 0; i < foodCount; i++)
                {
                    if (i < targetClockPos.Length && targetClockPos[i] != null)
                    {
                        FoodOnOven food = activatedFoodType.foodOnOvens[i];
                        food.clockPos = targetClockPos[i];
                        food.SetOvenSlot(this);
                        activeFoods.Add(food);
                    }
                }
            }
        }

        // Sau khi đặt food và slot này đã bị chiếm (itemType = None), cập nhật lại target cho tất cả các food còn lại
        OvenManager.Ins.UpdateAllFoodTargets();
    }

    public void OnFoodRemoved(FoodOnOven food)
    {
        activeFoods.Remove(food);
        if (activeFoods.Count == 0)
        {
            this.itemType = ItemType.OvenSlot;
            // Thông báo cho OvenManager rằng slot này đã trống để gán cho món ăn tiếp theo
            OvenManager.Ins.OnOvenSlotFreed(this);
        }
    }
}
