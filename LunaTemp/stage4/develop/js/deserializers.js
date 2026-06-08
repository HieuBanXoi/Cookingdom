var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointSpring' )
  var i755 = data
  i754.spring = i755[0]
  i754.damper = i755[1]
  i754.targetPosition = i755[2]
  return i754
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointMotor' )
  var i757 = data
  i756.m_TargetVelocity = i757[0]
  i756.m_Force = i757[1]
  i756.m_FreeSpin = i757[2]
  return i756
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointLimits' )
  var i759 = data
  i758.m_Min = i759[0]
  i758.m_Max = i759[1]
  i758.m_Bounciness = i759[2]
  i758.m_BounceMinVelocity = i759[3]
  i758.m_ContactDistance = i759[4]
  i758.minBounce = i759[5]
  i758.maxBounce = i759[6]
  return i758
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointDrive' )
  var i761 = data
  i760.m_PositionSpring = i761[0]
  i760.m_PositionDamper = i761[1]
  i760.m_MaximumForce = i761[2]
  i760.m_UseAcceleration = i761[3]
  return i760
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i763 = data
  i762.m_Spring = i763[0]
  i762.m_Damper = i763[1]
  return i762
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i765 = data
  i764.m_Limit = i765[0]
  i764.m_Bounciness = i765[1]
  i764.m_ContactDistance = i765[2]
  return i764
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i767 = data
  i766.m_ExtremumSlip = i767[0]
  i766.m_ExtremumValue = i767[1]
  i766.m_AsymptoteSlip = i767[2]
  i766.m_AsymptoteValue = i767[3]
  i766.m_Stiffness = i767[4]
  return i766
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i769 = data
  i768.m_LowerAngle = i769[0]
  i768.m_UpperAngle = i769[1]
  return i768
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i771 = data
  i770.m_MotorSpeed = i771[0]
  i770.m_MaximumMotorTorque = i771[1]
  return i770
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i773 = data
  i772.m_DampingRatio = i773[0]
  i772.m_Frequency = i773[1]
  i772.m_Angle = i773[2]
  return i772
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i775 = data
  i774.m_LowerTranslation = i775[0]
  i774.m_UpperTranslation = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i776 = root || new pc.UnityMaterial()
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'shader')
  i776.renderQueue = i777[3]
  i776.enableInstancing = !!i777[4]
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i779[i + 0]) );
  }
  i776.floatParameters = i778
  var i781 = i777[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i781[i + 0]) );
  }
  i776.colorParameters = i780
  var i783 = i777[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i783[i + 0]) );
  }
  i776.vectorParameters = i782
  var i785 = i777[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i785[i + 0]) );
  }
  i776.textureParameters = i784
  var i787 = i777[9]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i787[i + 0]) );
  }
  i776.materialFlags = i786
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i791 = data
  i790.name = i791[0]
  i790.value = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i795 = data
  i794.name = i795[0]
  i794.value = new pc.Color(i795[1], i795[2], i795[3], i795[4])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i799 = data
  i798.name = i799[0]
  i798.value = new pc.Vec4( i799[1], i799[2], i799[3], i799[4] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i803 = data
  i802.name = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'value')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i807 = data
  i806.name = i807[0]
  i806.enabled = !!i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i809 = data
  i808.name = i809[0]
  i808.width = i809[1]
  i808.height = i809[2]
  i808.mipmapCount = i809[3]
  i808.anisoLevel = i809[4]
  i808.filterMode = i809[5]
  i808.hdr = !!i809[6]
  i808.format = i809[7]
  i808.wrapMode = i809[8]
  i808.alphaIsTransparency = !!i809[9]
  i808.alphaSource = i809[10]
  i808.graphicsFormat = i809[11]
  i808.sRGBTexture = !!i809[12]
  i808.desiredColorSpace = i809[13]
  i808.wrapU = i809[14]
  i808.wrapV = i809[15]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i811 = data
  i810.position = new pc.Vec3( i811[0], i811[1], i811[2] )
  i810.scale = new pc.Vec3( i811[3], i811[4], i811[5] )
  i810.rotation = new pc.Quat(i811[6], i811[7], i811[8], i811[9])
  return i810
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i812 = root || request.c( 'HeartEffect' )
  var i813 = data
  i812.defaultLifeTime = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'tf')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i815 = data
  i814.color = new pc.Color(i815[0], i815[1], i815[2], i815[3])
  request.r(i815[4], i815[5], 0, i814, 'sprite')
  i814.flipX = !!i815[6]
  i814.flipY = !!i815[7]
  i814.drawMode = i815[8]
  i814.size = new pc.Vec2( i815[9], i815[10] )
  i814.tileMode = i815[11]
  i814.adaptiveModeThreshold = i815[12]
  i814.maskInteraction = i815[13]
  i814.spriteSortPoint = i815[14]
  i814.enabled = !!i815[15]
  request.r(i815[16], i815[17], 0, i814, 'sharedMaterial')
  var i817 = i815[18]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[19]
  i814.shadowCastingMode = i815[20]
  i814.sortingLayerID = i815[21]
  i814.sortingOrder = i815[22]
  i814.lightmapIndex = i815[23]
  i814.lightmapSceneIndex = i815[24]
  i814.lightmapScaleOffset = new pc.Vec4( i815[25], i815[26], i815[27], i815[28] )
  i814.lightProbeUsage = i815[29]
  i814.reflectionProbeUsage = i815[30]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tagId = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i822 = root || request.c( 'HeartBreakEffect' )
  var i823 = data
  i822.defaultLifeTime = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'tf')
  return i822
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i824 = root || request.c( 'BlinkEffect' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'tf')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'mesh')
  i826.meshCount = i827[2]
  i826.activeVertexStreamsCount = i827[3]
  i826.alignment = i827[4]
  i826.renderMode = i827[5]
  i826.sortMode = i827[6]
  i826.lengthScale = i827[7]
  i826.velocityScale = i827[8]
  i826.cameraVelocityScale = i827[9]
  i826.normalDirection = i827[10]
  i826.sortingFudge = i827[11]
  i826.minParticleSize = i827[12]
  i826.maxParticleSize = i827[13]
  i826.pivot = new pc.Vec3( i827[14], i827[15], i827[16] )
  request.r(i827[17], i827[18], 0, i826, 'trailMaterial')
  i826.applyActiveColorSpace = !!i827[19]
  i826.enabled = !!i827[20]
  request.r(i827[21], i827[22], 0, i826, 'sharedMaterial')
  var i829 = i827[23]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[24]
  i826.shadowCastingMode = i827[25]
  i826.sortingLayerID = i827[26]
  i826.sortingOrder = i827[27]
  i826.lightmapIndex = i827[28]
  i826.lightmapSceneIndex = i827[29]
  i826.lightmapScaleOffset = new pc.Vec4( i827[30], i827[31], i827[32], i827[33] )
  i826.lightProbeUsage = i827[34]
  i826.reflectionProbeUsage = i827[35]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i831 = data
  i830.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i831[0], i830.main)
  i830.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i831[1], i830.colorBySpeed)
  i830.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i831[2], i830.colorOverLifetime)
  i830.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i831[3], i830.emission)
  i830.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i831[4], i830.rotationBySpeed)
  i830.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i831[5], i830.rotationOverLifetime)
  i830.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i831[6], i830.shape)
  i830.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i831[7], i830.sizeBySpeed)
  i830.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i831[8], i830.sizeOverLifetime)
  i830.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i831[9], i830.textureSheetAnimation)
  i830.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i831[10], i830.velocityOverLifetime)
  i830.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i831[11], i830.noise)
  i830.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i831[12], i830.inheritVelocity)
  i830.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i831[13], i830.forceOverLifetime)
  i830.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i831[14], i830.limitVelocityOverLifetime)
  i830.useAutoRandomSeed = !!i831[15]
  i830.randomSeed = i831[16]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemMain()
  var i833 = data
  i832.duration = i833[0]
  i832.loop = !!i833[1]
  i832.prewarm = !!i833[2]
  i832.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.startDelay)
  i832.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[4], i832.startLifetime)
  i832.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[5], i832.startSpeed)
  i832.startSize3D = !!i833[6]
  i832.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[7], i832.startSizeX)
  i832.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[8], i832.startSizeY)
  i832.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[9], i832.startSizeZ)
  i832.startRotation3D = !!i833[10]
  i832.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[11], i832.startRotationX)
  i832.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[12], i832.startRotationY)
  i832.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[13], i832.startRotationZ)
  i832.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i833[14], i832.startColor)
  i832.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[15], i832.gravityModifier)
  i832.simulationSpace = i833[16]
  request.r(i833[17], i833[18], 0, i832, 'customSimulationSpace')
  i832.simulationSpeed = i833[19]
  i832.useUnscaledTime = !!i833[20]
  i832.scalingMode = i833[21]
  i832.playOnAwake = !!i833[22]
  i832.maxParticles = i833[23]
  i832.emitterVelocityMode = i833[24]
  i832.stopAction = i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i834 = root || new pc.MinMaxCurve()
  var i835 = data
  i834.mode = i835[0]
  i834.curveMin = new pc.AnimationCurve( { keys_flow: i835[1] } )
  i834.curveMax = new pc.AnimationCurve( { keys_flow: i835[2] } )
  i834.curveMultiplier = i835[3]
  i834.constantMin = i835[4]
  i834.constantMax = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i836 = root || new pc.MinMaxGradient()
  var i837 = data
  i836.mode = i837[0]
  i836.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i837[1], i836.gradientMin)
  i836.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i837[2], i836.gradientMax)
  i836.colorMin = new pc.Color(i837[3], i837[4], i837[5], i837[6])
  i836.colorMax = new pc.Color(i837[7], i837[8], i837[9], i837[10])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i839 = data
  i838.mode = i839[0]
  var i841 = i839[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i841[i + 0]) );
  }
  i838.colorKeys = i840
  var i843 = i839[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i843[i + 0]) );
  }
  i838.alphaKeys = i842
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemColorBySpeed()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i845[1], i844.color)
  i844.range = new pc.Vec2( i845[2], i845[3] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i849 = data
  i848.color = new pc.Color(i849[0], i849[1], i849[2], i849[3])
  i848.time = i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i853 = data
  i852.alpha = i853[0]
  i852.time = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemColorOverLifetime()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i855[1], i854.color)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemEmitter()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[1], i856.rateOverTime)
  i856.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.rateOverDistance)
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i859[i + 0]) );
  }
  i856.bursts = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemBurst()
  var i863 = data
  i862.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[0], i862.count)
  i862.cycleCount = i863[1]
  i862.minCount = i863[2]
  i862.maxCount = i863[3]
  i862.repeatInterval = i863[4]
  i862.time = i863[5]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemRotationBySpeed()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.x)
  i864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.y)
  i864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[3], i864.z)
  i864.separateAxes = !!i865[4]
  i864.range = new pc.Vec2( i865[5], i865[6] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemRotationOverLifetime()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[1], i866.x)
  i866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[2], i866.y)
  i866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[3], i866.z)
  i866.separateAxes = !!i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemShape()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.shapeType = i869[1]
  i868.randomDirectionAmount = i869[2]
  i868.sphericalDirectionAmount = i869[3]
  i868.randomPositionAmount = i869[4]
  i868.alignToDirection = !!i869[5]
  i868.radius = i869[6]
  i868.radiusMode = i869[7]
  i868.radiusSpread = i869[8]
  i868.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[9], i868.radiusSpeed)
  i868.radiusThickness = i869[10]
  i868.angle = i869[11]
  i868.length = i869[12]
  i868.boxThickness = new pc.Vec3( i869[13], i869[14], i869[15] )
  i868.meshShapeType = i869[16]
  request.r(i869[17], i869[18], 0, i868, 'mesh')
  request.r(i869[19], i869[20], 0, i868, 'meshRenderer')
  request.r(i869[21], i869[22], 0, i868, 'skinnedMeshRenderer')
  i868.useMeshMaterialIndex = !!i869[23]
  i868.meshMaterialIndex = i869[24]
  i868.useMeshColors = !!i869[25]
  i868.normalOffset = i869[26]
  i868.arc = i869[27]
  i868.arcMode = i869[28]
  i868.arcSpread = i869[29]
  i868.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[30], i868.arcSpeed)
  i868.donutRadius = i869[31]
  i868.position = new pc.Vec3( i869[32], i869[33], i869[34] )
  i868.rotation = new pc.Vec3( i869[35], i869[36], i869[37] )
  i868.scale = new pc.Vec3( i869[38], i869[39], i869[40] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemSizeBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[1], i870.x)
  i870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.y)
  i870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.z)
  i870.separateAxes = !!i871[4]
  i870.range = new pc.Vec2( i871[5], i871[6] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemSizeOverLifetime()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[1], i872.x)
  i872.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[2], i872.y)
  i872.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[3], i872.z)
  i872.separateAxes = !!i873[4]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.mode = i875[1]
  i874.animation = i875[2]
  i874.numTilesX = i875[3]
  i874.numTilesY = i875[4]
  i874.useRandomRow = !!i875[5]
  i874.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[6], i874.frameOverTime)
  i874.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[7], i874.startFrame)
  i874.cycleCount = i875[8]
  i874.rowIndex = i875[9]
  i874.flipU = i875[10]
  i874.flipV = i875[11]
  i874.spriteCount = i875[12]
  var i877 = i875[13]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.sprites = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[4], i880.radial)
  i880.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[5], i880.speedModifier)
  i880.space = i881[6]
  i880.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[7], i880.orbitalX)
  i880.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[8], i880.orbitalY)
  i880.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[9], i880.orbitalZ)
  i880.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[10], i880.orbitalOffsetX)
  i880.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[11], i880.orbitalOffsetY)
  i880.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[12], i880.orbitalOffsetZ)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemNoise()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.separateAxes = !!i883[1]
  i882.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.strengthX)
  i882.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.strengthY)
  i882.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[4], i882.strengthZ)
  i882.frequency = i883[5]
  i882.damping = !!i883[6]
  i882.octaveCount = i883[7]
  i882.octaveMultiplier = i883[8]
  i882.octaveScale = i883[9]
  i882.quality = i883[10]
  i882.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[11], i882.scrollSpeed)
  i882.scrollSpeedMultiplier = i883[12]
  i882.remapEnabled = !!i883[13]
  i882.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[14], i882.remapX)
  i882.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[15], i882.remapY)
  i882.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[16], i882.remapZ)
  i882.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[17], i882.positionAmount)
  i882.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[18], i882.rotationAmount)
  i882.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[19], i882.sizeAmount)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemInheritVelocity()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.mode = i885[1]
  i884.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.curve)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemForceOverLifetime()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.space = i887[4]
  i886.randomized = !!i887[5]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.limit)
  i888.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.limitX)
  i888.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.limitY)
  i888.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[4], i888.limitZ)
  i888.dampen = i889[5]
  i888.separateAxes = !!i889[6]
  i888.space = i889[7]
  i888.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[8], i888.drag)
  i888.multiplyDragByParticleSize = !!i889[9]
  i888.multiplyDragByParticleVelocity = !!i889[10]
  return i888
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i890 = root || request.c( 'StarExploreFX' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'tf')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i893 = data
  i892.name = i893[0]
  i892.halfPrecision = !!i893[1]
  i892.useSimplification = !!i893[2]
  i892.useUInt32IndexFormat = !!i893[3]
  i892.vertexCount = i893[4]
  i892.aabb = i893[5]
  var i895 = i893[6]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( !!i895[i + 0] );
  }
  i892.streams = i894
  i892.vertices = i893[7]
  var i897 = i893[8]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i897[i + 0]) );
  }
  i892.subMeshes = i896
  var i899 = i893[9]
  var i898 = []
  for(var i = 0; i < i899.length; i += 16) {
    i898.push( new pc.Mat4().setData(i899[i + 0], i899[i + 1], i899[i + 2], i899[i + 3],  i899[i + 4], i899[i + 5], i899[i + 6], i899[i + 7],  i899[i + 8], i899[i + 9], i899[i + 10], i899[i + 11],  i899[i + 12], i899[i + 13], i899[i + 14], i899[i + 15]) );
  }
  i892.bindposes = i898
  var i901 = i893[10]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i901[i + 0]) );
  }
  i892.blendShapes = i900
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i907 = data
  i906.triangles = i907[0]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i913 = data
  i912.name = i913[0]
  var i915 = i913[1]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i915[i + 0]) );
  }
  i912.frames = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i917 = data
  i916.name = i917[0]
  i916.index = i917[1]
  i916.startup = !!i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i919 = data
  i918.pivot = new pc.Vec2( i919[0], i919[1] )
  i918.anchorMin = new pc.Vec2( i919[2], i919[3] )
  i918.anchorMax = new pc.Vec2( i919[4], i919[5] )
  i918.sizeDelta = new pc.Vec2( i919[6], i919[7] )
  i918.anchoredPosition3D = new pc.Vec3( i919[8], i919[9], i919[10] )
  i918.rotation = new pc.Quat(i919[11], i919[12], i919[13], i919[14])
  i918.scale = new pc.Vec3( i919[15], i919[16], i919[17] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i921 = data
  i920.planeDistance = i921[0]
  i920.referencePixelsPerUnit = i921[1]
  i920.isFallbackOverlay = !!i921[2]
  i920.renderMode = i921[3]
  i920.renderOrder = i921[4]
  i920.sortingLayerName = i921[5]
  i920.sortingOrder = i921[6]
  i920.scaleFactor = i921[7]
  request.r(i921[8], i921[9], 0, i920, 'worldCamera')
  i920.overrideSorting = !!i921[10]
  i920.pixelPerfect = !!i921[11]
  i920.targetDisplay = i921[12]
  i920.overridePixelPerfect = !!i921[13]
  i920.enabled = !!i921[14]
  return i920
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i923 = data
  i922.m_UiScaleMode = i923[0]
  i922.m_ReferencePixelsPerUnit = i923[1]
  i922.m_ScaleFactor = i923[2]
  i922.m_ReferenceResolution = new pc.Vec2( i923[3], i923[4] )
  i922.m_ScreenMatchMode = i923[5]
  i922.m_MatchWidthOrHeight = i923[6]
  i922.m_PhysicalUnit = i923[7]
  i922.m_FallbackScreenDPI = i923[8]
  i922.m_DefaultSpriteDPI = i923[9]
  i922.m_DynamicPixelsPerUnit = i923[10]
  i922.m_PresetInfoIsWorld = !!i923[11]
  return i922
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i925 = data
  i924.m_IgnoreReversedGraphics = !!i925[0]
  i924.m_BlockingObjects = i925[1]
  i924.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i925[2] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'animatorController')
  request.r(i927[2], i927[3], 0, i926, 'avatar')
  i926.updateMode = i927[4]
  i926.hasTransformHierarchy = !!i927[5]
  i926.applyRootMotion = !!i927[6]
  var i929 = i927[7]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.humanBones = i928
  i926.enabled = !!i927[8]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i933 = data
  i932.cullTransparentMesh = !!i933[0]
  return i932
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i935 = data
  i934.m_hasFontAssetChanged = !!i935[0]
  request.r(i935[1], i935[2], 0, i934, 'm_baseMaterial')
  i934.m_maskOffset = new pc.Vec4( i935[3], i935[4], i935[5], i935[6] )
  i934.m_text = i935[7]
  i934.m_isRightToLeft = !!i935[8]
  request.r(i935[9], i935[10], 0, i934, 'm_fontAsset')
  request.r(i935[11], i935[12], 0, i934, 'm_sharedMaterial')
  var i937 = i935[13]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.m_fontSharedMaterials = i936
  request.r(i935[14], i935[15], 0, i934, 'm_fontMaterial')
  var i939 = i935[16]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i934.m_fontMaterials = i938
  i934.m_fontColor32 = UnityEngine.Color32.ConstructColor(i935[17], i935[18], i935[19], i935[20])
  i934.m_fontColor = new pc.Color(i935[21], i935[22], i935[23], i935[24])
  i934.m_enableVertexGradient = !!i935[25]
  i934.m_colorMode = i935[26]
  i934.m_fontColorGradient = request.d('TMPro.VertexGradient', i935[27], i934.m_fontColorGradient)
  request.r(i935[28], i935[29], 0, i934, 'm_fontColorGradientPreset')
  request.r(i935[30], i935[31], 0, i934, 'm_spriteAsset')
  i934.m_tintAllSprites = !!i935[32]
  request.r(i935[33], i935[34], 0, i934, 'm_StyleSheet')
  i934.m_TextStyleHashCode = i935[35]
  i934.m_overrideHtmlColors = !!i935[36]
  i934.m_faceColor = UnityEngine.Color32.ConstructColor(i935[37], i935[38], i935[39], i935[40])
  i934.m_fontSize = i935[41]
  i934.m_fontSizeBase = i935[42]
  i934.m_fontWeight = i935[43]
  i934.m_enableAutoSizing = !!i935[44]
  i934.m_fontSizeMin = i935[45]
  i934.m_fontSizeMax = i935[46]
  i934.m_fontStyle = i935[47]
  i934.m_HorizontalAlignment = i935[48]
  i934.m_VerticalAlignment = i935[49]
  i934.m_textAlignment = i935[50]
  i934.m_characterSpacing = i935[51]
  i934.m_wordSpacing = i935[52]
  i934.m_lineSpacing = i935[53]
  i934.m_lineSpacingMax = i935[54]
  i934.m_paragraphSpacing = i935[55]
  i934.m_charWidthMaxAdj = i935[56]
  i934.m_TextWrappingMode = i935[57]
  i934.m_wordWrappingRatios = i935[58]
  i934.m_overflowMode = i935[59]
  request.r(i935[60], i935[61], 0, i934, 'm_linkedTextComponent')
  request.r(i935[62], i935[63], 0, i934, 'parentLinkedComponent')
  i934.m_enableKerning = !!i935[64]
  var i941 = i935[65]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(i941[i + 0]);
  }
  i934.m_ActiveFontFeatures = i940
  i934.m_enableExtraPadding = !!i935[66]
  i934.checkPaddingRequired = !!i935[67]
  i934.m_isRichText = !!i935[68]
  i934.m_parseCtrlCharacters = !!i935[69]
  i934.m_isOrthographic = !!i935[70]
  i934.m_isCullingEnabled = !!i935[71]
  i934.m_horizontalMapping = i935[72]
  i934.m_verticalMapping = i935[73]
  i934.m_uvLineOffset = i935[74]
  i934.m_geometrySortingOrder = i935[75]
  i934.m_IsTextObjectScaleStatic = !!i935[76]
  i934.m_VertexBufferAutoSizeReduction = !!i935[77]
  i934.m_useMaxVisibleDescender = !!i935[78]
  i934.m_pageToDisplay = i935[79]
  i934.m_margin = new pc.Vec4( i935[80], i935[81], i935[82], i935[83] )
  i934.m_isUsingLegacyAnimationComponent = !!i935[84]
  i934.m_isVolumetricText = !!i935[85]
  request.r(i935[86], i935[87], 0, i934, 'm_Material')
  i934.m_EmojiFallbackSupport = !!i935[88]
  i934.m_Maskable = !!i935[89]
  i934.m_Color = new pc.Color(i935[90], i935[91], i935[92], i935[93])
  i934.m_RaycastTarget = !!i935[94]
  i934.m_RaycastPadding = new pc.Vec4( i935[95], i935[96], i935[97], i935[98] )
  return i934
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.VertexGradient' )
  var i943 = data
  i942.topLeft = new pc.Color(i943[0], i943[1], i943[2], i943[3])
  i942.topRight = new pc.Color(i943[4], i943[5], i943[6], i943[7])
  i942.bottomLeft = new pc.Color(i943[8], i943[9], i943[10], i943[11])
  i942.bottomRight = new pc.Color(i943[12], i943[13], i943[14], i943[15])
  return i942
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Image' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_Sprite')
  i946.m_Type = i947[2]
  i946.m_PreserveAspect = !!i947[3]
  i946.m_FillCenter = !!i947[4]
  i946.m_FillMethod = i947[5]
  i946.m_FillAmount = i947[6]
  i946.m_FillClockwise = !!i947[7]
  i946.m_FillOrigin = i947[8]
  i946.m_UseSpriteMesh = !!i947[9]
  i946.m_PixelsPerUnitMultiplier = i947[10]
  request.r(i947[11], i947[12], 0, i946, 'm_Material')
  i946.m_Maskable = !!i947[13]
  i946.m_Color = new pc.Color(i947[14], i947[15], i947[16], i947[17])
  i946.m_RaycastTarget = !!i947[18]
  i946.m_RaycastPadding = new pc.Vec4( i947[19], i947[20], i947[21], i947[22] )
  return i946
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button' )
  var i949 = data
  i948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i949[0], i948.m_OnClick)
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[1], i948.m_Navigation)
  i948.m_Transition = i949[2]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[3], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[4], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[5], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[6]
  request.r(i949[7], i949[8], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i953 = data
  var i955 = i953[0]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('UnityEngine.Events.PersistentCall', i955[i + 0]));
  }
  i952.m_Calls = i954
  return i952
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_Target')
  i958.m_TargetAssemblyTypeName = i959[2]
  i958.m_MethodName = i959[3]
  i958.m_Mode = i959[4]
  i958.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i959[5], i958.m_Arguments)
  i958.m_CallState = i959[6]
  return i958
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_ObjectArgument')
  i960.m_ObjectArgumentAssemblyTypeName = i961[2]
  i960.m_IntArgument = i961[3]
  i960.m_FloatArgument = i961[4]
  i960.m_StringArgument = i961[5]
  i960.m_BoolArgument = !!i961[6]
  return i960
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i963 = data
  i962.m_Mode = i963[0]
  i962.m_WrapAround = !!i963[1]
  request.r(i963[2], i963[3], 0, i962, 'm_SelectOnUp')
  request.r(i963[4], i963[5], 0, i962, 'm_SelectOnDown')
  request.r(i963[6], i963[7], 0, i962, 'm_SelectOnLeft')
  request.r(i963[8], i963[9], 0, i962, 'm_SelectOnRight')
  return i962
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i965 = data
  i964.m_NormalColor = new pc.Color(i965[0], i965[1], i965[2], i965[3])
  i964.m_HighlightedColor = new pc.Color(i965[4], i965[5], i965[6], i965[7])
  i964.m_PressedColor = new pc.Color(i965[8], i965[9], i965[10], i965[11])
  i964.m_SelectedColor = new pc.Color(i965[12], i965[13], i965[14], i965[15])
  i964.m_DisabledColor = new pc.Color(i965[16], i965[17], i965[18], i965[19])
  i964.m_ColorMultiplier = i965[20]
  i964.m_FadeDuration = i965[21]
  return i964
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_HighlightedSprite')
  request.r(i967[2], i967[3], 0, i966, 'm_PressedSprite')
  request.r(i967[4], i967[5], 0, i966, 'm_SelectedSprite')
  request.r(i967[6], i967[7], 0, i966, 'm_DisabledSprite')
  return i966
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i969 = data
  i968.m_NormalTrigger = i969[0]
  i968.m_HighlightedTrigger = i969[1]
  i968.m_PressedTrigger = i969[2]
  i968.m_SelectedTrigger = i969[3]
  i968.m_DisabledTrigger = i969[4]
  return i968
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i970 = root || request.c( 'Ply_Pool' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Ply_Pool+PoolAmount', i973[i + 0]) );
  }
  i970.poolAmounts = i972
  request.r(i971[1], i971[2], 0, i970, 'poolHolder')
  return i970
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i976 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i977 = data
  i976.type = i977[0]
  i976.amount = i977[1]
  request.r(i977[2], i977[3], 0, i976, 'gameUnit')
  return i976
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i978 = root || request.c( 'Ply_SoundManager' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Ply_SoundManager+FxAudio', i981[i + 0]) );
  }
  i978.fxAudios = i980
  var i983 = i979[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i978.audioClips = i982
  request.r(i979[2], i979[3], 0, i978, 'sound')
  return i978
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i986 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i987 = data
  i986.fxType = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'audioClip')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'clip')
  request.r(i991[2], i991[3], 0, i990, 'outputAudioMixerGroup')
  i990.playOnAwake = !!i991[4]
  i990.loop = !!i991[5]
  i990.time = i991[6]
  i990.volume = i991[7]
  i990.pitch = i991[8]
  i990.enabled = !!i991[9]
  return i990
}

