var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointSpring' )
  var i717 = data
  i716.spring = i717[0]
  i716.damper = i717[1]
  i716.targetPosition = i717[2]
  return i716
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointMotor' )
  var i719 = data
  i718.m_TargetVelocity = i719[0]
  i718.m_Force = i719[1]
  i718.m_FreeSpin = i719[2]
  return i718
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointLimits' )
  var i721 = data
  i720.m_Min = i721[0]
  i720.m_Max = i721[1]
  i720.m_Bounciness = i721[2]
  i720.m_BounceMinVelocity = i721[3]
  i720.m_ContactDistance = i721[4]
  i720.minBounce = i721[5]
  i720.maxBounce = i721[6]
  return i720
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointDrive' )
  var i723 = data
  i722.m_PositionSpring = i723[0]
  i722.m_PositionDamper = i723[1]
  i722.m_MaximumForce = i723[2]
  i722.m_UseAcceleration = i723[3]
  return i722
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i725 = data
  i724.m_Spring = i725[0]
  i724.m_Damper = i725[1]
  return i724
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i727 = data
  i726.m_Limit = i727[0]
  i726.m_Bounciness = i727[1]
  i726.m_ContactDistance = i727[2]
  return i726
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i729 = data
  i728.m_ExtremumSlip = i729[0]
  i728.m_ExtremumValue = i729[1]
  i728.m_AsymptoteSlip = i729[2]
  i728.m_AsymptoteValue = i729[3]
  i728.m_Stiffness = i729[4]
  return i728
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i731 = data
  i730.m_LowerAngle = i731[0]
  i730.m_UpperAngle = i731[1]
  return i730
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i733 = data
  i732.m_MotorSpeed = i733[0]
  i732.m_MaximumMotorTorque = i733[1]
  return i732
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i735 = data
  i734.m_DampingRatio = i735[0]
  i734.m_Frequency = i735[1]
  i734.m_Angle = i735[2]
  return i734
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i737 = data
  i736.m_LowerTranslation = i737[0]
  i736.m_UpperTranslation = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i738 = root || new pc.UnityMaterial()
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'shader')
  i738.renderQueue = i739[3]
  i738.enableInstancing = !!i739[4]
  var i741 = i739[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i741[i + 0]) );
  }
  i738.floatParameters = i740
  var i743 = i739[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i743[i + 0]) );
  }
  i738.colorParameters = i742
  var i745 = i739[7]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i745[i + 0]) );
  }
  i738.vectorParameters = i744
  var i747 = i739[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i747[i + 0]) );
  }
  i738.textureParameters = i746
  var i749 = i739[9]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i749[i + 0]) );
  }
  i738.materialFlags = i748
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = new pc.Color(i757[1], i757[2], i757[3], i757[4])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = new pc.Vec4( i761[1], i761[2], i761[3], i761[4] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i765 = data
  i764.name = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'value')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i769 = data
  i768.name = i769[0]
  i768.enabled = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i771 = data
  i770.name = i771[0]
  i770.width = i771[1]
  i770.height = i771[2]
  i770.mipmapCount = i771[3]
  i770.anisoLevel = i771[4]
  i770.filterMode = i771[5]
  i770.hdr = !!i771[6]
  i770.format = i771[7]
  i770.wrapMode = i771[8]
  i770.alphaIsTransparency = !!i771[9]
  i770.alphaSource = i771[10]
  i770.graphicsFormat = i771[11]
  i770.sRGBTexture = !!i771[12]
  i770.desiredColorSpace = i771[13]
  i770.wrapU = i771[14]
  i770.wrapV = i771[15]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i773 = data
  i772.position = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.scale = new pc.Vec3( i773[3], i773[4], i773[5] )
  i772.rotation = new pc.Quat(i773[6], i773[7], i773[8], i773[9])
  return i772
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i774 = root || request.c( 'HeartEffect' )
  var i775 = data
  i774.defaultLifeTime = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'tf')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i777 = data
  i776.color = new pc.Color(i777[0], i777[1], i777[2], i777[3])
  request.r(i777[4], i777[5], 0, i776, 'sprite')
  i776.flipX = !!i777[6]
  i776.flipY = !!i777[7]
  i776.drawMode = i777[8]
  i776.size = new pc.Vec2( i777[9], i777[10] )
  i776.tileMode = i777[11]
  i776.adaptiveModeThreshold = i777[12]
  i776.maskInteraction = i777[13]
  i776.spriteSortPoint = i777[14]
  i776.enabled = !!i777[15]
  request.r(i777[16], i777[17], 0, i776, 'sharedMaterial')
  var i779 = i777[18]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sharedMaterials = i778
  i776.receiveShadows = !!i777[19]
  i776.shadowCastingMode = i777[20]
  i776.sortingLayerID = i777[21]
  i776.sortingOrder = i777[22]
  i776.lightmapIndex = i777[23]
  i776.lightmapSceneIndex = i777[24]
  i776.lightmapScaleOffset = new pc.Vec4( i777[25], i777[26], i777[27], i777[28] )
  i776.lightProbeUsage = i777[29]
  i776.reflectionProbeUsage = i777[30]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i783 = data
  i782.name = i783[0]
  i782.tagId = i783[1]
  i782.enabled = !!i783[2]
  i782.isStatic = !!i783[3]
  i782.layer = i783[4]
  return i782
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i784 = root || request.c( 'HeartBreakEffect' )
  var i785 = data
  i784.defaultLifeTime = i785[0]
  request.r(i785[1], i785[2], 0, i784, 'tf')
  return i784
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i786 = root || request.c( 'BlinkEffect' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'tf')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'mesh')
  i788.meshCount = i789[2]
  i788.activeVertexStreamsCount = i789[3]
  i788.alignment = i789[4]
  i788.renderMode = i789[5]
  i788.sortMode = i789[6]
  i788.lengthScale = i789[7]
  i788.velocityScale = i789[8]
  i788.cameraVelocityScale = i789[9]
  i788.normalDirection = i789[10]
  i788.sortingFudge = i789[11]
  i788.minParticleSize = i789[12]
  i788.maxParticleSize = i789[13]
  i788.pivot = new pc.Vec3( i789[14], i789[15], i789[16] )
  request.r(i789[17], i789[18], 0, i788, 'trailMaterial')
  i788.applyActiveColorSpace = !!i789[19]
  i788.enabled = !!i789[20]
  request.r(i789[21], i789[22], 0, i788, 'sharedMaterial')
  var i791 = i789[23]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.sharedMaterials = i790
  i788.receiveShadows = !!i789[24]
  i788.shadowCastingMode = i789[25]
  i788.sortingLayerID = i789[26]
  i788.sortingOrder = i789[27]
  i788.lightmapIndex = i789[28]
  i788.lightmapSceneIndex = i789[29]
  i788.lightmapScaleOffset = new pc.Vec4( i789[30], i789[31], i789[32], i789[33] )
  i788.lightProbeUsage = i789[34]
  i788.reflectionProbeUsage = i789[35]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i793 = data
  i792.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i793[0], i792.main)
  i792.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i793[1], i792.colorBySpeed)
  i792.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i793[2], i792.colorOverLifetime)
  i792.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i793[3], i792.emission)
  i792.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i793[4], i792.rotationBySpeed)
  i792.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i793[5], i792.rotationOverLifetime)
  i792.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i793[6], i792.shape)
  i792.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i793[7], i792.sizeBySpeed)
  i792.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i793[8], i792.sizeOverLifetime)
  i792.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i793[9], i792.textureSheetAnimation)
  i792.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i793[10], i792.velocityOverLifetime)
  i792.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i793[11], i792.noise)
  i792.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i793[12], i792.inheritVelocity)
  i792.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i793[13], i792.forceOverLifetime)
  i792.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i793[14], i792.limitVelocityOverLifetime)
  i792.useAutoRandomSeed = !!i793[15]
  i792.randomSeed = i793[16]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemMain()
  var i795 = data
  i794.duration = i795[0]
  i794.loop = !!i795[1]
  i794.prewarm = !!i795[2]
  i794.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.startDelay)
  i794.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.startLifetime)
  i794.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[5], i794.startSpeed)
  i794.startSize3D = !!i795[6]
  i794.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.startSizeX)
  i794.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[8], i794.startSizeY)
  i794.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.startSizeZ)
  i794.startRotation3D = !!i795[10]
  i794.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[11], i794.startRotationX)
  i794.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[12], i794.startRotationY)
  i794.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[13], i794.startRotationZ)
  i794.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i795[14], i794.startColor)
  i794.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[15], i794.gravityModifier)
  i794.simulationSpace = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'customSimulationSpace')
  i794.simulationSpeed = i795[19]
  i794.useUnscaledTime = !!i795[20]
  i794.scalingMode = i795[21]
  i794.playOnAwake = !!i795[22]
  i794.maxParticles = i795[23]
  i794.emitterVelocityMode = i795[24]
  i794.stopAction = i795[25]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i796 = root || new pc.MinMaxCurve()
  var i797 = data
  i796.mode = i797[0]
  i796.curveMin = new pc.AnimationCurve( { keys_flow: i797[1] } )
  i796.curveMax = new pc.AnimationCurve( { keys_flow: i797[2] } )
  i796.curveMultiplier = i797[3]
  i796.constantMin = i797[4]
  i796.constantMax = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i798 = root || new pc.MinMaxGradient()
  var i799 = data
  i798.mode = i799[0]
  i798.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i799[1], i798.gradientMin)
  i798.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i799[2], i798.gradientMax)
  i798.colorMin = new pc.Color(i799[3], i799[4], i799[5], i799[6])
  i798.colorMax = new pc.Color(i799[7], i799[8], i799[9], i799[10])
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i801 = data
  i800.mode = i801[0]
  var i803 = i801[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i803[i + 0]) );
  }
  i800.colorKeys = i802
  var i805 = i801[2]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i805[i + 0]) );
  }
  i800.alphaKeys = i804
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemColorBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[1], i806.color)
  i806.range = new pc.Vec2( i807[2], i807[3] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i811 = data
  i810.color = new pc.Color(i811[0], i811[1], i811[2], i811[3])
  i810.time = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i815 = data
  i814.alpha = i815[0]
  i814.time = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemColorOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i817[1], i816.color)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemEmitter()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.rateOverTime)
  i818.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.rateOverDistance)
  var i821 = i819[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i821[i + 0]) );
  }
  i818.bursts = i820
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemBurst()
  var i825 = data
  i824.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[0], i824.count)
  i824.cycleCount = i825[1]
  i824.minCount = i825[2]
  i824.maxCount = i825[3]
  i824.repeatInterval = i825[4]
  i824.time = i825[5]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemRotationBySpeed()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  i826.range = new pc.Vec2( i827[5], i827[6] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemRotationOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemShape()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.shapeType = i831[1]
  i830.randomDirectionAmount = i831[2]
  i830.sphericalDirectionAmount = i831[3]
  i830.randomPositionAmount = i831[4]
  i830.alignToDirection = !!i831[5]
  i830.radius = i831[6]
  i830.radiusMode = i831[7]
  i830.radiusSpread = i831[8]
  i830.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[9], i830.radiusSpeed)
  i830.radiusThickness = i831[10]
  i830.angle = i831[11]
  i830.length = i831[12]
  i830.boxThickness = new pc.Vec3( i831[13], i831[14], i831[15] )
  i830.meshShapeType = i831[16]
  request.r(i831[17], i831[18], 0, i830, 'mesh')
  request.r(i831[19], i831[20], 0, i830, 'meshRenderer')
  request.r(i831[21], i831[22], 0, i830, 'skinnedMeshRenderer')
  i830.useMeshMaterialIndex = !!i831[23]
  i830.meshMaterialIndex = i831[24]
  i830.useMeshColors = !!i831[25]
  i830.normalOffset = i831[26]
  i830.arc = i831[27]
  i830.arcMode = i831[28]
  i830.arcSpread = i831[29]
  i830.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[30], i830.arcSpeed)
  i830.donutRadius = i831[31]
  i830.position = new pc.Vec3( i831[32], i831[33], i831[34] )
  i830.rotation = new pc.Vec3( i831[35], i831[36], i831[37] )
  i830.scale = new pc.Vec3( i831[38], i831[39], i831[40] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemSizeBySpeed()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  i832.range = new pc.Vec2( i833[5], i833[6] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemSizeOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.separateAxes = !!i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.mode = i837[1]
  i836.animation = i837[2]
  i836.numTilesX = i837[3]
  i836.numTilesY = i837[4]
  i836.useRandomRow = !!i837[5]
  i836.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[6], i836.frameOverTime)
  i836.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.startFrame)
  i836.cycleCount = i837[8]
  i836.rowIndex = i837[9]
  i836.flipU = i837[10]
  i836.flipV = i837[11]
  i836.spriteCount = i837[12]
  var i839 = i837[13]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sprites = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.radial)
  i842.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[5], i842.speedModifier)
  i842.space = i843[6]
  i842.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[7], i842.orbitalX)
  i842.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[8], i842.orbitalY)
  i842.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[9], i842.orbitalZ)
  i842.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[10], i842.orbitalOffsetX)
  i842.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[11], i842.orbitalOffsetY)
  i842.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[12], i842.orbitalOffsetZ)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemNoise()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.separateAxes = !!i845[1]
  i844.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.strengthX)
  i844.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.strengthY)
  i844.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[4], i844.strengthZ)
  i844.frequency = i845[5]
  i844.damping = !!i845[6]
  i844.octaveCount = i845[7]
  i844.octaveMultiplier = i845[8]
  i844.octaveScale = i845[9]
  i844.quality = i845[10]
  i844.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[11], i844.scrollSpeed)
  i844.scrollSpeedMultiplier = i845[12]
  i844.remapEnabled = !!i845[13]
  i844.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[14], i844.remapX)
  i844.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[15], i844.remapY)
  i844.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[16], i844.remapZ)
  i844.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[17], i844.positionAmount)
  i844.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[18], i844.rotationAmount)
  i844.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[19], i844.sizeAmount)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemInheritVelocity()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.mode = i847[1]
  i846.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.curve)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemForceOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[1], i848.x)
  i848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.y)
  i848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.z)
  i848.space = i849[4]
  i848.randomized = !!i849[5]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.limit)
  i850.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.limitX)
  i850.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.limitY)
  i850.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.limitZ)
  i850.dampen = i851[5]
  i850.separateAxes = !!i851[6]
  i850.space = i851[7]
  i850.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.drag)
  i850.multiplyDragByParticleSize = !!i851[9]
  i850.multiplyDragByParticleVelocity = !!i851[10]
  return i850
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i852 = root || request.c( 'StarExploreFX' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'tf')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i855 = data
  i854.pivot = new pc.Vec2( i855[0], i855[1] )
  i854.anchorMin = new pc.Vec2( i855[2], i855[3] )
  i854.anchorMax = new pc.Vec2( i855[4], i855[5] )
  i854.sizeDelta = new pc.Vec2( i855[6], i855[7] )
  i854.anchoredPosition3D = new pc.Vec3( i855[8], i855[9], i855[10] )
  i854.rotation = new pc.Quat(i855[11], i855[12], i855[13], i855[14])
  i854.scale = new pc.Vec3( i855[15], i855[16], i855[17] )
  return i854
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i856 = root || request.c( 'ClockTimer' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'fillImage')
  request.r(i857[2], i857[3], 0, i856, 'tf')
  i856.spawnZoomDuration = i857[4]
  i856.despawnZoomDuration = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i859 = data
  i858.cullTransparentMesh = !!i859[0]
  return i858
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Image' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_Sprite')
  i860.m_Type = i861[2]
  i860.m_PreserveAspect = !!i861[3]
  i860.m_FillCenter = !!i861[4]
  i860.m_FillMethod = i861[5]
  i860.m_FillAmount = i861[6]
  i860.m_FillClockwise = !!i861[7]
  i860.m_FillOrigin = i861[8]
  i860.m_UseSpriteMesh = !!i861[9]
  i860.m_PixelsPerUnitMultiplier = i861[10]
  request.r(i861[11], i861[12], 0, i860, 'm_Material')
  i860.m_Maskable = !!i861[13]
  i860.m_Color = new pc.Color(i861[14], i861[15], i861[16], i861[17])
  i860.m_RaycastTarget = !!i861[18]
  i860.m_RaycastPadding = new pc.Vec4( i861[19], i861[20], i861[21], i861[22] )
  return i860
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i862 = root || request.c( 'WaterSplash' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'tf')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.radius = i865[3]
  i864.enabled = !!i865[4]
  i864.isTrigger = !!i865[5]
  request.r(i865[6], i865[7], 0, i864, 'material')
  return i864
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i866 = root || request.c( 'ItemDraggable' )
  var i867 = data
  i866.isDraggable = !!i867[0]
  request.r(i867[1], i867[2], 0, i866, 'returnTransform')
  i866.setParentToReturnTransform = !!i867[3]
  i866.returnToStartOnDragFailed = !!i867[4]
  i866.returnToExactReturnTransformPosition = !!i867[5]
  i866.targetItemType = i867[6]
  request.r(i867[7], i867[8], 0, i866, 'item')
  i866.checkState = !!i867[9]
  request.r(i867[10], i867[11], 0, i866, 'shadowObject')
  i866.playReturnToStartFinishSound = !!i867[12]
  i866.returnToStartFinishFxType = i867[13]
  i866.spawnBreakHeartOnDropFail = !!i867[14]
  i866.playBeginDragSound = !!i867[15]
  i866.beginDragFxType = i867[16]
  i866.liftOffset = i867[17]
  i866.dragScaleMultiplier = i867[18]
  i866.dragScaleDuration = i867[19]
  i866.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i867[20], i866.onBeginDrag)
  i866.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i867[21], i866.onDropSuccess)
  i866.onDropFail = request.d('UnityEngine.Events.UnityEvent', i867[22], i866.onDropFail)
  i866.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i867[23], i866.onReturnToStartComplete)
  return i866
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i869 = data
  i868.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i869[0], i868.m_PersistentCalls)
  return i868
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i871 = data
  var i873 = i871[0]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.Events.PersistentCall', i873[i + 0]));
  }
  i870.m_Calls = i872
  return i870
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_Target')
  i876.m_TargetAssemblyTypeName = i877[2]
  i876.m_MethodName = i877[3]
  i876.m_Mode = i877[4]
  i876.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i877[5], i876.m_Arguments)
  i876.m_CallState = i877[6]
  return i876
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_ObjectArgument')
  i878.m_ObjectArgumentAssemblyTypeName = i879[2]
  i878.m_IntArgument = i879[3]
  i878.m_FloatArgument = i879[4]
  i878.m_StringArgument = i879[5]
  i878.m_BoolArgument = !!i879[6]
  return i878
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i880 = root || request.c( 'ItemMoveToTarget' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'defaultTarget')
  i880.duration = i881[2]
  i880.useAnimationCurve = !!i881[3]
  i880.moveCurve = new pc.AnimationCurve( { keys_flow: i881[4] } )
  i880.easeType = i881[5]
  i880.moveType = i881[6]
  i880.jumpPower = i881[7]
  i880.numJumps = i881[8]
  i880.rotate360DuringJump = !!i881[9]
  i880.flipRotate = !!i881[10]
  i880.angleRotate = i881[11]
  i880.scaleOnMove = !!i881[12]
  i880.endScaleMultiplier = i881[13]
  i880.setParentToTarget = !!i881[14]
  i880.onComplete = request.d('UnityEngine.Events.UnityEvent', i881[15], i880.onComplete)
  i880.lockInputWhileMoving = !!i881[16]
  i880.resetParentBeforeMove = !!i881[17]
  return i880
}

