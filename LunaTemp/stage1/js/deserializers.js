var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7020 = root || request.c( 'UnityEngine.JointSpring' )
  var i7021 = data
  i7020.spring = i7021[0]
  i7020.damper = i7021[1]
  i7020.targetPosition = i7021[2]
  return i7020
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7022 = root || request.c( 'UnityEngine.JointMotor' )
  var i7023 = data
  i7022.m_TargetVelocity = i7023[0]
  i7022.m_Force = i7023[1]
  i7022.m_FreeSpin = i7023[2]
  return i7022
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7024 = root || request.c( 'UnityEngine.JointLimits' )
  var i7025 = data
  i7024.m_Min = i7025[0]
  i7024.m_Max = i7025[1]
  i7024.m_Bounciness = i7025[2]
  i7024.m_BounceMinVelocity = i7025[3]
  i7024.m_ContactDistance = i7025[4]
  i7024.minBounce = i7025[5]
  i7024.maxBounce = i7025[6]
  return i7024
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7026 = root || request.c( 'UnityEngine.JointDrive' )
  var i7027 = data
  i7026.m_PositionSpring = i7027[0]
  i7026.m_PositionDamper = i7027[1]
  i7026.m_MaximumForce = i7027[2]
  i7026.m_UseAcceleration = i7027[3]
  return i7026
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7028 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7029 = data
  i7028.m_Spring = i7029[0]
  i7028.m_Damper = i7029[1]
  return i7028
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7030 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7031 = data
  i7030.m_Limit = i7031[0]
  i7030.m_Bounciness = i7031[1]
  i7030.m_ContactDistance = i7031[2]
  return i7030
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7032 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7033 = data
  i7032.m_ExtremumSlip = i7033[0]
  i7032.m_ExtremumValue = i7033[1]
  i7032.m_AsymptoteSlip = i7033[2]
  i7032.m_AsymptoteValue = i7033[3]
  i7032.m_Stiffness = i7033[4]
  return i7032
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7034 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7035 = data
  i7034.m_LowerAngle = i7035[0]
  i7034.m_UpperAngle = i7035[1]
  return i7034
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7036 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7037 = data
  i7036.m_MotorSpeed = i7037[0]
  i7036.m_MaximumMotorTorque = i7037[1]
  return i7036
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7038 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7039 = data
  i7038.m_DampingRatio = i7039[0]
  i7038.m_Frequency = i7039[1]
  i7038.m_Angle = i7039[2]
  return i7038
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7040 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7041 = data
  i7040.m_LowerTranslation = i7041[0]
  i7040.m_UpperTranslation = i7041[1]
  return i7040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7042 = root || new pc.UnityMaterial()
  var i7043 = data
  i7042.name = i7043[0]
  request.r(i7043[1], i7043[2], 0, i7042, 'shader')
  i7042.renderQueue = i7043[3]
  i7042.enableInstancing = !!i7043[4]
  var i7045 = i7043[5]
  var i7044 = []
  for(var i = 0; i < i7045.length; i += 1) {
    i7044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7045[i + 0]) );
  }
  i7042.floatParameters = i7044
  var i7047 = i7043[6]
  var i7046 = []
  for(var i = 0; i < i7047.length; i += 1) {
    i7046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7047[i + 0]) );
  }
  i7042.colorParameters = i7046
  var i7049 = i7043[7]
  var i7048 = []
  for(var i = 0; i < i7049.length; i += 1) {
    i7048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7049[i + 0]) );
  }
  i7042.vectorParameters = i7048
  var i7051 = i7043[8]
  var i7050 = []
  for(var i = 0; i < i7051.length; i += 1) {
    i7050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7051[i + 0]) );
  }
  i7042.textureParameters = i7050
  var i7053 = i7043[9]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 1) {
    i7052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7053[i + 0]) );
  }
  i7042.materialFlags = i7052
  return i7042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7057 = data
  i7056.name = i7057[0]
  i7056.value = i7057[1]
  return i7056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7061 = data
  i7060.name = i7061[0]
  i7060.value = new pc.Color(i7061[1], i7061[2], i7061[3], i7061[4])
  return i7060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7065 = data
  i7064.name = i7065[0]
  i7064.value = new pc.Vec4( i7065[1], i7065[2], i7065[3], i7065[4] )
  return i7064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7069 = data
  i7068.name = i7069[0]
  request.r(i7069[1], i7069[2], 0, i7068, 'value')
  return i7068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7073 = data
  i7072.name = i7073[0]
  i7072.enabled = !!i7073[1]
  return i7072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7075 = data
  i7074.name = i7075[0]
  i7074.width = i7075[1]
  i7074.height = i7075[2]
  i7074.mipmapCount = i7075[3]
  i7074.anisoLevel = i7075[4]
  i7074.filterMode = i7075[5]
  i7074.hdr = !!i7075[6]
  i7074.format = i7075[7]
  i7074.wrapMode = i7075[8]
  i7074.alphaIsTransparency = !!i7075[9]
  i7074.alphaSource = i7075[10]
  i7074.graphicsFormat = i7075[11]
  i7074.sRGBTexture = !!i7075[12]
  i7074.desiredColorSpace = i7075[13]
  i7074.wrapU = i7075[14]
  i7074.wrapV = i7075[15]
  return i7074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7077 = data
  i7076.position = new pc.Vec3( i7077[0], i7077[1], i7077[2] )
  i7076.scale = new pc.Vec3( i7077[3], i7077[4], i7077[5] )
  i7076.rotation = new pc.Quat(i7077[6], i7077[7], i7077[8], i7077[9])
  return i7076
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i7078 = root || request.c( 'HeartEffect' )
  var i7079 = data
  i7078.defaultLifeTime = i7079[0]
  request.r(i7079[1], i7079[2], 0, i7078, 'tf')
  return i7078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7081 = data
  i7080.color = new pc.Color(i7081[0], i7081[1], i7081[2], i7081[3])
  request.r(i7081[4], i7081[5], 0, i7080, 'sprite')
  i7080.flipX = !!i7081[6]
  i7080.flipY = !!i7081[7]
  i7080.drawMode = i7081[8]
  i7080.size = new pc.Vec2( i7081[9], i7081[10] )
  i7080.tileMode = i7081[11]
  i7080.adaptiveModeThreshold = i7081[12]
  i7080.maskInteraction = i7081[13]
  i7080.spriteSortPoint = i7081[14]
  i7080.enabled = !!i7081[15]
  request.r(i7081[16], i7081[17], 0, i7080, 'sharedMaterial')
  var i7083 = i7081[18]
  var i7082 = []
  for(var i = 0; i < i7083.length; i += 2) {
  request.r(i7083[i + 0], i7083[i + 1], 2, i7082, '')
  }
  i7080.sharedMaterials = i7082
  i7080.receiveShadows = !!i7081[19]
  i7080.shadowCastingMode = i7081[20]
  i7080.sortingLayerID = i7081[21]
  i7080.sortingOrder = i7081[22]
  i7080.lightmapIndex = i7081[23]
  i7080.lightmapSceneIndex = i7081[24]
  i7080.lightmapScaleOffset = new pc.Vec4( i7081[25], i7081[26], i7081[27], i7081[28] )
  i7080.lightProbeUsage = i7081[29]
  i7080.reflectionProbeUsage = i7081[30]
  return i7080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7087 = data
  i7086.name = i7087[0]
  i7086.tagId = i7087[1]
  i7086.enabled = !!i7087[2]
  i7086.isStatic = !!i7087[3]
  i7086.layer = i7087[4]
  return i7086
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i7088 = root || request.c( 'HeartBreakEffect' )
  var i7089 = data
  i7088.defaultLifeTime = i7089[0]
  request.r(i7089[1], i7089[2], 0, i7088, 'tf')
  return i7088
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i7090 = root || request.c( 'BlinkEffect' )
  var i7091 = data
  request.r(i7091[0], i7091[1], 0, i7090, 'tf')
  return i7090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7093 = data
  request.r(i7093[0], i7093[1], 0, i7092, 'mesh')
  i7092.meshCount = i7093[2]
  i7092.activeVertexStreamsCount = i7093[3]
  i7092.alignment = i7093[4]
  i7092.renderMode = i7093[5]
  i7092.sortMode = i7093[6]
  i7092.lengthScale = i7093[7]
  i7092.velocityScale = i7093[8]
  i7092.cameraVelocityScale = i7093[9]
  i7092.normalDirection = i7093[10]
  i7092.sortingFudge = i7093[11]
  i7092.minParticleSize = i7093[12]
  i7092.maxParticleSize = i7093[13]
  i7092.pivot = new pc.Vec3( i7093[14], i7093[15], i7093[16] )
  request.r(i7093[17], i7093[18], 0, i7092, 'trailMaterial')
  i7092.applyActiveColorSpace = !!i7093[19]
  i7092.enabled = !!i7093[20]
  request.r(i7093[21], i7093[22], 0, i7092, 'sharedMaterial')
  var i7095 = i7093[23]
  var i7094 = []
  for(var i = 0; i < i7095.length; i += 2) {
  request.r(i7095[i + 0], i7095[i + 1], 2, i7094, '')
  }
  i7092.sharedMaterials = i7094
  i7092.receiveShadows = !!i7093[24]
  i7092.shadowCastingMode = i7093[25]
  i7092.sortingLayerID = i7093[26]
  i7092.sortingOrder = i7093[27]
  i7092.lightmapIndex = i7093[28]
  i7092.lightmapSceneIndex = i7093[29]
  i7092.lightmapScaleOffset = new pc.Vec4( i7093[30], i7093[31], i7093[32], i7093[33] )
  i7092.lightProbeUsage = i7093[34]
  i7092.reflectionProbeUsage = i7093[35]
  return i7092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7097 = data
  i7096.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7097[0], i7096.main)
  i7096.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7097[1], i7096.colorBySpeed)
  i7096.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7097[2], i7096.colorOverLifetime)
  i7096.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7097[3], i7096.emission)
  i7096.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7097[4], i7096.rotationBySpeed)
  i7096.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7097[5], i7096.rotationOverLifetime)
  i7096.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7097[6], i7096.shape)
  i7096.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7097[7], i7096.sizeBySpeed)
  i7096.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7097[8], i7096.sizeOverLifetime)
  i7096.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7097[9], i7096.textureSheetAnimation)
  i7096.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7097[10], i7096.velocityOverLifetime)
  i7096.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7097[11], i7096.noise)
  i7096.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7097[12], i7096.inheritVelocity)
  i7096.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7097[13], i7096.forceOverLifetime)
  i7096.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7097[14], i7096.limitVelocityOverLifetime)
  i7096.useAutoRandomSeed = !!i7097[15]
  i7096.randomSeed = i7097[16]
  return i7096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7098 = root || new pc.ParticleSystemMain()
  var i7099 = data
  i7098.duration = i7099[0]
  i7098.loop = !!i7099[1]
  i7098.prewarm = !!i7099[2]
  i7098.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[3], i7098.startDelay)
  i7098.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[4], i7098.startLifetime)
  i7098.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[5], i7098.startSpeed)
  i7098.startSize3D = !!i7099[6]
  i7098.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[7], i7098.startSizeX)
  i7098.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[8], i7098.startSizeY)
  i7098.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[9], i7098.startSizeZ)
  i7098.startRotation3D = !!i7099[10]
  i7098.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[11], i7098.startRotationX)
  i7098.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[12], i7098.startRotationY)
  i7098.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[13], i7098.startRotationZ)
  i7098.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7099[14], i7098.startColor)
  i7098.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7099[15], i7098.gravityModifier)
  i7098.simulationSpace = i7099[16]
  request.r(i7099[17], i7099[18], 0, i7098, 'customSimulationSpace')
  i7098.simulationSpeed = i7099[19]
  i7098.useUnscaledTime = !!i7099[20]
  i7098.scalingMode = i7099[21]
  i7098.playOnAwake = !!i7099[22]
  i7098.maxParticles = i7099[23]
  i7098.emitterVelocityMode = i7099[24]
  i7098.stopAction = i7099[25]
  return i7098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7100 = root || new pc.MinMaxCurve()
  var i7101 = data
  i7100.mode = i7101[0]
  i7100.curveMin = new pc.AnimationCurve( { keys_flow: i7101[1] } )
  i7100.curveMax = new pc.AnimationCurve( { keys_flow: i7101[2] } )
  i7100.curveMultiplier = i7101[3]
  i7100.constantMin = i7101[4]
  i7100.constantMax = i7101[5]
  return i7100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7102 = root || new pc.MinMaxGradient()
  var i7103 = data
  i7102.mode = i7103[0]
  i7102.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7103[1], i7102.gradientMin)
  i7102.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7103[2], i7102.gradientMax)
  i7102.colorMin = new pc.Color(i7103[3], i7103[4], i7103[5], i7103[6])
  i7102.colorMax = new pc.Color(i7103[7], i7103[8], i7103[9], i7103[10])
  return i7102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7105 = data
  i7104.mode = i7105[0]
  var i7107 = i7105[1]
  var i7106 = []
  for(var i = 0; i < i7107.length; i += 1) {
    i7106.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7107[i + 0]) );
  }
  i7104.colorKeys = i7106
  var i7109 = i7105[2]
  var i7108 = []
  for(var i = 0; i < i7109.length; i += 1) {
    i7108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7109[i + 0]) );
  }
  i7104.alphaKeys = i7108
  return i7104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7110 = root || new pc.ParticleSystemColorBySpeed()
  var i7111 = data
  i7110.enabled = !!i7111[0]
  i7110.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7111[1], i7110.color)
  i7110.range = new pc.Vec2( i7111[2], i7111[3] )
  return i7110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7115 = data
  i7114.color = new pc.Color(i7115[0], i7115[1], i7115[2], i7115[3])
  i7114.time = i7115[4]
  return i7114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7119 = data
  i7118.alpha = i7119[0]
  i7118.time = i7119[1]
  return i7118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7120 = root || new pc.ParticleSystemColorOverLifetime()
  var i7121 = data
  i7120.enabled = !!i7121[0]
  i7120.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7121[1], i7120.color)
  return i7120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7122 = root || new pc.ParticleSystemEmitter()
  var i7123 = data
  i7122.enabled = !!i7123[0]
  i7122.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7123[1], i7122.rateOverTime)
  i7122.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7123[2], i7122.rateOverDistance)
  var i7125 = i7123[3]
  var i7124 = []
  for(var i = 0; i < i7125.length; i += 1) {
    i7124.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7125[i + 0]) );
  }
  i7122.bursts = i7124
  return i7122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7128 = root || new pc.ParticleSystemBurst()
  var i7129 = data
  i7128.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7129[0], i7128.count)
  i7128.cycleCount = i7129[1]
  i7128.minCount = i7129[2]
  i7128.maxCount = i7129[3]
  i7128.repeatInterval = i7129[4]
  i7128.time = i7129[5]
  return i7128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7130 = root || new pc.ParticleSystemRotationBySpeed()
  var i7131 = data
  i7130.enabled = !!i7131[0]
  i7130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7131[1], i7130.x)
  i7130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7131[2], i7130.y)
  i7130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7131[3], i7130.z)
  i7130.separateAxes = !!i7131[4]
  i7130.range = new pc.Vec2( i7131[5], i7131[6] )
  return i7130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7132 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7133 = data
  i7132.enabled = !!i7133[0]
  i7132.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7133[1], i7132.x)
  i7132.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7133[2], i7132.y)
  i7132.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7133[3], i7132.z)
  i7132.separateAxes = !!i7133[4]
  return i7132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7134 = root || new pc.ParticleSystemShape()
  var i7135 = data
  i7134.enabled = !!i7135[0]
  i7134.shapeType = i7135[1]
  i7134.randomDirectionAmount = i7135[2]
  i7134.sphericalDirectionAmount = i7135[3]
  i7134.randomPositionAmount = i7135[4]
  i7134.alignToDirection = !!i7135[5]
  i7134.radius = i7135[6]
  i7134.radiusMode = i7135[7]
  i7134.radiusSpread = i7135[8]
  i7134.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7135[9], i7134.radiusSpeed)
  i7134.radiusThickness = i7135[10]
  i7134.angle = i7135[11]
  i7134.length = i7135[12]
  i7134.boxThickness = new pc.Vec3( i7135[13], i7135[14], i7135[15] )
  i7134.meshShapeType = i7135[16]
  request.r(i7135[17], i7135[18], 0, i7134, 'mesh')
  request.r(i7135[19], i7135[20], 0, i7134, 'meshRenderer')
  request.r(i7135[21], i7135[22], 0, i7134, 'skinnedMeshRenderer')
  i7134.useMeshMaterialIndex = !!i7135[23]
  i7134.meshMaterialIndex = i7135[24]
  i7134.useMeshColors = !!i7135[25]
  i7134.normalOffset = i7135[26]
  i7134.arc = i7135[27]
  i7134.arcMode = i7135[28]
  i7134.arcSpread = i7135[29]
  i7134.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7135[30], i7134.arcSpeed)
  i7134.donutRadius = i7135[31]
  i7134.position = new pc.Vec3( i7135[32], i7135[33], i7135[34] )
  i7134.rotation = new pc.Vec3( i7135[35], i7135[36], i7135[37] )
  i7134.scale = new pc.Vec3( i7135[38], i7135[39], i7135[40] )
  return i7134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7136 = root || new pc.ParticleSystemSizeBySpeed()
  var i7137 = data
  i7136.enabled = !!i7137[0]
  i7136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7137[1], i7136.x)
  i7136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7137[2], i7136.y)
  i7136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7137[3], i7136.z)
  i7136.separateAxes = !!i7137[4]
  i7136.range = new pc.Vec2( i7137[5], i7137[6] )
  return i7136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7138 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7139 = data
  i7138.enabled = !!i7139[0]
  i7138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7139[1], i7138.x)
  i7138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7139[2], i7138.y)
  i7138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7139[3], i7138.z)
  i7138.separateAxes = !!i7139[4]
  return i7138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7140 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7141 = data
  i7140.enabled = !!i7141[0]
  i7140.mode = i7141[1]
  i7140.animation = i7141[2]
  i7140.numTilesX = i7141[3]
  i7140.numTilesY = i7141[4]
  i7140.useRandomRow = !!i7141[5]
  i7140.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7141[6], i7140.frameOverTime)
  i7140.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7141[7], i7140.startFrame)
  i7140.cycleCount = i7141[8]
  i7140.rowIndex = i7141[9]
  i7140.flipU = i7141[10]
  i7140.flipV = i7141[11]
  i7140.spriteCount = i7141[12]
  var i7143 = i7141[13]
  var i7142 = []
  for(var i = 0; i < i7143.length; i += 2) {
  request.r(i7143[i + 0], i7143[i + 1], 2, i7142, '')
  }
  i7140.sprites = i7142
  return i7140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7146 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7147 = data
  i7146.enabled = !!i7147[0]
  i7146.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[1], i7146.x)
  i7146.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[2], i7146.y)
  i7146.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[3], i7146.z)
  i7146.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[4], i7146.radial)
  i7146.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[5], i7146.speedModifier)
  i7146.space = i7147[6]
  i7146.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[7], i7146.orbitalX)
  i7146.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[8], i7146.orbitalY)
  i7146.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[9], i7146.orbitalZ)
  i7146.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[10], i7146.orbitalOffsetX)
  i7146.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[11], i7146.orbitalOffsetY)
  i7146.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7147[12], i7146.orbitalOffsetZ)
  return i7146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7148 = root || new pc.ParticleSystemNoise()
  var i7149 = data
  i7148.enabled = !!i7149[0]
  i7148.separateAxes = !!i7149[1]
  i7148.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[2], i7148.strengthX)
  i7148.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[3], i7148.strengthY)
  i7148.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[4], i7148.strengthZ)
  i7148.frequency = i7149[5]
  i7148.damping = !!i7149[6]
  i7148.octaveCount = i7149[7]
  i7148.octaveMultiplier = i7149[8]
  i7148.octaveScale = i7149[9]
  i7148.quality = i7149[10]
  i7148.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[11], i7148.scrollSpeed)
  i7148.scrollSpeedMultiplier = i7149[12]
  i7148.remapEnabled = !!i7149[13]
  i7148.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[14], i7148.remapX)
  i7148.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[15], i7148.remapY)
  i7148.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[16], i7148.remapZ)
  i7148.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[17], i7148.positionAmount)
  i7148.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[18], i7148.rotationAmount)
  i7148.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7149[19], i7148.sizeAmount)
  return i7148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7150 = root || new pc.ParticleSystemInheritVelocity()
  var i7151 = data
  i7150.enabled = !!i7151[0]
  i7150.mode = i7151[1]
  i7150.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7151[2], i7150.curve)
  return i7150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7152 = root || new pc.ParticleSystemForceOverLifetime()
  var i7153 = data
  i7152.enabled = !!i7153[0]
  i7152.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7153[1], i7152.x)
  i7152.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7153[2], i7152.y)
  i7152.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7153[3], i7152.z)
  i7152.space = i7153[4]
  i7152.randomized = !!i7153[5]
  return i7152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7154 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7155 = data
  i7154.enabled = !!i7155[0]
  i7154.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7155[1], i7154.limit)
  i7154.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7155[2], i7154.limitX)
  i7154.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7155[3], i7154.limitY)
  i7154.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7155[4], i7154.limitZ)
  i7154.dampen = i7155[5]
  i7154.separateAxes = !!i7155[6]
  i7154.space = i7155[7]
  i7154.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7155[8], i7154.drag)
  i7154.multiplyDragByParticleSize = !!i7155[9]
  i7154.multiplyDragByParticleVelocity = !!i7155[10]
  return i7154
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i7156 = root || request.c( 'StarExploreFX' )
  var i7157 = data
  request.r(i7157[0], i7157[1], 0, i7156, 'tf')
  return i7156
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i7158 = root || request.c( 'ProgressBar' )
  var i7159 = data
  request.r(i7159[0], i7159[1], 0, i7158, 'fillTransform')
  request.r(i7159[2], i7159[3], 0, i7158, 'tf')
  return i7158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7161 = data
  i7160.pivot = new pc.Vec2( i7161[0], i7161[1] )
  i7160.anchorMin = new pc.Vec2( i7161[2], i7161[3] )
  i7160.anchorMax = new pc.Vec2( i7161[4], i7161[5] )
  i7160.sizeDelta = new pc.Vec2( i7161[6], i7161[7] )
  i7160.anchoredPosition3D = new pc.Vec3( i7161[8], i7161[9], i7161[10] )
  i7160.rotation = new pc.Quat(i7161[11], i7161[12], i7161[13], i7161[14])
  i7160.scale = new pc.Vec3( i7161[15], i7161[16], i7161[17] )
  return i7160
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i7162 = root || request.c( 'ClockTimer' )
  var i7163 = data
  request.r(i7163[0], i7163[1], 0, i7162, 'fillImage')
  request.r(i7163[2], i7163[3], 0, i7162, 'tf')
  i7162.spawnZoomDuration = i7163[4]
  i7162.despawnZoomDuration = i7163[5]
  return i7162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7165 = data
  i7164.cullTransparentMesh = !!i7165[0]
  return i7164
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7166 = root || request.c( 'UnityEngine.UI.Image' )
  var i7167 = data
  request.r(i7167[0], i7167[1], 0, i7166, 'm_Sprite')
  i7166.m_Type = i7167[2]
  i7166.m_PreserveAspect = !!i7167[3]
  i7166.m_FillCenter = !!i7167[4]
  i7166.m_FillMethod = i7167[5]
  i7166.m_FillAmount = i7167[6]
  i7166.m_FillClockwise = !!i7167[7]
  i7166.m_FillOrigin = i7167[8]
  i7166.m_UseSpriteMesh = !!i7167[9]
  i7166.m_PixelsPerUnitMultiplier = i7167[10]
  request.r(i7167[11], i7167[12], 0, i7166, 'm_Material')
  i7166.m_Maskable = !!i7167[13]
  i7166.m_Color = new pc.Color(i7167[14], i7167[15], i7167[16], i7167[17])
  i7166.m_RaycastTarget = !!i7167[18]
  i7166.m_RaycastPadding = new pc.Vec4( i7167[19], i7167[20], i7167[21], i7167[22] )
  return i7166
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i7168 = root || request.c( 'FlourSmoke' )
  var i7169 = data
  request.r(i7169[0], i7169[1], 0, i7168, 'tf')
  return i7168
}