Deserializers["GameManager"] = function (request, data, root) {
  var i992 = root || request.c( 'GameManager' )
  var i993 = data
  i992.isPlaying = !!i993[0]
  i992.isTutorial = !!i993[1]
  i992.isGotoStore = !!i993[2]
  i992.countMove = i993[3]
  i992.currentLayer = i993[4]
  return i992
}

Deserializers["UIManager"] = function (request, data, root) {
  var i994 = root || request.c( 'UIManager' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'winUI')
  request.r(i995[2], i995[3], 0, i994, 'loseUI')
  request.r(i995[4], i995[5], 0, i994, 'tutorial')
  request.r(i995[6], i995[7], 0, i994, 'verticalUI')
  request.r(i995[8], i995[9], 0, i994, 'horizontalUI')
  request.r(i995[10], i995[11], 0, i994, 'downloadBtn')
  i994.screenWidth = i995[12]
  i994.screenHeight = i995[13]
  i994.scaleHeightOnWidth = i995[14]
  i994.isVertical = !!i995[15]
  request.r(i995[16], i995[17], 0, i994, 'cam')
  i994.useContinuousScaling = !!i995[18]
  i994.baseOrthographicSize = i995[19]
  i994.baseAspect = i995[20]
  i994.landscapeSize = i995[21]
  i994.defaultPortraitSize = i995[22]
  var i997 = i995[23]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('ScreenScaleStep', i997[i + 0]));
  }
  i994.discreteScaleSteps = i996
  i994.usePerspectiveCamera = !!i995[24]
  request.r(i995[25], i995[26], 0, i994, 'perspectiveFocus')
  i994.perspectiveFocusDistance = i995[27]
  i994.perspectivePadding = i995[28]
  i994.fitRendererBounds = !!i995[29]
  request.r(i995[30], i995[31], 0, i994, 'boundsRoot')
  var i999 = i995[32]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i994.boundsRenderers = i998
  return i994
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i1002 = root || request.c( 'ScreenScaleStep' )
  var i1003 = data
  i1002.heightOnWidthRatio = i1003[0]
  i1002.orthographicSize = i1003[1]
  return i1002
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'InputManager' )
  var i1007 = data
  i1006.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1007[0] )
  i1006.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i1007[1] )
  i1006.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1007[2] )
  i1006.isDragging = !!i1007[3]
  return i1006
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i1008 = root || request.c( 'PhaseManager' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('PhaseData', i1011[i + 0]));
  }
  i1008.phases = i1010
  i1008.transitionDuration = i1009[1]
  i1008.delayBeforeNextPhase = i1009[2]
  i1008.offScreenLeftX = i1009[3]
  i1008.offScreenRightX = i1009[4]
  i1008.centerScreenX = i1009[5]
  i1008.currentPhaseIndex = i1009[6]
  i1008.currentStepCount = i1009[7]
  return i1008
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1014 = root || request.c( 'PhaseData' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'phaseObject')
  i1014.totalSteps = i1015[2]
  i1014.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i1015[3], i1014.onPhaseReady)
  return i1014
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1017 = data
  i1016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1017[0], i1016.m_PersistentCalls)
  return i1016
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i1018 = root || request.c( 'HandTutManager' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.items = i1020
  request.r(i1019[1], i1019[2], 0, i1018, 'knife')
  request.r(i1019[3], i1019[4], 0, i1018, 'handTutObject')
  request.r(i1019[5], i1019[6], 0, i1018, 'tapToCookObject')
  request.r(i1019[7], i1019[8], 0, i1018, 'oilItem')
  request.r(i1019[9], i1019[10], 0, i1018, 'stoveToggleEvent')
  i1018.noDelayItemCount = i1019[11]
  i1018.waitForBowlIntro = !!i1019[12]
  i1018.idleDelay = i1019[13]
  i1018.moveDuration = i1019[14]
  i1018.dragFadeDuration = i1019[15]
  i1018.clickScaleDuration = i1019[16]
  i1018.waitAtEndDuration = i1019[17]
  i1018.handZPosition = i1019[18]
  i1018.clickScaleMultiplier = i1019[19]
  i1018.moveEase = i1019[20]
  return i1018
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i1024 = root || request.c( 'SortChildByZPos' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'transformToSort')
  var i1027 = i1025[2]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1024.childrenToSort = i1026
  i1024.zOffset = i1025[3]
  i1024.baseZ = i1025[4]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1031 = data
  i1030.aspect = i1031[0]
  i1030.orthographic = !!i1031[1]
  i1030.orthographicSize = i1031[2]
  i1030.backgroundColor = new pc.Color(i1031[3], i1031[4], i1031[5], i1031[6])
  i1030.nearClipPlane = i1031[7]
  i1030.farClipPlane = i1031[8]
  i1030.fieldOfView = i1031[9]
  i1030.depth = i1031[10]
  i1030.clearFlags = i1031[11]
  i1030.cullingMask = i1031[12]
  i1030.rect = i1031[13]
  request.r(i1031[14], i1031[15], 0, i1030, 'targetTexture')
  i1030.usePhysicalProperties = !!i1031[16]
  i1030.focalLength = i1031[17]
  i1030.sensorSize = new pc.Vec2( i1031[18], i1031[19] )
  i1030.lensShift = new pc.Vec2( i1031[20], i1031[21] )
  i1030.gateFit = i1031[22]
  i1030.commandBufferCount = i1031[23]
  i1030.cameraType = i1031[24]
  i1030.enabled = !!i1031[25]
  return i1030
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_FirstSelected')
  i1032.m_sendNavigationEvents = !!i1033[2]
  i1032.m_DragThreshold = i1033[3]
  return i1032
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1035 = data
  i1034.m_HorizontalAxis = i1035[0]
  i1034.m_VerticalAxis = i1035[1]
  i1034.m_SubmitButton = i1035[2]
  i1034.m_CancelButton = i1035[3]
  i1034.m_InputActionsPerSecond = i1035[4]
  i1034.m_RepeatDelay = i1035[5]
  i1034.m_ForceModuleActive = !!i1035[6]
  i1034.m_SendPointerHoverToParent = !!i1035[7]
  return i1034
}

