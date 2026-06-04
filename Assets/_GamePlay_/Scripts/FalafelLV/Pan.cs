using UnityEngine;

public class Pan : Item
{
    public Cake[] cakes;
    public Item[] cakesOnPlate;
    public GameObject smokeFX;
    public GameObject jumpingFX;
    public float cakeFryDuration = 5f;
    public bool isOilIn = false;
    public bool isTurnOnStove = false;
    public Animator cakePlateAnimator;

    public void AddOil()
    {
        isOilIn = true;
        if (animator != null) animator.SetTrigger("AddOil");
        if (isTurnOnStove)
        {
            TurnOnFX();
        }
        ChangeCakeState();
        ChangeCakeFryingState();
    }
    public void TurnOnStove()
    {
        isTurnOnStove = true;
        if (isOilIn)
        {
            TurnOnFX();
        }
        ChangeCakeState();
        ChangeCakeFryingState();

    }
    public void TurnOffStove()
    {
        isTurnOnStove = false;
        if (smokeFX != null) smokeFX.SetActive(false);
        if (jumpingFX != null) jumpingFX.SetActive(false);
        ChangeCakeState();
        ChangeCakeFryingState();
    }
    private bool CanCakeIn()
    {
        return isOilIn && isTurnOnStove;
    }
    public bool CanFryCake()
    {
        return isOilIn && isTurnOnStove;
    }
    public void TurnOnFX()
    {
        if (smokeFX != null) smokeFX.SetActive(true);
        if (jumpingFX != null) jumpingFX.SetActive(true);
    }
    public void ChangeCakeState()
    {
        if (cakesOnPlate == null) return;

        int cakeCount = cakesOnPlate.Length;
        if (CanCakeIn())
        {
            for (int i = 0; i < cakeCount; i++)
            {
                if (cakesOnPlate[i] == null) continue;

                if (cakesOnPlate[i].itemDraggable == null || cakesOnPlate[i].itemMoveToTarget == null) continue;

                cakesOnPlate[i].itemDraggable.targetItemType = ItemType.Pan;
                cakesOnPlate[i].itemMoveToTarget.defaultTarget = this.transform;
            }
        }
        else
        {
            for (int i = 0; i < cakeCount; i++)
            {
                if (cakesOnPlate[i] == null) continue;

                if (cakesOnPlate[i].itemDraggable == null || cakesOnPlate[i].itemMoveToTarget == null) continue;

                cakesOnPlate[i].itemDraggable.targetItemType = ItemType.None;
                cakesOnPlate[i].itemMoveToTarget.defaultTarget = null;
            }
        }
    }

    public void StartNextCakeFry()
    {
        if (cakes == null) return;

        int cakeCount = cakes.Length;
        for (int i = 0; i < cakeCount; i++)
        {
            if (cakes[i] == null || cakes[i].hasStartedFrying || cakes[i].isFried) continue;

            StartFryCake(cakes[i]);
            return;
        }
    }

    public void StartFryCake(int cakeIndex)
    {
        if (cakes == null || cakeIndex < 0 || cakeIndex >= cakes.Length) return;

        StartFryCake(cakes[cakeIndex]);
    }

    public void StartFryCakeFromPlate(int cakeIndex)
    {
        StartFryCake(cakeIndex);

        if (cakesOnPlate == null || cakeIndex < 0 || cakeIndex >= cakesOnPlate.Length) return;
        if (cakesOnPlate[cakeIndex] == null) return;

        cakesOnPlate[cakeIndex].gameObject.SetActive(false);
    }

    public void StartFryCake(Cake cake)
    {
        if (cake == null) return;

        cake.pan = this;
        cake.fryDuration = cakeFryDuration;
        cake.StartFry();
    }

    private void ChangeCakeFryingState()
    {
        if (cakes == null) return;

        int cakeCount = cakes.Length;
        if (CanFryCake())
        {
            for (int i = 0; i < cakeCount; i++)
            {
                if (cakes[i] == null) continue;

                cakes[i].fryDuration = cakeFryDuration;
                cakes[i].ResumeFrying();
            }
        }
        else
        {
            for (int i = 0; i < cakeCount; i++)
            {
                if (cakes[i] == null) continue;

                cakes[i].PauseFrying();
            }
        }
    }

}
