var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.JointSpring' )
  var i2341 = data
  i2340.spring = i2341[0]
  i2340.damper = i2341[1]
  i2340.targetPosition = i2341[2]
  return i2340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.JointMotor' )
  var i2343 = data
  i2342.m_TargetVelocity = i2343[0]
  i2342.m_Force = i2343[1]
  i2342.m_FreeSpin = i2343[2]
  return i2342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.JointLimits' )
  var i2345 = data
  i2344.m_Min = i2345[0]
  i2344.m_Max = i2345[1]
  i2344.m_Bounciness = i2345[2]
  i2344.m_BounceMinVelocity = i2345[3]
  i2344.m_ContactDistance = i2345[4]
  i2344.minBounce = i2345[5]
  i2344.maxBounce = i2345[6]
  return i2344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.JointDrive' )
  var i2347 = data
  i2346.m_PositionSpring = i2347[0]
  i2346.m_PositionDamper = i2347[1]
  i2346.m_MaximumForce = i2347[2]
  i2346.m_UseAcceleration = i2347[3]
  return i2346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2349 = data
  i2348.m_Spring = i2349[0]
  i2348.m_Damper = i2349[1]
  return i2348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2351 = data
  i2350.m_Limit = i2351[0]
  i2350.m_Bounciness = i2351[1]
  i2350.m_ContactDistance = i2351[2]
  return i2350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2353 = data
  i2352.m_ExtremumSlip = i2353[0]
  i2352.m_ExtremumValue = i2353[1]
  i2352.m_AsymptoteSlip = i2353[2]
  i2352.m_AsymptoteValue = i2353[3]
  i2352.m_Stiffness = i2353[4]
  return i2352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2355 = data
  i2354.m_LowerAngle = i2355[0]
  i2354.m_UpperAngle = i2355[1]
  return i2354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2357 = data
  i2356.m_MotorSpeed = i2357[0]
  i2356.m_MaximumMotorTorque = i2357[1]
  return i2356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2359 = data
  i2358.m_DampingRatio = i2359[0]
  i2358.m_Frequency = i2359[1]
  i2358.m_Angle = i2359[2]
  return i2358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2361 = data
  i2360.m_LowerTranslation = i2361[0]
  i2360.m_UpperTranslation = i2361[1]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2362 = root || new pc.UnityMaterial()
  var i2363 = data
  i2362.name = i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'shader')
  i2362.renderQueue = i2363[3]
  i2362.enableInstancing = !!i2363[4]
  var i2365 = i2363[5]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2365[i + 0]) );
  }
  i2362.floatParameters = i2364
  var i2367 = i2363[6]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2367[i + 0]) );
  }
  i2362.colorParameters = i2366
  var i2369 = i2363[7]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2369[i + 0]) );
  }
  i2362.vectorParameters = i2368
  var i2371 = i2363[8]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2371[i + 0]) );
  }
  i2362.textureParameters = i2370
  var i2373 = i2363[9]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2373[i + 0]) );
  }
  i2362.materialFlags = i2372
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2377 = data
  i2376.name = i2377[0]
  i2376.value = i2377[1]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.value = new pc.Color(i2381[1], i2381[2], i2381[3], i2381[4])
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2385 = data
  i2384.name = i2385[0]
  i2384.value = new pc.Vec4( i2385[1], i2385[2], i2385[3], i2385[4] )
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2389 = data
  i2388.name = i2389[0]
  request.r(i2389[1], i2389[2], 0, i2388, 'value')
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.enabled = !!i2393[1]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2395 = data
  i2394.name = i2395[0]
  i2394.width = i2395[1]
  i2394.height = i2395[2]
  i2394.mipmapCount = i2395[3]
  i2394.anisoLevel = i2395[4]
  i2394.filterMode = i2395[5]
  i2394.hdr = !!i2395[6]
  i2394.format = i2395[7]
  i2394.wrapMode = i2395[8]
  i2394.alphaIsTransparency = !!i2395[9]
  i2394.alphaSource = i2395[10]
  i2394.graphicsFormat = i2395[11]
  i2394.sRGBTexture = !!i2395[12]
  i2394.desiredColorSpace = i2395[13]
  i2394.wrapU = i2395[14]
  i2394.wrapV = i2395[15]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2397 = data
  i2396.position = new pc.Vec3( i2397[0], i2397[1], i2397[2] )
  i2396.scale = new pc.Vec3( i2397[3], i2397[4], i2397[5] )
  i2396.rotation = new pc.Quat(i2397[6], i2397[7], i2397[8], i2397[9])
  return i2396
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2398 = root || request.c( 'HeartEffect' )
  var i2399 = data
  i2398.defaultLifeTime = i2399[0]
  request.r(i2399[1], i2399[2], 0, i2398, 'tf')
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2401 = data
  i2400.color = new pc.Color(i2401[0], i2401[1], i2401[2], i2401[3])
  request.r(i2401[4], i2401[5], 0, i2400, 'sprite')
  i2400.flipX = !!i2401[6]
  i2400.flipY = !!i2401[7]
  i2400.drawMode = i2401[8]
  i2400.size = new pc.Vec2( i2401[9], i2401[10] )
  i2400.tileMode = i2401[11]
  i2400.adaptiveModeThreshold = i2401[12]
  i2400.maskInteraction = i2401[13]
  i2400.spriteSortPoint = i2401[14]
  i2400.enabled = !!i2401[15]
  request.r(i2401[16], i2401[17], 0, i2400, 'sharedMaterial')
  var i2403 = i2401[18]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.sharedMaterials = i2402
  i2400.receiveShadows = !!i2401[19]
  i2400.shadowCastingMode = i2401[20]
  i2400.sortingLayerID = i2401[21]
  i2400.sortingOrder = i2401[22]
  i2400.lightmapIndex = i2401[23]
  i2400.lightmapSceneIndex = i2401[24]
  i2400.lightmapScaleOffset = new pc.Vec4( i2401[25], i2401[26], i2401[27], i2401[28] )
  i2400.lightProbeUsage = i2401[29]
  i2400.reflectionProbeUsage = i2401[30]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.tagId = i2407[1]
  i2406.enabled = !!i2407[2]
  i2406.isStatic = !!i2407[3]
  i2406.layer = i2407[4]
  return i2406
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2408 = root || request.c( 'HeartBreakEffect' )
  var i2409 = data
  i2408.defaultLifeTime = i2409[0]
  request.r(i2409[1], i2409[2], 0, i2408, 'tf')
  return i2408
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2410 = root || request.c( 'BlinkEffect' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'tf')
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'mesh')
  i2412.meshCount = i2413[2]
  i2412.activeVertexStreamsCount = i2413[3]
  i2412.alignment = i2413[4]
  i2412.renderMode = i2413[5]
  i2412.sortMode = i2413[6]
  i2412.lengthScale = i2413[7]
  i2412.velocityScale = i2413[8]
  i2412.cameraVelocityScale = i2413[9]
  i2412.normalDirection = i2413[10]
  i2412.sortingFudge = i2413[11]
  i2412.minParticleSize = i2413[12]
  i2412.maxParticleSize = i2413[13]
  i2412.pivot = new pc.Vec3( i2413[14], i2413[15], i2413[16] )
  request.r(i2413[17], i2413[18], 0, i2412, 'trailMaterial')
  i2412.applyActiveColorSpace = !!i2413[19]
  i2412.enabled = !!i2413[20]
  request.r(i2413[21], i2413[22], 0, i2412, 'sharedMaterial')
  var i2415 = i2413[23]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2412.sharedMaterials = i2414
  i2412.receiveShadows = !!i2413[24]
  i2412.shadowCastingMode = i2413[25]
  i2412.sortingLayerID = i2413[26]
  i2412.sortingOrder = i2413[27]
  i2412.lightmapIndex = i2413[28]
  i2412.lightmapSceneIndex = i2413[29]
  i2412.lightmapScaleOffset = new pc.Vec4( i2413[30], i2413[31], i2413[32], i2413[33] )
  i2412.lightProbeUsage = i2413[34]
  i2412.reflectionProbeUsage = i2413[35]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2417 = data
  i2416.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2417[0], i2416.main)
  i2416.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2417[1], i2416.colorBySpeed)
  i2416.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2417[2], i2416.colorOverLifetime)
  i2416.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2417[3], i2416.emission)
  i2416.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2417[4], i2416.rotationBySpeed)
  i2416.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2417[5], i2416.rotationOverLifetime)
  i2416.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2417[6], i2416.shape)
  i2416.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2417[7], i2416.sizeBySpeed)
  i2416.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2417[8], i2416.sizeOverLifetime)
  i2416.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2417[9], i2416.textureSheetAnimation)
  i2416.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2417[10], i2416.velocityOverLifetime)
  i2416.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2417[11], i2416.noise)
  i2416.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2417[12], i2416.inheritVelocity)
  i2416.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2417[13], i2416.forceOverLifetime)
  i2416.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2417[14], i2416.limitVelocityOverLifetime)
  i2416.useAutoRandomSeed = !!i2417[15]
  i2416.randomSeed = i2417[16]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemMain()
  var i2419 = data
  i2418.duration = i2419[0]
  i2418.loop = !!i2419[1]
  i2418.prewarm = !!i2419[2]
  i2418.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.startDelay)
  i2418.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.startLifetime)
  i2418.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[5], i2418.startSpeed)
  i2418.startSize3D = !!i2419[6]
  i2418.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[7], i2418.startSizeX)
  i2418.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[8], i2418.startSizeY)
  i2418.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[9], i2418.startSizeZ)
  i2418.startRotation3D = !!i2419[10]
  i2418.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[11], i2418.startRotationX)
  i2418.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[12], i2418.startRotationY)
  i2418.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[13], i2418.startRotationZ)
  i2418.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2419[14], i2418.startColor)
  i2418.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[15], i2418.gravityModifier)
  i2418.simulationSpace = i2419[16]
  request.r(i2419[17], i2419[18], 0, i2418, 'customSimulationSpace')
  i2418.simulationSpeed = i2419[19]
  i2418.useUnscaledTime = !!i2419[20]
  i2418.scalingMode = i2419[21]
  i2418.playOnAwake = !!i2419[22]
  i2418.maxParticles = i2419[23]
  i2418.emitterVelocityMode = i2419[24]
  i2418.stopAction = i2419[25]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2420 = root || new pc.MinMaxCurve()
  var i2421 = data
  i2420.mode = i2421[0]
  i2420.curveMin = new pc.AnimationCurve( { keys_flow: i2421[1] } )
  i2420.curveMax = new pc.AnimationCurve( { keys_flow: i2421[2] } )
  i2420.curveMultiplier = i2421[3]
  i2420.constantMin = i2421[4]
  i2420.constantMax = i2421[5]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2422 = root || new pc.MinMaxGradient()
  var i2423 = data
  i2422.mode = i2423[0]
  i2422.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2423[1], i2422.gradientMin)
  i2422.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2423[2], i2422.gradientMax)
  i2422.colorMin = new pc.Color(i2423[3], i2423[4], i2423[5], i2423[6])
  i2422.colorMax = new pc.Color(i2423[7], i2423[8], i2423[9], i2423[10])
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2425 = data
  i2424.mode = i2425[0]
  var i2427 = i2425[1]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2427[i + 0]) );
  }
  i2424.colorKeys = i2426
  var i2429 = i2425[2]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2429[i + 0]) );
  }
  i2424.alphaKeys = i2428
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemColorBySpeed()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2431[1], i2430.color)
  i2430.range = new pc.Vec2( i2431[2], i2431[3] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2435 = data
  i2434.color = new pc.Color(i2435[0], i2435[1], i2435[2], i2435[3])
  i2434.time = i2435[4]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2439 = data
  i2438.alpha = i2439[0]
  i2438.time = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemColorOverLifetime()
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2441[1], i2440.color)
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemEmitter()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[1], i2442.rateOverTime)
  i2442.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[2], i2442.rateOverDistance)
  var i2445 = i2443[3]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2445[i + 0]) );
  }
  i2442.bursts = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemBurst()
  var i2449 = data
  i2448.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[0], i2448.count)
  i2448.cycleCount = i2449[1]
  i2448.minCount = i2449[2]
  i2448.maxCount = i2449[3]
  i2448.repeatInterval = i2449[4]
  i2448.time = i2449[5]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemRotationBySpeed()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[1], i2450.x)
  i2450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.y)
  i2450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.z)
  i2450.separateAxes = !!i2451[4]
  i2450.range = new pc.Vec2( i2451[5], i2451[6] )
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[1], i2452.x)
  i2452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[2], i2452.y)
  i2452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[3], i2452.z)
  i2452.separateAxes = !!i2453[4]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemShape()
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.shapeType = i2455[1]
  i2454.randomDirectionAmount = i2455[2]
  i2454.sphericalDirectionAmount = i2455[3]
  i2454.randomPositionAmount = i2455[4]
  i2454.alignToDirection = !!i2455[5]
  i2454.radius = i2455[6]
  i2454.radiusMode = i2455[7]
  i2454.radiusSpread = i2455[8]
  i2454.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[9], i2454.radiusSpeed)
  i2454.radiusThickness = i2455[10]
  i2454.angle = i2455[11]
  i2454.length = i2455[12]
  i2454.boxThickness = new pc.Vec3( i2455[13], i2455[14], i2455[15] )
  i2454.meshShapeType = i2455[16]
  request.r(i2455[17], i2455[18], 0, i2454, 'mesh')
  request.r(i2455[19], i2455[20], 0, i2454, 'meshRenderer')
  request.r(i2455[21], i2455[22], 0, i2454, 'skinnedMeshRenderer')
  i2454.useMeshMaterialIndex = !!i2455[23]
  i2454.meshMaterialIndex = i2455[24]
  i2454.useMeshColors = !!i2455[25]
  i2454.normalOffset = i2455[26]
  i2454.arc = i2455[27]
  i2454.arcMode = i2455[28]
  i2454.arcSpread = i2455[29]
  i2454.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[30], i2454.arcSpeed)
  i2454.donutRadius = i2455[31]
  i2454.position = new pc.Vec3( i2455[32], i2455[33], i2455[34] )
  i2454.rotation = new pc.Vec3( i2455[35], i2455[36], i2455[37] )
  i2454.scale = new pc.Vec3( i2455[38], i2455[39], i2455[40] )
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2456 = root || new pc.ParticleSystemSizeBySpeed()
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[1], i2456.x)
  i2456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[2], i2456.y)
  i2456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[3], i2456.z)
  i2456.separateAxes = !!i2457[4]
  i2456.range = new pc.Vec2( i2457[5], i2457[6] )
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2458 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2459 = data
  i2458.enabled = !!i2459[0]
  i2458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[1], i2458.x)
  i2458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[2], i2458.y)
  i2458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[3], i2458.z)
  i2458.separateAxes = !!i2459[4]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2460 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.mode = i2461[1]
  i2460.animation = i2461[2]
  i2460.numTilesX = i2461[3]
  i2460.numTilesY = i2461[4]
  i2460.useRandomRow = !!i2461[5]
  i2460.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[6], i2460.frameOverTime)
  i2460.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[7], i2460.startFrame)
  i2460.cycleCount = i2461[8]
  i2460.rowIndex = i2461[9]
  i2460.flipU = i2461[10]
  i2460.flipV = i2461[11]
  i2460.spriteCount = i2461[12]
  var i2463 = i2461[13]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460.sprites = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2466 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2467 = data
  i2466.enabled = !!i2467[0]
  i2466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[1], i2466.x)
  i2466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[2], i2466.y)
  i2466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[3], i2466.z)
  i2466.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[4], i2466.radial)
  i2466.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[5], i2466.speedModifier)
  i2466.space = i2467[6]
  i2466.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[7], i2466.orbitalX)
  i2466.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[8], i2466.orbitalY)
  i2466.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[9], i2466.orbitalZ)
  i2466.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[10], i2466.orbitalOffsetX)
  i2466.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[11], i2466.orbitalOffsetY)
  i2466.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[12], i2466.orbitalOffsetZ)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2468 = root || new pc.ParticleSystemNoise()
  var i2469 = data
  i2468.enabled = !!i2469[0]
  i2468.separateAxes = !!i2469[1]
  i2468.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[2], i2468.strengthX)
  i2468.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[3], i2468.strengthY)
  i2468.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[4], i2468.strengthZ)
  i2468.frequency = i2469[5]
  i2468.damping = !!i2469[6]
  i2468.octaveCount = i2469[7]
  i2468.octaveMultiplier = i2469[8]
  i2468.octaveScale = i2469[9]
  i2468.quality = i2469[10]
  i2468.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[11], i2468.scrollSpeed)
  i2468.scrollSpeedMultiplier = i2469[12]
  i2468.remapEnabled = !!i2469[13]
  i2468.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[14], i2468.remapX)
  i2468.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[15], i2468.remapY)
  i2468.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[16], i2468.remapZ)
  i2468.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[17], i2468.positionAmount)
  i2468.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[18], i2468.rotationAmount)
  i2468.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[19], i2468.sizeAmount)
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2470 = root || new pc.ParticleSystemInheritVelocity()
  var i2471 = data
  i2470.enabled = !!i2471[0]
  i2470.mode = i2471[1]
  i2470.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[2], i2470.curve)
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2472 = root || new pc.ParticleSystemForceOverLifetime()
  var i2473 = data
  i2472.enabled = !!i2473[0]
  i2472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[1], i2472.x)
  i2472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[2], i2472.y)
  i2472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[3], i2472.z)
  i2472.space = i2473[4]
  i2472.randomized = !!i2473[5]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[1], i2474.limit)
  i2474.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[2], i2474.limitX)
  i2474.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[3], i2474.limitY)
  i2474.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[4], i2474.limitZ)
  i2474.dampen = i2475[5]
  i2474.separateAxes = !!i2475[6]
  i2474.space = i2475[7]
  i2474.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[8], i2474.drag)
  i2474.multiplyDragByParticleSize = !!i2475[9]
  i2474.multiplyDragByParticleVelocity = !!i2475[10]
  return i2474
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2476 = root || request.c( 'StarExploreFX' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'tf')
  return i2476
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i2478 = root || request.c( 'ProgressBar' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'fillTransform')
  request.r(i2479[2], i2479[3], 0, i2478, 'tf')
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2481 = data
  i2480.pivot = new pc.Vec2( i2481[0], i2481[1] )
  i2480.anchorMin = new pc.Vec2( i2481[2], i2481[3] )
  i2480.anchorMax = new pc.Vec2( i2481[4], i2481[5] )
  i2480.sizeDelta = new pc.Vec2( i2481[6], i2481[7] )
  i2480.anchoredPosition3D = new pc.Vec3( i2481[8], i2481[9], i2481[10] )
  i2480.rotation = new pc.Quat(i2481[11], i2481[12], i2481[13], i2481[14])
  i2480.scale = new pc.Vec3( i2481[15], i2481[16], i2481[17] )
  return i2480
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2482 = root || request.c( 'ClockTimer' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'fillImage')
  request.r(i2483[2], i2483[3], 0, i2482, 'tf')
  i2482.spawnZoomDuration = i2483[4]
  i2482.despawnZoomDuration = i2483[5]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2485 = data
  i2484.cullTransparentMesh = !!i2485[0]
  return i2484
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.UI.Image' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'm_Sprite')
  i2486.m_Type = i2487[2]
  i2486.m_PreserveAspect = !!i2487[3]
  i2486.m_FillCenter = !!i2487[4]
  i2486.m_FillMethod = i2487[5]
  i2486.m_FillAmount = i2487[6]
  i2486.m_FillClockwise = !!i2487[7]
  i2486.m_FillOrigin = i2487[8]
  i2486.m_UseSpriteMesh = !!i2487[9]
  i2486.m_PixelsPerUnitMultiplier = i2487[10]
  request.r(i2487[11], i2487[12], 0, i2486, 'm_Material')
  i2486.m_Maskable = !!i2487[13]
  i2486.m_Color = new pc.Color(i2487[14], i2487[15], i2487[16], i2487[17])
  i2486.m_RaycastTarget = !!i2487[18]
  i2486.m_RaycastPadding = new pc.Vec4( i2487[19], i2487[20], i2487[21], i2487[22] )
  return i2486
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i2488 = root || request.c( 'FlourSmoke' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'tf')
  return i2488
}

