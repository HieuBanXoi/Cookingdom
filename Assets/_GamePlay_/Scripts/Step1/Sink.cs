using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public enum SinkWaterState
{
    Empty,
    Rising,
    Full,
    Falling
}

public class Sink : Item
{
    private static readonly int FlowFullState = Animator.StringToHash("FlowFull");
    private static readonly int FlowEmptyState = Animator.StringToHash("FlowEmpty");
    private static readonly int FlowRisingState = Animator.StringToHash("FlowRising");
    private static readonly int FlowFallingState = Animator.StringToHash("FlowFalling");
    [Header("--- SINK STATE ---")]
    public bool isClose;
    public bool isWaterDrop;
    public bool isWaterIn;
    [SerializeField] private SinkWaterState waterState = SinkWaterState.Empty;

    [Header("--- WATER ANIMATORS ---")]
    public Animator faucetAnimator;
    public Animator basinAnimator;
    public GameObject waterDrop;
    public GameObject waterIn;

    [Header("--- BASIN WATER RECT ---")]
    public SpriteRenderer basinWaterRenderer;
    [Tooltip("Rect of the water when the basin is empty, in the renderer parent's local space.")]
    public Rect emptyWaterRect = new Rect(-2.1f, -1.25f, 4.2f, 0.1f);
    [Tooltip("Rect of the water when the basin is full, in the renderer parent's local space.")]
    public Rect fullWaterRect = new Rect(-2.1f, -1.25f, 4.2f, 2.4f);
    [Min(0f)] public float waterRiseDuration = 2f;
    [Min(0f)] public float waterFallDuration = 1f;
    public Ease waterRiseEase = Ease.InOutSine;
    public Ease waterFallEase = Ease.InOutSine;
    public bool drawWaterRects = true;
    public Color emptyRectColor = new Color(0.15f, 0.8f, 1f, 0.9f);
    public Color fullRectColor = new Color(0.1f, 1f, 0.35f, 0.9f);

    [Header("--- WATER DROP POINTS ---")]
    public Transform waterDropTransform;
    [Tooltip("Water drop position when basin water is at the bottom, in the water drop parent's local space.")]
    public Vector3 emptyWaterDropPoint = new Vector3(0.06f, 0.58f, -1.92f);
    [Tooltip("Water drop position when basin water is full, in the water drop parent's local space.")]
    public Vector3 fullWaterDropPoint = new Vector3(0.06f, 2.87f, -1.92f);
    public bool drawWaterDropPoints = true;
    [Min(0.01f)] public float waterDropPointRadius = 0.12f;
    public Color emptyWaterDropPointColor = new Color(0.15f, 0.8f, 1f, 1f);
    public Color fullWaterDropPointColor = new Color(0.1f, 1f, 0.35f, 1f);

    [Header("--- WATER EVENTS ---")]
    public UnityEvent onWaterIn;
    public UnityEvent onNoWaterIn;

    public event Action<bool> WaterTransitionChanged;

    private bool desiredWaterOn;
    private bool displayedWaterOn;
    private bool initialized;
    private Tween basinWaterTween;
    private Vector3 basinWaterDefaultLocalEulerAngles;
    private float basinWaterLocalZ;

    public SinkWaterState WaterState => waterState;
    public bool IsWaterTransitioning =>
        waterState == SinkWaterState.Rising || waterState == SinkWaterState.Falling;

    private void Start()
    {
        InitializeState();
    }

    private void OnDisable()
    {
        basinWaterTween?.Kill();
        basinWaterTween = null;
    }

    public void TurnOnWater()
    {
        EnsureInitialized();
        desiredWaterOn = true;
        isWaterDrop = true;

        if (!IsWaterTransitioning)
        {
            EvaluateStableState();
        }
    }

    public void TurnOffWater()
    {
        EnsureInitialized();
        desiredWaterOn = false;
        isWaterDrop = false;

        if (!IsWaterTransitioning)
        {
            EvaluateStableState();
        }
    }

    public void Close()
    {
        EnsureInitialized();
        isClose = true;

        if (!IsWaterTransitioning)
        {
            EvaluateStableState();
        }
    }

    public void Open()
    {
        EnsureInitialized();
        isClose = false;

        if (!IsWaterTransitioning)
        {
            EvaluateStableState();
        }
    }

