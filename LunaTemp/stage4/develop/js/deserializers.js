var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSpring' )
  var i683 = data
  i682.spring = i683[0]
  i682.damper = i683[1]
  i682.targetPosition = i683[2]
  return i682
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor' )
  var i685 = data
  i684.m_TargetVelocity = i685[0]
  i684.m_Force = i685[1]
  i684.m_FreeSpin = i685[2]
  return i684
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointLimits' )
  var i687 = data
  i686.m_Min = i687[0]
  i686.m_Max = i687[1]
  i686.m_Bounciness = i687[2]
  i686.m_BounceMinVelocity = i687[3]
  i686.m_ContactDistance = i687[4]
  i686.minBounce = i687[5]
  i686.maxBounce = i687[6]
  return i686
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointDrive' )
  var i689 = data
  i688.m_PositionSpring = i689[0]
  i688.m_PositionDamper = i689[1]
  i688.m_MaximumForce = i689[2]
  i688.m_UseAcceleration = i689[3]
  return i688
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i691 = data
  i690.m_Spring = i691[0]
  i690.m_Damper = i691[1]
  return i690
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i693 = data
  i692.m_Limit = i693[0]
  i692.m_Bounciness = i693[1]
  i692.m_ContactDistance = i693[2]
  return i692
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i695 = data
  i694.m_ExtremumSlip = i695[0]
  i694.m_ExtremumValue = i695[1]
  i694.m_AsymptoteSlip = i695[2]
  i694.m_AsymptoteValue = i695[3]
  i694.m_Stiffness = i695[4]
  return i694
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i697 = data
  i696.m_LowerAngle = i697[0]
  i696.m_UpperAngle = i697[1]
  return i696
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i699 = data
  i698.m_MotorSpeed = i699[0]
  i698.m_MaximumMotorTorque = i699[1]
  return i698
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i701 = data
  i700.m_DampingRatio = i701[0]
  i700.m_Frequency = i701[1]
  i700.m_Angle = i701[2]
  return i700
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i703 = data
  i702.m_LowerTranslation = i703[0]
  i702.m_UpperTranslation = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i704 = root || new pc.UnityMaterial()
  var i705 = data
  i704.name = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'shader')
  i704.renderQueue = i705[3]
  i704.enableInstancing = !!i705[4]
  var i707 = i705[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i707[i + 0]) );
  }
  i704.floatParameters = i706
  var i709 = i705[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i709[i + 0]) );
  }
  i704.colorParameters = i708
  var i711 = i705[7]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i711[i + 0]) );
  }
  i704.vectorParameters = i710
  var i713 = i705[8]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i713[i + 0]) );
  }
  i704.textureParameters = i712
  var i715 = i705[9]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i715[i + 0]) );
  }
  i704.materialFlags = i714
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i723 = data
  i722.name = i723[0]
  i722.value = new pc.Color(i723[1], i723[2], i723[3], i723[4])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i727 = data
  i726.name = i727[0]
  i726.value = new pc.Vec4( i727[1], i727[2], i727[3], i727[4] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i731 = data
  i730.name = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'value')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i735 = data
  i734.name = i735[0]
  i734.enabled = !!i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i737 = data
  i736.name = i737[0]
  i736.width = i737[1]
  i736.height = i737[2]
  i736.mipmapCount = i737[3]
  i736.anisoLevel = i737[4]
  i736.filterMode = i737[5]
  i736.hdr = !!i737[6]
  i736.format = i737[7]
  i736.wrapMode = i737[8]
  i736.alphaIsTransparency = !!i737[9]
  i736.alphaSource = i737[10]
  i736.graphicsFormat = i737[11]
  i736.sRGBTexture = !!i737[12]
  i736.desiredColorSpace = i737[13]
  i736.wrapU = i737[14]
  i736.wrapV = i737[15]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i739 = data
  i738.position = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.scale = new pc.Vec3( i739[3], i739[4], i739[5] )
  i738.rotation = new pc.Quat(i739[6], i739[7], i739[8], i739[9])
  return i738
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i740 = root || request.c( 'HeartEffect' )
  var i741 = data
  i740.defaultLifeTime = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'tf')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i743 = data
  i742.color = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  request.r(i743[4], i743[5], 0, i742, 'sprite')
  i742.flipX = !!i743[6]
  i742.flipY = !!i743[7]
  i742.drawMode = i743[8]
  i742.size = new pc.Vec2( i743[9], i743[10] )
  i742.tileMode = i743[11]
  i742.adaptiveModeThreshold = i743[12]
  i742.maskInteraction = i743[13]
  i742.spriteSortPoint = i743[14]
  i742.enabled = !!i743[15]
  request.r(i743[16], i743[17], 0, i742, 'sharedMaterial')
  var i745 = i743[18]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.sharedMaterials = i744
  i742.receiveShadows = !!i743[19]
  i742.shadowCastingMode = i743[20]
  i742.sortingLayerID = i743[21]
  i742.sortingOrder = i743[22]
  i742.lightmapIndex = i743[23]
  i742.lightmapSceneIndex = i743[24]
  i742.lightmapScaleOffset = new pc.Vec4( i743[25], i743[26], i743[27], i743[28] )
  i742.lightProbeUsage = i743[29]
  i742.reflectionProbeUsage = i743[30]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i749 = data
  i748.name = i749[0]
  i748.tagId = i749[1]
  i748.enabled = !!i749[2]
  i748.isStatic = !!i749[3]
  i748.layer = i749[4]
  return i748
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i750 = root || request.c( 'HeartBreakEffect' )
  var i751 = data
  i750.defaultLifeTime = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'tf')
  return i750
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i752 = root || request.c( 'BlinkEffect' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'tf')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'mesh')
  i754.meshCount = i755[2]
  i754.activeVertexStreamsCount = i755[3]
  i754.alignment = i755[4]
  i754.renderMode = i755[5]
  i754.sortMode = i755[6]
  i754.lengthScale = i755[7]
  i754.velocityScale = i755[8]
  i754.cameraVelocityScale = i755[9]
  i754.normalDirection = i755[10]
  i754.sortingFudge = i755[11]
  i754.minParticleSize = i755[12]
  i754.maxParticleSize = i755[13]
  i754.pivot = new pc.Vec3( i755[14], i755[15], i755[16] )
  request.r(i755[17], i755[18], 0, i754, 'trailMaterial')
  i754.applyActiveColorSpace = !!i755[19]
  i754.enabled = !!i755[20]
  request.r(i755[21], i755[22], 0, i754, 'sharedMaterial')
  var i757 = i755[23]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sharedMaterials = i756
  i754.receiveShadows = !!i755[24]
  i754.shadowCastingMode = i755[25]
  i754.sortingLayerID = i755[26]
  i754.sortingOrder = i755[27]
  i754.lightmapIndex = i755[28]
  i754.lightmapSceneIndex = i755[29]
  i754.lightmapScaleOffset = new pc.Vec4( i755[30], i755[31], i755[32], i755[33] )
  i754.lightProbeUsage = i755[34]
  i754.reflectionProbeUsage = i755[35]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i759 = data
  i758.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i759[0], i758.main)
  i758.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i759[1], i758.colorBySpeed)
  i758.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i759[2], i758.colorOverLifetime)
  i758.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i759[3], i758.emission)
  i758.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i759[4], i758.rotationBySpeed)
  i758.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i759[5], i758.rotationOverLifetime)
  i758.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i759[6], i758.shape)
  i758.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i759[7], i758.sizeBySpeed)
  i758.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i759[8], i758.sizeOverLifetime)
  i758.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i759[9], i758.textureSheetAnimation)
  i758.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i759[10], i758.velocityOverLifetime)
  i758.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i759[11], i758.noise)
  i758.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i759[12], i758.inheritVelocity)
  i758.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i759[13], i758.forceOverLifetime)
  i758.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i759[14], i758.limitVelocityOverLifetime)
  i758.useAutoRandomSeed = !!i759[15]
  i758.randomSeed = i759[16]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemMain()
  var i761 = data
  i760.duration = i761[0]
  i760.loop = !!i761[1]
  i760.prewarm = !!i761[2]
  i760.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.startDelay)
  i760.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.startLifetime)
  i760.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.startSpeed)
  i760.startSize3D = !!i761[6]
  i760.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.startSizeX)
  i760.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.startSizeY)
  i760.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.startSizeZ)
  i760.startRotation3D = !!i761[10]
  i760.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.startRotationX)
  i760.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[12], i760.startRotationY)
  i760.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[13], i760.startRotationZ)
  i760.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i761[14], i760.startColor)
  i760.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[15], i760.gravityModifier)
  i760.simulationSpace = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'customSimulationSpace')
  i760.simulationSpeed = i761[19]
  i760.useUnscaledTime = !!i761[20]
  i760.scalingMode = i761[21]
  i760.playOnAwake = !!i761[22]
  i760.maxParticles = i761[23]
  i760.emitterVelocityMode = i761[24]
  i760.stopAction = i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxCurve()
  var i763 = data
  i762.mode = i763[0]
  i762.curveMin = new pc.AnimationCurve( { keys_flow: i763[1] } )
  i762.curveMax = new pc.AnimationCurve( { keys_flow: i763[2] } )
  i762.curveMultiplier = i763[3]
  i762.constantMin = i763[4]
  i762.constantMax = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxGradient()
  var i765 = data
  i764.mode = i765[0]
  i764.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[1], i764.gradientMin)
  i764.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[2], i764.gradientMax)
  i764.colorMin = new pc.Color(i765[3], i765[4], i765[5], i765[6])
  i764.colorMax = new pc.Color(i765[7], i765[8], i765[9], i765[10])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i767 = data
  i766.mode = i767[0]
  var i769 = i767[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i769[i + 0]) );
  }
  i766.colorKeys = i768
  var i771 = i767[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i771[i + 0]) );
  }
  i766.alphaKeys = i770
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemColorBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[1], i772.color)
  i772.range = new pc.Vec2( i773[2], i773[3] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i777 = data
  i776.color = new pc.Color(i777[0], i777[1], i777[2], i777[3])
  i776.time = i777[4]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i781 = data
  i780.alpha = i781[0]
  i780.time = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemEmitter()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.rateOverTime)
  i784.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.rateOverDistance)
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i787[i + 0]) );
  }
  i784.bursts = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemBurst()
  var i791 = data
  i790.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[0], i790.count)
  i790.cycleCount = i791[1]
  i790.minCount = i791[2]
  i790.maxCount = i791[3]
  i790.repeatInterval = i791[4]
  i790.time = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  i792.range = new pc.Vec2( i793[5], i793[6] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemShape()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.shapeType = i797[1]
  i796.randomDirectionAmount = i797[2]
  i796.sphericalDirectionAmount = i797[3]
  i796.randomPositionAmount = i797[4]
  i796.alignToDirection = !!i797[5]
  i796.radius = i797[6]
  i796.radiusMode = i797[7]
  i796.radiusSpread = i797[8]
  i796.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[9], i796.radiusSpeed)
  i796.radiusThickness = i797[10]
  i796.angle = i797[11]
  i796.length = i797[12]
  i796.boxThickness = new pc.Vec3( i797[13], i797[14], i797[15] )
  i796.meshShapeType = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'mesh')
  request.r(i797[19], i797[20], 0, i796, 'meshRenderer')
  request.r(i797[21], i797[22], 0, i796, 'skinnedMeshRenderer')
  i796.useMeshMaterialIndex = !!i797[23]
  i796.meshMaterialIndex = i797[24]
  i796.useMeshColors = !!i797[25]
  i796.normalOffset = i797[26]
  i796.arc = i797[27]
  i796.arcMode = i797[28]
  i796.arcSpread = i797[29]
  i796.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[30], i796.arcSpeed)
  i796.donutRadius = i797[31]
  i796.position = new pc.Vec3( i797[32], i797[33], i797[34] )
  i796.rotation = new pc.Vec3( i797[35], i797[36], i797[37] )
  i796.scale = new pc.Vec3( i797[38], i797[39], i797[40] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.mode = i803[1]
  i802.animation = i803[2]
  i802.numTilesX = i803[3]
  i802.numTilesY = i803[4]
  i802.useRandomRow = !!i803[5]
  i802.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[6], i802.frameOverTime)
  i802.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.startFrame)
  i802.cycleCount = i803[8]
  i802.rowIndex = i803[9]
  i802.flipU = i803[10]
  i802.flipV = i803[11]
  i802.spriteCount = i803[12]
  var i805 = i803[13]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sprites = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.radial)
  i808.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[5], i808.speedModifier)
  i808.space = i809[6]
  i808.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.orbitalX)
  i808.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.orbitalY)
  i808.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.orbitalZ)
  i808.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[10], i808.orbitalOffsetX)
  i808.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.orbitalOffsetY)
  i808.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[12], i808.orbitalOffsetZ)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemNoise()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.separateAxes = !!i811[1]
  i810.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.strengthX)
  i810.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.strengthY)
  i810.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.strengthZ)
  i810.frequency = i811[5]
  i810.damping = !!i811[6]
  i810.octaveCount = i811[7]
  i810.octaveMultiplier = i811[8]
  i810.octaveScale = i811[9]
  i810.quality = i811[10]
  i810.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.scrollSpeed)
  i810.scrollSpeedMultiplier = i811[12]
  i810.remapEnabled = !!i811[13]
  i810.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[14], i810.remapX)
  i810.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[15], i810.remapY)
  i810.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[16], i810.remapZ)
  i810.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[17], i810.positionAmount)
  i810.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[18], i810.rotationAmount)
  i810.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[19], i810.sizeAmount)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemInheritVelocity()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.mode = i813[1]
  i812.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.curve)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemForceOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.space = i815[4]
  i814.randomized = !!i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.limit)
  i816.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.limitX)
  i816.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.limitY)
  i816.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.limitZ)
  i816.dampen = i817[5]
  i816.separateAxes = !!i817[6]
  i816.space = i817[7]
  i816.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.drag)
  i816.multiplyDragByParticleSize = !!i817[9]
  i816.multiplyDragByParticleVelocity = !!i817[10]
  return i816
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i818 = root || request.c( 'StarExploreFX' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'tf')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i821 = data
  i820.pivot = new pc.Vec2( i821[0], i821[1] )
  i820.anchorMin = new pc.Vec2( i821[2], i821[3] )
  i820.anchorMax = new pc.Vec2( i821[4], i821[5] )
  i820.sizeDelta = new pc.Vec2( i821[6], i821[7] )
  i820.anchoredPosition3D = new pc.Vec3( i821[8], i821[9], i821[10] )
  i820.rotation = new pc.Quat(i821[11], i821[12], i821[13], i821[14])
  i820.scale = new pc.Vec3( i821[15], i821[16], i821[17] )
  return i820
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i822 = root || request.c( 'ClockTimer' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'fillImage')
  request.r(i823[2], i823[3], 0, i822, 'tf')
  i822.spawnZoomDuration = i823[4]
  i822.despawnZoomDuration = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i825 = data
  i824.cullTransparentMesh = !!i825[0]
  return i824
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.Image' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_Sprite')
  i826.m_Type = i827[2]
  i826.m_PreserveAspect = !!i827[3]
  i826.m_FillCenter = !!i827[4]
  i826.m_FillMethod = i827[5]
  i826.m_FillAmount = i827[6]
  i826.m_FillClockwise = !!i827[7]
  i826.m_FillOrigin = i827[8]
  i826.m_UseSpriteMesh = !!i827[9]
  i826.m_PixelsPerUnitMultiplier = i827[10]
  request.r(i827[11], i827[12], 0, i826, 'm_Material')
  i826.m_Maskable = !!i827[13]
  i826.m_Color = new pc.Color(i827[14], i827[15], i827[16], i827[17])
  i826.m_RaycastTarget = !!i827[18]
  i826.m_RaycastPadding = new pc.Vec4( i827[19], i827[20], i827[21], i827[22] )
  return i826
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i828 = root || request.c( 'WaterSplash' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'tf')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i831 = data
  i830.center = new pc.Vec3( i831[0], i831[1], i831[2] )
  i830.radius = i831[3]
  i830.enabled = !!i831[4]
  i830.isTrigger = !!i831[5]
  request.r(i831[6], i831[7], 0, i830, 'material')
  return i830
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i832 = root || request.c( 'ItemDraggable' )
  var i833 = data
  i832.isDraggable = !!i833[0]
  request.r(i833[1], i833[2], 0, i832, 'returnTransform')
  i832.setParentToReturnTransform = !!i833[3]
  i832.returnToStartOnDragFailed = !!i833[4]
  i832.returnToExactReturnTransformPosition = !!i833[5]
  i832.cacheStartPosWhenStart = !!i833[6]
  i832.targetItemType = i833[7]
  request.r(i833[8], i833[9], 0, i832, 'item')
  i832.checkState = !!i833[10]
  request.r(i833[11], i833[12], 0, i832, 'shadowObject')
  i832.playReturnToStartFinishSound = !!i833[13]
  i832.returnToStartFinishFxType = i833[14]
  i832.spawnBreakHeartOnDropFail = !!i833[15]
  i832.playBeginDragSound = !!i833[16]
  i832.beginDragFxType = i833[17]
  i832.liftOffset = i833[18]
  i832.dragScaleMultiplier = i833[19]
  i832.dragScaleDuration = i833[20]
  i832.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i833[21], i832.onBeginDrag)
  i832.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i833[22], i832.onDropSuccess)
  i832.onDropFail = request.d('UnityEngine.Events.UnityEvent', i833[23], i832.onDropFail)
  i832.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i833[24], i832.onReturnToStartComplete)
  return i832
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i835 = data
  i834.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i835[0], i834.m_PersistentCalls)
  return i834
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('UnityEngine.Events.PersistentCall', i839[i + 0]));
  }
  i836.m_Calls = i838
  return i836
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Target')
  i842.m_TargetAssemblyTypeName = i843[2]
  i842.m_MethodName = i843[3]
  i842.m_Mode = i843[4]
  i842.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i843[5], i842.m_Arguments)
  i842.m_CallState = i843[6]
  return i842
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_ObjectArgument')
  i844.m_ObjectArgumentAssemblyTypeName = i845[2]
  i844.m_IntArgument = i845[3]
  i844.m_FloatArgument = i845[4]
  i844.m_StringArgument = i845[5]
  i844.m_BoolArgument = !!i845[6]
  return i844
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i846 = root || request.c( 'ItemMoveToTarget' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'defaultTarget')
  i846.duration = i847[2]
  i846.useAnimationCurve = !!i847[3]
  i846.moveCurve = new pc.AnimationCurve( { keys_flow: i847[4] } )
  i846.easeType = i847[5]
  i846.moveType = i847[6]
  i846.jumpPower = i847[7]
  i846.numJumps = i847[8]
  i846.rotate360DuringJump = !!i847[9]
  i846.flipRotate = !!i847[10]
  i846.angleRotate = i847[11]
  i846.scaleOnMove = !!i847[12]
  i846.endScaleMultiplier = i847[13]
  i846.setParentToTarget = !!i847[14]
  i846.onComplete = request.d('UnityEngine.Events.UnityEvent', i847[15], i846.onComplete)
  i846.lockInputWhileMoving = !!i847[16]
  i846.resetParentBeforeMove = !!i847[17]
  return i846
}