Deserializers["Item"] = function (request, data, root) {
  var i1036 = root || request.c( 'Item' )
  var i1037 = data
  i1036.isDone = !!i1037[0]
  i1036.onProcess = !!i1037[1]
  request.r(i1037[2], i1037[3], 0, i1036, 'itemDraggable')
  request.r(i1037[4], i1037[5], 0, i1036, 'itemClickable')
  request.r(i1037[6], i1037[7], 0, i1036, 'itemStirring')
  request.r(i1037[8], i1037[9], 0, i1036, 'itemKnifeSpriteMaskCutter')
  request.r(i1037[10], i1037[11], 0, i1036, 'itemSpriteMaskPainter')
  request.r(i1037[12], i1037[13], 0, i1036, 'itemMoveToTarget')
  request.r(i1037[14], i1037[15], 0, i1036, 'animator')
  i1036.itemType = i1037[16]
  request.r(i1037[17], i1037[18], 0, i1036, 'spriteRenderer')
  i1036.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1037[19], i1036.onKnifeIn)
  i1036.heartEffectScale = i1037[20]
  i1036.playMoveToTargetFinishSound = !!i1037[21]
  i1036.moveToTargetFinishFxType = i1037[22]
  request.r(i1037[23], i1037[24], 0, i1036, 'bowl')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1039 = data
  i1038.center = new pc.Vec3( i1039[0], i1039[1], i1039[2] )
  i1038.radius = i1039[3]
  i1038.enabled = !!i1039[4]
  i1038.isTrigger = !!i1039[5]
  request.r(i1039[6], i1039[7], 0, i1038, 'material')
  return i1038
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1040 = root || request.c( 'ItemDraggable' )
  var i1041 = data
  i1040.isDraggable = !!i1041[0]
  i1040.isUseOrderlayer = !!i1041[1]
  request.r(i1041[2], i1041[3], 0, i1040, 'returnTransform')
  i1040.setParentToReturnTransform = !!i1041[4]
  i1040.returnToExactReturnTransformPosition = !!i1041[5]
  i1040.targetItemType = i1041[6]
  request.r(i1041[7], i1041[8], 0, i1040, 'item')
  i1040.checkState = !!i1041[9]
  request.r(i1041[10], i1041[11], 0, i1040, 'shadowObject')
  i1040.playReturnToStartFinishSound = !!i1041[12]
  i1040.returnToStartFinishFxType = i1041[13]
  i1040.liftOffset = i1041[14]
  i1040.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1041[15], i1040.onBeginDrag)
  i1040.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1041[16], i1040.onDropSuccess)
  i1040.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1041[17], i1040.onDropFail)
  return i1040
}

