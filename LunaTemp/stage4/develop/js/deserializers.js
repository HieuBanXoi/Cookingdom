var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointSpring' )
  var i781 = data
  i780.spring = i781[0]
  i780.damper = i781[1]
  i780.targetPosition = i781[2]
  return i780
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.JointMotor' )
  var i783 = data
  i782.m_TargetVelocity = i783[0]
  i782.m_Force = i783[1]
  i782.m_FreeSpin = i783[2]
  return i782
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.JointLimits' )
  var i785 = data
  i784.m_Min = i785[0]
  i784.m_Max = i785[1]
  i784.m_Bounciness = i785[2]
  i784.m_BounceMinVelocity = i785[3]
  i784.m_ContactDistance = i785[4]
  i784.minBounce = i785[5]
  i784.maxBounce = i785[6]
  return i784
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.JointDrive' )
  var i787 = data
  i786.m_PositionSpring = i787[0]
  i786.m_PositionDamper = i787[1]
  i786.m_MaximumForce = i787[2]
  i786.m_UseAcceleration = i787[3]
  return i786
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i789 = data
  i788.m_Spring = i789[0]
  i788.m_Damper = i789[1]
  return i788
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i791 = data
  i790.m_Limit = i791[0]
  i790.m_Bounciness = i791[1]
  i790.m_ContactDistance = i791[2]
  return i790
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i793 = data
  i792.m_ExtremumSlip = i793[0]
  i792.m_ExtremumValue = i793[1]
  i792.m_AsymptoteSlip = i793[2]
  i792.m_AsymptoteValue = i793[3]
  i792.m_Stiffness = i793[4]
  return i792
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i795 = data
  i794.m_LowerAngle = i795[0]
  i794.m_UpperAngle = i795[1]
  return i794
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i797 = data
  i796.m_MotorSpeed = i797[0]
  i796.m_MaximumMotorTorque = i797[1]
  return i796
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i799 = data
  i798.m_DampingRatio = i799[0]
  i798.m_Frequency = i799[1]
  i798.m_Angle = i799[2]
  return i798
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i801 = data
  i800.m_LowerTranslation = i801[0]
  i800.m_UpperTranslation = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i802 = root || new pc.UnityMaterial()
  var i803 = data
  i802.name = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'shader')
  i802.renderQueue = i803[3]
  i802.enableInstancing = !!i803[4]
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i805[i + 0]) );
  }
  i802.floatParameters = i804
  var i807 = i803[6]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i807[i + 0]) );
  }
  i802.colorParameters = i806
  var i809 = i803[7]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i809[i + 0]) );
  }
  i802.vectorParameters = i808
  var i811 = i803[8]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i811[i + 0]) );
  }
  i802.textureParameters = i810
  var i813 = i803[9]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i813[i + 0]) );
  }
  i802.materialFlags = i812
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i821 = data
  i820.name = i821[0]
  i820.value = new pc.Color(i821[1], i821[2], i821[3], i821[4])
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = new pc.Vec4( i825[1], i825[2], i825[3], i825[4] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i829 = data
  i828.name = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'value')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i833 = data
  i832.name = i833[0]
  i832.enabled = !!i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i835 = data
  i834.name = i835[0]
  i834.width = i835[1]
  i834.height = i835[2]
  i834.mipmapCount = i835[3]
  i834.anisoLevel = i835[4]
  i834.filterMode = i835[5]
  i834.hdr = !!i835[6]
  i834.format = i835[7]
  i834.wrapMode = i835[8]
  i834.alphaIsTransparency = !!i835[9]
  i834.alphaSource = i835[10]
  i834.graphicsFormat = i835[11]
  i834.sRGBTexture = !!i835[12]
  i834.desiredColorSpace = i835[13]
  i834.wrapU = i835[14]
  i834.wrapV = i835[15]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i837 = data
  i836.position = new pc.Vec3( i837[0], i837[1], i837[2] )
  i836.scale = new pc.Vec3( i837[3], i837[4], i837[5] )
  i836.rotation = new pc.Quat(i837[6], i837[7], i837[8], i837[9])
  return i836
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i838 = root || request.c( 'HeartEffect' )
  var i839 = data
  i838.defaultLifeTime = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'tf')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i841 = data
  i840.color = new pc.Color(i841[0], i841[1], i841[2], i841[3])
  request.r(i841[4], i841[5], 0, i840, 'sprite')
  i840.flipX = !!i841[6]
  i840.flipY = !!i841[7]
  i840.drawMode = i841[8]
  i840.size = new pc.Vec2( i841[9], i841[10] )
  i840.tileMode = i841[11]
  i840.adaptiveModeThreshold = i841[12]
  i840.maskInteraction = i841[13]
  i840.spriteSortPoint = i841[14]
  i840.enabled = !!i841[15]
  request.r(i841[16], i841[17], 0, i840, 'sharedMaterial')
  var i843 = i841[18]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sharedMaterials = i842
  i840.receiveShadows = !!i841[19]
  i840.shadowCastingMode = i841[20]
  i840.sortingLayerID = i841[21]
  i840.sortingOrder = i841[22]
  i840.lightmapIndex = i841[23]
  i840.lightmapSceneIndex = i841[24]
  i840.lightmapScaleOffset = new pc.Vec4( i841[25], i841[26], i841[27], i841[28] )
  i840.lightProbeUsage = i841[29]
  i840.reflectionProbeUsage = i841[30]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i847 = data
  i846.name = i847[0]
  i846.tagId = i847[1]
  i846.enabled = !!i847[2]
  i846.isStatic = !!i847[3]
  i846.layer = i847[4]
  return i846
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i848 = root || request.c( 'HeartBreakEffect' )
  var i849 = data
  i848.defaultLifeTime = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'tf')
  return i848
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i850 = root || request.c( 'BlinkEffect' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'tf')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'mesh')
  i852.meshCount = i853[2]
  i852.activeVertexStreamsCount = i853[3]
  i852.alignment = i853[4]
  i852.renderMode = i853[5]
  i852.sortMode = i853[6]
  i852.lengthScale = i853[7]
  i852.velocityScale = i853[8]
  i852.cameraVelocityScale = i853[9]
  i852.normalDirection = i853[10]
  i852.sortingFudge = i853[11]
  i852.minParticleSize = i853[12]
  i852.maxParticleSize = i853[13]
  i852.pivot = new pc.Vec3( i853[14], i853[15], i853[16] )
  request.r(i853[17], i853[18], 0, i852, 'trailMaterial')
  i852.applyActiveColorSpace = !!i853[19]
  i852.enabled = !!i853[20]
  request.r(i853[21], i853[22], 0, i852, 'sharedMaterial')
  var i855 = i853[23]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.sharedMaterials = i854
  i852.receiveShadows = !!i853[24]
  i852.shadowCastingMode = i853[25]
  i852.sortingLayerID = i853[26]
  i852.sortingOrder = i853[27]
  i852.lightmapIndex = i853[28]
  i852.lightmapSceneIndex = i853[29]
  i852.lightmapScaleOffset = new pc.Vec4( i853[30], i853[31], i853[32], i853[33] )
  i852.lightProbeUsage = i853[34]
  i852.reflectionProbeUsage = i853[35]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i857 = data
  i856.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i857[0], i856.main)
  i856.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i857[1], i856.colorBySpeed)
  i856.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i857[2], i856.colorOverLifetime)
  i856.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i857[3], i856.emission)
  i856.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i857[4], i856.rotationBySpeed)
  i856.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i857[5], i856.rotationOverLifetime)
  i856.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i857[6], i856.shape)
  i856.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i857[7], i856.sizeBySpeed)
  i856.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i857[8], i856.sizeOverLifetime)
  i856.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i857[9], i856.textureSheetAnimation)
  i856.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i857[10], i856.velocityOverLifetime)
  i856.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i857[11], i856.noise)
  i856.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i857[12], i856.inheritVelocity)
  i856.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i857[13], i856.forceOverLifetime)
  i856.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i857[14], i856.limitVelocityOverLifetime)
  i856.useAutoRandomSeed = !!i857[15]
  i856.randomSeed = i857[16]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemMain()
  var i859 = data
  i858.duration = i859[0]
  i858.loop = !!i859[1]
  i858.prewarm = !!i859[2]
  i858.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.startDelay)
  i858.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.startLifetime)
  i858.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[5], i858.startSpeed)
  i858.startSize3D = !!i859[6]
  i858.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[7], i858.startSizeX)
  i858.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.startSizeY)
  i858.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[9], i858.startSizeZ)
  i858.startRotation3D = !!i859[10]
  i858.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[11], i858.startRotationX)
  i858.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[12], i858.startRotationY)
  i858.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[13], i858.startRotationZ)
  i858.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[14], i858.startColor)
  i858.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[15], i858.gravityModifier)
  i858.simulationSpace = i859[16]
  request.r(i859[17], i859[18], 0, i858, 'customSimulationSpace')
  i858.simulationSpeed = i859[19]
  i858.useUnscaledTime = !!i859[20]
  i858.scalingMode = i859[21]
  i858.playOnAwake = !!i859[22]
  i858.maxParticles = i859[23]
  i858.emitterVelocityMode = i859[24]
  i858.stopAction = i859[25]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i860 = root || new pc.MinMaxCurve()
  var i861 = data
  i860.mode = i861[0]
  i860.curveMin = new pc.AnimationCurve( { keys_flow: i861[1] } )
  i860.curveMax = new pc.AnimationCurve( { keys_flow: i861[2] } )
  i860.curveMultiplier = i861[3]
  i860.constantMin = i861[4]
  i860.constantMax = i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i862 = root || new pc.MinMaxGradient()
  var i863 = data
  i862.mode = i863[0]
  i862.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[1], i862.gradientMin)
  i862.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[2], i862.gradientMax)
  i862.colorMin = new pc.Color(i863[3], i863[4], i863[5], i863[6])
  i862.colorMax = new pc.Color(i863[7], i863[8], i863[9], i863[10])
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i865 = data
  i864.mode = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i867[i + 0]) );
  }
  i864.colorKeys = i866
  var i869 = i865[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i869[i + 0]) );
  }
  i864.alphaKeys = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  i870.range = new pc.Vec2( i871[2], i871[3] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i875 = data
  i874.color = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.time = i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i879 = data
  i878.alpha = i879[0]
  i878.time = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemColorOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i881[1], i880.color)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemEmitter()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.rateOverTime)
  i882.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.rateOverDistance)
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i885[i + 0]) );
  }
  i882.bursts = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemBurst()
  var i889 = data
  i888.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[0], i888.count)
  i888.cycleCount = i889[1]
  i888.minCount = i889[2]
  i888.maxCount = i889[3]
  i888.repeatInterval = i889[4]
  i888.time = i889[5]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemRotationBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemRotationOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemShape()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.shapeType = i895[1]
  i894.randomDirectionAmount = i895[2]
  i894.sphericalDirectionAmount = i895[3]
  i894.randomPositionAmount = i895[4]
  i894.alignToDirection = !!i895[5]
  i894.radius = i895[6]
  i894.radiusMode = i895[7]
  i894.radiusSpread = i895[8]
  i894.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[9], i894.radiusSpeed)
  i894.radiusThickness = i895[10]
  i894.angle = i895[11]
  i894.length = i895[12]
  i894.boxThickness = new pc.Vec3( i895[13], i895[14], i895[15] )
  i894.meshShapeType = i895[16]
  request.r(i895[17], i895[18], 0, i894, 'mesh')
  request.r(i895[19], i895[20], 0, i894, 'meshRenderer')
  request.r(i895[21], i895[22], 0, i894, 'skinnedMeshRenderer')
  i894.useMeshMaterialIndex = !!i895[23]
  i894.meshMaterialIndex = i895[24]
  i894.useMeshColors = !!i895[25]
  i894.normalOffset = i895[26]
  i894.arc = i895[27]
  i894.arcMode = i895[28]
  i894.arcSpread = i895[29]
  i894.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[30], i894.arcSpeed)
  i894.donutRadius = i895[31]
  i894.position = new pc.Vec3( i895[32], i895[33], i895[34] )
  i894.rotation = new pc.Vec3( i895[35], i895[36], i895[37] )
  i894.scale = new pc.Vec3( i895[38], i895[39], i895[40] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemSizeBySpeed()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.separateAxes = !!i897[4]
  i896.range = new pc.Vec2( i897[5], i897[6] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemSizeOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.separateAxes = !!i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.mode = i901[1]
  i900.animation = i901[2]
  i900.numTilesX = i901[3]
  i900.numTilesY = i901[4]
  i900.useRandomRow = !!i901[5]
  i900.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[6], i900.frameOverTime)
  i900.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[7], i900.startFrame)
  i900.cycleCount = i901[8]
  i900.rowIndex = i901[9]
  i900.flipU = i901[10]
  i900.flipV = i901[11]
  i900.spriteCount = i901[12]
  var i903 = i901[13]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sprites = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.radial)
  i906.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[5], i906.speedModifier)
  i906.space = i907[6]
  i906.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[7], i906.orbitalX)
  i906.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.orbitalY)
  i906.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[9], i906.orbitalZ)
  i906.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[10], i906.orbitalOffsetX)
  i906.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[11], i906.orbitalOffsetY)
  i906.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[12], i906.orbitalOffsetZ)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemNoise()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.separateAxes = !!i909[1]
  i908.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.strengthX)
  i908.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.strengthY)
  i908.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.strengthZ)
  i908.frequency = i909[5]
  i908.damping = !!i909[6]
  i908.octaveCount = i909[7]
  i908.octaveMultiplier = i909[8]
  i908.octaveScale = i909[9]
  i908.quality = i909[10]
  i908.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.scrollSpeed)
  i908.scrollSpeedMultiplier = i909[12]
  i908.remapEnabled = !!i909[13]
  i908.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[14], i908.remapX)
  i908.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[15], i908.remapY)
  i908.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[16], i908.remapZ)
  i908.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[17], i908.positionAmount)
  i908.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[18], i908.rotationAmount)
  i908.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[19], i908.sizeAmount)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemInheritVelocity()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.mode = i911[1]
  i910.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.curve)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemForceOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.space = i913[4]
  i912.randomized = !!i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.limit)
  i914.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.limitX)
  i914.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.limitY)
  i914.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[4], i914.limitZ)
  i914.dampen = i915[5]
  i914.separateAxes = !!i915[6]
  i914.space = i915[7]
  i914.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[8], i914.drag)
  i914.multiplyDragByParticleSize = !!i915[9]
  i914.multiplyDragByParticleVelocity = !!i915[10]
  return i914
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i916 = root || request.c( 'StarExploreFX' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'tf')
  return i916
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i918 = root || request.c( 'ProgressBar' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'fillTransform')
  request.r(i919[2], i919[3], 0, i918, 'tf')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i921 = data
  i920.pivot = new pc.Vec2( i921[0], i921[1] )
  i920.anchorMin = new pc.Vec2( i921[2], i921[3] )
  i920.anchorMax = new pc.Vec2( i921[4], i921[5] )
  i920.sizeDelta = new pc.Vec2( i921[6], i921[7] )
  i920.anchoredPosition3D = new pc.Vec3( i921[8], i921[9], i921[10] )
  i920.rotation = new pc.Quat(i921[11], i921[12], i921[13], i921[14])
  i920.scale = new pc.Vec3( i921[15], i921[16], i921[17] )
  return i920
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i922 = root || request.c( 'ClockTimer' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'fillImage')
  request.r(i923[2], i923[3], 0, i922, 'tf')
  i922.spawnZoomDuration = i923[4]
  i922.despawnZoomDuration = i923[5]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i925 = data
  i924.cullTransparentMesh = !!i925[0]
  return i924
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Image' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_Sprite')
  i926.m_Type = i927[2]
  i926.m_PreserveAspect = !!i927[3]
  i926.m_FillCenter = !!i927[4]
  i926.m_FillMethod = i927[5]
  i926.m_FillAmount = i927[6]
  i926.m_FillClockwise = !!i927[7]
  i926.m_FillOrigin = i927[8]
  i926.m_UseSpriteMesh = !!i927[9]
  i926.m_PixelsPerUnitMultiplier = i927[10]
  request.r(i927[11], i927[12], 0, i926, 'm_Material')
  i926.m_Maskable = !!i927[13]
  i926.m_Color = new pc.Color(i927[14], i927[15], i927[16], i927[17])
  i926.m_RaycastTarget = !!i927[18]
  i926.m_RaycastPadding = new pc.Vec4( i927[19], i927[20], i927[21], i927[22] )
  return i926
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i928 = root || request.c( 'FlourSmoke' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'tf')
  return i928
}

