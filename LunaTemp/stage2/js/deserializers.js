var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.JointSpring' )
  var i2323 = data
  i2322.spring = i2323[0]
  i2322.damper = i2323[1]
  i2322.targetPosition = i2323[2]
  return i2322
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.JointMotor' )
  var i2325 = data
  i2324.m_TargetVelocity = i2325[0]
  i2324.m_Force = i2325[1]
  i2324.m_FreeSpin = i2325[2]
  return i2324
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.JointLimits' )
  var i2327 = data
  i2326.m_Min = i2327[0]
  i2326.m_Max = i2327[1]
  i2326.m_Bounciness = i2327[2]
  i2326.m_BounceMinVelocity = i2327[3]
  i2326.m_ContactDistance = i2327[4]
  i2326.minBounce = i2327[5]
  i2326.maxBounce = i2327[6]
  return i2326
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.JointDrive' )
  var i2329 = data
  i2328.m_PositionSpring = i2329[0]
  i2328.m_PositionDamper = i2329[1]
  i2328.m_MaximumForce = i2329[2]
  i2328.m_UseAcceleration = i2329[3]
  return i2328
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2331 = data
  i2330.m_Spring = i2331[0]
  i2330.m_Damper = i2331[1]
  return i2330
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2333 = data
  i2332.m_Limit = i2333[0]
  i2332.m_Bounciness = i2333[1]
  i2332.m_ContactDistance = i2333[2]
  return i2332
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2335 = data
  i2334.m_ExtremumSlip = i2335[0]
  i2334.m_ExtremumValue = i2335[1]
  i2334.m_AsymptoteSlip = i2335[2]
  i2334.m_AsymptoteValue = i2335[3]
  i2334.m_Stiffness = i2335[4]
  return i2334
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2337 = data
  i2336.m_LowerAngle = i2337[0]
  i2336.m_UpperAngle = i2337[1]
  return i2336
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2339 = data
  i2338.m_MotorSpeed = i2339[0]
  i2338.m_MaximumMotorTorque = i2339[1]
  return i2338
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2341 = data
  i2340.m_DampingRatio = i2341[0]
  i2340.m_Frequency = i2341[1]
  i2340.m_Angle = i2341[2]
  return i2340
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2343 = data
  i2342.m_LowerTranslation = i2343[0]
  i2342.m_UpperTranslation = i2343[1]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2344 = root || new pc.UnityMaterial()
  var i2345 = data
  i2344.name = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'shader')
  i2344.renderQueue = i2345[3]
  i2344.enableInstancing = !!i2345[4]
  var i2347 = i2345[5]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2347[i + 0]) );
  }
  i2344.floatParameters = i2346
  var i2349 = i2345[6]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2349[i + 0]) );
  }
  i2344.colorParameters = i2348
  var i2351 = i2345[7]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2351[i + 0]) );
  }
  i2344.vectorParameters = i2350
  var i2353 = i2345[8]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2353[i + 0]) );
  }
  i2344.textureParameters = i2352
  var i2355 = i2345[9]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2355[i + 0]) );
  }
  i2344.materialFlags = i2354
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.value = i2359[1]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.value = new pc.Color(i2363[1], i2363[2], i2363[3], i2363[4])
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.value = new pc.Vec4( i2367[1], i2367[2], i2367[3], i2367[4] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2371 = data
  i2370.name = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'value')
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2375 = data
  i2374.name = i2375[0]
  i2374.enabled = !!i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2377 = data
  i2376.name = i2377[0]
  i2376.width = i2377[1]
  i2376.height = i2377[2]
  i2376.mipmapCount = i2377[3]
  i2376.anisoLevel = i2377[4]
  i2376.filterMode = i2377[5]
  i2376.hdr = !!i2377[6]
  i2376.format = i2377[7]
  i2376.wrapMode = i2377[8]
  i2376.alphaIsTransparency = !!i2377[9]
  i2376.alphaSource = i2377[10]
  i2376.graphicsFormat = i2377[11]
  i2376.sRGBTexture = !!i2377[12]
  i2376.desiredColorSpace = i2377[13]
  i2376.wrapU = i2377[14]
  i2376.wrapV = i2377[15]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2379 = data
  i2378.position = new pc.Vec3( i2379[0], i2379[1], i2379[2] )
  i2378.scale = new pc.Vec3( i2379[3], i2379[4], i2379[5] )
  i2378.rotation = new pc.Quat(i2379[6], i2379[7], i2379[8], i2379[9])
  return i2378
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2380 = root || request.c( 'HeartEffect' )
  var i2381 = data
  i2380.defaultLifeTime = i2381[0]
  request.r(i2381[1], i2381[2], 0, i2380, 'tf')
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2383 = data
  i2382.color = new pc.Color(i2383[0], i2383[1], i2383[2], i2383[3])
  request.r(i2383[4], i2383[5], 0, i2382, 'sprite')
  i2382.flipX = !!i2383[6]
  i2382.flipY = !!i2383[7]
  i2382.drawMode = i2383[8]
  i2382.size = new pc.Vec2( i2383[9], i2383[10] )
  i2382.tileMode = i2383[11]
  i2382.adaptiveModeThreshold = i2383[12]
  i2382.maskInteraction = i2383[13]
  i2382.spriteSortPoint = i2383[14]
  i2382.enabled = !!i2383[15]
  request.r(i2383[16], i2383[17], 0, i2382, 'sharedMaterial')
  var i2385 = i2383[18]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 2, i2384, '')
  }
  i2382.sharedMaterials = i2384
  i2382.receiveShadows = !!i2383[19]
  i2382.shadowCastingMode = i2383[20]
  i2382.sortingLayerID = i2383[21]
  i2382.sortingOrder = i2383[22]
  i2382.lightmapIndex = i2383[23]
  i2382.lightmapSceneIndex = i2383[24]
  i2382.lightmapScaleOffset = new pc.Vec4( i2383[25], i2383[26], i2383[27], i2383[28] )
  i2382.lightProbeUsage = i2383[29]
  i2382.reflectionProbeUsage = i2383[30]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2389 = data
  i2388.name = i2389[0]
  i2388.tagId = i2389[1]
  i2388.enabled = !!i2389[2]
  i2388.isStatic = !!i2389[3]
  i2388.layer = i2389[4]
  return i2388
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2390 = root || request.c( 'HeartBreakEffect' )
  var i2391 = data
  i2390.defaultLifeTime = i2391[0]
  request.r(i2391[1], i2391[2], 0, i2390, 'tf')
  return i2390
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2392 = root || request.c( 'BlinkEffect' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'tf')
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'mesh')
  i2394.meshCount = i2395[2]
  i2394.activeVertexStreamsCount = i2395[3]
  i2394.alignment = i2395[4]
  i2394.renderMode = i2395[5]
  i2394.sortMode = i2395[6]
  i2394.lengthScale = i2395[7]
  i2394.velocityScale = i2395[8]
  i2394.cameraVelocityScale = i2395[9]
  i2394.normalDirection = i2395[10]
  i2394.sortingFudge = i2395[11]
  i2394.minParticleSize = i2395[12]
  i2394.maxParticleSize = i2395[13]
  i2394.pivot = new pc.Vec3( i2395[14], i2395[15], i2395[16] )
  request.r(i2395[17], i2395[18], 0, i2394, 'trailMaterial')
  i2394.applyActiveColorSpace = !!i2395[19]
  i2394.enabled = !!i2395[20]
  request.r(i2395[21], i2395[22], 0, i2394, 'sharedMaterial')
  var i2397 = i2395[23]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2394.sharedMaterials = i2396
  i2394.receiveShadows = !!i2395[24]
  i2394.shadowCastingMode = i2395[25]
  i2394.sortingLayerID = i2395[26]
  i2394.sortingOrder = i2395[27]
  i2394.lightmapIndex = i2395[28]
  i2394.lightmapSceneIndex = i2395[29]
  i2394.lightmapScaleOffset = new pc.Vec4( i2395[30], i2395[31], i2395[32], i2395[33] )
  i2394.lightProbeUsage = i2395[34]
  i2394.reflectionProbeUsage = i2395[35]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2399 = data
  i2398.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2399[0], i2398.main)
  i2398.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2399[1], i2398.colorBySpeed)
  i2398.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2399[2], i2398.colorOverLifetime)
  i2398.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2399[3], i2398.emission)
  i2398.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2399[4], i2398.rotationBySpeed)
  i2398.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2399[5], i2398.rotationOverLifetime)
  i2398.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2399[6], i2398.shape)
  i2398.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2399[7], i2398.sizeBySpeed)
  i2398.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2399[8], i2398.sizeOverLifetime)
  i2398.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2399[9], i2398.textureSheetAnimation)
  i2398.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2399[10], i2398.velocityOverLifetime)
  i2398.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2399[11], i2398.noise)
  i2398.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2399[12], i2398.inheritVelocity)
  i2398.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2399[13], i2398.forceOverLifetime)
  i2398.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2399[14], i2398.limitVelocityOverLifetime)
  i2398.useAutoRandomSeed = !!i2399[15]
  i2398.randomSeed = i2399[16]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemMain()
  var i2401 = data
  i2400.duration = i2401[0]
  i2400.loop = !!i2401[1]
  i2400.prewarm = !!i2401[2]
  i2400.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[3], i2400.startDelay)
  i2400.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[4], i2400.startLifetime)
  i2400.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[5], i2400.startSpeed)
  i2400.startSize3D = !!i2401[6]
  i2400.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[7], i2400.startSizeX)
  i2400.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[8], i2400.startSizeY)
  i2400.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[9], i2400.startSizeZ)
  i2400.startRotation3D = !!i2401[10]
  i2400.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[11], i2400.startRotationX)
  i2400.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[12], i2400.startRotationY)
  i2400.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[13], i2400.startRotationZ)
  i2400.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2401[14], i2400.startColor)
  i2400.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[15], i2400.gravityModifier)
  i2400.simulationSpace = i2401[16]
  request.r(i2401[17], i2401[18], 0, i2400, 'customSimulationSpace')
  i2400.simulationSpeed = i2401[19]
  i2400.useUnscaledTime = !!i2401[20]
  i2400.scalingMode = i2401[21]
  i2400.playOnAwake = !!i2401[22]
  i2400.maxParticles = i2401[23]
  i2400.emitterVelocityMode = i2401[24]
  i2400.stopAction = i2401[25]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2402 = root || new pc.MinMaxCurve()
  var i2403 = data
  i2402.mode = i2403[0]
  i2402.curveMin = new pc.AnimationCurve( { keys_flow: i2403[1] } )
  i2402.curveMax = new pc.AnimationCurve( { keys_flow: i2403[2] } )
  i2402.curveMultiplier = i2403[3]
  i2402.constantMin = i2403[4]
  i2402.constantMax = i2403[5]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2404 = root || new pc.MinMaxGradient()
  var i2405 = data
  i2404.mode = i2405[0]
  i2404.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2405[1], i2404.gradientMin)
  i2404.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2405[2], i2404.gradientMax)
  i2404.colorMin = new pc.Color(i2405[3], i2405[4], i2405[5], i2405[6])
  i2404.colorMax = new pc.Color(i2405[7], i2405[8], i2405[9], i2405[10])
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2407 = data
  i2406.mode = i2407[0]
  var i2409 = i2407[1]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2409[i + 0]) );
  }
  i2406.colorKeys = i2408
  var i2411 = i2407[2]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2411[i + 0]) );
  }
  i2406.alphaKeys = i2410
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemColorBySpeed()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2413[1], i2412.color)
  i2412.range = new pc.Vec2( i2413[2], i2413[3] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2417 = data
  i2416.color = new pc.Color(i2417[0], i2417[1], i2417[2], i2417[3])
  i2416.time = i2417[4]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2421 = data
  i2420.alpha = i2421[0]
  i2420.time = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemColorOverLifetime()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2423[1], i2422.color)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemEmitter()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[1], i2424.rateOverTime)
  i2424.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.rateOverDistance)
  var i2427 = i2425[3]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2427[i + 0]) );
  }
  i2424.bursts = i2426
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemBurst()
  var i2431 = data
  i2430.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[0], i2430.count)
  i2430.cycleCount = i2431[1]
  i2430.minCount = i2431[2]
  i2430.maxCount = i2431[3]
  i2430.repeatInterval = i2431[4]
  i2430.time = i2431[5]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2432 = root || new pc.ParticleSystemRotationBySpeed()
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[1], i2432.x)
  i2432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[2], i2432.y)
  i2432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[3], i2432.z)
  i2432.separateAxes = !!i2433[4]
  i2432.range = new pc.Vec2( i2433[5], i2433[6] )
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2434 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2435 = data
  i2434.enabled = !!i2435[0]
  i2434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[1], i2434.x)
  i2434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[2], i2434.y)
  i2434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[3], i2434.z)
  i2434.separateAxes = !!i2435[4]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemShape()
  var i2437 = data
  i2436.enabled = !!i2437[0]
  i2436.shapeType = i2437[1]
  i2436.randomDirectionAmount = i2437[2]
  i2436.sphericalDirectionAmount = i2437[3]
  i2436.randomPositionAmount = i2437[4]
  i2436.alignToDirection = !!i2437[5]
  i2436.radius = i2437[6]
  i2436.radiusMode = i2437[7]
  i2436.radiusSpread = i2437[8]
  i2436.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[9], i2436.radiusSpeed)
  i2436.radiusThickness = i2437[10]
  i2436.angle = i2437[11]
  i2436.length = i2437[12]
  i2436.boxThickness = new pc.Vec3( i2437[13], i2437[14], i2437[15] )
  i2436.meshShapeType = i2437[16]
  request.r(i2437[17], i2437[18], 0, i2436, 'mesh')
  request.r(i2437[19], i2437[20], 0, i2436, 'meshRenderer')
  request.r(i2437[21], i2437[22], 0, i2436, 'skinnedMeshRenderer')
  i2436.useMeshMaterialIndex = !!i2437[23]
  i2436.meshMaterialIndex = i2437[24]
  i2436.useMeshColors = !!i2437[25]
  i2436.normalOffset = i2437[26]
  i2436.arc = i2437[27]
  i2436.arcMode = i2437[28]
  i2436.arcSpread = i2437[29]
  i2436.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[30], i2436.arcSpeed)
  i2436.donutRadius = i2437[31]
  i2436.position = new pc.Vec3( i2437[32], i2437[33], i2437[34] )
  i2436.rotation = new pc.Vec3( i2437[35], i2437[36], i2437[37] )
  i2436.scale = new pc.Vec3( i2437[38], i2437[39], i2437[40] )
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2438 = root || new pc.ParticleSystemSizeBySpeed()
  var i2439 = data
  i2438.enabled = !!i2439[0]
  i2438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[1], i2438.x)
  i2438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[2], i2438.y)
  i2438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[3], i2438.z)
  i2438.separateAxes = !!i2439[4]
  i2438.range = new pc.Vec2( i2439[5], i2439[6] )
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[1], i2440.x)
  i2440.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[2], i2440.y)
  i2440.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[3], i2440.z)
  i2440.separateAxes = !!i2441[4]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.mode = i2443[1]
  i2442.animation = i2443[2]
  i2442.numTilesX = i2443[3]
  i2442.numTilesY = i2443[4]
  i2442.useRandomRow = !!i2443[5]
  i2442.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[6], i2442.frameOverTime)
  i2442.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[7], i2442.startFrame)
  i2442.cycleCount = i2443[8]
  i2442.rowIndex = i2443[9]
  i2442.flipU = i2443[10]
  i2442.flipV = i2443[11]
  i2442.spriteCount = i2443[12]
  var i2445 = i2443[13]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.sprites = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[1], i2448.x)
  i2448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.y)
  i2448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[3], i2448.z)
  i2448.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[4], i2448.radial)
  i2448.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[5], i2448.speedModifier)
  i2448.space = i2449[6]
  i2448.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[7], i2448.orbitalX)
  i2448.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[8], i2448.orbitalY)
  i2448.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[9], i2448.orbitalZ)
  i2448.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[10], i2448.orbitalOffsetX)
  i2448.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[11], i2448.orbitalOffsetY)
  i2448.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[12], i2448.orbitalOffsetZ)
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemNoise()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.separateAxes = !!i2451[1]
  i2450.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.strengthX)
  i2450.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.strengthY)
  i2450.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[4], i2450.strengthZ)
  i2450.frequency = i2451[5]
  i2450.damping = !!i2451[6]
  i2450.octaveCount = i2451[7]
  i2450.octaveMultiplier = i2451[8]
  i2450.octaveScale = i2451[9]
  i2450.quality = i2451[10]
  i2450.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[11], i2450.scrollSpeed)
  i2450.scrollSpeedMultiplier = i2451[12]
  i2450.remapEnabled = !!i2451[13]
  i2450.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[14], i2450.remapX)
  i2450.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[15], i2450.remapY)
  i2450.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[16], i2450.remapZ)
  i2450.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[17], i2450.positionAmount)
  i2450.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[18], i2450.rotationAmount)
  i2450.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[19], i2450.sizeAmount)
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemInheritVelocity()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.mode = i2453[1]
  i2452.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[2], i2452.curve)
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemForceOverLifetime()
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[1], i2454.x)
  i2454.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[2], i2454.y)
  i2454.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[3], i2454.z)
  i2454.space = i2455[4]
  i2454.randomized = !!i2455[5]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2456 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[1], i2456.limit)
  i2456.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[2], i2456.limitX)
  i2456.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[3], i2456.limitY)
  i2456.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[4], i2456.limitZ)
  i2456.dampen = i2457[5]
  i2456.separateAxes = !!i2457[6]
  i2456.space = i2457[7]
  i2456.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[8], i2456.drag)
  i2456.multiplyDragByParticleSize = !!i2457[9]
  i2456.multiplyDragByParticleVelocity = !!i2457[10]
  return i2456
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2458 = root || request.c( 'StarExploreFX' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'tf')
  return i2458
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i2460 = root || request.c( 'ProgressBar' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'fillTransform')
  request.r(i2461[2], i2461[3], 0, i2460, 'tf')
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2463 = data
  i2462.pivot = new pc.Vec2( i2463[0], i2463[1] )
  i2462.anchorMin = new pc.Vec2( i2463[2], i2463[3] )
  i2462.anchorMax = new pc.Vec2( i2463[4], i2463[5] )
  i2462.sizeDelta = new pc.Vec2( i2463[6], i2463[7] )
  i2462.anchoredPosition3D = new pc.Vec3( i2463[8], i2463[9], i2463[10] )
  i2462.rotation = new pc.Quat(i2463[11], i2463[12], i2463[13], i2463[14])
  i2462.scale = new pc.Vec3( i2463[15], i2463[16], i2463[17] )
  return i2462
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2464 = root || request.c( 'ClockTimer' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'fillImage')
  request.r(i2465[2], i2465[3], 0, i2464, 'tf')
  i2464.spawnZoomDuration = i2465[4]
  i2464.despawnZoomDuration = i2465[5]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2467 = data
  i2466.cullTransparentMesh = !!i2467[0]
  return i2466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.UI.Image' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'm_Sprite')
  i2468.m_Type = i2469[2]
  i2468.m_PreserveAspect = !!i2469[3]
  i2468.m_FillCenter = !!i2469[4]
  i2468.m_FillMethod = i2469[5]
  i2468.m_FillAmount = i2469[6]
  i2468.m_FillClockwise = !!i2469[7]
  i2468.m_FillOrigin = i2469[8]
  i2468.m_UseSpriteMesh = !!i2469[9]
  i2468.m_PixelsPerUnitMultiplier = i2469[10]
  request.r(i2469[11], i2469[12], 0, i2468, 'm_Material')
  i2468.m_Maskable = !!i2469[13]
  i2468.m_Color = new pc.Color(i2469[14], i2469[15], i2469[16], i2469[17])
  i2468.m_RaycastTarget = !!i2469[18]
  i2468.m_RaycastPadding = new pc.Vec4( i2469[19], i2469[20], i2469[21], i2469[22] )
  return i2468
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i2470 = root || request.c( 'FlourSmoke' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'tf')
  return i2470
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2472 = root || request.c( 'WaterSplash' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'tf')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2475 = data
  i2474.name = i2475[0]
  i2474.halfPrecision = !!i2475[1]
  i2474.useSimplification = !!i2475[2]
  i2474.useUInt32IndexFormat = !!i2475[3]
  i2474.vertexCount = i2475[4]
  i2474.aabb = i2475[5]
  var i2477 = i2475[6]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( !!i2477[i + 0] );
  }
  i2474.streams = i2476
  i2474.vertices = i2475[7]
  var i2479 = i2475[8]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2479[i + 0]) );
  }
  i2474.subMeshes = i2478
  var i2481 = i2475[9]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 16) {
    i2480.push( new pc.Mat4().setData(i2481[i + 0], i2481[i + 1], i2481[i + 2], i2481[i + 3],  i2481[i + 4], i2481[i + 5], i2481[i + 6], i2481[i + 7],  i2481[i + 8], i2481[i + 9], i2481[i + 10], i2481[i + 11],  i2481[i + 12], i2481[i + 13], i2481[i + 14], i2481[i + 15]) );
  }
  i2474.bindposes = i2480
  var i2483 = i2475[10]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2483[i + 0]) );
  }
  i2474.blendShapes = i2482
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2489 = data
  i2488.triangles = i2489[0]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2495 = data
  i2494.name = i2495[0]
  var i2497 = i2495[1]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2497[i + 0]) );
  }
  i2494.frames = i2496
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.index = i2499[1]
  i2498.startup = !!i2499[2]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2501 = data
  i2500.planeDistance = i2501[0]
  i2500.referencePixelsPerUnit = i2501[1]
  i2500.isFallbackOverlay = !!i2501[2]
  i2500.renderMode = i2501[3]
  i2500.renderOrder = i2501[4]
  i2500.sortingLayerName = i2501[5]
  i2500.sortingOrder = i2501[6]
  i2500.scaleFactor = i2501[7]
  request.r(i2501[8], i2501[9], 0, i2500, 'worldCamera')
  i2500.overrideSorting = !!i2501[10]
  i2500.pixelPerfect = !!i2501[11]
  i2500.targetDisplay = i2501[12]
  i2500.overridePixelPerfect = !!i2501[13]
  i2500.enabled = !!i2501[14]
  return i2500
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2503 = data
  i2502.m_UiScaleMode = i2503[0]
  i2502.m_ReferencePixelsPerUnit = i2503[1]
  i2502.m_ScaleFactor = i2503[2]
  i2502.m_ReferenceResolution = new pc.Vec2( i2503[3], i2503[4] )
  i2502.m_ScreenMatchMode = i2503[5]
  i2502.m_MatchWidthOrHeight = i2503[6]
  i2502.m_PhysicalUnit = i2503[7]
  i2502.m_FallbackScreenDPI = i2503[8]
  i2502.m_DefaultSpriteDPI = i2503[9]
  i2502.m_DynamicPixelsPerUnit = i2503[10]
  i2502.m_PresetInfoIsWorld = !!i2503[11]
  return i2502
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2505 = data
  i2504.m_IgnoreReversedGraphics = !!i2505[0]
  i2504.m_BlockingObjects = i2505[1]
  i2504.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2505[2] )
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'animatorController')
  request.r(i2507[2], i2507[3], 0, i2506, 'avatar')
  i2506.updateMode = i2507[4]
  i2506.hasTransformHierarchy = !!i2507[5]
  i2506.applyRootMotion = !!i2507[6]
  var i2509 = i2507[7]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 2) {
  request.r(i2509[i + 0], i2509[i + 1], 2, i2508, '')
  }
  i2506.humanBones = i2508
  i2506.enabled = !!i2507[8]
  return i2506
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2513 = data
  i2512.m_hasFontAssetChanged = !!i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'm_baseMaterial')
  i2512.m_maskOffset = new pc.Vec4( i2513[3], i2513[4], i2513[5], i2513[6] )
  i2512.m_text = i2513[7]
  i2512.m_isRightToLeft = !!i2513[8]
  request.r(i2513[9], i2513[10], 0, i2512, 'm_fontAsset')
  request.r(i2513[11], i2513[12], 0, i2512, 'm_sharedMaterial')
  var i2515 = i2513[13]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 2) {
  request.r(i2515[i + 0], i2515[i + 1], 2, i2514, '')
  }
  i2512.m_fontSharedMaterials = i2514
  request.r(i2513[14], i2513[15], 0, i2512, 'm_fontMaterial')
  var i2517 = i2513[16]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 2, i2516, '')
  }
  i2512.m_fontMaterials = i2516
  i2512.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2513[17], i2513[18], i2513[19], i2513[20])
  i2512.m_fontColor = new pc.Color(i2513[21], i2513[22], i2513[23], i2513[24])
  i2512.m_enableVertexGradient = !!i2513[25]
  i2512.m_colorMode = i2513[26]
  i2512.m_fontColorGradient = request.d('TMPro.VertexGradient', i2513[27], i2512.m_fontColorGradient)
  request.r(i2513[28], i2513[29], 0, i2512, 'm_fontColorGradientPreset')
  request.r(i2513[30], i2513[31], 0, i2512, 'm_spriteAsset')
  i2512.m_tintAllSprites = !!i2513[32]
  request.r(i2513[33], i2513[34], 0, i2512, 'm_StyleSheet')
  i2512.m_TextStyleHashCode = i2513[35]
  i2512.m_overrideHtmlColors = !!i2513[36]
  i2512.m_faceColor = UnityEngine.Color32.ConstructColor(i2513[37], i2513[38], i2513[39], i2513[40])
  i2512.m_fontSize = i2513[41]
  i2512.m_fontSizeBase = i2513[42]
  i2512.m_fontWeight = i2513[43]
  i2512.m_enableAutoSizing = !!i2513[44]
  i2512.m_fontSizeMin = i2513[45]
  i2512.m_fontSizeMax = i2513[46]
  i2512.m_fontStyle = i2513[47]
  i2512.m_HorizontalAlignment = i2513[48]
  i2512.m_VerticalAlignment = i2513[49]
  i2512.m_textAlignment = i2513[50]
  i2512.m_characterSpacing = i2513[51]
  i2512.m_wordSpacing = i2513[52]
  i2512.m_lineSpacing = i2513[53]
  i2512.m_lineSpacingMax = i2513[54]
  i2512.m_paragraphSpacing = i2513[55]
  i2512.m_charWidthMaxAdj = i2513[56]
  i2512.m_TextWrappingMode = i2513[57]
  i2512.m_wordWrappingRatios = i2513[58]
  i2512.m_overflowMode = i2513[59]
  request.r(i2513[60], i2513[61], 0, i2512, 'm_linkedTextComponent')
  request.r(i2513[62], i2513[63], 0, i2512, 'parentLinkedComponent')
  i2512.m_enableKerning = !!i2513[64]
  var i2519 = i2513[65]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.add(i2519[i + 0]);
  }
  i2512.m_ActiveFontFeatures = i2518
  i2512.m_enableExtraPadding = !!i2513[66]
  i2512.checkPaddingRequired = !!i2513[67]
  i2512.m_isRichText = !!i2513[68]
  i2512.m_parseCtrlCharacters = !!i2513[69]
  i2512.m_isOrthographic = !!i2513[70]
  i2512.m_isCullingEnabled = !!i2513[71]
  i2512.m_horizontalMapping = i2513[72]
  i2512.m_verticalMapping = i2513[73]
  i2512.m_uvLineOffset = i2513[74]
  i2512.m_geometrySortingOrder = i2513[75]
  i2512.m_IsTextObjectScaleStatic = !!i2513[76]
  i2512.m_VertexBufferAutoSizeReduction = !!i2513[77]
  i2512.m_useMaxVisibleDescender = !!i2513[78]
  i2512.m_pageToDisplay = i2513[79]
  i2512.m_margin = new pc.Vec4( i2513[80], i2513[81], i2513[82], i2513[83] )
  i2512.m_isUsingLegacyAnimationComponent = !!i2513[84]
  i2512.m_isVolumetricText = !!i2513[85]
  request.r(i2513[86], i2513[87], 0, i2512, 'm_Material')
  i2512.m_EmojiFallbackSupport = !!i2513[88]
  i2512.m_Maskable = !!i2513[89]
  i2512.m_Color = new pc.Color(i2513[90], i2513[91], i2513[92], i2513[93])
  i2512.m_RaycastTarget = !!i2513[94]
  i2512.m_RaycastPadding = new pc.Vec4( i2513[95], i2513[96], i2513[97], i2513[98] )
  return i2512
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.VertexGradient' )
  var i2521 = data
  i2520.topLeft = new pc.Color(i2521[0], i2521[1], i2521[2], i2521[3])
  i2520.topRight = new pc.Color(i2521[4], i2521[5], i2521[6], i2521[7])
  i2520.bottomLeft = new pc.Color(i2521[8], i2521[9], i2521[10], i2521[11])
  i2520.bottomRight = new pc.Color(i2521[12], i2521[13], i2521[14], i2521[15])
  return i2520
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.UI.Button' )
  var i2525 = data
  i2524.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2525[0], i2524.m_OnClick)
  i2524.m_Navigation = request.d('UnityEngine.UI.Navigation', i2525[1], i2524.m_Navigation)
  i2524.m_Transition = i2525[2]
  i2524.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2525[3], i2524.m_Colors)
  i2524.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2525[4], i2524.m_SpriteState)
  i2524.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2525[5], i2524.m_AnimationTriggers)
  i2524.m_Interactable = !!i2525[6]
  request.r(i2525[7], i2525[8], 0, i2524, 'm_TargetGraphic')
  return i2524
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2527 = data
  i2526.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2527[0], i2526.m_PersistentCalls)
  return i2526
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2528 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2529 = data
  var i2531 = i2529[0]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.add(request.d('UnityEngine.Events.PersistentCall', i2531[i + 0]));
  }
  i2528.m_Calls = i2530
  return i2528
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'm_Target')
  i2534.m_TargetAssemblyTypeName = i2535[2]
  i2534.m_MethodName = i2535[3]
  i2534.m_Mode = i2535[4]
  i2534.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2535[5], i2534.m_Arguments)
  i2534.m_CallState = i2535[6]
  return i2534
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'm_ObjectArgument')
  i2536.m_ObjectArgumentAssemblyTypeName = i2537[2]
  i2536.m_IntArgument = i2537[3]
  i2536.m_FloatArgument = i2537[4]
  i2536.m_StringArgument = i2537[5]
  i2536.m_BoolArgument = !!i2537[6]
  return i2536
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2539 = data
  i2538.m_Mode = i2539[0]
  i2538.m_WrapAround = !!i2539[1]
  request.r(i2539[2], i2539[3], 0, i2538, 'm_SelectOnUp')
  request.r(i2539[4], i2539[5], 0, i2538, 'm_SelectOnDown')
  request.r(i2539[6], i2539[7], 0, i2538, 'm_SelectOnLeft')
  request.r(i2539[8], i2539[9], 0, i2538, 'm_SelectOnRight')
  return i2538
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2541 = data
  i2540.m_NormalColor = new pc.Color(i2541[0], i2541[1], i2541[2], i2541[3])
  i2540.m_HighlightedColor = new pc.Color(i2541[4], i2541[5], i2541[6], i2541[7])
  i2540.m_PressedColor = new pc.Color(i2541[8], i2541[9], i2541[10], i2541[11])
  i2540.m_SelectedColor = new pc.Color(i2541[12], i2541[13], i2541[14], i2541[15])
  i2540.m_DisabledColor = new pc.Color(i2541[16], i2541[17], i2541[18], i2541[19])
  i2540.m_ColorMultiplier = i2541[20]
  i2540.m_FadeDuration = i2541[21]
  return i2540
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'm_HighlightedSprite')
  request.r(i2543[2], i2543[3], 0, i2542, 'm_PressedSprite')
  request.r(i2543[4], i2543[5], 0, i2542, 'm_SelectedSprite')
  request.r(i2543[6], i2543[7], 0, i2542, 'm_DisabledSprite')
  return i2542
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2544 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2545 = data
  i2544.m_NormalTrigger = i2545[0]
  i2544.m_HighlightedTrigger = i2545[1]
  i2544.m_PressedTrigger = i2545[2]
  i2544.m_SelectedTrigger = i2545[3]
  i2544.m_DisabledTrigger = i2545[4]
  return i2544
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2546 = root || request.c( 'Ply_Pool' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Ply_Pool+PoolAmount', i2549[i + 0]) );
  }
  i2546.poolAmounts = i2548
  request.r(i2547[1], i2547[2], 0, i2546, 'poolHolder')
  return i2546
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2552 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2553 = data
  i2552.type = i2553[0]
  i2552.amount = i2553[1]
  request.r(i2553[2], i2553[3], 0, i2552, 'gameUnit')
  return i2552
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2554 = root || request.c( 'Ply_SoundManager' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Ply_SoundManager+FxAudio', i2557[i + 0]) );
  }
  i2554.fxAudios = i2556
  var i2559 = i2555[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 2, i2558, '')
  }
  i2554.audioClips = i2558
  request.r(i2555[2], i2555[3], 0, i2554, 'sound')
  return i2554
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2562 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2563 = data
  i2562.fxType = i2563[0]
  request.r(i2563[1], i2563[2], 0, i2562, 'audioClip')
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'clip')
  request.r(i2567[2], i2567[3], 0, i2566, 'outputAudioMixerGroup')
  i2566.playOnAwake = !!i2567[4]
  i2566.loop = !!i2567[5]
  i2566.time = i2567[6]
  i2566.volume = i2567[7]
  i2566.pitch = i2567[8]
  i2566.enabled = !!i2567[9]
  return i2566
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2568 = root || request.c( 'GameManager' )
  var i2569 = data
  i2568.isPlaying = !!i2569[0]
  i2568.isTutorial = !!i2569[1]
  i2568.isGotoStore = !!i2569[2]
  i2568.isLoseGame = !!i2569[3]
  i2568.countMove = i2569[4]
  i2568.currentLayer = i2569[5]
  return i2568
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2570 = root || request.c( 'UIManager' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'winUI')
  request.r(i2571[2], i2571[3], 0, i2570, 'loseUI')
  request.r(i2571[4], i2571[5], 0, i2570, 'tutorial')
  request.r(i2571[6], i2571[7], 0, i2570, 'verticalUI')
  request.r(i2571[8], i2571[9], 0, i2570, 'horizontalUI')
  request.r(i2571[10], i2571[11], 0, i2570, 'downloadBtn')
  request.r(i2571[12], i2571[13], 0, i2570, 'horizontalDownloadBtn')
  i2570.isGoogleBuild = !!i2571[14]
  i2570.screenWidth = i2571[15]
  i2570.screenHeight = i2571[16]
  i2570.scaleHeightOnWidth = i2571[17]
  i2570.isVertical = !!i2571[18]
  i2570.isScreenVertical = !!i2571[19]
  request.r(i2571[20], i2571[21], 0, i2570, 'cam')
  i2570.verticalUIHeightOnWidthRatio = i2571[22]
  i2570.scaleCameraOnValidate = !!i2571[23]
  i2570.screenVerticalHeightOnWidthRatio = i2571[24]
  i2570.useContinuousScaling = !!i2571[25]
  i2570.baseOrthographicSize = i2571[26]
  i2570.baseAspect = i2571[27]
  i2570.landscapeSizeRatio = i2571[28]
  i2570.defaultPortraitSizeRatio = i2571[29]
  var i2573 = i2571[30]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('ScreenScaleStep', i2573[i + 0]));
  }
  i2570.discreteScaleSteps = i2572
  i2570.usePerspectiveCamera = !!i2571[31]
  request.r(i2571[32], i2571[33], 0, i2570, 'perspectiveFocus')
  i2570.perspectiveFocusDistance = i2571[34]
  i2570.perspectivePadding = i2571[35]
  i2570.fitRendererBounds = !!i2571[36]
  request.r(i2571[37], i2571[38], 0, i2570, 'boundsRoot')
  var i2575 = i2571[39]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2575.length; i += 2) {
  request.r(i2575[i + 0], i2575[i + 1], 1, i2574, '')
  }
  i2570.boundsRenderers = i2574
  return i2570
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2578 = root || request.c( 'ScreenScaleStep' )
  var i2579 = data
  i2578.heightOnWidthRatio = i2579[0]
  i2578.orthographicSize = i2579[1]
  return i2578
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2582 = root || request.c( 'InputManager' )
  var i2583 = data
  i2582.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2583[0] )
  i2582.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2583[1] )
  i2582.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2583[2] )
  i2582.isDragging = !!i2583[3]
  return i2582
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2584 = root || request.c( 'HandTutManager' )
  var i2585 = data
  var i2587 = i2585[0]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2587.length; i += 2) {
  request.r(i2587[i + 0], i2587[i + 1], 1, i2586, '')
  }
  i2584.items = i2586
  request.r(i2585[1], i2585[2], 0, i2584, 'knife')
  request.r(i2585[3], i2585[4], 0, i2584, 'peeler')
  request.r(i2585[5], i2585[6], 0, i2584, 'handTutObject')
  request.r(i2585[7], i2585[8], 0, i2584, 'tapToCookObject')
  request.r(i2585[9], i2585[10], 0, i2584, 'oilItem')
  request.r(i2585[11], i2585[12], 0, i2584, 'stoveToggleEvent')
  request.r(i2585[13], i2585[14], 0, i2584, 'waterToggleEvent')
  request.r(i2585[15], i2585[16], 0, i2584, 'sinkBlock')
  var i2589 = i2585[17]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2589.length; i += 2) {
  request.r(i2589[i + 0], i2589[i + 1], 1, i2588, '')
  }
  i2584.itemsInWater = i2588
  i2584.noDelayItemCount = i2585[18]
  i2584.breakHeartNoDelayThreshold = i2585[19]
  i2584.maxHandTutShowCount = i2585[20]
  i2584.showSinkWaterTutorialOnStart = !!i2585[21]
  i2584.waitForBowlIntro = !!i2585[22]
  i2584.idleDelay = i2585[23]
  i2584.firstHandTutDelay = i2585[24]
  i2584.phaseHandTutDelay = i2585[25]
  i2584.moveDuration = i2585[26]
  i2584.dragFadeDuration = i2585[27]
  i2584.clickScaleDuration = i2585[28]
  i2584.waitAtEndDuration = i2585[29]
  i2584.handZPosition = i2585[30]
  i2584.clickScaleMultiplier = i2585[31]
  i2584.moveEase = i2585[32]
  return i2584
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2594 = root || request.c( 'SortChildByZPos' )
  var i2595 = data
  request.r(i2595[0], i2595[1], 0, i2594, 'transformToSort')
  var i2597 = i2595[2]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 1, i2596, '')
  }
  i2594.childrenToSort = i2596
  i2594.zOffset = i2595[3]
  i2594.baseZ = i2595[4]
  return i2594
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2600 = root || request.c( 'PhaseManager' )
  var i2601 = data
  var i2603 = i2601[0]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('PhaseData', i2603[i + 0]));
  }
  i2600.phases = i2602
  i2600.transitionDuration = i2601[1]
  i2600.delayBeforeNextPhase = i2601[2]
  i2600.offScreenLeftX = i2601[3]
  i2600.offScreenRightX = i2601[4]
  i2600.centerScreenX = i2601[5]
  request.r(i2601[6], i2601[7], 0, i2600, 'phaseTransitionObject')
  i2600.phaseTransitionObjectDuration = i2601[8]
  i2600.currentPhaseIndex = i2601[9]
  i2600.currentStepCount = i2601[10]
  return i2600
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2606 = root || request.c( 'PhaseData' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'phaseObject')
  i2606.totalSteps = i2607[2]
  i2606.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2607[3], i2606.onPhaseReady)
  return i2606
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2609 = data
  i2608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2609[0], i2608.m_PersistentCalls)
  return i2608
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2610 = root || request.c( 'ItemTypeDoneManager' )
  var i2611 = data
  var i2613 = i2611[0]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2613[i + 0]));
  }
  i2610.itemTypeGroups = i2612
  return i2610
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2616 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2617 = data
  i2616.itemType = i2617[0]
  var i2619 = i2617[1]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2619.length; i += 2) {
  request.r(i2619[i + 0], i2619[i + 1], 1, i2618, '')
  }
  i2616.items = i2618
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2621 = data
  i2620.aspect = i2621[0]
  i2620.orthographic = !!i2621[1]
  i2620.orthographicSize = i2621[2]
  i2620.backgroundColor = new pc.Color(i2621[3], i2621[4], i2621[5], i2621[6])
  i2620.nearClipPlane = i2621[7]
  i2620.farClipPlane = i2621[8]
  i2620.fieldOfView = i2621[9]
  i2620.depth = i2621[10]
  i2620.clearFlags = i2621[11]
  i2620.cullingMask = i2621[12]
  i2620.rect = i2621[13]
  request.r(i2621[14], i2621[15], 0, i2620, 'targetTexture')
  i2620.usePhysicalProperties = !!i2621[16]
  i2620.focalLength = i2621[17]
  i2620.sensorSize = new pc.Vec2( i2621[18], i2621[19] )
  i2620.lensShift = new pc.Vec2( i2621[20], i2621[21] )
  i2620.gateFit = i2621[22]
  i2620.commandBufferCount = i2621[23]
  i2620.cameraType = i2621[24]
  i2620.enabled = !!i2621[25]
  return i2620
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2623 = data
  request.r(i2623[0], i2623[1], 0, i2622, 'm_FirstSelected')
  i2622.m_sendNavigationEvents = !!i2623[2]
  i2622.m_DragThreshold = i2623[3]
  return i2622
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2625 = data
  i2624.m_HorizontalAxis = i2625[0]
  i2624.m_VerticalAxis = i2625[1]
  i2624.m_SubmitButton = i2625[2]
  i2624.m_CancelButton = i2625[3]
  i2624.m_InputActionsPerSecond = i2625[4]
  i2624.m_RepeatDelay = i2625[5]
  i2624.m_ForceModuleActive = !!i2625[6]
  i2624.m_SendPointerHoverToParent = !!i2625[7]
  return i2624
}

