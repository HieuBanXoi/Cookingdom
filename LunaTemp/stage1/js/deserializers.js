var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5236 = root || request.c( 'UnityEngine.JointSpring' )
  var i5237 = data
  i5236.spring = i5237[0]
  i5236.damper = i5237[1]
  i5236.targetPosition = i5237[2]
  return i5236
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.JointMotor' )
  var i5239 = data
  i5238.m_TargetVelocity = i5239[0]
  i5238.m_Force = i5239[1]
  i5238.m_FreeSpin = i5239[2]
  return i5238
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5240 = root || request.c( 'UnityEngine.JointLimits' )
  var i5241 = data
  i5240.m_Min = i5241[0]
  i5240.m_Max = i5241[1]
  i5240.m_Bounciness = i5241[2]
  i5240.m_BounceMinVelocity = i5241[3]
  i5240.m_ContactDistance = i5241[4]
  i5240.minBounce = i5241[5]
  i5240.maxBounce = i5241[6]
  return i5240
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5242 = root || request.c( 'UnityEngine.JointDrive' )
  var i5243 = data
  i5242.m_PositionSpring = i5243[0]
  i5242.m_PositionDamper = i5243[1]
  i5242.m_MaximumForce = i5243[2]
  i5242.m_UseAcceleration = i5243[3]
  return i5242
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5244 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5245 = data
  i5244.m_Spring = i5245[0]
  i5244.m_Damper = i5245[1]
  return i5244
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5246 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5247 = data
  i5246.m_Limit = i5247[0]
  i5246.m_Bounciness = i5247[1]
  i5246.m_ContactDistance = i5247[2]
  return i5246
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5248 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5249 = data
  i5248.m_ExtremumSlip = i5249[0]
  i5248.m_ExtremumValue = i5249[1]
  i5248.m_AsymptoteSlip = i5249[2]
  i5248.m_AsymptoteValue = i5249[3]
  i5248.m_Stiffness = i5249[4]
  return i5248
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5250 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5251 = data
  i5250.m_LowerAngle = i5251[0]
  i5250.m_UpperAngle = i5251[1]
  return i5250
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5252 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5253 = data
  i5252.m_MotorSpeed = i5253[0]
  i5252.m_MaximumMotorTorque = i5253[1]
  return i5252
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5254 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5255 = data
  i5254.m_DampingRatio = i5255[0]
  i5254.m_Frequency = i5255[1]
  i5254.m_Angle = i5255[2]
  return i5254
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5257 = data
  i5256.m_LowerTranslation = i5257[0]
  i5256.m_UpperTranslation = i5257[1]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5258 = root || new pc.UnityMaterial()
  var i5259 = data
  i5258.name = i5259[0]
  request.r(i5259[1], i5259[2], 0, i5258, 'shader')
  i5258.renderQueue = i5259[3]
  i5258.enableInstancing = !!i5259[4]
  var i5261 = i5259[5]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5261[i + 0]) );
  }
  i5258.floatParameters = i5260
  var i5263 = i5259[6]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5263[i + 0]) );
  }
  i5258.colorParameters = i5262
  var i5265 = i5259[7]
  var i5264 = []
  for(var i = 0; i < i5265.length; i += 1) {
    i5264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5265[i + 0]) );
  }
  i5258.vectorParameters = i5264
  var i5267 = i5259[8]
  var i5266 = []
  for(var i = 0; i < i5267.length; i += 1) {
    i5266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5267[i + 0]) );
  }
  i5258.textureParameters = i5266
  var i5269 = i5259[9]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5269[i + 0]) );
  }
  i5258.materialFlags = i5268
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5273 = data
  i5272.name = i5273[0]
  i5272.value = i5273[1]
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5277 = data
  i5276.name = i5277[0]
  i5276.value = new pc.Color(i5277[1], i5277[2], i5277[3], i5277[4])
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5281 = data
  i5280.name = i5281[0]
  i5280.value = new pc.Vec4( i5281[1], i5281[2], i5281[3], i5281[4] )
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5285 = data
  i5284.name = i5285[0]
  request.r(i5285[1], i5285[2], 0, i5284, 'value')
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5289 = data
  i5288.name = i5289[0]
  i5288.enabled = !!i5289[1]
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5291 = data
  i5290.name = i5291[0]
  i5290.width = i5291[1]
  i5290.height = i5291[2]
  i5290.mipmapCount = i5291[3]
  i5290.anisoLevel = i5291[4]
  i5290.filterMode = i5291[5]
  i5290.hdr = !!i5291[6]
  i5290.format = i5291[7]
  i5290.wrapMode = i5291[8]
  i5290.alphaIsTransparency = !!i5291[9]
  i5290.alphaSource = i5291[10]
  i5290.graphicsFormat = i5291[11]
  i5290.sRGBTexture = !!i5291[12]
  i5290.desiredColorSpace = i5291[13]
  i5290.wrapU = i5291[14]
  i5290.wrapV = i5291[15]
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5293 = data
  i5292.position = new pc.Vec3( i5293[0], i5293[1], i5293[2] )
  i5292.scale = new pc.Vec3( i5293[3], i5293[4], i5293[5] )
  i5292.rotation = new pc.Quat(i5293[6], i5293[7], i5293[8], i5293[9])
  return i5292
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i5294 = root || request.c( 'HeartEffect' )
  var i5295 = data
  i5294.defaultLifeTime = i5295[0]
  request.r(i5295[1], i5295[2], 0, i5294, 'tf')
  return i5294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5297 = data
  i5296.color = new pc.Color(i5297[0], i5297[1], i5297[2], i5297[3])
  request.r(i5297[4], i5297[5], 0, i5296, 'sprite')
  i5296.flipX = !!i5297[6]
  i5296.flipY = !!i5297[7]
  i5296.drawMode = i5297[8]
  i5296.size = new pc.Vec2( i5297[9], i5297[10] )
  i5296.tileMode = i5297[11]
  i5296.adaptiveModeThreshold = i5297[12]
  i5296.maskInteraction = i5297[13]
  i5296.spriteSortPoint = i5297[14]
  i5296.enabled = !!i5297[15]
  request.r(i5297[16], i5297[17], 0, i5296, 'sharedMaterial')
  var i5299 = i5297[18]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 2) {
  request.r(i5299[i + 0], i5299[i + 1], 2, i5298, '')
  }
  i5296.sharedMaterials = i5298
  i5296.receiveShadows = !!i5297[19]
  i5296.shadowCastingMode = i5297[20]
  i5296.sortingLayerID = i5297[21]
  i5296.sortingOrder = i5297[22]
  i5296.lightmapIndex = i5297[23]
  i5296.lightmapSceneIndex = i5297[24]
  i5296.lightmapScaleOffset = new pc.Vec4( i5297[25], i5297[26], i5297[27], i5297[28] )
  i5296.lightProbeUsage = i5297[29]
  i5296.reflectionProbeUsage = i5297[30]
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5303 = data
  i5302.name = i5303[0]
  i5302.tagId = i5303[1]
  i5302.enabled = !!i5303[2]
  i5302.isStatic = !!i5303[3]
  i5302.layer = i5303[4]
  return i5302
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i5304 = root || request.c( 'HeartBreakEffect' )
  var i5305 = data
  i5304.defaultLifeTime = i5305[0]
  request.r(i5305[1], i5305[2], 0, i5304, 'tf')
  return i5304
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i5306 = root || request.c( 'BlinkEffect' )
  var i5307 = data
  request.r(i5307[0], i5307[1], 0, i5306, 'tf')
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5309 = data
  request.r(i5309[0], i5309[1], 0, i5308, 'mesh')
  i5308.meshCount = i5309[2]
  i5308.activeVertexStreamsCount = i5309[3]
  i5308.alignment = i5309[4]
  i5308.renderMode = i5309[5]
  i5308.sortMode = i5309[6]
  i5308.lengthScale = i5309[7]
  i5308.velocityScale = i5309[8]
  i5308.cameraVelocityScale = i5309[9]
  i5308.normalDirection = i5309[10]
  i5308.sortingFudge = i5309[11]
  i5308.minParticleSize = i5309[12]
  i5308.maxParticleSize = i5309[13]
  i5308.pivot = new pc.Vec3( i5309[14], i5309[15], i5309[16] )
  request.r(i5309[17], i5309[18], 0, i5308, 'trailMaterial')
  i5308.applyActiveColorSpace = !!i5309[19]
  i5308.enabled = !!i5309[20]
  request.r(i5309[21], i5309[22], 0, i5308, 'sharedMaterial')
  var i5311 = i5309[23]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 2) {
  request.r(i5311[i + 0], i5311[i + 1], 2, i5310, '')
  }
  i5308.sharedMaterials = i5310
  i5308.receiveShadows = !!i5309[24]
  i5308.shadowCastingMode = i5309[25]
  i5308.sortingLayerID = i5309[26]
  i5308.sortingOrder = i5309[27]
  i5308.lightmapIndex = i5309[28]
  i5308.lightmapSceneIndex = i5309[29]
  i5308.lightmapScaleOffset = new pc.Vec4( i5309[30], i5309[31], i5309[32], i5309[33] )
  i5308.lightProbeUsage = i5309[34]
  i5308.reflectionProbeUsage = i5309[35]
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5313 = data
  i5312.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5313[0], i5312.main)
  i5312.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5313[1], i5312.colorBySpeed)
  i5312.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5313[2], i5312.colorOverLifetime)
  i5312.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5313[3], i5312.emission)
  i5312.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5313[4], i5312.rotationBySpeed)
  i5312.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5313[5], i5312.rotationOverLifetime)
  i5312.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5313[6], i5312.shape)
  i5312.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5313[7], i5312.sizeBySpeed)
  i5312.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5313[8], i5312.sizeOverLifetime)
  i5312.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5313[9], i5312.textureSheetAnimation)
  i5312.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5313[10], i5312.velocityOverLifetime)
  i5312.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5313[11], i5312.noise)
  i5312.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5313[12], i5312.inheritVelocity)
  i5312.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5313[13], i5312.forceOverLifetime)
  i5312.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5313[14], i5312.limitVelocityOverLifetime)
  i5312.useAutoRandomSeed = !!i5313[15]
  i5312.randomSeed = i5313[16]
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5314 = root || new pc.ParticleSystemMain()
  var i5315 = data
  i5314.duration = i5315[0]
  i5314.loop = !!i5315[1]
  i5314.prewarm = !!i5315[2]
  i5314.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[3], i5314.startDelay)
  i5314.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[4], i5314.startLifetime)
  i5314.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[5], i5314.startSpeed)
  i5314.startSize3D = !!i5315[6]
  i5314.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[7], i5314.startSizeX)
  i5314.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[8], i5314.startSizeY)
  i5314.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[9], i5314.startSizeZ)
  i5314.startRotation3D = !!i5315[10]
  i5314.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[11], i5314.startRotationX)
  i5314.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[12], i5314.startRotationY)
  i5314.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[13], i5314.startRotationZ)
  i5314.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5315[14], i5314.startColor)
  i5314.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5315[15], i5314.gravityModifier)
  i5314.simulationSpace = i5315[16]
  request.r(i5315[17], i5315[18], 0, i5314, 'customSimulationSpace')
  i5314.simulationSpeed = i5315[19]
  i5314.useUnscaledTime = !!i5315[20]
  i5314.scalingMode = i5315[21]
  i5314.playOnAwake = !!i5315[22]
  i5314.maxParticles = i5315[23]
  i5314.emitterVelocityMode = i5315[24]
  i5314.stopAction = i5315[25]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5316 = root || new pc.MinMaxCurve()
  var i5317 = data
  i5316.mode = i5317[0]
  i5316.curveMin = new pc.AnimationCurve( { keys_flow: i5317[1] } )
  i5316.curveMax = new pc.AnimationCurve( { keys_flow: i5317[2] } )
  i5316.curveMultiplier = i5317[3]
  i5316.constantMin = i5317[4]
  i5316.constantMax = i5317[5]
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5318 = root || new pc.MinMaxGradient()
  var i5319 = data
  i5318.mode = i5319[0]
  i5318.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5319[1], i5318.gradientMin)
  i5318.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5319[2], i5318.gradientMax)
  i5318.colorMin = new pc.Color(i5319[3], i5319[4], i5319[5], i5319[6])
  i5318.colorMax = new pc.Color(i5319[7], i5319[8], i5319[9], i5319[10])
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5321 = data
  i5320.mode = i5321[0]
  var i5323 = i5321[1]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5323[i + 0]) );
  }
  i5320.colorKeys = i5322
  var i5325 = i5321[2]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5325[i + 0]) );
  }
  i5320.alphaKeys = i5324
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5326 = root || new pc.ParticleSystemColorBySpeed()
  var i5327 = data
  i5326.enabled = !!i5327[0]
  i5326.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5327[1], i5326.color)
  i5326.range = new pc.Vec2( i5327[2], i5327[3] )
  return i5326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5331 = data
  i5330.color = new pc.Color(i5331[0], i5331[1], i5331[2], i5331[3])
  i5330.time = i5331[4]
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5335 = data
  i5334.alpha = i5335[0]
  i5334.time = i5335[1]
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5336 = root || new pc.ParticleSystemColorOverLifetime()
  var i5337 = data
  i5336.enabled = !!i5337[0]
  i5336.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5337[1], i5336.color)
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5338 = root || new pc.ParticleSystemEmitter()
  var i5339 = data
  i5338.enabled = !!i5339[0]
  i5338.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5339[1], i5338.rateOverTime)
  i5338.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5339[2], i5338.rateOverDistance)
  var i5341 = i5339[3]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5341[i + 0]) );
  }
  i5338.bursts = i5340
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5344 = root || new pc.ParticleSystemBurst()
  var i5345 = data
  i5344.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5345[0], i5344.count)
  i5344.cycleCount = i5345[1]
  i5344.minCount = i5345[2]
  i5344.maxCount = i5345[3]
  i5344.repeatInterval = i5345[4]
  i5344.time = i5345[5]
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5346 = root || new pc.ParticleSystemRotationBySpeed()
  var i5347 = data
  i5346.enabled = !!i5347[0]
  i5346.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5347[1], i5346.x)
  i5346.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5347[2], i5346.y)
  i5346.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5347[3], i5346.z)
  i5346.separateAxes = !!i5347[4]
  i5346.range = new pc.Vec2( i5347[5], i5347[6] )
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5348 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5349 = data
  i5348.enabled = !!i5349[0]
  i5348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5349[1], i5348.x)
  i5348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5349[2], i5348.y)
  i5348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5349[3], i5348.z)
  i5348.separateAxes = !!i5349[4]
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5350 = root || new pc.ParticleSystemShape()
  var i5351 = data
  i5350.enabled = !!i5351[0]
  i5350.shapeType = i5351[1]
  i5350.randomDirectionAmount = i5351[2]
  i5350.sphericalDirectionAmount = i5351[3]
  i5350.randomPositionAmount = i5351[4]
  i5350.alignToDirection = !!i5351[5]
  i5350.radius = i5351[6]
  i5350.radiusMode = i5351[7]
  i5350.radiusSpread = i5351[8]
  i5350.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[9], i5350.radiusSpeed)
  i5350.radiusThickness = i5351[10]
  i5350.angle = i5351[11]
  i5350.length = i5351[12]
  i5350.boxThickness = new pc.Vec3( i5351[13], i5351[14], i5351[15] )
  i5350.meshShapeType = i5351[16]
  request.r(i5351[17], i5351[18], 0, i5350, 'mesh')
  request.r(i5351[19], i5351[20], 0, i5350, 'meshRenderer')
  request.r(i5351[21], i5351[22], 0, i5350, 'skinnedMeshRenderer')
  i5350.useMeshMaterialIndex = !!i5351[23]
  i5350.meshMaterialIndex = i5351[24]
  i5350.useMeshColors = !!i5351[25]
  i5350.normalOffset = i5351[26]
  i5350.arc = i5351[27]
  i5350.arcMode = i5351[28]
  i5350.arcSpread = i5351[29]
  i5350.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[30], i5350.arcSpeed)
  i5350.donutRadius = i5351[31]
  i5350.position = new pc.Vec3( i5351[32], i5351[33], i5351[34] )
  i5350.rotation = new pc.Vec3( i5351[35], i5351[36], i5351[37] )
  i5350.scale = new pc.Vec3( i5351[38], i5351[39], i5351[40] )
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5352 = root || new pc.ParticleSystemSizeBySpeed()
  var i5353 = data
  i5352.enabled = !!i5353[0]
  i5352.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[1], i5352.x)
  i5352.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[2], i5352.y)
  i5352.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[3], i5352.z)
  i5352.separateAxes = !!i5353[4]
  i5352.range = new pc.Vec2( i5353[5], i5353[6] )
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5354 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5355 = data
  i5354.enabled = !!i5355[0]
  i5354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5355[1], i5354.x)
  i5354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5355[2], i5354.y)
  i5354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5355[3], i5354.z)
  i5354.separateAxes = !!i5355[4]
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5356 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5357 = data
  i5356.enabled = !!i5357[0]
  i5356.mode = i5357[1]
  i5356.animation = i5357[2]
  i5356.numTilesX = i5357[3]
  i5356.numTilesY = i5357[4]
  i5356.useRandomRow = !!i5357[5]
  i5356.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[6], i5356.frameOverTime)
  i5356.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[7], i5356.startFrame)
  i5356.cycleCount = i5357[8]
  i5356.rowIndex = i5357[9]
  i5356.flipU = i5357[10]
  i5356.flipV = i5357[11]
  i5356.spriteCount = i5357[12]
  var i5359 = i5357[13]
  var i5358 = []
  for(var i = 0; i < i5359.length; i += 2) {
  request.r(i5359[i + 0], i5359[i + 1], 2, i5358, '')
  }
  i5356.sprites = i5358
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5362 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5363 = data
  i5362.enabled = !!i5363[0]
  i5362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[1], i5362.x)
  i5362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[2], i5362.y)
  i5362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[3], i5362.z)
  i5362.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[4], i5362.radial)
  i5362.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[5], i5362.speedModifier)
  i5362.space = i5363[6]
  i5362.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[7], i5362.orbitalX)
  i5362.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[8], i5362.orbitalY)
  i5362.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[9], i5362.orbitalZ)
  i5362.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[10], i5362.orbitalOffsetX)
  i5362.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[11], i5362.orbitalOffsetY)
  i5362.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[12], i5362.orbitalOffsetZ)
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5364 = root || new pc.ParticleSystemNoise()
  var i5365 = data
  i5364.enabled = !!i5365[0]
  i5364.separateAxes = !!i5365[1]
  i5364.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[2], i5364.strengthX)
  i5364.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[3], i5364.strengthY)
  i5364.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[4], i5364.strengthZ)
  i5364.frequency = i5365[5]
  i5364.damping = !!i5365[6]
  i5364.octaveCount = i5365[7]
  i5364.octaveMultiplier = i5365[8]
  i5364.octaveScale = i5365[9]
  i5364.quality = i5365[10]
  i5364.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[11], i5364.scrollSpeed)
  i5364.scrollSpeedMultiplier = i5365[12]
  i5364.remapEnabled = !!i5365[13]
  i5364.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[14], i5364.remapX)
  i5364.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[15], i5364.remapY)
  i5364.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[16], i5364.remapZ)
  i5364.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[17], i5364.positionAmount)
  i5364.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[18], i5364.rotationAmount)
  i5364.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[19], i5364.sizeAmount)
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5366 = root || new pc.ParticleSystemInheritVelocity()
  var i5367 = data
  i5366.enabled = !!i5367[0]
  i5366.mode = i5367[1]
  i5366.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[2], i5366.curve)
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5368 = root || new pc.ParticleSystemForceOverLifetime()
  var i5369 = data
  i5368.enabled = !!i5369[0]
  i5368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5369[1], i5368.x)
  i5368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5369[2], i5368.y)
  i5368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5369[3], i5368.z)
  i5368.space = i5369[4]
  i5368.randomized = !!i5369[5]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5370 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5371 = data
  i5370.enabled = !!i5371[0]
  i5370.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[1], i5370.limit)
  i5370.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[2], i5370.limitX)
  i5370.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[3], i5370.limitY)
  i5370.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[4], i5370.limitZ)
  i5370.dampen = i5371[5]
  i5370.separateAxes = !!i5371[6]
  i5370.space = i5371[7]
  i5370.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[8], i5370.drag)
  i5370.multiplyDragByParticleSize = !!i5371[9]
  i5370.multiplyDragByParticleVelocity = !!i5371[10]
  return i5370
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i5372 = root || request.c( 'StarExploreFX' )
  var i5373 = data
  request.r(i5373[0], i5373[1], 0, i5372, 'tf')
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5375 = data
  i5374.name = i5375[0]
  i5374.halfPrecision = !!i5375[1]
  i5374.useSimplification = !!i5375[2]
  i5374.useUInt32IndexFormat = !!i5375[3]
  i5374.vertexCount = i5375[4]
  i5374.aabb = i5375[5]
  var i5377 = i5375[6]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 1) {
    i5376.push( !!i5377[i + 0] );
  }
  i5374.streams = i5376
  i5374.vertices = i5375[7]
  var i5379 = i5375[8]
  var i5378 = []
  for(var i = 0; i < i5379.length; i += 1) {
    i5378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5379[i + 0]) );
  }
  i5374.subMeshes = i5378
  var i5381 = i5375[9]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 16) {
    i5380.push( new pc.Mat4().setData(i5381[i + 0], i5381[i + 1], i5381[i + 2], i5381[i + 3],  i5381[i + 4], i5381[i + 5], i5381[i + 6], i5381[i + 7],  i5381[i + 8], i5381[i + 9], i5381[i + 10], i5381[i + 11],  i5381[i + 12], i5381[i + 13], i5381[i + 14], i5381[i + 15]) );
  }
  i5374.bindposes = i5380
  var i5383 = i5375[10]
  var i5382 = []
  for(var i = 0; i < i5383.length; i += 1) {
    i5382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5383[i + 0]) );
  }
  i5374.blendShapes = i5382
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5389 = data
  i5388.triangles = i5389[0]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5395 = data
  i5394.name = i5395[0]
  var i5397 = i5395[1]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5397[i + 0]) );
  }
  i5394.frames = i5396
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5399 = data
  i5398.name = i5399[0]
  i5398.index = i5399[1]
  i5398.startup = !!i5399[2]
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5401 = data
  i5400.pivot = new pc.Vec2( i5401[0], i5401[1] )
  i5400.anchorMin = new pc.Vec2( i5401[2], i5401[3] )
  i5400.anchorMax = new pc.Vec2( i5401[4], i5401[5] )
  i5400.sizeDelta = new pc.Vec2( i5401[6], i5401[7] )
  i5400.anchoredPosition3D = new pc.Vec3( i5401[8], i5401[9], i5401[10] )
  i5400.rotation = new pc.Quat(i5401[11], i5401[12], i5401[13], i5401[14])
  i5400.scale = new pc.Vec3( i5401[15], i5401[16], i5401[17] )
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5403 = data
  i5402.planeDistance = i5403[0]
  i5402.referencePixelsPerUnit = i5403[1]
  i5402.isFallbackOverlay = !!i5403[2]
  i5402.renderMode = i5403[3]
  i5402.renderOrder = i5403[4]
  i5402.sortingLayerName = i5403[5]
  i5402.sortingOrder = i5403[6]
  i5402.scaleFactor = i5403[7]
  request.r(i5403[8], i5403[9], 0, i5402, 'worldCamera')
  i5402.overrideSorting = !!i5403[10]
  i5402.pixelPerfect = !!i5403[11]
  i5402.targetDisplay = i5403[12]
  i5402.overridePixelPerfect = !!i5403[13]
  i5402.enabled = !!i5403[14]
  return i5402
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5404 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5405 = data
  i5404.m_UiScaleMode = i5405[0]
  i5404.m_ReferencePixelsPerUnit = i5405[1]
  i5404.m_ScaleFactor = i5405[2]
  i5404.m_ReferenceResolution = new pc.Vec2( i5405[3], i5405[4] )
  i5404.m_ScreenMatchMode = i5405[5]
  i5404.m_MatchWidthOrHeight = i5405[6]
  i5404.m_PhysicalUnit = i5405[7]
  i5404.m_FallbackScreenDPI = i5405[8]
  i5404.m_DefaultSpriteDPI = i5405[9]
  i5404.m_DynamicPixelsPerUnit = i5405[10]
  i5404.m_PresetInfoIsWorld = !!i5405[11]
  return i5404
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5406 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5407 = data
  i5406.m_IgnoreReversedGraphics = !!i5407[0]
  i5406.m_BlockingObjects = i5407[1]
  i5406.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5407[2] )
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5409 = data
  request.r(i5409[0], i5409[1], 0, i5408, 'animatorController')
  request.r(i5409[2], i5409[3], 0, i5408, 'avatar')
  i5408.updateMode = i5409[4]
  i5408.hasTransformHierarchy = !!i5409[5]
  i5408.applyRootMotion = !!i5409[6]
  var i5411 = i5409[7]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 2) {
  request.r(i5411[i + 0], i5411[i + 1], 2, i5410, '')
  }
  i5408.humanBones = i5410
  i5408.enabled = !!i5409[8]
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5415 = data
  i5414.cullTransparentMesh = !!i5415[0]
  return i5414
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5416 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5417 = data
  i5416.m_hasFontAssetChanged = !!i5417[0]
  request.r(i5417[1], i5417[2], 0, i5416, 'm_baseMaterial')
  i5416.m_maskOffset = new pc.Vec4( i5417[3], i5417[4], i5417[5], i5417[6] )
  i5416.m_text = i5417[7]
  i5416.m_isRightToLeft = !!i5417[8]
  request.r(i5417[9], i5417[10], 0, i5416, 'm_fontAsset')
  request.r(i5417[11], i5417[12], 0, i5416, 'm_sharedMaterial')
  var i5419 = i5417[13]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 2) {
  request.r(i5419[i + 0], i5419[i + 1], 2, i5418, '')
  }
  i5416.m_fontSharedMaterials = i5418
  request.r(i5417[14], i5417[15], 0, i5416, 'm_fontMaterial')
  var i5421 = i5417[16]
  var i5420 = []
  for(var i = 0; i < i5421.length; i += 2) {
  request.r(i5421[i + 0], i5421[i + 1], 2, i5420, '')
  }
  i5416.m_fontMaterials = i5420
  i5416.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5417[17], i5417[18], i5417[19], i5417[20])
  i5416.m_fontColor = new pc.Color(i5417[21], i5417[22], i5417[23], i5417[24])
  i5416.m_enableVertexGradient = !!i5417[25]
  i5416.m_colorMode = i5417[26]
  i5416.m_fontColorGradient = request.d('TMPro.VertexGradient', i5417[27], i5416.m_fontColorGradient)
  request.r(i5417[28], i5417[29], 0, i5416, 'm_fontColorGradientPreset')
  request.r(i5417[30], i5417[31], 0, i5416, 'm_spriteAsset')
  i5416.m_tintAllSprites = !!i5417[32]
  request.r(i5417[33], i5417[34], 0, i5416, 'm_StyleSheet')
  i5416.m_TextStyleHashCode = i5417[35]
  i5416.m_overrideHtmlColors = !!i5417[36]
  i5416.m_faceColor = UnityEngine.Color32.ConstructColor(i5417[37], i5417[38], i5417[39], i5417[40])
  i5416.m_fontSize = i5417[41]
  i5416.m_fontSizeBase = i5417[42]
  i5416.m_fontWeight = i5417[43]
  i5416.m_enableAutoSizing = !!i5417[44]
  i5416.m_fontSizeMin = i5417[45]
  i5416.m_fontSizeMax = i5417[46]
  i5416.m_fontStyle = i5417[47]
  i5416.m_HorizontalAlignment = i5417[48]
  i5416.m_VerticalAlignment = i5417[49]
  i5416.m_textAlignment = i5417[50]
  i5416.m_characterSpacing = i5417[51]
  i5416.m_wordSpacing = i5417[52]
  i5416.m_lineSpacing = i5417[53]
  i5416.m_lineSpacingMax = i5417[54]
  i5416.m_paragraphSpacing = i5417[55]
  i5416.m_charWidthMaxAdj = i5417[56]
  i5416.m_TextWrappingMode = i5417[57]
  i5416.m_wordWrappingRatios = i5417[58]
  i5416.m_overflowMode = i5417[59]
  request.r(i5417[60], i5417[61], 0, i5416, 'm_linkedTextComponent')
  request.r(i5417[62], i5417[63], 0, i5416, 'parentLinkedComponent')
  i5416.m_enableKerning = !!i5417[64]
  var i5423 = i5417[65]
  var i5422 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5423.length; i += 1) {
    i5422.add(i5423[i + 0]);
  }
  i5416.m_ActiveFontFeatures = i5422
  i5416.m_enableExtraPadding = !!i5417[66]
  i5416.checkPaddingRequired = !!i5417[67]
  i5416.m_isRichText = !!i5417[68]
  i5416.m_parseCtrlCharacters = !!i5417[69]
  i5416.m_isOrthographic = !!i5417[70]
  i5416.m_isCullingEnabled = !!i5417[71]
  i5416.m_horizontalMapping = i5417[72]
  i5416.m_verticalMapping = i5417[73]
  i5416.m_uvLineOffset = i5417[74]
  i5416.m_geometrySortingOrder = i5417[75]
  i5416.m_IsTextObjectScaleStatic = !!i5417[76]
  i5416.m_VertexBufferAutoSizeReduction = !!i5417[77]
  i5416.m_useMaxVisibleDescender = !!i5417[78]
  i5416.m_pageToDisplay = i5417[79]
  i5416.m_margin = new pc.Vec4( i5417[80], i5417[81], i5417[82], i5417[83] )
  i5416.m_isUsingLegacyAnimationComponent = !!i5417[84]
  i5416.m_isVolumetricText = !!i5417[85]
  request.r(i5417[86], i5417[87], 0, i5416, 'm_Material')
  i5416.m_EmojiFallbackSupport = !!i5417[88]
  i5416.m_Maskable = !!i5417[89]
  i5416.m_Color = new pc.Color(i5417[90], i5417[91], i5417[92], i5417[93])
  i5416.m_RaycastTarget = !!i5417[94]
  i5416.m_RaycastPadding = new pc.Vec4( i5417[95], i5417[96], i5417[97], i5417[98] )
  return i5416
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5424 = root || request.c( 'TMPro.VertexGradient' )
  var i5425 = data
  i5424.topLeft = new pc.Color(i5425[0], i5425[1], i5425[2], i5425[3])
  i5424.topRight = new pc.Color(i5425[4], i5425[5], i5425[6], i5425[7])
  i5424.bottomLeft = new pc.Color(i5425[8], i5425[9], i5425[10], i5425[11])
  i5424.bottomRight = new pc.Color(i5425[12], i5425[13], i5425[14], i5425[15])
  return i5424
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5428 = root || request.c( 'UnityEngine.UI.Image' )
  var i5429 = data
  request.r(i5429[0], i5429[1], 0, i5428, 'm_Sprite')
  i5428.m_Type = i5429[2]
  i5428.m_PreserveAspect = !!i5429[3]
  i5428.m_FillCenter = !!i5429[4]
  i5428.m_FillMethod = i5429[5]
  i5428.m_FillAmount = i5429[6]
  i5428.m_FillClockwise = !!i5429[7]
  i5428.m_FillOrigin = i5429[8]
  i5428.m_UseSpriteMesh = !!i5429[9]
  i5428.m_PixelsPerUnitMultiplier = i5429[10]
  request.r(i5429[11], i5429[12], 0, i5428, 'm_Material')
  i5428.m_Maskable = !!i5429[13]
  i5428.m_Color = new pc.Color(i5429[14], i5429[15], i5429[16], i5429[17])
  i5428.m_RaycastTarget = !!i5429[18]
  i5428.m_RaycastPadding = new pc.Vec4( i5429[19], i5429[20], i5429[21], i5429[22] )
  return i5428
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5430 = root || request.c( 'UnityEngine.UI.Button' )
  var i5431 = data
  i5430.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5431[0], i5430.m_OnClick)
  i5430.m_Navigation = request.d('UnityEngine.UI.Navigation', i5431[1], i5430.m_Navigation)
  i5430.m_Transition = i5431[2]
  i5430.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5431[3], i5430.m_Colors)
  i5430.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5431[4], i5430.m_SpriteState)
  i5430.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5431[5], i5430.m_AnimationTriggers)
  i5430.m_Interactable = !!i5431[6]
  request.r(i5431[7], i5431[8], 0, i5430, 'm_TargetGraphic')
  return i5430
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5432 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5433 = data
  i5432.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5433[0], i5432.m_PersistentCalls)
  return i5432
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5434 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5435 = data
  var i5437 = i5435[0]
  var i5436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5437.length; i += 1) {
    i5436.add(request.d('UnityEngine.Events.PersistentCall', i5437[i + 0]));
  }
  i5434.m_Calls = i5436
  return i5434
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5440 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5441 = data
  request.r(i5441[0], i5441[1], 0, i5440, 'm_Target')
  i5440.m_TargetAssemblyTypeName = i5441[2]
  i5440.m_MethodName = i5441[3]
  i5440.m_Mode = i5441[4]
  i5440.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5441[5], i5440.m_Arguments)
  i5440.m_CallState = i5441[6]
  return i5440
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5442 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5443 = data
  request.r(i5443[0], i5443[1], 0, i5442, 'm_ObjectArgument')
  i5442.m_ObjectArgumentAssemblyTypeName = i5443[2]
  i5442.m_IntArgument = i5443[3]
  i5442.m_FloatArgument = i5443[4]
  i5442.m_StringArgument = i5443[5]
  i5442.m_BoolArgument = !!i5443[6]
  return i5442
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5444 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5445 = data
  i5444.m_Mode = i5445[0]
  i5444.m_WrapAround = !!i5445[1]
  request.r(i5445[2], i5445[3], 0, i5444, 'm_SelectOnUp')
  request.r(i5445[4], i5445[5], 0, i5444, 'm_SelectOnDown')
  request.r(i5445[6], i5445[7], 0, i5444, 'm_SelectOnLeft')
  request.r(i5445[8], i5445[9], 0, i5444, 'm_SelectOnRight')
  return i5444
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5446 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5447 = data
  i5446.m_NormalColor = new pc.Color(i5447[0], i5447[1], i5447[2], i5447[3])
  i5446.m_HighlightedColor = new pc.Color(i5447[4], i5447[5], i5447[6], i5447[7])
  i5446.m_PressedColor = new pc.Color(i5447[8], i5447[9], i5447[10], i5447[11])
  i5446.m_SelectedColor = new pc.Color(i5447[12], i5447[13], i5447[14], i5447[15])
  i5446.m_DisabledColor = new pc.Color(i5447[16], i5447[17], i5447[18], i5447[19])
  i5446.m_ColorMultiplier = i5447[20]
  i5446.m_FadeDuration = i5447[21]
  return i5446
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5448 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5449 = data
  request.r(i5449[0], i5449[1], 0, i5448, 'm_HighlightedSprite')
  request.r(i5449[2], i5449[3], 0, i5448, 'm_PressedSprite')
  request.r(i5449[4], i5449[5], 0, i5448, 'm_SelectedSprite')
  request.r(i5449[6], i5449[7], 0, i5448, 'm_DisabledSprite')
  return i5448
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5450 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5451 = data
  i5450.m_NormalTrigger = i5451[0]
  i5450.m_HighlightedTrigger = i5451[1]
  i5450.m_PressedTrigger = i5451[2]
  i5450.m_SelectedTrigger = i5451[3]
  i5450.m_DisabledTrigger = i5451[4]
  return i5450
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5452 = root || request.c( 'Ply_Pool' )
  var i5453 = data
  var i5455 = i5453[0]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( request.d('Ply_Pool+PoolAmount', i5455[i + 0]) );
  }
  i5452.poolAmounts = i5454
  request.r(i5453[1], i5453[2], 0, i5452, 'poolHolder')
  return i5452
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5458 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5459 = data
  i5458.type = i5459[0]
  i5458.amount = i5459[1]
  request.r(i5459[2], i5459[3], 0, i5458, 'gameUnit')
  return i5458
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5460 = root || request.c( 'Ply_SoundManager' )
  var i5461 = data
  var i5463 = i5461[0]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.push( request.d('Ply_SoundManager+FxAudio', i5463[i + 0]) );
  }
  i5460.fxAudios = i5462
  var i5465 = i5461[1]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 2) {
  request.r(i5465[i + 0], i5465[i + 1], 2, i5464, '')
  }
  i5460.audioClips = i5464
  request.r(i5461[2], i5461[3], 0, i5460, 'sound')
  return i5460
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i5468 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i5469 = data
  i5468.fxType = i5469[0]
  request.r(i5469[1], i5469[2], 0, i5468, 'audioClip')
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5473 = data
  request.r(i5473[0], i5473[1], 0, i5472, 'clip')
  request.r(i5473[2], i5473[3], 0, i5472, 'outputAudioMixerGroup')
  i5472.playOnAwake = !!i5473[4]
  i5472.loop = !!i5473[5]
  i5472.time = i5473[6]
  i5472.volume = i5473[7]
  i5472.pitch = i5473[8]
  i5472.enabled = !!i5473[9]
  return i5472
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5474 = root || request.c( 'GameManager' )
  var i5475 = data
  i5474.isPlaying = !!i5475[0]
  i5474.isTutorial = !!i5475[1]
  i5474.isGotoStore = !!i5475[2]
  i5474.countMove = i5475[3]
  i5474.currentLayer = i5475[4]
  return i5474
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5476 = root || request.c( 'UIManager' )
  var i5477 = data
  request.r(i5477[0], i5477[1], 0, i5476, 'winUI')
  request.r(i5477[2], i5477[3], 0, i5476, 'loseUI')
  request.r(i5477[4], i5477[5], 0, i5476, 'tutorial')
  request.r(i5477[6], i5477[7], 0, i5476, 'verticalUI')
  request.r(i5477[8], i5477[9], 0, i5476, 'horizontalUI')
  request.r(i5477[10], i5477[11], 0, i5476, 'downloadBtn')
  i5476.screenWidth = i5477[12]
  i5476.screenHeight = i5477[13]
  i5476.scaleHeightOnWidth = i5477[14]
  i5476.isVertical = !!i5477[15]
  request.r(i5477[16], i5477[17], 0, i5476, 'cam')
  i5476.useContinuousScaling = !!i5477[18]
  i5476.baseOrthographicSize = i5477[19]
  i5476.baseAspect = i5477[20]
  i5476.landscapeSize = i5477[21]
  i5476.defaultPortraitSize = i5477[22]
  var i5479 = i5477[23]
  var i5478 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.add(request.d('ScreenScaleStep', i5479[i + 0]));
  }
  i5476.discreteScaleSteps = i5478
  i5476.usePerspectiveCamera = !!i5477[24]
  request.r(i5477[25], i5477[26], 0, i5476, 'perspectiveFocus')
  i5476.perspectiveFocusDistance = i5477[27]
  i5476.perspectivePadding = i5477[28]
  i5476.fitRendererBounds = !!i5477[29]
  request.r(i5477[30], i5477[31], 0, i5476, 'boundsRoot')
  var i5481 = i5477[32]
  var i5480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5481.length; i += 2) {
  request.r(i5481[i + 0], i5481[i + 1], 1, i5480, '')
  }
  i5476.boundsRenderers = i5480
  return i5476
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5484 = root || request.c( 'ScreenScaleStep' )
  var i5485 = data
  i5484.heightOnWidthRatio = i5485[0]
  i5484.orthographicSize = i5485[1]
  return i5484
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5488 = root || request.c( 'InputManager' )
  var i5489 = data
  i5488.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5489[0] )
  i5488.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5489[1] )
  i5488.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5489[2] )
  i5488.isDragging = !!i5489[3]
  return i5488
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i5490 = root || request.c( 'PhaseManager' )
  var i5491 = data
  var i5493 = i5491[0]
  var i5492 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.add(request.d('PhaseData', i5493[i + 0]));
  }
  i5490.phases = i5492
  i5490.transitionDuration = i5491[1]
  i5490.delayBeforeNextPhase = i5491[2]
  i5490.offScreenLeftX = i5491[3]
  i5490.offScreenRightX = i5491[4]
  i5490.centerScreenX = i5491[5]
  i5490.currentPhaseIndex = i5491[6]
  i5490.currentStepCount = i5491[7]
  return i5490
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i5496 = root || request.c( 'PhaseData' )
  var i5497 = data
  request.r(i5497[0], i5497[1], 0, i5496, 'phaseObject')
  i5496.totalSteps = i5497[2]
  i5496.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i5497[3], i5496.onPhaseReady)
  return i5496
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5498 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5499 = data
  i5498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5499[0], i5498.m_PersistentCalls)
  return i5498
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i5500 = root || request.c( 'HandTutManager' )
  var i5501 = data
  var i5503 = i5501[0]
  var i5502 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5503.length; i += 2) {
  request.r(i5503[i + 0], i5503[i + 1], 1, i5502, '')
  }
  i5500.items = i5502
  request.r(i5501[1], i5501[2], 0, i5500, 'knife')
  request.r(i5501[3], i5501[4], 0, i5500, 'handTutObject')
  request.r(i5501[5], i5501[6], 0, i5500, 'tapToCookObject')
  request.r(i5501[7], i5501[8], 0, i5500, 'oilItem')
  request.r(i5501[9], i5501[10], 0, i5500, 'stoveToggleEvent')
  i5500.noDelayItemCount = i5501[11]
  i5500.waitForBowlIntro = !!i5501[12]
  i5500.idleDelay = i5501[13]
  i5500.moveDuration = i5501[14]
  i5500.clickScaleDuration = i5501[15]
  i5500.waitAtEndDuration = i5501[16]
  i5500.handZPosition = i5501[17]
  i5500.clickScaleMultiplier = i5501[18]
  i5500.moveEase = i5501[19]
  return i5500
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i5506 = root || request.c( 'SortChildByZPos' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, 'transformToSort')
  var i5509 = i5507[2]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 1, i5508, '')
  }
  i5506.childrenToSort = i5508
  i5506.zOffset = i5507[3]
  i5506.baseZ = i5507[4]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5513 = data
  i5512.aspect = i5513[0]
  i5512.orthographic = !!i5513[1]
  i5512.orthographicSize = i5513[2]
  i5512.backgroundColor = new pc.Color(i5513[3], i5513[4], i5513[5], i5513[6])
  i5512.nearClipPlane = i5513[7]
  i5512.farClipPlane = i5513[8]
  i5512.fieldOfView = i5513[9]
  i5512.depth = i5513[10]
  i5512.clearFlags = i5513[11]
  i5512.cullingMask = i5513[12]
  i5512.rect = i5513[13]
  request.r(i5513[14], i5513[15], 0, i5512, 'targetTexture')
  i5512.usePhysicalProperties = !!i5513[16]
  i5512.focalLength = i5513[17]
  i5512.sensorSize = new pc.Vec2( i5513[18], i5513[19] )
  i5512.lensShift = new pc.Vec2( i5513[20], i5513[21] )
  i5512.gateFit = i5513[22]
  i5512.commandBufferCount = i5513[23]
  i5512.cameraType = i5513[24]
  i5512.enabled = !!i5513[25]
  return i5512
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5515 = data
  request.r(i5515[0], i5515[1], 0, i5514, 'm_FirstSelected')
  i5514.m_sendNavigationEvents = !!i5515[2]
  i5514.m_DragThreshold = i5515[3]
  return i5514
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5516 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5517 = data
  i5516.m_HorizontalAxis = i5517[0]
  i5516.m_VerticalAxis = i5517[1]
  i5516.m_SubmitButton = i5517[2]
  i5516.m_CancelButton = i5517[3]
  i5516.m_InputActionsPerSecond = i5517[4]
  i5516.m_RepeatDelay = i5517[5]
  i5516.m_ForceModuleActive = !!i5517[6]
  i5516.m_SendPointerHoverToParent = !!i5517[7]
  return i5516
}