Deserializers["Duck"] = function (request, data, root) {
  var i930 = root || request.c( 'Duck' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'tf')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i933 = data
  i932.name = i933[0]
  i932.halfPrecision = !!i933[1]
  i932.useSimplification = !!i933[2]
  i932.useUInt32IndexFormat = !!i933[3]
  i932.vertexCount = i933[4]
  i932.aabb = i933[5]
  var i935 = i933[6]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( !!i935[i + 0] );
  }
  i932.streams = i934
  i932.vertices = i933[7]
  var i937 = i933[8]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i937[i + 0]) );
  }
  i932.subMeshes = i936
  var i939 = i933[9]
  var i938 = []
  for(var i = 0; i < i939.length; i += 16) {
    i938.push( new pc.Mat4().setData(i939[i + 0], i939[i + 1], i939[i + 2], i939[i + 3],  i939[i + 4], i939[i + 5], i939[i + 6], i939[i + 7],  i939[i + 8], i939[i + 9], i939[i + 10], i939[i + 11],  i939[i + 12], i939[i + 13], i939[i + 14], i939[i + 15]) );
  }
  i932.bindposes = i938
  var i941 = i933[10]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i941[i + 0]) );
  }
  i932.blendShapes = i940
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i947 = data
  i946.triangles = i947[0]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i953 = data
  i952.name = i953[0]
  var i955 = i953[1]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i955[i + 0]) );
  }
  i952.frames = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i957 = data
  i956.name = i957[0]
  i956.index = i957[1]
  i956.startup = !!i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i959 = data
  i958.planeDistance = i959[0]
  i958.referencePixelsPerUnit = i959[1]
  i958.isFallbackOverlay = !!i959[2]
  i958.renderMode = i959[3]
  i958.renderOrder = i959[4]
  i958.sortingLayerName = i959[5]
  i958.sortingOrder = i959[6]
  i958.scaleFactor = i959[7]
  request.r(i959[8], i959[9], 0, i958, 'worldCamera')
  i958.overrideSorting = !!i959[10]
  i958.pixelPerfect = !!i959[11]
  i958.targetDisplay = i959[12]
  i958.overridePixelPerfect = !!i959[13]
  i958.enabled = !!i959[14]
  return i958
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i961 = data
  i960.m_UiScaleMode = i961[0]
  i960.m_ReferencePixelsPerUnit = i961[1]
  i960.m_ScaleFactor = i961[2]
  i960.m_ReferenceResolution = new pc.Vec2( i961[3], i961[4] )
  i960.m_ScreenMatchMode = i961[5]
  i960.m_MatchWidthOrHeight = i961[6]
  i960.m_PhysicalUnit = i961[7]
  i960.m_FallbackScreenDPI = i961[8]
  i960.m_DefaultSpriteDPI = i961[9]
  i960.m_DynamicPixelsPerUnit = i961[10]
  i960.m_PresetInfoIsWorld = !!i961[11]
  return i960
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i963 = data
  i962.m_IgnoreReversedGraphics = !!i963[0]
  i962.m_BlockingObjects = i963[1]
  i962.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i963[2] )
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'animatorController')
  request.r(i965[2], i965[3], 0, i964, 'avatar')
  i964.updateMode = i965[4]
  i964.hasTransformHierarchy = !!i965[5]
  i964.applyRootMotion = !!i965[6]
  var i967 = i965[7]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.humanBones = i966
  i964.enabled = !!i965[8]
  return i964
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i971 = data
  i970.m_hasFontAssetChanged = !!i971[0]
  request.r(i971[1], i971[2], 0, i970, 'm_baseMaterial')
  i970.m_maskOffset = new pc.Vec4( i971[3], i971[4], i971[5], i971[6] )
  i970.m_text = i971[7]
  i970.m_isRightToLeft = !!i971[8]
  request.r(i971[9], i971[10], 0, i970, 'm_fontAsset')
  request.r(i971[11], i971[12], 0, i970, 'm_sharedMaterial')
  var i973 = i971[13]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i970.m_fontSharedMaterials = i972
  request.r(i971[14], i971[15], 0, i970, 'm_fontMaterial')
  var i975 = i971[16]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i970.m_fontMaterials = i974
  i970.m_fontColor32 = UnityEngine.Color32.ConstructColor(i971[17], i971[18], i971[19], i971[20])
  i970.m_fontColor = new pc.Color(i971[21], i971[22], i971[23], i971[24])
  i970.m_enableVertexGradient = !!i971[25]
  i970.m_colorMode = i971[26]
  i970.m_fontColorGradient = request.d('TMPro.VertexGradient', i971[27], i970.m_fontColorGradient)
  request.r(i971[28], i971[29], 0, i970, 'm_fontColorGradientPreset')
  request.r(i971[30], i971[31], 0, i970, 'm_spriteAsset')
  i970.m_tintAllSprites = !!i971[32]
  request.r(i971[33], i971[34], 0, i970, 'm_StyleSheet')
  i970.m_TextStyleHashCode = i971[35]
  i970.m_overrideHtmlColors = !!i971[36]
  i970.m_faceColor = UnityEngine.Color32.ConstructColor(i971[37], i971[38], i971[39], i971[40])
  i970.m_fontSize = i971[41]
  i970.m_fontSizeBase = i971[42]
  i970.m_fontWeight = i971[43]
  i970.m_enableAutoSizing = !!i971[44]
  i970.m_fontSizeMin = i971[45]
  i970.m_fontSizeMax = i971[46]
  i970.m_fontStyle = i971[47]
  i970.m_HorizontalAlignment = i971[48]
  i970.m_VerticalAlignment = i971[49]
  i970.m_textAlignment = i971[50]
  i970.m_characterSpacing = i971[51]
  i970.m_wordSpacing = i971[52]
  i970.m_lineSpacing = i971[53]
  i970.m_lineSpacingMax = i971[54]
  i970.m_paragraphSpacing = i971[55]
  i970.m_charWidthMaxAdj = i971[56]
  i970.m_TextWrappingMode = i971[57]
  i970.m_wordWrappingRatios = i971[58]
  i970.m_overflowMode = i971[59]
  request.r(i971[60], i971[61], 0, i970, 'm_linkedTextComponent')
  request.r(i971[62], i971[63], 0, i970, 'parentLinkedComponent')
  i970.m_enableKerning = !!i971[64]
  var i977 = i971[65]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(i977[i + 0]);
  }
  i970.m_ActiveFontFeatures = i976
  i970.m_enableExtraPadding = !!i971[66]
  i970.checkPaddingRequired = !!i971[67]
  i970.m_isRichText = !!i971[68]
  i970.m_parseCtrlCharacters = !!i971[69]
  i970.m_isOrthographic = !!i971[70]
  i970.m_isCullingEnabled = !!i971[71]
  i970.m_horizontalMapping = i971[72]
  i970.m_verticalMapping = i971[73]
  i970.m_uvLineOffset = i971[74]
  i970.m_geometrySortingOrder = i971[75]
  i970.m_IsTextObjectScaleStatic = !!i971[76]
  i970.m_VertexBufferAutoSizeReduction = !!i971[77]
  i970.m_useMaxVisibleDescender = !!i971[78]
  i970.m_pageToDisplay = i971[79]
  i970.m_margin = new pc.Vec4( i971[80], i971[81], i971[82], i971[83] )
  i970.m_isUsingLegacyAnimationComponent = !!i971[84]
  i970.m_isVolumetricText = !!i971[85]
  request.r(i971[86], i971[87], 0, i970, 'm_Material')
  i970.m_EmojiFallbackSupport = !!i971[88]
  i970.m_Maskable = !!i971[89]
  i970.m_Color = new pc.Color(i971[90], i971[91], i971[92], i971[93])
  i970.m_RaycastTarget = !!i971[94]
  i970.m_RaycastPadding = new pc.Vec4( i971[95], i971[96], i971[97], i971[98] )
  return i970
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.VertexGradient' )
  var i979 = data
  i978.topLeft = new pc.Color(i979[0], i979[1], i979[2], i979[3])
  i978.topRight = new pc.Color(i979[4], i979[5], i979[6], i979[7])
  i978.bottomLeft = new pc.Color(i979[8], i979[9], i979[10], i979[11])
  i978.bottomRight = new pc.Color(i979[12], i979[13], i979[14], i979[15])
  return i978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Button' )
  var i983 = data
  i982.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i983[0], i982.m_OnClick)
  i982.m_Navigation = request.d('UnityEngine.UI.Navigation', i983[1], i982.m_Navigation)
  i982.m_Transition = i983[2]
  i982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i983[3], i982.m_Colors)
  i982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i983[4], i982.m_SpriteState)
  i982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i983[5], i982.m_AnimationTriggers)
  i982.m_Interactable = !!i983[6]
  request.r(i983[7], i983[8], 0, i982, 'm_TargetGraphic')
  return i982
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i985 = data
  i984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i985[0], i984.m_PersistentCalls)
  return i984
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('UnityEngine.Events.PersistentCall', i989[i + 0]));
  }
  i986.m_Calls = i988
  return i986
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'm_Target')
  i992.m_TargetAssemblyTypeName = i993[2]
  i992.m_MethodName = i993[3]
  i992.m_Mode = i993[4]
  i992.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i993[5], i992.m_Arguments)
  i992.m_CallState = i993[6]
  return i992
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'm_ObjectArgument')
  i994.m_ObjectArgumentAssemblyTypeName = i995[2]
  i994.m_IntArgument = i995[3]
  i994.m_FloatArgument = i995[4]
  i994.m_StringArgument = i995[5]
  i994.m_BoolArgument = !!i995[6]
  return i994
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i997 = data
  i996.m_Mode = i997[0]
  i996.m_WrapAround = !!i997[1]
  request.r(i997[2], i997[3], 0, i996, 'm_SelectOnUp')
  request.r(i997[4], i997[5], 0, i996, 'm_SelectOnDown')
  request.r(i997[6], i997[7], 0, i996, 'm_SelectOnLeft')
  request.r(i997[8], i997[9], 0, i996, 'm_SelectOnRight')
  return i996
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i999 = data
  i998.m_NormalColor = new pc.Color(i999[0], i999[1], i999[2], i999[3])
  i998.m_HighlightedColor = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.m_PressedColor = new pc.Color(i999[8], i999[9], i999[10], i999[11])
  i998.m_SelectedColor = new pc.Color(i999[12], i999[13], i999[14], i999[15])
  i998.m_DisabledColor = new pc.Color(i999[16], i999[17], i999[18], i999[19])
  i998.m_ColorMultiplier = i999[20]
  i998.m_FadeDuration = i999[21]
  return i998
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_HighlightedSprite')
  request.r(i1001[2], i1001[3], 0, i1000, 'm_PressedSprite')
  request.r(i1001[4], i1001[5], 0, i1000, 'm_SelectedSprite')
  request.r(i1001[6], i1001[7], 0, i1000, 'm_DisabledSprite')
  return i1000
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1003 = data
  i1002.m_NormalTrigger = i1003[0]
  i1002.m_HighlightedTrigger = i1003[1]
  i1002.m_PressedTrigger = i1003[2]
  i1002.m_SelectedTrigger = i1003[3]
  i1002.m_DisabledTrigger = i1003[4]
  return i1002
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i1004 = root || request.c( 'Ply_Pool' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Ply_Pool+PoolAmount', i1007[i + 0]) );
  }
  i1004.poolAmounts = i1006
  request.r(i1005[1], i1005[2], 0, i1004, 'poolHolder')
  return i1004
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i1010 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i1011 = data
  i1010.type = i1011[0]
  i1010.amount = i1011[1]
  request.r(i1011[2], i1011[3], 0, i1010, 'gameUnit')
  return i1010
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1012 = root || request.c( 'Ply_SoundManager' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Ply_SoundManager+FxAudio', i1015[i + 0]) );
  }
  i1012.fxAudios = i1014
  var i1017 = i1013[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1012.audioClips = i1016
  request.r(i1013[2], i1013[3], 0, i1012, 'sound')
  return i1012
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i1020 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i1021 = data
  i1020.fxType = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'audioClip')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'clip')
  request.r(i1025[2], i1025[3], 0, i1024, 'outputAudioMixerGroup')
  i1024.playOnAwake = !!i1025[4]
  i1024.loop = !!i1025[5]
  i1024.time = i1025[6]
  i1024.volume = i1025[7]
  i1024.pitch = i1025[8]
  i1024.enabled = !!i1025[9]
  return i1024
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1026 = root || request.c( 'GameManager' )
  var i1027 = data
  i1026.isPlaying = !!i1027[0]
  i1026.isTutorial = !!i1027[1]
  i1026.isGotoStore = !!i1027[2]
  i1026.isLoseGame = !!i1027[3]
  i1026.countMove = i1027[4]
  i1026.currentLayer = i1027[5]
  return i1026
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1028 = root || request.c( 'UIManager' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'winUI')
  request.r(i1029[2], i1029[3], 0, i1028, 'loseUI')
  request.r(i1029[4], i1029[5], 0, i1028, 'tutorial')
  request.r(i1029[6], i1029[7], 0, i1028, 'verticalUI')
  request.r(i1029[8], i1029[9], 0, i1028, 'horizontalUI')
  request.r(i1029[10], i1029[11], 0, i1028, 'downloadBtn')
  request.r(i1029[12], i1029[13], 0, i1028, 'horizontalDownloadBtn')
  i1028.isGoogleBuild = !!i1029[14]
  i1028.screenWidth = i1029[15]
  i1028.screenHeight = i1029[16]
  i1028.scaleHeightOnWidth = i1029[17]
  i1028.isVertical = !!i1029[18]
  i1028.isScreenVertical = !!i1029[19]
  request.r(i1029[20], i1029[21], 0, i1028, 'cam')
  i1028.verticalUIHeightOnWidthRatio = i1029[22]
  i1028.scaleCameraOnValidate = !!i1029[23]
  i1028.screenVerticalHeightOnWidthRatio = i1029[24]
  i1028.useContinuousScaling = !!i1029[25]
  i1028.baseOrthographicSize = i1029[26]
  i1028.baseAspect = i1029[27]
  i1028.landscapeSizeRatio = i1029[28]
  i1028.defaultPortraitSizeRatio = i1029[29]
  var i1031 = i1029[30]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('ScreenScaleStep', i1031[i + 0]));
  }
  i1028.discreteScaleSteps = i1030
  i1028.usePerspectiveCamera = !!i1029[31]
  request.r(i1029[32], i1029[33], 0, i1028, 'perspectiveFocus')
  i1028.perspectiveFocusDistance = i1029[34]
  i1028.perspectivePadding = i1029[35]
  i1028.fitRendererBounds = !!i1029[36]
  request.r(i1029[37], i1029[38], 0, i1028, 'boundsRoot')
  var i1033 = i1029[39]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1028.boundsRenderers = i1032
  return i1028
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i1036 = root || request.c( 'ScreenScaleStep' )
  var i1037 = data
  i1036.heightOnWidthRatio = i1037[0]
  i1036.orthographicSize = i1037[1]
  return i1036
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1040 = root || request.c( 'InputManager' )
  var i1041 = data
  i1040.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1041[0] )
  i1040.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i1041[1] )
  i1040.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1041[2] )
  i1040.isDragging = !!i1041[3]
  return i1040
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i1042 = root || request.c( 'PhaseManager' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('PhaseData', i1045[i + 0]));
  }
  i1042.phases = i1044
  i1042.delayBeforeNextPhase = i1043[1]
  i1042.transitionMoveDuration = i1043[2]
  i1042.backgroundFadeInDuration = i1043[3]
  i1042.backgroundFadeOutDuration = i1043[4]
  i1042.transitionMoveEase = i1043[5]
  i1042.backgroundFadeEase = i1043[6]
  request.r(i1043[7], i1043[8], 0, i1042, 'transitionObject')
  request.r(i1043[9], i1043[10], 0, i1042, 'transitionStartPos')
  request.r(i1043[11], i1043[12], 0, i1042, 'transitionEndPos')
  request.r(i1043[13], i1043[14], 0, i1042, 'transitionBackground')
  i1042.currentPhaseIndex = i1043[15]
  i1042.currentStepCount = i1043[16]
  return i1042
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1048 = root || request.c( 'PhaseData' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'phaseObject')
  i1048.totalSteps = i1049[2]
  i1048.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i1049[3], i1048.onPhaseReady)
  return i1048
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1051 = data
  i1050.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1051[0], i1050.m_PersistentCalls)
  return i1050
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i1052 = root || request.c( 'HandTutManager' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1052.items = i1054
  request.r(i1053[1], i1053[2], 0, i1052, 'knife')
  request.r(i1053[3], i1053[4], 0, i1052, 'handTutObject')
  request.r(i1053[5], i1053[6], 0, i1052, 'tapToCookObject')
  request.r(i1053[7], i1053[8], 0, i1052, 'oilItem')
  request.r(i1053[9], i1053[10], 0, i1052, 'stoveToggleEvent')
  i1052.idleDelay = i1053[11]
  i1052.moveDuration = i1053[12]
  i1052.dragFadeDuration = i1053[13]
  i1052.clickScaleDuration = i1053[14]
  i1052.waitAtEndDuration = i1053[15]
  i1052.stirLoopDuration = i1053[16]
  i1052.handZPosition = i1053[17]
  i1052.clickScaleMultiplier = i1053[18]
  i1052.moveEase = i1053[19]
  return i1052
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i1058 = root || request.c( 'SortChildByZPos' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'transformToSort')
  var i1061 = i1059[2]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1058.childrenToSort = i1060
  i1058.zOffset = i1059[3]
  i1058.baseZ = i1059[4]
  return i1058
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i1064 = root || request.c( 'DuckManager' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.leftPoints = i1066
  var i1069 = i1065[1]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1064.rightPoints = i1068
  i1064.minSpawnInterval = i1065[2]
  i1064.maxSpawnInterval = i1065[3]
  i1064.moveSpeed = i1065[4]
  i1064.duckSoundChance = i1065[5]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1071 = data
  i1070.aspect = i1071[0]
  i1070.orthographic = !!i1071[1]
  i1070.orthographicSize = i1071[2]
  i1070.backgroundColor = new pc.Color(i1071[3], i1071[4], i1071[5], i1071[6])
  i1070.nearClipPlane = i1071[7]
  i1070.farClipPlane = i1071[8]
  i1070.fieldOfView = i1071[9]
  i1070.depth = i1071[10]
  i1070.clearFlags = i1071[11]
  i1070.cullingMask = i1071[12]
  i1070.rect = i1071[13]
  request.r(i1071[14], i1071[15], 0, i1070, 'targetTexture')
  i1070.usePhysicalProperties = !!i1071[16]
  i1070.focalLength = i1071[17]
  i1070.sensorSize = new pc.Vec2( i1071[18], i1071[19] )
  i1070.lensShift = new pc.Vec2( i1071[20], i1071[21] )
  i1070.gateFit = i1071[22]
  i1070.commandBufferCount = i1071[23]
  i1070.cameraType = i1071[24]
  i1070.enabled = !!i1071[25]
  return i1070
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'm_FirstSelected')
  i1072.m_sendNavigationEvents = !!i1073[2]
  i1072.m_DragThreshold = i1073[3]
  return i1072
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1075 = data
  i1074.m_HorizontalAxis = i1075[0]
  i1074.m_VerticalAxis = i1075[1]
  i1074.m_SubmitButton = i1075[2]
  i1074.m_CancelButton = i1075[3]
  i1074.m_InputActionsPerSecond = i1075[4]
  i1074.m_RepeatDelay = i1075[5]
  i1074.m_ForceModuleActive = !!i1075[6]
  i1074.m_SendPointerHoverToParent = !!i1075[7]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1077 = data
  i1076.center = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.radius = i1077[3]
  i1076.enabled = !!i1077[4]
  i1076.isTrigger = !!i1077[5]
  request.r(i1077[6], i1077[7], 0, i1076, 'material')
  return i1076
}

