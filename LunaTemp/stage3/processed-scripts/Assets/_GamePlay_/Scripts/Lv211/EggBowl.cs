using System.Collections;
using UnityEngine;

public class EggBowl : Item
{
    public Item spoon;
    public FishFillet fishFillet;
    public GameObject fishDropParticle;
    public float fishDropParticleDuration = 1f;

    private Coroutine fishDropParticleCoroutine;

    public void CanUseSpoon()
    {
        spoon.itemDraggable.targetItemType = ItemType.Bowl1;
        spoon.itemMoveToTarget.defaultTarget = transform;
    }

    public void PlayFishDropParticle()
    {
        if (fishDropParticle == null) return;

        if (fishDropParticleCoroutine != null)
        {
            StopCoroutine(fishDropParticleCoroutine);
        }

        fishDropParticle.SetActive(false);
        fishDropParticle.SetActive(true);
        fishDropParticleCoroutine = StartCoroutine(HideFishDropParticle());
    }

    private IEnumerator HideFishDropParticle()
    {
        yield return Yielders.Get(fishDropParticleDuration);
        fishDropParticle.SetActive(false);
        fishDropParticleCoroutine = null;
    }

    private void OnDisable()
    {
        if (fishDropParticleCoroutine != null)
        {
            StopCoroutine(fishDropParticleCoroutine);
            fishDropParticleCoroutine = null;
        }

        if (fishDropParticle != null)
        {
            fishDropParticle.SetActive(false);
        }
    }
}
