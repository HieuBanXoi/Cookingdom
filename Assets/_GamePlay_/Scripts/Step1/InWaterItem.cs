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
        if (sink.isWaterIn && !isInWater)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.DropToWater);

        }

        isInWater = true;
        onProcess = true;
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
            ItemDone();
            PhaseManager.Ins.DoOneStep();
        }
        else
        {
            ply_TimerEvent.enabled = true;
            if (sink.isWaterIn)
            {
                ply_BobEffect.enabled = true;

                ply_TimerEvent.StartTimer();

            }
        }
    }
    public void SpawnBlinkEffect()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.Complete);
        BlinkEffect blinkEffect = Ply_Pool.Ins.Spawn<BlinkEffect>(PoolType.BlinkFX, transform.position, transform.rotation);
        blinkEffect.transform.SetParent(this.transform);
        blinkEffect.DeSpawnByTime();
    }
}
