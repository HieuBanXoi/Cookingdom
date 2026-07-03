var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.JointSpring' )
  var i3621 = data
  i3620.spring = i3621[0]
  i3620.damper = i3621[1]
  i3620.targetPosition = i3621[2]
  return i3620
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.JointMotor' )
  var i3623 = data
  i3622.m_TargetVelocity = i3623[0]
  i3622.m_Force = i3623[1]
  i3622.m_FreeSpin = i3623[2]
  return i3622
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.JointLimits' )
  var i3625 = data
  i3624.m_Min = i3625[0]
  i3624.m_Max = i3625[1]
  i3624.m_Bounciness = i3625[2]
  i3624.m_BounceMinVelocity = i3625[3]
  i3624.m_ContactDistance = i3625[4]
  i3624.minBounce = i3625[5]
  i3624.maxBounce = i3625[6]
  return i3624
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.JointDrive' )
  var i3627 = data
  i3626.m_PositionSpring = i3627[0]
  i3626.m_PositionDamper = i3627[1]
  i3626.m_MaximumForce = i3627[2]
  i3626.m_UseAcceleration = i3627[3]
  return i3626
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3629 = data
  i3628.m_Spring = i3629[0]
  i3628.m_Damper = i3629[1]
  return i3628
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3631 = data
  i3630.m_Limit = i3631[0]
  i3630.m_Bounciness = i3631[1]
  i3630.m_ContactDistance = i3631[2]
  return i3630
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3633 = data
  i3632.m_ExtremumSlip = i3633[0]
  i3632.m_ExtremumValue = i3633[1]
  i3632.m_AsymptoteSlip = i3633[2]
  i3632.m_AsymptoteValue = i3633[3]
  i3632.m_Stiffness = i3633[4]
  return i3632
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3635 = data
  i3634.m_LowerAngle = i3635[0]
  i3634.m_UpperAngle = i3635[1]
  return i3634
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3637 = data
  i3636.m_MotorSpeed = i3637[0]
  i3636.m_MaximumMotorTorque = i3637[1]
  return i3636
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3639 = data
  i3638.m_DampingRatio = i3639[0]
  i3638.m_Frequency = i3639[1]
  i3638.m_Angle = i3639[2]
  return i3638
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3641 = data
  i3640.m_LowerTranslation = i3641[0]
  i3640.m_UpperTranslation = i3641[1]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3642 = root || new pc.UnityMaterial()
  var i3643 = data
  i3642.name = i3643[0]
  request.r(i3643[1], i3643[2], 0, i3642, 'shader')
  i3642.renderQueue = i3643[3]
  i3642.enableInstancing = !!i3643[4]
  var i3645 = i3643[5]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3645[i + 0]) );
  }
  i3642.floatParameters = i3644
  var i3647 = i3643[6]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3647[i + 0]) );
  }
  i3642.colorParameters = i3646
  var i3649 = i3643[7]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3649[i + 0]) );
  }
  i3642.vectorParameters = i3648
  var i3651 = i3643[8]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3651[i + 0]) );
  }
  i3642.textureParameters = i3650
  var i3653 = i3643[9]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3653[i + 0]) );
  }
  i3642.materialFlags = i3652
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3657 = data
  i3656.name = i3657[0]
  i3656.value = i3657[1]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3661 = data
  i3660.name = i3661[0]
  i3660.value = new pc.Color(i3661[1], i3661[2], i3661[3], i3661[4])
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3665 = data
  i3664.name = i3665[0]
  i3664.value = new pc.Vec4( i3665[1], i3665[2], i3665[3], i3665[4] )
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3669 = data
  i3668.name = i3669[0]
  request.r(i3669[1], i3669[2], 0, i3668, 'value')
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3673 = data
  i3672.name = i3673[0]
  i3672.enabled = !!i3673[1]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3675 = data
  i3674.name = i3675[0]
  i3674.width = i3675[1]
  i3674.height = i3675[2]
  i3674.mipmapCount = i3675[3]
  i3674.anisoLevel = i3675[4]
  i3674.filterMode = i3675[5]
  i3674.hdr = !!i3675[6]
  i3674.format = i3675[7]
  i3674.wrapMode = i3675[8]
  i3674.alphaIsTransparency = !!i3675[9]
  i3674.alphaSource = i3675[10]
  i3674.graphicsFormat = i3675[11]
  i3674.sRGBTexture = !!i3675[12]
  i3674.desiredColorSpace = i3675[13]
  i3674.wrapU = i3675[14]
  i3674.wrapV = i3675[15]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3677 = data
  i3676.position = new pc.Vec3( i3677[0], i3677[1], i3677[2] )
  i3676.scale = new pc.Vec3( i3677[3], i3677[4], i3677[5] )
  i3676.rotation = new pc.Quat(i3677[6], i3677[7], i3677[8], i3677[9])
  return i3676
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i3678 = root || request.c( 'HeartEffect' )
  var i3679 = data
  i3678.defaultLifeTime = i3679[0]
  request.r(i3679[1], i3679[2], 0, i3678, 'tf')
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3681 = data
  i3680.color = new pc.Color(i3681[0], i3681[1], i3681[2], i3681[3])
  request.r(i3681[4], i3681[5], 0, i3680, 'sprite')
  i3680.flipX = !!i3681[6]
  i3680.flipY = !!i3681[7]
  i3680.drawMode = i3681[8]
  i3680.size = new pc.Vec2( i3681[9], i3681[10] )
  i3680.tileMode = i3681[11]
  i3680.adaptiveModeThreshold = i3681[12]
  i3680.maskInteraction = i3681[13]
  i3680.spriteSortPoint = i3681[14]
  i3680.enabled = !!i3681[15]
  request.r(i3681[16], i3681[17], 0, i3680, 'sharedMaterial')
  var i3683 = i3681[18]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 2) {
  request.r(i3683[i + 0], i3683[i + 1], 2, i3682, '')
  }
  i3680.sharedMaterials = i3682
  i3680.receiveShadows = !!i3681[19]
  i3680.shadowCastingMode = i3681[20]
  i3680.sortingLayerID = i3681[21]
  i3680.sortingOrder = i3681[22]
  i3680.lightmapIndex = i3681[23]
  i3680.lightmapSceneIndex = i3681[24]
  i3680.lightmapScaleOffset = new pc.Vec4( i3681[25], i3681[26], i3681[27], i3681[28] )
  i3680.lightProbeUsage = i3681[29]
  i3680.reflectionProbeUsage = i3681[30]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3687 = data
  i3686.name = i3687[0]
  i3686.tagId = i3687[1]
  i3686.enabled = !!i3687[2]
  i3686.isStatic = !!i3687[3]
  i3686.layer = i3687[4]
  return i3686
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i3688 = root || request.c( 'HeartBreakEffect' )
  var i3689 = data
  i3688.defaultLifeTime = i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'tf')
  return i3688
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i3690 = root || request.c( 'BlinkEffect' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'tf')
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3693 = data
  request.r(i3693[0], i3693[1], 0, i3692, 'mesh')
  i3692.meshCount = i3693[2]
  i3692.activeVertexStreamsCount = i3693[3]
  i3692.alignment = i3693[4]
  i3692.renderMode = i3693[5]
  i3692.sortMode = i3693[6]
  i3692.lengthScale = i3693[7]
  i3692.velocityScale = i3693[8]
  i3692.cameraVelocityScale = i3693[9]
  i3692.normalDirection = i3693[10]
  i3692.sortingFudge = i3693[11]
  i3692.minParticleSize = i3693[12]
  i3692.maxParticleSize = i3693[13]
  i3692.pivot = new pc.Vec3( i3693[14], i3693[15], i3693[16] )
  request.r(i3693[17], i3693[18], 0, i3692, 'trailMaterial')
  i3692.applyActiveColorSpace = !!i3693[19]
  i3692.enabled = !!i3693[20]
  request.r(i3693[21], i3693[22], 0, i3692, 'sharedMaterial')
  var i3695 = i3693[23]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 2, i3694, '')
  }
  i3692.sharedMaterials = i3694
  i3692.receiveShadows = !!i3693[24]
  i3692.shadowCastingMode = i3693[25]
  i3692.sortingLayerID = i3693[26]
  i3692.sortingOrder = i3693[27]
  i3692.lightmapIndex = i3693[28]
  i3692.lightmapSceneIndex = i3693[29]
  i3692.lightmapScaleOffset = new pc.Vec4( i3693[30], i3693[31], i3693[32], i3693[33] )
  i3692.lightProbeUsage = i3693[34]
  i3692.reflectionProbeUsage = i3693[35]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3697 = data
  i3696.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3697[0], i3696.main)
  i3696.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3697[1], i3696.colorBySpeed)
  i3696.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3697[2], i3696.colorOverLifetime)
  i3696.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3697[3], i3696.emission)
  i3696.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3697[4], i3696.rotationBySpeed)
  i3696.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3697[5], i3696.rotationOverLifetime)
  i3696.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3697[6], i3696.shape)
  i3696.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3697[7], i3696.sizeBySpeed)
  i3696.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3697[8], i3696.sizeOverLifetime)
  i3696.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3697[9], i3696.textureSheetAnimation)
  i3696.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3697[10], i3696.velocityOverLifetime)
  i3696.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3697[11], i3696.noise)
  i3696.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3697[12], i3696.inheritVelocity)
  i3696.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3697[13], i3696.forceOverLifetime)
  i3696.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3697[14], i3696.limitVelocityOverLifetime)
  i3696.useAutoRandomSeed = !!i3697[15]
  i3696.randomSeed = i3697[16]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3698 = root || new pc.ParticleSystemMain()
  var i3699 = data
  i3698.duration = i3699[0]
  i3698.loop = !!i3699[1]
  i3698.prewarm = !!i3699[2]
  i3698.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[3], i3698.startDelay)
  i3698.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[4], i3698.startLifetime)
  i3698.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[5], i3698.startSpeed)
  i3698.startSize3D = !!i3699[6]
  i3698.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[7], i3698.startSizeX)
  i3698.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[8], i3698.startSizeY)
  i3698.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[9], i3698.startSizeZ)
  i3698.startRotation3D = !!i3699[10]
  i3698.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[11], i3698.startRotationX)
  i3698.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[12], i3698.startRotationY)
  i3698.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[13], i3698.startRotationZ)
  i3698.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3699[14], i3698.startColor)
  i3698.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[15], i3698.gravityModifier)
  i3698.simulationSpace = i3699[16]
  request.r(i3699[17], i3699[18], 0, i3698, 'customSimulationSpace')
  i3698.simulationSpeed = i3699[19]
  i3698.useUnscaledTime = !!i3699[20]
  i3698.scalingMode = i3699[21]
  i3698.playOnAwake = !!i3699[22]
  i3698.maxParticles = i3699[23]
  i3698.emitterVelocityMode = i3699[24]
  i3698.stopAction = i3699[25]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3700 = root || new pc.MinMaxCurve()
  var i3701 = data
  i3700.mode = i3701[0]
  i3700.curveMin = new pc.AnimationCurve( { keys_flow: i3701[1] } )
  i3700.curveMax = new pc.AnimationCurve( { keys_flow: i3701[2] } )
  i3700.curveMultiplier = i3701[3]
  i3700.constantMin = i3701[4]
  i3700.constantMax = i3701[5]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3702 = root || new pc.MinMaxGradient()
  var i3703 = data
  i3702.mode = i3703[0]
  i3702.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3703[1], i3702.gradientMin)
  i3702.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3703[2], i3702.gradientMax)
  i3702.colorMin = new pc.Color(i3703[3], i3703[4], i3703[5], i3703[6])
  i3702.colorMax = new pc.Color(i3703[7], i3703[8], i3703[9], i3703[10])
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3705 = data
  i3704.mode = i3705[0]
  var i3707 = i3705[1]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3707[i + 0]) );
  }
  i3704.colorKeys = i3706
  var i3709 = i3705[2]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3709[i + 0]) );
  }
  i3704.alphaKeys = i3708
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3710 = root || new pc.ParticleSystemColorBySpeed()
  var i3711 = data
  i3710.enabled = !!i3711[0]
  i3710.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3711[1], i3710.color)
  i3710.range = new pc.Vec2( i3711[2], i3711[3] )
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3715 = data
  i3714.color = new pc.Color(i3715[0], i3715[1], i3715[2], i3715[3])
  i3714.time = i3715[4]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3719 = data
  i3718.alpha = i3719[0]
  i3718.time = i3719[1]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3720 = root || new pc.ParticleSystemColorOverLifetime()
  var i3721 = data
  i3720.enabled = !!i3721[0]
  i3720.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3721[1], i3720.color)
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3722 = root || new pc.ParticleSystemEmitter()
  var i3723 = data
  i3722.enabled = !!i3723[0]
  i3722.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3723[1], i3722.rateOverTime)
  i3722.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3723[2], i3722.rateOverDistance)
  var i3725 = i3723[3]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3725[i + 0]) );
  }
  i3722.bursts = i3724
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3728 = root || new pc.ParticleSystemBurst()
  var i3729 = data
  i3728.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3729[0], i3728.count)
  i3728.cycleCount = i3729[1]
  i3728.minCount = i3729[2]
  i3728.maxCount = i3729[3]
  i3728.repeatInterval = i3729[4]
  i3728.time = i3729[5]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3730 = root || new pc.ParticleSystemRotationBySpeed()
  var i3731 = data
  i3730.enabled = !!i3731[0]
  i3730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[1], i3730.x)
  i3730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[2], i3730.y)
  i3730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[3], i3730.z)
  i3730.separateAxes = !!i3731[4]
  i3730.range = new pc.Vec2( i3731[5], i3731[6] )
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3732 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3733 = data
  i3732.enabled = !!i3733[0]
  i3732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[1], i3732.x)
  i3732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[2], i3732.y)
  i3732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[3], i3732.z)
  i3732.separateAxes = !!i3733[4]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3734 = root || new pc.ParticleSystemShape()
  var i3735 = data
  i3734.enabled = !!i3735[0]
  i3734.shapeType = i3735[1]
  i3734.randomDirectionAmount = i3735[2]
  i3734.sphericalDirectionAmount = i3735[3]
  i3734.randomPositionAmount = i3735[4]
  i3734.alignToDirection = !!i3735[5]
  i3734.radius = i3735[6]
  i3734.radiusMode = i3735[7]
  i3734.radiusSpread = i3735[8]
  i3734.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[9], i3734.radiusSpeed)
  i3734.radiusThickness = i3735[10]
  i3734.angle = i3735[11]
  i3734.length = i3735[12]
  i3734.boxThickness = new pc.Vec3( i3735[13], i3735[14], i3735[15] )
  i3734.meshShapeType = i3735[16]
  request.r(i3735[17], i3735[18], 0, i3734, 'mesh')
  request.r(i3735[19], i3735[20], 0, i3734, 'meshRenderer')
  request.r(i3735[21], i3735[22], 0, i3734, 'skinnedMeshRenderer')
  i3734.useMeshMaterialIndex = !!i3735[23]
  i3734.meshMaterialIndex = i3735[24]
  i3734.useMeshColors = !!i3735[25]
  i3734.normalOffset = i3735[26]
  i3734.arc = i3735[27]
  i3734.arcMode = i3735[28]
  i3734.arcSpread = i3735[29]
  i3734.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[30], i3734.arcSpeed)
  i3734.donutRadius = i3735[31]
  i3734.position = new pc.Vec3( i3735[32], i3735[33], i3735[34] )
  i3734.rotation = new pc.Vec3( i3735[35], i3735[36], i3735[37] )
  i3734.scale = new pc.Vec3( i3735[38], i3735[39], i3735[40] )
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3736 = root || new pc.ParticleSystemSizeBySpeed()
  var i3737 = data
  i3736.enabled = !!i3737[0]
  i3736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[1], i3736.x)
  i3736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[2], i3736.y)
  i3736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[3], i3736.z)
  i3736.separateAxes = !!i3737[4]
  i3736.range = new pc.Vec2( i3737[5], i3737[6] )
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3738 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3739 = data
  i3738.enabled = !!i3739[0]
  i3738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[1], i3738.x)
  i3738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[2], i3738.y)
  i3738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[3], i3738.z)
  i3738.separateAxes = !!i3739[4]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3740 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3741 = data
  i3740.enabled = !!i3741[0]
  i3740.mode = i3741[1]
  i3740.animation = i3741[2]
  i3740.numTilesX = i3741[3]
  i3740.numTilesY = i3741[4]
  i3740.useRandomRow = !!i3741[5]
  i3740.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[6], i3740.frameOverTime)
  i3740.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[7], i3740.startFrame)
  i3740.cycleCount = i3741[8]
  i3740.rowIndex = i3741[9]
  i3740.flipU = i3741[10]
  i3740.flipV = i3741[11]
  i3740.spriteCount = i3741[12]
  var i3743 = i3741[13]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 2) {
  request.r(i3743[i + 0], i3743[i + 1], 2, i3742, '')
  }
  i3740.sprites = i3742
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3746 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3747 = data
  i3746.enabled = !!i3747[0]
  i3746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[1], i3746.x)
  i3746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[2], i3746.y)
  i3746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[3], i3746.z)
  i3746.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[4], i3746.radial)
  i3746.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[5], i3746.speedModifier)
  i3746.space = i3747[6]
  i3746.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[7], i3746.orbitalX)
  i3746.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[8], i3746.orbitalY)
  i3746.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[9], i3746.orbitalZ)
  i3746.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[10], i3746.orbitalOffsetX)
  i3746.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[11], i3746.orbitalOffsetY)
  i3746.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[12], i3746.orbitalOffsetZ)
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3748 = root || new pc.ParticleSystemNoise()
  var i3749 = data
  i3748.enabled = !!i3749[0]
  i3748.separateAxes = !!i3749[1]
  i3748.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[2], i3748.strengthX)
  i3748.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[3], i3748.strengthY)
  i3748.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[4], i3748.strengthZ)
  i3748.frequency = i3749[5]
  i3748.damping = !!i3749[6]
  i3748.octaveCount = i3749[7]
  i3748.octaveMultiplier = i3749[8]
  i3748.octaveScale = i3749[9]
  i3748.quality = i3749[10]
  i3748.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[11], i3748.scrollSpeed)
  i3748.scrollSpeedMultiplier = i3749[12]
  i3748.remapEnabled = !!i3749[13]
  i3748.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[14], i3748.remapX)
  i3748.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[15], i3748.remapY)
  i3748.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[16], i3748.remapZ)
  i3748.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[17], i3748.positionAmount)
  i3748.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[18], i3748.rotationAmount)
  i3748.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[19], i3748.sizeAmount)
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3750 = root || new pc.ParticleSystemInheritVelocity()
  var i3751 = data
  i3750.enabled = !!i3751[0]
  i3750.mode = i3751[1]
  i3750.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[2], i3750.curve)
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3752 = root || new pc.ParticleSystemForceOverLifetime()
  var i3753 = data
  i3752.enabled = !!i3753[0]
  i3752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[1], i3752.x)
  i3752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[2], i3752.y)
  i3752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[3], i3752.z)
  i3752.space = i3753[4]
  i3752.randomized = !!i3753[5]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3754 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3755 = data
  i3754.enabled = !!i3755[0]
  i3754.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[1], i3754.limit)
  i3754.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[2], i3754.limitX)
  i3754.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[3], i3754.limitY)
  i3754.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[4], i3754.limitZ)
  i3754.dampen = i3755[5]
  i3754.separateAxes = !!i3755[6]
  i3754.space = i3755[7]
  i3754.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[8], i3754.drag)
  i3754.multiplyDragByParticleSize = !!i3755[9]
  i3754.multiplyDragByParticleVelocity = !!i3755[10]
  return i3754
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i3756 = root || request.c( 'StarExploreFX' )
  var i3757 = data
  request.r(i3757[0], i3757[1], 0, i3756, 'tf')
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3759 = data
  i3758.pivot = new pc.Vec2( i3759[0], i3759[1] )
  i3758.anchorMin = new pc.Vec2( i3759[2], i3759[3] )
  i3758.anchorMax = new pc.Vec2( i3759[4], i3759[5] )
  i3758.sizeDelta = new pc.Vec2( i3759[6], i3759[7] )
  i3758.anchoredPosition3D = new pc.Vec3( i3759[8], i3759[9], i3759[10] )
  i3758.rotation = new pc.Quat(i3759[11], i3759[12], i3759[13], i3759[14])
  i3758.scale = new pc.Vec3( i3759[15], i3759[16], i3759[17] )
  return i3758
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i3760 = root || request.c( 'ClockTimer' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'fillImage')
  request.r(i3761[2], i3761[3], 0, i3760, 'tf')
  i3760.spawnZoomDuration = i3761[4]
  i3760.despawnZoomDuration = i3761[5]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3763 = data
  i3762.cullTransparentMesh = !!i3763[0]
  return i3762
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.UI.Image' )
  var i3765 = data
  request.r(i3765[0], i3765[1], 0, i3764, 'm_Sprite')
  i3764.m_Type = i3765[2]
  i3764.m_PreserveAspect = !!i3765[3]
  i3764.m_FillCenter = !!i3765[4]
  i3764.m_FillMethod = i3765[5]
  i3764.m_FillAmount = i3765[6]
  i3764.m_FillClockwise = !!i3765[7]
  i3764.m_FillOrigin = i3765[8]
  i3764.m_UseSpriteMesh = !!i3765[9]
  i3764.m_PixelsPerUnitMultiplier = i3765[10]
  request.r(i3765[11], i3765[12], 0, i3764, 'm_Material')
  i3764.m_Maskable = !!i3765[13]
  i3764.m_Color = new pc.Color(i3765[14], i3765[15], i3765[16], i3765[17])
  i3764.m_RaycastTarget = !!i3765[18]
  i3764.m_RaycastPadding = new pc.Vec4( i3765[19], i3765[20], i3765[21], i3765[22] )
  return i3764
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i3766 = root || request.c( 'WaterSplash' )
  var i3767 = data
  request.r(i3767[0], i3767[1], 0, i3766, 'tf')
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3769 = data
  i3768.center = new pc.Vec3( i3769[0], i3769[1], i3769[2] )
  i3768.radius = i3769[3]
  i3768.enabled = !!i3769[4]
  i3768.isTrigger = !!i3769[5]
  request.r(i3769[6], i3769[7], 0, i3768, 'material')
  return i3768
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i3770 = root || request.c( 'ItemDraggable' )
  var i3771 = data
  i3770.isDraggable = !!i3771[0]
  request.r(i3771[1], i3771[2], 0, i3770, 'returnTransform')
  i3770.setParentToReturnTransform = !!i3771[3]
  i3770.returnToStartOnDragFailed = !!i3771[4]
  i3770.returnToExactReturnTransformPosition = !!i3771[5]
  i3770.targetItemType = i3771[6]
  request.r(i3771[7], i3771[8], 0, i3770, 'item')
  i3770.checkState = !!i3771[9]
  request.r(i3771[10], i3771[11], 0, i3770, 'shadowObject')
  i3770.playReturnToStartFinishSound = !!i3771[12]
  i3770.returnToStartFinishFxType = i3771[13]
  i3770.spawnBreakHeartOnDropFail = !!i3771[14]
  i3770.playBeginDragSound = !!i3771[15]
  i3770.beginDragFxType = i3771[16]
  i3770.liftOffset = i3771[17]
  i3770.dragScaleMultiplier = i3771[18]
  i3770.dragScaleDuration = i3771[19]
  i3770.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i3771[20], i3770.onBeginDrag)
  i3770.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i3771[21], i3770.onDropSuccess)
  i3770.onDropFail = request.d('UnityEngine.Events.UnityEvent', i3771[22], i3770.onDropFail)
  i3770.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i3771[23], i3770.onReturnToStartComplete)
  return i3770
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3773 = data
  i3772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3773[0], i3772.m_PersistentCalls)
  return i3772
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3775 = data
  var i3777 = i3775[0]
  var i3776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.add(request.d('UnityEngine.Events.PersistentCall', i3777[i + 0]));
  }
  i3774.m_Calls = i3776
  return i3774
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'm_Target')
  i3780.m_TargetAssemblyTypeName = i3781[2]
  i3780.m_MethodName = i3781[3]
  i3780.m_Mode = i3781[4]
  i3780.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3781[5], i3780.m_Arguments)
  i3780.m_CallState = i3781[6]
  return i3780
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3782 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3783 = data
  request.r(i3783[0], i3783[1], 0, i3782, 'm_ObjectArgument')
  i3782.m_ObjectArgumentAssemblyTypeName = i3783[2]
  i3782.m_IntArgument = i3783[3]
  i3782.m_FloatArgument = i3783[4]
  i3782.m_StringArgument = i3783[5]
  i3782.m_BoolArgument = !!i3783[6]
  return i3782
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i3784 = root || request.c( 'ItemMoveToTarget' )
  var i3785 = data
  request.r(i3785[0], i3785[1], 0, i3784, 'defaultTarget')
  i3784.duration = i3785[2]
  i3784.useAnimationCurve = !!i3785[3]
  i3784.moveCurve = new pc.AnimationCurve( { keys_flow: i3785[4] } )
  i3784.easeType = i3785[5]
  i3784.moveType = i3785[6]
  i3784.jumpPower = i3785[7]
  i3784.numJumps = i3785[8]
  i3784.rotate360DuringJump = !!i3785[9]
  i3784.flipRotate = !!i3785[10]
  i3784.angleRotate = i3785[11]
  i3784.scaleOnMove = !!i3785[12]
  i3784.endScaleMultiplier = i3785[13]
  i3784.setParentToTarget = !!i3785[14]
  i3784.onComplete = request.d('UnityEngine.Events.UnityEvent', i3785[15], i3784.onComplete)
  i3784.lockInputWhileMoving = !!i3785[16]
  i3784.resetParentBeforeMove = !!i3785[17]
  return i3784
}