Deserializers["Item"] = function (request, data, root) {
  var i1078 = root || request.c( 'Item' )
  var i1079 = data
  i1078.isDone = !!i1079[0]
  i1078.onProcess = !!i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'itemDraggable')
  request.r(i1079[4], i1079[5], 0, i1078, 'itemClickable')
  request.r(i1079[6], i1079[7], 0, i1078, 'itemStirring')
  request.r(i1079[8], i1079[9], 0, i1078, 'itemKnifeSpriteMaskCutter')
  request.r(i1079[10], i1079[11], 0, i1078, 'itemSpriteMaskPainter')
  request.r(i1079[12], i1079[13], 0, i1078, 'itemMoveToTarget')
  request.r(i1079[14], i1079[15], 0, i1078, 'animator')
  i1078.itemType = i1079[16]
  request.r(i1079[17], i1079[18], 0, i1078, 'spriteRenderer')
  i1078.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1079[19], i1078.onKnifeIn)
  i1078.heartEffectScale = i1079[20]
  i1078.playMoveToTargetFinishSound = !!i1079[21]
  i1078.moveToTargetFinishFxType = i1079[22]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'sharedMesh')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'additionalVertexStreams')
  i1082.enabled = !!i1083[2]
  request.r(i1083[3], i1083[4], 0, i1082, 'sharedMaterial')
  var i1085 = i1083[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1082.sharedMaterials = i1084
  i1082.receiveShadows = !!i1083[6]
  i1082.shadowCastingMode = i1083[7]
  i1082.sortingLayerID = i1083[8]
  i1082.sortingOrder = i1083[9]
  i1082.lightmapIndex = i1083[10]
  i1082.lightmapSceneIndex = i1083[11]
  i1082.lightmapScaleOffset = new pc.Vec4( i1083[12], i1083[13], i1083[14], i1083[15] )
  i1082.lightProbeUsage = i1083[16]
  i1082.reflectionProbeUsage = i1083[17]
  return i1082
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1086 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1087 = data
  i1086.loop = !!i1087[0]
  i1086.timeScale = i1087[1]
  request.r(i1087[2], i1087[3], 0, i1086, 'skeletonDataAsset')
  i1086.initialSkinName = i1087[4]
  i1086.fixPrefabOverrideViaMeshFilter = i1087[5]
  i1086.initialFlipX = !!i1087[6]
  i1086.initialFlipY = !!i1087[7]
  i1086.updateWhenInvisible = i1087[8]
  i1086.zSpacing = i1087[9]
  i1086.useClipping = !!i1087[10]
  i1086.immutableTriangles = !!i1087[11]
  i1086.pmaVertexColors = !!i1087[12]
  i1086.clearStateOnDisable = !!i1087[13]
  i1086.tintBlack = !!i1087[14]
  i1086.singleSubmesh = !!i1087[15]
  i1086.fixDrawOrder = !!i1087[16]
  i1086.addNormals = !!i1087[17]
  i1086.calculateTangents = !!i1087[18]
  i1086.maskInteraction = i1087[19]
  i1086.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1087[20], i1086.maskMaterials)
  i1086.disableRenderingOnOverride = !!i1087[21]
  i1086._animationName = i1087[22]
  var i1089 = i1087[23]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1086.separatorSlotNames = i1088
  return i1086
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1090 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1090.materialsMaskDisabled = i1092
  var i1095 = i1091[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1090.materialsInsideMask = i1094
  var i1097 = i1091[2]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1090.materialsOutsideMask = i1096
  return i1090
}