Deserializers["Item"] = function (request, data, root) {
  var i5518 = root || request.c( 'Item' )
  var i5519 = data
  i5518.isDone = !!i5519[0]
  i5518.onProcess = !!i5519[1]
  request.r(i5519[2], i5519[3], 0, i5518, 'itemDraggable')
  request.r(i5519[4], i5519[5], 0, i5518, 'itemClickable')
  request.r(i5519[6], i5519[7], 0, i5518, 'itemStirring')
  request.r(i5519[8], i5519[9], 0, i5518, 'itemKnifeSpriteMaskCutter')
  request.r(i5519[10], i5519[11], 0, i5518, 'itemSpriteMaskPainter')
  request.r(i5519[12], i5519[13], 0, i5518, 'itemMoveToTarget')
  request.r(i5519[14], i5519[15], 0, i5518, 'animator')
  i5518.itemType = i5519[16]
  request.r(i5519[17], i5519[18], 0, i5518, 'spriteRenderer')
  i5518.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5519[19], i5518.onKnifeIn)
  i5518.playMoveToTargetFinishSound = !!i5519[20]
  i5518.moveToTargetFinishFxType = i5519[21]
  request.r(i5519[22], i5519[23], 0, i5518, 'bowl')
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5521 = data
  i5520.center = new pc.Vec3( i5521[0], i5521[1], i5521[2] )
  i5520.radius = i5521[3]
  i5520.enabled = !!i5521[4]
  i5520.isTrigger = !!i5521[5]
  request.r(i5521[6], i5521[7], 0, i5520, 'material')
  return i5520
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i5522 = root || request.c( 'ItemDraggable' )
  var i5523 = data
  i5522.isDraggable = !!i5523[0]
  i5522.isUseOrderlayer = !!i5523[1]
  request.r(i5523[2], i5523[3], 0, i5522, 'returnTransform')
  i5522.setParentToReturnTransform = !!i5523[4]
  i5522.returnToExactReturnTransformPosition = !!i5523[5]
  i5522.targetItemType = i5523[6]
  request.r(i5523[7], i5523[8], 0, i5522, 'item')
  i5522.checkState = !!i5523[9]
  request.r(i5523[10], i5523[11], 0, i5522, 'shadowObject')
  i5522.liftOffset = i5523[12]
  i5522.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i5523[13], i5522.onBeginDrag)
  i5522.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i5523[14], i5522.onDropSuccess)
  i5522.onDropFail = request.d('UnityEngine.Events.UnityEvent', i5523[15], i5522.onDropFail)
  return i5522
}

