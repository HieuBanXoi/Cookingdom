var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointSpring' )
  var i775 = data
  i774.spring = i775[0]
  i774.damper = i775[1]
  i774.targetPosition = i775[2]
  return i774
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointMotor' )
  var i777 = data
  i776.m_TargetVelocity = i777[0]
  i776.m_Force = i777[1]
  i776.m_FreeSpin = i777[2]
  return i776
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointLimits' )
  var i779 = data
  i778.m_Min = i779[0]
  i778.m_Max = i779[1]
  i778.m_Bounciness = i779[2]
  i778.m_BounceMinVelocity = i779[3]
  i778.m_ContactDistance = i779[4]
  i778.minBounce = i779[5]
  i778.maxBounce = i779[6]
  return i778
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointDrive' )
  var i781 = data
  i780.m_PositionSpring = i781[0]
  i780.m_PositionDamper = i781[1]
  i780.m_MaximumForce = i781[2]
  i780.m_UseAcceleration = i781[3]
  return i780
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i783 = data
  i782.m_Spring = i783[0]
  i782.m_Damper = i783[1]
  return i782
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i785 = data
  i784.m_Limit = i785[0]
  i784.m_Bounciness = i785[1]
  i784.m_ContactDistance = i785[2]
  return i784
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i787 = data
  i786.m_ExtremumSlip = i787[0]
  i786.m_ExtremumValue = i787[1]
  i786.m_AsymptoteSlip = i787[2]
  i786.m_AsymptoteValue = i787[3]
  i786.m_Stiffness = i787[4]
  return i786
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i789 = data
  i788.m_LowerAngle = i789[0]
  i788.m_UpperAngle = i789[1]
  return i788
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i791 = data
  i790.m_MotorSpeed = i791[0]
  i790.m_MaximumMotorTorque = i791[1]
  return i790
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i793 = data
  i792.m_DampingRatio = i793[0]
  i792.m_Frequency = i793[1]
  i792.m_Angle = i793[2]
  return i792
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i795 = data
  i794.m_LowerTranslation = i795[0]
  i794.m_UpperTranslation = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i796 = root || new pc.UnityMaterial()
  var i797 = data
  i796.name = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'shader')
  i796.renderQueue = i797[3]
  i796.enableInstancing = !!i797[4]
  var i799 = i797[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i799[i + 0]) );
  }
  i796.floatParameters = i798
  var i801 = i797[6]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i801[i + 0]) );
  }
  i796.colorParameters = i800
  var i803 = i797[7]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i803[i + 0]) );
  }
  i796.vectorParameters = i802
  var i805 = i797[8]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i805[i + 0]) );
  }
  i796.textureParameters = i804
  var i807 = i797[9]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i807[i + 0]) );
  }
  i796.materialFlags = i806
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i815 = data
  i814.name = i815[0]
  i814.value = new pc.Color(i815[1], i815[2], i815[3], i815[4])
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i819 = data
  i818.name = i819[0]
  i818.value = new pc.Vec4( i819[1], i819[2], i819[3], i819[4] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i823 = data
  i822.name = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'value')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i827 = data
  i826.name = i827[0]
  i826.enabled = !!i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i829 = data
  i828.name = i829[0]
  i828.width = i829[1]
  i828.height = i829[2]
  i828.mipmapCount = i829[3]
  i828.anisoLevel = i829[4]
  i828.filterMode = i829[5]
  i828.hdr = !!i829[6]
  i828.format = i829[7]
  i828.wrapMode = i829[8]
  i828.alphaIsTransparency = !!i829[9]
  i828.alphaSource = i829[10]
  i828.graphicsFormat = i829[11]
  i828.sRGBTexture = !!i829[12]
  i828.desiredColorSpace = i829[13]
  i828.wrapU = i829[14]
  i828.wrapV = i829[15]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i831 = data
  i830.position = new pc.Vec3( i831[0], i831[1], i831[2] )
  i830.scale = new pc.Vec3( i831[3], i831[4], i831[5] )
  i830.rotation = new pc.Quat(i831[6], i831[7], i831[8], i831[9])
  return i830
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i832 = root || request.c( 'HeartEffect' )
  var i833 = data
  i832.defaultLifeTime = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'tf')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i835 = data
  i834.color = new pc.Color(i835[0], i835[1], i835[2], i835[3])
  request.r(i835[4], i835[5], 0, i834, 'sprite')
  i834.flipX = !!i835[6]
  i834.flipY = !!i835[7]
  i834.drawMode = i835[8]
  i834.size = new pc.Vec2( i835[9], i835[10] )
  i834.tileMode = i835[11]
  i834.adaptiveModeThreshold = i835[12]
  i834.maskInteraction = i835[13]
  i834.spriteSortPoint = i835[14]
  i834.enabled = !!i835[15]
  request.r(i835[16], i835[17], 0, i834, 'sharedMaterial')
  var i837 = i835[18]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sharedMaterials = i836
  i834.receiveShadows = !!i835[19]
  i834.shadowCastingMode = i835[20]
  i834.sortingLayerID = i835[21]
  i834.sortingOrder = i835[22]
  i834.lightmapIndex = i835[23]
  i834.lightmapSceneIndex = i835[24]
  i834.lightmapScaleOffset = new pc.Vec4( i835[25], i835[26], i835[27], i835[28] )
  i834.lightProbeUsage = i835[29]
  i834.reflectionProbeUsage = i835[30]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i841 = data
  i840.name = i841[0]
  i840.tagId = i841[1]
  i840.enabled = !!i841[2]
  i840.isStatic = !!i841[3]
  i840.layer = i841[4]
  return i840
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i842 = root || request.c( 'HeartBreakEffect' )
  var i843 = data
  i842.defaultLifeTime = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'tf')
  return i842
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i844 = root || request.c( 'BlinkEffect' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'tf')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'mesh')
  i846.meshCount = i847[2]
  i846.activeVertexStreamsCount = i847[3]
  i846.alignment = i847[4]
  i846.renderMode = i847[5]
  i846.sortMode = i847[6]
  i846.lengthScale = i847[7]
  i846.velocityScale = i847[8]
  i846.cameraVelocityScale = i847[9]
  i846.normalDirection = i847[10]
  i846.sortingFudge = i847[11]
  i846.minParticleSize = i847[12]
  i846.maxParticleSize = i847[13]
  i846.pivot = new pc.Vec3( i847[14], i847[15], i847[16] )
  request.r(i847[17], i847[18], 0, i846, 'trailMaterial')
  i846.applyActiveColorSpace = !!i847[19]
  i846.enabled = !!i847[20]
  request.r(i847[21], i847[22], 0, i846, 'sharedMaterial')
  var i849 = i847[23]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.sharedMaterials = i848
  i846.receiveShadows = !!i847[24]
  i846.shadowCastingMode = i847[25]
  i846.sortingLayerID = i847[26]
  i846.sortingOrder = i847[27]
  i846.lightmapIndex = i847[28]
  i846.lightmapSceneIndex = i847[29]
  i846.lightmapScaleOffset = new pc.Vec4( i847[30], i847[31], i847[32], i847[33] )
  i846.lightProbeUsage = i847[34]
  i846.reflectionProbeUsage = i847[35]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i851 = data
  i850.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i851[0], i850.main)
  i850.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i851[1], i850.colorBySpeed)
  i850.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i851[2], i850.colorOverLifetime)
  i850.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i851[3], i850.emission)
  i850.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i851[4], i850.rotationBySpeed)
  i850.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i851[5], i850.rotationOverLifetime)
  i850.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i851[6], i850.shape)
  i850.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i851[7], i850.sizeBySpeed)
  i850.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i851[8], i850.sizeOverLifetime)
  i850.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i851[9], i850.textureSheetAnimation)
  i850.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i851[10], i850.velocityOverLifetime)
  i850.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i851[11], i850.noise)
  i850.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i851[12], i850.inheritVelocity)
  i850.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i851[13], i850.forceOverLifetime)
  i850.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i851[14], i850.limitVelocityOverLifetime)
  i850.useAutoRandomSeed = !!i851[15]
  i850.randomSeed = i851[16]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemMain()
  var i853 = data
  i852.duration = i853[0]
  i852.loop = !!i853[1]
  i852.prewarm = !!i853[2]
  i852.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.startDelay)
  i852.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[4], i852.startLifetime)
  i852.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[5], i852.startSpeed)
  i852.startSize3D = !!i853[6]
  i852.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[7], i852.startSizeX)
  i852.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[8], i852.startSizeY)
  i852.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[9], i852.startSizeZ)
  i852.startRotation3D = !!i853[10]
  i852.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[11], i852.startRotationX)
  i852.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[12], i852.startRotationY)
  i852.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[13], i852.startRotationZ)
  i852.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i853[14], i852.startColor)
  i852.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[15], i852.gravityModifier)
  i852.simulationSpace = i853[16]
  request.r(i853[17], i853[18], 0, i852, 'customSimulationSpace')
  i852.simulationSpeed = i853[19]
  i852.useUnscaledTime = !!i853[20]
  i852.scalingMode = i853[21]
  i852.playOnAwake = !!i853[22]
  i852.maxParticles = i853[23]
  i852.emitterVelocityMode = i853[24]
  i852.stopAction = i853[25]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i854 = root || new pc.MinMaxCurve()
  var i855 = data
  i854.mode = i855[0]
  i854.curveMin = new pc.AnimationCurve( { keys_flow: i855[1] } )
  i854.curveMax = new pc.AnimationCurve( { keys_flow: i855[2] } )
  i854.curveMultiplier = i855[3]
  i854.constantMin = i855[4]
  i854.constantMax = i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxGradient()
  var i857 = data
  i856.mode = i857[0]
  i856.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i857[1], i856.gradientMin)
  i856.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i857[2], i856.gradientMax)
  i856.colorMin = new pc.Color(i857[3], i857[4], i857[5], i857[6])
  i856.colorMax = new pc.Color(i857[7], i857[8], i857[9], i857[10])
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i859 = data
  i858.mode = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i861[i + 0]) );
  }
  i858.colorKeys = i860
  var i863 = i859[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i863[i + 0]) );
  }
  i858.alphaKeys = i862
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemColorBySpeed()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i865[1], i864.color)
  i864.range = new pc.Vec2( i865[2], i865[3] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i869 = data
  i868.color = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.time = i869[4]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i873 = data
  i872.alpha = i873[0]
  i872.time = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemColorOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i875[1], i874.color)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemEmitter()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.rateOverTime)
  i876.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.rateOverDistance)
  var i879 = i877[3]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i879[i + 0]) );
  }
  i876.bursts = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemBurst()
  var i883 = data
  i882.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[0], i882.count)
  i882.cycleCount = i883[1]
  i882.minCount = i883[2]
  i882.maxCount = i883[3]
  i882.repeatInterval = i883[4]
  i882.time = i883[5]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemRotationBySpeed()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  i884.range = new pc.Vec2( i885[5], i885[6] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationOverLifetime()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemShape()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.shapeType = i889[1]
  i888.randomDirectionAmount = i889[2]
  i888.sphericalDirectionAmount = i889[3]
  i888.randomPositionAmount = i889[4]
  i888.alignToDirection = !!i889[5]
  i888.radius = i889[6]
  i888.radiusMode = i889[7]
  i888.radiusSpread = i889[8]
  i888.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[9], i888.radiusSpeed)
  i888.radiusThickness = i889[10]
  i888.angle = i889[11]
  i888.length = i889[12]
  i888.boxThickness = new pc.Vec3( i889[13], i889[14], i889[15] )
  i888.meshShapeType = i889[16]
  request.r(i889[17], i889[18], 0, i888, 'mesh')
  request.r(i889[19], i889[20], 0, i888, 'meshRenderer')
  request.r(i889[21], i889[22], 0, i888, 'skinnedMeshRenderer')
  i888.useMeshMaterialIndex = !!i889[23]
  i888.meshMaterialIndex = i889[24]
  i888.useMeshColors = !!i889[25]
  i888.normalOffset = i889[26]
  i888.arc = i889[27]
  i888.arcMode = i889[28]
  i888.arcSpread = i889[29]
  i888.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[30], i888.arcSpeed)
  i888.donutRadius = i889[31]
  i888.position = new pc.Vec3( i889[32], i889[33], i889[34] )
  i888.rotation = new pc.Vec3( i889[35], i889[36], i889[37] )
  i888.scale = new pc.Vec3( i889[38], i889[39], i889[40] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemSizeBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.mode = i895[1]
  i894.animation = i895[2]
  i894.numTilesX = i895[3]
  i894.numTilesY = i895[4]
  i894.useRandomRow = !!i895[5]
  i894.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[6], i894.frameOverTime)
  i894.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[7], i894.startFrame)
  i894.cycleCount = i895[8]
  i894.rowIndex = i895[9]
  i894.flipU = i895[10]
  i894.flipV = i895[11]
  i894.spriteCount = i895[12]
  var i897 = i895[13]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.sprites = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.x)
  i900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.y)
  i900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.z)
  i900.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[4], i900.radial)
  i900.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[5], i900.speedModifier)
  i900.space = i901[6]
  i900.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[7], i900.orbitalX)
  i900.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[8], i900.orbitalY)
  i900.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[9], i900.orbitalZ)
  i900.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[10], i900.orbitalOffsetX)
  i900.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[11], i900.orbitalOffsetY)
  i900.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[12], i900.orbitalOffsetZ)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemNoise()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.separateAxes = !!i903[1]
  i902.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.strengthX)
  i902.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.strengthY)
  i902.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.strengthZ)
  i902.frequency = i903[5]
  i902.damping = !!i903[6]
  i902.octaveCount = i903[7]
  i902.octaveMultiplier = i903[8]
  i902.octaveScale = i903[9]
  i902.quality = i903[10]
  i902.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[11], i902.scrollSpeed)
  i902.scrollSpeedMultiplier = i903[12]
  i902.remapEnabled = !!i903[13]
  i902.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[14], i902.remapX)
  i902.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[15], i902.remapY)
  i902.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[16], i902.remapZ)
  i902.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[17], i902.positionAmount)
  i902.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[18], i902.rotationAmount)
  i902.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[19], i902.sizeAmount)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemInheritVelocity()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.mode = i905[1]
  i904.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.curve)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemForceOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.space = i907[4]
  i906.randomized = !!i907[5]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.limit)
  i908.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.limitX)
  i908.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.limitY)
  i908.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.limitZ)
  i908.dampen = i909[5]
  i908.separateAxes = !!i909[6]
  i908.space = i909[7]
  i908.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[8], i908.drag)
  i908.multiplyDragByParticleSize = !!i909[9]
  i908.multiplyDragByParticleVelocity = !!i909[10]
  return i908
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i910 = root || request.c( 'StarExploreFX' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'tf')
  return i910
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i912 = root || request.c( 'ProgressBar' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'fillTransform')
  request.r(i913[2], i913[3], 0, i912, 'tf')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i915 = data
  i914.pivot = new pc.Vec2( i915[0], i915[1] )
  i914.anchorMin = new pc.Vec2( i915[2], i915[3] )
  i914.anchorMax = new pc.Vec2( i915[4], i915[5] )
  i914.sizeDelta = new pc.Vec2( i915[6], i915[7] )
  i914.anchoredPosition3D = new pc.Vec3( i915[8], i915[9], i915[10] )
  i914.rotation = new pc.Quat(i915[11], i915[12], i915[13], i915[14])
  i914.scale = new pc.Vec3( i915[15], i915[16], i915[17] )
  return i914
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i916 = root || request.c( 'ClockTimer' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'fillImage')
  request.r(i917[2], i917[3], 0, i916, 'tf')
  i916.spawnZoomDuration = i917[4]
  i916.despawnZoomDuration = i917[5]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i919 = data
  i918.cullTransparentMesh = !!i919[0]
  return i918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Image' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Sprite')
  i920.m_Type = i921[2]
  i920.m_PreserveAspect = !!i921[3]
  i920.m_FillCenter = !!i921[4]
  i920.m_FillMethod = i921[5]
  i920.m_FillAmount = i921[6]
  i920.m_FillClockwise = !!i921[7]
  i920.m_FillOrigin = i921[8]
  i920.m_UseSpriteMesh = !!i921[9]
  i920.m_PixelsPerUnitMultiplier = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_Material')
  i920.m_Maskable = !!i921[13]
  i920.m_Color = new pc.Color(i921[14], i921[15], i921[16], i921[17])
  i920.m_RaycastTarget = !!i921[18]
  i920.m_RaycastPadding = new pc.Vec4( i921[19], i921[20], i921[21], i921[22] )
  return i920
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i922 = root || request.c( 'FlourSmoke' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'tf')
  return i922
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i924 = root || request.c( 'WaterSplash' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'tf')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i927 = data
  i926.name = i927[0]
  i926.halfPrecision = !!i927[1]
  i926.useSimplification = !!i927[2]
  i926.useUInt32IndexFormat = !!i927[3]
  i926.vertexCount = i927[4]
  i926.aabb = i927[5]
  var i929 = i927[6]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( !!i929[i + 0] );
  }
  i926.streams = i928
  i926.vertices = i927[7]
  var i931 = i927[8]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i931[i + 0]) );
  }
  i926.subMeshes = i930
  var i933 = i927[9]
  var i932 = []
  for(var i = 0; i < i933.length; i += 16) {
    i932.push( new pc.Mat4().setData(i933[i + 0], i933[i + 1], i933[i + 2], i933[i + 3],  i933[i + 4], i933[i + 5], i933[i + 6], i933[i + 7],  i933[i + 8], i933[i + 9], i933[i + 10], i933[i + 11],  i933[i + 12], i933[i + 13], i933[i + 14], i933[i + 15]) );
  }
  i926.bindposes = i932
  var i935 = i927[10]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i935[i + 0]) );
  }
  i926.blendShapes = i934
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i941 = data
  i940.triangles = i941[0]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i947 = data
  i946.name = i947[0]
  var i949 = i947[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i949[i + 0]) );
  }
  i946.frames = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i951 = data
  i950.name = i951[0]
  i950.index = i951[1]
  i950.startup = !!i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i953 = data
  i952.planeDistance = i953[0]
  i952.referencePixelsPerUnit = i953[1]
  i952.isFallbackOverlay = !!i953[2]
  i952.renderMode = i953[3]
  i952.renderOrder = i953[4]
  i952.sortingLayerName = i953[5]
  i952.sortingOrder = i953[6]
  i952.scaleFactor = i953[7]
  request.r(i953[8], i953[9], 0, i952, 'worldCamera')
  i952.overrideSorting = !!i953[10]
  i952.pixelPerfect = !!i953[11]
  i952.targetDisplay = i953[12]
  i952.overridePixelPerfect = !!i953[13]
  i952.enabled = !!i953[14]
  return i952
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i955 = data
  i954.m_UiScaleMode = i955[0]
  i954.m_ReferencePixelsPerUnit = i955[1]
  i954.m_ScaleFactor = i955[2]
  i954.m_ReferenceResolution = new pc.Vec2( i955[3], i955[4] )
  i954.m_ScreenMatchMode = i955[5]
  i954.m_MatchWidthOrHeight = i955[6]
  i954.m_PhysicalUnit = i955[7]
  i954.m_FallbackScreenDPI = i955[8]
  i954.m_DefaultSpriteDPI = i955[9]
  i954.m_DynamicPixelsPerUnit = i955[10]
  i954.m_PresetInfoIsWorld = !!i955[11]
  return i954
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i957 = data
  i956.m_IgnoreReversedGraphics = !!i957[0]
  i956.m_BlockingObjects = i957[1]
  i956.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i957[2] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'animatorController')
  request.r(i959[2], i959[3], 0, i958, 'avatar')
  i958.updateMode = i959[4]
  i958.hasTransformHierarchy = !!i959[5]
  i958.applyRootMotion = !!i959[6]
  var i961 = i959[7]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.humanBones = i960
  i958.enabled = !!i959[8]
  return i958
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i965 = data
  i964.m_hasFontAssetChanged = !!i965[0]
  request.r(i965[1], i965[2], 0, i964, 'm_baseMaterial')
  i964.m_maskOffset = new pc.Vec4( i965[3], i965[4], i965[5], i965[6] )
  i964.m_text = i965[7]
  i964.m_isRightToLeft = !!i965[8]
  request.r(i965[9], i965[10], 0, i964, 'm_fontAsset')
  request.r(i965[11], i965[12], 0, i964, 'm_sharedMaterial')
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.m_fontSharedMaterials = i966
  request.r(i965[14], i965[15], 0, i964, 'm_fontMaterial')
  var i969 = i965[16]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i964.m_fontMaterials = i968
  i964.m_fontColor32 = UnityEngine.Color32.ConstructColor(i965[17], i965[18], i965[19], i965[20])
  i964.m_fontColor = new pc.Color(i965[21], i965[22], i965[23], i965[24])
  i964.m_enableVertexGradient = !!i965[25]
  i964.m_colorMode = i965[26]
  i964.m_fontColorGradient = request.d('TMPro.VertexGradient', i965[27], i964.m_fontColorGradient)
  request.r(i965[28], i965[29], 0, i964, 'm_fontColorGradientPreset')
  request.r(i965[30], i965[31], 0, i964, 'm_spriteAsset')
  i964.m_tintAllSprites = !!i965[32]
  request.r(i965[33], i965[34], 0, i964, 'm_StyleSheet')
  i964.m_TextStyleHashCode = i965[35]
  i964.m_overrideHtmlColors = !!i965[36]
  i964.m_faceColor = UnityEngine.Color32.ConstructColor(i965[37], i965[38], i965[39], i965[40])
  i964.m_fontSize = i965[41]
  i964.m_fontSizeBase = i965[42]
  i964.m_fontWeight = i965[43]
  i964.m_enableAutoSizing = !!i965[44]
  i964.m_fontSizeMin = i965[45]
  i964.m_fontSizeMax = i965[46]
  i964.m_fontStyle = i965[47]
  i964.m_HorizontalAlignment = i965[48]
  i964.m_VerticalAlignment = i965[49]
  i964.m_textAlignment = i965[50]
  i964.m_characterSpacing = i965[51]
  i964.m_wordSpacing = i965[52]
  i964.m_lineSpacing = i965[53]
  i964.m_lineSpacingMax = i965[54]
  i964.m_paragraphSpacing = i965[55]
  i964.m_charWidthMaxAdj = i965[56]
  i964.m_TextWrappingMode = i965[57]
  i964.m_wordWrappingRatios = i965[58]
  i964.m_overflowMode = i965[59]
  request.r(i965[60], i965[61], 0, i964, 'm_linkedTextComponent')
  request.r(i965[62], i965[63], 0, i964, 'parentLinkedComponent')
  i964.m_enableKerning = !!i965[64]
  var i971 = i965[65]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(i971[i + 0]);
  }
  i964.m_ActiveFontFeatures = i970
  i964.m_enableExtraPadding = !!i965[66]
  i964.checkPaddingRequired = !!i965[67]
  i964.m_isRichText = !!i965[68]
  i964.m_parseCtrlCharacters = !!i965[69]
  i964.m_isOrthographic = !!i965[70]
  i964.m_isCullingEnabled = !!i965[71]
  i964.m_horizontalMapping = i965[72]
  i964.m_verticalMapping = i965[73]
  i964.m_uvLineOffset = i965[74]
  i964.m_geometrySortingOrder = i965[75]
  i964.m_IsTextObjectScaleStatic = !!i965[76]
  i964.m_VertexBufferAutoSizeReduction = !!i965[77]
  i964.m_useMaxVisibleDescender = !!i965[78]
  i964.m_pageToDisplay = i965[79]
  i964.m_margin = new pc.Vec4( i965[80], i965[81], i965[82], i965[83] )
  i964.m_isUsingLegacyAnimationComponent = !!i965[84]
  i964.m_isVolumetricText = !!i965[85]
  request.r(i965[86], i965[87], 0, i964, 'm_Material')
  i964.m_EmojiFallbackSupport = !!i965[88]
  i964.m_Maskable = !!i965[89]
  i964.m_Color = new pc.Color(i965[90], i965[91], i965[92], i965[93])
  i964.m_RaycastTarget = !!i965[94]
  i964.m_RaycastPadding = new pc.Vec4( i965[95], i965[96], i965[97], i965[98] )
  return i964
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.VertexGradient' )
  var i973 = data
  i972.topLeft = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  i972.topRight = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.bottomLeft = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  i972.bottomRight = new pc.Color(i973[12], i973[13], i973[14], i973[15])
  return i972
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.Button' )
  var i977 = data
  i976.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i977[0], i976.m_OnClick)
  i976.m_Navigation = request.d('UnityEngine.UI.Navigation', i977[1], i976.m_Navigation)
  i976.m_Transition = i977[2]
  i976.m_Colors = request.d('UnityEngine.UI.ColorBlock', i977[3], i976.m_Colors)
  i976.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i977[4], i976.m_SpriteState)
  i976.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i977[5], i976.m_AnimationTriggers)
  i976.m_Interactable = !!i977[6]
  request.r(i977[7], i977[8], 0, i976, 'm_TargetGraphic')
  return i976
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i979 = data
  i978.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i979[0], i978.m_PersistentCalls)
  return i978
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('UnityEngine.Events.PersistentCall', i983[i + 0]));
  }
  i980.m_Calls = i982
  return i980
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_Target')
  i986.m_TargetAssemblyTypeName = i987[2]
  i986.m_MethodName = i987[3]
  i986.m_Mode = i987[4]
  i986.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i987[5], i986.m_Arguments)
  i986.m_CallState = i987[6]
  return i986
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_ObjectArgument')
  i988.m_ObjectArgumentAssemblyTypeName = i989[2]
  i988.m_IntArgument = i989[3]
  i988.m_FloatArgument = i989[4]
  i988.m_StringArgument = i989[5]
  i988.m_BoolArgument = !!i989[6]
  return i988
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i991 = data
  i990.m_Mode = i991[0]
  i990.m_WrapAround = !!i991[1]
  request.r(i991[2], i991[3], 0, i990, 'm_SelectOnUp')
  request.r(i991[4], i991[5], 0, i990, 'm_SelectOnDown')
  request.r(i991[6], i991[7], 0, i990, 'm_SelectOnLeft')
  request.r(i991[8], i991[9], 0, i990, 'm_SelectOnRight')
  return i990
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i993 = data
  i992.m_NormalColor = new pc.Color(i993[0], i993[1], i993[2], i993[3])
  i992.m_HighlightedColor = new pc.Color(i993[4], i993[5], i993[6], i993[7])
  i992.m_PressedColor = new pc.Color(i993[8], i993[9], i993[10], i993[11])
  i992.m_SelectedColor = new pc.Color(i993[12], i993[13], i993[14], i993[15])
  i992.m_DisabledColor = new pc.Color(i993[16], i993[17], i993[18], i993[19])
  i992.m_ColorMultiplier = i993[20]
  i992.m_FadeDuration = i993[21]
  return i992
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'm_HighlightedSprite')
  request.r(i995[2], i995[3], 0, i994, 'm_PressedSprite')
  request.r(i995[4], i995[5], 0, i994, 'm_SelectedSprite')
  request.r(i995[6], i995[7], 0, i994, 'm_DisabledSprite')
  return i994
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i997 = data
  i996.m_NormalTrigger = i997[0]
  i996.m_HighlightedTrigger = i997[1]
  i996.m_PressedTrigger = i997[2]
  i996.m_SelectedTrigger = i997[3]
  i996.m_DisabledTrigger = i997[4]
  return i996
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i998 = root || request.c( 'Ply_Pool' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Ply_Pool+PoolAmount', i1001[i + 0]) );
  }
  i998.poolAmounts = i1000
  request.r(i999[1], i999[2], 0, i998, 'poolHolder')
  return i998
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i1004 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i1005 = data
  i1004.type = i1005[0]
  i1004.amount = i1005[1]
  request.r(i1005[2], i1005[3], 0, i1004, 'gameUnit')
  return i1004
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'Ply_SoundManager' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Ply_SoundManager+FxAudio', i1009[i + 0]) );
  }
  i1006.fxAudios = i1008
  var i1011 = i1007[1]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1006.audioClips = i1010
  request.r(i1007[2], i1007[3], 0, i1006, 'sound')
  return i1006
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i1014 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i1015 = data
  i1014.fxType = i1015[0]
  request.r(i1015[1], i1015[2], 0, i1014, 'audioClip')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'clip')
  request.r(i1019[2], i1019[3], 0, i1018, 'outputAudioMixerGroup')
  i1018.playOnAwake = !!i1019[4]
  i1018.loop = !!i1019[5]
  i1018.time = i1019[6]
  i1018.volume = i1019[7]
  i1018.pitch = i1019[8]
  i1018.enabled = !!i1019[9]
  return i1018
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1020 = root || request.c( 'GameManager' )
  var i1021 = data
  i1020.isPlaying = !!i1021[0]
  i1020.isTutorial = !!i1021[1]
  i1020.isGotoStore = !!i1021[2]
  i1020.isLoseGame = !!i1021[3]
  i1020.countMove = i1021[4]
  i1020.currentLayer = i1021[5]
  return i1020
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1022 = root || request.c( 'UIManager' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'winUI')
  request.r(i1023[2], i1023[3], 0, i1022, 'loseUI')
  request.r(i1023[4], i1023[5], 0, i1022, 'tutorial')
  request.r(i1023[6], i1023[7], 0, i1022, 'verticalUI')
  request.r(i1023[8], i1023[9], 0, i1022, 'horizontalUI')
  request.r(i1023[10], i1023[11], 0, i1022, 'downloadBtn')
  request.r(i1023[12], i1023[13], 0, i1022, 'horizontalDownloadBtn')
  i1022.isGoogleBuild = !!i1023[14]
  i1022.screenWidth = i1023[15]
  i1022.screenHeight = i1023[16]
  i1022.scaleHeightOnWidth = i1023[17]
  i1022.isVertical = !!i1023[18]
  i1022.isScreenVertical = !!i1023[19]
  request.r(i1023[20], i1023[21], 0, i1022, 'cam')
  i1022.verticalUIHeightOnWidthRatio = i1023[22]
  i1022.scaleCameraOnValidate = !!i1023[23]
  i1022.screenVerticalHeightOnWidthRatio = i1023[24]
  i1022.useContinuousScaling = !!i1023[25]
  i1022.baseOrthographicSize = i1023[26]
  i1022.baseAspect = i1023[27]
  i1022.landscapeSizeRatio = i1023[28]
  i1022.defaultPortraitSizeRatio = i1023[29]
  var i1025 = i1023[30]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('ScreenScaleStep', i1025[i + 0]));
  }
  i1022.discreteScaleSteps = i1024
  i1022.usePerspectiveCamera = !!i1023[31]
  request.r(i1023[32], i1023[33], 0, i1022, 'perspectiveFocus')
  i1022.perspectiveFocusDistance = i1023[34]
  i1022.perspectivePadding = i1023[35]
  i1022.fitRendererBounds = !!i1023[36]
  request.r(i1023[37], i1023[38], 0, i1022, 'boundsRoot')
  var i1027 = i1023[39]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1022.boundsRenderers = i1026
  return i1022
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i1030 = root || request.c( 'ScreenScaleStep' )
  var i1031 = data
  i1030.heightOnWidthRatio = i1031[0]
  i1030.orthographicSize = i1031[1]
  return i1030
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1034 = root || request.c( 'InputManager' )
  var i1035 = data
  i1034.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1035[0] )
  i1034.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i1035[1] )
  i1034.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1035[2] )
  i1034.isDragging = !!i1035[3]
  return i1034
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i1036 = root || request.c( 'HandTutManager' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1036.items = i1038
  request.r(i1037[1], i1037[2], 0, i1036, 'knife')
  request.r(i1037[3], i1037[4], 0, i1036, 'peeler')
  request.r(i1037[5], i1037[6], 0, i1036, 'handTutObject')
  request.r(i1037[7], i1037[8], 0, i1036, 'tapToCookObject')
  request.r(i1037[9], i1037[10], 0, i1036, 'oilItem')
  request.r(i1037[11], i1037[12], 0, i1036, 'stoveToggleEvent')
  request.r(i1037[13], i1037[14], 0, i1036, 'waterToggleEvent')
  request.r(i1037[15], i1037[16], 0, i1036, 'sinkBlock')
  var i1041 = i1037[17]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1036.itemsInWater = i1040
  i1036.noDelayItemCount = i1037[18]
  i1036.breakHeartNoDelayThreshold = i1037[19]
  i1036.maxHandTutShowCount = i1037[20]
  i1036.showSinkWaterTutorialOnStart = !!i1037[21]
  i1036.waitForBowlIntro = !!i1037[22]
  i1036.idleDelay = i1037[23]
  i1036.firstHandTutDelay = i1037[24]
  i1036.phaseHandTutDelay = i1037[25]
  i1036.moveDuration = i1037[26]
  i1036.dragFadeDuration = i1037[27]
  i1036.clickScaleDuration = i1037[28]
  i1036.waitAtEndDuration = i1037[29]
  i1036.handZPosition = i1037[30]
  i1036.clickScaleMultiplier = i1037[31]
  i1036.moveEase = i1037[32]
  return i1036
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i1046 = root || request.c( 'SortChildByZPos' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'transformToSort')
  var i1049 = i1047[2]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1046.childrenToSort = i1048
  i1046.zOffset = i1047[3]
  i1046.baseZ = i1047[4]
  return i1046
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i1052 = root || request.c( 'PhaseManager' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('PhaseData', i1055[i + 0]));
  }
  i1052.phases = i1054
  i1052.transitionDuration = i1053[1]
  i1052.delayBeforeNextPhase = i1053[2]
  i1052.offScreenLeftX = i1053[3]
  i1052.offScreenRightX = i1053[4]
  i1052.centerScreenX = i1053[5]
  request.r(i1053[6], i1053[7], 0, i1052, 'phaseTransitionObject')
  i1052.phaseTransitionObjectDuration = i1053[8]
  i1052.currentPhaseIndex = i1053[9]
  i1052.currentStepCount = i1053[10]
  return i1052
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1058 = root || request.c( 'PhaseData' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'phaseObject')
  i1058.totalSteps = i1059[2]
  i1058.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i1059[3], i1058.onPhaseReady)
  return i1058
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1061 = data
  i1060.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1061[0], i1060.m_PersistentCalls)
  return i1060
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i1062 = root || request.c( 'ItemTypeDoneManager' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i1065[i + 0]));
  }
  i1062.itemTypeGroups = i1064
  return i1062
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i1068 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i1069 = data
  i1068.itemType = i1069[0]
  var i1071 = i1069[1]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.items = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1073 = data
  i1072.aspect = i1073[0]
  i1072.orthographic = !!i1073[1]
  i1072.orthographicSize = i1073[2]
  i1072.backgroundColor = new pc.Color(i1073[3], i1073[4], i1073[5], i1073[6])
  i1072.nearClipPlane = i1073[7]
  i1072.farClipPlane = i1073[8]
  i1072.fieldOfView = i1073[9]
  i1072.depth = i1073[10]
  i1072.clearFlags = i1073[11]
  i1072.cullingMask = i1073[12]
  i1072.rect = i1073[13]
  request.r(i1073[14], i1073[15], 0, i1072, 'targetTexture')
  i1072.usePhysicalProperties = !!i1073[16]
  i1072.focalLength = i1073[17]
  i1072.sensorSize = new pc.Vec2( i1073[18], i1073[19] )
  i1072.lensShift = new pc.Vec2( i1073[20], i1073[21] )
  i1072.gateFit = i1073[22]
  i1072.commandBufferCount = i1073[23]
  i1072.cameraType = i1073[24]
  i1072.enabled = !!i1073[25]
  return i1072
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'm_FirstSelected')
  i1074.m_sendNavigationEvents = !!i1075[2]
  i1074.m_DragThreshold = i1075[3]
  return i1074
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1077 = data
  i1076.m_HorizontalAxis = i1077[0]
  i1076.m_VerticalAxis = i1077[1]
  i1076.m_SubmitButton = i1077[2]
  i1076.m_CancelButton = i1077[3]
  i1076.m_InputActionsPerSecond = i1077[4]
  i1076.m_RepeatDelay = i1077[5]
  i1076.m_ForceModuleActive = !!i1077[6]
  i1076.m_SendPointerHoverToParent = !!i1077[7]
  return i1076
}

