using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Item : MonoBehaviour
{
    [Header("--- HAND TUTORIAL ---")]
    public bool isDone = false;
    public bool onProcess = false;

    public ItemDraggable itemDraggable;
    public ItemClickable itemClickable;
    public ItemStirring itemStirring;
    public ItemKnifeSpriteMaskCutter itemKnifeSpriteMaskCutter;
    public ItemSpriteMaskPainter itemSpriteMaskPainter;
    public Ply_MoveToTarget itemMoveToTarget;
    public Animator animator;
    public ItemType itemType;
    public SpriteRenderer spriteRenderer;
    public UnityEvent onKnifeIn;

    private void Awake()
    {
        CacheComponents();
    }

    void Reset()
    {
        CacheComponents();
    }

    private void CacheComponents()
    {
        if (spriteRenderer == null) spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        if (animator == null) animator = GetComponent<Animator>();
        if (itemMoveToTarget == null) itemMoveToTarget = GetComponent<Ply_MoveToTarget>();
        if (itemClickable == null) itemClickable = GetComponent<ItemClickable>();
        if (itemDraggable == null) itemDraggable = GetComponent<ItemDraggable>();
        if (itemStirring == null) itemStirring = GetComponent<ItemStirring>();
        if (itemKnifeSpriteMaskCutter == null) itemKnifeSpriteMaskCutter = GetComponent<ItemKnifeSpriteMaskCutter>();
        if (itemSpriteMaskPainter == null) itemSpriteMaskPainter = GetComponent<ItemSpriteMaskPainter>();
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
            plate.DOPunchScale(new Vector3(0.1f, -0.1f, 0), time).OnComplete(() =>
            {

                ComponentCache<Plate>.Get(plate).FlyOut(transform);
            });
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
            heartEffect.PlaySpawn();
        }
        else
        {
            HeartEffect heartEffect = Ply_Pool.Ins.Spawn<HeartEffect>(PoolType.HeartFX, transform.position, transform.rotation);
            if (heartEffect == null) return;
            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawn();
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
}
