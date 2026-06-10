var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5460 = root || request.c( 'UnityEngine.JointSpring' )
  var i5461 = data
  i5460.spring = i5461[0]
  i5460.damper = i5461[1]
  i5460.targetPosition = i5461[2]
  return i5460
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5462 = root || request.c( 'UnityEngine.JointMotor' )
  var i5463 = data
  i5462.m_TargetVelocity = i5463[0]
  i5462.m_Force = i5463[1]
  i5462.m_FreeSpin = i5463[2]
  return i5462
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5464 = root || request.c( 'UnityEngine.JointLimits' )
  var i5465 = data
  i5464.m_Min = i5465[0]
  i5464.m_Max = i5465[1]
  i5464.m_Bounciness = i5465[2]
  i5464.m_BounceMinVelocity = i5465[3]
  i5464.m_ContactDistance = i5465[4]
  i5464.minBounce = i5465[5]
  i5464.maxBounce = i5465[6]
  return i5464
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5466 = root || request.c( 'UnityEngine.JointDrive' )
  var i5467 = data
  i5466.m_PositionSpring = i5467[0]
  i5466.m_PositionDamper = i5467[1]
  i5466.m_MaximumForce = i5467[2]
  i5466.m_UseAcceleration = i5467[3]
  return i5466
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5468 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5469 = data
  i5468.m_Spring = i5469[0]
  i5468.m_Damper = i5469[1]
  return i5468
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5470 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5471 = data
  i5470.m_Limit = i5471[0]
  i5470.m_Bounciness = i5471[1]
  i5470.m_ContactDistance = i5471[2]
  return i5470
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5473 = data
  i5472.m_ExtremumSlip = i5473[0]
  i5472.m_ExtremumValue = i5473[1]
  i5472.m_AsymptoteSlip = i5473[2]
  i5472.m_AsymptoteValue = i5473[3]
  i5472.m_Stiffness = i5473[4]
  return i5472
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5475 = data
  i5474.m_LowerAngle = i5475[0]
  i5474.m_UpperAngle = i5475[1]
  return i5474
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5476 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5477 = data
  i5476.m_MotorSpeed = i5477[0]
  i5476.m_MaximumMotorTorque = i5477[1]
  return i5476
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5478 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5479 = data
  i5478.m_DampingRatio = i5479[0]
  i5478.m_Frequency = i5479[1]
  i5478.m_Angle = i5479[2]
  return i5478
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5480 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5481 = data
  i5480.m_LowerTranslation = i5481[0]
  i5480.m_UpperTranslation = i5481[1]
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5482 = root || new pc.UnityMaterial()
  var i5483 = data
  i5482.name = i5483[0]
  request.r(i5483[1], i5483[2], 0, i5482, 'shader')
  i5482.renderQueue = i5483[3]
  i5482.enableInstancing = !!i5483[4]
  var i5485 = i5483[5]
  var i5484 = []
  for(var i = 0; i < i5485.length; i += 1) {
    i5484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5485[i + 0]) );
  }
  i5482.floatParameters = i5484
  var i5487 = i5483[6]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5487[i + 0]) );
  }
  i5482.colorParameters = i5486
  var i5489 = i5483[7]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5489[i + 0]) );
  }
  i5482.vectorParameters = i5488
  var i5491 = i5483[8]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5491[i + 0]) );
  }
  i5482.textureParameters = i5490
  var i5493 = i5483[9]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5493[i + 0]) );
  }
  i5482.materialFlags = i5492
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5497 = data
  i5496.name = i5497[0]
  i5496.value = i5497[1]
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5501 = data
  i5500.name = i5501[0]
  i5500.value = new pc.Color(i5501[1], i5501[2], i5501[3], i5501[4])
  return i5500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5505 = data
  i5504.name = i5505[0]
  i5504.value = new pc.Vec4( i5505[1], i5505[2], i5505[3], i5505[4] )
  return i5504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5509 = data
  i5508.name = i5509[0]
  request.r(i5509[1], i5509[2], 0, i5508, 'value')
  return i5508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5513 = data
  i5512.name = i5513[0]
  i5512.enabled = !!i5513[1]
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5515 = data
  i5514.name = i5515[0]
  i5514.width = i5515[1]
  i5514.height = i5515[2]
  i5514.mipmapCount = i5515[3]
  i5514.anisoLevel = i5515[4]
  i5514.filterMode = i5515[5]
  i5514.hdr = !!i5515[6]
  i5514.format = i5515[7]
  i5514.wrapMode = i5515[8]
  i5514.alphaIsTransparency = !!i5515[9]
  i5514.alphaSource = i5515[10]
  i5514.graphicsFormat = i5515[11]
  i5514.sRGBTexture = !!i5515[12]
  i5514.desiredColorSpace = i5515[13]
  i5514.wrapU = i5515[14]
  i5514.wrapV = i5515[15]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5517 = data
  i5516.position = new pc.Vec3( i5517[0], i5517[1], i5517[2] )
  i5516.scale = new pc.Vec3( i5517[3], i5517[4], i5517[5] )
  i5516.rotation = new pc.Quat(i5517[6], i5517[7], i5517[8], i5517[9])
  return i5516
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i5518 = root || request.c( 'HeartEffect' )
  var i5519 = data
  i5518.defaultLifeTime = i5519[0]
  request.r(i5519[1], i5519[2], 0, i5518, 'tf')
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5521 = data
  i5520.color = new pc.Color(i5521[0], i5521[1], i5521[2], i5521[3])
  request.r(i5521[4], i5521[5], 0, i5520, 'sprite')
  i5520.flipX = !!i5521[6]
  i5520.flipY = !!i5521[7]
  i5520.drawMode = i5521[8]
  i5520.size = new pc.Vec2( i5521[9], i5521[10] )
  i5520.tileMode = i5521[11]
  i5520.adaptiveModeThreshold = i5521[12]
  i5520.maskInteraction = i5521[13]
  i5520.spriteSortPoint = i5521[14]
  i5520.enabled = !!i5521[15]
  request.r(i5521[16], i5521[17], 0, i5520, 'sharedMaterial')
  var i5523 = i5521[18]
  var i5522 = []
  for(var i = 0; i < i5523.length; i += 2) {
  request.r(i5523[i + 0], i5523[i + 1], 2, i5522, '')
  }
  i5520.sharedMaterials = i5522
  i5520.receiveShadows = !!i5521[19]
  i5520.shadowCastingMode = i5521[20]
  i5520.sortingLayerID = i5521[21]
  i5520.sortingOrder = i5521[22]
  i5520.lightmapIndex = i5521[23]
  i5520.lightmapSceneIndex = i5521[24]
  i5520.lightmapScaleOffset = new pc.Vec4( i5521[25], i5521[26], i5521[27], i5521[28] )
  i5520.lightProbeUsage = i5521[29]
  i5520.reflectionProbeUsage = i5521[30]
  return i5520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5527 = data
  i5526.name = i5527[0]
  i5526.tagId = i5527[1]
  i5526.enabled = !!i5527[2]
  i5526.isStatic = !!i5527[3]
  i5526.layer = i5527[4]
  return i5526
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i5528 = root || request.c( 'HeartBreakEffect' )
  var i5529 = data
  i5528.defaultLifeTime = i5529[0]
  request.r(i5529[1], i5529[2], 0, i5528, 'tf')
  return i5528
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i5530 = root || request.c( 'BlinkEffect' )
  var i5531 = data
  request.r(i5531[0], i5531[1], 0, i5530, 'tf')
  return i5530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'mesh')
  i5532.meshCount = i5533[2]
  i5532.activeVertexStreamsCount = i5533[3]
  i5532.alignment = i5533[4]
  i5532.renderMode = i5533[5]
  i5532.sortMode = i5533[6]
  i5532.lengthScale = i5533[7]
  i5532.velocityScale = i5533[8]
  i5532.cameraVelocityScale = i5533[9]
  i5532.normalDirection = i5533[10]
  i5532.sortingFudge = i5533[11]
  i5532.minParticleSize = i5533[12]
  i5532.maxParticleSize = i5533[13]
  i5532.pivot = new pc.Vec3( i5533[14], i5533[15], i5533[16] )
  request.r(i5533[17], i5533[18], 0, i5532, 'trailMaterial')
  i5532.applyActiveColorSpace = !!i5533[19]
  i5532.enabled = !!i5533[20]
  request.r(i5533[21], i5533[22], 0, i5532, 'sharedMaterial')
  var i5535 = i5533[23]
  var i5534 = []
  for(var i = 0; i < i5535.length; i += 2) {
  request.r(i5535[i + 0], i5535[i + 1], 2, i5534, '')
  }
  i5532.sharedMaterials = i5534
  i5532.receiveShadows = !!i5533[24]
  i5532.shadowCastingMode = i5533[25]
  i5532.sortingLayerID = i5533[26]
  i5532.sortingOrder = i5533[27]
  i5532.lightmapIndex = i5533[28]
  i5532.lightmapSceneIndex = i5533[29]
  i5532.lightmapScaleOffset = new pc.Vec4( i5533[30], i5533[31], i5533[32], i5533[33] )
  i5532.lightProbeUsage = i5533[34]
  i5532.reflectionProbeUsage = i5533[35]
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5537 = data
  i5536.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5537[0], i5536.main)
  i5536.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5537[1], i5536.colorBySpeed)
  i5536.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5537[2], i5536.colorOverLifetime)
  i5536.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5537[3], i5536.emission)
  i5536.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5537[4], i5536.rotationBySpeed)
  i5536.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5537[5], i5536.rotationOverLifetime)
  i5536.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5537[6], i5536.shape)
  i5536.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5537[7], i5536.sizeBySpeed)
  i5536.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5537[8], i5536.sizeOverLifetime)
  i5536.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5537[9], i5536.textureSheetAnimation)
  i5536.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5537[10], i5536.velocityOverLifetime)
  i5536.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5537[11], i5536.noise)
  i5536.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5537[12], i5536.inheritVelocity)
  i5536.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5537[13], i5536.forceOverLifetime)
  i5536.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5537[14], i5536.limitVelocityOverLifetime)
  i5536.useAutoRandomSeed = !!i5537[15]
  i5536.randomSeed = i5537[16]
  return i5536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5538 = root || new pc.ParticleSystemMain()
  var i5539 = data
  i5538.duration = i5539[0]
  i5538.loop = !!i5539[1]
  i5538.prewarm = !!i5539[2]
  i5538.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[3], i5538.startDelay)
  i5538.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[4], i5538.startLifetime)
  i5538.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[5], i5538.startSpeed)
  i5538.startSize3D = !!i5539[6]
  i5538.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[7], i5538.startSizeX)
  i5538.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[8], i5538.startSizeY)
  i5538.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[9], i5538.startSizeZ)
  i5538.startRotation3D = !!i5539[10]
  i5538.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[11], i5538.startRotationX)
  i5538.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[12], i5538.startRotationY)
  i5538.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[13], i5538.startRotationZ)
  i5538.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5539[14], i5538.startColor)
  i5538.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5539[15], i5538.gravityModifier)
  i5538.simulationSpace = i5539[16]
  request.r(i5539[17], i5539[18], 0, i5538, 'customSimulationSpace')
  i5538.simulationSpeed = i5539[19]
  i5538.useUnscaledTime = !!i5539[20]
  i5538.scalingMode = i5539[21]
  i5538.playOnAwake = !!i5539[22]
  i5538.maxParticles = i5539[23]
  i5538.emitterVelocityMode = i5539[24]
  i5538.stopAction = i5539[25]
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5540 = root || new pc.MinMaxCurve()
  var i5541 = data
  i5540.mode = i5541[0]
  i5540.curveMin = new pc.AnimationCurve( { keys_flow: i5541[1] } )
  i5540.curveMax = new pc.AnimationCurve( { keys_flow: i5541[2] } )
  i5540.curveMultiplier = i5541[3]
  i5540.constantMin = i5541[4]
  i5540.constantMax = i5541[5]
  return i5540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5542 = root || new pc.MinMaxGradient()
  var i5543 = data
  i5542.mode = i5543[0]
  i5542.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5543[1], i5542.gradientMin)
  i5542.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5543[2], i5542.gradientMax)
  i5542.colorMin = new pc.Color(i5543[3], i5543[4], i5543[5], i5543[6])
  i5542.colorMax = new pc.Color(i5543[7], i5543[8], i5543[9], i5543[10])
  return i5542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5545 = data
  i5544.mode = i5545[0]
  var i5547 = i5545[1]
  var i5546 = []
  for(var i = 0; i < i5547.length; i += 1) {
    i5546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5547[i + 0]) );
  }
  i5544.colorKeys = i5546
  var i5549 = i5545[2]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5549[i + 0]) );
  }
  i5544.alphaKeys = i5548
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5550 = root || new pc.ParticleSystemColorBySpeed()
  var i5551 = data
  i5550.enabled = !!i5551[0]
  i5550.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5551[1], i5550.color)
  i5550.range = new pc.Vec2( i5551[2], i5551[3] )
  return i5550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5555 = data
  i5554.color = new pc.Color(i5555[0], i5555[1], i5555[2], i5555[3])
  i5554.time = i5555[4]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5559 = data
  i5558.alpha = i5559[0]
  i5558.time = i5559[1]
  return i5558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5560 = root || new pc.ParticleSystemColorOverLifetime()
  var i5561 = data
  i5560.enabled = !!i5561[0]
  i5560.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5561[1], i5560.color)
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5562 = root || new pc.ParticleSystemEmitter()
  var i5563 = data
  i5562.enabled = !!i5563[0]
  i5562.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5563[1], i5562.rateOverTime)
  i5562.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5563[2], i5562.rateOverDistance)
  var i5565 = i5563[3]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5565[i + 0]) );
  }
  i5562.bursts = i5564
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5568 = root || new pc.ParticleSystemBurst()
  var i5569 = data
  i5568.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5569[0], i5568.count)
  i5568.cycleCount = i5569[1]
  i5568.minCount = i5569[2]
  i5568.maxCount = i5569[3]
  i5568.repeatInterval = i5569[4]
  i5568.time = i5569[5]
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5570 = root || new pc.ParticleSystemRotationBySpeed()
  var i5571 = data
  i5570.enabled = !!i5571[0]
  i5570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[1], i5570.x)
  i5570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[2], i5570.y)
  i5570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[3], i5570.z)
  i5570.separateAxes = !!i5571[4]
  i5570.range = new pc.Vec2( i5571[5], i5571[6] )
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5572 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5573 = data
  i5572.enabled = !!i5573[0]
  i5572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5573[1], i5572.x)
  i5572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5573[2], i5572.y)
  i5572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5573[3], i5572.z)
  i5572.separateAxes = !!i5573[4]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5574 = root || new pc.ParticleSystemShape()
  var i5575 = data
  i5574.enabled = !!i5575[0]
  i5574.shapeType = i5575[1]
  i5574.randomDirectionAmount = i5575[2]
  i5574.sphericalDirectionAmount = i5575[3]
  i5574.randomPositionAmount = i5575[4]
  i5574.alignToDirection = !!i5575[5]
  i5574.radius = i5575[6]
  i5574.radiusMode = i5575[7]
  i5574.radiusSpread = i5575[8]
  i5574.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5575[9], i5574.radiusSpeed)
  i5574.radiusThickness = i5575[10]
  i5574.angle = i5575[11]
  i5574.length = i5575[12]
  i5574.boxThickness = new pc.Vec3( i5575[13], i5575[14], i5575[15] )
  i5574.meshShapeType = i5575[16]
  request.r(i5575[17], i5575[18], 0, i5574, 'mesh')
  request.r(i5575[19], i5575[20], 0, i5574, 'meshRenderer')
  request.r(i5575[21], i5575[22], 0, i5574, 'skinnedMeshRenderer')
  i5574.useMeshMaterialIndex = !!i5575[23]
  i5574.meshMaterialIndex = i5575[24]
  i5574.useMeshColors = !!i5575[25]
  i5574.normalOffset = i5575[26]
  i5574.arc = i5575[27]
  i5574.arcMode = i5575[28]
  i5574.arcSpread = i5575[29]
  i5574.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5575[30], i5574.arcSpeed)
  i5574.donutRadius = i5575[31]
  i5574.position = new pc.Vec3( i5575[32], i5575[33], i5575[34] )
  i5574.rotation = new pc.Vec3( i5575[35], i5575[36], i5575[37] )
  i5574.scale = new pc.Vec3( i5575[38], i5575[39], i5575[40] )
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5576 = root || new pc.ParticleSystemSizeBySpeed()
  var i5577 = data
  i5576.enabled = !!i5577[0]
  i5576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5577[1], i5576.x)
  i5576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5577[2], i5576.y)
  i5576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5577[3], i5576.z)
  i5576.separateAxes = !!i5577[4]
  i5576.range = new pc.Vec2( i5577[5], i5577[6] )
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5578 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5579 = data
  i5578.enabled = !!i5579[0]
  i5578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5579[1], i5578.x)
  i5578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5579[2], i5578.y)
  i5578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5579[3], i5578.z)
  i5578.separateAxes = !!i5579[4]
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5580 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5581 = data
  i5580.enabled = !!i5581[0]
  i5580.mode = i5581[1]
  i5580.animation = i5581[2]
  i5580.numTilesX = i5581[3]
  i5580.numTilesY = i5581[4]
  i5580.useRandomRow = !!i5581[5]
  i5580.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5581[6], i5580.frameOverTime)
  i5580.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5581[7], i5580.startFrame)
  i5580.cycleCount = i5581[8]
  i5580.rowIndex = i5581[9]
  i5580.flipU = i5581[10]
  i5580.flipV = i5581[11]
  i5580.spriteCount = i5581[12]
  var i5583 = i5581[13]
  var i5582 = []
  for(var i = 0; i < i5583.length; i += 2) {
  request.r(i5583[i + 0], i5583[i + 1], 2, i5582, '')
  }
  i5580.sprites = i5582
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5586 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5587 = data
  i5586.enabled = !!i5587[0]
  i5586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[1], i5586.x)
  i5586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[2], i5586.y)
  i5586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[3], i5586.z)
  i5586.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[4], i5586.radial)
  i5586.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[5], i5586.speedModifier)
  i5586.space = i5587[6]
  i5586.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[7], i5586.orbitalX)
  i5586.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[8], i5586.orbitalY)
  i5586.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[9], i5586.orbitalZ)
  i5586.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[10], i5586.orbitalOffsetX)
  i5586.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[11], i5586.orbitalOffsetY)
  i5586.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5587[12], i5586.orbitalOffsetZ)
  return i5586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5588 = root || new pc.ParticleSystemNoise()
  var i5589 = data
  i5588.enabled = !!i5589[0]
  i5588.separateAxes = !!i5589[1]
  i5588.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[2], i5588.strengthX)
  i5588.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[3], i5588.strengthY)
  i5588.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[4], i5588.strengthZ)
  i5588.frequency = i5589[5]
  i5588.damping = !!i5589[6]
  i5588.octaveCount = i5589[7]
  i5588.octaveMultiplier = i5589[8]
  i5588.octaveScale = i5589[9]
  i5588.quality = i5589[10]
  i5588.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[11], i5588.scrollSpeed)
  i5588.scrollSpeedMultiplier = i5589[12]
  i5588.remapEnabled = !!i5589[13]
  i5588.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[14], i5588.remapX)
  i5588.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[15], i5588.remapY)
  i5588.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[16], i5588.remapZ)
  i5588.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[17], i5588.positionAmount)
  i5588.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[18], i5588.rotationAmount)
  i5588.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5589[19], i5588.sizeAmount)
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5590 = root || new pc.ParticleSystemInheritVelocity()
  var i5591 = data
  i5590.enabled = !!i5591[0]
  i5590.mode = i5591[1]
  i5590.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5591[2], i5590.curve)
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5592 = root || new pc.ParticleSystemForceOverLifetime()
  var i5593 = data
  i5592.enabled = !!i5593[0]
  i5592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5593[1], i5592.x)
  i5592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5593[2], i5592.y)
  i5592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5593[3], i5592.z)
  i5592.space = i5593[4]
  i5592.randomized = !!i5593[5]
  return i5592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5594 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5595 = data
  i5594.enabled = !!i5595[0]
  i5594.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[1], i5594.limit)
  i5594.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[2], i5594.limitX)
  i5594.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[3], i5594.limitY)
  i5594.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[4], i5594.limitZ)
  i5594.dampen = i5595[5]
  i5594.separateAxes = !!i5595[6]
  i5594.space = i5595[7]
  i5594.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[8], i5594.drag)
  i5594.multiplyDragByParticleSize = !!i5595[9]
  i5594.multiplyDragByParticleVelocity = !!i5595[10]
  return i5594
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i5596 = root || request.c( 'StarExploreFX' )
  var i5597 = data
  request.r(i5597[0], i5597[1], 0, i5596, 'tf')
  return i5596
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i5598 = root || request.c( 'ProgressBar' )
  var i5599 = data
  request.r(i5599[0], i5599[1], 0, i5598, 'fillTransform')
  request.r(i5599[2], i5599[3], 0, i5598, 'tf')
  return i5598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5601 = data
  i5600.pivot = new pc.Vec2( i5601[0], i5601[1] )
  i5600.anchorMin = new pc.Vec2( i5601[2], i5601[3] )
  i5600.anchorMax = new pc.Vec2( i5601[4], i5601[5] )
  i5600.sizeDelta = new pc.Vec2( i5601[6], i5601[7] )
  i5600.anchoredPosition3D = new pc.Vec3( i5601[8], i5601[9], i5601[10] )
  i5600.rotation = new pc.Quat(i5601[11], i5601[12], i5601[13], i5601[14])
  i5600.scale = new pc.Vec3( i5601[15], i5601[16], i5601[17] )
  return i5600
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i5602 = root || request.c( 'ClockTimer' )
  var i5603 = data
  request.r(i5603[0], i5603[1], 0, i5602, 'fillImage')
  request.r(i5603[2], i5603[3], 0, i5602, 'tf')
  i5602.spawnZoomDuration = i5603[4]
  i5602.despawnZoomDuration = i5603[5]
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5605 = data
  i5604.cullTransparentMesh = !!i5605[0]
  return i5604
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5606 = root || request.c( 'UnityEngine.UI.Image' )
  var i5607 = data
  request.r(i5607[0], i5607[1], 0, i5606, 'm_Sprite')
  i5606.m_Type = i5607[2]
  i5606.m_PreserveAspect = !!i5607[3]
  i5606.m_FillCenter = !!i5607[4]
  i5606.m_FillMethod = i5607[5]
  i5606.m_FillAmount = i5607[6]
  i5606.m_FillClockwise = !!i5607[7]
  i5606.m_FillOrigin = i5607[8]
  i5606.m_UseSpriteMesh = !!i5607[9]
  i5606.m_PixelsPerUnitMultiplier = i5607[10]
  request.r(i5607[11], i5607[12], 0, i5606, 'm_Material')
  i5606.m_Maskable = !!i5607[13]
  i5606.m_Color = new pc.Color(i5607[14], i5607[15], i5607[16], i5607[17])
  i5606.m_RaycastTarget = !!i5607[18]
  i5606.m_RaycastPadding = new pc.Vec4( i5607[19], i5607[20], i5607[21], i5607[22] )
  return i5606
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i5608 = root || request.c( 'FlourSmoke' )
  var i5609 = data
  request.r(i5609[0], i5609[1], 0, i5608, 'tf')
  return i5608
}

