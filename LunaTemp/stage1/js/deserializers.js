var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSpring' )
  var i665 = data
  i664.spring = i665[0]
  i664.damper = i665[1]
  i664.targetPosition = i665[2]
  return i664
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor' )
  var i667 = data
  i666.m_TargetVelocity = i667[0]
  i666.m_Force = i667[1]
  i666.m_FreeSpin = i667[2]
  return i666
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointLimits' )
  var i669 = data
  i668.m_Min = i669[0]
  i668.m_Max = i669[1]
  i668.m_Bounciness = i669[2]
  i668.m_BounceMinVelocity = i669[3]
  i668.m_ContactDistance = i669[4]
  i668.minBounce = i669[5]
  i668.maxBounce = i669[6]
  return i668
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointDrive' )
  var i671 = data
  i670.m_PositionSpring = i671[0]
  i670.m_PositionDamper = i671[1]
  i670.m_MaximumForce = i671[2]
  i670.m_UseAcceleration = i671[3]
  return i670
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i673 = data
  i672.m_Spring = i673[0]
  i672.m_Damper = i673[1]
  return i672
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i675 = data
  i674.m_Limit = i675[0]
  i674.m_Bounciness = i675[1]
  i674.m_ContactDistance = i675[2]
  return i674
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i677 = data
  i676.m_ExtremumSlip = i677[0]
  i676.m_ExtremumValue = i677[1]
  i676.m_AsymptoteSlip = i677[2]
  i676.m_AsymptoteValue = i677[3]
  i676.m_Stiffness = i677[4]
  return i676
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i679 = data
  i678.m_LowerAngle = i679[0]
  i678.m_UpperAngle = i679[1]
  return i678
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i681 = data
  i680.m_MotorSpeed = i681[0]
  i680.m_MaximumMotorTorque = i681[1]
  return i680
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i683 = data
  i682.m_DampingRatio = i683[0]
  i682.m_Frequency = i683[1]
  i682.m_Angle = i683[2]
  return i682
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i685 = data
  i684.m_LowerTranslation = i685[0]
  i684.m_UpperTranslation = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i686 = root || new pc.UnityMaterial()
  var i687 = data
  i686.name = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'shader')
  i686.renderQueue = i687[3]
  i686.enableInstancing = !!i687[4]
  var i689 = i687[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i689[i + 0]) );
  }
  i686.floatParameters = i688
  var i691 = i687[6]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i691[i + 0]) );
  }
  i686.colorParameters = i690
  var i693 = i687[7]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i693[i + 0]) );
  }
  i686.vectorParameters = i692
  var i695 = i687[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i695[i + 0]) );
  }
  i686.textureParameters = i694
  var i697 = i687[9]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i697[i + 0]) );
  }
  i686.materialFlags = i696
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = new pc.Color(i705[1], i705[2], i705[3], i705[4])
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Vec4( i709[1], i709[2], i709[3], i709[4] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i713 = data
  i712.name = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'value')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i717 = data
  i716.name = i717[0]
  i716.enabled = !!i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i719 = data
  i718.name = i719[0]
  i718.width = i719[1]
  i718.height = i719[2]
  i718.mipmapCount = i719[3]
  i718.anisoLevel = i719[4]
  i718.filterMode = i719[5]
  i718.hdr = !!i719[6]
  i718.format = i719[7]
  i718.wrapMode = i719[8]
  i718.alphaIsTransparency = !!i719[9]
  i718.alphaSource = i719[10]
  i718.graphicsFormat = i719[11]
  i718.sRGBTexture = !!i719[12]
  i718.desiredColorSpace = i719[13]
  i718.wrapU = i719[14]
  i718.wrapV = i719[15]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i721 = data
  i720.position = new pc.Vec3( i721[0], i721[1], i721[2] )
  i720.scale = new pc.Vec3( i721[3], i721[4], i721[5] )
  i720.rotation = new pc.Quat(i721[6], i721[7], i721[8], i721[9])
  return i720
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i722 = root || request.c( 'HeartEffect' )
  var i723 = data
  i722.defaultLifeTime = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'tf')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i725 = data
  i724.color = new pc.Color(i725[0], i725[1], i725[2], i725[3])
  request.r(i725[4], i725[5], 0, i724, 'sprite')
  i724.flipX = !!i725[6]
  i724.flipY = !!i725[7]
  i724.drawMode = i725[8]
  i724.size = new pc.Vec2( i725[9], i725[10] )
  i724.tileMode = i725[11]
  i724.adaptiveModeThreshold = i725[12]
  i724.maskInteraction = i725[13]
  i724.spriteSortPoint = i725[14]
  i724.enabled = !!i725[15]
  request.r(i725[16], i725[17], 0, i724, 'sharedMaterial')
  var i727 = i725[18]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[19]
  i724.shadowCastingMode = i725[20]
  i724.sortingLayerID = i725[21]
  i724.sortingOrder = i725[22]
  i724.lightmapIndex = i725[23]
  i724.lightmapSceneIndex = i725[24]
  i724.lightmapScaleOffset = new pc.Vec4( i725[25], i725[26], i725[27], i725[28] )
  i724.lightProbeUsage = i725[29]
  i724.reflectionProbeUsage = i725[30]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i731 = data
  i730.name = i731[0]
  i730.tagId = i731[1]
  i730.enabled = !!i731[2]
  i730.isStatic = !!i731[3]
  i730.layer = i731[4]
  return i730
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i732 = root || request.c( 'HeartBreakEffect' )
  var i733 = data
  i732.defaultLifeTime = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'tf')
  return i732
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i734 = root || request.c( 'BlinkEffect' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'tf')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'mesh')
  i736.meshCount = i737[2]
  i736.activeVertexStreamsCount = i737[3]
  i736.alignment = i737[4]
  i736.renderMode = i737[5]
  i736.sortMode = i737[6]
  i736.lengthScale = i737[7]
  i736.velocityScale = i737[8]
  i736.cameraVelocityScale = i737[9]
  i736.normalDirection = i737[10]
  i736.sortingFudge = i737[11]
  i736.minParticleSize = i737[12]
  i736.maxParticleSize = i737[13]
  i736.pivot = new pc.Vec3( i737[14], i737[15], i737[16] )
  request.r(i737[17], i737[18], 0, i736, 'trailMaterial')
  i736.applyActiveColorSpace = !!i737[19]
  i736.enabled = !!i737[20]
  request.r(i737[21], i737[22], 0, i736, 'sharedMaterial')
  var i739 = i737[23]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[24]
  i736.shadowCastingMode = i737[25]
  i736.sortingLayerID = i737[26]
  i736.sortingOrder = i737[27]
  i736.lightmapIndex = i737[28]
  i736.lightmapSceneIndex = i737[29]
  i736.lightmapScaleOffset = new pc.Vec4( i737[30], i737[31], i737[32], i737[33] )
  i736.lightProbeUsage = i737[34]
  i736.reflectionProbeUsage = i737[35]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i741 = data
  i740.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i741[0], i740.main)
  i740.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i741[1], i740.colorBySpeed)
  i740.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i741[2], i740.colorOverLifetime)
  i740.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i741[3], i740.emission)
  i740.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i741[4], i740.rotationBySpeed)
  i740.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i741[5], i740.rotationOverLifetime)
  i740.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i741[6], i740.shape)
  i740.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i741[7], i740.sizeBySpeed)
  i740.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i741[8], i740.sizeOverLifetime)
  i740.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i741[9], i740.textureSheetAnimation)
  i740.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i741[10], i740.velocityOverLifetime)
  i740.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i741[11], i740.noise)
  i740.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i741[12], i740.inheritVelocity)
  i740.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i741[13], i740.forceOverLifetime)
  i740.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i741[14], i740.limitVelocityOverLifetime)
  i740.useAutoRandomSeed = !!i741[15]
  i740.randomSeed = i741[16]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemMain()
  var i743 = data
  i742.duration = i743[0]
  i742.loop = !!i743[1]
  i742.prewarm = !!i743[2]
  i742.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.startDelay)
  i742.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[4], i742.startLifetime)
  i742.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[5], i742.startSpeed)
  i742.startSize3D = !!i743[6]
  i742.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[7], i742.startSizeX)
  i742.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[8], i742.startSizeY)
  i742.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[9], i742.startSizeZ)
  i742.startRotation3D = !!i743[10]
  i742.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[11], i742.startRotationX)
  i742.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[12], i742.startRotationY)
  i742.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[13], i742.startRotationZ)
  i742.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i743[14], i742.startColor)
  i742.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[15], i742.gravityModifier)
  i742.simulationSpace = i743[16]
  request.r(i743[17], i743[18], 0, i742, 'customSimulationSpace')
  i742.simulationSpeed = i743[19]
  i742.useUnscaledTime = !!i743[20]
  i742.scalingMode = i743[21]
  i742.playOnAwake = !!i743[22]
  i742.maxParticles = i743[23]
  i742.emitterVelocityMode = i743[24]
  i742.stopAction = i743[25]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i744 = root || new pc.MinMaxCurve()
  var i745 = data
  i744.mode = i745[0]
  i744.curveMin = new pc.AnimationCurve( { keys_flow: i745[1] } )
  i744.curveMax = new pc.AnimationCurve( { keys_flow: i745[2] } )
  i744.curveMultiplier = i745[3]
  i744.constantMin = i745[4]
  i744.constantMax = i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i746 = root || new pc.MinMaxGradient()
  var i747 = data
  i746.mode = i747[0]
  i746.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i747[1], i746.gradientMin)
  i746.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i747[2], i746.gradientMax)
  i746.colorMin = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.colorMax = new pc.Color(i747[7], i747[8], i747[9], i747[10])
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i749 = data
  i748.mode = i749[0]
  var i751 = i749[1]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i751[i + 0]) );
  }
  i748.colorKeys = i750
  var i753 = i749[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i753[i + 0]) );
  }
  i748.alphaKeys = i752
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemColorBySpeed()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i755[1], i754.color)
  i754.range = new pc.Vec2( i755[2], i755[3] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i759 = data
  i758.color = new pc.Color(i759[0], i759[1], i759[2], i759[3])
  i758.time = i759[4]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i763 = data
  i762.alpha = i763[0]
  i762.time = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemColorOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i765[1], i764.color)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemEmitter()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.rateOverTime)
  i766.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.rateOverDistance)
  var i769 = i767[3]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i769[i + 0]) );
  }
  i766.bursts = i768
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemBurst()
  var i773 = data
  i772.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[0], i772.count)
  i772.cycleCount = i773[1]
  i772.minCount = i773[2]
  i772.maxCount = i773[3]
  i772.repeatInterval = i773[4]
  i772.time = i773[5]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemRotationBySpeed()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  i774.range = new pc.Vec2( i775[5], i775[6] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemRotationOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.separateAxes = !!i777[4]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemShape()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.shapeType = i779[1]
  i778.randomDirectionAmount = i779[2]
  i778.sphericalDirectionAmount = i779[3]
  i778.randomPositionAmount = i779[4]
  i778.alignToDirection = !!i779[5]
  i778.radius = i779[6]
  i778.radiusMode = i779[7]
  i778.radiusSpread = i779[8]
  i778.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.radiusSpeed)
  i778.radiusThickness = i779[10]
  i778.angle = i779[11]
  i778.length = i779[12]
  i778.boxThickness = new pc.Vec3( i779[13], i779[14], i779[15] )
  i778.meshShapeType = i779[16]
  request.r(i779[17], i779[18], 0, i778, 'mesh')
  request.r(i779[19], i779[20], 0, i778, 'meshRenderer')
  request.r(i779[21], i779[22], 0, i778, 'skinnedMeshRenderer')
  i778.useMeshMaterialIndex = !!i779[23]
  i778.meshMaterialIndex = i779[24]
  i778.useMeshColors = !!i779[25]
  i778.normalOffset = i779[26]
  i778.arc = i779[27]
  i778.arcMode = i779[28]
  i778.arcSpread = i779[29]
  i778.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[30], i778.arcSpeed)
  i778.donutRadius = i779[31]
  i778.position = new pc.Vec3( i779[32], i779[33], i779[34] )
  i778.rotation = new pc.Vec3( i779[35], i779[36], i779[37] )
  i778.scale = new pc.Vec3( i779[38], i779[39], i779[40] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemSizeBySpeed()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  i780.range = new pc.Vec2( i781[5], i781[6] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemSizeOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.separateAxes = !!i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.mode = i785[1]
  i784.animation = i785[2]
  i784.numTilesX = i785[3]
  i784.numTilesY = i785[4]
  i784.useRandomRow = !!i785[5]
  i784.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[6], i784.frameOverTime)
  i784.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[7], i784.startFrame)
  i784.cycleCount = i785[8]
  i784.rowIndex = i785[9]
  i784.flipU = i785[10]
  i784.flipV = i785[11]
  i784.spriteCount = i785[12]
  var i787 = i785[13]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sprites = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.radial)
  i790.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[5], i790.speedModifier)
  i790.space = i791[6]
  i790.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[7], i790.orbitalX)
  i790.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.orbitalY)
  i790.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[9], i790.orbitalZ)
  i790.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[10], i790.orbitalOffsetX)
  i790.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.orbitalOffsetY)
  i790.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[12], i790.orbitalOffsetZ)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemNoise()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.separateAxes = !!i793[1]
  i792.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.strengthX)
  i792.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.strengthY)
  i792.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.strengthZ)
  i792.frequency = i793[5]
  i792.damping = !!i793[6]
  i792.octaveCount = i793[7]
  i792.octaveMultiplier = i793[8]
  i792.octaveScale = i793[9]
  i792.quality = i793[10]
  i792.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.scrollSpeed)
  i792.scrollSpeedMultiplier = i793[12]
  i792.remapEnabled = !!i793[13]
  i792.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[14], i792.remapX)
  i792.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[15], i792.remapY)
  i792.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[16], i792.remapZ)
  i792.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[17], i792.positionAmount)
  i792.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[18], i792.rotationAmount)
  i792.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[19], i792.sizeAmount)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemInheritVelocity()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.mode = i795[1]
  i794.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.curve)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemForceOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.space = i797[4]
  i796.randomized = !!i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.limit)
  i798.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.limitX)
  i798.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.limitY)
  i798.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[4], i798.limitZ)
  i798.dampen = i799[5]
  i798.separateAxes = !!i799[6]
  i798.space = i799[7]
  i798.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[8], i798.drag)
  i798.multiplyDragByParticleSize = !!i799[9]
  i798.multiplyDragByParticleVelocity = !!i799[10]
  return i798
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i800 = root || request.c( 'StarExploreFX' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'tf')
  return i800
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i802 = root || request.c( 'ProgressBar' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'fillTransform')
  request.r(i803[2], i803[3], 0, i802, 'tf')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i805 = data
  i804.pivot = new pc.Vec2( i805[0], i805[1] )
  i804.anchorMin = new pc.Vec2( i805[2], i805[3] )
  i804.anchorMax = new pc.Vec2( i805[4], i805[5] )
  i804.sizeDelta = new pc.Vec2( i805[6], i805[7] )
  i804.anchoredPosition3D = new pc.Vec3( i805[8], i805[9], i805[10] )
  i804.rotation = new pc.Quat(i805[11], i805[12], i805[13], i805[14])
  i804.scale = new pc.Vec3( i805[15], i805[16], i805[17] )
  return i804
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i806 = root || request.c( 'ClockTimer' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'fillImage')
  request.r(i807[2], i807[3], 0, i806, 'tf')
  i806.spawnZoomDuration = i807[4]
  i806.despawnZoomDuration = i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i809 = data
  i808.cullTransparentMesh = !!i809[0]
  return i808
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Image' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Sprite')
  i810.m_Type = i811[2]
  i810.m_PreserveAspect = !!i811[3]
  i810.m_FillCenter = !!i811[4]
  i810.m_FillMethod = i811[5]
  i810.m_FillAmount = i811[6]
  i810.m_FillClockwise = !!i811[7]
  i810.m_FillOrigin = i811[8]
  i810.m_UseSpriteMesh = !!i811[9]
  i810.m_PixelsPerUnitMultiplier = i811[10]
  request.r(i811[11], i811[12], 0, i810, 'm_Material')
  i810.m_Maskable = !!i811[13]
  i810.m_Color = new pc.Color(i811[14], i811[15], i811[16], i811[17])
  i810.m_RaycastTarget = !!i811[18]
  i810.m_RaycastPadding = new pc.Vec4( i811[19], i811[20], i811[21], i811[22] )
  return i810
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i812 = root || request.c( 'FlourSmoke' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'tf')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i815 = data
  i814.name = i815[0]
  i814.index = i815[1]
  i814.startup = !!i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i817 = data
  i816.planeDistance = i817[0]
  i816.referencePixelsPerUnit = i817[1]
  i816.isFallbackOverlay = !!i817[2]
  i816.renderMode = i817[3]
  i816.renderOrder = i817[4]
  i816.sortingLayerName = i817[5]
  i816.sortingOrder = i817[6]
  i816.scaleFactor = i817[7]
  request.r(i817[8], i817[9], 0, i816, 'worldCamera')
  i816.overrideSorting = !!i817[10]
  i816.pixelPerfect = !!i817[11]
  i816.targetDisplay = i817[12]
  i816.overridePixelPerfect = !!i817[13]
  i816.enabled = !!i817[14]
  return i816
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i819 = data
  i818.m_UiScaleMode = i819[0]
  i818.m_ReferencePixelsPerUnit = i819[1]
  i818.m_ScaleFactor = i819[2]
  i818.m_ReferenceResolution = new pc.Vec2( i819[3], i819[4] )
  i818.m_ScreenMatchMode = i819[5]
  i818.m_MatchWidthOrHeight = i819[6]
  i818.m_PhysicalUnit = i819[7]
  i818.m_FallbackScreenDPI = i819[8]
  i818.m_DefaultSpriteDPI = i819[9]
  i818.m_DynamicPixelsPerUnit = i819[10]
  i818.m_PresetInfoIsWorld = !!i819[11]
  return i818
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i821 = data
  i820.m_IgnoreReversedGraphics = !!i821[0]
  i820.m_BlockingObjects = i821[1]
  i820.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i821[2] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'animatorController')
  request.r(i823[2], i823[3], 0, i822, 'avatar')
  i822.updateMode = i823[4]
  i822.hasTransformHierarchy = !!i823[5]
  i822.applyRootMotion = !!i823[6]
  var i825 = i823[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.humanBones = i824
  i822.enabled = !!i823[8]
  return i822
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i829 = data
  i828.m_hasFontAssetChanged = !!i829[0]
  request.r(i829[1], i829[2], 0, i828, 'm_baseMaterial')
  i828.m_maskOffset = new pc.Vec4( i829[3], i829[4], i829[5], i829[6] )
  i828.m_text = i829[7]
  i828.m_isRightToLeft = !!i829[8]
  request.r(i829[9], i829[10], 0, i828, 'm_fontAsset')
  request.r(i829[11], i829[12], 0, i828, 'm_sharedMaterial')
  var i831 = i829[13]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.m_fontSharedMaterials = i830
  request.r(i829[14], i829[15], 0, i828, 'm_fontMaterial')
  var i833 = i829[16]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i828.m_fontMaterials = i832
  i828.m_fontColor32 = UnityEngine.Color32.ConstructColor(i829[17], i829[18], i829[19], i829[20])
  i828.m_fontColor = new pc.Color(i829[21], i829[22], i829[23], i829[24])
  i828.m_enableVertexGradient = !!i829[25]
  i828.m_colorMode = i829[26]
  i828.m_fontColorGradient = request.d('TMPro.VertexGradient', i829[27], i828.m_fontColorGradient)
  request.r(i829[28], i829[29], 0, i828, 'm_fontColorGradientPreset')
  request.r(i829[30], i829[31], 0, i828, 'm_spriteAsset')
  i828.m_tintAllSprites = !!i829[32]
  request.r(i829[33], i829[34], 0, i828, 'm_StyleSheet')
  i828.m_TextStyleHashCode = i829[35]
  i828.m_overrideHtmlColors = !!i829[36]
  i828.m_faceColor = UnityEngine.Color32.ConstructColor(i829[37], i829[38], i829[39], i829[40])
  i828.m_fontSize = i829[41]
  i828.m_fontSizeBase = i829[42]
  i828.m_fontWeight = i829[43]
  i828.m_enableAutoSizing = !!i829[44]
  i828.m_fontSizeMin = i829[45]
  i828.m_fontSizeMax = i829[46]
  i828.m_fontStyle = i829[47]
  i828.m_HorizontalAlignment = i829[48]
  i828.m_VerticalAlignment = i829[49]
  i828.m_textAlignment = i829[50]
  i828.m_characterSpacing = i829[51]
  i828.m_wordSpacing = i829[52]
  i828.m_lineSpacing = i829[53]
  i828.m_lineSpacingMax = i829[54]
  i828.m_paragraphSpacing = i829[55]
  i828.m_charWidthMaxAdj = i829[56]
  i828.m_TextWrappingMode = i829[57]
  i828.m_wordWrappingRatios = i829[58]
  i828.m_overflowMode = i829[59]
  request.r(i829[60], i829[61], 0, i828, 'm_linkedTextComponent')
  request.r(i829[62], i829[63], 0, i828, 'parentLinkedComponent')
  i828.m_enableKerning = !!i829[64]
  var i835 = i829[65]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(i835[i + 0]);
  }
  i828.m_ActiveFontFeatures = i834
  i828.m_enableExtraPadding = !!i829[66]
  i828.checkPaddingRequired = !!i829[67]
  i828.m_isRichText = !!i829[68]
  i828.m_parseCtrlCharacters = !!i829[69]
  i828.m_isOrthographic = !!i829[70]
  i828.m_isCullingEnabled = !!i829[71]
  i828.m_horizontalMapping = i829[72]
  i828.m_verticalMapping = i829[73]
  i828.m_uvLineOffset = i829[74]
  i828.m_geometrySortingOrder = i829[75]
  i828.m_IsTextObjectScaleStatic = !!i829[76]
  i828.m_VertexBufferAutoSizeReduction = !!i829[77]
  i828.m_useMaxVisibleDescender = !!i829[78]
  i828.m_pageToDisplay = i829[79]
  i828.m_margin = new pc.Vec4( i829[80], i829[81], i829[82], i829[83] )
  i828.m_isUsingLegacyAnimationComponent = !!i829[84]
  i828.m_isVolumetricText = !!i829[85]
  request.r(i829[86], i829[87], 0, i828, 'm_Material')
  i828.m_EmojiFallbackSupport = !!i829[88]
  i828.m_Maskable = !!i829[89]
  i828.m_Color = new pc.Color(i829[90], i829[91], i829[92], i829[93])
  i828.m_RaycastTarget = !!i829[94]
  i828.m_RaycastPadding = new pc.Vec4( i829[95], i829[96], i829[97], i829[98] )
  return i828
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.VertexGradient' )
  var i837 = data
  i836.topLeft = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.topRight = new pc.Color(i837[4], i837[5], i837[6], i837[7])
  i836.bottomLeft = new pc.Color(i837[8], i837[9], i837[10], i837[11])
  i836.bottomRight = new pc.Color(i837[12], i837[13], i837[14], i837[15])
  return i836
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Button' )
  var i841 = data
  i840.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i841[0], i840.m_OnClick)
  i840.m_Navigation = request.d('UnityEngine.UI.Navigation', i841[1], i840.m_Navigation)
  i840.m_Transition = i841[2]
  i840.m_Colors = request.d('UnityEngine.UI.ColorBlock', i841[3], i840.m_Colors)
  i840.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i841[4], i840.m_SpriteState)
  i840.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i841[5], i840.m_AnimationTriggers)
  i840.m_Interactable = !!i841[6]
  request.r(i841[7], i841[8], 0, i840, 'm_TargetGraphic')
  return i840
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i843 = data
  i842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i843[0], i842.m_PersistentCalls)
  return i842
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('UnityEngine.Events.PersistentCall', i847[i + 0]));
  }
  i844.m_Calls = i846
  return i844
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Target')
  i850.m_TargetAssemblyTypeName = i851[2]
  i850.m_MethodName = i851[3]
  i850.m_Mode = i851[4]
  i850.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i851[5], i850.m_Arguments)
  i850.m_CallState = i851[6]
  return i850
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_ObjectArgument')
  i852.m_ObjectArgumentAssemblyTypeName = i853[2]
  i852.m_IntArgument = i853[3]
  i852.m_FloatArgument = i853[4]
  i852.m_StringArgument = i853[5]
  i852.m_BoolArgument = !!i853[6]
  return i852
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i855 = data
  i854.m_Mode = i855[0]
  i854.m_WrapAround = !!i855[1]
  request.r(i855[2], i855[3], 0, i854, 'm_SelectOnUp')
  request.r(i855[4], i855[5], 0, i854, 'm_SelectOnDown')
  request.r(i855[6], i855[7], 0, i854, 'm_SelectOnLeft')
  request.r(i855[8], i855[9], 0, i854, 'm_SelectOnRight')
  return i854
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i857 = data
  i856.m_NormalColor = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  i856.m_HighlightedColor = new pc.Color(i857[4], i857[5], i857[6], i857[7])
  i856.m_PressedColor = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  i856.m_SelectedColor = new pc.Color(i857[12], i857[13], i857[14], i857[15])
  i856.m_DisabledColor = new pc.Color(i857[16], i857[17], i857[18], i857[19])
  i856.m_ColorMultiplier = i857[20]
  i856.m_FadeDuration = i857[21]
  return i856
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_HighlightedSprite')
  request.r(i859[2], i859[3], 0, i858, 'm_PressedSprite')
  request.r(i859[4], i859[5], 0, i858, 'm_SelectedSprite')
  request.r(i859[6], i859[7], 0, i858, 'm_DisabledSprite')
  return i858
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i861 = data
  i860.m_NormalTrigger = i861[0]
  i860.m_HighlightedTrigger = i861[1]
  i860.m_PressedTrigger = i861[2]
  i860.m_SelectedTrigger = i861[3]
  i860.m_DisabledTrigger = i861[4]
  return i860
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i862 = root || request.c( 'Ply_Pool' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Ply_Pool+PoolAmount', i865[i + 0]) );
  }
  i862.poolAmounts = i864
  request.r(i863[1], i863[2], 0, i862, 'poolHolder')
  return i862
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i868 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i869 = data
  i868.type = i869[0]
  i868.amount = i869[1]
  request.r(i869[2], i869[3], 0, i868, 'gameUnit')
  return i868
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i870 = root || request.c( 'Ply_SoundManager' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Ply_SoundManager+FxAudio', i873[i + 0]) );
  }
  i870.fxAudios = i872
  var i875 = i871[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.audioClips = i874
  request.r(i871[2], i871[3], 0, i870, 'sound')
  return i870
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i878 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i879 = data
  i878.fxType = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'audioClip')
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'clip')
  request.r(i883[2], i883[3], 0, i882, 'outputAudioMixerGroup')
  i882.playOnAwake = !!i883[4]
  i882.loop = !!i883[5]
  i882.time = i883[6]
  i882.volume = i883[7]
  i882.pitch = i883[8]
  i882.enabled = !!i883[9]
  return i882
}

