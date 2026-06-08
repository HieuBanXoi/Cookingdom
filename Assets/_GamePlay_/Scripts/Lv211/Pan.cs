using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Pan : Item
{
    public GameObject fryingFX;
    public float cakeFryDuration = 5f;
    public bool isOilIn = false;
    public bool isTurnOnStove = false;

    [Header("--- STOVE SHAKE ---")]
    public float stoveShakeDelay = 1f;
    public float stoveShakeDuration = 0.25f;
    public float stoveShakeStrength = 0.05f;
    public int stoveShakeVibrato = 12;

    private readonly List<Item> cakePlateSlots = new List<Item>();
    private bool isPlayingFryingLoop = false;
    private Tween stoveShakeTween;
    private Vector3 stoveShakeStartPosition;
    private bool hasStoveShakeStartPosition;

    public void AddOil()
    {
        isOilIn = true;
        if (animator != null) animator.SetTrigger("AddOil");
        if (isTurnOnStove)
        {
            TurnOnFX();
        }
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
        UpdateFryingSound();

    }
    public void TurnOffStove()
    {
        isTurnOnStove = false;
        StopStoveShake();
        if (fryingFX != null) fryingFX.SetActive(false);
        UpdateFryingSound();
    }
    public bool CanFry()
    {
        return isOilIn && isTurnOnStove;
    }
    public void TurnOnFX()
    {
        if (fryingFX != null) fryingFX.SetActive(true);
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
        StopStoveShake();
        StopFryingSoundLoop();
    }

    private void OnDestroy()
    {
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