Deserializers["Capybara"] = function (request, data, root) {
  var i1078 = root || request.c( 'Capybara' )
  var i1079 = data
  i1078.playSkinChangeMode = i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'popup1')
  request.r(i1079[3], i1079[4], 0, i1078, 'popup2')
  request.r(i1079[5], i1079[6], 0, i1078, 'tick')
  i1078.popupShowScale = i1079[7]
  i1078.popupShowDuration = i1079[8]
  i1078.popupHideDuration = i1079[9]
  i1078.popupHideDelay = i1079[10]
  request.r(i1079[11], i1079[12], 0, i1078, 'spawnHeartPoint')
  i1078.heartEffectScale = i1079[13]
  request.r(i1079[14], i1079[15], 0, i1078, 'skeletonAnimation')
  i1078.bassSkinName = i1079[16]
  i1078.skinChangeDelay = i1079[17]
  i1078.skinMoveYOffset = i1079[18]
  i1078.skinMoveDownDuration = i1079[19]
  i1078.skinMoveUpDuration = i1079[20]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1081 = data
  i1080.center = new pc.Vec3( i1081[0], i1081[1], i1081[2] )
  i1080.radius = i1081[3]
  i1080.enabled = !!i1081[4]
  i1080.isTrigger = !!i1081[5]
  request.r(i1081[6], i1081[7], 0, i1080, 'material')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'sharedMesh')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'additionalVertexStreams')
  i1084.enabled = !!i1085[2]
  request.r(i1085[3], i1085[4], 0, i1084, 'sharedMaterial')
  var i1087 = i1085[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1084.sharedMaterials = i1086
  i1084.receiveShadows = !!i1085[6]
  i1084.shadowCastingMode = i1085[7]
  i1084.sortingLayerID = i1085[8]
  i1084.sortingOrder = i1085[9]
  i1084.lightmapIndex = i1085[10]
  i1084.lightmapSceneIndex = i1085[11]
  i1084.lightmapScaleOffset = new pc.Vec4( i1085[12], i1085[13], i1085[14], i1085[15] )
  i1084.lightProbeUsage = i1085[16]
  i1084.reflectionProbeUsage = i1085[17]
  return i1084
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1088 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1089 = data
  i1088.loop = !!i1089[0]
  i1088.timeScale = i1089[1]
  request.r(i1089[2], i1089[3], 0, i1088, 'skeletonDataAsset')
  i1088.initialSkinName = i1089[4]
  i1088.fixPrefabOverrideViaMeshFilter = i1089[5]
  i1088.initialFlipX = !!i1089[6]
  i1088.initialFlipY = !!i1089[7]
  i1088.updateWhenInvisible = i1089[8]
  i1088.zSpacing = i1089[9]
  i1088.useClipping = !!i1089[10]
  i1088.immutableTriangles = !!i1089[11]
  i1088.pmaVertexColors = !!i1089[12]
  i1088.clearStateOnDisable = !!i1089[13]
  i1088.tintBlack = !!i1089[14]
  i1088.singleSubmesh = !!i1089[15]
  i1088.fixDrawOrder = !!i1089[16]
  i1088.addNormals = !!i1089[17]
  i1088.calculateTangents = !!i1089[18]
  i1088.maskInteraction = i1089[19]
  i1088.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1089[20], i1088.maskMaterials)
  i1088.disableRenderingOnOverride = !!i1089[21]
  i1088._animationName = i1089[22]
  var i1091 = i1089[23]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1088.separatorSlotNames = i1090
  return i1088
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1092 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.materialsMaskDisabled = i1094
  var i1097 = i1093[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1092.materialsInsideMask = i1096
  var i1099 = i1093[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1092.materialsOutsideMask = i1098
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1103 = data
  i1102.center = new pc.Vec3( i1103[0], i1103[1], i1103[2] )
  i1102.size = new pc.Vec3( i1103[3], i1103[4], i1103[5] )
  i1102.enabled = !!i1103[6]
  i1102.isTrigger = !!i1103[7]
  request.r(i1103[8], i1103[9], 0, i1102, 'material')
  return i1102
}

Deserializers["LastTray"] = function (request, data, root) {
  var i1104 = root || request.c( 'LastTray' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'tf')
  i1104.isShushiOn = !!i1105[2]
  i1104.isSauceOn = !!i1105[3]
  request.r(i1105[4], i1105[5], 0, i1104, 'shushiDone')
  request.r(i1105[6], i1105[7], 0, i1104, 'capybara')
  request.r(i1105[8], i1105[9], 0, i1104, 'items')
  i1104.isDone = !!i1105[10]
  i1104.onProcess = !!i1105[11]
  request.r(i1105[12], i1105[13], 0, i1104, 'itemDraggable')
  request.r(i1105[14], i1105[15], 0, i1104, 'itemClickable')
  request.r(i1105[16], i1105[17], 0, i1104, 'itemStirring')
  request.r(i1105[18], i1105[19], 0, i1104, 'itemKnifeSpriteMaskCutter')
  request.r(i1105[20], i1105[21], 0, i1104, 'itemSpriteMaskPainter')
  request.r(i1105[22], i1105[23], 0, i1104, 'itemDragSpriteMaskPainter')
  request.r(i1105[24], i1105[25], 0, i1104, 'itemMoveToTarget')
  request.r(i1105[26], i1105[27], 0, i1104, 'animator')
  i1104.itemType = i1105[28]
  request.r(i1105[29], i1105[30], 0, i1104, 'spriteRenderer')
  i1104.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1105[31], i1104.onKnifeIn)
  i1104.heartEffectScale = i1105[32]
  i1104.breakHeartEffectScale = i1105[33]
  i1104.blinkEffectScale = i1105[34]
  i1104.mergeEffectScale = i1105[35]
  i1104.playMoveToTargetFinishSound = !!i1105[36]
  i1104.moveToTargetFinishFxType = i1105[37]
  return i1104
}

