var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.JointSpring' )
  var i5013 = data
  i5012.spring = i5013[0]
  i5012.damper = i5013[1]
  i5012.targetPosition = i5013[2]
  return i5012
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.JointMotor' )
  var i5015 = data
  i5014.m_TargetVelocity = i5015[0]
  i5014.m_Force = i5015[1]
  i5014.m_FreeSpin = i5015[2]
  return i5014
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5016 = root || request.c( 'UnityEngine.JointLimits' )
  var i5017 = data
  i5016.m_Min = i5017[0]
  i5016.m_Max = i5017[1]
  i5016.m_Bounciness = i5017[2]
  i5016.m_BounceMinVelocity = i5017[3]
  i5016.m_ContactDistance = i5017[4]
  i5016.minBounce = i5017[5]
  i5016.maxBounce = i5017[6]
  return i5016
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.JointDrive' )
  var i5019 = data
  i5018.m_PositionSpring = i5019[0]
  i5018.m_PositionDamper = i5019[1]
  i5018.m_MaximumForce = i5019[2]
  i5018.m_UseAcceleration = i5019[3]
  return i5018
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5020 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5021 = data
  i5020.m_Spring = i5021[0]
  i5020.m_Damper = i5021[1]
  return i5020
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5022 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5023 = data
  i5022.m_Limit = i5023[0]
  i5022.m_Bounciness = i5023[1]
  i5022.m_ContactDistance = i5023[2]
  return i5022
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5024 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5025 = data
  i5024.m_ExtremumSlip = i5025[0]
  i5024.m_ExtremumValue = i5025[1]
  i5024.m_AsymptoteSlip = i5025[2]
  i5024.m_AsymptoteValue = i5025[3]
  i5024.m_Stiffness = i5025[4]
  return i5024
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5026 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5027 = data
  i5026.m_LowerAngle = i5027[0]
  i5026.m_UpperAngle = i5027[1]
  return i5026
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5028 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5029 = data
  i5028.m_MotorSpeed = i5029[0]
  i5028.m_MaximumMotorTorque = i5029[1]
  return i5028
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5030 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5031 = data
  i5030.m_DampingRatio = i5031[0]
  i5030.m_Frequency = i5031[1]
  i5030.m_Angle = i5031[2]
  return i5030
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5032 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5033 = data
  i5032.m_LowerTranslation = i5033[0]
  i5032.m_UpperTranslation = i5033[1]
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5034 = root || new pc.UnityMaterial()
  var i5035 = data
  i5034.name = i5035[0]
  request.r(i5035[1], i5035[2], 0, i5034, 'shader')
  i5034.renderQueue = i5035[3]
  i5034.enableInstancing = !!i5035[4]
  var i5037 = i5035[5]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5037[i + 0]) );
  }
  i5034.floatParameters = i5036
  var i5039 = i5035[6]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5039[i + 0]) );
  }
  i5034.colorParameters = i5038
  var i5041 = i5035[7]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5041[i + 0]) );
  }
  i5034.vectorParameters = i5040
  var i5043 = i5035[8]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5043[i + 0]) );
  }
  i5034.textureParameters = i5042
  var i5045 = i5035[9]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5045[i + 0]) );
  }
  i5034.materialFlags = i5044
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5049 = data
  i5048.name = i5049[0]
  i5048.value = i5049[1]
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5053 = data
  i5052.name = i5053[0]
  i5052.value = new pc.Color(i5053[1], i5053[2], i5053[3], i5053[4])
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5057 = data
  i5056.name = i5057[0]
  i5056.value = new pc.Vec4( i5057[1], i5057[2], i5057[3], i5057[4] )
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5061 = data
  i5060.name = i5061[0]
  request.r(i5061[1], i5061[2], 0, i5060, 'value')
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5065 = data
  i5064.name = i5065[0]
  i5064.enabled = !!i5065[1]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5067 = data
  i5066.name = i5067[0]
  i5066.width = i5067[1]
  i5066.height = i5067[2]
  i5066.mipmapCount = i5067[3]
  i5066.anisoLevel = i5067[4]
  i5066.filterMode = i5067[5]
  i5066.hdr = !!i5067[6]
  i5066.format = i5067[7]
  i5066.wrapMode = i5067[8]
  i5066.alphaIsTransparency = !!i5067[9]
  i5066.alphaSource = i5067[10]
  i5066.graphicsFormat = i5067[11]
  i5066.sRGBTexture = !!i5067[12]
  i5066.desiredColorSpace = i5067[13]
  i5066.wrapU = i5067[14]
  i5066.wrapV = i5067[15]
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5069 = data
  i5068.position = new pc.Vec3( i5069[0], i5069[1], i5069[2] )
  i5068.scale = new pc.Vec3( i5069[3], i5069[4], i5069[5] )
  i5068.rotation = new pc.Quat(i5069[6], i5069[7], i5069[8], i5069[9])
  return i5068
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i5070 = root || request.c( 'HeartEffect' )
  var i5071 = data
  i5070.defaultLifeTime = i5071[0]
  request.r(i5071[1], i5071[2], 0, i5070, 'tf')
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5073 = data
  i5072.color = new pc.Color(i5073[0], i5073[1], i5073[2], i5073[3])
  request.r(i5073[4], i5073[5], 0, i5072, 'sprite')
  i5072.flipX = !!i5073[6]
  i5072.flipY = !!i5073[7]
  i5072.drawMode = i5073[8]
  i5072.size = new pc.Vec2( i5073[9], i5073[10] )
  i5072.tileMode = i5073[11]
  i5072.adaptiveModeThreshold = i5073[12]
  i5072.maskInteraction = i5073[13]
  i5072.spriteSortPoint = i5073[14]
  i5072.enabled = !!i5073[15]
  request.r(i5073[16], i5073[17], 0, i5072, 'sharedMaterial')
  var i5075 = i5073[18]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 2) {
  request.r(i5075[i + 0], i5075[i + 1], 2, i5074, '')
  }
  i5072.sharedMaterials = i5074
  i5072.receiveShadows = !!i5073[19]
  i5072.shadowCastingMode = i5073[20]
  i5072.sortingLayerID = i5073[21]
  i5072.sortingOrder = i5073[22]
  i5072.lightmapIndex = i5073[23]
  i5072.lightmapSceneIndex = i5073[24]
  i5072.lightmapScaleOffset = new pc.Vec4( i5073[25], i5073[26], i5073[27], i5073[28] )
  i5072.lightProbeUsage = i5073[29]
  i5072.reflectionProbeUsage = i5073[30]
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5079 = data
  i5078.name = i5079[0]
  i5078.tagId = i5079[1]
  i5078.enabled = !!i5079[2]
  i5078.isStatic = !!i5079[3]
  i5078.layer = i5079[4]
  return i5078
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i5080 = root || request.c( 'HeartBreakEffect' )
  var i5081 = data
  i5080.defaultLifeTime = i5081[0]
  request.r(i5081[1], i5081[2], 0, i5080, 'tf')
  return i5080
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i5082 = root || request.c( 'BlinkEffect' )
  var i5083 = data
  request.r(i5083[0], i5083[1], 0, i5082, 'tf')
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5085 = data
  request.r(i5085[0], i5085[1], 0, i5084, 'mesh')
  i5084.meshCount = i5085[2]
  i5084.activeVertexStreamsCount = i5085[3]
  i5084.alignment = i5085[4]
  i5084.renderMode = i5085[5]
  i5084.sortMode = i5085[6]
  i5084.lengthScale = i5085[7]
  i5084.velocityScale = i5085[8]
  i5084.cameraVelocityScale = i5085[9]
  i5084.normalDirection = i5085[10]
  i5084.sortingFudge = i5085[11]
  i5084.minParticleSize = i5085[12]
  i5084.maxParticleSize = i5085[13]
  i5084.pivot = new pc.Vec3( i5085[14], i5085[15], i5085[16] )
  request.r(i5085[17], i5085[18], 0, i5084, 'trailMaterial')
  i5084.applyActiveColorSpace = !!i5085[19]
  i5084.enabled = !!i5085[20]
  request.r(i5085[21], i5085[22], 0, i5084, 'sharedMaterial')
  var i5087 = i5085[23]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 2) {
  request.r(i5087[i + 0], i5087[i + 1], 2, i5086, '')
  }
  i5084.sharedMaterials = i5086
  i5084.receiveShadows = !!i5085[24]
  i5084.shadowCastingMode = i5085[25]
  i5084.sortingLayerID = i5085[26]
  i5084.sortingOrder = i5085[27]
  i5084.lightmapIndex = i5085[28]
  i5084.lightmapSceneIndex = i5085[29]
  i5084.lightmapScaleOffset = new pc.Vec4( i5085[30], i5085[31], i5085[32], i5085[33] )
  i5084.lightProbeUsage = i5085[34]
  i5084.reflectionProbeUsage = i5085[35]
  return i5084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5089 = data
  i5088.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5089[0], i5088.main)
  i5088.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5089[1], i5088.colorBySpeed)
  i5088.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5089[2], i5088.colorOverLifetime)
  i5088.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5089[3], i5088.emission)
  i5088.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5089[4], i5088.rotationBySpeed)
  i5088.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5089[5], i5088.rotationOverLifetime)
  i5088.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5089[6], i5088.shape)
  i5088.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5089[7], i5088.sizeBySpeed)
  i5088.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5089[8], i5088.sizeOverLifetime)
  i5088.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5089[9], i5088.textureSheetAnimation)
  i5088.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5089[10], i5088.velocityOverLifetime)
  i5088.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5089[11], i5088.noise)
  i5088.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5089[12], i5088.inheritVelocity)
  i5088.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5089[13], i5088.forceOverLifetime)
  i5088.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5089[14], i5088.limitVelocityOverLifetime)
  i5088.useAutoRandomSeed = !!i5089[15]
  i5088.randomSeed = i5089[16]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5090 = root || new pc.ParticleSystemMain()
  var i5091 = data
  i5090.duration = i5091[0]
  i5090.loop = !!i5091[1]
  i5090.prewarm = !!i5091[2]
  i5090.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[3], i5090.startDelay)
  i5090.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[4], i5090.startLifetime)
  i5090.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[5], i5090.startSpeed)
  i5090.startSize3D = !!i5091[6]
  i5090.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[7], i5090.startSizeX)
  i5090.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[8], i5090.startSizeY)
  i5090.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[9], i5090.startSizeZ)
  i5090.startRotation3D = !!i5091[10]
  i5090.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[11], i5090.startRotationX)
  i5090.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[12], i5090.startRotationY)
  i5090.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[13], i5090.startRotationZ)
  i5090.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5091[14], i5090.startColor)
  i5090.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[15], i5090.gravityModifier)
  i5090.simulationSpace = i5091[16]
  request.r(i5091[17], i5091[18], 0, i5090, 'customSimulationSpace')
  i5090.simulationSpeed = i5091[19]
  i5090.useUnscaledTime = !!i5091[20]
  i5090.scalingMode = i5091[21]
  i5090.playOnAwake = !!i5091[22]
  i5090.maxParticles = i5091[23]
  i5090.emitterVelocityMode = i5091[24]
  i5090.stopAction = i5091[25]
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5092 = root || new pc.MinMaxCurve()
  var i5093 = data
  i5092.mode = i5093[0]
  i5092.curveMin = new pc.AnimationCurve( { keys_flow: i5093[1] } )
  i5092.curveMax = new pc.AnimationCurve( { keys_flow: i5093[2] } )
  i5092.curveMultiplier = i5093[3]
  i5092.constantMin = i5093[4]
  i5092.constantMax = i5093[5]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5094 = root || new pc.MinMaxGradient()
  var i5095 = data
  i5094.mode = i5095[0]
  i5094.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5095[1], i5094.gradientMin)
  i5094.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5095[2], i5094.gradientMax)
  i5094.colorMin = new pc.Color(i5095[3], i5095[4], i5095[5], i5095[6])
  i5094.colorMax = new pc.Color(i5095[7], i5095[8], i5095[9], i5095[10])
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5097 = data
  i5096.mode = i5097[0]
  var i5099 = i5097[1]
  var i5098 = []
  for(var i = 0; i < i5099.length; i += 1) {
    i5098.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5099[i + 0]) );
  }
  i5096.colorKeys = i5098
  var i5101 = i5097[2]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5101[i + 0]) );
  }
  i5096.alphaKeys = i5100
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5102 = root || new pc.ParticleSystemColorBySpeed()
  var i5103 = data
  i5102.enabled = !!i5103[0]
  i5102.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5103[1], i5102.color)
  i5102.range = new pc.Vec2( i5103[2], i5103[3] )
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5107 = data
  i5106.color = new pc.Color(i5107[0], i5107[1], i5107[2], i5107[3])
  i5106.time = i5107[4]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5111 = data
  i5110.alpha = i5111[0]
  i5110.time = i5111[1]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5112 = root || new pc.ParticleSystemColorOverLifetime()
  var i5113 = data
  i5112.enabled = !!i5113[0]
  i5112.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5113[1], i5112.color)
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5114 = root || new pc.ParticleSystemEmitter()
  var i5115 = data
  i5114.enabled = !!i5115[0]
  i5114.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[1], i5114.rateOverTime)
  i5114.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[2], i5114.rateOverDistance)
  var i5117 = i5115[3]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5117[i + 0]) );
  }
  i5114.bursts = i5116
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5120 = root || new pc.ParticleSystemBurst()
  var i5121 = data
  i5120.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5121[0], i5120.count)
  i5120.cycleCount = i5121[1]
  i5120.minCount = i5121[2]
  i5120.maxCount = i5121[3]
  i5120.repeatInterval = i5121[4]
  i5120.time = i5121[5]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5122 = root || new pc.ParticleSystemRotationBySpeed()
  var i5123 = data
  i5122.enabled = !!i5123[0]
  i5122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[1], i5122.x)
  i5122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[2], i5122.y)
  i5122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[3], i5122.z)
  i5122.separateAxes = !!i5123[4]
  i5122.range = new pc.Vec2( i5123[5], i5123[6] )
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5124 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5125 = data
  i5124.enabled = !!i5125[0]
  i5124.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5125[1], i5124.x)
  i5124.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5125[2], i5124.y)
  i5124.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5125[3], i5124.z)
  i5124.separateAxes = !!i5125[4]
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5126 = root || new pc.ParticleSystemShape()
  var i5127 = data
  i5126.enabled = !!i5127[0]
  i5126.shapeType = i5127[1]
  i5126.randomDirectionAmount = i5127[2]
  i5126.sphericalDirectionAmount = i5127[3]
  i5126.randomPositionAmount = i5127[4]
  i5126.alignToDirection = !!i5127[5]
  i5126.radius = i5127[6]
  i5126.radiusMode = i5127[7]
  i5126.radiusSpread = i5127[8]
  i5126.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[9], i5126.radiusSpeed)
  i5126.radiusThickness = i5127[10]
  i5126.angle = i5127[11]
  i5126.length = i5127[12]
  i5126.boxThickness = new pc.Vec3( i5127[13], i5127[14], i5127[15] )
  i5126.meshShapeType = i5127[16]
  request.r(i5127[17], i5127[18], 0, i5126, 'mesh')
  request.r(i5127[19], i5127[20], 0, i5126, 'meshRenderer')
  request.r(i5127[21], i5127[22], 0, i5126, 'skinnedMeshRenderer')
  i5126.useMeshMaterialIndex = !!i5127[23]
  i5126.meshMaterialIndex = i5127[24]
  i5126.useMeshColors = !!i5127[25]
  i5126.normalOffset = i5127[26]
  i5126.arc = i5127[27]
  i5126.arcMode = i5127[28]
  i5126.arcSpread = i5127[29]
  i5126.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[30], i5126.arcSpeed)
  i5126.donutRadius = i5127[31]
  i5126.position = new pc.Vec3( i5127[32], i5127[33], i5127[34] )
  i5126.rotation = new pc.Vec3( i5127[35], i5127[36], i5127[37] )
  i5126.scale = new pc.Vec3( i5127[38], i5127[39], i5127[40] )
  return i5126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5128 = root || new pc.ParticleSystemSizeBySpeed()
  var i5129 = data
  i5128.enabled = !!i5129[0]
  i5128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5129[1], i5128.x)
  i5128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5129[2], i5128.y)
  i5128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5129[3], i5128.z)
  i5128.separateAxes = !!i5129[4]
  i5128.range = new pc.Vec2( i5129[5], i5129[6] )
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5130 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5131 = data
  i5130.enabled = !!i5131[0]
  i5130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5131[1], i5130.x)
  i5130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5131[2], i5130.y)
  i5130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5131[3], i5130.z)
  i5130.separateAxes = !!i5131[4]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5132 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5133 = data
  i5132.enabled = !!i5133[0]
  i5132.mode = i5133[1]
  i5132.animation = i5133[2]
  i5132.numTilesX = i5133[3]
  i5132.numTilesY = i5133[4]
  i5132.useRandomRow = !!i5133[5]
  i5132.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5133[6], i5132.frameOverTime)
  i5132.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5133[7], i5132.startFrame)
  i5132.cycleCount = i5133[8]
  i5132.rowIndex = i5133[9]
  i5132.flipU = i5133[10]
  i5132.flipV = i5133[11]
  i5132.spriteCount = i5133[12]
  var i5135 = i5133[13]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 2) {
  request.r(i5135[i + 0], i5135[i + 1], 2, i5134, '')
  }
  i5132.sprites = i5134
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5138 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5139 = data
  i5138.enabled = !!i5139[0]
  i5138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[1], i5138.x)
  i5138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[2], i5138.y)
  i5138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[3], i5138.z)
  i5138.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[4], i5138.radial)
  i5138.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[5], i5138.speedModifier)
  i5138.space = i5139[6]
  i5138.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[7], i5138.orbitalX)
  i5138.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[8], i5138.orbitalY)
  i5138.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[9], i5138.orbitalZ)
  i5138.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[10], i5138.orbitalOffsetX)
  i5138.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[11], i5138.orbitalOffsetY)
  i5138.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[12], i5138.orbitalOffsetZ)
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5140 = root || new pc.ParticleSystemNoise()
  var i5141 = data
  i5140.enabled = !!i5141[0]
  i5140.separateAxes = !!i5141[1]
  i5140.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[2], i5140.strengthX)
  i5140.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[3], i5140.strengthY)
  i5140.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[4], i5140.strengthZ)
  i5140.frequency = i5141[5]
  i5140.damping = !!i5141[6]
  i5140.octaveCount = i5141[7]
  i5140.octaveMultiplier = i5141[8]
  i5140.octaveScale = i5141[9]
  i5140.quality = i5141[10]
  i5140.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[11], i5140.scrollSpeed)
  i5140.scrollSpeedMultiplier = i5141[12]
  i5140.remapEnabled = !!i5141[13]
  i5140.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[14], i5140.remapX)
  i5140.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[15], i5140.remapY)
  i5140.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[16], i5140.remapZ)
  i5140.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[17], i5140.positionAmount)
  i5140.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[18], i5140.rotationAmount)
  i5140.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[19], i5140.sizeAmount)
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5142 = root || new pc.ParticleSystemInheritVelocity()
  var i5143 = data
  i5142.enabled = !!i5143[0]
  i5142.mode = i5143[1]
  i5142.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[2], i5142.curve)
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5144 = root || new pc.ParticleSystemForceOverLifetime()
  var i5145 = data
  i5144.enabled = !!i5145[0]
  i5144.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[1], i5144.x)
  i5144.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[2], i5144.y)
  i5144.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[3], i5144.z)
  i5144.space = i5145[4]
  i5144.randomized = !!i5145[5]
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5146 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5147 = data
  i5146.enabled = !!i5147[0]
  i5146.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[1], i5146.limit)
  i5146.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[2], i5146.limitX)
  i5146.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[3], i5146.limitY)
  i5146.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[4], i5146.limitZ)
  i5146.dampen = i5147[5]
  i5146.separateAxes = !!i5147[6]
  i5146.space = i5147[7]
  i5146.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[8], i5146.drag)
  i5146.multiplyDragByParticleSize = !!i5147[9]
  i5146.multiplyDragByParticleVelocity = !!i5147[10]
  return i5146
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i5148 = root || request.c( 'StarExploreFX' )
  var i5149 = data
  request.r(i5149[0], i5149[1], 0, i5148, 'tf')
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5151 = data
  i5150.pivot = new pc.Vec2( i5151[0], i5151[1] )
  i5150.anchorMin = new pc.Vec2( i5151[2], i5151[3] )
  i5150.anchorMax = new pc.Vec2( i5151[4], i5151[5] )
  i5150.sizeDelta = new pc.Vec2( i5151[6], i5151[7] )
  i5150.anchoredPosition3D = new pc.Vec3( i5151[8], i5151[9], i5151[10] )
  i5150.rotation = new pc.Quat(i5151[11], i5151[12], i5151[13], i5151[14])
  i5150.scale = new pc.Vec3( i5151[15], i5151[16], i5151[17] )
  return i5150
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i5152 = root || request.c( 'ClockTimer' )
  var i5153 = data
  request.r(i5153[0], i5153[1], 0, i5152, 'fillImage')
  request.r(i5153[2], i5153[3], 0, i5152, 'tf')
  i5152.spawnZoomDuration = i5153[4]
  i5152.despawnZoomDuration = i5153[5]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5155 = data
  i5154.cullTransparentMesh = !!i5155[0]
  return i5154
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5156 = root || request.c( 'UnityEngine.UI.Image' )
  var i5157 = data
  request.r(i5157[0], i5157[1], 0, i5156, 'm_Sprite')
  i5156.m_Type = i5157[2]
  i5156.m_PreserveAspect = !!i5157[3]
  i5156.m_FillCenter = !!i5157[4]
  i5156.m_FillMethod = i5157[5]
  i5156.m_FillAmount = i5157[6]
  i5156.m_FillClockwise = !!i5157[7]
  i5156.m_FillOrigin = i5157[8]
  i5156.m_UseSpriteMesh = !!i5157[9]
  i5156.m_PixelsPerUnitMultiplier = i5157[10]
  request.r(i5157[11], i5157[12], 0, i5156, 'm_Material')
  i5156.m_Maskable = !!i5157[13]
  i5156.m_Color = new pc.Color(i5157[14], i5157[15], i5157[16], i5157[17])
  i5156.m_RaycastTarget = !!i5157[18]
  i5156.m_RaycastPadding = new pc.Vec4( i5157[19], i5157[20], i5157[21], i5157[22] )
  return i5156
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i5158 = root || request.c( 'WaterSplash' )
  var i5159 = data
  request.r(i5159[0], i5159[1], 0, i5158, 'tf')
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5161 = data
  i5160.center = new pc.Vec3( i5161[0], i5161[1], i5161[2] )
  i5160.radius = i5161[3]
  i5160.enabled = !!i5161[4]
  i5160.isTrigger = !!i5161[5]
  request.r(i5161[6], i5161[7], 0, i5160, 'material')
  return i5160
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i5162 = root || request.c( 'ItemDraggable' )
  var i5163 = data
  i5162.isDraggable = !!i5163[0]
  request.r(i5163[1], i5163[2], 0, i5162, 'returnTransform')
  i5162.setParentToReturnTransform = !!i5163[3]
  i5162.returnToStartOnDragFailed = !!i5163[4]
  i5162.returnToExactReturnTransformPosition = !!i5163[5]
  i5162.targetItemType = i5163[6]
  request.r(i5163[7], i5163[8], 0, i5162, 'item')
  i5162.checkState = !!i5163[9]
  request.r(i5163[10], i5163[11], 0, i5162, 'shadowObject')
  i5162.playReturnToStartFinishSound = !!i5163[12]
  i5162.returnToStartFinishFxType = i5163[13]
  i5162.spawnBreakHeartOnDropFail = !!i5163[14]
  i5162.playBeginDragSound = !!i5163[15]
  i5162.beginDragFxType = i5163[16]
  i5162.liftOffset = i5163[17]
  i5162.dragScaleMultiplier = i5163[18]
  i5162.dragScaleDuration = i5163[19]
  i5162.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i5163[20], i5162.onBeginDrag)
  i5162.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i5163[21], i5162.onDropSuccess)
  i5162.onDropFail = request.d('UnityEngine.Events.UnityEvent', i5163[22], i5162.onDropFail)
  i5162.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i5163[23], i5162.onReturnToStartComplete)
  return i5162
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5164 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5165 = data
  i5164.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5165[0], i5164.m_PersistentCalls)
  return i5164
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5166 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5167 = data
  var i5169 = i5167[0]
  var i5168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5169.length; i += 1) {
    i5168.add(request.d('UnityEngine.Events.PersistentCall', i5169[i + 0]));
  }
  i5166.m_Calls = i5168
  return i5166
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5172 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5173 = data
  request.r(i5173[0], i5173[1], 0, i5172, 'm_Target')
  i5172.m_TargetAssemblyTypeName = i5173[2]
  i5172.m_MethodName = i5173[3]
  i5172.m_Mode = i5173[4]
  i5172.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5173[5], i5172.m_Arguments)
  i5172.m_CallState = i5173[6]
  return i5172
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5174 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5175 = data
  request.r(i5175[0], i5175[1], 0, i5174, 'm_ObjectArgument')
  i5174.m_ObjectArgumentAssemblyTypeName = i5175[2]
  i5174.m_IntArgument = i5175[3]
  i5174.m_FloatArgument = i5175[4]
  i5174.m_StringArgument = i5175[5]
  i5174.m_BoolArgument = !!i5175[6]
  return i5174
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i5176 = root || request.c( 'ItemMoveToTarget' )
  var i5177 = data
  request.r(i5177[0], i5177[1], 0, i5176, 'defaultTarget')
  i5176.duration = i5177[2]
  i5176.useAnimationCurve = !!i5177[3]
  i5176.moveCurve = new pc.AnimationCurve( { keys_flow: i5177[4] } )
  i5176.easeType = i5177[5]
  i5176.moveType = i5177[6]
  i5176.jumpPower = i5177[7]
  i5176.numJumps = i5177[8]
  i5176.rotate360DuringJump = !!i5177[9]
  i5176.flipRotate = !!i5177[10]
  i5176.angleRotate = i5177[11]
  i5176.scaleOnMove = !!i5177[12]
  i5176.endScaleMultiplier = i5177[13]
  i5176.setParentToTarget = !!i5177[14]
  i5176.onComplete = request.d('UnityEngine.Events.UnityEvent', i5177[15], i5176.onComplete)
  i5176.lockInputWhileMoving = !!i5177[16]
  i5176.resetParentBeforeMove = !!i5177[17]
  return i5176
}

