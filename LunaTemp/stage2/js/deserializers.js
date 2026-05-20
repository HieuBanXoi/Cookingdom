var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSpring' )
  var i595 = data
  i594.spring = i595[0]
  i594.damper = i595[1]
  i594.targetPosition = i595[2]
  return i594
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointMotor' )
  var i597 = data
  i596.m_TargetVelocity = i597[0]
  i596.m_Force = i597[1]
  i596.m_FreeSpin = i597[2]
  return i596
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointLimits' )
  var i599 = data
  i598.m_Min = i599[0]
  i598.m_Max = i599[1]
  i598.m_Bounciness = i599[2]
  i598.m_BounceMinVelocity = i599[3]
  i598.m_ContactDistance = i599[4]
  i598.minBounce = i599[5]
  i598.maxBounce = i599[6]
  return i598
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointDrive' )
  var i601 = data
  i600.m_PositionSpring = i601[0]
  i600.m_PositionDamper = i601[1]
  i600.m_MaximumForce = i601[2]
  i600.m_UseAcceleration = i601[3]
  return i600
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i603 = data
  i602.m_Spring = i603[0]
  i602.m_Damper = i603[1]
  return i602
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i605 = data
  i604.m_Limit = i605[0]
  i604.m_Bounciness = i605[1]
  i604.m_ContactDistance = i605[2]
  return i604
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i607 = data
  i606.m_ExtremumSlip = i607[0]
  i606.m_ExtremumValue = i607[1]
  i606.m_AsymptoteSlip = i607[2]
  i606.m_AsymptoteValue = i607[3]
  i606.m_Stiffness = i607[4]
  return i606
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i609 = data
  i608.m_LowerAngle = i609[0]
  i608.m_UpperAngle = i609[1]
  return i608
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i611 = data
  i610.m_MotorSpeed = i611[0]
  i610.m_MaximumMotorTorque = i611[1]
  return i610
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i613 = data
  i612.m_DampingRatio = i613[0]
  i612.m_Frequency = i613[1]
  i612.m_Angle = i613[2]
  return i612
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i615 = data
  i614.m_LowerTranslation = i615[0]
  i614.m_UpperTranslation = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i616 = root || new pc.UnityMaterial()
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'shader')
  i616.renderQueue = i617[3]
  i616.enableInstancing = !!i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i619[i + 0]) );
  }
  i616.floatParameters = i618
  var i621 = i617[6]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i621[i + 0]) );
  }
  i616.colorParameters = i620
  var i623 = i617[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i623[i + 0]) );
  }
  i616.vectorParameters = i622
  var i625 = i617[8]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i625[i + 0]) );
  }
  i616.textureParameters = i624
  var i627 = i617[9]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i627[i + 0]) );
  }
  i616.materialFlags = i626
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i631 = data
  i630.name = i631[0]
  i630.value = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = new pc.Color(i635[1], i635[2], i635[3], i635[4])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Vec4( i639[1], i639[2], i639[3], i639[4] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'value')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i647 = data
  i646.name = i647[0]
  i646.enabled = !!i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i649 = data
  i648.name = i649[0]
  i648.width = i649[1]
  i648.height = i649[2]
  i648.mipmapCount = i649[3]
  i648.anisoLevel = i649[4]
  i648.filterMode = i649[5]
  i648.hdr = !!i649[6]
  i648.format = i649[7]
  i648.wrapMode = i649[8]
  i648.alphaIsTransparency = !!i649[9]
  i648.alphaSource = i649[10]
  i648.graphicsFormat = i649[11]
  i648.sRGBTexture = !!i649[12]
  i648.desiredColorSpace = i649[13]
  i648.wrapU = i649[14]
  i648.wrapV = i649[15]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i651 = data
  i650.position = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.scale = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.rotation = new pc.Quat(i651[6], i651[7], i651[8], i651[9])
  return i650
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i652 = root || request.c( 'HeartEffect' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'tf')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'animatorController')
  request.r(i655[2], i655[3], 0, i654, 'avatar')
  i654.updateMode = i655[4]
  i654.hasTransformHierarchy = !!i655[5]
  i654.applyRootMotion = !!i655[6]
  var i657 = i655[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.humanBones = i656
  i654.enabled = !!i655[8]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i661 = data
  i660.color = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  request.r(i661[4], i661[5], 0, i660, 'sprite')
  i660.flipX = !!i661[6]
  i660.flipY = !!i661[7]
  i660.drawMode = i661[8]
  i660.size = new pc.Vec2( i661[9], i661[10] )
  i660.tileMode = i661[11]
  i660.adaptiveModeThreshold = i661[12]
  i660.maskInteraction = i661[13]
  i660.spriteSortPoint = i661[14]
  i660.enabled = !!i661[15]
  request.r(i661[16], i661[17], 0, i660, 'sharedMaterial')
  var i663 = i661[18]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sharedMaterials = i662
  i660.receiveShadows = !!i661[19]
  i660.shadowCastingMode = i661[20]
  i660.sortingLayerID = i661[21]
  i660.sortingOrder = i661[22]
  i660.lightmapIndex = i661[23]
  i660.lightmapSceneIndex = i661[24]
  i660.lightmapScaleOffset = new pc.Vec4( i661[25], i661[26], i661[27], i661[28] )
  i660.lightProbeUsage = i661[29]
  i660.reflectionProbeUsage = i661[30]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i667 = data
  i666.name = i667[0]
  i666.tagId = i667[1]
  i666.enabled = !!i667[2]
  i666.isStatic = !!i667[3]
  i666.layer = i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i669 = data
  i668.name = i669[0]
  i668.index = i669[1]
  i668.startup = !!i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i671 = data
  i670.pivot = new pc.Vec2( i671[0], i671[1] )
  i670.anchorMin = new pc.Vec2( i671[2], i671[3] )
  i670.anchorMax = new pc.Vec2( i671[4], i671[5] )
  i670.sizeDelta = new pc.Vec2( i671[6], i671[7] )
  i670.anchoredPosition3D = new pc.Vec3( i671[8], i671[9], i671[10] )
  i670.rotation = new pc.Quat(i671[11], i671[12], i671[13], i671[14])
  i670.scale = new pc.Vec3( i671[15], i671[16], i671[17] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i673 = data
  i672.planeDistance = i673[0]
  i672.referencePixelsPerUnit = i673[1]
  i672.isFallbackOverlay = !!i673[2]
  i672.renderMode = i673[3]
  i672.renderOrder = i673[4]
  i672.sortingLayerName = i673[5]
  i672.sortingOrder = i673[6]
  i672.scaleFactor = i673[7]
  request.r(i673[8], i673[9], 0, i672, 'worldCamera')
  i672.overrideSorting = !!i673[10]
  i672.pixelPerfect = !!i673[11]
  i672.targetDisplay = i673[12]
  i672.overridePixelPerfect = !!i673[13]
  i672.enabled = !!i673[14]
  return i672
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i675 = data
  i674.m_UiScaleMode = i675[0]
  i674.m_ReferencePixelsPerUnit = i675[1]
  i674.m_ScaleFactor = i675[2]
  i674.m_ReferenceResolution = new pc.Vec2( i675[3], i675[4] )
  i674.m_ScreenMatchMode = i675[5]
  i674.m_MatchWidthOrHeight = i675[6]
  i674.m_PhysicalUnit = i675[7]
  i674.m_FallbackScreenDPI = i675[8]
  i674.m_DefaultSpriteDPI = i675[9]
  i674.m_DynamicPixelsPerUnit = i675[10]
  i674.m_PresetInfoIsWorld = !!i675[11]
  return i674
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i677 = data
  i676.m_IgnoreReversedGraphics = !!i677[0]
  i676.m_BlockingObjects = i677[1]
  i676.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i677[2] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i679 = data
  i678.cullTransparentMesh = !!i679[0]
  return i678
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Image' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_Sprite')
  i680.m_Type = i681[2]
  i680.m_PreserveAspect = !!i681[3]
  i680.m_FillCenter = !!i681[4]
  i680.m_FillMethod = i681[5]
  i680.m_FillAmount = i681[6]
  i680.m_FillClockwise = !!i681[7]
  i680.m_FillOrigin = i681[8]
  i680.m_UseSpriteMesh = !!i681[9]
  i680.m_PixelsPerUnitMultiplier = i681[10]
  request.r(i681[11], i681[12], 0, i680, 'm_Material')
  i680.m_Maskable = !!i681[13]
  i680.m_Color = new pc.Color(i681[14], i681[15], i681[16], i681[17])
  i680.m_RaycastTarget = !!i681[18]
  i680.m_RaycastPadding = new pc.Vec4( i681[19], i681[20], i681[21], i681[22] )
  return i680
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Button' )
  var i683 = data
  i682.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i683[0], i682.m_OnClick)
  i682.m_Navigation = request.d('UnityEngine.UI.Navigation', i683[1], i682.m_Navigation)
  i682.m_Transition = i683[2]
  i682.m_Colors = request.d('UnityEngine.UI.ColorBlock', i683[3], i682.m_Colors)
  i682.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i683[4], i682.m_SpriteState)
  i682.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i683[5], i682.m_AnimationTriggers)
  i682.m_Interactable = !!i683[6]
  request.r(i683[7], i683[8], 0, i682, 'm_TargetGraphic')
  return i682
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i685 = data
  i684.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i685[0], i684.m_PersistentCalls)
  return i684
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('UnityEngine.Events.PersistentCall', i689[i + 0]));
  }
  i686.m_Calls = i688
  return i686
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_Target')
  i692.m_TargetAssemblyTypeName = i693[2]
  i692.m_MethodName = i693[3]
  i692.m_Mode = i693[4]
  i692.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i693[5], i692.m_Arguments)
  i692.m_CallState = i693[6]
  return i692
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_ObjectArgument')
  i694.m_ObjectArgumentAssemblyTypeName = i695[2]
  i694.m_IntArgument = i695[3]
  i694.m_FloatArgument = i695[4]
  i694.m_StringArgument = i695[5]
  i694.m_BoolArgument = !!i695[6]
  return i694
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i697 = data
  i696.m_Mode = i697[0]
  i696.m_WrapAround = !!i697[1]
  request.r(i697[2], i697[3], 0, i696, 'm_SelectOnUp')
  request.r(i697[4], i697[5], 0, i696, 'm_SelectOnDown')
  request.r(i697[6], i697[7], 0, i696, 'm_SelectOnLeft')
  request.r(i697[8], i697[9], 0, i696, 'm_SelectOnRight')
  return i696
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i699 = data
  i698.m_NormalColor = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.m_HighlightedColor = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.m_PressedColor = new pc.Color(i699[8], i699[9], i699[10], i699[11])
  i698.m_SelectedColor = new pc.Color(i699[12], i699[13], i699[14], i699[15])
  i698.m_DisabledColor = new pc.Color(i699[16], i699[17], i699[18], i699[19])
  i698.m_ColorMultiplier = i699[20]
  i698.m_FadeDuration = i699[21]
  return i698
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_HighlightedSprite')
  request.r(i701[2], i701[3], 0, i700, 'm_PressedSprite')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectedSprite')
  request.r(i701[6], i701[7], 0, i700, 'm_DisabledSprite')
  return i700
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i703 = data
  i702.m_NormalTrigger = i703[0]
  i702.m_HighlightedTrigger = i703[1]
  i702.m_PressedTrigger = i703[2]
  i702.m_SelectedTrigger = i703[3]
  i702.m_DisabledTrigger = i703[4]
  return i702
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i704 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i705 = data
  i704.m_hasFontAssetChanged = !!i705[0]
  request.r(i705[1], i705[2], 0, i704, 'm_baseMaterial')
  i704.m_maskOffset = new pc.Vec4( i705[3], i705[4], i705[5], i705[6] )
  i704.m_text = i705[7]
  i704.m_isRightToLeft = !!i705[8]
  request.r(i705[9], i705[10], 0, i704, 'm_fontAsset')
  request.r(i705[11], i705[12], 0, i704, 'm_sharedMaterial')
  var i707 = i705[13]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.m_fontSharedMaterials = i706
  request.r(i705[14], i705[15], 0, i704, 'm_fontMaterial')
  var i709 = i705[16]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.m_fontMaterials = i708
  i704.m_fontColor32 = UnityEngine.Color32.ConstructColor(i705[17], i705[18], i705[19], i705[20])
  i704.m_fontColor = new pc.Color(i705[21], i705[22], i705[23], i705[24])
  i704.m_enableVertexGradient = !!i705[25]
  i704.m_colorMode = i705[26]
  i704.m_fontColorGradient = request.d('TMPro.VertexGradient', i705[27], i704.m_fontColorGradient)
  request.r(i705[28], i705[29], 0, i704, 'm_fontColorGradientPreset')
  request.r(i705[30], i705[31], 0, i704, 'm_spriteAsset')
  i704.m_tintAllSprites = !!i705[32]
  request.r(i705[33], i705[34], 0, i704, 'm_StyleSheet')
  i704.m_TextStyleHashCode = i705[35]
  i704.m_overrideHtmlColors = !!i705[36]
  i704.m_faceColor = UnityEngine.Color32.ConstructColor(i705[37], i705[38], i705[39], i705[40])
  i704.m_fontSize = i705[41]
  i704.m_fontSizeBase = i705[42]
  i704.m_fontWeight = i705[43]
  i704.m_enableAutoSizing = !!i705[44]
  i704.m_fontSizeMin = i705[45]
  i704.m_fontSizeMax = i705[46]
  i704.m_fontStyle = i705[47]
  i704.m_HorizontalAlignment = i705[48]
  i704.m_VerticalAlignment = i705[49]
  i704.m_textAlignment = i705[50]
  i704.m_characterSpacing = i705[51]
  i704.m_wordSpacing = i705[52]
  i704.m_lineSpacing = i705[53]
  i704.m_lineSpacingMax = i705[54]
  i704.m_paragraphSpacing = i705[55]
  i704.m_charWidthMaxAdj = i705[56]
  i704.m_TextWrappingMode = i705[57]
  i704.m_wordWrappingRatios = i705[58]
  i704.m_overflowMode = i705[59]
  request.r(i705[60], i705[61], 0, i704, 'm_linkedTextComponent')
  request.r(i705[62], i705[63], 0, i704, 'parentLinkedComponent')
  i704.m_enableKerning = !!i705[64]
  var i711 = i705[65]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(i711[i + 0]);
  }
  i704.m_ActiveFontFeatures = i710
  i704.m_enableExtraPadding = !!i705[66]
  i704.checkPaddingRequired = !!i705[67]
  i704.m_isRichText = !!i705[68]
  i704.m_parseCtrlCharacters = !!i705[69]
  i704.m_isOrthographic = !!i705[70]
  i704.m_isCullingEnabled = !!i705[71]
  i704.m_horizontalMapping = i705[72]
  i704.m_verticalMapping = i705[73]
  i704.m_uvLineOffset = i705[74]
  i704.m_geometrySortingOrder = i705[75]
  i704.m_IsTextObjectScaleStatic = !!i705[76]
  i704.m_VertexBufferAutoSizeReduction = !!i705[77]
  i704.m_useMaxVisibleDescender = !!i705[78]
  i704.m_pageToDisplay = i705[79]
  i704.m_margin = new pc.Vec4( i705[80], i705[81], i705[82], i705[83] )
  i704.m_isUsingLegacyAnimationComponent = !!i705[84]
  i704.m_isVolumetricText = !!i705[85]
  request.r(i705[86], i705[87], 0, i704, 'm_Material')
  i704.m_EmojiFallbackSupport = !!i705[88]
  i704.m_Maskable = !!i705[89]
  i704.m_Color = new pc.Color(i705[90], i705[91], i705[92], i705[93])
  i704.m_RaycastTarget = !!i705[94]
  i704.m_RaycastPadding = new pc.Vec4( i705[95], i705[96], i705[97], i705[98] )
  return i704
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.VertexGradient' )
  var i713 = data
  i712.topLeft = new pc.Color(i713[0], i713[1], i713[2], i713[3])
  i712.topRight = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.bottomLeft = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  i712.bottomRight = new pc.Color(i713[12], i713[13], i713[14], i713[15])
  return i712
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i716 = root || request.c( 'Ply_Pool' )
  var i717 = data
  var i719 = i717[0]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Ply_Pool+PoolAmount', i719[i + 0]) );
  }
  i716.poolAmounts = i718
  request.r(i717[1], i717[2], 0, i716, 'poolHolder')
  return i716
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i722 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i723 = data
  i722.type = i723[0]
  i722.amount = i723[1]
  request.r(i723[2], i723[3], 0, i722, 'gameUnit')
  return i722
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i724 = root || request.c( 'Ply_SoundManager' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.audioClips = i726
  request.r(i725[1], i725[2], 0, i724, 'sound')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'clip')
  request.r(i731[2], i731[3], 0, i730, 'outputAudioMixerGroup')
  i730.playOnAwake = !!i731[4]
  i730.loop = !!i731[5]
  i730.time = i731[6]
  i730.volume = i731[7]
  i730.pitch = i731[8]
  i730.enabled = !!i731[9]
  return i730
}

