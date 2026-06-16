using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;
using DG.Tweening;

[System.Serializable]
public class StirMilestone
{
    [Tooltip("Mốc tiến độ animation cần đạt để gọi sự kiện này. Giá trị từ 0 đến 1.")]
    public float distanceThreshold;
    public UnityEvent onMilestoneReached;
    [HideInInspector] public bool isReached = false;
}

[RequireComponent(typeof(Collider))] // Chuyển sang 3D
public class ItemStirring : MonoBehaviour
{
    public bool IsDone => isDone;

    [Header("--- CÀI ĐẶT KHUẤY 3D ---")]
    public float stirRadius = 1.2f;
    public Transform stirrerTransform;
    [Tooltip("Tâm của cái nồi. Nếu để trống sẽ lấy tâm của chính object này.")]
    public Transform centerPoint;

    [Header("--- ANIMATION TARGET ---")]
    public Animator targetAnimator;
    [Tooltip("Để trống nếu muốn dùng state animation hiện tại.")]
    public string targetStateName;
    public int targetLayer = 0;
    public float stoppedSpeed = 0f;
    [Tooltip("Cần kéo tối thiểu quãng đường này trong mỗi lần giữ chuột thì animation mới bắt đầu chạy.")]
    public float minDragDistanceToAnimate = 0.15f;
    [Tooltip("Nhân tốc độ kéo chuột thành tốc độ animation.")]
    public float dragSpeedMultiplier = 0.35f;
    public float minAnimatorSpeed = 0f;
    public float maxAnimatorSpeed = 1.5f;
    public float speedBlendDuration = 0.1f;
    [Range(0.9f, 1f)] public float completeNormalizedTime = 0.99f;
    public bool resetAnimationOnFirstBegin = true;

    [Header("--- CỘT MỐC SỰ KIỆN ---")]
    [Tooltip("Các sự kiện được gọi khi quãng đường khuấy đạt đến một mức nhất định")]
    public List<StirMilestone> milestones;

    [Header("--- PROGRESS BAR ---")]
    public bool spawnProgressBarOnStir = false;
    public Transform spawnProgressBarPoint;

    [Header("--- SỰ KIỆN ---")]
    public UnityEvent onStirBegin;
    public UnityEvent onStirComplete;

    private bool isDone = false;
    private bool isStirring = false;
    private bool hasBegunStir = false;
    private Vector3 lastMousePos;
    private float currentGestureDistance = 0f;
    private bool canDriveAnimation = false;
    private Camera mainCam;
    private Plane stirPlane; // Mặt phẳng dùng để tính toán khuấy trong không gian 3D
    private Tween speedTween;
    private ProgressBar stirProgressBar;
    private bool isPlayingStirringFx;

    void Start()
    {
        mainCam = Camera.main;
        CacheReferences();
        SetAnimatorSpeed(stoppedSpeed, true);
    }

    private void Reset()
    {
        CacheReferences();
    }

    private void OnValidate()
    {
        CacheReferences();
    }

    private void CacheReferences()
    {
        if (targetAnimator == null) targetAnimator = GetComponentInChildren<Animator>();
    }

    public void BeginStir()
    {
        if (isDone || !enabled) return;
        isStirring = true;

        Vector3 center = centerPoint != null ? centerPoint.position : transform.position;

        // Tạo một mặt phẳng ảo hướng thẳng vào Camera và đi qua tâm Cái Nồi
        stirPlane = new Plane(-mainCam.transform.forward, center);
        lastMousePos = GetMouseOnPlane();
        currentGestureDistance = 0f;
        canDriveAnimation = false;

        if (!hasBegunStir && milestones != null)
        {
            for (int i = 0; i < milestones.Count; i++)
            {
                var milestone = milestones[i];
                milestone.isReached = false;
            }
        }

        if (!hasBegunStir && resetAnimationOnFirstBegin)
        {
            ResetTargetAnimation();
        }

        hasBegunStir = true;
        SetAnimatorSpeed(stoppedSpeed);
        if (stirrerTransform != null) stirrerTransform.gameObject.SetActive(true);
        SpawnStirProgressBar();
        UpdateStirProgressBar();
        StartStirringFx();
        onStirBegin?.Invoke();
    }

    public void Stir()
    {
        if (!isStirring || isDone || !enabled) return;

        Vector3 currentMousePos = GetMouseOnPlane();
        float dragDistance = Vector3.Distance(currentMousePos, lastMousePos);
        currentGestureDistance += dragDistance;
        Vector3 center = centerPoint != null ? centerPoint.position : transform.position;

        if (stirrerTransform != null)
        {
            // Tính toán hướng khuấy trên mặt phẳng 3D
            Vector3 dir = currentMousePos - center;

            // Giới hạn trong bán kính nồi
            if (dir.magnitude > stirRadius) dir = dir.normalized * stirRadius;

            stirrerTransform.position = center + dir;

            if (dir != Vector3.zero)
            {
                // Ép cái thìa luôn hướng mặt lên trên/hoặc theo camera (Tùy chỉnh nếu cần)
                // stirrerTransform.rotation = Quaternion.LookRotation(dir, mainCam.transform.up);
            }
        }

        lastMousePos = currentMousePos;

        if (currentGestureDistance >= minDragDistanceToAnimate)
        {
            canDriveAnimation = true;
        }

        if (canDriveAnimation)
        {
            UpdateAnimatorSpeedFromDrag(dragDistance);
        }

        float progress = GetAnimationProgress();
        UpdateStirProgressBar(progress);
        if (milestones != null)
        {
            for (int i = 0; i < milestones.Count; i++)
            {
                var milestone = milestones[i];
                if (!milestone.isReached && progress >= milestone.distanceThreshold)
                {
                    milestone.isReached = true;
                    milestone.onMilestoneReached?.Invoke();
                }
            }
        }

        if (progress >= completeNormalizedTime)
        {
            CompleteStir();
        }
    }

