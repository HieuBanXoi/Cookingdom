using System;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

[ExecuteAlways]
public class SpineSlotDebugger : MonoBehaviour
{
    public enum OverrideMode
    {
        UseAttachmentName,
        SetNull
    }

    public enum BakedSlotType
    {
        None,
        Hair,
        Crow,
        ShoeLeft,
        ShoeRight,
        Armor,
        ShoulderLeft,
        ShoulderRight,
        Clollar,
        ArmTopLeft,
        ArmTopRight,
        ArmArmorLeft,
        ArmArmorRight,
        DressArmorFront,
        DressArmorLeft,
        DressArmorRight,
        StockLeft,
        StockRight,
        Dress,
        GloveLeft,
        GloveRight,
        Makeup,
        Pretticoat,
        Coat,
        Corset,
        BowNeck,
        ThighLeft,
        ThighRight,
        Belt,
        
    }

    [Serializable]
    public class SlotAttachmentOverride
    {
        public string slotName;
        public OverrideMode mode;
        public string attachmentName;
    }

    [Serializable]
    public class BakedVisibleSlot
    {
        public BakedSlotType type;
        public string slotName;
        public string attachmentName;
    }

    [SerializeField] private SkeletonAnimation skeletonAnimation;
    [SerializeField] private bool overrideAnimation = true;
    [SerializeField] private bool applyInEditMode = true;
    [SerializeField] private bool showSlotNamesInScene = true;
    [SerializeField] private bool showOnlySlotsWithAttachment;
    [SerializeField] private bool avoidSceneSlotNameOverlap = true;
    [SerializeField] private Color sceneSlotNameColor = new Color(1f, 0.92f, 0.35f, 1f);
    [SerializeField] private Vector2 sceneSlotNameOffset = new Vector2(0f, 0.04f);
    [SerializeField] private BakedSlotType selectedType;
    [SerializeField] private List<BakedVisibleSlot> bakedVisibleSlots = new List<BakedVisibleSlot>();
    [SerializeField] private List<SlotAttachmentOverride> slotOverrides = new List<SlotAttachmentOverride>();

    private readonly Dictionary<string, string> lastAttachmentBeforeEquip = new Dictionary<string, string>();

    public SkeletonAnimation SkeletonAnimation => skeletonAnimation;
    public IReadOnlyList<SlotAttachmentOverride> SlotOverrides => slotOverrides;
    public bool ShowSlotNamesInScene => showSlotNamesInScene;
    public bool ShowOnlySlotsWithAttachment => showOnlySlotsWithAttachment;
    public bool AvoidSceneSlotNameOverlap => avoidSceneSlotNameOverlap;
    public Color SceneSlotNameColor => sceneSlotNameColor;
    public Vector2 SceneSlotNameOffset => sceneSlotNameOffset;
    public BakedSlotType SelectedType => selectedType;
    public IReadOnlyList<BakedVisibleSlot> BakedVisibleSlots => bakedVisibleSlots;

    private void Reset()
    {
        skeletonAnimation = GetComponent<SkeletonAnimation>();
    }

    private void OnEnable()
    {
        CacheSkeletonAnimation();
        SubscribeUpdateComplete();
        ApplyOverrides();
    }

    private void OnDisable()
    {
        UnsubscribeUpdateComplete();
    }

    private void OnValidate()
    {
        CacheSkeletonAnimation();

        if (!Application.isPlaying && applyInEditMode)
            ApplyOverrides();

        SubscribeUpdateComplete();
    }

    private void Start()
    {
        CacheSkeletonAnimation();
        ApplyOverrides();
    }

    private void HandleUpdateComplete(ISkeletonAnimation animated)
    {
        if (overrideAnimation)
            ApplyOverrides(false);
    }

    public void LogCurrentAttachments()
    {
        if (!TryInitializeSkeleton())
            return;

        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
        {
            if (slot.Attachment == null)
                continue;

            Debug.Log("Slot: " + slot.Data.Name + " | Attachment: " + slot.Attachment.Name, this);
        }
    }

    public void SetBakedVisibleSlots(List<BakedVisibleSlot> slots)
    {
        bakedVisibleSlots.Clear();
        if (slots == null)
            return;

        bakedVisibleSlots.AddRange(slots);
    }

    public void SetBakedVisibleSlotsForType(BakedSlotType type, List<BakedVisibleSlot> slots)
    {
        bakedVisibleSlots.RemoveAll(item => item != null && item.type == type);
        if (slots == null)
            return;

        for (int i = 0; i < slots.Count; i++)
        {
            if (slots[i] != null)
                slots[i].type = type;
        }

        bakedVisibleSlots.AddRange(slots);
    }

    public void SetBakedVisibleSlot(BakedVisibleSlot slot)
    {
        if (slot == null || string.IsNullOrEmpty(slot.slotName))
            return;

        bakedVisibleSlots.RemoveAll(item => item != null && item.type == slot.type && item.slotName == slot.slotName);
        bakedVisibleSlots.Add(slot);
    }