Deserializers["Paper"] = function (request, data, root) {
  var i3786 = root || request.c( 'Paper' )
  var i3787 = data
  i3786.isUse = !!i3787[0]
  request.r(i3787[1], i3787[2], 0, i3786, 'paper')
  request.r(i3787[3], i3787[4], 0, i3786, 'paperTrash')
  request.r(i3787[5], i3787[6], 0, i3786, 'itemDragRaycastTarget')
  request.r(i3787[7], i3787[8], 0, i3786, 'curentCollider')
  i3786.isDone = !!i3787[9]
  i3786.onProcess = !!i3787[10]
  i3786.requireMatchingTargetTypeForHandTut = !!i3787[11]
  request.r(i3787[12], i3787[13], 0, i3786, 'itemDraggable')
  request.r(i3787[14], i3787[15], 0, i3786, 'itemClickable')
  request.r(i3787[16], i3787[17], 0, i3786, 'itemStirring')
  request.r(i3787[18], i3787[19], 0, i3786, 'itemKnifeSpriteMaskCutter')
  request.r(i3787[20], i3787[21], 0, i3786, 'itemSpriteMaskPainter')
  request.r(i3787[22], i3787[23], 0, i3786, 'itemDragSpriteMaskPainter')
  request.r(i3787[24], i3787[25], 0, i3786, 'itemMoveToTarget')
  request.r(i3787[26], i3787[27], 0, i3786, 'animator')
  i3786.itemType = i3787[28]
  request.r(i3787[29], i3787[30], 0, i3786, 'spriteRenderer')
  i3786.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3787[31], i3786.onKnifeIn)
  i3786.heartEffectScale = i3787[32]
  i3786.breakHeartEffectScale = i3787[33]
  i3786.blinkEffectScale = i3787[34]
  i3786.mergeEffectScale = i3787[35]
  i3786.playMoveToTargetFinishSound = !!i3787[36]
  i3786.moveToTargetFinishFxType = i3787[37]
  i3786.fxSpawnZPos = i3787[38]
  request.r(i3787[39], i3787[40], 0, i3786, 'tf')
  return i3786
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i3788 = root || request.c( 'ItemDragRaycastTarget' )
  var i3789 = data
  i3788.targetToFind = i3789[0]
  i3788.targetItemTypeWhenHit = i3789[1]
  i3788.targetItemTypeOnDropFail = i3789[2]
  request.r(i3789[3], i3789[4], 0, i3788, 'raycastPoint')
  i3788.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3789[5] )
  i3788.rayDistance = i3789[6]
  i3788.updateMoveDefaultTarget = !!i3789[7]
  i3788.invokeOnlyWhenTargetChanged = !!i3789[8]
  i3788.targetChangeEnabled = !!i3789[9]
  i3788.restoreTargetOnDropFail = !!i3789[10]
  i3788.resetCurrentTargetOnNoHit = !!i3789[11]
  i3788.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i3789[12], i3788.onTargetFound)
  i3788.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i3789[13], i3788.onTargetFoundWithItem)
  return i3788
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i3790 = root || request.c( 'ItemRaycastTargetEvent' )
  var i3791 = data
  i3790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3791[0], i3790.m_PersistentCalls)
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3793 = data
  request.r(i3793[0], i3793[1], 0, i3792, 'animatorController')
  request.r(i3793[2], i3793[3], 0, i3792, 'avatar')
  i3792.updateMode = i3793[4]
  i3792.hasTransformHierarchy = !!i3793[5]
  i3792.applyRootMotion = !!i3793[6]
  var i3795 = i3793[7]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 2) {
  request.r(i3795[i + 0], i3795[i + 1], 2, i3794, '')
  }
  i3792.humanBones = i3794
  i3792.enabled = !!i3793[8]
  return i3792
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i3798 = root || request.c( 'ItemSound' )
  var i3799 = data
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.index = i3801[1]
  i3800.startup = !!i3801[2]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3803 = data
  i3802.planeDistance = i3803[0]
  i3802.referencePixelsPerUnit = i3803[1]
  i3802.isFallbackOverlay = !!i3803[2]
  i3802.renderMode = i3803[3]
  i3802.renderOrder = i3803[4]
  i3802.sortingLayerName = i3803[5]
  i3802.sortingOrder = i3803[6]
  i3802.scaleFactor = i3803[7]
  request.r(i3803[8], i3803[9], 0, i3802, 'worldCamera')
  i3802.overrideSorting = !!i3803[10]
  i3802.pixelPerfect = !!i3803[11]
  i3802.targetDisplay = i3803[12]
  i3802.overridePixelPerfect = !!i3803[13]
  i3802.enabled = !!i3803[14]
  return i3802
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3804 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3805 = data
  i3804.m_UiScaleMode = i3805[0]
  i3804.m_ReferencePixelsPerUnit = i3805[1]
  i3804.m_ScaleFactor = i3805[2]
  i3804.m_ReferenceResolution = new pc.Vec2( i3805[3], i3805[4] )
  i3804.m_ScreenMatchMode = i3805[5]
  i3804.m_MatchWidthOrHeight = i3805[6]
  i3804.m_PhysicalUnit = i3805[7]
  i3804.m_FallbackScreenDPI = i3805[8]
  i3804.m_DefaultSpriteDPI = i3805[9]
  i3804.m_DynamicPixelsPerUnit = i3805[10]
  i3804.m_PresetInfoIsWorld = !!i3805[11]
  return i3804
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3806 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3807 = data
  i3806.m_IgnoreReversedGraphics = !!i3807[0]
  i3806.m_BlockingObjects = i3807[1]
  i3806.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3807[2] )
  return i3806
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3808 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3809 = data
  i3808.m_hasFontAssetChanged = !!i3809[0]
  request.r(i3809[1], i3809[2], 0, i3808, 'm_baseMaterial')
  i3808.m_maskOffset = new pc.Vec4( i3809[3], i3809[4], i3809[5], i3809[6] )
  i3808.m_text = i3809[7]
  i3808.m_isRightToLeft = !!i3809[8]
  request.r(i3809[9], i3809[10], 0, i3808, 'm_fontAsset')
  request.r(i3809[11], i3809[12], 0, i3808, 'm_sharedMaterial')
  var i3811 = i3809[13]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 2) {
  request.r(i3811[i + 0], i3811[i + 1], 2, i3810, '')
  }
  i3808.m_fontSharedMaterials = i3810
  request.r(i3809[14], i3809[15], 0, i3808, 'm_fontMaterial')
  var i3813 = i3809[16]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 2, i3812, '')
  }
  i3808.m_fontMaterials = i3812
  i3808.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3809[17], i3809[18], i3809[19], i3809[20])
  i3808.m_fontColor = new pc.Color(i3809[21], i3809[22], i3809[23], i3809[24])
  i3808.m_enableVertexGradient = !!i3809[25]
  i3808.m_colorMode = i3809[26]
  i3808.m_fontColorGradient = request.d('TMPro.VertexGradient', i3809[27], i3808.m_fontColorGradient)
  request.r(i3809[28], i3809[29], 0, i3808, 'm_fontColorGradientPreset')
  request.r(i3809[30], i3809[31], 0, i3808, 'm_spriteAsset')
  i3808.m_tintAllSprites = !!i3809[32]
  request.r(i3809[33], i3809[34], 0, i3808, 'm_StyleSheet')
  i3808.m_TextStyleHashCode = i3809[35]
  i3808.m_overrideHtmlColors = !!i3809[36]
  i3808.m_faceColor = UnityEngine.Color32.ConstructColor(i3809[37], i3809[38], i3809[39], i3809[40])
  i3808.m_fontSize = i3809[41]
  i3808.m_fontSizeBase = i3809[42]
  i3808.m_fontWeight = i3809[43]
  i3808.m_enableAutoSizing = !!i3809[44]
  i3808.m_fontSizeMin = i3809[45]
  i3808.m_fontSizeMax = i3809[46]
  i3808.m_fontStyle = i3809[47]
  i3808.m_HorizontalAlignment = i3809[48]
  i3808.m_VerticalAlignment = i3809[49]
  i3808.m_textAlignment = i3809[50]
  i3808.m_characterSpacing = i3809[51]
  i3808.m_wordSpacing = i3809[52]
  i3808.m_lineSpacing = i3809[53]
  i3808.m_lineSpacingMax = i3809[54]
  i3808.m_paragraphSpacing = i3809[55]
  i3808.m_charWidthMaxAdj = i3809[56]
  i3808.m_TextWrappingMode = i3809[57]
  i3808.m_wordWrappingRatios = i3809[58]
  i3808.m_overflowMode = i3809[59]
  request.r(i3809[60], i3809[61], 0, i3808, 'm_linkedTextComponent')
  request.r(i3809[62], i3809[63], 0, i3808, 'parentLinkedComponent')
  i3808.m_enableKerning = !!i3809[64]
  var i3815 = i3809[65]
  var i3814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.add(i3815[i + 0]);
  }
  i3808.m_ActiveFontFeatures = i3814
  i3808.m_enableExtraPadding = !!i3809[66]
  i3808.checkPaddingRequired = !!i3809[67]
  i3808.m_isRichText = !!i3809[68]
  i3808.m_parseCtrlCharacters = !!i3809[69]
  i3808.m_isOrthographic = !!i3809[70]
  i3808.m_isCullingEnabled = !!i3809[71]
  i3808.m_horizontalMapping = i3809[72]
  i3808.m_verticalMapping = i3809[73]
  i3808.m_uvLineOffset = i3809[74]
  i3808.m_geometrySortingOrder = i3809[75]
  i3808.m_IsTextObjectScaleStatic = !!i3809[76]
  i3808.m_VertexBufferAutoSizeReduction = !!i3809[77]
  i3808.m_useMaxVisibleDescender = !!i3809[78]
  i3808.m_pageToDisplay = i3809[79]
  i3808.m_margin = new pc.Vec4( i3809[80], i3809[81], i3809[82], i3809[83] )
  i3808.m_isUsingLegacyAnimationComponent = !!i3809[84]
  i3808.m_isVolumetricText = !!i3809[85]
  request.r(i3809[86], i3809[87], 0, i3808, 'm_Material')
  i3808.m_EmojiFallbackSupport = !!i3809[88]
  i3808.m_Maskable = !!i3809[89]
  i3808.m_Color = new pc.Color(i3809[90], i3809[91], i3809[92], i3809[93])
  i3808.m_RaycastTarget = !!i3809[94]
  i3808.m_RaycastPadding = new pc.Vec4( i3809[95], i3809[96], i3809[97], i3809[98] )
  return i3808
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3816 = root || request.c( 'TMPro.VertexGradient' )
  var i3817 = data
  i3816.topLeft = new pc.Color(i3817[0], i3817[1], i3817[2], i3817[3])
  i3816.topRight = new pc.Color(i3817[4], i3817[5], i3817[6], i3817[7])
  i3816.bottomLeft = new pc.Color(i3817[8], i3817[9], i3817[10], i3817[11])
  i3816.bottomRight = new pc.Color(i3817[12], i3817[13], i3817[14], i3817[15])
  return i3816
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.UI.Button' )
  var i3821 = data
  i3820.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3821[0], i3820.m_OnClick)
  i3820.m_Navigation = request.d('UnityEngine.UI.Navigation', i3821[1], i3820.m_Navigation)
  i3820.m_Transition = i3821[2]
  i3820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3821[3], i3820.m_Colors)
  i3820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3821[4], i3820.m_SpriteState)
  i3820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3821[5], i3820.m_AnimationTriggers)
  i3820.m_Interactable = !!i3821[6]
  request.r(i3821[7], i3821[8], 0, i3820, 'm_TargetGraphic')
  return i3820
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3823 = data
  i3822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3823[0], i3822.m_PersistentCalls)
  return i3822
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3824 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3825 = data
  i3824.m_Mode = i3825[0]
  i3824.m_WrapAround = !!i3825[1]
  request.r(i3825[2], i3825[3], 0, i3824, 'm_SelectOnUp')
  request.r(i3825[4], i3825[5], 0, i3824, 'm_SelectOnDown')
  request.r(i3825[6], i3825[7], 0, i3824, 'm_SelectOnLeft')
  request.r(i3825[8], i3825[9], 0, i3824, 'm_SelectOnRight')
  return i3824
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3827 = data
  i3826.m_NormalColor = new pc.Color(i3827[0], i3827[1], i3827[2], i3827[3])
  i3826.m_HighlightedColor = new pc.Color(i3827[4], i3827[5], i3827[6], i3827[7])
  i3826.m_PressedColor = new pc.Color(i3827[8], i3827[9], i3827[10], i3827[11])
  i3826.m_SelectedColor = new pc.Color(i3827[12], i3827[13], i3827[14], i3827[15])
  i3826.m_DisabledColor = new pc.Color(i3827[16], i3827[17], i3827[18], i3827[19])
  i3826.m_ColorMultiplier = i3827[20]
  i3826.m_FadeDuration = i3827[21]
  return i3826
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3829 = data
  request.r(i3829[0], i3829[1], 0, i3828, 'm_HighlightedSprite')
  request.r(i3829[2], i3829[3], 0, i3828, 'm_PressedSprite')
  request.r(i3829[4], i3829[5], 0, i3828, 'm_SelectedSprite')
  request.r(i3829[6], i3829[7], 0, i3828, 'm_DisabledSprite')
  return i3828
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3830 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3831 = data
  i3830.m_NormalTrigger = i3831[0]
  i3830.m_HighlightedTrigger = i3831[1]
  i3830.m_PressedTrigger = i3831[2]
  i3830.m_SelectedTrigger = i3831[3]
  i3830.m_DisabledTrigger = i3831[4]
  return i3830
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3832 = root || request.c( 'Ply_Pool' )
  var i3833 = data
  var i3835 = i3833[0]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( request.d('Ply_Pool+PoolAmount', i3835[i + 0]) );
  }
  i3832.poolAmounts = i3834
  request.r(i3833[1], i3833[2], 0, i3832, 'poolHolder')
  return i3832
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3838 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3839 = data
  i3838.type = i3839[0]
  i3838.amount = i3839[1]
  request.r(i3839[2], i3839[3], 0, i3838, 'gameUnit')
  return i3838
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3840 = root || request.c( 'Ply_SoundManager' )
  var i3841 = data
  var i3843 = i3841[0]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( request.d('Ply_SoundManager+FxAudio', i3843[i + 0]) );
  }
  i3840.fxAudios = i3842
  var i3845 = i3841[1]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 2, i3844, '')
  }
  i3840.audioClips = i3844
  request.r(i3841[2], i3841[3], 0, i3840, 'sound')
  return i3840
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i3848 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i3849 = data
  i3848.fxType = i3849[0]
  request.r(i3849[1], i3849[2], 0, i3848, 'audioClip')
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'clip')
  request.r(i3853[2], i3853[3], 0, i3852, 'outputAudioMixerGroup')
  i3852.playOnAwake = !!i3853[4]
  i3852.loop = !!i3853[5]
  i3852.time = i3853[6]
  i3852.volume = i3853[7]
  i3852.pitch = i3853[8]
  i3852.enabled = !!i3853[9]
  return i3852
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3854 = root || request.c( 'GameManager' )
  var i3855 = data
  i3854.isPlaying = !!i3855[0]
  i3854.isTutorial = !!i3855[1]
  i3854.isGotoStore = !!i3855[2]
  i3854.isLoseGame = !!i3855[3]
  i3854.countMove = i3855[4]
  i3854.currentLayer = i3855[5]
  request.r(i3855[6], i3855[7], 0, i3854, 'trashCan')
  request.r(i3855[8], i3855[9], 0, i3854, 'step1')
  request.r(i3855[10], i3855[11], 0, i3854, 'paperBox')
  return i3854
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3856 = root || request.c( 'UIManager' )
  var i3857 = data
  request.r(i3857[0], i3857[1], 0, i3856, 'winUI')
  request.r(i3857[2], i3857[3], 0, i3856, 'loseUI')
  request.r(i3857[4], i3857[5], 0, i3856, 'tutorial')
  request.r(i3857[6], i3857[7], 0, i3856, 'verticalUI')
  request.r(i3857[8], i3857[9], 0, i3856, 'horizontalUI')
  request.r(i3857[10], i3857[11], 0, i3856, 'downloadBtn')
  request.r(i3857[12], i3857[13], 0, i3856, 'horizontalDownloadBtn')
  request.r(i3857[14], i3857[15], 0, i3856, 'textAnim')
  i3856.isGoogleBuild = !!i3857[16]
  i3856.screenWidth = i3857[17]
  i3856.screenHeight = i3857[18]
  i3856.scaleHeightOnWidth = i3857[19]
  i3856.isVertical = !!i3857[20]
  i3856.isScreenVertical = !!i3857[21]
  request.r(i3857[22], i3857[23], 0, i3856, 'cam')
  i3856.verticalUIHeightOnWidthRatio = i3857[24]
  i3856.scaleCameraOnValidate = !!i3857[25]
  i3856.screenVerticalHeightOnWidthRatio = i3857[26]
  i3856.useContinuousScaling = !!i3857[27]
  i3856.baseOrthographicSize = i3857[28]
  i3856.baseAspect = i3857[29]
  i3856.landscapeSizeRatio = i3857[30]
  i3856.defaultPortraitSizeRatio = i3857[31]
  var i3859 = i3857[32]
  var i3858 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.add(request.d('ScreenScaleStep', i3859[i + 0]));
  }
  i3856.discreteScaleSteps = i3858
  i3856.usePerspectiveCamera = !!i3857[33]
  request.r(i3857[34], i3857[35], 0, i3856, 'perspectiveFocus')
  i3856.perspectiveFocusDistance = i3857[36]
  i3856.perspectivePadding = i3857[37]
  i3856.fitRendererBounds = !!i3857[38]
  request.r(i3857[39], i3857[40], 0, i3856, 'boundsRoot')
  var i3861 = i3857[41]
  var i3860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3861.length; i += 2) {
  request.r(i3861[i + 0], i3861[i + 1], 1, i3860, '')
  }
  i3856.boundsRenderers = i3860
  return i3856
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3864 = root || request.c( 'ScreenScaleStep' )
  var i3865 = data
  i3864.heightOnWidthRatio = i3865[0]
  i3864.orthographicSize = i3865[1]
  return i3864
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3868 = root || request.c( 'InputManager' )
  var i3869 = data
  i3868.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3869[0] )
  i3868.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3869[1] )
  i3868.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3869[2] )
  i3868.isDragging = !!i3869[3]
  return i3868
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i3870 = root || request.c( 'HandTutManager' )
  var i3871 = data
  var i3873 = i3871[0]
  var i3872 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3873.length; i += 2) {
  request.r(i3873[i + 0], i3873[i + 1], 1, i3872, '')
  }
  i3870.items = i3872
  request.r(i3871[1], i3871[2], 0, i3870, 'knife')
  request.r(i3871[3], i3871[4], 0, i3870, 'knife2')
  request.r(i3871[5], i3871[6], 0, i3870, 'salt')
  request.r(i3871[7], i3871[8], 0, i3870, 'handTutObject')
  request.r(i3871[9], i3871[10], 0, i3870, 'tapToCookObject')
  request.r(i3871[11], i3871[12], 0, i3870, 'oilItem')
  request.r(i3871[13], i3871[14], 0, i3870, 'stoveToggleEvent')
  request.r(i3871[15], i3871[16], 0, i3870, 'waterToggleEvent')
  request.r(i3871[17], i3871[18], 0, i3870, 'sinkBlock')
  var i3875 = i3871[19]
  var i3874 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 1, i3874, '')
  }
  i3870.itemsInWater = i3874
  i3870.noDelayItemCount = i3871[20]
  i3870.breakHeartNoDelayThreshold = i3871[21]
  i3870.shortIdleDelay = i3871[22]
  i3870.maxHandTutShowCount = i3871[23]
  i3870.showSinkWaterTutorialOnStart = !!i3871[24]
  i3870.waitForBowlIntro = !!i3871[25]
  i3870.idleDelay = i3871[26]
  i3870.firstHandTutDelay = i3871[27]
  i3870.phaseHandTutDelay = i3871[28]
  i3870.moveDuration = i3871[29]
  i3870.dragFadeDuration = i3871[30]
  i3870.clickScaleDuration = i3871[31]
  i3870.waitAtEndDuration = i3871[32]
  i3870.handZPosition = i3871[33]
  i3870.clickScaleMultiplier = i3871[34]
  i3870.moveEase = i3871[35]
  return i3870
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i3880 = root || request.c( 'SortChildByZPos' )
  var i3881 = data
  request.r(i3881[0], i3881[1], 0, i3880, 'transformToSort')
  var i3883 = i3881[2]
  var i3882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3883.length; i += 2) {
  request.r(i3883[i + 0], i3883[i + 1], 1, i3882, '')
  }
  i3880.childrenToSort = i3882
  i3880.zOffset = i3881[3]
  i3880.baseZ = i3881[4]
  return i3880
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i3886 = root || request.c( 'PhaseManager' )
  var i3887 = data
  var i3889 = i3887[0]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('PhaseData', i3889[i + 0]));
  }
  i3886.phases = i3888
  i3886.transitionType = i3887[1]
  i3886.transitionDuration = i3887[2]
  i3886.delayBeforeNextPhase = i3887[3]
  i3886.offScreenLeftX = i3887[4]
  i3886.offScreenRightX = i3887[5]
  i3886.offScreenBottomY = i3887[6]
  i3886.offScreenTopY = i3887[7]
  i3886.centerScreenX = i3887[8]
  request.r(i3887[9], i3887[10], 0, i3886, 'phaseTransitionObject')
  i3886.phaseTransitionObjectDuration = i3887[11]
  i3886.currentPhaseIndex = i3887[12]
  i3886.currentStepCount = i3887[13]
  i3886.isECPopup = !!i3887[14]
  return i3886
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i3892 = root || request.c( 'PhaseData' )
  var i3893 = data
  request.r(i3893[0], i3893[1], 0, i3892, 'phaseObject')
  i3892.totalSteps = i3893[2]
  i3892.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i3893[3], i3892.onPhaseReady)
  return i3892
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i3894 = root || request.c( 'ItemTypeDoneManager' )
  var i3895 = data
  var i3897 = i3895[0]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i3897[i + 0]));
  }
  i3894.itemTypeGroups = i3896
  return i3894
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i3900 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i3901 = data
  i3900.itemType = i3901[0]
  var i3903 = i3901[1]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3903.length; i += 2) {
  request.r(i3903[i + 0], i3903[i + 1], 1, i3902, '')
  }
  i3900.items = i3902
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3905 = data
  i3904.aspect = i3905[0]
  i3904.orthographic = !!i3905[1]
  i3904.orthographicSize = i3905[2]
  i3904.backgroundColor = new pc.Color(i3905[3], i3905[4], i3905[5], i3905[6])
  i3904.nearClipPlane = i3905[7]
  i3904.farClipPlane = i3905[8]
  i3904.fieldOfView = i3905[9]
  i3904.depth = i3905[10]
  i3904.clearFlags = i3905[11]
  i3904.cullingMask = i3905[12]
  i3904.rect = i3905[13]
  request.r(i3905[14], i3905[15], 0, i3904, 'targetTexture')
  i3904.usePhysicalProperties = !!i3905[16]
  i3904.focalLength = i3905[17]
  i3904.sensorSize = new pc.Vec2( i3905[18], i3905[19] )
  i3904.lensShift = new pc.Vec2( i3905[20], i3905[21] )
  i3904.gateFit = i3905[22]
  i3904.commandBufferCount = i3905[23]
  i3904.cameraType = i3905[24]
  i3904.enabled = !!i3905[25]
  return i3904
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3906 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3907 = data
  request.r(i3907[0], i3907[1], 0, i3906, 'm_FirstSelected')
  i3906.m_sendNavigationEvents = !!i3907[2]
  i3906.m_DragThreshold = i3907[3]
  return i3906
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3909 = data
  i3908.m_HorizontalAxis = i3909[0]
  i3908.m_VerticalAxis = i3909[1]
  i3908.m_SubmitButton = i3909[2]
  i3908.m_CancelButton = i3909[3]
  i3908.m_InputActionsPerSecond = i3909[4]
  i3908.m_RepeatDelay = i3909[5]
  i3908.m_ForceModuleActive = !!i3909[6]
  i3908.m_SendPointerHoverToParent = !!i3909[7]
  return i3908
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i3910 = root || request.c( 'Ply_ToggleEvent' )
  var i3911 = data
  i3910.isOn = !!i3911[0]
  i3910.applyStateOnEnable = !!i3911[1]
  i3910.applyStateOnClick = !!i3911[2]
  request.r(i3911[3], i3911[4], 0, i3910, 'targetObject')
  i3910.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i3911[5], i3910.onTurnOn)
  i3910.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i3911[6], i3910.onTurnOff)
  return i3910
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i3912 = root || request.c( 'SinkBlock' )
  var i3913 = data
  request.r(i3913[0], i3913[1], 0, i3912, 'sink')
  i3912.startsInside = !!i3913[2]
  i3912.insideTargetType = i3913[3]
  request.r(i3913[4], i3913[5], 0, i3912, 'insideDefaultTarget')
  i3912.outsideTargetType = i3913[6]
  request.r(i3913[7], i3913[8], 0, i3912, 'outsideDefaultTarget')
  i3912.isDone = !!i3913[9]
  i3912.onProcess = !!i3913[10]
  i3912.requireMatchingTargetTypeForHandTut = !!i3913[11]
  request.r(i3913[12], i3913[13], 0, i3912, 'itemDraggable')
  request.r(i3913[14], i3913[15], 0, i3912, 'itemClickable')
  request.r(i3913[16], i3913[17], 0, i3912, 'itemStirring')
  request.r(i3913[18], i3913[19], 0, i3912, 'itemKnifeSpriteMaskCutter')
  request.r(i3913[20], i3913[21], 0, i3912, 'itemSpriteMaskPainter')
  request.r(i3913[22], i3913[23], 0, i3912, 'itemDragSpriteMaskPainter')
  request.r(i3913[24], i3913[25], 0, i3912, 'itemMoveToTarget')
  request.r(i3913[26], i3913[27], 0, i3912, 'animator')
  i3912.itemType = i3913[28]
  request.r(i3913[29], i3913[30], 0, i3912, 'spriteRenderer')
  i3912.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3913[31], i3912.onKnifeIn)
  i3912.heartEffectScale = i3913[32]
  i3912.breakHeartEffectScale = i3913[33]
  i3912.blinkEffectScale = i3913[34]
  i3912.mergeEffectScale = i3913[35]
  i3912.playMoveToTargetFinishSound = !!i3913[36]
  i3912.moveToTargetFinishFxType = i3913[37]
  i3912.fxSpawnZPos = i3913[38]
  request.r(i3913[39], i3913[40], 0, i3912, 'tf')
  return i3912
}