Deserializers["Paper"] = function (request, data, root) {
  var i882 = root || request.c( 'Paper' )
  var i883 = data
  i882.isUse = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'paper')
  request.r(i883[3], i883[4], 0, i882, 'paperTrash')
  request.r(i883[5], i883[6], 0, i882, 'itemDragRaycastTarget')
  request.r(i883[7], i883[8], 0, i882, 'curentCollider')
  i882.isDone = !!i883[9]
  i882.onProcess = !!i883[10]
  i882.requireMatchingTargetTypeForHandTut = !!i883[11]
  request.r(i883[12], i883[13], 0, i882, 'itemDraggable')
  request.r(i883[14], i883[15], 0, i882, 'itemClickable')
  request.r(i883[16], i883[17], 0, i882, 'itemStirring')
  request.r(i883[18], i883[19], 0, i882, 'itemKnifeSpriteMaskCutter')
  request.r(i883[20], i883[21], 0, i882, 'itemSpriteMaskPainter')
  request.r(i883[22], i883[23], 0, i882, 'itemDragSpriteMaskPainter')
  request.r(i883[24], i883[25], 0, i882, 'itemMoveToTarget')
  request.r(i883[26], i883[27], 0, i882, 'animator')
  i882.itemType = i883[28]
  request.r(i883[29], i883[30], 0, i882, 'spriteRenderer')
  i882.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i883[31], i882.onKnifeIn)
  request.r(i883[32], i883[33], 0, i882, 'knifePos')
  i882.heartEffectScale = i883[34]
  i882.breakHeartEffectScale = i883[35]
  i882.blinkEffectScale = i883[36]
  i882.mergeEffectScale = i883[37]
  i882.playMoveToTargetFinishSound = !!i883[38]
  i882.moveToTargetFinishFxType = i883[39]
  i882.fxSpawnZPos = i883[40]
  request.r(i883[41], i883[42], 0, i882, 'tf')
  return i882
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i884 = root || request.c( 'ItemDragRaycastTarget' )
  var i885 = data
  i884.targetToFind = i885[0]
  i884.targetItemTypeWhenHit = i885[1]
  i884.targetItemTypeOnDropFail = i885[2]
  request.r(i885[3], i885[4], 0, i884, 'raycastPoint')
  i884.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i885[5] )
  i884.rayDistance = i885[6]
  i884.updateMoveDefaultTarget = !!i885[7]
  i884.invokeOnlyWhenTargetChanged = !!i885[8]
  i884.targetChangeEnabled = !!i885[9]
  i884.restoreTargetOnDropFail = !!i885[10]
  i884.resetCurrentTargetOnNoHit = !!i885[11]
  i884.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i885[12], i884.onTargetFound)
  i884.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i885[13], i884.onTargetFoundWithItem)
  return i884
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'ItemRaycastTargetEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'animatorController')
  request.r(i889[2], i889[3], 0, i888, 'avatar')
  i888.updateMode = i889[4]
  i888.hasTransformHierarchy = !!i889[5]
  i888.applyRootMotion = !!i889[6]
  var i891 = i889[7]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.humanBones = i890
  i888.enabled = !!i889[8]
  return i888
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i894 = root || request.c( 'ItemSound' )
  var i895 = data
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i897 = data
  i896.name = i897[0]
  i896.index = i897[1]
  i896.startup = !!i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i899 = data
  i898.planeDistance = i899[0]
  i898.referencePixelsPerUnit = i899[1]
  i898.isFallbackOverlay = !!i899[2]
  i898.renderMode = i899[3]
  i898.renderOrder = i899[4]
  i898.sortingLayerName = i899[5]
  i898.sortingOrder = i899[6]
  i898.scaleFactor = i899[7]
  request.r(i899[8], i899[9], 0, i898, 'worldCamera')
  i898.overrideSorting = !!i899[10]
  i898.pixelPerfect = !!i899[11]
  i898.targetDisplay = i899[12]
  i898.overridePixelPerfect = !!i899[13]
  i898.enabled = !!i899[14]
  return i898
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i901 = data
  i900.m_UiScaleMode = i901[0]
  i900.m_ReferencePixelsPerUnit = i901[1]
  i900.m_ScaleFactor = i901[2]
  i900.m_ReferenceResolution = new pc.Vec2( i901[3], i901[4] )
  i900.m_ScreenMatchMode = i901[5]
  i900.m_MatchWidthOrHeight = i901[6]
  i900.m_PhysicalUnit = i901[7]
  i900.m_FallbackScreenDPI = i901[8]
  i900.m_DefaultSpriteDPI = i901[9]
  i900.m_DynamicPixelsPerUnit = i901[10]
  i900.m_PresetInfoIsWorld = !!i901[11]
  return i900
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i903 = data
  i902.m_IgnoreReversedGraphics = !!i903[0]
  i902.m_BlockingObjects = i903[1]
  i902.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i903[2] )
  return i902
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i905 = data
  i904.m_hasFontAssetChanged = !!i905[0]
  request.r(i905[1], i905[2], 0, i904, 'm_baseMaterial')
  i904.m_maskOffset = new pc.Vec4( i905[3], i905[4], i905[5], i905[6] )
  i904.m_text = i905[7]
  i904.m_isRightToLeft = !!i905[8]
  request.r(i905[9], i905[10], 0, i904, 'm_fontAsset')
  request.r(i905[11], i905[12], 0, i904, 'm_sharedMaterial')
  var i907 = i905[13]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.m_fontSharedMaterials = i906
  request.r(i905[14], i905[15], 0, i904, 'm_fontMaterial')
  var i909 = i905[16]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i904.m_fontMaterials = i908
  i904.m_fontColor32 = UnityEngine.Color32.ConstructColor(i905[17], i905[18], i905[19], i905[20])
  i904.m_fontColor = new pc.Color(i905[21], i905[22], i905[23], i905[24])
  i904.m_enableVertexGradient = !!i905[25]
  i904.m_colorMode = i905[26]
  i904.m_fontColorGradient = request.d('TMPro.VertexGradient', i905[27], i904.m_fontColorGradient)
  request.r(i905[28], i905[29], 0, i904, 'm_fontColorGradientPreset')
  request.r(i905[30], i905[31], 0, i904, 'm_spriteAsset')
  i904.m_tintAllSprites = !!i905[32]
  request.r(i905[33], i905[34], 0, i904, 'm_StyleSheet')
  i904.m_TextStyleHashCode = i905[35]
  i904.m_overrideHtmlColors = !!i905[36]
  i904.m_faceColor = UnityEngine.Color32.ConstructColor(i905[37], i905[38], i905[39], i905[40])
  i904.m_fontSize = i905[41]
  i904.m_fontSizeBase = i905[42]
  i904.m_fontWeight = i905[43]
  i904.m_enableAutoSizing = !!i905[44]
  i904.m_fontSizeMin = i905[45]
  i904.m_fontSizeMax = i905[46]
  i904.m_fontStyle = i905[47]
  i904.m_HorizontalAlignment = i905[48]
  i904.m_VerticalAlignment = i905[49]
  i904.m_textAlignment = i905[50]
  i904.m_characterSpacing = i905[51]
  i904.m_wordSpacing = i905[52]
  i904.m_lineSpacing = i905[53]
  i904.m_lineSpacingMax = i905[54]
  i904.m_paragraphSpacing = i905[55]
  i904.m_charWidthMaxAdj = i905[56]
  i904.m_TextWrappingMode = i905[57]
  i904.m_wordWrappingRatios = i905[58]
  i904.m_overflowMode = i905[59]
  request.r(i905[60], i905[61], 0, i904, 'm_linkedTextComponent')
  request.r(i905[62], i905[63], 0, i904, 'parentLinkedComponent')
  i904.m_enableKerning = !!i905[64]
  var i911 = i905[65]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(i911[i + 0]);
  }
  i904.m_ActiveFontFeatures = i910
  i904.m_enableExtraPadding = !!i905[66]
  i904.checkPaddingRequired = !!i905[67]
  i904.m_isRichText = !!i905[68]
  i904.m_parseCtrlCharacters = !!i905[69]
  i904.m_isOrthographic = !!i905[70]
  i904.m_isCullingEnabled = !!i905[71]
  i904.m_horizontalMapping = i905[72]
  i904.m_verticalMapping = i905[73]
  i904.m_uvLineOffset = i905[74]
  i904.m_geometrySortingOrder = i905[75]
  i904.m_IsTextObjectScaleStatic = !!i905[76]
  i904.m_VertexBufferAutoSizeReduction = !!i905[77]
  i904.m_useMaxVisibleDescender = !!i905[78]
  i904.m_pageToDisplay = i905[79]
  i904.m_margin = new pc.Vec4( i905[80], i905[81], i905[82], i905[83] )
  i904.m_isUsingLegacyAnimationComponent = !!i905[84]
  i904.m_isVolumetricText = !!i905[85]
  request.r(i905[86], i905[87], 0, i904, 'm_Material')
  i904.m_EmojiFallbackSupport = !!i905[88]
  i904.m_Maskable = !!i905[89]
  i904.m_Color = new pc.Color(i905[90], i905[91], i905[92], i905[93])
  i904.m_RaycastTarget = !!i905[94]
  i904.m_RaycastPadding = new pc.Vec4( i905[95], i905[96], i905[97], i905[98] )
  return i904
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.VertexGradient' )
  var i913 = data
  i912.topLeft = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.topRight = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.bottomLeft = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.bottomRight = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Button' )
  var i917 = data
  i916.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i917[0], i916.m_OnClick)
  i916.m_Navigation = request.d('UnityEngine.UI.Navigation', i917[1], i916.m_Navigation)
  i916.m_Transition = i917[2]
  i916.m_Colors = request.d('UnityEngine.UI.ColorBlock', i917[3], i916.m_Colors)
  i916.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i917[4], i916.m_SpriteState)
  i916.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i917[5], i916.m_AnimationTriggers)
  i916.m_Interactable = !!i917[6]
  request.r(i917[7], i917[8], 0, i916, 'm_TargetGraphic')
  return i916
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i919 = data
  i918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i919[0], i918.m_PersistentCalls)
  return i918
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i921 = data
  i920.m_Mode = i921[0]
  i920.m_WrapAround = !!i921[1]
  request.r(i921[2], i921[3], 0, i920, 'm_SelectOnUp')
  request.r(i921[4], i921[5], 0, i920, 'm_SelectOnDown')
  request.r(i921[6], i921[7], 0, i920, 'm_SelectOnLeft')
  request.r(i921[8], i921[9], 0, i920, 'm_SelectOnRight')
  return i920
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i923 = data
  i922.m_NormalColor = new pc.Color(i923[0], i923[1], i923[2], i923[3])
  i922.m_HighlightedColor = new pc.Color(i923[4], i923[5], i923[6], i923[7])
  i922.m_PressedColor = new pc.Color(i923[8], i923[9], i923[10], i923[11])
  i922.m_SelectedColor = new pc.Color(i923[12], i923[13], i923[14], i923[15])
  i922.m_DisabledColor = new pc.Color(i923[16], i923[17], i923[18], i923[19])
  i922.m_ColorMultiplier = i923[20]
  i922.m_FadeDuration = i923[21]
  return i922
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_HighlightedSprite')
  request.r(i925[2], i925[3], 0, i924, 'm_PressedSprite')
  request.r(i925[4], i925[5], 0, i924, 'm_SelectedSprite')
  request.r(i925[6], i925[7], 0, i924, 'm_DisabledSprite')
  return i924
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i927 = data
  i926.m_NormalTrigger = i927[0]
  i926.m_HighlightedTrigger = i927[1]
  i926.m_PressedTrigger = i927[2]
  i926.m_SelectedTrigger = i927[3]
  i926.m_DisabledTrigger = i927[4]
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
  var i941 = i937[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i936.audioClips = i940
  request.r(i937[2], i937[3], 0, i936, 'sound')
  return i936
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i944 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i945 = data
  i944.fxType = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'audioClip')
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'clip')
  request.r(i949[2], i949[3], 0, i948, 'outputAudioMixerGroup')
  i948.playOnAwake = !!i949[4]
  i948.loop = !!i949[5]
  i948.time = i949[6]
  i948.volume = i949[7]
  i948.pitch = i949[8]
  i948.enabled = !!i949[9]
  return i948
}