Deserializers["Item"] = function (request, data, root) {
  var i1106 = root || request.c( 'Item' )
  var i1107 = data
  i1106.isDone = !!i1107[0]
  i1106.onProcess = !!i1107[1]
  request.r(i1107[2], i1107[3], 0, i1106, 'itemDraggable')
  request.r(i1107[4], i1107[5], 0, i1106, 'itemClickable')
  request.r(i1107[6], i1107[7], 0, i1106, 'itemStirring')
  request.r(i1107[8], i1107[9], 0, i1106, 'itemKnifeSpriteMaskCutter')
  request.r(i1107[10], i1107[11], 0, i1106, 'itemSpriteMaskPainter')
  request.r(i1107[12], i1107[13], 0, i1106, 'itemDragSpriteMaskPainter')
  request.r(i1107[14], i1107[15], 0, i1106, 'itemMoveToTarget')
  request.r(i1107[16], i1107[17], 0, i1106, 'animator')
  i1106.itemType = i1107[18]
  request.r(i1107[19], i1107[20], 0, i1106, 'spriteRenderer')
  i1106.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1107[21], i1106.onKnifeIn)
  i1106.heartEffectScale = i1107[22]
  i1106.breakHeartEffectScale = i1107[23]
  i1106.blinkEffectScale = i1107[24]
  i1106.mergeEffectScale = i1107[25]
  i1106.playMoveToTargetFinishSound = !!i1107[26]
  i1106.moveToTargetFinishFxType = i1107[27]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1109 = data
  i1108.center = new pc.Vec3( i1109[0], i1109[1], i1109[2] )
  i1108.radius = i1109[3]
  i1108.height = i1109[4]
  i1108.direction = i1109[5]
  i1108.enabled = !!i1109[6]
  i1108.isTrigger = !!i1109[7]
  request.r(i1109[8], i1109[9], 0, i1108, 'material')
  return i1108
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1110 = root || request.c( 'ItemDraggable' )
  var i1111 = data
  i1110.isDraggable = !!i1111[0]
  request.r(i1111[1], i1111[2], 0, i1110, 'returnTransform')
  i1110.setParentToReturnTransform = !!i1111[3]
  i1110.returnToExactReturnTransformPosition = !!i1111[4]
  i1110.targetItemType = i1111[5]
  request.r(i1111[6], i1111[7], 0, i1110, 'item')
  i1110.checkState = !!i1111[8]
  request.r(i1111[9], i1111[10], 0, i1110, 'shadowObject')
  i1110.playReturnToStartFinishSound = !!i1111[11]
  i1110.returnToStartFinishFxType = i1111[12]
  i1110.spawnBreakHeartOnDropFail = !!i1111[13]
  i1110.playBeginDragSound = !!i1111[14]
  i1110.beginDragFxType = i1111[15]
  i1110.liftOffset = i1111[16]
  i1110.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1111[17], i1110.onBeginDrag)
  i1110.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1111[18], i1110.onDropSuccess)
  i1110.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1111[19], i1110.onDropFail)
  i1110.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i1111[20], i1110.onReturnToStartComplete)
  return i1110
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i1112 = root || request.c( 'ItemMoveToTarget' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'defaultTarget')
  i1112.duration = i1113[2]
  i1112.easeType = i1113[3]
  i1112.moveType = i1113[4]
  i1112.jumpPower = i1113[5]
  i1112.numJumps = i1113[6]
  i1112.rotate360DuringJump = !!i1113[7]
  i1112.flipRotate = !!i1113[8]
  i1112.angleRotate = i1113[9]
  i1112.setParentToTarget = !!i1113[10]
  i1112.onComplete = request.d('UnityEngine.Events.UnityEvent', i1113[11], i1112.onComplete)
  i1112.lockInputWhileMoving = !!i1113[12]
  i1112.resetParentBeforeMove = !!i1113[13]
  return i1112
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1114 = root || request.c( 'ItemDragChildRotator' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'rotateTarget')
  i1114.dragEulerAngles = new pc.Vec3( i1115[2], i1115[3], i1115[4] )
  i1114.useLocalRotation = !!i1115[5]
  i1114.rotateRelative = !!i1115[6]
  i1114.rotateDuration = i1115[7]
  i1114.rotateEase = i1115[8]
  i1114.rotateMode = i1115[9]
  return i1114
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i1116 = root || request.c( 'ItemDragRaycastTarget' )
  var i1117 = data
  i1116.targetToFind = i1117[0]
  i1116.targetItemTypeWhenHit = i1117[1]
  i1116.targetItemTypeOnDropFail = i1117[2]
  request.r(i1117[3], i1117[4], 0, i1116, 'raycastPoint')
  i1116.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1117[5] )
  i1116.rayDistance = i1117[6]
  i1116.updateMoveDefaultTarget = !!i1117[7]
  i1116.invokeOnlyWhenTargetChanged = !!i1117[8]
  i1116.targetChangeEnabled = !!i1117[9]
  i1116.restoreTargetOnDropFail = !!i1117[10]
  i1116.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i1117[11], i1116.onTargetFound)
  i1116.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i1117[12], i1116.onTargetFoundWithItem)
  return i1116
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i1118 = root || request.c( 'ItemRaycastTargetEvent' )
  var i1119 = data
  i1118.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1119[0], i1118.m_PersistentCalls)
  return i1118
}

