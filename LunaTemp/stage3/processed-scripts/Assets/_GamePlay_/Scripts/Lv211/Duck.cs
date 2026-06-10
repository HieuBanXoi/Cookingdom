using DG.Tweening;
using UnityEngine;

public class Duck : Ply_GameUnit
{
    public void MoveTo([Bridge.Ref] Vector3 targetPosition, float moveSpeed)
    {
        transform.DOKill();

        float duration = Vector3.Distance(transform.position, targetPosition) / moveSpeed;
        transform.DOMove(targetPosition, duration)
            .SetEase(Ease.Linear)
            .OnComplete(Despawn);
    }

    private void Despawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.Duck, this);
    }

    private void OnDisable()
    {
        transform.DOKill();
    }
}
