using DG.Tweening;
using UnityEngine;

public class FishFillet : Item
{
    [Header("Info")]
    public int currentStep = 0;
    public Transform[] moveTargets;
    public bool isSaltIn = false;
    public bool isEggReady = false;
    public Transform fishObject;
    public SpriteRenderer[] spriteRenderers;
    public SpriteRenderer[] fishDoneRenderers;
    public Sprite eggFish;
    public Sprite flourFish;

    public Item salt;

    [Header("Cook Timer")]
    public ClockTimer clockTimerPrefab;
    public RectTransform clockSpawnPoint;
    public float cookDuration = 2f;
    public float readyZ = -2f;
    public float readyMoveDuration = 0.35f;

    [Header("Pan Cook")]
    public Pan pan;
    public RectTransform spawnClockOnPan;
    public float panCookDuration = 2f;

    [Header("Bob Effect")]
    public bool bobUseLocalMove = true;
    public Vector3 bobOffset = new Vector3(0f, 0.25f, 0f);
    public float bobDuration = 0.6f;
    public Ease bobEase = Ease.InOutSine;

    [Header("Drop Fail Return")]
    public float returnDuration = 0.45f;
    public Ease returnEase = Ease.OutCubic;

    [Header("Move Target Punch")]
    public Vector3 targetPunchScale = new Vector3(0.08f, -0.05f, 0f);
    public float targetPunchDuration = 0.25f;
    public int targetPunchVibrato = 4;
    public float targetPunchElasticity = 0.5f;

    [Header("Flour Click")]
    public float flourJumpPower = 0.5f;
    public float flourJumpDuration = 0.35f;
    public float[] flourJumpOffsets = { 0.5f, -0.7f, 0.5f };

    private bool isReturningToPreviousTarget;
    private Quaternion returnRotation;
    private Vector3 returnWorldScale;
    private bool resumeBobAfterReturn;
    private int flourClickCount;
    private Sequence fishCookFadeTween;

    public void NextStep()
    {
        currentStep++;
    }
    public void FishClick()
    {
        if (itemClickable == null || !itemClickable.canClick) return;
        if (flourJumpOffsets == null || flourClickCount >= flourJumpOffsets.Length) return;

        itemClickable.canClick = false;

        float jumpOffset = flourJumpOffsets[flourClickCount];
        Vector3 targetPosition = transform.position + Vector3.right * jumpOffset;
        FlipFish();

        transform.DOKill();
        transform.DOJump(targetPosition, flourJumpPower, 1, flourJumpDuration)
            .SetEase(Ease.OutQuad)
            .OnComplete(OnFlourJumpComplete);
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

        PunchCurrentMoveTarget();

        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = ItemType.None;
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
            case 2:
                OnFlour();
                break;
            case 3:
                OnPan();
                break;
                case 4:
                Finish();
                break;
        }
        NextStep();
    }

    private void PunchCurrentMoveTarget()
    {
        if (!TryGetMoveTarget(currentStep, out Transform target)) return;

        target.DOPunchScale(
            targetPunchScale,
            targetPunchDuration,
            targetPunchVibrato,
            targetPunchElasticity
        );
    }

    private void Finish()
    {
        SpawnHeart(false);

        if (PhaseManager.Ins != null)
        {
            PhaseManager.Ins.DoOneStep();
        }
    }


    private void OnPan()
    {
        if (pan != null)
        {
            pan.BeginCookingFish(this, panCookDuration);
        }

        PlayFishCookFade();

        ClockTimer clock = ClockTimer.SpawnUI(
            clockTimerPrefab,
            spawnClockOnPan,
            panCookDuration,
            FinishCookingOnPan
        );

        if (clock == null)
        {
            DOVirtual.DelayedCall(panCookDuration, FinishCookingOnPan);
        }
    }

    private void FinishCookingOnPan()
    {
        fishCookFadeTween?.Kill();
        fishCookFadeTween = null;
        SetRenderersAlpha(spriteRenderers, 0f);
        SetRenderersAlpha(fishDoneRenderers, 1f);

        if (itemDraggable != null)
        {
            itemDraggable.targetItemType = ItemType.Plate;
        }

        if (pan != null)
        {
            pan.CompleteCookingFish(this);
        }
    }

    private void PlayFishCookFade()
    {
        fishCookFadeTween?.Kill();
        SetRenderersAlpha(spriteRenderers, 1f);
        SetRenderersAlpha(fishDoneRenderers, 0f);

        fishCookFadeTween = DOTween.Sequence();
        AddRendererFadeTweens(fishCookFadeTween, spriteRenderers, 0f);
        AddRendererFadeTweens(fishCookFadeTween, fishDoneRenderers, 1f);
        fishCookFadeTween.SetEase(Ease.Linear);
    }

    private void AddRendererFadeTweens(Sequence sequence, SpriteRenderer[] renderers, float targetAlpha)
    {
        if (renderers == null) return;

        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] != null)
            {
                sequence.Join(renderers[i].DOFade(targetAlpha, panCookDuration));
            }
        }
    }

    private void SetRenderersAlpha(SpriteRenderer[] renderers, float alpha)
    {
        if (renderers == null) return;

        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] == null) continue;

            Color color = renderers[i].color;
            color.a = alpha;
            renderers[i].color = color;
        }
    }

    public void EnablePlateTarget()
    {
        ChangeItemType(ItemType.Fish);
        if (itemDraggable == null) return;

        itemDraggable.targetItemType = ItemType.Plate;
        itemDraggable.enabled = true;
    }


    private void OnFlour()
    {
        flourClickCount = 0;
        SpawnFlour();
        if (itemClickable != null)
        {
            itemClickable.enabled = true;
            itemClickable.canClick = true;
        }
    }

    private void OnFlourJumpComplete()
    {
        SpawnFlour();
        flourClickCount++;

        if (flourClickCount < flourJumpOffsets.Length)
        {
            itemClickable.canClick = true;
            return;
        }

        ChangeFishSprite(flourFish);
        itemClickable.enabled = false;
        SpawnBlinkEffect();

            itemDraggable.targetItemType = ItemType.PanBoiling;
            itemType = ItemType.Fish;
    }

    private void FlipFish()
    {
        if (fishObject == null) return;

        Vector3 scale = fishObject.localScale;
        scale.x *= -1f;
        fishObject.localScale = scale;
    }

    private void SpawnFlour()
    {
        if (Ply_Pool.Ins == null) return;

        FlourSmoke flourSmoke = Ply_Pool.Ins.Spawn<FlourSmoke>(
            PoolType.FlourSmoke,
            transform.position,
            Quaternion.identity
        );
        if (flourSmoke == null) return;

        flourSmoke.DeSpawnByTime();
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

    private void OnDisable()
    {
        fishCookFadeTween?.Kill();
        fishCookFadeTween = null;
    }
}