Deserializers["Ply_MoveToTarget"] = function (request, data, root) {
  var i5524 = root || request.c( 'Ply_MoveToTarget' )
  var i5525 = data
  request.r(i5525[0], i5525[1], 0, i5524, 'defaultTarget')
  i5524.isMove2D = !!i5525[2]
  i5524.useVectorTarget = !!i5525[3]
  i5524.vectorTarget = new pc.Vec2( i5525[4], i5525[5] )
  i5524.duration = i5525[6]
  i5524.easeType = i5525[7]
  i5524.moveType = i5525[8]
  i5524.jumpPower = i5525[9]
  i5524.numJumps = i5525[10]
  i5524.rotate360DuringJump = !!i5525[11]
  i5524.setParentToTarget = !!i5525[12]
  i5524.onComplete = request.d('UnityEngine.Events.UnityEvent', i5525[13], i5524.onComplete)
  i5524.lockInputWhileMoving = !!i5525[14]
  i5524.resetParentBeforeMove = !!i5525[15]
  return i5524
}

Deserializers["Plate"] = function (request, data, root) {
  var i5526 = root || request.c( 'Plate' )
  var i5527 = data
  request.r(i5527[0], i5527[1], 0, i5526, 'waittingPoint')
  request.r(i5527[2], i5527[3], 0, i5526, 'targetPoint')
  request.r(i5527[4], i5527[5], 0, i5526, 'transformConveyor')
  i5526.isDone = !!i5527[6]
  i5526.onProcess = !!i5527[7]
  request.r(i5527[8], i5527[9], 0, i5526, 'itemDraggable')
  request.r(i5527[10], i5527[11], 0, i5526, 'itemClickable')
  request.r(i5527[12], i5527[13], 0, i5526, 'itemStirring')
  request.r(i5527[14], i5527[15], 0, i5526, 'itemKnifeSpriteMaskCutter')
  request.r(i5527[16], i5527[17], 0, i5526, 'itemSpriteMaskPainter')
  request.r(i5527[18], i5527[19], 0, i5526, 'itemMoveToTarget')
  request.r(i5527[20], i5527[21], 0, i5526, 'animator')
  i5526.itemType = i5527[22]
  request.r(i5527[23], i5527[24], 0, i5526, 'spriteRenderer')
  i5526.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5527[25], i5526.onKnifeIn)
  i5526.playMoveToTargetFinishSound = !!i5527[26]
  i5526.moveToTargetFinishFxType = i5527[27]
  request.r(i5527[28], i5527[29], 0, i5526, 'bowl')
  return i5526
}