Deserializers["GameManager"] = function (request, data, root) {
  var i884 = root || request.c( 'GameManager' )
  var i885 = data
  i884.isPlaying = !!i885[0]
  i884.isTutorial = !!i885[1]
  i884.isGotoStore = !!i885[2]
  i884.isLoseGame = !!i885[3]
  i884.countMove = i885[4]
  i884.currentLayer = i885[5]
  return i884
}

Deserializers["UIManager"] = function (request, data, root) {
  var i886 = root || request.c( 'UIManager' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'winUI')
  request.r(i887[2], i887[3], 0, i886, 'loseUI')
  request.r(i887[4], i887[5], 0, i886, 'tutorial')
  request.r(i887[6], i887[7], 0, i886, 'verticalUI')
  request.r(i887[8], i887[9], 0, i886, 'horizontalUI')
  request.r(i887[10], i887[11], 0, i886, 'downloadBtn')
  i886.screenWidth = i887[12]
  i886.screenHeight = i887[13]
  i886.scaleHeightOnWidth = i887[14]
  i886.isVertical = !!i887[15]
  request.r(i887[16], i887[17], 0, i886, 'cam')
  i886.verticalUIHeightOnWidthRatio = i887[18]
  i886.scaleCameraOnValidate = !!i887[19]
  i886.useContinuousScaling = !!i887[20]
  i886.baseOrthographicSize = i887[21]
  i886.baseAspect = i887[22]
  i886.landscapeSizeRatio = i887[23]
  i886.defaultPortraitSizeRatio = i887[24]
  var i889 = i887[25]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('ScreenScaleStep', i889[i + 0]));
  }
  i886.discreteScaleSteps = i888
  i886.usePerspectiveCamera = !!i887[26]
  request.r(i887[27], i887[28], 0, i886, 'perspectiveFocus')
  i886.perspectiveFocusDistance = i887[29]
  i886.perspectivePadding = i887[30]
  i886.fitRendererBounds = !!i887[31]
  request.r(i887[32], i887[33], 0, i886, 'boundsRoot')
  var i891 = i887[34]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i886.boundsRenderers = i890
  return i886
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i894 = root || request.c( 'ScreenScaleStep' )
  var i895 = data
  i894.heightOnWidthRatio = i895[0]
  i894.orthographicSize = i895[1]
  return i894
}

