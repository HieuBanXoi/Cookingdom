var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6444 = root || request.c( 'UnityEngine.JointSpring' )
  var i6445 = data
  i6444.spring = i6445[0]
  i6444.damper = i6445[1]
  i6444.targetPosition = i6445[2]
  return i6444
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6446 = root || request.c( 'UnityEngine.JointMotor' )
  var i6447 = data
  i6446.m_TargetVelocity = i6447[0]
  i6446.m_Force = i6447[1]
  i6446.m_FreeSpin = i6447[2]
  return i6446
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6448 = root || request.c( 'UnityEngine.JointLimits' )
  var i6449 = data
  i6448.m_Min = i6449[0]
  i6448.m_Max = i6449[1]
  i6448.m_Bounciness = i6449[2]
  i6448.m_BounceMinVelocity = i6449[3]
  i6448.m_ContactDistance = i6449[4]
  i6448.minBounce = i6449[5]
  i6448.maxBounce = i6449[6]
  return i6448
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6450 = root || request.c( 'UnityEngine.JointDrive' )
  var i6451 = data
  i6450.m_PositionSpring = i6451[0]
  i6450.m_PositionDamper = i6451[1]
  i6450.m_MaximumForce = i6451[2]
  i6450.m_UseAcceleration = i6451[3]
  return i6450
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6453 = data
  i6452.m_Spring = i6453[0]
  i6452.m_Damper = i6453[1]
  return i6452
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6454 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6455 = data
  i6454.m_Limit = i6455[0]
  i6454.m_Bounciness = i6455[1]
  i6454.m_ContactDistance = i6455[2]
  return i6454
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6457 = data
  i6456.m_ExtremumSlip = i6457[0]
  i6456.m_ExtremumValue = i6457[1]
  i6456.m_AsymptoteSlip = i6457[2]
  i6456.m_AsymptoteValue = i6457[3]
  i6456.m_Stiffness = i6457[4]
  return i6456
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6459 = data
  i6458.m_LowerAngle = i6459[0]
  i6458.m_UpperAngle = i6459[1]
  return i6458
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6460 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6461 = data
  i6460.m_MotorSpeed = i6461[0]
  i6460.m_MaximumMotorTorque = i6461[1]
  return i6460
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6462 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6463 = data
  i6462.m_DampingRatio = i6463[0]
  i6462.m_Frequency = i6463[1]
  i6462.m_Angle = i6463[2]
  return i6462
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6464 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6465 = data
  i6464.m_LowerTranslation = i6465[0]
  i6464.m_UpperTranslation = i6465[1]
  return i6464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6466 = root || new pc.UnityMaterial()
  var i6467 = data
  i6466.name = i6467[0]
  request.r(i6467[1], i6467[2], 0, i6466, 'shader')
  i6466.renderQueue = i6467[3]
  i6466.enableInstancing = !!i6467[4]
  var i6469 = i6467[5]
  var i6468 = []
  for(var i = 0; i < i6469.length; i += 1) {
    i6468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6469[i + 0]) );
  }
  i6466.floatParameters = i6468
  var i6471 = i6467[6]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6471[i + 0]) );
  }
  i6466.colorParameters = i6470
  var i6473 = i6467[7]
  var i6472 = []
  for(var i = 0; i < i6473.length; i += 1) {
    i6472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6473[i + 0]) );
  }
  i6466.vectorParameters = i6472
  var i6475 = i6467[8]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 1) {
    i6474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6475[i + 0]) );
  }
  i6466.textureParameters = i6474
  var i6477 = i6467[9]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6477[i + 0]) );
  }
  i6466.materialFlags = i6476
  return i6466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6481 = data
  i6480.name = i6481[0]
  i6480.value = i6481[1]
  return i6480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6485 = data
  i6484.name = i6485[0]
  i6484.value = new pc.Color(i6485[1], i6485[2], i6485[3], i6485[4])
  return i6484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6489 = data
  i6488.name = i6489[0]
  i6488.value = new pc.Vec4( i6489[1], i6489[2], i6489[3], i6489[4] )
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6493 = data
  i6492.name = i6493[0]
  request.r(i6493[1], i6493[2], 0, i6492, 'value')
  return i6492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6497 = data
  i6496.name = i6497[0]
  i6496.enabled = !!i6497[1]
  return i6496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6499 = data
  i6498.name = i6499[0]
  i6498.width = i6499[1]
  i6498.height = i6499[2]
  i6498.mipmapCount = i6499[3]
  i6498.anisoLevel = i6499[4]
  i6498.filterMode = i6499[5]
  i6498.hdr = !!i6499[6]
  i6498.format = i6499[7]
  i6498.wrapMode = i6499[8]
  i6498.alphaIsTransparency = !!i6499[9]
  i6498.alphaSource = i6499[10]
  i6498.graphicsFormat = i6499[11]
  i6498.sRGBTexture = !!i6499[12]
  i6498.desiredColorSpace = i6499[13]
  i6498.wrapU = i6499[14]
  i6498.wrapV = i6499[15]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6501 = data
  i6500.position = new pc.Vec3( i6501[0], i6501[1], i6501[2] )
  i6500.scale = new pc.Vec3( i6501[3], i6501[4], i6501[5] )
  i6500.rotation = new pc.Quat(i6501[6], i6501[7], i6501[8], i6501[9])
  return i6500
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i6502 = root || request.c( 'HeartEffect' )
  var i6503 = data
  i6502.defaultLifeTime = i6503[0]
  request.r(i6503[1], i6503[2], 0, i6502, 'tf')
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6505 = data
  i6504.color = new pc.Color(i6505[0], i6505[1], i6505[2], i6505[3])
  request.r(i6505[4], i6505[5], 0, i6504, 'sprite')
  i6504.flipX = !!i6505[6]
  i6504.flipY = !!i6505[7]
  i6504.drawMode = i6505[8]
  i6504.size = new pc.Vec2( i6505[9], i6505[10] )
  i6504.tileMode = i6505[11]
  i6504.adaptiveModeThreshold = i6505[12]
  i6504.maskInteraction = i6505[13]
  i6504.spriteSortPoint = i6505[14]
  i6504.enabled = !!i6505[15]
  request.r(i6505[16], i6505[17], 0, i6504, 'sharedMaterial')
  var i6507 = i6505[18]
  var i6506 = []
  for(var i = 0; i < i6507.length; i += 2) {
  request.r(i6507[i + 0], i6507[i + 1], 2, i6506, '')
  }
  i6504.sharedMaterials = i6506
  i6504.receiveShadows = !!i6505[19]
  i6504.shadowCastingMode = i6505[20]
  i6504.sortingLayerID = i6505[21]
  i6504.sortingOrder = i6505[22]
  i6504.lightmapIndex = i6505[23]
  i6504.lightmapSceneIndex = i6505[24]
  i6504.lightmapScaleOffset = new pc.Vec4( i6505[25], i6505[26], i6505[27], i6505[28] )
  i6504.lightProbeUsage = i6505[29]
  i6504.reflectionProbeUsage = i6505[30]
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6511 = data
  i6510.name = i6511[0]
  i6510.tagId = i6511[1]
  i6510.enabled = !!i6511[2]
  i6510.isStatic = !!i6511[3]
  i6510.layer = i6511[4]
  return i6510
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i6512 = root || request.c( 'HeartBreakEffect' )
  var i6513 = data
  i6512.defaultLifeTime = i6513[0]
  request.r(i6513[1], i6513[2], 0, i6512, 'tf')
  return i6512
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i6514 = root || request.c( 'BlinkEffect' )
  var i6515 = data
  request.r(i6515[0], i6515[1], 0, i6514, 'tf')
  return i6514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6517 = data
  request.r(i6517[0], i6517[1], 0, i6516, 'mesh')
  i6516.meshCount = i6517[2]
  i6516.activeVertexStreamsCount = i6517[3]
  i6516.alignment = i6517[4]
  i6516.renderMode = i6517[5]
  i6516.sortMode = i6517[6]
  i6516.lengthScale = i6517[7]
  i6516.velocityScale = i6517[8]
  i6516.cameraVelocityScale = i6517[9]
  i6516.normalDirection = i6517[10]
  i6516.sortingFudge = i6517[11]
  i6516.minParticleSize = i6517[12]
  i6516.maxParticleSize = i6517[13]
  i6516.pivot = new pc.Vec3( i6517[14], i6517[15], i6517[16] )
  request.r(i6517[17], i6517[18], 0, i6516, 'trailMaterial')
  i6516.applyActiveColorSpace = !!i6517[19]
  i6516.enabled = !!i6517[20]
  request.r(i6517[21], i6517[22], 0, i6516, 'sharedMaterial')
  var i6519 = i6517[23]
  var i6518 = []
  for(var i = 0; i < i6519.length; i += 2) {
  request.r(i6519[i + 0], i6519[i + 1], 2, i6518, '')
  }
  i6516.sharedMaterials = i6518
  i6516.receiveShadows = !!i6517[24]
  i6516.shadowCastingMode = i6517[25]
  i6516.sortingLayerID = i6517[26]
  i6516.sortingOrder = i6517[27]
  i6516.lightmapIndex = i6517[28]
  i6516.lightmapSceneIndex = i6517[29]
  i6516.lightmapScaleOffset = new pc.Vec4( i6517[30], i6517[31], i6517[32], i6517[33] )
  i6516.lightProbeUsage = i6517[34]
  i6516.reflectionProbeUsage = i6517[35]
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6521 = data
  i6520.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6521[0], i6520.main)
  i6520.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6521[1], i6520.colorBySpeed)
  i6520.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6521[2], i6520.colorOverLifetime)
  i6520.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6521[3], i6520.emission)
  i6520.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6521[4], i6520.rotationBySpeed)
  i6520.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6521[5], i6520.rotationOverLifetime)
  i6520.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6521[6], i6520.shape)
  i6520.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6521[7], i6520.sizeBySpeed)
  i6520.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6521[8], i6520.sizeOverLifetime)
  i6520.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6521[9], i6520.textureSheetAnimation)
  i6520.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6521[10], i6520.velocityOverLifetime)
  i6520.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6521[11], i6520.noise)
  i6520.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6521[12], i6520.inheritVelocity)
  i6520.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6521[13], i6520.forceOverLifetime)
  i6520.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6521[14], i6520.limitVelocityOverLifetime)
  i6520.useAutoRandomSeed = !!i6521[15]
  i6520.randomSeed = i6521[16]
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6522 = root || new pc.ParticleSystemMain()
  var i6523 = data
  i6522.duration = i6523[0]
  i6522.loop = !!i6523[1]
  i6522.prewarm = !!i6523[2]
  i6522.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[3], i6522.startDelay)
  i6522.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[4], i6522.startLifetime)
  i6522.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[5], i6522.startSpeed)
  i6522.startSize3D = !!i6523[6]
  i6522.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[7], i6522.startSizeX)
  i6522.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[8], i6522.startSizeY)
  i6522.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[9], i6522.startSizeZ)
  i6522.startRotation3D = !!i6523[10]
  i6522.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[11], i6522.startRotationX)
  i6522.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[12], i6522.startRotationY)
  i6522.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[13], i6522.startRotationZ)
  i6522.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6523[14], i6522.startColor)
  i6522.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[15], i6522.gravityModifier)
  i6522.simulationSpace = i6523[16]
  request.r(i6523[17], i6523[18], 0, i6522, 'customSimulationSpace')
  i6522.simulationSpeed = i6523[19]
  i6522.useUnscaledTime = !!i6523[20]
  i6522.scalingMode = i6523[21]
  i6522.playOnAwake = !!i6523[22]
  i6522.maxParticles = i6523[23]
  i6522.emitterVelocityMode = i6523[24]
  i6522.stopAction = i6523[25]
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6524 = root || new pc.MinMaxCurve()
  var i6525 = data
  i6524.mode = i6525[0]
  i6524.curveMin = new pc.AnimationCurve( { keys_flow: i6525[1] } )
  i6524.curveMax = new pc.AnimationCurve( { keys_flow: i6525[2] } )
  i6524.curveMultiplier = i6525[3]
  i6524.constantMin = i6525[4]
  i6524.constantMax = i6525[5]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6526 = root || new pc.MinMaxGradient()
  var i6527 = data
  i6526.mode = i6527[0]
  i6526.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6527[1], i6526.gradientMin)
  i6526.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6527[2], i6526.gradientMax)
  i6526.colorMin = new pc.Color(i6527[3], i6527[4], i6527[5], i6527[6])
  i6526.colorMax = new pc.Color(i6527[7], i6527[8], i6527[9], i6527[10])
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6529 = data
  i6528.mode = i6529[0]
  var i6531 = i6529[1]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6531[i + 0]) );
  }
  i6528.colorKeys = i6530
  var i6533 = i6529[2]
  var i6532 = []
  for(var i = 0; i < i6533.length; i += 1) {
    i6532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6533[i + 0]) );
  }
  i6528.alphaKeys = i6532
  return i6528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6534 = root || new pc.ParticleSystemColorBySpeed()
  var i6535 = data
  i6534.enabled = !!i6535[0]
  i6534.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6535[1], i6534.color)
  i6534.range = new pc.Vec2( i6535[2], i6535[3] )
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6539 = data
  i6538.color = new pc.Color(i6539[0], i6539[1], i6539[2], i6539[3])
  i6538.time = i6539[4]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6543 = data
  i6542.alpha = i6543[0]
  i6542.time = i6543[1]
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6544 = root || new pc.ParticleSystemColorOverLifetime()
  var i6545 = data
  i6544.enabled = !!i6545[0]
  i6544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6545[1], i6544.color)
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6546 = root || new pc.ParticleSystemEmitter()
  var i6547 = data
  i6546.enabled = !!i6547[0]
  i6546.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[1], i6546.rateOverTime)
  i6546.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[2], i6546.rateOverDistance)
  var i6549 = i6547[3]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6549[i + 0]) );
  }
  i6546.bursts = i6548
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6552 = root || new pc.ParticleSystemBurst()
  var i6553 = data
  i6552.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6553[0], i6552.count)
  i6552.cycleCount = i6553[1]
  i6552.minCount = i6553[2]
  i6552.maxCount = i6553[3]
  i6552.repeatInterval = i6553[4]
  i6552.time = i6553[5]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6554 = root || new pc.ParticleSystemRotationBySpeed()
  var i6555 = data
  i6554.enabled = !!i6555[0]
  i6554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[1], i6554.x)
  i6554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[2], i6554.y)
  i6554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[3], i6554.z)
  i6554.separateAxes = !!i6555[4]
  i6554.range = new pc.Vec2( i6555[5], i6555[6] )
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6556 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6557 = data
  i6556.enabled = !!i6557[0]
  i6556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[1], i6556.x)
  i6556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[2], i6556.y)
  i6556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[3], i6556.z)
  i6556.separateAxes = !!i6557[4]
  return i6556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6558 = root || new pc.ParticleSystemShape()
  var i6559 = data
  i6558.enabled = !!i6559[0]
  i6558.shapeType = i6559[1]
  i6558.randomDirectionAmount = i6559[2]
  i6558.sphericalDirectionAmount = i6559[3]
  i6558.randomPositionAmount = i6559[4]
  i6558.alignToDirection = !!i6559[5]
  i6558.radius = i6559[6]
  i6558.radiusMode = i6559[7]
  i6558.radiusSpread = i6559[8]
  i6558.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6559[9], i6558.radiusSpeed)
  i6558.radiusThickness = i6559[10]
  i6558.angle = i6559[11]
  i6558.length = i6559[12]
  i6558.boxThickness = new pc.Vec3( i6559[13], i6559[14], i6559[15] )
  i6558.meshShapeType = i6559[16]
  request.r(i6559[17], i6559[18], 0, i6558, 'mesh')
  request.r(i6559[19], i6559[20], 0, i6558, 'meshRenderer')
  request.r(i6559[21], i6559[22], 0, i6558, 'skinnedMeshRenderer')
  i6558.useMeshMaterialIndex = !!i6559[23]
  i6558.meshMaterialIndex = i6559[24]
  i6558.useMeshColors = !!i6559[25]
  i6558.normalOffset = i6559[26]
  i6558.arc = i6559[27]
  i6558.arcMode = i6559[28]
  i6558.arcSpread = i6559[29]
  i6558.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6559[30], i6558.arcSpeed)
  i6558.donutRadius = i6559[31]
  i6558.position = new pc.Vec3( i6559[32], i6559[33], i6559[34] )
  i6558.rotation = new pc.Vec3( i6559[35], i6559[36], i6559[37] )
  i6558.scale = new pc.Vec3( i6559[38], i6559[39], i6559[40] )
  return i6558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6560 = root || new pc.ParticleSystemSizeBySpeed()
  var i6561 = data
  i6560.enabled = !!i6561[0]
  i6560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[1], i6560.x)
  i6560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[2], i6560.y)
  i6560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[3], i6560.z)
  i6560.separateAxes = !!i6561[4]
  i6560.range = new pc.Vec2( i6561[5], i6561[6] )
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6562 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6563 = data
  i6562.enabled = !!i6563[0]
  i6562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[1], i6562.x)
  i6562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[2], i6562.y)
  i6562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[3], i6562.z)
  i6562.separateAxes = !!i6563[4]
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6564 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6565 = data
  i6564.enabled = !!i6565[0]
  i6564.mode = i6565[1]
  i6564.animation = i6565[2]
  i6564.numTilesX = i6565[3]
  i6564.numTilesY = i6565[4]
  i6564.useRandomRow = !!i6565[5]
  i6564.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6565[6], i6564.frameOverTime)
  i6564.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6565[7], i6564.startFrame)
  i6564.cycleCount = i6565[8]
  i6564.rowIndex = i6565[9]
  i6564.flipU = i6565[10]
  i6564.flipV = i6565[11]
  i6564.spriteCount = i6565[12]
  var i6567 = i6565[13]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 2) {
  request.r(i6567[i + 0], i6567[i + 1], 2, i6566, '')
  }
  i6564.sprites = i6566
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6570 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6571 = data
  i6570.enabled = !!i6571[0]
  i6570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[1], i6570.x)
  i6570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[2], i6570.y)
  i6570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[3], i6570.z)
  i6570.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[4], i6570.radial)
  i6570.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[5], i6570.speedModifier)
  i6570.space = i6571[6]
  i6570.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[7], i6570.orbitalX)
  i6570.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[8], i6570.orbitalY)
  i6570.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[9], i6570.orbitalZ)
  i6570.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[10], i6570.orbitalOffsetX)
  i6570.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[11], i6570.orbitalOffsetY)
  i6570.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[12], i6570.orbitalOffsetZ)
  return i6570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6572 = root || new pc.ParticleSystemNoise()
  var i6573 = data
  i6572.enabled = !!i6573[0]
  i6572.separateAxes = !!i6573[1]
  i6572.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[2], i6572.strengthX)
  i6572.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[3], i6572.strengthY)
  i6572.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[4], i6572.strengthZ)
  i6572.frequency = i6573[5]
  i6572.damping = !!i6573[6]
  i6572.octaveCount = i6573[7]
  i6572.octaveMultiplier = i6573[8]
  i6572.octaveScale = i6573[9]
  i6572.quality = i6573[10]
  i6572.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[11], i6572.scrollSpeed)
  i6572.scrollSpeedMultiplier = i6573[12]
  i6572.remapEnabled = !!i6573[13]
  i6572.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[14], i6572.remapX)
  i6572.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[15], i6572.remapY)
  i6572.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[16], i6572.remapZ)
  i6572.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[17], i6572.positionAmount)
  i6572.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[18], i6572.rotationAmount)
  i6572.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[19], i6572.sizeAmount)
  return i6572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6574 = root || new pc.ParticleSystemInheritVelocity()
  var i6575 = data
  i6574.enabled = !!i6575[0]
  i6574.mode = i6575[1]
  i6574.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6575[2], i6574.curve)
  return i6574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6576 = root || new pc.ParticleSystemForceOverLifetime()
  var i6577 = data
  i6576.enabled = !!i6577[0]
  i6576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[1], i6576.x)
  i6576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[2], i6576.y)
  i6576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[3], i6576.z)
  i6576.space = i6577[4]
  i6576.randomized = !!i6577[5]
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6578 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6579 = data
  i6578.enabled = !!i6579[0]
  i6578.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[1], i6578.limit)
  i6578.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[2], i6578.limitX)
  i6578.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[3], i6578.limitY)
  i6578.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[4], i6578.limitZ)
  i6578.dampen = i6579[5]
  i6578.separateAxes = !!i6579[6]
  i6578.space = i6579[7]
  i6578.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[8], i6578.drag)
  i6578.multiplyDragByParticleSize = !!i6579[9]
  i6578.multiplyDragByParticleVelocity = !!i6579[10]
  return i6578
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i6580 = root || request.c( 'StarExploreFX' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'tf')
  return i6580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6583 = data
  i6582.pivot = new pc.Vec2( i6583[0], i6583[1] )
  i6582.anchorMin = new pc.Vec2( i6583[2], i6583[3] )
  i6582.anchorMax = new pc.Vec2( i6583[4], i6583[5] )
  i6582.sizeDelta = new pc.Vec2( i6583[6], i6583[7] )
  i6582.anchoredPosition3D = new pc.Vec3( i6583[8], i6583[9], i6583[10] )
  i6582.rotation = new pc.Quat(i6583[11], i6583[12], i6583[13], i6583[14])
  i6582.scale = new pc.Vec3( i6583[15], i6583[16], i6583[17] )
  return i6582
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i6584 = root || request.c( 'ClockTimer' )
  var i6585 = data
  request.r(i6585[0], i6585[1], 0, i6584, 'fillImage')
  request.r(i6585[2], i6585[3], 0, i6584, 'tf')
  i6584.spawnZoomDuration = i6585[4]
  i6584.despawnZoomDuration = i6585[5]
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6587 = data
  i6586.cullTransparentMesh = !!i6587[0]
  return i6586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6588 = root || request.c( 'UnityEngine.UI.Image' )
  var i6589 = data
  request.r(i6589[0], i6589[1], 0, i6588, 'm_Sprite')
  i6588.m_Type = i6589[2]
  i6588.m_PreserveAspect = !!i6589[3]
  i6588.m_FillCenter = !!i6589[4]
  i6588.m_FillMethod = i6589[5]
  i6588.m_FillAmount = i6589[6]
  i6588.m_FillClockwise = !!i6589[7]
  i6588.m_FillOrigin = i6589[8]
  i6588.m_UseSpriteMesh = !!i6589[9]
  i6588.m_PixelsPerUnitMultiplier = i6589[10]
  request.r(i6589[11], i6589[12], 0, i6588, 'm_Material')
  i6588.m_Maskable = !!i6589[13]
  i6588.m_Color = new pc.Color(i6589[14], i6589[15], i6589[16], i6589[17])
  i6588.m_RaycastTarget = !!i6589[18]
  i6588.m_RaycastPadding = new pc.Vec4( i6589[19], i6589[20], i6589[21], i6589[22] )
  return i6588
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i6590 = root || request.c( 'WaterSplash' )
  var i6591 = data
  request.r(i6591[0], i6591[1], 0, i6590, 'tf')
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i6593 = data
  i6592.center = new pc.Vec3( i6593[0], i6593[1], i6593[2] )
  i6592.radius = i6593[3]
  i6592.enabled = !!i6593[4]
  i6592.isTrigger = !!i6593[5]
  request.r(i6593[6], i6593[7], 0, i6592, 'material')
  return i6592
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i6594 = root || request.c( 'ItemDraggable' )
  var i6595 = data
  i6594.isDraggable = !!i6595[0]
  request.r(i6595[1], i6595[2], 0, i6594, 'returnTransform')
  i6594.setParentToReturnTransform = !!i6595[3]
  i6594.returnToStartOnDragFailed = !!i6595[4]
  i6594.returnToExactReturnTransformPosition = !!i6595[5]
  i6594.targetItemType = i6595[6]
  request.r(i6595[7], i6595[8], 0, i6594, 'item')
  i6594.checkState = !!i6595[9]
  request.r(i6595[10], i6595[11], 0, i6594, 'shadowObject')
  i6594.playReturnToStartFinishSound = !!i6595[12]
  i6594.returnToStartFinishFxType = i6595[13]
  i6594.spawnBreakHeartOnDropFail = !!i6595[14]
  i6594.playBeginDragSound = !!i6595[15]
  i6594.beginDragFxType = i6595[16]
  i6594.liftOffset = i6595[17]
  i6594.dragScaleMultiplier = i6595[18]
  i6594.dragScaleDuration = i6595[19]
  i6594.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i6595[20], i6594.onBeginDrag)
  i6594.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i6595[21], i6594.onDropSuccess)
  i6594.onDropFail = request.d('UnityEngine.Events.UnityEvent', i6595[22], i6594.onDropFail)
  i6594.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i6595[23], i6594.onReturnToStartComplete)
  return i6594
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6596 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6597 = data
  i6596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6597[0], i6596.m_PersistentCalls)
  return i6596
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6598 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6599 = data
  var i6601 = i6599[0]
  var i6600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.add(request.d('UnityEngine.Events.PersistentCall', i6601[i + 0]));
  }
  i6598.m_Calls = i6600
  return i6598
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6604 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6605 = data
  request.r(i6605[0], i6605[1], 0, i6604, 'm_Target')
  i6604.m_TargetAssemblyTypeName = i6605[2]
  i6604.m_MethodName = i6605[3]
  i6604.m_Mode = i6605[4]
  i6604.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6605[5], i6604.m_Arguments)
  i6604.m_CallState = i6605[6]
  return i6604
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6607 = data
  request.r(i6607[0], i6607[1], 0, i6606, 'm_ObjectArgument')
  i6606.m_ObjectArgumentAssemblyTypeName = i6607[2]
  i6606.m_IntArgument = i6607[3]
  i6606.m_FloatArgument = i6607[4]
  i6606.m_StringArgument = i6607[5]
  i6606.m_BoolArgument = !!i6607[6]
  return i6606
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i6608 = root || request.c( 'ItemMoveToTarget' )
  var i6609 = data
  request.r(i6609[0], i6609[1], 0, i6608, 'defaultTarget')
  i6608.duration = i6609[2]
  i6608.useAnimationCurve = !!i6609[3]
  i6608.moveCurve = new pc.AnimationCurve( { keys_flow: i6609[4] } )
  i6608.easeType = i6609[5]
  i6608.moveType = i6609[6]
  i6608.jumpPower = i6609[7]
  i6608.numJumps = i6609[8]
  i6608.rotate360DuringJump = !!i6609[9]
  i6608.flipRotate = !!i6609[10]
  i6608.angleRotate = i6609[11]
  i6608.scaleOnMove = !!i6609[12]
  i6608.endScaleMultiplier = i6609[13]
  i6608.setParentToTarget = !!i6609[14]
  i6608.onComplete = request.d('UnityEngine.Events.UnityEvent', i6609[15], i6608.onComplete)
  i6608.lockInputWhileMoving = !!i6609[16]
  i6608.resetParentBeforeMove = !!i6609[17]
  return i6608
}