Deserializers["Capybara"] = function (request, data, root) {
  var i2626 = root || request.c( 'Capybara' )
  var i2627 = data
  i2626.playSkinChangeMode = i2627[0]
  request.r(i2627[1], i2627[2], 0, i2626, 'popup1')
  request.r(i2627[3], i2627[4], 0, i2626, 'popup2')
  request.r(i2627[5], i2627[6], 0, i2626, 'tick')
  i2626.popupShowScale = i2627[7]
  i2626.popupShowDuration = i2627[8]
  i2626.popupHideDuration = i2627[9]
  i2626.popupHideDelay = i2627[10]
  request.r(i2627[11], i2627[12], 0, i2626, 'spawnHeartPoint')
  i2626.heartEffectScale = i2627[13]
  request.r(i2627[14], i2627[15], 0, i2626, 'skeletonAnimation')
  i2626.bassSkinName = i2627[16]
  i2626.skinChangeDelay = i2627[17]
  i2626.skinMoveYOffset = i2627[18]
  i2626.skinMoveDownDuration = i2627[19]
  i2626.skinMoveUpDuration = i2627[20]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2629 = data
  i2628.center = new pc.Vec3( i2629[0], i2629[1], i2629[2] )
  i2628.radius = i2629[3]
  i2628.enabled = !!i2629[4]
  i2628.isTrigger = !!i2629[5]
  request.r(i2629[6], i2629[7], 0, i2628, 'material')
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'sharedMesh')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'additionalVertexStreams')
  i2632.enabled = !!i2633[2]
  request.r(i2633[3], i2633[4], 0, i2632, 'sharedMaterial')
  var i2635 = i2633[5]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 2, i2634, '')
  }
  i2632.sharedMaterials = i2634
  i2632.receiveShadows = !!i2633[6]
  i2632.shadowCastingMode = i2633[7]
  i2632.sortingLayerID = i2633[8]
  i2632.sortingOrder = i2633[9]
  i2632.lightmapIndex = i2633[10]
  i2632.lightmapSceneIndex = i2633[11]
  i2632.lightmapScaleOffset = new pc.Vec4( i2633[12], i2633[13], i2633[14], i2633[15] )
  i2632.lightProbeUsage = i2633[16]
  i2632.reflectionProbeUsage = i2633[17]
  return i2632
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2636 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2637 = data
  i2636.loop = !!i2637[0]
  i2636.timeScale = i2637[1]
  request.r(i2637[2], i2637[3], 0, i2636, 'skeletonDataAsset')
  i2636.initialSkinName = i2637[4]
  i2636.fixPrefabOverrideViaMeshFilter = i2637[5]
  i2636.initialFlipX = !!i2637[6]
  i2636.initialFlipY = !!i2637[7]
  i2636.updateWhenInvisible = i2637[8]
  i2636.zSpacing = i2637[9]
  i2636.useClipping = !!i2637[10]
  i2636.immutableTriangles = !!i2637[11]
  i2636.pmaVertexColors = !!i2637[12]
  i2636.clearStateOnDisable = !!i2637[13]
  i2636.tintBlack = !!i2637[14]
  i2636.singleSubmesh = !!i2637[15]
  i2636.fixDrawOrder = !!i2637[16]
  i2636.addNormals = !!i2637[17]
  i2636.calculateTangents = !!i2637[18]
  i2636.maskInteraction = i2637[19]
  i2636.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2637[20], i2636.maskMaterials)
  i2636.disableRenderingOnOverride = !!i2637[21]
  i2636._animationName = i2637[22]
  var i2639 = i2637[23]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( i2639[i + 0] );
  }
  i2636.separatorSlotNames = i2638
  return i2636
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2640 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2640.materialsMaskDisabled = i2642
  var i2645 = i2641[1]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 2, i2644, '')
  }
  i2640.materialsInsideMask = i2644
  var i2647 = i2641[2]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 2, i2646, '')
  }
  i2640.materialsOutsideMask = i2646
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2651 = data
  i2650.center = new pc.Vec3( i2651[0], i2651[1], i2651[2] )
  i2650.size = new pc.Vec3( i2651[3], i2651[4], i2651[5] )
  i2650.enabled = !!i2651[6]
  i2650.isTrigger = !!i2651[7]
  request.r(i2651[8], i2651[9], 0, i2650, 'material')
  return i2650
}

