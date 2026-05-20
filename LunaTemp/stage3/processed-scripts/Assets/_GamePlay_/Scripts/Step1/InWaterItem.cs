using UnityEngine;

public class InWaterItem : Item
{
    public Ply_TimerEvent ply_TimerEvent;
    public Ply_BobEffect ply_BobEffect;
    public Collider collider1;
    public Sink sink;
    public bool isInWater = false;
    public bool isOnPlate = false;

    public void StartTimer()
    {
        if (sink.isWaterIn && isInWater)
        {
            ply_TimerEvent.StartTimer();
        }
    }
    public void PlayAnim(bool isTrue)
    {
        if (isInWater && !isOnPlate)
        {
            if (isTrue)
            {
                ply_BobEffect.enabled = true;
            }
            else
            {
                ply_BobEffect.enabled = false;
            }
        }

    }
    public void MoveToWater()
    {
        isInWater = true;
    }
    public void CheckLastPlate()
    {
        ItemType itemType = ComponentCache<Item>.Get(itemMoveToTarget.defaultTarget).itemType;
        if (itemType == ItemType.DiaOt || itemType == ItemType.DiaNgao)
        {
            ply_BobEffect.enabled = false;
            itemDraggable.enabled = false;
            collider1.enabled = false;
            isOnPlate = true;
            PhaseManager.Ins.DoOneStep();
        }
        else
        {
            ply_TimerEvent.enabled = true;
            ply_TimerEvent.StartTimer();
        }
    }
}
