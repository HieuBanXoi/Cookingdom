using UnityEngine;

[RequireComponent(typeof(SpriteMask))]
public class BrushMaskUnit : Ply_GameUnit
{
    public SpriteMask spriteMask;

    private void Awake()
    {
        if (tf == null) tf = transform;
        if (spriteMask == null) spriteMask = GetComponent<SpriteMask>();
    }

    private void OnValidate()
    {
        if (tf == null) tf = transform;
        if (spriteMask == null) spriteMask = GetComponent<SpriteMask>();
    }
}
