var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSpring' )
  var i695 = data
  i694.spring = i695[0]
  i694.damper = i695[1]
  i694.targetPosition = i695[2]
  return i694
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointMotor' )
  var i697 = data
  i696.m_TargetVelocity = i697[0]
  i696.m_Force = i697[1]
  i696.m_FreeSpin = i697[2]
  return i696
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointLimits' )
  var i699 = data
  i698.m_Min = i699[0]
  i698.m_Max = i699[1]
  i698.m_Bounciness = i699[2]
  i698.m_BounceMinVelocity = i699[3]
  i698.m_ContactDistance = i699[4]
  i698.minBounce = i699[5]
  i698.maxBounce = i699[6]
  return i698
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointDrive' )
  var i701 = data
  i700.m_PositionSpring = i701[0]
  i700.m_PositionDamper = i701[1]
  i700.m_MaximumForce = i701[2]
  i700.m_UseAcceleration = i701[3]
  return i700
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i703 = data
  i702.m_Spring = i703[0]
  i702.m_Damper = i703[1]
  return i702
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i705 = data
  i704.m_Limit = i705[0]
  i704.m_Bounciness = i705[1]
  i704.m_ContactDistance = i705[2]
  return i704
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i707 = data
  i706.m_ExtremumSlip = i707[0]
  i706.m_ExtremumValue = i707[1]
  i706.m_AsymptoteSlip = i707[2]
  i706.m_AsymptoteValue = i707[3]
  i706.m_Stiffness = i707[4]
  return i706
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i709 = data
  i708.m_LowerAngle = i709[0]
  i708.m_UpperAngle = i709[1]
  return i708
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i711 = data
  i710.m_MotorSpeed = i711[0]
  i710.m_MaximumMotorTorque = i711[1]
  return i710
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i713 = data
  i712.m_DampingRatio = i713[0]
  i712.m_Frequency = i713[1]
  i712.m_Angle = i713[2]
  return i712
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i715 = data
  i714.m_LowerTranslation = i715[0]
  i714.m_UpperTranslation = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i716 = root || new pc.UnityMaterial()
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'shader')
  i716.renderQueue = i717[3]
  i716.enableInstancing = !!i717[4]
  var i719 = i717[5]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i719[i + 0]) );
  }
  i716.floatParameters = i718
  var i721 = i717[6]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i721[i + 0]) );
  }
  i716.colorParameters = i720
  var i723 = i717[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i723[i + 0]) );
  }
  i716.vectorParameters = i722
  var i725 = i717[8]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i725[i + 0]) );
  }
  i716.textureParameters = i724
  var i727 = i717[9]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i727[i + 0]) );
  }
  i716.materialFlags = i726
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i731 = data
  i730.name = i731[0]
  i730.value = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = new pc.Color(i735[1], i735[2], i735[3], i735[4])
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Vec4( i739[1], i739[2], i739[3], i739[4] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i743 = data
  i742.name = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'value')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i747 = data
  i746.name = i747[0]
  i746.enabled = !!i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i749 = data
  i748.name = i749[0]
  i748.width = i749[1]
  i748.height = i749[2]
  i748.mipmapCount = i749[3]
  i748.anisoLevel = i749[4]
  i748.filterMode = i749[5]
  i748.hdr = !!i749[6]
  i748.format = i749[7]
  i748.wrapMode = i749[8]
  i748.alphaIsTransparency = !!i749[9]
  i748.alphaSource = i749[10]
  i748.graphicsFormat = i749[11]
  i748.sRGBTexture = !!i749[12]
  i748.desiredColorSpace = i749[13]
  i748.wrapU = i749[14]
  i748.wrapV = i749[15]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i751 = data
  i750.position = new pc.Vec3( i751[0], i751[1], i751[2] )
  i750.scale = new pc.Vec3( i751[3], i751[4], i751[5] )
  i750.rotation = new pc.Quat(i751[6], i751[7], i751[8], i751[9])
  return i750
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i752 = root || request.c( 'HeartEffect' )
  var i753 = data
  i752.defaultLifeTime = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'tf')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i755 = data
  i754.color = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  request.r(i755[4], i755[5], 0, i754, 'sprite')
  i754.flipX = !!i755[6]
  i754.flipY = !!i755[7]
  i754.drawMode = i755[8]
  i754.size = new pc.Vec2( i755[9], i755[10] )
  i754.tileMode = i755[11]
  i754.adaptiveModeThreshold = i755[12]
  i754.maskInteraction = i755[13]
  i754.spriteSortPoint = i755[14]
  i754.enabled = !!i755[15]
  request.r(i755[16], i755[17], 0, i754, 'sharedMaterial')
  var i757 = i755[18]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sharedMaterials = i756
  i754.receiveShadows = !!i755[19]
  i754.shadowCastingMode = i755[20]
  i754.sortingLayerID = i755[21]
  i754.sortingOrder = i755[22]
  i754.lightmapIndex = i755[23]
  i754.lightmapSceneIndex = i755[24]
  i754.lightmapScaleOffset = new pc.Vec4( i755[25], i755[26], i755[27], i755[28] )
  i754.lightProbeUsage = i755[29]
  i754.reflectionProbeUsage = i755[30]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i761 = data
  i760.name = i761[0]
  i760.tagId = i761[1]
  i760.enabled = !!i761[2]
  i760.isStatic = !!i761[3]
  i760.layer = i761[4]
  return i760
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i762 = root || request.c( 'HeartBreakEffect' )
  var i763 = data
  i762.defaultLifeTime = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'tf')
  return i762
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i764 = root || request.c( 'BlinkEffect' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'tf')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'mesh')
  i766.meshCount = i767[2]
  i766.activeVertexStreamsCount = i767[3]
  i766.alignment = i767[4]
  i766.renderMode = i767[5]
  i766.sortMode = i767[6]
  i766.lengthScale = i767[7]
  i766.velocityScale = i767[8]
  i766.cameraVelocityScale = i767[9]
  i766.normalDirection = i767[10]
  i766.sortingFudge = i767[11]
  i766.minParticleSize = i767[12]
  i766.maxParticleSize = i767[13]
  i766.pivot = new pc.Vec3( i767[14], i767[15], i767[16] )
  request.r(i767[17], i767[18], 0, i766, 'trailMaterial')
  i766.applyActiveColorSpace = !!i767[19]
  i766.enabled = !!i767[20]
  request.r(i767[21], i767[22], 0, i766, 'sharedMaterial')
  var i769 = i767[23]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.sharedMaterials = i768
  i766.receiveShadows = !!i767[24]
  i766.shadowCastingMode = i767[25]
  i766.sortingLayerID = i767[26]
  i766.sortingOrder = i767[27]
  i766.lightmapIndex = i767[28]
  i766.lightmapSceneIndex = i767[29]
  i766.lightmapScaleOffset = new pc.Vec4( i767[30], i767[31], i767[32], i767[33] )
  i766.lightProbeUsage = i767[34]
  i766.reflectionProbeUsage = i767[35]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i771 = data
  i770.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i771[0], i770.main)
  i770.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i771[1], i770.colorBySpeed)
  i770.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i771[2], i770.colorOverLifetime)
  i770.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i771[3], i770.emission)
  i770.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i771[4], i770.rotationBySpeed)
  i770.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i771[5], i770.rotationOverLifetime)
  i770.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i771[6], i770.shape)
  i770.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i771[7], i770.sizeBySpeed)
  i770.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i771[8], i770.sizeOverLifetime)
  i770.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i771[9], i770.textureSheetAnimation)
  i770.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i771[10], i770.velocityOverLifetime)
  i770.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i771[11], i770.noise)
  i770.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i771[12], i770.inheritVelocity)
  i770.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i771[13], i770.forceOverLifetime)
  i770.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i771[14], i770.limitVelocityOverLifetime)
  i770.useAutoRandomSeed = !!i771[15]
  i770.randomSeed = i771[16]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemMain()
  var i773 = data
  i772.duration = i773[0]
  i772.loop = !!i773[1]
  i772.prewarm = !!i773[2]
  i772.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.startDelay)
  i772.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.startLifetime)
  i772.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[5], i772.startSpeed)
  i772.startSize3D = !!i773[6]
  i772.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.startSizeX)
  i772.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.startSizeY)
  i772.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[9], i772.startSizeZ)
  i772.startRotation3D = !!i773[10]
  i772.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.startRotationX)
  i772.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[12], i772.startRotationY)
  i772.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[13], i772.startRotationZ)
  i772.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[14], i772.startColor)
  i772.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[15], i772.gravityModifier)
  i772.simulationSpace = i773[16]
  request.r(i773[17], i773[18], 0, i772, 'customSimulationSpace')
  i772.simulationSpeed = i773[19]
  i772.useUnscaledTime = !!i773[20]
  i772.scalingMode = i773[21]
  i772.playOnAwake = !!i773[22]
  i772.maxParticles = i773[23]
  i772.emitterVelocityMode = i773[24]
  i772.stopAction = i773[25]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i774 = root || new pc.MinMaxCurve()
  var i775 = data
  i774.mode = i775[0]
  i774.curveMin = new pc.AnimationCurve( { keys_flow: i775[1] } )
  i774.curveMax = new pc.AnimationCurve( { keys_flow: i775[2] } )
  i774.curveMultiplier = i775[3]
  i774.constantMin = i775[4]
  i774.constantMax = i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i776 = root || new pc.MinMaxGradient()
  var i777 = data
  i776.mode = i777[0]
  i776.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[1], i776.gradientMin)
  i776.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[2], i776.gradientMax)
  i776.colorMin = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.colorMax = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i779 = data
  i778.mode = i779[0]
  var i781 = i779[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i781[i + 0]) );
  }
  i778.colorKeys = i780
  var i783 = i779[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i783[i + 0]) );
  }
  i778.alphaKeys = i782
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  i784.range = new pc.Vec2( i785[2], i785[3] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i789 = data
  i788.color = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.time = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i793 = data
  i792.alpha = i793[0]
  i792.time = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemColorOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i795[1], i794.color)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemEmitter()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.rateOverTime)
  i796.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.rateOverDistance)
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i799[i + 0]) );
  }
  i796.bursts = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemBurst()
  var i803 = data
  i802.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[0], i802.count)
  i802.cycleCount = i803[1]
  i802.minCount = i803[2]
  i802.maxCount = i803[3]
  i802.repeatInterval = i803[4]
  i802.time = i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemRotationBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemRotationOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemShape()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.shapeType = i809[1]
  i808.randomDirectionAmount = i809[2]
  i808.sphericalDirectionAmount = i809[3]
  i808.randomPositionAmount = i809[4]
  i808.alignToDirection = !!i809[5]
  i808.radius = i809[6]
  i808.radiusMode = i809[7]
  i808.radiusSpread = i809[8]
  i808.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.radiusSpeed)
  i808.radiusThickness = i809[10]
  i808.angle = i809[11]
  i808.length = i809[12]
  i808.boxThickness = new pc.Vec3( i809[13], i809[14], i809[15] )
  i808.meshShapeType = i809[16]
  request.r(i809[17], i809[18], 0, i808, 'mesh')
  request.r(i809[19], i809[20], 0, i808, 'meshRenderer')
  request.r(i809[21], i809[22], 0, i808, 'skinnedMeshRenderer')
  i808.useMeshMaterialIndex = !!i809[23]
  i808.meshMaterialIndex = i809[24]
  i808.useMeshColors = !!i809[25]
  i808.normalOffset = i809[26]
  i808.arc = i809[27]
  i808.arcMode = i809[28]
  i808.arcSpread = i809[29]
  i808.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[30], i808.arcSpeed)
  i808.donutRadius = i809[31]
  i808.position = new pc.Vec3( i809[32], i809[33], i809[34] )
  i808.rotation = new pc.Vec3( i809[35], i809[36], i809[37] )
  i808.scale = new pc.Vec3( i809[38], i809[39], i809[40] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemSizeBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemSizeOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.animation = i815[2]
  i814.numTilesX = i815[3]
  i814.numTilesY = i815[4]
  i814.useRandomRow = !!i815[5]
  i814.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[6], i814.frameOverTime)
  i814.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.startFrame)
  i814.cycleCount = i815[8]
  i814.rowIndex = i815[9]
  i814.flipU = i815[10]
  i814.flipV = i815[11]
  i814.spriteCount = i815[12]
  var i817 = i815[13]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sprites = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.radial)
  i820.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[5], i820.speedModifier)
  i820.space = i821[6]
  i820.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.orbitalX)
  i820.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[8], i820.orbitalY)
  i820.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[9], i820.orbitalZ)
  i820.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[10], i820.orbitalOffsetX)
  i820.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[11], i820.orbitalOffsetY)
  i820.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[12], i820.orbitalOffsetZ)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemNoise()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.separateAxes = !!i823[1]
  i822.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.strengthX)
  i822.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.strengthY)
  i822.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.strengthZ)
  i822.frequency = i823[5]
  i822.damping = !!i823[6]
  i822.octaveCount = i823[7]
  i822.octaveMultiplier = i823[8]
  i822.octaveScale = i823[9]
  i822.quality = i823[10]
  i822.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[11], i822.scrollSpeed)
  i822.scrollSpeedMultiplier = i823[12]
  i822.remapEnabled = !!i823[13]
  i822.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[14], i822.remapX)
  i822.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[15], i822.remapY)
  i822.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[16], i822.remapZ)
  i822.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[17], i822.positionAmount)
  i822.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[18], i822.rotationAmount)
  i822.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[19], i822.sizeAmount)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemInheritVelocity()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.mode = i825[1]
  i824.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.curve)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemForceOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.space = i827[4]
  i826.randomized = !!i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.limit)
  i828.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.limitX)
  i828.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.limitY)
  i828.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.limitZ)
  i828.dampen = i829[5]
  i828.separateAxes = !!i829[6]
  i828.space = i829[7]
  i828.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[8], i828.drag)
  i828.multiplyDragByParticleSize = !!i829[9]
  i828.multiplyDragByParticleVelocity = !!i829[10]
  return i828
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i830 = root || request.c( 'StarExploreFX' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'tf')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i833 = data
  i832.pivot = new pc.Vec2( i833[0], i833[1] )
  i832.anchorMin = new pc.Vec2( i833[2], i833[3] )
  i832.anchorMax = new pc.Vec2( i833[4], i833[5] )
  i832.sizeDelta = new pc.Vec2( i833[6], i833[7] )
  i832.anchoredPosition3D = new pc.Vec3( i833[8], i833[9], i833[10] )
  i832.rotation = new pc.Quat(i833[11], i833[12], i833[13], i833[14])
  i832.scale = new pc.Vec3( i833[15], i833[16], i833[17] )
  return i832
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i834 = root || request.c( 'ClockTimer' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'fillImage')
  request.r(i835[2], i835[3], 0, i834, 'tf')
  i834.spawnZoomDuration = i835[4]
  i834.despawnZoomDuration = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i837 = data
  i836.cullTransparentMesh = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Image' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Sprite')
  i838.m_Type = i839[2]
  i838.m_PreserveAspect = !!i839[3]
  i838.m_FillCenter = !!i839[4]
  i838.m_FillMethod = i839[5]
  i838.m_FillAmount = i839[6]
  i838.m_FillClockwise = !!i839[7]
  i838.m_FillOrigin = i839[8]
  i838.m_UseSpriteMesh = !!i839[9]
  i838.m_PixelsPerUnitMultiplier = i839[10]
  request.r(i839[11], i839[12], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[13]
  i838.m_Color = new pc.Color(i839[14], i839[15], i839[16], i839[17])
  i838.m_RaycastTarget = !!i839[18]
  i838.m_RaycastPadding = new pc.Vec4( i839[19], i839[20], i839[21], i839[22] )
  return i838
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i840 = root || request.c( 'WaterSplash' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'tf')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i843 = data
  i842.center = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.radius = i843[3]
  i842.enabled = !!i843[4]
  i842.isTrigger = !!i843[5]
  request.r(i843[6], i843[7], 0, i842, 'material')
  return i842
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i844 = root || request.c( 'ItemDraggable' )
  var i845 = data
  i844.isDraggable = !!i845[0]
  request.r(i845[1], i845[2], 0, i844, 'returnTransform')
  i844.setParentToReturnTransform = !!i845[3]
  i844.returnToStartOnDragFailed = !!i845[4]
  i844.returnToExactReturnTransformPosition = !!i845[5]
  i844.targetItemType = i845[6]
  request.r(i845[7], i845[8], 0, i844, 'item')
  i844.checkState = !!i845[9]
  request.r(i845[10], i845[11], 0, i844, 'shadowObject')
  i844.playReturnToStartFinishSound = !!i845[12]
  i844.returnToStartFinishFxType = i845[13]
  i844.spawnBreakHeartOnDropFail = !!i845[14]
  i844.playBeginDragSound = !!i845[15]
  i844.beginDragFxType = i845[16]
  i844.liftOffset = i845[17]
  i844.dragScaleMultiplier = i845[18]
  i844.dragScaleDuration = i845[19]
  i844.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i845[20], i844.onBeginDrag)
  i844.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i845[21], i844.onDropSuccess)
  i844.onDropFail = request.d('UnityEngine.Events.UnityEvent', i845[22], i844.onDropFail)
  i844.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i845[23], i844.onReturnToStartComplete)
  return i844
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i847 = data
  i846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i847[0], i846.m_PersistentCalls)
  return i846
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('UnityEngine.Events.PersistentCall', i851[i + 0]));
  }
  i848.m_Calls = i850
  return i848
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_Target')
  i854.m_TargetAssemblyTypeName = i855[2]
  i854.m_MethodName = i855[3]
  i854.m_Mode = i855[4]
  i854.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i855[5], i854.m_Arguments)
  i854.m_CallState = i855[6]
  return i854
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_ObjectArgument')
  i856.m_ObjectArgumentAssemblyTypeName = i857[2]
  i856.m_IntArgument = i857[3]
  i856.m_FloatArgument = i857[4]
  i856.m_StringArgument = i857[5]
  i856.m_BoolArgument = !!i857[6]
  return i856
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i858 = root || request.c( 'ItemMoveToTarget' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'defaultTarget')
  i858.duration = i859[2]
  i858.useAnimationCurve = !!i859[3]
  i858.moveCurve = new pc.AnimationCurve( { keys_flow: i859[4] } )
  i858.easeType = i859[5]
  i858.moveType = i859[6]
  i858.jumpPower = i859[7]
  i858.numJumps = i859[8]
  i858.rotate360DuringJump = !!i859[9]
  i858.flipRotate = !!i859[10]
  i858.angleRotate = i859[11]
  i858.scaleOnMove = !!i859[12]
  i858.endScaleMultiplier = i859[13]
  i858.setParentToTarget = !!i859[14]
  i858.onComplete = request.d('UnityEngine.Events.UnityEvent', i859[15], i858.onComplete)
  i858.lockInputWhileMoving = !!i859[16]
  i858.resetParentBeforeMove = !!i859[17]
  return i858
}

