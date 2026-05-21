using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

[System.Serializable]
public class ScreenScaleStep
{
    [Tooltip("Nếu tỷ lệ Chiều cao / Chiều rộng lớn hơn mức này")]
    public float heightOnWidthRatio;
    public float orthographicSize;

    public ScreenScaleStep() { }
    public ScreenScaleStep(float ratio, float size)
    {
        heightOnWidthRatio = ratio;
        orthographicSize = size;
    }
}

public class UIManager : Ply_Singleton<UIManager>
{
    public GameObject winUI;
    public GameObject loseUI;
    public GameObject tutorial;
    public Transform downloadBtn;
    public Image image;

    public float screenWidth;
    public float screenHeight;
    public float scaleHeightOnWidth;
    public bool isVertical;
    public Camera cam;

    [Header("--- SCREEN SCALE SETTINGS ---")]
    [Tooltip("Tích chọn để camera tự động tăng đều kích thước dựa theo tỷ lệ màn hình. Bỏ tích để dùng danh sách các mốc ở dưới.")]
    public bool useContinuousScaling = false;

    [Header("- Continuous Scaling -")]
    [Tooltip("Orthographic Size cơ bản (thường dùng cho màn hình 16:9 dọc)")]
    public float baseOrthographicSize = 6f;
    [Tooltip("Tỷ lệ Chiều cao / Chiều rộng cơ bản (VD: 16:9 = 1.777)")]
    public float baseAspect = 1.777f;

    [Header("- Discrete Scaling -")]
    public float landscapeSize = 6f;
    public float defaultPortraitSize = 6f;
    [Tooltip("Danh sách các mốc size màn hình. Có thể chỉnh sửa, thêm, xóa các mốc trực tiếp trên Editor.")]
    public List<ScreenScaleStep> discreteScaleSteps = new List<ScreenScaleStep>
    {
        new ScreenScaleStep(1.4f, 6f),
        new ScreenScaleStep(1.9f, 6f),
        new ScreenScaleStep(2.0f, 6f),
        new ScreenScaleStep(2.1f, 6f),
        new ScreenScaleStep(2.3f, 6.75f)
    };


    protected void Start()
    {
        winUI.SetActive(false);
        loseUI.SetActive(false);
        downloadBtn.gameObject.SetActive(true);
        UpdateUI();

    }

    private void Update()
    {
        // Kiểm tra xem kích thước màn hình có thay đổi không (ví dụ: người chơi xoay thiết bị)
        if (Screen.width != screenWidth || Screen.height != screenHeight)
        {
            // Cập nhật ngay biến tạm để tránh việc gọi Coroutine liên tục trong các frame tiếp theo
            screenWidth = Screen.width;
            screenHeight = Screen.height;
            StartCoroutine(DelayUpdateUIRoutine());
        }
    }

    private IEnumerator DelayUpdateUIRoutine()
    {
        yield return null; // Đợi 1 frame để Luna Engine và Canvas cập nhật xong tỷ lệ nội bộ
        UpdateUI();
    }
    public void UpdateUI()
    {

        GetScreenSize();
        GetSreenType();
        ScreenScale();
    }

    private void GetScreenSize()
    {
        screenHeight = Screen.height;
        screenWidth = Screen.width;
    }
    private void GetSreenType()
    {
        isVertical = (screenHeight > screenWidth);
        scaleHeightOnWidth = screenHeight / screenWidth;
    }


    private void ScreenScale()
    {
        float targetOrthographicSize;

        if (useContinuousScaling)
        {
            // Tăng đều: Giữ nguyên khung hình theo tỷ lệ màn hình thực tế so với mốc cơ bản
            if (!isVertical)
            {
                targetOrthographicSize = landscapeSize;
            }
            else
            {
                targetOrthographicSize = baseOrthographicSize * (scaleHeightOnWidth / baseAspect);
            }
        }
        else
        {
            // Không tăng đều (Discrete): Dùng các mốc fix cứng
            if (!isVertical)
            {
                targetOrthographicSize = landscapeSize;
            }
            else
            {
                float matchedSize = defaultPortraitSize;
                float highestMatchedRatio = 0f;

                if (discreteScaleSteps != null)
                {
                    foreach (var step in discreteScaleSteps)
                    {
                        if (scaleHeightOnWidth > step.heightOnWidthRatio && step.heightOnWidthRatio > highestMatchedRatio)
                        {
                            highestMatchedRatio = step.heightOnWidthRatio;
                            matchedSize = step.orthographicSize;
                        }
                    }
                }

                targetOrthographicSize = matchedSize;
            }
        }

        cam.orthographicSize = Mathf.Max(targetOrthographicSize, baseOrthographicSize);

    }

    public void ActiveGameWinUI(bool isActive)
    {
        winUI.SetActive(isActive);
    }
    public void ActiveGameLoseUI(bool isActive)
    {
        loseUI.SetActive(isActive);
    }
    public void ActiveTutorialUI(bool isActive)
    {
        tutorial.SetActive(isActive);
    }

}
