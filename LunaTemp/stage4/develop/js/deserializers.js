var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i10348 = root || request.c( 'UnityEngine.JointSpring' )
  var i10349 = data
  i10348.spring = i10349[0]
  i10348.damper = i10349[1]
  i10348.targetPosition = i10349[2]
  return i10348
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i10350 = root || request.c( 'UnityEngine.JointMotor' )
  var i10351 = data
  i10350.m_TargetVelocity = i10351[0]
  i10350.m_Force = i10351[1]
  i10350.m_FreeSpin = i10351[2]
  return i10350
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i10352 = root || request.c( 'UnityEngine.JointLimits' )
  var i10353 = data
  i10352.m_Min = i10353[0]
  i10352.m_Max = i10353[1]
  i10352.m_Bounciness = i10353[2]
  i10352.m_BounceMinVelocity = i10353[3]
  i10352.m_ContactDistance = i10353[4]
  i10352.minBounce = i10353[5]
  i10352.maxBounce = i10353[6]
  return i10352
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i10354 = root || request.c( 'UnityEngine.JointDrive' )
  var i10355 = data
  i10354.m_PositionSpring = i10355[0]
  i10354.m_PositionDamper = i10355[1]
  i10354.m_MaximumForce = i10355[2]
  i10354.m_UseAcceleration = i10355[3]
  return i10354
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i10356 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i10357 = data
  i10356.m_Spring = i10357[0]
  i10356.m_Damper = i10357[1]
  return i10356
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i10358 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i10359 = data
  i10358.m_Limit = i10359[0]
  i10358.m_Bounciness = i10359[1]
  i10358.m_ContactDistance = i10359[2]
  return i10358
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i10360 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i10361 = data
  i10360.m_ExtremumSlip = i10361[0]
  i10360.m_ExtremumValue = i10361[1]
  i10360.m_AsymptoteSlip = i10361[2]
  i10360.m_AsymptoteValue = i10361[3]
  i10360.m_Stiffness = i10361[4]
  return i10360
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i10362 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i10363 = data
  i10362.m_LowerAngle = i10363[0]
  i10362.m_UpperAngle = i10363[1]
  return i10362
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i10364 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i10365 = data
  i10364.m_MotorSpeed = i10365[0]
  i10364.m_MaximumMotorTorque = i10365[1]
  return i10364
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i10366 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i10367 = data
  i10366.m_DampingRatio = i10367[0]
  i10366.m_Frequency = i10367[1]
  i10366.m_Angle = i10367[2]
  return i10366
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i10368 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i10369 = data
  i10368.m_LowerTranslation = i10369[0]
  i10368.m_UpperTranslation = i10369[1]
  return i10368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i10370 = root || new pc.UnityMaterial()
  var i10371 = data
  i10370.name = i10371[0]
  request.r(i10371[1], i10371[2], 0, i10370, 'shader')
  i10370.renderQueue = i10371[3]
  i10370.enableInstancing = !!i10371[4]
  var i10373 = i10371[5]
  var i10372 = []
  for(var i = 0; i < i10373.length; i += 1) {
    i10372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i10373[i + 0]) );
  }
  i10370.floatParameters = i10372
  var i10375 = i10371[6]
  var i10374 = []
  for(var i = 0; i < i10375.length; i += 1) {
    i10374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i10375[i + 0]) );
  }
  i10370.colorParameters = i10374
  var i10377 = i10371[7]
  var i10376 = []
  for(var i = 0; i < i10377.length; i += 1) {
    i10376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i10377[i + 0]) );
  }
  i10370.vectorParameters = i10376
  var i10379 = i10371[8]
  var i10378 = []
  for(var i = 0; i < i10379.length; i += 1) {
    i10378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i10379[i + 0]) );
  }
  i10370.textureParameters = i10378
  var i10381 = i10371[9]
  var i10380 = []
  for(var i = 0; i < i10381.length; i += 1) {
    i10380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i10381[i + 0]) );
  }
  i10370.materialFlags = i10380
  return i10370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i10384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i10385 = data
  i10384.name = i10385[0]
  i10384.value = i10385[1]
  return i10384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i10388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i10389 = data
  i10388.name = i10389[0]
  i10388.value = new pc.Color(i10389[1], i10389[2], i10389[3], i10389[4])
  return i10388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i10392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i10393 = data
  i10392.name = i10393[0]
  i10392.value = new pc.Vec4( i10393[1], i10393[2], i10393[3], i10393[4] )
  return i10392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i10396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i10397 = data
  i10396.name = i10397[0]
  request.r(i10397[1], i10397[2], 0, i10396, 'value')
  return i10396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i10400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i10401 = data
  i10400.name = i10401[0]
  i10400.enabled = !!i10401[1]
  return i10400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i10402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i10403 = data
  i10402.name = i10403[0]
  i10402.width = i10403[1]
  i10402.height = i10403[2]
  i10402.mipmapCount = i10403[3]
  i10402.anisoLevel = i10403[4]
  i10402.filterMode = i10403[5]
  i10402.hdr = !!i10403[6]
  i10402.format = i10403[7]
  i10402.wrapMode = i10403[8]
  i10402.alphaIsTransparency = !!i10403[9]
  i10402.alphaSource = i10403[10]
  i10402.graphicsFormat = i10403[11]
  i10402.sRGBTexture = !!i10403[12]
  i10402.desiredColorSpace = i10403[13]
  i10402.wrapU = i10403[14]
  i10402.wrapV = i10403[15]
  return i10402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i10404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i10405 = data
  i10404.position = new pc.Vec3( i10405[0], i10405[1], i10405[2] )
  i10404.scale = new pc.Vec3( i10405[3], i10405[4], i10405[5] )
  i10404.rotation = new pc.Quat(i10405[6], i10405[7], i10405[8], i10405[9])
  return i10404
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i10406 = root || request.c( 'HeartEffect' )
  var i10407 = data
  i10406.defaultLifeTime = i10407[0]
  request.r(i10407[1], i10407[2], 0, i10406, 'tf')
  return i10406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i10408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i10409 = data
  i10408.color = new pc.Color(i10409[0], i10409[1], i10409[2], i10409[3])
  request.r(i10409[4], i10409[5], 0, i10408, 'sprite')
  i10408.flipX = !!i10409[6]
  i10408.flipY = !!i10409[7]
  i10408.drawMode = i10409[8]
  i10408.size = new pc.Vec2( i10409[9], i10409[10] )
  i10408.tileMode = i10409[11]
  i10408.adaptiveModeThreshold = i10409[12]
  i10408.maskInteraction = i10409[13]
  i10408.spriteSortPoint = i10409[14]
  i10408.enabled = !!i10409[15]
  request.r(i10409[16], i10409[17], 0, i10408, 'sharedMaterial')
  var i10411 = i10409[18]
  var i10410 = []
  for(var i = 0; i < i10411.length; i += 2) {
  request.r(i10411[i + 0], i10411[i + 1], 2, i10410, '')
  }
  i10408.sharedMaterials = i10410
  i10408.receiveShadows = !!i10409[19]
  i10408.shadowCastingMode = i10409[20]
  i10408.sortingLayerID = i10409[21]
  i10408.sortingOrder = i10409[22]
  i10408.lightmapIndex = i10409[23]
  i10408.lightmapSceneIndex = i10409[24]
  i10408.lightmapScaleOffset = new pc.Vec4( i10409[25], i10409[26], i10409[27], i10409[28] )
  i10408.lightProbeUsage = i10409[29]
  i10408.reflectionProbeUsage = i10409[30]
  return i10408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i10414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i10415 = data
  i10414.name = i10415[0]
  i10414.tagId = i10415[1]
  i10414.enabled = !!i10415[2]
  i10414.isStatic = !!i10415[3]
  i10414.layer = i10415[4]
  return i10414
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i10416 = root || request.c( 'HeartBreakEffect' )
  var i10417 = data
  i10416.defaultLifeTime = i10417[0]
  request.r(i10417[1], i10417[2], 0, i10416, 'tf')
  return i10416
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i10418 = root || request.c( 'BlinkEffect' )
  var i10419 = data
  request.r(i10419[0], i10419[1], 0, i10418, 'tf')
  return i10418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i10420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i10421 = data
  request.r(i10421[0], i10421[1], 0, i10420, 'mesh')
  i10420.meshCount = i10421[2]
  i10420.activeVertexStreamsCount = i10421[3]
  i10420.alignment = i10421[4]
  i10420.renderMode = i10421[5]
  i10420.sortMode = i10421[6]
  i10420.lengthScale = i10421[7]
  i10420.velocityScale = i10421[8]
  i10420.cameraVelocityScale = i10421[9]
  i10420.normalDirection = i10421[10]
  i10420.sortingFudge = i10421[11]
  i10420.minParticleSize = i10421[12]
  i10420.maxParticleSize = i10421[13]
  i10420.pivot = new pc.Vec3( i10421[14], i10421[15], i10421[16] )
  request.r(i10421[17], i10421[18], 0, i10420, 'trailMaterial')
  i10420.applyActiveColorSpace = !!i10421[19]
  i10420.enabled = !!i10421[20]
  request.r(i10421[21], i10421[22], 0, i10420, 'sharedMaterial')
  var i10423 = i10421[23]
  var i10422 = []
  for(var i = 0; i < i10423.length; i += 2) {
  request.r(i10423[i + 0], i10423[i + 1], 2, i10422, '')
  }
  i10420.sharedMaterials = i10422
  i10420.receiveShadows = !!i10421[24]
  i10420.shadowCastingMode = i10421[25]
  i10420.sortingLayerID = i10421[26]
  i10420.sortingOrder = i10421[27]
  i10420.lightmapIndex = i10421[28]
  i10420.lightmapSceneIndex = i10421[29]
  i10420.lightmapScaleOffset = new pc.Vec4( i10421[30], i10421[31], i10421[32], i10421[33] )
  i10420.lightProbeUsage = i10421[34]
  i10420.reflectionProbeUsage = i10421[35]
  return i10420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i10424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i10425 = data
  i10424.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i10425[0], i10424.main)
  i10424.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i10425[1], i10424.colorBySpeed)
  i10424.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i10425[2], i10424.colorOverLifetime)
  i10424.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i10425[3], i10424.emission)
  i10424.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i10425[4], i10424.rotationBySpeed)
  i10424.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i10425[5], i10424.rotationOverLifetime)
  i10424.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i10425[6], i10424.shape)
  i10424.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i10425[7], i10424.sizeBySpeed)
  i10424.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i10425[8], i10424.sizeOverLifetime)
  i10424.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i10425[9], i10424.textureSheetAnimation)
  i10424.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i10425[10], i10424.velocityOverLifetime)
  i10424.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i10425[11], i10424.noise)
  i10424.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i10425[12], i10424.inheritVelocity)
  i10424.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i10425[13], i10424.forceOverLifetime)
  i10424.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i10425[14], i10424.limitVelocityOverLifetime)
  i10424.useAutoRandomSeed = !!i10425[15]
  i10424.randomSeed = i10425[16]
  return i10424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i10426 = root || new pc.ParticleSystemMain()
  var i10427 = data
  i10426.duration = i10427[0]
  i10426.loop = !!i10427[1]
  i10426.prewarm = !!i10427[2]
  i10426.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[3], i10426.startDelay)
  i10426.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[4], i10426.startLifetime)
  i10426.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[5], i10426.startSpeed)
  i10426.startSize3D = !!i10427[6]
  i10426.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[7], i10426.startSizeX)
  i10426.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[8], i10426.startSizeY)
  i10426.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[9], i10426.startSizeZ)
  i10426.startRotation3D = !!i10427[10]
  i10426.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[11], i10426.startRotationX)
  i10426.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[12], i10426.startRotationY)
  i10426.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[13], i10426.startRotationZ)
  i10426.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10427[14], i10426.startColor)
  i10426.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10427[15], i10426.gravityModifier)
  i10426.simulationSpace = i10427[16]
  request.r(i10427[17], i10427[18], 0, i10426, 'customSimulationSpace')
  i10426.simulationSpeed = i10427[19]
  i10426.useUnscaledTime = !!i10427[20]
  i10426.scalingMode = i10427[21]
  i10426.playOnAwake = !!i10427[22]
  i10426.maxParticles = i10427[23]
  i10426.emitterVelocityMode = i10427[24]
  i10426.stopAction = i10427[25]
  return i10426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i10428 = root || new pc.MinMaxCurve()
  var i10429 = data
  i10428.mode = i10429[0]
  i10428.curveMin = new pc.AnimationCurve( { keys_flow: i10429[1] } )
  i10428.curveMax = new pc.AnimationCurve( { keys_flow: i10429[2] } )
  i10428.curveMultiplier = i10429[3]
  i10428.constantMin = i10429[4]
  i10428.constantMax = i10429[5]
  return i10428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i10430 = root || new pc.MinMaxGradient()
  var i10431 = data
  i10430.mode = i10431[0]
  i10430.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i10431[1], i10430.gradientMin)
  i10430.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i10431[2], i10430.gradientMax)
  i10430.colorMin = new pc.Color(i10431[3], i10431[4], i10431[5], i10431[6])
  i10430.colorMax = new pc.Color(i10431[7], i10431[8], i10431[9], i10431[10])
  return i10430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i10432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i10433 = data
  i10432.mode = i10433[0]
  var i10435 = i10433[1]
  var i10434 = []
  for(var i = 0; i < i10435.length; i += 1) {
    i10434.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i10435[i + 0]) );
  }
  i10432.colorKeys = i10434
  var i10437 = i10433[2]
  var i10436 = []
  for(var i = 0; i < i10437.length; i += 1) {
    i10436.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i10437[i + 0]) );
  }
  i10432.alphaKeys = i10436
  return i10432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i10438 = root || new pc.ParticleSystemColorBySpeed()
  var i10439 = data
  i10438.enabled = !!i10439[0]
  i10438.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10439[1], i10438.color)
  i10438.range = new pc.Vec2( i10439[2], i10439[3] )
  return i10438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i10442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i10443 = data
  i10442.color = new pc.Color(i10443[0], i10443[1], i10443[2], i10443[3])
  i10442.time = i10443[4]
  return i10442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i10446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i10447 = data
  i10446.alpha = i10447[0]
  i10446.time = i10447[1]
  return i10446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i10448 = root || new pc.ParticleSystemColorOverLifetime()
  var i10449 = data
  i10448.enabled = !!i10449[0]
  i10448.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10449[1], i10448.color)
  return i10448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i10450 = root || new pc.ParticleSystemEmitter()
  var i10451 = data
  i10450.enabled = !!i10451[0]
  i10450.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10451[1], i10450.rateOverTime)
  i10450.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10451[2], i10450.rateOverDistance)
  var i10453 = i10451[3]
  var i10452 = []
  for(var i = 0; i < i10453.length; i += 1) {
    i10452.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i10453[i + 0]) );
  }
  i10450.bursts = i10452
  return i10450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i10456 = root || new pc.ParticleSystemBurst()
  var i10457 = data
  i10456.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10457[0], i10456.count)
  i10456.cycleCount = i10457[1]
  i10456.minCount = i10457[2]
  i10456.maxCount = i10457[3]
  i10456.repeatInterval = i10457[4]
  i10456.time = i10457[5]
  return i10456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i10458 = root || new pc.ParticleSystemRotationBySpeed()
  var i10459 = data
  i10458.enabled = !!i10459[0]
  i10458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10459[1], i10458.x)
  i10458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10459[2], i10458.y)
  i10458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10459[3], i10458.z)
  i10458.separateAxes = !!i10459[4]
  i10458.range = new pc.Vec2( i10459[5], i10459[6] )
  return i10458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i10460 = root || new pc.ParticleSystemRotationOverLifetime()
  var i10461 = data
  i10460.enabled = !!i10461[0]
  i10460.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10461[1], i10460.x)
  i10460.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10461[2], i10460.y)
  i10460.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10461[3], i10460.z)
  i10460.separateAxes = !!i10461[4]
  return i10460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i10462 = root || new pc.ParticleSystemShape()
  var i10463 = data
  i10462.enabled = !!i10463[0]
  i10462.shapeType = i10463[1]
  i10462.randomDirectionAmount = i10463[2]
  i10462.sphericalDirectionAmount = i10463[3]
  i10462.randomPositionAmount = i10463[4]
  i10462.alignToDirection = !!i10463[5]
  i10462.radius = i10463[6]
  i10462.radiusMode = i10463[7]
  i10462.radiusSpread = i10463[8]
  i10462.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10463[9], i10462.radiusSpeed)
  i10462.radiusThickness = i10463[10]
  i10462.angle = i10463[11]
  i10462.length = i10463[12]
  i10462.boxThickness = new pc.Vec3( i10463[13], i10463[14], i10463[15] )
  i10462.meshShapeType = i10463[16]
  request.r(i10463[17], i10463[18], 0, i10462, 'mesh')
  request.r(i10463[19], i10463[20], 0, i10462, 'meshRenderer')
  request.r(i10463[21], i10463[22], 0, i10462, 'skinnedMeshRenderer')
  i10462.useMeshMaterialIndex = !!i10463[23]
  i10462.meshMaterialIndex = i10463[24]
  i10462.useMeshColors = !!i10463[25]
  i10462.normalOffset = i10463[26]
  i10462.arc = i10463[27]
  i10462.arcMode = i10463[28]
  i10462.arcSpread = i10463[29]
  i10462.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10463[30], i10462.arcSpeed)
  i10462.donutRadius = i10463[31]
  i10462.position = new pc.Vec3( i10463[32], i10463[33], i10463[34] )
  i10462.rotation = new pc.Vec3( i10463[35], i10463[36], i10463[37] )
  i10462.scale = new pc.Vec3( i10463[38], i10463[39], i10463[40] )
  return i10462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i10464 = root || new pc.ParticleSystemSizeBySpeed()
  var i10465 = data
  i10464.enabled = !!i10465[0]
  i10464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10465[1], i10464.x)
  i10464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10465[2], i10464.y)
  i10464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10465[3], i10464.z)
  i10464.separateAxes = !!i10465[4]
  i10464.range = new pc.Vec2( i10465[5], i10465[6] )
  return i10464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i10466 = root || new pc.ParticleSystemSizeOverLifetime()
  var i10467 = data
  i10466.enabled = !!i10467[0]
  i10466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[1], i10466.x)
  i10466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[2], i10466.y)
  i10466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[3], i10466.z)
  i10466.separateAxes = !!i10467[4]
  return i10466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i10468 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i10469 = data
  i10468.enabled = !!i10469[0]
  i10468.mode = i10469[1]
  i10468.animation = i10469[2]
  i10468.numTilesX = i10469[3]
  i10468.numTilesY = i10469[4]
  i10468.useRandomRow = !!i10469[5]
  i10468.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10469[6], i10468.frameOverTime)
  i10468.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10469[7], i10468.startFrame)
  i10468.cycleCount = i10469[8]
  i10468.rowIndex = i10469[9]
  i10468.flipU = i10469[10]
  i10468.flipV = i10469[11]
  i10468.spriteCount = i10469[12]
  var i10471 = i10469[13]
  var i10470 = []
  for(var i = 0; i < i10471.length; i += 2) {
  request.r(i10471[i + 0], i10471[i + 1], 2, i10470, '')
  }
  i10468.sprites = i10470
  return i10468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i10474 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i10475 = data
  i10474.enabled = !!i10475[0]
  i10474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[1], i10474.x)
  i10474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[2], i10474.y)
  i10474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[3], i10474.z)
  i10474.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[4], i10474.radial)
  i10474.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[5], i10474.speedModifier)
  i10474.space = i10475[6]
  i10474.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[7], i10474.orbitalX)
  i10474.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[8], i10474.orbitalY)
  i10474.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[9], i10474.orbitalZ)
  i10474.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[10], i10474.orbitalOffsetX)
  i10474.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[11], i10474.orbitalOffsetY)
  i10474.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[12], i10474.orbitalOffsetZ)
  return i10474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i10476 = root || new pc.ParticleSystemNoise()
  var i10477 = data
  i10476.enabled = !!i10477[0]
  i10476.separateAxes = !!i10477[1]
  i10476.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[2], i10476.strengthX)
  i10476.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[3], i10476.strengthY)
  i10476.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[4], i10476.strengthZ)
  i10476.frequency = i10477[5]
  i10476.damping = !!i10477[6]
  i10476.octaveCount = i10477[7]
  i10476.octaveMultiplier = i10477[8]
  i10476.octaveScale = i10477[9]
  i10476.quality = i10477[10]
  i10476.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[11], i10476.scrollSpeed)
  i10476.scrollSpeedMultiplier = i10477[12]
  i10476.remapEnabled = !!i10477[13]
  i10476.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[14], i10476.remapX)
  i10476.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[15], i10476.remapY)
  i10476.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[16], i10476.remapZ)
  i10476.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[17], i10476.positionAmount)
  i10476.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[18], i10476.rotationAmount)
  i10476.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[19], i10476.sizeAmount)
  return i10476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i10478 = root || new pc.ParticleSystemInheritVelocity()
  var i10479 = data
  i10478.enabled = !!i10479[0]
  i10478.mode = i10479[1]
  i10478.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10479[2], i10478.curve)
  return i10478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i10480 = root || new pc.ParticleSystemForceOverLifetime()
  var i10481 = data
  i10480.enabled = !!i10481[0]
  i10480.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10481[1], i10480.x)
  i10480.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10481[2], i10480.y)
  i10480.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10481[3], i10480.z)
  i10480.space = i10481[4]
  i10480.randomized = !!i10481[5]
  return i10480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i10482 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i10483 = data
  i10482.enabled = !!i10483[0]
  i10482.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[1], i10482.limit)
  i10482.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[2], i10482.limitX)
  i10482.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[3], i10482.limitY)
  i10482.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[4], i10482.limitZ)
  i10482.dampen = i10483[5]
  i10482.separateAxes = !!i10483[6]
  i10482.space = i10483[7]
  i10482.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[8], i10482.drag)
  i10482.multiplyDragByParticleSize = !!i10483[9]
  i10482.multiplyDragByParticleVelocity = !!i10483[10]
  return i10482
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i10484 = root || request.c( 'StarExploreFX' )
  var i10485 = data
  request.r(i10485[0], i10485[1], 0, i10484, 'tf')
  return i10484
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i10486 = root || request.c( 'ProgressBar' )
  var i10487 = data
  request.r(i10487[0], i10487[1], 0, i10486, 'fillTransform')
  request.r(i10487[2], i10487[3], 0, i10486, 'tf')
  return i10486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i10488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i10489 = data
  i10488.pivot = new pc.Vec2( i10489[0], i10489[1] )
  i10488.anchorMin = new pc.Vec2( i10489[2], i10489[3] )
  i10488.anchorMax = new pc.Vec2( i10489[4], i10489[5] )
  i10488.sizeDelta = new pc.Vec2( i10489[6], i10489[7] )
  i10488.anchoredPosition3D = new pc.Vec3( i10489[8], i10489[9], i10489[10] )
  i10488.rotation = new pc.Quat(i10489[11], i10489[12], i10489[13], i10489[14])
  i10488.scale = new pc.Vec3( i10489[15], i10489[16], i10489[17] )
  return i10488
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i10490 = root || request.c( 'ClockTimer' )
  var i10491 = data
  request.r(i10491[0], i10491[1], 0, i10490, 'fillImage')
  request.r(i10491[2], i10491[3], 0, i10490, 'tf')
  i10490.spawnZoomDuration = i10491[4]
  i10490.despawnZoomDuration = i10491[5]
  return i10490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i10492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i10493 = data
  i10492.cullTransparentMesh = !!i10493[0]
  return i10492
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i10494 = root || request.c( 'UnityEngine.UI.Image' )
  var i10495 = data
  request.r(i10495[0], i10495[1], 0, i10494, 'm_Sprite')
  i10494.m_Type = i10495[2]
  i10494.m_PreserveAspect = !!i10495[3]
  i10494.m_FillCenter = !!i10495[4]
  i10494.m_FillMethod = i10495[5]
  i10494.m_FillAmount = i10495[6]
  i10494.m_FillClockwise = !!i10495[7]
  i10494.m_FillOrigin = i10495[8]
  i10494.m_UseSpriteMesh = !!i10495[9]
  i10494.m_PixelsPerUnitMultiplier = i10495[10]
  request.r(i10495[11], i10495[12], 0, i10494, 'm_Material')
  i10494.m_Maskable = !!i10495[13]
  i10494.m_Color = new pc.Color(i10495[14], i10495[15], i10495[16], i10495[17])
  i10494.m_RaycastTarget = !!i10495[18]
  i10494.m_RaycastPadding = new pc.Vec4( i10495[19], i10495[20], i10495[21], i10495[22] )
  return i10494
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i10496 = root || request.c( 'FlourSmoke' )
  var i10497 = data
  request.r(i10497[0], i10497[1], 0, i10496, 'tf')
  return i10496
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i10498 = root || request.c( 'WaterSplash' )
  var i10499 = data
  request.r(i10499[0], i10499[1], 0, i10498, 'tf')
  return i10498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i10500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i10501 = data
  i10500.name = i10501[0]
  i10500.halfPrecision = !!i10501[1]
  i10500.useSimplification = !!i10501[2]
  i10500.useUInt32IndexFormat = !!i10501[3]
  i10500.vertexCount = i10501[4]
  i10500.aabb = i10501[5]
  var i10503 = i10501[6]
  var i10502 = []
  for(var i = 0; i < i10503.length; i += 1) {
    i10502.push( !!i10503[i + 0] );
  }
  i10500.streams = i10502
  i10500.vertices = i10501[7]
  var i10505 = i10501[8]
  var i10504 = []
  for(var i = 0; i < i10505.length; i += 1) {
    i10504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i10505[i + 0]) );
  }
  i10500.subMeshes = i10504
  var i10507 = i10501[9]
  var i10506 = []
  for(var i = 0; i < i10507.length; i += 16) {
    i10506.push( new pc.Mat4().setData(i10507[i + 0], i10507[i + 1], i10507[i + 2], i10507[i + 3],  i10507[i + 4], i10507[i + 5], i10507[i + 6], i10507[i + 7],  i10507[i + 8], i10507[i + 9], i10507[i + 10], i10507[i + 11],  i10507[i + 12], i10507[i + 13], i10507[i + 14], i10507[i + 15]) );
  }
  i10500.bindposes = i10506
  var i10509 = i10501[10]
  var i10508 = []
  for(var i = 0; i < i10509.length; i += 1) {
    i10508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i10509[i + 0]) );
  }
  i10500.blendShapes = i10508
  return i10500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i10514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i10515 = data
  i10514.triangles = i10515[0]
  return i10514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i10520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i10521 = data
  i10520.name = i10521[0]
  var i10523 = i10521[1]
  var i10522 = []
  for(var i = 0; i < i10523.length; i += 1) {
    i10522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i10523[i + 0]) );
  }
  i10520.frames = i10522
  return i10520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i10524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i10525 = data
  i10524.name = i10525[0]
  i10524.index = i10525[1]
  i10524.startup = !!i10525[2]
  return i10524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i10526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i10527 = data
  i10526.planeDistance = i10527[0]
  i10526.referencePixelsPerUnit = i10527[1]
  i10526.isFallbackOverlay = !!i10527[2]
  i10526.renderMode = i10527[3]
  i10526.renderOrder = i10527[4]
  i10526.sortingLayerName = i10527[5]
  i10526.sortingOrder = i10527[6]
  i10526.scaleFactor = i10527[7]
  request.r(i10527[8], i10527[9], 0, i10526, 'worldCamera')
  i10526.overrideSorting = !!i10527[10]
  i10526.pixelPerfect = !!i10527[11]
  i10526.targetDisplay = i10527[12]
  i10526.overridePixelPerfect = !!i10527[13]
  i10526.enabled = !!i10527[14]
  return i10526
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i10528 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i10529 = data
  i10528.m_UiScaleMode = i10529[0]
  i10528.m_ReferencePixelsPerUnit = i10529[1]
  i10528.m_ScaleFactor = i10529[2]
  i10528.m_ReferenceResolution = new pc.Vec2( i10529[3], i10529[4] )
  i10528.m_ScreenMatchMode = i10529[5]
  i10528.m_MatchWidthOrHeight = i10529[6]
  i10528.m_PhysicalUnit = i10529[7]
  i10528.m_FallbackScreenDPI = i10529[8]
  i10528.m_DefaultSpriteDPI = i10529[9]
  i10528.m_DynamicPixelsPerUnit = i10529[10]
  i10528.m_PresetInfoIsWorld = !!i10529[11]
  return i10528
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i10530 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i10531 = data
  i10530.m_IgnoreReversedGraphics = !!i10531[0]
  i10530.m_BlockingObjects = i10531[1]
  i10530.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i10531[2] )
  return i10530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i10532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i10533 = data
  request.r(i10533[0], i10533[1], 0, i10532, 'animatorController')
  request.r(i10533[2], i10533[3], 0, i10532, 'avatar')
  i10532.updateMode = i10533[4]
  i10532.hasTransformHierarchy = !!i10533[5]
  i10532.applyRootMotion = !!i10533[6]
  var i10535 = i10533[7]
  var i10534 = []
  for(var i = 0; i < i10535.length; i += 2) {
  request.r(i10535[i + 0], i10535[i + 1], 2, i10534, '')
  }
  i10532.humanBones = i10534
  i10532.enabled = !!i10533[8]
  return i10532
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i10538 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i10539 = data
  i10538.m_hasFontAssetChanged = !!i10539[0]
  request.r(i10539[1], i10539[2], 0, i10538, 'm_baseMaterial')
  i10538.m_maskOffset = new pc.Vec4( i10539[3], i10539[4], i10539[5], i10539[6] )
  i10538.m_text = i10539[7]
  i10538.m_isRightToLeft = !!i10539[8]
  request.r(i10539[9], i10539[10], 0, i10538, 'm_fontAsset')
  request.r(i10539[11], i10539[12], 0, i10538, 'm_sharedMaterial')
  var i10541 = i10539[13]
  var i10540 = []
  for(var i = 0; i < i10541.length; i += 2) {
  request.r(i10541[i + 0], i10541[i + 1], 2, i10540, '')
  }
  i10538.m_fontSharedMaterials = i10540
  request.r(i10539[14], i10539[15], 0, i10538, 'm_fontMaterial')
  var i10543 = i10539[16]
  var i10542 = []
  for(var i = 0; i < i10543.length; i += 2) {
  request.r(i10543[i + 0], i10543[i + 1], 2, i10542, '')
  }
  i10538.m_fontMaterials = i10542
  i10538.m_fontColor32 = UnityEngine.Color32.ConstructColor(i10539[17], i10539[18], i10539[19], i10539[20])
  i10538.m_fontColor = new pc.Color(i10539[21], i10539[22], i10539[23], i10539[24])
  i10538.m_enableVertexGradient = !!i10539[25]
  i10538.m_colorMode = i10539[26]
  i10538.m_fontColorGradient = request.d('TMPro.VertexGradient', i10539[27], i10538.m_fontColorGradient)
  request.r(i10539[28], i10539[29], 0, i10538, 'm_fontColorGradientPreset')
  request.r(i10539[30], i10539[31], 0, i10538, 'm_spriteAsset')
  i10538.m_tintAllSprites = !!i10539[32]
  request.r(i10539[33], i10539[34], 0, i10538, 'm_StyleSheet')
  i10538.m_TextStyleHashCode = i10539[35]
  i10538.m_overrideHtmlColors = !!i10539[36]
  i10538.m_faceColor = UnityEngine.Color32.ConstructColor(i10539[37], i10539[38], i10539[39], i10539[40])
  i10538.m_fontSize = i10539[41]
  i10538.m_fontSizeBase = i10539[42]
  i10538.m_fontWeight = i10539[43]
  i10538.m_enableAutoSizing = !!i10539[44]
  i10538.m_fontSizeMin = i10539[45]
  i10538.m_fontSizeMax = i10539[46]
  i10538.m_fontStyle = i10539[47]
  i10538.m_HorizontalAlignment = i10539[48]
  i10538.m_VerticalAlignment = i10539[49]
  i10538.m_textAlignment = i10539[50]
  i10538.m_characterSpacing = i10539[51]
  i10538.m_wordSpacing = i10539[52]
  i10538.m_lineSpacing = i10539[53]
  i10538.m_lineSpacingMax = i10539[54]
  i10538.m_paragraphSpacing = i10539[55]
  i10538.m_charWidthMaxAdj = i10539[56]
  i10538.m_TextWrappingMode = i10539[57]
  i10538.m_wordWrappingRatios = i10539[58]
  i10538.m_overflowMode = i10539[59]
  request.r(i10539[60], i10539[61], 0, i10538, 'm_linkedTextComponent')
  request.r(i10539[62], i10539[63], 0, i10538, 'parentLinkedComponent')
  i10538.m_enableKerning = !!i10539[64]
  var i10545 = i10539[65]
  var i10544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i10545.length; i += 1) {
    i10544.add(i10545[i + 0]);
  }
  i10538.m_ActiveFontFeatures = i10544
  i10538.m_enableExtraPadding = !!i10539[66]
  i10538.checkPaddingRequired = !!i10539[67]
  i10538.m_isRichText = !!i10539[68]
  i10538.m_parseCtrlCharacters = !!i10539[69]
  i10538.m_isOrthographic = !!i10539[70]
  i10538.m_isCullingEnabled = !!i10539[71]
  i10538.m_horizontalMapping = i10539[72]
  i10538.m_verticalMapping = i10539[73]
  i10538.m_uvLineOffset = i10539[74]
  i10538.m_geometrySortingOrder = i10539[75]
  i10538.m_IsTextObjectScaleStatic = !!i10539[76]
  i10538.m_VertexBufferAutoSizeReduction = !!i10539[77]
  i10538.m_useMaxVisibleDescender = !!i10539[78]
  i10538.m_pageToDisplay = i10539[79]
  i10538.m_margin = new pc.Vec4( i10539[80], i10539[81], i10539[82], i10539[83] )
  i10538.m_isUsingLegacyAnimationComponent = !!i10539[84]
  i10538.m_isVolumetricText = !!i10539[85]
  request.r(i10539[86], i10539[87], 0, i10538, 'm_Material')
  i10538.m_EmojiFallbackSupport = !!i10539[88]
  i10538.m_Maskable = !!i10539[89]
  i10538.m_Color = new pc.Color(i10539[90], i10539[91], i10539[92], i10539[93])
  i10538.m_RaycastTarget = !!i10539[94]
  i10538.m_RaycastPadding = new pc.Vec4( i10539[95], i10539[96], i10539[97], i10539[98] )
  return i10538
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i10546 = root || request.c( 'TMPro.VertexGradient' )
  var i10547 = data
  i10546.topLeft = new pc.Color(i10547[0], i10547[1], i10547[2], i10547[3])
  i10546.topRight = new pc.Color(i10547[4], i10547[5], i10547[6], i10547[7])
  i10546.bottomLeft = new pc.Color(i10547[8], i10547[9], i10547[10], i10547[11])
  i10546.bottomRight = new pc.Color(i10547[12], i10547[13], i10547[14], i10547[15])
  return i10546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i10550 = root || request.c( 'UnityEngine.UI.Button' )
  var i10551 = data
  i10550.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i10551[0], i10550.m_OnClick)
  i10550.m_Navigation = request.d('UnityEngine.UI.Navigation', i10551[1], i10550.m_Navigation)
  i10550.m_Transition = i10551[2]
  i10550.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10551[3], i10550.m_Colors)
  i10550.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10551[4], i10550.m_SpriteState)
  i10550.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10551[5], i10550.m_AnimationTriggers)
  i10550.m_Interactable = !!i10551[6]
  request.r(i10551[7], i10551[8], 0, i10550, 'm_TargetGraphic')
  return i10550
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i10552 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i10553 = data
  i10552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10553[0], i10552.m_PersistentCalls)
  return i10552
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i10554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i10555 = data
  var i10557 = i10555[0]
  var i10556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i10557.length; i += 1) {
    i10556.add(request.d('UnityEngine.Events.PersistentCall', i10557[i + 0]));
  }
  i10554.m_Calls = i10556
  return i10554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i10560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i10561 = data
  request.r(i10561[0], i10561[1], 0, i10560, 'm_Target')
  i10560.m_TargetAssemblyTypeName = i10561[2]
  i10560.m_MethodName = i10561[3]
  i10560.m_Mode = i10561[4]
  i10560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i10561[5], i10560.m_Arguments)
  i10560.m_CallState = i10561[6]
  return i10560
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10562 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10563 = data
  request.r(i10563[0], i10563[1], 0, i10562, 'm_ObjectArgument')
  i10562.m_ObjectArgumentAssemblyTypeName = i10563[2]
  i10562.m_IntArgument = i10563[3]
  i10562.m_FloatArgument = i10563[4]
  i10562.m_StringArgument = i10563[5]
  i10562.m_BoolArgument = !!i10563[6]
  return i10562
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i10564 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i10565 = data
  i10564.m_Mode = i10565[0]
  i10564.m_WrapAround = !!i10565[1]
  request.r(i10565[2], i10565[3], 0, i10564, 'm_SelectOnUp')
  request.r(i10565[4], i10565[5], 0, i10564, 'm_SelectOnDown')
  request.r(i10565[6], i10565[7], 0, i10564, 'm_SelectOnLeft')
  request.r(i10565[8], i10565[9], 0, i10564, 'm_SelectOnRight')
  return i10564
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i10566 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i10567 = data
  i10566.m_NormalColor = new pc.Color(i10567[0], i10567[1], i10567[2], i10567[3])
  i10566.m_HighlightedColor = new pc.Color(i10567[4], i10567[5], i10567[6], i10567[7])
  i10566.m_PressedColor = new pc.Color(i10567[8], i10567[9], i10567[10], i10567[11])
  i10566.m_SelectedColor = new pc.Color(i10567[12], i10567[13], i10567[14], i10567[15])
  i10566.m_DisabledColor = new pc.Color(i10567[16], i10567[17], i10567[18], i10567[19])
  i10566.m_ColorMultiplier = i10567[20]
  i10566.m_FadeDuration = i10567[21]
  return i10566
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i10568 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i10569 = data
  request.r(i10569[0], i10569[1], 0, i10568, 'm_HighlightedSprite')
  request.r(i10569[2], i10569[3], 0, i10568, 'm_PressedSprite')
  request.r(i10569[4], i10569[5], 0, i10568, 'm_SelectedSprite')
  request.r(i10569[6], i10569[7], 0, i10568, 'm_DisabledSprite')
  return i10568
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i10570 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i10571 = data
  i10570.m_NormalTrigger = i10571[0]
  i10570.m_HighlightedTrigger = i10571[1]
  i10570.m_PressedTrigger = i10571[2]
  i10570.m_SelectedTrigger = i10571[3]
  i10570.m_DisabledTrigger = i10571[4]
  return i10570
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i10572 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i10573 = data
  request.r(i10573[0], i10573[1], 0, i10572, 'skeletonDataAsset')
  request.r(i10573[2], i10573[3], 0, i10572, 'additiveMaterial')
  request.r(i10573[4], i10573[5], 0, i10572, 'multiplyMaterial')
  request.r(i10573[6], i10573[7], 0, i10572, 'screenMaterial')
  i10572.initialSkinName = i10573[8]
  i10572.initialFlipX = !!i10573[9]
  i10572.initialFlipY = !!i10573[10]
  i10572.startingAnimation = i10573[11]
  i10572.startingLoop = !!i10573[12]
  i10572.timeScale = i10573[13]
  i10572.freeze = !!i10573[14]
  i10572.updateWhenInvisible = i10573[15]
  i10572.unscaledTime = !!i10573[16]
  i10572.allowMultipleCanvasRenderers = !!i10573[17]
  var i10575 = i10573[18]
  var i10574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i10575.length; i += 2) {
  request.r(i10575[i + 0], i10575[i + 1], 1, i10574, '')
  }
  i10572.canvasRenderers = i10574
  i10572.enableSeparatorSlots = !!i10573[19]
  i10572.updateSeparatorPartLocation = !!i10573[20]
  var i10577 = i10573[21]
  var i10576 = []
  for(var i = 0; i < i10577.length; i += 1) {
    i10576.push( i10577[i + 0] );
  }
  i10572.separatorSlotNames = i10576
  var i10579 = i10573[22]
  var i10578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i10579.length; i += 2) {
  request.r(i10579[i + 0], i10579[i + 1], 1, i10578, '')
  }
  i10572.separatorParts = i10578
  i10572.meshGenerator = request.d('Spine.Unity.MeshGenerator', i10573[23], i10572.meshGenerator)
  request.r(i10573[24], i10573[25], 0, i10572, 'm_Material')
  i10572.m_Maskable = !!i10573[26]
  i10572.m_Color = new pc.Color(i10573[27], i10573[28], i10573[29], i10573[30])
  i10572.m_RaycastTarget = !!i10573[31]
  i10572.m_RaycastPadding = new pc.Vec4( i10573[32], i10573[33], i10573[34], i10573[35] )
  return i10572
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i10586 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i10587 = data
  i10586.settings = request.d('Spine.Unity.MeshGenerator+Settings', i10587[0], i10586.settings)
  return i10586
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i10588 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i10589 = data
  i10588.useClipping = !!i10589[0]
  i10588.zSpacing = i10589[1]
  i10588.pmaVertexColors = !!i10589[2]
  i10588.tintBlack = !!i10589[3]
  i10588.canvasGroupTintBlack = !!i10589[4]
  i10588.calculateTangents = !!i10589[5]
  i10588.addNormals = !!i10589[6]
  i10588.immutableTriangles = !!i10589[7]
  return i10588
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i10590 = root || request.c( 'Ply_Pool' )
  var i10591 = data
  var i10593 = i10591[0]
  var i10592 = []
  for(var i = 0; i < i10593.length; i += 1) {
    i10592.push( request.d('Ply_Pool+PoolAmount', i10593[i + 0]) );
  }
  i10590.poolAmounts = i10592
  request.r(i10591[1], i10591[2], 0, i10590, 'poolHolder')
  return i10590
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i10596 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i10597 = data
  i10596.type = i10597[0]
  i10596.amount = i10597[1]
  request.r(i10597[2], i10597[3], 0, i10596, 'gameUnit')
  return i10596
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i10598 = root || request.c( 'Ply_SoundManager' )
  var i10599 = data
  var i10601 = i10599[0]
  var i10600 = []
  for(var i = 0; i < i10601.length; i += 1) {
    i10600.push( request.d('Ply_SoundManager+FxAudio', i10601[i + 0]) );
  }
  i10598.fxAudios = i10600
  var i10603 = i10599[1]
  var i10602 = []
  for(var i = 0; i < i10603.length; i += 2) {
  request.r(i10603[i + 0], i10603[i + 1], 2, i10602, '')
  }
  i10598.audioClips = i10602
  request.r(i10599[2], i10599[3], 0, i10598, 'sound')
  return i10598
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i10606 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i10607 = data
  i10606.fxType = i10607[0]
  request.r(i10607[1], i10607[2], 0, i10606, 'audioClip')
  return i10606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i10610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i10611 = data
  request.r(i10611[0], i10611[1], 0, i10610, 'clip')
  request.r(i10611[2], i10611[3], 0, i10610, 'outputAudioMixerGroup')
  i10610.playOnAwake = !!i10611[4]
  i10610.loop = !!i10611[5]
  i10610.time = i10611[6]
  i10610.volume = i10611[7]
  i10610.pitch = i10611[8]
  i10610.enabled = !!i10611[9]
  return i10610
}