    public int EquipBakedSlotsByType(string type)
    {
        if (!Enum.TryParse(type, true, out BakedSlotType parsedType))
        {
            Debug.LogWarning("Baked slot type " + type + " is not valid.", this);
            return 0;
        }

        return EquipBakedSlotsByType(parsedType);
    }

    public int EquipBakedSlotsByType(BakedSlotType type)
    {
        if (!TryInitializeSkeleton())
            return 0;

        int equippedCount = 0;
        int matchedCount = 0;
        HashSet<string> savedSlotNames = new HashSet<string>();
        for (int i = 0; i < bakedVisibleSlots.Count; i++)
        {
            BakedVisibleSlot bakedSlot = bakedVisibleSlots[i];
            if (bakedSlot == null || bakedSlot.type != type)
                continue;

            matchedCount++;

            if (string.IsNullOrEmpty(bakedSlot.slotName))
                continue;

            Slot slot = skeletonAnimation.Skeleton.FindSlot(bakedSlot.slotName);
            if (slot == null)
                continue;

            if (savedSlotNames.Add(bakedSlot.slotName))
                SaveAttachmentBeforeEquip(bakedSlot.slotName, slot);

            RemoveOverride(bakedSlot.slotName, false);
            skeletonAnimation.Skeleton.SetAttachment(bakedSlot.slotName, bakedSlot.attachmentName);
            equippedCount++;
        }

        if (matchedCount == 0)
            Debug.LogWarning("No baked Spine slots found for type " + type + ".", this);

        RefreshMesh();
        return equippedCount;
    }

    public int UnequipBakedSlotsByType(BakedSlotType type)
    {
        if (!TryInitializeSkeleton())
            return 0;

        int restoredCount = 0;
        int matchedCount = 0;
        HashSet<string> restoredSlotNames = new HashSet<string>();
        for (int i = 0; i < bakedVisibleSlots.Count; i++)
        {
            BakedVisibleSlot bakedSlot = bakedVisibleSlots[i];
            if (bakedSlot == null || bakedSlot.type != type)
                continue;

            matchedCount++;

            if (string.IsNullOrEmpty(bakedSlot.slotName) || !restoredSlotNames.Add(bakedSlot.slotName))
                continue;

            if (RestoreAttachmentBeforeEquip(bakedSlot.slotName))
                restoredCount++;
        }

        if (matchedCount == 0)
            Debug.LogWarning("No baked Spine slots found for type " + type + ".", this);

        RefreshMesh();
        return restoredCount;
    }

    public bool EquipBakedSlot(BakedVisibleSlot bakedSlot)
    {
        if (bakedSlot == null || string.IsNullOrEmpty(bakedSlot.slotName) || string.IsNullOrEmpty(bakedSlot.attachmentName))
            return false;

        if (!TryInitializeSkeleton())
            return false;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(bakedSlot.slotName);
        if (slot == null)
            return false;

        SaveAttachmentBeforeEquip(bakedSlot.slotName, slot);
        RemoveOverride(bakedSlot.slotName, false);
        skeletonAnimation.Skeleton.SetAttachment(bakedSlot.slotName, bakedSlot.attachmentName);
        RefreshMesh();
        return true;
    }

    public bool UnequipBakedSlot(BakedVisibleSlot bakedSlot)
    {
        if (bakedSlot == null || string.IsNullOrEmpty(bakedSlot.slotName))
            return false;

        if (!TryInitializeSkeleton())
            return false;

        bool restored = RestoreAttachmentBeforeEquip(bakedSlot.slotName);
        if (restored)
            RefreshMesh();

        return restored;
    }

    private void SaveAttachmentBeforeEquip(string slotName, Slot slot)
    {
        lastAttachmentBeforeEquip[slotName] = slot.Attachment != null ? slot.Attachment.Name : null;
    }

    private bool RestoreAttachmentBeforeEquip(string slotName)
    {
        if (!lastAttachmentBeforeEquip.TryGetValue(slotName, out string attachmentName))
            return false;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(slotName);
        if (slot == null)
            return false;

        RemoveOverride(slotName, false);
        skeletonAnimation.Skeleton.SetAttachment(slotName, attachmentName);
        lastAttachmentBeforeEquip.Remove(slotName);
        return true;
    }

    public void SetSlotOverrides(List<SlotAttachmentOverride> overrides)
    {
        slotOverrides.Clear();
        if (overrides == null)
            return;

        slotOverrides.AddRange(overrides);
    }

    public SlotAttachmentOverride GetOverride(string slotName)
    {
        return slotOverrides.Find(item => item.slotName == slotName);
    }

    public void SetNullOverride(string slotName)
    {
        SlotAttachmentOverride slotOverride = GetOrCreateOverride(slotName);
        slotOverride.mode = OverrideMode.SetNull;
        slotOverride.attachmentName = null;
        ApplySlotOverride(slotOverride);
    }

