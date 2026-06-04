using Spine;
using Spine.Unity;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(SpineSlotDebugger))]
public class SpineSlotDebuggerEditor : Editor
{
    private struct SlotLabel
    {
        public string name;
        public Vector2 guiPosition;
        public Rect rect;
    }

    private SerializedProperty skeletonAnimationProperty;
    private SerializedProperty overrideAnimationProperty;
    private SerializedProperty applyInEditModeProperty;
    private SerializedProperty showSlotNamesInSceneProperty;
    private SerializedProperty showOnlySlotsWithAttachmentProperty;
    private SerializedProperty avoidSceneSlotNameOverlapProperty;
    private SerializedProperty sceneSlotNameColorProperty;
    private SerializedProperty sceneSlotNameOffsetProperty;
    private SerializedProperty selectedTypeProperty;
    private SerializedProperty bakedVisibleSlotsProperty;
    private string slotFilter = string.Empty;
    private string slotFilterSessionKey;
    private string bakedSlotFilter = string.Empty;
    private string bakedSlotFilterSessionKey;
    private bool hideBakedShownSlots;
    private string hideBakedShownSlotsSessionKey;
    private bool showOnlySelectedBakedType;
    private string showOnlySelectedBakedTypeSessionKey;
    private bool showOnlyNonNullSlots;
    private string showOnlyNonNullSlotsSessionKey;
    private string highlightedSlotName;
    private double highlightedSlotUntilTime;
    private HashSet<string> nonNullSlotFilterSnapshot;
    private static GUIStyle slotLabelStyle;
    private static GUIStyle slotLabelBackgroundStyle;

    private void OnEnable()
    {
        skeletonAnimationProperty = serializedObject.FindProperty("skeletonAnimation");
        overrideAnimationProperty = serializedObject.FindProperty("overrideAnimation");
        applyInEditModeProperty = serializedObject.FindProperty("applyInEditMode");
        showSlotNamesInSceneProperty = serializedObject.FindProperty("showSlotNamesInScene");
        showOnlySlotsWithAttachmentProperty = serializedObject.FindProperty("showOnlySlotsWithAttachment");
        avoidSceneSlotNameOverlapProperty = serializedObject.FindProperty("avoidSceneSlotNameOverlap");
        sceneSlotNameColorProperty = serializedObject.FindProperty("sceneSlotNameColor");
        sceneSlotNameOffsetProperty = serializedObject.FindProperty("sceneSlotNameOffset");
        selectedTypeProperty = serializedObject.FindProperty("selectedType");
        bakedVisibleSlotsProperty = serializedObject.FindProperty("bakedVisibleSlots");
        slotFilterSessionKey = "SpineSlotDebuggerEditor.Filter." + target.GetInstanceID();
        bakedSlotFilterSessionKey = "SpineSlotDebuggerEditor.BakedFilter." + target.GetInstanceID();
        hideBakedShownSlotsSessionKey = "SpineSlotDebuggerEditor.HideBakedShownSlots." + target.GetInstanceID();
        showOnlySelectedBakedTypeSessionKey = "SpineSlotDebuggerEditor.ShowOnlySelectedBakedType." + target.GetInstanceID();
        showOnlyNonNullSlotsSessionKey = "SpineSlotDebuggerEditor.ShowOnlyNonNullSlots." + target.GetInstanceID();
        slotFilter = SessionState.GetString(slotFilterSessionKey, string.Empty);
        bakedSlotFilter = SessionState.GetString(bakedSlotFilterSessionKey, string.Empty);
        hideBakedShownSlots = SessionState.GetBool(hideBakedShownSlotsSessionKey, false);
        showOnlySelectedBakedType = SessionState.GetBool(showOnlySelectedBakedTypeSessionKey, false);
        showOnlyNonNullSlots = SessionState.GetBool(showOnlyNonNullSlotsSessionKey, false);
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        EditorGUILayout.PropertyField(skeletonAnimationProperty);
        EditorGUILayout.PropertyField(overrideAnimationProperty);
        EditorGUILayout.PropertyField(applyInEditModeProperty);
        EditorGUILayout.PropertyField(showSlotNamesInSceneProperty);
        if (showSlotNamesInSceneProperty.boolValue)
        {
            EditorGUI.indentLevel++;
            EditorGUILayout.PropertyField(showOnlySlotsWithAttachmentProperty);
            EditorGUILayout.PropertyField(avoidSceneSlotNameOverlapProperty);
            EditorGUILayout.PropertyField(sceneSlotNameColorProperty);
            EditorGUILayout.PropertyField(sceneSlotNameOffsetProperty);
            EditorGUI.indentLevel--;
        }
        serializedObject.ApplyModifiedProperties();

        SpineSlotDebugger debugger = (SpineSlotDebugger)target;
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;

        EditorGUILayout.Space();
        DrawTypeSelector();
        serializedObject.ApplyModifiedProperties();

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Apply Overrides"))
                ApplyWithUndo(debugger);

            if (GUILayout.Button("All Setup Pose"))
                RestoreAllSlotsToSetupPoseWithUndo(debugger);

            if (GUILayout.Button("Log Current"))
                debugger.LogCurrentAttachments();

            if (GUILayout.Button("Bake Shown"))
                BakeShownSlotsWithUndo(debugger);

            if (GUILayout.Button("Reset Baked"))
                ResetBakedShownSlotsWithUndo(debugger);

            if (GUILayout.Button("Bake Overrides"))
                BakeShownSlotsAndReplaceOverridesWithUndo(debugger);

            if (GUILayout.Button("Equip Type"))
                EquipSelectedTypeWithUndo(debugger);

            if (GUILayout.Button("Unequip Type"))
                UnequipSelectedTypeWithUndo(debugger);
        }