Deserializers["Duck"] = function (request, data, root) {
  var i7170 = root || request.c( 'Duck' )
  var i7171 = data
  request.r(i7171[0], i7171[1], 0, i7170, 'tf')
  return i7170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7173 = data
  i7172.name = i7173[0]
  i7172.halfPrecision = !!i7173[1]
  i7172.useSimplification = !!i7173[2]
  i7172.useUInt32IndexFormat = !!i7173[3]
  i7172.vertexCount = i7173[4]
  i7172.aabb = i7173[5]
  var i7175 = i7173[6]
  var i7174 = []
  for(var i = 0; i < i7175.length; i += 1) {
    i7174.push( !!i7175[i + 0] );
  }
  i7172.streams = i7174
  i7172.vertices = i7173[7]
  var i7177 = i7173[8]
  var i7176 = []
  for(var i = 0; i < i7177.length; i += 1) {
    i7176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7177[i + 0]) );
  }
  i7172.subMeshes = i7176
  var i7179 = i7173[9]
  var i7178 = []
  for(var i = 0; i < i7179.length; i += 16) {
    i7178.push( new pc.Mat4().setData(i7179[i + 0], i7179[i + 1], i7179[i + 2], i7179[i + 3],  i7179[i + 4], i7179[i + 5], i7179[i + 6], i7179[i + 7],  i7179[i + 8], i7179[i + 9], i7179[i + 10], i7179[i + 11],  i7179[i + 12], i7179[i + 13], i7179[i + 14], i7179[i + 15]) );
  }
  i7172.bindposes = i7178
  var i7181 = i7173[10]
  var i7180 = []
  for(var i = 0; i < i7181.length; i += 1) {
    i7180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7181[i + 0]) );
  }
  i7172.blendShapes = i7180
  return i7172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7187 = data
  i7186.triangles = i7187[0]
  return i7186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7193 = data
  i7192.name = i7193[0]
  var i7195 = i7193[1]
  var i7194 = []
  for(var i = 0; i < i7195.length; i += 1) {
    i7194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7195[i + 0]) );
  }
  i7192.frames = i7194
  return i7192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7197 = data
  i7196.name = i7197[0]
  i7196.index = i7197[1]
  i7196.startup = !!i7197[2]
  return i7196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7199 = data
  i7198.planeDistance = i7199[0]
  i7198.referencePixelsPerUnit = i7199[1]
  i7198.isFallbackOverlay = !!i7199[2]
  i7198.renderMode = i7199[3]
  i7198.renderOrder = i7199[4]
  i7198.sortingLayerName = i7199[5]
  i7198.sortingOrder = i7199[6]
  i7198.scaleFactor = i7199[7]
  request.r(i7199[8], i7199[9], 0, i7198, 'worldCamera')
  i7198.overrideSorting = !!i7199[10]
  i7198.pixelPerfect = !!i7199[11]
  i7198.targetDisplay = i7199[12]
  i7198.overridePixelPerfect = !!i7199[13]
  i7198.enabled = !!i7199[14]
  return i7198
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7200 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7201 = data
  i7200.m_UiScaleMode = i7201[0]
  i7200.m_ReferencePixelsPerUnit = i7201[1]
  i7200.m_ScaleFactor = i7201[2]
  i7200.m_ReferenceResolution = new pc.Vec2( i7201[3], i7201[4] )
  i7200.m_ScreenMatchMode = i7201[5]
  i7200.m_MatchWidthOrHeight = i7201[6]
  i7200.m_PhysicalUnit = i7201[7]
  i7200.m_FallbackScreenDPI = i7201[8]
  i7200.m_DefaultSpriteDPI = i7201[9]
  i7200.m_DynamicPixelsPerUnit = i7201[10]
  i7200.m_PresetInfoIsWorld = !!i7201[11]
  return i7200
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7202 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7203 = data
  i7202.m_IgnoreReversedGraphics = !!i7203[0]
  i7202.m_BlockingObjects = i7203[1]
  i7202.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7203[2] )
  return i7202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7205 = data
  request.r(i7205[0], i7205[1], 0, i7204, 'animatorController')
  request.r(i7205[2], i7205[3], 0, i7204, 'avatar')
  i7204.updateMode = i7205[4]
  i7204.hasTransformHierarchy = !!i7205[5]
  i7204.applyRootMotion = !!i7205[6]
  var i7207 = i7205[7]
  var i7206 = []
  for(var i = 0; i < i7207.length; i += 2) {
  request.r(i7207[i + 0], i7207[i + 1], 2, i7206, '')
  }
  i7204.humanBones = i7206
  i7204.enabled = !!i7205[8]
  return i7204
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7210 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7211 = data
  i7210.m_hasFontAssetChanged = !!i7211[0]
  request.r(i7211[1], i7211[2], 0, i7210, 'm_baseMaterial')
  i7210.m_maskOffset = new pc.Vec4( i7211[3], i7211[4], i7211[5], i7211[6] )
  i7210.m_text = i7211[7]
  i7210.m_isRightToLeft = !!i7211[8]
  request.r(i7211[9], i7211[10], 0, i7210, 'm_fontAsset')
  request.r(i7211[11], i7211[12], 0, i7210, 'm_sharedMaterial')
  var i7213 = i7211[13]
  var i7212 = []
  for(var i = 0; i < i7213.length; i += 2) {
  request.r(i7213[i + 0], i7213[i + 1], 2, i7212, '')
  }
  i7210.m_fontSharedMaterials = i7212
  request.r(i7211[14], i7211[15], 0, i7210, 'm_fontMaterial')
  var i7215 = i7211[16]
  var i7214 = []
  for(var i = 0; i < i7215.length; i += 2) {
  request.r(i7215[i + 0], i7215[i + 1], 2, i7214, '')
  }
  i7210.m_fontMaterials = i7214
  i7210.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7211[17], i7211[18], i7211[19], i7211[20])
  i7210.m_fontColor = new pc.Color(i7211[21], i7211[22], i7211[23], i7211[24])
  i7210.m_enableVertexGradient = !!i7211[25]
  i7210.m_colorMode = i7211[26]
  i7210.m_fontColorGradient = request.d('TMPro.VertexGradient', i7211[27], i7210.m_fontColorGradient)
  request.r(i7211[28], i7211[29], 0, i7210, 'm_fontColorGradientPreset')
  request.r(i7211[30], i7211[31], 0, i7210, 'm_spriteAsset')
  i7210.m_tintAllSprites = !!i7211[32]
  request.r(i7211[33], i7211[34], 0, i7210, 'm_StyleSheet')
  i7210.m_TextStyleHashCode = i7211[35]
  i7210.m_overrideHtmlColors = !!i7211[36]
  i7210.m_faceColor = UnityEngine.Color32.ConstructColor(i7211[37], i7211[38], i7211[39], i7211[40])
  i7210.m_fontSize = i7211[41]
  i7210.m_fontSizeBase = i7211[42]
  i7210.m_fontWeight = i7211[43]
  i7210.m_enableAutoSizing = !!i7211[44]
  i7210.m_fontSizeMin = i7211[45]
  i7210.m_fontSizeMax = i7211[46]
  i7210.m_fontStyle = i7211[47]
  i7210.m_HorizontalAlignment = i7211[48]
  i7210.m_VerticalAlignment = i7211[49]
  i7210.m_textAlignment = i7211[50]
  i7210.m_characterSpacing = i7211[51]
  i7210.m_wordSpacing = i7211[52]
  i7210.m_lineSpacing = i7211[53]
  i7210.m_lineSpacingMax = i7211[54]
  i7210.m_paragraphSpacing = i7211[55]
  i7210.m_charWidthMaxAdj = i7211[56]
  i7210.m_TextWrappingMode = i7211[57]
  i7210.m_wordWrappingRatios = i7211[58]
  i7210.m_overflowMode = i7211[59]
  request.r(i7211[60], i7211[61], 0, i7210, 'm_linkedTextComponent')
  request.r(i7211[62], i7211[63], 0, i7210, 'parentLinkedComponent')
  i7210.m_enableKerning = !!i7211[64]
  var i7217 = i7211[65]
  var i7216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7217.length; i += 1) {
    i7216.add(i7217[i + 0]);
  }
  i7210.m_ActiveFontFeatures = i7216
  i7210.m_enableExtraPadding = !!i7211[66]
  i7210.checkPaddingRequired = !!i7211[67]
  i7210.m_isRichText = !!i7211[68]
  i7210.m_parseCtrlCharacters = !!i7211[69]
  i7210.m_isOrthographic = !!i7211[70]
  i7210.m_isCullingEnabled = !!i7211[71]
  i7210.m_horizontalMapping = i7211[72]
  i7210.m_verticalMapping = i7211[73]
  i7210.m_uvLineOffset = i7211[74]
  i7210.m_geometrySortingOrder = i7211[75]
  i7210.m_IsTextObjectScaleStatic = !!i7211[76]
  i7210.m_VertexBufferAutoSizeReduction = !!i7211[77]
  i7210.m_useMaxVisibleDescender = !!i7211[78]
  i7210.m_pageToDisplay = i7211[79]
  i7210.m_margin = new pc.Vec4( i7211[80], i7211[81], i7211[82], i7211[83] )
  i7210.m_isUsingLegacyAnimationComponent = !!i7211[84]
  i7210.m_isVolumetricText = !!i7211[85]
  request.r(i7211[86], i7211[87], 0, i7210, 'm_Material')
  i7210.m_EmojiFallbackSupport = !!i7211[88]
  i7210.m_Maskable = !!i7211[89]
  i7210.m_Color = new pc.Color(i7211[90], i7211[91], i7211[92], i7211[93])
  i7210.m_RaycastTarget = !!i7211[94]
  i7210.m_RaycastPadding = new pc.Vec4( i7211[95], i7211[96], i7211[97], i7211[98] )
  return i7210
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7218 = root || request.c( 'TMPro.VertexGradient' )
  var i7219 = data
  i7218.topLeft = new pc.Color(i7219[0], i7219[1], i7219[2], i7219[3])
  i7218.topRight = new pc.Color(i7219[4], i7219[5], i7219[6], i7219[7])
  i7218.bottomLeft = new pc.Color(i7219[8], i7219[9], i7219[10], i7219[11])
  i7218.bottomRight = new pc.Color(i7219[12], i7219[13], i7219[14], i7219[15])
  return i7218
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7222 = root || request.c( 'UnityEngine.UI.Button' )
  var i7223 = data
  i7222.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7223[0], i7222.m_OnClick)
  i7222.m_Navigation = request.d('UnityEngine.UI.Navigation', i7223[1], i7222.m_Navigation)
  i7222.m_Transition = i7223[2]
  i7222.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7223[3], i7222.m_Colors)
  i7222.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7223[4], i7222.m_SpriteState)
  i7222.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7223[5], i7222.m_AnimationTriggers)
  i7222.m_Interactable = !!i7223[6]
  request.r(i7223[7], i7223[8], 0, i7222, 'm_TargetGraphic')
  return i7222
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7224 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7225 = data
  i7224.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7225[0], i7224.m_PersistentCalls)
  return i7224
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7226 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7227 = data
  var i7229 = i7227[0]
  var i7228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7229.length; i += 1) {
    i7228.add(request.d('UnityEngine.Events.PersistentCall', i7229[i + 0]));
  }
  i7226.m_Calls = i7228
  return i7226
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7232 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7233 = data
  request.r(i7233[0], i7233[1], 0, i7232, 'm_Target')
  i7232.m_TargetAssemblyTypeName = i7233[2]
  i7232.m_MethodName = i7233[3]
  i7232.m_Mode = i7233[4]
  i7232.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7233[5], i7232.m_Arguments)
  i7232.m_CallState = i7233[6]
  return i7232
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7234 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7235 = data
  request.r(i7235[0], i7235[1], 0, i7234, 'm_ObjectArgument')
  i7234.m_ObjectArgumentAssemblyTypeName = i7235[2]
  i7234.m_IntArgument = i7235[3]
  i7234.m_FloatArgument = i7235[4]
  i7234.m_StringArgument = i7235[5]
  i7234.m_BoolArgument = !!i7235[6]
  return i7234
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7236 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7237 = data
  i7236.m_Mode = i7237[0]
  i7236.m_WrapAround = !!i7237[1]
  request.r(i7237[2], i7237[3], 0, i7236, 'm_SelectOnUp')
  request.r(i7237[4], i7237[5], 0, i7236, 'm_SelectOnDown')
  request.r(i7237[6], i7237[7], 0, i7236, 'm_SelectOnLeft')
  request.r(i7237[8], i7237[9], 0, i7236, 'm_SelectOnRight')
  return i7236
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7238 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7239 = data
  i7238.m_NormalColor = new pc.Color(i7239[0], i7239[1], i7239[2], i7239[3])
  i7238.m_HighlightedColor = new pc.Color(i7239[4], i7239[5], i7239[6], i7239[7])
  i7238.m_PressedColor = new pc.Color(i7239[8], i7239[9], i7239[10], i7239[11])
  i7238.m_SelectedColor = new pc.Color(i7239[12], i7239[13], i7239[14], i7239[15])
  i7238.m_DisabledColor = new pc.Color(i7239[16], i7239[17], i7239[18], i7239[19])
  i7238.m_ColorMultiplier = i7239[20]
  i7238.m_FadeDuration = i7239[21]
  return i7238
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7240 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7241 = data
  request.r(i7241[0], i7241[1], 0, i7240, 'm_HighlightedSprite')
  request.r(i7241[2], i7241[3], 0, i7240, 'm_PressedSprite')
  request.r(i7241[4], i7241[5], 0, i7240, 'm_SelectedSprite')
  request.r(i7241[6], i7241[7], 0, i7240, 'm_DisabledSprite')
  return i7240
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7242 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7243 = data
  i7242.m_NormalTrigger = i7243[0]
  i7242.m_HighlightedTrigger = i7243[1]
  i7242.m_PressedTrigger = i7243[2]
  i7242.m_SelectedTrigger = i7243[3]
  i7242.m_DisabledTrigger = i7243[4]
  return i7242
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i7244 = root || request.c( 'Ply_Pool' )
  var i7245 = data
  var i7247 = i7245[0]
  var i7246 = []
  for(var i = 0; i < i7247.length; i += 1) {
    i7246.push( request.d('Ply_Pool+PoolAmount', i7247[i + 0]) );
  }
  i7244.poolAmounts = i7246
  request.r(i7245[1], i7245[2], 0, i7244, 'poolHolder')
  return i7244
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i7250 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i7251 = data
  i7250.type = i7251[0]
  i7250.amount = i7251[1]
  request.r(i7251[2], i7251[3], 0, i7250, 'gameUnit')
  return i7250
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i7252 = root || request.c( 'Ply_SoundManager' )
  var i7253 = data
  var i7255 = i7253[0]
  var i7254 = []
  for(var i = 0; i < i7255.length; i += 1) {
    i7254.push( request.d('Ply_SoundManager+FxAudio', i7255[i + 0]) );
  }
  i7252.fxAudios = i7254
  var i7257 = i7253[1]
  var i7256 = []
  for(var i = 0; i < i7257.length; i += 2) {
  request.r(i7257[i + 0], i7257[i + 1], 2, i7256, '')
  }
  i7252.audioClips = i7256
  request.r(i7253[2], i7253[3], 0, i7252, 'sound')
  return i7252
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i7260 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i7261 = data
  i7260.fxType = i7261[0]
  request.r(i7261[1], i7261[2], 0, i7260, 'audioClip')
  return i7260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7265 = data
  request.r(i7265[0], i7265[1], 0, i7264, 'clip')
  request.r(i7265[2], i7265[3], 0, i7264, 'outputAudioMixerGroup')
  i7264.playOnAwake = !!i7265[4]
  i7264.loop = !!i7265[5]
  i7264.time = i7265[6]
  i7264.volume = i7265[7]
  i7264.pitch = i7265[8]
  i7264.enabled = !!i7265[9]
  return i7264
}