Deserializers["InputManager"] = function (request, data, root) {
  var i898 = root || request.c( 'InputManager' )
  var i899 = data
  i898.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i899[0] )
  i898.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i899[1] )
  i898.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i899[2] )
  i898.isDragging = !!i899[3]
  return i898
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i900 = root || request.c( 'HandTutManager' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i900.items = i902
  request.r(i901[1], i901[2], 0, i900, 'knife')
  request.r(i901[3], i901[4], 0, i900, 'handTutObject')
  request.r(i901[5], i901[6], 0, i900, 'tapToCookObject')
  request.r(i901[7], i901[8], 0, i900, 'oilItem')
  request.r(i901[9], i901[10], 0, i900, 'stoveToggleEvent')
  i900.noDelayItemCount = i901[11]
  i900.waitForBowlIntro = !!i901[12]
  i900.idleDelay = i901[13]
  i900.moveDuration = i901[14]
  i900.dragFadeDuration = i901[15]
  i900.clickScaleDuration = i901[16]
  i900.waitAtEndDuration = i901[17]
  i900.handZPosition = i901[18]
  i900.clickScaleMultiplier = i901[19]
  i900.moveEase = i901[20]
  return i900
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i906 = root || request.c( 'SortChildByZPos' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'transformToSort')
  var i909 = i907[2]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 1, i908, '')
  }
  i906.childrenToSort = i908
  i906.zOffset = i907[3]
  i906.baseZ = i907[4]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i913 = data
  i912.aspect = i913[0]
  i912.orthographic = !!i913[1]
  i912.orthographicSize = i913[2]
  i912.backgroundColor = new pc.Color(i913[3], i913[4], i913[5], i913[6])
  i912.nearClipPlane = i913[7]
  i912.farClipPlane = i913[8]
  i912.fieldOfView = i913[9]
  i912.depth = i913[10]
  i912.clearFlags = i913[11]
  i912.cullingMask = i913[12]
  i912.rect = i913[13]
  request.r(i913[14], i913[15], 0, i912, 'targetTexture')
  i912.usePhysicalProperties = !!i913[16]
  i912.focalLength = i913[17]
  i912.sensorSize = new pc.Vec2( i913[18], i913[19] )
  i912.lensShift = new pc.Vec2( i913[20], i913[21] )
  i912.gateFit = i913[22]
  i912.commandBufferCount = i913[23]
  i912.cameraType = i913[24]
  i912.enabled = !!i913[25]
  return i912
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_FirstSelected')
  i914.m_sendNavigationEvents = !!i915[2]
  i914.m_DragThreshold = i915[3]
  return i914
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i917 = data
  i916.m_HorizontalAxis = i917[0]
  i916.m_VerticalAxis = i917[1]
  i916.m_SubmitButton = i917[2]
  i916.m_CancelButton = i917[3]
  i916.m_InputActionsPerSecond = i917[4]
  i916.m_RepeatDelay = i917[5]
  i916.m_ForceModuleActive = !!i917[6]
  i916.m_SendPointerHoverToParent = !!i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i919 = data
  i918.center = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.radius = i919[3]
  i918.enabled = !!i919[4]
  i918.isTrigger = !!i919[5]
  request.r(i919[6], i919[7], 0, i918, 'material')
  return i918
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i920 = root || request.c( 'Ply_ToggleEvent' )
  var i921 = data
  i920.isOn = !!i921[0]
  i920.applyStateOnEnable = !!i921[1]
  i920.applyStateOnClick = !!i921[2]
  request.r(i921[3], i921[4], 0, i920, 'targetObject')
  i920.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i921[5], i920.onTurnOn)
  i920.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i921[6], i920.onTurnOff)
  return i920
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i923 = data
  i922.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i923[0], i922.m_PersistentCalls)
  return i922
}

