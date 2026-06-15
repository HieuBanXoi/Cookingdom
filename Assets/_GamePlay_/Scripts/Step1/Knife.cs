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
    public void SetTarget(Transform target)
    {
        Item targetItem = ComponentCache<Item>.Get(target);
        itemDraggable.targetItemType = targetItem.itemType;
        itemMoveToTarget.defaultTarget = target;
    }

    public override void OnDragFailReturnComplete()
    {
        base.OnDragFailReturnComplete();

        if (Ply_SoundManager.Ins == null) return;

        PlayKnifeSound();
    }
    public void OnKnifeDone()
    {
        itemDraggable.targetItemType = ItemType.None;
        itemMoveToTarget.defaultTarget = null;
    }
    public void PlayKnifeSound()
    {
        // Ply_SoundManager.Ins.PlayFx(FxType.PlaceKnife);
    }

}