Deserializers["Paper"] = function (request, data, root) {
  var i848 = root || request.c( 'Paper' )
  var i849 = data
  i848.isUse = !!i849[0]
  request.r(i849[1], i849[2], 0, i848, 'paper')
  request.r(i849[3], i849[4], 0, i848, 'paperTrash')
  request.r(i849[5], i849[6], 0, i848, 'itemDragRaycastTarget')
  request.r(i849[7], i849[8], 0, i848, 'curentCollider')
  i848.isDone = !!i849[9]
  i848.onProcess = !!i849[10]
  i848.requireMatchingTargetTypeForHandTut = !!i849[11]
  request.r(i849[12], i849[13], 0, i848, 'itemDraggable')
  request.r(i849[14], i849[15], 0, i848, 'itemClickable')
  request.r(i849[16], i849[17], 0, i848, 'itemStirring')
  request.r(i849[18], i849[19], 0, i848, 'itemKnifeSpriteMaskCutter')
  request.r(i849[20], i849[21], 0, i848, 'itemSpriteMaskPainter')
  request.r(i849[22], i849[23], 0, i848, 'itemDragSpriteMaskPainter')
  request.r(i849[24], i849[25], 0, i848, 'itemMoveToTarget')
  request.r(i849[26], i849[27], 0, i848, 'animator')
  i848.itemType = i849[28]
  request.r(i849[29], i849[30], 0, i848, 'spriteRenderer')
  i848.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i849[31], i848.onKnifeIn)
  request.r(i849[32], i849[33], 0, i848, 'knifePos')
  i848.heartEffectScale = i849[34]
  i848.breakHeartEffectScale = i849[35]
  i848.blinkEffectScale = i849[36]
  i848.mergeEffectScale = i849[37]
  i848.playMoveToTargetFinishSound = !!i849[38]
  i848.moveToTargetFinishFxType = i849[39]
  i848.fxSpawnZPos = i849[40]
  request.r(i849[41], i849[42], 0, i848, 'tf')
  return i848
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i850 = root || request.c( 'ItemDragRaycastTarget' )
  var i851 = data
  i850.targetToFind = i851[0]
  i850.targetItemTypeWhenHit = i851[1]
  i850.targetItemTypeOnDropFail = i851[2]
  request.r(i851[3], i851[4], 0, i850, 'raycastPoint')
  i850.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i851[5] )
  i850.rayDistance = i851[6]
  i850.updateMoveDefaultTarget = !!i851[7]
  i850.invokeOnlyWhenTargetChanged = !!i851[8]
  i850.targetChangeEnabled = !!i851[9]
  i850.restoreTargetOnDropFail = !!i851[10]
  i850.resetCurrentTargetOnNoHit = !!i851[11]
  i850.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i851[12], i850.onTargetFound)
  i850.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i851[13], i850.onTargetFoundWithItem)
  return i850
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i852 = root || request.c( 'ItemRaycastTargetEvent' )
  var i853 = data
  i852.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i853[0], i852.m_PersistentCalls)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'animatorController')
  request.r(i855[2], i855[3], 0, i854, 'avatar')
  i854.updateMode = i855[4]
  i854.hasTransformHierarchy = !!i855[5]
  i854.applyRootMotion = !!i855[6]
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.humanBones = i856
  i854.enabled = !!i855[8]
  return i854
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i860 = root || request.c( 'ItemSound' )
  var i861 = data
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i863 = data
  i862.name = i863[0]
  i862.index = i863[1]
  i862.startup = !!i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i865 = data
  i864.planeDistance = i865[0]
  i864.referencePixelsPerUnit = i865[1]
  i864.isFallbackOverlay = !!i865[2]
  i864.renderMode = i865[3]
  i864.renderOrder = i865[4]
  i864.sortingLayerName = i865[5]
  i864.sortingOrder = i865[6]
  i864.scaleFactor = i865[7]
  request.r(i865[8], i865[9], 0, i864, 'worldCamera')
  i864.overrideSorting = !!i865[10]
  i864.pixelPerfect = !!i865[11]
  i864.targetDisplay = i865[12]
  i864.overridePixelPerfect = !!i865[13]
  i864.enabled = !!i865[14]
  return i864
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i867 = data
  i866.m_UiScaleMode = i867[0]
  i866.m_ReferencePixelsPerUnit = i867[1]
  i866.m_ScaleFactor = i867[2]
  i866.m_ReferenceResolution = new pc.Vec2( i867[3], i867[4] )
  i866.m_ScreenMatchMode = i867[5]
  i866.m_MatchWidthOrHeight = i867[6]
  i866.m_PhysicalUnit = i867[7]
  i866.m_FallbackScreenDPI = i867[8]
  i866.m_DefaultSpriteDPI = i867[9]
  i866.m_DynamicPixelsPerUnit = i867[10]
  i866.m_PresetInfoIsWorld = !!i867[11]
  return i866
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i869 = data
  i868.m_IgnoreReversedGraphics = !!i869[0]
  i868.m_BlockingObjects = i869[1]
  i868.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i869[2] )
  return i868
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i871 = data
  i870.m_hasFontAssetChanged = !!i871[0]
  request.r(i871[1], i871[2], 0, i870, 'm_baseMaterial')
  i870.m_maskOffset = new pc.Vec4( i871[3], i871[4], i871[5], i871[6] )
  i870.m_text = i871[7]
  i870.m_isRightToLeft = !!i871[8]
  request.r(i871[9], i871[10], 0, i870, 'm_fontAsset')
  request.r(i871[11], i871[12], 0, i870, 'm_sharedMaterial')
  var i873 = i871[13]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.m_fontSharedMaterials = i872
  request.r(i871[14], i871[15], 0, i870, 'm_fontMaterial')
  var i875 = i871[16]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.m_fontMaterials = i874
  i870.m_fontColor32 = UnityEngine.Color32.ConstructColor(i871[17], i871[18], i871[19], i871[20])
  i870.m_fontColor = new pc.Color(i871[21], i871[22], i871[23], i871[24])
  i870.m_enableVertexGradient = !!i871[25]
  i870.m_colorMode = i871[26]
  i870.m_fontColorGradient = request.d('TMPro.VertexGradient', i871[27], i870.m_fontColorGradient)
  request.r(i871[28], i871[29], 0, i870, 'm_fontColorGradientPreset')
  request.r(i871[30], i871[31], 0, i870, 'm_spriteAsset')
  i870.m_tintAllSprites = !!i871[32]
  request.r(i871[33], i871[34], 0, i870, 'm_StyleSheet')
  i870.m_TextStyleHashCode = i871[35]
  i870.m_overrideHtmlColors = !!i871[36]
  i870.m_faceColor = UnityEngine.Color32.ConstructColor(i871[37], i871[38], i871[39], i871[40])
  i870.m_fontSize = i871[41]
  i870.m_fontSizeBase = i871[42]
  i870.m_fontWeight = i871[43]
  i870.m_enableAutoSizing = !!i871[44]
  i870.m_fontSizeMin = i871[45]
  i870.m_fontSizeMax = i871[46]
  i870.m_fontStyle = i871[47]
  i870.m_HorizontalAlignment = i871[48]
  i870.m_VerticalAlignment = i871[49]
  i870.m_textAlignment = i871[50]
  i870.m_characterSpacing = i871[51]
  i870.m_wordSpacing = i871[52]
  i870.m_lineSpacing = i871[53]
  i870.m_lineSpacingMax = i871[54]
  i870.m_paragraphSpacing = i871[55]
  i870.m_charWidthMaxAdj = i871[56]
  i870.m_TextWrappingMode = i871[57]
  i870.m_wordWrappingRatios = i871[58]
  i870.m_overflowMode = i871[59]
  request.r(i871[60], i871[61], 0, i870, 'm_linkedTextComponent')
  request.r(i871[62], i871[63], 0, i870, 'parentLinkedComponent')
  i870.m_enableKerning = !!i871[64]
  var i877 = i871[65]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(i877[i + 0]);
  }
  i870.m_ActiveFontFeatures = i876
  i870.m_enableExtraPadding = !!i871[66]
  i870.checkPaddingRequired = !!i871[67]
  i870.m_isRichText = !!i871[68]
  i870.m_parseCtrlCharacters = !!i871[69]
  i870.m_isOrthographic = !!i871[70]
  i870.m_isCullingEnabled = !!i871[71]
  i870.m_horizontalMapping = i871[72]
  i870.m_verticalMapping = i871[73]
  i870.m_uvLineOffset = i871[74]
  i870.m_geometrySortingOrder = i871[75]
  i870.m_IsTextObjectScaleStatic = !!i871[76]
  i870.m_VertexBufferAutoSizeReduction = !!i871[77]
  i870.m_useMaxVisibleDescender = !!i871[78]
  i870.m_pageToDisplay = i871[79]
  i870.m_margin = new pc.Vec4( i871[80], i871[81], i871[82], i871[83] )
  i870.m_isUsingLegacyAnimationComponent = !!i871[84]
  i870.m_isVolumetricText = !!i871[85]
  request.r(i871[86], i871[87], 0, i870, 'm_Material')
  i870.m_EmojiFallbackSupport = !!i871[88]
  i870.m_Maskable = !!i871[89]
  i870.m_Color = new pc.Color(i871[90], i871[91], i871[92], i871[93])
  i870.m_RaycastTarget = !!i871[94]
  i870.m_RaycastPadding = new pc.Vec4( i871[95], i871[96], i871[97], i871[98] )
  return i870
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.VertexGradient' )
  var i879 = data
  i878.topLeft = new pc.Color(i879[0], i879[1], i879[2], i879[3])
  i878.topRight = new pc.Color(i879[4], i879[5], i879[6], i879[7])
  i878.bottomLeft = new pc.Color(i879[8], i879[9], i879[10], i879[11])
  i878.bottomRight = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  return i878
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Button' )
  var i883 = data
  i882.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i883[0], i882.m_OnClick)
  i882.m_Navigation = request.d('UnityEngine.UI.Navigation', i883[1], i882.m_Navigation)
  i882.m_Transition = i883[2]
  i882.m_Colors = request.d('UnityEngine.UI.ColorBlock', i883[3], i882.m_Colors)
  i882.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i883[4], i882.m_SpriteState)
  i882.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i883[5], i882.m_AnimationTriggers)
  i882.m_Interactable = !!i883[6]
  request.r(i883[7], i883[8], 0, i882, 'm_TargetGraphic')
  return i882
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i885 = data
  i884.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i885[0], i884.m_PersistentCalls)
  return i884
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i887 = data
  i886.m_Mode = i887[0]
  i886.m_WrapAround = !!i887[1]
  request.r(i887[2], i887[3], 0, i886, 'm_SelectOnUp')
  request.r(i887[4], i887[5], 0, i886, 'm_SelectOnDown')
  request.r(i887[6], i887[7], 0, i886, 'm_SelectOnLeft')
  request.r(i887[8], i887[9], 0, i886, 'm_SelectOnRight')
  return i886
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i889 = data
  i888.m_NormalColor = new pc.Color(i889[0], i889[1], i889[2], i889[3])
  i888.m_HighlightedColor = new pc.Color(i889[4], i889[5], i889[6], i889[7])
  i888.m_PressedColor = new pc.Color(i889[8], i889[9], i889[10], i889[11])
  i888.m_SelectedColor = new pc.Color(i889[12], i889[13], i889[14], i889[15])
  i888.m_DisabledColor = new pc.Color(i889[16], i889[17], i889[18], i889[19])
  i888.m_ColorMultiplier = i889[20]
  i888.m_FadeDuration = i889[21]
  return i888
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_HighlightedSprite')
  request.r(i891[2], i891[3], 0, i890, 'm_PressedSprite')
  request.r(i891[4], i891[5], 0, i890, 'm_SelectedSprite')
  request.r(i891[6], i891[7], 0, i890, 'm_DisabledSprite')
  return i890
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i893 = data
  i892.m_NormalTrigger = i893[0]
  i892.m_HighlightedTrigger = i893[1]
  i892.m_PressedTrigger = i893[2]
  i892.m_SelectedTrigger = i893[3]
  i892.m_DisabledTrigger = i893[4]
  return i892
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Slider' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_FillRect')
  request.r(i895[2], i895[3], 0, i894, 'm_HandleRect')
  i894.m_Direction = i895[4]
  i894.m_MinValue = i895[5]
  i894.m_MaxValue = i895[6]
  i894.m_WholeNumbers = !!i895[7]
  i894.m_Value = i895[8]
  i894.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i895[9], i894.m_OnValueChanged)
  i894.m_Navigation = request.d('UnityEngine.UI.Navigation', i895[10], i894.m_Navigation)
  i894.m_Transition = i895[11]
  i894.m_Colors = request.d('UnityEngine.UI.ColorBlock', i895[12], i894.m_Colors)
  i894.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i895[13], i894.m_SpriteState)
  i894.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i895[14], i894.m_AnimationTriggers)
  i894.m_Interactable = !!i895[15]
  request.r(i895[16], i895[17], 0, i894, 'm_TargetGraphic')
  return i894
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i897 = data
  i896.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i897[0], i896.m_PersistentCalls)
  return i896
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i898 = root || request.c( 'ProgressSlider' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'progressSlider')
  i898.maxProgressItems = i899[2]
  i898.startProgressItems = i899[3]
  request.r(i899[4], i899[5], 0, i898, 'progressText')
  return i898
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i900 = root || request.c( 'Ply_Pool' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Ply_Pool+PoolAmount', i903[i + 0]) );
  }
  i900.poolAmounts = i902
  request.r(i901[1], i901[2], 0, i900, 'poolHolder')
  return i900
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i906 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i907 = data
  i906.type = i907[0]
  i906.amount = i907[1]
  request.r(i907[2], i907[3], 0, i906, 'gameUnit')
  return i906
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i908 = root || request.c( 'Ply_SoundManager' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Ply_SoundManager+FxAudio', i911[i + 0]) );
  }
  i908.fxAudios = i910
  request.r(i909[1], i909[2], 0, i908, 'sound')
  return i908
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i914 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i915 = data
  i914.fxType = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'audioClip')
  i914.volume = i915[3]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'clip')
  request.r(i917[2], i917[3], 0, i916, 'outputAudioMixerGroup')
  i916.playOnAwake = !!i917[4]
  i916.loop = !!i917[5]
  i916.time = i917[6]
  i916.volume = i917[7]
  i916.pitch = i917[8]
  i916.enabled = !!i917[9]
  return i916
}

