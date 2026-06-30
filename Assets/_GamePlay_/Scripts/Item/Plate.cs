using System;
using DG.Tweening;
using UnityEngine;

public class Plate : ToolObject
{
    public override void FlyIn()
    {
        // Ply_SoundManager.Ins.PlayFx(FxType.PlateMove);

        gameObject.SetActive(true);
        transform.DOMove(targetPoint.position, 1f);
    }

    public void FlyOut(Transform transform)
    {
        SpawnFX();
        if (PhaseManager.Ins.DoOneStep())
        {
            if (GameManager.Ins != null) GameManager.Ins.isPlaying = true;
            return;
        }
        DOVirtual.DelayedCall(1.5f, () =>
        {
            // Ply_SoundManager.Ins.PlayFx(FxType.KnifeSwing);

            if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;
            this.transform.DOMove(waittingPoint.position, 1f).OnComplete(() =>
            {
                gameObject.SetActive(false);
                transform.gameObject.SetActive(false);
                transformConveyor.MoveIn();
            });
        });
    }
    public void FlyOut(Transform[] transform)
    {
        SpawnFX();

        DOVirtual.DelayedCall(1.5f, () =>
        {
            if (PhaseManager.Ins.DoOneStep())
            {
                if (GameManager.Ins != null) GameManager.Ins.isPlaying = true;
                return;
            }
            // Ply_SoundManager.Ins.PlayFx(FxType.KnifeSwing);

            if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;
            this.transform.DOMove(waittingPoint.position, 1f).OnComplete(() =>
            {
                gameObject.SetActive(false);
                for (int i = 0; i < transform.Length; i++)
                {
                    transform[i].gameObject.SetActive(false);
                }
                transformConveyor.MoveIn();
            });
        });

    }
    public void SpawnFX()
    {
        HeartEffect heartEffect = Ply_Pool.Ins.Spawn<HeartEffect>(PoolType.HeartFX, transform.position, transform.rotation);
        if (heartEffect == null) return;
        heartEffect.transform.SetParent(transform);
        heartEffect.PlaySpawnWithScale(heartEffectScale);
    }
}