Deserializers["GameManager"] = function (request, data, root) {
  var i10612 = root || request.c( 'GameManager' )
  var i10613 = data
  i10612.isPlaying = !!i10613[0]
  i10612.isTutorial = !!i10613[1]
  i10612.isGotoStore = !!i10613[2]
  i10612.isLoseGame = !!i10613[3]
  i10612.countMove = i10613[4]
  i10612.currentLayer = i10613[5]
  return i10612
}

Deserializers["UIManager"] = function (request, data, root) {
  var i10614 = root || request.c( 'UIManager' )
  var i10615 = data
  request.r(i10615[0], i10615[1], 0, i10614, 'winUI')
  request.r(i10615[2], i10615[3], 0, i10614, 'loseUI')
  request.r(i10615[4], i10615[5], 0, i10614, 'tutorial')
  request.r(i10615[6], i10615[7], 0, i10614, 'verticalUI')
  request.r(i10615[8], i10615[9], 0, i10614, 'horizontalUI')
  request.r(i10615[10], i10615[11], 0, i10614, 'downloadBtn')
  request.r(i10615[12], i10615[13], 0, i10614, 'horizontalDownloadBtn')
  i10614.isGoogleBuild = !!i10615[14]
  i10614.screenWidth = i10615[15]
  i10614.screenHeight = i10615[16]
  i10614.scaleHeightOnWidth = i10615[17]
  i10614.isVertical = !!i10615[18]
  i10614.isScreenVertical = !!i10615[19]
  request.r(i10615[20], i10615[21], 0, i10614, 'cam')
  i10614.verticalUIHeightOnWidthRatio = i10615[22]
  i10614.scaleCameraOnValidate = !!i10615[23]
  i10614.screenVerticalHeightOnWidthRatio = i10615[24]
  i10614.useContinuousScaling = !!i10615[25]
  i10614.baseOrthographicSize = i10615[26]
  i10614.baseAspect = i10615[27]
  i10614.landscapeSizeRatio = i10615[28]
  i10614.defaultPortraitSizeRatio = i10615[29]
  var i10617 = i10615[30]
  var i10616 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i10617.length; i += 1) {
    i10616.add(request.d('ScreenScaleStep', i10617[i + 0]));
  }
  i10614.discreteScaleSteps = i10616
  i10614.usePerspectiveCamera = !!i10615[31]
  request.r(i10615[32], i10615[33], 0, i10614, 'perspectiveFocus')
  i10614.perspectiveFocusDistance = i10615[34]
  i10614.perspectivePadding = i10615[35]
  i10614.fitRendererBounds = !!i10615[36]
  request.r(i10615[37], i10615[38], 0, i10614, 'boundsRoot')
  var i10619 = i10615[39]
  var i10618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i10619.length; i += 2) {
  request.r(i10619[i + 0], i10619[i + 1], 1, i10618, '')
  }
  i10614.boundsRenderers = i10618
  return i10614
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i10622 = root || request.c( 'ScreenScaleStep' )
  var i10623 = data
  i10622.heightOnWidthRatio = i10623[0]
  i10622.orthographicSize = i10623[1]
  return i10622
}

