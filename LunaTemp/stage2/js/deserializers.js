var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointSpring' )
  var i675 = data
  i674.spring = i675[0]
  i674.damper = i675[1]
  i674.targetPosition = i675[2]
  return i674
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointMotor' )
  var i677 = data
  i676.m_TargetVelocity = i677[0]
  i676.m_Force = i677[1]
  i676.m_FreeSpin = i677[2]
  return i676
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointLimits' )
  var i679 = data
  i678.m_Min = i679[0]
  i678.m_Max = i679[1]
  i678.m_Bounciness = i679[2]
  i678.m_BounceMinVelocity = i679[3]
  i678.m_ContactDistance = i679[4]
  i678.minBounce = i679[5]
  i678.maxBounce = i679[6]
  return i678
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointDrive' )
  var i681 = data
  i680.m_PositionSpring = i681[0]
  i680.m_PositionDamper = i681[1]
  i680.m_MaximumForce = i681[2]
  i680.m_UseAcceleration = i681[3]
  return i680
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i683 = data
  i682.m_Spring = i683[0]
  i682.m_Damper = i683[1]
  return i682
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i685 = data
  i684.m_Limit = i685[0]
  i684.m_Bounciness = i685[1]
  i684.m_ContactDistance = i685[2]
  return i684
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i687 = data
  i686.m_ExtremumSlip = i687[0]
  i686.m_ExtremumValue = i687[1]
  i686.m_AsymptoteSlip = i687[2]
  i686.m_AsymptoteValue = i687[3]
  i686.m_Stiffness = i687[4]
  return i686
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i689 = data
  i688.m_LowerAngle = i689[0]
  i688.m_UpperAngle = i689[1]
  return i688
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i691 = data
  i690.m_MotorSpeed = i691[0]
  i690.m_MaximumMotorTorque = i691[1]
  return i690
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i693 = data
  i692.m_DampingRatio = i693[0]
  i692.m_Frequency = i693[1]
  i692.m_Angle = i693[2]
  return i692
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i695 = data
  i694.m_LowerTranslation = i695[0]
  i694.m_UpperTranslation = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i696 = root || new pc.UnityMaterial()
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'shader')
  i696.renderQueue = i697[3]
  i696.enableInstancing = !!i697[4]
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i699[i + 0]) );
  }
  i696.floatParameters = i698
  var i701 = i697[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i701[i + 0]) );
  }
  i696.colorParameters = i700
  var i703 = i697[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i703[i + 0]) );
  }
  i696.vectorParameters = i702
  var i705 = i697[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i705[i + 0]) );
  }
  i696.textureParameters = i704
  var i707 = i697[9]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i707[i + 0]) );
  }
  i696.materialFlags = i706
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = new pc.Color(i715[1], i715[2], i715[3], i715[4])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Vec4( i719[1], i719[2], i719[3], i719[4] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'value')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i727 = data
  i726.name = i727[0]
  i726.enabled = !!i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i729 = data
  i728.name = i729[0]
  i728.width = i729[1]
  i728.height = i729[2]
  i728.mipmapCount = i729[3]
  i728.anisoLevel = i729[4]
  i728.filterMode = i729[5]
  i728.hdr = !!i729[6]
  i728.format = i729[7]
  i728.wrapMode = i729[8]
  i728.alphaIsTransparency = !!i729[9]
  i728.alphaSource = i729[10]
  i728.graphicsFormat = i729[11]
  i728.sRGBTexture = !!i729[12]
  i728.desiredColorSpace = i729[13]
  i728.wrapU = i729[14]
  i728.wrapV = i729[15]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i731 = data
  i730.position = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.scale = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.rotation = new pc.Quat(i731[6], i731[7], i731[8], i731[9])
  return i730
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i732 = root || request.c( 'HeartEffect' )
  var i733 = data
  i732.defaultLifeTime = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'tf')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i735 = data
  i734.color = new pc.Color(i735[0], i735[1], i735[2], i735[3])
  request.r(i735[4], i735[5], 0, i734, 'sprite')
  i734.flipX = !!i735[6]
  i734.flipY = !!i735[7]
  i734.drawMode = i735[8]
  i734.size = new pc.Vec2( i735[9], i735[10] )
  i734.tileMode = i735[11]
  i734.adaptiveModeThreshold = i735[12]
  i734.maskInteraction = i735[13]
  i734.spriteSortPoint = i735[14]
  i734.enabled = !!i735[15]
  request.r(i735[16], i735[17], 0, i734, 'sharedMaterial')
  var i737 = i735[18]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sharedMaterials = i736
  i734.receiveShadows = !!i735[19]
  i734.shadowCastingMode = i735[20]
  i734.sortingLayerID = i735[21]
  i734.sortingOrder = i735[22]
  i734.lightmapIndex = i735[23]
  i734.lightmapSceneIndex = i735[24]
  i734.lightmapScaleOffset = new pc.Vec4( i735[25], i735[26], i735[27], i735[28] )
  i734.lightProbeUsage = i735[29]
  i734.reflectionProbeUsage = i735[30]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i741 = data
  i740.name = i741[0]
  i740.tagId = i741[1]
  i740.enabled = !!i741[2]
  i740.isStatic = !!i741[3]
  i740.layer = i741[4]
  return i740
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i742 = root || request.c( 'HeartBreakEffect' )
  var i743 = data
  i742.defaultLifeTime = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'tf')
  return i742
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i744 = root || request.c( 'BlinkEffect' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'tf')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'mesh')
  i746.meshCount = i747[2]
  i746.activeVertexStreamsCount = i747[3]
  i746.alignment = i747[4]
  i746.renderMode = i747[5]
  i746.sortMode = i747[6]
  i746.lengthScale = i747[7]
  i746.velocityScale = i747[8]
  i746.cameraVelocityScale = i747[9]
  i746.normalDirection = i747[10]
  i746.sortingFudge = i747[11]
  i746.minParticleSize = i747[12]
  i746.maxParticleSize = i747[13]
  i746.pivot = new pc.Vec3( i747[14], i747[15], i747[16] )
  request.r(i747[17], i747[18], 0, i746, 'trailMaterial')
  i746.applyActiveColorSpace = !!i747[19]
  i746.enabled = !!i747[20]
  request.r(i747[21], i747[22], 0, i746, 'sharedMaterial')
  var i749 = i747[23]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sharedMaterials = i748
  i746.receiveShadows = !!i747[24]
  i746.shadowCastingMode = i747[25]
  i746.sortingLayerID = i747[26]
  i746.sortingOrder = i747[27]
  i746.lightmapIndex = i747[28]
  i746.lightmapSceneIndex = i747[29]
  i746.lightmapScaleOffset = new pc.Vec4( i747[30], i747[31], i747[32], i747[33] )
  i746.lightProbeUsage = i747[34]
  i746.reflectionProbeUsage = i747[35]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i751 = data
  i750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i751[0], i750.main)
  i750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i751[1], i750.colorBySpeed)
  i750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i751[2], i750.colorOverLifetime)
  i750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i751[3], i750.emission)
  i750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i751[4], i750.rotationBySpeed)
  i750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i751[5], i750.rotationOverLifetime)
  i750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i751[6], i750.shape)
  i750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i751[7], i750.sizeBySpeed)
  i750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i751[8], i750.sizeOverLifetime)
  i750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i751[9], i750.textureSheetAnimation)
  i750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i751[10], i750.velocityOverLifetime)
  i750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i751[11], i750.noise)
  i750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i751[12], i750.inheritVelocity)
  i750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i751[13], i750.forceOverLifetime)
  i750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i751[14], i750.limitVelocityOverLifetime)
  i750.useAutoRandomSeed = !!i751[15]
  i750.randomSeed = i751[16]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemMain()
  var i753 = data
  i752.duration = i753[0]
  i752.loop = !!i753[1]
  i752.prewarm = !!i753[2]
  i752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.startDelay)
  i752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.startLifetime)
  i752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[5], i752.startSpeed)
  i752.startSize3D = !!i753[6]
  i752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.startSizeX)
  i752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[8], i752.startSizeY)
  i752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.startSizeZ)
  i752.startRotation3D = !!i753[10]
  i752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.startRotationX)
  i752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[12], i752.startRotationY)
  i752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[13], i752.startRotationZ)
  i752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[14], i752.startColor)
  i752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[15], i752.gravityModifier)
  i752.simulationSpace = i753[16]
  request.r(i753[17], i753[18], 0, i752, 'customSimulationSpace')
  i752.simulationSpeed = i753[19]
  i752.useUnscaledTime = !!i753[20]
  i752.scalingMode = i753[21]
  i752.playOnAwake = !!i753[22]
  i752.maxParticles = i753[23]
  i752.emitterVelocityMode = i753[24]
  i752.stopAction = i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i754 = root || new pc.MinMaxCurve()
  var i755 = data
  i754.mode = i755[0]
  i754.curveMin = new pc.AnimationCurve( { keys_flow: i755[1] } )
  i754.curveMax = new pc.AnimationCurve( { keys_flow: i755[2] } )
  i754.curveMultiplier = i755[3]
  i754.constantMin = i755[4]
  i754.constantMax = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i756 = root || new pc.MinMaxGradient()
  var i757 = data
  i756.mode = i757[0]
  i756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[1], i756.gradientMin)
  i756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[2], i756.gradientMax)
  i756.colorMin = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.colorMax = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i759 = data
  i758.mode = i759[0]
  var i761 = i759[1]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i761[i + 0]) );
  }
  i758.colorKeys = i760
  var i763 = i759[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i763[i + 0]) );
  }
  i758.alphaKeys = i762
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemColorBySpeed()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i765[1], i764.color)
  i764.range = new pc.Vec2( i765[2], i765[3] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i769 = data
  i768.color = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.time = i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i773 = data
  i772.alpha = i773[0]
  i772.time = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemEmitter()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.rateOverTime)
  i776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.rateOverDistance)
  var i779 = i777[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i779[i + 0]) );
  }
  i776.bursts = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemBurst()
  var i783 = data
  i782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[0], i782.count)
  i782.cycleCount = i783[1]
  i782.minCount = i783[2]
  i782.maxCount = i783[3]
  i782.repeatInterval = i783[4]
  i782.time = i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemRotationBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  i784.range = new pc.Vec2( i785[5], i785[6] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemShape()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.shapeType = i789[1]
  i788.randomDirectionAmount = i789[2]
  i788.sphericalDirectionAmount = i789[3]
  i788.randomPositionAmount = i789[4]
  i788.alignToDirection = !!i789[5]
  i788.radius = i789[6]
  i788.radiusMode = i789[7]
  i788.radiusSpread = i789[8]
  i788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.radiusSpeed)
  i788.radiusThickness = i789[10]
  i788.angle = i789[11]
  i788.length = i789[12]
  i788.boxThickness = new pc.Vec3( i789[13], i789[14], i789[15] )
  i788.meshShapeType = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'mesh')
  request.r(i789[19], i789[20], 0, i788, 'meshRenderer')
  request.r(i789[21], i789[22], 0, i788, 'skinnedMeshRenderer')
  i788.useMeshMaterialIndex = !!i789[23]
  i788.meshMaterialIndex = i789[24]
  i788.useMeshColors = !!i789[25]
  i788.normalOffset = i789[26]
  i788.arc = i789[27]
  i788.arcMode = i789[28]
  i788.arcSpread = i789[29]
  i788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[30], i788.arcSpeed)
  i788.donutRadius = i789[31]
  i788.position = new pc.Vec3( i789[32], i789[33], i789[34] )
  i788.rotation = new pc.Vec3( i789[35], i789[36], i789[37] )
  i788.scale = new pc.Vec3( i789[38], i789[39], i789[40] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemSizeBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.mode = i795[1]
  i794.animation = i795[2]
  i794.numTilesX = i795[3]
  i794.numTilesY = i795[4]
  i794.useRandomRow = !!i795[5]
  i794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[6], i794.frameOverTime)
  i794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.startFrame)
  i794.cycleCount = i795[8]
  i794.rowIndex = i795[9]
  i794.flipU = i795[10]
  i794.flipV = i795[11]
  i794.spriteCount = i795[12]
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sprites = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[4], i800.radial)
  i800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[5], i800.speedModifier)
  i800.space = i801[6]
  i800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.orbitalX)
  i800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.orbitalY)
  i800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[9], i800.orbitalZ)
  i800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[10], i800.orbitalOffsetX)
  i800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[11], i800.orbitalOffsetY)
  i800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[12], i800.orbitalOffsetZ)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemNoise()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.separateAxes = !!i803[1]
  i802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.strengthX)
  i802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.strengthY)
  i802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.strengthZ)
  i802.frequency = i803[5]
  i802.damping = !!i803[6]
  i802.octaveCount = i803[7]
  i802.octaveMultiplier = i803[8]
  i802.octaveScale = i803[9]
  i802.quality = i803[10]
  i802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.scrollSpeed)
  i802.scrollSpeedMultiplier = i803[12]
  i802.remapEnabled = !!i803[13]
  i802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[14], i802.remapX)
  i802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[15], i802.remapY)
  i802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[16], i802.remapZ)
  i802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[17], i802.positionAmount)
  i802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[18], i802.rotationAmount)
  i802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[19], i802.sizeAmount)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemInheritVelocity()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.curve)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemForceOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.space = i807[4]
  i806.randomized = !!i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.limit)
  i808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.limitX)
  i808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.limitY)
  i808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.limitZ)
  i808.dampen = i809[5]
  i808.separateAxes = !!i809[6]
  i808.space = i809[7]
  i808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.drag)
  i808.multiplyDragByParticleSize = !!i809[9]
  i808.multiplyDragByParticleVelocity = !!i809[10]
  return i808
}

