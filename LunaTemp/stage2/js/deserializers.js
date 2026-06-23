var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.JointSpring' )
  var i797 = data
  i796.spring = i797[0]
  i796.damper = i797[1]
  i796.targetPosition = i797[2]
  return i796
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.JointMotor' )
  var i799 = data
  i798.m_TargetVelocity = i799[0]
  i798.m_Force = i799[1]
  i798.m_FreeSpin = i799[2]
  return i798
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.JointLimits' )
  var i801 = data
  i800.m_Min = i801[0]
  i800.m_Max = i801[1]
  i800.m_Bounciness = i801[2]
  i800.m_BounceMinVelocity = i801[3]
  i800.m_ContactDistance = i801[4]
  i800.minBounce = i801[5]
  i800.maxBounce = i801[6]
  return i800
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.JointDrive' )
  var i803 = data
  i802.m_PositionSpring = i803[0]
  i802.m_PositionDamper = i803[1]
  i802.m_MaximumForce = i803[2]
  i802.m_UseAcceleration = i803[3]
  return i802
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i805 = data
  i804.m_Spring = i805[0]
  i804.m_Damper = i805[1]
  return i804
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i807 = data
  i806.m_Limit = i807[0]
  i806.m_Bounciness = i807[1]
  i806.m_ContactDistance = i807[2]
  return i806
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i809 = data
  i808.m_ExtremumSlip = i809[0]
  i808.m_ExtremumValue = i809[1]
  i808.m_AsymptoteSlip = i809[2]
  i808.m_AsymptoteValue = i809[3]
  i808.m_Stiffness = i809[4]
  return i808
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i811 = data
  i810.m_LowerAngle = i811[0]
  i810.m_UpperAngle = i811[1]
  return i810
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i813 = data
  i812.m_MotorSpeed = i813[0]
  i812.m_MaximumMotorTorque = i813[1]
  return i812
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i815 = data
  i814.m_DampingRatio = i815[0]
  i814.m_Frequency = i815[1]
  i814.m_Angle = i815[2]
  return i814
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i817 = data
  i816.m_LowerTranslation = i817[0]
  i816.m_UpperTranslation = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i818 = root || new pc.UnityMaterial()
  var i819 = data
  i818.name = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'shader')
  i818.renderQueue = i819[3]
  i818.enableInstancing = !!i819[4]
  var i821 = i819[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i821[i + 0]) );
  }
  i818.floatParameters = i820
  var i823 = i819[6]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i823[i + 0]) );
  }
  i818.colorParameters = i822
  var i825 = i819[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i825[i + 0]) );
  }
  i818.vectorParameters = i824
  var i827 = i819[8]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i827[i + 0]) );
  }
  i818.textureParameters = i826
  var i829 = i819[9]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i829[i + 0]) );
  }
  i818.materialFlags = i828
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i837 = data
  i836.name = i837[0]
  i836.value = new pc.Color(i837[1], i837[2], i837[3], i837[4])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i841 = data
  i840.name = i841[0]
  i840.value = new pc.Vec4( i841[1], i841[2], i841[3], i841[4] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i845 = data
  i844.name = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'value')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i849 = data
  i848.name = i849[0]
  i848.enabled = !!i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i851 = data
  i850.name = i851[0]
  i850.width = i851[1]
  i850.height = i851[2]
  i850.mipmapCount = i851[3]
  i850.anisoLevel = i851[4]
  i850.filterMode = i851[5]
  i850.hdr = !!i851[6]
  i850.format = i851[7]
  i850.wrapMode = i851[8]
  i850.alphaIsTransparency = !!i851[9]
  i850.alphaSource = i851[10]
  i850.graphicsFormat = i851[11]
  i850.sRGBTexture = !!i851[12]
  i850.desiredColorSpace = i851[13]
  i850.wrapU = i851[14]
  i850.wrapV = i851[15]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i853 = data
  i852.position = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.scale = new pc.Vec3( i853[3], i853[4], i853[5] )
  i852.rotation = new pc.Quat(i853[6], i853[7], i853[8], i853[9])
  return i852
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i854 = root || request.c( 'HeartEffect' )
  var i855 = data
  i854.defaultLifeTime = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'tf')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i857 = data
  i856.color = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  request.r(i857[4], i857[5], 0, i856, 'sprite')
  i856.flipX = !!i857[6]
  i856.flipY = !!i857[7]
  i856.drawMode = i857[8]
  i856.size = new pc.Vec2( i857[9], i857[10] )
  i856.tileMode = i857[11]
  i856.adaptiveModeThreshold = i857[12]
  i856.maskInteraction = i857[13]
  i856.spriteSortPoint = i857[14]
  i856.enabled = !!i857[15]
  request.r(i857[16], i857[17], 0, i856, 'sharedMaterial')
  var i859 = i857[18]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[19]
  i856.shadowCastingMode = i857[20]
  i856.sortingLayerID = i857[21]
  i856.sortingOrder = i857[22]
  i856.lightmapIndex = i857[23]
  i856.lightmapSceneIndex = i857[24]
  i856.lightmapScaleOffset = new pc.Vec4( i857[25], i857[26], i857[27], i857[28] )
  i856.lightProbeUsage = i857[29]
  i856.reflectionProbeUsage = i857[30]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i863 = data
  i862.name = i863[0]
  i862.tagId = i863[1]
  i862.enabled = !!i863[2]
  i862.isStatic = !!i863[3]
  i862.layer = i863[4]
  return i862
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i864 = root || request.c( 'HeartBreakEffect' )
  var i865 = data
  i864.defaultLifeTime = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'tf')
  return i864
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i866 = root || request.c( 'BlinkEffect' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'tf')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'mesh')
  i868.meshCount = i869[2]
  i868.activeVertexStreamsCount = i869[3]
  i868.alignment = i869[4]
  i868.renderMode = i869[5]
  i868.sortMode = i869[6]
  i868.lengthScale = i869[7]
  i868.velocityScale = i869[8]
  i868.cameraVelocityScale = i869[9]
  i868.normalDirection = i869[10]
  i868.sortingFudge = i869[11]
  i868.minParticleSize = i869[12]
  i868.maxParticleSize = i869[13]
  i868.pivot = new pc.Vec3( i869[14], i869[15], i869[16] )
  request.r(i869[17], i869[18], 0, i868, 'trailMaterial')
  i868.applyActiveColorSpace = !!i869[19]
  i868.enabled = !!i869[20]
  request.r(i869[21], i869[22], 0, i868, 'sharedMaterial')
  var i871 = i869[23]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.sharedMaterials = i870
  i868.receiveShadows = !!i869[24]
  i868.shadowCastingMode = i869[25]
  i868.sortingLayerID = i869[26]
  i868.sortingOrder = i869[27]
  i868.lightmapIndex = i869[28]
  i868.lightmapSceneIndex = i869[29]
  i868.lightmapScaleOffset = new pc.Vec4( i869[30], i869[31], i869[32], i869[33] )
  i868.lightProbeUsage = i869[34]
  i868.reflectionProbeUsage = i869[35]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i873 = data
  i872.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i873[0], i872.main)
  i872.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i873[1], i872.colorBySpeed)
  i872.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i873[2], i872.colorOverLifetime)
  i872.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i873[3], i872.emission)
  i872.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i873[4], i872.rotationBySpeed)
  i872.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i873[5], i872.rotationOverLifetime)
  i872.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i873[6], i872.shape)
  i872.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i873[7], i872.sizeBySpeed)
  i872.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i873[8], i872.sizeOverLifetime)
  i872.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i873[9], i872.textureSheetAnimation)
  i872.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i873[10], i872.velocityOverLifetime)
  i872.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i873[11], i872.noise)
  i872.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i873[12], i872.inheritVelocity)
  i872.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i873[13], i872.forceOverLifetime)
  i872.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i873[14], i872.limitVelocityOverLifetime)
  i872.useAutoRandomSeed = !!i873[15]
  i872.randomSeed = i873[16]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemMain()
  var i875 = data
  i874.duration = i875[0]
  i874.loop = !!i875[1]
  i874.prewarm = !!i875[2]
  i874.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.startDelay)
  i874.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[4], i874.startLifetime)
  i874.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[5], i874.startSpeed)
  i874.startSize3D = !!i875[6]
  i874.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[7], i874.startSizeX)
  i874.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[8], i874.startSizeY)
  i874.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[9], i874.startSizeZ)
  i874.startRotation3D = !!i875[10]
  i874.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[11], i874.startRotationX)
  i874.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[12], i874.startRotationY)
  i874.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[13], i874.startRotationZ)
  i874.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i875[14], i874.startColor)
  i874.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[15], i874.gravityModifier)
  i874.simulationSpace = i875[16]
  request.r(i875[17], i875[18], 0, i874, 'customSimulationSpace')
  i874.simulationSpeed = i875[19]
  i874.useUnscaledTime = !!i875[20]
  i874.scalingMode = i875[21]
  i874.playOnAwake = !!i875[22]
  i874.maxParticles = i875[23]
  i874.emitterVelocityMode = i875[24]
  i874.stopAction = i875[25]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i876 = root || new pc.MinMaxCurve()
  var i877 = data
  i876.mode = i877[0]
  i876.curveMin = new pc.AnimationCurve( { keys_flow: i877[1] } )
  i876.curveMax = new pc.AnimationCurve( { keys_flow: i877[2] } )
  i876.curveMultiplier = i877[3]
  i876.constantMin = i877[4]
  i876.constantMax = i877[5]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i878 = root || new pc.MinMaxGradient()
  var i879 = data
  i878.mode = i879[0]
  i878.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i879[1], i878.gradientMin)
  i878.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i879[2], i878.gradientMax)
  i878.colorMin = new pc.Color(i879[3], i879[4], i879[5], i879[6])
  i878.colorMax = new pc.Color(i879[7], i879[8], i879[9], i879[10])
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i881 = data
  i880.mode = i881[0]
  var i883 = i881[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i883[i + 0]) );
  }
  i880.colorKeys = i882
  var i885 = i881[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i885[i + 0]) );
  }
  i880.alphaKeys = i884
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemColorBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i887[1], i886.color)
  i886.range = new pc.Vec2( i887[2], i887[3] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i891 = data
  i890.color = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.time = i891[4]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i895 = data
  i894.alpha = i895[0]
  i894.time = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemColorOverLifetime()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i897[1], i896.color)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemEmitter()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.rateOverTime)
  i898.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.rateOverDistance)
  var i901 = i899[3]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i901[i + 0]) );
  }
  i898.bursts = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemBurst()
  var i905 = data
  i904.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[0], i904.count)
  i904.cycleCount = i905[1]
  i904.minCount = i905[2]
  i904.maxCount = i905[3]
  i904.repeatInterval = i905[4]
  i904.time = i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemRotationBySpeed()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.separateAxes = !!i907[4]
  i906.range = new pc.Vec2( i907[5], i907[6] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemRotationOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.separateAxes = !!i909[4]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemShape()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.shapeType = i911[1]
  i910.randomDirectionAmount = i911[2]
  i910.sphericalDirectionAmount = i911[3]
  i910.randomPositionAmount = i911[4]
  i910.alignToDirection = !!i911[5]
  i910.radius = i911[6]
  i910.radiusMode = i911[7]
  i910.radiusSpread = i911[8]
  i910.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[9], i910.radiusSpeed)
  i910.radiusThickness = i911[10]
  i910.angle = i911[11]
  i910.length = i911[12]
  i910.boxThickness = new pc.Vec3( i911[13], i911[14], i911[15] )
  i910.meshShapeType = i911[16]
  request.r(i911[17], i911[18], 0, i910, 'mesh')
  request.r(i911[19], i911[20], 0, i910, 'meshRenderer')
  request.r(i911[21], i911[22], 0, i910, 'skinnedMeshRenderer')
  i910.useMeshMaterialIndex = !!i911[23]
  i910.meshMaterialIndex = i911[24]
  i910.useMeshColors = !!i911[25]
  i910.normalOffset = i911[26]
  i910.arc = i911[27]
  i910.arcMode = i911[28]
  i910.arcSpread = i911[29]
  i910.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[30], i910.arcSpeed)
  i910.donutRadius = i911[31]
  i910.position = new pc.Vec3( i911[32], i911[33], i911[34] )
  i910.rotation = new pc.Vec3( i911[35], i911[36], i911[37] )
  i910.scale = new pc.Vec3( i911[38], i911[39], i911[40] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemSizeBySpeed()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.separateAxes = !!i913[4]
  i912.range = new pc.Vec2( i913[5], i913[6] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemSizeOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.x)
  i914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.y)
  i914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.z)
  i914.separateAxes = !!i915[4]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.mode = i917[1]
  i916.animation = i917[2]
  i916.numTilesX = i917[3]
  i916.numTilesY = i917[4]
  i916.useRandomRow = !!i917[5]
  i916.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[6], i916.frameOverTime)
  i916.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[7], i916.startFrame)
  i916.cycleCount = i917[8]
  i916.rowIndex = i917[9]
  i916.flipU = i917[10]
  i916.flipV = i917[11]
  i916.spriteCount = i917[12]
  var i919 = i917[13]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sprites = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[4], i922.radial)
  i922.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[5], i922.speedModifier)
  i922.space = i923[6]
  i922.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[7], i922.orbitalX)
  i922.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[8], i922.orbitalY)
  i922.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[9], i922.orbitalZ)
  i922.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[10], i922.orbitalOffsetX)
  i922.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[11], i922.orbitalOffsetY)
  i922.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[12], i922.orbitalOffsetZ)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemNoise()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.separateAxes = !!i925[1]
  i924.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.strengthX)
  i924.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.strengthY)
  i924.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.strengthZ)
  i924.frequency = i925[5]
  i924.damping = !!i925[6]
  i924.octaveCount = i925[7]
  i924.octaveMultiplier = i925[8]
  i924.octaveScale = i925[9]
  i924.quality = i925[10]
  i924.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[11], i924.scrollSpeed)
  i924.scrollSpeedMultiplier = i925[12]
  i924.remapEnabled = !!i925[13]
  i924.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[14], i924.remapX)
  i924.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[15], i924.remapY)
  i924.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[16], i924.remapZ)
  i924.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[17], i924.positionAmount)
  i924.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[18], i924.rotationAmount)
  i924.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[19], i924.sizeAmount)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemInheritVelocity()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.mode = i927[1]
  i926.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.curve)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemForceOverLifetime()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.x)
  i928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.y)
  i928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.z)
  i928.space = i929[4]
  i928.randomized = !!i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.limit)
  i930.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.limitX)
  i930.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.limitY)
  i930.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[4], i930.limitZ)
  i930.dampen = i931[5]
  i930.separateAxes = !!i931[6]
  i930.space = i931[7]
  i930.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[8], i930.drag)
  i930.multiplyDragByParticleSize = !!i931[9]
  i930.multiplyDragByParticleVelocity = !!i931[10]
  return i930
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i932 = root || request.c( 'StarExploreFX' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'tf')
  return i932
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i934 = root || request.c( 'ProgressBar' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'fillTransform')
  request.r(i935[2], i935[3], 0, i934, 'tf')
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i937 = data
  i936.pivot = new pc.Vec2( i937[0], i937[1] )
  i936.anchorMin = new pc.Vec2( i937[2], i937[3] )
  i936.anchorMax = new pc.Vec2( i937[4], i937[5] )
  i936.sizeDelta = new pc.Vec2( i937[6], i937[7] )
  i936.anchoredPosition3D = new pc.Vec3( i937[8], i937[9], i937[10] )
  i936.rotation = new pc.Quat(i937[11], i937[12], i937[13], i937[14])
  i936.scale = new pc.Vec3( i937[15], i937[16], i937[17] )
  return i936
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i938 = root || request.c( 'ClockTimer' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'fillImage')
  request.r(i939[2], i939[3], 0, i938, 'tf')
  i938.spawnZoomDuration = i939[4]
  i938.despawnZoomDuration = i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i941 = data
  i940.cullTransparentMesh = !!i941[0]
  return i940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Image' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Sprite')
  i942.m_Type = i943[2]
  i942.m_PreserveAspect = !!i943[3]
  i942.m_FillCenter = !!i943[4]
  i942.m_FillMethod = i943[5]
  i942.m_FillAmount = i943[6]
  i942.m_FillClockwise = !!i943[7]
  i942.m_FillOrigin = i943[8]
  i942.m_UseSpriteMesh = !!i943[9]
  i942.m_PixelsPerUnitMultiplier = i943[10]
  request.r(i943[11], i943[12], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[13]
  i942.m_Color = new pc.Color(i943[14], i943[15], i943[16], i943[17])
  i942.m_RaycastTarget = !!i943[18]
  i942.m_RaycastPadding = new pc.Vec4( i943[19], i943[20], i943[21], i943[22] )
  return i942
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i944 = root || request.c( 'FlourSmoke' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'tf')
  return i944
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i946 = root || request.c( 'WaterSplash' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'tf')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i949 = data
  i948.name = i949[0]
  i948.halfPrecision = !!i949[1]
  i948.useSimplification = !!i949[2]
  i948.useUInt32IndexFormat = !!i949[3]
  i948.vertexCount = i949[4]
  i948.aabb = i949[5]
  var i951 = i949[6]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( !!i951[i + 0] );
  }
  i948.streams = i950
  i948.vertices = i949[7]
  var i953 = i949[8]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i953[i + 0]) );
  }
  i948.subMeshes = i952
  var i955 = i949[9]
  var i954 = []
  for(var i = 0; i < i955.length; i += 16) {
    i954.push( new pc.Mat4().setData(i955[i + 0], i955[i + 1], i955[i + 2], i955[i + 3],  i955[i + 4], i955[i + 5], i955[i + 6], i955[i + 7],  i955[i + 8], i955[i + 9], i955[i + 10], i955[i + 11],  i955[i + 12], i955[i + 13], i955[i + 14], i955[i + 15]) );
  }
  i948.bindposes = i954
  var i957 = i949[10]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i957[i + 0]) );
  }
  i948.blendShapes = i956
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i963 = data
  i962.triangles = i963[0]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i969 = data
  i968.name = i969[0]
  var i971 = i969[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i971[i + 0]) );
  }
  i968.frames = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i973 = data
  i972.name = i973[0]
  i972.index = i973[1]
  i972.startup = !!i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i975 = data
  i974.planeDistance = i975[0]
  i974.referencePixelsPerUnit = i975[1]
  i974.isFallbackOverlay = !!i975[2]
  i974.renderMode = i975[3]
  i974.renderOrder = i975[4]
  i974.sortingLayerName = i975[5]
  i974.sortingOrder = i975[6]
  i974.scaleFactor = i975[7]
  request.r(i975[8], i975[9], 0, i974, 'worldCamera')
  i974.overrideSorting = !!i975[10]
  i974.pixelPerfect = !!i975[11]
  i974.targetDisplay = i975[12]
  i974.overridePixelPerfect = !!i975[13]
  i974.enabled = !!i975[14]
  return i974
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i977 = data
  i976.m_UiScaleMode = i977[0]
  i976.m_ReferencePixelsPerUnit = i977[1]
  i976.m_ScaleFactor = i977[2]
  i976.m_ReferenceResolution = new pc.Vec2( i977[3], i977[4] )
  i976.m_ScreenMatchMode = i977[5]
  i976.m_MatchWidthOrHeight = i977[6]
  i976.m_PhysicalUnit = i977[7]
  i976.m_FallbackScreenDPI = i977[8]
  i976.m_DefaultSpriteDPI = i977[9]
  i976.m_DynamicPixelsPerUnit = i977[10]
  i976.m_PresetInfoIsWorld = !!i977[11]
  return i976
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i979 = data
  i978.m_IgnoreReversedGraphics = !!i979[0]
  i978.m_BlockingObjects = i979[1]
  i978.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i979[2] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'animatorController')
  request.r(i981[2], i981[3], 0, i980, 'avatar')
  i980.updateMode = i981[4]
  i980.hasTransformHierarchy = !!i981[5]
  i980.applyRootMotion = !!i981[6]
  var i983 = i981[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.humanBones = i982
  i980.enabled = !!i981[8]
  return i980
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i987 = data
  i986.m_hasFontAssetChanged = !!i987[0]
  request.r(i987[1], i987[2], 0, i986, 'm_baseMaterial')
  i986.m_maskOffset = new pc.Vec4( i987[3], i987[4], i987[5], i987[6] )
  i986.m_text = i987[7]
  i986.m_isRightToLeft = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'm_fontAsset')
  request.r(i987[11], i987[12], 0, i986, 'm_sharedMaterial')
  var i989 = i987[13]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.m_fontSharedMaterials = i988
  request.r(i987[14], i987[15], 0, i986, 'm_fontMaterial')
  var i991 = i987[16]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i986.m_fontMaterials = i990
  i986.m_fontColor32 = UnityEngine.Color32.ConstructColor(i987[17], i987[18], i987[19], i987[20])
  i986.m_fontColor = new pc.Color(i987[21], i987[22], i987[23], i987[24])
  i986.m_enableVertexGradient = !!i987[25]
  i986.m_colorMode = i987[26]
  i986.m_fontColorGradient = request.d('TMPro.VertexGradient', i987[27], i986.m_fontColorGradient)
  request.r(i987[28], i987[29], 0, i986, 'm_fontColorGradientPreset')
  request.r(i987[30], i987[31], 0, i986, 'm_spriteAsset')
  i986.m_tintAllSprites = !!i987[32]
  request.r(i987[33], i987[34], 0, i986, 'm_StyleSheet')
  i986.m_TextStyleHashCode = i987[35]
  i986.m_overrideHtmlColors = !!i987[36]
  i986.m_faceColor = UnityEngine.Color32.ConstructColor(i987[37], i987[38], i987[39], i987[40])
  i986.m_fontSize = i987[41]
  i986.m_fontSizeBase = i987[42]
  i986.m_fontWeight = i987[43]
  i986.m_enableAutoSizing = !!i987[44]
  i986.m_fontSizeMin = i987[45]
  i986.m_fontSizeMax = i987[46]
  i986.m_fontStyle = i987[47]
  i986.m_HorizontalAlignment = i987[48]
  i986.m_VerticalAlignment = i987[49]
  i986.m_textAlignment = i987[50]
  i986.m_characterSpacing = i987[51]
  i986.m_wordSpacing = i987[52]
  i986.m_lineSpacing = i987[53]
  i986.m_lineSpacingMax = i987[54]
  i986.m_paragraphSpacing = i987[55]
  i986.m_charWidthMaxAdj = i987[56]
  i986.m_TextWrappingMode = i987[57]
  i986.m_wordWrappingRatios = i987[58]
  i986.m_overflowMode = i987[59]
  request.r(i987[60], i987[61], 0, i986, 'm_linkedTextComponent')
  request.r(i987[62], i987[63], 0, i986, 'parentLinkedComponent')
  i986.m_enableKerning = !!i987[64]
  var i993 = i987[65]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(i993[i + 0]);
  }
  i986.m_ActiveFontFeatures = i992
  i986.m_enableExtraPadding = !!i987[66]
  i986.checkPaddingRequired = !!i987[67]
  i986.m_isRichText = !!i987[68]
  i986.m_parseCtrlCharacters = !!i987[69]
  i986.m_isOrthographic = !!i987[70]
  i986.m_isCullingEnabled = !!i987[71]
  i986.m_horizontalMapping = i987[72]
  i986.m_verticalMapping = i987[73]
  i986.m_uvLineOffset = i987[74]
  i986.m_geometrySortingOrder = i987[75]
  i986.m_IsTextObjectScaleStatic = !!i987[76]
  i986.m_VertexBufferAutoSizeReduction = !!i987[77]
  i986.m_useMaxVisibleDescender = !!i987[78]
  i986.m_pageToDisplay = i987[79]
  i986.m_margin = new pc.Vec4( i987[80], i987[81], i987[82], i987[83] )
  i986.m_isUsingLegacyAnimationComponent = !!i987[84]
  i986.m_isVolumetricText = !!i987[85]
  request.r(i987[86], i987[87], 0, i986, 'm_Material')
  i986.m_EmojiFallbackSupport = !!i987[88]
  i986.m_Maskable = !!i987[89]
  i986.m_Color = new pc.Color(i987[90], i987[91], i987[92], i987[93])
  i986.m_RaycastTarget = !!i987[94]
  i986.m_RaycastPadding = new pc.Vec4( i987[95], i987[96], i987[97], i987[98] )
  return i986
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.VertexGradient' )
  var i995 = data
  i994.topLeft = new pc.Color(i995[0], i995[1], i995[2], i995[3])
  i994.topRight = new pc.Color(i995[4], i995[5], i995[6], i995[7])
  i994.bottomLeft = new pc.Color(i995[8], i995[9], i995[10], i995[11])
  i994.bottomRight = new pc.Color(i995[12], i995[13], i995[14], i995[15])
  return i994
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Button' )
  var i999 = data
  i998.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i999[0], i998.m_OnClick)
  i998.m_Navigation = request.d('UnityEngine.UI.Navigation', i999[1], i998.m_Navigation)
  i998.m_Transition = i999[2]
  i998.m_Colors = request.d('UnityEngine.UI.ColorBlock', i999[3], i998.m_Colors)
  i998.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i999[4], i998.m_SpriteState)
  i998.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i999[5], i998.m_AnimationTriggers)
  i998.m_Interactable = !!i999[6]
  request.r(i999[7], i999[8], 0, i998, 'm_TargetGraphic')
  return i998
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1001 = data
  i1000.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1001[0], i1000.m_PersistentCalls)
  return i1000
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('UnityEngine.Events.PersistentCall', i1005[i + 0]));
  }
  i1002.m_Calls = i1004
  return i1002
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_Target')
  i1008.m_TargetAssemblyTypeName = i1009[2]
  i1008.m_MethodName = i1009[3]
  i1008.m_Mode = i1009[4]
  i1008.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1009[5], i1008.m_Arguments)
  i1008.m_CallState = i1009[6]
  return i1008
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_ObjectArgument')
  i1010.m_ObjectArgumentAssemblyTypeName = i1011[2]
  i1010.m_IntArgument = i1011[3]
  i1010.m_FloatArgument = i1011[4]
  i1010.m_StringArgument = i1011[5]
  i1010.m_BoolArgument = !!i1011[6]
  return i1010
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1013 = data
  i1012.m_Mode = i1013[0]
  i1012.m_WrapAround = !!i1013[1]
  request.r(i1013[2], i1013[3], 0, i1012, 'm_SelectOnUp')
  request.r(i1013[4], i1013[5], 0, i1012, 'm_SelectOnDown')
  request.r(i1013[6], i1013[7], 0, i1012, 'm_SelectOnLeft')
  request.r(i1013[8], i1013[9], 0, i1012, 'm_SelectOnRight')
  return i1012
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1015 = data
  i1014.m_NormalColor = new pc.Color(i1015[0], i1015[1], i1015[2], i1015[3])
  i1014.m_HighlightedColor = new pc.Color(i1015[4], i1015[5], i1015[6], i1015[7])
  i1014.m_PressedColor = new pc.Color(i1015[8], i1015[9], i1015[10], i1015[11])
  i1014.m_SelectedColor = new pc.Color(i1015[12], i1015[13], i1015[14], i1015[15])
  i1014.m_DisabledColor = new pc.Color(i1015[16], i1015[17], i1015[18], i1015[19])
  i1014.m_ColorMultiplier = i1015[20]
  i1014.m_FadeDuration = i1015[21]
  return i1014
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_HighlightedSprite')
  request.r(i1017[2], i1017[3], 0, i1016, 'm_PressedSprite')
  request.r(i1017[4], i1017[5], 0, i1016, 'm_SelectedSprite')
  request.r(i1017[6], i1017[7], 0, i1016, 'm_DisabledSprite')
  return i1016
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1019 = data
  i1018.m_NormalTrigger = i1019[0]
  i1018.m_HighlightedTrigger = i1019[1]
  i1018.m_PressedTrigger = i1019[2]
  i1018.m_SelectedTrigger = i1019[3]
  i1018.m_DisabledTrigger = i1019[4]
  return i1018
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1020 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'skeletonDataAsset')
  request.r(i1021[2], i1021[3], 0, i1020, 'additiveMaterial')
  request.r(i1021[4], i1021[5], 0, i1020, 'multiplyMaterial')
  request.r(i1021[6], i1021[7], 0, i1020, 'screenMaterial')
  i1020.initialSkinName = i1021[8]
  i1020.initialFlipX = !!i1021[9]
  i1020.initialFlipY = !!i1021[10]
  i1020.startingAnimation = i1021[11]
  i1020.startingLoop = !!i1021[12]
  i1020.timeScale = i1021[13]
  i1020.freeze = !!i1021[14]
  i1020.updateWhenInvisible = i1021[15]
  i1020.unscaledTime = !!i1021[16]
  i1020.allowMultipleCanvasRenderers = !!i1021[17]
  var i1023 = i1021[18]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1020.canvasRenderers = i1022
  i1020.enableSeparatorSlots = !!i1021[19]
  i1020.updateSeparatorPartLocation = !!i1021[20]
  var i1025 = i1021[21]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.separatorSlotNames = i1024
  var i1027 = i1021[22]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1020.separatorParts = i1026
  i1020.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1021[23], i1020.meshGenerator)
  request.r(i1021[24], i1021[25], 0, i1020, 'm_Material')
  i1020.m_Maskable = !!i1021[26]
  i1020.m_Color = new pc.Color(i1021[27], i1021[28], i1021[29], i1021[30])
  i1020.m_RaycastTarget = !!i1021[31]
  i1020.m_RaycastPadding = new pc.Vec4( i1021[32], i1021[33], i1021[34], i1021[35] )
  return i1020
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1034 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1035 = data
  i1034.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1035[0], i1034.settings)
  return i1034
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1037 = data
  i1036.useClipping = !!i1037[0]
  i1036.zSpacing = i1037[1]
  i1036.pmaVertexColors = !!i1037[2]
  i1036.tintBlack = !!i1037[3]
  i1036.canvasGroupTintBlack = !!i1037[4]
  i1036.calculateTangents = !!i1037[5]
  i1036.addNormals = !!i1037[6]
  i1036.immutableTriangles = !!i1037[7]
  return i1036
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i1038 = root || request.c( 'Ply_Pool' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Ply_Pool+PoolAmount', i1041[i + 0]) );
  }
  i1038.poolAmounts = i1040
  request.r(i1039[1], i1039[2], 0, i1038, 'poolHolder')
  return i1038
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i1044 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i1045 = data
  i1044.type = i1045[0]
  i1044.amount = i1045[1]
  request.r(i1045[2], i1045[3], 0, i1044, 'gameUnit')
  return i1044
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1046 = root || request.c( 'Ply_SoundManager' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Ply_SoundManager+FxAudio', i1049[i + 0]) );
  }
  i1046.fxAudios = i1048
  var i1051 = i1047[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1046.audioClips = i1050
  request.r(i1047[2], i1047[3], 0, i1046, 'sound')
  return i1046
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i1054 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i1055 = data
  i1054.fxType = i1055[0]
  request.r(i1055[1], i1055[2], 0, i1054, 'audioClip')
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'clip')
  request.r(i1059[2], i1059[3], 0, i1058, 'outputAudioMixerGroup')
  i1058.playOnAwake = !!i1059[4]
  i1058.loop = !!i1059[5]
  i1058.time = i1059[6]
  i1058.volume = i1059[7]
  i1058.pitch = i1059[8]
  i1058.enabled = !!i1059[9]
  return i1058
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1060 = root || request.c( 'GameManager' )
  var i1061 = data
  i1060.isPlaying = !!i1061[0]
  i1060.isTutorial = !!i1061[1]
  i1060.isGotoStore = !!i1061[2]
  i1060.isLoseGame = !!i1061[3]
  i1060.countMove = i1061[4]
  i1060.currentLayer = i1061[5]
  return i1060
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1062 = root || request.c( 'UIManager' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'winUI')
  request.r(i1063[2], i1063[3], 0, i1062, 'loseUI')
  request.r(i1063[4], i1063[5], 0, i1062, 'tutorial')
  request.r(i1063[6], i1063[7], 0, i1062, 'verticalUI')
  request.r(i1063[8], i1063[9], 0, i1062, 'horizontalUI')
  request.r(i1063[10], i1063[11], 0, i1062, 'downloadBtn')
  request.r(i1063[12], i1063[13], 0, i1062, 'horizontalDownloadBtn')
  i1062.isGoogleBuild = !!i1063[14]
  i1062.screenWidth = i1063[15]
  i1062.screenHeight = i1063[16]
  i1062.scaleHeightOnWidth = i1063[17]
  i1062.isVertical = !!i1063[18]
  i1062.isScreenVertical = !!i1063[19]
  request.r(i1063[20], i1063[21], 0, i1062, 'cam')
  i1062.verticalUIHeightOnWidthRatio = i1063[22]
  i1062.scaleCameraOnValidate = !!i1063[23]
  i1062.screenVerticalHeightOnWidthRatio = i1063[24]
  i1062.useContinuousScaling = !!i1063[25]
  i1062.baseOrthographicSize = i1063[26]
  i1062.baseAspect = i1063[27]
  i1062.landscapeSizeRatio = i1063[28]
  i1062.defaultPortraitSizeRatio = i1063[29]
  var i1065 = i1063[30]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('ScreenScaleStep', i1065[i + 0]));
  }
  i1062.discreteScaleSteps = i1064
  i1062.usePerspectiveCamera = !!i1063[31]
  request.r(i1063[32], i1063[33], 0, i1062, 'perspectiveFocus')
  i1062.perspectiveFocusDistance = i1063[34]
  i1062.perspectivePadding = i1063[35]
  i1062.fitRendererBounds = !!i1063[36]
  request.r(i1063[37], i1063[38], 0, i1062, 'boundsRoot')
  var i1067 = i1063[39]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 1, i1066, '')
  }
  i1062.boundsRenderers = i1066
  return i1062
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i1070 = root || request.c( 'ScreenScaleStep' )
  var i1071 = data
  i1070.heightOnWidthRatio = i1071[0]
  i1070.orthographicSize = i1071[1]
  return i1070
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1074 = root || request.c( 'InputManager' )
  var i1075 = data
  i1074.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1075[0] )
  i1074.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i1075[1] )
  i1074.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1075[2] )
  i1074.isDragging = !!i1075[3]
  return i1074
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i1076 = root || request.c( 'HandTutManager' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 1, i1078, '')
  }
  i1076.items = i1078
  request.r(i1077[1], i1077[2], 0, i1076, 'knife')
  request.r(i1077[3], i1077[4], 0, i1076, 'peeler')
  request.r(i1077[5], i1077[6], 0, i1076, 'handTutObject')
  request.r(i1077[7], i1077[8], 0, i1076, 'tapToCookObject')
  request.r(i1077[9], i1077[10], 0, i1076, 'oilItem')
  request.r(i1077[11], i1077[12], 0, i1076, 'stoveToggleEvent')
  request.r(i1077[13], i1077[14], 0, i1076, 'waterToggleEvent')
  request.r(i1077[15], i1077[16], 0, i1076, 'sinkBlock')
  var i1081 = i1077[17]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1076.itemsInWater = i1080
  i1076.noDelayItemCount = i1077[18]
  i1076.breakHeartNoDelayThreshold = i1077[19]
  i1076.maxHandTutShowCount = i1077[20]
  i1076.showSinkWaterTutorialOnStart = !!i1077[21]
  i1076.waitForBowlIntro = !!i1077[22]
  i1076.idleDelay = i1077[23]
  i1076.firstHandTutDelay = i1077[24]
  i1076.phaseHandTutDelay = i1077[25]
  i1076.moveDuration = i1077[26]
  i1076.dragFadeDuration = i1077[27]
  i1076.clickScaleDuration = i1077[28]
  i1076.waitAtEndDuration = i1077[29]
  i1076.handZPosition = i1077[30]
  i1076.clickScaleMultiplier = i1077[31]
  i1076.moveEase = i1077[32]
  return i1076
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i1086 = root || request.c( 'SortChildByZPos' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'transformToSort')
  var i1089 = i1087[2]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 1, i1088, '')
  }
  i1086.childrenToSort = i1088
  i1086.zOffset = i1087[3]
  i1086.baseZ = i1087[4]
  return i1086
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i1090 = root || request.c( 'PhaseManager' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('PhaseData', i1093[i + 0]));
  }
  i1090.phases = i1092
  i1090.transitionDuration = i1091[1]
  i1090.delayBeforeNextPhase = i1091[2]
  i1090.offScreenLeftX = i1091[3]
  i1090.offScreenRightX = i1091[4]
  i1090.centerScreenX = i1091[5]
  request.r(i1091[6], i1091[7], 0, i1090, 'phaseTransitionObject')
  i1090.phaseTransitionObjectDuration = i1091[8]
  i1090.currentPhaseIndex = i1091[9]
  i1090.currentStepCount = i1091[10]
  return i1090
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1096 = root || request.c( 'PhaseData' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'phaseObject')
  i1096.totalSteps = i1097[2]
  i1096.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i1097[3], i1096.onPhaseReady)
  return i1096
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1099 = data
  i1098.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1099[0], i1098.m_PersistentCalls)
  return i1098
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i1100 = root || request.c( 'ItemTypeDoneManager' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i1103[i + 0]));
  }
  i1100.itemTypeGroups = i1102
  return i1100
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i1106 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i1107 = data
  i1106.itemType = i1107[0]
  var i1109 = i1107[1]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 1, i1108, '')
  }
  i1106.items = i1108
  return i1106
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i1110 = root || request.c( 'DuckManager' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 2, i1112, '')
  }
  i1110.leftPoints = i1112
  var i1115 = i1111[1]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 2, i1114, '')
  }
  i1110.rightPoints = i1114
  i1110.minSpawnInterval = i1111[2]
  i1110.maxSpawnInterval = i1111[3]
  i1110.moveSpeed = i1111[4]
  i1110.duckSoundChance = i1111[5]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1117 = data
  i1116.aspect = i1117[0]
  i1116.orthographic = !!i1117[1]
  i1116.orthographicSize = i1117[2]
  i1116.backgroundColor = new pc.Color(i1117[3], i1117[4], i1117[5], i1117[6])
  i1116.nearClipPlane = i1117[7]
  i1116.farClipPlane = i1117[8]
  i1116.fieldOfView = i1117[9]
  i1116.depth = i1117[10]
  i1116.clearFlags = i1117[11]
  i1116.cullingMask = i1117[12]
  i1116.rect = i1117[13]
  request.r(i1117[14], i1117[15], 0, i1116, 'targetTexture')
  i1116.usePhysicalProperties = !!i1117[16]
  i1116.focalLength = i1117[17]
  i1116.sensorSize = new pc.Vec2( i1117[18], i1117[19] )
  i1116.lensShift = new pc.Vec2( i1117[20], i1117[21] )
  i1116.gateFit = i1117[22]
  i1116.commandBufferCount = i1117[23]
  i1116.cameraType = i1117[24]
  i1116.enabled = !!i1117[25]
  return i1116
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'm_FirstSelected')
  i1118.m_sendNavigationEvents = !!i1119[2]
  i1118.m_DragThreshold = i1119[3]
  return i1118
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1121 = data
  i1120.m_HorizontalAxis = i1121[0]
  i1120.m_VerticalAxis = i1121[1]
  i1120.m_SubmitButton = i1121[2]
  i1120.m_CancelButton = i1121[3]
  i1120.m_InputActionsPerSecond = i1121[4]
  i1120.m_RepeatDelay = i1121[5]
  i1120.m_ForceModuleActive = !!i1121[6]
  i1120.m_SendPointerHoverToParent = !!i1121[7]
  return i1120
}

