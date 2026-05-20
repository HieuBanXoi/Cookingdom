using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum FxType
{
    Click,
    Drop,
    Jump,
    Flash,
    KnifeCuts,
    KnifeSlice,
    KnifeSwing,
    PlateMove,
    Cooking,
    SpoonStirring,
    OinIn,
    OilPut,
    Swipe,
    Complete,
    FoodJump,
    DropWater,
    Clock
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    public AudioClip[] audioClips;
    public AudioSource sound;
    private AudioSource[] fx = new AudioSource[20];

    bool isMute = false;

    public void PlayFx(FxType fxType)
    {
        if (!isMute)
        {
            if (fx[(int)fxType] == null)
            {
                fx[(int)fxType] = new GameObject("Audio_" + fxType).AddComponent<AudioSource>();
                fx[(int)fxType].clip = audioClips[(int)fxType];
            }
            fx[(int)fxType].PlayOneShot(audioClips[(int)fxType]);
        }
    }
    public void PlayFx(int fxType)
    {
        PlayFx((FxType)fxType);
    }
    public void Mute()
    {
        sound.Stop();
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
        }
    }

    public void PlayFxLoop(FxType fxType)
    {
        if (!isMute)
        {
            if (fx[(int)fxType] == null)
            {
                fx[(int)fxType] = new GameObject("Audio_" + fxType).AddComponent<AudioSource>();
                fx[(int)fxType].clip = audioClips[(int)fxType];
            }
            fx[(int)fxType].loop = true;
            if (!fx[(int)fxType].isPlaying)
            {
                fx[(int)fxType].Play();
            }
        }
    }

    public void PlayFxLoop(int fxType)
    {
        PlayFxLoop((FxType)fxType);
    }

    public void StopFxLoop(FxType fxType)
    {
        if (fx[(int)fxType] != null)
        {
            fx[(int)fxType].loop = false;
            fx[(int)fxType].Stop();
        }
    }

    public void StopFxLoop(int fxType)
    {
        StopFxLoop((FxType)fxType);
    }
}