Deserializers["Duck"] = function (request, data, root) {
  var i2490 = root || request.c( 'Duck' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'tf')
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2493 = data
  i2492.name = i2493[0]
  i2492.halfPrecision = !!i2493[1]
  i2492.useSimplification = !!i2493[2]
  i2492.useUInt32IndexFormat = !!i2493[3]
  i2492.vertexCount = i2493[4]
  i2492.aabb = i2493[5]
  var i2495 = i2493[6]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( !!i2495[i + 0] );
  }
  i2492.streams = i2494
  i2492.vertices = i2493[7]
  var i2497 = i2493[8]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2497[i + 0]) );
  }
  i2492.subMeshes = i2496
  var i2499 = i2493[9]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 16) {
    i2498.push( new pc.Mat4().setData(i2499[i + 0], i2499[i + 1], i2499[i + 2], i2499[i + 3],  i2499[i + 4], i2499[i + 5], i2499[i + 6], i2499[i + 7],  i2499[i + 8], i2499[i + 9], i2499[i + 10], i2499[i + 11],  i2499[i + 12], i2499[i + 13], i2499[i + 14], i2499[i + 15]) );
  }
  i2492.bindposes = i2498
  var i2501 = i2493[10]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2501[i + 0]) );
  }
  i2492.blendShapes = i2500
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2507 = data
  i2506.triangles = i2507[0]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2513 = data
  i2512.name = i2513[0]
  var i2515 = i2513[1]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2515[i + 0]) );
  }
  i2512.frames = i2514
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.index = i2517[1]
  i2516.startup = !!i2517[2]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2519 = data
  i2518.planeDistance = i2519[0]
  i2518.referencePixelsPerUnit = i2519[1]
  i2518.isFallbackOverlay = !!i2519[2]
  i2518.renderMode = i2519[3]
  i2518.renderOrder = i2519[4]
  i2518.sortingLayerName = i2519[5]
  i2518.sortingOrder = i2519[6]
  i2518.scaleFactor = i2519[7]
  request.r(i2519[8], i2519[9], 0, i2518, 'worldCamera')
  i2518.overrideSorting = !!i2519[10]
  i2518.pixelPerfect = !!i2519[11]
  i2518.targetDisplay = i2519[12]
  i2518.overridePixelPerfect = !!i2519[13]
  i2518.enabled = !!i2519[14]
  return i2518
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2521 = data
  i2520.m_UiScaleMode = i2521[0]
  i2520.m_ReferencePixelsPerUnit = i2521[1]
  i2520.m_ScaleFactor = i2521[2]
  i2520.m_ReferenceResolution = new pc.Vec2( i2521[3], i2521[4] )
  i2520.m_ScreenMatchMode = i2521[5]
  i2520.m_MatchWidthOrHeight = i2521[6]
  i2520.m_PhysicalUnit = i2521[7]
  i2520.m_FallbackScreenDPI = i2521[8]
  i2520.m_DefaultSpriteDPI = i2521[9]
  i2520.m_DynamicPixelsPerUnit = i2521[10]
  i2520.m_PresetInfoIsWorld = !!i2521[11]
  return i2520
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2523 = data
  i2522.m_IgnoreReversedGraphics = !!i2523[0]
  i2522.m_BlockingObjects = i2523[1]
  i2522.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2523[2] )
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'animatorController')
  request.r(i2525[2], i2525[3], 0, i2524, 'avatar')
  i2524.updateMode = i2525[4]
  i2524.hasTransformHierarchy = !!i2525[5]
  i2524.applyRootMotion = !!i2525[6]
  var i2527 = i2525[7]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2524.humanBones = i2526
  i2524.enabled = !!i2525[8]
  return i2524
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2530 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2531 = data
  i2530.m_hasFontAssetChanged = !!i2531[0]
  request.r(i2531[1], i2531[2], 0, i2530, 'm_baseMaterial')
  i2530.m_maskOffset = new pc.Vec4( i2531[3], i2531[4], i2531[5], i2531[6] )
  i2530.m_text = i2531[7]
  i2530.m_isRightToLeft = !!i2531[8]
  request.r(i2531[9], i2531[10], 0, i2530, 'm_fontAsset')
  request.r(i2531[11], i2531[12], 0, i2530, 'm_sharedMaterial')
  var i2533 = i2531[13]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2530.m_fontSharedMaterials = i2532
  request.r(i2531[14], i2531[15], 0, i2530, 'm_fontMaterial')
  var i2535 = i2531[16]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2530.m_fontMaterials = i2534
  i2530.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2531[17], i2531[18], i2531[19], i2531[20])
  i2530.m_fontColor = new pc.Color(i2531[21], i2531[22], i2531[23], i2531[24])
  i2530.m_enableVertexGradient = !!i2531[25]
  i2530.m_colorMode = i2531[26]
  i2530.m_fontColorGradient = request.d('TMPro.VertexGradient', i2531[27], i2530.m_fontColorGradient)
  request.r(i2531[28], i2531[29], 0, i2530, 'm_fontColorGradientPreset')
  request.r(i2531[30], i2531[31], 0, i2530, 'm_spriteAsset')
  i2530.m_tintAllSprites = !!i2531[32]
  request.r(i2531[33], i2531[34], 0, i2530, 'm_StyleSheet')
  i2530.m_TextStyleHashCode = i2531[35]
  i2530.m_overrideHtmlColors = !!i2531[36]
  i2530.m_faceColor = UnityEngine.Color32.ConstructColor(i2531[37], i2531[38], i2531[39], i2531[40])
  i2530.m_fontSize = i2531[41]
  i2530.m_fontSizeBase = i2531[42]
  i2530.m_fontWeight = i2531[43]
  i2530.m_enableAutoSizing = !!i2531[44]
  i2530.m_fontSizeMin = i2531[45]
  i2530.m_fontSizeMax = i2531[46]
  i2530.m_fontStyle = i2531[47]
  i2530.m_HorizontalAlignment = i2531[48]
  i2530.m_VerticalAlignment = i2531[49]
  i2530.m_textAlignment = i2531[50]
  i2530.m_characterSpacing = i2531[51]
  i2530.m_wordSpacing = i2531[52]
  i2530.m_lineSpacing = i2531[53]
  i2530.m_lineSpacingMax = i2531[54]
  i2530.m_paragraphSpacing = i2531[55]
  i2530.m_charWidthMaxAdj = i2531[56]
  i2530.m_TextWrappingMode = i2531[57]
  i2530.m_wordWrappingRatios = i2531[58]
  i2530.m_overflowMode = i2531[59]
  request.r(i2531[60], i2531[61], 0, i2530, 'm_linkedTextComponent')
  request.r(i2531[62], i2531[63], 0, i2530, 'parentLinkedComponent')
  i2530.m_enableKerning = !!i2531[64]
  var i2537 = i2531[65]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(i2537[i + 0]);
  }
  i2530.m_ActiveFontFeatures = i2536
  i2530.m_enableExtraPadding = !!i2531[66]
  i2530.checkPaddingRequired = !!i2531[67]
  i2530.m_isRichText = !!i2531[68]
  i2530.m_parseCtrlCharacters = !!i2531[69]
  i2530.m_isOrthographic = !!i2531[70]
  i2530.m_isCullingEnabled = !!i2531[71]
  i2530.m_horizontalMapping = i2531[72]
  i2530.m_verticalMapping = i2531[73]
  i2530.m_uvLineOffset = i2531[74]
  i2530.m_geometrySortingOrder = i2531[75]
  i2530.m_IsTextObjectScaleStatic = !!i2531[76]
  i2530.m_VertexBufferAutoSizeReduction = !!i2531[77]
  i2530.m_useMaxVisibleDescender = !!i2531[78]
  i2530.m_pageToDisplay = i2531[79]
  i2530.m_margin = new pc.Vec4( i2531[80], i2531[81], i2531[82], i2531[83] )
  i2530.m_isUsingLegacyAnimationComponent = !!i2531[84]
  i2530.m_isVolumetricText = !!i2531[85]
  request.r(i2531[86], i2531[87], 0, i2530, 'm_Material')
  i2530.m_EmojiFallbackSupport = !!i2531[88]
  i2530.m_Maskable = !!i2531[89]
  i2530.m_Color = new pc.Color(i2531[90], i2531[91], i2531[92], i2531[93])
  i2530.m_RaycastTarget = !!i2531[94]
  i2530.m_RaycastPadding = new pc.Vec4( i2531[95], i2531[96], i2531[97], i2531[98] )
  return i2530
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.VertexGradient' )
  var i2539 = data
  i2538.topLeft = new pc.Color(i2539[0], i2539[1], i2539[2], i2539[3])
  i2538.topRight = new pc.Color(i2539[4], i2539[5], i2539[6], i2539[7])
  i2538.bottomLeft = new pc.Color(i2539[8], i2539[9], i2539[10], i2539[11])
  i2538.bottomRight = new pc.Color(i2539[12], i2539[13], i2539[14], i2539[15])
  return i2538
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.UI.Button' )
  var i2543 = data
  i2542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2543[0], i2542.m_OnClick)
  i2542.m_Navigation = request.d('UnityEngine.UI.Navigation', i2543[1], i2542.m_Navigation)
  i2542.m_Transition = i2543[2]
  i2542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2543[3], i2542.m_Colors)
  i2542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2543[4], i2542.m_SpriteState)
  i2542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2543[5], i2542.m_AnimationTriggers)
  i2542.m_Interactable = !!i2543[6]
  request.r(i2543[7], i2543[8], 0, i2542, 'm_TargetGraphic')
  return i2542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2545 = data
  i2544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2545[0], i2544.m_PersistentCalls)
  return i2544
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('UnityEngine.Events.PersistentCall', i2549[i + 0]));
  }
  i2546.m_Calls = i2548
  return i2546
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'm_Target')
  i2552.m_TargetAssemblyTypeName = i2553[2]
  i2552.m_MethodName = i2553[3]
  i2552.m_Mode = i2553[4]
  i2552.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2553[5], i2552.m_Arguments)
  i2552.m_CallState = i2553[6]
  return i2552
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'm_ObjectArgument')
  i2554.m_ObjectArgumentAssemblyTypeName = i2555[2]
  i2554.m_IntArgument = i2555[3]
  i2554.m_FloatArgument = i2555[4]
  i2554.m_StringArgument = i2555[5]
  i2554.m_BoolArgument = !!i2555[6]
  return i2554
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2557 = data
  i2556.m_Mode = i2557[0]
  i2556.m_WrapAround = !!i2557[1]
  request.r(i2557[2], i2557[3], 0, i2556, 'm_SelectOnUp')
  request.r(i2557[4], i2557[5], 0, i2556, 'm_SelectOnDown')
  request.r(i2557[6], i2557[7], 0, i2556, 'm_SelectOnLeft')
  request.r(i2557[8], i2557[9], 0, i2556, 'm_SelectOnRight')
  return i2556
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2559 = data
  i2558.m_NormalColor = new pc.Color(i2559[0], i2559[1], i2559[2], i2559[3])
  i2558.m_HighlightedColor = new pc.Color(i2559[4], i2559[5], i2559[6], i2559[7])
  i2558.m_PressedColor = new pc.Color(i2559[8], i2559[9], i2559[10], i2559[11])
  i2558.m_SelectedColor = new pc.Color(i2559[12], i2559[13], i2559[14], i2559[15])
  i2558.m_DisabledColor = new pc.Color(i2559[16], i2559[17], i2559[18], i2559[19])
  i2558.m_ColorMultiplier = i2559[20]
  i2558.m_FadeDuration = i2559[21]
  return i2558
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'm_HighlightedSprite')
  request.r(i2561[2], i2561[3], 0, i2560, 'm_PressedSprite')
  request.r(i2561[4], i2561[5], 0, i2560, 'm_SelectedSprite')
  request.r(i2561[6], i2561[7], 0, i2560, 'm_DisabledSprite')
  return i2560
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2563 = data
  i2562.m_NormalTrigger = i2563[0]
  i2562.m_HighlightedTrigger = i2563[1]
  i2562.m_PressedTrigger = i2563[2]
  i2562.m_SelectedTrigger = i2563[3]
  i2562.m_DisabledTrigger = i2563[4]
  return i2562
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2564 = root || request.c( 'Ply_Pool' )
  var i2565 = data
  var i2567 = i2565[0]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Ply_Pool+PoolAmount', i2567[i + 0]) );
  }
  i2564.poolAmounts = i2566
  request.r(i2565[1], i2565[2], 0, i2564, 'poolHolder')
  return i2564
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2570 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2571 = data
  i2570.type = i2571[0]
  i2570.amount = i2571[1]
  request.r(i2571[2], i2571[3], 0, i2570, 'gameUnit')
  return i2570
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2572 = root || request.c( 'Ply_SoundManager' )
  var i2573 = data
  var i2575 = i2573[0]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Ply_SoundManager+FxAudio', i2575[i + 0]) );
  }
  i2572.fxAudios = i2574
  var i2577 = i2573[1]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 2, i2576, '')
  }
  i2572.audioClips = i2576
  request.r(i2573[2], i2573[3], 0, i2572, 'sound')
  return i2572
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2580 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2581 = data
  i2580.fxType = i2581[0]
  request.r(i2581[1], i2581[2], 0, i2580, 'audioClip')
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'clip')
  request.r(i2585[2], i2585[3], 0, i2584, 'outputAudioMixerGroup')
  i2584.playOnAwake = !!i2585[4]
  i2584.loop = !!i2585[5]
  i2584.time = i2585[6]
  i2584.volume = i2585[7]
  i2584.pitch = i2585[8]
  i2584.enabled = !!i2585[9]
  return i2584
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2586 = root || request.c( 'GameManager' )
  var i2587 = data
  i2586.isPlaying = !!i2587[0]
  i2586.isTutorial = !!i2587[1]
  i2586.isGotoStore = !!i2587[2]
  i2586.isLoseGame = !!i2587[3]
  i2586.countMove = i2587[4]
  i2586.currentLayer = i2587[5]
  return i2586
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2588 = root || request.c( 'UIManager' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'winUI')
  request.r(i2589[2], i2589[3], 0, i2588, 'loseUI')
  request.r(i2589[4], i2589[5], 0, i2588, 'tutorial')
  request.r(i2589[6], i2589[7], 0, i2588, 'verticalUI')
  request.r(i2589[8], i2589[9], 0, i2588, 'horizontalUI')
  request.r(i2589[10], i2589[11], 0, i2588, 'downloadBtn')
  request.r(i2589[12], i2589[13], 0, i2588, 'horizontalDownloadBtn')
  i2588.isGoogleBuild = !!i2589[14]
  i2588.screenWidth = i2589[15]
  i2588.screenHeight = i2589[16]
  i2588.scaleHeightOnWidth = i2589[17]
  i2588.isVertical = !!i2589[18]
  i2588.isScreenVertical = !!i2589[19]
  request.r(i2589[20], i2589[21], 0, i2588, 'cam')
  i2588.verticalUIHeightOnWidthRatio = i2589[22]
  i2588.scaleCameraOnValidate = !!i2589[23]
  i2588.screenVerticalHeightOnWidthRatio = i2589[24]
  i2588.useContinuousScaling = !!i2589[25]
  i2588.baseOrthographicSize = i2589[26]
  i2588.baseAspect = i2589[27]
  i2588.landscapeSizeRatio = i2589[28]
  i2588.defaultPortraitSizeRatio = i2589[29]
  var i2591 = i2589[30]
  var i2590 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.add(request.d('ScreenScaleStep', i2591[i + 0]));
  }
  i2588.discreteScaleSteps = i2590
  i2588.usePerspectiveCamera = !!i2589[31]
  request.r(i2589[32], i2589[33], 0, i2588, 'perspectiveFocus')
  i2588.perspectiveFocusDistance = i2589[34]
  i2588.perspectivePadding = i2589[35]
  i2588.fitRendererBounds = !!i2589[36]
  request.r(i2589[37], i2589[38], 0, i2588, 'boundsRoot')
  var i2593 = i2589[39]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 1, i2592, '')
  }
  i2588.boundsRenderers = i2592
  return i2588
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2596 = root || request.c( 'ScreenScaleStep' )
  var i2597 = data
  i2596.heightOnWidthRatio = i2597[0]
  i2596.orthographicSize = i2597[1]
  return i2596
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2600 = root || request.c( 'InputManager' )
  var i2601 = data
  i2600.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2601[0] )
  i2600.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2601[1] )
  i2600.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2601[2] )
  i2600.isDragging = !!i2601[3]
  return i2600
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2602 = root || request.c( 'PhaseManager' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('PhaseData', i2605[i + 0]));
  }
  i2602.phases = i2604
  i2602.delayBeforeNextPhase = i2603[1]
  i2602.transitionMoveDuration = i2603[2]
  i2602.backgroundFadeInDuration = i2603[3]
  i2602.backgroundFadeOutDuration = i2603[4]
  i2602.transitionMoveEase = i2603[5]
  i2602.backgroundFadeEase = i2603[6]
  request.r(i2603[7], i2603[8], 0, i2602, 'transitionObject')
  request.r(i2603[9], i2603[10], 0, i2602, 'transitionStartPos')
  request.r(i2603[11], i2603[12], 0, i2602, 'transitionEndPos')
  request.r(i2603[13], i2603[14], 0, i2602, 'transitionBackground')
  i2602.currentPhaseIndex = i2603[15]
  i2602.currentStepCount = i2603[16]
  return i2602
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2608 = root || request.c( 'PhaseData' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'phaseObject')
  i2608.totalSteps = i2609[2]
  i2608.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2609[3], i2608.onPhaseReady)
  return i2608
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2611 = data
  i2610.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2611[0], i2610.m_PersistentCalls)
  return i2610
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2612 = root || request.c( 'HandTutManager' )
  var i2613 = data
  var i2615 = i2613[0]
  var i2614 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2615.length; i += 2) {
  request.r(i2615[i + 0], i2615[i + 1], 1, i2614, '')
  }
  i2612.items = i2614
  request.r(i2613[1], i2613[2], 0, i2612, 'knife')
  request.r(i2613[3], i2613[4], 0, i2612, 'handTutObject')
  request.r(i2613[5], i2613[6], 0, i2612, 'tapToCookObject')
  request.r(i2613[7], i2613[8], 0, i2612, 'oilItem')
  request.r(i2613[9], i2613[10], 0, i2612, 'stoveToggleEvent')
  i2612.idleDelay = i2613[11]
  i2612.moveDuration = i2613[12]
  i2612.dragFadeDuration = i2613[13]
  i2612.clickScaleDuration = i2613[14]
  i2612.waitAtEndDuration = i2613[15]
  i2612.stirLoopDuration = i2613[16]
  i2612.handZPosition = i2613[17]
  i2612.clickScaleMultiplier = i2613[18]
  i2612.moveEase = i2613[19]
  return i2612
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2618 = root || request.c( 'SortChildByZPos' )
  var i2619 = data
  request.r(i2619[0], i2619[1], 0, i2618, 'transformToSort')
  var i2621 = i2619[2]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2618.childrenToSort = i2620
  i2618.zOffset = i2619[3]
  i2618.baseZ = i2619[4]
  return i2618
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i2624 = root || request.c( 'DuckManager' )
  var i2625 = data
  var i2627 = i2625[0]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 2, i2626, '')
  }
  i2624.leftPoints = i2626
  var i2629 = i2625[1]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 2) {
  request.r(i2629[i + 0], i2629[i + 1], 2, i2628, '')
  }
  i2624.rightPoints = i2628
  i2624.minSpawnInterval = i2625[2]
  i2624.maxSpawnInterval = i2625[3]
  i2624.moveSpeed = i2625[4]
  i2624.duckSoundChance = i2625[5]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2631 = data
  i2630.aspect = i2631[0]
  i2630.orthographic = !!i2631[1]
  i2630.orthographicSize = i2631[2]
  i2630.backgroundColor = new pc.Color(i2631[3], i2631[4], i2631[5], i2631[6])
  i2630.nearClipPlane = i2631[7]
  i2630.farClipPlane = i2631[8]
  i2630.fieldOfView = i2631[9]
  i2630.depth = i2631[10]
  i2630.clearFlags = i2631[11]
  i2630.cullingMask = i2631[12]
  i2630.rect = i2631[13]
  request.r(i2631[14], i2631[15], 0, i2630, 'targetTexture')
  i2630.usePhysicalProperties = !!i2631[16]
  i2630.focalLength = i2631[17]
  i2630.sensorSize = new pc.Vec2( i2631[18], i2631[19] )
  i2630.lensShift = new pc.Vec2( i2631[20], i2631[21] )
  i2630.gateFit = i2631[22]
  i2630.commandBufferCount = i2631[23]
  i2630.cameraType = i2631[24]
  i2630.enabled = !!i2631[25]
  return i2630
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'm_FirstSelected')
  i2632.m_sendNavigationEvents = !!i2633[2]
  i2632.m_DragThreshold = i2633[3]
  return i2632
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2635 = data
  i2634.m_HorizontalAxis = i2635[0]
  i2634.m_VerticalAxis = i2635[1]
  i2634.m_SubmitButton = i2635[2]
  i2634.m_CancelButton = i2635[3]
  i2634.m_InputActionsPerSecond = i2635[4]
  i2634.m_RepeatDelay = i2635[5]
  i2634.m_ForceModuleActive = !!i2635[6]
  i2634.m_SendPointerHoverToParent = !!i2635[7]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2637 = data
  i2636.center = new pc.Vec3( i2637[0], i2637[1], i2637[2] )
  i2636.radius = i2637[3]
  i2636.enabled = !!i2637[4]
  i2636.isTrigger = !!i2637[5]
  request.r(i2637[6], i2637[7], 0, i2636, 'material')
  return i2636
}