Deserializers["GameManager"] = function (request, data, root) {
  var i7266 = root || request.c( 'GameManager' )
  var i7267 = data
  i7266.isPlaying = !!i7267[0]
  i7266.isTutorial = !!i7267[1]
  i7266.isGotoStore = !!i7267[2]
  i7266.isLoseGame = !!i7267[3]
  i7266.countMove = i7267[4]
  i7266.currentLayer = i7267[5]
  return i7266
}

Deserializers["UIManager"] = function (request, data, root) {
  var i7268 = root || request.c( 'UIManager' )
  var i7269 = data
  request.r(i7269[0], i7269[1], 0, i7268, 'winUI')
  request.r(i7269[2], i7269[3], 0, i7268, 'loseUI')
  request.r(i7269[4], i7269[5], 0, i7268, 'tutorial')
  request.r(i7269[6], i7269[7], 0, i7268, 'verticalUI')
  request.r(i7269[8], i7269[9], 0, i7268, 'horizontalUI')
  request.r(i7269[10], i7269[11], 0, i7268, 'downloadBtn')
  i7268.screenWidth = i7269[12]
  i7268.screenHeight = i7269[13]
  i7268.scaleHeightOnWidth = i7269[14]
  i7268.isVertical = !!i7269[15]
  request.r(i7269[16], i7269[17], 0, i7268, 'cam')
  i7268.verticalUIHeightOnWidthRatio = i7269[18]
  i7268.scaleCameraOnValidate = !!i7269[19]
  i7268.useContinuousScaling = !!i7269[20]
  i7268.baseOrthographicSize = i7269[21]
  i7268.baseAspect = i7269[22]
  i7268.landscapeSizeRatio = i7269[23]
  i7268.defaultPortraitSizeRatio = i7269[24]
  var i7271 = i7269[25]
  var i7270 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i7271.length; i += 1) {
    i7270.add(request.d('ScreenScaleStep', i7271[i + 0]));
  }
  i7268.discreteScaleSteps = i7270
  i7268.usePerspectiveCamera = !!i7269[26]
  request.r(i7269[27], i7269[28], 0, i7268, 'perspectiveFocus')
  i7268.perspectiveFocusDistance = i7269[29]
  i7268.perspectivePadding = i7269[30]
  i7268.fitRendererBounds = !!i7269[31]
  request.r(i7269[32], i7269[33], 0, i7268, 'boundsRoot')
  var i7273 = i7269[34]
  var i7272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i7273.length; i += 2) {
  request.r(i7273[i + 0], i7273[i + 1], 1, i7272, '')
  }
  i7268.boundsRenderers = i7272
  return i7268
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i7276 = root || request.c( 'ScreenScaleStep' )
  var i7277 = data
  i7276.heightOnWidthRatio = i7277[0]
  i7276.orthographicSize = i7277[1]
  return i7276
}

Deserializers["InputManager"] = function (request, data, root) {
  var i7280 = root || request.c( 'InputManager' )
  var i7281 = data
  i7280.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i7281[0] )
  i7280.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i7281[1] )
  i7280.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i7281[2] )
  i7280.isDragging = !!i7281[3]
  return i7280
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i7282 = root || request.c( 'PhaseManager' )
  var i7283 = data
  var i7285 = i7283[0]
  var i7284 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i7285.length; i += 1) {
    i7284.add(request.d('PhaseData', i7285[i + 0]));
  }
  i7282.phases = i7284
  i7282.delayBeforeNextPhase = i7283[1]
  i7282.transitionMoveDuration = i7283[2]
  i7282.backgroundFadeInDuration = i7283[3]
  i7282.backgroundFadeOutDuration = i7283[4]
  i7282.transitionMoveEase = i7283[5]
  i7282.backgroundFadeEase = i7283[6]
  request.r(i7283[7], i7283[8], 0, i7282, 'transitionObject')
  request.r(i7283[9], i7283[10], 0, i7282, 'transitionStartPos')
  request.r(i7283[11], i7283[12], 0, i7282, 'transitionEndPos')
  request.r(i7283[13], i7283[14], 0, i7282, 'transitionBackground')
  i7282.currentPhaseIndex = i7283[15]
  i7282.currentStepCount = i7283[16]
  return i7282
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i7288 = root || request.c( 'PhaseData' )
  var i7289 = data
  request.r(i7289[0], i7289[1], 0, i7288, 'phaseObject')
  i7288.totalSteps = i7289[2]
  i7288.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i7289[3], i7288.onPhaseReady)
  return i7288
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7290 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7291 = data
  i7290.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7291[0], i7290.m_PersistentCalls)
  return i7290
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i7292 = root || request.c( 'HandTutManager' )
  var i7293 = data
  var i7295 = i7293[0]
  var i7294 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7295.length; i += 2) {
  request.r(i7295[i + 0], i7295[i + 1], 1, i7294, '')
  }
  i7292.items = i7294
  request.r(i7293[1], i7293[2], 0, i7292, 'knife')
  request.r(i7293[3], i7293[4], 0, i7292, 'handTutObject')
  request.r(i7293[5], i7293[6], 0, i7292, 'tapToCookObject')
  request.r(i7293[7], i7293[8], 0, i7292, 'oilItem')
  request.r(i7293[9], i7293[10], 0, i7292, 'stoveToggleEvent')
  i7292.idleDelay = i7293[11]
  i7292.moveDuration = i7293[12]
  i7292.dragFadeDuration = i7293[13]
  i7292.clickScaleDuration = i7293[14]
  i7292.waitAtEndDuration = i7293[15]
  i7292.stirLoopDuration = i7293[16]
  i7292.handZPosition = i7293[17]
  i7292.clickScaleMultiplier = i7293[18]
  i7292.moveEase = i7293[19]
  return i7292
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i7298 = root || request.c( 'SortChildByZPos' )
  var i7299 = data
  request.r(i7299[0], i7299[1], 0, i7298, 'transformToSort')
  var i7301 = i7299[2]
  var i7300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7301.length; i += 2) {
  request.r(i7301[i + 0], i7301[i + 1], 1, i7300, '')
  }
  i7298.childrenToSort = i7300
  i7298.zOffset = i7299[3]
  i7298.baseZ = i7299[4]
  return i7298
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i7304 = root || request.c( 'DuckManager' )
  var i7305 = data
  var i7307 = i7305[0]
  var i7306 = []
  for(var i = 0; i < i7307.length; i += 2) {
  request.r(i7307[i + 0], i7307[i + 1], 2, i7306, '')
  }
  i7304.leftPoints = i7306
  var i7309 = i7305[1]
  var i7308 = []
  for(var i = 0; i < i7309.length; i += 2) {
  request.r(i7309[i + 0], i7309[i + 1], 2, i7308, '')
  }
  i7304.rightPoints = i7308
  i7304.minSpawnInterval = i7305[2]
  i7304.maxSpawnInterval = i7305[3]
  i7304.moveSpeed = i7305[4]
  i7304.duckSoundChance = i7305[5]
  return i7304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7311 = data
  i7310.aspect = i7311[0]
  i7310.orthographic = !!i7311[1]
  i7310.orthographicSize = i7311[2]
  i7310.backgroundColor = new pc.Color(i7311[3], i7311[4], i7311[5], i7311[6])
  i7310.nearClipPlane = i7311[7]
  i7310.farClipPlane = i7311[8]
  i7310.fieldOfView = i7311[9]
  i7310.depth = i7311[10]
  i7310.clearFlags = i7311[11]
  i7310.cullingMask = i7311[12]
  i7310.rect = i7311[13]
  request.r(i7311[14], i7311[15], 0, i7310, 'targetTexture')
  i7310.usePhysicalProperties = !!i7311[16]
  i7310.focalLength = i7311[17]
  i7310.sensorSize = new pc.Vec2( i7311[18], i7311[19] )
  i7310.lensShift = new pc.Vec2( i7311[20], i7311[21] )
  i7310.gateFit = i7311[22]
  i7310.commandBufferCount = i7311[23]
  i7310.cameraType = i7311[24]
  i7310.enabled = !!i7311[25]
  return i7310
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7312 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7313 = data
  request.r(i7313[0], i7313[1], 0, i7312, 'm_FirstSelected')
  i7312.m_sendNavigationEvents = !!i7313[2]
  i7312.m_DragThreshold = i7313[3]
  return i7312
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7314 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7315 = data
  i7314.m_HorizontalAxis = i7315[0]
  i7314.m_VerticalAxis = i7315[1]
  i7314.m_SubmitButton = i7315[2]
  i7314.m_CancelButton = i7315[3]
  i7314.m_InputActionsPerSecond = i7315[4]
  i7314.m_RepeatDelay = i7315[5]
  i7314.m_ForceModuleActive = !!i7315[6]
  i7314.m_SendPointerHoverToParent = !!i7315[7]
  return i7314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i7316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i7317 = data
  i7316.center = new pc.Vec3( i7317[0], i7317[1], i7317[2] )
  i7316.radius = i7317[3]
  i7316.enabled = !!i7317[4]
  i7316.isTrigger = !!i7317[5]
  request.r(i7317[6], i7317[7], 0, i7316, 'material')
  return i7316
}

