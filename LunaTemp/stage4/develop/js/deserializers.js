var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSpring' )
  var i725 = data
  i724.spring = i725[0]
  i724.damper = i725[1]
  i724.targetPosition = i725[2]
  return i724
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor' )
  var i727 = data
  i726.m_TargetVelocity = i727[0]
  i726.m_Force = i727[1]
  i726.m_FreeSpin = i727[2]
  return i726
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointLimits' )
  var i729 = data
  i728.m_Min = i729[0]
  i728.m_Max = i729[1]
  i728.m_Bounciness = i729[2]
  i728.m_BounceMinVelocity = i729[3]
  i728.m_ContactDistance = i729[4]
  i728.minBounce = i729[5]
  i728.maxBounce = i729[6]
  return i728
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointDrive' )
  var i731 = data
  i730.m_PositionSpring = i731[0]
  i730.m_PositionDamper = i731[1]
  i730.m_MaximumForce = i731[2]
  i730.m_UseAcceleration = i731[3]
  return i730
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i733 = data
  i732.m_Spring = i733[0]
  i732.m_Damper = i733[1]
  return i732
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i735 = data
  i734.m_Limit = i735[0]
  i734.m_Bounciness = i735[1]
  i734.m_ContactDistance = i735[2]
  return i734
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i737 = data
  i736.m_ExtremumSlip = i737[0]
  i736.m_ExtremumValue = i737[1]
  i736.m_AsymptoteSlip = i737[2]
  i736.m_AsymptoteValue = i737[3]
  i736.m_Stiffness = i737[4]
  return i736
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i739 = data
  i738.m_LowerAngle = i739[0]
  i738.m_UpperAngle = i739[1]
  return i738
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i741 = data
  i740.m_MotorSpeed = i741[0]
  i740.m_MaximumMotorTorque = i741[1]
  return i740
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i743 = data
  i742.m_DampingRatio = i743[0]
  i742.m_Frequency = i743[1]
  i742.m_Angle = i743[2]
  return i742
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i745 = data
  i744.m_LowerTranslation = i745[0]
  i744.m_UpperTranslation = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i746 = root || new pc.UnityMaterial()
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'shader')
  i746.renderQueue = i747[3]
  i746.enableInstancing = !!i747[4]
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i749[i + 0]) );
  }
  i746.floatParameters = i748
  var i751 = i747[6]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i751[i + 0]) );
  }
  i746.colorParameters = i750
  var i753 = i747[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i753[i + 0]) );
  }
  i746.vectorParameters = i752
  var i755 = i747[8]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i755[i + 0]) );
  }
  i746.textureParameters = i754
  var i757 = i747[9]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i757[i + 0]) );
  }
  i746.materialFlags = i756
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = new pc.Color(i765[1], i765[2], i765[3], i765[4])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Vec4( i769[1], i769[2], i769[3], i769[4] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i773 = data
  i772.name = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'value')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i777 = data
  i776.name = i777[0]
  i776.enabled = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i779 = data
  i778.name = i779[0]
  i778.width = i779[1]
  i778.height = i779[2]
  i778.mipmapCount = i779[3]
  i778.anisoLevel = i779[4]
  i778.filterMode = i779[5]
  i778.hdr = !!i779[6]
  i778.format = i779[7]
  i778.wrapMode = i779[8]
  i778.alphaIsTransparency = !!i779[9]
  i778.alphaSource = i779[10]
  i778.graphicsFormat = i779[11]
  i778.sRGBTexture = !!i779[12]
  i778.desiredColorSpace = i779[13]
  i778.wrapU = i779[14]
  i778.wrapV = i779[15]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i781 = data
  i780.position = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.scale = new pc.Vec3( i781[3], i781[4], i781[5] )
  i780.rotation = new pc.Quat(i781[6], i781[7], i781[8], i781[9])
  return i780
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i782 = root || request.c( 'HeartEffect' )
  var i783 = data
  i782.defaultLifeTime = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'tf')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  request.r(i785[4], i785[5], 0, i784, 'sprite')
  i784.flipX = !!i785[6]
  i784.flipY = !!i785[7]
  i784.drawMode = i785[8]
  i784.size = new pc.Vec2( i785[9], i785[10] )
  i784.tileMode = i785[11]
  i784.adaptiveModeThreshold = i785[12]
  i784.maskInteraction = i785[13]
  i784.spriteSortPoint = i785[14]
  i784.enabled = !!i785[15]
  request.r(i785[16], i785[17], 0, i784, 'sharedMaterial')
  var i787 = i785[18]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[19]
  i784.shadowCastingMode = i785[20]
  i784.sortingLayerID = i785[21]
  i784.sortingOrder = i785[22]
  i784.lightmapIndex = i785[23]
  i784.lightmapSceneIndex = i785[24]
  i784.lightmapScaleOffset = new pc.Vec4( i785[25], i785[26], i785[27], i785[28] )
  i784.lightProbeUsage = i785[29]
  i784.reflectionProbeUsage = i785[30]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i791 = data
  i790.name = i791[0]
  i790.tagId = i791[1]
  i790.enabled = !!i791[2]
  i790.isStatic = !!i791[3]
  i790.layer = i791[4]
  return i790
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i792 = root || request.c( 'HeartBreakEffect' )
  var i793 = data
  i792.defaultLifeTime = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'tf')
  return i792
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i794 = root || request.c( 'BlinkEffect' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'tf')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'mesh')
  i796.meshCount = i797[2]
  i796.activeVertexStreamsCount = i797[3]
  i796.alignment = i797[4]
  i796.renderMode = i797[5]
  i796.sortMode = i797[6]
  i796.lengthScale = i797[7]
  i796.velocityScale = i797[8]
  i796.cameraVelocityScale = i797[9]
  i796.normalDirection = i797[10]
  i796.sortingFudge = i797[11]
  i796.minParticleSize = i797[12]
  i796.maxParticleSize = i797[13]
  i796.pivot = new pc.Vec3( i797[14], i797[15], i797[16] )
  request.r(i797[17], i797[18], 0, i796, 'trailMaterial')
  i796.applyActiveColorSpace = !!i797[19]
  i796.enabled = !!i797[20]
  request.r(i797[21], i797[22], 0, i796, 'sharedMaterial')
  var i799 = i797[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sharedMaterials = i798
  i796.receiveShadows = !!i797[24]
  i796.shadowCastingMode = i797[25]
  i796.sortingLayerID = i797[26]
  i796.sortingOrder = i797[27]
  i796.lightmapIndex = i797[28]
  i796.lightmapSceneIndex = i797[29]
  i796.lightmapScaleOffset = new pc.Vec4( i797[30], i797[31], i797[32], i797[33] )
  i796.lightProbeUsage = i797[34]
  i796.reflectionProbeUsage = i797[35]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i801 = data
  i800.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i801[0], i800.main)
  i800.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i801[1], i800.colorBySpeed)
  i800.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i801[2], i800.colorOverLifetime)
  i800.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i801[3], i800.emission)
  i800.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i801[4], i800.rotationBySpeed)
  i800.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i801[5], i800.rotationOverLifetime)
  i800.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i801[6], i800.shape)
  i800.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i801[7], i800.sizeBySpeed)
  i800.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i801[8], i800.sizeOverLifetime)
  i800.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i801[9], i800.textureSheetAnimation)
  i800.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i801[10], i800.velocityOverLifetime)
  i800.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i801[11], i800.noise)
  i800.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i801[12], i800.inheritVelocity)
  i800.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i801[13], i800.forceOverLifetime)
  i800.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i801[14], i800.limitVelocityOverLifetime)
  i800.useAutoRandomSeed = !!i801[15]
  i800.randomSeed = i801[16]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemMain()
  var i803 = data
  i802.duration = i803[0]
  i802.loop = !!i803[1]
  i802.prewarm = !!i803[2]
  i802.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.startDelay)
  i802.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.startLifetime)
  i802.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[5], i802.startSpeed)
  i802.startSize3D = !!i803[6]
  i802.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.startSizeX)
  i802.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[8], i802.startSizeY)
  i802.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.startSizeZ)
  i802.startRotation3D = !!i803[10]
  i802.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.startRotationX)
  i802.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[12], i802.startRotationY)
  i802.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[13], i802.startRotationZ)
  i802.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i803[14], i802.startColor)
  i802.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[15], i802.gravityModifier)
  i802.simulationSpace = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'customSimulationSpace')
  i802.simulationSpeed = i803[19]
  i802.useUnscaledTime = !!i803[20]
  i802.scalingMode = i803[21]
  i802.playOnAwake = !!i803[22]
  i802.maxParticles = i803[23]
  i802.emitterVelocityMode = i803[24]
  i802.stopAction = i803[25]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i804 = root || new pc.MinMaxCurve()
  var i805 = data
  i804.mode = i805[0]
  i804.curveMin = new pc.AnimationCurve( { keys_flow: i805[1] } )
  i804.curveMax = new pc.AnimationCurve( { keys_flow: i805[2] } )
  i804.curveMultiplier = i805[3]
  i804.constantMin = i805[4]
  i804.constantMax = i805[5]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i806 = root || new pc.MinMaxGradient()
  var i807 = data
  i806.mode = i807[0]
  i806.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i807[1], i806.gradientMin)
  i806.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i807[2], i806.gradientMax)
  i806.colorMin = new pc.Color(i807[3], i807[4], i807[5], i807[6])
  i806.colorMax = new pc.Color(i807[7], i807[8], i807[9], i807[10])
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i809 = data
  i808.mode = i809[0]
  var i811 = i809[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i811[i + 0]) );
  }
  i808.colorKeys = i810
  var i813 = i809[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i813[i + 0]) );
  }
  i808.alphaKeys = i812
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemColorBySpeed()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i815[1], i814.color)
  i814.range = new pc.Vec2( i815[2], i815[3] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i819 = data
  i818.color = new pc.Color(i819[0], i819[1], i819[2], i819[3])
  i818.time = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i823 = data
  i822.alpha = i823[0]
  i822.time = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemColorOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i825[1], i824.color)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemEmitter()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.rateOverTime)
  i826.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.rateOverDistance)
  var i829 = i827[3]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i829[i + 0]) );
  }
  i826.bursts = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemBurst()
  var i833 = data
  i832.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[0], i832.count)
  i832.cycleCount = i833[1]
  i832.minCount = i833[2]
  i832.maxCount = i833[3]
  i832.repeatInterval = i833[4]
  i832.time = i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemRotationBySpeed()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.separateAxes = !!i835[4]
  i834.range = new pc.Vec2( i835[5], i835[6] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemRotationOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.separateAxes = !!i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemShape()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.shapeType = i839[1]
  i838.randomDirectionAmount = i839[2]
  i838.sphericalDirectionAmount = i839[3]
  i838.randomPositionAmount = i839[4]
  i838.alignToDirection = !!i839[5]
  i838.radius = i839[6]
  i838.radiusMode = i839[7]
  i838.radiusSpread = i839[8]
  i838.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[9], i838.radiusSpeed)
  i838.radiusThickness = i839[10]
  i838.angle = i839[11]
  i838.length = i839[12]
  i838.boxThickness = new pc.Vec3( i839[13], i839[14], i839[15] )
  i838.meshShapeType = i839[16]
  request.r(i839[17], i839[18], 0, i838, 'mesh')
  request.r(i839[19], i839[20], 0, i838, 'meshRenderer')
  request.r(i839[21], i839[22], 0, i838, 'skinnedMeshRenderer')
  i838.useMeshMaterialIndex = !!i839[23]
  i838.meshMaterialIndex = i839[24]
  i838.useMeshColors = !!i839[25]
  i838.normalOffset = i839[26]
  i838.arc = i839[27]
  i838.arcMode = i839[28]
  i838.arcSpread = i839[29]
  i838.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[30], i838.arcSpeed)
  i838.donutRadius = i839[31]
  i838.position = new pc.Vec3( i839[32], i839[33], i839[34] )
  i838.rotation = new pc.Vec3( i839[35], i839[36], i839[37] )
  i838.scale = new pc.Vec3( i839[38], i839[39], i839[40] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemSizeBySpeed()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.separateAxes = !!i841[4]
  i840.range = new pc.Vec2( i841[5], i841[6] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemSizeOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.separateAxes = !!i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.mode = i845[1]
  i844.animation = i845[2]
  i844.numTilesX = i845[3]
  i844.numTilesY = i845[4]
  i844.useRandomRow = !!i845[5]
  i844.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[6], i844.frameOverTime)
  i844.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[7], i844.startFrame)
  i844.cycleCount = i845[8]
  i844.rowIndex = i845[9]
  i844.flipU = i845[10]
  i844.flipV = i845[11]
  i844.spriteCount = i845[12]
  var i847 = i845[13]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sprites = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.x)
  i850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.y)
  i850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.z)
  i850.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.radial)
  i850.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[5], i850.speedModifier)
  i850.space = i851[6]
  i850.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.orbitalX)
  i850.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.orbitalY)
  i850.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[9], i850.orbitalZ)
  i850.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[10], i850.orbitalOffsetX)
  i850.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[11], i850.orbitalOffsetY)
  i850.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[12], i850.orbitalOffsetZ)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemNoise()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.separateAxes = !!i853[1]
  i852.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.strengthX)
  i852.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.strengthY)
  i852.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[4], i852.strengthZ)
  i852.frequency = i853[5]
  i852.damping = !!i853[6]
  i852.octaveCount = i853[7]
  i852.octaveMultiplier = i853[8]
  i852.octaveScale = i853[9]
  i852.quality = i853[10]
  i852.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[11], i852.scrollSpeed)
  i852.scrollSpeedMultiplier = i853[12]
  i852.remapEnabled = !!i853[13]
  i852.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[14], i852.remapX)
  i852.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[15], i852.remapY)
  i852.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[16], i852.remapZ)
  i852.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[17], i852.positionAmount)
  i852.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[18], i852.rotationAmount)
  i852.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[19], i852.sizeAmount)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemInheritVelocity()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.mode = i855[1]
  i854.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.curve)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemForceOverLifetime()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[1], i856.x)
  i856.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.y)
  i856.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[3], i856.z)
  i856.space = i857[4]
  i856.randomized = !!i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.limit)
  i858.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.limitX)
  i858.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.limitY)
  i858.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.limitZ)
  i858.dampen = i859[5]
  i858.separateAxes = !!i859[6]
  i858.space = i859[7]
  i858.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.drag)
  i858.multiplyDragByParticleSize = !!i859[9]
  i858.multiplyDragByParticleVelocity = !!i859[10]
  return i858
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i860 = root || request.c( 'StarExploreFX' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'tf')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i863 = data
  i862.pivot = new pc.Vec2( i863[0], i863[1] )
  i862.anchorMin = new pc.Vec2( i863[2], i863[3] )
  i862.anchorMax = new pc.Vec2( i863[4], i863[5] )
  i862.sizeDelta = new pc.Vec2( i863[6], i863[7] )
  i862.anchoredPosition3D = new pc.Vec3( i863[8], i863[9], i863[10] )
  i862.rotation = new pc.Quat(i863[11], i863[12], i863[13], i863[14])
  i862.scale = new pc.Vec3( i863[15], i863[16], i863[17] )
  return i862
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i864 = root || request.c( 'ClockTimer' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'fillImage')
  request.r(i865[2], i865[3], 0, i864, 'tf')
  i864.spawnZoomDuration = i865[4]
  i864.despawnZoomDuration = i865[5]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i867 = data
  i866.cullTransparentMesh = !!i867[0]
  return i866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Image' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_Sprite')
  i868.m_Type = i869[2]
  i868.m_PreserveAspect = !!i869[3]
  i868.m_FillCenter = !!i869[4]
  i868.m_FillMethod = i869[5]
  i868.m_FillAmount = i869[6]
  i868.m_FillClockwise = !!i869[7]
  i868.m_FillOrigin = i869[8]
  i868.m_UseSpriteMesh = !!i869[9]
  i868.m_PixelsPerUnitMultiplier = i869[10]
  request.r(i869[11], i869[12], 0, i868, 'm_Material')
  i868.m_Maskable = !!i869[13]
  i868.m_Color = new pc.Color(i869[14], i869[15], i869[16], i869[17])
  i868.m_RaycastTarget = !!i869[18]
  i868.m_RaycastPadding = new pc.Vec4( i869[19], i869[20], i869[21], i869[22] )
  return i868
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i870 = root || request.c( 'WaterSplash' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'tf')
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i873 = data
  i872.center = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.radius = i873[3]
  i872.enabled = !!i873[4]
  i872.isTrigger = !!i873[5]
  request.r(i873[6], i873[7], 0, i872, 'material')
  return i872
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i874 = root || request.c( 'ItemDraggable' )
  var i875 = data
  i874.isDraggable = !!i875[0]
  request.r(i875[1], i875[2], 0, i874, 'returnTransform')
  i874.setParentToReturnTransform = !!i875[3]
  i874.returnToStartOnDragFailed = !!i875[4]
  i874.returnToExactReturnTransformPosition = !!i875[5]
  i874.targetItemType = i875[6]
  request.r(i875[7], i875[8], 0, i874, 'item')
  i874.checkState = !!i875[9]
  request.r(i875[10], i875[11], 0, i874, 'shadowObject')
  i874.playReturnToStartFinishSound = !!i875[12]
  i874.returnToStartFinishFxType = i875[13]
  i874.spawnBreakHeartOnDropFail = !!i875[14]
  i874.playBeginDragSound = !!i875[15]
  i874.beginDragFxType = i875[16]
  i874.liftOffset = i875[17]
  i874.dragScaleMultiplier = i875[18]
  i874.dragScaleDuration = i875[19]
  i874.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i875[20], i874.onBeginDrag)
  i874.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i875[21], i874.onDropSuccess)
  i874.onDropFail = request.d('UnityEngine.Events.UnityEvent', i875[22], i874.onDropFail)
  i874.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i875[23], i874.onReturnToStartComplete)
  return i874
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i877 = data
  i876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i877[0], i876.m_PersistentCalls)
  return i876
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.Events.PersistentCall', i881[i + 0]));
  }
  i878.m_Calls = i880
  return i878
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Target')
  i884.m_TargetAssemblyTypeName = i885[2]
  i884.m_MethodName = i885[3]
  i884.m_Mode = i885[4]
  i884.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i885[5], i884.m_Arguments)
  i884.m_CallState = i885[6]
  return i884
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_ObjectArgument')
  i886.m_ObjectArgumentAssemblyTypeName = i887[2]
  i886.m_IntArgument = i887[3]
  i886.m_FloatArgument = i887[4]
  i886.m_StringArgument = i887[5]
  i886.m_BoolArgument = !!i887[6]
  return i886
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i888 = root || request.c( 'ItemMoveToTarget' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'defaultTarget')
  i888.duration = i889[2]
  i888.useAnimationCurve = !!i889[3]
  i888.moveCurve = new pc.AnimationCurve( { keys_flow: i889[4] } )
  i888.easeType = i889[5]
  i888.moveType = i889[6]
  i888.jumpPower = i889[7]
  i888.numJumps = i889[8]
  i888.rotate360DuringJump = !!i889[9]
  i888.flipRotate = !!i889[10]
  i888.angleRotate = i889[11]
  i888.scaleOnMove = !!i889[12]
  i888.endScaleMultiplier = i889[13]
  i888.setParentToTarget = !!i889[14]
  i888.onComplete = request.d('UnityEngine.Events.UnityEvent', i889[15], i888.onComplete)
  i888.lockInputWhileMoving = !!i889[16]
  i888.resetParentBeforeMove = !!i889[17]
  return i888
}

