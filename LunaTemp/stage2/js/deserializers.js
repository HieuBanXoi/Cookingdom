var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointSpring' )
  var i699 = data
  i698.spring = i699[0]
  i698.damper = i699[1]
  i698.targetPosition = i699[2]
  return i698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor' )
  var i701 = data
  i700.m_TargetVelocity = i701[0]
  i700.m_Force = i701[1]
  i700.m_FreeSpin = i701[2]
  return i700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointLimits' )
  var i703 = data
  i702.m_Min = i703[0]
  i702.m_Max = i703[1]
  i702.m_Bounciness = i703[2]
  i702.m_BounceMinVelocity = i703[3]
  i702.m_ContactDistance = i703[4]
  i702.minBounce = i703[5]
  i702.maxBounce = i703[6]
  return i702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointDrive' )
  var i705 = data
  i704.m_PositionSpring = i705[0]
  i704.m_PositionDamper = i705[1]
  i704.m_MaximumForce = i705[2]
  i704.m_UseAcceleration = i705[3]
  return i704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i707 = data
  i706.m_Spring = i707[0]
  i706.m_Damper = i707[1]
  return i706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i709 = data
  i708.m_Limit = i709[0]
  i708.m_Bounciness = i709[1]
  i708.m_ContactDistance = i709[2]
  return i708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i711 = data
  i710.m_ExtremumSlip = i711[0]
  i710.m_ExtremumValue = i711[1]
  i710.m_AsymptoteSlip = i711[2]
  i710.m_AsymptoteValue = i711[3]
  i710.m_Stiffness = i711[4]
  return i710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i713 = data
  i712.m_LowerAngle = i713[0]
  i712.m_UpperAngle = i713[1]
  return i712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i715 = data
  i714.m_MotorSpeed = i715[0]
  i714.m_MaximumMotorTorque = i715[1]
  return i714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i717 = data
  i716.m_DampingRatio = i717[0]
  i716.m_Frequency = i717[1]
  i716.m_Angle = i717[2]
  return i716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i719 = data
  i718.m_LowerTranslation = i719[0]
  i718.m_UpperTranslation = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i720 = root || new pc.UnityMaterial()
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'shader')
  i720.renderQueue = i721[3]
  i720.enableInstancing = !!i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i723[i + 0]) );
  }
  i720.floatParameters = i722
  var i725 = i721[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i725[i + 0]) );
  }
  i720.colorParameters = i724
  var i727 = i721[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i727[i + 0]) );
  }
  i720.vectorParameters = i726
  var i729 = i721[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i729[i + 0]) );
  }
  i720.textureParameters = i728
  var i731 = i721[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i731[i + 0]) );
  }
  i720.materialFlags = i730
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Color(i739[1], i739[2], i739[3], i739[4])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Vec4( i743[1], i743[2], i743[3], i743[4] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'value')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i751 = data
  i750.name = i751[0]
  i750.enabled = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i753 = data
  i752.name = i753[0]
  i752.width = i753[1]
  i752.height = i753[2]
  i752.mipmapCount = i753[3]
  i752.anisoLevel = i753[4]
  i752.filterMode = i753[5]
  i752.hdr = !!i753[6]
  i752.format = i753[7]
  i752.wrapMode = i753[8]
  i752.alphaIsTransparency = !!i753[9]
  i752.alphaSource = i753[10]
  i752.graphicsFormat = i753[11]
  i752.sRGBTexture = !!i753[12]
  i752.desiredColorSpace = i753[13]
  i752.wrapU = i753[14]
  i752.wrapV = i753[15]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i755 = data
  i754.position = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.scale = new pc.Vec3( i755[3], i755[4], i755[5] )
  i754.rotation = new pc.Quat(i755[6], i755[7], i755[8], i755[9])
  return i754
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i756 = root || request.c( 'HeartEffect' )
  var i757 = data
  i756.defaultLifeTime = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'tf')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i759 = data
  i758.color = new pc.Color(i759[0], i759[1], i759[2], i759[3])
  request.r(i759[4], i759[5], 0, i758, 'sprite')
  i758.flipX = !!i759[6]
  i758.flipY = !!i759[7]
  i758.drawMode = i759[8]
  i758.size = new pc.Vec2( i759[9], i759[10] )
  i758.tileMode = i759[11]
  i758.adaptiveModeThreshold = i759[12]
  i758.maskInteraction = i759[13]
  i758.spriteSortPoint = i759[14]
  i758.enabled = !!i759[15]
  request.r(i759[16], i759[17], 0, i758, 'sharedMaterial')
  var i761 = i759[18]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sharedMaterials = i760
  i758.receiveShadows = !!i759[19]
  i758.shadowCastingMode = i759[20]
  i758.sortingLayerID = i759[21]
  i758.sortingOrder = i759[22]
  i758.lightmapIndex = i759[23]
  i758.lightmapSceneIndex = i759[24]
  i758.lightmapScaleOffset = new pc.Vec4( i759[25], i759[26], i759[27], i759[28] )
  i758.lightProbeUsage = i759[29]
  i758.reflectionProbeUsage = i759[30]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i765 = data
  i764.name = i765[0]
  i764.tagId = i765[1]
  i764.enabled = !!i765[2]
  i764.isStatic = !!i765[3]
  i764.layer = i765[4]
  return i764
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i766 = root || request.c( 'HeartBreakEffect' )
  var i767 = data
  i766.defaultLifeTime = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'tf')
  return i766
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i768 = root || request.c( 'BlinkEffect' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'tf')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'mesh')
  i770.meshCount = i771[2]
  i770.activeVertexStreamsCount = i771[3]
  i770.alignment = i771[4]
  i770.renderMode = i771[5]
  i770.sortMode = i771[6]
  i770.lengthScale = i771[7]
  i770.velocityScale = i771[8]
  i770.cameraVelocityScale = i771[9]
  i770.normalDirection = i771[10]
  i770.sortingFudge = i771[11]
  i770.minParticleSize = i771[12]
  i770.maxParticleSize = i771[13]
  i770.pivot = new pc.Vec3( i771[14], i771[15], i771[16] )
  request.r(i771[17], i771[18], 0, i770, 'trailMaterial')
  i770.applyActiveColorSpace = !!i771[19]
  i770.enabled = !!i771[20]
  request.r(i771[21], i771[22], 0, i770, 'sharedMaterial')
  var i773 = i771[23]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.sharedMaterials = i772
  i770.receiveShadows = !!i771[24]
  i770.shadowCastingMode = i771[25]
  i770.sortingLayerID = i771[26]
  i770.sortingOrder = i771[27]
  i770.lightmapIndex = i771[28]
  i770.lightmapSceneIndex = i771[29]
  i770.lightmapScaleOffset = new pc.Vec4( i771[30], i771[31], i771[32], i771[33] )
  i770.lightProbeUsage = i771[34]
  i770.reflectionProbeUsage = i771[35]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i775 = data
  i774.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i775[0], i774.main)
  i774.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i775[1], i774.colorBySpeed)
  i774.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i775[2], i774.colorOverLifetime)
  i774.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i775[3], i774.emission)
  i774.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i775[4], i774.rotationBySpeed)
  i774.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i775[5], i774.rotationOverLifetime)
  i774.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i775[6], i774.shape)
  i774.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i775[7], i774.sizeBySpeed)
  i774.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i775[8], i774.sizeOverLifetime)
  i774.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i775[9], i774.textureSheetAnimation)
  i774.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i775[10], i774.velocityOverLifetime)
  i774.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i775[11], i774.noise)
  i774.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i775[12], i774.inheritVelocity)
  i774.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i775[13], i774.forceOverLifetime)
  i774.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i775[14], i774.limitVelocityOverLifetime)
  i774.useAutoRandomSeed = !!i775[15]
  i774.randomSeed = i775[16]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemMain()
  var i777 = data
  i776.duration = i777[0]
  i776.loop = !!i777[1]
  i776.prewarm = !!i777[2]
  i776.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.startDelay)
  i776.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[4], i776.startLifetime)
  i776.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[5], i776.startSpeed)
  i776.startSize3D = !!i777[6]
  i776.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.startSizeX)
  i776.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[8], i776.startSizeY)
  i776.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[9], i776.startSizeZ)
  i776.startRotation3D = !!i777[10]
  i776.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[11], i776.startRotationX)
  i776.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[12], i776.startRotationY)
  i776.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[13], i776.startRotationZ)
  i776.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i777[14], i776.startColor)
  i776.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[15], i776.gravityModifier)
  i776.simulationSpace = i777[16]
  request.r(i777[17], i777[18], 0, i776, 'customSimulationSpace')
  i776.simulationSpeed = i777[19]
  i776.useUnscaledTime = !!i777[20]
  i776.scalingMode = i777[21]
  i776.playOnAwake = !!i777[22]
  i776.maxParticles = i777[23]
  i776.emitterVelocityMode = i777[24]
  i776.stopAction = i777[25]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i778 = root || new pc.MinMaxCurve()
  var i779 = data
  i778.mode = i779[0]
  i778.curveMin = new pc.AnimationCurve( { keys_flow: i779[1] } )
  i778.curveMax = new pc.AnimationCurve( { keys_flow: i779[2] } )
  i778.curveMultiplier = i779[3]
  i778.constantMin = i779[4]
  i778.constantMax = i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i780 = root || new pc.MinMaxGradient()
  var i781 = data
  i780.mode = i781[0]
  i780.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i781[1], i780.gradientMin)
  i780.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i781[2], i780.gradientMax)
  i780.colorMin = new pc.Color(i781[3], i781[4], i781[5], i781[6])
  i780.colorMax = new pc.Color(i781[7], i781[8], i781[9], i781[10])
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i783 = data
  i782.mode = i783[0]
  var i785 = i783[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i785[i + 0]) );
  }
  i782.colorKeys = i784
  var i787 = i783[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i787[i + 0]) );
  }
  i782.alphaKeys = i786
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemColorBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[1], i788.color)
  i788.range = new pc.Vec2( i789[2], i789[3] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i793 = data
  i792.color = new pc.Color(i793[0], i793[1], i793[2], i793[3])
  i792.time = i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i797 = data
  i796.alpha = i797[0]
  i796.time = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemColorOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i799[1], i798.color)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemEmitter()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.rateOverTime)
  i800.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.rateOverDistance)
  var i803 = i801[3]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i803[i + 0]) );
  }
  i800.bursts = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemBurst()
  var i807 = data
  i806.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[0], i806.count)
  i806.cycleCount = i807[1]
  i806.minCount = i807[2]
  i806.maxCount = i807[3]
  i806.repeatInterval = i807[4]
  i806.time = i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemRotationBySpeed()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  i808.range = new pc.Vec2( i809[5], i809[6] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemRotationOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemShape()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.shapeType = i813[1]
  i812.randomDirectionAmount = i813[2]
  i812.sphericalDirectionAmount = i813[3]
  i812.randomPositionAmount = i813[4]
  i812.alignToDirection = !!i813[5]
  i812.radius = i813[6]
  i812.radiusMode = i813[7]
  i812.radiusSpread = i813[8]
  i812.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[9], i812.radiusSpeed)
  i812.radiusThickness = i813[10]
  i812.angle = i813[11]
  i812.length = i813[12]
  i812.boxThickness = new pc.Vec3( i813[13], i813[14], i813[15] )
  i812.meshShapeType = i813[16]
  request.r(i813[17], i813[18], 0, i812, 'mesh')
  request.r(i813[19], i813[20], 0, i812, 'meshRenderer')
  request.r(i813[21], i813[22], 0, i812, 'skinnedMeshRenderer')
  i812.useMeshMaterialIndex = !!i813[23]
  i812.meshMaterialIndex = i813[24]
  i812.useMeshColors = !!i813[25]
  i812.normalOffset = i813[26]
  i812.arc = i813[27]
  i812.arcMode = i813[28]
  i812.arcSpread = i813[29]
  i812.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[30], i812.arcSpeed)
  i812.donutRadius = i813[31]
  i812.position = new pc.Vec3( i813[32], i813[33], i813[34] )
  i812.rotation = new pc.Vec3( i813[35], i813[36], i813[37] )
  i812.scale = new pc.Vec3( i813[38], i813[39], i813[40] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemSizeBySpeed()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.separateAxes = !!i815[4]
  i814.range = new pc.Vec2( i815[5], i815[6] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemSizeOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.mode = i819[1]
  i818.animation = i819[2]
  i818.numTilesX = i819[3]
  i818.numTilesY = i819[4]
  i818.useRandomRow = !!i819[5]
  i818.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[6], i818.frameOverTime)
  i818.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[7], i818.startFrame)
  i818.cycleCount = i819[8]
  i818.rowIndex = i819[9]
  i818.flipU = i819[10]
  i818.flipV = i819[11]
  i818.spriteCount = i819[12]
  var i821 = i819[13]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.sprites = i820
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[4], i824.radial)
  i824.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[5], i824.speedModifier)
  i824.space = i825[6]
  i824.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[7], i824.orbitalX)
  i824.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[8], i824.orbitalY)
  i824.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[9], i824.orbitalZ)
  i824.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[10], i824.orbitalOffsetX)
  i824.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[11], i824.orbitalOffsetY)
  i824.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[12], i824.orbitalOffsetZ)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemNoise()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.separateAxes = !!i827[1]
  i826.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.strengthX)
  i826.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.strengthY)
  i826.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.strengthZ)
  i826.frequency = i827[5]
  i826.damping = !!i827[6]
  i826.octaveCount = i827[7]
  i826.octaveMultiplier = i827[8]
  i826.octaveScale = i827[9]
  i826.quality = i827[10]
  i826.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.scrollSpeed)
  i826.scrollSpeedMultiplier = i827[12]
  i826.remapEnabled = !!i827[13]
  i826.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[14], i826.remapX)
  i826.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[15], i826.remapY)
  i826.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[16], i826.remapZ)
  i826.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[17], i826.positionAmount)
  i826.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[18], i826.rotationAmount)
  i826.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[19], i826.sizeAmount)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemInheritVelocity()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.mode = i829[1]
  i828.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.curve)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemForceOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.space = i831[4]
  i830.randomized = !!i831[5]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.limit)
  i832.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.limitX)
  i832.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.limitY)
  i832.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[4], i832.limitZ)
  i832.dampen = i833[5]
  i832.separateAxes = !!i833[6]
  i832.space = i833[7]
  i832.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[8], i832.drag)
  i832.multiplyDragByParticleSize = !!i833[9]
  i832.multiplyDragByParticleVelocity = !!i833[10]
  return i832
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i834 = root || request.c( 'StarExploreFX' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'tf')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i837 = data
  i836.pivot = new pc.Vec2( i837[0], i837[1] )
  i836.anchorMin = new pc.Vec2( i837[2], i837[3] )
  i836.anchorMax = new pc.Vec2( i837[4], i837[5] )
  i836.sizeDelta = new pc.Vec2( i837[6], i837[7] )
  i836.anchoredPosition3D = new pc.Vec3( i837[8], i837[9], i837[10] )
  i836.rotation = new pc.Quat(i837[11], i837[12], i837[13], i837[14])
  i836.scale = new pc.Vec3( i837[15], i837[16], i837[17] )
  return i836
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i838 = root || request.c( 'ClockTimer' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'fillImage')
  request.r(i839[2], i839[3], 0, i838, 'tf')
  i838.spawnZoomDuration = i839[4]
  i838.despawnZoomDuration = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i841 = data
  i840.cullTransparentMesh = !!i841[0]
  return i840
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Image' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Sprite')
  i842.m_Type = i843[2]
  i842.m_PreserveAspect = !!i843[3]
  i842.m_FillCenter = !!i843[4]
  i842.m_FillMethod = i843[5]
  i842.m_FillAmount = i843[6]
  i842.m_FillClockwise = !!i843[7]
  i842.m_FillOrigin = i843[8]
  i842.m_UseSpriteMesh = !!i843[9]
  i842.m_PixelsPerUnitMultiplier = i843[10]
  request.r(i843[11], i843[12], 0, i842, 'm_Material')
  i842.m_Maskable = !!i843[13]
  i842.m_Color = new pc.Color(i843[14], i843[15], i843[16], i843[17])
  i842.m_RaycastTarget = !!i843[18]
  i842.m_RaycastPadding = new pc.Vec4( i843[19], i843[20], i843[21], i843[22] )
  return i842
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i844 = root || request.c( 'WaterSplash' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'tf')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i847 = data
  i846.center = new pc.Vec3( i847[0], i847[1], i847[2] )
  i846.radius = i847[3]
  i846.enabled = !!i847[4]
  i846.isTrigger = !!i847[5]
  request.r(i847[6], i847[7], 0, i846, 'material')
  return i846
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i848 = root || request.c( 'ItemDraggable' )
  var i849 = data
  i848.isDraggable = !!i849[0]
  request.r(i849[1], i849[2], 0, i848, 'returnTransform')
  i848.setParentToReturnTransform = !!i849[3]
  i848.returnToStartOnDragFailed = !!i849[4]
  i848.returnToExactReturnTransformPosition = !!i849[5]
  i848.cacheStartPosWhenStart = !!i849[6]
  i848.targetItemType = i849[7]
  request.r(i849[8], i849[9], 0, i848, 'item')
  i848.checkState = !!i849[10]
  request.r(i849[11], i849[12], 0, i848, 'shadowObject')
  i848.playReturnToStartFinishSound = !!i849[13]
  i848.returnToStartFinishFxType = i849[14]
  i848.spawnBreakHeartOnDropFail = !!i849[15]
  i848.playBeginDragSound = !!i849[16]
  i848.beginDragFxType = i849[17]
  i848.liftOffset = i849[18]
  i848.dragScaleMultiplier = i849[19]
  i848.dragScaleDuration = i849[20]
  i848.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i849[21], i848.onBeginDrag)
  i848.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i849[22], i848.onDropSuccess)
  i848.onDropFail = request.d('UnityEngine.Events.UnityEvent', i849[23], i848.onDropFail)
  i848.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i849[24], i848.onReturnToStartComplete)
  return i848
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i851 = data
  i850.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i851[0], i850.m_PersistentCalls)
  return i850
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('UnityEngine.Events.PersistentCall', i855[i + 0]));
  }
  i852.m_Calls = i854
  return i852
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_Target')
  i858.m_TargetAssemblyTypeName = i859[2]
  i858.m_MethodName = i859[3]
  i858.m_Mode = i859[4]
  i858.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i859[5], i858.m_Arguments)
  i858.m_CallState = i859[6]
  return i858
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_ObjectArgument')
  i860.m_ObjectArgumentAssemblyTypeName = i861[2]
  i860.m_IntArgument = i861[3]
  i860.m_FloatArgument = i861[4]
  i860.m_StringArgument = i861[5]
  i860.m_BoolArgument = !!i861[6]
  return i860
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i862 = root || request.c( 'ItemMoveToTarget' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'defaultTarget')
  i862.duration = i863[2]
  i862.useAnimationCurve = !!i863[3]
  i862.moveCurve = new pc.AnimationCurve( { keys_flow: i863[4] } )
  i862.easeType = i863[5]
  i862.moveType = i863[6]
  i862.jumpPower = i863[7]
  i862.numJumps = i863[8]
  i862.rotate360DuringJump = !!i863[9]
  i862.flipRotate = !!i863[10]
  i862.angleRotate = i863[11]
  i862.scaleOnMove = !!i863[12]
  i862.endScaleMultiplier = i863[13]
  i862.setParentToTarget = !!i863[14]
  i862.onComplete = request.d('UnityEngine.Events.UnityEvent', i863[15], i862.onComplete)
  i862.lockInputWhileMoving = !!i863[16]
  i862.resetParentBeforeMove = !!i863[17]
  return i862
}

