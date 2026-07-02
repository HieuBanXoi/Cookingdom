using UnityEngine;

public class Fish : InWaterItem
{
    public Transform lastPlate;
    public GameObject fishIntestine;
    public GameObject fishBranchial;
    public Transform panPos;
    public GameObject fishOnPan;
    public GameObject oilTop;

    protected override void OnMoveToCuttingBoard()
    {
        ChangeItemType(ItemType.FishWet);
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
        ChangerItemType(ItemType.FishWet);
    }
    public void ChangeToFishSalt()
    {
        ChangerItemType(ItemType.FishSalt);
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
        itemDraggable.targetItemType = ItemType.PanBoiling;
        itemMoveToTarget.defaultTarget = panPos;
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
}