Deserializers["Chillie"] = function (request, data, root) {
  var i1120 = root || request.c( 'Chillie' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'targetBowl')
  i1120.isDone = !!i1121[2]
  i1120.onProcess = !!i1121[3]
  request.r(i1121[4], i1121[5], 0, i1120, 'itemDraggable')
  request.r(i1121[6], i1121[7], 0, i1120, 'itemClickable')
  request.r(i1121[8], i1121[9], 0, i1120, 'itemStirring')
  request.r(i1121[10], i1121[11], 0, i1120, 'itemKnifeSpriteMaskCutter')
  request.r(i1121[12], i1121[13], 0, i1120, 'itemSpriteMaskPainter')
  request.r(i1121[14], i1121[15], 0, i1120, 'itemDragSpriteMaskPainter')
  request.r(i1121[16], i1121[17], 0, i1120, 'itemMoveToTarget')
  request.r(i1121[18], i1121[19], 0, i1120, 'animator')
  i1120.itemType = i1121[20]
  request.r(i1121[21], i1121[22], 0, i1120, 'spriteRenderer')
  i1120.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1121[23], i1120.onKnifeIn)
  i1120.heartEffectScale = i1121[24]
  i1120.breakHeartEffectScale = i1121[25]
  i1120.blinkEffectScale = i1121[26]
  i1120.mergeEffectScale = i1121[27]
  i1120.playMoveToTargetFinishSound = !!i1121[28]
  i1120.moveToTargetFinishFxType = i1121[29]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1123 = data
  i1122.frontSortingLayerID = i1123[0]
  i1122.frontSortingOrder = i1123[1]
  i1122.backSortingLayerID = i1123[2]
  i1122.backSortingOrder = i1123[3]
  i1122.alphaCutoff = i1123[4]
  request.r(i1123[5], i1123[6], 0, i1122, 'sprite')
  i1122.tileMode = i1123[7]
  i1122.isCustomRangeActive = !!i1123[8]
  i1122.spriteSortPoint = i1123[9]
  i1122.enabled = !!i1123[10]
  request.r(i1123[11], i1123[12], 0, i1122, 'sharedMaterial')
  var i1125 = i1123[13]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.sharedMaterials = i1124
  i1122.receiveShadows = !!i1123[14]
  i1122.shadowCastingMode = i1123[15]
  i1122.sortingLayerID = i1123[16]
  i1122.sortingOrder = i1123[17]
  i1122.lightmapIndex = i1123[18]
  i1122.lightmapSceneIndex = i1123[19]
  i1122.lightmapScaleOffset = new pc.Vec4( i1123[20], i1123[21], i1123[22], i1123[23] )
  i1122.lightProbeUsage = i1123[24]
  i1122.reflectionProbeUsage = i1123[25]
  return i1122
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i1126 = root || request.c( 'CuttingBoard' )
  var i1127 = data
  i1126.punchScale = new pc.Vec3( i1127[0], i1127[1], i1127[2] )
  i1126.punchDuration = i1127[3]
  i1126.foodInCount = i1127[4]
  i1126.isRiceIn = !!i1127[5]
  request.r(i1127[6], i1127[7], 0, i1126, 'shushi')
  i1126.isDone = !!i1127[8]
  i1126.onProcess = !!i1127[9]
  request.r(i1127[10], i1127[11], 0, i1126, 'itemDraggable')
  request.r(i1127[12], i1127[13], 0, i1126, 'itemClickable')
  request.r(i1127[14], i1127[15], 0, i1126, 'itemStirring')
  request.r(i1127[16], i1127[17], 0, i1126, 'itemKnifeSpriteMaskCutter')
  request.r(i1127[18], i1127[19], 0, i1126, 'itemSpriteMaskPainter')
  request.r(i1127[20], i1127[21], 0, i1126, 'itemDragSpriteMaskPainter')
  request.r(i1127[22], i1127[23], 0, i1126, 'itemMoveToTarget')
  request.r(i1127[24], i1127[25], 0, i1126, 'animator')
  i1126.itemType = i1127[26]
  request.r(i1127[27], i1127[28], 0, i1126, 'spriteRenderer')
  i1126.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1127[29], i1126.onKnifeIn)
  i1126.heartEffectScale = i1127[30]
  i1126.breakHeartEffectScale = i1127[31]
  i1126.blinkEffectScale = i1127[32]
  i1126.mergeEffectScale = i1127[33]
  i1126.playMoveToTargetFinishSound = !!i1127[34]
  i1126.moveToTargetFinishFxType = i1127[35]
  return i1126
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1128 = root || request.c( 'ItemClickable' )
  var i1129 = data
  i1128.requiredClicks = i1129[0]
  i1128.infiniteClick = !!i1129[1]
  i1128.canClick = !!i1129[2]
  i1128.disableAfterClick = !!i1129[3]
  i1128.onClick = request.d('UnityEngine.Events.UnityEvent', i1129[4], i1128.onClick)
  var i1131 = i1129[5]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('UnityEngine.Events.UnityEvent', i1131[i + 0]));
  }
  i1128.sequentialOnClicks = i1130
  i1128.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1129[6], i1128.onClickComplete)
  return i1128
}