Deserializers["Ply_MoveToTarget"] = function (request, data, root) {
  var i1042 = root || request.c( 'Ply_MoveToTarget' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'defaultTarget')
  i1042.isMove2D = !!i1043[2]
  i1042.useVectorTarget = !!i1043[3]
  i1042.vectorTarget = new pc.Vec2( i1043[4], i1043[5] )
  i1042.duration = i1043[6]
  i1042.easeType = i1043[7]
  i1042.moveType = i1043[8]
  i1042.jumpPower = i1043[9]
  i1042.numJumps = i1043[10]
  i1042.rotate360DuringJump = !!i1043[11]
  i1042.setParentToTarget = !!i1043[12]
  i1042.onComplete = request.d('UnityEngine.Events.UnityEvent', i1043[13], i1042.onComplete)
  i1042.lockInputWhileMoving = !!i1043[14]
  i1042.resetParentBeforeMove = !!i1043[15]
  return i1042
}

Deserializers["Plate"] = function (request, data, root) {
  var i1044 = root || request.c( 'Plate' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'waittingPoint')
  request.r(i1045[2], i1045[3], 0, i1044, 'targetPoint')
  request.r(i1045[4], i1045[5], 0, i1044, 'transformConveyor')
  i1044.isDone = !!i1045[6]
  i1044.onProcess = !!i1045[7]
  request.r(i1045[8], i1045[9], 0, i1044, 'itemDraggable')
  request.r(i1045[10], i1045[11], 0, i1044, 'itemClickable')
  request.r(i1045[12], i1045[13], 0, i1044, 'itemStirring')
  request.r(i1045[14], i1045[15], 0, i1044, 'itemKnifeSpriteMaskCutter')
  request.r(i1045[16], i1045[17], 0, i1044, 'itemSpriteMaskPainter')
  request.r(i1045[18], i1045[19], 0, i1044, 'itemMoveToTarget')
  request.r(i1045[20], i1045[21], 0, i1044, 'animator')
  i1044.itemType = i1045[22]
  request.r(i1045[23], i1045[24], 0, i1044, 'spriteRenderer')
  i1044.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1045[25], i1044.onKnifeIn)
  i1044.heartEffectScale = i1045[26]
  i1044.playMoveToTargetFinishSound = !!i1045[27]
  i1044.moveToTargetFinishFxType = i1045[28]
  request.r(i1045[29], i1045[30], 0, i1044, 'bowl')
  return i1044
}

Deserializers["Spoon"] = function (request, data, root) {
  var i1046 = root || request.c( 'Spoon' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'spoonEmptySprite')
  request.r(i1047[2], i1047[3], 0, i1046, 'spoonFullSprite')
  i1046.canUse = !!i1047[4]
  i1046.tahiniRayDistance = i1047[5]
  request.r(i1047[6], i1047[7], 0, i1046, 'waittingPoint')
  request.r(i1047[8], i1047[9], 0, i1046, 'targetPoint')
  request.r(i1047[10], i1047[11], 0, i1046, 'transformConveyor')
  i1046.isDone = !!i1047[12]
  i1046.onProcess = !!i1047[13]
  request.r(i1047[14], i1047[15], 0, i1046, 'itemDraggable')
  request.r(i1047[16], i1047[17], 0, i1046, 'itemClickable')
  request.r(i1047[18], i1047[19], 0, i1046, 'itemStirring')
  request.r(i1047[20], i1047[21], 0, i1046, 'itemKnifeSpriteMaskCutter')
  request.r(i1047[22], i1047[23], 0, i1046, 'itemSpriteMaskPainter')
  request.r(i1047[24], i1047[25], 0, i1046, 'itemMoveToTarget')
  request.r(i1047[26], i1047[27], 0, i1046, 'animator')
  i1046.itemType = i1047[28]
  request.r(i1047[29], i1047[30], 0, i1046, 'spriteRenderer')
  i1046.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1047[31], i1046.onKnifeIn)
  i1046.heartEffectScale = i1047[32]
  i1046.playMoveToTargetFinishSound = !!i1047[33]
  i1046.moveToTargetFinishFxType = i1047[34]
  request.r(i1047[35], i1047[36], 0, i1046, 'bowl')
  return i1046
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'Ply_ToggleEvent' )
  var i1049 = data
  i1048.isOn = !!i1049[0]
  i1048.applyStateOnEnable = !!i1049[1]
  i1048.applyStateOnClick = !!i1049[2]
  request.r(i1049[3], i1049[4], 0, i1048, 'targetObject')
  i1048.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1049[5], i1048.onTurnOn)
  i1048.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1049[6], i1048.onTurnOff)
  return i1048
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1050 = root || request.c( 'ItemClickable' )
  var i1051 = data
  i1050.requiredClicks = i1051[0]
  i1050.infiniteClick = !!i1051[1]
  i1050.canClick = !!i1051[2]
  i1050.disableAfterClick = !!i1051[3]
  i1050.onClick = request.d('UnityEngine.Events.UnityEvent', i1051[4], i1050.onClick)
  var i1053 = i1051[5]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('UnityEngine.Events.UnityEvent', i1053[i + 0]));
  }
  i1050.sequentialOnClicks = i1052
  i1050.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1051[6], i1050.onClickComplete)
  return i1050
}

Deserializers["Pan"] = function (request, data, root) {
  var i1056 = root || request.c( 'Pan' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('Cake')))
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 1, i1058, '')
  }
  i1056.cakes = i1058
  var i1061 = i1057[1]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1056.cakesOnPlate = i1060
  request.r(i1057[2], i1057[3], 0, i1056, 'smokeFX')
  request.r(i1057[4], i1057[5], 0, i1056, 'jumpingFX')
  i1056.cakeFryDuration = i1057[6]
  i1056.isOilIn = !!i1057[7]
  i1056.isTurnOnStove = !!i1057[8]
  request.r(i1057[9], i1057[10], 0, i1056, 'cakePlateAnimator')
  i1056.isDone = !!i1057[11]
  i1056.onProcess = !!i1057[12]
  request.r(i1057[13], i1057[14], 0, i1056, 'itemDraggable')
  request.r(i1057[15], i1057[16], 0, i1056, 'itemClickable')
  request.r(i1057[17], i1057[18], 0, i1056, 'itemStirring')
  request.r(i1057[19], i1057[20], 0, i1056, 'itemKnifeSpriteMaskCutter')
  request.r(i1057[21], i1057[22], 0, i1056, 'itemSpriteMaskPainter')
  request.r(i1057[23], i1057[24], 0, i1056, 'itemMoveToTarget')
  request.r(i1057[25], i1057[26], 0, i1056, 'animator')
  i1056.itemType = i1057[27]
  request.r(i1057[28], i1057[29], 0, i1056, 'spriteRenderer')
  i1056.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1057[30], i1056.onKnifeIn)
  i1056.heartEffectScale = i1057[31]
  i1056.playMoveToTargetFinishSound = !!i1057[32]
  i1056.moveToTargetFinishFxType = i1057[33]
  request.r(i1057[34], i1057[35], 0, i1056, 'bowl')
  return i1056
}

Deserializers["Cake"] = function (request, data, root) {
  var i1064 = root || request.c( 'Cake' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'pan')
  i1064.fryDuration = i1065[2]
  i1064.fryTimeElapsed = i1065[3]
  i1064.hasStartedFrying = !!i1065[4]
  i1064.isFrying = !!i1065[5]
  i1064.isFried = !!i1065[6]
  i1064.onFryComplete = request.d('UnityEngine.Events.UnityEvent', i1065[7], i1064.onFryComplete)
  i1064.fryShakeStrength = i1065[8]
  i1064.fryShakeDuration = i1065[9]
  i1064.fryShakeVibrato = i1065[10]
  i1064.isDone = !!i1065[11]
  i1064.onProcess = !!i1065[12]
  request.r(i1065[13], i1065[14], 0, i1064, 'itemDraggable')
  request.r(i1065[15], i1065[16], 0, i1064, 'itemClickable')
  request.r(i1065[17], i1065[18], 0, i1064, 'itemStirring')
  request.r(i1065[19], i1065[20], 0, i1064, 'itemKnifeSpriteMaskCutter')
  request.r(i1065[21], i1065[22], 0, i1064, 'itemSpriteMaskPainter')
  request.r(i1065[23], i1065[24], 0, i1064, 'itemMoveToTarget')
  request.r(i1065[25], i1065[26], 0, i1064, 'animator')
  i1064.itemType = i1065[27]
  request.r(i1065[28], i1065[29], 0, i1064, 'spriteRenderer')
  i1064.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1065[30], i1064.onKnifeIn)
  i1064.heartEffectScale = i1065[31]
  i1064.playMoveToTargetFinishSound = !!i1065[32]
  i1064.moveToTargetFinishFxType = i1065[33]
  request.r(i1065[34], i1065[35], 0, i1064, 'bowl')
  return i1064
}