Deserializers["GreenPiece"] = function (request, data, root) {
  var i810 = root || request.c( 'GreenPiece' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'tf')
  return i810
}

Deserializers["YellowPiece"] = function (request, data, root) {
  var i812 = root || request.c( 'YellowPiece' )
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i817 = data
  i816.pivot = new pc.Vec2( i817[0], i817[1] )
  i816.anchorMin = new pc.Vec2( i817[2], i817[3] )
  i816.anchorMax = new pc.Vec2( i817[4], i817[5] )
  i816.sizeDelta = new pc.Vec2( i817[6], i817[7] )
  i816.anchoredPosition3D = new pc.Vec3( i817[8], i817[9], i817[10] )
  i816.rotation = new pc.Quat(i817[11], i817[12], i817[13], i817[14])
  i816.scale = new pc.Vec3( i817[15], i817[16], i817[17] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i819 = data
  i818.planeDistance = i819[0]
  i818.referencePixelsPerUnit = i819[1]
  i818.isFallbackOverlay = !!i819[2]
  i818.renderMode = i819[3]
  i818.renderOrder = i819[4]
  i818.sortingLayerName = i819[5]
  i818.sortingOrder = i819[6]
  i818.scaleFactor = i819[7]
  request.r(i819[8], i819[9], 0, i818, 'worldCamera')
  i818.overrideSorting = !!i819[10]
  i818.pixelPerfect = !!i819[11]
  i818.targetDisplay = i819[12]
  i818.overridePixelPerfect = !!i819[13]
  i818.enabled = !!i819[14]
  return i818
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i821 = data
  i820.m_UiScaleMode = i821[0]
  i820.m_ReferencePixelsPerUnit = i821[1]
  i820.m_ScaleFactor = i821[2]
  i820.m_ReferenceResolution = new pc.Vec2( i821[3], i821[4] )
  i820.m_ScreenMatchMode = i821[5]
  i820.m_MatchWidthOrHeight = i821[6]
  i820.m_PhysicalUnit = i821[7]
  i820.m_FallbackScreenDPI = i821[8]
  i820.m_DefaultSpriteDPI = i821[9]
  i820.m_DynamicPixelsPerUnit = i821[10]
  i820.m_PresetInfoIsWorld = !!i821[11]
  return i820
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i823 = data
  i822.m_IgnoreReversedGraphics = !!i823[0]
  i822.m_BlockingObjects = i823[1]
  i822.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i823[2] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'animatorController')
  request.r(i825[2], i825[3], 0, i824, 'avatar')
  i824.updateMode = i825[4]
  i824.hasTransformHierarchy = !!i825[5]
  i824.applyRootMotion = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.humanBones = i826
  i824.enabled = !!i825[8]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i831 = data
  i830.cullTransparentMesh = !!i831[0]
  return i830
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Image' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_Sprite')
  i832.m_Type = i833[2]
  i832.m_PreserveAspect = !!i833[3]
  i832.m_FillCenter = !!i833[4]
  i832.m_FillMethod = i833[5]
  i832.m_FillAmount = i833[6]
  i832.m_FillClockwise = !!i833[7]
  i832.m_FillOrigin = i833[8]
  i832.m_UseSpriteMesh = !!i833[9]
  i832.m_PixelsPerUnitMultiplier = i833[10]
  request.r(i833[11], i833[12], 0, i832, 'm_Material')
  i832.m_Maskable = !!i833[13]
  i832.m_Color = new pc.Color(i833[14], i833[15], i833[16], i833[17])
  i832.m_RaycastTarget = !!i833[18]
  i832.m_RaycastPadding = new pc.Vec4( i833[19], i833[20], i833[21], i833[22] )
  return i832
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Button' )
  var i835 = data
  i834.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i835[0], i834.m_OnClick)
  i834.m_Navigation = request.d('UnityEngine.UI.Navigation', i835[1], i834.m_Navigation)
  i834.m_Transition = i835[2]
  i834.m_Colors = request.d('UnityEngine.UI.ColorBlock', i835[3], i834.m_Colors)
  i834.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i835[4], i834.m_SpriteState)
  i834.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i835[5], i834.m_AnimationTriggers)
  i834.m_Interactable = !!i835[6]
  request.r(i835[7], i835[8], 0, i834, 'm_TargetGraphic')
  return i834
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i837 = data
  i836.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i837[0], i836.m_PersistentCalls)
  return i836
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('UnityEngine.Events.PersistentCall', i841[i + 0]));
  }
  i838.m_Calls = i840
  return i838
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_Target')
  i844.m_TargetAssemblyTypeName = i845[2]
  i844.m_MethodName = i845[3]
  i844.m_Mode = i845[4]
  i844.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i845[5], i844.m_Arguments)
  i844.m_CallState = i845[6]
  return i844
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_ObjectArgument')
  i846.m_ObjectArgumentAssemblyTypeName = i847[2]
  i846.m_IntArgument = i847[3]
  i846.m_FloatArgument = i847[4]
  i846.m_StringArgument = i847[5]
  i846.m_BoolArgument = !!i847[6]
  return i846
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i849 = data
  i848.m_Mode = i849[0]
  i848.m_WrapAround = !!i849[1]
  request.r(i849[2], i849[3], 0, i848, 'm_SelectOnUp')
  request.r(i849[4], i849[5], 0, i848, 'm_SelectOnDown')
  request.r(i849[6], i849[7], 0, i848, 'm_SelectOnLeft')
  request.r(i849[8], i849[9], 0, i848, 'm_SelectOnRight')
  return i848
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i851 = data
  i850.m_NormalColor = new pc.Color(i851[0], i851[1], i851[2], i851[3])
  i850.m_HighlightedColor = new pc.Color(i851[4], i851[5], i851[6], i851[7])
  i850.m_PressedColor = new pc.Color(i851[8], i851[9], i851[10], i851[11])
  i850.m_SelectedColor = new pc.Color(i851[12], i851[13], i851[14], i851[15])
  i850.m_DisabledColor = new pc.Color(i851[16], i851[17], i851[18], i851[19])
  i850.m_ColorMultiplier = i851[20]
  i850.m_FadeDuration = i851[21]
  return i850
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_HighlightedSprite')
  request.r(i853[2], i853[3], 0, i852, 'm_PressedSprite')
  request.r(i853[4], i853[5], 0, i852, 'm_SelectedSprite')
  request.r(i853[6], i853[7], 0, i852, 'm_DisabledSprite')
  return i852
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i855 = data
  i854.m_NormalTrigger = i855[0]
  i854.m_HighlightedTrigger = i855[1]
  i854.m_PressedTrigger = i855[2]
  i854.m_SelectedTrigger = i855[3]
  i854.m_DisabledTrigger = i855[4]
  return i854
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i857 = data
  i856.m_hasFontAssetChanged = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'm_baseMaterial')
  i856.m_maskOffset = new pc.Vec4( i857[3], i857[4], i857[5], i857[6] )
  i856.m_text = i857[7]
  i856.m_isRightToLeft = !!i857[8]
  request.r(i857[9], i857[10], 0, i856, 'm_fontAsset')
  request.r(i857[11], i857[12], 0, i856, 'm_sharedMaterial')
  var i859 = i857[13]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.m_fontSharedMaterials = i858
  request.r(i857[14], i857[15], 0, i856, 'm_fontMaterial')
  var i861 = i857[16]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.m_fontMaterials = i860
  i856.m_fontColor32 = UnityEngine.Color32.ConstructColor(i857[17], i857[18], i857[19], i857[20])
  i856.m_fontColor = new pc.Color(i857[21], i857[22], i857[23], i857[24])
  i856.m_enableVertexGradient = !!i857[25]
  i856.m_colorMode = i857[26]
  i856.m_fontColorGradient = request.d('TMPro.VertexGradient', i857[27], i856.m_fontColorGradient)
  request.r(i857[28], i857[29], 0, i856, 'm_fontColorGradientPreset')
  request.r(i857[30], i857[31], 0, i856, 'm_spriteAsset')
  i856.m_tintAllSprites = !!i857[32]
  request.r(i857[33], i857[34], 0, i856, 'm_StyleSheet')
  i856.m_TextStyleHashCode = i857[35]
  i856.m_overrideHtmlColors = !!i857[36]
  i856.m_faceColor = UnityEngine.Color32.ConstructColor(i857[37], i857[38], i857[39], i857[40])
  i856.m_fontSize = i857[41]
  i856.m_fontSizeBase = i857[42]
  i856.m_fontWeight = i857[43]
  i856.m_enableAutoSizing = !!i857[44]
  i856.m_fontSizeMin = i857[45]
  i856.m_fontSizeMax = i857[46]
  i856.m_fontStyle = i857[47]
  i856.m_HorizontalAlignment = i857[48]
  i856.m_VerticalAlignment = i857[49]
  i856.m_textAlignment = i857[50]
  i856.m_characterSpacing = i857[51]
  i856.m_wordSpacing = i857[52]
  i856.m_lineSpacing = i857[53]
  i856.m_lineSpacingMax = i857[54]
  i856.m_paragraphSpacing = i857[55]
  i856.m_charWidthMaxAdj = i857[56]
  i856.m_TextWrappingMode = i857[57]
  i856.m_wordWrappingRatios = i857[58]
  i856.m_overflowMode = i857[59]
  request.r(i857[60], i857[61], 0, i856, 'm_linkedTextComponent')
  request.r(i857[62], i857[63], 0, i856, 'parentLinkedComponent')
  i856.m_enableKerning = !!i857[64]
  var i863 = i857[65]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(i863[i + 0]);
  }
  i856.m_ActiveFontFeatures = i862
  i856.m_enableExtraPadding = !!i857[66]
  i856.checkPaddingRequired = !!i857[67]
  i856.m_isRichText = !!i857[68]
  i856.m_parseCtrlCharacters = !!i857[69]
  i856.m_isOrthographic = !!i857[70]
  i856.m_isCullingEnabled = !!i857[71]
  i856.m_horizontalMapping = i857[72]
  i856.m_verticalMapping = i857[73]
  i856.m_uvLineOffset = i857[74]
  i856.m_geometrySortingOrder = i857[75]
  i856.m_IsTextObjectScaleStatic = !!i857[76]
  i856.m_VertexBufferAutoSizeReduction = !!i857[77]
  i856.m_useMaxVisibleDescender = !!i857[78]
  i856.m_pageToDisplay = i857[79]
  i856.m_margin = new pc.Vec4( i857[80], i857[81], i857[82], i857[83] )
  i856.m_isUsingLegacyAnimationComponent = !!i857[84]
  i856.m_isVolumetricText = !!i857[85]
  request.r(i857[86], i857[87], 0, i856, 'm_Material')
  i856.m_EmojiFallbackSupport = !!i857[88]
  i856.m_Maskable = !!i857[89]
  i856.m_Color = new pc.Color(i857[90], i857[91], i857[92], i857[93])
  i856.m_RaycastTarget = !!i857[94]
  i856.m_RaycastPadding = new pc.Vec4( i857[95], i857[96], i857[97], i857[98] )
  return i856
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.VertexGradient' )
  var i865 = data
  i864.topLeft = new pc.Color(i865[0], i865[1], i865[2], i865[3])
  i864.topRight = new pc.Color(i865[4], i865[5], i865[6], i865[7])
  i864.bottomLeft = new pc.Color(i865[8], i865[9], i865[10], i865[11])
  i864.bottomRight = new pc.Color(i865[12], i865[13], i865[14], i865[15])
  return i864
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i868 = root || request.c( 'Ply_Pool' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Ply_Pool+PoolAmount', i871[i + 0]) );
  }
  i868.poolAmounts = i870
  request.r(i869[1], i869[2], 0, i868, 'poolHolder')
  return i868
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i874 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i875 = data
  i874.type = i875[0]
  i874.amount = i875[1]
  request.r(i875[2], i875[3], 0, i874, 'gameUnit')
  return i874
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i876 = root || request.c( 'Ply_SoundManager' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Ply_SoundManager+FxAudio', i879[i + 0]) );
  }
  i876.fxAudios = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i876.audioClips = i880
  request.r(i877[2], i877[3], 0, i876, 'sound')
  return i876
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i884 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i885 = data
  i884.fxType = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'audioClip')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'clip')
  request.r(i889[2], i889[3], 0, i888, 'outputAudioMixerGroup')
  i888.playOnAwake = !!i889[4]
  i888.loop = !!i889[5]
  i888.time = i889[6]
  i888.volume = i889[7]
  i888.pitch = i889[8]
  i888.enabled = !!i889[9]
  return i888
}

