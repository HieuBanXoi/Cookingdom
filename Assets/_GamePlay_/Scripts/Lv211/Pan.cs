using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Pan : Item
{
    public GameObject fryingFX;
    public GameObject oilObject;
    public float cakeFryDuration = 5f;
    public bool isOilIn = false;
    public bool isTurnOnStove = false;

    [Header("--- STOVE SHAKE ---")]
    public float stoveShakeDelay = 1f;
    public float stoveShakeDuration = 0.25f;
    public float stoveShakeStrength = 0.05f;
    public int stoveShakeVibrato = 12;

    private bool isPlayingFryingLoop = false;
    private Tween stoveShakeTween;
    private Tween oilScaleTween;
    private Vector3 stoveShakeStartPosition;
    private bool hasStoveShakeStartPosition;
    private FishFillet cookingFish;
    private bool isFishCooked;

    public void AddOil()
    {
        isOilIn = true;
        if (isTurnOnStove)
        {
            TurnOnFX();
        }
        UpdatePanItemType();
        UpdateFryingSound();
    }
    public void TurnOnStove()
    {
        isTurnOnStove = true;
        PlayContinuousStoveShakeAfterDelay();
        if (isOilIn)
        {
            TurnOnFX();
        }
        UpdatePanItemType();
        UpdateFryingSound();

    }
    public void TurnOffStove()
    {
        isTurnOnStove = false;
        StopStoveShake();
        if (fryingFX != null) fryingFX.SetActive(false);
        UpdatePanItemType();
        UpdateFryingSound();
        TryEnableFishPlateTarget();
    }
    public bool CanFry()
    {
        return isOilIn && isTurnOnStove;
    }
    public void TurnOnFX()
    {
        if (fryingFX != null) fryingFX.SetActive(true);
    }

    public void BeginCookingFish(FishFillet fish, float cookDuration)
    {
        cookingFish = fish;
        isFishCooked = false;

        oilScaleTween?.Kill();
        if (oilObject != null)
        {
            oilScaleTween = oilObject.transform
                .DOScale(Vector3.zero, cookDuration)
                .SetEase(Ease.Linear);
        }
    }

    public void CompleteCookingFish(FishFillet fish)
    {
        if (cookingFish != fish) return;

        isFishCooked = true;
        isOilIn = false;

        oilScaleTween?.Kill();
        oilScaleTween = null;
        if (oilObject != null)
        {
            oilObject.transform.localScale = Vector3.zero;
            oilObject.SetActive(false);
        }
        // if (fryingFX != null) fryingFX.SetActive(false);

        UpdatePanItemType();
        UpdateFryingSound();
        TryEnableFishPlateTarget();
    }

    private void TryEnableFishPlateTarget()
    {
        if (!isFishCooked || isTurnOnStove || cookingFish == null) return;

        cookingFish.EnablePlateTarget();
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
