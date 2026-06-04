using DG.Tweening;
using UnityEngine;

public class Spoon : ItemFlyIn
{

    protected override void OnFlyInComplete()
    {
        if (handCircularTutorial != null)
        {
            handCircularTutorial.SetActive(true);
        }
    }
}