Deserializers["GameManager"] = function (request, data, root) {
  var i890 = root || request.c( 'GameManager' )
  var i891 = data
  i890.isPlaying = !!i891[0]
  i890.isTutorial = !!i891[1]
  i890.isGotoStore = !!i891[2]
  i890.countMove = i891[3]
  i890.currentLayer = i891[4]
  return i890
}

Deserializers["UIManager"] = function (request, data, root) {
  var i892 = root || request.c( 'UIManager' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'winUI')
  request.r(i893[2], i893[3], 0, i892, 'loseUI')
  request.r(i893[4], i893[5], 0, i892, 'tutorial')
  request.r(i893[6], i893[7], 0, i892, 'downloadBtn')
  request.r(i893[8], i893[9], 0, i892, 'image')
  i892.screenWidth = i893[10]
  i892.screenHeight = i893[11]
  i892.scaleHeightOnWidth = i893[12]
  i892.isVertical = !!i893[13]
  request.r(i893[14], i893[15], 0, i892, 'cam')
  i892.useContinuousScaling = !!i893[16]
  i892.baseOrthographicSize = i893[17]
  i892.baseAspect = i893[18]
  i892.landscapeSize = i893[19]
  i892.defaultPortraitSize = i893[20]
  var i895 = i893[21]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('ScreenScaleStep', i895[i + 0]));
  }
  i892.discreteScaleSteps = i894
  return i892
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i898 = root || request.c( 'ScreenScaleStep' )
  var i899 = data
  i898.heightOnWidthRatio = i899[0]
  i898.orthographicSize = i899[1]
  return i898
}

Deserializers["InputManager"] = function (request, data, root) {
  var i900 = root || request.c( 'InputManager' )
  var i901 = data
  i900.groundPiece = UnityEngine.LayerMask.FromIntegerValue( i901[0] )
  i900.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i901[1] )
  i900.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i901[2] )
  i900.isDragging = !!i901[3]
  return i900
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i902 = root || request.c( 'PhaseManager' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('PhaseData', i905[i + 0]));
  }
  i902.phases = i904
  i902.transitionDuration = i903[1]
  i902.delayBeforeNextPhase = i903[2]
  i902.offScreenLeftX = i903[3]
  i902.offScreenRightX = i903[4]
  i902.centerScreenX = i903[5]
  i902.currentPhaseIndex = i903[6]
  i902.currentStepCount = i903[7]
  return i902
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i908 = root || request.c( 'PhaseData' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'phaseObject')
  i908.totalSteps = i909[2]
  i908.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i909[3], i908.onPhaseReady)
  return i908
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i911 = data
  i910.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i911[0], i910.m_PersistentCalls)
  return i910
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i912 = root || request.c( 'HandTutManager' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i912.items = i914
  request.r(i913[1], i913[2], 0, i912, 'knife')
  request.r(i913[3], i913[4], 0, i912, 'handTutObject')
  request.r(i913[5], i913[6], 0, i912, 'tapToCookObject')
  var i917 = i913[7]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i912.inWaterItems = i916
  request.r(i913[8], i913[9], 0, i912, 'sink')
  request.r(i913[10], i913[11], 0, i912, 'napBonNgoai')
  request.r(i913[12], i913[13], 0, i912, 'napBonTrong')
  request.r(i913[14], i913[15], 0, i912, 'waterToggle')
  i912.idleDelay = i913[16]
  i912.moveDuration = i913[17]
  i912.clickScaleDuration = i913[18]
  i912.waitAtEndDuration = i913[19]
  i912.handZPosition = i913[20]
  i912.clickScaleMultiplier = i913[21]
  i912.moveEase = i913[22]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i923 = data
  i922.aspect = i923[0]
  i922.orthographic = !!i923[1]
  i922.orthographicSize = i923[2]
  i922.backgroundColor = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.nearClipPlane = i923[7]
  i922.farClipPlane = i923[8]
  i922.fieldOfView = i923[9]
  i922.depth = i923[10]
  i922.clearFlags = i923[11]
  i922.cullingMask = i923[12]
  i922.rect = i923[13]
  request.r(i923[14], i923[15], 0, i922, 'targetTexture')
  i922.usePhysicalProperties = !!i923[16]
  i922.focalLength = i923[17]
  i922.sensorSize = new pc.Vec2( i923[18], i923[19] )
  i922.lensShift = new pc.Vec2( i923[20], i923[21] )
  i922.gateFit = i923[22]
  i922.commandBufferCount = i923[23]
  i922.cameraType = i923[24]
  i922.enabled = !!i923[25]
  return i922
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_FirstSelected')
  i924.m_sendNavigationEvents = !!i925[2]
  i924.m_DragThreshold = i925[3]
  return i924
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i927 = data
  i926.m_HorizontalAxis = i927[0]
  i926.m_VerticalAxis = i927[1]
  i926.m_SubmitButton = i927[2]
  i926.m_CancelButton = i927[3]
  i926.m_InputActionsPerSecond = i927[4]
  i926.m_RepeatDelay = i927[5]
  i926.m_ForceModuleActive = !!i927[6]
  i926.m_SendPointerHoverToParent = !!i927[7]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i929 = data
  i928.center = new pc.Vec3( i929[0], i929[1], i929[2] )
  i928.radius = i929[3]
  i928.enabled = !!i929[4]
  i928.isTrigger = !!i929[5]
  request.r(i929[6], i929[7], 0, i928, 'material')
  return i928
}

