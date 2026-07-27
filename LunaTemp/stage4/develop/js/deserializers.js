var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointSpring' )
  var i711 = data
  i710.spring = i711[0]
  i710.damper = i711[1]
  i710.targetPosition = i711[2]
  return i710
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointMotor' )
  var i713 = data
  i712.m_TargetVelocity = i713[0]
  i712.m_Force = i713[1]
  i712.m_FreeSpin = i713[2]
  return i712
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointLimits' )
  var i715 = data
  i714.m_Min = i715[0]
  i714.m_Max = i715[1]
  i714.m_Bounciness = i715[2]
  i714.m_BounceMinVelocity = i715[3]
  i714.m_ContactDistance = i715[4]
  i714.minBounce = i715[5]
  i714.maxBounce = i715[6]
  return i714
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointDrive' )
  var i717 = data
  i716.m_PositionSpring = i717[0]
  i716.m_PositionDamper = i717[1]
  i716.m_MaximumForce = i717[2]
  i716.m_UseAcceleration = i717[3]
  return i716
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i719 = data
  i718.m_Spring = i719[0]
  i718.m_Damper = i719[1]
  return i718
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i721 = data
  i720.m_Limit = i721[0]
  i720.m_Bounciness = i721[1]
  i720.m_ContactDistance = i721[2]
  return i720
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i723 = data
  i722.m_ExtremumSlip = i723[0]
  i722.m_ExtremumValue = i723[1]
  i722.m_AsymptoteSlip = i723[2]
  i722.m_AsymptoteValue = i723[3]
  i722.m_Stiffness = i723[4]
  return i722
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i725 = data
  i724.m_LowerAngle = i725[0]
  i724.m_UpperAngle = i725[1]
  return i724
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i727 = data
  i726.m_MotorSpeed = i727[0]
  i726.m_MaximumMotorTorque = i727[1]
  return i726
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i729 = data
  i728.m_DampingRatio = i729[0]
  i728.m_Frequency = i729[1]
  i728.m_Angle = i729[2]
  return i728
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i731 = data
  i730.m_LowerTranslation = i731[0]
  i730.m_UpperTranslation = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i732 = root || new pc.UnityMaterial()
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'shader')
  i732.renderQueue = i733[3]
  i732.enableInstancing = !!i733[4]
  var i735 = i733[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i735[i + 0]) );
  }
  i732.floatParameters = i734
  var i737 = i733[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i737[i + 0]) );
  }
  i732.colorParameters = i736
  var i739 = i733[7]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i739[i + 0]) );
  }
  i732.vectorParameters = i738
  var i741 = i733[8]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i741[i + 0]) );
  }
  i732.textureParameters = i740
  var i743 = i733[9]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i743[i + 0]) );
  }
  i732.materialFlags = i742
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = new pc.Color(i751[1], i751[2], i751[3], i751[4])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = new pc.Vec4( i755[1], i755[2], i755[3], i755[4] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'value')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i763 = data
  i762.name = i763[0]
  i762.enabled = !!i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i765 = data
  i764.name = i765[0]
  i764.width = i765[1]
  i764.height = i765[2]
  i764.mipmapCount = i765[3]
  i764.anisoLevel = i765[4]
  i764.filterMode = i765[5]
  i764.hdr = !!i765[6]
  i764.format = i765[7]
  i764.wrapMode = i765[8]
  i764.alphaIsTransparency = !!i765[9]
  i764.alphaSource = i765[10]
  i764.graphicsFormat = i765[11]
  i764.sRGBTexture = !!i765[12]
  i764.desiredColorSpace = i765[13]
  i764.wrapU = i765[14]
  i764.wrapV = i765[15]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i767 = data
  i766.position = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.scale = new pc.Vec3( i767[3], i767[4], i767[5] )
  i766.rotation = new pc.Quat(i767[6], i767[7], i767[8], i767[9])
  return i766
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i768 = root || request.c( 'HeartEffect' )
  var i769 = data
  i768.defaultLifeTime = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'tf')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i771 = data
  i770.color = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  request.r(i771[4], i771[5], 0, i770, 'sprite')
  i770.flipX = !!i771[6]
  i770.flipY = !!i771[7]
  i770.drawMode = i771[8]
  i770.size = new pc.Vec2( i771[9], i771[10] )
  i770.tileMode = i771[11]
  i770.adaptiveModeThreshold = i771[12]
  i770.maskInteraction = i771[13]
  i770.spriteSortPoint = i771[14]
  i770.enabled = !!i771[15]
  request.r(i771[16], i771[17], 0, i770, 'sharedMaterial')
  var i773 = i771[18]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.sharedMaterials = i772
  i770.receiveShadows = !!i771[19]
  i770.shadowCastingMode = i771[20]
  i770.sortingLayerID = i771[21]
  i770.sortingOrder = i771[22]
  i770.lightmapIndex = i771[23]
  i770.lightmapSceneIndex = i771[24]
  i770.lightmapScaleOffset = new pc.Vec4( i771[25], i771[26], i771[27], i771[28] )
  i770.lightProbeUsage = i771[29]
  i770.reflectionProbeUsage = i771[30]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i777 = data
  i776.name = i777[0]
  i776.tagId = i777[1]
  i776.enabled = !!i777[2]
  i776.isStatic = !!i777[3]
  i776.layer = i777[4]
  return i776
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i778 = root || request.c( 'HeartBreakEffect' )
  var i779 = data
  i778.defaultLifeTime = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'tf')
  return i778
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i780 = root || request.c( 'BlinkEffect' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'tf')
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'mesh')
  i782.meshCount = i783[2]
  i782.activeVertexStreamsCount = i783[3]
  i782.alignment = i783[4]
  i782.renderMode = i783[5]
  i782.sortMode = i783[6]
  i782.lengthScale = i783[7]
  i782.velocityScale = i783[8]
  i782.cameraVelocityScale = i783[9]
  i782.normalDirection = i783[10]
  i782.sortingFudge = i783[11]
  i782.minParticleSize = i783[12]
  i782.maxParticleSize = i783[13]
  i782.pivot = new pc.Vec3( i783[14], i783[15], i783[16] )
  request.r(i783[17], i783[18], 0, i782, 'trailMaterial')
  i782.applyActiveColorSpace = !!i783[19]
  i782.enabled = !!i783[20]
  request.r(i783[21], i783[22], 0, i782, 'sharedMaterial')
  var i785 = i783[23]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sharedMaterials = i784
  i782.receiveShadows = !!i783[24]
  i782.shadowCastingMode = i783[25]
  i782.sortingLayerID = i783[26]
  i782.sortingOrder = i783[27]
  i782.lightmapIndex = i783[28]
  i782.lightmapSceneIndex = i783[29]
  i782.lightmapScaleOffset = new pc.Vec4( i783[30], i783[31], i783[32], i783[33] )
  i782.lightProbeUsage = i783[34]
  i782.reflectionProbeUsage = i783[35]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i787 = data
  i786.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i787[0], i786.main)
  i786.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i787[1], i786.colorBySpeed)
  i786.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i787[2], i786.colorOverLifetime)
  i786.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i787[3], i786.emission)
  i786.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i787[4], i786.rotationBySpeed)
  i786.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i787[5], i786.rotationOverLifetime)
  i786.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i787[6], i786.shape)
  i786.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i787[7], i786.sizeBySpeed)
  i786.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i787[8], i786.sizeOverLifetime)
  i786.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i787[9], i786.textureSheetAnimation)
  i786.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i787[10], i786.velocityOverLifetime)
  i786.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i787[11], i786.noise)
  i786.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i787[12], i786.inheritVelocity)
  i786.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i787[13], i786.forceOverLifetime)
  i786.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i787[14], i786.limitVelocityOverLifetime)
  i786.useAutoRandomSeed = !!i787[15]
  i786.randomSeed = i787[16]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemMain()
  var i789 = data
  i788.duration = i789[0]
  i788.loop = !!i789[1]
  i788.prewarm = !!i789[2]
  i788.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.startDelay)
  i788.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.startLifetime)
  i788.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.startSpeed)
  i788.startSize3D = !!i789[6]
  i788.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.startSizeX)
  i788.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.startSizeY)
  i788.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.startSizeZ)
  i788.startRotation3D = !!i789[10]
  i788.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.startRotationX)
  i788.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.startRotationY)
  i788.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[13], i788.startRotationZ)
  i788.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[14], i788.startColor)
  i788.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[15], i788.gravityModifier)
  i788.simulationSpace = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'customSimulationSpace')
  i788.simulationSpeed = i789[19]
  i788.useUnscaledTime = !!i789[20]
  i788.scalingMode = i789[21]
  i788.playOnAwake = !!i789[22]
  i788.maxParticles = i789[23]
  i788.emitterVelocityMode = i789[24]
  i788.stopAction = i789[25]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i790 = root || new pc.MinMaxCurve()
  var i791 = data
  i790.mode = i791[0]
  i790.curveMin = new pc.AnimationCurve( { keys_flow: i791[1] } )
  i790.curveMax = new pc.AnimationCurve( { keys_flow: i791[2] } )
  i790.curveMultiplier = i791[3]
  i790.constantMin = i791[4]
  i790.constantMax = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i792 = root || new pc.MinMaxGradient()
  var i793 = data
  i792.mode = i793[0]
  i792.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[1], i792.gradientMin)
  i792.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[2], i792.gradientMax)
  i792.colorMin = new pc.Color(i793[3], i793[4], i793[5], i793[6])
  i792.colorMax = new pc.Color(i793[7], i793[8], i793[9], i793[10])
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i795 = data
  i794.mode = i795[0]
  var i797 = i795[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i797[i + 0]) );
  }
  i794.colorKeys = i796
  var i799 = i795[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i799[i + 0]) );
  }
  i794.alphaKeys = i798
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemColorBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i801[1], i800.color)
  i800.range = new pc.Vec2( i801[2], i801[3] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i805 = data
  i804.color = new pc.Color(i805[0], i805[1], i805[2], i805[3])
  i804.time = i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i809 = data
  i808.alpha = i809[0]
  i808.time = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemColorOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i811[1], i810.color)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemEmitter()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.rateOverTime)
  i812.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.rateOverDistance)
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i815[i + 0]) );
  }
  i812.bursts = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemBurst()
  var i819 = data
  i818.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[0], i818.count)
  i818.cycleCount = i819[1]
  i818.minCount = i819[2]
  i818.maxCount = i819[3]
  i818.repeatInterval = i819[4]
  i818.time = i819[5]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemRotationBySpeed()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  i820.range = new pc.Vec2( i821[5], i821[6] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemRotationOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemShape()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.shapeType = i825[1]
  i824.randomDirectionAmount = i825[2]
  i824.sphericalDirectionAmount = i825[3]
  i824.randomPositionAmount = i825[4]
  i824.alignToDirection = !!i825[5]
  i824.radius = i825[6]
  i824.radiusMode = i825[7]
  i824.radiusSpread = i825[8]
  i824.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[9], i824.radiusSpeed)
  i824.radiusThickness = i825[10]
  i824.angle = i825[11]
  i824.length = i825[12]
  i824.boxThickness = new pc.Vec3( i825[13], i825[14], i825[15] )
  i824.meshShapeType = i825[16]
  request.r(i825[17], i825[18], 0, i824, 'mesh')
  request.r(i825[19], i825[20], 0, i824, 'meshRenderer')
  request.r(i825[21], i825[22], 0, i824, 'skinnedMeshRenderer')
  i824.useMeshMaterialIndex = !!i825[23]
  i824.meshMaterialIndex = i825[24]
  i824.useMeshColors = !!i825[25]
  i824.normalOffset = i825[26]
  i824.arc = i825[27]
  i824.arcMode = i825[28]
  i824.arcSpread = i825[29]
  i824.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[30], i824.arcSpeed)
  i824.donutRadius = i825[31]
  i824.position = new pc.Vec3( i825[32], i825[33], i825[34] )
  i824.rotation = new pc.Vec3( i825[35], i825[36], i825[37] )
  i824.scale = new pc.Vec3( i825[38], i825[39], i825[40] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemSizeBySpeed()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  i826.range = new pc.Vec2( i827[5], i827[6] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemSizeOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.animation = i831[2]
  i830.numTilesX = i831[3]
  i830.numTilesY = i831[4]
  i830.useRandomRow = !!i831[5]
  i830.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[6], i830.frameOverTime)
  i830.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[7], i830.startFrame)
  i830.cycleCount = i831[8]
  i830.rowIndex = i831[9]
  i830.flipU = i831[10]
  i830.flipV = i831[11]
  i830.spriteCount = i831[12]
  var i833 = i831[13]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sprites = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.radial)
  i836.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[5], i836.speedModifier)
  i836.space = i837[6]
  i836.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.orbitalX)
  i836.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[8], i836.orbitalY)
  i836.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[9], i836.orbitalZ)
  i836.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[10], i836.orbitalOffsetX)
  i836.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.orbitalOffsetY)
  i836.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[12], i836.orbitalOffsetZ)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemNoise()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.separateAxes = !!i839[1]
  i838.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.strengthX)
  i838.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.strengthY)
  i838.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[4], i838.strengthZ)
  i838.frequency = i839[5]
  i838.damping = !!i839[6]
  i838.octaveCount = i839[7]
  i838.octaveMultiplier = i839[8]
  i838.octaveScale = i839[9]
  i838.quality = i839[10]
  i838.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[11], i838.scrollSpeed)
  i838.scrollSpeedMultiplier = i839[12]
  i838.remapEnabled = !!i839[13]
  i838.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[14], i838.remapX)
  i838.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[15], i838.remapY)
  i838.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[16], i838.remapZ)
  i838.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[17], i838.positionAmount)
  i838.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[18], i838.rotationAmount)
  i838.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[19], i838.sizeAmount)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemInheritVelocity()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.mode = i841[1]
  i840.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.curve)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemForceOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.space = i843[4]
  i842.randomized = !!i843[5]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.limit)
  i844.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.limitX)
  i844.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.limitY)
  i844.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[4], i844.limitZ)
  i844.dampen = i845[5]
  i844.separateAxes = !!i845[6]
  i844.space = i845[7]
  i844.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[8], i844.drag)
  i844.multiplyDragByParticleSize = !!i845[9]
  i844.multiplyDragByParticleVelocity = !!i845[10]
  return i844
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i846 = root || request.c( 'StarExploreFX' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'tf')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i849 = data
  i848.pivot = new pc.Vec2( i849[0], i849[1] )
  i848.anchorMin = new pc.Vec2( i849[2], i849[3] )
  i848.anchorMax = new pc.Vec2( i849[4], i849[5] )
  i848.sizeDelta = new pc.Vec2( i849[6], i849[7] )
  i848.anchoredPosition3D = new pc.Vec3( i849[8], i849[9], i849[10] )
  i848.rotation = new pc.Quat(i849[11], i849[12], i849[13], i849[14])
  i848.scale = new pc.Vec3( i849[15], i849[16], i849[17] )
  return i848
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i850 = root || request.c( 'ClockTimer' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'fillImage')
  request.r(i851[2], i851[3], 0, i850, 'tf')
  i850.spawnZoomDuration = i851[4]
  i850.despawnZoomDuration = i851[5]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i853 = data
  i852.cullTransparentMesh = !!i853[0]
  return i852
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Image' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_Sprite')
  i854.m_Type = i855[2]
  i854.m_PreserveAspect = !!i855[3]
  i854.m_FillCenter = !!i855[4]
  i854.m_FillMethod = i855[5]
  i854.m_FillAmount = i855[6]
  i854.m_FillClockwise = !!i855[7]
  i854.m_FillOrigin = i855[8]
  i854.m_UseSpriteMesh = !!i855[9]
  i854.m_PixelsPerUnitMultiplier = i855[10]
  request.r(i855[11], i855[12], 0, i854, 'm_Material')
  i854.m_Maskable = !!i855[13]
  i854.m_Color = new pc.Color(i855[14], i855[15], i855[16], i855[17])
  i854.m_RaycastTarget = !!i855[18]
  i854.m_RaycastPadding = new pc.Vec4( i855[19], i855[20], i855[21], i855[22] )
  return i854
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i856 = root || request.c( 'WaterSplash' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'tf')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i859 = data
  i858.center = new pc.Vec3( i859[0], i859[1], i859[2] )
  i858.radius = i859[3]
  i858.enabled = !!i859[4]
  i858.isTrigger = !!i859[5]
  request.r(i859[6], i859[7], 0, i858, 'material')
  return i858
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i860 = root || request.c( 'ItemDraggable' )
  var i861 = data
  i860.isDraggable = !!i861[0]
  request.r(i861[1], i861[2], 0, i860, 'returnTransform')
  i860.setParentToReturnTransform = !!i861[3]
  i860.returnToStartOnDragFailed = !!i861[4]
  i860.returnToExactReturnTransformPosition = !!i861[5]
  i860.cacheStartPosWhenStart = !!i861[6]
  i860.targetItemType = i861[7]
  request.r(i861[8], i861[9], 0, i860, 'item')
  i860.checkState = !!i861[10]
  request.r(i861[11], i861[12], 0, i860, 'shadowObject')
  i860.playReturnToStartFinishSound = !!i861[13]
  i860.returnToStartFinishFxType = i861[14]
  i860.spawnBreakHeartOnDropFail = !!i861[15]
  i860.playBeginDragSound = !!i861[16]
  i860.beginDragFxType = i861[17]
  i860.liftOffset = i861[18]
  i860.dragScaleMultiplier = i861[19]
  i860.dragScaleDuration = i861[20]
  i860.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i861[21], i860.onBeginDrag)
  i860.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i861[22], i860.onDropSuccess)
  i860.onDropFail = request.d('UnityEngine.Events.UnityEvent', i861[23], i860.onDropFail)
  i860.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i861[24], i860.onReturnToStartComplete)
  return i860
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i863 = data
  i862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i863[0], i862.m_PersistentCalls)
  return i862
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('UnityEngine.Events.PersistentCall', i867[i + 0]));
  }
  i864.m_Calls = i866
  return i864
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_Target')
  i870.m_TargetAssemblyTypeName = i871[2]
  i870.m_MethodName = i871[3]
  i870.m_Mode = i871[4]
  i870.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i871[5], i870.m_Arguments)
  i870.m_CallState = i871[6]
  return i870
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_ObjectArgument')
  i872.m_ObjectArgumentAssemblyTypeName = i873[2]
  i872.m_IntArgument = i873[3]
  i872.m_FloatArgument = i873[4]
  i872.m_StringArgument = i873[5]
  i872.m_BoolArgument = !!i873[6]
  return i872
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i874 = root || request.c( 'ItemMoveToTarget' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'defaultTarget')
  i874.duration = i875[2]
  i874.useAnimationCurve = !!i875[3]
  i874.moveCurve = new pc.AnimationCurve( { keys_flow: i875[4] } )
  i874.easeType = i875[5]
  i874.moveType = i875[6]
  i874.jumpPower = i875[7]
  i874.numJumps = i875[8]
  i874.rotate360DuringJump = !!i875[9]
  i874.flipRotate = !!i875[10]
  i874.angleRotate = i875[11]
  i874.scaleOnMove = !!i875[12]
  i874.endScaleMultiplier = i875[13]
  i874.setParentToTarget = !!i875[14]
  i874.onComplete = request.d('UnityEngine.Events.UnityEvent', i875[15], i874.onComplete)
  i874.lockInputWhileMoving = !!i875[16]
  i874.resetParentBeforeMove = !!i875[17]
  return i874
}