Deserializers["Sink"] = function (request, data, root) {
  var i3914 = root || request.c( 'Sink' )
  var i3915 = data
  i3914.isClose = !!i3915[0]
  i3914.isWaterDrop = !!i3915[1]
  i3914.isWaterIn = !!i3915[2]
  request.r(i3915[3], i3915[4], 0, i3914, 'waterSplashPos')
  request.r(i3915[5], i3915[6], 0, i3914, 'faucetAnimator')
  request.r(i3915[7], i3915[8], 0, i3914, 'basinAnimator')
  request.r(i3915[9], i3915[10], 0, i3914, 'waterDrop')
  request.r(i3915[11], i3915[12], 0, i3914, 'waterIn')
  request.r(i3915[13], i3915[14], 0, i3914, 'basinWaterRenderer')
  i3914.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i3915[15], i3915[16], i3915[17], i3915[18])
  i3914.fullWaterRect = UnityEngine.Rect.MinMaxRect(i3915[19], i3915[20], i3915[21], i3915[22])
  i3914.waterRiseDuration = i3915[23]
  i3914.waterFallDuration = i3915[24]
  i3914.waterRiseEase = i3915[25]
  i3914.waterFallEase = i3915[26]
  i3914.drawWaterRects = !!i3915[27]
  i3914.emptyRectColor = new pc.Color(i3915[28], i3915[29], i3915[30], i3915[31])
  i3914.fullRectColor = new pc.Color(i3915[32], i3915[33], i3915[34], i3915[35])
  request.r(i3915[36], i3915[37], 0, i3914, 'waterDropTransform')
  i3914.emptyWaterDropPoint = new pc.Vec3( i3915[38], i3915[39], i3915[40] )
  i3914.fullWaterDropPoint = new pc.Vec3( i3915[41], i3915[42], i3915[43] )
  i3914.drawWaterDropPoints = !!i3915[44]
  i3914.waterDropPointRadius = i3915[45]
  i3914.emptyWaterDropPointColor = new pc.Color(i3915[46], i3915[47], i3915[48], i3915[49])
  i3914.fullWaterDropPointColor = new pc.Color(i3915[50], i3915[51], i3915[52], i3915[53])
  var i3917 = i3915[54]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i3917.length; i += 2) {
  request.r(i3917[i + 0], i3917[i + 1], 1, i3916, '')
  }
  i3914.inWaterItems = i3916
  i3914.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i3915[55], i3914.onWaterIn)
  i3914.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i3915[56], i3914.onNoWaterIn)
  i3914.isDone = !!i3915[57]
  i3914.onProcess = !!i3915[58]
  i3914.requireMatchingTargetTypeForHandTut = !!i3915[59]
  request.r(i3915[60], i3915[61], 0, i3914, 'itemDraggable')
  request.r(i3915[62], i3915[63], 0, i3914, 'itemClickable')
  request.r(i3915[64], i3915[65], 0, i3914, 'itemStirring')
  request.r(i3915[66], i3915[67], 0, i3914, 'itemKnifeSpriteMaskCutter')
  request.r(i3915[68], i3915[69], 0, i3914, 'itemSpriteMaskPainter')
  request.r(i3915[70], i3915[71], 0, i3914, 'itemDragSpriteMaskPainter')
  request.r(i3915[72], i3915[73], 0, i3914, 'itemMoveToTarget')
  request.r(i3915[74], i3915[75], 0, i3914, 'animator')
  i3914.itemType = i3915[76]
  request.r(i3915[77], i3915[78], 0, i3914, 'spriteRenderer')
  i3914.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3915[79], i3914.onKnifeIn)
  i3914.heartEffectScale = i3915[80]
  i3914.breakHeartEffectScale = i3915[81]
  i3914.blinkEffectScale = i3915[82]
  i3914.mergeEffectScale = i3915[83]
  i3914.playMoveToTargetFinishSound = !!i3915[84]
  i3914.moveToTargetFinishFxType = i3915[85]
  i3914.fxSpawnZPos = i3915[86]
  request.r(i3915[87], i3915[88], 0, i3914, 'tf')
  i3914.waterState = i3915[89]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3919 = data
  i3918.center = new pc.Vec3( i3919[0], i3919[1], i3919[2] )
  i3918.size = new pc.Vec3( i3919[3], i3919[4], i3919[5] )
  i3918.enabled = !!i3919[6]
  i3918.isTrigger = !!i3919[7]
  request.r(i3919[8], i3919[9], 0, i3918, 'material')
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3921 = data
  i3920.frontSortingLayerID = i3921[0]
  i3920.frontSortingOrder = i3921[1]
  i3920.backSortingLayerID = i3921[2]
  i3920.backSortingOrder = i3921[3]
  i3920.alphaCutoff = i3921[4]
  request.r(i3921[5], i3921[6], 0, i3920, 'sprite')
  i3920.tileMode = i3921[7]
  i3920.isCustomRangeActive = !!i3921[8]
  i3920.spriteSortPoint = i3921[9]
  i3920.enabled = !!i3921[10]
  request.r(i3921[11], i3921[12], 0, i3920, 'sharedMaterial')
  var i3923 = i3921[13]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 2) {
  request.r(i3923[i + 0], i3923[i + 1], 2, i3922, '')
  }
  i3920.sharedMaterials = i3922
  i3920.receiveShadows = !!i3921[14]
  i3920.shadowCastingMode = i3921[15]
  i3920.sortingLayerID = i3921[16]
  i3920.sortingOrder = i3921[17]
  i3920.lightmapIndex = i3921[18]
  i3920.lightmapSceneIndex = i3921[19]
  i3920.lightmapScaleOffset = new pc.Vec4( i3921[20], i3921[21], i3921[22], i3921[23] )
  i3920.lightProbeUsage = i3921[24]
  i3920.reflectionProbeUsage = i3921[25]
  return i3920
}

