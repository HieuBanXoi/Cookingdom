using UnityEngine;
using DG.Tweening;

public class Dog : MonoBehaviour
{
    [Header("--- MOVEMENT SETTINGS ---")]
    public Transform startPoint;
    public Transform endPoint;
    public float moveDuration = 3f;
    public Ease easeType = Ease.Linear;

    private Tween moveTween;
    private bool isMoving = true;

    private void Start()
    {
        // Đặt vị trí bắt đầu
        if (startPoint != null)
        {
            transform.position = startPoint.position;
        }

        // Bắt đầu vòng lặp di chuyển
        if (isMoving)
        {
            StartMovementLoop();
        }
    }

    private void StartMovementLoop()
    {
        if (startPoint == null || endPoint == null) return;

        // Di chuyển từ start point đến end point
        moveTween = transform.DOMove(endPoint.position, moveDuration)
            .SetEase(easeType)
            .OnComplete(() =>
            {
                // Khi đến nơi, teleport về điểm bắt đầu
                transform.position = startPoint.position;

                // Nếu vẫn đang chuyển động, bắt đầu vòng lặp tiếp theo
                if (isMoving)
                {
                    StartMovementLoop();
                }
            });

    }

    public void SetMoving(bool moving)
    {
        isMoving = moving;
        if (moving && moveTween == null)
        {
            StartMovementLoop();
        }
        else if (!moving)
        {
            moveTween?.Kill();
        }
    }

    public void ResetPosition()
    {
        moveTween?.Kill();
        if (startPoint != null)
        {
            transform.position = startPoint.position;
        }
    }

    private void OnDisable()
    {
        moveTween?.Kill();
    }
}
