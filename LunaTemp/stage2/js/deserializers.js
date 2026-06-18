var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointSpring' )
  var i3451 = data
  i3450.spring = i3451[0]
  i3450.damper = i3451[1]
  i3450.targetPosition = i3451[2]
  return i3450
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.JointMotor' )
  var i3453 = data
  i3452.m_TargetVelocity = i3453[0]
  i3452.m_Force = i3453[1]
  i3452.m_FreeSpin = i3453[2]
  return i3452
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.JointLimits' )
  var i3455 = data
  i3454.m_Min = i3455[0]
  i3454.m_Max = i3455[1]
  i3454.m_Bounciness = i3455[2]
  i3454.m_BounceMinVelocity = i3455[3]
  i3454.m_ContactDistance = i3455[4]
  i3454.minBounce = i3455[5]
  i3454.maxBounce = i3455[6]
  return i3454
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.JointDrive' )
  var i3457 = data
  i3456.m_PositionSpring = i3457[0]
  i3456.m_PositionDamper = i3457[1]
  i3456.m_MaximumForce = i3457[2]
  i3456.m_UseAcceleration = i3457[3]
  return i3456
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3459 = data
  i3458.m_Spring = i3459[0]
  i3458.m_Damper = i3459[1]
  return i3458
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3461 = data
  i3460.m_Limit = i3461[0]
  i3460.m_Bounciness = i3461[1]
  i3460.m_ContactDistance = i3461[2]
  return i3460
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3463 = data
  i3462.m_ExtremumSlip = i3463[0]
  i3462.m_ExtremumValue = i3463[1]
  i3462.m_AsymptoteSlip = i3463[2]
  i3462.m_AsymptoteValue = i3463[3]
  i3462.m_Stiffness = i3463[4]
  return i3462
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3465 = data
  i3464.m_LowerAngle = i3465[0]
  i3464.m_UpperAngle = i3465[1]
  return i3464
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3467 = data
  i3466.m_MotorSpeed = i3467[0]
  i3466.m_MaximumMotorTorque = i3467[1]
  return i3466
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3469 = data
  i3468.m_DampingRatio = i3469[0]
  i3468.m_Frequency = i3469[1]
  i3468.m_Angle = i3469[2]
  return i3468
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3471 = data
  i3470.m_LowerTranslation = i3471[0]
  i3470.m_UpperTranslation = i3471[1]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3472 = root || new pc.UnityMaterial()
  var i3473 = data
  i3472.name = i3473[0]
  request.r(i3473[1], i3473[2], 0, i3472, 'shader')
  i3472.renderQueue = i3473[3]
  i3472.enableInstancing = !!i3473[4]
  var i3475 = i3473[5]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3475[i + 0]) );
  }
  i3472.floatParameters = i3474
  var i3477 = i3473[6]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3477[i + 0]) );
  }
  i3472.colorParameters = i3476
  var i3479 = i3473[7]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3479[i + 0]) );
  }
  i3472.vectorParameters = i3478
  var i3481 = i3473[8]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3481[i + 0]) );
  }
  i3472.textureParameters = i3480
  var i3483 = i3473[9]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3483[i + 0]) );
  }
  i3472.materialFlags = i3482
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.value = i3487[1]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3491 = data
  i3490.name = i3491[0]
  i3490.value = new pc.Color(i3491[1], i3491[2], i3491[3], i3491[4])
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3495 = data
  i3494.name = i3495[0]
  i3494.value = new pc.Vec4( i3495[1], i3495[2], i3495[3], i3495[4] )
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3499 = data
  i3498.name = i3499[0]
  request.r(i3499[1], i3499[2], 0, i3498, 'value')
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3503 = data
  i3502.name = i3503[0]
  i3502.enabled = !!i3503[1]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3505 = data
  i3504.name = i3505[0]
  i3504.width = i3505[1]
  i3504.height = i3505[2]
  i3504.mipmapCount = i3505[3]
  i3504.anisoLevel = i3505[4]
  i3504.filterMode = i3505[5]
  i3504.hdr = !!i3505[6]
  i3504.format = i3505[7]
  i3504.wrapMode = i3505[8]
  i3504.alphaIsTransparency = !!i3505[9]
  i3504.alphaSource = i3505[10]
  i3504.graphicsFormat = i3505[11]
  i3504.sRGBTexture = !!i3505[12]
  i3504.desiredColorSpace = i3505[13]
  i3504.wrapU = i3505[14]
  i3504.wrapV = i3505[15]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3507 = data
  i3506.position = new pc.Vec3( i3507[0], i3507[1], i3507[2] )
  i3506.scale = new pc.Vec3( i3507[3], i3507[4], i3507[5] )
  i3506.rotation = new pc.Quat(i3507[6], i3507[7], i3507[8], i3507[9])
  return i3506
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i3508 = root || request.c( 'HeartEffect' )
  var i3509 = data
  i3508.defaultLifeTime = i3509[0]
  request.r(i3509[1], i3509[2], 0, i3508, 'tf')
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3511 = data
  i3510.color = new pc.Color(i3511[0], i3511[1], i3511[2], i3511[3])
  request.r(i3511[4], i3511[5], 0, i3510, 'sprite')
  i3510.flipX = !!i3511[6]
  i3510.flipY = !!i3511[7]
  i3510.drawMode = i3511[8]
  i3510.size = new pc.Vec2( i3511[9], i3511[10] )
  i3510.tileMode = i3511[11]
  i3510.adaptiveModeThreshold = i3511[12]
  i3510.maskInteraction = i3511[13]
  i3510.spriteSortPoint = i3511[14]
  i3510.enabled = !!i3511[15]
  request.r(i3511[16], i3511[17], 0, i3510, 'sharedMaterial')
  var i3513 = i3511[18]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3510.sharedMaterials = i3512
  i3510.receiveShadows = !!i3511[19]
  i3510.shadowCastingMode = i3511[20]
  i3510.sortingLayerID = i3511[21]
  i3510.sortingOrder = i3511[22]
  i3510.lightmapIndex = i3511[23]
  i3510.lightmapSceneIndex = i3511[24]
  i3510.lightmapScaleOffset = new pc.Vec4( i3511[25], i3511[26], i3511[27], i3511[28] )
  i3510.lightProbeUsage = i3511[29]
  i3510.reflectionProbeUsage = i3511[30]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3517 = data
  i3516.name = i3517[0]
  i3516.tagId = i3517[1]
  i3516.enabled = !!i3517[2]
  i3516.isStatic = !!i3517[3]
  i3516.layer = i3517[4]
  return i3516
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i3518 = root || request.c( 'HeartBreakEffect' )
  var i3519 = data
  i3518.defaultLifeTime = i3519[0]
  request.r(i3519[1], i3519[2], 0, i3518, 'tf')
  return i3518
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i3520 = root || request.c( 'BlinkEffect' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'tf')
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3523 = data
  request.r(i3523[0], i3523[1], 0, i3522, 'mesh')
  i3522.meshCount = i3523[2]
  i3522.activeVertexStreamsCount = i3523[3]
  i3522.alignment = i3523[4]
  i3522.renderMode = i3523[5]
  i3522.sortMode = i3523[6]
  i3522.lengthScale = i3523[7]
  i3522.velocityScale = i3523[8]
  i3522.cameraVelocityScale = i3523[9]
  i3522.normalDirection = i3523[10]
  i3522.sortingFudge = i3523[11]
  i3522.minParticleSize = i3523[12]
  i3522.maxParticleSize = i3523[13]
  i3522.pivot = new pc.Vec3( i3523[14], i3523[15], i3523[16] )
  request.r(i3523[17], i3523[18], 0, i3522, 'trailMaterial')
  i3522.applyActiveColorSpace = !!i3523[19]
  i3522.enabled = !!i3523[20]
  request.r(i3523[21], i3523[22], 0, i3522, 'sharedMaterial')
  var i3525 = i3523[23]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 2) {
  request.r(i3525[i + 0], i3525[i + 1], 2, i3524, '')
  }
  i3522.sharedMaterials = i3524
  i3522.receiveShadows = !!i3523[24]
  i3522.shadowCastingMode = i3523[25]
  i3522.sortingLayerID = i3523[26]
  i3522.sortingOrder = i3523[27]
  i3522.lightmapIndex = i3523[28]
  i3522.lightmapSceneIndex = i3523[29]
  i3522.lightmapScaleOffset = new pc.Vec4( i3523[30], i3523[31], i3523[32], i3523[33] )
  i3522.lightProbeUsage = i3523[34]
  i3522.reflectionProbeUsage = i3523[35]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3527 = data
  i3526.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3527[0], i3526.main)
  i3526.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3527[1], i3526.colorBySpeed)
  i3526.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3527[2], i3526.colorOverLifetime)
  i3526.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3527[3], i3526.emission)
  i3526.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3527[4], i3526.rotationBySpeed)
  i3526.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3527[5], i3526.rotationOverLifetime)
  i3526.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3527[6], i3526.shape)
  i3526.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3527[7], i3526.sizeBySpeed)
  i3526.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3527[8], i3526.sizeOverLifetime)
  i3526.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3527[9], i3526.textureSheetAnimation)
  i3526.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3527[10], i3526.velocityOverLifetime)
  i3526.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3527[11], i3526.noise)
  i3526.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3527[12], i3526.inheritVelocity)
  i3526.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3527[13], i3526.forceOverLifetime)
  i3526.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3527[14], i3526.limitVelocityOverLifetime)
  i3526.useAutoRandomSeed = !!i3527[15]
  i3526.randomSeed = i3527[16]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3528 = root || new pc.ParticleSystemMain()
  var i3529 = data
  i3528.duration = i3529[0]
  i3528.loop = !!i3529[1]
  i3528.prewarm = !!i3529[2]
  i3528.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[3], i3528.startDelay)
  i3528.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[4], i3528.startLifetime)
  i3528.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[5], i3528.startSpeed)
  i3528.startSize3D = !!i3529[6]
  i3528.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[7], i3528.startSizeX)
  i3528.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[8], i3528.startSizeY)
  i3528.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[9], i3528.startSizeZ)
  i3528.startRotation3D = !!i3529[10]
  i3528.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[11], i3528.startRotationX)
  i3528.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[12], i3528.startRotationY)
  i3528.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[13], i3528.startRotationZ)
  i3528.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3529[14], i3528.startColor)
  i3528.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[15], i3528.gravityModifier)
  i3528.simulationSpace = i3529[16]
  request.r(i3529[17], i3529[18], 0, i3528, 'customSimulationSpace')
  i3528.simulationSpeed = i3529[19]
  i3528.useUnscaledTime = !!i3529[20]
  i3528.scalingMode = i3529[21]
  i3528.playOnAwake = !!i3529[22]
  i3528.maxParticles = i3529[23]
  i3528.emitterVelocityMode = i3529[24]
  i3528.stopAction = i3529[25]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3530 = root || new pc.MinMaxCurve()
  var i3531 = data
  i3530.mode = i3531[0]
  i3530.curveMin = new pc.AnimationCurve( { keys_flow: i3531[1] } )
  i3530.curveMax = new pc.AnimationCurve( { keys_flow: i3531[2] } )
  i3530.curveMultiplier = i3531[3]
  i3530.constantMin = i3531[4]
  i3530.constantMax = i3531[5]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3532 = root || new pc.MinMaxGradient()
  var i3533 = data
  i3532.mode = i3533[0]
  i3532.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3533[1], i3532.gradientMin)
  i3532.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3533[2], i3532.gradientMax)
  i3532.colorMin = new pc.Color(i3533[3], i3533[4], i3533[5], i3533[6])
  i3532.colorMax = new pc.Color(i3533[7], i3533[8], i3533[9], i3533[10])
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3535 = data
  i3534.mode = i3535[0]
  var i3537 = i3535[1]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3537[i + 0]) );
  }
  i3534.colorKeys = i3536
  var i3539 = i3535[2]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3539[i + 0]) );
  }
  i3534.alphaKeys = i3538
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3540 = root || new pc.ParticleSystemColorBySpeed()
  var i3541 = data
  i3540.enabled = !!i3541[0]
  i3540.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3541[1], i3540.color)
  i3540.range = new pc.Vec2( i3541[2], i3541[3] )
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3545 = data
  i3544.color = new pc.Color(i3545[0], i3545[1], i3545[2], i3545[3])
  i3544.time = i3545[4]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3549 = data
  i3548.alpha = i3549[0]
  i3548.time = i3549[1]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3550 = root || new pc.ParticleSystemColorOverLifetime()
  var i3551 = data
  i3550.enabled = !!i3551[0]
  i3550.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3551[1], i3550.color)
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3552 = root || new pc.ParticleSystemEmitter()
  var i3553 = data
  i3552.enabled = !!i3553[0]
  i3552.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[1], i3552.rateOverTime)
  i3552.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[2], i3552.rateOverDistance)
  var i3555 = i3553[3]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3555[i + 0]) );
  }
  i3552.bursts = i3554
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3558 = root || new pc.ParticleSystemBurst()
  var i3559 = data
  i3558.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3559[0], i3558.count)
  i3558.cycleCount = i3559[1]
  i3558.minCount = i3559[2]
  i3558.maxCount = i3559[3]
  i3558.repeatInterval = i3559[4]
  i3558.time = i3559[5]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3560 = root || new pc.ParticleSystemRotationBySpeed()
  var i3561 = data
  i3560.enabled = !!i3561[0]
  i3560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[1], i3560.x)
  i3560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[2], i3560.y)
  i3560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[3], i3560.z)
  i3560.separateAxes = !!i3561[4]
  i3560.range = new pc.Vec2( i3561[5], i3561[6] )
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3562 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3563 = data
  i3562.enabled = !!i3563[0]
  i3562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[1], i3562.x)
  i3562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[2], i3562.y)
  i3562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[3], i3562.z)
  i3562.separateAxes = !!i3563[4]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3564 = root || new pc.ParticleSystemShape()
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.shapeType = i3565[1]
  i3564.randomDirectionAmount = i3565[2]
  i3564.sphericalDirectionAmount = i3565[3]
  i3564.randomPositionAmount = i3565[4]
  i3564.alignToDirection = !!i3565[5]
  i3564.radius = i3565[6]
  i3564.radiusMode = i3565[7]
  i3564.radiusSpread = i3565[8]
  i3564.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[9], i3564.radiusSpeed)
  i3564.radiusThickness = i3565[10]
  i3564.angle = i3565[11]
  i3564.length = i3565[12]
  i3564.boxThickness = new pc.Vec3( i3565[13], i3565[14], i3565[15] )
  i3564.meshShapeType = i3565[16]
  request.r(i3565[17], i3565[18], 0, i3564, 'mesh')
  request.r(i3565[19], i3565[20], 0, i3564, 'meshRenderer')
  request.r(i3565[21], i3565[22], 0, i3564, 'skinnedMeshRenderer')
  i3564.useMeshMaterialIndex = !!i3565[23]
  i3564.meshMaterialIndex = i3565[24]
  i3564.useMeshColors = !!i3565[25]
  i3564.normalOffset = i3565[26]
  i3564.arc = i3565[27]
  i3564.arcMode = i3565[28]
  i3564.arcSpread = i3565[29]
  i3564.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[30], i3564.arcSpeed)
  i3564.donutRadius = i3565[31]
  i3564.position = new pc.Vec3( i3565[32], i3565[33], i3565[34] )
  i3564.rotation = new pc.Vec3( i3565[35], i3565[36], i3565[37] )
  i3564.scale = new pc.Vec3( i3565[38], i3565[39], i3565[40] )
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemSizeBySpeed()
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[1], i3566.x)
  i3566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[2], i3566.y)
  i3566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[3], i3566.z)
  i3566.separateAxes = !!i3567[4]
  i3566.range = new pc.Vec2( i3567[5], i3567[6] )
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[1], i3568.x)
  i3568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[2], i3568.y)
  i3568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.z)
  i3568.separateAxes = !!i3569[4]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3570 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.mode = i3571[1]
  i3570.animation = i3571[2]
  i3570.numTilesX = i3571[3]
  i3570.numTilesY = i3571[4]
  i3570.useRandomRow = !!i3571[5]
  i3570.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[6], i3570.frameOverTime)
  i3570.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[7], i3570.startFrame)
  i3570.cycleCount = i3571[8]
  i3570.rowIndex = i3571[9]
  i3570.flipU = i3571[10]
  i3570.flipV = i3571[11]
  i3570.spriteCount = i3571[12]
  var i3573 = i3571[13]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3570.sprites = i3572
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3576 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3577 = data
  i3576.enabled = !!i3577[0]
  i3576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[1], i3576.x)
  i3576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[2], i3576.y)
  i3576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[3], i3576.z)
  i3576.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[4], i3576.radial)
  i3576.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[5], i3576.speedModifier)
  i3576.space = i3577[6]
  i3576.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[7], i3576.orbitalX)
  i3576.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[8], i3576.orbitalY)
  i3576.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[9], i3576.orbitalZ)
  i3576.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[10], i3576.orbitalOffsetX)
  i3576.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[11], i3576.orbitalOffsetY)
  i3576.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[12], i3576.orbitalOffsetZ)
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3578 = root || new pc.ParticleSystemNoise()
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.separateAxes = !!i3579[1]
  i3578.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[2], i3578.strengthX)
  i3578.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[3], i3578.strengthY)
  i3578.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[4], i3578.strengthZ)
  i3578.frequency = i3579[5]
  i3578.damping = !!i3579[6]
  i3578.octaveCount = i3579[7]
  i3578.octaveMultiplier = i3579[8]
  i3578.octaveScale = i3579[9]
  i3578.quality = i3579[10]
  i3578.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[11], i3578.scrollSpeed)
  i3578.scrollSpeedMultiplier = i3579[12]
  i3578.remapEnabled = !!i3579[13]
  i3578.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[14], i3578.remapX)
  i3578.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[15], i3578.remapY)
  i3578.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[16], i3578.remapZ)
  i3578.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[17], i3578.positionAmount)
  i3578.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[18], i3578.rotationAmount)
  i3578.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[19], i3578.sizeAmount)
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3580 = root || new pc.ParticleSystemInheritVelocity()
  var i3581 = data
  i3580.enabled = !!i3581[0]
  i3580.mode = i3581[1]
  i3580.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[2], i3580.curve)
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3582 = root || new pc.ParticleSystemForceOverLifetime()
  var i3583 = data
  i3582.enabled = !!i3583[0]
  i3582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3583[1], i3582.x)
  i3582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3583[2], i3582.y)
  i3582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3583[3], i3582.z)
  i3582.space = i3583[4]
  i3582.randomized = !!i3583[5]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3584 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3585 = data
  i3584.enabled = !!i3585[0]
  i3584.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[1], i3584.limit)
  i3584.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[2], i3584.limitX)
  i3584.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[3], i3584.limitY)
  i3584.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[4], i3584.limitZ)
  i3584.dampen = i3585[5]
  i3584.separateAxes = !!i3585[6]
  i3584.space = i3585[7]
  i3584.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[8], i3584.drag)
  i3584.multiplyDragByParticleSize = !!i3585[9]
  i3584.multiplyDragByParticleVelocity = !!i3585[10]
  return i3584
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i3586 = root || request.c( 'StarExploreFX' )
  var i3587 = data
  request.r(i3587[0], i3587[1], 0, i3586, 'tf')
  return i3586
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i3588 = root || request.c( 'ProgressBar' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'fillTransform')
  request.r(i3589[2], i3589[3], 0, i3588, 'tf')
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3591 = data
  i3590.pivot = new pc.Vec2( i3591[0], i3591[1] )
  i3590.anchorMin = new pc.Vec2( i3591[2], i3591[3] )
  i3590.anchorMax = new pc.Vec2( i3591[4], i3591[5] )
  i3590.sizeDelta = new pc.Vec2( i3591[6], i3591[7] )
  i3590.anchoredPosition3D = new pc.Vec3( i3591[8], i3591[9], i3591[10] )
  i3590.rotation = new pc.Quat(i3591[11], i3591[12], i3591[13], i3591[14])
  i3590.scale = new pc.Vec3( i3591[15], i3591[16], i3591[17] )
  return i3590
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i3592 = root || request.c( 'ClockTimer' )
  var i3593 = data
  request.r(i3593[0], i3593[1], 0, i3592, 'fillImage')
  request.r(i3593[2], i3593[3], 0, i3592, 'tf')
  i3592.spawnZoomDuration = i3593[4]
  i3592.despawnZoomDuration = i3593[5]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3595 = data
  i3594.cullTransparentMesh = !!i3595[0]
  return i3594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.UI.Image' )
  var i3597 = data
  request.r(i3597[0], i3597[1], 0, i3596, 'm_Sprite')
  i3596.m_Type = i3597[2]
  i3596.m_PreserveAspect = !!i3597[3]
  i3596.m_FillCenter = !!i3597[4]
  i3596.m_FillMethod = i3597[5]
  i3596.m_FillAmount = i3597[6]
  i3596.m_FillClockwise = !!i3597[7]
  i3596.m_FillOrigin = i3597[8]
  i3596.m_UseSpriteMesh = !!i3597[9]
  i3596.m_PixelsPerUnitMultiplier = i3597[10]
  request.r(i3597[11], i3597[12], 0, i3596, 'm_Material')
  i3596.m_Maskable = !!i3597[13]
  i3596.m_Color = new pc.Color(i3597[14], i3597[15], i3597[16], i3597[17])
  i3596.m_RaycastTarget = !!i3597[18]
  i3596.m_RaycastPadding = new pc.Vec4( i3597[19], i3597[20], i3597[21], i3597[22] )
  return i3596
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i3598 = root || request.c( 'FlourSmoke' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'tf')
  return i3598
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i3600 = root || request.c( 'WaterSplash' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'tf')
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3603 = data
  i3602.name = i3603[0]
  i3602.index = i3603[1]
  i3602.startup = !!i3603[2]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3605 = data
  i3604.planeDistance = i3605[0]
  i3604.referencePixelsPerUnit = i3605[1]
  i3604.isFallbackOverlay = !!i3605[2]
  i3604.renderMode = i3605[3]
  i3604.renderOrder = i3605[4]
  i3604.sortingLayerName = i3605[5]
  i3604.sortingOrder = i3605[6]
  i3604.scaleFactor = i3605[7]
  request.r(i3605[8], i3605[9], 0, i3604, 'worldCamera')
  i3604.overrideSorting = !!i3605[10]
  i3604.pixelPerfect = !!i3605[11]
  i3604.targetDisplay = i3605[12]
  i3604.overridePixelPerfect = !!i3605[13]
  i3604.enabled = !!i3605[14]
  return i3604
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3607 = data
  i3606.m_UiScaleMode = i3607[0]
  i3606.m_ReferencePixelsPerUnit = i3607[1]
  i3606.m_ScaleFactor = i3607[2]
  i3606.m_ReferenceResolution = new pc.Vec2( i3607[3], i3607[4] )
  i3606.m_ScreenMatchMode = i3607[5]
  i3606.m_MatchWidthOrHeight = i3607[6]
  i3606.m_PhysicalUnit = i3607[7]
  i3606.m_FallbackScreenDPI = i3607[8]
  i3606.m_DefaultSpriteDPI = i3607[9]
  i3606.m_DynamicPixelsPerUnit = i3607[10]
  i3606.m_PresetInfoIsWorld = !!i3607[11]
  return i3606
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3609 = data
  i3608.m_IgnoreReversedGraphics = !!i3609[0]
  i3608.m_BlockingObjects = i3609[1]
  i3608.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3609[2] )
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3611 = data
  request.r(i3611[0], i3611[1], 0, i3610, 'animatorController')
  request.r(i3611[2], i3611[3], 0, i3610, 'avatar')
  i3610.updateMode = i3611[4]
  i3610.hasTransformHierarchy = !!i3611[5]
  i3610.applyRootMotion = !!i3611[6]
  var i3613 = i3611[7]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3610.humanBones = i3612
  i3610.enabled = !!i3611[8]
  return i3610
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3617 = data
  i3616.m_hasFontAssetChanged = !!i3617[0]
  request.r(i3617[1], i3617[2], 0, i3616, 'm_baseMaterial')
  i3616.m_maskOffset = new pc.Vec4( i3617[3], i3617[4], i3617[5], i3617[6] )
  i3616.m_text = i3617[7]
  i3616.m_isRightToLeft = !!i3617[8]
  request.r(i3617[9], i3617[10], 0, i3616, 'm_fontAsset')
  request.r(i3617[11], i3617[12], 0, i3616, 'm_sharedMaterial')
  var i3619 = i3617[13]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 2) {
  request.r(i3619[i + 0], i3619[i + 1], 2, i3618, '')
  }
  i3616.m_fontSharedMaterials = i3618
  request.r(i3617[14], i3617[15], 0, i3616, 'm_fontMaterial')
  var i3621 = i3617[16]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 2, i3620, '')
  }
  i3616.m_fontMaterials = i3620
  i3616.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3617[17], i3617[18], i3617[19], i3617[20])
  i3616.m_fontColor = new pc.Color(i3617[21], i3617[22], i3617[23], i3617[24])
  i3616.m_enableVertexGradient = !!i3617[25]
  i3616.m_colorMode = i3617[26]
  i3616.m_fontColorGradient = request.d('TMPro.VertexGradient', i3617[27], i3616.m_fontColorGradient)
  request.r(i3617[28], i3617[29], 0, i3616, 'm_fontColorGradientPreset')
  request.r(i3617[30], i3617[31], 0, i3616, 'm_spriteAsset')
  i3616.m_tintAllSprites = !!i3617[32]
  request.r(i3617[33], i3617[34], 0, i3616, 'm_StyleSheet')
  i3616.m_TextStyleHashCode = i3617[35]
  i3616.m_overrideHtmlColors = !!i3617[36]
  i3616.m_faceColor = UnityEngine.Color32.ConstructColor(i3617[37], i3617[38], i3617[39], i3617[40])
  i3616.m_fontSize = i3617[41]
  i3616.m_fontSizeBase = i3617[42]
  i3616.m_fontWeight = i3617[43]
  i3616.m_enableAutoSizing = !!i3617[44]
  i3616.m_fontSizeMin = i3617[45]
  i3616.m_fontSizeMax = i3617[46]
  i3616.m_fontStyle = i3617[47]
  i3616.m_HorizontalAlignment = i3617[48]
  i3616.m_VerticalAlignment = i3617[49]
  i3616.m_textAlignment = i3617[50]
  i3616.m_characterSpacing = i3617[51]
  i3616.m_wordSpacing = i3617[52]
  i3616.m_lineSpacing = i3617[53]
  i3616.m_lineSpacingMax = i3617[54]
  i3616.m_paragraphSpacing = i3617[55]
  i3616.m_charWidthMaxAdj = i3617[56]
  i3616.m_TextWrappingMode = i3617[57]
  i3616.m_wordWrappingRatios = i3617[58]
  i3616.m_overflowMode = i3617[59]
  request.r(i3617[60], i3617[61], 0, i3616, 'm_linkedTextComponent')
  request.r(i3617[62], i3617[63], 0, i3616, 'parentLinkedComponent')
  i3616.m_enableKerning = !!i3617[64]
  var i3623 = i3617[65]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.add(i3623[i + 0]);
  }
  i3616.m_ActiveFontFeatures = i3622
  i3616.m_enableExtraPadding = !!i3617[66]
  i3616.checkPaddingRequired = !!i3617[67]
  i3616.m_isRichText = !!i3617[68]
  i3616.m_parseCtrlCharacters = !!i3617[69]
  i3616.m_isOrthographic = !!i3617[70]
  i3616.m_isCullingEnabled = !!i3617[71]
  i3616.m_horizontalMapping = i3617[72]
  i3616.m_verticalMapping = i3617[73]
  i3616.m_uvLineOffset = i3617[74]
  i3616.m_geometrySortingOrder = i3617[75]
  i3616.m_IsTextObjectScaleStatic = !!i3617[76]
  i3616.m_VertexBufferAutoSizeReduction = !!i3617[77]
  i3616.m_useMaxVisibleDescender = !!i3617[78]
  i3616.m_pageToDisplay = i3617[79]
  i3616.m_margin = new pc.Vec4( i3617[80], i3617[81], i3617[82], i3617[83] )
  i3616.m_isUsingLegacyAnimationComponent = !!i3617[84]
  i3616.m_isVolumetricText = !!i3617[85]
  request.r(i3617[86], i3617[87], 0, i3616, 'm_Material')
  i3616.m_EmojiFallbackSupport = !!i3617[88]
  i3616.m_Maskable = !!i3617[89]
  i3616.m_Color = new pc.Color(i3617[90], i3617[91], i3617[92], i3617[93])
  i3616.m_RaycastTarget = !!i3617[94]
  i3616.m_RaycastPadding = new pc.Vec4( i3617[95], i3617[96], i3617[97], i3617[98] )
  return i3616
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3624 = root || request.c( 'TMPro.VertexGradient' )
  var i3625 = data
  i3624.topLeft = new pc.Color(i3625[0], i3625[1], i3625[2], i3625[3])
  i3624.topRight = new pc.Color(i3625[4], i3625[5], i3625[6], i3625[7])
  i3624.bottomLeft = new pc.Color(i3625[8], i3625[9], i3625[10], i3625[11])
  i3624.bottomRight = new pc.Color(i3625[12], i3625[13], i3625[14], i3625[15])
  return i3624
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.UI.Button' )
  var i3629 = data
  i3628.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3629[0], i3628.m_OnClick)
  i3628.m_Navigation = request.d('UnityEngine.UI.Navigation', i3629[1], i3628.m_Navigation)
  i3628.m_Transition = i3629[2]
  i3628.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3629[3], i3628.m_Colors)
  i3628.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3629[4], i3628.m_SpriteState)
  i3628.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3629[5], i3628.m_AnimationTriggers)
  i3628.m_Interactable = !!i3629[6]
  request.r(i3629[7], i3629[8], 0, i3628, 'm_TargetGraphic')
  return i3628
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3631 = data
  i3630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3631[0], i3630.m_PersistentCalls)
  return i3630
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3633 = data
  var i3635 = i3633[0]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.add(request.d('UnityEngine.Events.PersistentCall', i3635[i + 0]));
  }
  i3632.m_Calls = i3634
  return i3632
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'm_Target')
  i3638.m_TargetAssemblyTypeName = i3639[2]
  i3638.m_MethodName = i3639[3]
  i3638.m_Mode = i3639[4]
  i3638.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3639[5], i3638.m_Arguments)
  i3638.m_CallState = i3639[6]
  return i3638
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3641 = data
  request.r(i3641[0], i3641[1], 0, i3640, 'm_ObjectArgument')
  i3640.m_ObjectArgumentAssemblyTypeName = i3641[2]
  i3640.m_IntArgument = i3641[3]
  i3640.m_FloatArgument = i3641[4]
  i3640.m_StringArgument = i3641[5]
  i3640.m_BoolArgument = !!i3641[6]
  return i3640
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3642 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3643 = data
  i3642.m_Mode = i3643[0]
  i3642.m_WrapAround = !!i3643[1]
  request.r(i3643[2], i3643[3], 0, i3642, 'm_SelectOnUp')
  request.r(i3643[4], i3643[5], 0, i3642, 'm_SelectOnDown')
  request.r(i3643[6], i3643[7], 0, i3642, 'm_SelectOnLeft')
  request.r(i3643[8], i3643[9], 0, i3642, 'm_SelectOnRight')
  return i3642
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3644 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3645 = data
  i3644.m_NormalColor = new pc.Color(i3645[0], i3645[1], i3645[2], i3645[3])
  i3644.m_HighlightedColor = new pc.Color(i3645[4], i3645[5], i3645[6], i3645[7])
  i3644.m_PressedColor = new pc.Color(i3645[8], i3645[9], i3645[10], i3645[11])
  i3644.m_SelectedColor = new pc.Color(i3645[12], i3645[13], i3645[14], i3645[15])
  i3644.m_DisabledColor = new pc.Color(i3645[16], i3645[17], i3645[18], i3645[19])
  i3644.m_ColorMultiplier = i3645[20]
  i3644.m_FadeDuration = i3645[21]
  return i3644
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3647 = data
  request.r(i3647[0], i3647[1], 0, i3646, 'm_HighlightedSprite')
  request.r(i3647[2], i3647[3], 0, i3646, 'm_PressedSprite')
  request.r(i3647[4], i3647[5], 0, i3646, 'm_SelectedSprite')
  request.r(i3647[6], i3647[7], 0, i3646, 'm_DisabledSprite')
  return i3646
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3649 = data
  i3648.m_NormalTrigger = i3649[0]
  i3648.m_HighlightedTrigger = i3649[1]
  i3648.m_PressedTrigger = i3649[2]
  i3648.m_SelectedTrigger = i3649[3]
  i3648.m_DisabledTrigger = i3649[4]
  return i3648
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3650 = root || request.c( 'Ply_Pool' )
  var i3651 = data
  var i3653 = i3651[0]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Ply_Pool+PoolAmount', i3653[i + 0]) );
  }
  i3650.poolAmounts = i3652
  request.r(i3651[1], i3651[2], 0, i3650, 'poolHolder')
  return i3650
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3656 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3657 = data
  i3656.type = i3657[0]
  i3656.amount = i3657[1]
  request.r(i3657[2], i3657[3], 0, i3656, 'gameUnit')
  return i3656
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3658 = root || request.c( 'Ply_SoundManager' )
  var i3659 = data
  var i3661 = i3659[0]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Ply_SoundManager+FxAudio', i3661[i + 0]) );
  }
  i3658.fxAudios = i3660
  var i3663 = i3659[1]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 2) {
  request.r(i3663[i + 0], i3663[i + 1], 2, i3662, '')
  }
  i3658.audioClips = i3662
  request.r(i3659[2], i3659[3], 0, i3658, 'sound')
  return i3658
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i3666 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i3667 = data
  i3666.fxType = i3667[0]
  request.r(i3667[1], i3667[2], 0, i3666, 'audioClip')
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3671 = data
  request.r(i3671[0], i3671[1], 0, i3670, 'clip')
  request.r(i3671[2], i3671[3], 0, i3670, 'outputAudioMixerGroup')
  i3670.playOnAwake = !!i3671[4]
  i3670.loop = !!i3671[5]
  i3670.time = i3671[6]
  i3670.volume = i3671[7]
  i3670.pitch = i3671[8]
  i3670.enabled = !!i3671[9]
  return i3670
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3672 = root || request.c( 'GameManager' )
  var i3673 = data
  i3672.isPlaying = !!i3673[0]
  i3672.isTutorial = !!i3673[1]
  i3672.isGotoStore = !!i3673[2]
  i3672.isLoseGame = !!i3673[3]
  i3672.countMove = i3673[4]
  i3672.currentLayer = i3673[5]
  return i3672
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3674 = root || request.c( 'UIManager' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'winUI')
  request.r(i3675[2], i3675[3], 0, i3674, 'loseUI')
  request.r(i3675[4], i3675[5], 0, i3674, 'tutorial')
  request.r(i3675[6], i3675[7], 0, i3674, 'verticalUI')
  request.r(i3675[8], i3675[9], 0, i3674, 'horizontalUI')
  request.r(i3675[10], i3675[11], 0, i3674, 'downloadBtn')
  request.r(i3675[12], i3675[13], 0, i3674, 'horizontalDownloadBtn')
  i3674.isGoogleBuild = !!i3675[14]
  i3674.screenWidth = i3675[15]
  i3674.screenHeight = i3675[16]
  i3674.scaleHeightOnWidth = i3675[17]
  i3674.isVertical = !!i3675[18]
  i3674.isScreenVertical = !!i3675[19]
  request.r(i3675[20], i3675[21], 0, i3674, 'cam')
  i3674.verticalUIHeightOnWidthRatio = i3675[22]
  i3674.scaleCameraOnValidate = !!i3675[23]
  i3674.screenVerticalHeightOnWidthRatio = i3675[24]
  i3674.useContinuousScaling = !!i3675[25]
  i3674.baseOrthographicSize = i3675[26]
  i3674.baseAspect = i3675[27]
  i3674.landscapeSizeRatio = i3675[28]
  i3674.defaultPortraitSizeRatio = i3675[29]
  var i3677 = i3675[30]
  var i3676 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.add(request.d('ScreenScaleStep', i3677[i + 0]));
  }
  i3674.discreteScaleSteps = i3676
  i3674.usePerspectiveCamera = !!i3675[31]
  request.r(i3675[32], i3675[33], 0, i3674, 'perspectiveFocus')
  i3674.perspectiveFocusDistance = i3675[34]
  i3674.perspectivePadding = i3675[35]
  i3674.fitRendererBounds = !!i3675[36]
  request.r(i3675[37], i3675[38], 0, i3674, 'boundsRoot')
  var i3679 = i3675[39]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3679.length; i += 2) {
  request.r(i3679[i + 0], i3679[i + 1], 1, i3678, '')
  }
  i3674.boundsRenderers = i3678
  return i3674
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3682 = root || request.c( 'ScreenScaleStep' )
  var i3683 = data
  i3682.heightOnWidthRatio = i3683[0]
  i3682.orthographicSize = i3683[1]
  return i3682
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3686 = root || request.c( 'InputManager' )
  var i3687 = data
  i3686.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3687[0] )
  i3686.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3687[1] )
  i3686.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3687[2] )
  i3686.isDragging = !!i3687[3]
  return i3686
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i3688 = root || request.c( 'HandTutManager' )
  var i3689 = data
  var i3691 = i3689[0]
  var i3690 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3691.length; i += 2) {
  request.r(i3691[i + 0], i3691[i + 1], 1, i3690, '')
  }
  i3688.items = i3690
  request.r(i3689[1], i3689[2], 0, i3688, 'knife')
  request.r(i3689[3], i3689[4], 0, i3688, 'peeler')
  request.r(i3689[5], i3689[6], 0, i3688, 'handTutObject')
  request.r(i3689[7], i3689[8], 0, i3688, 'tapToCookObject')
  request.r(i3689[9], i3689[10], 0, i3688, 'oilItem')
  request.r(i3689[11], i3689[12], 0, i3688, 'stoveToggleEvent')
  request.r(i3689[13], i3689[14], 0, i3688, 'waterToggleEvent')
  request.r(i3689[15], i3689[16], 0, i3688, 'sinkBlock')
  var i3693 = i3689[17]
  var i3692 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i3693.length; i += 2) {
  request.r(i3693[i + 0], i3693[i + 1], 1, i3692, '')
  }
  i3688.itemsInWater = i3692
  i3688.noDelayItemCount = i3689[18]
  i3688.breakHeartNoDelayThreshold = i3689[19]
  i3688.showSinkWaterTutorialOnStart = !!i3689[20]
  i3688.waitForBowlIntro = !!i3689[21]
  i3688.idleDelay = i3689[22]
  i3688.moveDuration = i3689[23]
  i3688.dragFadeDuration = i3689[24]
  i3688.clickScaleDuration = i3689[25]
  i3688.waitAtEndDuration = i3689[26]
  i3688.handZPosition = i3689[27]
  i3688.clickScaleMultiplier = i3689[28]
  i3688.moveEase = i3689[29]
  return i3688
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i3698 = root || request.c( 'SortChildByZPos' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'transformToSort')
  var i3701 = i3699[2]
  var i3700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3701.length; i += 2) {
  request.r(i3701[i + 0], i3701[i + 1], 1, i3700, '')
  }
  i3698.childrenToSort = i3700
  i3698.zOffset = i3699[3]
  i3698.baseZ = i3699[4]
  return i3698
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i3704 = root || request.c( 'PhaseManager' )
  var i3705 = data
  var i3707 = i3705[0]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('PhaseData', i3707[i + 0]));
  }
  i3704.phases = i3706
  i3704.transitionDuration = i3705[1]
  i3704.delayBeforeNextPhase = i3705[2]
  i3704.offScreenLeftX = i3705[3]
  i3704.offScreenRightX = i3705[4]
  i3704.centerScreenX = i3705[5]
  request.r(i3705[6], i3705[7], 0, i3704, 'phaseTransitionObject')
  i3704.phaseTransitionObjectDuration = i3705[8]
  i3704.currentPhaseIndex = i3705[9]
  i3704.currentStepCount = i3705[10]
  return i3704
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i3710 = root || request.c( 'PhaseData' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'phaseObject')
  i3710.totalSteps = i3711[2]
  i3710.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i3711[3], i3710.onPhaseReady)
  return i3710
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3713 = data
  i3712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3713[0], i3712.m_PersistentCalls)
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3715 = data
  i3714.aspect = i3715[0]
  i3714.orthographic = !!i3715[1]
  i3714.orthographicSize = i3715[2]
  i3714.backgroundColor = new pc.Color(i3715[3], i3715[4], i3715[5], i3715[6])
  i3714.nearClipPlane = i3715[7]
  i3714.farClipPlane = i3715[8]
  i3714.fieldOfView = i3715[9]
  i3714.depth = i3715[10]
  i3714.clearFlags = i3715[11]
  i3714.cullingMask = i3715[12]
  i3714.rect = i3715[13]
  request.r(i3715[14], i3715[15], 0, i3714, 'targetTexture')
  i3714.usePhysicalProperties = !!i3715[16]
  i3714.focalLength = i3715[17]
  i3714.sensorSize = new pc.Vec2( i3715[18], i3715[19] )
  i3714.lensShift = new pc.Vec2( i3715[20], i3715[21] )
  i3714.gateFit = i3715[22]
  i3714.commandBufferCount = i3715[23]
  i3714.cameraType = i3715[24]
  i3714.enabled = !!i3715[25]
  return i3714
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3716 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'm_FirstSelected')
  i3716.m_sendNavigationEvents = !!i3717[2]
  i3716.m_DragThreshold = i3717[3]
  return i3716
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3718 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3719 = data
  i3718.m_HorizontalAxis = i3719[0]
  i3718.m_VerticalAxis = i3719[1]
  i3718.m_SubmitButton = i3719[2]
  i3718.m_CancelButton = i3719[3]
  i3718.m_InputActionsPerSecond = i3719[4]
  i3718.m_RepeatDelay = i3719[5]
  i3718.m_ForceModuleActive = !!i3719[6]
  i3718.m_SendPointerHoverToParent = !!i3719[7]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3721 = data
  i3720.center = new pc.Vec3( i3721[0], i3721[1], i3721[2] )
  i3720.radius = i3721[3]
  i3720.enabled = !!i3721[4]
  i3720.isTrigger = !!i3721[5]
  request.r(i3721[6], i3721[7], 0, i3720, 'material')
  return i3720
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i3722 = root || request.c( 'Ply_ToggleEvent' )
  var i3723 = data
  i3722.isOn = !!i3723[0]
  i3722.applyStateOnEnable = !!i3723[1]
  i3722.applyStateOnClick = !!i3723[2]
  request.r(i3723[3], i3723[4], 0, i3722, 'targetObject')
  i3722.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i3723[5], i3722.onTurnOn)
  i3722.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i3723[6], i3722.onTurnOff)
  return i3722
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i3724 = root || request.c( 'SinkBlock' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'sink')
  i3724.startsInside = !!i3725[2]
  i3724.insideTargetType = i3725[3]
  request.r(i3725[4], i3725[5], 0, i3724, 'insideDefaultTarget')
  i3724.outsideTargetType = i3725[6]
  request.r(i3725[7], i3725[8], 0, i3724, 'outsideDefaultTarget')
  i3724.isDone = !!i3725[9]
  i3724.onProcess = !!i3725[10]
  request.r(i3725[11], i3725[12], 0, i3724, 'itemDraggable')
  request.r(i3725[13], i3725[14], 0, i3724, 'itemClickable')
  request.r(i3725[15], i3725[16], 0, i3724, 'itemStirring')
  request.r(i3725[17], i3725[18], 0, i3724, 'itemKnifeSpriteMaskCutter')
  request.r(i3725[19], i3725[20], 0, i3724, 'itemSpriteMaskPainter')
  request.r(i3725[21], i3725[22], 0, i3724, 'itemMoveToTarget')
  request.r(i3725[23], i3725[24], 0, i3724, 'animator')
  i3724.itemType = i3725[25]
  request.r(i3725[26], i3725[27], 0, i3724, 'spriteRenderer')
  i3724.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3725[28], i3724.onKnifeIn)
  i3724.heartEffectScale = i3725[29]
  i3724.breakHeartEffectScale = i3725[30]
  i3724.blinkEffectScale = i3725[31]
  i3724.mergeEffectScale = i3725[32]
  i3724.playMoveToTargetFinishSound = !!i3725[33]
  i3724.moveToTargetFinishFxType = i3725[34]
  return i3724
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i3726 = root || request.c( 'ItemDraggable' )
  var i3727 = data
  i3726.isDraggable = !!i3727[0]
  request.r(i3727[1], i3727[2], 0, i3726, 'returnTransform')
  i3726.setParentToReturnTransform = !!i3727[3]
  i3726.returnToExactReturnTransformPosition = !!i3727[4]
  i3726.targetItemType = i3727[5]
  request.r(i3727[6], i3727[7], 0, i3726, 'item')
  i3726.checkState = !!i3727[8]
  request.r(i3727[9], i3727[10], 0, i3726, 'shadowObject')
  i3726.playReturnToStartFinishSound = !!i3727[11]
  i3726.returnToStartFinishFxType = i3727[12]
  i3726.spawnBreakHeartOnDropFail = !!i3727[13]
  i3726.playBeginDragSound = !!i3727[14]
  i3726.beginDragFxType = i3727[15]
  i3726.liftOffset = i3727[16]
  i3726.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i3727[17], i3726.onBeginDrag)
  i3726.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i3727[18], i3726.onDropSuccess)
  i3726.onDropFail = request.d('UnityEngine.Events.UnityEvent', i3727[19], i3726.onDropFail)
  return i3726
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i3728 = root || request.c( 'ItemMoveToTarget' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'defaultTarget')
  i3728.duration = i3729[2]
  i3728.easeType = i3729[3]
  i3728.moveType = i3729[4]
  i3728.jumpPower = i3729[5]
  i3728.numJumps = i3729[6]
  i3728.rotate360DuringJump = !!i3729[7]
  i3728.flipRotate = !!i3729[8]
  i3728.angleRotate = i3729[9]
  i3728.setParentToTarget = !!i3729[10]
  i3728.onComplete = request.d('UnityEngine.Events.UnityEvent', i3729[11], i3728.onComplete)
  i3728.lockInputWhileMoving = !!i3729[12]
  i3728.resetParentBeforeMove = !!i3729[13]
  return i3728
}