    // Public for compatibility with existing UnityEvents.
    public void CompleteWaterRise()
    {
        if (waterState != SinkWaterState.Rising) return;

        waterState = SinkWaterState.Full;
        SetWaterIn(true);
        ApplyWaterRect(fullWaterRect);
        ApplyWaterDropPosition(fullWaterDropPoint);
        EndTransition();
    }

    // Public for compatibility with existing UnityEvents.
    public void CompleteWaterFall()
    {
        if (waterState != SinkWaterState.Falling) return;

        waterState = SinkWaterState.Empty;
        isWaterIn = false;
        ApplyWaterRect(emptyWaterRect);
        ApplyWaterDropPosition(emptyWaterDropPoint);
        SetBasinActive(false);
        EndTransition();
    }

    // Kept for existing UnityEvents while scenes are migrated.
    public void IsWaterIn()
    {
        waterState = SinkWaterState.Full;
        SetWaterIn(true);
    }

    // Kept for existing UnityEvents while scenes are migrated.
    public void NoWaterIn()
    {
        waterState = SinkWaterState.Empty;
        SetWaterIn(false);
    }

    public bool CheckEndPhaseCondition()
    {
        bool canEndPhase = HandTutManager.Ins == null || HandTutManager.Ins.CheckEndPhaseCondition();

        if (canEndPhase && PhaseManager.Ins != null && PhaseManager.Ins.IsCurrentPhaseStepComplete())
        {
            PhaseManager.Ins.TryEndCurrentPhase();
        }

        return canEndPhase;
    }

    public void PlayWaterOutSound()
    {
        if (Ply_SoundManager.Ins == null) return;

        // Ply_SoundManager.Ins.PlayFx(FxType.WaterOut);
    }

    private void InitializeState()
    {
        if (initialized) return;

        initialized = true;
        desiredWaterOn = isWaterDrop;
        displayedWaterOn = desiredWaterOn;
        waterState = isWaterIn ? SinkWaterState.Full : SinkWaterState.Empty;
        CacheBasinWaterRenderer();
        ApplyWaterRect(waterState == SinkWaterState.Full ? fullWaterRect : emptyWaterRect);
        ApplyWaterDropPosition(
            waterState == SinkWaterState.Full ? fullWaterDropPoint : emptyWaterDropPoint
        );
        ApplyStableVisuals();
    }

    private void EnsureInitialized()
    {
        if (!initialized)
        {
            InitializeState();
        }
    }

    private void EvaluateStableState()
    {
        if (waterState == SinkWaterState.Empty && isClose && desiredWaterOn)
        {
            BeginWaterRise();
            return;
        }

        if (waterState == SinkWaterState.Full && !isClose)
        {
            BeginWaterFall();
            return;
        }

        ApplyStableVisuals();
    }

    private void BeginWaterRise()
    {
        waterState = SinkWaterState.Rising;
        displayedWaterOn = true;
        SetFaucetActive(true);
        SetBasinActive(true);
        WaterTransitionChanged?.Invoke(true);

        PlayState(faucetAnimator, FlowRisingState);
        TweenWaterLevel(
            fullWaterRect,
            fullWaterDropPoint,
            waterRiseDuration,
            waterRiseEase,
            CompleteWaterRise
        );
    }

    private void BeginWaterFall()
    {
        waterState = SinkWaterState.Falling;
        SetWaterIn(false);
        WaterTransitionChanged?.Invoke(true);

        SetBasinActive(true);
        if (displayedWaterOn)
        {
            SetFaucetActive(true);
            PlayState(faucetAnimator, FlowFallingState);
        }

        TweenWaterLevel(
            emptyWaterRect,
            emptyWaterDropPoint,
            waterFallDuration,
            waterFallEase,
            CompleteWaterFall
        );
    }

    private void EndTransition()
    {
        ApplyStableVisuals();
        WaterTransitionChanged?.Invoke(false);
        EvaluateStableState();
    }

