var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSpring' )
  var i691 = data
  i690.spring = i691[0]
  i690.damper = i691[1]
  i690.targetPosition = i691[2]
  return i690
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor' )
  var i693 = data
  i692.m_TargetVelocity = i693[0]
  i692.m_Force = i693[1]
  i692.m_FreeSpin = i693[2]
  return i692
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointLimits' )
  var i695 = data
  i694.m_Min = i695[0]
  i694.m_Max = i695[1]
  i694.m_Bounciness = i695[2]
  i694.m_BounceMinVelocity = i695[3]
  i694.m_ContactDistance = i695[4]
  i694.minBounce = i695[5]
  i694.maxBounce = i695[6]
  return i694
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointDrive' )
  var i697 = data
  i696.m_PositionSpring = i697[0]
  i696.m_PositionDamper = i697[1]
  i696.m_MaximumForce = i697[2]
  i696.m_UseAcceleration = i697[3]
  return i696
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i699 = data
  i698.m_Spring = i699[0]
  i698.m_Damper = i699[1]
  return i698
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i701 = data
  i700.m_Limit = i701[0]
  i700.m_Bounciness = i701[1]
  i700.m_ContactDistance = i701[2]
  return i700
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i703 = data
  i702.m_ExtremumSlip = i703[0]
  i702.m_ExtremumValue = i703[1]
  i702.m_AsymptoteSlip = i703[2]
  i702.m_AsymptoteValue = i703[3]
  i702.m_Stiffness = i703[4]
  return i702
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i705 = data
  i704.m_LowerAngle = i705[0]
  i704.m_UpperAngle = i705[1]
  return i704
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i707 = data
  i706.m_MotorSpeed = i707[0]
  i706.m_MaximumMotorTorque = i707[1]
  return i706
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i709 = data
  i708.m_DampingRatio = i709[0]
  i708.m_Frequency = i709[1]
  i708.m_Angle = i709[2]
  return i708
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i711 = data
  i710.m_LowerTranslation = i711[0]
  i710.m_UpperTranslation = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i712 = root || new pc.UnityMaterial()
  var i713 = data
  i712.name = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'shader')
  i712.renderQueue = i713[3]
  i712.enableInstancing = !!i713[4]
  var i715 = i713[5]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i715[i + 0]) );
  }
  i712.floatParameters = i714
  var i717 = i713[6]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i717[i + 0]) );
  }
  i712.colorParameters = i716
  var i719 = i713[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i719[i + 0]) );
  }
  i712.vectorParameters = i718
  var i721 = i713[8]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i721[i + 0]) );
  }
  i712.textureParameters = i720
  var i723 = i713[9]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i723[i + 0]) );
  }
  i712.materialFlags = i722
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i727 = data
  i726.name = i727[0]
  i726.value = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i731 = data
  i730.name = i731[0]
  i730.value = new pc.Color(i731[1], i731[2], i731[3], i731[4])
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = new pc.Vec4( i735[1], i735[2], i735[3], i735[4] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'value')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i743 = data
  i742.name = i743[0]
  i742.enabled = !!i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i745 = data
  i744.name = i745[0]
  i744.width = i745[1]
  i744.height = i745[2]
  i744.mipmapCount = i745[3]
  i744.anisoLevel = i745[4]
  i744.filterMode = i745[5]
  i744.hdr = !!i745[6]
  i744.format = i745[7]
  i744.wrapMode = i745[8]
  i744.alphaIsTransparency = !!i745[9]
  i744.alphaSource = i745[10]
  i744.graphicsFormat = i745[11]
  i744.sRGBTexture = !!i745[12]
  i744.desiredColorSpace = i745[13]
  i744.wrapU = i745[14]
  i744.wrapV = i745[15]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i747 = data
  i746.position = new pc.Vec3( i747[0], i747[1], i747[2] )
  i746.scale = new pc.Vec3( i747[3], i747[4], i747[5] )
  i746.rotation = new pc.Quat(i747[6], i747[7], i747[8], i747[9])
  return i746
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i748 = root || request.c( 'HeartEffect' )
  var i749 = data
  i748.defaultLifeTime = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'tf')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i751 = data
  i750.color = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  request.r(i751[4], i751[5], 0, i750, 'sprite')
  i750.flipX = !!i751[6]
  i750.flipY = !!i751[7]
  i750.drawMode = i751[8]
  i750.size = new pc.Vec2( i751[9], i751[10] )
  i750.tileMode = i751[11]
  i750.adaptiveModeThreshold = i751[12]
  i750.maskInteraction = i751[13]
  i750.spriteSortPoint = i751[14]
  i750.enabled = !!i751[15]
  request.r(i751[16], i751[17], 0, i750, 'sharedMaterial')
  var i753 = i751[18]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.sharedMaterials = i752
  i750.receiveShadows = !!i751[19]
  i750.shadowCastingMode = i751[20]
  i750.sortingLayerID = i751[21]
  i750.sortingOrder = i751[22]
  i750.lightmapIndex = i751[23]
  i750.lightmapSceneIndex = i751[24]
  i750.lightmapScaleOffset = new pc.Vec4( i751[25], i751[26], i751[27], i751[28] )
  i750.lightProbeUsage = i751[29]
  i750.reflectionProbeUsage = i751[30]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i757 = data
  i756.name = i757[0]
  i756.tagId = i757[1]
  i756.enabled = !!i757[2]
  i756.isStatic = !!i757[3]
  i756.layer = i757[4]
  return i756
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i758 = root || request.c( 'HeartBreakEffect' )
  var i759 = data
  i758.defaultLifeTime = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'tf')
  return i758
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i760 = root || request.c( 'BlinkEffect' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'tf')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'mesh')
  i762.meshCount = i763[2]
  i762.activeVertexStreamsCount = i763[3]
  i762.alignment = i763[4]
  i762.renderMode = i763[5]
  i762.sortMode = i763[6]
  i762.lengthScale = i763[7]
  i762.velocityScale = i763[8]
  i762.cameraVelocityScale = i763[9]
  i762.normalDirection = i763[10]
  i762.sortingFudge = i763[11]
  i762.minParticleSize = i763[12]
  i762.maxParticleSize = i763[13]
  i762.pivot = new pc.Vec3( i763[14], i763[15], i763[16] )
  request.r(i763[17], i763[18], 0, i762, 'trailMaterial')
  i762.applyActiveColorSpace = !!i763[19]
  i762.enabled = !!i763[20]
  request.r(i763[21], i763[22], 0, i762, 'sharedMaterial')
  var i765 = i763[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[24]
  i762.shadowCastingMode = i763[25]
  i762.sortingLayerID = i763[26]
  i762.sortingOrder = i763[27]
  i762.lightmapIndex = i763[28]
  i762.lightmapSceneIndex = i763[29]
  i762.lightmapScaleOffset = new pc.Vec4( i763[30], i763[31], i763[32], i763[33] )
  i762.lightProbeUsage = i763[34]
  i762.reflectionProbeUsage = i763[35]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i767 = data
  i766.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i767[0], i766.main)
  i766.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i767[1], i766.colorBySpeed)
  i766.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i767[2], i766.colorOverLifetime)
  i766.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i767[3], i766.emission)
  i766.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i767[4], i766.rotationBySpeed)
  i766.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i767[5], i766.rotationOverLifetime)
  i766.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i767[6], i766.shape)
  i766.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i767[7], i766.sizeBySpeed)
  i766.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i767[8], i766.sizeOverLifetime)
  i766.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i767[9], i766.textureSheetAnimation)
  i766.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i767[10], i766.velocityOverLifetime)
  i766.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i767[11], i766.noise)
  i766.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i767[12], i766.inheritVelocity)
  i766.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i767[13], i766.forceOverLifetime)
  i766.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i767[14], i766.limitVelocityOverLifetime)
  i766.useAutoRandomSeed = !!i767[15]
  i766.randomSeed = i767[16]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemMain()
  var i769 = data
  i768.duration = i769[0]
  i768.loop = !!i769[1]
  i768.prewarm = !!i769[2]
  i768.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.startDelay)
  i768.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.startLifetime)
  i768.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[5], i768.startSpeed)
  i768.startSize3D = !!i769[6]
  i768.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[7], i768.startSizeX)
  i768.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.startSizeY)
  i768.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[9], i768.startSizeZ)
  i768.startRotation3D = !!i769[10]
  i768.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[11], i768.startRotationX)
  i768.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[12], i768.startRotationY)
  i768.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[13], i768.startRotationZ)
  i768.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[14], i768.startColor)
  i768.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[15], i768.gravityModifier)
  i768.simulationSpace = i769[16]
  request.r(i769[17], i769[18], 0, i768, 'customSimulationSpace')
  i768.simulationSpeed = i769[19]
  i768.useUnscaledTime = !!i769[20]
  i768.scalingMode = i769[21]
  i768.playOnAwake = !!i769[22]
  i768.maxParticles = i769[23]
  i768.emitterVelocityMode = i769[24]
  i768.stopAction = i769[25]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxCurve()
  var i771 = data
  i770.mode = i771[0]
  i770.curveMin = new pc.AnimationCurve( { keys_flow: i771[1] } )
  i770.curveMax = new pc.AnimationCurve( { keys_flow: i771[2] } )
  i770.curveMultiplier = i771[3]
  i770.constantMin = i771[4]
  i770.constantMax = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i772 = root || new pc.MinMaxGradient()
  var i773 = data
  i772.mode = i773[0]
  i772.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[1], i772.gradientMin)
  i772.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[2], i772.gradientMax)
  i772.colorMin = new pc.Color(i773[3], i773[4], i773[5], i773[6])
  i772.colorMax = new pc.Color(i773[7], i773[8], i773[9], i773[10])
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i775 = data
  i774.mode = i775[0]
  var i777 = i775[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i777[i + 0]) );
  }
  i774.colorKeys = i776
  var i779 = i775[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i779[i + 0]) );
  }
  i774.alphaKeys = i778
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorBySpeed()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  i780.range = new pc.Vec2( i781[2], i781[3] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.time = i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i789 = data
  i788.alpha = i789[0]
  i788.time = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemColorOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[1], i790.color)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemEmitter()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.rateOverTime)
  i792.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.rateOverDistance)
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i795[i + 0]) );
  }
  i792.bursts = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemBurst()
  var i799 = data
  i798.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[0], i798.count)
  i798.cycleCount = i799[1]
  i798.minCount = i799[2]
  i798.maxCount = i799[3]
  i798.repeatInterval = i799[4]
  i798.time = i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemRotationOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemShape()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.shapeType = i805[1]
  i804.randomDirectionAmount = i805[2]
  i804.sphericalDirectionAmount = i805[3]
  i804.randomPositionAmount = i805[4]
  i804.alignToDirection = !!i805[5]
  i804.radius = i805[6]
  i804.radiusMode = i805[7]
  i804.radiusSpread = i805[8]
  i804.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.radiusSpeed)
  i804.radiusThickness = i805[10]
  i804.angle = i805[11]
  i804.length = i805[12]
  i804.boxThickness = new pc.Vec3( i805[13], i805[14], i805[15] )
  i804.meshShapeType = i805[16]
  request.r(i805[17], i805[18], 0, i804, 'mesh')
  request.r(i805[19], i805[20], 0, i804, 'meshRenderer')
  request.r(i805[21], i805[22], 0, i804, 'skinnedMeshRenderer')
  i804.useMeshMaterialIndex = !!i805[23]
  i804.meshMaterialIndex = i805[24]
  i804.useMeshColors = !!i805[25]
  i804.normalOffset = i805[26]
  i804.arc = i805[27]
  i804.arcMode = i805[28]
  i804.arcSpread = i805[29]
  i804.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[30], i804.arcSpeed)
  i804.donutRadius = i805[31]
  i804.position = new pc.Vec3( i805[32], i805[33], i805[34] )
  i804.rotation = new pc.Vec3( i805[35], i805[36], i805[37] )
  i804.scale = new pc.Vec3( i805[38], i805[39], i805[40] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  i806.range = new pc.Vec2( i807[5], i807[6] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemSizeOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.animation = i811[2]
  i810.numTilesX = i811[3]
  i810.numTilesY = i811[4]
  i810.useRandomRow = !!i811[5]
  i810.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[6], i810.frameOverTime)
  i810.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.startFrame)
  i810.cycleCount = i811[8]
  i810.rowIndex = i811[9]
  i810.flipU = i811[10]
  i810.flipV = i811[11]
  i810.spriteCount = i811[12]
  var i813 = i811[13]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sprites = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.radial)
  i816.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[5], i816.speedModifier)
  i816.space = i817[6]
  i816.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[7], i816.orbitalX)
  i816.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.orbitalY)
  i816.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[9], i816.orbitalZ)
  i816.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[10], i816.orbitalOffsetX)
  i816.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.orbitalOffsetY)
  i816.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[12], i816.orbitalOffsetZ)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemNoise()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.separateAxes = !!i819[1]
  i818.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.strengthX)
  i818.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.strengthY)
  i818.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.strengthZ)
  i818.frequency = i819[5]
  i818.damping = !!i819[6]
  i818.octaveCount = i819[7]
  i818.octaveMultiplier = i819[8]
  i818.octaveScale = i819[9]
  i818.quality = i819[10]
  i818.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.scrollSpeed)
  i818.scrollSpeedMultiplier = i819[12]
  i818.remapEnabled = !!i819[13]
  i818.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[14], i818.remapX)
  i818.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[15], i818.remapY)
  i818.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[16], i818.remapZ)
  i818.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[17], i818.positionAmount)
  i818.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[18], i818.rotationAmount)
  i818.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[19], i818.sizeAmount)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemInheritVelocity()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.curve)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemForceOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.space = i823[4]
  i822.randomized = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.limit)
  i824.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.limitX)
  i824.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.limitY)
  i824.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[4], i824.limitZ)
  i824.dampen = i825[5]
  i824.separateAxes = !!i825[6]
  i824.space = i825[7]
  i824.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[8], i824.drag)
  i824.multiplyDragByParticleSize = !!i825[9]
  i824.multiplyDragByParticleVelocity = !!i825[10]
  return i824
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i826 = root || request.c( 'StarExploreFX' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'tf')
  return i826
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i828 = root || request.c( 'ProgressBar' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'fillTransform')
  request.r(i829[2], i829[3], 0, i828, 'tf')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i831 = data
  i830.pivot = new pc.Vec2( i831[0], i831[1] )
  i830.anchorMin = new pc.Vec2( i831[2], i831[3] )
  i830.anchorMax = new pc.Vec2( i831[4], i831[5] )
  i830.sizeDelta = new pc.Vec2( i831[6], i831[7] )
  i830.anchoredPosition3D = new pc.Vec3( i831[8], i831[9], i831[10] )
  i830.rotation = new pc.Quat(i831[11], i831[12], i831[13], i831[14])
  i830.scale = new pc.Vec3( i831[15], i831[16], i831[17] )
  return i830
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i832 = root || request.c( 'ClockTimer' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'fillImage')
  request.r(i833[2], i833[3], 0, i832, 'tf')
  i832.spawnZoomDuration = i833[4]
  i832.despawnZoomDuration = i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i835 = data
  i834.cullTransparentMesh = !!i835[0]
  return i834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Image' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_Sprite')
  i836.m_Type = i837[2]
  i836.m_PreserveAspect = !!i837[3]
  i836.m_FillCenter = !!i837[4]
  i836.m_FillMethod = i837[5]
  i836.m_FillAmount = i837[6]
  i836.m_FillClockwise = !!i837[7]
  i836.m_FillOrigin = i837[8]
  i836.m_UseSpriteMesh = !!i837[9]
  i836.m_PixelsPerUnitMultiplier = i837[10]
  request.r(i837[11], i837[12], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[13]
  i836.m_Color = new pc.Color(i837[14], i837[15], i837[16], i837[17])
  i836.m_RaycastTarget = !!i837[18]
  i836.m_RaycastPadding = new pc.Vec4( i837[19], i837[20], i837[21], i837[22] )
  return i836
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i838 = root || request.c( 'FlourSmoke' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'tf')
  return i838
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i840 = root || request.c( 'WaterSplash' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'tf')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i843 = data
  i842.name = i843[0]
  i842.index = i843[1]
  i842.startup = !!i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i845 = data
  i844.planeDistance = i845[0]
  i844.referencePixelsPerUnit = i845[1]
  i844.isFallbackOverlay = !!i845[2]
  i844.renderMode = i845[3]
  i844.renderOrder = i845[4]
  i844.sortingLayerName = i845[5]
  i844.sortingOrder = i845[6]
  i844.scaleFactor = i845[7]
  request.r(i845[8], i845[9], 0, i844, 'worldCamera')
  i844.overrideSorting = !!i845[10]
  i844.pixelPerfect = !!i845[11]
  i844.targetDisplay = i845[12]
  i844.overridePixelPerfect = !!i845[13]
  i844.enabled = !!i845[14]
  return i844
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i847 = data
  i846.m_UiScaleMode = i847[0]
  i846.m_ReferencePixelsPerUnit = i847[1]
  i846.m_ScaleFactor = i847[2]
  i846.m_ReferenceResolution = new pc.Vec2( i847[3], i847[4] )
  i846.m_ScreenMatchMode = i847[5]
  i846.m_MatchWidthOrHeight = i847[6]
  i846.m_PhysicalUnit = i847[7]
  i846.m_FallbackScreenDPI = i847[8]
  i846.m_DefaultSpriteDPI = i847[9]
  i846.m_DynamicPixelsPerUnit = i847[10]
  i846.m_PresetInfoIsWorld = !!i847[11]
  return i846
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i849 = data
  i848.m_IgnoreReversedGraphics = !!i849[0]
  i848.m_BlockingObjects = i849[1]
  i848.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i849[2] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'animatorController')
  request.r(i851[2], i851[3], 0, i850, 'avatar')
  i850.updateMode = i851[4]
  i850.hasTransformHierarchy = !!i851[5]
  i850.applyRootMotion = !!i851[6]
  var i853 = i851[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.humanBones = i852
  i850.enabled = !!i851[8]
  return i850
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

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Button' )
  var i869 = data
  i868.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i869[0], i868.m_OnClick)
  i868.m_Navigation = request.d('UnityEngine.UI.Navigation', i869[1], i868.m_Navigation)
  i868.m_Transition = i869[2]
  i868.m_Colors = request.d('UnityEngine.UI.ColorBlock', i869[3], i868.m_Colors)
  i868.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i869[4], i868.m_SpriteState)
  i868.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i869[5], i868.m_AnimationTriggers)
  i868.m_Interactable = !!i869[6]
  request.r(i869[7], i869[8], 0, i868, 'm_TargetGraphic')
  return i868
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i871 = data
  i870.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i871[0], i870.m_PersistentCalls)
  return i870
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('UnityEngine.Events.PersistentCall', i875[i + 0]));
  }
  i872.m_Calls = i874
  return i872
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Target')
  i878.m_TargetAssemblyTypeName = i879[2]
  i878.m_MethodName = i879[3]
  i878.m_Mode = i879[4]
  i878.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i879[5], i878.m_Arguments)
  i878.m_CallState = i879[6]
  return i878
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_ObjectArgument')
  i880.m_ObjectArgumentAssemblyTypeName = i881[2]
  i880.m_IntArgument = i881[3]
  i880.m_FloatArgument = i881[4]
  i880.m_StringArgument = i881[5]
  i880.m_BoolArgument = !!i881[6]
  return i880
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i883 = data
  i882.m_Mode = i883[0]
  i882.m_WrapAround = !!i883[1]
  request.r(i883[2], i883[3], 0, i882, 'm_SelectOnUp')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectOnDown')
  request.r(i883[6], i883[7], 0, i882, 'm_SelectOnLeft')
  request.r(i883[8], i883[9], 0, i882, 'm_SelectOnRight')
  return i882
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i885 = data
  i884.m_NormalColor = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.m_HighlightedColor = new pc.Color(i885[4], i885[5], i885[6], i885[7])
  i884.m_PressedColor = new pc.Color(i885[8], i885[9], i885[10], i885[11])
  i884.m_SelectedColor = new pc.Color(i885[12], i885[13], i885[14], i885[15])
  i884.m_DisabledColor = new pc.Color(i885[16], i885[17], i885[18], i885[19])
  i884.m_ColorMultiplier = i885[20]
  i884.m_FadeDuration = i885[21]
  return i884
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_HighlightedSprite')
  request.r(i887[2], i887[3], 0, i886, 'm_PressedSprite')
  request.r(i887[4], i887[5], 0, i886, 'm_SelectedSprite')
  request.r(i887[6], i887[7], 0, i886, 'm_DisabledSprite')
  return i886
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i889 = data
  i888.m_NormalTrigger = i889[0]
  i888.m_HighlightedTrigger = i889[1]
  i888.m_PressedTrigger = i889[2]
  i888.m_SelectedTrigger = i889[3]
  i888.m_DisabledTrigger = i889[4]
  return i888
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i890 = root || request.c( 'Ply_Pool' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Ply_Pool+PoolAmount', i893[i + 0]) );
  }
  i890.poolAmounts = i892
  request.r(i891[1], i891[2], 0, i890, 'poolHolder')
  return i890
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i896 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i897 = data
  i896.type = i897[0]
  i896.amount = i897[1]
  request.r(i897[2], i897[3], 0, i896, 'gameUnit')
  return i896
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i898 = root || request.c( 'Ply_SoundManager' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Ply_SoundManager+FxAudio', i901[i + 0]) );
  }
  i898.fxAudios = i900
  var i903 = i899[1]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i898.audioClips = i902
  request.r(i899[2], i899[3], 0, i898, 'sound')
  return i898
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i906 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i907 = data
  i906.fxType = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'audioClip')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'clip')
  request.r(i911[2], i911[3], 0, i910, 'outputAudioMixerGroup')
  i910.playOnAwake = !!i911[4]
  i910.loop = !!i911[5]
  i910.time = i911[6]
  i910.volume = i911[7]
  i910.pitch = i911[8]
  i910.enabled = !!i911[9]
  return i910
}