Deserializers["Paper"] = function (request, data, root) {
  var i860 = root || request.c( 'Paper' )
  var i861 = data
  i860.isUse = !!i861[0]
  request.r(i861[1], i861[2], 0, i860, 'paper')
  request.r(i861[3], i861[4], 0, i860, 'paperTrash')
  request.r(i861[5], i861[6], 0, i860, 'itemDragRaycastTarget')
  request.r(i861[7], i861[8], 0, i860, 'curentCollider')
  i860.isDone = !!i861[9]
  i860.onProcess = !!i861[10]
  i860.requireMatchingTargetTypeForHandTut = !!i861[11]
  request.r(i861[12], i861[13], 0, i860, 'itemDraggable')
  request.r(i861[14], i861[15], 0, i860, 'itemClickable')
  request.r(i861[16], i861[17], 0, i860, 'itemStirring')
  request.r(i861[18], i861[19], 0, i860, 'itemKnifeSpriteMaskCutter')
  request.r(i861[20], i861[21], 0, i860, 'itemSpriteMaskPainter')
  request.r(i861[22], i861[23], 0, i860, 'itemDragSpriteMaskPainter')
  request.r(i861[24], i861[25], 0, i860, 'itemMoveToTarget')
  request.r(i861[26], i861[27], 0, i860, 'animator')
  i860.itemType = i861[28]
  request.r(i861[29], i861[30], 0, i860, 'spriteRenderer')
  i860.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i861[31], i860.onKnifeIn)
  request.r(i861[32], i861[33], 0, i860, 'knifePos')
  i860.heartEffectScale = i861[34]
  i860.breakHeartEffectScale = i861[35]
  i860.blinkEffectScale = i861[36]
  i860.mergeEffectScale = i861[37]
  i860.playMoveToTargetFinishSound = !!i861[38]
  i860.moveToTargetFinishFxType = i861[39]
  i860.fxSpawnZPos = i861[40]
  request.r(i861[41], i861[42], 0, i860, 'tf')
  return i860
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i862 = root || request.c( 'ItemDragRaycastTarget' )
  var i863 = data
  i862.targetToFind = i863[0]
  i862.targetItemTypeWhenHit = i863[1]
  i862.targetItemTypeOnDropFail = i863[2]
  request.r(i863[3], i863[4], 0, i862, 'raycastPoint')
  i862.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i863[5] )
  i862.rayDistance = i863[6]
  i862.updateMoveDefaultTarget = !!i863[7]
  i862.invokeOnlyWhenTargetChanged = !!i863[8]
  i862.targetChangeEnabled = !!i863[9]
  i862.restoreTargetOnDropFail = !!i863[10]
  i862.resetCurrentTargetOnNoHit = !!i863[11]
  i862.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i863[12], i862.onTargetFound)
  i862.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i863[13], i862.onTargetFoundWithItem)
  return i862
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i864 = root || request.c( 'ItemRaycastTargetEvent' )
  var i865 = data
  i864.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i865[0], i864.m_PersistentCalls)
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'animatorController')
  request.r(i867[2], i867[3], 0, i866, 'avatar')
  i866.updateMode = i867[4]
  i866.hasTransformHierarchy = !!i867[5]
  i866.applyRootMotion = !!i867[6]
  var i869 = i867[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.humanBones = i868
  i866.enabled = !!i867[8]
  return i866
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i872 = root || request.c( 'ItemSound' )
  var i873 = data
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i875 = data
  i874.name = i875[0]
  i874.index = i875[1]
  i874.startup = !!i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i877 = data
  i876.planeDistance = i877[0]
  i876.referencePixelsPerUnit = i877[1]
  i876.isFallbackOverlay = !!i877[2]
  i876.renderMode = i877[3]
  i876.renderOrder = i877[4]
  i876.sortingLayerName = i877[5]
  i876.sortingOrder = i877[6]
  i876.scaleFactor = i877[7]
  request.r(i877[8], i877[9], 0, i876, 'worldCamera')
  i876.overrideSorting = !!i877[10]
  i876.pixelPerfect = !!i877[11]
  i876.targetDisplay = i877[12]
  i876.overridePixelPerfect = !!i877[13]
  i876.enabled = !!i877[14]
  return i876
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i879 = data
  i878.m_UiScaleMode = i879[0]
  i878.m_ReferencePixelsPerUnit = i879[1]
  i878.m_ScaleFactor = i879[2]
  i878.m_ReferenceResolution = new pc.Vec2( i879[3], i879[4] )
  i878.m_ScreenMatchMode = i879[5]
  i878.m_MatchWidthOrHeight = i879[6]
  i878.m_PhysicalUnit = i879[7]
  i878.m_FallbackScreenDPI = i879[8]
  i878.m_DefaultSpriteDPI = i879[9]
  i878.m_DynamicPixelsPerUnit = i879[10]
  i878.m_PresetInfoIsWorld = !!i879[11]
  return i878
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i881 = data
  i880.m_IgnoreReversedGraphics = !!i881[0]
  i880.m_BlockingObjects = i881[1]
  i880.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i881[2] )
  return i880
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i883 = data
  i882.m_hasFontAssetChanged = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'm_baseMaterial')
  i882.m_maskOffset = new pc.Vec4( i883[3], i883[4], i883[5], i883[6] )
  i882.m_text = i883[7]
  i882.m_isRightToLeft = !!i883[8]
  request.r(i883[9], i883[10], 0, i882, 'm_fontAsset')
  request.r(i883[11], i883[12], 0, i882, 'm_sharedMaterial')
  var i885 = i883[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.m_fontSharedMaterials = i884
  request.r(i883[14], i883[15], 0, i882, 'm_fontMaterial')
  var i887 = i883[16]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i882.m_fontMaterials = i886
  i882.m_fontColor32 = UnityEngine.Color32.ConstructColor(i883[17], i883[18], i883[19], i883[20])
  i882.m_fontColor = new pc.Color(i883[21], i883[22], i883[23], i883[24])
  i882.m_enableVertexGradient = !!i883[25]
  i882.m_colorMode = i883[26]
  i882.m_fontColorGradient = request.d('TMPro.VertexGradient', i883[27], i882.m_fontColorGradient)
  request.r(i883[28], i883[29], 0, i882, 'm_fontColorGradientPreset')
  request.r(i883[30], i883[31], 0, i882, 'm_spriteAsset')
  i882.m_tintAllSprites = !!i883[32]
  request.r(i883[33], i883[34], 0, i882, 'm_StyleSheet')
  i882.m_TextStyleHashCode = i883[35]
  i882.m_overrideHtmlColors = !!i883[36]
  i882.m_faceColor = UnityEngine.Color32.ConstructColor(i883[37], i883[38], i883[39], i883[40])
  i882.m_fontSize = i883[41]
  i882.m_fontSizeBase = i883[42]
  i882.m_fontWeight = i883[43]
  i882.m_enableAutoSizing = !!i883[44]
  i882.m_fontSizeMin = i883[45]
  i882.m_fontSizeMax = i883[46]
  i882.m_fontStyle = i883[47]
  i882.m_HorizontalAlignment = i883[48]
  i882.m_VerticalAlignment = i883[49]
  i882.m_textAlignment = i883[50]
  i882.m_characterSpacing = i883[51]
  i882.m_wordSpacing = i883[52]
  i882.m_lineSpacing = i883[53]
  i882.m_lineSpacingMax = i883[54]
  i882.m_paragraphSpacing = i883[55]
  i882.m_charWidthMaxAdj = i883[56]
  i882.m_TextWrappingMode = i883[57]
  i882.m_wordWrappingRatios = i883[58]
  i882.m_overflowMode = i883[59]
  request.r(i883[60], i883[61], 0, i882, 'm_linkedTextComponent')
  request.r(i883[62], i883[63], 0, i882, 'parentLinkedComponent')
  i882.m_enableKerning = !!i883[64]
  var i889 = i883[65]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(i889[i + 0]);
  }
  i882.m_ActiveFontFeatures = i888
  i882.m_enableExtraPadding = !!i883[66]
  i882.checkPaddingRequired = !!i883[67]
  i882.m_isRichText = !!i883[68]
  i882.m_parseCtrlCharacters = !!i883[69]
  i882.m_isOrthographic = !!i883[70]
  i882.m_isCullingEnabled = !!i883[71]
  i882.m_horizontalMapping = i883[72]
  i882.m_verticalMapping = i883[73]
  i882.m_uvLineOffset = i883[74]
  i882.m_geometrySortingOrder = i883[75]
  i882.m_IsTextObjectScaleStatic = !!i883[76]
  i882.m_VertexBufferAutoSizeReduction = !!i883[77]
  i882.m_useMaxVisibleDescender = !!i883[78]
  i882.m_pageToDisplay = i883[79]
  i882.m_margin = new pc.Vec4( i883[80], i883[81], i883[82], i883[83] )
  i882.m_isUsingLegacyAnimationComponent = !!i883[84]
  i882.m_isVolumetricText = !!i883[85]
  request.r(i883[86], i883[87], 0, i882, 'm_Material')
  i882.m_EmojiFallbackSupport = !!i883[88]
  i882.m_Maskable = !!i883[89]
  i882.m_Color = new pc.Color(i883[90], i883[91], i883[92], i883[93])
  i882.m_RaycastTarget = !!i883[94]
  i882.m_RaycastPadding = new pc.Vec4( i883[95], i883[96], i883[97], i883[98] )
  return i882
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.VertexGradient' )
  var i891 = data
  i890.topLeft = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.topRight = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.bottomLeft = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  i890.bottomRight = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  return i890
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Button' )
  var i895 = data
  i894.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i895[0], i894.m_OnClick)
  i894.m_Navigation = request.d('UnityEngine.UI.Navigation', i895[1], i894.m_Navigation)
  i894.m_Transition = i895[2]
  i894.m_Colors = request.d('UnityEngine.UI.ColorBlock', i895[3], i894.m_Colors)
  i894.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i895[4], i894.m_SpriteState)
  i894.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i895[5], i894.m_AnimationTriggers)
  i894.m_Interactable = !!i895[6]
  request.r(i895[7], i895[8], 0, i894, 'm_TargetGraphic')
  return i894
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i897 = data
  i896.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i897[0], i896.m_PersistentCalls)
  return i896
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i899 = data
  i898.m_Mode = i899[0]
  i898.m_WrapAround = !!i899[1]
  request.r(i899[2], i899[3], 0, i898, 'm_SelectOnUp')
  request.r(i899[4], i899[5], 0, i898, 'm_SelectOnDown')
  request.r(i899[6], i899[7], 0, i898, 'm_SelectOnLeft')
  request.r(i899[8], i899[9], 0, i898, 'm_SelectOnRight')
  return i898
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i901 = data
  i900.m_NormalColor = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.m_HighlightedColor = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.m_PressedColor = new pc.Color(i901[8], i901[9], i901[10], i901[11])
  i900.m_SelectedColor = new pc.Color(i901[12], i901[13], i901[14], i901[15])
  i900.m_DisabledColor = new pc.Color(i901[16], i901[17], i901[18], i901[19])
  i900.m_ColorMultiplier = i901[20]
  i900.m_FadeDuration = i901[21]
  return i900
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_HighlightedSprite')
  request.r(i903[2], i903[3], 0, i902, 'm_PressedSprite')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectedSprite')
  request.r(i903[6], i903[7], 0, i902, 'm_DisabledSprite')
  return i902
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i905 = data
  i904.m_NormalTrigger = i905[0]
  i904.m_HighlightedTrigger = i905[1]
  i904.m_PressedTrigger = i905[2]
  i904.m_SelectedTrigger = i905[3]
  i904.m_DisabledTrigger = i905[4]
  return i904
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.Slider' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'm_FillRect')
  request.r(i907[2], i907[3], 0, i906, 'm_HandleRect')
  i906.m_Direction = i907[4]
  i906.m_MinValue = i907[5]
  i906.m_MaxValue = i907[6]
  i906.m_WholeNumbers = !!i907[7]
  i906.m_Value = i907[8]
  i906.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i907[9], i906.m_OnValueChanged)
  i906.m_Navigation = request.d('UnityEngine.UI.Navigation', i907[10], i906.m_Navigation)
  i906.m_Transition = i907[11]
  i906.m_Colors = request.d('UnityEngine.UI.ColorBlock', i907[12], i906.m_Colors)
  i906.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i907[13], i906.m_SpriteState)
  i906.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i907[14], i906.m_AnimationTriggers)
  i906.m_Interactable = !!i907[15]
  request.r(i907[16], i907[17], 0, i906, 'm_TargetGraphic')
  return i906
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i909 = data
  i908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i909[0], i908.m_PersistentCalls)
  return i908
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i910 = root || request.c( 'ProgressSlider' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'progressSlider')
  i910.maxProgressItems = i911[2]
  i910.startProgressItems = i911[3]
  request.r(i911[4], i911[5], 0, i910, 'progressText')
  return i910
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i912 = root || request.c( 'Ply_Pool' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Ply_Pool+PoolAmount', i915[i + 0]) );
  }
  i912.poolAmounts = i914
  request.r(i913[1], i913[2], 0, i912, 'poolHolder')
  return i912
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i918 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i919 = data
  i918.type = i919[0]
  i918.amount = i919[1]
  request.r(i919[2], i919[3], 0, i918, 'gameUnit')
  return i918
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i920 = root || request.c( 'Ply_SoundManager' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Ply_SoundManager+FxAudio', i923[i + 0]) );
  }
  i920.fxAudios = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i920.audioClips = i924
  request.r(i921[2], i921[3], 0, i920, 'sound')
  return i920
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i928 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i929 = data
  i928.fxType = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'audioClip')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'clip')
  request.r(i933[2], i933[3], 0, i932, 'outputAudioMixerGroup')
  i932.playOnAwake = !!i933[4]
  i932.loop = !!i933[5]
  i932.time = i933[6]
  i932.volume = i933[7]
  i932.pitch = i933[8]
  i932.enabled = !!i933[9]
  return i932
}