Deserializers["GameManager"] = function (request, data, root) {
  var i732 = root || request.c( 'GameManager' )
  var i733 = data
  i732.isPlaying = !!i733[0]
  i732.isTutorial = !!i733[1]
  i732.isGotoStore = !!i733[2]
  i732.countMove = i733[3]
  i732.currentLayer = i733[4]
  return i732
}

Deserializers["UIManager"] = function (request, data, root) {
  var i734 = root || request.c( 'UIManager' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'winUI')
  request.r(i735[2], i735[3], 0, i734, 'loseUI')
  request.r(i735[4], i735[5], 0, i734, 'tutorial')
  request.r(i735[6], i735[7], 0, i734, 'downloadBtn')
  request.r(i735[8], i735[9], 0, i734, 'image')
  i734.screenWidth = i735[10]
  i734.screenHeight = i735[11]
  i734.scaleHeightOnWidth = i735[12]
  i734.isVertical = !!i735[13]
  request.r(i735[14], i735[15], 0, i734, 'cam')
  i734.useContinuousScaling = !!i735[16]
  i734.baseOrthographicSize = i735[17]
  i734.baseAspect = i735[18]
  i734.landscapeSize = i735[19]
  i734.defaultPortraitSize = i735[20]
  var i737 = i735[21]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('ScreenScaleStep', i737[i + 0]));
  }
  i734.discreteScaleSteps = i736
  return i734
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i740 = root || request.c( 'ScreenScaleStep' )
  var i741 = data
  i740.heightOnWidthRatio = i741[0]
  i740.orthographicSize = i741[1]
  return i740
}