Deserializers["LastTray"] = function (request, data, root) {
  var i2652 = root || request.c( 'LastTray' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'tf')
  i2652.isShushiOn = !!i2653[2]
  i2652.isSauceOn = !!i2653[3]
  request.r(i2653[4], i2653[5], 0, i2652, 'shushiDone')
  request.r(i2653[6], i2653[7], 0, i2652, 'capybara')
  request.r(i2653[8], i2653[9], 0, i2652, 'items')
  i2652.isDone = !!i2653[10]
  i2652.onProcess = !!i2653[11]
  request.r(i2653[12], i2653[13], 0, i2652, 'itemDraggable')
  request.r(i2653[14], i2653[15], 0, i2652, 'itemClickable')
  request.r(i2653[16], i2653[17], 0, i2652, 'itemStirring')
  request.r(i2653[18], i2653[19], 0, i2652, 'itemKnifeSpriteMaskCutter')
  request.r(i2653[20], i2653[21], 0, i2652, 'itemSpriteMaskPainter')
  request.r(i2653[22], i2653[23], 0, i2652, 'itemDragSpriteMaskPainter')
  request.r(i2653[24], i2653[25], 0, i2652, 'itemMoveToTarget')
  request.r(i2653[26], i2653[27], 0, i2652, 'animator')
  i2652.itemType = i2653[28]
  request.r(i2653[29], i2653[30], 0, i2652, 'spriteRenderer')
  i2652.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2653[31], i2652.onKnifeIn)
  i2652.heartEffectScale = i2653[32]
  i2652.breakHeartEffectScale = i2653[33]
  i2652.blinkEffectScale = i2653[34]
  i2652.mergeEffectScale = i2653[35]
  i2652.playMoveToTargetFinishSound = !!i2653[36]
  i2652.moveToTargetFinishFxType = i2653[37]
  return i2652
}