Deserializers["InputManager"] = function (request, data, root) {
  var i10626 = root || request.c( 'InputManager' )
  var i10627 = data
  i10626.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i10627[0] )
  i10626.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i10627[1] )
  i10626.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i10627[2] )
  i10626.isDragging = !!i10627[3]
  return i10626
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i10628 = root || request.c( 'HandTutManager' )
  var i10629 = data
  var i10631 = i10629[0]
  var i10630 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i10631.length; i += 2) {
  request.r(i10631[i + 0], i10631[i + 1], 1, i10630, '')
  }
  i10628.items = i10630
  request.r(i10629[1], i10629[2], 0, i10628, 'knife')
  request.r(i10629[3], i10629[4], 0, i10628, 'peeler')
  request.r(i10629[5], i10629[6], 0, i10628, 'handTutObject')
  request.r(i10629[7], i10629[8], 0, i10628, 'tapToCookObject')
  request.r(i10629[9], i10629[10], 0, i10628, 'oilItem')
  request.r(i10629[11], i10629[12], 0, i10628, 'stoveToggleEvent')
  request.r(i10629[13], i10629[14], 0, i10628, 'waterToggleEvent')
  request.r(i10629[15], i10629[16], 0, i10628, 'sinkBlock')
  var i10633 = i10629[17]
  var i10632 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i10633.length; i += 2) {
  request.r(i10633[i + 0], i10633[i + 1], 1, i10632, '')
  }
  i10628.itemsInWater = i10632
  i10628.noDelayItemCount = i10629[18]
  i10628.breakHeartNoDelayThreshold = i10629[19]
  i10628.maxHandTutShowCount = i10629[20]
  i10628.showSinkWaterTutorialOnStart = !!i10629[21]
  i10628.waitForBowlIntro = !!i10629[22]
  i10628.idleDelay = i10629[23]
  i10628.firstHandTutDelay = i10629[24]
  i10628.phaseHandTutDelay = i10629[25]
  i10628.moveDuration = i10629[26]
  i10628.dragFadeDuration = i10629[27]
  i10628.clickScaleDuration = i10629[28]
  i10628.waitAtEndDuration = i10629[29]
  i10628.handZPosition = i10629[30]
  i10628.clickScaleMultiplier = i10629[31]
  i10628.moveEase = i10629[32]
  return i10628
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i10638 = root || request.c( 'SortChildByZPos' )
  var i10639 = data
  request.r(i10639[0], i10639[1], 0, i10638, 'transformToSort')
  var i10641 = i10639[2]
  var i10640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i10641.length; i += 2) {
  request.r(i10641[i + 0], i10641[i + 1], 1, i10640, '')
  }
  i10638.childrenToSort = i10640
  i10638.zOffset = i10639[3]
  i10638.baseZ = i10639[4]
  return i10638
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i10642 = root || request.c( 'PhaseManager' )
  var i10643 = data
  var i10645 = i10643[0]
  var i10644 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i10645.length; i += 1) {
    i10644.add(request.d('PhaseData', i10645[i + 0]));
  }
  i10642.phases = i10644
  i10642.transitionDuration = i10643[1]
  i10642.delayBeforeNextPhase = i10643[2]
  i10642.offScreenLeftX = i10643[3]
  i10642.offScreenRightX = i10643[4]
  i10642.centerScreenX = i10643[5]
  request.r(i10643[6], i10643[7], 0, i10642, 'phaseTransitionObject')
  i10642.phaseTransitionObjectDuration = i10643[8]
  i10642.currentPhaseIndex = i10643[9]
  i10642.currentStepCount = i10643[10]
  return i10642
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i10648 = root || request.c( 'PhaseData' )
  var i10649 = data
  request.r(i10649[0], i10649[1], 0, i10648, 'phaseObject')
  i10648.totalSteps = i10649[2]
  i10648.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i10649[3], i10648.onPhaseReady)
  return i10648
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i10650 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i10651 = data
  i10650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10651[0], i10650.m_PersistentCalls)
  return i10650
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i10652 = root || request.c( 'ItemTypeDoneManager' )
  var i10653 = data
  var i10655 = i10653[0]
  var i10654 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i10655.length; i += 1) {
    i10654.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i10655[i + 0]));
  }
  i10652.itemTypeGroups = i10654
  return i10652
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i10658 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i10659 = data
  i10658.itemType = i10659[0]
  var i10661 = i10659[1]
  var i10660 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i10661.length; i += 2) {
  request.r(i10661[i + 0], i10661[i + 1], 1, i10660, '')
  }
  i10658.items = i10660
  return i10658
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i10662 = root || request.c( 'DuckManager' )
  var i10663 = data
  var i10665 = i10663[0]
  var i10664 = []
  for(var i = 0; i < i10665.length; i += 2) {
  request.r(i10665[i + 0], i10665[i + 1], 2, i10664, '')
  }
  i10662.leftPoints = i10664
  var i10667 = i10663[1]
  var i10666 = []
  for(var i = 0; i < i10667.length; i += 2) {
  request.r(i10667[i + 0], i10667[i + 1], 2, i10666, '')
  }
  i10662.rightPoints = i10666
  i10662.minSpawnInterval = i10663[2]
  i10662.maxSpawnInterval = i10663[3]
  i10662.moveSpeed = i10663[4]
  i10662.duckSoundChance = i10663[5]
  return i10662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i10668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i10669 = data
  i10668.aspect = i10669[0]
  i10668.orthographic = !!i10669[1]
  i10668.orthographicSize = i10669[2]
  i10668.backgroundColor = new pc.Color(i10669[3], i10669[4], i10669[5], i10669[6])
  i10668.nearClipPlane = i10669[7]
  i10668.farClipPlane = i10669[8]
  i10668.fieldOfView = i10669[9]
  i10668.depth = i10669[10]
  i10668.clearFlags = i10669[11]
  i10668.cullingMask = i10669[12]
  i10668.rect = i10669[13]
  request.r(i10669[14], i10669[15], 0, i10668, 'targetTexture')
  i10668.usePhysicalProperties = !!i10669[16]
  i10668.focalLength = i10669[17]
  i10668.sensorSize = new pc.Vec2( i10669[18], i10669[19] )
  i10668.lensShift = new pc.Vec2( i10669[20], i10669[21] )
  i10668.gateFit = i10669[22]
  i10668.commandBufferCount = i10669[23]
  i10668.cameraType = i10669[24]
  i10668.enabled = !!i10669[25]
  return i10668
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i10670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i10671 = data
  request.r(i10671[0], i10671[1], 0, i10670, 'm_FirstSelected')
  i10670.m_sendNavigationEvents = !!i10671[2]
  i10670.m_DragThreshold = i10671[3]
  return i10670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i10672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i10673 = data
  i10672.m_HorizontalAxis = i10673[0]
  i10672.m_VerticalAxis = i10673[1]
  i10672.m_SubmitButton = i10673[2]
  i10672.m_CancelButton = i10673[3]
  i10672.m_InputActionsPerSecond = i10673[4]
  i10672.m_RepeatDelay = i10673[5]
  i10672.m_ForceModuleActive = !!i10673[6]
  i10672.m_SendPointerHoverToParent = !!i10673[7]
  return i10672
}