Deserializers["Paper"] = function (request, data, root) {
  var i5178 = root || request.c( 'Paper' )
  var i5179 = data
  i5178.isUse = !!i5179[0]
  request.r(i5179[1], i5179[2], 0, i5178, 'paper')
  request.r(i5179[3], i5179[4], 0, i5178, 'paperTrash')
  request.r(i5179[5], i5179[6], 0, i5178, 'itemDragRaycastTarget')
  request.r(i5179[7], i5179[8], 0, i5178, 'curentCollider')
  i5178.isDone = !!i5179[9]
  i5178.onProcess = !!i5179[10]
  i5178.requireMatchingTargetTypeForHandTut = !!i5179[11]
  request.r(i5179[12], i5179[13], 0, i5178, 'itemDraggable')
  request.r(i5179[14], i5179[15], 0, i5178, 'itemClickable')
  request.r(i5179[16], i5179[17], 0, i5178, 'itemStirring')
  request.r(i5179[18], i5179[19], 0, i5178, 'itemKnifeSpriteMaskCutter')
  request.r(i5179[20], i5179[21], 0, i5178, 'itemSpriteMaskPainter')
  request.r(i5179[22], i5179[23], 0, i5178, 'itemDragSpriteMaskPainter')
  request.r(i5179[24], i5179[25], 0, i5178, 'itemMoveToTarget')
  request.r(i5179[26], i5179[27], 0, i5178, 'animator')
  i5178.itemType = i5179[28]
  request.r(i5179[29], i5179[30], 0, i5178, 'spriteRenderer')
  i5178.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5179[31], i5178.onKnifeIn)
  request.r(i5179[32], i5179[33], 0, i5178, 'knifePos')
  i5178.heartEffectScale = i5179[34]
  i5178.breakHeartEffectScale = i5179[35]
  i5178.blinkEffectScale = i5179[36]
  i5178.mergeEffectScale = i5179[37]
  i5178.playMoveToTargetFinishSound = !!i5179[38]
  i5178.moveToTargetFinishFxType = i5179[39]
  i5178.fxSpawnZPos = i5179[40]
  request.r(i5179[41], i5179[42], 0, i5178, 'tf')
  return i5178
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i5180 = root || request.c( 'ItemDragRaycastTarget' )
  var i5181 = data
  i5180.targetToFind = i5181[0]
  i5180.targetItemTypeWhenHit = i5181[1]
  i5180.targetItemTypeOnDropFail = i5181[2]
  request.r(i5181[3], i5181[4], 0, i5180, 'raycastPoint')
  i5180.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5181[5] )
  i5180.rayDistance = i5181[6]
  i5180.updateMoveDefaultTarget = !!i5181[7]
  i5180.invokeOnlyWhenTargetChanged = !!i5181[8]
  i5180.targetChangeEnabled = !!i5181[9]
  i5180.restoreTargetOnDropFail = !!i5181[10]
  i5180.resetCurrentTargetOnNoHit = !!i5181[11]
  i5180.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i5181[12], i5180.onTargetFound)
  i5180.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i5181[13], i5180.onTargetFoundWithItem)
  return i5180
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i5182 = root || request.c( 'ItemRaycastTargetEvent' )
  var i5183 = data
  i5182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5183[0], i5182.m_PersistentCalls)
  return i5182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5185 = data
  request.r(i5185[0], i5185[1], 0, i5184, 'animatorController')
  request.r(i5185[2], i5185[3], 0, i5184, 'avatar')
  i5184.updateMode = i5185[4]
  i5184.hasTransformHierarchy = !!i5185[5]
  i5184.applyRootMotion = !!i5185[6]
  var i5187 = i5185[7]
  var i5186 = []
  for(var i = 0; i < i5187.length; i += 2) {
  request.r(i5187[i + 0], i5187[i + 1], 2, i5186, '')
  }
  i5184.humanBones = i5186
  i5184.enabled = !!i5185[8]
  return i5184
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i5190 = root || request.c( 'ItemSound' )
  var i5191 = data
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5193 = data
  i5192.name = i5193[0]
  i5192.index = i5193[1]
  i5192.startup = !!i5193[2]
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5195 = data
  i5194.planeDistance = i5195[0]
  i5194.referencePixelsPerUnit = i5195[1]
  i5194.isFallbackOverlay = !!i5195[2]
  i5194.renderMode = i5195[3]
  i5194.renderOrder = i5195[4]
  i5194.sortingLayerName = i5195[5]
  i5194.sortingOrder = i5195[6]
  i5194.scaleFactor = i5195[7]
  request.r(i5195[8], i5195[9], 0, i5194, 'worldCamera')
  i5194.overrideSorting = !!i5195[10]
  i5194.pixelPerfect = !!i5195[11]
  i5194.targetDisplay = i5195[12]
  i5194.overridePixelPerfect = !!i5195[13]
  i5194.enabled = !!i5195[14]
  return i5194
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5196 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5197 = data
  i5196.m_UiScaleMode = i5197[0]
  i5196.m_ReferencePixelsPerUnit = i5197[1]
  i5196.m_ScaleFactor = i5197[2]
  i5196.m_ReferenceResolution = new pc.Vec2( i5197[3], i5197[4] )
  i5196.m_ScreenMatchMode = i5197[5]
  i5196.m_MatchWidthOrHeight = i5197[6]
  i5196.m_PhysicalUnit = i5197[7]
  i5196.m_FallbackScreenDPI = i5197[8]
  i5196.m_DefaultSpriteDPI = i5197[9]
  i5196.m_DynamicPixelsPerUnit = i5197[10]
  i5196.m_PresetInfoIsWorld = !!i5197[11]
  return i5196
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5198 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5199 = data
  i5198.m_IgnoreReversedGraphics = !!i5199[0]
  i5198.m_BlockingObjects = i5199[1]
  i5198.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5199[2] )
  return i5198
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5200 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5201 = data
  i5200.m_hasFontAssetChanged = !!i5201[0]
  request.r(i5201[1], i5201[2], 0, i5200, 'm_baseMaterial')
  i5200.m_maskOffset = new pc.Vec4( i5201[3], i5201[4], i5201[5], i5201[6] )
  i5200.m_text = i5201[7]
  i5200.m_isRightToLeft = !!i5201[8]
  request.r(i5201[9], i5201[10], 0, i5200, 'm_fontAsset')
  request.r(i5201[11], i5201[12], 0, i5200, 'm_sharedMaterial')
  var i5203 = i5201[13]
  var i5202 = []
  for(var i = 0; i < i5203.length; i += 2) {
  request.r(i5203[i + 0], i5203[i + 1], 2, i5202, '')
  }
  i5200.m_fontSharedMaterials = i5202
  request.r(i5201[14], i5201[15], 0, i5200, 'm_fontMaterial')
  var i5205 = i5201[16]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 2) {
  request.r(i5205[i + 0], i5205[i + 1], 2, i5204, '')
  }
  i5200.m_fontMaterials = i5204
  i5200.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5201[17], i5201[18], i5201[19], i5201[20])
  i5200.m_fontColor = new pc.Color(i5201[21], i5201[22], i5201[23], i5201[24])
  i5200.m_enableVertexGradient = !!i5201[25]
  i5200.m_colorMode = i5201[26]
  i5200.m_fontColorGradient = request.d('TMPro.VertexGradient', i5201[27], i5200.m_fontColorGradient)
  request.r(i5201[28], i5201[29], 0, i5200, 'm_fontColorGradientPreset')
  request.r(i5201[30], i5201[31], 0, i5200, 'm_spriteAsset')
  i5200.m_tintAllSprites = !!i5201[32]
  request.r(i5201[33], i5201[34], 0, i5200, 'm_StyleSheet')
  i5200.m_TextStyleHashCode = i5201[35]
  i5200.m_overrideHtmlColors = !!i5201[36]
  i5200.m_faceColor = UnityEngine.Color32.ConstructColor(i5201[37], i5201[38], i5201[39], i5201[40])
  i5200.m_fontSize = i5201[41]
  i5200.m_fontSizeBase = i5201[42]
  i5200.m_fontWeight = i5201[43]
  i5200.m_enableAutoSizing = !!i5201[44]
  i5200.m_fontSizeMin = i5201[45]
  i5200.m_fontSizeMax = i5201[46]
  i5200.m_fontStyle = i5201[47]
  i5200.m_HorizontalAlignment = i5201[48]
  i5200.m_VerticalAlignment = i5201[49]
  i5200.m_textAlignment = i5201[50]
  i5200.m_characterSpacing = i5201[51]
  i5200.m_wordSpacing = i5201[52]
  i5200.m_lineSpacing = i5201[53]
  i5200.m_lineSpacingMax = i5201[54]
  i5200.m_paragraphSpacing = i5201[55]
  i5200.m_charWidthMaxAdj = i5201[56]
  i5200.m_TextWrappingMode = i5201[57]
  i5200.m_wordWrappingRatios = i5201[58]
  i5200.m_overflowMode = i5201[59]
  request.r(i5201[60], i5201[61], 0, i5200, 'm_linkedTextComponent')
  request.r(i5201[62], i5201[63], 0, i5200, 'parentLinkedComponent')
  i5200.m_enableKerning = !!i5201[64]
  var i5207 = i5201[65]
  var i5206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.add(i5207[i + 0]);
  }
  i5200.m_ActiveFontFeatures = i5206
  i5200.m_enableExtraPadding = !!i5201[66]
  i5200.checkPaddingRequired = !!i5201[67]
  i5200.m_isRichText = !!i5201[68]
  i5200.m_parseCtrlCharacters = !!i5201[69]
  i5200.m_isOrthographic = !!i5201[70]
  i5200.m_isCullingEnabled = !!i5201[71]
  i5200.m_horizontalMapping = i5201[72]
  i5200.m_verticalMapping = i5201[73]
  i5200.m_uvLineOffset = i5201[74]
  i5200.m_geometrySortingOrder = i5201[75]
  i5200.m_IsTextObjectScaleStatic = !!i5201[76]
  i5200.m_VertexBufferAutoSizeReduction = !!i5201[77]
  i5200.m_useMaxVisibleDescender = !!i5201[78]
  i5200.m_pageToDisplay = i5201[79]
  i5200.m_margin = new pc.Vec4( i5201[80], i5201[81], i5201[82], i5201[83] )
  i5200.m_isUsingLegacyAnimationComponent = !!i5201[84]
  i5200.m_isVolumetricText = !!i5201[85]
  request.r(i5201[86], i5201[87], 0, i5200, 'm_Material')
  i5200.m_EmojiFallbackSupport = !!i5201[88]
  i5200.m_Maskable = !!i5201[89]
  i5200.m_Color = new pc.Color(i5201[90], i5201[91], i5201[92], i5201[93])
  i5200.m_RaycastTarget = !!i5201[94]
  i5200.m_RaycastPadding = new pc.Vec4( i5201[95], i5201[96], i5201[97], i5201[98] )
  return i5200
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5208 = root || request.c( 'TMPro.VertexGradient' )
  var i5209 = data
  i5208.topLeft = new pc.Color(i5209[0], i5209[1], i5209[2], i5209[3])
  i5208.topRight = new pc.Color(i5209[4], i5209[5], i5209[6], i5209[7])
  i5208.bottomLeft = new pc.Color(i5209[8], i5209[9], i5209[10], i5209[11])
  i5208.bottomRight = new pc.Color(i5209[12], i5209[13], i5209[14], i5209[15])
  return i5208
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5212 = root || request.c( 'UnityEngine.UI.Button' )
  var i5213 = data
  i5212.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5213[0], i5212.m_OnClick)
  i5212.m_Navigation = request.d('UnityEngine.UI.Navigation', i5213[1], i5212.m_Navigation)
  i5212.m_Transition = i5213[2]
  i5212.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5213[3], i5212.m_Colors)
  i5212.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5213[4], i5212.m_SpriteState)
  i5212.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5213[5], i5212.m_AnimationTriggers)
  i5212.m_Interactable = !!i5213[6]
  request.r(i5213[7], i5213[8], 0, i5212, 'm_TargetGraphic')
  return i5212
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5214 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5215 = data
  i5214.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5215[0], i5214.m_PersistentCalls)
  return i5214
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5216 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5217 = data
  i5216.m_Mode = i5217[0]
  i5216.m_WrapAround = !!i5217[1]
  request.r(i5217[2], i5217[3], 0, i5216, 'm_SelectOnUp')
  request.r(i5217[4], i5217[5], 0, i5216, 'm_SelectOnDown')
  request.r(i5217[6], i5217[7], 0, i5216, 'm_SelectOnLeft')
  request.r(i5217[8], i5217[9], 0, i5216, 'm_SelectOnRight')
  return i5216
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5219 = data
  i5218.m_NormalColor = new pc.Color(i5219[0], i5219[1], i5219[2], i5219[3])
  i5218.m_HighlightedColor = new pc.Color(i5219[4], i5219[5], i5219[6], i5219[7])
  i5218.m_PressedColor = new pc.Color(i5219[8], i5219[9], i5219[10], i5219[11])
  i5218.m_SelectedColor = new pc.Color(i5219[12], i5219[13], i5219[14], i5219[15])
  i5218.m_DisabledColor = new pc.Color(i5219[16], i5219[17], i5219[18], i5219[19])
  i5218.m_ColorMultiplier = i5219[20]
  i5218.m_FadeDuration = i5219[21]
  return i5218
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5220 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5221 = data
  request.r(i5221[0], i5221[1], 0, i5220, 'm_HighlightedSprite')
  request.r(i5221[2], i5221[3], 0, i5220, 'm_PressedSprite')
  request.r(i5221[4], i5221[5], 0, i5220, 'm_SelectedSprite')
  request.r(i5221[6], i5221[7], 0, i5220, 'm_DisabledSprite')
  return i5220
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5222 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5223 = data
  i5222.m_NormalTrigger = i5223[0]
  i5222.m_HighlightedTrigger = i5223[1]
  i5222.m_PressedTrigger = i5223[2]
  i5222.m_SelectedTrigger = i5223[3]
  i5222.m_DisabledTrigger = i5223[4]
  return i5222
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5224 = root || request.c( 'Ply_Pool' )
  var i5225 = data
  var i5227 = i5225[0]
  var i5226 = []
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.push( request.d('Ply_Pool+PoolAmount', i5227[i + 0]) );
  }
  i5224.poolAmounts = i5226
  request.r(i5225[1], i5225[2], 0, i5224, 'poolHolder')
  return i5224
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5230 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5231 = data
  i5230.type = i5231[0]
  i5230.amount = i5231[1]
  request.r(i5231[2], i5231[3], 0, i5230, 'gameUnit')
  return i5230
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5232 = root || request.c( 'Ply_SoundManager' )
  var i5233 = data
  var i5235 = i5233[0]
  var i5234 = []
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.push( request.d('Ply_SoundManager+FxAudio', i5235[i + 0]) );
  }
  i5232.fxAudios = i5234
  var i5237 = i5233[1]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 2) {
  request.r(i5237[i + 0], i5237[i + 1], 2, i5236, '')
  }
  i5232.audioClips = i5236
  request.r(i5233[2], i5233[3], 0, i5232, 'sound')
  return i5232
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i5240 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i5241 = data
  i5240.fxType = i5241[0]
  request.r(i5241[1], i5241[2], 0, i5240, 'audioClip')
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, 'clip')
  request.r(i5245[2], i5245[3], 0, i5244, 'outputAudioMixerGroup')
  i5244.playOnAwake = !!i5245[4]
  i5244.loop = !!i5245[5]
  i5244.time = i5245[6]
  i5244.volume = i5245[7]
  i5244.pitch = i5245[8]
  i5244.enabled = !!i5245[9]
  return i5244
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5246 = root || request.c( 'GameManager' )
  var i5247 = data
  i5246.isPlaying = !!i5247[0]
  i5246.isTutorial = !!i5247[1]
  i5246.isGotoStore = !!i5247[2]
  i5246.isLoseGame = !!i5247[3]
  i5246.countMove = i5247[4]
  i5246.currentLayer = i5247[5]
  request.r(i5247[6], i5247[7], 0, i5246, 'trashCan')
  request.r(i5247[8], i5247[9], 0, i5246, 'step1')
  request.r(i5247[10], i5247[11], 0, i5246, 'paperBox')
  return i5246
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5248 = root || request.c( 'UIManager' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'winUI')
  request.r(i5249[2], i5249[3], 0, i5248, 'loseUI')
  request.r(i5249[4], i5249[5], 0, i5248, 'tutorial')
  request.r(i5249[6], i5249[7], 0, i5248, 'verticalUI')
  request.r(i5249[8], i5249[9], 0, i5248, 'horizontalUI')
  request.r(i5249[10], i5249[11], 0, i5248, 'downloadBtn')
  request.r(i5249[12], i5249[13], 0, i5248, 'horizontalDownloadBtn')
  request.r(i5249[14], i5249[15], 0, i5248, 'textAnim')
  i5248.isGoogleBuild = !!i5249[16]
  i5248.screenWidth = i5249[17]
  i5248.screenHeight = i5249[18]
  i5248.scaleHeightOnWidth = i5249[19]
  i5248.isVertical = !!i5249[20]
  i5248.isScreenVertical = !!i5249[21]
  request.r(i5249[22], i5249[23], 0, i5248, 'cam')
  i5248.verticalUIHeightOnWidthRatio = i5249[24]
  i5248.scaleCameraOnValidate = !!i5249[25]
  i5248.screenVerticalHeightOnWidthRatio = i5249[26]
  i5248.useContinuousScaling = !!i5249[27]
  i5248.baseOrthographicSize = i5249[28]
  i5248.baseAspect = i5249[29]
  i5248.landscapeSizeRatio = i5249[30]
  i5248.defaultPortraitSizeRatio = i5249[31]
  var i5251 = i5249[32]
  var i5250 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.add(request.d('ScreenScaleStep', i5251[i + 0]));
  }
  i5248.discreteScaleSteps = i5250
  i5248.usePerspectiveCamera = !!i5249[33]
  request.r(i5249[34], i5249[35], 0, i5248, 'perspectiveFocus')
  i5248.perspectiveFocusDistance = i5249[36]
  i5248.perspectivePadding = i5249[37]
  i5248.fitRendererBounds = !!i5249[38]
  request.r(i5249[39], i5249[40], 0, i5248, 'boundsRoot')
  var i5253 = i5249[41]
  var i5252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5253.length; i += 2) {
  request.r(i5253[i + 0], i5253[i + 1], 1, i5252, '')
  }
  i5248.boundsRenderers = i5252
  return i5248
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5256 = root || request.c( 'ScreenScaleStep' )
  var i5257 = data
  i5256.heightOnWidthRatio = i5257[0]
  i5256.orthographicSize = i5257[1]
  return i5256
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5260 = root || request.c( 'InputManager' )
  var i5261 = data
  i5260.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5261[0] )
  i5260.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5261[1] )
  i5260.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5261[2] )
  i5260.isDragging = !!i5261[3]
  return i5260
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i5262 = root || request.c( 'HandTutManager' )
  var i5263 = data
  var i5265 = i5263[0]
  var i5264 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5265.length; i += 2) {
  request.r(i5265[i + 0], i5265[i + 1], 1, i5264, '')
  }
  i5262.items = i5264
  request.r(i5263[1], i5263[2], 0, i5262, 'knife')
  request.r(i5263[3], i5263[4], 0, i5262, 'knife2')
  request.r(i5263[5], i5263[6], 0, i5262, 'handTutObject')
  request.r(i5263[7], i5263[8], 0, i5262, 'tapToCookObject')
  request.r(i5263[9], i5263[10], 0, i5262, 'oilItem')
  request.r(i5263[11], i5263[12], 0, i5262, 'stoveToggleEvent')
  request.r(i5263[13], i5263[14], 0, i5262, 'waterToggleEvent')
  request.r(i5263[15], i5263[16], 0, i5262, 'sinkBlock')
  var i5267 = i5263[17]
  var i5266 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i5267.length; i += 2) {
  request.r(i5267[i + 0], i5267[i + 1], 1, i5266, '')
  }
  i5262.itemsInWater = i5266
  i5262.noDelayItemCount = i5263[18]
  i5262.breakHeartNoDelayThreshold = i5263[19]
  i5262.shortIdleDelay = i5263[20]
  i5262.maxHandTutShowCount = i5263[21]
  i5262.showSinkWaterTutorialOnStart = !!i5263[22]
  i5262.waitForBowlIntro = !!i5263[23]
  i5262.idleDelay = i5263[24]
  i5262.firstHandTutDelay = i5263[25]
  i5262.phaseHandTutDelay = i5263[26]
  i5262.moveDuration = i5263[27]
  i5262.dragFadeDuration = i5263[28]
  i5262.clickScaleDuration = i5263[29]
  i5262.waitAtEndDuration = i5263[30]
  i5262.handZPosition = i5263[31]
  i5262.clickScaleMultiplier = i5263[32]
  i5262.moveEase = i5263[33]
  return i5262
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i5272 = root || request.c( 'SortChildByZPos' )
  var i5273 = data
  request.r(i5273[0], i5273[1], 0, i5272, 'transformToSort')
  var i5275 = i5273[2]
  var i5274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5275.length; i += 2) {
  request.r(i5275[i + 0], i5275[i + 1], 1, i5274, '')
  }
  i5272.childrenToSort = i5274
  i5272.zOffset = i5273[3]
  i5272.baseZ = i5273[4]
  return i5272
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i5278 = root || request.c( 'PhaseManager' )
  var i5279 = data
  var i5281 = i5279[0]
  var i5280 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.add(request.d('PhaseData', i5281[i + 0]));
  }
  i5278.phases = i5280
  i5278.transitionType = i5279[1]
  i5278.transitionDuration = i5279[2]
  i5278.delayBeforeNextPhase = i5279[3]
  i5278.offScreenLeftX = i5279[4]
  i5278.offScreenRightX = i5279[5]
  i5278.offScreenBottomY = i5279[6]
  i5278.offScreenTopY = i5279[7]
  i5278.centerScreenX = i5279[8]
  request.r(i5279[9], i5279[10], 0, i5278, 'phaseTransitionObject')
  i5278.phaseTransitionObjectDuration = i5279[11]
  i5278.currentPhaseIndex = i5279[12]
  i5278.currentStepCount = i5279[13]
  i5278.isECPopup = !!i5279[14]
  return i5278
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i5284 = root || request.c( 'PhaseData' )
  var i5285 = data
  request.r(i5285[0], i5285[1], 0, i5284, 'phaseObject')
  i5284.totalSteps = i5285[2]
  i5284.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i5285[3], i5284.onPhaseReady)
  return i5284
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i5286 = root || request.c( 'ItemTypeDoneManager' )
  var i5287 = data
  var i5289 = i5287[0]
  var i5288 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i5289[i + 0]));
  }
  i5286.itemTypeGroups = i5288
  return i5286
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i5292 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i5293 = data
  i5292.itemType = i5293[0]
  var i5295 = i5293[1]
  var i5294 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5295.length; i += 2) {
  request.r(i5295[i + 0], i5295[i + 1], 1, i5294, '')
  }
  i5292.items = i5294
  return i5292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5297 = data
  i5296.aspect = i5297[0]
  i5296.orthographic = !!i5297[1]
  i5296.orthographicSize = i5297[2]
  i5296.backgroundColor = new pc.Color(i5297[3], i5297[4], i5297[5], i5297[6])
  i5296.nearClipPlane = i5297[7]
  i5296.farClipPlane = i5297[8]
  i5296.fieldOfView = i5297[9]
  i5296.depth = i5297[10]
  i5296.clearFlags = i5297[11]
  i5296.cullingMask = i5297[12]
  i5296.rect = i5297[13]
  request.r(i5297[14], i5297[15], 0, i5296, 'targetTexture')
  i5296.usePhysicalProperties = !!i5297[16]
  i5296.focalLength = i5297[17]
  i5296.sensorSize = new pc.Vec2( i5297[18], i5297[19] )
  i5296.lensShift = new pc.Vec2( i5297[20], i5297[21] )
  i5296.gateFit = i5297[22]
  i5296.commandBufferCount = i5297[23]
  i5296.cameraType = i5297[24]
  i5296.enabled = !!i5297[25]
  return i5296
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5298 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5299 = data
  request.r(i5299[0], i5299[1], 0, i5298, 'm_FirstSelected')
  i5298.m_sendNavigationEvents = !!i5299[2]
  i5298.m_DragThreshold = i5299[3]
  return i5298
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5300 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5301 = data
  i5300.m_HorizontalAxis = i5301[0]
  i5300.m_VerticalAxis = i5301[1]
  i5300.m_SubmitButton = i5301[2]
  i5300.m_CancelButton = i5301[3]
  i5300.m_InputActionsPerSecond = i5301[4]
  i5300.m_RepeatDelay = i5301[5]
  i5300.m_ForceModuleActive = !!i5301[6]
  i5300.m_SendPointerHoverToParent = !!i5301[7]
  return i5300
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i5302 = root || request.c( 'Ply_ToggleEvent' )
  var i5303 = data
  i5302.isOn = !!i5303[0]
  i5302.applyStateOnEnable = !!i5303[1]
  i5302.applyStateOnClick = !!i5303[2]
  request.r(i5303[3], i5303[4], 0, i5302, 'targetObject')
  i5302.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i5303[5], i5302.onTurnOn)
  i5302.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i5303[6], i5302.onTurnOff)
  return i5302
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i5304 = root || request.c( 'SinkBlock' )
  var i5305 = data
  request.r(i5305[0], i5305[1], 0, i5304, 'sink')
  i5304.startsInside = !!i5305[2]
  i5304.insideTargetType = i5305[3]
  request.r(i5305[4], i5305[5], 0, i5304, 'insideDefaultTarget')
  i5304.outsideTargetType = i5305[6]
  request.r(i5305[7], i5305[8], 0, i5304, 'outsideDefaultTarget')
  i5304.isDone = !!i5305[9]
  i5304.onProcess = !!i5305[10]
  i5304.requireMatchingTargetTypeForHandTut = !!i5305[11]
  request.r(i5305[12], i5305[13], 0, i5304, 'itemDraggable')
  request.r(i5305[14], i5305[15], 0, i5304, 'itemClickable')
  request.r(i5305[16], i5305[17], 0, i5304, 'itemStirring')
  request.r(i5305[18], i5305[19], 0, i5304, 'itemKnifeSpriteMaskCutter')
  request.r(i5305[20], i5305[21], 0, i5304, 'itemSpriteMaskPainter')
  request.r(i5305[22], i5305[23], 0, i5304, 'itemDragSpriteMaskPainter')
  request.r(i5305[24], i5305[25], 0, i5304, 'itemMoveToTarget')
  request.r(i5305[26], i5305[27], 0, i5304, 'animator')
  i5304.itemType = i5305[28]
  request.r(i5305[29], i5305[30], 0, i5304, 'spriteRenderer')
  i5304.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5305[31], i5304.onKnifeIn)
  request.r(i5305[32], i5305[33], 0, i5304, 'knifePos')
  i5304.heartEffectScale = i5305[34]
  i5304.breakHeartEffectScale = i5305[35]
  i5304.blinkEffectScale = i5305[36]
  i5304.mergeEffectScale = i5305[37]
  i5304.playMoveToTargetFinishSound = !!i5305[38]
  i5304.moveToTargetFinishFxType = i5305[39]
  i5304.fxSpawnZPos = i5305[40]
  request.r(i5305[41], i5305[42], 0, i5304, 'tf')
  return i5304
}

