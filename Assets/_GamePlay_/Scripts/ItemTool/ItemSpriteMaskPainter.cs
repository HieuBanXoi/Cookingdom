using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(Collider))]
public class ItemSpriteMaskPainter : MonoBehaviour
{
    [Header("--- BRUSH MASK ---")]
    public SpriteMask brushMaskPrefab;
    public Transform brushParent;
    public float brushRadius = 0.25f;
    public float brushDiameterAtScaleOne = 1f;
    public bool scaleBrushFromRadius = true;
    public float brushSpacing = 0.12f;
    public float brushZOffset = -0.01f;

    [Header("--- PAINT AREA ---")]
    public Collider paintAreaCollider;
    public Transform paintPlaneCenter;
    [Range(0.01f, 1f)] public float requiredPercent = 0.85f;
    [Range(4, 80)] public int sampleColumns = 24;
    [Range(4, 80)] public int sampleRows = 16;
    public bool resetOnEnable = true;

    [Header("--- EVENTS ---")]
    public UnityEvent onPaintBegin;
    public UnityEvent onPaint;
    public UnityEvent onPaintComplete;

    private readonly List<SpriteMask> spawnedBrushes = new List<SpriteMask>();
    private bool[] coveredSamples;
    private Bounds paintBounds;
    private Plane paintPlane;
    private Camera mainCam;
    private bool isPainting;
    private bool isComplete;
    private bool hasLastPoint;
    private Vector3 lastPaintPoint;
    private int coveredCount;
    private int totalSamples;

    private void Awake()
    {
        mainCam = Camera.main;
        if (paintAreaCollider == null) paintAreaCollider = GetComponent<Collider>();
        if (brushParent == null) brushParent = transform;
    }

    private void OnEnable()
    {
        if (resetOnEnable)
        {
            ResetPaint();
        }
    }

    public void ResetPaint()
    {
        for (int i = 0; i < spawnedBrushes.Count; i++)
        {
            if (spawnedBrushes[i] != null)
            {
                Destroy(spawnedBrushes[i].gameObject);
            }
        }

        spawnedBrushes.Clear();
        coveredCount = 0;
        isPainting = false;
        isComplete = false;
        hasLastPoint = false;

        CacheSamples();
    }

    public void BeginPaint()
    {
        if (!enabled || isComplete || brushMaskPrefab == null) return;

        if (coveredSamples == null || coveredSamples.Length == 0)
        {
            CacheSamples();
        }

        isPainting = true;
        hasLastPoint = false;
        paintPlane = CreatePaintPlane();

        onPaintBegin?.Invoke();
        Paint();
    }

    public void Paint()
    {
        if (!isPainting || isComplete || brushMaskPrefab == null) return;

        Vector3 point = GetMouseOnPaintPlane();
        if (!IsPointInsidePaintArea(point)) return;

        if (!hasLastPoint)
        {
            Stamp(point);
            lastPaintPoint = point;
            hasLastPoint = true;
        }
        else
        {
            StampLine(lastPaintPoint, point);
            lastPaintPoint = point;
        }

        onPaint?.Invoke();
        CheckComplete();
    }

    public void EndPaint()
    {
        isPainting = false;
        hasLastPoint = false;
    }

    private void StampLine(Vector3 from, Vector3 to)
    {
        float distance = Vector3.Distance(from, to);
        int steps = Mathf.Max(1, Mathf.CeilToInt(distance / Mathf.Max(0.001f, brushSpacing)));

        for (int i = 1; i <= steps; i++)
        {
            Vector3 point = Vector3.Lerp(from, to, i / (float)steps);
            Stamp(point);
        }
    }

    private void Stamp(Vector3 point)
    {
        Vector3 stampPos = point + mainCam.transform.forward * brushZOffset;
        SpriteMask mask = Instantiate(brushMaskPrefab, stampPos, Quaternion.identity, brushParent);
        if (scaleBrushFromRadius)
        {
            float scale = (brushRadius * 2f) / Mathf.Max(0.001f, brushDiameterAtScaleOne);
            mask.transform.localScale = new Vector3(scale, scale, mask.transform.localScale.z);
        }
        spawnedBrushes.Add(mask);
        MarkCoveredSamples(point);
    }

    private void CacheSamples()
    {
        if (paintAreaCollider == null) paintAreaCollider = GetComponent<Collider>();
        paintBounds = paintAreaCollider != null ? paintAreaCollider.bounds : new Bounds(transform.position, Vector3.one);

        totalSamples = sampleColumns * sampleRows;
        coveredSamples = new bool[totalSamples];
    }

    private void MarkCoveredSamples(Vector3 brushCenter)
    {
        if (coveredSamples == null) return;

        float radiusSqr = brushRadius * brushRadius;

        for (int y = 0; y < sampleRows; y++)
        {
            for (int x = 0; x < sampleColumns; x++)
            {
                int index = y * sampleColumns + x;
                if (coveredSamples[index]) continue;

                Vector3 sample = GetSamplePoint(x, y);
                if ((sample - brushCenter).sqrMagnitude <= radiusSqr)
                {
                    coveredSamples[index] = true;
                    coveredCount++;
                }
            }
        }
    }

    private Vector3 GetSamplePoint(int x, int y)
    {
        float u = sampleColumns <= 1 ? 0.5f : x / (float)(sampleColumns - 1);
        float v = sampleRows <= 1 ? 0.5f : y / (float)(sampleRows - 1);
        return new Vector3(
            Mathf.Lerp(paintBounds.min.x, paintBounds.max.x, u),
            Mathf.Lerp(paintBounds.min.y, paintBounds.max.y, v),
            paintBounds.center.z
        );
    }

    private void CheckComplete()
    {
        if (isComplete || totalSamples <= 0) return;

        if (GetProgress01() >= requiredPercent)
        {
            isComplete = true;
            isPainting = false;
            onPaintComplete?.Invoke();
        }
    }

    private Plane CreatePaintPlane()
    {
        Vector3 center = paintPlaneCenter != null ? paintPlaneCenter.position : transform.position;
        return new Plane(-mainCam.transform.forward, center);
    }

    private Vector3 GetMouseOnPaintPlane()
    {
        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (paintPlane.Raycast(ray, out float enter))
        {
            return ray.GetPoint(enter);
        }

        return paintPlaneCenter != null ? paintPlaneCenter.position : transform.position;
    }

    private bool IsPointInsidePaintArea(Vector3 point)
    {
        if (paintAreaCollider == null) return true;

        Vector3 closest = paintAreaCollider.ClosestPoint(point);
        return (closest - point).sqrMagnitude <= 0.0001f;
    }

    public float GetProgress01()
    {
        if (totalSamples <= 0) return 0f;
        return coveredCount / (float)totalSamples;
    }
}
