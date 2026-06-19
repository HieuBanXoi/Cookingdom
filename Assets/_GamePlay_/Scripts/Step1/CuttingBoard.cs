using DG.Tweening;
using UnityEngine;

public class CuttingBoard : Item
{
    [Header("--- PUNCH EFFECT ---")]
    public Vector3 punchScale = new Vector3(0.1f, -0.1f, 0f);
    public float punchDuration = 0.3f;
    public int foodInCount= 0;
    public bool isRiceIn = false;
    public void AddFood(string animName)
    {
        animator.SetTrigger(animName);
        if(animName == "PerillaIn")
        {
            itemType = ItemType.CuttingBoard;
            
        }
        foodInCount++;
        if (foodInCount >= 6)
        {
            DOVirtual.DelayedCall(0.3f, () =>
            {
                SpawnBlinkEffect();
                
            });
        }
    }
    public void RongBienIn()
    {
        animator.SetTrigger("RongBienIn");
        itemType = ItemType.RollRongBien;
    }
    public void RiceIn()
    {
        if(isRiceIn) return;
        isRiceIn = true;
        animator.SetTrigger("RiceIn");
        itemType = ItemType.RollPerilla;
    }
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
