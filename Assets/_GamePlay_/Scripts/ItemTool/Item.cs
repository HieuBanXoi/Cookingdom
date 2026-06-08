using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Item : MonoBehaviour
{
    [Header("--- HAND TUTORIAL ---")]
    public bool isDone = false;
    public bool onProcess = false;

    [HideInInspector] public ItemDraggable itemDraggable;
    [HideInInspector] public ItemClickable itemClickable;
    [HideInInspector] public ItemStirring itemStirring;
    [HideInInspector] public ItemKnifeSpriteMaskCutter itemKnifeSpriteMaskCutter;
    [HideInInspector] public ItemSpriteMaskPainter itemSpriteMaskPainter;
    [HideInInspector] public ItemMoveToTarget itemMoveToTarget;
    [HideInInspector] public Animator animator;
    public ItemType itemType;
    public SpriteRenderer spriteRenderer;
    public UnityEvent onKnifeIn;

    [Header("--- HEART EFFECT ---")]
    [Min(0f)] public float heartEffectScale = 1f;

    [Header("--- MOVE TO TARGET SOUND ---")]
    public bool playMoveToTargetFinishSound = false;
    public FxType moveToTargetFinishFxType = FxType.Complete;

    private void Awake()
    {
        CacheComponents(true);
    }

    void Reset()
    {
        CacheComponents(true);
    }

    private void OnValidate()
    {
        CacheComponents(true);
    }

    private void CacheComponents(bool refreshHiddenReferences = false)
    {
        if (spriteRenderer == null) spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        if (refreshHiddenReferences || animator == null) animator = GetComponent<Animator>();
        if (refreshHiddenReferences || itemMoveToTarget == null) itemMoveToTarget = GetComponent<ItemMoveToTarget>();
        if (refreshHiddenReferences || itemClickable == null) itemClickable = GetComponent<ItemClickable>();
        if (refreshHiddenReferences || itemDraggable == null) itemDraggable = GetComponent<ItemDraggable>();
        if (refreshHiddenReferences || itemStirring == null) itemStirring = GetComponent<ItemStirring>();
        if (refreshHiddenReferences || itemKnifeSpriteMaskCutter == null) itemKnifeSpriteMaskCutter = GetComponent<ItemKnifeSpriteMaskCutter>();
        if (refreshHiddenReferences || itemSpriteMaskPainter == null) itemSpriteMaskPainter = GetComponent<ItemSpriteMaskPainter>();
    }
    public virtual void ChangeItemType(ItemType itemType)
    {
        this.itemType = itemType;
    }
    public virtual void ChangeAnim(string animName)
    {
        animator.SetTrigger(animName);
    }
    public void ChangeSprite(Sprite sprite)
    {
        spriteRenderer.sprite = sprite;
    }
    public virtual void GetInPlate(Transform plate)
    {
        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;

        float time = 0.5f;
        transform.DOJump(plate.position, 1f, 1, time);
        // transform.DOScale(new Vector3(0.7f, 0.7f, 0.7f), time);
        transform.DORotate(new Vector3(0, 0, 360), time, RotateMode.FastBeyond360).OnComplete(() =>
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Drop);
            transform.SetParent(plate);
            plate.DOPunchScale(new Vector3(0.1f, -0.1f, 0), time);
        });
    }
    public void KnifeIn()
    {
        onKnifeIn?.Invoke();
    }

    public void SpawnHeart(bool isBreak)
    {
        if (Ply_Pool.Ins == null) return;
        if (isBreak)
        {
            HeartBreakEffect heartEffect = Ply_Pool.Ins.Spawn<HeartBreakEffect>(PoolType.HeartBreakFX, transform.position, transform.rotation);
            if (heartEffect == null) return;
            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawnWithScale(heartEffectScale);
        }
        else
        {
            HeartEffect heartEffect = Ply_Pool.Ins.Spawn<HeartEffect>(PoolType.HeartFX, transform.position, transform.rotation);
            if (heartEffect == null) return;
            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawnWithScale(heartEffectScale);
        }

    }

    public virtual void OnDragFailReturnComplete()
    {
        SpawnHeart(true);
    }

    public void TeleportToStart()
    {
        if (itemDraggable != null)
        {
            itemDraggable.TeleportToStart();
        }
    }

    public void ItemDone()
    {
        SpawnHeart(false);
        if (HandTutManager.Ins != null)
        {
            HandTutManager.Ins.ItemDone(this);
            return;
        }
        isDone = true;

    }
    public void SpawnGreenPiece()
    {
        GreenPiece greenPiece = Ply_Pool.Ins.Spawn<GreenPiece>(PoolType.GreenPiece, transform.position, transform.rotation);
        greenPiece.DeSpawnByTime();
    }
    public void SpawnYellowPiece()
    {
        YellowPiece yellowPiece = Ply_Pool.Ins.Spawn<YellowPiece>(PoolType.YellowPiece, transform.position, transform.rotation);
        yellowPiece.DeSpawnByTime();
    }


    public void PlayMoveToTargetFinishSound()
    {
        if (!playMoveToTargetFinishSound || Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(moveToTargetFinishFxType);
    }
    public void PlayOilInSound()
    {
        if (Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(FxType.OilIn);
    }
    public void PlayJumpSound()
    {
        if (Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(FxType.Jump);
    }
    public void PlayDropSound()
    {
        if (Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(FxType.Drop);
    }
}