Deserializers["Sink"] = function (request, data, root) {
  var i924 = root || request.c( 'Sink' )
  var i925 = data
  i924.isClose = !!i925[0]
  i924.isWaterDrop = !!i925[1]
  i924.isWaterIn = !!i925[2]
  request.r(i925[3], i925[4], 0, i924, 'faucetAnimator')
  request.r(i925[5], i925[6], 0, i924, 'basinAnimator')
  request.r(i925[7], i925[8], 0, i924, 'waterDrop')
  request.r(i925[9], i925[10], 0, i924, 'waterIn')
  request.r(i925[11], i925[12], 0, i924, 'basinWaterRenderer')
  i924.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i925[13], i925[14], i925[15], i925[16])
  i924.fullWaterRect = UnityEngine.Rect.MinMaxRect(i925[17], i925[18], i925[19], i925[20])
  i924.waterRiseDuration = i925[21]
  i924.waterFallDuration = i925[22]
  i924.waterRiseEase = i925[23]
  i924.waterFallEase = i925[24]
  i924.drawWaterRects = !!i925[25]
  i924.emptyRectColor = new pc.Color(i925[26], i925[27], i925[28], i925[29])
  i924.fullRectColor = new pc.Color(i925[30], i925[31], i925[32], i925[33])
  request.r(i925[34], i925[35], 0, i924, 'waterDropTransform')
  i924.emptyWaterDropPoint = new pc.Vec3( i925[36], i925[37], i925[38] )
  i924.fullWaterDropPoint = new pc.Vec3( i925[39], i925[40], i925[41] )
  i924.drawWaterDropPoints = !!i925[42]
  i924.waterDropPointRadius = i925[43]
  i924.emptyWaterDropPointColor = new pc.Color(i925[44], i925[45], i925[46], i925[47])
  i924.fullWaterDropPointColor = new pc.Color(i925[48], i925[49], i925[50], i925[51])
  var i927 = i925[52]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 1, i926, '')
  }
  i924.inWaterItems = i926
  i924.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i925[53], i924.onWaterIn)
  i924.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i925[54], i924.onNoWaterIn)
  i924.isDone = !!i925[55]
  i924.onProcess = !!i925[56]
  request.r(i925[57], i925[58], 0, i924, 'itemDraggable')
  request.r(i925[59], i925[60], 0, i924, 'itemClickable')
  request.r(i925[61], i925[62], 0, i924, 'itemStirring')
  request.r(i925[63], i925[64], 0, i924, 'itemKnifeSpriteMaskCutter')
  request.r(i925[65], i925[66], 0, i924, 'itemSpriteMaskPainter')
  request.r(i925[67], i925[68], 0, i924, 'itemMoveToTarget')
  request.r(i925[69], i925[70], 0, i924, 'animator')
  i924.itemType = i925[71]
  request.r(i925[72], i925[73], 0, i924, 'spriteRenderer')
  i924.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i925[74], i924.onKnifeIn)
  i924.heartEffectScale = i925[75]
  i924.playMoveToTargetFinishSound = !!i925[76]
  i924.moveToTargetFinishFxType = i925[77]
  i924.waterState = i925[78]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i931 = data
  i930.center = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.size = new pc.Vec3( i931[3], i931[4], i931[5] )
  i930.enabled = !!i931[6]
  i930.isTrigger = !!i931[7]
  request.r(i931[8], i931[9], 0, i930, 'material')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i933 = data
  i932.frontSortingLayerID = i933[0]
  i932.frontSortingOrder = i933[1]
  i932.backSortingLayerID = i933[2]
  i932.backSortingOrder = i933[3]
  i932.alphaCutoff = i933[4]
  request.r(i933[5], i933[6], 0, i932, 'sprite')
  i932.tileMode = i933[7]
  i932.isCustomRangeActive = !!i933[8]
  i932.spriteSortPoint = i933[9]
  i932.enabled = !!i933[10]
  request.r(i933[11], i933[12], 0, i932, 'sharedMaterial')
  var i935 = i933[13]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.sharedMaterials = i934
  i932.receiveShadows = !!i933[14]
  i932.shadowCastingMode = i933[15]
  i932.sortingLayerID = i933[16]
  i932.sortingOrder = i933[17]
  i932.lightmapIndex = i933[18]
  i932.lightmapSceneIndex = i933[19]
  i932.lightmapScaleOffset = new pc.Vec4( i933[20], i933[21], i933[22], i933[23] )
  i932.lightProbeUsage = i933[24]
  i932.reflectionProbeUsage = i933[25]
  return i932
}