Deserializers["Paper"] = function (request, data, root) {
  var i890 = root || request.c( 'Paper' )
  var i891 = data
  i890.isUse = !!i891[0]
  request.r(i891[1], i891[2], 0, i890, 'paper')
  request.r(i891[3], i891[4], 0, i890, 'paperTrash')
  request.r(i891[5], i891[6], 0, i890, 'itemDragRaycastTarget')
  request.r(i891[7], i891[8], 0, i890, 'curentCollider')
  i890.isDone = !!i891[9]
  i890.onProcess = !!i891[10]
  i890.requireMatchingTargetTypeForHandTut = !!i891[11]
  request.r(i891[12], i891[13], 0, i890, 'itemDraggable')
  request.r(i891[14], i891[15], 0, i890, 'itemClickable')
  request.r(i891[16], i891[17], 0, i890, 'itemStirring')
  request.r(i891[18], i891[19], 0, i890, 'itemKnifeSpriteMaskCutter')
  request.r(i891[20], i891[21], 0, i890, 'itemSpriteMaskPainter')
  request.r(i891[22], i891[23], 0, i890, 'itemDragSpriteMaskPainter')
  request.r(i891[24], i891[25], 0, i890, 'itemMoveToTarget')
  request.r(i891[26], i891[27], 0, i890, 'animator')
  i890.itemType = i891[28]
  request.r(i891[29], i891[30], 0, i890, 'spriteRenderer')
  i890.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i891[31], i890.onKnifeIn)
  i890.heartEffectScale = i891[32]
  i890.breakHeartEffectScale = i891[33]
  i890.blinkEffectScale = i891[34]
  i890.mergeEffectScale = i891[35]
  i890.playMoveToTargetFinishSound = !!i891[36]
  i890.moveToTargetFinishFxType = i891[37]
  i890.fxSpawnZPos = i891[38]
  request.r(i891[39], i891[40], 0, i890, 'tf')
  return i890
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i892 = root || request.c( 'ItemDragRaycastTarget' )
  var i893 = data
  i892.targetToFind = i893[0]
  i892.targetItemTypeWhenHit = i893[1]
  i892.targetItemTypeOnDropFail = i893[2]
  request.r(i893[3], i893[4], 0, i892, 'raycastPoint')
  i892.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i893[5] )
  i892.rayDistance = i893[6]
  i892.updateMoveDefaultTarget = !!i893[7]
  i892.invokeOnlyWhenTargetChanged = !!i893[8]
  i892.targetChangeEnabled = !!i893[9]
  i892.restoreTargetOnDropFail = !!i893[10]
  i892.resetCurrentTargetOnNoHit = !!i893[11]
  i892.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i893[12], i892.onTargetFound)
  i892.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i893[13], i892.onTargetFoundWithItem)
  return i892
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i894 = root || request.c( 'ItemRaycastTargetEvent' )
  var i895 = data
  i894.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i895[0], i894.m_PersistentCalls)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'animatorController')
  request.r(i897[2], i897[3], 0, i896, 'avatar')
  i896.updateMode = i897[4]
  i896.hasTransformHierarchy = !!i897[5]
  i896.applyRootMotion = !!i897[6]
  var i899 = i897[7]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.humanBones = i898
  i896.enabled = !!i897[8]
  return i896
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i902 = root || request.c( 'ItemSound' )
  var i903 = data
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i905 = data
  i904.name = i905[0]
  i904.index = i905[1]
  i904.startup = !!i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i907 = data
  i906.planeDistance = i907[0]
  i906.referencePixelsPerUnit = i907[1]
  i906.isFallbackOverlay = !!i907[2]
  i906.renderMode = i907[3]
  i906.renderOrder = i907[4]
  i906.sortingLayerName = i907[5]
  i906.sortingOrder = i907[6]
  i906.scaleFactor = i907[7]
  request.r(i907[8], i907[9], 0, i906, 'worldCamera')
  i906.overrideSorting = !!i907[10]
  i906.pixelPerfect = !!i907[11]
  i906.targetDisplay = i907[12]
  i906.overridePixelPerfect = !!i907[13]
  i906.enabled = !!i907[14]
  return i906
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i909 = data
  i908.m_UiScaleMode = i909[0]
  i908.m_ReferencePixelsPerUnit = i909[1]
  i908.m_ScaleFactor = i909[2]
  i908.m_ReferenceResolution = new pc.Vec2( i909[3], i909[4] )
  i908.m_ScreenMatchMode = i909[5]
  i908.m_MatchWidthOrHeight = i909[6]
  i908.m_PhysicalUnit = i909[7]
  i908.m_FallbackScreenDPI = i909[8]
  i908.m_DefaultSpriteDPI = i909[9]
  i908.m_DynamicPixelsPerUnit = i909[10]
  i908.m_PresetInfoIsWorld = !!i909[11]
  return i908
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i911 = data
  i910.m_IgnoreReversedGraphics = !!i911[0]
  i910.m_BlockingObjects = i911[1]
  i910.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i911[2] )
  return i910
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i913 = data
  i912.m_hasFontAssetChanged = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'm_baseMaterial')
  i912.m_maskOffset = new pc.Vec4( i913[3], i913[4], i913[5], i913[6] )
  i912.m_text = i913[7]
  i912.m_isRightToLeft = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'm_fontAsset')
  request.r(i913[11], i913[12], 0, i912, 'm_sharedMaterial')
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.m_fontSharedMaterials = i914
  request.r(i913[14], i913[15], 0, i912, 'm_fontMaterial')
  var i917 = i913[16]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.m_fontMaterials = i916
  i912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i913[17], i913[18], i913[19], i913[20])
  i912.m_fontColor = new pc.Color(i913[21], i913[22], i913[23], i913[24])
  i912.m_enableVertexGradient = !!i913[25]
  i912.m_colorMode = i913[26]
  i912.m_fontColorGradient = request.d('TMPro.VertexGradient', i913[27], i912.m_fontColorGradient)
  request.r(i913[28], i913[29], 0, i912, 'm_fontColorGradientPreset')
  request.r(i913[30], i913[31], 0, i912, 'm_spriteAsset')
  i912.m_tintAllSprites = !!i913[32]
  request.r(i913[33], i913[34], 0, i912, 'm_StyleSheet')
  i912.m_TextStyleHashCode = i913[35]
  i912.m_overrideHtmlColors = !!i913[36]
  i912.m_faceColor = UnityEngine.Color32.ConstructColor(i913[37], i913[38], i913[39], i913[40])
  i912.m_fontSize = i913[41]
  i912.m_fontSizeBase = i913[42]
  i912.m_fontWeight = i913[43]
  i912.m_enableAutoSizing = !!i913[44]
  i912.m_fontSizeMin = i913[45]
  i912.m_fontSizeMax = i913[46]
  i912.m_fontStyle = i913[47]
  i912.m_HorizontalAlignment = i913[48]
  i912.m_VerticalAlignment = i913[49]
  i912.m_textAlignment = i913[50]
  i912.m_characterSpacing = i913[51]
  i912.m_wordSpacing = i913[52]
  i912.m_lineSpacing = i913[53]
  i912.m_lineSpacingMax = i913[54]
  i912.m_paragraphSpacing = i913[55]
  i912.m_charWidthMaxAdj = i913[56]
  i912.m_TextWrappingMode = i913[57]
  i912.m_wordWrappingRatios = i913[58]
  i912.m_overflowMode = i913[59]
  request.r(i913[60], i913[61], 0, i912, 'm_linkedTextComponent')
  request.r(i913[62], i913[63], 0, i912, 'parentLinkedComponent')
  i912.m_enableKerning = !!i913[64]
  var i919 = i913[65]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(i919[i + 0]);
  }
  i912.m_ActiveFontFeatures = i918
  i912.m_enableExtraPadding = !!i913[66]
  i912.checkPaddingRequired = !!i913[67]
  i912.m_isRichText = !!i913[68]
  i912.m_parseCtrlCharacters = !!i913[69]
  i912.m_isOrthographic = !!i913[70]
  i912.m_isCullingEnabled = !!i913[71]
  i912.m_horizontalMapping = i913[72]
  i912.m_verticalMapping = i913[73]
  i912.m_uvLineOffset = i913[74]
  i912.m_geometrySortingOrder = i913[75]
  i912.m_IsTextObjectScaleStatic = !!i913[76]
  i912.m_VertexBufferAutoSizeReduction = !!i913[77]
  i912.m_useMaxVisibleDescender = !!i913[78]
  i912.m_pageToDisplay = i913[79]
  i912.m_margin = new pc.Vec4( i913[80], i913[81], i913[82], i913[83] )
  i912.m_isUsingLegacyAnimationComponent = !!i913[84]
  i912.m_isVolumetricText = !!i913[85]
  request.r(i913[86], i913[87], 0, i912, 'm_Material')
  i912.m_EmojiFallbackSupport = !!i913[88]
  i912.m_Maskable = !!i913[89]
  i912.m_Color = new pc.Color(i913[90], i913[91], i913[92], i913[93])
  i912.m_RaycastTarget = !!i913[94]
  i912.m_RaycastPadding = new pc.Vec4( i913[95], i913[96], i913[97], i913[98] )
  return i912
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.VertexGradient' )
  var i921 = data
  i920.topLeft = new pc.Color(i921[0], i921[1], i921[2], i921[3])
  i920.topRight = new pc.Color(i921[4], i921[5], i921[6], i921[7])
  i920.bottomLeft = new pc.Color(i921[8], i921[9], i921[10], i921[11])
  i920.bottomRight = new pc.Color(i921[12], i921[13], i921[14], i921[15])
  return i920
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Button' )
  var i925 = data
  i924.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i925[0], i924.m_OnClick)
  i924.m_Navigation = request.d('UnityEngine.UI.Navigation', i925[1], i924.m_Navigation)
  i924.m_Transition = i925[2]
  i924.m_Colors = request.d('UnityEngine.UI.ColorBlock', i925[3], i924.m_Colors)
  i924.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i925[4], i924.m_SpriteState)
  i924.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i925[5], i924.m_AnimationTriggers)
  i924.m_Interactable = !!i925[6]
  request.r(i925[7], i925[8], 0, i924, 'm_TargetGraphic')
  return i924
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i927 = data
  i926.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i927[0], i926.m_PersistentCalls)
  return i926
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i929 = data
  i928.m_Mode = i929[0]
  i928.m_WrapAround = !!i929[1]
  request.r(i929[2], i929[3], 0, i928, 'm_SelectOnUp')
  request.r(i929[4], i929[5], 0, i928, 'm_SelectOnDown')
  request.r(i929[6], i929[7], 0, i928, 'm_SelectOnLeft')
  request.r(i929[8], i929[9], 0, i928, 'm_SelectOnRight')
  return i928
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i931 = data
  i930.m_NormalColor = new pc.Color(i931[0], i931[1], i931[2], i931[3])
  i930.m_HighlightedColor = new pc.Color(i931[4], i931[5], i931[6], i931[7])
  i930.m_PressedColor = new pc.Color(i931[8], i931[9], i931[10], i931[11])
  i930.m_SelectedColor = new pc.Color(i931[12], i931[13], i931[14], i931[15])
  i930.m_DisabledColor = new pc.Color(i931[16], i931[17], i931[18], i931[19])
  i930.m_ColorMultiplier = i931[20]
  i930.m_FadeDuration = i931[21]
  return i930
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_HighlightedSprite')
  request.r(i933[2], i933[3], 0, i932, 'm_PressedSprite')
  request.r(i933[4], i933[5], 0, i932, 'm_SelectedSprite')
  request.r(i933[6], i933[7], 0, i932, 'm_DisabledSprite')
  return i932
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i935 = data
  i934.m_NormalTrigger = i935[0]
  i934.m_HighlightedTrigger = i935[1]
  i934.m_PressedTrigger = i935[2]
  i934.m_SelectedTrigger = i935[3]
  i934.m_DisabledTrigger = i935[4]
  return i934
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i936 = root || request.c( 'Ply_Pool' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Ply_Pool+PoolAmount', i939[i + 0]) );
  }
  i936.poolAmounts = i938
  request.r(i937[1], i937[2], 0, i936, 'poolHolder')
  return i936
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i942 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i943 = data
  i942.type = i943[0]
  i942.amount = i943[1]
  request.r(i943[2], i943[3], 0, i942, 'gameUnit')
  return i942
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i944 = root || request.c( 'Ply_SoundManager' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Ply_SoundManager+FxAudio', i947[i + 0]) );
  }
  i944.fxAudios = i946
  var i949 = i945[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i944.audioClips = i948
  request.r(i945[2], i945[3], 0, i944, 'sound')
  return i944
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i952 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i953 = data
  i952.fxType = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'audioClip')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'clip')
  request.r(i957[2], i957[3], 0, i956, 'outputAudioMixerGroup')
  i956.playOnAwake = !!i957[4]
  i956.loop = !!i957[5]
  i956.time = i957[6]
  i956.volume = i957[7]
  i956.pitch = i957[8]
  i956.enabled = !!i957[9]
  return i956
}