Deserializers["Spoon"] = function (request, data, root) {
  var i5528 = root || request.c( 'Spoon' )
  var i5529 = data
  request.r(i5529[0], i5529[1], 0, i5528, 'spoonEmptySprite')
  request.r(i5529[2], i5529[3], 0, i5528, 'spoonFullSprite')
  i5528.canUse = !!i5529[4]
  i5528.tahiniRayDistance = i5529[5]
  request.r(i5529[6], i5529[7], 0, i5528, 'waittingPoint')
  request.r(i5529[8], i5529[9], 0, i5528, 'targetPoint')
  request.r(i5529[10], i5529[11], 0, i5528, 'transformConveyor')
  i5528.isDone = !!i5529[12]
  i5528.onProcess = !!i5529[13]
  request.r(i5529[14], i5529[15], 0, i5528, 'itemDraggable')
  request.r(i5529[16], i5529[17], 0, i5528, 'itemClickable')
  request.r(i5529[18], i5529[19], 0, i5528, 'itemStirring')
  request.r(i5529[20], i5529[21], 0, i5528, 'itemKnifeSpriteMaskCutter')
  request.r(i5529[22], i5529[23], 0, i5528, 'itemSpriteMaskPainter')
  request.r(i5529[24], i5529[25], 0, i5528, 'itemMoveToTarget')
  request.r(i5529[26], i5529[27], 0, i5528, 'animator')
  i5528.itemType = i5529[28]
  request.r(i5529[29], i5529[30], 0, i5528, 'spriteRenderer')
  i5528.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5529[31], i5528.onKnifeIn)
  i5528.playMoveToTargetFinishSound = !!i5529[32]
  i5528.moveToTargetFinishFxType = i5529[33]
  request.r(i5529[34], i5529[35], 0, i5528, 'bowl')
  return i5528
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i5530 = root || request.c( 'Ply_ToggleEvent' )
  var i5531 = data
  i5530.isOn = !!i5531[0]
  i5530.applyStateOnEnable = !!i5531[1]
  i5530.applyStateOnClick = !!i5531[2]
  request.r(i5531[3], i5531[4], 0, i5530, 'targetObject')
  i5530.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i5531[5], i5530.onTurnOn)
  i5530.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i5531[6], i5530.onTurnOff)
  return i5530
}

Deserializers["Pan"] = function (request, data, root) {
  var i5532 = root || request.c( 'Pan' )
  var i5533 = data
  var i5535 = i5533[0]
  var i5534 = new (System.Collections.Generic.List$1(Bridge.ns('Cake')))
  for(var i = 0; i < i5535.length; i += 2) {
  request.r(i5535[i + 0], i5535[i + 1], 1, i5534, '')
  }
  i5532.cakes = i5534
  var i5537 = i5533[1]
  var i5536 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5537.length; i += 2) {
  request.r(i5537[i + 0], i5537[i + 1], 1, i5536, '')
  }
  i5532.cakesOnPlate = i5536
  request.r(i5533[2], i5533[3], 0, i5532, 'smokeFX')
  request.r(i5533[4], i5533[5], 0, i5532, 'jumpingFX')
  i5532.cakeFryDuration = i5533[6]
  i5532.isOilIn = !!i5533[7]
  i5532.isTurnOnStove = !!i5533[8]
  request.r(i5533[9], i5533[10], 0, i5532, 'cakePlateAnimator')
  i5532.isDone = !!i5533[11]
  i5532.onProcess = !!i5533[12]
  request.r(i5533[13], i5533[14], 0, i5532, 'itemDraggable')
  request.r(i5533[15], i5533[16], 0, i5532, 'itemClickable')
  request.r(i5533[17], i5533[18], 0, i5532, 'itemStirring')
  request.r(i5533[19], i5533[20], 0, i5532, 'itemKnifeSpriteMaskCutter')
  request.r(i5533[21], i5533[22], 0, i5532, 'itemSpriteMaskPainter')
  request.r(i5533[23], i5533[24], 0, i5532, 'itemMoveToTarget')
  request.r(i5533[25], i5533[26], 0, i5532, 'animator')
  i5532.itemType = i5533[27]
  request.r(i5533[28], i5533[29], 0, i5532, 'spriteRenderer')
  i5532.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5533[30], i5532.onKnifeIn)
  i5532.playMoveToTargetFinishSound = !!i5533[31]
  i5532.moveToTargetFinishFxType = i5533[32]
  request.r(i5533[33], i5533[34], 0, i5532, 'bowl')
  return i5532
}

Deserializers["Cake"] = function (request, data, root) {
  var i5540 = root || request.c( 'Cake' )
  var i5541 = data
  request.r(i5541[0], i5541[1], 0, i5540, 'pan')
  i5540.fryDuration = i5541[2]
  i5540.fryTimeElapsed = i5541[3]
  i5540.hasStartedFrying = !!i5541[4]
  i5540.isFrying = !!i5541[5]
  i5540.isFried = !!i5541[6]
  i5540.onFryComplete = request.d('UnityEngine.Events.UnityEvent', i5541[7], i5540.onFryComplete)
  i5540.fryShakeStrength = i5541[8]
  i5540.fryShakeDuration = i5541[9]
  i5540.fryShakeVibrato = i5541[10]
  i5540.isDone = !!i5541[11]
  i5540.onProcess = !!i5541[12]
  request.r(i5541[13], i5541[14], 0, i5540, 'itemDraggable')
  request.r(i5541[15], i5541[16], 0, i5540, 'itemClickable')
  request.r(i5541[17], i5541[18], 0, i5540, 'itemStirring')
  request.r(i5541[19], i5541[20], 0, i5540, 'itemKnifeSpriteMaskCutter')
  request.r(i5541[21], i5541[22], 0, i5540, 'itemSpriteMaskPainter')
  request.r(i5541[23], i5541[24], 0, i5540, 'itemMoveToTarget')
  request.r(i5541[25], i5541[26], 0, i5540, 'animator')
  i5540.itemType = i5541[27]
  request.r(i5541[28], i5541[29], 0, i5540, 'spriteRenderer')
  i5540.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5541[30], i5540.onKnifeIn)
  i5540.playMoveToTargetFinishSound = !!i5541[31]
  i5540.moveToTargetFinishFxType = i5541[32]
  request.r(i5541[33], i5541[34], 0, i5540, 'bowl')
  return i5540
}