Deserializers["Paper"] = function (request, data, root) {
  var i876 = root || request.c( 'Paper' )
  var i877 = data
  i876.isUse = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'paper')
  request.r(i877[3], i877[4], 0, i876, 'paperTrash')
  request.r(i877[5], i877[6], 0, i876, 'itemDragRaycastTarget')
  request.r(i877[7], i877[8], 0, i876, 'curentCollider')
  i876.isDone = !!i877[9]
  i876.onProcess = !!i877[10]
  i876.requireMatchingTargetTypeForHandTut = !!i877[11]
  request.r(i877[12], i877[13], 0, i876, 'itemDraggable')
  request.r(i877[14], i877[15], 0, i876, 'itemClickable')
  request.r(i877[16], i877[17], 0, i876, 'itemStirring')
  request.r(i877[18], i877[19], 0, i876, 'itemKnifeSpriteMaskCutter')
  request.r(i877[20], i877[21], 0, i876, 'itemSpriteMaskPainter')
  request.r(i877[22], i877[23], 0, i876, 'itemDragSpriteMaskPainter')
  request.r(i877[24], i877[25], 0, i876, 'itemMoveToTarget')
  request.r(i877[26], i877[27], 0, i876, 'animator')
  i876.itemType = i877[28]
  request.r(i877[29], i877[30], 0, i876, 'spriteRenderer')
  i876.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i877[31], i876.onKnifeIn)
  request.r(i877[32], i877[33], 0, i876, 'knifePos')
  i876.heartEffectScale = i877[34]
  i876.breakHeartEffectScale = i877[35]
  i876.blinkEffectScale = i877[36]
  i876.mergeEffectScale = i877[37]
  i876.playMoveToTargetFinishSound = !!i877[38]
  i876.moveToTargetFinishFxType = i877[39]
  i876.fxSpawnZPos = i877[40]
  request.r(i877[41], i877[42], 0, i876, 'tf')
  return i876
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i878 = root || request.c( 'ItemDragRaycastTarget' )
  var i879 = data
  i878.targetToFind = i879[0]
  i878.targetItemTypeWhenHit = i879[1]
  i878.targetItemTypeOnDropFail = i879[2]
  request.r(i879[3], i879[4], 0, i878, 'raycastPoint')
  i878.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i879[5] )
  i878.rayDistance = i879[6]
  i878.updateMoveDefaultTarget = !!i879[7]
  i878.invokeOnlyWhenTargetChanged = !!i879[8]
  i878.targetChangeEnabled = !!i879[9]
  i878.restoreTargetOnDropFail = !!i879[10]
  i878.resetCurrentTargetOnNoHit = !!i879[11]
  i878.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i879[12], i878.onTargetFound)
  i878.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i879[13], i878.onTargetFoundWithItem)
  return i878
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i880 = root || request.c( 'ItemRaycastTargetEvent' )
  var i881 = data
  i880.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i881[0], i880.m_PersistentCalls)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'animatorController')
  request.r(i883[2], i883[3], 0, i882, 'avatar')
  i882.updateMode = i883[4]
  i882.hasTransformHierarchy = !!i883[5]
  i882.applyRootMotion = !!i883[6]
  var i885 = i883[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.humanBones = i884
  i882.enabled = !!i883[8]
  return i882
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i888 = root || request.c( 'ItemSound' )
  var i889 = data
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i891 = data
  i890.name = i891[0]
  i890.index = i891[1]
  i890.startup = !!i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i893 = data
  i892.planeDistance = i893[0]
  i892.referencePixelsPerUnit = i893[1]
  i892.isFallbackOverlay = !!i893[2]
  i892.renderMode = i893[3]
  i892.renderOrder = i893[4]
  i892.sortingLayerName = i893[5]
  i892.sortingOrder = i893[6]
  i892.scaleFactor = i893[7]
  request.r(i893[8], i893[9], 0, i892, 'worldCamera')
  i892.overrideSorting = !!i893[10]
  i892.pixelPerfect = !!i893[11]
  i892.targetDisplay = i893[12]
  i892.overridePixelPerfect = !!i893[13]
  i892.enabled = !!i893[14]
  return i892
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i895 = data
  i894.m_UiScaleMode = i895[0]
  i894.m_ReferencePixelsPerUnit = i895[1]
  i894.m_ScaleFactor = i895[2]
  i894.m_ReferenceResolution = new pc.Vec2( i895[3], i895[4] )
  i894.m_ScreenMatchMode = i895[5]
  i894.m_MatchWidthOrHeight = i895[6]
  i894.m_PhysicalUnit = i895[7]
  i894.m_FallbackScreenDPI = i895[8]
  i894.m_DefaultSpriteDPI = i895[9]
  i894.m_DynamicPixelsPerUnit = i895[10]
  i894.m_PresetInfoIsWorld = !!i895[11]
  return i894
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i897 = data
  i896.m_IgnoreReversedGraphics = !!i897[0]
  i896.m_BlockingObjects = i897[1]
  i896.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i897[2] )
  return i896
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i899 = data
  i898.m_hasFontAssetChanged = !!i899[0]
  request.r(i899[1], i899[2], 0, i898, 'm_baseMaterial')
  i898.m_maskOffset = new pc.Vec4( i899[3], i899[4], i899[5], i899[6] )
  i898.m_text = i899[7]
  i898.m_isRightToLeft = !!i899[8]
  request.r(i899[9], i899[10], 0, i898, 'm_fontAsset')
  request.r(i899[11], i899[12], 0, i898, 'm_sharedMaterial')
  var i901 = i899[13]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i898.m_fontSharedMaterials = i900
  request.r(i899[14], i899[15], 0, i898, 'm_fontMaterial')
  var i903 = i899[16]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i898.m_fontMaterials = i902
  i898.m_fontColor32 = UnityEngine.Color32.ConstructColor(i899[17], i899[18], i899[19], i899[20])
  i898.m_fontColor = new pc.Color(i899[21], i899[22], i899[23], i899[24])
  i898.m_enableVertexGradient = !!i899[25]
  i898.m_colorMode = i899[26]
  i898.m_fontColorGradient = request.d('TMPro.VertexGradient', i899[27], i898.m_fontColorGradient)
  request.r(i899[28], i899[29], 0, i898, 'm_fontColorGradientPreset')
  request.r(i899[30], i899[31], 0, i898, 'm_spriteAsset')
  i898.m_tintAllSprites = !!i899[32]
  request.r(i899[33], i899[34], 0, i898, 'm_StyleSheet')
  i898.m_TextStyleHashCode = i899[35]
  i898.m_overrideHtmlColors = !!i899[36]
  i898.m_faceColor = UnityEngine.Color32.ConstructColor(i899[37], i899[38], i899[39], i899[40])
  i898.m_fontSize = i899[41]
  i898.m_fontSizeBase = i899[42]
  i898.m_fontWeight = i899[43]
  i898.m_enableAutoSizing = !!i899[44]
  i898.m_fontSizeMin = i899[45]
  i898.m_fontSizeMax = i899[46]
  i898.m_fontStyle = i899[47]
  i898.m_HorizontalAlignment = i899[48]
  i898.m_VerticalAlignment = i899[49]
  i898.m_textAlignment = i899[50]
  i898.m_characterSpacing = i899[51]
  i898.m_wordSpacing = i899[52]
  i898.m_lineSpacing = i899[53]
  i898.m_lineSpacingMax = i899[54]
  i898.m_paragraphSpacing = i899[55]
  i898.m_charWidthMaxAdj = i899[56]
  i898.m_TextWrappingMode = i899[57]
  i898.m_wordWrappingRatios = i899[58]
  i898.m_overflowMode = i899[59]
  request.r(i899[60], i899[61], 0, i898, 'm_linkedTextComponent')
  request.r(i899[62], i899[63], 0, i898, 'parentLinkedComponent')
  i898.m_enableKerning = !!i899[64]
  var i905 = i899[65]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(i905[i + 0]);
  }
  i898.m_ActiveFontFeatures = i904
  i898.m_enableExtraPadding = !!i899[66]
  i898.checkPaddingRequired = !!i899[67]
  i898.m_isRichText = !!i899[68]
  i898.m_parseCtrlCharacters = !!i899[69]
  i898.m_isOrthographic = !!i899[70]
  i898.m_isCullingEnabled = !!i899[71]
  i898.m_horizontalMapping = i899[72]
  i898.m_verticalMapping = i899[73]
  i898.m_uvLineOffset = i899[74]
  i898.m_geometrySortingOrder = i899[75]
  i898.m_IsTextObjectScaleStatic = !!i899[76]
  i898.m_VertexBufferAutoSizeReduction = !!i899[77]
  i898.m_useMaxVisibleDescender = !!i899[78]
  i898.m_pageToDisplay = i899[79]
  i898.m_margin = new pc.Vec4( i899[80], i899[81], i899[82], i899[83] )
  i898.m_isUsingLegacyAnimationComponent = !!i899[84]
  i898.m_isVolumetricText = !!i899[85]
  request.r(i899[86], i899[87], 0, i898, 'm_Material')
  i898.m_EmojiFallbackSupport = !!i899[88]
  i898.m_Maskable = !!i899[89]
  i898.m_Color = new pc.Color(i899[90], i899[91], i899[92], i899[93])
  i898.m_RaycastTarget = !!i899[94]
  i898.m_RaycastPadding = new pc.Vec4( i899[95], i899[96], i899[97], i899[98] )
  return i898
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.VertexGradient' )
  var i907 = data
  i906.topLeft = new pc.Color(i907[0], i907[1], i907[2], i907[3])
  i906.topRight = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.bottomLeft = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.bottomRight = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  return i906
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Button' )
  var i911 = data
  i910.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i911[0], i910.m_OnClick)
  i910.m_Navigation = request.d('UnityEngine.UI.Navigation', i911[1], i910.m_Navigation)
  i910.m_Transition = i911[2]
  i910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i911[3], i910.m_Colors)
  i910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i911[4], i910.m_SpriteState)
  i910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i911[5], i910.m_AnimationTriggers)
  i910.m_Interactable = !!i911[6]
  request.r(i911[7], i911[8], 0, i910, 'm_TargetGraphic')
  return i910
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i913 = data
  i912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i913[0], i912.m_PersistentCalls)
  return i912
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i915 = data
  i914.m_Mode = i915[0]
  i914.m_WrapAround = !!i915[1]
  request.r(i915[2], i915[3], 0, i914, 'm_SelectOnUp')
  request.r(i915[4], i915[5], 0, i914, 'm_SelectOnDown')
  request.r(i915[6], i915[7], 0, i914, 'm_SelectOnLeft')
  request.r(i915[8], i915[9], 0, i914, 'm_SelectOnRight')
  return i914
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i917 = data
  i916.m_NormalColor = new pc.Color(i917[0], i917[1], i917[2], i917[3])
  i916.m_HighlightedColor = new pc.Color(i917[4], i917[5], i917[6], i917[7])
  i916.m_PressedColor = new pc.Color(i917[8], i917[9], i917[10], i917[11])
  i916.m_SelectedColor = new pc.Color(i917[12], i917[13], i917[14], i917[15])
  i916.m_DisabledColor = new pc.Color(i917[16], i917[17], i917[18], i917[19])
  i916.m_ColorMultiplier = i917[20]
  i916.m_FadeDuration = i917[21]
  return i916
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_HighlightedSprite')
  request.r(i919[2], i919[3], 0, i918, 'm_PressedSprite')
  request.r(i919[4], i919[5], 0, i918, 'm_SelectedSprite')
  request.r(i919[6], i919[7], 0, i918, 'm_DisabledSprite')
  return i918
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i921 = data
  i920.m_NormalTrigger = i921[0]
  i920.m_HighlightedTrigger = i921[1]
  i920.m_PressedTrigger = i921[2]
  i920.m_SelectedTrigger = i921[3]
  i920.m_DisabledTrigger = i921[4]
  return i920
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Slider' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'm_FillRect')
  request.r(i923[2], i923[3], 0, i922, 'm_HandleRect')
  i922.m_Direction = i923[4]
  i922.m_MinValue = i923[5]
  i922.m_MaxValue = i923[6]
  i922.m_WholeNumbers = !!i923[7]
  i922.m_Value = i923[8]
  i922.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i923[9], i922.m_OnValueChanged)
  i922.m_Navigation = request.d('UnityEngine.UI.Navigation', i923[10], i922.m_Navigation)
  i922.m_Transition = i923[11]
  i922.m_Colors = request.d('UnityEngine.UI.ColorBlock', i923[12], i922.m_Colors)
  i922.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i923[13], i922.m_SpriteState)
  i922.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i923[14], i922.m_AnimationTriggers)
  i922.m_Interactable = !!i923[15]
  request.r(i923[16], i923[17], 0, i922, 'm_TargetGraphic')
  return i922
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i925 = data
  i924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i925[0], i924.m_PersistentCalls)
  return i924
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i926 = root || request.c( 'ProgressSlider' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'progressSlider')
  i926.maxProgressItems = i927[2]
  i926.startProgressItems = i927[3]
  request.r(i927[4], i927[5], 0, i926, 'progressText')
  return i926
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i928 = root || request.c( 'Ply_Pool' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Ply_Pool+PoolAmount', i931[i + 0]) );
  }
  i928.poolAmounts = i930
  request.r(i929[1], i929[2], 0, i928, 'poolHolder')
  return i928
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i934 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i935 = data
  i934.type = i935[0]
  i934.amount = i935[1]
  request.r(i935[2], i935[3], 0, i934, 'gameUnit')
  return i934
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i936 = root || request.c( 'Ply_SoundManager' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Ply_SoundManager+FxAudio', i939[i + 0]) );
  }
  i936.fxAudios = i938
  request.r(i937[1], i937[2], 0, i936, 'sound')
  return i936
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i942 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i943 = data
  i942.fxType = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'audioClip')
  i942.volume = i943[3]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'clip')
  request.r(i945[2], i945[3], 0, i944, 'outputAudioMixerGroup')
  i944.playOnAwake = !!i945[4]
  i944.loop = !!i945[5]
  i944.time = i945[6]
  i944.volume = i945[7]
  i944.pitch = i945[8]
  i944.enabled = !!i945[9]
  return i944
}

