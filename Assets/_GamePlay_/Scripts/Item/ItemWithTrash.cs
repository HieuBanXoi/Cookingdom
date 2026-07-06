using UnityEngine;

public class ItemWithTrash : Item
{
    public Item[] requiredItems;
    public ItemWithTrash nextItem;
    public GameObject[] trashObjects;
    public bool isTrashItem = true;
    public void OnEnable()
    {
        if(isTrashItem)
        {
            return;
        }
        Knife knife = ComponentCache<Knife>.Get(HandTutManager.Ins.knife);
        knife.SetTarget(transform);

    }
    public void ShowTrashObjects()
    {
        if (trashObjects == null || trashObjects.Length == 0) return;
        for (int i = 0; i < trashObjects.Length; i++)
        {
            if (trashObjects[i] != null)
            {
                trashObjects[i].SetActive(true);
            }
        }
    }
    public void EnableKnife()
    {
        HandTutManager.Ins.knife.gameObject.SetActive(true);
        Ply_SoundManager.Ins.PlayFx(FxType.KnifePlace);
    }
    public override void DoneAnimation()
    {
        base.DoneAnimation();
        itemDraggable.targetItemType = ItemType.Plate;
    }
    public void OnDisable()
    {
        nextItem?.CheckCanSpawn();
    }
    public void CheckCanSpawn()
    {
        for(int i = 0; i < requiredItems.Length; i++)
        {
            if ( requiredItems[i].gameObject.activeInHierarchy)
            {
                return;
            }
        }
        Debug.Log("SpawnNext");
        gameObject.SetActive(true);
    }
    public void DoOneStep()
    {
        PhaseManager.Ins.DoOneStep();
    }
}
