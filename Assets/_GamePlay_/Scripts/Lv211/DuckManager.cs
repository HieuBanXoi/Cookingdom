using System.Collections;
using UnityEngine;

public class DuckManager : MonoBehaviour
{
    [Header("Move Points")]
    [SerializeField] private Transform[] leftPoints = new Transform[2];
    [SerializeField] private Transform[] rightPoints = new Transform[2];

    [Header("Spawn")]
    [SerializeField, Min(0f)] private float minSpawnInterval = 1f;
    [SerializeField, Min(0f)] private float maxSpawnInterval = 3f;
    [SerializeField, Min(0.01f)] private float moveSpeed = 2f;

    [Header("Sound")]
    [SerializeField, Range(0f, 1f)] private float duckSoundChance = 0.3f;

    private Coroutine spawnCoroutine;

    private void OnEnable()
    {
        spawnCoroutine = StartCoroutine(SpawnLoop());
    }

    private void OnDisable()
    {
        if (spawnCoroutine != null)
        {
            StopCoroutine(spawnCoroutine);
            spawnCoroutine = null;
        }
    }

    private IEnumerator SpawnLoop()
    {
        while (Ply_Pool.Ins == null)
        {
            yield return null;
        }

        SpawnDuck();

        while (true)
        {
            float interval = Random.Range(
                Mathf.Min(minSpawnInterval, maxSpawnInterval),
                Mathf.Max(minSpawnInterval, maxSpawnInterval)
            );

            yield return Yielders.Get(interval);
            SpawnDuck();
        }
    }

    public void SpawnDuck()
    {
        int laneIndex = GetRandomValidLaneIndex();
        if (laneIndex < 0 || Ply_Pool.Ins == null)
        {
            return;
        }

        Transform startPoint = leftPoints[laneIndex];
        Transform targetPoint = rightPoints[laneIndex];

        Duck duck = Ply_Pool.Ins.Spawn<Duck>(
            PoolType.Duck,
            startPoint.position,
            startPoint.rotation
        );

        if (duck != null)
        {
            duck.MoveTo(targetPoint.position, moveSpeed);

            if (Ply_SoundManager.Ins != null && Random.value <= duckSoundChance)
            {
                Ply_SoundManager.Ins.PlayFx(FxType.DuckSound);
            }
        }
    }

    private int GetRandomValidLaneIndex()
    {
        if (leftPoints == null || rightPoints == null)
        {
            return -1;
        }

        int laneCount = Mathf.Min(leftPoints.Length, rightPoints.Length);
        if (laneCount == 0)
        {
            return -1;
        }

        int startIndex = Random.Range(0, laneCount);
        for (int i = 0; i < laneCount; i++)
        {
            int laneIndex = (startIndex + i) % laneCount;
            if (leftPoints[laneIndex] != null && rightPoints[laneIndex] != null)
            {
                return laneIndex;
            }
        }

        return -1;
    }
}
