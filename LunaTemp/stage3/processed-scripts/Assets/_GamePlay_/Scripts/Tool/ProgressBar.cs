using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using System;

public class ProgressBar : Ply_GameUnit
{
    [Header("--- UI COMPONENTS ---")]
    [Tooltip("Kéo object chứa ảnh fill của Progress Bar vào đây")]
    public Transform fillTransform;
    private Tween fillTween;

    private void OnEnable()
    {
        if (fillTransform != null)
        {
            Vector3 scale = fillTransform.localScale;
            scale.x = 0f;
            fillTransform.localScale = scale;
        }
    }

    public void StartProgress(float duration, Action onComplete = null)
    {
        if (fillTransform == null) return;
        //MoreSound
        Vector3 scale = fillTransform.localScale;
        scale.x = 0f;
        fillTransform.localScale = scale;
        fillTween?.Kill(); // Hủy tween cũ nếu đang chạy

        // Chạy Scale X từ 0 -> 1 trong thời gian duration bằng DOTween
        fillTween = fillTransform.DOScaleX(1f, duration).SetEase(Ease.Linear).OnComplete(() =>
        {
            onComplete?.Invoke();
            DeSpawn();
        });
    }

    public void StopProgress()
    {
        fillTween?.Kill();
        DeSpawn();
        //StopSound
    }

    private void DeSpawn()
    {
        if (Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(PoolType.ProgressBar, this);
        }
    }

    private void OnDisable()
    {
        fillTween?.Kill();
    }
}