Deserializers["Item"] = function (request, data, root) {
  var i2638 = root || request.c( 'Item' )
  var i2639 = data
  i2638.isDone = !!i2639[0]
  i2638.onProcess = !!i2639[1]
  request.r(i2639[2], i2639[3], 0, i2638, 'itemDraggable')
  request.r(i2639[4], i2639[5], 0, i2638, 'itemClickable')
  request.r(i2639[6], i2639[7], 0, i2638, 'itemStirring')
  request.r(i2639[8], i2639[9], 0, i2638, 'itemKnifeSpriteMaskCutter')
  request.r(i2639[10], i2639[11], 0, i2638, 'itemSpriteMaskPainter')
  request.r(i2639[12], i2639[13], 0, i2638, 'itemMoveToTarget')
  request.r(i2639[14], i2639[15], 0, i2638, 'animator')
  i2638.itemType = i2639[16]
  request.r(i2639[17], i2639[18], 0, i2638, 'spriteRenderer')
  i2638.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2639[19], i2638.onKnifeIn)
  i2638.heartEffectScale = i2639[20]
  i2638.playMoveToTargetFinishSound = !!i2639[21]
  i2638.moveToTargetFinishFxType = i2639[22]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, 'sharedMesh')
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'additionalVertexStreams')
  i2642.enabled = !!i2643[2]
  request.r(i2643[3], i2643[4], 0, i2642, 'sharedMaterial')
  var i2645 = i2643[5]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 2, i2644, '')
  }
  i2642.sharedMaterials = i2644
  i2642.receiveShadows = !!i2643[6]
  i2642.shadowCastingMode = i2643[7]
  i2642.sortingLayerID = i2643[8]
  i2642.sortingOrder = i2643[9]
  i2642.lightmapIndex = i2643[10]
  i2642.lightmapSceneIndex = i2643[11]
  i2642.lightmapScaleOffset = new pc.Vec4( i2643[12], i2643[13], i2643[14], i2643[15] )
  i2642.lightProbeUsage = i2643[16]
  i2642.reflectionProbeUsage = i2643[17]
  return i2642
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2646 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2647 = data
  i2646.loop = !!i2647[0]
  i2646.timeScale = i2647[1]
  request.r(i2647[2], i2647[3], 0, i2646, 'skeletonDataAsset')
  i2646.initialSkinName = i2647[4]
  i2646.fixPrefabOverrideViaMeshFilter = i2647[5]
  i2646.initialFlipX = !!i2647[6]
  i2646.initialFlipY = !!i2647[7]
  i2646.updateWhenInvisible = i2647[8]
  i2646.zSpacing = i2647[9]
  i2646.useClipping = !!i2647[10]
  i2646.immutableTriangles = !!i2647[11]
  i2646.pmaVertexColors = !!i2647[12]
  i2646.clearStateOnDisable = !!i2647[13]
  i2646.tintBlack = !!i2647[14]
  i2646.singleSubmesh = !!i2647[15]
  i2646.fixDrawOrder = !!i2647[16]
  i2646.addNormals = !!i2647[17]
  i2646.calculateTangents = !!i2647[18]
  i2646.maskInteraction = i2647[19]
  i2646.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2647[20], i2646.maskMaterials)
  i2646.disableRenderingOnOverride = !!i2647[21]
  i2646._animationName = i2647[22]
  var i2649 = i2647[23]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2646.separatorSlotNames = i2648
  return i2646
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2650 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 2, i2652, '')
  }
  i2650.materialsMaskDisabled = i2652
  var i2655 = i2651[1]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 2, i2654, '')
  }
  i2650.materialsInsideMask = i2654
  var i2657 = i2651[2]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2650.materialsOutsideMask = i2656
  return i2650
}