Deserializers["Sink"] = function (request, data, root) {
  var i3730 = root || request.c( 'Sink' )
  var i3731 = data
  i3730.isClose = !!i3731[0]
  i3730.isWaterDrop = !!i3731[1]
  i3730.isWaterIn = !!i3731[2]
  request.r(i3731[3], i3731[4], 0, i3730, 'waterSplashPos')
  request.r(i3731[5], i3731[6], 0, i3730, 'faucetAnimator')
  request.r(i3731[7], i3731[8], 0, i3730, 'basinAnimator')
  request.r(i3731[9], i3731[10], 0, i3730, 'waterDrop')
  request.r(i3731[11], i3731[12], 0, i3730, 'waterIn')
  request.r(i3731[13], i3731[14], 0, i3730, 'basinWaterRenderer')
  i3730.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i3731[15], i3731[16], i3731[17], i3731[18])
  i3730.fullWaterRect = UnityEngine.Rect.MinMaxRect(i3731[19], i3731[20], i3731[21], i3731[22])
  i3730.waterRiseDuration = i3731[23]
  i3730.waterFallDuration = i3731[24]
  i3730.waterRiseEase = i3731[25]
  i3730.waterFallEase = i3731[26]
  i3730.drawWaterRects = !!i3731[27]
  i3730.emptyRectColor = new pc.Color(i3731[28], i3731[29], i3731[30], i3731[31])
  i3730.fullRectColor = new pc.Color(i3731[32], i3731[33], i3731[34], i3731[35])
  request.r(i3731[36], i3731[37], 0, i3730, 'waterDropTransform')
  i3730.emptyWaterDropPoint = new pc.Vec3( i3731[38], i3731[39], i3731[40] )
  i3730.fullWaterDropPoint = new pc.Vec3( i3731[41], i3731[42], i3731[43] )
  i3730.drawWaterDropPoints = !!i3731[44]
  i3730.waterDropPointRadius = i3731[45]
  i3730.emptyWaterDropPointColor = new pc.Color(i3731[46], i3731[47], i3731[48], i3731[49])
  i3730.fullWaterDropPointColor = new pc.Color(i3731[50], i3731[51], i3731[52], i3731[53])
  var i3733 = i3731[54]
  var i3732 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i3733.length; i += 2) {
  request.r(i3733[i + 0], i3733[i + 1], 1, i3732, '')
  }
  i3730.inWaterItems = i3732
  i3730.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i3731[55], i3730.onWaterIn)
  i3730.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i3731[56], i3730.onNoWaterIn)
  i3730.isDone = !!i3731[57]
  i3730.onProcess = !!i3731[58]
  request.r(i3731[59], i3731[60], 0, i3730, 'itemDraggable')
  request.r(i3731[61], i3731[62], 0, i3730, 'itemClickable')
  request.r(i3731[63], i3731[64], 0, i3730, 'itemStirring')
  request.r(i3731[65], i3731[66], 0, i3730, 'itemKnifeSpriteMaskCutter')
  request.r(i3731[67], i3731[68], 0, i3730, 'itemSpriteMaskPainter')
  request.r(i3731[69], i3731[70], 0, i3730, 'itemMoveToTarget')
  request.r(i3731[71], i3731[72], 0, i3730, 'animator')
  i3730.itemType = i3731[73]
  request.r(i3731[74], i3731[75], 0, i3730, 'spriteRenderer')
  i3730.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3731[76], i3730.onKnifeIn)
  i3730.heartEffectScale = i3731[77]
  i3730.breakHeartEffectScale = i3731[78]
  i3730.blinkEffectScale = i3731[79]
  i3730.mergeEffectScale = i3731[80]
  i3730.playMoveToTargetFinishSound = !!i3731[81]
  i3730.moveToTargetFinishFxType = i3731[82]
  i3730.waterState = i3731[83]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3735 = data
  i3734.center = new pc.Vec3( i3735[0], i3735[1], i3735[2] )
  i3734.size = new pc.Vec3( i3735[3], i3735[4], i3735[5] )
  i3734.enabled = !!i3735[6]
  i3734.isTrigger = !!i3735[7]
  request.r(i3735[8], i3735[9], 0, i3734, 'material')
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3737 = data
  i3736.frontSortingLayerID = i3737[0]
  i3736.frontSortingOrder = i3737[1]
  i3736.backSortingLayerID = i3737[2]
  i3736.backSortingOrder = i3737[3]
  i3736.alphaCutoff = i3737[4]
  request.r(i3737[5], i3737[6], 0, i3736, 'sprite')
  i3736.tileMode = i3737[7]
  i3736.isCustomRangeActive = !!i3737[8]
  i3736.spriteSortPoint = i3737[9]
  i3736.enabled = !!i3737[10]
  request.r(i3737[11], i3737[12], 0, i3736, 'sharedMaterial')
  var i3739 = i3737[13]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3736.sharedMaterials = i3738
  i3736.receiveShadows = !!i3737[14]
  i3736.shadowCastingMode = i3737[15]
  i3736.sortingLayerID = i3737[16]
  i3736.sortingOrder = i3737[17]
  i3736.lightmapIndex = i3737[18]
  i3736.lightmapSceneIndex = i3737[19]
  i3736.lightmapScaleOffset = new pc.Vec4( i3737[20], i3737[21], i3737[22], i3737[23] )
  i3736.lightProbeUsage = i3737[24]
  i3736.reflectionProbeUsage = i3737[25]
  return i3736
}