Deserializers["GameManager"] = function (request, data, root) {
  var i912 = root || request.c( 'GameManager' )
  var i913 = data
  i912.isPlaying = !!i913[0]
  i912.isTutorial = !!i913[1]
  i912.isGotoStore = !!i913[2]
  i912.isLoseGame = !!i913[3]
  i912.countMove = i913[4]
  i912.currentLayer = i913[5]
  return i912
}

Deserializers["UIManager"] = function (request, data, root) {
  var i914 = root || request.c( 'UIManager' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'winUI')
  request.r(i915[2], i915[3], 0, i914, 'loseUI')
  request.r(i915[4], i915[5], 0, i914, 'tutorial')
  request.r(i915[6], i915[7], 0, i914, 'verticalUI')
  request.r(i915[8], i915[9], 0, i914, 'horizontalUI')
  request.r(i915[10], i915[11], 0, i914, 'downloadBtn')
  request.r(i915[12], i915[13], 0, i914, 'horizontalDownloadBtn')
  i914.isGoogleBuild = !!i915[14]
  i914.screenWidth = i915[15]
  i914.screenHeight = i915[16]
  i914.scaleHeightOnWidth = i915[17]
  i914.isVertical = !!i915[18]
  i914.isScreenVertical = !!i915[19]
  request.r(i915[20], i915[21], 0, i914, 'cam')
  i914.verticalUIHeightOnWidthRatio = i915[22]
  i914.scaleCameraOnValidate = !!i915[23]
  i914.screenVerticalHeightOnWidthRatio = i915[24]
  i914.useContinuousScaling = !!i915[25]
  i914.baseOrthographicSize = i915[26]
  i914.baseAspect = i915[27]
  i914.landscapeSizeRatio = i915[28]
  i914.defaultPortraitSizeRatio = i915[29]
  var i917 = i915[30]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('ScreenScaleStep', i917[i + 0]));
  }
  i914.discreteScaleSteps = i916
  i914.usePerspectiveCamera = !!i915[31]
  request.r(i915[32], i915[33], 0, i914, 'perspectiveFocus')
  i914.perspectiveFocusDistance = i915[34]
  i914.perspectivePadding = i915[35]
  i914.fitRendererBounds = !!i915[36]
  request.r(i915[37], i915[38], 0, i914, 'boundsRoot')
  var i919 = i915[39]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i914.boundsRenderers = i918
  return i914
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i922 = root || request.c( 'ScreenScaleStep' )
  var i923 = data
  i922.heightOnWidthRatio = i923[0]
  i922.orthographicSize = i923[1]
  return i922
}

