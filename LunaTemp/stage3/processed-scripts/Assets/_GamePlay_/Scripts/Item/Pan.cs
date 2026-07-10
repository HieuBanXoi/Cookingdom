using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Pan : Item
{

    public GameObject fryingFX;
    public bool isOilIn = false;
    public bool isTurnOnStove = false;
    public Ply_ToggleEvent stoveBtn;
    public Spartula spartula;

    [Header("--- STOVE SHAKE ---")]
    public float stoveShakeDelay = 1f;
    public float stoveShakeDuration = 0.25f;
    private float stoveShakeStrength = 0.05f;
    private int stoveShakeVibrato = 12;
    [Header("Step1")]
    public int vegeOn = 0;
    public Item salt;
    public Item chillie;
    [Header("Step2")]
    public Item meat;
    public Item cream;
    [Header("Step3")]
    public Item noodle;
    public Item lastBowl;

    private bool isPlayingFryingLoop = false;
    private Tween stoveShakeTween;
    private Tween oilScaleTween;
    private Vector3 stoveShakeStartPosition;
    private bool hasStoveShakeStartPosition;

    public void AddOil()
    {
        isOilIn = true;
        if (isTurnOnStove)
        {
            TurnOnFX();
        }
        UpdatePanItemType();
        UpdateFryingSound();
        ProgressSlider.Ins.AddProgressSlide();
    }
    public void TurnOnStove()
    {
        stoveBtn.enabled = false;
        isTurnOnStove = true;
        PlayContinuousStoveShakeAfterDelay();
        if (isOilIn)
        {
            TurnOnFX();
        }
        UpdatePanItemType();
        UpdateFryingSound();
        Ply_SoundManager.Ins.PlayFx(FxType.TurnOn);

    }
    public void TurnOffStove()
    {
        CanDrag();
        isTurnOnStove = false;
        StopStoveShake();
        // if (fryingFX != null) fryingFX.SetActive(false);
        UpdatePanItemType();
        UpdateFryingSound();
        Ply_SoundManager.Ins.PlayFx(FxType.TurnOn);
    }
    public bool CanFry()
    {
        return isOilIn && isTurnOnStove;
    }
    public void TurnOnFX()
    {
        if (fryingFX != null) fryingFX.SetActive(true);
    }
    public void TurnOffFX()
    {
        if (fryingFX != null) fryingFX.SetActive(false);
    }
    public void AddVege()
    {
        ProgressSlider.Ins.AddProgressSlide();

        vegeOn += 1;
        if(vegeOn >= 4)
        {
            salt.itemDraggable.targetItemType = ItemType.PanBoiling;
            salt.itemMoveToTarget.defaultTarget = transform;
            chillie.itemDraggable.targetItemType = ItemType.PanBoiling;
            chillie.itemMoveToTarget.defaultTarget = transform;
        
        }
    }
    public void AddSalt()
    {
        ProgressSlider.Ins.AddProgressSlide();

        vegeOn += 1;
        animator.SetTrigger("SaltOn");
        CheckStep1Done();
    }
    public void AddChillie()
    {
        ProgressSlider.Ins.AddProgressSlide();

        vegeOn += 1;
        animator.SetTrigger("ChillieOn");
        CheckStep1Done();
        
    }
    public void CheckStep1Done()
    {
        if(vegeOn >= 6)
        {
            itemType = ItemType.PanCanStir;
            spartula.itemDraggable.targetItemType = ItemType.PanCanStir;
            spartula.itemMoveToTarget.defaultTarget = transform;
        }
    }
    public void OnStir1Done()
    {
        spartula.itemDraggable.targetItemType = ItemType.None;
        spartula.itemMoveToTarget.defaultTarget = null;

        spartula.itemStirring.targetStateName = "Stir2";
        itemType = ItemType.PanBoiling;
        meat.itemDraggable.targetItemType = ItemType.PanBoiling;
        meat.itemMoveToTarget.defaultTarget = transform;
    }
    public void MeatOn()
    {
        ProgressSlider.Ins.AddProgressSlide();

        cream.itemDraggable.targetItemType = ItemType.PanBoiling;
        cream.itemMoveToTarget.defaultTarget = transform;
        animator.SetTrigger("MeatOn");

    }
    public void CanStir()
    {
        itemType = ItemType.PanCanStir;
        spartula.itemDraggable.targetItemType = ItemType.PanCanStir;
        spartula.itemMoveToTarget.defaultTarget = transform;

    }
    public void OnStir2Done()
    {
        spartula.itemDraggable.targetItemType = ItemType.None;
        spartula.itemMoveToTarget.defaultTarget = null;

        spartula.itemStirring.targetStateName = "Stir3";
        itemType = ItemType.PanBoiling;
        noodle.itemDraggable.targetItemType = ItemType.PanBoiling;
        noodle.itemMoveToTarget.defaultTarget = transform;
    }
    public void OnStir3Done()
    {
        spartula.itemDraggable.targetItemType = ItemType.None;
        spartula.itemMoveToTarget.defaultTarget = null;
        stoveBtn.enabled = true;
        HandTutManager.Ins.StartStoveToggleTutorial();
    }
    public void CanDrag()
    {
        spartula.itemDraggable.targetItemType = ItemType.None;
        itemType = ItemType.None;
        itemDraggable.targetItemType = ItemType.LastBowl;
        itemMoveToTarget.defaultTarget = lastBowl.transform;
        itemDraggable.enabled = true;
    }
    private void UpdatePanItemType()
    {
        ChangeItemType(isOilIn && isTurnOnStove
            ? ItemType.PanBoiling
            : ItemType.Pan);
    }

    private void UpdateFryingSound()
    {
        bool shouldPlayFryingLoop = isOilIn && isTurnOnStove;
        if (shouldPlayFryingLoop)
        {
            PlayFryingSoundLoop();
            return;
        }

        StopFryingSoundLoop();
    }

    private void PlayFryingSoundLoop()
    {
        if (isPlayingFryingLoop || Ply_SoundManager.Ins == null) return;

        isPlayingFryingLoop = true;
        Ply_SoundManager.Ins.PlayFxLoop(FxType.Frying);
    }

    private void StopFryingSoundLoop()
    {
        if (!isPlayingFryingLoop) return;

        isPlayingFryingLoop = false;
        if (Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.StopFxLoop(FxType.Frying);
    }

    private void PlayContinuousStoveShakeAfterDelay()
    {
        StopStoveShake();

        stoveShakeTween = DOVirtual.DelayedCall(stoveShakeDelay, () =>
        {
            if (!isTurnOnStove) return;

            stoveShakeStartPosition = transform.position;
            hasStoveShakeStartPosition = true;

            stoveShakeTween = transform.DOShakePosition(stoveShakeDuration, stoveShakeStrength, stoveShakeVibrato, 90f, false, false)
                .SetEase(Ease.Linear)
                .SetLoops(-1, LoopType.Restart);
        });
    }

    private void StopStoveShake()
    {
        stoveShakeTween?.Kill();
        stoveShakeTween = null;

        if (hasStoveShakeStartPosition)
        {
            transform.position = stoveShakeStartPosition;
            hasStoveShakeStartPosition = false;
        }
    }

    private void OnDisable()
    {
        oilScaleTween?.Kill();
        oilScaleTween = null;
        StopStoveShake();
        StopFryingSoundLoop();
    }

    private void OnDestroy()
    {
        oilScaleTween?.Kill();
        oilScaleTween = null;
        StopStoveShake();
        StopFryingSoundLoop();
    }
    public void PLayTurnOnStoveSound()
    {
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.TurnOn);
        }
    }
}