Deserializers["Dog"] = function (request, data, root) {
  var i1122 = root || request.c( 'Dog' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'startPoint')
  request.r(i1123[2], i1123[3], 0, i1122, 'endPoint')
  i1122.moveDuration = i1123[4]
  i1122.easeType = i1123[5]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'sharedMesh')
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'additionalVertexStreams')
  i1126.enabled = !!i1127[2]
  request.r(i1127[3], i1127[4], 0, i1126, 'sharedMaterial')
  var i1129 = i1127[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1126.sharedMaterials = i1128
  i1126.receiveShadows = !!i1127[6]
  i1126.shadowCastingMode = i1127[7]
  i1126.sortingLayerID = i1127[8]
  i1126.sortingOrder = i1127[9]
  i1126.lightmapIndex = i1127[10]
  i1126.lightmapSceneIndex = i1127[11]
  i1126.lightmapScaleOffset = new pc.Vec4( i1127[12], i1127[13], i1127[14], i1127[15] )
  i1126.lightProbeUsage = i1127[16]
  i1126.reflectionProbeUsage = i1127[17]
  return i1126
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1130 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1131 = data
  i1130.loop = !!i1131[0]
  i1130.timeScale = i1131[1]
  request.r(i1131[2], i1131[3], 0, i1130, 'skeletonDataAsset')
  i1130.initialSkinName = i1131[4]
  i1130.fixPrefabOverrideViaMeshFilter = i1131[5]
  i1130.initialFlipX = !!i1131[6]
  i1130.initialFlipY = !!i1131[7]
  i1130.updateWhenInvisible = i1131[8]
  i1130.zSpacing = i1131[9]
  i1130.useClipping = !!i1131[10]
  i1130.immutableTriangles = !!i1131[11]
  i1130.pmaVertexColors = !!i1131[12]
  i1130.clearStateOnDisable = !!i1131[13]
  i1130.tintBlack = !!i1131[14]
  i1130.singleSubmesh = !!i1131[15]
  i1130.fixDrawOrder = !!i1131[16]
  i1130.addNormals = !!i1131[17]
  i1130.calculateTangents = !!i1131[18]
  i1130.maskInteraction = i1131[19]
  i1130.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1131[20], i1130.maskMaterials)
  i1130.disableRenderingOnOverride = !!i1131[21]
  i1130._animationName = i1131[22]
  var i1133 = i1131[23]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1130.separatorSlotNames = i1132
  return i1130
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1134 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.materialsMaskDisabled = i1136
  var i1139 = i1135[1]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1134.materialsInsideMask = i1138
  var i1141 = i1135[2]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1134.materialsOutsideMask = i1140
  return i1134
}