Deserializers["Sink"] = function (request, data, root) {
  var i5306 = root || request.c( 'Sink' )
  var i5307 = data
  i5306.isClose = !!i5307[0]
  i5306.isWaterDrop = !!i5307[1]
  i5306.isWaterIn = !!i5307[2]
  request.r(i5307[3], i5307[4], 0, i5306, 'waterSplashPos')
  request.r(i5307[5], i5307[6], 0, i5306, 'faucetAnimator')
  request.r(i5307[7], i5307[8], 0, i5306, 'basinAnimator')
  request.r(i5307[9], i5307[10], 0, i5306, 'waterDrop')
  request.r(i5307[11], i5307[12], 0, i5306, 'waterIn')
  request.r(i5307[13], i5307[14], 0, i5306, 'basinWaterRenderer')
  i5306.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i5307[15], i5307[16], i5307[17], i5307[18])
  i5306.fullWaterRect = UnityEngine.Rect.MinMaxRect(i5307[19], i5307[20], i5307[21], i5307[22])
  i5306.waterRiseDuration = i5307[23]
  i5306.waterFallDuration = i5307[24]
  i5306.waterRiseEase = i5307[25]
  i5306.waterFallEase = i5307[26]
  i5306.drawWaterRects = !!i5307[27]
  i5306.emptyRectColor = new pc.Color(i5307[28], i5307[29], i5307[30], i5307[31])
  i5306.fullRectColor = new pc.Color(i5307[32], i5307[33], i5307[34], i5307[35])
  request.r(i5307[36], i5307[37], 0, i5306, 'waterDropTransform')
  i5306.emptyWaterDropPoint = new pc.Vec3( i5307[38], i5307[39], i5307[40] )
  i5306.fullWaterDropPoint = new pc.Vec3( i5307[41], i5307[42], i5307[43] )
  i5306.drawWaterDropPoints = !!i5307[44]
  i5306.waterDropPointRadius = i5307[45]
  i5306.emptyWaterDropPointColor = new pc.Color(i5307[46], i5307[47], i5307[48], i5307[49])
  i5306.fullWaterDropPointColor = new pc.Color(i5307[50], i5307[51], i5307[52], i5307[53])
  var i5309 = i5307[54]
  var i5308 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i5309.length; i += 2) {
  request.r(i5309[i + 0], i5309[i + 1], 1, i5308, '')
  }
  i5306.inWaterItems = i5308
  i5306.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i5307[55], i5306.onWaterIn)
  i5306.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i5307[56], i5306.onNoWaterIn)
  i5306.isDone = !!i5307[57]
  i5306.onProcess = !!i5307[58]
  i5306.requireMatchingTargetTypeForHandTut = !!i5307[59]
  request.r(i5307[60], i5307[61], 0, i5306, 'itemDraggable')
  request.r(i5307[62], i5307[63], 0, i5306, 'itemClickable')
  request.r(i5307[64], i5307[65], 0, i5306, 'itemStirring')
  request.r(i5307[66], i5307[67], 0, i5306, 'itemKnifeSpriteMaskCutter')
  request.r(i5307[68], i5307[69], 0, i5306, 'itemSpriteMaskPainter')
  request.r(i5307[70], i5307[71], 0, i5306, 'itemDragSpriteMaskPainter')
  request.r(i5307[72], i5307[73], 0, i5306, 'itemMoveToTarget')
  request.r(i5307[74], i5307[75], 0, i5306, 'animator')
  i5306.itemType = i5307[76]
  request.r(i5307[77], i5307[78], 0, i5306, 'spriteRenderer')
  i5306.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5307[79], i5306.onKnifeIn)
  request.r(i5307[80], i5307[81], 0, i5306, 'knifePos')
  i5306.heartEffectScale = i5307[82]
  i5306.breakHeartEffectScale = i5307[83]
  i5306.blinkEffectScale = i5307[84]
  i5306.mergeEffectScale = i5307[85]
  i5306.playMoveToTargetFinishSound = !!i5307[86]
  i5306.moveToTargetFinishFxType = i5307[87]
  i5306.fxSpawnZPos = i5307[88]
  request.r(i5307[89], i5307[90], 0, i5306, 'tf')
  i5306.waterState = i5307[91]
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5311 = data
  i5310.center = new pc.Vec3( i5311[0], i5311[1], i5311[2] )
  i5310.size = new pc.Vec3( i5311[3], i5311[4], i5311[5] )
  i5310.enabled = !!i5311[6]
  i5310.isTrigger = !!i5311[7]
  request.r(i5311[8], i5311[9], 0, i5310, 'material')
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5313 = data
  i5312.frontSortingLayerID = i5313[0]
  i5312.frontSortingOrder = i5313[1]
  i5312.backSortingLayerID = i5313[2]
  i5312.backSortingOrder = i5313[3]
  i5312.alphaCutoff = i5313[4]
  request.r(i5313[5], i5313[6], 0, i5312, 'sprite')
  i5312.tileMode = i5313[7]
  i5312.isCustomRangeActive = !!i5313[8]
  i5312.spriteSortPoint = i5313[9]
  i5312.enabled = !!i5313[10]
  request.r(i5313[11], i5313[12], 0, i5312, 'sharedMaterial')
  var i5315 = i5313[13]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 2) {
  request.r(i5315[i + 0], i5315[i + 1], 2, i5314, '')
  }
  i5312.sharedMaterials = i5314
  i5312.receiveShadows = !!i5313[14]
  i5312.shadowCastingMode = i5313[15]
  i5312.sortingLayerID = i5313[16]
  i5312.sortingOrder = i5313[17]
  i5312.lightmapIndex = i5313[18]
  i5312.lightmapSceneIndex = i5313[19]
  i5312.lightmapScaleOffset = new pc.Vec4( i5313[20], i5313[21], i5313[22], i5313[23] )
  i5312.lightProbeUsage = i5313[24]
  i5312.reflectionProbeUsage = i5313[25]
  return i5312
}