Deserializers["Item"] = function (request, data, root) {
  var i3740 = root || request.c( 'Item' )
  var i3741 = data
  i3740.isDone = !!i3741[0]
  i3740.onProcess = !!i3741[1]
  request.r(i3741[2], i3741[3], 0, i3740, 'itemDraggable')
  request.r(i3741[4], i3741[5], 0, i3740, 'itemClickable')
  request.r(i3741[6], i3741[7], 0, i3740, 'itemStirring')
  request.r(i3741[8], i3741[9], 0, i3740, 'itemKnifeSpriteMaskCutter')
  request.r(i3741[10], i3741[11], 0, i3740, 'itemSpriteMaskPainter')
  request.r(i3741[12], i3741[13], 0, i3740, 'itemMoveToTarget')
  request.r(i3741[14], i3741[15], 0, i3740, 'animator')
  i3740.itemType = i3741[16]
  request.r(i3741[17], i3741[18], 0, i3740, 'spriteRenderer')
  i3740.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3741[19], i3740.onKnifeIn)
  i3740.heartEffectScale = i3741[20]
  i3740.breakHeartEffectScale = i3741[21]
  i3740.blinkEffectScale = i3741[22]
  i3740.mergeEffectScale = i3741[23]
  i3740.playMoveToTargetFinishSound = !!i3741[24]
  i3740.moveToTargetFinishFxType = i3741[25]
  return i3740
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i3742 = root || request.c( 'Ply_BobEffect' )
  var i3743 = data
  i3742.playOnEnable = !!i3743[0]
  i3742.useLocalMove = !!i3743[1]
  i3742.bobOffset = new pc.Vec3( i3743[2], i3743[3], i3743[4] )
  i3742.duration = i3743[5]
  i3742.ease = i3743[6]
  return i3742
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i3744 = root || request.c( 'Ply_TimerEvent' )
  var i3745 = data
  i3744.duration = i3745[0]
  i3744.playOnEnable = !!i3745[1]
  i3744.ignoreTimeScale = !!i3745[2]
  i3744.autoDisableOnComplete = !!i3745[3]
  i3744.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i3745[4], i3744.onTimerStart)
  i3744.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i3745[5], i3744.onTimerComplete)
  i3744.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i3745[6], i3744.onTimerStop)
  return i3744
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i3746 = root || request.c( 'InWaterItem' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'waterTarget')
  request.r(i3747[2], i3747[3], 0, i3746, 'cuttingBoardTarget')
  request.r(i3747[4], i3747[5], 0, i3746, 'plateTarget')
  var i3749 = i3747[6]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 2) {
  request.r(i3749[i + 0], i3749[i + 1], 2, i3748, '')
  }
  i3746.childObject = i3748
  request.r(i3747[7], i3747[8], 0, i3746, 'ply_TimerEvent')
  request.r(i3747[9], i3747[10], 0, i3746, 'ply_BobEffect')
  request.r(i3747[11], i3747[12], 0, i3746, 'collider1')
  request.r(i3747[13], i3747[14], 0, i3746, 'sink')
  i3746.isInWater = !!i3747[15]
  i3746.isOnCuttingBoard = !!i3747[16]
  i3746.isOnPlate = !!i3747[17]
  i3746.isClean = !!i3747[18]
  i3746.isCutDone = !!i3747[19]
  i3746.cuttingBoardColliderRadiusMultiplier = i3747[20]
  i3746.jumpToPlatePower = i3747[21]
  i3746.jumpToPlateDuration = i3747[22]
  i3746.jumpToPlateAfterCutDone = !!i3747[23]
  request.r(i3747[24], i3747[25], 0, i3746, 'plateFoodShadow')
  i3746.platePunchScale = new pc.Vec3( i3747[26], i3747[27], i3747[28] )
  i3746.platePunchDuration = i3747[29]
  i3746.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i3747[30], i3746.onMoveToCuttingBoardComplete)
  i3746.isDone = !!i3747[31]
  i3746.onProcess = !!i3747[32]
  request.r(i3747[33], i3747[34], 0, i3746, 'itemDraggable')
  request.r(i3747[35], i3747[36], 0, i3746, 'itemClickable')
  request.r(i3747[37], i3747[38], 0, i3746, 'itemStirring')
  request.r(i3747[39], i3747[40], 0, i3746, 'itemKnifeSpriteMaskCutter')
  request.r(i3747[41], i3747[42], 0, i3746, 'itemSpriteMaskPainter')
  request.r(i3747[43], i3747[44], 0, i3746, 'itemMoveToTarget')
  request.r(i3747[45], i3747[46], 0, i3746, 'animator')
  i3746.itemType = i3747[47]
  request.r(i3747[48], i3747[49], 0, i3746, 'spriteRenderer')
  i3746.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3747[50], i3746.onKnifeIn)
  i3746.heartEffectScale = i3747[51]
  i3746.breakHeartEffectScale = i3747[52]
  i3746.blinkEffectScale = i3747[53]
  i3746.mergeEffectScale = i3747[54]
  i3746.playMoveToTargetFinishSound = !!i3747[55]
  i3746.moveToTargetFinishFxType = i3747[56]
  return i3746
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i3750 = root || request.c( 'ItemClickable' )
  var i3751 = data
  i3750.requiredClicks = i3751[0]
  i3750.infiniteClick = !!i3751[1]
  i3750.canClick = !!i3751[2]
  i3750.disableAfterClick = !!i3751[3]
  i3750.onClick = request.d('UnityEngine.Events.UnityEvent', i3751[4], i3750.onClick)
  var i3753 = i3751[5]
  var i3752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.add(request.d('UnityEngine.Events.UnityEvent', i3753[i + 0]));
  }
  i3750.sequentialOnClicks = i3752
  i3750.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i3751[6], i3750.onClickComplete)
  return i3750
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i3756 = root || request.c( 'CuttingBoard' )
  var i3757 = data
  i3756.punchScale = new pc.Vec3( i3757[0], i3757[1], i3757[2] )
  i3756.punchDuration = i3757[3]
  i3756.isDone = !!i3757[4]
  i3756.onProcess = !!i3757[5]
  request.r(i3757[6], i3757[7], 0, i3756, 'itemDraggable')
  request.r(i3757[8], i3757[9], 0, i3756, 'itemClickable')
  request.r(i3757[10], i3757[11], 0, i3756, 'itemStirring')
  request.r(i3757[12], i3757[13], 0, i3756, 'itemKnifeSpriteMaskCutter')
  request.r(i3757[14], i3757[15], 0, i3756, 'itemSpriteMaskPainter')
  request.r(i3757[16], i3757[17], 0, i3756, 'itemMoveToTarget')
  request.r(i3757[18], i3757[19], 0, i3756, 'animator')
  i3756.itemType = i3757[20]
  request.r(i3757[21], i3757[22], 0, i3756, 'spriteRenderer')
  i3756.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3757[23], i3756.onKnifeIn)
  i3756.heartEffectScale = i3757[24]
  i3756.breakHeartEffectScale = i3757[25]
  i3756.blinkEffectScale = i3757[26]
  i3756.mergeEffectScale = i3757[27]
  i3756.playMoveToTargetFinishSound = !!i3757[28]
  i3756.moveToTargetFinishFxType = i3757[29]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3759 = data
  i3758.center = new pc.Vec3( i3759[0], i3759[1], i3759[2] )
  i3758.radius = i3759[3]
  i3758.height = i3759[4]
  i3758.direction = i3759[5]
  i3758.enabled = !!i3759[6]
  i3758.isTrigger = !!i3759[7]
  request.r(i3759[8], i3759[9], 0, i3758, 'material')
  return i3758
}

