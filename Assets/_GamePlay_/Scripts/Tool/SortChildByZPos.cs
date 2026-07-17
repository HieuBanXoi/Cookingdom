using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
#if UNITY_EDITOR
public class SortChildByZPosEditor : EditorWindow
{
    private Transform transformToSort;
    private float zOffset = -0.1f;
    private float baseZ = -0.1f;

    [SerializeField]
    private List<Transform> childrenToSort = new List<Transform>();

    private SerializedObject serializedObject;
    private SerializedProperty childrenListProperty;
    [MenuItem("Tools/Sort Children by Z Position")]
    public static void ShowWindow()
    {
        GetWindow<SortChildByZPosEditor>("Sort Children Z");
    }

    private void OnEnable()
    {
        serializedObject = new SerializedObject(this);
        childrenListProperty = serializedObject.FindProperty("childrenToSort");
    }

    void OnGUI()
    {
        serializedObject.Update();

        GUILayout.Label("Sort Children by Z Position", EditorStyles.boldLabel);

        transformToSort = (Transform)EditorGUILayout.ObjectField("1. Transform to Get Children From", transformToSort, typeof(Transform), true);

        if (GUILayout.Button("Get Children"))
        {
            GetChildrenFromTransform();
        }

        EditorGUILayout.Space();

        baseZ = EditorGUILayout.FloatField("Base Z", baseZ);
        zOffset = EditorGUILayout.FloatField("Z Offset per Child", zOffset);

        EditorGUILayout.Space();

        GUILayout.Label("2. Children to Sort (Editable)", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(childrenListProperty, true);

        serializedObject.ApplyModifiedProperties();

        EditorGUILayout.Space();

        if (childrenToSort.Count > 0)
        {
            if (GUILayout.Button("3. Sort Listed Children"))
            {
                SortListedChildrenByZPosition();
            }
        }
        else
        {
            EditorGUILayout.HelpBox("List of children is empty. Get children from a transform or add them manually.", MessageType.Info);
        }
    }

    private void GetChildrenFromTransform()
    {
        if (transformToSort == null)
        {
            EditorUtility.DisplayDialog("Lỗi", "Vui lòng gán một Transform để lấy danh sách con.", "OK");
            return;
        }

        childrenToSort.Clear();
        for (int i = 0; i < transformToSort.childCount; i++)
        {
            childrenToSort.Add(transformToSort.GetChild(i));
        }
        Debug.Log($"Đã lấy {childrenToSort.Count} đối tượng con từ '{transformToSort.name}'.");
    }

    private void SortListedChildrenByZPosition()
    {
        if (childrenToSort == null || childrenToSort.Count == 0)
        {
            EditorUtility.DisplayDialog("Lỗi", "Danh sách con để sắp xếp đang trống.", "OK");
            return;
        }

        // Ghi lại trạng thái của tất cả các con để có thể Undo
        foreach (var child in childrenToSort)
        {
            if (child != null)
            {
                Undo.RecordObject(child, "Sort Child Z Position");
            }
        }

        // Cập nhật vị trí Z cho từng con
        for (int i = 0; i < childrenToSort.Count; i++)
        {
            Transform child = childrenToSort[i];
            if (child != null)
            {
                Vector3 pos = child.localPosition;
                pos.z = baseZ + i * zOffset;
                child.localPosition = pos;
            }
        }

        Debug.Log($"Đã sắp xếp {childrenToSort.Count} đối tượng con theo danh sách.");
    }
}
#endif