Deserializers["ContinuousRotation"] = function (request, data, root) {
  var i2660 = root || request.c( 'ContinuousRotation' )
  var i2661 = data
  i2660.rotationAxis = new pc.Vec3( i2661[0], i2661[1], i2661[2] )
  i2660.degreesPerSecond = i2661[3]
  i2660.rotationSpace = i2661[4]
  i2660.useUnscaledTime = !!i2661[5]
  return i2660
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i2662 = root || request.c( 'Ply_ToggleEvent' )
  var i2663 = data
  i2662.isOn = !!i2663[0]
  i2662.applyStateOnEnable = !!i2663[1]
  i2662.applyStateOnClick = !!i2663[2]
  request.r(i2663[3], i2663[4], 0, i2662, 'targetObject')
  i2662.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i2663[5], i2662.onTurnOn)
  i2662.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i2663[6], i2662.onTurnOff)
  return i2662
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2664 = root || request.c( 'ItemDraggable' )
  var i2665 = data
  i2664.isDraggable = !!i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'returnTransform')
  i2664.setParentToReturnTransform = !!i2665[3]
  i2664.returnToExactReturnTransformPosition = !!i2665[4]
  i2664.targetItemType = i2665[5]
  request.r(i2665[6], i2665[7], 0, i2664, 'item')
  i2664.checkState = !!i2665[8]
  request.r(i2665[9], i2665[10], 0, i2664, 'shadowObject')
  i2664.playReturnToStartFinishSound = !!i2665[11]
  i2664.returnToStartFinishFxType = i2665[12]
  i2664.spawnBreakHeartOnDropFail = !!i2665[13]
  i2664.liftOffset = i2665[14]
  i2664.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2665[15], i2664.onBeginDrag)
  i2664.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2665[16], i2664.onDropSuccess)
  i2664.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2665[17], i2664.onDropFail)
  return i2664
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2666 = root || request.c( 'ItemMoveToTarget' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'defaultTarget')
  i2666.duration = i2667[2]
  i2666.easeType = i2667[3]
  i2666.moveType = i2667[4]
  i2666.jumpPower = i2667[5]
  i2666.numJumps = i2667[6]
  i2666.rotate360DuringJump = !!i2667[7]
  i2666.setParentToTarget = !!i2667[8]
  i2666.onComplete = request.d('UnityEngine.Events.UnityEvent', i2667[9], i2666.onComplete)
  i2666.lockInputWhileMoving = !!i2667[10]
  i2666.resetParentBeforeMove = !!i2667[11]
  return i2666
}

Deserializers["Salt"] = function (request, data, root) {
  var i2668 = root || request.c( 'Salt' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'fishFillet')
  i2668.isDone = !!i2669[2]
  i2668.onProcess = !!i2669[3]
  request.r(i2669[4], i2669[5], 0, i2668, 'itemDraggable')
  request.r(i2669[6], i2669[7], 0, i2668, 'itemClickable')
  request.r(i2669[8], i2669[9], 0, i2668, 'itemStirring')
  request.r(i2669[10], i2669[11], 0, i2668, 'itemKnifeSpriteMaskCutter')
  request.r(i2669[12], i2669[13], 0, i2668, 'itemSpriteMaskPainter')
  request.r(i2669[14], i2669[15], 0, i2668, 'itemMoveToTarget')
  request.r(i2669[16], i2669[17], 0, i2668, 'animator')
  i2668.itemType = i2669[18]
  request.r(i2669[19], i2669[20], 0, i2668, 'spriteRenderer')
  i2668.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2669[21], i2668.onKnifeIn)
  i2668.heartEffectScale = i2669[22]
  i2668.playMoveToTargetFinishSound = !!i2669[23]
  i2668.moveToTargetFinishFxType = i2669[24]
  return i2668
}

Deserializers["EggBowl"] = function (request, data, root) {
  var i2670 = root || request.c( 'EggBowl' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'spoon')
  request.r(i2671[2], i2671[3], 0, i2670, 'fishFillet')
  request.r(i2671[4], i2671[5], 0, i2670, 'fishDropParticle')
  i2670.fishDropParticleDuration = i2671[6]
  i2670.isDone = !!i2671[7]
  i2670.onProcess = !!i2671[8]
  request.r(i2671[9], i2671[10], 0, i2670, 'itemDraggable')
  request.r(i2671[11], i2671[12], 0, i2670, 'itemClickable')
  request.r(i2671[13], i2671[14], 0, i2670, 'itemStirring')
  request.r(i2671[15], i2671[16], 0, i2670, 'itemKnifeSpriteMaskCutter')
  request.r(i2671[17], i2671[18], 0, i2670, 'itemSpriteMaskPainter')
  request.r(i2671[19], i2671[20], 0, i2670, 'itemMoveToTarget')
  request.r(i2671[21], i2671[22], 0, i2670, 'animator')
  i2670.itemType = i2671[23]
  request.r(i2671[24], i2671[25], 0, i2670, 'spriteRenderer')
  i2670.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2671[26], i2670.onKnifeIn)
  i2670.heartEffectScale = i2671[27]
  i2670.playMoveToTargetFinishSound = !!i2671[28]
  i2670.moveToTargetFinishFxType = i2671[29]
  return i2670
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i2672 = root || request.c( 'ItemStirring' )
  var i2673 = data
  i2672.stirRadius = i2673[0]
  request.r(i2673[1], i2673[2], 0, i2672, 'stirrerTransform')
  request.r(i2673[3], i2673[4], 0, i2672, 'centerPoint')
  request.r(i2673[5], i2673[6], 0, i2672, 'targetAnimator')
  i2672.targetStateName = i2673[7]
  i2672.targetLayer = i2673[8]
  i2672.stoppedSpeed = i2673[9]
  i2672.minDragDistanceToAnimate = i2673[10]
  i2672.dragSpeedMultiplier = i2673[11]
  i2672.minAnimatorSpeed = i2673[12]
  i2672.maxAnimatorSpeed = i2673[13]
  i2672.speedBlendDuration = i2673[14]
  i2672.completeNormalizedTime = i2673[15]
  i2672.resetAnimationOnFirstBegin = !!i2673[16]
  var i2675 = i2673[17]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('StirMilestone', i2675[i + 0]));
  }
  i2672.milestones = i2674
  i2672.spawnProgressBarOnStir = !!i2673[18]
  request.r(i2673[19], i2673[20], 0, i2672, 'spawnProgressBarPoint')
  i2672.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i2673[21], i2672.onStirBegin)
  i2672.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i2673[22], i2672.onStirComplete)
  return i2672
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i2678 = root || request.c( 'StirMilestone' )
  var i2679 = data
  i2678.distanceThreshold = i2679[0]
  i2678.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i2679[1], i2678.onMilestoneReached)
  i2678.isReached = !!i2679[2]
  return i2678
}

Deserializers["Pan"] = function (request, data, root) {
  var i2680 = root || request.c( 'Pan' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'fryingFX')
  request.r(i2681[2], i2681[3], 0, i2680, 'oilObject')
  i2680.cakeFryDuration = i2681[4]
  i2680.isOilIn = !!i2681[5]
  i2680.isTurnOnStove = !!i2681[6]
  i2680.stoveShakeDelay = i2681[7]
  i2680.stoveShakeDuration = i2681[8]
  i2680.stoveShakeStrength = i2681[9]
  i2680.stoveShakeVibrato = i2681[10]
  i2680.isDone = !!i2681[11]
  i2680.onProcess = !!i2681[12]
  request.r(i2681[13], i2681[14], 0, i2680, 'itemDraggable')
  request.r(i2681[15], i2681[16], 0, i2680, 'itemClickable')
  request.r(i2681[17], i2681[18], 0, i2680, 'itemStirring')
  request.r(i2681[19], i2681[20], 0, i2680, 'itemKnifeSpriteMaskCutter')
  request.r(i2681[21], i2681[22], 0, i2680, 'itemSpriteMaskPainter')
  request.r(i2681[23], i2681[24], 0, i2680, 'itemMoveToTarget')
  request.r(i2681[25], i2681[26], 0, i2680, 'animator')
  i2680.itemType = i2681[27]
  request.r(i2681[28], i2681[29], 0, i2680, 'spriteRenderer')
  i2680.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2681[30], i2680.onKnifeIn)
  i2680.heartEffectScale = i2681[31]
  i2680.playMoveToTargetFinishSound = !!i2681[32]
  i2680.moveToTargetFinishFxType = i2681[33]
  return i2680
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2682 = root || request.c( 'ItemClickable' )
  var i2683 = data
  i2682.requiredClicks = i2683[0]
  i2682.infiniteClick = !!i2683[1]
  i2682.canClick = !!i2683[2]
  i2682.disableAfterClick = !!i2683[3]
  i2682.onClick = request.d('UnityEngine.Events.UnityEvent', i2683[4], i2682.onClick)
  var i2685 = i2683[5]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('UnityEngine.Events.UnityEvent', i2685[i + 0]));
  }
  i2682.sequentialOnClicks = i2684
  i2682.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2683[6], i2682.onClickComplete)
  return i2682
}