Deserializers["GameManager"] = function (request, data, root) {
  var i950 = root || request.c( 'GameManager' )
  var i951 = data
  i950.isPlaying = !!i951[0]
  i950.isTutorial = !!i951[1]
  i950.isGotoStore = !!i951[2]
  i950.isLoseGame = !!i951[3]
  i950.countMove = i951[4]
  i950.currentLayer = i951[5]
  request.r(i951[6], i951[7], 0, i950, 'trashCan')
  request.r(i951[8], i951[9], 0, i950, 'step1')
  request.r(i951[10], i951[11], 0, i950, 'paperBox')
  return i950
}

Deserializers["UIManager"] = function (request, data, root) {
  var i952 = root || request.c( 'UIManager' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'winUI')
  request.r(i953[2], i953[3], 0, i952, 'loseUI')
  request.r(i953[4], i953[5], 0, i952, 'tutorial')
  request.r(i953[6], i953[7], 0, i952, 'verticalUI')
  request.r(i953[8], i953[9], 0, i952, 'horizontalUI')
  request.r(i953[10], i953[11], 0, i952, 'downloadBtn')
  request.r(i953[12], i953[13], 0, i952, 'horizontalDownloadBtn')
  request.r(i953[14], i953[15], 0, i952, 'textAnim')
  i952.isGoogleBuild = !!i953[16]
  i952.screenWidth = i953[17]
  i952.screenHeight = i953[18]
  i952.scaleHeightOnWidth = i953[19]
  i952.isVertical = !!i953[20]
  i952.isScreenVertical = !!i953[21]
  request.r(i953[22], i953[23], 0, i952, 'cam')
  i952.verticalUIHeightOnWidthRatio = i953[24]
  i952.scaleCameraOnValidate = !!i953[25]
  i952.screenVerticalHeightOnWidthRatio = i953[26]
  i952.useContinuousScaling = !!i953[27]
  i952.baseOrthographicSize = i953[28]
  i952.baseAspect = i953[29]
  i952.landscapeSizeRatio = i953[30]
  i952.defaultPortraitSizeRatio = i953[31]
  var i955 = i953[32]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('ScreenScaleStep', i955[i + 0]));
  }
  i952.discreteScaleSteps = i954
  i952.usePerspectiveCamera = !!i953[33]
  request.r(i953[34], i953[35], 0, i952, 'perspectiveFocus')
  i952.perspectiveFocusDistance = i953[36]
  i952.perspectivePadding = i953[37]
  i952.fitRendererBounds = !!i953[38]
  request.r(i953[39], i953[40], 0, i952, 'boundsRoot')
  var i957 = i953[41]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i952.boundsRenderers = i956
  return i952
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i960 = root || request.c( 'ScreenScaleStep' )
  var i961 = data
  i960.heightOnWidthRatio = i961[0]
  i960.orthographicSize = i961[1]
  return i960
}

