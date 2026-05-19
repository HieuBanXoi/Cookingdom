using UnityEngine;

public class HandCircularTutorial : MonoBehaviour
{
    [Header("--- CÀI ĐẶT ĐIỂM ---")]
    [Tooltip("Tâm của vòng tròn (Kéo Transform của cái nồi hoặc điểm giữa vào đây)")]
    public Transform centerPoint;

    [Header("--- THÔNG SỐ VÒNG TRÒN ---")]
    public float radius = 1.2f;
    public float speed = 5f;

    private float currentAngle = 0f;

    private void OnEnable()
    {
        // Reset góc quay mỗi khi Hand được bật lên
        currentAngle = 0f;
    }

    private void Update()
    {
        if (centerPoint == null) return;

        // Tăng góc quay theo thời gian
        currentAngle += speed * Time.deltaTime;

        // Tính toán vị trí X, Y theo hình tròn
        float x = Mathf.Cos(currentAngle) * radius;
        float y = Mathf.Sin(currentAngle) * radius;

        // Lấy vị trí tâm cộng với tọa độ vừa tính
        Vector3 newPos = centerPoint.position + new Vector3(x, y, 0);

        // Cố định Z = -9 để bàn tay luôn nằm trên cùng (đè lên các object khác)
        newPos.z = -9f;
        transform.position = newPos;
    }
}