Deserializers["Bowl"] = function (request, data, root) {
  var i1066 = root || request.c( 'Bowl' )
  var i1067 = data
  i1066.hasCarrot = !!i1067[0]
  i1066.hasCucumber = !!i1067[1]
  var i1069 = i1067[2]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Cake')))
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 1, i1068, '')
  }
  i1066.cakes = i1068
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1066.cakePos = i1070
  request.r(i1067[4], i1067[5], 0, i1066, 'spoon')
  request.r(i1067[6], i1067[7], 0, i1066, 'oil')
  request.r(i1067[8], i1067[9], 0, i1066, 'newBowl')
  request.r(i1067[10], i1067[11], 0, i1066, 'capybara')
  request.r(i1067[12], i1067[13], 0, i1066, 'capybaraAnim')
  i1066.capybaraDanceAnimName = i1067[14]
  i1066.capybaraIdleAnimName = i1067[15]
  i1066.capybaraBassSkinName = i1067[16]
  i1066.capybaraSkinMoveYOffset = i1067[17]
  i1066.capybaraSkinMoveDownDuration = i1067[18]
  i1066.capybaraSkinMoveUpDuration = i1067[19]
  i1066.playIntroOnStart = !!i1067[20]
  i1066.showCapybaraFirstPopupAfterIntro = !!i1067[21]
  i1066.startHandTutAfterIntro = !!i1067[22]
  i1066.introMoveYOffset = i1067[23]
  i1066.introMoveDuration = i1067[24]
  i1066.introFadeDuration = i1067[25]
  i1066.loseGameDelayAfterPopup2 = i1067[26]
  i1066.isDone = !!i1067[27]
  i1066.onProcess = !!i1067[28]
  request.r(i1067[29], i1067[30], 0, i1066, 'itemDraggable')
  request.r(i1067[31], i1067[32], 0, i1066, 'itemClickable')
  request.r(i1067[33], i1067[34], 0, i1066, 'itemStirring')
  request.r(i1067[35], i1067[36], 0, i1066, 'itemKnifeSpriteMaskCutter')
  request.r(i1067[37], i1067[38], 0, i1066, 'itemSpriteMaskPainter')
  request.r(i1067[39], i1067[40], 0, i1066, 'itemMoveToTarget')
  request.r(i1067[41], i1067[42], 0, i1066, 'animator')
  i1066.itemType = i1067[43]
  request.r(i1067[44], i1067[45], 0, i1066, 'spriteRenderer')
  i1066.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1067[46], i1066.onKnifeIn)
  i1066.heartEffectScale = i1067[47]
  i1066.playMoveToTargetFinishSound = !!i1067[48]
  i1066.moveToTargetFinishFxType = i1067[49]
  request.r(i1067[50], i1067[51], 0, i1066, 'bowl')
  return i1066
}