Deserializers["Item"] = function (request, data, root) {
  var i3924 = root || request.c( 'Item' )
  var i3925 = data
  i3924.isDone = !!i3925[0]
  i3924.onProcess = !!i3925[1]
  i3924.requireMatchingTargetTypeForHandTut = !!i3925[2]
  request.r(i3925[3], i3925[4], 0, i3924, 'itemDraggable')
  request.r(i3925[5], i3925[6], 0, i3924, 'itemClickable')
  request.r(i3925[7], i3925[8], 0, i3924, 'itemStirring')
  request.r(i3925[9], i3925[10], 0, i3924, 'itemKnifeSpriteMaskCutter')
  request.r(i3925[11], i3925[12], 0, i3924, 'itemSpriteMaskPainter')
  request.r(i3925[13], i3925[14], 0, i3924, 'itemDragSpriteMaskPainter')
  request.r(i3925[15], i3925[16], 0, i3924, 'itemMoveToTarget')
  request.r(i3925[17], i3925[18], 0, i3924, 'animator')
  i3924.itemType = i3925[19]
  request.r(i3925[20], i3925[21], 0, i3924, 'spriteRenderer')
  i3924.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3925[22], i3924.onKnifeIn)
  i3924.heartEffectScale = i3925[23]
  i3924.breakHeartEffectScale = i3925[24]
  i3924.blinkEffectScale = i3925[25]
  i3924.mergeEffectScale = i3925[26]
  i3924.playMoveToTargetFinishSound = !!i3925[27]
  i3924.moveToTargetFinishFxType = i3925[28]
  i3924.fxSpawnZPos = i3925[29]
  request.r(i3925[30], i3925[31], 0, i3924, 'tf')
  return i3924
}

Deserializers["PaperBox"] = function (request, data, root) {
  var i3926 = root || request.c( 'PaperBox' )
  var i3927 = data
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3929 = data
  i3928.center = new pc.Vec3( i3929[0], i3929[1], i3929[2] )
  i3928.radius = i3929[3]
  i3928.height = i3929[4]
  i3928.direction = i3929[5]
  i3928.enabled = !!i3929[6]
  i3928.isTrigger = !!i3929[7]
  request.r(i3929[8], i3929[9], 0, i3928, 'material')
  return i3928
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i3930 = root || request.c( 'ItemClickable' )
  var i3931 = data
  i3930.requiredClicks = i3931[0]
  i3930.infiniteClick = !!i3931[1]
  i3930.canClick = !!i3931[2]
  i3930.disableAfterClick = !!i3931[3]
  i3930.onClick = request.d('UnityEngine.Events.UnityEvent', i3931[4], i3930.onClick)
  var i3933 = i3931[5]
  var i3932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.add(request.d('UnityEngine.Events.UnityEvent', i3933[i + 0]));
  }
  i3930.sequentialOnClicks = i3932
  i3930.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i3931[6], i3930.onClickComplete)
  return i3930
}