Deserializers["GameManager"] = function (request, data, root) {
  var i958 = root || request.c( 'GameManager' )
  var i959 = data
  i958.isPlaying = !!i959[0]
  i958.isTutorial = !!i959[1]
  i958.isGotoStore = !!i959[2]
  i958.isLoseGame = !!i959[3]
  i958.countMove = i959[4]
  i958.currentLayer = i959[5]
  request.r(i959[6], i959[7], 0, i958, 'trashCan')
  request.r(i959[8], i959[9], 0, i958, 'step1')
  request.r(i959[10], i959[11], 0, i958, 'paperBox')
  return i958
}

Deserializers["UIManager"] = function (request, data, root) {
  var i960 = root || request.c( 'UIManager' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'winUI')
  request.r(i961[2], i961[3], 0, i960, 'loseUI')
  request.r(i961[4], i961[5], 0, i960, 'tutorial')
  request.r(i961[6], i961[7], 0, i960, 'verticalUI')
  request.r(i961[8], i961[9], 0, i960, 'horizontalUI')
  request.r(i961[10], i961[11], 0, i960, 'downloadBtn')
  request.r(i961[12], i961[13], 0, i960, 'horizontalDownloadBtn')
  request.r(i961[14], i961[15], 0, i960, 'textAnim')
  i960.isGoogleBuild = !!i961[16]
  i960.screenWidth = i961[17]
  i960.screenHeight = i961[18]
  i960.scaleHeightOnWidth = i961[19]
  i960.isVertical = !!i961[20]
  i960.isScreenVertical = !!i961[21]
  request.r(i961[22], i961[23], 0, i960, 'cam')
  i960.verticalUIHeightOnWidthRatio = i961[24]
  i960.scaleCameraOnValidate = !!i961[25]
  i960.screenVerticalHeightOnWidthRatio = i961[26]
  i960.useContinuousScaling = !!i961[27]
  i960.baseOrthographicSize = i961[28]
  i960.baseAspect = i961[29]
  i960.landscapeSizeRatio = i961[30]
  i960.defaultPortraitSizeRatio = i961[31]
  var i963 = i961[32]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('ScreenScaleStep', i963[i + 0]));
  }
  i960.discreteScaleSteps = i962
  i960.usePerspectiveCamera = !!i961[33]
  request.r(i961[34], i961[35], 0, i960, 'perspectiveFocus')
  i960.perspectiveFocusDistance = i961[36]
  i960.perspectivePadding = i961[37]
  i960.fitRendererBounds = !!i961[38]
  request.r(i961[39], i961[40], 0, i960, 'boundsRoot')
  var i965 = i961[41]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i960.boundsRenderers = i964
  return i960
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i968 = root || request.c( 'ScreenScaleStep' )
  var i969 = data
  i968.heightOnWidthRatio = i969[0]
  i968.orthographicSize = i969[1]
  return i968
}

Deserializers["InputManager"] = function (request, data, root) {
  var i972 = root || request.c( 'InputManager' )
  var i973 = data
  i972.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i973[0] )
  i972.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i973[1] )
  i972.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i973[2] )
  i972.isDragging = !!i973[3]
  return i972
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i974 = root || request.c( 'HandTutManager' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i974.items = i976
  request.r(i975[1], i975[2], 0, i974, 'knife')
  request.r(i975[3], i975[4], 0, i974, 'knife2')
  request.r(i975[5], i975[6], 0, i974, 'salt')
  request.r(i975[7], i975[8], 0, i974, 'handTutObject')
  request.r(i975[9], i975[10], 0, i974, 'tapToCookObject')
  request.r(i975[11], i975[12], 0, i974, 'oilItem')
  request.r(i975[13], i975[14], 0, i974, 'stoveToggleEvent')
  request.r(i975[15], i975[16], 0, i974, 'waterToggleEvent')
  request.r(i975[17], i975[18], 0, i974, 'sinkBlock')
  var i979 = i975[19]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i974.itemsInWater = i978
  i974.noDelayItemCount = i975[20]
  i974.breakHeartNoDelayThreshold = i975[21]
  i974.shortIdleDelay = i975[22]
  i974.maxHandTutShowCount = i975[23]
  i974.showSinkWaterTutorialOnStart = !!i975[24]
  i974.waitForBowlIntro = !!i975[25]
  i974.idleDelay = i975[26]
  i974.firstHandTutDelay = i975[27]
  i974.phaseHandTutDelay = i975[28]
  i974.moveDuration = i975[29]
  i974.dragFadeDuration = i975[30]
  i974.clickScaleDuration = i975[31]
  i974.waitAtEndDuration = i975[32]
  i974.handZPosition = i975[33]
  i974.clickScaleMultiplier = i975[34]
  i974.moveEase = i975[35]
  return i974
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i984 = root || request.c( 'SortChildByZPos' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'transformToSort')
  var i987 = i985[2]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.childrenToSort = i986
  i984.zOffset = i985[3]
  i984.baseZ = i985[4]
  return i984
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i990 = root || request.c( 'PhaseManager' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('PhaseData', i993[i + 0]));
  }
  i990.phases = i992
  i990.transitionType = i991[1]
  i990.transitionDuration = i991[2]
  i990.delayBeforeNextPhase = i991[3]
  i990.offScreenLeftX = i991[4]
  i990.offScreenRightX = i991[5]
  i990.offScreenBottomY = i991[6]
  i990.offScreenTopY = i991[7]
  i990.centerScreenX = i991[8]
  request.r(i991[9], i991[10], 0, i990, 'phaseTransitionObject')
  i990.phaseTransitionObjectDuration = i991[11]
  i990.currentPhaseIndex = i991[12]
  i990.currentStepCount = i991[13]
  i990.isECPopup = !!i991[14]
  return i990
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i996 = root || request.c( 'PhaseData' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'phaseObject')
  i996.totalSteps = i997[2]
  i996.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i997[3], i996.onPhaseReady)
  return i996
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i998 = root || request.c( 'ItemTypeDoneManager' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i1001[i + 0]));
  }
  i998.itemTypeGroups = i1000
  return i998
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i1005 = data
  i1004.itemType = i1005[0]
  var i1007 = i1005[1]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1004.items = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1009 = data
  i1008.aspect = i1009[0]
  i1008.orthographic = !!i1009[1]
  i1008.orthographicSize = i1009[2]
  i1008.backgroundColor = new pc.Color(i1009[3], i1009[4], i1009[5], i1009[6])
  i1008.nearClipPlane = i1009[7]
  i1008.farClipPlane = i1009[8]
  i1008.fieldOfView = i1009[9]
  i1008.depth = i1009[10]
  i1008.clearFlags = i1009[11]
  i1008.cullingMask = i1009[12]
  i1008.rect = i1009[13]
  request.r(i1009[14], i1009[15], 0, i1008, 'targetTexture')
  i1008.usePhysicalProperties = !!i1009[16]
  i1008.focalLength = i1009[17]
  i1008.sensorSize = new pc.Vec2( i1009[18], i1009[19] )
  i1008.lensShift = new pc.Vec2( i1009[20], i1009[21] )
  i1008.gateFit = i1009[22]
  i1008.commandBufferCount = i1009[23]
  i1008.cameraType = i1009[24]
  i1008.enabled = !!i1009[25]
  return i1008
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_FirstSelected')
  i1010.m_sendNavigationEvents = !!i1011[2]
  i1010.m_DragThreshold = i1011[3]
  return i1010
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1013 = data
  i1012.m_HorizontalAxis = i1013[0]
  i1012.m_VerticalAxis = i1013[1]
  i1012.m_SubmitButton = i1013[2]
  i1012.m_CancelButton = i1013[3]
  i1012.m_InputActionsPerSecond = i1013[4]
  i1012.m_RepeatDelay = i1013[5]
  i1012.m_ForceModuleActive = !!i1013[6]
  i1012.m_SendPointerHoverToParent = !!i1013[7]
  return i1012
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1014 = root || request.c( 'Ply_ToggleEvent' )
  var i1015 = data
  i1014.isOn = !!i1015[0]
  i1014.applyStateOnEnable = !!i1015[1]
  i1014.applyStateOnClick = !!i1015[2]
  request.r(i1015[3], i1015[4], 0, i1014, 'targetObject')
  i1014.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1015[5], i1014.onTurnOn)
  i1014.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1015[6], i1014.onTurnOff)
  return i1014
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i1016 = root || request.c( 'SinkBlock' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'sink')
  i1016.startsInside = !!i1017[2]
  i1016.insideTargetType = i1017[3]
  request.r(i1017[4], i1017[5], 0, i1016, 'insideDefaultTarget')
  i1016.outsideTargetType = i1017[6]
  request.r(i1017[7], i1017[8], 0, i1016, 'outsideDefaultTarget')
  i1016.isDone = !!i1017[9]
  i1016.onProcess = !!i1017[10]
  i1016.requireMatchingTargetTypeForHandTut = !!i1017[11]
  request.r(i1017[12], i1017[13], 0, i1016, 'itemDraggable')
  request.r(i1017[14], i1017[15], 0, i1016, 'itemClickable')
  request.r(i1017[16], i1017[17], 0, i1016, 'itemStirring')
  request.r(i1017[18], i1017[19], 0, i1016, 'itemKnifeSpriteMaskCutter')
  request.r(i1017[20], i1017[21], 0, i1016, 'itemSpriteMaskPainter')
  request.r(i1017[22], i1017[23], 0, i1016, 'itemDragSpriteMaskPainter')
  request.r(i1017[24], i1017[25], 0, i1016, 'itemMoveToTarget')
  request.r(i1017[26], i1017[27], 0, i1016, 'animator')
  i1016.itemType = i1017[28]
  request.r(i1017[29], i1017[30], 0, i1016, 'spriteRenderer')
  i1016.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1017[31], i1016.onKnifeIn)
  i1016.heartEffectScale = i1017[32]
  i1016.breakHeartEffectScale = i1017[33]
  i1016.blinkEffectScale = i1017[34]
  i1016.mergeEffectScale = i1017[35]
  i1016.playMoveToTargetFinishSound = !!i1017[36]
  i1016.moveToTargetFinishFxType = i1017[37]
  i1016.fxSpawnZPos = i1017[38]
  request.r(i1017[39], i1017[40], 0, i1016, 'tf')
  return i1016
}

