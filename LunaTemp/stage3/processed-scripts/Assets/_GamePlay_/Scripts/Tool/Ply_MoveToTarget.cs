using UnityEngine;
using DG.Tweening;

public enum MoveType { Smooth, Jump, Instant, ShakeThenMove }

public class Ply_MoveToTarget : MonoBehaviour
{
    [Header("--- CẤU HÌNH ĐÍCH ---")]
    public Transform defaultTarget;
    public bool isMove2D = false;
    public bool useVectorTarget = false;
    public Vector2 vectorTarget;
    public float duration = 0.5f;
    public Ease easeType = Ease.OutQuad;
    public MoveType moveType = MoveType.Smooth;

    [Header("--- THÔNG SỐ NHẢY (DÀNH CHO JUMP) ---")]
    public float jumpPower = 2.0f;
    public int numJumps = 1;
    public bool rotate360DuringJump = false;

    [Header("--- SAU KHI TỚI NƠI ---")]
    public bool setParentToTarget = false;
    public UnityEngine.Events.UnityEvent onComplete;
    public bool lockInputWhileMoving = true;

    private Transform originalParent;
    private Item item;

    private void Awake()
    {
        originalParent = transform.parent;
        item = GetComponent<Item>();
    }

    /// <summary>
    /// Gọi hàm này từ Unity Event. 
    /// Nếu không truyền Transform, nó sẽ dùng defaultTarget có sẵn trên Inspector.
    /// </summary>
    public void ExecuteMove(Transform customTarget = null)
    {
        Vector3 targetPos = transform.position;

        if (useVectorTarget)
        {
            targetPos = isMove2D ? new Vector3(vectorTarget.x, vectorTarget.y, transform.position.z) : (Vector3)vectorTarget;
        }
        else
        {
            Transform target = customTarget != null ? customTarget : defaultTarget;
            defaultTarget = target;

            if (target == null)
            {
                Debug.LogWarning($"[MoveToTarget] {gameObject.name} không tìm thấy Target để di chuyển!");
                return;
            }

            targetPos = isMove2D ? new Vector3(target.position.x, target.position.y, transform.position.z) : target.position;
        }

        // Xóa các Tween cũ để tránh xung đột
        transform.DOKill();
        transform.SetParent(originalParent);

        if (lockInputWhileMoving && GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = false;
        }

        switch (moveType)
        {
            case MoveType.Smooth:
                transform.DOMove(targetPos, duration)
                    .SetEase(easeType)
                    .OnComplete(FinishAction);

                break;

            case MoveType.Jump:
                // Kiểu nảy vào nồi cực đẹp
                transform.DOJump(targetPos, jumpPower, numJumps, duration)
                    .SetEase(easeType)
                    .OnComplete(FinishAction);
                if (rotate360DuringJump)
                {
                    transform.DORotate(new Vector3(0, 0, -360), duration, RotateMode.FastBeyond360).SetEase(easeType);
                }
                break;

            case MoveType.Instant:
                transform.position = targetPos;
                FinishAction();
                break;

            case MoveType.ShakeThenMove:
                // Rung nhẹ một cái rồi mới bay (tạo cảm giác dồn lực)
                transform.DOShakePosition(0.2f, 0.2f)
                    .OnComplete(() =>
                    {
                        transform.DOMove(targetPos, duration).SetEase(easeType).OnComplete(FinishAction);
                    });
                break;
        }
    }
    public void ExecuteMove()
    {
        ExecuteMove(defaultTarget);
    }

    public void ExecuteMove([Bridge.Ref] Vector2 targetPos)
    {
        useVectorTarget = true;
        vectorTarget = targetPos;
        ExecuteMove((Transform)null);
    }

    public void ExecuteMove2D(Transform customTarget)
    {
        useVectorTarget = false;
        isMove2D = true;
        ExecuteMove(customTarget);
    }

    public void ExecuteMove3D(Transform customTarget)
    {
        useVectorTarget = false;
        isMove2D = false;
        ExecuteMove(customTarget);
    }

    private void FinishAction()
    {
        if (setParentToTarget && defaultTarget != null)
        {
            transform.SetParent(defaultTarget);
        }

        if (lockInputWhileMoving && GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = true;
        }

        if (item != null)
        {
            item.PlayMoveToTargetFinishSound();
        }

        onComplete?.Invoke();
    }

    // Hàm bổ trợ để Reset vị trí về ban đầu nếu cần
    public void TeleportToTarget(Transform t)
    {
        transform.position = t.position;
    }
    public void SetDefaultTarget(Transform t)
    {
        defaultTarget = t;
    }
}