Deserializers["Duck"] = function (request, data, root) {
  var i5610 = root || request.c( 'Duck' )
  var i5611 = data
  request.r(i5611[0], i5611[1], 0, i5610, 'tf')
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5613 = data
  i5612.name = i5613[0]
  i5612.halfPrecision = !!i5613[1]
  i5612.useSimplification = !!i5613[2]
  i5612.useUInt32IndexFormat = !!i5613[3]
  i5612.vertexCount = i5613[4]
  i5612.aabb = i5613[5]
  var i5615 = i5613[6]
  var i5614 = []
  for(var i = 0; i < i5615.length; i += 1) {
    i5614.push( !!i5615[i + 0] );
  }
  i5612.streams = i5614
  i5612.vertices = i5613[7]
  var i5617 = i5613[8]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5617[i + 0]) );
  }
  i5612.subMeshes = i5616
  var i5619 = i5613[9]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 16) {
    i5618.push( new pc.Mat4().setData(i5619[i + 0], i5619[i + 1], i5619[i + 2], i5619[i + 3],  i5619[i + 4], i5619[i + 5], i5619[i + 6], i5619[i + 7],  i5619[i + 8], i5619[i + 9], i5619[i + 10], i5619[i + 11],  i5619[i + 12], i5619[i + 13], i5619[i + 14], i5619[i + 15]) );
  }
  i5612.bindposes = i5618
  var i5621 = i5613[10]
  var i5620 = []
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5621[i + 0]) );
  }
  i5612.blendShapes = i5620
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5627 = data
  i5626.triangles = i5627[0]
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5633 = data
  i5632.name = i5633[0]
  var i5635 = i5633[1]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5635[i + 0]) );
  }
  i5632.frames = i5634
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5637 = data
  i5636.name = i5637[0]
  i5636.index = i5637[1]
  i5636.startup = !!i5637[2]
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5639 = data
  i5638.planeDistance = i5639[0]
  i5638.referencePixelsPerUnit = i5639[1]
  i5638.isFallbackOverlay = !!i5639[2]
  i5638.renderMode = i5639[3]
  i5638.renderOrder = i5639[4]
  i5638.sortingLayerName = i5639[5]
  i5638.sortingOrder = i5639[6]
  i5638.scaleFactor = i5639[7]
  request.r(i5639[8], i5639[9], 0, i5638, 'worldCamera')
  i5638.overrideSorting = !!i5639[10]
  i5638.pixelPerfect = !!i5639[11]
  i5638.targetDisplay = i5639[12]
  i5638.overridePixelPerfect = !!i5639[13]
  i5638.enabled = !!i5639[14]
  return i5638
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5640 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5641 = data
  i5640.m_UiScaleMode = i5641[0]
  i5640.m_ReferencePixelsPerUnit = i5641[1]
  i5640.m_ScaleFactor = i5641[2]
  i5640.m_ReferenceResolution = new pc.Vec2( i5641[3], i5641[4] )
  i5640.m_ScreenMatchMode = i5641[5]
  i5640.m_MatchWidthOrHeight = i5641[6]
  i5640.m_PhysicalUnit = i5641[7]
  i5640.m_FallbackScreenDPI = i5641[8]
  i5640.m_DefaultSpriteDPI = i5641[9]
  i5640.m_DynamicPixelsPerUnit = i5641[10]
  i5640.m_PresetInfoIsWorld = !!i5641[11]
  return i5640
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5642 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5643 = data
  i5642.m_IgnoreReversedGraphics = !!i5643[0]
  i5642.m_BlockingObjects = i5643[1]
  i5642.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5643[2] )
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5645 = data
  request.r(i5645[0], i5645[1], 0, i5644, 'animatorController')
  request.r(i5645[2], i5645[3], 0, i5644, 'avatar')
  i5644.updateMode = i5645[4]
  i5644.hasTransformHierarchy = !!i5645[5]
  i5644.applyRootMotion = !!i5645[6]
  var i5647 = i5645[7]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 2) {
  request.r(i5647[i + 0], i5647[i + 1], 2, i5646, '')
  }
  i5644.humanBones = i5646
  i5644.enabled = !!i5645[8]
  return i5644
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5650 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5651 = data
  i5650.m_hasFontAssetChanged = !!i5651[0]
  request.r(i5651[1], i5651[2], 0, i5650, 'm_baseMaterial')
  i5650.m_maskOffset = new pc.Vec4( i5651[3], i5651[4], i5651[5], i5651[6] )
  i5650.m_text = i5651[7]
  i5650.m_isRightToLeft = !!i5651[8]
  request.r(i5651[9], i5651[10], 0, i5650, 'm_fontAsset')
  request.r(i5651[11], i5651[12], 0, i5650, 'm_sharedMaterial')
  var i5653 = i5651[13]
  var i5652 = []
  for(var i = 0; i < i5653.length; i += 2) {
  request.r(i5653[i + 0], i5653[i + 1], 2, i5652, '')
  }
  i5650.m_fontSharedMaterials = i5652
  request.r(i5651[14], i5651[15], 0, i5650, 'm_fontMaterial')
  var i5655 = i5651[16]
  var i5654 = []
  for(var i = 0; i < i5655.length; i += 2) {
  request.r(i5655[i + 0], i5655[i + 1], 2, i5654, '')
  }
  i5650.m_fontMaterials = i5654
  i5650.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5651[17], i5651[18], i5651[19], i5651[20])
  i5650.m_fontColor = new pc.Color(i5651[21], i5651[22], i5651[23], i5651[24])
  i5650.m_enableVertexGradient = !!i5651[25]
  i5650.m_colorMode = i5651[26]
  i5650.m_fontColorGradient = request.d('TMPro.VertexGradient', i5651[27], i5650.m_fontColorGradient)
  request.r(i5651[28], i5651[29], 0, i5650, 'm_fontColorGradientPreset')
  request.r(i5651[30], i5651[31], 0, i5650, 'm_spriteAsset')
  i5650.m_tintAllSprites = !!i5651[32]
  request.r(i5651[33], i5651[34], 0, i5650, 'm_StyleSheet')
  i5650.m_TextStyleHashCode = i5651[35]
  i5650.m_overrideHtmlColors = !!i5651[36]
  i5650.m_faceColor = UnityEngine.Color32.ConstructColor(i5651[37], i5651[38], i5651[39], i5651[40])
  i5650.m_fontSize = i5651[41]
  i5650.m_fontSizeBase = i5651[42]
  i5650.m_fontWeight = i5651[43]
  i5650.m_enableAutoSizing = !!i5651[44]
  i5650.m_fontSizeMin = i5651[45]
  i5650.m_fontSizeMax = i5651[46]
  i5650.m_fontStyle = i5651[47]
  i5650.m_HorizontalAlignment = i5651[48]
  i5650.m_VerticalAlignment = i5651[49]
  i5650.m_textAlignment = i5651[50]
  i5650.m_characterSpacing = i5651[51]
  i5650.m_wordSpacing = i5651[52]
  i5650.m_lineSpacing = i5651[53]
  i5650.m_lineSpacingMax = i5651[54]
  i5650.m_paragraphSpacing = i5651[55]
  i5650.m_charWidthMaxAdj = i5651[56]
  i5650.m_TextWrappingMode = i5651[57]
  i5650.m_wordWrappingRatios = i5651[58]
  i5650.m_overflowMode = i5651[59]
  request.r(i5651[60], i5651[61], 0, i5650, 'm_linkedTextComponent')
  request.r(i5651[62], i5651[63], 0, i5650, 'parentLinkedComponent')
  i5650.m_enableKerning = !!i5651[64]
  var i5657 = i5651[65]
  var i5656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5657.length; i += 1) {
    i5656.add(i5657[i + 0]);
  }
  i5650.m_ActiveFontFeatures = i5656
  i5650.m_enableExtraPadding = !!i5651[66]
  i5650.checkPaddingRequired = !!i5651[67]
  i5650.m_isRichText = !!i5651[68]
  i5650.m_parseCtrlCharacters = !!i5651[69]
  i5650.m_isOrthographic = !!i5651[70]
  i5650.m_isCullingEnabled = !!i5651[71]
  i5650.m_horizontalMapping = i5651[72]
  i5650.m_verticalMapping = i5651[73]
  i5650.m_uvLineOffset = i5651[74]
  i5650.m_geometrySortingOrder = i5651[75]
  i5650.m_IsTextObjectScaleStatic = !!i5651[76]
  i5650.m_VertexBufferAutoSizeReduction = !!i5651[77]
  i5650.m_useMaxVisibleDescender = !!i5651[78]
  i5650.m_pageToDisplay = i5651[79]
  i5650.m_margin = new pc.Vec4( i5651[80], i5651[81], i5651[82], i5651[83] )
  i5650.m_isUsingLegacyAnimationComponent = !!i5651[84]
  i5650.m_isVolumetricText = !!i5651[85]
  request.r(i5651[86], i5651[87], 0, i5650, 'm_Material')
  i5650.m_EmojiFallbackSupport = !!i5651[88]
  i5650.m_Maskable = !!i5651[89]
  i5650.m_Color = new pc.Color(i5651[90], i5651[91], i5651[92], i5651[93])
  i5650.m_RaycastTarget = !!i5651[94]
  i5650.m_RaycastPadding = new pc.Vec4( i5651[95], i5651[96], i5651[97], i5651[98] )
  return i5650
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5658 = root || request.c( 'TMPro.VertexGradient' )
  var i5659 = data
  i5658.topLeft = new pc.Color(i5659[0], i5659[1], i5659[2], i5659[3])
  i5658.topRight = new pc.Color(i5659[4], i5659[5], i5659[6], i5659[7])
  i5658.bottomLeft = new pc.Color(i5659[8], i5659[9], i5659[10], i5659[11])
  i5658.bottomRight = new pc.Color(i5659[12], i5659[13], i5659[14], i5659[15])
  return i5658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5662 = root || request.c( 'UnityEngine.UI.Button' )
  var i5663 = data
  i5662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5663[0], i5662.m_OnClick)
  i5662.m_Navigation = request.d('UnityEngine.UI.Navigation', i5663[1], i5662.m_Navigation)
  i5662.m_Transition = i5663[2]
  i5662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5663[3], i5662.m_Colors)
  i5662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5663[4], i5662.m_SpriteState)
  i5662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5663[5], i5662.m_AnimationTriggers)
  i5662.m_Interactable = !!i5663[6]
  request.r(i5663[7], i5663[8], 0, i5662, 'm_TargetGraphic')
  return i5662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5665 = data
  i5664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5665[0], i5664.m_PersistentCalls)
  return i5664
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5666 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5667 = data
  var i5669 = i5667[0]
  var i5668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5669.length; i += 1) {
    i5668.add(request.d('UnityEngine.Events.PersistentCall', i5669[i + 0]));
  }
  i5666.m_Calls = i5668
  return i5666
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5672 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5673 = data
  request.r(i5673[0], i5673[1], 0, i5672, 'm_Target')
  i5672.m_TargetAssemblyTypeName = i5673[2]
  i5672.m_MethodName = i5673[3]
  i5672.m_Mode = i5673[4]
  i5672.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5673[5], i5672.m_Arguments)
  i5672.m_CallState = i5673[6]
  return i5672
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5674 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5675 = data
  request.r(i5675[0], i5675[1], 0, i5674, 'm_ObjectArgument')
  i5674.m_ObjectArgumentAssemblyTypeName = i5675[2]
  i5674.m_IntArgument = i5675[3]
  i5674.m_FloatArgument = i5675[4]
  i5674.m_StringArgument = i5675[5]
  i5674.m_BoolArgument = !!i5675[6]
  return i5674
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5676 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5677 = data
  i5676.m_Mode = i5677[0]
  i5676.m_WrapAround = !!i5677[1]
  request.r(i5677[2], i5677[3], 0, i5676, 'm_SelectOnUp')
  request.r(i5677[4], i5677[5], 0, i5676, 'm_SelectOnDown')
  request.r(i5677[6], i5677[7], 0, i5676, 'm_SelectOnLeft')
  request.r(i5677[8], i5677[9], 0, i5676, 'm_SelectOnRight')
  return i5676
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5678 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5679 = data
  i5678.m_NormalColor = new pc.Color(i5679[0], i5679[1], i5679[2], i5679[3])
  i5678.m_HighlightedColor = new pc.Color(i5679[4], i5679[5], i5679[6], i5679[7])
  i5678.m_PressedColor = new pc.Color(i5679[8], i5679[9], i5679[10], i5679[11])
  i5678.m_SelectedColor = new pc.Color(i5679[12], i5679[13], i5679[14], i5679[15])
  i5678.m_DisabledColor = new pc.Color(i5679[16], i5679[17], i5679[18], i5679[19])
  i5678.m_ColorMultiplier = i5679[20]
  i5678.m_FadeDuration = i5679[21]
  return i5678
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5680 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5681 = data
  request.r(i5681[0], i5681[1], 0, i5680, 'm_HighlightedSprite')
  request.r(i5681[2], i5681[3], 0, i5680, 'm_PressedSprite')
  request.r(i5681[4], i5681[5], 0, i5680, 'm_SelectedSprite')
  request.r(i5681[6], i5681[7], 0, i5680, 'm_DisabledSprite')
  return i5680
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5682 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5683 = data
  i5682.m_NormalTrigger = i5683[0]
  i5682.m_HighlightedTrigger = i5683[1]
  i5682.m_PressedTrigger = i5683[2]
  i5682.m_SelectedTrigger = i5683[3]
  i5682.m_DisabledTrigger = i5683[4]
  return i5682
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5684 = root || request.c( 'Ply_Pool' )
  var i5685 = data
  var i5687 = i5685[0]
  var i5686 = []
  for(var i = 0; i < i5687.length; i += 1) {
    i5686.push( request.d('Ply_Pool+PoolAmount', i5687[i + 0]) );
  }
  i5684.poolAmounts = i5686
  request.r(i5685[1], i5685[2], 0, i5684, 'poolHolder')
  return i5684
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5690 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5691 = data
  i5690.type = i5691[0]
  i5690.amount = i5691[1]
  request.r(i5691[2], i5691[3], 0, i5690, 'gameUnit')
  return i5690
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5692 = root || request.c( 'Ply_SoundManager' )
  var i5693 = data
  var i5695 = i5693[0]
  var i5694 = []
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.push( request.d('Ply_SoundManager+FxAudio', i5695[i + 0]) );
  }
  i5692.fxAudios = i5694
  var i5697 = i5693[1]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 2) {
  request.r(i5697[i + 0], i5697[i + 1], 2, i5696, '')
  }
  i5692.audioClips = i5696
  request.r(i5693[2], i5693[3], 0, i5692, 'sound')
  return i5692
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i5700 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i5701 = data
  i5700.fxType = i5701[0]
  request.r(i5701[1], i5701[2], 0, i5700, 'audioClip')
  return i5700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5705 = data
  request.r(i5705[0], i5705[1], 0, i5704, 'clip')
  request.r(i5705[2], i5705[3], 0, i5704, 'outputAudioMixerGroup')
  i5704.playOnAwake = !!i5705[4]
  i5704.loop = !!i5705[5]
  i5704.time = i5705[6]
  i5704.volume = i5705[7]
  i5704.pitch = i5705[8]
  i5704.enabled = !!i5705[9]
  return i5704
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5706 = root || request.c( 'GameManager' )
  var i5707 = data
  i5706.isPlaying = !!i5707[0]
  i5706.isTutorial = !!i5707[1]
  i5706.isGotoStore = !!i5707[2]
  i5706.isLoseGame = !!i5707[3]
  i5706.countMove = i5707[4]
  i5706.currentLayer = i5707[5]
  return i5706
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5708 = root || request.c( 'UIManager' )
  var i5709 = data
  request.r(i5709[0], i5709[1], 0, i5708, 'winUI')
  request.r(i5709[2], i5709[3], 0, i5708, 'loseUI')
  request.r(i5709[4], i5709[5], 0, i5708, 'tutorial')
  request.r(i5709[6], i5709[7], 0, i5708, 'verticalUI')
  request.r(i5709[8], i5709[9], 0, i5708, 'horizontalUI')
  request.r(i5709[10], i5709[11], 0, i5708, 'downloadBtn')
  i5708.screenWidth = i5709[12]
  i5708.screenHeight = i5709[13]
  i5708.scaleHeightOnWidth = i5709[14]
  i5708.isVertical = !!i5709[15]
  request.r(i5709[16], i5709[17], 0, i5708, 'cam')
  i5708.verticalUIHeightOnWidthRatio = i5709[18]
  i5708.scaleCameraOnValidate = !!i5709[19]
  i5708.useContinuousScaling = !!i5709[20]
  i5708.baseOrthographicSize = i5709[21]
  i5708.baseAspect = i5709[22]
  i5708.landscapeSizeRatio = i5709[23]
  i5708.defaultPortraitSizeRatio = i5709[24]
  var i5711 = i5709[25]
  var i5710 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.add(request.d('ScreenScaleStep', i5711[i + 0]));
  }
  i5708.discreteScaleSteps = i5710
  i5708.usePerspectiveCamera = !!i5709[26]
  request.r(i5709[27], i5709[28], 0, i5708, 'perspectiveFocus')
  i5708.perspectiveFocusDistance = i5709[29]
  i5708.perspectivePadding = i5709[30]
  i5708.fitRendererBounds = !!i5709[31]
  request.r(i5709[32], i5709[33], 0, i5708, 'boundsRoot')
  var i5713 = i5709[34]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5713.length; i += 2) {
  request.r(i5713[i + 0], i5713[i + 1], 1, i5712, '')
  }
  i5708.boundsRenderers = i5712
  return i5708
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5716 = root || request.c( 'ScreenScaleStep' )
  var i5717 = data
  i5716.heightOnWidthRatio = i5717[0]
  i5716.orthographicSize = i5717[1]
  return i5716
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5720 = root || request.c( 'InputManager' )
  var i5721 = data
  i5720.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5721[0] )
  i5720.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5721[1] )
  i5720.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5721[2] )
  i5720.isDragging = !!i5721[3]
  return i5720
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i5722 = root || request.c( 'PhaseManager' )
  var i5723 = data
  var i5725 = i5723[0]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.add(request.d('PhaseData', i5725[i + 0]));
  }
  i5722.phases = i5724
  i5722.delayBeforeNextPhase = i5723[1]
  i5722.transitionMoveDuration = i5723[2]
  i5722.backgroundFadeInDuration = i5723[3]
  i5722.backgroundFadeOutDuration = i5723[4]
  i5722.transitionMoveEase = i5723[5]
  i5722.backgroundFadeEase = i5723[6]
  request.r(i5723[7], i5723[8], 0, i5722, 'transitionObject')
  request.r(i5723[9], i5723[10], 0, i5722, 'transitionStartPos')
  request.r(i5723[11], i5723[12], 0, i5722, 'transitionEndPos')
  request.r(i5723[13], i5723[14], 0, i5722, 'transitionBackground')
  i5722.currentPhaseIndex = i5723[15]
  i5722.currentStepCount = i5723[16]
  return i5722
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i5728 = root || request.c( 'PhaseData' )
  var i5729 = data
  request.r(i5729[0], i5729[1], 0, i5728, 'phaseObject')
  i5728.totalSteps = i5729[2]
  i5728.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i5729[3], i5728.onPhaseReady)
  return i5728
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5730 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5731 = data
  i5730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5731[0], i5730.m_PersistentCalls)
  return i5730
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i5732 = root || request.c( 'HandTutManager' )
  var i5733 = data
  var i5735 = i5733[0]
  var i5734 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5735.length; i += 2) {
  request.r(i5735[i + 0], i5735[i + 1], 1, i5734, '')
  }
  i5732.items = i5734
  request.r(i5733[1], i5733[2], 0, i5732, 'knife')
  request.r(i5733[3], i5733[4], 0, i5732, 'handTutObject')
  request.r(i5733[5], i5733[6], 0, i5732, 'tapToCookObject')
  request.r(i5733[7], i5733[8], 0, i5732, 'oilItem')
  request.r(i5733[9], i5733[10], 0, i5732, 'stoveToggleEvent')
  i5732.idleDelay = i5733[11]
  i5732.moveDuration = i5733[12]
  i5732.dragFadeDuration = i5733[13]
  i5732.clickScaleDuration = i5733[14]
  i5732.waitAtEndDuration = i5733[15]
  i5732.stirLoopDuration = i5733[16]
  i5732.handZPosition = i5733[17]
  i5732.clickScaleMultiplier = i5733[18]
  i5732.moveEase = i5733[19]
  return i5732
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i5738 = root || request.c( 'SortChildByZPos' )
  var i5739 = data
  request.r(i5739[0], i5739[1], 0, i5738, 'transformToSort')
  var i5741 = i5739[2]
  var i5740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5741.length; i += 2) {
  request.r(i5741[i + 0], i5741[i + 1], 1, i5740, '')
  }
  i5738.childrenToSort = i5740
  i5738.zOffset = i5739[3]
  i5738.baseZ = i5739[4]
  return i5738
}