Deserializers["InputManager"] = function (request, data, root) {
  var i742 = root || request.c( 'InputManager' )
  var i743 = data
  i742.groundPiece = UnityEngine.LayerMask.FromIntegerValue( i743[0] )
  i742.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i743[1] )
  i742.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i743[2] )
  i742.isDragging = !!i743[3]
  return i742
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i744 = root || request.c( 'PhaseManager' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('PhaseData', i747[i + 0]));
  }
  i744.phases = i746
  i744.transitionDuration = i745[1]
  i744.delayBeforeNextPhase = i745[2]
  i744.offScreenLeftX = i745[3]
  i744.offScreenRightX = i745[4]
  i744.centerScreenX = i745[5]
  i744.currentPhaseIndex = i745[6]
  i744.currentStepCount = i745[7]
  return i744
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i750 = root || request.c( 'PhaseData' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'phaseObject')
  i750.totalSteps = i751[2]
  i750.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i751[3], i750.onPhaseReady)
  return i750
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i755 = data
  i754.aspect = i755[0]
  i754.orthographic = !!i755[1]
  i754.orthographicSize = i755[2]
  i754.backgroundColor = new pc.Color(i755[3], i755[4], i755[5], i755[6])
  i754.nearClipPlane = i755[7]
  i754.farClipPlane = i755[8]
  i754.fieldOfView = i755[9]
  i754.depth = i755[10]
  i754.clearFlags = i755[11]
  i754.cullingMask = i755[12]
  i754.rect = i755[13]
  request.r(i755[14], i755[15], 0, i754, 'targetTexture')
  i754.usePhysicalProperties = !!i755[16]
  i754.focalLength = i755[17]
  i754.sensorSize = new pc.Vec2( i755[18], i755[19] )
  i754.lensShift = new pc.Vec2( i755[20], i755[21] )
  i754.gateFit = i755[22]
  i754.commandBufferCount = i755[23]
  i754.cameraType = i755[24]
  i754.enabled = !!i755[25]
  return i754
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_FirstSelected')
  i756.m_sendNavigationEvents = !!i757[2]
  i756.m_DragThreshold = i757[3]
  return i756
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i759 = data
  i758.m_HorizontalAxis = i759[0]
  i758.m_VerticalAxis = i759[1]
  i758.m_SubmitButton = i759[2]
  i758.m_CancelButton = i759[3]
  i758.m_InputActionsPerSecond = i759[4]
  i758.m_RepeatDelay = i759[5]
  i758.m_ForceModuleActive = !!i759[6]
  i758.m_SendPointerHoverToParent = !!i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i761 = data
  i760.center = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.radius = i761[3]
  i760.enabled = !!i761[4]
  i760.isTrigger = !!i761[5]
  request.r(i761[6], i761[7], 0, i760, 'material')
  return i760
}

Deserializers["Item"] = function (request, data, root) {
  var i762 = root || request.c( 'Item' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'itemDraggable')
  request.r(i763[2], i763[3], 0, i762, 'itemClickable')
  request.r(i763[4], i763[5], 0, i762, 'itemStirring')
  request.r(i763[6], i763[7], 0, i762, 'itemKnifeSpriteMaskCutter')
  request.r(i763[8], i763[9], 0, i762, 'itemSpriteMaskPainter')
  request.r(i763[10], i763[11], 0, i762, 'itemMoveToTarget')
  request.r(i763[12], i763[13], 0, i762, 'animator')
  i762.itemType = i763[14]
  request.r(i763[15], i763[16], 0, i762, 'spriteRenderer')
  i762.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i763[17], i762.onKnifeIn)
  return i762
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i764 = root || request.c( 'ItemDraggable' )
  var i765 = data
  i764.isDraggable = !!i765[0]
  i764.isUseOrderlayer = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'returnTransform')
  i764.setParentToReturnTransform = !!i765[4]
  i764.returnToExactReturnTransformPosition = !!i765[5]
  i764.targetItemType = i765[6]
  request.r(i765[7], i765[8], 0, i764, 'item')
  i764.checkState = !!i765[9]
  request.r(i765[10], i765[11], 0, i764, 'shadowObject')
  i764.liftOffset = i765[12]
  i764.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i765[13], i764.onBeginDrag)
  i764.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i765[14], i764.onDropSuccess)
  i764.onDropFail = request.d('UnityEngine.Events.UnityEvent', i765[15], i764.onDropFail)
  return i764
}

Deserializers["Ply_MoveToTarget"] = function (request, data, root) {
  var i766 = root || request.c( 'Ply_MoveToTarget' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'defaultTarget')
  i766.isMove2D = !!i767[2]
  i766.useVectorTarget = !!i767[3]
  i766.vectorTarget = new pc.Vec2( i767[4], i767[5] )
  i766.duration = i767[6]
  i766.easeType = i767[7]
  i766.moveType = i767[8]
  i766.jumpPower = i767[9]
  i766.numJumps = i767[10]
  i766.rotate360DuringJump = !!i767[11]
  i766.setParentToTarget = !!i767[12]
  i766.onComplete = request.d('UnityEngine.Events.UnityEvent', i767[13], i766.onComplete)
  i766.lockInputWhileMoving = !!i767[14]
  return i766
}

Deserializers["Sink"] = function (request, data, root) {
  var i768 = root || request.c( 'Sink' )
  var i769 = data
  i768.isClose = !!i769[0]
  i768.isWaterDrop = !!i769[1]
  i768.isWaterIn = !!i769[2]
  request.r(i769[3], i769[4], 0, i768, 'waterDrop')
  request.r(i769[5], i769[6], 0, i768, 'waterIn')
  i768.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i769[7], i768.onWaterIn)
  i768.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i769[8], i768.onNoWaterIn)
  request.r(i769[9], i769[10], 0, i768, 'napNgoai')
  request.r(i769[11], i769[12], 0, i768, 'napTrong')
  request.r(i769[13], i769[14], 0, i768, 'itemDraggable')
  request.r(i769[15], i769[16], 0, i768, 'itemClickable')
  request.r(i769[17], i769[18], 0, i768, 'itemStirring')
  request.r(i769[19], i769[20], 0, i768, 'itemKnifeSpriteMaskCutter')
  request.r(i769[21], i769[22], 0, i768, 'itemSpriteMaskPainter')
  request.r(i769[23], i769[24], 0, i768, 'itemMoveToTarget')
  request.r(i769[25], i769[26], 0, i768, 'animator')
  i768.itemType = i769[27]
  request.r(i769[28], i769[29], 0, i768, 'spriteRenderer')
  i768.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i769[30], i768.onKnifeIn)
  return i768
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'Ply_ToggleEvent' )
  var i771 = data
  i770.isOn = !!i771[0]
  i770.applyStateOnEnable = !!i771[1]
  i770.applyStateOnClick = !!i771[2]
  request.r(i771[3], i771[4], 0, i770, 'targetObject')
  i770.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i771[5], i770.onTurnOn)
  i770.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i771[6], i770.onTurnOff)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i773 = data
  i772.center = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.radius = i773[3]
  i772.height = i773[4]
  i772.direction = i773[5]
  i772.enabled = !!i773[6]
  i772.isTrigger = !!i773[7]
  request.r(i773[8], i773[9], 0, i772, 'material')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i775 = data
  i774.center = new pc.Vec3( i775[0], i775[1], i775[2] )
  i774.size = new pc.Vec3( i775[3], i775[4], i775[5] )
  i774.enabled = !!i775[6]
  i774.isTrigger = !!i775[7]
  request.r(i775[8], i775[9], 0, i774, 'material')
  return i774
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i776 = root || request.c( 'CuttingBoard' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'itemDraggable')
  request.r(i777[2], i777[3], 0, i776, 'itemClickable')
  request.r(i777[4], i777[5], 0, i776, 'itemStirring')
  request.r(i777[6], i777[7], 0, i776, 'itemKnifeSpriteMaskCutter')
  request.r(i777[8], i777[9], 0, i776, 'itemSpriteMaskPainter')
  request.r(i777[10], i777[11], 0, i776, 'itemMoveToTarget')
  request.r(i777[12], i777[13], 0, i776, 'animator')
  i776.itemType = i777[14]
  request.r(i777[15], i777[16], 0, i776, 'spriteRenderer')
  i776.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i777[17], i776.onKnifeIn)
  return i776
}