Deserializers["Capybara"] = function (request, data, root) {
  var i10674 = root || request.c( 'Capybara' )
  var i10675 = data
  i10674.playSkinChangeMode = i10675[0]
  request.r(i10675[1], i10675[2], 0, i10674, 'popup1')
  request.r(i10675[3], i10675[4], 0, i10674, 'popup2')
  request.r(i10675[5], i10675[6], 0, i10674, 'tick')
  i10674.popupShowScale = i10675[7]
  i10674.popupShowDuration = i10675[8]
  i10674.popupHideDuration = i10675[9]
  i10674.popupHideDelay = i10675[10]
  request.r(i10675[11], i10675[12], 0, i10674, 'spawnHeartPoint')
  i10674.heartEffectScale = i10675[13]
  request.r(i10675[14], i10675[15], 0, i10674, 'skeletonAnimation')
  request.r(i10675[16], i10675[17], 0, i10674, 'skinObject1')
  request.r(i10675[18], i10675[19], 0, i10674, 'skinObject2')
  i10674.skinChangeDelay = i10675[20]
  i10674.skinMoveYOffset = i10675[21]
  i10674.skinMoveDownDuration = i10675[22]
  i10674.skinMoveUpDuration = i10675[23]
  return i10674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i10676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i10677 = data
  i10676.center = new pc.Vec3( i10677[0], i10677[1], i10677[2] )
  i10676.radius = i10677[3]
  i10676.enabled = !!i10677[4]
  i10676.isTrigger = !!i10677[5]
  request.r(i10677[6], i10677[7], 0, i10676, 'material')
  return i10676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i10678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i10679 = data
  request.r(i10679[0], i10679[1], 0, i10678, 'sharedMesh')
  return i10678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i10680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i10681 = data
  request.r(i10681[0], i10681[1], 0, i10680, 'additionalVertexStreams')
  i10680.enabled = !!i10681[2]
  request.r(i10681[3], i10681[4], 0, i10680, 'sharedMaterial')
  var i10683 = i10681[5]
  var i10682 = []
  for(var i = 0; i < i10683.length; i += 2) {
  request.r(i10683[i + 0], i10683[i + 1], 2, i10682, '')
  }
  i10680.sharedMaterials = i10682
  i10680.receiveShadows = !!i10681[6]
  i10680.shadowCastingMode = i10681[7]
  i10680.sortingLayerID = i10681[8]
  i10680.sortingOrder = i10681[9]
  i10680.lightmapIndex = i10681[10]
  i10680.lightmapSceneIndex = i10681[11]
  i10680.lightmapScaleOffset = new pc.Vec4( i10681[12], i10681[13], i10681[14], i10681[15] )
  i10680.lightProbeUsage = i10681[16]
  i10680.reflectionProbeUsage = i10681[17]
  return i10680
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i10684 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i10685 = data
  i10684.loop = !!i10685[0]
  i10684.timeScale = i10685[1]
  request.r(i10685[2], i10685[3], 0, i10684, 'skeletonDataAsset')
  i10684.initialSkinName = i10685[4]
  i10684.fixPrefabOverrideViaMeshFilter = i10685[5]
  i10684.initialFlipX = !!i10685[6]
  i10684.initialFlipY = !!i10685[7]
  i10684.updateWhenInvisible = i10685[8]
  i10684.zSpacing = i10685[9]
  i10684.useClipping = !!i10685[10]
  i10684.immutableTriangles = !!i10685[11]
  i10684.pmaVertexColors = !!i10685[12]
  i10684.clearStateOnDisable = !!i10685[13]
  i10684.tintBlack = !!i10685[14]
  i10684.singleSubmesh = !!i10685[15]
  i10684.fixDrawOrder = !!i10685[16]
  i10684.addNormals = !!i10685[17]
  i10684.calculateTangents = !!i10685[18]
  i10684.maskInteraction = i10685[19]
  i10684.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i10685[20], i10684.maskMaterials)
  i10684.disableRenderingOnOverride = !!i10685[21]
  i10684._animationName = i10685[22]
  var i10687 = i10685[23]
  var i10686 = []
  for(var i = 0; i < i10687.length; i += 1) {
    i10686.push( i10687[i + 0] );
  }
  i10684.separatorSlotNames = i10686
  return i10684
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i10688 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i10689 = data
  var i10691 = i10689[0]
  var i10690 = []
  for(var i = 0; i < i10691.length; i += 2) {
  request.r(i10691[i + 0], i10691[i + 1], 2, i10690, '')
  }
  i10688.materialsMaskDisabled = i10690
  var i10693 = i10689[1]
  var i10692 = []
  for(var i = 0; i < i10693.length; i += 2) {
  request.r(i10693[i + 0], i10693[i + 1], 2, i10692, '')
  }
  i10688.materialsInsideMask = i10692
  var i10695 = i10689[2]
  var i10694 = []
  for(var i = 0; i < i10695.length; i += 2) {
  request.r(i10695[i + 0], i10695[i + 1], 2, i10694, '')
  }
  i10688.materialsOutsideMask = i10694
  return i10688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i10696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i10697 = data
  i10696.center = new pc.Vec3( i10697[0], i10697[1], i10697[2] )
  i10696.size = new pc.Vec3( i10697[3], i10697[4], i10697[5] )
  i10696.enabled = !!i10697[6]
  i10696.isTrigger = !!i10697[7]
  request.r(i10697[8], i10697[9], 0, i10696, 'material')
  return i10696
}

Deserializers["LastTray"] = function (request, data, root) {
  var i10698 = root || request.c( 'LastTray' )
  var i10699 = data
  request.r(i10699[0], i10699[1], 0, i10698, 'tf')
  i10698.isShushiOn = !!i10699[2]
  i10698.isSauceOn = !!i10699[3]
  request.r(i10699[4], i10699[5], 0, i10698, 'shushiDone')
  request.r(i10699[6], i10699[7], 0, i10698, 'capybara')
  request.r(i10699[8], i10699[9], 0, i10698, 'items')
  i10698.isDone = !!i10699[10]
  i10698.onProcess = !!i10699[11]
  request.r(i10699[12], i10699[13], 0, i10698, 'itemDraggable')
  request.r(i10699[14], i10699[15], 0, i10698, 'itemClickable')
  request.r(i10699[16], i10699[17], 0, i10698, 'itemStirring')
  request.r(i10699[18], i10699[19], 0, i10698, 'itemKnifeSpriteMaskCutter')
  request.r(i10699[20], i10699[21], 0, i10698, 'itemSpriteMaskPainter')
  request.r(i10699[22], i10699[23], 0, i10698, 'itemDragSpriteMaskPainter')
  request.r(i10699[24], i10699[25], 0, i10698, 'itemMoveToTarget')
  request.r(i10699[26], i10699[27], 0, i10698, 'animator')
  i10698.itemType = i10699[28]
  request.r(i10699[29], i10699[30], 0, i10698, 'spriteRenderer')
  i10698.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10699[31], i10698.onKnifeIn)
  i10698.heartEffectScale = i10699[32]
  i10698.breakHeartEffectScale = i10699[33]
  i10698.blinkEffectScale = i10699[34]
  i10698.mergeEffectScale = i10699[35]
  i10698.playMoveToTargetFinishSound = !!i10699[36]
  i10698.moveToTargetFinishFxType = i10699[37]
  i10698.fxSpawnZPos = i10699[38]
  return i10698
}