Deserializers["GameManager"] = function (request, data, root) {
  var i918 = root || request.c( 'GameManager' )
  var i919 = data
  i918.isPlaying = !!i919[0]
  i918.isTutorial = !!i919[1]
  i918.isGotoStore = !!i919[2]
  i918.isLoseGame = !!i919[3]
  i918.countMove = i919[4]
  i918.currentLayer = i919[5]
  request.r(i919[6], i919[7], 0, i918, 'trashCan')
  request.r(i919[8], i919[9], 0, i918, 'clockTimerPrefab')
  request.r(i919[10], i919[11], 0, i918, 'paperBox')
  return i918
}

Deserializers["UIManager"] = function (request, data, root) {
  var i920 = root || request.c( 'UIManager' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'winUI')
  request.r(i921[2], i921[3], 0, i920, 'loseUI')
  request.r(i921[4], i921[5], 0, i920, 'tutorial')
  request.r(i921[6], i921[7], 0, i920, 'verticalUI')
  request.r(i921[8], i921[9], 0, i920, 'horizontalUI')
  request.r(i921[10], i921[11], 0, i920, 'downloadBtn')
  request.r(i921[12], i921[13], 0, i920, 'horizontalDownloadBtn')
  request.r(i921[14], i921[15], 0, i920, 'textAnim')
  i920.isGoogleBuild = !!i921[16]
  i920.screenWidth = i921[17]
  i920.screenHeight = i921[18]
  i920.scaleHeightOnWidth = i921[19]
  i920.isVertical = !!i921[20]
  i920.isScreenVertical = !!i921[21]
  request.r(i921[22], i921[23], 0, i920, 'cam')
  i920.verticalUIHeightOnWidthRatio = i921[24]
  i920.scaleCameraOnValidate = !!i921[25]
  i920.screenVerticalHeightOnWidthRatio = i921[26]
  i920.useContinuousScaling = !!i921[27]
  i920.baseOrthographicSize = i921[28]
  i920.baseAspect = i921[29]
  i920.landscapeSizeRatio = i921[30]
  i920.defaultPortraitSizeRatio = i921[31]
  var i923 = i921[32]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('ScreenScaleStep', i923[i + 0]));
  }
  i920.discreteScaleSteps = i922
  i920.usePerspectiveCamera = !!i921[33]
  request.r(i921[34], i921[35], 0, i920, 'perspectiveFocus')
  i920.perspectiveFocusDistance = i921[36]
  i920.perspectivePadding = i921[37]
  i920.fitRendererBounds = !!i921[38]
  request.r(i921[39], i921[40], 0, i920, 'boundsRoot')
  var i925 = i921[41]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 1, i924, '')
  }
  i920.boundsRenderers = i924
  return i920
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i928 = root || request.c( 'ScreenScaleStep' )
  var i929 = data
  i928.heightOnWidthRatio = i929[0]
  i928.orthographicSize = i929[1]
  return i928
}