Deserializers["Knife"] = function (request, data, root) {
  var i778 = root || request.c( 'Knife' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'knifeIdle')
  request.r(i779[2], i779[3], 0, i778, 'knifeOnDrag')
  request.r(i779[4], i779[5], 0, i778, 'itemDraggable')
  request.r(i779[6], i779[7], 0, i778, 'itemClickable')
  request.r(i779[8], i779[9], 0, i778, 'itemStirring')
  request.r(i779[10], i779[11], 0, i778, 'itemKnifeSpriteMaskCutter')
  request.r(i779[12], i779[13], 0, i778, 'itemSpriteMaskPainter')
  request.r(i779[14], i779[15], 0, i778, 'itemMoveToTarget')
  request.r(i779[16], i779[17], 0, i778, 'animator')
  i778.itemType = i779[18]
  request.r(i779[19], i779[20], 0, i778, 'spriteRenderer')
  i778.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i779[21], i778.onKnifeIn)
  return i778
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i780 = root || request.c( 'Ply_BobEffect' )
  var i781 = data
  i780.playOnEnable = !!i781[0]
  i780.useLocalMove = !!i781[1]
  i780.bobOffset = new pc.Vec3( i781[2], i781[3], i781[4] )
  i780.duration = i781[5]
  i780.ease = i781[6]
  return i780
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i782 = root || request.c( 'Ply_TimerEvent' )
  var i783 = data
  i782.duration = i783[0]
  i782.playOnEnable = !!i783[1]
  i782.ignoreTimeScale = !!i783[2]
  i782.autoDisableOnComplete = !!i783[3]
  i782.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i783[4], i782.onTimerStart)
  i782.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i783[5], i782.onTimerComplete)
  i782.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i783[6], i782.onTimerStop)
  return i782
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i784 = root || request.c( 'InWaterItem' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'ply_TimerEvent')
  request.r(i785[2], i785[3], 0, i784, 'ply_BobEffect')
  request.r(i785[4], i785[5], 0, i784, 'collider1')
  request.r(i785[6], i785[7], 0, i784, 'sink')
  i784.isInWater = !!i785[8]
  i784.isOnPlate = !!i785[9]
  request.r(i785[10], i785[11], 0, i784, 'itemDraggable')
  request.r(i785[12], i785[13], 0, i784, 'itemClickable')
  request.r(i785[14], i785[15], 0, i784, 'itemStirring')
  request.r(i785[16], i785[17], 0, i784, 'itemKnifeSpriteMaskCutter')
  request.r(i785[18], i785[19], 0, i784, 'itemSpriteMaskPainter')
  request.r(i785[20], i785[21], 0, i784, 'itemMoveToTarget')
  request.r(i785[22], i785[23], 0, i784, 'animator')
  i784.itemType = i785[24]
  request.r(i785[25], i785[26], 0, i784, 'spriteRenderer')
  i784.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i785[27], i784.onKnifeIn)
  return i784
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i786 = root || request.c( 'ItemClickable' )
  var i787 = data
  i786.requiredClicks = i787[0]
  i786.infiniteClick = !!i787[1]
  i786.canClick = !!i787[2]
  i786.disableAfterClick = !!i787[3]
  i786.onClick = request.d('UnityEngine.Events.UnityEvent', i787[4], i786.onClick)
  var i789 = i787[5]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.Events.UnityEvent', i789[i + 0]));
  }
  i786.sequentialOnClicks = i788
  i786.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i787[6], i786.onClickComplete)
  return i786
}

Deserializers["Bread"] = function (request, data, root) {
  var i792 = root || request.c( 'Bread' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'knife')
  request.r(i793[2], i793[3], 0, i792, 'cuttingBoard')
  request.r(i793[4], i793[5], 0, i792, 'targetPlate')
  i792.isOnBoard = !!i793[6]
  i792.targetPlateType = i793[7]
  i792.flyToDish = i793[8]
  i792.isFlyToDishAnim = !!i793[9]
  i792.cantCutOnFirst = !!i793[10]
  request.r(i793[11], i793[12], 0, i792, 'itemDraggable')
  request.r(i793[13], i793[14], 0, i792, 'itemClickable')
  request.r(i793[15], i793[16], 0, i792, 'itemStirring')
  request.r(i793[17], i793[18], 0, i792, 'itemKnifeSpriteMaskCutter')
  request.r(i793[19], i793[20], 0, i792, 'itemSpriteMaskPainter')
  request.r(i793[21], i793[22], 0, i792, 'itemMoveToTarget')
  request.r(i793[23], i793[24], 0, i792, 'animator')
  i792.itemType = i793[25]
  request.r(i793[26], i793[27], 0, i792, 'spriteRenderer')
  i792.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i793[28], i792.onKnifeIn)
  return i792
}