Deserializers["DuckManager"] = function (request, data, root) {
  var i5744 = root || request.c( 'DuckManager' )
  var i5745 = data
  var i5747 = i5745[0]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 2) {
  request.r(i5747[i + 0], i5747[i + 1], 2, i5746, '')
  }
  i5744.leftPoints = i5746
  var i5749 = i5745[1]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 2) {
  request.r(i5749[i + 0], i5749[i + 1], 2, i5748, '')
  }
  i5744.rightPoints = i5748
  i5744.minSpawnInterval = i5745[2]
  i5744.maxSpawnInterval = i5745[3]
  i5744.moveSpeed = i5745[4]
  i5744.duckSoundChance = i5745[5]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5751 = data
  i5750.aspect = i5751[0]
  i5750.orthographic = !!i5751[1]
  i5750.orthographicSize = i5751[2]
  i5750.backgroundColor = new pc.Color(i5751[3], i5751[4], i5751[5], i5751[6])
  i5750.nearClipPlane = i5751[7]
  i5750.farClipPlane = i5751[8]
  i5750.fieldOfView = i5751[9]
  i5750.depth = i5751[10]
  i5750.clearFlags = i5751[11]
  i5750.cullingMask = i5751[12]
  i5750.rect = i5751[13]
  request.r(i5751[14], i5751[15], 0, i5750, 'targetTexture')
  i5750.usePhysicalProperties = !!i5751[16]
  i5750.focalLength = i5751[17]
  i5750.sensorSize = new pc.Vec2( i5751[18], i5751[19] )
  i5750.lensShift = new pc.Vec2( i5751[20], i5751[21] )
  i5750.gateFit = i5751[22]
  i5750.commandBufferCount = i5751[23]
  i5750.cameraType = i5751[24]
  i5750.enabled = !!i5751[25]
  return i5750
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5752 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5753 = data
  request.r(i5753[0], i5753[1], 0, i5752, 'm_FirstSelected')
  i5752.m_sendNavigationEvents = !!i5753[2]
  i5752.m_DragThreshold = i5753[3]
  return i5752
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5754 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5755 = data
  i5754.m_HorizontalAxis = i5755[0]
  i5754.m_VerticalAxis = i5755[1]
  i5754.m_SubmitButton = i5755[2]
  i5754.m_CancelButton = i5755[3]
  i5754.m_InputActionsPerSecond = i5755[4]
  i5754.m_RepeatDelay = i5755[5]
  i5754.m_ForceModuleActive = !!i5755[6]
  i5754.m_SendPointerHoverToParent = !!i5755[7]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5757 = data
  i5756.center = new pc.Vec3( i5757[0], i5757[1], i5757[2] )
  i5756.radius = i5757[3]
  i5756.enabled = !!i5757[4]
  i5756.isTrigger = !!i5757[5]
  request.r(i5757[6], i5757[7], 0, i5756, 'material')
  return i5756
}