Deserializers["InputManager"] = function (request, data, root) {
  var i932 = root || request.c( 'InputManager' )
  var i933 = data
  i932.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i933[0] )
  i932.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i933[1] )
  i932.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i933[2] )
  i932.isDragging = !!i933[3]
  return i932
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i934 = root || request.c( 'HandTutManager' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.items = i936
  request.r(i935[1], i935[2], 0, i934, 'knife')
  request.r(i935[3], i935[4], 0, i934, 'knife2')
  request.r(i935[5], i935[6], 0, i934, 'handTutObject')
  request.r(i935[7], i935[8], 0, i934, 'tapToCookObject')
  request.r(i935[9], i935[10], 0, i934, 'oilItem')
  request.r(i935[11], i935[12], 0, i934, 'stoveToggleEvent')
  request.r(i935[13], i935[14], 0, i934, 'waterToggleEvent')
  request.r(i935[15], i935[16], 0, i934, 'sinkBlock')
  var i939 = i935[17]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i934.itemsInWater = i938
  i934.noDelayItemCount = i935[18]
  i934.noDelayInList = !!i935[19]
  i934.breakHeartNoDelayThreshold = i935[20]
  i934.shortIdleDelay = i935[21]
  i934.maxHandTutShowCount = i935[22]
  i934.showSinkWaterTutorialOnStart = !!i935[23]
  i934.waitForBowlIntro = !!i935[24]
  i934.idleDelay = i935[25]
  i934.firstHandTutDelay = i935[26]
  i934.phaseHandTutDelay = i935[27]
  i934.moveDuration = i935[28]
  i934.dragFadeDuration = i935[29]
  i934.clickScaleDuration = i935[30]
  i934.waitAtEndDuration = i935[31]
  i934.handZPosition = i935[32]
  i934.clickScaleMultiplier = i935[33]
  i934.moveEase = i935[34]
  i934.currentDelayHandtut = i935[35]
  i934.isBreakingHeartNoDelay = !!i935[36]
  i934.tutoredItemCount = i935[37]
  return i934
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i944 = root || request.c( 'PhaseManager' )
  var i945 = data
  var i947 = i945[0]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('PhaseData', i947[i + 0]));
  }
  i944.phases = i946
  i944.transitionType = i945[1]
  i944.transitionDuration = i945[2]
  i944.delayBeforeNextPhase = i945[3]
  i944.offScreenLeftX = i945[4]
  i944.offScreenRightX = i945[5]
  i944.offScreenBottomY = i945[6]
  i944.offScreenTopY = i945[7]
  i944.centerScreenX = i945[8]
  request.r(i945[9], i945[10], 0, i944, 'phaseTransitionObject')
  i944.phaseTransitionObjectDuration = i945[11]
  i944.currentPhaseIndex = i945[12]
  i944.currentStepCount = i945[13]
  i944.isECPopup = !!i945[14]
  return i944
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i950 = root || request.c( 'PhaseData' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'phaseObject')
  i950.totalSteps = i951[2]
  i950.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i951[3], i950.onPhaseReady)
  return i950
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i952 = root || request.c( 'ItemTypeDoneManager' )
  var i953 = data
  var i955 = i953[0]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i955[i + 0]));
  }
  i952.itemTypeGroups = i954
  return i952
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i958 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i959 = data
  i958.itemType = i959[0]
  var i961 = i959[1]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.items = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i963 = data
  i962.aspect = i963[0]
  i962.orthographic = !!i963[1]
  i962.orthographicSize = i963[2]
  i962.backgroundColor = new pc.Color(i963[3], i963[4], i963[5], i963[6])
  i962.nearClipPlane = i963[7]
  i962.farClipPlane = i963[8]
  i962.fieldOfView = i963[9]
  i962.depth = i963[10]
  i962.clearFlags = i963[11]
  i962.cullingMask = i963[12]
  i962.rect = i963[13]
  request.r(i963[14], i963[15], 0, i962, 'targetTexture')
  i962.usePhysicalProperties = !!i963[16]
  i962.focalLength = i963[17]
  i962.sensorSize = new pc.Vec2( i963[18], i963[19] )
  i962.lensShift = new pc.Vec2( i963[20], i963[21] )
  i962.gateFit = i963[22]
  i962.commandBufferCount = i963[23]
  i962.cameraType = i963[24]
  i962.enabled = !!i963[25]
  return i962
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_FirstSelected')
  i964.m_sendNavigationEvents = !!i965[2]
  i964.m_DragThreshold = i965[3]
  return i964
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i967 = data
  i966.m_HorizontalAxis = i967[0]
  i966.m_VerticalAxis = i967[1]
  i966.m_SubmitButton = i967[2]
  i966.m_CancelButton = i967[3]
  i966.m_InputActionsPerSecond = i967[4]
  i966.m_RepeatDelay = i967[5]
  i966.m_ForceModuleActive = !!i967[6]
  i966.m_SendPointerHoverToParent = !!i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i969 = data
  i968.center = new pc.Vec3( i969[0], i969[1], i969[2] )
  i968.radius = i969[3]
  i968.height = i969[4]
  i968.direction = i969[5]
  i968.enabled = !!i969[6]
  i968.isTrigger = !!i969[7]
  request.r(i969[8], i969[9], 0, i968, 'material')
  return i968
}

Deserializers["Item"] = function (request, data, root) {
  var i970 = root || request.c( 'Item' )
  var i971 = data
  i970.isDone = !!i971[0]
  i970.onProcess = !!i971[1]
  i970.requireMatchingTargetTypeForHandTut = !!i971[2]
  request.r(i971[3], i971[4], 0, i970, 'itemDraggable')
  request.r(i971[5], i971[6], 0, i970, 'itemClickable')
  request.r(i971[7], i971[8], 0, i970, 'itemStirring')
  request.r(i971[9], i971[10], 0, i970, 'itemKnifeSpriteMaskCutter')
  request.r(i971[11], i971[12], 0, i970, 'itemSpriteMaskPainter')
  request.r(i971[13], i971[14], 0, i970, 'itemDragSpriteMaskPainter')
  request.r(i971[15], i971[16], 0, i970, 'itemMoveToTarget')
  request.r(i971[17], i971[18], 0, i970, 'animator')
  i970.itemType = i971[19]
  request.r(i971[20], i971[21], 0, i970, 'spriteRenderer')
  i970.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i971[22], i970.onKnifeIn)
  request.r(i971[23], i971[24], 0, i970, 'knifePos')
  i970.heartEffectScale = i971[25]
  i970.breakHeartEffectScale = i971[26]
  i970.blinkEffectScale = i971[27]
  i970.mergeEffectScale = i971[28]
  i970.playMoveToTargetFinishSound = !!i971[29]
  i970.moveToTargetFinishFxType = i971[30]
  i970.fxSpawnZPos = i971[31]
  request.r(i971[32], i971[33], 0, i970, 'tf')
  return i970
}