Deserializers["Capybara"] = function (request, data, root) {
  var i1142 = root || request.c( 'Capybara' )
  var i1143 = data
  i1142.playSkinChangeMode = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'popup1')
  request.r(i1143[3], i1143[4], 0, i1142, 'popup2')
  request.r(i1143[5], i1143[6], 0, i1142, 'tick')
  i1142.popupShowScale = i1143[7]
  i1142.popupShowDuration = i1143[8]
  i1142.popupHideDuration = i1143[9]
  i1142.popupHideDelay = i1143[10]
  request.r(i1143[11], i1143[12], 0, i1142, 'spawnHeartPoint')
  i1142.heartEffectScale = i1143[13]
  request.r(i1143[14], i1143[15], 0, i1142, 'skeletonAnimation')
  request.r(i1143[16], i1143[17], 0, i1142, 'skinObject1')
  request.r(i1143[18], i1143[19], 0, i1142, 'skinObject2')
  i1142.skinChangeDelay = i1143[20]
  i1142.skinMoveYOffset = i1143[21]
  i1142.skinMoveDownDuration = i1143[22]
  i1142.skinMoveUpDuration = i1143[23]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1145 = data
  i1144.center = new pc.Vec3( i1145[0], i1145[1], i1145[2] )
  i1144.radius = i1145[3]
  i1144.enabled = !!i1145[4]
  i1144.isTrigger = !!i1145[5]
  request.r(i1145[6], i1145[7], 0, i1144, 'material')
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1147 = data
  i1146.center = new pc.Vec3( i1147[0], i1147[1], i1147[2] )
  i1146.size = new pc.Vec3( i1147[3], i1147[4], i1147[5] )
  i1146.enabled = !!i1147[6]
  i1146.isTrigger = !!i1147[7]
  request.r(i1147[8], i1147[9], 0, i1146, 'material')
  return i1146
}