Deserializers["Item"] = function (request, data, root) {
  var i2654 = root || request.c( 'Item' )
  var i2655 = data
  i2654.isDone = !!i2655[0]
  i2654.onProcess = !!i2655[1]
  request.r(i2655[2], i2655[3], 0, i2654, 'itemDraggable')
  request.r(i2655[4], i2655[5], 0, i2654, 'itemClickable')
  request.r(i2655[6], i2655[7], 0, i2654, 'itemStirring')
  request.r(i2655[8], i2655[9], 0, i2654, 'itemKnifeSpriteMaskCutter')
  request.r(i2655[10], i2655[11], 0, i2654, 'itemSpriteMaskPainter')
  request.r(i2655[12], i2655[13], 0, i2654, 'itemDragSpriteMaskPainter')
  request.r(i2655[14], i2655[15], 0, i2654, 'itemMoveToTarget')
  request.r(i2655[16], i2655[17], 0, i2654, 'animator')
  i2654.itemType = i2655[18]
  request.r(i2655[19], i2655[20], 0, i2654, 'spriteRenderer')
  i2654.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2655[21], i2654.onKnifeIn)
  i2654.heartEffectScale = i2655[22]
  i2654.breakHeartEffectScale = i2655[23]
  i2654.blinkEffectScale = i2655[24]
  i2654.mergeEffectScale = i2655[25]
  i2654.playMoveToTargetFinishSound = !!i2655[26]
  i2654.moveToTargetFinishFxType = i2655[27]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2657 = data
  i2656.center = new pc.Vec3( i2657[0], i2657[1], i2657[2] )
  i2656.radius = i2657[3]
  i2656.height = i2657[4]
  i2656.direction = i2657[5]
  i2656.enabled = !!i2657[6]
  i2656.isTrigger = !!i2657[7]
  request.r(i2657[8], i2657[9], 0, i2656, 'material')
  return i2656
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2658 = root || request.c( 'ItemDraggable' )
  var i2659 = data
  i2658.isDraggable = !!i2659[0]
  request.r(i2659[1], i2659[2], 0, i2658, 'returnTransform')
  i2658.setParentToReturnTransform = !!i2659[3]
  i2658.returnToExactReturnTransformPosition = !!i2659[4]
  i2658.targetItemType = i2659[5]
  request.r(i2659[6], i2659[7], 0, i2658, 'item')
  i2658.checkState = !!i2659[8]
  request.r(i2659[9], i2659[10], 0, i2658, 'shadowObject')
  i2658.playReturnToStartFinishSound = !!i2659[11]
  i2658.returnToStartFinishFxType = i2659[12]
  i2658.spawnBreakHeartOnDropFail = !!i2659[13]
  i2658.playBeginDragSound = !!i2659[14]
  i2658.beginDragFxType = i2659[15]
  i2658.liftOffset = i2659[16]
  i2658.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2659[17], i2658.onBeginDrag)
  i2658.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2659[18], i2658.onDropSuccess)
  i2658.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2659[19], i2658.onDropFail)
  i2658.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2659[20], i2658.onReturnToStartComplete)
  return i2658
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2660 = root || request.c( 'ItemMoveToTarget' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, 'defaultTarget')
  i2660.duration = i2661[2]
  i2660.easeType = i2661[3]
  i2660.moveType = i2661[4]
  i2660.jumpPower = i2661[5]
  i2660.numJumps = i2661[6]
  i2660.rotate360DuringJump = !!i2661[7]
  i2660.flipRotate = !!i2661[8]
  i2660.angleRotate = i2661[9]
  i2660.setParentToTarget = !!i2661[10]
  i2660.onComplete = request.d('UnityEngine.Events.UnityEvent', i2661[11], i2660.onComplete)
  i2660.lockInputWhileMoving = !!i2661[12]
  i2660.resetParentBeforeMove = !!i2661[13]
  return i2660
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2662 = root || request.c( 'ItemDragChildRotator' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'rotateTarget')
  i2662.dragEulerAngles = new pc.Vec3( i2663[2], i2663[3], i2663[4] )
  i2662.useLocalRotation = !!i2663[5]
  i2662.rotateRelative = !!i2663[6]
  i2662.rotateDuration = i2663[7]
  i2662.rotateEase = i2663[8]
  i2662.rotateMode = i2663[9]
  return i2662
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2664 = root || request.c( 'ItemDragRaycastTarget' )
  var i2665 = data
  i2664.targetToFind = i2665[0]
  i2664.targetItemTypeWhenHit = i2665[1]
  i2664.targetItemTypeOnDropFail = i2665[2]
  request.r(i2665[3], i2665[4], 0, i2664, 'raycastPoint')
  i2664.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2665[5] )
  i2664.rayDistance = i2665[6]
  i2664.updateMoveDefaultTarget = !!i2665[7]
  i2664.invokeOnlyWhenTargetChanged = !!i2665[8]
  i2664.targetChangeEnabled = !!i2665[9]
  i2664.restoreTargetOnDropFail = !!i2665[10]
  i2664.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2665[11], i2664.onTargetFound)
  i2664.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2665[12], i2664.onTargetFoundWithItem)
  return i2664
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2666 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2667 = data
  i2666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2667[0], i2666.m_PersistentCalls)
  return i2666
}

