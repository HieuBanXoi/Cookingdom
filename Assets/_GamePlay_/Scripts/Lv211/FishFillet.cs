using DG.Tweening;
using UnityEngine;

public class FishFillet : Item
{
    [Header("Info")]
    public int currentStep = 0;
    public Transform[] moveTargets;
    public bool isSaltIn = false;
    public bool isEggReady = false;
    public SpriteRenderer[] spriteRenderers;
    public Sprite eggFish;
    public Sprite flourFish;
    public Sprite cookedFish;

    public Item salt;

    [Header("Cook Timer")]
    public ClockTimer clockTimerPrefab;
    public RectTransform clockSpawnPoint;
    public float cookDuration = 2f;
    public float readyZ = -2f;
    public float readyMoveDuration = 0.35f;

    [Header("Bob Effect")]
    public bool bobUseLocalMove = true;
    public Vector3 bobOffset = new Vector3(0f, 0.25f, 0f);
    public float bobDuration = 0.6f;
    public Ease bobEase = Ease.InOutSine;

    [Header("Drop Fail Return")]
    public float returnDuration = 0.45f;
    public Ease returnEase = Ease.OutCubic;

    private bool isReturningToPreviousTarget;
    private Quaternion returnRotation;
    private Vector3 returnWorldScale;
    private bool resumeBobAfterReturn;

    public void NextStep()
    {
        currentStep++;
    }
    public void FishClick()
    {
        
    }
    public void ChangeFishSprite(Sprite sprite)
    {
        for(int i = 0; i < spriteRenderers.Length; i++)
        {
            spriteRenderers[i].sprite = sprite;
        }
    }
    public void MoveToTarget()
    {
        if (!TryGetMoveTarget(currentStep, out Transform target)) return;
        if (itemMoveToTarget == null) return;

        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;
        }
        itemMoveToTarget.ExecuteMove3D(target);
    }

    public void ReturnToPreviousTarget()
    {
        ReturnToPreviousTarget(transform.rotation, transform.lossyScale);
    }

    public void ReturnToPreviousTarget(Quaternion targetRotation, Vector3 targetWorldScale)
    {
        ReturnToPreviousTarget(targetRotation, targetWorldScale, false);
    }

    public void ReturnToPreviousTarget(
        Quaternion targetRotation,
        Vector3 targetWorldScale,
        bool resumeBob)
    {
        if (!TryGetMoveTarget(currentStep - 1, out Transform target)) return;

        isReturningToPreviousTarget = true;
        resumeBobAfterReturn = resumeBob;
        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;
        }

        returnRotation = targetRotation;
        returnWorldScale = targetWorldScale;

        transform.DOKill();
        transform.SetParent(target.parent, true);

        Vector3 targetLocalScale = GetLocalScaleForWorldScale(targetWorldScale);
        Sequence returnSequence = DOTween.Sequence();
        returnSequence.Join(transform.DOMove(target.position, returnDuration));
        returnSequence.Join(transform.DORotateQuaternion(targetRotation, returnDuration));
        returnSequence.Join(transform.DOScale(targetLocalScale, returnDuration));
        returnSequence.SetEase(returnEase);
        returnSequence.OnComplete(MoveDone);
    }

    public bool HasMoveTarget(int index)
    {
        return moveTargets != null
            && index >= 0
            && index < moveTargets.Length
            && moveTargets[index] != null;
    }

    public void MoveDone()
    {
        itemDraggable.targetItemType = ItemType.None;
        if (isReturningToPreviousTarget)
        {
            isReturningToPreviousTarget = false;
            transform.rotation = returnRotation;
            SetWorldScale(returnWorldScale);
            if (resumeBobAfterReturn)
            {
                PlayBobEffect();
            }
            resumeBobAfterReturn = false;
            return;
        }

        switch (currentStep)
        {
            case 0:
                if (salt != null && salt.itemDraggable != null)
                {
                    salt.itemDraggable.targetItemType = ItemType.Plate;
                }
                break;
            case 1:
                StartCookTimer();
                break;
        }
        NextStep();
    }

    private bool TryGetMoveTarget(int index, out Transform target)
    {
        target = null;
        if (moveTargets != null && index >= 0 && index < moveTargets.Length)
        {
            target = moveTargets[index];
        }

        if (target != null) return true;

        Debug.LogWarning($"[FishFillet] {name} is missing moveTargets[{index}].");
        return false;
    }

    private void SetWorldScale(Vector3 worldScale)
    {
        transform.localScale = GetLocalScaleForWorldScale(worldScale);
    }

    private Vector3 GetLocalScaleForWorldScale(Vector3 worldScale)
    {
        if (transform.parent == null) return worldScale;

        Vector3 parentScale = transform.parent.lossyScale;
        return new Vector3(
            parentScale.x != 0f ? worldScale.x / parentScale.x : transform.localScale.x,
            parentScale.y != 0f ? worldScale.y / parentScale.y : transform.localScale.y,
            parentScale.z != 0f ? worldScale.z / parentScale.z : transform.localScale.z
        );
    }

    private void StartCookTimer()
    {
        ClockTimer clock = ClockTimer.SpawnUI(
            clockTimerPrefab,
            clockSpawnPoint,
            cookDuration,
            MoveFishToReadyZ
        );

        if (clock == null)
        {
            DOVirtual.DelayedCall(cookDuration, MoveFishToReadyZ);
        }
    }

    private void MoveFishToReadyZ()
    {
        ChangeFishSprite(eggFish);
        transform.DOKill();
        transform.parent.DOMoveZ(readyZ, readyMoveDuration)
            .SetEase(Ease.OutCubic)
            .OnComplete(SetFishReady);
    }

    private void SetFishReady()
    {
        PlayBobEffect();

        ChangeItemType(ItemType.Fish);
        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = ItemType.BowlFlour;
        }
    }

    public bool StopBobEffectForCatch()
    {
        Ply_BobEffect bobEffect = GetComponent<Ply_BobEffect>();
        if (bobEffect == null || !bobEffect.IsPlaying) return false;

        bobEffect.Stop(false);
        return true;
    }

    private void PlayBobEffect()
    {
        Ply_BobEffect bobEffect = GetComponent<Ply_BobEffect>();
        if (bobEffect == null)
        {
            bobEffect = gameObject.AddComponent<Ply_BobEffect>();
            bobEffect.playOnEnable = false;
        }

        bobEffect.useLocalMove = bobUseLocalMove;
        bobEffect.bobOffset = bobOffset;
        bobEffect.duration = bobDuration;
        bobEffect.ease = bobEase;
        bobEffect.CacheStartPosition();
        bobEffect.Play();
    }

    public void SaltToFishDone()
    {
        itemType= ItemType.Fish;
        isSaltIn = true;
        SpawnBlinkEffect();
        CheckCanMoveToEggBowl();
    }
    public void StirEggDone()
    {
        isEggReady = true;
        CheckCanMoveToEggBowl();
    }
    private void CheckCanMoveToEggBowl()
    {
        if(isEggReady && isSaltIn)
        {
            itemDraggable.targetItemType = ItemType.Bowl1;
        }
    }
}