Deserializers["InputManager"] = function (request, data, root) {
  var i926 = root || request.c( 'InputManager' )
  var i927 = data
  i926.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i927[0] )
  i926.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i927[1] )
  i926.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i927[2] )
  i926.isDragging = !!i927[3]
  return i926
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i928 = root || request.c( 'HandTutManager' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i928.items = i930
  request.r(i929[1], i929[2], 0, i928, 'knife')
  request.r(i929[3], i929[4], 0, i928, 'peeler')
  request.r(i929[5], i929[6], 0, i928, 'handTutObject')
  request.r(i929[7], i929[8], 0, i928, 'tapToCookObject')
  request.r(i929[9], i929[10], 0, i928, 'oilItem')
  request.r(i929[11], i929[12], 0, i928, 'stoveToggleEvent')
  request.r(i929[13], i929[14], 0, i928, 'waterToggleEvent')
  request.r(i929[15], i929[16], 0, i928, 'sinkBlock')
  var i933 = i929[17]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i928.itemsInWater = i932
  i928.noDelayItemCount = i929[18]
  i928.breakHeartNoDelayThreshold = i929[19]
  i928.showSinkWaterTutorialOnStart = !!i929[20]
  i928.waitForBowlIntro = !!i929[21]
  i928.idleDelay = i929[22]
  i928.moveDuration = i929[23]
  i928.dragFadeDuration = i929[24]
  i928.clickScaleDuration = i929[25]
  i928.waitAtEndDuration = i929[26]
  i928.handZPosition = i929[27]
  i928.clickScaleMultiplier = i929[28]
  i928.moveEase = i929[29]
  return i928
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i938 = root || request.c( 'SortChildByZPos' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'transformToSort')
  var i941 = i939[2]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.childrenToSort = i940
  i938.zOffset = i939[3]
  i938.baseZ = i939[4]
  return i938
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
  i944.transitionDuration = i945[1]
  i944.delayBeforeNextPhase = i945[2]
  i944.offScreenLeftX = i945[3]
  i944.offScreenRightX = i945[4]
  i944.centerScreenX = i945[5]
  request.r(i945[6], i945[7], 0, i944, 'phaseTransitionObject')
  i944.phaseTransitionObjectDuration = i945[8]
  i944.currentPhaseIndex = i945[9]
  i944.currentStepCount = i945[10]
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

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i953 = data
  i952.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i953[0], i952.m_PersistentCalls)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i955 = data
  i954.aspect = i955[0]
  i954.orthographic = !!i955[1]
  i954.orthographicSize = i955[2]
  i954.backgroundColor = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.nearClipPlane = i955[7]
  i954.farClipPlane = i955[8]
  i954.fieldOfView = i955[9]
  i954.depth = i955[10]
  i954.clearFlags = i955[11]
  i954.cullingMask = i955[12]
  i954.rect = i955[13]
  request.r(i955[14], i955[15], 0, i954, 'targetTexture')
  i954.usePhysicalProperties = !!i955[16]
  i954.focalLength = i955[17]
  i954.sensorSize = new pc.Vec2( i955[18], i955[19] )
  i954.lensShift = new pc.Vec2( i955[20], i955[21] )
  i954.gateFit = i955[22]
  i954.commandBufferCount = i955[23]
  i954.cameraType = i955[24]
  i954.enabled = !!i955[25]
  return i954
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_FirstSelected')
  i956.m_sendNavigationEvents = !!i957[2]
  i956.m_DragThreshold = i957[3]
  return i956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i959 = data
  i958.m_HorizontalAxis = i959[0]
  i958.m_VerticalAxis = i959[1]
  i958.m_SubmitButton = i959[2]
  i958.m_CancelButton = i959[3]
  i958.m_InputActionsPerSecond = i959[4]
  i958.m_RepeatDelay = i959[5]
  i958.m_ForceModuleActive = !!i959[6]
  i958.m_SendPointerHoverToParent = !!i959[7]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i961 = data
  i960.center = new pc.Vec3( i961[0], i961[1], i961[2] )
  i960.radius = i961[3]
  i960.enabled = !!i961[4]
  i960.isTrigger = !!i961[5]
  request.r(i961[6], i961[7], 0, i960, 'material')
  return i960
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i962 = root || request.c( 'Ply_ToggleEvent' )
  var i963 = data
  i962.isOn = !!i963[0]
  i962.applyStateOnEnable = !!i963[1]
  i962.applyStateOnClick = !!i963[2]
  request.r(i963[3], i963[4], 0, i962, 'targetObject')
  i962.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i963[5], i962.onTurnOn)
  i962.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i963[6], i962.onTurnOff)
  return i962
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i964 = root || request.c( 'SinkBlock' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'sink')
  i964.startsInside = !!i965[2]
  i964.insideTargetType = i965[3]
  request.r(i965[4], i965[5], 0, i964, 'insideDefaultTarget')
  i964.outsideTargetType = i965[6]
  request.r(i965[7], i965[8], 0, i964, 'outsideDefaultTarget')
  i964.isDone = !!i965[9]
  i964.onProcess = !!i965[10]
  request.r(i965[11], i965[12], 0, i964, 'itemDraggable')
  request.r(i965[13], i965[14], 0, i964, 'itemClickable')
  request.r(i965[15], i965[16], 0, i964, 'itemStirring')
  request.r(i965[17], i965[18], 0, i964, 'itemKnifeSpriteMaskCutter')
  request.r(i965[19], i965[20], 0, i964, 'itemSpriteMaskPainter')
  request.r(i965[21], i965[22], 0, i964, 'itemMoveToTarget')
  request.r(i965[23], i965[24], 0, i964, 'animator')
  i964.itemType = i965[25]
  request.r(i965[26], i965[27], 0, i964, 'spriteRenderer')
  i964.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i965[28], i964.onKnifeIn)
  i964.heartEffectScale = i965[29]
  i964.breakHeartEffectScale = i965[30]
  i964.blinkEffectScale = i965[31]
  i964.mergeEffectScale = i965[32]
  i964.playMoveToTargetFinishSound = !!i965[33]
  i964.moveToTargetFinishFxType = i965[34]
  return i964
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i966 = root || request.c( 'ItemDraggable' )
  var i967 = data
  i966.isDraggable = !!i967[0]
  request.r(i967[1], i967[2], 0, i966, 'returnTransform')
  i966.setParentToReturnTransform = !!i967[3]
  i966.returnToExactReturnTransformPosition = !!i967[4]
  i966.targetItemType = i967[5]
  request.r(i967[6], i967[7], 0, i966, 'item')
  i966.checkState = !!i967[8]
  request.r(i967[9], i967[10], 0, i966, 'shadowObject')
  i966.playReturnToStartFinishSound = !!i967[11]
  i966.returnToStartFinishFxType = i967[12]
  i966.spawnBreakHeartOnDropFail = !!i967[13]
  i966.playBeginDragSound = !!i967[14]
  i966.beginDragFxType = i967[15]
  i966.liftOffset = i967[16]
  i966.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i967[17], i966.onBeginDrag)
  i966.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i967[18], i966.onDropSuccess)
  i966.onDropFail = request.d('UnityEngine.Events.UnityEvent', i967[19], i966.onDropFail)
  return i966
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i968 = root || request.c( 'ItemMoveToTarget' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'defaultTarget')
  i968.duration = i969[2]
  i968.easeType = i969[3]
  i968.moveType = i969[4]
  i968.jumpPower = i969[5]
  i968.numJumps = i969[6]
  i968.rotate360DuringJump = !!i969[7]
  i968.flipRotate = !!i969[8]
  i968.angleRotate = i969[9]
  i968.setParentToTarget = !!i969[10]
  i968.onComplete = request.d('UnityEngine.Events.UnityEvent', i969[11], i968.onComplete)
  i968.lockInputWhileMoving = !!i969[12]
  i968.resetParentBeforeMove = !!i969[13]
  return i968
}

