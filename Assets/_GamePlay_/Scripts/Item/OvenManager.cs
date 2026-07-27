using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OvenManager : Ply_Singleton<OvenManager>
{
    [Header("--- REFERENCES ---")]
    [Tooltip("Danh sách các món ăn trên đĩa cần được quản lý.")]
    public FoodOnPlate[] foodOnPlates;
    [Tooltip("Danh sách các vị trí trên lò nướng.")]
    public OvenSlot[] ovenSlots;
    [Header("--- CONFIGS ---")]
    public FoodOnOvenType[] foodOnOvenTypes;
    public int foodJumpCountMax = 16;
    public int activeFryingSounds = 0;
    private void Start()
    {
        UpdateAllFoodTargets();
    }

    /// <summary>
    /// Cập nhật và gán lại tất cả các mục tiêu cho FoodOnPlate dựa trên các OvenSlot có sẵn.
    /// </summary>
    public void UpdateAllFoodTargets()
    {
        // 1. Tìm tất cả các slot có sẵn (itemType là OvenSlot, tức là không có đồ ăn trên đó)
        List<OvenSlot> freeSlots = new List<OvenSlot>();
        for (int i = 0; i < ovenSlots.Length; i++)
        {
            if (ovenSlots[i] != null && ovenSlots[i].itemType == ItemType.OvenSlot)
            {
                freeSlots.Add(ovenSlots[i]);
            }
        }

        // 2. Tìm tất cả các food đang chờ (đang active)
        List<FoodOnPlate> waitingFoods = new List<FoodOnPlate>();
        for (int i = 0; i < foodOnPlates.Length; i++)
        {
            if (foodOnPlates[i] != null && foodOnPlates[i].gameObject.activeInHierarchy)
            {
                waitingFoods.Add(foodOnPlates[i]);
            }
        }

        // 3. Gán các slot có sẵn cho các food đang chờ
        int limit = Mathf.Min(waitingFoods.Count, freeSlots.Count);
        for (int i = 0; i < limit; i++)
        {
            AssignTargetToFood(waitingFoods[i], freeSlots[i]);
        }

        // 4. Với các food còn lại không có slot, hủy gán mục tiêu và không cho kéo
        for (int i = limit; i < waitingFoods.Count; i++)
        {
            AssignTargetToFood(waitingFoods[i], null);
        }
    }

    /// <summary>
    /// Được gọi khi một lò nướng đã trống, tìm món ăn tiếp theo để gán vào lò đó.
    /// </summary>
    public void OnOvenSlotFreed(OvenSlot slot)
    {
        if (slot == null) return;
        
        // Khi một slot được giải phóng, chạy lại toàn bộ logic phân công để gán nó cho food tiếp theo trong hàng đợi.
        UpdateAllFoodTargets();
    }

    public FoodOnOvenType ActivateFoodOnOven(ItemType foodType, Transform slotTransform)
    {
        for (int i = 0; i < foodOnOvenTypes.Length; i++)
        {
            var foodOnOvenType = foodOnOvenTypes[i];
            if (foodOnOvenType.itemType == foodType)
            {
                if (foodOnOvenType.food != null)
                {
                    foodOnOvenType.food.position = slotTransform.position;
                    foodOnOvenType.food.gameObject.SetActive(true);
                }
                StartCoroutine(ActivateFoodsWithDelay(foodOnOvenType, slotTransform));
                return foodOnOvenType;
            }
        }
        return null;
    }

    private IEnumerator ActivateFoodsWithDelay(FoodOnOvenType foodOnOvenType, Transform slotTransform)
    {
        if (foodOnOvenType.food != null)
        {
            foodOnOvenType.food.position = slotTransform.position;
            foodOnOvenType.food.gameObject.SetActive(true);
        }

        if (foodOnOvenType.foodOnOvens != null && foodOnOvenType.foodOnOvens.Length > 0)
        {
            for (int i = 0; i < foodOnOvenType.foodOnOvens.Length; i++)
            {
                FoodOnOven food = foodOnOvenType.foodOnOvens[i];
                if (food != null)
                {
                    food.gameObject.SetActive(true);
                    
                }

                if (i < foodOnOvenType.foodOnOvens.Length - 1)
                {
                    yield return new WaitForSeconds(foodOnOvenType.delayTimeAppear);
                }
            }
        }
    }

    public void StartFryingSound()
    {
        activeFryingSounds++;
        if (activeFryingSounds == 1 && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFxLoop(FxType.Frying);
        }
    }

    public void StopFryingSound()
    {
        activeFryingSounds = Mathf.Max(0, activeFryingSounds - 1);
        if (activeFryingSounds == 0 && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.StopFxLoop(FxType.Frying);
        }
    }

    /// <summary>
    /// Helper function to assign an oven slot to a food on a plate.
    /// </summary>
    private void AssignTargetToFood(FoodOnPlate food, OvenSlot slot)
    {
        if (food == null || food.itemMoveToTarget == null || food.itemDraggable == null) return;

        if (slot != null)
        {
            // Gán mục tiêu và cho phép kéo đến lò nướng
            food.itemMoveToTarget.defaultTarget = slot.transform;
            // food.itemDraggable.isDraggable = true;
        }
        else
        {
            // Bỏ mục tiêu và không cho phép kéo
            food.itemMoveToTarget.defaultTarget = null;
            // food.itemDraggable.isDraggable = false;
        }
    }
    public void OneFoodJumped()
    {
        foodJumpCountMax--;
        if (foodJumpCountMax <= 0)
        {
            HandTutManager.Ins.idleDelay = 0.5f;
            HandTutManager.Ins.StartHandTutNoDelay();
            // Nếu đã hết số lần nhảy, có thể thực hiện hành động tiếp theo, ví dụ: kết thúc bước hoặc hiển thị thông báo.
            GameManager.Ins.LoseGame();
            // Thực hiện hành động tiếp theo ở đây.
        }
    }
}

[Serializable]
public class FoodOnOvenType
{
    public Transform food;
    public FoodOnOven[] foodOnOvens;
    public ItemType itemType;
    public float delayTimeAppear = 0.3f;
}