Deserializers["Sink"] = function (request, data, root) {
  var i1018 = root || request.c( 'Sink' )
  var i1019 = data
  i1018.isClose = !!i1019[0]
  i1018.isWaterDrop = !!i1019[1]
  i1018.isWaterIn = !!i1019[2]
  request.r(i1019[3], i1019[4], 0, i1018, 'waterSplashPos')
  request.r(i1019[5], i1019[6], 0, i1018, 'faucetAnimator')
  request.r(i1019[7], i1019[8], 0, i1018, 'basinAnimator')
  request.r(i1019[9], i1019[10], 0, i1018, 'waterDrop')
  request.r(i1019[11], i1019[12], 0, i1018, 'waterIn')
  request.r(i1019[13], i1019[14], 0, i1018, 'basinWaterRenderer')
  i1018.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i1019[15], i1019[16], i1019[17], i1019[18])
  i1018.fullWaterRect = UnityEngine.Rect.MinMaxRect(i1019[19], i1019[20], i1019[21], i1019[22])
  i1018.waterRiseDuration = i1019[23]
  i1018.waterFallDuration = i1019[24]
  i1018.waterRiseEase = i1019[25]
  i1018.waterFallEase = i1019[26]
  i1018.drawWaterRects = !!i1019[27]
  i1018.emptyRectColor = new pc.Color(i1019[28], i1019[29], i1019[30], i1019[31])
  i1018.fullRectColor = new pc.Color(i1019[32], i1019[33], i1019[34], i1019[35])
  request.r(i1019[36], i1019[37], 0, i1018, 'waterDropTransform')
  i1018.emptyWaterDropPoint = new pc.Vec3( i1019[38], i1019[39], i1019[40] )
  i1018.fullWaterDropPoint = new pc.Vec3( i1019[41], i1019[42], i1019[43] )
  i1018.drawWaterDropPoints = !!i1019[44]
  i1018.waterDropPointRadius = i1019[45]
  i1018.emptyWaterDropPointColor = new pc.Color(i1019[46], i1019[47], i1019[48], i1019[49])
  i1018.fullWaterDropPointColor = new pc.Color(i1019[50], i1019[51], i1019[52], i1019[53])
  var i1021 = i1019[54]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.inWaterItems = i1020
  i1018.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i1019[55], i1018.onWaterIn)
  i1018.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i1019[56], i1018.onNoWaterIn)
  i1018.isDone = !!i1019[57]
  i1018.onProcess = !!i1019[58]
  i1018.requireMatchingTargetTypeForHandTut = !!i1019[59]
  request.r(i1019[60], i1019[61], 0, i1018, 'itemDraggable')
  request.r(i1019[62], i1019[63], 0, i1018, 'itemClickable')
  request.r(i1019[64], i1019[65], 0, i1018, 'itemStirring')
  request.r(i1019[66], i1019[67], 0, i1018, 'itemKnifeSpriteMaskCutter')
  request.r(i1019[68], i1019[69], 0, i1018, 'itemSpriteMaskPainter')
  request.r(i1019[70], i1019[71], 0, i1018, 'itemDragSpriteMaskPainter')
  request.r(i1019[72], i1019[73], 0, i1018, 'itemMoveToTarget')
  request.r(i1019[74], i1019[75], 0, i1018, 'animator')
  i1018.itemType = i1019[76]
  request.r(i1019[77], i1019[78], 0, i1018, 'spriteRenderer')
  i1018.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1019[79], i1018.onKnifeIn)
  i1018.heartEffectScale = i1019[80]
  i1018.breakHeartEffectScale = i1019[81]
  i1018.blinkEffectScale = i1019[82]
  i1018.mergeEffectScale = i1019[83]
  i1018.playMoveToTargetFinishSound = !!i1019[84]
  i1018.moveToTargetFinishFxType = i1019[85]
  i1018.fxSpawnZPos = i1019[86]
  request.r(i1019[87], i1019[88], 0, i1018, 'tf')
  i1018.waterState = i1019[89]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1023 = data
  i1022.center = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.size = new pc.Vec3( i1023[3], i1023[4], i1023[5] )
  i1022.enabled = !!i1023[6]
  i1022.isTrigger = !!i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'material')
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1025 = data
  i1024.frontSortingLayerID = i1025[0]
  i1024.frontSortingOrder = i1025[1]
  i1024.backSortingLayerID = i1025[2]
  i1024.backSortingOrder = i1025[3]
  i1024.alphaCutoff = i1025[4]
  request.r(i1025[5], i1025[6], 0, i1024, 'sprite')
  i1024.tileMode = i1025[7]
  i1024.isCustomRangeActive = !!i1025[8]
  i1024.spriteSortPoint = i1025[9]
  i1024.enabled = !!i1025[10]
  request.r(i1025[11], i1025[12], 0, i1024, 'sharedMaterial')
  var i1027 = i1025[13]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1024.sharedMaterials = i1026
  i1024.receiveShadows = !!i1025[14]
  i1024.shadowCastingMode = i1025[15]
  i1024.sortingLayerID = i1025[16]
  i1024.sortingOrder = i1025[17]
  i1024.lightmapIndex = i1025[18]
  i1024.lightmapSceneIndex = i1025[19]
  i1024.lightmapScaleOffset = new pc.Vec4( i1025[20], i1025[21], i1025[22], i1025[23] )
  i1024.lightProbeUsage = i1025[24]
  i1024.reflectionProbeUsage = i1025[25]
  return i1024
}

Deserializers["Item"] = function (request, data, root) {
  var i1028 = root || request.c( 'Item' )
  var i1029 = data
  i1028.isDone = !!i1029[0]
  i1028.onProcess = !!i1029[1]
  i1028.requireMatchingTargetTypeForHandTut = !!i1029[2]
  request.r(i1029[3], i1029[4], 0, i1028, 'itemDraggable')
  request.r(i1029[5], i1029[6], 0, i1028, 'itemClickable')
  request.r(i1029[7], i1029[8], 0, i1028, 'itemStirring')
  request.r(i1029[9], i1029[10], 0, i1028, 'itemKnifeSpriteMaskCutter')
  request.r(i1029[11], i1029[12], 0, i1028, 'itemSpriteMaskPainter')
  request.r(i1029[13], i1029[14], 0, i1028, 'itemDragSpriteMaskPainter')
  request.r(i1029[15], i1029[16], 0, i1028, 'itemMoveToTarget')
  request.r(i1029[17], i1029[18], 0, i1028, 'animator')
  i1028.itemType = i1029[19]
  request.r(i1029[20], i1029[21], 0, i1028, 'spriteRenderer')
  i1028.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1029[22], i1028.onKnifeIn)
  i1028.heartEffectScale = i1029[23]
  i1028.breakHeartEffectScale = i1029[24]
  i1028.blinkEffectScale = i1029[25]
  i1028.mergeEffectScale = i1029[26]
  i1028.playMoveToTargetFinishSound = !!i1029[27]
  i1028.moveToTargetFinishFxType = i1029[28]
  i1028.fxSpawnZPos = i1029[29]
  request.r(i1029[30], i1029[31], 0, i1028, 'tf')
  return i1028
}

Deserializers["PaperBox"] = function (request, data, root) {
  var i1030 = root || request.c( 'PaperBox' )
  var i1031 = data
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1033 = data
  i1032.center = new pc.Vec3( i1033[0], i1033[1], i1033[2] )
  i1032.radius = i1033[3]
  i1032.height = i1033[4]
  i1032.direction = i1033[5]
  i1032.enabled = !!i1033[6]
  i1032.isTrigger = !!i1033[7]
  request.r(i1033[8], i1033[9], 0, i1032, 'material')
  return i1032
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1034 = root || request.c( 'ItemClickable' )
  var i1035 = data
  i1034.requiredClicks = i1035[0]
  i1034.infiniteClick = !!i1035[1]
  i1034.canClick = !!i1035[2]
  i1034.disableAfterClick = !!i1035[3]
  i1034.onClick = request.d('UnityEngine.Events.UnityEvent', i1035[4], i1034.onClick)
  var i1037 = i1035[5]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('UnityEngine.Events.UnityEvent', i1037[i + 0]));
  }
  i1034.sequentialOnClicks = i1036
  i1034.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1035[6], i1034.onClickComplete)
  return i1034
}

Deserializers["TrashCan"] = function (request, data, root) {
  var i1040 = root || request.c( 'TrashCan' )
  var i1041 = data
  i1040.isOpen = !!i1041[0]
  i1040.isDone = !!i1041[1]
  i1040.onProcess = !!i1041[2]
  i1040.requireMatchingTargetTypeForHandTut = !!i1041[3]
  request.r(i1041[4], i1041[5], 0, i1040, 'itemDraggable')
  request.r(i1041[6], i1041[7], 0, i1040, 'itemClickable')
  request.r(i1041[8], i1041[9], 0, i1040, 'itemStirring')
  request.r(i1041[10], i1041[11], 0, i1040, 'itemKnifeSpriteMaskCutter')
  request.r(i1041[12], i1041[13], 0, i1040, 'itemSpriteMaskPainter')
  request.r(i1041[14], i1041[15], 0, i1040, 'itemDragSpriteMaskPainter')
  request.r(i1041[16], i1041[17], 0, i1040, 'itemMoveToTarget')
  request.r(i1041[18], i1041[19], 0, i1040, 'animator')
  i1040.itemType = i1041[20]
  request.r(i1041[21], i1041[22], 0, i1040, 'spriteRenderer')
  i1040.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1041[23], i1040.onKnifeIn)
  i1040.heartEffectScale = i1041[24]
  i1040.breakHeartEffectScale = i1041[25]
  i1040.blinkEffectScale = i1041[26]
  i1040.mergeEffectScale = i1041[27]
  i1040.playMoveToTargetFinishSound = !!i1041[28]
  i1040.moveToTargetFinishFxType = i1041[29]
  i1040.fxSpawnZPos = i1041[30]
  request.r(i1041[31], i1041[32], 0, i1040, 'tf')
  return i1040
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i1042 = root || request.c( 'CuttingBoard' )
  var i1043 = data
  i1042.punchScale = new pc.Vec3( i1043[0], i1043[1], i1043[2] )
  i1042.punchDuration = i1043[3]
  i1042.isDone = !!i1043[4]
  i1042.onProcess = !!i1043[5]
  i1042.requireMatchingTargetTypeForHandTut = !!i1043[6]
  request.r(i1043[7], i1043[8], 0, i1042, 'itemDraggable')
  request.r(i1043[9], i1043[10], 0, i1042, 'itemClickable')
  request.r(i1043[11], i1043[12], 0, i1042, 'itemStirring')
  request.r(i1043[13], i1043[14], 0, i1042, 'itemKnifeSpriteMaskCutter')
  request.r(i1043[15], i1043[16], 0, i1042, 'itemSpriteMaskPainter')
  request.r(i1043[17], i1043[18], 0, i1042, 'itemDragSpriteMaskPainter')
  request.r(i1043[19], i1043[20], 0, i1042, 'itemMoveToTarget')
  request.r(i1043[21], i1043[22], 0, i1042, 'animator')
  i1042.itemType = i1043[23]
  request.r(i1043[24], i1043[25], 0, i1042, 'spriteRenderer')
  i1042.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1043[26], i1042.onKnifeIn)
  i1042.heartEffectScale = i1043[27]
  i1042.breakHeartEffectScale = i1043[28]
  i1042.blinkEffectScale = i1043[29]
  i1042.mergeEffectScale = i1043[30]
  i1042.playMoveToTargetFinishSound = !!i1043[31]
  i1042.moveToTargetFinishFxType = i1043[32]
  i1042.fxSpawnZPos = i1043[33]
  request.r(i1043[34], i1043[35], 0, i1042, 'tf')
  return i1042
}