Deserializers["Item"] = function (request, data, root) {
  var i7318 = root || request.c( 'Item' )
  var i7319 = data
  i7318.isDone = !!i7319[0]
  i7318.onProcess = !!i7319[1]
  request.r(i7319[2], i7319[3], 0, i7318, 'itemDraggable')
  request.r(i7319[4], i7319[5], 0, i7318, 'itemClickable')
  request.r(i7319[6], i7319[7], 0, i7318, 'itemStirring')
  request.r(i7319[8], i7319[9], 0, i7318, 'itemKnifeSpriteMaskCutter')
  request.r(i7319[10], i7319[11], 0, i7318, 'itemSpriteMaskPainter')
  request.r(i7319[12], i7319[13], 0, i7318, 'itemMoveToTarget')
  request.r(i7319[14], i7319[15], 0, i7318, 'animator')
  i7318.itemType = i7319[16]
  request.r(i7319[17], i7319[18], 0, i7318, 'spriteRenderer')
  i7318.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7319[19], i7318.onKnifeIn)
  i7318.heartEffectScale = i7319[20]
  i7318.playMoveToTargetFinishSound = !!i7319[21]
  i7318.moveToTargetFinishFxType = i7319[22]
  return i7318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7321 = data
  request.r(i7321[0], i7321[1], 0, i7320, 'sharedMesh')
  return i7320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7323 = data
  request.r(i7323[0], i7323[1], 0, i7322, 'additionalVertexStreams')
  i7322.enabled = !!i7323[2]
  request.r(i7323[3], i7323[4], 0, i7322, 'sharedMaterial')
  var i7325 = i7323[5]
  var i7324 = []
  for(var i = 0; i < i7325.length; i += 2) {
  request.r(i7325[i + 0], i7325[i + 1], 2, i7324, '')
  }
  i7322.sharedMaterials = i7324
  i7322.receiveShadows = !!i7323[6]
  i7322.shadowCastingMode = i7323[7]
  i7322.sortingLayerID = i7323[8]
  i7322.sortingOrder = i7323[9]
  i7322.lightmapIndex = i7323[10]
  i7322.lightmapSceneIndex = i7323[11]
  i7322.lightmapScaleOffset = new pc.Vec4( i7323[12], i7323[13], i7323[14], i7323[15] )
  i7322.lightProbeUsage = i7323[16]
  i7322.reflectionProbeUsage = i7323[17]
  return i7322
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i7326 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i7327 = data
  i7326.loop = !!i7327[0]
  i7326.timeScale = i7327[1]
  request.r(i7327[2], i7327[3], 0, i7326, 'skeletonDataAsset')
  i7326.initialSkinName = i7327[4]
  i7326.fixPrefabOverrideViaMeshFilter = i7327[5]
  i7326.initialFlipX = !!i7327[6]
  i7326.initialFlipY = !!i7327[7]
  i7326.updateWhenInvisible = i7327[8]
  i7326.zSpacing = i7327[9]
  i7326.useClipping = !!i7327[10]
  i7326.immutableTriangles = !!i7327[11]
  i7326.pmaVertexColors = !!i7327[12]
  i7326.clearStateOnDisable = !!i7327[13]
  i7326.tintBlack = !!i7327[14]
  i7326.singleSubmesh = !!i7327[15]
  i7326.fixDrawOrder = !!i7327[16]
  i7326.addNormals = !!i7327[17]
  i7326.calculateTangents = !!i7327[18]
  i7326.maskInteraction = i7327[19]
  i7326.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7327[20], i7326.maskMaterials)
  i7326.disableRenderingOnOverride = !!i7327[21]
  i7326._animationName = i7327[22]
  var i7329 = i7327[23]
  var i7328 = []
  for(var i = 0; i < i7329.length; i += 1) {
    i7328.push( i7329[i + 0] );
  }
  i7326.separatorSlotNames = i7328
  return i7326
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7330 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7331 = data
  var i7333 = i7331[0]
  var i7332 = []
  for(var i = 0; i < i7333.length; i += 2) {
  request.r(i7333[i + 0], i7333[i + 1], 2, i7332, '')
  }
  i7330.materialsMaskDisabled = i7332
  var i7335 = i7331[1]
  var i7334 = []
  for(var i = 0; i < i7335.length; i += 2) {
  request.r(i7335[i + 0], i7335[i + 1], 2, i7334, '')
  }
  i7330.materialsInsideMask = i7334
  var i7337 = i7331[2]
  var i7336 = []
  for(var i = 0; i < i7337.length; i += 2) {
  request.r(i7337[i + 0], i7337[i + 1], 2, i7336, '')
  }
  i7330.materialsOutsideMask = i7336
  return i7330
}

Deserializers["ContinuousRotation"] = function (request, data, root) {
  var i7340 = root || request.c( 'ContinuousRotation' )
  var i7341 = data
  i7340.rotationAxis = new pc.Vec3( i7341[0], i7341[1], i7341[2] )
  i7340.degreesPerSecond = i7341[3]
  i7340.rotationSpace = i7341[4]
  i7340.useUnscaledTime = !!i7341[5]
  return i7340
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i7342 = root || request.c( 'Ply_ToggleEvent' )
  var i7343 = data
  i7342.isOn = !!i7343[0]
  i7342.applyStateOnEnable = !!i7343[1]
  i7342.applyStateOnClick = !!i7343[2]
  request.r(i7343[3], i7343[4], 0, i7342, 'targetObject')
  i7342.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i7343[5], i7342.onTurnOn)
  i7342.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i7343[6], i7342.onTurnOff)
  return i7342
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i7344 = root || request.c( 'ItemDraggable' )
  var i7345 = data
  i7344.isDraggable = !!i7345[0]
  request.r(i7345[1], i7345[2], 0, i7344, 'returnTransform')
  i7344.setParentToReturnTransform = !!i7345[3]
  i7344.returnToExactReturnTransformPosition = !!i7345[4]
  i7344.targetItemType = i7345[5]
  request.r(i7345[6], i7345[7], 0, i7344, 'item')
  i7344.checkState = !!i7345[8]
  request.r(i7345[9], i7345[10], 0, i7344, 'shadowObject')
  i7344.playReturnToStartFinishSound = !!i7345[11]
  i7344.returnToStartFinishFxType = i7345[12]
  i7344.spawnBreakHeartOnDropFail = !!i7345[13]
  i7344.liftOffset = i7345[14]
  i7344.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i7345[15], i7344.onBeginDrag)
  i7344.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i7345[16], i7344.onDropSuccess)
  i7344.onDropFail = request.d('UnityEngine.Events.UnityEvent', i7345[17], i7344.onDropFail)
  return i7344
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i7346 = root || request.c( 'ItemMoveToTarget' )
  var i7347 = data
  request.r(i7347[0], i7347[1], 0, i7346, 'defaultTarget')
  i7346.duration = i7347[2]
  i7346.easeType = i7347[3]
  i7346.moveType = i7347[4]
  i7346.jumpPower = i7347[5]
  i7346.numJumps = i7347[6]
  i7346.rotate360DuringJump = !!i7347[7]
  i7346.setParentToTarget = !!i7347[8]
  i7346.onComplete = request.d('UnityEngine.Events.UnityEvent', i7347[9], i7346.onComplete)
  i7346.lockInputWhileMoving = !!i7347[10]
  i7346.resetParentBeforeMove = !!i7347[11]
  return i7346
}

Deserializers["Salt"] = function (request, data, root) {
  var i7348 = root || request.c( 'Salt' )
  var i7349 = data
  request.r(i7349[0], i7349[1], 0, i7348, 'fishFillet')
  i7348.isDone = !!i7349[2]
  i7348.onProcess = !!i7349[3]
  request.r(i7349[4], i7349[5], 0, i7348, 'itemDraggable')
  request.r(i7349[6], i7349[7], 0, i7348, 'itemClickable')
  request.r(i7349[8], i7349[9], 0, i7348, 'itemStirring')
  request.r(i7349[10], i7349[11], 0, i7348, 'itemKnifeSpriteMaskCutter')
  request.r(i7349[12], i7349[13], 0, i7348, 'itemSpriteMaskPainter')
  request.r(i7349[14], i7349[15], 0, i7348, 'itemMoveToTarget')
  request.r(i7349[16], i7349[17], 0, i7348, 'animator')
  i7348.itemType = i7349[18]
  request.r(i7349[19], i7349[20], 0, i7348, 'spriteRenderer')
  i7348.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7349[21], i7348.onKnifeIn)
  i7348.heartEffectScale = i7349[22]
  i7348.playMoveToTargetFinishSound = !!i7349[23]
  i7348.moveToTargetFinishFxType = i7349[24]
  return i7348
}

Deserializers["EggBowl"] = function (request, data, root) {
  var i7350 = root || request.c( 'EggBowl' )
  var i7351 = data
  request.r(i7351[0], i7351[1], 0, i7350, 'spoon')
  request.r(i7351[2], i7351[3], 0, i7350, 'fishFillet')
  request.r(i7351[4], i7351[5], 0, i7350, 'fishDropParticle')
  i7350.fishDropParticleDuration = i7351[6]
  i7350.isDone = !!i7351[7]
  i7350.onProcess = !!i7351[8]
  request.r(i7351[9], i7351[10], 0, i7350, 'itemDraggable')
  request.r(i7351[11], i7351[12], 0, i7350, 'itemClickable')
  request.r(i7351[13], i7351[14], 0, i7350, 'itemStirring')
  request.r(i7351[15], i7351[16], 0, i7350, 'itemKnifeSpriteMaskCutter')
  request.r(i7351[17], i7351[18], 0, i7350, 'itemSpriteMaskPainter')
  request.r(i7351[19], i7351[20], 0, i7350, 'itemMoveToTarget')
  request.r(i7351[21], i7351[22], 0, i7350, 'animator')
  i7350.itemType = i7351[23]
  request.r(i7351[24], i7351[25], 0, i7350, 'spriteRenderer')
  i7350.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7351[26], i7350.onKnifeIn)
  i7350.heartEffectScale = i7351[27]
  i7350.playMoveToTargetFinishSound = !!i7351[28]
  i7350.moveToTargetFinishFxType = i7351[29]
  return i7350
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i7352 = root || request.c( 'ItemStirring' )
  var i7353 = data
  i7352.stirRadius = i7353[0]
  request.r(i7353[1], i7353[2], 0, i7352, 'stirrerTransform')
  request.r(i7353[3], i7353[4], 0, i7352, 'centerPoint')
  request.r(i7353[5], i7353[6], 0, i7352, 'targetAnimator')
  i7352.targetStateName = i7353[7]
  i7352.targetLayer = i7353[8]
  i7352.stoppedSpeed = i7353[9]
  i7352.minDragDistanceToAnimate = i7353[10]
  i7352.dragSpeedMultiplier = i7353[11]
  i7352.minAnimatorSpeed = i7353[12]
  i7352.maxAnimatorSpeed = i7353[13]
  i7352.speedBlendDuration = i7353[14]
  i7352.completeNormalizedTime = i7353[15]
  i7352.resetAnimationOnFirstBegin = !!i7353[16]
  var i7355 = i7353[17]
  var i7354 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i7355.length; i += 1) {
    i7354.add(request.d('StirMilestone', i7355[i + 0]));
  }
  i7352.milestones = i7354
  i7352.spawnProgressBarOnStir = !!i7353[18]
  request.r(i7353[19], i7353[20], 0, i7352, 'spawnProgressBarPoint')
  i7352.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i7353[21], i7352.onStirBegin)
  i7352.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i7353[22], i7352.onStirComplete)
  return i7352
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i7358 = root || request.c( 'StirMilestone' )
  var i7359 = data
  i7358.distanceThreshold = i7359[0]
  i7358.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i7359[1], i7358.onMilestoneReached)
  i7358.isReached = !!i7359[2]
  return i7358
}