Deserializers["LastTray"] = function (request, data, root) {
  var i1148 = root || request.c( 'LastTray' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'tf')
  i1148.isShushiOn = !!i1149[2]
  i1148.isSauceOn = !!i1149[3]
  request.r(i1149[4], i1149[5], 0, i1148, 'shushiDone')
  request.r(i1149[6], i1149[7], 0, i1148, 'capybara')
  request.r(i1149[8], i1149[9], 0, i1148, 'items')
  i1148.isDone = !!i1149[10]
  i1148.onProcess = !!i1149[11]
  request.r(i1149[12], i1149[13], 0, i1148, 'itemDraggable')
  request.r(i1149[14], i1149[15], 0, i1148, 'itemClickable')
  request.r(i1149[16], i1149[17], 0, i1148, 'itemStirring')
  request.r(i1149[18], i1149[19], 0, i1148, 'itemKnifeSpriteMaskCutter')
  request.r(i1149[20], i1149[21], 0, i1148, 'itemSpriteMaskPainter')
  request.r(i1149[22], i1149[23], 0, i1148, 'itemDragSpriteMaskPainter')
  request.r(i1149[24], i1149[25], 0, i1148, 'itemMoveToTarget')
  request.r(i1149[26], i1149[27], 0, i1148, 'animator')
  i1148.itemType = i1149[28]
  request.r(i1149[29], i1149[30], 0, i1148, 'spriteRenderer')
  i1148.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1149[31], i1148.onKnifeIn)
  i1148.heartEffectScale = i1149[32]
  i1148.breakHeartEffectScale = i1149[33]
  i1148.blinkEffectScale = i1149[34]
  i1148.mergeEffectScale = i1149[35]
  i1148.playMoveToTargetFinishSound = !!i1149[36]
  i1148.moveToTargetFinishFxType = i1149[37]
  i1148.fxSpawnZPos = i1149[38]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1151 = data
  i1150.center = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.radius = i1151[3]
  i1150.height = i1151[4]
  i1150.direction = i1151[5]
  i1150.enabled = !!i1151[6]
  i1150.isTrigger = !!i1151[7]
  request.r(i1151[8], i1151[9], 0, i1150, 'material')
  return i1150
}

Deserializers["Item"] = function (request, data, root) {
  var i1152 = root || request.c( 'Item' )
  var i1153 = data
  i1152.isDone = !!i1153[0]
  i1152.onProcess = !!i1153[1]
  request.r(i1153[2], i1153[3], 0, i1152, 'itemDraggable')
  request.r(i1153[4], i1153[5], 0, i1152, 'itemClickable')
  request.r(i1153[6], i1153[7], 0, i1152, 'itemStirring')
  request.r(i1153[8], i1153[9], 0, i1152, 'itemKnifeSpriteMaskCutter')
  request.r(i1153[10], i1153[11], 0, i1152, 'itemSpriteMaskPainter')
  request.r(i1153[12], i1153[13], 0, i1152, 'itemDragSpriteMaskPainter')
  request.r(i1153[14], i1153[15], 0, i1152, 'itemMoveToTarget')
  request.r(i1153[16], i1153[17], 0, i1152, 'animator')
  i1152.itemType = i1153[18]
  request.r(i1153[19], i1153[20], 0, i1152, 'spriteRenderer')
  i1152.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1153[21], i1152.onKnifeIn)
  i1152.heartEffectScale = i1153[22]
  i1152.breakHeartEffectScale = i1153[23]
  i1152.blinkEffectScale = i1153[24]
  i1152.mergeEffectScale = i1153[25]
  i1152.playMoveToTargetFinishSound = !!i1153[26]
  i1152.moveToTargetFinishFxType = i1153[27]
  i1152.fxSpawnZPos = i1153[28]
  return i1152
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1154 = root || request.c( 'ItemDraggable' )
  var i1155 = data
  i1154.isDraggable = !!i1155[0]
  request.r(i1155[1], i1155[2], 0, i1154, 'returnTransform')
  i1154.setParentToReturnTransform = !!i1155[3]
  i1154.returnToExactReturnTransformPosition = !!i1155[4]
  i1154.targetItemType = i1155[5]
  request.r(i1155[6], i1155[7], 0, i1154, 'item')
  i1154.checkState = !!i1155[8]
  request.r(i1155[9], i1155[10], 0, i1154, 'shadowObject')
  i1154.playReturnToStartFinishSound = !!i1155[11]
  i1154.returnToStartFinishFxType = i1155[12]
  i1154.spawnBreakHeartOnDropFail = !!i1155[13]
  i1154.playBeginDragSound = !!i1155[14]
  i1154.beginDragFxType = i1155[15]
  i1154.liftOffset = i1155[16]
  i1154.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1155[17], i1154.onBeginDrag)
  i1154.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1155[18], i1154.onDropSuccess)
  i1154.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1155[19], i1154.onDropFail)
  i1154.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i1155[20], i1154.onReturnToStartComplete)
  return i1154
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i1156 = root || request.c( 'ItemMoveToTarget' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'defaultTarget')
  i1156.duration = i1157[2]
  i1156.easeType = i1157[3]
  i1156.moveType = i1157[4]
  i1156.jumpPower = i1157[5]
  i1156.numJumps = i1157[6]
  i1156.rotate360DuringJump = !!i1157[7]
  i1156.flipRotate = !!i1157[8]
  i1156.angleRotate = i1157[9]
  i1156.setParentToTarget = !!i1157[10]
  i1156.onComplete = request.d('UnityEngine.Events.UnityEvent', i1157[11], i1156.onComplete)
  i1156.lockInputWhileMoving = !!i1157[12]
  i1156.resetParentBeforeMove = !!i1157[13]
  return i1156
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1158 = root || request.c( 'ItemDragChildRotator' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'rotateTarget')
  i1158.dragEulerAngles = new pc.Vec3( i1159[2], i1159[3], i1159[4] )
  i1158.useLocalRotation = !!i1159[5]
  i1158.rotateRelative = !!i1159[6]
  i1158.rotateDuration = i1159[7]
  i1158.rotateEase = i1159[8]
  i1158.rotateMode = i1159[9]
  return i1158
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i1160 = root || request.c( 'ItemDragRaycastTarget' )
  var i1161 = data
  i1160.targetToFind = i1161[0]
  i1160.targetItemTypeWhenHit = i1161[1]
  i1160.targetItemTypeOnDropFail = i1161[2]
  request.r(i1161[3], i1161[4], 0, i1160, 'raycastPoint')
  i1160.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1161[5] )
  i1160.rayDistance = i1161[6]
  i1160.updateMoveDefaultTarget = !!i1161[7]
  i1160.invokeOnlyWhenTargetChanged = !!i1161[8]
  i1160.targetChangeEnabled = !!i1161[9]
  i1160.restoreTargetOnDropFail = !!i1161[10]
  i1160.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i1161[11], i1160.onTargetFound)
  i1160.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i1161[12], i1160.onTargetFoundWithItem)
  return i1160
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i1162 = root || request.c( 'ItemRaycastTargetEvent' )
  var i1163 = data
  i1162.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1163[0], i1162.m_PersistentCalls)
  return i1162
}

