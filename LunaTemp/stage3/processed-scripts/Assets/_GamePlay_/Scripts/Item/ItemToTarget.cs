using System;
using UnityEngine;

public class ItemToTarget : ToolObject
{
    public Transform targetPosition;
    public Item targetItem;
    public string targetItemAnimationName;
    public bool turnOnAnimWhenArrive = true;
    public string animWhenArriveName;
    public bool disableItemWhenDrop = false;
    public bool itemDoneWhenArrive = false;

    private void OnEnable()
    {
        SubscribeMovementEvents();
        if(turnOnAnimWhenArrive)
        {
            animator.enabled = false;
        }
    }

    private void OnDisable()
    {
        UnsubscribeMovementEvents();
    }
    private void SubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(MoveToCurrentTarget);
            itemDraggable.onDropSuccess.AddListener(MoveToCurrentTarget);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
            itemMoveToTarget.onComplete.AddListener(HandleMoveComplete);
        }
    }
    private void UnsubscribeMovementEvents()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onDropSuccess.RemoveListener(MoveToCurrentTarget);
        }

        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(HandleMoveComplete);
        }
    }
    private void MoveToCurrentTarget()
    {
        if(disableItemWhenDrop)
        {
            HandleMoveComplete();
            gameObject.SetActive(false);
            return;
        }
        itemMoveToTarget.ExecuteMove3D(targetPosition);
    }
    private void HandleMoveComplete()
    {
        itemDraggable.enabled = false;
        if(animator != null)
        {
            if(turnOnAnimWhenArrive)
            {
                animator.enabled = true;
            }
            else
            {
                animator.SetTrigger(animWhenArriveName);
            }
        }
        
        if(targetItem != null && !string.IsNullOrEmpty(targetItemAnimationName))
        {
            targetItem.animator.SetTrigger(targetItemAnimationName);
        }
        
    }
    public override void ItemDone()
    {
        if(itemDoneWhenArrive)
        {
            HandTutManager.Ins?.ItemDone(this);
        }
        DoneAnimation();
        FlyOut();
    }
}
