using UnityEngine;
using DG.Tweening;

public class InputManager : Ply_Singleton<InputManager>
{
    public LayerMask groundPiece;
    public LayerMask defaultLayer;
    public LayerMask itemLayer;
    public bool isDragging = false;

    private ItemDraggable currentDraggable;
    private ItemStirring currentStirring;
    private ItemSpriteMaskPainter currentSpriteMaskPainter;

    private void Update()
    {
        // Nếu không trong trạng thái chơi VÀ không có vật thể nào đang được kéo dở thì mới chặn hoàn toàn Input
        if (!GameManager.Ins.isPlaying && !isDragging)
        {
            return;
        }

        // Khi nhấn chuột xuống
        if (Input.GetMouseButtonDown(0) && GameManager.Ins.isPlaying)
        {
            HandleMouseDown();
        }

        // Khi giữ và kéo chuột
        if (Input.GetMouseButton(0))
        {
            HandleMouseDrag();
        }

        // Khi nhả chuột ra
        if (Input.GetMouseButtonUp(0))
        {
            HandleMouseUp();
        }
    }

    private void HandleMouseDown()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f, itemLayer);
        Debug.Log("HandleMouseDown");

        if (hits.Length == 0) return;

        Item topItem = null;
        int maxSortingOrder = int.MinValue;

        // Tìm item có sortingOrder cao nhất trong số các object bắn trúng
        for (int i = 0; i < hits.Length; i++)
        {
            var hit = hits[i];
            var renderer = hit.collider.GetComponentInChildren<Renderer>();
            if (renderer != null && renderer.sortingOrder > maxSortingOrder)
            {
                maxSortingOrder = renderer.sortingOrder;
                topItem = ComponentCache<Item>.Get(hit.collider);
            }
        }

        // Nếu tìm thấy một item hợp lệ (có renderer), thực hiện hành động
        if (topItem != null)
        {
            bool isInteracted = false;

            // Ưu tiên xử lý Draggable (nếu đang được bật)
            if (topItem.itemDraggable != null && topItem.itemDraggable.enabled)
            {
                Debug.Log("drag");

                currentDraggable = topItem.itemDraggable;
                currentDraggable.BeginDrag();
                isDragging = true;
                isInteracted = true;
            }
            // Kế đến là Stirring (nếu đang được bật)
            else if (topItem.itemStirring != null && topItem.itemStirring.enabled)
            {
                currentStirring = topItem.itemStirring;
                currentStirring.BeginStir();
                isDragging = true;
                isInteracted = true;
            }
            // Cuối cùng là Clickable (nếu đang được bật)
            else if (topItem.itemSpriteMaskPainter != null && topItem.itemSpriteMaskPainter.enabled)
            {
                currentSpriteMaskPainter = topItem.itemSpriteMaskPainter;
                currentSpriteMaskPainter.BeginPaint();
                isDragging = true;
                isInteracted = true;
            }
            else if (topItem.itemKnifeSpriteMaskCutter != null && topItem.itemKnifeSpriteMaskCutter.enabled)
            {
                topItem.itemKnifeSpriteMaskCutter.PerformCut();
                isInteracted = true;
            }
            else if (topItem.itemClickable != null && topItem.itemClickable.enabled)
            {
                topItem.itemClickable.PerformClick();
                isInteracted = true;
            }

            if (isInteracted)
            {


                if (GameManager.Ins != null) GameManager.Ins.TurnOffTut();
                if (Ply_TransformConveyor.Ins != null) Ply_TransformConveyor.Ins.isMoving = true;
            }
        }
    }

    private void HandleMouseDrag()
    {
        if (currentDraggable != null) currentDraggable.Drag();
        else if (currentStirring != null) currentStirring.Stir();
        else if (currentSpriteMaskPainter != null) currentSpriteMaskPainter.Paint();
    }

    private void HandleMouseUp()
    {
        if (currentDraggable != null) { currentDraggable.EndDrag(); currentDraggable = null; }
        if (currentStirring != null) { currentStirring.EndStir(); currentStirring = null; }
        if (currentSpriteMaskPainter != null) { currentSpriteMaskPainter.EndPaint(); currentSpriteMaskPainter = null; }
        isDragging = false;
    }
}