Deserializers["GameManager"] = function (request, data, root) {
  var i934 = root || request.c( 'GameManager' )
  var i935 = data
  i934.isPlaying = !!i935[0]
  i934.isTutorial = !!i935[1]
  i934.isGotoStore = !!i935[2]
  i934.isLoseGame = !!i935[3]
  i934.countMove = i935[4]
  i934.currentLayer = i935[5]
  request.r(i935[6], i935[7], 0, i934, 'trashCan')
  request.r(i935[8], i935[9], 0, i934, 'step1')
  request.r(i935[10], i935[11], 0, i934, 'paperBox')
  return i934
}

Deserializers["UIManager"] = function (request, data, root) {
  var i936 = root || request.c( 'UIManager' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'winUI')
  request.r(i937[2], i937[3], 0, i936, 'loseUI')
  request.r(i937[4], i937[5], 0, i936, 'tutorial')
  request.r(i937[6], i937[7], 0, i936, 'verticalUI')
  request.r(i937[8], i937[9], 0, i936, 'horizontalUI')
  request.r(i937[10], i937[11], 0, i936, 'downloadBtn')
  request.r(i937[12], i937[13], 0, i936, 'horizontalDownloadBtn')
  request.r(i937[14], i937[15], 0, i936, 'textAnim')
  i936.isGoogleBuild = !!i937[16]
  i936.screenWidth = i937[17]
  i936.screenHeight = i937[18]
  i936.scaleHeightOnWidth = i937[19]
  i936.isVertical = !!i937[20]
  i936.isScreenVertical = !!i937[21]
  request.r(i937[22], i937[23], 0, i936, 'cam')
  i936.verticalUIHeightOnWidthRatio = i937[24]
  i936.scaleCameraOnValidate = !!i937[25]
  i936.screenVerticalHeightOnWidthRatio = i937[26]
  i936.useContinuousScaling = !!i937[27]
  i936.baseOrthographicSize = i937[28]
  i936.baseAspect = i937[29]
  i936.landscapeSizeRatio = i937[30]
  i936.defaultPortraitSizeRatio = i937[31]
  var i939 = i937[32]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('ScreenScaleStep', i939[i + 0]));
  }
  i936.discreteScaleSteps = i938
  i936.usePerspectiveCamera = !!i937[33]
  request.r(i937[34], i937[35], 0, i936, 'perspectiveFocus')
  i936.perspectiveFocusDistance = i937[36]
  i936.perspectivePadding = i937[37]
  i936.fitRendererBounds = !!i937[38]
  request.r(i937[39], i937[40], 0, i936, 'boundsRoot')
  var i941 = i937[41]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i936.boundsRenderers = i940
  return i936
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i944 = root || request.c( 'ScreenScaleStep' )
  var i945 = data
  i944.heightOnWidthRatio = i945[0]
  i944.orthographicSize = i945[1]
  return i944
}