Deserializers["Item"] = function (request, data, root) {
  var i930 = root || request.c( 'Item' )
  var i931 = data
  i930.isDone = !!i931[0]
  i930.onProcess = !!i931[1]
  request.r(i931[2], i931[3], 0, i930, 'itemDraggable')
  request.r(i931[4], i931[5], 0, i930, 'itemClickable')
  request.r(i931[6], i931[7], 0, i930, 'itemStirring')
  request.r(i931[8], i931[9], 0, i930, 'itemKnifeSpriteMaskCutter')
  request.r(i931[10], i931[11], 0, i930, 'itemSpriteMaskPainter')
  request.r(i931[12], i931[13], 0, i930, 'itemMoveToTarget')
  request.r(i931[14], i931[15], 0, i930, 'animator')
  i930.itemType = i931[16]
  request.r(i931[17], i931[18], 0, i930, 'spriteRenderer')
  i930.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i931[19], i930.onKnifeIn)
  i930.playMoveToTargetFinishSound = !!i931[20]
  i930.moveToTargetFinishFxType = i931[21]
  return i930
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i932 = root || request.c( 'ItemDraggable' )
  var i933 = data
  i932.isDraggable = !!i933[0]
  i932.isUseOrderlayer = !!i933[1]
  request.r(i933[2], i933[3], 0, i932, 'returnTransform')
  i932.setParentToReturnTransform = !!i933[4]
  i932.returnToExactReturnTransformPosition = !!i933[5]
  i932.targetItemType = i933[6]
  request.r(i933[7], i933[8], 0, i932, 'item')
  i932.checkState = !!i933[9]
  request.r(i933[10], i933[11], 0, i932, 'shadowObject')
  i932.liftOffset = i933[12]
  i932.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i933[13], i932.onBeginDrag)
  i932.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i933[14], i932.onDropSuccess)
  i932.onDropFail = request.d('UnityEngine.Events.UnityEvent', i933[15], i932.onDropFail)
  return i932
}

Deserializers["Ply_MoveToTarget"] = function (request, data, root) {
  var i934 = root || request.c( 'Ply_MoveToTarget' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'defaultTarget')
  i934.isMove2D = !!i935[2]
  i934.useVectorTarget = !!i935[3]
  i934.vectorTarget = new pc.Vec2( i935[4], i935[5] )
  i934.duration = i935[6]
  i934.easeType = i935[7]
  i934.moveType = i935[8]
  i934.jumpPower = i935[9]
  i934.numJumps = i935[10]
  i934.rotate360DuringJump = !!i935[11]
  i934.setParentToTarget = !!i935[12]
  i934.onComplete = request.d('UnityEngine.Events.UnityEvent', i935[13], i934.onComplete)
  i934.lockInputWhileMoving = !!i935[14]
  return i934
}

Deserializers["Sink"] = function (request, data, root) {
  var i936 = root || request.c( 'Sink' )
  var i937 = data
  i936.isClose = !!i937[0]
  i936.isWaterDrop = !!i937[1]
  i936.isWaterIn = !!i937[2]
  request.r(i937[3], i937[4], 0, i936, 'waterDrop')
  request.r(i937[5], i937[6], 0, i936, 'waterIn')
  i936.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i937[7], i936.onWaterIn)
  i936.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i937[8], i936.onNoWaterIn)
  request.r(i937[9], i937[10], 0, i936, 'napNgoai')
  request.r(i937[11], i937[12], 0, i936, 'napTrong')
  i936.isDone = !!i937[13]
  i936.onProcess = !!i937[14]
  request.r(i937[15], i937[16], 0, i936, 'itemDraggable')
  request.r(i937[17], i937[18], 0, i936, 'itemClickable')
  request.r(i937[19], i937[20], 0, i936, 'itemStirring')
  request.r(i937[21], i937[22], 0, i936, 'itemKnifeSpriteMaskCutter')
  request.r(i937[23], i937[24], 0, i936, 'itemSpriteMaskPainter')
  request.r(i937[25], i937[26], 0, i936, 'itemMoveToTarget')
  request.r(i937[27], i937[28], 0, i936, 'animator')
  i936.itemType = i937[29]
  request.r(i937[30], i937[31], 0, i936, 'spriteRenderer')
  i936.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i937[32], i936.onKnifeIn)
  i936.playMoveToTargetFinishSound = !!i937[33]
  i936.moveToTargetFinishFxType = i937[34]
  return i936
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i938 = root || request.c( 'Ply_ToggleEvent' )
  var i939 = data
  i938.isOn = !!i939[0]
  i938.applyStateOnEnable = !!i939[1]
  i938.applyStateOnClick = !!i939[2]
  request.r(i939[3], i939[4], 0, i938, 'targetObject')
  i938.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i939[5], i938.onTurnOn)
  i938.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i939[6], i938.onTurnOff)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i941 = data
  i940.center = new pc.Vec3( i941[0], i941[1], i941[2] )
  i940.radius = i941[3]
  i940.height = i941[4]
  i940.direction = i941[5]
  i940.enabled = !!i941[6]
  i940.isTrigger = !!i941[7]
  request.r(i941[8], i941[9], 0, i940, 'material')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i943 = data
  i942.center = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.size = new pc.Vec3( i943[3], i943[4], i943[5] )
  i942.enabled = !!i943[6]
  i942.isTrigger = !!i943[7]
  request.r(i943[8], i943[9], 0, i942, 'material')
  return i942
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i944 = root || request.c( 'CuttingBoard' )
  var i945 = data
  i944.isDone = !!i945[0]
  i944.onProcess = !!i945[1]
  request.r(i945[2], i945[3], 0, i944, 'itemDraggable')
  request.r(i945[4], i945[5], 0, i944, 'itemClickable')
  request.r(i945[6], i945[7], 0, i944, 'itemStirring')
  request.r(i945[8], i945[9], 0, i944, 'itemKnifeSpriteMaskCutter')
  request.r(i945[10], i945[11], 0, i944, 'itemSpriteMaskPainter')
  request.r(i945[12], i945[13], 0, i944, 'itemMoveToTarget')
  request.r(i945[14], i945[15], 0, i944, 'animator')
  i944.itemType = i945[16]
  request.r(i945[17], i945[18], 0, i944, 'spriteRenderer')
  i944.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i945[19], i944.onKnifeIn)
  i944.playMoveToTargetFinishSound = !!i945[20]
  i944.moveToTargetFinishFxType = i945[21]
  return i944
}

Deserializers["Knife"] = function (request, data, root) {
  var i946 = root || request.c( 'Knife' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'knifeIdle')
  request.r(i947[2], i947[3], 0, i946, 'knifeOnDrag')
  i946.isDone = !!i947[4]
  i946.onProcess = !!i947[5]
  request.r(i947[6], i947[7], 0, i946, 'itemDraggable')
  request.r(i947[8], i947[9], 0, i946, 'itemClickable')
  request.r(i947[10], i947[11], 0, i946, 'itemStirring')
  request.r(i947[12], i947[13], 0, i946, 'itemKnifeSpriteMaskCutter')
  request.r(i947[14], i947[15], 0, i946, 'itemSpriteMaskPainter')
  request.r(i947[16], i947[17], 0, i946, 'itemMoveToTarget')
  request.r(i947[18], i947[19], 0, i946, 'animator')
  i946.itemType = i947[20]
  request.r(i947[21], i947[22], 0, i946, 'spriteRenderer')
  i946.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i947[23], i946.onKnifeIn)
  i946.playMoveToTargetFinishSound = !!i947[24]
  i946.moveToTargetFinishFxType = i947[25]
  return i946
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i948 = root || request.c( 'Ply_BobEffect' )
  var i949 = data
  i948.playOnEnable = !!i949[0]
  i948.useLocalMove = !!i949[1]
  i948.bobOffset = new pc.Vec3( i949[2], i949[3], i949[4] )
  i948.duration = i949[5]
  i948.ease = i949[6]
  return i948
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'Ply_TimerEvent' )
  var i951 = data
  i950.duration = i951[0]
  i950.playOnEnable = !!i951[1]
  i950.ignoreTimeScale = !!i951[2]
  i950.autoDisableOnComplete = !!i951[3]
  i950.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i951[4], i950.onTimerStart)
  i950.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i951[5], i950.onTimerComplete)
  i950.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i951[6], i950.onTimerStop)
  return i950
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i952 = root || request.c( 'InWaterItem' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'ply_TimerEvent')
  request.r(i953[2], i953[3], 0, i952, 'ply_BobEffect')
  request.r(i953[4], i953[5], 0, i952, 'collider1')
  request.r(i953[6], i953[7], 0, i952, 'sink')
  i952.isInWater = !!i953[8]
  i952.isOnPlate = !!i953[9]
  i952.isDone = !!i953[10]
  i952.onProcess = !!i953[11]
  request.r(i953[12], i953[13], 0, i952, 'itemDraggable')
  request.r(i953[14], i953[15], 0, i952, 'itemClickable')
  request.r(i953[16], i953[17], 0, i952, 'itemStirring')
  request.r(i953[18], i953[19], 0, i952, 'itemKnifeSpriteMaskCutter')
  request.r(i953[20], i953[21], 0, i952, 'itemSpriteMaskPainter')
  request.r(i953[22], i953[23], 0, i952, 'itemMoveToTarget')
  request.r(i953[24], i953[25], 0, i952, 'animator')
  i952.itemType = i953[26]
  request.r(i953[27], i953[28], 0, i952, 'spriteRenderer')
  i952.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i953[29], i952.onKnifeIn)
  i952.playMoveToTargetFinishSound = !!i953[30]
  i952.moveToTargetFinishFxType = i953[31]
  return i952
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i954 = root || request.c( 'ItemClickable' )
  var i955 = data
  i954.requiredClicks = i955[0]
  i954.infiniteClick = !!i955[1]
  i954.canClick = !!i955[2]
  i954.disableAfterClick = !!i955[3]
  i954.onClick = request.d('UnityEngine.Events.UnityEvent', i955[4], i954.onClick)
  var i957 = i955[5]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.Events.UnityEvent', i957[i + 0]));
  }
  i954.sequentialOnClicks = i956
  i954.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i955[6], i954.onClickComplete)
  return i954
}

Deserializers["Bread"] = function (request, data, root) {
  var i960 = root || request.c( 'Bread' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'knife')
  request.r(i961[2], i961[3], 0, i960, 'cuttingBoard')
  request.r(i961[4], i961[5], 0, i960, 'targetPlate')
  i960.isOnBoard = !!i961[6]
  i960.targetPlateType = i961[7]
  i960.flyToDish = i961[8]
  i960.isFlyToDishAnim = !!i961[9]
  i960.cantCutOnFirst = !!i961[10]
  i960.isDone = !!i961[11]
  i960.onProcess = !!i961[12]
  request.r(i961[13], i961[14], 0, i960, 'itemDraggable')
  request.r(i961[15], i961[16], 0, i960, 'itemClickable')
  request.r(i961[17], i961[18], 0, i960, 'itemStirring')
  request.r(i961[19], i961[20], 0, i960, 'itemKnifeSpriteMaskCutter')
  request.r(i961[21], i961[22], 0, i960, 'itemSpriteMaskPainter')
  request.r(i961[23], i961[24], 0, i960, 'itemMoveToTarget')
  request.r(i961[25], i961[26], 0, i960, 'animator')
  i960.itemType = i961[27]
  request.r(i961[28], i961[29], 0, i960, 'spriteRenderer')
  i960.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i961[30], i960.onKnifeIn)
  i960.playMoveToTargetFinishSound = !!i961[31]
  i960.moveToTargetFinishFxType = i961[32]
  return i960
}