Deserializers["GameManager"] = function (request, data, root) {
  var i946 = root || request.c( 'GameManager' )
  var i947 = data
  i946.isPlaying = !!i947[0]
  i946.isTutorial = !!i947[1]
  i946.isGotoStore = !!i947[2]
  i946.isLoseGame = !!i947[3]
  i946.countMove = i947[4]
  i946.currentLayer = i947[5]
  request.r(i947[6], i947[7], 0, i946, 'trashCan')
  request.r(i947[8], i947[9], 0, i946, 'clockTimerPrefab')
  request.r(i947[10], i947[11], 0, i946, 'paperBox')
  return i946
}

Deserializers["UIManager"] = function (request, data, root) {
  var i948 = root || request.c( 'UIManager' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'winUI')
  request.r(i949[2], i949[3], 0, i948, 'loseUI')
  request.r(i949[4], i949[5], 0, i948, 'tutorial')
  request.r(i949[6], i949[7], 0, i948, 'verticalUI')
  request.r(i949[8], i949[9], 0, i948, 'horizontalUI')
  request.r(i949[10], i949[11], 0, i948, 'downloadBtn')
  request.r(i949[12], i949[13], 0, i948, 'horizontalDownloadBtn')
  request.r(i949[14], i949[15], 0, i948, 'textAnim')
  i948.isGoogleBuild = !!i949[16]
  i948.screenWidth = i949[17]
  i948.screenHeight = i949[18]
  i948.scaleHeightOnWidth = i949[19]
  i948.isVertical = !!i949[20]
  i948.isScreenVertical = !!i949[21]
  request.r(i949[22], i949[23], 0, i948, 'cam')
  i948.verticalUIHeightOnWidthRatio = i949[24]
  i948.scaleCameraOnValidate = !!i949[25]
  i948.screenVerticalHeightOnWidthRatio = i949[26]
  i948.useContinuousScaling = !!i949[27]
  i948.baseOrthographicSize = i949[28]
  i948.baseAspect = i949[29]
  i948.landscapeSizeRatio = i949[30]
  i948.defaultPortraitSizeRatio = i949[31]
  var i951 = i949[32]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('ScreenScaleStep', i951[i + 0]));
  }
  i948.discreteScaleSteps = i950
  i948.usePerspectiveCamera = !!i949[33]
  request.r(i949[34], i949[35], 0, i948, 'perspectiveFocus')
  i948.perspectiveFocusDistance = i949[36]
  i948.perspectivePadding = i949[37]
  i948.fitRendererBounds = !!i949[38]
  request.r(i949[39], i949[40], 0, i948, 'boundsRoot')
  var i953 = i949[41]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i948.boundsRenderers = i952
  return i948
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i956 = root || request.c( 'ScreenScaleStep' )
  var i957 = data
  i956.heightOnWidthRatio = i957[0]
  i956.orthographicSize = i957[1]
  return i956
}