Deserializers["Item"] = function (request, data, root) {
  var i10700 = root || request.c( 'Item' )
  var i10701 = data
  i10700.isDone = !!i10701[0]
  i10700.onProcess = !!i10701[1]
  request.r(i10701[2], i10701[3], 0, i10700, 'itemDraggable')
  request.r(i10701[4], i10701[5], 0, i10700, 'itemClickable')
  request.r(i10701[6], i10701[7], 0, i10700, 'itemStirring')
  request.r(i10701[8], i10701[9], 0, i10700, 'itemKnifeSpriteMaskCutter')
  request.r(i10701[10], i10701[11], 0, i10700, 'itemSpriteMaskPainter')
  request.r(i10701[12], i10701[13], 0, i10700, 'itemDragSpriteMaskPainter')
  request.r(i10701[14], i10701[15], 0, i10700, 'itemMoveToTarget')
  request.r(i10701[16], i10701[17], 0, i10700, 'animator')
  i10700.itemType = i10701[18]
  request.r(i10701[19], i10701[20], 0, i10700, 'spriteRenderer')
  i10700.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10701[21], i10700.onKnifeIn)
  i10700.heartEffectScale = i10701[22]
  i10700.breakHeartEffectScale = i10701[23]
  i10700.blinkEffectScale = i10701[24]
  i10700.mergeEffectScale = i10701[25]
  i10700.playMoveToTargetFinishSound = !!i10701[26]
  i10700.moveToTargetFinishFxType = i10701[27]
  i10700.fxSpawnZPos = i10701[28]
  return i10700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i10702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i10703 = data
  i10702.center = new pc.Vec3( i10703[0], i10703[1], i10703[2] )
  i10702.radius = i10703[3]
  i10702.height = i10703[4]
  i10702.direction = i10703[5]
  i10702.enabled = !!i10703[6]
  i10702.isTrigger = !!i10703[7]
  request.r(i10703[8], i10703[9], 0, i10702, 'material')
  return i10702
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i10704 = root || request.c( 'ItemDraggable' )
  var i10705 = data
  i10704.isDraggable = !!i10705[0]
  request.r(i10705[1], i10705[2], 0, i10704, 'returnTransform')
  i10704.setParentToReturnTransform = !!i10705[3]
  i10704.returnToExactReturnTransformPosition = !!i10705[4]
  i10704.targetItemType = i10705[5]
  request.r(i10705[6], i10705[7], 0, i10704, 'item')
  i10704.checkState = !!i10705[8]
  request.r(i10705[9], i10705[10], 0, i10704, 'shadowObject')
  i10704.playReturnToStartFinishSound = !!i10705[11]
  i10704.returnToStartFinishFxType = i10705[12]
  i10704.spawnBreakHeartOnDropFail = !!i10705[13]
  i10704.playBeginDragSound = !!i10705[14]
  i10704.beginDragFxType = i10705[15]
  i10704.liftOffset = i10705[16]
  i10704.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i10705[17], i10704.onBeginDrag)
  i10704.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i10705[18], i10704.onDropSuccess)
  i10704.onDropFail = request.d('UnityEngine.Events.UnityEvent', i10705[19], i10704.onDropFail)
  i10704.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i10705[20], i10704.onReturnToStartComplete)
  return i10704
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i10706 = root || request.c( 'ItemMoveToTarget' )
  var i10707 = data
  request.r(i10707[0], i10707[1], 0, i10706, 'defaultTarget')
  i10706.duration = i10707[2]
  i10706.easeType = i10707[3]
  i10706.moveType = i10707[4]
  i10706.jumpPower = i10707[5]
  i10706.numJumps = i10707[6]
  i10706.rotate360DuringJump = !!i10707[7]
  i10706.flipRotate = !!i10707[8]
  i10706.angleRotate = i10707[9]
  i10706.setParentToTarget = !!i10707[10]
  i10706.onComplete = request.d('UnityEngine.Events.UnityEvent', i10707[11], i10706.onComplete)
  i10706.lockInputWhileMoving = !!i10707[12]
  i10706.resetParentBeforeMove = !!i10707[13]
  return i10706
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i10708 = root || request.c( 'ItemDragChildRotator' )
  var i10709 = data
  request.r(i10709[0], i10709[1], 0, i10708, 'rotateTarget')
  i10708.dragEulerAngles = new pc.Vec3( i10709[2], i10709[3], i10709[4] )
  i10708.useLocalRotation = !!i10709[5]
  i10708.rotateRelative = !!i10709[6]
  i10708.rotateDuration = i10709[7]
  i10708.rotateEase = i10709[8]
  i10708.rotateMode = i10709[9]
  return i10708
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i10710 = root || request.c( 'ItemDragRaycastTarget' )
  var i10711 = data
  i10710.targetToFind = i10711[0]
  i10710.targetItemTypeWhenHit = i10711[1]
  i10710.targetItemTypeOnDropFail = i10711[2]
  request.r(i10711[3], i10711[4], 0, i10710, 'raycastPoint')
  i10710.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i10711[5] )
  i10710.rayDistance = i10711[6]
  i10710.updateMoveDefaultTarget = !!i10711[7]
  i10710.invokeOnlyWhenTargetChanged = !!i10711[8]
  i10710.targetChangeEnabled = !!i10711[9]
  i10710.restoreTargetOnDropFail = !!i10711[10]
  i10710.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i10711[11], i10710.onTargetFound)
  i10710.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i10711[12], i10710.onTargetFoundWithItem)
  return i10710
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i10712 = root || request.c( 'ItemRaycastTargetEvent' )
  var i10713 = data
  i10712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10713[0], i10712.m_PersistentCalls)
  return i10712
}

Deserializers["Chillie"] = function (request, data, root) {
  var i10714 = root || request.c( 'Chillie' )
  var i10715 = data
  request.r(i10715[0], i10715[1], 0, i10714, 'targetBowl')
  i10714.isDone = !!i10715[2]
  i10714.onProcess = !!i10715[3]
  request.r(i10715[4], i10715[5], 0, i10714, 'itemDraggable')
  request.r(i10715[6], i10715[7], 0, i10714, 'itemClickable')
  request.r(i10715[8], i10715[9], 0, i10714, 'itemStirring')
  request.r(i10715[10], i10715[11], 0, i10714, 'itemKnifeSpriteMaskCutter')
  request.r(i10715[12], i10715[13], 0, i10714, 'itemSpriteMaskPainter')
  request.r(i10715[14], i10715[15], 0, i10714, 'itemDragSpriteMaskPainter')
  request.r(i10715[16], i10715[17], 0, i10714, 'itemMoveToTarget')
  request.r(i10715[18], i10715[19], 0, i10714, 'animator')
  i10714.itemType = i10715[20]
  request.r(i10715[21], i10715[22], 0, i10714, 'spriteRenderer')
  i10714.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10715[23], i10714.onKnifeIn)
  i10714.heartEffectScale = i10715[24]
  i10714.breakHeartEffectScale = i10715[25]
  i10714.blinkEffectScale = i10715[26]
  i10714.mergeEffectScale = i10715[27]
  i10714.playMoveToTargetFinishSound = !!i10715[28]
  i10714.moveToTargetFinishFxType = i10715[29]
  i10714.fxSpawnZPos = i10715[30]
  return i10714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i10716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i10717 = data
  i10716.frontSortingLayerID = i10717[0]
  i10716.frontSortingOrder = i10717[1]
  i10716.backSortingLayerID = i10717[2]
  i10716.backSortingOrder = i10717[3]
  i10716.alphaCutoff = i10717[4]
  request.r(i10717[5], i10717[6], 0, i10716, 'sprite')
  i10716.tileMode = i10717[7]
  i10716.isCustomRangeActive = !!i10717[8]
  i10716.spriteSortPoint = i10717[9]
  i10716.enabled = !!i10717[10]
  request.r(i10717[11], i10717[12], 0, i10716, 'sharedMaterial')
  var i10719 = i10717[13]
  var i10718 = []
  for(var i = 0; i < i10719.length; i += 2) {
  request.r(i10719[i + 0], i10719[i + 1], 2, i10718, '')
  }
  i10716.sharedMaterials = i10718
  i10716.receiveShadows = !!i10717[14]
  i10716.shadowCastingMode = i10717[15]
  i10716.sortingLayerID = i10717[16]
  i10716.sortingOrder = i10717[17]
  i10716.lightmapIndex = i10717[18]
  i10716.lightmapSceneIndex = i10717[19]
  i10716.lightmapScaleOffset = new pc.Vec4( i10717[20], i10717[21], i10717[22], i10717[23] )
  i10716.lightProbeUsage = i10717[24]
  i10716.reflectionProbeUsage = i10717[25]
  return i10716
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i10720 = root || request.c( 'CuttingBoard' )
  var i10721 = data
  i10720.punchScale = new pc.Vec3( i10721[0], i10721[1], i10721[2] )
  i10720.punchDuration = i10721[3]
  i10720.foodInCount = i10721[4]
  i10720.isRiceIn = !!i10721[5]
  request.r(i10721[6], i10721[7], 0, i10720, 'shushi')
  i10720.isDone = !!i10721[8]
  i10720.onProcess = !!i10721[9]
  request.r(i10721[10], i10721[11], 0, i10720, 'itemDraggable')
  request.r(i10721[12], i10721[13], 0, i10720, 'itemClickable')
  request.r(i10721[14], i10721[15], 0, i10720, 'itemStirring')
  request.r(i10721[16], i10721[17], 0, i10720, 'itemKnifeSpriteMaskCutter')
  request.r(i10721[18], i10721[19], 0, i10720, 'itemSpriteMaskPainter')
  request.r(i10721[20], i10721[21], 0, i10720, 'itemDragSpriteMaskPainter')
  request.r(i10721[22], i10721[23], 0, i10720, 'itemMoveToTarget')
  request.r(i10721[24], i10721[25], 0, i10720, 'animator')
  i10720.itemType = i10721[26]
  request.r(i10721[27], i10721[28], 0, i10720, 'spriteRenderer')
  i10720.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10721[29], i10720.onKnifeIn)
  i10720.heartEffectScale = i10721[30]
  i10720.breakHeartEffectScale = i10721[31]
  i10720.blinkEffectScale = i10721[32]
  i10720.mergeEffectScale = i10721[33]
  i10720.playMoveToTargetFinishSound = !!i10721[34]
  i10720.moveToTargetFinishFxType = i10721[35]
  i10720.fxSpawnZPos = i10721[36]
  return i10720
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i10722 = root || request.c( 'ItemClickable' )
  var i10723 = data
  i10722.requiredClicks = i10723[0]
  i10722.infiniteClick = !!i10723[1]
  i10722.canClick = !!i10723[2]
  i10722.disableAfterClick = !!i10723[3]
  i10722.onClick = request.d('UnityEngine.Events.UnityEvent', i10723[4], i10722.onClick)
  var i10725 = i10723[5]
  var i10724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i10725.length; i += 1) {
    i10724.add(request.d('UnityEngine.Events.UnityEvent', i10725[i + 0]));
  }
  i10722.sequentialOnClicks = i10724
  i10722.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i10723[6], i10722.onClickComplete)
  return i10722
}

Deserializers["Shushi"] = function (request, data, root) {
  var i10728 = root || request.c( 'Shushi' )
  var i10729 = data
  request.r(i10729[0], i10729[1], 0, i10728, 'knife')
  i10728.isDone = !!i10729[2]
  i10728.onProcess = !!i10729[3]
  request.r(i10729[4], i10729[5], 0, i10728, 'itemDraggable')
  request.r(i10729[6], i10729[7], 0, i10728, 'itemClickable')
  request.r(i10729[8], i10729[9], 0, i10728, 'itemStirring')
  request.r(i10729[10], i10729[11], 0, i10728, 'itemKnifeSpriteMaskCutter')
  request.r(i10729[12], i10729[13], 0, i10728, 'itemSpriteMaskPainter')
  request.r(i10729[14], i10729[15], 0, i10728, 'itemDragSpriteMaskPainter')
  request.r(i10729[16], i10729[17], 0, i10728, 'itemMoveToTarget')
  request.r(i10729[18], i10729[19], 0, i10728, 'animator')
  i10728.itemType = i10729[20]
  request.r(i10729[21], i10729[22], 0, i10728, 'spriteRenderer')
  i10728.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10729[23], i10728.onKnifeIn)
  i10728.heartEffectScale = i10729[24]
  i10728.breakHeartEffectScale = i10729[25]
  i10728.blinkEffectScale = i10729[26]
  i10728.mergeEffectScale = i10729[27]
  i10728.playMoveToTargetFinishSound = !!i10729[28]
  i10728.moveToTargetFinishFxType = i10729[29]
  i10728.fxSpawnZPos = i10729[30]
  return i10728
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i10730 = root || request.c( 'CuttingItem' )
  var i10731 = data
  request.r(i10731[0], i10731[1], 0, i10730, 'itemKnife')
  request.r(i10731[2], i10731[3], 0, i10730, 'itemBeforeCut')
  request.r(i10731[4], i10731[5], 0, i10730, 'itemWaitToCut')
  request.r(i10731[6], i10731[7], 0, i10730, 'knifeBeforeCut')
  request.r(i10731[8], i10731[9], 0, i10730, 'knife')
  request.r(i10731[10], i10731[11], 0, i10730, 'cuttingBoard')
  request.r(i10731[12], i10731[13], 0, i10730, 'targetPlate')
  i10730.isOnBoard = !!i10731[14]
  i10730.targetPlateType = i10731[15]
  i10730.flyToDish = i10731[16]
  i10730.isFlyToDishAnim = !!i10731[17]
  i10730.cantCutOnFirst = !!i10731[18]
  i10730.isDone = !!i10731[19]
  i10730.onProcess = !!i10731[20]
  request.r(i10731[21], i10731[22], 0, i10730, 'itemDraggable')
  request.r(i10731[23], i10731[24], 0, i10730, 'itemClickable')
  request.r(i10731[25], i10731[26], 0, i10730, 'itemStirring')
  request.r(i10731[27], i10731[28], 0, i10730, 'itemKnifeSpriteMaskCutter')
  request.r(i10731[29], i10731[30], 0, i10730, 'itemSpriteMaskPainter')
  request.r(i10731[31], i10731[32], 0, i10730, 'itemDragSpriteMaskPainter')
  request.r(i10731[33], i10731[34], 0, i10730, 'itemMoveToTarget')
  request.r(i10731[35], i10731[36], 0, i10730, 'animator')
  i10730.itemType = i10731[37]
  request.r(i10731[38], i10731[39], 0, i10730, 'spriteRenderer')
  i10730.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i10731[40], i10730.onKnifeIn)
  i10730.heartEffectScale = i10731[41]
  i10730.breakHeartEffectScale = i10731[42]
  i10730.blinkEffectScale = i10731[43]
  i10730.mergeEffectScale = i10731[44]
  i10730.playMoveToTargetFinishSound = !!i10731[45]
  i10730.moveToTargetFinishFxType = i10731[46]
  i10730.fxSpawnZPos = i10731[47]
  return i10730
}

