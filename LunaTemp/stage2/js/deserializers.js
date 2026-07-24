var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3330 = root || request.c( 'UnityEngine.JointSpring' )
  var i3331 = data
  i3330.spring = i3331[0]
  i3330.damper = i3331[1]
  i3330.targetPosition = i3331[2]
  return i3330
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.JointMotor' )
  var i3333 = data
  i3332.m_TargetVelocity = i3333[0]
  i3332.m_Force = i3333[1]
  i3332.m_FreeSpin = i3333[2]
  return i3332
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.JointLimits' )
  var i3335 = data
  i3334.m_Min = i3335[0]
  i3334.m_Max = i3335[1]
  i3334.m_Bounciness = i3335[2]
  i3334.m_BounceMinVelocity = i3335[3]
  i3334.m_ContactDistance = i3335[4]
  i3334.minBounce = i3335[5]
  i3334.maxBounce = i3335[6]
  return i3334
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.JointDrive' )
  var i3337 = data
  i3336.m_PositionSpring = i3337[0]
  i3336.m_PositionDamper = i3337[1]
  i3336.m_MaximumForce = i3337[2]
  i3336.m_UseAcceleration = i3337[3]
  return i3336
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3339 = data
  i3338.m_Spring = i3339[0]
  i3338.m_Damper = i3339[1]
  return i3338
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3341 = data
  i3340.m_Limit = i3341[0]
  i3340.m_Bounciness = i3341[1]
  i3340.m_ContactDistance = i3341[2]
  return i3340
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3343 = data
  i3342.m_ExtremumSlip = i3343[0]
  i3342.m_ExtremumValue = i3343[1]
  i3342.m_AsymptoteSlip = i3343[2]
  i3342.m_AsymptoteValue = i3343[3]
  i3342.m_Stiffness = i3343[4]
  return i3342
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3345 = data
  i3344.m_LowerAngle = i3345[0]
  i3344.m_UpperAngle = i3345[1]
  return i3344
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3347 = data
  i3346.m_MotorSpeed = i3347[0]
  i3346.m_MaximumMotorTorque = i3347[1]
  return i3346
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3349 = data
  i3348.m_DampingRatio = i3349[0]
  i3348.m_Frequency = i3349[1]
  i3348.m_Angle = i3349[2]
  return i3348
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3351 = data
  i3350.m_LowerTranslation = i3351[0]
  i3350.m_UpperTranslation = i3351[1]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3352 = root || new pc.UnityMaterial()
  var i3353 = data
  i3352.name = i3353[0]
  request.r(i3353[1], i3353[2], 0, i3352, 'shader')
  i3352.renderQueue = i3353[3]
  i3352.enableInstancing = !!i3353[4]
  var i3355 = i3353[5]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3355[i + 0]) );
  }
  i3352.floatParameters = i3354
  var i3357 = i3353[6]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3357[i + 0]) );
  }
  i3352.colorParameters = i3356
  var i3359 = i3353[7]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3359[i + 0]) );
  }
  i3352.vectorParameters = i3358
  var i3361 = i3353[8]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 1) {
    i3360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3361[i + 0]) );
  }
  i3352.textureParameters = i3360
  var i3363 = i3353[9]
  var i3362 = []
  for(var i = 0; i < i3363.length; i += 1) {
    i3362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3363[i + 0]) );
  }
  i3352.materialFlags = i3362
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3367 = data
  i3366.name = i3367[0]
  i3366.value = i3367[1]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3371 = data
  i3370.name = i3371[0]
  i3370.value = new pc.Color(i3371[1], i3371[2], i3371[3], i3371[4])
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3375 = data
  i3374.name = i3375[0]
  i3374.value = new pc.Vec4( i3375[1], i3375[2], i3375[3], i3375[4] )
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3379 = data
  i3378.name = i3379[0]
  request.r(i3379[1], i3379[2], 0, i3378, 'value')
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3383 = data
  i3382.name = i3383[0]
  i3382.enabled = !!i3383[1]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3385 = data
  i3384.name = i3385[0]
  i3384.width = i3385[1]
  i3384.height = i3385[2]
  i3384.mipmapCount = i3385[3]
  i3384.anisoLevel = i3385[4]
  i3384.filterMode = i3385[5]
  i3384.hdr = !!i3385[6]
  i3384.format = i3385[7]
  i3384.wrapMode = i3385[8]
  i3384.alphaIsTransparency = !!i3385[9]
  i3384.alphaSource = i3385[10]
  i3384.graphicsFormat = i3385[11]
  i3384.sRGBTexture = !!i3385[12]
  i3384.desiredColorSpace = i3385[13]
  i3384.wrapU = i3385[14]
  i3384.wrapV = i3385[15]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3387 = data
  i3386.position = new pc.Vec3( i3387[0], i3387[1], i3387[2] )
  i3386.scale = new pc.Vec3( i3387[3], i3387[4], i3387[5] )
  i3386.rotation = new pc.Quat(i3387[6], i3387[7], i3387[8], i3387[9])
  return i3386
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i3388 = root || request.c( 'HeartEffect' )
  var i3389 = data
  i3388.defaultLifeTime = i3389[0]
  request.r(i3389[1], i3389[2], 0, i3388, 'tf')
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3391 = data
  i3390.color = new pc.Color(i3391[0], i3391[1], i3391[2], i3391[3])
  request.r(i3391[4], i3391[5], 0, i3390, 'sprite')
  i3390.flipX = !!i3391[6]
  i3390.flipY = !!i3391[7]
  i3390.drawMode = i3391[8]
  i3390.size = new pc.Vec2( i3391[9], i3391[10] )
  i3390.tileMode = i3391[11]
  i3390.adaptiveModeThreshold = i3391[12]
  i3390.maskInteraction = i3391[13]
  i3390.spriteSortPoint = i3391[14]
  i3390.enabled = !!i3391[15]
  request.r(i3391[16], i3391[17], 0, i3390, 'sharedMaterial')
  var i3393 = i3391[18]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 2) {
  request.r(i3393[i + 0], i3393[i + 1], 2, i3392, '')
  }
  i3390.sharedMaterials = i3392
  i3390.receiveShadows = !!i3391[19]
  i3390.shadowCastingMode = i3391[20]
  i3390.sortingLayerID = i3391[21]
  i3390.sortingOrder = i3391[22]
  i3390.lightmapIndex = i3391[23]
  i3390.lightmapSceneIndex = i3391[24]
  i3390.lightmapScaleOffset = new pc.Vec4( i3391[25], i3391[26], i3391[27], i3391[28] )
  i3390.lightProbeUsage = i3391[29]
  i3390.reflectionProbeUsage = i3391[30]
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3397 = data
  i3396.name = i3397[0]
  i3396.tagId = i3397[1]
  i3396.enabled = !!i3397[2]
  i3396.isStatic = !!i3397[3]
  i3396.layer = i3397[4]
  return i3396
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i3398 = root || request.c( 'HeartBreakEffect' )
  var i3399 = data
  i3398.defaultLifeTime = i3399[0]
  request.r(i3399[1], i3399[2], 0, i3398, 'tf')
  return i3398
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i3400 = root || request.c( 'BlinkEffect' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'tf')
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'mesh')
  i3402.meshCount = i3403[2]
  i3402.activeVertexStreamsCount = i3403[3]
  i3402.alignment = i3403[4]
  i3402.renderMode = i3403[5]
  i3402.sortMode = i3403[6]
  i3402.lengthScale = i3403[7]
  i3402.velocityScale = i3403[8]
  i3402.cameraVelocityScale = i3403[9]
  i3402.normalDirection = i3403[10]
  i3402.sortingFudge = i3403[11]
  i3402.minParticleSize = i3403[12]
  i3402.maxParticleSize = i3403[13]
  i3402.pivot = new pc.Vec3( i3403[14], i3403[15], i3403[16] )
  request.r(i3403[17], i3403[18], 0, i3402, 'trailMaterial')
  i3402.applyActiveColorSpace = !!i3403[19]
  i3402.enabled = !!i3403[20]
  request.r(i3403[21], i3403[22], 0, i3402, 'sharedMaterial')
  var i3405 = i3403[23]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 2) {
  request.r(i3405[i + 0], i3405[i + 1], 2, i3404, '')
  }
  i3402.sharedMaterials = i3404
  i3402.receiveShadows = !!i3403[24]
  i3402.shadowCastingMode = i3403[25]
  i3402.sortingLayerID = i3403[26]
  i3402.sortingOrder = i3403[27]
  i3402.lightmapIndex = i3403[28]
  i3402.lightmapSceneIndex = i3403[29]
  i3402.lightmapScaleOffset = new pc.Vec4( i3403[30], i3403[31], i3403[32], i3403[33] )
  i3402.lightProbeUsage = i3403[34]
  i3402.reflectionProbeUsage = i3403[35]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3407 = data
  i3406.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3407[0], i3406.main)
  i3406.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3407[1], i3406.colorBySpeed)
  i3406.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3407[2], i3406.colorOverLifetime)
  i3406.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3407[3], i3406.emission)
  i3406.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3407[4], i3406.rotationBySpeed)
  i3406.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3407[5], i3406.rotationOverLifetime)
  i3406.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3407[6], i3406.shape)
  i3406.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3407[7], i3406.sizeBySpeed)
  i3406.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3407[8], i3406.sizeOverLifetime)
  i3406.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3407[9], i3406.textureSheetAnimation)
  i3406.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3407[10], i3406.velocityOverLifetime)
  i3406.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3407[11], i3406.noise)
  i3406.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3407[12], i3406.inheritVelocity)
  i3406.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3407[13], i3406.forceOverLifetime)
  i3406.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3407[14], i3406.limitVelocityOverLifetime)
  i3406.useAutoRandomSeed = !!i3407[15]
  i3406.randomSeed = i3407[16]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3408 = root || new pc.ParticleSystemMain()
  var i3409 = data
  i3408.duration = i3409[0]
  i3408.loop = !!i3409[1]
  i3408.prewarm = !!i3409[2]
  i3408.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[3], i3408.startDelay)
  i3408.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[4], i3408.startLifetime)
  i3408.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[5], i3408.startSpeed)
  i3408.startSize3D = !!i3409[6]
  i3408.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[7], i3408.startSizeX)
  i3408.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[8], i3408.startSizeY)
  i3408.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[9], i3408.startSizeZ)
  i3408.startRotation3D = !!i3409[10]
  i3408.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[11], i3408.startRotationX)
  i3408.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[12], i3408.startRotationY)
  i3408.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[13], i3408.startRotationZ)
  i3408.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3409[14], i3408.startColor)
  i3408.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[15], i3408.gravityModifier)
  i3408.simulationSpace = i3409[16]
  request.r(i3409[17], i3409[18], 0, i3408, 'customSimulationSpace')
  i3408.simulationSpeed = i3409[19]
  i3408.useUnscaledTime = !!i3409[20]
  i3408.scalingMode = i3409[21]
  i3408.playOnAwake = !!i3409[22]
  i3408.maxParticles = i3409[23]
  i3408.emitterVelocityMode = i3409[24]
  i3408.stopAction = i3409[25]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3410 = root || new pc.MinMaxCurve()
  var i3411 = data
  i3410.mode = i3411[0]
  i3410.curveMin = new pc.AnimationCurve( { keys_flow: i3411[1] } )
  i3410.curveMax = new pc.AnimationCurve( { keys_flow: i3411[2] } )
  i3410.curveMultiplier = i3411[3]
  i3410.constantMin = i3411[4]
  i3410.constantMax = i3411[5]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3412 = root || new pc.MinMaxGradient()
  var i3413 = data
  i3412.mode = i3413[0]
  i3412.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3413[1], i3412.gradientMin)
  i3412.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3413[2], i3412.gradientMax)
  i3412.colorMin = new pc.Color(i3413[3], i3413[4], i3413[5], i3413[6])
  i3412.colorMax = new pc.Color(i3413[7], i3413[8], i3413[9], i3413[10])
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3415 = data
  i3414.mode = i3415[0]
  var i3417 = i3415[1]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3417[i + 0]) );
  }
  i3414.colorKeys = i3416
  var i3419 = i3415[2]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3419[i + 0]) );
  }
  i3414.alphaKeys = i3418
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3420 = root || new pc.ParticleSystemColorBySpeed()
  var i3421 = data
  i3420.enabled = !!i3421[0]
  i3420.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3421[1], i3420.color)
  i3420.range = new pc.Vec2( i3421[2], i3421[3] )
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3425 = data
  i3424.color = new pc.Color(i3425[0], i3425[1], i3425[2], i3425[3])
  i3424.time = i3425[4]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3429 = data
  i3428.alpha = i3429[0]
  i3428.time = i3429[1]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3430 = root || new pc.ParticleSystemColorOverLifetime()
  var i3431 = data
  i3430.enabled = !!i3431[0]
  i3430.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3431[1], i3430.color)
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3432 = root || new pc.ParticleSystemEmitter()
  var i3433 = data
  i3432.enabled = !!i3433[0]
  i3432.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3433[1], i3432.rateOverTime)
  i3432.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3433[2], i3432.rateOverDistance)
  var i3435 = i3433[3]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3435[i + 0]) );
  }
  i3432.bursts = i3434
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3438 = root || new pc.ParticleSystemBurst()
  var i3439 = data
  i3438.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3439[0], i3438.count)
  i3438.cycleCount = i3439[1]
  i3438.minCount = i3439[2]
  i3438.maxCount = i3439[3]
  i3438.repeatInterval = i3439[4]
  i3438.time = i3439[5]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3440 = root || new pc.ParticleSystemRotationBySpeed()
  var i3441 = data
  i3440.enabled = !!i3441[0]
  i3440.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3441[1], i3440.x)
  i3440.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3441[2], i3440.y)
  i3440.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3441[3], i3440.z)
  i3440.separateAxes = !!i3441[4]
  i3440.range = new pc.Vec2( i3441[5], i3441[6] )
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3442 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3443 = data
  i3442.enabled = !!i3443[0]
  i3442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3443[1], i3442.x)
  i3442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3443[2], i3442.y)
  i3442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3443[3], i3442.z)
  i3442.separateAxes = !!i3443[4]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3444 = root || new pc.ParticleSystemShape()
  var i3445 = data
  i3444.enabled = !!i3445[0]
  i3444.shapeType = i3445[1]
  i3444.randomDirectionAmount = i3445[2]
  i3444.sphericalDirectionAmount = i3445[3]
  i3444.randomPositionAmount = i3445[4]
  i3444.alignToDirection = !!i3445[5]
  i3444.radius = i3445[6]
  i3444.radiusMode = i3445[7]
  i3444.radiusSpread = i3445[8]
  i3444.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3445[9], i3444.radiusSpeed)
  i3444.radiusThickness = i3445[10]
  i3444.angle = i3445[11]
  i3444.length = i3445[12]
  i3444.boxThickness = new pc.Vec3( i3445[13], i3445[14], i3445[15] )
  i3444.meshShapeType = i3445[16]
  request.r(i3445[17], i3445[18], 0, i3444, 'mesh')
  request.r(i3445[19], i3445[20], 0, i3444, 'meshRenderer')
  request.r(i3445[21], i3445[22], 0, i3444, 'skinnedMeshRenderer')
  i3444.useMeshMaterialIndex = !!i3445[23]
  i3444.meshMaterialIndex = i3445[24]
  i3444.useMeshColors = !!i3445[25]
  i3444.normalOffset = i3445[26]
  i3444.arc = i3445[27]
  i3444.arcMode = i3445[28]
  i3444.arcSpread = i3445[29]
  i3444.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3445[30], i3444.arcSpeed)
  i3444.donutRadius = i3445[31]
  i3444.position = new pc.Vec3( i3445[32], i3445[33], i3445[34] )
  i3444.rotation = new pc.Vec3( i3445[35], i3445[36], i3445[37] )
  i3444.scale = new pc.Vec3( i3445[38], i3445[39], i3445[40] )
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3446 = root || new pc.ParticleSystemSizeBySpeed()
  var i3447 = data
  i3446.enabled = !!i3447[0]
  i3446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3447[1], i3446.x)
  i3446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3447[2], i3446.y)
  i3446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3447[3], i3446.z)
  i3446.separateAxes = !!i3447[4]
  i3446.range = new pc.Vec2( i3447[5], i3447[6] )
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3448 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3449 = data
  i3448.enabled = !!i3449[0]
  i3448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3449[1], i3448.x)
  i3448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3449[2], i3448.y)
  i3448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3449[3], i3448.z)
  i3448.separateAxes = !!i3449[4]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3450 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3451 = data
  i3450.enabled = !!i3451[0]
  i3450.mode = i3451[1]
  i3450.animation = i3451[2]
  i3450.numTilesX = i3451[3]
  i3450.numTilesY = i3451[4]
  i3450.useRandomRow = !!i3451[5]
  i3450.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3451[6], i3450.frameOverTime)
  i3450.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3451[7], i3450.startFrame)
  i3450.cycleCount = i3451[8]
  i3450.rowIndex = i3451[9]
  i3450.flipU = i3451[10]
  i3450.flipV = i3451[11]
  i3450.spriteCount = i3451[12]
  var i3453 = i3451[13]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 2, i3452, '')
  }
  i3450.sprites = i3452
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3456 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3457 = data
  i3456.enabled = !!i3457[0]
  i3456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[1], i3456.x)
  i3456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[2], i3456.y)
  i3456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[3], i3456.z)
  i3456.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[4], i3456.radial)
  i3456.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[5], i3456.speedModifier)
  i3456.space = i3457[6]
  i3456.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[7], i3456.orbitalX)
  i3456.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[8], i3456.orbitalY)
  i3456.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[9], i3456.orbitalZ)
  i3456.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[10], i3456.orbitalOffsetX)
  i3456.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[11], i3456.orbitalOffsetY)
  i3456.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3457[12], i3456.orbitalOffsetZ)
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3458 = root || new pc.ParticleSystemNoise()
  var i3459 = data
  i3458.enabled = !!i3459[0]
  i3458.separateAxes = !!i3459[1]
  i3458.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[2], i3458.strengthX)
  i3458.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[3], i3458.strengthY)
  i3458.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[4], i3458.strengthZ)
  i3458.frequency = i3459[5]
  i3458.damping = !!i3459[6]
  i3458.octaveCount = i3459[7]
  i3458.octaveMultiplier = i3459[8]
  i3458.octaveScale = i3459[9]
  i3458.quality = i3459[10]
  i3458.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[11], i3458.scrollSpeed)
  i3458.scrollSpeedMultiplier = i3459[12]
  i3458.remapEnabled = !!i3459[13]
  i3458.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[14], i3458.remapX)
  i3458.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[15], i3458.remapY)
  i3458.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[16], i3458.remapZ)
  i3458.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[17], i3458.positionAmount)
  i3458.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[18], i3458.rotationAmount)
  i3458.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3459[19], i3458.sizeAmount)
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3460 = root || new pc.ParticleSystemInheritVelocity()
  var i3461 = data
  i3460.enabled = !!i3461[0]
  i3460.mode = i3461[1]
  i3460.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3461[2], i3460.curve)
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3462 = root || new pc.ParticleSystemForceOverLifetime()
  var i3463 = data
  i3462.enabled = !!i3463[0]
  i3462.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[1], i3462.x)
  i3462.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[2], i3462.y)
  i3462.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[3], i3462.z)
  i3462.space = i3463[4]
  i3462.randomized = !!i3463[5]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3464 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3465 = data
  i3464.enabled = !!i3465[0]
  i3464.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[1], i3464.limit)
  i3464.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[2], i3464.limitX)
  i3464.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[3], i3464.limitY)
  i3464.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[4], i3464.limitZ)
  i3464.dampen = i3465[5]
  i3464.separateAxes = !!i3465[6]
  i3464.space = i3465[7]
  i3464.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[8], i3464.drag)
  i3464.multiplyDragByParticleSize = !!i3465[9]
  i3464.multiplyDragByParticleVelocity = !!i3465[10]
  return i3464
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i3466 = root || request.c( 'StarExploreFX' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'tf')
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3469 = data
  i3468.pivot = new pc.Vec2( i3469[0], i3469[1] )
  i3468.anchorMin = new pc.Vec2( i3469[2], i3469[3] )
  i3468.anchorMax = new pc.Vec2( i3469[4], i3469[5] )
  i3468.sizeDelta = new pc.Vec2( i3469[6], i3469[7] )
  i3468.anchoredPosition3D = new pc.Vec3( i3469[8], i3469[9], i3469[10] )
  i3468.rotation = new pc.Quat(i3469[11], i3469[12], i3469[13], i3469[14])
  i3468.scale = new pc.Vec3( i3469[15], i3469[16], i3469[17] )
  return i3468
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i3470 = root || request.c( 'ClockTimer' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'fillImage')
  request.r(i3471[2], i3471[3], 0, i3470, 'tf')
  i3470.spawnZoomDuration = i3471[4]
  i3470.despawnZoomDuration = i3471[5]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3473 = data
  i3472.cullTransparentMesh = !!i3473[0]
  return i3472
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.UI.Image' )
  var i3475 = data
  request.r(i3475[0], i3475[1], 0, i3474, 'm_Sprite')
  i3474.m_Type = i3475[2]
  i3474.m_PreserveAspect = !!i3475[3]
  i3474.m_FillCenter = !!i3475[4]
  i3474.m_FillMethod = i3475[5]
  i3474.m_FillAmount = i3475[6]
  i3474.m_FillClockwise = !!i3475[7]
  i3474.m_FillOrigin = i3475[8]
  i3474.m_UseSpriteMesh = !!i3475[9]
  i3474.m_PixelsPerUnitMultiplier = i3475[10]
  request.r(i3475[11], i3475[12], 0, i3474, 'm_Material')
  i3474.m_Maskable = !!i3475[13]
  i3474.m_Color = new pc.Color(i3475[14], i3475[15], i3475[16], i3475[17])
  i3474.m_RaycastTarget = !!i3475[18]
  i3474.m_RaycastPadding = new pc.Vec4( i3475[19], i3475[20], i3475[21], i3475[22] )
  return i3474
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i3476 = root || request.c( 'WaterSplash' )
  var i3477 = data
  request.r(i3477[0], i3477[1], 0, i3476, 'tf')
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3479 = data
  i3478.center = new pc.Vec3( i3479[0], i3479[1], i3479[2] )
  i3478.radius = i3479[3]
  i3478.enabled = !!i3479[4]
  i3478.isTrigger = !!i3479[5]
  request.r(i3479[6], i3479[7], 0, i3478, 'material')
  return i3478
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i3480 = root || request.c( 'ItemDraggable' )
  var i3481 = data
  i3480.isDraggable = !!i3481[0]
  request.r(i3481[1], i3481[2], 0, i3480, 'returnTransform')
  i3480.setParentToReturnTransform = !!i3481[3]
  i3480.returnToStartOnDragFailed = !!i3481[4]
  i3480.returnToExactReturnTransformPosition = !!i3481[5]
  i3480.cacheStartPosWhenStart = !!i3481[6]
  i3480.targetItemType = i3481[7]
  request.r(i3481[8], i3481[9], 0, i3480, 'item')
  i3480.checkState = !!i3481[10]
  request.r(i3481[11], i3481[12], 0, i3480, 'shadowObject')
  i3480.playReturnToStartFinishSound = !!i3481[13]
  i3480.returnToStartFinishFxType = i3481[14]
  i3480.spawnBreakHeartOnDropFail = !!i3481[15]
  i3480.playBeginDragSound = !!i3481[16]
  i3480.beginDragFxType = i3481[17]
  i3480.liftOffset = i3481[18]
  i3480.dragScaleMultiplier = i3481[19]
  i3480.dragScaleDuration = i3481[20]
  i3480.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i3481[21], i3480.onBeginDrag)
  i3480.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i3481[22], i3480.onDropSuccess)
  i3480.onDropFail = request.d('UnityEngine.Events.UnityEvent', i3481[23], i3480.onDropFail)
  i3480.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i3481[24], i3480.onReturnToStartComplete)
  return i3480
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3483 = data
  i3482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3483[0], i3482.m_PersistentCalls)
  return i3482
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3484 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3485 = data
  var i3487 = i3485[0]
  var i3486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.add(request.d('UnityEngine.Events.PersistentCall', i3487[i + 0]));
  }
  i3484.m_Calls = i3486
  return i3484
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'm_Target')
  i3490.m_TargetAssemblyTypeName = i3491[2]
  i3490.m_MethodName = i3491[3]
  i3490.m_Mode = i3491[4]
  i3490.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3491[5], i3490.m_Arguments)
  i3490.m_CallState = i3491[6]
  return i3490
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3493 = data
  request.r(i3493[0], i3493[1], 0, i3492, 'm_ObjectArgument')
  i3492.m_ObjectArgumentAssemblyTypeName = i3493[2]
  i3492.m_IntArgument = i3493[3]
  i3492.m_FloatArgument = i3493[4]
  i3492.m_StringArgument = i3493[5]
  i3492.m_BoolArgument = !!i3493[6]
  return i3492
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i3494 = root || request.c( 'ItemMoveToTarget' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'defaultTarget')
  i3494.duration = i3495[2]
  i3494.useAnimationCurve = !!i3495[3]
  i3494.moveCurve = new pc.AnimationCurve( { keys_flow: i3495[4] } )
  i3494.easeType = i3495[5]
  i3494.moveType = i3495[6]
  i3494.jumpPower = i3495[7]
  i3494.numJumps = i3495[8]
  i3494.rotate360DuringJump = !!i3495[9]
  i3494.flipRotate = !!i3495[10]
  i3494.angleRotate = i3495[11]
  i3494.scaleOnMove = !!i3495[12]
  i3494.endScaleMultiplier = i3495[13]
  i3494.setParentToTarget = !!i3495[14]
  i3494.onComplete = request.d('UnityEngine.Events.UnityEvent', i3495[15], i3494.onComplete)
  i3494.lockInputWhileMoving = !!i3495[16]
  i3494.resetParentBeforeMove = !!i3495[17]
  return i3494
}