Deserializers["Knife"] = function (request, data, root) {
  var i3760 = root || request.c( 'Knife' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'knifeIdle')
  request.r(i3761[2], i3761[3], 0, i3760, 'knifeOnDrag')
  i3760.knifeOnDragRotationOffset = new pc.Vec3( i3761[4], i3761[5], i3761[6] )
  i3760.knifeOnDragRotateDuration = i3761[7]
  i3760.knifeOnDragRotateEase = i3761[8]
  i3760.isDone = !!i3761[9]
  i3760.onProcess = !!i3761[10]
  request.r(i3761[11], i3761[12], 0, i3760, 'itemDraggable')
  request.r(i3761[13], i3761[14], 0, i3760, 'itemClickable')
  request.r(i3761[15], i3761[16], 0, i3760, 'itemStirring')
  request.r(i3761[17], i3761[18], 0, i3760, 'itemKnifeSpriteMaskCutter')
  request.r(i3761[19], i3761[20], 0, i3760, 'itemSpriteMaskPainter')
  request.r(i3761[21], i3761[22], 0, i3760, 'itemMoveToTarget')
  request.r(i3761[23], i3761[24], 0, i3760, 'animator')
  i3760.itemType = i3761[25]
  request.r(i3761[26], i3761[27], 0, i3760, 'spriteRenderer')
  i3760.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3761[28], i3760.onKnifeIn)
  i3760.heartEffectScale = i3761[29]
  i3760.breakHeartEffectScale = i3761[30]
  i3760.blinkEffectScale = i3761[31]
  i3760.mergeEffectScale = i3761[32]
  i3760.playMoveToTargetFinishSound = !!i3761[33]
  i3760.moveToTargetFinishFxType = i3761[34]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3763 = data
  i3762.ambientIntensity = i3763[0]
  i3762.reflectionIntensity = i3763[1]
  i3762.ambientMode = i3763[2]
  i3762.ambientLight = new pc.Color(i3763[3], i3763[4], i3763[5], i3763[6])
  i3762.ambientSkyColor = new pc.Color(i3763[7], i3763[8], i3763[9], i3763[10])
  i3762.ambientGroundColor = new pc.Color(i3763[11], i3763[12], i3763[13], i3763[14])
  i3762.ambientEquatorColor = new pc.Color(i3763[15], i3763[16], i3763[17], i3763[18])
  i3762.fogColor = new pc.Color(i3763[19], i3763[20], i3763[21], i3763[22])
  i3762.fogEndDistance = i3763[23]
  i3762.fogStartDistance = i3763[24]
  i3762.fogDensity = i3763[25]
  i3762.fog = !!i3763[26]
  request.r(i3763[27], i3763[28], 0, i3762, 'skybox')
  i3762.fogMode = i3763[29]
  var i3765 = i3763[30]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3765[i + 0]) );
  }
  i3762.lightmaps = i3764
  i3762.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3763[31], i3762.lightProbes)
  i3762.lightmapsMode = i3763[32]
  i3762.mixedBakeMode = i3763[33]
  i3762.environmentLightingMode = i3763[34]
  i3762.ambientProbe = new pc.SphericalHarmonicsL2(i3763[35])
  i3762.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3763[36])
  i3762.useReferenceAmbientProbe = !!i3763[37]
  request.r(i3763[38], i3763[39], 0, i3762, 'customReflection')
  request.r(i3763[40], i3763[41], 0, i3762, 'defaultReflection')
  i3762.defaultReflectionMode = i3763[42]
  i3762.defaultReflectionResolution = i3763[43]
  i3762.sunLightObjectId = i3763[44]
  i3762.pixelLightCount = i3763[45]
  i3762.defaultReflectionHDR = !!i3763[46]
  i3762.hasLightDataAsset = !!i3763[47]
  i3762.hasManualGenerate = !!i3763[48]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'lightmapColor')
  request.r(i3769[2], i3769[3], 0, i3768, 'lightmapDirection')
  request.r(i3769[4], i3769[5], 0, i3768, 'shadowMask')
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3770 = root || new UnityEngine.LightProbes()
  var i3771 = data
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3781[i + 0]));
  }
  i3778.ShaderCompilationErrors = i3780
  i3778.name = i3779[1]
  i3778.guid = i3779[2]
  var i3783 = i3779[3]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( i3783[i + 0] );
  }
  i3778.shaderDefinedKeywords = i3782
  var i3785 = i3779[4]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3785[i + 0]) );
  }
  i3778.passes = i3784
  var i3787 = i3779[5]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3787[i + 0]) );
  }
  i3778.usePasses = i3786
  var i3789 = i3779[6]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3789[i + 0]) );
  }
  i3778.defaultParameterValues = i3788
  request.r(i3779[7], i3779[8], 0, i3778, 'unityFallbackShader')
  i3778.readDepth = !!i3779[9]
  i3778.hasDepthOnlyPass = !!i3779[10]
  i3778.isCreatedByShaderGraph = !!i3779[11]
  i3778.disableBatching = !!i3779[12]
  i3778.compiled = !!i3779[13]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3793 = data
  i3792.shaderName = i3793[0]
  i3792.errorMessage = i3793[1]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3798 = root || new pc.UnityShaderPass()
  var i3799 = data
  i3798.id = i3799[0]
  i3798.subShaderIndex = i3799[1]
  i3798.name = i3799[2]
  i3798.passType = i3799[3]
  i3798.grabPassTextureName = i3799[4]
  i3798.usePass = !!i3799[5]
  i3798.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[6], i3798.zTest)
  i3798.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[7], i3798.zWrite)
  i3798.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[8], i3798.culling)
  i3798.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3799[9], i3798.blending)
  i3798.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3799[10], i3798.alphaBlending)
  i3798.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[11], i3798.colorWriteMask)
  i3798.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[12], i3798.offsetUnits)
  i3798.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[13], i3798.offsetFactor)
  i3798.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[14], i3798.stencilRef)
  i3798.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[15], i3798.stencilReadMask)
  i3798.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[16], i3798.stencilWriteMask)
  i3798.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[17], i3798.stencilOp)
  i3798.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[18], i3798.stencilOpFront)
  i3798.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[19], i3798.stencilOpBack)
  var i3801 = i3799[20]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3801[i + 0]) );
  }
  i3798.tags = i3800
  var i3803 = i3799[21]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( i3803[i + 0] );
  }
  i3798.passDefinedKeywords = i3802
  var i3805 = i3799[22]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3805[i + 0]) );
  }
  i3798.passDefinedKeywordGroups = i3804
  var i3807 = i3799[23]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3807[i + 0]) );
  }
  i3798.variants = i3806
  var i3809 = i3799[24]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3809[i + 0]) );
  }
  i3798.excludedVariants = i3808
  i3798.hasDepthReader = !!i3799[25]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3811 = data
  i3810.val = i3811[0]
  i3810.name = i3811[1]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3813 = data
  i3812.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[0], i3812.src)
  i3812.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[1], i3812.dst)
  i3812.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[2], i3812.op)
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3815 = data
  i3814.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[0], i3814.pass)
  i3814.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[1], i3814.fail)
  i3814.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[2], i3814.zFail)
  i3814.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[3], i3814.comp)
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3819 = data
  i3818.name = i3819[0]
  i3818.value = i3819[1]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3823 = data
  var i3825 = i3823[0]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( i3825[i + 0] );
  }
  i3822.keywords = i3824
  i3822.hasDiscard = !!i3823[1]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3829 = data
  i3828.passId = i3829[0]
  i3828.subShaderIndex = i3829[1]
  var i3831 = i3829[2]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3828.keywords = i3830
  i3828.vertexProgram = i3829[3]
  i3828.fragmentProgram = i3829[4]
  i3828.exportedForWebGl2 = !!i3829[5]
  i3828.readDepth = !!i3829[6]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'shader')
  i3834.pass = i3835[2]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.type = i3839[1]
  i3838.value = new pc.Vec4( i3839[2], i3839[3], i3839[4], i3839[5] )
  i3838.textureValue = i3839[6]
  i3838.shaderPropertyFlag = i3839[7]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3841 = data
  i3840.name = i3841[0]
  request.r(i3841[1], i3841[2], 0, i3840, 'texture')
  i3840.aabb = i3841[3]
  i3840.vertices = i3841[4]
  i3840.triangles = i3841[5]
  i3840.textureRect = UnityEngine.Rect.MinMaxRect(i3841[6], i3841[7], i3841[8], i3841[9])
  i3840.packedRect = UnityEngine.Rect.MinMaxRect(i3841[10], i3841[11], i3841[12], i3841[13])
  i3840.border = new pc.Vec4( i3841[14], i3841[15], i3841[16], i3841[17] )
  i3840.transparency = i3841[18]
  i3840.bounds = i3841[19]
  i3840.pixelsPerUnit = i3841[20]
  i3840.textureWidth = i3841[21]
  i3840.textureHeight = i3841[22]
  i3840.nativeSize = new pc.Vec2( i3841[23], i3841[24] )
  i3840.pivot = new pc.Vec2( i3841[25], i3841[26] )
  i3840.textureRectOffset = new pc.Vec2( i3841[27], i3841[28] )
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3843 = data
  i3842.name = i3843[0]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3845 = data
  i3844.name = i3845[0]
  i3844.wrapMode = i3845[1]
  i3844.isLooping = !!i3845[2]
  i3844.length = i3845[3]
  var i3847 = i3845[4]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3847[i + 0]) );
  }
  i3844.curves = i3846
  var i3849 = i3845[5]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3849[i + 0]) );
  }
  i3844.events = i3848
  i3844.halfPrecision = !!i3845[6]
  i3844._frameRate = i3845[7]
  i3844.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3845[8], i3844.localBounds)
  i3844.hasMuscleCurves = !!i3845[9]
  var i3851 = i3845[10]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( i3851[i + 0] );
  }
  i3844.clipMuscleConstant = i3850
  i3844.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3845[11], i3844.clipBindingConstant)
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3855 = data
  i3854.path = i3855[0]
  i3854.hash = i3855[1]
  i3854.componentType = i3855[2]
  i3854.property = i3855[3]
  i3854.keys = i3855[4]
  var i3857 = i3855[5]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3857[i + 0]) );
  }
  i3854.objectReferenceKeys = i3856
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3861 = data
  i3860.time = i3861[0]
  request.r(i3861[1], i3861[2], 0, i3860, 'value')
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3865 = data
  i3864.functionName = i3865[0]
  i3864.floatParameter = i3865[1]
  i3864.intParameter = i3865[2]
  i3864.stringParameter = i3865[3]
  request.r(i3865[4], i3865[5], 0, i3864, 'objectReferenceParameter')
  i3864.time = i3865[6]
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3867 = data
  i3866.center = new pc.Vec3( i3867[0], i3867[1], i3867[2] )
  i3866.extends = new pc.Vec3( i3867[3], i3867[4], i3867[5] )
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3871 = data
  var i3873 = i3871[0]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( i3873[i + 0] );
  }
  i3870.genericBindings = i3872
  var i3875 = i3871[1]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( i3875[i + 0] );
  }
  i3870.pptrCurveMapping = i3874
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3877 = data
  i3876.name = i3877[0]
  var i3879 = i3877[1]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3879[i + 0]) );
  }
  i3876.layers = i3878
  var i3881 = i3877[2]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3881[i + 0]) );
  }
  i3876.parameters = i3880
  i3876.animationClips = i3877[3]
  i3876.avatarUnsupported = i3877[4]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3885 = data
  i3884.name = i3885[0]
  i3884.defaultWeight = i3885[1]
  i3884.blendingMode = i3885[2]
  i3884.avatarMask = i3885[3]
  i3884.syncedLayerIndex = i3885[4]
  i3884.syncedLayerAffectsTiming = !!i3885[5]
  i3884.syncedLayers = i3885[6]
  i3884.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3885[7], i3884.stateMachine)
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3887 = data
  i3886.id = i3887[0]
  i3886.name = i3887[1]
  i3886.path = i3887[2]
  var i3889 = i3887[3]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3889[i + 0]) );
  }
  i3886.states = i3888
  var i3891 = i3887[4]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3891[i + 0]) );
  }
  i3886.machines = i3890
  var i3893 = i3887[5]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3893[i + 0]) );
  }
  i3886.entryStateTransitions = i3892
  var i3895 = i3887[6]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3895[i + 0]) );
  }
  i3886.exitStateTransitions = i3894
  var i3897 = i3887[7]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3897[i + 0]) );
  }
  i3886.anyStateTransitions = i3896
  i3886.defaultStateId = i3887[8]
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3901 = data
  i3900.id = i3901[0]
  i3900.name = i3901[1]
  i3900.cycleOffset = i3901[2]
  i3900.cycleOffsetParameter = i3901[3]
  i3900.cycleOffsetParameterActive = !!i3901[4]
  i3900.mirror = !!i3901[5]
  i3900.mirrorParameter = i3901[6]
  i3900.mirrorParameterActive = !!i3901[7]
  i3900.motionId = i3901[8]
  i3900.nameHash = i3901[9]
  i3900.fullPathHash = i3901[10]
  i3900.speed = i3901[11]
  i3900.speedParameter = i3901[12]
  i3900.speedParameterActive = !!i3901[13]
  i3900.tag = i3901[14]
  i3900.tagHash = i3901[15]
  i3900.writeDefaultValues = !!i3901[16]
  var i3903 = i3901[17]
  var i3902 = []
  for(var i = 0; i < i3903.length; i += 2) {
  request.r(i3903[i + 0], i3903[i + 1], 2, i3902, '')
  }
  i3900.behaviours = i3902
  var i3905 = i3901[18]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3905[i + 0]) );
  }
  i3900.transitions = i3904
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3911 = data
  i3910.fullPath = i3911[0]
  i3910.canTransitionToSelf = !!i3911[1]
  i3910.duration = i3911[2]
  i3910.exitTime = i3911[3]
  i3910.hasExitTime = !!i3911[4]
  i3910.hasFixedDuration = !!i3911[5]
  i3910.interruptionSource = i3911[6]
  i3910.offset = i3911[7]
  i3910.orderedInterruption = !!i3911[8]
  i3910.destinationStateId = i3911[9]
  i3910.isExit = !!i3911[10]
  i3910.mute = !!i3911[11]
  i3910.solo = !!i3911[12]
  var i3913 = i3911[13]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3913[i + 0]) );
  }
  i3910.conditions = i3912
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3919 = data
  i3918.destinationStateId = i3919[0]
  i3918.isExit = !!i3919[1]
  i3918.mute = !!i3919[2]
  i3918.solo = !!i3919[3]
  var i3921 = i3919[4]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3921[i + 0]) );
  }
  i3918.conditions = i3920
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3925 = data
  i3924.defaultBool = !!i3925[0]
  i3924.defaultFloat = i3925[1]
  i3924.defaultInt = i3925[2]
  i3924.name = i3925[3]
  i3924.nameHash = i3925[4]
  i3924.type = i3925[5]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3929 = data
  i3928.mode = i3929[0]
  i3928.parameter = i3929[1]
  i3928.threshold = i3929[2]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3931 = data
  i3930.name = i3931[0]
  i3930.bytes64 = i3931[1]
  i3930.data = i3931[2]
  return i3930
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3933 = data
  i3932.normalStyle = i3933[0]
  i3932.normalSpacingOffset = i3933[1]
  i3932.boldStyle = i3933[2]
  i3932.boldSpacing = i3933[3]
  i3932.italicStyle = i3933[4]
  i3932.tabSize = i3933[5]
  request.r(i3933[6], i3933[7], 0, i3932, 'atlas')
  i3932.m_SourceFontFileGUID = i3933[8]
  i3932.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3933[9], i3932.m_CreationSettings)
  request.r(i3933[10], i3933[11], 0, i3932, 'm_SourceFontFile')
  i3932.m_SourceFontFilePath = i3933[12]
  i3932.m_AtlasPopulationMode = i3933[13]
  i3932.InternalDynamicOS = !!i3933[14]
  var i3935 = i3933[15]
  var i3934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.add(request.d('UnityEngine.TextCore.Glyph', i3935[i + 0]));
  }
  i3932.m_GlyphTable = i3934
  var i3937 = i3933[16]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.add(request.d('TMPro.TMP_Character', i3937[i + 0]));
  }
  i3932.m_CharacterTable = i3936
  var i3939 = i3933[17]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 2) {
  request.r(i3939[i + 0], i3939[i + 1], 2, i3938, '')
  }
  i3932.m_AtlasTextures = i3938
  i3932.m_AtlasTextureIndex = i3933[18]
  i3932.m_IsMultiAtlasTexturesEnabled = !!i3933[19]
  i3932.m_GetFontFeatures = !!i3933[20]
  i3932.m_ClearDynamicDataOnBuild = !!i3933[21]
  i3932.m_AtlasWidth = i3933[22]
  i3932.m_AtlasHeight = i3933[23]
  i3932.m_AtlasPadding = i3933[24]
  i3932.m_AtlasRenderMode = i3933[25]
  var i3941 = i3933[26]
  var i3940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.add(request.d('UnityEngine.TextCore.GlyphRect', i3941[i + 0]));
  }
  i3932.m_UsedGlyphRects = i3940
  var i3943 = i3933[27]
  var i3942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.add(request.d('UnityEngine.TextCore.GlyphRect', i3943[i + 0]));
  }
  i3932.m_FreeGlyphRects = i3942
  i3932.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3933[28], i3932.m_FontFeatureTable)
  i3932.m_ShouldReimportFontFeatures = !!i3933[29]
  var i3945 = i3933[30]
  var i3944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3945.length; i += 2) {
  request.r(i3945[i + 0], i3945[i + 1], 1, i3944, '')
  }
  i3932.m_FallbackFontAssetTable = i3944
  var i3947 = i3933[31]
  var i3946 = []
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.push( request.d('TMPro.TMP_FontWeightPair', i3947[i + 0]) );
  }
  i3932.m_FontWeightTable = i3946
  var i3949 = i3933[32]
  var i3948 = []
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.push( request.d('TMPro.TMP_FontWeightPair', i3949[i + 0]) );
  }
  i3932.fontWeights = i3948
  i3932.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3933[33], i3932.m_fontInfo)
  var i3951 = i3933[34]
  var i3950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.add(request.d('TMPro.TMP_Glyph', i3951[i + 0]));
  }
  i3932.m_glyphInfoList = i3950
  i3932.m_KerningTable = request.d('TMPro.KerningTable', i3933[35], i3932.m_KerningTable)
  var i3953 = i3933[36]
  var i3952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3953.length; i += 2) {
  request.r(i3953[i + 0], i3953[i + 1], 1, i3952, '')
  }
  i3932.fallbackFontAssets = i3952
  i3932.m_Version = i3933[37]
  i3932.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3933[38], i3932.m_FaceInfo)
  request.r(i3933[39], i3933[40], 0, i3932, 'm_Material')
  return i3932
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3954 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3955 = data
  i3954.sourceFontFileName = i3955[0]
  i3954.sourceFontFileGUID = i3955[1]
  i3954.faceIndex = i3955[2]
  i3954.pointSizeSamplingMode = i3955[3]
  i3954.pointSize = i3955[4]
  i3954.padding = i3955[5]
  i3954.paddingMode = i3955[6]
  i3954.packingMode = i3955[7]
  i3954.atlasWidth = i3955[8]
  i3954.atlasHeight = i3955[9]
  i3954.characterSetSelectionMode = i3955[10]
  i3954.characterSequence = i3955[11]
  i3954.referencedFontAssetGUID = i3955[12]
  i3954.referencedTextAssetGUID = i3955[13]
  i3954.fontStyle = i3955[14]
  i3954.fontStyleModifier = i3955[15]
  i3954.renderMode = i3955[16]
  i3954.includeFontFeatures = !!i3955[17]
  return i3954
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3958 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3959 = data
  i3958.m_Index = i3959[0]
  i3958.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3959[1], i3958.m_Metrics)
  i3958.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3959[2], i3958.m_GlyphRect)
  i3958.m_Scale = i3959[3]
  i3958.m_AtlasIndex = i3959[4]
  i3958.m_ClassDefinitionType = i3959[5]
  return i3958
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3961 = data
  i3960.m_Width = i3961[0]
  i3960.m_Height = i3961[1]
  i3960.m_HorizontalBearingX = i3961[2]
  i3960.m_HorizontalBearingY = i3961[3]
  i3960.m_HorizontalAdvance = i3961[4]
  return i3960
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3963 = data
  i3962.m_X = i3963[0]
  i3962.m_Y = i3963[1]
  i3962.m_Width = i3963[2]
  i3962.m_Height = i3963[3]
  return i3962
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3966 = root || request.c( 'TMPro.TMP_Character' )
  var i3967 = data
  i3966.m_ElementType = i3967[0]
  i3966.m_Unicode = i3967[1]
  i3966.m_GlyphIndex = i3967[2]
  i3966.m_Scale = i3967[3]
  return i3966
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3972 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3973 = data
  var i3975 = i3973[0]
  var i3974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.add(request.d('TMPro.MultipleSubstitutionRecord', i3975[i + 0]));
  }
  i3972.m_MultipleSubstitutionRecords = i3974
  var i3977 = i3973[1]
  var i3976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.add(request.d('TMPro.LigatureSubstitutionRecord', i3977[i + 0]));
  }
  i3972.m_LigatureSubstitutionRecords = i3976
  var i3979 = i3973[2]
  var i3978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3979[i + 0]));
  }
  i3972.m_GlyphPairAdjustmentRecords = i3978
  var i3981 = i3973[3]
  var i3980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3981[i + 0]));
  }
  i3972.m_MarkToBaseAdjustmentRecords = i3980
  var i3983 = i3973[4]
  var i3982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3983[i + 0]));
  }
  i3972.m_MarkToMarkAdjustmentRecords = i3982
  return i3972
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3986 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3987 = data
  i3986.m_TargetGlyphID = i3987[0]
  i3986.m_SubstituteGlyphIDs = i3987[1]
  return i3986
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3990 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3991 = data
  i3990.m_ComponentGlyphIDs = i3991[0]
  i3990.m_LigatureGlyphID = i3991[1]
  return i3990
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3994 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3995 = data
  i3994.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3995[0], i3994.m_FirstAdjustmentRecord)
  i3994.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3995[1], i3994.m_SecondAdjustmentRecord)
  i3994.m_FeatureLookupFlags = i3995[2]
  return i3994
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3998 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3999 = data
  i3998.m_BaseGlyphID = i3999[0]
  i3998.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3999[1], i3998.m_BaseGlyphAnchorPoint)
  i3998.m_MarkGlyphID = i3999[2]
  i3998.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3999[3], i3998.m_MarkPositionAdjustment)
  return i3998
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4003 = data
  i4002.m_BaseMarkGlyphID = i4003[0]
  i4002.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4003[1], i4002.m_BaseMarkGlyphAnchorPoint)
  i4002.m_CombiningMarkGlyphID = i4003[2]
  i4002.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4003[3], i4002.m_CombiningMarkPositionAdjustment)
  return i4002
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4008 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4009 = data
  request.r(i4009[0], i4009[1], 0, i4008, 'regularTypeface')
  request.r(i4009[2], i4009[3], 0, i4008, 'italicTypeface')
  return i4008
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4010 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4011 = data
  i4010.Name = i4011[0]
  i4010.PointSize = i4011[1]
  i4010.Scale = i4011[2]
  i4010.CharacterCount = i4011[3]
  i4010.LineHeight = i4011[4]
  i4010.Baseline = i4011[5]
  i4010.Ascender = i4011[6]
  i4010.CapHeight = i4011[7]
  i4010.Descender = i4011[8]
  i4010.CenterLine = i4011[9]
  i4010.SuperscriptOffset = i4011[10]
  i4010.SubscriptOffset = i4011[11]
  i4010.SubSize = i4011[12]
  i4010.Underline = i4011[13]
  i4010.UnderlineThickness = i4011[14]
  i4010.strikethrough = i4011[15]
  i4010.strikethroughThickness = i4011[16]
  i4010.TabWidth = i4011[17]
  i4010.Padding = i4011[18]
  i4010.AtlasWidth = i4011[19]
  i4010.AtlasHeight = i4011[20]
  return i4010
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4014 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4015 = data
  i4014.id = i4015[0]
  i4014.x = i4015[1]
  i4014.y = i4015[2]
  i4014.width = i4015[3]
  i4014.height = i4015[4]
  i4014.xOffset = i4015[5]
  i4014.yOffset = i4015[6]
  i4014.xAdvance = i4015[7]
  i4014.scale = i4015[8]
  return i4014
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4016 = root || request.c( 'TMPro.KerningTable' )
  var i4017 = data
  var i4019 = i4017[0]
  var i4018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.add(request.d('TMPro.KerningPair', i4019[i + 0]));
  }
  i4016.kerningPairs = i4018
  return i4016
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4022 = root || request.c( 'TMPro.KerningPair' )
  var i4023 = data
  i4022.xOffset = i4023[0]
  i4022.m_FirstGlyph = i4023[1]
  i4022.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4023[2], i4022.m_FirstGlyphAdjustments)
  i4022.m_SecondGlyph = i4023[3]
  i4022.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4023[4], i4022.m_SecondGlyphAdjustments)
  i4022.m_IgnoreSpacingAdjustments = !!i4023[5]
  return i4022
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4024 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4025 = data
  i4024.m_FaceIndex = i4025[0]
  i4024.m_FamilyName = i4025[1]
  i4024.m_StyleName = i4025[2]
  i4024.m_PointSize = i4025[3]
  i4024.m_Scale = i4025[4]
  i4024.m_UnitsPerEM = i4025[5]
  i4024.m_LineHeight = i4025[6]
  i4024.m_AscentLine = i4025[7]
  i4024.m_CapLine = i4025[8]
  i4024.m_MeanLine = i4025[9]
  i4024.m_Baseline = i4025[10]
  i4024.m_DescentLine = i4025[11]
  i4024.m_SuperscriptOffset = i4025[12]
  i4024.m_SuperscriptSize = i4025[13]
  i4024.m_SubscriptOffset = i4025[14]
  i4024.m_SubscriptSize = i4025[15]
  i4024.m_UnderlineOffset = i4025[16]
  i4024.m_UnderlineThickness = i4025[17]
  i4024.m_StrikethroughOffset = i4025[18]
  i4024.m_StrikethroughThickness = i4025[19]
  i4024.m_TabWidth = i4025[20]
  return i4024
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4027 = data
  i4026.useSafeMode = !!i4027[0]
  i4026.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4027[1], i4026.safeModeOptions)
  i4026.timeScale = i4027[2]
  i4026.unscaledTimeScale = i4027[3]
  i4026.useSmoothDeltaTime = !!i4027[4]
  i4026.maxSmoothUnscaledTime = i4027[5]
  i4026.rewindCallbackMode = i4027[6]
  i4026.showUnityEditorReport = !!i4027[7]
  i4026.logBehaviour = i4027[8]
  i4026.drawGizmos = !!i4027[9]
  i4026.defaultRecyclable = !!i4027[10]
  i4026.defaultAutoPlay = i4027[11]
  i4026.defaultUpdateType = i4027[12]
  i4026.defaultTimeScaleIndependent = !!i4027[13]
  i4026.defaultEaseType = i4027[14]
  i4026.defaultEaseOvershootOrAmplitude = i4027[15]
  i4026.defaultEasePeriod = i4027[16]
  i4026.defaultAutoKill = !!i4027[17]
  i4026.defaultLoopType = i4027[18]
  i4026.debugMode = !!i4027[19]
  i4026.debugStoreTargetId = !!i4027[20]
  i4026.showPreviewPanel = !!i4027[21]
  i4026.storeSettingsLocation = i4027[22]
  i4026.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4027[23], i4026.modules)
  i4026.createASMDEF = !!i4027[24]
  i4026.showPlayingTweens = !!i4027[25]
  i4026.showPausedTweens = !!i4027[26]
  return i4026
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4028 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4029 = data
  i4028.logBehaviour = i4029[0]
  i4028.nestedTweenFailureBehaviour = i4029[1]
  return i4028
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4031 = data
  i4030.showPanel = !!i4031[0]
  i4030.audioEnabled = !!i4031[1]
  i4030.physicsEnabled = !!i4031[2]
  i4030.physics2DEnabled = !!i4031[3]
  i4030.spriteEnabled = !!i4031[4]
  i4030.uiEnabled = !!i4031[5]
  i4030.uiToolkitEnabled = !!i4031[6]
  i4030.textMeshProEnabled = !!i4031[7]
  i4030.tk2DEnabled = !!i4031[8]
  i4030.deAudioEnabled = !!i4031[9]
  i4030.deUnityExtendedEnabled = !!i4031[10]
  i4030.epoOutlineEnabled = !!i4031[11]
  return i4030
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4032 = root || request.c( 'TMPro.TMP_Settings' )
  var i4033 = data
  i4032.assetVersion = i4033[0]
  i4032.m_TextWrappingMode = i4033[1]
  i4032.m_enableKerning = !!i4033[2]
  var i4035 = i4033[3]
  var i4034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.add(i4035[i + 0]);
  }
  i4032.m_ActiveFontFeatures = i4034
  i4032.m_enableExtraPadding = !!i4033[4]
  i4032.m_enableTintAllSprites = !!i4033[5]
  i4032.m_enableParseEscapeCharacters = !!i4033[6]
  i4032.m_EnableRaycastTarget = !!i4033[7]
  i4032.m_GetFontFeaturesAtRuntime = !!i4033[8]
  i4032.m_missingGlyphCharacter = i4033[9]
  i4032.m_ClearDynamicDataOnBuild = !!i4033[10]
  i4032.m_warningsDisabled = !!i4033[11]
  request.r(i4033[12], i4033[13], 0, i4032, 'm_defaultFontAsset')
  i4032.m_defaultFontAssetPath = i4033[14]
  i4032.m_defaultFontSize = i4033[15]
  i4032.m_defaultAutoSizeMinRatio = i4033[16]
  i4032.m_defaultAutoSizeMaxRatio = i4033[17]
  i4032.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4033[18], i4033[19] )
  i4032.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4033[20], i4033[21] )
  i4032.m_autoSizeTextContainer = !!i4033[22]
  i4032.m_IsTextObjectScaleStatic = !!i4033[23]
  var i4037 = i4033[24]
  var i4036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4037.length; i += 2) {
  request.r(i4037[i + 0], i4037[i + 1], 1, i4036, '')
  }
  i4032.m_fallbackFontAssets = i4036
  i4032.m_matchMaterialPreset = !!i4033[25]
  i4032.m_HideSubTextObjects = !!i4033[26]
  request.r(i4033[27], i4033[28], 0, i4032, 'm_defaultSpriteAsset')
  i4032.m_defaultSpriteAssetPath = i4033[29]
  i4032.m_enableEmojiSupport = !!i4033[30]
  i4032.m_MissingCharacterSpriteUnicode = i4033[31]
  var i4039 = i4033[32]
  var i4038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4039.length; i += 2) {
  request.r(i4039[i + 0], i4039[i + 1], 1, i4038, '')
  }
  i4032.m_EmojiFallbackTextAssets = i4038
  i4032.m_defaultColorGradientPresetsPath = i4033[33]
  request.r(i4033[34], i4033[35], 0, i4032, 'm_defaultStyleSheet')
  i4032.m_StyleSheetsResourcePath = i4033[36]
  request.r(i4033[37], i4033[38], 0, i4032, 'm_leadingCharacters')
  request.r(i4033[39], i4033[40], 0, i4032, 'm_followingCharacters')
  i4032.m_UseModernHangulLineBreakingRules = !!i4033[41]
  return i4032
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4042 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4043 = data
  request.r(i4043[0], i4043[1], 0, i4042, 'spriteSheet')
  var i4045 = i4043[2]
  var i4044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.add(request.d('TMPro.TMP_Sprite', i4045[i + 0]));
  }
  i4042.spriteInfoList = i4044
  var i4047 = i4043[3]
  var i4046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4047.length; i += 2) {
  request.r(i4047[i + 0], i4047[i + 1], 1, i4046, '')
  }
  i4042.fallbackSpriteAssets = i4046
  var i4049 = i4043[4]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.add(request.d('TMPro.TMP_SpriteCharacter', i4049[i + 0]));
  }
  i4042.m_SpriteCharacterTable = i4048
  var i4051 = i4043[5]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.add(request.d('TMPro.TMP_SpriteGlyph', i4051[i + 0]));
  }
  i4042.m_GlyphTable = i4050
  i4042.m_Version = i4043[6]
  i4042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4043[7], i4042.m_FaceInfo)
  request.r(i4043[8], i4043[9], 0, i4042, 'm_Material')
  return i4042
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4054 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4055 = data
  i4054.name = i4055[0]
  i4054.hashCode = i4055[1]
  i4054.unicode = i4055[2]
  i4054.pivot = new pc.Vec2( i4055[3], i4055[4] )
  request.r(i4055[5], i4055[6], 0, i4054, 'sprite')
  i4054.id = i4055[7]
  i4054.x = i4055[8]
  i4054.y = i4055[9]
  i4054.width = i4055[10]
  i4054.height = i4055[11]
  i4054.xOffset = i4055[12]
  i4054.yOffset = i4055[13]
  i4054.xAdvance = i4055[14]
  i4054.scale = i4055[15]
  return i4054
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4060 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4061 = data
  i4060.m_Name = i4061[0]
  i4060.m_ElementType = i4061[1]
  i4060.m_Unicode = i4061[2]
  i4060.m_GlyphIndex = i4061[3]
  i4060.m_Scale = i4061[4]
  return i4060
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4064 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4065 = data
  request.r(i4065[0], i4065[1], 0, i4064, 'sprite')
  i4064.m_Index = i4065[2]
  i4064.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4065[3], i4064.m_Metrics)
  i4064.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4065[4], i4064.m_GlyphRect)
  i4064.m_Scale = i4065[5]
  i4064.m_AtlasIndex = i4065[6]
  i4064.m_ClassDefinitionType = i4065[7]
  return i4064
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4066 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4067 = data
  var i4069 = i4067[0]
  var i4068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.add(request.d('TMPro.TMP_Style', i4069[i + 0]));
  }
  i4066.m_StyleList = i4068
  return i4066
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4072 = root || request.c( 'TMPro.TMP_Style' )
  var i4073 = data
  i4072.m_Name = i4073[0]
  i4072.m_HashCode = i4073[1]
  i4072.m_OpeningDefinition = i4073[2]
  i4072.m_ClosingDefinition = i4073[3]
  i4072.m_OpeningTagArray = i4073[4]
  i4072.m_ClosingTagArray = i4073[5]
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4075 = data
  var i4077 = i4075[0]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4077[i + 0]) );
  }
  i4074.files = i4076
  i4074.componentToPrefabIds = i4075[1]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4081 = data
  i4080.path = i4081[0]
  request.r(i4081[1], i4081[2], 0, i4080, 'unityObject')
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4083 = data
  var i4085 = i4083[0]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4085[i + 0]) );
  }
  i4082.scriptsExecutionOrder = i4084
  var i4087 = i4083[1]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4087[i + 0]) );
  }
  i4082.sortingLayers = i4086
  var i4089 = i4083[2]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4089[i + 0]) );
  }
  i4082.cullingLayers = i4088
  i4082.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4083[3], i4082.timeSettings)
  i4082.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4083[4], i4082.physicsSettings)
  i4082.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4083[5], i4082.physics2DSettings)
  i4082.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4083[6], i4082.qualitySettings)
  i4082.enableRealtimeShadows = !!i4083[7]
  i4082.enableAutoInstancing = !!i4083[8]
  i4082.enableStaticBatching = !!i4083[9]
  i4082.enableDynamicBatching = !!i4083[10]
  i4082.lightmapEncodingQuality = i4083[11]
  i4082.desiredColorSpace = i4083[12]
  var i4091 = i4083[13]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( i4091[i + 0] );
  }
  i4082.allTags = i4090
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4095 = data
  i4094.name = i4095[0]
  i4094.value = i4095[1]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4099 = data
  i4098.id = i4099[0]
  i4098.name = i4099[1]
  i4098.value = i4099[2]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4103 = data
  i4102.id = i4103[0]
  i4102.name = i4103[1]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4105 = data
  i4104.fixedDeltaTime = i4105[0]
  i4104.maximumDeltaTime = i4105[1]
  i4104.timeScale = i4105[2]
  i4104.maximumParticleTimestep = i4105[3]
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4107 = data
  i4106.gravity = new pc.Vec3( i4107[0], i4107[1], i4107[2] )
  i4106.defaultSolverIterations = i4107[3]
  i4106.bounceThreshold = i4107[4]
  i4106.autoSyncTransforms = !!i4107[5]
  i4106.autoSimulation = !!i4107[6]
  var i4109 = i4107[7]
  var i4108 = []
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4109[i + 0]) );
  }
  i4106.collisionMatrix = i4108
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4113 = data
  i4112.enabled = !!i4113[0]
  i4112.layerId = i4113[1]
  i4112.otherLayerId = i4113[2]
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4115 = data
  request.r(i4115[0], i4115[1], 0, i4114, 'material')
  i4114.gravity = new pc.Vec2( i4115[2], i4115[3] )
  i4114.positionIterations = i4115[4]
  i4114.velocityIterations = i4115[5]
  i4114.velocityThreshold = i4115[6]
  i4114.maxLinearCorrection = i4115[7]
  i4114.maxAngularCorrection = i4115[8]
  i4114.maxTranslationSpeed = i4115[9]
  i4114.maxRotationSpeed = i4115[10]
  i4114.baumgarteScale = i4115[11]
  i4114.baumgarteTOIScale = i4115[12]
  i4114.timeToSleep = i4115[13]
  i4114.linearSleepTolerance = i4115[14]
  i4114.angularSleepTolerance = i4115[15]
  i4114.defaultContactOffset = i4115[16]
  i4114.autoSimulation = !!i4115[17]
  i4114.queriesHitTriggers = !!i4115[18]
  i4114.queriesStartInColliders = !!i4115[19]
  i4114.callbacksOnDisable = !!i4115[20]
  i4114.reuseCollisionCallbacks = !!i4115[21]
  i4114.autoSyncTransforms = !!i4115[22]
  var i4117 = i4115[23]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4117[i + 0]) );
  }
  i4114.collisionMatrix = i4116
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4121 = data
  i4120.enabled = !!i4121[0]
  i4120.layerId = i4121[1]
  i4120.otherLayerId = i4121[2]
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4123 = data
  var i4125 = i4123[0]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4125[i + 0]) );
  }
  i4122.qualityLevels = i4124
  var i4127 = i4123[1]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( i4127[i + 0] );
  }
  i4122.names = i4126
  i4122.shadows = i4123[2]
  i4122.anisotropicFiltering = i4123[3]
  i4122.antiAliasing = i4123[4]
  i4122.lodBias = i4123[5]
  i4122.shadowCascades = i4123[6]
  i4122.shadowDistance = i4123[7]
  i4122.shadowmaskMode = i4123[8]
  i4122.shadowProjection = i4123[9]
  i4122.shadowResolution = i4123[10]
  i4122.softParticles = !!i4123[11]
  i4122.softVegetation = !!i4123[12]
  i4122.activeColorSpace = i4123[13]
  i4122.desiredColorSpace = i4123[14]
  i4122.masterTextureLimit = i4123[15]
  i4122.maxQueuedFrames = i4123[16]
  i4122.particleRaycastBudget = i4123[17]
  i4122.pixelLightCount = i4123[18]
  i4122.realtimeReflectionProbes = !!i4123[19]
  i4122.shadowCascade2Split = i4123[20]
  i4122.shadowCascade4Split = new pc.Vec3( i4123[21], i4123[22], i4123[23] )
  i4122.streamingMipmapsActive = !!i4123[24]
  i4122.vSyncCount = i4123[25]
  i4122.asyncUploadBufferSize = i4123[26]
  i4122.asyncUploadTimeSlice = i4123[27]
  i4122.billboardsFaceCameraPosition = !!i4123[28]
  i4122.shadowNearPlaneOffset = i4123[29]
  i4122.streamingMipmapsMemoryBudget = i4123[30]
  i4122.maximumLODLevel = i4123[31]
  i4122.streamingMipmapsAddAllCameras = !!i4123[32]
  i4122.streamingMipmapsMaxLevelReduction = i4123[33]
  i4122.streamingMipmapsRenderersPerFrame = i4123[34]
  i4122.resolutionScalingFixedDPIFactor = i4123[35]
  i4122.streamingMipmapsMaxFileIORequests = i4123[36]
  i4122.currentQualityLevel = i4123[37]
  return i4122
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4130 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4131 = data
  i4130.m_GlyphIndex = i4131[0]
  i4130.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4131[1], i4130.m_GlyphValueRecord)
  return i4130
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4133 = data
  i4132.m_XCoordinate = i4133[0]
  i4132.m_YCoordinate = i4133[1]
  return i4132
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4134 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4135 = data
  i4134.m_XPositionAdjustment = i4135[0]
  i4134.m_YPositionAdjustment = i4135[1]
  return i4134
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4136 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4137 = data
  i4136.xPlacement = i4137[0]
  i4136.yPlacement = i4137[1]
  i4136.xAdvance = i4137[2]
  i4136.yAdvance = i4137[3]
  return i4136
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4138 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4139 = data
  i4138.m_XPlacement = i4139[0]
  i4138.m_YPlacement = i4139[1]
  i4138.m_XAdvance = i4139[2]
  i4138.m_YAdvance = i4139[3]
  return i4138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[22],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[22],"98":[99],"100":[101],"102":[101],"21":[14],"58":[103],"52":[103],"104":[103],"105":[103],"106":[103],"107":[14],"108":[17,14],"109":[99],"110":[17,14],"111":[25,99],"112":[99],"113":[99,114],"115":[77],"116":[84],"117":[118],"119":[120],"121":[5],"122":[22],"123":[124],"125":[48],"126":[21],"127":[14],"128":[99,14],"27":[14,17],"129":[14],"130":[17,14],"131":[99],"132":[17,14],"133":[14],"134":[135],"136":[135],"137":[135],"138":[14],"139":[14],"24":[21],"16":[17,14],"140":[14],"23":[21],"141":[14],"142":[14],"143":[14],"144":[14],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[17,14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[17,14],"156":[14],"157":[48],"158":[48],"49":[48],"159":[48],"160":[22],"161":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","Knife","InWaterItem","Item","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Sink","ItemDraggable","ItemMoveToTarget","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Ply_BobEffect","Ply_TimerEvent","ItemClickable","CuttingBoard","UnityEngine.CapsuleCollider","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "13.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v58_StuffedPotatoCasserole_NoPhase2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1770";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4898";

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

Deserializers.buildID = "36cc3478-5e7e-4cfe-81f2-fc71f2142562";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