Deserializers["Dog"] = function (request, data, root) {
  var i10732 = root || request.c( 'Dog' )
  var i10733 = data
  request.r(i10733[0], i10733[1], 0, i10732, 'startPoint')
  request.r(i10733[2], i10733[3], 0, i10732, 'endPoint')
  i10732.moveDuration = i10733[4]
  i10732.easeType = i10733[5]
  return i10732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i10734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i10735 = data
  i10734.ambientIntensity = i10735[0]
  i10734.reflectionIntensity = i10735[1]
  i10734.ambientMode = i10735[2]
  i10734.ambientLight = new pc.Color(i10735[3], i10735[4], i10735[5], i10735[6])
  i10734.ambientSkyColor = new pc.Color(i10735[7], i10735[8], i10735[9], i10735[10])
  i10734.ambientGroundColor = new pc.Color(i10735[11], i10735[12], i10735[13], i10735[14])
  i10734.ambientEquatorColor = new pc.Color(i10735[15], i10735[16], i10735[17], i10735[18])
  i10734.fogColor = new pc.Color(i10735[19], i10735[20], i10735[21], i10735[22])
  i10734.fogEndDistance = i10735[23]
  i10734.fogStartDistance = i10735[24]
  i10734.fogDensity = i10735[25]
  i10734.fog = !!i10735[26]
  request.r(i10735[27], i10735[28], 0, i10734, 'skybox')
  i10734.fogMode = i10735[29]
  var i10737 = i10735[30]
  var i10736 = []
  for(var i = 0; i < i10737.length; i += 1) {
    i10736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i10737[i + 0]) );
  }
  i10734.lightmaps = i10736
  i10734.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i10735[31], i10734.lightProbes)
  i10734.lightmapsMode = i10735[32]
  i10734.mixedBakeMode = i10735[33]
  i10734.environmentLightingMode = i10735[34]
  i10734.ambientProbe = new pc.SphericalHarmonicsL2(i10735[35])
  i10734.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i10735[36])
  i10734.useReferenceAmbientProbe = !!i10735[37]
  request.r(i10735[38], i10735[39], 0, i10734, 'customReflection')
  request.r(i10735[40], i10735[41], 0, i10734, 'defaultReflection')
  i10734.defaultReflectionMode = i10735[42]
  i10734.defaultReflectionResolution = i10735[43]
  i10734.sunLightObjectId = i10735[44]
  i10734.pixelLightCount = i10735[45]
  i10734.defaultReflectionHDR = !!i10735[46]
  i10734.hasLightDataAsset = !!i10735[47]
  i10734.hasManualGenerate = !!i10735[48]
  return i10734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i10740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i10741 = data
  request.r(i10741[0], i10741[1], 0, i10740, 'lightmapColor')
  request.r(i10741[2], i10741[3], 0, i10740, 'lightmapDirection')
  request.r(i10741[4], i10741[5], 0, i10740, 'shadowMask')
  return i10740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i10742 = root || new UnityEngine.LightProbes()
  var i10743 = data
  return i10742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i10750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i10751 = data
  var i10753 = i10751[0]
  var i10752 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i10753.length; i += 1) {
    i10752.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i10753[i + 0]));
  }
  i10750.ShaderCompilationErrors = i10752
  i10750.name = i10751[1]
  i10750.guid = i10751[2]
  var i10755 = i10751[3]
  var i10754 = []
  for(var i = 0; i < i10755.length; i += 1) {
    i10754.push( i10755[i + 0] );
  }
  i10750.shaderDefinedKeywords = i10754
  var i10757 = i10751[4]
  var i10756 = []
  for(var i = 0; i < i10757.length; i += 1) {
    i10756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i10757[i + 0]) );
  }
  i10750.passes = i10756
  var i10759 = i10751[5]
  var i10758 = []
  for(var i = 0; i < i10759.length; i += 1) {
    i10758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i10759[i + 0]) );
  }
  i10750.usePasses = i10758
  var i10761 = i10751[6]
  var i10760 = []
  for(var i = 0; i < i10761.length; i += 1) {
    i10760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i10761[i + 0]) );
  }
  i10750.defaultParameterValues = i10760
  request.r(i10751[7], i10751[8], 0, i10750, 'unityFallbackShader')
  i10750.readDepth = !!i10751[9]
  i10750.hasDepthOnlyPass = !!i10751[10]
  i10750.isCreatedByShaderGraph = !!i10751[11]
  i10750.disableBatching = !!i10751[12]
  i10750.compiled = !!i10751[13]
  return i10750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i10764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i10765 = data
  i10764.shaderName = i10765[0]
  i10764.errorMessage = i10765[1]
  return i10764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i10768 = root || new pc.UnityShaderPass()
  var i10769 = data
  i10768.id = i10769[0]
  i10768.subShaderIndex = i10769[1]
  i10768.name = i10769[2]
  i10768.passType = i10769[3]
  i10768.grabPassTextureName = i10769[4]
  i10768.usePass = !!i10769[5]
  i10768.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[6], i10768.zTest)
  i10768.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[7], i10768.zWrite)
  i10768.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[8], i10768.culling)
  i10768.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10769[9], i10768.blending)
  i10768.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10769[10], i10768.alphaBlending)
  i10768.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[11], i10768.colorWriteMask)
  i10768.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[12], i10768.offsetUnits)
  i10768.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[13], i10768.offsetFactor)
  i10768.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[14], i10768.stencilRef)
  i10768.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[15], i10768.stencilReadMask)
  i10768.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10769[16], i10768.stencilWriteMask)
  i10768.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10769[17], i10768.stencilOp)
  i10768.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10769[18], i10768.stencilOpFront)
  i10768.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10769[19], i10768.stencilOpBack)
  var i10771 = i10769[20]
  var i10770 = []
  for(var i = 0; i < i10771.length; i += 1) {
    i10770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i10771[i + 0]) );
  }
  i10768.tags = i10770
  var i10773 = i10769[21]
  var i10772 = []
  for(var i = 0; i < i10773.length; i += 1) {
    i10772.push( i10773[i + 0] );
  }
  i10768.passDefinedKeywords = i10772
  var i10775 = i10769[22]
  var i10774 = []
  for(var i = 0; i < i10775.length; i += 1) {
    i10774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i10775[i + 0]) );
  }
  i10768.passDefinedKeywordGroups = i10774
  var i10777 = i10769[23]
  var i10776 = []
  for(var i = 0; i < i10777.length; i += 1) {
    i10776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10777[i + 0]) );
  }
  i10768.variants = i10776
  var i10779 = i10769[24]
  var i10778 = []
  for(var i = 0; i < i10779.length; i += 1) {
    i10778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10779[i + 0]) );
  }
  i10768.excludedVariants = i10778
  i10768.hasDepthReader = !!i10769[25]
  return i10768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i10780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i10781 = data
  i10780.val = i10781[0]
  i10780.name = i10781[1]
  return i10780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i10782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i10783 = data
  i10782.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10783[0], i10782.src)
  i10782.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10783[1], i10782.dst)
  i10782.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10783[2], i10782.op)
  return i10782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i10784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i10785 = data
  i10784.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10785[0], i10784.pass)
  i10784.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10785[1], i10784.fail)
  i10784.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10785[2], i10784.zFail)
  i10784.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10785[3], i10784.comp)
  return i10784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i10788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i10789 = data
  i10788.name = i10789[0]
  i10788.value = i10789[1]
  return i10788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i10792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i10793 = data
  var i10795 = i10793[0]
  var i10794 = []
  for(var i = 0; i < i10795.length; i += 1) {
    i10794.push( i10795[i + 0] );
  }
  i10792.keywords = i10794
  i10792.hasDiscard = !!i10793[1]
  return i10792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i10798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i10799 = data
  i10798.passId = i10799[0]
  i10798.subShaderIndex = i10799[1]
  var i10801 = i10799[2]
  var i10800 = []
  for(var i = 0; i < i10801.length; i += 1) {
    i10800.push( i10801[i + 0] );
  }
  i10798.keywords = i10800
  i10798.vertexProgram = i10799[3]
  i10798.fragmentProgram = i10799[4]
  i10798.exportedForWebGl2 = !!i10799[5]
  i10798.readDepth = !!i10799[6]
  return i10798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i10804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i10805 = data
  request.r(i10805[0], i10805[1], 0, i10804, 'shader')
  i10804.pass = i10805[2]
  return i10804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i10808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i10809 = data
  i10808.name = i10809[0]
  i10808.type = i10809[1]
  i10808.value = new pc.Vec4( i10809[2], i10809[3], i10809[4], i10809[5] )
  i10808.textureValue = i10809[6]
  i10808.shaderPropertyFlag = i10809[7]
  return i10808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i10810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i10811 = data
  i10810.name = i10811[0]
  request.r(i10811[1], i10811[2], 0, i10810, 'texture')
  i10810.aabb = i10811[3]
  i10810.vertices = i10811[4]
  i10810.triangles = i10811[5]
  i10810.textureRect = UnityEngine.Rect.MinMaxRect(i10811[6], i10811[7], i10811[8], i10811[9])
  i10810.packedRect = UnityEngine.Rect.MinMaxRect(i10811[10], i10811[11], i10811[12], i10811[13])
  i10810.border = new pc.Vec4( i10811[14], i10811[15], i10811[16], i10811[17] )
  i10810.transparency = i10811[18]
  i10810.bounds = i10811[19]
  i10810.pixelsPerUnit = i10811[20]
  i10810.textureWidth = i10811[21]
  i10810.textureHeight = i10811[22]
  i10810.nativeSize = new pc.Vec2( i10811[23], i10811[24] )
  i10810.pivot = new pc.Vec2( i10811[25], i10811[26] )
  i10810.textureRectOffset = new pc.Vec2( i10811[27], i10811[28] )
  return i10810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i10812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i10813 = data
  i10812.name = i10813[0]
  return i10812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i10814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i10815 = data
  i10814.name = i10815[0]
  i10814.wrapMode = i10815[1]
  i10814.isLooping = !!i10815[2]
  i10814.length = i10815[3]
  var i10817 = i10815[4]
  var i10816 = []
  for(var i = 0; i < i10817.length; i += 1) {
    i10816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i10817[i + 0]) );
  }
  i10814.curves = i10816
  var i10819 = i10815[5]
  var i10818 = []
  for(var i = 0; i < i10819.length; i += 1) {
    i10818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i10819[i + 0]) );
  }
  i10814.events = i10818
  i10814.halfPrecision = !!i10815[6]
  i10814._frameRate = i10815[7]
  i10814.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i10815[8], i10814.localBounds)
  i10814.hasMuscleCurves = !!i10815[9]
  var i10821 = i10815[10]
  var i10820 = []
  for(var i = 0; i < i10821.length; i += 1) {
    i10820.push( i10821[i + 0] );
  }
  i10814.clipMuscleConstant = i10820
  i10814.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i10815[11], i10814.clipBindingConstant)
  return i10814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i10824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i10825 = data
  i10824.path = i10825[0]
  i10824.hash = i10825[1]
  i10824.componentType = i10825[2]
  i10824.property = i10825[3]
  i10824.keys = i10825[4]
  var i10827 = i10825[5]
  var i10826 = []
  for(var i = 0; i < i10827.length; i += 1) {
    i10826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i10827[i + 0]) );
  }
  i10824.objectReferenceKeys = i10826
  return i10824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i10830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i10831 = data
  i10830.time = i10831[0]
  request.r(i10831[1], i10831[2], 0, i10830, 'value')
  return i10830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i10834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i10835 = data
  i10834.functionName = i10835[0]
  i10834.floatParameter = i10835[1]
  i10834.intParameter = i10835[2]
  i10834.stringParameter = i10835[3]
  request.r(i10835[4], i10835[5], 0, i10834, 'objectReferenceParameter')
  i10834.time = i10835[6]
  return i10834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i10836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i10837 = data
  i10836.center = new pc.Vec3( i10837[0], i10837[1], i10837[2] )
  i10836.extends = new pc.Vec3( i10837[3], i10837[4], i10837[5] )
  return i10836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i10840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i10841 = data
  var i10843 = i10841[0]
  var i10842 = []
  for(var i = 0; i < i10843.length; i += 1) {
    i10842.push( i10843[i + 0] );
  }
  i10840.genericBindings = i10842
  var i10845 = i10841[1]
  var i10844 = []
  for(var i = 0; i < i10845.length; i += 1) {
    i10844.push( i10845[i + 0] );
  }
  i10840.pptrCurveMapping = i10844
  return i10840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i10846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i10847 = data
  i10846.name = i10847[0]
  var i10849 = i10847[1]
  var i10848 = []
  for(var i = 0; i < i10849.length; i += 1) {
    i10848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i10849[i + 0]) );
  }
  i10846.layers = i10848
  var i10851 = i10847[2]
  var i10850 = []
  for(var i = 0; i < i10851.length; i += 1) {
    i10850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i10851[i + 0]) );
  }
  i10846.parameters = i10850
  i10846.animationClips = i10847[3]
  i10846.avatarUnsupported = i10847[4]
  return i10846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i10854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i10855 = data
  i10854.name = i10855[0]
  i10854.defaultWeight = i10855[1]
  i10854.blendingMode = i10855[2]
  i10854.avatarMask = i10855[3]
  i10854.syncedLayerIndex = i10855[4]
  i10854.syncedLayerAffectsTiming = !!i10855[5]
  i10854.syncedLayers = i10855[6]
  i10854.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10855[7], i10854.stateMachine)
  return i10854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i10856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i10857 = data
  i10856.id = i10857[0]
  i10856.name = i10857[1]
  i10856.path = i10857[2]
  var i10859 = i10857[3]
  var i10858 = []
  for(var i = 0; i < i10859.length; i += 1) {
    i10858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i10859[i + 0]) );
  }
  i10856.states = i10858
  var i10861 = i10857[4]
  var i10860 = []
  for(var i = 0; i < i10861.length; i += 1) {
    i10860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10861[i + 0]) );
  }
  i10856.machines = i10860
  var i10863 = i10857[5]
  var i10862 = []
  for(var i = 0; i < i10863.length; i += 1) {
    i10862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10863[i + 0]) );
  }
  i10856.entryStateTransitions = i10862
  var i10865 = i10857[6]
  var i10864 = []
  for(var i = 0; i < i10865.length; i += 1) {
    i10864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10865[i + 0]) );
  }
  i10856.exitStateTransitions = i10864
  var i10867 = i10857[7]
  var i10866 = []
  for(var i = 0; i < i10867.length; i += 1) {
    i10866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10867[i + 0]) );
  }
  i10856.anyStateTransitions = i10866
  i10856.defaultStateId = i10857[8]
  return i10856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i10870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i10871 = data
  i10870.id = i10871[0]
  i10870.name = i10871[1]
  i10870.cycleOffset = i10871[2]
  i10870.cycleOffsetParameter = i10871[3]
  i10870.cycleOffsetParameterActive = !!i10871[4]
  i10870.mirror = !!i10871[5]
  i10870.mirrorParameter = i10871[6]
  i10870.mirrorParameterActive = !!i10871[7]
  i10870.motionId = i10871[8]
  i10870.nameHash = i10871[9]
  i10870.fullPathHash = i10871[10]
  i10870.speed = i10871[11]
  i10870.speedParameter = i10871[12]
  i10870.speedParameterActive = !!i10871[13]
  i10870.tag = i10871[14]
  i10870.tagHash = i10871[15]
  i10870.writeDefaultValues = !!i10871[16]
  var i10873 = i10871[17]
  var i10872 = []
  for(var i = 0; i < i10873.length; i += 2) {
  request.r(i10873[i + 0], i10873[i + 1], 2, i10872, '')
  }
  i10870.behaviours = i10872
  var i10875 = i10871[18]
  var i10874 = []
  for(var i = 0; i < i10875.length; i += 1) {
    i10874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10875[i + 0]) );
  }
  i10870.transitions = i10874
  return i10870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i10880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i10881 = data
  i10880.fullPath = i10881[0]
  i10880.canTransitionToSelf = !!i10881[1]
  i10880.duration = i10881[2]
  i10880.exitTime = i10881[3]
  i10880.hasExitTime = !!i10881[4]
  i10880.hasFixedDuration = !!i10881[5]
  i10880.interruptionSource = i10881[6]
  i10880.offset = i10881[7]
  i10880.orderedInterruption = !!i10881[8]
  i10880.destinationStateId = i10881[9]
  i10880.isExit = !!i10881[10]
  i10880.mute = !!i10881[11]
  i10880.solo = !!i10881[12]
  var i10883 = i10881[13]
  var i10882 = []
  for(var i = 0; i < i10883.length; i += 1) {
    i10882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10883[i + 0]) );
  }
  i10880.conditions = i10882
  return i10880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i10888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i10889 = data
  i10888.destinationStateId = i10889[0]
  i10888.isExit = !!i10889[1]
  i10888.mute = !!i10889[2]
  i10888.solo = !!i10889[3]
  var i10891 = i10889[4]
  var i10890 = []
  for(var i = 0; i < i10891.length; i += 1) {
    i10890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10891[i + 0]) );
  }
  i10888.conditions = i10890
  return i10888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i10894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i10895 = data
  i10894.defaultBool = !!i10895[0]
  i10894.defaultFloat = i10895[1]
  i10894.defaultInt = i10895[2]
  i10894.name = i10895[3]
  i10894.nameHash = i10895[4]
  i10894.type = i10895[5]
  return i10894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i10898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i10899 = data
  i10898.mode = i10899[0]
  i10898.parameter = i10899[1]
  i10898.threshold = i10899[2]
  return i10898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10901 = data
  i10900.name = i10901[0]
  i10900.bytes64 = i10901[1]
  i10900.data = i10901[2]
  return i10900
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10902 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10903 = data
  i10902.normalStyle = i10903[0]
  i10902.normalSpacingOffset = i10903[1]
  i10902.boldStyle = i10903[2]
  i10902.boldSpacing = i10903[3]
  i10902.italicStyle = i10903[4]
  i10902.tabSize = i10903[5]
  request.r(i10903[6], i10903[7], 0, i10902, 'atlas')
  i10902.m_SourceFontFileGUID = i10903[8]
  i10902.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10903[9], i10902.m_CreationSettings)
  request.r(i10903[10], i10903[11], 0, i10902, 'm_SourceFontFile')
  i10902.m_SourceFontFilePath = i10903[12]
  i10902.m_AtlasPopulationMode = i10903[13]
  i10902.InternalDynamicOS = !!i10903[14]
  var i10905 = i10903[15]
  var i10904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10905.length; i += 1) {
    i10904.add(request.d('UnityEngine.TextCore.Glyph', i10905[i + 0]));
  }
  i10902.m_GlyphTable = i10904
  var i10907 = i10903[16]
  var i10906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10907.length; i += 1) {
    i10906.add(request.d('TMPro.TMP_Character', i10907[i + 0]));
  }
  i10902.m_CharacterTable = i10906
  var i10909 = i10903[17]
  var i10908 = []
  for(var i = 0; i < i10909.length; i += 2) {
  request.r(i10909[i + 0], i10909[i + 1], 2, i10908, '')
  }
  i10902.m_AtlasTextures = i10908
  i10902.m_AtlasTextureIndex = i10903[18]
  i10902.m_IsMultiAtlasTexturesEnabled = !!i10903[19]
  i10902.m_GetFontFeatures = !!i10903[20]
  i10902.m_ClearDynamicDataOnBuild = !!i10903[21]
  i10902.m_AtlasWidth = i10903[22]
  i10902.m_AtlasHeight = i10903[23]
  i10902.m_AtlasPadding = i10903[24]
  i10902.m_AtlasRenderMode = i10903[25]
  var i10911 = i10903[26]
  var i10910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10911.length; i += 1) {
    i10910.add(request.d('UnityEngine.TextCore.GlyphRect', i10911[i + 0]));
  }
  i10902.m_UsedGlyphRects = i10910
  var i10913 = i10903[27]
  var i10912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10913.length; i += 1) {
    i10912.add(request.d('UnityEngine.TextCore.GlyphRect', i10913[i + 0]));
  }
  i10902.m_FreeGlyphRects = i10912
  i10902.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10903[28], i10902.m_FontFeatureTable)
  i10902.m_ShouldReimportFontFeatures = !!i10903[29]
  var i10915 = i10903[30]
  var i10914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10915.length; i += 2) {
  request.r(i10915[i + 0], i10915[i + 1], 1, i10914, '')
  }
  i10902.m_FallbackFontAssetTable = i10914
  var i10917 = i10903[31]
  var i10916 = []
  for(var i = 0; i < i10917.length; i += 1) {
    i10916.push( request.d('TMPro.TMP_FontWeightPair', i10917[i + 0]) );
  }
  i10902.m_FontWeightTable = i10916
  var i10919 = i10903[32]
  var i10918 = []
  for(var i = 0; i < i10919.length; i += 1) {
    i10918.push( request.d('TMPro.TMP_FontWeightPair', i10919[i + 0]) );
  }
  i10902.fontWeights = i10918
  i10902.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10903[33], i10902.m_fontInfo)
  var i10921 = i10903[34]
  var i10920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10921.length; i += 1) {
    i10920.add(request.d('TMPro.TMP_Glyph', i10921[i + 0]));
  }
  i10902.m_glyphInfoList = i10920
  i10902.m_KerningTable = request.d('TMPro.KerningTable', i10903[35], i10902.m_KerningTable)
  var i10923 = i10903[36]
  var i10922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10923.length; i += 2) {
  request.r(i10923[i + 0], i10923[i + 1], 1, i10922, '')
  }
  i10902.fallbackFontAssets = i10922
  i10902.m_Version = i10903[37]
  i10902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10903[38], i10902.m_FaceInfo)
  request.r(i10903[39], i10903[40], 0, i10902, 'm_Material')
  return i10902
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10924 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10925 = data
  i10924.sourceFontFileName = i10925[0]
  i10924.sourceFontFileGUID = i10925[1]
  i10924.faceIndex = i10925[2]
  i10924.pointSizeSamplingMode = i10925[3]
  i10924.pointSize = i10925[4]
  i10924.padding = i10925[5]
  i10924.paddingMode = i10925[6]
  i10924.packingMode = i10925[7]
  i10924.atlasWidth = i10925[8]
  i10924.atlasHeight = i10925[9]
  i10924.characterSetSelectionMode = i10925[10]
  i10924.characterSequence = i10925[11]
  i10924.referencedFontAssetGUID = i10925[12]
  i10924.referencedTextAssetGUID = i10925[13]
  i10924.fontStyle = i10925[14]
  i10924.fontStyleModifier = i10925[15]
  i10924.renderMode = i10925[16]
  i10924.includeFontFeatures = !!i10925[17]
  return i10924
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10928 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10929 = data
  i10928.m_Index = i10929[0]
  i10928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10929[1], i10928.m_Metrics)
  i10928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10929[2], i10928.m_GlyphRect)
  i10928.m_Scale = i10929[3]
  i10928.m_AtlasIndex = i10929[4]
  i10928.m_ClassDefinitionType = i10929[5]
  return i10928
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10930 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10931 = data
  i10930.m_Width = i10931[0]
  i10930.m_Height = i10931[1]
  i10930.m_HorizontalBearingX = i10931[2]
  i10930.m_HorizontalBearingY = i10931[3]
  i10930.m_HorizontalAdvance = i10931[4]
  return i10930
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10932 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10933 = data
  i10932.m_X = i10933[0]
  i10932.m_Y = i10933[1]
  i10932.m_Width = i10933[2]
  i10932.m_Height = i10933[3]
  return i10932
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10936 = root || request.c( 'TMPro.TMP_Character' )
  var i10937 = data
  i10936.m_ElementType = i10937[0]
  i10936.m_Unicode = i10937[1]
  i10936.m_GlyphIndex = i10937[2]
  i10936.m_Scale = i10937[3]
  return i10936
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10942 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10943 = data
  var i10945 = i10943[0]
  var i10944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i10945.length; i += 1) {
    i10944.add(request.d('TMPro.MultipleSubstitutionRecord', i10945[i + 0]));
  }
  i10942.m_MultipleSubstitutionRecords = i10944
  var i10947 = i10943[1]
  var i10946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i10947.length; i += 1) {
    i10946.add(request.d('TMPro.LigatureSubstitutionRecord', i10947[i + 0]));
  }
  i10942.m_LigatureSubstitutionRecords = i10946
  var i10949 = i10943[2]
  var i10948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10949.length; i += 1) {
    i10948.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i10949[i + 0]));
  }
  i10942.m_GlyphPairAdjustmentRecords = i10948
  var i10951 = i10943[3]
  var i10950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i10951.length; i += 1) {
    i10950.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i10951[i + 0]));
  }
  i10942.m_MarkToBaseAdjustmentRecords = i10950
  var i10953 = i10943[4]
  var i10952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i10953.length; i += 1) {
    i10952.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i10953[i + 0]));
  }
  i10942.m_MarkToMarkAdjustmentRecords = i10952
  return i10942
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i10956 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i10957 = data
  i10956.m_TargetGlyphID = i10957[0]
  i10956.m_SubstituteGlyphIDs = i10957[1]
  return i10956
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i10960 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i10961 = data
  i10960.m_ComponentGlyphIDs = i10961[0]
  i10960.m_LigatureGlyphID = i10961[1]
  return i10960
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10964 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i10965 = data
  i10964.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10965[0], i10964.m_FirstAdjustmentRecord)
  i10964.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10965[1], i10964.m_SecondAdjustmentRecord)
  i10964.m_FeatureLookupFlags = i10965[2]
  return i10964
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i10968 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i10969 = data
  i10968.m_BaseGlyphID = i10969[0]
  i10968.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10969[1], i10968.m_BaseGlyphAnchorPoint)
  i10968.m_MarkGlyphID = i10969[2]
  i10968.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10969[3], i10968.m_MarkPositionAdjustment)
  return i10968
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i10972 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i10973 = data
  i10972.m_BaseMarkGlyphID = i10973[0]
  i10972.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10973[1], i10972.m_BaseMarkGlyphAnchorPoint)
  i10972.m_CombiningMarkGlyphID = i10973[2]
  i10972.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10973[3], i10972.m_CombiningMarkPositionAdjustment)
  return i10972
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10978 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10979 = data
  request.r(i10979[0], i10979[1], 0, i10978, 'regularTypeface')
  request.r(i10979[2], i10979[3], 0, i10978, 'italicTypeface')
  return i10978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10980 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10981 = data
  i10980.Name = i10981[0]
  i10980.PointSize = i10981[1]
  i10980.Scale = i10981[2]
  i10980.CharacterCount = i10981[3]
  i10980.LineHeight = i10981[4]
  i10980.Baseline = i10981[5]
  i10980.Ascender = i10981[6]
  i10980.CapHeight = i10981[7]
  i10980.Descender = i10981[8]
  i10980.CenterLine = i10981[9]
  i10980.SuperscriptOffset = i10981[10]
  i10980.SubscriptOffset = i10981[11]
  i10980.SubSize = i10981[12]
  i10980.Underline = i10981[13]
  i10980.UnderlineThickness = i10981[14]
  i10980.strikethrough = i10981[15]
  i10980.strikethroughThickness = i10981[16]
  i10980.TabWidth = i10981[17]
  i10980.Padding = i10981[18]
  i10980.AtlasWidth = i10981[19]
  i10980.AtlasHeight = i10981[20]
  return i10980
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10984 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10985 = data
  i10984.id = i10985[0]
  i10984.x = i10985[1]
  i10984.y = i10985[2]
  i10984.width = i10985[3]
  i10984.height = i10985[4]
  i10984.xOffset = i10985[5]
  i10984.yOffset = i10985[6]
  i10984.xAdvance = i10985[7]
  i10984.scale = i10985[8]
  return i10984
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10986 = root || request.c( 'TMPro.KerningTable' )
  var i10987 = data
  var i10989 = i10987[0]
  var i10988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10989.length; i += 1) {
    i10988.add(request.d('TMPro.KerningPair', i10989[i + 0]));
  }
  i10986.kerningPairs = i10988
  return i10986
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10992 = root || request.c( 'TMPro.KerningPair' )
  var i10993 = data
  i10992.xOffset = i10993[0]
  i10992.m_FirstGlyph = i10993[1]
  i10992.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10993[2], i10992.m_FirstGlyphAdjustments)
  i10992.m_SecondGlyph = i10993[3]
  i10992.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10993[4], i10992.m_SecondGlyphAdjustments)
  i10992.m_IgnoreSpacingAdjustments = !!i10993[5]
  return i10992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10994 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10995 = data
  i10994.m_FaceIndex = i10995[0]
  i10994.m_FamilyName = i10995[1]
  i10994.m_StyleName = i10995[2]
  i10994.m_PointSize = i10995[3]
  i10994.m_Scale = i10995[4]
  i10994.m_UnitsPerEM = i10995[5]
  i10994.m_LineHeight = i10995[6]
  i10994.m_AscentLine = i10995[7]
  i10994.m_CapLine = i10995[8]
  i10994.m_MeanLine = i10995[9]
  i10994.m_Baseline = i10995[10]
  i10994.m_DescentLine = i10995[11]
  i10994.m_SuperscriptOffset = i10995[12]
  i10994.m_SuperscriptSize = i10995[13]
  i10994.m_SubscriptOffset = i10995[14]
  i10994.m_SubscriptSize = i10995[15]
  i10994.m_UnderlineOffset = i10995[16]
  i10994.m_UnderlineThickness = i10995[17]
  i10994.m_StrikethroughOffset = i10995[18]
  i10994.m_StrikethroughThickness = i10995[19]
  i10994.m_TabWidth = i10995[20]
  return i10994
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i10996 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i10997 = data
  var i10999 = i10997[0]
  var i10998 = []
  for(var i = 0; i < i10999.length; i += 2) {
  request.r(i10999[i + 0], i10999[i + 1], 2, i10998, '')
  }
  i10996.atlasAssets = i10998
  i10996.scale = i10997[1]
  request.r(i10997[2], i10997[3], 0, i10996, 'skeletonJSON')
  i10996.isUpgradingBlendModeMaterials = !!i10997[4]
  i10996.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i10997[5], i10996.blendModeMaterials)
  var i11001 = i10997[6]
  var i11000 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i11001.length; i += 2) {
  request.r(i11001[i + 0], i11001[i + 1], 1, i11000, '')
  }
  i10996.skeletonDataModifiers = i11000
  var i11003 = i10997[7]
  var i11002 = []
  for(var i = 0; i < i11003.length; i += 1) {
    i11002.push( i11003[i + 0] );
  }
  i10996.fromAnimation = i11002
  var i11005 = i10997[8]
  var i11004 = []
  for(var i = 0; i < i11005.length; i += 1) {
    i11004.push( i11005[i + 0] );
  }
  i10996.toAnimation = i11004
  i10996.duration = i10997[9]
  i10996.defaultMix = i10997[10]
  request.r(i10997[11], i10997[12], 0, i10996, 'controller')
  return i10996
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i11008 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i11009 = data
  i11008.applyAdditiveMaterial = !!i11009[0]
  var i11011 = i11009[1]
  var i11010 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i11011.length; i += 1) {
    i11010.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i11011[i + 0]));
  }
  i11008.additiveMaterials = i11010
  var i11013 = i11009[2]
  var i11012 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i11013.length; i += 1) {
    i11012.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i11013[i + 0]));
  }
  i11008.multiplyMaterials = i11012
  var i11015 = i11009[3]
  var i11014 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i11015.length; i += 1) {
    i11014.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i11015[i + 0]));
  }
  i11008.screenMaterials = i11014
  i11008.requiresBlendModeMaterials = !!i11009[4]
  return i11008
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i11018 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i11019 = data
  i11018.pageName = i11019[0]
  request.r(i11019[1], i11019[2], 0, i11018, 'material')
  return i11018
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i11022 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i11023 = data
  request.r(i11023[0], i11023[1], 0, i11022, 'atlasFile')
  var i11025 = i11023[2]
  var i11024 = []
  for(var i = 0; i < i11025.length; i += 2) {
  request.r(i11025[i + 0], i11025[i + 1], 2, i11024, '')
  }
  i11022.materials = i11024
  return i11022
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11027 = data
  i11026.useSafeMode = !!i11027[0]
  i11026.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11027[1], i11026.safeModeOptions)
  i11026.timeScale = i11027[2]
  i11026.unscaledTimeScale = i11027[3]
  i11026.useSmoothDeltaTime = !!i11027[4]
  i11026.maxSmoothUnscaledTime = i11027[5]
  i11026.rewindCallbackMode = i11027[6]
  i11026.showUnityEditorReport = !!i11027[7]
  i11026.logBehaviour = i11027[8]
  i11026.drawGizmos = !!i11027[9]
  i11026.defaultRecyclable = !!i11027[10]
  i11026.defaultAutoPlay = i11027[11]
  i11026.defaultUpdateType = i11027[12]
  i11026.defaultTimeScaleIndependent = !!i11027[13]
  i11026.defaultEaseType = i11027[14]
  i11026.defaultEaseOvershootOrAmplitude = i11027[15]
  i11026.defaultEasePeriod = i11027[16]
  i11026.defaultAutoKill = !!i11027[17]
  i11026.defaultLoopType = i11027[18]
  i11026.debugMode = !!i11027[19]
  i11026.debugStoreTargetId = !!i11027[20]
  i11026.showPreviewPanel = !!i11027[21]
  i11026.storeSettingsLocation = i11027[22]
  i11026.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11027[23], i11026.modules)
  i11026.createASMDEF = !!i11027[24]
  i11026.showPlayingTweens = !!i11027[25]
  i11026.showPausedTweens = !!i11027[26]
  return i11026
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11028 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11029 = data
  i11028.logBehaviour = i11029[0]
  i11028.nestedTweenFailureBehaviour = i11029[1]
  return i11028
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11031 = data
  i11030.showPanel = !!i11031[0]
  i11030.audioEnabled = !!i11031[1]
  i11030.physicsEnabled = !!i11031[2]
  i11030.physics2DEnabled = !!i11031[3]
  i11030.spriteEnabled = !!i11031[4]
  i11030.uiEnabled = !!i11031[5]
  i11030.uiToolkitEnabled = !!i11031[6]
  i11030.textMeshProEnabled = !!i11031[7]
  i11030.tk2DEnabled = !!i11031[8]
  i11030.deAudioEnabled = !!i11031[9]
  i11030.deUnityExtendedEnabled = !!i11031[10]
  i11030.epoOutlineEnabled = !!i11031[11]
  return i11030
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i11032 = root || request.c( 'TMPro.TMP_Settings' )
  var i11033 = data
  i11032.assetVersion = i11033[0]
  i11032.m_TextWrappingMode = i11033[1]
  i11032.m_enableKerning = !!i11033[2]
  var i11035 = i11033[3]
  var i11034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i11035.length; i += 1) {
    i11034.add(i11035[i + 0]);
  }
  i11032.m_ActiveFontFeatures = i11034
  i11032.m_enableExtraPadding = !!i11033[4]
  i11032.m_enableTintAllSprites = !!i11033[5]
  i11032.m_enableParseEscapeCharacters = !!i11033[6]
  i11032.m_EnableRaycastTarget = !!i11033[7]
  i11032.m_GetFontFeaturesAtRuntime = !!i11033[8]
  i11032.m_missingGlyphCharacter = i11033[9]
  i11032.m_ClearDynamicDataOnBuild = !!i11033[10]
  i11032.m_warningsDisabled = !!i11033[11]
  request.r(i11033[12], i11033[13], 0, i11032, 'm_defaultFontAsset')
  i11032.m_defaultFontAssetPath = i11033[14]
  i11032.m_defaultFontSize = i11033[15]
  i11032.m_defaultAutoSizeMinRatio = i11033[16]
  i11032.m_defaultAutoSizeMaxRatio = i11033[17]
  i11032.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i11033[18], i11033[19] )
  i11032.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i11033[20], i11033[21] )
  i11032.m_autoSizeTextContainer = !!i11033[22]
  i11032.m_IsTextObjectScaleStatic = !!i11033[23]
  var i11037 = i11033[24]
  var i11036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11037.length; i += 2) {
  request.r(i11037[i + 0], i11037[i + 1], 1, i11036, '')
  }
  i11032.m_fallbackFontAssets = i11036
  i11032.m_matchMaterialPreset = !!i11033[25]
  i11032.m_HideSubTextObjects = !!i11033[26]
  request.r(i11033[27], i11033[28], 0, i11032, 'm_defaultSpriteAsset')
  i11032.m_defaultSpriteAssetPath = i11033[29]
  i11032.m_enableEmojiSupport = !!i11033[30]
  i11032.m_MissingCharacterSpriteUnicode = i11033[31]
  var i11039 = i11033[32]
  var i11038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i11039.length; i += 2) {
  request.r(i11039[i + 0], i11039[i + 1], 1, i11038, '')
  }
  i11032.m_EmojiFallbackTextAssets = i11038
  i11032.m_defaultColorGradientPresetsPath = i11033[33]
  request.r(i11033[34], i11033[35], 0, i11032, 'm_defaultStyleSheet')
  i11032.m_StyleSheetsResourcePath = i11033[36]
  request.r(i11033[37], i11033[38], 0, i11032, 'm_leadingCharacters')
  request.r(i11033[39], i11033[40], 0, i11032, 'm_followingCharacters')
  i11032.m_UseModernHangulLineBreakingRules = !!i11033[41]
  return i11032
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i11042 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i11043 = data
  request.r(i11043[0], i11043[1], 0, i11042, 'spriteSheet')
  var i11045 = i11043[2]
  var i11044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i11045.length; i += 1) {
    i11044.add(request.d('TMPro.TMP_Sprite', i11045[i + 0]));
  }
  i11042.spriteInfoList = i11044
  var i11047 = i11043[3]
  var i11046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i11047.length; i += 2) {
  request.r(i11047[i + 0], i11047[i + 1], 1, i11046, '')
  }
  i11042.fallbackSpriteAssets = i11046
  var i11049 = i11043[4]
  var i11048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i11049.length; i += 1) {
    i11048.add(request.d('TMPro.TMP_SpriteCharacter', i11049[i + 0]));
  }
  i11042.m_SpriteCharacterTable = i11048
  var i11051 = i11043[5]
  var i11050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i11051.length; i += 1) {
    i11050.add(request.d('TMPro.TMP_SpriteGlyph', i11051[i + 0]));
  }
  i11042.m_GlyphTable = i11050
  i11042.m_Version = i11043[6]
  i11042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11043[7], i11042.m_FaceInfo)
  request.r(i11043[8], i11043[9], 0, i11042, 'm_Material')
  return i11042
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i11054 = root || request.c( 'TMPro.TMP_Sprite' )
  var i11055 = data
  i11054.name = i11055[0]
  i11054.hashCode = i11055[1]
  i11054.unicode = i11055[2]
  i11054.pivot = new pc.Vec2( i11055[3], i11055[4] )
  request.r(i11055[5], i11055[6], 0, i11054, 'sprite')
  i11054.id = i11055[7]
  i11054.x = i11055[8]
  i11054.y = i11055[9]
  i11054.width = i11055[10]
  i11054.height = i11055[11]
  i11054.xOffset = i11055[12]
  i11054.yOffset = i11055[13]
  i11054.xAdvance = i11055[14]
  i11054.scale = i11055[15]
  return i11054
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i11060 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i11061 = data
  i11060.m_Name = i11061[0]
  i11060.m_ElementType = i11061[1]
  i11060.m_Unicode = i11061[2]
  i11060.m_GlyphIndex = i11061[3]
  i11060.m_Scale = i11061[4]
  return i11060
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i11064 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i11065 = data
  request.r(i11065[0], i11065[1], 0, i11064, 'sprite')
  i11064.m_Index = i11065[2]
  i11064.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11065[3], i11064.m_Metrics)
  i11064.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11065[4], i11064.m_GlyphRect)
  i11064.m_Scale = i11065[5]
  i11064.m_AtlasIndex = i11065[6]
  i11064.m_ClassDefinitionType = i11065[7]
  return i11064
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i11066 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i11067 = data
  var i11069 = i11067[0]
  var i11068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i11069.length; i += 1) {
    i11068.add(request.d('TMPro.TMP_Style', i11069[i + 0]));
  }
  i11066.m_StyleList = i11068
  return i11066
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i11072 = root || request.c( 'TMPro.TMP_Style' )
  var i11073 = data
  i11072.m_Name = i11073[0]
  i11072.m_HashCode = i11073[1]
  i11072.m_OpeningDefinition = i11073[2]
  i11072.m_ClosingDefinition = i11073[3]
  i11072.m_OpeningTagArray = i11073[4]
  i11072.m_ClosingTagArray = i11073[5]
  return i11072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11075 = data
  var i11077 = i11075[0]
  var i11076 = []
  for(var i = 0; i < i11077.length; i += 1) {
    i11076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11077[i + 0]) );
  }
  i11074.files = i11076
  i11074.componentToPrefabIds = i11075[1]
  return i11074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11081 = data
  i11080.path = i11081[0]
  request.r(i11081[1], i11081[2], 0, i11080, 'unityObject')
  return i11080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11083 = data
  var i11085 = i11083[0]
  var i11084 = []
  for(var i = 0; i < i11085.length; i += 1) {
    i11084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11085[i + 0]) );
  }
  i11082.scriptsExecutionOrder = i11084
  var i11087 = i11083[1]
  var i11086 = []
  for(var i = 0; i < i11087.length; i += 1) {
    i11086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11087[i + 0]) );
  }
  i11082.sortingLayers = i11086
  var i11089 = i11083[2]
  var i11088 = []
  for(var i = 0; i < i11089.length; i += 1) {
    i11088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11089[i + 0]) );
  }
  i11082.cullingLayers = i11088
  i11082.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11083[3], i11082.timeSettings)
  i11082.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11083[4], i11082.physicsSettings)
  i11082.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11083[5], i11082.physics2DSettings)
  i11082.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11083[6], i11082.qualitySettings)
  i11082.enableRealtimeShadows = !!i11083[7]
  i11082.enableAutoInstancing = !!i11083[8]
  i11082.enableStaticBatching = !!i11083[9]
  i11082.enableDynamicBatching = !!i11083[10]
  i11082.lightmapEncodingQuality = i11083[11]
  i11082.desiredColorSpace = i11083[12]
  var i11091 = i11083[13]
  var i11090 = []
  for(var i = 0; i < i11091.length; i += 1) {
    i11090.push( i11091[i + 0] );
  }
  i11082.allTags = i11090
  return i11082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11095 = data
  i11094.name = i11095[0]
  i11094.value = i11095[1]
  return i11094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11099 = data
  i11098.id = i11099[0]
  i11098.name = i11099[1]
  i11098.value = i11099[2]
  return i11098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11103 = data
  i11102.id = i11103[0]
  i11102.name = i11103[1]
  return i11102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11105 = data
  i11104.fixedDeltaTime = i11105[0]
  i11104.maximumDeltaTime = i11105[1]
  i11104.timeScale = i11105[2]
  i11104.maximumParticleTimestep = i11105[3]
  return i11104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11107 = data
  i11106.gravity = new pc.Vec3( i11107[0], i11107[1], i11107[2] )
  i11106.defaultSolverIterations = i11107[3]
  i11106.bounceThreshold = i11107[4]
  i11106.autoSyncTransforms = !!i11107[5]
  i11106.autoSimulation = !!i11107[6]
  var i11109 = i11107[7]
  var i11108 = []
  for(var i = 0; i < i11109.length; i += 1) {
    i11108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11109[i + 0]) );
  }
  i11106.collisionMatrix = i11108
  return i11106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11113 = data
  i11112.enabled = !!i11113[0]
  i11112.layerId = i11113[1]
  i11112.otherLayerId = i11113[2]
  return i11112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11115 = data
  request.r(i11115[0], i11115[1], 0, i11114, 'material')
  i11114.gravity = new pc.Vec2( i11115[2], i11115[3] )
  i11114.positionIterations = i11115[4]
  i11114.velocityIterations = i11115[5]
  i11114.velocityThreshold = i11115[6]
  i11114.maxLinearCorrection = i11115[7]
  i11114.maxAngularCorrection = i11115[8]
  i11114.maxTranslationSpeed = i11115[9]
  i11114.maxRotationSpeed = i11115[10]
  i11114.baumgarteScale = i11115[11]
  i11114.baumgarteTOIScale = i11115[12]
  i11114.timeToSleep = i11115[13]
  i11114.linearSleepTolerance = i11115[14]
  i11114.angularSleepTolerance = i11115[15]
  i11114.defaultContactOffset = i11115[16]
  i11114.autoSimulation = !!i11115[17]
  i11114.queriesHitTriggers = !!i11115[18]
  i11114.queriesStartInColliders = !!i11115[19]
  i11114.callbacksOnDisable = !!i11115[20]
  i11114.reuseCollisionCallbacks = !!i11115[21]
  i11114.autoSyncTransforms = !!i11115[22]
  var i11117 = i11115[23]
  var i11116 = []
  for(var i = 0; i < i11117.length; i += 1) {
    i11116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11117[i + 0]) );
  }
  i11114.collisionMatrix = i11116
  return i11114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11121 = data
  i11120.enabled = !!i11121[0]
  i11120.layerId = i11121[1]
  i11120.otherLayerId = i11121[2]
  return i11120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11123 = data
  var i11125 = i11123[0]
  var i11124 = []
  for(var i = 0; i < i11125.length; i += 1) {
    i11124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11125[i + 0]) );
  }
  i11122.qualityLevels = i11124
  var i11127 = i11123[1]
  var i11126 = []
  for(var i = 0; i < i11127.length; i += 1) {
    i11126.push( i11127[i + 0] );
  }
  i11122.names = i11126
  i11122.shadows = i11123[2]
  i11122.anisotropicFiltering = i11123[3]
  i11122.antiAliasing = i11123[4]
  i11122.lodBias = i11123[5]
  i11122.shadowCascades = i11123[6]
  i11122.shadowDistance = i11123[7]
  i11122.shadowmaskMode = i11123[8]
  i11122.shadowProjection = i11123[9]
  i11122.shadowResolution = i11123[10]
  i11122.softParticles = !!i11123[11]
  i11122.softVegetation = !!i11123[12]
  i11122.activeColorSpace = i11123[13]
  i11122.desiredColorSpace = i11123[14]
  i11122.masterTextureLimit = i11123[15]
  i11122.maxQueuedFrames = i11123[16]
  i11122.particleRaycastBudget = i11123[17]
  i11122.pixelLightCount = i11123[18]
  i11122.realtimeReflectionProbes = !!i11123[19]
  i11122.shadowCascade2Split = i11123[20]
  i11122.shadowCascade4Split = new pc.Vec3( i11123[21], i11123[22], i11123[23] )
  i11122.streamingMipmapsActive = !!i11123[24]
  i11122.vSyncCount = i11123[25]
  i11122.asyncUploadBufferSize = i11123[26]
  i11122.asyncUploadTimeSlice = i11123[27]
  i11122.billboardsFaceCameraPosition = !!i11123[28]
  i11122.shadowNearPlaneOffset = i11123[29]
  i11122.streamingMipmapsMemoryBudget = i11123[30]
  i11122.maximumLODLevel = i11123[31]
  i11122.streamingMipmapsAddAllCameras = !!i11123[32]
  i11122.streamingMipmapsMaxLevelReduction = i11123[33]
  i11122.streamingMipmapsRenderersPerFrame = i11123[34]
  i11122.resolutionScalingFixedDPIFactor = i11123[35]
  i11122.streamingMipmapsMaxFileIORequests = i11123[36]
  i11122.currentQualityLevel = i11123[37]
  return i11122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11133 = data
  i11132.weight = i11133[0]
  i11132.vertices = i11133[1]
  i11132.normals = i11133[2]
  i11132.tangents = i11133[3]
  return i11132
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i11134 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i11135 = data
  i11134.m_GlyphIndex = i11135[0]
  i11134.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i11135[1], i11134.m_GlyphValueRecord)
  return i11134
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i11136 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i11137 = data
  i11136.m_XCoordinate = i11137[0]
  i11136.m_YCoordinate = i11137[1]
  return i11136
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i11138 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i11139 = data
  i11138.m_XPositionAdjustment = i11139[0]
  i11138.m_YPositionAdjustment = i11139[1]
  return i11138
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i11140 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i11141 = data
  i11140.xPlacement = i11141[0]
  i11140.yPlacement = i11141[1]
  i11140.xAdvance = i11141[2]
  i11140.yAdvance = i11141[3]
  return i11140
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i11142 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i11143 = data
  i11142.m_XPlacement = i11143[0]
  i11142.m_YPlacement = i11143[1]
  i11142.m_XAdvance = i11143[2]
  i11142.m_YAdvance = i11143[3]
  return i11142
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[22],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[94],"101":[94],"102":[94],"103":[94],"104":[94],"105":[94],"106":[94],"107":[22],"108":[59],"109":[110],"111":[110],"21":[14],"112":[67],"68":[113],"65":[63],"63":[113],"66":[63],"114":[63],"115":[113],"116":[113],"117":[113],"118":[14],"119":[17,14],"55":[59],"31":[17,14],"120":[25,59],"121":[59],"122":[59,57],"123":[87],"124":[94],"125":[126],"127":[128],"129":[5],"130":[22],"131":[132],"133":[52],"134":[21],"135":[14],"136":[59,14],"27":[14,17],"137":[14],"138":[17,14],"139":[59],"140":[17,14],"141":[14],"142":[143],"144":[143],"145":[143],"146":[14],"147":[14],"24":[21],"16":[17,14],"148":[14],"23":[21],"149":[14],"150":[14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[14],"156":[14],"157":[14],"158":[17,14],"159":[14],"160":[14],"161":[14],"162":[14],"163":[17,14],"164":[14],"165":[52],"166":[52],"53":[52],"167":[52],"168":[22],"169":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","CuttingItem","Item","CuttingBoard","Shushi","Chillie","SortChildByZPos","PhaseManager","ItemTypeDoneManager","DuckManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Capybara","Spine.Unity.SkeletonAnimation","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","LastTray","UnityEngine.CapsuleCollider","ItemDraggable","ItemMoveToTarget","ItemDragChildRotator","ItemDragRaycastTarget","UnityEngine.SpriteMask","ItemClickable","Dog","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "18.8";

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

Deserializers.buildID = "69779c45-7986-44db-bf4d-2ed1649d77fe";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