Deserializers["Paper"] = function (request, data, root) {
  var i864 = root || request.c( 'Paper' )
  var i865 = data
  i864.isUse = !!i865[0]
  request.r(i865[1], i865[2], 0, i864, 'paper')
  request.r(i865[3], i865[4], 0, i864, 'paperTrash')
  request.r(i865[5], i865[6], 0, i864, 'itemDragRaycastTarget')
  request.r(i865[7], i865[8], 0, i864, 'curentCollider')
  i864.isDone = !!i865[9]
  i864.onProcess = !!i865[10]
  i864.requireMatchingTargetTypeForHandTut = !!i865[11]
  request.r(i865[12], i865[13], 0, i864, 'itemDraggable')
  request.r(i865[14], i865[15], 0, i864, 'itemClickable')
  request.r(i865[16], i865[17], 0, i864, 'itemStirring')
  request.r(i865[18], i865[19], 0, i864, 'itemKnifeSpriteMaskCutter')
  request.r(i865[20], i865[21], 0, i864, 'itemSpriteMaskPainter')
  request.r(i865[22], i865[23], 0, i864, 'itemDragSpriteMaskPainter')
  request.r(i865[24], i865[25], 0, i864, 'itemMoveToTarget')
  request.r(i865[26], i865[27], 0, i864, 'animator')
  i864.itemType = i865[28]
  request.r(i865[29], i865[30], 0, i864, 'spriteRenderer')
  i864.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i865[31], i864.onKnifeIn)
  request.r(i865[32], i865[33], 0, i864, 'knifePos')
  i864.heartEffectScale = i865[34]
  i864.breakHeartEffectScale = i865[35]
  i864.blinkEffectScale = i865[36]
  i864.mergeEffectScale = i865[37]
  i864.playMoveToTargetFinishSound = !!i865[38]
  i864.moveToTargetFinishFxType = i865[39]
  i864.fxSpawnZPos = i865[40]
  request.r(i865[41], i865[42], 0, i864, 'tf')
  return i864
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i866 = root || request.c( 'ItemDragRaycastTarget' )
  var i867 = data
  i866.targetToFind = i867[0]
  i866.targetItemTypeWhenHit = i867[1]
  i866.targetItemTypeOnDropFail = i867[2]
  request.r(i867[3], i867[4], 0, i866, 'raycastPoint')
  i866.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i867[5] )
  i866.rayDistance = i867[6]
  i866.updateMoveDefaultTarget = !!i867[7]
  i866.invokeOnlyWhenTargetChanged = !!i867[8]
  i866.targetChangeEnabled = !!i867[9]
  i866.restoreTargetOnDropFail = !!i867[10]
  i866.resetCurrentTargetOnNoHit = !!i867[11]
  i866.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i867[12], i866.onTargetFound)
  i866.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i867[13], i866.onTargetFoundWithItem)
  return i866
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i868 = root || request.c( 'ItemRaycastTargetEvent' )
  var i869 = data
  i868.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i869[0], i868.m_PersistentCalls)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'animatorController')
  request.r(i871[2], i871[3], 0, i870, 'avatar')
  i870.updateMode = i871[4]
  i870.hasTransformHierarchy = !!i871[5]
  i870.applyRootMotion = !!i871[6]
  var i873 = i871[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.humanBones = i872
  i870.enabled = !!i871[8]
  return i870
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i876 = root || request.c( 'ItemSound' )
  var i877 = data
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i879 = data
  i878.name = i879[0]
  i878.index = i879[1]
  i878.startup = !!i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i881 = data
  i880.planeDistance = i881[0]
  i880.referencePixelsPerUnit = i881[1]
  i880.isFallbackOverlay = !!i881[2]
  i880.renderMode = i881[3]
  i880.renderOrder = i881[4]
  i880.sortingLayerName = i881[5]
  i880.sortingOrder = i881[6]
  i880.scaleFactor = i881[7]
  request.r(i881[8], i881[9], 0, i880, 'worldCamera')
  i880.overrideSorting = !!i881[10]
  i880.pixelPerfect = !!i881[11]
  i880.targetDisplay = i881[12]
  i880.overridePixelPerfect = !!i881[13]
  i880.enabled = !!i881[14]
  return i880
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i883 = data
  i882.m_UiScaleMode = i883[0]
  i882.m_ReferencePixelsPerUnit = i883[1]
  i882.m_ScaleFactor = i883[2]
  i882.m_ReferenceResolution = new pc.Vec2( i883[3], i883[4] )
  i882.m_ScreenMatchMode = i883[5]
  i882.m_MatchWidthOrHeight = i883[6]
  i882.m_PhysicalUnit = i883[7]
  i882.m_FallbackScreenDPI = i883[8]
  i882.m_DefaultSpriteDPI = i883[9]
  i882.m_DynamicPixelsPerUnit = i883[10]
  i882.m_PresetInfoIsWorld = !!i883[11]
  return i882
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i885 = data
  i884.m_IgnoreReversedGraphics = !!i885[0]
  i884.m_BlockingObjects = i885[1]
  i884.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i885[2] )
  return i884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i887 = data
  i886.m_hasFontAssetChanged = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'm_baseMaterial')
  i886.m_maskOffset = new pc.Vec4( i887[3], i887[4], i887[5], i887[6] )
  i886.m_text = i887[7]
  i886.m_isRightToLeft = !!i887[8]
  request.r(i887[9], i887[10], 0, i886, 'm_fontAsset')
  request.r(i887[11], i887[12], 0, i886, 'm_sharedMaterial')
  var i889 = i887[13]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.m_fontSharedMaterials = i888
  request.r(i887[14], i887[15], 0, i886, 'm_fontMaterial')
  var i891 = i887[16]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.m_fontMaterials = i890
  i886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i887[17], i887[18], i887[19], i887[20])
  i886.m_fontColor = new pc.Color(i887[21], i887[22], i887[23], i887[24])
  i886.m_enableVertexGradient = !!i887[25]
  i886.m_colorMode = i887[26]
  i886.m_fontColorGradient = request.d('TMPro.VertexGradient', i887[27], i886.m_fontColorGradient)
  request.r(i887[28], i887[29], 0, i886, 'm_fontColorGradientPreset')
  request.r(i887[30], i887[31], 0, i886, 'm_spriteAsset')
  i886.m_tintAllSprites = !!i887[32]
  request.r(i887[33], i887[34], 0, i886, 'm_StyleSheet')
  i886.m_TextStyleHashCode = i887[35]
  i886.m_overrideHtmlColors = !!i887[36]
  i886.m_faceColor = UnityEngine.Color32.ConstructColor(i887[37], i887[38], i887[39], i887[40])
  i886.m_fontSize = i887[41]
  i886.m_fontSizeBase = i887[42]
  i886.m_fontWeight = i887[43]
  i886.m_enableAutoSizing = !!i887[44]
  i886.m_fontSizeMin = i887[45]
  i886.m_fontSizeMax = i887[46]
  i886.m_fontStyle = i887[47]
  i886.m_HorizontalAlignment = i887[48]
  i886.m_VerticalAlignment = i887[49]
  i886.m_textAlignment = i887[50]
  i886.m_characterSpacing = i887[51]
  i886.m_wordSpacing = i887[52]
  i886.m_lineSpacing = i887[53]
  i886.m_lineSpacingMax = i887[54]
  i886.m_paragraphSpacing = i887[55]
  i886.m_charWidthMaxAdj = i887[56]
  i886.m_TextWrappingMode = i887[57]
  i886.m_wordWrappingRatios = i887[58]
  i886.m_overflowMode = i887[59]
  request.r(i887[60], i887[61], 0, i886, 'm_linkedTextComponent')
  request.r(i887[62], i887[63], 0, i886, 'parentLinkedComponent')
  i886.m_enableKerning = !!i887[64]
  var i893 = i887[65]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(i893[i + 0]);
  }
  i886.m_ActiveFontFeatures = i892
  i886.m_enableExtraPadding = !!i887[66]
  i886.checkPaddingRequired = !!i887[67]
  i886.m_isRichText = !!i887[68]
  i886.m_parseCtrlCharacters = !!i887[69]
  i886.m_isOrthographic = !!i887[70]
  i886.m_isCullingEnabled = !!i887[71]
  i886.m_horizontalMapping = i887[72]
  i886.m_verticalMapping = i887[73]
  i886.m_uvLineOffset = i887[74]
  i886.m_geometrySortingOrder = i887[75]
  i886.m_IsTextObjectScaleStatic = !!i887[76]
  i886.m_VertexBufferAutoSizeReduction = !!i887[77]
  i886.m_useMaxVisibleDescender = !!i887[78]
  i886.m_pageToDisplay = i887[79]
  i886.m_margin = new pc.Vec4( i887[80], i887[81], i887[82], i887[83] )
  i886.m_isUsingLegacyAnimationComponent = !!i887[84]
  i886.m_isVolumetricText = !!i887[85]
  request.r(i887[86], i887[87], 0, i886, 'm_Material')
  i886.m_EmojiFallbackSupport = !!i887[88]
  i886.m_Maskable = !!i887[89]
  i886.m_Color = new pc.Color(i887[90], i887[91], i887[92], i887[93])
  i886.m_RaycastTarget = !!i887[94]
  i886.m_RaycastPadding = new pc.Vec4( i887[95], i887[96], i887[97], i887[98] )
  return i886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.VertexGradient' )
  var i895 = data
  i894.topLeft = new pc.Color(i895[0], i895[1], i895[2], i895[3])
  i894.topRight = new pc.Color(i895[4], i895[5], i895[6], i895[7])
  i894.bottomLeft = new pc.Color(i895[8], i895[9], i895[10], i895[11])
  i894.bottomRight = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  return i894
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Button' )
  var i899 = data
  i898.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i899[0], i898.m_OnClick)
  i898.m_Navigation = request.d('UnityEngine.UI.Navigation', i899[1], i898.m_Navigation)
  i898.m_Transition = i899[2]
  i898.m_Colors = request.d('UnityEngine.UI.ColorBlock', i899[3], i898.m_Colors)
  i898.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i899[4], i898.m_SpriteState)
  i898.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i899[5], i898.m_AnimationTriggers)
  i898.m_Interactable = !!i899[6]
  request.r(i899[7], i899[8], 0, i898, 'm_TargetGraphic')
  return i898
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i901 = data
  i900.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i901[0], i900.m_PersistentCalls)
  return i900
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i903 = data
  i902.m_Mode = i903[0]
  i902.m_WrapAround = !!i903[1]
  request.r(i903[2], i903[3], 0, i902, 'm_SelectOnUp')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectOnDown')
  request.r(i903[6], i903[7], 0, i902, 'm_SelectOnLeft')
  request.r(i903[8], i903[9], 0, i902, 'm_SelectOnRight')
  return i902
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i905 = data
  i904.m_NormalColor = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.m_HighlightedColor = new pc.Color(i905[4], i905[5], i905[6], i905[7])
  i904.m_PressedColor = new pc.Color(i905[8], i905[9], i905[10], i905[11])
  i904.m_SelectedColor = new pc.Color(i905[12], i905[13], i905[14], i905[15])
  i904.m_DisabledColor = new pc.Color(i905[16], i905[17], i905[18], i905[19])
  i904.m_ColorMultiplier = i905[20]
  i904.m_FadeDuration = i905[21]
  return i904
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'm_HighlightedSprite')
  request.r(i907[2], i907[3], 0, i906, 'm_PressedSprite')
  request.r(i907[4], i907[5], 0, i906, 'm_SelectedSprite')
  request.r(i907[6], i907[7], 0, i906, 'm_DisabledSprite')
  return i906
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i909 = data
  i908.m_NormalTrigger = i909[0]
  i908.m_HighlightedTrigger = i909[1]
  i908.m_PressedTrigger = i909[2]
  i908.m_SelectedTrigger = i909[3]
  i908.m_DisabledTrigger = i909[4]
  return i908
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Slider' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_FillRect')
  request.r(i911[2], i911[3], 0, i910, 'm_HandleRect')
  i910.m_Direction = i911[4]
  i910.m_MinValue = i911[5]
  i910.m_MaxValue = i911[6]
  i910.m_WholeNumbers = !!i911[7]
  i910.m_Value = i911[8]
  i910.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i911[9], i910.m_OnValueChanged)
  i910.m_Navigation = request.d('UnityEngine.UI.Navigation', i911[10], i910.m_Navigation)
  i910.m_Transition = i911[11]
  i910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i911[12], i910.m_Colors)
  i910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i911[13], i910.m_SpriteState)
  i910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i911[14], i910.m_AnimationTriggers)
  i910.m_Interactable = !!i911[15]
  request.r(i911[16], i911[17], 0, i910, 'm_TargetGraphic')
  return i910
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i913 = data
  i912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i913[0], i912.m_PersistentCalls)
  return i912
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i914 = root || request.c( 'ProgressSlider' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'progressSlider')
  i914.maxProgressItems = i915[2]
  i914.startProgressItems = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'progressText')
  return i914
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i916 = root || request.c( 'Ply_Pool' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Ply_Pool+PoolAmount', i919[i + 0]) );
  }
  i916.poolAmounts = i918
  request.r(i917[1], i917[2], 0, i916, 'poolHolder')
  return i916
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i922 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i923 = data
  i922.type = i923[0]
  i922.amount = i923[1]
  request.r(i923[2], i923[3], 0, i922, 'gameUnit')
  return i922
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i924 = root || request.c( 'Ply_SoundManager' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Ply_SoundManager+FxAudio', i927[i + 0]) );
  }
  i924.fxAudios = i926
  request.r(i925[1], i925[2], 0, i924, 'sound')
  return i924
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i930 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i931 = data
  i930.fxType = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'audioClip')
  i930.volume = i931[3]
  return i930
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
  i950.currentDelayHandtut = i951[34]
  i950.isBreakingHeartNoDelay = !!i951[35]
  i950.tutoredItemCount = i951[36]
  return i950
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i960 = root || request.c( 'PhaseManager' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('PhaseData', i963[i + 0]));
  }
  i960.phases = i962
  i960.transitionType = i961[1]
  i960.transitionDuration = i961[2]
  i960.delayBeforeNextPhase = i961[3]
  i960.offScreenLeftX = i961[4]
  i960.offScreenRightX = i961[5]
  i960.offScreenBottomY = i961[6]
  i960.offScreenTopY = i961[7]
  i960.centerScreenX = i961[8]
  request.r(i961[9], i961[10], 0, i960, 'phaseTransitionObject')
  i960.phaseTransitionObjectDuration = i961[11]
  i960.currentPhaseIndex = i961[12]
  i960.currentStepCount = i961[13]
  i960.isECPopup = !!i961[14]
  return i960
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i966 = root || request.c( 'PhaseData' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'phaseObject')
  i966.totalSteps = i967[2]
  i966.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i967[3], i966.onPhaseReady)
  return i966
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i968 = root || request.c( 'ItemTypeDoneManager' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i971[i + 0]));
  }
  i968.itemTypeGroups = i970
  return i968
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i974 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i975 = data
  i974.itemType = i975[0]
  var i977 = i975[1]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i974.items = i976
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i979 = data
  i978.aspect = i979[0]
  i978.orthographic = !!i979[1]
  i978.orthographicSize = i979[2]
  i978.backgroundColor = new pc.Color(i979[3], i979[4], i979[5], i979[6])
  i978.nearClipPlane = i979[7]
  i978.farClipPlane = i979[8]
  i978.fieldOfView = i979[9]
  i978.depth = i979[10]
  i978.clearFlags = i979[11]
  i978.cullingMask = i979[12]
  i978.rect = i979[13]
  request.r(i979[14], i979[15], 0, i978, 'targetTexture')
  i978.usePhysicalProperties = !!i979[16]
  i978.focalLength = i979[17]
  i978.sensorSize = new pc.Vec2( i979[18], i979[19] )
  i978.lensShift = new pc.Vec2( i979[20], i979[21] )
  i978.gateFit = i979[22]
  i978.commandBufferCount = i979[23]
  i978.cameraType = i979[24]
  i978.enabled = !!i979[25]
  return i978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'm_FirstSelected')
  i980.m_sendNavigationEvents = !!i981[2]
  i980.m_DragThreshold = i981[3]
  return i980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i983 = data
  i982.m_HorizontalAxis = i983[0]
  i982.m_VerticalAxis = i983[1]
  i982.m_SubmitButton = i983[2]
  i982.m_CancelButton = i983[3]
  i982.m_InputActionsPerSecond = i983[4]
  i982.m_RepeatDelay = i983[5]
  i982.m_ForceModuleActive = !!i983[6]
  i982.m_SendPointerHoverToParent = !!i983[7]
  return i982
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i984 = root || request.c( 'ItemClickable' )
  var i985 = data
  i984.requiredClicks = i985[0]
  i984.infiniteClick = !!i985[1]
  i984.canClick = !!i985[2]
  i984.disableAfterClick = !!i985[3]
  i984.onClick = request.d('UnityEngine.Events.UnityEvent', i985[4], i984.onClick)
  var i987 = i985[5]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('UnityEngine.Events.UnityEvent', i987[i + 0]));
  }
  i984.sequentialOnClicks = i986
  i984.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i985[6], i984.onClickComplete)
  return i984
}