Deserializers["InputManager"] = function (request, data, root) {
  var i960 = root || request.c( 'InputManager' )
  var i961 = data
  i960.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i961[0] )
  i960.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i961[1] )
  i960.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i961[2] )
  i960.isDragging = !!i961[3]
  return i960
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i962 = root || request.c( 'HandTutManager' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.items = i964
  request.r(i963[1], i963[2], 0, i962, 'knife')
  request.r(i963[3], i963[4], 0, i962, 'knife2')
  request.r(i963[5], i963[6], 0, i962, 'handTutObject')
  request.r(i963[7], i963[8], 0, i962, 'tapToCookObject')
  request.r(i963[9], i963[10], 0, i962, 'oilItem')
  request.r(i963[11], i963[12], 0, i962, 'stoveToggleEvent')
  request.r(i963[13], i963[14], 0, i962, 'waterToggleEvent')
  request.r(i963[15], i963[16], 0, i962, 'sinkBlock')
  var i967 = i963[17]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.itemsInWater = i966
  i962.noDelayItemCount = i963[18]
  i962.noDelayInList = !!i963[19]
  i962.breakHeartNoDelayThreshold = i963[20]
  i962.shortIdleDelay = i963[21]
  i962.maxHandTutShowCount = i963[22]
  i962.showSinkWaterTutorialOnStart = !!i963[23]
  i962.waitForBowlIntro = !!i963[24]
  i962.idleDelay = i963[25]
  i962.firstHandTutDelay = i963[26]
  i962.phaseHandTutDelay = i963[27]
  i962.moveDuration = i963[28]
  i962.dragFadeDuration = i963[29]
  i962.clickScaleDuration = i963[30]
  i962.waitAtEndDuration = i963[31]
  i962.handZPosition = i963[32]
  i962.clickScaleMultiplier = i963[33]
  i962.moveEase = i963[34]
  i962.currentDelayHandtut = i963[35]
  i962.isBreakingHeartNoDelay = !!i963[36]
  i962.tutoredItemCount = i963[37]
  return i962
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i972 = root || request.c( 'PhaseManager' )
  var i973 = data
  var i975 = i973[0]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('PhaseData', i975[i + 0]));
  }
  i972.phases = i974
  i972.transitionType = i973[1]
  i972.transitionDuration = i973[2]
  i972.delayBeforeNextPhase = i973[3]
  i972.offScreenLeftX = i973[4]
  i972.offScreenRightX = i973[5]
  i972.offScreenBottomY = i973[6]
  i972.offScreenTopY = i973[7]
  i972.centerScreenX = i973[8]
  request.r(i973[9], i973[10], 0, i972, 'phaseTransitionObject')
  i972.phaseTransitionObjectDuration = i973[11]
  i972.currentPhaseIndex = i973[12]
  i972.currentStepCount = i973[13]
  i972.isECPopup = !!i973[14]
  return i972
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i978 = root || request.c( 'PhaseData' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'phaseObject')
  i978.totalSteps = i979[2]
  i978.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i979[3], i978.onPhaseReady)
  return i978
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i980 = root || request.c( 'ItemTypeDoneManager' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i983[i + 0]));
  }
  i980.itemTypeGroups = i982
  return i980
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i987 = data
  i986.itemType = i987[0]
  var i989 = i987[1]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.items = i988
  return i986
}

Deserializers["OvenManager"] = function (request, data, root) {
  var i990 = root || request.c( 'OvenManager' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.foodOnPlates = i992
  var i995 = i991[1]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i990.ovenSlots = i994
  var i997 = i991[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('FoodOnOvenType', i997[i + 0]) );
  }
  i990.foodOnOvenTypes = i996
  i990.foodJumpCountMax = i991[3]
  i990.activeFryingSounds = i991[4]
  return i990
}

Deserializers["FoodOnOvenType"] = function (request, data, root) {
  var i1004 = root || request.c( 'FoodOnOvenType' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'food')
  var i1007 = i1005[2]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.foodOnOvens = i1006
  i1004.itemType = i1005[3]
  i1004.delayTimeAppear = i1005[4]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1011 = data
  i1010.aspect = i1011[0]
  i1010.orthographic = !!i1011[1]
  i1010.orthographicSize = i1011[2]
  i1010.backgroundColor = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.nearClipPlane = i1011[7]
  i1010.farClipPlane = i1011[8]
  i1010.fieldOfView = i1011[9]
  i1010.depth = i1011[10]
  i1010.clearFlags = i1011[11]
  i1010.cullingMask = i1011[12]
  i1010.rect = i1011[13]
  request.r(i1011[14], i1011[15], 0, i1010, 'targetTexture')
  i1010.usePhysicalProperties = !!i1011[16]
  i1010.focalLength = i1011[17]
  i1010.sensorSize = new pc.Vec2( i1011[18], i1011[19] )
  i1010.lensShift = new pc.Vec2( i1011[20], i1011[21] )
  i1010.gateFit = i1011[22]
  i1010.commandBufferCount = i1011[23]
  i1010.cameraType = i1011[24]
  i1010.enabled = !!i1011[25]
  return i1010
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_FirstSelected')
  i1012.m_sendNavigationEvents = !!i1013[2]
  i1012.m_DragThreshold = i1013[3]
  return i1012
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1015 = data
  i1014.m_HorizontalAxis = i1015[0]
  i1014.m_VerticalAxis = i1015[1]
  i1014.m_SubmitButton = i1015[2]
  i1014.m_CancelButton = i1015[3]
  i1014.m_InputActionsPerSecond = i1015[4]
  i1014.m_RepeatDelay = i1015[5]
  i1014.m_ForceModuleActive = !!i1015[6]
  i1014.m_SendPointerHoverToParent = !!i1015[7]
  return i1014
}

Deserializers["FoodOnPlate"] = function (request, data, root) {
  var i1016 = root || request.c( 'FoodOnPlate' )
  var i1017 = data
  i1016.isDone = !!i1017[0]
  i1016.onProcess = !!i1017[1]
  i1016.requireMatchingTargetTypeForHandTut = !!i1017[2]
  request.r(i1017[3], i1017[4], 0, i1016, 'itemDraggable')
  request.r(i1017[5], i1017[6], 0, i1016, 'itemClickable')
  request.r(i1017[7], i1017[8], 0, i1016, 'itemStirring')
  request.r(i1017[9], i1017[10], 0, i1016, 'itemKnifeSpriteMaskCutter')
  request.r(i1017[11], i1017[12], 0, i1016, 'itemSpriteMaskPainter')
  request.r(i1017[13], i1017[14], 0, i1016, 'itemDragSpriteMaskPainter')
  request.r(i1017[15], i1017[16], 0, i1016, 'itemMoveToTarget')
  request.r(i1017[17], i1017[18], 0, i1016, 'animator')
  i1016.itemType = i1017[19]
  request.r(i1017[20], i1017[21], 0, i1016, 'spriteRenderer')
  i1016.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1017[22], i1016.onKnifeIn)
  request.r(i1017[23], i1017[24], 0, i1016, 'knifePos')
  i1016.heartEffectScale = i1017[25]
  i1016.breakHeartEffectScale = i1017[26]
  i1016.blinkEffectScale = i1017[27]
  i1016.mergeEffectScale = i1017[28]
  i1016.playMoveToTargetFinishSound = !!i1017[29]
  i1016.moveToTargetFinishFxType = i1017[30]
  i1016.fxSpawnZPos = i1017[31]
  request.r(i1017[32], i1017[33], 0, i1016, 'tf')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1019 = data
  i1018.center = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.size = new pc.Vec3( i1019[3], i1019[4], i1019[5] )
  i1018.enabled = !!i1019[6]
  i1018.isTrigger = !!i1019[7]
  request.r(i1019[8], i1019[9], 0, i1018, 'material')
  return i1018
}