Deserializers["Item"] = function (request, data, root) {
  var i936 = root || request.c( 'Item' )
  var i937 = data
  i936.isDone = !!i937[0]
  i936.onProcess = !!i937[1]
  request.r(i937[2], i937[3], 0, i936, 'itemDraggable')
  request.r(i937[4], i937[5], 0, i936, 'itemClickable')
  request.r(i937[6], i937[7], 0, i936, 'itemStirring')
  request.r(i937[8], i937[9], 0, i936, 'itemKnifeSpriteMaskCutter')
  request.r(i937[10], i937[11], 0, i936, 'itemSpriteMaskPainter')
  request.r(i937[12], i937[13], 0, i936, 'itemMoveToTarget')
  request.r(i937[14], i937[15], 0, i936, 'animator')
  i936.itemType = i937[16]
  request.r(i937[17], i937[18], 0, i936, 'spriteRenderer')
  i936.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i937[19], i936.onKnifeIn)
  i936.heartEffectScale = i937[20]
  i936.playMoveToTargetFinishSound = !!i937[21]
  i936.moveToTargetFinishFxType = i937[22]
  return i936
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i938 = root || request.c( 'SinkBlock' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'sink')
  i938.startsInside = !!i939[2]
  i938.insideTargetType = i939[3]
  request.r(i939[4], i939[5], 0, i938, 'insideDefaultTarget')
  i938.outsideTargetType = i939[6]
  request.r(i939[7], i939[8], 0, i938, 'outsideDefaultTarget')
  i938.isDone = !!i939[9]
  i938.onProcess = !!i939[10]
  request.r(i939[11], i939[12], 0, i938, 'itemDraggable')
  request.r(i939[13], i939[14], 0, i938, 'itemClickable')
  request.r(i939[15], i939[16], 0, i938, 'itemStirring')
  request.r(i939[17], i939[18], 0, i938, 'itemKnifeSpriteMaskCutter')
  request.r(i939[19], i939[20], 0, i938, 'itemSpriteMaskPainter')
  request.r(i939[21], i939[22], 0, i938, 'itemMoveToTarget')
  request.r(i939[23], i939[24], 0, i938, 'animator')
  i938.itemType = i939[25]
  request.r(i939[26], i939[27], 0, i938, 'spriteRenderer')
  i938.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i939[28], i938.onKnifeIn)
  i938.heartEffectScale = i939[29]
  i938.playMoveToTargetFinishSound = !!i939[30]
  i938.moveToTargetFinishFxType = i939[31]
  return i938
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i940 = root || request.c( 'ItemDraggable' )
  var i941 = data
  i940.isDraggable = !!i941[0]
  request.r(i941[1], i941[2], 0, i940, 'returnTransform')
  i940.setParentToReturnTransform = !!i941[3]
  i940.returnToExactReturnTransformPosition = !!i941[4]
  i940.targetItemType = i941[5]
  request.r(i941[6], i941[7], 0, i940, 'item')
  i940.checkState = !!i941[8]
  request.r(i941[9], i941[10], 0, i940, 'shadowObject')
  i940.playReturnToStartFinishSound = !!i941[11]
  i940.returnToStartFinishFxType = i941[12]
  i940.spawnBreakHeartOnDropFail = !!i941[13]
  i940.liftOffset = i941[14]
  i940.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i941[15], i940.onBeginDrag)
  i940.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i941[16], i940.onDropSuccess)
  i940.onDropFail = request.d('UnityEngine.Events.UnityEvent', i941[17], i940.onDropFail)
  return i940
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i942 = root || request.c( 'ItemMoveToTarget' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'defaultTarget')
  i942.duration = i943[2]
  i942.easeType = i943[3]
  i942.moveType = i943[4]
  i942.jumpPower = i943[5]
  i942.numJumps = i943[6]
  i942.rotate360DuringJump = !!i943[7]
  i942.setParentToTarget = !!i943[8]
  i942.onComplete = request.d('UnityEngine.Events.UnityEvent', i943[9], i942.onComplete)
  i942.lockInputWhileMoving = !!i943[10]
  i942.resetParentBeforeMove = !!i943[11]
  return i942
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i944 = root || request.c( 'Ply_BobEffect' )
  var i945 = data
  i944.playOnEnable = !!i945[0]
  i944.useLocalMove = !!i945[1]
  i944.bobOffset = new pc.Vec3( i945[2], i945[3], i945[4] )
  i944.duration = i945[5]
  i944.ease = i945[6]
  return i944
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'Ply_TimerEvent' )
  var i947 = data
  i946.duration = i947[0]
  i946.playOnEnable = !!i947[1]
  i946.ignoreTimeScale = !!i947[2]
  i946.autoDisableOnComplete = !!i947[3]
  i946.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i947[4], i946.onTimerStart)
  i946.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i947[5], i946.onTimerComplete)
  i946.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i947[6], i946.onTimerStop)
  return i946
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i948 = root || request.c( 'InWaterItem' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'waterTarget')
  request.r(i949[2], i949[3], 0, i948, 'cuttingBoardTarget')
  request.r(i949[4], i949[5], 0, i948, 'plateTarget')
  request.r(i949[6], i949[7], 0, i948, 'ply_TimerEvent')
  request.r(i949[8], i949[9], 0, i948, 'ply_BobEffect')
  request.r(i949[10], i949[11], 0, i948, 'collider1')
  request.r(i949[12], i949[13], 0, i948, 'sink')
  i948.isInWater = !!i949[14]
  i948.isOnCuttingBoard = !!i949[15]
  i948.isOnPlate = !!i949[16]
  i948.isClean = !!i949[17]
  i948.isCutDone = !!i949[18]
  i948.isDone = !!i949[19]
  i948.onProcess = !!i949[20]
  request.r(i949[21], i949[22], 0, i948, 'itemDraggable')
  request.r(i949[23], i949[24], 0, i948, 'itemClickable')
  request.r(i949[25], i949[26], 0, i948, 'itemStirring')
  request.r(i949[27], i949[28], 0, i948, 'itemKnifeSpriteMaskCutter')
  request.r(i949[29], i949[30], 0, i948, 'itemSpriteMaskPainter')
  request.r(i949[31], i949[32], 0, i948, 'itemMoveToTarget')
  request.r(i949[33], i949[34], 0, i948, 'animator')
  i948.itemType = i949[35]
  request.r(i949[36], i949[37], 0, i948, 'spriteRenderer')
  i948.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i949[38], i948.onKnifeIn)
  i948.heartEffectScale = i949[39]
  i948.playMoveToTargetFinishSound = !!i949[40]
  i948.moveToTargetFinishFxType = i949[41]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i951 = data
  i950.ambientIntensity = i951[0]
  i950.reflectionIntensity = i951[1]
  i950.ambientMode = i951[2]
  i950.ambientLight = new pc.Color(i951[3], i951[4], i951[5], i951[6])
  i950.ambientSkyColor = new pc.Color(i951[7], i951[8], i951[9], i951[10])
  i950.ambientGroundColor = new pc.Color(i951[11], i951[12], i951[13], i951[14])
  i950.ambientEquatorColor = new pc.Color(i951[15], i951[16], i951[17], i951[18])
  i950.fogColor = new pc.Color(i951[19], i951[20], i951[21], i951[22])
  i950.fogEndDistance = i951[23]
  i950.fogStartDistance = i951[24]
  i950.fogDensity = i951[25]
  i950.fog = !!i951[26]
  request.r(i951[27], i951[28], 0, i950, 'skybox')
  i950.fogMode = i951[29]
  var i953 = i951[30]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i953[i + 0]) );
  }
  i950.lightmaps = i952
  i950.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i951[31], i950.lightProbes)
  i950.lightmapsMode = i951[32]
  i950.mixedBakeMode = i951[33]
  i950.environmentLightingMode = i951[34]
  i950.ambientProbe = new pc.SphericalHarmonicsL2(i951[35])
  i950.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i951[36])
  i950.useReferenceAmbientProbe = !!i951[37]
  request.r(i951[38], i951[39], 0, i950, 'customReflection')
  request.r(i951[40], i951[41], 0, i950, 'defaultReflection')
  i950.defaultReflectionMode = i951[42]
  i950.defaultReflectionResolution = i951[43]
  i950.sunLightObjectId = i951[44]
  i950.pixelLightCount = i951[45]
  i950.defaultReflectionHDR = !!i951[46]
  i950.hasLightDataAsset = !!i951[47]
  i950.hasManualGenerate = !!i951[48]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'lightmapColor')
  request.r(i957[2], i957[3], 0, i956, 'lightmapDirection')
  request.r(i957[4], i957[5], 0, i956, 'shadowMask')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i958 = root || new UnityEngine.LightProbes()
  var i959 = data
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i969[i + 0]));
  }
  i966.ShaderCompilationErrors = i968
  i966.name = i967[1]
  i966.guid = i967[2]
  var i971 = i967[3]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.shaderDefinedKeywords = i970
  var i973 = i967[4]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i973[i + 0]) );
  }
  i966.passes = i972
  var i975 = i967[5]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i975[i + 0]) );
  }
  i966.usePasses = i974
  var i977 = i967[6]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i977[i + 0]) );
  }
  i966.defaultParameterValues = i976
  request.r(i967[7], i967[8], 0, i966, 'unityFallbackShader')
  i966.readDepth = !!i967[9]
  i966.hasDepthOnlyPass = !!i967[10]
  i966.isCreatedByShaderGraph = !!i967[11]
  i966.disableBatching = !!i967[12]
  i966.compiled = !!i967[13]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i981 = data
  i980.shaderName = i981[0]
  i980.errorMessage = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i986 = root || new pc.UnityShaderPass()
  var i987 = data
  i986.id = i987[0]
  i986.subShaderIndex = i987[1]
  i986.name = i987[2]
  i986.passType = i987[3]
  i986.grabPassTextureName = i987[4]
  i986.usePass = !!i987[5]
  i986.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[6], i986.zTest)
  i986.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[7], i986.zWrite)
  i986.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[8], i986.culling)
  i986.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i987[9], i986.blending)
  i986.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i987[10], i986.alphaBlending)
  i986.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[11], i986.colorWriteMask)
  i986.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[12], i986.offsetUnits)
  i986.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[13], i986.offsetFactor)
  i986.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[14], i986.stencilRef)
  i986.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[15], i986.stencilReadMask)
  i986.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[16], i986.stencilWriteMask)
  i986.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[17], i986.stencilOp)
  i986.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[18], i986.stencilOpFront)
  i986.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[19], i986.stencilOpBack)
  var i989 = i987[20]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i989[i + 0]) );
  }
  i986.tags = i988
  var i991 = i987[21]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.passDefinedKeywords = i990
  var i993 = i987[22]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i993[i + 0]) );
  }
  i986.passDefinedKeywordGroups = i992
  var i995 = i987[23]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i995[i + 0]) );
  }
  i986.variants = i994
  var i997 = i987[24]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i997[i + 0]) );
  }
  i986.excludedVariants = i996
  i986.hasDepthReader = !!i987[25]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i999 = data
  i998.val = i999[0]
  i998.name = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1001 = data
  i1000.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[0], i1000.src)
  i1000.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[1], i1000.dst)
  i1000.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[2], i1000.op)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1003 = data
  i1002.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[0], i1002.pass)
  i1002.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[1], i1002.fail)
  i1002.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[2], i1002.zFail)
  i1002.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[3], i1002.comp)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1010.keywords = i1012
  i1010.hasDiscard = !!i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1017 = data
  i1016.passId = i1017[0]
  i1016.subShaderIndex = i1017[1]
  var i1019 = i1017[2]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.keywords = i1018
  i1016.vertexProgram = i1017[3]
  i1016.fragmentProgram = i1017[4]
  i1016.exportedForWebGl2 = !!i1017[5]
  i1016.readDepth = !!i1017[6]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'shader')
  i1022.pass = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.type = i1027[1]
  i1026.value = new pc.Vec4( i1027[2], i1027[3], i1027[4], i1027[5] )
  i1026.textureValue = i1027[6]
  i1026.shaderPropertyFlag = i1027[7]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1029 = data
  i1028.name = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'texture')
  i1028.aabb = i1029[3]
  i1028.vertices = i1029[4]
  i1028.triangles = i1029[5]
  i1028.textureRect = UnityEngine.Rect.MinMaxRect(i1029[6], i1029[7], i1029[8], i1029[9])
  i1028.packedRect = UnityEngine.Rect.MinMaxRect(i1029[10], i1029[11], i1029[12], i1029[13])
  i1028.border = new pc.Vec4( i1029[14], i1029[15], i1029[16], i1029[17] )
  i1028.transparency = i1029[18]
  i1028.bounds = i1029[19]
  i1028.pixelsPerUnit = i1029[20]
  i1028.textureWidth = i1029[21]
  i1028.textureHeight = i1029[22]
  i1028.nativeSize = new pc.Vec2( i1029[23], i1029[24] )
  i1028.pivot = new pc.Vec2( i1029[25], i1029[26] )
  i1028.textureRectOffset = new pc.Vec2( i1029[27], i1029[28] )
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1031 = data
  i1030.name = i1031[0]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.wrapMode = i1033[1]
  i1032.isLooping = !!i1033[2]
  i1032.length = i1033[3]
  var i1035 = i1033[4]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1035[i + 0]) );
  }
  i1032.curves = i1034
  var i1037 = i1033[5]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1037[i + 0]) );
  }
  i1032.events = i1036
  i1032.halfPrecision = !!i1033[6]
  i1032._frameRate = i1033[7]
  i1032.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1033[8], i1032.localBounds)
  i1032.hasMuscleCurves = !!i1033[9]
  var i1039 = i1033[10]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1032.clipMuscleConstant = i1038
  i1032.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1033[11], i1032.clipBindingConstant)
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1043 = data
  i1042.path = i1043[0]
  i1042.hash = i1043[1]
  i1042.componentType = i1043[2]
  i1042.property = i1043[3]
  i1042.keys = i1043[4]
  var i1045 = i1043[5]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1045[i + 0]) );
  }
  i1042.objectReferenceKeys = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1049 = data
  i1048.time = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'value')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1053 = data
  i1052.functionName = i1053[0]
  i1052.floatParameter = i1053[1]
  i1052.intParameter = i1053[2]
  i1052.stringParameter = i1053[3]
  request.r(i1053[4], i1053[5], 0, i1052, 'objectReferenceParameter')
  i1052.time = i1053[6]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1055 = data
  i1054.center = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.extends = new pc.Vec3( i1055[3], i1055[4], i1055[5] )
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1058.genericBindings = i1060
  var i1063 = i1059[1]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.pptrCurveMapping = i1062
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1065 = data
  i1064.name = i1065[0]
  var i1067 = i1065[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1067[i + 0]) );
  }
  i1064.layers = i1066
  var i1069 = i1065[2]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1069[i + 0]) );
  }
  i1064.parameters = i1068
  i1064.animationClips = i1065[3]
  i1064.avatarUnsupported = i1065[4]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.defaultWeight = i1073[1]
  i1072.blendingMode = i1073[2]
  i1072.avatarMask = i1073[3]
  i1072.syncedLayerIndex = i1073[4]
  i1072.syncedLayerAffectsTiming = !!i1073[5]
  i1072.syncedLayers = i1073[6]
  i1072.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1073[7], i1072.stateMachine)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.name = i1075[1]
  i1074.path = i1075[2]
  var i1077 = i1075[3]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1077[i + 0]) );
  }
  i1074.states = i1076
  var i1079 = i1075[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1079[i + 0]) );
  }
  i1074.machines = i1078
  var i1081 = i1075[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1081[i + 0]) );
  }
  i1074.entryStateTransitions = i1080
  var i1083 = i1075[6]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1083[i + 0]) );
  }
  i1074.exitStateTransitions = i1082
  var i1085 = i1075[7]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1085[i + 0]) );
  }
  i1074.anyStateTransitions = i1084
  i1074.defaultStateId = i1075[8]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1089 = data
  i1088.id = i1089[0]
  i1088.name = i1089[1]
  i1088.cycleOffset = i1089[2]
  i1088.cycleOffsetParameter = i1089[3]
  i1088.cycleOffsetParameterActive = !!i1089[4]
  i1088.mirror = !!i1089[5]
  i1088.mirrorParameter = i1089[6]
  i1088.mirrorParameterActive = !!i1089[7]
  i1088.motionId = i1089[8]
  i1088.nameHash = i1089[9]
  i1088.fullPathHash = i1089[10]
  i1088.speed = i1089[11]
  i1088.speedParameter = i1089[12]
  i1088.speedParameterActive = !!i1089[13]
  i1088.tag = i1089[14]
  i1088.tagHash = i1089[15]
  i1088.writeDefaultValues = !!i1089[16]
  var i1091 = i1089[17]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.behaviours = i1090
  var i1093 = i1089[18]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1093[i + 0]) );
  }
  i1088.transitions = i1092
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1099 = data
  i1098.fullPath = i1099[0]
  i1098.canTransitionToSelf = !!i1099[1]
  i1098.duration = i1099[2]
  i1098.exitTime = i1099[3]
  i1098.hasExitTime = !!i1099[4]
  i1098.hasFixedDuration = !!i1099[5]
  i1098.interruptionSource = i1099[6]
  i1098.offset = i1099[7]
  i1098.orderedInterruption = !!i1099[8]
  i1098.destinationStateId = i1099[9]
  i1098.isExit = !!i1099[10]
  i1098.mute = !!i1099[11]
  i1098.solo = !!i1099[12]
  var i1101 = i1099[13]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1101[i + 0]) );
  }
  i1098.conditions = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1107 = data
  i1106.destinationStateId = i1107[0]
  i1106.isExit = !!i1107[1]
  i1106.mute = !!i1107[2]
  i1106.solo = !!i1107[3]
  var i1109 = i1107[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1109[i + 0]) );
  }
  i1106.conditions = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1113 = data
  i1112.defaultBool = !!i1113[0]
  i1112.defaultFloat = i1113[1]
  i1112.defaultInt = i1113[2]
  i1112.name = i1113[3]
  i1112.nameHash = i1113[4]
  i1112.type = i1113[5]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.bytes64 = i1115[1]
  i1114.data = i1115[2]
  return i1114
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1117 = data
  i1116.normalStyle = i1117[0]
  i1116.normalSpacingOffset = i1117[1]
  i1116.boldStyle = i1117[2]
  i1116.boldSpacing = i1117[3]
  i1116.italicStyle = i1117[4]
  i1116.tabSize = i1117[5]
  request.r(i1117[6], i1117[7], 0, i1116, 'atlas')
  i1116.m_SourceFontFileGUID = i1117[8]
  i1116.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1117[9], i1116.m_CreationSettings)
  request.r(i1117[10], i1117[11], 0, i1116, 'm_SourceFontFile')
  i1116.m_SourceFontFilePath = i1117[12]
  i1116.m_AtlasPopulationMode = i1117[13]
  i1116.InternalDynamicOS = !!i1117[14]
  var i1119 = i1117[15]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('UnityEngine.TextCore.Glyph', i1119[i + 0]));
  }
  i1116.m_GlyphTable = i1118
  var i1121 = i1117[16]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Character', i1121[i + 0]));
  }
  i1116.m_CharacterTable = i1120
  var i1123 = i1117[17]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1116.m_AtlasTextures = i1122
  i1116.m_AtlasTextureIndex = i1117[18]
  i1116.m_IsMultiAtlasTexturesEnabled = !!i1117[19]
  i1116.m_GetFontFeatures = !!i1117[20]
  i1116.m_ClearDynamicDataOnBuild = !!i1117[21]
  i1116.m_AtlasWidth = i1117[22]
  i1116.m_AtlasHeight = i1117[23]
  i1116.m_AtlasPadding = i1117[24]
  i1116.m_AtlasRenderMode = i1117[25]
  var i1125 = i1117[26]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.GlyphRect', i1125[i + 0]));
  }
  i1116.m_UsedGlyphRects = i1124
  var i1127 = i1117[27]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('UnityEngine.TextCore.GlyphRect', i1127[i + 0]));
  }
  i1116.m_FreeGlyphRects = i1126
  i1116.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1117[28], i1116.m_FontFeatureTable)
  i1116.m_ShouldReimportFontFeatures = !!i1117[29]
  var i1129 = i1117[30]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1116.m_FallbackFontAssetTable = i1128
  var i1131 = i1117[31]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('TMPro.TMP_FontWeightPair', i1131[i + 0]) );
  }
  i1116.m_FontWeightTable = i1130
  var i1133 = i1117[32]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1116.fontWeights = i1132
  i1116.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1117[33], i1116.m_fontInfo)
  var i1135 = i1117[34]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.TMP_Glyph', i1135[i + 0]));
  }
  i1116.m_glyphInfoList = i1134
  i1116.m_KerningTable = request.d('TMPro.KerningTable', i1117[35], i1116.m_KerningTable)
  var i1137 = i1117[36]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1116.fallbackFontAssets = i1136
  i1116.m_Version = i1117[37]
  i1116.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1117[38], i1116.m_FaceInfo)
  request.r(i1117[39], i1117[40], 0, i1116, 'm_Material')
  return i1116
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1139 = data
  i1138.sourceFontFileName = i1139[0]
  i1138.sourceFontFileGUID = i1139[1]
  i1138.faceIndex = i1139[2]
  i1138.pointSizeSamplingMode = i1139[3]
  i1138.pointSize = i1139[4]
  i1138.padding = i1139[5]
  i1138.paddingMode = i1139[6]
  i1138.packingMode = i1139[7]
  i1138.atlasWidth = i1139[8]
  i1138.atlasHeight = i1139[9]
  i1138.characterSetSelectionMode = i1139[10]
  i1138.characterSequence = i1139[11]
  i1138.referencedFontAssetGUID = i1139[12]
  i1138.referencedTextAssetGUID = i1139[13]
  i1138.fontStyle = i1139[14]
  i1138.fontStyleModifier = i1139[15]
  i1138.renderMode = i1139[16]
  i1138.includeFontFeatures = !!i1139[17]
  return i1138
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1143 = data
  i1142.m_Index = i1143[0]
  i1142.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1143[1], i1142.m_Metrics)
  i1142.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1143[2], i1142.m_GlyphRect)
  i1142.m_Scale = i1143[3]
  i1142.m_AtlasIndex = i1143[4]
  i1142.m_ClassDefinitionType = i1143[5]
  return i1142
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1145 = data
  i1144.m_Width = i1145[0]
  i1144.m_Height = i1145[1]
  i1144.m_HorizontalBearingX = i1145[2]
  i1144.m_HorizontalBearingY = i1145[3]
  i1144.m_HorizontalAdvance = i1145[4]
  return i1144
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1147 = data
  i1146.m_X = i1147[0]
  i1146.m_Y = i1147[1]
  i1146.m_Width = i1147[2]
  i1146.m_Height = i1147[3]
  return i1146
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_Character' )
  var i1151 = data
  i1150.m_ElementType = i1151[0]
  i1150.m_Unicode = i1151[1]
  i1150.m_GlyphIndex = i1151[2]
  i1150.m_Scale = i1151[3]
  return i1150
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('TMPro.MultipleSubstitutionRecord', i1159[i + 0]));
  }
  i1156.m_MultipleSubstitutionRecords = i1158
  var i1161 = i1157[1]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.LigatureSubstitutionRecord', i1161[i + 0]));
  }
  i1156.m_LigatureSubstitutionRecords = i1160
  var i1163 = i1157[2]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1163[i + 0]));
  }
  i1156.m_GlyphPairAdjustmentRecords = i1162
  var i1165 = i1157[3]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1165[i + 0]));
  }
  i1156.m_MarkToBaseAdjustmentRecords = i1164
  var i1167 = i1157[4]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1167[i + 0]));
  }
  i1156.m_MarkToMarkAdjustmentRecords = i1166
  return i1156
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1171 = data
  i1170.m_TargetGlyphID = i1171[0]
  i1170.m_SubstituteGlyphIDs = i1171[1]
  return i1170
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1175 = data
  i1174.m_ComponentGlyphIDs = i1175[0]
  i1174.m_LigatureGlyphID = i1175[1]
  return i1174
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1179 = data
  i1178.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1179[0], i1178.m_FirstAdjustmentRecord)
  i1178.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1179[1], i1178.m_SecondAdjustmentRecord)
  i1178.m_FeatureLookupFlags = i1179[2]
  return i1178
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1183 = data
  i1182.m_BaseGlyphID = i1183[0]
  i1182.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1183[1], i1182.m_BaseGlyphAnchorPoint)
  i1182.m_MarkGlyphID = i1183[2]
  i1182.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1183[3], i1182.m_MarkPositionAdjustment)
  return i1182
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1187 = data
  i1186.m_BaseMarkGlyphID = i1187[0]
  i1186.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1187[1], i1186.m_BaseMarkGlyphAnchorPoint)
  i1186.m_CombiningMarkGlyphID = i1187[2]
  i1186.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1187[3], i1186.m_CombiningMarkPositionAdjustment)
  return i1186
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'regularTypeface')
  request.r(i1193[2], i1193[3], 0, i1192, 'italicTypeface')
  return i1192
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1195 = data
  i1194.Name = i1195[0]
  i1194.PointSize = i1195[1]
  i1194.Scale = i1195[2]
  i1194.CharacterCount = i1195[3]
  i1194.LineHeight = i1195[4]
  i1194.Baseline = i1195[5]
  i1194.Ascender = i1195[6]
  i1194.CapHeight = i1195[7]
  i1194.Descender = i1195[8]
  i1194.CenterLine = i1195[9]
  i1194.SuperscriptOffset = i1195[10]
  i1194.SubscriptOffset = i1195[11]
  i1194.SubSize = i1195[12]
  i1194.Underline = i1195[13]
  i1194.UnderlineThickness = i1195[14]
  i1194.strikethrough = i1195[15]
  i1194.strikethroughThickness = i1195[16]
  i1194.TabWidth = i1195[17]
  i1194.Padding = i1195[18]
  i1194.AtlasWidth = i1195[19]
  i1194.AtlasHeight = i1195[20]
  return i1194
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.x = i1199[1]
  i1198.y = i1199[2]
  i1198.width = i1199[3]
  i1198.height = i1199[4]
  i1198.xOffset = i1199[5]
  i1198.yOffset = i1199[6]
  i1198.xAdvance = i1199[7]
  i1198.scale = i1199[8]
  return i1198
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.KerningTable' )
  var i1201 = data
  var i1203 = i1201[0]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('TMPro.KerningPair', i1203[i + 0]));
  }
  i1200.kerningPairs = i1202
  return i1200
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.KerningPair' )
  var i1207 = data
  i1206.xOffset = i1207[0]
  i1206.m_FirstGlyph = i1207[1]
  i1206.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1207[2], i1206.m_FirstGlyphAdjustments)
  i1206.m_SecondGlyph = i1207[3]
  i1206.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1207[4], i1206.m_SecondGlyphAdjustments)
  i1206.m_IgnoreSpacingAdjustments = !!i1207[5]
  return i1206
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1209 = data
  i1208.m_FaceIndex = i1209[0]
  i1208.m_FamilyName = i1209[1]
  i1208.m_StyleName = i1209[2]
  i1208.m_PointSize = i1209[3]
  i1208.m_Scale = i1209[4]
  i1208.m_UnitsPerEM = i1209[5]
  i1208.m_LineHeight = i1209[6]
  i1208.m_AscentLine = i1209[7]
  i1208.m_CapLine = i1209[8]
  i1208.m_MeanLine = i1209[9]
  i1208.m_Baseline = i1209[10]
  i1208.m_DescentLine = i1209[11]
  i1208.m_SuperscriptOffset = i1209[12]
  i1208.m_SuperscriptSize = i1209[13]
  i1208.m_SubscriptOffset = i1209[14]
  i1208.m_SubscriptSize = i1209[15]
  i1208.m_UnderlineOffset = i1209[16]
  i1208.m_UnderlineThickness = i1209[17]
  i1208.m_StrikethroughOffset = i1209[18]
  i1208.m_StrikethroughThickness = i1209[19]
  i1208.m_TabWidth = i1209[20]
  return i1208
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1211 = data
  i1210.useSafeMode = !!i1211[0]
  i1210.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1211[1], i1210.safeModeOptions)
  i1210.timeScale = i1211[2]
  i1210.unscaledTimeScale = i1211[3]
  i1210.useSmoothDeltaTime = !!i1211[4]
  i1210.maxSmoothUnscaledTime = i1211[5]
  i1210.rewindCallbackMode = i1211[6]
  i1210.showUnityEditorReport = !!i1211[7]
  i1210.logBehaviour = i1211[8]
  i1210.drawGizmos = !!i1211[9]
  i1210.defaultRecyclable = !!i1211[10]
  i1210.defaultAutoPlay = i1211[11]
  i1210.defaultUpdateType = i1211[12]
  i1210.defaultTimeScaleIndependent = !!i1211[13]
  i1210.defaultEaseType = i1211[14]
  i1210.defaultEaseOvershootOrAmplitude = i1211[15]
  i1210.defaultEasePeriod = i1211[16]
  i1210.defaultAutoKill = !!i1211[17]
  i1210.defaultLoopType = i1211[18]
  i1210.debugMode = !!i1211[19]
  i1210.debugStoreTargetId = !!i1211[20]
  i1210.showPreviewPanel = !!i1211[21]
  i1210.storeSettingsLocation = i1211[22]
  i1210.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1211[23], i1210.modules)
  i1210.createASMDEF = !!i1211[24]
  i1210.showPlayingTweens = !!i1211[25]
  i1210.showPausedTweens = !!i1211[26]
  return i1210
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1212 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1213 = data
  i1212.logBehaviour = i1213[0]
  i1212.nestedTweenFailureBehaviour = i1213[1]
  return i1212
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1214 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1215 = data
  i1214.showPanel = !!i1215[0]
  i1214.audioEnabled = !!i1215[1]
  i1214.physicsEnabled = !!i1215[2]
  i1214.physics2DEnabled = !!i1215[3]
  i1214.spriteEnabled = !!i1215[4]
  i1214.uiEnabled = !!i1215[5]
  i1214.uiToolkitEnabled = !!i1215[6]
  i1214.textMeshProEnabled = !!i1215[7]
  i1214.tk2DEnabled = !!i1215[8]
  i1214.deAudioEnabled = !!i1215[9]
  i1214.deUnityExtendedEnabled = !!i1215[10]
  i1214.epoOutlineEnabled = !!i1215[11]
  return i1214
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Settings' )
  var i1217 = data
  i1216.assetVersion = i1217[0]
  i1216.m_TextWrappingMode = i1217[1]
  i1216.m_enableKerning = !!i1217[2]
  var i1219 = i1217[3]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(i1219[i + 0]);
  }
  i1216.m_ActiveFontFeatures = i1218
  i1216.m_enableExtraPadding = !!i1217[4]
  i1216.m_enableTintAllSprites = !!i1217[5]
  i1216.m_enableParseEscapeCharacters = !!i1217[6]
  i1216.m_EnableRaycastTarget = !!i1217[7]
  i1216.m_GetFontFeaturesAtRuntime = !!i1217[8]
  i1216.m_missingGlyphCharacter = i1217[9]
  i1216.m_ClearDynamicDataOnBuild = !!i1217[10]
  i1216.m_warningsDisabled = !!i1217[11]
  request.r(i1217[12], i1217[13], 0, i1216, 'm_defaultFontAsset')
  i1216.m_defaultFontAssetPath = i1217[14]
  i1216.m_defaultFontSize = i1217[15]
  i1216.m_defaultAutoSizeMinRatio = i1217[16]
  i1216.m_defaultAutoSizeMaxRatio = i1217[17]
  i1216.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1217[18], i1217[19] )
  i1216.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1217[20], i1217[21] )
  i1216.m_autoSizeTextContainer = !!i1217[22]
  i1216.m_IsTextObjectScaleStatic = !!i1217[23]
  var i1221 = i1217[24]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 1, i1220, '')
  }
  i1216.m_fallbackFontAssets = i1220
  i1216.m_matchMaterialPreset = !!i1217[25]
  i1216.m_HideSubTextObjects = !!i1217[26]
  request.r(i1217[27], i1217[28], 0, i1216, 'm_defaultSpriteAsset')
  i1216.m_defaultSpriteAssetPath = i1217[29]
  i1216.m_enableEmojiSupport = !!i1217[30]
  i1216.m_MissingCharacterSpriteUnicode = i1217[31]
  var i1223 = i1217[32]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 1, i1222, '')
  }
  i1216.m_EmojiFallbackTextAssets = i1222
  i1216.m_defaultColorGradientPresetsPath = i1217[33]
  request.r(i1217[34], i1217[35], 0, i1216, 'm_defaultStyleSheet')
  i1216.m_StyleSheetsResourcePath = i1217[36]
  request.r(i1217[37], i1217[38], 0, i1216, 'm_leadingCharacters')
  request.r(i1217[39], i1217[40], 0, i1216, 'm_followingCharacters')
  i1216.m_UseModernHangulLineBreakingRules = !!i1217[41]
  return i1216
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'spriteSheet')
  var i1229 = i1227[2]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.TMP_Sprite', i1229[i + 0]));
  }
  i1226.spriteInfoList = i1228
  var i1231 = i1227[3]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1226.fallbackSpriteAssets = i1230
  var i1233 = i1227[4]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_SpriteCharacter', i1233[i + 0]));
  }
  i1226.m_SpriteCharacterTable = i1232
  var i1235 = i1227[5]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.TMP_SpriteGlyph', i1235[i + 0]));
  }
  i1226.m_GlyphTable = i1234
  i1226.m_Version = i1227[6]
  i1226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1227[7], i1226.m_FaceInfo)
  request.r(i1227[8], i1227[9], 0, i1226, 'm_Material')
  return i1226
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.hashCode = i1239[1]
  i1238.unicode = i1239[2]
  i1238.pivot = new pc.Vec2( i1239[3], i1239[4] )
  request.r(i1239[5], i1239[6], 0, i1238, 'sprite')
  i1238.id = i1239[7]
  i1238.x = i1239[8]
  i1238.y = i1239[9]
  i1238.width = i1239[10]
  i1238.height = i1239[11]
  i1238.xOffset = i1239[12]
  i1238.yOffset = i1239[13]
  i1238.xAdvance = i1239[14]
  i1238.scale = i1239[15]
  return i1238
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1245 = data
  i1244.m_Name = i1245[0]
  i1244.m_ElementType = i1245[1]
  i1244.m_Unicode = i1245[2]
  i1244.m_GlyphIndex = i1245[3]
  i1244.m_Scale = i1245[4]
  return i1244
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'sprite')
  i1248.m_Index = i1249[2]
  i1248.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1249[3], i1248.m_Metrics)
  i1248.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1249[4], i1248.m_GlyphRect)
  i1248.m_Scale = i1249[5]
  i1248.m_AtlasIndex = i1249[6]
  i1248.m_ClassDefinitionType = i1249[7]
  return i1248
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_Style', i1253[i + 0]));
  }
  i1250.m_StyleList = i1252
  return i1250
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_Style' )
  var i1257 = data
  i1256.m_Name = i1257[0]
  i1256.m_HashCode = i1257[1]
  i1256.m_OpeningDefinition = i1257[2]
  i1256.m_ClosingDefinition = i1257[3]
  i1256.m_OpeningTagArray = i1257[4]
  i1256.m_ClosingTagArray = i1257[5]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1261[i + 0]) );
  }
  i1258.files = i1260
  i1258.componentToPrefabIds = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1265 = data
  i1264.path = i1265[0]
  request.r(i1265[1], i1265[2], 0, i1264, 'unityObject')
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1269[i + 0]) );
  }
  i1266.scriptsExecutionOrder = i1268
  var i1271 = i1267[1]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1271[i + 0]) );
  }
  i1266.sortingLayers = i1270
  var i1273 = i1267[2]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1273[i + 0]) );
  }
  i1266.cullingLayers = i1272
  i1266.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1267[3], i1266.timeSettings)
  i1266.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1267[4], i1266.physicsSettings)
  i1266.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1267[5], i1266.physics2DSettings)
  i1266.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1267[6], i1266.qualitySettings)
  i1266.enableRealtimeShadows = !!i1267[7]
  i1266.enableAutoInstancing = !!i1267[8]
  i1266.enableStaticBatching = !!i1267[9]
  i1266.enableDynamicBatching = !!i1267[10]
  i1266.lightmapEncodingQuality = i1267[11]
  i1266.desiredColorSpace = i1267[12]
  var i1275 = i1267[13]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1266.allTags = i1274
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.value = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1283 = data
  i1282.id = i1283[0]
  i1282.name = i1283[1]
  i1282.value = i1283[2]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.name = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1289 = data
  i1288.fixedDeltaTime = i1289[0]
  i1288.maximumDeltaTime = i1289[1]
  i1288.timeScale = i1289[2]
  i1288.maximumParticleTimestep = i1289[3]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1291 = data
  i1290.gravity = new pc.Vec3( i1291[0], i1291[1], i1291[2] )
  i1290.defaultSolverIterations = i1291[3]
  i1290.bounceThreshold = i1291[4]
  i1290.autoSyncTransforms = !!i1291[5]
  i1290.autoSimulation = !!i1291[6]
  var i1293 = i1291[7]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1293[i + 0]) );
  }
  i1290.collisionMatrix = i1292
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1297 = data
  i1296.enabled = !!i1297[0]
  i1296.layerId = i1297[1]
  i1296.otherLayerId = i1297[2]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'material')
  i1298.gravity = new pc.Vec2( i1299[2], i1299[3] )
  i1298.positionIterations = i1299[4]
  i1298.velocityIterations = i1299[5]
  i1298.velocityThreshold = i1299[6]
  i1298.maxLinearCorrection = i1299[7]
  i1298.maxAngularCorrection = i1299[8]
  i1298.maxTranslationSpeed = i1299[9]
  i1298.maxRotationSpeed = i1299[10]
  i1298.baumgarteScale = i1299[11]
  i1298.baumgarteTOIScale = i1299[12]
  i1298.timeToSleep = i1299[13]
  i1298.linearSleepTolerance = i1299[14]
  i1298.angularSleepTolerance = i1299[15]
  i1298.defaultContactOffset = i1299[16]
  i1298.autoSimulation = !!i1299[17]
  i1298.queriesHitTriggers = !!i1299[18]
  i1298.queriesStartInColliders = !!i1299[19]
  i1298.callbacksOnDisable = !!i1299[20]
  i1298.reuseCollisionCallbacks = !!i1299[21]
  i1298.autoSyncTransforms = !!i1299[22]
  var i1301 = i1299[23]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1301[i + 0]) );
  }
  i1298.collisionMatrix = i1300
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1305 = data
  i1304.enabled = !!i1305[0]
  i1304.layerId = i1305[1]
  i1304.otherLayerId = i1305[2]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1309[i + 0]) );
  }
  i1306.qualityLevels = i1308
  var i1311 = i1307[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( i1311[i + 0] );
  }
  i1306.names = i1310
  i1306.shadows = i1307[2]
  i1306.anisotropicFiltering = i1307[3]
  i1306.antiAliasing = i1307[4]
  i1306.lodBias = i1307[5]
  i1306.shadowCascades = i1307[6]
  i1306.shadowDistance = i1307[7]
  i1306.shadowmaskMode = i1307[8]
  i1306.shadowProjection = i1307[9]
  i1306.shadowResolution = i1307[10]
  i1306.softParticles = !!i1307[11]
  i1306.softVegetation = !!i1307[12]
  i1306.activeColorSpace = i1307[13]
  i1306.desiredColorSpace = i1307[14]
  i1306.masterTextureLimit = i1307[15]
  i1306.maxQueuedFrames = i1307[16]
  i1306.particleRaycastBudget = i1307[17]
  i1306.pixelLightCount = i1307[18]
  i1306.realtimeReflectionProbes = !!i1307[19]
  i1306.shadowCascade2Split = i1307[20]
  i1306.shadowCascade4Split = new pc.Vec3( i1307[21], i1307[22], i1307[23] )
  i1306.streamingMipmapsActive = !!i1307[24]
  i1306.vSyncCount = i1307[25]
  i1306.asyncUploadBufferSize = i1307[26]
  i1306.asyncUploadTimeSlice = i1307[27]
  i1306.billboardsFaceCameraPosition = !!i1307[28]
  i1306.shadowNearPlaneOffset = i1307[29]
  i1306.streamingMipmapsMemoryBudget = i1307[30]
  i1306.maximumLODLevel = i1307[31]
  i1306.streamingMipmapsAddAllCameras = !!i1307[32]
  i1306.streamingMipmapsMaxLevelReduction = i1307[33]
  i1306.streamingMipmapsRenderersPerFrame = i1307[34]
  i1306.resolutionScalingFixedDPIFactor = i1307[35]
  i1306.streamingMipmapsMaxFileIORequests = i1307[36]
  i1306.currentQualityLevel = i1307[37]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1317 = data
  i1316.mode = i1317[0]
  i1316.parameter = i1317[1]
  i1316.threshold = i1317[2]
  return i1316
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1319 = data
  i1318.m_GlyphIndex = i1319[0]
  i1318.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1319[1], i1318.m_GlyphValueRecord)
  return i1318
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1321 = data
  i1320.m_XCoordinate = i1321[0]
  i1320.m_YCoordinate = i1321[1]
  return i1320
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1323 = data
  i1322.m_XPositionAdjustment = i1323[0]
  i1322.m_YPositionAdjustment = i1323[1]
  return i1322
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1325 = data
  i1324.xPlacement = i1325[0]
  i1324.yPlacement = i1325[1]
  i1324.xAdvance = i1325[2]
  i1324.yAdvance = i1325[3]
  return i1324
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1327 = data
  i1326.m_XPlacement = i1327[0]
  i1326.m_YPlacement = i1327[1]
  i1326.m_XAdvance = i1327[2]
  i1326.m_YAdvance = i1327[3]
  return i1326
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[21],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[21],"92":[93],"94":[95],"96":[95],"20":[14],"97":[98],"51":[98],"99":[98],"100":[98],"101":[98],"102":[14],"103":[17,14],"104":[93],"105":[17,14],"106":[24,93],"107":[93],"108":[93,109],"110":[71],"111":[78],"112":[113],"114":[115],"116":[5],"117":[21],"118":[119],"120":[41],"121":[20],"122":[14],"123":[93,14],"26":[14,17],"124":[14],"125":[17,14],"126":[93],"127":[17,14],"128":[14],"129":[130],"131":[130],"132":[130],"133":[14],"134":[14],"23":[20],"16":[17,14],"135":[14],"22":[20],"136":[14],"137":[14],"138":[14],"139":[14],"140":[14],"141":[14],"142":[14],"143":[14],"144":[14],"145":[17,14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[17,14],"151":[14],"152":[41],"153":[41],"42":[41],"154":[41],"155":[21],"156":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","SortChildByZPos","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Ply_ToggleEvent","Sink","InWaterItem","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Item","SinkBlock","ItemDraggable","ItemMoveToTarget","Ply_BobEffect","Ply_TimerEvent","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ItemClickable","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "10.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v57_Smorrebrod";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1769";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4936";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

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

Deserializers.buildID = "91111f38-70a4-454e-86fe-22918d0fec54";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

