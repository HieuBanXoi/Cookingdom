using UnityEngine;

public class Fish : InWaterItem
{
    public Transform lastPlate;
    public GameObject fishIntestine;
    public GameObject fishBranchial;
    public Transform panPos;
    public GameObject fishOnPan;
    public GameObject oilTop;
    public Item salt;
    private bool isOilOnPan = false;
    private bool isMoveToWaterOnce = false;


    protected override void OnMoveToCuttingBoard()
    {
        ChangeItemType(ItemType.WetItem);
        animator.enabled = true;
        animator.SetTrigger("Wet");
    }


    public void EnablePlateTarget()
    {
        // ChangeItemType(ItemType.Fish);
        if (itemDraggable == null) return;

        itemDraggable.targetItemType = ItemType.Plate;
        itemMoveToTarget.defaultTarget = lastPlate;
    }

    private void ChangerItemType(ItemType newType)
    {
        itemType = newType;
    }
    public void ChangeToFishKnife()
    {
        ChangerItemType(ItemType.FishKnife);
    }
    public void ChangeWetFish()
    {
        ChangerItemType(ItemType.WetItem);
    }
    public void ChangeToFishSalt()
    {
        ChangerItemType(ItemType.FishSalt);
        salt.itemDraggable.targetItemType = ItemType.FishSalt;
    }
    public void EnableFishIntestine()
    {
        if (fishIntestine != null) fishIntestine.SetActive(true);
    }
    public void EnableFishBranchial()
    {
        if (fishBranchial != null) fishBranchial.SetActive(true);
    }
    public void EnableClick()
    {
        if (itemClickable != null) itemClickable.enabled = true;
    }
    public void FishDone()
    {
        // Đánh dấu là đã cắt xong để logic của lớp cha (InWaterItem) cho phép kéo thả.
        isCutDone = true;

        if (itemDraggable != null) itemDraggable.enabled = true;
        if (isOilOnPan)
        {
            ChangeFishTarget();
        }
        else
        {
            itemDraggable.targetItemType = ItemType.None;
        itemMoveToTarget.defaultTarget = null;

        }
        animator.enabled = false;
        itemMoveToTarget.SetEndScale(0.85f);
        // Cập nhật lại trạng thái có thể kéo thả sau khi thay đổi state.
        UpdateDragAvailability();

        itemDraggable.onDropSuccess.AddListener(() =>
        {
            if (fishOnPan != null) fishOnPan.SetActive(true);
            oilTop.SetActive(true);
            gameObject.SetActive(false);

        });

    }
    public void AddOilOnPan()
    {
        isOilOnPan = true;
        if(isCutDone)
        {
            ChangeFishTarget();
        }
    }
    public void ChangeFishTarget()
    {
        itemDraggable.targetItemType = ItemType.PanBoiling;
        itemMoveToTarget.defaultTarget = panPos;
    }

    public override void CutDone()
    {
        InitializeMovement();
        if (!isOnCuttingBoard || isOnPlate || isMoving || isCutDone) return;
        itemType = ItemType.None;
        isCutDone = true;
        if (itemClickable != null)
        {
            itemClickable.enabled = false;

        }
        if (ply_BobEffect != null)
        {
            ply_BobEffect.Stop(false);
            ply_BobEffect.enabled = false;
        }

        if (!jumpToPlateAfterCutDone)
        {
            CuttingBoard cuttingBoard = GetTargetItem(cuttingBoardTarget) as CuttingBoard;
            cuttingBoard?.IsFoodOn(false);
            return;
        }

        ConfigureNextTarget();
        UpdateDragAvailability();
        if (itemDraggable != null)
            itemDraggable.enabled = true;
        Debug.Log("CutDone");

    }
    public override void OnMoveIntoWaterComplete()
    {
        bool wasInWater = isInWater;
        isInWater = true;
        isOnCuttingBoard = false;
        isOnPlate = false;
        onProcess = true;

        if (sink != null)
        {
            sink.RegisterInWaterItem(this);
            HandTutManager.Ins?.RegisterItemInWater(this);
            SetPlateFoodShadowActive(true);
            if (!isMoveToWaterOnce)
            {
                SpawnWaterSplashOnEnter(wasInWater);
                isMoveToWaterOnce = true;

            }
            if (sink.isWaterIn)
            {
                StartWaterEffects();
            }
        }

        ConfigureNextTarget();
    }
    public void ResetItemType()
    {
        itemType = ItemType.None;
    }
}