Deserializers["Item"] = function (request, data, root) {
  var i990 = root || request.c( 'Item' )
  var i991 = data
  i990.isDone = !!i991[0]
  i990.onProcess = !!i991[1]
  i990.requireMatchingTargetTypeForHandTut = !!i991[2]
  request.r(i991[3], i991[4], 0, i990, 'itemDraggable')
  request.r(i991[5], i991[6], 0, i990, 'itemClickable')
  request.r(i991[7], i991[8], 0, i990, 'itemStirring')
  request.r(i991[9], i991[10], 0, i990, 'itemKnifeSpriteMaskCutter')
  request.r(i991[11], i991[12], 0, i990, 'itemSpriteMaskPainter')
  request.r(i991[13], i991[14], 0, i990, 'itemDragSpriteMaskPainter')
  request.r(i991[15], i991[16], 0, i990, 'itemMoveToTarget')
  request.r(i991[17], i991[18], 0, i990, 'animator')
  i990.itemType = i991[19]
  request.r(i991[20], i991[21], 0, i990, 'spriteRenderer')
  i990.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i991[22], i990.onKnifeIn)
  request.r(i991[23], i991[24], 0, i990, 'knifePos')
  i990.heartEffectScale = i991[25]
  i990.breakHeartEffectScale = i991[26]
  i990.blinkEffectScale = i991[27]
  i990.mergeEffectScale = i991[28]
  i990.playMoveToTargetFinishSound = !!i991[29]
  i990.moveToTargetFinishFxType = i991[30]
  i990.fxSpawnZPos = i991[31]
  request.r(i991[32], i991[33], 0, i990, 'tf')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i993 = data
  i992.center = new pc.Vec3( i993[0], i993[1], i993[2] )
  i992.radius = i993[3]
  i992.height = i993[4]
  i992.direction = i993[5]
  i992.enabled = !!i993[6]
  i992.isTrigger = !!i993[7]
  request.r(i993[8], i993[9], 0, i992, 'material')
  return i992
}