Deserializers["ItemToTarget"] = function (request, data, root) {
  var i972 = root || request.c( 'ItemToTarget' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'targetPosition')
  request.r(i973[2], i973[3], 0, i972, 'targetItem')
  i972.targetItemAnimationName = i973[4]
  i972.turnOnAnimWhenArrive = !!i973[5]
  i972.animWhenArriveName = i973[6]
  i972.disableItemWhenDrop = !!i973[7]
  i972.itemDoneWhenArrive = !!i973[8]
  request.r(i973[9], i973[10], 0, i972, 'waittingPoint')
  request.r(i973[11], i973[12], 0, i972, 'targetPoint')
  request.r(i973[13], i973[14], 0, i972, 'transformConveyor')
  i972.isDone = !!i973[15]
  i972.onProcess = !!i973[16]
  i972.requireMatchingTargetTypeForHandTut = !!i973[17]
  request.r(i973[18], i973[19], 0, i972, 'itemDraggable')
  request.r(i973[20], i973[21], 0, i972, 'itemClickable')
  request.r(i973[22], i973[23], 0, i972, 'itemStirring')
  request.r(i973[24], i973[25], 0, i972, 'itemKnifeSpriteMaskCutter')
  request.r(i973[26], i973[27], 0, i972, 'itemSpriteMaskPainter')
  request.r(i973[28], i973[29], 0, i972, 'itemDragSpriteMaskPainter')
  request.r(i973[30], i973[31], 0, i972, 'itemMoveToTarget')
  request.r(i973[32], i973[33], 0, i972, 'animator')
  i972.itemType = i973[34]
  request.r(i973[35], i973[36], 0, i972, 'spriteRenderer')
  i972.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i973[37], i972.onKnifeIn)
  request.r(i973[38], i973[39], 0, i972, 'knifePos')
  i972.heartEffectScale = i973[40]
  i972.breakHeartEffectScale = i973[41]
  i972.blinkEffectScale = i973[42]
  i972.mergeEffectScale = i973[43]
  i972.playMoveToTargetFinishSound = !!i973[44]
  i972.moveToTargetFinishFxType = i973[45]
  i972.fxSpawnZPos = i973[46]
  request.r(i973[47], i973[48], 0, i972, 'tf')
  return i972
}