Deserializers["Chillie"] = function (request, data, root) {
  var i1164 = root || request.c( 'Chillie' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'targetBowl')
  i1164.isDone = !!i1165[2]
  i1164.onProcess = !!i1165[3]
  request.r(i1165[4], i1165[5], 0, i1164, 'itemDraggable')
  request.r(i1165[6], i1165[7], 0, i1164, 'itemClickable')
  request.r(i1165[8], i1165[9], 0, i1164, 'itemStirring')
  request.r(i1165[10], i1165[11], 0, i1164, 'itemKnifeSpriteMaskCutter')
  request.r(i1165[12], i1165[13], 0, i1164, 'itemSpriteMaskPainter')
  request.r(i1165[14], i1165[15], 0, i1164, 'itemDragSpriteMaskPainter')
  request.r(i1165[16], i1165[17], 0, i1164, 'itemMoveToTarget')
  request.r(i1165[18], i1165[19], 0, i1164, 'animator')
  i1164.itemType = i1165[20]
  request.r(i1165[21], i1165[22], 0, i1164, 'spriteRenderer')
  i1164.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1165[23], i1164.onKnifeIn)
  i1164.heartEffectScale = i1165[24]
  i1164.breakHeartEffectScale = i1165[25]
  i1164.blinkEffectScale = i1165[26]
  i1164.mergeEffectScale = i1165[27]
  i1164.playMoveToTargetFinishSound = !!i1165[28]
  i1164.moveToTargetFinishFxType = i1165[29]
  i1164.fxSpawnZPos = i1165[30]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1167 = data
  i1166.frontSortingLayerID = i1167[0]
  i1166.frontSortingOrder = i1167[1]
  i1166.backSortingLayerID = i1167[2]
  i1166.backSortingOrder = i1167[3]
  i1166.alphaCutoff = i1167[4]
  request.r(i1167[5], i1167[6], 0, i1166, 'sprite')
  i1166.tileMode = i1167[7]
  i1166.isCustomRangeActive = !!i1167[8]
  i1166.spriteSortPoint = i1167[9]
  i1166.enabled = !!i1167[10]
  request.r(i1167[11], i1167[12], 0, i1166, 'sharedMaterial')
  var i1169 = i1167[13]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 2, i1168, '')
  }
  i1166.sharedMaterials = i1168
  i1166.receiveShadows = !!i1167[14]
  i1166.shadowCastingMode = i1167[15]
  i1166.sortingLayerID = i1167[16]
  i1166.sortingOrder = i1167[17]
  i1166.lightmapIndex = i1167[18]
  i1166.lightmapSceneIndex = i1167[19]
  i1166.lightmapScaleOffset = new pc.Vec4( i1167[20], i1167[21], i1167[22], i1167[23] )
  i1166.lightProbeUsage = i1167[24]
  i1166.reflectionProbeUsage = i1167[25]
  return i1166
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i1170 = root || request.c( 'CuttingBoard' )
  var i1171 = data
  i1170.punchScale = new pc.Vec3( i1171[0], i1171[1], i1171[2] )
  i1170.punchDuration = i1171[3]
  i1170.foodInCount = i1171[4]
  i1170.isRiceIn = !!i1171[5]
  request.r(i1171[6], i1171[7], 0, i1170, 'shushi')
  i1170.isDone = !!i1171[8]
  i1170.onProcess = !!i1171[9]
  request.r(i1171[10], i1171[11], 0, i1170, 'itemDraggable')
  request.r(i1171[12], i1171[13], 0, i1170, 'itemClickable')
  request.r(i1171[14], i1171[15], 0, i1170, 'itemStirring')
  request.r(i1171[16], i1171[17], 0, i1170, 'itemKnifeSpriteMaskCutter')
  request.r(i1171[18], i1171[19], 0, i1170, 'itemSpriteMaskPainter')
  request.r(i1171[20], i1171[21], 0, i1170, 'itemDragSpriteMaskPainter')
  request.r(i1171[22], i1171[23], 0, i1170, 'itemMoveToTarget')
  request.r(i1171[24], i1171[25], 0, i1170, 'animator')
  i1170.itemType = i1171[26]
  request.r(i1171[27], i1171[28], 0, i1170, 'spriteRenderer')
  i1170.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1171[29], i1170.onKnifeIn)
  i1170.heartEffectScale = i1171[30]
  i1170.breakHeartEffectScale = i1171[31]
  i1170.blinkEffectScale = i1171[32]
  i1170.mergeEffectScale = i1171[33]
  i1170.playMoveToTargetFinishSound = !!i1171[34]
  i1170.moveToTargetFinishFxType = i1171[35]
  i1170.fxSpawnZPos = i1171[36]
  return i1170
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1172 = root || request.c( 'ItemClickable' )
  var i1173 = data
  i1172.requiredClicks = i1173[0]
  i1172.infiniteClick = !!i1173[1]
  i1172.canClick = !!i1173[2]
  i1172.disableAfterClick = !!i1173[3]
  i1172.onClick = request.d('UnityEngine.Events.UnityEvent', i1173[4], i1172.onClick)
  var i1175 = i1173[5]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.Events.UnityEvent', i1175[i + 0]));
  }
  i1172.sequentialOnClicks = i1174
  i1172.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1173[6], i1172.onClickComplete)
  return i1172
}

