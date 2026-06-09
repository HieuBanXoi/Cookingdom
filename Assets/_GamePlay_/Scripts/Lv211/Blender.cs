using UnityEngine;

public class Blender : Item
{
    public Transform capClosePos;
    public Transform cap;
    public SpriteRenderer button;
    public int countFoodIn = 0;
    public void BeetrootIn()
    {
        animator.SetTrigger("BeetrootIn");
        countFoodIn++;
    }
    public void CreamIn()
    {
        animator.SetTrigger("CreamIn");
        countFoodIn++;

    }
    public void LemonIn()
    {
        animator.SetTrigger("LemonIn");
        countFoodIn++;
    }

}