Deserializers["Pan"] = function (request, data, root) {
  var i994 = root || request.c( 'Pan' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'fryingFX')
  i994.isOilIn = !!i995[2]
  i994.isTurnOnStove = !!i995[3]
  request.r(i995[4], i995[5], 0, i994, 'stoveBtn')
  request.r(i995[6], i995[7], 0, i994, 'spartula')
  i994.stoveShakeDelay = i995[8]
  i994.stoveShakeDuration = i995[9]
  var i997 = i995[10]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.plates = i996
  i994.plateCount = i995[11]
  request.r(i995[12], i995[13], 0, i994, 'waterPot')
  var i999 = i995[14]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i994.otherPot = i998
  i994.otherPotCount = i995[15]
  i994.isDone = !!i995[16]
  i994.onProcess = !!i995[17]
  i994.requireMatchingTargetTypeForHandTut = !!i995[18]
  request.r(i995[19], i995[20], 0, i994, 'itemDraggable')
  request.r(i995[21], i995[22], 0, i994, 'itemClickable')
  request.r(i995[23], i995[24], 0, i994, 'itemStirring')
  request.r(i995[25], i995[26], 0, i994, 'itemKnifeSpriteMaskCutter')
  request.r(i995[27], i995[28], 0, i994, 'itemSpriteMaskPainter')
  request.r(i995[29], i995[30], 0, i994, 'itemDragSpriteMaskPainter')
  request.r(i995[31], i995[32], 0, i994, 'itemMoveToTarget')
  request.r(i995[33], i995[34], 0, i994, 'animator')
  i994.itemType = i995[35]
  request.r(i995[36], i995[37], 0, i994, 'spriteRenderer')
  i994.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i995[38], i994.onKnifeIn)
  request.r(i995[39], i995[40], 0, i994, 'knifePos')
  i994.heartEffectScale = i995[41]
  i994.breakHeartEffectScale = i995[42]
  i994.blinkEffectScale = i995[43]
  i994.mergeEffectScale = i995[44]
  i994.playMoveToTargetFinishSound = !!i995[45]
  i994.moveToTargetFinishFxType = i995[46]
  i994.fxSpawnZPos = i995[47]
  request.r(i995[48], i995[49], 0, i994, 'tf')
  return i994
}