Deserializers["Item"] = function (request, data, root) {
  var i5316 = root || request.c( 'Item' )
  var i5317 = data
  i5316.isDone = !!i5317[0]
  i5316.onProcess = !!i5317[1]
  i5316.requireMatchingTargetTypeForHandTut = !!i5317[2]
  request.r(i5317[3], i5317[4], 0, i5316, 'itemDraggable')
  request.r(i5317[5], i5317[6], 0, i5316, 'itemClickable')
  request.r(i5317[7], i5317[8], 0, i5316, 'itemStirring')
  request.r(i5317[9], i5317[10], 0, i5316, 'itemKnifeSpriteMaskCutter')
  request.r(i5317[11], i5317[12], 0, i5316, 'itemSpriteMaskPainter')
  request.r(i5317[13], i5317[14], 0, i5316, 'itemDragSpriteMaskPainter')
  request.r(i5317[15], i5317[16], 0, i5316, 'itemMoveToTarget')
  request.r(i5317[17], i5317[18], 0, i5316, 'animator')
  i5316.itemType = i5317[19]
  request.r(i5317[20], i5317[21], 0, i5316, 'spriteRenderer')
  i5316.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5317[22], i5316.onKnifeIn)
  request.r(i5317[23], i5317[24], 0, i5316, 'knifePos')
  i5316.heartEffectScale = i5317[25]
  i5316.breakHeartEffectScale = i5317[26]
  i5316.blinkEffectScale = i5317[27]
  i5316.mergeEffectScale = i5317[28]
  i5316.playMoveToTargetFinishSound = !!i5317[29]
  i5316.moveToTargetFinishFxType = i5317[30]
  i5316.fxSpawnZPos = i5317[31]
  request.r(i5317[32], i5317[33], 0, i5316, 'tf')
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5319 = data
  i5318.center = new pc.Vec3( i5319[0], i5319[1], i5319[2] )
  i5318.radius = i5319[3]
  i5318.height = i5319[4]
  i5318.direction = i5319[5]
  i5318.enabled = !!i5319[6]
  i5318.isTrigger = !!i5319[7]
  request.r(i5319[8], i5319[9], 0, i5318, 'material')
  return i5318
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i5320 = root || request.c( 'CuttingBoard' )
  var i5321 = data
  i5320.punchScale = new pc.Vec3( i5321[0], i5321[1], i5321[2] )
  i5320.punchDuration = i5321[3]
  i5320.isDone = !!i5321[4]
  i5320.onProcess = !!i5321[5]
  i5320.requireMatchingTargetTypeForHandTut = !!i5321[6]
  request.r(i5321[7], i5321[8], 0, i5320, 'itemDraggable')
  request.r(i5321[9], i5321[10], 0, i5320, 'itemClickable')
  request.r(i5321[11], i5321[12], 0, i5320, 'itemStirring')
  request.r(i5321[13], i5321[14], 0, i5320, 'itemKnifeSpriteMaskCutter')
  request.r(i5321[15], i5321[16], 0, i5320, 'itemSpriteMaskPainter')
  request.r(i5321[17], i5321[18], 0, i5320, 'itemDragSpriteMaskPainter')
  request.r(i5321[19], i5321[20], 0, i5320, 'itemMoveToTarget')
  request.r(i5321[21], i5321[22], 0, i5320, 'animator')
  i5320.itemType = i5321[23]
  request.r(i5321[24], i5321[25], 0, i5320, 'spriteRenderer')
  i5320.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5321[26], i5320.onKnifeIn)
  request.r(i5321[27], i5321[28], 0, i5320, 'knifePos')
  i5320.heartEffectScale = i5321[29]
  i5320.breakHeartEffectScale = i5321[30]
  i5320.blinkEffectScale = i5321[31]
  i5320.mergeEffectScale = i5321[32]
  i5320.playMoveToTargetFinishSound = !!i5321[33]
  i5320.moveToTargetFinishFxType = i5321[34]
  i5320.fxSpawnZPos = i5321[35]
  request.r(i5321[36], i5321[37], 0, i5320, 'tf')
  return i5320
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i5322 = root || request.c( 'ItemDragChildRotator' )
  var i5323 = data
  request.r(i5323[0], i5323[1], 0, i5322, 'rotateTarget')
  i5322.dragEulerAngles = new pc.Vec3( i5323[2], i5323[3], i5323[4] )
  i5322.useLocalRotation = !!i5323[5]
  i5322.rotateRelative = !!i5323[6]
  i5322.rotateDuration = i5323[7]
  i5322.rotateEase = i5323[8]
  i5322.rotateMode = i5323[9]
  return i5322
}

