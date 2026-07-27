using UnityEngine;
using DG.Tweening;
public class FoodOnOven : Item
{
    [Header("FoodSprite")]
    public SpriteRenderer foodSpriteRenderer;
    public Sprite[] foodSprites;
    public int currentFoodStateIndex = 0;

    [Header("Timer")]
    public float cookingDuration = 2f;
    public Transform clockPos;
    [Header("Target & Jump")]
    public Transform targetPlatePos;
    public float jumpPower = 1f;
    public float jumpDuration = 0.5f;
    public int numJumps = 1;

    private int flipCount = 0;
    private ClockTimer currentTimer;
    private OvenSlot ownerOvenSlot;

    private void OnEnable()
    {
        if (itemClickable != null)
        {
            itemClickable.onClick.RemoveListener(HandleClick);
            itemClickable.onClick.AddListener(HandleClick);
            itemClickable.enabled = false;
        }
        flipCount = 0;
    }

    private void OnDisable()
    {
        if (itemClickable != null)
        {
            itemClickable.onClick.RemoveListener(HandleClick);
        }
        currentTimer?.StopCountdown();
    }

    public void SetOvenSlot(OvenSlot slot)
    {
        ownerOvenSlot = slot;
    }

    public void StartCook()
    {
        if(flipCount ==0)
        {
            OvenManager.Ins.StartFryingSound();
        }
        if (clockPos == null)
        {
            Debug.LogWarning("ClockPos is not set for FoodOnOven, cannot start timer.", this);
            return;
        }

        RectTransform clockRectTransform = clockPos as RectTransform;
        if (clockRectTransform == null)
        {
            Debug.LogError("clockPos must be assigned to a UI element with a RectTransform.", this);
            return;
        }

        // Giả định rằng GameManager chứa một tham chiếu đến prefab của ClockTimer.
        if (GameManager.Ins.clockTimerPrefab == null)
        {
            Debug.LogError("ClockTimer prefab is not assigned in GameManager.", this);
            return;
        }

        currentTimer = ClockTimer.SpawnUI(GameManager.Ins.clockTimerPrefab, clockRectTransform, cookingDuration, OnCookingStepComplete);
    }

    private void OnCookingStepComplete()
    {
        currentTimer = null;
        if (itemClickable != null)
        {
            itemClickable.enabled = true;
        }
        SetNextFoodState();
        if(flipCount >= 1)
        {
            SpawnHeart(false);
        }
    }

    private void HandleClick()
    {
        Ply_SoundManager.Ins?.PlayFx(FxType.Click);
        if (itemClickable != null)
        {
            itemClickable.enabled = false;
        }

        flipCount++;

        if (flipCount == 1)
        {
            Flip();
        }
        else if (flipCount >= 2)
        {
            MoveToPlate();
        }
    }

    private void Flip()
    {
        if (animator != null)
        {
            animator.SetTrigger("Flip");
        }
    }

    private void MoveToPlate()
    {   
        OvenManager.Ins.OneFoodJumped();
        OvenManager.Ins.StopFryingSound();
        HandTutManager.Ins.ItemDone(this);

        ownerOvenSlot?.OnFoodRemoved(this);

        if (targetPlatePos != null)
        {
            transform.DOJump(targetPlatePos.position, jumpPower, numJumps, jumpDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    // Dừng tất cả các tween đang chạy trên parent của đĩa và đưa nó về trạng thái ban đầu
                    // trước khi thực hiện hiệu ứng "punch" mới. Điều này ngăn ngừa lỗi cộng dồn hiệu ứng.
                    targetPlatePos.parent.DOKill(true);
                    targetPlatePos.parent.DOPunchScale(new Vector3(0.1f, -0.1f, 0f), 0.3f);
                    Ply_SoundManager.Ins?.PlayFx(FxType.FoodPlace);
                });
        }
        else
        {
            Debug.LogWarning("targetPlatePos is not set for FoodOnOven.", this);
        }
    }
    public void SetNextFoodState()
    {
        if (currentFoodStateIndex < foodSprites.Length)
        {
            foodSpriteRenderer.sprite = foodSprites[currentFoodStateIndex];
        }
        else
        {
            Debug.LogWarning("No more food states available for FoodOnOven.", this);
        }
        currentFoodStateIndex++;
    }
}