Deserializers["Pan"] = function (request, data, root) {
  var i7360 = root || request.c( 'Pan' )
  var i7361 = data
  request.r(i7361[0], i7361[1], 0, i7360, 'fryingFX')
  request.r(i7361[2], i7361[3], 0, i7360, 'oilObject')
  i7360.cakeFryDuration = i7361[4]
  i7360.isOilIn = !!i7361[5]
  i7360.isTurnOnStove = !!i7361[6]
  i7360.stoveShakeDelay = i7361[7]
  i7360.stoveShakeDuration = i7361[8]
  i7360.stoveShakeStrength = i7361[9]
  i7360.stoveShakeVibrato = i7361[10]
  i7360.isDone = !!i7361[11]
  i7360.onProcess = !!i7361[12]
  request.r(i7361[13], i7361[14], 0, i7360, 'itemDraggable')
  request.r(i7361[15], i7361[16], 0, i7360, 'itemClickable')
  request.r(i7361[17], i7361[18], 0, i7360, 'itemStirring')
  request.r(i7361[19], i7361[20], 0, i7360, 'itemKnifeSpriteMaskCutter')
  request.r(i7361[21], i7361[22], 0, i7360, 'itemSpriteMaskPainter')
  request.r(i7361[23], i7361[24], 0, i7360, 'itemMoveToTarget')
  request.r(i7361[25], i7361[26], 0, i7360, 'animator')
  i7360.itemType = i7361[27]
  request.r(i7361[28], i7361[29], 0, i7360, 'spriteRenderer')
  i7360.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7361[30], i7360.onKnifeIn)
  i7360.heartEffectScale = i7361[31]
  i7360.playMoveToTargetFinishSound = !!i7361[32]
  i7360.moveToTargetFinishFxType = i7361[33]
  return i7360
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i7362 = root || request.c( 'ItemClickable' )
  var i7363 = data
  i7362.requiredClicks = i7363[0]
  i7362.infiniteClick = !!i7363[1]
  i7362.canClick = !!i7363[2]
  i7362.disableAfterClick = !!i7363[3]
  i7362.onClick = request.d('UnityEngine.Events.UnityEvent', i7363[4], i7362.onClick)
  var i7365 = i7363[5]
  var i7364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i7365.length; i += 1) {
    i7364.add(request.d('UnityEngine.Events.UnityEvent', i7365[i + 0]));
  }
  i7362.sequentialOnClicks = i7364
  i7362.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i7363[6], i7362.onClickComplete)
  return i7362
}

Deserializers["Tray"] = function (request, data, root) {
  var i7368 = root || request.c( 'Tray' )
  var i7369 = data
  request.r(i7369[0], i7369[1], 0, i7368, 'fishFillet')
  i7368.isDone = !!i7369[2]
  i7368.onProcess = !!i7369[3]
  request.r(i7369[4], i7369[5], 0, i7368, 'itemDraggable')
  request.r(i7369[6], i7369[7], 0, i7368, 'itemClickable')
  request.r(i7369[8], i7369[9], 0, i7368, 'itemStirring')
  request.r(i7369[10], i7369[11], 0, i7368, 'itemKnifeSpriteMaskCutter')
  request.r(i7369[12], i7369[13], 0, i7368, 'itemSpriteMaskPainter')
  request.r(i7369[14], i7369[15], 0, i7368, 'itemMoveToTarget')
  request.r(i7369[16], i7369[17], 0, i7368, 'animator')
  i7368.itemType = i7369[18]
  request.r(i7369[19], i7369[20], 0, i7368, 'spriteRenderer')
  i7368.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7369[21], i7368.onKnifeIn)
  i7368.heartEffectScale = i7369[22]
  i7368.playMoveToTargetFinishSound = !!i7369[23]
  i7368.moveToTargetFinishFxType = i7369[24]
  return i7368
}

Deserializers["FishFillet"] = function (request, data, root) {
  var i7370 = root || request.c( 'FishFillet' )
  var i7371 = data
  i7370.currentStep = i7371[0]
  var i7373 = i7371[1]
  var i7372 = []
  for(var i = 0; i < i7373.length; i += 2) {
  request.r(i7373[i + 0], i7373[i + 1], 2, i7372, '')
  }
  i7370.moveTargets = i7372
  i7370.isSaltIn = !!i7371[2]
  i7370.isEggReady = !!i7371[3]
  request.r(i7371[4], i7371[5], 0, i7370, 'fishObject')
  var i7375 = i7371[6]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 2) {
  request.r(i7375[i + 0], i7375[i + 1], 2, i7374, '')
  }
  i7370.spriteRenderers = i7374
  var i7377 = i7371[7]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 2) {
  request.r(i7377[i + 0], i7377[i + 1], 2, i7376, '')
  }
  i7370.fishDoneRenderers = i7376
  request.r(i7371[8], i7371[9], 0, i7370, 'eggFish')
  request.r(i7371[10], i7371[11], 0, i7370, 'flourFish')
  request.r(i7371[12], i7371[13], 0, i7370, 'salt')
  request.r(i7371[14], i7371[15], 0, i7370, 'plate')
  request.r(i7371[16], i7371[17], 0, i7370, 'eggBowl')
  request.r(i7371[18], i7371[19], 0, i7370, 'flourBowl')
  request.r(i7371[20], i7371[21], 0, i7370, 'clockTimerPrefab')
  request.r(i7371[22], i7371[23], 0, i7370, 'clockSpawnPoint')
  i7370.cookDuration = i7371[24]
  i7370.readyZ = i7371[25]
  request.r(i7371[26], i7371[27], 0, i7370, 'pan')
  request.r(i7371[28], i7371[29], 0, i7370, 'spawnClockOnPan')
  i7370.panCookDuration = i7371[30]
  i7370.bobUseLocalMove = !!i7371[31]
  i7370.bobOffset = new pc.Vec3( i7371[32], i7371[33], i7371[34] )
  i7370.bobDuration = i7371[35]
  i7370.bobEase = i7371[36]
  i7370.returnDuration = i7371[37]
  i7370.returnEase = i7371[38]
  i7370.targetPunchScale = new pc.Vec3( i7371[39], i7371[40], i7371[41] )
  i7370.targetPunchDuration = i7371[42]
  i7370.targetPunchVibrato = i7371[43]
  i7370.targetPunchElasticity = i7371[44]
  i7370.flourJumpPower = i7371[45]
  i7370.flourJumpDuration = i7371[46]
  i7370.flourJumpOffsets = i7371[47]
  i7370.isDone = !!i7371[48]
  i7370.onProcess = !!i7371[49]
  request.r(i7371[50], i7371[51], 0, i7370, 'itemDraggable')
  request.r(i7371[52], i7371[53], 0, i7370, 'itemClickable')
  request.r(i7371[54], i7371[55], 0, i7370, 'itemStirring')
  request.r(i7371[56], i7371[57], 0, i7370, 'itemKnifeSpriteMaskCutter')
  request.r(i7371[58], i7371[59], 0, i7370, 'itemSpriteMaskPainter')
  request.r(i7371[60], i7371[61], 0, i7370, 'itemMoveToTarget')
  request.r(i7371[62], i7371[63], 0, i7370, 'animator')
  i7370.itemType = i7371[64]
  request.r(i7371[65], i7371[66], 0, i7370, 'spriteRenderer')
  i7370.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7371[67], i7370.onKnifeIn)
  i7370.heartEffectScale = i7371[68]
  i7370.playMoveToTargetFinishSound = !!i7371[69]
  i7370.moveToTargetFinishFxType = i7371[70]
  return i7370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i7380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i7381 = data
  i7380.frontSortingLayerID = i7381[0]
  i7380.frontSortingOrder = i7381[1]
  i7380.backSortingLayerID = i7381[2]
  i7380.backSortingOrder = i7381[3]
  i7380.alphaCutoff = i7381[4]
  request.r(i7381[5], i7381[6], 0, i7380, 'sprite')
  i7380.tileMode = i7381[7]
  i7380.isCustomRangeActive = !!i7381[8]
  i7380.spriteSortPoint = i7381[9]
  i7380.enabled = !!i7381[10]
  request.r(i7381[11], i7381[12], 0, i7380, 'sharedMaterial')
  var i7383 = i7381[13]
  var i7382 = []
  for(var i = 0; i < i7383.length; i += 2) {
  request.r(i7383[i + 0], i7383[i + 1], 2, i7382, '')
  }
  i7380.sharedMaterials = i7382
  i7380.receiveShadows = !!i7381[14]
  i7380.shadowCastingMode = i7381[15]
  i7380.sortingLayerID = i7381[16]
  i7380.sortingOrder = i7381[17]
  i7380.lightmapIndex = i7381[18]
  i7380.lightmapSceneIndex = i7381[19]
  i7380.lightmapScaleOffset = new pc.Vec4( i7381[20], i7381[21], i7381[22], i7381[23] )
  i7380.lightProbeUsage = i7381[24]
  i7380.reflectionProbeUsage = i7381[25]
  return i7380
}

Deserializers["Tongs"] = function (request, data, root) {
  var i7384 = root || request.c( 'Tongs' )
  var i7385 = data
  request.r(i7385[0], i7385[1], 0, i7384, 'fishFillet')
  request.r(i7385[2], i7385[3], 0, i7384, 'fishPoint')
  i7384.catchDuration = i7385[4]
  i7384.raycastDistance = i7385[5]
  i7384.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i7385[6] )
  i7384.isDone = !!i7385[7]
  i7384.onProcess = !!i7385[8]
  request.r(i7385[9], i7385[10], 0, i7384, 'itemDraggable')
  request.r(i7385[11], i7385[12], 0, i7384, 'itemClickable')
  request.r(i7385[13], i7385[14], 0, i7384, 'itemStirring')
  request.r(i7385[15], i7385[16], 0, i7384, 'itemKnifeSpriteMaskCutter')
  request.r(i7385[17], i7385[18], 0, i7384, 'itemSpriteMaskPainter')
  request.r(i7385[19], i7385[20], 0, i7384, 'itemMoveToTarget')
  request.r(i7385[21], i7385[22], 0, i7384, 'animator')
  i7384.itemType = i7385[23]
  request.r(i7385[24], i7385[25], 0, i7384, 'spriteRenderer')
  i7384.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7385[26], i7384.onKnifeIn)
  i7384.heartEffectScale = i7385[27]
  i7384.playMoveToTargetFinishSound = !!i7385[28]
  i7384.moveToTargetFinishFxType = i7385[29]
  return i7384
}

Deserializers["Blender"] = function (request, data, root) {
  var i7386 = root || request.c( 'Blender' )
  var i7387 = data
  request.r(i7387[0], i7387[1], 0, i7386, 'capClosePos')
  request.r(i7387[2], i7387[3], 0, i7386, 'cap')
  request.r(i7387[4], i7387[5], 0, i7386, 'button')
  request.r(i7387[6], i7387[7], 0, i7386, 'buttonOn')
  i7386.countFoodIn = i7387[8]
  i7386.isClose = !!i7387[9]
  i7386.isDone = !!i7387[10]
  i7386.onProcess = !!i7387[11]
  request.r(i7387[12], i7387[13], 0, i7386, 'itemDraggable')
  request.r(i7387[14], i7387[15], 0, i7386, 'itemClickable')
  request.r(i7387[16], i7387[17], 0, i7386, 'itemStirring')
  request.r(i7387[18], i7387[19], 0, i7386, 'itemKnifeSpriteMaskCutter')
  request.r(i7387[20], i7387[21], 0, i7386, 'itemSpriteMaskPainter')
  request.r(i7387[22], i7387[23], 0, i7386, 'itemMoveToTarget')
  request.r(i7387[24], i7387[25], 0, i7386, 'animator')
  i7386.itemType = i7387[26]
  request.r(i7387[27], i7387[28], 0, i7386, 'spriteRenderer')
  i7386.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7387[29], i7386.onKnifeIn)
  i7386.heartEffectScale = i7387[30]
  i7386.playMoveToTargetFinishSound = !!i7387[31]
  i7386.moveToTargetFinishFxType = i7387[32]
  return i7386
}