        DrawBakedVisibleSlots(skeletonAnimation);
        serializedObject.ApplyModifiedProperties();

        if (skeletonAnimation == null)
        {
            EditorGUILayout.HelpBox("Assign a SkeletonAnimation or add this component to the Spine GameObject.", MessageType.Info);
            return;
        }

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        if (!skeletonAnimation.valid || skeletonAnimation.Skeleton == null)
        {
            EditorGUILayout.HelpBox("SkeletonAnimation is not valid. Check the SkeletonDataAsset.", MessageType.Warning);
            return;
        }

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("Slots", EditorStyles.boldLabel);
        EditorGUI.BeginChangeCheck();
        slotFilter = EditorGUILayout.TextField("Filter", slotFilter);
        if (EditorGUI.EndChangeCheck())
            SessionState.SetString(slotFilterSessionKey, slotFilter);

        EditorGUI.BeginChangeCheck();
        showOnlyNonNullSlots = GUILayout.Toggle(showOnlyNonNullSlots, "Show Only Non Null Slots", GUI.skin.button);
        if (EditorGUI.EndChangeCheck())
        {
            SessionState.SetBool(showOnlyNonNullSlotsSessionKey, showOnlyNonNullSlots);
            nonNullSlotFilterSnapshot = showOnlyNonNullSlots ? BuildNonNullSlotFilterSnapshot(skeletonAnimation) : null;
        }

        if (showOnlyNonNullSlots && nonNullSlotFilterSnapshot == null)
            nonNullSlotFilterSnapshot = BuildNonNullSlotFilterSnapshot(skeletonAnimation);

        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            string slotName = slot.Data.Name;
            if (showOnlyNonNullSlots && !nonNullSlotFilterSnapshot.Contains(slotName))
                continue;

            if (!string.IsNullOrEmpty(slotFilter) && slotName.IndexOf(slotFilter, System.StringComparison.OrdinalIgnoreCase) < 0)
                continue;