    private void ApplyStableVisuals()
    {
        displayedWaterOn = desiredWaterOn;
        SetFaucetActive(displayedWaterOn);

        if (displayedWaterOn)
        {
            PlayState(
                faucetAnimator,
                waterState == SinkWaterState.Full ? FlowFullState : FlowEmptyState
            );
        }

        if (waterState == SinkWaterState.Full)
        {
            SetBasinActive(true);
            ApplyWaterRect(fullWaterRect);
            ApplyWaterDropPosition(fullWaterDropPoint);
        }
        else if (waterState == SinkWaterState.Empty)
        {
            PlayBasinEmpty();
        }
    }

    private void PlayBasinEmpty()
    {
        ApplyWaterRect(emptyWaterRect);
        ApplyWaterDropPosition(emptyWaterDropPoint);
        SetBasinActive(false);
    }

    private void CacheBasinWaterRenderer()
    {
        if (basinWaterRenderer == null && waterIn != null)
        {
            basinWaterRenderer = waterIn.GetComponent<SpriteRenderer>();
        }

        if (basinWaterRenderer == null) return;

        basinWaterDefaultLocalEulerAngles = basinWaterRenderer.transform.localEulerAngles;
        basinWaterLocalZ = basinWaterRenderer.transform.localPosition.z;
    }

    private void TweenWaterLevel(
        Rect targetRect,
        Vector3 targetWaterDropPoint,
        float duration,
        Ease ease,
        TweenCallback onComplete
    )
    {
        CacheBasinWaterRenderer();
        CacheWaterDropTransform();
        basinWaterTween?.Kill();

        if (basinWaterRenderer == null || duration <= 0f)
        {
            ApplyWaterRect(targetRect);
            ApplyWaterDropPosition(targetWaterDropPoint);
            onComplete?.Invoke();
            return;
        }

        Rect startRect = GetCurrentWaterRect();
        Vector3 startWaterDropPoint = waterDropTransform != null
            ? waterDropTransform.localPosition
            : targetWaterDropPoint;
        float progress = 0f;
        basinWaterTween = DOTween.To(
                () => progress,
                value =>
                {
                    progress = value;
                    ApplyWaterRect(LerpRect(startRect, targetRect, value));
                    ApplyWaterDropPosition(
                        Vector3.LerpUnclamped(startWaterDropPoint, targetWaterDropPoint, value)
                    );
                },
                1f,
                duration
            )
            .SetEase(ease)
            .OnComplete(() =>
            {
                basinWaterTween = null;
                ApplyWaterRect(targetRect);
                ApplyWaterDropPosition(targetWaterDropPoint);
                onComplete?.Invoke();
            });
    }

    private void CacheWaterDropTransform()
    {
        if (waterDropTransform == null && waterDrop != null)
        {
            waterDropTransform = waterDrop.transform;
        }
    }

    private void ApplyWaterDropPosition(Vector3 localPosition)
    {
        CacheWaterDropTransform();
        if (waterDropTransform == null) return;

        waterDropTransform.localPosition = localPosition;
    }

    private Rect GetCurrentWaterRect()
    {
        CacheBasinWaterRenderer();
        if (basinWaterRenderer == null || basinWaterRenderer.sprite == null)
        {
            return emptyWaterRect;
        }

        Transform waterTransform = basinWaterRenderer.transform;
        Vector2 spriteSize = basinWaterRenderer.sprite.bounds.size;
        Vector2 size = new Vector2(
            Mathf.Abs(spriteSize.x * waterTransform.localScale.x),
            Mathf.Abs(spriteSize.y * waterTransform.localScale.y)
        );
        Vector2 center = waterTransform.localPosition;
        return new Rect(center - size * 0.5f, size);
    }

    private void ApplyWaterRect(Rect rect)
    {
        CacheBasinWaterRenderer();
        if (basinWaterRenderer == null || basinWaterRenderer.sprite == null) return;

        Vector2 spriteSize = basinWaterRenderer.sprite.bounds.size;
        if (Mathf.Approximately(spriteSize.x, 0f) || Mathf.Approximately(spriteSize.y, 0f)) return;

        Vector2 safeSize = new Vector2(Mathf.Max(0.001f, rect.width), Mathf.Max(0.001f, rect.height));
        Vector2 center = rect.center;
        Transform waterTransform = basinWaterRenderer.transform;

        waterTransform.localPosition = new Vector3(center.x, center.y, basinWaterLocalZ);
        waterTransform.localEulerAngles = basinWaterDefaultLocalEulerAngles;
        waterTransform.localScale = new Vector3(
            safeSize.x / spriteSize.x,
            safeSize.y / spriteSize.y,
            waterTransform.localScale.z
        );
    }