Deserializers["FoodToBlender"] = function (request, data, root) {
  var i7388 = root || request.c( 'FoodToBlender' )
  var i7389 = data
  i7388.foodType = i7389[0]
  request.r(i7389[1], i7389[2], 0, i7388, 'blender')
  i7388.isDone = !!i7389[3]
  i7388.onProcess = !!i7389[4]
  request.r(i7389[5], i7389[6], 0, i7388, 'itemDraggable')
  request.r(i7389[7], i7389[8], 0, i7388, 'itemClickable')
  request.r(i7389[9], i7389[10], 0, i7388, 'itemStirring')
  request.r(i7389[11], i7389[12], 0, i7388, 'itemKnifeSpriteMaskCutter')
  request.r(i7389[13], i7389[14], 0, i7388, 'itemSpriteMaskPainter')
  request.r(i7389[15], i7389[16], 0, i7388, 'itemMoveToTarget')
  request.r(i7389[17], i7389[18], 0, i7388, 'animator')
  i7388.itemType = i7389[19]
  request.r(i7389[20], i7389[21], 0, i7388, 'spriteRenderer')
  i7388.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i7389[22], i7388.onKnifeIn)
  i7388.heartEffectScale = i7389[23]
  i7388.playMoveToTargetFinishSound = !!i7389[24]
  i7388.moveToTargetFinishFxType = i7389[25]
  return i7388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7391 = data
  i7390.ambientIntensity = i7391[0]
  i7390.reflectionIntensity = i7391[1]
  i7390.ambientMode = i7391[2]
  i7390.ambientLight = new pc.Color(i7391[3], i7391[4], i7391[5], i7391[6])
  i7390.ambientSkyColor = new pc.Color(i7391[7], i7391[8], i7391[9], i7391[10])
  i7390.ambientGroundColor = new pc.Color(i7391[11], i7391[12], i7391[13], i7391[14])
  i7390.ambientEquatorColor = new pc.Color(i7391[15], i7391[16], i7391[17], i7391[18])
  i7390.fogColor = new pc.Color(i7391[19], i7391[20], i7391[21], i7391[22])
  i7390.fogEndDistance = i7391[23]
  i7390.fogStartDistance = i7391[24]
  i7390.fogDensity = i7391[25]
  i7390.fog = !!i7391[26]
  request.r(i7391[27], i7391[28], 0, i7390, 'skybox')
  i7390.fogMode = i7391[29]
  var i7393 = i7391[30]
  var i7392 = []
  for(var i = 0; i < i7393.length; i += 1) {
    i7392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7393[i + 0]) );
  }
  i7390.lightmaps = i7392
  i7390.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7391[31], i7390.lightProbes)
  i7390.lightmapsMode = i7391[32]
  i7390.mixedBakeMode = i7391[33]
  i7390.environmentLightingMode = i7391[34]
  i7390.ambientProbe = new pc.SphericalHarmonicsL2(i7391[35])
  i7390.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7391[36])
  i7390.useReferenceAmbientProbe = !!i7391[37]
  request.r(i7391[38], i7391[39], 0, i7390, 'customReflection')
  request.r(i7391[40], i7391[41], 0, i7390, 'defaultReflection')
  i7390.defaultReflectionMode = i7391[42]
  i7390.defaultReflectionResolution = i7391[43]
  i7390.sunLightObjectId = i7391[44]
  i7390.pixelLightCount = i7391[45]
  i7390.defaultReflectionHDR = !!i7391[46]
  i7390.hasLightDataAsset = !!i7391[47]
  i7390.hasManualGenerate = !!i7391[48]
  return i7390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7397 = data
  request.r(i7397[0], i7397[1], 0, i7396, 'lightmapColor')
  request.r(i7397[2], i7397[3], 0, i7396, 'lightmapDirection')
  request.r(i7397[4], i7397[5], 0, i7396, 'shadowMask')
  return i7396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7398 = root || new UnityEngine.LightProbes()
  var i7399 = data
  return i7398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7407 = data
  var i7409 = i7407[0]
  var i7408 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7409.length; i += 1) {
    i7408.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7409[i + 0]));
  }
  i7406.ShaderCompilationErrors = i7408
  i7406.name = i7407[1]
  i7406.guid = i7407[2]
  var i7411 = i7407[3]
  var i7410 = []
  for(var i = 0; i < i7411.length; i += 1) {
    i7410.push( i7411[i + 0] );
  }
  i7406.shaderDefinedKeywords = i7410
  var i7413 = i7407[4]
  var i7412 = []
  for(var i = 0; i < i7413.length; i += 1) {
    i7412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7413[i + 0]) );
  }
  i7406.passes = i7412
  var i7415 = i7407[5]
  var i7414 = []
  for(var i = 0; i < i7415.length; i += 1) {
    i7414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7415[i + 0]) );
  }
  i7406.usePasses = i7414
  var i7417 = i7407[6]
  var i7416 = []
  for(var i = 0; i < i7417.length; i += 1) {
    i7416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7417[i + 0]) );
  }
  i7406.defaultParameterValues = i7416
  request.r(i7407[7], i7407[8], 0, i7406, 'unityFallbackShader')
  i7406.readDepth = !!i7407[9]
  i7406.hasDepthOnlyPass = !!i7407[10]
  i7406.isCreatedByShaderGraph = !!i7407[11]
  i7406.disableBatching = !!i7407[12]
  i7406.compiled = !!i7407[13]
  return i7406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7421 = data
  i7420.shaderName = i7421[0]
  i7420.errorMessage = i7421[1]
  return i7420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7424 = root || new pc.UnityShaderPass()
  var i7425 = data
  i7424.id = i7425[0]
  i7424.subShaderIndex = i7425[1]
  i7424.name = i7425[2]
  i7424.passType = i7425[3]
  i7424.grabPassTextureName = i7425[4]
  i7424.usePass = !!i7425[5]
  i7424.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[6], i7424.zTest)
  i7424.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[7], i7424.zWrite)
  i7424.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[8], i7424.culling)
  i7424.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7425[9], i7424.blending)
  i7424.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7425[10], i7424.alphaBlending)
  i7424.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[11], i7424.colorWriteMask)
  i7424.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[12], i7424.offsetUnits)
  i7424.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[13], i7424.offsetFactor)
  i7424.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[14], i7424.stencilRef)
  i7424.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[15], i7424.stencilReadMask)
  i7424.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7425[16], i7424.stencilWriteMask)
  i7424.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7425[17], i7424.stencilOp)
  i7424.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7425[18], i7424.stencilOpFront)
  i7424.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7425[19], i7424.stencilOpBack)
  var i7427 = i7425[20]
  var i7426 = []
  for(var i = 0; i < i7427.length; i += 1) {
    i7426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7427[i + 0]) );
  }
  i7424.tags = i7426
  var i7429 = i7425[21]
  var i7428 = []
  for(var i = 0; i < i7429.length; i += 1) {
    i7428.push( i7429[i + 0] );
  }
  i7424.passDefinedKeywords = i7428
  var i7431 = i7425[22]
  var i7430 = []
  for(var i = 0; i < i7431.length; i += 1) {
    i7430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7431[i + 0]) );
  }
  i7424.passDefinedKeywordGroups = i7430
  var i7433 = i7425[23]
  var i7432 = []
  for(var i = 0; i < i7433.length; i += 1) {
    i7432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7433[i + 0]) );
  }
  i7424.variants = i7432
  var i7435 = i7425[24]
  var i7434 = []
  for(var i = 0; i < i7435.length; i += 1) {
    i7434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7435[i + 0]) );
  }
  i7424.excludedVariants = i7434
  i7424.hasDepthReader = !!i7425[25]
  return i7424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7437 = data
  i7436.val = i7437[0]
  i7436.name = i7437[1]
  return i7436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7439 = data
  i7438.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7439[0], i7438.src)
  i7438.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7439[1], i7438.dst)
  i7438.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7439[2], i7438.op)
  return i7438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7441 = data
  i7440.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7441[0], i7440.pass)
  i7440.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7441[1], i7440.fail)
  i7440.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7441[2], i7440.zFail)
  i7440.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7441[3], i7440.comp)
  return i7440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7445 = data
  i7444.name = i7445[0]
  i7444.value = i7445[1]
  return i7444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7449 = data
  var i7451 = i7449[0]
  var i7450 = []
  for(var i = 0; i < i7451.length; i += 1) {
    i7450.push( i7451[i + 0] );
  }
  i7448.keywords = i7450
  i7448.hasDiscard = !!i7449[1]
  return i7448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7455 = data
  i7454.passId = i7455[0]
  i7454.subShaderIndex = i7455[1]
  var i7457 = i7455[2]
  var i7456 = []
  for(var i = 0; i < i7457.length; i += 1) {
    i7456.push( i7457[i + 0] );
  }
  i7454.keywords = i7456
  i7454.vertexProgram = i7455[3]
  i7454.fragmentProgram = i7455[4]
  i7454.exportedForWebGl2 = !!i7455[5]
  i7454.readDepth = !!i7455[6]
  return i7454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7461 = data
  request.r(i7461[0], i7461[1], 0, i7460, 'shader')
  i7460.pass = i7461[2]
  return i7460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7465 = data
  i7464.name = i7465[0]
  i7464.type = i7465[1]
  i7464.value = new pc.Vec4( i7465[2], i7465[3], i7465[4], i7465[5] )
  i7464.textureValue = i7465[6]
  i7464.shaderPropertyFlag = i7465[7]
  return i7464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7467 = data
  i7466.name = i7467[0]
  request.r(i7467[1], i7467[2], 0, i7466, 'texture')
  i7466.aabb = i7467[3]
  i7466.vertices = i7467[4]
  i7466.triangles = i7467[5]
  i7466.textureRect = UnityEngine.Rect.MinMaxRect(i7467[6], i7467[7], i7467[8], i7467[9])
  i7466.packedRect = UnityEngine.Rect.MinMaxRect(i7467[10], i7467[11], i7467[12], i7467[13])
  i7466.border = new pc.Vec4( i7467[14], i7467[15], i7467[16], i7467[17] )
  i7466.transparency = i7467[18]
  i7466.bounds = i7467[19]
  i7466.pixelsPerUnit = i7467[20]
  i7466.textureWidth = i7467[21]
  i7466.textureHeight = i7467[22]
  i7466.nativeSize = new pc.Vec2( i7467[23], i7467[24] )
  i7466.pivot = new pc.Vec2( i7467[25], i7467[26] )
  i7466.textureRectOffset = new pc.Vec2( i7467[27], i7467[28] )
  return i7466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7469 = data
  i7468.name = i7469[0]
  return i7468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7471 = data
  i7470.name = i7471[0]
  i7470.wrapMode = i7471[1]
  i7470.isLooping = !!i7471[2]
  i7470.length = i7471[3]
  var i7473 = i7471[4]
  var i7472 = []
  for(var i = 0; i < i7473.length; i += 1) {
    i7472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7473[i + 0]) );
  }
  i7470.curves = i7472
  var i7475 = i7471[5]
  var i7474 = []
  for(var i = 0; i < i7475.length; i += 1) {
    i7474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7475[i + 0]) );
  }
  i7470.events = i7474
  i7470.halfPrecision = !!i7471[6]
  i7470._frameRate = i7471[7]
  i7470.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7471[8], i7470.localBounds)
  i7470.hasMuscleCurves = !!i7471[9]
  var i7477 = i7471[10]
  var i7476 = []
  for(var i = 0; i < i7477.length; i += 1) {
    i7476.push( i7477[i + 0] );
  }
  i7470.clipMuscleConstant = i7476
  i7470.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7471[11], i7470.clipBindingConstant)
  return i7470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7481 = data
  i7480.path = i7481[0]
  i7480.hash = i7481[1]
  i7480.componentType = i7481[2]
  i7480.property = i7481[3]
  i7480.keys = i7481[4]
  var i7483 = i7481[5]
  var i7482 = []
  for(var i = 0; i < i7483.length; i += 1) {
    i7482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7483[i + 0]) );
  }
  i7480.objectReferenceKeys = i7482
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7487 = data
  i7486.time = i7487[0]
  request.r(i7487[1], i7487[2], 0, i7486, 'value')
  return i7486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7491 = data
  i7490.functionName = i7491[0]
  i7490.floatParameter = i7491[1]
  i7490.intParameter = i7491[2]
  i7490.stringParameter = i7491[3]
  request.r(i7491[4], i7491[5], 0, i7490, 'objectReferenceParameter')
  i7490.time = i7491[6]
  return i7490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7493 = data
  i7492.center = new pc.Vec3( i7493[0], i7493[1], i7493[2] )
  i7492.extends = new pc.Vec3( i7493[3], i7493[4], i7493[5] )
  return i7492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7497 = data
  var i7499 = i7497[0]
  var i7498 = []
  for(var i = 0; i < i7499.length; i += 1) {
    i7498.push( i7499[i + 0] );
  }
  i7496.genericBindings = i7498
  var i7501 = i7497[1]
  var i7500 = []
  for(var i = 0; i < i7501.length; i += 1) {
    i7500.push( i7501[i + 0] );
  }
  i7496.pptrCurveMapping = i7500
  return i7496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7503 = data
  i7502.name = i7503[0]
  var i7505 = i7503[1]
  var i7504 = []
  for(var i = 0; i < i7505.length; i += 1) {
    i7504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7505[i + 0]) );
  }
  i7502.layers = i7504
  var i7507 = i7503[2]
  var i7506 = []
  for(var i = 0; i < i7507.length; i += 1) {
    i7506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7507[i + 0]) );
  }
  i7502.parameters = i7506
  i7502.animationClips = i7503[3]
  i7502.avatarUnsupported = i7503[4]
  return i7502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7511 = data
  i7510.name = i7511[0]
  i7510.defaultWeight = i7511[1]
  i7510.blendingMode = i7511[2]
  i7510.avatarMask = i7511[3]
  i7510.syncedLayerIndex = i7511[4]
  i7510.syncedLayerAffectsTiming = !!i7511[5]
  i7510.syncedLayers = i7511[6]
  i7510.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7511[7], i7510.stateMachine)
  return i7510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7513 = data
  i7512.id = i7513[0]
  i7512.name = i7513[1]
  i7512.path = i7513[2]
  var i7515 = i7513[3]
  var i7514 = []
  for(var i = 0; i < i7515.length; i += 1) {
    i7514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7515[i + 0]) );
  }
  i7512.states = i7514
  var i7517 = i7513[4]
  var i7516 = []
  for(var i = 0; i < i7517.length; i += 1) {
    i7516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7517[i + 0]) );
  }
  i7512.machines = i7516
  var i7519 = i7513[5]
  var i7518 = []
  for(var i = 0; i < i7519.length; i += 1) {
    i7518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7519[i + 0]) );
  }
  i7512.entryStateTransitions = i7518
  var i7521 = i7513[6]
  var i7520 = []
  for(var i = 0; i < i7521.length; i += 1) {
    i7520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7521[i + 0]) );
  }
  i7512.exitStateTransitions = i7520
  var i7523 = i7513[7]
  var i7522 = []
  for(var i = 0; i < i7523.length; i += 1) {
    i7522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7523[i + 0]) );
  }
  i7512.anyStateTransitions = i7522
  i7512.defaultStateId = i7513[8]
  return i7512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7527 = data
  i7526.id = i7527[0]
  i7526.name = i7527[1]
  i7526.cycleOffset = i7527[2]
  i7526.cycleOffsetParameter = i7527[3]
  i7526.cycleOffsetParameterActive = !!i7527[4]
  i7526.mirror = !!i7527[5]
  i7526.mirrorParameter = i7527[6]
  i7526.mirrorParameterActive = !!i7527[7]
  i7526.motionId = i7527[8]
  i7526.nameHash = i7527[9]
  i7526.fullPathHash = i7527[10]
  i7526.speed = i7527[11]
  i7526.speedParameter = i7527[12]
  i7526.speedParameterActive = !!i7527[13]
  i7526.tag = i7527[14]
  i7526.tagHash = i7527[15]
  i7526.writeDefaultValues = !!i7527[16]
  var i7529 = i7527[17]
  var i7528 = []
  for(var i = 0; i < i7529.length; i += 2) {
  request.r(i7529[i + 0], i7529[i + 1], 2, i7528, '')
  }
  i7526.behaviours = i7528
  var i7531 = i7527[18]
  var i7530 = []
  for(var i = 0; i < i7531.length; i += 1) {
    i7530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7531[i + 0]) );
  }
  i7526.transitions = i7530
  return i7526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7537 = data
  i7536.fullPath = i7537[0]
  i7536.canTransitionToSelf = !!i7537[1]
  i7536.duration = i7537[2]
  i7536.exitTime = i7537[3]
  i7536.hasExitTime = !!i7537[4]
  i7536.hasFixedDuration = !!i7537[5]
  i7536.interruptionSource = i7537[6]
  i7536.offset = i7537[7]
  i7536.orderedInterruption = !!i7537[8]
  i7536.destinationStateId = i7537[9]
  i7536.isExit = !!i7537[10]
  i7536.mute = !!i7537[11]
  i7536.solo = !!i7537[12]
  var i7539 = i7537[13]
  var i7538 = []
  for(var i = 0; i < i7539.length; i += 1) {
    i7538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7539[i + 0]) );
  }
  i7536.conditions = i7538
  return i7536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7545 = data
  i7544.destinationStateId = i7545[0]
  i7544.isExit = !!i7545[1]
  i7544.mute = !!i7545[2]
  i7544.solo = !!i7545[3]
  var i7547 = i7545[4]
  var i7546 = []
  for(var i = 0; i < i7547.length; i += 1) {
    i7546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7547[i + 0]) );
  }
  i7544.conditions = i7546
  return i7544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7551 = data
  i7550.defaultBool = !!i7551[0]
  i7550.defaultFloat = i7551[1]
  i7550.defaultInt = i7551[2]
  i7550.name = i7551[3]
  i7550.nameHash = i7551[4]
  i7550.type = i7551[5]
  return i7550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7555 = data
  i7554.mode = i7555[0]
  i7554.parameter = i7555[1]
  i7554.threshold = i7555[2]
  return i7554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7557 = data
  i7556.name = i7557[0]
  i7556.bytes64 = i7557[1]
  i7556.data = i7557[2]
  return i7556
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7558 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7559 = data
  i7558.normalStyle = i7559[0]
  i7558.normalSpacingOffset = i7559[1]
  i7558.boldStyle = i7559[2]
  i7558.boldSpacing = i7559[3]
  i7558.italicStyle = i7559[4]
  i7558.tabSize = i7559[5]
  request.r(i7559[6], i7559[7], 0, i7558, 'atlas')
  i7558.m_SourceFontFileGUID = i7559[8]
  i7558.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7559[9], i7558.m_CreationSettings)
  request.r(i7559[10], i7559[11], 0, i7558, 'm_SourceFontFile')
  i7558.m_SourceFontFilePath = i7559[12]
  i7558.m_AtlasPopulationMode = i7559[13]
  i7558.InternalDynamicOS = !!i7559[14]
  var i7561 = i7559[15]
  var i7560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7561.length; i += 1) {
    i7560.add(request.d('UnityEngine.TextCore.Glyph', i7561[i + 0]));
  }
  i7558.m_GlyphTable = i7560
  var i7563 = i7559[16]
  var i7562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7563.length; i += 1) {
    i7562.add(request.d('TMPro.TMP_Character', i7563[i + 0]));
  }
  i7558.m_CharacterTable = i7562
  var i7565 = i7559[17]
  var i7564 = []
  for(var i = 0; i < i7565.length; i += 2) {
  request.r(i7565[i + 0], i7565[i + 1], 2, i7564, '')
  }
  i7558.m_AtlasTextures = i7564
  i7558.m_AtlasTextureIndex = i7559[18]
  i7558.m_IsMultiAtlasTexturesEnabled = !!i7559[19]
  i7558.m_GetFontFeatures = !!i7559[20]
  i7558.m_ClearDynamicDataOnBuild = !!i7559[21]
  i7558.m_AtlasWidth = i7559[22]
  i7558.m_AtlasHeight = i7559[23]
  i7558.m_AtlasPadding = i7559[24]
  i7558.m_AtlasRenderMode = i7559[25]
  var i7567 = i7559[26]
  var i7566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7567.length; i += 1) {
    i7566.add(request.d('UnityEngine.TextCore.GlyphRect', i7567[i + 0]));
  }
  i7558.m_UsedGlyphRects = i7566
  var i7569 = i7559[27]
  var i7568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7569.length; i += 1) {
    i7568.add(request.d('UnityEngine.TextCore.GlyphRect', i7569[i + 0]));
  }
  i7558.m_FreeGlyphRects = i7568
  i7558.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7559[28], i7558.m_FontFeatureTable)
  i7558.m_ShouldReimportFontFeatures = !!i7559[29]
  var i7571 = i7559[30]
  var i7570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7571.length; i += 2) {
  request.r(i7571[i + 0], i7571[i + 1], 1, i7570, '')
  }
  i7558.m_FallbackFontAssetTable = i7570
  var i7573 = i7559[31]
  var i7572 = []
  for(var i = 0; i < i7573.length; i += 1) {
    i7572.push( request.d('TMPro.TMP_FontWeightPair', i7573[i + 0]) );
  }
  i7558.m_FontWeightTable = i7572
  var i7575 = i7559[32]
  var i7574 = []
  for(var i = 0; i < i7575.length; i += 1) {
    i7574.push( request.d('TMPro.TMP_FontWeightPair', i7575[i + 0]) );
  }
  i7558.fontWeights = i7574
  i7558.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7559[33], i7558.m_fontInfo)
  var i7577 = i7559[34]
  var i7576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7577.length; i += 1) {
    i7576.add(request.d('TMPro.TMP_Glyph', i7577[i + 0]));
  }
  i7558.m_glyphInfoList = i7576
  i7558.m_KerningTable = request.d('TMPro.KerningTable', i7559[35], i7558.m_KerningTable)
  var i7579 = i7559[36]
  var i7578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7579.length; i += 2) {
  request.r(i7579[i + 0], i7579[i + 1], 1, i7578, '')
  }
  i7558.fallbackFontAssets = i7578
  i7558.m_Version = i7559[37]
  i7558.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7559[38], i7558.m_FaceInfo)
  request.r(i7559[39], i7559[40], 0, i7558, 'm_Material')
  return i7558
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7580 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7581 = data
  i7580.sourceFontFileName = i7581[0]
  i7580.sourceFontFileGUID = i7581[1]
  i7580.faceIndex = i7581[2]
  i7580.pointSizeSamplingMode = i7581[3]
  i7580.pointSize = i7581[4]
  i7580.padding = i7581[5]
  i7580.paddingMode = i7581[6]
  i7580.packingMode = i7581[7]
  i7580.atlasWidth = i7581[8]
  i7580.atlasHeight = i7581[9]
  i7580.characterSetSelectionMode = i7581[10]
  i7580.characterSequence = i7581[11]
  i7580.referencedFontAssetGUID = i7581[12]
  i7580.referencedTextAssetGUID = i7581[13]
  i7580.fontStyle = i7581[14]
  i7580.fontStyleModifier = i7581[15]
  i7580.renderMode = i7581[16]
  i7580.includeFontFeatures = !!i7581[17]
  return i7580
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7584 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7585 = data
  i7584.m_Index = i7585[0]
  i7584.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7585[1], i7584.m_Metrics)
  i7584.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7585[2], i7584.m_GlyphRect)
  i7584.m_Scale = i7585[3]
  i7584.m_AtlasIndex = i7585[4]
  i7584.m_ClassDefinitionType = i7585[5]
  return i7584
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7586 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7587 = data
  i7586.m_Width = i7587[0]
  i7586.m_Height = i7587[1]
  i7586.m_HorizontalBearingX = i7587[2]
  i7586.m_HorizontalBearingY = i7587[3]
  i7586.m_HorizontalAdvance = i7587[4]
  return i7586
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7588 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7589 = data
  i7588.m_X = i7589[0]
  i7588.m_Y = i7589[1]
  i7588.m_Width = i7589[2]
  i7588.m_Height = i7589[3]
  return i7588
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7592 = root || request.c( 'TMPro.TMP_Character' )
  var i7593 = data
  i7592.m_ElementType = i7593[0]
  i7592.m_Unicode = i7593[1]
  i7592.m_GlyphIndex = i7593[2]
  i7592.m_Scale = i7593[3]
  return i7592
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7598 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7599 = data
  var i7601 = i7599[0]
  var i7600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i7601.length; i += 1) {
    i7600.add(request.d('TMPro.MultipleSubstitutionRecord', i7601[i + 0]));
  }
  i7598.m_MultipleSubstitutionRecords = i7600
  var i7603 = i7599[1]
  var i7602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i7603.length; i += 1) {
    i7602.add(request.d('TMPro.LigatureSubstitutionRecord', i7603[i + 0]));
  }
  i7598.m_LigatureSubstitutionRecords = i7602
  var i7605 = i7599[2]
  var i7604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7605.length; i += 1) {
    i7604.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i7605[i + 0]));
  }
  i7598.m_GlyphPairAdjustmentRecords = i7604
  var i7607 = i7599[3]
  var i7606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i7607.length; i += 1) {
    i7606.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i7607[i + 0]));
  }
  i7598.m_MarkToBaseAdjustmentRecords = i7606
  var i7609 = i7599[4]
  var i7608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i7609.length; i += 1) {
    i7608.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i7609[i + 0]));
  }
  i7598.m_MarkToMarkAdjustmentRecords = i7608
  return i7598
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i7612 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i7613 = data
  i7612.m_TargetGlyphID = i7613[0]
  i7612.m_SubstituteGlyphIDs = i7613[1]
  return i7612
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i7616 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i7617 = data
  i7616.m_ComponentGlyphIDs = i7617[0]
  i7616.m_LigatureGlyphID = i7617[1]
  return i7616
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7620 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i7621 = data
  i7620.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7621[0], i7620.m_FirstAdjustmentRecord)
  i7620.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7621[1], i7620.m_SecondAdjustmentRecord)
  i7620.m_FeatureLookupFlags = i7621[2]
  return i7620
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7624 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7625 = data
  i7624.m_BaseGlyphID = i7625[0]
  i7624.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7625[1], i7624.m_BaseGlyphAnchorPoint)
  i7624.m_MarkGlyphID = i7625[2]
  i7624.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7625[3], i7624.m_MarkPositionAdjustment)
  return i7624
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7628 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7629 = data
  i7628.m_BaseMarkGlyphID = i7629[0]
  i7628.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7629[1], i7628.m_BaseMarkGlyphAnchorPoint)
  i7628.m_CombiningMarkGlyphID = i7629[2]
  i7628.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7629[3], i7628.m_CombiningMarkPositionAdjustment)
  return i7628
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7634 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7635 = data
  request.r(i7635[0], i7635[1], 0, i7634, 'regularTypeface')
  request.r(i7635[2], i7635[3], 0, i7634, 'italicTypeface')
  return i7634
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7636 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7637 = data
  i7636.Name = i7637[0]
  i7636.PointSize = i7637[1]
  i7636.Scale = i7637[2]
  i7636.CharacterCount = i7637[3]
  i7636.LineHeight = i7637[4]
  i7636.Baseline = i7637[5]
  i7636.Ascender = i7637[6]
  i7636.CapHeight = i7637[7]
  i7636.Descender = i7637[8]
  i7636.CenterLine = i7637[9]
  i7636.SuperscriptOffset = i7637[10]
  i7636.SubscriptOffset = i7637[11]
  i7636.SubSize = i7637[12]
  i7636.Underline = i7637[13]
  i7636.UnderlineThickness = i7637[14]
  i7636.strikethrough = i7637[15]
  i7636.strikethroughThickness = i7637[16]
  i7636.TabWidth = i7637[17]
  i7636.Padding = i7637[18]
  i7636.AtlasWidth = i7637[19]
  i7636.AtlasHeight = i7637[20]
  return i7636
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7640 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7641 = data
  i7640.id = i7641[0]
  i7640.x = i7641[1]
  i7640.y = i7641[2]
  i7640.width = i7641[3]
  i7640.height = i7641[4]
  i7640.xOffset = i7641[5]
  i7640.yOffset = i7641[6]
  i7640.xAdvance = i7641[7]
  i7640.scale = i7641[8]
  return i7640
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7642 = root || request.c( 'TMPro.KerningTable' )
  var i7643 = data
  var i7645 = i7643[0]
  var i7644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7645.length; i += 1) {
    i7644.add(request.d('TMPro.KerningPair', i7645[i + 0]));
  }
  i7642.kerningPairs = i7644
  return i7642
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7648 = root || request.c( 'TMPro.KerningPair' )
  var i7649 = data
  i7648.xOffset = i7649[0]
  i7648.m_FirstGlyph = i7649[1]
  i7648.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7649[2], i7648.m_FirstGlyphAdjustments)
  i7648.m_SecondGlyph = i7649[3]
  i7648.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7649[4], i7648.m_SecondGlyphAdjustments)
  i7648.m_IgnoreSpacingAdjustments = !!i7649[5]
  return i7648
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7650 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7651 = data
  i7650.m_FaceIndex = i7651[0]
  i7650.m_FamilyName = i7651[1]
  i7650.m_StyleName = i7651[2]
  i7650.m_PointSize = i7651[3]
  i7650.m_Scale = i7651[4]
  i7650.m_UnitsPerEM = i7651[5]
  i7650.m_LineHeight = i7651[6]
  i7650.m_AscentLine = i7651[7]
  i7650.m_CapLine = i7651[8]
  i7650.m_MeanLine = i7651[9]
  i7650.m_Baseline = i7651[10]
  i7650.m_DescentLine = i7651[11]
  i7650.m_SuperscriptOffset = i7651[12]
  i7650.m_SuperscriptSize = i7651[13]
  i7650.m_SubscriptOffset = i7651[14]
  i7650.m_SubscriptSize = i7651[15]
  i7650.m_UnderlineOffset = i7651[16]
  i7650.m_UnderlineThickness = i7651[17]
  i7650.m_StrikethroughOffset = i7651[18]
  i7650.m_StrikethroughThickness = i7651[19]
  i7650.m_TabWidth = i7651[20]
  return i7650
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i7652 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i7653 = data
  var i7655 = i7653[0]
  var i7654 = []
  for(var i = 0; i < i7655.length; i += 2) {
  request.r(i7655[i + 0], i7655[i + 1], 2, i7654, '')
  }
  i7652.atlasAssets = i7654
  i7652.scale = i7653[1]
  request.r(i7653[2], i7653[3], 0, i7652, 'skeletonJSON')
  i7652.isUpgradingBlendModeMaterials = !!i7653[4]
  i7652.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i7653[5], i7652.blendModeMaterials)
  var i7657 = i7653[6]
  var i7656 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i7657.length; i += 2) {
  request.r(i7657[i + 0], i7657[i + 1], 1, i7656, '')
  }
  i7652.skeletonDataModifiers = i7656
  var i7659 = i7653[7]
  var i7658 = []
  for(var i = 0; i < i7659.length; i += 1) {
    i7658.push( i7659[i + 0] );
  }
  i7652.fromAnimation = i7658
  var i7661 = i7653[8]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 1) {
    i7660.push( i7661[i + 0] );
  }
  i7652.toAnimation = i7660
  i7652.duration = i7653[9]
  i7652.defaultMix = i7653[10]
  request.r(i7653[11], i7653[12], 0, i7652, 'controller')
  return i7652
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i7664 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i7665 = data
  i7664.applyAdditiveMaterial = !!i7665[0]
  var i7667 = i7665[1]
  var i7666 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7667.length; i += 1) {
    i7666.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7667[i + 0]));
  }
  i7664.additiveMaterials = i7666
  var i7669 = i7665[2]
  var i7668 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7669.length; i += 1) {
    i7668.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7669[i + 0]));
  }
  i7664.multiplyMaterials = i7668
  var i7671 = i7665[3]
  var i7670 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7671.length; i += 1) {
    i7670.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7671[i + 0]));
  }
  i7664.screenMaterials = i7670
  i7664.requiresBlendModeMaterials = !!i7665[4]
  return i7664
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i7674 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i7675 = data
  i7674.pageName = i7675[0]
  request.r(i7675[1], i7675[2], 0, i7674, 'material')
  return i7674
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i7678 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i7679 = data
  request.r(i7679[0], i7679[1], 0, i7678, 'atlasFile')
  var i7681 = i7679[2]
  var i7680 = []
  for(var i = 0; i < i7681.length; i += 2) {
  request.r(i7681[i + 0], i7681[i + 1], 2, i7680, '')
  }
  i7678.materials = i7680
  return i7678
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7682 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7683 = data
  i7682.useSafeMode = !!i7683[0]
  i7682.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7683[1], i7682.safeModeOptions)
  i7682.timeScale = i7683[2]
  i7682.unscaledTimeScale = i7683[3]
  i7682.useSmoothDeltaTime = !!i7683[4]
  i7682.maxSmoothUnscaledTime = i7683[5]
  i7682.rewindCallbackMode = i7683[6]
  i7682.showUnityEditorReport = !!i7683[7]
  i7682.logBehaviour = i7683[8]
  i7682.drawGizmos = !!i7683[9]
  i7682.defaultRecyclable = !!i7683[10]
  i7682.defaultAutoPlay = i7683[11]
  i7682.defaultUpdateType = i7683[12]
  i7682.defaultTimeScaleIndependent = !!i7683[13]
  i7682.defaultEaseType = i7683[14]
  i7682.defaultEaseOvershootOrAmplitude = i7683[15]
  i7682.defaultEasePeriod = i7683[16]
  i7682.defaultAutoKill = !!i7683[17]
  i7682.defaultLoopType = i7683[18]
  i7682.debugMode = !!i7683[19]
  i7682.debugStoreTargetId = !!i7683[20]
  i7682.showPreviewPanel = !!i7683[21]
  i7682.storeSettingsLocation = i7683[22]
  i7682.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7683[23], i7682.modules)
  i7682.createASMDEF = !!i7683[24]
  i7682.showPlayingTweens = !!i7683[25]
  i7682.showPausedTweens = !!i7683[26]
  return i7682
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7684 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7685 = data
  i7684.logBehaviour = i7685[0]
  i7684.nestedTweenFailureBehaviour = i7685[1]
  return i7684
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7686 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7687 = data
  i7686.showPanel = !!i7687[0]
  i7686.audioEnabled = !!i7687[1]
  i7686.physicsEnabled = !!i7687[2]
  i7686.physics2DEnabled = !!i7687[3]
  i7686.spriteEnabled = !!i7687[4]
  i7686.uiEnabled = !!i7687[5]
  i7686.uiToolkitEnabled = !!i7687[6]
  i7686.textMeshProEnabled = !!i7687[7]
  i7686.tk2DEnabled = !!i7687[8]
  i7686.deAudioEnabled = !!i7687[9]
  i7686.deUnityExtendedEnabled = !!i7687[10]
  i7686.epoOutlineEnabled = !!i7687[11]
  return i7686
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7688 = root || request.c( 'TMPro.TMP_Settings' )
  var i7689 = data
  i7688.assetVersion = i7689[0]
  i7688.m_TextWrappingMode = i7689[1]
  i7688.m_enableKerning = !!i7689[2]
  var i7691 = i7689[3]
  var i7690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7691.length; i += 1) {
    i7690.add(i7691[i + 0]);
  }
  i7688.m_ActiveFontFeatures = i7690
  i7688.m_enableExtraPadding = !!i7689[4]
  i7688.m_enableTintAllSprites = !!i7689[5]
  i7688.m_enableParseEscapeCharacters = !!i7689[6]
  i7688.m_EnableRaycastTarget = !!i7689[7]
  i7688.m_GetFontFeaturesAtRuntime = !!i7689[8]
  i7688.m_missingGlyphCharacter = i7689[9]
  i7688.m_ClearDynamicDataOnBuild = !!i7689[10]
  i7688.m_warningsDisabled = !!i7689[11]
  request.r(i7689[12], i7689[13], 0, i7688, 'm_defaultFontAsset')
  i7688.m_defaultFontAssetPath = i7689[14]
  i7688.m_defaultFontSize = i7689[15]
  i7688.m_defaultAutoSizeMinRatio = i7689[16]
  i7688.m_defaultAutoSizeMaxRatio = i7689[17]
  i7688.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7689[18], i7689[19] )
  i7688.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7689[20], i7689[21] )
  i7688.m_autoSizeTextContainer = !!i7689[22]
  i7688.m_IsTextObjectScaleStatic = !!i7689[23]
  var i7693 = i7689[24]
  var i7692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7693.length; i += 2) {
  request.r(i7693[i + 0], i7693[i + 1], 1, i7692, '')
  }
  i7688.m_fallbackFontAssets = i7692
  i7688.m_matchMaterialPreset = !!i7689[25]
  i7688.m_HideSubTextObjects = !!i7689[26]
  request.r(i7689[27], i7689[28], 0, i7688, 'm_defaultSpriteAsset')
  i7688.m_defaultSpriteAssetPath = i7689[29]
  i7688.m_enableEmojiSupport = !!i7689[30]
  i7688.m_MissingCharacterSpriteUnicode = i7689[31]
  var i7695 = i7689[32]
  var i7694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7695.length; i += 2) {
  request.r(i7695[i + 0], i7695[i + 1], 1, i7694, '')
  }
  i7688.m_EmojiFallbackTextAssets = i7694
  i7688.m_defaultColorGradientPresetsPath = i7689[33]
  request.r(i7689[34], i7689[35], 0, i7688, 'm_defaultStyleSheet')
  i7688.m_StyleSheetsResourcePath = i7689[36]
  request.r(i7689[37], i7689[38], 0, i7688, 'm_leadingCharacters')
  request.r(i7689[39], i7689[40], 0, i7688, 'm_followingCharacters')
  i7688.m_UseModernHangulLineBreakingRules = !!i7689[41]
  return i7688
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7698 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7699 = data
  request.r(i7699[0], i7699[1], 0, i7698, 'spriteSheet')
  var i7701 = i7699[2]
  var i7700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7701.length; i += 1) {
    i7700.add(request.d('TMPro.TMP_Sprite', i7701[i + 0]));
  }
  i7698.spriteInfoList = i7700
  var i7703 = i7699[3]
  var i7702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7703.length; i += 2) {
  request.r(i7703[i + 0], i7703[i + 1], 1, i7702, '')
  }
  i7698.fallbackSpriteAssets = i7702
  var i7705 = i7699[4]
  var i7704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7705.length; i += 1) {
    i7704.add(request.d('TMPro.TMP_SpriteCharacter', i7705[i + 0]));
  }
  i7698.m_SpriteCharacterTable = i7704
  var i7707 = i7699[5]
  var i7706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7707.length; i += 1) {
    i7706.add(request.d('TMPro.TMP_SpriteGlyph', i7707[i + 0]));
  }
  i7698.m_GlyphTable = i7706
  i7698.m_Version = i7699[6]
  i7698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7699[7], i7698.m_FaceInfo)
  request.r(i7699[8], i7699[9], 0, i7698, 'm_Material')
  return i7698
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7710 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7711 = data
  i7710.name = i7711[0]
  i7710.hashCode = i7711[1]
  i7710.unicode = i7711[2]
  i7710.pivot = new pc.Vec2( i7711[3], i7711[4] )
  request.r(i7711[5], i7711[6], 0, i7710, 'sprite')
  i7710.id = i7711[7]
  i7710.x = i7711[8]
  i7710.y = i7711[9]
  i7710.width = i7711[10]
  i7710.height = i7711[11]
  i7710.xOffset = i7711[12]
  i7710.yOffset = i7711[13]
  i7710.xAdvance = i7711[14]
  i7710.scale = i7711[15]
  return i7710
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7716 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7717 = data
  i7716.m_Name = i7717[0]
  i7716.m_ElementType = i7717[1]
  i7716.m_Unicode = i7717[2]
  i7716.m_GlyphIndex = i7717[3]
  i7716.m_Scale = i7717[4]
  return i7716
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7720 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7721 = data
  request.r(i7721[0], i7721[1], 0, i7720, 'sprite')
  i7720.m_Index = i7721[2]
  i7720.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7721[3], i7720.m_Metrics)
  i7720.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7721[4], i7720.m_GlyphRect)
  i7720.m_Scale = i7721[5]
  i7720.m_AtlasIndex = i7721[6]
  i7720.m_ClassDefinitionType = i7721[7]
  return i7720
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7722 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7723 = data
  var i7725 = i7723[0]
  var i7724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7725.length; i += 1) {
    i7724.add(request.d('TMPro.TMP_Style', i7725[i + 0]));
  }
  i7722.m_StyleList = i7724
  return i7722
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7728 = root || request.c( 'TMPro.TMP_Style' )
  var i7729 = data
  i7728.m_Name = i7729[0]
  i7728.m_HashCode = i7729[1]
  i7728.m_OpeningDefinition = i7729[2]
  i7728.m_ClosingDefinition = i7729[3]
  i7728.m_OpeningTagArray = i7729[4]
  i7728.m_ClosingTagArray = i7729[5]
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7731 = data
  var i7733 = i7731[0]
  var i7732 = []
  for(var i = 0; i < i7733.length; i += 1) {
    i7732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7733[i + 0]) );
  }
  i7730.files = i7732
  i7730.componentToPrefabIds = i7731[1]
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7737 = data
  i7736.path = i7737[0]
  request.r(i7737[1], i7737[2], 0, i7736, 'unityObject')
  return i7736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7739 = data
  var i7741 = i7739[0]
  var i7740 = []
  for(var i = 0; i < i7741.length; i += 1) {
    i7740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7741[i + 0]) );
  }
  i7738.scriptsExecutionOrder = i7740
  var i7743 = i7739[1]
  var i7742 = []
  for(var i = 0; i < i7743.length; i += 1) {
    i7742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7743[i + 0]) );
  }
  i7738.sortingLayers = i7742
  var i7745 = i7739[2]
  var i7744 = []
  for(var i = 0; i < i7745.length; i += 1) {
    i7744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7745[i + 0]) );
  }
  i7738.cullingLayers = i7744
  i7738.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7739[3], i7738.timeSettings)
  i7738.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7739[4], i7738.physicsSettings)
  i7738.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7739[5], i7738.physics2DSettings)
  i7738.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7739[6], i7738.qualitySettings)
  i7738.enableRealtimeShadows = !!i7739[7]
  i7738.enableAutoInstancing = !!i7739[8]
  i7738.enableStaticBatching = !!i7739[9]
  i7738.enableDynamicBatching = !!i7739[10]
  i7738.lightmapEncodingQuality = i7739[11]
  i7738.desiredColorSpace = i7739[12]
  var i7747 = i7739[13]
  var i7746 = []
  for(var i = 0; i < i7747.length; i += 1) {
    i7746.push( i7747[i + 0] );
  }
  i7738.allTags = i7746
  return i7738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7751 = data
  i7750.name = i7751[0]
  i7750.value = i7751[1]
  return i7750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7755 = data
  i7754.id = i7755[0]
  i7754.name = i7755[1]
  i7754.value = i7755[2]
  return i7754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7759 = data
  i7758.id = i7759[0]
  i7758.name = i7759[1]
  return i7758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7761 = data
  i7760.fixedDeltaTime = i7761[0]
  i7760.maximumDeltaTime = i7761[1]
  i7760.timeScale = i7761[2]
  i7760.maximumParticleTimestep = i7761[3]
  return i7760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7763 = data
  i7762.gravity = new pc.Vec3( i7763[0], i7763[1], i7763[2] )
  i7762.defaultSolverIterations = i7763[3]
  i7762.bounceThreshold = i7763[4]
  i7762.autoSyncTransforms = !!i7763[5]
  i7762.autoSimulation = !!i7763[6]
  var i7765 = i7763[7]
  var i7764 = []
  for(var i = 0; i < i7765.length; i += 1) {
    i7764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7765[i + 0]) );
  }
  i7762.collisionMatrix = i7764
  return i7762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7769 = data
  i7768.enabled = !!i7769[0]
  i7768.layerId = i7769[1]
  i7768.otherLayerId = i7769[2]
  return i7768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7771 = data
  request.r(i7771[0], i7771[1], 0, i7770, 'material')
  i7770.gravity = new pc.Vec2( i7771[2], i7771[3] )
  i7770.positionIterations = i7771[4]
  i7770.velocityIterations = i7771[5]
  i7770.velocityThreshold = i7771[6]
  i7770.maxLinearCorrection = i7771[7]
  i7770.maxAngularCorrection = i7771[8]
  i7770.maxTranslationSpeed = i7771[9]
  i7770.maxRotationSpeed = i7771[10]
  i7770.baumgarteScale = i7771[11]
  i7770.baumgarteTOIScale = i7771[12]
  i7770.timeToSleep = i7771[13]
  i7770.linearSleepTolerance = i7771[14]
  i7770.angularSleepTolerance = i7771[15]
  i7770.defaultContactOffset = i7771[16]
  i7770.autoSimulation = !!i7771[17]
  i7770.queriesHitTriggers = !!i7771[18]
  i7770.queriesStartInColliders = !!i7771[19]
  i7770.callbacksOnDisable = !!i7771[20]
  i7770.reuseCollisionCallbacks = !!i7771[21]
  i7770.autoSyncTransforms = !!i7771[22]
  var i7773 = i7771[23]
  var i7772 = []
  for(var i = 0; i < i7773.length; i += 1) {
    i7772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7773[i + 0]) );
  }
  i7770.collisionMatrix = i7772
  return i7770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7777 = data
  i7776.enabled = !!i7777[0]
  i7776.layerId = i7777[1]
  i7776.otherLayerId = i7777[2]
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7779 = data
  var i7781 = i7779[0]
  var i7780 = []
  for(var i = 0; i < i7781.length; i += 1) {
    i7780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7781[i + 0]) );
  }
  i7778.qualityLevels = i7780
  var i7783 = i7779[1]
  var i7782 = []
  for(var i = 0; i < i7783.length; i += 1) {
    i7782.push( i7783[i + 0] );
  }
  i7778.names = i7782
  i7778.shadows = i7779[2]
  i7778.anisotropicFiltering = i7779[3]
  i7778.antiAliasing = i7779[4]
  i7778.lodBias = i7779[5]
  i7778.shadowCascades = i7779[6]
  i7778.shadowDistance = i7779[7]
  i7778.shadowmaskMode = i7779[8]
  i7778.shadowProjection = i7779[9]
  i7778.shadowResolution = i7779[10]
  i7778.softParticles = !!i7779[11]
  i7778.softVegetation = !!i7779[12]
  i7778.activeColorSpace = i7779[13]
  i7778.desiredColorSpace = i7779[14]
  i7778.masterTextureLimit = i7779[15]
  i7778.maxQueuedFrames = i7779[16]
  i7778.particleRaycastBudget = i7779[17]
  i7778.pixelLightCount = i7779[18]
  i7778.realtimeReflectionProbes = !!i7779[19]
  i7778.shadowCascade2Split = i7779[20]
  i7778.shadowCascade4Split = new pc.Vec3( i7779[21], i7779[22], i7779[23] )
  i7778.streamingMipmapsActive = !!i7779[24]
  i7778.vSyncCount = i7779[25]
  i7778.asyncUploadBufferSize = i7779[26]
  i7778.asyncUploadTimeSlice = i7779[27]
  i7778.billboardsFaceCameraPosition = !!i7779[28]
  i7778.shadowNearPlaneOffset = i7779[29]
  i7778.streamingMipmapsMemoryBudget = i7779[30]
  i7778.maximumLODLevel = i7779[31]
  i7778.streamingMipmapsAddAllCameras = !!i7779[32]
  i7778.streamingMipmapsMaxLevelReduction = i7779[33]
  i7778.streamingMipmapsRenderersPerFrame = i7779[34]
  i7778.resolutionScalingFixedDPIFactor = i7779[35]
  i7778.streamingMipmapsMaxFileIORequests = i7779[36]
  i7778.currentQualityLevel = i7779[37]
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7789 = data
  i7788.weight = i7789[0]
  i7788.vertices = i7789[1]
  i7788.normals = i7789[2]
  i7788.tangents = i7789[3]
  return i7788
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7790 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i7791 = data
  i7790.m_GlyphIndex = i7791[0]
  i7790.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i7791[1], i7790.m_GlyphValueRecord)
  return i7790
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i7792 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i7793 = data
  i7792.m_XCoordinate = i7793[0]
  i7792.m_YCoordinate = i7793[1]
  return i7792
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i7794 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i7795 = data
  i7794.m_XPositionAdjustment = i7795[0]
  i7794.m_YPositionAdjustment = i7795[1]
  return i7794
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7796 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7797 = data
  i7796.xPlacement = i7797[0]
  i7796.yPlacement = i7797[1]
  i7796.xAdvance = i7797[2]
  i7796.yAdvance = i7797[3]
  return i7796
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i7798 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i7799 = data
  i7798.m_XPlacement = i7799[0]
  i7798.m_YPlacement = i7799[1]
  i7798.m_XAdvance = i7799[2]
  i7798.m_YAdvance = i7799[3]
  return i7798
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[22],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[22],"106":[57],"107":[108],"109":[108],"21":[14],"66":[110],"62":[110],"111":[110],"112":[110],"65":[110],"113":[14],"114":[17,14],"58":[57],"115":[17,14],"116":[25,57],"117":[57],"118":[57,55],"119":[85],"120":[92],"121":[122],"123":[124],"125":[5],"126":[22],"127":[128],"129":[52],"130":[21],"131":[14],"132":[57,14],"27":[14,17],"133":[14],"134":[17,14],"135":[57],"136":[17,14],"137":[14],"138":[139],"140":[139],"141":[139],"142":[14],"143":[14],"24":[21],"16":[17,14],"144":[14],"23":[21],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[17,14],"155":[14],"156":[14],"157":[14],"158":[14],"159":[17,14],"160":[14],"161":[52],"162":[52],"53":[52],"163":[52],"164":[22],"165":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","Duck","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","Tray","Item","FishFillet","Salt","Tongs","FoodToBlender","Blender","Ply_ToggleEvent","SortChildByZPos","DuckManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","ContinuousRotation","Pan","ItemDraggable","ItemMoveToTarget","EggBowl","ItemStirring","ItemClickable","UnityEngine.SpriteMask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "5.9";

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

Deserializers.buildID = "d9d1ee45-0673-44af-ac3c-6685e8ff9e9b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

