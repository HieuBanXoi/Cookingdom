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
    public float starExploreSpawnInterval = 2f;

    private Color defaultSpriteColor;
    private bool hasDefaultSpriteColor = false;
    private Tween fryShakeTween;
    private Transform fryShakeTarget;
    private Vector3 fryShakeStartLocalPosition;
    private bool hasFryShakeStartLocalPosition = false;
    private bool hasRegisteredDragEvents = false;
    private float starExploreSpawnTimer = 0f;
    private bool canSpawnStarExplore = false;
    private bool canPlayFryShake = true;

    private void Update()
    {
        if (isFried)
        {
            PlayFryShake();

            if (canSpawnStarExplore)
            {
                UpdateStarExploreSpawn(Time.deltaTime);
            }

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
            CacheItemDraggable();
            if (itemDraggable != null) itemDraggable.enabled = true;
            starExploreSpawnTimer = 0f;
            canSpawnStarExplore = true;
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
        CacheItemDraggable();
        RegisterDragEvents();

        if (itemDraggable != null) itemDraggable.enabled = false;

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
        starExploreSpawnTimer = 0f;
        canSpawnStarExplore = false;
        canPlayFryShake = true;
        StopFryShake();

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

    private void CacheItemDraggable()
    {
        if (itemDraggable == null)
        {
            itemDraggable = GetComponent<ItemDraggable>();
        }
    }

    private void RegisterDragEvents()
    {
        if (hasRegisteredDragEvents || itemDraggable == null) return;

        itemDraggable.onBeginDrag.AddListener(StopFryShakeByDrag);
        itemDraggable.onBeginDrag.AddListener(StopStarExploreSpawn);
        itemDraggable.onDropSuccess.AddListener(StopFryShakeByDrag);
        itemDraggable.onDropSuccess.AddListener(StopStarExploreSpawn);
        hasRegisteredDragEvents = true;
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

    private void StopFryShakeByDrag()
    {
        canPlayFryShake = false;
        StopFryShake(false);
    }

    public override void OnDragFailReturnComplete()
    {
        base.OnDragFailReturnComplete();

        canPlayFryShake = true;

        if (hasStartedFrying && (isFrying || isFried))
        {
            PlayFryShake();
        }

        if (isFried)
        {
            StartStarExploreSpawn();
        }
    }

    private void OnDestroy()
    {
        if (hasRegisteredDragEvents && itemDraggable != null)
        {
            itemDraggable.onBeginDrag.RemoveListener(StopFryShakeByDrag);
            itemDraggable.onBeginDrag.RemoveListener(StopStarExploreSpawn);
            itemDraggable.onDropSuccess.RemoveListener(StopFryShakeByDrag);
            itemDraggable.onDropSuccess.RemoveListener(StopStarExploreSpawn);
        }

        StopFryShake();
    }
    public void SpawnStarExploreFX()
    {
        if (Ply_Pool.Ins == null) return;

        StarExploreFX starExploreFX = Ply_Pool.Ins.Spawn<StarExploreFX>(PoolType.StarExploreFX, transform.position, Quaternion.identity);
        if (starExploreFX == null) return;

        starExploreFX.DeSpawnByTime();
    }

    private void UpdateStarExploreSpawn(float deltaTime)
    {
        if (starExploreSpawnInterval <= 0f) return;

        starExploreSpawnTimer += deltaTime;
        if (starExploreSpawnTimer < starExploreSpawnInterval) return;

        starExploreSpawnTimer = 0f;
        SpawnStarExploreFX();
    }

    private void StartStarExploreSpawn()
    {
        canSpawnStarExplore = true;
        starExploreSpawnTimer = 0f;
    }

    private void StopStarExploreSpawn()
    {
        canSpawnStarExplore = false;
        starExploreSpawnTimer = 0f;
    }
}
