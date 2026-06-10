using DG.Tweening;
using UnityEngine;

public class Blender : Item
{
    public Transform capClosePos;
    public Transform cap;
    public SpriteRenderer button;
    public Sprite buttonOn;
    public int countFoodIn = 0;
    public bool isClose = false;
    public void BeetrootIn()
    {
        animator.SetTrigger("BeetrootIn");
        countFoodIn++;
        CheckIsFull();

    }
    public void CreamIn()
    {
        animator.SetTrigger("CreamIn");
        countFoodIn++;
        CheckIsFull();

    }
    public void LemonIn()
    {
        animator.SetTrigger("LemonIn");
        countFoodIn++;
        CheckIsFull();
    }
    public void CheckIsFull()
    {
        if (countFoodIn >= 3)
        {
            itemClickable.enabled = true;
            if (HandTutManager.Ins != null)
            {
                HandTutManager.Ins.ItemReady(this);
            }
        }
    }
    public void OnClick()
    {
        if (!isClose)
        {
            isClose = true;
            cap.DOMove(capClosePos.position,0.3f).SetEase(Ease.Linear);
        }
        else
        {
            button.sprite = buttonOn;
            animator.SetTrigger("Spin");
        }
    }
    public void SpinDone()
    {
        SpawnBlinkEffect();
        GameManager.Ins.LoseGame();
        HandTutManager.Ins.StartHandTut();
    }
}