Deserializers["Tray"] = function (request, data, root) {
  var i2688 = root || request.c( 'Tray' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'fishFillet')
  i2688.isDone = !!i2689[2]
  i2688.onProcess = !!i2689[3]
  request.r(i2689[4], i2689[5], 0, i2688, 'itemDraggable')
  request.r(i2689[6], i2689[7], 0, i2688, 'itemClickable')
  request.r(i2689[8], i2689[9], 0, i2688, 'itemStirring')
  request.r(i2689[10], i2689[11], 0, i2688, 'itemKnifeSpriteMaskCutter')
  request.r(i2689[12], i2689[13], 0, i2688, 'itemSpriteMaskPainter')
  request.r(i2689[14], i2689[15], 0, i2688, 'itemMoveToTarget')
  request.r(i2689[16], i2689[17], 0, i2688, 'animator')
  i2688.itemType = i2689[18]
  request.r(i2689[19], i2689[20], 0, i2688, 'spriteRenderer')
  i2688.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2689[21], i2688.onKnifeIn)
  i2688.heartEffectScale = i2689[22]
  i2688.playMoveToTargetFinishSound = !!i2689[23]
  i2688.moveToTargetFinishFxType = i2689[24]
  return i2688
}

Deserializers["FishFillet"] = function (request, data, root) {
  var i2690 = root || request.c( 'FishFillet' )
  var i2691 = data
  i2690.currentStep = i2691[0]
  var i2693 = i2691[1]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2690.moveTargets = i2692
  i2690.isSaltIn = !!i2691[2]
  i2690.isEggReady = !!i2691[3]
  request.r(i2691[4], i2691[5], 0, i2690, 'fishObject')
  var i2695 = i2691[6]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2690.spriteRenderers = i2694
  var i2697 = i2691[7]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 2) {
  request.r(i2697[i + 0], i2697[i + 1], 2, i2696, '')
  }
  i2690.fishDoneRenderers = i2696
  request.r(i2691[8], i2691[9], 0, i2690, 'eggFish')
  request.r(i2691[10], i2691[11], 0, i2690, 'flourFish')
  request.r(i2691[12], i2691[13], 0, i2690, 'salt')
  request.r(i2691[14], i2691[15], 0, i2690, 'plate')
  request.r(i2691[16], i2691[17], 0, i2690, 'eggBowl')
  request.r(i2691[18], i2691[19], 0, i2690, 'flourBowl')
  request.r(i2691[20], i2691[21], 0, i2690, 'clockTimerPrefab')
  request.r(i2691[22], i2691[23], 0, i2690, 'clockSpawnPoint')
  i2690.cookDuration = i2691[24]
  i2690.readyZ = i2691[25]
  request.r(i2691[26], i2691[27], 0, i2690, 'pan')
  request.r(i2691[28], i2691[29], 0, i2690, 'spawnClockOnPan')
  i2690.panCookDuration = i2691[30]
  i2690.bobUseLocalMove = !!i2691[31]
  i2690.bobOffset = new pc.Vec3( i2691[32], i2691[33], i2691[34] )
  i2690.bobDuration = i2691[35]
  i2690.bobEase = i2691[36]
  i2690.returnDuration = i2691[37]
  i2690.returnEase = i2691[38]
  i2690.targetPunchScale = new pc.Vec3( i2691[39], i2691[40], i2691[41] )
  i2690.targetPunchDuration = i2691[42]
  i2690.targetPunchVibrato = i2691[43]
  i2690.targetPunchElasticity = i2691[44]
  i2690.flourJumpPower = i2691[45]
  i2690.flourJumpDuration = i2691[46]
  i2690.flourJumpOffsets = i2691[47]
  i2690.isDone = !!i2691[48]
  i2690.onProcess = !!i2691[49]
  request.r(i2691[50], i2691[51], 0, i2690, 'itemDraggable')
  request.r(i2691[52], i2691[53], 0, i2690, 'itemClickable')
  request.r(i2691[54], i2691[55], 0, i2690, 'itemStirring')
  request.r(i2691[56], i2691[57], 0, i2690, 'itemKnifeSpriteMaskCutter')
  request.r(i2691[58], i2691[59], 0, i2690, 'itemSpriteMaskPainter')
  request.r(i2691[60], i2691[61], 0, i2690, 'itemMoveToTarget')
  request.r(i2691[62], i2691[63], 0, i2690, 'animator')
  i2690.itemType = i2691[64]
  request.r(i2691[65], i2691[66], 0, i2690, 'spriteRenderer')
  i2690.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2691[67], i2690.onKnifeIn)
  i2690.heartEffectScale = i2691[68]
  i2690.playMoveToTargetFinishSound = !!i2691[69]
  i2690.moveToTargetFinishFxType = i2691[70]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2701 = data
  i2700.frontSortingLayerID = i2701[0]
  i2700.frontSortingOrder = i2701[1]
  i2700.backSortingLayerID = i2701[2]
  i2700.backSortingOrder = i2701[3]
  i2700.alphaCutoff = i2701[4]
  request.r(i2701[5], i2701[6], 0, i2700, 'sprite')
  i2700.tileMode = i2701[7]
  i2700.isCustomRangeActive = !!i2701[8]
  i2700.spriteSortPoint = i2701[9]
  i2700.enabled = !!i2701[10]
  request.r(i2701[11], i2701[12], 0, i2700, 'sharedMaterial')
  var i2703 = i2701[13]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 2) {
  request.r(i2703[i + 0], i2703[i + 1], 2, i2702, '')
  }
  i2700.sharedMaterials = i2702
  i2700.receiveShadows = !!i2701[14]
  i2700.shadowCastingMode = i2701[15]
  i2700.sortingLayerID = i2701[16]
  i2700.sortingOrder = i2701[17]
  i2700.lightmapIndex = i2701[18]
  i2700.lightmapSceneIndex = i2701[19]
  i2700.lightmapScaleOffset = new pc.Vec4( i2701[20], i2701[21], i2701[22], i2701[23] )
  i2700.lightProbeUsage = i2701[24]
  i2700.reflectionProbeUsage = i2701[25]
  return i2700
}

Deserializers["Tongs"] = function (request, data, root) {
  var i2704 = root || request.c( 'Tongs' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'fishFillet')
  request.r(i2705[2], i2705[3], 0, i2704, 'fishPoint')
  i2704.catchDuration = i2705[4]
  i2704.raycastDistance = i2705[5]
  i2704.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2705[6] )
  i2704.isDone = !!i2705[7]
  i2704.onProcess = !!i2705[8]
  request.r(i2705[9], i2705[10], 0, i2704, 'itemDraggable')
  request.r(i2705[11], i2705[12], 0, i2704, 'itemClickable')
  request.r(i2705[13], i2705[14], 0, i2704, 'itemStirring')
  request.r(i2705[15], i2705[16], 0, i2704, 'itemKnifeSpriteMaskCutter')
  request.r(i2705[17], i2705[18], 0, i2704, 'itemSpriteMaskPainter')
  request.r(i2705[19], i2705[20], 0, i2704, 'itemMoveToTarget')
  request.r(i2705[21], i2705[22], 0, i2704, 'animator')
  i2704.itemType = i2705[23]
  request.r(i2705[24], i2705[25], 0, i2704, 'spriteRenderer')
  i2704.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2705[26], i2704.onKnifeIn)
  i2704.heartEffectScale = i2705[27]
  i2704.playMoveToTargetFinishSound = !!i2705[28]
  i2704.moveToTargetFinishFxType = i2705[29]
  return i2704
}

Deserializers["Blender"] = function (request, data, root) {
  var i2706 = root || request.c( 'Blender' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'capClosePos')
  request.r(i2707[2], i2707[3], 0, i2706, 'cap')
  request.r(i2707[4], i2707[5], 0, i2706, 'button')
  request.r(i2707[6], i2707[7], 0, i2706, 'buttonOn')
  i2706.countFoodIn = i2707[8]
  i2706.isClose = !!i2707[9]
  i2706.isDone = !!i2707[10]
  i2706.onProcess = !!i2707[11]
  request.r(i2707[12], i2707[13], 0, i2706, 'itemDraggable')
  request.r(i2707[14], i2707[15], 0, i2706, 'itemClickable')
  request.r(i2707[16], i2707[17], 0, i2706, 'itemStirring')
  request.r(i2707[18], i2707[19], 0, i2706, 'itemKnifeSpriteMaskCutter')
  request.r(i2707[20], i2707[21], 0, i2706, 'itemSpriteMaskPainter')
  request.r(i2707[22], i2707[23], 0, i2706, 'itemMoveToTarget')
  request.r(i2707[24], i2707[25], 0, i2706, 'animator')
  i2706.itemType = i2707[26]
  request.r(i2707[27], i2707[28], 0, i2706, 'spriteRenderer')
  i2706.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2707[29], i2706.onKnifeIn)
  i2706.heartEffectScale = i2707[30]
  i2706.playMoveToTargetFinishSound = !!i2707[31]
  i2706.moveToTargetFinishFxType = i2707[32]
  return i2706
}

