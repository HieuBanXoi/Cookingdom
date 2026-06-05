using DG.Tweening;
using UnityEngine;

public class Capybara : MonoBehaviour
{
    public Transform popup1;
    public Transform popup2;
    public float popupShowScale = 1.5f;
    public float popupShowDuration = 0.25f;
    public float popupHideDuration = 0.2f;
    public float popupHideDelay = 2f;

    private Transform currentPopup;
    private Tween hidePopupTween;

    private void Start()
    {
        HidePopupImmediately(popup1);
        HidePopupImmediately(popup2);
    }

    private void OnMouseDown()
    {
        ClickCapybara();
    }

    public void ClickCapybara()
    {
        ShowCurrentPopup();
    }

    public void ShowFirstPopup()
    {
        currentPopup = popup1;
        ShowCurrentPopup();
    }

    public void ShowSecondPopup()
    {
        currentPopup = popup2;
        ShowCurrentPopup();
    }

    private void ShowCurrentPopup()
    {
        if (currentPopup == null) return;

        Transform otherPopup = currentPopup == popup1 ? popup2 : popup1;
        HidePopupImmediately(otherPopup);

        hidePopupTween?.Kill();
        currentPopup.DOKill();
        currentPopup.gameObject.SetActive(true);
        currentPopup.localScale = Vector3.zero;
        currentPopup.DOScale(Vector3.one * popupShowScale, popupShowDuration).SetEase(Ease.OutBack);

        hidePopupTween = DOVirtual.DelayedCall(popupHideDelay, () =>
        {
            HidePopup(currentPopup);
        });
    }

    private void HidePopup(Transform popup)
    {
        if (popup == null) return;

        popup.DOKill();
        popup.DOScale(Vector3.zero, popupHideDuration)
            .SetEase(Ease.InBack)
            .OnComplete(() => popup.gameObject.SetActive(false));
    }

    private void HidePopupImmediately(Transform popup)
    {
        if (popup == null) return;

        popup.DOKill();
        popup.localScale = Vector3.zero;
        popup.gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        hidePopupTween?.Kill();
    }
}
