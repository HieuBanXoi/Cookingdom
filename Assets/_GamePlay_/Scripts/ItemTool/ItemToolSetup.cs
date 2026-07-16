using UnityEngine;
using System.Collections.Generic;
using UnityEngine.Events;

#if UNITY_EDITOR
using UnityEditor.Events;
using UnityEditor;


/// <summary>
/// Một cửa sổ công cụ editor để tự động thiết lập các đối tượng Item từ SpriteRenderers.
/// Cách sử dụng:
/// 1. Mở cửa sổ từ menu Tools > Item Setup Tool.
/// 2. Kéo SpriteRenderer của Pan, Stove Button và các item khác vào các trường tương ứng.
/// 3. Nhấn nút "Setup All Items".
/// 5. Script sẽ tự động tạo cấu trúc, gán component và kết nối các sự kiện.
/// </summary>
public class ItemToolSetup : EditorWindow
{
    [Header("--- CORE ITEMS ---")]
    [Tooltip("Kéo SpriteRenderer của Pan vào đây.")]
    public SpriteRenderer panSprite;
    [Tooltip("Kéo SpriteRenderer của nút bếp (Stove Button) vào đây.")]
    public SpriteRenderer stoveBtnSprite;

    [Header("--- OTHER ITEMS ---")]
    [Tooltip("Danh sách các SpriteRenderer của các item khác cần được thiết lập.")]
    public List<SpriteRenderer> otherItemSprites = new List<SpriteRenderer>();

    private Pan panReference;
    private Vector2 scrollPosition;

    // Thêm một menu item để mở cửa sổ này
    [MenuItem("Tools/Item Setup Tool")]
    public static void ShowWindow()
    {
        // Lấy cửa sổ đang có hoặc tạo mới
        GetWindow<ItemToolSetup>("Item Setup Tool");
    }

