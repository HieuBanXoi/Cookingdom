using DG.Tweening;
using UnityEngine;

public class Spoon : ItemFlyIn
{
    public bool isWater = false;

    protected override void OnFlyInComplete()
    {
        if (handCircularTutorial != null)
        {
            handCircularTutorial.SetActive(true);
        }
        if (isWater)
        {
            GameManager.Ins.ChangeState(new LoseState());
        }
    }
}
