using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;

[System.Serializable]
public class StirMilestone
{
    [Tooltip("Quãng đường khuấy cần đạt được để gọi sự kiện này (phải nhỏ hơn requiredDistance)")]
    public float distanceThreshold;
    public UnityEvent onMilestoneReached;
    [HideInInspector] public bool isReached = false;
}

[RequireComponent(typeof(Collider))] // Chuyển sang 3D
public class ItemStirring : MonoBehaviour
{
    [Header("--- CÀI ĐẶT KHUẤY 3D ---")]
    public float stirRadius = 1.2f;
    public float requiredDistance = 15.0f;
    public Transform stirrerTransform;
    [Tooltip("Tâm của cái nồi. Nếu để trống sẽ lấy tâm của chính object này.")]
    public Transform centerPoint;

    [Header("--- CỘT MỐC SỰ KIỆN ---")]
    [Tooltip("Các sự kiện được gọi khi quãng đường khuấy đạt đến một mức nhất định")]
    public List<StirMilestone> milestones;

    [Header("--- SỰ KIỆN ---")]
    public UnityEvent onStirBegin;
    public UnityEvent onStirComplete;

    private float currentDist = 0;
    private bool isDone = false;
    private bool isStirring = false;
    private Vector3 lastMousePos;
    private Camera mainCam;
    private Plane stirPlane; // Mặt phẳng dùng để tính toán khuấy trong không gian 3D

    void Start() { mainCam = Camera.main; }

    public void BeginStir()
    {
        if (isDone || !enabled) return;
        isStirring = true;

        Vector3 center = centerPoint != null ? centerPoint.position : transform.position;

        // Tạo một mặt phẳng ảo hướng thẳng vào Camera và đi qua tâm Cái Nồi
        stirPlane = new Plane(-mainCam.transform.forward, center);
        lastMousePos = GetMouseOnPlane();

        if (milestones != null)
        {
            for (int i = 0; i < milestones.Count; i++)
            {
                var milestone = milestones[i];
                if (currentDist == 0) milestone.isReached = false;
            }
        }

        if (stirrerTransform != null) stirrerTransform.gameObject.SetActive(true);
        onStirBegin?.Invoke();
    }

    public void Stir()
    {
        if (!isStirring || isDone || !enabled) return;

        Vector3 currentMousePos = GetMouseOnPlane();
        currentDist += Vector3.Distance(currentMousePos, lastMousePos);

        // Debug.Log($"Quãng đường khuấy: {currentDist:F2} / {requiredDistance}");

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

        if (milestones != null)
        {
            for (int i = 0; i < milestones.Count; i++)
            {
                var milestone = milestones[i];
                if (!milestone.isReached && currentDist >= milestone.distanceThreshold)
                {
                    milestone.isReached = true;
                    milestone.onMilestoneReached?.Invoke();
                }
            }
        }

        if (currentDist >= requiredDistance)
        {
            isDone = true;
            isStirring = false;
            // if (stirrerTransform != null) stirrerTransform.gameObject.SetActive(false);
            onStirComplete?.Invoke();
        }
    }

    public void EndStir() { isStirring = false; }

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

    private void OnDrawGizmos()
    {
        Vector3 center = centerPoint != null ? centerPoint.position : transform.position;
        Gizmos.color = Color.cyan;
        Gizmos.DrawWireSphere(center, stirRadius);
    }
}