    private static Rect LerpRect(Rect from, Rect to, float progress)
    {
        return new Rect(
            Vector2.LerpUnclamped(from.position, to.position, progress),
            Vector2.LerpUnclamped(from.size, to.size, progress)
        );
    }

    private void SetWaterIn(bool value)
    {
        if (isWaterIn == value) return;

        isWaterIn = value;
        if (value)
        {
            onWaterIn?.Invoke();
        }
        else
        {
            onNoWaterIn?.Invoke();
        }
    }

    private void SetFaucetActive(bool value)
    {
        if (waterDrop != null)
        {
            waterDrop.SetActive(value);
        }
        else if (faucetAnimator != null)
        {
            faucetAnimator.gameObject.SetActive(value);
        }
    }

    private void SetBasinActive(bool value)
    {
        if (waterIn != null)
        {
            waterIn.SetActive(value);
        }
        else if (basinAnimator != null)
        {
            basinAnimator.gameObject.SetActive(value);
        }
    }

    private static bool PlayState(Animator targetAnimator, int stateHash)
    {
        if (targetAnimator == null || targetAnimator.runtimeAnimatorController == null)
        {
            return false;
        }

        if (!targetAnimator.HasState(0, stateHash))
        {
            return false;
        }

        targetAnimator.Play(stateHash, 0, 0f);
        return true;
    }

    private void OnDrawGizmosSelected()
    {
        if (drawWaterRects)
        {
            Transform rectReference = null;
            if (basinWaterRenderer != null)
            {
                rectReference = basinWaterRenderer.transform.parent;
            }
            else if (waterIn != null)
            {
                rectReference = waterIn.transform.parent;
            }

            if (rectReference == null) rectReference = transform;

            DrawRectGizmo(rectReference, emptyWaterRect, emptyRectColor);
            DrawRectGizmo(rectReference, fullWaterRect, fullRectColor);
        }

        if (drawWaterDropPoints)
        {
            CacheWaterDropTransform();
            Transform pointReference = waterDropTransform != null
                ? waterDropTransform.parent
                : transform;

            DrawPointGizmo(
                pointReference,
                emptyWaterDropPoint,
                emptyWaterDropPointColor,
                waterDropPointRadius
            );
            DrawPointGizmo(
                pointReference,
                fullWaterDropPoint,
                fullWaterDropPointColor,
                waterDropPointRadius
            );
            DrawPointLineGizmo(pointReference);
        }
    }

    private static void DrawRectGizmo(Transform reference, Rect rect, Color color)
    {
        Matrix4x4 previousMatrix = Gizmos.matrix;
        Color previousColor = Gizmos.color;

        Gizmos.matrix = reference.localToWorldMatrix;
        Gizmos.color = color;
        Gizmos.DrawWireCube(rect.center, new Vector3(rect.width, rect.height, 0f));

        Gizmos.matrix = previousMatrix;
        Gizmos.color = previousColor;
    }

    private static void DrawPointGizmo(
        Transform reference,
        Vector3 localPoint,
        Color color,
        float radius
    )
    {
        Matrix4x4 previousMatrix = Gizmos.matrix;
        Color previousColor = Gizmos.color;

        Gizmos.matrix = reference.localToWorldMatrix;
        Gizmos.color = color;
        Gizmos.DrawSphere(localPoint, radius);
        Gizmos.DrawWireSphere(localPoint, radius * 1.4f);

        Gizmos.matrix = previousMatrix;
        Gizmos.color = previousColor;
    }

    private void DrawPointLineGizmo(Transform reference)
    {
        Matrix4x4 previousMatrix = Gizmos.matrix;
        Color previousColor = Gizmos.color;

        Gizmos.matrix = reference.localToWorldMatrix;
        Gizmos.color = Color.Lerp(emptyWaterDropPointColor, fullWaterDropPointColor, 0.5f);
        Gizmos.DrawLine(emptyWaterDropPoint, fullWaterDropPoint);

        Gizmos.matrix = previousMatrix;
        Gizmos.color = previousColor;
    }
}