Deserializers["Paper"] = function (request, data, root) {
  var i6610 = root || request.c( 'Paper' )
  var i6611 = data
  i6610.isUse = !!i6611[0]
  request.r(i6611[1], i6611[2], 0, i6610, 'paper')
  request.r(i6611[3], i6611[4], 0, i6610, 'paperTrash')
  request.r(i6611[5], i6611[6], 0, i6610, 'itemDragRaycastTarget')
  request.r(i6611[7], i6611[8], 0, i6610, 'curentCollider')
  i6610.isDone = !!i6611[9]
  i6610.onProcess = !!i6611[10]
  i6610.requireMatchingTargetTypeForHandTut = !!i6611[11]
  request.r(i6611[12], i6611[13], 0, i6610, 'itemDraggable')
  request.r(i6611[14], i6611[15], 0, i6610, 'itemClickable')
  request.r(i6611[16], i6611[17], 0, i6610, 'itemStirring')
  request.r(i6611[18], i6611[19], 0, i6610, 'itemKnifeSpriteMaskCutter')
  request.r(i6611[20], i6611[21], 0, i6610, 'itemSpriteMaskPainter')
  request.r(i6611[22], i6611[23], 0, i6610, 'itemDragSpriteMaskPainter')
  request.r(i6611[24], i6611[25], 0, i6610, 'itemMoveToTarget')
  request.r(i6611[26], i6611[27], 0, i6610, 'animator')
  i6610.itemType = i6611[28]
  request.r(i6611[29], i6611[30], 0, i6610, 'spriteRenderer')
  i6610.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6611[31], i6610.onKnifeIn)
  request.r(i6611[32], i6611[33], 0, i6610, 'knifePos')
  i6610.heartEffectScale = i6611[34]
  i6610.breakHeartEffectScale = i6611[35]
  i6610.blinkEffectScale = i6611[36]
  i6610.mergeEffectScale = i6611[37]
  i6610.playMoveToTargetFinishSound = !!i6611[38]
  i6610.moveToTargetFinishFxType = i6611[39]
  i6610.fxSpawnZPos = i6611[40]
  request.r(i6611[41], i6611[42], 0, i6610, 'tf')
  return i6610
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i6612 = root || request.c( 'ItemDragRaycastTarget' )
  var i6613 = data
  i6612.targetToFind = i6613[0]
  i6612.targetItemTypeWhenHit = i6613[1]
  i6612.targetItemTypeOnDropFail = i6613[2]
  request.r(i6613[3], i6613[4], 0, i6612, 'raycastPoint')
  i6612.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6613[5] )
  i6612.rayDistance = i6613[6]
  i6612.updateMoveDefaultTarget = !!i6613[7]
  i6612.invokeOnlyWhenTargetChanged = !!i6613[8]
  i6612.targetChangeEnabled = !!i6613[9]
  i6612.restoreTargetOnDropFail = !!i6613[10]
  i6612.resetCurrentTargetOnNoHit = !!i6613[11]
  i6612.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i6613[12], i6612.onTargetFound)
  i6612.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i6613[13], i6612.onTargetFoundWithItem)
  return i6612
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i6614 = root || request.c( 'ItemRaycastTargetEvent' )
  var i6615 = data
  i6614.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6615[0], i6614.m_PersistentCalls)
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6617 = data
  request.r(i6617[0], i6617[1], 0, i6616, 'animatorController')
  request.r(i6617[2], i6617[3], 0, i6616, 'avatar')
  i6616.updateMode = i6617[4]
  i6616.hasTransformHierarchy = !!i6617[5]
  i6616.applyRootMotion = !!i6617[6]
  var i6619 = i6617[7]
  var i6618 = []
  for(var i = 0; i < i6619.length; i += 2) {
  request.r(i6619[i + 0], i6619[i + 1], 2, i6618, '')
  }
  i6616.humanBones = i6618
  i6616.enabled = !!i6617[8]
  return i6616
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i6622 = root || request.c( 'ItemSound' )
  var i6623 = data
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6625 = data
  i6624.name = i6625[0]
  i6624.index = i6625[1]
  i6624.startup = !!i6625[2]
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6627 = data
  i6626.planeDistance = i6627[0]
  i6626.referencePixelsPerUnit = i6627[1]
  i6626.isFallbackOverlay = !!i6627[2]
  i6626.renderMode = i6627[3]
  i6626.renderOrder = i6627[4]
  i6626.sortingLayerName = i6627[5]
  i6626.sortingOrder = i6627[6]
  i6626.scaleFactor = i6627[7]
  request.r(i6627[8], i6627[9], 0, i6626, 'worldCamera')
  i6626.overrideSorting = !!i6627[10]
  i6626.pixelPerfect = !!i6627[11]
  i6626.targetDisplay = i6627[12]
  i6626.overridePixelPerfect = !!i6627[13]
  i6626.enabled = !!i6627[14]
  return i6626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6629 = data
  i6628.m_UiScaleMode = i6629[0]
  i6628.m_ReferencePixelsPerUnit = i6629[1]
  i6628.m_ScaleFactor = i6629[2]
  i6628.m_ReferenceResolution = new pc.Vec2( i6629[3], i6629[4] )
  i6628.m_ScreenMatchMode = i6629[5]
  i6628.m_MatchWidthOrHeight = i6629[6]
  i6628.m_PhysicalUnit = i6629[7]
  i6628.m_FallbackScreenDPI = i6629[8]
  i6628.m_DefaultSpriteDPI = i6629[9]
  i6628.m_DynamicPixelsPerUnit = i6629[10]
  i6628.m_PresetInfoIsWorld = !!i6629[11]
  return i6628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6631 = data
  i6630.m_IgnoreReversedGraphics = !!i6631[0]
  i6630.m_BlockingObjects = i6631[1]
  i6630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6631[2] )
  return i6630
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6633 = data
  i6632.m_hasFontAssetChanged = !!i6633[0]
  request.r(i6633[1], i6633[2], 0, i6632, 'm_baseMaterial')
  i6632.m_maskOffset = new pc.Vec4( i6633[3], i6633[4], i6633[5], i6633[6] )
  i6632.m_text = i6633[7]
  i6632.m_isRightToLeft = !!i6633[8]
  request.r(i6633[9], i6633[10], 0, i6632, 'm_fontAsset')
  request.r(i6633[11], i6633[12], 0, i6632, 'm_sharedMaterial')
  var i6635 = i6633[13]
  var i6634 = []
  for(var i = 0; i < i6635.length; i += 2) {
  request.r(i6635[i + 0], i6635[i + 1], 2, i6634, '')
  }
  i6632.m_fontSharedMaterials = i6634
  request.r(i6633[14], i6633[15], 0, i6632, 'm_fontMaterial')
  var i6637 = i6633[16]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 2) {
  request.r(i6637[i + 0], i6637[i + 1], 2, i6636, '')
  }
  i6632.m_fontMaterials = i6636
  i6632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6633[17], i6633[18], i6633[19], i6633[20])
  i6632.m_fontColor = new pc.Color(i6633[21], i6633[22], i6633[23], i6633[24])
  i6632.m_enableVertexGradient = !!i6633[25]
  i6632.m_colorMode = i6633[26]
  i6632.m_fontColorGradient = request.d('TMPro.VertexGradient', i6633[27], i6632.m_fontColorGradient)
  request.r(i6633[28], i6633[29], 0, i6632, 'm_fontColorGradientPreset')
  request.r(i6633[30], i6633[31], 0, i6632, 'm_spriteAsset')
  i6632.m_tintAllSprites = !!i6633[32]
  request.r(i6633[33], i6633[34], 0, i6632, 'm_StyleSheet')
  i6632.m_TextStyleHashCode = i6633[35]
  i6632.m_overrideHtmlColors = !!i6633[36]
  i6632.m_faceColor = UnityEngine.Color32.ConstructColor(i6633[37], i6633[38], i6633[39], i6633[40])
  i6632.m_fontSize = i6633[41]
  i6632.m_fontSizeBase = i6633[42]
  i6632.m_fontWeight = i6633[43]
  i6632.m_enableAutoSizing = !!i6633[44]
  i6632.m_fontSizeMin = i6633[45]
  i6632.m_fontSizeMax = i6633[46]
  i6632.m_fontStyle = i6633[47]
  i6632.m_HorizontalAlignment = i6633[48]
  i6632.m_VerticalAlignment = i6633[49]
  i6632.m_textAlignment = i6633[50]
  i6632.m_characterSpacing = i6633[51]
  i6632.m_wordSpacing = i6633[52]
  i6632.m_lineSpacing = i6633[53]
  i6632.m_lineSpacingMax = i6633[54]
  i6632.m_paragraphSpacing = i6633[55]
  i6632.m_charWidthMaxAdj = i6633[56]
  i6632.m_TextWrappingMode = i6633[57]
  i6632.m_wordWrappingRatios = i6633[58]
  i6632.m_overflowMode = i6633[59]
  request.r(i6633[60], i6633[61], 0, i6632, 'm_linkedTextComponent')
  request.r(i6633[62], i6633[63], 0, i6632, 'parentLinkedComponent')
  i6632.m_enableKerning = !!i6633[64]
  var i6639 = i6633[65]
  var i6638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.add(i6639[i + 0]);
  }
  i6632.m_ActiveFontFeatures = i6638
  i6632.m_enableExtraPadding = !!i6633[66]
  i6632.checkPaddingRequired = !!i6633[67]
  i6632.m_isRichText = !!i6633[68]
  i6632.m_parseCtrlCharacters = !!i6633[69]
  i6632.m_isOrthographic = !!i6633[70]
  i6632.m_isCullingEnabled = !!i6633[71]
  i6632.m_horizontalMapping = i6633[72]
  i6632.m_verticalMapping = i6633[73]
  i6632.m_uvLineOffset = i6633[74]
  i6632.m_geometrySortingOrder = i6633[75]
  i6632.m_IsTextObjectScaleStatic = !!i6633[76]
  i6632.m_VertexBufferAutoSizeReduction = !!i6633[77]
  i6632.m_useMaxVisibleDescender = !!i6633[78]
  i6632.m_pageToDisplay = i6633[79]
  i6632.m_margin = new pc.Vec4( i6633[80], i6633[81], i6633[82], i6633[83] )
  i6632.m_isUsingLegacyAnimationComponent = !!i6633[84]
  i6632.m_isVolumetricText = !!i6633[85]
  request.r(i6633[86], i6633[87], 0, i6632, 'm_Material')
  i6632.m_EmojiFallbackSupport = !!i6633[88]
  i6632.m_Maskable = !!i6633[89]
  i6632.m_Color = new pc.Color(i6633[90], i6633[91], i6633[92], i6633[93])
  i6632.m_RaycastTarget = !!i6633[94]
  i6632.m_RaycastPadding = new pc.Vec4( i6633[95], i6633[96], i6633[97], i6633[98] )
  return i6632
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6640 = root || request.c( 'TMPro.VertexGradient' )
  var i6641 = data
  i6640.topLeft = new pc.Color(i6641[0], i6641[1], i6641[2], i6641[3])
  i6640.topRight = new pc.Color(i6641[4], i6641[5], i6641[6], i6641[7])
  i6640.bottomLeft = new pc.Color(i6641[8], i6641[9], i6641[10], i6641[11])
  i6640.bottomRight = new pc.Color(i6641[12], i6641[13], i6641[14], i6641[15])
  return i6640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6644 = root || request.c( 'UnityEngine.UI.Button' )
  var i6645 = data
  i6644.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6645[0], i6644.m_OnClick)
  i6644.m_Navigation = request.d('UnityEngine.UI.Navigation', i6645[1], i6644.m_Navigation)
  i6644.m_Transition = i6645[2]
  i6644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6645[3], i6644.m_Colors)
  i6644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6645[4], i6644.m_SpriteState)
  i6644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6645[5], i6644.m_AnimationTriggers)
  i6644.m_Interactable = !!i6645[6]
  request.r(i6645[7], i6645[8], 0, i6644, 'm_TargetGraphic')
  return i6644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6647 = data
  i6646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6647[0], i6646.m_PersistentCalls)
  return i6646
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6648 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6649 = data
  i6648.m_Mode = i6649[0]
  i6648.m_WrapAround = !!i6649[1]
  request.r(i6649[2], i6649[3], 0, i6648, 'm_SelectOnUp')
  request.r(i6649[4], i6649[5], 0, i6648, 'm_SelectOnDown')
  request.r(i6649[6], i6649[7], 0, i6648, 'm_SelectOnLeft')
  request.r(i6649[8], i6649[9], 0, i6648, 'm_SelectOnRight')
  return i6648
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6650 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6651 = data
  i6650.m_NormalColor = new pc.Color(i6651[0], i6651[1], i6651[2], i6651[3])
  i6650.m_HighlightedColor = new pc.Color(i6651[4], i6651[5], i6651[6], i6651[7])
  i6650.m_PressedColor = new pc.Color(i6651[8], i6651[9], i6651[10], i6651[11])
  i6650.m_SelectedColor = new pc.Color(i6651[12], i6651[13], i6651[14], i6651[15])
  i6650.m_DisabledColor = new pc.Color(i6651[16], i6651[17], i6651[18], i6651[19])
  i6650.m_ColorMultiplier = i6651[20]
  i6650.m_FadeDuration = i6651[21]
  return i6650
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6652 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6653 = data
  request.r(i6653[0], i6653[1], 0, i6652, 'm_HighlightedSprite')
  request.r(i6653[2], i6653[3], 0, i6652, 'm_PressedSprite')
  request.r(i6653[4], i6653[5], 0, i6652, 'm_SelectedSprite')
  request.r(i6653[6], i6653[7], 0, i6652, 'm_DisabledSprite')
  return i6652
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6654 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6655 = data
  i6654.m_NormalTrigger = i6655[0]
  i6654.m_HighlightedTrigger = i6655[1]
  i6654.m_PressedTrigger = i6655[2]
  i6654.m_SelectedTrigger = i6655[3]
  i6654.m_DisabledTrigger = i6655[4]
  return i6654
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i6656 = root || request.c( 'Ply_Pool' )
  var i6657 = data
  var i6659 = i6657[0]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 1) {
    i6658.push( request.d('Ply_Pool+PoolAmount', i6659[i + 0]) );
  }
  i6656.poolAmounts = i6658
  request.r(i6657[1], i6657[2], 0, i6656, 'poolHolder')
  return i6656
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i6662 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i6663 = data
  i6662.type = i6663[0]
  i6662.amount = i6663[1]
  request.r(i6663[2], i6663[3], 0, i6662, 'gameUnit')
  return i6662
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6664 = root || request.c( 'Ply_SoundManager' )
  var i6665 = data
  var i6667 = i6665[0]
  var i6666 = []
  for(var i = 0; i < i6667.length; i += 1) {
    i6666.push( request.d('Ply_SoundManager+FxAudio', i6667[i + 0]) );
  }
  i6664.fxAudios = i6666
  var i6669 = i6665[1]
  var i6668 = []
  for(var i = 0; i < i6669.length; i += 2) {
  request.r(i6669[i + 0], i6669[i + 1], 2, i6668, '')
  }
  i6664.audioClips = i6668
  request.r(i6665[2], i6665[3], 0, i6664, 'sound')
  return i6664
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i6672 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i6673 = data
  i6672.fxType = i6673[0]
  request.r(i6673[1], i6673[2], 0, i6672, 'audioClip')
  return i6672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6677 = data
  request.r(i6677[0], i6677[1], 0, i6676, 'clip')
  request.r(i6677[2], i6677[3], 0, i6676, 'outputAudioMixerGroup')
  i6676.playOnAwake = !!i6677[4]
  i6676.loop = !!i6677[5]
  i6676.time = i6677[6]
  i6676.volume = i6677[7]
  i6676.pitch = i6677[8]
  i6676.enabled = !!i6677[9]
  return i6676
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6678 = root || request.c( 'GameManager' )
  var i6679 = data
  i6678.isPlaying = !!i6679[0]
  i6678.isTutorial = !!i6679[1]
  i6678.isGotoStore = !!i6679[2]
  i6678.isLoseGame = !!i6679[3]
  i6678.countMove = i6679[4]
  i6678.currentLayer = i6679[5]
  request.r(i6679[6], i6679[7], 0, i6678, 'trashCan')
  request.r(i6679[8], i6679[9], 0, i6678, 'step1')
  request.r(i6679[10], i6679[11], 0, i6678, 'paperBox')
  return i6678
}

