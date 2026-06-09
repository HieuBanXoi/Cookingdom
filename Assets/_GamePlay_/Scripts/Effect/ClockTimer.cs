using UnityEngine;
using UnityEngine.UI;
using System;

public class ClockTimer : Ply_GameUnit
{
    [Header("--- UI COMPONENTS ---")]
    [Tooltip("Image dang de Filled. Fill Amount se chay tu 1 ve 0.")]
    public Image fillImage;

    private float duration;
    private float elapsedTime;
    private bool isCounting;
    private bool usePool;
    private Action onComplete;

    private void Awake()
    {
        if (tf == null)
        {
            tf = transform;
        }

        if (fillImage == null)
        {
            fillImage = GetComponentInChildren<Image>(true);
        }
    }

    private void OnEnable()
    {
        ResetFill();
    }

    private void Update()
    {
        if (!isCounting)
        {
            return;
        }

        elapsedTime += Time.deltaTime;
        float progress = duration <= 0f ? 1f : Mathf.Clamp01(elapsedTime / duration);

        if (fillImage != null)
        {
            fillImage.fillAmount = 1f - progress;
        }

        if (progress >= 1f)
        {
            CompleteCountdown();
        }
    }

    public static ClockTimer Spawn(Vector3 position, Quaternion rotation, float countdownDuration, Action onComplete = null)
    {
        if (Ply_Pool.Ins == null)
        {
            return null;
        }

        ClockTimer clockTimer = Ply_Pool.Ins.Spawn<ClockTimer>(PoolType.ClockTimer, position, rotation);
        if (clockTimer != null)
        {
            clockTimer.usePool = true;
            clockTimer.StartCountdown(countdownDuration, onComplete);
        }

        return clockTimer;
    }

    public static ClockTimer SpawnUI(
        ClockTimer prefab,
        RectTransform spawnPoint,
        float countdownDuration,
        Action onComplete = null)
    {
        if (prefab == null || spawnPoint == null)
        {
            return null;
        }

        ClockTimer clockTimer = Instantiate(prefab, spawnPoint);
        clockTimer.usePool = false;

        RectTransform rectTransform = clockTimer.transform as RectTransform;
        if (rectTransform != null)
        {
            rectTransform.anchorMin = new Vector2(0.5f, 0.5f);
            rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
            rectTransform.anchoredPosition = Vector2.zero;
            rectTransform.localRotation = Quaternion.identity;
            rectTransform.localScale = Vector3.one;
        }

        clockTimer.StartCountdown(countdownDuration, onComplete);
        return clockTimer;
    }

    public void StartCountdown(float countdownDuration, Action onComplete = null)
    {
        duration = Mathf.Max(0f, countdownDuration);
        elapsedTime = 0f;
        isCounting = true;
        this.onComplete = onComplete;
        ResetFill();

        if (duration <= 0f)
        {
            CompleteCountdown();
        }
    }

    public void StopCountdown()
    {
        isCounting = false;
        onComplete = null;
        DeSpawn();
    }

    private void CompleteCountdown()
    {
        isCounting = false;

        Action completeAction = onComplete;
        onComplete = null;
        completeAction?.Invoke();

        DeSpawn();
    }

    private void ResetFill()
    {
        if (fillImage != null)
        {
            fillImage.fillAmount = 1f;
        }
    }

    private void DeSpawn()
    {
        if (usePool && Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(PoolType.ClockTimer, this);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void OnDisable()
    {
        isCounting = false;
        onComplete = null;
    }
}