Deserializers["InputManager"] = function (request, data, root) {
  var i948 = root || request.c( 'InputManager' )
  var i949 = data
  i948.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i949[0] )
  i948.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i949[1] )
  i948.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i949[2] )
  i948.isDragging = !!i949[3]
  return i948
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i950 = root || request.c( 'HandTutManager' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.items = i952
  request.r(i951[1], i951[2], 0, i950, 'knife')
  request.r(i951[3], i951[4], 0, i950, 'knife2')
  request.r(i951[5], i951[6], 0, i950, 'handTutObject')
  request.r(i951[7], i951[8], 0, i950, 'tapToCookObject')
  request.r(i951[9], i951[10], 0, i950, 'oilItem')
  request.r(i951[11], i951[12], 0, i950, 'stoveToggleEvent')
  request.r(i951[13], i951[14], 0, i950, 'waterToggleEvent')
  request.r(i951[15], i951[16], 0, i950, 'sinkBlock')
  var i955 = i951[17]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.itemsInWater = i954
  i950.noDelayItemCount = i951[18]
  i950.breakHeartNoDelayThreshold = i951[19]
  i950.shortIdleDelay = i951[20]
  i950.maxHandTutShowCount = i951[21]
  i950.showSinkWaterTutorialOnStart = !!i951[22]
  i950.waitForBowlIntro = !!i951[23]
  i950.idleDelay = i951[24]
  i950.firstHandTutDelay = i951[25]
  i950.phaseHandTutDelay = i951[26]
  i950.moveDuration = i951[27]
  i950.dragFadeDuration = i951[28]
  i950.clickScaleDuration = i951[29]
  i950.waitAtEndDuration = i951[30]
  i950.handZPosition = i951[31]
  i950.clickScaleMultiplier = i951[32]
  i950.moveEase = i951[33]
  return i950
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i960 = root || request.c( 'SortChildByZPos' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'transformToSort')
  var i963 = i961[2]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i960.childrenToSort = i962
  i960.zOffset = i961[3]
  i960.baseZ = i961[4]
  return i960
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i966 = root || request.c( 'PhaseManager' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('PhaseData', i969[i + 0]));
  }
  i966.phases = i968
  i966.transitionType = i967[1]
  i966.transitionDuration = i967[2]
  i966.delayBeforeNextPhase = i967[3]
  i966.offScreenLeftX = i967[4]
  i966.offScreenRightX = i967[5]
  i966.offScreenBottomY = i967[6]
  i966.offScreenTopY = i967[7]
  i966.centerScreenX = i967[8]
  request.r(i967[9], i967[10], 0, i966, 'phaseTransitionObject')
  i966.phaseTransitionObjectDuration = i967[11]
  i966.currentPhaseIndex = i967[12]
  i966.currentStepCount = i967[13]
  i966.isECPopup = !!i967[14]
  return i966
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i972 = root || request.c( 'PhaseData' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'phaseObject')
  i972.totalSteps = i973[2]
  i972.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i973[3], i972.onPhaseReady)
  return i972
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i974 = root || request.c( 'ItemTypeDoneManager' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i977[i + 0]));
  }
  i974.itemTypeGroups = i976
  return i974
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i981 = data
  i980.itemType = i981[0]
  var i983 = i981[1]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i980.items = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i985 = data
  i984.aspect = i985[0]
  i984.orthographic = !!i985[1]
  i984.orthographicSize = i985[2]
  i984.backgroundColor = new pc.Color(i985[3], i985[4], i985[5], i985[6])
  i984.nearClipPlane = i985[7]
  i984.farClipPlane = i985[8]
  i984.fieldOfView = i985[9]
  i984.depth = i985[10]
  i984.clearFlags = i985[11]
  i984.cullingMask = i985[12]
  i984.rect = i985[13]
  request.r(i985[14], i985[15], 0, i984, 'targetTexture')
  i984.usePhysicalProperties = !!i985[16]
  i984.focalLength = i985[17]
  i984.sensorSize = new pc.Vec2( i985[18], i985[19] )
  i984.lensShift = new pc.Vec2( i985[20], i985[21] )
  i984.gateFit = i985[22]
  i984.commandBufferCount = i985[23]
  i984.cameraType = i985[24]
  i984.enabled = !!i985[25]
  return i984
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_FirstSelected')
  i986.m_sendNavigationEvents = !!i987[2]
  i986.m_DragThreshold = i987[3]
  return i986
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i989 = data
  i988.m_HorizontalAxis = i989[0]
  i988.m_VerticalAxis = i989[1]
  i988.m_SubmitButton = i989[2]
  i988.m_CancelButton = i989[3]
  i988.m_InputActionsPerSecond = i989[4]
  i988.m_RepeatDelay = i989[5]
  i988.m_ForceModuleActive = !!i989[6]
  i988.m_SendPointerHoverToParent = !!i989[7]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i991 = data
  i990.center = new pc.Vec3( i991[0], i991[1], i991[2] )
  i990.radius = i991[3]
  i990.height = i991[4]
  i990.direction = i991[5]
  i990.enabled = !!i991[6]
  i990.isTrigger = !!i991[7]
  request.r(i991[8], i991[9], 0, i990, 'material')
  return i990
}

Deserializers["Item"] = function (request, data, root) {
  var i992 = root || request.c( 'Item' )
  var i993 = data
  i992.isDone = !!i993[0]
  i992.onProcess = !!i993[1]
  i992.requireMatchingTargetTypeForHandTut = !!i993[2]
  request.r(i993[3], i993[4], 0, i992, 'itemDraggable')
  request.r(i993[5], i993[6], 0, i992, 'itemClickable')
  request.r(i993[7], i993[8], 0, i992, 'itemStirring')
  request.r(i993[9], i993[10], 0, i992, 'itemKnifeSpriteMaskCutter')
  request.r(i993[11], i993[12], 0, i992, 'itemSpriteMaskPainter')
  request.r(i993[13], i993[14], 0, i992, 'itemDragSpriteMaskPainter')
  request.r(i993[15], i993[16], 0, i992, 'itemMoveToTarget')
  request.r(i993[17], i993[18], 0, i992, 'animator')
  i992.itemType = i993[19]
  request.r(i993[20], i993[21], 0, i992, 'spriteRenderer')
  i992.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i993[22], i992.onKnifeIn)
  request.r(i993[23], i993[24], 0, i992, 'knifePos')
  i992.heartEffectScale = i993[25]
  i992.breakHeartEffectScale = i993[26]
  i992.blinkEffectScale = i993[27]
  i992.mergeEffectScale = i993[28]
  i992.playMoveToTargetFinishSound = !!i993[29]
  i992.moveToTargetFinishFxType = i993[30]
  i992.fxSpawnZPos = i993[31]
  request.r(i993[32], i993[33], 0, i992, 'tf')
  return i992
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i994 = root || request.c( 'ItemStirring' )
  var i995 = data
  i994.stirRadius = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'stirrerTransform')
  request.r(i995[3], i995[4], 0, i994, 'centerPoint')
  i994.movementMode = i995[5]
  i994.lineLength = i995[6]
  i994.lineDirection = new pc.Vec3( i995[7], i995[8], i995[9] )
  i994.flipScaleYByLineDragDirection = !!i995[10]
  request.r(i995[11], i995[12], 0, i994, 'flipScaleTarget')
  request.r(i995[13], i995[14], 0, i994, 'targetAnimator')
  i994.targetStateName = i995[15]
  i994.targetLayer = i995[16]
  i994.stoppedSpeed = i995[17]
  i994.minDragDistanceToAnimate = i995[18]
  i994.dragSpeedMultiplier = i995[19]
  i994.minAnimatorSpeed = i995[20]
  i994.maxAnimatorSpeed = i995[21]
  i994.speedBlendDuration = i995[22]
  i994.completeNormalizedTime = i995[23]
  i994.resetAnimationOnFirstBegin = !!i995[24]
  var i997 = i995[25]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('StirMilestone', i997[i + 0]));
  }
  i994.milestones = i996
  i994.spawnProgressBarOnStir = !!i995[26]
  request.r(i995[27], i995[28], 0, i994, 'spawnProgressBarPoint')
  i994.rollingSoundCooldown = i995[29]
  i994.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i995[30], i994.onStirBegin)
  i994.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i995[31], i994.onStirComplete)
  return i994
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i1000 = root || request.c( 'StirMilestone' )
  var i1001 = data
  i1000.distanceThreshold = i1001[0]
  i1000.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i1001[1], i1000.onMilestoneReached)
  i1000.isReached = !!i1001[2]
  return i1000
}