Deserializers["Item"] = function (request, data, root) {
  var i5758 = root || request.c( 'Item' )
  var i5759 = data
  i5758.isDone = !!i5759[0]
  i5758.onProcess = !!i5759[1]
  request.r(i5759[2], i5759[3], 0, i5758, 'itemDraggable')
  request.r(i5759[4], i5759[5], 0, i5758, 'itemClickable')
  request.r(i5759[6], i5759[7], 0, i5758, 'itemStirring')
  request.r(i5759[8], i5759[9], 0, i5758, 'itemKnifeSpriteMaskCutter')
  request.r(i5759[10], i5759[11], 0, i5758, 'itemSpriteMaskPainter')
  request.r(i5759[12], i5759[13], 0, i5758, 'itemMoveToTarget')
  request.r(i5759[14], i5759[15], 0, i5758, 'animator')
  i5758.itemType = i5759[16]
  request.r(i5759[17], i5759[18], 0, i5758, 'spriteRenderer')
  i5758.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5759[19], i5758.onKnifeIn)
  i5758.heartEffectScale = i5759[20]
  i5758.playMoveToTargetFinishSound = !!i5759[21]
  i5758.moveToTargetFinishFxType = i5759[22]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5761 = data
  request.r(i5761[0], i5761[1], 0, i5760, 'sharedMesh')
  return i5760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5763 = data
  request.r(i5763[0], i5763[1], 0, i5762, 'additionalVertexStreams')
  i5762.enabled = !!i5763[2]
  request.r(i5763[3], i5763[4], 0, i5762, 'sharedMaterial')
  var i5765 = i5763[5]
  var i5764 = []
  for(var i = 0; i < i5765.length; i += 2) {
  request.r(i5765[i + 0], i5765[i + 1], 2, i5764, '')
  }
  i5762.sharedMaterials = i5764
  i5762.receiveShadows = !!i5763[6]
  i5762.shadowCastingMode = i5763[7]
  i5762.sortingLayerID = i5763[8]
  i5762.sortingOrder = i5763[9]
  i5762.lightmapIndex = i5763[10]
  i5762.lightmapSceneIndex = i5763[11]
  i5762.lightmapScaleOffset = new pc.Vec4( i5763[12], i5763[13], i5763[14], i5763[15] )
  i5762.lightProbeUsage = i5763[16]
  i5762.reflectionProbeUsage = i5763[17]
  return i5762
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i5766 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i5767 = data
  i5766.loop = !!i5767[0]
  i5766.timeScale = i5767[1]
  request.r(i5767[2], i5767[3], 0, i5766, 'skeletonDataAsset')
  i5766.initialSkinName = i5767[4]
  i5766.fixPrefabOverrideViaMeshFilter = i5767[5]
  i5766.initialFlipX = !!i5767[6]
  i5766.initialFlipY = !!i5767[7]
  i5766.updateWhenInvisible = i5767[8]
  i5766.zSpacing = i5767[9]
  i5766.useClipping = !!i5767[10]
  i5766.immutableTriangles = !!i5767[11]
  i5766.pmaVertexColors = !!i5767[12]
  i5766.clearStateOnDisable = !!i5767[13]
  i5766.tintBlack = !!i5767[14]
  i5766.singleSubmesh = !!i5767[15]
  i5766.fixDrawOrder = !!i5767[16]
  i5766.addNormals = !!i5767[17]
  i5766.calculateTangents = !!i5767[18]
  i5766.maskInteraction = i5767[19]
  i5766.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i5767[20], i5766.maskMaterials)
  i5766.disableRenderingOnOverride = !!i5767[21]
  i5766._animationName = i5767[22]
  var i5769 = i5767[23]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( i5769[i + 0] );
  }
  i5766.separatorSlotNames = i5768
  return i5766
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i5770 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i5771 = data
  var i5773 = i5771[0]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 2) {
  request.r(i5773[i + 0], i5773[i + 1], 2, i5772, '')
  }
  i5770.materialsMaskDisabled = i5772
  var i5775 = i5771[1]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 2) {
  request.r(i5775[i + 0], i5775[i + 1], 2, i5774, '')
  }
  i5770.materialsInsideMask = i5774
  var i5777 = i5771[2]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 2) {
  request.r(i5777[i + 0], i5777[i + 1], 2, i5776, '')
  }
  i5770.materialsOutsideMask = i5776
  return i5770
}

Deserializers["ContinuousRotation"] = function (request, data, root) {
  var i5780 = root || request.c( 'ContinuousRotation' )
  var i5781 = data
  i5780.rotationAxis = new pc.Vec3( i5781[0], i5781[1], i5781[2] )
  i5780.degreesPerSecond = i5781[3]
  i5780.rotationSpace = i5781[4]
  i5780.useUnscaledTime = !!i5781[5]
  return i5780
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i5782 = root || request.c( 'Ply_ToggleEvent' )
  var i5783 = data
  i5782.isOn = !!i5783[0]
  i5782.applyStateOnEnable = !!i5783[1]
  i5782.applyStateOnClick = !!i5783[2]
  request.r(i5783[3], i5783[4], 0, i5782, 'targetObject')
  i5782.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i5783[5], i5782.onTurnOn)
  i5782.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i5783[6], i5782.onTurnOff)
  return i5782
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i5784 = root || request.c( 'ItemDraggable' )
  var i5785 = data
  i5784.isDraggable = !!i5785[0]
  request.r(i5785[1], i5785[2], 0, i5784, 'returnTransform')
  i5784.setParentToReturnTransform = !!i5785[3]
  i5784.returnToExactReturnTransformPosition = !!i5785[4]
  i5784.targetItemType = i5785[5]
  request.r(i5785[6], i5785[7], 0, i5784, 'item')
  i5784.checkState = !!i5785[8]
  request.r(i5785[9], i5785[10], 0, i5784, 'shadowObject')
  i5784.playReturnToStartFinishSound = !!i5785[11]
  i5784.returnToStartFinishFxType = i5785[12]
  i5784.spawnBreakHeartOnDropFail = !!i5785[13]
  i5784.liftOffset = i5785[14]
  i5784.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i5785[15], i5784.onBeginDrag)
  i5784.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i5785[16], i5784.onDropSuccess)
  i5784.onDropFail = request.d('UnityEngine.Events.UnityEvent', i5785[17], i5784.onDropFail)
  return i5784
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i5786 = root || request.c( 'ItemMoveToTarget' )
  var i5787 = data
  request.r(i5787[0], i5787[1], 0, i5786, 'defaultTarget')
  i5786.duration = i5787[2]
  i5786.easeType = i5787[3]
  i5786.moveType = i5787[4]
  i5786.jumpPower = i5787[5]
  i5786.numJumps = i5787[6]
  i5786.rotate360DuringJump = !!i5787[7]
  i5786.setParentToTarget = !!i5787[8]
  i5786.onComplete = request.d('UnityEngine.Events.UnityEvent', i5787[9], i5786.onComplete)
  i5786.lockInputWhileMoving = !!i5787[10]
  i5786.resetParentBeforeMove = !!i5787[11]
  return i5786
}

Deserializers["Salt"] = function (request, data, root) {
  var i5788 = root || request.c( 'Salt' )
  var i5789 = data
  request.r(i5789[0], i5789[1], 0, i5788, 'fishFillet')
  i5788.isDone = !!i5789[2]
  i5788.onProcess = !!i5789[3]
  request.r(i5789[4], i5789[5], 0, i5788, 'itemDraggable')
  request.r(i5789[6], i5789[7], 0, i5788, 'itemClickable')
  request.r(i5789[8], i5789[9], 0, i5788, 'itemStirring')
  request.r(i5789[10], i5789[11], 0, i5788, 'itemKnifeSpriteMaskCutter')
  request.r(i5789[12], i5789[13], 0, i5788, 'itemSpriteMaskPainter')
  request.r(i5789[14], i5789[15], 0, i5788, 'itemMoveToTarget')
  request.r(i5789[16], i5789[17], 0, i5788, 'animator')
  i5788.itemType = i5789[18]
  request.r(i5789[19], i5789[20], 0, i5788, 'spriteRenderer')
  i5788.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5789[21], i5788.onKnifeIn)
  i5788.heartEffectScale = i5789[22]
  i5788.playMoveToTargetFinishSound = !!i5789[23]
  i5788.moveToTargetFinishFxType = i5789[24]
  return i5788
}

Deserializers["EggBowl"] = function (request, data, root) {
  var i5790 = root || request.c( 'EggBowl' )
  var i5791 = data
  request.r(i5791[0], i5791[1], 0, i5790, 'spoon')
  request.r(i5791[2], i5791[3], 0, i5790, 'fishFillet')
  request.r(i5791[4], i5791[5], 0, i5790, 'fishDropParticle')
  i5790.fishDropParticleDuration = i5791[6]
  i5790.isDone = !!i5791[7]
  i5790.onProcess = !!i5791[8]
  request.r(i5791[9], i5791[10], 0, i5790, 'itemDraggable')
  request.r(i5791[11], i5791[12], 0, i5790, 'itemClickable')
  request.r(i5791[13], i5791[14], 0, i5790, 'itemStirring')
  request.r(i5791[15], i5791[16], 0, i5790, 'itemKnifeSpriteMaskCutter')
  request.r(i5791[17], i5791[18], 0, i5790, 'itemSpriteMaskPainter')
  request.r(i5791[19], i5791[20], 0, i5790, 'itemMoveToTarget')
  request.r(i5791[21], i5791[22], 0, i5790, 'animator')
  i5790.itemType = i5791[23]
  request.r(i5791[24], i5791[25], 0, i5790, 'spriteRenderer')
  i5790.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5791[26], i5790.onKnifeIn)
  i5790.heartEffectScale = i5791[27]
  i5790.playMoveToTargetFinishSound = !!i5791[28]
  i5790.moveToTargetFinishFxType = i5791[29]
  return i5790
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i5792 = root || request.c( 'ItemStirring' )
  var i5793 = data
  i5792.stirRadius = i5793[0]
  request.r(i5793[1], i5793[2], 0, i5792, 'stirrerTransform')
  request.r(i5793[3], i5793[4], 0, i5792, 'centerPoint')
  request.r(i5793[5], i5793[6], 0, i5792, 'targetAnimator')
  i5792.targetStateName = i5793[7]
  i5792.targetLayer = i5793[8]
  i5792.stoppedSpeed = i5793[9]
  i5792.minDragDistanceToAnimate = i5793[10]
  i5792.dragSpeedMultiplier = i5793[11]
  i5792.minAnimatorSpeed = i5793[12]
  i5792.maxAnimatorSpeed = i5793[13]
  i5792.speedBlendDuration = i5793[14]
  i5792.completeNormalizedTime = i5793[15]
  i5792.resetAnimationOnFirstBegin = !!i5793[16]
  var i5795 = i5793[17]
  var i5794 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i5795.length; i += 1) {
    i5794.add(request.d('StirMilestone', i5795[i + 0]));
  }
  i5792.milestones = i5794
  i5792.spawnProgressBarOnStir = !!i5793[18]
  request.r(i5793[19], i5793[20], 0, i5792, 'spawnProgressBarPoint')
  i5792.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i5793[21], i5792.onStirBegin)
  i5792.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i5793[22], i5792.onStirComplete)
  return i5792
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i5798 = root || request.c( 'StirMilestone' )
  var i5799 = data
  i5798.distanceThreshold = i5799[0]
  i5798.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i5799[1], i5798.onMilestoneReached)
  i5798.isReached = !!i5799[2]
  return i5798
}