Deserializers["RongBien"] = function (request, data, root) {
  var i974 = root || request.c( 'RongBien' )
  var i975 = data
  i974.foodCount = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'sushiDone')
  i974.isDone = !!i975[3]
  i974.onProcess = !!i975[4]
  i974.requireMatchingTargetTypeForHandTut = !!i975[5]
  request.r(i975[6], i975[7], 0, i974, 'itemDraggable')
  request.r(i975[8], i975[9], 0, i974, 'itemClickable')
  request.r(i975[10], i975[11], 0, i974, 'itemStirring')
  request.r(i975[12], i975[13], 0, i974, 'itemKnifeSpriteMaskCutter')
  request.r(i975[14], i975[15], 0, i974, 'itemSpriteMaskPainter')
  request.r(i975[16], i975[17], 0, i974, 'itemDragSpriteMaskPainter')
  request.r(i975[18], i975[19], 0, i974, 'itemMoveToTarget')
  request.r(i975[20], i975[21], 0, i974, 'animator')
  i974.itemType = i975[22]
  request.r(i975[23], i975[24], 0, i974, 'spriteRenderer')
  i974.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i975[25], i974.onKnifeIn)
  request.r(i975[26], i975[27], 0, i974, 'knifePos')
  i974.heartEffectScale = i975[28]
  i974.breakHeartEffectScale = i975[29]
  i974.blinkEffectScale = i975[30]
  i974.mergeEffectScale = i975[31]
  i974.playMoveToTargetFinishSound = !!i975[32]
  i974.moveToTargetFinishFxType = i975[33]
  i974.fxSpawnZPos = i975[34]
  request.r(i975[35], i975[36], 0, i974, 'tf')
  return i974
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i976 = root || request.c( 'ItemClickable' )
  var i977 = data
  i976.requiredClicks = i977[0]
  i976.infiniteClick = !!i977[1]
  i976.canClick = !!i977[2]
  i976.disableAfterClick = !!i977[3]
  i976.onClick = request.d('UnityEngine.Events.UnityEvent', i977[4], i976.onClick)
  var i979 = i977[5]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('UnityEngine.Events.UnityEvent', i979[i + 0]));
  }
  i976.sequentialOnClicks = i978
  i976.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i977[6], i976.onClickComplete)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i983 = data
  i982.frontSortingLayerID = i983[0]
  i982.frontSortingOrder = i983[1]
  i982.backSortingLayerID = i983[2]
  i982.backSortingOrder = i983[3]
  i982.alphaCutoff = i983[4]
  request.r(i983[5], i983[6], 0, i982, 'sprite')
  i982.tileMode = i983[7]
  i982.isCustomRangeActive = !!i983[8]
  i982.spriteSortPoint = i983[9]
  i982.enabled = !!i983[10]
  request.r(i983[11], i983[12], 0, i982, 'sharedMaterial')
  var i985 = i983[13]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.sharedMaterials = i984
  i982.receiveShadows = !!i983[14]
  i982.shadowCastingMode = i983[15]
  i982.sortingLayerID = i983[16]
  i982.sortingOrder = i983[17]
  i982.lightmapIndex = i983[18]
  i982.lightmapSceneIndex = i983[19]
  i982.lightmapScaleOffset = new pc.Vec4( i983[20], i983[21], i983[22], i983[23] )
  i982.lightProbeUsage = i983[24]
  i982.reflectionProbeUsage = i983[25]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i987 = data
  i986.ambientIntensity = i987[0]
  i986.reflectionIntensity = i987[1]
  i986.ambientMode = i987[2]
  i986.ambientLight = new pc.Color(i987[3], i987[4], i987[5], i987[6])
  i986.ambientSkyColor = new pc.Color(i987[7], i987[8], i987[9], i987[10])
  i986.ambientGroundColor = new pc.Color(i987[11], i987[12], i987[13], i987[14])
  i986.ambientEquatorColor = new pc.Color(i987[15], i987[16], i987[17], i987[18])
  i986.fogColor = new pc.Color(i987[19], i987[20], i987[21], i987[22])
  i986.fogEndDistance = i987[23]
  i986.fogStartDistance = i987[24]
  i986.fogDensity = i987[25]
  i986.fog = !!i987[26]
  request.r(i987[27], i987[28], 0, i986, 'skybox')
  i986.fogMode = i987[29]
  var i989 = i987[30]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i989[i + 0]) );
  }
  i986.lightmaps = i988
  i986.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i987[31], i986.lightProbes)
  i986.lightmapsMode = i987[32]
  i986.mixedBakeMode = i987[33]
  i986.environmentLightingMode = i987[34]
  i986.ambientProbe = new pc.SphericalHarmonicsL2(i987[35])
  i986.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i987[36])
  i986.useReferenceAmbientProbe = !!i987[37]
  request.r(i987[38], i987[39], 0, i986, 'customReflection')
  request.r(i987[40], i987[41], 0, i986, 'defaultReflection')
  i986.defaultReflectionMode = i987[42]
  i986.defaultReflectionResolution = i987[43]
  i986.sunLightObjectId = i987[44]
  i986.pixelLightCount = i987[45]
  i986.defaultReflectionHDR = !!i987[46]
  i986.hasLightDataAsset = !!i987[47]
  i986.hasManualGenerate = !!i987[48]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'lightmapColor')
  request.r(i993[2], i993[3], 0, i992, 'lightmapDirection')
  request.r(i993[4], i993[5], 0, i992, 'shadowMask')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i994 = root || new UnityEngine.LightProbes()
  var i995 = data
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1005[i + 0]));
  }
  i1002.ShaderCompilationErrors = i1004
  i1002.name = i1003[1]
  i1002.guid = i1003[2]
  var i1007 = i1003[3]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1002.shaderDefinedKeywords = i1006
  var i1009 = i1003[4]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1009[i + 0]) );
  }
  i1002.passes = i1008
  var i1011 = i1003[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1011[i + 0]) );
  }
  i1002.usePasses = i1010
  var i1013 = i1003[6]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1013[i + 0]) );
  }
  i1002.defaultParameterValues = i1012
  request.r(i1003[7], i1003[8], 0, i1002, 'unityFallbackShader')
  i1002.readDepth = !!i1003[9]
  i1002.hasDepthOnlyPass = !!i1003[10]
  i1002.isCreatedByShaderGraph = !!i1003[11]
  i1002.disableBatching = !!i1003[12]
  i1002.compiled = !!i1003[13]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1017 = data
  i1016.shaderName = i1017[0]
  i1016.errorMessage = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1022 = root || new pc.UnityShaderPass()
  var i1023 = data
  i1022.id = i1023[0]
  i1022.subShaderIndex = i1023[1]
  i1022.name = i1023[2]
  i1022.passType = i1023[3]
  i1022.grabPassTextureName = i1023[4]
  i1022.usePass = !!i1023[5]
  i1022.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[6], i1022.zTest)
  i1022.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[7], i1022.zWrite)
  i1022.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[8], i1022.culling)
  i1022.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1023[9], i1022.blending)
  i1022.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1023[10], i1022.alphaBlending)
  i1022.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[11], i1022.colorWriteMask)
  i1022.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[12], i1022.offsetUnits)
  i1022.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[13], i1022.offsetFactor)
  i1022.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[14], i1022.stencilRef)
  i1022.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[15], i1022.stencilReadMask)
  i1022.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[16], i1022.stencilWriteMask)
  i1022.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1023[17], i1022.stencilOp)
  i1022.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1023[18], i1022.stencilOpFront)
  i1022.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1023[19], i1022.stencilOpBack)
  var i1025 = i1023[20]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1025[i + 0]) );
  }
  i1022.tags = i1024
  var i1027 = i1023[21]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.passDefinedKeywords = i1026
  var i1029 = i1023[22]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1029[i + 0]) );
  }
  i1022.passDefinedKeywordGroups = i1028
  var i1031 = i1023[23]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1031[i + 0]) );
  }
  i1022.variants = i1030
  var i1033 = i1023[24]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1033[i + 0]) );
  }
  i1022.excludedVariants = i1032
  i1022.hasDepthReader = !!i1023[25]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1035 = data
  i1034.val = i1035[0]
  i1034.name = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1037 = data
  i1036.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[0], i1036.src)
  i1036.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[1], i1036.dst)
  i1036.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[2], i1036.op)
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1039 = data
  i1038.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[0], i1038.pass)
  i1038.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[1], i1038.fail)
  i1038.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[2], i1038.zFail)
  i1038.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[3], i1038.comp)
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.value = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1046.keywords = i1048
  i1046.hasDiscard = !!i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1053 = data
  i1052.passId = i1053[0]
  i1052.subShaderIndex = i1053[1]
  var i1055 = i1053[2]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1052.keywords = i1054
  i1052.vertexProgram = i1053[3]
  i1052.fragmentProgram = i1053[4]
  i1052.exportedForWebGl2 = !!i1053[5]
  i1052.readDepth = !!i1053[6]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'shader')
  i1058.pass = i1059[2]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.type = i1063[1]
  i1062.value = new pc.Vec4( i1063[2], i1063[3], i1063[4], i1063[5] )
  i1062.textureValue = i1063[6]
  i1062.shaderPropertyFlag = i1063[7]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1065 = data
  i1064.name = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'texture')
  i1064.aabb = i1065[3]
  i1064.vertices = i1065[4]
  i1064.triangles = i1065[5]
  i1064.textureRect = UnityEngine.Rect.MinMaxRect(i1065[6], i1065[7], i1065[8], i1065[9])
  i1064.packedRect = UnityEngine.Rect.MinMaxRect(i1065[10], i1065[11], i1065[12], i1065[13])
  i1064.border = new pc.Vec4( i1065[14], i1065[15], i1065[16], i1065[17] )
  i1064.transparency = i1065[18]
  i1064.bounds = i1065[19]
  i1064.pixelsPerUnit = i1065[20]
  i1064.textureWidth = i1065[21]
  i1064.textureHeight = i1065[22]
  i1064.nativeSize = new pc.Vec2( i1065[23], i1065[24] )
  i1064.pivot = new pc.Vec2( i1065[25], i1065[26] )
  i1064.textureRectOffset = new pc.Vec2( i1065[27], i1065[28] )
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1067 = data
  i1066.name = i1067[0]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.wrapMode = i1069[1]
  i1068.isLooping = !!i1069[2]
  i1068.length = i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1071[i + 0]) );
  }
  i1068.curves = i1070
  var i1073 = i1069[5]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1073[i + 0]) );
  }
  i1068.events = i1072
  i1068.halfPrecision = !!i1069[6]
  i1068._frameRate = i1069[7]
  i1068.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1069[8], i1068.localBounds)
  i1068.hasMuscleCurves = !!i1069[9]
  var i1075 = i1069[10]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1068.clipMuscleConstant = i1074
  i1068.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1069[11], i1068.clipBindingConstant)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1079 = data
  i1078.path = i1079[0]
  i1078.hash = i1079[1]
  i1078.componentType = i1079[2]
  i1078.property = i1079[3]
  i1078.keys = i1079[4]
  var i1081 = i1079[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1081[i + 0]) );
  }
  i1078.objectReferenceKeys = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1085 = data
  i1084.time = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'value')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1089 = data
  i1088.functionName = i1089[0]
  i1088.floatParameter = i1089[1]
  i1088.intParameter = i1089[2]
  i1088.stringParameter = i1089[3]
  request.r(i1089[4], i1089[5], 0, i1088, 'objectReferenceParameter')
  i1088.time = i1089[6]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1091 = data
  i1090.center = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.extends = new pc.Vec3( i1091[3], i1091[4], i1091[5] )
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1094.genericBindings = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.pptrCurveMapping = i1098
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1101 = data
  i1100.name = i1101[0]
  var i1103 = i1101[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1103[i + 0]) );
  }
  i1100.layers = i1102
  var i1105 = i1101[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1105[i + 0]) );
  }
  i1100.parameters = i1104
  i1100.animationClips = i1101[3]
  i1100.avatarUnsupported = i1101[4]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.defaultWeight = i1109[1]
  i1108.blendingMode = i1109[2]
  i1108.avatarMask = i1109[3]
  i1108.syncedLayerIndex = i1109[4]
  i1108.syncedLayerAffectsTiming = !!i1109[5]
  i1108.syncedLayers = i1109[6]
  i1108.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1109[7], i1108.stateMachine)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1111 = data
  i1110.id = i1111[0]
  i1110.name = i1111[1]
  i1110.path = i1111[2]
  var i1113 = i1111[3]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1113[i + 0]) );
  }
  i1110.states = i1112
  var i1115 = i1111[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1115[i + 0]) );
  }
  i1110.machines = i1114
  var i1117 = i1111[5]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1117[i + 0]) );
  }
  i1110.entryStateTransitions = i1116
  var i1119 = i1111[6]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1119[i + 0]) );
  }
  i1110.exitStateTransitions = i1118
  var i1121 = i1111[7]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1121[i + 0]) );
  }
  i1110.anyStateTransitions = i1120
  i1110.defaultStateId = i1111[8]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1125 = data
  i1124.id = i1125[0]
  i1124.name = i1125[1]
  i1124.cycleOffset = i1125[2]
  i1124.cycleOffsetParameter = i1125[3]
  i1124.cycleOffsetParameterActive = !!i1125[4]
  i1124.mirror = !!i1125[5]
  i1124.mirrorParameter = i1125[6]
  i1124.mirrorParameterActive = !!i1125[7]
  i1124.motionId = i1125[8]
  i1124.nameHash = i1125[9]
  i1124.fullPathHash = i1125[10]
  i1124.speed = i1125[11]
  i1124.speedParameter = i1125[12]
  i1124.speedParameterActive = !!i1125[13]
  i1124.tag = i1125[14]
  i1124.tagHash = i1125[15]
  i1124.writeDefaultValues = !!i1125[16]
  var i1127 = i1125[17]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 2, i1126, '')
  }
  i1124.behaviours = i1126
  var i1129 = i1125[18]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1129[i + 0]) );
  }
  i1124.transitions = i1128
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1135 = data
  i1134.fullPath = i1135[0]
  i1134.canTransitionToSelf = !!i1135[1]
  i1134.duration = i1135[2]
  i1134.exitTime = i1135[3]
  i1134.hasExitTime = !!i1135[4]
  i1134.hasFixedDuration = !!i1135[5]
  i1134.interruptionSource = i1135[6]
  i1134.offset = i1135[7]
  i1134.orderedInterruption = !!i1135[8]
  i1134.destinationStateId = i1135[9]
  i1134.isExit = !!i1135[10]
  i1134.mute = !!i1135[11]
  i1134.solo = !!i1135[12]
  var i1137 = i1135[13]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1137[i + 0]) );
  }
  i1134.conditions = i1136
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1143 = data
  i1142.destinationStateId = i1143[0]
  i1142.isExit = !!i1143[1]
  i1142.mute = !!i1143[2]
  i1142.solo = !!i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1145[i + 0]) );
  }
  i1142.conditions = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1149 = data
  i1148.defaultBool = !!i1149[0]
  i1148.defaultFloat = i1149[1]
  i1148.defaultInt = i1149[2]
  i1148.name = i1149[3]
  i1148.nameHash = i1149[4]
  i1148.type = i1149[5]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1153 = data
  i1152.mode = i1153[0]
  i1152.parameter = i1153[1]
  i1152.threshold = i1153[2]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.bytes64 = i1155[1]
  i1154.data = i1155[2]
  return i1154
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1157 = data
  i1156.normalStyle = i1157[0]
  i1156.normalSpacingOffset = i1157[1]
  i1156.boldStyle = i1157[2]
  i1156.boldSpacing = i1157[3]
  i1156.italicStyle = i1157[4]
  i1156.tabSize = i1157[5]
  request.r(i1157[6], i1157[7], 0, i1156, 'atlas')
  i1156.m_SourceFontFileGUID = i1157[8]
  i1156.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1157[9], i1156.m_CreationSettings)
  request.r(i1157[10], i1157[11], 0, i1156, 'm_SourceFontFile')
  i1156.m_SourceFontFilePath = i1157[12]
  i1156.m_AtlasPopulationMode = i1157[13]
  i1156.InternalDynamicOS = !!i1157[14]
  var i1159 = i1157[15]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('UnityEngine.TextCore.Glyph', i1159[i + 0]));
  }
  i1156.m_GlyphTable = i1158
  var i1161 = i1157[16]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.TMP_Character', i1161[i + 0]));
  }
  i1156.m_CharacterTable = i1160
  var i1163 = i1157[17]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 2, i1162, '')
  }
  i1156.m_AtlasTextures = i1162
  i1156.m_AtlasTextureIndex = i1157[18]
  i1156.m_IsMultiAtlasTexturesEnabled = !!i1157[19]
  i1156.m_GetFontFeatures = !!i1157[20]
  i1156.m_ClearDynamicDataOnBuild = !!i1157[21]
  i1156.m_AtlasWidth = i1157[22]
  i1156.m_AtlasHeight = i1157[23]
  i1156.m_AtlasPadding = i1157[24]
  i1156.m_AtlasRenderMode = i1157[25]
  var i1165 = i1157[26]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('UnityEngine.TextCore.GlyphRect', i1165[i + 0]));
  }
  i1156.m_UsedGlyphRects = i1164
  var i1167 = i1157[27]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('UnityEngine.TextCore.GlyphRect', i1167[i + 0]));
  }
  i1156.m_FreeGlyphRects = i1166
  i1156.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1157[28], i1156.m_FontFeatureTable)
  i1156.m_ShouldReimportFontFeatures = !!i1157[29]
  var i1169 = i1157[30]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1156.m_FallbackFontAssetTable = i1168
  var i1171 = i1157[31]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('TMPro.TMP_FontWeightPair', i1171[i + 0]) );
  }
  i1156.m_FontWeightTable = i1170
  var i1173 = i1157[32]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('TMPro.TMP_FontWeightPair', i1173[i + 0]) );
  }
  i1156.fontWeights = i1172
  i1156.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1157[33], i1156.m_fontInfo)
  var i1175 = i1157[34]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_Glyph', i1175[i + 0]));
  }
  i1156.m_glyphInfoList = i1174
  i1156.m_KerningTable = request.d('TMPro.KerningTable', i1157[35], i1156.m_KerningTable)
  var i1177 = i1157[36]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1156.fallbackFontAssets = i1176
  i1156.m_Version = i1157[37]
  i1156.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1157[38], i1156.m_FaceInfo)
  request.r(i1157[39], i1157[40], 0, i1156, 'm_Material')
  return i1156
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1179 = data
  i1178.sourceFontFileName = i1179[0]
  i1178.sourceFontFileGUID = i1179[1]
  i1178.faceIndex = i1179[2]
  i1178.pointSizeSamplingMode = i1179[3]
  i1178.pointSize = i1179[4]
  i1178.padding = i1179[5]
  i1178.paddingMode = i1179[6]
  i1178.packingMode = i1179[7]
  i1178.atlasWidth = i1179[8]
  i1178.atlasHeight = i1179[9]
  i1178.characterSetSelectionMode = i1179[10]
  i1178.characterSequence = i1179[11]
  i1178.referencedFontAssetGUID = i1179[12]
  i1178.referencedTextAssetGUID = i1179[13]
  i1178.fontStyle = i1179[14]
  i1178.fontStyleModifier = i1179[15]
  i1178.renderMode = i1179[16]
  i1178.includeFontFeatures = !!i1179[17]
  return i1178
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1183 = data
  i1182.m_Index = i1183[0]
  i1182.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1183[1], i1182.m_Metrics)
  i1182.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1183[2], i1182.m_GlyphRect)
  i1182.m_Scale = i1183[3]
  i1182.m_AtlasIndex = i1183[4]
  i1182.m_ClassDefinitionType = i1183[5]
  return i1182
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1185 = data
  i1184.m_Width = i1185[0]
  i1184.m_Height = i1185[1]
  i1184.m_HorizontalBearingX = i1185[2]
  i1184.m_HorizontalBearingY = i1185[3]
  i1184.m_HorizontalAdvance = i1185[4]
  return i1184
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1187 = data
  i1186.m_X = i1187[0]
  i1186.m_Y = i1187[1]
  i1186.m_Width = i1187[2]
  i1186.m_Height = i1187[3]
  return i1186
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_Character' )
  var i1191 = data
  i1190.m_ElementType = i1191[0]
  i1190.m_Unicode = i1191[1]
  i1190.m_GlyphIndex = i1191[2]
  i1190.m_Scale = i1191[3]
  return i1190
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.MultipleSubstitutionRecord', i1199[i + 0]));
  }
  i1196.m_MultipleSubstitutionRecords = i1198
  var i1201 = i1197[1]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.LigatureSubstitutionRecord', i1201[i + 0]));
  }
  i1196.m_LigatureSubstitutionRecords = i1200
  var i1203 = i1197[2]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1203[i + 0]));
  }
  i1196.m_GlyphPairAdjustmentRecords = i1202
  var i1205 = i1197[3]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1205[i + 0]));
  }
  i1196.m_MarkToBaseAdjustmentRecords = i1204
  var i1207 = i1197[4]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1207[i + 0]));
  }
  i1196.m_MarkToMarkAdjustmentRecords = i1206
  return i1196
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1211 = data
  i1210.m_TargetGlyphID = i1211[0]
  i1210.m_SubstituteGlyphIDs = i1211[1]
  return i1210
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1215 = data
  i1214.m_ComponentGlyphIDs = i1215[0]
  i1214.m_LigatureGlyphID = i1215[1]
  return i1214
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1219 = data
  i1218.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1219[0], i1218.m_FirstAdjustmentRecord)
  i1218.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1219[1], i1218.m_SecondAdjustmentRecord)
  i1218.m_FeatureLookupFlags = i1219[2]
  return i1218
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1223 = data
  i1222.m_BaseGlyphID = i1223[0]
  i1222.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1223[1], i1222.m_BaseGlyphAnchorPoint)
  i1222.m_MarkGlyphID = i1223[2]
  i1222.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1223[3], i1222.m_MarkPositionAdjustment)
  return i1222
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1227 = data
  i1226.m_BaseMarkGlyphID = i1227[0]
  i1226.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1227[1], i1226.m_BaseMarkGlyphAnchorPoint)
  i1226.m_CombiningMarkGlyphID = i1227[2]
  i1226.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1227[3], i1226.m_CombiningMarkPositionAdjustment)
  return i1226
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'regularTypeface')
  request.r(i1233[2], i1233[3], 0, i1232, 'italicTypeface')
  return i1232
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1235 = data
  i1234.Name = i1235[0]
  i1234.PointSize = i1235[1]
  i1234.Scale = i1235[2]
  i1234.CharacterCount = i1235[3]
  i1234.LineHeight = i1235[4]
  i1234.Baseline = i1235[5]
  i1234.Ascender = i1235[6]
  i1234.CapHeight = i1235[7]
  i1234.Descender = i1235[8]
  i1234.CenterLine = i1235[9]
  i1234.SuperscriptOffset = i1235[10]
  i1234.SubscriptOffset = i1235[11]
  i1234.SubSize = i1235[12]
  i1234.Underline = i1235[13]
  i1234.UnderlineThickness = i1235[14]
  i1234.strikethrough = i1235[15]
  i1234.strikethroughThickness = i1235[16]
  i1234.TabWidth = i1235[17]
  i1234.Padding = i1235[18]
  i1234.AtlasWidth = i1235[19]
  i1234.AtlasHeight = i1235[20]
  return i1234
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1239 = data
  i1238.id = i1239[0]
  i1238.x = i1239[1]
  i1238.y = i1239[2]
  i1238.width = i1239[3]
  i1238.height = i1239[4]
  i1238.xOffset = i1239[5]
  i1238.yOffset = i1239[6]
  i1238.xAdvance = i1239[7]
  i1238.scale = i1239[8]
  return i1238
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.KerningTable' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.KerningPair', i1243[i + 0]));
  }
  i1240.kerningPairs = i1242
  return i1240
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.KerningPair' )
  var i1247 = data
  i1246.xOffset = i1247[0]
  i1246.m_FirstGlyph = i1247[1]
  i1246.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1247[2], i1246.m_FirstGlyphAdjustments)
  i1246.m_SecondGlyph = i1247[3]
  i1246.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1247[4], i1246.m_SecondGlyphAdjustments)
  i1246.m_IgnoreSpacingAdjustments = !!i1247[5]
  return i1246
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1249 = data
  i1248.m_FaceIndex = i1249[0]
  i1248.m_FamilyName = i1249[1]
  i1248.m_StyleName = i1249[2]
  i1248.m_PointSize = i1249[3]
  i1248.m_Scale = i1249[4]
  i1248.m_UnitsPerEM = i1249[5]
  i1248.m_LineHeight = i1249[6]
  i1248.m_AscentLine = i1249[7]
  i1248.m_CapLine = i1249[8]
  i1248.m_MeanLine = i1249[9]
  i1248.m_Baseline = i1249[10]
  i1248.m_DescentLine = i1249[11]
  i1248.m_SuperscriptOffset = i1249[12]
  i1248.m_SuperscriptSize = i1249[13]
  i1248.m_SubscriptOffset = i1249[14]
  i1248.m_SubscriptSize = i1249[15]
  i1248.m_UnderlineOffset = i1249[16]
  i1248.m_UnderlineThickness = i1249[17]
  i1248.m_StrikethroughOffset = i1249[18]
  i1248.m_StrikethroughThickness = i1249[19]
  i1248.m_TabWidth = i1249[20]
  return i1248
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1251 = data
  i1250.useSafeMode = !!i1251[0]
  i1250.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1251[1], i1250.safeModeOptions)
  i1250.timeScale = i1251[2]
  i1250.unscaledTimeScale = i1251[3]
  i1250.useSmoothDeltaTime = !!i1251[4]
  i1250.maxSmoothUnscaledTime = i1251[5]
  i1250.rewindCallbackMode = i1251[6]
  i1250.showUnityEditorReport = !!i1251[7]
  i1250.logBehaviour = i1251[8]
  i1250.drawGizmos = !!i1251[9]
  i1250.defaultRecyclable = !!i1251[10]
  i1250.defaultAutoPlay = i1251[11]
  i1250.defaultUpdateType = i1251[12]
  i1250.defaultTimeScaleIndependent = !!i1251[13]
  i1250.defaultEaseType = i1251[14]
  i1250.defaultEaseOvershootOrAmplitude = i1251[15]
  i1250.defaultEasePeriod = i1251[16]
  i1250.defaultAutoKill = !!i1251[17]
  i1250.defaultLoopType = i1251[18]
  i1250.debugMode = !!i1251[19]
  i1250.debugStoreTargetId = !!i1251[20]
  i1250.showPreviewPanel = !!i1251[21]
  i1250.storeSettingsLocation = i1251[22]
  i1250.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1251[23], i1250.modules)
  i1250.createASMDEF = !!i1251[24]
  i1250.showPlayingTweens = !!i1251[25]
  i1250.showPausedTweens = !!i1251[26]
  return i1250
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1253 = data
  i1252.logBehaviour = i1253[0]
  i1252.nestedTweenFailureBehaviour = i1253[1]
  return i1252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1255 = data
  i1254.showPanel = !!i1255[0]
  i1254.audioEnabled = !!i1255[1]
  i1254.physicsEnabled = !!i1255[2]
  i1254.physics2DEnabled = !!i1255[3]
  i1254.spriteEnabled = !!i1255[4]
  i1254.uiEnabled = !!i1255[5]
  i1254.uiToolkitEnabled = !!i1255[6]
  i1254.textMeshProEnabled = !!i1255[7]
  i1254.tk2DEnabled = !!i1255[8]
  i1254.deAudioEnabled = !!i1255[9]
  i1254.deUnityExtendedEnabled = !!i1255[10]
  i1254.epoOutlineEnabled = !!i1255[11]
  return i1254
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_Settings' )
  var i1257 = data
  i1256.assetVersion = i1257[0]
  i1256.m_TextWrappingMode = i1257[1]
  i1256.m_enableKerning = !!i1257[2]
  var i1259 = i1257[3]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(i1259[i + 0]);
  }
  i1256.m_ActiveFontFeatures = i1258
  i1256.m_enableExtraPadding = !!i1257[4]
  i1256.m_enableTintAllSprites = !!i1257[5]
  i1256.m_enableParseEscapeCharacters = !!i1257[6]
  i1256.m_EnableRaycastTarget = !!i1257[7]
  i1256.m_GetFontFeaturesAtRuntime = !!i1257[8]
  i1256.m_missingGlyphCharacter = i1257[9]
  i1256.m_ClearDynamicDataOnBuild = !!i1257[10]
  i1256.m_warningsDisabled = !!i1257[11]
  request.r(i1257[12], i1257[13], 0, i1256, 'm_defaultFontAsset')
  i1256.m_defaultFontAssetPath = i1257[14]
  i1256.m_defaultFontSize = i1257[15]
  i1256.m_defaultAutoSizeMinRatio = i1257[16]
  i1256.m_defaultAutoSizeMaxRatio = i1257[17]
  i1256.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1257[18], i1257[19] )
  i1256.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1257[20], i1257[21] )
  i1256.m_autoSizeTextContainer = !!i1257[22]
  i1256.m_IsTextObjectScaleStatic = !!i1257[23]
  var i1261 = i1257[24]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1256.m_fallbackFontAssets = i1260
  i1256.m_matchMaterialPreset = !!i1257[25]
  i1256.m_HideSubTextObjects = !!i1257[26]
  request.r(i1257[27], i1257[28], 0, i1256, 'm_defaultSpriteAsset')
  i1256.m_defaultSpriteAssetPath = i1257[29]
  i1256.m_enableEmojiSupport = !!i1257[30]
  i1256.m_MissingCharacterSpriteUnicode = i1257[31]
  var i1263 = i1257[32]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1256.m_EmojiFallbackTextAssets = i1262
  i1256.m_defaultColorGradientPresetsPath = i1257[33]
  request.r(i1257[34], i1257[35], 0, i1256, 'm_defaultStyleSheet')
  i1256.m_StyleSheetsResourcePath = i1257[36]
  request.r(i1257[37], i1257[38], 0, i1256, 'm_leadingCharacters')
  request.r(i1257[39], i1257[40], 0, i1256, 'm_followingCharacters')
  i1256.m_UseModernHangulLineBreakingRules = !!i1257[41]
  return i1256
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'spriteSheet')
  var i1269 = i1267[2]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Sprite', i1269[i + 0]));
  }
  i1266.spriteInfoList = i1268
  var i1271 = i1267[3]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1266.fallbackSpriteAssets = i1270
  var i1273 = i1267[4]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.TMP_SpriteCharacter', i1273[i + 0]));
  }
  i1266.m_SpriteCharacterTable = i1272
  var i1275 = i1267[5]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.TMP_SpriteGlyph', i1275[i + 0]));
  }
  i1266.m_GlyphTable = i1274
  i1266.m_Version = i1267[6]
  i1266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1267[7], i1266.m_FaceInfo)
  request.r(i1267[8], i1267[9], 0, i1266, 'm_Material')
  return i1266
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.hashCode = i1279[1]
  i1278.unicode = i1279[2]
  i1278.pivot = new pc.Vec2( i1279[3], i1279[4] )
  request.r(i1279[5], i1279[6], 0, i1278, 'sprite')
  i1278.id = i1279[7]
  i1278.x = i1279[8]
  i1278.y = i1279[9]
  i1278.width = i1279[10]
  i1278.height = i1279[11]
  i1278.xOffset = i1279[12]
  i1278.yOffset = i1279[13]
  i1278.xAdvance = i1279[14]
  i1278.scale = i1279[15]
  return i1278
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1285 = data
  i1284.m_Name = i1285[0]
  i1284.m_ElementType = i1285[1]
  i1284.m_Unicode = i1285[2]
  i1284.m_GlyphIndex = i1285[3]
  i1284.m_Scale = i1285[4]
  return i1284
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'sprite')
  i1288.m_Index = i1289[2]
  i1288.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1289[3], i1288.m_Metrics)
  i1288.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1289[4], i1288.m_GlyphRect)
  i1288.m_Scale = i1289[5]
  i1288.m_AtlasIndex = i1289[6]
  i1288.m_ClassDefinitionType = i1289[7]
  return i1288
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Style', i1293[i + 0]));
  }
  i1290.m_StyleList = i1292
  return i1290
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_Style' )
  var i1297 = data
  i1296.m_Name = i1297[0]
  i1296.m_HashCode = i1297[1]
  i1296.m_OpeningDefinition = i1297[2]
  i1296.m_ClosingDefinition = i1297[3]
  i1296.m_OpeningTagArray = i1297[4]
  i1296.m_ClosingTagArray = i1297[5]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1301[i + 0]) );
  }
  i1298.files = i1300
  i1298.componentToPrefabIds = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1305 = data
  i1304.path = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'unityObject')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1309[i + 0]) );
  }
  i1306.scriptsExecutionOrder = i1308
  var i1311 = i1307[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1311[i + 0]) );
  }
  i1306.sortingLayers = i1310
  var i1313 = i1307[2]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1313[i + 0]) );
  }
  i1306.cullingLayers = i1312
  i1306.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1307[3], i1306.timeSettings)
  i1306.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1307[4], i1306.physicsSettings)
  i1306.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1307[5], i1306.physics2DSettings)
  i1306.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1307[6], i1306.qualitySettings)
  i1306.enableRealtimeShadows = !!i1307[7]
  i1306.enableAutoInstancing = !!i1307[8]
  i1306.enableStaticBatching = !!i1307[9]
  i1306.enableDynamicBatching = !!i1307[10]
  i1306.lightmapEncodingQuality = i1307[11]
  i1306.desiredColorSpace = i1307[12]
  var i1315 = i1307[13]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1306.allTags = i1314
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.value = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.name = i1323[1]
  i1322.value = i1323[2]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1327 = data
  i1326.id = i1327[0]
  i1326.name = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1329 = data
  i1328.fixedDeltaTime = i1329[0]
  i1328.maximumDeltaTime = i1329[1]
  i1328.timeScale = i1329[2]
  i1328.maximumParticleTimestep = i1329[3]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1331 = data
  i1330.gravity = new pc.Vec3( i1331[0], i1331[1], i1331[2] )
  i1330.defaultSolverIterations = i1331[3]
  i1330.bounceThreshold = i1331[4]
  i1330.autoSyncTransforms = !!i1331[5]
  i1330.autoSimulation = !!i1331[6]
  var i1333 = i1331[7]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'material')
  i1338.gravity = new pc.Vec2( i1339[2], i1339[3] )
  i1338.positionIterations = i1339[4]
  i1338.velocityIterations = i1339[5]
  i1338.velocityThreshold = i1339[6]
  i1338.maxLinearCorrection = i1339[7]
  i1338.maxAngularCorrection = i1339[8]
  i1338.maxTranslationSpeed = i1339[9]
  i1338.maxRotationSpeed = i1339[10]
  i1338.baumgarteScale = i1339[11]
  i1338.baumgarteTOIScale = i1339[12]
  i1338.timeToSleep = i1339[13]
  i1338.linearSleepTolerance = i1339[14]
  i1338.angularSleepTolerance = i1339[15]
  i1338.defaultContactOffset = i1339[16]
  i1338.autoSimulation = !!i1339[17]
  i1338.queriesHitTriggers = !!i1339[18]
  i1338.queriesStartInColliders = !!i1339[19]
  i1338.callbacksOnDisable = !!i1339[20]
  i1338.reuseCollisionCallbacks = !!i1339[21]
  i1338.autoSyncTransforms = !!i1339[22]
  var i1341 = i1339[23]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1341[i + 0]) );
  }
  i1338.collisionMatrix = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1345 = data
  i1344.enabled = !!i1345[0]
  i1344.layerId = i1345[1]
  i1344.otherLayerId = i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1349[i + 0]) );
  }
  i1346.qualityLevels = i1348
  var i1351 = i1347[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( i1351[i + 0] );
  }
  i1346.names = i1350
  i1346.shadows = i1347[2]
  i1346.anisotropicFiltering = i1347[3]
  i1346.antiAliasing = i1347[4]
  i1346.lodBias = i1347[5]
  i1346.shadowCascades = i1347[6]
  i1346.shadowDistance = i1347[7]
  i1346.shadowmaskMode = i1347[8]
  i1346.shadowProjection = i1347[9]
  i1346.shadowResolution = i1347[10]
  i1346.softParticles = !!i1347[11]
  i1346.softVegetation = !!i1347[12]
  i1346.activeColorSpace = i1347[13]
  i1346.desiredColorSpace = i1347[14]
  i1346.masterTextureLimit = i1347[15]
  i1346.maxQueuedFrames = i1347[16]
  i1346.particleRaycastBudget = i1347[17]
  i1346.pixelLightCount = i1347[18]
  i1346.realtimeReflectionProbes = !!i1347[19]
  i1346.shadowCascade2Split = i1347[20]
  i1346.shadowCascade4Split = new pc.Vec3( i1347[21], i1347[22], i1347[23] )
  i1346.streamingMipmapsActive = !!i1347[24]
  i1346.vSyncCount = i1347[25]
  i1346.asyncUploadBufferSize = i1347[26]
  i1346.asyncUploadTimeSlice = i1347[27]
  i1346.billboardsFaceCameraPosition = !!i1347[28]
  i1346.shadowNearPlaneOffset = i1347[29]
  i1346.streamingMipmapsMemoryBudget = i1347[30]
  i1346.maximumLODLevel = i1347[31]
  i1346.streamingMipmapsAddAllCameras = !!i1347[32]
  i1346.streamingMipmapsMaxLevelReduction = i1347[33]
  i1346.streamingMipmapsRenderersPerFrame = i1347[34]
  i1346.resolutionScalingFixedDPIFactor = i1347[35]
  i1346.streamingMipmapsMaxFileIORequests = i1347[36]
  i1346.currentQualityLevel = i1347[37]
  return i1346
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1355 = data
  i1354.m_GlyphIndex = i1355[0]
  i1354.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1355[1], i1354.m_GlyphValueRecord)
  return i1354
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1357 = data
  i1356.m_XCoordinate = i1357[0]
  i1356.m_YCoordinate = i1357[1]
  return i1356
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1359 = data
  i1358.m_XPositionAdjustment = i1359[0]
  i1358.m_YPositionAdjustment = i1359[1]
  return i1358
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1361 = data
  i1360.xPlacement = i1361[0]
  i1360.yPlacement = i1361[1]
  i1360.xAdvance = i1361[2]
  i1360.yAdvance = i1361[3]
  return i1360
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1363 = data
  i1362.m_XPlacement = i1363[0]
  i1362.m_YPlacement = i1363[1]
  i1362.m_XAdvance = i1363[2]
  i1362.m_YAdvance = i1363[3]
  return i1362
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[28],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[28],"94":[95],"96":[97],"98":[97],"27":[13],"99":[56],"100":[20],"55":[101],"102":[20],"20":[101],"24":[20],"103":[20],"104":[101],"105":[101],"106":[101],"107":[13],"108":[16,13],"109":[95],"110":[16,13],"111":[25,95],"112":[95],"113":[95,114],"115":[73],"116":[80],"117":[118],"119":[120],"121":[5],"122":[28],"123":[124],"125":[13],"126":[95,13],"32":[13,16],"127":[13],"128":[16,13],"129":[95],"130":[16,13],"131":[13],"132":[133],"134":[133],"135":[133],"136":[13],"137":[13],"30":[27],"15":[16,13],"138":[13],"29":[27],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[16,13],"149":[13],"150":[13],"151":[13],"36":[13],"152":[16,13],"153":[13],"154":[52],"155":[52],"53":[52],"156":[52],"157":[28],"158":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","ItemToTarget","RongBien","Item","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CapsuleCollider","ItemClickable","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","OilBrush","UnityEngine.Collider","ItemDragChildRotator","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "60.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v66_sushi";

Deserializers.lunaAppID = "27404";

Deserializers.projectId = "8cfa86f1caa935a41ac1489c608212f7";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1764";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5019";

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

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d22124f8-e0b3-45ca-8d94-ac32c84b50c7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