Deserializers["UIManager"] = function (request, data, root) {
  var i6680 = root || request.c( 'UIManager' )
  var i6681 = data
  request.r(i6681[0], i6681[1], 0, i6680, 'winUI')
  request.r(i6681[2], i6681[3], 0, i6680, 'loseUI')
  request.r(i6681[4], i6681[5], 0, i6680, 'tutorial')
  request.r(i6681[6], i6681[7], 0, i6680, 'verticalUI')
  request.r(i6681[8], i6681[9], 0, i6680, 'horizontalUI')
  request.r(i6681[10], i6681[11], 0, i6680, 'downloadBtn')
  request.r(i6681[12], i6681[13], 0, i6680, 'horizontalDownloadBtn')
  request.r(i6681[14], i6681[15], 0, i6680, 'textAnim')
  i6680.isGoogleBuild = !!i6681[16]
  i6680.screenWidth = i6681[17]
  i6680.screenHeight = i6681[18]
  i6680.scaleHeightOnWidth = i6681[19]
  i6680.isVertical = !!i6681[20]
  i6680.isScreenVertical = !!i6681[21]
  request.r(i6681[22], i6681[23], 0, i6680, 'cam')
  i6680.verticalUIHeightOnWidthRatio = i6681[24]
  i6680.scaleCameraOnValidate = !!i6681[25]
  i6680.screenVerticalHeightOnWidthRatio = i6681[26]
  i6680.useContinuousScaling = !!i6681[27]
  i6680.baseOrthographicSize = i6681[28]
  i6680.baseAspect = i6681[29]
  i6680.landscapeSizeRatio = i6681[30]
  i6680.defaultPortraitSizeRatio = i6681[31]
  var i6683 = i6681[32]
  var i6682 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i6683.length; i += 1) {
    i6682.add(request.d('ScreenScaleStep', i6683[i + 0]));
  }
  i6680.discreteScaleSteps = i6682
  i6680.usePerspectiveCamera = !!i6681[33]
  request.r(i6681[34], i6681[35], 0, i6680, 'perspectiveFocus')
  i6680.perspectiveFocusDistance = i6681[36]
  i6680.perspectivePadding = i6681[37]
  i6680.fitRendererBounds = !!i6681[38]
  request.r(i6681[39], i6681[40], 0, i6680, 'boundsRoot')
  var i6685 = i6681[41]
  var i6684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i6685.length; i += 2) {
  request.r(i6685[i + 0], i6685[i + 1], 1, i6684, '')
  }
  i6680.boundsRenderers = i6684
  return i6680
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i6688 = root || request.c( 'ScreenScaleStep' )
  var i6689 = data
  i6688.heightOnWidthRatio = i6689[0]
  i6688.orthographicSize = i6689[1]
  return i6688
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6692 = root || request.c( 'InputManager' )
  var i6693 = data
  i6692.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6693[0] )
  i6692.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i6693[1] )
  i6692.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i6693[2] )
  i6692.isDragging = !!i6693[3]
  return i6692
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i6694 = root || request.c( 'HandTutManager' )
  var i6695 = data
  var i6697 = i6695[0]
  var i6696 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i6697.length; i += 2) {
  request.r(i6697[i + 0], i6697[i + 1], 1, i6696, '')
  }
  i6694.items = i6696
  request.r(i6695[1], i6695[2], 0, i6694, 'knife')
  request.r(i6695[3], i6695[4], 0, i6694, 'knife2')
  request.r(i6695[5], i6695[6], 0, i6694, 'handTutObject')
  request.r(i6695[7], i6695[8], 0, i6694, 'tapToCookObject')
  request.r(i6695[9], i6695[10], 0, i6694, 'oilItem')
  request.r(i6695[11], i6695[12], 0, i6694, 'stoveToggleEvent')
  request.r(i6695[13], i6695[14], 0, i6694, 'waterToggleEvent')
  request.r(i6695[15], i6695[16], 0, i6694, 'sinkBlock')
  var i6699 = i6695[17]
  var i6698 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i6699.length; i += 2) {
  request.r(i6699[i + 0], i6699[i + 1], 1, i6698, '')
  }
  i6694.itemsInWater = i6698
  i6694.noDelayItemCount = i6695[18]
  i6694.breakHeartNoDelayThreshold = i6695[19]
  i6694.shortIdleDelay = i6695[20]
  i6694.maxHandTutShowCount = i6695[21]
  i6694.showSinkWaterTutorialOnStart = !!i6695[22]
  i6694.waitForBowlIntro = !!i6695[23]
  i6694.idleDelay = i6695[24]
  i6694.firstHandTutDelay = i6695[25]
  i6694.phaseHandTutDelay = i6695[26]
  i6694.moveDuration = i6695[27]
  i6694.dragFadeDuration = i6695[28]
  i6694.clickScaleDuration = i6695[29]
  i6694.waitAtEndDuration = i6695[30]
  i6694.handZPosition = i6695[31]
  i6694.clickScaleMultiplier = i6695[32]
  i6694.moveEase = i6695[33]
  return i6694
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i6704 = root || request.c( 'SortChildByZPos' )
  var i6705 = data
  request.r(i6705[0], i6705[1], 0, i6704, 'transformToSort')
  var i6707 = i6705[2]
  var i6706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6707.length; i += 2) {
  request.r(i6707[i + 0], i6707[i + 1], 1, i6706, '')
  }
  i6704.childrenToSort = i6706
  i6704.zOffset = i6705[3]
  i6704.baseZ = i6705[4]
  return i6704
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i6710 = root || request.c( 'PhaseManager' )
  var i6711 = data
  var i6713 = i6711[0]
  var i6712 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.add(request.d('PhaseData', i6713[i + 0]));
  }
  i6710.phases = i6712
  i6710.transitionType = i6711[1]
  i6710.transitionDuration = i6711[2]
  i6710.delayBeforeNextPhase = i6711[3]
  i6710.offScreenLeftX = i6711[4]
  i6710.offScreenRightX = i6711[5]
  i6710.offScreenBottomY = i6711[6]
  i6710.offScreenTopY = i6711[7]
  i6710.centerScreenX = i6711[8]
  request.r(i6711[9], i6711[10], 0, i6710, 'phaseTransitionObject')
  i6710.phaseTransitionObjectDuration = i6711[11]
  i6710.currentPhaseIndex = i6711[12]
  i6710.currentStepCount = i6711[13]
  i6710.isECPopup = !!i6711[14]
  return i6710
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i6716 = root || request.c( 'PhaseData' )
  var i6717 = data
  request.r(i6717[0], i6717[1], 0, i6716, 'phaseObject')
  i6716.totalSteps = i6717[2]
  i6716.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i6717[3], i6716.onPhaseReady)
  return i6716
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i6718 = root || request.c( 'ItemTypeDoneManager' )
  var i6719 = data
  var i6721 = i6719[0]
  var i6720 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i6721.length; i += 1) {
    i6720.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i6721[i + 0]));
  }
  i6718.itemTypeGroups = i6720
  return i6718
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i6724 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i6725 = data
  i6724.itemType = i6725[0]
  var i6727 = i6725[1]
  var i6726 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i6727.length; i += 2) {
  request.r(i6727[i + 0], i6727[i + 1], 1, i6726, '')
  }
  i6724.items = i6726
  return i6724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6729 = data
  i6728.aspect = i6729[0]
  i6728.orthographic = !!i6729[1]
  i6728.orthographicSize = i6729[2]
  i6728.backgroundColor = new pc.Color(i6729[3], i6729[4], i6729[5], i6729[6])
  i6728.nearClipPlane = i6729[7]
  i6728.farClipPlane = i6729[8]
  i6728.fieldOfView = i6729[9]
  i6728.depth = i6729[10]
  i6728.clearFlags = i6729[11]
  i6728.cullingMask = i6729[12]
  i6728.rect = i6729[13]
  request.r(i6729[14], i6729[15], 0, i6728, 'targetTexture')
  i6728.usePhysicalProperties = !!i6729[16]
  i6728.focalLength = i6729[17]
  i6728.sensorSize = new pc.Vec2( i6729[18], i6729[19] )
  i6728.lensShift = new pc.Vec2( i6729[20], i6729[21] )
  i6728.gateFit = i6729[22]
  i6728.commandBufferCount = i6729[23]
  i6728.cameraType = i6729[24]
  i6728.enabled = !!i6729[25]
  return i6728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6731 = data
  request.r(i6731[0], i6731[1], 0, i6730, 'm_FirstSelected')
  i6730.m_sendNavigationEvents = !!i6731[2]
  i6730.m_DragThreshold = i6731[3]
  return i6730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6733 = data
  i6732.m_HorizontalAxis = i6733[0]
  i6732.m_VerticalAxis = i6733[1]
  i6732.m_SubmitButton = i6733[2]
  i6732.m_CancelButton = i6733[3]
  i6732.m_InputActionsPerSecond = i6733[4]
  i6732.m_RepeatDelay = i6733[5]
  i6732.m_ForceModuleActive = !!i6733[6]
  i6732.m_SendPointerHoverToParent = !!i6733[7]
  return i6732
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i6734 = root || request.c( 'Ply_ToggleEvent' )
  var i6735 = data
  i6734.isOn = !!i6735[0]
  i6734.applyStateOnEnable = !!i6735[1]
  i6734.applyStateOnClick = !!i6735[2]
  request.r(i6735[3], i6735[4], 0, i6734, 'targetObject')
  i6734.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i6735[5], i6734.onTurnOn)
  i6734.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i6735[6], i6734.onTurnOff)
  return i6734
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i6736 = root || request.c( 'SinkBlock' )
  var i6737 = data
  request.r(i6737[0], i6737[1], 0, i6736, 'sink')
  i6736.startsInside = !!i6737[2]
  i6736.insideTargetType = i6737[3]
  request.r(i6737[4], i6737[5], 0, i6736, 'insideDefaultTarget')
  i6736.outsideTargetType = i6737[6]
  request.r(i6737[7], i6737[8], 0, i6736, 'outsideDefaultTarget')
  i6736.isDone = !!i6737[9]
  i6736.onProcess = !!i6737[10]
  i6736.requireMatchingTargetTypeForHandTut = !!i6737[11]
  request.r(i6737[12], i6737[13], 0, i6736, 'itemDraggable')
  request.r(i6737[14], i6737[15], 0, i6736, 'itemClickable')
  request.r(i6737[16], i6737[17], 0, i6736, 'itemStirring')
  request.r(i6737[18], i6737[19], 0, i6736, 'itemKnifeSpriteMaskCutter')
  request.r(i6737[20], i6737[21], 0, i6736, 'itemSpriteMaskPainter')
  request.r(i6737[22], i6737[23], 0, i6736, 'itemDragSpriteMaskPainter')
  request.r(i6737[24], i6737[25], 0, i6736, 'itemMoveToTarget')
  request.r(i6737[26], i6737[27], 0, i6736, 'animator')
  i6736.itemType = i6737[28]
  request.r(i6737[29], i6737[30], 0, i6736, 'spriteRenderer')
  i6736.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6737[31], i6736.onKnifeIn)
  request.r(i6737[32], i6737[33], 0, i6736, 'knifePos')
  i6736.heartEffectScale = i6737[34]
  i6736.breakHeartEffectScale = i6737[35]
  i6736.blinkEffectScale = i6737[36]
  i6736.mergeEffectScale = i6737[37]
  i6736.playMoveToTargetFinishSound = !!i6737[38]
  i6736.moveToTargetFinishFxType = i6737[39]
  i6736.fxSpawnZPos = i6737[40]
  request.r(i6737[41], i6737[42], 0, i6736, 'tf')
  return i6736
}