Deserializers["ItemKnifeSpriteMaskCutter"] = function (request, data, root) {
  var i794 = root || request.c( 'ItemKnifeSpriteMaskCutter' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'knifeTransform')
  i794.bladeLocalXOffset = i795[2]
  i794.leftX = i795[3]
  i794.rightX = i795[4]
  i794.cutStep = i795[5]
  i794.knifeDownLocalOffset = new pc.Vec3( i795[6], i795[7], i795[8] )
  i794.chopDuration = i795[9]
  i794.slideDuration = i795[10]
  i794.chopEase = i795[11]
  i794.slideEase = i795[12]
  request.r(i795[13], i795[14], 0, i794, 'knifeChildMask')
  request.r(i795[15], i795[16], 0, i794, 'itemDone')
  request.r(i795[17], i795[18], 0, i794, 'maskInteractionSpritesObject')
  i794.maskWidthAtScaleOne = i795[19]
  i794.resetOnEnable = !!i795[20]
  request.r(i795[21], i795[22], 0, i794, 'knifeDoneTarget')
  i794.knifeDoneMoveDuration = i795[23]
  i794.knifeDoneMoveEase = i795[24]
  i794.drawGizmos = !!i795[25]
  request.r(i795[26], i795[27], 0, i794, 'gizmoLocalRoot')
  i794.gizmoHeight = i795[28]
  i794.gizmoTickHeight = i795[29]
  i794.gizmoLocalY = i795[30]
  i794.gizmoLocalZ = i795[31]
  i794.rangeGizmoColor = new pc.Color(i795[32], i795[33], i795[34], i795[35])
  i794.leftGizmoColor = new pc.Color(i795[36], i795[37], i795[38], i795[39])
  i794.rightGizmoColor = new pc.Color(i795[40], i795[41], i795[42], i795[43])
  i794.currentCutGizmoColor = new pc.Color(i795[44], i795[45], i795[46], i795[47])
  i794.bladeGizmoColor = new pc.Color(i795[48], i795[49], i795[50], i795[51])
  i794.onCut = request.d('UnityEngine.Events.UnityEvent', i795[52], i794.onCut)
  i794.onCutComplete = request.d('UnityEngine.Events.UnityEvent', i795[53], i794.onCutComplete)
  i794.onKnifeArriveDoneTarget = request.d('UnityEngine.Events.UnityEvent', i795[54], i794.onKnifeArriveDoneTarget)
  return i794
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i796 = root || request.c( 'CuttingItem' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'itemKnife')
  request.r(i797[2], i797[3], 0, i796, 'itemBeforeCut')
  request.r(i797[4], i797[5], 0, i796, 'itemWaitToCut')
  request.r(i797[6], i797[7], 0, i796, 'knifeBeforeCut')
  request.r(i797[8], i797[9], 0, i796, 'knife')
  request.r(i797[10], i797[11], 0, i796, 'cuttingBoard')
  request.r(i797[12], i797[13], 0, i796, 'targetPlate')
  i796.isOnBoard = !!i797[14]
  i796.targetPlateType = i797[15]
  i796.flyToDish = i797[16]
  i796.isFlyToDishAnim = !!i797[17]
  i796.cantCutOnFirst = !!i797[18]
  request.r(i797[19], i797[20], 0, i796, 'itemDraggable')
  request.r(i797[21], i797[22], 0, i796, 'itemClickable')
  request.r(i797[23], i797[24], 0, i796, 'itemStirring')
  request.r(i797[25], i797[26], 0, i796, 'itemKnifeSpriteMaskCutter')
  request.r(i797[27], i797[28], 0, i796, 'itemSpriteMaskPainter')
  request.r(i797[29], i797[30], 0, i796, 'itemMoveToTarget')
  request.r(i797[31], i797[32], 0, i796, 'animator')
  i796.itemType = i797[33]
  request.r(i797[34], i797[35], 0, i796, 'spriteRenderer')
  i796.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i797[36], i796.onKnifeIn)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i799 = data
  i798.frontSortingLayerID = i799[0]
  i798.frontSortingOrder = i799[1]
  i798.backSortingLayerID = i799[2]
  i798.backSortingOrder = i799[3]
  i798.alphaCutoff = i799[4]
  request.r(i799[5], i799[6], 0, i798, 'sprite')
  i798.tileMode = i799[7]
  i798.isCustomRangeActive = !!i799[8]
  i798.spriteSortPoint = i799[9]
  i798.enabled = !!i799[10]
  request.r(i799[11], i799[12], 0, i798, 'sharedMaterial')
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[14]
  i798.shadowCastingMode = i799[15]
  i798.sortingLayerID = i799[16]
  i798.sortingOrder = i799[17]
  i798.lightmapIndex = i799[18]
  i798.lightmapSceneIndex = i799[19]
  i798.lightmapScaleOffset = new pc.Vec4( i799[20], i799[21], i799[22], i799[23] )
  i798.lightProbeUsage = i799[24]
  i798.reflectionProbeUsage = i799[25]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i803 = data
  i802.ambientIntensity = i803[0]
  i802.reflectionIntensity = i803[1]
  i802.ambientMode = i803[2]
  i802.ambientLight = new pc.Color(i803[3], i803[4], i803[5], i803[6])
  i802.ambientSkyColor = new pc.Color(i803[7], i803[8], i803[9], i803[10])
  i802.ambientGroundColor = new pc.Color(i803[11], i803[12], i803[13], i803[14])
  i802.ambientEquatorColor = new pc.Color(i803[15], i803[16], i803[17], i803[18])
  i802.fogColor = new pc.Color(i803[19], i803[20], i803[21], i803[22])
  i802.fogEndDistance = i803[23]
  i802.fogStartDistance = i803[24]
  i802.fogDensity = i803[25]
  i802.fog = !!i803[26]
  request.r(i803[27], i803[28], 0, i802, 'skybox')
  i802.fogMode = i803[29]
  var i805 = i803[30]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i805[i + 0]) );
  }
  i802.lightmaps = i804
  i802.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i803[31], i802.lightProbes)
  i802.lightmapsMode = i803[32]
  i802.mixedBakeMode = i803[33]
  i802.environmentLightingMode = i803[34]
  i802.ambientProbe = new pc.SphericalHarmonicsL2(i803[35])
  i802.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i803[36])
  i802.useReferenceAmbientProbe = !!i803[37]
  request.r(i803[38], i803[39], 0, i802, 'customReflection')
  request.r(i803[40], i803[41], 0, i802, 'defaultReflection')
  i802.defaultReflectionMode = i803[42]
  i802.defaultReflectionResolution = i803[43]
  i802.sunLightObjectId = i803[44]
  i802.pixelLightCount = i803[45]
  i802.defaultReflectionHDR = !!i803[46]
  i802.hasLightDataAsset = !!i803[47]
  i802.hasManualGenerate = !!i803[48]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'lightmapColor')
  request.r(i809[2], i809[3], 0, i808, 'lightmapDirection')
  request.r(i809[4], i809[5], 0, i808, 'shadowMask')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i810 = root || new UnityEngine.LightProbes()
  var i811 = data
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i821[i + 0]));
  }
  i818.ShaderCompilationErrors = i820
  i818.name = i819[1]
  i818.guid = i819[2]
  var i823 = i819[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.shaderDefinedKeywords = i822
  var i825 = i819[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i825[i + 0]) );
  }
  i818.passes = i824
  var i827 = i819[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i827[i + 0]) );
  }
  i818.usePasses = i826
  var i829 = i819[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i829[i + 0]) );
  }
  i818.defaultParameterValues = i828
  request.r(i819[7], i819[8], 0, i818, 'unityFallbackShader')
  i818.readDepth = !!i819[9]
  i818.hasDepthOnlyPass = !!i819[10]
  i818.isCreatedByShaderGraph = !!i819[11]
  i818.disableBatching = !!i819[12]
  i818.compiled = !!i819[13]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i833 = data
  i832.shaderName = i833[0]
  i832.errorMessage = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i838 = root || new pc.UnityShaderPass()
  var i839 = data
  i838.id = i839[0]
  i838.subShaderIndex = i839[1]
  i838.name = i839[2]
  i838.passType = i839[3]
  i838.grabPassTextureName = i839[4]
  i838.usePass = !!i839[5]
  i838.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[6], i838.zTest)
  i838.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[7], i838.zWrite)
  i838.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[8], i838.culling)
  i838.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[9], i838.blending)
  i838.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[10], i838.alphaBlending)
  i838.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[11], i838.colorWriteMask)
  i838.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[12], i838.offsetUnits)
  i838.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[13], i838.offsetFactor)
  i838.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[14], i838.stencilRef)
  i838.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[15], i838.stencilReadMask)
  i838.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[16], i838.stencilWriteMask)
  i838.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[17], i838.stencilOp)
  i838.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[18], i838.stencilOpFront)
  i838.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[19], i838.stencilOpBack)
  var i841 = i839[20]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i841[i + 0]) );
  }
  i838.tags = i840
  var i843 = i839[21]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.passDefinedKeywords = i842
  var i845 = i839[22]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i845[i + 0]) );
  }
  i838.passDefinedKeywordGroups = i844
  var i847 = i839[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i847[i + 0]) );
  }
  i838.variants = i846
  var i849 = i839[24]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i849[i + 0]) );
  }
  i838.excludedVariants = i848
  i838.hasDepthReader = !!i839[25]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i851 = data
  i850.val = i851[0]
  i850.name = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i853 = data
  i852.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[0], i852.src)
  i852.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[1], i852.dst)
  i852.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[2], i852.op)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i855 = data
  i854.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[0], i854.pass)
  i854.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[1], i854.fail)
  i854.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[2], i854.zFail)
  i854.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[3], i854.comp)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i859 = data
  i858.name = i859[0]
  i858.value = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.hasDiscard = !!i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i869 = data
  i868.passId = i869[0]
  i868.subShaderIndex = i869[1]
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.keywords = i870
  i868.vertexProgram = i869[3]
  i868.fragmentProgram = i869[4]
  i868.exportedForWebGl2 = !!i869[5]
  i868.readDepth = !!i869[6]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'shader')
  i874.pass = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i879 = data
  i878.name = i879[0]
  i878.type = i879[1]
  i878.value = new pc.Vec4( i879[2], i879[3], i879[4], i879[5] )
  i878.textureValue = i879[6]
  i878.shaderPropertyFlag = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i881 = data
  i880.name = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'texture')
  i880.aabb = i881[3]
  i880.vertices = i881[4]
  i880.triangles = i881[5]
  i880.textureRect = UnityEngine.Rect.MinMaxRect(i881[6], i881[7], i881[8], i881[9])
  i880.packedRect = UnityEngine.Rect.MinMaxRect(i881[10], i881[11], i881[12], i881[13])
  i880.border = new pc.Vec4( i881[14], i881[15], i881[16], i881[17] )
  i880.transparency = i881[18]
  i880.bounds = i881[19]
  i880.pixelsPerUnit = i881[20]
  i880.textureWidth = i881[21]
  i880.textureHeight = i881[22]
  i880.nativeSize = new pc.Vec2( i881[23], i881[24] )
  i880.pivot = new pc.Vec2( i881[25], i881[26] )
  i880.textureRectOffset = new pc.Vec2( i881[27], i881[28] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i883 = data
  i882.name = i883[0]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i885 = data
  i884.name = i885[0]
  i884.wrapMode = i885[1]
  i884.isLooping = !!i885[2]
  i884.length = i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i887[i + 0]) );
  }
  i884.curves = i886
  var i889 = i885[5]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i889[i + 0]) );
  }
  i884.events = i888
  i884.halfPrecision = !!i885[6]
  i884._frameRate = i885[7]
  i884.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i885[8], i884.localBounds)
  i884.hasMuscleCurves = !!i885[9]
  var i891 = i885[10]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( i891[i + 0] );
  }
  i884.clipMuscleConstant = i890
  i884.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i885[11], i884.clipBindingConstant)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i895 = data
  i894.path = i895[0]
  i894.hash = i895[1]
  i894.componentType = i895[2]
  i894.property = i895[3]
  i894.keys = i895[4]
  var i897 = i895[5]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i897[i + 0]) );
  }
  i894.objectReferenceKeys = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i901 = data
  i900.time = i901[0]
  request.r(i901[1], i901[2], 0, i900, 'value')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i905 = data
  i904.functionName = i905[0]
  i904.floatParameter = i905[1]
  i904.intParameter = i905[2]
  i904.stringParameter = i905[3]
  request.r(i905[4], i905[5], 0, i904, 'objectReferenceParameter')
  i904.time = i905[6]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i907 = data
  i906.center = new pc.Vec3( i907[0], i907[1], i907[2] )
  i906.extends = new pc.Vec3( i907[3], i907[4], i907[5] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i910.genericBindings = i912
  var i915 = i911[1]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i910.pptrCurveMapping = i914
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i917 = data
  i916.name = i917[0]
  i916.ascent = i917[1]
  i916.originalLineHeight = i917[2]
  i916.fontSize = i917[3]
  var i919 = i917[4]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i919[i + 0]) );
  }
  i916.characterInfo = i918
  request.r(i917[5], i917[6], 0, i916, 'texture')
  i916.originalFontSize = i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i923 = data
  i922.index = i923[0]
  i922.advance = i923[1]
  i922.bearing = i923[2]
  i922.glyphWidth = i923[3]
  i922.glyphHeight = i923[4]
  i922.minX = i923[5]
  i922.maxX = i923[6]
  i922.minY = i923[7]
  i922.maxY = i923[8]
  i922.uvBottomLeftX = i923[9]
  i922.uvBottomLeftY = i923[10]
  i922.uvBottomRightX = i923[11]
  i922.uvBottomRightY = i923[12]
  i922.uvTopLeftX = i923[13]
  i922.uvTopLeftY = i923[14]
  i922.uvTopRightX = i923[15]
  i922.uvTopRightY = i923[16]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i925 = data
  i924.name = i925[0]
  var i927 = i925[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i927[i + 0]) );
  }
  i924.layers = i926
  var i929 = i925[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i929[i + 0]) );
  }
  i924.parameters = i928
  i924.animationClips = i925[3]
  i924.avatarUnsupported = i925[4]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i933 = data
  i932.name = i933[0]
  i932.defaultWeight = i933[1]
  i932.blendingMode = i933[2]
  i932.avatarMask = i933[3]
  i932.syncedLayerIndex = i933[4]
  i932.syncedLayerAffectsTiming = !!i933[5]
  i932.syncedLayers = i933[6]
  i932.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i933[7], i932.stateMachine)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.path = i935[2]
  var i937 = i935[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i937[i + 0]) );
  }
  i934.states = i936
  var i939 = i935[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i939[i + 0]) );
  }
  i934.machines = i938
  var i941 = i935[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i941[i + 0]) );
  }
  i934.entryStateTransitions = i940
  var i943 = i935[6]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i943[i + 0]) );
  }
  i934.exitStateTransitions = i942
  var i945 = i935[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i945[i + 0]) );
  }
  i934.anyStateTransitions = i944
  i934.defaultStateId = i935[8]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i949 = data
  i948.id = i949[0]
  i948.name = i949[1]
  i948.cycleOffset = i949[2]
  i948.cycleOffsetParameter = i949[3]
  i948.cycleOffsetParameterActive = !!i949[4]
  i948.mirror = !!i949[5]
  i948.mirrorParameter = i949[6]
  i948.mirrorParameterActive = !!i949[7]
  i948.motionId = i949[8]
  i948.nameHash = i949[9]
  i948.fullPathHash = i949[10]
  i948.speed = i949[11]
  i948.speedParameter = i949[12]
  i948.speedParameterActive = !!i949[13]
  i948.tag = i949[14]
  i948.tagHash = i949[15]
  i948.writeDefaultValues = !!i949[16]
  var i951 = i949[17]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.behaviours = i950
  var i953 = i949[18]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i953[i + 0]) );
  }
  i948.transitions = i952
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i959 = data
  i958.fullPath = i959[0]
  i958.canTransitionToSelf = !!i959[1]
  i958.duration = i959[2]
  i958.exitTime = i959[3]
  i958.hasExitTime = !!i959[4]
  i958.hasFixedDuration = !!i959[5]
  i958.interruptionSource = i959[6]
  i958.offset = i959[7]
  i958.orderedInterruption = !!i959[8]
  i958.destinationStateId = i959[9]
  i958.isExit = !!i959[10]
  i958.mute = !!i959[11]
  i958.solo = !!i959[12]
  var i961 = i959[13]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i961[i + 0]) );
  }
  i958.conditions = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i967 = data
  i966.destinationStateId = i967[0]
  i966.isExit = !!i967[1]
  i966.mute = !!i967[2]
  i966.solo = !!i967[3]
  var i969 = i967[4]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i969[i + 0]) );
  }
  i966.conditions = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i973 = data
  i972.defaultBool = !!i973[0]
  i972.defaultFloat = i973[1]
  i972.defaultInt = i973[2]
  i972.name = i973[3]
  i972.nameHash = i973[4]
  i972.type = i973[5]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i977 = data
  i976.mode = i977[0]
  i976.parameter = i977[1]
  i976.threshold = i977[2]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i979 = data
  i978.name = i979[0]
  i978.bytes64 = i979[1]
  i978.data = i979[2]
  return i978
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i981 = data
  i980.normalStyle = i981[0]
  i980.normalSpacingOffset = i981[1]
  i980.boldStyle = i981[2]
  i980.boldSpacing = i981[3]
  i980.italicStyle = i981[4]
  i980.tabSize = i981[5]
  request.r(i981[6], i981[7], 0, i980, 'atlas')
  i980.m_SourceFontFileGUID = i981[8]
  i980.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i981[9], i980.m_CreationSettings)
  request.r(i981[10], i981[11], 0, i980, 'm_SourceFontFile')
  i980.m_SourceFontFilePath = i981[12]
  i980.m_AtlasPopulationMode = i981[13]
  i980.InternalDynamicOS = !!i981[14]
  var i983 = i981[15]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('UnityEngine.TextCore.Glyph', i983[i + 0]));
  }
  i980.m_GlyphTable = i982
  var i985 = i981[16]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.TMP_Character', i985[i + 0]));
  }
  i980.m_CharacterTable = i984
  var i987 = i981[17]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i980.m_AtlasTextures = i986
  i980.m_AtlasTextureIndex = i981[18]
  i980.m_IsMultiAtlasTexturesEnabled = !!i981[19]
  i980.m_GetFontFeatures = !!i981[20]
  i980.m_ClearDynamicDataOnBuild = !!i981[21]
  i980.m_AtlasWidth = i981[22]
  i980.m_AtlasHeight = i981[23]
  i980.m_AtlasPadding = i981[24]
  i980.m_AtlasRenderMode = i981[25]
  var i989 = i981[26]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('UnityEngine.TextCore.GlyphRect', i989[i + 0]));
  }
  i980.m_UsedGlyphRects = i988
  var i991 = i981[27]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('UnityEngine.TextCore.GlyphRect', i991[i + 0]));
  }
  i980.m_FreeGlyphRects = i990
  i980.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i981[28], i980.m_FontFeatureTable)
  i980.m_ShouldReimportFontFeatures = !!i981[29]
  var i993 = i981[30]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i980.m_FallbackFontAssetTable = i992
  var i995 = i981[31]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('TMPro.TMP_FontWeightPair', i995[i + 0]) );
  }
  i980.m_FontWeightTable = i994
  var i997 = i981[32]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('TMPro.TMP_FontWeightPair', i997[i + 0]) );
  }
  i980.fontWeights = i996
  i980.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i981[33], i980.m_fontInfo)
  var i999 = i981[34]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('TMPro.TMP_Glyph', i999[i + 0]));
  }
  i980.m_glyphInfoList = i998
  i980.m_KerningTable = request.d('TMPro.KerningTable', i981[35], i980.m_KerningTable)
  var i1001 = i981[36]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i980.fallbackFontAssets = i1000
  i980.m_Version = i981[37]
  i980.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i981[38], i980.m_FaceInfo)
  request.r(i981[39], i981[40], 0, i980, 'm_Material')
  return i980
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1003 = data
  i1002.sourceFontFileName = i1003[0]
  i1002.sourceFontFileGUID = i1003[1]
  i1002.faceIndex = i1003[2]
  i1002.pointSizeSamplingMode = i1003[3]
  i1002.pointSize = i1003[4]
  i1002.padding = i1003[5]
  i1002.paddingMode = i1003[6]
  i1002.packingMode = i1003[7]
  i1002.atlasWidth = i1003[8]
  i1002.atlasHeight = i1003[9]
  i1002.characterSetSelectionMode = i1003[10]
  i1002.characterSequence = i1003[11]
  i1002.referencedFontAssetGUID = i1003[12]
  i1002.referencedTextAssetGUID = i1003[13]
  i1002.fontStyle = i1003[14]
  i1002.fontStyleModifier = i1003[15]
  i1002.renderMode = i1003[16]
  i1002.includeFontFeatures = !!i1003[17]
  return i1002
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1007 = data
  i1006.m_Index = i1007[0]
  i1006.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1007[1], i1006.m_Metrics)
  i1006.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1007[2], i1006.m_GlyphRect)
  i1006.m_Scale = i1007[3]
  i1006.m_AtlasIndex = i1007[4]
  i1006.m_ClassDefinitionType = i1007[5]
  return i1006
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1009 = data
  i1008.m_Width = i1009[0]
  i1008.m_Height = i1009[1]
  i1008.m_HorizontalBearingX = i1009[2]
  i1008.m_HorizontalBearingY = i1009[3]
  i1008.m_HorizontalAdvance = i1009[4]
  return i1008
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1011 = data
  i1010.m_X = i1011[0]
  i1010.m_Y = i1011[1]
  i1010.m_Width = i1011[2]
  i1010.m_Height = i1011[3]
  return i1010
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Character' )
  var i1015 = data
  i1014.m_ElementType = i1015[0]
  i1014.m_Unicode = i1015[1]
  i1014.m_GlyphIndex = i1015[2]
  i1014.m_Scale = i1015[3]
  return i1014
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.MultipleSubstitutionRecord', i1023[i + 0]));
  }
  i1020.m_MultipleSubstitutionRecords = i1022
  var i1025 = i1021[1]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.LigatureSubstitutionRecord', i1025[i + 0]));
  }
  i1020.m_LigatureSubstitutionRecords = i1024
  var i1027 = i1021[2]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1027[i + 0]));
  }
  i1020.m_GlyphPairAdjustmentRecords = i1026
  var i1029 = i1021[3]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1029[i + 0]));
  }
  i1020.m_MarkToBaseAdjustmentRecords = i1028
  var i1031 = i1021[4]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1031[i + 0]));
  }
  i1020.m_MarkToMarkAdjustmentRecords = i1030
  return i1020
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1035 = data
  i1034.m_TargetGlyphID = i1035[0]
  i1034.m_SubstituteGlyphIDs = i1035[1]
  return i1034
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1039 = data
  i1038.m_ComponentGlyphIDs = i1039[0]
  i1038.m_LigatureGlyphID = i1039[1]
  return i1038
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1043 = data
  i1042.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1043[0], i1042.m_FirstAdjustmentRecord)
  i1042.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1043[1], i1042.m_SecondAdjustmentRecord)
  i1042.m_FeatureLookupFlags = i1043[2]
  return i1042
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1047 = data
  i1046.m_BaseGlyphID = i1047[0]
  i1046.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1047[1], i1046.m_BaseGlyphAnchorPoint)
  i1046.m_MarkGlyphID = i1047[2]
  i1046.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1047[3], i1046.m_MarkPositionAdjustment)
  return i1046
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1051 = data
  i1050.m_BaseMarkGlyphID = i1051[0]
  i1050.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1051[1], i1050.m_BaseMarkGlyphAnchorPoint)
  i1050.m_CombiningMarkGlyphID = i1051[2]
  i1050.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1051[3], i1050.m_CombiningMarkPositionAdjustment)
  return i1050
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'regularTypeface')
  request.r(i1057[2], i1057[3], 0, i1056, 'italicTypeface')
  return i1056
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1059 = data
  i1058.Name = i1059[0]
  i1058.PointSize = i1059[1]
  i1058.Scale = i1059[2]
  i1058.CharacterCount = i1059[3]
  i1058.LineHeight = i1059[4]
  i1058.Baseline = i1059[5]
  i1058.Ascender = i1059[6]
  i1058.CapHeight = i1059[7]
  i1058.Descender = i1059[8]
  i1058.CenterLine = i1059[9]
  i1058.SuperscriptOffset = i1059[10]
  i1058.SubscriptOffset = i1059[11]
  i1058.SubSize = i1059[12]
  i1058.Underline = i1059[13]
  i1058.UnderlineThickness = i1059[14]
  i1058.strikethrough = i1059[15]
  i1058.strikethroughThickness = i1059[16]
  i1058.TabWidth = i1059[17]
  i1058.Padding = i1059[18]
  i1058.AtlasWidth = i1059[19]
  i1058.AtlasHeight = i1059[20]
  return i1058
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.x = i1063[1]
  i1062.y = i1063[2]
  i1062.width = i1063[3]
  i1062.height = i1063[4]
  i1062.xOffset = i1063[5]
  i1062.yOffset = i1063[6]
  i1062.xAdvance = i1063[7]
  i1062.scale = i1063[8]
  return i1062
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.KerningTable' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.add(request.d('TMPro.KerningPair', i1067[i + 0]));
  }
  i1064.kerningPairs = i1066
  return i1064
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.KerningPair' )
  var i1071 = data
  i1070.xOffset = i1071[0]
  i1070.m_FirstGlyph = i1071[1]
  i1070.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1071[2], i1070.m_FirstGlyphAdjustments)
  i1070.m_SecondGlyph = i1071[3]
  i1070.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1071[4], i1070.m_SecondGlyphAdjustments)
  i1070.m_IgnoreSpacingAdjustments = !!i1071[5]
  return i1070
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1073 = data
  i1072.m_FaceIndex = i1073[0]
  i1072.m_FamilyName = i1073[1]
  i1072.m_StyleName = i1073[2]
  i1072.m_PointSize = i1073[3]
  i1072.m_Scale = i1073[4]
  i1072.m_UnitsPerEM = i1073[5]
  i1072.m_LineHeight = i1073[6]
  i1072.m_AscentLine = i1073[7]
  i1072.m_CapLine = i1073[8]
  i1072.m_MeanLine = i1073[9]
  i1072.m_Baseline = i1073[10]
  i1072.m_DescentLine = i1073[11]
  i1072.m_SuperscriptOffset = i1073[12]
  i1072.m_SuperscriptSize = i1073[13]
  i1072.m_SubscriptOffset = i1073[14]
  i1072.m_SubscriptSize = i1073[15]
  i1072.m_UnderlineOffset = i1073[16]
  i1072.m_UnderlineThickness = i1073[17]
  i1072.m_StrikethroughOffset = i1073[18]
  i1072.m_StrikethroughThickness = i1073[19]
  i1072.m_TabWidth = i1073[20]
  return i1072
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1075 = data
  i1074.useSafeMode = !!i1075[0]
  i1074.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1075[1], i1074.safeModeOptions)
  i1074.timeScale = i1075[2]
  i1074.unscaledTimeScale = i1075[3]
  i1074.useSmoothDeltaTime = !!i1075[4]
  i1074.maxSmoothUnscaledTime = i1075[5]
  i1074.rewindCallbackMode = i1075[6]
  i1074.showUnityEditorReport = !!i1075[7]
  i1074.logBehaviour = i1075[8]
  i1074.drawGizmos = !!i1075[9]
  i1074.defaultRecyclable = !!i1075[10]
  i1074.defaultAutoPlay = i1075[11]
  i1074.defaultUpdateType = i1075[12]
  i1074.defaultTimeScaleIndependent = !!i1075[13]
  i1074.defaultEaseType = i1075[14]
  i1074.defaultEaseOvershootOrAmplitude = i1075[15]
  i1074.defaultEasePeriod = i1075[16]
  i1074.defaultAutoKill = !!i1075[17]
  i1074.defaultLoopType = i1075[18]
  i1074.debugMode = !!i1075[19]
  i1074.debugStoreTargetId = !!i1075[20]
  i1074.showPreviewPanel = !!i1075[21]
  i1074.storeSettingsLocation = i1075[22]
  i1074.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1075[23], i1074.modules)
  i1074.createASMDEF = !!i1075[24]
  i1074.showPlayingTweens = !!i1075[25]
  i1074.showPausedTweens = !!i1075[26]
  return i1074
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1077 = data
  i1076.logBehaviour = i1077[0]
  i1076.nestedTweenFailureBehaviour = i1077[1]
  return i1076
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1078 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1079 = data
  i1078.showPanel = !!i1079[0]
  i1078.audioEnabled = !!i1079[1]
  i1078.physicsEnabled = !!i1079[2]
  i1078.physics2DEnabled = !!i1079[3]
  i1078.spriteEnabled = !!i1079[4]
  i1078.uiEnabled = !!i1079[5]
  i1078.uiToolkitEnabled = !!i1079[6]
  i1078.textMeshProEnabled = !!i1079[7]
  i1078.tk2DEnabled = !!i1079[8]
  i1078.deAudioEnabled = !!i1079[9]
  i1078.deUnityExtendedEnabled = !!i1079[10]
  i1078.epoOutlineEnabled = !!i1079[11]
  return i1078
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_Settings' )
  var i1081 = data
  i1080.assetVersion = i1081[0]
  i1080.m_TextWrappingMode = i1081[1]
  i1080.m_enableKerning = !!i1081[2]
  var i1083 = i1081[3]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(i1083[i + 0]);
  }
  i1080.m_ActiveFontFeatures = i1082
  i1080.m_enableExtraPadding = !!i1081[4]
  i1080.m_enableTintAllSprites = !!i1081[5]
  i1080.m_enableParseEscapeCharacters = !!i1081[6]
  i1080.m_EnableRaycastTarget = !!i1081[7]
  i1080.m_GetFontFeaturesAtRuntime = !!i1081[8]
  i1080.m_missingGlyphCharacter = i1081[9]
  i1080.m_ClearDynamicDataOnBuild = !!i1081[10]
  i1080.m_warningsDisabled = !!i1081[11]
  request.r(i1081[12], i1081[13], 0, i1080, 'm_defaultFontAsset')
  i1080.m_defaultFontAssetPath = i1081[14]
  i1080.m_defaultFontSize = i1081[15]
  i1080.m_defaultAutoSizeMinRatio = i1081[16]
  i1080.m_defaultAutoSizeMaxRatio = i1081[17]
  i1080.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1081[18], i1081[19] )
  i1080.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1081[20], i1081[21] )
  i1080.m_autoSizeTextContainer = !!i1081[22]
  i1080.m_IsTextObjectScaleStatic = !!i1081[23]
  var i1085 = i1081[24]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 1, i1084, '')
  }
  i1080.m_fallbackFontAssets = i1084
  i1080.m_matchMaterialPreset = !!i1081[25]
  i1080.m_HideSubTextObjects = !!i1081[26]
  request.r(i1081[27], i1081[28], 0, i1080, 'm_defaultSpriteAsset')
  i1080.m_defaultSpriteAssetPath = i1081[29]
  i1080.m_enableEmojiSupport = !!i1081[30]
  i1080.m_MissingCharacterSpriteUnicode = i1081[31]
  var i1087 = i1081[32]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 1, i1086, '')
  }
  i1080.m_EmojiFallbackTextAssets = i1086
  i1080.m_defaultColorGradientPresetsPath = i1081[33]
  request.r(i1081[34], i1081[35], 0, i1080, 'm_defaultStyleSheet')
  i1080.m_StyleSheetsResourcePath = i1081[36]
  request.r(i1081[37], i1081[38], 0, i1080, 'm_leadingCharacters')
  request.r(i1081[39], i1081[40], 0, i1080, 'm_followingCharacters')
  i1080.m_UseModernHangulLineBreakingRules = !!i1081[41]
  return i1080
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1091 = data
  i1090.m_GlyphIndex = i1091[0]
  i1090.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1091[1], i1090.m_GlyphValueRecord)
  return i1090
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1093 = data
  i1092.m_XPlacement = i1093[0]
  i1092.m_YPlacement = i1093[1]
  i1092.m_XAdvance = i1093[2]
  i1092.m_YAdvance = i1093[3]
  return i1092
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'spriteSheet')
  var i1097 = i1095[2]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.TMP_Sprite', i1097[i + 0]));
  }
  i1094.spriteInfoList = i1096
  var i1099 = i1095[3]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 1, i1098, '')
  }
  i1094.fallbackSpriteAssets = i1098
  var i1101 = i1095[4]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('TMPro.TMP_SpriteCharacter', i1101[i + 0]));
  }
  i1094.m_SpriteCharacterTable = i1100
  var i1103 = i1095[5]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_SpriteGlyph', i1103[i + 0]));
  }
  i1094.m_GlyphTable = i1102
  i1094.m_Version = i1095[6]
  i1094.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1095[7], i1094.m_FaceInfo)
  request.r(i1095[8], i1095[9], 0, i1094, 'm_Material')
  return i1094
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.hashCode = i1107[1]
  i1106.unicode = i1107[2]
  i1106.pivot = new pc.Vec2( i1107[3], i1107[4] )
  request.r(i1107[5], i1107[6], 0, i1106, 'sprite')
  i1106.id = i1107[7]
  i1106.x = i1107[8]
  i1106.y = i1107[9]
  i1106.width = i1107[10]
  i1106.height = i1107[11]
  i1106.xOffset = i1107[12]
  i1106.yOffset = i1107[13]
  i1106.xAdvance = i1107[14]
  i1106.scale = i1107[15]
  return i1106
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1113 = data
  i1112.m_Name = i1113[0]
  i1112.m_ElementType = i1113[1]
  i1112.m_Unicode = i1113[2]
  i1112.m_GlyphIndex = i1113[3]
  i1112.m_Scale = i1113[4]
  return i1112
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'sprite')
  i1116.m_Index = i1117[2]
  i1116.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1117[3], i1116.m_Metrics)
  i1116.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1117[4], i1116.m_GlyphRect)
  i1116.m_Scale = i1117[5]
  i1116.m_AtlasIndex = i1117[6]
  i1116.m_ClassDefinitionType = i1117[7]
  return i1116
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Style', i1121[i + 0]));
  }
  i1118.m_StyleList = i1120
  return i1118
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_Style' )
  var i1125 = data
  i1124.m_Name = i1125[0]
  i1124.m_HashCode = i1125[1]
  i1124.m_OpeningDefinition = i1125[2]
  i1124.m_ClosingDefinition = i1125[3]
  i1124.m_OpeningTagArray = i1125[4]
  i1124.m_ClosingTagArray = i1125[5]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1129[i + 0]) );
  }
  i1126.files = i1128
  i1126.componentToPrefabIds = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1133 = data
  i1132.path = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'unityObject')
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1137[i + 0]) );
  }
  i1134.scriptsExecutionOrder = i1136
  var i1139 = i1135[1]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1139[i + 0]) );
  }
  i1134.sortingLayers = i1138
  var i1141 = i1135[2]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1141[i + 0]) );
  }
  i1134.cullingLayers = i1140
  i1134.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1135[3], i1134.timeSettings)
  i1134.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1135[4], i1134.physicsSettings)
  i1134.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1135[5], i1134.physics2DSettings)
  i1134.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1135[6], i1134.qualitySettings)
  i1134.enableRealtimeShadows = !!i1135[7]
  i1134.enableAutoInstancing = !!i1135[8]
  i1134.enableStaticBatching = !!i1135[9]
  i1134.enableDynamicBatching = !!i1135[10]
  i1134.lightmapEncodingQuality = i1135[11]
  i1134.desiredColorSpace = i1135[12]
  var i1143 = i1135[13]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1134.allTags = i1142
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.value = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  i1150.value = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1155 = data
  i1154.id = i1155[0]
  i1154.name = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1157 = data
  i1156.fixedDeltaTime = i1157[0]
  i1156.maximumDeltaTime = i1157[1]
  i1156.timeScale = i1157[2]
  i1156.maximumParticleTimestep = i1157[3]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1159 = data
  i1158.gravity = new pc.Vec3( i1159[0], i1159[1], i1159[2] )
  i1158.defaultSolverIterations = i1159[3]
  i1158.bounceThreshold = i1159[4]
  i1158.autoSyncTransforms = !!i1159[5]
  i1158.autoSimulation = !!i1159[6]
  var i1161 = i1159[7]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1161[i + 0]) );
  }
  i1158.collisionMatrix = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1165 = data
  i1164.enabled = !!i1165[0]
  i1164.layerId = i1165[1]
  i1164.otherLayerId = i1165[2]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'material')
  i1166.gravity = new pc.Vec2( i1167[2], i1167[3] )
  i1166.positionIterations = i1167[4]
  i1166.velocityIterations = i1167[5]
  i1166.velocityThreshold = i1167[6]
  i1166.maxLinearCorrection = i1167[7]
  i1166.maxAngularCorrection = i1167[8]
  i1166.maxTranslationSpeed = i1167[9]
  i1166.maxRotationSpeed = i1167[10]
  i1166.baumgarteScale = i1167[11]
  i1166.baumgarteTOIScale = i1167[12]
  i1166.timeToSleep = i1167[13]
  i1166.linearSleepTolerance = i1167[14]
  i1166.angularSleepTolerance = i1167[15]
  i1166.defaultContactOffset = i1167[16]
  i1166.autoSimulation = !!i1167[17]
  i1166.queriesHitTriggers = !!i1167[18]
  i1166.queriesStartInColliders = !!i1167[19]
  i1166.callbacksOnDisable = !!i1167[20]
  i1166.reuseCollisionCallbacks = !!i1167[21]
  i1166.autoSyncTransforms = !!i1167[22]
  var i1169 = i1167[23]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1169[i + 0]) );
  }
  i1166.collisionMatrix = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1173 = data
  i1172.enabled = !!i1173[0]
  i1172.layerId = i1173[1]
  i1172.otherLayerId = i1173[2]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1177[i + 0]) );
  }
  i1174.qualityLevels = i1176
  var i1179 = i1175[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1174.names = i1178
  i1174.shadows = i1175[2]
  i1174.anisotropicFiltering = i1175[3]
  i1174.antiAliasing = i1175[4]
  i1174.lodBias = i1175[5]
  i1174.shadowCascades = i1175[6]
  i1174.shadowDistance = i1175[7]
  i1174.shadowmaskMode = i1175[8]
  i1174.shadowProjection = i1175[9]
  i1174.shadowResolution = i1175[10]
  i1174.softParticles = !!i1175[11]
  i1174.softVegetation = !!i1175[12]
  i1174.activeColorSpace = i1175[13]
  i1174.desiredColorSpace = i1175[14]
  i1174.masterTextureLimit = i1175[15]
  i1174.maxQueuedFrames = i1175[16]
  i1174.particleRaycastBudget = i1175[17]
  i1174.pixelLightCount = i1175[18]
  i1174.realtimeReflectionProbes = !!i1175[19]
  i1174.shadowCascade2Split = i1175[20]
  i1174.shadowCascade4Split = new pc.Vec3( i1175[21], i1175[22], i1175[23] )
  i1174.streamingMipmapsActive = !!i1175[24]
  i1174.vSyncCount = i1175[25]
  i1174.asyncUploadBufferSize = i1175[26]
  i1174.asyncUploadTimeSlice = i1175[27]
  i1174.billboardsFaceCameraPosition = !!i1175[28]
  i1174.shadowNearPlaneOffset = i1175[29]
  i1174.streamingMipmapsMemoryBudget = i1175[30]
  i1174.maximumLODLevel = i1175[31]
  i1174.streamingMipmapsAddAllCameras = !!i1175[32]
  i1174.streamingMipmapsMaxLevelReduction = i1175[33]
  i1174.streamingMipmapsRenderersPerFrame = i1175[34]
  i1174.resolutionScalingFixedDPIFactor = i1175[35]
  i1174.streamingMipmapsMaxFileIORequests = i1175[36]
  i1174.currentQualityLevel = i1175[37]
  return i1174
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1183 = data
  i1182.m_XCoordinate = i1183[0]
  i1182.m_YCoordinate = i1183[1]
  return i1182
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1185 = data
  i1184.m_XPositionAdjustment = i1185[0]
  i1184.m_YPositionAdjustment = i1185[1]
  return i1184
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1187 = data
  i1186.xPlacement = i1187[0]
  i1186.yPlacement = i1187[1]
  i1186.xAdvance = i1187[2]
  i1186.yAdvance = i1187[3]
  return i1186
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[11],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[11],"90":[91],"92":[93],"94":[93],"10":[9],"48":[95],"36":[95],"50":[95],"96":[95],"97":[95],"98":[6],"99":[11],"100":[101],"102":[32],"103":[10],"104":[9],"105":[91,9],"20":[9,16],"106":[9],"107":[16,9],"108":[91],"109":[16,9],"110":[9],"111":[112],"113":[112],"114":[112],"115":[9],"116":[9],"14":[10],"17":[16,9],"117":[9],"13":[10],"118":[9],"119":[9],"120":[9],"121":[9],"122":[9],"123":[9],"124":[9],"125":[9],"126":[9],"127":[16,9],"128":[9],"129":[9],"130":[9],"131":[9],"132":[16,9],"133":[9],"134":[32],"135":[32],"33":[32],"136":[32],"137":[11],"138":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Item","ItemDraggable","Ply_MoveToTarget","Sink","InWaterItem","Ply_TimerEvent","Ply_ToggleEvent","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","CuttingBoard","Knife","Ply_BobEffect","Bread","ItemClickable","CuttingItem","ItemKnifeSpriteMaskCutter","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemSpriteMaskPainter","ItemStirring","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "05/20/2026 07:25:09";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_LV61_V1";

Deserializers.lunaAppID = "27404";

Deserializers.projectId = "8cfa86f1caa935a41ac1489c608212f7";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1743";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4591";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "299649f3-ed2d-4256-9731-602b3acecada";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