Deserializers["Knife"] = function (request, data, root) {
  var i5324 = root || request.c( 'Knife' )
  var i5325 = data
  request.r(i5325[0], i5325[1], 0, i5324, 'knifeIdle')
  request.r(i5325[2], i5325[3], 0, i5324, 'knifeOnDrag')
  i5324.knifeOnDragRotationOffset = new pc.Vec3( i5325[4], i5325[5], i5325[6] )
  i5324.knifeOnDragRotateDuration = i5325[7]
  i5324.knifeOnDragRotateEase = i5325[8]
  i5324.isDone = !!i5325[9]
  i5324.onProcess = !!i5325[10]
  i5324.requireMatchingTargetTypeForHandTut = !!i5325[11]
  request.r(i5325[12], i5325[13], 0, i5324, 'itemDraggable')
  request.r(i5325[14], i5325[15], 0, i5324, 'itemClickable')
  request.r(i5325[16], i5325[17], 0, i5324, 'itemStirring')
  request.r(i5325[18], i5325[19], 0, i5324, 'itemKnifeSpriteMaskCutter')
  request.r(i5325[20], i5325[21], 0, i5324, 'itemSpriteMaskPainter')
  request.r(i5325[22], i5325[23], 0, i5324, 'itemDragSpriteMaskPainter')
  request.r(i5325[24], i5325[25], 0, i5324, 'itemMoveToTarget')
  request.r(i5325[26], i5325[27], 0, i5324, 'animator')
  i5324.itemType = i5325[28]
  request.r(i5325[29], i5325[30], 0, i5324, 'spriteRenderer')
  i5324.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5325[31], i5324.onKnifeIn)
  request.r(i5325[32], i5325[33], 0, i5324, 'knifePos')
  i5324.heartEffectScale = i5325[34]
  i5324.breakHeartEffectScale = i5325[35]
  i5324.blinkEffectScale = i5325[36]
  i5324.mergeEffectScale = i5325[37]
  i5324.playMoveToTargetFinishSound = !!i5325[38]
  i5324.moveToTargetFinishFxType = i5325[39]
  i5324.fxSpawnZPos = i5325[40]
  request.r(i5325[41], i5325[42], 0, i5324, 'tf')
  return i5324
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i5326 = root || request.c( 'ItemClickable' )
  var i5327 = data
  i5326.requiredClicks = i5327[0]
  i5326.infiniteClick = !!i5327[1]
  i5326.canClick = !!i5327[2]
  i5326.disableAfterClick = !!i5327[3]
  i5326.onClick = request.d('UnityEngine.Events.UnityEvent', i5327[4], i5326.onClick)
  var i5329 = i5327[5]
  var i5328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.add(request.d('UnityEngine.Events.UnityEvent', i5329[i + 0]));
  }
  i5326.sequentialOnClicks = i5328
  i5326.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i5327[6], i5326.onClickComplete)
  return i5326
}

Deserializers["ItemWithTrash"] = function (request, data, root) {
  var i5332 = root || request.c( 'ItemWithTrash' )
  var i5333 = data
  var i5335 = i5333[0]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 2) {
  request.r(i5335[i + 0], i5335[i + 1], 2, i5334, '')
  }
  i5332.requiredItems = i5334
  request.r(i5333[1], i5333[2], 0, i5332, 'nextItem')
  var i5337 = i5333[3]
  var i5336 = []
  for(var i = 0; i < i5337.length; i += 2) {
  request.r(i5337[i + 0], i5337[i + 1], 2, i5336, '')
  }
  i5332.trashObjects = i5336
  i5332.isTrashItem = !!i5333[4]
  i5332.isDone = !!i5333[5]
  i5332.onProcess = !!i5333[6]
  i5332.requireMatchingTargetTypeForHandTut = !!i5333[7]
  request.r(i5333[8], i5333[9], 0, i5332, 'itemDraggable')
  request.r(i5333[10], i5333[11], 0, i5332, 'itemClickable')
  request.r(i5333[12], i5333[13], 0, i5332, 'itemStirring')
  request.r(i5333[14], i5333[15], 0, i5332, 'itemKnifeSpriteMaskCutter')
  request.r(i5333[16], i5333[17], 0, i5332, 'itemSpriteMaskPainter')
  request.r(i5333[18], i5333[19], 0, i5332, 'itemDragSpriteMaskPainter')
  request.r(i5333[20], i5333[21], 0, i5332, 'itemMoveToTarget')
  request.r(i5333[22], i5333[23], 0, i5332, 'animator')
  i5332.itemType = i5333[24]
  request.r(i5333[25], i5333[26], 0, i5332, 'spriteRenderer')
  i5332.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5333[27], i5332.onKnifeIn)
  request.r(i5333[28], i5333[29], 0, i5332, 'knifePos')
  i5332.heartEffectScale = i5333[30]
  i5332.breakHeartEffectScale = i5333[31]
  i5332.blinkEffectScale = i5333[32]
  i5332.mergeEffectScale = i5333[33]
  i5332.playMoveToTargetFinishSound = !!i5333[34]
  i5332.moveToTargetFinishFxType = i5333[35]
  i5332.fxSpawnZPos = i5333[36]
  request.r(i5333[37], i5333[38], 0, i5332, 'tf')
  return i5332
}

Deserializers["OilFood"] = function (request, data, root) {
  var i5342 = root || request.c( 'OilFood' )
  var i5343 = data
  i5342.isOilOnce = !!i5343[0]
  i5342.isDone = !!i5343[1]
  i5342.onProcess = !!i5343[2]
  i5342.requireMatchingTargetTypeForHandTut = !!i5343[3]
  request.r(i5343[4], i5343[5], 0, i5342, 'itemDraggable')
  request.r(i5343[6], i5343[7], 0, i5342, 'itemClickable')
  request.r(i5343[8], i5343[9], 0, i5342, 'itemStirring')
  request.r(i5343[10], i5343[11], 0, i5342, 'itemKnifeSpriteMaskCutter')
  request.r(i5343[12], i5343[13], 0, i5342, 'itemSpriteMaskPainter')
  request.r(i5343[14], i5343[15], 0, i5342, 'itemDragSpriteMaskPainter')
  request.r(i5343[16], i5343[17], 0, i5342, 'itemMoveToTarget')
  request.r(i5343[18], i5343[19], 0, i5342, 'animator')
  i5342.itemType = i5343[20]
  request.r(i5343[21], i5343[22], 0, i5342, 'spriteRenderer')
  i5342.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5343[23], i5342.onKnifeIn)
  request.r(i5343[24], i5343[25], 0, i5342, 'knifePos')
  i5342.heartEffectScale = i5343[26]
  i5342.breakHeartEffectScale = i5343[27]
  i5342.blinkEffectScale = i5343[28]
  i5342.mergeEffectScale = i5343[29]
  i5342.playMoveToTargetFinishSound = !!i5343[30]
  i5342.moveToTargetFinishFxType = i5343[31]
  i5342.fxSpawnZPos = i5343[32]
  request.r(i5343[33], i5343[34], 0, i5342, 'tf')
  return i5342
}