Deserializers["Bowl"] = function (request, data, root) {
  var i5542 = root || request.c( 'Bowl' )
  var i5543 = data
  i5542.hasCarrot = !!i5543[0]
  i5542.hasCucumber = !!i5543[1]
  var i5545 = i5543[2]
  var i5544 = new (System.Collections.Generic.List$1(Bridge.ns('Cake')))
  for(var i = 0; i < i5545.length; i += 2) {
  request.r(i5545[i + 0], i5545[i + 1], 1, i5544, '')
  }
  i5542.cakes = i5544
  var i5547 = i5543[3]
  var i5546 = []
  for(var i = 0; i < i5547.length; i += 2) {
  request.r(i5547[i + 0], i5547[i + 1], 2, i5546, '')
  }
  i5542.cakePos = i5546
  request.r(i5543[4], i5543[5], 0, i5542, 'spoon')
  request.r(i5543[6], i5543[7], 0, i5542, 'oil')
  request.r(i5543[8], i5543[9], 0, i5542, 'newBowl')
  request.r(i5543[10], i5543[11], 0, i5542, 'capybara')
  request.r(i5543[12], i5543[13], 0, i5542, 'capybaraAnim')
  i5542.capybaraDanceAnimName = i5543[14]
  i5542.capybaraIdleAnimName = i5543[15]
  i5542.capybaraBassSkinName = i5543[16]
  i5542.capybaraSkinMoveYOffset = i5543[17]
  i5542.capybaraSkinMoveDownDuration = i5543[18]
  i5542.capybaraSkinMoveUpDuration = i5543[19]
  i5542.playIntroOnStart = !!i5543[20]
  i5542.showCapybaraFirstPopupAfterIntro = !!i5543[21]
  i5542.startHandTutAfterIntro = !!i5543[22]
  i5542.introMoveYOffset = i5543[23]
  i5542.introMoveDuration = i5543[24]
  i5542.introFadeDuration = i5543[25]
  i5542.loseGameDelayAfterPopup2 = i5543[26]
  i5542.isDone = !!i5543[27]
  i5542.onProcess = !!i5543[28]
  request.r(i5543[29], i5543[30], 0, i5542, 'itemDraggable')
  request.r(i5543[31], i5543[32], 0, i5542, 'itemClickable')
  request.r(i5543[33], i5543[34], 0, i5542, 'itemStirring')
  request.r(i5543[35], i5543[36], 0, i5542, 'itemKnifeSpriteMaskCutter')
  request.r(i5543[37], i5543[38], 0, i5542, 'itemSpriteMaskPainter')
  request.r(i5543[39], i5543[40], 0, i5542, 'itemMoveToTarget')
  request.r(i5543[41], i5543[42], 0, i5542, 'animator')
  i5542.itemType = i5543[43]
  request.r(i5543[44], i5543[45], 0, i5542, 'spriteRenderer')
  i5542.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5543[46], i5542.onKnifeIn)
  i5542.playMoveToTargetFinishSound = !!i5543[47]
  i5542.moveToTargetFinishFxType = i5543[48]
  request.r(i5543[49], i5543[50], 0, i5542, 'bowl')
  return i5542
}

