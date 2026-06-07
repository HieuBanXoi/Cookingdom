using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

public class Cake : Item
{
    public Pan pan;
    public float fryDuration = 5f;
    public float fryTimeElapsed = 0f;
    public bool hasStartedFrying = false;
    public bool isFrying = false;
    public bool isFried = false;
    public UnityEvent onFryComplete;
    public float fryShakeStrength = 0.04f;
    public float fryShakeDuration = 0.15f;
    public int fryShakeVibrato = 8;

    private Color defaultSpriteColor;
    private bool hasDefaultSpriteColor = false;
    private Tween fryShakeTween;
    private Transform fryShakeTarget;
    private Vector3 fryShakeStartLocalPosition;
    private bool hasFryShakeStartLocalPosition = false;
    private bool hasRegisteredBowlClick = false;
    private bool canClickToBowl = false;
    private bool isMovingToBowl = false;
    private bool canPlayFryShake = true;

    private void Update()
    {
        if (isFried)
        {
            PlayFryShake();

            return;
        }

        if (!hasStartedFrying || isFried) return;

        if (pan != null)
        {
            fryDuration = pan.cakeFryDuration;

            if (pan.CanFryCake())
            {
                ResumeFrying();
            }
            else
            {
                PauseFrying();
            }
        }

        Fry(Time.deltaTime);
    }

    public void Fry(float deltaTime)
    {
        if (!hasStartedFrying || !isFrying || isFried) return;

        CacheSpriteColor();
        if (spriteRenderer == null) return;

        fryTimeElapsed = Mathf.Min(fryTimeElapsed + deltaTime, fryDuration);

        float progress = fryDuration <= 0f ? 1f : fryTimeElapsed / fryDuration;
        SetSpriteAlpha(Mathf.Lerp(defaultSpriteColor.a, 0f, progress));

        if (fryTimeElapsed >= fryDuration)
        {
            isFrying = false;
            isFried = true;
            PlayFryShake();
            SetSpriteAlpha(0f);
            CacheBowlInteraction();
            SetBowlClickEnabled();
            SpawnStarExploreFX();
            onFryComplete?.Invoke();
        }
    }

    public void StartFry()
    {
        if (isFried) return;

        if (!gameObject.activeSelf)
        {
            gameObject.SetActive(true);
        }

        if (hasStartedFrying)
        {
            if (pan == null || pan.CanFryCake())
            {
                ResumeFrying();
            }
            else
            {
                PauseFrying();
            }

            return;
        }

        hasStartedFrying = true;
        CacheSpriteColor();
        CacheBowlInteraction();
        DisableBowlInteraction();

        if (pan != null)
        {
            fryDuration = pan.cakeFryDuration;
        }

        if (pan == null || pan.CanFryCake())
        {
            ResumeFrying();
        }
        else
        {
            PauseFrying();
        }
    }

    public void ResumeFrying()
    {
        if (!hasStartedFrying || isFried) return;

        CacheSpriteColor();
        isFrying = true;
        PlayFryShake();
    }

    public void PauseFrying()
    {
        if (!hasStartedFrying || isFried) return;

        isFrying = false;
        StopFryShake();
    }

    public void ResetFrying()
    {
        CacheSpriteColor();

        fryTimeElapsed = 0f;
        hasStartedFrying = false;
        isFrying = false;
        isFried = false;
        canClickToBowl = false;
        isMovingToBowl = false;
        canPlayFryShake = true;
        StopFryShake();
        DisableBowlInteraction();

        if (spriteRenderer != null)
        {
            spriteRenderer.color = defaultSpriteColor;
        }
    }

    private void CacheSpriteColor()
    {
        if (spriteRenderer == null)
        {
            spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        }

        if (hasDefaultSpriteColor || spriteRenderer == null) return;

        defaultSpriteColor = spriteRenderer.color;
        hasDefaultSpriteColor = true;
    }

    private void SetSpriteAlpha(float alpha)
    {
        Color color = spriteRenderer.color;
        color.a = alpha;
        spriteRenderer.color = color;
    }