Deserializers["InputManager"] = function (request, data, root) {
  var i964 = root || request.c( 'InputManager' )
  var i965 = data
  i964.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i965[0] )
  i964.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i965[1] )
  i964.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i965[2] )
  i964.isDragging = !!i965[3]
  return i964
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i966 = root || request.c( 'HandTutManager' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.items = i968
  request.r(i967[1], i967[2], 0, i966, 'knife')
  request.r(i967[3], i967[4], 0, i966, 'knife2')
  request.r(i967[5], i967[6], 0, i966, 'handTutObject')
  request.r(i967[7], i967[8], 0, i966, 'tapToCookObject')
  request.r(i967[9], i967[10], 0, i966, 'oilItem')
  request.r(i967[11], i967[12], 0, i966, 'stoveToggleEvent')
  request.r(i967[13], i967[14], 0, i966, 'waterToggleEvent')
  request.r(i967[15], i967[16], 0, i966, 'sinkBlock')
  var i971 = i967[17]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i966.itemsInWater = i970
  i966.noDelayItemCount = i967[18]
  i966.breakHeartNoDelayThreshold = i967[19]
  i966.shortIdleDelay = i967[20]
  i966.maxHandTutShowCount = i967[21]
  i966.showSinkWaterTutorialOnStart = !!i967[22]
  i966.waitForBowlIntro = !!i967[23]
  i966.idleDelay = i967[24]
  i966.firstHandTutDelay = i967[25]
  i966.phaseHandTutDelay = i967[26]
  i966.moveDuration = i967[27]
  i966.dragFadeDuration = i967[28]
  i966.clickScaleDuration = i967[29]
  i966.waitAtEndDuration = i967[30]
  i966.handZPosition = i967[31]
  i966.clickScaleMultiplier = i967[32]
  i966.moveEase = i967[33]
  return i966
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i976 = root || request.c( 'SortChildByZPos' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'transformToSort')
  var i979 = i977[2]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.childrenToSort = i978
  i976.zOffset = i977[3]
  i976.baseZ = i977[4]
  return i976
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i982 = root || request.c( 'PhaseManager' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('PhaseData', i985[i + 0]));
  }
  i982.phases = i984
  i982.transitionType = i983[1]
  i982.transitionDuration = i983[2]
  i982.delayBeforeNextPhase = i983[3]
  i982.offScreenLeftX = i983[4]
  i982.offScreenRightX = i983[5]
  i982.offScreenBottomY = i983[6]
  i982.offScreenTopY = i983[7]
  i982.centerScreenX = i983[8]
  request.r(i983[9], i983[10], 0, i982, 'phaseTransitionObject')
  i982.phaseTransitionObjectDuration = i983[11]
  i982.currentPhaseIndex = i983[12]
  i982.currentStepCount = i983[13]
  i982.isECPopup = !!i983[14]
  return i982
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i988 = root || request.c( 'PhaseData' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'phaseObject')
  i988.totalSteps = i989[2]
  i988.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i989[3], i988.onPhaseReady)
  return i988
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i990 = root || request.c( 'ItemTypeDoneManager' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i993[i + 0]));
  }
  i990.itemTypeGroups = i992
  return i990
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i996 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i997 = data
  i996.itemType = i997[0]
  var i999 = i997[1]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i996.items = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1001 = data
  i1000.aspect = i1001[0]
  i1000.orthographic = !!i1001[1]
  i1000.orthographicSize = i1001[2]
  i1000.backgroundColor = new pc.Color(i1001[3], i1001[4], i1001[5], i1001[6])
  i1000.nearClipPlane = i1001[7]
  i1000.farClipPlane = i1001[8]
  i1000.fieldOfView = i1001[9]
  i1000.depth = i1001[10]
  i1000.clearFlags = i1001[11]
  i1000.cullingMask = i1001[12]
  i1000.rect = i1001[13]
  request.r(i1001[14], i1001[15], 0, i1000, 'targetTexture')
  i1000.usePhysicalProperties = !!i1001[16]
  i1000.focalLength = i1001[17]
  i1000.sensorSize = new pc.Vec2( i1001[18], i1001[19] )
  i1000.lensShift = new pc.Vec2( i1001[20], i1001[21] )
  i1000.gateFit = i1001[22]
  i1000.commandBufferCount = i1001[23]
  i1000.cameraType = i1001[24]
  i1000.enabled = !!i1001[25]
  return i1000
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_FirstSelected')
  i1002.m_sendNavigationEvents = !!i1003[2]
  i1002.m_DragThreshold = i1003[3]
  return i1002
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1005 = data
  i1004.m_HorizontalAxis = i1005[0]
  i1004.m_VerticalAxis = i1005[1]
  i1004.m_SubmitButton = i1005[2]
  i1004.m_CancelButton = i1005[3]
  i1004.m_InputActionsPerSecond = i1005[4]
  i1004.m_RepeatDelay = i1005[5]
  i1004.m_ForceModuleActive = !!i1005[6]
  i1004.m_SendPointerHoverToParent = !!i1005[7]
  return i1004
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1006 = root || request.c( 'Ply_ToggleEvent' )
  var i1007 = data
  i1006.isOn = !!i1007[0]
  i1006.applyStateOnEnable = !!i1007[1]
  i1006.applyStateOnClick = !!i1007[2]
  request.r(i1007[3], i1007[4], 0, i1006, 'targetObject')
  i1006.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1007[5], i1006.onTurnOn)
  i1006.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1007[6], i1006.onTurnOff)
  return i1006
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i1008 = root || request.c( 'SinkBlock' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sink')
  i1008.startsInside = !!i1009[2]
  i1008.insideTargetType = i1009[3]
  request.r(i1009[4], i1009[5], 0, i1008, 'insideDefaultTarget')
  i1008.outsideTargetType = i1009[6]
  request.r(i1009[7], i1009[8], 0, i1008, 'outsideDefaultTarget')
  i1008.isDone = !!i1009[9]
  i1008.onProcess = !!i1009[10]
  i1008.requireMatchingTargetTypeForHandTut = !!i1009[11]
  request.r(i1009[12], i1009[13], 0, i1008, 'itemDraggable')
  request.r(i1009[14], i1009[15], 0, i1008, 'itemClickable')
  request.r(i1009[16], i1009[17], 0, i1008, 'itemStirring')
  request.r(i1009[18], i1009[19], 0, i1008, 'itemKnifeSpriteMaskCutter')
  request.r(i1009[20], i1009[21], 0, i1008, 'itemSpriteMaskPainter')
  request.r(i1009[22], i1009[23], 0, i1008, 'itemDragSpriteMaskPainter')
  request.r(i1009[24], i1009[25], 0, i1008, 'itemMoveToTarget')
  request.r(i1009[26], i1009[27], 0, i1008, 'animator')
  i1008.itemType = i1009[28]
  request.r(i1009[29], i1009[30], 0, i1008, 'spriteRenderer')
  i1008.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1009[31], i1008.onKnifeIn)
  request.r(i1009[32], i1009[33], 0, i1008, 'knifePos')
  i1008.heartEffectScale = i1009[34]
  i1008.breakHeartEffectScale = i1009[35]
  i1008.blinkEffectScale = i1009[36]
  i1008.mergeEffectScale = i1009[37]
  i1008.playMoveToTargetFinishSound = !!i1009[38]
  i1008.moveToTargetFinishFxType = i1009[39]
  i1008.fxSpawnZPos = i1009[40]
  request.r(i1009[41], i1009[42], 0, i1008, 'tf')
  return i1008
}

Deserializers["Sink"] = function (request, data, root) {
  var i1010 = root || request.c( 'Sink' )
  var i1011 = data
  i1010.isClose = !!i1011[0]
  i1010.isWaterDrop = !!i1011[1]
  i1010.isWaterIn = !!i1011[2]
  request.r(i1011[3], i1011[4], 0, i1010, 'waterSplashPos')
  request.r(i1011[5], i1011[6], 0, i1010, 'faucetAnimator')
  request.r(i1011[7], i1011[8], 0, i1010, 'basinAnimator')
  request.r(i1011[9], i1011[10], 0, i1010, 'waterDrop')
  request.r(i1011[11], i1011[12], 0, i1010, 'waterIn')
  request.r(i1011[13], i1011[14], 0, i1010, 'basinWaterRenderer')
  i1010.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fullWaterRect = UnityEngine.Rect.MinMaxRect(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.waterRiseDuration = i1011[23]
  i1010.waterFallDuration = i1011[24]
  i1010.waterRiseEase = i1011[25]
  i1010.waterFallEase = i1011[26]
  i1010.drawWaterRects = !!i1011[27]
  i1010.emptyRectColor = new pc.Color(i1011[28], i1011[29], i1011[30], i1011[31])
  i1010.fullRectColor = new pc.Color(i1011[32], i1011[33], i1011[34], i1011[35])
  request.r(i1011[36], i1011[37], 0, i1010, 'waterDropTransform')
  i1010.emptyWaterDropPoint = new pc.Vec3( i1011[38], i1011[39], i1011[40] )
  i1010.fullWaterDropPoint = new pc.Vec3( i1011[41], i1011[42], i1011[43] )
  i1010.drawWaterDropPoints = !!i1011[44]
  i1010.waterDropPointRadius = i1011[45]
  i1010.emptyWaterDropPointColor = new pc.Color(i1011[46], i1011[47], i1011[48], i1011[49])
  i1010.fullWaterDropPointColor = new pc.Color(i1011[50], i1011[51], i1011[52], i1011[53])
  var i1013 = i1011[54]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 1, i1012, '')
  }
  i1010.inWaterItems = i1012
  i1010.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i1011[55], i1010.onWaterIn)
  i1010.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i1011[56], i1010.onNoWaterIn)
  i1010.isDone = !!i1011[57]
  i1010.onProcess = !!i1011[58]
  i1010.requireMatchingTargetTypeForHandTut = !!i1011[59]
  request.r(i1011[60], i1011[61], 0, i1010, 'itemDraggable')
  request.r(i1011[62], i1011[63], 0, i1010, 'itemClickable')
  request.r(i1011[64], i1011[65], 0, i1010, 'itemStirring')
  request.r(i1011[66], i1011[67], 0, i1010, 'itemKnifeSpriteMaskCutter')
  request.r(i1011[68], i1011[69], 0, i1010, 'itemSpriteMaskPainter')
  request.r(i1011[70], i1011[71], 0, i1010, 'itemDragSpriteMaskPainter')
  request.r(i1011[72], i1011[73], 0, i1010, 'itemMoveToTarget')
  request.r(i1011[74], i1011[75], 0, i1010, 'animator')
  i1010.itemType = i1011[76]
  request.r(i1011[77], i1011[78], 0, i1010, 'spriteRenderer')
  i1010.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1011[79], i1010.onKnifeIn)
  request.r(i1011[80], i1011[81], 0, i1010, 'knifePos')
  i1010.heartEffectScale = i1011[82]
  i1010.breakHeartEffectScale = i1011[83]
  i1010.blinkEffectScale = i1011[84]
  i1010.mergeEffectScale = i1011[85]
  i1010.playMoveToTargetFinishSound = !!i1011[86]
  i1010.moveToTargetFinishFxType = i1011[87]
  i1010.fxSpawnZPos = i1011[88]
  request.r(i1011[89], i1011[90], 0, i1010, 'tf')
  i1010.waterState = i1011[91]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1015 = data
  i1014.center = new pc.Vec3( i1015[0], i1015[1], i1015[2] )
  i1014.size = new pc.Vec3( i1015[3], i1015[4], i1015[5] )
  i1014.enabled = !!i1015[6]
  i1014.isTrigger = !!i1015[7]
  request.r(i1015[8], i1015[9], 0, i1014, 'material')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1017 = data
  i1016.frontSortingLayerID = i1017[0]
  i1016.frontSortingOrder = i1017[1]
  i1016.backSortingLayerID = i1017[2]
  i1016.backSortingOrder = i1017[3]
  i1016.alphaCutoff = i1017[4]
  request.r(i1017[5], i1017[6], 0, i1016, 'sprite')
  i1016.tileMode = i1017[7]
  i1016.isCustomRangeActive = !!i1017[8]
  i1016.spriteSortPoint = i1017[9]
  i1016.enabled = !!i1017[10]
  request.r(i1017[11], i1017[12], 0, i1016, 'sharedMaterial')
  var i1019 = i1017[13]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1016.sharedMaterials = i1018
  i1016.receiveShadows = !!i1017[14]
  i1016.shadowCastingMode = i1017[15]
  i1016.sortingLayerID = i1017[16]
  i1016.sortingOrder = i1017[17]
  i1016.lightmapIndex = i1017[18]
  i1016.lightmapSceneIndex = i1017[19]
  i1016.lightmapScaleOffset = new pc.Vec4( i1017[20], i1017[21], i1017[22], i1017[23] )
  i1016.lightProbeUsage = i1017[24]
  i1016.reflectionProbeUsage = i1017[25]
  return i1016
}