Deserializers["Capybara"] = function (request, data, root) {
  var i5548 = root || request.c( 'Capybara' )
  var i5549 = data
  request.r(i5549[0], i5549[1], 0, i5548, 'popup1')
  request.r(i5549[2], i5549[3], 0, i5548, 'popup2')
  i5548.popupShowScale = i5549[4]
  i5548.popupShowDuration = i5549[5]
  i5548.popupHideDuration = i5549[6]
  i5548.popupHideDelay = i5549[7]
  request.r(i5549[8], i5549[9], 0, i5548, 'spawnHeartPoint')
  request.r(i5549[10], i5549[11], 0, i5548, 'skeletonAnimation')
  i5548.bassSkinName = i5549[12]
  i5548.skinChangeDelay = i5549[13]
  i5548.skinMoveYOffset = i5549[14]
  i5548.skinMoveDownDuration = i5549[15]
  i5548.skinMoveUpDuration = i5549[16]
  return i5548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5551 = data
  request.r(i5551[0], i5551[1], 0, i5550, 'sharedMesh')
  return i5550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5553 = data
  request.r(i5553[0], i5553[1], 0, i5552, 'additionalVertexStreams')
  i5552.enabled = !!i5553[2]
  request.r(i5553[3], i5553[4], 0, i5552, 'sharedMaterial')
  var i5555 = i5553[5]
  var i5554 = []
  for(var i = 0; i < i5555.length; i += 2) {
  request.r(i5555[i + 0], i5555[i + 1], 2, i5554, '')
  }
  i5552.sharedMaterials = i5554
  i5552.receiveShadows = !!i5553[6]
  i5552.shadowCastingMode = i5553[7]
  i5552.sortingLayerID = i5553[8]
  i5552.sortingOrder = i5553[9]
  i5552.lightmapIndex = i5553[10]
  i5552.lightmapSceneIndex = i5553[11]
  i5552.lightmapScaleOffset = new pc.Vec4( i5553[12], i5553[13], i5553[14], i5553[15] )
  i5552.lightProbeUsage = i5553[16]
  i5552.reflectionProbeUsage = i5553[17]
  return i5552
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i5556 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i5557 = data
  i5556.loop = !!i5557[0]
  i5556.timeScale = i5557[1]
  request.r(i5557[2], i5557[3], 0, i5556, 'skeletonDataAsset')
  i5556.initialSkinName = i5557[4]
  i5556.fixPrefabOverrideViaMeshFilter = i5557[5]
  i5556.initialFlipX = !!i5557[6]
  i5556.initialFlipY = !!i5557[7]
  i5556.updateWhenInvisible = i5557[8]
  i5556.zSpacing = i5557[9]
  i5556.useClipping = !!i5557[10]
  i5556.immutableTriangles = !!i5557[11]
  i5556.pmaVertexColors = !!i5557[12]
  i5556.clearStateOnDisable = !!i5557[13]
  i5556.tintBlack = !!i5557[14]
  i5556.singleSubmesh = !!i5557[15]
  i5556.fixDrawOrder = !!i5557[16]
  i5556.addNormals = !!i5557[17]
  i5556.calculateTangents = !!i5557[18]
  i5556.maskInteraction = i5557[19]
  i5556.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i5557[20], i5556.maskMaterials)
  i5556.disableRenderingOnOverride = !!i5557[21]
  i5556._animationName = i5557[22]
  var i5559 = i5557[23]
  var i5558 = []
  for(var i = 0; i < i5559.length; i += 1) {
    i5558.push( i5559[i + 0] );
  }
  i5556.separatorSlotNames = i5558
  return i5556
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i5560 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i5561 = data
  var i5563 = i5561[0]
  var i5562 = []
  for(var i = 0; i < i5563.length; i += 2) {
  request.r(i5563[i + 0], i5563[i + 1], 2, i5562, '')
  }
  i5560.materialsMaskDisabled = i5562
  var i5565 = i5561[1]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 2) {
  request.r(i5565[i + 0], i5565[i + 1], 2, i5564, '')
  }
  i5560.materialsInsideMask = i5564
  var i5567 = i5561[2]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 2) {
  request.r(i5567[i + 0], i5567[i + 1], 2, i5566, '')
  }
  i5560.materialsOutsideMask = i5566
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5571 = data
  i5570.frontSortingLayerID = i5571[0]
  i5570.frontSortingOrder = i5571[1]
  i5570.backSortingLayerID = i5571[2]
  i5570.backSortingOrder = i5571[3]
  i5570.alphaCutoff = i5571[4]
  request.r(i5571[5], i5571[6], 0, i5570, 'sprite')
  i5570.tileMode = i5571[7]
  i5570.isCustomRangeActive = !!i5571[8]
  i5570.spriteSortPoint = i5571[9]
  i5570.enabled = !!i5571[10]
  request.r(i5571[11], i5571[12], 0, i5570, 'sharedMaterial')
  var i5573 = i5571[13]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 2) {
  request.r(i5573[i + 0], i5573[i + 1], 2, i5572, '')
  }
  i5570.sharedMaterials = i5572
  i5570.receiveShadows = !!i5571[14]
  i5570.shadowCastingMode = i5571[15]
  i5570.sortingLayerID = i5571[16]
  i5570.sortingOrder = i5571[17]
  i5570.lightmapIndex = i5571[18]
  i5570.lightmapSceneIndex = i5571[19]
  i5570.lightmapScaleOffset = new pc.Vec4( i5571[20], i5571[21], i5571[22], i5571[23] )
  i5570.lightProbeUsage = i5571[24]
  i5570.reflectionProbeUsage = i5571[25]
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5575 = data
  i5574.ambientIntensity = i5575[0]
  i5574.reflectionIntensity = i5575[1]
  i5574.ambientMode = i5575[2]
  i5574.ambientLight = new pc.Color(i5575[3], i5575[4], i5575[5], i5575[6])
  i5574.ambientSkyColor = new pc.Color(i5575[7], i5575[8], i5575[9], i5575[10])
  i5574.ambientGroundColor = new pc.Color(i5575[11], i5575[12], i5575[13], i5575[14])
  i5574.ambientEquatorColor = new pc.Color(i5575[15], i5575[16], i5575[17], i5575[18])
  i5574.fogColor = new pc.Color(i5575[19], i5575[20], i5575[21], i5575[22])
  i5574.fogEndDistance = i5575[23]
  i5574.fogStartDistance = i5575[24]
  i5574.fogDensity = i5575[25]
  i5574.fog = !!i5575[26]
  request.r(i5575[27], i5575[28], 0, i5574, 'skybox')
  i5574.fogMode = i5575[29]
  var i5577 = i5575[30]
  var i5576 = []
  for(var i = 0; i < i5577.length; i += 1) {
    i5576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5577[i + 0]) );
  }
  i5574.lightmaps = i5576
  i5574.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5575[31], i5574.lightProbes)
  i5574.lightmapsMode = i5575[32]
  i5574.mixedBakeMode = i5575[33]
  i5574.environmentLightingMode = i5575[34]
  i5574.ambientProbe = new pc.SphericalHarmonicsL2(i5575[35])
  i5574.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5575[36])
  i5574.useReferenceAmbientProbe = !!i5575[37]
  request.r(i5575[38], i5575[39], 0, i5574, 'customReflection')
  request.r(i5575[40], i5575[41], 0, i5574, 'defaultReflection')
  i5574.defaultReflectionMode = i5575[42]
  i5574.defaultReflectionResolution = i5575[43]
  i5574.sunLightObjectId = i5575[44]
  i5574.pixelLightCount = i5575[45]
  i5574.defaultReflectionHDR = !!i5575[46]
  i5574.hasLightDataAsset = !!i5575[47]
  i5574.hasManualGenerate = !!i5575[48]
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5581 = data
  request.r(i5581[0], i5581[1], 0, i5580, 'lightmapColor')
  request.r(i5581[2], i5581[3], 0, i5580, 'lightmapDirection')
  request.r(i5581[4], i5581[5], 0, i5580, 'shadowMask')
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5582 = root || new UnityEngine.LightProbes()
  var i5583 = data
  return i5582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5591 = data
  var i5593 = i5591[0]
  var i5592 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5593[i + 0]));
  }
  i5590.ShaderCompilationErrors = i5592
  i5590.name = i5591[1]
  i5590.guid = i5591[2]
  var i5595 = i5591[3]
  var i5594 = []
  for(var i = 0; i < i5595.length; i += 1) {
    i5594.push( i5595[i + 0] );
  }
  i5590.shaderDefinedKeywords = i5594
  var i5597 = i5591[4]
  var i5596 = []
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5597[i + 0]) );
  }
  i5590.passes = i5596
  var i5599 = i5591[5]
  var i5598 = []
  for(var i = 0; i < i5599.length; i += 1) {
    i5598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5599[i + 0]) );
  }
  i5590.usePasses = i5598
  var i5601 = i5591[6]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5601[i + 0]) );
  }
  i5590.defaultParameterValues = i5600
  request.r(i5591[7], i5591[8], 0, i5590, 'unityFallbackShader')
  i5590.readDepth = !!i5591[9]
  i5590.hasDepthOnlyPass = !!i5591[10]
  i5590.isCreatedByShaderGraph = !!i5591[11]
  i5590.disableBatching = !!i5591[12]
  i5590.compiled = !!i5591[13]
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5605 = data
  i5604.shaderName = i5605[0]
  i5604.errorMessage = i5605[1]
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5608 = root || new pc.UnityShaderPass()
  var i5609 = data
  i5608.id = i5609[0]
  i5608.subShaderIndex = i5609[1]
  i5608.name = i5609[2]
  i5608.passType = i5609[3]
  i5608.grabPassTextureName = i5609[4]
  i5608.usePass = !!i5609[5]
  i5608.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[6], i5608.zTest)
  i5608.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[7], i5608.zWrite)
  i5608.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[8], i5608.culling)
  i5608.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5609[9], i5608.blending)
  i5608.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5609[10], i5608.alphaBlending)
  i5608.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[11], i5608.colorWriteMask)
  i5608.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[12], i5608.offsetUnits)
  i5608.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[13], i5608.offsetFactor)
  i5608.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[14], i5608.stencilRef)
  i5608.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[15], i5608.stencilReadMask)
  i5608.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5609[16], i5608.stencilWriteMask)
  i5608.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5609[17], i5608.stencilOp)
  i5608.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5609[18], i5608.stencilOpFront)
  i5608.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5609[19], i5608.stencilOpBack)
  var i5611 = i5609[20]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 1) {
    i5610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5611[i + 0]) );
  }
  i5608.tags = i5610
  var i5613 = i5609[21]
  var i5612 = []
  for(var i = 0; i < i5613.length; i += 1) {
    i5612.push( i5613[i + 0] );
  }
  i5608.passDefinedKeywords = i5612
  var i5615 = i5609[22]
  var i5614 = []
  for(var i = 0; i < i5615.length; i += 1) {
    i5614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5615[i + 0]) );
  }
  i5608.passDefinedKeywordGroups = i5614
  var i5617 = i5609[23]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5617[i + 0]) );
  }
  i5608.variants = i5616
  var i5619 = i5609[24]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5619[i + 0]) );
  }
  i5608.excludedVariants = i5618
  i5608.hasDepthReader = !!i5609[25]
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5621 = data
  i5620.val = i5621[0]
  i5620.name = i5621[1]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5623 = data
  i5622.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5623[0], i5622.src)
  i5622.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5623[1], i5622.dst)
  i5622.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5623[2], i5622.op)
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5625 = data
  i5624.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5625[0], i5624.pass)
  i5624.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5625[1], i5624.fail)
  i5624.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5625[2], i5624.zFail)
  i5624.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5625[3], i5624.comp)
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5629 = data
  i5628.name = i5629[0]
  i5628.value = i5629[1]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5633 = data
  var i5635 = i5633[0]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( i5635[i + 0] );
  }
  i5632.keywords = i5634
  i5632.hasDiscard = !!i5633[1]
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5639 = data
  i5638.passId = i5639[0]
  i5638.subShaderIndex = i5639[1]
  var i5641 = i5639[2]
  var i5640 = []
  for(var i = 0; i < i5641.length; i += 1) {
    i5640.push( i5641[i + 0] );
  }
  i5638.keywords = i5640
  i5638.vertexProgram = i5639[3]
  i5638.fragmentProgram = i5639[4]
  i5638.exportedForWebGl2 = !!i5639[5]
  i5638.readDepth = !!i5639[6]
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5645 = data
  request.r(i5645[0], i5645[1], 0, i5644, 'shader')
  i5644.pass = i5645[2]
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5649 = data
  i5648.name = i5649[0]
  i5648.type = i5649[1]
  i5648.value = new pc.Vec4( i5649[2], i5649[3], i5649[4], i5649[5] )
  i5648.textureValue = i5649[6]
  i5648.shaderPropertyFlag = i5649[7]
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5651 = data
  i5650.name = i5651[0]
  request.r(i5651[1], i5651[2], 0, i5650, 'texture')
  i5650.aabb = i5651[3]
  i5650.vertices = i5651[4]
  i5650.triangles = i5651[5]
  i5650.textureRect = UnityEngine.Rect.MinMaxRect(i5651[6], i5651[7], i5651[8], i5651[9])
  i5650.packedRect = UnityEngine.Rect.MinMaxRect(i5651[10], i5651[11], i5651[12], i5651[13])
  i5650.border = new pc.Vec4( i5651[14], i5651[15], i5651[16], i5651[17] )
  i5650.transparency = i5651[18]
  i5650.bounds = i5651[19]
  i5650.pixelsPerUnit = i5651[20]
  i5650.textureWidth = i5651[21]
  i5650.textureHeight = i5651[22]
  i5650.nativeSize = new pc.Vec2( i5651[23], i5651[24] )
  i5650.pivot = new pc.Vec2( i5651[25], i5651[26] )
  i5650.textureRectOffset = new pc.Vec2( i5651[27], i5651[28] )
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5653 = data
  i5652.name = i5653[0]
  return i5652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5655 = data
  i5654.name = i5655[0]
  i5654.wrapMode = i5655[1]
  i5654.isLooping = !!i5655[2]
  i5654.length = i5655[3]
  var i5657 = i5655[4]
  var i5656 = []
  for(var i = 0; i < i5657.length; i += 1) {
    i5656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5657[i + 0]) );
  }
  i5654.curves = i5656
  var i5659 = i5655[5]
  var i5658 = []
  for(var i = 0; i < i5659.length; i += 1) {
    i5658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5659[i + 0]) );
  }
  i5654.events = i5658
  i5654.halfPrecision = !!i5655[6]
  i5654._frameRate = i5655[7]
  i5654.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5655[8], i5654.localBounds)
  i5654.hasMuscleCurves = !!i5655[9]
  var i5661 = i5655[10]
  var i5660 = []
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.push( i5661[i + 0] );
  }
  i5654.clipMuscleConstant = i5660
  i5654.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5655[11], i5654.clipBindingConstant)
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5665 = data
  i5664.path = i5665[0]
  i5664.hash = i5665[1]
  i5664.componentType = i5665[2]
  i5664.property = i5665[3]
  i5664.keys = i5665[4]
  var i5667 = i5665[5]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5667[i + 0]) );
  }
  i5664.objectReferenceKeys = i5666
  return i5664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5671 = data
  i5670.time = i5671[0]
  request.r(i5671[1], i5671[2], 0, i5670, 'value')
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5675 = data
  i5674.functionName = i5675[0]
  i5674.floatParameter = i5675[1]
  i5674.intParameter = i5675[2]
  i5674.stringParameter = i5675[3]
  request.r(i5675[4], i5675[5], 0, i5674, 'objectReferenceParameter')
  i5674.time = i5675[6]
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5677 = data
  i5676.center = new pc.Vec3( i5677[0], i5677[1], i5677[2] )
  i5676.extends = new pc.Vec3( i5677[3], i5677[4], i5677[5] )
  return i5676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5681 = data
  var i5683 = i5681[0]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( i5683[i + 0] );
  }
  i5680.genericBindings = i5682
  var i5685 = i5681[1]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( i5685[i + 0] );
  }
  i5680.pptrCurveMapping = i5684
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5687 = data
  i5686.name = i5687[0]
  var i5689 = i5687[1]
  var i5688 = []
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5689[i + 0]) );
  }
  i5686.layers = i5688
  var i5691 = i5687[2]
  var i5690 = []
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5691[i + 0]) );
  }
  i5686.parameters = i5690
  i5686.animationClips = i5687[3]
  i5686.avatarUnsupported = i5687[4]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5695 = data
  i5694.name = i5695[0]
  i5694.defaultWeight = i5695[1]
  i5694.blendingMode = i5695[2]
  i5694.avatarMask = i5695[3]
  i5694.syncedLayerIndex = i5695[4]
  i5694.syncedLayerAffectsTiming = !!i5695[5]
  i5694.syncedLayers = i5695[6]
  i5694.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5695[7], i5694.stateMachine)
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5697 = data
  i5696.id = i5697[0]
  i5696.name = i5697[1]
  i5696.path = i5697[2]
  var i5699 = i5697[3]
  var i5698 = []
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5699[i + 0]) );
  }
  i5696.states = i5698
  var i5701 = i5697[4]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5701[i + 0]) );
  }
  i5696.machines = i5700
  var i5703 = i5697[5]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5703[i + 0]) );
  }
  i5696.entryStateTransitions = i5702
  var i5705 = i5697[6]
  var i5704 = []
  for(var i = 0; i < i5705.length; i += 1) {
    i5704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5705[i + 0]) );
  }
  i5696.exitStateTransitions = i5704
  var i5707 = i5697[7]
  var i5706 = []
  for(var i = 0; i < i5707.length; i += 1) {
    i5706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5707[i + 0]) );
  }
  i5696.anyStateTransitions = i5706
  i5696.defaultStateId = i5697[8]
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5711 = data
  i5710.id = i5711[0]
  i5710.name = i5711[1]
  i5710.cycleOffset = i5711[2]
  i5710.cycleOffsetParameter = i5711[3]
  i5710.cycleOffsetParameterActive = !!i5711[4]
  i5710.mirror = !!i5711[5]
  i5710.mirrorParameter = i5711[6]
  i5710.mirrorParameterActive = !!i5711[7]
  i5710.motionId = i5711[8]
  i5710.nameHash = i5711[9]
  i5710.fullPathHash = i5711[10]
  i5710.speed = i5711[11]
  i5710.speedParameter = i5711[12]
  i5710.speedParameterActive = !!i5711[13]
  i5710.tag = i5711[14]
  i5710.tagHash = i5711[15]
  i5710.writeDefaultValues = !!i5711[16]
  var i5713 = i5711[17]
  var i5712 = []
  for(var i = 0; i < i5713.length; i += 2) {
  request.r(i5713[i + 0], i5713[i + 1], 2, i5712, '')
  }
  i5710.behaviours = i5712
  var i5715 = i5711[18]
  var i5714 = []
  for(var i = 0; i < i5715.length; i += 1) {
    i5714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5715[i + 0]) );
  }
  i5710.transitions = i5714
  return i5710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5721 = data
  i5720.fullPath = i5721[0]
  i5720.canTransitionToSelf = !!i5721[1]
  i5720.duration = i5721[2]
  i5720.exitTime = i5721[3]
  i5720.hasExitTime = !!i5721[4]
  i5720.hasFixedDuration = !!i5721[5]
  i5720.interruptionSource = i5721[6]
  i5720.offset = i5721[7]
  i5720.orderedInterruption = !!i5721[8]
  i5720.destinationStateId = i5721[9]
  i5720.isExit = !!i5721[10]
  i5720.mute = !!i5721[11]
  i5720.solo = !!i5721[12]
  var i5723 = i5721[13]
  var i5722 = []
  for(var i = 0; i < i5723.length; i += 1) {
    i5722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5723[i + 0]) );
  }
  i5720.conditions = i5722
  return i5720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5729 = data
  i5728.destinationStateId = i5729[0]
  i5728.isExit = !!i5729[1]
  i5728.mute = !!i5729[2]
  i5728.solo = !!i5729[3]
  var i5731 = i5729[4]
  var i5730 = []
  for(var i = 0; i < i5731.length; i += 1) {
    i5730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5731[i + 0]) );
  }
  i5728.conditions = i5730
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5735 = data
  i5734.defaultBool = !!i5735[0]
  i5734.defaultFloat = i5735[1]
  i5734.defaultInt = i5735[2]
  i5734.name = i5735[3]
  i5734.nameHash = i5735[4]
  i5734.type = i5735[5]
  return i5734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5739 = data
  i5738.mode = i5739[0]
  i5738.parameter = i5739[1]
  i5738.threshold = i5739[2]
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5741 = data
  i5740.name = i5741[0]
  i5740.bytes64 = i5741[1]
  i5740.data = i5741[2]
  return i5740
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5742 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5743 = data
  i5742.normalStyle = i5743[0]
  i5742.normalSpacingOffset = i5743[1]
  i5742.boldStyle = i5743[2]
  i5742.boldSpacing = i5743[3]
  i5742.italicStyle = i5743[4]
  i5742.tabSize = i5743[5]
  request.r(i5743[6], i5743[7], 0, i5742, 'atlas')
  i5742.m_SourceFontFileGUID = i5743[8]
  i5742.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5743[9], i5742.m_CreationSettings)
  request.r(i5743[10], i5743[11], 0, i5742, 'm_SourceFontFile')
  i5742.m_SourceFontFilePath = i5743[12]
  i5742.m_AtlasPopulationMode = i5743[13]
  i5742.InternalDynamicOS = !!i5743[14]
  var i5745 = i5743[15]
  var i5744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.add(request.d('UnityEngine.TextCore.Glyph', i5745[i + 0]));
  }
  i5742.m_GlyphTable = i5744
  var i5747 = i5743[16]
  var i5746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.add(request.d('TMPro.TMP_Character', i5747[i + 0]));
  }
  i5742.m_CharacterTable = i5746
  var i5749 = i5743[17]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 2) {
  request.r(i5749[i + 0], i5749[i + 1], 2, i5748, '')
  }
  i5742.m_AtlasTextures = i5748
  i5742.m_AtlasTextureIndex = i5743[18]
  i5742.m_IsMultiAtlasTexturesEnabled = !!i5743[19]
  i5742.m_GetFontFeatures = !!i5743[20]
  i5742.m_ClearDynamicDataOnBuild = !!i5743[21]
  i5742.m_AtlasWidth = i5743[22]
  i5742.m_AtlasHeight = i5743[23]
  i5742.m_AtlasPadding = i5743[24]
  i5742.m_AtlasRenderMode = i5743[25]
  var i5751 = i5743[26]
  var i5750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5751.length; i += 1) {
    i5750.add(request.d('UnityEngine.TextCore.GlyphRect', i5751[i + 0]));
  }
  i5742.m_UsedGlyphRects = i5750
  var i5753 = i5743[27]
  var i5752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.add(request.d('UnityEngine.TextCore.GlyphRect', i5753[i + 0]));
  }
  i5742.m_FreeGlyphRects = i5752
  i5742.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5743[28], i5742.m_FontFeatureTable)
  i5742.m_ShouldReimportFontFeatures = !!i5743[29]
  var i5755 = i5743[30]
  var i5754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5755.length; i += 2) {
  request.r(i5755[i + 0], i5755[i + 1], 1, i5754, '')
  }
  i5742.m_FallbackFontAssetTable = i5754
  var i5757 = i5743[31]
  var i5756 = []
  for(var i = 0; i < i5757.length; i += 1) {
    i5756.push( request.d('TMPro.TMP_FontWeightPair', i5757[i + 0]) );
  }
  i5742.m_FontWeightTable = i5756
  var i5759 = i5743[32]
  var i5758 = []
  for(var i = 0; i < i5759.length; i += 1) {
    i5758.push( request.d('TMPro.TMP_FontWeightPair', i5759[i + 0]) );
  }
  i5742.fontWeights = i5758
  i5742.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5743[33], i5742.m_fontInfo)
  var i5761 = i5743[34]
  var i5760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.add(request.d('TMPro.TMP_Glyph', i5761[i + 0]));
  }
  i5742.m_glyphInfoList = i5760
  i5742.m_KerningTable = request.d('TMPro.KerningTable', i5743[35], i5742.m_KerningTable)
  var i5763 = i5743[36]
  var i5762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5763.length; i += 2) {
  request.r(i5763[i + 0], i5763[i + 1], 1, i5762, '')
  }
  i5742.fallbackFontAssets = i5762
  i5742.m_Version = i5743[37]
  i5742.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5743[38], i5742.m_FaceInfo)
  request.r(i5743[39], i5743[40], 0, i5742, 'm_Material')
  return i5742
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5764 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5765 = data
  i5764.sourceFontFileName = i5765[0]
  i5764.sourceFontFileGUID = i5765[1]
  i5764.faceIndex = i5765[2]
  i5764.pointSizeSamplingMode = i5765[3]
  i5764.pointSize = i5765[4]
  i5764.padding = i5765[5]
  i5764.paddingMode = i5765[6]
  i5764.packingMode = i5765[7]
  i5764.atlasWidth = i5765[8]
  i5764.atlasHeight = i5765[9]
  i5764.characterSetSelectionMode = i5765[10]
  i5764.characterSequence = i5765[11]
  i5764.referencedFontAssetGUID = i5765[12]
  i5764.referencedTextAssetGUID = i5765[13]
  i5764.fontStyle = i5765[14]
  i5764.fontStyleModifier = i5765[15]
  i5764.renderMode = i5765[16]
  i5764.includeFontFeatures = !!i5765[17]
  return i5764
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5768 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5769 = data
  i5768.m_Index = i5769[0]
  i5768.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5769[1], i5768.m_Metrics)
  i5768.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5769[2], i5768.m_GlyphRect)
  i5768.m_Scale = i5769[3]
  i5768.m_AtlasIndex = i5769[4]
  i5768.m_ClassDefinitionType = i5769[5]
  return i5768
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5770 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5771 = data
  i5770.m_Width = i5771[0]
  i5770.m_Height = i5771[1]
  i5770.m_HorizontalBearingX = i5771[2]
  i5770.m_HorizontalBearingY = i5771[3]
  i5770.m_HorizontalAdvance = i5771[4]
  return i5770
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5772 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5773 = data
  i5772.m_X = i5773[0]
  i5772.m_Y = i5773[1]
  i5772.m_Width = i5773[2]
  i5772.m_Height = i5773[3]
  return i5772
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5776 = root || request.c( 'TMPro.TMP_Character' )
  var i5777 = data
  i5776.m_ElementType = i5777[0]
  i5776.m_Unicode = i5777[1]
  i5776.m_GlyphIndex = i5777[2]
  i5776.m_Scale = i5777[3]
  return i5776
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5782 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5783 = data
  var i5785 = i5783[0]
  var i5784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.add(request.d('TMPro.MultipleSubstitutionRecord', i5785[i + 0]));
  }
  i5782.m_MultipleSubstitutionRecords = i5784
  var i5787 = i5783[1]
  var i5786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.add(request.d('TMPro.LigatureSubstitutionRecord', i5787[i + 0]));
  }
  i5782.m_LigatureSubstitutionRecords = i5786
  var i5789 = i5783[2]
  var i5788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5789.length; i += 1) {
    i5788.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5789[i + 0]));
  }
  i5782.m_GlyphPairAdjustmentRecords = i5788
  var i5791 = i5783[3]
  var i5790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5791.length; i += 1) {
    i5790.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5791[i + 0]));
  }
  i5782.m_MarkToBaseAdjustmentRecords = i5790
  var i5793 = i5783[4]
  var i5792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5793[i + 0]));
  }
  i5782.m_MarkToMarkAdjustmentRecords = i5792
  return i5782
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5796 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5797 = data
  i5796.m_TargetGlyphID = i5797[0]
  i5796.m_SubstituteGlyphIDs = i5797[1]
  return i5796
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5800 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5801 = data
  i5800.m_ComponentGlyphIDs = i5801[0]
  i5800.m_LigatureGlyphID = i5801[1]
  return i5800
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5804 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5805 = data
  i5804.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5805[0], i5804.m_FirstAdjustmentRecord)
  i5804.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5805[1], i5804.m_SecondAdjustmentRecord)
  i5804.m_FeatureLookupFlags = i5805[2]
  return i5804
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5808 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5809 = data
  i5808.m_BaseGlyphID = i5809[0]
  i5808.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5809[1], i5808.m_BaseGlyphAnchorPoint)
  i5808.m_MarkGlyphID = i5809[2]
  i5808.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5809[3], i5808.m_MarkPositionAdjustment)
  return i5808
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5812 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5813 = data
  i5812.m_BaseMarkGlyphID = i5813[0]
  i5812.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5813[1], i5812.m_BaseMarkGlyphAnchorPoint)
  i5812.m_CombiningMarkGlyphID = i5813[2]
  i5812.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5813[3], i5812.m_CombiningMarkPositionAdjustment)
  return i5812
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5818 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5819 = data
  request.r(i5819[0], i5819[1], 0, i5818, 'regularTypeface')
  request.r(i5819[2], i5819[3], 0, i5818, 'italicTypeface')
  return i5818
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5820 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5821 = data
  i5820.Name = i5821[0]
  i5820.PointSize = i5821[1]
  i5820.Scale = i5821[2]
  i5820.CharacterCount = i5821[3]
  i5820.LineHeight = i5821[4]
  i5820.Baseline = i5821[5]
  i5820.Ascender = i5821[6]
  i5820.CapHeight = i5821[7]
  i5820.Descender = i5821[8]
  i5820.CenterLine = i5821[9]
  i5820.SuperscriptOffset = i5821[10]
  i5820.SubscriptOffset = i5821[11]
  i5820.SubSize = i5821[12]
  i5820.Underline = i5821[13]
  i5820.UnderlineThickness = i5821[14]
  i5820.strikethrough = i5821[15]
  i5820.strikethroughThickness = i5821[16]
  i5820.TabWidth = i5821[17]
  i5820.Padding = i5821[18]
  i5820.AtlasWidth = i5821[19]
  i5820.AtlasHeight = i5821[20]
  return i5820
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5824 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5825 = data
  i5824.id = i5825[0]
  i5824.x = i5825[1]
  i5824.y = i5825[2]
  i5824.width = i5825[3]
  i5824.height = i5825[4]
  i5824.xOffset = i5825[5]
  i5824.yOffset = i5825[6]
  i5824.xAdvance = i5825[7]
  i5824.scale = i5825[8]
  return i5824
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5826 = root || request.c( 'TMPro.KerningTable' )
  var i5827 = data
  var i5829 = i5827[0]
  var i5828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5829.length; i += 1) {
    i5828.add(request.d('TMPro.KerningPair', i5829[i + 0]));
  }
  i5826.kerningPairs = i5828
  return i5826
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.KerningPair' )
  var i5833 = data
  i5832.xOffset = i5833[0]
  i5832.m_FirstGlyph = i5833[1]
  i5832.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5833[2], i5832.m_FirstGlyphAdjustments)
  i5832.m_SecondGlyph = i5833[3]
  i5832.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5833[4], i5832.m_SecondGlyphAdjustments)
  i5832.m_IgnoreSpacingAdjustments = !!i5833[5]
  return i5832
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5834 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5835 = data
  i5834.m_FaceIndex = i5835[0]
  i5834.m_FamilyName = i5835[1]
  i5834.m_StyleName = i5835[2]
  i5834.m_PointSize = i5835[3]
  i5834.m_Scale = i5835[4]
  i5834.m_UnitsPerEM = i5835[5]
  i5834.m_LineHeight = i5835[6]
  i5834.m_AscentLine = i5835[7]
  i5834.m_CapLine = i5835[8]
  i5834.m_MeanLine = i5835[9]
  i5834.m_Baseline = i5835[10]
  i5834.m_DescentLine = i5835[11]
  i5834.m_SuperscriptOffset = i5835[12]
  i5834.m_SuperscriptSize = i5835[13]
  i5834.m_SubscriptOffset = i5835[14]
  i5834.m_SubscriptSize = i5835[15]
  i5834.m_UnderlineOffset = i5835[16]
  i5834.m_UnderlineThickness = i5835[17]
  i5834.m_StrikethroughOffset = i5835[18]
  i5834.m_StrikethroughThickness = i5835[19]
  i5834.m_TabWidth = i5835[20]
  return i5834
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5836 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5837 = data
  var i5839 = i5837[0]
  var i5838 = []
  for(var i = 0; i < i5839.length; i += 2) {
  request.r(i5839[i + 0], i5839[i + 1], 2, i5838, '')
  }
  i5836.atlasAssets = i5838
  i5836.scale = i5837[1]
  request.r(i5837[2], i5837[3], 0, i5836, 'skeletonJSON')
  i5836.isUpgradingBlendModeMaterials = !!i5837[4]
  i5836.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5837[5], i5836.blendModeMaterials)
  var i5841 = i5837[6]
  var i5840 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5841.length; i += 2) {
  request.r(i5841[i + 0], i5841[i + 1], 1, i5840, '')
  }
  i5836.skeletonDataModifiers = i5840
  var i5843 = i5837[7]
  var i5842 = []
  for(var i = 0; i < i5843.length; i += 1) {
    i5842.push( i5843[i + 0] );
  }
  i5836.fromAnimation = i5842
  var i5845 = i5837[8]
  var i5844 = []
  for(var i = 0; i < i5845.length; i += 1) {
    i5844.push( i5845[i + 0] );
  }
  i5836.toAnimation = i5844
  i5836.duration = i5837[9]
  i5836.defaultMix = i5837[10]
  request.r(i5837[11], i5837[12], 0, i5836, 'controller')
  return i5836
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5848 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5849 = data
  i5848.applyAdditiveMaterial = !!i5849[0]
  var i5851 = i5849[1]
  var i5850 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5851[i + 0]));
  }
  i5848.additiveMaterials = i5850
  var i5853 = i5849[2]
  var i5852 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5853.length; i += 1) {
    i5852.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5853[i + 0]));
  }
  i5848.multiplyMaterials = i5852
  var i5855 = i5849[3]
  var i5854 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5855.length; i += 1) {
    i5854.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5855[i + 0]));
  }
  i5848.screenMaterials = i5854
  i5848.requiresBlendModeMaterials = !!i5849[4]
  return i5848
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5858 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5859 = data
  i5858.pageName = i5859[0]
  request.r(i5859[1], i5859[2], 0, i5858, 'material')
  return i5858
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5862 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5863 = data
  request.r(i5863[0], i5863[1], 0, i5862, 'atlasFile')
  var i5865 = i5863[2]
  var i5864 = []
  for(var i = 0; i < i5865.length; i += 2) {
  request.r(i5865[i + 0], i5865[i + 1], 2, i5864, '')
  }
  i5862.materials = i5864
  return i5862
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5867 = data
  i5866.useSafeMode = !!i5867[0]
  i5866.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5867[1], i5866.safeModeOptions)
  i5866.timeScale = i5867[2]
  i5866.unscaledTimeScale = i5867[3]
  i5866.useSmoothDeltaTime = !!i5867[4]
  i5866.maxSmoothUnscaledTime = i5867[5]
  i5866.rewindCallbackMode = i5867[6]
  i5866.showUnityEditorReport = !!i5867[7]
  i5866.logBehaviour = i5867[8]
  i5866.drawGizmos = !!i5867[9]
  i5866.defaultRecyclable = !!i5867[10]
  i5866.defaultAutoPlay = i5867[11]
  i5866.defaultUpdateType = i5867[12]
  i5866.defaultTimeScaleIndependent = !!i5867[13]
  i5866.defaultEaseType = i5867[14]
  i5866.defaultEaseOvershootOrAmplitude = i5867[15]
  i5866.defaultEasePeriod = i5867[16]
  i5866.defaultAutoKill = !!i5867[17]
  i5866.defaultLoopType = i5867[18]
  i5866.debugMode = !!i5867[19]
  i5866.debugStoreTargetId = !!i5867[20]
  i5866.showPreviewPanel = !!i5867[21]
  i5866.storeSettingsLocation = i5867[22]
  i5866.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5867[23], i5866.modules)
  i5866.createASMDEF = !!i5867[24]
  i5866.showPlayingTweens = !!i5867[25]
  i5866.showPausedTweens = !!i5867[26]
  return i5866
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5869 = data
  i5868.logBehaviour = i5869[0]
  i5868.nestedTweenFailureBehaviour = i5869[1]
  return i5868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5871 = data
  i5870.showPanel = !!i5871[0]
  i5870.audioEnabled = !!i5871[1]
  i5870.physicsEnabled = !!i5871[2]
  i5870.physics2DEnabled = !!i5871[3]
  i5870.spriteEnabled = !!i5871[4]
  i5870.uiEnabled = !!i5871[5]
  i5870.uiToolkitEnabled = !!i5871[6]
  i5870.textMeshProEnabled = !!i5871[7]
  i5870.tk2DEnabled = !!i5871[8]
  i5870.deAudioEnabled = !!i5871[9]
  i5870.deUnityExtendedEnabled = !!i5871[10]
  i5870.epoOutlineEnabled = !!i5871[11]
  return i5870
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5872 = root || request.c( 'TMPro.TMP_Settings' )
  var i5873 = data
  i5872.assetVersion = i5873[0]
  i5872.m_TextWrappingMode = i5873[1]
  i5872.m_enableKerning = !!i5873[2]
  var i5875 = i5873[3]
  var i5874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.add(i5875[i + 0]);
  }
  i5872.m_ActiveFontFeatures = i5874
  i5872.m_enableExtraPadding = !!i5873[4]
  i5872.m_enableTintAllSprites = !!i5873[5]
  i5872.m_enableParseEscapeCharacters = !!i5873[6]
  i5872.m_EnableRaycastTarget = !!i5873[7]
  i5872.m_GetFontFeaturesAtRuntime = !!i5873[8]
  i5872.m_missingGlyphCharacter = i5873[9]
  i5872.m_ClearDynamicDataOnBuild = !!i5873[10]
  i5872.m_warningsDisabled = !!i5873[11]
  request.r(i5873[12], i5873[13], 0, i5872, 'm_defaultFontAsset')
  i5872.m_defaultFontAssetPath = i5873[14]
  i5872.m_defaultFontSize = i5873[15]
  i5872.m_defaultAutoSizeMinRatio = i5873[16]
  i5872.m_defaultAutoSizeMaxRatio = i5873[17]
  i5872.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5873[18], i5873[19] )
  i5872.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5873[20], i5873[21] )
  i5872.m_autoSizeTextContainer = !!i5873[22]
  i5872.m_IsTextObjectScaleStatic = !!i5873[23]
  var i5877 = i5873[24]
  var i5876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5877.length; i += 2) {
  request.r(i5877[i + 0], i5877[i + 1], 1, i5876, '')
  }
  i5872.m_fallbackFontAssets = i5876
  i5872.m_matchMaterialPreset = !!i5873[25]
  i5872.m_HideSubTextObjects = !!i5873[26]
  request.r(i5873[27], i5873[28], 0, i5872, 'm_defaultSpriteAsset')
  i5872.m_defaultSpriteAssetPath = i5873[29]
  i5872.m_enableEmojiSupport = !!i5873[30]
  i5872.m_MissingCharacterSpriteUnicode = i5873[31]
  var i5879 = i5873[32]
  var i5878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5879.length; i += 2) {
  request.r(i5879[i + 0], i5879[i + 1], 1, i5878, '')
  }
  i5872.m_EmojiFallbackTextAssets = i5878
  i5872.m_defaultColorGradientPresetsPath = i5873[33]
  request.r(i5873[34], i5873[35], 0, i5872, 'm_defaultStyleSheet')
  i5872.m_StyleSheetsResourcePath = i5873[36]
  request.r(i5873[37], i5873[38], 0, i5872, 'm_leadingCharacters')
  request.r(i5873[39], i5873[40], 0, i5872, 'm_followingCharacters')
  i5872.m_UseModernHangulLineBreakingRules = !!i5873[41]
  return i5872
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5882 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5883 = data
  request.r(i5883[0], i5883[1], 0, i5882, 'spriteSheet')
  var i5885 = i5883[2]
  var i5884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5885.length; i += 1) {
    i5884.add(request.d('TMPro.TMP_Sprite', i5885[i + 0]));
  }
  i5882.spriteInfoList = i5884
  var i5887 = i5883[3]
  var i5886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5887.length; i += 2) {
  request.r(i5887[i + 0], i5887[i + 1], 1, i5886, '')
  }
  i5882.fallbackSpriteAssets = i5886
  var i5889 = i5883[4]
  var i5888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5889.length; i += 1) {
    i5888.add(request.d('TMPro.TMP_SpriteCharacter', i5889[i + 0]));
  }
  i5882.m_SpriteCharacterTable = i5888
  var i5891 = i5883[5]
  var i5890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5891.length; i += 1) {
    i5890.add(request.d('TMPro.TMP_SpriteGlyph', i5891[i + 0]));
  }
  i5882.m_GlyphTable = i5890
  i5882.m_Version = i5883[6]
  i5882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5883[7], i5882.m_FaceInfo)
  request.r(i5883[8], i5883[9], 0, i5882, 'm_Material')
  return i5882
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5894 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5895 = data
  i5894.name = i5895[0]
  i5894.hashCode = i5895[1]
  i5894.unicode = i5895[2]
  i5894.pivot = new pc.Vec2( i5895[3], i5895[4] )
  request.r(i5895[5], i5895[6], 0, i5894, 'sprite')
  i5894.id = i5895[7]
  i5894.x = i5895[8]
  i5894.y = i5895[9]
  i5894.width = i5895[10]
  i5894.height = i5895[11]
  i5894.xOffset = i5895[12]
  i5894.yOffset = i5895[13]
  i5894.xAdvance = i5895[14]
  i5894.scale = i5895[15]
  return i5894
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5900 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5901 = data
  i5900.m_Name = i5901[0]
  i5900.m_ElementType = i5901[1]
  i5900.m_Unicode = i5901[2]
  i5900.m_GlyphIndex = i5901[3]
  i5900.m_Scale = i5901[4]
  return i5900
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5904 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5905 = data
  request.r(i5905[0], i5905[1], 0, i5904, 'sprite')
  i5904.m_Index = i5905[2]
  i5904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5905[3], i5904.m_Metrics)
  i5904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5905[4], i5904.m_GlyphRect)
  i5904.m_Scale = i5905[5]
  i5904.m_AtlasIndex = i5905[6]
  i5904.m_ClassDefinitionType = i5905[7]
  return i5904
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5906 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5907 = data
  var i5909 = i5907[0]
  var i5908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5909.length; i += 1) {
    i5908.add(request.d('TMPro.TMP_Style', i5909[i + 0]));
  }
  i5906.m_StyleList = i5908
  return i5906
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5912 = root || request.c( 'TMPro.TMP_Style' )
  var i5913 = data
  i5912.m_Name = i5913[0]
  i5912.m_HashCode = i5913[1]
  i5912.m_OpeningDefinition = i5913[2]
  i5912.m_ClosingDefinition = i5913[3]
  i5912.m_OpeningTagArray = i5913[4]
  i5912.m_ClosingTagArray = i5913[5]
  return i5912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5915 = data
  var i5917 = i5915[0]
  var i5916 = []
  for(var i = 0; i < i5917.length; i += 1) {
    i5916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5917[i + 0]) );
  }
  i5914.files = i5916
  i5914.componentToPrefabIds = i5915[1]
  return i5914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5921 = data
  i5920.path = i5921[0]
  request.r(i5921[1], i5921[2], 0, i5920, 'unityObject')
  return i5920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5923 = data
  var i5925 = i5923[0]
  var i5924 = []
  for(var i = 0; i < i5925.length; i += 1) {
    i5924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5925[i + 0]) );
  }
  i5922.scriptsExecutionOrder = i5924
  var i5927 = i5923[1]
  var i5926 = []
  for(var i = 0; i < i5927.length; i += 1) {
    i5926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5927[i + 0]) );
  }
  i5922.sortingLayers = i5926
  var i5929 = i5923[2]
  var i5928 = []
  for(var i = 0; i < i5929.length; i += 1) {
    i5928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5929[i + 0]) );
  }
  i5922.cullingLayers = i5928
  i5922.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5923[3], i5922.timeSettings)
  i5922.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5923[4], i5922.physicsSettings)
  i5922.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5923[5], i5922.physics2DSettings)
  i5922.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5923[6], i5922.qualitySettings)
  i5922.enableRealtimeShadows = !!i5923[7]
  i5922.enableAutoInstancing = !!i5923[8]
  i5922.enableStaticBatching = !!i5923[9]
  i5922.enableDynamicBatching = !!i5923[10]
  i5922.lightmapEncodingQuality = i5923[11]
  i5922.desiredColorSpace = i5923[12]
  var i5931 = i5923[13]
  var i5930 = []
  for(var i = 0; i < i5931.length; i += 1) {
    i5930.push( i5931[i + 0] );
  }
  i5922.allTags = i5930
  return i5922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5935 = data
  i5934.name = i5935[0]
  i5934.value = i5935[1]
  return i5934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5939 = data
  i5938.id = i5939[0]
  i5938.name = i5939[1]
  i5938.value = i5939[2]
  return i5938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5943 = data
  i5942.id = i5943[0]
  i5942.name = i5943[1]
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5945 = data
  i5944.fixedDeltaTime = i5945[0]
  i5944.maximumDeltaTime = i5945[1]
  i5944.timeScale = i5945[2]
  i5944.maximumParticleTimestep = i5945[3]
  return i5944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5947 = data
  i5946.gravity = new pc.Vec3( i5947[0], i5947[1], i5947[2] )
  i5946.defaultSolverIterations = i5947[3]
  i5946.bounceThreshold = i5947[4]
  i5946.autoSyncTransforms = !!i5947[5]
  i5946.autoSimulation = !!i5947[6]
  var i5949 = i5947[7]
  var i5948 = []
  for(var i = 0; i < i5949.length; i += 1) {
    i5948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5949[i + 0]) );
  }
  i5946.collisionMatrix = i5948
  return i5946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5953 = data
  i5952.enabled = !!i5953[0]
  i5952.layerId = i5953[1]
  i5952.otherLayerId = i5953[2]
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5955 = data
  request.r(i5955[0], i5955[1], 0, i5954, 'material')
  i5954.gravity = new pc.Vec2( i5955[2], i5955[3] )
  i5954.positionIterations = i5955[4]
  i5954.velocityIterations = i5955[5]
  i5954.velocityThreshold = i5955[6]
  i5954.maxLinearCorrection = i5955[7]
  i5954.maxAngularCorrection = i5955[8]
  i5954.maxTranslationSpeed = i5955[9]
  i5954.maxRotationSpeed = i5955[10]
  i5954.baumgarteScale = i5955[11]
  i5954.baumgarteTOIScale = i5955[12]
  i5954.timeToSleep = i5955[13]
  i5954.linearSleepTolerance = i5955[14]
  i5954.angularSleepTolerance = i5955[15]
  i5954.defaultContactOffset = i5955[16]
  i5954.autoSimulation = !!i5955[17]
  i5954.queriesHitTriggers = !!i5955[18]
  i5954.queriesStartInColliders = !!i5955[19]
  i5954.callbacksOnDisable = !!i5955[20]
  i5954.reuseCollisionCallbacks = !!i5955[21]
  i5954.autoSyncTransforms = !!i5955[22]
  var i5957 = i5955[23]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5957[i + 0]) );
  }
  i5954.collisionMatrix = i5956
  return i5954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5961 = data
  i5960.enabled = !!i5961[0]
  i5960.layerId = i5961[1]
  i5960.otherLayerId = i5961[2]
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5963 = data
  var i5965 = i5963[0]
  var i5964 = []
  for(var i = 0; i < i5965.length; i += 1) {
    i5964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5965[i + 0]) );
  }
  i5962.qualityLevels = i5964
  var i5967 = i5963[1]
  var i5966 = []
  for(var i = 0; i < i5967.length; i += 1) {
    i5966.push( i5967[i + 0] );
  }
  i5962.names = i5966
  i5962.shadows = i5963[2]
  i5962.anisotropicFiltering = i5963[3]
  i5962.antiAliasing = i5963[4]
  i5962.lodBias = i5963[5]
  i5962.shadowCascades = i5963[6]
  i5962.shadowDistance = i5963[7]
  i5962.shadowmaskMode = i5963[8]
  i5962.shadowProjection = i5963[9]
  i5962.shadowResolution = i5963[10]
  i5962.softParticles = !!i5963[11]
  i5962.softVegetation = !!i5963[12]
  i5962.activeColorSpace = i5963[13]
  i5962.desiredColorSpace = i5963[14]
  i5962.masterTextureLimit = i5963[15]
  i5962.maxQueuedFrames = i5963[16]
  i5962.particleRaycastBudget = i5963[17]
  i5962.pixelLightCount = i5963[18]
  i5962.realtimeReflectionProbes = !!i5963[19]
  i5962.shadowCascade2Split = i5963[20]
  i5962.shadowCascade4Split = new pc.Vec3( i5963[21], i5963[22], i5963[23] )
  i5962.streamingMipmapsActive = !!i5963[24]
  i5962.vSyncCount = i5963[25]
  i5962.asyncUploadBufferSize = i5963[26]
  i5962.asyncUploadTimeSlice = i5963[27]
  i5962.billboardsFaceCameraPosition = !!i5963[28]
  i5962.shadowNearPlaneOffset = i5963[29]
  i5962.streamingMipmapsMemoryBudget = i5963[30]
  i5962.maximumLODLevel = i5963[31]
  i5962.streamingMipmapsAddAllCameras = !!i5963[32]
  i5962.streamingMipmapsMaxLevelReduction = i5963[33]
  i5962.streamingMipmapsRenderersPerFrame = i5963[34]
  i5962.resolutionScalingFixedDPIFactor = i5963[35]
  i5962.streamingMipmapsMaxFileIORequests = i5963[36]
  i5962.currentQualityLevel = i5963[37]
  return i5962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5973 = data
  i5972.weight = i5973[0]
  i5972.vertices = i5973[1]
  i5972.normals = i5973[2]
  i5972.tangents = i5973[3]
  return i5972
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5974 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5975 = data
  i5974.m_GlyphIndex = i5975[0]
  i5974.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5975[1], i5974.m_GlyphValueRecord)
  return i5974
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5976 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5977 = data
  i5976.m_XCoordinate = i5977[0]
  i5976.m_YCoordinate = i5977[1]
  return i5976
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5978 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5979 = data
  i5978.m_XPositionAdjustment = i5979[0]
  i5978.m_YPositionAdjustment = i5979[1]
  return i5978
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5980 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5981 = data
  i5980.xPlacement = i5981[0]
  i5980.yPlacement = i5981[1]
  i5980.xAdvance = i5981[2]
  i5980.yAdvance = i5981[3]
  return i5980
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5982 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5983 = data
  i5982.m_XPlacement = i5983[0]
  i5982.m_YPlacement = i5983[1]
  i5982.m_XAdvance = i5983[2]
  i5982.m_YAdvance = i5983[3]
  return i5982
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[15],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[15],"96":[55],"97":[98],"99":[98],"14":[13],"100":[101],"47":[101],"102":[101],"103":[101],"104":[101],"105":[13],"106":[21,13],"52":[55],"107":[21,13],"108":[19,55],"109":[55],"110":[55,53],"111":[75],"112":[82],"113":[114],"115":[116],"117":[5],"118":[15],"119":[120],"121":[44],"122":[14],"123":[13],"124":[55,13],"22":[13,21],"125":[13],"126":[21,13],"127":[55],"128":[21,13],"129":[13],"130":[131],"132":[131],"133":[131],"134":[13],"135":[13],"18":[14],"24":[21,13],"136":[13],"17":[14],"137":[13],"138":[13],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[21,13],"147":[13],"148":[13],"149":[13],"150":[13],"151":[21,13],"152":[13],"153":[44],"154":[44],"45":[44],"155":[44],"156":[15],"157":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","Plate","Spoon","Item","Cake","Ply_ToggleEvent","SortChildByZPos","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","ItemDraggable","Ply_MoveToTarget","Pan","Bowl","Capybara","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.SpriteMask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ItemClickable","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4961";

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

Deserializers.buildID = "35d31f74-ef15-4135-844d-9a487cfa36f0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