Deserializers["ItemKnifeSpriteMaskCutter"] = function (request, data, root) {
  var i962 = root || request.c( 'ItemKnifeSpriteMaskCutter' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'knifeTransform')
  i962.bladeLocalXOffset = i963[2]
  i962.leftX = i963[3]
  i962.rightX = i963[4]
  i962.cutStep = i963[5]
  i962.knifeDownLocalOffset = new pc.Vec3( i963[6], i963[7], i963[8] )
  i962.chopDuration = i963[9]
  i962.slideDuration = i963[10]
  i962.chopEase = i963[11]
  i962.slideEase = i963[12]
  request.r(i963[13], i963[14], 0, i962, 'knifeChildMask')
  request.r(i963[15], i963[16], 0, i962, 'itemDone')
  request.r(i963[17], i963[18], 0, i962, 'maskInteractionSpritesObject')
  i962.maskWidthAtScaleOne = i963[19]
  i962.resetOnEnable = !!i963[20]
  request.r(i963[21], i963[22], 0, i962, 'knifeDoneTarget')
  i962.knifeDoneMoveDuration = i963[23]
  i962.knifeDoneMoveEase = i963[24]
  i962.cutPieceColor = i963[25]
  i962.drawGizmos = !!i963[26]
  request.r(i963[27], i963[28], 0, i962, 'gizmoLocalRoot')
  i962.gizmoHeight = i963[29]
  i962.gizmoTickHeight = i963[30]
  i962.gizmoLocalY = i963[31]
  i962.gizmoLocalZ = i963[32]
  i962.rangeGizmoColor = new pc.Color(i963[33], i963[34], i963[35], i963[36])
  i962.leftGizmoColor = new pc.Color(i963[37], i963[38], i963[39], i963[40])
  i962.rightGizmoColor = new pc.Color(i963[41], i963[42], i963[43], i963[44])
  i962.currentCutGizmoColor = new pc.Color(i963[45], i963[46], i963[47], i963[48])
  i962.bladeGizmoColor = new pc.Color(i963[49], i963[50], i963[51], i963[52])
  i962.onCut = request.d('UnityEngine.Events.UnityEvent', i963[53], i962.onCut)
  i962.onCutComplete = request.d('UnityEngine.Events.UnityEvent', i963[54], i962.onCutComplete)
  i962.onKnifeArriveDoneTarget = request.d('UnityEngine.Events.UnityEvent', i963[55], i962.onKnifeArriveDoneTarget)
  return i962
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i964 = root || request.c( 'CuttingItem' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'itemKnife')
  request.r(i965[2], i965[3], 0, i964, 'itemBeforeCut')
  request.r(i965[4], i965[5], 0, i964, 'itemWaitToCut')
  request.r(i965[6], i965[7], 0, i964, 'knifeBeforeCut')
  request.r(i965[8], i965[9], 0, i964, 'knife')
  request.r(i965[10], i965[11], 0, i964, 'cuttingBoard')
  request.r(i965[12], i965[13], 0, i964, 'targetPlate')
  i964.isOnBoard = !!i965[14]
  i964.targetPlateType = i965[15]
  i964.flyToDish = i965[16]
  i964.isFlyToDishAnim = !!i965[17]
  i964.cantCutOnFirst = !!i965[18]
  i964.isDone = !!i965[19]
  i964.onProcess = !!i965[20]
  request.r(i965[21], i965[22], 0, i964, 'itemDraggable')
  request.r(i965[23], i965[24], 0, i964, 'itemClickable')
  request.r(i965[25], i965[26], 0, i964, 'itemStirring')
  request.r(i965[27], i965[28], 0, i964, 'itemKnifeSpriteMaskCutter')
  request.r(i965[29], i965[30], 0, i964, 'itemSpriteMaskPainter')
  request.r(i965[31], i965[32], 0, i964, 'itemMoveToTarget')
  request.r(i965[33], i965[34], 0, i964, 'animator')
  i964.itemType = i965[35]
  request.r(i965[36], i965[37], 0, i964, 'spriteRenderer')
  i964.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i965[38], i964.onKnifeIn)
  i964.playMoveToTargetFinishSound = !!i965[39]
  i964.moveToTargetFinishFxType = i965[40]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i967 = data
  i966.frontSortingLayerID = i967[0]
  i966.frontSortingOrder = i967[1]
  i966.backSortingLayerID = i967[2]
  i966.backSortingOrder = i967[3]
  i966.alphaCutoff = i967[4]
  request.r(i967[5], i967[6], 0, i966, 'sprite')
  i966.tileMode = i967[7]
  i966.isCustomRangeActive = !!i967[8]
  i966.spriteSortPoint = i967[9]
  i966.enabled = !!i967[10]
  request.r(i967[11], i967[12], 0, i966, 'sharedMaterial')
  var i969 = i967[13]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.sharedMaterials = i968
  i966.receiveShadows = !!i967[14]
  i966.shadowCastingMode = i967[15]
  i966.sortingLayerID = i967[16]
  i966.sortingOrder = i967[17]
  i966.lightmapIndex = i967[18]
  i966.lightmapSceneIndex = i967[19]
  i966.lightmapScaleOffset = new pc.Vec4( i967[20], i967[21], i967[22], i967[23] )
  i966.lightProbeUsage = i967[24]
  i966.reflectionProbeUsage = i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i971 = data
  i970.ambientIntensity = i971[0]
  i970.reflectionIntensity = i971[1]
  i970.ambientMode = i971[2]
  i970.ambientLight = new pc.Color(i971[3], i971[4], i971[5], i971[6])
  i970.ambientSkyColor = new pc.Color(i971[7], i971[8], i971[9], i971[10])
  i970.ambientGroundColor = new pc.Color(i971[11], i971[12], i971[13], i971[14])
  i970.ambientEquatorColor = new pc.Color(i971[15], i971[16], i971[17], i971[18])
  i970.fogColor = new pc.Color(i971[19], i971[20], i971[21], i971[22])
  i970.fogEndDistance = i971[23]
  i970.fogStartDistance = i971[24]
  i970.fogDensity = i971[25]
  i970.fog = !!i971[26]
  request.r(i971[27], i971[28], 0, i970, 'skybox')
  i970.fogMode = i971[29]
  var i973 = i971[30]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i973[i + 0]) );
  }
  i970.lightmaps = i972
  i970.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i971[31], i970.lightProbes)
  i970.lightmapsMode = i971[32]
  i970.mixedBakeMode = i971[33]
  i970.environmentLightingMode = i971[34]
  i970.ambientProbe = new pc.SphericalHarmonicsL2(i971[35])
  i970.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i971[36])
  i970.useReferenceAmbientProbe = !!i971[37]
  request.r(i971[38], i971[39], 0, i970, 'customReflection')
  request.r(i971[40], i971[41], 0, i970, 'defaultReflection')
  i970.defaultReflectionMode = i971[42]
  i970.defaultReflectionResolution = i971[43]
  i970.sunLightObjectId = i971[44]
  i970.pixelLightCount = i971[45]
  i970.defaultReflectionHDR = !!i971[46]
  i970.hasLightDataAsset = !!i971[47]
  i970.hasManualGenerate = !!i971[48]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'lightmapColor')
  request.r(i977[2], i977[3], 0, i976, 'lightmapDirection')
  request.r(i977[4], i977[5], 0, i976, 'shadowMask')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i978 = root || new UnityEngine.LightProbes()
  var i979 = data
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i989[i + 0]));
  }
  i986.ShaderCompilationErrors = i988
  i986.name = i987[1]
  i986.guid = i987[2]
  var i991 = i987[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.shaderDefinedKeywords = i990
  var i993 = i987[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i993[i + 0]) );
  }
  i986.passes = i992
  var i995 = i987[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i995[i + 0]) );
  }
  i986.usePasses = i994
  var i997 = i987[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i997[i + 0]) );
  }
  i986.defaultParameterValues = i996
  request.r(i987[7], i987[8], 0, i986, 'unityFallbackShader')
  i986.readDepth = !!i987[9]
  i986.hasDepthOnlyPass = !!i987[10]
  i986.isCreatedByShaderGraph = !!i987[11]
  i986.disableBatching = !!i987[12]
  i986.compiled = !!i987[13]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1001 = data
  i1000.shaderName = i1001[0]
  i1000.errorMessage = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1006 = root || new pc.UnityShaderPass()
  var i1007 = data
  i1006.id = i1007[0]
  i1006.subShaderIndex = i1007[1]
  i1006.name = i1007[2]
  i1006.passType = i1007[3]
  i1006.grabPassTextureName = i1007[4]
  i1006.usePass = !!i1007[5]
  i1006.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[6], i1006.zTest)
  i1006.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[7], i1006.zWrite)
  i1006.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[8], i1006.culling)
  i1006.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[9], i1006.blending)
  i1006.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[10], i1006.alphaBlending)
  i1006.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[11], i1006.colorWriteMask)
  i1006.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[12], i1006.offsetUnits)
  i1006.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[13], i1006.offsetFactor)
  i1006.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[14], i1006.stencilRef)
  i1006.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[15], i1006.stencilReadMask)
  i1006.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[16], i1006.stencilWriteMask)
  i1006.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[17], i1006.stencilOp)
  i1006.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[18], i1006.stencilOpFront)
  i1006.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[19], i1006.stencilOpBack)
  var i1009 = i1007[20]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1009[i + 0]) );
  }
  i1006.tags = i1008
  var i1011 = i1007[21]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1006.passDefinedKeywords = i1010
  var i1013 = i1007[22]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1013[i + 0]) );
  }
  i1006.passDefinedKeywordGroups = i1012
  var i1015 = i1007[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1015[i + 0]) );
  }
  i1006.variants = i1014
  var i1017 = i1007[24]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1017[i + 0]) );
  }
  i1006.excludedVariants = i1016
  i1006.hasDepthReader = !!i1007[25]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1019 = data
  i1018.val = i1019[0]
  i1018.name = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1021 = data
  i1020.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[0], i1020.src)
  i1020.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[1], i1020.dst)
  i1020.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[2], i1020.op)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1023 = data
  i1022.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[0], i1022.pass)
  i1022.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[1], i1022.fail)
  i1022.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[2], i1022.zFail)
  i1022.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[3], i1022.comp)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1030.keywords = i1032
  i1030.hasDiscard = !!i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1037 = data
  i1036.passId = i1037[0]
  i1036.subShaderIndex = i1037[1]
  var i1039 = i1037[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1036.keywords = i1038
  i1036.vertexProgram = i1037[3]
  i1036.fragmentProgram = i1037[4]
  i1036.exportedForWebGl2 = !!i1037[5]
  i1036.readDepth = !!i1037[6]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'shader')
  i1042.pass = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.type = i1047[1]
  i1046.value = new pc.Vec4( i1047[2], i1047[3], i1047[4], i1047[5] )
  i1046.textureValue = i1047[6]
  i1046.shaderPropertyFlag = i1047[7]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1049 = data
  i1048.name = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'texture')
  i1048.aabb = i1049[3]
  i1048.vertices = i1049[4]
  i1048.triangles = i1049[5]
  i1048.textureRect = UnityEngine.Rect.MinMaxRect(i1049[6], i1049[7], i1049[8], i1049[9])
  i1048.packedRect = UnityEngine.Rect.MinMaxRect(i1049[10], i1049[11], i1049[12], i1049[13])
  i1048.border = new pc.Vec4( i1049[14], i1049[15], i1049[16], i1049[17] )
  i1048.transparency = i1049[18]
  i1048.bounds = i1049[19]
  i1048.pixelsPerUnit = i1049[20]
  i1048.textureWidth = i1049[21]
  i1048.textureHeight = i1049[22]
  i1048.nativeSize = new pc.Vec2( i1049[23], i1049[24] )
  i1048.pivot = new pc.Vec2( i1049[25], i1049[26] )
  i1048.textureRectOffset = new pc.Vec2( i1049[27], i1049[28] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1051 = data
  i1050.name = i1051[0]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.wrapMode = i1053[1]
  i1052.isLooping = !!i1053[2]
  i1052.length = i1053[3]
  var i1055 = i1053[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1055[i + 0]) );
  }
  i1052.curves = i1054
  var i1057 = i1053[5]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1057[i + 0]) );
  }
  i1052.events = i1056
  i1052.halfPrecision = !!i1053[6]
  i1052._frameRate = i1053[7]
  i1052.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1053[8], i1052.localBounds)
  i1052.hasMuscleCurves = !!i1053[9]
  var i1059 = i1053[10]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1052.clipMuscleConstant = i1058
  i1052.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1053[11], i1052.clipBindingConstant)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1063 = data
  i1062.path = i1063[0]
  i1062.hash = i1063[1]
  i1062.componentType = i1063[2]
  i1062.property = i1063[3]
  i1062.keys = i1063[4]
  var i1065 = i1063[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1065[i + 0]) );
  }
  i1062.objectReferenceKeys = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1069 = data
  i1068.time = i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'value')
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1073 = data
  i1072.functionName = i1073[0]
  i1072.floatParameter = i1073[1]
  i1072.intParameter = i1073[2]
  i1072.stringParameter = i1073[3]
  request.r(i1073[4], i1073[5], 0, i1072, 'objectReferenceParameter')
  i1072.time = i1073[6]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1075 = data
  i1074.center = new pc.Vec3( i1075[0], i1075[1], i1075[2] )
  i1074.extends = new pc.Vec3( i1075[3], i1075[4], i1075[5] )
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.genericBindings = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.pptrCurveMapping = i1082
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1085 = data
  i1084.name = i1085[0]
  var i1087 = i1085[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1087[i + 0]) );
  }
  i1084.layers = i1086
  var i1089 = i1085[2]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1089[i + 0]) );
  }
  i1084.parameters = i1088
  i1084.animationClips = i1085[3]
  i1084.avatarUnsupported = i1085[4]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.defaultWeight = i1093[1]
  i1092.blendingMode = i1093[2]
  i1092.avatarMask = i1093[3]
  i1092.syncedLayerIndex = i1093[4]
  i1092.syncedLayerAffectsTiming = !!i1093[5]
  i1092.syncedLayers = i1093[6]
  i1092.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1093[7], i1092.stateMachine)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.path = i1095[2]
  var i1097 = i1095[3]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1097[i + 0]) );
  }
  i1094.states = i1096
  var i1099 = i1095[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1099[i + 0]) );
  }
  i1094.machines = i1098
  var i1101 = i1095[5]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1101[i + 0]) );
  }
  i1094.entryStateTransitions = i1100
  var i1103 = i1095[6]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1103[i + 0]) );
  }
  i1094.exitStateTransitions = i1102
  var i1105 = i1095[7]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1105[i + 0]) );
  }
  i1094.anyStateTransitions = i1104
  i1094.defaultStateId = i1095[8]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1109 = data
  i1108.id = i1109[0]
  i1108.name = i1109[1]
  i1108.cycleOffset = i1109[2]
  i1108.cycleOffsetParameter = i1109[3]
  i1108.cycleOffsetParameterActive = !!i1109[4]
  i1108.mirror = !!i1109[5]
  i1108.mirrorParameter = i1109[6]
  i1108.mirrorParameterActive = !!i1109[7]
  i1108.motionId = i1109[8]
  i1108.nameHash = i1109[9]
  i1108.fullPathHash = i1109[10]
  i1108.speed = i1109[11]
  i1108.speedParameter = i1109[12]
  i1108.speedParameterActive = !!i1109[13]
  i1108.tag = i1109[14]
  i1108.tagHash = i1109[15]
  i1108.writeDefaultValues = !!i1109[16]
  var i1111 = i1109[17]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1108.behaviours = i1110
  var i1113 = i1109[18]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1113[i + 0]) );
  }
  i1108.transitions = i1112
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1119 = data
  i1118.fullPath = i1119[0]
  i1118.canTransitionToSelf = !!i1119[1]
  i1118.duration = i1119[2]
  i1118.exitTime = i1119[3]
  i1118.hasExitTime = !!i1119[4]
  i1118.hasFixedDuration = !!i1119[5]
  i1118.interruptionSource = i1119[6]
  i1118.offset = i1119[7]
  i1118.orderedInterruption = !!i1119[8]
  i1118.destinationStateId = i1119[9]
  i1118.isExit = !!i1119[10]
  i1118.mute = !!i1119[11]
  i1118.solo = !!i1119[12]
  var i1121 = i1119[13]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1121[i + 0]) );
  }
  i1118.conditions = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1127 = data
  i1126.destinationStateId = i1127[0]
  i1126.isExit = !!i1127[1]
  i1126.mute = !!i1127[2]
  i1126.solo = !!i1127[3]
  var i1129 = i1127[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1129[i + 0]) );
  }
  i1126.conditions = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1133 = data
  i1132.defaultBool = !!i1133[0]
  i1132.defaultFloat = i1133[1]
  i1132.defaultInt = i1133[2]
  i1132.name = i1133[3]
  i1132.nameHash = i1133[4]
  i1132.type = i1133[5]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1137 = data
  i1136.mode = i1137[0]
  i1136.parameter = i1137[1]
  i1136.threshold = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.bytes64 = i1139[1]
  i1138.data = i1139[2]
  return i1138
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1141 = data
  i1140.normalStyle = i1141[0]
  i1140.normalSpacingOffset = i1141[1]
  i1140.boldStyle = i1141[2]
  i1140.boldSpacing = i1141[3]
  i1140.italicStyle = i1141[4]
  i1140.tabSize = i1141[5]
  request.r(i1141[6], i1141[7], 0, i1140, 'atlas')
  i1140.m_SourceFontFileGUID = i1141[8]
  i1140.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1141[9], i1140.m_CreationSettings)
  request.r(i1141[10], i1141[11], 0, i1140, 'm_SourceFontFile')
  i1140.m_SourceFontFilePath = i1141[12]
  i1140.m_AtlasPopulationMode = i1141[13]
  i1140.InternalDynamicOS = !!i1141[14]
  var i1143 = i1141[15]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('UnityEngine.TextCore.Glyph', i1143[i + 0]));
  }
  i1140.m_GlyphTable = i1142
  var i1145 = i1141[16]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Character', i1145[i + 0]));
  }
  i1140.m_CharacterTable = i1144
  var i1147 = i1141[17]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1140.m_AtlasTextures = i1146
  i1140.m_AtlasTextureIndex = i1141[18]
  i1140.m_IsMultiAtlasTexturesEnabled = !!i1141[19]
  i1140.m_GetFontFeatures = !!i1141[20]
  i1140.m_ClearDynamicDataOnBuild = !!i1141[21]
  i1140.m_AtlasWidth = i1141[22]
  i1140.m_AtlasHeight = i1141[23]
  i1140.m_AtlasPadding = i1141[24]
  i1140.m_AtlasRenderMode = i1141[25]
  var i1149 = i1141[26]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('UnityEngine.TextCore.GlyphRect', i1149[i + 0]));
  }
  i1140.m_UsedGlyphRects = i1148
  var i1151 = i1141[27]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('UnityEngine.TextCore.GlyphRect', i1151[i + 0]));
  }
  i1140.m_FreeGlyphRects = i1150
  i1140.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1141[28], i1140.m_FontFeatureTable)
  i1140.m_ShouldReimportFontFeatures = !!i1141[29]
  var i1153 = i1141[30]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1140.m_FallbackFontAssetTable = i1152
  var i1155 = i1141[31]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('TMPro.TMP_FontWeightPair', i1155[i + 0]) );
  }
  i1140.m_FontWeightTable = i1154
  var i1157 = i1141[32]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('TMPro.TMP_FontWeightPair', i1157[i + 0]) );
  }
  i1140.fontWeights = i1156
  i1140.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1141[33], i1140.m_fontInfo)
  var i1159 = i1141[34]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('TMPro.TMP_Glyph', i1159[i + 0]));
  }
  i1140.m_glyphInfoList = i1158
  i1140.m_KerningTable = request.d('TMPro.KerningTable', i1141[35], i1140.m_KerningTable)
  var i1161 = i1141[36]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1140.fallbackFontAssets = i1160
  i1140.m_Version = i1141[37]
  i1140.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1141[38], i1140.m_FaceInfo)
  request.r(i1141[39], i1141[40], 0, i1140, 'm_Material')
  return i1140
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1163 = data
  i1162.sourceFontFileName = i1163[0]
  i1162.sourceFontFileGUID = i1163[1]
  i1162.faceIndex = i1163[2]
  i1162.pointSizeSamplingMode = i1163[3]
  i1162.pointSize = i1163[4]
  i1162.padding = i1163[5]
  i1162.paddingMode = i1163[6]
  i1162.packingMode = i1163[7]
  i1162.atlasWidth = i1163[8]
  i1162.atlasHeight = i1163[9]
  i1162.characterSetSelectionMode = i1163[10]
  i1162.characterSequence = i1163[11]
  i1162.referencedFontAssetGUID = i1163[12]
  i1162.referencedTextAssetGUID = i1163[13]
  i1162.fontStyle = i1163[14]
  i1162.fontStyleModifier = i1163[15]
  i1162.renderMode = i1163[16]
  i1162.includeFontFeatures = !!i1163[17]
  return i1162
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1167 = data
  i1166.m_Index = i1167[0]
  i1166.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1167[1], i1166.m_Metrics)
  i1166.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1167[2], i1166.m_GlyphRect)
  i1166.m_Scale = i1167[3]
  i1166.m_AtlasIndex = i1167[4]
  i1166.m_ClassDefinitionType = i1167[5]
  return i1166
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1169 = data
  i1168.m_Width = i1169[0]
  i1168.m_Height = i1169[1]
  i1168.m_HorizontalBearingX = i1169[2]
  i1168.m_HorizontalBearingY = i1169[3]
  i1168.m_HorizontalAdvance = i1169[4]
  return i1168
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1171 = data
  i1170.m_X = i1171[0]
  i1170.m_Y = i1171[1]
  i1170.m_Width = i1171[2]
  i1170.m_Height = i1171[3]
  return i1170
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_Character' )
  var i1175 = data
  i1174.m_ElementType = i1175[0]
  i1174.m_Unicode = i1175[1]
  i1174.m_GlyphIndex = i1175[2]
  i1174.m_Scale = i1175[3]
  return i1174
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.MultipleSubstitutionRecord', i1183[i + 0]));
  }
  i1180.m_MultipleSubstitutionRecords = i1182
  var i1185 = i1181[1]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.LigatureSubstitutionRecord', i1185[i + 0]));
  }
  i1180.m_LigatureSubstitutionRecords = i1184
  var i1187 = i1181[2]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1187[i + 0]));
  }
  i1180.m_GlyphPairAdjustmentRecords = i1186
  var i1189 = i1181[3]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1189[i + 0]));
  }
  i1180.m_MarkToBaseAdjustmentRecords = i1188
  var i1191 = i1181[4]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1191[i + 0]));
  }
  i1180.m_MarkToMarkAdjustmentRecords = i1190
  return i1180
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1195 = data
  i1194.m_TargetGlyphID = i1195[0]
  i1194.m_SubstituteGlyphIDs = i1195[1]
  return i1194
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1199 = data
  i1198.m_ComponentGlyphIDs = i1199[0]
  i1198.m_LigatureGlyphID = i1199[1]
  return i1198
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1203 = data
  i1202.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1203[0], i1202.m_FirstAdjustmentRecord)
  i1202.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1203[1], i1202.m_SecondAdjustmentRecord)
  i1202.m_FeatureLookupFlags = i1203[2]
  return i1202
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1207 = data
  i1206.m_BaseGlyphID = i1207[0]
  i1206.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1207[1], i1206.m_BaseGlyphAnchorPoint)
  i1206.m_MarkGlyphID = i1207[2]
  i1206.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1207[3], i1206.m_MarkPositionAdjustment)
  return i1206
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1211 = data
  i1210.m_BaseMarkGlyphID = i1211[0]
  i1210.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1211[1], i1210.m_BaseMarkGlyphAnchorPoint)
  i1210.m_CombiningMarkGlyphID = i1211[2]
  i1210.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1211[3], i1210.m_CombiningMarkPositionAdjustment)
  return i1210
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'regularTypeface')
  request.r(i1217[2], i1217[3], 0, i1216, 'italicTypeface')
  return i1216
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1219 = data
  i1218.Name = i1219[0]
  i1218.PointSize = i1219[1]
  i1218.Scale = i1219[2]
  i1218.CharacterCount = i1219[3]
  i1218.LineHeight = i1219[4]
  i1218.Baseline = i1219[5]
  i1218.Ascender = i1219[6]
  i1218.CapHeight = i1219[7]
  i1218.Descender = i1219[8]
  i1218.CenterLine = i1219[9]
  i1218.SuperscriptOffset = i1219[10]
  i1218.SubscriptOffset = i1219[11]
  i1218.SubSize = i1219[12]
  i1218.Underline = i1219[13]
  i1218.UnderlineThickness = i1219[14]
  i1218.strikethrough = i1219[15]
  i1218.strikethroughThickness = i1219[16]
  i1218.TabWidth = i1219[17]
  i1218.Padding = i1219[18]
  i1218.AtlasWidth = i1219[19]
  i1218.AtlasHeight = i1219[20]
  return i1218
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1223 = data
  i1222.id = i1223[0]
  i1222.x = i1223[1]
  i1222.y = i1223[2]
  i1222.width = i1223[3]
  i1222.height = i1223[4]
  i1222.xOffset = i1223[5]
  i1222.yOffset = i1223[6]
  i1222.xAdvance = i1223[7]
  i1222.scale = i1223[8]
  return i1222
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.KerningTable' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.KerningPair', i1227[i + 0]));
  }
  i1224.kerningPairs = i1226
  return i1224
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.KerningPair' )
  var i1231 = data
  i1230.xOffset = i1231[0]
  i1230.m_FirstGlyph = i1231[1]
  i1230.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1231[2], i1230.m_FirstGlyphAdjustments)
  i1230.m_SecondGlyph = i1231[3]
  i1230.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1231[4], i1230.m_SecondGlyphAdjustments)
  i1230.m_IgnoreSpacingAdjustments = !!i1231[5]
  return i1230
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1233 = data
  i1232.m_FaceIndex = i1233[0]
  i1232.m_FamilyName = i1233[1]
  i1232.m_StyleName = i1233[2]
  i1232.m_PointSize = i1233[3]
  i1232.m_Scale = i1233[4]
  i1232.m_UnitsPerEM = i1233[5]
  i1232.m_LineHeight = i1233[6]
  i1232.m_AscentLine = i1233[7]
  i1232.m_CapLine = i1233[8]
  i1232.m_MeanLine = i1233[9]
  i1232.m_Baseline = i1233[10]
  i1232.m_DescentLine = i1233[11]
  i1232.m_SuperscriptOffset = i1233[12]
  i1232.m_SuperscriptSize = i1233[13]
  i1232.m_SubscriptOffset = i1233[14]
  i1232.m_SubscriptSize = i1233[15]
  i1232.m_UnderlineOffset = i1233[16]
  i1232.m_UnderlineThickness = i1233[17]
  i1232.m_StrikethroughOffset = i1233[18]
  i1232.m_StrikethroughThickness = i1233[19]
  i1232.m_TabWidth = i1233[20]
  return i1232
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1235 = data
  i1234.useSafeMode = !!i1235[0]
  i1234.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1235[1], i1234.safeModeOptions)
  i1234.timeScale = i1235[2]
  i1234.unscaledTimeScale = i1235[3]
  i1234.useSmoothDeltaTime = !!i1235[4]
  i1234.maxSmoothUnscaledTime = i1235[5]
  i1234.rewindCallbackMode = i1235[6]
  i1234.showUnityEditorReport = !!i1235[7]
  i1234.logBehaviour = i1235[8]
  i1234.drawGizmos = !!i1235[9]
  i1234.defaultRecyclable = !!i1235[10]
  i1234.defaultAutoPlay = i1235[11]
  i1234.defaultUpdateType = i1235[12]
  i1234.defaultTimeScaleIndependent = !!i1235[13]
  i1234.defaultEaseType = i1235[14]
  i1234.defaultEaseOvershootOrAmplitude = i1235[15]
  i1234.defaultEasePeriod = i1235[16]
  i1234.defaultAutoKill = !!i1235[17]
  i1234.defaultLoopType = i1235[18]
  i1234.debugMode = !!i1235[19]
  i1234.debugStoreTargetId = !!i1235[20]
  i1234.showPreviewPanel = !!i1235[21]
  i1234.storeSettingsLocation = i1235[22]
  i1234.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1235[23], i1234.modules)
  i1234.createASMDEF = !!i1235[24]
  i1234.showPlayingTweens = !!i1235[25]
  i1234.showPausedTweens = !!i1235[26]
  return i1234
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1236 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1237 = data
  i1236.logBehaviour = i1237[0]
  i1236.nestedTweenFailureBehaviour = i1237[1]
  return i1236
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1238 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1239 = data
  i1238.showPanel = !!i1239[0]
  i1238.audioEnabled = !!i1239[1]
  i1238.physicsEnabled = !!i1239[2]
  i1238.physics2DEnabled = !!i1239[3]
  i1238.spriteEnabled = !!i1239[4]
  i1238.uiEnabled = !!i1239[5]
  i1238.uiToolkitEnabled = !!i1239[6]
  i1238.textMeshProEnabled = !!i1239[7]
  i1238.tk2DEnabled = !!i1239[8]
  i1238.deAudioEnabled = !!i1239[9]
  i1238.deUnityExtendedEnabled = !!i1239[10]
  i1238.epoOutlineEnabled = !!i1239[11]
  return i1238
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_Settings' )
  var i1241 = data
  i1240.assetVersion = i1241[0]
  i1240.m_TextWrappingMode = i1241[1]
  i1240.m_enableKerning = !!i1241[2]
  var i1243 = i1241[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(i1243[i + 0]);
  }
  i1240.m_ActiveFontFeatures = i1242
  i1240.m_enableExtraPadding = !!i1241[4]
  i1240.m_enableTintAllSprites = !!i1241[5]
  i1240.m_enableParseEscapeCharacters = !!i1241[6]
  i1240.m_EnableRaycastTarget = !!i1241[7]
  i1240.m_GetFontFeaturesAtRuntime = !!i1241[8]
  i1240.m_missingGlyphCharacter = i1241[9]
  i1240.m_ClearDynamicDataOnBuild = !!i1241[10]
  i1240.m_warningsDisabled = !!i1241[11]
  request.r(i1241[12], i1241[13], 0, i1240, 'm_defaultFontAsset')
  i1240.m_defaultFontAssetPath = i1241[14]
  i1240.m_defaultFontSize = i1241[15]
  i1240.m_defaultAutoSizeMinRatio = i1241[16]
  i1240.m_defaultAutoSizeMaxRatio = i1241[17]
  i1240.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1241[18], i1241[19] )
  i1240.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1241[20], i1241[21] )
  i1240.m_autoSizeTextContainer = !!i1241[22]
  i1240.m_IsTextObjectScaleStatic = !!i1241[23]
  var i1245 = i1241[24]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1240.m_fallbackFontAssets = i1244
  i1240.m_matchMaterialPreset = !!i1241[25]
  i1240.m_HideSubTextObjects = !!i1241[26]
  request.r(i1241[27], i1241[28], 0, i1240, 'm_defaultSpriteAsset')
  i1240.m_defaultSpriteAssetPath = i1241[29]
  i1240.m_enableEmojiSupport = !!i1241[30]
  i1240.m_MissingCharacterSpriteUnicode = i1241[31]
  var i1247 = i1241[32]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1240.m_EmojiFallbackTextAssets = i1246
  i1240.m_defaultColorGradientPresetsPath = i1241[33]
  request.r(i1241[34], i1241[35], 0, i1240, 'm_defaultStyleSheet')
  i1240.m_StyleSheetsResourcePath = i1241[36]
  request.r(i1241[37], i1241[38], 0, i1240, 'm_leadingCharacters')
  request.r(i1241[39], i1241[40], 0, i1240, 'm_followingCharacters')
  i1240.m_UseModernHangulLineBreakingRules = !!i1241[41]
  return i1240
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'spriteSheet')
  var i1253 = i1251[2]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_Sprite', i1253[i + 0]));
  }
  i1250.spriteInfoList = i1252
  var i1255 = i1251[3]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1250.fallbackSpriteAssets = i1254
  var i1257 = i1251[4]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_SpriteCharacter', i1257[i + 0]));
  }
  i1250.m_SpriteCharacterTable = i1256
  var i1259 = i1251[5]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_SpriteGlyph', i1259[i + 0]));
  }
  i1250.m_GlyphTable = i1258
  i1250.m_Version = i1251[6]
  i1250.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1251[7], i1250.m_FaceInfo)
  request.r(i1251[8], i1251[9], 0, i1250, 'm_Material')
  return i1250
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.hashCode = i1263[1]
  i1262.unicode = i1263[2]
  i1262.pivot = new pc.Vec2( i1263[3], i1263[4] )
  request.r(i1263[5], i1263[6], 0, i1262, 'sprite')
  i1262.id = i1263[7]
  i1262.x = i1263[8]
  i1262.y = i1263[9]
  i1262.width = i1263[10]
  i1262.height = i1263[11]
  i1262.xOffset = i1263[12]
  i1262.yOffset = i1263[13]
  i1262.xAdvance = i1263[14]
  i1262.scale = i1263[15]
  return i1262
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1269 = data
  i1268.m_Name = i1269[0]
  i1268.m_ElementType = i1269[1]
  i1268.m_Unicode = i1269[2]
  i1268.m_GlyphIndex = i1269[3]
  i1268.m_Scale = i1269[4]
  return i1268
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'sprite')
  i1272.m_Index = i1273[2]
  i1272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1273[3], i1272.m_Metrics)
  i1272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1273[4], i1272.m_GlyphRect)
  i1272.m_Scale = i1273[5]
  i1272.m_AtlasIndex = i1273[6]
  i1272.m_ClassDefinitionType = i1273[7]
  return i1272
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_Style', i1277[i + 0]));
  }
  i1274.m_StyleList = i1276
  return i1274
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Style' )
  var i1281 = data
  i1280.m_Name = i1281[0]
  i1280.m_HashCode = i1281[1]
  i1280.m_OpeningDefinition = i1281[2]
  i1280.m_ClosingDefinition = i1281[3]
  i1280.m_OpeningTagArray = i1281[4]
  i1280.m_ClosingTagArray = i1281[5]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1285[i + 0]) );
  }
  i1282.files = i1284
  i1282.componentToPrefabIds = i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1289 = data
  i1288.path = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'unityObject')
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1293[i + 0]) );
  }
  i1290.scriptsExecutionOrder = i1292
  var i1295 = i1291[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1295[i + 0]) );
  }
  i1290.sortingLayers = i1294
  var i1297 = i1291[2]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1297[i + 0]) );
  }
  i1290.cullingLayers = i1296
  i1290.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1291[3], i1290.timeSettings)
  i1290.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1291[4], i1290.physicsSettings)
  i1290.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1291[5], i1290.physics2DSettings)
  i1290.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1291[6], i1290.qualitySettings)
  i1290.enableRealtimeShadows = !!i1291[7]
  i1290.enableAutoInstancing = !!i1291[8]
  i1290.enableStaticBatching = !!i1291[9]
  i1290.enableDynamicBatching = !!i1291[10]
  i1290.lightmapEncodingQuality = i1291[11]
  i1290.desiredColorSpace = i1291[12]
  var i1299 = i1291[13]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1290.allTags = i1298
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.value = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1307 = data
  i1306.id = i1307[0]
  i1306.name = i1307[1]
  i1306.value = i1307[2]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.name = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1313 = data
  i1312.fixedDeltaTime = i1313[0]
  i1312.maximumDeltaTime = i1313[1]
  i1312.timeScale = i1313[2]
  i1312.maximumParticleTimestep = i1313[3]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1315 = data
  i1314.gravity = new pc.Vec3( i1315[0], i1315[1], i1315[2] )
  i1314.defaultSolverIterations = i1315[3]
  i1314.bounceThreshold = i1315[4]
  i1314.autoSyncTransforms = !!i1315[5]
  i1314.autoSimulation = !!i1315[6]
  var i1317 = i1315[7]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1317[i + 0]) );
  }
  i1314.collisionMatrix = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.layerId = i1321[1]
  i1320.otherLayerId = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'material')
  i1322.gravity = new pc.Vec2( i1323[2], i1323[3] )
  i1322.positionIterations = i1323[4]
  i1322.velocityIterations = i1323[5]
  i1322.velocityThreshold = i1323[6]
  i1322.maxLinearCorrection = i1323[7]
  i1322.maxAngularCorrection = i1323[8]
  i1322.maxTranslationSpeed = i1323[9]
  i1322.maxRotationSpeed = i1323[10]
  i1322.baumgarteScale = i1323[11]
  i1322.baumgarteTOIScale = i1323[12]
  i1322.timeToSleep = i1323[13]
  i1322.linearSleepTolerance = i1323[14]
  i1322.angularSleepTolerance = i1323[15]
  i1322.defaultContactOffset = i1323[16]
  i1322.autoSimulation = !!i1323[17]
  i1322.queriesHitTriggers = !!i1323[18]
  i1322.queriesStartInColliders = !!i1323[19]
  i1322.callbacksOnDisable = !!i1323[20]
  i1322.reuseCollisionCallbacks = !!i1323[21]
  i1322.autoSyncTransforms = !!i1323[22]
  var i1325 = i1323[23]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1333[i + 0]) );
  }
  i1330.qualityLevels = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1330.names = i1334
  i1330.shadows = i1331[2]
  i1330.anisotropicFiltering = i1331[3]
  i1330.antiAliasing = i1331[4]
  i1330.lodBias = i1331[5]
  i1330.shadowCascades = i1331[6]
  i1330.shadowDistance = i1331[7]
  i1330.shadowmaskMode = i1331[8]
  i1330.shadowProjection = i1331[9]
  i1330.shadowResolution = i1331[10]
  i1330.softParticles = !!i1331[11]
  i1330.softVegetation = !!i1331[12]
  i1330.activeColorSpace = i1331[13]
  i1330.desiredColorSpace = i1331[14]
  i1330.masterTextureLimit = i1331[15]
  i1330.maxQueuedFrames = i1331[16]
  i1330.particleRaycastBudget = i1331[17]
  i1330.pixelLightCount = i1331[18]
  i1330.realtimeReflectionProbes = !!i1331[19]
  i1330.shadowCascade2Split = i1331[20]
  i1330.shadowCascade4Split = new pc.Vec3( i1331[21], i1331[22], i1331[23] )
  i1330.streamingMipmapsActive = !!i1331[24]
  i1330.vSyncCount = i1331[25]
  i1330.asyncUploadBufferSize = i1331[26]
  i1330.asyncUploadTimeSlice = i1331[27]
  i1330.billboardsFaceCameraPosition = !!i1331[28]
  i1330.shadowNearPlaneOffset = i1331[29]
  i1330.streamingMipmapsMemoryBudget = i1331[30]
  i1330.maximumLODLevel = i1331[31]
  i1330.streamingMipmapsAddAllCameras = !!i1331[32]
  i1330.streamingMipmapsMaxLevelReduction = i1331[33]
  i1330.streamingMipmapsRenderersPerFrame = i1331[34]
  i1330.resolutionScalingFixedDPIFactor = i1331[35]
  i1330.streamingMipmapsMaxFileIORequests = i1331[36]
  i1330.currentQualityLevel = i1331[37]
  return i1330
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1339 = data
  i1338.m_GlyphIndex = i1339[0]
  i1338.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1339[1], i1338.m_GlyphValueRecord)
  return i1338
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1341 = data
  i1340.m_XCoordinate = i1341[0]
  i1340.m_YCoordinate = i1341[1]
  return i1340
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1343 = data
  i1342.m_XPositionAdjustment = i1343[0]
  i1342.m_YPositionAdjustment = i1343[1]
  return i1342
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1345 = data
  i1344.xPlacement = i1345[0]
  i1344.yPlacement = i1345[1]
  i1344.xAdvance = i1345[2]
  i1344.yAdvance = i1345[3]
  return i1344
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1347 = data
  i1346.m_XPlacement = i1347[0]
  i1346.m_YPlacement = i1347[1]
  i1346.m_XAdvance = i1347[2]
  i1346.m_YAdvance = i1347[3]
  return i1346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[16],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[16],"96":[97],"98":[99],"100":[99],"15":[14],"56":[101],"42":[101],"57":[101],"102":[101],"103":[101],"104":[5],"105":[16],"106":[107],"108":[45],"109":[15],"110":[14],"111":[97,14],"26":[14,22],"112":[14],"113":[22,14],"114":[97],"115":[22,14],"116":[14],"117":[118],"119":[118],"120":[118],"121":[14],"122":[14],"19":[15],"23":[22,14],"123":[14],"18":[15],"124":[14],"125":[14],"126":[14],"127":[14],"128":[14],"129":[14],"130":[14],"131":[14],"132":[14],"133":[22,14],"134":[14],"135":[14],"136":[14],"137":[14],"138":[22,14],"139":[14],"140":[45],"141":[45],"46":[45],"142":[45],"143":[16],"144":[16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","GreenPiece","YellowPiece","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","InWaterItem","Bread","CuttingItem","Sink","ItemDraggable","Ply_ToggleEvent","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Item","Ply_MoveToTarget","Ply_TimerEvent","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","CuttingBoard","Knife","Ply_BobEffect","ItemClickable","ItemKnifeSpriteMaskCutter","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemSpriteMaskPainter","ItemStirring","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "05/20/2026 07:25:09";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1721";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4591";

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

Deserializers.buildID = "0e11b4cd-dc72-42d3-80e5-10462d8e9d83";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