Deserializers["FoodToBlender"] = function (request, data, root) {
  var i2708 = root || request.c( 'FoodToBlender' )
  var i2709 = data
  i2708.foodType = i2709[0]
  request.r(i2709[1], i2709[2], 0, i2708, 'blender')
  i2708.isDone = !!i2709[3]
  i2708.onProcess = !!i2709[4]
  request.r(i2709[5], i2709[6], 0, i2708, 'itemDraggable')
  request.r(i2709[7], i2709[8], 0, i2708, 'itemClickable')
  request.r(i2709[9], i2709[10], 0, i2708, 'itemStirring')
  request.r(i2709[11], i2709[12], 0, i2708, 'itemKnifeSpriteMaskCutter')
  request.r(i2709[13], i2709[14], 0, i2708, 'itemSpriteMaskPainter')
  request.r(i2709[15], i2709[16], 0, i2708, 'itemMoveToTarget')
  request.r(i2709[17], i2709[18], 0, i2708, 'animator')
  i2708.itemType = i2709[19]
  request.r(i2709[20], i2709[21], 0, i2708, 'spriteRenderer')
  i2708.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2709[22], i2708.onKnifeIn)
  i2708.heartEffectScale = i2709[23]
  i2708.playMoveToTargetFinishSound = !!i2709[24]
  i2708.moveToTargetFinishFxType = i2709[25]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2711 = data
  i2710.ambientIntensity = i2711[0]
  i2710.reflectionIntensity = i2711[1]
  i2710.ambientMode = i2711[2]
  i2710.ambientLight = new pc.Color(i2711[3], i2711[4], i2711[5], i2711[6])
  i2710.ambientSkyColor = new pc.Color(i2711[7], i2711[8], i2711[9], i2711[10])
  i2710.ambientGroundColor = new pc.Color(i2711[11], i2711[12], i2711[13], i2711[14])
  i2710.ambientEquatorColor = new pc.Color(i2711[15], i2711[16], i2711[17], i2711[18])
  i2710.fogColor = new pc.Color(i2711[19], i2711[20], i2711[21], i2711[22])
  i2710.fogEndDistance = i2711[23]
  i2710.fogStartDistance = i2711[24]
  i2710.fogDensity = i2711[25]
  i2710.fog = !!i2711[26]
  request.r(i2711[27], i2711[28], 0, i2710, 'skybox')
  i2710.fogMode = i2711[29]
  var i2713 = i2711[30]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2713[i + 0]) );
  }
  i2710.lightmaps = i2712
  i2710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2711[31], i2710.lightProbes)
  i2710.lightmapsMode = i2711[32]
  i2710.mixedBakeMode = i2711[33]
  i2710.environmentLightingMode = i2711[34]
  i2710.ambientProbe = new pc.SphericalHarmonicsL2(i2711[35])
  i2710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2711[36])
  i2710.useReferenceAmbientProbe = !!i2711[37]
  request.r(i2711[38], i2711[39], 0, i2710, 'customReflection')
  request.r(i2711[40], i2711[41], 0, i2710, 'defaultReflection')
  i2710.defaultReflectionMode = i2711[42]
  i2710.defaultReflectionResolution = i2711[43]
  i2710.sunLightObjectId = i2711[44]
  i2710.pixelLightCount = i2711[45]
  i2710.defaultReflectionHDR = !!i2711[46]
  i2710.hasLightDataAsset = !!i2711[47]
  i2710.hasManualGenerate = !!i2711[48]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'lightmapColor')
  request.r(i2717[2], i2717[3], 0, i2716, 'lightmapDirection')
  request.r(i2717[4], i2717[5], 0, i2716, 'shadowMask')
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2718 = root || new UnityEngine.LightProbes()
  var i2719 = data
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2729[i + 0]));
  }
  i2726.ShaderCompilationErrors = i2728
  i2726.name = i2727[1]
  i2726.guid = i2727[2]
  var i2731 = i2727[3]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( i2731[i + 0] );
  }
  i2726.shaderDefinedKeywords = i2730
  var i2733 = i2727[4]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2733[i + 0]) );
  }
  i2726.passes = i2732
  var i2735 = i2727[5]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2735[i + 0]) );
  }
  i2726.usePasses = i2734
  var i2737 = i2727[6]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2737[i + 0]) );
  }
  i2726.defaultParameterValues = i2736
  request.r(i2727[7], i2727[8], 0, i2726, 'unityFallbackShader')
  i2726.readDepth = !!i2727[9]
  i2726.hasDepthOnlyPass = !!i2727[10]
  i2726.isCreatedByShaderGraph = !!i2727[11]
  i2726.disableBatching = !!i2727[12]
  i2726.compiled = !!i2727[13]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2741 = data
  i2740.shaderName = i2741[0]
  i2740.errorMessage = i2741[1]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2744 = root || new pc.UnityShaderPass()
  var i2745 = data
  i2744.id = i2745[0]
  i2744.subShaderIndex = i2745[1]
  i2744.name = i2745[2]
  i2744.passType = i2745[3]
  i2744.grabPassTextureName = i2745[4]
  i2744.usePass = !!i2745[5]
  i2744.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[6], i2744.zTest)
  i2744.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[7], i2744.zWrite)
  i2744.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[8], i2744.culling)
  i2744.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2745[9], i2744.blending)
  i2744.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2745[10], i2744.alphaBlending)
  i2744.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[11], i2744.colorWriteMask)
  i2744.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[12], i2744.offsetUnits)
  i2744.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[13], i2744.offsetFactor)
  i2744.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[14], i2744.stencilRef)
  i2744.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[15], i2744.stencilReadMask)
  i2744.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2745[16], i2744.stencilWriteMask)
  i2744.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2745[17], i2744.stencilOp)
  i2744.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2745[18], i2744.stencilOpFront)
  i2744.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2745[19], i2744.stencilOpBack)
  var i2747 = i2745[20]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2747[i + 0]) );
  }
  i2744.tags = i2746
  var i2749 = i2745[21]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( i2749[i + 0] );
  }
  i2744.passDefinedKeywords = i2748
  var i2751 = i2745[22]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2751[i + 0]) );
  }
  i2744.passDefinedKeywordGroups = i2750
  var i2753 = i2745[23]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2753[i + 0]) );
  }
  i2744.variants = i2752
  var i2755 = i2745[24]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2755[i + 0]) );
  }
  i2744.excludedVariants = i2754
  i2744.hasDepthReader = !!i2745[25]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2757 = data
  i2756.val = i2757[0]
  i2756.name = i2757[1]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2759 = data
  i2758.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2759[0], i2758.src)
  i2758.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2759[1], i2758.dst)
  i2758.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2759[2], i2758.op)
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2761 = data
  i2760.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[0], i2760.pass)
  i2760.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[1], i2760.fail)
  i2760.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[2], i2760.zFail)
  i2760.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[3], i2760.comp)
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.value = i2765[1]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2769 = data
  var i2771 = i2769[0]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( i2771[i + 0] );
  }
  i2768.keywords = i2770
  i2768.hasDiscard = !!i2769[1]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2775 = data
  i2774.passId = i2775[0]
  i2774.subShaderIndex = i2775[1]
  var i2777 = i2775[2]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( i2777[i + 0] );
  }
  i2774.keywords = i2776
  i2774.vertexProgram = i2775[3]
  i2774.fragmentProgram = i2775[4]
  i2774.exportedForWebGl2 = !!i2775[5]
  i2774.readDepth = !!i2775[6]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2781 = data
  request.r(i2781[0], i2781[1], 0, i2780, 'shader')
  i2780.pass = i2781[2]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2785 = data
  i2784.name = i2785[0]
  i2784.type = i2785[1]
  i2784.value = new pc.Vec4( i2785[2], i2785[3], i2785[4], i2785[5] )
  i2784.textureValue = i2785[6]
  i2784.shaderPropertyFlag = i2785[7]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2787 = data
  i2786.name = i2787[0]
  request.r(i2787[1], i2787[2], 0, i2786, 'texture')
  i2786.aabb = i2787[3]
  i2786.vertices = i2787[4]
  i2786.triangles = i2787[5]
  i2786.textureRect = UnityEngine.Rect.MinMaxRect(i2787[6], i2787[7], i2787[8], i2787[9])
  i2786.packedRect = UnityEngine.Rect.MinMaxRect(i2787[10], i2787[11], i2787[12], i2787[13])
  i2786.border = new pc.Vec4( i2787[14], i2787[15], i2787[16], i2787[17] )
  i2786.transparency = i2787[18]
  i2786.bounds = i2787[19]
  i2786.pixelsPerUnit = i2787[20]
  i2786.textureWidth = i2787[21]
  i2786.textureHeight = i2787[22]
  i2786.nativeSize = new pc.Vec2( i2787[23], i2787[24] )
  i2786.pivot = new pc.Vec2( i2787[25], i2787[26] )
  i2786.textureRectOffset = new pc.Vec2( i2787[27], i2787[28] )
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2789 = data
  i2788.name = i2789[0]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2791 = data
  i2790.name = i2791[0]
  i2790.wrapMode = i2791[1]
  i2790.isLooping = !!i2791[2]
  i2790.length = i2791[3]
  var i2793 = i2791[4]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2793[i + 0]) );
  }
  i2790.curves = i2792
  var i2795 = i2791[5]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2795[i + 0]) );
  }
  i2790.events = i2794
  i2790.halfPrecision = !!i2791[6]
  i2790._frameRate = i2791[7]
  i2790.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2791[8], i2790.localBounds)
  i2790.hasMuscleCurves = !!i2791[9]
  var i2797 = i2791[10]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( i2797[i + 0] );
  }
  i2790.clipMuscleConstant = i2796
  i2790.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2791[11], i2790.clipBindingConstant)
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2801 = data
  i2800.path = i2801[0]
  i2800.hash = i2801[1]
  i2800.componentType = i2801[2]
  i2800.property = i2801[3]
  i2800.keys = i2801[4]
  var i2803 = i2801[5]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2803[i + 0]) );
  }
  i2800.objectReferenceKeys = i2802
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2807 = data
  i2806.time = i2807[0]
  request.r(i2807[1], i2807[2], 0, i2806, 'value')
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2811 = data
  i2810.functionName = i2811[0]
  i2810.floatParameter = i2811[1]
  i2810.intParameter = i2811[2]
  i2810.stringParameter = i2811[3]
  request.r(i2811[4], i2811[5], 0, i2810, 'objectReferenceParameter')
  i2810.time = i2811[6]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2813 = data
  i2812.center = new pc.Vec3( i2813[0], i2813[1], i2813[2] )
  i2812.extends = new pc.Vec3( i2813[3], i2813[4], i2813[5] )
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( i2819[i + 0] );
  }
  i2816.genericBindings = i2818
  var i2821 = i2817[1]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( i2821[i + 0] );
  }
  i2816.pptrCurveMapping = i2820
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2823 = data
  i2822.name = i2823[0]
  var i2825 = i2823[1]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2825[i + 0]) );
  }
  i2822.layers = i2824
  var i2827 = i2823[2]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2827[i + 0]) );
  }
  i2822.parameters = i2826
  i2822.animationClips = i2823[3]
  i2822.avatarUnsupported = i2823[4]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2831 = data
  i2830.name = i2831[0]
  i2830.defaultWeight = i2831[1]
  i2830.blendingMode = i2831[2]
  i2830.avatarMask = i2831[3]
  i2830.syncedLayerIndex = i2831[4]
  i2830.syncedLayerAffectsTiming = !!i2831[5]
  i2830.syncedLayers = i2831[6]
  i2830.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2831[7], i2830.stateMachine)
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2833 = data
  i2832.id = i2833[0]
  i2832.name = i2833[1]
  i2832.path = i2833[2]
  var i2835 = i2833[3]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2835[i + 0]) );
  }
  i2832.states = i2834
  var i2837 = i2833[4]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2837[i + 0]) );
  }
  i2832.machines = i2836
  var i2839 = i2833[5]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2839[i + 0]) );
  }
  i2832.entryStateTransitions = i2838
  var i2841 = i2833[6]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2841[i + 0]) );
  }
  i2832.exitStateTransitions = i2840
  var i2843 = i2833[7]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2843[i + 0]) );
  }
  i2832.anyStateTransitions = i2842
  i2832.defaultStateId = i2833[8]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2847 = data
  i2846.id = i2847[0]
  i2846.name = i2847[1]
  i2846.cycleOffset = i2847[2]
  i2846.cycleOffsetParameter = i2847[3]
  i2846.cycleOffsetParameterActive = !!i2847[4]
  i2846.mirror = !!i2847[5]
  i2846.mirrorParameter = i2847[6]
  i2846.mirrorParameterActive = !!i2847[7]
  i2846.motionId = i2847[8]
  i2846.nameHash = i2847[9]
  i2846.fullPathHash = i2847[10]
  i2846.speed = i2847[11]
  i2846.speedParameter = i2847[12]
  i2846.speedParameterActive = !!i2847[13]
  i2846.tag = i2847[14]
  i2846.tagHash = i2847[15]
  i2846.writeDefaultValues = !!i2847[16]
  var i2849 = i2847[17]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 2) {
  request.r(i2849[i + 0], i2849[i + 1], 2, i2848, '')
  }
  i2846.behaviours = i2848
  var i2851 = i2847[18]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2851[i + 0]) );
  }
  i2846.transitions = i2850
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2857 = data
  i2856.fullPath = i2857[0]
  i2856.canTransitionToSelf = !!i2857[1]
  i2856.duration = i2857[2]
  i2856.exitTime = i2857[3]
  i2856.hasExitTime = !!i2857[4]
  i2856.hasFixedDuration = !!i2857[5]
  i2856.interruptionSource = i2857[6]
  i2856.offset = i2857[7]
  i2856.orderedInterruption = !!i2857[8]
  i2856.destinationStateId = i2857[9]
  i2856.isExit = !!i2857[10]
  i2856.mute = !!i2857[11]
  i2856.solo = !!i2857[12]
  var i2859 = i2857[13]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2859[i + 0]) );
  }
  i2856.conditions = i2858
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2865 = data
  i2864.destinationStateId = i2865[0]
  i2864.isExit = !!i2865[1]
  i2864.mute = !!i2865[2]
  i2864.solo = !!i2865[3]
  var i2867 = i2865[4]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2867[i + 0]) );
  }
  i2864.conditions = i2866
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2871 = data
  i2870.defaultBool = !!i2871[0]
  i2870.defaultFloat = i2871[1]
  i2870.defaultInt = i2871[2]
  i2870.name = i2871[3]
  i2870.nameHash = i2871[4]
  i2870.type = i2871[5]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2875 = data
  i2874.mode = i2875[0]
  i2874.parameter = i2875[1]
  i2874.threshold = i2875[2]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2877 = data
  i2876.name = i2877[0]
  i2876.bytes64 = i2877[1]
  i2876.data = i2877[2]
  return i2876
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2879 = data
  i2878.normalStyle = i2879[0]
  i2878.normalSpacingOffset = i2879[1]
  i2878.boldStyle = i2879[2]
  i2878.boldSpacing = i2879[3]
  i2878.italicStyle = i2879[4]
  i2878.tabSize = i2879[5]
  request.r(i2879[6], i2879[7], 0, i2878, 'atlas')
  i2878.m_SourceFontFileGUID = i2879[8]
  i2878.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2879[9], i2878.m_CreationSettings)
  request.r(i2879[10], i2879[11], 0, i2878, 'm_SourceFontFile')
  i2878.m_SourceFontFilePath = i2879[12]
  i2878.m_AtlasPopulationMode = i2879[13]
  i2878.InternalDynamicOS = !!i2879[14]
  var i2881 = i2879[15]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.add(request.d('UnityEngine.TextCore.Glyph', i2881[i + 0]));
  }
  i2878.m_GlyphTable = i2880
  var i2883 = i2879[16]
  var i2882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.add(request.d('TMPro.TMP_Character', i2883[i + 0]));
  }
  i2878.m_CharacterTable = i2882
  var i2885 = i2879[17]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 2) {
  request.r(i2885[i + 0], i2885[i + 1], 2, i2884, '')
  }
  i2878.m_AtlasTextures = i2884
  i2878.m_AtlasTextureIndex = i2879[18]
  i2878.m_IsMultiAtlasTexturesEnabled = !!i2879[19]
  i2878.m_GetFontFeatures = !!i2879[20]
  i2878.m_ClearDynamicDataOnBuild = !!i2879[21]
  i2878.m_AtlasWidth = i2879[22]
  i2878.m_AtlasHeight = i2879[23]
  i2878.m_AtlasPadding = i2879[24]
  i2878.m_AtlasRenderMode = i2879[25]
  var i2887 = i2879[26]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('UnityEngine.TextCore.GlyphRect', i2887[i + 0]));
  }
  i2878.m_UsedGlyphRects = i2886
  var i2889 = i2879[27]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('UnityEngine.TextCore.GlyphRect', i2889[i + 0]));
  }
  i2878.m_FreeGlyphRects = i2888
  i2878.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2879[28], i2878.m_FontFeatureTable)
  i2878.m_ShouldReimportFontFeatures = !!i2879[29]
  var i2891 = i2879[30]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 1, i2890, '')
  }
  i2878.m_FallbackFontAssetTable = i2890
  var i2893 = i2879[31]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('TMPro.TMP_FontWeightPair', i2893[i + 0]) );
  }
  i2878.m_FontWeightTable = i2892
  var i2895 = i2879[32]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('TMPro.TMP_FontWeightPair', i2895[i + 0]) );
  }
  i2878.fontWeights = i2894
  i2878.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2879[33], i2878.m_fontInfo)
  var i2897 = i2879[34]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.add(request.d('TMPro.TMP_Glyph', i2897[i + 0]));
  }
  i2878.m_glyphInfoList = i2896
  i2878.m_KerningTable = request.d('TMPro.KerningTable', i2879[35], i2878.m_KerningTable)
  var i2899 = i2879[36]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2899.length; i += 2) {
  request.r(i2899[i + 0], i2899[i + 1], 1, i2898, '')
  }
  i2878.fallbackFontAssets = i2898
  i2878.m_Version = i2879[37]
  i2878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2879[38], i2878.m_FaceInfo)
  request.r(i2879[39], i2879[40], 0, i2878, 'm_Material')
  return i2878
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2901 = data
  i2900.sourceFontFileName = i2901[0]
  i2900.sourceFontFileGUID = i2901[1]
  i2900.faceIndex = i2901[2]
  i2900.pointSizeSamplingMode = i2901[3]
  i2900.pointSize = i2901[4]
  i2900.padding = i2901[5]
  i2900.paddingMode = i2901[6]
  i2900.packingMode = i2901[7]
  i2900.atlasWidth = i2901[8]
  i2900.atlasHeight = i2901[9]
  i2900.characterSetSelectionMode = i2901[10]
  i2900.characterSequence = i2901[11]
  i2900.referencedFontAssetGUID = i2901[12]
  i2900.referencedTextAssetGUID = i2901[13]
  i2900.fontStyle = i2901[14]
  i2900.fontStyleModifier = i2901[15]
  i2900.renderMode = i2901[16]
  i2900.includeFontFeatures = !!i2901[17]
  return i2900
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2905 = data
  i2904.m_Index = i2905[0]
  i2904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2905[1], i2904.m_Metrics)
  i2904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2905[2], i2904.m_GlyphRect)
  i2904.m_Scale = i2905[3]
  i2904.m_AtlasIndex = i2905[4]
  i2904.m_ClassDefinitionType = i2905[5]
  return i2904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2907 = data
  i2906.m_Width = i2907[0]
  i2906.m_Height = i2907[1]
  i2906.m_HorizontalBearingX = i2907[2]
  i2906.m_HorizontalBearingY = i2907[3]
  i2906.m_HorizontalAdvance = i2907[4]
  return i2906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2909 = data
  i2908.m_X = i2909[0]
  i2908.m_Y = i2909[1]
  i2908.m_Width = i2909[2]
  i2908.m_Height = i2909[3]
  return i2908
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2912 = root || request.c( 'TMPro.TMP_Character' )
  var i2913 = data
  i2912.m_ElementType = i2913[0]
  i2912.m_Unicode = i2913[1]
  i2912.m_GlyphIndex = i2913[2]
  i2912.m_Scale = i2913[3]
  return i2912
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2919 = data
  var i2921 = i2919[0]
  var i2920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.add(request.d('TMPro.MultipleSubstitutionRecord', i2921[i + 0]));
  }
  i2918.m_MultipleSubstitutionRecords = i2920
  var i2923 = i2919[1]
  var i2922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.add(request.d('TMPro.LigatureSubstitutionRecord', i2923[i + 0]));
  }
  i2918.m_LigatureSubstitutionRecords = i2922
  var i2925 = i2919[2]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2925[i + 0]));
  }
  i2918.m_GlyphPairAdjustmentRecords = i2924
  var i2927 = i2919[3]
  var i2926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2927[i + 0]));
  }
  i2918.m_MarkToBaseAdjustmentRecords = i2926
  var i2929 = i2919[4]
  var i2928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2929[i + 0]));
  }
  i2918.m_MarkToMarkAdjustmentRecords = i2928
  return i2918
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2933 = data
  i2932.m_TargetGlyphID = i2933[0]
  i2932.m_SubstituteGlyphIDs = i2933[1]
  return i2932
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2937 = data
  i2936.m_ComponentGlyphIDs = i2937[0]
  i2936.m_LigatureGlyphID = i2937[1]
  return i2936
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2941 = data
  i2940.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2941[0], i2940.m_FirstAdjustmentRecord)
  i2940.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2941[1], i2940.m_SecondAdjustmentRecord)
  i2940.m_FeatureLookupFlags = i2941[2]
  return i2940
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2945 = data
  i2944.m_BaseGlyphID = i2945[0]
  i2944.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2945[1], i2944.m_BaseGlyphAnchorPoint)
  i2944.m_MarkGlyphID = i2945[2]
  i2944.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2945[3], i2944.m_MarkPositionAdjustment)
  return i2944
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2948 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2949 = data
  i2948.m_BaseMarkGlyphID = i2949[0]
  i2948.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2949[1], i2948.m_BaseMarkGlyphAnchorPoint)
  i2948.m_CombiningMarkGlyphID = i2949[2]
  i2948.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2949[3], i2948.m_CombiningMarkPositionAdjustment)
  return i2948
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2955 = data
  request.r(i2955[0], i2955[1], 0, i2954, 'regularTypeface')
  request.r(i2955[2], i2955[3], 0, i2954, 'italicTypeface')
  return i2954
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2956 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2957 = data
  i2956.Name = i2957[0]
  i2956.PointSize = i2957[1]
  i2956.Scale = i2957[2]
  i2956.CharacterCount = i2957[3]
  i2956.LineHeight = i2957[4]
  i2956.Baseline = i2957[5]
  i2956.Ascender = i2957[6]
  i2956.CapHeight = i2957[7]
  i2956.Descender = i2957[8]
  i2956.CenterLine = i2957[9]
  i2956.SuperscriptOffset = i2957[10]
  i2956.SubscriptOffset = i2957[11]
  i2956.SubSize = i2957[12]
  i2956.Underline = i2957[13]
  i2956.UnderlineThickness = i2957[14]
  i2956.strikethrough = i2957[15]
  i2956.strikethroughThickness = i2957[16]
  i2956.TabWidth = i2957[17]
  i2956.Padding = i2957[18]
  i2956.AtlasWidth = i2957[19]
  i2956.AtlasHeight = i2957[20]
  return i2956
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2960 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2961 = data
  i2960.id = i2961[0]
  i2960.x = i2961[1]
  i2960.y = i2961[2]
  i2960.width = i2961[3]
  i2960.height = i2961[4]
  i2960.xOffset = i2961[5]
  i2960.yOffset = i2961[6]
  i2960.xAdvance = i2961[7]
  i2960.scale = i2961[8]
  return i2960
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.KerningTable' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.add(request.d('TMPro.KerningPair', i2965[i + 0]));
  }
  i2962.kerningPairs = i2964
  return i2962
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2968 = root || request.c( 'TMPro.KerningPair' )
  var i2969 = data
  i2968.xOffset = i2969[0]
  i2968.m_FirstGlyph = i2969[1]
  i2968.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2969[2], i2968.m_FirstGlyphAdjustments)
  i2968.m_SecondGlyph = i2969[3]
  i2968.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2969[4], i2968.m_SecondGlyphAdjustments)
  i2968.m_IgnoreSpacingAdjustments = !!i2969[5]
  return i2968
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2971 = data
  i2970.m_FaceIndex = i2971[0]
  i2970.m_FamilyName = i2971[1]
  i2970.m_StyleName = i2971[2]
  i2970.m_PointSize = i2971[3]
  i2970.m_Scale = i2971[4]
  i2970.m_UnitsPerEM = i2971[5]
  i2970.m_LineHeight = i2971[6]
  i2970.m_AscentLine = i2971[7]
  i2970.m_CapLine = i2971[8]
  i2970.m_MeanLine = i2971[9]
  i2970.m_Baseline = i2971[10]
  i2970.m_DescentLine = i2971[11]
  i2970.m_SuperscriptOffset = i2971[12]
  i2970.m_SuperscriptSize = i2971[13]
  i2970.m_SubscriptOffset = i2971[14]
  i2970.m_SubscriptSize = i2971[15]
  i2970.m_UnderlineOffset = i2971[16]
  i2970.m_UnderlineThickness = i2971[17]
  i2970.m_StrikethroughOffset = i2971[18]
  i2970.m_StrikethroughThickness = i2971[19]
  i2970.m_TabWidth = i2971[20]
  return i2970
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2972 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2973 = data
  var i2975 = i2973[0]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 2, i2974, '')
  }
  i2972.atlasAssets = i2974
  i2972.scale = i2973[1]
  request.r(i2973[2], i2973[3], 0, i2972, 'skeletonJSON')
  i2972.isUpgradingBlendModeMaterials = !!i2973[4]
  i2972.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2973[5], i2972.blendModeMaterials)
  var i2977 = i2973[6]
  var i2976 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2977.length; i += 2) {
  request.r(i2977[i + 0], i2977[i + 1], 1, i2976, '')
  }
  i2972.skeletonDataModifiers = i2976
  var i2979 = i2973[7]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( i2979[i + 0] );
  }
  i2972.fromAnimation = i2978
  var i2981 = i2973[8]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( i2981[i + 0] );
  }
  i2972.toAnimation = i2980
  i2972.duration = i2973[9]
  i2972.defaultMix = i2973[10]
  request.r(i2973[11], i2973[12], 0, i2972, 'controller')
  return i2972
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2984 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2985 = data
  i2984.applyAdditiveMaterial = !!i2985[0]
  var i2987 = i2985[1]
  var i2986 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2987[i + 0]));
  }
  i2984.additiveMaterials = i2986
  var i2989 = i2985[2]
  var i2988 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2989[i + 0]));
  }
  i2984.multiplyMaterials = i2988
  var i2991 = i2985[3]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2991[i + 0]));
  }
  i2984.screenMaterials = i2990
  i2984.requiresBlendModeMaterials = !!i2985[4]
  return i2984
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2994 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2995 = data
  i2994.pageName = i2995[0]
  request.r(i2995[1], i2995[2], 0, i2994, 'material')
  return i2994
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2998 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2999 = data
  request.r(i2999[0], i2999[1], 0, i2998, 'atlasFile')
  var i3001 = i2999[2]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 2) {
  request.r(i3001[i + 0], i3001[i + 1], 2, i3000, '')
  }
  i2998.materials = i3000
  return i2998
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3002 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3003 = data
  i3002.useSafeMode = !!i3003[0]
  i3002.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3003[1], i3002.safeModeOptions)
  i3002.timeScale = i3003[2]
  i3002.unscaledTimeScale = i3003[3]
  i3002.useSmoothDeltaTime = !!i3003[4]
  i3002.maxSmoothUnscaledTime = i3003[5]
  i3002.rewindCallbackMode = i3003[6]
  i3002.showUnityEditorReport = !!i3003[7]
  i3002.logBehaviour = i3003[8]
  i3002.drawGizmos = !!i3003[9]
  i3002.defaultRecyclable = !!i3003[10]
  i3002.defaultAutoPlay = i3003[11]
  i3002.defaultUpdateType = i3003[12]
  i3002.defaultTimeScaleIndependent = !!i3003[13]
  i3002.defaultEaseType = i3003[14]
  i3002.defaultEaseOvershootOrAmplitude = i3003[15]
  i3002.defaultEasePeriod = i3003[16]
  i3002.defaultAutoKill = !!i3003[17]
  i3002.defaultLoopType = i3003[18]
  i3002.debugMode = !!i3003[19]
  i3002.debugStoreTargetId = !!i3003[20]
  i3002.showPreviewPanel = !!i3003[21]
  i3002.storeSettingsLocation = i3003[22]
  i3002.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3003[23], i3002.modules)
  i3002.createASMDEF = !!i3003[24]
  i3002.showPlayingTweens = !!i3003[25]
  i3002.showPausedTweens = !!i3003[26]
  return i3002
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3004 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3005 = data
  i3004.logBehaviour = i3005[0]
  i3004.nestedTweenFailureBehaviour = i3005[1]
  return i3004
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3006 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3007 = data
  i3006.showPanel = !!i3007[0]
  i3006.audioEnabled = !!i3007[1]
  i3006.physicsEnabled = !!i3007[2]
  i3006.physics2DEnabled = !!i3007[3]
  i3006.spriteEnabled = !!i3007[4]
  i3006.uiEnabled = !!i3007[5]
  i3006.uiToolkitEnabled = !!i3007[6]
  i3006.textMeshProEnabled = !!i3007[7]
  i3006.tk2DEnabled = !!i3007[8]
  i3006.deAudioEnabled = !!i3007[9]
  i3006.deUnityExtendedEnabled = !!i3007[10]
  i3006.epoOutlineEnabled = !!i3007[11]
  return i3006
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3008 = root || request.c( 'TMPro.TMP_Settings' )
  var i3009 = data
  i3008.assetVersion = i3009[0]
  i3008.m_TextWrappingMode = i3009[1]
  i3008.m_enableKerning = !!i3009[2]
  var i3011 = i3009[3]
  var i3010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.add(i3011[i + 0]);
  }
  i3008.m_ActiveFontFeatures = i3010
  i3008.m_enableExtraPadding = !!i3009[4]
  i3008.m_enableTintAllSprites = !!i3009[5]
  i3008.m_enableParseEscapeCharacters = !!i3009[6]
  i3008.m_EnableRaycastTarget = !!i3009[7]
  i3008.m_GetFontFeaturesAtRuntime = !!i3009[8]
  i3008.m_missingGlyphCharacter = i3009[9]
  i3008.m_ClearDynamicDataOnBuild = !!i3009[10]
  i3008.m_warningsDisabled = !!i3009[11]
  request.r(i3009[12], i3009[13], 0, i3008, 'm_defaultFontAsset')
  i3008.m_defaultFontAssetPath = i3009[14]
  i3008.m_defaultFontSize = i3009[15]
  i3008.m_defaultAutoSizeMinRatio = i3009[16]
  i3008.m_defaultAutoSizeMaxRatio = i3009[17]
  i3008.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3009[18], i3009[19] )
  i3008.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3009[20], i3009[21] )
  i3008.m_autoSizeTextContainer = !!i3009[22]
  i3008.m_IsTextObjectScaleStatic = !!i3009[23]
  var i3013 = i3009[24]
  var i3012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3013.length; i += 2) {
  request.r(i3013[i + 0], i3013[i + 1], 1, i3012, '')
  }
  i3008.m_fallbackFontAssets = i3012
  i3008.m_matchMaterialPreset = !!i3009[25]
  i3008.m_HideSubTextObjects = !!i3009[26]
  request.r(i3009[27], i3009[28], 0, i3008, 'm_defaultSpriteAsset')
  i3008.m_defaultSpriteAssetPath = i3009[29]
  i3008.m_enableEmojiSupport = !!i3009[30]
  i3008.m_MissingCharacterSpriteUnicode = i3009[31]
  var i3015 = i3009[32]
  var i3014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3015.length; i += 2) {
  request.r(i3015[i + 0], i3015[i + 1], 1, i3014, '')
  }
  i3008.m_EmojiFallbackTextAssets = i3014
  i3008.m_defaultColorGradientPresetsPath = i3009[33]
  request.r(i3009[34], i3009[35], 0, i3008, 'm_defaultStyleSheet')
  i3008.m_StyleSheetsResourcePath = i3009[36]
  request.r(i3009[37], i3009[38], 0, i3008, 'm_leadingCharacters')
  request.r(i3009[39], i3009[40], 0, i3008, 'm_followingCharacters')
  i3008.m_UseModernHangulLineBreakingRules = !!i3009[41]
  return i3008
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3019 = data
  request.r(i3019[0], i3019[1], 0, i3018, 'spriteSheet')
  var i3021 = i3019[2]
  var i3020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.add(request.d('TMPro.TMP_Sprite', i3021[i + 0]));
  }
  i3018.spriteInfoList = i3020
  var i3023 = i3019[3]
  var i3022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3023.length; i += 2) {
  request.r(i3023[i + 0], i3023[i + 1], 1, i3022, '')
  }
  i3018.fallbackSpriteAssets = i3022
  var i3025 = i3019[4]
  var i3024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.add(request.d('TMPro.TMP_SpriteCharacter', i3025[i + 0]));
  }
  i3018.m_SpriteCharacterTable = i3024
  var i3027 = i3019[5]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.add(request.d('TMPro.TMP_SpriteGlyph', i3027[i + 0]));
  }
  i3018.m_GlyphTable = i3026
  i3018.m_Version = i3019[6]
  i3018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3019[7], i3018.m_FaceInfo)
  request.r(i3019[8], i3019[9], 0, i3018, 'm_Material')
  return i3018
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3030 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3031 = data
  i3030.name = i3031[0]
  i3030.hashCode = i3031[1]
  i3030.unicode = i3031[2]
  i3030.pivot = new pc.Vec2( i3031[3], i3031[4] )
  request.r(i3031[5], i3031[6], 0, i3030, 'sprite')
  i3030.id = i3031[7]
  i3030.x = i3031[8]
  i3030.y = i3031[9]
  i3030.width = i3031[10]
  i3030.height = i3031[11]
  i3030.xOffset = i3031[12]
  i3030.yOffset = i3031[13]
  i3030.xAdvance = i3031[14]
  i3030.scale = i3031[15]
  return i3030
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3036 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3037 = data
  i3036.m_Name = i3037[0]
  i3036.m_ElementType = i3037[1]
  i3036.m_Unicode = i3037[2]
  i3036.m_GlyphIndex = i3037[3]
  i3036.m_Scale = i3037[4]
  return i3036
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3040 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3041 = data
  request.r(i3041[0], i3041[1], 0, i3040, 'sprite')
  i3040.m_Index = i3041[2]
  i3040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3041[3], i3040.m_Metrics)
  i3040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3041[4], i3040.m_GlyphRect)
  i3040.m_Scale = i3041[5]
  i3040.m_AtlasIndex = i3041[6]
  i3040.m_ClassDefinitionType = i3041[7]
  return i3040
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3042 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3043 = data
  var i3045 = i3043[0]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.add(request.d('TMPro.TMP_Style', i3045[i + 0]));
  }
  i3042.m_StyleList = i3044
  return i3042
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3048 = root || request.c( 'TMPro.TMP_Style' )
  var i3049 = data
  i3048.m_Name = i3049[0]
  i3048.m_HashCode = i3049[1]
  i3048.m_OpeningDefinition = i3049[2]
  i3048.m_ClosingDefinition = i3049[3]
  i3048.m_OpeningTagArray = i3049[4]
  i3048.m_ClosingTagArray = i3049[5]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3051 = data
  var i3053 = i3051[0]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3053[i + 0]) );
  }
  i3050.files = i3052
  i3050.componentToPrefabIds = i3051[1]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3057 = data
  i3056.path = i3057[0]
  request.r(i3057[1], i3057[2], 0, i3056, 'unityObject')
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3059 = data
  var i3061 = i3059[0]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3061[i + 0]) );
  }
  i3058.scriptsExecutionOrder = i3060
  var i3063 = i3059[1]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3063[i + 0]) );
  }
  i3058.sortingLayers = i3062
  var i3065 = i3059[2]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 1) {
    i3064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3065[i + 0]) );
  }
  i3058.cullingLayers = i3064
  i3058.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3059[3], i3058.timeSettings)
  i3058.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3059[4], i3058.physicsSettings)
  i3058.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3059[5], i3058.physics2DSettings)
  i3058.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3059[6], i3058.qualitySettings)
  i3058.enableRealtimeShadows = !!i3059[7]
  i3058.enableAutoInstancing = !!i3059[8]
  i3058.enableStaticBatching = !!i3059[9]
  i3058.enableDynamicBatching = !!i3059[10]
  i3058.lightmapEncodingQuality = i3059[11]
  i3058.desiredColorSpace = i3059[12]
  var i3067 = i3059[13]
  var i3066 = []
  for(var i = 0; i < i3067.length; i += 1) {
    i3066.push( i3067[i + 0] );
  }
  i3058.allTags = i3066
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3071 = data
  i3070.name = i3071[0]
  i3070.value = i3071[1]
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3075 = data
  i3074.id = i3075[0]
  i3074.name = i3075[1]
  i3074.value = i3075[2]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3079 = data
  i3078.id = i3079[0]
  i3078.name = i3079[1]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3081 = data
  i3080.fixedDeltaTime = i3081[0]
  i3080.maximumDeltaTime = i3081[1]
  i3080.timeScale = i3081[2]
  i3080.maximumParticleTimestep = i3081[3]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3083 = data
  i3082.gravity = new pc.Vec3( i3083[0], i3083[1], i3083[2] )
  i3082.defaultSolverIterations = i3083[3]
  i3082.bounceThreshold = i3083[4]
  i3082.autoSyncTransforms = !!i3083[5]
  i3082.autoSimulation = !!i3083[6]
  var i3085 = i3083[7]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3085[i + 0]) );
  }
  i3082.collisionMatrix = i3084
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3089 = data
  i3088.enabled = !!i3089[0]
  i3088.layerId = i3089[1]
  i3088.otherLayerId = i3089[2]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3091 = data
  request.r(i3091[0], i3091[1], 0, i3090, 'material')
  i3090.gravity = new pc.Vec2( i3091[2], i3091[3] )
  i3090.positionIterations = i3091[4]
  i3090.velocityIterations = i3091[5]
  i3090.velocityThreshold = i3091[6]
  i3090.maxLinearCorrection = i3091[7]
  i3090.maxAngularCorrection = i3091[8]
  i3090.maxTranslationSpeed = i3091[9]
  i3090.maxRotationSpeed = i3091[10]
  i3090.baumgarteScale = i3091[11]
  i3090.baumgarteTOIScale = i3091[12]
  i3090.timeToSleep = i3091[13]
  i3090.linearSleepTolerance = i3091[14]
  i3090.angularSleepTolerance = i3091[15]
  i3090.defaultContactOffset = i3091[16]
  i3090.autoSimulation = !!i3091[17]
  i3090.queriesHitTriggers = !!i3091[18]
  i3090.queriesStartInColliders = !!i3091[19]
  i3090.callbacksOnDisable = !!i3091[20]
  i3090.reuseCollisionCallbacks = !!i3091[21]
  i3090.autoSyncTransforms = !!i3091[22]
  var i3093 = i3091[23]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3093[i + 0]) );
  }
  i3090.collisionMatrix = i3092
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3097 = data
  i3096.enabled = !!i3097[0]
  i3096.layerId = i3097[1]
  i3096.otherLayerId = i3097[2]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3099 = data
  var i3101 = i3099[0]
  var i3100 = []
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3101[i + 0]) );
  }
  i3098.qualityLevels = i3100
  var i3103 = i3099[1]
  var i3102 = []
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.push( i3103[i + 0] );
  }
  i3098.names = i3102
  i3098.shadows = i3099[2]
  i3098.anisotropicFiltering = i3099[3]
  i3098.antiAliasing = i3099[4]
  i3098.lodBias = i3099[5]
  i3098.shadowCascades = i3099[6]
  i3098.shadowDistance = i3099[7]
  i3098.shadowmaskMode = i3099[8]
  i3098.shadowProjection = i3099[9]
  i3098.shadowResolution = i3099[10]
  i3098.softParticles = !!i3099[11]
  i3098.softVegetation = !!i3099[12]
  i3098.activeColorSpace = i3099[13]
  i3098.desiredColorSpace = i3099[14]
  i3098.masterTextureLimit = i3099[15]
  i3098.maxQueuedFrames = i3099[16]
  i3098.particleRaycastBudget = i3099[17]
  i3098.pixelLightCount = i3099[18]
  i3098.realtimeReflectionProbes = !!i3099[19]
  i3098.shadowCascade2Split = i3099[20]
  i3098.shadowCascade4Split = new pc.Vec3( i3099[21], i3099[22], i3099[23] )
  i3098.streamingMipmapsActive = !!i3099[24]
  i3098.vSyncCount = i3099[25]
  i3098.asyncUploadBufferSize = i3099[26]
  i3098.asyncUploadTimeSlice = i3099[27]
  i3098.billboardsFaceCameraPosition = !!i3099[28]
  i3098.shadowNearPlaneOffset = i3099[29]
  i3098.streamingMipmapsMemoryBudget = i3099[30]
  i3098.maximumLODLevel = i3099[31]
  i3098.streamingMipmapsAddAllCameras = !!i3099[32]
  i3098.streamingMipmapsMaxLevelReduction = i3099[33]
  i3098.streamingMipmapsRenderersPerFrame = i3099[34]
  i3098.resolutionScalingFixedDPIFactor = i3099[35]
  i3098.streamingMipmapsMaxFileIORequests = i3099[36]
  i3098.currentQualityLevel = i3099[37]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3109 = data
  i3108.weight = i3109[0]
  i3108.vertices = i3109[1]
  i3108.normals = i3109[2]
  i3108.tangents = i3109[3]
  return i3108
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3111 = data
  i3110.m_GlyphIndex = i3111[0]
  i3110.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3111[1], i3110.m_GlyphValueRecord)
  return i3110
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3112 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3113 = data
  i3112.m_XCoordinate = i3113[0]
  i3112.m_YCoordinate = i3113[1]
  return i3112
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3114 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3115 = data
  i3114.m_XPositionAdjustment = i3115[0]
  i3114.m_YPositionAdjustment = i3115[1]
  return i3114
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3116 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3117 = data
  i3116.xPlacement = i3117[0]
  i3116.yPlacement = i3117[1]
  i3116.xAdvance = i3117[2]
  i3116.yAdvance = i3117[3]
  return i3116
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3119 = data
  i3118.m_XPlacement = i3119[0]
  i3118.m_YPlacement = i3119[1]
  i3118.m_XAdvance = i3119[2]
  i3118.m_YAdvance = i3119[3]
  return i3118
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[22],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[22],"106":[57],"107":[108],"109":[108],"21":[14],"66":[110],"62":[110],"111":[110],"112":[110],"65":[110],"113":[14],"114":[17,14],"58":[57],"115":[17,14],"116":[25,57],"117":[57],"118":[57,55],"119":[85],"120":[92],"121":[122],"123":[124],"125":[5],"126":[22],"127":[128],"129":[52],"130":[21],"131":[14],"132":[57,14],"27":[14,17],"133":[14],"134":[17,14],"135":[57],"136":[17,14],"137":[14],"138":[139],"140":[139],"141":[139],"142":[14],"143":[14],"24":[21],"16":[17,14],"144":[14],"23":[21],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[17,14],"155":[14],"156":[14],"157":[14],"158":[14],"159":[17,14],"160":[14],"161":[52],"162":[52],"53":[52],"163":[52],"164":[22],"165":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","Duck","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","HandTutManager","Tray","Item","FishFillet","Salt","Tongs","FoodToBlender","Blender","Ply_ToggleEvent","SortChildByZPos","DuckManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","ContinuousRotation","Pan","ItemDraggable","ItemMoveToTarget","EggBowl","ItemStirring","ItemClickable","UnityEngine.SpriteMask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1763";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4914";

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

Deserializers.buildID = "ede45f69-0ee8-41e7-98f3-3bbac5e4bd73";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