Deserializers["OvenSlot"] = function (request, data, root) {
  var i1020 = root || request.c( 'OvenSlot' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.clockPos1 = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1020.clockPos4 = i1024
  var i1027 = i1021[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1020.clockPos6 = i1026
  var i1029 = i1021[3]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1020.foodOnOvens = i1028
  i1020.isDone = !!i1021[4]
  i1020.onProcess = !!i1021[5]
  i1020.requireMatchingTargetTypeForHandTut = !!i1021[6]
  request.r(i1021[7], i1021[8], 0, i1020, 'itemDraggable')
  request.r(i1021[9], i1021[10], 0, i1020, 'itemClickable')
  request.r(i1021[11], i1021[12], 0, i1020, 'itemStirring')
  request.r(i1021[13], i1021[14], 0, i1020, 'itemKnifeSpriteMaskCutter')
  request.r(i1021[15], i1021[16], 0, i1020, 'itemSpriteMaskPainter')
  request.r(i1021[17], i1021[18], 0, i1020, 'itemDragSpriteMaskPainter')
  request.r(i1021[19], i1021[20], 0, i1020, 'itemMoveToTarget')
  request.r(i1021[21], i1021[22], 0, i1020, 'animator')
  i1020.itemType = i1021[23]
  request.r(i1021[24], i1021[25], 0, i1020, 'spriteRenderer')
  i1020.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1021[26], i1020.onKnifeIn)
  request.r(i1021[27], i1021[28], 0, i1020, 'knifePos')
  i1020.heartEffectScale = i1021[29]
  i1020.breakHeartEffectScale = i1021[30]
  i1020.blinkEffectScale = i1021[31]
  i1020.mergeEffectScale = i1021[32]
  i1020.playMoveToTargetFinishSound = !!i1021[33]
  i1020.moveToTargetFinishFxType = i1021[34]
  i1020.fxSpawnZPos = i1021[35]
  request.r(i1021[36], i1021[37], 0, i1020, 'tf')
  return i1020
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1032 = root || request.c( 'ItemClickable' )
  var i1033 = data
  i1032.requiredClicks = i1033[0]
  i1032.infiniteClick = !!i1033[1]
  i1032.canClick = !!i1033[2]
  i1032.disableAfterClick = !!i1033[3]
  i1032.onClick = request.d('UnityEngine.Events.UnityEvent', i1033[4], i1032.onClick)
  var i1035 = i1033[5]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('UnityEngine.Events.UnityEvent', i1035[i + 0]));
  }
  i1032.sequentialOnClicks = i1034
  i1032.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1033[6], i1032.onClickComplete)
  return i1032
}