Deserializers["Sink"] = function (request, data, root) {
  var i6738 = root || request.c( 'Sink' )
  var i6739 = data
  i6738.isClose = !!i6739[0]
  i6738.isWaterDrop = !!i6739[1]
  i6738.isWaterIn = !!i6739[2]
  request.r(i6739[3], i6739[4], 0, i6738, 'waterSplashPos')
  request.r(i6739[5], i6739[6], 0, i6738, 'faucetAnimator')
  request.r(i6739[7], i6739[8], 0, i6738, 'basinAnimator')
  request.r(i6739[9], i6739[10], 0, i6738, 'waterDrop')
  request.r(i6739[11], i6739[12], 0, i6738, 'waterIn')
  request.r(i6739[13], i6739[14], 0, i6738, 'basinWaterRenderer')
  i6738.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i6739[15], i6739[16], i6739[17], i6739[18])
  i6738.fullWaterRect = UnityEngine.Rect.MinMaxRect(i6739[19], i6739[20], i6739[21], i6739[22])
  i6738.waterRiseDuration = i6739[23]
  i6738.waterFallDuration = i6739[24]
  i6738.waterRiseEase = i6739[25]
  i6738.waterFallEase = i6739[26]
  i6738.drawWaterRects = !!i6739[27]
  i6738.emptyRectColor = new pc.Color(i6739[28], i6739[29], i6739[30], i6739[31])
  i6738.fullRectColor = new pc.Color(i6739[32], i6739[33], i6739[34], i6739[35])
  request.r(i6739[36], i6739[37], 0, i6738, 'waterDropTransform')
  i6738.emptyWaterDropPoint = new pc.Vec3( i6739[38], i6739[39], i6739[40] )
  i6738.fullWaterDropPoint = new pc.Vec3( i6739[41], i6739[42], i6739[43] )
  i6738.drawWaterDropPoints = !!i6739[44]
  i6738.waterDropPointRadius = i6739[45]
  i6738.emptyWaterDropPointColor = new pc.Color(i6739[46], i6739[47], i6739[48], i6739[49])
  i6738.fullWaterDropPointColor = new pc.Color(i6739[50], i6739[51], i6739[52], i6739[53])
  var i6741 = i6739[54]
  var i6740 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i6741.length; i += 2) {
  request.r(i6741[i + 0], i6741[i + 1], 1, i6740, '')
  }
  i6738.inWaterItems = i6740
  i6738.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i6739[55], i6738.onWaterIn)
  i6738.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i6739[56], i6738.onNoWaterIn)
  i6738.isDone = !!i6739[57]
  i6738.onProcess = !!i6739[58]
  i6738.requireMatchingTargetTypeForHandTut = !!i6739[59]
  request.r(i6739[60], i6739[61], 0, i6738, 'itemDraggable')
  request.r(i6739[62], i6739[63], 0, i6738, 'itemClickable')
  request.r(i6739[64], i6739[65], 0, i6738, 'itemStirring')
  request.r(i6739[66], i6739[67], 0, i6738, 'itemKnifeSpriteMaskCutter')
  request.r(i6739[68], i6739[69], 0, i6738, 'itemSpriteMaskPainter')
  request.r(i6739[70], i6739[71], 0, i6738, 'itemDragSpriteMaskPainter')
  request.r(i6739[72], i6739[73], 0, i6738, 'itemMoveToTarget')
  request.r(i6739[74], i6739[75], 0, i6738, 'animator')
  i6738.itemType = i6739[76]
  request.r(i6739[77], i6739[78], 0, i6738, 'spriteRenderer')
  i6738.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6739[79], i6738.onKnifeIn)
  request.r(i6739[80], i6739[81], 0, i6738, 'knifePos')
  i6738.heartEffectScale = i6739[82]
  i6738.breakHeartEffectScale = i6739[83]
  i6738.blinkEffectScale = i6739[84]
  i6738.mergeEffectScale = i6739[85]
  i6738.playMoveToTargetFinishSound = !!i6739[86]
  i6738.moveToTargetFinishFxType = i6739[87]
  i6738.fxSpawnZPos = i6739[88]
  request.r(i6739[89], i6739[90], 0, i6738, 'tf')
  i6738.waterState = i6739[91]
  return i6738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6743 = data
  i6742.center = new pc.Vec3( i6743[0], i6743[1], i6743[2] )
  i6742.size = new pc.Vec3( i6743[3], i6743[4], i6743[5] )
  i6742.enabled = !!i6743[6]
  i6742.isTrigger = !!i6743[7]
  request.r(i6743[8], i6743[9], 0, i6742, 'material')
  return i6742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i6744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i6745 = data
  i6744.frontSortingLayerID = i6745[0]
  i6744.frontSortingOrder = i6745[1]
  i6744.backSortingLayerID = i6745[2]
  i6744.backSortingOrder = i6745[3]
  i6744.alphaCutoff = i6745[4]
  request.r(i6745[5], i6745[6], 0, i6744, 'sprite')
  i6744.tileMode = i6745[7]
  i6744.isCustomRangeActive = !!i6745[8]
  i6744.spriteSortPoint = i6745[9]
  i6744.enabled = !!i6745[10]
  request.r(i6745[11], i6745[12], 0, i6744, 'sharedMaterial')
  var i6747 = i6745[13]
  var i6746 = []
  for(var i = 0; i < i6747.length; i += 2) {
  request.r(i6747[i + 0], i6747[i + 1], 2, i6746, '')
  }
  i6744.sharedMaterials = i6746
  i6744.receiveShadows = !!i6745[14]
  i6744.shadowCastingMode = i6745[15]
  i6744.sortingLayerID = i6745[16]
  i6744.sortingOrder = i6745[17]
  i6744.lightmapIndex = i6745[18]
  i6744.lightmapSceneIndex = i6745[19]
  i6744.lightmapScaleOffset = new pc.Vec4( i6745[20], i6745[21], i6745[22], i6745[23] )
  i6744.lightProbeUsage = i6745[24]
  i6744.reflectionProbeUsage = i6745[25]
  return i6744
}

