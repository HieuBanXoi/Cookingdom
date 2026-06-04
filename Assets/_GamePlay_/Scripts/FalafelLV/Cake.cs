using UnityEngine;
using UnityEngine.Events;

public class Cake : Item
{
    public Pan pan;
    public float fryDuration = 5f;
    public float fryTimeElapsed = 0f;
    public bool hasStartedFrying = false;
    public bool isFrying = false;
    public bool isFried = false;
    public UnityEvent onFryComplete;

    private Color defaultSpriteColor;
    private bool hasDefaultSpriteColor = false;

    private void Update()
    {
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
            SetSpriteAlpha(0f);
            CacheItemDraggable();
            if (itemDraggable != null) itemDraggable.enabled = true;
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
    }

    public void PauseFrying()
    {
        if (!hasStartedFrying || isFried) return;

        isFrying = false;
    }

    public void ResetFrying()
    {
        CacheSpriteColor();

        fryTimeElapsed = 0f;
        hasStartedFrying = false;
        isFrying = false;
        isFried = false;

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
}
