using UnityEngine;

public class RongBien : Item
{
    public int foodCount = 0;
    public Transform sushiDone;
    public void RiceIn()
    {
        animator.SetTrigger("Rice");
        itemType = ItemType.RongBienCom;
    }
    public void SauceIn()
    {
        animator.SetTrigger("Sauce");
        itemType = ItemType.RongBienSot;
    }
    public void FoodIn()
    {
        foodCount++;
        if (foodCount == 2)
        {
            GameManager.Ins.Aplovin50();
        }
        if (foodCount == 4)
        {
            itemClickable.enabled = true;
        }
    }
    public void NextRongBienIn()
    {
        animator.SetTrigger("RongBien");
    }
    public void EnableSushiDone()
    {
        sushiDone.gameObject.SetActive(true);
    }
}