Deserializers["Sink"] = function (request, data, root) {
  var i970 = root || request.c( 'Sink' )
  var i971 = data
  i970.isClose = !!i971[0]
  i970.isWaterDrop = !!i971[1]
  i970.isWaterIn = !!i971[2]
  request.r(i971[3], i971[4], 0, i970, 'waterSplashPos')
  request.r(i971[5], i971[6], 0, i970, 'faucetAnimator')
  request.r(i971[7], i971[8], 0, i970, 'basinAnimator')
  request.r(i971[9], i971[10], 0, i970, 'waterDrop')
  request.r(i971[11], i971[12], 0, i970, 'waterIn')
  request.r(i971[13], i971[14], 0, i970, 'basinWaterRenderer')
  i970.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i971[15], i971[16], i971[17], i971[18])
  i970.fullWaterRect = UnityEngine.Rect.MinMaxRect(i971[19], i971[20], i971[21], i971[22])
  i970.waterRiseDuration = i971[23]
  i970.waterFallDuration = i971[24]
  i970.waterRiseEase = i971[25]
  i970.waterFallEase = i971[26]
  i970.drawWaterRects = !!i971[27]
  i970.emptyRectColor = new pc.Color(i971[28], i971[29], i971[30], i971[31])
  i970.fullRectColor = new pc.Color(i971[32], i971[33], i971[34], i971[35])
  request.r(i971[36], i971[37], 0, i970, 'waterDropTransform')
  i970.emptyWaterDropPoint = new pc.Vec3( i971[38], i971[39], i971[40] )
  i970.fullWaterDropPoint = new pc.Vec3( i971[41], i971[42], i971[43] )
  i970.drawWaterDropPoints = !!i971[44]
  i970.waterDropPointRadius = i971[45]
  i970.emptyWaterDropPointColor = new pc.Color(i971[46], i971[47], i971[48], i971[49])
  i970.fullWaterDropPointColor = new pc.Color(i971[50], i971[51], i971[52], i971[53])
  var i973 = i971[54]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.inWaterItems = i972
  i970.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i971[55], i970.onWaterIn)
  i970.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i971[56], i970.onNoWaterIn)
  i970.isDone = !!i971[57]
  i970.onProcess = !!i971[58]
  request.r(i971[59], i971[60], 0, i970, 'itemDraggable')
  request.r(i971[61], i971[62], 0, i970, 'itemClickable')
  request.r(i971[63], i971[64], 0, i970, 'itemStirring')
  request.r(i971[65], i971[66], 0, i970, 'itemKnifeSpriteMaskCutter')
  request.r(i971[67], i971[68], 0, i970, 'itemSpriteMaskPainter')
  request.r(i971[69], i971[70], 0, i970, 'itemMoveToTarget')
  request.r(i971[71], i971[72], 0, i970, 'animator')
  i970.itemType = i971[73]
  request.r(i971[74], i971[75], 0, i970, 'spriteRenderer')
  i970.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i971[76], i970.onKnifeIn)
  i970.heartEffectScale = i971[77]
  i970.breakHeartEffectScale = i971[78]
  i970.blinkEffectScale = i971[79]
  i970.mergeEffectScale = i971[80]
  i970.playMoveToTargetFinishSound = !!i971[81]
  i970.moveToTargetFinishFxType = i971[82]
  i970.waterState = i971[83]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i975 = data
  i974.center = new pc.Vec3( i975[0], i975[1], i975[2] )
  i974.size = new pc.Vec3( i975[3], i975[4], i975[5] )
  i974.enabled = !!i975[6]
  i974.isTrigger = !!i975[7]
  request.r(i975[8], i975[9], 0, i974, 'material')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i977 = data
  i976.frontSortingLayerID = i977[0]
  i976.frontSortingOrder = i977[1]
  i976.backSortingLayerID = i977[2]
  i976.backSortingOrder = i977[3]
  i976.alphaCutoff = i977[4]
  request.r(i977[5], i977[6], 0, i976, 'sprite')
  i976.tileMode = i977[7]
  i976.isCustomRangeActive = !!i977[8]
  i976.spriteSortPoint = i977[9]
  i976.enabled = !!i977[10]
  request.r(i977[11], i977[12], 0, i976, 'sharedMaterial')
  var i979 = i977[13]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.sharedMaterials = i978
  i976.receiveShadows = !!i977[14]
  i976.shadowCastingMode = i977[15]
  i976.sortingLayerID = i977[16]
  i976.sortingOrder = i977[17]
  i976.lightmapIndex = i977[18]
  i976.lightmapSceneIndex = i977[19]
  i976.lightmapScaleOffset = new pc.Vec4( i977[20], i977[21], i977[22], i977[23] )
  i976.lightProbeUsage = i977[24]
  i976.reflectionProbeUsage = i977[25]
  return i976
}

Deserializers["Item"] = function (request, data, root) {
  var i980 = root || request.c( 'Item' )
  var i981 = data
  i980.isDone = !!i981[0]
  i980.onProcess = !!i981[1]
  request.r(i981[2], i981[3], 0, i980, 'itemDraggable')
  request.r(i981[4], i981[5], 0, i980, 'itemClickable')
  request.r(i981[6], i981[7], 0, i980, 'itemStirring')
  request.r(i981[8], i981[9], 0, i980, 'itemKnifeSpriteMaskCutter')
  request.r(i981[10], i981[11], 0, i980, 'itemSpriteMaskPainter')
  request.r(i981[12], i981[13], 0, i980, 'itemMoveToTarget')
  request.r(i981[14], i981[15], 0, i980, 'animator')
  i980.itemType = i981[16]
  request.r(i981[17], i981[18], 0, i980, 'spriteRenderer')
  i980.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i981[19], i980.onKnifeIn)
  i980.heartEffectScale = i981[20]
  i980.breakHeartEffectScale = i981[21]
  i980.blinkEffectScale = i981[22]
  i980.mergeEffectScale = i981[23]
  i980.playMoveToTargetFinishSound = !!i981[24]
  i980.moveToTargetFinishFxType = i981[25]
  return i980
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i982 = root || request.c( 'Ply_BobEffect' )
  var i983 = data
  i982.playOnEnable = !!i983[0]
  i982.useLocalMove = !!i983[1]
  i982.bobOffset = new pc.Vec3( i983[2], i983[3], i983[4] )
  i982.duration = i983[5]
  i982.ease = i983[6]
  return i982
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i984 = root || request.c( 'Ply_TimerEvent' )
  var i985 = data
  i984.duration = i985[0]
  i984.playOnEnable = !!i985[1]
  i984.ignoreTimeScale = !!i985[2]
  i984.autoDisableOnComplete = !!i985[3]
  i984.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i985[4], i984.onTimerStart)
  i984.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i985[5], i984.onTimerComplete)
  i984.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i985[6], i984.onTimerStop)
  return i984
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i986 = root || request.c( 'InWaterItem' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'waterTarget')
  request.r(i987[2], i987[3], 0, i986, 'cuttingBoardTarget')
  request.r(i987[4], i987[5], 0, i986, 'plateTarget')
  var i989 = i987[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.childObject = i988
  request.r(i987[7], i987[8], 0, i986, 'ply_TimerEvent')
  request.r(i987[9], i987[10], 0, i986, 'ply_BobEffect')
  request.r(i987[11], i987[12], 0, i986, 'collider1')
  request.r(i987[13], i987[14], 0, i986, 'sink')
  i986.isInWater = !!i987[15]
  i986.isOnCuttingBoard = !!i987[16]
  i986.isOnPlate = !!i987[17]
  i986.isClean = !!i987[18]
  i986.isCutDone = !!i987[19]
  i986.cuttingBoardColliderRadiusMultiplier = i987[20]
  i986.jumpToPlatePower = i987[21]
  i986.jumpToPlateDuration = i987[22]
  i986.jumpToPlateAfterCutDone = !!i987[23]
  request.r(i987[24], i987[25], 0, i986, 'plateFoodShadow')
  i986.platePunchScale = new pc.Vec3( i987[26], i987[27], i987[28] )
  i986.platePunchDuration = i987[29]
  i986.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i987[30], i986.onMoveToCuttingBoardComplete)
  i986.isDone = !!i987[31]
  i986.onProcess = !!i987[32]
  request.r(i987[33], i987[34], 0, i986, 'itemDraggable')
  request.r(i987[35], i987[36], 0, i986, 'itemClickable')
  request.r(i987[37], i987[38], 0, i986, 'itemStirring')
  request.r(i987[39], i987[40], 0, i986, 'itemKnifeSpriteMaskCutter')
  request.r(i987[41], i987[42], 0, i986, 'itemSpriteMaskPainter')
  request.r(i987[43], i987[44], 0, i986, 'itemMoveToTarget')
  request.r(i987[45], i987[46], 0, i986, 'animator')
  i986.itemType = i987[47]
  request.r(i987[48], i987[49], 0, i986, 'spriteRenderer')
  i986.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i987[50], i986.onKnifeIn)
  i986.heartEffectScale = i987[51]
  i986.breakHeartEffectScale = i987[52]
  i986.blinkEffectScale = i987[53]
  i986.mergeEffectScale = i987[54]
  i986.playMoveToTargetFinishSound = !!i987[55]
  i986.moveToTargetFinishFxType = i987[56]
  return i986
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i990 = root || request.c( 'ItemClickable' )
  var i991 = data
  i990.requiredClicks = i991[0]
  i990.infiniteClick = !!i991[1]
  i990.canClick = !!i991[2]
  i990.disableAfterClick = !!i991[3]
  i990.onClick = request.d('UnityEngine.Events.UnityEvent', i991[4], i990.onClick)
  var i993 = i991[5]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('UnityEngine.Events.UnityEvent', i993[i + 0]));
  }
  i990.sequentialOnClicks = i992
  i990.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i991[6], i990.onClickComplete)
  return i990
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i996 = root || request.c( 'CuttingBoard' )
  var i997 = data
  i996.punchScale = new pc.Vec3( i997[0], i997[1], i997[2] )
  i996.punchDuration = i997[3]
  i996.isDone = !!i997[4]
  i996.onProcess = !!i997[5]
  request.r(i997[6], i997[7], 0, i996, 'itemDraggable')
  request.r(i997[8], i997[9], 0, i996, 'itemClickable')
  request.r(i997[10], i997[11], 0, i996, 'itemStirring')
  request.r(i997[12], i997[13], 0, i996, 'itemKnifeSpriteMaskCutter')
  request.r(i997[14], i997[15], 0, i996, 'itemSpriteMaskPainter')
  request.r(i997[16], i997[17], 0, i996, 'itemMoveToTarget')
  request.r(i997[18], i997[19], 0, i996, 'animator')
  i996.itemType = i997[20]
  request.r(i997[21], i997[22], 0, i996, 'spriteRenderer')
  i996.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i997[23], i996.onKnifeIn)
  i996.heartEffectScale = i997[24]
  i996.breakHeartEffectScale = i997[25]
  i996.blinkEffectScale = i997[26]
  i996.mergeEffectScale = i997[27]
  i996.playMoveToTargetFinishSound = !!i997[28]
  i996.moveToTargetFinishFxType = i997[29]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i999 = data
  i998.center = new pc.Vec3( i999[0], i999[1], i999[2] )
  i998.radius = i999[3]
  i998.height = i999[4]
  i998.direction = i999[5]
  i998.enabled = !!i999[6]
  i998.isTrigger = !!i999[7]
  request.r(i999[8], i999[9], 0, i998, 'material')
  return i998
}