Deserializers["Item"] = function (request, data, root) {
  var i6748 = root || request.c( 'Item' )
  var i6749 = data
  i6748.isDone = !!i6749[0]
  i6748.onProcess = !!i6749[1]
  i6748.requireMatchingTargetTypeForHandTut = !!i6749[2]
  request.r(i6749[3], i6749[4], 0, i6748, 'itemDraggable')
  request.r(i6749[5], i6749[6], 0, i6748, 'itemClickable')
  request.r(i6749[7], i6749[8], 0, i6748, 'itemStirring')
  request.r(i6749[9], i6749[10], 0, i6748, 'itemKnifeSpriteMaskCutter')
  request.r(i6749[11], i6749[12], 0, i6748, 'itemSpriteMaskPainter')
  request.r(i6749[13], i6749[14], 0, i6748, 'itemDragSpriteMaskPainter')
  request.r(i6749[15], i6749[16], 0, i6748, 'itemMoveToTarget')
  request.r(i6749[17], i6749[18], 0, i6748, 'animator')
  i6748.itemType = i6749[19]
  request.r(i6749[20], i6749[21], 0, i6748, 'spriteRenderer')
  i6748.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6749[22], i6748.onKnifeIn)
  request.r(i6749[23], i6749[24], 0, i6748, 'knifePos')
  i6748.heartEffectScale = i6749[25]
  i6748.breakHeartEffectScale = i6749[26]
  i6748.blinkEffectScale = i6749[27]
  i6748.mergeEffectScale = i6749[28]
  i6748.playMoveToTargetFinishSound = !!i6749[29]
  i6748.moveToTargetFinishFxType = i6749[30]
  i6748.fxSpawnZPos = i6749[31]
  request.r(i6749[32], i6749[33], 0, i6748, 'tf')
  return i6748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i6750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i6751 = data
  i6750.center = new pc.Vec3( i6751[0], i6751[1], i6751[2] )
  i6750.radius = i6751[3]
  i6750.height = i6751[4]
  i6750.direction = i6751[5]
  i6750.enabled = !!i6751[6]
  i6750.isTrigger = !!i6751[7]
  request.r(i6751[8], i6751[9], 0, i6750, 'material')
  return i6750
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i6752 = root || request.c( 'CuttingBoard' )
  var i6753 = data
  i6752.punchScale = new pc.Vec3( i6753[0], i6753[1], i6753[2] )
  i6752.punchDuration = i6753[3]
  i6752.isDone = !!i6753[4]
  i6752.onProcess = !!i6753[5]
  i6752.requireMatchingTargetTypeForHandTut = !!i6753[6]
  request.r(i6753[7], i6753[8], 0, i6752, 'itemDraggable')
  request.r(i6753[9], i6753[10], 0, i6752, 'itemClickable')
  request.r(i6753[11], i6753[12], 0, i6752, 'itemStirring')
  request.r(i6753[13], i6753[14], 0, i6752, 'itemKnifeSpriteMaskCutter')
  request.r(i6753[15], i6753[16], 0, i6752, 'itemSpriteMaskPainter')
  request.r(i6753[17], i6753[18], 0, i6752, 'itemDragSpriteMaskPainter')
  request.r(i6753[19], i6753[20], 0, i6752, 'itemMoveToTarget')
  request.r(i6753[21], i6753[22], 0, i6752, 'animator')
  i6752.itemType = i6753[23]
  request.r(i6753[24], i6753[25], 0, i6752, 'spriteRenderer')
  i6752.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6753[26], i6752.onKnifeIn)
  request.r(i6753[27], i6753[28], 0, i6752, 'knifePos')
  i6752.heartEffectScale = i6753[29]
  i6752.breakHeartEffectScale = i6753[30]
  i6752.blinkEffectScale = i6753[31]
  i6752.mergeEffectScale = i6753[32]
  i6752.playMoveToTargetFinishSound = !!i6753[33]
  i6752.moveToTargetFinishFxType = i6753[34]
  i6752.fxSpawnZPos = i6753[35]
  request.r(i6753[36], i6753[37], 0, i6752, 'tf')
  return i6752
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i6754 = root || request.c( 'ItemDragChildRotator' )
  var i6755 = data
  request.r(i6755[0], i6755[1], 0, i6754, 'rotateTarget')
  i6754.dragEulerAngles = new pc.Vec3( i6755[2], i6755[3], i6755[4] )
  i6754.useLocalRotation = !!i6755[5]
  i6754.rotateRelative = !!i6755[6]
  i6754.rotateDuration = i6755[7]
  i6754.rotateEase = i6755[8]
  i6754.rotateMode = i6755[9]
  return i6754
}

Deserializers["Knife"] = function (request, data, root) {
  var i6756 = root || request.c( 'Knife' )
  var i6757 = data
  request.r(i6757[0], i6757[1], 0, i6756, 'knifeIdle')
  request.r(i6757[2], i6757[3], 0, i6756, 'knifeOnDrag')
  i6756.knifeOnDragRotationOffset = new pc.Vec3( i6757[4], i6757[5], i6757[6] )
  i6756.knifeOnDragRotateDuration = i6757[7]
  i6756.knifeOnDragRotateEase = i6757[8]
  i6756.isDone = !!i6757[9]
  i6756.onProcess = !!i6757[10]
  i6756.requireMatchingTargetTypeForHandTut = !!i6757[11]
  request.r(i6757[12], i6757[13], 0, i6756, 'itemDraggable')
  request.r(i6757[14], i6757[15], 0, i6756, 'itemClickable')
  request.r(i6757[16], i6757[17], 0, i6756, 'itemStirring')
  request.r(i6757[18], i6757[19], 0, i6756, 'itemKnifeSpriteMaskCutter')
  request.r(i6757[20], i6757[21], 0, i6756, 'itemSpriteMaskPainter')
  request.r(i6757[22], i6757[23], 0, i6756, 'itemDragSpriteMaskPainter')
  request.r(i6757[24], i6757[25], 0, i6756, 'itemMoveToTarget')
  request.r(i6757[26], i6757[27], 0, i6756, 'animator')
  i6756.itemType = i6757[28]
  request.r(i6757[29], i6757[30], 0, i6756, 'spriteRenderer')
  i6756.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6757[31], i6756.onKnifeIn)
  request.r(i6757[32], i6757[33], 0, i6756, 'knifePos')
  i6756.heartEffectScale = i6757[34]
  i6756.breakHeartEffectScale = i6757[35]
  i6756.blinkEffectScale = i6757[36]
  i6756.mergeEffectScale = i6757[37]
  i6756.playMoveToTargetFinishSound = !!i6757[38]
  i6756.moveToTargetFinishFxType = i6757[39]
  i6756.fxSpawnZPos = i6757[40]
  request.r(i6757[41], i6757[42], 0, i6756, 'tf')
  return i6756
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i6758 = root || request.c( 'ItemClickable' )
  var i6759 = data
  i6758.requiredClicks = i6759[0]
  i6758.infiniteClick = !!i6759[1]
  i6758.canClick = !!i6759[2]
  i6758.disableAfterClick = !!i6759[3]
  i6758.onClick = request.d('UnityEngine.Events.UnityEvent', i6759[4], i6758.onClick)
  var i6761 = i6759[5]
  var i6760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i6761.length; i += 1) {
    i6760.add(request.d('UnityEngine.Events.UnityEvent', i6761[i + 0]));
  }
  i6758.sequentialOnClicks = i6760
  i6758.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i6759[6], i6758.onClickComplete)
  return i6758
}

Deserializers["ItemWithTrash"] = function (request, data, root) {
  var i6764 = root || request.c( 'ItemWithTrash' )
  var i6765 = data
  var i6767 = i6765[0]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 2) {
  request.r(i6767[i + 0], i6767[i + 1], 2, i6766, '')
  }
  i6764.requiredItems = i6766
  request.r(i6765[1], i6765[2], 0, i6764, 'nextItem')
  var i6769 = i6765[3]
  var i6768 = []
  for(var i = 0; i < i6769.length; i += 2) {
  request.r(i6769[i + 0], i6769[i + 1], 2, i6768, '')
  }
  i6764.trashObjects = i6768
  i6764.isTrashItem = !!i6765[4]
  i6764.isDone = !!i6765[5]
  i6764.onProcess = !!i6765[6]
  i6764.requireMatchingTargetTypeForHandTut = !!i6765[7]
  request.r(i6765[8], i6765[9], 0, i6764, 'itemDraggable')
  request.r(i6765[10], i6765[11], 0, i6764, 'itemClickable')
  request.r(i6765[12], i6765[13], 0, i6764, 'itemStirring')
  request.r(i6765[14], i6765[15], 0, i6764, 'itemKnifeSpriteMaskCutter')
  request.r(i6765[16], i6765[17], 0, i6764, 'itemSpriteMaskPainter')
  request.r(i6765[18], i6765[19], 0, i6764, 'itemDragSpriteMaskPainter')
  request.r(i6765[20], i6765[21], 0, i6764, 'itemMoveToTarget')
  request.r(i6765[22], i6765[23], 0, i6764, 'animator')
  i6764.itemType = i6765[24]
  request.r(i6765[25], i6765[26], 0, i6764, 'spriteRenderer')
  i6764.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6765[27], i6764.onKnifeIn)
  request.r(i6765[28], i6765[29], 0, i6764, 'knifePos')
  i6764.heartEffectScale = i6765[30]
  i6764.breakHeartEffectScale = i6765[31]
  i6764.blinkEffectScale = i6765[32]
  i6764.mergeEffectScale = i6765[33]
  i6764.playMoveToTargetFinishSound = !!i6765[34]
  i6764.moveToTargetFinishFxType = i6765[35]
  i6764.fxSpawnZPos = i6765[36]
  request.r(i6765[37], i6765[38], 0, i6764, 'tf')
  return i6764
}

Deserializers["OilFood"] = function (request, data, root) {
  var i6774 = root || request.c( 'OilFood' )
  var i6775 = data
  i6774.isOilOnce = !!i6775[0]
  i6774.isDone = !!i6775[1]
  i6774.onProcess = !!i6775[2]
  i6774.requireMatchingTargetTypeForHandTut = !!i6775[3]
  request.r(i6775[4], i6775[5], 0, i6774, 'itemDraggable')
  request.r(i6775[6], i6775[7], 0, i6774, 'itemClickable')
  request.r(i6775[8], i6775[9], 0, i6774, 'itemStirring')
  request.r(i6775[10], i6775[11], 0, i6774, 'itemKnifeSpriteMaskCutter')
  request.r(i6775[12], i6775[13], 0, i6774, 'itemSpriteMaskPainter')
  request.r(i6775[14], i6775[15], 0, i6774, 'itemDragSpriteMaskPainter')
  request.r(i6775[16], i6775[17], 0, i6774, 'itemMoveToTarget')
  request.r(i6775[18], i6775[19], 0, i6774, 'animator')
  i6774.itemType = i6775[20]
  request.r(i6775[21], i6775[22], 0, i6774, 'spriteRenderer')
  i6774.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6775[23], i6774.onKnifeIn)
  request.r(i6775[24], i6775[25], 0, i6774, 'knifePos')
  i6774.heartEffectScale = i6775[26]
  i6774.breakHeartEffectScale = i6775[27]
  i6774.blinkEffectScale = i6775[28]
  i6774.mergeEffectScale = i6775[29]
  i6774.playMoveToTargetFinishSound = !!i6775[30]
  i6774.moveToTargetFinishFxType = i6775[31]
  i6774.fxSpawnZPos = i6775[32]
  request.r(i6775[33], i6775[34], 0, i6774, 'tf')
  return i6774
}