Deserializers["Shushi"] = function (request, data, root) {
  var i1134 = root || request.c( 'Shushi' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'knife')
  i1134.isDone = !!i1135[2]
  i1134.onProcess = !!i1135[3]
  request.r(i1135[4], i1135[5], 0, i1134, 'itemDraggable')
  request.r(i1135[6], i1135[7], 0, i1134, 'itemClickable')
  request.r(i1135[8], i1135[9], 0, i1134, 'itemStirring')
  request.r(i1135[10], i1135[11], 0, i1134, 'itemKnifeSpriteMaskCutter')
  request.r(i1135[12], i1135[13], 0, i1134, 'itemSpriteMaskPainter')
  request.r(i1135[14], i1135[15], 0, i1134, 'itemDragSpriteMaskPainter')
  request.r(i1135[16], i1135[17], 0, i1134, 'itemMoveToTarget')
  request.r(i1135[18], i1135[19], 0, i1134, 'animator')
  i1134.itemType = i1135[20]
  request.r(i1135[21], i1135[22], 0, i1134, 'spriteRenderer')
  i1134.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1135[23], i1134.onKnifeIn)
  i1134.heartEffectScale = i1135[24]
  i1134.breakHeartEffectScale = i1135[25]
  i1134.blinkEffectScale = i1135[26]
  i1134.mergeEffectScale = i1135[27]
  i1134.playMoveToTargetFinishSound = !!i1135[28]
  i1134.moveToTargetFinishFxType = i1135[29]
  return i1134
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i1136 = root || request.c( 'CuttingItem' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'itemKnife')
  request.r(i1137[2], i1137[3], 0, i1136, 'itemBeforeCut')
  request.r(i1137[4], i1137[5], 0, i1136, 'itemWaitToCut')
  request.r(i1137[6], i1137[7], 0, i1136, 'knifeBeforeCut')
  request.r(i1137[8], i1137[9], 0, i1136, 'knife')
  request.r(i1137[10], i1137[11], 0, i1136, 'cuttingBoard')
  request.r(i1137[12], i1137[13], 0, i1136, 'targetPlate')
  i1136.isOnBoard = !!i1137[14]
  i1136.targetPlateType = i1137[15]
  i1136.flyToDish = i1137[16]
  i1136.isFlyToDishAnim = !!i1137[17]
  i1136.cantCutOnFirst = !!i1137[18]
  i1136.isDone = !!i1137[19]
  i1136.onProcess = !!i1137[20]
  request.r(i1137[21], i1137[22], 0, i1136, 'itemDraggable')
  request.r(i1137[23], i1137[24], 0, i1136, 'itemClickable')
  request.r(i1137[25], i1137[26], 0, i1136, 'itemStirring')
  request.r(i1137[27], i1137[28], 0, i1136, 'itemKnifeSpriteMaskCutter')
  request.r(i1137[29], i1137[30], 0, i1136, 'itemSpriteMaskPainter')
  request.r(i1137[31], i1137[32], 0, i1136, 'itemDragSpriteMaskPainter')
  request.r(i1137[33], i1137[34], 0, i1136, 'itemMoveToTarget')
  request.r(i1137[35], i1137[36], 0, i1136, 'animator')
  i1136.itemType = i1137[37]
  request.r(i1137[38], i1137[39], 0, i1136, 'spriteRenderer')
  i1136.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1137[40], i1136.onKnifeIn)
  i1136.heartEffectScale = i1137[41]
  i1136.breakHeartEffectScale = i1137[42]
  i1136.blinkEffectScale = i1137[43]
  i1136.mergeEffectScale = i1137[44]
  i1136.playMoveToTargetFinishSound = !!i1137[45]
  i1136.moveToTargetFinishFxType = i1137[46]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1139 = data
  i1138.ambientIntensity = i1139[0]
  i1138.reflectionIntensity = i1139[1]
  i1138.ambientMode = i1139[2]
  i1138.ambientLight = new pc.Color(i1139[3], i1139[4], i1139[5], i1139[6])
  i1138.ambientSkyColor = new pc.Color(i1139[7], i1139[8], i1139[9], i1139[10])
  i1138.ambientGroundColor = new pc.Color(i1139[11], i1139[12], i1139[13], i1139[14])
  i1138.ambientEquatorColor = new pc.Color(i1139[15], i1139[16], i1139[17], i1139[18])
  i1138.fogColor = new pc.Color(i1139[19], i1139[20], i1139[21], i1139[22])
  i1138.fogEndDistance = i1139[23]
  i1138.fogStartDistance = i1139[24]
  i1138.fogDensity = i1139[25]
  i1138.fog = !!i1139[26]
  request.r(i1139[27], i1139[28], 0, i1138, 'skybox')
  i1138.fogMode = i1139[29]
  var i1141 = i1139[30]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1141[i + 0]) );
  }
  i1138.lightmaps = i1140
  i1138.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1139[31], i1138.lightProbes)
  i1138.lightmapsMode = i1139[32]
  i1138.mixedBakeMode = i1139[33]
  i1138.environmentLightingMode = i1139[34]
  i1138.ambientProbe = new pc.SphericalHarmonicsL2(i1139[35])
  i1138.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1139[36])
  i1138.useReferenceAmbientProbe = !!i1139[37]
  request.r(i1139[38], i1139[39], 0, i1138, 'customReflection')
  request.r(i1139[40], i1139[41], 0, i1138, 'defaultReflection')
  i1138.defaultReflectionMode = i1139[42]
  i1138.defaultReflectionResolution = i1139[43]
  i1138.sunLightObjectId = i1139[44]
  i1138.pixelLightCount = i1139[45]
  i1138.defaultReflectionHDR = !!i1139[46]
  i1138.hasLightDataAsset = !!i1139[47]
  i1138.hasManualGenerate = !!i1139[48]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'lightmapColor')
  request.r(i1145[2], i1145[3], 0, i1144, 'lightmapDirection')
  request.r(i1145[4], i1145[5], 0, i1144, 'shadowMask')
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1146 = root || new UnityEngine.LightProbes()
  var i1147 = data
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1157[i + 0]));
  }
  i1154.ShaderCompilationErrors = i1156
  i1154.name = i1155[1]
  i1154.guid = i1155[2]
  var i1159 = i1155[3]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1154.shaderDefinedKeywords = i1158
  var i1161 = i1155[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1161[i + 0]) );
  }
  i1154.passes = i1160
  var i1163 = i1155[5]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1163[i + 0]) );
  }
  i1154.usePasses = i1162
  var i1165 = i1155[6]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1165[i + 0]) );
  }
  i1154.defaultParameterValues = i1164
  request.r(i1155[7], i1155[8], 0, i1154, 'unityFallbackShader')
  i1154.readDepth = !!i1155[9]
  i1154.hasDepthOnlyPass = !!i1155[10]
  i1154.isCreatedByShaderGraph = !!i1155[11]
  i1154.disableBatching = !!i1155[12]
  i1154.compiled = !!i1155[13]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1169 = data
  i1168.shaderName = i1169[0]
  i1168.errorMessage = i1169[1]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1172 = root || new pc.UnityShaderPass()
  var i1173 = data
  i1172.id = i1173[0]
  i1172.subShaderIndex = i1173[1]
  i1172.name = i1173[2]
  i1172.passType = i1173[3]
  i1172.grabPassTextureName = i1173[4]
  i1172.usePass = !!i1173[5]
  i1172.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[6], i1172.zTest)
  i1172.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[7], i1172.zWrite)
  i1172.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[8], i1172.culling)
  i1172.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1173[9], i1172.blending)
  i1172.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1173[10], i1172.alphaBlending)
  i1172.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[11], i1172.colorWriteMask)
  i1172.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[12], i1172.offsetUnits)
  i1172.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[13], i1172.offsetFactor)
  i1172.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[14], i1172.stencilRef)
  i1172.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[15], i1172.stencilReadMask)
  i1172.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[16], i1172.stencilWriteMask)
  i1172.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[17], i1172.stencilOp)
  i1172.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[18], i1172.stencilOpFront)
  i1172.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[19], i1172.stencilOpBack)
  var i1175 = i1173[20]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1175[i + 0]) );
  }
  i1172.tags = i1174
  var i1177 = i1173[21]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1172.passDefinedKeywords = i1176
  var i1179 = i1173[22]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1179[i + 0]) );
  }
  i1172.passDefinedKeywordGroups = i1178
  var i1181 = i1173[23]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1181[i + 0]) );
  }
  i1172.variants = i1180
  var i1183 = i1173[24]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1183[i + 0]) );
  }
  i1172.excludedVariants = i1182
  i1172.hasDepthReader = !!i1173[25]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1185 = data
  i1184.val = i1185[0]
  i1184.name = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1187 = data
  i1186.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[0], i1186.src)
  i1186.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[1], i1186.dst)
  i1186.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[2], i1186.op)
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1189 = data
  i1188.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[0], i1188.pass)
  i1188.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[1], i1188.fail)
  i1188.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[2], i1188.zFail)
  i1188.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[3], i1188.comp)
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.value = i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1196.keywords = i1198
  i1196.hasDiscard = !!i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1203 = data
  i1202.passId = i1203[0]
  i1202.subShaderIndex = i1203[1]
  var i1205 = i1203[2]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1202.keywords = i1204
  i1202.vertexProgram = i1203[3]
  i1202.fragmentProgram = i1203[4]
  i1202.exportedForWebGl2 = !!i1203[5]
  i1202.readDepth = !!i1203[6]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'shader')
  i1208.pass = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.type = i1213[1]
  i1212.value = new pc.Vec4( i1213[2], i1213[3], i1213[4], i1213[5] )
  i1212.textureValue = i1213[6]
  i1212.shaderPropertyFlag = i1213[7]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1215 = data
  i1214.name = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'texture')
  i1214.aabb = i1215[3]
  i1214.vertices = i1215[4]
  i1214.triangles = i1215[5]
  i1214.textureRect = UnityEngine.Rect.MinMaxRect(i1215[6], i1215[7], i1215[8], i1215[9])
  i1214.packedRect = UnityEngine.Rect.MinMaxRect(i1215[10], i1215[11], i1215[12], i1215[13])
  i1214.border = new pc.Vec4( i1215[14], i1215[15], i1215[16], i1215[17] )
  i1214.transparency = i1215[18]
  i1214.bounds = i1215[19]
  i1214.pixelsPerUnit = i1215[20]
  i1214.textureWidth = i1215[21]
  i1214.textureHeight = i1215[22]
  i1214.nativeSize = new pc.Vec2( i1215[23], i1215[24] )
  i1214.pivot = new pc.Vec2( i1215[25], i1215[26] )
  i1214.textureRectOffset = new pc.Vec2( i1215[27], i1215[28] )
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1217 = data
  i1216.name = i1217[0]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.wrapMode = i1219[1]
  i1218.isLooping = !!i1219[2]
  i1218.length = i1219[3]
  var i1221 = i1219[4]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1221[i + 0]) );
  }
  i1218.curves = i1220
  var i1223 = i1219[5]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1223[i + 0]) );
  }
  i1218.events = i1222
  i1218.halfPrecision = !!i1219[6]
  i1218._frameRate = i1219[7]
  i1218.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1219[8], i1218.localBounds)
  i1218.hasMuscleCurves = !!i1219[9]
  var i1225 = i1219[10]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( i1225[i + 0] );
  }
  i1218.clipMuscleConstant = i1224
  i1218.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1219[11], i1218.clipBindingConstant)
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1229 = data
  i1228.path = i1229[0]
  i1228.hash = i1229[1]
  i1228.componentType = i1229[2]
  i1228.property = i1229[3]
  i1228.keys = i1229[4]
  var i1231 = i1229[5]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1231[i + 0]) );
  }
  i1228.objectReferenceKeys = i1230
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1235 = data
  i1234.time = i1235[0]
  request.r(i1235[1], i1235[2], 0, i1234, 'value')
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1239 = data
  i1238.functionName = i1239[0]
  i1238.floatParameter = i1239[1]
  i1238.intParameter = i1239[2]
  i1238.stringParameter = i1239[3]
  request.r(i1239[4], i1239[5], 0, i1238, 'objectReferenceParameter')
  i1238.time = i1239[6]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1241 = data
  i1240.center = new pc.Vec3( i1241[0], i1241[1], i1241[2] )
  i1240.extends = new pc.Vec3( i1241[3], i1241[4], i1241[5] )
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1244.genericBindings = i1246
  var i1249 = i1245[1]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1244.pptrCurveMapping = i1248
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1251 = data
  i1250.name = i1251[0]
  var i1253 = i1251[1]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1253[i + 0]) );
  }
  i1250.layers = i1252
  var i1255 = i1251[2]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1255[i + 0]) );
  }
  i1250.parameters = i1254
  i1250.animationClips = i1251[3]
  i1250.avatarUnsupported = i1251[4]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.defaultWeight = i1259[1]
  i1258.blendingMode = i1259[2]
  i1258.avatarMask = i1259[3]
  i1258.syncedLayerIndex = i1259[4]
  i1258.syncedLayerAffectsTiming = !!i1259[5]
  i1258.syncedLayers = i1259[6]
  i1258.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1259[7], i1258.stateMachine)
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1261 = data
  i1260.id = i1261[0]
  i1260.name = i1261[1]
  i1260.path = i1261[2]
  var i1263 = i1261[3]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1263[i + 0]) );
  }
  i1260.states = i1262
  var i1265 = i1261[4]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1265[i + 0]) );
  }
  i1260.machines = i1264
  var i1267 = i1261[5]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1267[i + 0]) );
  }
  i1260.entryStateTransitions = i1266
  var i1269 = i1261[6]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1269[i + 0]) );
  }
  i1260.exitStateTransitions = i1268
  var i1271 = i1261[7]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1271[i + 0]) );
  }
  i1260.anyStateTransitions = i1270
  i1260.defaultStateId = i1261[8]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1275 = data
  i1274.id = i1275[0]
  i1274.name = i1275[1]
  i1274.cycleOffset = i1275[2]
  i1274.cycleOffsetParameter = i1275[3]
  i1274.cycleOffsetParameterActive = !!i1275[4]
  i1274.mirror = !!i1275[5]
  i1274.mirrorParameter = i1275[6]
  i1274.mirrorParameterActive = !!i1275[7]
  i1274.motionId = i1275[8]
  i1274.nameHash = i1275[9]
  i1274.fullPathHash = i1275[10]
  i1274.speed = i1275[11]
  i1274.speedParameter = i1275[12]
  i1274.speedParameterActive = !!i1275[13]
  i1274.tag = i1275[14]
  i1274.tagHash = i1275[15]
  i1274.writeDefaultValues = !!i1275[16]
  var i1277 = i1275[17]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 2, i1276, '')
  }
  i1274.behaviours = i1276
  var i1279 = i1275[18]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1279[i + 0]) );
  }
  i1274.transitions = i1278
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1285 = data
  i1284.fullPath = i1285[0]
  i1284.canTransitionToSelf = !!i1285[1]
  i1284.duration = i1285[2]
  i1284.exitTime = i1285[3]
  i1284.hasExitTime = !!i1285[4]
  i1284.hasFixedDuration = !!i1285[5]
  i1284.interruptionSource = i1285[6]
  i1284.offset = i1285[7]
  i1284.orderedInterruption = !!i1285[8]
  i1284.destinationStateId = i1285[9]
  i1284.isExit = !!i1285[10]
  i1284.mute = !!i1285[11]
  i1284.solo = !!i1285[12]
  var i1287 = i1285[13]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1287[i + 0]) );
  }
  i1284.conditions = i1286
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1293 = data
  i1292.destinationStateId = i1293[0]
  i1292.isExit = !!i1293[1]
  i1292.mute = !!i1293[2]
  i1292.solo = !!i1293[3]
  var i1295 = i1293[4]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1295[i + 0]) );
  }
  i1292.conditions = i1294
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1299 = data
  i1298.defaultBool = !!i1299[0]
  i1298.defaultFloat = i1299[1]
  i1298.defaultInt = i1299[2]
  i1298.name = i1299[3]
  i1298.nameHash = i1299[4]
  i1298.type = i1299[5]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1303 = data
  i1302.mode = i1303[0]
  i1302.parameter = i1303[1]
  i1302.threshold = i1303[2]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1305 = data
  i1304.name = i1305[0]
  i1304.bytes64 = i1305[1]
  i1304.data = i1305[2]
  return i1304
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1307 = data
  i1306.normalStyle = i1307[0]
  i1306.normalSpacingOffset = i1307[1]
  i1306.boldStyle = i1307[2]
  i1306.boldSpacing = i1307[3]
  i1306.italicStyle = i1307[4]
  i1306.tabSize = i1307[5]
  request.r(i1307[6], i1307[7], 0, i1306, 'atlas')
  i1306.m_SourceFontFileGUID = i1307[8]
  i1306.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1307[9], i1306.m_CreationSettings)
  request.r(i1307[10], i1307[11], 0, i1306, 'm_SourceFontFile')
  i1306.m_SourceFontFilePath = i1307[12]
  i1306.m_AtlasPopulationMode = i1307[13]
  i1306.InternalDynamicOS = !!i1307[14]
  var i1309 = i1307[15]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('UnityEngine.TextCore.Glyph', i1309[i + 0]));
  }
  i1306.m_GlyphTable = i1308
  var i1311 = i1307[16]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.TMP_Character', i1311[i + 0]));
  }
  i1306.m_CharacterTable = i1310
  var i1313 = i1307[17]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 2, i1312, '')
  }
  i1306.m_AtlasTextures = i1312
  i1306.m_AtlasTextureIndex = i1307[18]
  i1306.m_IsMultiAtlasTexturesEnabled = !!i1307[19]
  i1306.m_GetFontFeatures = !!i1307[20]
  i1306.m_ClearDynamicDataOnBuild = !!i1307[21]
  i1306.m_AtlasWidth = i1307[22]
  i1306.m_AtlasHeight = i1307[23]
  i1306.m_AtlasPadding = i1307[24]
  i1306.m_AtlasRenderMode = i1307[25]
  var i1315 = i1307[26]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.GlyphRect', i1315[i + 0]));
  }
  i1306.m_UsedGlyphRects = i1314
  var i1317 = i1307[27]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('UnityEngine.TextCore.GlyphRect', i1317[i + 0]));
  }
  i1306.m_FreeGlyphRects = i1316
  i1306.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1307[28], i1306.m_FontFeatureTable)
  i1306.m_ShouldReimportFontFeatures = !!i1307[29]
  var i1319 = i1307[30]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1306.m_FallbackFontAssetTable = i1318
  var i1321 = i1307[31]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('TMPro.TMP_FontWeightPair', i1321[i + 0]) );
  }
  i1306.m_FontWeightTable = i1320
  var i1323 = i1307[32]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('TMPro.TMP_FontWeightPair', i1323[i + 0]) );
  }
  i1306.fontWeights = i1322
  i1306.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1307[33], i1306.m_fontInfo)
  var i1325 = i1307[34]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Glyph', i1325[i + 0]));
  }
  i1306.m_glyphInfoList = i1324
  i1306.m_KerningTable = request.d('TMPro.KerningTable', i1307[35], i1306.m_KerningTable)
  var i1327 = i1307[36]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1306.fallbackFontAssets = i1326
  i1306.m_Version = i1307[37]
  i1306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1307[38], i1306.m_FaceInfo)
  request.r(i1307[39], i1307[40], 0, i1306, 'm_Material')
  return i1306
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1329 = data
  i1328.sourceFontFileName = i1329[0]
  i1328.sourceFontFileGUID = i1329[1]
  i1328.faceIndex = i1329[2]
  i1328.pointSizeSamplingMode = i1329[3]
  i1328.pointSize = i1329[4]
  i1328.padding = i1329[5]
  i1328.paddingMode = i1329[6]
  i1328.packingMode = i1329[7]
  i1328.atlasWidth = i1329[8]
  i1328.atlasHeight = i1329[9]
  i1328.characterSetSelectionMode = i1329[10]
  i1328.characterSequence = i1329[11]
  i1328.referencedFontAssetGUID = i1329[12]
  i1328.referencedTextAssetGUID = i1329[13]
  i1328.fontStyle = i1329[14]
  i1328.fontStyleModifier = i1329[15]
  i1328.renderMode = i1329[16]
  i1328.includeFontFeatures = !!i1329[17]
  return i1328
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1333 = data
  i1332.m_Index = i1333[0]
  i1332.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1333[1], i1332.m_Metrics)
  i1332.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1333[2], i1332.m_GlyphRect)
  i1332.m_Scale = i1333[3]
  i1332.m_AtlasIndex = i1333[4]
  i1332.m_ClassDefinitionType = i1333[5]
  return i1332
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1335 = data
  i1334.m_Width = i1335[0]
  i1334.m_Height = i1335[1]
  i1334.m_HorizontalBearingX = i1335[2]
  i1334.m_HorizontalBearingY = i1335[3]
  i1334.m_HorizontalAdvance = i1335[4]
  return i1334
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1337 = data
  i1336.m_X = i1337[0]
  i1336.m_Y = i1337[1]
  i1336.m_Width = i1337[2]
  i1336.m_Height = i1337[3]
  return i1336
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Character' )
  var i1341 = data
  i1340.m_ElementType = i1341[0]
  i1340.m_Unicode = i1341[1]
  i1340.m_GlyphIndex = i1341[2]
  i1340.m_Scale = i1341[3]
  return i1340
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.MultipleSubstitutionRecord', i1349[i + 0]));
  }
  i1346.m_MultipleSubstitutionRecords = i1348
  var i1351 = i1347[1]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.LigatureSubstitutionRecord', i1351[i + 0]));
  }
  i1346.m_LigatureSubstitutionRecords = i1350
  var i1353 = i1347[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1353[i + 0]));
  }
  i1346.m_GlyphPairAdjustmentRecords = i1352
  var i1355 = i1347[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1355[i + 0]));
  }
  i1346.m_MarkToBaseAdjustmentRecords = i1354
  var i1357 = i1347[4]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1357[i + 0]));
  }
  i1346.m_MarkToMarkAdjustmentRecords = i1356
  return i1346
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1361 = data
  i1360.m_TargetGlyphID = i1361[0]
  i1360.m_SubstituteGlyphIDs = i1361[1]
  return i1360
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1365 = data
  i1364.m_ComponentGlyphIDs = i1365[0]
  i1364.m_LigatureGlyphID = i1365[1]
  return i1364
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1369 = data
  i1368.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1369[0], i1368.m_FirstAdjustmentRecord)
  i1368.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1369[1], i1368.m_SecondAdjustmentRecord)
  i1368.m_FeatureLookupFlags = i1369[2]
  return i1368
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1373 = data
  i1372.m_BaseGlyphID = i1373[0]
  i1372.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1373[1], i1372.m_BaseGlyphAnchorPoint)
  i1372.m_MarkGlyphID = i1373[2]
  i1372.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1373[3], i1372.m_MarkPositionAdjustment)
  return i1372
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1377 = data
  i1376.m_BaseMarkGlyphID = i1377[0]
  i1376.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1377[1], i1376.m_BaseMarkGlyphAnchorPoint)
  i1376.m_CombiningMarkGlyphID = i1377[2]
  i1376.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1377[3], i1376.m_CombiningMarkPositionAdjustment)
  return i1376
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'regularTypeface')
  request.r(i1383[2], i1383[3], 0, i1382, 'italicTypeface')
  return i1382
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1385 = data
  i1384.Name = i1385[0]
  i1384.PointSize = i1385[1]
  i1384.Scale = i1385[2]
  i1384.CharacterCount = i1385[3]
  i1384.LineHeight = i1385[4]
  i1384.Baseline = i1385[5]
  i1384.Ascender = i1385[6]
  i1384.CapHeight = i1385[7]
  i1384.Descender = i1385[8]
  i1384.CenterLine = i1385[9]
  i1384.SuperscriptOffset = i1385[10]
  i1384.SubscriptOffset = i1385[11]
  i1384.SubSize = i1385[12]
  i1384.Underline = i1385[13]
  i1384.UnderlineThickness = i1385[14]
  i1384.strikethrough = i1385[15]
  i1384.strikethroughThickness = i1385[16]
  i1384.TabWidth = i1385[17]
  i1384.Padding = i1385[18]
  i1384.AtlasWidth = i1385[19]
  i1384.AtlasHeight = i1385[20]
  return i1384
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1389 = data
  i1388.id = i1389[0]
  i1388.x = i1389[1]
  i1388.y = i1389[2]
  i1388.width = i1389[3]
  i1388.height = i1389[4]
  i1388.xOffset = i1389[5]
  i1388.yOffset = i1389[6]
  i1388.xAdvance = i1389[7]
  i1388.scale = i1389[8]
  return i1388
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.KerningTable' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('TMPro.KerningPair', i1393[i + 0]));
  }
  i1390.kerningPairs = i1392
  return i1390
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.KerningPair' )
  var i1397 = data
  i1396.xOffset = i1397[0]
  i1396.m_FirstGlyph = i1397[1]
  i1396.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1397[2], i1396.m_FirstGlyphAdjustments)
  i1396.m_SecondGlyph = i1397[3]
  i1396.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1397[4], i1396.m_SecondGlyphAdjustments)
  i1396.m_IgnoreSpacingAdjustments = !!i1397[5]
  return i1396
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1399 = data
  i1398.m_FaceIndex = i1399[0]
  i1398.m_FamilyName = i1399[1]
  i1398.m_StyleName = i1399[2]
  i1398.m_PointSize = i1399[3]
  i1398.m_Scale = i1399[4]
  i1398.m_UnitsPerEM = i1399[5]
  i1398.m_LineHeight = i1399[6]
  i1398.m_AscentLine = i1399[7]
  i1398.m_CapLine = i1399[8]
  i1398.m_MeanLine = i1399[9]
  i1398.m_Baseline = i1399[10]
  i1398.m_DescentLine = i1399[11]
  i1398.m_SuperscriptOffset = i1399[12]
  i1398.m_SuperscriptSize = i1399[13]
  i1398.m_SubscriptOffset = i1399[14]
  i1398.m_SubscriptSize = i1399[15]
  i1398.m_UnderlineOffset = i1399[16]
  i1398.m_UnderlineThickness = i1399[17]
  i1398.m_StrikethroughOffset = i1399[18]
  i1398.m_StrikethroughThickness = i1399[19]
  i1398.m_TabWidth = i1399[20]
  return i1398
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1400 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 2, i1402, '')
  }
  i1400.atlasAssets = i1402
  i1400.scale = i1401[1]
  request.r(i1401[2], i1401[3], 0, i1400, 'skeletonJSON')
  i1400.isUpgradingBlendModeMaterials = !!i1401[4]
  i1400.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1401[5], i1400.blendModeMaterials)
  var i1405 = i1401[6]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1405.length; i += 2) {
  request.r(i1405[i + 0], i1405[i + 1], 1, i1404, '')
  }
  i1400.skeletonDataModifiers = i1404
  var i1407 = i1401[7]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1400.fromAnimation = i1406
  var i1409 = i1401[8]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1400.toAnimation = i1408
  i1400.duration = i1401[9]
  i1400.defaultMix = i1401[10]
  request.r(i1401[11], i1401[12], 0, i1400, 'controller')
  return i1400
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1412 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1413 = data
  i1412.applyAdditiveMaterial = !!i1413[0]
  var i1415 = i1413[1]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1415[i + 0]));
  }
  i1412.additiveMaterials = i1414
  var i1417 = i1413[2]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1417[i + 0]));
  }
  i1412.multiplyMaterials = i1416
  var i1419 = i1413[3]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1419[i + 0]));
  }
  i1412.screenMaterials = i1418
  i1412.requiresBlendModeMaterials = !!i1413[4]
  return i1412
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1422 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1423 = data
  i1422.pageName = i1423[0]
  request.r(i1423[1], i1423[2], 0, i1422, 'material')
  return i1422
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1426 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'atlasFile')
  var i1429 = i1427[2]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 2) {
  request.r(i1429[i + 0], i1429[i + 1], 2, i1428, '')
  }
  i1426.materials = i1428
  return i1426
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1431 = data
  i1430.useSafeMode = !!i1431[0]
  i1430.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1431[1], i1430.safeModeOptions)
  i1430.timeScale = i1431[2]
  i1430.unscaledTimeScale = i1431[3]
  i1430.useSmoothDeltaTime = !!i1431[4]
  i1430.maxSmoothUnscaledTime = i1431[5]
  i1430.rewindCallbackMode = i1431[6]
  i1430.showUnityEditorReport = !!i1431[7]
  i1430.logBehaviour = i1431[8]
  i1430.drawGizmos = !!i1431[9]
  i1430.defaultRecyclable = !!i1431[10]
  i1430.defaultAutoPlay = i1431[11]
  i1430.defaultUpdateType = i1431[12]
  i1430.defaultTimeScaleIndependent = !!i1431[13]
  i1430.defaultEaseType = i1431[14]
  i1430.defaultEaseOvershootOrAmplitude = i1431[15]
  i1430.defaultEasePeriod = i1431[16]
  i1430.defaultAutoKill = !!i1431[17]
  i1430.defaultLoopType = i1431[18]
  i1430.debugMode = !!i1431[19]
  i1430.debugStoreTargetId = !!i1431[20]
  i1430.showPreviewPanel = !!i1431[21]
  i1430.storeSettingsLocation = i1431[22]
  i1430.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1431[23], i1430.modules)
  i1430.createASMDEF = !!i1431[24]
  i1430.showPlayingTweens = !!i1431[25]
  i1430.showPausedTweens = !!i1431[26]
  return i1430
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1432 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1433 = data
  i1432.logBehaviour = i1433[0]
  i1432.nestedTweenFailureBehaviour = i1433[1]
  return i1432
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1434 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1435 = data
  i1434.showPanel = !!i1435[0]
  i1434.audioEnabled = !!i1435[1]
  i1434.physicsEnabled = !!i1435[2]
  i1434.physics2DEnabled = !!i1435[3]
  i1434.spriteEnabled = !!i1435[4]
  i1434.uiEnabled = !!i1435[5]
  i1434.uiToolkitEnabled = !!i1435[6]
  i1434.textMeshProEnabled = !!i1435[7]
  i1434.tk2DEnabled = !!i1435[8]
  i1434.deAudioEnabled = !!i1435[9]
  i1434.deUnityExtendedEnabled = !!i1435[10]
  i1434.epoOutlineEnabled = !!i1435[11]
  return i1434
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Settings' )
  var i1437 = data
  i1436.assetVersion = i1437[0]
  i1436.m_TextWrappingMode = i1437[1]
  i1436.m_enableKerning = !!i1437[2]
  var i1439 = i1437[3]
  var i1438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.add(i1439[i + 0]);
  }
  i1436.m_ActiveFontFeatures = i1438
  i1436.m_enableExtraPadding = !!i1437[4]
  i1436.m_enableTintAllSprites = !!i1437[5]
  i1436.m_enableParseEscapeCharacters = !!i1437[6]
  i1436.m_EnableRaycastTarget = !!i1437[7]
  i1436.m_GetFontFeaturesAtRuntime = !!i1437[8]
  i1436.m_missingGlyphCharacter = i1437[9]
  i1436.m_ClearDynamicDataOnBuild = !!i1437[10]
  i1436.m_warningsDisabled = !!i1437[11]
  request.r(i1437[12], i1437[13], 0, i1436, 'm_defaultFontAsset')
  i1436.m_defaultFontAssetPath = i1437[14]
  i1436.m_defaultFontSize = i1437[15]
  i1436.m_defaultAutoSizeMinRatio = i1437[16]
  i1436.m_defaultAutoSizeMaxRatio = i1437[17]
  i1436.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1437[18], i1437[19] )
  i1436.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1437[20], i1437[21] )
  i1436.m_autoSizeTextContainer = !!i1437[22]
  i1436.m_IsTextObjectScaleStatic = !!i1437[23]
  var i1441 = i1437[24]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 1, i1440, '')
  }
  i1436.m_fallbackFontAssets = i1440
  i1436.m_matchMaterialPreset = !!i1437[25]
  i1436.m_HideSubTextObjects = !!i1437[26]
  request.r(i1437[27], i1437[28], 0, i1436, 'm_defaultSpriteAsset')
  i1436.m_defaultSpriteAssetPath = i1437[29]
  i1436.m_enableEmojiSupport = !!i1437[30]
  i1436.m_MissingCharacterSpriteUnicode = i1437[31]
  var i1443 = i1437[32]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1443.length; i += 2) {
  request.r(i1443[i + 0], i1443[i + 1], 1, i1442, '')
  }
  i1436.m_EmojiFallbackTextAssets = i1442
  i1436.m_defaultColorGradientPresetsPath = i1437[33]
  request.r(i1437[34], i1437[35], 0, i1436, 'm_defaultStyleSheet')
  i1436.m_StyleSheetsResourcePath = i1437[36]
  request.r(i1437[37], i1437[38], 0, i1436, 'm_leadingCharacters')
  request.r(i1437[39], i1437[40], 0, i1436, 'm_followingCharacters')
  i1436.m_UseModernHangulLineBreakingRules = !!i1437[41]
  return i1436
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'spriteSheet')
  var i1449 = i1447[2]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('TMPro.TMP_Sprite', i1449[i + 0]));
  }
  i1446.spriteInfoList = i1448
  var i1451 = i1447[3]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1451.length; i += 2) {
  request.r(i1451[i + 0], i1451[i + 1], 1, i1450, '')
  }
  i1446.fallbackSpriteAssets = i1450
  var i1453 = i1447[4]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.add(request.d('TMPro.TMP_SpriteCharacter', i1453[i + 0]));
  }
  i1446.m_SpriteCharacterTable = i1452
  var i1455 = i1447[5]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.add(request.d('TMPro.TMP_SpriteGlyph', i1455[i + 0]));
  }
  i1446.m_GlyphTable = i1454
  i1446.m_Version = i1447[6]
  i1446.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1447[7], i1446.m_FaceInfo)
  request.r(i1447[8], i1447[9], 0, i1446, 'm_Material')
  return i1446
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.hashCode = i1459[1]
  i1458.unicode = i1459[2]
  i1458.pivot = new pc.Vec2( i1459[3], i1459[4] )
  request.r(i1459[5], i1459[6], 0, i1458, 'sprite')
  i1458.id = i1459[7]
  i1458.x = i1459[8]
  i1458.y = i1459[9]
  i1458.width = i1459[10]
  i1458.height = i1459[11]
  i1458.xOffset = i1459[12]
  i1458.yOffset = i1459[13]
  i1458.xAdvance = i1459[14]
  i1458.scale = i1459[15]
  return i1458
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1464 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1465 = data
  i1464.m_Name = i1465[0]
  i1464.m_ElementType = i1465[1]
  i1464.m_Unicode = i1465[2]
  i1464.m_GlyphIndex = i1465[3]
  i1464.m_Scale = i1465[4]
  return i1464
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1469 = data
  request.r(i1469[0], i1469[1], 0, i1468, 'sprite')
  i1468.m_Index = i1469[2]
  i1468.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1469[3], i1468.m_Metrics)
  i1468.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1469[4], i1468.m_GlyphRect)
  i1468.m_Scale = i1469[5]
  i1468.m_AtlasIndex = i1469[6]
  i1468.m_ClassDefinitionType = i1469[7]
  return i1468
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.add(request.d('TMPro.TMP_Style', i1473[i + 0]));
  }
  i1470.m_StyleList = i1472
  return i1470
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1476 = root || request.c( 'TMPro.TMP_Style' )
  var i1477 = data
  i1476.m_Name = i1477[0]
  i1476.m_HashCode = i1477[1]
  i1476.m_OpeningDefinition = i1477[2]
  i1476.m_ClosingDefinition = i1477[3]
  i1476.m_OpeningTagArray = i1477[4]
  i1476.m_ClosingTagArray = i1477[5]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1479 = data
  var i1481 = i1479[0]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1481[i + 0]) );
  }
  i1478.files = i1480
  i1478.componentToPrefabIds = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1485 = data
  i1484.path = i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'unityObject')
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1489[i + 0]) );
  }
  i1486.scriptsExecutionOrder = i1488
  var i1491 = i1487[1]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1491[i + 0]) );
  }
  i1486.sortingLayers = i1490
  var i1493 = i1487[2]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1493[i + 0]) );
  }
  i1486.cullingLayers = i1492
  i1486.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1487[3], i1486.timeSettings)
  i1486.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1487[4], i1486.physicsSettings)
  i1486.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1487[5], i1486.physics2DSettings)
  i1486.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1487[6], i1486.qualitySettings)
  i1486.enableRealtimeShadows = !!i1487[7]
  i1486.enableAutoInstancing = !!i1487[8]
  i1486.enableStaticBatching = !!i1487[9]
  i1486.enableDynamicBatching = !!i1487[10]
  i1486.lightmapEncodingQuality = i1487[11]
  i1486.desiredColorSpace = i1487[12]
  var i1495 = i1487[13]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( i1495[i + 0] );
  }
  i1486.allTags = i1494
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.value = i1499[1]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1503 = data
  i1502.id = i1503[0]
  i1502.name = i1503[1]
  i1502.value = i1503[2]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1507 = data
  i1506.id = i1507[0]
  i1506.name = i1507[1]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1509 = data
  i1508.fixedDeltaTime = i1509[0]
  i1508.maximumDeltaTime = i1509[1]
  i1508.timeScale = i1509[2]
  i1508.maximumParticleTimestep = i1509[3]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1511 = data
  i1510.gravity = new pc.Vec3( i1511[0], i1511[1], i1511[2] )
  i1510.defaultSolverIterations = i1511[3]
  i1510.bounceThreshold = i1511[4]
  i1510.autoSyncTransforms = !!i1511[5]
  i1510.autoSimulation = !!i1511[6]
  var i1513 = i1511[7]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1513[i + 0]) );
  }
  i1510.collisionMatrix = i1512
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1517 = data
  i1516.enabled = !!i1517[0]
  i1516.layerId = i1517[1]
  i1516.otherLayerId = i1517[2]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'material')
  i1518.gravity = new pc.Vec2( i1519[2], i1519[3] )
  i1518.positionIterations = i1519[4]
  i1518.velocityIterations = i1519[5]
  i1518.velocityThreshold = i1519[6]
  i1518.maxLinearCorrection = i1519[7]
  i1518.maxAngularCorrection = i1519[8]
  i1518.maxTranslationSpeed = i1519[9]
  i1518.maxRotationSpeed = i1519[10]
  i1518.baumgarteScale = i1519[11]
  i1518.baumgarteTOIScale = i1519[12]
  i1518.timeToSleep = i1519[13]
  i1518.linearSleepTolerance = i1519[14]
  i1518.angularSleepTolerance = i1519[15]
  i1518.defaultContactOffset = i1519[16]
  i1518.autoSimulation = !!i1519[17]
  i1518.queriesHitTriggers = !!i1519[18]
  i1518.queriesStartInColliders = !!i1519[19]
  i1518.callbacksOnDisable = !!i1519[20]
  i1518.reuseCollisionCallbacks = !!i1519[21]
  i1518.autoSyncTransforms = !!i1519[22]
  var i1521 = i1519[23]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1521[i + 0]) );
  }
  i1518.collisionMatrix = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1525 = data
  i1524.enabled = !!i1525[0]
  i1524.layerId = i1525[1]
  i1524.otherLayerId = i1525[2]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1527 = data
  var i1529 = i1527[0]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1529[i + 0]) );
  }
  i1526.qualityLevels = i1528
  var i1531 = i1527[1]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( i1531[i + 0] );
  }
  i1526.names = i1530
  i1526.shadows = i1527[2]
  i1526.anisotropicFiltering = i1527[3]
  i1526.antiAliasing = i1527[4]
  i1526.lodBias = i1527[5]
  i1526.shadowCascades = i1527[6]
  i1526.shadowDistance = i1527[7]
  i1526.shadowmaskMode = i1527[8]
  i1526.shadowProjection = i1527[9]
  i1526.shadowResolution = i1527[10]
  i1526.softParticles = !!i1527[11]
  i1526.softVegetation = !!i1527[12]
  i1526.activeColorSpace = i1527[13]
  i1526.desiredColorSpace = i1527[14]
  i1526.masterTextureLimit = i1527[15]
  i1526.maxQueuedFrames = i1527[16]
  i1526.particleRaycastBudget = i1527[17]
  i1526.pixelLightCount = i1527[18]
  i1526.realtimeReflectionProbes = !!i1527[19]
  i1526.shadowCascade2Split = i1527[20]
  i1526.shadowCascade4Split = new pc.Vec3( i1527[21], i1527[22], i1527[23] )
  i1526.streamingMipmapsActive = !!i1527[24]
  i1526.vSyncCount = i1527[25]
  i1526.asyncUploadBufferSize = i1527[26]
  i1526.asyncUploadTimeSlice = i1527[27]
  i1526.billboardsFaceCameraPosition = !!i1527[28]
  i1526.shadowNearPlaneOffset = i1527[29]
  i1526.streamingMipmapsMemoryBudget = i1527[30]
  i1526.maximumLODLevel = i1527[31]
  i1526.streamingMipmapsAddAllCameras = !!i1527[32]
  i1526.streamingMipmapsMaxLevelReduction = i1527[33]
  i1526.streamingMipmapsRenderersPerFrame = i1527[34]
  i1526.resolutionScalingFixedDPIFactor = i1527[35]
  i1526.streamingMipmapsMaxFileIORequests = i1527[36]
  i1526.currentQualityLevel = i1527[37]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1537 = data
  i1536.weight = i1537[0]
  i1536.vertices = i1537[1]
  i1536.normals = i1537[2]
  i1536.tangents = i1537[3]
  return i1536
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1539 = data
  i1538.m_GlyphIndex = i1539[0]
  i1538.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1539[1], i1538.m_GlyphValueRecord)
  return i1538
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1540 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1541 = data
  i1540.m_XCoordinate = i1541[0]
  i1540.m_YCoordinate = i1541[1]
  return i1540
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1542 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1543 = data
  i1542.m_XPositionAdjustment = i1543[0]
  i1542.m_YPositionAdjustment = i1543[1]
  return i1542
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1544 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1545 = data
  i1544.xPlacement = i1545[0]
  i1544.yPlacement = i1545[1]
  i1544.xAdvance = i1545[2]
  i1544.yAdvance = i1545[3]
  return i1544
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1547 = data
  i1546.m_XPlacement = i1547[0]
  i1546.m_YPlacement = i1547[1]
  i1546.m_XAdvance = i1547[2]
  i1546.m_YAdvance = i1547[3]
  return i1546
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[81],"82":[22],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[22],"105":[56],"106":[107],"108":[107],"21":[14],"109":[65],"66":[110],"63":[61],"61":[110],"64":[61],"111":[61],"112":[110],"113":[110],"114":[110],"115":[14],"116":[17,14],"52":[56],"117":[17,14],"118":[25,56],"119":[56],"120":[56,54],"121":[84],"122":[91],"123":[124],"125":[126],"127":[5],"128":[22],"129":[130],"131":[49],"132":[21],"133":[14],"134":[56,14],"27":[14,17],"135":[14],"136":[17,14],"137":[56],"138":[17,14],"139":[14],"140":[141],"142":[141],"143":[141],"144":[14],"145":[14],"24":[21],"16":[17,14],"146":[14],"23":[21],"147":[14],"148":[14],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[14],"156":[17,14],"157":[14],"158":[14],"159":[14],"160":[14],"161":[17,14],"162":[14],"163":[49],"164":[49],"50":[49],"165":[49],"166":[22],"167":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","CuttingItem","Item","CuttingBoard","Shushi","Chillie","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Capybara","Spine.Unity.SkeletonAnimation","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","LastTray","UnityEngine.CapsuleCollider","ItemDraggable","ItemMoveToTarget","ItemDragChildRotator","ItemDragRaycastTarget","UnityEngine.SpriteMask","ItemClickable","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "18.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v58_StuffedPotatoCasserole_NoPhase2";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4960";

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

Deserializers.buildID = "f21d4170-8b8a-4d14-a0ff-5e3e4130df80";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

