using System.Collections.Generic;
using UnityEngine;

public class Pan : Item
{
    public List<Cake> cakes;
    public List<Item> cakesOnPlate;
    public GameObject smokeFX;
    public GameObject jumpingFX;
    public float cakeFryDuration = 5f;
    public bool isOilIn = false;
    public bool isTurnOnStove = false;
    public Animator cakePlateAnimator;

    private readonly List<Item> cakePlateSlots = new List<Item>();

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

        int cakeCount = cakesOnPlate.Count;
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

        int cakeCount = cakes.Count;
        for (int i = 0; i < cakeCount; i++)
        {
            if (cakes[i] == null || cakes[i].hasStartedFrying || cakes[i].isFried) continue;

            StartFryCake(cakes[i]);
            return;
        }
    }

    public void StartFryCake(int cakeIndex)
    {
        if (cakes == null || cakeIndex < 0 || cakeIndex >= cakes.Count) return;

        RemoveCakeFromPlateAt(cakeIndex);
        StartFryCake(cakes[cakeIndex]);
    }

    public void StartFryCakeFromPlate(int cakeIndex)
    {
        StartFryCake(cakeIndex);
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

        int cakeCount = cakes.Count;
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

    private void EnableCakePlateAnimatorIfEmpty()
    {
        if (cakePlateAnimator == null || cakesOnPlate == null) return;
        if (cakesOnPlate.Count > 0) return;

        cakePlateAnimator.enabled = true;
    }

    private void RemoveCakeFromPlateAt(int cakeIndex)
    {
        CacheCakePlateSlots();
        if (cakeIndex < 0 || cakeIndex >= cakePlateSlots.Count) return;

        RemoveCakeFromPlate(cakePlateSlots[cakeIndex]);
    }

    private void RemoveCakeFromPlate(Item cakeOnPlate)
    {   
        if (cakeOnPlate == null || cakesOnPlate == null) return;
        
        if (!cakesOnPlate.Contains(cakeOnPlate)) return;
        
        if (cakeOnPlate.itemDraggable != null)
        {
            cakeOnPlate.itemDraggable.targetItemType = ItemType.None;
        }
        
        if (cakeOnPlate.itemMoveToTarget != null)
        {
            cakeOnPlate.itemMoveToTarget.defaultTarget = null;
        }
        
        cakeOnPlate.gameObject.SetActive(false);
        cakesOnPlate.Remove(cakeOnPlate);
        

        EnableCakePlateAnimatorIfEmpty();
    }

    private void CacheCakePlateSlots()
    {
        if (cakePlateSlots.Count > 0 || cakesOnPlate == null) return;

        cakePlateSlots.AddRange(cakesOnPlate);
    }

}