Deserializers["Pan"] = function (request, data, root) {
  var i1044 = root || request.c( 'Pan' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'fryingFX')
  i1044.isOilIn = !!i1045[2]
  i1044.isTurnOnStove = !!i1045[3]
  i1044.stoveShakeDelay = i1045[4]
  i1044.stoveShakeDuration = i1045[5]
  i1044.stoveShakeStrength = i1045[6]
  i1044.stoveShakeVibrato = i1045[7]
  i1044.isDone = !!i1045[8]
  i1044.onProcess = !!i1045[9]
  i1044.requireMatchingTargetTypeForHandTut = !!i1045[10]
  request.r(i1045[11], i1045[12], 0, i1044, 'itemDraggable')
  request.r(i1045[13], i1045[14], 0, i1044, 'itemClickable')
  request.r(i1045[15], i1045[16], 0, i1044, 'itemStirring')
  request.r(i1045[17], i1045[18], 0, i1044, 'itemKnifeSpriteMaskCutter')
  request.r(i1045[19], i1045[20], 0, i1044, 'itemSpriteMaskPainter')
  request.r(i1045[21], i1045[22], 0, i1044, 'itemDragSpriteMaskPainter')
  request.r(i1045[23], i1045[24], 0, i1044, 'itemMoveToTarget')
  request.r(i1045[25], i1045[26], 0, i1044, 'animator')
  i1044.itemType = i1045[27]
  request.r(i1045[28], i1045[29], 0, i1044, 'spriteRenderer')
  i1044.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1045[30], i1044.onKnifeIn)
  i1044.heartEffectScale = i1045[31]
  i1044.breakHeartEffectScale = i1045[32]
  i1044.blinkEffectScale = i1045[33]
  i1044.mergeEffectScale = i1045[34]
  i1044.playMoveToTargetFinishSound = !!i1045[35]
  i1044.moveToTargetFinishFxType = i1045[36]
  i1044.fxSpawnZPos = i1045[37]
  request.r(i1045[38], i1045[39], 0, i1044, 'tf')
  return i1044
}

Deserializers["FishOnPan"] = function (request, data, root) {
  var i1046 = root || request.c( 'FishOnPan' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'clockTimerPrefab')
  request.r(i1047[2], i1047[3], 0, i1046, 'clockSpawnPoint')
  i1046.cookDuration = i1047[4]
  i1046.readyZ = i1047[5]
  i1046.isDone = !!i1047[6]
  i1046.onProcess = !!i1047[7]
  i1046.requireMatchingTargetTypeForHandTut = !!i1047[8]
  request.r(i1047[9], i1047[10], 0, i1046, 'itemDraggable')
  request.r(i1047[11], i1047[12], 0, i1046, 'itemClickable')
  request.r(i1047[13], i1047[14], 0, i1046, 'itemStirring')
  request.r(i1047[15], i1047[16], 0, i1046, 'itemKnifeSpriteMaskCutter')
  request.r(i1047[17], i1047[18], 0, i1046, 'itemSpriteMaskPainter')
  request.r(i1047[19], i1047[20], 0, i1046, 'itemDragSpriteMaskPainter')
  request.r(i1047[21], i1047[22], 0, i1046, 'itemMoveToTarget')
  request.r(i1047[23], i1047[24], 0, i1046, 'animator')
  i1046.itemType = i1047[25]
  request.r(i1047[26], i1047[27], 0, i1046, 'spriteRenderer')
  i1046.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1047[28], i1046.onKnifeIn)
  i1046.heartEffectScale = i1047[29]
  i1046.breakHeartEffectScale = i1047[30]
  i1046.blinkEffectScale = i1047[31]
  i1046.mergeEffectScale = i1047[32]
  i1046.playMoveToTargetFinishSound = !!i1047[33]
  i1046.moveToTargetFinishFxType = i1047[34]
  i1046.fxSpawnZPos = i1047[35]
  request.r(i1047[36], i1047[37], 0, i1046, 'tf')
  return i1046
}

Deserializers["Knife"] = function (request, data, root) {
  var i1048 = root || request.c( 'Knife' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'knifeIdle')
  request.r(i1049[2], i1049[3], 0, i1048, 'knifeOnDrag')
  i1048.knifeOnDragRotationOffset = new pc.Vec3( i1049[4], i1049[5], i1049[6] )
  i1048.knifeOnDragRotateDuration = i1049[7]
  i1048.knifeOnDragRotateEase = i1049[8]
  i1048.isDone = !!i1049[9]
  i1048.onProcess = !!i1049[10]
  i1048.requireMatchingTargetTypeForHandTut = !!i1049[11]
  request.r(i1049[12], i1049[13], 0, i1048, 'itemDraggable')
  request.r(i1049[14], i1049[15], 0, i1048, 'itemClickable')
  request.r(i1049[16], i1049[17], 0, i1048, 'itemStirring')
  request.r(i1049[18], i1049[19], 0, i1048, 'itemKnifeSpriteMaskCutter')
  request.r(i1049[20], i1049[21], 0, i1048, 'itemSpriteMaskPainter')
  request.r(i1049[22], i1049[23], 0, i1048, 'itemDragSpriteMaskPainter')
  request.r(i1049[24], i1049[25], 0, i1048, 'itemMoveToTarget')
  request.r(i1049[26], i1049[27], 0, i1048, 'animator')
  i1048.itemType = i1049[28]
  request.r(i1049[29], i1049[30], 0, i1048, 'spriteRenderer')
  i1048.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1049[31], i1048.onKnifeIn)
  i1048.heartEffectScale = i1049[32]
  i1048.breakHeartEffectScale = i1049[33]
  i1048.blinkEffectScale = i1049[34]
  i1048.mergeEffectScale = i1049[35]
  i1048.playMoveToTargetFinishSound = !!i1049[36]
  i1048.moveToTargetFinishFxType = i1049[37]
  i1048.fxSpawnZPos = i1049[38]
  request.r(i1049[39], i1049[40], 0, i1048, 'tf')
  return i1048
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1050 = root || request.c( 'ItemDragChildRotator' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'rotateTarget')
  i1050.dragEulerAngles = new pc.Vec3( i1051[2], i1051[3], i1051[4] )
  i1050.useLocalRotation = !!i1051[5]
  i1050.rotateRelative = !!i1051[6]
  i1050.rotateDuration = i1051[7]
  i1050.rotateEase = i1051[8]
  i1050.rotateMode = i1051[9]
  return i1050
}

Deserializers["Spartula"] = function (request, data, root) {
  var i1052 = root || request.c( 'Spartula' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'carriedItem')
  request.r(i1053[2], i1053[3], 0, i1052, 'fishPoint')
  i1052.catchDuration = i1053[4]
  i1052.raycastDistance = i1053[5]
  i1052.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1053[6] )
  i1052.isDone = !!i1053[7]
  i1052.onProcess = !!i1053[8]
  i1052.requireMatchingTargetTypeForHandTut = !!i1053[9]
  request.r(i1053[10], i1053[11], 0, i1052, 'itemDraggable')
  request.r(i1053[12], i1053[13], 0, i1052, 'itemClickable')
  request.r(i1053[14], i1053[15], 0, i1052, 'itemStirring')
  request.r(i1053[16], i1053[17], 0, i1052, 'itemKnifeSpriteMaskCutter')
  request.r(i1053[18], i1053[19], 0, i1052, 'itemSpriteMaskPainter')
  request.r(i1053[20], i1053[21], 0, i1052, 'itemDragSpriteMaskPainter')
  request.r(i1053[22], i1053[23], 0, i1052, 'itemMoveToTarget')
  request.r(i1053[24], i1053[25], 0, i1052, 'animator')
  i1052.itemType = i1053[26]
  request.r(i1053[27], i1053[28], 0, i1052, 'spriteRenderer')
  i1052.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1053[29], i1052.onKnifeIn)
  i1052.heartEffectScale = i1053[30]
  i1052.breakHeartEffectScale = i1053[31]
  i1052.blinkEffectScale = i1053[32]
  i1052.mergeEffectScale = i1053[33]
  i1052.playMoveToTargetFinishSound = !!i1053[34]
  i1052.moveToTargetFinishFxType = i1053[35]
  i1052.fxSpawnZPos = i1053[36]
  request.r(i1053[37], i1053[38], 0, i1052, 'tf')
  return i1052
}

