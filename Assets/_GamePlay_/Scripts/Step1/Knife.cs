using UnityEngine;

public class Knife : Item
{
    public GameObject knifeIdle;
    public GameObject knifeOnDrag;

    public void KnifeOnDrag()
    {
        knifeIdle.SetActive(false);
        knifeOnDrag.SetActive(true);
    }
    public void KnifeIdle()
    {
        knifeIdle.SetActive(true);
        knifeOnDrag.SetActive(false);
    }
    public void TargetKnifeFlyEvent()
    {

        Item target = ComponentCache<Item>.Get(itemMoveToTarget.defaultTarget);
        target.KnifeIn();

    }
}