Deserializers["Knife"] = function (request, data, root) {
  var i1000 = root || request.c( 'Knife' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'knifeIdle')
  request.r(i1001[2], i1001[3], 0, i1000, 'knifeOnDrag')
  i1000.knifeOnDragRotationOffset = new pc.Vec3( i1001[4], i1001[5], i1001[6] )
  i1000.knifeOnDragRotateDuration = i1001[7]
  i1000.knifeOnDragRotateEase = i1001[8]
  i1000.isDone = !!i1001[9]
  i1000.onProcess = !!i1001[10]
  request.r(i1001[11], i1001[12], 0, i1000, 'itemDraggable')
  request.r(i1001[13], i1001[14], 0, i1000, 'itemClickable')
  request.r(i1001[15], i1001[16], 0, i1000, 'itemStirring')
  request.r(i1001[17], i1001[18], 0, i1000, 'itemKnifeSpriteMaskCutter')
  request.r(i1001[19], i1001[20], 0, i1000, 'itemSpriteMaskPainter')
  request.r(i1001[21], i1001[22], 0, i1000, 'itemMoveToTarget')
  request.r(i1001[23], i1001[24], 0, i1000, 'animator')
  i1000.itemType = i1001[25]
  request.r(i1001[26], i1001[27], 0, i1000, 'spriteRenderer')
  i1000.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1001[28], i1000.onKnifeIn)
  i1000.heartEffectScale = i1001[29]
  i1000.breakHeartEffectScale = i1001[30]
  i1000.blinkEffectScale = i1001[31]
  i1000.mergeEffectScale = i1001[32]
  i1000.playMoveToTargetFinishSound = !!i1001[33]
  i1000.moveToTargetFinishFxType = i1001[34]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1003 = data
  i1002.ambientIntensity = i1003[0]
  i1002.reflectionIntensity = i1003[1]
  i1002.ambientMode = i1003[2]
  i1002.ambientLight = new pc.Color(i1003[3], i1003[4], i1003[5], i1003[6])
  i1002.ambientSkyColor = new pc.Color(i1003[7], i1003[8], i1003[9], i1003[10])
  i1002.ambientGroundColor = new pc.Color(i1003[11], i1003[12], i1003[13], i1003[14])
  i1002.ambientEquatorColor = new pc.Color(i1003[15], i1003[16], i1003[17], i1003[18])
  i1002.fogColor = new pc.Color(i1003[19], i1003[20], i1003[21], i1003[22])
  i1002.fogEndDistance = i1003[23]
  i1002.fogStartDistance = i1003[24]
  i1002.fogDensity = i1003[25]
  i1002.fog = !!i1003[26]
  request.r(i1003[27], i1003[28], 0, i1002, 'skybox')
  i1002.fogMode = i1003[29]
  var i1005 = i1003[30]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1005[i + 0]) );
  }
  i1002.lightmaps = i1004
  i1002.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1003[31], i1002.lightProbes)
  i1002.lightmapsMode = i1003[32]
  i1002.mixedBakeMode = i1003[33]
  i1002.environmentLightingMode = i1003[34]
  i1002.ambientProbe = new pc.SphericalHarmonicsL2(i1003[35])
  i1002.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1003[36])
  i1002.useReferenceAmbientProbe = !!i1003[37]
  request.r(i1003[38], i1003[39], 0, i1002, 'customReflection')
  request.r(i1003[40], i1003[41], 0, i1002, 'defaultReflection')
  i1002.defaultReflectionMode = i1003[42]
  i1002.defaultReflectionResolution = i1003[43]
  i1002.sunLightObjectId = i1003[44]
  i1002.pixelLightCount = i1003[45]
  i1002.defaultReflectionHDR = !!i1003[46]
  i1002.hasLightDataAsset = !!i1003[47]
  i1002.hasManualGenerate = !!i1003[48]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'lightmapColor')
  request.r(i1009[2], i1009[3], 0, i1008, 'lightmapDirection')
  request.r(i1009[4], i1009[5], 0, i1008, 'shadowMask')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1010 = root || new UnityEngine.LightProbes()
  var i1011 = data
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1021[i + 0]));
  }
  i1018.ShaderCompilationErrors = i1020
  i1018.name = i1019[1]
  i1018.guid = i1019[2]
  var i1023 = i1019[3]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1018.shaderDefinedKeywords = i1022
  var i1025 = i1019[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1025[i + 0]) );
  }
  i1018.passes = i1024
  var i1027 = i1019[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1027[i + 0]) );
  }
  i1018.usePasses = i1026
  var i1029 = i1019[6]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1029[i + 0]) );
  }
  i1018.defaultParameterValues = i1028
  request.r(i1019[7], i1019[8], 0, i1018, 'unityFallbackShader')
  i1018.readDepth = !!i1019[9]
  i1018.hasDepthOnlyPass = !!i1019[10]
  i1018.isCreatedByShaderGraph = !!i1019[11]
  i1018.disableBatching = !!i1019[12]
  i1018.compiled = !!i1019[13]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1033 = data
  i1032.shaderName = i1033[0]
  i1032.errorMessage = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1038 = root || new pc.UnityShaderPass()
  var i1039 = data
  i1038.id = i1039[0]
  i1038.subShaderIndex = i1039[1]
  i1038.name = i1039[2]
  i1038.passType = i1039[3]
  i1038.grabPassTextureName = i1039[4]
  i1038.usePass = !!i1039[5]
  i1038.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[6], i1038.zTest)
  i1038.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[7], i1038.zWrite)
  i1038.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[8], i1038.culling)
  i1038.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1039[9], i1038.blending)
  i1038.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1039[10], i1038.alphaBlending)
  i1038.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[11], i1038.colorWriteMask)
  i1038.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[12], i1038.offsetUnits)
  i1038.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[13], i1038.offsetFactor)
  i1038.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[14], i1038.stencilRef)
  i1038.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[15], i1038.stencilReadMask)
  i1038.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[16], i1038.stencilWriteMask)
  i1038.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[17], i1038.stencilOp)
  i1038.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[18], i1038.stencilOpFront)
  i1038.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[19], i1038.stencilOpBack)
  var i1041 = i1039[20]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1041[i + 0]) );
  }
  i1038.tags = i1040
  var i1043 = i1039[21]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.passDefinedKeywords = i1042
  var i1045 = i1039[22]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1045[i + 0]) );
  }
  i1038.passDefinedKeywordGroups = i1044
  var i1047 = i1039[23]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1047[i + 0]) );
  }
  i1038.variants = i1046
  var i1049 = i1039[24]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1049[i + 0]) );
  }
  i1038.excludedVariants = i1048
  i1038.hasDepthReader = !!i1039[25]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1051 = data
  i1050.val = i1051[0]
  i1050.name = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1053 = data
  i1052.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[0], i1052.src)
  i1052.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[1], i1052.dst)
  i1052.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[2], i1052.op)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1055 = data
  i1054.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.pass)
  i1054.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.fail)
  i1054.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.zFail)
  i1054.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[3], i1054.comp)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.value = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1062.keywords = i1064
  i1062.hasDiscard = !!i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1069 = data
  i1068.passId = i1069[0]
  i1068.subShaderIndex = i1069[1]
  var i1071 = i1069[2]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1068.keywords = i1070
  i1068.vertexProgram = i1069[3]
  i1068.fragmentProgram = i1069[4]
  i1068.exportedForWebGl2 = !!i1069[5]
  i1068.readDepth = !!i1069[6]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'shader')
  i1074.pass = i1075[2]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.type = i1079[1]
  i1078.value = new pc.Vec4( i1079[2], i1079[3], i1079[4], i1079[5] )
  i1078.textureValue = i1079[6]
  i1078.shaderPropertyFlag = i1079[7]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1081 = data
  i1080.name = i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'texture')
  i1080.aabb = i1081[3]
  i1080.vertices = i1081[4]
  i1080.triangles = i1081[5]
  i1080.textureRect = UnityEngine.Rect.MinMaxRect(i1081[6], i1081[7], i1081[8], i1081[9])
  i1080.packedRect = UnityEngine.Rect.MinMaxRect(i1081[10], i1081[11], i1081[12], i1081[13])
  i1080.border = new pc.Vec4( i1081[14], i1081[15], i1081[16], i1081[17] )
  i1080.transparency = i1081[18]
  i1080.bounds = i1081[19]
  i1080.pixelsPerUnit = i1081[20]
  i1080.textureWidth = i1081[21]
  i1080.textureHeight = i1081[22]
  i1080.nativeSize = new pc.Vec2( i1081[23], i1081[24] )
  i1080.pivot = new pc.Vec2( i1081[25], i1081[26] )
  i1080.textureRectOffset = new pc.Vec2( i1081[27], i1081[28] )
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1083 = data
  i1082.name = i1083[0]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.wrapMode = i1085[1]
  i1084.isLooping = !!i1085[2]
  i1084.length = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1087[i + 0]) );
  }
  i1084.curves = i1086
  var i1089 = i1085[5]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1089[i + 0]) );
  }
  i1084.events = i1088
  i1084.halfPrecision = !!i1085[6]
  i1084._frameRate = i1085[7]
  i1084.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1085[8], i1084.localBounds)
  i1084.hasMuscleCurves = !!i1085[9]
  var i1091 = i1085[10]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1084.clipMuscleConstant = i1090
  i1084.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1085[11], i1084.clipBindingConstant)
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1095 = data
  i1094.path = i1095[0]
  i1094.hash = i1095[1]
  i1094.componentType = i1095[2]
  i1094.property = i1095[3]
  i1094.keys = i1095[4]
  var i1097 = i1095[5]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1097[i + 0]) );
  }
  i1094.objectReferenceKeys = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1101 = data
  i1100.time = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, 'value')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1105 = data
  i1104.functionName = i1105[0]
  i1104.floatParameter = i1105[1]
  i1104.intParameter = i1105[2]
  i1104.stringParameter = i1105[3]
  request.r(i1105[4], i1105[5], 0, i1104, 'objectReferenceParameter')
  i1104.time = i1105[6]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1107 = data
  i1106.center = new pc.Vec3( i1107[0], i1107[1], i1107[2] )
  i1106.extends = new pc.Vec3( i1107[3], i1107[4], i1107[5] )
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.genericBindings = i1112
  var i1115 = i1111[1]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.pptrCurveMapping = i1114
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1117 = data
  i1116.name = i1117[0]
  var i1119 = i1117[1]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1119[i + 0]) );
  }
  i1116.layers = i1118
  var i1121 = i1117[2]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1121[i + 0]) );
  }
  i1116.parameters = i1120
  i1116.animationClips = i1117[3]
  i1116.avatarUnsupported = i1117[4]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.defaultWeight = i1125[1]
  i1124.blendingMode = i1125[2]
  i1124.avatarMask = i1125[3]
  i1124.syncedLayerIndex = i1125[4]
  i1124.syncedLayerAffectsTiming = !!i1125[5]
  i1124.syncedLayers = i1125[6]
  i1124.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1125[7], i1124.stateMachine)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1127 = data
  i1126.id = i1127[0]
  i1126.name = i1127[1]
  i1126.path = i1127[2]
  var i1129 = i1127[3]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1129[i + 0]) );
  }
  i1126.states = i1128
  var i1131 = i1127[4]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1131[i + 0]) );
  }
  i1126.machines = i1130
  var i1133 = i1127[5]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1133[i + 0]) );
  }
  i1126.entryStateTransitions = i1132
  var i1135 = i1127[6]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1135[i + 0]) );
  }
  i1126.exitStateTransitions = i1134
  var i1137 = i1127[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1137[i + 0]) );
  }
  i1126.anyStateTransitions = i1136
  i1126.defaultStateId = i1127[8]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1141 = data
  i1140.id = i1141[0]
  i1140.name = i1141[1]
  i1140.cycleOffset = i1141[2]
  i1140.cycleOffsetParameter = i1141[3]
  i1140.cycleOffsetParameterActive = !!i1141[4]
  i1140.mirror = !!i1141[5]
  i1140.mirrorParameter = i1141[6]
  i1140.mirrorParameterActive = !!i1141[7]
  i1140.motionId = i1141[8]
  i1140.nameHash = i1141[9]
  i1140.fullPathHash = i1141[10]
  i1140.speed = i1141[11]
  i1140.speedParameter = i1141[12]
  i1140.speedParameterActive = !!i1141[13]
  i1140.tag = i1141[14]
  i1140.tagHash = i1141[15]
  i1140.writeDefaultValues = !!i1141[16]
  var i1143 = i1141[17]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 2, i1142, '')
  }
  i1140.behaviours = i1142
  var i1145 = i1141[18]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1145[i + 0]) );
  }
  i1140.transitions = i1144
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1151 = data
  i1150.fullPath = i1151[0]
  i1150.canTransitionToSelf = !!i1151[1]
  i1150.duration = i1151[2]
  i1150.exitTime = i1151[3]
  i1150.hasExitTime = !!i1151[4]
  i1150.hasFixedDuration = !!i1151[5]
  i1150.interruptionSource = i1151[6]
  i1150.offset = i1151[7]
  i1150.orderedInterruption = !!i1151[8]
  i1150.destinationStateId = i1151[9]
  i1150.isExit = !!i1151[10]
  i1150.mute = !!i1151[11]
  i1150.solo = !!i1151[12]
  var i1153 = i1151[13]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1153[i + 0]) );
  }
  i1150.conditions = i1152
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1159 = data
  i1158.destinationStateId = i1159[0]
  i1158.isExit = !!i1159[1]
  i1158.mute = !!i1159[2]
  i1158.solo = !!i1159[3]
  var i1161 = i1159[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1161[i + 0]) );
  }
  i1158.conditions = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1165 = data
  i1164.defaultBool = !!i1165[0]
  i1164.defaultFloat = i1165[1]
  i1164.defaultInt = i1165[2]
  i1164.name = i1165[3]
  i1164.nameHash = i1165[4]
  i1164.type = i1165[5]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1169 = data
  i1168.mode = i1169[0]
  i1168.parameter = i1169[1]
  i1168.threshold = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.bytes64 = i1171[1]
  i1170.data = i1171[2]
  return i1170
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1173 = data
  i1172.normalStyle = i1173[0]
  i1172.normalSpacingOffset = i1173[1]
  i1172.boldStyle = i1173[2]
  i1172.boldSpacing = i1173[3]
  i1172.italicStyle = i1173[4]
  i1172.tabSize = i1173[5]
  request.r(i1173[6], i1173[7], 0, i1172, 'atlas')
  i1172.m_SourceFontFileGUID = i1173[8]
  i1172.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1173[9], i1172.m_CreationSettings)
  request.r(i1173[10], i1173[11], 0, i1172, 'm_SourceFontFile')
  i1172.m_SourceFontFilePath = i1173[12]
  i1172.m_AtlasPopulationMode = i1173[13]
  i1172.InternalDynamicOS = !!i1173[14]
  var i1175 = i1173[15]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.TextCore.Glyph', i1175[i + 0]));
  }
  i1172.m_GlyphTable = i1174
  var i1177 = i1173[16]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.TMP_Character', i1177[i + 0]));
  }
  i1172.m_CharacterTable = i1176
  var i1179 = i1173[17]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 2, i1178, '')
  }
  i1172.m_AtlasTextures = i1178
  i1172.m_AtlasTextureIndex = i1173[18]
  i1172.m_IsMultiAtlasTexturesEnabled = !!i1173[19]
  i1172.m_GetFontFeatures = !!i1173[20]
  i1172.m_ClearDynamicDataOnBuild = !!i1173[21]
  i1172.m_AtlasWidth = i1173[22]
  i1172.m_AtlasHeight = i1173[23]
  i1172.m_AtlasPadding = i1173[24]
  i1172.m_AtlasRenderMode = i1173[25]
  var i1181 = i1173[26]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('UnityEngine.TextCore.GlyphRect', i1181[i + 0]));
  }
  i1172.m_UsedGlyphRects = i1180
  var i1183 = i1173[27]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.GlyphRect', i1183[i + 0]));
  }
  i1172.m_FreeGlyphRects = i1182
  i1172.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1173[28], i1172.m_FontFeatureTable)
  i1172.m_ShouldReimportFontFeatures = !!i1173[29]
  var i1185 = i1173[30]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 1, i1184, '')
  }
  i1172.m_FallbackFontAssetTable = i1184
  var i1187 = i1173[31]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('TMPro.TMP_FontWeightPair', i1187[i + 0]) );
  }
  i1172.m_FontWeightTable = i1186
  var i1189 = i1173[32]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('TMPro.TMP_FontWeightPair', i1189[i + 0]) );
  }
  i1172.fontWeights = i1188
  i1172.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1173[33], i1172.m_fontInfo)
  var i1191 = i1173[34]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.TMP_Glyph', i1191[i + 0]));
  }
  i1172.m_glyphInfoList = i1190
  i1172.m_KerningTable = request.d('TMPro.KerningTable', i1173[35], i1172.m_KerningTable)
  var i1193 = i1173[36]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1172.fallbackFontAssets = i1192
  i1172.m_Version = i1173[37]
  i1172.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1173[38], i1172.m_FaceInfo)
  request.r(i1173[39], i1173[40], 0, i1172, 'm_Material')
  return i1172
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1195 = data
  i1194.sourceFontFileName = i1195[0]
  i1194.sourceFontFileGUID = i1195[1]
  i1194.faceIndex = i1195[2]
  i1194.pointSizeSamplingMode = i1195[3]
  i1194.pointSize = i1195[4]
  i1194.padding = i1195[5]
  i1194.paddingMode = i1195[6]
  i1194.packingMode = i1195[7]
  i1194.atlasWidth = i1195[8]
  i1194.atlasHeight = i1195[9]
  i1194.characterSetSelectionMode = i1195[10]
  i1194.characterSequence = i1195[11]
  i1194.referencedFontAssetGUID = i1195[12]
  i1194.referencedTextAssetGUID = i1195[13]
  i1194.fontStyle = i1195[14]
  i1194.fontStyleModifier = i1195[15]
  i1194.renderMode = i1195[16]
  i1194.includeFontFeatures = !!i1195[17]
  return i1194
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1199 = data
  i1198.m_Index = i1199[0]
  i1198.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1199[1], i1198.m_Metrics)
  i1198.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1199[2], i1198.m_GlyphRect)
  i1198.m_Scale = i1199[3]
  i1198.m_AtlasIndex = i1199[4]
  i1198.m_ClassDefinitionType = i1199[5]
  return i1198
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1201 = data
  i1200.m_Width = i1201[0]
  i1200.m_Height = i1201[1]
  i1200.m_HorizontalBearingX = i1201[2]
  i1200.m_HorizontalBearingY = i1201[3]
  i1200.m_HorizontalAdvance = i1201[4]
  return i1200
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1203 = data
  i1202.m_X = i1203[0]
  i1202.m_Y = i1203[1]
  i1202.m_Width = i1203[2]
  i1202.m_Height = i1203[3]
  return i1202
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_Character' )
  var i1207 = data
  i1206.m_ElementType = i1207[0]
  i1206.m_Unicode = i1207[1]
  i1206.m_GlyphIndex = i1207[2]
  i1206.m_Scale = i1207[3]
  return i1206
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.MultipleSubstitutionRecord', i1215[i + 0]));
  }
  i1212.m_MultipleSubstitutionRecords = i1214
  var i1217 = i1213[1]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.LigatureSubstitutionRecord', i1217[i + 0]));
  }
  i1212.m_LigatureSubstitutionRecords = i1216
  var i1219 = i1213[2]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1219[i + 0]));
  }
  i1212.m_GlyphPairAdjustmentRecords = i1218
  var i1221 = i1213[3]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1221[i + 0]));
  }
  i1212.m_MarkToBaseAdjustmentRecords = i1220
  var i1223 = i1213[4]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1223[i + 0]));
  }
  i1212.m_MarkToMarkAdjustmentRecords = i1222
  return i1212
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1227 = data
  i1226.m_TargetGlyphID = i1227[0]
  i1226.m_SubstituteGlyphIDs = i1227[1]
  return i1226
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1231 = data
  i1230.m_ComponentGlyphIDs = i1231[0]
  i1230.m_LigatureGlyphID = i1231[1]
  return i1230
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1235 = data
  i1234.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1235[0], i1234.m_FirstAdjustmentRecord)
  i1234.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1235[1], i1234.m_SecondAdjustmentRecord)
  i1234.m_FeatureLookupFlags = i1235[2]
  return i1234
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1239 = data
  i1238.m_BaseGlyphID = i1239[0]
  i1238.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1239[1], i1238.m_BaseGlyphAnchorPoint)
  i1238.m_MarkGlyphID = i1239[2]
  i1238.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1239[3], i1238.m_MarkPositionAdjustment)
  return i1238
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1243 = data
  i1242.m_BaseMarkGlyphID = i1243[0]
  i1242.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1243[1], i1242.m_BaseMarkGlyphAnchorPoint)
  i1242.m_CombiningMarkGlyphID = i1243[2]
  i1242.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1243[3], i1242.m_CombiningMarkPositionAdjustment)
  return i1242
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'regularTypeface')
  request.r(i1249[2], i1249[3], 0, i1248, 'italicTypeface')
  return i1248
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1251 = data
  i1250.Name = i1251[0]
  i1250.PointSize = i1251[1]
  i1250.Scale = i1251[2]
  i1250.CharacterCount = i1251[3]
  i1250.LineHeight = i1251[4]
  i1250.Baseline = i1251[5]
  i1250.Ascender = i1251[6]
  i1250.CapHeight = i1251[7]
  i1250.Descender = i1251[8]
  i1250.CenterLine = i1251[9]
  i1250.SuperscriptOffset = i1251[10]
  i1250.SubscriptOffset = i1251[11]
  i1250.SubSize = i1251[12]
  i1250.Underline = i1251[13]
  i1250.UnderlineThickness = i1251[14]
  i1250.strikethrough = i1251[15]
  i1250.strikethroughThickness = i1251[16]
  i1250.TabWidth = i1251[17]
  i1250.Padding = i1251[18]
  i1250.AtlasWidth = i1251[19]
  i1250.AtlasHeight = i1251[20]
  return i1250
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1255 = data
  i1254.id = i1255[0]
  i1254.x = i1255[1]
  i1254.y = i1255[2]
  i1254.width = i1255[3]
  i1254.height = i1255[4]
  i1254.xOffset = i1255[5]
  i1254.yOffset = i1255[6]
  i1254.xAdvance = i1255[7]
  i1254.scale = i1255[8]
  return i1254
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.KerningTable' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.KerningPair', i1259[i + 0]));
  }
  i1256.kerningPairs = i1258
  return i1256
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.KerningPair' )
  var i1263 = data
  i1262.xOffset = i1263[0]
  i1262.m_FirstGlyph = i1263[1]
  i1262.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1263[2], i1262.m_FirstGlyphAdjustments)
  i1262.m_SecondGlyph = i1263[3]
  i1262.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1263[4], i1262.m_SecondGlyphAdjustments)
  i1262.m_IgnoreSpacingAdjustments = !!i1263[5]
  return i1262
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1265 = data
  i1264.m_FaceIndex = i1265[0]
  i1264.m_FamilyName = i1265[1]
  i1264.m_StyleName = i1265[2]
  i1264.m_PointSize = i1265[3]
  i1264.m_Scale = i1265[4]
  i1264.m_UnitsPerEM = i1265[5]
  i1264.m_LineHeight = i1265[6]
  i1264.m_AscentLine = i1265[7]
  i1264.m_CapLine = i1265[8]
  i1264.m_MeanLine = i1265[9]
  i1264.m_Baseline = i1265[10]
  i1264.m_DescentLine = i1265[11]
  i1264.m_SuperscriptOffset = i1265[12]
  i1264.m_SuperscriptSize = i1265[13]
  i1264.m_SubscriptOffset = i1265[14]
  i1264.m_SubscriptSize = i1265[15]
  i1264.m_UnderlineOffset = i1265[16]
  i1264.m_UnderlineThickness = i1265[17]
  i1264.m_StrikethroughOffset = i1265[18]
  i1264.m_StrikethroughThickness = i1265[19]
  i1264.m_TabWidth = i1265[20]
  return i1264
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1267 = data
  i1266.useSafeMode = !!i1267[0]
  i1266.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1267[1], i1266.safeModeOptions)
  i1266.timeScale = i1267[2]
  i1266.unscaledTimeScale = i1267[3]
  i1266.useSmoothDeltaTime = !!i1267[4]
  i1266.maxSmoothUnscaledTime = i1267[5]
  i1266.rewindCallbackMode = i1267[6]
  i1266.showUnityEditorReport = !!i1267[7]
  i1266.logBehaviour = i1267[8]
  i1266.drawGizmos = !!i1267[9]
  i1266.defaultRecyclable = !!i1267[10]
  i1266.defaultAutoPlay = i1267[11]
  i1266.defaultUpdateType = i1267[12]
  i1266.defaultTimeScaleIndependent = !!i1267[13]
  i1266.defaultEaseType = i1267[14]
  i1266.defaultEaseOvershootOrAmplitude = i1267[15]
  i1266.defaultEasePeriod = i1267[16]
  i1266.defaultAutoKill = !!i1267[17]
  i1266.defaultLoopType = i1267[18]
  i1266.debugMode = !!i1267[19]
  i1266.debugStoreTargetId = !!i1267[20]
  i1266.showPreviewPanel = !!i1267[21]
  i1266.storeSettingsLocation = i1267[22]
  i1266.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1267[23], i1266.modules)
  i1266.createASMDEF = !!i1267[24]
  i1266.showPlayingTweens = !!i1267[25]
  i1266.showPausedTweens = !!i1267[26]
  return i1266
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1268 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1269 = data
  i1268.logBehaviour = i1269[0]
  i1268.nestedTweenFailureBehaviour = i1269[1]
  return i1268
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1270 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1271 = data
  i1270.showPanel = !!i1271[0]
  i1270.audioEnabled = !!i1271[1]
  i1270.physicsEnabled = !!i1271[2]
  i1270.physics2DEnabled = !!i1271[3]
  i1270.spriteEnabled = !!i1271[4]
  i1270.uiEnabled = !!i1271[5]
  i1270.uiToolkitEnabled = !!i1271[6]
  i1270.textMeshProEnabled = !!i1271[7]
  i1270.tk2DEnabled = !!i1271[8]
  i1270.deAudioEnabled = !!i1271[9]
  i1270.deUnityExtendedEnabled = !!i1271[10]
  i1270.epoOutlineEnabled = !!i1271[11]
  return i1270
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Settings' )
  var i1273 = data
  i1272.assetVersion = i1273[0]
  i1272.m_TextWrappingMode = i1273[1]
  i1272.m_enableKerning = !!i1273[2]
  var i1275 = i1273[3]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(i1275[i + 0]);
  }
  i1272.m_ActiveFontFeatures = i1274
  i1272.m_enableExtraPadding = !!i1273[4]
  i1272.m_enableTintAllSprites = !!i1273[5]
  i1272.m_enableParseEscapeCharacters = !!i1273[6]
  i1272.m_EnableRaycastTarget = !!i1273[7]
  i1272.m_GetFontFeaturesAtRuntime = !!i1273[8]
  i1272.m_missingGlyphCharacter = i1273[9]
  i1272.m_ClearDynamicDataOnBuild = !!i1273[10]
  i1272.m_warningsDisabled = !!i1273[11]
  request.r(i1273[12], i1273[13], 0, i1272, 'm_defaultFontAsset')
  i1272.m_defaultFontAssetPath = i1273[14]
  i1272.m_defaultFontSize = i1273[15]
  i1272.m_defaultAutoSizeMinRatio = i1273[16]
  i1272.m_defaultAutoSizeMaxRatio = i1273[17]
  i1272.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1273[18], i1273[19] )
  i1272.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1273[20], i1273[21] )
  i1272.m_autoSizeTextContainer = !!i1273[22]
  i1272.m_IsTextObjectScaleStatic = !!i1273[23]
  var i1277 = i1273[24]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 1, i1276, '')
  }
  i1272.m_fallbackFontAssets = i1276
  i1272.m_matchMaterialPreset = !!i1273[25]
  i1272.m_HideSubTextObjects = !!i1273[26]
  request.r(i1273[27], i1273[28], 0, i1272, 'm_defaultSpriteAsset')
  i1272.m_defaultSpriteAssetPath = i1273[29]
  i1272.m_enableEmojiSupport = !!i1273[30]
  i1272.m_MissingCharacterSpriteUnicode = i1273[31]
  var i1279 = i1273[32]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1272.m_EmojiFallbackTextAssets = i1278
  i1272.m_defaultColorGradientPresetsPath = i1273[33]
  request.r(i1273[34], i1273[35], 0, i1272, 'm_defaultStyleSheet')
  i1272.m_StyleSheetsResourcePath = i1273[36]
  request.r(i1273[37], i1273[38], 0, i1272, 'm_leadingCharacters')
  request.r(i1273[39], i1273[40], 0, i1272, 'm_followingCharacters')
  i1272.m_UseModernHangulLineBreakingRules = !!i1273[41]
  return i1272
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'spriteSheet')
  var i1285 = i1283[2]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Sprite', i1285[i + 0]));
  }
  i1282.spriteInfoList = i1284
  var i1287 = i1283[3]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1282.fallbackSpriteAssets = i1286
  var i1289 = i1283[4]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_SpriteCharacter', i1289[i + 0]));
  }
  i1282.m_SpriteCharacterTable = i1288
  var i1291 = i1283[5]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.TMP_SpriteGlyph', i1291[i + 0]));
  }
  i1282.m_GlyphTable = i1290
  i1282.m_Version = i1283[6]
  i1282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1283[7], i1282.m_FaceInfo)
  request.r(i1283[8], i1283[9], 0, i1282, 'm_Material')
  return i1282
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.hashCode = i1295[1]
  i1294.unicode = i1295[2]
  i1294.pivot = new pc.Vec2( i1295[3], i1295[4] )
  request.r(i1295[5], i1295[6], 0, i1294, 'sprite')
  i1294.id = i1295[7]
  i1294.x = i1295[8]
  i1294.y = i1295[9]
  i1294.width = i1295[10]
  i1294.height = i1295[11]
  i1294.xOffset = i1295[12]
  i1294.yOffset = i1295[13]
  i1294.xAdvance = i1295[14]
  i1294.scale = i1295[15]
  return i1294
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1301 = data
  i1300.m_Name = i1301[0]
  i1300.m_ElementType = i1301[1]
  i1300.m_Unicode = i1301[2]
  i1300.m_GlyphIndex = i1301[3]
  i1300.m_Scale = i1301[4]
  return i1300
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'sprite')
  i1304.m_Index = i1305[2]
  i1304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1305[3], i1304.m_Metrics)
  i1304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1305[4], i1304.m_GlyphRect)
  i1304.m_Scale = i1305[5]
  i1304.m_AtlasIndex = i1305[6]
  i1304.m_ClassDefinitionType = i1305[7]
  return i1304
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Style', i1309[i + 0]));
  }
  i1306.m_StyleList = i1308
  return i1306
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Style' )
  var i1313 = data
  i1312.m_Name = i1313[0]
  i1312.m_HashCode = i1313[1]
  i1312.m_OpeningDefinition = i1313[2]
  i1312.m_ClosingDefinition = i1313[3]
  i1312.m_OpeningTagArray = i1313[4]
  i1312.m_ClosingTagArray = i1313[5]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1317[i + 0]) );
  }
  i1314.files = i1316
  i1314.componentToPrefabIds = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1321 = data
  i1320.path = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'unityObject')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1325[i + 0]) );
  }
  i1322.scriptsExecutionOrder = i1324
  var i1327 = i1323[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1327[i + 0]) );
  }
  i1322.sortingLayers = i1326
  var i1329 = i1323[2]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1329[i + 0]) );
  }
  i1322.cullingLayers = i1328
  i1322.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1323[3], i1322.timeSettings)
  i1322.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1323[4], i1322.physicsSettings)
  i1322.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1323[5], i1322.physics2DSettings)
  i1322.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1323[6], i1322.qualitySettings)
  i1322.enableRealtimeShadows = !!i1323[7]
  i1322.enableAutoInstancing = !!i1323[8]
  i1322.enableStaticBatching = !!i1323[9]
  i1322.enableDynamicBatching = !!i1323[10]
  i1322.lightmapEncodingQuality = i1323[11]
  i1322.desiredColorSpace = i1323[12]
  var i1331 = i1323[13]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( i1331[i + 0] );
  }
  i1322.allTags = i1330
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = i1335[1]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  i1338.value = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1345 = data
  i1344.fixedDeltaTime = i1345[0]
  i1344.maximumDeltaTime = i1345[1]
  i1344.timeScale = i1345[2]
  i1344.maximumParticleTimestep = i1345[3]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1347 = data
  i1346.gravity = new pc.Vec3( i1347[0], i1347[1], i1347[2] )
  i1346.defaultSolverIterations = i1347[3]
  i1346.bounceThreshold = i1347[4]
  i1346.autoSyncTransforms = !!i1347[5]
  i1346.autoSimulation = !!i1347[6]
  var i1349 = i1347[7]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1349[i + 0]) );
  }
  i1346.collisionMatrix = i1348
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1353 = data
  i1352.enabled = !!i1353[0]
  i1352.layerId = i1353[1]
  i1352.otherLayerId = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'material')
  i1354.gravity = new pc.Vec2( i1355[2], i1355[3] )
  i1354.positionIterations = i1355[4]
  i1354.velocityIterations = i1355[5]
  i1354.velocityThreshold = i1355[6]
  i1354.maxLinearCorrection = i1355[7]
  i1354.maxAngularCorrection = i1355[8]
  i1354.maxTranslationSpeed = i1355[9]
  i1354.maxRotationSpeed = i1355[10]
  i1354.baumgarteScale = i1355[11]
  i1354.baumgarteTOIScale = i1355[12]
  i1354.timeToSleep = i1355[13]
  i1354.linearSleepTolerance = i1355[14]
  i1354.angularSleepTolerance = i1355[15]
  i1354.defaultContactOffset = i1355[16]
  i1354.autoSimulation = !!i1355[17]
  i1354.queriesHitTriggers = !!i1355[18]
  i1354.queriesStartInColliders = !!i1355[19]
  i1354.callbacksOnDisable = !!i1355[20]
  i1354.reuseCollisionCallbacks = !!i1355[21]
  i1354.autoSyncTransforms = !!i1355[22]
  var i1357 = i1355[23]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1365[i + 0]) );
  }
  i1362.qualityLevels = i1364
  var i1367 = i1363[1]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( i1367[i + 0] );
  }
  i1362.names = i1366
  i1362.shadows = i1363[2]
  i1362.anisotropicFiltering = i1363[3]
  i1362.antiAliasing = i1363[4]
  i1362.lodBias = i1363[5]
  i1362.shadowCascades = i1363[6]
  i1362.shadowDistance = i1363[7]
  i1362.shadowmaskMode = i1363[8]
  i1362.shadowProjection = i1363[9]
  i1362.shadowResolution = i1363[10]
  i1362.softParticles = !!i1363[11]
  i1362.softVegetation = !!i1363[12]
  i1362.activeColorSpace = i1363[13]
  i1362.desiredColorSpace = i1363[14]
  i1362.masterTextureLimit = i1363[15]
  i1362.maxQueuedFrames = i1363[16]
  i1362.particleRaycastBudget = i1363[17]
  i1362.pixelLightCount = i1363[18]
  i1362.realtimeReflectionProbes = !!i1363[19]
  i1362.shadowCascade2Split = i1363[20]
  i1362.shadowCascade4Split = new pc.Vec3( i1363[21], i1363[22], i1363[23] )
  i1362.streamingMipmapsActive = !!i1363[24]
  i1362.vSyncCount = i1363[25]
  i1362.asyncUploadBufferSize = i1363[26]
  i1362.asyncUploadTimeSlice = i1363[27]
  i1362.billboardsFaceCameraPosition = !!i1363[28]
  i1362.shadowNearPlaneOffset = i1363[29]
  i1362.streamingMipmapsMemoryBudget = i1363[30]
  i1362.maximumLODLevel = i1363[31]
  i1362.streamingMipmapsAddAllCameras = !!i1363[32]
  i1362.streamingMipmapsMaxLevelReduction = i1363[33]
  i1362.streamingMipmapsRenderersPerFrame = i1363[34]
  i1362.resolutionScalingFixedDPIFactor = i1363[35]
  i1362.streamingMipmapsMaxFileIORequests = i1363[36]
  i1362.currentQualityLevel = i1363[37]
  return i1362
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1371 = data
  i1370.m_GlyphIndex = i1371[0]
  i1370.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1371[1], i1370.m_GlyphValueRecord)
  return i1370
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1373 = data
  i1372.m_XCoordinate = i1373[0]
  i1372.m_YCoordinate = i1373[1]
  return i1372
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1375 = data
  i1374.m_XPositionAdjustment = i1375[0]
  i1374.m_YPositionAdjustment = i1375[1]
  return i1374
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1377 = data
  i1376.xPlacement = i1377[0]
  i1376.yPlacement = i1377[1]
  i1376.xAdvance = i1377[2]
  i1376.yAdvance = i1377[3]
  return i1376
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1379 = data
  i1378.m_XPlacement = i1379[0]
  i1378.m_YPlacement = i1379[1]
  i1378.m_XAdvance = i1379[2]
  i1378.m_YAdvance = i1379[3]
  return i1378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[22],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[22],"98":[99],"100":[101],"102":[101],"21":[14],"58":[103],"52":[103],"104":[103],"105":[103],"106":[103],"107":[14],"108":[17,14],"109":[99],"110":[17,14],"111":[25,99],"112":[99],"113":[99,114],"115":[77],"116":[84],"117":[118],"119":[120],"121":[5],"122":[22],"123":[124],"125":[48],"126":[21],"127":[14],"128":[99,14],"27":[14,17],"129":[14],"130":[17,14],"131":[99],"132":[17,14],"133":[14],"134":[135],"136":[135],"137":[135],"138":[14],"139":[14],"24":[21],"16":[17,14],"140":[14],"23":[21],"141":[14],"142":[14],"143":[14],"144":[14],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[17,14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[17,14],"156":[14],"157":[48],"158":[48],"49":[48],"159":[48],"160":[22],"161":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","Knife","InWaterItem","Item","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Sink","ItemDraggable","ItemMoveToTarget","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Ply_BobEffect","Ply_TimerEvent","ItemClickable","CuttingBoard","UnityEngine.CapsuleCollider","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "13.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v58_StuffedPotatoCasserole_NoPhase2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1768";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4898";

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

Deserializers.buildID = "25905ce0-6d96-430b-889d-6f4a5a35e244";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