            DrawSlotRow(debugger, slot);
        }
    }

    private static HashSet<string> BuildNonNullSlotFilterSnapshot(SkeletonAnimation skeletonAnimation)
    {
        HashSet<string> snapshot = new HashSet<string>();
        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            if (slot.Attachment != null)
                snapshot.Add(slot.Data.Name);
        }

        return snapshot;
    }

    private void DrawTypeSelector()
    {
        EditorGUILayout.PropertyField(selectedTypeProperty, new GUIContent("Type"));
    }

    private void DrawBakedVisibleSlots(SkeletonAnimation skeletonAnimation)
    {
        EditorGUILayout.Space();
        using (new EditorGUILayout.HorizontalScope())
        {
            EditorGUILayout.LabelField("Baked Shown Slots", EditorStyles.boldLabel);

            EditorGUI.BeginChangeCheck();
            hideBakedShownSlots = GUILayout.Toggle(hideBakedShownSlots, "Hide Baked", GUI.skin.button, GUILayout.Width(90f));
            if (EditorGUI.EndChangeCheck())
                SessionState.SetBool(hideBakedShownSlotsSessionKey, hideBakedShownSlots);
        }

        if (hideBakedShownSlots)
            return;

        EditorGUI.BeginChangeCheck();
        bakedSlotFilter = EditorGUILayout.TextField("Filter", bakedSlotFilter);
        if (EditorGUI.EndChangeCheck())
            SessionState.SetString(bakedSlotFilterSessionKey, bakedSlotFilter);

        EditorGUI.BeginChangeCheck();
        showOnlySelectedBakedType = GUILayout.Toggle(showOnlySelectedBakedType, "Selected Type Only", GUI.skin.button);
        if (EditorGUI.EndChangeCheck())
            SessionState.SetBool(showOnlySelectedBakedTypeSessionKey, showOnlySelectedBakedType);

        if (bakedVisibleSlotsProperty.arraySize == 0)
        {
            EditorGUILayout.HelpBox("No baked slots.", MessageType.Info);
            return;
        }

        for (int i = 0; i < bakedVisibleSlotsProperty.arraySize; i++)
        {
            SerializedProperty element = bakedVisibleSlotsProperty.GetArrayElementAtIndex(i);
            if (!ShouldDrawBakedSlot(element))
                continue;

            DrawBakedVisibleSlotRow(element, skeletonAnimation);
        }
    }

    private bool ShouldDrawBakedSlot(SerializedProperty element)
    {
        SerializedProperty typeProperty = element.FindPropertyRelative("type");
        SerializedProperty slotNameProperty = element.FindPropertyRelative("slotName");
        SerializedProperty attachmentNameProperty = element.FindPropertyRelative("attachmentName");

        if (showOnlySelectedBakedType && typeProperty.enumValueIndex != selectedTypeProperty.enumValueIndex)
            return false;

        if (string.IsNullOrEmpty(bakedSlotFilter))
            return true;

        string filter = bakedSlotFilter.ToLowerInvariant();
        string typeName = typeProperty.enumValueIndex >= 0 && typeProperty.enumValueIndex < typeProperty.enumDisplayNames.Length
            ? typeProperty.enumDisplayNames[typeProperty.enumValueIndex]
            : string.Empty;

        return ContainsFilter(typeName, filter)
            || ContainsFilter(slotNameProperty.stringValue, filter)
            || ContainsFilter(attachmentNameProperty.stringValue, filter);
    }

    private void DrawBakedVisibleSlotRow(SerializedProperty element, SkeletonAnimation skeletonAnimation)
    {
        SerializedProperty typeProperty = element.FindPropertyRelative("type");
        SerializedProperty slotNameProperty = element.FindPropertyRelative("slotName");
        SerializedProperty attachmentNameProperty = element.FindPropertyRelative("attachmentName");

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.PropertyField(typeProperty, GUIContent.none, GUILayout.Width(90f));
                EditorGUILayout.LabelField(slotNameProperty.stringValue, GUILayout.MinWidth(110f));
                EditorGUILayout.LabelField(attachmentNameProperty.stringValue, EditorStyles.miniLabel, GUILayout.MinWidth(110f));

                using (new EditorGUI.DisabledScope(skeletonAnimation == null))
                {
                    if (GUILayout.Button("Equip", GUILayout.Width(56f)))
                        EquipBakedSlotWithUndo(element);

                    if (GUILayout.Button("Unequip", GUILayout.Width(68f)))
                        UnequipBakedSlotWithUndo(element);

                    if (GUILayout.Button("Locate", GUILayout.Width(64f)))
                        LocateSlot(skeletonAnimation, slotNameProperty.stringValue);
                }

                if (GUILayout.Button("Delete", GUILayout.Width(60f)))
                {
                    DeleteBakedSlotWithUndo(element);
                    return;
                }
            }

            EditorGUILayout.PropertyField(slotNameProperty);
            EditorGUILayout.PropertyField(attachmentNameProperty);
        }
    }

    private void DeleteBakedSlotWithUndo(SerializedProperty element)
    {
        Undo.RecordObject(target, "Delete Baked Spine Slot");
        element.DeleteCommand();
        serializedObject.ApplyModifiedProperties();
        EditorUtility.SetDirty(target);
        Repaint();
    }

    private void EquipBakedSlotWithUndo(SerializedProperty element)
    {
        SpineSlotDebugger debugger = (SpineSlotDebugger)target;
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        SpineSlotDebugger.BakedVisibleSlot bakedSlot = new SpineSlotDebugger.BakedVisibleSlot
        {
            type = (SpineSlotDebugger.BakedSlotType)element.FindPropertyRelative("type").enumValueIndex,
            slotName = element.FindPropertyRelative("slotName").stringValue,
            attachmentName = element.FindPropertyRelative("attachmentName").stringValue
        };

        Undo.RecordObjects(new UnityEngine.Object[] { debugger, skeletonAnimation }, "Equip Baked Spine Slot");
        if (debugger.EquipBakedSlot(bakedSlot))
        {
            EditorUtility.SetDirty(debugger);
            EditorUtility.SetDirty(skeletonAnimation);
            RepaintScene();
        }
    }

    private void UnequipBakedSlotWithUndo(SerializedProperty element)
    {
        SpineSlotDebugger debugger = (SpineSlotDebugger)target;
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        SpineSlotDebugger.BakedVisibleSlot bakedSlot = new SpineSlotDebugger.BakedVisibleSlot
        {
            type = (SpineSlotDebugger.BakedSlotType)element.FindPropertyRelative("type").enumValueIndex,
            slotName = element.FindPropertyRelative("slotName").stringValue,
            attachmentName = element.FindPropertyRelative("attachmentName").stringValue
        };

        Undo.RecordObjects(new UnityEngine.Object[] { debugger, skeletonAnimation }, "Unequip Baked Spine Slot");
        if (debugger.UnequipBakedSlot(bakedSlot))
        {
            EditorUtility.SetDirty(debugger);
            EditorUtility.SetDirty(skeletonAnimation);
            RepaintScene();
        }
    }

    private static bool ContainsFilter(string value, string filter)
    {
        return !string.IsNullOrEmpty(value) && value.ToLowerInvariant().Contains(filter);
    }

    private void OnSceneGUI()
    {
        SpineSlotDebugger debugger = (SpineSlotDebugger)target;
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        if (!skeletonAnimation.valid || skeletonAnimation.Skeleton == null)
            return;

        if (UnityEngine.Event.current.type != EventType.Repaint)
            return;

        if (debugger.ShowSlotNamesInScene)
            DrawSlotNameLabels(debugger, skeletonAnimation);

        DrawHighlightedSlot(skeletonAnimation);
    }

    private void DrawSlotRow(SpineSlotDebugger debugger, Slot slot)
    {
        SpineSlotDebugger.SlotAttachmentOverride slotOverride = debugger.GetOverride(slot.Data.Name);
        string attachmentName = slot.Attachment != null ? slot.Attachment.Name : "null";
        string displayedAttachmentName = GetDisplayedAttachmentName(slot, slotOverride);

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField(slot.Data.Name, GUILayout.MinWidth(120));
                EditorGUILayout.LabelField(attachmentName, EditorStyles.miniLabel, GUILayout.MinWidth(90));
            }

            EditorGUI.BeginChangeCheck();
            string nextAttachmentName = EditorGUILayout.TextField("Attachment Name", displayedAttachmentName);
            if (EditorGUI.EndChangeCheck())
            {
                Undo.RecordObject(debugger, "Change Spine Slot Attachment");
                debugger.SetAttachmentNameOverride(slot.Data.Name, nextAttachmentName);
                EditorUtility.SetDirty(debugger);
                RepaintScene();
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Locate"))
                {
                    LocateSlot(debugger.SkeletonAnimation, slot.Data.Name);
                }

                if (GUILayout.Button("Select"))
                {
                    ShowAttachmentNameMenu(debugger, slot);
                }

                if (GUILayout.Button("Bake Slot"))
                {
                    BakeSingleSlotWithUndo(debugger, slot);
                }

                if (GUILayout.Button("Set Null"))
                {
                    Undo.RecordObject(debugger, "Set Spine Slot Null");
                    debugger.SetNullOverride(slot.Data.Name);
                    EditorUtility.SetDirty(debugger);
                    RepaintScene();
                }

                if (GUILayout.Button("Setup Pose"))
                {
                    Undo.RecordObject(debugger, "Restore Spine Slot Setup Pose");
                    debugger.RemoveOverride(slot.Data.Name, true);
                    EditorUtility.SetDirty(debugger);
                    RepaintScene();
                }
            }
        }
    }

    private void BakeSingleSlotWithUndo(SpineSlotDebugger debugger, Slot slot)
    {
        if (slot == null || slot.Attachment == null)
            return;

        Undo.RecordObject(debugger, "Bake Single Spine Slot");
        debugger.SetBakedVisibleSlot(new SpineSlotDebugger.BakedVisibleSlot
        {
            type = debugger.SelectedType,
            slotName = slot.Data.Name,
            attachmentName = slot.Attachment.Name
        });

        EditorUtility.SetDirty(debugger);
        serializedObject.Update();
        Repaint();
    }

    private static string GetDisplayedAttachmentName(Slot slot, SpineSlotDebugger.SlotAttachmentOverride slotOverride)
    {
        if (slotOverride != null)
        {
            if (slotOverride.mode == SpineSlotDebugger.OverrideMode.SetNull)
                return string.Empty;

            if (slotOverride.mode == SpineSlotDebugger.OverrideMode.UseAttachmentName)
                return slotOverride.attachmentName;
        }

        return slot.Attachment != null ? slot.Attachment.Name : string.Empty;
    }

    private void ShowAttachmentNameMenu(SpineSlotDebugger debugger, Slot slot)
    {
        GenericMenu menu = new GenericMenu();
        menu.AddItem(new GUIContent("<Null>"), false, () =>
        {
            Undo.RecordObject(debugger, "Set Spine Slot Null");
            debugger.SetNullOverride(slot.Data.Name);
            EditorUtility.SetDirty(debugger);
            RepaintScene();
        });

        List<string> attachmentNames = GetAttachmentNames(debugger.SkeletonAnimation, slot);
        for (int i = 0; i < attachmentNames.Count; i++)
        {
            string attachmentName = attachmentNames[i];
            menu.AddItem(new GUIContent(attachmentName), slot.Attachment != null && slot.Attachment.Name == attachmentName, () =>
            {
                Undo.RecordObject(debugger, "Change Spine Slot Attachment");
                debugger.SetAttachmentNameOverride(slot.Data.Name, attachmentName);
                EditorUtility.SetDirty(debugger);
                RepaintScene();
            });
        }

        menu.ShowAsContext();
    }

    private static List<string> GetAttachmentNames(SkeletonAnimation skeletonAnimation, Slot slot)
    {
        List<string> attachmentNames = new List<string>();
        if (skeletonAnimation == null || skeletonAnimation.Skeleton == null || slot == null)
            return attachmentNames;

        SkeletonData skeletonData = skeletonAnimation.Skeleton.Data;
        for (int i = 0; i < skeletonData.Skins.Count; i++)
            AddAttachmentNamesFromSkin(skeletonData.Skins.Items[i], slot.Data.Index, attachmentNames);

        AddAttachmentNamesFromAtlases(skeletonAnimation.SkeletonDataAsset, attachmentNames);
        attachmentNames.Sort();
        return attachmentNames;
    }

    private static void AddAttachmentNamesFromSkin(Skin skin, int slotIndex, List<string> attachmentNames)
    {
        if (skin == null)
            return;

        List<Skin.SkinEntry> entries = new List<Skin.SkinEntry>();
        skin.GetAttachments(slotIndex, entries);
        for (int i = 0; i < entries.Count; i++)
        {
            string attachmentName = entries[i].Name;
            if (!attachmentNames.Contains(attachmentName))
                attachmentNames.Add(attachmentName);
        }
    }

    private static void AddAttachmentNamesFromAtlases(SkeletonDataAsset skeletonDataAsset, List<string> attachmentNames)
    {
        if (skeletonDataAsset == null || skeletonDataAsset.atlasAssets == null)
            return;

        for (int i = 0; i < skeletonDataAsset.atlasAssets.Length; i++)
        {
            AtlasAssetBase atlasAsset = skeletonDataAsset.atlasAssets[i];
            if (atlasAsset == null)
                continue;

            Atlas atlas = atlasAsset.GetAtlas(true);
            if (atlas == null)
                continue;

            List<AtlasRegion> regions = atlas.Regions;
            for (int j = 0; j < regions.Count; j++)
            {
                string regionName = regions[j].name;
                if (!string.IsNullOrEmpty(regionName) && !attachmentNames.Contains(regionName))
                    attachmentNames.Add(regionName);
            }
        }
    }

    private void BakeShownSlotsWithUndo(SpineSlotDebugger debugger)
    {
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        if (!skeletonAnimation.valid || skeletonAnimation.Skeleton == null)
            return;

        List<SpineSlotDebugger.BakedVisibleSlot> bakedSlots = new List<SpineSlotDebugger.BakedVisibleSlot>();
        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            if (!slot.Bone.Active || slot.Attachment == null)
                continue;

            bakedSlots.Add(new SpineSlotDebugger.BakedVisibleSlot
            {
                type = debugger.SelectedType,
                slotName = slot.Data.Name,
                attachmentName = slot.Attachment.Name
            });
        }

        Undo.RecordObject(debugger, "Bake Shown Spine Slots");
        debugger.SetBakedVisibleSlotsForType(debugger.SelectedType, bakedSlots);
        EditorUtility.SetDirty(debugger);
        serializedObject.Update();
        Debug.Log("Baked " + bakedSlots.Count + " shown Spine slots for type " + debugger.SelectedType + ".", debugger);
        Repaint();
    }

    private void ResetBakedShownSlotsWithUndo(SpineSlotDebugger debugger)
    {
        Undo.RecordObject(debugger, "Reset Baked Shown Spine Slots");
        debugger.SetBakedVisibleSlots(null);
        EditorUtility.SetDirty(debugger);
        serializedObject.Update();
        Debug.Log("Reset baked shown Spine slots.", debugger);
        Repaint();
    }

    private void BakeShownSlotsAndReplaceOverridesWithUndo(SpineSlotDebugger debugger)
    {
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        if (!skeletonAnimation.valid || skeletonAnimation.Skeleton == null)
            return;

        List<SpineSlotDebugger.BakedVisibleSlot> bakedSlots = new List<SpineSlotDebugger.BakedVisibleSlot>();
        List<SpineSlotDebugger.SlotAttachmentOverride> bakedOverrides = new List<SpineSlotDebugger.SlotAttachmentOverride>();
        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            if (!slot.Bone.Active || slot.Attachment == null)
                continue;

            bakedSlots.Add(new SpineSlotDebugger.BakedVisibleSlot
            {
                type = debugger.SelectedType,
                slotName = slot.Data.Name,
                attachmentName = slot.Attachment.Name
            });

            if (!string.IsNullOrEmpty(slot.Attachment.Name))
            {
                bakedOverrides.Add(new SpineSlotDebugger.SlotAttachmentOverride
                {
                    slotName = slot.Data.Name,
                    mode = SpineSlotDebugger.OverrideMode.UseAttachmentName,
                    attachmentName = slot.Attachment.Name
                });
            }
        }

        Undo.RecordObject(debugger, "Bake Shown Spine Slots And Replace Overrides");
        debugger.SetBakedVisibleSlotsForType(debugger.SelectedType, bakedSlots);
        debugger.SetSlotOverrides(bakedOverrides);
        debugger.ApplyOverrides();
        EditorUtility.SetDirty(debugger);
        serializedObject.Update();
        Debug.Log("Baked " + bakedSlots.Count + " shown Spine slots for type " + debugger.SelectedType + " and replaced slot overrides with " + bakedOverrides.Count + " attachment name overrides.", debugger);
        Repaint();
    }

    private static void EquipSelectedTypeWithUndo(SpineSlotDebugger debugger)
    {
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        Undo.RecordObjects(new UnityEngine.Object[] { debugger, skeletonAnimation }, "Equip Baked Spine Type");
        int equippedCount = debugger.EquipBakedSlotsByType(debugger.SelectedType);
        EditorUtility.SetDirty(debugger);
        EditorUtility.SetDirty(skeletonAnimation);
        RepaintScene();
        Debug.Log("Equipped " + equippedCount + " baked Spine slots for type " + debugger.SelectedType + ".", debugger);
    }

    private static void UnequipSelectedTypeWithUndo(SpineSlotDebugger debugger)
    {
        SkeletonAnimation skeletonAnimation = debugger.SkeletonAnimation;
        if (skeletonAnimation == null)
            return;

        Undo.RecordObjects(new UnityEngine.Object[] { debugger, skeletonAnimation }, "Unequip Baked Spine Type");
        int restoredCount = debugger.UnequipBakedSlotsByType(debugger.SelectedType);
        EditorUtility.SetDirty(debugger);
        EditorUtility.SetDirty(skeletonAnimation);
        RepaintScene();
        Debug.Log("Unequipped " + restoredCount + " baked Spine slots for type " + debugger.SelectedType + ".", debugger);
    }

    private static void DrawSlotNameLabels(SpineSlotDebugger debugger, SkeletonAnimation skeletonAnimation)
    {
        if (slotLabelStyle == null)
        {
            slotLabelStyle = new GUIStyle(EditorStyles.whiteMiniLabel)
            {
                alignment = TextAnchor.MiddleCenter,
                fontSize = 11,
                padding = new RectOffset(4, 4, 2, 2)
            };

            slotLabelBackgroundStyle = new GUIStyle(EditorStyles.helpBox)
            {
                alignment = TextAnchor.MiddleCenter,
                fontSize = 11,
                padding = new RectOffset(4, 4, 2, 2)
            };
        }

        slotLabelStyle.normal.textColor = debugger.SceneSlotNameColor;
        List<SlotLabel> labels = new List<SlotLabel>();

        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            if (!slot.Bone.Active)
                continue;

            if (debugger.ShowOnlySlotsWithAttachment && slot.Attachment == null)
                continue;

            Vector3 position = GetSlotLabelPosition(slot, skeletonAnimation.transform);
            position += skeletonAnimation.transform.TransformVector(debugger.SceneSlotNameOffset);
            Vector2 guiPosition = HandleUtility.WorldToGUIPoint(position);
            Vector2 size = slotLabelStyle.CalcSize(new GUIContent(slot.Data.Name));
            Rect rect = new Rect(guiPosition.x - size.x * 0.5f, guiPosition.y - size.y * 0.5f, size.x, size.y);

            labels.Add(new SlotLabel
            {
                name = slot.Data.Name,
                guiPosition = guiPosition,
                rect = rect
            });
        }

        if (debugger.AvoidSceneSlotNameOverlap)
            ResolveLabelOverlaps(labels);

        DrawResolvedLabels(labels, debugger.SceneSlotNameColor);
    }

    private static void ResolveLabelOverlaps(List<SlotLabel> labels)
    {
        labels.Sort((a, b) =>
        {
            int yCompare = a.guiPosition.y.CompareTo(b.guiPosition.y);
            return yCompare != 0 ? yCompare : a.guiPosition.x.CompareTo(b.guiPosition.x);
        });

        const float Padding = 2f;
        for (int i = 0; i < labels.Count; i++)
        {
            SlotLabel current = labels[i];
            bool changed;
            int guard = 0;

            do
            {
                changed = false;
                for (int j = 0; j < i; j++)
                {
                    Rect previous = labels[j].rect;
                    if (!current.rect.Overlaps(previous))
                        continue;

                    current.rect.y = previous.yMax + Padding;
                    changed = true;
                }

                guard++;
            } while (changed && guard < labels.Count);

            labels[i] = current;
        }
    }

    private static void DrawResolvedLabels(List<SlotLabel> labels, Color textColor)
    {
        Handles.BeginGUI();

        Color previousColor = GUI.color;
        Color backgroundColor = new Color(0f, 0f, 0f, 0.62f);

        for (int i = 0; i < labels.Count; i++)
        {
            Rect backgroundRect = labels[i].rect;
            backgroundRect.x -= 2f;
            backgroundRect.y -= 1f;
            backgroundRect.width += 4f;
            backgroundRect.height += 2f;

            GUI.color = backgroundColor;
            GUI.Box(backgroundRect, GUIContent.none, slotLabelBackgroundStyle);

            GUI.color = textColor;
            GUI.Label(labels[i].rect, labels[i].name, slotLabelStyle);
        }

        GUI.color = previousColor;
        Handles.EndGUI();
    }

    private static Vector3 GetSlotLabelPosition(Slot slot, Transform skeletonTransform)
    {
        VertexAttachment vertexAttachment = slot.Attachment as VertexAttachment;
        if (vertexAttachment == null)
            return slot.Bone.GetWorldPosition(skeletonTransform);

        Vector2[] vertices = vertexAttachment.GetWorldVertices(slot, null);
        if (vertices.Length == 0)
            return slot.Bone.GetWorldPosition(skeletonTransform);

        Vector2 center = Vector2.zero;
        for (int i = 0; i < vertices.Length; i++)
            center += vertices[i];

        center /= vertices.Length;
        return skeletonTransform.TransformPoint(center);
    }

    private void LocateSlot(SkeletonAnimation skeletonAnimation, string slotName)
    {
        if (skeletonAnimation == null || string.IsNullOrEmpty(slotName))
            return;

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        if (!skeletonAnimation.valid || skeletonAnimation.Skeleton == null)
            return;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(slotName);
        if (slot == null)
            return;

        Vector3 position = GetSlotLabelPosition(slot, skeletonAnimation.transform);
        highlightedSlotName = slotName;
        highlightedSlotUntilTime = EditorApplication.timeSinceStartup + 3d;

        SceneView sceneView = SceneView.lastActiveSceneView;
        if (sceneView != null)
        {
            float zoomSize = Mathf.Max(HandleUtility.GetHandleSize(position) * 0.2f, 0.15f);
            sceneView.LookAt(position, sceneView.rotation, zoomSize, sceneView.orthographic, false);
            sceneView.Repaint();
        }

        RepaintScene();
    }

    private void DrawHighlightedSlot(SkeletonAnimation skeletonAnimation)
    {
        if (string.IsNullOrEmpty(highlightedSlotName) || EditorApplication.timeSinceStartup > highlightedSlotUntilTime)
            return;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(highlightedSlotName);
        if (slot == null)
            return;

        Vector3 position = GetSlotLabelPosition(slot, skeletonAnimation.transform);
        float size = HandleUtility.GetHandleSize(position);
        float radius = size * 0.08f;

        Color previousColor = Handles.color;
        Handles.color = Color.cyan;
        Handles.DrawWireDisc(position, Vector3.forward, radius);
        Handles.DrawLine(position + Vector3.left * radius, position + Vector3.right * radius);
        Handles.DrawLine(position + Vector3.down * radius, position + Vector3.up * radius);
        Handles.Label(position + Vector3.up * radius * 1.5f, highlightedSlotName);
        Handles.color = previousColor;
    }

    private static void ApplyWithUndo(SpineSlotDebugger debugger)
    {
        Undo.RecordObject(debugger, "Apply Spine Slot Overrides");
        debugger.ApplyOverrides();
        EditorUtility.SetDirty(debugger);
        RepaintScene();
    }

    private static void RestoreAllSlotsToSetupPoseWithUndo(SpineSlotDebugger debugger)
    {
        Undo.RecordObject(debugger, "Restore All Spine Slots To Setup Pose");
        debugger.RestoreAllSlotsToSetupPose();
        EditorUtility.SetDirty(debugger);
        RepaintScene();
    }

    private static void RepaintScene()
    {
        SceneView.RepaintAll();
        UnityEditorInternal.InternalEditorUtility.RepaintAllViews();
    }
}
