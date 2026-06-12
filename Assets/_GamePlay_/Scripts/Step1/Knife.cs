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

    public override void OnDragFailReturnComplete()
    {
        base.OnDragFailReturnComplete();

        if (Ply_SoundManager.Ins == null) return;

        PlayKnifeSound();
    }
    public void PlayKnifeSound()
    {
        // Ply_SoundManager.Ins.PlayFx(FxType.PlaceKnife);
    }
}