Deserializers["Pan"] = function (request, data, root) {
  var i5800 = root || request.c( 'Pan' )
  var i5801 = data
  request.r(i5801[0], i5801[1], 0, i5800, 'fryingFX')
  request.r(i5801[2], i5801[3], 0, i5800, 'oilObject')
  i5800.cakeFryDuration = i5801[4]
  i5800.isOilIn = !!i5801[5]
  i5800.isTurnOnStove = !!i5801[6]
  i5800.stoveShakeDelay = i5801[7]
  i5800.stoveShakeDuration = i5801[8]
  i5800.stoveShakeStrength = i5801[9]
  i5800.stoveShakeVibrato = i5801[10]
  i5800.isDone = !!i5801[11]
  i5800.onProcess = !!i5801[12]
  request.r(i5801[13], i5801[14], 0, i5800, 'itemDraggable')
  request.r(i5801[15], i5801[16], 0, i5800, 'itemClickable')
  request.r(i5801[17], i5801[18], 0, i5800, 'itemStirring')
  request.r(i5801[19], i5801[20], 0, i5800, 'itemKnifeSpriteMaskCutter')
  request.r(i5801[21], i5801[22], 0, i5800, 'itemSpriteMaskPainter')
  request.r(i5801[23], i5801[24], 0, i5800, 'itemMoveToTarget')
  request.r(i5801[25], i5801[26], 0, i5800, 'animator')
  i5800.itemType = i5801[27]
  request.r(i5801[28], i5801[29], 0, i5800, 'spriteRenderer')
  i5800.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5801[30], i5800.onKnifeIn)
  i5800.heartEffectScale = i5801[31]
  i5800.playMoveToTargetFinishSound = !!i5801[32]
  i5800.moveToTargetFinishFxType = i5801[33]
  return i5800
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i5802 = root || request.c( 'ItemClickable' )
  var i5803 = data
  i5802.requiredClicks = i5803[0]
  i5802.infiniteClick = !!i5803[1]
  i5802.canClick = !!i5803[2]
  i5802.disableAfterClick = !!i5803[3]
  i5802.onClick = request.d('UnityEngine.Events.UnityEvent', i5803[4], i5802.onClick)
  var i5805 = i5803[5]
  var i5804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i5805.length; i += 1) {
    i5804.add(request.d('UnityEngine.Events.UnityEvent', i5805[i + 0]));
  }
  i5802.sequentialOnClicks = i5804
  i5802.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i5803[6], i5802.onClickComplete)
  return i5802
}

Deserializers["Tray"] = function (request, data, root) {
  var i5808 = root || request.c( 'Tray' )
  var i5809 = data
  request.r(i5809[0], i5809[1], 0, i5808, 'fishFillet')
  i5808.isDone = !!i5809[2]
  i5808.onProcess = !!i5809[3]
  request.r(i5809[4], i5809[5], 0, i5808, 'itemDraggable')
  request.r(i5809[6], i5809[7], 0, i5808, 'itemClickable')
  request.r(i5809[8], i5809[9], 0, i5808, 'itemStirring')
  request.r(i5809[10], i5809[11], 0, i5808, 'itemKnifeSpriteMaskCutter')
  request.r(i5809[12], i5809[13], 0, i5808, 'itemSpriteMaskPainter')
  request.r(i5809[14], i5809[15], 0, i5808, 'itemMoveToTarget')
  request.r(i5809[16], i5809[17], 0, i5808, 'animator')
  i5808.itemType = i5809[18]
  request.r(i5809[19], i5809[20], 0, i5808, 'spriteRenderer')
  i5808.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5809[21], i5808.onKnifeIn)
  i5808.heartEffectScale = i5809[22]
  i5808.playMoveToTargetFinishSound = !!i5809[23]
  i5808.moveToTargetFinishFxType = i5809[24]
  return i5808
}

Deserializers["FishFillet"] = function (request, data, root) {
  var i5810 = root || request.c( 'FishFillet' )
  var i5811 = data
  i5810.currentStep = i5811[0]
  var i5813 = i5811[1]
  var i5812 = []
  for(var i = 0; i < i5813.length; i += 2) {
  request.r(i5813[i + 0], i5813[i + 1], 2, i5812, '')
  }
  i5810.moveTargets = i5812
  i5810.isSaltIn = !!i5811[2]
  i5810.isEggReady = !!i5811[3]
  request.r(i5811[4], i5811[5], 0, i5810, 'fishObject')
  var i5815 = i5811[6]
  var i5814 = []
  for(var i = 0; i < i5815.length; i += 2) {
  request.r(i5815[i + 0], i5815[i + 1], 2, i5814, '')
  }
  i5810.spriteRenderers = i5814
  var i5817 = i5811[7]
  var i5816 = []
  for(var i = 0; i < i5817.length; i += 2) {
  request.r(i5817[i + 0], i5817[i + 1], 2, i5816, '')
  }
  i5810.fishDoneRenderers = i5816
  request.r(i5811[8], i5811[9], 0, i5810, 'eggFish')
  request.r(i5811[10], i5811[11], 0, i5810, 'flourFish')
  request.r(i5811[12], i5811[13], 0, i5810, 'salt')
  request.r(i5811[14], i5811[15], 0, i5810, 'plate')
  request.r(i5811[16], i5811[17], 0, i5810, 'eggBowl')
  request.r(i5811[18], i5811[19], 0, i5810, 'flourBowl')
  request.r(i5811[20], i5811[21], 0, i5810, 'clockTimerPrefab')
  request.r(i5811[22], i5811[23], 0, i5810, 'clockSpawnPoint')
  i5810.cookDuration = i5811[24]
  i5810.readyZ = i5811[25]
  request.r(i5811[26], i5811[27], 0, i5810, 'pan')
  request.r(i5811[28], i5811[29], 0, i5810, 'spawnClockOnPan')
  i5810.panCookDuration = i5811[30]
  i5810.bobUseLocalMove = !!i5811[31]
  i5810.bobOffset = new pc.Vec3( i5811[32], i5811[33], i5811[34] )
  i5810.bobDuration = i5811[35]
  i5810.bobEase = i5811[36]
  i5810.returnDuration = i5811[37]
  i5810.returnEase = i5811[38]
  i5810.targetPunchScale = new pc.Vec3( i5811[39], i5811[40], i5811[41] )
  i5810.targetPunchDuration = i5811[42]
  i5810.targetPunchVibrato = i5811[43]
  i5810.targetPunchElasticity = i5811[44]
  i5810.flourJumpPower = i5811[45]
  i5810.flourJumpDuration = i5811[46]
  i5810.flourJumpOffsets = i5811[47]
  i5810.isDone = !!i5811[48]
  i5810.onProcess = !!i5811[49]
  request.r(i5811[50], i5811[51], 0, i5810, 'itemDraggable')
  request.r(i5811[52], i5811[53], 0, i5810, 'itemClickable')
  request.r(i5811[54], i5811[55], 0, i5810, 'itemStirring')
  request.r(i5811[56], i5811[57], 0, i5810, 'itemKnifeSpriteMaskCutter')
  request.r(i5811[58], i5811[59], 0, i5810, 'itemSpriteMaskPainter')
  request.r(i5811[60], i5811[61], 0, i5810, 'itemMoveToTarget')
  request.r(i5811[62], i5811[63], 0, i5810, 'animator')
  i5810.itemType = i5811[64]
  request.r(i5811[65], i5811[66], 0, i5810, 'spriteRenderer')
  i5810.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5811[67], i5810.onKnifeIn)
  i5810.heartEffectScale = i5811[68]
  i5810.playMoveToTargetFinishSound = !!i5811[69]
  i5810.moveToTargetFinishFxType = i5811[70]
  return i5810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5821 = data
  i5820.frontSortingLayerID = i5821[0]
  i5820.frontSortingOrder = i5821[1]
  i5820.backSortingLayerID = i5821[2]
  i5820.backSortingOrder = i5821[3]
  i5820.alphaCutoff = i5821[4]
  request.r(i5821[5], i5821[6], 0, i5820, 'sprite')
  i5820.tileMode = i5821[7]
  i5820.isCustomRangeActive = !!i5821[8]
  i5820.spriteSortPoint = i5821[9]
  i5820.enabled = !!i5821[10]
  request.r(i5821[11], i5821[12], 0, i5820, 'sharedMaterial')
  var i5823 = i5821[13]
  var i5822 = []
  for(var i = 0; i < i5823.length; i += 2) {
  request.r(i5823[i + 0], i5823[i + 1], 2, i5822, '')
  }
  i5820.sharedMaterials = i5822
  i5820.receiveShadows = !!i5821[14]
  i5820.shadowCastingMode = i5821[15]
  i5820.sortingLayerID = i5821[16]
  i5820.sortingOrder = i5821[17]
  i5820.lightmapIndex = i5821[18]
  i5820.lightmapSceneIndex = i5821[19]
  i5820.lightmapScaleOffset = new pc.Vec4( i5821[20], i5821[21], i5821[22], i5821[23] )
  i5820.lightProbeUsage = i5821[24]
  i5820.reflectionProbeUsage = i5821[25]
  return i5820
}

Deserializers["Tongs"] = function (request, data, root) {
  var i5824 = root || request.c( 'Tongs' )
  var i5825 = data
  request.r(i5825[0], i5825[1], 0, i5824, 'fishFillet')
  request.r(i5825[2], i5825[3], 0, i5824, 'fishPoint')
  i5824.catchDuration = i5825[4]
  i5824.raycastDistance = i5825[5]
  i5824.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5825[6] )
  i5824.isDone = !!i5825[7]
  i5824.onProcess = !!i5825[8]
  request.r(i5825[9], i5825[10], 0, i5824, 'itemDraggable')
  request.r(i5825[11], i5825[12], 0, i5824, 'itemClickable')
  request.r(i5825[13], i5825[14], 0, i5824, 'itemStirring')
  request.r(i5825[15], i5825[16], 0, i5824, 'itemKnifeSpriteMaskCutter')
  request.r(i5825[17], i5825[18], 0, i5824, 'itemSpriteMaskPainter')
  request.r(i5825[19], i5825[20], 0, i5824, 'itemMoveToTarget')
  request.r(i5825[21], i5825[22], 0, i5824, 'animator')
  i5824.itemType = i5825[23]
  request.r(i5825[24], i5825[25], 0, i5824, 'spriteRenderer')
  i5824.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5825[26], i5824.onKnifeIn)
  i5824.heartEffectScale = i5825[27]
  i5824.playMoveToTargetFinishSound = !!i5825[28]
  i5824.moveToTargetFinishFxType = i5825[29]
  return i5824
}

Deserializers["Blender"] = function (request, data, root) {
  var i5826 = root || request.c( 'Blender' )
  var i5827 = data
  request.r(i5827[0], i5827[1], 0, i5826, 'capClosePos')
  request.r(i5827[2], i5827[3], 0, i5826, 'cap')
  request.r(i5827[4], i5827[5], 0, i5826, 'button')
  request.r(i5827[6], i5827[7], 0, i5826, 'buttonOn')
  i5826.countFoodIn = i5827[8]
  i5826.isClose = !!i5827[9]
  i5826.isDone = !!i5827[10]
  i5826.onProcess = !!i5827[11]
  request.r(i5827[12], i5827[13], 0, i5826, 'itemDraggable')
  request.r(i5827[14], i5827[15], 0, i5826, 'itemClickable')
  request.r(i5827[16], i5827[17], 0, i5826, 'itemStirring')
  request.r(i5827[18], i5827[19], 0, i5826, 'itemKnifeSpriteMaskCutter')
  request.r(i5827[20], i5827[21], 0, i5826, 'itemSpriteMaskPainter')
  request.r(i5827[22], i5827[23], 0, i5826, 'itemMoveToTarget')
  request.r(i5827[24], i5827[25], 0, i5826, 'animator')
  i5826.itemType = i5827[26]
  request.r(i5827[27], i5827[28], 0, i5826, 'spriteRenderer')
  i5826.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5827[29], i5826.onKnifeIn)
  i5826.heartEffectScale = i5827[30]
  i5826.playMoveToTargetFinishSound = !!i5827[31]
  i5826.moveToTargetFinishFxType = i5827[32]
  return i5826
}