Deserializers["Item"] = function (request, data, root) {
  var i1020 = root || request.c( 'Item' )
  var i1021 = data
  i1020.isDone = !!i1021[0]
  i1020.onProcess = !!i1021[1]
  i1020.requireMatchingTargetTypeForHandTut = !!i1021[2]
  request.r(i1021[3], i1021[4], 0, i1020, 'itemDraggable')
  request.r(i1021[5], i1021[6], 0, i1020, 'itemClickable')
  request.r(i1021[7], i1021[8], 0, i1020, 'itemStirring')
  request.r(i1021[9], i1021[10], 0, i1020, 'itemKnifeSpriteMaskCutter')
  request.r(i1021[11], i1021[12], 0, i1020, 'itemSpriteMaskPainter')
  request.r(i1021[13], i1021[14], 0, i1020, 'itemDragSpriteMaskPainter')
  request.r(i1021[15], i1021[16], 0, i1020, 'itemMoveToTarget')
  request.r(i1021[17], i1021[18], 0, i1020, 'animator')
  i1020.itemType = i1021[19]
  request.r(i1021[20], i1021[21], 0, i1020, 'spriteRenderer')
  i1020.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1021[22], i1020.onKnifeIn)
  request.r(i1021[23], i1021[24], 0, i1020, 'knifePos')
  i1020.heartEffectScale = i1021[25]
  i1020.breakHeartEffectScale = i1021[26]
  i1020.blinkEffectScale = i1021[27]
  i1020.mergeEffectScale = i1021[28]
  i1020.playMoveToTargetFinishSound = !!i1021[29]
  i1020.moveToTargetFinishFxType = i1021[30]
  i1020.fxSpawnZPos = i1021[31]
  request.r(i1021[32], i1021[33], 0, i1020, 'tf')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1023 = data
  i1022.center = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.radius = i1023[3]
  i1022.height = i1023[4]
  i1022.direction = i1023[5]
  i1022.enabled = !!i1023[6]
  i1022.isTrigger = !!i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'material')
  return i1022
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i1024 = root || request.c( 'CuttingBoard' )
  var i1025 = data
  i1024.punchScale = new pc.Vec3( i1025[0], i1025[1], i1025[2] )
  i1024.punchDuration = i1025[3]
  i1024.isDone = !!i1025[4]
  i1024.onProcess = !!i1025[5]
  i1024.requireMatchingTargetTypeForHandTut = !!i1025[6]
  request.r(i1025[7], i1025[8], 0, i1024, 'itemDraggable')
  request.r(i1025[9], i1025[10], 0, i1024, 'itemClickable')
  request.r(i1025[11], i1025[12], 0, i1024, 'itemStirring')
  request.r(i1025[13], i1025[14], 0, i1024, 'itemKnifeSpriteMaskCutter')
  request.r(i1025[15], i1025[16], 0, i1024, 'itemSpriteMaskPainter')
  request.r(i1025[17], i1025[18], 0, i1024, 'itemDragSpriteMaskPainter')
  request.r(i1025[19], i1025[20], 0, i1024, 'itemMoveToTarget')
  request.r(i1025[21], i1025[22], 0, i1024, 'animator')
  i1024.itemType = i1025[23]
  request.r(i1025[24], i1025[25], 0, i1024, 'spriteRenderer')
  i1024.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1025[26], i1024.onKnifeIn)
  request.r(i1025[27], i1025[28], 0, i1024, 'knifePos')
  i1024.heartEffectScale = i1025[29]
  i1024.breakHeartEffectScale = i1025[30]
  i1024.blinkEffectScale = i1025[31]
  i1024.mergeEffectScale = i1025[32]
  i1024.playMoveToTargetFinishSound = !!i1025[33]
  i1024.moveToTargetFinishFxType = i1025[34]
  i1024.fxSpawnZPos = i1025[35]
  request.r(i1025[36], i1025[37], 0, i1024, 'tf')
  return i1024
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1026 = root || request.c( 'ItemDragChildRotator' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'rotateTarget')
  i1026.dragEulerAngles = new pc.Vec3( i1027[2], i1027[3], i1027[4] )
  i1026.useLocalRotation = !!i1027[5]
  i1026.rotateRelative = !!i1027[6]
  i1026.rotateDuration = i1027[7]
  i1026.rotateEase = i1027[8]
  i1026.rotateMode = i1027[9]
  return i1026
}

Deserializers["Knife"] = function (request, data, root) {
  var i1028 = root || request.c( 'Knife' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'knifeIdle')
  request.r(i1029[2], i1029[3], 0, i1028, 'knifeOnDrag')
  i1028.knifeOnDragRotationOffset = new pc.Vec3( i1029[4], i1029[5], i1029[6] )
  i1028.knifeOnDragRotateDuration = i1029[7]
  i1028.knifeOnDragRotateEase = i1029[8]
  i1028.isDone = !!i1029[9]
  i1028.onProcess = !!i1029[10]
  i1028.requireMatchingTargetTypeForHandTut = !!i1029[11]
  request.r(i1029[12], i1029[13], 0, i1028, 'itemDraggable')
  request.r(i1029[14], i1029[15], 0, i1028, 'itemClickable')
  request.r(i1029[16], i1029[17], 0, i1028, 'itemStirring')
  request.r(i1029[18], i1029[19], 0, i1028, 'itemKnifeSpriteMaskCutter')
  request.r(i1029[20], i1029[21], 0, i1028, 'itemSpriteMaskPainter')
  request.r(i1029[22], i1029[23], 0, i1028, 'itemDragSpriteMaskPainter')
  request.r(i1029[24], i1029[25], 0, i1028, 'itemMoveToTarget')
  request.r(i1029[26], i1029[27], 0, i1028, 'animator')
  i1028.itemType = i1029[28]
  request.r(i1029[29], i1029[30], 0, i1028, 'spriteRenderer')
  i1028.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1029[31], i1028.onKnifeIn)
  request.r(i1029[32], i1029[33], 0, i1028, 'knifePos')
  i1028.heartEffectScale = i1029[34]
  i1028.breakHeartEffectScale = i1029[35]
  i1028.blinkEffectScale = i1029[36]
  i1028.mergeEffectScale = i1029[37]
  i1028.playMoveToTargetFinishSound = !!i1029[38]
  i1028.moveToTargetFinishFxType = i1029[39]
  i1028.fxSpawnZPos = i1029[40]
  request.r(i1029[41], i1029[42], 0, i1028, 'tf')
  return i1028
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1030 = root || request.c( 'ItemClickable' )
  var i1031 = data
  i1030.requiredClicks = i1031[0]
  i1030.infiniteClick = !!i1031[1]
  i1030.canClick = !!i1031[2]
  i1030.disableAfterClick = !!i1031[3]
  i1030.onClick = request.d('UnityEngine.Events.UnityEvent', i1031[4], i1030.onClick)
  var i1033 = i1031[5]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('UnityEngine.Events.UnityEvent', i1033[i + 0]));
  }
  i1030.sequentialOnClicks = i1032
  i1030.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1031[6], i1030.onClickComplete)
  return i1030
}

Deserializers["ItemWithTrash"] = function (request, data, root) {
  var i1036 = root || request.c( 'ItemWithTrash' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.requiredItems = i1038
  request.r(i1037[1], i1037[2], 0, i1036, 'nextItem')
  var i1041 = i1037[3]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1036.trashObjects = i1040
  i1036.isTrashItem = !!i1037[4]
  i1036.isDone = !!i1037[5]
  i1036.onProcess = !!i1037[6]
  i1036.requireMatchingTargetTypeForHandTut = !!i1037[7]
  request.r(i1037[8], i1037[9], 0, i1036, 'itemDraggable')
  request.r(i1037[10], i1037[11], 0, i1036, 'itemClickable')
  request.r(i1037[12], i1037[13], 0, i1036, 'itemStirring')
  request.r(i1037[14], i1037[15], 0, i1036, 'itemKnifeSpriteMaskCutter')
  request.r(i1037[16], i1037[17], 0, i1036, 'itemSpriteMaskPainter')
  request.r(i1037[18], i1037[19], 0, i1036, 'itemDragSpriteMaskPainter')
  request.r(i1037[20], i1037[21], 0, i1036, 'itemMoveToTarget')
  request.r(i1037[22], i1037[23], 0, i1036, 'animator')
  i1036.itemType = i1037[24]
  request.r(i1037[25], i1037[26], 0, i1036, 'spriteRenderer')
  i1036.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1037[27], i1036.onKnifeIn)
  request.r(i1037[28], i1037[29], 0, i1036, 'knifePos')
  i1036.heartEffectScale = i1037[30]
  i1036.breakHeartEffectScale = i1037[31]
  i1036.blinkEffectScale = i1037[32]
  i1036.mergeEffectScale = i1037[33]
  i1036.playMoveToTargetFinishSound = !!i1037[34]
  i1036.moveToTargetFinishFxType = i1037[35]
  i1036.fxSpawnZPos = i1037[36]
  request.r(i1037[37], i1037[38], 0, i1036, 'tf')
  return i1036
}

Deserializers["OilFood"] = function (request, data, root) {
  var i1046 = root || request.c( 'OilFood' )
  var i1047 = data
  i1046.isOilOnce = !!i1047[0]
  i1046.isDone = !!i1047[1]
  i1046.onProcess = !!i1047[2]
  i1046.requireMatchingTargetTypeForHandTut = !!i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'itemDraggable')
  request.r(i1047[6], i1047[7], 0, i1046, 'itemClickable')
  request.r(i1047[8], i1047[9], 0, i1046, 'itemStirring')
  request.r(i1047[10], i1047[11], 0, i1046, 'itemKnifeSpriteMaskCutter')
  request.r(i1047[12], i1047[13], 0, i1046, 'itemSpriteMaskPainter')
  request.r(i1047[14], i1047[15], 0, i1046, 'itemDragSpriteMaskPainter')
  request.r(i1047[16], i1047[17], 0, i1046, 'itemMoveToTarget')
  request.r(i1047[18], i1047[19], 0, i1046, 'animator')
  i1046.itemType = i1047[20]
  request.r(i1047[21], i1047[22], 0, i1046, 'spriteRenderer')
  i1046.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1047[23], i1046.onKnifeIn)
  request.r(i1047[24], i1047[25], 0, i1046, 'knifePos')
  i1046.heartEffectScale = i1047[26]
  i1046.breakHeartEffectScale = i1047[27]
  i1046.blinkEffectScale = i1047[28]
  i1046.mergeEffectScale = i1047[29]
  i1046.playMoveToTargetFinishSound = !!i1047[30]
  i1046.moveToTargetFinishFxType = i1047[31]
  i1046.fxSpawnZPos = i1047[32]
  request.r(i1047[33], i1047[34], 0, i1046, 'tf')
  return i1046
}

