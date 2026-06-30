using DG.Tweening;
using UnityEngine;

public class CuttingBoard : Item
{
    [Header("--- PUNCH EFFECT ---")]
    public Vector3 punchScale = new Vector3(0.1f, -0.1f, 0f);
    public float punchDuration = 0.3f;

        public void IsFoodOn(bool isFoodOn)
    {
        if (isFoodOn)
        {
            itemType = ItemType.None;
        }
        else
        {
            itemType = ItemType.CuttingBoard;
        }
    }

    public void Punch()
    {
        transform.DOPunchScale(punchScale, punchDuration);
    }
}