Deserializers["Spartula"] = function (request, data, root) {
  var i1002 = root || request.c( 'Spartula' )
  var i1003 = data
  i1002.isStir1 = !!i1003[0]
  i1002.isDone = !!i1003[1]
  i1002.onProcess = !!i1003[2]
  i1002.requireMatchingTargetTypeForHandTut = !!i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'itemDraggable')
  request.r(i1003[6], i1003[7], 0, i1002, 'itemClickable')
  request.r(i1003[8], i1003[9], 0, i1002, 'itemStirring')
  request.r(i1003[10], i1003[11], 0, i1002, 'itemKnifeSpriteMaskCutter')
  request.r(i1003[12], i1003[13], 0, i1002, 'itemSpriteMaskPainter')
  request.r(i1003[14], i1003[15], 0, i1002, 'itemDragSpriteMaskPainter')
  request.r(i1003[16], i1003[17], 0, i1002, 'itemMoveToTarget')
  request.r(i1003[18], i1003[19], 0, i1002, 'animator')
  i1002.itemType = i1003[20]
  request.r(i1003[21], i1003[22], 0, i1002, 'spriteRenderer')
  i1002.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1003[23], i1002.onKnifeIn)
  request.r(i1003[24], i1003[25], 0, i1002, 'knifePos')
  i1002.heartEffectScale = i1003[26]
  i1002.breakHeartEffectScale = i1003[27]
  i1002.blinkEffectScale = i1003[28]
  i1002.mergeEffectScale = i1003[29]
  i1002.playMoveToTargetFinishSound = !!i1003[30]
  i1002.moveToTargetFinishFxType = i1003[31]
  i1002.fxSpawnZPos = i1003[32]
  request.r(i1003[33], i1003[34], 0, i1002, 'tf')
  return i1002
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemStirring' )
  var i1005 = data
  i1004.stirRadius = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'stirrerTransform')
  request.r(i1005[3], i1005[4], 0, i1004, 'centerPoint')
  i1004.movementMode = i1005[5]
  i1004.lineLength = i1005[6]
  i1004.lineDirection = new pc.Vec3( i1005[7], i1005[8], i1005[9] )
  i1004.flipScaleYByLineDragDirection = !!i1005[10]
  request.r(i1005[11], i1005[12], 0, i1004, 'flipScaleTarget')
  request.r(i1005[13], i1005[14], 0, i1004, 'targetAnimator')
  i1004.targetStateName = i1005[15]
  i1004.targetLayer = i1005[16]
  i1004.stoppedSpeed = i1005[17]
  i1004.minDragDistanceToAnimate = i1005[18]
  i1004.dragSpeedMultiplier = i1005[19]
  i1004.minAnimatorSpeed = i1005[20]
  i1004.maxAnimatorSpeed = i1005[21]
  i1004.speedBlendDuration = i1005[22]
  i1004.completeNormalizedTime = i1005[23]
  i1004.resetAnimationOnFirstBegin = !!i1005[24]
  var i1007 = i1005[25]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('StirMilestone', i1007[i + 0]));
  }
  i1004.milestones = i1006
  i1004.spawnProgressBarOnStir = !!i1005[26]
  request.r(i1005[27], i1005[28], 0, i1004, 'spawnProgressBarPoint')
  i1004.rollingSoundCooldown = i1005[29]
  i1004.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i1005[30], i1004.onStirBegin)
  i1004.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i1005[31], i1004.onStirComplete)
  return i1004
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i1010 = root || request.c( 'StirMilestone' )
  var i1011 = data
  i1010.distanceThreshold = i1011[0]
  i1010.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i1011[1], i1010.onMilestoneReached)
  i1010.isReached = !!i1011[2]
  return i1010
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1012 = root || request.c( 'ItemDragChildRotator' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'rotateTarget')
  i1012.dragEulerAngles = new pc.Vec3( i1013[2], i1013[3], i1013[4] )
  i1012.useLocalRotation = !!i1013[5]
  i1012.rotateRelative = !!i1013[6]
  i1012.rotateDuration = i1013[7]
  i1012.rotateEase = i1013[8]
  i1012.rotateMode = i1013[9]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1015 = data
  i1014.frontSortingLayerID = i1015[0]
  i1014.frontSortingOrder = i1015[1]
  i1014.backSortingLayerID = i1015[2]
  i1014.backSortingOrder = i1015[3]
  i1014.alphaCutoff = i1015[4]
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.tileMode = i1015[7]
  i1014.isCustomRangeActive = !!i1015[8]
  i1014.spriteSortPoint = i1015[9]
  i1014.enabled = !!i1015[10]
  request.r(i1015[11], i1015[12], 0, i1014, 'sharedMaterial')
  var i1017 = i1015[13]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.sharedMaterials = i1016
  i1014.receiveShadows = !!i1015[14]
  i1014.shadowCastingMode = i1015[15]
  i1014.sortingLayerID = i1015[16]
  i1014.sortingOrder = i1015[17]
  i1014.lightmapIndex = i1015[18]
  i1014.lightmapSceneIndex = i1015[19]
  i1014.lightmapScaleOffset = new pc.Vec4( i1015[20], i1015[21], i1015[22], i1015[23] )
  i1014.lightProbeUsage = i1015[24]
  i1014.reflectionProbeUsage = i1015[25]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1019 = data
  i1018.ambientIntensity = i1019[0]
  i1018.reflectionIntensity = i1019[1]
  i1018.ambientMode = i1019[2]
  i1018.ambientLight = new pc.Color(i1019[3], i1019[4], i1019[5], i1019[6])
  i1018.ambientSkyColor = new pc.Color(i1019[7], i1019[8], i1019[9], i1019[10])
  i1018.ambientGroundColor = new pc.Color(i1019[11], i1019[12], i1019[13], i1019[14])
  i1018.ambientEquatorColor = new pc.Color(i1019[15], i1019[16], i1019[17], i1019[18])
  i1018.fogColor = new pc.Color(i1019[19], i1019[20], i1019[21], i1019[22])
  i1018.fogEndDistance = i1019[23]
  i1018.fogStartDistance = i1019[24]
  i1018.fogDensity = i1019[25]
  i1018.fog = !!i1019[26]
  request.r(i1019[27], i1019[28], 0, i1018, 'skybox')
  i1018.fogMode = i1019[29]
  var i1021 = i1019[30]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1021[i + 0]) );
  }
  i1018.lightmaps = i1020
  i1018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1019[31], i1018.lightProbes)
  i1018.lightmapsMode = i1019[32]
  i1018.mixedBakeMode = i1019[33]
  i1018.environmentLightingMode = i1019[34]
  i1018.ambientProbe = new pc.SphericalHarmonicsL2(i1019[35])
  i1018.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1019[36])
  i1018.useReferenceAmbientProbe = !!i1019[37]
  request.r(i1019[38], i1019[39], 0, i1018, 'customReflection')
  request.r(i1019[40], i1019[41], 0, i1018, 'defaultReflection')
  i1018.defaultReflectionMode = i1019[42]
  i1018.defaultReflectionResolution = i1019[43]
  i1018.sunLightObjectId = i1019[44]
  i1018.pixelLightCount = i1019[45]
  i1018.defaultReflectionHDR = !!i1019[46]
  i1018.hasLightDataAsset = !!i1019[47]
  i1018.hasManualGenerate = !!i1019[48]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'lightmapColor')
  request.r(i1025[2], i1025[3], 0, i1024, 'lightmapDirection')
  request.r(i1025[4], i1025[5], 0, i1024, 'shadowMask')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1026 = root || new UnityEngine.LightProbes()
  var i1027 = data
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1037[i + 0]));
  }
  i1034.ShaderCompilationErrors = i1036
  i1034.name = i1035[1]
  i1034.guid = i1035[2]
  var i1039 = i1035[3]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.shaderDefinedKeywords = i1038
  var i1041 = i1035[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1041[i + 0]) );
  }
  i1034.passes = i1040
  var i1043 = i1035[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1043[i + 0]) );
  }
  i1034.usePasses = i1042
  var i1045 = i1035[6]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1045[i + 0]) );
  }
  i1034.defaultParameterValues = i1044
  request.r(i1035[7], i1035[8], 0, i1034, 'unityFallbackShader')
  i1034.readDepth = !!i1035[9]
  i1034.hasDepthOnlyPass = !!i1035[10]
  i1034.isCreatedByShaderGraph = !!i1035[11]
  i1034.disableBatching = !!i1035[12]
  i1034.compiled = !!i1035[13]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1049 = data
  i1048.shaderName = i1049[0]
  i1048.errorMessage = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1054 = root || new pc.UnityShaderPass()
  var i1055 = data
  i1054.id = i1055[0]
  i1054.subShaderIndex = i1055[1]
  i1054.name = i1055[2]
  i1054.passType = i1055[3]
  i1054.grabPassTextureName = i1055[4]
  i1054.usePass = !!i1055[5]
  i1054.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[6], i1054.zTest)
  i1054.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[7], i1054.zWrite)
  i1054.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[8], i1054.culling)
  i1054.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[9], i1054.blending)
  i1054.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[10], i1054.alphaBlending)
  i1054.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[11], i1054.colorWriteMask)
  i1054.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[12], i1054.offsetUnits)
  i1054.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[13], i1054.offsetFactor)
  i1054.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[14], i1054.stencilRef)
  i1054.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[15], i1054.stencilReadMask)
  i1054.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[16], i1054.stencilWriteMask)
  i1054.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[17], i1054.stencilOp)
  i1054.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[18], i1054.stencilOpFront)
  i1054.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[19], i1054.stencilOpBack)
  var i1057 = i1055[20]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1057[i + 0]) );
  }
  i1054.tags = i1056
  var i1059 = i1055[21]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.passDefinedKeywords = i1058
  var i1061 = i1055[22]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1061[i + 0]) );
  }
  i1054.passDefinedKeywordGroups = i1060
  var i1063 = i1055[23]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1063[i + 0]) );
  }
  i1054.variants = i1062
  var i1065 = i1055[24]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1065[i + 0]) );
  }
  i1054.excludedVariants = i1064
  i1054.hasDepthReader = !!i1055[25]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1067 = data
  i1066.val = i1067[0]
  i1066.name = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1069 = data
  i1068.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[0], i1068.src)
  i1068.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[1], i1068.dst)
  i1068.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[2], i1068.op)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1071 = data
  i1070.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[0], i1070.pass)
  i1070.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[1], i1070.fail)
  i1070.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[2], i1070.zFail)
  i1070.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[3], i1070.comp)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.value = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.keywords = i1080
  i1078.hasDiscard = !!i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1085 = data
  i1084.passId = i1085[0]
  i1084.subShaderIndex = i1085[1]
  var i1087 = i1085[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1084.keywords = i1086
  i1084.vertexProgram = i1085[3]
  i1084.fragmentProgram = i1085[4]
  i1084.exportedForWebGl2 = !!i1085[5]
  i1084.readDepth = !!i1085[6]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'shader')
  i1090.pass = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.type = i1095[1]
  i1094.value = new pc.Vec4( i1095[2], i1095[3], i1095[4], i1095[5] )
  i1094.textureValue = i1095[6]
  i1094.shaderPropertyFlag = i1095[7]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1097 = data
  i1096.name = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'texture')
  i1096.aabb = i1097[3]
  i1096.vertices = i1097[4]
  i1096.triangles = i1097[5]
  i1096.textureRect = UnityEngine.Rect.MinMaxRect(i1097[6], i1097[7], i1097[8], i1097[9])
  i1096.packedRect = UnityEngine.Rect.MinMaxRect(i1097[10], i1097[11], i1097[12], i1097[13])
  i1096.border = new pc.Vec4( i1097[14], i1097[15], i1097[16], i1097[17] )
  i1096.transparency = i1097[18]
  i1096.bounds = i1097[19]
  i1096.pixelsPerUnit = i1097[20]
  i1096.textureWidth = i1097[21]
  i1096.textureHeight = i1097[22]
  i1096.nativeSize = new pc.Vec2( i1097[23], i1097[24] )
  i1096.pivot = new pc.Vec2( i1097[25], i1097[26] )
  i1096.textureRectOffset = new pc.Vec2( i1097[27], i1097[28] )
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1099 = data
  i1098.name = i1099[0]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.wrapMode = i1101[1]
  i1100.isLooping = !!i1101[2]
  i1100.length = i1101[3]
  var i1103 = i1101[4]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1103[i + 0]) );
  }
  i1100.curves = i1102
  var i1105 = i1101[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1105[i + 0]) );
  }
  i1100.events = i1104
  i1100.halfPrecision = !!i1101[6]
  i1100._frameRate = i1101[7]
  i1100.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1101[8], i1100.localBounds)
  i1100.hasMuscleCurves = !!i1101[9]
  var i1107 = i1101[10]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1100.clipMuscleConstant = i1106
  i1100.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1101[11], i1100.clipBindingConstant)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1111 = data
  i1110.path = i1111[0]
  i1110.hash = i1111[1]
  i1110.componentType = i1111[2]
  i1110.property = i1111[3]
  i1110.keys = i1111[4]
  var i1113 = i1111[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1113[i + 0]) );
  }
  i1110.objectReferenceKeys = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1117 = data
  i1116.time = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'value')
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1121 = data
  i1120.functionName = i1121[0]
  i1120.floatParameter = i1121[1]
  i1120.intParameter = i1121[2]
  i1120.stringParameter = i1121[3]
  request.r(i1121[4], i1121[5], 0, i1120, 'objectReferenceParameter')
  i1120.time = i1121[6]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1123 = data
  i1122.center = new pc.Vec3( i1123[0], i1123[1], i1123[2] )
  i1122.extends = new pc.Vec3( i1123[3], i1123[4], i1123[5] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.genericBindings = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.pptrCurveMapping = i1130
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1133 = data
  i1132.name = i1133[0]
  var i1135 = i1133[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1135[i + 0]) );
  }
  i1132.layers = i1134
  var i1137 = i1133[2]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1137[i + 0]) );
  }
  i1132.parameters = i1136
  i1132.animationClips = i1133[3]
  i1132.avatarUnsupported = i1133[4]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.defaultWeight = i1141[1]
  i1140.blendingMode = i1141[2]
  i1140.avatarMask = i1141[3]
  i1140.syncedLayerIndex = i1141[4]
  i1140.syncedLayerAffectsTiming = !!i1141[5]
  i1140.syncedLayers = i1141[6]
  i1140.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1141[7], i1140.stateMachine)
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1143 = data
  i1142.id = i1143[0]
  i1142.name = i1143[1]
  i1142.path = i1143[2]
  var i1145 = i1143[3]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1145[i + 0]) );
  }
  i1142.states = i1144
  var i1147 = i1143[4]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1147[i + 0]) );
  }
  i1142.machines = i1146
  var i1149 = i1143[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1149[i + 0]) );
  }
  i1142.entryStateTransitions = i1148
  var i1151 = i1143[6]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1151[i + 0]) );
  }
  i1142.exitStateTransitions = i1150
  var i1153 = i1143[7]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1153[i + 0]) );
  }
  i1142.anyStateTransitions = i1152
  i1142.defaultStateId = i1143[8]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.name = i1157[1]
  i1156.cycleOffset = i1157[2]
  i1156.cycleOffsetParameter = i1157[3]
  i1156.cycleOffsetParameterActive = !!i1157[4]
  i1156.mirror = !!i1157[5]
  i1156.mirrorParameter = i1157[6]
  i1156.mirrorParameterActive = !!i1157[7]
  i1156.motionId = i1157[8]
  i1156.nameHash = i1157[9]
  i1156.fullPathHash = i1157[10]
  i1156.speed = i1157[11]
  i1156.speedParameter = i1157[12]
  i1156.speedParameterActive = !!i1157[13]
  i1156.tag = i1157[14]
  i1156.tagHash = i1157[15]
  i1156.writeDefaultValues = !!i1157[16]
  var i1159 = i1157[17]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1156.behaviours = i1158
  var i1161 = i1157[18]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1161[i + 0]) );
  }
  i1156.transitions = i1160
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1167 = data
  i1166.fullPath = i1167[0]
  i1166.canTransitionToSelf = !!i1167[1]
  i1166.duration = i1167[2]
  i1166.exitTime = i1167[3]
  i1166.hasExitTime = !!i1167[4]
  i1166.hasFixedDuration = !!i1167[5]
  i1166.interruptionSource = i1167[6]
  i1166.offset = i1167[7]
  i1166.orderedInterruption = !!i1167[8]
  i1166.destinationStateId = i1167[9]
  i1166.isExit = !!i1167[10]
  i1166.mute = !!i1167[11]
  i1166.solo = !!i1167[12]
  var i1169 = i1167[13]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1169[i + 0]) );
  }
  i1166.conditions = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1175 = data
  i1174.destinationStateId = i1175[0]
  i1174.isExit = !!i1175[1]
  i1174.mute = !!i1175[2]
  i1174.solo = !!i1175[3]
  var i1177 = i1175[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1177[i + 0]) );
  }
  i1174.conditions = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1181 = data
  i1180.defaultBool = !!i1181[0]
  i1180.defaultFloat = i1181[1]
  i1180.defaultInt = i1181[2]
  i1180.name = i1181[3]
  i1180.nameHash = i1181[4]
  i1180.type = i1181[5]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1185 = data
  i1184.mode = i1185[0]
  i1184.parameter = i1185[1]
  i1184.threshold = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.bytes64 = i1187[1]
  i1186.data = i1187[2]
  return i1186
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1189 = data
  i1188.normalStyle = i1189[0]
  i1188.normalSpacingOffset = i1189[1]
  i1188.boldStyle = i1189[2]
  i1188.boldSpacing = i1189[3]
  i1188.italicStyle = i1189[4]
  i1188.tabSize = i1189[5]
  request.r(i1189[6], i1189[7], 0, i1188, 'atlas')
  i1188.m_SourceFontFileGUID = i1189[8]
  i1188.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1189[9], i1188.m_CreationSettings)
  request.r(i1189[10], i1189[11], 0, i1188, 'm_SourceFontFile')
  i1188.m_SourceFontFilePath = i1189[12]
  i1188.m_AtlasPopulationMode = i1189[13]
  i1188.InternalDynamicOS = !!i1189[14]
  var i1191 = i1189[15]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.Glyph', i1191[i + 0]));
  }
  i1188.m_GlyphTable = i1190
  var i1193 = i1189[16]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Character', i1193[i + 0]));
  }
  i1188.m_CharacterTable = i1192
  var i1195 = i1189[17]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 2, i1194, '')
  }
  i1188.m_AtlasTextures = i1194
  i1188.m_AtlasTextureIndex = i1189[18]
  i1188.m_IsMultiAtlasTexturesEnabled = !!i1189[19]
  i1188.m_GetFontFeatures = !!i1189[20]
  i1188.m_ClearDynamicDataOnBuild = !!i1189[21]
  i1188.m_AtlasWidth = i1189[22]
  i1188.m_AtlasHeight = i1189[23]
  i1188.m_AtlasPadding = i1189[24]
  i1188.m_AtlasRenderMode = i1189[25]
  var i1197 = i1189[26]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('UnityEngine.TextCore.GlyphRect', i1197[i + 0]));
  }
  i1188.m_UsedGlyphRects = i1196
  var i1199 = i1189[27]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.GlyphRect', i1199[i + 0]));
  }
  i1188.m_FreeGlyphRects = i1198
  i1188.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1189[28], i1188.m_FontFeatureTable)
  i1188.m_ShouldReimportFontFeatures = !!i1189[29]
  var i1201 = i1189[30]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1188.m_FallbackFontAssetTable = i1200
  var i1203 = i1189[31]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('TMPro.TMP_FontWeightPair', i1203[i + 0]) );
  }
  i1188.m_FontWeightTable = i1202
  var i1205 = i1189[32]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('TMPro.TMP_FontWeightPair', i1205[i + 0]) );
  }
  i1188.fontWeights = i1204
  i1188.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1189[33], i1188.m_fontInfo)
  var i1207 = i1189[34]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_Glyph', i1207[i + 0]));
  }
  i1188.m_glyphInfoList = i1206
  i1188.m_KerningTable = request.d('TMPro.KerningTable', i1189[35], i1188.m_KerningTable)
  var i1209 = i1189[36]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1188.fallbackFontAssets = i1208
  i1188.m_Version = i1189[37]
  i1188.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1189[38], i1188.m_FaceInfo)
  request.r(i1189[39], i1189[40], 0, i1188, 'm_Material')
  return i1188
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1211 = data
  i1210.sourceFontFileName = i1211[0]
  i1210.sourceFontFileGUID = i1211[1]
  i1210.faceIndex = i1211[2]
  i1210.pointSizeSamplingMode = i1211[3]
  i1210.pointSize = i1211[4]
  i1210.padding = i1211[5]
  i1210.paddingMode = i1211[6]
  i1210.packingMode = i1211[7]
  i1210.atlasWidth = i1211[8]
  i1210.atlasHeight = i1211[9]
  i1210.characterSetSelectionMode = i1211[10]
  i1210.characterSequence = i1211[11]
  i1210.referencedFontAssetGUID = i1211[12]
  i1210.referencedTextAssetGUID = i1211[13]
  i1210.fontStyle = i1211[14]
  i1210.fontStyleModifier = i1211[15]
  i1210.renderMode = i1211[16]
  i1210.includeFontFeatures = !!i1211[17]
  return i1210
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1215 = data
  i1214.m_Index = i1215[0]
  i1214.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1215[1], i1214.m_Metrics)
  i1214.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1215[2], i1214.m_GlyphRect)
  i1214.m_Scale = i1215[3]
  i1214.m_AtlasIndex = i1215[4]
  i1214.m_ClassDefinitionType = i1215[5]
  return i1214
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1217 = data
  i1216.m_Width = i1217[0]
  i1216.m_Height = i1217[1]
  i1216.m_HorizontalBearingX = i1217[2]
  i1216.m_HorizontalBearingY = i1217[3]
  i1216.m_HorizontalAdvance = i1217[4]
  return i1216
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1219 = data
  i1218.m_X = i1219[0]
  i1218.m_Y = i1219[1]
  i1218.m_Width = i1219[2]
  i1218.m_Height = i1219[3]
  return i1218
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_Character' )
  var i1223 = data
  i1222.m_ElementType = i1223[0]
  i1222.m_Unicode = i1223[1]
  i1222.m_GlyphIndex = i1223[2]
  i1222.m_Scale = i1223[3]
  return i1222
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.MultipleSubstitutionRecord', i1231[i + 0]));
  }
  i1228.m_MultipleSubstitutionRecords = i1230
  var i1233 = i1229[1]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.LigatureSubstitutionRecord', i1233[i + 0]));
  }
  i1228.m_LigatureSubstitutionRecords = i1232
  var i1235 = i1229[2]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1235[i + 0]));
  }
  i1228.m_GlyphPairAdjustmentRecords = i1234
  var i1237 = i1229[3]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1237[i + 0]));
  }
  i1228.m_MarkToBaseAdjustmentRecords = i1236
  var i1239 = i1229[4]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1239[i + 0]));
  }
  i1228.m_MarkToMarkAdjustmentRecords = i1238
  return i1228
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1243 = data
  i1242.m_TargetGlyphID = i1243[0]
  i1242.m_SubstituteGlyphIDs = i1243[1]
  return i1242
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1247 = data
  i1246.m_ComponentGlyphIDs = i1247[0]
  i1246.m_LigatureGlyphID = i1247[1]
  return i1246
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1251 = data
  i1250.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1251[0], i1250.m_FirstAdjustmentRecord)
  i1250.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1251[1], i1250.m_SecondAdjustmentRecord)
  i1250.m_FeatureLookupFlags = i1251[2]
  return i1250
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1255 = data
  i1254.m_BaseGlyphID = i1255[0]
  i1254.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1255[1], i1254.m_BaseGlyphAnchorPoint)
  i1254.m_MarkGlyphID = i1255[2]
  i1254.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1255[3], i1254.m_MarkPositionAdjustment)
  return i1254
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1259 = data
  i1258.m_BaseMarkGlyphID = i1259[0]
  i1258.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1259[1], i1258.m_BaseMarkGlyphAnchorPoint)
  i1258.m_CombiningMarkGlyphID = i1259[2]
  i1258.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1259[3], i1258.m_CombiningMarkPositionAdjustment)
  return i1258
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'regularTypeface')
  request.r(i1265[2], i1265[3], 0, i1264, 'italicTypeface')
  return i1264
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1267 = data
  i1266.Name = i1267[0]
  i1266.PointSize = i1267[1]
  i1266.Scale = i1267[2]
  i1266.CharacterCount = i1267[3]
  i1266.LineHeight = i1267[4]
  i1266.Baseline = i1267[5]
  i1266.Ascender = i1267[6]
  i1266.CapHeight = i1267[7]
  i1266.Descender = i1267[8]
  i1266.CenterLine = i1267[9]
  i1266.SuperscriptOffset = i1267[10]
  i1266.SubscriptOffset = i1267[11]
  i1266.SubSize = i1267[12]
  i1266.Underline = i1267[13]
  i1266.UnderlineThickness = i1267[14]
  i1266.strikethrough = i1267[15]
  i1266.strikethroughThickness = i1267[16]
  i1266.TabWidth = i1267[17]
  i1266.Padding = i1267[18]
  i1266.AtlasWidth = i1267[19]
  i1266.AtlasHeight = i1267[20]
  return i1266
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.x = i1271[1]
  i1270.y = i1271[2]
  i1270.width = i1271[3]
  i1270.height = i1271[4]
  i1270.xOffset = i1271[5]
  i1270.yOffset = i1271[6]
  i1270.xAdvance = i1271[7]
  i1270.scale = i1271[8]
  return i1270
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.KerningTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.KerningPair', i1275[i + 0]));
  }
  i1272.kerningPairs = i1274
  return i1272
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.KerningPair' )
  var i1279 = data
  i1278.xOffset = i1279[0]
  i1278.m_FirstGlyph = i1279[1]
  i1278.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[2], i1278.m_FirstGlyphAdjustments)
  i1278.m_SecondGlyph = i1279[3]
  i1278.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[4], i1278.m_SecondGlyphAdjustments)
  i1278.m_IgnoreSpacingAdjustments = !!i1279[5]
  return i1278
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1281 = data
  i1280.m_FaceIndex = i1281[0]
  i1280.m_FamilyName = i1281[1]
  i1280.m_StyleName = i1281[2]
  i1280.m_PointSize = i1281[3]
  i1280.m_Scale = i1281[4]
  i1280.m_UnitsPerEM = i1281[5]
  i1280.m_LineHeight = i1281[6]
  i1280.m_AscentLine = i1281[7]
  i1280.m_CapLine = i1281[8]
  i1280.m_MeanLine = i1281[9]
  i1280.m_Baseline = i1281[10]
  i1280.m_DescentLine = i1281[11]
  i1280.m_SuperscriptOffset = i1281[12]
  i1280.m_SuperscriptSize = i1281[13]
  i1280.m_SubscriptOffset = i1281[14]
  i1280.m_SubscriptSize = i1281[15]
  i1280.m_UnderlineOffset = i1281[16]
  i1280.m_UnderlineThickness = i1281[17]
  i1280.m_StrikethroughOffset = i1281[18]
  i1280.m_StrikethroughThickness = i1281[19]
  i1280.m_TabWidth = i1281[20]
  return i1280
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1283 = data
  i1282.useSafeMode = !!i1283[0]
  i1282.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1283[1], i1282.safeModeOptions)
  i1282.timeScale = i1283[2]
  i1282.unscaledTimeScale = i1283[3]
  i1282.useSmoothDeltaTime = !!i1283[4]
  i1282.maxSmoothUnscaledTime = i1283[5]
  i1282.rewindCallbackMode = i1283[6]
  i1282.showUnityEditorReport = !!i1283[7]
  i1282.logBehaviour = i1283[8]
  i1282.drawGizmos = !!i1283[9]
  i1282.defaultRecyclable = !!i1283[10]
  i1282.defaultAutoPlay = i1283[11]
  i1282.defaultUpdateType = i1283[12]
  i1282.defaultTimeScaleIndependent = !!i1283[13]
  i1282.defaultEaseType = i1283[14]
  i1282.defaultEaseOvershootOrAmplitude = i1283[15]
  i1282.defaultEasePeriod = i1283[16]
  i1282.defaultAutoKill = !!i1283[17]
  i1282.defaultLoopType = i1283[18]
  i1282.debugMode = !!i1283[19]
  i1282.debugStoreTargetId = !!i1283[20]
  i1282.showPreviewPanel = !!i1283[21]
  i1282.storeSettingsLocation = i1283[22]
  i1282.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1283[23], i1282.modules)
  i1282.createASMDEF = !!i1283[24]
  i1282.showPlayingTweens = !!i1283[25]
  i1282.showPausedTweens = !!i1283[26]
  return i1282
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1284 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1285 = data
  i1284.logBehaviour = i1285[0]
  i1284.nestedTweenFailureBehaviour = i1285[1]
  return i1284
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1287 = data
  i1286.showPanel = !!i1287[0]
  i1286.audioEnabled = !!i1287[1]
  i1286.physicsEnabled = !!i1287[2]
  i1286.physics2DEnabled = !!i1287[3]
  i1286.spriteEnabled = !!i1287[4]
  i1286.uiEnabled = !!i1287[5]
  i1286.uiToolkitEnabled = !!i1287[6]
  i1286.textMeshProEnabled = !!i1287[7]
  i1286.tk2DEnabled = !!i1287[8]
  i1286.deAudioEnabled = !!i1287[9]
  i1286.deUnityExtendedEnabled = !!i1287[10]
  i1286.epoOutlineEnabled = !!i1287[11]
  return i1286
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_Settings' )
  var i1289 = data
  i1288.assetVersion = i1289[0]
  i1288.m_TextWrappingMode = i1289[1]
  i1288.m_enableKerning = !!i1289[2]
  var i1291 = i1289[3]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(i1291[i + 0]);
  }
  i1288.m_ActiveFontFeatures = i1290
  i1288.m_enableExtraPadding = !!i1289[4]
  i1288.m_enableTintAllSprites = !!i1289[5]
  i1288.m_enableParseEscapeCharacters = !!i1289[6]
  i1288.m_EnableRaycastTarget = !!i1289[7]
  i1288.m_GetFontFeaturesAtRuntime = !!i1289[8]
  i1288.m_missingGlyphCharacter = i1289[9]
  i1288.m_ClearDynamicDataOnBuild = !!i1289[10]
  i1288.m_warningsDisabled = !!i1289[11]
  request.r(i1289[12], i1289[13], 0, i1288, 'm_defaultFontAsset')
  i1288.m_defaultFontAssetPath = i1289[14]
  i1288.m_defaultFontSize = i1289[15]
  i1288.m_defaultAutoSizeMinRatio = i1289[16]
  i1288.m_defaultAutoSizeMaxRatio = i1289[17]
  i1288.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1289[18], i1289[19] )
  i1288.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1289[20], i1289[21] )
  i1288.m_autoSizeTextContainer = !!i1289[22]
  i1288.m_IsTextObjectScaleStatic = !!i1289[23]
  var i1293 = i1289[24]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1288.m_fallbackFontAssets = i1292
  i1288.m_matchMaterialPreset = !!i1289[25]
  i1288.m_HideSubTextObjects = !!i1289[26]
  request.r(i1289[27], i1289[28], 0, i1288, 'm_defaultSpriteAsset')
  i1288.m_defaultSpriteAssetPath = i1289[29]
  i1288.m_enableEmojiSupport = !!i1289[30]
  i1288.m_MissingCharacterSpriteUnicode = i1289[31]
  var i1295 = i1289[32]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1288.m_EmojiFallbackTextAssets = i1294
  i1288.m_defaultColorGradientPresetsPath = i1289[33]
  request.r(i1289[34], i1289[35], 0, i1288, 'm_defaultStyleSheet')
  i1288.m_StyleSheetsResourcePath = i1289[36]
  request.r(i1289[37], i1289[38], 0, i1288, 'm_leadingCharacters')
  request.r(i1289[39], i1289[40], 0, i1288, 'm_followingCharacters')
  i1288.m_UseModernHangulLineBreakingRules = !!i1289[41]
  return i1288
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'spriteSheet')
  var i1301 = i1299[2]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('TMPro.TMP_Sprite', i1301[i + 0]));
  }
  i1298.spriteInfoList = i1300
  var i1303 = i1299[3]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 1, i1302, '')
  }
  i1298.fallbackSpriteAssets = i1302
  var i1305 = i1299[4]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.TMP_SpriteCharacter', i1305[i + 0]));
  }
  i1298.m_SpriteCharacterTable = i1304
  var i1307 = i1299[5]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('TMPro.TMP_SpriteGlyph', i1307[i + 0]));
  }
  i1298.m_GlyphTable = i1306
  i1298.m_Version = i1299[6]
  i1298.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1299[7], i1298.m_FaceInfo)
  request.r(i1299[8], i1299[9], 0, i1298, 'm_Material')
  return i1298
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.hashCode = i1311[1]
  i1310.unicode = i1311[2]
  i1310.pivot = new pc.Vec2( i1311[3], i1311[4] )
  request.r(i1311[5], i1311[6], 0, i1310, 'sprite')
  i1310.id = i1311[7]
  i1310.x = i1311[8]
  i1310.y = i1311[9]
  i1310.width = i1311[10]
  i1310.height = i1311[11]
  i1310.xOffset = i1311[12]
  i1310.yOffset = i1311[13]
  i1310.xAdvance = i1311[14]
  i1310.scale = i1311[15]
  return i1310
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1317 = data
  i1316.m_Name = i1317[0]
  i1316.m_ElementType = i1317[1]
  i1316.m_Unicode = i1317[2]
  i1316.m_GlyphIndex = i1317[3]
  i1316.m_Scale = i1317[4]
  return i1316
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'sprite')
  i1320.m_Index = i1321[2]
  i1320.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1321[3], i1320.m_Metrics)
  i1320.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1321[4], i1320.m_GlyphRect)
  i1320.m_Scale = i1321[5]
  i1320.m_AtlasIndex = i1321[6]
  i1320.m_ClassDefinitionType = i1321[7]
  return i1320
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Style', i1325[i + 0]));
  }
  i1322.m_StyleList = i1324
  return i1322
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_Style' )
  var i1329 = data
  i1328.m_Name = i1329[0]
  i1328.m_HashCode = i1329[1]
  i1328.m_OpeningDefinition = i1329[2]
  i1328.m_ClosingDefinition = i1329[3]
  i1328.m_OpeningTagArray = i1329[4]
  i1328.m_ClosingTagArray = i1329[5]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1333[i + 0]) );
  }
  i1330.files = i1332
  i1330.componentToPrefabIds = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1337 = data
  i1336.path = i1337[0]
  request.r(i1337[1], i1337[2], 0, i1336, 'unityObject')
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1341[i + 0]) );
  }
  i1338.scriptsExecutionOrder = i1340
  var i1343 = i1339[1]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1343[i + 0]) );
  }
  i1338.sortingLayers = i1342
  var i1345 = i1339[2]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1345[i + 0]) );
  }
  i1338.cullingLayers = i1344
  i1338.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1339[3], i1338.timeSettings)
  i1338.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1339[4], i1338.physicsSettings)
  i1338.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1339[5], i1338.physics2DSettings)
  i1338.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1339[6], i1338.qualitySettings)
  i1338.enableRealtimeShadows = !!i1339[7]
  i1338.enableAutoInstancing = !!i1339[8]
  i1338.enableStaticBatching = !!i1339[9]
  i1338.enableDynamicBatching = !!i1339[10]
  i1338.lightmapEncodingQuality = i1339[11]
  i1338.desiredColorSpace = i1339[12]
  var i1347 = i1339[13]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( i1347[i + 0] );
  }
  i1338.allTags = i1346
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.value = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1355 = data
  i1354.id = i1355[0]
  i1354.name = i1355[1]
  i1354.value = i1355[2]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1359 = data
  i1358.id = i1359[0]
  i1358.name = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1361 = data
  i1360.fixedDeltaTime = i1361[0]
  i1360.maximumDeltaTime = i1361[1]
  i1360.timeScale = i1361[2]
  i1360.maximumParticleTimestep = i1361[3]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1363 = data
  i1362.gravity = new pc.Vec3( i1363[0], i1363[1], i1363[2] )
  i1362.defaultSolverIterations = i1363[3]
  i1362.bounceThreshold = i1363[4]
  i1362.autoSyncTransforms = !!i1363[5]
  i1362.autoSimulation = !!i1363[6]
  var i1365 = i1363[7]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1365[i + 0]) );
  }
  i1362.collisionMatrix = i1364
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.layerId = i1369[1]
  i1368.otherLayerId = i1369[2]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'material')
  i1370.gravity = new pc.Vec2( i1371[2], i1371[3] )
  i1370.positionIterations = i1371[4]
  i1370.velocityIterations = i1371[5]
  i1370.velocityThreshold = i1371[6]
  i1370.maxLinearCorrection = i1371[7]
  i1370.maxAngularCorrection = i1371[8]
  i1370.maxTranslationSpeed = i1371[9]
  i1370.maxRotationSpeed = i1371[10]
  i1370.baumgarteScale = i1371[11]
  i1370.baumgarteTOIScale = i1371[12]
  i1370.timeToSleep = i1371[13]
  i1370.linearSleepTolerance = i1371[14]
  i1370.angularSleepTolerance = i1371[15]
  i1370.defaultContactOffset = i1371[16]
  i1370.autoSimulation = !!i1371[17]
  i1370.queriesHitTriggers = !!i1371[18]
  i1370.queriesStartInColliders = !!i1371[19]
  i1370.callbacksOnDisable = !!i1371[20]
  i1370.reuseCollisionCallbacks = !!i1371[21]
  i1370.autoSyncTransforms = !!i1371[22]
  var i1373 = i1371[23]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1373[i + 0]) );
  }
  i1370.collisionMatrix = i1372
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.layerId = i1377[1]
  i1376.otherLayerId = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1381[i + 0]) );
  }
  i1378.qualityLevels = i1380
  var i1383 = i1379[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1378.names = i1382
  i1378.shadows = i1379[2]
  i1378.anisotropicFiltering = i1379[3]
  i1378.antiAliasing = i1379[4]
  i1378.lodBias = i1379[5]
  i1378.shadowCascades = i1379[6]
  i1378.shadowDistance = i1379[7]
  i1378.shadowmaskMode = i1379[8]
  i1378.shadowProjection = i1379[9]
  i1378.shadowResolution = i1379[10]
  i1378.softParticles = !!i1379[11]
  i1378.softVegetation = !!i1379[12]
  i1378.activeColorSpace = i1379[13]
  i1378.desiredColorSpace = i1379[14]
  i1378.masterTextureLimit = i1379[15]
  i1378.maxQueuedFrames = i1379[16]
  i1378.particleRaycastBudget = i1379[17]
  i1378.pixelLightCount = i1379[18]
  i1378.realtimeReflectionProbes = !!i1379[19]
  i1378.shadowCascade2Split = i1379[20]
  i1378.shadowCascade4Split = new pc.Vec3( i1379[21], i1379[22], i1379[23] )
  i1378.streamingMipmapsActive = !!i1379[24]
  i1378.vSyncCount = i1379[25]
  i1378.asyncUploadBufferSize = i1379[26]
  i1378.asyncUploadTimeSlice = i1379[27]
  i1378.billboardsFaceCameraPosition = !!i1379[28]
  i1378.shadowNearPlaneOffset = i1379[29]
  i1378.streamingMipmapsMemoryBudget = i1379[30]
  i1378.maximumLODLevel = i1379[31]
  i1378.streamingMipmapsAddAllCameras = !!i1379[32]
  i1378.streamingMipmapsMaxLevelReduction = i1379[33]
  i1378.streamingMipmapsRenderersPerFrame = i1379[34]
  i1378.resolutionScalingFixedDPIFactor = i1379[35]
  i1378.streamingMipmapsMaxFileIORequests = i1379[36]
  i1378.currentQualityLevel = i1379[37]
  return i1378
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1387 = data
  i1386.m_GlyphIndex = i1387[0]
  i1386.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1387[1], i1386.m_GlyphValueRecord)
  return i1386
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1389 = data
  i1388.m_XCoordinate = i1389[0]
  i1388.m_YCoordinate = i1389[1]
  return i1388
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1391 = data
  i1390.m_XPositionAdjustment = i1391[0]
  i1390.m_YPositionAdjustment = i1391[1]
  return i1390
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1393 = data
  i1392.xPlacement = i1393[0]
  i1392.yPlacement = i1393[1]
  i1392.xAdvance = i1393[2]
  i1392.yAdvance = i1393[3]
  return i1392
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1395 = data
  i1394.m_XPlacement = i1395[0]
  i1394.m_YPlacement = i1395[1]
  i1394.m_XAdvance = i1395[2]
  i1394.m_YAdvance = i1395[3]
  return i1394
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[28],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[28],"96":[97],"98":[99],"100":[99],"27":[13],"101":[58],"102":[20],"54":[103],"57":[20],"20":[103],"24":[20],"104":[20],"105":[103],"106":[103],"56":[103],"107":[13],"108":[16,13],"109":[97],"110":[16,13],"111":[25,97],"112":[97],"113":[97,114],"115":[75],"116":[82],"117":[118],"119":[120],"121":[5],"122":[28],"123":[124],"125":[13],"126":[97,13],"32":[13,16],"127":[13],"128":[16,13],"129":[97],"130":[16,13],"131":[13],"132":[133],"134":[133],"135":[133],"136":[13],"137":[13],"30":[27],"15":[16,13],"138":[13],"29":[27],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[16,13],"149":[13],"150":[13],"151":[13],"36":[13],"152":[16,13],"153":[13],"154":[52],"155":[52],"53":[52],"156":[52],"157":[28],"158":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Pan","Item","Spartula","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ItemClickable","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","OilBrush","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "42.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v65_StyleBurrito";

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

Deserializers.buildID = "c7109254-a4c0-4d80-85ff-285cbb8349a9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

