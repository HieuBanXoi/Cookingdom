using UnityEngine;
using DG.Tweening;

public class HandTutorial : MonoBehaviour
{
    [Header("--- CÀI ĐẶT ĐIỂM ---")]
    [Tooltip("Transform điểm bắt đầu (Kéo 1 GameObject rỗng nằm ở vị trí trên băng chuyền vào đây)")]
    public Transform startPoint;
    [Tooltip("Transform điểm kết thúc (Kéo 1 GameObject rỗng nằm ở vị trí trên cái thớt vào đây)")]
    public Transform endPoint;

    [Header("--- THÔNG SỐ TWEEN ---")]
    public float moveDuration = 1.2f;
    public float fadeDuration = 0.2f;
    public float waitAtEndDuration = 0.2f;
    public Ease easeType = Ease.InOutSine;

    private Sequence tutSequence;
    private SpriteRenderer spriteRenderer;

    private void Awake()
    {
        spriteRenderer = ComponentCache<SpriteRenderer>.Get(transform);
    }

    private void OnEnable()
    {
        PlayTutorial();
    }

    private void OnDisable()
    {
        StopTutorial();
    }

    public void PlayTutorial()
    {
        StopTutorial();

        if (startPoint == null || endPoint == null)
        {
            Debug.LogWarning("[HandTutorial] Chưa gán startPoint hoặc endPoint!");
            return;
        }

        Vector3 startPos = startPoint.position;
        startPos.z = -9f; // Ép cố định Z để Hand luôn nằm trên cùng
        Vector3 endPos = endPoint.position;
        endPos.z = -9f;

        transform.position = startPos;

        tutSequence = DOTween.Sequence();

        // Nếu Hand có SpriteRenderer, tạo hiệu ứng hiện mờ dần ở start và mờ đi ở end cho đẹp mắt
        if (spriteRenderer != null)
        {
            Color color = spriteRenderer.color;
            color.a = 0f;
            spriteRenderer.color = color;

            tutSequence.Append(spriteRenderer.DOFade(1f, fadeDuration));
            tutSequence.Join(transform.DOMove(endPos, moveDuration).SetEase(easeType));
            tutSequence.Append(spriteRenderer.DOFade(0f, fadeDuration));
            tutSequence.AppendInterval(waitAtEndDuration);
        }
        else
        {
            // Nếu không dùng SpriteRenderer, chỉ di chuyển bình thường
            tutSequence.Append(transform.DOMove(endPos, moveDuration).SetEase(easeType));
            tutSequence.AppendInterval(waitAtEndDuration);
        }

        // Khi hoàn thành chu kỳ, tự động gọi lại hàm này để lấy tọa độ mới nhất
        tutSequence.OnComplete(() => PlayTutorial());
    }

    public void StopTutorial()
    {
        if (tutSequence != null)
        {
            tutSequence.Kill();
            tutSequence = null;
        }
    }
    public void SetupStartPoint(Transform startPoint)
    {
        this.startPoint = startPoint;
    }
    public void SetupEndPoint(Transform endPoint)
    {
        this.endPoint = endPoint;
    }

}