Deserializers["FoodToBlender"] = function (request, data, root) {
  var i5828 = root || request.c( 'FoodToBlender' )
  var i5829 = data
  i5828.foodType = i5829[0]
  request.r(i5829[1], i5829[2], 0, i5828, 'blender')
  i5828.isDone = !!i5829[3]
  i5828.onProcess = !!i5829[4]
  request.r(i5829[5], i5829[6], 0, i5828, 'itemDraggable')
  request.r(i5829[7], i5829[8], 0, i5828, 'itemClickable')
  request.r(i5829[9], i5829[10], 0, i5828, 'itemStirring')
  request.r(i5829[11], i5829[12], 0, i5828, 'itemKnifeSpriteMaskCutter')
  request.r(i5829[13], i5829[14], 0, i5828, 'itemSpriteMaskPainter')
  request.r(i5829[15], i5829[16], 0, i5828, 'itemMoveToTarget')
  request.r(i5829[17], i5829[18], 0, i5828, 'animator')
  i5828.itemType = i5829[19]
  request.r(i5829[20], i5829[21], 0, i5828, 'spriteRenderer')
  i5828.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5829[22], i5828.onKnifeIn)
  i5828.heartEffectScale = i5829[23]
  i5828.playMoveToTargetFinishSound = !!i5829[24]
  i5828.moveToTargetFinishFxType = i5829[25]
  return i5828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5831 = data
  i5830.ambientIntensity = i5831[0]
  i5830.reflectionIntensity = i5831[1]
  i5830.ambientMode = i5831[2]
  i5830.ambientLight = new pc.Color(i5831[3], i5831[4], i5831[5], i5831[6])
  i5830.ambientSkyColor = new pc.Color(i5831[7], i5831[8], i5831[9], i5831[10])
  i5830.ambientGroundColor = new pc.Color(i5831[11], i5831[12], i5831[13], i5831[14])
  i5830.ambientEquatorColor = new pc.Color(i5831[15], i5831[16], i5831[17], i5831[18])
  i5830.fogColor = new pc.Color(i5831[19], i5831[20], i5831[21], i5831[22])
  i5830.fogEndDistance = i5831[23]
  i5830.fogStartDistance = i5831[24]
  i5830.fogDensity = i5831[25]
  i5830.fog = !!i5831[26]
  request.r(i5831[27], i5831[28], 0, i5830, 'skybox')
  i5830.fogMode = i5831[29]
  var i5833 = i5831[30]
  var i5832 = []
  for(var i = 0; i < i5833.length; i += 1) {
    i5832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5833[i + 0]) );
  }
  i5830.lightmaps = i5832
  i5830.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5831[31], i5830.lightProbes)
  i5830.lightmapsMode = i5831[32]
  i5830.mixedBakeMode = i5831[33]
  i5830.environmentLightingMode = i5831[34]
  i5830.ambientProbe = new pc.SphericalHarmonicsL2(i5831[35])
  i5830.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5831[36])
  i5830.useReferenceAmbientProbe = !!i5831[37]
  request.r(i5831[38], i5831[39], 0, i5830, 'customReflection')
  request.r(i5831[40], i5831[41], 0, i5830, 'defaultReflection')
  i5830.defaultReflectionMode = i5831[42]
  i5830.defaultReflectionResolution = i5831[43]
  i5830.sunLightObjectId = i5831[44]
  i5830.pixelLightCount = i5831[45]
  i5830.defaultReflectionHDR = !!i5831[46]
  i5830.hasLightDataAsset = !!i5831[47]
  i5830.hasManualGenerate = !!i5831[48]
  return i5830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5837 = data
  request.r(i5837[0], i5837[1], 0, i5836, 'lightmapColor')
  request.r(i5837[2], i5837[3], 0, i5836, 'lightmapDirection')
  request.r(i5837[4], i5837[5], 0, i5836, 'shadowMask')
  return i5836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5838 = root || new UnityEngine.LightProbes()
  var i5839 = data
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5847 = data
  var i5849 = i5847[0]
  var i5848 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5849.length; i += 1) {
    i5848.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5849[i + 0]));
  }
  i5846.ShaderCompilationErrors = i5848
  i5846.name = i5847[1]
  i5846.guid = i5847[2]
  var i5851 = i5847[3]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.push( i5851[i + 0] );
  }
  i5846.shaderDefinedKeywords = i5850
  var i5853 = i5847[4]
  var i5852 = []
  for(var i = 0; i < i5853.length; i += 1) {
    i5852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5853[i + 0]) );
  }
  i5846.passes = i5852
  var i5855 = i5847[5]
  var i5854 = []
  for(var i = 0; i < i5855.length; i += 1) {
    i5854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5855[i + 0]) );
  }
  i5846.usePasses = i5854
  var i5857 = i5847[6]
  var i5856 = []
  for(var i = 0; i < i5857.length; i += 1) {
    i5856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5857[i + 0]) );
  }
  i5846.defaultParameterValues = i5856
  request.r(i5847[7], i5847[8], 0, i5846, 'unityFallbackShader')
  i5846.readDepth = !!i5847[9]
  i5846.hasDepthOnlyPass = !!i5847[10]
  i5846.isCreatedByShaderGraph = !!i5847[11]
  i5846.disableBatching = !!i5847[12]
  i5846.compiled = !!i5847[13]
  return i5846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5861 = data
  i5860.shaderName = i5861[0]
  i5860.errorMessage = i5861[1]
  return i5860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5864 = root || new pc.UnityShaderPass()
  var i5865 = data
  i5864.id = i5865[0]
  i5864.subShaderIndex = i5865[1]
  i5864.name = i5865[2]
  i5864.passType = i5865[3]
  i5864.grabPassTextureName = i5865[4]
  i5864.usePass = !!i5865[5]
  i5864.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[6], i5864.zTest)
  i5864.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[7], i5864.zWrite)
  i5864.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[8], i5864.culling)
  i5864.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5865[9], i5864.blending)
  i5864.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5865[10], i5864.alphaBlending)
  i5864.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[11], i5864.colorWriteMask)
  i5864.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[12], i5864.offsetUnits)
  i5864.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[13], i5864.offsetFactor)
  i5864.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[14], i5864.stencilRef)
  i5864.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[15], i5864.stencilReadMask)
  i5864.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5865[16], i5864.stencilWriteMask)
  i5864.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5865[17], i5864.stencilOp)
  i5864.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5865[18], i5864.stencilOpFront)
  i5864.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5865[19], i5864.stencilOpBack)
  var i5867 = i5865[20]
  var i5866 = []
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5867[i + 0]) );
  }
  i5864.tags = i5866
  var i5869 = i5865[21]
  var i5868 = []
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.push( i5869[i + 0] );
  }
  i5864.passDefinedKeywords = i5868
  var i5871 = i5865[22]
  var i5870 = []
  for(var i = 0; i < i5871.length; i += 1) {
    i5870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5871[i + 0]) );
  }
  i5864.passDefinedKeywordGroups = i5870
  var i5873 = i5865[23]
  var i5872 = []
  for(var i = 0; i < i5873.length; i += 1) {
    i5872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5873[i + 0]) );
  }
  i5864.variants = i5872
  var i5875 = i5865[24]
  var i5874 = []
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5875[i + 0]) );
  }
  i5864.excludedVariants = i5874
  i5864.hasDepthReader = !!i5865[25]
  return i5864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5877 = data
  i5876.val = i5877[0]
  i5876.name = i5877[1]
  return i5876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5879 = data
  i5878.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5879[0], i5878.src)
  i5878.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5879[1], i5878.dst)
  i5878.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5879[2], i5878.op)
  return i5878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5881 = data
  i5880.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5881[0], i5880.pass)
  i5880.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5881[1], i5880.fail)
  i5880.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5881[2], i5880.zFail)
  i5880.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5881[3], i5880.comp)
  return i5880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5885 = data
  i5884.name = i5885[0]
  i5884.value = i5885[1]
  return i5884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5889 = data
  var i5891 = i5889[0]
  var i5890 = []
  for(var i = 0; i < i5891.length; i += 1) {
    i5890.push( i5891[i + 0] );
  }
  i5888.keywords = i5890
  i5888.hasDiscard = !!i5889[1]
  return i5888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5895 = data
  i5894.passId = i5895[0]
  i5894.subShaderIndex = i5895[1]
  var i5897 = i5895[2]
  var i5896 = []
  for(var i = 0; i < i5897.length; i += 1) {
    i5896.push( i5897[i + 0] );
  }
  i5894.keywords = i5896
  i5894.vertexProgram = i5895[3]
  i5894.fragmentProgram = i5895[4]
  i5894.exportedForWebGl2 = !!i5895[5]
  i5894.readDepth = !!i5895[6]
  return i5894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5901 = data
  request.r(i5901[0], i5901[1], 0, i5900, 'shader')
  i5900.pass = i5901[2]
  return i5900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5905 = data
  i5904.name = i5905[0]
  i5904.type = i5905[1]
  i5904.value = new pc.Vec4( i5905[2], i5905[3], i5905[4], i5905[5] )
  i5904.textureValue = i5905[6]
  i5904.shaderPropertyFlag = i5905[7]
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5907 = data
  i5906.name = i5907[0]
  request.r(i5907[1], i5907[2], 0, i5906, 'texture')
  i5906.aabb = i5907[3]
  i5906.vertices = i5907[4]
  i5906.triangles = i5907[5]
  i5906.textureRect = UnityEngine.Rect.MinMaxRect(i5907[6], i5907[7], i5907[8], i5907[9])
  i5906.packedRect = UnityEngine.Rect.MinMaxRect(i5907[10], i5907[11], i5907[12], i5907[13])
  i5906.border = new pc.Vec4( i5907[14], i5907[15], i5907[16], i5907[17] )
  i5906.transparency = i5907[18]
  i5906.bounds = i5907[19]
  i5906.pixelsPerUnit = i5907[20]
  i5906.textureWidth = i5907[21]
  i5906.textureHeight = i5907[22]
  i5906.nativeSize = new pc.Vec2( i5907[23], i5907[24] )
  i5906.pivot = new pc.Vec2( i5907[25], i5907[26] )
  i5906.textureRectOffset = new pc.Vec2( i5907[27], i5907[28] )
  return i5906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5909 = data
  i5908.name = i5909[0]
  return i5908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5911 = data
  i5910.name = i5911[0]
  i5910.wrapMode = i5911[1]
  i5910.isLooping = !!i5911[2]
  i5910.length = i5911[3]
  var i5913 = i5911[4]
  var i5912 = []
  for(var i = 0; i < i5913.length; i += 1) {
    i5912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5913[i + 0]) );
  }
  i5910.curves = i5912
  var i5915 = i5911[5]
  var i5914 = []
  for(var i = 0; i < i5915.length; i += 1) {
    i5914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5915[i + 0]) );
  }
  i5910.events = i5914
  i5910.halfPrecision = !!i5911[6]
  i5910._frameRate = i5911[7]
  i5910.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5911[8], i5910.localBounds)
  i5910.hasMuscleCurves = !!i5911[9]
  var i5917 = i5911[10]
  var i5916 = []
  for(var i = 0; i < i5917.length; i += 1) {
    i5916.push( i5917[i + 0] );
  }
  i5910.clipMuscleConstant = i5916
  i5910.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5911[11], i5910.clipBindingConstant)
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5921 = data
  i5920.path = i5921[0]
  i5920.hash = i5921[1]
  i5920.componentType = i5921[2]
  i5920.property = i5921[3]
  i5920.keys = i5921[4]
  var i5923 = i5921[5]
  var i5922 = []
  for(var i = 0; i < i5923.length; i += 1) {
    i5922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5923[i + 0]) );
  }
  i5920.objectReferenceKeys = i5922
  return i5920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5927 = data
  i5926.time = i5927[0]
  request.r(i5927[1], i5927[2], 0, i5926, 'value')
  return i5926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5931 = data
  i5930.functionName = i5931[0]
  i5930.floatParameter = i5931[1]
  i5930.intParameter = i5931[2]
  i5930.stringParameter = i5931[3]
  request.r(i5931[4], i5931[5], 0, i5930, 'objectReferenceParameter')
  i5930.time = i5931[6]
  return i5930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5933 = data
  i5932.center = new pc.Vec3( i5933[0], i5933[1], i5933[2] )
  i5932.extends = new pc.Vec3( i5933[3], i5933[4], i5933[5] )
  return i5932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5937 = data
  var i5939 = i5937[0]
  var i5938 = []
  for(var i = 0; i < i5939.length; i += 1) {
    i5938.push( i5939[i + 0] );
  }
  i5936.genericBindings = i5938
  var i5941 = i5937[1]
  var i5940 = []
  for(var i = 0; i < i5941.length; i += 1) {
    i5940.push( i5941[i + 0] );
  }
  i5936.pptrCurveMapping = i5940
  return i5936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5943 = data
  i5942.name = i5943[0]
  var i5945 = i5943[1]
  var i5944 = []
  for(var i = 0; i < i5945.length; i += 1) {
    i5944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5945[i + 0]) );
  }
  i5942.layers = i5944
  var i5947 = i5943[2]
  var i5946 = []
  for(var i = 0; i < i5947.length; i += 1) {
    i5946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5947[i + 0]) );
  }
  i5942.parameters = i5946
  i5942.animationClips = i5943[3]
  i5942.avatarUnsupported = i5943[4]
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5951 = data
  i5950.name = i5951[0]
  i5950.defaultWeight = i5951[1]
  i5950.blendingMode = i5951[2]
  i5950.avatarMask = i5951[3]
  i5950.syncedLayerIndex = i5951[4]
  i5950.syncedLayerAffectsTiming = !!i5951[5]
  i5950.syncedLayers = i5951[6]
  i5950.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5951[7], i5950.stateMachine)
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5953 = data
  i5952.id = i5953[0]
  i5952.name = i5953[1]
  i5952.path = i5953[2]
  var i5955 = i5953[3]
  var i5954 = []
  for(var i = 0; i < i5955.length; i += 1) {
    i5954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5955[i + 0]) );
  }
  i5952.states = i5954
  var i5957 = i5953[4]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5957[i + 0]) );
  }
  i5952.machines = i5956
  var i5959 = i5953[5]
  var i5958 = []
  for(var i = 0; i < i5959.length; i += 1) {
    i5958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5959[i + 0]) );
  }
  i5952.entryStateTransitions = i5958
  var i5961 = i5953[6]
  var i5960 = []
  for(var i = 0; i < i5961.length; i += 1) {
    i5960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5961[i + 0]) );
  }
  i5952.exitStateTransitions = i5960
  var i5963 = i5953[7]
  var i5962 = []
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5963[i + 0]) );
  }
  i5952.anyStateTransitions = i5962
  i5952.defaultStateId = i5953[8]
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5967 = data
  i5966.id = i5967[0]
  i5966.name = i5967[1]
  i5966.cycleOffset = i5967[2]
  i5966.cycleOffsetParameter = i5967[3]
  i5966.cycleOffsetParameterActive = !!i5967[4]
  i5966.mirror = !!i5967[5]
  i5966.mirrorParameter = i5967[6]
  i5966.mirrorParameterActive = !!i5967[7]
  i5966.motionId = i5967[8]
  i5966.nameHash = i5967[9]
  i5966.fullPathHash = i5967[10]
  i5966.speed = i5967[11]
  i5966.speedParameter = i5967[12]
  i5966.speedParameterActive = !!i5967[13]
  i5966.tag = i5967[14]
  i5966.tagHash = i5967[15]
  i5966.writeDefaultValues = !!i5967[16]
  var i5969 = i5967[17]
  var i5968 = []
  for(var i = 0; i < i5969.length; i += 2) {
  request.r(i5969[i + 0], i5969[i + 1], 2, i5968, '')
  }
  i5966.behaviours = i5968
  var i5971 = i5967[18]
  var i5970 = []
  for(var i = 0; i < i5971.length; i += 1) {
    i5970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5971[i + 0]) );
  }
  i5966.transitions = i5970
  return i5966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5977 = data
  i5976.fullPath = i5977[0]
  i5976.canTransitionToSelf = !!i5977[1]
  i5976.duration = i5977[2]
  i5976.exitTime = i5977[3]
  i5976.hasExitTime = !!i5977[4]
  i5976.hasFixedDuration = !!i5977[5]
  i5976.interruptionSource = i5977[6]
  i5976.offset = i5977[7]
  i5976.orderedInterruption = !!i5977[8]
  i5976.destinationStateId = i5977[9]
  i5976.isExit = !!i5977[10]
  i5976.mute = !!i5977[11]
  i5976.solo = !!i5977[12]
  var i5979 = i5977[13]
  var i5978 = []
  for(var i = 0; i < i5979.length; i += 1) {
    i5978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5979[i + 0]) );
  }
  i5976.conditions = i5978
  return i5976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5985 = data
  i5984.destinationStateId = i5985[0]
  i5984.isExit = !!i5985[1]
  i5984.mute = !!i5985[2]
  i5984.solo = !!i5985[3]
  var i5987 = i5985[4]
  var i5986 = []
  for(var i = 0; i < i5987.length; i += 1) {
    i5986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5987[i + 0]) );
  }
  i5984.conditions = i5986
  return i5984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5991 = data
  i5990.defaultBool = !!i5991[0]
  i5990.defaultFloat = i5991[1]
  i5990.defaultInt = i5991[2]
  i5990.name = i5991[3]
  i5990.nameHash = i5991[4]
  i5990.type = i5991[5]
  return i5990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5995 = data
  i5994.mode = i5995[0]
  i5994.parameter = i5995[1]
  i5994.threshold = i5995[2]
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5997 = data
  i5996.name = i5997[0]
  i5996.bytes64 = i5997[1]
  i5996.data = i5997[2]
  return i5996
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5998 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5999 = data
  i5998.normalStyle = i5999[0]
  i5998.normalSpacingOffset = i5999[1]
  i5998.boldStyle = i5999[2]
  i5998.boldSpacing = i5999[3]
  i5998.italicStyle = i5999[4]
  i5998.tabSize = i5999[5]
  request.r(i5999[6], i5999[7], 0, i5998, 'atlas')
  i5998.m_SourceFontFileGUID = i5999[8]
  i5998.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5999[9], i5998.m_CreationSettings)
  request.r(i5999[10], i5999[11], 0, i5998, 'm_SourceFontFile')
  i5998.m_SourceFontFilePath = i5999[12]
  i5998.m_AtlasPopulationMode = i5999[13]
  i5998.InternalDynamicOS = !!i5999[14]
  var i6001 = i5999[15]
  var i6000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6001.length; i += 1) {
    i6000.add(request.d('UnityEngine.TextCore.Glyph', i6001[i + 0]));
  }
  i5998.m_GlyphTable = i6000
  var i6003 = i5999[16]
  var i6002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6003.length; i += 1) {
    i6002.add(request.d('TMPro.TMP_Character', i6003[i + 0]));
  }
  i5998.m_CharacterTable = i6002
  var i6005 = i5999[17]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 2) {
  request.r(i6005[i + 0], i6005[i + 1], 2, i6004, '')
  }
  i5998.m_AtlasTextures = i6004
  i5998.m_AtlasTextureIndex = i5999[18]
  i5998.m_IsMultiAtlasTexturesEnabled = !!i5999[19]
  i5998.m_GetFontFeatures = !!i5999[20]
  i5998.m_ClearDynamicDataOnBuild = !!i5999[21]
  i5998.m_AtlasWidth = i5999[22]
  i5998.m_AtlasHeight = i5999[23]
  i5998.m_AtlasPadding = i5999[24]
  i5998.m_AtlasRenderMode = i5999[25]
  var i6007 = i5999[26]
  var i6006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6007.length; i += 1) {
    i6006.add(request.d('UnityEngine.TextCore.GlyphRect', i6007[i + 0]));
  }
  i5998.m_UsedGlyphRects = i6006
  var i6009 = i5999[27]
  var i6008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6009.length; i += 1) {
    i6008.add(request.d('UnityEngine.TextCore.GlyphRect', i6009[i + 0]));
  }
  i5998.m_FreeGlyphRects = i6008
  i5998.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5999[28], i5998.m_FontFeatureTable)
  i5998.m_ShouldReimportFontFeatures = !!i5999[29]
  var i6011 = i5999[30]
  var i6010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6011.length; i += 2) {
  request.r(i6011[i + 0], i6011[i + 1], 1, i6010, '')
  }
  i5998.m_FallbackFontAssetTable = i6010
  var i6013 = i5999[31]
  var i6012 = []
  for(var i = 0; i < i6013.length; i += 1) {
    i6012.push( request.d('TMPro.TMP_FontWeightPair', i6013[i + 0]) );
  }
  i5998.m_FontWeightTable = i6012
  var i6015 = i5999[32]
  var i6014 = []
  for(var i = 0; i < i6015.length; i += 1) {
    i6014.push( request.d('TMPro.TMP_FontWeightPair', i6015[i + 0]) );
  }
  i5998.fontWeights = i6014
  i5998.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5999[33], i5998.m_fontInfo)
  var i6017 = i5999[34]
  var i6016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.add(request.d('TMPro.TMP_Glyph', i6017[i + 0]));
  }
  i5998.m_glyphInfoList = i6016
  i5998.m_KerningTable = request.d('TMPro.KerningTable', i5999[35], i5998.m_KerningTable)
  var i6019 = i5999[36]
  var i6018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6019.length; i += 2) {
  request.r(i6019[i + 0], i6019[i + 1], 1, i6018, '')
  }
  i5998.fallbackFontAssets = i6018
  i5998.m_Version = i5999[37]
  i5998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5999[38], i5998.m_FaceInfo)
  request.r(i5999[39], i5999[40], 0, i5998, 'm_Material')
  return i5998
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6020 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6021 = data
  i6020.sourceFontFileName = i6021[0]
  i6020.sourceFontFileGUID = i6021[1]
  i6020.faceIndex = i6021[2]
  i6020.pointSizeSamplingMode = i6021[3]
  i6020.pointSize = i6021[4]
  i6020.padding = i6021[5]
  i6020.paddingMode = i6021[6]
  i6020.packingMode = i6021[7]
  i6020.atlasWidth = i6021[8]
  i6020.atlasHeight = i6021[9]
  i6020.characterSetSelectionMode = i6021[10]
  i6020.characterSequence = i6021[11]
  i6020.referencedFontAssetGUID = i6021[12]
  i6020.referencedTextAssetGUID = i6021[13]
  i6020.fontStyle = i6021[14]
  i6020.fontStyleModifier = i6021[15]
  i6020.renderMode = i6021[16]
  i6020.includeFontFeatures = !!i6021[17]
  return i6020
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6024 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6025 = data
  i6024.m_Index = i6025[0]
  i6024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6025[1], i6024.m_Metrics)
  i6024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6025[2], i6024.m_GlyphRect)
  i6024.m_Scale = i6025[3]
  i6024.m_AtlasIndex = i6025[4]
  i6024.m_ClassDefinitionType = i6025[5]
  return i6024
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6026 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6027 = data
  i6026.m_Width = i6027[0]
  i6026.m_Height = i6027[1]
  i6026.m_HorizontalBearingX = i6027[2]
  i6026.m_HorizontalBearingY = i6027[3]
  i6026.m_HorizontalAdvance = i6027[4]
  return i6026
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6028 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6029 = data
  i6028.m_X = i6029[0]
  i6028.m_Y = i6029[1]
  i6028.m_Width = i6029[2]
  i6028.m_Height = i6029[3]
  return i6028
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6032 = root || request.c( 'TMPro.TMP_Character' )
  var i6033 = data
  i6032.m_ElementType = i6033[0]
  i6032.m_Unicode = i6033[1]
  i6032.m_GlyphIndex = i6033[2]
  i6032.m_Scale = i6033[3]
  return i6032
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6038 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6039 = data
  var i6041 = i6039[0]
  var i6040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6041.length; i += 1) {
    i6040.add(request.d('TMPro.MultipleSubstitutionRecord', i6041[i + 0]));
  }
  i6038.m_MultipleSubstitutionRecords = i6040
  var i6043 = i6039[1]
  var i6042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6043.length; i += 1) {
    i6042.add(request.d('TMPro.LigatureSubstitutionRecord', i6043[i + 0]));
  }
  i6038.m_LigatureSubstitutionRecords = i6042
  var i6045 = i6039[2]
  var i6044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6045.length; i += 1) {
    i6044.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6045[i + 0]));
  }
  i6038.m_GlyphPairAdjustmentRecords = i6044
  var i6047 = i6039[3]
  var i6046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6047.length; i += 1) {
    i6046.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6047[i + 0]));
  }
  i6038.m_MarkToBaseAdjustmentRecords = i6046
  var i6049 = i6039[4]
  var i6048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6049.length; i += 1) {
    i6048.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6049[i + 0]));
  }
  i6038.m_MarkToMarkAdjustmentRecords = i6048
  return i6038
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6052 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6053 = data
  i6052.m_TargetGlyphID = i6053[0]
  i6052.m_SubstituteGlyphIDs = i6053[1]
  return i6052
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6056 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6057 = data
  i6056.m_ComponentGlyphIDs = i6057[0]
  i6056.m_LigatureGlyphID = i6057[1]
  return i6056
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6060 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6061 = data
  i6060.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6061[0], i6060.m_FirstAdjustmentRecord)
  i6060.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6061[1], i6060.m_SecondAdjustmentRecord)
  i6060.m_FeatureLookupFlags = i6061[2]
  return i6060
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i6064 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i6065 = data
  i6064.m_BaseGlyphID = i6065[0]
  i6064.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6065[1], i6064.m_BaseGlyphAnchorPoint)
  i6064.m_MarkGlyphID = i6065[2]
  i6064.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6065[3], i6064.m_MarkPositionAdjustment)
  return i6064
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i6068 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i6069 = data
  i6068.m_BaseMarkGlyphID = i6069[0]
  i6068.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6069[1], i6068.m_BaseMarkGlyphAnchorPoint)
  i6068.m_CombiningMarkGlyphID = i6069[2]
  i6068.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6069[3], i6068.m_CombiningMarkPositionAdjustment)
  return i6068
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6074 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6075 = data
  request.r(i6075[0], i6075[1], 0, i6074, 'regularTypeface')
  request.r(i6075[2], i6075[3], 0, i6074, 'italicTypeface')
  return i6074
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6076 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6077 = data
  i6076.Name = i6077[0]
  i6076.PointSize = i6077[1]
  i6076.Scale = i6077[2]
  i6076.CharacterCount = i6077[3]
  i6076.LineHeight = i6077[4]
  i6076.Baseline = i6077[5]
  i6076.Ascender = i6077[6]
  i6076.CapHeight = i6077[7]
  i6076.Descender = i6077[8]
  i6076.CenterLine = i6077[9]
  i6076.SuperscriptOffset = i6077[10]
  i6076.SubscriptOffset = i6077[11]
  i6076.SubSize = i6077[12]
  i6076.Underline = i6077[13]
  i6076.UnderlineThickness = i6077[14]
  i6076.strikethrough = i6077[15]
  i6076.strikethroughThickness = i6077[16]
  i6076.TabWidth = i6077[17]
  i6076.Padding = i6077[18]
  i6076.AtlasWidth = i6077[19]
  i6076.AtlasHeight = i6077[20]
  return i6076
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6080 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6081 = data
  i6080.id = i6081[0]
  i6080.x = i6081[1]
  i6080.y = i6081[2]
  i6080.width = i6081[3]
  i6080.height = i6081[4]
  i6080.xOffset = i6081[5]
  i6080.yOffset = i6081[6]
  i6080.xAdvance = i6081[7]
  i6080.scale = i6081[8]
  return i6080
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6082 = root || request.c( 'TMPro.KerningTable' )
  var i6083 = data
  var i6085 = i6083[0]
  var i6084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6085.length; i += 1) {
    i6084.add(request.d('TMPro.KerningPair', i6085[i + 0]));
  }
  i6082.kerningPairs = i6084
  return i6082
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6088 = root || request.c( 'TMPro.KerningPair' )
  var i6089 = data
  i6088.xOffset = i6089[0]
  i6088.m_FirstGlyph = i6089[1]
  i6088.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6089[2], i6088.m_FirstGlyphAdjustments)
  i6088.m_SecondGlyph = i6089[3]
  i6088.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6089[4], i6088.m_SecondGlyphAdjustments)
  i6088.m_IgnoreSpacingAdjustments = !!i6089[5]
  return i6088
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6090 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6091 = data
  i6090.m_FaceIndex = i6091[0]
  i6090.m_FamilyName = i6091[1]
  i6090.m_StyleName = i6091[2]
  i6090.m_PointSize = i6091[3]
  i6090.m_Scale = i6091[4]
  i6090.m_UnitsPerEM = i6091[5]
  i6090.m_LineHeight = i6091[6]
  i6090.m_AscentLine = i6091[7]
  i6090.m_CapLine = i6091[8]
  i6090.m_MeanLine = i6091[9]
  i6090.m_Baseline = i6091[10]
  i6090.m_DescentLine = i6091[11]
  i6090.m_SuperscriptOffset = i6091[12]
  i6090.m_SuperscriptSize = i6091[13]
  i6090.m_SubscriptOffset = i6091[14]
  i6090.m_SubscriptSize = i6091[15]
  i6090.m_UnderlineOffset = i6091[16]
  i6090.m_UnderlineThickness = i6091[17]
  i6090.m_StrikethroughOffset = i6091[18]
  i6090.m_StrikethroughThickness = i6091[19]
  i6090.m_TabWidth = i6091[20]
  return i6090
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6092 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6093 = data
  var i6095 = i6093[0]
  var i6094 = []
  for(var i = 0; i < i6095.length; i += 2) {
  request.r(i6095[i + 0], i6095[i + 1], 2, i6094, '')
  }
  i6092.atlasAssets = i6094
  i6092.scale = i6093[1]
  request.r(i6093[2], i6093[3], 0, i6092, 'skeletonJSON')
  i6092.isUpgradingBlendModeMaterials = !!i6093[4]
  i6092.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6093[5], i6092.blendModeMaterials)
  var i6097 = i6093[6]
  var i6096 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6097.length; i += 2) {
  request.r(i6097[i + 0], i6097[i + 1], 1, i6096, '')
  }
  i6092.skeletonDataModifiers = i6096
  var i6099 = i6093[7]
  var i6098 = []
  for(var i = 0; i < i6099.length; i += 1) {
    i6098.push( i6099[i + 0] );
  }
  i6092.fromAnimation = i6098
  var i6101 = i6093[8]
  var i6100 = []
  for(var i = 0; i < i6101.length; i += 1) {
    i6100.push( i6101[i + 0] );
  }
  i6092.toAnimation = i6100
  i6092.duration = i6093[9]
  i6092.defaultMix = i6093[10]
  request.r(i6093[11], i6093[12], 0, i6092, 'controller')
  return i6092
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6104 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6105 = data
  i6104.applyAdditiveMaterial = !!i6105[0]
  var i6107 = i6105[1]
  var i6106 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6107.length; i += 1) {
    i6106.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6107[i + 0]));
  }
  i6104.additiveMaterials = i6106
  var i6109 = i6105[2]
  var i6108 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6109.length; i += 1) {
    i6108.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6109[i + 0]));
  }
  i6104.multiplyMaterials = i6108
  var i6111 = i6105[3]
  var i6110 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6111.length; i += 1) {
    i6110.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6111[i + 0]));
  }
  i6104.screenMaterials = i6110
  i6104.requiresBlendModeMaterials = !!i6105[4]
  return i6104
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6114 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6115 = data
  i6114.pageName = i6115[0]
  request.r(i6115[1], i6115[2], 0, i6114, 'material')
  return i6114
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6118 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6119 = data
  request.r(i6119[0], i6119[1], 0, i6118, 'atlasFile')
  var i6121 = i6119[2]
  var i6120 = []
  for(var i = 0; i < i6121.length; i += 2) {
  request.r(i6121[i + 0], i6121[i + 1], 2, i6120, '')
  }
  i6118.materials = i6120
  return i6118
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6122 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6123 = data
  i6122.useSafeMode = !!i6123[0]
  i6122.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6123[1], i6122.safeModeOptions)
  i6122.timeScale = i6123[2]
  i6122.unscaledTimeScale = i6123[3]
  i6122.useSmoothDeltaTime = !!i6123[4]
  i6122.maxSmoothUnscaledTime = i6123[5]
  i6122.rewindCallbackMode = i6123[6]
  i6122.showUnityEditorReport = !!i6123[7]
  i6122.logBehaviour = i6123[8]
  i6122.drawGizmos = !!i6123[9]
  i6122.defaultRecyclable = !!i6123[10]
  i6122.defaultAutoPlay = i6123[11]
  i6122.defaultUpdateType = i6123[12]
  i6122.defaultTimeScaleIndependent = !!i6123[13]
  i6122.defaultEaseType = i6123[14]
  i6122.defaultEaseOvershootOrAmplitude = i6123[15]
  i6122.defaultEasePeriod = i6123[16]
  i6122.defaultAutoKill = !!i6123[17]
  i6122.defaultLoopType = i6123[18]
  i6122.debugMode = !!i6123[19]
  i6122.debugStoreTargetId = !!i6123[20]
  i6122.showPreviewPanel = !!i6123[21]
  i6122.storeSettingsLocation = i6123[22]
  i6122.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6123[23], i6122.modules)
  i6122.createASMDEF = !!i6123[24]
  i6122.showPlayingTweens = !!i6123[25]
  i6122.showPausedTweens = !!i6123[26]
  return i6122
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6124 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6125 = data
  i6124.logBehaviour = i6125[0]
  i6124.nestedTweenFailureBehaviour = i6125[1]
  return i6124
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6126 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6127 = data
  i6126.showPanel = !!i6127[0]
  i6126.audioEnabled = !!i6127[1]
  i6126.physicsEnabled = !!i6127[2]
  i6126.physics2DEnabled = !!i6127[3]
  i6126.spriteEnabled = !!i6127[4]
  i6126.uiEnabled = !!i6127[5]
  i6126.uiToolkitEnabled = !!i6127[6]
  i6126.textMeshProEnabled = !!i6127[7]
  i6126.tk2DEnabled = !!i6127[8]
  i6126.deAudioEnabled = !!i6127[9]
  i6126.deUnityExtendedEnabled = !!i6127[10]
  i6126.epoOutlineEnabled = !!i6127[11]
  return i6126
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6128 = root || request.c( 'TMPro.TMP_Settings' )
  var i6129 = data
  i6128.assetVersion = i6129[0]
  i6128.m_TextWrappingMode = i6129[1]
  i6128.m_enableKerning = !!i6129[2]
  var i6131 = i6129[3]
  var i6130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6131.length; i += 1) {
    i6130.add(i6131[i + 0]);
  }
  i6128.m_ActiveFontFeatures = i6130
  i6128.m_enableExtraPadding = !!i6129[4]
  i6128.m_enableTintAllSprites = !!i6129[5]
  i6128.m_enableParseEscapeCharacters = !!i6129[6]
  i6128.m_EnableRaycastTarget = !!i6129[7]
  i6128.m_GetFontFeaturesAtRuntime = !!i6129[8]
  i6128.m_missingGlyphCharacter = i6129[9]
  i6128.m_ClearDynamicDataOnBuild = !!i6129[10]
  i6128.m_warningsDisabled = !!i6129[11]
  request.r(i6129[12], i6129[13], 0, i6128, 'm_defaultFontAsset')
  i6128.m_defaultFontAssetPath = i6129[14]
  i6128.m_defaultFontSize = i6129[15]
  i6128.m_defaultAutoSizeMinRatio = i6129[16]
  i6128.m_defaultAutoSizeMaxRatio = i6129[17]
  i6128.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6129[18], i6129[19] )
  i6128.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6129[20], i6129[21] )
  i6128.m_autoSizeTextContainer = !!i6129[22]
  i6128.m_IsTextObjectScaleStatic = !!i6129[23]
  var i6133 = i6129[24]
  var i6132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6133.length; i += 2) {
  request.r(i6133[i + 0], i6133[i + 1], 1, i6132, '')
  }
  i6128.m_fallbackFontAssets = i6132
  i6128.m_matchMaterialPreset = !!i6129[25]
  i6128.m_HideSubTextObjects = !!i6129[26]
  request.r(i6129[27], i6129[28], 0, i6128, 'm_defaultSpriteAsset')
  i6128.m_defaultSpriteAssetPath = i6129[29]
  i6128.m_enableEmojiSupport = !!i6129[30]
  i6128.m_MissingCharacterSpriteUnicode = i6129[31]
  var i6135 = i6129[32]
  var i6134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6135.length; i += 2) {
  request.r(i6135[i + 0], i6135[i + 1], 1, i6134, '')
  }
  i6128.m_EmojiFallbackTextAssets = i6134
  i6128.m_defaultColorGradientPresetsPath = i6129[33]
  request.r(i6129[34], i6129[35], 0, i6128, 'm_defaultStyleSheet')
  i6128.m_StyleSheetsResourcePath = i6129[36]
  request.r(i6129[37], i6129[38], 0, i6128, 'm_leadingCharacters')
  request.r(i6129[39], i6129[40], 0, i6128, 'm_followingCharacters')
  i6128.m_UseModernHangulLineBreakingRules = !!i6129[41]
  return i6128
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6138 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6139 = data
  request.r(i6139[0], i6139[1], 0, i6138, 'spriteSheet')
  var i6141 = i6139[2]
  var i6140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6141.length; i += 1) {
    i6140.add(request.d('TMPro.TMP_Sprite', i6141[i + 0]));
  }
  i6138.spriteInfoList = i6140
  var i6143 = i6139[3]
  var i6142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6143.length; i += 2) {
  request.r(i6143[i + 0], i6143[i + 1], 1, i6142, '')
  }
  i6138.fallbackSpriteAssets = i6142
  var i6145 = i6139[4]
  var i6144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6145.length; i += 1) {
    i6144.add(request.d('TMPro.TMP_SpriteCharacter', i6145[i + 0]));
  }
  i6138.m_SpriteCharacterTable = i6144
  var i6147 = i6139[5]
  var i6146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6147.length; i += 1) {
    i6146.add(request.d('TMPro.TMP_SpriteGlyph', i6147[i + 0]));
  }
  i6138.m_GlyphTable = i6146
  i6138.m_Version = i6139[6]
  i6138.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6139[7], i6138.m_FaceInfo)
  request.r(i6139[8], i6139[9], 0, i6138, 'm_Material')
  return i6138
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6150 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6151 = data
  i6150.name = i6151[0]
  i6150.hashCode = i6151[1]
  i6150.unicode = i6151[2]
  i6150.pivot = new pc.Vec2( i6151[3], i6151[4] )
  request.r(i6151[5], i6151[6], 0, i6150, 'sprite')
  i6150.id = i6151[7]
  i6150.x = i6151[8]
  i6150.y = i6151[9]
  i6150.width = i6151[10]
  i6150.height = i6151[11]
  i6150.xOffset = i6151[12]
  i6150.yOffset = i6151[13]
  i6150.xAdvance = i6151[14]
  i6150.scale = i6151[15]
  return i6150
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6156 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6157 = data
  i6156.m_Name = i6157[0]
  i6156.m_ElementType = i6157[1]
  i6156.m_Unicode = i6157[2]
  i6156.m_GlyphIndex = i6157[3]
  i6156.m_Scale = i6157[4]
  return i6156
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6160 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6161 = data
  request.r(i6161[0], i6161[1], 0, i6160, 'sprite')
  i6160.m_Index = i6161[2]
  i6160.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6161[3], i6160.m_Metrics)
  i6160.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6161[4], i6160.m_GlyphRect)
  i6160.m_Scale = i6161[5]
  i6160.m_AtlasIndex = i6161[6]
  i6160.m_ClassDefinitionType = i6161[7]
  return i6160
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6162 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6163 = data
  var i6165 = i6163[0]
  var i6164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6165.length; i += 1) {
    i6164.add(request.d('TMPro.TMP_Style', i6165[i + 0]));
  }
  i6162.m_StyleList = i6164
  return i6162
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6168 = root || request.c( 'TMPro.TMP_Style' )
  var i6169 = data
  i6168.m_Name = i6169[0]
  i6168.m_HashCode = i6169[1]
  i6168.m_OpeningDefinition = i6169[2]
  i6168.m_ClosingDefinition = i6169[3]
  i6168.m_OpeningTagArray = i6169[4]
  i6168.m_ClosingTagArray = i6169[5]
  return i6168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6171 = data
  var i6173 = i6171[0]
  var i6172 = []
  for(var i = 0; i < i6173.length; i += 1) {
    i6172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6173[i + 0]) );
  }
  i6170.files = i6172
  i6170.componentToPrefabIds = i6171[1]
  return i6170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6177 = data
  i6176.path = i6177[0]
  request.r(i6177[1], i6177[2], 0, i6176, 'unityObject')
  return i6176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6179 = data
  var i6181 = i6179[0]
  var i6180 = []
  for(var i = 0; i < i6181.length; i += 1) {
    i6180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6181[i + 0]) );
  }
  i6178.scriptsExecutionOrder = i6180
  var i6183 = i6179[1]
  var i6182 = []
  for(var i = 0; i < i6183.length; i += 1) {
    i6182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6183[i + 0]) );
  }
  i6178.sortingLayers = i6182
  var i6185 = i6179[2]
  var i6184 = []
  for(var i = 0; i < i6185.length; i += 1) {
    i6184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6185[i + 0]) );
  }
  i6178.cullingLayers = i6184
  i6178.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6179[3], i6178.timeSettings)
  i6178.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6179[4], i6178.physicsSettings)
  i6178.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6179[5], i6178.physics2DSettings)
  i6178.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6179[6], i6178.qualitySettings)
  i6178.enableRealtimeShadows = !!i6179[7]
  i6178.enableAutoInstancing = !!i6179[8]
  i6178.enableStaticBatching = !!i6179[9]
  i6178.enableDynamicBatching = !!i6179[10]
  i6178.lightmapEncodingQuality = i6179[11]
  i6178.desiredColorSpace = i6179[12]
  var i6187 = i6179[13]
  var i6186 = []
  for(var i = 0; i < i6187.length; i += 1) {
    i6186.push( i6187[i + 0] );
  }
  i6178.allTags = i6186
  return i6178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6191 = data
  i6190.name = i6191[0]
  i6190.value = i6191[1]
  return i6190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6195 = data
  i6194.id = i6195[0]
  i6194.name = i6195[1]
  i6194.value = i6195[2]
  return i6194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6199 = data
  i6198.id = i6199[0]
  i6198.name = i6199[1]
  return i6198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6201 = data
  i6200.fixedDeltaTime = i6201[0]
  i6200.maximumDeltaTime = i6201[1]
  i6200.timeScale = i6201[2]
  i6200.maximumParticleTimestep = i6201[3]
  return i6200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6203 = data
  i6202.gravity = new pc.Vec3( i6203[0], i6203[1], i6203[2] )
  i6202.defaultSolverIterations = i6203[3]
  i6202.bounceThreshold = i6203[4]
  i6202.autoSyncTransforms = !!i6203[5]
  i6202.autoSimulation = !!i6203[6]
  var i6205 = i6203[7]
  var i6204 = []
  for(var i = 0; i < i6205.length; i += 1) {
    i6204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6205[i + 0]) );
  }
  i6202.collisionMatrix = i6204
  return i6202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6209 = data
  i6208.enabled = !!i6209[0]
  i6208.layerId = i6209[1]
  i6208.otherLayerId = i6209[2]
  return i6208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6211 = data
  request.r(i6211[0], i6211[1], 0, i6210, 'material')
  i6210.gravity = new pc.Vec2( i6211[2], i6211[3] )
  i6210.positionIterations = i6211[4]
  i6210.velocityIterations = i6211[5]
  i6210.velocityThreshold = i6211[6]
  i6210.maxLinearCorrection = i6211[7]
  i6210.maxAngularCorrection = i6211[8]
  i6210.maxTranslationSpeed = i6211[9]
  i6210.maxRotationSpeed = i6211[10]
  i6210.baumgarteScale = i6211[11]
  i6210.baumgarteTOIScale = i6211[12]
  i6210.timeToSleep = i6211[13]
  i6210.linearSleepTolerance = i6211[14]
  i6210.angularSleepTolerance = i6211[15]
  i6210.defaultContactOffset = i6211[16]
  i6210.autoSimulation = !!i6211[17]
  i6210.queriesHitTriggers = !!i6211[18]
  i6210.queriesStartInColliders = !!i6211[19]
  i6210.callbacksOnDisable = !!i6211[20]
  i6210.reuseCollisionCallbacks = !!i6211[21]
  i6210.autoSyncTransforms = !!i6211[22]
  var i6213 = i6211[23]
  var i6212 = []
  for(var i = 0; i < i6213.length; i += 1) {
    i6212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6213[i + 0]) );
  }
  i6210.collisionMatrix = i6212
  return i6210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6217 = data
  i6216.enabled = !!i6217[0]
  i6216.layerId = i6217[1]
  i6216.otherLayerId = i6217[2]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6219 = data
  var i6221 = i6219[0]
  var i6220 = []
  for(var i = 0; i < i6221.length; i += 1) {
    i6220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6221[i + 0]) );
  }
  i6218.qualityLevels = i6220
  var i6223 = i6219[1]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 1) {
    i6222.push( i6223[i + 0] );
  }
  i6218.names = i6222
  i6218.shadows = i6219[2]
  i6218.anisotropicFiltering = i6219[3]
  i6218.antiAliasing = i6219[4]
  i6218.lodBias = i6219[5]
  i6218.shadowCascades = i6219[6]
  i6218.shadowDistance = i6219[7]
  i6218.shadowmaskMode = i6219[8]
  i6218.shadowProjection = i6219[9]
  i6218.shadowResolution = i6219[10]
  i6218.softParticles = !!i6219[11]
  i6218.softVegetation = !!i6219[12]
  i6218.activeColorSpace = i6219[13]
  i6218.desiredColorSpace = i6219[14]
  i6218.masterTextureLimit = i6219[15]
  i6218.maxQueuedFrames = i6219[16]
  i6218.particleRaycastBudget = i6219[17]
  i6218.pixelLightCount = i6219[18]
  i6218.realtimeReflectionProbes = !!i6219[19]
  i6218.shadowCascade2Split = i6219[20]
  i6218.shadowCascade4Split = new pc.Vec3( i6219[21], i6219[22], i6219[23] )
  i6218.streamingMipmapsActive = !!i6219[24]
  i6218.vSyncCount = i6219[25]
  i6218.asyncUploadBufferSize = i6219[26]
  i6218.asyncUploadTimeSlice = i6219[27]
  i6218.billboardsFaceCameraPosition = !!i6219[28]
  i6218.shadowNearPlaneOffset = i6219[29]
  i6218.streamingMipmapsMemoryBudget = i6219[30]
  i6218.maximumLODLevel = i6219[31]
  i6218.streamingMipmapsAddAllCameras = !!i6219[32]
  i6218.streamingMipmapsMaxLevelReduction = i6219[33]
  i6218.streamingMipmapsRenderersPerFrame = i6219[34]
  i6218.resolutionScalingFixedDPIFactor = i6219[35]
  i6218.streamingMipmapsMaxFileIORequests = i6219[36]
  i6218.currentQualityLevel = i6219[37]
  return i6218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6229 = data
  i6228.weight = i6229[0]
  i6228.vertices = i6229[1]
  i6228.normals = i6229[2]
  i6228.tangents = i6229[3]
  return i6228
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6230 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i6231 = data
  i6230.m_GlyphIndex = i6231[0]
  i6230.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i6231[1], i6230.m_GlyphValueRecord)
  return i6230
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6232 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6233 = data
  i6232.m_XCoordinate = i6233[0]
  i6232.m_YCoordinate = i6233[1]
  return i6232
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6234 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6235 = data
  i6234.m_XPositionAdjustment = i6235[0]
  i6234.m_YPositionAdjustment = i6235[1]
  return i6234
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6236 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6237 = data
  i6236.xPlacement = i6237[0]
  i6236.yPlacement = i6237[1]
  i6236.xAdvance = i6237[2]
  i6236.yAdvance = i6237[3]
  return i6236
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i6238 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i6239 = data
  i6238.m_XPlacement = i6239[0]
  i6238.m_YPlacement = i6239[1]
  i6238.m_XAdvance = i6239[2]
  i6238.m_YAdvance = i6239[3]
  return i6238
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

Deserializers.buildID = "7bd0c1bf-e3d5-4b62-a6ba-69e8ac7e0291";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

