using UnityEngine;

public class Salt : Item
{
    public FishFillet fishFillet;
    public void SaltOnFishDone()
    {
        fishFillet.SaltToFishDone();
        ItemDone();
    }
}