Deserializers["OilBrush"] = function (request, data, root) {
  var i1048 = root || request.c( 'OilBrush' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('OilFood')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1048.oilFoods = i1050
  i1048.targetToFind = i1049[1]
  i1048.targetItemTypeWhenHit = i1049[2]
  i1048.targetItemTypeOnDropFail = i1049[3]
  request.r(i1049[4], i1049[5], 0, i1048, 'raycastPoint')
  i1048.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1049[6] )
  i1048.rayDistance = i1049[7]
  i1048.updateMoveDefaultTarget = !!i1049[8]
  i1048.invokeOnlyWhenTargetChanged = !!i1049[9]
  i1048.targetChangeEnabled = !!i1049[10]
  i1048.restoreTargetOnDropFail = !!i1049[11]
  i1048.resetCurrentTargetOnNoHit = !!i1049[12]
  i1048.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i1049[13], i1048.onTargetFound)
  i1048.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i1049[14], i1048.onTargetFoundWithItem)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1055 = data
  i1054.ambientIntensity = i1055[0]
  i1054.reflectionIntensity = i1055[1]
  i1054.ambientMode = i1055[2]
  i1054.ambientLight = new pc.Color(i1055[3], i1055[4], i1055[5], i1055[6])
  i1054.ambientSkyColor = new pc.Color(i1055[7], i1055[8], i1055[9], i1055[10])
  i1054.ambientGroundColor = new pc.Color(i1055[11], i1055[12], i1055[13], i1055[14])
  i1054.ambientEquatorColor = new pc.Color(i1055[15], i1055[16], i1055[17], i1055[18])
  i1054.fogColor = new pc.Color(i1055[19], i1055[20], i1055[21], i1055[22])
  i1054.fogEndDistance = i1055[23]
  i1054.fogStartDistance = i1055[24]
  i1054.fogDensity = i1055[25]
  i1054.fog = !!i1055[26]
  request.r(i1055[27], i1055[28], 0, i1054, 'skybox')
  i1054.fogMode = i1055[29]
  var i1057 = i1055[30]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1057[i + 0]) );
  }
  i1054.lightmaps = i1056
  i1054.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1055[31], i1054.lightProbes)
  i1054.lightmapsMode = i1055[32]
  i1054.mixedBakeMode = i1055[33]
  i1054.environmentLightingMode = i1055[34]
  i1054.ambientProbe = new pc.SphericalHarmonicsL2(i1055[35])
  i1054.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1055[36])
  i1054.useReferenceAmbientProbe = !!i1055[37]
  request.r(i1055[38], i1055[39], 0, i1054, 'customReflection')
  request.r(i1055[40], i1055[41], 0, i1054, 'defaultReflection')
  i1054.defaultReflectionMode = i1055[42]
  i1054.defaultReflectionResolution = i1055[43]
  i1054.sunLightObjectId = i1055[44]
  i1054.pixelLightCount = i1055[45]
  i1054.defaultReflectionHDR = !!i1055[46]
  i1054.hasLightDataAsset = !!i1055[47]
  i1054.hasManualGenerate = !!i1055[48]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'lightmapColor')
  request.r(i1061[2], i1061[3], 0, i1060, 'lightmapDirection')
  request.r(i1061[4], i1061[5], 0, i1060, 'shadowMask')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1062 = root || new UnityEngine.LightProbes()
  var i1063 = data
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1073[i + 0]));
  }
  i1070.ShaderCompilationErrors = i1072
  i1070.name = i1071[1]
  i1070.guid = i1071[2]
  var i1075 = i1071[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.shaderDefinedKeywords = i1074
  var i1077 = i1071[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1077[i + 0]) );
  }
  i1070.passes = i1076
  var i1079 = i1071[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1079[i + 0]) );
  }
  i1070.usePasses = i1078
  var i1081 = i1071[6]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1081[i + 0]) );
  }
  i1070.defaultParameterValues = i1080
  request.r(i1071[7], i1071[8], 0, i1070, 'unityFallbackShader')
  i1070.readDepth = !!i1071[9]
  i1070.hasDepthOnlyPass = !!i1071[10]
  i1070.isCreatedByShaderGraph = !!i1071[11]
  i1070.disableBatching = !!i1071[12]
  i1070.compiled = !!i1071[13]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1085 = data
  i1084.shaderName = i1085[0]
  i1084.errorMessage = i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1090 = root || new pc.UnityShaderPass()
  var i1091 = data
  i1090.id = i1091[0]
  i1090.subShaderIndex = i1091[1]
  i1090.name = i1091[2]
  i1090.passType = i1091[3]
  i1090.grabPassTextureName = i1091[4]
  i1090.usePass = !!i1091[5]
  i1090.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[6], i1090.zTest)
  i1090.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[7], i1090.zWrite)
  i1090.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[8], i1090.culling)
  i1090.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1091[9], i1090.blending)
  i1090.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1091[10], i1090.alphaBlending)
  i1090.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[11], i1090.colorWriteMask)
  i1090.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[12], i1090.offsetUnits)
  i1090.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[13], i1090.offsetFactor)
  i1090.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[14], i1090.stencilRef)
  i1090.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[15], i1090.stencilReadMask)
  i1090.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[16], i1090.stencilWriteMask)
  i1090.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[17], i1090.stencilOp)
  i1090.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[18], i1090.stencilOpFront)
  i1090.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[19], i1090.stencilOpBack)
  var i1093 = i1091[20]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1093[i + 0]) );
  }
  i1090.tags = i1092
  var i1095 = i1091[21]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1090.passDefinedKeywords = i1094
  var i1097 = i1091[22]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1097[i + 0]) );
  }
  i1090.passDefinedKeywordGroups = i1096
  var i1099 = i1091[23]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1099[i + 0]) );
  }
  i1090.variants = i1098
  var i1101 = i1091[24]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1101[i + 0]) );
  }
  i1090.excludedVariants = i1100
  i1090.hasDepthReader = !!i1091[25]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1103 = data
  i1102.val = i1103[0]
  i1102.name = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1105 = data
  i1104.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[0], i1104.src)
  i1104.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[1], i1104.dst)
  i1104.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[2], i1104.op)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1107 = data
  i1106.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[0], i1106.pass)
  i1106.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[1], i1106.fail)
  i1106.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[2], i1106.zFail)
  i1106.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[3], i1106.comp)
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.value = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1115 = data
  var i1117 = i1115[0]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1114.keywords = i1116
  i1114.hasDiscard = !!i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1121 = data
  i1120.passId = i1121[0]
  i1120.subShaderIndex = i1121[1]
  var i1123 = i1121[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1120.keywords = i1122
  i1120.vertexProgram = i1121[3]
  i1120.fragmentProgram = i1121[4]
  i1120.exportedForWebGl2 = !!i1121[5]
  i1120.readDepth = !!i1121[6]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'shader')
  i1126.pass = i1127[2]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.type = i1131[1]
  i1130.value = new pc.Vec4( i1131[2], i1131[3], i1131[4], i1131[5] )
  i1130.textureValue = i1131[6]
  i1130.shaderPropertyFlag = i1131[7]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1133 = data
  i1132.name = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'texture')
  i1132.aabb = i1133[3]
  i1132.vertices = i1133[4]
  i1132.triangles = i1133[5]
  i1132.textureRect = UnityEngine.Rect.MinMaxRect(i1133[6], i1133[7], i1133[8], i1133[9])
  i1132.packedRect = UnityEngine.Rect.MinMaxRect(i1133[10], i1133[11], i1133[12], i1133[13])
  i1132.border = new pc.Vec4( i1133[14], i1133[15], i1133[16], i1133[17] )
  i1132.transparency = i1133[18]
  i1132.bounds = i1133[19]
  i1132.pixelsPerUnit = i1133[20]
  i1132.textureWidth = i1133[21]
  i1132.textureHeight = i1133[22]
  i1132.nativeSize = new pc.Vec2( i1133[23], i1133[24] )
  i1132.pivot = new pc.Vec2( i1133[25], i1133[26] )
  i1132.textureRectOffset = new pc.Vec2( i1133[27], i1133[28] )
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1135 = data
  i1134.name = i1135[0]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.wrapMode = i1137[1]
  i1136.isLooping = !!i1137[2]
  i1136.length = i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1139[i + 0]) );
  }
  i1136.curves = i1138
  var i1141 = i1137[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1141[i + 0]) );
  }
  i1136.events = i1140
  i1136.halfPrecision = !!i1137[6]
  i1136._frameRate = i1137[7]
  i1136.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1137[8], i1136.localBounds)
  i1136.hasMuscleCurves = !!i1137[9]
  var i1143 = i1137[10]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1136.clipMuscleConstant = i1142
  i1136.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1137[11], i1136.clipBindingConstant)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1147 = data
  i1146.path = i1147[0]
  i1146.hash = i1147[1]
  i1146.componentType = i1147[2]
  i1146.property = i1147[3]
  i1146.keys = i1147[4]
  var i1149 = i1147[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1149[i + 0]) );
  }
  i1146.objectReferenceKeys = i1148
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1153 = data
  i1152.time = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'value')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1157 = data
  i1156.functionName = i1157[0]
  i1156.floatParameter = i1157[1]
  i1156.intParameter = i1157[2]
  i1156.stringParameter = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'objectReferenceParameter')
  i1156.time = i1157[6]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1159 = data
  i1158.center = new pc.Vec3( i1159[0], i1159[1], i1159[2] )
  i1158.extends = new pc.Vec3( i1159[3], i1159[4], i1159[5] )
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.genericBindings = i1164
  var i1167 = i1163[1]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1162.pptrCurveMapping = i1166
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1169 = data
  i1168.name = i1169[0]
  var i1171 = i1169[1]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1171[i + 0]) );
  }
  i1168.layers = i1170
  var i1173 = i1169[2]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1173[i + 0]) );
  }
  i1168.parameters = i1172
  i1168.animationClips = i1169[3]
  i1168.avatarUnsupported = i1169[4]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.defaultWeight = i1177[1]
  i1176.blendingMode = i1177[2]
  i1176.avatarMask = i1177[3]
  i1176.syncedLayerIndex = i1177[4]
  i1176.syncedLayerAffectsTiming = !!i1177[5]
  i1176.syncedLayers = i1177[6]
  i1176.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1177[7], i1176.stateMachine)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  i1178.path = i1179[2]
  var i1181 = i1179[3]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1181[i + 0]) );
  }
  i1178.states = i1180
  var i1183 = i1179[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1183[i + 0]) );
  }
  i1178.machines = i1182
  var i1185 = i1179[5]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1185[i + 0]) );
  }
  i1178.entryStateTransitions = i1184
  var i1187 = i1179[6]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1187[i + 0]) );
  }
  i1178.exitStateTransitions = i1186
  var i1189 = i1179[7]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1178.anyStateTransitions = i1188
  i1178.defaultStateId = i1179[8]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1193 = data
  i1192.id = i1193[0]
  i1192.name = i1193[1]
  i1192.cycleOffset = i1193[2]
  i1192.cycleOffsetParameter = i1193[3]
  i1192.cycleOffsetParameterActive = !!i1193[4]
  i1192.mirror = !!i1193[5]
  i1192.mirrorParameter = i1193[6]
  i1192.mirrorParameterActive = !!i1193[7]
  i1192.motionId = i1193[8]
  i1192.nameHash = i1193[9]
  i1192.fullPathHash = i1193[10]
  i1192.speed = i1193[11]
  i1192.speedParameter = i1193[12]
  i1192.speedParameterActive = !!i1193[13]
  i1192.tag = i1193[14]
  i1192.tagHash = i1193[15]
  i1192.writeDefaultValues = !!i1193[16]
  var i1195 = i1193[17]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 2, i1194, '')
  }
  i1192.behaviours = i1194
  var i1197 = i1193[18]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1197[i + 0]) );
  }
  i1192.transitions = i1196
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1203 = data
  i1202.fullPath = i1203[0]
  i1202.canTransitionToSelf = !!i1203[1]
  i1202.duration = i1203[2]
  i1202.exitTime = i1203[3]
  i1202.hasExitTime = !!i1203[4]
  i1202.hasFixedDuration = !!i1203[5]
  i1202.interruptionSource = i1203[6]
  i1202.offset = i1203[7]
  i1202.orderedInterruption = !!i1203[8]
  i1202.destinationStateId = i1203[9]
  i1202.isExit = !!i1203[10]
  i1202.mute = !!i1203[11]
  i1202.solo = !!i1203[12]
  var i1205 = i1203[13]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1205[i + 0]) );
  }
  i1202.conditions = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1211 = data
  i1210.destinationStateId = i1211[0]
  i1210.isExit = !!i1211[1]
  i1210.mute = !!i1211[2]
  i1210.solo = !!i1211[3]
  var i1213 = i1211[4]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1213[i + 0]) );
  }
  i1210.conditions = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1217 = data
  i1216.defaultBool = !!i1217[0]
  i1216.defaultFloat = i1217[1]
  i1216.defaultInt = i1217[2]
  i1216.name = i1217[3]
  i1216.nameHash = i1217[4]
  i1216.type = i1217[5]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1221 = data
  i1220.mode = i1221[0]
  i1220.parameter = i1221[1]
  i1220.threshold = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.bytes64 = i1223[1]
  i1222.data = i1223[2]
  return i1222
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1225 = data
  i1224.normalStyle = i1225[0]
  i1224.normalSpacingOffset = i1225[1]
  i1224.boldStyle = i1225[2]
  i1224.boldSpacing = i1225[3]
  i1224.italicStyle = i1225[4]
  i1224.tabSize = i1225[5]
  request.r(i1225[6], i1225[7], 0, i1224, 'atlas')
  i1224.m_SourceFontFileGUID = i1225[8]
  i1224.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1225[9], i1224.m_CreationSettings)
  request.r(i1225[10], i1225[11], 0, i1224, 'm_SourceFontFile')
  i1224.m_SourceFontFilePath = i1225[12]
  i1224.m_AtlasPopulationMode = i1225[13]
  i1224.InternalDynamicOS = !!i1225[14]
  var i1227 = i1225[15]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.Glyph', i1227[i + 0]));
  }
  i1224.m_GlyphTable = i1226
  var i1229 = i1225[16]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.TMP_Character', i1229[i + 0]));
  }
  i1224.m_CharacterTable = i1228
  var i1231 = i1225[17]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 2, i1230, '')
  }
  i1224.m_AtlasTextures = i1230
  i1224.m_AtlasTextureIndex = i1225[18]
  i1224.m_IsMultiAtlasTexturesEnabled = !!i1225[19]
  i1224.m_GetFontFeatures = !!i1225[20]
  i1224.m_ClearDynamicDataOnBuild = !!i1225[21]
  i1224.m_AtlasWidth = i1225[22]
  i1224.m_AtlasHeight = i1225[23]
  i1224.m_AtlasPadding = i1225[24]
  i1224.m_AtlasRenderMode = i1225[25]
  var i1233 = i1225[26]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('UnityEngine.TextCore.GlyphRect', i1233[i + 0]));
  }
  i1224.m_UsedGlyphRects = i1232
  var i1235 = i1225[27]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.GlyphRect', i1235[i + 0]));
  }
  i1224.m_FreeGlyphRects = i1234
  i1224.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1225[28], i1224.m_FontFeatureTable)
  i1224.m_ShouldReimportFontFeatures = !!i1225[29]
  var i1237 = i1225[30]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1224.m_FallbackFontAssetTable = i1236
  var i1239 = i1225[31]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('TMPro.TMP_FontWeightPair', i1239[i + 0]) );
  }
  i1224.m_FontWeightTable = i1238
  var i1241 = i1225[32]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('TMPro.TMP_FontWeightPair', i1241[i + 0]) );
  }
  i1224.fontWeights = i1240
  i1224.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1225[33], i1224.m_fontInfo)
  var i1243 = i1225[34]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_Glyph', i1243[i + 0]));
  }
  i1224.m_glyphInfoList = i1242
  i1224.m_KerningTable = request.d('TMPro.KerningTable', i1225[35], i1224.m_KerningTable)
  var i1245 = i1225[36]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1224.fallbackFontAssets = i1244
  i1224.m_Version = i1225[37]
  i1224.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1225[38], i1224.m_FaceInfo)
  request.r(i1225[39], i1225[40], 0, i1224, 'm_Material')
  return i1224
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1247 = data
  i1246.sourceFontFileName = i1247[0]
  i1246.sourceFontFileGUID = i1247[1]
  i1246.faceIndex = i1247[2]
  i1246.pointSizeSamplingMode = i1247[3]
  i1246.pointSize = i1247[4]
  i1246.padding = i1247[5]
  i1246.paddingMode = i1247[6]
  i1246.packingMode = i1247[7]
  i1246.atlasWidth = i1247[8]
  i1246.atlasHeight = i1247[9]
  i1246.characterSetSelectionMode = i1247[10]
  i1246.characterSequence = i1247[11]
  i1246.referencedFontAssetGUID = i1247[12]
  i1246.referencedTextAssetGUID = i1247[13]
  i1246.fontStyle = i1247[14]
  i1246.fontStyleModifier = i1247[15]
  i1246.renderMode = i1247[16]
  i1246.includeFontFeatures = !!i1247[17]
  return i1246
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1251 = data
  i1250.m_Index = i1251[0]
  i1250.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1251[1], i1250.m_Metrics)
  i1250.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1251[2], i1250.m_GlyphRect)
  i1250.m_Scale = i1251[3]
  i1250.m_AtlasIndex = i1251[4]
  i1250.m_ClassDefinitionType = i1251[5]
  return i1250
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1253 = data
  i1252.m_Width = i1253[0]
  i1252.m_Height = i1253[1]
  i1252.m_HorizontalBearingX = i1253[2]
  i1252.m_HorizontalBearingY = i1253[3]
  i1252.m_HorizontalAdvance = i1253[4]
  return i1252
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1255 = data
  i1254.m_X = i1255[0]
  i1254.m_Y = i1255[1]
  i1254.m_Width = i1255[2]
  i1254.m_Height = i1255[3]
  return i1254
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_Character' )
  var i1259 = data
  i1258.m_ElementType = i1259[0]
  i1258.m_Unicode = i1259[1]
  i1258.m_GlyphIndex = i1259[2]
  i1258.m_Scale = i1259[3]
  return i1258
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.MultipleSubstitutionRecord', i1267[i + 0]));
  }
  i1264.m_MultipleSubstitutionRecords = i1266
  var i1269 = i1265[1]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.LigatureSubstitutionRecord', i1269[i + 0]));
  }
  i1264.m_LigatureSubstitutionRecords = i1268
  var i1271 = i1265[2]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1271[i + 0]));
  }
  i1264.m_GlyphPairAdjustmentRecords = i1270
  var i1273 = i1265[3]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1273[i + 0]));
  }
  i1264.m_MarkToBaseAdjustmentRecords = i1272
  var i1275 = i1265[4]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1275[i + 0]));
  }
  i1264.m_MarkToMarkAdjustmentRecords = i1274
  return i1264
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1279 = data
  i1278.m_TargetGlyphID = i1279[0]
  i1278.m_SubstituteGlyphIDs = i1279[1]
  return i1278
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1283 = data
  i1282.m_ComponentGlyphIDs = i1283[0]
  i1282.m_LigatureGlyphID = i1283[1]
  return i1282
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1287 = data
  i1286.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1287[0], i1286.m_FirstAdjustmentRecord)
  i1286.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1287[1], i1286.m_SecondAdjustmentRecord)
  i1286.m_FeatureLookupFlags = i1287[2]
  return i1286
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1291 = data
  i1290.m_BaseGlyphID = i1291[0]
  i1290.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1291[1], i1290.m_BaseGlyphAnchorPoint)
  i1290.m_MarkGlyphID = i1291[2]
  i1290.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1291[3], i1290.m_MarkPositionAdjustment)
  return i1290
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1295 = data
  i1294.m_BaseMarkGlyphID = i1295[0]
  i1294.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1295[1], i1294.m_BaseMarkGlyphAnchorPoint)
  i1294.m_CombiningMarkGlyphID = i1295[2]
  i1294.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1295[3], i1294.m_CombiningMarkPositionAdjustment)
  return i1294
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'regularTypeface')
  request.r(i1301[2], i1301[3], 0, i1300, 'italicTypeface')
  return i1300
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1303 = data
  i1302.Name = i1303[0]
  i1302.PointSize = i1303[1]
  i1302.Scale = i1303[2]
  i1302.CharacterCount = i1303[3]
  i1302.LineHeight = i1303[4]
  i1302.Baseline = i1303[5]
  i1302.Ascender = i1303[6]
  i1302.CapHeight = i1303[7]
  i1302.Descender = i1303[8]
  i1302.CenterLine = i1303[9]
  i1302.SuperscriptOffset = i1303[10]
  i1302.SubscriptOffset = i1303[11]
  i1302.SubSize = i1303[12]
  i1302.Underline = i1303[13]
  i1302.UnderlineThickness = i1303[14]
  i1302.strikethrough = i1303[15]
  i1302.strikethroughThickness = i1303[16]
  i1302.TabWidth = i1303[17]
  i1302.Padding = i1303[18]
  i1302.AtlasWidth = i1303[19]
  i1302.AtlasHeight = i1303[20]
  return i1302
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1307 = data
  i1306.id = i1307[0]
  i1306.x = i1307[1]
  i1306.y = i1307[2]
  i1306.width = i1307[3]
  i1306.height = i1307[4]
  i1306.xOffset = i1307[5]
  i1306.yOffset = i1307[6]
  i1306.xAdvance = i1307[7]
  i1306.scale = i1307[8]
  return i1306
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.KerningTable' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.KerningPair', i1311[i + 0]));
  }
  i1308.kerningPairs = i1310
  return i1308
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.KerningPair' )
  var i1315 = data
  i1314.xOffset = i1315[0]
  i1314.m_FirstGlyph = i1315[1]
  i1314.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1315[2], i1314.m_FirstGlyphAdjustments)
  i1314.m_SecondGlyph = i1315[3]
  i1314.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1315[4], i1314.m_SecondGlyphAdjustments)
  i1314.m_IgnoreSpacingAdjustments = !!i1315[5]
  return i1314
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1317 = data
  i1316.m_FaceIndex = i1317[0]
  i1316.m_FamilyName = i1317[1]
  i1316.m_StyleName = i1317[2]
  i1316.m_PointSize = i1317[3]
  i1316.m_Scale = i1317[4]
  i1316.m_UnitsPerEM = i1317[5]
  i1316.m_LineHeight = i1317[6]
  i1316.m_AscentLine = i1317[7]
  i1316.m_CapLine = i1317[8]
  i1316.m_MeanLine = i1317[9]
  i1316.m_Baseline = i1317[10]
  i1316.m_DescentLine = i1317[11]
  i1316.m_SuperscriptOffset = i1317[12]
  i1316.m_SuperscriptSize = i1317[13]
  i1316.m_SubscriptOffset = i1317[14]
  i1316.m_SubscriptSize = i1317[15]
  i1316.m_UnderlineOffset = i1317[16]
  i1316.m_UnderlineThickness = i1317[17]
  i1316.m_StrikethroughOffset = i1317[18]
  i1316.m_StrikethroughThickness = i1317[19]
  i1316.m_TabWidth = i1317[20]
  return i1316
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1319 = data
  i1318.useSafeMode = !!i1319[0]
  i1318.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1319[1], i1318.safeModeOptions)
  i1318.timeScale = i1319[2]
  i1318.unscaledTimeScale = i1319[3]
  i1318.useSmoothDeltaTime = !!i1319[4]
  i1318.maxSmoothUnscaledTime = i1319[5]
  i1318.rewindCallbackMode = i1319[6]
  i1318.showUnityEditorReport = !!i1319[7]
  i1318.logBehaviour = i1319[8]
  i1318.drawGizmos = !!i1319[9]
  i1318.defaultRecyclable = !!i1319[10]
  i1318.defaultAutoPlay = i1319[11]
  i1318.defaultUpdateType = i1319[12]
  i1318.defaultTimeScaleIndependent = !!i1319[13]
  i1318.defaultEaseType = i1319[14]
  i1318.defaultEaseOvershootOrAmplitude = i1319[15]
  i1318.defaultEasePeriod = i1319[16]
  i1318.defaultAutoKill = !!i1319[17]
  i1318.defaultLoopType = i1319[18]
  i1318.debugMode = !!i1319[19]
  i1318.debugStoreTargetId = !!i1319[20]
  i1318.showPreviewPanel = !!i1319[21]
  i1318.storeSettingsLocation = i1319[22]
  i1318.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1319[23], i1318.modules)
  i1318.createASMDEF = !!i1319[24]
  i1318.showPlayingTweens = !!i1319[25]
  i1318.showPausedTweens = !!i1319[26]
  return i1318
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1320 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1321 = data
  i1320.logBehaviour = i1321[0]
  i1320.nestedTweenFailureBehaviour = i1321[1]
  return i1320
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1322 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1323 = data
  i1322.showPanel = !!i1323[0]
  i1322.audioEnabled = !!i1323[1]
  i1322.physicsEnabled = !!i1323[2]
  i1322.physics2DEnabled = !!i1323[3]
  i1322.spriteEnabled = !!i1323[4]
  i1322.uiEnabled = !!i1323[5]
  i1322.uiToolkitEnabled = !!i1323[6]
  i1322.textMeshProEnabled = !!i1323[7]
  i1322.tk2DEnabled = !!i1323[8]
  i1322.deAudioEnabled = !!i1323[9]
  i1322.deUnityExtendedEnabled = !!i1323[10]
  i1322.epoOutlineEnabled = !!i1323[11]
  return i1322
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_Settings' )
  var i1325 = data
  i1324.assetVersion = i1325[0]
  i1324.m_TextWrappingMode = i1325[1]
  i1324.m_enableKerning = !!i1325[2]
  var i1327 = i1325[3]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(i1327[i + 0]);
  }
  i1324.m_ActiveFontFeatures = i1326
  i1324.m_enableExtraPadding = !!i1325[4]
  i1324.m_enableTintAllSprites = !!i1325[5]
  i1324.m_enableParseEscapeCharacters = !!i1325[6]
  i1324.m_EnableRaycastTarget = !!i1325[7]
  i1324.m_GetFontFeaturesAtRuntime = !!i1325[8]
  i1324.m_missingGlyphCharacter = i1325[9]
  i1324.m_ClearDynamicDataOnBuild = !!i1325[10]
  i1324.m_warningsDisabled = !!i1325[11]
  request.r(i1325[12], i1325[13], 0, i1324, 'm_defaultFontAsset')
  i1324.m_defaultFontAssetPath = i1325[14]
  i1324.m_defaultFontSize = i1325[15]
  i1324.m_defaultAutoSizeMinRatio = i1325[16]
  i1324.m_defaultAutoSizeMaxRatio = i1325[17]
  i1324.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1325[18], i1325[19] )
  i1324.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1325[20], i1325[21] )
  i1324.m_autoSizeTextContainer = !!i1325[22]
  i1324.m_IsTextObjectScaleStatic = !!i1325[23]
  var i1329 = i1325[24]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1324.m_fallbackFontAssets = i1328
  i1324.m_matchMaterialPreset = !!i1325[25]
  i1324.m_HideSubTextObjects = !!i1325[26]
  request.r(i1325[27], i1325[28], 0, i1324, 'm_defaultSpriteAsset')
  i1324.m_defaultSpriteAssetPath = i1325[29]
  i1324.m_enableEmojiSupport = !!i1325[30]
  i1324.m_MissingCharacterSpriteUnicode = i1325[31]
  var i1331 = i1325[32]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 1, i1330, '')
  }
  i1324.m_EmojiFallbackTextAssets = i1330
  i1324.m_defaultColorGradientPresetsPath = i1325[33]
  request.r(i1325[34], i1325[35], 0, i1324, 'm_defaultStyleSheet')
  i1324.m_StyleSheetsResourcePath = i1325[36]
  request.r(i1325[37], i1325[38], 0, i1324, 'm_leadingCharacters')
  request.r(i1325[39], i1325[40], 0, i1324, 'm_followingCharacters')
  i1324.m_UseModernHangulLineBreakingRules = !!i1325[41]
  return i1324
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'spriteSheet')
  var i1337 = i1335[2]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Sprite', i1337[i + 0]));
  }
  i1334.spriteInfoList = i1336
  var i1339 = i1335[3]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1334.fallbackSpriteAssets = i1338
  var i1341 = i1335[4]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_SpriteCharacter', i1341[i + 0]));
  }
  i1334.m_SpriteCharacterTable = i1340
  var i1343 = i1335[5]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.TMP_SpriteGlyph', i1343[i + 0]));
  }
  i1334.m_GlyphTable = i1342
  i1334.m_Version = i1335[6]
  i1334.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1335[7], i1334.m_FaceInfo)
  request.r(i1335[8], i1335[9], 0, i1334, 'm_Material')
  return i1334
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1347 = data
  i1346.name = i1347[0]
  i1346.hashCode = i1347[1]
  i1346.unicode = i1347[2]
  i1346.pivot = new pc.Vec2( i1347[3], i1347[4] )
  request.r(i1347[5], i1347[6], 0, i1346, 'sprite')
  i1346.id = i1347[7]
  i1346.x = i1347[8]
  i1346.y = i1347[9]
  i1346.width = i1347[10]
  i1346.height = i1347[11]
  i1346.xOffset = i1347[12]
  i1346.yOffset = i1347[13]
  i1346.xAdvance = i1347[14]
  i1346.scale = i1347[15]
  return i1346
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1353 = data
  i1352.m_Name = i1353[0]
  i1352.m_ElementType = i1353[1]
  i1352.m_Unicode = i1353[2]
  i1352.m_GlyphIndex = i1353[3]
  i1352.m_Scale = i1353[4]
  return i1352
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1357 = data
  request.r(i1357[0], i1357[1], 0, i1356, 'sprite')
  i1356.m_Index = i1357[2]
  i1356.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1357[3], i1356.m_Metrics)
  i1356.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1357[4], i1356.m_GlyphRect)
  i1356.m_Scale = i1357[5]
  i1356.m_AtlasIndex = i1357[6]
  i1356.m_ClassDefinitionType = i1357[7]
  return i1356
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.TMP_Style', i1361[i + 0]));
  }
  i1358.m_StyleList = i1360
  return i1358
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_Style' )
  var i1365 = data
  i1364.m_Name = i1365[0]
  i1364.m_HashCode = i1365[1]
  i1364.m_OpeningDefinition = i1365[2]
  i1364.m_ClosingDefinition = i1365[3]
  i1364.m_OpeningTagArray = i1365[4]
  i1364.m_ClosingTagArray = i1365[5]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1369[i + 0]) );
  }
  i1366.files = i1368
  i1366.componentToPrefabIds = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1373 = data
  i1372.path = i1373[0]
  request.r(i1373[1], i1373[2], 0, i1372, 'unityObject')
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1377[i + 0]) );
  }
  i1374.scriptsExecutionOrder = i1376
  var i1379 = i1375[1]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1379[i + 0]) );
  }
  i1374.sortingLayers = i1378
  var i1381 = i1375[2]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1381[i + 0]) );
  }
  i1374.cullingLayers = i1380
  i1374.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1375[3], i1374.timeSettings)
  i1374.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1375[4], i1374.physicsSettings)
  i1374.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1375[5], i1374.physics2DSettings)
  i1374.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1375[6], i1374.qualitySettings)
  i1374.enableRealtimeShadows = !!i1375[7]
  i1374.enableAutoInstancing = !!i1375[8]
  i1374.enableStaticBatching = !!i1375[9]
  i1374.enableDynamicBatching = !!i1375[10]
  i1374.lightmapEncodingQuality = i1375[11]
  i1374.desiredColorSpace = i1375[12]
  var i1383 = i1375[13]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1374.allTags = i1382
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1387 = data
  i1386.name = i1387[0]
  i1386.value = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1391 = data
  i1390.id = i1391[0]
  i1390.name = i1391[1]
  i1390.value = i1391[2]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1395 = data
  i1394.id = i1395[0]
  i1394.name = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1397 = data
  i1396.fixedDeltaTime = i1397[0]
  i1396.maximumDeltaTime = i1397[1]
  i1396.timeScale = i1397[2]
  i1396.maximumParticleTimestep = i1397[3]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1399 = data
  i1398.gravity = new pc.Vec3( i1399[0], i1399[1], i1399[2] )
  i1398.defaultSolverIterations = i1399[3]
  i1398.bounceThreshold = i1399[4]
  i1398.autoSyncTransforms = !!i1399[5]
  i1398.autoSimulation = !!i1399[6]
  var i1401 = i1399[7]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1401[i + 0]) );
  }
  i1398.collisionMatrix = i1400
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.layerId = i1405[1]
  i1404.otherLayerId = i1405[2]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'material')
  i1406.gravity = new pc.Vec2( i1407[2], i1407[3] )
  i1406.positionIterations = i1407[4]
  i1406.velocityIterations = i1407[5]
  i1406.velocityThreshold = i1407[6]
  i1406.maxLinearCorrection = i1407[7]
  i1406.maxAngularCorrection = i1407[8]
  i1406.maxTranslationSpeed = i1407[9]
  i1406.maxRotationSpeed = i1407[10]
  i1406.baumgarteScale = i1407[11]
  i1406.baumgarteTOIScale = i1407[12]
  i1406.timeToSleep = i1407[13]
  i1406.linearSleepTolerance = i1407[14]
  i1406.angularSleepTolerance = i1407[15]
  i1406.defaultContactOffset = i1407[16]
  i1406.autoSimulation = !!i1407[17]
  i1406.queriesHitTriggers = !!i1407[18]
  i1406.queriesStartInColliders = !!i1407[19]
  i1406.callbacksOnDisable = !!i1407[20]
  i1406.reuseCollisionCallbacks = !!i1407[21]
  i1406.autoSyncTransforms = !!i1407[22]
  var i1409 = i1407[23]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1409[i + 0]) );
  }
  i1406.collisionMatrix = i1408
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.layerId = i1413[1]
  i1412.otherLayerId = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1415 = data
  var i1417 = i1415[0]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1417[i + 0]) );
  }
  i1414.qualityLevels = i1416
  var i1419 = i1415[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1414.names = i1418
  i1414.shadows = i1415[2]
  i1414.anisotropicFiltering = i1415[3]
  i1414.antiAliasing = i1415[4]
  i1414.lodBias = i1415[5]
  i1414.shadowCascades = i1415[6]
  i1414.shadowDistance = i1415[7]
  i1414.shadowmaskMode = i1415[8]
  i1414.shadowProjection = i1415[9]
  i1414.shadowResolution = i1415[10]
  i1414.softParticles = !!i1415[11]
  i1414.softVegetation = !!i1415[12]
  i1414.activeColorSpace = i1415[13]
  i1414.desiredColorSpace = i1415[14]
  i1414.masterTextureLimit = i1415[15]
  i1414.maxQueuedFrames = i1415[16]
  i1414.particleRaycastBudget = i1415[17]
  i1414.pixelLightCount = i1415[18]
  i1414.realtimeReflectionProbes = !!i1415[19]
  i1414.shadowCascade2Split = i1415[20]
  i1414.shadowCascade4Split = new pc.Vec3( i1415[21], i1415[22], i1415[23] )
  i1414.streamingMipmapsActive = !!i1415[24]
  i1414.vSyncCount = i1415[25]
  i1414.asyncUploadBufferSize = i1415[26]
  i1414.asyncUploadTimeSlice = i1415[27]
  i1414.billboardsFaceCameraPosition = !!i1415[28]
  i1414.shadowNearPlaneOffset = i1415[29]
  i1414.streamingMipmapsMemoryBudget = i1415[30]
  i1414.maximumLODLevel = i1415[31]
  i1414.streamingMipmapsAddAllCameras = !!i1415[32]
  i1414.streamingMipmapsMaxLevelReduction = i1415[33]
  i1414.streamingMipmapsRenderersPerFrame = i1415[34]
  i1414.resolutionScalingFixedDPIFactor = i1415[35]
  i1414.streamingMipmapsMaxFileIORequests = i1415[36]
  i1414.currentQualityLevel = i1415[37]
  return i1414
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1423 = data
  i1422.m_GlyphIndex = i1423[0]
  i1422.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1423[1], i1422.m_GlyphValueRecord)
  return i1422
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1425 = data
  i1424.m_XCoordinate = i1425[0]
  i1424.m_YCoordinate = i1425[1]
  return i1424
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1427 = data
  i1426.m_XPositionAdjustment = i1427[0]
  i1426.m_YPositionAdjustment = i1427[1]
  return i1426
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1429 = data
  i1428.xPlacement = i1429[0]
  i1428.yPlacement = i1429[1]
  i1428.xAdvance = i1429[2]
  i1428.yAdvance = i1429[3]
  return i1428
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1431 = data
  i1430.m_XPlacement = i1431[0]
  i1430.m_YPlacement = i1431[1]
  i1430.m_XAdvance = i1431[2]
  i1430.m_YAdvance = i1431[3]
  return i1430
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[28],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[28],"101":[102],"103":[104],"105":[104],"27":[13],"106":[57],"63":[20],"61":[107],"60":[20],"20":[107],"24":[20],"108":[20],"109":[107],"110":[107],"111":[107],"112":[13],"113":[16,13],"114":[102],"115":[16,13],"116":[25,102],"117":[102],"118":[102,119],"120":[80],"121":[87],"122":[123],"124":[125],"126":[5],"127":[28],"128":[129],"130":[51],"131":[27],"132":[13],"133":[102,13],"32":[13,16],"134":[13],"135":[16,13],"136":[102],"137":[16,13],"138":[13],"139":[140],"141":[140],"142":[140],"143":[13],"144":[13],"30":[27],"15":[16,13],"145":[13],"29":[27],"146":[13],"147":[13],"148":[13],"149":[13],"150":[13],"151":[13],"152":[13],"153":[13],"154":[13],"155":[16,13],"156":[13],"157":[13],"158":[13],"159":[13],"160":[16,13],"161":[13],"162":[51],"163":[51],"52":[51],"164":[51],"165":[28],"166":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Knife","ItemWithTrash","Item","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_ToggleEvent","Sink","SinkBlock","UnityEngine.BoxCollider","UnityEngine.SpriteMask","UnityEngine.CapsuleCollider","CuttingBoard","ItemDragChildRotator","ItemClickable","OilFood","OilBrush","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "32.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_Lv66";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4977";

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

Deserializers.buildID = "7058f027-8d05-4e27-ada5-a731091ca194";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