    public void SetAttachmentNameOverride(string slotName, string attachmentName)
    {
        SlotAttachmentOverride slotOverride = GetOrCreateOverride(slotName);
        slotOverride.mode = string.IsNullOrEmpty(attachmentName) ? OverrideMode.SetNull : OverrideMode.UseAttachmentName;
        slotOverride.attachmentName = attachmentName;
        ApplySlotOverride(slotOverride);
    }

    public void RemoveOverride(string slotName, bool restoreSetupPose)
    {
        slotOverrides.RemoveAll(item => item.slotName == slotName);

        if (restoreSetupPose)
            RestoreSlotToSetupPose(slotName);
    }

    public void ApplyOverrides(bool refreshMesh = true)
    {
        if (!TryInitializeSkeleton())
            return;

        for (int i = 0; i < slotOverrides.Count; i++)
            ApplySlotOverride(slotOverrides[i], false);

        if (refreshMesh)
            RefreshMesh();
    }

    public void RestoreSlotToSetupPose(string slotName)
    {
        if (!TryInitializeSkeleton())
            return;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(slotName);
        if (slot == null)
            return;

        RestoreSlotToSetupPose(slot);
        RefreshMesh();
    }

    public void RestoreAllSlotsToSetupPose()
    {
        if (!TryInitializeSkeleton())
            return;

        foreach (Slot slot in skeletonAnimation.Skeleton.Slots)
            RestoreSlotToSetupPose(slot);

        RefreshMesh();
    }

    private void RestoreSlotToSetupPose(Slot slot)
    {
        RestoreSlotToSetupPose(slot, null);
    }

    private void RestoreSlotToSetupPose(Slot slot, string fallbackAttachmentName)
    {
        string setupAttachmentName = slot.Data.AttachmentName;
        string attachmentName = string.IsNullOrEmpty(setupAttachmentName) ? fallbackAttachmentName : setupAttachmentName;
        slot.Attachment = string.IsNullOrEmpty(attachmentName)
            ? null
            : FindAttachment(slot.Data.Index, attachmentName);
    }

    private Attachment FindAttachment(int slotIndex, string attachmentName)
    {
        Attachment attachment = skeletonAnimation.Skeleton.GetAttachment(slotIndex, attachmentName);
        if (attachment != null)
            return attachment;

        SkeletonData skeletonData = skeletonAnimation.Skeleton.Data;
        for (int i = 0; i < skeletonData.Skins.Count; i++)
        {
            Skin skin = skeletonData.Skins.Items[i];
            if (skin == null)
                continue;

            attachment = skin.GetAttachment(slotIndex, attachmentName);
            if (attachment != null)
                return attachment;
        }

        return null;
    }

    private SlotAttachmentOverride GetOrCreateOverride(string slotName)
    {
        SlotAttachmentOverride slotOverride = GetOverride(slotName);
        if (slotOverride != null)
            return slotOverride;

        slotOverride = new SlotAttachmentOverride { slotName = slotName };
        slotOverrides.Add(slotOverride);
        return slotOverride;
    }

    private void ApplySlotOverride(SlotAttachmentOverride slotOverride, bool refreshMesh = true)
    {
        if (slotOverride == null || string.IsNullOrEmpty(slotOverride.slotName) || !TryInitializeSkeleton())
            return;

        Slot slot = skeletonAnimation.Skeleton.FindSlot(slotOverride.slotName);
        if (slot == null)
            return;

        if (slotOverride.mode == OverrideMode.SetNull || string.IsNullOrEmpty(slotOverride.attachmentName))
        {
            slot.Attachment = null;
        }
        else
        {
            Attachment attachment = FindAttachment(slot.Data.Index, slotOverride.attachmentName);
            if (attachment == null)
            {
                Debug.LogWarning("Attachment " + slotOverride.attachmentName + " not found for slot " + slotOverride.slotName + ".", this);
                return;
            }

            slot.Attachment = attachment;
        }

        if (refreshMesh)
            RefreshMesh();
    }

    private bool TryInitializeSkeleton()
    {
        CacheSkeletonAnimation();
        if (skeletonAnimation == null)
            return false;

        if (!skeletonAnimation.valid)
            skeletonAnimation.Initialize(false, true);

        return skeletonAnimation.valid && skeletonAnimation.Skeleton != null;
    }

    private void CacheSkeletonAnimation()
    {
        if (skeletonAnimation == null)
            skeletonAnimation = GetComponent<SkeletonAnimation>();
    }

    private void SubscribeUpdateComplete()
    {
        if (skeletonAnimation == null)
            return;

        skeletonAnimation.UpdateComplete -= HandleUpdateComplete;
        if (overrideAnimation)
            skeletonAnimation.UpdateComplete += HandleUpdateComplete;
    }

    private void UnsubscribeUpdateComplete()
    {
        if (skeletonAnimation != null)
            skeletonAnimation.UpdateComplete -= HandleUpdateComplete;
    }

    private void RefreshMesh()
    {
        if (skeletonAnimation != null && skeletonAnimation.valid)
            skeletonAnimation.LateUpdate();
    }
}