Deserializers["Paper"] = function (request, data, root) {
  var i3496 = root || request.c( 'Paper' )
  var i3497 = data
  i3496.isUse = !!i3497[0]
  request.r(i3497[1], i3497[2], 0, i3496, 'paper')
  request.r(i3497[3], i3497[4], 0, i3496, 'paperTrash')
  request.r(i3497[5], i3497[6], 0, i3496, 'itemDragRaycastTarget')
  request.r(i3497[7], i3497[8], 0, i3496, 'curentCollider')
  i3496.isDone = !!i3497[9]
  i3496.onProcess = !!i3497[10]
  i3496.requireMatchingTargetTypeForHandTut = !!i3497[11]
  request.r(i3497[12], i3497[13], 0, i3496, 'itemDraggable')
  request.r(i3497[14], i3497[15], 0, i3496, 'itemClickable')
  request.r(i3497[16], i3497[17], 0, i3496, 'itemStirring')
  request.r(i3497[18], i3497[19], 0, i3496, 'itemKnifeSpriteMaskCutter')
  request.r(i3497[20], i3497[21], 0, i3496, 'itemSpriteMaskPainter')
  request.r(i3497[22], i3497[23], 0, i3496, 'itemDragSpriteMaskPainter')
  request.r(i3497[24], i3497[25], 0, i3496, 'itemMoveToTarget')
  request.r(i3497[26], i3497[27], 0, i3496, 'animator')
  i3496.itemType = i3497[28]
  request.r(i3497[29], i3497[30], 0, i3496, 'spriteRenderer')
  i3496.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3497[31], i3496.onKnifeIn)
  request.r(i3497[32], i3497[33], 0, i3496, 'knifePos')
  i3496.heartEffectScale = i3497[34]
  i3496.breakHeartEffectScale = i3497[35]
  i3496.blinkEffectScale = i3497[36]
  i3496.mergeEffectScale = i3497[37]
  i3496.playMoveToTargetFinishSound = !!i3497[38]
  i3496.moveToTargetFinishFxType = i3497[39]
  i3496.fxSpawnZPos = i3497[40]
  request.r(i3497[41], i3497[42], 0, i3496, 'tf')
  return i3496
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i3498 = root || request.c( 'ItemDragRaycastTarget' )
  var i3499 = data
  i3498.targetToFind = i3499[0]
  i3498.targetItemTypeWhenHit = i3499[1]
  i3498.targetItemTypeOnDropFail = i3499[2]
  request.r(i3499[3], i3499[4], 0, i3498, 'raycastPoint')
  i3498.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3499[5] )
  i3498.rayDistance = i3499[6]
  i3498.updateMoveDefaultTarget = !!i3499[7]
  i3498.invokeOnlyWhenTargetChanged = !!i3499[8]
  i3498.targetChangeEnabled = !!i3499[9]
  i3498.restoreTargetOnDropFail = !!i3499[10]
  i3498.resetCurrentTargetOnNoHit = !!i3499[11]
  i3498.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i3499[12], i3498.onTargetFound)
  i3498.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i3499[13], i3498.onTargetFoundWithItem)
  return i3498
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i3500 = root || request.c( 'ItemRaycastTargetEvent' )
  var i3501 = data
  i3500.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3501[0], i3500.m_PersistentCalls)
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3503 = data
  request.r(i3503[0], i3503[1], 0, i3502, 'animatorController')
  request.r(i3503[2], i3503[3], 0, i3502, 'avatar')
  i3502.updateMode = i3503[4]
  i3502.hasTransformHierarchy = !!i3503[5]
  i3502.applyRootMotion = !!i3503[6]
  var i3505 = i3503[7]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 2) {
  request.r(i3505[i + 0], i3505[i + 1], 2, i3504, '')
  }
  i3502.humanBones = i3504
  i3502.enabled = !!i3503[8]
  return i3502
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i3508 = root || request.c( 'ItemSound' )
  var i3509 = data
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3511 = data
  i3510.name = i3511[0]
  i3510.index = i3511[1]
  i3510.startup = !!i3511[2]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3513 = data
  i3512.planeDistance = i3513[0]
  i3512.referencePixelsPerUnit = i3513[1]
  i3512.isFallbackOverlay = !!i3513[2]
  i3512.renderMode = i3513[3]
  i3512.renderOrder = i3513[4]
  i3512.sortingLayerName = i3513[5]
  i3512.sortingOrder = i3513[6]
  i3512.scaleFactor = i3513[7]
  request.r(i3513[8], i3513[9], 0, i3512, 'worldCamera')
  i3512.overrideSorting = !!i3513[10]
  i3512.pixelPerfect = !!i3513[11]
  i3512.targetDisplay = i3513[12]
  i3512.overridePixelPerfect = !!i3513[13]
  i3512.enabled = !!i3513[14]
  return i3512
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3515 = data
  i3514.m_UiScaleMode = i3515[0]
  i3514.m_ReferencePixelsPerUnit = i3515[1]
  i3514.m_ScaleFactor = i3515[2]
  i3514.m_ReferenceResolution = new pc.Vec2( i3515[3], i3515[4] )
  i3514.m_ScreenMatchMode = i3515[5]
  i3514.m_MatchWidthOrHeight = i3515[6]
  i3514.m_PhysicalUnit = i3515[7]
  i3514.m_FallbackScreenDPI = i3515[8]
  i3514.m_DefaultSpriteDPI = i3515[9]
  i3514.m_DynamicPixelsPerUnit = i3515[10]
  i3514.m_PresetInfoIsWorld = !!i3515[11]
  return i3514
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3517 = data
  i3516.m_IgnoreReversedGraphics = !!i3517[0]
  i3516.m_BlockingObjects = i3517[1]
  i3516.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3517[2] )
  return i3516
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3518 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3519 = data
  i3518.m_hasFontAssetChanged = !!i3519[0]
  request.r(i3519[1], i3519[2], 0, i3518, 'm_baseMaterial')
  i3518.m_maskOffset = new pc.Vec4( i3519[3], i3519[4], i3519[5], i3519[6] )
  i3518.m_text = i3519[7]
  i3518.m_isRightToLeft = !!i3519[8]
  request.r(i3519[9], i3519[10], 0, i3518, 'm_fontAsset')
  request.r(i3519[11], i3519[12], 0, i3518, 'm_sharedMaterial')
  var i3521 = i3519[13]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 2) {
  request.r(i3521[i + 0], i3521[i + 1], 2, i3520, '')
  }
  i3518.m_fontSharedMaterials = i3520
  request.r(i3519[14], i3519[15], 0, i3518, 'm_fontMaterial')
  var i3523 = i3519[16]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 2) {
  request.r(i3523[i + 0], i3523[i + 1], 2, i3522, '')
  }
  i3518.m_fontMaterials = i3522
  i3518.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3519[17], i3519[18], i3519[19], i3519[20])
  i3518.m_fontColor = new pc.Color(i3519[21], i3519[22], i3519[23], i3519[24])
  i3518.m_enableVertexGradient = !!i3519[25]
  i3518.m_colorMode = i3519[26]
  i3518.m_fontColorGradient = request.d('TMPro.VertexGradient', i3519[27], i3518.m_fontColorGradient)
  request.r(i3519[28], i3519[29], 0, i3518, 'm_fontColorGradientPreset')
  request.r(i3519[30], i3519[31], 0, i3518, 'm_spriteAsset')
  i3518.m_tintAllSprites = !!i3519[32]
  request.r(i3519[33], i3519[34], 0, i3518, 'm_StyleSheet')
  i3518.m_TextStyleHashCode = i3519[35]
  i3518.m_overrideHtmlColors = !!i3519[36]
  i3518.m_faceColor = UnityEngine.Color32.ConstructColor(i3519[37], i3519[38], i3519[39], i3519[40])
  i3518.m_fontSize = i3519[41]
  i3518.m_fontSizeBase = i3519[42]
  i3518.m_fontWeight = i3519[43]
  i3518.m_enableAutoSizing = !!i3519[44]
  i3518.m_fontSizeMin = i3519[45]
  i3518.m_fontSizeMax = i3519[46]
  i3518.m_fontStyle = i3519[47]
  i3518.m_HorizontalAlignment = i3519[48]
  i3518.m_VerticalAlignment = i3519[49]
  i3518.m_textAlignment = i3519[50]
  i3518.m_characterSpacing = i3519[51]
  i3518.m_wordSpacing = i3519[52]
  i3518.m_lineSpacing = i3519[53]
  i3518.m_lineSpacingMax = i3519[54]
  i3518.m_paragraphSpacing = i3519[55]
  i3518.m_charWidthMaxAdj = i3519[56]
  i3518.m_TextWrappingMode = i3519[57]
  i3518.m_wordWrappingRatios = i3519[58]
  i3518.m_overflowMode = i3519[59]
  request.r(i3519[60], i3519[61], 0, i3518, 'm_linkedTextComponent')
  request.r(i3519[62], i3519[63], 0, i3518, 'parentLinkedComponent')
  i3518.m_enableKerning = !!i3519[64]
  var i3525 = i3519[65]
  var i3524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.add(i3525[i + 0]);
  }
  i3518.m_ActiveFontFeatures = i3524
  i3518.m_enableExtraPadding = !!i3519[66]
  i3518.checkPaddingRequired = !!i3519[67]
  i3518.m_isRichText = !!i3519[68]
  i3518.m_parseCtrlCharacters = !!i3519[69]
  i3518.m_isOrthographic = !!i3519[70]
  i3518.m_isCullingEnabled = !!i3519[71]
  i3518.m_horizontalMapping = i3519[72]
  i3518.m_verticalMapping = i3519[73]
  i3518.m_uvLineOffset = i3519[74]
  i3518.m_geometrySortingOrder = i3519[75]
  i3518.m_IsTextObjectScaleStatic = !!i3519[76]
  i3518.m_VertexBufferAutoSizeReduction = !!i3519[77]
  i3518.m_useMaxVisibleDescender = !!i3519[78]
  i3518.m_pageToDisplay = i3519[79]
  i3518.m_margin = new pc.Vec4( i3519[80], i3519[81], i3519[82], i3519[83] )
  i3518.m_isUsingLegacyAnimationComponent = !!i3519[84]
  i3518.m_isVolumetricText = !!i3519[85]
  request.r(i3519[86], i3519[87], 0, i3518, 'm_Material')
  i3518.m_EmojiFallbackSupport = !!i3519[88]
  i3518.m_Maskable = !!i3519[89]
  i3518.m_Color = new pc.Color(i3519[90], i3519[91], i3519[92], i3519[93])
  i3518.m_RaycastTarget = !!i3519[94]
  i3518.m_RaycastPadding = new pc.Vec4( i3519[95], i3519[96], i3519[97], i3519[98] )
  return i3518
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3526 = root || request.c( 'TMPro.VertexGradient' )
  var i3527 = data
  i3526.topLeft = new pc.Color(i3527[0], i3527[1], i3527[2], i3527[3])
  i3526.topRight = new pc.Color(i3527[4], i3527[5], i3527[6], i3527[7])
  i3526.bottomLeft = new pc.Color(i3527[8], i3527[9], i3527[10], i3527[11])
  i3526.bottomRight = new pc.Color(i3527[12], i3527[13], i3527[14], i3527[15])
  return i3526
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.UI.Button' )
  var i3531 = data
  i3530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3531[0], i3530.m_OnClick)
  i3530.m_Navigation = request.d('UnityEngine.UI.Navigation', i3531[1], i3530.m_Navigation)
  i3530.m_Transition = i3531[2]
  i3530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3531[3], i3530.m_Colors)
  i3530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3531[4], i3530.m_SpriteState)
  i3530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3531[5], i3530.m_AnimationTriggers)
  i3530.m_Interactable = !!i3531[6]
  request.r(i3531[7], i3531[8], 0, i3530, 'm_TargetGraphic')
  return i3530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3533 = data
  i3532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3533[0], i3532.m_PersistentCalls)
  return i3532
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3535 = data
  i3534.m_Mode = i3535[0]
  i3534.m_WrapAround = !!i3535[1]
  request.r(i3535[2], i3535[3], 0, i3534, 'm_SelectOnUp')
  request.r(i3535[4], i3535[5], 0, i3534, 'm_SelectOnDown')
  request.r(i3535[6], i3535[7], 0, i3534, 'm_SelectOnLeft')
  request.r(i3535[8], i3535[9], 0, i3534, 'm_SelectOnRight')
  return i3534
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3537 = data
  i3536.m_NormalColor = new pc.Color(i3537[0], i3537[1], i3537[2], i3537[3])
  i3536.m_HighlightedColor = new pc.Color(i3537[4], i3537[5], i3537[6], i3537[7])
  i3536.m_PressedColor = new pc.Color(i3537[8], i3537[9], i3537[10], i3537[11])
  i3536.m_SelectedColor = new pc.Color(i3537[12], i3537[13], i3537[14], i3537[15])
  i3536.m_DisabledColor = new pc.Color(i3537[16], i3537[17], i3537[18], i3537[19])
  i3536.m_ColorMultiplier = i3537[20]
  i3536.m_FadeDuration = i3537[21]
  return i3536
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3538 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3539 = data
  request.r(i3539[0], i3539[1], 0, i3538, 'm_HighlightedSprite')
  request.r(i3539[2], i3539[3], 0, i3538, 'm_PressedSprite')
  request.r(i3539[4], i3539[5], 0, i3538, 'm_SelectedSprite')
  request.r(i3539[6], i3539[7], 0, i3538, 'm_DisabledSprite')
  return i3538
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3541 = data
  i3540.m_NormalTrigger = i3541[0]
  i3540.m_HighlightedTrigger = i3541[1]
  i3540.m_PressedTrigger = i3541[2]
  i3540.m_SelectedTrigger = i3541[3]
  i3540.m_DisabledTrigger = i3541[4]
  return i3540
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3542 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3543 = data
  request.r(i3543[0], i3543[1], 0, i3542, 'm_FillRect')
  request.r(i3543[2], i3543[3], 0, i3542, 'm_HandleRect')
  i3542.m_Direction = i3543[4]
  i3542.m_MinValue = i3543[5]
  i3542.m_MaxValue = i3543[6]
  i3542.m_WholeNumbers = !!i3543[7]
  i3542.m_Value = i3543[8]
  i3542.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3543[9], i3542.m_OnValueChanged)
  i3542.m_Navigation = request.d('UnityEngine.UI.Navigation', i3543[10], i3542.m_Navigation)
  i3542.m_Transition = i3543[11]
  i3542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3543[12], i3542.m_Colors)
  i3542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3543[13], i3542.m_SpriteState)
  i3542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3543[14], i3542.m_AnimationTriggers)
  i3542.m_Interactable = !!i3543[15]
  request.r(i3543[16], i3543[17], 0, i3542, 'm_TargetGraphic')
  return i3542
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3544 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3545 = data
  i3544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3545[0], i3544.m_PersistentCalls)
  return i3544
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i3546 = root || request.c( 'ProgressSlider' )
  var i3547 = data
  request.r(i3547[0], i3547[1], 0, i3546, 'progressSlider')
  i3546.maxProgressItems = i3547[2]
  i3546.startProgressItems = i3547[3]
  request.r(i3547[4], i3547[5], 0, i3546, 'progressText')
  return i3546
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3548 = root || request.c( 'Ply_Pool' )
  var i3549 = data
  var i3551 = i3549[0]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Ply_Pool+PoolAmount', i3551[i + 0]) );
  }
  i3548.poolAmounts = i3550
  request.r(i3549[1], i3549[2], 0, i3548, 'poolHolder')
  return i3548
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3554 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3555 = data
  i3554.type = i3555[0]
  i3554.amount = i3555[1]
  request.r(i3555[2], i3555[3], 0, i3554, 'gameUnit')
  return i3554
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3556 = root || request.c( 'Ply_SoundManager' )
  var i3557 = data
  var i3559 = i3557[0]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( request.d('Ply_SoundManager+FxAudio', i3559[i + 0]) );
  }
  i3556.fxAudios = i3558
  request.r(i3557[1], i3557[2], 0, i3556, 'sound')
  return i3556
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i3562 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i3563 = data
  i3562.fxType = i3563[0]
  request.r(i3563[1], i3563[2], 0, i3562, 'audioClip')
  i3562.volume = i3563[3]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3565 = data
  request.r(i3565[0], i3565[1], 0, i3564, 'clip')
  request.r(i3565[2], i3565[3], 0, i3564, 'outputAudioMixerGroup')
  i3564.playOnAwake = !!i3565[4]
  i3564.loop = !!i3565[5]
  i3564.time = i3565[6]
  i3564.volume = i3565[7]
  i3564.pitch = i3565[8]
  i3564.enabled = !!i3565[9]
  return i3564
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3566 = root || request.c( 'GameManager' )
  var i3567 = data
  i3566.isPlaying = !!i3567[0]
  i3566.isTutorial = !!i3567[1]
  i3566.isGotoStore = !!i3567[2]
  i3566.isLoseGame = !!i3567[3]
  i3566.countMove = i3567[4]
  i3566.currentLayer = i3567[5]
  request.r(i3567[6], i3567[7], 0, i3566, 'trashCan')
  request.r(i3567[8], i3567[9], 0, i3566, 'step1')
  request.r(i3567[10], i3567[11], 0, i3566, 'paperBox')
  return i3566
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3568 = root || request.c( 'UIManager' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'winUI')
  request.r(i3569[2], i3569[3], 0, i3568, 'loseUI')
  request.r(i3569[4], i3569[5], 0, i3568, 'tutorial')
  request.r(i3569[6], i3569[7], 0, i3568, 'verticalUI')
  request.r(i3569[8], i3569[9], 0, i3568, 'horizontalUI')
  request.r(i3569[10], i3569[11], 0, i3568, 'downloadBtn')
  request.r(i3569[12], i3569[13], 0, i3568, 'horizontalDownloadBtn')
  request.r(i3569[14], i3569[15], 0, i3568, 'textAnim')
  i3568.isGoogleBuild = !!i3569[16]
  i3568.screenWidth = i3569[17]
  i3568.screenHeight = i3569[18]
  i3568.scaleHeightOnWidth = i3569[19]
  i3568.isVertical = !!i3569[20]
  i3568.isScreenVertical = !!i3569[21]
  request.r(i3569[22], i3569[23], 0, i3568, 'cam')
  i3568.verticalUIHeightOnWidthRatio = i3569[24]
  i3568.scaleCameraOnValidate = !!i3569[25]
  i3568.screenVerticalHeightOnWidthRatio = i3569[26]
  i3568.useContinuousScaling = !!i3569[27]
  i3568.baseOrthographicSize = i3569[28]
  i3568.baseAspect = i3569[29]
  i3568.landscapeSizeRatio = i3569[30]
  i3568.defaultPortraitSizeRatio = i3569[31]
  var i3571 = i3569[32]
  var i3570 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.add(request.d('ScreenScaleStep', i3571[i + 0]));
  }
  i3568.discreteScaleSteps = i3570
  i3568.usePerspectiveCamera = !!i3569[33]
  request.r(i3569[34], i3569[35], 0, i3568, 'perspectiveFocus')
  i3568.perspectiveFocusDistance = i3569[36]
  i3568.perspectivePadding = i3569[37]
  i3568.fitRendererBounds = !!i3569[38]
  request.r(i3569[39], i3569[40], 0, i3568, 'boundsRoot')
  var i3573 = i3569[41]
  var i3572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 1, i3572, '')
  }
  i3568.boundsRenderers = i3572
  return i3568
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3576 = root || request.c( 'ScreenScaleStep' )
  var i3577 = data
  i3576.heightOnWidthRatio = i3577[0]
  i3576.orthographicSize = i3577[1]
  return i3576
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3580 = root || request.c( 'InputManager' )
  var i3581 = data
  i3580.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3581[0] )
  i3580.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3581[1] )
  i3580.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3581[2] )
  i3580.isDragging = !!i3581[3]
  return i3580
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i3582 = root || request.c( 'HandTutManager' )
  var i3583 = data
  var i3585 = i3583[0]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3585.length; i += 2) {
  request.r(i3585[i + 0], i3585[i + 1], 1, i3584, '')
  }
  i3582.items = i3584
  request.r(i3583[1], i3583[2], 0, i3582, 'knife')
  request.r(i3583[3], i3583[4], 0, i3582, 'knife2')
  request.r(i3583[5], i3583[6], 0, i3582, 'handTutObject')
  request.r(i3583[7], i3583[8], 0, i3582, 'tapToCookObject')
  request.r(i3583[9], i3583[10], 0, i3582, 'oilItem')
  request.r(i3583[11], i3583[12], 0, i3582, 'stoveToggleEvent')
  request.r(i3583[13], i3583[14], 0, i3582, 'waterToggleEvent')
  request.r(i3583[15], i3583[16], 0, i3582, 'sinkBlock')
  var i3587 = i3583[17]
  var i3586 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i3587.length; i += 2) {
  request.r(i3587[i + 0], i3587[i + 1], 1, i3586, '')
  }
  i3582.itemsInWater = i3586
  i3582.noDelayItemCount = i3583[18]
  i3582.breakHeartNoDelayThreshold = i3583[19]
  i3582.shortIdleDelay = i3583[20]
  i3582.maxHandTutShowCount = i3583[21]
  i3582.showSinkWaterTutorialOnStart = !!i3583[22]
  i3582.waitForBowlIntro = !!i3583[23]
  i3582.idleDelay = i3583[24]
  i3582.firstHandTutDelay = i3583[25]
  i3582.phaseHandTutDelay = i3583[26]
  i3582.moveDuration = i3583[27]
  i3582.dragFadeDuration = i3583[28]
  i3582.clickScaleDuration = i3583[29]
  i3582.waitAtEndDuration = i3583[30]
  i3582.handZPosition = i3583[31]
  i3582.clickScaleMultiplier = i3583[32]
  i3582.moveEase = i3583[33]
  i3582.currentDelayHandtut = i3583[34]
  i3582.isBreakingHeartNoDelay = !!i3583[35]
  i3582.tutoredItemCount = i3583[36]
  return i3582
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i3592 = root || request.c( 'PhaseManager' )
  var i3593 = data
  var i3595 = i3593[0]
  var i3594 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.add(request.d('PhaseData', i3595[i + 0]));
  }
  i3592.phases = i3594
  i3592.transitionType = i3593[1]
  i3592.transitionDuration = i3593[2]
  i3592.delayBeforeNextPhase = i3593[3]
  i3592.offScreenLeftX = i3593[4]
  i3592.offScreenRightX = i3593[5]
  i3592.offScreenBottomY = i3593[6]
  i3592.offScreenTopY = i3593[7]
  i3592.centerScreenX = i3593[8]
  request.r(i3593[9], i3593[10], 0, i3592, 'phaseTransitionObject')
  i3592.phaseTransitionObjectDuration = i3593[11]
  i3592.currentPhaseIndex = i3593[12]
  i3592.currentStepCount = i3593[13]
  i3592.isECPopup = !!i3593[14]
  return i3592
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i3598 = root || request.c( 'PhaseData' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'phaseObject')
  i3598.totalSteps = i3599[2]
  i3598.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i3599[3], i3598.onPhaseReady)
  return i3598
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i3600 = root || request.c( 'ItemTypeDoneManager' )
  var i3601 = data
  var i3603 = i3601[0]
  var i3602 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i3603[i + 0]));
  }
  i3600.itemTypeGroups = i3602
  return i3600
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i3606 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i3607 = data
  i3606.itemType = i3607[0]
  var i3609 = i3607[1]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3609.length; i += 2) {
  request.r(i3609[i + 0], i3609[i + 1], 1, i3608, '')
  }
  i3606.items = i3608
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3611 = data
  i3610.aspect = i3611[0]
  i3610.orthographic = !!i3611[1]
  i3610.orthographicSize = i3611[2]
  i3610.backgroundColor = new pc.Color(i3611[3], i3611[4], i3611[5], i3611[6])
  i3610.nearClipPlane = i3611[7]
  i3610.farClipPlane = i3611[8]
  i3610.fieldOfView = i3611[9]
  i3610.depth = i3611[10]
  i3610.clearFlags = i3611[11]
  i3610.cullingMask = i3611[12]
  i3610.rect = i3611[13]
  request.r(i3611[14], i3611[15], 0, i3610, 'targetTexture')
  i3610.usePhysicalProperties = !!i3611[16]
  i3610.focalLength = i3611[17]
  i3610.sensorSize = new pc.Vec2( i3611[18], i3611[19] )
  i3610.lensShift = new pc.Vec2( i3611[20], i3611[21] )
  i3610.gateFit = i3611[22]
  i3610.commandBufferCount = i3611[23]
  i3610.cameraType = i3611[24]
  i3610.enabled = !!i3611[25]
  return i3610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3613 = data
  request.r(i3613[0], i3613[1], 0, i3612, 'm_FirstSelected')
  i3612.m_sendNavigationEvents = !!i3613[2]
  i3612.m_DragThreshold = i3613[3]
  return i3612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3615 = data
  i3614.m_HorizontalAxis = i3615[0]
  i3614.m_VerticalAxis = i3615[1]
  i3614.m_SubmitButton = i3615[2]
  i3614.m_CancelButton = i3615[3]
  i3614.m_InputActionsPerSecond = i3615[4]
  i3614.m_RepeatDelay = i3615[5]
  i3614.m_ForceModuleActive = !!i3615[6]
  i3614.m_SendPointerHoverToParent = !!i3615[7]
  return i3614
}