    private void CacheBowlInteraction()
    {
        if (itemDraggable == null)
        {
            itemDraggable = GetComponent<ItemDraggable>();
        }

        if (itemClickable == null)
        {
            itemClickable = GetComponent<ItemClickable>();
        }

        if (itemClickable == null)
        {
            itemClickable = gameObject.AddComponent<ItemClickable>();
        }

        itemClickable.requiredClicks = 1;
        itemClickable.infiniteClick = false;
        itemClickable.disableAfterClick = true;

        if (hasRegisteredBowlClick) return;

        if (itemClickable.onClick == null)
        {
            itemClickable.onClick = new UnityEvent();
        }

        itemClickable.onClick.AddListener(MoveToBowlByClick);
        hasRegisteredBowlClick = true;
    }

    private void CacheFryShakeTarget()
    {
        if (fryShakeTarget != null) return;

        fryShakeTarget = transform;
        fryShakeStartLocalPosition = fryShakeTarget.localPosition;
        hasFryShakeStartLocalPosition = true;
    }

    private void PlayFryShake()
    {
        if (!canPlayFryShake || (!isFrying && !isFried)) return;
        if (fryShakeTween != null && fryShakeTween.IsActive()) return;

        CacheFryShakeTarget();
        if (fryShakeTarget == null) return;

        fryShakeTween = fryShakeTarget
            .DOShakePosition(fryShakeDuration, fryShakeStrength, fryShakeVibrato)
            .SetLoops(-1, LoopType.Restart)
            .SetEase(Ease.Linear);
    }

    private void StopFryShake(bool resetPosition = true)
    {
        fryShakeTween?.Kill();
        fryShakeTween = null;

        if (resetPosition && hasFryShakeStartLocalPosition && fryShakeTarget != null)
        {
            fryShakeTarget.localPosition = fryShakeStartLocalPosition;
        }
    }

    public void EnableBowlClick()
    {
        canClickToBowl = true;
        CacheBowlInteraction();
        SetBowlClickEnabled();
    }

    private void SetBowlClickEnabled()
    {
        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;
        }

        if (itemClickable == null) return;

        bool canClick = canClickToBowl && isFried && !isMovingToBowl;
        itemClickable.canClick = canClick;
        itemClickable.enabled = canClick;
    }

    private void DisableBowlInteraction()
    {
        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;
        }

        if (itemClickable == null) return;

        itemClickable.canClick = false;
        itemClickable.enabled = false;
    }

    private void MoveToBowlByClick()
    {
        if (!canClickToBowl || !isFried || isMovingToBowl) return;

        Transform target = bowl != null ? bowl.GetCakePosition(this) : null;
        if (target == null)
        {
            Debug.LogWarning($"[Cake] {gameObject.name} khong tim thay vi tri trong bowl.");
            SetBowlClickEnabled();
            return;
        }

        if (itemMoveToTarget == null)
        {
            itemMoveToTarget = GetComponent<Ply_MoveToTarget>();
        }

        if (itemMoveToTarget == null)
        {
            Debug.LogWarning($"[Cake] {gameObject.name} khong co Ply_MoveToTarget.");
            SetBowlClickEnabled();
            return;
        }

        isMovingToBowl = true;
        canPlayFryShake = false;
        StopFryShake();
        DisableBowlInteraction();
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Click);
        }
        itemMoveToTarget.ExecuteMove3D(target);
    }

    private void OnDestroy()
    {
        if (hasRegisteredBowlClick && itemClickable != null)
        {
            itemClickable.onClick.RemoveListener(MoveToBowlByClick);
        }

        StopFryShake();
    }
    public void SpawnStarExploreFX()
    {
        if (Ply_Pool.Ins == null) return;

        Vector3 spawnPosition = pan != null ? pan.transform.position : transform.position;
        Ply_SoundManager.Ins.PlayFx(FxType.Complete);
        StarExploreFX starExploreFX = Ply_Pool.Ins.Spawn<StarExploreFX>(PoolType.StarExploreFX, spawnPosition, Quaternion.identity);
        if (starExploreFX == null) return;

        starExploreFX.DeSpawnByTime();
    }
    public void PlayCakeToPanSound()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.CakeToPan);
    }
}
