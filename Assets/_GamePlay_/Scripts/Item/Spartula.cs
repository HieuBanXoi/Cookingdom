using UnityEngine;

public class Spartula : Item
{
    public bool isStir1 = false;
    public void ToPot()
    {
        if(isStir1)
        {
            GameManager.Ins.LoseGame();
        }
        isStir1 = true;
    }
}
