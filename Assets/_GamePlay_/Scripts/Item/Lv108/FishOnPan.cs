using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class FishOnPan : Item
{
    [Header("Cook Timer")]
    public ClockTimer clockTimerPrefab;
    public RectTransform clockSpawnPoint;
    public float cookDuration = 2f;
    public float readyZ = -2f;
    public void CanFlip()
    {
        itemType = ItemType.FishFlip;
    }
    public void FishDone()
    {
        itemType = ItemType.FishDone;
    }
    public void StartCooking()
    {
        ClockTimer clock = ClockTimer.SpawnUI(
            clockTimerPrefab,
            clockSpawnPoint,
            cookDuration,
            FishDone
        );
    }
    
}