Deserializers["Item"] = function (request, data, root) {
  var i3616 = root || request.c( 'Item' )
  var i3617 = data
  i3616.isDone = !!i3617[0]
  i3616.onProcess = !!i3617[1]
  i3616.requireMatchingTargetTypeForHandTut = !!i3617[2]
  request.r(i3617[3], i3617[4], 0, i3616, 'itemDraggable')
  request.r(i3617[5], i3617[6], 0, i3616, 'itemClickable')
  request.r(i3617[7], i3617[8], 0, i3616, 'itemStirring')
  request.r(i3617[9], i3617[10], 0, i3616, 'itemKnifeSpriteMaskCutter')
  request.r(i3617[11], i3617[12], 0, i3616, 'itemSpriteMaskPainter')
  request.r(i3617[13], i3617[14], 0, i3616, 'itemDragSpriteMaskPainter')
  request.r(i3617[15], i3617[16], 0, i3616, 'itemMoveToTarget')
  request.r(i3617[17], i3617[18], 0, i3616, 'animator')
  i3616.itemType = i3617[19]
  request.r(i3617[20], i3617[21], 0, i3616, 'spriteRenderer')
  i3616.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3617[22], i3616.onKnifeIn)
  request.r(i3617[23], i3617[24], 0, i3616, 'knifePos')
  i3616.heartEffectScale = i3617[25]
  i3616.breakHeartEffectScale = i3617[26]
  i3616.blinkEffectScale = i3617[27]
  i3616.mergeEffectScale = i3617[28]
  i3616.playMoveToTargetFinishSound = !!i3617[29]
  i3616.moveToTargetFinishFxType = i3617[30]
  i3616.fxSpawnZPos = i3617[31]
  request.r(i3617[32], i3617[33], 0, i3616, 'tf')
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3619 = data
  i3618.ambientIntensity = i3619[0]
  i3618.reflectionIntensity = i3619[1]
  i3618.ambientMode = i3619[2]
  i3618.ambientLight = new pc.Color(i3619[3], i3619[4], i3619[5], i3619[6])
  i3618.ambientSkyColor = new pc.Color(i3619[7], i3619[8], i3619[9], i3619[10])
  i3618.ambientGroundColor = new pc.Color(i3619[11], i3619[12], i3619[13], i3619[14])
  i3618.ambientEquatorColor = new pc.Color(i3619[15], i3619[16], i3619[17], i3619[18])
  i3618.fogColor = new pc.Color(i3619[19], i3619[20], i3619[21], i3619[22])
  i3618.fogEndDistance = i3619[23]
  i3618.fogStartDistance = i3619[24]
  i3618.fogDensity = i3619[25]
  i3618.fog = !!i3619[26]
  request.r(i3619[27], i3619[28], 0, i3618, 'skybox')
  i3618.fogMode = i3619[29]
  var i3621 = i3619[30]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3621[i + 0]) );
  }
  i3618.lightmaps = i3620
  i3618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3619[31], i3618.lightProbes)
  i3618.lightmapsMode = i3619[32]
  i3618.mixedBakeMode = i3619[33]
  i3618.environmentLightingMode = i3619[34]
  i3618.ambientProbe = new pc.SphericalHarmonicsL2(i3619[35])
  i3618.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3619[36])
  i3618.useReferenceAmbientProbe = !!i3619[37]
  request.r(i3619[38], i3619[39], 0, i3618, 'customReflection')
  request.r(i3619[40], i3619[41], 0, i3618, 'defaultReflection')
  i3618.defaultReflectionMode = i3619[42]
  i3618.defaultReflectionResolution = i3619[43]
  i3618.sunLightObjectId = i3619[44]
  i3618.pixelLightCount = i3619[45]
  i3618.defaultReflectionHDR = !!i3619[46]
  i3618.hasLightDataAsset = !!i3619[47]
  i3618.hasManualGenerate = !!i3619[48]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3625 = data
  request.r(i3625[0], i3625[1], 0, i3624, 'lightmapColor')
  request.r(i3625[2], i3625[3], 0, i3624, 'lightmapDirection')
  request.r(i3625[4], i3625[5], 0, i3624, 'shadowMask')
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3626 = root || new UnityEngine.LightProbes()
  var i3627 = data
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3635 = data
  var i3637 = i3635[0]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3637[i + 0]));
  }
  i3634.ShaderCompilationErrors = i3636
  i3634.name = i3635[1]
  i3634.guid = i3635[2]
  var i3639 = i3635[3]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( i3639[i + 0] );
  }
  i3634.shaderDefinedKeywords = i3638
  var i3641 = i3635[4]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3641[i + 0]) );
  }
  i3634.passes = i3640
  var i3643 = i3635[5]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3643[i + 0]) );
  }
  i3634.usePasses = i3642
  var i3645 = i3635[6]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3645[i + 0]) );
  }
  i3634.defaultParameterValues = i3644
  request.r(i3635[7], i3635[8], 0, i3634, 'unityFallbackShader')
  i3634.readDepth = !!i3635[9]
  i3634.hasDepthOnlyPass = !!i3635[10]
  i3634.isCreatedByShaderGraph = !!i3635[11]
  i3634.disableBatching = !!i3635[12]
  i3634.compiled = !!i3635[13]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3649 = data
  i3648.shaderName = i3649[0]
  i3648.errorMessage = i3649[1]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3654 = root || new pc.UnityShaderPass()
  var i3655 = data
  i3654.id = i3655[0]
  i3654.subShaderIndex = i3655[1]
  i3654.name = i3655[2]
  i3654.passType = i3655[3]
  i3654.grabPassTextureName = i3655[4]
  i3654.usePass = !!i3655[5]
  i3654.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[6], i3654.zTest)
  i3654.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[7], i3654.zWrite)
  i3654.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[8], i3654.culling)
  i3654.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3655[9], i3654.blending)
  i3654.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3655[10], i3654.alphaBlending)
  i3654.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[11], i3654.colorWriteMask)
  i3654.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[12], i3654.offsetUnits)
  i3654.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[13], i3654.offsetFactor)
  i3654.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[14], i3654.stencilRef)
  i3654.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[15], i3654.stencilReadMask)
  i3654.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3655[16], i3654.stencilWriteMask)
  i3654.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3655[17], i3654.stencilOp)
  i3654.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3655[18], i3654.stencilOpFront)
  i3654.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3655[19], i3654.stencilOpBack)
  var i3657 = i3655[20]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3657[i + 0]) );
  }
  i3654.tags = i3656
  var i3659 = i3655[21]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( i3659[i + 0] );
  }
  i3654.passDefinedKeywords = i3658
  var i3661 = i3655[22]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3661[i + 0]) );
  }
  i3654.passDefinedKeywordGroups = i3660
  var i3663 = i3655[23]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3663[i + 0]) );
  }
  i3654.variants = i3662
  var i3665 = i3655[24]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3665[i + 0]) );
  }
  i3654.excludedVariants = i3664
  i3654.hasDepthReader = !!i3655[25]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3667 = data
  i3666.val = i3667[0]
  i3666.name = i3667[1]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3669 = data
  i3668.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[0], i3668.src)
  i3668.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[1], i3668.dst)
  i3668.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[2], i3668.op)
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3671 = data
  i3670.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3671[0], i3670.pass)
  i3670.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3671[1], i3670.fail)
  i3670.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3671[2], i3670.zFail)
  i3670.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3671[3], i3670.comp)
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3675 = data
  i3674.name = i3675[0]
  i3674.value = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3679 = data
  var i3681 = i3679[0]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( i3681[i + 0] );
  }
  i3678.keywords = i3680
  i3678.hasDiscard = !!i3679[1]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3685 = data
  i3684.passId = i3685[0]
  i3684.subShaderIndex = i3685[1]
  var i3687 = i3685[2]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( i3687[i + 0] );
  }
  i3684.keywords = i3686
  i3684.vertexProgram = i3685[3]
  i3684.fragmentProgram = i3685[4]
  i3684.exportedForWebGl2 = !!i3685[5]
  i3684.readDepth = !!i3685[6]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'shader')
  i3690.pass = i3691[2]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3695 = data
  i3694.name = i3695[0]
  i3694.type = i3695[1]
  i3694.value = new pc.Vec4( i3695[2], i3695[3], i3695[4], i3695[5] )
  i3694.textureValue = i3695[6]
  i3694.shaderPropertyFlag = i3695[7]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3697 = data
  i3696.name = i3697[0]
  request.r(i3697[1], i3697[2], 0, i3696, 'texture')
  i3696.aabb = i3697[3]
  i3696.vertices = i3697[4]
  i3696.triangles = i3697[5]
  i3696.textureRect = UnityEngine.Rect.MinMaxRect(i3697[6], i3697[7], i3697[8], i3697[9])
  i3696.packedRect = UnityEngine.Rect.MinMaxRect(i3697[10], i3697[11], i3697[12], i3697[13])
  i3696.border = new pc.Vec4( i3697[14], i3697[15], i3697[16], i3697[17] )
  i3696.transparency = i3697[18]
  i3696.bounds = i3697[19]
  i3696.pixelsPerUnit = i3697[20]
  i3696.textureWidth = i3697[21]
  i3696.textureHeight = i3697[22]
  i3696.nativeSize = new pc.Vec2( i3697[23], i3697[24] )
  i3696.pivot = new pc.Vec2( i3697[25], i3697[26] )
  i3696.textureRectOffset = new pc.Vec2( i3697[27], i3697[28] )
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3699 = data
  i3698.name = i3699[0]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3701 = data
  i3700.name = i3701[0]
  i3700.wrapMode = i3701[1]
  i3700.isLooping = !!i3701[2]
  i3700.length = i3701[3]
  var i3703 = i3701[4]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3703[i + 0]) );
  }
  i3700.curves = i3702
  var i3705 = i3701[5]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3705[i + 0]) );
  }
  i3700.events = i3704
  i3700.halfPrecision = !!i3701[6]
  i3700._frameRate = i3701[7]
  i3700.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3701[8], i3700.localBounds)
  i3700.hasMuscleCurves = !!i3701[9]
  var i3707 = i3701[10]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( i3707[i + 0] );
  }
  i3700.clipMuscleConstant = i3706
  i3700.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3701[11], i3700.clipBindingConstant)
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3711 = data
  i3710.path = i3711[0]
  i3710.hash = i3711[1]
  i3710.componentType = i3711[2]
  i3710.property = i3711[3]
  i3710.keys = i3711[4]
  var i3713 = i3711[5]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3713[i + 0]) );
  }
  i3710.objectReferenceKeys = i3712
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3717 = data
  i3716.time = i3717[0]
  request.r(i3717[1], i3717[2], 0, i3716, 'value')
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3721 = data
  i3720.functionName = i3721[0]
  i3720.floatParameter = i3721[1]
  i3720.intParameter = i3721[2]
  i3720.stringParameter = i3721[3]
  request.r(i3721[4], i3721[5], 0, i3720, 'objectReferenceParameter')
  i3720.time = i3721[6]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3723 = data
  i3722.center = new pc.Vec3( i3723[0], i3723[1], i3723[2] )
  i3722.extends = new pc.Vec3( i3723[3], i3723[4], i3723[5] )
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3727 = data
  var i3729 = i3727[0]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( i3729[i + 0] );
  }
  i3726.genericBindings = i3728
  var i3731 = i3727[1]
  var i3730 = []
  for(var i = 0; i < i3731.length; i += 1) {
    i3730.push( i3731[i + 0] );
  }
  i3726.pptrCurveMapping = i3730
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3733 = data
  i3732.name = i3733[0]
  var i3735 = i3733[1]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3735[i + 0]) );
  }
  i3732.layers = i3734
  var i3737 = i3733[2]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3737[i + 0]) );
  }
  i3732.parameters = i3736
  i3732.animationClips = i3733[3]
  i3732.avatarUnsupported = i3733[4]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.defaultWeight = i3741[1]
  i3740.blendingMode = i3741[2]
  i3740.avatarMask = i3741[3]
  i3740.syncedLayerIndex = i3741[4]
  i3740.syncedLayerAffectsTiming = !!i3741[5]
  i3740.syncedLayers = i3741[6]
  i3740.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3741[7], i3740.stateMachine)
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3743 = data
  i3742.id = i3743[0]
  i3742.name = i3743[1]
  i3742.path = i3743[2]
  var i3745 = i3743[3]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3745[i + 0]) );
  }
  i3742.states = i3744
  var i3747 = i3743[4]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3747[i + 0]) );
  }
  i3742.machines = i3746
  var i3749 = i3743[5]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3749[i + 0]) );
  }
  i3742.entryStateTransitions = i3748
  var i3751 = i3743[6]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3751[i + 0]) );
  }
  i3742.exitStateTransitions = i3750
  var i3753 = i3743[7]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3753[i + 0]) );
  }
  i3742.anyStateTransitions = i3752
  i3742.defaultStateId = i3743[8]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3757 = data
  i3756.id = i3757[0]
  i3756.name = i3757[1]
  i3756.cycleOffset = i3757[2]
  i3756.cycleOffsetParameter = i3757[3]
  i3756.cycleOffsetParameterActive = !!i3757[4]
  i3756.mirror = !!i3757[5]
  i3756.mirrorParameter = i3757[6]
  i3756.mirrorParameterActive = !!i3757[7]
  i3756.motionId = i3757[8]
  i3756.nameHash = i3757[9]
  i3756.fullPathHash = i3757[10]
  i3756.speed = i3757[11]
  i3756.speedParameter = i3757[12]
  i3756.speedParameterActive = !!i3757[13]
  i3756.tag = i3757[14]
  i3756.tagHash = i3757[15]
  i3756.writeDefaultValues = !!i3757[16]
  var i3759 = i3757[17]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 2) {
  request.r(i3759[i + 0], i3759[i + 1], 2, i3758, '')
  }
  i3756.behaviours = i3758
  var i3761 = i3757[18]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3761[i + 0]) );
  }
  i3756.transitions = i3760
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3767 = data
  i3766.fullPath = i3767[0]
  i3766.canTransitionToSelf = !!i3767[1]
  i3766.duration = i3767[2]
  i3766.exitTime = i3767[3]
  i3766.hasExitTime = !!i3767[4]
  i3766.hasFixedDuration = !!i3767[5]
  i3766.interruptionSource = i3767[6]
  i3766.offset = i3767[7]
  i3766.orderedInterruption = !!i3767[8]
  i3766.destinationStateId = i3767[9]
  i3766.isExit = !!i3767[10]
  i3766.mute = !!i3767[11]
  i3766.solo = !!i3767[12]
  var i3769 = i3767[13]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3769[i + 0]) );
  }
  i3766.conditions = i3768
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3775 = data
  i3774.destinationStateId = i3775[0]
  i3774.isExit = !!i3775[1]
  i3774.mute = !!i3775[2]
  i3774.solo = !!i3775[3]
  var i3777 = i3775[4]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3777[i + 0]) );
  }
  i3774.conditions = i3776
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3781 = data
  i3780.defaultBool = !!i3781[0]
  i3780.defaultFloat = i3781[1]
  i3780.defaultInt = i3781[2]
  i3780.name = i3781[3]
  i3780.nameHash = i3781[4]
  i3780.type = i3781[5]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3783 = data
  i3782.name = i3783[0]
  i3782.bytes64 = i3783[1]
  i3782.data = i3783[2]
  return i3782
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3784 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3785 = data
  i3784.normalStyle = i3785[0]
  i3784.normalSpacingOffset = i3785[1]
  i3784.boldStyle = i3785[2]
  i3784.boldSpacing = i3785[3]
  i3784.italicStyle = i3785[4]
  i3784.tabSize = i3785[5]
  request.r(i3785[6], i3785[7], 0, i3784, 'atlas')
  i3784.m_SourceFontFileGUID = i3785[8]
  i3784.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3785[9], i3784.m_CreationSettings)
  request.r(i3785[10], i3785[11], 0, i3784, 'm_SourceFontFile')
  i3784.m_SourceFontFilePath = i3785[12]
  i3784.m_AtlasPopulationMode = i3785[13]
  i3784.InternalDynamicOS = !!i3785[14]
  var i3787 = i3785[15]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.add(request.d('UnityEngine.TextCore.Glyph', i3787[i + 0]));
  }
  i3784.m_GlyphTable = i3786
  var i3789 = i3785[16]
  var i3788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.add(request.d('TMPro.TMP_Character', i3789[i + 0]));
  }
  i3784.m_CharacterTable = i3788
  var i3791 = i3785[17]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 2) {
  request.r(i3791[i + 0], i3791[i + 1], 2, i3790, '')
  }
  i3784.m_AtlasTextures = i3790
  i3784.m_AtlasTextureIndex = i3785[18]
  i3784.m_IsMultiAtlasTexturesEnabled = !!i3785[19]
  i3784.m_GetFontFeatures = !!i3785[20]
  i3784.m_ClearDynamicDataOnBuild = !!i3785[21]
  i3784.m_AtlasWidth = i3785[22]
  i3784.m_AtlasHeight = i3785[23]
  i3784.m_AtlasPadding = i3785[24]
  i3784.m_AtlasRenderMode = i3785[25]
  var i3793 = i3785[26]
  var i3792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.add(request.d('UnityEngine.TextCore.GlyphRect', i3793[i + 0]));
  }
  i3784.m_UsedGlyphRects = i3792
  var i3795 = i3785[27]
  var i3794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.add(request.d('UnityEngine.TextCore.GlyphRect', i3795[i + 0]));
  }
  i3784.m_FreeGlyphRects = i3794
  i3784.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3785[28], i3784.m_FontFeatureTable)
  i3784.m_ShouldReimportFontFeatures = !!i3785[29]
  var i3797 = i3785[30]
  var i3796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3797.length; i += 2) {
  request.r(i3797[i + 0], i3797[i + 1], 1, i3796, '')
  }
  i3784.m_FallbackFontAssetTable = i3796
  var i3799 = i3785[31]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( request.d('TMPro.TMP_FontWeightPair', i3799[i + 0]) );
  }
  i3784.m_FontWeightTable = i3798
  var i3801 = i3785[32]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('TMPro.TMP_FontWeightPair', i3801[i + 0]) );
  }
  i3784.fontWeights = i3800
  i3784.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3785[33], i3784.m_fontInfo)
  var i3803 = i3785[34]
  var i3802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.add(request.d('TMPro.TMP_Glyph', i3803[i + 0]));
  }
  i3784.m_glyphInfoList = i3802
  i3784.m_KerningTable = request.d('TMPro.KerningTable', i3785[35], i3784.m_KerningTable)
  var i3805 = i3785[36]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 1, i3804, '')
  }
  i3784.fallbackFontAssets = i3804
  i3784.m_Version = i3785[37]
  i3784.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3785[38], i3784.m_FaceInfo)
  request.r(i3785[39], i3785[40], 0, i3784, 'm_Material')
  return i3784
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3806 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3807 = data
  i3806.sourceFontFileName = i3807[0]
  i3806.sourceFontFileGUID = i3807[1]
  i3806.faceIndex = i3807[2]
  i3806.pointSizeSamplingMode = i3807[3]
  i3806.pointSize = i3807[4]
  i3806.padding = i3807[5]
  i3806.paddingMode = i3807[6]
  i3806.packingMode = i3807[7]
  i3806.atlasWidth = i3807[8]
  i3806.atlasHeight = i3807[9]
  i3806.characterSetSelectionMode = i3807[10]
  i3806.characterSequence = i3807[11]
  i3806.referencedFontAssetGUID = i3807[12]
  i3806.referencedTextAssetGUID = i3807[13]
  i3806.fontStyle = i3807[14]
  i3806.fontStyleModifier = i3807[15]
  i3806.renderMode = i3807[16]
  i3806.includeFontFeatures = !!i3807[17]
  return i3806
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3811 = data
  i3810.m_Index = i3811[0]
  i3810.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3811[1], i3810.m_Metrics)
  i3810.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3811[2], i3810.m_GlyphRect)
  i3810.m_Scale = i3811[3]
  i3810.m_AtlasIndex = i3811[4]
  i3810.m_ClassDefinitionType = i3811[5]
  return i3810
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3813 = data
  i3812.m_Width = i3813[0]
  i3812.m_Height = i3813[1]
  i3812.m_HorizontalBearingX = i3813[2]
  i3812.m_HorizontalBearingY = i3813[3]
  i3812.m_HorizontalAdvance = i3813[4]
  return i3812
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3815 = data
  i3814.m_X = i3815[0]
  i3814.m_Y = i3815[1]
  i3814.m_Width = i3815[2]
  i3814.m_Height = i3815[3]
  return i3814
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3818 = root || request.c( 'TMPro.TMP_Character' )
  var i3819 = data
  i3818.m_ElementType = i3819[0]
  i3818.m_Unicode = i3819[1]
  i3818.m_GlyphIndex = i3819[2]
  i3818.m_Scale = i3819[3]
  return i3818
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3824 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3825 = data
  var i3827 = i3825[0]
  var i3826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.add(request.d('TMPro.MultipleSubstitutionRecord', i3827[i + 0]));
  }
  i3824.m_MultipleSubstitutionRecords = i3826
  var i3829 = i3825[1]
  var i3828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.add(request.d('TMPro.LigatureSubstitutionRecord', i3829[i + 0]));
  }
  i3824.m_LigatureSubstitutionRecords = i3828
  var i3831 = i3825[2]
  var i3830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3831[i + 0]));
  }
  i3824.m_GlyphPairAdjustmentRecords = i3830
  var i3833 = i3825[3]
  var i3832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3833[i + 0]));
  }
  i3824.m_MarkToBaseAdjustmentRecords = i3832
  var i3835 = i3825[4]
  var i3834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3835[i + 0]));
  }
  i3824.m_MarkToMarkAdjustmentRecords = i3834
  return i3824
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3838 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3839 = data
  i3838.m_TargetGlyphID = i3839[0]
  i3838.m_SubstituteGlyphIDs = i3839[1]
  return i3838
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3842 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3843 = data
  i3842.m_ComponentGlyphIDs = i3843[0]
  i3842.m_LigatureGlyphID = i3843[1]
  return i3842
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3846 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3847 = data
  i3846.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3847[0], i3846.m_FirstAdjustmentRecord)
  i3846.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3847[1], i3846.m_SecondAdjustmentRecord)
  i3846.m_FeatureLookupFlags = i3847[2]
  return i3846
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3850 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3851 = data
  i3850.m_BaseGlyphID = i3851[0]
  i3850.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3851[1], i3850.m_BaseGlyphAnchorPoint)
  i3850.m_MarkGlyphID = i3851[2]
  i3850.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3851[3], i3850.m_MarkPositionAdjustment)
  return i3850
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3854 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3855 = data
  i3854.m_BaseMarkGlyphID = i3855[0]
  i3854.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3855[1], i3854.m_BaseMarkGlyphAnchorPoint)
  i3854.m_CombiningMarkGlyphID = i3855[2]
  i3854.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3855[3], i3854.m_CombiningMarkPositionAdjustment)
  return i3854
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3860 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3861 = data
  request.r(i3861[0], i3861[1], 0, i3860, 'regularTypeface')
  request.r(i3861[2], i3861[3], 0, i3860, 'italicTypeface')
  return i3860
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3863 = data
  i3862.Name = i3863[0]
  i3862.PointSize = i3863[1]
  i3862.Scale = i3863[2]
  i3862.CharacterCount = i3863[3]
  i3862.LineHeight = i3863[4]
  i3862.Baseline = i3863[5]
  i3862.Ascender = i3863[6]
  i3862.CapHeight = i3863[7]
  i3862.Descender = i3863[8]
  i3862.CenterLine = i3863[9]
  i3862.SuperscriptOffset = i3863[10]
  i3862.SubscriptOffset = i3863[11]
  i3862.SubSize = i3863[12]
  i3862.Underline = i3863[13]
  i3862.UnderlineThickness = i3863[14]
  i3862.strikethrough = i3863[15]
  i3862.strikethroughThickness = i3863[16]
  i3862.TabWidth = i3863[17]
  i3862.Padding = i3863[18]
  i3862.AtlasWidth = i3863[19]
  i3862.AtlasHeight = i3863[20]
  return i3862
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3866 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3867 = data
  i3866.id = i3867[0]
  i3866.x = i3867[1]
  i3866.y = i3867[2]
  i3866.width = i3867[3]
  i3866.height = i3867[4]
  i3866.xOffset = i3867[5]
  i3866.yOffset = i3867[6]
  i3866.xAdvance = i3867[7]
  i3866.scale = i3867[8]
  return i3866
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.KerningTable' )
  var i3869 = data
  var i3871 = i3869[0]
  var i3870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.add(request.d('TMPro.KerningPair', i3871[i + 0]));
  }
  i3868.kerningPairs = i3870
  return i3868
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3874 = root || request.c( 'TMPro.KerningPair' )
  var i3875 = data
  i3874.xOffset = i3875[0]
  i3874.m_FirstGlyph = i3875[1]
  i3874.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3875[2], i3874.m_FirstGlyphAdjustments)
  i3874.m_SecondGlyph = i3875[3]
  i3874.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3875[4], i3874.m_SecondGlyphAdjustments)
  i3874.m_IgnoreSpacingAdjustments = !!i3875[5]
  return i3874
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3876 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3877 = data
  i3876.m_FaceIndex = i3877[0]
  i3876.m_FamilyName = i3877[1]
  i3876.m_StyleName = i3877[2]
  i3876.m_PointSize = i3877[3]
  i3876.m_Scale = i3877[4]
  i3876.m_UnitsPerEM = i3877[5]
  i3876.m_LineHeight = i3877[6]
  i3876.m_AscentLine = i3877[7]
  i3876.m_CapLine = i3877[8]
  i3876.m_MeanLine = i3877[9]
  i3876.m_Baseline = i3877[10]
  i3876.m_DescentLine = i3877[11]
  i3876.m_SuperscriptOffset = i3877[12]
  i3876.m_SuperscriptSize = i3877[13]
  i3876.m_SubscriptOffset = i3877[14]
  i3876.m_SubscriptSize = i3877[15]
  i3876.m_UnderlineOffset = i3877[16]
  i3876.m_UnderlineThickness = i3877[17]
  i3876.m_StrikethroughOffset = i3877[18]
  i3876.m_StrikethroughThickness = i3877[19]
  i3876.m_TabWidth = i3877[20]
  return i3876
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3879 = data
  i3878.useSafeMode = !!i3879[0]
  i3878.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3879[1], i3878.safeModeOptions)
  i3878.timeScale = i3879[2]
  i3878.unscaledTimeScale = i3879[3]
  i3878.useSmoothDeltaTime = !!i3879[4]
  i3878.maxSmoothUnscaledTime = i3879[5]
  i3878.rewindCallbackMode = i3879[6]
  i3878.showUnityEditorReport = !!i3879[7]
  i3878.logBehaviour = i3879[8]
  i3878.drawGizmos = !!i3879[9]
  i3878.defaultRecyclable = !!i3879[10]
  i3878.defaultAutoPlay = i3879[11]
  i3878.defaultUpdateType = i3879[12]
  i3878.defaultTimeScaleIndependent = !!i3879[13]
  i3878.defaultEaseType = i3879[14]
  i3878.defaultEaseOvershootOrAmplitude = i3879[15]
  i3878.defaultEasePeriod = i3879[16]
  i3878.defaultAutoKill = !!i3879[17]
  i3878.defaultLoopType = i3879[18]
  i3878.debugMode = !!i3879[19]
  i3878.debugStoreTargetId = !!i3879[20]
  i3878.showPreviewPanel = !!i3879[21]
  i3878.storeSettingsLocation = i3879[22]
  i3878.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3879[23], i3878.modules)
  i3878.createASMDEF = !!i3879[24]
  i3878.showPlayingTweens = !!i3879[25]
  i3878.showPausedTweens = !!i3879[26]
  return i3878
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3880 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3881 = data
  i3880.logBehaviour = i3881[0]
  i3880.nestedTweenFailureBehaviour = i3881[1]
  return i3880
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3883 = data
  i3882.showPanel = !!i3883[0]
  i3882.audioEnabled = !!i3883[1]
  i3882.physicsEnabled = !!i3883[2]
  i3882.physics2DEnabled = !!i3883[3]
  i3882.spriteEnabled = !!i3883[4]
  i3882.uiEnabled = !!i3883[5]
  i3882.uiToolkitEnabled = !!i3883[6]
  i3882.textMeshProEnabled = !!i3883[7]
  i3882.tk2DEnabled = !!i3883[8]
  i3882.deAudioEnabled = !!i3883[9]
  i3882.deUnityExtendedEnabled = !!i3883[10]
  i3882.epoOutlineEnabled = !!i3883[11]
  return i3882
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.TMP_Settings' )
  var i3885 = data
  i3884.assetVersion = i3885[0]
  i3884.m_TextWrappingMode = i3885[1]
  i3884.m_enableKerning = !!i3885[2]
  var i3887 = i3885[3]
  var i3886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.add(i3887[i + 0]);
  }
  i3884.m_ActiveFontFeatures = i3886
  i3884.m_enableExtraPadding = !!i3885[4]
  i3884.m_enableTintAllSprites = !!i3885[5]
  i3884.m_enableParseEscapeCharacters = !!i3885[6]
  i3884.m_EnableRaycastTarget = !!i3885[7]
  i3884.m_GetFontFeaturesAtRuntime = !!i3885[8]
  i3884.m_missingGlyphCharacter = i3885[9]
  i3884.m_ClearDynamicDataOnBuild = !!i3885[10]
  i3884.m_warningsDisabled = !!i3885[11]
  request.r(i3885[12], i3885[13], 0, i3884, 'm_defaultFontAsset')
  i3884.m_defaultFontAssetPath = i3885[14]
  i3884.m_defaultFontSize = i3885[15]
  i3884.m_defaultAutoSizeMinRatio = i3885[16]
  i3884.m_defaultAutoSizeMaxRatio = i3885[17]
  i3884.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3885[18], i3885[19] )
  i3884.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3885[20], i3885[21] )
  i3884.m_autoSizeTextContainer = !!i3885[22]
  i3884.m_IsTextObjectScaleStatic = !!i3885[23]
  var i3889 = i3885[24]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3889.length; i += 2) {
  request.r(i3889[i + 0], i3889[i + 1], 1, i3888, '')
  }
  i3884.m_fallbackFontAssets = i3888
  i3884.m_matchMaterialPreset = !!i3885[25]
  i3884.m_HideSubTextObjects = !!i3885[26]
  request.r(i3885[27], i3885[28], 0, i3884, 'm_defaultSpriteAsset')
  i3884.m_defaultSpriteAssetPath = i3885[29]
  i3884.m_enableEmojiSupport = !!i3885[30]
  i3884.m_MissingCharacterSpriteUnicode = i3885[31]
  var i3891 = i3885[32]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3891.length; i += 2) {
  request.r(i3891[i + 0], i3891[i + 1], 1, i3890, '')
  }
  i3884.m_EmojiFallbackTextAssets = i3890
  i3884.m_defaultColorGradientPresetsPath = i3885[33]
  request.r(i3885[34], i3885[35], 0, i3884, 'm_defaultStyleSheet')
  i3884.m_StyleSheetsResourcePath = i3885[36]
  request.r(i3885[37], i3885[38], 0, i3884, 'm_leadingCharacters')
  request.r(i3885[39], i3885[40], 0, i3884, 'm_followingCharacters')
  i3884.m_UseModernHangulLineBreakingRules = !!i3885[41]
  return i3884
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3894 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3895 = data
  request.r(i3895[0], i3895[1], 0, i3894, 'spriteSheet')
  var i3897 = i3895[2]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.add(request.d('TMPro.TMP_Sprite', i3897[i + 0]));
  }
  i3894.spriteInfoList = i3896
  var i3899 = i3895[3]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3899.length; i += 2) {
  request.r(i3899[i + 0], i3899[i + 1], 1, i3898, '')
  }
  i3894.fallbackSpriteAssets = i3898
  var i3901 = i3895[4]
  var i3900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.add(request.d('TMPro.TMP_SpriteCharacter', i3901[i + 0]));
  }
  i3894.m_SpriteCharacterTable = i3900
  var i3903 = i3895[5]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.add(request.d('TMPro.TMP_SpriteGlyph', i3903[i + 0]));
  }
  i3894.m_GlyphTable = i3902
  i3894.m_Version = i3895[6]
  i3894.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3895[7], i3894.m_FaceInfo)
  request.r(i3895[8], i3895[9], 0, i3894, 'm_Material')
  return i3894
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3906 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3907 = data
  i3906.name = i3907[0]
  i3906.hashCode = i3907[1]
  i3906.unicode = i3907[2]
  i3906.pivot = new pc.Vec2( i3907[3], i3907[4] )
  request.r(i3907[5], i3907[6], 0, i3906, 'sprite')
  i3906.id = i3907[7]
  i3906.x = i3907[8]
  i3906.y = i3907[9]
  i3906.width = i3907[10]
  i3906.height = i3907[11]
  i3906.xOffset = i3907[12]
  i3906.yOffset = i3907[13]
  i3906.xAdvance = i3907[14]
  i3906.scale = i3907[15]
  return i3906
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3912 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3913 = data
  i3912.m_Name = i3913[0]
  i3912.m_ElementType = i3913[1]
  i3912.m_Unicode = i3913[2]
  i3912.m_GlyphIndex = i3913[3]
  i3912.m_Scale = i3913[4]
  return i3912
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3916 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3917 = data
  request.r(i3917[0], i3917[1], 0, i3916, 'sprite')
  i3916.m_Index = i3917[2]
  i3916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3917[3], i3916.m_Metrics)
  i3916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3917[4], i3916.m_GlyphRect)
  i3916.m_Scale = i3917[5]
  i3916.m_AtlasIndex = i3917[6]
  i3916.m_ClassDefinitionType = i3917[7]
  return i3916
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3918 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3919 = data
  var i3921 = i3919[0]
  var i3920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.add(request.d('TMPro.TMP_Style', i3921[i + 0]));
  }
  i3918.m_StyleList = i3920
  return i3918
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3924 = root || request.c( 'TMPro.TMP_Style' )
  var i3925 = data
  i3924.m_Name = i3925[0]
  i3924.m_HashCode = i3925[1]
  i3924.m_OpeningDefinition = i3925[2]
  i3924.m_ClosingDefinition = i3925[3]
  i3924.m_OpeningTagArray = i3925[4]
  i3924.m_ClosingTagArray = i3925[5]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3927 = data
  var i3929 = i3927[0]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3929[i + 0]) );
  }
  i3926.files = i3928
  i3926.componentToPrefabIds = i3927[1]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3933 = data
  i3932.path = i3933[0]
  request.r(i3933[1], i3933[2], 0, i3932, 'unityObject')
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3937[i + 0]) );
  }
  i3934.scriptsExecutionOrder = i3936
  var i3939 = i3935[1]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3939[i + 0]) );
  }
  i3934.sortingLayers = i3938
  var i3941 = i3935[2]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3941[i + 0]) );
  }
  i3934.cullingLayers = i3940
  i3934.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3935[3], i3934.timeSettings)
  i3934.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3935[4], i3934.physicsSettings)
  i3934.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3935[5], i3934.physics2DSettings)
  i3934.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3935[6], i3934.qualitySettings)
  i3934.enableRealtimeShadows = !!i3935[7]
  i3934.enableAutoInstancing = !!i3935[8]
  i3934.enableStaticBatching = !!i3935[9]
  i3934.enableDynamicBatching = !!i3935[10]
  i3934.lightmapEncodingQuality = i3935[11]
  i3934.desiredColorSpace = i3935[12]
  var i3943 = i3935[13]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( i3943[i + 0] );
  }
  i3934.allTags = i3942
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3947 = data
  i3946.name = i3947[0]
  i3946.value = i3947[1]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3951 = data
  i3950.id = i3951[0]
  i3950.name = i3951[1]
  i3950.value = i3951[2]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3955 = data
  i3954.id = i3955[0]
  i3954.name = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3957 = data
  i3956.fixedDeltaTime = i3957[0]
  i3956.maximumDeltaTime = i3957[1]
  i3956.timeScale = i3957[2]
  i3956.maximumParticleTimestep = i3957[3]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3959 = data
  i3958.gravity = new pc.Vec3( i3959[0], i3959[1], i3959[2] )
  i3958.defaultSolverIterations = i3959[3]
  i3958.bounceThreshold = i3959[4]
  i3958.autoSyncTransforms = !!i3959[5]
  i3958.autoSimulation = !!i3959[6]
  var i3961 = i3959[7]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3961[i + 0]) );
  }
  i3958.collisionMatrix = i3960
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3965 = data
  i3964.enabled = !!i3965[0]
  i3964.layerId = i3965[1]
  i3964.otherLayerId = i3965[2]
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3967 = data
  request.r(i3967[0], i3967[1], 0, i3966, 'material')
  i3966.gravity = new pc.Vec2( i3967[2], i3967[3] )
  i3966.positionIterations = i3967[4]
  i3966.velocityIterations = i3967[5]
  i3966.velocityThreshold = i3967[6]
  i3966.maxLinearCorrection = i3967[7]
  i3966.maxAngularCorrection = i3967[8]
  i3966.maxTranslationSpeed = i3967[9]
  i3966.maxRotationSpeed = i3967[10]
  i3966.baumgarteScale = i3967[11]
  i3966.baumgarteTOIScale = i3967[12]
  i3966.timeToSleep = i3967[13]
  i3966.linearSleepTolerance = i3967[14]
  i3966.angularSleepTolerance = i3967[15]
  i3966.defaultContactOffset = i3967[16]
  i3966.autoSimulation = !!i3967[17]
  i3966.queriesHitTriggers = !!i3967[18]
  i3966.queriesStartInColliders = !!i3967[19]
  i3966.callbacksOnDisable = !!i3967[20]
  i3966.reuseCollisionCallbacks = !!i3967[21]
  i3966.autoSyncTransforms = !!i3967[22]
  var i3969 = i3967[23]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3969[i + 0]) );
  }
  i3966.collisionMatrix = i3968
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3973 = data
  i3972.enabled = !!i3973[0]
  i3972.layerId = i3973[1]
  i3972.otherLayerId = i3973[2]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3975 = data
  var i3977 = i3975[0]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3977[i + 0]) );
  }
  i3974.qualityLevels = i3976
  var i3979 = i3975[1]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( i3979[i + 0] );
  }
  i3974.names = i3978
  i3974.shadows = i3975[2]
  i3974.anisotropicFiltering = i3975[3]
  i3974.antiAliasing = i3975[4]
  i3974.lodBias = i3975[5]
  i3974.shadowCascades = i3975[6]
  i3974.shadowDistance = i3975[7]
  i3974.shadowmaskMode = i3975[8]
  i3974.shadowProjection = i3975[9]
  i3974.shadowResolution = i3975[10]
  i3974.softParticles = !!i3975[11]
  i3974.softVegetation = !!i3975[12]
  i3974.activeColorSpace = i3975[13]
  i3974.desiredColorSpace = i3975[14]
  i3974.masterTextureLimit = i3975[15]
  i3974.maxQueuedFrames = i3975[16]
  i3974.particleRaycastBudget = i3975[17]
  i3974.pixelLightCount = i3975[18]
  i3974.realtimeReflectionProbes = !!i3975[19]
  i3974.shadowCascade2Split = i3975[20]
  i3974.shadowCascade4Split = new pc.Vec3( i3975[21], i3975[22], i3975[23] )
  i3974.streamingMipmapsActive = !!i3975[24]
  i3974.vSyncCount = i3975[25]
  i3974.asyncUploadBufferSize = i3975[26]
  i3974.asyncUploadTimeSlice = i3975[27]
  i3974.billboardsFaceCameraPosition = !!i3975[28]
  i3974.shadowNearPlaneOffset = i3975[29]
  i3974.streamingMipmapsMemoryBudget = i3975[30]
  i3974.maximumLODLevel = i3975[31]
  i3974.streamingMipmapsAddAllCameras = !!i3975[32]
  i3974.streamingMipmapsMaxLevelReduction = i3975[33]
  i3974.streamingMipmapsRenderersPerFrame = i3975[34]
  i3974.resolutionScalingFixedDPIFactor = i3975[35]
  i3974.streamingMipmapsMaxFileIORequests = i3975[36]
  i3974.currentQualityLevel = i3975[37]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3985 = data
  i3984.mode = i3985[0]
  i3984.parameter = i3985[1]
  i3984.threshold = i3985[2]
  return i3984
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3986 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3987 = data
  i3986.m_GlyphIndex = i3987[0]
  i3986.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3987[1], i3986.m_GlyphValueRecord)
  return i3986
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3988 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3989 = data
  i3988.m_XCoordinate = i3989[0]
  i3988.m_YCoordinate = i3989[1]
  return i3988
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3990 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3991 = data
  i3990.m_XPositionAdjustment = i3991[0]
  i3990.m_YPositionAdjustment = i3991[1]
  return i3990
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3993 = data
  i3992.xPlacement = i3993[0]
  i3992.yPlacement = i3993[1]
  i3992.xAdvance = i3993[2]
  i3992.yAdvance = i3993[3]
  return i3992
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3994 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3995 = data
  i3994.m_XPlacement = i3995[0]
  i3994.m_YPlacement = i3995[1]
  i3994.m_XAdvance = i3995[2]
  i3994.m_YAdvance = i3995[3]
  return i3994
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[28],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[28],"89":[90],"91":[92],"93":[92],"27":[13],"94":[95],"96":[20],"97":[98],"99":[20],"20":[98],"24":[20],"100":[20],"101":[98],"102":[98],"103":[98],"104":[13],"105":[16,13],"106":[90],"107":[16,13],"108":[25,90],"109":[90],"110":[90,111],"112":[68],"113":[75],"114":[115],"116":[117],"118":[5],"119":[28],"120":[121],"122":[13],"123":[90,13],"32":[13,16],"124":[13],"125":[16,13],"126":[90],"127":[16,13],"128":[13],"129":[130],"131":[130],"132":[130],"133":[13],"134":[13],"30":[27],"15":[16,13],"135":[13],"29":[27],"136":[13],"137":[13],"138":[13],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[16,13],"146":[13],"147":[13],"148":[13],"36":[13],"149":[16,13],"150":[13],"151":[49],"152":[49],"50":[49],"153":[49],"154":[28],"155":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Item","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","ItemClickable","UnityEngine.Collider","ItemDragChildRotator","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "50.0";

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

Deserializers.buildID = "27d92a31-8791-4051-98ab-3f5729cc1535";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

