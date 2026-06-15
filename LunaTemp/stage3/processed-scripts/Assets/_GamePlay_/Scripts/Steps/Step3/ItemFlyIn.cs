using DG.Tweening;
using UnityEngine;

public class ItemFlyIn : ToolObject
{
    public GameObject handCircularTutorial;

    public override void FlyIn()
    {
        if (targetPoint == null)
        {
            return;
        }

        float startX = PhaseManager.Ins != null ? PhaseManager.Ins.offScreenRightX : 15f;

        transform.position = new Vector3(startX, targetPoint.position.y, targetPoint.position.z);
        gameObject.SetActive(true);

        transform.DOMove(targetPoint.position, 1f).SetEase(Ease.OutQuad).OnComplete(() =>
        {
            if (itemStirring != null) itemStirring.enabled = true;
            OnFlyInComplete();
        });
    }

    protected virtual void OnFlyInComplete()
    {
        if (itemStirring == null && handCircularTutorial != null)
        {
            handCircularTutorial.SetActive(true);
        }
    }
}