Deserializers["OilBrush"] = function (request, data, root) {
  var i5344 = root || request.c( 'OilBrush' )
  var i5345 = data
  var i5347 = i5345[0]
  var i5346 = new (System.Collections.Generic.List$1(Bridge.ns('OilFood')))
  for(var i = 0; i < i5347.length; i += 2) {
  request.r(i5347[i + 0], i5347[i + 1], 1, i5346, '')
  }
  i5344.oilFoods = i5346
  i5344.targetToFind = i5345[1]
  i5344.targetItemTypeWhenHit = i5345[2]
  i5344.targetItemTypeOnDropFail = i5345[3]
  request.r(i5345[4], i5345[5], 0, i5344, 'raycastPoint')
  i5344.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5345[6] )
  i5344.rayDistance = i5345[7]
  i5344.updateMoveDefaultTarget = !!i5345[8]
  i5344.invokeOnlyWhenTargetChanged = !!i5345[9]
  i5344.targetChangeEnabled = !!i5345[10]
  i5344.restoreTargetOnDropFail = !!i5345[11]
  i5344.resetCurrentTargetOnNoHit = !!i5345[12]
  i5344.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i5345[13], i5344.onTargetFound)
  i5344.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i5345[14], i5344.onTargetFoundWithItem)
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5351 = data
  i5350.ambientIntensity = i5351[0]
  i5350.reflectionIntensity = i5351[1]
  i5350.ambientMode = i5351[2]
  i5350.ambientLight = new pc.Color(i5351[3], i5351[4], i5351[5], i5351[6])
  i5350.ambientSkyColor = new pc.Color(i5351[7], i5351[8], i5351[9], i5351[10])
  i5350.ambientGroundColor = new pc.Color(i5351[11], i5351[12], i5351[13], i5351[14])
  i5350.ambientEquatorColor = new pc.Color(i5351[15], i5351[16], i5351[17], i5351[18])
  i5350.fogColor = new pc.Color(i5351[19], i5351[20], i5351[21], i5351[22])
  i5350.fogEndDistance = i5351[23]
  i5350.fogStartDistance = i5351[24]
  i5350.fogDensity = i5351[25]
  i5350.fog = !!i5351[26]
  request.r(i5351[27], i5351[28], 0, i5350, 'skybox')
  i5350.fogMode = i5351[29]
  var i5353 = i5351[30]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5353[i + 0]) );
  }
  i5350.lightmaps = i5352
  i5350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5351[31], i5350.lightProbes)
  i5350.lightmapsMode = i5351[32]
  i5350.mixedBakeMode = i5351[33]
  i5350.environmentLightingMode = i5351[34]
  i5350.ambientProbe = new pc.SphericalHarmonicsL2(i5351[35])
  i5350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5351[36])
  i5350.useReferenceAmbientProbe = !!i5351[37]
  request.r(i5351[38], i5351[39], 0, i5350, 'customReflection')
  request.r(i5351[40], i5351[41], 0, i5350, 'defaultReflection')
  i5350.defaultReflectionMode = i5351[42]
  i5350.defaultReflectionResolution = i5351[43]
  i5350.sunLightObjectId = i5351[44]
  i5350.pixelLightCount = i5351[45]
  i5350.defaultReflectionHDR = !!i5351[46]
  i5350.hasLightDataAsset = !!i5351[47]
  i5350.hasManualGenerate = !!i5351[48]
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5357 = data
  request.r(i5357[0], i5357[1], 0, i5356, 'lightmapColor')
  request.r(i5357[2], i5357[3], 0, i5356, 'lightmapDirection')
  request.r(i5357[4], i5357[5], 0, i5356, 'shadowMask')
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5358 = root || new UnityEngine.LightProbes()
  var i5359 = data
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5367 = data
  var i5369 = i5367[0]
  var i5368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5369.length; i += 1) {
    i5368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5369[i + 0]));
  }
  i5366.ShaderCompilationErrors = i5368
  i5366.name = i5367[1]
  i5366.guid = i5367[2]
  var i5371 = i5367[3]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( i5371[i + 0] );
  }
  i5366.shaderDefinedKeywords = i5370
  var i5373 = i5367[4]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5373[i + 0]) );
  }
  i5366.passes = i5372
  var i5375 = i5367[5]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5375[i + 0]) );
  }
  i5366.usePasses = i5374
  var i5377 = i5367[6]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 1) {
    i5376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5377[i + 0]) );
  }
  i5366.defaultParameterValues = i5376
  request.r(i5367[7], i5367[8], 0, i5366, 'unityFallbackShader')
  i5366.readDepth = !!i5367[9]
  i5366.hasDepthOnlyPass = !!i5367[10]
  i5366.isCreatedByShaderGraph = !!i5367[11]
  i5366.disableBatching = !!i5367[12]
  i5366.compiled = !!i5367[13]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5381 = data
  i5380.shaderName = i5381[0]
  i5380.errorMessage = i5381[1]
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5386 = root || new pc.UnityShaderPass()
  var i5387 = data
  i5386.id = i5387[0]
  i5386.subShaderIndex = i5387[1]
  i5386.name = i5387[2]
  i5386.passType = i5387[3]
  i5386.grabPassTextureName = i5387[4]
  i5386.usePass = !!i5387[5]
  i5386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[6], i5386.zTest)
  i5386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[7], i5386.zWrite)
  i5386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[8], i5386.culling)
  i5386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5387[9], i5386.blending)
  i5386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5387[10], i5386.alphaBlending)
  i5386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[11], i5386.colorWriteMask)
  i5386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[12], i5386.offsetUnits)
  i5386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[13], i5386.offsetFactor)
  i5386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[14], i5386.stencilRef)
  i5386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[15], i5386.stencilReadMask)
  i5386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5387[16], i5386.stencilWriteMask)
  i5386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5387[17], i5386.stencilOp)
  i5386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5387[18], i5386.stencilOpFront)
  i5386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5387[19], i5386.stencilOpBack)
  var i5389 = i5387[20]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5389[i + 0]) );
  }
  i5386.tags = i5388
  var i5391 = i5387[21]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( i5391[i + 0] );
  }
  i5386.passDefinedKeywords = i5390
  var i5393 = i5387[22]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5393[i + 0]) );
  }
  i5386.passDefinedKeywordGroups = i5392
  var i5395 = i5387[23]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 1) {
    i5394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5395[i + 0]) );
  }
  i5386.variants = i5394
  var i5397 = i5387[24]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5397[i + 0]) );
  }
  i5386.excludedVariants = i5396
  i5386.hasDepthReader = !!i5387[25]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5399 = data
  i5398.val = i5399[0]
  i5398.name = i5399[1]
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5401 = data
  i5400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5401[0], i5400.src)
  i5400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5401[1], i5400.dst)
  i5400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5401[2], i5400.op)
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5403 = data
  i5402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5403[0], i5402.pass)
  i5402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5403[1], i5402.fail)
  i5402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5403[2], i5402.zFail)
  i5402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5403[3], i5402.comp)
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5407 = data
  i5406.name = i5407[0]
  i5406.value = i5407[1]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5411 = data
  var i5413 = i5411[0]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.push( i5413[i + 0] );
  }
  i5410.keywords = i5412
  i5410.hasDiscard = !!i5411[1]
  return i5410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5417 = data
  i5416.passId = i5417[0]
  i5416.subShaderIndex = i5417[1]
  var i5419 = i5417[2]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.push( i5419[i + 0] );
  }
  i5416.keywords = i5418
  i5416.vertexProgram = i5417[3]
  i5416.fragmentProgram = i5417[4]
  i5416.exportedForWebGl2 = !!i5417[5]
  i5416.readDepth = !!i5417[6]
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5423 = data
  request.r(i5423[0], i5423[1], 0, i5422, 'shader')
  i5422.pass = i5423[2]
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5427 = data
  i5426.name = i5427[0]
  i5426.type = i5427[1]
  i5426.value = new pc.Vec4( i5427[2], i5427[3], i5427[4], i5427[5] )
  i5426.textureValue = i5427[6]
  i5426.shaderPropertyFlag = i5427[7]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5429 = data
  i5428.name = i5429[0]
  request.r(i5429[1], i5429[2], 0, i5428, 'texture')
  i5428.aabb = i5429[3]
  i5428.vertices = i5429[4]
  i5428.triangles = i5429[5]
  i5428.textureRect = UnityEngine.Rect.MinMaxRect(i5429[6], i5429[7], i5429[8], i5429[9])
  i5428.packedRect = UnityEngine.Rect.MinMaxRect(i5429[10], i5429[11], i5429[12], i5429[13])
  i5428.border = new pc.Vec4( i5429[14], i5429[15], i5429[16], i5429[17] )
  i5428.transparency = i5429[18]
  i5428.bounds = i5429[19]
  i5428.pixelsPerUnit = i5429[20]
  i5428.textureWidth = i5429[21]
  i5428.textureHeight = i5429[22]
  i5428.nativeSize = new pc.Vec2( i5429[23], i5429[24] )
  i5428.pivot = new pc.Vec2( i5429[25], i5429[26] )
  i5428.textureRectOffset = new pc.Vec2( i5429[27], i5429[28] )
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5431 = data
  i5430.name = i5431[0]
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5433 = data
  i5432.name = i5433[0]
  i5432.wrapMode = i5433[1]
  i5432.isLooping = !!i5433[2]
  i5432.length = i5433[3]
  var i5435 = i5433[4]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5435[i + 0]) );
  }
  i5432.curves = i5434
  var i5437 = i5433[5]
  var i5436 = []
  for(var i = 0; i < i5437.length; i += 1) {
    i5436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5437[i + 0]) );
  }
  i5432.events = i5436
  i5432.halfPrecision = !!i5433[6]
  i5432._frameRate = i5433[7]
  i5432.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5433[8], i5432.localBounds)
  i5432.hasMuscleCurves = !!i5433[9]
  var i5439 = i5433[10]
  var i5438 = []
  for(var i = 0; i < i5439.length; i += 1) {
    i5438.push( i5439[i + 0] );
  }
  i5432.clipMuscleConstant = i5438
  i5432.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5433[11], i5432.clipBindingConstant)
  return i5432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5443 = data
  i5442.path = i5443[0]
  i5442.hash = i5443[1]
  i5442.componentType = i5443[2]
  i5442.property = i5443[3]
  i5442.keys = i5443[4]
  var i5445 = i5443[5]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 1) {
    i5444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5445[i + 0]) );
  }
  i5442.objectReferenceKeys = i5444
  return i5442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5449 = data
  i5448.time = i5449[0]
  request.r(i5449[1], i5449[2], 0, i5448, 'value')
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5453 = data
  i5452.functionName = i5453[0]
  i5452.floatParameter = i5453[1]
  i5452.intParameter = i5453[2]
  i5452.stringParameter = i5453[3]
  request.r(i5453[4], i5453[5], 0, i5452, 'objectReferenceParameter')
  i5452.time = i5453[6]
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5455 = data
  i5454.center = new pc.Vec3( i5455[0], i5455[1], i5455[2] )
  i5454.extends = new pc.Vec3( i5455[3], i5455[4], i5455[5] )
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5459 = data
  var i5461 = i5459[0]
  var i5460 = []
  for(var i = 0; i < i5461.length; i += 1) {
    i5460.push( i5461[i + 0] );
  }
  i5458.genericBindings = i5460
  var i5463 = i5459[1]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.push( i5463[i + 0] );
  }
  i5458.pptrCurveMapping = i5462
  return i5458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5465 = data
  i5464.name = i5465[0]
  var i5467 = i5465[1]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 1) {
    i5466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5467[i + 0]) );
  }
  i5464.layers = i5466
  var i5469 = i5465[2]
  var i5468 = []
  for(var i = 0; i < i5469.length; i += 1) {
    i5468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5469[i + 0]) );
  }
  i5464.parameters = i5468
  i5464.animationClips = i5465[3]
  i5464.avatarUnsupported = i5465[4]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5473 = data
  i5472.name = i5473[0]
  i5472.defaultWeight = i5473[1]
  i5472.blendingMode = i5473[2]
  i5472.avatarMask = i5473[3]
  i5472.syncedLayerIndex = i5473[4]
  i5472.syncedLayerAffectsTiming = !!i5473[5]
  i5472.syncedLayers = i5473[6]
  i5472.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5473[7], i5472.stateMachine)
  return i5472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5475 = data
  i5474.id = i5475[0]
  i5474.name = i5475[1]
  i5474.path = i5475[2]
  var i5477 = i5475[3]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 1) {
    i5476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5477[i + 0]) );
  }
  i5474.states = i5476
  var i5479 = i5475[4]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5479[i + 0]) );
  }
  i5474.machines = i5478
  var i5481 = i5475[5]
  var i5480 = []
  for(var i = 0; i < i5481.length; i += 1) {
    i5480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5481[i + 0]) );
  }
  i5474.entryStateTransitions = i5480
  var i5483 = i5475[6]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5483[i + 0]) );
  }
  i5474.exitStateTransitions = i5482
  var i5485 = i5475[7]
  var i5484 = []
  for(var i = 0; i < i5485.length; i += 1) {
    i5484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5485[i + 0]) );
  }
  i5474.anyStateTransitions = i5484
  i5474.defaultStateId = i5475[8]
  return i5474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5489 = data
  i5488.id = i5489[0]
  i5488.name = i5489[1]
  i5488.cycleOffset = i5489[2]
  i5488.cycleOffsetParameter = i5489[3]
  i5488.cycleOffsetParameterActive = !!i5489[4]
  i5488.mirror = !!i5489[5]
  i5488.mirrorParameter = i5489[6]
  i5488.mirrorParameterActive = !!i5489[7]
  i5488.motionId = i5489[8]
  i5488.nameHash = i5489[9]
  i5488.fullPathHash = i5489[10]
  i5488.speed = i5489[11]
  i5488.speedParameter = i5489[12]
  i5488.speedParameterActive = !!i5489[13]
  i5488.tag = i5489[14]
  i5488.tagHash = i5489[15]
  i5488.writeDefaultValues = !!i5489[16]
  var i5491 = i5489[17]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 2) {
  request.r(i5491[i + 0], i5491[i + 1], 2, i5490, '')
  }
  i5488.behaviours = i5490
  var i5493 = i5489[18]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5493[i + 0]) );
  }
  i5488.transitions = i5492
  return i5488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5499 = data
  i5498.fullPath = i5499[0]
  i5498.canTransitionToSelf = !!i5499[1]
  i5498.duration = i5499[2]
  i5498.exitTime = i5499[3]
  i5498.hasExitTime = !!i5499[4]
  i5498.hasFixedDuration = !!i5499[5]
  i5498.interruptionSource = i5499[6]
  i5498.offset = i5499[7]
  i5498.orderedInterruption = !!i5499[8]
  i5498.destinationStateId = i5499[9]
  i5498.isExit = !!i5499[10]
  i5498.mute = !!i5499[11]
  i5498.solo = !!i5499[12]
  var i5501 = i5499[13]
  var i5500 = []
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5501[i + 0]) );
  }
  i5498.conditions = i5500
  return i5498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5507 = data
  i5506.destinationStateId = i5507[0]
  i5506.isExit = !!i5507[1]
  i5506.mute = !!i5507[2]
  i5506.solo = !!i5507[3]
  var i5509 = i5507[4]
  var i5508 = []
  for(var i = 0; i < i5509.length; i += 1) {
    i5508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5509[i + 0]) );
  }
  i5506.conditions = i5508
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5513 = data
  i5512.defaultBool = !!i5513[0]
  i5512.defaultFloat = i5513[1]
  i5512.defaultInt = i5513[2]
  i5512.name = i5513[3]
  i5512.nameHash = i5513[4]
  i5512.type = i5513[5]
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5517 = data
  i5516.mode = i5517[0]
  i5516.parameter = i5517[1]
  i5516.threshold = i5517[2]
  return i5516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5519 = data
  i5518.name = i5519[0]
  i5518.bytes64 = i5519[1]
  i5518.data = i5519[2]
  return i5518
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5520 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5521 = data
  i5520.normalStyle = i5521[0]
  i5520.normalSpacingOffset = i5521[1]
  i5520.boldStyle = i5521[2]
  i5520.boldSpacing = i5521[3]
  i5520.italicStyle = i5521[4]
  i5520.tabSize = i5521[5]
  request.r(i5521[6], i5521[7], 0, i5520, 'atlas')
  i5520.m_SourceFontFileGUID = i5521[8]
  i5520.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5521[9], i5520.m_CreationSettings)
  request.r(i5521[10], i5521[11], 0, i5520, 'm_SourceFontFile')
  i5520.m_SourceFontFilePath = i5521[12]
  i5520.m_AtlasPopulationMode = i5521[13]
  i5520.InternalDynamicOS = !!i5521[14]
  var i5523 = i5521[15]
  var i5522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.add(request.d('UnityEngine.TextCore.Glyph', i5523[i + 0]));
  }
  i5520.m_GlyphTable = i5522
  var i5525 = i5521[16]
  var i5524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.add(request.d('TMPro.TMP_Character', i5525[i + 0]));
  }
  i5520.m_CharacterTable = i5524
  var i5527 = i5521[17]
  var i5526 = []
  for(var i = 0; i < i5527.length; i += 2) {
  request.r(i5527[i + 0], i5527[i + 1], 2, i5526, '')
  }
  i5520.m_AtlasTextures = i5526
  i5520.m_AtlasTextureIndex = i5521[18]
  i5520.m_IsMultiAtlasTexturesEnabled = !!i5521[19]
  i5520.m_GetFontFeatures = !!i5521[20]
  i5520.m_ClearDynamicDataOnBuild = !!i5521[21]
  i5520.m_AtlasWidth = i5521[22]
  i5520.m_AtlasHeight = i5521[23]
  i5520.m_AtlasPadding = i5521[24]
  i5520.m_AtlasRenderMode = i5521[25]
  var i5529 = i5521[26]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.add(request.d('UnityEngine.TextCore.GlyphRect', i5529[i + 0]));
  }
  i5520.m_UsedGlyphRects = i5528
  var i5531 = i5521[27]
  var i5530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5531.length; i += 1) {
    i5530.add(request.d('UnityEngine.TextCore.GlyphRect', i5531[i + 0]));
  }
  i5520.m_FreeGlyphRects = i5530
  i5520.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5521[28], i5520.m_FontFeatureTable)
  i5520.m_ShouldReimportFontFeatures = !!i5521[29]
  var i5533 = i5521[30]
  var i5532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5533.length; i += 2) {
  request.r(i5533[i + 0], i5533[i + 1], 1, i5532, '')
  }
  i5520.m_FallbackFontAssetTable = i5532
  var i5535 = i5521[31]
  var i5534 = []
  for(var i = 0; i < i5535.length; i += 1) {
    i5534.push( request.d('TMPro.TMP_FontWeightPair', i5535[i + 0]) );
  }
  i5520.m_FontWeightTable = i5534
  var i5537 = i5521[32]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.push( request.d('TMPro.TMP_FontWeightPair', i5537[i + 0]) );
  }
  i5520.fontWeights = i5536
  i5520.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5521[33], i5520.m_fontInfo)
  var i5539 = i5521[34]
  var i5538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.add(request.d('TMPro.TMP_Glyph', i5539[i + 0]));
  }
  i5520.m_glyphInfoList = i5538
  i5520.m_KerningTable = request.d('TMPro.KerningTable', i5521[35], i5520.m_KerningTable)
  var i5541 = i5521[36]
  var i5540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5541.length; i += 2) {
  request.r(i5541[i + 0], i5541[i + 1], 1, i5540, '')
  }
  i5520.fallbackFontAssets = i5540
  i5520.m_Version = i5521[37]
  i5520.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5521[38], i5520.m_FaceInfo)
  request.r(i5521[39], i5521[40], 0, i5520, 'm_Material')
  return i5520
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5542 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5543 = data
  i5542.sourceFontFileName = i5543[0]
  i5542.sourceFontFileGUID = i5543[1]
  i5542.faceIndex = i5543[2]
  i5542.pointSizeSamplingMode = i5543[3]
  i5542.pointSize = i5543[4]
  i5542.padding = i5543[5]
  i5542.paddingMode = i5543[6]
  i5542.packingMode = i5543[7]
  i5542.atlasWidth = i5543[8]
  i5542.atlasHeight = i5543[9]
  i5542.characterSetSelectionMode = i5543[10]
  i5542.characterSequence = i5543[11]
  i5542.referencedFontAssetGUID = i5543[12]
  i5542.referencedTextAssetGUID = i5543[13]
  i5542.fontStyle = i5543[14]
  i5542.fontStyleModifier = i5543[15]
  i5542.renderMode = i5543[16]
  i5542.includeFontFeatures = !!i5543[17]
  return i5542
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5546 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5547 = data
  i5546.m_Index = i5547[0]
  i5546.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5547[1], i5546.m_Metrics)
  i5546.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5547[2], i5546.m_GlyphRect)
  i5546.m_Scale = i5547[3]
  i5546.m_AtlasIndex = i5547[4]
  i5546.m_ClassDefinitionType = i5547[5]
  return i5546
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5548 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5549 = data
  i5548.m_Width = i5549[0]
  i5548.m_Height = i5549[1]
  i5548.m_HorizontalBearingX = i5549[2]
  i5548.m_HorizontalBearingY = i5549[3]
  i5548.m_HorizontalAdvance = i5549[4]
  return i5548
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5550 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5551 = data
  i5550.m_X = i5551[0]
  i5550.m_Y = i5551[1]
  i5550.m_Width = i5551[2]
  i5550.m_Height = i5551[3]
  return i5550
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5554 = root || request.c( 'TMPro.TMP_Character' )
  var i5555 = data
  i5554.m_ElementType = i5555[0]
  i5554.m_Unicode = i5555[1]
  i5554.m_GlyphIndex = i5555[2]
  i5554.m_Scale = i5555[3]
  return i5554
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5560 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5561 = data
  var i5563 = i5561[0]
  var i5562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5563.length; i += 1) {
    i5562.add(request.d('TMPro.MultipleSubstitutionRecord', i5563[i + 0]));
  }
  i5560.m_MultipleSubstitutionRecords = i5562
  var i5565 = i5561[1]
  var i5564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.add(request.d('TMPro.LigatureSubstitutionRecord', i5565[i + 0]));
  }
  i5560.m_LigatureSubstitutionRecords = i5564
  var i5567 = i5561[2]
  var i5566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5567[i + 0]));
  }
  i5560.m_GlyphPairAdjustmentRecords = i5566
  var i5569 = i5561[3]
  var i5568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5569[i + 0]));
  }
  i5560.m_MarkToBaseAdjustmentRecords = i5568
  var i5571 = i5561[4]
  var i5570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5571[i + 0]));
  }
  i5560.m_MarkToMarkAdjustmentRecords = i5570
  return i5560
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5574 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5575 = data
  i5574.m_TargetGlyphID = i5575[0]
  i5574.m_SubstituteGlyphIDs = i5575[1]
  return i5574
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5578 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5579 = data
  i5578.m_ComponentGlyphIDs = i5579[0]
  i5578.m_LigatureGlyphID = i5579[1]
  return i5578
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5582 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5583 = data
  i5582.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5583[0], i5582.m_FirstAdjustmentRecord)
  i5582.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5583[1], i5582.m_SecondAdjustmentRecord)
  i5582.m_FeatureLookupFlags = i5583[2]
  return i5582
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5586 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5587 = data
  i5586.m_BaseGlyphID = i5587[0]
  i5586.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5587[1], i5586.m_BaseGlyphAnchorPoint)
  i5586.m_MarkGlyphID = i5587[2]
  i5586.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5587[3], i5586.m_MarkPositionAdjustment)
  return i5586
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5590 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5591 = data
  i5590.m_BaseMarkGlyphID = i5591[0]
  i5590.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5591[1], i5590.m_BaseMarkGlyphAnchorPoint)
  i5590.m_CombiningMarkGlyphID = i5591[2]
  i5590.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5591[3], i5590.m_CombiningMarkPositionAdjustment)
  return i5590
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5596 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5597 = data
  request.r(i5597[0], i5597[1], 0, i5596, 'regularTypeface')
  request.r(i5597[2], i5597[3], 0, i5596, 'italicTypeface')
  return i5596
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5598 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5599 = data
  i5598.Name = i5599[0]
  i5598.PointSize = i5599[1]
  i5598.Scale = i5599[2]
  i5598.CharacterCount = i5599[3]
  i5598.LineHeight = i5599[4]
  i5598.Baseline = i5599[5]
  i5598.Ascender = i5599[6]
  i5598.CapHeight = i5599[7]
  i5598.Descender = i5599[8]
  i5598.CenterLine = i5599[9]
  i5598.SuperscriptOffset = i5599[10]
  i5598.SubscriptOffset = i5599[11]
  i5598.SubSize = i5599[12]
  i5598.Underline = i5599[13]
  i5598.UnderlineThickness = i5599[14]
  i5598.strikethrough = i5599[15]
  i5598.strikethroughThickness = i5599[16]
  i5598.TabWidth = i5599[17]
  i5598.Padding = i5599[18]
  i5598.AtlasWidth = i5599[19]
  i5598.AtlasHeight = i5599[20]
  return i5598
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5602 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5603 = data
  i5602.id = i5603[0]
  i5602.x = i5603[1]
  i5602.y = i5603[2]
  i5602.width = i5603[3]
  i5602.height = i5603[4]
  i5602.xOffset = i5603[5]
  i5602.yOffset = i5603[6]
  i5602.xAdvance = i5603[7]
  i5602.scale = i5603[8]
  return i5602
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5604 = root || request.c( 'TMPro.KerningTable' )
  var i5605 = data
  var i5607 = i5605[0]
  var i5606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.add(request.d('TMPro.KerningPair', i5607[i + 0]));
  }
  i5604.kerningPairs = i5606
  return i5604
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5610 = root || request.c( 'TMPro.KerningPair' )
  var i5611 = data
  i5610.xOffset = i5611[0]
  i5610.m_FirstGlyph = i5611[1]
  i5610.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5611[2], i5610.m_FirstGlyphAdjustments)
  i5610.m_SecondGlyph = i5611[3]
  i5610.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5611[4], i5610.m_SecondGlyphAdjustments)
  i5610.m_IgnoreSpacingAdjustments = !!i5611[5]
  return i5610
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5613 = data
  i5612.m_FaceIndex = i5613[0]
  i5612.m_FamilyName = i5613[1]
  i5612.m_StyleName = i5613[2]
  i5612.m_PointSize = i5613[3]
  i5612.m_Scale = i5613[4]
  i5612.m_UnitsPerEM = i5613[5]
  i5612.m_LineHeight = i5613[6]
  i5612.m_AscentLine = i5613[7]
  i5612.m_CapLine = i5613[8]
  i5612.m_MeanLine = i5613[9]
  i5612.m_Baseline = i5613[10]
  i5612.m_DescentLine = i5613[11]
  i5612.m_SuperscriptOffset = i5613[12]
  i5612.m_SuperscriptSize = i5613[13]
  i5612.m_SubscriptOffset = i5613[14]
  i5612.m_SubscriptSize = i5613[15]
  i5612.m_UnderlineOffset = i5613[16]
  i5612.m_UnderlineThickness = i5613[17]
  i5612.m_StrikethroughOffset = i5613[18]
  i5612.m_StrikethroughThickness = i5613[19]
  i5612.m_TabWidth = i5613[20]
  return i5612
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5615 = data
  i5614.useSafeMode = !!i5615[0]
  i5614.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5615[1], i5614.safeModeOptions)
  i5614.timeScale = i5615[2]
  i5614.unscaledTimeScale = i5615[3]
  i5614.useSmoothDeltaTime = !!i5615[4]
  i5614.maxSmoothUnscaledTime = i5615[5]
  i5614.rewindCallbackMode = i5615[6]
  i5614.showUnityEditorReport = !!i5615[7]
  i5614.logBehaviour = i5615[8]
  i5614.drawGizmos = !!i5615[9]
  i5614.defaultRecyclable = !!i5615[10]
  i5614.defaultAutoPlay = i5615[11]
  i5614.defaultUpdateType = i5615[12]
  i5614.defaultTimeScaleIndependent = !!i5615[13]
  i5614.defaultEaseType = i5615[14]
  i5614.defaultEaseOvershootOrAmplitude = i5615[15]
  i5614.defaultEasePeriod = i5615[16]
  i5614.defaultAutoKill = !!i5615[17]
  i5614.defaultLoopType = i5615[18]
  i5614.debugMode = !!i5615[19]
  i5614.debugStoreTargetId = !!i5615[20]
  i5614.showPreviewPanel = !!i5615[21]
  i5614.storeSettingsLocation = i5615[22]
  i5614.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5615[23], i5614.modules)
  i5614.createASMDEF = !!i5615[24]
  i5614.showPlayingTweens = !!i5615[25]
  i5614.showPausedTweens = !!i5615[26]
  return i5614
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5617 = data
  i5616.logBehaviour = i5617[0]
  i5616.nestedTweenFailureBehaviour = i5617[1]
  return i5616
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5618 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5619 = data
  i5618.showPanel = !!i5619[0]
  i5618.audioEnabled = !!i5619[1]
  i5618.physicsEnabled = !!i5619[2]
  i5618.physics2DEnabled = !!i5619[3]
  i5618.spriteEnabled = !!i5619[4]
  i5618.uiEnabled = !!i5619[5]
  i5618.uiToolkitEnabled = !!i5619[6]
  i5618.textMeshProEnabled = !!i5619[7]
  i5618.tk2DEnabled = !!i5619[8]
  i5618.deAudioEnabled = !!i5619[9]
  i5618.deUnityExtendedEnabled = !!i5619[10]
  i5618.epoOutlineEnabled = !!i5619[11]
  return i5618
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5620 = root || request.c( 'TMPro.TMP_Settings' )
  var i5621 = data
  i5620.assetVersion = i5621[0]
  i5620.m_TextWrappingMode = i5621[1]
  i5620.m_enableKerning = !!i5621[2]
  var i5623 = i5621[3]
  var i5622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5623.length; i += 1) {
    i5622.add(i5623[i + 0]);
  }
  i5620.m_ActiveFontFeatures = i5622
  i5620.m_enableExtraPadding = !!i5621[4]
  i5620.m_enableTintAllSprites = !!i5621[5]
  i5620.m_enableParseEscapeCharacters = !!i5621[6]
  i5620.m_EnableRaycastTarget = !!i5621[7]
  i5620.m_GetFontFeaturesAtRuntime = !!i5621[8]
  i5620.m_missingGlyphCharacter = i5621[9]
  i5620.m_ClearDynamicDataOnBuild = !!i5621[10]
  i5620.m_warningsDisabled = !!i5621[11]
  request.r(i5621[12], i5621[13], 0, i5620, 'm_defaultFontAsset')
  i5620.m_defaultFontAssetPath = i5621[14]
  i5620.m_defaultFontSize = i5621[15]
  i5620.m_defaultAutoSizeMinRatio = i5621[16]
  i5620.m_defaultAutoSizeMaxRatio = i5621[17]
  i5620.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5621[18], i5621[19] )
  i5620.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5621[20], i5621[21] )
  i5620.m_autoSizeTextContainer = !!i5621[22]
  i5620.m_IsTextObjectScaleStatic = !!i5621[23]
  var i5625 = i5621[24]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5625.length; i += 2) {
  request.r(i5625[i + 0], i5625[i + 1], 1, i5624, '')
  }
  i5620.m_fallbackFontAssets = i5624
  i5620.m_matchMaterialPreset = !!i5621[25]
  i5620.m_HideSubTextObjects = !!i5621[26]
  request.r(i5621[27], i5621[28], 0, i5620, 'm_defaultSpriteAsset')
  i5620.m_defaultSpriteAssetPath = i5621[29]
  i5620.m_enableEmojiSupport = !!i5621[30]
  i5620.m_MissingCharacterSpriteUnicode = i5621[31]
  var i5627 = i5621[32]
  var i5626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5627.length; i += 2) {
  request.r(i5627[i + 0], i5627[i + 1], 1, i5626, '')
  }
  i5620.m_EmojiFallbackTextAssets = i5626
  i5620.m_defaultColorGradientPresetsPath = i5621[33]
  request.r(i5621[34], i5621[35], 0, i5620, 'm_defaultStyleSheet')
  i5620.m_StyleSheetsResourcePath = i5621[36]
  request.r(i5621[37], i5621[38], 0, i5620, 'm_leadingCharacters')
  request.r(i5621[39], i5621[40], 0, i5620, 'm_followingCharacters')
  i5620.m_UseModernHangulLineBreakingRules = !!i5621[41]
  return i5620
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5630 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5631 = data
  request.r(i5631[0], i5631[1], 0, i5630, 'spriteSheet')
  var i5633 = i5631[2]
  var i5632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.add(request.d('TMPro.TMP_Sprite', i5633[i + 0]));
  }
  i5630.spriteInfoList = i5632
  var i5635 = i5631[3]
  var i5634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5635.length; i += 2) {
  request.r(i5635[i + 0], i5635[i + 1], 1, i5634, '')
  }
  i5630.fallbackSpriteAssets = i5634
  var i5637 = i5631[4]
  var i5636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5637.length; i += 1) {
    i5636.add(request.d('TMPro.TMP_SpriteCharacter', i5637[i + 0]));
  }
  i5630.m_SpriteCharacterTable = i5636
  var i5639 = i5631[5]
  var i5638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5639.length; i += 1) {
    i5638.add(request.d('TMPro.TMP_SpriteGlyph', i5639[i + 0]));
  }
  i5630.m_GlyphTable = i5638
  i5630.m_Version = i5631[6]
  i5630.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5631[7], i5630.m_FaceInfo)
  request.r(i5631[8], i5631[9], 0, i5630, 'm_Material')
  return i5630
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5642 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5643 = data
  i5642.name = i5643[0]
  i5642.hashCode = i5643[1]
  i5642.unicode = i5643[2]
  i5642.pivot = new pc.Vec2( i5643[3], i5643[4] )
  request.r(i5643[5], i5643[6], 0, i5642, 'sprite')
  i5642.id = i5643[7]
  i5642.x = i5643[8]
  i5642.y = i5643[9]
  i5642.width = i5643[10]
  i5642.height = i5643[11]
  i5642.xOffset = i5643[12]
  i5642.yOffset = i5643[13]
  i5642.xAdvance = i5643[14]
  i5642.scale = i5643[15]
  return i5642
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5648 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5649 = data
  i5648.m_Name = i5649[0]
  i5648.m_ElementType = i5649[1]
  i5648.m_Unicode = i5649[2]
  i5648.m_GlyphIndex = i5649[3]
  i5648.m_Scale = i5649[4]
  return i5648
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5652 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5653 = data
  request.r(i5653[0], i5653[1], 0, i5652, 'sprite')
  i5652.m_Index = i5653[2]
  i5652.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5653[3], i5652.m_Metrics)
  i5652.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5653[4], i5652.m_GlyphRect)
  i5652.m_Scale = i5653[5]
  i5652.m_AtlasIndex = i5653[6]
  i5652.m_ClassDefinitionType = i5653[7]
  return i5652
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5654 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5655 = data
  var i5657 = i5655[0]
  var i5656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5657.length; i += 1) {
    i5656.add(request.d('TMPro.TMP_Style', i5657[i + 0]));
  }
  i5654.m_StyleList = i5656
  return i5654
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5660 = root || request.c( 'TMPro.TMP_Style' )
  var i5661 = data
  i5660.m_Name = i5661[0]
  i5660.m_HashCode = i5661[1]
  i5660.m_OpeningDefinition = i5661[2]
  i5660.m_ClosingDefinition = i5661[3]
  i5660.m_OpeningTagArray = i5661[4]
  i5660.m_ClosingTagArray = i5661[5]
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5663 = data
  var i5665 = i5663[0]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5665[i + 0]) );
  }
  i5662.files = i5664
  i5662.componentToPrefabIds = i5663[1]
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5669 = data
  i5668.path = i5669[0]
  request.r(i5669[1], i5669[2], 0, i5668, 'unityObject')
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5671 = data
  var i5673 = i5671[0]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5673[i + 0]) );
  }
  i5670.scriptsExecutionOrder = i5672
  var i5675 = i5671[1]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 1) {
    i5674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5675[i + 0]) );
  }
  i5670.sortingLayers = i5674
  var i5677 = i5671[2]
  var i5676 = []
  for(var i = 0; i < i5677.length; i += 1) {
    i5676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5677[i + 0]) );
  }
  i5670.cullingLayers = i5676
  i5670.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5671[3], i5670.timeSettings)
  i5670.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5671[4], i5670.physicsSettings)
  i5670.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5671[5], i5670.physics2DSettings)
  i5670.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5671[6], i5670.qualitySettings)
  i5670.enableRealtimeShadows = !!i5671[7]
  i5670.enableAutoInstancing = !!i5671[8]
  i5670.enableStaticBatching = !!i5671[9]
  i5670.enableDynamicBatching = !!i5671[10]
  i5670.lightmapEncodingQuality = i5671[11]
  i5670.desiredColorSpace = i5671[12]
  var i5679 = i5671[13]
  var i5678 = []
  for(var i = 0; i < i5679.length; i += 1) {
    i5678.push( i5679[i + 0] );
  }
  i5670.allTags = i5678
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5683 = data
  i5682.name = i5683[0]
  i5682.value = i5683[1]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5687 = data
  i5686.id = i5687[0]
  i5686.name = i5687[1]
  i5686.value = i5687[2]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5691 = data
  i5690.id = i5691[0]
  i5690.name = i5691[1]
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5693 = data
  i5692.fixedDeltaTime = i5693[0]
  i5692.maximumDeltaTime = i5693[1]
  i5692.timeScale = i5693[2]
  i5692.maximumParticleTimestep = i5693[3]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5695 = data
  i5694.gravity = new pc.Vec3( i5695[0], i5695[1], i5695[2] )
  i5694.defaultSolverIterations = i5695[3]
  i5694.bounceThreshold = i5695[4]
  i5694.autoSyncTransforms = !!i5695[5]
  i5694.autoSimulation = !!i5695[6]
  var i5697 = i5695[7]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 1) {
    i5696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5697[i + 0]) );
  }
  i5694.collisionMatrix = i5696
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5701 = data
  i5700.enabled = !!i5701[0]
  i5700.layerId = i5701[1]
  i5700.otherLayerId = i5701[2]
  return i5700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5703 = data
  request.r(i5703[0], i5703[1], 0, i5702, 'material')
  i5702.gravity = new pc.Vec2( i5703[2], i5703[3] )
  i5702.positionIterations = i5703[4]
  i5702.velocityIterations = i5703[5]
  i5702.velocityThreshold = i5703[6]
  i5702.maxLinearCorrection = i5703[7]
  i5702.maxAngularCorrection = i5703[8]
  i5702.maxTranslationSpeed = i5703[9]
  i5702.maxRotationSpeed = i5703[10]
  i5702.baumgarteScale = i5703[11]
  i5702.baumgarteTOIScale = i5703[12]
  i5702.timeToSleep = i5703[13]
  i5702.linearSleepTolerance = i5703[14]
  i5702.angularSleepTolerance = i5703[15]
  i5702.defaultContactOffset = i5703[16]
  i5702.autoSimulation = !!i5703[17]
  i5702.queriesHitTriggers = !!i5703[18]
  i5702.queriesStartInColliders = !!i5703[19]
  i5702.callbacksOnDisable = !!i5703[20]
  i5702.reuseCollisionCallbacks = !!i5703[21]
  i5702.autoSyncTransforms = !!i5703[22]
  var i5705 = i5703[23]
  var i5704 = []
  for(var i = 0; i < i5705.length; i += 1) {
    i5704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5705[i + 0]) );
  }
  i5702.collisionMatrix = i5704
  return i5702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5709 = data
  i5708.enabled = !!i5709[0]
  i5708.layerId = i5709[1]
  i5708.otherLayerId = i5709[2]
  return i5708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5711 = data
  var i5713 = i5711[0]
  var i5712 = []
  for(var i = 0; i < i5713.length; i += 1) {
    i5712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5713[i + 0]) );
  }
  i5710.qualityLevels = i5712
  var i5715 = i5711[1]
  var i5714 = []
  for(var i = 0; i < i5715.length; i += 1) {
    i5714.push( i5715[i + 0] );
  }
  i5710.names = i5714
  i5710.shadows = i5711[2]
  i5710.anisotropicFiltering = i5711[3]
  i5710.antiAliasing = i5711[4]
  i5710.lodBias = i5711[5]
  i5710.shadowCascades = i5711[6]
  i5710.shadowDistance = i5711[7]
  i5710.shadowmaskMode = i5711[8]
  i5710.shadowProjection = i5711[9]
  i5710.shadowResolution = i5711[10]
  i5710.softParticles = !!i5711[11]
  i5710.softVegetation = !!i5711[12]
  i5710.activeColorSpace = i5711[13]
  i5710.desiredColorSpace = i5711[14]
  i5710.masterTextureLimit = i5711[15]
  i5710.maxQueuedFrames = i5711[16]
  i5710.particleRaycastBudget = i5711[17]
  i5710.pixelLightCount = i5711[18]
  i5710.realtimeReflectionProbes = !!i5711[19]
  i5710.shadowCascade2Split = i5711[20]
  i5710.shadowCascade4Split = new pc.Vec3( i5711[21], i5711[22], i5711[23] )
  i5710.streamingMipmapsActive = !!i5711[24]
  i5710.vSyncCount = i5711[25]
  i5710.asyncUploadBufferSize = i5711[26]
  i5710.asyncUploadTimeSlice = i5711[27]
  i5710.billboardsFaceCameraPosition = !!i5711[28]
  i5710.shadowNearPlaneOffset = i5711[29]
  i5710.streamingMipmapsMemoryBudget = i5711[30]
  i5710.maximumLODLevel = i5711[31]
  i5710.streamingMipmapsAddAllCameras = !!i5711[32]
  i5710.streamingMipmapsMaxLevelReduction = i5711[33]
  i5710.streamingMipmapsRenderersPerFrame = i5711[34]
  i5710.resolutionScalingFixedDPIFactor = i5711[35]
  i5710.streamingMipmapsMaxFileIORequests = i5711[36]
  i5710.currentQualityLevel = i5711[37]
  return i5710
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5718 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5719 = data
  i5718.m_GlyphIndex = i5719[0]
  i5718.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5719[1], i5718.m_GlyphValueRecord)
  return i5718
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5720 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5721 = data
  i5720.m_XCoordinate = i5721[0]
  i5720.m_YCoordinate = i5721[1]
  return i5720
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5722 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5723 = data
  i5722.m_XPositionAdjustment = i5723[0]
  i5722.m_YPositionAdjustment = i5723[1]
  return i5722
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5724 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5725 = data
  i5724.xPlacement = i5725[0]
  i5724.yPlacement = i5725[1]
  i5724.xAdvance = i5725[2]
  i5724.yAdvance = i5725[3]
  return i5724
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5726 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5727 = data
  i5726.m_XPlacement = i5727[0]
  i5726.m_YPlacement = i5727[1]
  i5726.m_XAdvance = i5727[2]
  i5726.m_YAdvance = i5727[3]
  return i5726
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1773";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5013";

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

Deserializers.buildID = "8e1bc98c-7804-45a7-8817-fad3c243f235";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