Deserializers["ContinuousRotation"] = function (request, data, root) {
  var i1100 = root || request.c( 'ContinuousRotation' )
  var i1101 = data
  i1100.rotationAxis = new pc.Vec3( i1101[0], i1101[1], i1101[2] )
  i1100.degreesPerSecond = i1101[3]
  i1100.rotationSpace = i1101[4]
  i1100.useUnscaledTime = !!i1101[5]
  return i1100
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1102 = root || request.c( 'Ply_ToggleEvent' )
  var i1103 = data
  i1102.isOn = !!i1103[0]
  i1102.applyStateOnEnable = !!i1103[1]
  i1102.applyStateOnClick = !!i1103[2]
  request.r(i1103[3], i1103[4], 0, i1102, 'targetObject')
  i1102.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1103[5], i1102.onTurnOn)
  i1102.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1103[6], i1102.onTurnOff)
  return i1102
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1104 = root || request.c( 'ItemDraggable' )
  var i1105 = data
  i1104.isDraggable = !!i1105[0]
  request.r(i1105[1], i1105[2], 0, i1104, 'returnTransform')
  i1104.setParentToReturnTransform = !!i1105[3]
  i1104.returnToExactReturnTransformPosition = !!i1105[4]
  i1104.targetItemType = i1105[5]
  request.r(i1105[6], i1105[7], 0, i1104, 'item')
  i1104.checkState = !!i1105[8]
  request.r(i1105[9], i1105[10], 0, i1104, 'shadowObject')
  i1104.playReturnToStartFinishSound = !!i1105[11]
  i1104.returnToStartFinishFxType = i1105[12]
  i1104.spawnBreakHeartOnDropFail = !!i1105[13]
  i1104.liftOffset = i1105[14]
  i1104.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1105[15], i1104.onBeginDrag)
  i1104.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1105[16], i1104.onDropSuccess)
  i1104.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1105[17], i1104.onDropFail)
  return i1104
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i1106 = root || request.c( 'ItemMoveToTarget' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'defaultTarget')
  i1106.duration = i1107[2]
  i1106.easeType = i1107[3]
  i1106.moveType = i1107[4]
  i1106.jumpPower = i1107[5]
  i1106.numJumps = i1107[6]
  i1106.rotate360DuringJump = !!i1107[7]
  i1106.setParentToTarget = !!i1107[8]
  i1106.onComplete = request.d('UnityEngine.Events.UnityEvent', i1107[9], i1106.onComplete)
  i1106.lockInputWhileMoving = !!i1107[10]
  i1106.resetParentBeforeMove = !!i1107[11]
  return i1106
}

Deserializers["Salt"] = function (request, data, root) {
  var i1108 = root || request.c( 'Salt' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'fishFillet')
  i1108.isDone = !!i1109[2]
  i1108.onProcess = !!i1109[3]
  request.r(i1109[4], i1109[5], 0, i1108, 'itemDraggable')
  request.r(i1109[6], i1109[7], 0, i1108, 'itemClickable')
  request.r(i1109[8], i1109[9], 0, i1108, 'itemStirring')
  request.r(i1109[10], i1109[11], 0, i1108, 'itemKnifeSpriteMaskCutter')
  request.r(i1109[12], i1109[13], 0, i1108, 'itemSpriteMaskPainter')
  request.r(i1109[14], i1109[15], 0, i1108, 'itemMoveToTarget')
  request.r(i1109[16], i1109[17], 0, i1108, 'animator')
  i1108.itemType = i1109[18]
  request.r(i1109[19], i1109[20], 0, i1108, 'spriteRenderer')
  i1108.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1109[21], i1108.onKnifeIn)
  i1108.heartEffectScale = i1109[22]
  i1108.playMoveToTargetFinishSound = !!i1109[23]
  i1108.moveToTargetFinishFxType = i1109[24]
  return i1108
}

Deserializers["EggBowl"] = function (request, data, root) {
  var i1110 = root || request.c( 'EggBowl' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'spoon')
  request.r(i1111[2], i1111[3], 0, i1110, 'fishFillet')
  request.r(i1111[4], i1111[5], 0, i1110, 'fishDropParticle')
  i1110.fishDropParticleDuration = i1111[6]
  i1110.isDone = !!i1111[7]
  i1110.onProcess = !!i1111[8]
  request.r(i1111[9], i1111[10], 0, i1110, 'itemDraggable')
  request.r(i1111[11], i1111[12], 0, i1110, 'itemClickable')
  request.r(i1111[13], i1111[14], 0, i1110, 'itemStirring')
  request.r(i1111[15], i1111[16], 0, i1110, 'itemKnifeSpriteMaskCutter')
  request.r(i1111[17], i1111[18], 0, i1110, 'itemSpriteMaskPainter')
  request.r(i1111[19], i1111[20], 0, i1110, 'itemMoveToTarget')
  request.r(i1111[21], i1111[22], 0, i1110, 'animator')
  i1110.itemType = i1111[23]
  request.r(i1111[24], i1111[25], 0, i1110, 'spriteRenderer')
  i1110.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1111[26], i1110.onKnifeIn)
  i1110.heartEffectScale = i1111[27]
  i1110.playMoveToTargetFinishSound = !!i1111[28]
  i1110.moveToTargetFinishFxType = i1111[29]
  return i1110
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i1112 = root || request.c( 'ItemStirring' )
  var i1113 = data
  i1112.stirRadius = i1113[0]
  request.r(i1113[1], i1113[2], 0, i1112, 'stirrerTransform')
  request.r(i1113[3], i1113[4], 0, i1112, 'centerPoint')
  request.r(i1113[5], i1113[6], 0, i1112, 'targetAnimator')
  i1112.targetStateName = i1113[7]
  i1112.targetLayer = i1113[8]
  i1112.stoppedSpeed = i1113[9]
  i1112.minDragDistanceToAnimate = i1113[10]
  i1112.dragSpeedMultiplier = i1113[11]
  i1112.minAnimatorSpeed = i1113[12]
  i1112.maxAnimatorSpeed = i1113[13]
  i1112.speedBlendDuration = i1113[14]
  i1112.completeNormalizedTime = i1113[15]
  i1112.resetAnimationOnFirstBegin = !!i1113[16]
  var i1115 = i1113[17]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('StirMilestone', i1115[i + 0]));
  }
  i1112.milestones = i1114
  i1112.spawnProgressBarOnStir = !!i1113[18]
  request.r(i1113[19], i1113[20], 0, i1112, 'spawnProgressBarPoint')
  i1112.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i1113[21], i1112.onStirBegin)
  i1112.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i1113[22], i1112.onStirComplete)
  return i1112
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i1118 = root || request.c( 'StirMilestone' )
  var i1119 = data
  i1118.distanceThreshold = i1119[0]
  i1118.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i1119[1], i1118.onMilestoneReached)
  i1118.isReached = !!i1119[2]
  return i1118
}

Deserializers["Pan"] = function (request, data, root) {
  var i1120 = root || request.c( 'Pan' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'fryingFX')
  request.r(i1121[2], i1121[3], 0, i1120, 'oilObject')
  i1120.cakeFryDuration = i1121[4]
  i1120.isOilIn = !!i1121[5]
  i1120.isTurnOnStove = !!i1121[6]
  i1120.stoveShakeDelay = i1121[7]
  i1120.stoveShakeDuration = i1121[8]
  i1120.stoveShakeStrength = i1121[9]
  i1120.stoveShakeVibrato = i1121[10]
  i1120.isDone = !!i1121[11]
  i1120.onProcess = !!i1121[12]
  request.r(i1121[13], i1121[14], 0, i1120, 'itemDraggable')
  request.r(i1121[15], i1121[16], 0, i1120, 'itemClickable')
  request.r(i1121[17], i1121[18], 0, i1120, 'itemStirring')
  request.r(i1121[19], i1121[20], 0, i1120, 'itemKnifeSpriteMaskCutter')
  request.r(i1121[21], i1121[22], 0, i1120, 'itemSpriteMaskPainter')
  request.r(i1121[23], i1121[24], 0, i1120, 'itemMoveToTarget')
  request.r(i1121[25], i1121[26], 0, i1120, 'animator')
  i1120.itemType = i1121[27]
  request.r(i1121[28], i1121[29], 0, i1120, 'spriteRenderer')
  i1120.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1121[30], i1120.onKnifeIn)
  i1120.heartEffectScale = i1121[31]
  i1120.playMoveToTargetFinishSound = !!i1121[32]
  i1120.moveToTargetFinishFxType = i1121[33]
  return i1120
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1122 = root || request.c( 'ItemClickable' )
  var i1123 = data
  i1122.requiredClicks = i1123[0]
  i1122.infiniteClick = !!i1123[1]
  i1122.canClick = !!i1123[2]
  i1122.disableAfterClick = !!i1123[3]
  i1122.onClick = request.d('UnityEngine.Events.UnityEvent', i1123[4], i1122.onClick)
  var i1125 = i1123[5]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.Events.UnityEvent', i1125[i + 0]));
  }
  i1122.sequentialOnClicks = i1124
  i1122.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1123[6], i1122.onClickComplete)
  return i1122
}

Deserializers["Tray"] = function (request, data, root) {
  var i1128 = root || request.c( 'Tray' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'fishFillet')
  i1128.isDone = !!i1129[2]
  i1128.onProcess = !!i1129[3]
  request.r(i1129[4], i1129[5], 0, i1128, 'itemDraggable')
  request.r(i1129[6], i1129[7], 0, i1128, 'itemClickable')
  request.r(i1129[8], i1129[9], 0, i1128, 'itemStirring')
  request.r(i1129[10], i1129[11], 0, i1128, 'itemKnifeSpriteMaskCutter')
  request.r(i1129[12], i1129[13], 0, i1128, 'itemSpriteMaskPainter')
  request.r(i1129[14], i1129[15], 0, i1128, 'itemMoveToTarget')
  request.r(i1129[16], i1129[17], 0, i1128, 'animator')
  i1128.itemType = i1129[18]
  request.r(i1129[19], i1129[20], 0, i1128, 'spriteRenderer')
  i1128.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1129[21], i1128.onKnifeIn)
  i1128.heartEffectScale = i1129[22]
  i1128.playMoveToTargetFinishSound = !!i1129[23]
  i1128.moveToTargetFinishFxType = i1129[24]
  return i1128
}