Deserializers["Chillie"] = function (request, data, root) {
  var i2668 = root || request.c( 'Chillie' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'targetBowl')
  i2668.isDone = !!i2669[2]
  i2668.onProcess = !!i2669[3]
  request.r(i2669[4], i2669[5], 0, i2668, 'itemDraggable')
  request.r(i2669[6], i2669[7], 0, i2668, 'itemClickable')
  request.r(i2669[8], i2669[9], 0, i2668, 'itemStirring')
  request.r(i2669[10], i2669[11], 0, i2668, 'itemKnifeSpriteMaskCutter')
  request.r(i2669[12], i2669[13], 0, i2668, 'itemSpriteMaskPainter')
  request.r(i2669[14], i2669[15], 0, i2668, 'itemDragSpriteMaskPainter')
  request.r(i2669[16], i2669[17], 0, i2668, 'itemMoveToTarget')
  request.r(i2669[18], i2669[19], 0, i2668, 'animator')
  i2668.itemType = i2669[20]
  request.r(i2669[21], i2669[22], 0, i2668, 'spriteRenderer')
  i2668.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2669[23], i2668.onKnifeIn)
  i2668.heartEffectScale = i2669[24]
  i2668.breakHeartEffectScale = i2669[25]
  i2668.blinkEffectScale = i2669[26]
  i2668.mergeEffectScale = i2669[27]
  i2668.playMoveToTargetFinishSound = !!i2669[28]
  i2668.moveToTargetFinishFxType = i2669[29]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2671 = data
  i2670.frontSortingLayerID = i2671[0]
  i2670.frontSortingOrder = i2671[1]
  i2670.backSortingLayerID = i2671[2]
  i2670.backSortingOrder = i2671[3]
  i2670.alphaCutoff = i2671[4]
  request.r(i2671[5], i2671[6], 0, i2670, 'sprite')
  i2670.tileMode = i2671[7]
  i2670.isCustomRangeActive = !!i2671[8]
  i2670.spriteSortPoint = i2671[9]
  i2670.enabled = !!i2671[10]
  request.r(i2671[11], i2671[12], 0, i2670, 'sharedMaterial')
  var i2673 = i2671[13]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 2, i2672, '')
  }
  i2670.sharedMaterials = i2672
  i2670.receiveShadows = !!i2671[14]
  i2670.shadowCastingMode = i2671[15]
  i2670.sortingLayerID = i2671[16]
  i2670.sortingOrder = i2671[17]
  i2670.lightmapIndex = i2671[18]
  i2670.lightmapSceneIndex = i2671[19]
  i2670.lightmapScaleOffset = new pc.Vec4( i2671[20], i2671[21], i2671[22], i2671[23] )
  i2670.lightProbeUsage = i2671[24]
  i2670.reflectionProbeUsage = i2671[25]
  return i2670
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i2674 = root || request.c( 'CuttingBoard' )
  var i2675 = data
  i2674.punchScale = new pc.Vec3( i2675[0], i2675[1], i2675[2] )
  i2674.punchDuration = i2675[3]
  i2674.foodInCount = i2675[4]
  i2674.isRiceIn = !!i2675[5]
  request.r(i2675[6], i2675[7], 0, i2674, 'shushi')
  i2674.isDone = !!i2675[8]
  i2674.onProcess = !!i2675[9]
  request.r(i2675[10], i2675[11], 0, i2674, 'itemDraggable')
  request.r(i2675[12], i2675[13], 0, i2674, 'itemClickable')
  request.r(i2675[14], i2675[15], 0, i2674, 'itemStirring')
  request.r(i2675[16], i2675[17], 0, i2674, 'itemKnifeSpriteMaskCutter')
  request.r(i2675[18], i2675[19], 0, i2674, 'itemSpriteMaskPainter')
  request.r(i2675[20], i2675[21], 0, i2674, 'itemDragSpriteMaskPainter')
  request.r(i2675[22], i2675[23], 0, i2674, 'itemMoveToTarget')
  request.r(i2675[24], i2675[25], 0, i2674, 'animator')
  i2674.itemType = i2675[26]
  request.r(i2675[27], i2675[28], 0, i2674, 'spriteRenderer')
  i2674.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2675[29], i2674.onKnifeIn)
  i2674.heartEffectScale = i2675[30]
  i2674.breakHeartEffectScale = i2675[31]
  i2674.blinkEffectScale = i2675[32]
  i2674.mergeEffectScale = i2675[33]
  i2674.playMoveToTargetFinishSound = !!i2675[34]
  i2674.moveToTargetFinishFxType = i2675[35]
  return i2674
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2676 = root || request.c( 'ItemClickable' )
  var i2677 = data
  i2676.requiredClicks = i2677[0]
  i2676.infiniteClick = !!i2677[1]
  i2676.canClick = !!i2677[2]
  i2676.disableAfterClick = !!i2677[3]
  i2676.onClick = request.d('UnityEngine.Events.UnityEvent', i2677[4], i2676.onClick)
  var i2679 = i2677[5]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('UnityEngine.Events.UnityEvent', i2679[i + 0]));
  }
  i2676.sequentialOnClicks = i2678
  i2676.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2677[6], i2676.onClickComplete)
  return i2676
}