    // Hàm vẽ giao diện cho cửa sổ
    void OnGUI()
    {
        GUILayout.Label("Thiết lập Item tự động", EditorStyles.boldLabel);
        scrollPosition = EditorGUILayout.BeginScrollView(scrollPosition);

        SerializedObject serializedObject = new SerializedObject(this);
        EditorGUILayout.PropertyField(serializedObject.FindProperty("panSprite"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("stoveBtnSprite"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("otherItemSprites"), true);

        serializedObject.ApplyModifiedProperties();

        EditorGUILayout.Space();

        if (GUILayout.Button("Setup All Items"))
        {
            SetupAllItems();
        }

        EditorGUILayout.EndScrollView();
    }

    public void SetupAllItems()
    {
        // 1. Setup Pan
        if (panSprite != null)
        {
            SetupPan(panSprite);
        }
        else
        {
            Debug.LogWarning("Chưa kéo Pan Sprite vào. Bỏ qua thiết lập Pan.");
        }

        // 2. Setup other items
        if (otherItemSprites != null && otherItemSprites.Count > 0)
        {
            foreach (var spriteRenderer in otherItemSprites)
            {
                if (spriteRenderer != null)
                {
                    SetupGenericItem(spriteRenderer);
                }
            }
        }

        // 3. Setup Stove Button
        if (stoveBtnSprite != null)
        {
            if (panReference != null)
            {
                SetupStoveButton(stoveBtnSprite);
            }
            else
            {
                Debug.LogWarning("Không thể thiết lập Stove Button vì chưa có Pan. Hãy kéo Pan Sprite vào và thử lại.");
            }
        }
        else
        {
            Debug.LogWarning("Chưa kéo Stove Button Sprite vào. Bỏ qua thiết lập Stove Button.");
        }

        Debug.Log("Thiết lập hoàn tất!");
    }

    private void SetupGenericItem(SpriteRenderer spriteRenderer)
    {
        
        if (spriteRenderer.transform.parent != null && spriteRenderer.transform.parent.GetComponent<Item>() != null)
        {
            Debug.Log($"Item '{spriteRenderer.name}' có vẻ đã được thiết lập. Bỏ qua.");
            return;
        }

        GameObject originalGO = spriteRenderer.gameObject;
        string itemName = originalGO.name;

        // Tạo GameObject cha
        GameObject parentGO = new GameObject(itemName);
        parentGO.transform.position = originalGO.transform.position;
        parentGO.transform.rotation = originalGO.transform.rotation;

        // Đặt SpriteRenderer làm con
        originalGO.transform.SetParent(parentGO.transform, true);

        AddCollider(parentGO, spriteRenderer);
        parentGO.AddComponent<ItemDraggable>();
        parentGO.AddComponent<ItemMoveToTarget>();
        parentGO.AddComponent<Animator>();
        parentGO.AddComponent<Item>();

        // Thêm và cấu hình Collider
    }

    private void SetupPan(SpriteRenderer spriteRenderer)
    {
        if (spriteRenderer.transform.parent != null && spriteRenderer.transform.parent.GetComponent<Pan>() != null)
        {
            Debug.Log($"Pan '{spriteRenderer.name}' có vẻ đã được thiết lập. Bỏ qua.");
            panReference = spriteRenderer.transform.parent.GetComponent<Pan>();
            return;
        }

        GameObject originalGO = spriteRenderer.gameObject;
        string itemName = originalGO.name;

        // Tạo GameObject cha
        GameObject parentGO = new GameObject(itemName);
        parentGO.transform.position = originalGO.transform.position;
        parentGO.transform.rotation = originalGO.transform.rotation;

        // Đặt SpriteRenderer làm con và điều chỉnh vị trí Z
        originalGO.transform.SetParent(parentGO.transform, true);
        Vector3 spritePos = originalGO.transform.localPosition;
        spritePos.z += 3;
        originalGO.transform.localPosition = spritePos;

        // Thêm các component cho Pan
        panReference = parentGO.AddComponent<Pan>();
        parentGO.AddComponent<ItemDraggable>();
        parentGO.AddComponent<ItemMoveToTarget>();
        parentGO.AddComponent<Animator>();

        // Thêm và cấu hình Collider
        AddCollider(parentGO, spriteRenderer);
    }

    private void AddCollider(GameObject targetGO, SpriteRenderer spriteRenderer)
    {
        Bounds spriteBounds = spriteRenderer.bounds;
        float colliderPadding = 1.2f; // Lớn hơn sprite 20% để dễ bấm

        float aspectRatio = spriteBounds.size.y > 0.01f ? spriteBounds.size.x / spriteBounds.size.y : 1f;

        if (aspectRatio > 1.5f || aspectRatio < (1f / 1.5f)) // Nếu item dài theo chiều ngang hoặc dọc
        {
            var collider = targetGO.AddComponent<CapsuleCollider>();
            collider.center = Vector3.zero;
            if (spriteBounds.size.x > spriteBounds.size.y) // Ngang
            {
                collider.direction = 0; // X-axis
                collider.height = spriteBounds.size.x * colliderPadding;
                collider.radius = spriteBounds.size.y / 2f * colliderPadding;
            }
            else // Dọc
            {
                collider.direction = 1; // Y-axis
                collider.height = spriteBounds.size.y * colliderPadding;
                collider.radius = spriteBounds.size.x / 2f * colliderPadding;
            }
        }
        else // Nếu item gần vuông/tròn
        {
            var collider = targetGO.AddComponent<SphereCollider>();
            collider.center = Vector3.zero;
            collider.radius = Mathf.Max(spriteBounds.size.x, spriteBounds.size.y) / 2f * colliderPadding;
        }
    }

    private void SetupStoveButton(SpriteRenderer stoveSprite)
    {

        GameObject stoveGO = stoveSprite.gameObject;

        // Thêm và cấu hình Collider
        if (stoveGO.GetComponent<SphereCollider>() == null)
        {
            var collider = stoveGO.AddComponent<SphereCollider>();
            Bounds spriteBounds = stoveSprite.bounds;
            collider.radius = Mathf.Max(spriteBounds.size.x, spriteBounds.size.y) / 2f * 1.2f; // 1.2f padding
        }

        // Lấy hoặc thêm component Ply_ToggleEvent
        Ply_ToggleEvent toggleEvent = stoveGO.GetComponent<Ply_ToggleEvent>();
        if (toggleEvent == null)
        {
            toggleEvent = stoveGO.AddComponent<Ply_ToggleEvent>();
        }

            UnityEventTools.RemovePersistentListener(toggleEvent.onTurnOn, 0);
            UnityEventTools.RemovePersistentListener(toggleEvent.onTurnOff, 0);
        // Xóa tất cả các listener cũ để tránh bị trùng lặp

        // Thêm listener mới
        UnityEventTools.AddPersistentListener(toggleEvent.onTurnOn, panReference.TurnOnStove);
        UnityEventTools.AddPersistentListener(toggleEvent.onTurnOff, panReference.TurnOffStove);

        Debug.Log($"Đã kết nối các sự kiện của '{stoveGO.name}' tới '{panReference.name}'.");

    }
}
#endif