Deserializers["FishFillet"] = function (request, data, root) {
  var i1130 = root || request.c( 'FishFillet' )
  var i1131 = data
  i1130.currentStep = i1131[0]
  var i1133 = i1131[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 2, i1132, '')
  }
  i1130.moveTargets = i1132
  i1130.isSaltIn = !!i1131[2]
  i1130.isEggReady = !!i1131[3]
  request.r(i1131[4], i1131[5], 0, i1130, 'fishObject')
  var i1135 = i1131[6]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 2, i1134, '')
  }
  i1130.spriteRenderers = i1134
  var i1137 = i1131[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1130.fishDoneRenderers = i1136
  request.r(i1131[8], i1131[9], 0, i1130, 'eggFish')
  request.r(i1131[10], i1131[11], 0, i1130, 'flourFish')
  request.r(i1131[12], i1131[13], 0, i1130, 'salt')
  request.r(i1131[14], i1131[15], 0, i1130, 'plate')
  request.r(i1131[16], i1131[17], 0, i1130, 'eggBowl')
  request.r(i1131[18], i1131[19], 0, i1130, 'flourBowl')
  request.r(i1131[20], i1131[21], 0, i1130, 'clockTimerPrefab')
  request.r(i1131[22], i1131[23], 0, i1130, 'clockSpawnPoint')
  i1130.cookDuration = i1131[24]
  i1130.readyZ = i1131[25]
  request.r(i1131[26], i1131[27], 0, i1130, 'pan')
  request.r(i1131[28], i1131[29], 0, i1130, 'spawnClockOnPan')
  i1130.panCookDuration = i1131[30]
  i1130.bobUseLocalMove = !!i1131[31]
  i1130.bobOffset = new pc.Vec3( i1131[32], i1131[33], i1131[34] )
  i1130.bobDuration = i1131[35]
  i1130.bobEase = i1131[36]
  i1130.returnDuration = i1131[37]
  i1130.returnEase = i1131[38]
  i1130.targetPunchScale = new pc.Vec3( i1131[39], i1131[40], i1131[41] )
  i1130.targetPunchDuration = i1131[42]
  i1130.targetPunchVibrato = i1131[43]
  i1130.targetPunchElasticity = i1131[44]
  i1130.flourJumpPower = i1131[45]
  i1130.flourJumpDuration = i1131[46]
  i1130.flourJumpOffsets = i1131[47]
  i1130.isDone = !!i1131[48]
  i1130.onProcess = !!i1131[49]
  request.r(i1131[50], i1131[51], 0, i1130, 'itemDraggable')
  request.r(i1131[52], i1131[53], 0, i1130, 'itemClickable')
  request.r(i1131[54], i1131[55], 0, i1130, 'itemStirring')
  request.r(i1131[56], i1131[57], 0, i1130, 'itemKnifeSpriteMaskCutter')
  request.r(i1131[58], i1131[59], 0, i1130, 'itemSpriteMaskPainter')
  request.r(i1131[60], i1131[61], 0, i1130, 'itemMoveToTarget')
  request.r(i1131[62], i1131[63], 0, i1130, 'animator')
  i1130.itemType = i1131[64]
  request.r(i1131[65], i1131[66], 0, i1130, 'spriteRenderer')
  i1130.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1131[67], i1130.onKnifeIn)
  i1130.heartEffectScale = i1131[68]
  i1130.playMoveToTargetFinishSound = !!i1131[69]
  i1130.moveToTargetFinishFxType = i1131[70]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1141 = data
  i1140.frontSortingLayerID = i1141[0]
  i1140.frontSortingOrder = i1141[1]
  i1140.backSortingLayerID = i1141[2]
  i1140.backSortingOrder = i1141[3]
  i1140.alphaCutoff = i1141[4]
  request.r(i1141[5], i1141[6], 0, i1140, 'sprite')
  i1140.tileMode = i1141[7]
  i1140.isCustomRangeActive = !!i1141[8]
  i1140.spriteSortPoint = i1141[9]
  i1140.enabled = !!i1141[10]
  request.r(i1141[11], i1141[12], 0, i1140, 'sharedMaterial')
  var i1143 = i1141[13]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 2, i1142, '')
  }
  i1140.sharedMaterials = i1142
  i1140.receiveShadows = !!i1141[14]
  i1140.shadowCastingMode = i1141[15]
  i1140.sortingLayerID = i1141[16]
  i1140.sortingOrder = i1141[17]
  i1140.lightmapIndex = i1141[18]
  i1140.lightmapSceneIndex = i1141[19]
  i1140.lightmapScaleOffset = new pc.Vec4( i1141[20], i1141[21], i1141[22], i1141[23] )
  i1140.lightProbeUsage = i1141[24]
  i1140.reflectionProbeUsage = i1141[25]
  return i1140
}

Deserializers["Tongs"] = function (request, data, root) {
  var i1144 = root || request.c( 'Tongs' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'fishFillet')
  request.r(i1145[2], i1145[3], 0, i1144, 'fishPoint')
  i1144.catchDuration = i1145[4]
  i1144.raycastDistance = i1145[5]
  i1144.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1145[6] )
  i1144.isDone = !!i1145[7]
  i1144.onProcess = !!i1145[8]
  request.r(i1145[9], i1145[10], 0, i1144, 'itemDraggable')
  request.r(i1145[11], i1145[12], 0, i1144, 'itemClickable')
  request.r(i1145[13], i1145[14], 0, i1144, 'itemStirring')
  request.r(i1145[15], i1145[16], 0, i1144, 'itemKnifeSpriteMaskCutter')
  request.r(i1145[17], i1145[18], 0, i1144, 'itemSpriteMaskPainter')
  request.r(i1145[19], i1145[20], 0, i1144, 'itemMoveToTarget')
  request.r(i1145[21], i1145[22], 0, i1144, 'animator')
  i1144.itemType = i1145[23]
  request.r(i1145[24], i1145[25], 0, i1144, 'spriteRenderer')
  i1144.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1145[26], i1144.onKnifeIn)
  i1144.heartEffectScale = i1145[27]
  i1144.playMoveToTargetFinishSound = !!i1145[28]
  i1144.moveToTargetFinishFxType = i1145[29]
  return i1144
}

Deserializers["Blender"] = function (request, data, root) {
  var i1146 = root || request.c( 'Blender' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'capClosePos')
  request.r(i1147[2], i1147[3], 0, i1146, 'cap')
  request.r(i1147[4], i1147[5], 0, i1146, 'button')
  request.r(i1147[6], i1147[7], 0, i1146, 'buttonOn')
  i1146.countFoodIn = i1147[8]
  i1146.isClose = !!i1147[9]
  i1146.isDone = !!i1147[10]
  i1146.onProcess = !!i1147[11]
  request.r(i1147[12], i1147[13], 0, i1146, 'itemDraggable')
  request.r(i1147[14], i1147[15], 0, i1146, 'itemClickable')
  request.r(i1147[16], i1147[17], 0, i1146, 'itemStirring')
  request.r(i1147[18], i1147[19], 0, i1146, 'itemKnifeSpriteMaskCutter')
  request.r(i1147[20], i1147[21], 0, i1146, 'itemSpriteMaskPainter')
  request.r(i1147[22], i1147[23], 0, i1146, 'itemMoveToTarget')
  request.r(i1147[24], i1147[25], 0, i1146, 'animator')
  i1146.itemType = i1147[26]
  request.r(i1147[27], i1147[28], 0, i1146, 'spriteRenderer')
  i1146.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1147[29], i1146.onKnifeIn)
  i1146.heartEffectScale = i1147[30]
  i1146.playMoveToTargetFinishSound = !!i1147[31]
  i1146.moveToTargetFinishFxType = i1147[32]
  return i1146
}

