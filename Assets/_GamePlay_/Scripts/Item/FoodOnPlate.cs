using System;
using UnityEngine;

public class FoodOnPlate : Item
{
    private void OnEnable()
    {
        SubscribeMovementEvents();
        itemDraggable.targetItemType = ItemType.OvenSlot;
    }

    private void OnDisable()
    {
        UnsubscribeMovementEvents();
    }
    private void SubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(OnDropSuccess);
            itemDraggable.onDropSuccess.AddListener(OnDropSuccess);
        }

    }
    private void UnsubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(OnDropSuccess);
        }
    }
    private void OnDropSuccess()
    {
        Collider myCollider = GetComponent<Collider>();
        if (myCollider != null)
        {
            myCollider.enabled = false;
        }

        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);
        OvenSlot ovenSlot = null;

        for (int i = 0; i < hits.Length; i++)
        {
            var hit = hits[i];
            var slot = hit.collider.GetComponent<OvenSlot>();
            if (slot != null)
            {
                ovenSlot = slot;
                break;
            }
        }

        if (myCollider != null)
        {
            myCollider.enabled = true;
        }

        if (ovenSlot != null)
        {
            ovenSlot.PlaceFood(this.itemType);
            gameObject.SetActive(false);
        }
        HandTutManager.Ins.ItemDone(this);
    }
}