Deserializers["Spartula"] = function (request, data, root) {
  var i1002 = root || request.c( 'Spartula' )
  var i1003 = data
  i1002.isDone = !!i1003[0]
  i1002.onProcess = !!i1003[1]
  i1002.requireMatchingTargetTypeForHandTut = !!i1003[2]
  request.r(i1003[3], i1003[4], 0, i1002, 'itemDraggable')
  request.r(i1003[5], i1003[6], 0, i1002, 'itemClickable')
  request.r(i1003[7], i1003[8], 0, i1002, 'itemStirring')
  request.r(i1003[9], i1003[10], 0, i1002, 'itemKnifeSpriteMaskCutter')
  request.r(i1003[11], i1003[12], 0, i1002, 'itemSpriteMaskPainter')
  request.r(i1003[13], i1003[14], 0, i1002, 'itemDragSpriteMaskPainter')
  request.r(i1003[15], i1003[16], 0, i1002, 'itemMoveToTarget')
  request.r(i1003[17], i1003[18], 0, i1002, 'animator')
  i1002.itemType = i1003[19]
  request.r(i1003[20], i1003[21], 0, i1002, 'spriteRenderer')
  i1002.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1003[22], i1002.onKnifeIn)
  request.r(i1003[23], i1003[24], 0, i1002, 'knifePos')
  i1002.heartEffectScale = i1003[25]
  i1002.breakHeartEffectScale = i1003[26]
  i1002.blinkEffectScale = i1003[27]
  i1002.mergeEffectScale = i1003[28]
  i1002.playMoveToTargetFinishSound = !!i1003[29]
  i1002.moveToTargetFinishFxType = i1003[30]
  i1002.fxSpawnZPos = i1003[31]
  request.r(i1003[32], i1003[33], 0, i1002, 'tf')
  return i1002
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemDragChildRotator' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'rotateTarget')
  i1004.dragEulerAngles = new pc.Vec3( i1005[2], i1005[3], i1005[4] )
  i1004.useLocalRotation = !!i1005[5]
  i1004.rotateRelative = !!i1005[6]
  i1004.rotateDuration = i1005[7]
  i1004.rotateEase = i1005[8]
  i1004.rotateMode = i1005[9]
  return i1004
}