Deserializers["Capybara"] = function (request, data, root) {
  var i1072 = root || request.c( 'Capybara' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'popup1')
  request.r(i1073[2], i1073[3], 0, i1072, 'popup2')
  i1072.popupShowScale = i1073[4]
  i1072.popupShowDuration = i1073[5]
  i1072.popupHideDuration = i1073[6]
  i1072.popupHideDelay = i1073[7]
  request.r(i1073[8], i1073[9], 0, i1072, 'spawnHeartPoint')
  i1072.heartEffectScale = i1073[10]
  request.r(i1073[11], i1073[12], 0, i1072, 'skeletonAnimation')
  i1072.bassSkinName = i1073[13]
  i1072.skinChangeDelay = i1073[14]
  i1072.skinMoveYOffset = i1073[15]
  i1072.skinMoveDownDuration = i1073[16]
  i1072.skinMoveUpDuration = i1073[17]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'sharedMesh')
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'additionalVertexStreams')
  i1076.enabled = !!i1077[2]
  request.r(i1077[3], i1077[4], 0, i1076, 'sharedMaterial')
  var i1079 = i1077[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.sharedMaterials = i1078
  i1076.receiveShadows = !!i1077[6]
  i1076.shadowCastingMode = i1077[7]
  i1076.sortingLayerID = i1077[8]
  i1076.sortingOrder = i1077[9]
  i1076.lightmapIndex = i1077[10]
  i1076.lightmapSceneIndex = i1077[11]
  i1076.lightmapScaleOffset = new pc.Vec4( i1077[12], i1077[13], i1077[14], i1077[15] )
  i1076.lightProbeUsage = i1077[16]
  i1076.reflectionProbeUsage = i1077[17]
  return i1076
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1080 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1081 = data
  i1080.loop = !!i1081[0]
  i1080.timeScale = i1081[1]
  request.r(i1081[2], i1081[3], 0, i1080, 'skeletonDataAsset')
  i1080.initialSkinName = i1081[4]
  i1080.fixPrefabOverrideViaMeshFilter = i1081[5]
  i1080.initialFlipX = !!i1081[6]
  i1080.initialFlipY = !!i1081[7]
  i1080.updateWhenInvisible = i1081[8]
  i1080.zSpacing = i1081[9]
  i1080.useClipping = !!i1081[10]
  i1080.immutableTriangles = !!i1081[11]
  i1080.pmaVertexColors = !!i1081[12]
  i1080.clearStateOnDisable = !!i1081[13]
  i1080.tintBlack = !!i1081[14]
  i1080.singleSubmesh = !!i1081[15]
  i1080.fixDrawOrder = !!i1081[16]
  i1080.addNormals = !!i1081[17]
  i1080.calculateTangents = !!i1081[18]
  i1080.maskInteraction = i1081[19]
  i1080.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1081[20], i1080.maskMaterials)
  i1080.disableRenderingOnOverride = !!i1081[21]
  i1080._animationName = i1081[22]
  var i1083 = i1081[23]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.separatorSlotNames = i1082
  return i1080
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1084 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1084.materialsMaskDisabled = i1086
  var i1089 = i1085[1]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1084.materialsInsideMask = i1088
  var i1091 = i1085[2]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1084.materialsOutsideMask = i1090
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1095 = data
  i1094.frontSortingLayerID = i1095[0]
  i1094.frontSortingOrder = i1095[1]
  i1094.backSortingLayerID = i1095[2]
  i1094.backSortingOrder = i1095[3]
  i1094.alphaCutoff = i1095[4]
  request.r(i1095[5], i1095[6], 0, i1094, 'sprite')
  i1094.tileMode = i1095[7]
  i1094.isCustomRangeActive = !!i1095[8]
  i1094.spriteSortPoint = i1095[9]
  i1094.enabled = !!i1095[10]
  request.r(i1095[11], i1095[12], 0, i1094, 'sharedMaterial')
  var i1097 = i1095[13]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.sharedMaterials = i1096
  i1094.receiveShadows = !!i1095[14]
  i1094.shadowCastingMode = i1095[15]
  i1094.sortingLayerID = i1095[16]
  i1094.sortingOrder = i1095[17]
  i1094.lightmapIndex = i1095[18]
  i1094.lightmapSceneIndex = i1095[19]
  i1094.lightmapScaleOffset = new pc.Vec4( i1095[20], i1095[21], i1095[22], i1095[23] )
  i1094.lightProbeUsage = i1095[24]
  i1094.reflectionProbeUsage = i1095[25]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1099 = data
  i1098.ambientIntensity = i1099[0]
  i1098.reflectionIntensity = i1099[1]
  i1098.ambientMode = i1099[2]
  i1098.ambientLight = new pc.Color(i1099[3], i1099[4], i1099[5], i1099[6])
  i1098.ambientSkyColor = new pc.Color(i1099[7], i1099[8], i1099[9], i1099[10])
  i1098.ambientGroundColor = new pc.Color(i1099[11], i1099[12], i1099[13], i1099[14])
  i1098.ambientEquatorColor = new pc.Color(i1099[15], i1099[16], i1099[17], i1099[18])
  i1098.fogColor = new pc.Color(i1099[19], i1099[20], i1099[21], i1099[22])
  i1098.fogEndDistance = i1099[23]
  i1098.fogStartDistance = i1099[24]
  i1098.fogDensity = i1099[25]
  i1098.fog = !!i1099[26]
  request.r(i1099[27], i1099[28], 0, i1098, 'skybox')
  i1098.fogMode = i1099[29]
  var i1101 = i1099[30]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1101[i + 0]) );
  }
  i1098.lightmaps = i1100
  i1098.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1099[31], i1098.lightProbes)
  i1098.lightmapsMode = i1099[32]
  i1098.mixedBakeMode = i1099[33]
  i1098.environmentLightingMode = i1099[34]
  i1098.ambientProbe = new pc.SphericalHarmonicsL2(i1099[35])
  i1098.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1099[36])
  i1098.useReferenceAmbientProbe = !!i1099[37]
  request.r(i1099[38], i1099[39], 0, i1098, 'customReflection')
  request.r(i1099[40], i1099[41], 0, i1098, 'defaultReflection')
  i1098.defaultReflectionMode = i1099[42]
  i1098.defaultReflectionResolution = i1099[43]
  i1098.sunLightObjectId = i1099[44]
  i1098.pixelLightCount = i1099[45]
  i1098.defaultReflectionHDR = !!i1099[46]
  i1098.hasLightDataAsset = !!i1099[47]
  i1098.hasManualGenerate = !!i1099[48]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'lightmapColor')
  request.r(i1105[2], i1105[3], 0, i1104, 'lightmapDirection')
  request.r(i1105[4], i1105[5], 0, i1104, 'shadowMask')
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1106 = root || new UnityEngine.LightProbes()
  var i1107 = data
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1115 = data
  var i1117 = i1115[0]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1117[i + 0]));
  }
  i1114.ShaderCompilationErrors = i1116
  i1114.name = i1115[1]
  i1114.guid = i1115[2]
  var i1119 = i1115[3]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1114.shaderDefinedKeywords = i1118
  var i1121 = i1115[4]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1121[i + 0]) );
  }
  i1114.passes = i1120
  var i1123 = i1115[5]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1123[i + 0]) );
  }
  i1114.usePasses = i1122
  var i1125 = i1115[6]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1125[i + 0]) );
  }
  i1114.defaultParameterValues = i1124
  request.r(i1115[7], i1115[8], 0, i1114, 'unityFallbackShader')
  i1114.readDepth = !!i1115[9]
  i1114.hasDepthOnlyPass = !!i1115[10]
  i1114.isCreatedByShaderGraph = !!i1115[11]
  i1114.disableBatching = !!i1115[12]
  i1114.compiled = !!i1115[13]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1129 = data
  i1128.shaderName = i1129[0]
  i1128.errorMessage = i1129[1]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1132 = root || new pc.UnityShaderPass()
  var i1133 = data
  i1132.id = i1133[0]
  i1132.subShaderIndex = i1133[1]
  i1132.name = i1133[2]
  i1132.passType = i1133[3]
  i1132.grabPassTextureName = i1133[4]
  i1132.usePass = !!i1133[5]
  i1132.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[6], i1132.zTest)
  i1132.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[7], i1132.zWrite)
  i1132.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[8], i1132.culling)
  i1132.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[9], i1132.blending)
  i1132.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[10], i1132.alphaBlending)
  i1132.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[11], i1132.colorWriteMask)
  i1132.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[12], i1132.offsetUnits)
  i1132.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[13], i1132.offsetFactor)
  i1132.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[14], i1132.stencilRef)
  i1132.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[15], i1132.stencilReadMask)
  i1132.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[16], i1132.stencilWriteMask)
  i1132.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[17], i1132.stencilOp)
  i1132.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[18], i1132.stencilOpFront)
  i1132.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[19], i1132.stencilOpBack)
  var i1135 = i1133[20]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1135[i + 0]) );
  }
  i1132.tags = i1134
  var i1137 = i1133[21]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1132.passDefinedKeywords = i1136
  var i1139 = i1133[22]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1139[i + 0]) );
  }
  i1132.passDefinedKeywordGroups = i1138
  var i1141 = i1133[23]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1141[i + 0]) );
  }
  i1132.variants = i1140
  var i1143 = i1133[24]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1143[i + 0]) );
  }
  i1132.excludedVariants = i1142
  i1132.hasDepthReader = !!i1133[25]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1145 = data
  i1144.val = i1145[0]
  i1144.name = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1147 = data
  i1146.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[0], i1146.src)
  i1146.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[1], i1146.dst)
  i1146.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[2], i1146.op)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1149 = data
  i1148.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[0], i1148.pass)
  i1148.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[1], i1148.fail)
  i1148.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[2], i1148.zFail)
  i1148.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[3], i1148.comp)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.value = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.keywords = i1158
  i1156.hasDiscard = !!i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1163 = data
  i1162.passId = i1163[0]
  i1162.subShaderIndex = i1163[1]
  var i1165 = i1163[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.keywords = i1164
  i1162.vertexProgram = i1163[3]
  i1162.fragmentProgram = i1163[4]
  i1162.exportedForWebGl2 = !!i1163[5]
  i1162.readDepth = !!i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'shader')
  i1168.pass = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.type = i1173[1]
  i1172.value = new pc.Vec4( i1173[2], i1173[3], i1173[4], i1173[5] )
  i1172.textureValue = i1173[6]
  i1172.shaderPropertyFlag = i1173[7]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1175 = data
  i1174.name = i1175[0]
  request.r(i1175[1], i1175[2], 0, i1174, 'texture')
  i1174.aabb = i1175[3]
  i1174.vertices = i1175[4]
  i1174.triangles = i1175[5]
  i1174.textureRect = UnityEngine.Rect.MinMaxRect(i1175[6], i1175[7], i1175[8], i1175[9])
  i1174.packedRect = UnityEngine.Rect.MinMaxRect(i1175[10], i1175[11], i1175[12], i1175[13])
  i1174.border = new pc.Vec4( i1175[14], i1175[15], i1175[16], i1175[17] )
  i1174.transparency = i1175[18]
  i1174.bounds = i1175[19]
  i1174.pixelsPerUnit = i1175[20]
  i1174.textureWidth = i1175[21]
  i1174.textureHeight = i1175[22]
  i1174.nativeSize = new pc.Vec2( i1175[23], i1175[24] )
  i1174.pivot = new pc.Vec2( i1175[25], i1175[26] )
  i1174.textureRectOffset = new pc.Vec2( i1175[27], i1175[28] )
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1177 = data
  i1176.name = i1177[0]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.wrapMode = i1179[1]
  i1178.isLooping = !!i1179[2]
  i1178.length = i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1181[i + 0]) );
  }
  i1178.curves = i1180
  var i1183 = i1179[5]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1183[i + 0]) );
  }
  i1178.events = i1182
  i1178.halfPrecision = !!i1179[6]
  i1178._frameRate = i1179[7]
  i1178.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1179[8], i1178.localBounds)
  i1178.hasMuscleCurves = !!i1179[9]
  var i1185 = i1179[10]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1178.clipMuscleConstant = i1184
  i1178.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1179[11], i1178.clipBindingConstant)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1189 = data
  i1188.path = i1189[0]
  i1188.hash = i1189[1]
  i1188.componentType = i1189[2]
  i1188.property = i1189[3]
  i1188.keys = i1189[4]
  var i1191 = i1189[5]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1191[i + 0]) );
  }
  i1188.objectReferenceKeys = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1195 = data
  i1194.time = i1195[0]
  request.r(i1195[1], i1195[2], 0, i1194, 'value')
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1199 = data
  i1198.functionName = i1199[0]
  i1198.floatParameter = i1199[1]
  i1198.intParameter = i1199[2]
  i1198.stringParameter = i1199[3]
  request.r(i1199[4], i1199[5], 0, i1198, 'objectReferenceParameter')
  i1198.time = i1199[6]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1201 = data
  i1200.center = new pc.Vec3( i1201[0], i1201[1], i1201[2] )
  i1200.extends = new pc.Vec3( i1201[3], i1201[4], i1201[5] )
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1204.genericBindings = i1206
  var i1209 = i1205[1]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( i1209[i + 0] );
  }
  i1204.pptrCurveMapping = i1208
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1211 = data
  i1210.name = i1211[0]
  var i1213 = i1211[1]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1213[i + 0]) );
  }
  i1210.layers = i1212
  var i1215 = i1211[2]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1215[i + 0]) );
  }
  i1210.parameters = i1214
  i1210.animationClips = i1211[3]
  i1210.avatarUnsupported = i1211[4]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.defaultWeight = i1219[1]
  i1218.blendingMode = i1219[2]
  i1218.avatarMask = i1219[3]
  i1218.syncedLayerIndex = i1219[4]
  i1218.syncedLayerAffectsTiming = !!i1219[5]
  i1218.syncedLayers = i1219[6]
  i1218.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1219[7], i1218.stateMachine)
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1221 = data
  i1220.id = i1221[0]
  i1220.name = i1221[1]
  i1220.path = i1221[2]
  var i1223 = i1221[3]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1223[i + 0]) );
  }
  i1220.states = i1222
  var i1225 = i1221[4]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1225[i + 0]) );
  }
  i1220.machines = i1224
  var i1227 = i1221[5]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1227[i + 0]) );
  }
  i1220.entryStateTransitions = i1226
  var i1229 = i1221[6]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1229[i + 0]) );
  }
  i1220.exitStateTransitions = i1228
  var i1231 = i1221[7]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1231[i + 0]) );
  }
  i1220.anyStateTransitions = i1230
  i1220.defaultStateId = i1221[8]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1235 = data
  i1234.id = i1235[0]
  i1234.name = i1235[1]
  i1234.cycleOffset = i1235[2]
  i1234.cycleOffsetParameter = i1235[3]
  i1234.cycleOffsetParameterActive = !!i1235[4]
  i1234.mirror = !!i1235[5]
  i1234.mirrorParameter = i1235[6]
  i1234.mirrorParameterActive = !!i1235[7]
  i1234.motionId = i1235[8]
  i1234.nameHash = i1235[9]
  i1234.fullPathHash = i1235[10]
  i1234.speed = i1235[11]
  i1234.speedParameter = i1235[12]
  i1234.speedParameterActive = !!i1235[13]
  i1234.tag = i1235[14]
  i1234.tagHash = i1235[15]
  i1234.writeDefaultValues = !!i1235[16]
  var i1237 = i1235[17]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 2, i1236, '')
  }
  i1234.behaviours = i1236
  var i1239 = i1235[18]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1239[i + 0]) );
  }
  i1234.transitions = i1238
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1245 = data
  i1244.fullPath = i1245[0]
  i1244.canTransitionToSelf = !!i1245[1]
  i1244.duration = i1245[2]
  i1244.exitTime = i1245[3]
  i1244.hasExitTime = !!i1245[4]
  i1244.hasFixedDuration = !!i1245[5]
  i1244.interruptionSource = i1245[6]
  i1244.offset = i1245[7]
  i1244.orderedInterruption = !!i1245[8]
  i1244.destinationStateId = i1245[9]
  i1244.isExit = !!i1245[10]
  i1244.mute = !!i1245[11]
  i1244.solo = !!i1245[12]
  var i1247 = i1245[13]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1247[i + 0]) );
  }
  i1244.conditions = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1253 = data
  i1252.destinationStateId = i1253[0]
  i1252.isExit = !!i1253[1]
  i1252.mute = !!i1253[2]
  i1252.solo = !!i1253[3]
  var i1255 = i1253[4]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1255[i + 0]) );
  }
  i1252.conditions = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1259 = data
  i1258.defaultBool = !!i1259[0]
  i1258.defaultFloat = i1259[1]
  i1258.defaultInt = i1259[2]
  i1258.name = i1259[3]
  i1258.nameHash = i1259[4]
  i1258.type = i1259[5]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1263 = data
  i1262.mode = i1263[0]
  i1262.parameter = i1263[1]
  i1262.threshold = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.bytes64 = i1265[1]
  i1264.data = i1265[2]
  return i1264
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1267 = data
  i1266.normalStyle = i1267[0]
  i1266.normalSpacingOffset = i1267[1]
  i1266.boldStyle = i1267[2]
  i1266.boldSpacing = i1267[3]
  i1266.italicStyle = i1267[4]
  i1266.tabSize = i1267[5]
  request.r(i1267[6], i1267[7], 0, i1266, 'atlas')
  i1266.m_SourceFontFileGUID = i1267[8]
  i1266.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1267[9], i1266.m_CreationSettings)
  request.r(i1267[10], i1267[11], 0, i1266, 'm_SourceFontFile')
  i1266.m_SourceFontFilePath = i1267[12]
  i1266.m_AtlasPopulationMode = i1267[13]
  i1266.InternalDynamicOS = !!i1267[14]
  var i1269 = i1267[15]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('UnityEngine.TextCore.Glyph', i1269[i + 0]));
  }
  i1266.m_GlyphTable = i1268
  var i1271 = i1267[16]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.TMP_Character', i1271[i + 0]));
  }
  i1266.m_CharacterTable = i1270
  var i1273 = i1267[17]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 2, i1272, '')
  }
  i1266.m_AtlasTextures = i1272
  i1266.m_AtlasTextureIndex = i1267[18]
  i1266.m_IsMultiAtlasTexturesEnabled = !!i1267[19]
  i1266.m_GetFontFeatures = !!i1267[20]
  i1266.m_ClearDynamicDataOnBuild = !!i1267[21]
  i1266.m_AtlasWidth = i1267[22]
  i1266.m_AtlasHeight = i1267[23]
  i1266.m_AtlasPadding = i1267[24]
  i1266.m_AtlasRenderMode = i1267[25]
  var i1275 = i1267[26]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('UnityEngine.TextCore.GlyphRect', i1275[i + 0]));
  }
  i1266.m_UsedGlyphRects = i1274
  var i1277 = i1267[27]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('UnityEngine.TextCore.GlyphRect', i1277[i + 0]));
  }
  i1266.m_FreeGlyphRects = i1276
  i1266.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1267[28], i1266.m_FontFeatureTable)
  i1266.m_ShouldReimportFontFeatures = !!i1267[29]
  var i1279 = i1267[30]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1266.m_FallbackFontAssetTable = i1278
  var i1281 = i1267[31]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('TMPro.TMP_FontWeightPair', i1281[i + 0]) );
  }
  i1266.m_FontWeightTable = i1280
  var i1283 = i1267[32]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('TMPro.TMP_FontWeightPair', i1283[i + 0]) );
  }
  i1266.fontWeights = i1282
  i1266.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1267[33], i1266.m_fontInfo)
  var i1285 = i1267[34]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Glyph', i1285[i + 0]));
  }
  i1266.m_glyphInfoList = i1284
  i1266.m_KerningTable = request.d('TMPro.KerningTable', i1267[35], i1266.m_KerningTable)
  var i1287 = i1267[36]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1266.fallbackFontAssets = i1286
  i1266.m_Version = i1267[37]
  i1266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1267[38], i1266.m_FaceInfo)
  request.r(i1267[39], i1267[40], 0, i1266, 'm_Material')
  return i1266
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1289 = data
  i1288.sourceFontFileName = i1289[0]
  i1288.sourceFontFileGUID = i1289[1]
  i1288.faceIndex = i1289[2]
  i1288.pointSizeSamplingMode = i1289[3]
  i1288.pointSize = i1289[4]
  i1288.padding = i1289[5]
  i1288.paddingMode = i1289[6]
  i1288.packingMode = i1289[7]
  i1288.atlasWidth = i1289[8]
  i1288.atlasHeight = i1289[9]
  i1288.characterSetSelectionMode = i1289[10]
  i1288.characterSequence = i1289[11]
  i1288.referencedFontAssetGUID = i1289[12]
  i1288.referencedTextAssetGUID = i1289[13]
  i1288.fontStyle = i1289[14]
  i1288.fontStyleModifier = i1289[15]
  i1288.renderMode = i1289[16]
  i1288.includeFontFeatures = !!i1289[17]
  return i1288
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1293 = data
  i1292.m_Index = i1293[0]
  i1292.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1293[1], i1292.m_Metrics)
  i1292.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1293[2], i1292.m_GlyphRect)
  i1292.m_Scale = i1293[3]
  i1292.m_AtlasIndex = i1293[4]
  i1292.m_ClassDefinitionType = i1293[5]
  return i1292
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1295 = data
  i1294.m_Width = i1295[0]
  i1294.m_Height = i1295[1]
  i1294.m_HorizontalBearingX = i1295[2]
  i1294.m_HorizontalBearingY = i1295[3]
  i1294.m_HorizontalAdvance = i1295[4]
  return i1294
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1297 = data
  i1296.m_X = i1297[0]
  i1296.m_Y = i1297[1]
  i1296.m_Width = i1297[2]
  i1296.m_Height = i1297[3]
  return i1296
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Character' )
  var i1301 = data
  i1300.m_ElementType = i1301[0]
  i1300.m_Unicode = i1301[1]
  i1300.m_GlyphIndex = i1301[2]
  i1300.m_Scale = i1301[3]
  return i1300
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.MultipleSubstitutionRecord', i1309[i + 0]));
  }
  i1306.m_MultipleSubstitutionRecords = i1308
  var i1311 = i1307[1]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.LigatureSubstitutionRecord', i1311[i + 0]));
  }
  i1306.m_LigatureSubstitutionRecords = i1310
  var i1313 = i1307[2]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1313[i + 0]));
  }
  i1306.m_GlyphPairAdjustmentRecords = i1312
  var i1315 = i1307[3]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1315[i + 0]));
  }
  i1306.m_MarkToBaseAdjustmentRecords = i1314
  var i1317 = i1307[4]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1317[i + 0]));
  }
  i1306.m_MarkToMarkAdjustmentRecords = i1316
  return i1306
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1321 = data
  i1320.m_TargetGlyphID = i1321[0]
  i1320.m_SubstituteGlyphIDs = i1321[1]
  return i1320
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1325 = data
  i1324.m_ComponentGlyphIDs = i1325[0]
  i1324.m_LigatureGlyphID = i1325[1]
  return i1324
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1329 = data
  i1328.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1329[0], i1328.m_FirstAdjustmentRecord)
  i1328.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1329[1], i1328.m_SecondAdjustmentRecord)
  i1328.m_FeatureLookupFlags = i1329[2]
  return i1328
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1333 = data
  i1332.m_BaseGlyphID = i1333[0]
  i1332.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1333[1], i1332.m_BaseGlyphAnchorPoint)
  i1332.m_MarkGlyphID = i1333[2]
  i1332.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1333[3], i1332.m_MarkPositionAdjustment)
  return i1332
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1337 = data
  i1336.m_BaseMarkGlyphID = i1337[0]
  i1336.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1337[1], i1336.m_BaseMarkGlyphAnchorPoint)
  i1336.m_CombiningMarkGlyphID = i1337[2]
  i1336.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1337[3], i1336.m_CombiningMarkPositionAdjustment)
  return i1336
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'regularTypeface')
  request.r(i1343[2], i1343[3], 0, i1342, 'italicTypeface')
  return i1342
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1345 = data
  i1344.Name = i1345[0]
  i1344.PointSize = i1345[1]
  i1344.Scale = i1345[2]
  i1344.CharacterCount = i1345[3]
  i1344.LineHeight = i1345[4]
  i1344.Baseline = i1345[5]
  i1344.Ascender = i1345[6]
  i1344.CapHeight = i1345[7]
  i1344.Descender = i1345[8]
  i1344.CenterLine = i1345[9]
  i1344.SuperscriptOffset = i1345[10]
  i1344.SubscriptOffset = i1345[11]
  i1344.SubSize = i1345[12]
  i1344.Underline = i1345[13]
  i1344.UnderlineThickness = i1345[14]
  i1344.strikethrough = i1345[15]
  i1344.strikethroughThickness = i1345[16]
  i1344.TabWidth = i1345[17]
  i1344.Padding = i1345[18]
  i1344.AtlasWidth = i1345[19]
  i1344.AtlasHeight = i1345[20]
  return i1344
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1349 = data
  i1348.id = i1349[0]
  i1348.x = i1349[1]
  i1348.y = i1349[2]
  i1348.width = i1349[3]
  i1348.height = i1349[4]
  i1348.xOffset = i1349[5]
  i1348.yOffset = i1349[6]
  i1348.xAdvance = i1349[7]
  i1348.scale = i1349[8]
  return i1348
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.KerningTable' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.KerningPair', i1353[i + 0]));
  }
  i1350.kerningPairs = i1352
  return i1350
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.KerningPair' )
  var i1357 = data
  i1356.xOffset = i1357[0]
  i1356.m_FirstGlyph = i1357[1]
  i1356.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1357[2], i1356.m_FirstGlyphAdjustments)
  i1356.m_SecondGlyph = i1357[3]
  i1356.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1357[4], i1356.m_SecondGlyphAdjustments)
  i1356.m_IgnoreSpacingAdjustments = !!i1357[5]
  return i1356
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1359 = data
  i1358.m_FaceIndex = i1359[0]
  i1358.m_FamilyName = i1359[1]
  i1358.m_StyleName = i1359[2]
  i1358.m_PointSize = i1359[3]
  i1358.m_Scale = i1359[4]
  i1358.m_UnitsPerEM = i1359[5]
  i1358.m_LineHeight = i1359[6]
  i1358.m_AscentLine = i1359[7]
  i1358.m_CapLine = i1359[8]
  i1358.m_MeanLine = i1359[9]
  i1358.m_Baseline = i1359[10]
  i1358.m_DescentLine = i1359[11]
  i1358.m_SuperscriptOffset = i1359[12]
  i1358.m_SuperscriptSize = i1359[13]
  i1358.m_SubscriptOffset = i1359[14]
  i1358.m_SubscriptSize = i1359[15]
  i1358.m_UnderlineOffset = i1359[16]
  i1358.m_UnderlineThickness = i1359[17]
  i1358.m_StrikethroughOffset = i1359[18]
  i1358.m_StrikethroughThickness = i1359[19]
  i1358.m_TabWidth = i1359[20]
  return i1358
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1360 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 2, i1362, '')
  }
  i1360.atlasAssets = i1362
  i1360.scale = i1361[1]
  request.r(i1361[2], i1361[3], 0, i1360, 'skeletonJSON')
  i1360.isUpgradingBlendModeMaterials = !!i1361[4]
  i1360.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1361[5], i1360.blendModeMaterials)
  var i1365 = i1361[6]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 1, i1364, '')
  }
  i1360.skeletonDataModifiers = i1364
  var i1367 = i1361[7]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( i1367[i + 0] );
  }
  i1360.fromAnimation = i1366
  var i1369 = i1361[8]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( i1369[i + 0] );
  }
  i1360.toAnimation = i1368
  i1360.duration = i1361[9]
  i1360.defaultMix = i1361[10]
  request.r(i1361[11], i1361[12], 0, i1360, 'controller')
  return i1360
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1372 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1373 = data
  i1372.applyAdditiveMaterial = !!i1373[0]
  var i1375 = i1373[1]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1375[i + 0]));
  }
  i1372.additiveMaterials = i1374
  var i1377 = i1373[2]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1377[i + 0]));
  }
  i1372.multiplyMaterials = i1376
  var i1379 = i1373[3]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1379[i + 0]));
  }
  i1372.screenMaterials = i1378
  i1372.requiresBlendModeMaterials = !!i1373[4]
  return i1372
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1382 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1383 = data
  i1382.pageName = i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'material')
  return i1382
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1386 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'atlasFile')
  var i1389 = i1387[2]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 2, i1388, '')
  }
  i1386.materials = i1388
  return i1386
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1391 = data
  i1390.useSafeMode = !!i1391[0]
  i1390.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1391[1], i1390.safeModeOptions)
  i1390.timeScale = i1391[2]
  i1390.unscaledTimeScale = i1391[3]
  i1390.useSmoothDeltaTime = !!i1391[4]
  i1390.maxSmoothUnscaledTime = i1391[5]
  i1390.rewindCallbackMode = i1391[6]
  i1390.showUnityEditorReport = !!i1391[7]
  i1390.logBehaviour = i1391[8]
  i1390.drawGizmos = !!i1391[9]
  i1390.defaultRecyclable = !!i1391[10]
  i1390.defaultAutoPlay = i1391[11]
  i1390.defaultUpdateType = i1391[12]
  i1390.defaultTimeScaleIndependent = !!i1391[13]
  i1390.defaultEaseType = i1391[14]
  i1390.defaultEaseOvershootOrAmplitude = i1391[15]
  i1390.defaultEasePeriod = i1391[16]
  i1390.defaultAutoKill = !!i1391[17]
  i1390.defaultLoopType = i1391[18]
  i1390.debugMode = !!i1391[19]
  i1390.debugStoreTargetId = !!i1391[20]
  i1390.showPreviewPanel = !!i1391[21]
  i1390.storeSettingsLocation = i1391[22]
  i1390.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1391[23], i1390.modules)
  i1390.createASMDEF = !!i1391[24]
  i1390.showPlayingTweens = !!i1391[25]
  i1390.showPausedTweens = !!i1391[26]
  return i1390
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1392 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1393 = data
  i1392.logBehaviour = i1393[0]
  i1392.nestedTweenFailureBehaviour = i1393[1]
  return i1392
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1394 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1395 = data
  i1394.showPanel = !!i1395[0]
  i1394.audioEnabled = !!i1395[1]
  i1394.physicsEnabled = !!i1395[2]
  i1394.physics2DEnabled = !!i1395[3]
  i1394.spriteEnabled = !!i1395[4]
  i1394.uiEnabled = !!i1395[5]
  i1394.uiToolkitEnabled = !!i1395[6]
  i1394.textMeshProEnabled = !!i1395[7]
  i1394.tk2DEnabled = !!i1395[8]
  i1394.deAudioEnabled = !!i1395[9]
  i1394.deUnityExtendedEnabled = !!i1395[10]
  i1394.epoOutlineEnabled = !!i1395[11]
  return i1394
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_Settings' )
  var i1397 = data
  i1396.assetVersion = i1397[0]
  i1396.m_TextWrappingMode = i1397[1]
  i1396.m_enableKerning = !!i1397[2]
  var i1399 = i1397[3]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.add(i1399[i + 0]);
  }
  i1396.m_ActiveFontFeatures = i1398
  i1396.m_enableExtraPadding = !!i1397[4]
  i1396.m_enableTintAllSprites = !!i1397[5]
  i1396.m_enableParseEscapeCharacters = !!i1397[6]
  i1396.m_EnableRaycastTarget = !!i1397[7]
  i1396.m_GetFontFeaturesAtRuntime = !!i1397[8]
  i1396.m_missingGlyphCharacter = i1397[9]
  i1396.m_ClearDynamicDataOnBuild = !!i1397[10]
  i1396.m_warningsDisabled = !!i1397[11]
  request.r(i1397[12], i1397[13], 0, i1396, 'm_defaultFontAsset')
  i1396.m_defaultFontAssetPath = i1397[14]
  i1396.m_defaultFontSize = i1397[15]
  i1396.m_defaultAutoSizeMinRatio = i1397[16]
  i1396.m_defaultAutoSizeMaxRatio = i1397[17]
  i1396.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1397[18], i1397[19] )
  i1396.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1397[20], i1397[21] )
  i1396.m_autoSizeTextContainer = !!i1397[22]
  i1396.m_IsTextObjectScaleStatic = !!i1397[23]
  var i1401 = i1397[24]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1401.length; i += 2) {
  request.r(i1401[i + 0], i1401[i + 1], 1, i1400, '')
  }
  i1396.m_fallbackFontAssets = i1400
  i1396.m_matchMaterialPreset = !!i1397[25]
  i1396.m_HideSubTextObjects = !!i1397[26]
  request.r(i1397[27], i1397[28], 0, i1396, 'm_defaultSpriteAsset')
  i1396.m_defaultSpriteAssetPath = i1397[29]
  i1396.m_enableEmojiSupport = !!i1397[30]
  i1396.m_MissingCharacterSpriteUnicode = i1397[31]
  var i1403 = i1397[32]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 1, i1402, '')
  }
  i1396.m_EmojiFallbackTextAssets = i1402
  i1396.m_defaultColorGradientPresetsPath = i1397[33]
  request.r(i1397[34], i1397[35], 0, i1396, 'm_defaultStyleSheet')
  i1396.m_StyleSheetsResourcePath = i1397[36]
  request.r(i1397[37], i1397[38], 0, i1396, 'm_leadingCharacters')
  request.r(i1397[39], i1397[40], 0, i1396, 'm_followingCharacters')
  i1396.m_UseModernHangulLineBreakingRules = !!i1397[41]
  return i1396
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'spriteSheet')
  var i1409 = i1407[2]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('TMPro.TMP_Sprite', i1409[i + 0]));
  }
  i1406.spriteInfoList = i1408
  var i1411 = i1407[3]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.fallbackSpriteAssets = i1410
  var i1413 = i1407[4]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('TMPro.TMP_SpriteCharacter', i1413[i + 0]));
  }
  i1406.m_SpriteCharacterTable = i1412
  var i1415 = i1407[5]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('TMPro.TMP_SpriteGlyph', i1415[i + 0]));
  }
  i1406.m_GlyphTable = i1414
  i1406.m_Version = i1407[6]
  i1406.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1407[7], i1406.m_FaceInfo)
  request.r(i1407[8], i1407[9], 0, i1406, 'm_Material')
  return i1406
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.hashCode = i1419[1]
  i1418.unicode = i1419[2]
  i1418.pivot = new pc.Vec2( i1419[3], i1419[4] )
  request.r(i1419[5], i1419[6], 0, i1418, 'sprite')
  i1418.id = i1419[7]
  i1418.x = i1419[8]
  i1418.y = i1419[9]
  i1418.width = i1419[10]
  i1418.height = i1419[11]
  i1418.xOffset = i1419[12]
  i1418.yOffset = i1419[13]
  i1418.xAdvance = i1419[14]
  i1418.scale = i1419[15]
  return i1418
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1425 = data
  i1424.m_Name = i1425[0]
  i1424.m_ElementType = i1425[1]
  i1424.m_Unicode = i1425[2]
  i1424.m_GlyphIndex = i1425[3]
  i1424.m_Scale = i1425[4]
  return i1424
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'sprite')
  i1428.m_Index = i1429[2]
  i1428.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1429[3], i1428.m_Metrics)
  i1428.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1429[4], i1428.m_GlyphRect)
  i1428.m_Scale = i1429[5]
  i1428.m_AtlasIndex = i1429[6]
  i1428.m_ClassDefinitionType = i1429[7]
  return i1428
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.add(request.d('TMPro.TMP_Style', i1433[i + 0]));
  }
  i1430.m_StyleList = i1432
  return i1430
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Style' )
  var i1437 = data
  i1436.m_Name = i1437[0]
  i1436.m_HashCode = i1437[1]
  i1436.m_OpeningDefinition = i1437[2]
  i1436.m_ClosingDefinition = i1437[3]
  i1436.m_OpeningTagArray = i1437[4]
  i1436.m_ClosingTagArray = i1437[5]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1441[i + 0]) );
  }
  i1438.files = i1440
  i1438.componentToPrefabIds = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1445 = data
  i1444.path = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'unityObject')
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1449[i + 0]) );
  }
  i1446.scriptsExecutionOrder = i1448
  var i1451 = i1447[1]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1451[i + 0]) );
  }
  i1446.sortingLayers = i1450
  var i1453 = i1447[2]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1453[i + 0]) );
  }
  i1446.cullingLayers = i1452
  i1446.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1447[3], i1446.timeSettings)
  i1446.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1447[4], i1446.physicsSettings)
  i1446.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1447[5], i1446.physics2DSettings)
  i1446.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1447[6], i1446.qualitySettings)
  i1446.enableRealtimeShadows = !!i1447[7]
  i1446.enableAutoInstancing = !!i1447[8]
  i1446.enableStaticBatching = !!i1447[9]
  i1446.enableDynamicBatching = !!i1447[10]
  i1446.lightmapEncodingQuality = i1447[11]
  i1446.desiredColorSpace = i1447[12]
  var i1455 = i1447[13]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1446.allTags = i1454
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.value = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1463 = data
  i1462.id = i1463[0]
  i1462.name = i1463[1]
  i1462.value = i1463[2]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1467 = data
  i1466.id = i1467[0]
  i1466.name = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1469 = data
  i1468.fixedDeltaTime = i1469[0]
  i1468.maximumDeltaTime = i1469[1]
  i1468.timeScale = i1469[2]
  i1468.maximumParticleTimestep = i1469[3]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1471 = data
  i1470.gravity = new pc.Vec3( i1471[0], i1471[1], i1471[2] )
  i1470.defaultSolverIterations = i1471[3]
  i1470.bounceThreshold = i1471[4]
  i1470.autoSyncTransforms = !!i1471[5]
  i1470.autoSimulation = !!i1471[6]
  var i1473 = i1471[7]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1473[i + 0]) );
  }
  i1470.collisionMatrix = i1472
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.layerId = i1477[1]
  i1476.otherLayerId = i1477[2]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'material')
  i1478.gravity = new pc.Vec2( i1479[2], i1479[3] )
  i1478.positionIterations = i1479[4]
  i1478.velocityIterations = i1479[5]
  i1478.velocityThreshold = i1479[6]
  i1478.maxLinearCorrection = i1479[7]
  i1478.maxAngularCorrection = i1479[8]
  i1478.maxTranslationSpeed = i1479[9]
  i1478.maxRotationSpeed = i1479[10]
  i1478.baumgarteScale = i1479[11]
  i1478.baumgarteTOIScale = i1479[12]
  i1478.timeToSleep = i1479[13]
  i1478.linearSleepTolerance = i1479[14]
  i1478.angularSleepTolerance = i1479[15]
  i1478.defaultContactOffset = i1479[16]
  i1478.autoSimulation = !!i1479[17]
  i1478.queriesHitTriggers = !!i1479[18]
  i1478.queriesStartInColliders = !!i1479[19]
  i1478.callbacksOnDisable = !!i1479[20]
  i1478.reuseCollisionCallbacks = !!i1479[21]
  i1478.autoSyncTransforms = !!i1479[22]
  var i1481 = i1479[23]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1481[i + 0]) );
  }
  i1478.collisionMatrix = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.layerId = i1485[1]
  i1484.otherLayerId = i1485[2]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1489[i + 0]) );
  }
  i1486.qualityLevels = i1488
  var i1491 = i1487[1]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( i1491[i + 0] );
  }
  i1486.names = i1490
  i1486.shadows = i1487[2]
  i1486.anisotropicFiltering = i1487[3]
  i1486.antiAliasing = i1487[4]
  i1486.lodBias = i1487[5]
  i1486.shadowCascades = i1487[6]
  i1486.shadowDistance = i1487[7]
  i1486.shadowmaskMode = i1487[8]
  i1486.shadowProjection = i1487[9]
  i1486.shadowResolution = i1487[10]
  i1486.softParticles = !!i1487[11]
  i1486.softVegetation = !!i1487[12]
  i1486.activeColorSpace = i1487[13]
  i1486.desiredColorSpace = i1487[14]
  i1486.masterTextureLimit = i1487[15]
  i1486.maxQueuedFrames = i1487[16]
  i1486.particleRaycastBudget = i1487[17]
  i1486.pixelLightCount = i1487[18]
  i1486.realtimeReflectionProbes = !!i1487[19]
  i1486.shadowCascade2Split = i1487[20]
  i1486.shadowCascade4Split = new pc.Vec3( i1487[21], i1487[22], i1487[23] )
  i1486.streamingMipmapsActive = !!i1487[24]
  i1486.vSyncCount = i1487[25]
  i1486.asyncUploadBufferSize = i1487[26]
  i1486.asyncUploadTimeSlice = i1487[27]
  i1486.billboardsFaceCameraPosition = !!i1487[28]
  i1486.shadowNearPlaneOffset = i1487[29]
  i1486.streamingMipmapsMemoryBudget = i1487[30]
  i1486.maximumLODLevel = i1487[31]
  i1486.streamingMipmapsAddAllCameras = !!i1487[32]
  i1486.streamingMipmapsMaxLevelReduction = i1487[33]
  i1486.streamingMipmapsRenderersPerFrame = i1487[34]
  i1486.resolutionScalingFixedDPIFactor = i1487[35]
  i1486.streamingMipmapsMaxFileIORequests = i1487[36]
  i1486.currentQualityLevel = i1487[37]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1497 = data
  i1496.weight = i1497[0]
  i1496.vertices = i1497[1]
  i1496.normals = i1497[2]
  i1496.tangents = i1497[3]
  return i1496
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1499 = data
  i1498.m_GlyphIndex = i1499[0]
  i1498.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1499[1], i1498.m_GlyphValueRecord)
  return i1498
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1501 = data
  i1500.m_XCoordinate = i1501[0]
  i1500.m_YCoordinate = i1501[1]
  return i1500
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1502 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1503 = data
  i1502.m_XPositionAdjustment = i1503[0]
  i1502.m_YPositionAdjustment = i1503[1]
  return i1502
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1504 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1505 = data
  i1504.xPlacement = i1505[0]
  i1504.yPlacement = i1505[1]
  i1504.xAdvance = i1505[2]
  i1504.yAdvance = i1505[3]
  return i1504
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1507 = data
  i1506.m_XPlacement = i1507[0]
  i1506.m_YPlacement = i1507[1]
  i1506.m_XAdvance = i1507[2]
  i1506.m_YAdvance = i1507[3]
  return i1506
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[15],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[15],"97":[56],"98":[99],"100":[99],"14":[13],"51":[101],"47":[101],"102":[101],"103":[101],"104":[101],"105":[13],"106":[21,13],"53":[56],"107":[21,13],"108":[19,56],"109":[56],"110":[56,54],"111":[76],"112":[83],"113":[114],"115":[116],"117":[5],"118":[15],"119":[120],"121":[44],"122":[14],"123":[13],"124":[56,13],"22":[13,21],"125":[13],"126":[21,13],"127":[56],"128":[21,13],"129":[13],"130":[131],"132":[131],"133":[131],"134":[13],"135":[13],"18":[14],"24":[21,13],"136":[13],"17":[14],"137":[13],"138":[13],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[21,13],"147":[13],"148":[13],"149":[13],"150":[13],"151":[21,13],"152":[13],"153":[44],"154":[44],"45":[44],"155":[44],"156":[15],"157":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","Plate","Spoon","Item","Cake","Ply_ToggleEvent","SortChildByZPos","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","ItemDraggable","Ply_MoveToTarget","Pan","Bowl","ItemClickable","Capybara","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.SpriteMask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "3.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_Lv103";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1780";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4964";

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

Deserializers.buildID = "c45a66fe-6915-49c5-a7da-8e1d0383664e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