Deserializers["FoodToBlender"] = function (request, data, root) {
  var i1148 = root || request.c( 'FoodToBlender' )
  var i1149 = data
  i1148.foodType = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'blender')
  i1148.isDone = !!i1149[3]
  i1148.onProcess = !!i1149[4]
  request.r(i1149[5], i1149[6], 0, i1148, 'itemDraggable')
  request.r(i1149[7], i1149[8], 0, i1148, 'itemClickable')
  request.r(i1149[9], i1149[10], 0, i1148, 'itemStirring')
  request.r(i1149[11], i1149[12], 0, i1148, 'itemKnifeSpriteMaskCutter')
  request.r(i1149[13], i1149[14], 0, i1148, 'itemSpriteMaskPainter')
  request.r(i1149[15], i1149[16], 0, i1148, 'itemMoveToTarget')
  request.r(i1149[17], i1149[18], 0, i1148, 'animator')
  i1148.itemType = i1149[19]
  request.r(i1149[20], i1149[21], 0, i1148, 'spriteRenderer')
  i1148.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1149[22], i1148.onKnifeIn)
  i1148.heartEffectScale = i1149[23]
  i1148.playMoveToTargetFinishSound = !!i1149[24]
  i1148.moveToTargetFinishFxType = i1149[25]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1151 = data
  i1150.ambientIntensity = i1151[0]
  i1150.reflectionIntensity = i1151[1]
  i1150.ambientMode = i1151[2]
  i1150.ambientLight = new pc.Color(i1151[3], i1151[4], i1151[5], i1151[6])
  i1150.ambientSkyColor = new pc.Color(i1151[7], i1151[8], i1151[9], i1151[10])
  i1150.ambientGroundColor = new pc.Color(i1151[11], i1151[12], i1151[13], i1151[14])
  i1150.ambientEquatorColor = new pc.Color(i1151[15], i1151[16], i1151[17], i1151[18])
  i1150.fogColor = new pc.Color(i1151[19], i1151[20], i1151[21], i1151[22])
  i1150.fogEndDistance = i1151[23]
  i1150.fogStartDistance = i1151[24]
  i1150.fogDensity = i1151[25]
  i1150.fog = !!i1151[26]
  request.r(i1151[27], i1151[28], 0, i1150, 'skybox')
  i1150.fogMode = i1151[29]
  var i1153 = i1151[30]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1153[i + 0]) );
  }
  i1150.lightmaps = i1152
  i1150.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1151[31], i1150.lightProbes)
  i1150.lightmapsMode = i1151[32]
  i1150.mixedBakeMode = i1151[33]
  i1150.environmentLightingMode = i1151[34]
  i1150.ambientProbe = new pc.SphericalHarmonicsL2(i1151[35])
  i1150.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1151[36])
  i1150.useReferenceAmbientProbe = !!i1151[37]
  request.r(i1151[38], i1151[39], 0, i1150, 'customReflection')
  request.r(i1151[40], i1151[41], 0, i1150, 'defaultReflection')
  i1150.defaultReflectionMode = i1151[42]
  i1150.defaultReflectionResolution = i1151[43]
  i1150.sunLightObjectId = i1151[44]
  i1150.pixelLightCount = i1151[45]
  i1150.defaultReflectionHDR = !!i1151[46]
  i1150.hasLightDataAsset = !!i1151[47]
  i1150.hasManualGenerate = !!i1151[48]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'lightmapColor')
  request.r(i1157[2], i1157[3], 0, i1156, 'lightmapDirection')
  request.r(i1157[4], i1157[5], 0, i1156, 'shadowMask')
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1158 = root || new UnityEngine.LightProbes()
  var i1159 = data
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1169[i + 0]));
  }
  i1166.ShaderCompilationErrors = i1168
  i1166.name = i1167[1]
  i1166.guid = i1167[2]
  var i1171 = i1167[3]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1166.shaderDefinedKeywords = i1170
  var i1173 = i1167[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1173[i + 0]) );
  }
  i1166.passes = i1172
  var i1175 = i1167[5]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1175[i + 0]) );
  }
  i1166.usePasses = i1174
  var i1177 = i1167[6]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1177[i + 0]) );
  }
  i1166.defaultParameterValues = i1176
  request.r(i1167[7], i1167[8], 0, i1166, 'unityFallbackShader')
  i1166.readDepth = !!i1167[9]
  i1166.hasDepthOnlyPass = !!i1167[10]
  i1166.isCreatedByShaderGraph = !!i1167[11]
  i1166.disableBatching = !!i1167[12]
  i1166.compiled = !!i1167[13]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1181 = data
  i1180.shaderName = i1181[0]
  i1180.errorMessage = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1184 = root || new pc.UnityShaderPass()
  var i1185 = data
  i1184.id = i1185[0]
  i1184.subShaderIndex = i1185[1]
  i1184.name = i1185[2]
  i1184.passType = i1185[3]
  i1184.grabPassTextureName = i1185[4]
  i1184.usePass = !!i1185[5]
  i1184.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[6], i1184.zTest)
  i1184.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[7], i1184.zWrite)
  i1184.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[8], i1184.culling)
  i1184.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1185[9], i1184.blending)
  i1184.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1185[10], i1184.alphaBlending)
  i1184.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[11], i1184.colorWriteMask)
  i1184.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[12], i1184.offsetUnits)
  i1184.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[13], i1184.offsetFactor)
  i1184.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[14], i1184.stencilRef)
  i1184.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[15], i1184.stencilReadMask)
  i1184.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[16], i1184.stencilWriteMask)
  i1184.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1185[17], i1184.stencilOp)
  i1184.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1185[18], i1184.stencilOpFront)
  i1184.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1185[19], i1184.stencilOpBack)
  var i1187 = i1185[20]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1187[i + 0]) );
  }
  i1184.tags = i1186
  var i1189 = i1185[21]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1184.passDefinedKeywords = i1188
  var i1191 = i1185[22]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1191[i + 0]) );
  }
  i1184.passDefinedKeywordGroups = i1190
  var i1193 = i1185[23]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1193[i + 0]) );
  }
  i1184.variants = i1192
  var i1195 = i1185[24]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1195[i + 0]) );
  }
  i1184.excludedVariants = i1194
  i1184.hasDepthReader = !!i1185[25]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1197 = data
  i1196.val = i1197[0]
  i1196.name = i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1199 = data
  i1198.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1199[0], i1198.src)
  i1198.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1199[1], i1198.dst)
  i1198.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1199[2], i1198.op)
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1201 = data
  i1200.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[0], i1200.pass)
  i1200.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[1], i1200.fail)
  i1200.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[2], i1200.zFail)
  i1200.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[3], i1200.comp)
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1205 = data
  i1204.name = i1205[0]
  i1204.value = i1205[1]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1209 = data
  var i1211 = i1209[0]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( i1211[i + 0] );
  }
  i1208.keywords = i1210
  i1208.hasDiscard = !!i1209[1]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1215 = data
  i1214.passId = i1215[0]
  i1214.subShaderIndex = i1215[1]
  var i1217 = i1215[2]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( i1217[i + 0] );
  }
  i1214.keywords = i1216
  i1214.vertexProgram = i1215[3]
  i1214.fragmentProgram = i1215[4]
  i1214.exportedForWebGl2 = !!i1215[5]
  i1214.readDepth = !!i1215[6]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'shader')
  i1220.pass = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.type = i1225[1]
  i1224.value = new pc.Vec4( i1225[2], i1225[3], i1225[4], i1225[5] )
  i1224.textureValue = i1225[6]
  i1224.shaderPropertyFlag = i1225[7]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1227 = data
  i1226.name = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'texture')
  i1226.aabb = i1227[3]
  i1226.vertices = i1227[4]
  i1226.triangles = i1227[5]
  i1226.textureRect = UnityEngine.Rect.MinMaxRect(i1227[6], i1227[7], i1227[8], i1227[9])
  i1226.packedRect = UnityEngine.Rect.MinMaxRect(i1227[10], i1227[11], i1227[12], i1227[13])
  i1226.border = new pc.Vec4( i1227[14], i1227[15], i1227[16], i1227[17] )
  i1226.transparency = i1227[18]
  i1226.bounds = i1227[19]
  i1226.pixelsPerUnit = i1227[20]
  i1226.textureWidth = i1227[21]
  i1226.textureHeight = i1227[22]
  i1226.nativeSize = new pc.Vec2( i1227[23], i1227[24] )
  i1226.pivot = new pc.Vec2( i1227[25], i1227[26] )
  i1226.textureRectOffset = new pc.Vec2( i1227[27], i1227[28] )
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1229 = data
  i1228.name = i1229[0]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.wrapMode = i1231[1]
  i1230.isLooping = !!i1231[2]
  i1230.length = i1231[3]
  var i1233 = i1231[4]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1233[i + 0]) );
  }
  i1230.curves = i1232
  var i1235 = i1231[5]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1235[i + 0]) );
  }
  i1230.events = i1234
  i1230.halfPrecision = !!i1231[6]
  i1230._frameRate = i1231[7]
  i1230.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1231[8], i1230.localBounds)
  i1230.hasMuscleCurves = !!i1231[9]
  var i1237 = i1231[10]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1230.clipMuscleConstant = i1236
  i1230.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1231[11], i1230.clipBindingConstant)
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1241 = data
  i1240.path = i1241[0]
  i1240.hash = i1241[1]
  i1240.componentType = i1241[2]
  i1240.property = i1241[3]
  i1240.keys = i1241[4]
  var i1243 = i1241[5]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1243[i + 0]) );
  }
  i1240.objectReferenceKeys = i1242
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1247 = data
  i1246.time = i1247[0]
  request.r(i1247[1], i1247[2], 0, i1246, 'value')
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1251 = data
  i1250.functionName = i1251[0]
  i1250.floatParameter = i1251[1]
  i1250.intParameter = i1251[2]
  i1250.stringParameter = i1251[3]
  request.r(i1251[4], i1251[5], 0, i1250, 'objectReferenceParameter')
  i1250.time = i1251[6]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1253 = data
  i1252.center = new pc.Vec3( i1253[0], i1253[1], i1253[2] )
  i1252.extends = new pc.Vec3( i1253[3], i1253[4], i1253[5] )
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1256.genericBindings = i1258
  var i1261 = i1257[1]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( i1261[i + 0] );
  }
  i1256.pptrCurveMapping = i1260
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1263 = data
  i1262.name = i1263[0]
  var i1265 = i1263[1]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1265[i + 0]) );
  }
  i1262.layers = i1264
  var i1267 = i1263[2]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1267[i + 0]) );
  }
  i1262.parameters = i1266
  i1262.animationClips = i1263[3]
  i1262.avatarUnsupported = i1263[4]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.defaultWeight = i1271[1]
  i1270.blendingMode = i1271[2]
  i1270.avatarMask = i1271[3]
  i1270.syncedLayerIndex = i1271[4]
  i1270.syncedLayerAffectsTiming = !!i1271[5]
  i1270.syncedLayers = i1271[6]
  i1270.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1271[7], i1270.stateMachine)
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1273 = data
  i1272.id = i1273[0]
  i1272.name = i1273[1]
  i1272.path = i1273[2]
  var i1275 = i1273[3]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1275[i + 0]) );
  }
  i1272.states = i1274
  var i1277 = i1273[4]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1277[i + 0]) );
  }
  i1272.machines = i1276
  var i1279 = i1273[5]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1279[i + 0]) );
  }
  i1272.entryStateTransitions = i1278
  var i1281 = i1273[6]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1281[i + 0]) );
  }
  i1272.exitStateTransitions = i1280
  var i1283 = i1273[7]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1283[i + 0]) );
  }
  i1272.anyStateTransitions = i1282
  i1272.defaultStateId = i1273[8]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.name = i1287[1]
  i1286.cycleOffset = i1287[2]
  i1286.cycleOffsetParameter = i1287[3]
  i1286.cycleOffsetParameterActive = !!i1287[4]
  i1286.mirror = !!i1287[5]
  i1286.mirrorParameter = i1287[6]
  i1286.mirrorParameterActive = !!i1287[7]
  i1286.motionId = i1287[8]
  i1286.nameHash = i1287[9]
  i1286.fullPathHash = i1287[10]
  i1286.speed = i1287[11]
  i1286.speedParameter = i1287[12]
  i1286.speedParameterActive = !!i1287[13]
  i1286.tag = i1287[14]
  i1286.tagHash = i1287[15]
  i1286.writeDefaultValues = !!i1287[16]
  var i1289 = i1287[17]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 2, i1288, '')
  }
  i1286.behaviours = i1288
  var i1291 = i1287[18]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1291[i + 0]) );
  }
  i1286.transitions = i1290
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1297 = data
  i1296.fullPath = i1297[0]
  i1296.canTransitionToSelf = !!i1297[1]
  i1296.duration = i1297[2]
  i1296.exitTime = i1297[3]
  i1296.hasExitTime = !!i1297[4]
  i1296.hasFixedDuration = !!i1297[5]
  i1296.interruptionSource = i1297[6]
  i1296.offset = i1297[7]
  i1296.orderedInterruption = !!i1297[8]
  i1296.destinationStateId = i1297[9]
  i1296.isExit = !!i1297[10]
  i1296.mute = !!i1297[11]
  i1296.solo = !!i1297[12]
  var i1299 = i1297[13]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1299[i + 0]) );
  }
  i1296.conditions = i1298
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1305 = data
  i1304.destinationStateId = i1305[0]
  i1304.isExit = !!i1305[1]
  i1304.mute = !!i1305[2]
  i1304.solo = !!i1305[3]
  var i1307 = i1305[4]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1307[i + 0]) );
  }
  i1304.conditions = i1306
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1311 = data
  i1310.defaultBool = !!i1311[0]
  i1310.defaultFloat = i1311[1]
  i1310.defaultInt = i1311[2]
  i1310.name = i1311[3]
  i1310.nameHash = i1311[4]
  i1310.type = i1311[5]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1315 = data
  i1314.mode = i1315[0]
  i1314.parameter = i1315[1]
  i1314.threshold = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.bytes64 = i1317[1]
  i1316.data = i1317[2]
  return i1316
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1319 = data
  i1318.normalStyle = i1319[0]
  i1318.normalSpacingOffset = i1319[1]
  i1318.boldStyle = i1319[2]
  i1318.boldSpacing = i1319[3]
  i1318.italicStyle = i1319[4]
  i1318.tabSize = i1319[5]
  request.r(i1319[6], i1319[7], 0, i1318, 'atlas')
  i1318.m_SourceFontFileGUID = i1319[8]
  i1318.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1319[9], i1318.m_CreationSettings)
  request.r(i1319[10], i1319[11], 0, i1318, 'm_SourceFontFile')
  i1318.m_SourceFontFilePath = i1319[12]
  i1318.m_AtlasPopulationMode = i1319[13]
  i1318.InternalDynamicOS = !!i1319[14]
  var i1321 = i1319[15]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('UnityEngine.TextCore.Glyph', i1321[i + 0]));
  }
  i1318.m_GlyphTable = i1320
  var i1323 = i1319[16]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_Character', i1323[i + 0]));
  }
  i1318.m_CharacterTable = i1322
  var i1325 = i1319[17]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 2, i1324, '')
  }
  i1318.m_AtlasTextures = i1324
  i1318.m_AtlasTextureIndex = i1319[18]
  i1318.m_IsMultiAtlasTexturesEnabled = !!i1319[19]
  i1318.m_GetFontFeatures = !!i1319[20]
  i1318.m_ClearDynamicDataOnBuild = !!i1319[21]
  i1318.m_AtlasWidth = i1319[22]
  i1318.m_AtlasHeight = i1319[23]
  i1318.m_AtlasPadding = i1319[24]
  i1318.m_AtlasRenderMode = i1319[25]
  var i1327 = i1319[26]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('UnityEngine.TextCore.GlyphRect', i1327[i + 0]));
  }
  i1318.m_UsedGlyphRects = i1326
  var i1329 = i1319[27]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('UnityEngine.TextCore.GlyphRect', i1329[i + 0]));
  }
  i1318.m_FreeGlyphRects = i1328
  i1318.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1319[28], i1318.m_FontFeatureTable)
  i1318.m_ShouldReimportFontFeatures = !!i1319[29]
  var i1331 = i1319[30]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 1, i1330, '')
  }
  i1318.m_FallbackFontAssetTable = i1330
  var i1333 = i1319[31]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('TMPro.TMP_FontWeightPair', i1333[i + 0]) );
  }
  i1318.m_FontWeightTable = i1332
  var i1335 = i1319[32]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('TMPro.TMP_FontWeightPair', i1335[i + 0]) );
  }
  i1318.fontWeights = i1334
  i1318.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1319[33], i1318.m_fontInfo)
  var i1337 = i1319[34]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Glyph', i1337[i + 0]));
  }
  i1318.m_glyphInfoList = i1336
  i1318.m_KerningTable = request.d('TMPro.KerningTable', i1319[35], i1318.m_KerningTable)
  var i1339 = i1319[36]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1318.fallbackFontAssets = i1338
  i1318.m_Version = i1319[37]
  i1318.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1319[38], i1318.m_FaceInfo)
  request.r(i1319[39], i1319[40], 0, i1318, 'm_Material')
  return i1318
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1341 = data
  i1340.sourceFontFileName = i1341[0]
  i1340.sourceFontFileGUID = i1341[1]
  i1340.faceIndex = i1341[2]
  i1340.pointSizeSamplingMode = i1341[3]
  i1340.pointSize = i1341[4]
  i1340.padding = i1341[5]
  i1340.paddingMode = i1341[6]
  i1340.packingMode = i1341[7]
  i1340.atlasWidth = i1341[8]
  i1340.atlasHeight = i1341[9]
  i1340.characterSetSelectionMode = i1341[10]
  i1340.characterSequence = i1341[11]
  i1340.referencedFontAssetGUID = i1341[12]
  i1340.referencedTextAssetGUID = i1341[13]
  i1340.fontStyle = i1341[14]
  i1340.fontStyleModifier = i1341[15]
  i1340.renderMode = i1341[16]
  i1340.includeFontFeatures = !!i1341[17]
  return i1340
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1345 = data
  i1344.m_Index = i1345[0]
  i1344.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1345[1], i1344.m_Metrics)
  i1344.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1345[2], i1344.m_GlyphRect)
  i1344.m_Scale = i1345[3]
  i1344.m_AtlasIndex = i1345[4]
  i1344.m_ClassDefinitionType = i1345[5]
  return i1344
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1347 = data
  i1346.m_Width = i1347[0]
  i1346.m_Height = i1347[1]
  i1346.m_HorizontalBearingX = i1347[2]
  i1346.m_HorizontalBearingY = i1347[3]
  i1346.m_HorizontalAdvance = i1347[4]
  return i1346
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1349 = data
  i1348.m_X = i1349[0]
  i1348.m_Y = i1349[1]
  i1348.m_Width = i1349[2]
  i1348.m_Height = i1349[3]
  return i1348
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_Character' )
  var i1353 = data
  i1352.m_ElementType = i1353[0]
  i1352.m_Unicode = i1353[1]
  i1352.m_GlyphIndex = i1353[2]
  i1352.m_Scale = i1353[3]
  return i1352
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.MultipleSubstitutionRecord', i1361[i + 0]));
  }
  i1358.m_MultipleSubstitutionRecords = i1360
  var i1363 = i1359[1]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('TMPro.LigatureSubstitutionRecord', i1363[i + 0]));
  }
  i1358.m_LigatureSubstitutionRecords = i1362
  var i1365 = i1359[2]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1365[i + 0]));
  }
  i1358.m_GlyphPairAdjustmentRecords = i1364
  var i1367 = i1359[3]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1367[i + 0]));
  }
  i1358.m_MarkToBaseAdjustmentRecords = i1366
  var i1369 = i1359[4]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1369[i + 0]));
  }
  i1358.m_MarkToMarkAdjustmentRecords = i1368
  return i1358
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1373 = data
  i1372.m_TargetGlyphID = i1373[0]
  i1372.m_SubstituteGlyphIDs = i1373[1]
  return i1372
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1377 = data
  i1376.m_ComponentGlyphIDs = i1377[0]
  i1376.m_LigatureGlyphID = i1377[1]
  return i1376
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1381 = data
  i1380.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1381[0], i1380.m_FirstAdjustmentRecord)
  i1380.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1381[1], i1380.m_SecondAdjustmentRecord)
  i1380.m_FeatureLookupFlags = i1381[2]
  return i1380
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1385 = data
  i1384.m_BaseGlyphID = i1385[0]
  i1384.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1385[1], i1384.m_BaseGlyphAnchorPoint)
  i1384.m_MarkGlyphID = i1385[2]
  i1384.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1385[3], i1384.m_MarkPositionAdjustment)
  return i1384
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1389 = data
  i1388.m_BaseMarkGlyphID = i1389[0]
  i1388.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1389[1], i1388.m_BaseMarkGlyphAnchorPoint)
  i1388.m_CombiningMarkGlyphID = i1389[2]
  i1388.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1389[3], i1388.m_CombiningMarkPositionAdjustment)
  return i1388
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'regularTypeface')
  request.r(i1395[2], i1395[3], 0, i1394, 'italicTypeface')
  return i1394
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1397 = data
  i1396.Name = i1397[0]
  i1396.PointSize = i1397[1]
  i1396.Scale = i1397[2]
  i1396.CharacterCount = i1397[3]
  i1396.LineHeight = i1397[4]
  i1396.Baseline = i1397[5]
  i1396.Ascender = i1397[6]
  i1396.CapHeight = i1397[7]
  i1396.Descender = i1397[8]
  i1396.CenterLine = i1397[9]
  i1396.SuperscriptOffset = i1397[10]
  i1396.SubscriptOffset = i1397[11]
  i1396.SubSize = i1397[12]
  i1396.Underline = i1397[13]
  i1396.UnderlineThickness = i1397[14]
  i1396.strikethrough = i1397[15]
  i1396.strikethroughThickness = i1397[16]
  i1396.TabWidth = i1397[17]
  i1396.Padding = i1397[18]
  i1396.AtlasWidth = i1397[19]
  i1396.AtlasHeight = i1397[20]
  return i1396
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1401 = data
  i1400.id = i1401[0]
  i1400.x = i1401[1]
  i1400.y = i1401[2]
  i1400.width = i1401[3]
  i1400.height = i1401[4]
  i1400.xOffset = i1401[5]
  i1400.yOffset = i1401[6]
  i1400.xAdvance = i1401[7]
  i1400.scale = i1401[8]
  return i1400
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.KerningTable' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('TMPro.KerningPair', i1405[i + 0]));
  }
  i1402.kerningPairs = i1404
  return i1402
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.KerningPair' )
  var i1409 = data
  i1408.xOffset = i1409[0]
  i1408.m_FirstGlyph = i1409[1]
  i1408.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1409[2], i1408.m_FirstGlyphAdjustments)
  i1408.m_SecondGlyph = i1409[3]
  i1408.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1409[4], i1408.m_SecondGlyphAdjustments)
  i1408.m_IgnoreSpacingAdjustments = !!i1409[5]
  return i1408
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1411 = data
  i1410.m_FaceIndex = i1411[0]
  i1410.m_FamilyName = i1411[1]
  i1410.m_StyleName = i1411[2]
  i1410.m_PointSize = i1411[3]
  i1410.m_Scale = i1411[4]
  i1410.m_UnitsPerEM = i1411[5]
  i1410.m_LineHeight = i1411[6]
  i1410.m_AscentLine = i1411[7]
  i1410.m_CapLine = i1411[8]
  i1410.m_MeanLine = i1411[9]
  i1410.m_Baseline = i1411[10]
  i1410.m_DescentLine = i1411[11]
  i1410.m_SuperscriptOffset = i1411[12]
  i1410.m_SuperscriptSize = i1411[13]
  i1410.m_SubscriptOffset = i1411[14]
  i1410.m_SubscriptSize = i1411[15]
  i1410.m_UnderlineOffset = i1411[16]
  i1410.m_UnderlineThickness = i1411[17]
  i1410.m_StrikethroughOffset = i1411[18]
  i1410.m_StrikethroughThickness = i1411[19]
  i1410.m_TabWidth = i1411[20]
  return i1410
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1412 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1413 = data
  var i1415 = i1413[0]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 2, i1414, '')
  }
  i1412.atlasAssets = i1414
  i1412.scale = i1413[1]
  request.r(i1413[2], i1413[3], 0, i1412, 'skeletonJSON')
  i1412.isUpgradingBlendModeMaterials = !!i1413[4]
  i1412.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1413[5], i1412.blendModeMaterials)
  var i1417 = i1413[6]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 1, i1416, '')
  }
  i1412.skeletonDataModifiers = i1416
  var i1419 = i1413[7]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1412.fromAnimation = i1418
  var i1421 = i1413[8]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1412.toAnimation = i1420
  i1412.duration = i1413[9]
  i1412.defaultMix = i1413[10]
  request.r(i1413[11], i1413[12], 0, i1412, 'controller')
  return i1412
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1424 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1425 = data
  i1424.applyAdditiveMaterial = !!i1425[0]
  var i1427 = i1425[1]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1427[i + 0]));
  }
  i1424.additiveMaterials = i1426
  var i1429 = i1425[2]
  var i1428 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1429[i + 0]));
  }
  i1424.multiplyMaterials = i1428
  var i1431 = i1425[3]
  var i1430 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1431[i + 0]));
  }
  i1424.screenMaterials = i1430
  i1424.requiresBlendModeMaterials = !!i1425[4]
  return i1424
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1434 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1435 = data
  i1434.pageName = i1435[0]
  request.r(i1435[1], i1435[2], 0, i1434, 'material')
  return i1434
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1438 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'atlasFile')
  var i1441 = i1439[2]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 2, i1440, '')
  }
  i1438.materials = i1440
  return i1438
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1443 = data
  i1442.useSafeMode = !!i1443[0]
  i1442.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1443[1], i1442.safeModeOptions)
  i1442.timeScale = i1443[2]
  i1442.unscaledTimeScale = i1443[3]
  i1442.useSmoothDeltaTime = !!i1443[4]
  i1442.maxSmoothUnscaledTime = i1443[5]
  i1442.rewindCallbackMode = i1443[6]
  i1442.showUnityEditorReport = !!i1443[7]
  i1442.logBehaviour = i1443[8]
  i1442.drawGizmos = !!i1443[9]
  i1442.defaultRecyclable = !!i1443[10]
  i1442.defaultAutoPlay = i1443[11]
  i1442.defaultUpdateType = i1443[12]
  i1442.defaultTimeScaleIndependent = !!i1443[13]
  i1442.defaultEaseType = i1443[14]
  i1442.defaultEaseOvershootOrAmplitude = i1443[15]
  i1442.defaultEasePeriod = i1443[16]
  i1442.defaultAutoKill = !!i1443[17]
  i1442.defaultLoopType = i1443[18]
  i1442.debugMode = !!i1443[19]
  i1442.debugStoreTargetId = !!i1443[20]
  i1442.showPreviewPanel = !!i1443[21]
  i1442.storeSettingsLocation = i1443[22]
  i1442.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1443[23], i1442.modules)
  i1442.createASMDEF = !!i1443[24]
  i1442.showPlayingTweens = !!i1443[25]
  i1442.showPausedTweens = !!i1443[26]
  return i1442
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1444 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1445 = data
  i1444.logBehaviour = i1445[0]
  i1444.nestedTweenFailureBehaviour = i1445[1]
  return i1444
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1446 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1447 = data
  i1446.showPanel = !!i1447[0]
  i1446.audioEnabled = !!i1447[1]
  i1446.physicsEnabled = !!i1447[2]
  i1446.physics2DEnabled = !!i1447[3]
  i1446.spriteEnabled = !!i1447[4]
  i1446.uiEnabled = !!i1447[5]
  i1446.uiToolkitEnabled = !!i1447[6]
  i1446.textMeshProEnabled = !!i1447[7]
  i1446.tk2DEnabled = !!i1447[8]
  i1446.deAudioEnabled = !!i1447[9]
  i1446.deUnityExtendedEnabled = !!i1447[10]
  i1446.epoOutlineEnabled = !!i1447[11]
  return i1446
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.TMP_Settings' )
  var i1449 = data
  i1448.assetVersion = i1449[0]
  i1448.m_TextWrappingMode = i1449[1]
  i1448.m_enableKerning = !!i1449[2]
  var i1451 = i1449[3]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(i1451[i + 0]);
  }
  i1448.m_ActiveFontFeatures = i1450
  i1448.m_enableExtraPadding = !!i1449[4]
  i1448.m_enableTintAllSprites = !!i1449[5]
  i1448.m_enableParseEscapeCharacters = !!i1449[6]
  i1448.m_EnableRaycastTarget = !!i1449[7]
  i1448.m_GetFontFeaturesAtRuntime = !!i1449[8]
  i1448.m_missingGlyphCharacter = i1449[9]
  i1448.m_ClearDynamicDataOnBuild = !!i1449[10]
  i1448.m_warningsDisabled = !!i1449[11]
  request.r(i1449[12], i1449[13], 0, i1448, 'm_defaultFontAsset')
  i1448.m_defaultFontAssetPath = i1449[14]
  i1448.m_defaultFontSize = i1449[15]
  i1448.m_defaultAutoSizeMinRatio = i1449[16]
  i1448.m_defaultAutoSizeMaxRatio = i1449[17]
  i1448.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1449[18], i1449[19] )
  i1448.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1449[20], i1449[21] )
  i1448.m_autoSizeTextContainer = !!i1449[22]
  i1448.m_IsTextObjectScaleStatic = !!i1449[23]
  var i1453 = i1449[24]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1453.length; i += 2) {
  request.r(i1453[i + 0], i1453[i + 1], 1, i1452, '')
  }
  i1448.m_fallbackFontAssets = i1452
  i1448.m_matchMaterialPreset = !!i1449[25]
  i1448.m_HideSubTextObjects = !!i1449[26]
  request.r(i1449[27], i1449[28], 0, i1448, 'm_defaultSpriteAsset')
  i1448.m_defaultSpriteAssetPath = i1449[29]
  i1448.m_enableEmojiSupport = !!i1449[30]
  i1448.m_MissingCharacterSpriteUnicode = i1449[31]
  var i1455 = i1449[32]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 1, i1454, '')
  }
  i1448.m_EmojiFallbackTextAssets = i1454
  i1448.m_defaultColorGradientPresetsPath = i1449[33]
  request.r(i1449[34], i1449[35], 0, i1448, 'm_defaultStyleSheet')
  i1448.m_StyleSheetsResourcePath = i1449[36]
  request.r(i1449[37], i1449[38], 0, i1448, 'm_leadingCharacters')
  request.r(i1449[39], i1449[40], 0, i1448, 'm_followingCharacters')
  i1448.m_UseModernHangulLineBreakingRules = !!i1449[41]
  return i1448
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'spriteSheet')
  var i1461 = i1459[2]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.add(request.d('TMPro.TMP_Sprite', i1461[i + 0]));
  }
  i1458.spriteInfoList = i1460
  var i1463 = i1459[3]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1463.length; i += 2) {
  request.r(i1463[i + 0], i1463[i + 1], 1, i1462, '')
  }
  i1458.fallbackSpriteAssets = i1462
  var i1465 = i1459[4]
  var i1464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.add(request.d('TMPro.TMP_SpriteCharacter', i1465[i + 0]));
  }
  i1458.m_SpriteCharacterTable = i1464
  var i1467 = i1459[5]
  var i1466 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.add(request.d('TMPro.TMP_SpriteGlyph', i1467[i + 0]));
  }
  i1458.m_GlyphTable = i1466
  i1458.m_Version = i1459[6]
  i1458.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1459[7], i1458.m_FaceInfo)
  request.r(i1459[8], i1459[9], 0, i1458, 'm_Material')
  return i1458
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.hashCode = i1471[1]
  i1470.unicode = i1471[2]
  i1470.pivot = new pc.Vec2( i1471[3], i1471[4] )
  request.r(i1471[5], i1471[6], 0, i1470, 'sprite')
  i1470.id = i1471[7]
  i1470.x = i1471[8]
  i1470.y = i1471[9]
  i1470.width = i1471[10]
  i1470.height = i1471[11]
  i1470.xOffset = i1471[12]
  i1470.yOffset = i1471[13]
  i1470.xAdvance = i1471[14]
  i1470.scale = i1471[15]
  return i1470
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1476 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1477 = data
  i1476.m_Name = i1477[0]
  i1476.m_ElementType = i1477[1]
  i1476.m_Unicode = i1477[2]
  i1476.m_GlyphIndex = i1477[3]
  i1476.m_Scale = i1477[4]
  return i1476
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'sprite')
  i1480.m_Index = i1481[2]
  i1480.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1481[3], i1480.m_Metrics)
  i1480.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1481[4], i1480.m_GlyphRect)
  i1480.m_Scale = i1481[5]
  i1480.m_AtlasIndex = i1481[6]
  i1480.m_ClassDefinitionType = i1481[7]
  return i1480
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1482 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1483 = data
  var i1485 = i1483[0]
  var i1484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.add(request.d('TMPro.TMP_Style', i1485[i + 0]));
  }
  i1482.m_StyleList = i1484
  return i1482
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.TMP_Style' )
  var i1489 = data
  i1488.m_Name = i1489[0]
  i1488.m_HashCode = i1489[1]
  i1488.m_OpeningDefinition = i1489[2]
  i1488.m_ClosingDefinition = i1489[3]
  i1488.m_OpeningTagArray = i1489[4]
  i1488.m_ClosingTagArray = i1489[5]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1491 = data
  var i1493 = i1491[0]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1493[i + 0]) );
  }
  i1490.files = i1492
  i1490.componentToPrefabIds = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1497 = data
  i1496.path = i1497[0]
  request.r(i1497[1], i1497[2], 0, i1496, 'unityObject')
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1499 = data
  var i1501 = i1499[0]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1501[i + 0]) );
  }
  i1498.scriptsExecutionOrder = i1500
  var i1503 = i1499[1]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1503[i + 0]) );
  }
  i1498.sortingLayers = i1502
  var i1505 = i1499[2]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1505[i + 0]) );
  }
  i1498.cullingLayers = i1504
  i1498.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1499[3], i1498.timeSettings)
  i1498.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1499[4], i1498.physicsSettings)
  i1498.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1499[5], i1498.physics2DSettings)
  i1498.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1499[6], i1498.qualitySettings)
  i1498.enableRealtimeShadows = !!i1499[7]
  i1498.enableAutoInstancing = !!i1499[8]
  i1498.enableStaticBatching = !!i1499[9]
  i1498.enableDynamicBatching = !!i1499[10]
  i1498.lightmapEncodingQuality = i1499[11]
  i1498.desiredColorSpace = i1499[12]
  var i1507 = i1499[13]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( i1507[i + 0] );
  }
  i1498.allTags = i1506
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.value = i1511[1]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1515 = data
  i1514.id = i1515[0]
  i1514.name = i1515[1]
  i1514.value = i1515[2]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1519 = data
  i1518.id = i1519[0]
  i1518.name = i1519[1]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1521 = data
  i1520.fixedDeltaTime = i1521[0]
  i1520.maximumDeltaTime = i1521[1]
  i1520.timeScale = i1521[2]
  i1520.maximumParticleTimestep = i1521[3]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1523 = data
  i1522.gravity = new pc.Vec3( i1523[0], i1523[1], i1523[2] )
  i1522.defaultSolverIterations = i1523[3]
  i1522.bounceThreshold = i1523[4]
  i1522.autoSyncTransforms = !!i1523[5]
  i1522.autoSimulation = !!i1523[6]
  var i1525 = i1523[7]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1525[i + 0]) );
  }
  i1522.collisionMatrix = i1524
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.layerId = i1529[1]
  i1528.otherLayerId = i1529[2]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1531 = data
  request.r(i1531[0], i1531[1], 0, i1530, 'material')
  i1530.gravity = new pc.Vec2( i1531[2], i1531[3] )
  i1530.positionIterations = i1531[4]
  i1530.velocityIterations = i1531[5]
  i1530.velocityThreshold = i1531[6]
  i1530.maxLinearCorrection = i1531[7]
  i1530.maxAngularCorrection = i1531[8]
  i1530.maxTranslationSpeed = i1531[9]
  i1530.maxRotationSpeed = i1531[10]
  i1530.baumgarteScale = i1531[11]
  i1530.baumgarteTOIScale = i1531[12]
  i1530.timeToSleep = i1531[13]
  i1530.linearSleepTolerance = i1531[14]
  i1530.angularSleepTolerance = i1531[15]
  i1530.defaultContactOffset = i1531[16]
  i1530.autoSimulation = !!i1531[17]
  i1530.queriesHitTriggers = !!i1531[18]
  i1530.queriesStartInColliders = !!i1531[19]
  i1530.callbacksOnDisable = !!i1531[20]
  i1530.reuseCollisionCallbacks = !!i1531[21]
  i1530.autoSyncTransforms = !!i1531[22]
  var i1533 = i1531[23]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1533[i + 0]) );
  }
  i1530.collisionMatrix = i1532
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1537 = data
  i1536.enabled = !!i1537[0]
  i1536.layerId = i1537[1]
  i1536.otherLayerId = i1537[2]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1539 = data
  var i1541 = i1539[0]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1541[i + 0]) );
  }
  i1538.qualityLevels = i1540
  var i1543 = i1539[1]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( i1543[i + 0] );
  }
  i1538.names = i1542
  i1538.shadows = i1539[2]
  i1538.anisotropicFiltering = i1539[3]
  i1538.antiAliasing = i1539[4]
  i1538.lodBias = i1539[5]
  i1538.shadowCascades = i1539[6]
  i1538.shadowDistance = i1539[7]
  i1538.shadowmaskMode = i1539[8]
  i1538.shadowProjection = i1539[9]
  i1538.shadowResolution = i1539[10]
  i1538.softParticles = !!i1539[11]
  i1538.softVegetation = !!i1539[12]
  i1538.activeColorSpace = i1539[13]
  i1538.desiredColorSpace = i1539[14]
  i1538.masterTextureLimit = i1539[15]
  i1538.maxQueuedFrames = i1539[16]
  i1538.particleRaycastBudget = i1539[17]
  i1538.pixelLightCount = i1539[18]
  i1538.realtimeReflectionProbes = !!i1539[19]
  i1538.shadowCascade2Split = i1539[20]
  i1538.shadowCascade4Split = new pc.Vec3( i1539[21], i1539[22], i1539[23] )
  i1538.streamingMipmapsActive = !!i1539[24]
  i1538.vSyncCount = i1539[25]
  i1538.asyncUploadBufferSize = i1539[26]
  i1538.asyncUploadTimeSlice = i1539[27]
  i1538.billboardsFaceCameraPosition = !!i1539[28]
  i1538.shadowNearPlaneOffset = i1539[29]
  i1538.streamingMipmapsMemoryBudget = i1539[30]
  i1538.maximumLODLevel = i1539[31]
  i1538.streamingMipmapsAddAllCameras = !!i1539[32]
  i1538.streamingMipmapsMaxLevelReduction = i1539[33]
  i1538.streamingMipmapsRenderersPerFrame = i1539[34]
  i1538.resolutionScalingFixedDPIFactor = i1539[35]
  i1538.streamingMipmapsMaxFileIORequests = i1539[36]
  i1538.currentQualityLevel = i1539[37]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1549 = data
  i1548.weight = i1549[0]
  i1548.vertices = i1549[1]
  i1548.normals = i1549[2]
  i1548.tangents = i1549[3]
  return i1548
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1551 = data
  i1550.m_GlyphIndex = i1551[0]
  i1550.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1551[1], i1550.m_GlyphValueRecord)
  return i1550
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1553 = data
  i1552.m_XCoordinate = i1553[0]
  i1552.m_YCoordinate = i1553[1]
  return i1552
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1554 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1555 = data
  i1554.m_XPositionAdjustment = i1555[0]
  i1554.m_YPositionAdjustment = i1555[1]
  return i1554
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1557 = data
  i1556.xPlacement = i1557[0]
  i1556.yPlacement = i1557[1]
  i1556.xAdvance = i1557[2]
  i1556.yAdvance = i1557[3]
  return i1556
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1559 = data
  i1558.m_XPlacement = i1559[0]
  i1558.m_YPlacement = i1559[1]
  i1558.m_XAdvance = i1559[2]
  i1558.m_YAdvance = i1559[3]
  return i1558
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[22],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[22],"106":[57],"107":[108],"109":[108],"21":[14],"66":[110],"62":[110],"111":[110],"112":[110],"65":[110],"113":[14],"114":[17,14],"58":[57],"115":[17,14],"116":[25,57],"117":[57],"118":[57,55],"119":[85],"120":[92],"121":[122],"123":[124],"125":[5],"126":[22],"127":[128],"129":[52],"130":[21],"131":[14],"132":[57,14],"27":[14,17],"133":[14],"134":[17,14],"135":[57],"136":[17,14],"137":[14],"138":[139],"140":[139],"141":[139],"142":[14],"143":[14],"24":[21],"16":[17,14],"144":[14],"23":[21],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[17,14],"155":[14],"156":[14],"157":[14],"158":[14],"159":[17,14],"160":[14],"161":[52],"162":[52],"53":[52],"163":[52],"164":[22],"165":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","Duck","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","Tray","Item","FishFillet","Salt","Tongs","FoodToBlender","Blender","Ply_ToggleEvent","SortChildByZPos","DuckManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","ContinuousRotation","Pan","ItemDraggable","ItemMoveToTarget","EggBowl","ItemStirring","ItemClickable","UnityEngine.SpriteMask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "13.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v57_Smorrebrod";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1761";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4913";

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

Deserializers.buildID = "7dd9103d-a773-4816-bca9-5ba9ddf5c4eb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