Deserializers["Fish"] = function (request, data, root) {
  var i1054 = root || request.c( 'Fish' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'lastPlate')
  request.r(i1055[2], i1055[3], 0, i1054, 'fishIntestine')
  request.r(i1055[4], i1055[5], 0, i1054, 'fishBranchial')
  request.r(i1055[6], i1055[7], 0, i1054, 'panPos')
  request.r(i1055[8], i1055[9], 0, i1054, 'fishOnPan')
  request.r(i1055[10], i1055[11], 0, i1054, 'oilTop')
  request.r(i1055[12], i1055[13], 0, i1054, 'salt')
  request.r(i1055[14], i1055[15], 0, i1054, 'waterTarget')
  request.r(i1055[16], i1055[17], 0, i1054, 'cuttingBoardTarget')
  request.r(i1055[18], i1055[19], 0, i1054, 'plateTarget')
  var i1057 = i1055[20]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.childObject = i1056
  var i1059 = i1055[21]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1054.trashObj = i1058
  request.r(i1055[22], i1055[23], 0, i1054, 'knife')
  request.r(i1055[24], i1055[25], 0, i1054, 'waterFx')
  i1054.scaleOnDragFromWater = !!i1055[26]
  i1054.dragFromWaterScale = new pc.Vec3( i1055[27], i1055[28], i1055[29] )
  i1054.dragFromWaterScaleDuration = i1055[30]
  request.r(i1055[31], i1055[32], 0, i1054, 'ply_TimerEvent')
  request.r(i1055[33], i1055[34], 0, i1054, 'ply_BobEffect')
  request.r(i1055[35], i1055[36], 0, i1054, 'collider1')
  request.r(i1055[37], i1055[38], 0, i1054, 'sink')
  i1054.isInWater = !!i1055[39]
  i1054.isOnCuttingBoard = !!i1055[40]
  i1054.isOnPlate = !!i1055[41]
  i1054.isClean = !!i1055[42]
  i1054.isCutDone = !!i1055[43]
  i1054.cuttingBoardColliderRadiusMultiplier = i1055[44]
  i1054.jumpToPlatePower = i1055[45]
  i1054.jumpToPlateDuration = i1055[46]
  i1054.jumpToPlateAfterCutDone = !!i1055[47]
  request.r(i1055[48], i1055[49], 0, i1054, 'plateFoodShadow')
  i1054.platePunchScale = new pc.Vec3( i1055[50], i1055[51], i1055[52] )
  i1054.platePunchDuration = i1055[53]
  i1054.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i1055[54], i1054.onMoveToCuttingBoardComplete)
  i1054.isDone = !!i1055[55]
  i1054.onProcess = !!i1055[56]
  i1054.requireMatchingTargetTypeForHandTut = !!i1055[57]
  request.r(i1055[58], i1055[59], 0, i1054, 'itemDraggable')
  request.r(i1055[60], i1055[61], 0, i1054, 'itemClickable')
  request.r(i1055[62], i1055[63], 0, i1054, 'itemStirring')
  request.r(i1055[64], i1055[65], 0, i1054, 'itemKnifeSpriteMaskCutter')
  request.r(i1055[66], i1055[67], 0, i1054, 'itemSpriteMaskPainter')
  request.r(i1055[68], i1055[69], 0, i1054, 'itemDragSpriteMaskPainter')
  request.r(i1055[70], i1055[71], 0, i1054, 'itemMoveToTarget')
  request.r(i1055[72], i1055[73], 0, i1054, 'animator')
  i1054.itemType = i1055[74]
  request.r(i1055[75], i1055[76], 0, i1054, 'spriteRenderer')
  i1054.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1055[77], i1054.onKnifeIn)
  i1054.heartEffectScale = i1055[78]
  i1054.breakHeartEffectScale = i1055[79]
  i1054.blinkEffectScale = i1055[80]
  i1054.mergeEffectScale = i1055[81]
  i1054.playMoveToTargetFinishSound = !!i1055[82]
  i1054.moveToTargetFinishFxType = i1055[83]
  i1054.fxSpawnZPos = i1055[84]
  request.r(i1055[85], i1055[86], 0, i1054, 'tf')
  return i1054
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i1060 = root || request.c( 'Ply_BobEffect' )
  var i1061 = data
  i1060.playOnEnable = !!i1061[0]
  i1060.useLocalMove = !!i1061[1]
  i1060.bobOffset = new pc.Vec3( i1061[2], i1061[3], i1061[4] )
  i1060.duration = i1061[5]
  i1060.ease = i1061[6]
  return i1060
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i1062 = root || request.c( 'Ply_TimerEvent' )
  var i1063 = data
  i1062.duration = i1063[0]
  i1062.playOnEnable = !!i1063[1]
  i1062.ignoreTimeScale = !!i1063[2]
  i1062.autoDisableOnComplete = !!i1063[3]
  i1062.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i1063[4], i1062.onTimerStart)
  i1062.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i1063[5], i1062.onTimerComplete)
  i1062.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i1063[6], i1062.onTimerStop)
  return i1062
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i1064 = root || request.c( 'InWaterItem' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'waterTarget')
  request.r(i1065[2], i1065[3], 0, i1064, 'cuttingBoardTarget')
  request.r(i1065[4], i1065[5], 0, i1064, 'plateTarget')
  var i1067 = i1065[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.childObject = i1066
  var i1069 = i1065[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1064.trashObj = i1068
  request.r(i1065[8], i1065[9], 0, i1064, 'knife')
  request.r(i1065[10], i1065[11], 0, i1064, 'waterFx')
  i1064.scaleOnDragFromWater = !!i1065[12]
  i1064.dragFromWaterScale = new pc.Vec3( i1065[13], i1065[14], i1065[15] )
  i1064.dragFromWaterScaleDuration = i1065[16]
  request.r(i1065[17], i1065[18], 0, i1064, 'ply_TimerEvent')
  request.r(i1065[19], i1065[20], 0, i1064, 'ply_BobEffect')
  request.r(i1065[21], i1065[22], 0, i1064, 'collider1')
  request.r(i1065[23], i1065[24], 0, i1064, 'sink')
  i1064.isInWater = !!i1065[25]
  i1064.isOnCuttingBoard = !!i1065[26]
  i1064.isOnPlate = !!i1065[27]
  i1064.isClean = !!i1065[28]
  i1064.isCutDone = !!i1065[29]
  i1064.cuttingBoardColliderRadiusMultiplier = i1065[30]
  i1064.jumpToPlatePower = i1065[31]
  i1064.jumpToPlateDuration = i1065[32]
  i1064.jumpToPlateAfterCutDone = !!i1065[33]
  request.r(i1065[34], i1065[35], 0, i1064, 'plateFoodShadow')
  i1064.platePunchScale = new pc.Vec3( i1065[36], i1065[37], i1065[38] )
  i1064.platePunchDuration = i1065[39]
  i1064.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i1065[40], i1064.onMoveToCuttingBoardComplete)
  i1064.isDone = !!i1065[41]
  i1064.onProcess = !!i1065[42]
  i1064.requireMatchingTargetTypeForHandTut = !!i1065[43]
  request.r(i1065[44], i1065[45], 0, i1064, 'itemDraggable')
  request.r(i1065[46], i1065[47], 0, i1064, 'itemClickable')
  request.r(i1065[48], i1065[49], 0, i1064, 'itemStirring')
  request.r(i1065[50], i1065[51], 0, i1064, 'itemKnifeSpriteMaskCutter')
  request.r(i1065[52], i1065[53], 0, i1064, 'itemSpriteMaskPainter')
  request.r(i1065[54], i1065[55], 0, i1064, 'itemDragSpriteMaskPainter')
  request.r(i1065[56], i1065[57], 0, i1064, 'itemMoveToTarget')
  request.r(i1065[58], i1065[59], 0, i1064, 'animator')
  i1064.itemType = i1065[60]
  request.r(i1065[61], i1065[62], 0, i1064, 'spriteRenderer')
  i1064.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1065[63], i1064.onKnifeIn)
  i1064.heartEffectScale = i1065[64]
  i1064.breakHeartEffectScale = i1065[65]
  i1064.blinkEffectScale = i1065[66]
  i1064.mergeEffectScale = i1065[67]
  i1064.playMoveToTargetFinishSound = !!i1065[68]
  i1064.moveToTargetFinishFxType = i1065[69]
  i1064.fxSpawnZPos = i1065[70]
  request.r(i1065[71], i1065[72], 0, i1064, 'tf')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1071 = data
  i1070.ambientIntensity = i1071[0]
  i1070.reflectionIntensity = i1071[1]
  i1070.ambientMode = i1071[2]
  i1070.ambientLight = new pc.Color(i1071[3], i1071[4], i1071[5], i1071[6])
  i1070.ambientSkyColor = new pc.Color(i1071[7], i1071[8], i1071[9], i1071[10])
  i1070.ambientGroundColor = new pc.Color(i1071[11], i1071[12], i1071[13], i1071[14])
  i1070.ambientEquatorColor = new pc.Color(i1071[15], i1071[16], i1071[17], i1071[18])
  i1070.fogColor = new pc.Color(i1071[19], i1071[20], i1071[21], i1071[22])
  i1070.fogEndDistance = i1071[23]
  i1070.fogStartDistance = i1071[24]
  i1070.fogDensity = i1071[25]
  i1070.fog = !!i1071[26]
  request.r(i1071[27], i1071[28], 0, i1070, 'skybox')
  i1070.fogMode = i1071[29]
  var i1073 = i1071[30]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1073[i + 0]) );
  }
  i1070.lightmaps = i1072
  i1070.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1071[31], i1070.lightProbes)
  i1070.lightmapsMode = i1071[32]
  i1070.mixedBakeMode = i1071[33]
  i1070.environmentLightingMode = i1071[34]
  i1070.ambientProbe = new pc.SphericalHarmonicsL2(i1071[35])
  i1070.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1071[36])
  i1070.useReferenceAmbientProbe = !!i1071[37]
  request.r(i1071[38], i1071[39], 0, i1070, 'customReflection')
  request.r(i1071[40], i1071[41], 0, i1070, 'defaultReflection')
  i1070.defaultReflectionMode = i1071[42]
  i1070.defaultReflectionResolution = i1071[43]
  i1070.sunLightObjectId = i1071[44]
  i1070.pixelLightCount = i1071[45]
  i1070.defaultReflectionHDR = !!i1071[46]
  i1070.hasLightDataAsset = !!i1071[47]
  i1070.hasManualGenerate = !!i1071[48]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'lightmapColor')
  request.r(i1077[2], i1077[3], 0, i1076, 'lightmapDirection')
  request.r(i1077[4], i1077[5], 0, i1076, 'shadowMask')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1078 = root || new UnityEngine.LightProbes()
  var i1079 = data
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1089[i + 0]));
  }
  i1086.ShaderCompilationErrors = i1088
  i1086.name = i1087[1]
  i1086.guid = i1087[2]
  var i1091 = i1087[3]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.shaderDefinedKeywords = i1090
  var i1093 = i1087[4]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1093[i + 0]) );
  }
  i1086.passes = i1092
  var i1095 = i1087[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1095[i + 0]) );
  }
  i1086.usePasses = i1094
  var i1097 = i1087[6]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1097[i + 0]) );
  }
  i1086.defaultParameterValues = i1096
  request.r(i1087[7], i1087[8], 0, i1086, 'unityFallbackShader')
  i1086.readDepth = !!i1087[9]
  i1086.hasDepthOnlyPass = !!i1087[10]
  i1086.isCreatedByShaderGraph = !!i1087[11]
  i1086.disableBatching = !!i1087[12]
  i1086.compiled = !!i1087[13]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1101 = data
  i1100.shaderName = i1101[0]
  i1100.errorMessage = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1106 = root || new pc.UnityShaderPass()
  var i1107 = data
  i1106.id = i1107[0]
  i1106.subShaderIndex = i1107[1]
  i1106.name = i1107[2]
  i1106.passType = i1107[3]
  i1106.grabPassTextureName = i1107[4]
  i1106.usePass = !!i1107[5]
  i1106.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[6], i1106.zTest)
  i1106.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[7], i1106.zWrite)
  i1106.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[8], i1106.culling)
  i1106.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1107[9], i1106.blending)
  i1106.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1107[10], i1106.alphaBlending)
  i1106.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[11], i1106.colorWriteMask)
  i1106.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[12], i1106.offsetUnits)
  i1106.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[13], i1106.offsetFactor)
  i1106.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[14], i1106.stencilRef)
  i1106.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[15], i1106.stencilReadMask)
  i1106.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[16], i1106.stencilWriteMask)
  i1106.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[17], i1106.stencilOp)
  i1106.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[18], i1106.stencilOpFront)
  i1106.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[19], i1106.stencilOpBack)
  var i1109 = i1107[20]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1109[i + 0]) );
  }
  i1106.tags = i1108
  var i1111 = i1107[21]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.passDefinedKeywords = i1110
  var i1113 = i1107[22]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1113[i + 0]) );
  }
  i1106.passDefinedKeywordGroups = i1112
  var i1115 = i1107[23]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1115[i + 0]) );
  }
  i1106.variants = i1114
  var i1117 = i1107[24]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1117[i + 0]) );
  }
  i1106.excludedVariants = i1116
  i1106.hasDepthReader = !!i1107[25]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1119 = data
  i1118.val = i1119[0]
  i1118.name = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1121 = data
  i1120.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[0], i1120.src)
  i1120.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[1], i1120.dst)
  i1120.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[2], i1120.op)
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1123 = data
  i1122.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[0], i1122.pass)
  i1122.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[1], i1122.fail)
  i1122.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[2], i1122.zFail)
  i1122.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[3], i1122.comp)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.value = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1130.keywords = i1132
  i1130.hasDiscard = !!i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1137 = data
  i1136.passId = i1137[0]
  i1136.subShaderIndex = i1137[1]
  var i1139 = i1137[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1136.keywords = i1138
  i1136.vertexProgram = i1137[3]
  i1136.fragmentProgram = i1137[4]
  i1136.exportedForWebGl2 = !!i1137[5]
  i1136.readDepth = !!i1137[6]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'shader')
  i1142.pass = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.type = i1147[1]
  i1146.value = new pc.Vec4( i1147[2], i1147[3], i1147[4], i1147[5] )
  i1146.textureValue = i1147[6]
  i1146.shaderPropertyFlag = i1147[7]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1149 = data
  i1148.name = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'texture')
  i1148.aabb = i1149[3]
  i1148.vertices = i1149[4]
  i1148.triangles = i1149[5]
  i1148.textureRect = UnityEngine.Rect.MinMaxRect(i1149[6], i1149[7], i1149[8], i1149[9])
  i1148.packedRect = UnityEngine.Rect.MinMaxRect(i1149[10], i1149[11], i1149[12], i1149[13])
  i1148.border = new pc.Vec4( i1149[14], i1149[15], i1149[16], i1149[17] )
  i1148.transparency = i1149[18]
  i1148.bounds = i1149[19]
  i1148.pixelsPerUnit = i1149[20]
  i1148.textureWidth = i1149[21]
  i1148.textureHeight = i1149[22]
  i1148.nativeSize = new pc.Vec2( i1149[23], i1149[24] )
  i1148.pivot = new pc.Vec2( i1149[25], i1149[26] )
  i1148.textureRectOffset = new pc.Vec2( i1149[27], i1149[28] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1151 = data
  i1150.name = i1151[0]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.wrapMode = i1153[1]
  i1152.isLooping = !!i1153[2]
  i1152.length = i1153[3]
  var i1155 = i1153[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1155[i + 0]) );
  }
  i1152.curves = i1154
  var i1157 = i1153[5]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1157[i + 0]) );
  }
  i1152.events = i1156
  i1152.halfPrecision = !!i1153[6]
  i1152._frameRate = i1153[7]
  i1152.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1153[8], i1152.localBounds)
  i1152.hasMuscleCurves = !!i1153[9]
  var i1159 = i1153[10]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1152.clipMuscleConstant = i1158
  i1152.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1153[11], i1152.clipBindingConstant)
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1163 = data
  i1162.path = i1163[0]
  i1162.hash = i1163[1]
  i1162.componentType = i1163[2]
  i1162.property = i1163[3]
  i1162.keys = i1163[4]
  var i1165 = i1163[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1165[i + 0]) );
  }
  i1162.objectReferenceKeys = i1164
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1169 = data
  i1168.time = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'value')
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1173 = data
  i1172.functionName = i1173[0]
  i1172.floatParameter = i1173[1]
  i1172.intParameter = i1173[2]
  i1172.stringParameter = i1173[3]
  request.r(i1173[4], i1173[5], 0, i1172, 'objectReferenceParameter')
  i1172.time = i1173[6]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1175 = data
  i1174.center = new pc.Vec3( i1175[0], i1175[1], i1175[2] )
  i1174.extends = new pc.Vec3( i1175[3], i1175[4], i1175[5] )
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1179 = data
  var i1181 = i1179[0]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1178.genericBindings = i1180
  var i1183 = i1179[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1178.pptrCurveMapping = i1182
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1185 = data
  i1184.name = i1185[0]
  var i1187 = i1185[1]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1187[i + 0]) );
  }
  i1184.layers = i1186
  var i1189 = i1185[2]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1189[i + 0]) );
  }
  i1184.parameters = i1188
  i1184.animationClips = i1185[3]
  i1184.avatarUnsupported = i1185[4]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.defaultWeight = i1193[1]
  i1192.blendingMode = i1193[2]
  i1192.avatarMask = i1193[3]
  i1192.syncedLayerIndex = i1193[4]
  i1192.syncedLayerAffectsTiming = !!i1193[5]
  i1192.syncedLayers = i1193[6]
  i1192.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1193[7], i1192.stateMachine)
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1195 = data
  i1194.id = i1195[0]
  i1194.name = i1195[1]
  i1194.path = i1195[2]
  var i1197 = i1195[3]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1197[i + 0]) );
  }
  i1194.states = i1196
  var i1199 = i1195[4]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1199[i + 0]) );
  }
  i1194.machines = i1198
  var i1201 = i1195[5]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1201[i + 0]) );
  }
  i1194.entryStateTransitions = i1200
  var i1203 = i1195[6]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1203[i + 0]) );
  }
  i1194.exitStateTransitions = i1202
  var i1205 = i1195[7]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1205[i + 0]) );
  }
  i1194.anyStateTransitions = i1204
  i1194.defaultStateId = i1195[8]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1209 = data
  i1208.id = i1209[0]
  i1208.name = i1209[1]
  i1208.cycleOffset = i1209[2]
  i1208.cycleOffsetParameter = i1209[3]
  i1208.cycleOffsetParameterActive = !!i1209[4]
  i1208.mirror = !!i1209[5]
  i1208.mirrorParameter = i1209[6]
  i1208.mirrorParameterActive = !!i1209[7]
  i1208.motionId = i1209[8]
  i1208.nameHash = i1209[9]
  i1208.fullPathHash = i1209[10]
  i1208.speed = i1209[11]
  i1208.speedParameter = i1209[12]
  i1208.speedParameterActive = !!i1209[13]
  i1208.tag = i1209[14]
  i1208.tagHash = i1209[15]
  i1208.writeDefaultValues = !!i1209[16]
  var i1211 = i1209[17]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 2, i1210, '')
  }
  i1208.behaviours = i1210
  var i1213 = i1209[18]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1213[i + 0]) );
  }
  i1208.transitions = i1212
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1219 = data
  i1218.fullPath = i1219[0]
  i1218.canTransitionToSelf = !!i1219[1]
  i1218.duration = i1219[2]
  i1218.exitTime = i1219[3]
  i1218.hasExitTime = !!i1219[4]
  i1218.hasFixedDuration = !!i1219[5]
  i1218.interruptionSource = i1219[6]
  i1218.offset = i1219[7]
  i1218.orderedInterruption = !!i1219[8]
  i1218.destinationStateId = i1219[9]
  i1218.isExit = !!i1219[10]
  i1218.mute = !!i1219[11]
  i1218.solo = !!i1219[12]
  var i1221 = i1219[13]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1221[i + 0]) );
  }
  i1218.conditions = i1220
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1227 = data
  i1226.destinationStateId = i1227[0]
  i1226.isExit = !!i1227[1]
  i1226.mute = !!i1227[2]
  i1226.solo = !!i1227[3]
  var i1229 = i1227[4]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1229[i + 0]) );
  }
  i1226.conditions = i1228
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1233 = data
  i1232.defaultBool = !!i1233[0]
  i1232.defaultFloat = i1233[1]
  i1232.defaultInt = i1233[2]
  i1232.name = i1233[3]
  i1232.nameHash = i1233[4]
  i1232.type = i1233[5]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1237 = data
  i1236.mode = i1237[0]
  i1236.parameter = i1237[1]
  i1236.threshold = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.bytes64 = i1239[1]
  i1238.data = i1239[2]
  return i1238
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1241 = data
  i1240.normalStyle = i1241[0]
  i1240.normalSpacingOffset = i1241[1]
  i1240.boldStyle = i1241[2]
  i1240.boldSpacing = i1241[3]
  i1240.italicStyle = i1241[4]
  i1240.tabSize = i1241[5]
  request.r(i1241[6], i1241[7], 0, i1240, 'atlas')
  i1240.m_SourceFontFileGUID = i1241[8]
  i1240.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1241[9], i1240.m_CreationSettings)
  request.r(i1241[10], i1241[11], 0, i1240, 'm_SourceFontFile')
  i1240.m_SourceFontFilePath = i1241[12]
  i1240.m_AtlasPopulationMode = i1241[13]
  i1240.InternalDynamicOS = !!i1241[14]
  var i1243 = i1241[15]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.Glyph', i1243[i + 0]));
  }
  i1240.m_GlyphTable = i1242
  var i1245 = i1241[16]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Character', i1245[i + 0]));
  }
  i1240.m_CharacterTable = i1244
  var i1247 = i1241[17]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 2, i1246, '')
  }
  i1240.m_AtlasTextures = i1246
  i1240.m_AtlasTextureIndex = i1241[18]
  i1240.m_IsMultiAtlasTexturesEnabled = !!i1241[19]
  i1240.m_GetFontFeatures = !!i1241[20]
  i1240.m_ClearDynamicDataOnBuild = !!i1241[21]
  i1240.m_AtlasWidth = i1241[22]
  i1240.m_AtlasHeight = i1241[23]
  i1240.m_AtlasPadding = i1241[24]
  i1240.m_AtlasRenderMode = i1241[25]
  var i1249 = i1241[26]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('UnityEngine.TextCore.GlyphRect', i1249[i + 0]));
  }
  i1240.m_UsedGlyphRects = i1248
  var i1251 = i1241[27]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.GlyphRect', i1251[i + 0]));
  }
  i1240.m_FreeGlyphRects = i1250
  i1240.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1241[28], i1240.m_FontFeatureTable)
  i1240.m_ShouldReimportFontFeatures = !!i1241[29]
  var i1253 = i1241[30]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1240.m_FallbackFontAssetTable = i1252
  var i1255 = i1241[31]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('TMPro.TMP_FontWeightPair', i1255[i + 0]) );
  }
  i1240.m_FontWeightTable = i1254
  var i1257 = i1241[32]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('TMPro.TMP_FontWeightPair', i1257[i + 0]) );
  }
  i1240.fontWeights = i1256
  i1240.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1241[33], i1240.m_fontInfo)
  var i1259 = i1241[34]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_Glyph', i1259[i + 0]));
  }
  i1240.m_glyphInfoList = i1258
  i1240.m_KerningTable = request.d('TMPro.KerningTable', i1241[35], i1240.m_KerningTable)
  var i1261 = i1241[36]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1240.fallbackFontAssets = i1260
  i1240.m_Version = i1241[37]
  i1240.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1241[38], i1240.m_FaceInfo)
  request.r(i1241[39], i1241[40], 0, i1240, 'm_Material')
  return i1240
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1263 = data
  i1262.sourceFontFileName = i1263[0]
  i1262.sourceFontFileGUID = i1263[1]
  i1262.faceIndex = i1263[2]
  i1262.pointSizeSamplingMode = i1263[3]
  i1262.pointSize = i1263[4]
  i1262.padding = i1263[5]
  i1262.paddingMode = i1263[6]
  i1262.packingMode = i1263[7]
  i1262.atlasWidth = i1263[8]
  i1262.atlasHeight = i1263[9]
  i1262.characterSetSelectionMode = i1263[10]
  i1262.characterSequence = i1263[11]
  i1262.referencedFontAssetGUID = i1263[12]
  i1262.referencedTextAssetGUID = i1263[13]
  i1262.fontStyle = i1263[14]
  i1262.fontStyleModifier = i1263[15]
  i1262.renderMode = i1263[16]
  i1262.includeFontFeatures = !!i1263[17]
  return i1262
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1267 = data
  i1266.m_Index = i1267[0]
  i1266.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1267[1], i1266.m_Metrics)
  i1266.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1267[2], i1266.m_GlyphRect)
  i1266.m_Scale = i1267[3]
  i1266.m_AtlasIndex = i1267[4]
  i1266.m_ClassDefinitionType = i1267[5]
  return i1266
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1269 = data
  i1268.m_Width = i1269[0]
  i1268.m_Height = i1269[1]
  i1268.m_HorizontalBearingX = i1269[2]
  i1268.m_HorizontalBearingY = i1269[3]
  i1268.m_HorizontalAdvance = i1269[4]
  return i1268
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1271 = data
  i1270.m_X = i1271[0]
  i1270.m_Y = i1271[1]
  i1270.m_Width = i1271[2]
  i1270.m_Height = i1271[3]
  return i1270
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_Character' )
  var i1275 = data
  i1274.m_ElementType = i1275[0]
  i1274.m_Unicode = i1275[1]
  i1274.m_GlyphIndex = i1275[2]
  i1274.m_Scale = i1275[3]
  return i1274
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.MultipleSubstitutionRecord', i1283[i + 0]));
  }
  i1280.m_MultipleSubstitutionRecords = i1282
  var i1285 = i1281[1]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.LigatureSubstitutionRecord', i1285[i + 0]));
  }
  i1280.m_LigatureSubstitutionRecords = i1284
  var i1287 = i1281[2]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1287[i + 0]));
  }
  i1280.m_GlyphPairAdjustmentRecords = i1286
  var i1289 = i1281[3]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1289[i + 0]));
  }
  i1280.m_MarkToBaseAdjustmentRecords = i1288
  var i1291 = i1281[4]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1291[i + 0]));
  }
  i1280.m_MarkToMarkAdjustmentRecords = i1290
  return i1280
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1295 = data
  i1294.m_TargetGlyphID = i1295[0]
  i1294.m_SubstituteGlyphIDs = i1295[1]
  return i1294
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1299 = data
  i1298.m_ComponentGlyphIDs = i1299[0]
  i1298.m_LigatureGlyphID = i1299[1]
  return i1298
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1303 = data
  i1302.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1303[0], i1302.m_FirstAdjustmentRecord)
  i1302.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1303[1], i1302.m_SecondAdjustmentRecord)
  i1302.m_FeatureLookupFlags = i1303[2]
  return i1302
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1307 = data
  i1306.m_BaseGlyphID = i1307[0]
  i1306.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1307[1], i1306.m_BaseGlyphAnchorPoint)
  i1306.m_MarkGlyphID = i1307[2]
  i1306.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1307[3], i1306.m_MarkPositionAdjustment)
  return i1306
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1311 = data
  i1310.m_BaseMarkGlyphID = i1311[0]
  i1310.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1311[1], i1310.m_BaseMarkGlyphAnchorPoint)
  i1310.m_CombiningMarkGlyphID = i1311[2]
  i1310.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1311[3], i1310.m_CombiningMarkPositionAdjustment)
  return i1310
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'regularTypeface')
  request.r(i1317[2], i1317[3], 0, i1316, 'italicTypeface')
  return i1316
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1319 = data
  i1318.Name = i1319[0]
  i1318.PointSize = i1319[1]
  i1318.Scale = i1319[2]
  i1318.CharacterCount = i1319[3]
  i1318.LineHeight = i1319[4]
  i1318.Baseline = i1319[5]
  i1318.Ascender = i1319[6]
  i1318.CapHeight = i1319[7]
  i1318.Descender = i1319[8]
  i1318.CenterLine = i1319[9]
  i1318.SuperscriptOffset = i1319[10]
  i1318.SubscriptOffset = i1319[11]
  i1318.SubSize = i1319[12]
  i1318.Underline = i1319[13]
  i1318.UnderlineThickness = i1319[14]
  i1318.strikethrough = i1319[15]
  i1318.strikethroughThickness = i1319[16]
  i1318.TabWidth = i1319[17]
  i1318.Padding = i1319[18]
  i1318.AtlasWidth = i1319[19]
  i1318.AtlasHeight = i1319[20]
  return i1318
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.x = i1323[1]
  i1322.y = i1323[2]
  i1322.width = i1323[3]
  i1322.height = i1323[4]
  i1322.xOffset = i1323[5]
  i1322.yOffset = i1323[6]
  i1322.xAdvance = i1323[7]
  i1322.scale = i1323[8]
  return i1322
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.KerningTable' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.KerningPair', i1327[i + 0]));
  }
  i1324.kerningPairs = i1326
  return i1324
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.KerningPair' )
  var i1331 = data
  i1330.xOffset = i1331[0]
  i1330.m_FirstGlyph = i1331[1]
  i1330.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1331[2], i1330.m_FirstGlyphAdjustments)
  i1330.m_SecondGlyph = i1331[3]
  i1330.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1331[4], i1330.m_SecondGlyphAdjustments)
  i1330.m_IgnoreSpacingAdjustments = !!i1331[5]
  return i1330
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1333 = data
  i1332.m_FaceIndex = i1333[0]
  i1332.m_FamilyName = i1333[1]
  i1332.m_StyleName = i1333[2]
  i1332.m_PointSize = i1333[3]
  i1332.m_Scale = i1333[4]
  i1332.m_UnitsPerEM = i1333[5]
  i1332.m_LineHeight = i1333[6]
  i1332.m_AscentLine = i1333[7]
  i1332.m_CapLine = i1333[8]
  i1332.m_MeanLine = i1333[9]
  i1332.m_Baseline = i1333[10]
  i1332.m_DescentLine = i1333[11]
  i1332.m_SuperscriptOffset = i1333[12]
  i1332.m_SuperscriptSize = i1333[13]
  i1332.m_SubscriptOffset = i1333[14]
  i1332.m_SubscriptSize = i1333[15]
  i1332.m_UnderlineOffset = i1333[16]
  i1332.m_UnderlineThickness = i1333[17]
  i1332.m_StrikethroughOffset = i1333[18]
  i1332.m_StrikethroughThickness = i1333[19]
  i1332.m_TabWidth = i1333[20]
  return i1332
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1335 = data
  i1334.useSafeMode = !!i1335[0]
  i1334.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1335[1], i1334.safeModeOptions)
  i1334.timeScale = i1335[2]
  i1334.unscaledTimeScale = i1335[3]
  i1334.useSmoothDeltaTime = !!i1335[4]
  i1334.maxSmoothUnscaledTime = i1335[5]
  i1334.rewindCallbackMode = i1335[6]
  i1334.showUnityEditorReport = !!i1335[7]
  i1334.logBehaviour = i1335[8]
  i1334.drawGizmos = !!i1335[9]
  i1334.defaultRecyclable = !!i1335[10]
  i1334.defaultAutoPlay = i1335[11]
  i1334.defaultUpdateType = i1335[12]
  i1334.defaultTimeScaleIndependent = !!i1335[13]
  i1334.defaultEaseType = i1335[14]
  i1334.defaultEaseOvershootOrAmplitude = i1335[15]
  i1334.defaultEasePeriod = i1335[16]
  i1334.defaultAutoKill = !!i1335[17]
  i1334.defaultLoopType = i1335[18]
  i1334.debugMode = !!i1335[19]
  i1334.debugStoreTargetId = !!i1335[20]
  i1334.showPreviewPanel = !!i1335[21]
  i1334.storeSettingsLocation = i1335[22]
  i1334.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1335[23], i1334.modules)
  i1334.createASMDEF = !!i1335[24]
  i1334.showPlayingTweens = !!i1335[25]
  i1334.showPausedTweens = !!i1335[26]
  return i1334
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1337 = data
  i1336.logBehaviour = i1337[0]
  i1336.nestedTweenFailureBehaviour = i1337[1]
  return i1336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1339 = data
  i1338.showPanel = !!i1339[0]
  i1338.audioEnabled = !!i1339[1]
  i1338.physicsEnabled = !!i1339[2]
  i1338.physics2DEnabled = !!i1339[3]
  i1338.spriteEnabled = !!i1339[4]
  i1338.uiEnabled = !!i1339[5]
  i1338.uiToolkitEnabled = !!i1339[6]
  i1338.textMeshProEnabled = !!i1339[7]
  i1338.tk2DEnabled = !!i1339[8]
  i1338.deAudioEnabled = !!i1339[9]
  i1338.deUnityExtendedEnabled = !!i1339[10]
  i1338.epoOutlineEnabled = !!i1339[11]
  return i1338
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Settings' )
  var i1341 = data
  i1340.assetVersion = i1341[0]
  i1340.m_TextWrappingMode = i1341[1]
  i1340.m_enableKerning = !!i1341[2]
  var i1343 = i1341[3]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(i1343[i + 0]);
  }
  i1340.m_ActiveFontFeatures = i1342
  i1340.m_enableExtraPadding = !!i1341[4]
  i1340.m_enableTintAllSprites = !!i1341[5]
  i1340.m_enableParseEscapeCharacters = !!i1341[6]
  i1340.m_EnableRaycastTarget = !!i1341[7]
  i1340.m_GetFontFeaturesAtRuntime = !!i1341[8]
  i1340.m_missingGlyphCharacter = i1341[9]
  i1340.m_ClearDynamicDataOnBuild = !!i1341[10]
  i1340.m_warningsDisabled = !!i1341[11]
  request.r(i1341[12], i1341[13], 0, i1340, 'm_defaultFontAsset')
  i1340.m_defaultFontAssetPath = i1341[14]
  i1340.m_defaultFontSize = i1341[15]
  i1340.m_defaultAutoSizeMinRatio = i1341[16]
  i1340.m_defaultAutoSizeMaxRatio = i1341[17]
  i1340.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1341[18], i1341[19] )
  i1340.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1341[20], i1341[21] )
  i1340.m_autoSizeTextContainer = !!i1341[22]
  i1340.m_IsTextObjectScaleStatic = !!i1341[23]
  var i1345 = i1341[24]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1340.m_fallbackFontAssets = i1344
  i1340.m_matchMaterialPreset = !!i1341[25]
  i1340.m_HideSubTextObjects = !!i1341[26]
  request.r(i1341[27], i1341[28], 0, i1340, 'm_defaultSpriteAsset')
  i1340.m_defaultSpriteAssetPath = i1341[29]
  i1340.m_enableEmojiSupport = !!i1341[30]
  i1340.m_MissingCharacterSpriteUnicode = i1341[31]
  var i1347 = i1341[32]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1340.m_EmojiFallbackTextAssets = i1346
  i1340.m_defaultColorGradientPresetsPath = i1341[33]
  request.r(i1341[34], i1341[35], 0, i1340, 'm_defaultStyleSheet')
  i1340.m_StyleSheetsResourcePath = i1341[36]
  request.r(i1341[37], i1341[38], 0, i1340, 'm_leadingCharacters')
  request.r(i1341[39], i1341[40], 0, i1340, 'm_followingCharacters')
  i1340.m_UseModernHangulLineBreakingRules = !!i1341[41]
  return i1340
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'spriteSheet')
  var i1353 = i1351[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.TMP_Sprite', i1353[i + 0]));
  }
  i1350.spriteInfoList = i1352
  var i1355 = i1351[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1350.fallbackSpriteAssets = i1354
  var i1357 = i1351[4]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteCharacter', i1357[i + 0]));
  }
  i1350.m_SpriteCharacterTable = i1356
  var i1359 = i1351[5]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('TMPro.TMP_SpriteGlyph', i1359[i + 0]));
  }
  i1350.m_GlyphTable = i1358
  i1350.m_Version = i1351[6]
  i1350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1351[7], i1350.m_FaceInfo)
  request.r(i1351[8], i1351[9], 0, i1350, 'm_Material')
  return i1350
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.hashCode = i1363[1]
  i1362.unicode = i1363[2]
  i1362.pivot = new pc.Vec2( i1363[3], i1363[4] )
  request.r(i1363[5], i1363[6], 0, i1362, 'sprite')
  i1362.id = i1363[7]
  i1362.x = i1363[8]
  i1362.y = i1363[9]
  i1362.width = i1363[10]
  i1362.height = i1363[11]
  i1362.xOffset = i1363[12]
  i1362.yOffset = i1363[13]
  i1362.xAdvance = i1363[14]
  i1362.scale = i1363[15]
  return i1362
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_ElementType = i1369[1]
  i1368.m_Unicode = i1369[2]
  i1368.m_GlyphIndex = i1369[3]
  i1368.m_Scale = i1369[4]
  return i1368
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'sprite')
  i1372.m_Index = i1373[2]
  i1372.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1373[3], i1372.m_Metrics)
  i1372.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1373[4], i1372.m_GlyphRect)
  i1372.m_Scale = i1373[5]
  i1372.m_AtlasIndex = i1373[6]
  i1372.m_ClassDefinitionType = i1373[7]
  return i1372
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_Style', i1377[i + 0]));
  }
  i1374.m_StyleList = i1376
  return i1374
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_Style' )
  var i1381 = data
  i1380.m_Name = i1381[0]
  i1380.m_HashCode = i1381[1]
  i1380.m_OpeningDefinition = i1381[2]
  i1380.m_ClosingDefinition = i1381[3]
  i1380.m_OpeningTagArray = i1381[4]
  i1380.m_ClosingTagArray = i1381[5]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1385[i + 0]) );
  }
  i1382.files = i1384
  i1382.componentToPrefabIds = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1389 = data
  i1388.path = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'unityObject')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1393[i + 0]) );
  }
  i1390.scriptsExecutionOrder = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1395[i + 0]) );
  }
  i1390.sortingLayers = i1394
  var i1397 = i1391[2]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1397[i + 0]) );
  }
  i1390.cullingLayers = i1396
  i1390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1391[3], i1390.timeSettings)
  i1390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1391[4], i1390.physicsSettings)
  i1390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1391[5], i1390.physics2DSettings)
  i1390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1391[6], i1390.qualitySettings)
  i1390.enableRealtimeShadows = !!i1391[7]
  i1390.enableAutoInstancing = !!i1391[8]
  i1390.enableStaticBatching = !!i1391[9]
  i1390.enableDynamicBatching = !!i1391[10]
  i1390.lightmapEncodingQuality = i1391[11]
  i1390.desiredColorSpace = i1391[12]
  var i1399 = i1391[13]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1390.allTags = i1398
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.value = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1407 = data
  i1406.id = i1407[0]
  i1406.name = i1407[1]
  i1406.value = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1413 = data
  i1412.fixedDeltaTime = i1413[0]
  i1412.maximumDeltaTime = i1413[1]
  i1412.timeScale = i1413[2]
  i1412.maximumParticleTimestep = i1413[3]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1415 = data
  i1414.gravity = new pc.Vec3( i1415[0], i1415[1], i1415[2] )
  i1414.defaultSolverIterations = i1415[3]
  i1414.bounceThreshold = i1415[4]
  i1414.autoSyncTransforms = !!i1415[5]
  i1414.autoSimulation = !!i1415[6]
  var i1417 = i1415[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'material')
  i1422.gravity = new pc.Vec2( i1423[2], i1423[3] )
  i1422.positionIterations = i1423[4]
  i1422.velocityIterations = i1423[5]
  i1422.velocityThreshold = i1423[6]
  i1422.maxLinearCorrection = i1423[7]
  i1422.maxAngularCorrection = i1423[8]
  i1422.maxTranslationSpeed = i1423[9]
  i1422.maxRotationSpeed = i1423[10]
  i1422.baumgarteScale = i1423[11]
  i1422.baumgarteTOIScale = i1423[12]
  i1422.timeToSleep = i1423[13]
  i1422.linearSleepTolerance = i1423[14]
  i1422.angularSleepTolerance = i1423[15]
  i1422.defaultContactOffset = i1423[16]
  i1422.autoSimulation = !!i1423[17]
  i1422.queriesHitTriggers = !!i1423[18]
  i1422.queriesStartInColliders = !!i1423[19]
  i1422.callbacksOnDisable = !!i1423[20]
  i1422.reuseCollisionCallbacks = !!i1423[21]
  i1422.autoSyncTransforms = !!i1423[22]
  var i1425 = i1423[23]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[i + 0]) );
  }
  i1430.qualityLevels = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.names = i1434
  i1430.shadows = i1431[2]
  i1430.anisotropicFiltering = i1431[3]
  i1430.antiAliasing = i1431[4]
  i1430.lodBias = i1431[5]
  i1430.shadowCascades = i1431[6]
  i1430.shadowDistance = i1431[7]
  i1430.shadowmaskMode = i1431[8]
  i1430.shadowProjection = i1431[9]
  i1430.shadowResolution = i1431[10]
  i1430.softParticles = !!i1431[11]
  i1430.softVegetation = !!i1431[12]
  i1430.activeColorSpace = i1431[13]
  i1430.desiredColorSpace = i1431[14]
  i1430.masterTextureLimit = i1431[15]
  i1430.maxQueuedFrames = i1431[16]
  i1430.particleRaycastBudget = i1431[17]
  i1430.pixelLightCount = i1431[18]
  i1430.realtimeReflectionProbes = !!i1431[19]
  i1430.shadowCascade2Split = i1431[20]
  i1430.shadowCascade4Split = new pc.Vec3( i1431[21], i1431[22], i1431[23] )
  i1430.streamingMipmapsActive = !!i1431[24]
  i1430.vSyncCount = i1431[25]
  i1430.asyncUploadBufferSize = i1431[26]
  i1430.asyncUploadTimeSlice = i1431[27]
  i1430.billboardsFaceCameraPosition = !!i1431[28]
  i1430.shadowNearPlaneOffset = i1431[29]
  i1430.streamingMipmapsMemoryBudget = i1431[30]
  i1430.maximumLODLevel = i1431[31]
  i1430.streamingMipmapsAddAllCameras = !!i1431[32]
  i1430.streamingMipmapsMaxLevelReduction = i1431[33]
  i1430.streamingMipmapsRenderersPerFrame = i1431[34]
  i1430.resolutionScalingFixedDPIFactor = i1431[35]
  i1430.streamingMipmapsMaxFileIORequests = i1431[36]
  i1430.currentQualityLevel = i1431[37]
  return i1430
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1439 = data
  i1438.m_GlyphIndex = i1439[0]
  i1438.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1439[1], i1438.m_GlyphValueRecord)
  return i1438
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1441 = data
  i1440.m_XCoordinate = i1441[0]
  i1440.m_YCoordinate = i1441[1]
  return i1440
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1443 = data
  i1442.m_XPositionAdjustment = i1443[0]
  i1442.m_YPositionAdjustment = i1443[1]
  return i1442
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1445 = data
  i1444.xPlacement = i1445[0]
  i1444.yPlacement = i1445[1]
  i1444.xAdvance = i1445[2]
  i1444.yAdvance = i1445[3]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1447 = data
  i1446.m_XPlacement = i1447[0]
  i1446.m_YPlacement = i1447[1]
  i1446.m_XAdvance = i1447[2]
  i1446.m_YAdvance = i1447[3]
  return i1446
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[83],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[93],"101":[93],"102":[93],"103":[93],"104":[93],"105":[93],"106":[29],"107":[108],"109":[110],"111":[110],"28":[13],"112":[60],"63":[113],"66":[20],"20":[113],"24":[20],"114":[20],"115":[113],"116":[113],"117":[113],"118":[13],"119":[16,13],"120":[108],"121":[16,13],"122":[25,108],"123":[108],"124":[108,125],"126":[86],"127":[93],"128":[129],"130":[131],"132":[5],"133":[29],"134":[135],"136":[56],"137":[28],"138":[13],"139":[108,13],"32":[13,16],"140":[13],"141":[16,13],"142":[108],"143":[16,13],"144":[13],"145":[146],"147":[146],"148":[146],"149":[13],"150":[13],"31":[28],"15":[16,13],"151":[13],"30":[28],"152":[13],"153":[13],"154":[13],"155":[13],"156":[13],"157":[13],"158":[13],"159":[13],"160":[13],"161":[16,13],"162":[13],"163":[13],"164":[13],"165":[13],"166":[16,13],"167":[13],"168":[56],"169":[56],"57":[56],"170":[56],"171":[29],"172":[29]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEditor.Animations.AnimatorController","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","PaperBox","UIManager","InputManager","HandTutManager","Fish","Item","Spartula","FishOnPan","InWaterItem","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Sink","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Pan","UnityEngine.CapsuleCollider","ItemClickable","TrashCan","CuttingBoard","ItemDragChildRotator","Knife","Ply_TimerEvent","Ply_BobEffect","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "29.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_Lv108";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4996";

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

Deserializers.buildID = "1931298e-8ba7-42df-93e8-1b47a2e28c5d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