Deserializers["OilBrush"] = function (request, data, root) {
  var i6776 = root || request.c( 'OilBrush' )
  var i6777 = data
  var i6779 = i6777[0]
  var i6778 = new (System.Collections.Generic.List$1(Bridge.ns('OilFood')))
  for(var i = 0; i < i6779.length; i += 2) {
  request.r(i6779[i + 0], i6779[i + 1], 1, i6778, '')
  }
  i6776.oilFoods = i6778
  i6776.targetToFind = i6777[1]
  i6776.targetItemTypeWhenHit = i6777[2]
  i6776.targetItemTypeOnDropFail = i6777[3]
  request.r(i6777[4], i6777[5], 0, i6776, 'raycastPoint')
  i6776.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6777[6] )
  i6776.rayDistance = i6777[7]
  i6776.updateMoveDefaultTarget = !!i6777[8]
  i6776.invokeOnlyWhenTargetChanged = !!i6777[9]
  i6776.targetChangeEnabled = !!i6777[10]
  i6776.restoreTargetOnDropFail = !!i6777[11]
  i6776.resetCurrentTargetOnNoHit = !!i6777[12]
  i6776.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i6777[13], i6776.onTargetFound)
  i6776.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i6777[14], i6776.onTargetFoundWithItem)
  return i6776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6783 = data
  i6782.ambientIntensity = i6783[0]
  i6782.reflectionIntensity = i6783[1]
  i6782.ambientMode = i6783[2]
  i6782.ambientLight = new pc.Color(i6783[3], i6783[4], i6783[5], i6783[6])
  i6782.ambientSkyColor = new pc.Color(i6783[7], i6783[8], i6783[9], i6783[10])
  i6782.ambientGroundColor = new pc.Color(i6783[11], i6783[12], i6783[13], i6783[14])
  i6782.ambientEquatorColor = new pc.Color(i6783[15], i6783[16], i6783[17], i6783[18])
  i6782.fogColor = new pc.Color(i6783[19], i6783[20], i6783[21], i6783[22])
  i6782.fogEndDistance = i6783[23]
  i6782.fogStartDistance = i6783[24]
  i6782.fogDensity = i6783[25]
  i6782.fog = !!i6783[26]
  request.r(i6783[27], i6783[28], 0, i6782, 'skybox')
  i6782.fogMode = i6783[29]
  var i6785 = i6783[30]
  var i6784 = []
  for(var i = 0; i < i6785.length; i += 1) {
    i6784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6785[i + 0]) );
  }
  i6782.lightmaps = i6784
  i6782.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6783[31], i6782.lightProbes)
  i6782.lightmapsMode = i6783[32]
  i6782.mixedBakeMode = i6783[33]
  i6782.environmentLightingMode = i6783[34]
  i6782.ambientProbe = new pc.SphericalHarmonicsL2(i6783[35])
  i6782.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6783[36])
  i6782.useReferenceAmbientProbe = !!i6783[37]
  request.r(i6783[38], i6783[39], 0, i6782, 'customReflection')
  request.r(i6783[40], i6783[41], 0, i6782, 'defaultReflection')
  i6782.defaultReflectionMode = i6783[42]
  i6782.defaultReflectionResolution = i6783[43]
  i6782.sunLightObjectId = i6783[44]
  i6782.pixelLightCount = i6783[45]
  i6782.defaultReflectionHDR = !!i6783[46]
  i6782.hasLightDataAsset = !!i6783[47]
  i6782.hasManualGenerate = !!i6783[48]
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6789 = data
  request.r(i6789[0], i6789[1], 0, i6788, 'lightmapColor')
  request.r(i6789[2], i6789[3], 0, i6788, 'lightmapDirection')
  request.r(i6789[4], i6789[5], 0, i6788, 'shadowMask')
  return i6788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6790 = root || new UnityEngine.LightProbes()
  var i6791 = data
  return i6790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6799 = data
  var i6801 = i6799[0]
  var i6800 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6801.length; i += 1) {
    i6800.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6801[i + 0]));
  }
  i6798.ShaderCompilationErrors = i6800
  i6798.name = i6799[1]
  i6798.guid = i6799[2]
  var i6803 = i6799[3]
  var i6802 = []
  for(var i = 0; i < i6803.length; i += 1) {
    i6802.push( i6803[i + 0] );
  }
  i6798.shaderDefinedKeywords = i6802
  var i6805 = i6799[4]
  var i6804 = []
  for(var i = 0; i < i6805.length; i += 1) {
    i6804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6805[i + 0]) );
  }
  i6798.passes = i6804
  var i6807 = i6799[5]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6807[i + 0]) );
  }
  i6798.usePasses = i6806
  var i6809 = i6799[6]
  var i6808 = []
  for(var i = 0; i < i6809.length; i += 1) {
    i6808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6809[i + 0]) );
  }
  i6798.defaultParameterValues = i6808
  request.r(i6799[7], i6799[8], 0, i6798, 'unityFallbackShader')
  i6798.readDepth = !!i6799[9]
  i6798.hasDepthOnlyPass = !!i6799[10]
  i6798.isCreatedByShaderGraph = !!i6799[11]
  i6798.disableBatching = !!i6799[12]
  i6798.compiled = !!i6799[13]
  return i6798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6813 = data
  i6812.shaderName = i6813[0]
  i6812.errorMessage = i6813[1]
  return i6812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6818 = root || new pc.UnityShaderPass()
  var i6819 = data
  i6818.id = i6819[0]
  i6818.subShaderIndex = i6819[1]
  i6818.name = i6819[2]
  i6818.passType = i6819[3]
  i6818.grabPassTextureName = i6819[4]
  i6818.usePass = !!i6819[5]
  i6818.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[6], i6818.zTest)
  i6818.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[7], i6818.zWrite)
  i6818.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[8], i6818.culling)
  i6818.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6819[9], i6818.blending)
  i6818.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6819[10], i6818.alphaBlending)
  i6818.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[11], i6818.colorWriteMask)
  i6818.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[12], i6818.offsetUnits)
  i6818.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[13], i6818.offsetFactor)
  i6818.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[14], i6818.stencilRef)
  i6818.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[15], i6818.stencilReadMask)
  i6818.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[16], i6818.stencilWriteMask)
  i6818.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6819[17], i6818.stencilOp)
  i6818.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6819[18], i6818.stencilOpFront)
  i6818.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6819[19], i6818.stencilOpBack)
  var i6821 = i6819[20]
  var i6820 = []
  for(var i = 0; i < i6821.length; i += 1) {
    i6820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6821[i + 0]) );
  }
  i6818.tags = i6820
  var i6823 = i6819[21]
  var i6822 = []
  for(var i = 0; i < i6823.length; i += 1) {
    i6822.push( i6823[i + 0] );
  }
  i6818.passDefinedKeywords = i6822
  var i6825 = i6819[22]
  var i6824 = []
  for(var i = 0; i < i6825.length; i += 1) {
    i6824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6825[i + 0]) );
  }
  i6818.passDefinedKeywordGroups = i6824
  var i6827 = i6819[23]
  var i6826 = []
  for(var i = 0; i < i6827.length; i += 1) {
    i6826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6827[i + 0]) );
  }
  i6818.variants = i6826
  var i6829 = i6819[24]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 1) {
    i6828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6829[i + 0]) );
  }
  i6818.excludedVariants = i6828
  i6818.hasDepthReader = !!i6819[25]
  return i6818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6831 = data
  i6830.val = i6831[0]
  i6830.name = i6831[1]
  return i6830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6833 = data
  i6832.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6833[0], i6832.src)
  i6832.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6833[1], i6832.dst)
  i6832.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6833[2], i6832.op)
  return i6832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6835 = data
  i6834.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6835[0], i6834.pass)
  i6834.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6835[1], i6834.fail)
  i6834.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6835[2], i6834.zFail)
  i6834.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6835[3], i6834.comp)
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6839 = data
  i6838.name = i6839[0]
  i6838.value = i6839[1]
  return i6838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6843 = data
  var i6845 = i6843[0]
  var i6844 = []
  for(var i = 0; i < i6845.length; i += 1) {
    i6844.push( i6845[i + 0] );
  }
  i6842.keywords = i6844
  i6842.hasDiscard = !!i6843[1]
  return i6842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6849 = data
  i6848.passId = i6849[0]
  i6848.subShaderIndex = i6849[1]
  var i6851 = i6849[2]
  var i6850 = []
  for(var i = 0; i < i6851.length; i += 1) {
    i6850.push( i6851[i + 0] );
  }
  i6848.keywords = i6850
  i6848.vertexProgram = i6849[3]
  i6848.fragmentProgram = i6849[4]
  i6848.exportedForWebGl2 = !!i6849[5]
  i6848.readDepth = !!i6849[6]
  return i6848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6855 = data
  request.r(i6855[0], i6855[1], 0, i6854, 'shader')
  i6854.pass = i6855[2]
  return i6854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6859 = data
  i6858.name = i6859[0]
  i6858.type = i6859[1]
  i6858.value = new pc.Vec4( i6859[2], i6859[3], i6859[4], i6859[5] )
  i6858.textureValue = i6859[6]
  i6858.shaderPropertyFlag = i6859[7]
  return i6858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6861 = data
  i6860.name = i6861[0]
  request.r(i6861[1], i6861[2], 0, i6860, 'texture')
  i6860.aabb = i6861[3]
  i6860.vertices = i6861[4]
  i6860.triangles = i6861[5]
  i6860.textureRect = UnityEngine.Rect.MinMaxRect(i6861[6], i6861[7], i6861[8], i6861[9])
  i6860.packedRect = UnityEngine.Rect.MinMaxRect(i6861[10], i6861[11], i6861[12], i6861[13])
  i6860.border = new pc.Vec4( i6861[14], i6861[15], i6861[16], i6861[17] )
  i6860.transparency = i6861[18]
  i6860.bounds = i6861[19]
  i6860.pixelsPerUnit = i6861[20]
  i6860.textureWidth = i6861[21]
  i6860.textureHeight = i6861[22]
  i6860.nativeSize = new pc.Vec2( i6861[23], i6861[24] )
  i6860.pivot = new pc.Vec2( i6861[25], i6861[26] )
  i6860.textureRectOffset = new pc.Vec2( i6861[27], i6861[28] )
  return i6860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6863 = data
  i6862.name = i6863[0]
  return i6862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6865 = data
  i6864.name = i6865[0]
  i6864.wrapMode = i6865[1]
  i6864.isLooping = !!i6865[2]
  i6864.length = i6865[3]
  var i6867 = i6865[4]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6867[i + 0]) );
  }
  i6864.curves = i6866
  var i6869 = i6865[5]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6869[i + 0]) );
  }
  i6864.events = i6868
  i6864.halfPrecision = !!i6865[6]
  i6864._frameRate = i6865[7]
  i6864.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6865[8], i6864.localBounds)
  i6864.hasMuscleCurves = !!i6865[9]
  var i6871 = i6865[10]
  var i6870 = []
  for(var i = 0; i < i6871.length; i += 1) {
    i6870.push( i6871[i + 0] );
  }
  i6864.clipMuscleConstant = i6870
  i6864.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6865[11], i6864.clipBindingConstant)
  return i6864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6875 = data
  i6874.path = i6875[0]
  i6874.hash = i6875[1]
  i6874.componentType = i6875[2]
  i6874.property = i6875[3]
  i6874.keys = i6875[4]
  var i6877 = i6875[5]
  var i6876 = []
  for(var i = 0; i < i6877.length; i += 1) {
    i6876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6877[i + 0]) );
  }
  i6874.objectReferenceKeys = i6876
  return i6874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6881 = data
  i6880.time = i6881[0]
  request.r(i6881[1], i6881[2], 0, i6880, 'value')
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6885 = data
  i6884.functionName = i6885[0]
  i6884.floatParameter = i6885[1]
  i6884.intParameter = i6885[2]
  i6884.stringParameter = i6885[3]
  request.r(i6885[4], i6885[5], 0, i6884, 'objectReferenceParameter')
  i6884.time = i6885[6]
  return i6884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6887 = data
  i6886.center = new pc.Vec3( i6887[0], i6887[1], i6887[2] )
  i6886.extends = new pc.Vec3( i6887[3], i6887[4], i6887[5] )
  return i6886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6891 = data
  var i6893 = i6891[0]
  var i6892 = []
  for(var i = 0; i < i6893.length; i += 1) {
    i6892.push( i6893[i + 0] );
  }
  i6890.genericBindings = i6892
  var i6895 = i6891[1]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( i6895[i + 0] );
  }
  i6890.pptrCurveMapping = i6894
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6897 = data
  i6896.name = i6897[0]
  var i6899 = i6897[1]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6899[i + 0]) );
  }
  i6896.layers = i6898
  var i6901 = i6897[2]
  var i6900 = []
  for(var i = 0; i < i6901.length; i += 1) {
    i6900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6901[i + 0]) );
  }
  i6896.parameters = i6900
  i6896.animationClips = i6897[3]
  i6896.avatarUnsupported = i6897[4]
  return i6896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6905 = data
  i6904.name = i6905[0]
  i6904.defaultWeight = i6905[1]
  i6904.blendingMode = i6905[2]
  i6904.avatarMask = i6905[3]
  i6904.syncedLayerIndex = i6905[4]
  i6904.syncedLayerAffectsTiming = !!i6905[5]
  i6904.syncedLayers = i6905[6]
  i6904.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6905[7], i6904.stateMachine)
  return i6904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6907 = data
  i6906.id = i6907[0]
  i6906.name = i6907[1]
  i6906.path = i6907[2]
  var i6909 = i6907[3]
  var i6908 = []
  for(var i = 0; i < i6909.length; i += 1) {
    i6908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6909[i + 0]) );
  }
  i6906.states = i6908
  var i6911 = i6907[4]
  var i6910 = []
  for(var i = 0; i < i6911.length; i += 1) {
    i6910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6911[i + 0]) );
  }
  i6906.machines = i6910
  var i6913 = i6907[5]
  var i6912 = []
  for(var i = 0; i < i6913.length; i += 1) {
    i6912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6913[i + 0]) );
  }
  i6906.entryStateTransitions = i6912
  var i6915 = i6907[6]
  var i6914 = []
  for(var i = 0; i < i6915.length; i += 1) {
    i6914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6915[i + 0]) );
  }
  i6906.exitStateTransitions = i6914
  var i6917 = i6907[7]
  var i6916 = []
  for(var i = 0; i < i6917.length; i += 1) {
    i6916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6917[i + 0]) );
  }
  i6906.anyStateTransitions = i6916
  i6906.defaultStateId = i6907[8]
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6921 = data
  i6920.id = i6921[0]
  i6920.name = i6921[1]
  i6920.cycleOffset = i6921[2]
  i6920.cycleOffsetParameter = i6921[3]
  i6920.cycleOffsetParameterActive = !!i6921[4]
  i6920.mirror = !!i6921[5]
  i6920.mirrorParameter = i6921[6]
  i6920.mirrorParameterActive = !!i6921[7]
  i6920.motionId = i6921[8]
  i6920.nameHash = i6921[9]
  i6920.fullPathHash = i6921[10]
  i6920.speed = i6921[11]
  i6920.speedParameter = i6921[12]
  i6920.speedParameterActive = !!i6921[13]
  i6920.tag = i6921[14]
  i6920.tagHash = i6921[15]
  i6920.writeDefaultValues = !!i6921[16]
  var i6923 = i6921[17]
  var i6922 = []
  for(var i = 0; i < i6923.length; i += 2) {
  request.r(i6923[i + 0], i6923[i + 1], 2, i6922, '')
  }
  i6920.behaviours = i6922
  var i6925 = i6921[18]
  var i6924 = []
  for(var i = 0; i < i6925.length; i += 1) {
    i6924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6925[i + 0]) );
  }
  i6920.transitions = i6924
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6931 = data
  i6930.fullPath = i6931[0]
  i6930.canTransitionToSelf = !!i6931[1]
  i6930.duration = i6931[2]
  i6930.exitTime = i6931[3]
  i6930.hasExitTime = !!i6931[4]
  i6930.hasFixedDuration = !!i6931[5]
  i6930.interruptionSource = i6931[6]
  i6930.offset = i6931[7]
  i6930.orderedInterruption = !!i6931[8]
  i6930.destinationStateId = i6931[9]
  i6930.isExit = !!i6931[10]
  i6930.mute = !!i6931[11]
  i6930.solo = !!i6931[12]
  var i6933 = i6931[13]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6933[i + 0]) );
  }
  i6930.conditions = i6932
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6939 = data
  i6938.destinationStateId = i6939[0]
  i6938.isExit = !!i6939[1]
  i6938.mute = !!i6939[2]
  i6938.solo = !!i6939[3]
  var i6941 = i6939[4]
  var i6940 = []
  for(var i = 0; i < i6941.length; i += 1) {
    i6940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6941[i + 0]) );
  }
  i6938.conditions = i6940
  return i6938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6945 = data
  i6944.defaultBool = !!i6945[0]
  i6944.defaultFloat = i6945[1]
  i6944.defaultInt = i6945[2]
  i6944.name = i6945[3]
  i6944.nameHash = i6945[4]
  i6944.type = i6945[5]
  return i6944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6949 = data
  i6948.mode = i6949[0]
  i6948.parameter = i6949[1]
  i6948.threshold = i6949[2]
  return i6948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6951 = data
  i6950.name = i6951[0]
  i6950.bytes64 = i6951[1]
  i6950.data = i6951[2]
  return i6950
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6952 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6953 = data
  i6952.normalStyle = i6953[0]
  i6952.normalSpacingOffset = i6953[1]
  i6952.boldStyle = i6953[2]
  i6952.boldSpacing = i6953[3]
  i6952.italicStyle = i6953[4]
  i6952.tabSize = i6953[5]
  request.r(i6953[6], i6953[7], 0, i6952, 'atlas')
  i6952.m_SourceFontFileGUID = i6953[8]
  i6952.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6953[9], i6952.m_CreationSettings)
  request.r(i6953[10], i6953[11], 0, i6952, 'm_SourceFontFile')
  i6952.m_SourceFontFilePath = i6953[12]
  i6952.m_AtlasPopulationMode = i6953[13]
  i6952.InternalDynamicOS = !!i6953[14]
  var i6955 = i6953[15]
  var i6954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6955.length; i += 1) {
    i6954.add(request.d('UnityEngine.TextCore.Glyph', i6955[i + 0]));
  }
  i6952.m_GlyphTable = i6954
  var i6957 = i6953[16]
  var i6956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6957.length; i += 1) {
    i6956.add(request.d('TMPro.TMP_Character', i6957[i + 0]));
  }
  i6952.m_CharacterTable = i6956
  var i6959 = i6953[17]
  var i6958 = []
  for(var i = 0; i < i6959.length; i += 2) {
  request.r(i6959[i + 0], i6959[i + 1], 2, i6958, '')
  }
  i6952.m_AtlasTextures = i6958
  i6952.m_AtlasTextureIndex = i6953[18]
  i6952.m_IsMultiAtlasTexturesEnabled = !!i6953[19]
  i6952.m_GetFontFeatures = !!i6953[20]
  i6952.m_ClearDynamicDataOnBuild = !!i6953[21]
  i6952.m_AtlasWidth = i6953[22]
  i6952.m_AtlasHeight = i6953[23]
  i6952.m_AtlasPadding = i6953[24]
  i6952.m_AtlasRenderMode = i6953[25]
  var i6961 = i6953[26]
  var i6960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6961.length; i += 1) {
    i6960.add(request.d('UnityEngine.TextCore.GlyphRect', i6961[i + 0]));
  }
  i6952.m_UsedGlyphRects = i6960
  var i6963 = i6953[27]
  var i6962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6963.length; i += 1) {
    i6962.add(request.d('UnityEngine.TextCore.GlyphRect', i6963[i + 0]));
  }
  i6952.m_FreeGlyphRects = i6962
  i6952.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6953[28], i6952.m_FontFeatureTable)
  i6952.m_ShouldReimportFontFeatures = !!i6953[29]
  var i6965 = i6953[30]
  var i6964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6965.length; i += 2) {
  request.r(i6965[i + 0], i6965[i + 1], 1, i6964, '')
  }
  i6952.m_FallbackFontAssetTable = i6964
  var i6967 = i6953[31]
  var i6966 = []
  for(var i = 0; i < i6967.length; i += 1) {
    i6966.push( request.d('TMPro.TMP_FontWeightPair', i6967[i + 0]) );
  }
  i6952.m_FontWeightTable = i6966
  var i6969 = i6953[32]
  var i6968 = []
  for(var i = 0; i < i6969.length; i += 1) {
    i6968.push( request.d('TMPro.TMP_FontWeightPair', i6969[i + 0]) );
  }
  i6952.fontWeights = i6968
  i6952.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6953[33], i6952.m_fontInfo)
  var i6971 = i6953[34]
  var i6970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6971.length; i += 1) {
    i6970.add(request.d('TMPro.TMP_Glyph', i6971[i + 0]));
  }
  i6952.m_glyphInfoList = i6970
  i6952.m_KerningTable = request.d('TMPro.KerningTable', i6953[35], i6952.m_KerningTable)
  var i6973 = i6953[36]
  var i6972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6973.length; i += 2) {
  request.r(i6973[i + 0], i6973[i + 1], 1, i6972, '')
  }
  i6952.fallbackFontAssets = i6972
  i6952.m_Version = i6953[37]
  i6952.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6953[38], i6952.m_FaceInfo)
  request.r(i6953[39], i6953[40], 0, i6952, 'm_Material')
  return i6952
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6974 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6975 = data
  i6974.sourceFontFileName = i6975[0]
  i6974.sourceFontFileGUID = i6975[1]
  i6974.faceIndex = i6975[2]
  i6974.pointSizeSamplingMode = i6975[3]
  i6974.pointSize = i6975[4]
  i6974.padding = i6975[5]
  i6974.paddingMode = i6975[6]
  i6974.packingMode = i6975[7]
  i6974.atlasWidth = i6975[8]
  i6974.atlasHeight = i6975[9]
  i6974.characterSetSelectionMode = i6975[10]
  i6974.characterSequence = i6975[11]
  i6974.referencedFontAssetGUID = i6975[12]
  i6974.referencedTextAssetGUID = i6975[13]
  i6974.fontStyle = i6975[14]
  i6974.fontStyleModifier = i6975[15]
  i6974.renderMode = i6975[16]
  i6974.includeFontFeatures = !!i6975[17]
  return i6974
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6978 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6979 = data
  i6978.m_Index = i6979[0]
  i6978.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6979[1], i6978.m_Metrics)
  i6978.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6979[2], i6978.m_GlyphRect)
  i6978.m_Scale = i6979[3]
  i6978.m_AtlasIndex = i6979[4]
  i6978.m_ClassDefinitionType = i6979[5]
  return i6978
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6980 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6981 = data
  i6980.m_Width = i6981[0]
  i6980.m_Height = i6981[1]
  i6980.m_HorizontalBearingX = i6981[2]
  i6980.m_HorizontalBearingY = i6981[3]
  i6980.m_HorizontalAdvance = i6981[4]
  return i6980
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6982 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6983 = data
  i6982.m_X = i6983[0]
  i6982.m_Y = i6983[1]
  i6982.m_Width = i6983[2]
  i6982.m_Height = i6983[3]
  return i6982
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6986 = root || request.c( 'TMPro.TMP_Character' )
  var i6987 = data
  i6986.m_ElementType = i6987[0]
  i6986.m_Unicode = i6987[1]
  i6986.m_GlyphIndex = i6987[2]
  i6986.m_Scale = i6987[3]
  return i6986
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6992 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6993 = data
  var i6995 = i6993[0]
  var i6994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6995.length; i += 1) {
    i6994.add(request.d('TMPro.MultipleSubstitutionRecord', i6995[i + 0]));
  }
  i6992.m_MultipleSubstitutionRecords = i6994
  var i6997 = i6993[1]
  var i6996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6997.length; i += 1) {
    i6996.add(request.d('TMPro.LigatureSubstitutionRecord', i6997[i + 0]));
  }
  i6992.m_LigatureSubstitutionRecords = i6996
  var i6999 = i6993[2]
  var i6998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6999.length; i += 1) {
    i6998.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6999[i + 0]));
  }
  i6992.m_GlyphPairAdjustmentRecords = i6998
  var i7001 = i6993[3]
  var i7000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i7001[i + 0]));
  }
  i6992.m_MarkToBaseAdjustmentRecords = i7000
  var i7003 = i6993[4]
  var i7002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i7003.length; i += 1) {
    i7002.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i7003[i + 0]));
  }
  i6992.m_MarkToMarkAdjustmentRecords = i7002
  return i6992
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i7006 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i7007 = data
  i7006.m_TargetGlyphID = i7007[0]
  i7006.m_SubstituteGlyphIDs = i7007[1]
  return i7006
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i7010 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i7011 = data
  i7010.m_ComponentGlyphIDs = i7011[0]
  i7010.m_LigatureGlyphID = i7011[1]
  return i7010
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7014 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i7015 = data
  i7014.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7015[0], i7014.m_FirstAdjustmentRecord)
  i7014.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7015[1], i7014.m_SecondAdjustmentRecord)
  i7014.m_FeatureLookupFlags = i7015[2]
  return i7014
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7018 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7019 = data
  i7018.m_BaseGlyphID = i7019[0]
  i7018.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7019[1], i7018.m_BaseGlyphAnchorPoint)
  i7018.m_MarkGlyphID = i7019[2]
  i7018.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7019[3], i7018.m_MarkPositionAdjustment)
  return i7018
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7022 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7023 = data
  i7022.m_BaseMarkGlyphID = i7023[0]
  i7022.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7023[1], i7022.m_BaseMarkGlyphAnchorPoint)
  i7022.m_CombiningMarkGlyphID = i7023[2]
  i7022.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7023[3], i7022.m_CombiningMarkPositionAdjustment)
  return i7022
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7028 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7029 = data
  request.r(i7029[0], i7029[1], 0, i7028, 'regularTypeface')
  request.r(i7029[2], i7029[3], 0, i7028, 'italicTypeface')
  return i7028
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7030 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7031 = data
  i7030.Name = i7031[0]
  i7030.PointSize = i7031[1]
  i7030.Scale = i7031[2]
  i7030.CharacterCount = i7031[3]
  i7030.LineHeight = i7031[4]
  i7030.Baseline = i7031[5]
  i7030.Ascender = i7031[6]
  i7030.CapHeight = i7031[7]
  i7030.Descender = i7031[8]
  i7030.CenterLine = i7031[9]
  i7030.SuperscriptOffset = i7031[10]
  i7030.SubscriptOffset = i7031[11]
  i7030.SubSize = i7031[12]
  i7030.Underline = i7031[13]
  i7030.UnderlineThickness = i7031[14]
  i7030.strikethrough = i7031[15]
  i7030.strikethroughThickness = i7031[16]
  i7030.TabWidth = i7031[17]
  i7030.Padding = i7031[18]
  i7030.AtlasWidth = i7031[19]
  i7030.AtlasHeight = i7031[20]
  return i7030
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7034 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7035 = data
  i7034.id = i7035[0]
  i7034.x = i7035[1]
  i7034.y = i7035[2]
  i7034.width = i7035[3]
  i7034.height = i7035[4]
  i7034.xOffset = i7035[5]
  i7034.yOffset = i7035[6]
  i7034.xAdvance = i7035[7]
  i7034.scale = i7035[8]
  return i7034
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7036 = root || request.c( 'TMPro.KerningTable' )
  var i7037 = data
  var i7039 = i7037[0]
  var i7038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7039.length; i += 1) {
    i7038.add(request.d('TMPro.KerningPair', i7039[i + 0]));
  }
  i7036.kerningPairs = i7038
  return i7036
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7042 = root || request.c( 'TMPro.KerningPair' )
  var i7043 = data
  i7042.xOffset = i7043[0]
  i7042.m_FirstGlyph = i7043[1]
  i7042.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7043[2], i7042.m_FirstGlyphAdjustments)
  i7042.m_SecondGlyph = i7043[3]
  i7042.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7043[4], i7042.m_SecondGlyphAdjustments)
  i7042.m_IgnoreSpacingAdjustments = !!i7043[5]
  return i7042
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7044 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7045 = data
  i7044.m_FaceIndex = i7045[0]
  i7044.m_FamilyName = i7045[1]
  i7044.m_StyleName = i7045[2]
  i7044.m_PointSize = i7045[3]
  i7044.m_Scale = i7045[4]
  i7044.m_UnitsPerEM = i7045[5]
  i7044.m_LineHeight = i7045[6]
  i7044.m_AscentLine = i7045[7]
  i7044.m_CapLine = i7045[8]
  i7044.m_MeanLine = i7045[9]
  i7044.m_Baseline = i7045[10]
  i7044.m_DescentLine = i7045[11]
  i7044.m_SuperscriptOffset = i7045[12]
  i7044.m_SuperscriptSize = i7045[13]
  i7044.m_SubscriptOffset = i7045[14]
  i7044.m_SubscriptSize = i7045[15]
  i7044.m_UnderlineOffset = i7045[16]
  i7044.m_UnderlineThickness = i7045[17]
  i7044.m_StrikethroughOffset = i7045[18]
  i7044.m_StrikethroughThickness = i7045[19]
  i7044.m_TabWidth = i7045[20]
  return i7044
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7046 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7047 = data
  i7046.useSafeMode = !!i7047[0]
  i7046.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7047[1], i7046.safeModeOptions)
  i7046.timeScale = i7047[2]
  i7046.unscaledTimeScale = i7047[3]
  i7046.useSmoothDeltaTime = !!i7047[4]
  i7046.maxSmoothUnscaledTime = i7047[5]
  i7046.rewindCallbackMode = i7047[6]
  i7046.showUnityEditorReport = !!i7047[7]
  i7046.logBehaviour = i7047[8]
  i7046.drawGizmos = !!i7047[9]
  i7046.defaultRecyclable = !!i7047[10]
  i7046.defaultAutoPlay = i7047[11]
  i7046.defaultUpdateType = i7047[12]
  i7046.defaultTimeScaleIndependent = !!i7047[13]
  i7046.defaultEaseType = i7047[14]
  i7046.defaultEaseOvershootOrAmplitude = i7047[15]
  i7046.defaultEasePeriod = i7047[16]
  i7046.defaultAutoKill = !!i7047[17]
  i7046.defaultLoopType = i7047[18]
  i7046.debugMode = !!i7047[19]
  i7046.debugStoreTargetId = !!i7047[20]
  i7046.showPreviewPanel = !!i7047[21]
  i7046.storeSettingsLocation = i7047[22]
  i7046.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7047[23], i7046.modules)
  i7046.createASMDEF = !!i7047[24]
  i7046.showPlayingTweens = !!i7047[25]
  i7046.showPausedTweens = !!i7047[26]
  return i7046
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7048 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7049 = data
  i7048.logBehaviour = i7049[0]
  i7048.nestedTweenFailureBehaviour = i7049[1]
  return i7048
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7050 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7051 = data
  i7050.showPanel = !!i7051[0]
  i7050.audioEnabled = !!i7051[1]
  i7050.physicsEnabled = !!i7051[2]
  i7050.physics2DEnabled = !!i7051[3]
  i7050.spriteEnabled = !!i7051[4]
  i7050.uiEnabled = !!i7051[5]
  i7050.uiToolkitEnabled = !!i7051[6]
  i7050.textMeshProEnabled = !!i7051[7]
  i7050.tk2DEnabled = !!i7051[8]
  i7050.deAudioEnabled = !!i7051[9]
  i7050.deUnityExtendedEnabled = !!i7051[10]
  i7050.epoOutlineEnabled = !!i7051[11]
  return i7050
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7052 = root || request.c( 'TMPro.TMP_Settings' )
  var i7053 = data
  i7052.assetVersion = i7053[0]
  i7052.m_TextWrappingMode = i7053[1]
  i7052.m_enableKerning = !!i7053[2]
  var i7055 = i7053[3]
  var i7054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7055.length; i += 1) {
    i7054.add(i7055[i + 0]);
  }
  i7052.m_ActiveFontFeatures = i7054
  i7052.m_enableExtraPadding = !!i7053[4]
  i7052.m_enableTintAllSprites = !!i7053[5]
  i7052.m_enableParseEscapeCharacters = !!i7053[6]
  i7052.m_EnableRaycastTarget = !!i7053[7]
  i7052.m_GetFontFeaturesAtRuntime = !!i7053[8]
  i7052.m_missingGlyphCharacter = i7053[9]
  i7052.m_ClearDynamicDataOnBuild = !!i7053[10]
  i7052.m_warningsDisabled = !!i7053[11]
  request.r(i7053[12], i7053[13], 0, i7052, 'm_defaultFontAsset')
  i7052.m_defaultFontAssetPath = i7053[14]
  i7052.m_defaultFontSize = i7053[15]
  i7052.m_defaultAutoSizeMinRatio = i7053[16]
  i7052.m_defaultAutoSizeMaxRatio = i7053[17]
  i7052.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7053[18], i7053[19] )
  i7052.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7053[20], i7053[21] )
  i7052.m_autoSizeTextContainer = !!i7053[22]
  i7052.m_IsTextObjectScaleStatic = !!i7053[23]
  var i7057 = i7053[24]
  var i7056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7057.length; i += 2) {
  request.r(i7057[i + 0], i7057[i + 1], 1, i7056, '')
  }
  i7052.m_fallbackFontAssets = i7056
  i7052.m_matchMaterialPreset = !!i7053[25]
  i7052.m_HideSubTextObjects = !!i7053[26]
  request.r(i7053[27], i7053[28], 0, i7052, 'm_defaultSpriteAsset')
  i7052.m_defaultSpriteAssetPath = i7053[29]
  i7052.m_enableEmojiSupport = !!i7053[30]
  i7052.m_MissingCharacterSpriteUnicode = i7053[31]
  var i7059 = i7053[32]
  var i7058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7059.length; i += 2) {
  request.r(i7059[i + 0], i7059[i + 1], 1, i7058, '')
  }
  i7052.m_EmojiFallbackTextAssets = i7058
  i7052.m_defaultColorGradientPresetsPath = i7053[33]
  request.r(i7053[34], i7053[35], 0, i7052, 'm_defaultStyleSheet')
  i7052.m_StyleSheetsResourcePath = i7053[36]
  request.r(i7053[37], i7053[38], 0, i7052, 'm_leadingCharacters')
  request.r(i7053[39], i7053[40], 0, i7052, 'm_followingCharacters')
  i7052.m_UseModernHangulLineBreakingRules = !!i7053[41]
  return i7052
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7062 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7063 = data
  request.r(i7063[0], i7063[1], 0, i7062, 'spriteSheet')
  var i7065 = i7063[2]
  var i7064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7065.length; i += 1) {
    i7064.add(request.d('TMPro.TMP_Sprite', i7065[i + 0]));
  }
  i7062.spriteInfoList = i7064
  var i7067 = i7063[3]
  var i7066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7067.length; i += 2) {
  request.r(i7067[i + 0], i7067[i + 1], 1, i7066, '')
  }
  i7062.fallbackSpriteAssets = i7066
  var i7069 = i7063[4]
  var i7068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7069.length; i += 1) {
    i7068.add(request.d('TMPro.TMP_SpriteCharacter', i7069[i + 0]));
  }
  i7062.m_SpriteCharacterTable = i7068
  var i7071 = i7063[5]
  var i7070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7071.length; i += 1) {
    i7070.add(request.d('TMPro.TMP_SpriteGlyph', i7071[i + 0]));
  }
  i7062.m_GlyphTable = i7070
  i7062.m_Version = i7063[6]
  i7062.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7063[7], i7062.m_FaceInfo)
  request.r(i7063[8], i7063[9], 0, i7062, 'm_Material')
  return i7062
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7074 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7075 = data
  i7074.name = i7075[0]
  i7074.hashCode = i7075[1]
  i7074.unicode = i7075[2]
  i7074.pivot = new pc.Vec2( i7075[3], i7075[4] )
  request.r(i7075[5], i7075[6], 0, i7074, 'sprite')
  i7074.id = i7075[7]
  i7074.x = i7075[8]
  i7074.y = i7075[9]
  i7074.width = i7075[10]
  i7074.height = i7075[11]
  i7074.xOffset = i7075[12]
  i7074.yOffset = i7075[13]
  i7074.xAdvance = i7075[14]
  i7074.scale = i7075[15]
  return i7074
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7080 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7081 = data
  i7080.m_Name = i7081[0]
  i7080.m_ElementType = i7081[1]
  i7080.m_Unicode = i7081[2]
  i7080.m_GlyphIndex = i7081[3]
  i7080.m_Scale = i7081[4]
  return i7080
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7084 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7085 = data
  request.r(i7085[0], i7085[1], 0, i7084, 'sprite')
  i7084.m_Index = i7085[2]
  i7084.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7085[3], i7084.m_Metrics)
  i7084.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7085[4], i7084.m_GlyphRect)
  i7084.m_Scale = i7085[5]
  i7084.m_AtlasIndex = i7085[6]
  i7084.m_ClassDefinitionType = i7085[7]
  return i7084
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7086 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7087 = data
  var i7089 = i7087[0]
  var i7088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7089.length; i += 1) {
    i7088.add(request.d('TMPro.TMP_Style', i7089[i + 0]));
  }
  i7086.m_StyleList = i7088
  return i7086
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7092 = root || request.c( 'TMPro.TMP_Style' )
  var i7093 = data
  i7092.m_Name = i7093[0]
  i7092.m_HashCode = i7093[1]
  i7092.m_OpeningDefinition = i7093[2]
  i7092.m_ClosingDefinition = i7093[3]
  i7092.m_OpeningTagArray = i7093[4]
  i7092.m_ClosingTagArray = i7093[5]
  return i7092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7095 = data
  var i7097 = i7095[0]
  var i7096 = []
  for(var i = 0; i < i7097.length; i += 1) {
    i7096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7097[i + 0]) );
  }
  i7094.files = i7096
  i7094.componentToPrefabIds = i7095[1]
  return i7094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7101 = data
  i7100.path = i7101[0]
  request.r(i7101[1], i7101[2], 0, i7100, 'unityObject')
  return i7100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7103 = data
  var i7105 = i7103[0]
  var i7104 = []
  for(var i = 0; i < i7105.length; i += 1) {
    i7104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7105[i + 0]) );
  }
  i7102.scriptsExecutionOrder = i7104
  var i7107 = i7103[1]
  var i7106 = []
  for(var i = 0; i < i7107.length; i += 1) {
    i7106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7107[i + 0]) );
  }
  i7102.sortingLayers = i7106
  var i7109 = i7103[2]
  var i7108 = []
  for(var i = 0; i < i7109.length; i += 1) {
    i7108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7109[i + 0]) );
  }
  i7102.cullingLayers = i7108
  i7102.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7103[3], i7102.timeSettings)
  i7102.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7103[4], i7102.physicsSettings)
  i7102.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7103[5], i7102.physics2DSettings)
  i7102.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7103[6], i7102.qualitySettings)
  i7102.enableRealtimeShadows = !!i7103[7]
  i7102.enableAutoInstancing = !!i7103[8]
  i7102.enableStaticBatching = !!i7103[9]
  i7102.enableDynamicBatching = !!i7103[10]
  i7102.lightmapEncodingQuality = i7103[11]
  i7102.desiredColorSpace = i7103[12]
  var i7111 = i7103[13]
  var i7110 = []
  for(var i = 0; i < i7111.length; i += 1) {
    i7110.push( i7111[i + 0] );
  }
  i7102.allTags = i7110
  return i7102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7115 = data
  i7114.name = i7115[0]
  i7114.value = i7115[1]
  return i7114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7119 = data
  i7118.id = i7119[0]
  i7118.name = i7119[1]
  i7118.value = i7119[2]
  return i7118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7123 = data
  i7122.id = i7123[0]
  i7122.name = i7123[1]
  return i7122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7125 = data
  i7124.fixedDeltaTime = i7125[0]
  i7124.maximumDeltaTime = i7125[1]
  i7124.timeScale = i7125[2]
  i7124.maximumParticleTimestep = i7125[3]
  return i7124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7127 = data
  i7126.gravity = new pc.Vec3( i7127[0], i7127[1], i7127[2] )
  i7126.defaultSolverIterations = i7127[3]
  i7126.bounceThreshold = i7127[4]
  i7126.autoSyncTransforms = !!i7127[5]
  i7126.autoSimulation = !!i7127[6]
  var i7129 = i7127[7]
  var i7128 = []
  for(var i = 0; i < i7129.length; i += 1) {
    i7128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7129[i + 0]) );
  }
  i7126.collisionMatrix = i7128
  return i7126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7133 = data
  i7132.enabled = !!i7133[0]
  i7132.layerId = i7133[1]
  i7132.otherLayerId = i7133[2]
  return i7132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7135 = data
  request.r(i7135[0], i7135[1], 0, i7134, 'material')
  i7134.gravity = new pc.Vec2( i7135[2], i7135[3] )
  i7134.positionIterations = i7135[4]
  i7134.velocityIterations = i7135[5]
  i7134.velocityThreshold = i7135[6]
  i7134.maxLinearCorrection = i7135[7]
  i7134.maxAngularCorrection = i7135[8]
  i7134.maxTranslationSpeed = i7135[9]
  i7134.maxRotationSpeed = i7135[10]
  i7134.baumgarteScale = i7135[11]
  i7134.baumgarteTOIScale = i7135[12]
  i7134.timeToSleep = i7135[13]
  i7134.linearSleepTolerance = i7135[14]
  i7134.angularSleepTolerance = i7135[15]
  i7134.defaultContactOffset = i7135[16]
  i7134.autoSimulation = !!i7135[17]
  i7134.queriesHitTriggers = !!i7135[18]
  i7134.queriesStartInColliders = !!i7135[19]
  i7134.callbacksOnDisable = !!i7135[20]
  i7134.reuseCollisionCallbacks = !!i7135[21]
  i7134.autoSyncTransforms = !!i7135[22]
  var i7137 = i7135[23]
  var i7136 = []
  for(var i = 0; i < i7137.length; i += 1) {
    i7136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7137[i + 0]) );
  }
  i7134.collisionMatrix = i7136
  return i7134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7141 = data
  i7140.enabled = !!i7141[0]
  i7140.layerId = i7141[1]
  i7140.otherLayerId = i7141[2]
  return i7140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7143 = data
  var i7145 = i7143[0]
  var i7144 = []
  for(var i = 0; i < i7145.length; i += 1) {
    i7144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7145[i + 0]) );
  }
  i7142.qualityLevels = i7144
  var i7147 = i7143[1]
  var i7146 = []
  for(var i = 0; i < i7147.length; i += 1) {
    i7146.push( i7147[i + 0] );
  }
  i7142.names = i7146
  i7142.shadows = i7143[2]
  i7142.anisotropicFiltering = i7143[3]
  i7142.antiAliasing = i7143[4]
  i7142.lodBias = i7143[5]
  i7142.shadowCascades = i7143[6]
  i7142.shadowDistance = i7143[7]
  i7142.shadowmaskMode = i7143[8]
  i7142.shadowProjection = i7143[9]
  i7142.shadowResolution = i7143[10]
  i7142.softParticles = !!i7143[11]
  i7142.softVegetation = !!i7143[12]
  i7142.activeColorSpace = i7143[13]
  i7142.desiredColorSpace = i7143[14]
  i7142.masterTextureLimit = i7143[15]
  i7142.maxQueuedFrames = i7143[16]
  i7142.particleRaycastBudget = i7143[17]
  i7142.pixelLightCount = i7143[18]
  i7142.realtimeReflectionProbes = !!i7143[19]
  i7142.shadowCascade2Split = i7143[20]
  i7142.shadowCascade4Split = new pc.Vec3( i7143[21], i7143[22], i7143[23] )
  i7142.streamingMipmapsActive = !!i7143[24]
  i7142.vSyncCount = i7143[25]
  i7142.asyncUploadBufferSize = i7143[26]
  i7142.asyncUploadTimeSlice = i7143[27]
  i7142.billboardsFaceCameraPosition = !!i7143[28]
  i7142.shadowNearPlaneOffset = i7143[29]
  i7142.streamingMipmapsMemoryBudget = i7143[30]
  i7142.maximumLODLevel = i7143[31]
  i7142.streamingMipmapsAddAllCameras = !!i7143[32]
  i7142.streamingMipmapsMaxLevelReduction = i7143[33]
  i7142.streamingMipmapsRenderersPerFrame = i7143[34]
  i7142.resolutionScalingFixedDPIFactor = i7143[35]
  i7142.streamingMipmapsMaxFileIORequests = i7143[36]
  i7142.currentQualityLevel = i7143[37]
  return i7142
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7150 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i7151 = data
  i7150.m_GlyphIndex = i7151[0]
  i7150.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i7151[1], i7150.m_GlyphValueRecord)
  return i7150
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i7152 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i7153 = data
  i7152.m_XCoordinate = i7153[0]
  i7152.m_YCoordinate = i7153[1]
  return i7152
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i7154 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i7155 = data
  i7154.m_XPositionAdjustment = i7155[0]
  i7154.m_YPositionAdjustment = i7155[1]
  return i7154
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7156 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7157 = data
  i7156.xPlacement = i7157[0]
  i7156.yPlacement = i7157[1]
  i7156.xAdvance = i7157[2]
  i7156.yAdvance = i7157[3]
  return i7156
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i7158 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i7159 = data
  i7158.m_XPlacement = i7159[0]
  i7158.m_YPlacement = i7159[1]
  i7158.m_XAdvance = i7159[2]
  i7158.m_YAdvance = i7159[3]
  return i7158
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4993";

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

Deserializers.buildID = "64df2333-c9e9-44af-8b89-63e2e7f07e82";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