    public void EndStir()
    {
        if (isDone) return;

        isStirring = false;
        SetAnimatorSpeed(stoppedSpeed);
        StopStirringFx();
    }

    // Tính toán vị trí chuột chính xác trên mặt phẳng 3D của cái nồi
    private Vector3 GetMouseOnPlane()
    {
        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (stirPlane.Raycast(ray, out float enter))
        {
            return ray.GetPoint(enter);
        }
        return centerPoint != null ? centerPoint.position : transform.position;
    }

    private float GetAnimationProgress()
    {
        if (targetAnimator == null) return 0f;
        if (targetAnimator.IsInTransition(targetLayer)) return 0f;

        AnimatorStateInfo stateInfo = targetAnimator.GetCurrentAnimatorStateInfo(targetLayer);
        if (!string.IsNullOrEmpty(targetStateName) && !stateInfo.IsName(targetStateName)) return 0f;

        return Mathf.Clamp01(stateInfo.normalizedTime);
    }

    private void ResetTargetAnimation()
    {
        if (targetAnimator == null) return;

        if (string.IsNullOrEmpty(targetStateName))
        {
            AnimatorStateInfo stateInfo = targetAnimator.GetCurrentAnimatorStateInfo(targetLayer);
            targetAnimator.Play(stateInfo.shortNameHash, targetLayer, 0f);
            return;
        }

        targetAnimator.Play(targetStateName, targetLayer, 0f);
    }

    private void SetAnimatorSpeed(float speed, bool immediate = false)
    {
        if (targetAnimator == null) return;

        speedTween?.Kill();
        if (immediate || speedBlendDuration <= 0f)
        {
            targetAnimator.speed = speed;
            return;
        }

        speedTween = DOTween.To(() => targetAnimator.speed, value => targetAnimator.speed = value, speed, speedBlendDuration);
    }

    private void UpdateAnimatorSpeedFromDrag(float dragDistance)
    {
        if (targetAnimator == null) return;

        speedTween?.Kill();
        float dragSpeed = Time.deltaTime > 0f ? dragDistance / Time.deltaTime : 0f;
        float targetSpeed = Mathf.Clamp(dragSpeed * dragSpeedMultiplier, minAnimatorSpeed, maxAnimatorSpeed);

        if (speedBlendDuration <= 0f)
        {
            targetAnimator.speed = targetSpeed;
            return;
        }

        float lerpT = 1f - Mathf.Exp(-Time.deltaTime / speedBlendDuration);
        targetAnimator.speed = Mathf.Lerp(targetAnimator.speed, targetSpeed, lerpT);
    }

    private void CompleteStir()
    {
        if (isDone) return;

        isDone = true;
        isStirring = false;
        SetAnimatorSpeed(stoppedSpeed);
        StopStirringFx();
        UpdateStirProgressBar(1f);
        StopStirProgressBar();
        onStirComplete?.Invoke();
    }

    private void OnDisable()
    {
        StopStirringFx();
        speedTween?.Kill();
        speedTween = null;
        StopStirProgressBar();
        SetAnimatorSpeed(stoppedSpeed, true);
    }

    private void StartStirringFx()
    {
        if (isPlayingStirringFx || Ply_SoundManager.Ins == null) return;

        isPlayingStirringFx = true;
        // Ply_SoundManager.Ins.PlayFxLoop(FxType.SpoonStirring);
    }

    private void StopStirringFx()
    {
        if (!isPlayingStirringFx) return;

        isPlayingStirringFx = false;
        if (Ply_SoundManager.Ins != null)
        {
            // Ply_SoundManager.Ins.StopFxLoop(FxType.SpoonStirring);
        }
    }

    private void SpawnStirProgressBar()
    {
        if (!spawnProgressBarOnStir || stirProgressBar != null || Ply_Pool.Ins == null)
        {
            return;
        }

        Transform spawnPoint = spawnProgressBarPoint != null ? spawnProgressBarPoint : transform;
        stirProgressBar = Ply_Pool.Ins.Spawn<ProgressBar>(PoolType.ProgressBar, spawnPoint.position, spawnPoint.rotation);
    }

    private void UpdateStirProgressBar()
    {
        UpdateStirProgressBar(GetAnimationProgress());
    }

    private void UpdateStirProgressBar(float progress)
    {
        if (stirProgressBar == null)
        {
            return;
        }

        stirProgressBar.SetProgress(progress);
    }

    private void StopStirProgressBar()
    {
        if (stirProgressBar == null)
        {
            return;
        }

        stirProgressBar.StopProgress();
        stirProgressBar = null;
    }

    private void OnDrawGizmos()
    {
        Vector3 center = centerPoint != null ? centerPoint.position : transform.position;
        Gizmos.color = Color.cyan;
        Gizmos.DrawWireSphere(center, stirRadius);
    }
}