Deserializers["TrashCan"] = function (request, data, root) {
  var i3936 = root || request.c( 'TrashCan' )
  var i3937 = data
  i3936.isOpen = !!i3937[0]
  i3936.isDone = !!i3937[1]
  i3936.onProcess = !!i3937[2]
  i3936.requireMatchingTargetTypeForHandTut = !!i3937[3]
  request.r(i3937[4], i3937[5], 0, i3936, 'itemDraggable')
  request.r(i3937[6], i3937[7], 0, i3936, 'itemClickable')
  request.r(i3937[8], i3937[9], 0, i3936, 'itemStirring')
  request.r(i3937[10], i3937[11], 0, i3936, 'itemKnifeSpriteMaskCutter')
  request.r(i3937[12], i3937[13], 0, i3936, 'itemSpriteMaskPainter')
  request.r(i3937[14], i3937[15], 0, i3936, 'itemDragSpriteMaskPainter')
  request.r(i3937[16], i3937[17], 0, i3936, 'itemMoveToTarget')
  request.r(i3937[18], i3937[19], 0, i3936, 'animator')
  i3936.itemType = i3937[20]
  request.r(i3937[21], i3937[22], 0, i3936, 'spriteRenderer')
  i3936.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3937[23], i3936.onKnifeIn)
  i3936.heartEffectScale = i3937[24]
  i3936.breakHeartEffectScale = i3937[25]
  i3936.blinkEffectScale = i3937[26]
  i3936.mergeEffectScale = i3937[27]
  i3936.playMoveToTargetFinishSound = !!i3937[28]
  i3936.moveToTargetFinishFxType = i3937[29]
  i3936.fxSpawnZPos = i3937[30]
  request.r(i3937[31], i3937[32], 0, i3936, 'tf')
  return i3936
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i3938 = root || request.c( 'CuttingBoard' )
  var i3939 = data
  i3938.punchScale = new pc.Vec3( i3939[0], i3939[1], i3939[2] )
  i3938.punchDuration = i3939[3]
  i3938.isDone = !!i3939[4]
  i3938.onProcess = !!i3939[5]
  i3938.requireMatchingTargetTypeForHandTut = !!i3939[6]
  request.r(i3939[7], i3939[8], 0, i3938, 'itemDraggable')
  request.r(i3939[9], i3939[10], 0, i3938, 'itemClickable')
  request.r(i3939[11], i3939[12], 0, i3938, 'itemStirring')
  request.r(i3939[13], i3939[14], 0, i3938, 'itemKnifeSpriteMaskCutter')
  request.r(i3939[15], i3939[16], 0, i3938, 'itemSpriteMaskPainter')
  request.r(i3939[17], i3939[18], 0, i3938, 'itemDragSpriteMaskPainter')
  request.r(i3939[19], i3939[20], 0, i3938, 'itemMoveToTarget')
  request.r(i3939[21], i3939[22], 0, i3938, 'animator')
  i3938.itemType = i3939[23]
  request.r(i3939[24], i3939[25], 0, i3938, 'spriteRenderer')
  i3938.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3939[26], i3938.onKnifeIn)
  i3938.heartEffectScale = i3939[27]
  i3938.breakHeartEffectScale = i3939[28]
  i3938.blinkEffectScale = i3939[29]
  i3938.mergeEffectScale = i3939[30]
  i3938.playMoveToTargetFinishSound = !!i3939[31]
  i3938.moveToTargetFinishFxType = i3939[32]
  i3938.fxSpawnZPos = i3939[33]
  request.r(i3939[34], i3939[35], 0, i3938, 'tf')
  return i3938
}

Deserializers["Pan"] = function (request, data, root) {
  var i3940 = root || request.c( 'Pan' )
  var i3941 = data
  request.r(i3941[0], i3941[1], 0, i3940, 'fryingFX')
  i3940.isOilIn = !!i3941[2]
  i3940.isTurnOnStove = !!i3941[3]
  i3940.stoveShakeDelay = i3941[4]
  i3940.stoveShakeDuration = i3941[5]
  i3940.stoveShakeStrength = i3941[6]
  i3940.stoveShakeVibrato = i3941[7]
  i3940.isDone = !!i3941[8]
  i3940.onProcess = !!i3941[9]
  i3940.requireMatchingTargetTypeForHandTut = !!i3941[10]
  request.r(i3941[11], i3941[12], 0, i3940, 'itemDraggable')
  request.r(i3941[13], i3941[14], 0, i3940, 'itemClickable')
  request.r(i3941[15], i3941[16], 0, i3940, 'itemStirring')
  request.r(i3941[17], i3941[18], 0, i3940, 'itemKnifeSpriteMaskCutter')
  request.r(i3941[19], i3941[20], 0, i3940, 'itemSpriteMaskPainter')
  request.r(i3941[21], i3941[22], 0, i3940, 'itemDragSpriteMaskPainter')
  request.r(i3941[23], i3941[24], 0, i3940, 'itemMoveToTarget')
  request.r(i3941[25], i3941[26], 0, i3940, 'animator')
  i3940.itemType = i3941[27]
  request.r(i3941[28], i3941[29], 0, i3940, 'spriteRenderer')
  i3940.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3941[30], i3940.onKnifeIn)
  i3940.heartEffectScale = i3941[31]
  i3940.breakHeartEffectScale = i3941[32]
  i3940.blinkEffectScale = i3941[33]
  i3940.mergeEffectScale = i3941[34]
  i3940.playMoveToTargetFinishSound = !!i3941[35]
  i3940.moveToTargetFinishFxType = i3941[36]
  i3940.fxSpawnZPos = i3941[37]
  request.r(i3941[38], i3941[39], 0, i3940, 'tf')
  return i3940
}

Deserializers["FishOnPan"] = function (request, data, root) {
  var i3942 = root || request.c( 'FishOnPan' )
  var i3943 = data
  request.r(i3943[0], i3943[1], 0, i3942, 'clockTimerPrefab')
  request.r(i3943[2], i3943[3], 0, i3942, 'clockSpawnPoint')
  i3942.cookDuration = i3943[4]
  i3942.readyZ = i3943[5]
  i3942.isDone = !!i3943[6]
  i3942.onProcess = !!i3943[7]
  i3942.requireMatchingTargetTypeForHandTut = !!i3943[8]
  request.r(i3943[9], i3943[10], 0, i3942, 'itemDraggable')
  request.r(i3943[11], i3943[12], 0, i3942, 'itemClickable')
  request.r(i3943[13], i3943[14], 0, i3942, 'itemStirring')
  request.r(i3943[15], i3943[16], 0, i3942, 'itemKnifeSpriteMaskCutter')
  request.r(i3943[17], i3943[18], 0, i3942, 'itemSpriteMaskPainter')
  request.r(i3943[19], i3943[20], 0, i3942, 'itemDragSpriteMaskPainter')
  request.r(i3943[21], i3943[22], 0, i3942, 'itemMoveToTarget')
  request.r(i3943[23], i3943[24], 0, i3942, 'animator')
  i3942.itemType = i3943[25]
  request.r(i3943[26], i3943[27], 0, i3942, 'spriteRenderer')
  i3942.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3943[28], i3942.onKnifeIn)
  i3942.heartEffectScale = i3943[29]
  i3942.breakHeartEffectScale = i3943[30]
  i3942.blinkEffectScale = i3943[31]
  i3942.mergeEffectScale = i3943[32]
  i3942.playMoveToTargetFinishSound = !!i3943[33]
  i3942.moveToTargetFinishFxType = i3943[34]
  i3942.fxSpawnZPos = i3943[35]
  request.r(i3943[36], i3943[37], 0, i3942, 'tf')
  return i3942
}

Deserializers["Knife"] = function (request, data, root) {
  var i3944 = root || request.c( 'Knife' )
  var i3945 = data
  request.r(i3945[0], i3945[1], 0, i3944, 'knifeIdle')
  request.r(i3945[2], i3945[3], 0, i3944, 'knifeOnDrag')
  i3944.knifeOnDragRotationOffset = new pc.Vec3( i3945[4], i3945[5], i3945[6] )
  i3944.knifeOnDragRotateDuration = i3945[7]
  i3944.knifeOnDragRotateEase = i3945[8]
  i3944.isDone = !!i3945[9]
  i3944.onProcess = !!i3945[10]
  i3944.requireMatchingTargetTypeForHandTut = !!i3945[11]
  request.r(i3945[12], i3945[13], 0, i3944, 'itemDraggable')
  request.r(i3945[14], i3945[15], 0, i3944, 'itemClickable')
  request.r(i3945[16], i3945[17], 0, i3944, 'itemStirring')
  request.r(i3945[18], i3945[19], 0, i3944, 'itemKnifeSpriteMaskCutter')
  request.r(i3945[20], i3945[21], 0, i3944, 'itemSpriteMaskPainter')
  request.r(i3945[22], i3945[23], 0, i3944, 'itemDragSpriteMaskPainter')
  request.r(i3945[24], i3945[25], 0, i3944, 'itemMoveToTarget')
  request.r(i3945[26], i3945[27], 0, i3944, 'animator')
  i3944.itemType = i3945[28]
  request.r(i3945[29], i3945[30], 0, i3944, 'spriteRenderer')
  i3944.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3945[31], i3944.onKnifeIn)
  i3944.heartEffectScale = i3945[32]
  i3944.breakHeartEffectScale = i3945[33]
  i3944.blinkEffectScale = i3945[34]
  i3944.mergeEffectScale = i3945[35]
  i3944.playMoveToTargetFinishSound = !!i3945[36]
  i3944.moveToTargetFinishFxType = i3945[37]
  i3944.fxSpawnZPos = i3945[38]
  request.r(i3945[39], i3945[40], 0, i3944, 'tf')
  return i3944
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i3946 = root || request.c( 'ItemDragChildRotator' )
  var i3947 = data
  request.r(i3947[0], i3947[1], 0, i3946, 'rotateTarget')
  i3946.dragEulerAngles = new pc.Vec3( i3947[2], i3947[3], i3947[4] )
  i3946.useLocalRotation = !!i3947[5]
  i3946.rotateRelative = !!i3947[6]
  i3946.rotateDuration = i3947[7]
  i3946.rotateEase = i3947[8]
  i3946.rotateMode = i3947[9]
  return i3946
}

Deserializers["Spartula"] = function (request, data, root) {
  var i3948 = root || request.c( 'Spartula' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'carriedItem')
  request.r(i3949[2], i3949[3], 0, i3948, 'fishPoint')
  i3948.catchDuration = i3949[4]
  i3948.raycastDistance = i3949[5]
  i3948.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3949[6] )
  i3948.isDone = !!i3949[7]
  i3948.onProcess = !!i3949[8]
  i3948.requireMatchingTargetTypeForHandTut = !!i3949[9]
  request.r(i3949[10], i3949[11], 0, i3948, 'itemDraggable')
  request.r(i3949[12], i3949[13], 0, i3948, 'itemClickable')
  request.r(i3949[14], i3949[15], 0, i3948, 'itemStirring')
  request.r(i3949[16], i3949[17], 0, i3948, 'itemKnifeSpriteMaskCutter')
  request.r(i3949[18], i3949[19], 0, i3948, 'itemSpriteMaskPainter')
  request.r(i3949[20], i3949[21], 0, i3948, 'itemDragSpriteMaskPainter')
  request.r(i3949[22], i3949[23], 0, i3948, 'itemMoveToTarget')
  request.r(i3949[24], i3949[25], 0, i3948, 'animator')
  i3948.itemType = i3949[26]
  request.r(i3949[27], i3949[28], 0, i3948, 'spriteRenderer')
  i3948.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3949[29], i3948.onKnifeIn)
  i3948.heartEffectScale = i3949[30]
  i3948.breakHeartEffectScale = i3949[31]
  i3948.blinkEffectScale = i3949[32]
  i3948.mergeEffectScale = i3949[33]
  i3948.playMoveToTargetFinishSound = !!i3949[34]
  i3948.moveToTargetFinishFxType = i3949[35]
  i3948.fxSpawnZPos = i3949[36]
  request.r(i3949[37], i3949[38], 0, i3948, 'tf')
  return i3948
}