Deserializers["Shushi"] = function (request, data, root) {
  var i2682 = root || request.c( 'Shushi' )
  var i2683 = data
  request.r(i2683[0], i2683[1], 0, i2682, 'knife')
  i2682.isDone = !!i2683[2]
  i2682.onProcess = !!i2683[3]
  request.r(i2683[4], i2683[5], 0, i2682, 'itemDraggable')
  request.r(i2683[6], i2683[7], 0, i2682, 'itemClickable')
  request.r(i2683[8], i2683[9], 0, i2682, 'itemStirring')
  request.r(i2683[10], i2683[11], 0, i2682, 'itemKnifeSpriteMaskCutter')
  request.r(i2683[12], i2683[13], 0, i2682, 'itemSpriteMaskPainter')
  request.r(i2683[14], i2683[15], 0, i2682, 'itemDragSpriteMaskPainter')
  request.r(i2683[16], i2683[17], 0, i2682, 'itemMoveToTarget')
  request.r(i2683[18], i2683[19], 0, i2682, 'animator')
  i2682.itemType = i2683[20]
  request.r(i2683[21], i2683[22], 0, i2682, 'spriteRenderer')
  i2682.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2683[23], i2682.onKnifeIn)
  i2682.heartEffectScale = i2683[24]
  i2682.breakHeartEffectScale = i2683[25]
  i2682.blinkEffectScale = i2683[26]
  i2682.mergeEffectScale = i2683[27]
  i2682.playMoveToTargetFinishSound = !!i2683[28]
  i2682.moveToTargetFinishFxType = i2683[29]
  return i2682
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i2684 = root || request.c( 'CuttingItem' )
  var i2685 = data
  request.r(i2685[0], i2685[1], 0, i2684, 'itemKnife')
  request.r(i2685[2], i2685[3], 0, i2684, 'itemBeforeCut')
  request.r(i2685[4], i2685[5], 0, i2684, 'itemWaitToCut')
  request.r(i2685[6], i2685[7], 0, i2684, 'knifeBeforeCut')
  request.r(i2685[8], i2685[9], 0, i2684, 'knife')
  request.r(i2685[10], i2685[11], 0, i2684, 'cuttingBoard')
  request.r(i2685[12], i2685[13], 0, i2684, 'targetPlate')
  i2684.isOnBoard = !!i2685[14]
  i2684.targetPlateType = i2685[15]
  i2684.flyToDish = i2685[16]
  i2684.isFlyToDishAnim = !!i2685[17]
  i2684.cantCutOnFirst = !!i2685[18]
  i2684.isDone = !!i2685[19]
  i2684.onProcess = !!i2685[20]
  request.r(i2685[21], i2685[22], 0, i2684, 'itemDraggable')
  request.r(i2685[23], i2685[24], 0, i2684, 'itemClickable')
  request.r(i2685[25], i2685[26], 0, i2684, 'itemStirring')
  request.r(i2685[27], i2685[28], 0, i2684, 'itemKnifeSpriteMaskCutter')
  request.r(i2685[29], i2685[30], 0, i2684, 'itemSpriteMaskPainter')
  request.r(i2685[31], i2685[32], 0, i2684, 'itemDragSpriteMaskPainter')
  request.r(i2685[33], i2685[34], 0, i2684, 'itemMoveToTarget')
  request.r(i2685[35], i2685[36], 0, i2684, 'animator')
  i2684.itemType = i2685[37]
  request.r(i2685[38], i2685[39], 0, i2684, 'spriteRenderer')
  i2684.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2685[40], i2684.onKnifeIn)
  i2684.heartEffectScale = i2685[41]
  i2684.breakHeartEffectScale = i2685[42]
  i2684.blinkEffectScale = i2685[43]
  i2684.mergeEffectScale = i2685[44]
  i2684.playMoveToTargetFinishSound = !!i2685[45]
  i2684.moveToTargetFinishFxType = i2685[46]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2687 = data
  i2686.ambientIntensity = i2687[0]
  i2686.reflectionIntensity = i2687[1]
  i2686.ambientMode = i2687[2]
  i2686.ambientLight = new pc.Color(i2687[3], i2687[4], i2687[5], i2687[6])
  i2686.ambientSkyColor = new pc.Color(i2687[7], i2687[8], i2687[9], i2687[10])
  i2686.ambientGroundColor = new pc.Color(i2687[11], i2687[12], i2687[13], i2687[14])
  i2686.ambientEquatorColor = new pc.Color(i2687[15], i2687[16], i2687[17], i2687[18])
  i2686.fogColor = new pc.Color(i2687[19], i2687[20], i2687[21], i2687[22])
  i2686.fogEndDistance = i2687[23]
  i2686.fogStartDistance = i2687[24]
  i2686.fogDensity = i2687[25]
  i2686.fog = !!i2687[26]
  request.r(i2687[27], i2687[28], 0, i2686, 'skybox')
  i2686.fogMode = i2687[29]
  var i2689 = i2687[30]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2689[i + 0]) );
  }
  i2686.lightmaps = i2688
  i2686.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2687[31], i2686.lightProbes)
  i2686.lightmapsMode = i2687[32]
  i2686.mixedBakeMode = i2687[33]
  i2686.environmentLightingMode = i2687[34]
  i2686.ambientProbe = new pc.SphericalHarmonicsL2(i2687[35])
  i2686.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2687[36])
  i2686.useReferenceAmbientProbe = !!i2687[37]
  request.r(i2687[38], i2687[39], 0, i2686, 'customReflection')
  request.r(i2687[40], i2687[41], 0, i2686, 'defaultReflection')
  i2686.defaultReflectionMode = i2687[42]
  i2686.defaultReflectionResolution = i2687[43]
  i2686.sunLightObjectId = i2687[44]
  i2686.pixelLightCount = i2687[45]
  i2686.defaultReflectionHDR = !!i2687[46]
  i2686.hasLightDataAsset = !!i2687[47]
  i2686.hasManualGenerate = !!i2687[48]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2693 = data
  request.r(i2693[0], i2693[1], 0, i2692, 'lightmapColor')
  request.r(i2693[2], i2693[3], 0, i2692, 'lightmapDirection')
  request.r(i2693[4], i2693[5], 0, i2692, 'shadowMask')
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2694 = root || new UnityEngine.LightProbes()
  var i2695 = data
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2703 = data
  var i2705 = i2703[0]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2705[i + 0]));
  }
  i2702.ShaderCompilationErrors = i2704
  i2702.name = i2703[1]
  i2702.guid = i2703[2]
  var i2707 = i2703[3]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( i2707[i + 0] );
  }
  i2702.shaderDefinedKeywords = i2706
  var i2709 = i2703[4]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2709[i + 0]) );
  }
  i2702.passes = i2708
  var i2711 = i2703[5]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2711[i + 0]) );
  }
  i2702.usePasses = i2710
  var i2713 = i2703[6]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2713[i + 0]) );
  }
  i2702.defaultParameterValues = i2712
  request.r(i2703[7], i2703[8], 0, i2702, 'unityFallbackShader')
  i2702.readDepth = !!i2703[9]
  i2702.hasDepthOnlyPass = !!i2703[10]
  i2702.isCreatedByShaderGraph = !!i2703[11]
  i2702.disableBatching = !!i2703[12]
  i2702.compiled = !!i2703[13]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2717 = data
  i2716.shaderName = i2717[0]
  i2716.errorMessage = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2720 = root || new pc.UnityShaderPass()
  var i2721 = data
  i2720.id = i2721[0]
  i2720.subShaderIndex = i2721[1]
  i2720.name = i2721[2]
  i2720.passType = i2721[3]
  i2720.grabPassTextureName = i2721[4]
  i2720.usePass = !!i2721[5]
  i2720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[6], i2720.zTest)
  i2720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[7], i2720.zWrite)
  i2720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[8], i2720.culling)
  i2720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2721[9], i2720.blending)
  i2720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2721[10], i2720.alphaBlending)
  i2720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[11], i2720.colorWriteMask)
  i2720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[12], i2720.offsetUnits)
  i2720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[13], i2720.offsetFactor)
  i2720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[14], i2720.stencilRef)
  i2720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[15], i2720.stencilReadMask)
  i2720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[16], i2720.stencilWriteMask)
  i2720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2721[17], i2720.stencilOp)
  i2720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2721[18], i2720.stencilOpFront)
  i2720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2721[19], i2720.stencilOpBack)
  var i2723 = i2721[20]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2723[i + 0]) );
  }
  i2720.tags = i2722
  var i2725 = i2721[21]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2720.passDefinedKeywords = i2724
  var i2727 = i2721[22]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2727[i + 0]) );
  }
  i2720.passDefinedKeywordGroups = i2726
  var i2729 = i2721[23]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2729[i + 0]) );
  }
  i2720.variants = i2728
  var i2731 = i2721[24]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2731[i + 0]) );
  }
  i2720.excludedVariants = i2730
  i2720.hasDepthReader = !!i2721[25]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2733 = data
  i2732.val = i2733[0]
  i2732.name = i2733[1]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2735 = data
  i2734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[0], i2734.src)
  i2734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[1], i2734.dst)
  i2734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[2], i2734.op)
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2737 = data
  i2736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2737[0], i2736.pass)
  i2736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2737[1], i2736.fail)
  i2736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2737[2], i2736.zFail)
  i2736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2737[3], i2736.comp)
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2741 = data
  i2740.name = i2741[0]
  i2740.value = i2741[1]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2744.keywords = i2746
  i2744.hasDiscard = !!i2745[1]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2751 = data
  i2750.passId = i2751[0]
  i2750.subShaderIndex = i2751[1]
  var i2753 = i2751[2]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( i2753[i + 0] );
  }
  i2750.keywords = i2752
  i2750.vertexProgram = i2751[3]
  i2750.fragmentProgram = i2751[4]
  i2750.exportedForWebGl2 = !!i2751[5]
  i2750.readDepth = !!i2751[6]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'shader')
  i2756.pass = i2757[2]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2761 = data
  i2760.name = i2761[0]
  i2760.type = i2761[1]
  i2760.value = new pc.Vec4( i2761[2], i2761[3], i2761[4], i2761[5] )
  i2760.textureValue = i2761[6]
  i2760.shaderPropertyFlag = i2761[7]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2763 = data
  i2762.name = i2763[0]
  request.r(i2763[1], i2763[2], 0, i2762, 'texture')
  i2762.aabb = i2763[3]
  i2762.vertices = i2763[4]
  i2762.triangles = i2763[5]
  i2762.textureRect = UnityEngine.Rect.MinMaxRect(i2763[6], i2763[7], i2763[8], i2763[9])
  i2762.packedRect = UnityEngine.Rect.MinMaxRect(i2763[10], i2763[11], i2763[12], i2763[13])
  i2762.border = new pc.Vec4( i2763[14], i2763[15], i2763[16], i2763[17] )
  i2762.transparency = i2763[18]
  i2762.bounds = i2763[19]
  i2762.pixelsPerUnit = i2763[20]
  i2762.textureWidth = i2763[21]
  i2762.textureHeight = i2763[22]
  i2762.nativeSize = new pc.Vec2( i2763[23], i2763[24] )
  i2762.pivot = new pc.Vec2( i2763[25], i2763[26] )
  i2762.textureRectOffset = new pc.Vec2( i2763[27], i2763[28] )
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2765 = data
  i2764.name = i2765[0]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2767 = data
  i2766.name = i2767[0]
  i2766.wrapMode = i2767[1]
  i2766.isLooping = !!i2767[2]
  i2766.length = i2767[3]
  var i2769 = i2767[4]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2769[i + 0]) );
  }
  i2766.curves = i2768
  var i2771 = i2767[5]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2771[i + 0]) );
  }
  i2766.events = i2770
  i2766.halfPrecision = !!i2767[6]
  i2766._frameRate = i2767[7]
  i2766.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2767[8], i2766.localBounds)
  i2766.hasMuscleCurves = !!i2767[9]
  var i2773 = i2767[10]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( i2773[i + 0] );
  }
  i2766.clipMuscleConstant = i2772
  i2766.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2767[11], i2766.clipBindingConstant)
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2777 = data
  i2776.path = i2777[0]
  i2776.hash = i2777[1]
  i2776.componentType = i2777[2]
  i2776.property = i2777[3]
  i2776.keys = i2777[4]
  var i2779 = i2777[5]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2779[i + 0]) );
  }
  i2776.objectReferenceKeys = i2778
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2783 = data
  i2782.time = i2783[0]
  request.r(i2783[1], i2783[2], 0, i2782, 'value')
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2787 = data
  i2786.functionName = i2787[0]
  i2786.floatParameter = i2787[1]
  i2786.intParameter = i2787[2]
  i2786.stringParameter = i2787[3]
  request.r(i2787[4], i2787[5], 0, i2786, 'objectReferenceParameter')
  i2786.time = i2787[6]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2789 = data
  i2788.center = new pc.Vec3( i2789[0], i2789[1], i2789[2] )
  i2788.extends = new pc.Vec3( i2789[3], i2789[4], i2789[5] )
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2793 = data
  var i2795 = i2793[0]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( i2795[i + 0] );
  }
  i2792.genericBindings = i2794
  var i2797 = i2793[1]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( i2797[i + 0] );
  }
  i2792.pptrCurveMapping = i2796
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2799 = data
  i2798.name = i2799[0]
  var i2801 = i2799[1]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2801[i + 0]) );
  }
  i2798.layers = i2800
  var i2803 = i2799[2]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2803[i + 0]) );
  }
  i2798.parameters = i2802
  i2798.animationClips = i2799[3]
  i2798.avatarUnsupported = i2799[4]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2807 = data
  i2806.name = i2807[0]
  i2806.defaultWeight = i2807[1]
  i2806.blendingMode = i2807[2]
  i2806.avatarMask = i2807[3]
  i2806.syncedLayerIndex = i2807[4]
  i2806.syncedLayerAffectsTiming = !!i2807[5]
  i2806.syncedLayers = i2807[6]
  i2806.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2807[7], i2806.stateMachine)
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2809 = data
  i2808.id = i2809[0]
  i2808.name = i2809[1]
  i2808.path = i2809[2]
  var i2811 = i2809[3]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2811[i + 0]) );
  }
  i2808.states = i2810
  var i2813 = i2809[4]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2813[i + 0]) );
  }
  i2808.machines = i2812
  var i2815 = i2809[5]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2815[i + 0]) );
  }
  i2808.entryStateTransitions = i2814
  var i2817 = i2809[6]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2817[i + 0]) );
  }
  i2808.exitStateTransitions = i2816
  var i2819 = i2809[7]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2819[i + 0]) );
  }
  i2808.anyStateTransitions = i2818
  i2808.defaultStateId = i2809[8]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2823 = data
  i2822.id = i2823[0]
  i2822.name = i2823[1]
  i2822.cycleOffset = i2823[2]
  i2822.cycleOffsetParameter = i2823[3]
  i2822.cycleOffsetParameterActive = !!i2823[4]
  i2822.mirror = !!i2823[5]
  i2822.mirrorParameter = i2823[6]
  i2822.mirrorParameterActive = !!i2823[7]
  i2822.motionId = i2823[8]
  i2822.nameHash = i2823[9]
  i2822.fullPathHash = i2823[10]
  i2822.speed = i2823[11]
  i2822.speedParameter = i2823[12]
  i2822.speedParameterActive = !!i2823[13]
  i2822.tag = i2823[14]
  i2822.tagHash = i2823[15]
  i2822.writeDefaultValues = !!i2823[16]
  var i2825 = i2823[17]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 2, i2824, '')
  }
  i2822.behaviours = i2824
  var i2827 = i2823[18]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2827[i + 0]) );
  }
  i2822.transitions = i2826
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2833 = data
  i2832.fullPath = i2833[0]
  i2832.canTransitionToSelf = !!i2833[1]
  i2832.duration = i2833[2]
  i2832.exitTime = i2833[3]
  i2832.hasExitTime = !!i2833[4]
  i2832.hasFixedDuration = !!i2833[5]
  i2832.interruptionSource = i2833[6]
  i2832.offset = i2833[7]
  i2832.orderedInterruption = !!i2833[8]
  i2832.destinationStateId = i2833[9]
  i2832.isExit = !!i2833[10]
  i2832.mute = !!i2833[11]
  i2832.solo = !!i2833[12]
  var i2835 = i2833[13]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2835[i + 0]) );
  }
  i2832.conditions = i2834
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2841 = data
  i2840.destinationStateId = i2841[0]
  i2840.isExit = !!i2841[1]
  i2840.mute = !!i2841[2]
  i2840.solo = !!i2841[3]
  var i2843 = i2841[4]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2843[i + 0]) );
  }
  i2840.conditions = i2842
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2847 = data
  i2846.defaultBool = !!i2847[0]
  i2846.defaultFloat = i2847[1]
  i2846.defaultInt = i2847[2]
  i2846.name = i2847[3]
  i2846.nameHash = i2847[4]
  i2846.type = i2847[5]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2851 = data
  i2850.mode = i2851[0]
  i2850.parameter = i2851[1]
  i2850.threshold = i2851[2]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.bytes64 = i2853[1]
  i2852.data = i2853[2]
  return i2852
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2855 = data
  i2854.normalStyle = i2855[0]
  i2854.normalSpacingOffset = i2855[1]
  i2854.boldStyle = i2855[2]
  i2854.boldSpacing = i2855[3]
  i2854.italicStyle = i2855[4]
  i2854.tabSize = i2855[5]
  request.r(i2855[6], i2855[7], 0, i2854, 'atlas')
  i2854.m_SourceFontFileGUID = i2855[8]
  i2854.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2855[9], i2854.m_CreationSettings)
  request.r(i2855[10], i2855[11], 0, i2854, 'm_SourceFontFile')
  i2854.m_SourceFontFilePath = i2855[12]
  i2854.m_AtlasPopulationMode = i2855[13]
  i2854.InternalDynamicOS = !!i2855[14]
  var i2857 = i2855[15]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('UnityEngine.TextCore.Glyph', i2857[i + 0]));
  }
  i2854.m_GlyphTable = i2856
  var i2859 = i2855[16]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(request.d('TMPro.TMP_Character', i2859[i + 0]));
  }
  i2854.m_CharacterTable = i2858
  var i2861 = i2855[17]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 2, i2860, '')
  }
  i2854.m_AtlasTextures = i2860
  i2854.m_AtlasTextureIndex = i2855[18]
  i2854.m_IsMultiAtlasTexturesEnabled = !!i2855[19]
  i2854.m_GetFontFeatures = !!i2855[20]
  i2854.m_ClearDynamicDataOnBuild = !!i2855[21]
  i2854.m_AtlasWidth = i2855[22]
  i2854.m_AtlasHeight = i2855[23]
  i2854.m_AtlasPadding = i2855[24]
  i2854.m_AtlasRenderMode = i2855[25]
  var i2863 = i2855[26]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.add(request.d('UnityEngine.TextCore.GlyphRect', i2863[i + 0]));
  }
  i2854.m_UsedGlyphRects = i2862
  var i2865 = i2855[27]
  var i2864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.add(request.d('UnityEngine.TextCore.GlyphRect', i2865[i + 0]));
  }
  i2854.m_FreeGlyphRects = i2864
  i2854.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2855[28], i2854.m_FontFeatureTable)
  i2854.m_ShouldReimportFontFeatures = !!i2855[29]
  var i2867 = i2855[30]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2867.length; i += 2) {
  request.r(i2867[i + 0], i2867[i + 1], 1, i2866, '')
  }
  i2854.m_FallbackFontAssetTable = i2866
  var i2869 = i2855[31]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('TMPro.TMP_FontWeightPair', i2869[i + 0]) );
  }
  i2854.m_FontWeightTable = i2868
  var i2871 = i2855[32]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('TMPro.TMP_FontWeightPair', i2871[i + 0]) );
  }
  i2854.fontWeights = i2870
  i2854.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2855[33], i2854.m_fontInfo)
  var i2873 = i2855[34]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('TMPro.TMP_Glyph', i2873[i + 0]));
  }
  i2854.m_glyphInfoList = i2872
  i2854.m_KerningTable = request.d('TMPro.KerningTable', i2855[35], i2854.m_KerningTable)
  var i2875 = i2855[36]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2875.length; i += 2) {
  request.r(i2875[i + 0], i2875[i + 1], 1, i2874, '')
  }
  i2854.fallbackFontAssets = i2874
  i2854.m_Version = i2855[37]
  i2854.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2855[38], i2854.m_FaceInfo)
  request.r(i2855[39], i2855[40], 0, i2854, 'm_Material')
  return i2854
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2877 = data
  i2876.sourceFontFileName = i2877[0]
  i2876.sourceFontFileGUID = i2877[1]
  i2876.faceIndex = i2877[2]
  i2876.pointSizeSamplingMode = i2877[3]
  i2876.pointSize = i2877[4]
  i2876.padding = i2877[5]
  i2876.paddingMode = i2877[6]
  i2876.packingMode = i2877[7]
  i2876.atlasWidth = i2877[8]
  i2876.atlasHeight = i2877[9]
  i2876.characterSetSelectionMode = i2877[10]
  i2876.characterSequence = i2877[11]
  i2876.referencedFontAssetGUID = i2877[12]
  i2876.referencedTextAssetGUID = i2877[13]
  i2876.fontStyle = i2877[14]
  i2876.fontStyleModifier = i2877[15]
  i2876.renderMode = i2877[16]
  i2876.includeFontFeatures = !!i2877[17]
  return i2876
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2880 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2881 = data
  i2880.m_Index = i2881[0]
  i2880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2881[1], i2880.m_Metrics)
  i2880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2881[2], i2880.m_GlyphRect)
  i2880.m_Scale = i2881[3]
  i2880.m_AtlasIndex = i2881[4]
  i2880.m_ClassDefinitionType = i2881[5]
  return i2880
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2882 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2883 = data
  i2882.m_Width = i2883[0]
  i2882.m_Height = i2883[1]
  i2882.m_HorizontalBearingX = i2883[2]
  i2882.m_HorizontalBearingY = i2883[3]
  i2882.m_HorizontalAdvance = i2883[4]
  return i2882
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2885 = data
  i2884.m_X = i2885[0]
  i2884.m_Y = i2885[1]
  i2884.m_Width = i2885[2]
  i2884.m_Height = i2885[3]
  return i2884
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.TMP_Character' )
  var i2889 = data
  i2888.m_ElementType = i2889[0]
  i2888.m_Unicode = i2889[1]
  i2888.m_GlyphIndex = i2889[2]
  i2888.m_Scale = i2889[3]
  return i2888
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.add(request.d('TMPro.MultipleSubstitutionRecord', i2897[i + 0]));
  }
  i2894.m_MultipleSubstitutionRecords = i2896
  var i2899 = i2895[1]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.add(request.d('TMPro.LigatureSubstitutionRecord', i2899[i + 0]));
  }
  i2894.m_LigatureSubstitutionRecords = i2898
  var i2901 = i2895[2]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2901[i + 0]));
  }
  i2894.m_GlyphPairAdjustmentRecords = i2900
  var i2903 = i2895[3]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2903[i + 0]));
  }
  i2894.m_MarkToBaseAdjustmentRecords = i2902
  var i2905 = i2895[4]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2905[i + 0]));
  }
  i2894.m_MarkToMarkAdjustmentRecords = i2904
  return i2894
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2909 = data
  i2908.m_TargetGlyphID = i2909[0]
  i2908.m_SubstituteGlyphIDs = i2909[1]
  return i2908
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2912 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2913 = data
  i2912.m_ComponentGlyphIDs = i2913[0]
  i2912.m_LigatureGlyphID = i2913[1]
  return i2912
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2916 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2917 = data
  i2916.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2917[0], i2916.m_FirstAdjustmentRecord)
  i2916.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2917[1], i2916.m_SecondAdjustmentRecord)
  i2916.m_FeatureLookupFlags = i2917[2]
  return i2916
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2921 = data
  i2920.m_BaseGlyphID = i2921[0]
  i2920.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2921[1], i2920.m_BaseGlyphAnchorPoint)
  i2920.m_MarkGlyphID = i2921[2]
  i2920.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2921[3], i2920.m_MarkPositionAdjustment)
  return i2920
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2924 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2925 = data
  i2924.m_BaseMarkGlyphID = i2925[0]
  i2924.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2925[1], i2924.m_BaseMarkGlyphAnchorPoint)
  i2924.m_CombiningMarkGlyphID = i2925[2]
  i2924.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2925[3], i2924.m_CombiningMarkPositionAdjustment)
  return i2924
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'regularTypeface')
  request.r(i2931[2], i2931[3], 0, i2930, 'italicTypeface')
  return i2930
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2933 = data
  i2932.Name = i2933[0]
  i2932.PointSize = i2933[1]
  i2932.Scale = i2933[2]
  i2932.CharacterCount = i2933[3]
  i2932.LineHeight = i2933[4]
  i2932.Baseline = i2933[5]
  i2932.Ascender = i2933[6]
  i2932.CapHeight = i2933[7]
  i2932.Descender = i2933[8]
  i2932.CenterLine = i2933[9]
  i2932.SuperscriptOffset = i2933[10]
  i2932.SubscriptOffset = i2933[11]
  i2932.SubSize = i2933[12]
  i2932.Underline = i2933[13]
  i2932.UnderlineThickness = i2933[14]
  i2932.strikethrough = i2933[15]
  i2932.strikethroughThickness = i2933[16]
  i2932.TabWidth = i2933[17]
  i2932.Padding = i2933[18]
  i2932.AtlasWidth = i2933[19]
  i2932.AtlasHeight = i2933[20]
  return i2932
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2937 = data
  i2936.id = i2937[0]
  i2936.x = i2937[1]
  i2936.y = i2937[2]
  i2936.width = i2937[3]
  i2936.height = i2937[4]
  i2936.xOffset = i2937[5]
  i2936.yOffset = i2937[6]
  i2936.xAdvance = i2937[7]
  i2936.scale = i2937[8]
  return i2936
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.KerningTable' )
  var i2939 = data
  var i2941 = i2939[0]
  var i2940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.add(request.d('TMPro.KerningPair', i2941[i + 0]));
  }
  i2938.kerningPairs = i2940
  return i2938
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.KerningPair' )
  var i2945 = data
  i2944.xOffset = i2945[0]
  i2944.m_FirstGlyph = i2945[1]
  i2944.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2945[2], i2944.m_FirstGlyphAdjustments)
  i2944.m_SecondGlyph = i2945[3]
  i2944.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2945[4], i2944.m_SecondGlyphAdjustments)
  i2944.m_IgnoreSpacingAdjustments = !!i2945[5]
  return i2944
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2947 = data
  i2946.m_FaceIndex = i2947[0]
  i2946.m_FamilyName = i2947[1]
  i2946.m_StyleName = i2947[2]
  i2946.m_PointSize = i2947[3]
  i2946.m_Scale = i2947[4]
  i2946.m_UnitsPerEM = i2947[5]
  i2946.m_LineHeight = i2947[6]
  i2946.m_AscentLine = i2947[7]
  i2946.m_CapLine = i2947[8]
  i2946.m_MeanLine = i2947[9]
  i2946.m_Baseline = i2947[10]
  i2946.m_DescentLine = i2947[11]
  i2946.m_SuperscriptOffset = i2947[12]
  i2946.m_SuperscriptSize = i2947[13]
  i2946.m_SubscriptOffset = i2947[14]
  i2946.m_SubscriptSize = i2947[15]
  i2946.m_UnderlineOffset = i2947[16]
  i2946.m_UnderlineThickness = i2947[17]
  i2946.m_StrikethroughOffset = i2947[18]
  i2946.m_StrikethroughThickness = i2947[19]
  i2946.m_TabWidth = i2947[20]
  return i2946
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2948 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2949 = data
  var i2951 = i2949[0]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 2) {
  request.r(i2951[i + 0], i2951[i + 1], 2, i2950, '')
  }
  i2948.atlasAssets = i2950
  i2948.scale = i2949[1]
  request.r(i2949[2], i2949[3], 0, i2948, 'skeletonJSON')
  i2948.isUpgradingBlendModeMaterials = !!i2949[4]
  i2948.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2949[5], i2948.blendModeMaterials)
  var i2953 = i2949[6]
  var i2952 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2953.length; i += 2) {
  request.r(i2953[i + 0], i2953[i + 1], 1, i2952, '')
  }
  i2948.skeletonDataModifiers = i2952
  var i2955 = i2949[7]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( i2955[i + 0] );
  }
  i2948.fromAnimation = i2954
  var i2957 = i2949[8]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( i2957[i + 0] );
  }
  i2948.toAnimation = i2956
  i2948.duration = i2949[9]
  i2948.defaultMix = i2949[10]
  request.r(i2949[11], i2949[12], 0, i2948, 'controller')
  return i2948
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2960 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2961 = data
  i2960.applyAdditiveMaterial = !!i2961[0]
  var i2963 = i2961[1]
  var i2962 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2963[i + 0]));
  }
  i2960.additiveMaterials = i2962
  var i2965 = i2961[2]
  var i2964 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2965[i + 0]));
  }
  i2960.multiplyMaterials = i2964
  var i2967 = i2961[3]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2967[i + 0]));
  }
  i2960.screenMaterials = i2966
  i2960.requiresBlendModeMaterials = !!i2961[4]
  return i2960
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2970 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2971 = data
  i2970.pageName = i2971[0]
  request.r(i2971[1], i2971[2], 0, i2970, 'material')
  return i2970
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2974 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2975 = data
  request.r(i2975[0], i2975[1], 0, i2974, 'atlasFile')
  var i2977 = i2975[2]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 2) {
  request.r(i2977[i + 0], i2977[i + 1], 2, i2976, '')
  }
  i2974.materials = i2976
  return i2974
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2978 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2979 = data
  i2978.useSafeMode = !!i2979[0]
  i2978.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2979[1], i2978.safeModeOptions)
  i2978.timeScale = i2979[2]
  i2978.unscaledTimeScale = i2979[3]
  i2978.useSmoothDeltaTime = !!i2979[4]
  i2978.maxSmoothUnscaledTime = i2979[5]
  i2978.rewindCallbackMode = i2979[6]
  i2978.showUnityEditorReport = !!i2979[7]
  i2978.logBehaviour = i2979[8]
  i2978.drawGizmos = !!i2979[9]
  i2978.defaultRecyclable = !!i2979[10]
  i2978.defaultAutoPlay = i2979[11]
  i2978.defaultUpdateType = i2979[12]
  i2978.defaultTimeScaleIndependent = !!i2979[13]
  i2978.defaultEaseType = i2979[14]
  i2978.defaultEaseOvershootOrAmplitude = i2979[15]
  i2978.defaultEasePeriod = i2979[16]
  i2978.defaultAutoKill = !!i2979[17]
  i2978.defaultLoopType = i2979[18]
  i2978.debugMode = !!i2979[19]
  i2978.debugStoreTargetId = !!i2979[20]
  i2978.showPreviewPanel = !!i2979[21]
  i2978.storeSettingsLocation = i2979[22]
  i2978.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2979[23], i2978.modules)
  i2978.createASMDEF = !!i2979[24]
  i2978.showPlayingTweens = !!i2979[25]
  i2978.showPausedTweens = !!i2979[26]
  return i2978
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2980 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2981 = data
  i2980.logBehaviour = i2981[0]
  i2980.nestedTweenFailureBehaviour = i2981[1]
  return i2980
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2982 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2983 = data
  i2982.showPanel = !!i2983[0]
  i2982.audioEnabled = !!i2983[1]
  i2982.physicsEnabled = !!i2983[2]
  i2982.physics2DEnabled = !!i2983[3]
  i2982.spriteEnabled = !!i2983[4]
  i2982.uiEnabled = !!i2983[5]
  i2982.uiToolkitEnabled = !!i2983[6]
  i2982.textMeshProEnabled = !!i2983[7]
  i2982.tk2DEnabled = !!i2983[8]
  i2982.deAudioEnabled = !!i2983[9]
  i2982.deUnityExtendedEnabled = !!i2983[10]
  i2982.epoOutlineEnabled = !!i2983[11]
  return i2982
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2984 = root || request.c( 'TMPro.TMP_Settings' )
  var i2985 = data
  i2984.assetVersion = i2985[0]
  i2984.m_TextWrappingMode = i2985[1]
  i2984.m_enableKerning = !!i2985[2]
  var i2987 = i2985[3]
  var i2986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.add(i2987[i + 0]);
  }
  i2984.m_ActiveFontFeatures = i2986
  i2984.m_enableExtraPadding = !!i2985[4]
  i2984.m_enableTintAllSprites = !!i2985[5]
  i2984.m_enableParseEscapeCharacters = !!i2985[6]
  i2984.m_EnableRaycastTarget = !!i2985[7]
  i2984.m_GetFontFeaturesAtRuntime = !!i2985[8]
  i2984.m_missingGlyphCharacter = i2985[9]
  i2984.m_ClearDynamicDataOnBuild = !!i2985[10]
  i2984.m_warningsDisabled = !!i2985[11]
  request.r(i2985[12], i2985[13], 0, i2984, 'm_defaultFontAsset')
  i2984.m_defaultFontAssetPath = i2985[14]
  i2984.m_defaultFontSize = i2985[15]
  i2984.m_defaultAutoSizeMinRatio = i2985[16]
  i2984.m_defaultAutoSizeMaxRatio = i2985[17]
  i2984.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2985[18], i2985[19] )
  i2984.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2985[20], i2985[21] )
  i2984.m_autoSizeTextContainer = !!i2985[22]
  i2984.m_IsTextObjectScaleStatic = !!i2985[23]
  var i2989 = i2985[24]
  var i2988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2989.length; i += 2) {
  request.r(i2989[i + 0], i2989[i + 1], 1, i2988, '')
  }
  i2984.m_fallbackFontAssets = i2988
  i2984.m_matchMaterialPreset = !!i2985[25]
  i2984.m_HideSubTextObjects = !!i2985[26]
  request.r(i2985[27], i2985[28], 0, i2984, 'm_defaultSpriteAsset')
  i2984.m_defaultSpriteAssetPath = i2985[29]
  i2984.m_enableEmojiSupport = !!i2985[30]
  i2984.m_MissingCharacterSpriteUnicode = i2985[31]
  var i2991 = i2985[32]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2991.length; i += 2) {
  request.r(i2991[i + 0], i2991[i + 1], 1, i2990, '')
  }
  i2984.m_EmojiFallbackTextAssets = i2990
  i2984.m_defaultColorGradientPresetsPath = i2985[33]
  request.r(i2985[34], i2985[35], 0, i2984, 'm_defaultStyleSheet')
  i2984.m_StyleSheetsResourcePath = i2985[36]
  request.r(i2985[37], i2985[38], 0, i2984, 'm_leadingCharacters')
  request.r(i2985[39], i2985[40], 0, i2984, 'm_followingCharacters')
  i2984.m_UseModernHangulLineBreakingRules = !!i2985[41]
  return i2984
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'spriteSheet')
  var i2997 = i2995[2]
  var i2996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.add(request.d('TMPro.TMP_Sprite', i2997[i + 0]));
  }
  i2994.spriteInfoList = i2996
  var i2999 = i2995[3]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 1, i2998, '')
  }
  i2994.fallbackSpriteAssets = i2998
  var i3001 = i2995[4]
  var i3000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.add(request.d('TMPro.TMP_SpriteCharacter', i3001[i + 0]));
  }
  i2994.m_SpriteCharacterTable = i3000
  var i3003 = i2995[5]
  var i3002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.add(request.d('TMPro.TMP_SpriteGlyph', i3003[i + 0]));
  }
  i2994.m_GlyphTable = i3002
  i2994.m_Version = i2995[6]
  i2994.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2995[7], i2994.m_FaceInfo)
  request.r(i2995[8], i2995[9], 0, i2994, 'm_Material')
  return i2994
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3006 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3007 = data
  i3006.name = i3007[0]
  i3006.hashCode = i3007[1]
  i3006.unicode = i3007[2]
  i3006.pivot = new pc.Vec2( i3007[3], i3007[4] )
  request.r(i3007[5], i3007[6], 0, i3006, 'sprite')
  i3006.id = i3007[7]
  i3006.x = i3007[8]
  i3006.y = i3007[9]
  i3006.width = i3007[10]
  i3006.height = i3007[11]
  i3006.xOffset = i3007[12]
  i3006.yOffset = i3007[13]
  i3006.xAdvance = i3007[14]
  i3006.scale = i3007[15]
  return i3006
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3012 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3013 = data
  i3012.m_Name = i3013[0]
  i3012.m_ElementType = i3013[1]
  i3012.m_Unicode = i3013[2]
  i3012.m_GlyphIndex = i3013[3]
  i3012.m_Scale = i3013[4]
  return i3012
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3016 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3017 = data
  request.r(i3017[0], i3017[1], 0, i3016, 'sprite')
  i3016.m_Index = i3017[2]
  i3016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3017[3], i3016.m_Metrics)
  i3016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3017[4], i3016.m_GlyphRect)
  i3016.m_Scale = i3017[5]
  i3016.m_AtlasIndex = i3017[6]
  i3016.m_ClassDefinitionType = i3017[7]
  return i3016
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3019 = data
  var i3021 = i3019[0]
  var i3020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.add(request.d('TMPro.TMP_Style', i3021[i + 0]));
  }
  i3018.m_StyleList = i3020
  return i3018
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3024 = root || request.c( 'TMPro.TMP_Style' )
  var i3025 = data
  i3024.m_Name = i3025[0]
  i3024.m_HashCode = i3025[1]
  i3024.m_OpeningDefinition = i3025[2]
  i3024.m_ClosingDefinition = i3025[3]
  i3024.m_OpeningTagArray = i3025[4]
  i3024.m_ClosingTagArray = i3025[5]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3027 = data
  var i3029 = i3027[0]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3029[i + 0]) );
  }
  i3026.files = i3028
  i3026.componentToPrefabIds = i3027[1]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3033 = data
  i3032.path = i3033[0]
  request.r(i3033[1], i3033[2], 0, i3032, 'unityObject')
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3035 = data
  var i3037 = i3035[0]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3037[i + 0]) );
  }
  i3034.scriptsExecutionOrder = i3036
  var i3039 = i3035[1]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3039[i + 0]) );
  }
  i3034.sortingLayers = i3038
  var i3041 = i3035[2]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3041[i + 0]) );
  }
  i3034.cullingLayers = i3040
  i3034.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3035[3], i3034.timeSettings)
  i3034.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3035[4], i3034.physicsSettings)
  i3034.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3035[5], i3034.physics2DSettings)
  i3034.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3035[6], i3034.qualitySettings)
  i3034.enableRealtimeShadows = !!i3035[7]
  i3034.enableAutoInstancing = !!i3035[8]
  i3034.enableStaticBatching = !!i3035[9]
  i3034.enableDynamicBatching = !!i3035[10]
  i3034.lightmapEncodingQuality = i3035[11]
  i3034.desiredColorSpace = i3035[12]
  var i3043 = i3035[13]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.push( i3043[i + 0] );
  }
  i3034.allTags = i3042
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3047 = data
  i3046.name = i3047[0]
  i3046.value = i3047[1]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3051 = data
  i3050.id = i3051[0]
  i3050.name = i3051[1]
  i3050.value = i3051[2]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3055 = data
  i3054.id = i3055[0]
  i3054.name = i3055[1]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3057 = data
  i3056.fixedDeltaTime = i3057[0]
  i3056.maximumDeltaTime = i3057[1]
  i3056.timeScale = i3057[2]
  i3056.maximumParticleTimestep = i3057[3]
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3059 = data
  i3058.gravity = new pc.Vec3( i3059[0], i3059[1], i3059[2] )
  i3058.defaultSolverIterations = i3059[3]
  i3058.bounceThreshold = i3059[4]
  i3058.autoSyncTransforms = !!i3059[5]
  i3058.autoSimulation = !!i3059[6]
  var i3061 = i3059[7]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3061[i + 0]) );
  }
  i3058.collisionMatrix = i3060
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3065 = data
  i3064.enabled = !!i3065[0]
  i3064.layerId = i3065[1]
  i3064.otherLayerId = i3065[2]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3067 = data
  request.r(i3067[0], i3067[1], 0, i3066, 'material')
  i3066.gravity = new pc.Vec2( i3067[2], i3067[3] )
  i3066.positionIterations = i3067[4]
  i3066.velocityIterations = i3067[5]
  i3066.velocityThreshold = i3067[6]
  i3066.maxLinearCorrection = i3067[7]
  i3066.maxAngularCorrection = i3067[8]
  i3066.maxTranslationSpeed = i3067[9]
  i3066.maxRotationSpeed = i3067[10]
  i3066.baumgarteScale = i3067[11]
  i3066.baumgarteTOIScale = i3067[12]
  i3066.timeToSleep = i3067[13]
  i3066.linearSleepTolerance = i3067[14]
  i3066.angularSleepTolerance = i3067[15]
  i3066.defaultContactOffset = i3067[16]
  i3066.autoSimulation = !!i3067[17]
  i3066.queriesHitTriggers = !!i3067[18]
  i3066.queriesStartInColliders = !!i3067[19]
  i3066.callbacksOnDisable = !!i3067[20]
  i3066.reuseCollisionCallbacks = !!i3067[21]
  i3066.autoSyncTransforms = !!i3067[22]
  var i3069 = i3067[23]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3069[i + 0]) );
  }
  i3066.collisionMatrix = i3068
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3073 = data
  i3072.enabled = !!i3073[0]
  i3072.layerId = i3073[1]
  i3072.otherLayerId = i3073[2]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3077[i + 0]) );
  }
  i3074.qualityLevels = i3076
  var i3079 = i3075[1]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( i3079[i + 0] );
  }
  i3074.names = i3078
  i3074.shadows = i3075[2]
  i3074.anisotropicFiltering = i3075[3]
  i3074.antiAliasing = i3075[4]
  i3074.lodBias = i3075[5]
  i3074.shadowCascades = i3075[6]
  i3074.shadowDistance = i3075[7]
  i3074.shadowmaskMode = i3075[8]
  i3074.shadowProjection = i3075[9]
  i3074.shadowResolution = i3075[10]
  i3074.softParticles = !!i3075[11]
  i3074.softVegetation = !!i3075[12]
  i3074.activeColorSpace = i3075[13]
  i3074.desiredColorSpace = i3075[14]
  i3074.masterTextureLimit = i3075[15]
  i3074.maxQueuedFrames = i3075[16]
  i3074.particleRaycastBudget = i3075[17]
  i3074.pixelLightCount = i3075[18]
  i3074.realtimeReflectionProbes = !!i3075[19]
  i3074.shadowCascade2Split = i3075[20]
  i3074.shadowCascade4Split = new pc.Vec3( i3075[21], i3075[22], i3075[23] )
  i3074.streamingMipmapsActive = !!i3075[24]
  i3074.vSyncCount = i3075[25]
  i3074.asyncUploadBufferSize = i3075[26]
  i3074.asyncUploadTimeSlice = i3075[27]
  i3074.billboardsFaceCameraPosition = !!i3075[28]
  i3074.shadowNearPlaneOffset = i3075[29]
  i3074.streamingMipmapsMemoryBudget = i3075[30]
  i3074.maximumLODLevel = i3075[31]
  i3074.streamingMipmapsAddAllCameras = !!i3075[32]
  i3074.streamingMipmapsMaxLevelReduction = i3075[33]
  i3074.streamingMipmapsRenderersPerFrame = i3075[34]
  i3074.resolutionScalingFixedDPIFactor = i3075[35]
  i3074.streamingMipmapsMaxFileIORequests = i3075[36]
  i3074.currentQualityLevel = i3075[37]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3085 = data
  i3084.weight = i3085[0]
  i3084.vertices = i3085[1]
  i3084.normals = i3085[2]
  i3084.tangents = i3085[3]
  return i3084
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3086 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3087 = data
  i3086.m_GlyphIndex = i3087[0]
  i3086.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3087[1], i3086.m_GlyphValueRecord)
  return i3086
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3088 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3089 = data
  i3088.m_XCoordinate = i3089[0]
  i3088.m_YCoordinate = i3089[1]
  return i3088
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3090 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3091 = data
  i3090.m_XPositionAdjustment = i3091[0]
  i3090.m_YPositionAdjustment = i3091[1]
  return i3090
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3092 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3093 = data
  i3092.xPlacement = i3093[0]
  i3092.yPlacement = i3093[1]
  i3092.xAdvance = i3093[2]
  i3092.yAdvance = i3093[3]
  return i3092
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3094 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3095 = data
  i3094.m_XPlacement = i3095[0]
  i3094.m_YPlacement = i3095[1]
  i3094.m_XAdvance = i3095[2]
  i3094.m_YAdvance = i3095[3]
  return i3094
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

Deserializers.buildID = "5e8c23b6-0a30-4042-80fd-02493de7c830";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

