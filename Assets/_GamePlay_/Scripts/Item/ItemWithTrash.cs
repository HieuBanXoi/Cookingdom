using UnityEngine;

public class ItemWithTrash : Item
{
    public GameObject[] trashObjects;
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
}