Deserializers["Fish"] = function (request, data, root) {
  var i3950 = root || request.c( 'Fish' )
  var i3951 = data
  request.r(i3951[0], i3951[1], 0, i3950, 'lastPlate')
  request.r(i3951[2], i3951[3], 0, i3950, 'fishIntestine')
  request.r(i3951[4], i3951[5], 0, i3950, 'fishBranchial')
  request.r(i3951[6], i3951[7], 0, i3950, 'panPos')
  request.r(i3951[8], i3951[9], 0, i3950, 'fishOnPan')
  request.r(i3951[10], i3951[11], 0, i3950, 'oilTop')
  request.r(i3951[12], i3951[13], 0, i3950, 'salt')
  request.r(i3951[14], i3951[15], 0, i3950, 'waterTarget')
  request.r(i3951[16], i3951[17], 0, i3950, 'cuttingBoardTarget')
  request.r(i3951[18], i3951[19], 0, i3950, 'plateTarget')
  var i3953 = i3951[20]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 2) {
  request.r(i3953[i + 0], i3953[i + 1], 2, i3952, '')
  }
  i3950.childObject = i3952
  var i3955 = i3951[21]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 2) {
  request.r(i3955[i + 0], i3955[i + 1], 2, i3954, '')
  }
  i3950.trashObj = i3954
  request.r(i3951[22], i3951[23], 0, i3950, 'knife')
  request.r(i3951[24], i3951[25], 0, i3950, 'waterFx')
  i3950.scaleOnDragFromWater = !!i3951[26]
  i3950.dragFromWaterScale = new pc.Vec3( i3951[27], i3951[28], i3951[29] )
  i3950.dragFromWaterScaleDuration = i3951[30]
  request.r(i3951[31], i3951[32], 0, i3950, 'ply_TimerEvent')
  request.r(i3951[33], i3951[34], 0, i3950, 'ply_BobEffect')
  request.r(i3951[35], i3951[36], 0, i3950, 'collider1')
  request.r(i3951[37], i3951[38], 0, i3950, 'sink')
  i3950.isInWater = !!i3951[39]
  i3950.isOnCuttingBoard = !!i3951[40]
  i3950.isOnPlate = !!i3951[41]
  i3950.isClean = !!i3951[42]
  i3950.isCutDone = !!i3951[43]
  i3950.cuttingBoardColliderRadiusMultiplier = i3951[44]
  i3950.jumpToPlatePower = i3951[45]
  i3950.jumpToPlateDuration = i3951[46]
  i3950.jumpToPlateAfterCutDone = !!i3951[47]
  request.r(i3951[48], i3951[49], 0, i3950, 'plateFoodShadow')
  i3950.platePunchScale = new pc.Vec3( i3951[50], i3951[51], i3951[52] )
  i3950.platePunchDuration = i3951[53]
  i3950.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i3951[54], i3950.onMoveToCuttingBoardComplete)
  i3950.isDone = !!i3951[55]
  i3950.onProcess = !!i3951[56]
  i3950.requireMatchingTargetTypeForHandTut = !!i3951[57]
  request.r(i3951[58], i3951[59], 0, i3950, 'itemDraggable')
  request.r(i3951[60], i3951[61], 0, i3950, 'itemClickable')
  request.r(i3951[62], i3951[63], 0, i3950, 'itemStirring')
  request.r(i3951[64], i3951[65], 0, i3950, 'itemKnifeSpriteMaskCutter')
  request.r(i3951[66], i3951[67], 0, i3950, 'itemSpriteMaskPainter')
  request.r(i3951[68], i3951[69], 0, i3950, 'itemDragSpriteMaskPainter')
  request.r(i3951[70], i3951[71], 0, i3950, 'itemMoveToTarget')
  request.r(i3951[72], i3951[73], 0, i3950, 'animator')
  i3950.itemType = i3951[74]
  request.r(i3951[75], i3951[76], 0, i3950, 'spriteRenderer')
  i3950.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3951[77], i3950.onKnifeIn)
  i3950.heartEffectScale = i3951[78]
  i3950.breakHeartEffectScale = i3951[79]
  i3950.blinkEffectScale = i3951[80]
  i3950.mergeEffectScale = i3951[81]
  i3950.playMoveToTargetFinishSound = !!i3951[82]
  i3950.moveToTargetFinishFxType = i3951[83]
  i3950.fxSpawnZPos = i3951[84]
  request.r(i3951[85], i3951[86], 0, i3950, 'tf')
  return i3950
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i3956 = root || request.c( 'Ply_BobEffect' )
  var i3957 = data
  i3956.playOnEnable = !!i3957[0]
  i3956.useLocalMove = !!i3957[1]
  i3956.bobOffset = new pc.Vec3( i3957[2], i3957[3], i3957[4] )
  i3956.duration = i3957[5]
  i3956.ease = i3957[6]
  return i3956
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i3958 = root || request.c( 'Ply_TimerEvent' )
  var i3959 = data
  i3958.duration = i3959[0]
  i3958.playOnEnable = !!i3959[1]
  i3958.ignoreTimeScale = !!i3959[2]
  i3958.autoDisableOnComplete = !!i3959[3]
  i3958.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i3959[4], i3958.onTimerStart)
  i3958.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i3959[5], i3958.onTimerComplete)
  i3958.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i3959[6], i3958.onTimerStop)
  return i3958
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i3960 = root || request.c( 'InWaterItem' )
  var i3961 = data
  request.r(i3961[0], i3961[1], 0, i3960, 'waterTarget')
  request.r(i3961[2], i3961[3], 0, i3960, 'cuttingBoardTarget')
  request.r(i3961[4], i3961[5], 0, i3960, 'plateTarget')
  var i3963 = i3961[6]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 2) {
  request.r(i3963[i + 0], i3963[i + 1], 2, i3962, '')
  }
  i3960.childObject = i3962
  var i3965 = i3961[7]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 2, i3964, '')
  }
  i3960.trashObj = i3964
  request.r(i3961[8], i3961[9], 0, i3960, 'knife')
  request.r(i3961[10], i3961[11], 0, i3960, 'waterFx')
  i3960.scaleOnDragFromWater = !!i3961[12]
  i3960.dragFromWaterScale = new pc.Vec3( i3961[13], i3961[14], i3961[15] )
  i3960.dragFromWaterScaleDuration = i3961[16]
  request.r(i3961[17], i3961[18], 0, i3960, 'ply_TimerEvent')
  request.r(i3961[19], i3961[20], 0, i3960, 'ply_BobEffect')
  request.r(i3961[21], i3961[22], 0, i3960, 'collider1')
  request.r(i3961[23], i3961[24], 0, i3960, 'sink')
  i3960.isInWater = !!i3961[25]
  i3960.isOnCuttingBoard = !!i3961[26]
  i3960.isOnPlate = !!i3961[27]
  i3960.isClean = !!i3961[28]
  i3960.isCutDone = !!i3961[29]
  i3960.cuttingBoardColliderRadiusMultiplier = i3961[30]
  i3960.jumpToPlatePower = i3961[31]
  i3960.jumpToPlateDuration = i3961[32]
  i3960.jumpToPlateAfterCutDone = !!i3961[33]
  request.r(i3961[34], i3961[35], 0, i3960, 'plateFoodShadow')
  i3960.platePunchScale = new pc.Vec3( i3961[36], i3961[37], i3961[38] )
  i3960.platePunchDuration = i3961[39]
  i3960.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i3961[40], i3960.onMoveToCuttingBoardComplete)
  i3960.isDone = !!i3961[41]
  i3960.onProcess = !!i3961[42]
  i3960.requireMatchingTargetTypeForHandTut = !!i3961[43]
  request.r(i3961[44], i3961[45], 0, i3960, 'itemDraggable')
  request.r(i3961[46], i3961[47], 0, i3960, 'itemClickable')
  request.r(i3961[48], i3961[49], 0, i3960, 'itemStirring')
  request.r(i3961[50], i3961[51], 0, i3960, 'itemKnifeSpriteMaskCutter')
  request.r(i3961[52], i3961[53], 0, i3960, 'itemSpriteMaskPainter')
  request.r(i3961[54], i3961[55], 0, i3960, 'itemDragSpriteMaskPainter')
  request.r(i3961[56], i3961[57], 0, i3960, 'itemMoveToTarget')
  request.r(i3961[58], i3961[59], 0, i3960, 'animator')
  i3960.itemType = i3961[60]
  request.r(i3961[61], i3961[62], 0, i3960, 'spriteRenderer')
  i3960.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3961[63], i3960.onKnifeIn)
  i3960.heartEffectScale = i3961[64]
  i3960.breakHeartEffectScale = i3961[65]
  i3960.blinkEffectScale = i3961[66]
  i3960.mergeEffectScale = i3961[67]
  i3960.playMoveToTargetFinishSound = !!i3961[68]
  i3960.moveToTargetFinishFxType = i3961[69]
  i3960.fxSpawnZPos = i3961[70]
  request.r(i3961[71], i3961[72], 0, i3960, 'tf')
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3967 = data
  i3966.ambientIntensity = i3967[0]
  i3966.reflectionIntensity = i3967[1]
  i3966.ambientMode = i3967[2]
  i3966.ambientLight = new pc.Color(i3967[3], i3967[4], i3967[5], i3967[6])
  i3966.ambientSkyColor = new pc.Color(i3967[7], i3967[8], i3967[9], i3967[10])
  i3966.ambientGroundColor = new pc.Color(i3967[11], i3967[12], i3967[13], i3967[14])
  i3966.ambientEquatorColor = new pc.Color(i3967[15], i3967[16], i3967[17], i3967[18])
  i3966.fogColor = new pc.Color(i3967[19], i3967[20], i3967[21], i3967[22])
  i3966.fogEndDistance = i3967[23]
  i3966.fogStartDistance = i3967[24]
  i3966.fogDensity = i3967[25]
  i3966.fog = !!i3967[26]
  request.r(i3967[27], i3967[28], 0, i3966, 'skybox')
  i3966.fogMode = i3967[29]
  var i3969 = i3967[30]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3969[i + 0]) );
  }
  i3966.lightmaps = i3968
  i3966.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3967[31], i3966.lightProbes)
  i3966.lightmapsMode = i3967[32]
  i3966.mixedBakeMode = i3967[33]
  i3966.environmentLightingMode = i3967[34]
  i3966.ambientProbe = new pc.SphericalHarmonicsL2(i3967[35])
  i3966.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3967[36])
  i3966.useReferenceAmbientProbe = !!i3967[37]
  request.r(i3967[38], i3967[39], 0, i3966, 'customReflection')
  request.r(i3967[40], i3967[41], 0, i3966, 'defaultReflection')
  i3966.defaultReflectionMode = i3967[42]
  i3966.defaultReflectionResolution = i3967[43]
  i3966.sunLightObjectId = i3967[44]
  i3966.pixelLightCount = i3967[45]
  i3966.defaultReflectionHDR = !!i3967[46]
  i3966.hasLightDataAsset = !!i3967[47]
  i3966.hasManualGenerate = !!i3967[48]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3973 = data
  request.r(i3973[0], i3973[1], 0, i3972, 'lightmapColor')
  request.r(i3973[2], i3973[3], 0, i3972, 'lightmapDirection')
  request.r(i3973[4], i3973[5], 0, i3972, 'shadowMask')
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3974 = root || new UnityEngine.LightProbes()
  var i3975 = data
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3983 = data
  var i3985 = i3983[0]
  var i3984 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3985[i + 0]));
  }
  i3982.ShaderCompilationErrors = i3984
  i3982.name = i3983[1]
  i3982.guid = i3983[2]
  var i3987 = i3983[3]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( i3987[i + 0] );
  }
  i3982.shaderDefinedKeywords = i3986
  var i3989 = i3983[4]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3989[i + 0]) );
  }
  i3982.passes = i3988
  var i3991 = i3983[5]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3991[i + 0]) );
  }
  i3982.usePasses = i3990
  var i3993 = i3983[6]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3993[i + 0]) );
  }
  i3982.defaultParameterValues = i3992
  request.r(i3983[7], i3983[8], 0, i3982, 'unityFallbackShader')
  i3982.readDepth = !!i3983[9]
  i3982.hasDepthOnlyPass = !!i3983[10]
  i3982.isCreatedByShaderGraph = !!i3983[11]
  i3982.disableBatching = !!i3983[12]
  i3982.compiled = !!i3983[13]
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3997 = data
  i3996.shaderName = i3997[0]
  i3996.errorMessage = i3997[1]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4002 = root || new pc.UnityShaderPass()
  var i4003 = data
  i4002.id = i4003[0]
  i4002.subShaderIndex = i4003[1]
  i4002.name = i4003[2]
  i4002.passType = i4003[3]
  i4002.grabPassTextureName = i4003[4]
  i4002.usePass = !!i4003[5]
  i4002.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[6], i4002.zTest)
  i4002.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[7], i4002.zWrite)
  i4002.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[8], i4002.culling)
  i4002.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4003[9], i4002.blending)
  i4002.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4003[10], i4002.alphaBlending)
  i4002.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[11], i4002.colorWriteMask)
  i4002.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[12], i4002.offsetUnits)
  i4002.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[13], i4002.offsetFactor)
  i4002.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[14], i4002.stencilRef)
  i4002.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[15], i4002.stencilReadMask)
  i4002.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4003[16], i4002.stencilWriteMask)
  i4002.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4003[17], i4002.stencilOp)
  i4002.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4003[18], i4002.stencilOpFront)
  i4002.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4003[19], i4002.stencilOpBack)
  var i4005 = i4003[20]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4005[i + 0]) );
  }
  i4002.tags = i4004
  var i4007 = i4003[21]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( i4007[i + 0] );
  }
  i4002.passDefinedKeywords = i4006
  var i4009 = i4003[22]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4009[i + 0]) );
  }
  i4002.passDefinedKeywordGroups = i4008
  var i4011 = i4003[23]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4011[i + 0]) );
  }
  i4002.variants = i4010
  var i4013 = i4003[24]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4013[i + 0]) );
  }
  i4002.excludedVariants = i4012
  i4002.hasDepthReader = !!i4003[25]
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4015 = data
  i4014.val = i4015[0]
  i4014.name = i4015[1]
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4017 = data
  i4016.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4017[0], i4016.src)
  i4016.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4017[1], i4016.dst)
  i4016.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4017[2], i4016.op)
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4019 = data
  i4018.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4019[0], i4018.pass)
  i4018.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4019[1], i4018.fail)
  i4018.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4019[2], i4018.zFail)
  i4018.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4019[3], i4018.comp)
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4023 = data
  i4022.name = i4023[0]
  i4022.value = i4023[1]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4027 = data
  var i4029 = i4027[0]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( i4029[i + 0] );
  }
  i4026.keywords = i4028
  i4026.hasDiscard = !!i4027[1]
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4033 = data
  i4032.passId = i4033[0]
  i4032.subShaderIndex = i4033[1]
  var i4035 = i4033[2]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( i4035[i + 0] );
  }
  i4032.keywords = i4034
  i4032.vertexProgram = i4033[3]
  i4032.fragmentProgram = i4033[4]
  i4032.exportedForWebGl2 = !!i4033[5]
  i4032.readDepth = !!i4033[6]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4039 = data
  request.r(i4039[0], i4039[1], 0, i4038, 'shader')
  i4038.pass = i4039[2]
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4043 = data
  i4042.name = i4043[0]
  i4042.type = i4043[1]
  i4042.value = new pc.Vec4( i4043[2], i4043[3], i4043[4], i4043[5] )
  i4042.textureValue = i4043[6]
  i4042.shaderPropertyFlag = i4043[7]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4045 = data
  i4044.name = i4045[0]
  request.r(i4045[1], i4045[2], 0, i4044, 'texture')
  i4044.aabb = i4045[3]
  i4044.vertices = i4045[4]
  i4044.triangles = i4045[5]
  i4044.textureRect = UnityEngine.Rect.MinMaxRect(i4045[6], i4045[7], i4045[8], i4045[9])
  i4044.packedRect = UnityEngine.Rect.MinMaxRect(i4045[10], i4045[11], i4045[12], i4045[13])
  i4044.border = new pc.Vec4( i4045[14], i4045[15], i4045[16], i4045[17] )
  i4044.transparency = i4045[18]
  i4044.bounds = i4045[19]
  i4044.pixelsPerUnit = i4045[20]
  i4044.textureWidth = i4045[21]
  i4044.textureHeight = i4045[22]
  i4044.nativeSize = new pc.Vec2( i4045[23], i4045[24] )
  i4044.pivot = new pc.Vec2( i4045[25], i4045[26] )
  i4044.textureRectOffset = new pc.Vec2( i4045[27], i4045[28] )
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4047 = data
  i4046.name = i4047[0]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4049 = data
  i4048.name = i4049[0]
  i4048.wrapMode = i4049[1]
  i4048.isLooping = !!i4049[2]
  i4048.length = i4049[3]
  var i4051 = i4049[4]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4051[i + 0]) );
  }
  i4048.curves = i4050
  var i4053 = i4049[5]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4053[i + 0]) );
  }
  i4048.events = i4052
  i4048.halfPrecision = !!i4049[6]
  i4048._frameRate = i4049[7]
  i4048.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4049[8], i4048.localBounds)
  i4048.hasMuscleCurves = !!i4049[9]
  var i4055 = i4049[10]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( i4055[i + 0] );
  }
  i4048.clipMuscleConstant = i4054
  i4048.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4049[11], i4048.clipBindingConstant)
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4059 = data
  i4058.path = i4059[0]
  i4058.hash = i4059[1]
  i4058.componentType = i4059[2]
  i4058.property = i4059[3]
  i4058.keys = i4059[4]
  var i4061 = i4059[5]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4061[i + 0]) );
  }
  i4058.objectReferenceKeys = i4060
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4065 = data
  i4064.time = i4065[0]
  request.r(i4065[1], i4065[2], 0, i4064, 'value')
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4069 = data
  i4068.functionName = i4069[0]
  i4068.floatParameter = i4069[1]
  i4068.intParameter = i4069[2]
  i4068.stringParameter = i4069[3]
  request.r(i4069[4], i4069[5], 0, i4068, 'objectReferenceParameter')
  i4068.time = i4069[6]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4071 = data
  i4070.center = new pc.Vec3( i4071[0], i4071[1], i4071[2] )
  i4070.extends = new pc.Vec3( i4071[3], i4071[4], i4071[5] )
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4075 = data
  var i4077 = i4075[0]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( i4077[i + 0] );
  }
  i4074.genericBindings = i4076
  var i4079 = i4075[1]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( i4079[i + 0] );
  }
  i4074.pptrCurveMapping = i4078
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4081 = data
  i4080.name = i4081[0]
  var i4083 = i4081[1]
  var i4082 = []
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4083[i + 0]) );
  }
  i4080.layers = i4082
  var i4085 = i4081[2]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4085[i + 0]) );
  }
  i4080.parameters = i4084
  i4080.animationClips = i4081[3]
  i4080.avatarUnsupported = i4081[4]
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4089 = data
  i4088.name = i4089[0]
  i4088.defaultWeight = i4089[1]
  i4088.blendingMode = i4089[2]
  i4088.avatarMask = i4089[3]
  i4088.syncedLayerIndex = i4089[4]
  i4088.syncedLayerAffectsTiming = !!i4089[5]
  i4088.syncedLayers = i4089[6]
  i4088.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4089[7], i4088.stateMachine)
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4091 = data
  i4090.id = i4091[0]
  i4090.name = i4091[1]
  i4090.path = i4091[2]
  var i4093 = i4091[3]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4093[i + 0]) );
  }
  i4090.states = i4092
  var i4095 = i4091[4]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4095[i + 0]) );
  }
  i4090.machines = i4094
  var i4097 = i4091[5]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4097[i + 0]) );
  }
  i4090.entryStateTransitions = i4096
  var i4099 = i4091[6]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4099[i + 0]) );
  }
  i4090.exitStateTransitions = i4098
  var i4101 = i4091[7]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4101[i + 0]) );
  }
  i4090.anyStateTransitions = i4100
  i4090.defaultStateId = i4091[8]
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4105 = data
  i4104.id = i4105[0]
  i4104.name = i4105[1]
  i4104.cycleOffset = i4105[2]
  i4104.cycleOffsetParameter = i4105[3]
  i4104.cycleOffsetParameterActive = !!i4105[4]
  i4104.mirror = !!i4105[5]
  i4104.mirrorParameter = i4105[6]
  i4104.mirrorParameterActive = !!i4105[7]
  i4104.motionId = i4105[8]
  i4104.nameHash = i4105[9]
  i4104.fullPathHash = i4105[10]
  i4104.speed = i4105[11]
  i4104.speedParameter = i4105[12]
  i4104.speedParameterActive = !!i4105[13]
  i4104.tag = i4105[14]
  i4104.tagHash = i4105[15]
  i4104.writeDefaultValues = !!i4105[16]
  var i4107 = i4105[17]
  var i4106 = []
  for(var i = 0; i < i4107.length; i += 2) {
  request.r(i4107[i + 0], i4107[i + 1], 2, i4106, '')
  }
  i4104.behaviours = i4106
  var i4109 = i4105[18]
  var i4108 = []
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4109[i + 0]) );
  }
  i4104.transitions = i4108
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4115 = data
  i4114.fullPath = i4115[0]
  i4114.canTransitionToSelf = !!i4115[1]
  i4114.duration = i4115[2]
  i4114.exitTime = i4115[3]
  i4114.hasExitTime = !!i4115[4]
  i4114.hasFixedDuration = !!i4115[5]
  i4114.interruptionSource = i4115[6]
  i4114.offset = i4115[7]
  i4114.orderedInterruption = !!i4115[8]
  i4114.destinationStateId = i4115[9]
  i4114.isExit = !!i4115[10]
  i4114.mute = !!i4115[11]
  i4114.solo = !!i4115[12]
  var i4117 = i4115[13]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4117[i + 0]) );
  }
  i4114.conditions = i4116
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4123 = data
  i4122.destinationStateId = i4123[0]
  i4122.isExit = !!i4123[1]
  i4122.mute = !!i4123[2]
  i4122.solo = !!i4123[3]
  var i4125 = i4123[4]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4125[i + 0]) );
  }
  i4122.conditions = i4124
  return i4122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4129 = data
  i4128.defaultBool = !!i4129[0]
  i4128.defaultFloat = i4129[1]
  i4128.defaultInt = i4129[2]
  i4128.name = i4129[3]
  i4128.nameHash = i4129[4]
  i4128.type = i4129[5]
  return i4128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4133 = data
  i4132.mode = i4133[0]
  i4132.parameter = i4133[1]
  i4132.threshold = i4133[2]
  return i4132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4135 = data
  i4134.name = i4135[0]
  i4134.bytes64 = i4135[1]
  i4134.data = i4135[2]
  return i4134
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4136 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4137 = data
  i4136.normalStyle = i4137[0]
  i4136.normalSpacingOffset = i4137[1]
  i4136.boldStyle = i4137[2]
  i4136.boldSpacing = i4137[3]
  i4136.italicStyle = i4137[4]
  i4136.tabSize = i4137[5]
  request.r(i4137[6], i4137[7], 0, i4136, 'atlas')
  i4136.m_SourceFontFileGUID = i4137[8]
  i4136.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4137[9], i4136.m_CreationSettings)
  request.r(i4137[10], i4137[11], 0, i4136, 'm_SourceFontFile')
  i4136.m_SourceFontFilePath = i4137[12]
  i4136.m_AtlasPopulationMode = i4137[13]
  i4136.InternalDynamicOS = !!i4137[14]
  var i4139 = i4137[15]
  var i4138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.add(request.d('UnityEngine.TextCore.Glyph', i4139[i + 0]));
  }
  i4136.m_GlyphTable = i4138
  var i4141 = i4137[16]
  var i4140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.add(request.d('TMPro.TMP_Character', i4141[i + 0]));
  }
  i4136.m_CharacterTable = i4140
  var i4143 = i4137[17]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 2) {
  request.r(i4143[i + 0], i4143[i + 1], 2, i4142, '')
  }
  i4136.m_AtlasTextures = i4142
  i4136.m_AtlasTextureIndex = i4137[18]
  i4136.m_IsMultiAtlasTexturesEnabled = !!i4137[19]
  i4136.m_GetFontFeatures = !!i4137[20]
  i4136.m_ClearDynamicDataOnBuild = !!i4137[21]
  i4136.m_AtlasWidth = i4137[22]
  i4136.m_AtlasHeight = i4137[23]
  i4136.m_AtlasPadding = i4137[24]
  i4136.m_AtlasRenderMode = i4137[25]
  var i4145 = i4137[26]
  var i4144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.add(request.d('UnityEngine.TextCore.GlyphRect', i4145[i + 0]));
  }
  i4136.m_UsedGlyphRects = i4144
  var i4147 = i4137[27]
  var i4146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.add(request.d('UnityEngine.TextCore.GlyphRect', i4147[i + 0]));
  }
  i4136.m_FreeGlyphRects = i4146
  i4136.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4137[28], i4136.m_FontFeatureTable)
  i4136.m_ShouldReimportFontFeatures = !!i4137[29]
  var i4149 = i4137[30]
  var i4148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4149.length; i += 2) {
  request.r(i4149[i + 0], i4149[i + 1], 1, i4148, '')
  }
  i4136.m_FallbackFontAssetTable = i4148
  var i4151 = i4137[31]
  var i4150 = []
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.push( request.d('TMPro.TMP_FontWeightPair', i4151[i + 0]) );
  }
  i4136.m_FontWeightTable = i4150
  var i4153 = i4137[32]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('TMPro.TMP_FontWeightPair', i4153[i + 0]) );
  }
  i4136.fontWeights = i4152
  i4136.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4137[33], i4136.m_fontInfo)
  var i4155 = i4137[34]
  var i4154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.add(request.d('TMPro.TMP_Glyph', i4155[i + 0]));
  }
  i4136.m_glyphInfoList = i4154
  i4136.m_KerningTable = request.d('TMPro.KerningTable', i4137[35], i4136.m_KerningTable)
  var i4157 = i4137[36]
  var i4156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4157.length; i += 2) {
  request.r(i4157[i + 0], i4157[i + 1], 1, i4156, '')
  }
  i4136.fallbackFontAssets = i4156
  i4136.m_Version = i4137[37]
  i4136.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4137[38], i4136.m_FaceInfo)
  request.r(i4137[39], i4137[40], 0, i4136, 'm_Material')
  return i4136
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4158 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4159 = data
  i4158.sourceFontFileName = i4159[0]
  i4158.sourceFontFileGUID = i4159[1]
  i4158.faceIndex = i4159[2]
  i4158.pointSizeSamplingMode = i4159[3]
  i4158.pointSize = i4159[4]
  i4158.padding = i4159[5]
  i4158.paddingMode = i4159[6]
  i4158.packingMode = i4159[7]
  i4158.atlasWidth = i4159[8]
  i4158.atlasHeight = i4159[9]
  i4158.characterSetSelectionMode = i4159[10]
  i4158.characterSequence = i4159[11]
  i4158.referencedFontAssetGUID = i4159[12]
  i4158.referencedTextAssetGUID = i4159[13]
  i4158.fontStyle = i4159[14]
  i4158.fontStyleModifier = i4159[15]
  i4158.renderMode = i4159[16]
  i4158.includeFontFeatures = !!i4159[17]
  return i4158
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4162 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4163 = data
  i4162.m_Index = i4163[0]
  i4162.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4163[1], i4162.m_Metrics)
  i4162.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4163[2], i4162.m_GlyphRect)
  i4162.m_Scale = i4163[3]
  i4162.m_AtlasIndex = i4163[4]
  i4162.m_ClassDefinitionType = i4163[5]
  return i4162
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4164 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4165 = data
  i4164.m_Width = i4165[0]
  i4164.m_Height = i4165[1]
  i4164.m_HorizontalBearingX = i4165[2]
  i4164.m_HorizontalBearingY = i4165[3]
  i4164.m_HorizontalAdvance = i4165[4]
  return i4164
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4166 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4167 = data
  i4166.m_X = i4167[0]
  i4166.m_Y = i4167[1]
  i4166.m_Width = i4167[2]
  i4166.m_Height = i4167[3]
  return i4166
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4170 = root || request.c( 'TMPro.TMP_Character' )
  var i4171 = data
  i4170.m_ElementType = i4171[0]
  i4170.m_Unicode = i4171[1]
  i4170.m_GlyphIndex = i4171[2]
  i4170.m_Scale = i4171[3]
  return i4170
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4176 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4177 = data
  var i4179 = i4177[0]
  var i4178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.add(request.d('TMPro.MultipleSubstitutionRecord', i4179[i + 0]));
  }
  i4176.m_MultipleSubstitutionRecords = i4178
  var i4181 = i4177[1]
  var i4180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.add(request.d('TMPro.LigatureSubstitutionRecord', i4181[i + 0]));
  }
  i4176.m_LigatureSubstitutionRecords = i4180
  var i4183 = i4177[2]
  var i4182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4183[i + 0]));
  }
  i4176.m_GlyphPairAdjustmentRecords = i4182
  var i4185 = i4177[3]
  var i4184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4185[i + 0]));
  }
  i4176.m_MarkToBaseAdjustmentRecords = i4184
  var i4187 = i4177[4]
  var i4186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4187[i + 0]));
  }
  i4176.m_MarkToMarkAdjustmentRecords = i4186
  return i4176
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4190 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4191 = data
  i4190.m_TargetGlyphID = i4191[0]
  i4190.m_SubstituteGlyphIDs = i4191[1]
  return i4190
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4194 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4195 = data
  i4194.m_ComponentGlyphIDs = i4195[0]
  i4194.m_LigatureGlyphID = i4195[1]
  return i4194
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4198 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4199 = data
  i4198.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4199[0], i4198.m_FirstAdjustmentRecord)
  i4198.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4199[1], i4198.m_SecondAdjustmentRecord)
  i4198.m_FeatureLookupFlags = i4199[2]
  return i4198
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4202 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4203 = data
  i4202.m_BaseGlyphID = i4203[0]
  i4202.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4203[1], i4202.m_BaseGlyphAnchorPoint)
  i4202.m_MarkGlyphID = i4203[2]
  i4202.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4203[3], i4202.m_MarkPositionAdjustment)
  return i4202
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4207 = data
  i4206.m_BaseMarkGlyphID = i4207[0]
  i4206.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4207[1], i4206.m_BaseMarkGlyphAnchorPoint)
  i4206.m_CombiningMarkGlyphID = i4207[2]
  i4206.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4207[3], i4206.m_CombiningMarkPositionAdjustment)
  return i4206
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4212 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4213 = data
  request.r(i4213[0], i4213[1], 0, i4212, 'regularTypeface')
  request.r(i4213[2], i4213[3], 0, i4212, 'italicTypeface')
  return i4212
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4214 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4215 = data
  i4214.Name = i4215[0]
  i4214.PointSize = i4215[1]
  i4214.Scale = i4215[2]
  i4214.CharacterCount = i4215[3]
  i4214.LineHeight = i4215[4]
  i4214.Baseline = i4215[5]
  i4214.Ascender = i4215[6]
  i4214.CapHeight = i4215[7]
  i4214.Descender = i4215[8]
  i4214.CenterLine = i4215[9]
  i4214.SuperscriptOffset = i4215[10]
  i4214.SubscriptOffset = i4215[11]
  i4214.SubSize = i4215[12]
  i4214.Underline = i4215[13]
  i4214.UnderlineThickness = i4215[14]
  i4214.strikethrough = i4215[15]
  i4214.strikethroughThickness = i4215[16]
  i4214.TabWidth = i4215[17]
  i4214.Padding = i4215[18]
  i4214.AtlasWidth = i4215[19]
  i4214.AtlasHeight = i4215[20]
  return i4214
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4218 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4219 = data
  i4218.id = i4219[0]
  i4218.x = i4219[1]
  i4218.y = i4219[2]
  i4218.width = i4219[3]
  i4218.height = i4219[4]
  i4218.xOffset = i4219[5]
  i4218.yOffset = i4219[6]
  i4218.xAdvance = i4219[7]
  i4218.scale = i4219[8]
  return i4218
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4220 = root || request.c( 'TMPro.KerningTable' )
  var i4221 = data
  var i4223 = i4221[0]
  var i4222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.add(request.d('TMPro.KerningPair', i4223[i + 0]));
  }
  i4220.kerningPairs = i4222
  return i4220
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4226 = root || request.c( 'TMPro.KerningPair' )
  var i4227 = data
  i4226.xOffset = i4227[0]
  i4226.m_FirstGlyph = i4227[1]
  i4226.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4227[2], i4226.m_FirstGlyphAdjustments)
  i4226.m_SecondGlyph = i4227[3]
  i4226.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4227[4], i4226.m_SecondGlyphAdjustments)
  i4226.m_IgnoreSpacingAdjustments = !!i4227[5]
  return i4226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4228 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4229 = data
  i4228.m_FaceIndex = i4229[0]
  i4228.m_FamilyName = i4229[1]
  i4228.m_StyleName = i4229[2]
  i4228.m_PointSize = i4229[3]
  i4228.m_Scale = i4229[4]
  i4228.m_UnitsPerEM = i4229[5]
  i4228.m_LineHeight = i4229[6]
  i4228.m_AscentLine = i4229[7]
  i4228.m_CapLine = i4229[8]
  i4228.m_MeanLine = i4229[9]
  i4228.m_Baseline = i4229[10]
  i4228.m_DescentLine = i4229[11]
  i4228.m_SuperscriptOffset = i4229[12]
  i4228.m_SuperscriptSize = i4229[13]
  i4228.m_SubscriptOffset = i4229[14]
  i4228.m_SubscriptSize = i4229[15]
  i4228.m_UnderlineOffset = i4229[16]
  i4228.m_UnderlineThickness = i4229[17]
  i4228.m_StrikethroughOffset = i4229[18]
  i4228.m_StrikethroughThickness = i4229[19]
  i4228.m_TabWidth = i4229[20]
  return i4228
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4230 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4231 = data
  i4230.useSafeMode = !!i4231[0]
  i4230.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4231[1], i4230.safeModeOptions)
  i4230.timeScale = i4231[2]
  i4230.unscaledTimeScale = i4231[3]
  i4230.useSmoothDeltaTime = !!i4231[4]
  i4230.maxSmoothUnscaledTime = i4231[5]
  i4230.rewindCallbackMode = i4231[6]
  i4230.showUnityEditorReport = !!i4231[7]
  i4230.logBehaviour = i4231[8]
  i4230.drawGizmos = !!i4231[9]
  i4230.defaultRecyclable = !!i4231[10]
  i4230.defaultAutoPlay = i4231[11]
  i4230.defaultUpdateType = i4231[12]
  i4230.defaultTimeScaleIndependent = !!i4231[13]
  i4230.defaultEaseType = i4231[14]
  i4230.defaultEaseOvershootOrAmplitude = i4231[15]
  i4230.defaultEasePeriod = i4231[16]
  i4230.defaultAutoKill = !!i4231[17]
  i4230.defaultLoopType = i4231[18]
  i4230.debugMode = !!i4231[19]
  i4230.debugStoreTargetId = !!i4231[20]
  i4230.showPreviewPanel = !!i4231[21]
  i4230.storeSettingsLocation = i4231[22]
  i4230.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4231[23], i4230.modules)
  i4230.createASMDEF = !!i4231[24]
  i4230.showPlayingTweens = !!i4231[25]
  i4230.showPausedTweens = !!i4231[26]
  return i4230
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4232 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4233 = data
  i4232.logBehaviour = i4233[0]
  i4232.nestedTweenFailureBehaviour = i4233[1]
  return i4232
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4234 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4235 = data
  i4234.showPanel = !!i4235[0]
  i4234.audioEnabled = !!i4235[1]
  i4234.physicsEnabled = !!i4235[2]
  i4234.physics2DEnabled = !!i4235[3]
  i4234.spriteEnabled = !!i4235[4]
  i4234.uiEnabled = !!i4235[5]
  i4234.uiToolkitEnabled = !!i4235[6]
  i4234.textMeshProEnabled = !!i4235[7]
  i4234.tk2DEnabled = !!i4235[8]
  i4234.deAudioEnabled = !!i4235[9]
  i4234.deUnityExtendedEnabled = !!i4235[10]
  i4234.epoOutlineEnabled = !!i4235[11]
  return i4234
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4236 = root || request.c( 'TMPro.TMP_Settings' )
  var i4237 = data
  i4236.assetVersion = i4237[0]
  i4236.m_TextWrappingMode = i4237[1]
  i4236.m_enableKerning = !!i4237[2]
  var i4239 = i4237[3]
  var i4238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.add(i4239[i + 0]);
  }
  i4236.m_ActiveFontFeatures = i4238
  i4236.m_enableExtraPadding = !!i4237[4]
  i4236.m_enableTintAllSprites = !!i4237[5]
  i4236.m_enableParseEscapeCharacters = !!i4237[6]
  i4236.m_EnableRaycastTarget = !!i4237[7]
  i4236.m_GetFontFeaturesAtRuntime = !!i4237[8]
  i4236.m_missingGlyphCharacter = i4237[9]
  i4236.m_ClearDynamicDataOnBuild = !!i4237[10]
  i4236.m_warningsDisabled = !!i4237[11]
  request.r(i4237[12], i4237[13], 0, i4236, 'm_defaultFontAsset')
  i4236.m_defaultFontAssetPath = i4237[14]
  i4236.m_defaultFontSize = i4237[15]
  i4236.m_defaultAutoSizeMinRatio = i4237[16]
  i4236.m_defaultAutoSizeMaxRatio = i4237[17]
  i4236.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4237[18], i4237[19] )
  i4236.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4237[20], i4237[21] )
  i4236.m_autoSizeTextContainer = !!i4237[22]
  i4236.m_IsTextObjectScaleStatic = !!i4237[23]
  var i4241 = i4237[24]
  var i4240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4241.length; i += 2) {
  request.r(i4241[i + 0], i4241[i + 1], 1, i4240, '')
  }
  i4236.m_fallbackFontAssets = i4240
  i4236.m_matchMaterialPreset = !!i4237[25]
  i4236.m_HideSubTextObjects = !!i4237[26]
  request.r(i4237[27], i4237[28], 0, i4236, 'm_defaultSpriteAsset')
  i4236.m_defaultSpriteAssetPath = i4237[29]
  i4236.m_enableEmojiSupport = !!i4237[30]
  i4236.m_MissingCharacterSpriteUnicode = i4237[31]
  var i4243 = i4237[32]
  var i4242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4243.length; i += 2) {
  request.r(i4243[i + 0], i4243[i + 1], 1, i4242, '')
  }
  i4236.m_EmojiFallbackTextAssets = i4242
  i4236.m_defaultColorGradientPresetsPath = i4237[33]
  request.r(i4237[34], i4237[35], 0, i4236, 'm_defaultStyleSheet')
  i4236.m_StyleSheetsResourcePath = i4237[36]
  request.r(i4237[37], i4237[38], 0, i4236, 'm_leadingCharacters')
  request.r(i4237[39], i4237[40], 0, i4236, 'm_followingCharacters')
  i4236.m_UseModernHangulLineBreakingRules = !!i4237[41]
  return i4236
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4246 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4247 = data
  request.r(i4247[0], i4247[1], 0, i4246, 'spriteSheet')
  var i4249 = i4247[2]
  var i4248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.add(request.d('TMPro.TMP_Sprite', i4249[i + 0]));
  }
  i4246.spriteInfoList = i4248
  var i4251 = i4247[3]
  var i4250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4251.length; i += 2) {
  request.r(i4251[i + 0], i4251[i + 1], 1, i4250, '')
  }
  i4246.fallbackSpriteAssets = i4250
  var i4253 = i4247[4]
  var i4252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4253.length; i += 1) {
    i4252.add(request.d('TMPro.TMP_SpriteCharacter', i4253[i + 0]));
  }
  i4246.m_SpriteCharacterTable = i4252
  var i4255 = i4247[5]
  var i4254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.add(request.d('TMPro.TMP_SpriteGlyph', i4255[i + 0]));
  }
  i4246.m_GlyphTable = i4254
  i4246.m_Version = i4247[6]
  i4246.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4247[7], i4246.m_FaceInfo)
  request.r(i4247[8], i4247[9], 0, i4246, 'm_Material')
  return i4246
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4258 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4259 = data
  i4258.name = i4259[0]
  i4258.hashCode = i4259[1]
  i4258.unicode = i4259[2]
  i4258.pivot = new pc.Vec2( i4259[3], i4259[4] )
  request.r(i4259[5], i4259[6], 0, i4258, 'sprite')
  i4258.id = i4259[7]
  i4258.x = i4259[8]
  i4258.y = i4259[9]
  i4258.width = i4259[10]
  i4258.height = i4259[11]
  i4258.xOffset = i4259[12]
  i4258.yOffset = i4259[13]
  i4258.xAdvance = i4259[14]
  i4258.scale = i4259[15]
  return i4258
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4264 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4265 = data
  i4264.m_Name = i4265[0]
  i4264.m_ElementType = i4265[1]
  i4264.m_Unicode = i4265[2]
  i4264.m_GlyphIndex = i4265[3]
  i4264.m_Scale = i4265[4]
  return i4264
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4268 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4269 = data
  request.r(i4269[0], i4269[1], 0, i4268, 'sprite')
  i4268.m_Index = i4269[2]
  i4268.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4269[3], i4268.m_Metrics)
  i4268.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4269[4], i4268.m_GlyphRect)
  i4268.m_Scale = i4269[5]
  i4268.m_AtlasIndex = i4269[6]
  i4268.m_ClassDefinitionType = i4269[7]
  return i4268
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4270 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4271 = data
  var i4273 = i4271[0]
  var i4272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4273.length; i += 1) {
    i4272.add(request.d('TMPro.TMP_Style', i4273[i + 0]));
  }
  i4270.m_StyleList = i4272
  return i4270
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4276 = root || request.c( 'TMPro.TMP_Style' )
  var i4277 = data
  i4276.m_Name = i4277[0]
  i4276.m_HashCode = i4277[1]
  i4276.m_OpeningDefinition = i4277[2]
  i4276.m_ClosingDefinition = i4277[3]
  i4276.m_OpeningTagArray = i4277[4]
  i4276.m_ClosingTagArray = i4277[5]
  return i4276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4279 = data
  var i4281 = i4279[0]
  var i4280 = []
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4281[i + 0]) );
  }
  i4278.files = i4280
  i4278.componentToPrefabIds = i4279[1]
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4285 = data
  i4284.path = i4285[0]
  request.r(i4285[1], i4285[2], 0, i4284, 'unityObject')
  return i4284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4287 = data
  var i4289 = i4287[0]
  var i4288 = []
  for(var i = 0; i < i4289.length; i += 1) {
    i4288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4289[i + 0]) );
  }
  i4286.scriptsExecutionOrder = i4288
  var i4291 = i4287[1]
  var i4290 = []
  for(var i = 0; i < i4291.length; i += 1) {
    i4290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4291[i + 0]) );
  }
  i4286.sortingLayers = i4290
  var i4293 = i4287[2]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4293[i + 0]) );
  }
  i4286.cullingLayers = i4292
  i4286.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4287[3], i4286.timeSettings)
  i4286.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4287[4], i4286.physicsSettings)
  i4286.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4287[5], i4286.physics2DSettings)
  i4286.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4287[6], i4286.qualitySettings)
  i4286.enableRealtimeShadows = !!i4287[7]
  i4286.enableAutoInstancing = !!i4287[8]
  i4286.enableStaticBatching = !!i4287[9]
  i4286.enableDynamicBatching = !!i4287[10]
  i4286.lightmapEncodingQuality = i4287[11]
  i4286.desiredColorSpace = i4287[12]
  var i4295 = i4287[13]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( i4295[i + 0] );
  }
  i4286.allTags = i4294
  return i4286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4299 = data
  i4298.name = i4299[0]
  i4298.value = i4299[1]
  return i4298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4303 = data
  i4302.id = i4303[0]
  i4302.name = i4303[1]
  i4302.value = i4303[2]
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4307 = data
  i4306.id = i4307[0]
  i4306.name = i4307[1]
  return i4306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4309 = data
  i4308.fixedDeltaTime = i4309[0]
  i4308.maximumDeltaTime = i4309[1]
  i4308.timeScale = i4309[2]
  i4308.maximumParticleTimestep = i4309[3]
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4311 = data
  i4310.gravity = new pc.Vec3( i4311[0], i4311[1], i4311[2] )
  i4310.defaultSolverIterations = i4311[3]
  i4310.bounceThreshold = i4311[4]
  i4310.autoSyncTransforms = !!i4311[5]
  i4310.autoSimulation = !!i4311[6]
  var i4313 = i4311[7]
  var i4312 = []
  for(var i = 0; i < i4313.length; i += 1) {
    i4312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4313[i + 0]) );
  }
  i4310.collisionMatrix = i4312
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4317 = data
  i4316.enabled = !!i4317[0]
  i4316.layerId = i4317[1]
  i4316.otherLayerId = i4317[2]
  return i4316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4319 = data
  request.r(i4319[0], i4319[1], 0, i4318, 'material')
  i4318.gravity = new pc.Vec2( i4319[2], i4319[3] )
  i4318.positionIterations = i4319[4]
  i4318.velocityIterations = i4319[5]
  i4318.velocityThreshold = i4319[6]
  i4318.maxLinearCorrection = i4319[7]
  i4318.maxAngularCorrection = i4319[8]
  i4318.maxTranslationSpeed = i4319[9]
  i4318.maxRotationSpeed = i4319[10]
  i4318.baumgarteScale = i4319[11]
  i4318.baumgarteTOIScale = i4319[12]
  i4318.timeToSleep = i4319[13]
  i4318.linearSleepTolerance = i4319[14]
  i4318.angularSleepTolerance = i4319[15]
  i4318.defaultContactOffset = i4319[16]
  i4318.autoSimulation = !!i4319[17]
  i4318.queriesHitTriggers = !!i4319[18]
  i4318.queriesStartInColliders = !!i4319[19]
  i4318.callbacksOnDisable = !!i4319[20]
  i4318.reuseCollisionCallbacks = !!i4319[21]
  i4318.autoSyncTransforms = !!i4319[22]
  var i4321 = i4319[23]
  var i4320 = []
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4321[i + 0]) );
  }
  i4318.collisionMatrix = i4320
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4325 = data
  i4324.enabled = !!i4325[0]
  i4324.layerId = i4325[1]
  i4324.otherLayerId = i4325[2]
  return i4324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4327 = data
  var i4329 = i4327[0]
  var i4328 = []
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4329[i + 0]) );
  }
  i4326.qualityLevels = i4328
  var i4331 = i4327[1]
  var i4330 = []
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.push( i4331[i + 0] );
  }
  i4326.names = i4330
  i4326.shadows = i4327[2]
  i4326.anisotropicFiltering = i4327[3]
  i4326.antiAliasing = i4327[4]
  i4326.lodBias = i4327[5]
  i4326.shadowCascades = i4327[6]
  i4326.shadowDistance = i4327[7]
  i4326.shadowmaskMode = i4327[8]
  i4326.shadowProjection = i4327[9]
  i4326.shadowResolution = i4327[10]
  i4326.softParticles = !!i4327[11]
  i4326.softVegetation = !!i4327[12]
  i4326.activeColorSpace = i4327[13]
  i4326.desiredColorSpace = i4327[14]
  i4326.masterTextureLimit = i4327[15]
  i4326.maxQueuedFrames = i4327[16]
  i4326.particleRaycastBudget = i4327[17]
  i4326.pixelLightCount = i4327[18]
  i4326.realtimeReflectionProbes = !!i4327[19]
  i4326.shadowCascade2Split = i4327[20]
  i4326.shadowCascade4Split = new pc.Vec3( i4327[21], i4327[22], i4327[23] )
  i4326.streamingMipmapsActive = !!i4327[24]
  i4326.vSyncCount = i4327[25]
  i4326.asyncUploadBufferSize = i4327[26]
  i4326.asyncUploadTimeSlice = i4327[27]
  i4326.billboardsFaceCameraPosition = !!i4327[28]
  i4326.shadowNearPlaneOffset = i4327[29]
  i4326.streamingMipmapsMemoryBudget = i4327[30]
  i4326.maximumLODLevel = i4327[31]
  i4326.streamingMipmapsAddAllCameras = !!i4327[32]
  i4326.streamingMipmapsMaxLevelReduction = i4327[33]
  i4326.streamingMipmapsRenderersPerFrame = i4327[34]
  i4326.resolutionScalingFixedDPIFactor = i4327[35]
  i4326.streamingMipmapsMaxFileIORequests = i4327[36]
  i4326.currentQualityLevel = i4327[37]
  return i4326
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4334 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4335 = data
  i4334.m_GlyphIndex = i4335[0]
  i4334.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4335[1], i4334.m_GlyphValueRecord)
  return i4334
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4336 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4337 = data
  i4336.m_XCoordinate = i4337[0]
  i4336.m_YCoordinate = i4337[1]
  return i4336
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4338 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4339 = data
  i4338.m_XPositionAdjustment = i4339[0]
  i4338.m_YPositionAdjustment = i4339[1]
  return i4338
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4340 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4341 = data
  i4340.xPlacement = i4341[0]
  i4340.yPlacement = i4341[1]
  i4340.xAdvance = i4341[2]
  i4340.yAdvance = i4341[3]
  return i4340
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4342 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4343 = data
  i4342.m_XPlacement = i4343[0]
  i4342.m_YPlacement = i4343[1]
  i4342.m_XAdvance = i4343[2]
  i4342.m_YAdvance = i4343[3]
  return i4342
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[83],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[93],"101":[93],"102":[93],"103":[93],"104":[93],"105":[93],"106":[29],"107":[108],"109":[110],"111":[110],"28":[13],"112":[60],"63":[113],"66":[20],"20":[113],"24":[20],"114":[20],"115":[113],"116":[113],"117":[113],"118":[13],"119":[16,13],"120":[108],"121":[16,13],"122":[25,108],"123":[108],"124":[108,125],"126":[86],"127":[93],"128":[129],"130":[131],"132":[5],"133":[29],"134":[135],"136":[56],"137":[28],"138":[13],"139":[108,13],"32":[13,16],"140":[13],"141":[16,13],"142":[108],"143":[16,13],"144":[13],"145":[146],"147":[146],"148":[146],"149":[13],"150":[13],"31":[28],"15":[16,13],"151":[13],"30":[28],"152":[13],"153":[13],"154":[13],"155":[13],"156":[13],"157":[13],"158":[13],"159":[13],"160":[13],"161":[16,13],"162":[13],"163":[13],"164":[13],"165":[13],"166":[16,13],"167":[13],"168":[56],"169":[56],"57":[56],"170":[56],"171":[29],"172":[29]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEditor.Animations.AnimatorController","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","PaperBox","UIManager","InputManager","HandTutManager","Fish","Item","Spartula","FishOnPan","InWaterItem","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Sink","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Pan","UnityEngine.CapsuleCollider","ItemClickable","TrashCan","CuttingBoard","ItemDragChildRotator","Knife","Ply_TimerEvent","Ply_BobEffect","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "29.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_Lv108";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4996";

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

Deserializers.buildID = "6a73a67c-781b-463f-b62a-adcfbf7153a4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