Deserializers["Pan"] = function (request, data, root) {
  var i1006 = root || request.c( 'Pan' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'fryingFX')
  i1006.isOilIn = !!i1007[2]
  i1006.isTurnOnStove = !!i1007[3]
  request.r(i1007[4], i1007[5], 0, i1006, 'stoveBtn')
  request.r(i1007[6], i1007[7], 0, i1006, 'spartula')
  i1006.stoveShakeDelay = i1007[8]
  i1006.stoveShakeDuration = i1007[9]
  i1006.vegeOn = i1007[10]
  request.r(i1007[11], i1007[12], 0, i1006, 'salt')
  request.r(i1007[13], i1007[14], 0, i1006, 'chillie')
  request.r(i1007[15], i1007[16], 0, i1006, 'meat')
  request.r(i1007[17], i1007[18], 0, i1006, 'cream')
  request.r(i1007[19], i1007[20], 0, i1006, 'noodle')
  request.r(i1007[21], i1007[22], 0, i1006, 'lastBowl')
  i1006.isDone = !!i1007[23]
  i1006.onProcess = !!i1007[24]
  i1006.requireMatchingTargetTypeForHandTut = !!i1007[25]
  request.r(i1007[26], i1007[27], 0, i1006, 'itemDraggable')
  request.r(i1007[28], i1007[29], 0, i1006, 'itemClickable')
  request.r(i1007[30], i1007[31], 0, i1006, 'itemStirring')
  request.r(i1007[32], i1007[33], 0, i1006, 'itemKnifeSpriteMaskCutter')
  request.r(i1007[34], i1007[35], 0, i1006, 'itemSpriteMaskPainter')
  request.r(i1007[36], i1007[37], 0, i1006, 'itemDragSpriteMaskPainter')
  request.r(i1007[38], i1007[39], 0, i1006, 'itemMoveToTarget')
  request.r(i1007[40], i1007[41], 0, i1006, 'animator')
  i1006.itemType = i1007[42]
  request.r(i1007[43], i1007[44], 0, i1006, 'spriteRenderer')
  i1006.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1007[45], i1006.onKnifeIn)
  request.r(i1007[46], i1007[47], 0, i1006, 'knifePos')
  i1006.heartEffectScale = i1007[48]
  i1006.breakHeartEffectScale = i1007[49]
  i1006.blinkEffectScale = i1007[50]
  i1006.mergeEffectScale = i1007[51]
  i1006.playMoveToTargetFinishSound = !!i1007[52]
  i1006.moveToTargetFinishFxType = i1007[53]
  i1006.fxSpawnZPos = i1007[54]
  request.r(i1007[55], i1007[56], 0, i1006, 'tf')
  return i1006
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1008 = root || request.c( 'Ply_ToggleEvent' )
  var i1009 = data
  i1008.isOn = !!i1009[0]
  i1008.applyStateOnEnable = !!i1009[1]
  i1008.applyStateOnClick = !!i1009[2]
  request.r(i1009[3], i1009[4], 0, i1008, 'targetObject')
  i1008.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1009[5], i1008.onTurnOn)
  i1008.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1009[6], i1008.onTurnOff)
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1011 = data
  i1010.ambientIntensity = i1011[0]
  i1010.reflectionIntensity = i1011[1]
  i1010.ambientMode = i1011[2]
  i1010.ambientLight = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.ambientSkyColor = new pc.Color(i1011[7], i1011[8], i1011[9], i1011[10])
  i1010.ambientGroundColor = new pc.Color(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.ambientEquatorColor = new pc.Color(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fogColor = new pc.Color(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.fogEndDistance = i1011[23]
  i1010.fogStartDistance = i1011[24]
  i1010.fogDensity = i1011[25]
  i1010.fog = !!i1011[26]
  request.r(i1011[27], i1011[28], 0, i1010, 'skybox')
  i1010.fogMode = i1011[29]
  var i1013 = i1011[30]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1013[i + 0]) );
  }
  i1010.lightmaps = i1012
  i1010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1011[31], i1010.lightProbes)
  i1010.lightmapsMode = i1011[32]
  i1010.mixedBakeMode = i1011[33]
  i1010.environmentLightingMode = i1011[34]
  i1010.ambientProbe = new pc.SphericalHarmonicsL2(i1011[35])
  i1010.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1011[36])
  i1010.useReferenceAmbientProbe = !!i1011[37]
  request.r(i1011[38], i1011[39], 0, i1010, 'customReflection')
  request.r(i1011[40], i1011[41], 0, i1010, 'defaultReflection')
  i1010.defaultReflectionMode = i1011[42]
  i1010.defaultReflectionResolution = i1011[43]
  i1010.sunLightObjectId = i1011[44]
  i1010.pixelLightCount = i1011[45]
  i1010.defaultReflectionHDR = !!i1011[46]
  i1010.hasLightDataAsset = !!i1011[47]
  i1010.hasManualGenerate = !!i1011[48]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'lightmapColor')
  request.r(i1017[2], i1017[3], 0, i1016, 'lightmapDirection')
  request.r(i1017[4], i1017[5], 0, i1016, 'shadowMask')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1018 = root || new UnityEngine.LightProbes()
  var i1019 = data
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1029[i + 0]));
  }
  i1026.ShaderCompilationErrors = i1028
  i1026.name = i1027[1]
  i1026.guid = i1027[2]
  var i1031 = i1027[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.shaderDefinedKeywords = i1030
  var i1033 = i1027[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1033[i + 0]) );
  }
  i1026.passes = i1032
  var i1035 = i1027[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1035[i + 0]) );
  }
  i1026.usePasses = i1034
  var i1037 = i1027[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1037[i + 0]) );
  }
  i1026.defaultParameterValues = i1036
  request.r(i1027[7], i1027[8], 0, i1026, 'unityFallbackShader')
  i1026.readDepth = !!i1027[9]
  i1026.hasDepthOnlyPass = !!i1027[10]
  i1026.isCreatedByShaderGraph = !!i1027[11]
  i1026.disableBatching = !!i1027[12]
  i1026.compiled = !!i1027[13]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1041 = data
  i1040.shaderName = i1041[0]
  i1040.errorMessage = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1046 = root || new pc.UnityShaderPass()
  var i1047 = data
  i1046.id = i1047[0]
  i1046.subShaderIndex = i1047[1]
  i1046.name = i1047[2]
  i1046.passType = i1047[3]
  i1046.grabPassTextureName = i1047[4]
  i1046.usePass = !!i1047[5]
  i1046.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[6], i1046.zTest)
  i1046.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[7], i1046.zWrite)
  i1046.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[8], i1046.culling)
  i1046.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[9], i1046.blending)
  i1046.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[10], i1046.alphaBlending)
  i1046.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[11], i1046.colorWriteMask)
  i1046.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[12], i1046.offsetUnits)
  i1046.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[13], i1046.offsetFactor)
  i1046.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[14], i1046.stencilRef)
  i1046.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[15], i1046.stencilReadMask)
  i1046.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[16], i1046.stencilWriteMask)
  i1046.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[17], i1046.stencilOp)
  i1046.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[18], i1046.stencilOpFront)
  i1046.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[19], i1046.stencilOpBack)
  var i1049 = i1047[20]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1049[i + 0]) );
  }
  i1046.tags = i1048
  var i1051 = i1047[21]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.passDefinedKeywords = i1050
  var i1053 = i1047[22]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1053[i + 0]) );
  }
  i1046.passDefinedKeywordGroups = i1052
  var i1055 = i1047[23]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1055[i + 0]) );
  }
  i1046.variants = i1054
  var i1057 = i1047[24]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1057[i + 0]) );
  }
  i1046.excludedVariants = i1056
  i1046.hasDepthReader = !!i1047[25]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1059 = data
  i1058.val = i1059[0]
  i1058.name = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1061 = data
  i1060.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[0], i1060.src)
  i1060.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[1], i1060.dst)
  i1060.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[2], i1060.op)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1063 = data
  i1062.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[0], i1062.pass)
  i1062.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[1], i1062.fail)
  i1062.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[2], i1062.zFail)
  i1062.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[3], i1062.comp)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1070.keywords = i1072
  i1070.hasDiscard = !!i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1077 = data
  i1076.passId = i1077[0]
  i1076.subShaderIndex = i1077[1]
  var i1079 = i1077[2]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1076.keywords = i1078
  i1076.vertexProgram = i1077[3]
  i1076.fragmentProgram = i1077[4]
  i1076.exportedForWebGl2 = !!i1077[5]
  i1076.readDepth = !!i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'shader')
  i1082.pass = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.type = i1087[1]
  i1086.value = new pc.Vec4( i1087[2], i1087[3], i1087[4], i1087[5] )
  i1086.textureValue = i1087[6]
  i1086.shaderPropertyFlag = i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1089 = data
  i1088.name = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'texture')
  i1088.aabb = i1089[3]
  i1088.vertices = i1089[4]
  i1088.triangles = i1089[5]
  i1088.textureRect = UnityEngine.Rect.MinMaxRect(i1089[6], i1089[7], i1089[8], i1089[9])
  i1088.packedRect = UnityEngine.Rect.MinMaxRect(i1089[10], i1089[11], i1089[12], i1089[13])
  i1088.border = new pc.Vec4( i1089[14], i1089[15], i1089[16], i1089[17] )
  i1088.transparency = i1089[18]
  i1088.bounds = i1089[19]
  i1088.pixelsPerUnit = i1089[20]
  i1088.textureWidth = i1089[21]
  i1088.textureHeight = i1089[22]
  i1088.nativeSize = new pc.Vec2( i1089[23], i1089[24] )
  i1088.pivot = new pc.Vec2( i1089[25], i1089[26] )
  i1088.textureRectOffset = new pc.Vec2( i1089[27], i1089[28] )
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1091 = data
  i1090.name = i1091[0]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.wrapMode = i1093[1]
  i1092.isLooping = !!i1093[2]
  i1092.length = i1093[3]
  var i1095 = i1093[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1095[i + 0]) );
  }
  i1092.curves = i1094
  var i1097 = i1093[5]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1097[i + 0]) );
  }
  i1092.events = i1096
  i1092.halfPrecision = !!i1093[6]
  i1092._frameRate = i1093[7]
  i1092.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1093[8], i1092.localBounds)
  i1092.hasMuscleCurves = !!i1093[9]
  var i1099 = i1093[10]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1092.clipMuscleConstant = i1098
  i1092.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1093[11], i1092.clipBindingConstant)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1103 = data
  i1102.path = i1103[0]
  i1102.hash = i1103[1]
  i1102.componentType = i1103[2]
  i1102.property = i1103[3]
  i1102.keys = i1103[4]
  var i1105 = i1103[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1105[i + 0]) );
  }
  i1102.objectReferenceKeys = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1109 = data
  i1108.time = i1109[0]
  request.r(i1109[1], i1109[2], 0, i1108, 'value')
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1113 = data
  i1112.functionName = i1113[0]
  i1112.floatParameter = i1113[1]
  i1112.intParameter = i1113[2]
  i1112.stringParameter = i1113[3]
  request.r(i1113[4], i1113[5], 0, i1112, 'objectReferenceParameter')
  i1112.time = i1113[6]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1115 = data
  i1114.center = new pc.Vec3( i1115[0], i1115[1], i1115[2] )
  i1114.extends = new pc.Vec3( i1115[3], i1115[4], i1115[5] )
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1118.genericBindings = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.pptrCurveMapping = i1122
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1125 = data
  i1124.name = i1125[0]
  var i1127 = i1125[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1127[i + 0]) );
  }
  i1124.layers = i1126
  var i1129 = i1125[2]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1129[i + 0]) );
  }
  i1124.parameters = i1128
  i1124.animationClips = i1125[3]
  i1124.avatarUnsupported = i1125[4]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.defaultWeight = i1133[1]
  i1132.blendingMode = i1133[2]
  i1132.avatarMask = i1133[3]
  i1132.syncedLayerIndex = i1133[4]
  i1132.syncedLayerAffectsTiming = !!i1133[5]
  i1132.syncedLayers = i1133[6]
  i1132.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1133[7], i1132.stateMachine)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.name = i1135[1]
  i1134.path = i1135[2]
  var i1137 = i1135[3]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1137[i + 0]) );
  }
  i1134.states = i1136
  var i1139 = i1135[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1139[i + 0]) );
  }
  i1134.machines = i1138
  var i1141 = i1135[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1141[i + 0]) );
  }
  i1134.entryStateTransitions = i1140
  var i1143 = i1135[6]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1143[i + 0]) );
  }
  i1134.exitStateTransitions = i1142
  var i1145 = i1135[7]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1145[i + 0]) );
  }
  i1134.anyStateTransitions = i1144
  i1134.defaultStateId = i1135[8]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  i1148.cycleOffset = i1149[2]
  i1148.cycleOffsetParameter = i1149[3]
  i1148.cycleOffsetParameterActive = !!i1149[4]
  i1148.mirror = !!i1149[5]
  i1148.mirrorParameter = i1149[6]
  i1148.mirrorParameterActive = !!i1149[7]
  i1148.motionId = i1149[8]
  i1148.nameHash = i1149[9]
  i1148.fullPathHash = i1149[10]
  i1148.speed = i1149[11]
  i1148.speedParameter = i1149[12]
  i1148.speedParameterActive = !!i1149[13]
  i1148.tag = i1149[14]
  i1148.tagHash = i1149[15]
  i1148.writeDefaultValues = !!i1149[16]
  var i1151 = i1149[17]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 2, i1150, '')
  }
  i1148.behaviours = i1150
  var i1153 = i1149[18]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1153[i + 0]) );
  }
  i1148.transitions = i1152
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1159 = data
  i1158.fullPath = i1159[0]
  i1158.canTransitionToSelf = !!i1159[1]
  i1158.duration = i1159[2]
  i1158.exitTime = i1159[3]
  i1158.hasExitTime = !!i1159[4]
  i1158.hasFixedDuration = !!i1159[5]
  i1158.interruptionSource = i1159[6]
  i1158.offset = i1159[7]
  i1158.orderedInterruption = !!i1159[8]
  i1158.destinationStateId = i1159[9]
  i1158.isExit = !!i1159[10]
  i1158.mute = !!i1159[11]
  i1158.solo = !!i1159[12]
  var i1161 = i1159[13]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1161[i + 0]) );
  }
  i1158.conditions = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1167 = data
  i1166.destinationStateId = i1167[0]
  i1166.isExit = !!i1167[1]
  i1166.mute = !!i1167[2]
  i1166.solo = !!i1167[3]
  var i1169 = i1167[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1169[i + 0]) );
  }
  i1166.conditions = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1173 = data
  i1172.defaultBool = !!i1173[0]
  i1172.defaultFloat = i1173[1]
  i1172.defaultInt = i1173[2]
  i1172.name = i1173[3]
  i1172.nameHash = i1173[4]
  i1172.type = i1173[5]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1177 = data
  i1176.mode = i1177[0]
  i1176.parameter = i1177[1]
  i1176.threshold = i1177[2]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.bytes64 = i1179[1]
  i1178.data = i1179[2]
  return i1178
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1181 = data
  i1180.normalStyle = i1181[0]
  i1180.normalSpacingOffset = i1181[1]
  i1180.boldStyle = i1181[2]
  i1180.boldSpacing = i1181[3]
  i1180.italicStyle = i1181[4]
  i1180.tabSize = i1181[5]
  request.r(i1181[6], i1181[7], 0, i1180, 'atlas')
  i1180.m_SourceFontFileGUID = i1181[8]
  i1180.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1181[9], i1180.m_CreationSettings)
  request.r(i1181[10], i1181[11], 0, i1180, 'm_SourceFontFile')
  i1180.m_SourceFontFilePath = i1181[12]
  i1180.m_AtlasPopulationMode = i1181[13]
  i1180.InternalDynamicOS = !!i1181[14]
  var i1183 = i1181[15]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.Glyph', i1183[i + 0]));
  }
  i1180.m_GlyphTable = i1182
  var i1185 = i1181[16]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Character', i1185[i + 0]));
  }
  i1180.m_CharacterTable = i1184
  var i1187 = i1181[17]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1180.m_AtlasTextures = i1186
  i1180.m_AtlasTextureIndex = i1181[18]
  i1180.m_IsMultiAtlasTexturesEnabled = !!i1181[19]
  i1180.m_GetFontFeatures = !!i1181[20]
  i1180.m_ClearDynamicDataOnBuild = !!i1181[21]
  i1180.m_AtlasWidth = i1181[22]
  i1180.m_AtlasHeight = i1181[23]
  i1180.m_AtlasPadding = i1181[24]
  i1180.m_AtlasRenderMode = i1181[25]
  var i1189 = i1181[26]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('UnityEngine.TextCore.GlyphRect', i1189[i + 0]));
  }
  i1180.m_UsedGlyphRects = i1188
  var i1191 = i1181[27]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.GlyphRect', i1191[i + 0]));
  }
  i1180.m_FreeGlyphRects = i1190
  i1180.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1181[28], i1180.m_FontFeatureTable)
  i1180.m_ShouldReimportFontFeatures = !!i1181[29]
  var i1193 = i1181[30]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1180.m_FallbackFontAssetTable = i1192
  var i1195 = i1181[31]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('TMPro.TMP_FontWeightPair', i1195[i + 0]) );
  }
  i1180.m_FontWeightTable = i1194
  var i1197 = i1181[32]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('TMPro.TMP_FontWeightPair', i1197[i + 0]) );
  }
  i1180.fontWeights = i1196
  i1180.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1181[33], i1180.m_fontInfo)
  var i1199 = i1181[34]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_Glyph', i1199[i + 0]));
  }
  i1180.m_glyphInfoList = i1198
  i1180.m_KerningTable = request.d('TMPro.KerningTable', i1181[35], i1180.m_KerningTable)
  var i1201 = i1181[36]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1180.fallbackFontAssets = i1200
  i1180.m_Version = i1181[37]
  i1180.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1181[38], i1180.m_FaceInfo)
  request.r(i1181[39], i1181[40], 0, i1180, 'm_Material')
  return i1180
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1203 = data
  i1202.sourceFontFileName = i1203[0]
  i1202.sourceFontFileGUID = i1203[1]
  i1202.faceIndex = i1203[2]
  i1202.pointSizeSamplingMode = i1203[3]
  i1202.pointSize = i1203[4]
  i1202.padding = i1203[5]
  i1202.paddingMode = i1203[6]
  i1202.packingMode = i1203[7]
  i1202.atlasWidth = i1203[8]
  i1202.atlasHeight = i1203[9]
  i1202.characterSetSelectionMode = i1203[10]
  i1202.characterSequence = i1203[11]
  i1202.referencedFontAssetGUID = i1203[12]
  i1202.referencedTextAssetGUID = i1203[13]
  i1202.fontStyle = i1203[14]
  i1202.fontStyleModifier = i1203[15]
  i1202.renderMode = i1203[16]
  i1202.includeFontFeatures = !!i1203[17]
  return i1202
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1207 = data
  i1206.m_Index = i1207[0]
  i1206.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1207[1], i1206.m_Metrics)
  i1206.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1207[2], i1206.m_GlyphRect)
  i1206.m_Scale = i1207[3]
  i1206.m_AtlasIndex = i1207[4]
  i1206.m_ClassDefinitionType = i1207[5]
  return i1206
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1209 = data
  i1208.m_Width = i1209[0]
  i1208.m_Height = i1209[1]
  i1208.m_HorizontalBearingX = i1209[2]
  i1208.m_HorizontalBearingY = i1209[3]
  i1208.m_HorizontalAdvance = i1209[4]
  return i1208
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1211 = data
  i1210.m_X = i1211[0]
  i1210.m_Y = i1211[1]
  i1210.m_Width = i1211[2]
  i1210.m_Height = i1211[3]
  return i1210
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Character' )
  var i1215 = data
  i1214.m_ElementType = i1215[0]
  i1214.m_Unicode = i1215[1]
  i1214.m_GlyphIndex = i1215[2]
  i1214.m_Scale = i1215[3]
  return i1214
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.MultipleSubstitutionRecord', i1223[i + 0]));
  }
  i1220.m_MultipleSubstitutionRecords = i1222
  var i1225 = i1221[1]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.LigatureSubstitutionRecord', i1225[i + 0]));
  }
  i1220.m_LigatureSubstitutionRecords = i1224
  var i1227 = i1221[2]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1227[i + 0]));
  }
  i1220.m_GlyphPairAdjustmentRecords = i1226
  var i1229 = i1221[3]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1229[i + 0]));
  }
  i1220.m_MarkToBaseAdjustmentRecords = i1228
  var i1231 = i1221[4]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1231[i + 0]));
  }
  i1220.m_MarkToMarkAdjustmentRecords = i1230
  return i1220
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1235 = data
  i1234.m_TargetGlyphID = i1235[0]
  i1234.m_SubstituteGlyphIDs = i1235[1]
  return i1234
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1239 = data
  i1238.m_ComponentGlyphIDs = i1239[0]
  i1238.m_LigatureGlyphID = i1239[1]
  return i1238
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1243 = data
  i1242.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1243[0], i1242.m_FirstAdjustmentRecord)
  i1242.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1243[1], i1242.m_SecondAdjustmentRecord)
  i1242.m_FeatureLookupFlags = i1243[2]
  return i1242
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1247 = data
  i1246.m_BaseGlyphID = i1247[0]
  i1246.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1247[1], i1246.m_BaseGlyphAnchorPoint)
  i1246.m_MarkGlyphID = i1247[2]
  i1246.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1247[3], i1246.m_MarkPositionAdjustment)
  return i1246
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1251 = data
  i1250.m_BaseMarkGlyphID = i1251[0]
  i1250.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1251[1], i1250.m_BaseMarkGlyphAnchorPoint)
  i1250.m_CombiningMarkGlyphID = i1251[2]
  i1250.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1251[3], i1250.m_CombiningMarkPositionAdjustment)
  return i1250
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'regularTypeface')
  request.r(i1257[2], i1257[3], 0, i1256, 'italicTypeface')
  return i1256
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1259 = data
  i1258.Name = i1259[0]
  i1258.PointSize = i1259[1]
  i1258.Scale = i1259[2]
  i1258.CharacterCount = i1259[3]
  i1258.LineHeight = i1259[4]
  i1258.Baseline = i1259[5]
  i1258.Ascender = i1259[6]
  i1258.CapHeight = i1259[7]
  i1258.Descender = i1259[8]
  i1258.CenterLine = i1259[9]
  i1258.SuperscriptOffset = i1259[10]
  i1258.SubscriptOffset = i1259[11]
  i1258.SubSize = i1259[12]
  i1258.Underline = i1259[13]
  i1258.UnderlineThickness = i1259[14]
  i1258.strikethrough = i1259[15]
  i1258.strikethroughThickness = i1259[16]
  i1258.TabWidth = i1259[17]
  i1258.Padding = i1259[18]
  i1258.AtlasWidth = i1259[19]
  i1258.AtlasHeight = i1259[20]
  return i1258
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.x = i1263[1]
  i1262.y = i1263[2]
  i1262.width = i1263[3]
  i1262.height = i1263[4]
  i1262.xOffset = i1263[5]
  i1262.yOffset = i1263[6]
  i1262.xAdvance = i1263[7]
  i1262.scale = i1263[8]
  return i1262
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.KerningTable' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.KerningPair', i1267[i + 0]));
  }
  i1264.kerningPairs = i1266
  return i1264
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.KerningPair' )
  var i1271 = data
  i1270.xOffset = i1271[0]
  i1270.m_FirstGlyph = i1271[1]
  i1270.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[2], i1270.m_FirstGlyphAdjustments)
  i1270.m_SecondGlyph = i1271[3]
  i1270.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[4], i1270.m_SecondGlyphAdjustments)
  i1270.m_IgnoreSpacingAdjustments = !!i1271[5]
  return i1270
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1273 = data
  i1272.m_FaceIndex = i1273[0]
  i1272.m_FamilyName = i1273[1]
  i1272.m_StyleName = i1273[2]
  i1272.m_PointSize = i1273[3]
  i1272.m_Scale = i1273[4]
  i1272.m_UnitsPerEM = i1273[5]
  i1272.m_LineHeight = i1273[6]
  i1272.m_AscentLine = i1273[7]
  i1272.m_CapLine = i1273[8]
  i1272.m_MeanLine = i1273[9]
  i1272.m_Baseline = i1273[10]
  i1272.m_DescentLine = i1273[11]
  i1272.m_SuperscriptOffset = i1273[12]
  i1272.m_SuperscriptSize = i1273[13]
  i1272.m_SubscriptOffset = i1273[14]
  i1272.m_SubscriptSize = i1273[15]
  i1272.m_UnderlineOffset = i1273[16]
  i1272.m_UnderlineThickness = i1273[17]
  i1272.m_StrikethroughOffset = i1273[18]
  i1272.m_StrikethroughThickness = i1273[19]
  i1272.m_TabWidth = i1273[20]
  return i1272
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1275 = data
  i1274.useSafeMode = !!i1275[0]
  i1274.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1275[1], i1274.safeModeOptions)
  i1274.timeScale = i1275[2]
  i1274.unscaledTimeScale = i1275[3]
  i1274.useSmoothDeltaTime = !!i1275[4]
  i1274.maxSmoothUnscaledTime = i1275[5]
  i1274.rewindCallbackMode = i1275[6]
  i1274.showUnityEditorReport = !!i1275[7]
  i1274.logBehaviour = i1275[8]
  i1274.drawGizmos = !!i1275[9]
  i1274.defaultRecyclable = !!i1275[10]
  i1274.defaultAutoPlay = i1275[11]
  i1274.defaultUpdateType = i1275[12]
  i1274.defaultTimeScaleIndependent = !!i1275[13]
  i1274.defaultEaseType = i1275[14]
  i1274.defaultEaseOvershootOrAmplitude = i1275[15]
  i1274.defaultEasePeriod = i1275[16]
  i1274.defaultAutoKill = !!i1275[17]
  i1274.defaultLoopType = i1275[18]
  i1274.debugMode = !!i1275[19]
  i1274.debugStoreTargetId = !!i1275[20]
  i1274.showPreviewPanel = !!i1275[21]
  i1274.storeSettingsLocation = i1275[22]
  i1274.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1275[23], i1274.modules)
  i1274.createASMDEF = !!i1275[24]
  i1274.showPlayingTweens = !!i1275[25]
  i1274.showPausedTweens = !!i1275[26]
  return i1274
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1276 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1277 = data
  i1276.logBehaviour = i1277[0]
  i1276.nestedTweenFailureBehaviour = i1277[1]
  return i1276
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1278 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1279 = data
  i1278.showPanel = !!i1279[0]
  i1278.audioEnabled = !!i1279[1]
  i1278.physicsEnabled = !!i1279[2]
  i1278.physics2DEnabled = !!i1279[3]
  i1278.spriteEnabled = !!i1279[4]
  i1278.uiEnabled = !!i1279[5]
  i1278.uiToolkitEnabled = !!i1279[6]
  i1278.textMeshProEnabled = !!i1279[7]
  i1278.tk2DEnabled = !!i1279[8]
  i1278.deAudioEnabled = !!i1279[9]
  i1278.deUnityExtendedEnabled = !!i1279[10]
  i1278.epoOutlineEnabled = !!i1279[11]
  return i1278
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Settings' )
  var i1281 = data
  i1280.assetVersion = i1281[0]
  i1280.m_TextWrappingMode = i1281[1]
  i1280.m_enableKerning = !!i1281[2]
  var i1283 = i1281[3]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(i1283[i + 0]);
  }
  i1280.m_ActiveFontFeatures = i1282
  i1280.m_enableExtraPadding = !!i1281[4]
  i1280.m_enableTintAllSprites = !!i1281[5]
  i1280.m_enableParseEscapeCharacters = !!i1281[6]
  i1280.m_EnableRaycastTarget = !!i1281[7]
  i1280.m_GetFontFeaturesAtRuntime = !!i1281[8]
  i1280.m_missingGlyphCharacter = i1281[9]
  i1280.m_ClearDynamicDataOnBuild = !!i1281[10]
  i1280.m_warningsDisabled = !!i1281[11]
  request.r(i1281[12], i1281[13], 0, i1280, 'm_defaultFontAsset')
  i1280.m_defaultFontAssetPath = i1281[14]
  i1280.m_defaultFontSize = i1281[15]
  i1280.m_defaultAutoSizeMinRatio = i1281[16]
  i1280.m_defaultAutoSizeMaxRatio = i1281[17]
  i1280.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1281[18], i1281[19] )
  i1280.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1281[20], i1281[21] )
  i1280.m_autoSizeTextContainer = !!i1281[22]
  i1280.m_IsTextObjectScaleStatic = !!i1281[23]
  var i1285 = i1281[24]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1280.m_fallbackFontAssets = i1284
  i1280.m_matchMaterialPreset = !!i1281[25]
  i1280.m_HideSubTextObjects = !!i1281[26]
  request.r(i1281[27], i1281[28], 0, i1280, 'm_defaultSpriteAsset')
  i1280.m_defaultSpriteAssetPath = i1281[29]
  i1280.m_enableEmojiSupport = !!i1281[30]
  i1280.m_MissingCharacterSpriteUnicode = i1281[31]
  var i1287 = i1281[32]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1280.m_EmojiFallbackTextAssets = i1286
  i1280.m_defaultColorGradientPresetsPath = i1281[33]
  request.r(i1281[34], i1281[35], 0, i1280, 'm_defaultStyleSheet')
  i1280.m_StyleSheetsResourcePath = i1281[36]
  request.r(i1281[37], i1281[38], 0, i1280, 'm_leadingCharacters')
  request.r(i1281[39], i1281[40], 0, i1280, 'm_followingCharacters')
  i1280.m_UseModernHangulLineBreakingRules = !!i1281[41]
  return i1280
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'spriteSheet')
  var i1293 = i1291[2]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Sprite', i1293[i + 0]));
  }
  i1290.spriteInfoList = i1292
  var i1295 = i1291[3]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1290.fallbackSpriteAssets = i1294
  var i1297 = i1291[4]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.TMP_SpriteCharacter', i1297[i + 0]));
  }
  i1290.m_SpriteCharacterTable = i1296
  var i1299 = i1291[5]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_SpriteGlyph', i1299[i + 0]));
  }
  i1290.m_GlyphTable = i1298
  i1290.m_Version = i1291[6]
  i1290.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1291[7], i1290.m_FaceInfo)
  request.r(i1291[8], i1291[9], 0, i1290, 'm_Material')
  return i1290
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.hashCode = i1303[1]
  i1302.unicode = i1303[2]
  i1302.pivot = new pc.Vec2( i1303[3], i1303[4] )
  request.r(i1303[5], i1303[6], 0, i1302, 'sprite')
  i1302.id = i1303[7]
  i1302.x = i1303[8]
  i1302.y = i1303[9]
  i1302.width = i1303[10]
  i1302.height = i1303[11]
  i1302.xOffset = i1303[12]
  i1302.yOffset = i1303[13]
  i1302.xAdvance = i1303[14]
  i1302.scale = i1303[15]
  return i1302
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1309 = data
  i1308.m_Name = i1309[0]
  i1308.m_ElementType = i1309[1]
  i1308.m_Unicode = i1309[2]
  i1308.m_GlyphIndex = i1309[3]
  i1308.m_Scale = i1309[4]
  return i1308
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'sprite')
  i1312.m_Index = i1313[2]
  i1312.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1313[3], i1312.m_Metrics)
  i1312.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1313[4], i1312.m_GlyphRect)
  i1312.m_Scale = i1313[5]
  i1312.m_AtlasIndex = i1313[6]
  i1312.m_ClassDefinitionType = i1313[7]
  return i1312
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Style', i1317[i + 0]));
  }
  i1314.m_StyleList = i1316
  return i1314
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Style' )
  var i1321 = data
  i1320.m_Name = i1321[0]
  i1320.m_HashCode = i1321[1]
  i1320.m_OpeningDefinition = i1321[2]
  i1320.m_ClosingDefinition = i1321[3]
  i1320.m_OpeningTagArray = i1321[4]
  i1320.m_ClosingTagArray = i1321[5]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1325[i + 0]) );
  }
  i1322.files = i1324
  i1322.componentToPrefabIds = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1329 = data
  i1328.path = i1329[0]
  request.r(i1329[1], i1329[2], 0, i1328, 'unityObject')
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1333[i + 0]) );
  }
  i1330.scriptsExecutionOrder = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1335[i + 0]) );
  }
  i1330.sortingLayers = i1334
  var i1337 = i1331[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1337[i + 0]) );
  }
  i1330.cullingLayers = i1336
  i1330.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1331[3], i1330.timeSettings)
  i1330.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1331[4], i1330.physicsSettings)
  i1330.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1331[5], i1330.physics2DSettings)
  i1330.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1331[6], i1330.qualitySettings)
  i1330.enableRealtimeShadows = !!i1331[7]
  i1330.enableAutoInstancing = !!i1331[8]
  i1330.enableStaticBatching = !!i1331[9]
  i1330.enableDynamicBatching = !!i1331[10]
  i1330.lightmapEncodingQuality = i1331[11]
  i1330.desiredColorSpace = i1331[12]
  var i1339 = i1331[13]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1330.allTags = i1338
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.value = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  i1346.value = i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1351 = data
  i1350.id = i1351[0]
  i1350.name = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1353 = data
  i1352.fixedDeltaTime = i1353[0]
  i1352.maximumDeltaTime = i1353[1]
  i1352.timeScale = i1353[2]
  i1352.maximumParticleTimestep = i1353[3]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1355 = data
  i1354.gravity = new pc.Vec3( i1355[0], i1355[1], i1355[2] )
  i1354.defaultSolverIterations = i1355[3]
  i1354.bounceThreshold = i1355[4]
  i1354.autoSyncTransforms = !!i1355[5]
  i1354.autoSimulation = !!i1355[6]
  var i1357 = i1355[7]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'material')
  i1362.gravity = new pc.Vec2( i1363[2], i1363[3] )
  i1362.positionIterations = i1363[4]
  i1362.velocityIterations = i1363[5]
  i1362.velocityThreshold = i1363[6]
  i1362.maxLinearCorrection = i1363[7]
  i1362.maxAngularCorrection = i1363[8]
  i1362.maxTranslationSpeed = i1363[9]
  i1362.maxRotationSpeed = i1363[10]
  i1362.baumgarteScale = i1363[11]
  i1362.baumgarteTOIScale = i1363[12]
  i1362.timeToSleep = i1363[13]
  i1362.linearSleepTolerance = i1363[14]
  i1362.angularSleepTolerance = i1363[15]
  i1362.defaultContactOffset = i1363[16]
  i1362.autoSimulation = !!i1363[17]
  i1362.queriesHitTriggers = !!i1363[18]
  i1362.queriesStartInColliders = !!i1363[19]
  i1362.callbacksOnDisable = !!i1363[20]
  i1362.reuseCollisionCallbacks = !!i1363[21]
  i1362.autoSyncTransforms = !!i1363[22]
  var i1365 = i1363[23]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1365[i + 0]) );
  }
  i1362.collisionMatrix = i1364
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.layerId = i1369[1]
  i1368.otherLayerId = i1369[2]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1373[i + 0]) );
  }
  i1370.qualityLevels = i1372
  var i1375 = i1371[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1370.names = i1374
  i1370.shadows = i1371[2]
  i1370.anisotropicFiltering = i1371[3]
  i1370.antiAliasing = i1371[4]
  i1370.lodBias = i1371[5]
  i1370.shadowCascades = i1371[6]
  i1370.shadowDistance = i1371[7]
  i1370.shadowmaskMode = i1371[8]
  i1370.shadowProjection = i1371[9]
  i1370.shadowResolution = i1371[10]
  i1370.softParticles = !!i1371[11]
  i1370.softVegetation = !!i1371[12]
  i1370.activeColorSpace = i1371[13]
  i1370.desiredColorSpace = i1371[14]
  i1370.masterTextureLimit = i1371[15]
  i1370.maxQueuedFrames = i1371[16]
  i1370.particleRaycastBudget = i1371[17]
  i1370.pixelLightCount = i1371[18]
  i1370.realtimeReflectionProbes = !!i1371[19]
  i1370.shadowCascade2Split = i1371[20]
  i1370.shadowCascade4Split = new pc.Vec3( i1371[21], i1371[22], i1371[23] )
  i1370.streamingMipmapsActive = !!i1371[24]
  i1370.vSyncCount = i1371[25]
  i1370.asyncUploadBufferSize = i1371[26]
  i1370.asyncUploadTimeSlice = i1371[27]
  i1370.billboardsFaceCameraPosition = !!i1371[28]
  i1370.shadowNearPlaneOffset = i1371[29]
  i1370.streamingMipmapsMemoryBudget = i1371[30]
  i1370.maximumLODLevel = i1371[31]
  i1370.streamingMipmapsAddAllCameras = !!i1371[32]
  i1370.streamingMipmapsMaxLevelReduction = i1371[33]
  i1370.streamingMipmapsRenderersPerFrame = i1371[34]
  i1370.resolutionScalingFixedDPIFactor = i1371[35]
  i1370.streamingMipmapsMaxFileIORequests = i1371[36]
  i1370.currentQualityLevel = i1371[37]
  return i1370
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1379 = data
  i1378.m_GlyphIndex = i1379[0]
  i1378.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1379[1], i1378.m_GlyphValueRecord)
  return i1378
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1381 = data
  i1380.m_XCoordinate = i1381[0]
  i1380.m_YCoordinate = i1381[1]
  return i1380
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1383 = data
  i1382.m_XPositionAdjustment = i1383[0]
  i1382.m_YPositionAdjustment = i1383[1]
  return i1382
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1385 = data
  i1384.xPlacement = i1385[0]
  i1384.yPlacement = i1385[1]
  i1384.xAdvance = i1385[2]
  i1384.yAdvance = i1385[3]
  return i1384
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1387 = data
  i1386.m_XPlacement = i1387[0]
  i1386.m_YPlacement = i1387[1]
  i1386.m_XAdvance = i1387[2]
  i1386.m_YAdvance = i1387[3]
  return i1386
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[28],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[28],"96":[97],"98":[99],"100":[99],"27":[13],"101":[102],"103":[20],"104":[105],"58":[20],"20":[105],"24":[20],"106":[20],"107":[105],"108":[105],"57":[105],"109":[13],"110":[16,13],"111":[97],"112":[16,13],"113":[25,97],"114":[97],"115":[97,116],"117":[75],"118":[82],"119":[120],"121":[122],"123":[5],"124":[28],"125":[126],"127":[13],"128":[97,13],"32":[13,16],"129":[13],"130":[16,13],"131":[97],"132":[16,13],"133":[13],"134":[135],"136":[135],"137":[135],"138":[13],"139":[13],"30":[27],"15":[16,13],"140":[13],"29":[27],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[13],"150":[16,13],"151":[13],"152":[13],"153":[13],"36":[13],"154":[16,13],"155":[13],"156":[54],"157":[54],"55":[54],"158":[54],"159":[28],"160":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Item","Spartula","Pan","Ply_ToggleEvent","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","ItemClickable","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "36.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v62_Spaghetti_TurkeySauce";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1765";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5028";

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

Deserializers.buildID = "0447a651-d40c-450e-9c5e-4883c17f5747";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