Deserializers["Shushi"] = function (request, data, root) {
  var i1178 = root || request.c( 'Shushi' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'knife')
  i1178.isDone = !!i1179[2]
  i1178.onProcess = !!i1179[3]
  request.r(i1179[4], i1179[5], 0, i1178, 'itemDraggable')
  request.r(i1179[6], i1179[7], 0, i1178, 'itemClickable')
  request.r(i1179[8], i1179[9], 0, i1178, 'itemStirring')
  request.r(i1179[10], i1179[11], 0, i1178, 'itemKnifeSpriteMaskCutter')
  request.r(i1179[12], i1179[13], 0, i1178, 'itemSpriteMaskPainter')
  request.r(i1179[14], i1179[15], 0, i1178, 'itemDragSpriteMaskPainter')
  request.r(i1179[16], i1179[17], 0, i1178, 'itemMoveToTarget')
  request.r(i1179[18], i1179[19], 0, i1178, 'animator')
  i1178.itemType = i1179[20]
  request.r(i1179[21], i1179[22], 0, i1178, 'spriteRenderer')
  i1178.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1179[23], i1178.onKnifeIn)
  i1178.heartEffectScale = i1179[24]
  i1178.breakHeartEffectScale = i1179[25]
  i1178.blinkEffectScale = i1179[26]
  i1178.mergeEffectScale = i1179[27]
  i1178.playMoveToTargetFinishSound = !!i1179[28]
  i1178.moveToTargetFinishFxType = i1179[29]
  i1178.fxSpawnZPos = i1179[30]
  return i1178
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i1180 = root || request.c( 'CuttingItem' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'itemKnife')
  request.r(i1181[2], i1181[3], 0, i1180, 'itemBeforeCut')
  request.r(i1181[4], i1181[5], 0, i1180, 'itemWaitToCut')
  request.r(i1181[6], i1181[7], 0, i1180, 'knifeBeforeCut')
  request.r(i1181[8], i1181[9], 0, i1180, 'knife')
  request.r(i1181[10], i1181[11], 0, i1180, 'cuttingBoard')
  request.r(i1181[12], i1181[13], 0, i1180, 'targetPlate')
  i1180.isOnBoard = !!i1181[14]
  i1180.targetPlateType = i1181[15]
  i1180.flyToDish = i1181[16]
  i1180.isFlyToDishAnim = !!i1181[17]
  i1180.cantCutOnFirst = !!i1181[18]
  i1180.isDone = !!i1181[19]
  i1180.onProcess = !!i1181[20]
  request.r(i1181[21], i1181[22], 0, i1180, 'itemDraggable')
  request.r(i1181[23], i1181[24], 0, i1180, 'itemClickable')
  request.r(i1181[25], i1181[26], 0, i1180, 'itemStirring')
  request.r(i1181[27], i1181[28], 0, i1180, 'itemKnifeSpriteMaskCutter')
  request.r(i1181[29], i1181[30], 0, i1180, 'itemSpriteMaskPainter')
  request.r(i1181[31], i1181[32], 0, i1180, 'itemDragSpriteMaskPainter')
  request.r(i1181[33], i1181[34], 0, i1180, 'itemMoveToTarget')
  request.r(i1181[35], i1181[36], 0, i1180, 'animator')
  i1180.itemType = i1181[37]
  request.r(i1181[38], i1181[39], 0, i1180, 'spriteRenderer')
  i1180.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1181[40], i1180.onKnifeIn)
  i1180.heartEffectScale = i1181[41]
  i1180.breakHeartEffectScale = i1181[42]
  i1180.blinkEffectScale = i1181[43]
  i1180.mergeEffectScale = i1181[44]
  i1180.playMoveToTargetFinishSound = !!i1181[45]
  i1180.moveToTargetFinishFxType = i1181[46]
  i1180.fxSpawnZPos = i1181[47]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1183 = data
  i1182.ambientIntensity = i1183[0]
  i1182.reflectionIntensity = i1183[1]
  i1182.ambientMode = i1183[2]
  i1182.ambientLight = new pc.Color(i1183[3], i1183[4], i1183[5], i1183[6])
  i1182.ambientSkyColor = new pc.Color(i1183[7], i1183[8], i1183[9], i1183[10])
  i1182.ambientGroundColor = new pc.Color(i1183[11], i1183[12], i1183[13], i1183[14])
  i1182.ambientEquatorColor = new pc.Color(i1183[15], i1183[16], i1183[17], i1183[18])
  i1182.fogColor = new pc.Color(i1183[19], i1183[20], i1183[21], i1183[22])
  i1182.fogEndDistance = i1183[23]
  i1182.fogStartDistance = i1183[24]
  i1182.fogDensity = i1183[25]
  i1182.fog = !!i1183[26]
  request.r(i1183[27], i1183[28], 0, i1182, 'skybox')
  i1182.fogMode = i1183[29]
  var i1185 = i1183[30]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1185[i + 0]) );
  }
  i1182.lightmaps = i1184
  i1182.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1183[31], i1182.lightProbes)
  i1182.lightmapsMode = i1183[32]
  i1182.mixedBakeMode = i1183[33]
  i1182.environmentLightingMode = i1183[34]
  i1182.ambientProbe = new pc.SphericalHarmonicsL2(i1183[35])
  i1182.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1183[36])
  i1182.useReferenceAmbientProbe = !!i1183[37]
  request.r(i1183[38], i1183[39], 0, i1182, 'customReflection')
  request.r(i1183[40], i1183[41], 0, i1182, 'defaultReflection')
  i1182.defaultReflectionMode = i1183[42]
  i1182.defaultReflectionResolution = i1183[43]
  i1182.sunLightObjectId = i1183[44]
  i1182.pixelLightCount = i1183[45]
  i1182.defaultReflectionHDR = !!i1183[46]
  i1182.hasLightDataAsset = !!i1183[47]
  i1182.hasManualGenerate = !!i1183[48]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'lightmapColor')
  request.r(i1189[2], i1189[3], 0, i1188, 'lightmapDirection')
  request.r(i1189[4], i1189[5], 0, i1188, 'shadowMask')
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1190 = root || new UnityEngine.LightProbes()
  var i1191 = data
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1201[i + 0]));
  }
  i1198.ShaderCompilationErrors = i1200
  i1198.name = i1199[1]
  i1198.guid = i1199[2]
  var i1203 = i1199[3]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.shaderDefinedKeywords = i1202
  var i1205 = i1199[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1205[i + 0]) );
  }
  i1198.passes = i1204
  var i1207 = i1199[5]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1207[i + 0]) );
  }
  i1198.usePasses = i1206
  var i1209 = i1199[6]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1209[i + 0]) );
  }
  i1198.defaultParameterValues = i1208
  request.r(i1199[7], i1199[8], 0, i1198, 'unityFallbackShader')
  i1198.readDepth = !!i1199[9]
  i1198.hasDepthOnlyPass = !!i1199[10]
  i1198.isCreatedByShaderGraph = !!i1199[11]
  i1198.disableBatching = !!i1199[12]
  i1198.compiled = !!i1199[13]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1213 = data
  i1212.shaderName = i1213[0]
  i1212.errorMessage = i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1216 = root || new pc.UnityShaderPass()
  var i1217 = data
  i1216.id = i1217[0]
  i1216.subShaderIndex = i1217[1]
  i1216.name = i1217[2]
  i1216.passType = i1217[3]
  i1216.grabPassTextureName = i1217[4]
  i1216.usePass = !!i1217[5]
  i1216.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[6], i1216.zTest)
  i1216.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[7], i1216.zWrite)
  i1216.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[8], i1216.culling)
  i1216.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1217[9], i1216.blending)
  i1216.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1217[10], i1216.alphaBlending)
  i1216.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[11], i1216.colorWriteMask)
  i1216.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[12], i1216.offsetUnits)
  i1216.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[13], i1216.offsetFactor)
  i1216.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[14], i1216.stencilRef)
  i1216.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[15], i1216.stencilReadMask)
  i1216.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[16], i1216.stencilWriteMask)
  i1216.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1217[17], i1216.stencilOp)
  i1216.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1217[18], i1216.stencilOpFront)
  i1216.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1217[19], i1216.stencilOpBack)
  var i1219 = i1217[20]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1219[i + 0]) );
  }
  i1216.tags = i1218
  var i1221 = i1217[21]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1216.passDefinedKeywords = i1220
  var i1223 = i1217[22]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1223[i + 0]) );
  }
  i1216.passDefinedKeywordGroups = i1222
  var i1225 = i1217[23]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1225[i + 0]) );
  }
  i1216.variants = i1224
  var i1227 = i1217[24]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1227[i + 0]) );
  }
  i1216.excludedVariants = i1226
  i1216.hasDepthReader = !!i1217[25]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1229 = data
  i1228.val = i1229[0]
  i1228.name = i1229[1]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1231 = data
  i1230.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[0], i1230.src)
  i1230.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[1], i1230.dst)
  i1230.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[2], i1230.op)
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1233 = data
  i1232.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[0], i1232.pass)
  i1232.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[1], i1232.fail)
  i1232.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[2], i1232.zFail)
  i1232.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[3], i1232.comp)
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.value = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1240.keywords = i1242
  i1240.hasDiscard = !!i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1247 = data
  i1246.passId = i1247[0]
  i1246.subShaderIndex = i1247[1]
  var i1249 = i1247[2]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1246.keywords = i1248
  i1246.vertexProgram = i1247[3]
  i1246.fragmentProgram = i1247[4]
  i1246.exportedForWebGl2 = !!i1247[5]
  i1246.readDepth = !!i1247[6]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1253 = data
  request.r(i1253[0], i1253[1], 0, i1252, 'shader')
  i1252.pass = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.type = i1257[1]
  i1256.value = new pc.Vec4( i1257[2], i1257[3], i1257[4], i1257[5] )
  i1256.textureValue = i1257[6]
  i1256.shaderPropertyFlag = i1257[7]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1259 = data
  i1258.name = i1259[0]
  request.r(i1259[1], i1259[2], 0, i1258, 'texture')
  i1258.aabb = i1259[3]
  i1258.vertices = i1259[4]
  i1258.triangles = i1259[5]
  i1258.textureRect = UnityEngine.Rect.MinMaxRect(i1259[6], i1259[7], i1259[8], i1259[9])
  i1258.packedRect = UnityEngine.Rect.MinMaxRect(i1259[10], i1259[11], i1259[12], i1259[13])
  i1258.border = new pc.Vec4( i1259[14], i1259[15], i1259[16], i1259[17] )
  i1258.transparency = i1259[18]
  i1258.bounds = i1259[19]
  i1258.pixelsPerUnit = i1259[20]
  i1258.textureWidth = i1259[21]
  i1258.textureHeight = i1259[22]
  i1258.nativeSize = new pc.Vec2( i1259[23], i1259[24] )
  i1258.pivot = new pc.Vec2( i1259[25], i1259[26] )
  i1258.textureRectOffset = new pc.Vec2( i1259[27], i1259[28] )
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1261 = data
  i1260.name = i1261[0]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.wrapMode = i1263[1]
  i1262.isLooping = !!i1263[2]
  i1262.length = i1263[3]
  var i1265 = i1263[4]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1265[i + 0]) );
  }
  i1262.curves = i1264
  var i1267 = i1263[5]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1267[i + 0]) );
  }
  i1262.events = i1266
  i1262.halfPrecision = !!i1263[6]
  i1262._frameRate = i1263[7]
  i1262.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1263[8], i1262.localBounds)
  i1262.hasMuscleCurves = !!i1263[9]
  var i1269 = i1263[10]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1262.clipMuscleConstant = i1268
  i1262.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1263[11], i1262.clipBindingConstant)
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1273 = data
  i1272.path = i1273[0]
  i1272.hash = i1273[1]
  i1272.componentType = i1273[2]
  i1272.property = i1273[3]
  i1272.keys = i1273[4]
  var i1275 = i1273[5]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1275[i + 0]) );
  }
  i1272.objectReferenceKeys = i1274
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1279 = data
  i1278.time = i1279[0]
  request.r(i1279[1], i1279[2], 0, i1278, 'value')
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1283 = data
  i1282.functionName = i1283[0]
  i1282.floatParameter = i1283[1]
  i1282.intParameter = i1283[2]
  i1282.stringParameter = i1283[3]
  request.r(i1283[4], i1283[5], 0, i1282, 'objectReferenceParameter')
  i1282.time = i1283[6]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1285 = data
  i1284.center = new pc.Vec3( i1285[0], i1285[1], i1285[2] )
  i1284.extends = new pc.Vec3( i1285[3], i1285[4], i1285[5] )
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1288.genericBindings = i1290
  var i1293 = i1289[1]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1288.pptrCurveMapping = i1292
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1295 = data
  i1294.name = i1295[0]
  var i1297 = i1295[1]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1297[i + 0]) );
  }
  i1294.layers = i1296
  var i1299 = i1295[2]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1299[i + 0]) );
  }
  i1294.parameters = i1298
  i1294.animationClips = i1295[3]
  i1294.avatarUnsupported = i1295[4]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.defaultWeight = i1303[1]
  i1302.blendingMode = i1303[2]
  i1302.avatarMask = i1303[3]
  i1302.syncedLayerIndex = i1303[4]
  i1302.syncedLayerAffectsTiming = !!i1303[5]
  i1302.syncedLayers = i1303[6]
  i1302.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1303[7], i1302.stateMachine)
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1305 = data
  i1304.id = i1305[0]
  i1304.name = i1305[1]
  i1304.path = i1305[2]
  var i1307 = i1305[3]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1307[i + 0]) );
  }
  i1304.states = i1306
  var i1309 = i1305[4]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1309[i + 0]) );
  }
  i1304.machines = i1308
  var i1311 = i1305[5]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1311[i + 0]) );
  }
  i1304.entryStateTransitions = i1310
  var i1313 = i1305[6]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1313[i + 0]) );
  }
  i1304.exitStateTransitions = i1312
  var i1315 = i1305[7]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1315[i + 0]) );
  }
  i1304.anyStateTransitions = i1314
  i1304.defaultStateId = i1305[8]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  i1318.cycleOffset = i1319[2]
  i1318.cycleOffsetParameter = i1319[3]
  i1318.cycleOffsetParameterActive = !!i1319[4]
  i1318.mirror = !!i1319[5]
  i1318.mirrorParameter = i1319[6]
  i1318.mirrorParameterActive = !!i1319[7]
  i1318.motionId = i1319[8]
  i1318.nameHash = i1319[9]
  i1318.fullPathHash = i1319[10]
  i1318.speed = i1319[11]
  i1318.speedParameter = i1319[12]
  i1318.speedParameterActive = !!i1319[13]
  i1318.tag = i1319[14]
  i1318.tagHash = i1319[15]
  i1318.writeDefaultValues = !!i1319[16]
  var i1321 = i1319[17]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 2, i1320, '')
  }
  i1318.behaviours = i1320
  var i1323 = i1319[18]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1323[i + 0]) );
  }
  i1318.transitions = i1322
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1329 = data
  i1328.fullPath = i1329[0]
  i1328.canTransitionToSelf = !!i1329[1]
  i1328.duration = i1329[2]
  i1328.exitTime = i1329[3]
  i1328.hasExitTime = !!i1329[4]
  i1328.hasFixedDuration = !!i1329[5]
  i1328.interruptionSource = i1329[6]
  i1328.offset = i1329[7]
  i1328.orderedInterruption = !!i1329[8]
  i1328.destinationStateId = i1329[9]
  i1328.isExit = !!i1329[10]
  i1328.mute = !!i1329[11]
  i1328.solo = !!i1329[12]
  var i1331 = i1329[13]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1331[i + 0]) );
  }
  i1328.conditions = i1330
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1337 = data
  i1336.destinationStateId = i1337[0]
  i1336.isExit = !!i1337[1]
  i1336.mute = !!i1337[2]
  i1336.solo = !!i1337[3]
  var i1339 = i1337[4]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1339[i + 0]) );
  }
  i1336.conditions = i1338
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1343 = data
  i1342.defaultBool = !!i1343[0]
  i1342.defaultFloat = i1343[1]
  i1342.defaultInt = i1343[2]
  i1342.name = i1343[3]
  i1342.nameHash = i1343[4]
  i1342.type = i1343[5]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1347 = data
  i1346.mode = i1347[0]
  i1346.parameter = i1347[1]
  i1346.threshold = i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.bytes64 = i1349[1]
  i1348.data = i1349[2]
  return i1348
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1351 = data
  i1350.normalStyle = i1351[0]
  i1350.normalSpacingOffset = i1351[1]
  i1350.boldStyle = i1351[2]
  i1350.boldSpacing = i1351[3]
  i1350.italicStyle = i1351[4]
  i1350.tabSize = i1351[5]
  request.r(i1351[6], i1351[7], 0, i1350, 'atlas')
  i1350.m_SourceFontFileGUID = i1351[8]
  i1350.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1351[9], i1350.m_CreationSettings)
  request.r(i1351[10], i1351[11], 0, i1350, 'm_SourceFontFile')
  i1350.m_SourceFontFilePath = i1351[12]
  i1350.m_AtlasPopulationMode = i1351[13]
  i1350.InternalDynamicOS = !!i1351[14]
  var i1353 = i1351[15]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('UnityEngine.TextCore.Glyph', i1353[i + 0]));
  }
  i1350.m_GlyphTable = i1352
  var i1355 = i1351[16]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.TMP_Character', i1355[i + 0]));
  }
  i1350.m_CharacterTable = i1354
  var i1357 = i1351[17]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 2, i1356, '')
  }
  i1350.m_AtlasTextures = i1356
  i1350.m_AtlasTextureIndex = i1351[18]
  i1350.m_IsMultiAtlasTexturesEnabled = !!i1351[19]
  i1350.m_GetFontFeatures = !!i1351[20]
  i1350.m_ClearDynamicDataOnBuild = !!i1351[21]
  i1350.m_AtlasWidth = i1351[22]
  i1350.m_AtlasHeight = i1351[23]
  i1350.m_AtlasPadding = i1351[24]
  i1350.m_AtlasRenderMode = i1351[25]
  var i1359 = i1351[26]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('UnityEngine.TextCore.GlyphRect', i1359[i + 0]));
  }
  i1350.m_UsedGlyphRects = i1358
  var i1361 = i1351[27]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('UnityEngine.TextCore.GlyphRect', i1361[i + 0]));
  }
  i1350.m_FreeGlyphRects = i1360
  i1350.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1351[28], i1350.m_FontFeatureTable)
  i1350.m_ShouldReimportFontFeatures = !!i1351[29]
  var i1363 = i1351[30]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 1, i1362, '')
  }
  i1350.m_FallbackFontAssetTable = i1362
  var i1365 = i1351[31]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('TMPro.TMP_FontWeightPair', i1365[i + 0]) );
  }
  i1350.m_FontWeightTable = i1364
  var i1367 = i1351[32]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('TMPro.TMP_FontWeightPair', i1367[i + 0]) );
  }
  i1350.fontWeights = i1366
  i1350.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1351[33], i1350.m_fontInfo)
  var i1369 = i1351[34]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_Glyph', i1369[i + 0]));
  }
  i1350.m_glyphInfoList = i1368
  i1350.m_KerningTable = request.d('TMPro.KerningTable', i1351[35], i1350.m_KerningTable)
  var i1371 = i1351[36]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 1, i1370, '')
  }
  i1350.fallbackFontAssets = i1370
  i1350.m_Version = i1351[37]
  i1350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1351[38], i1350.m_FaceInfo)
  request.r(i1351[39], i1351[40], 0, i1350, 'm_Material')
  return i1350
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1373 = data
  i1372.sourceFontFileName = i1373[0]
  i1372.sourceFontFileGUID = i1373[1]
  i1372.faceIndex = i1373[2]
  i1372.pointSizeSamplingMode = i1373[3]
  i1372.pointSize = i1373[4]
  i1372.padding = i1373[5]
  i1372.paddingMode = i1373[6]
  i1372.packingMode = i1373[7]
  i1372.atlasWidth = i1373[8]
  i1372.atlasHeight = i1373[9]
  i1372.characterSetSelectionMode = i1373[10]
  i1372.characterSequence = i1373[11]
  i1372.referencedFontAssetGUID = i1373[12]
  i1372.referencedTextAssetGUID = i1373[13]
  i1372.fontStyle = i1373[14]
  i1372.fontStyleModifier = i1373[15]
  i1372.renderMode = i1373[16]
  i1372.includeFontFeatures = !!i1373[17]
  return i1372
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1377 = data
  i1376.m_Index = i1377[0]
  i1376.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1377[1], i1376.m_Metrics)
  i1376.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1377[2], i1376.m_GlyphRect)
  i1376.m_Scale = i1377[3]
  i1376.m_AtlasIndex = i1377[4]
  i1376.m_ClassDefinitionType = i1377[5]
  return i1376
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1379 = data
  i1378.m_Width = i1379[0]
  i1378.m_Height = i1379[1]
  i1378.m_HorizontalBearingX = i1379[2]
  i1378.m_HorizontalBearingY = i1379[3]
  i1378.m_HorizontalAdvance = i1379[4]
  return i1378
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1381 = data
  i1380.m_X = i1381[0]
  i1380.m_Y = i1381[1]
  i1380.m_Width = i1381[2]
  i1380.m_Height = i1381[3]
  return i1380
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_Character' )
  var i1385 = data
  i1384.m_ElementType = i1385[0]
  i1384.m_Unicode = i1385[1]
  i1384.m_GlyphIndex = i1385[2]
  i1384.m_Scale = i1385[3]
  return i1384
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('TMPro.MultipleSubstitutionRecord', i1393[i + 0]));
  }
  i1390.m_MultipleSubstitutionRecords = i1392
  var i1395 = i1391[1]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.add(request.d('TMPro.LigatureSubstitutionRecord', i1395[i + 0]));
  }
  i1390.m_LigatureSubstitutionRecords = i1394
  var i1397 = i1391[2]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1397[i + 0]));
  }
  i1390.m_GlyphPairAdjustmentRecords = i1396
  var i1399 = i1391[3]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1399[i + 0]));
  }
  i1390.m_MarkToBaseAdjustmentRecords = i1398
  var i1401 = i1391[4]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1401[i + 0]));
  }
  i1390.m_MarkToMarkAdjustmentRecords = i1400
  return i1390
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1405 = data
  i1404.m_TargetGlyphID = i1405[0]
  i1404.m_SubstituteGlyphIDs = i1405[1]
  return i1404
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1409 = data
  i1408.m_ComponentGlyphIDs = i1409[0]
  i1408.m_LigatureGlyphID = i1409[1]
  return i1408
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1413 = data
  i1412.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1413[0], i1412.m_FirstAdjustmentRecord)
  i1412.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1413[1], i1412.m_SecondAdjustmentRecord)
  i1412.m_FeatureLookupFlags = i1413[2]
  return i1412
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1417 = data
  i1416.m_BaseGlyphID = i1417[0]
  i1416.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1417[1], i1416.m_BaseGlyphAnchorPoint)
  i1416.m_MarkGlyphID = i1417[2]
  i1416.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1417[3], i1416.m_MarkPositionAdjustment)
  return i1416
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1420 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1421 = data
  i1420.m_BaseMarkGlyphID = i1421[0]
  i1420.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1421[1], i1420.m_BaseMarkGlyphAnchorPoint)
  i1420.m_CombiningMarkGlyphID = i1421[2]
  i1420.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1421[3], i1420.m_CombiningMarkPositionAdjustment)
  return i1420
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'regularTypeface')
  request.r(i1427[2], i1427[3], 0, i1426, 'italicTypeface')
  return i1426
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1429 = data
  i1428.Name = i1429[0]
  i1428.PointSize = i1429[1]
  i1428.Scale = i1429[2]
  i1428.CharacterCount = i1429[3]
  i1428.LineHeight = i1429[4]
  i1428.Baseline = i1429[5]
  i1428.Ascender = i1429[6]
  i1428.CapHeight = i1429[7]
  i1428.Descender = i1429[8]
  i1428.CenterLine = i1429[9]
  i1428.SuperscriptOffset = i1429[10]
  i1428.SubscriptOffset = i1429[11]
  i1428.SubSize = i1429[12]
  i1428.Underline = i1429[13]
  i1428.UnderlineThickness = i1429[14]
  i1428.strikethrough = i1429[15]
  i1428.strikethroughThickness = i1429[16]
  i1428.TabWidth = i1429[17]
  i1428.Padding = i1429[18]
  i1428.AtlasWidth = i1429[19]
  i1428.AtlasHeight = i1429[20]
  return i1428
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1433 = data
  i1432.id = i1433[0]
  i1432.x = i1433[1]
  i1432.y = i1433[2]
  i1432.width = i1433[3]
  i1432.height = i1433[4]
  i1432.xOffset = i1433[5]
  i1432.yOffset = i1433[6]
  i1432.xAdvance = i1433[7]
  i1432.scale = i1433[8]
  return i1432
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1434 = root || request.c( 'TMPro.KerningTable' )
  var i1435 = data
  var i1437 = i1435[0]
  var i1436 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.add(request.d('TMPro.KerningPair', i1437[i + 0]));
  }
  i1434.kerningPairs = i1436
  return i1434
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.KerningPair' )
  var i1441 = data
  i1440.xOffset = i1441[0]
  i1440.m_FirstGlyph = i1441[1]
  i1440.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1441[2], i1440.m_FirstGlyphAdjustments)
  i1440.m_SecondGlyph = i1441[3]
  i1440.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1441[4], i1440.m_SecondGlyphAdjustments)
  i1440.m_IgnoreSpacingAdjustments = !!i1441[5]
  return i1440
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1443 = data
  i1442.m_FaceIndex = i1443[0]
  i1442.m_FamilyName = i1443[1]
  i1442.m_StyleName = i1443[2]
  i1442.m_PointSize = i1443[3]
  i1442.m_Scale = i1443[4]
  i1442.m_UnitsPerEM = i1443[5]
  i1442.m_LineHeight = i1443[6]
  i1442.m_AscentLine = i1443[7]
  i1442.m_CapLine = i1443[8]
  i1442.m_MeanLine = i1443[9]
  i1442.m_Baseline = i1443[10]
  i1442.m_DescentLine = i1443[11]
  i1442.m_SuperscriptOffset = i1443[12]
  i1442.m_SuperscriptSize = i1443[13]
  i1442.m_SubscriptOffset = i1443[14]
  i1442.m_SubscriptSize = i1443[15]
  i1442.m_UnderlineOffset = i1443[16]
  i1442.m_UnderlineThickness = i1443[17]
  i1442.m_StrikethroughOffset = i1443[18]
  i1442.m_StrikethroughThickness = i1443[19]
  i1442.m_TabWidth = i1443[20]
  return i1442
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1444 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 2) {
  request.r(i1447[i + 0], i1447[i + 1], 2, i1446, '')
  }
  i1444.atlasAssets = i1446
  i1444.scale = i1445[1]
  request.r(i1445[2], i1445[3], 0, i1444, 'skeletonJSON')
  i1444.isUpgradingBlendModeMaterials = !!i1445[4]
  i1444.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1445[5], i1444.blendModeMaterials)
  var i1449 = i1445[6]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 1, i1448, '')
  }
  i1444.skeletonDataModifiers = i1448
  var i1451 = i1445[7]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1444.fromAnimation = i1450
  var i1453 = i1445[8]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( i1453[i + 0] );
  }
  i1444.toAnimation = i1452
  i1444.duration = i1445[9]
  i1444.defaultMix = i1445[10]
  request.r(i1445[11], i1445[12], 0, i1444, 'controller')
  return i1444
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1456 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1457 = data
  i1456.applyAdditiveMaterial = !!i1457[0]
  var i1459 = i1457[1]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1459[i + 0]));
  }
  i1456.additiveMaterials = i1458
  var i1461 = i1457[2]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1461[i + 0]));
  }
  i1456.multiplyMaterials = i1460
  var i1463 = i1457[3]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1463[i + 0]));
  }
  i1456.screenMaterials = i1462
  i1456.requiresBlendModeMaterials = !!i1457[4]
  return i1456
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1466 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1467 = data
  i1466.pageName = i1467[0]
  request.r(i1467[1], i1467[2], 0, i1466, 'material')
  return i1466
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1470 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1471 = data
  request.r(i1471[0], i1471[1], 0, i1470, 'atlasFile')
  var i1473 = i1471[2]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 2) {
  request.r(i1473[i + 0], i1473[i + 1], 2, i1472, '')
  }
  i1470.materials = i1472
  return i1470
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1474 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1475 = data
  i1474.useSafeMode = !!i1475[0]
  i1474.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1475[1], i1474.safeModeOptions)
  i1474.timeScale = i1475[2]
  i1474.unscaledTimeScale = i1475[3]
  i1474.useSmoothDeltaTime = !!i1475[4]
  i1474.maxSmoothUnscaledTime = i1475[5]
  i1474.rewindCallbackMode = i1475[6]
  i1474.showUnityEditorReport = !!i1475[7]
  i1474.logBehaviour = i1475[8]
  i1474.drawGizmos = !!i1475[9]
  i1474.defaultRecyclable = !!i1475[10]
  i1474.defaultAutoPlay = i1475[11]
  i1474.defaultUpdateType = i1475[12]
  i1474.defaultTimeScaleIndependent = !!i1475[13]
  i1474.defaultEaseType = i1475[14]
  i1474.defaultEaseOvershootOrAmplitude = i1475[15]
  i1474.defaultEasePeriod = i1475[16]
  i1474.defaultAutoKill = !!i1475[17]
  i1474.defaultLoopType = i1475[18]
  i1474.debugMode = !!i1475[19]
  i1474.debugStoreTargetId = !!i1475[20]
  i1474.showPreviewPanel = !!i1475[21]
  i1474.storeSettingsLocation = i1475[22]
  i1474.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1475[23], i1474.modules)
  i1474.createASMDEF = !!i1475[24]
  i1474.showPlayingTweens = !!i1475[25]
  i1474.showPausedTweens = !!i1475[26]
  return i1474
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1476 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1477 = data
  i1476.logBehaviour = i1477[0]
  i1476.nestedTweenFailureBehaviour = i1477[1]
  return i1476
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1478 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1479 = data
  i1478.showPanel = !!i1479[0]
  i1478.audioEnabled = !!i1479[1]
  i1478.physicsEnabled = !!i1479[2]
  i1478.physics2DEnabled = !!i1479[3]
  i1478.spriteEnabled = !!i1479[4]
  i1478.uiEnabled = !!i1479[5]
  i1478.uiToolkitEnabled = !!i1479[6]
  i1478.textMeshProEnabled = !!i1479[7]
  i1478.tk2DEnabled = !!i1479[8]
  i1478.deAudioEnabled = !!i1479[9]
  i1478.deUnityExtendedEnabled = !!i1479[10]
  i1478.epoOutlineEnabled = !!i1479[11]
  return i1478
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.TMP_Settings' )
  var i1481 = data
  i1480.assetVersion = i1481[0]
  i1480.m_TextWrappingMode = i1481[1]
  i1480.m_enableKerning = !!i1481[2]
  var i1483 = i1481[3]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.add(i1483[i + 0]);
  }
  i1480.m_ActiveFontFeatures = i1482
  i1480.m_enableExtraPadding = !!i1481[4]
  i1480.m_enableTintAllSprites = !!i1481[5]
  i1480.m_enableParseEscapeCharacters = !!i1481[6]
  i1480.m_EnableRaycastTarget = !!i1481[7]
  i1480.m_GetFontFeaturesAtRuntime = !!i1481[8]
  i1480.m_missingGlyphCharacter = i1481[9]
  i1480.m_ClearDynamicDataOnBuild = !!i1481[10]
  i1480.m_warningsDisabled = !!i1481[11]
  request.r(i1481[12], i1481[13], 0, i1480, 'm_defaultFontAsset')
  i1480.m_defaultFontAssetPath = i1481[14]
  i1480.m_defaultFontSize = i1481[15]
  i1480.m_defaultAutoSizeMinRatio = i1481[16]
  i1480.m_defaultAutoSizeMaxRatio = i1481[17]
  i1480.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1481[18], i1481[19] )
  i1480.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1481[20], i1481[21] )
  i1480.m_autoSizeTextContainer = !!i1481[22]
  i1480.m_IsTextObjectScaleStatic = !!i1481[23]
  var i1485 = i1481[24]
  var i1484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1485.length; i += 2) {
  request.r(i1485[i + 0], i1485[i + 1], 1, i1484, '')
  }
  i1480.m_fallbackFontAssets = i1484
  i1480.m_matchMaterialPreset = !!i1481[25]
  i1480.m_HideSubTextObjects = !!i1481[26]
  request.r(i1481[27], i1481[28], 0, i1480, 'm_defaultSpriteAsset')
  i1480.m_defaultSpriteAssetPath = i1481[29]
  i1480.m_enableEmojiSupport = !!i1481[30]
  i1480.m_MissingCharacterSpriteUnicode = i1481[31]
  var i1487 = i1481[32]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1487.length; i += 2) {
  request.r(i1487[i + 0], i1487[i + 1], 1, i1486, '')
  }
  i1480.m_EmojiFallbackTextAssets = i1486
  i1480.m_defaultColorGradientPresetsPath = i1481[33]
  request.r(i1481[34], i1481[35], 0, i1480, 'm_defaultStyleSheet')
  i1480.m_StyleSheetsResourcePath = i1481[36]
  request.r(i1481[37], i1481[38], 0, i1480, 'm_leadingCharacters')
  request.r(i1481[39], i1481[40], 0, i1480, 'm_followingCharacters')
  i1480.m_UseModernHangulLineBreakingRules = !!i1481[41]
  return i1480
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'spriteSheet')
  var i1493 = i1491[2]
  var i1492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.add(request.d('TMPro.TMP_Sprite', i1493[i + 0]));
  }
  i1490.spriteInfoList = i1492
  var i1495 = i1491[3]
  var i1494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1495.length; i += 2) {
  request.r(i1495[i + 0], i1495[i + 1], 1, i1494, '')
  }
  i1490.fallbackSpriteAssets = i1494
  var i1497 = i1491[4]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('TMPro.TMP_SpriteCharacter', i1497[i + 0]));
  }
  i1490.m_SpriteCharacterTable = i1496
  var i1499 = i1491[5]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.add(request.d('TMPro.TMP_SpriteGlyph', i1499[i + 0]));
  }
  i1490.m_GlyphTable = i1498
  i1490.m_Version = i1491[6]
  i1490.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1491[7], i1490.m_FaceInfo)
  request.r(i1491[8], i1491[9], 0, i1490, 'm_Material')
  return i1490
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1502 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.hashCode = i1503[1]
  i1502.unicode = i1503[2]
  i1502.pivot = new pc.Vec2( i1503[3], i1503[4] )
  request.r(i1503[5], i1503[6], 0, i1502, 'sprite')
  i1502.id = i1503[7]
  i1502.x = i1503[8]
  i1502.y = i1503[9]
  i1502.width = i1503[10]
  i1502.height = i1503[11]
  i1502.xOffset = i1503[12]
  i1502.yOffset = i1503[13]
  i1502.xAdvance = i1503[14]
  i1502.scale = i1503[15]
  return i1502
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1508 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1509 = data
  i1508.m_Name = i1509[0]
  i1508.m_ElementType = i1509[1]
  i1508.m_Unicode = i1509[2]
  i1508.m_GlyphIndex = i1509[3]
  i1508.m_Scale = i1509[4]
  return i1508
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1512 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'sprite')
  i1512.m_Index = i1513[2]
  i1512.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1513[3], i1512.m_Metrics)
  i1512.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1513[4], i1512.m_GlyphRect)
  i1512.m_Scale = i1513[5]
  i1512.m_AtlasIndex = i1513[6]
  i1512.m_ClassDefinitionType = i1513[7]
  return i1512
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1515 = data
  var i1517 = i1515[0]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.add(request.d('TMPro.TMP_Style', i1517[i + 0]));
  }
  i1514.m_StyleList = i1516
  return i1514
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1520 = root || request.c( 'TMPro.TMP_Style' )
  var i1521 = data
  i1520.m_Name = i1521[0]
  i1520.m_HashCode = i1521[1]
  i1520.m_OpeningDefinition = i1521[2]
  i1520.m_ClosingDefinition = i1521[3]
  i1520.m_OpeningTagArray = i1521[4]
  i1520.m_ClosingTagArray = i1521[5]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1523 = data
  var i1525 = i1523[0]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1525[i + 0]) );
  }
  i1522.files = i1524
  i1522.componentToPrefabIds = i1523[1]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1529 = data
  i1528.path = i1529[0]
  request.r(i1529[1], i1529[2], 0, i1528, 'unityObject')
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1531 = data
  var i1533 = i1531[0]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1533[i + 0]) );
  }
  i1530.scriptsExecutionOrder = i1532
  var i1535 = i1531[1]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1535[i + 0]) );
  }
  i1530.sortingLayers = i1534
  var i1537 = i1531[2]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1537[i + 0]) );
  }
  i1530.cullingLayers = i1536
  i1530.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1531[3], i1530.timeSettings)
  i1530.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1531[4], i1530.physicsSettings)
  i1530.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1531[5], i1530.physics2DSettings)
  i1530.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1531[6], i1530.qualitySettings)
  i1530.enableRealtimeShadows = !!i1531[7]
  i1530.enableAutoInstancing = !!i1531[8]
  i1530.enableStaticBatching = !!i1531[9]
  i1530.enableDynamicBatching = !!i1531[10]
  i1530.lightmapEncodingQuality = i1531[11]
  i1530.desiredColorSpace = i1531[12]
  var i1539 = i1531[13]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( i1539[i + 0] );
  }
  i1530.allTags = i1538
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.value = i1543[1]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1547 = data
  i1546.id = i1547[0]
  i1546.name = i1547[1]
  i1546.value = i1547[2]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1551 = data
  i1550.id = i1551[0]
  i1550.name = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1553 = data
  i1552.fixedDeltaTime = i1553[0]
  i1552.maximumDeltaTime = i1553[1]
  i1552.timeScale = i1553[2]
  i1552.maximumParticleTimestep = i1553[3]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1555 = data
  i1554.gravity = new pc.Vec3( i1555[0], i1555[1], i1555[2] )
  i1554.defaultSolverIterations = i1555[3]
  i1554.bounceThreshold = i1555[4]
  i1554.autoSyncTransforms = !!i1555[5]
  i1554.autoSimulation = !!i1555[6]
  var i1557 = i1555[7]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1557[i + 0]) );
  }
  i1554.collisionMatrix = i1556
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1561 = data
  i1560.enabled = !!i1561[0]
  i1560.layerId = i1561[1]
  i1560.otherLayerId = i1561[2]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'material')
  i1562.gravity = new pc.Vec2( i1563[2], i1563[3] )
  i1562.positionIterations = i1563[4]
  i1562.velocityIterations = i1563[5]
  i1562.velocityThreshold = i1563[6]
  i1562.maxLinearCorrection = i1563[7]
  i1562.maxAngularCorrection = i1563[8]
  i1562.maxTranslationSpeed = i1563[9]
  i1562.maxRotationSpeed = i1563[10]
  i1562.baumgarteScale = i1563[11]
  i1562.baumgarteTOIScale = i1563[12]
  i1562.timeToSleep = i1563[13]
  i1562.linearSleepTolerance = i1563[14]
  i1562.angularSleepTolerance = i1563[15]
  i1562.defaultContactOffset = i1563[16]
  i1562.autoSimulation = !!i1563[17]
  i1562.queriesHitTriggers = !!i1563[18]
  i1562.queriesStartInColliders = !!i1563[19]
  i1562.callbacksOnDisable = !!i1563[20]
  i1562.reuseCollisionCallbacks = !!i1563[21]
  i1562.autoSyncTransforms = !!i1563[22]
  var i1565 = i1563[23]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1565[i + 0]) );
  }
  i1562.collisionMatrix = i1564
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.layerId = i1569[1]
  i1568.otherLayerId = i1569[2]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1571 = data
  var i1573 = i1571[0]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1573[i + 0]) );
  }
  i1570.qualityLevels = i1572
  var i1575 = i1571[1]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( i1575[i + 0] );
  }
  i1570.names = i1574
  i1570.shadows = i1571[2]
  i1570.anisotropicFiltering = i1571[3]
  i1570.antiAliasing = i1571[4]
  i1570.lodBias = i1571[5]
  i1570.shadowCascades = i1571[6]
  i1570.shadowDistance = i1571[7]
  i1570.shadowmaskMode = i1571[8]
  i1570.shadowProjection = i1571[9]
  i1570.shadowResolution = i1571[10]
  i1570.softParticles = !!i1571[11]
  i1570.softVegetation = !!i1571[12]
  i1570.activeColorSpace = i1571[13]
  i1570.desiredColorSpace = i1571[14]
  i1570.masterTextureLimit = i1571[15]
  i1570.maxQueuedFrames = i1571[16]
  i1570.particleRaycastBudget = i1571[17]
  i1570.pixelLightCount = i1571[18]
  i1570.realtimeReflectionProbes = !!i1571[19]
  i1570.shadowCascade2Split = i1571[20]
  i1570.shadowCascade4Split = new pc.Vec3( i1571[21], i1571[22], i1571[23] )
  i1570.streamingMipmapsActive = !!i1571[24]
  i1570.vSyncCount = i1571[25]
  i1570.asyncUploadBufferSize = i1571[26]
  i1570.asyncUploadTimeSlice = i1571[27]
  i1570.billboardsFaceCameraPosition = !!i1571[28]
  i1570.shadowNearPlaneOffset = i1571[29]
  i1570.streamingMipmapsMemoryBudget = i1571[30]
  i1570.maximumLODLevel = i1571[31]
  i1570.streamingMipmapsAddAllCameras = !!i1571[32]
  i1570.streamingMipmapsMaxLevelReduction = i1571[33]
  i1570.streamingMipmapsRenderersPerFrame = i1571[34]
  i1570.resolutionScalingFixedDPIFactor = i1571[35]
  i1570.streamingMipmapsMaxFileIORequests = i1571[36]
  i1570.currentQualityLevel = i1571[37]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1581 = data
  i1580.weight = i1581[0]
  i1580.vertices = i1581[1]
  i1580.normals = i1581[2]
  i1580.tangents = i1581[3]
  return i1580
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1583 = data
  i1582.m_GlyphIndex = i1583[0]
  i1582.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1583[1], i1582.m_GlyphValueRecord)
  return i1582
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1585 = data
  i1584.m_XCoordinate = i1585[0]
  i1584.m_YCoordinate = i1585[1]
  return i1584
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1586 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1587 = data
  i1586.m_XPositionAdjustment = i1587[0]
  i1586.m_YPositionAdjustment = i1587[1]
  return i1586
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1588 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1589 = data
  i1588.xPlacement = i1589[0]
  i1588.yPlacement = i1589[1]
  i1588.xAdvance = i1589[2]
  i1588.yAdvance = i1589[3]
  return i1588
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1591 = data
  i1590.m_XPlacement = i1591[0]
  i1590.m_YPlacement = i1591[1]
  i1590.m_XAdvance = i1591[2]
  i1590.m_YAdvance = i1591[3]
  return i1590
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[22],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[94],"101":[94],"102":[94],"103":[94],"104":[94],"105":[94],"106":[94],"107":[22],"108":[57],"109":[110],"111":[110],"21":[14],"112":[68],"69":[113],"66":[64],"64":[113],"67":[64],"114":[64],"115":[113],"116":[113],"117":[113],"118":[14],"119":[17,14],"58":[57],"31":[17,14],"120":[25,57],"121":[57],"122":[57,55],"123":[87],"124":[94],"125":[126],"127":[128],"129":[5],"130":[22],"131":[132],"133":[52],"134":[21],"135":[14],"136":[57,14],"27":[14,17],"137":[14],"138":[17,14],"139":[57],"140":[17,14],"141":[14],"142":[143],"144":[143],"145":[143],"146":[14],"147":[14],"24":[21],"16":[17,14],"148":[14],"23":[21],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[14],"156":[14],"157":[14],"158":[17,14],"159":[14],"160":[14],"161":[14],"162":[14],"163":[17,14],"164":[14],"165":[52],"166":[52],"53":[52],"167":[52],"168":[22],"169":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","CuttingItem","Item","CuttingBoard","Shushi","Chillie","SortChildByZPos","PhaseManager","ItemTypeDoneManager","DuckManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Dog","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Capybara","UnityEngine.SphereCollider","UnityEngine.BoxCollider","LastTray","UnityEngine.CapsuleCollider","ItemDraggable","ItemMoveToTarget","ItemDragChildRotator","ItemDragRaycastTarget","UnityEngine.SpriteMask","ItemClickable","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "18.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v59_Kimbap";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1754";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5004";

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

Deserializers.buildID = "1e8ffe16-6e37-4be2-b3e6-def8edf1bd96";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