Deserializers["FoodOnOven"] = function (request, data, root) {
  var i1038 = root || request.c( 'FoodOnOven' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'foodSpriteRenderer')
  var i1041 = i1039[2]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1038.foodSprites = i1040
  i1038.currentFoodStateIndex = i1039[3]
  i1038.cookingDuration = i1039[4]
  request.r(i1039[5], i1039[6], 0, i1038, 'clockPos')
  request.r(i1039[7], i1039[8], 0, i1038, 'targetPlatePos')
  i1038.jumpPower = i1039[9]
  i1038.jumpDuration = i1039[10]
  i1038.numJumps = i1039[11]
  i1038.isDone = !!i1039[12]
  i1038.onProcess = !!i1039[13]
  i1038.requireMatchingTargetTypeForHandTut = !!i1039[14]
  request.r(i1039[15], i1039[16], 0, i1038, 'itemDraggable')
  request.r(i1039[17], i1039[18], 0, i1038, 'itemClickable')
  request.r(i1039[19], i1039[20], 0, i1038, 'itemStirring')
  request.r(i1039[21], i1039[22], 0, i1038, 'itemKnifeSpriteMaskCutter')
  request.r(i1039[23], i1039[24], 0, i1038, 'itemSpriteMaskPainter')
  request.r(i1039[25], i1039[26], 0, i1038, 'itemDragSpriteMaskPainter')
  request.r(i1039[27], i1039[28], 0, i1038, 'itemMoveToTarget')
  request.r(i1039[29], i1039[30], 0, i1038, 'animator')
  i1038.itemType = i1039[31]
  request.r(i1039[32], i1039[33], 0, i1038, 'spriteRenderer')
  i1038.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1039[34], i1038.onKnifeIn)
  request.r(i1039[35], i1039[36], 0, i1038, 'knifePos')
  i1038.heartEffectScale = i1039[37]
  i1038.breakHeartEffectScale = i1039[38]
  i1038.blinkEffectScale = i1039[39]
  i1038.mergeEffectScale = i1039[40]
  i1038.playMoveToTargetFinishSound = !!i1039[41]
  i1038.moveToTargetFinishFxType = i1039[42]
  i1038.fxSpawnZPos = i1039[43]
  request.r(i1039[44], i1039[45], 0, i1038, 'tf')
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1043 = data
  i1042.ambientIntensity = i1043[0]
  i1042.reflectionIntensity = i1043[1]
  i1042.ambientMode = i1043[2]
  i1042.ambientLight = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.ambientSkyColor = new pc.Color(i1043[7], i1043[8], i1043[9], i1043[10])
  i1042.ambientGroundColor = new pc.Color(i1043[11], i1043[12], i1043[13], i1043[14])
  i1042.ambientEquatorColor = new pc.Color(i1043[15], i1043[16], i1043[17], i1043[18])
  i1042.fogColor = new pc.Color(i1043[19], i1043[20], i1043[21], i1043[22])
  i1042.fogEndDistance = i1043[23]
  i1042.fogStartDistance = i1043[24]
  i1042.fogDensity = i1043[25]
  i1042.fog = !!i1043[26]
  request.r(i1043[27], i1043[28], 0, i1042, 'skybox')
  i1042.fogMode = i1043[29]
  var i1045 = i1043[30]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1045[i + 0]) );
  }
  i1042.lightmaps = i1044
  i1042.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1043[31], i1042.lightProbes)
  i1042.lightmapsMode = i1043[32]
  i1042.mixedBakeMode = i1043[33]
  i1042.environmentLightingMode = i1043[34]
  i1042.ambientProbe = new pc.SphericalHarmonicsL2(i1043[35])
  i1042.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1043[36])
  i1042.useReferenceAmbientProbe = !!i1043[37]
  request.r(i1043[38], i1043[39], 0, i1042, 'customReflection')
  request.r(i1043[40], i1043[41], 0, i1042, 'defaultReflection')
  i1042.defaultReflectionMode = i1043[42]
  i1042.defaultReflectionResolution = i1043[43]
  i1042.sunLightObjectId = i1043[44]
  i1042.pixelLightCount = i1043[45]
  i1042.defaultReflectionHDR = !!i1043[46]
  i1042.hasLightDataAsset = !!i1043[47]
  i1042.hasManualGenerate = !!i1043[48]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'lightmapColor')
  request.r(i1049[2], i1049[3], 0, i1048, 'lightmapDirection')
  request.r(i1049[4], i1049[5], 0, i1048, 'shadowMask')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1050 = root || new UnityEngine.LightProbes()
  var i1051 = data
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1061[i + 0]));
  }
  i1058.ShaderCompilationErrors = i1060
  i1058.name = i1059[1]
  i1058.guid = i1059[2]
  var i1063 = i1059[3]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.shaderDefinedKeywords = i1062
  var i1065 = i1059[4]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1065[i + 0]) );
  }
  i1058.passes = i1064
  var i1067 = i1059[5]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1067[i + 0]) );
  }
  i1058.usePasses = i1066
  var i1069 = i1059[6]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1069[i + 0]) );
  }
  i1058.defaultParameterValues = i1068
  request.r(i1059[7], i1059[8], 0, i1058, 'unityFallbackShader')
  i1058.readDepth = !!i1059[9]
  i1058.hasDepthOnlyPass = !!i1059[10]
  i1058.isCreatedByShaderGraph = !!i1059[11]
  i1058.disableBatching = !!i1059[12]
  i1058.compiled = !!i1059[13]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1073 = data
  i1072.shaderName = i1073[0]
  i1072.errorMessage = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1078 = root || new pc.UnityShaderPass()
  var i1079 = data
  i1078.id = i1079[0]
  i1078.subShaderIndex = i1079[1]
  i1078.name = i1079[2]
  i1078.passType = i1079[3]
  i1078.grabPassTextureName = i1079[4]
  i1078.usePass = !!i1079[5]
  i1078.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[6], i1078.zTest)
  i1078.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[7], i1078.zWrite)
  i1078.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[8], i1078.culling)
  i1078.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[9], i1078.blending)
  i1078.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[10], i1078.alphaBlending)
  i1078.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[11], i1078.colorWriteMask)
  i1078.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[12], i1078.offsetUnits)
  i1078.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[13], i1078.offsetFactor)
  i1078.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[14], i1078.stencilRef)
  i1078.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[15], i1078.stencilReadMask)
  i1078.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[16], i1078.stencilWriteMask)
  i1078.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[17], i1078.stencilOp)
  i1078.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[18], i1078.stencilOpFront)
  i1078.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[19], i1078.stencilOpBack)
  var i1081 = i1079[20]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1081[i + 0]) );
  }
  i1078.tags = i1080
  var i1083 = i1079[21]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.passDefinedKeywords = i1082
  var i1085 = i1079[22]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1085[i + 0]) );
  }
  i1078.passDefinedKeywordGroups = i1084
  var i1087 = i1079[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1087[i + 0]) );
  }
  i1078.variants = i1086
  var i1089 = i1079[24]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1078.excludedVariants = i1088
  i1078.hasDepthReader = !!i1079[25]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1091 = data
  i1090.val = i1091[0]
  i1090.name = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1093 = data
  i1092.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[0], i1092.src)
  i1092.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[1], i1092.dst)
  i1092.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[2], i1092.op)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1095 = data
  i1094.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.pass)
  i1094.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.fail)
  i1094.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.zFail)
  i1094.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[3], i1094.comp)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1102.keywords = i1104
  i1102.hasDiscard = !!i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1109 = data
  i1108.passId = i1109[0]
  i1108.subShaderIndex = i1109[1]
  var i1111 = i1109[2]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.keywords = i1110
  i1108.vertexProgram = i1109[3]
  i1108.fragmentProgram = i1109[4]
  i1108.exportedForWebGl2 = !!i1109[5]
  i1108.readDepth = !!i1109[6]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'shader')
  i1114.pass = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.type = i1119[1]
  i1118.value = new pc.Vec4( i1119[2], i1119[3], i1119[4], i1119[5] )
  i1118.textureValue = i1119[6]
  i1118.shaderPropertyFlag = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1121 = data
  i1120.name = i1121[0]
  request.r(i1121[1], i1121[2], 0, i1120, 'texture')
  i1120.aabb = i1121[3]
  i1120.vertices = i1121[4]
  i1120.triangles = i1121[5]
  i1120.textureRect = UnityEngine.Rect.MinMaxRect(i1121[6], i1121[7], i1121[8], i1121[9])
  i1120.packedRect = UnityEngine.Rect.MinMaxRect(i1121[10], i1121[11], i1121[12], i1121[13])
  i1120.border = new pc.Vec4( i1121[14], i1121[15], i1121[16], i1121[17] )
  i1120.transparency = i1121[18]
  i1120.bounds = i1121[19]
  i1120.pixelsPerUnit = i1121[20]
  i1120.textureWidth = i1121[21]
  i1120.textureHeight = i1121[22]
  i1120.nativeSize = new pc.Vec2( i1121[23], i1121[24] )
  i1120.pivot = new pc.Vec2( i1121[25], i1121[26] )
  i1120.textureRectOffset = new pc.Vec2( i1121[27], i1121[28] )
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1123 = data
  i1122.name = i1123[0]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.wrapMode = i1125[1]
  i1124.isLooping = !!i1125[2]
  i1124.length = i1125[3]
  var i1127 = i1125[4]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1127[i + 0]) );
  }
  i1124.curves = i1126
  var i1129 = i1125[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1129[i + 0]) );
  }
  i1124.events = i1128
  i1124.halfPrecision = !!i1125[6]
  i1124._frameRate = i1125[7]
  i1124.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1125[8], i1124.localBounds)
  i1124.hasMuscleCurves = !!i1125[9]
  var i1131 = i1125[10]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1124.clipMuscleConstant = i1130
  i1124.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1125[11], i1124.clipBindingConstant)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1135 = data
  i1134.path = i1135[0]
  i1134.hash = i1135[1]
  i1134.componentType = i1135[2]
  i1134.property = i1135[3]
  i1134.keys = i1135[4]
  var i1137 = i1135[5]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1137[i + 0]) );
  }
  i1134.objectReferenceKeys = i1136
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1141 = data
  i1140.time = i1141[0]
  request.r(i1141[1], i1141[2], 0, i1140, 'value')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1145 = data
  i1144.functionName = i1145[0]
  i1144.floatParameter = i1145[1]
  i1144.intParameter = i1145[2]
  i1144.stringParameter = i1145[3]
  request.r(i1145[4], i1145[5], 0, i1144, 'objectReferenceParameter')
  i1144.time = i1145[6]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1147 = data
  i1146.center = new pc.Vec3( i1147[0], i1147[1], i1147[2] )
  i1146.extends = new pc.Vec3( i1147[3], i1147[4], i1147[5] )
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1150.genericBindings = i1152
  var i1155 = i1151[1]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1150.pptrCurveMapping = i1154
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1157 = data
  i1156.name = i1157[0]
  var i1159 = i1157[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1159[i + 0]) );
  }
  i1156.layers = i1158
  var i1161 = i1157[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1161[i + 0]) );
  }
  i1156.parameters = i1160
  i1156.animationClips = i1157[3]
  i1156.avatarUnsupported = i1157[4]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.defaultWeight = i1165[1]
  i1164.blendingMode = i1165[2]
  i1164.avatarMask = i1165[3]
  i1164.syncedLayerIndex = i1165[4]
  i1164.syncedLayerAffectsTiming = !!i1165[5]
  i1164.syncedLayers = i1165[6]
  i1164.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1165[7], i1164.stateMachine)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1167 = data
  i1166.id = i1167[0]
  i1166.name = i1167[1]
  i1166.path = i1167[2]
  var i1169 = i1167[3]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1169[i + 0]) );
  }
  i1166.states = i1168
  var i1171 = i1167[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[i + 0]) );
  }
  i1166.machines = i1170
  var i1173 = i1167[5]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1173[i + 0]) );
  }
  i1166.entryStateTransitions = i1172
  var i1175 = i1167[6]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1175[i + 0]) );
  }
  i1166.exitStateTransitions = i1174
  var i1177 = i1167[7]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1177[i + 0]) );
  }
  i1166.anyStateTransitions = i1176
  i1166.defaultStateId = i1167[8]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.cycleOffset = i1181[2]
  i1180.cycleOffsetParameter = i1181[3]
  i1180.cycleOffsetParameterActive = !!i1181[4]
  i1180.mirror = !!i1181[5]
  i1180.mirrorParameter = i1181[6]
  i1180.mirrorParameterActive = !!i1181[7]
  i1180.motionId = i1181[8]
  i1180.nameHash = i1181[9]
  i1180.fullPathHash = i1181[10]
  i1180.speed = i1181[11]
  i1180.speedParameter = i1181[12]
  i1180.speedParameterActive = !!i1181[13]
  i1180.tag = i1181[14]
  i1180.tagHash = i1181[15]
  i1180.writeDefaultValues = !!i1181[16]
  var i1183 = i1181[17]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1180.behaviours = i1182
  var i1185 = i1181[18]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1185[i + 0]) );
  }
  i1180.transitions = i1184
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1191 = data
  i1190.fullPath = i1191[0]
  i1190.canTransitionToSelf = !!i1191[1]
  i1190.duration = i1191[2]
  i1190.exitTime = i1191[3]
  i1190.hasExitTime = !!i1191[4]
  i1190.hasFixedDuration = !!i1191[5]
  i1190.interruptionSource = i1191[6]
  i1190.offset = i1191[7]
  i1190.orderedInterruption = !!i1191[8]
  i1190.destinationStateId = i1191[9]
  i1190.isExit = !!i1191[10]
  i1190.mute = !!i1191[11]
  i1190.solo = !!i1191[12]
  var i1193 = i1191[13]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1193[i + 0]) );
  }
  i1190.conditions = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1199 = data
  i1198.destinationStateId = i1199[0]
  i1198.isExit = !!i1199[1]
  i1198.mute = !!i1199[2]
  i1198.solo = !!i1199[3]
  var i1201 = i1199[4]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1201[i + 0]) );
  }
  i1198.conditions = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1205 = data
  i1204.defaultBool = !!i1205[0]
  i1204.defaultFloat = i1205[1]
  i1204.defaultInt = i1205[2]
  i1204.name = i1205[3]
  i1204.nameHash = i1205[4]
  i1204.type = i1205[5]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1209 = data
  i1208.mode = i1209[0]
  i1208.parameter = i1209[1]
  i1208.threshold = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.bytes64 = i1211[1]
  i1210.data = i1211[2]
  return i1210
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1213 = data
  i1212.normalStyle = i1213[0]
  i1212.normalSpacingOffset = i1213[1]
  i1212.boldStyle = i1213[2]
  i1212.boldSpacing = i1213[3]
  i1212.italicStyle = i1213[4]
  i1212.tabSize = i1213[5]
  request.r(i1213[6], i1213[7], 0, i1212, 'atlas')
  i1212.m_SourceFontFileGUID = i1213[8]
  i1212.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1213[9], i1212.m_CreationSettings)
  request.r(i1213[10], i1213[11], 0, i1212, 'm_SourceFontFile')
  i1212.m_SourceFontFilePath = i1213[12]
  i1212.m_AtlasPopulationMode = i1213[13]
  i1212.InternalDynamicOS = !!i1213[14]
  var i1215 = i1213[15]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('UnityEngine.TextCore.Glyph', i1215[i + 0]));
  }
  i1212.m_GlyphTable = i1214
  var i1217 = i1213[16]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.TMP_Character', i1217[i + 0]));
  }
  i1212.m_CharacterTable = i1216
  var i1219 = i1213[17]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 2, i1218, '')
  }
  i1212.m_AtlasTextures = i1218
  i1212.m_AtlasTextureIndex = i1213[18]
  i1212.m_IsMultiAtlasTexturesEnabled = !!i1213[19]
  i1212.m_GetFontFeatures = !!i1213[20]
  i1212.m_ClearDynamicDataOnBuild = !!i1213[21]
  i1212.m_AtlasWidth = i1213[22]
  i1212.m_AtlasHeight = i1213[23]
  i1212.m_AtlasPadding = i1213[24]
  i1212.m_AtlasRenderMode = i1213[25]
  var i1221 = i1213[26]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.GlyphRect', i1221[i + 0]));
  }
  i1212.m_UsedGlyphRects = i1220
  var i1223 = i1213[27]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('UnityEngine.TextCore.GlyphRect', i1223[i + 0]));
  }
  i1212.m_FreeGlyphRects = i1222
  i1212.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1213[28], i1212.m_FontFeatureTable)
  i1212.m_ShouldReimportFontFeatures = !!i1213[29]
  var i1225 = i1213[30]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1212.m_FallbackFontAssetTable = i1224
  var i1227 = i1213[31]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('TMPro.TMP_FontWeightPair', i1227[i + 0]) );
  }
  i1212.m_FontWeightTable = i1226
  var i1229 = i1213[32]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('TMPro.TMP_FontWeightPair', i1229[i + 0]) );
  }
  i1212.fontWeights = i1228
  i1212.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1213[33], i1212.m_fontInfo)
  var i1231 = i1213[34]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Glyph', i1231[i + 0]));
  }
  i1212.m_glyphInfoList = i1230
  i1212.m_KerningTable = request.d('TMPro.KerningTable', i1213[35], i1212.m_KerningTable)
  var i1233 = i1213[36]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1212.fallbackFontAssets = i1232
  i1212.m_Version = i1213[37]
  i1212.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1213[38], i1212.m_FaceInfo)
  request.r(i1213[39], i1213[40], 0, i1212, 'm_Material')
  return i1212
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1235 = data
  i1234.sourceFontFileName = i1235[0]
  i1234.sourceFontFileGUID = i1235[1]
  i1234.faceIndex = i1235[2]
  i1234.pointSizeSamplingMode = i1235[3]
  i1234.pointSize = i1235[4]
  i1234.padding = i1235[5]
  i1234.paddingMode = i1235[6]
  i1234.packingMode = i1235[7]
  i1234.atlasWidth = i1235[8]
  i1234.atlasHeight = i1235[9]
  i1234.characterSetSelectionMode = i1235[10]
  i1234.characterSequence = i1235[11]
  i1234.referencedFontAssetGUID = i1235[12]
  i1234.referencedTextAssetGUID = i1235[13]
  i1234.fontStyle = i1235[14]
  i1234.fontStyleModifier = i1235[15]
  i1234.renderMode = i1235[16]
  i1234.includeFontFeatures = !!i1235[17]
  return i1234
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1239 = data
  i1238.m_Index = i1239[0]
  i1238.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1239[1], i1238.m_Metrics)
  i1238.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1239[2], i1238.m_GlyphRect)
  i1238.m_Scale = i1239[3]
  i1238.m_AtlasIndex = i1239[4]
  i1238.m_ClassDefinitionType = i1239[5]
  return i1238
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1241 = data
  i1240.m_Width = i1241[0]
  i1240.m_Height = i1241[1]
  i1240.m_HorizontalBearingX = i1241[2]
  i1240.m_HorizontalBearingY = i1241[3]
  i1240.m_HorizontalAdvance = i1241[4]
  return i1240
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1243 = data
  i1242.m_X = i1243[0]
  i1242.m_Y = i1243[1]
  i1242.m_Width = i1243[2]
  i1242.m_Height = i1243[3]
  return i1242
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_Character' )
  var i1247 = data
  i1246.m_ElementType = i1247[0]
  i1246.m_Unicode = i1247[1]
  i1246.m_GlyphIndex = i1247[2]
  i1246.m_Scale = i1247[3]
  return i1246
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1253 = data
  var i1255 = i1253[0]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.MultipleSubstitutionRecord', i1255[i + 0]));
  }
  i1252.m_MultipleSubstitutionRecords = i1254
  var i1257 = i1253[1]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.LigatureSubstitutionRecord', i1257[i + 0]));
  }
  i1252.m_LigatureSubstitutionRecords = i1256
  var i1259 = i1253[2]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1259[i + 0]));
  }
  i1252.m_GlyphPairAdjustmentRecords = i1258
  var i1261 = i1253[3]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1261[i + 0]));
  }
  i1252.m_MarkToBaseAdjustmentRecords = i1260
  var i1263 = i1253[4]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1263[i + 0]));
  }
  i1252.m_MarkToMarkAdjustmentRecords = i1262
  return i1252
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1267 = data
  i1266.m_TargetGlyphID = i1267[0]
  i1266.m_SubstituteGlyphIDs = i1267[1]
  return i1266
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1271 = data
  i1270.m_ComponentGlyphIDs = i1271[0]
  i1270.m_LigatureGlyphID = i1271[1]
  return i1270
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1275 = data
  i1274.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1275[0], i1274.m_FirstAdjustmentRecord)
  i1274.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1275[1], i1274.m_SecondAdjustmentRecord)
  i1274.m_FeatureLookupFlags = i1275[2]
  return i1274
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1279 = data
  i1278.m_BaseGlyphID = i1279[0]
  i1278.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1279[1], i1278.m_BaseGlyphAnchorPoint)
  i1278.m_MarkGlyphID = i1279[2]
  i1278.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1279[3], i1278.m_MarkPositionAdjustment)
  return i1278
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1283 = data
  i1282.m_BaseMarkGlyphID = i1283[0]
  i1282.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1283[1], i1282.m_BaseMarkGlyphAnchorPoint)
  i1282.m_CombiningMarkGlyphID = i1283[2]
  i1282.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1283[3], i1282.m_CombiningMarkPositionAdjustment)
  return i1282
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'regularTypeface')
  request.r(i1289[2], i1289[3], 0, i1288, 'italicTypeface')
  return i1288
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1291 = data
  i1290.Name = i1291[0]
  i1290.PointSize = i1291[1]
  i1290.Scale = i1291[2]
  i1290.CharacterCount = i1291[3]
  i1290.LineHeight = i1291[4]
  i1290.Baseline = i1291[5]
  i1290.Ascender = i1291[6]
  i1290.CapHeight = i1291[7]
  i1290.Descender = i1291[8]
  i1290.CenterLine = i1291[9]
  i1290.SuperscriptOffset = i1291[10]
  i1290.SubscriptOffset = i1291[11]
  i1290.SubSize = i1291[12]
  i1290.Underline = i1291[13]
  i1290.UnderlineThickness = i1291[14]
  i1290.strikethrough = i1291[15]
  i1290.strikethroughThickness = i1291[16]
  i1290.TabWidth = i1291[17]
  i1290.Padding = i1291[18]
  i1290.AtlasWidth = i1291[19]
  i1290.AtlasHeight = i1291[20]
  return i1290
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.x = i1295[1]
  i1294.y = i1295[2]
  i1294.width = i1295[3]
  i1294.height = i1295[4]
  i1294.xOffset = i1295[5]
  i1294.yOffset = i1295[6]
  i1294.xAdvance = i1295[7]
  i1294.scale = i1295[8]
  return i1294
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.KerningTable' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.KerningPair', i1299[i + 0]));
  }
  i1296.kerningPairs = i1298
  return i1296
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.KerningPair' )
  var i1303 = data
  i1302.xOffset = i1303[0]
  i1302.m_FirstGlyph = i1303[1]
  i1302.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1303[2], i1302.m_FirstGlyphAdjustments)
  i1302.m_SecondGlyph = i1303[3]
  i1302.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1303[4], i1302.m_SecondGlyphAdjustments)
  i1302.m_IgnoreSpacingAdjustments = !!i1303[5]
  return i1302
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1305 = data
  i1304.m_FaceIndex = i1305[0]
  i1304.m_FamilyName = i1305[1]
  i1304.m_StyleName = i1305[2]
  i1304.m_PointSize = i1305[3]
  i1304.m_Scale = i1305[4]
  i1304.m_UnitsPerEM = i1305[5]
  i1304.m_LineHeight = i1305[6]
  i1304.m_AscentLine = i1305[7]
  i1304.m_CapLine = i1305[8]
  i1304.m_MeanLine = i1305[9]
  i1304.m_Baseline = i1305[10]
  i1304.m_DescentLine = i1305[11]
  i1304.m_SuperscriptOffset = i1305[12]
  i1304.m_SuperscriptSize = i1305[13]
  i1304.m_SubscriptOffset = i1305[14]
  i1304.m_SubscriptSize = i1305[15]
  i1304.m_UnderlineOffset = i1305[16]
  i1304.m_UnderlineThickness = i1305[17]
  i1304.m_StrikethroughOffset = i1305[18]
  i1304.m_StrikethroughThickness = i1305[19]
  i1304.m_TabWidth = i1305[20]
  return i1304
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1307 = data
  i1306.useSafeMode = !!i1307[0]
  i1306.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1307[1], i1306.safeModeOptions)
  i1306.timeScale = i1307[2]
  i1306.unscaledTimeScale = i1307[3]
  i1306.useSmoothDeltaTime = !!i1307[4]
  i1306.maxSmoothUnscaledTime = i1307[5]
  i1306.rewindCallbackMode = i1307[6]
  i1306.showUnityEditorReport = !!i1307[7]
  i1306.logBehaviour = i1307[8]
  i1306.drawGizmos = !!i1307[9]
  i1306.defaultRecyclable = !!i1307[10]
  i1306.defaultAutoPlay = i1307[11]
  i1306.defaultUpdateType = i1307[12]
  i1306.defaultTimeScaleIndependent = !!i1307[13]
  i1306.defaultEaseType = i1307[14]
  i1306.defaultEaseOvershootOrAmplitude = i1307[15]
  i1306.defaultEasePeriod = i1307[16]
  i1306.defaultAutoKill = !!i1307[17]
  i1306.defaultLoopType = i1307[18]
  i1306.debugMode = !!i1307[19]
  i1306.debugStoreTargetId = !!i1307[20]
  i1306.showPreviewPanel = !!i1307[21]
  i1306.storeSettingsLocation = i1307[22]
  i1306.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1307[23], i1306.modules)
  i1306.createASMDEF = !!i1307[24]
  i1306.showPlayingTweens = !!i1307[25]
  i1306.showPausedTweens = !!i1307[26]
  return i1306
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1309 = data
  i1308.logBehaviour = i1309[0]
  i1308.nestedTweenFailureBehaviour = i1309[1]
  return i1308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1311 = data
  i1310.showPanel = !!i1311[0]
  i1310.audioEnabled = !!i1311[1]
  i1310.physicsEnabled = !!i1311[2]
  i1310.physics2DEnabled = !!i1311[3]
  i1310.spriteEnabled = !!i1311[4]
  i1310.uiEnabled = !!i1311[5]
  i1310.uiToolkitEnabled = !!i1311[6]
  i1310.textMeshProEnabled = !!i1311[7]
  i1310.tk2DEnabled = !!i1311[8]
  i1310.deAudioEnabled = !!i1311[9]
  i1310.deUnityExtendedEnabled = !!i1311[10]
  i1310.epoOutlineEnabled = !!i1311[11]
  return i1310
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Settings' )
  var i1313 = data
  i1312.assetVersion = i1313[0]
  i1312.m_TextWrappingMode = i1313[1]
  i1312.m_enableKerning = !!i1313[2]
  var i1315 = i1313[3]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(i1315[i + 0]);
  }
  i1312.m_ActiveFontFeatures = i1314
  i1312.m_enableExtraPadding = !!i1313[4]
  i1312.m_enableTintAllSprites = !!i1313[5]
  i1312.m_enableParseEscapeCharacters = !!i1313[6]
  i1312.m_EnableRaycastTarget = !!i1313[7]
  i1312.m_GetFontFeaturesAtRuntime = !!i1313[8]
  i1312.m_missingGlyphCharacter = i1313[9]
  i1312.m_ClearDynamicDataOnBuild = !!i1313[10]
  i1312.m_warningsDisabled = !!i1313[11]
  request.r(i1313[12], i1313[13], 0, i1312, 'm_defaultFontAsset')
  i1312.m_defaultFontAssetPath = i1313[14]
  i1312.m_defaultFontSize = i1313[15]
  i1312.m_defaultAutoSizeMinRatio = i1313[16]
  i1312.m_defaultAutoSizeMaxRatio = i1313[17]
  i1312.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1313[18], i1313[19] )
  i1312.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1313[20], i1313[21] )
  i1312.m_autoSizeTextContainer = !!i1313[22]
  i1312.m_IsTextObjectScaleStatic = !!i1313[23]
  var i1317 = i1313[24]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 1, i1316, '')
  }
  i1312.m_fallbackFontAssets = i1316
  i1312.m_matchMaterialPreset = !!i1313[25]
  i1312.m_HideSubTextObjects = !!i1313[26]
  request.r(i1313[27], i1313[28], 0, i1312, 'm_defaultSpriteAsset')
  i1312.m_defaultSpriteAssetPath = i1313[29]
  i1312.m_enableEmojiSupport = !!i1313[30]
  i1312.m_MissingCharacterSpriteUnicode = i1313[31]
  var i1319 = i1313[32]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1312.m_EmojiFallbackTextAssets = i1318
  i1312.m_defaultColorGradientPresetsPath = i1313[33]
  request.r(i1313[34], i1313[35], 0, i1312, 'm_defaultStyleSheet')
  i1312.m_StyleSheetsResourcePath = i1313[36]
  request.r(i1313[37], i1313[38], 0, i1312, 'm_leadingCharacters')
  request.r(i1313[39], i1313[40], 0, i1312, 'm_followingCharacters')
  i1312.m_UseModernHangulLineBreakingRules = !!i1313[41]
  return i1312
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'spriteSheet')
  var i1325 = i1323[2]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Sprite', i1325[i + 0]));
  }
  i1322.spriteInfoList = i1324
  var i1327 = i1323[3]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1322.fallbackSpriteAssets = i1326
  var i1329 = i1323[4]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.TMP_SpriteCharacter', i1329[i + 0]));
  }
  i1322.m_SpriteCharacterTable = i1328
  var i1331 = i1323[5]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.TMP_SpriteGlyph', i1331[i + 0]));
  }
  i1322.m_GlyphTable = i1330
  i1322.m_Version = i1323[6]
  i1322.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1323[7], i1322.m_FaceInfo)
  request.r(i1323[8], i1323[9], 0, i1322, 'm_Material')
  return i1322
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.hashCode = i1335[1]
  i1334.unicode = i1335[2]
  i1334.pivot = new pc.Vec2( i1335[3], i1335[4] )
  request.r(i1335[5], i1335[6], 0, i1334, 'sprite')
  i1334.id = i1335[7]
  i1334.x = i1335[8]
  i1334.y = i1335[9]
  i1334.width = i1335[10]
  i1334.height = i1335[11]
  i1334.xOffset = i1335[12]
  i1334.yOffset = i1335[13]
  i1334.xAdvance = i1335[14]
  i1334.scale = i1335[15]
  return i1334
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1341 = data
  i1340.m_Name = i1341[0]
  i1340.m_ElementType = i1341[1]
  i1340.m_Unicode = i1341[2]
  i1340.m_GlyphIndex = i1341[3]
  i1340.m_Scale = i1341[4]
  return i1340
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1345 = data
  request.r(i1345[0], i1345[1], 0, i1344, 'sprite')
  i1344.m_Index = i1345[2]
  i1344.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1345[3], i1344.m_Metrics)
  i1344.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1345[4], i1344.m_GlyphRect)
  i1344.m_Scale = i1345[5]
  i1344.m_AtlasIndex = i1345[6]
  i1344.m_ClassDefinitionType = i1345[7]
  return i1344
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.TMP_Style', i1349[i + 0]));
  }
  i1346.m_StyleList = i1348
  return i1346
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_Style' )
  var i1353 = data
  i1352.m_Name = i1353[0]
  i1352.m_HashCode = i1353[1]
  i1352.m_OpeningDefinition = i1353[2]
  i1352.m_ClosingDefinition = i1353[3]
  i1352.m_OpeningTagArray = i1353[4]
  i1352.m_ClosingTagArray = i1353[5]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1357[i + 0]) );
  }
  i1354.files = i1356
  i1354.componentToPrefabIds = i1355[1]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1361 = data
  i1360.path = i1361[0]
  request.r(i1361[1], i1361[2], 0, i1360, 'unityObject')
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1365[i + 0]) );
  }
  i1362.scriptsExecutionOrder = i1364
  var i1367 = i1363[1]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1367[i + 0]) );
  }
  i1362.sortingLayers = i1366
  var i1369 = i1363[2]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1369[i + 0]) );
  }
  i1362.cullingLayers = i1368
  i1362.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1363[3], i1362.timeSettings)
  i1362.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1363[4], i1362.physicsSettings)
  i1362.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1363[5], i1362.physics2DSettings)
  i1362.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1363[6], i1362.qualitySettings)
  i1362.enableRealtimeShadows = !!i1363[7]
  i1362.enableAutoInstancing = !!i1363[8]
  i1362.enableStaticBatching = !!i1363[9]
  i1362.enableDynamicBatching = !!i1363[10]
  i1362.lightmapEncodingQuality = i1363[11]
  i1362.desiredColorSpace = i1363[12]
  var i1371 = i1363[13]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( i1371[i + 0] );
  }
  i1362.allTags = i1370
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.value = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1379 = data
  i1378.id = i1379[0]
  i1378.name = i1379[1]
  i1378.value = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1383 = data
  i1382.id = i1383[0]
  i1382.name = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1385 = data
  i1384.fixedDeltaTime = i1385[0]
  i1384.maximumDeltaTime = i1385[1]
  i1384.timeScale = i1385[2]
  i1384.maximumParticleTimestep = i1385[3]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1387 = data
  i1386.gravity = new pc.Vec3( i1387[0], i1387[1], i1387[2] )
  i1386.defaultSolverIterations = i1387[3]
  i1386.bounceThreshold = i1387[4]
  i1386.autoSyncTransforms = !!i1387[5]
  i1386.autoSimulation = !!i1387[6]
  var i1389 = i1387[7]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1389[i + 0]) );
  }
  i1386.collisionMatrix = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.layerId = i1393[1]
  i1392.otherLayerId = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'material')
  i1394.gravity = new pc.Vec2( i1395[2], i1395[3] )
  i1394.positionIterations = i1395[4]
  i1394.velocityIterations = i1395[5]
  i1394.velocityThreshold = i1395[6]
  i1394.maxLinearCorrection = i1395[7]
  i1394.maxAngularCorrection = i1395[8]
  i1394.maxTranslationSpeed = i1395[9]
  i1394.maxRotationSpeed = i1395[10]
  i1394.baumgarteScale = i1395[11]
  i1394.baumgarteTOIScale = i1395[12]
  i1394.timeToSleep = i1395[13]
  i1394.linearSleepTolerance = i1395[14]
  i1394.angularSleepTolerance = i1395[15]
  i1394.defaultContactOffset = i1395[16]
  i1394.autoSimulation = !!i1395[17]
  i1394.queriesHitTriggers = !!i1395[18]
  i1394.queriesStartInColliders = !!i1395[19]
  i1394.callbacksOnDisable = !!i1395[20]
  i1394.reuseCollisionCallbacks = !!i1395[21]
  i1394.autoSyncTransforms = !!i1395[22]
  var i1397 = i1395[23]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1397[i + 0]) );
  }
  i1394.collisionMatrix = i1396
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1401 = data
  i1400.enabled = !!i1401[0]
  i1400.layerId = i1401[1]
  i1400.otherLayerId = i1401[2]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1405[i + 0]) );
  }
  i1402.qualityLevels = i1404
  var i1407 = i1403[1]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1402.names = i1406
  i1402.shadows = i1403[2]
  i1402.anisotropicFiltering = i1403[3]
  i1402.antiAliasing = i1403[4]
  i1402.lodBias = i1403[5]
  i1402.shadowCascades = i1403[6]
  i1402.shadowDistance = i1403[7]
  i1402.shadowmaskMode = i1403[8]
  i1402.shadowProjection = i1403[9]
  i1402.shadowResolution = i1403[10]
  i1402.softParticles = !!i1403[11]
  i1402.softVegetation = !!i1403[12]
  i1402.activeColorSpace = i1403[13]
  i1402.desiredColorSpace = i1403[14]
  i1402.masterTextureLimit = i1403[15]
  i1402.maxQueuedFrames = i1403[16]
  i1402.particleRaycastBudget = i1403[17]
  i1402.pixelLightCount = i1403[18]
  i1402.realtimeReflectionProbes = !!i1403[19]
  i1402.shadowCascade2Split = i1403[20]
  i1402.shadowCascade4Split = new pc.Vec3( i1403[21], i1403[22], i1403[23] )
  i1402.streamingMipmapsActive = !!i1403[24]
  i1402.vSyncCount = i1403[25]
  i1402.asyncUploadBufferSize = i1403[26]
  i1402.asyncUploadTimeSlice = i1403[27]
  i1402.billboardsFaceCameraPosition = !!i1403[28]
  i1402.shadowNearPlaneOffset = i1403[29]
  i1402.streamingMipmapsMemoryBudget = i1403[30]
  i1402.maximumLODLevel = i1403[31]
  i1402.streamingMipmapsAddAllCameras = !!i1403[32]
  i1402.streamingMipmapsMaxLevelReduction = i1403[33]
  i1402.streamingMipmapsRenderersPerFrame = i1403[34]
  i1402.resolutionScalingFixedDPIFactor = i1403[35]
  i1402.streamingMipmapsMaxFileIORequests = i1403[36]
  i1402.currentQualityLevel = i1403[37]
  return i1402
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1411 = data
  i1410.m_GlyphIndex = i1411[0]
  i1410.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1411[1], i1410.m_GlyphValueRecord)
  return i1410
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1413 = data
  i1412.m_XCoordinate = i1413[0]
  i1412.m_YCoordinate = i1413[1]
  return i1412
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1415 = data
  i1414.m_XPositionAdjustment = i1415[0]
  i1414.m_YPositionAdjustment = i1415[1]
  return i1414
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1417 = data
  i1416.xPlacement = i1417[0]
  i1416.yPlacement = i1417[1]
  i1416.xAdvance = i1417[2]
  i1416.yAdvance = i1417[3]
  return i1416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1419 = data
  i1418.m_XPlacement = i1419[0]
  i1418.m_YPlacement = i1419[1]
  i1418.m_XAdvance = i1419[2]
  i1418.m_YAdvance = i1419[3]
  return i1418
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[28],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[28],"94":[95],"96":[97],"98":[97],"27":[13],"99":[100],"101":[20],"56":[102],"103":[20],"20":[102],"24":[20],"104":[20],"105":[102],"106":[102],"107":[102],"108":[13],"109":[16,13],"110":[95],"111":[16,13],"112":[25,95],"113":[95],"114":[95,115],"116":[73],"117":[80],"118":[119],"120":[121],"122":[5],"123":[28],"124":[125],"126":[13],"127":[95,13],"32":[13,16],"128":[13],"129":[16,13],"130":[95],"131":[16,13],"132":[13],"133":[134],"135":[134],"136":[134],"137":[13],"138":[13],"30":[27],"15":[16,13],"139":[13],"29":[27],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[16,13],"150":[13],"151":[13],"152":[13],"36":[13],"153":[16,13],"154":[13],"155":[53],"156":[53],"54":[53],"157":[53],"158":[28],"159":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","FoodOnPlate","FoodOnOven","PhaseManager","ItemTypeDoneManager","OvenManager","OvenSlot","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.BoxCollider","ItemClickable","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","UnityEngine.Collider","ItemDragChildRotator","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "52.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v64_BBQ_grillscene";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1766";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5014";

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

Deserializers.buildID = "c311514c-b5a9-4c37-9ce8-0f3f3589b6a4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

