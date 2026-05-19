using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(Collider))]
public class ItemKnifeSpriteMaskCutter : MonoBehaviour
{
    [Header("--- KNIFE ---")]
    public Transform knifeTransform;
    [Tooltip("Khoang cach tu pivot cua dao den mep luoi dao tren truc X local.")]
    public float bladeLocalXOffset = 0f;
    public float leftX = -2f;
    public float rightX = 2f;
    public float cutStep = 0.35f;
    public Vector3 knifeDownLocalOffset = new Vector3(0f, -0.6f, 0f);
    public float chopDuration = 0.12f;
    public float slideDuration = 0.16f;
    public Ease chopEase = Ease.InQuad;
    public Ease slideEase = Ease.OutQuad;

    [Header("--- SPRITE MASKS ---")]
    public bool useKnifeChildSlicedMask = false;
    [Tooltip("Mask reveal phan do an da thai o ben trai dao.")]
    public Transform slicedMask;
    [Tooltip("Mask reveal phan do an chua thai o ben phai dao.")]
    public Transform uncutMask;
    [Tooltip("Object sprite do an chua thai. Se tat khi dao cat xong neu duoc gan.")]
    public GameObject uncutObject;
    [Tooltip("Chieu rong cua sprite mask khi scale X = 1.")]
    public float maskWidthAtScaleOne = 1f;
    public bool resetOnEnable = true;

    [Header("--- EVENTS ---")]
    public UnityEvent onCut;
    public UnityEvent onCutComplete;

    private bool isCutting;
    private bool isComplete;
    private float currentX;
    private Vector3 knifeBaseLocalPos;
    private Sequence cutSequence;

    private void Awake()
    {
        if (knifeTransform == null) knifeTransform = transform;
        knifeBaseLocalPos = knifeTransform.localPosition;
    }

    private void OnEnable()
    {
        if (resetOnEnable)
        {
            ResetCut();
        }
    }

    private void OnDisable()
    {
        cutSequence?.Kill();
    }

    public void ResetCut()
    {
        isCutting = false;
        isComplete = false;
        currentX = leftX;
        if (uncutObject != null) uncutObject.SetActive(true);

        if (knifeTransform != null)
        {
            knifeTransform.DOKill();
            knifeBaseLocalPos.x = leftX - bladeLocalXOffset;
            knifeTransform.localPosition = knifeBaseLocalPos;
        }

        UpdateMasks();
    }

    public void PerformCut()
    {
        if (!enabled || isCutting || isComplete || knifeTransform == null) return;

        isCutting = true;
        onCut?.Invoke();

        Vector3 startPos = knifeTransform.localPosition;
        Vector3 downPos = startPos + knifeDownLocalOffset;
        float targetCutLineX = Mathf.Min(currentX + cutStep, rightX);
        float targetKnifeX = targetCutLineX - bladeLocalXOffset;

        cutSequence?.Kill();
        cutSequence = DOTween.Sequence();
        cutSequence.Append(knifeTransform.DOLocalMove(downPos, chopDuration).SetEase(chopEase));
        cutSequence.Append(knifeTransform.DOLocalMove(startPos, chopDuration).SetEase(Ease.OutQuad));
        cutSequence.Append(knifeTransform.DOLocalMoveX(targetKnifeX, slideDuration).SetEase(slideEase));
        cutSequence.OnUpdate(() =>
        {
            currentX = Mathf.Clamp(knifeTransform.localPosition.x + bladeLocalXOffset, leftX, rightX);
            UpdateMasks();
        });
        cutSequence.OnComplete(() =>
        {
            currentX = targetCutLineX;
            knifeBaseLocalPos = knifeTransform.localPosition;
            UpdateMasks();

            isCutting = false;
            if (currentX >= rightX)
            {
                isComplete = true;
                if (uncutObject != null) uncutObject.SetActive(false);
                onCutComplete?.Invoke();
            }
        });
    }

    private void UpdateMasks()
    {
        float clampedX = Mathf.Clamp(currentX, leftX, rightX);
        float slicedWidth = clampedX - leftX;
        float uncutWidth = rightX - clampedX;

        if (useKnifeChildSlicedMask)
        {
            ApplyKnifeChildSlicedMask(slicedWidth);
        }
        else
        {
            ApplyMaskRect(slicedMask, leftX + slicedWidth * 0.5f, slicedWidth);
        }

        ApplyMaskRect(uncutMask, clampedX + uncutWidth * 0.5f, uncutWidth);
    }

    private void ApplyKnifeChildSlicedMask(float width)
    {
        if (slicedMask == null) return;

        bool hasWidth = width > 0.001f;
        slicedMask.gameObject.SetActive(hasWidth);
        if (!hasWidth) return;

        Vector3 pos = slicedMask.localPosition;
        pos.x = bladeLocalXOffset - width * 0.5f;
        slicedMask.localPosition = pos;

        Vector3 scale = slicedMask.localScale;
        scale.x = width / Mathf.Max(0.001f, maskWidthAtScaleOne);
        slicedMask.localScale = scale;
    }

    private void ApplyMaskRect(Transform maskTransform, float centerX, float width)
    {
        if (maskTransform == null) return;

        bool hasWidth = width > 0.001f;
        maskTransform.gameObject.SetActive(hasWidth);
        if (!hasWidth) return;

        Vector3 pos = maskTransform.localPosition;
        pos.x = centerX;
        maskTransform.localPosition = pos;

        Vector3 scale = maskTransform.localScale;
        scale.x = width / Mathf.Max(0.001f, maskWidthAtScaleOne);
        maskTransform.localScale = scale;
    }

    public float GetProgress01()
    {
        return Mathf.InverseLerp(leftX, rightX, currentX);
    }
}
