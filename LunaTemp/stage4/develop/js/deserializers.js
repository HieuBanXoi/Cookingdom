var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3796 = root || request.c( 'UnityEngine.JointSpring' )
  var i3797 = data
  i3796.spring = i3797[0]
  i3796.damper = i3797[1]
  i3796.targetPosition = i3797[2]
  return i3796
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.JointMotor' )
  var i3799 = data
  i3798.m_TargetVelocity = i3799[0]
  i3798.m_Force = i3799[1]
  i3798.m_FreeSpin = i3799[2]
  return i3798
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.JointLimits' )
  var i3801 = data
  i3800.m_Min = i3801[0]
  i3800.m_Max = i3801[1]
  i3800.m_Bounciness = i3801[2]
  i3800.m_BounceMinVelocity = i3801[3]
  i3800.m_ContactDistance = i3801[4]
  i3800.minBounce = i3801[5]
  i3800.maxBounce = i3801[6]
  return i3800
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.JointDrive' )
  var i3803 = data
  i3802.m_PositionSpring = i3803[0]
  i3802.m_PositionDamper = i3803[1]
  i3802.m_MaximumForce = i3803[2]
  i3802.m_UseAcceleration = i3803[3]
  return i3802
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3804 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3805 = data
  i3804.m_Spring = i3805[0]
  i3804.m_Damper = i3805[1]
  return i3804
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3806 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3807 = data
  i3806.m_Limit = i3807[0]
  i3806.m_Bounciness = i3807[1]
  i3806.m_ContactDistance = i3807[2]
  return i3806
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3808 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3809 = data
  i3808.m_ExtremumSlip = i3809[0]
  i3808.m_ExtremumValue = i3809[1]
  i3808.m_AsymptoteSlip = i3809[2]
  i3808.m_AsymptoteValue = i3809[3]
  i3808.m_Stiffness = i3809[4]
  return i3808
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3811 = data
  i3810.m_LowerAngle = i3811[0]
  i3810.m_UpperAngle = i3811[1]
  return i3810
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3813 = data
  i3812.m_MotorSpeed = i3813[0]
  i3812.m_MaximumMotorTorque = i3813[1]
  return i3812
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3815 = data
  i3814.m_DampingRatio = i3815[0]
  i3814.m_Frequency = i3815[1]
  i3814.m_Angle = i3815[2]
  return i3814
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3817 = data
  i3816.m_LowerTranslation = i3817[0]
  i3816.m_UpperTranslation = i3817[1]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3818 = root || new pc.UnityMaterial()
  var i3819 = data
  i3818.name = i3819[0]
  request.r(i3819[1], i3819[2], 0, i3818, 'shader')
  i3818.renderQueue = i3819[3]
  i3818.enableInstancing = !!i3819[4]
  var i3821 = i3819[5]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3821[i + 0]) );
  }
  i3818.floatParameters = i3820
  var i3823 = i3819[6]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3823[i + 0]) );
  }
  i3818.colorParameters = i3822
  var i3825 = i3819[7]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3825[i + 0]) );
  }
  i3818.vectorParameters = i3824
  var i3827 = i3819[8]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3827[i + 0]) );
  }
  i3818.textureParameters = i3826
  var i3829 = i3819[9]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3829[i + 0]) );
  }
  i3818.materialFlags = i3828
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3833 = data
  i3832.name = i3833[0]
  i3832.value = i3833[1]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3837 = data
  i3836.name = i3837[0]
  i3836.value = new pc.Color(i3837[1], i3837[2], i3837[3], i3837[4])
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3841 = data
  i3840.name = i3841[0]
  i3840.value = new pc.Vec4( i3841[1], i3841[2], i3841[3], i3841[4] )
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3845 = data
  i3844.name = i3845[0]
  request.r(i3845[1], i3845[2], 0, i3844, 'value')
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3849 = data
  i3848.name = i3849[0]
  i3848.enabled = !!i3849[1]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3851 = data
  i3850.name = i3851[0]
  i3850.width = i3851[1]
  i3850.height = i3851[2]
  i3850.mipmapCount = i3851[3]
  i3850.anisoLevel = i3851[4]
  i3850.filterMode = i3851[5]
  i3850.hdr = !!i3851[6]
  i3850.format = i3851[7]
  i3850.wrapMode = i3851[8]
  i3850.alphaIsTransparency = !!i3851[9]
  i3850.alphaSource = i3851[10]
  i3850.graphicsFormat = i3851[11]
  i3850.sRGBTexture = !!i3851[12]
  i3850.desiredColorSpace = i3851[13]
  i3850.wrapU = i3851[14]
  i3850.wrapV = i3851[15]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3853 = data
  i3852.position = new pc.Vec3( i3853[0], i3853[1], i3853[2] )
  i3852.scale = new pc.Vec3( i3853[3], i3853[4], i3853[5] )
  i3852.rotation = new pc.Quat(i3853[6], i3853[7], i3853[8], i3853[9])
  return i3852
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i3854 = root || request.c( 'HeartEffect' )
  var i3855 = data
  i3854.defaultLifeTime = i3855[0]
  request.r(i3855[1], i3855[2], 0, i3854, 'tf')
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3857 = data
  i3856.color = new pc.Color(i3857[0], i3857[1], i3857[2], i3857[3])
  request.r(i3857[4], i3857[5], 0, i3856, 'sprite')
  i3856.flipX = !!i3857[6]
  i3856.flipY = !!i3857[7]
  i3856.drawMode = i3857[8]
  i3856.size = new pc.Vec2( i3857[9], i3857[10] )
  i3856.tileMode = i3857[11]
  i3856.adaptiveModeThreshold = i3857[12]
  i3856.maskInteraction = i3857[13]
  i3856.spriteSortPoint = i3857[14]
  i3856.enabled = !!i3857[15]
  request.r(i3857[16], i3857[17], 0, i3856, 'sharedMaterial')
  var i3859 = i3857[18]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 2) {
  request.r(i3859[i + 0], i3859[i + 1], 2, i3858, '')
  }
  i3856.sharedMaterials = i3858
  i3856.receiveShadows = !!i3857[19]
  i3856.shadowCastingMode = i3857[20]
  i3856.sortingLayerID = i3857[21]
  i3856.sortingOrder = i3857[22]
  i3856.lightmapIndex = i3857[23]
  i3856.lightmapSceneIndex = i3857[24]
  i3856.lightmapScaleOffset = new pc.Vec4( i3857[25], i3857[26], i3857[27], i3857[28] )
  i3856.lightProbeUsage = i3857[29]
  i3856.reflectionProbeUsage = i3857[30]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3863 = data
  i3862.name = i3863[0]
  i3862.tagId = i3863[1]
  i3862.enabled = !!i3863[2]
  i3862.isStatic = !!i3863[3]
  i3862.layer = i3863[4]
  return i3862
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i3864 = root || request.c( 'HeartBreakEffect' )
  var i3865 = data
  i3864.defaultLifeTime = i3865[0]
  request.r(i3865[1], i3865[2], 0, i3864, 'tf')
  return i3864
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i3866 = root || request.c( 'BlinkEffect' )
  var i3867 = data
  request.r(i3867[0], i3867[1], 0, i3866, 'tf')
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3869 = data
  request.r(i3869[0], i3869[1], 0, i3868, 'mesh')
  i3868.meshCount = i3869[2]
  i3868.activeVertexStreamsCount = i3869[3]
  i3868.alignment = i3869[4]
  i3868.renderMode = i3869[5]
  i3868.sortMode = i3869[6]
  i3868.lengthScale = i3869[7]
  i3868.velocityScale = i3869[8]
  i3868.cameraVelocityScale = i3869[9]
  i3868.normalDirection = i3869[10]
  i3868.sortingFudge = i3869[11]
  i3868.minParticleSize = i3869[12]
  i3868.maxParticleSize = i3869[13]
  i3868.pivot = new pc.Vec3( i3869[14], i3869[15], i3869[16] )
  request.r(i3869[17], i3869[18], 0, i3868, 'trailMaterial')
  i3868.applyActiveColorSpace = !!i3869[19]
  i3868.enabled = !!i3869[20]
  request.r(i3869[21], i3869[22], 0, i3868, 'sharedMaterial')
  var i3871 = i3869[23]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 2) {
  request.r(i3871[i + 0], i3871[i + 1], 2, i3870, '')
  }
  i3868.sharedMaterials = i3870
  i3868.receiveShadows = !!i3869[24]
  i3868.shadowCastingMode = i3869[25]
  i3868.sortingLayerID = i3869[26]
  i3868.sortingOrder = i3869[27]
  i3868.lightmapIndex = i3869[28]
  i3868.lightmapSceneIndex = i3869[29]
  i3868.lightmapScaleOffset = new pc.Vec4( i3869[30], i3869[31], i3869[32], i3869[33] )
  i3868.lightProbeUsage = i3869[34]
  i3868.reflectionProbeUsage = i3869[35]
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3873 = data
  i3872.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3873[0], i3872.main)
  i3872.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3873[1], i3872.colorBySpeed)
  i3872.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3873[2], i3872.colorOverLifetime)
  i3872.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3873[3], i3872.emission)
  i3872.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3873[4], i3872.rotationBySpeed)
  i3872.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3873[5], i3872.rotationOverLifetime)
  i3872.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3873[6], i3872.shape)
  i3872.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3873[7], i3872.sizeBySpeed)
  i3872.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3873[8], i3872.sizeOverLifetime)
  i3872.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3873[9], i3872.textureSheetAnimation)
  i3872.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3873[10], i3872.velocityOverLifetime)
  i3872.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3873[11], i3872.noise)
  i3872.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3873[12], i3872.inheritVelocity)
  i3872.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3873[13], i3872.forceOverLifetime)
  i3872.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3873[14], i3872.limitVelocityOverLifetime)
  i3872.useAutoRandomSeed = !!i3873[15]
  i3872.randomSeed = i3873[16]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3874 = root || new pc.ParticleSystemMain()
  var i3875 = data
  i3874.duration = i3875[0]
  i3874.loop = !!i3875[1]
  i3874.prewarm = !!i3875[2]
  i3874.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[3], i3874.startDelay)
  i3874.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[4], i3874.startLifetime)
  i3874.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[5], i3874.startSpeed)
  i3874.startSize3D = !!i3875[6]
  i3874.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[7], i3874.startSizeX)
  i3874.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[8], i3874.startSizeY)
  i3874.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[9], i3874.startSizeZ)
  i3874.startRotation3D = !!i3875[10]
  i3874.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[11], i3874.startRotationX)
  i3874.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[12], i3874.startRotationY)
  i3874.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[13], i3874.startRotationZ)
  i3874.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3875[14], i3874.startColor)
  i3874.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3875[15], i3874.gravityModifier)
  i3874.simulationSpace = i3875[16]
  request.r(i3875[17], i3875[18], 0, i3874, 'customSimulationSpace')
  i3874.simulationSpeed = i3875[19]
  i3874.useUnscaledTime = !!i3875[20]
  i3874.scalingMode = i3875[21]
  i3874.playOnAwake = !!i3875[22]
  i3874.maxParticles = i3875[23]
  i3874.emitterVelocityMode = i3875[24]
  i3874.stopAction = i3875[25]
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3876 = root || new pc.MinMaxCurve()
  var i3877 = data
  i3876.mode = i3877[0]
  i3876.curveMin = new pc.AnimationCurve( { keys_flow: i3877[1] } )
  i3876.curveMax = new pc.AnimationCurve( { keys_flow: i3877[2] } )
  i3876.curveMultiplier = i3877[3]
  i3876.constantMin = i3877[4]
  i3876.constantMax = i3877[5]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3878 = root || new pc.MinMaxGradient()
  var i3879 = data
  i3878.mode = i3879[0]
  i3878.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3879[1], i3878.gradientMin)
  i3878.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3879[2], i3878.gradientMax)
  i3878.colorMin = new pc.Color(i3879[3], i3879[4], i3879[5], i3879[6])
  i3878.colorMax = new pc.Color(i3879[7], i3879[8], i3879[9], i3879[10])
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3881 = data
  i3880.mode = i3881[0]
  var i3883 = i3881[1]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3883[i + 0]) );
  }
  i3880.colorKeys = i3882
  var i3885 = i3881[2]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3885[i + 0]) );
  }
  i3880.alphaKeys = i3884
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3886 = root || new pc.ParticleSystemColorBySpeed()
  var i3887 = data
  i3886.enabled = !!i3887[0]
  i3886.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3887[1], i3886.color)
  i3886.range = new pc.Vec2( i3887[2], i3887[3] )
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3891 = data
  i3890.color = new pc.Color(i3891[0], i3891[1], i3891[2], i3891[3])
  i3890.time = i3891[4]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3895 = data
  i3894.alpha = i3895[0]
  i3894.time = i3895[1]
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3896 = root || new pc.ParticleSystemColorOverLifetime()
  var i3897 = data
  i3896.enabled = !!i3897[0]
  i3896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3897[1], i3896.color)
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3898 = root || new pc.ParticleSystemEmitter()
  var i3899 = data
  i3898.enabled = !!i3899[0]
  i3898.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3899[1], i3898.rateOverTime)
  i3898.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3899[2], i3898.rateOverDistance)
  var i3901 = i3899[3]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3901[i + 0]) );
  }
  i3898.bursts = i3900
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3904 = root || new pc.ParticleSystemBurst()
  var i3905 = data
  i3904.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3905[0], i3904.count)
  i3904.cycleCount = i3905[1]
  i3904.minCount = i3905[2]
  i3904.maxCount = i3905[3]
  i3904.repeatInterval = i3905[4]
  i3904.time = i3905[5]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3906 = root || new pc.ParticleSystemRotationBySpeed()
  var i3907 = data
  i3906.enabled = !!i3907[0]
  i3906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3907[1], i3906.x)
  i3906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3907[2], i3906.y)
  i3906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3907[3], i3906.z)
  i3906.separateAxes = !!i3907[4]
  i3906.range = new pc.Vec2( i3907[5], i3907[6] )
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3908 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3909 = data
  i3908.enabled = !!i3909[0]
  i3908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3909[1], i3908.x)
  i3908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3909[2], i3908.y)
  i3908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3909[3], i3908.z)
  i3908.separateAxes = !!i3909[4]
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3910 = root || new pc.ParticleSystemShape()
  var i3911 = data
  i3910.enabled = !!i3911[0]
  i3910.shapeType = i3911[1]
  i3910.randomDirectionAmount = i3911[2]
  i3910.sphericalDirectionAmount = i3911[3]
  i3910.randomPositionAmount = i3911[4]
  i3910.alignToDirection = !!i3911[5]
  i3910.radius = i3911[6]
  i3910.radiusMode = i3911[7]
  i3910.radiusSpread = i3911[8]
  i3910.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3911[9], i3910.radiusSpeed)
  i3910.radiusThickness = i3911[10]
  i3910.angle = i3911[11]
  i3910.length = i3911[12]
  i3910.boxThickness = new pc.Vec3( i3911[13], i3911[14], i3911[15] )
  i3910.meshShapeType = i3911[16]
  request.r(i3911[17], i3911[18], 0, i3910, 'mesh')
  request.r(i3911[19], i3911[20], 0, i3910, 'meshRenderer')
  request.r(i3911[21], i3911[22], 0, i3910, 'skinnedMeshRenderer')
  i3910.useMeshMaterialIndex = !!i3911[23]
  i3910.meshMaterialIndex = i3911[24]
  i3910.useMeshColors = !!i3911[25]
  i3910.normalOffset = i3911[26]
  i3910.arc = i3911[27]
  i3910.arcMode = i3911[28]
  i3910.arcSpread = i3911[29]
  i3910.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3911[30], i3910.arcSpeed)
  i3910.donutRadius = i3911[31]
  i3910.position = new pc.Vec3( i3911[32], i3911[33], i3911[34] )
  i3910.rotation = new pc.Vec3( i3911[35], i3911[36], i3911[37] )
  i3910.scale = new pc.Vec3( i3911[38], i3911[39], i3911[40] )
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3912 = root || new pc.ParticleSystemSizeBySpeed()
  var i3913 = data
  i3912.enabled = !!i3913[0]
  i3912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3913[1], i3912.x)
  i3912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3913[2], i3912.y)
  i3912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3913[3], i3912.z)
  i3912.separateAxes = !!i3913[4]
  i3912.range = new pc.Vec2( i3913[5], i3913[6] )
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3914 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3915 = data
  i3914.enabled = !!i3915[0]
  i3914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3915[1], i3914.x)
  i3914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3915[2], i3914.y)
  i3914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3915[3], i3914.z)
  i3914.separateAxes = !!i3915[4]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3916 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3917 = data
  i3916.enabled = !!i3917[0]
  i3916.mode = i3917[1]
  i3916.animation = i3917[2]
  i3916.numTilesX = i3917[3]
  i3916.numTilesY = i3917[4]
  i3916.useRandomRow = !!i3917[5]
  i3916.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3917[6], i3916.frameOverTime)
  i3916.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3917[7], i3916.startFrame)
  i3916.cycleCount = i3917[8]
  i3916.rowIndex = i3917[9]
  i3916.flipU = i3917[10]
  i3916.flipV = i3917[11]
  i3916.spriteCount = i3917[12]
  var i3919 = i3917[13]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 2, i3918, '')
  }
  i3916.sprites = i3918
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3922 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3923 = data
  i3922.enabled = !!i3923[0]
  i3922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[1], i3922.x)
  i3922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[2], i3922.y)
  i3922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[3], i3922.z)
  i3922.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[4], i3922.radial)
  i3922.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[5], i3922.speedModifier)
  i3922.space = i3923[6]
  i3922.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[7], i3922.orbitalX)
  i3922.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[8], i3922.orbitalY)
  i3922.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[9], i3922.orbitalZ)
  i3922.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[10], i3922.orbitalOffsetX)
  i3922.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[11], i3922.orbitalOffsetY)
  i3922.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3923[12], i3922.orbitalOffsetZ)
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3924 = root || new pc.ParticleSystemNoise()
  var i3925 = data
  i3924.enabled = !!i3925[0]
  i3924.separateAxes = !!i3925[1]
  i3924.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[2], i3924.strengthX)
  i3924.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[3], i3924.strengthY)
  i3924.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[4], i3924.strengthZ)
  i3924.frequency = i3925[5]
  i3924.damping = !!i3925[6]
  i3924.octaveCount = i3925[7]
  i3924.octaveMultiplier = i3925[8]
  i3924.octaveScale = i3925[9]
  i3924.quality = i3925[10]
  i3924.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[11], i3924.scrollSpeed)
  i3924.scrollSpeedMultiplier = i3925[12]
  i3924.remapEnabled = !!i3925[13]
  i3924.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[14], i3924.remapX)
  i3924.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[15], i3924.remapY)
  i3924.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[16], i3924.remapZ)
  i3924.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[17], i3924.positionAmount)
  i3924.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[18], i3924.rotationAmount)
  i3924.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3925[19], i3924.sizeAmount)
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3926 = root || new pc.ParticleSystemInheritVelocity()
  var i3927 = data
  i3926.enabled = !!i3927[0]
  i3926.mode = i3927[1]
  i3926.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3927[2], i3926.curve)
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3928 = root || new pc.ParticleSystemForceOverLifetime()
  var i3929 = data
  i3928.enabled = !!i3929[0]
  i3928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3929[1], i3928.x)
  i3928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3929[2], i3928.y)
  i3928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3929[3], i3928.z)
  i3928.space = i3929[4]
  i3928.randomized = !!i3929[5]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3930 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3931 = data
  i3930.enabled = !!i3931[0]
  i3930.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3931[1], i3930.limit)
  i3930.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3931[2], i3930.limitX)
  i3930.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3931[3], i3930.limitY)
  i3930.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3931[4], i3930.limitZ)
  i3930.dampen = i3931[5]
  i3930.separateAxes = !!i3931[6]
  i3930.space = i3931[7]
  i3930.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3931[8], i3930.drag)
  i3930.multiplyDragByParticleSize = !!i3931[9]
  i3930.multiplyDragByParticleVelocity = !!i3931[10]
  return i3930
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i3932 = root || request.c( 'StarExploreFX' )
  var i3933 = data
  request.r(i3933[0], i3933[1], 0, i3932, 'tf')
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3935 = data
  i3934.pivot = new pc.Vec2( i3935[0], i3935[1] )
  i3934.anchorMin = new pc.Vec2( i3935[2], i3935[3] )
  i3934.anchorMax = new pc.Vec2( i3935[4], i3935[5] )
  i3934.sizeDelta = new pc.Vec2( i3935[6], i3935[7] )
  i3934.anchoredPosition3D = new pc.Vec3( i3935[8], i3935[9], i3935[10] )
  i3934.rotation = new pc.Quat(i3935[11], i3935[12], i3935[13], i3935[14])
  i3934.scale = new pc.Vec3( i3935[15], i3935[16], i3935[17] )
  return i3934
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i3936 = root || request.c( 'ClockTimer' )
  var i3937 = data
  request.r(i3937[0], i3937[1], 0, i3936, 'fillImage')
  request.r(i3937[2], i3937[3], 0, i3936, 'tf')
  i3936.spawnZoomDuration = i3937[4]
  i3936.despawnZoomDuration = i3937[5]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3939 = data
  i3938.cullTransparentMesh = !!i3939[0]
  return i3938
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3940 = root || request.c( 'UnityEngine.UI.Image' )
  var i3941 = data
  request.r(i3941[0], i3941[1], 0, i3940, 'm_Sprite')
  i3940.m_Type = i3941[2]
  i3940.m_PreserveAspect = !!i3941[3]
  i3940.m_FillCenter = !!i3941[4]
  i3940.m_FillMethod = i3941[5]
  i3940.m_FillAmount = i3941[6]
  i3940.m_FillClockwise = !!i3941[7]
  i3940.m_FillOrigin = i3941[8]
  i3940.m_UseSpriteMesh = !!i3941[9]
  i3940.m_PixelsPerUnitMultiplier = i3941[10]
  request.r(i3941[11], i3941[12], 0, i3940, 'm_Material')
  i3940.m_Maskable = !!i3941[13]
  i3940.m_Color = new pc.Color(i3941[14], i3941[15], i3941[16], i3941[17])
  i3940.m_RaycastTarget = !!i3941[18]
  i3940.m_RaycastPadding = new pc.Vec4( i3941[19], i3941[20], i3941[21], i3941[22] )
  return i3940
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i3942 = root || request.c( 'WaterSplash' )
  var i3943 = data
  request.r(i3943[0], i3943[1], 0, i3942, 'tf')
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3945 = data
  i3944.center = new pc.Vec3( i3945[0], i3945[1], i3945[2] )
  i3944.radius = i3945[3]
  i3944.enabled = !!i3945[4]
  i3944.isTrigger = !!i3945[5]
  request.r(i3945[6], i3945[7], 0, i3944, 'material')
  return i3944
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i3946 = root || request.c( 'ItemDraggable' )
  var i3947 = data
  i3946.isDraggable = !!i3947[0]
  request.r(i3947[1], i3947[2], 0, i3946, 'returnTransform')
  i3946.setParentToReturnTransform = !!i3947[3]
  i3946.returnToStartOnDragFailed = !!i3947[4]
  i3946.returnToExactReturnTransformPosition = !!i3947[5]
  i3946.targetItemType = i3947[6]
  request.r(i3947[7], i3947[8], 0, i3946, 'item')
  i3946.checkState = !!i3947[9]
  request.r(i3947[10], i3947[11], 0, i3946, 'shadowObject')
  i3946.playReturnToStartFinishSound = !!i3947[12]
  i3946.returnToStartFinishFxType = i3947[13]
  i3946.spawnBreakHeartOnDropFail = !!i3947[14]
  i3946.playBeginDragSound = !!i3947[15]
  i3946.beginDragFxType = i3947[16]
  i3946.liftOffset = i3947[17]
  i3946.dragScaleMultiplier = i3947[18]
  i3946.dragScaleDuration = i3947[19]
  i3946.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i3947[20], i3946.onBeginDrag)
  i3946.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i3947[21], i3946.onDropSuccess)
  i3946.onDropFail = request.d('UnityEngine.Events.UnityEvent', i3947[22], i3946.onDropFail)
  i3946.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i3947[23], i3946.onReturnToStartComplete)
  return i3946
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3948 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3949 = data
  i3948.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3949[0], i3948.m_PersistentCalls)
  return i3948
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3950 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3951 = data
  var i3953 = i3951[0]
  var i3952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.add(request.d('UnityEngine.Events.PersistentCall', i3953[i + 0]));
  }
  i3950.m_Calls = i3952
  return i3950
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3956 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3957 = data
  request.r(i3957[0], i3957[1], 0, i3956, 'm_Target')
  i3956.m_TargetAssemblyTypeName = i3957[2]
  i3956.m_MethodName = i3957[3]
  i3956.m_Mode = i3957[4]
  i3956.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3957[5], i3956.m_Arguments)
  i3956.m_CallState = i3957[6]
  return i3956
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3958 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3959 = data
  request.r(i3959[0], i3959[1], 0, i3958, 'm_ObjectArgument')
  i3958.m_ObjectArgumentAssemblyTypeName = i3959[2]
  i3958.m_IntArgument = i3959[3]
  i3958.m_FloatArgument = i3959[4]
  i3958.m_StringArgument = i3959[5]
  i3958.m_BoolArgument = !!i3959[6]
  return i3958
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i3960 = root || request.c( 'ItemMoveToTarget' )
  var i3961 = data
  request.r(i3961[0], i3961[1], 0, i3960, 'defaultTarget')
  i3960.duration = i3961[2]
  i3960.useAnimationCurve = !!i3961[3]
  i3960.moveCurve = new pc.AnimationCurve( { keys_flow: i3961[4] } )
  i3960.easeType = i3961[5]
  i3960.moveType = i3961[6]
  i3960.jumpPower = i3961[7]
  i3960.numJumps = i3961[8]
  i3960.rotate360DuringJump = !!i3961[9]
  i3960.flipRotate = !!i3961[10]
  i3960.angleRotate = i3961[11]
  i3960.scaleOnMove = !!i3961[12]
  i3960.endScaleMultiplier = i3961[13]
  i3960.setParentToTarget = !!i3961[14]
  i3960.onComplete = request.d('UnityEngine.Events.UnityEvent', i3961[15], i3960.onComplete)
  i3960.lockInputWhileMoving = !!i3961[16]
  i3960.resetParentBeforeMove = !!i3961[17]
  return i3960
}

Deserializers["Paper"] = function (request, data, root) {
  var i3962 = root || request.c( 'Paper' )
  var i3963 = data
  i3962.isUse = !!i3963[0]
  request.r(i3963[1], i3963[2], 0, i3962, 'paper')
  request.r(i3963[3], i3963[4], 0, i3962, 'paperTrash')
  request.r(i3963[5], i3963[6], 0, i3962, 'itemDragRaycastTarget')
  request.r(i3963[7], i3963[8], 0, i3962, 'curentCollider')
  i3962.isDone = !!i3963[9]
  i3962.onProcess = !!i3963[10]
  i3962.requireMatchingTargetTypeForHandTut = !!i3963[11]
  request.r(i3963[12], i3963[13], 0, i3962, 'itemDraggable')
  request.r(i3963[14], i3963[15], 0, i3962, 'itemClickable')
  request.r(i3963[16], i3963[17], 0, i3962, 'itemStirring')
  request.r(i3963[18], i3963[19], 0, i3962, 'itemKnifeSpriteMaskCutter')
  request.r(i3963[20], i3963[21], 0, i3962, 'itemSpriteMaskPainter')
  request.r(i3963[22], i3963[23], 0, i3962, 'itemDragSpriteMaskPainter')
  request.r(i3963[24], i3963[25], 0, i3962, 'itemMoveToTarget')
  request.r(i3963[26], i3963[27], 0, i3962, 'animator')
  i3962.itemType = i3963[28]
  request.r(i3963[29], i3963[30], 0, i3962, 'spriteRenderer')
  i3962.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i3963[31], i3962.onKnifeIn)
  i3962.heartEffectScale = i3963[32]
  i3962.breakHeartEffectScale = i3963[33]
  i3962.blinkEffectScale = i3963[34]
  i3962.mergeEffectScale = i3963[35]
  i3962.playMoveToTargetFinishSound = !!i3963[36]
  i3962.moveToTargetFinishFxType = i3963[37]
  i3962.fxSpawnZPos = i3963[38]
  request.r(i3963[39], i3963[40], 0, i3962, 'tf')
  return i3962
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i3964 = root || request.c( 'ItemDragRaycastTarget' )
  var i3965 = data
  i3964.targetToFind = i3965[0]
  i3964.targetItemTypeWhenHit = i3965[1]
  i3964.targetItemTypeOnDropFail = i3965[2]
  request.r(i3965[3], i3965[4], 0, i3964, 'raycastPoint')
  i3964.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3965[5] )
  i3964.rayDistance = i3965[6]
  i3964.updateMoveDefaultTarget = !!i3965[7]
  i3964.invokeOnlyWhenTargetChanged = !!i3965[8]
  i3964.targetChangeEnabled = !!i3965[9]
  i3964.restoreTargetOnDropFail = !!i3965[10]
  i3964.resetCurrentTargetOnNoHit = !!i3965[11]
  i3964.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i3965[12], i3964.onTargetFound)
  i3964.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i3965[13], i3964.onTargetFoundWithItem)
  return i3964
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i3966 = root || request.c( 'ItemRaycastTargetEvent' )
  var i3967 = data
  i3966.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3967[0], i3966.m_PersistentCalls)
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3969 = data
  request.r(i3969[0], i3969[1], 0, i3968, 'animatorController')
  request.r(i3969[2], i3969[3], 0, i3968, 'avatar')
  i3968.updateMode = i3969[4]
  i3968.hasTransformHierarchy = !!i3969[5]
  i3968.applyRootMotion = !!i3969[6]
  var i3971 = i3969[7]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 2) {
  request.r(i3971[i + 0], i3971[i + 1], 2, i3970, '')
  }
  i3968.humanBones = i3970
  i3968.enabled = !!i3969[8]
  return i3968
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i3974 = root || request.c( 'ItemSound' )
  var i3975 = data
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3977 = data
  i3976.name = i3977[0]
  i3976.index = i3977[1]
  i3976.startup = !!i3977[2]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3979 = data
  i3978.planeDistance = i3979[0]
  i3978.referencePixelsPerUnit = i3979[1]
  i3978.isFallbackOverlay = !!i3979[2]
  i3978.renderMode = i3979[3]
  i3978.renderOrder = i3979[4]
  i3978.sortingLayerName = i3979[5]
  i3978.sortingOrder = i3979[6]
  i3978.scaleFactor = i3979[7]
  request.r(i3979[8], i3979[9], 0, i3978, 'worldCamera')
  i3978.overrideSorting = !!i3979[10]
  i3978.pixelPerfect = !!i3979[11]
  i3978.targetDisplay = i3979[12]
  i3978.overridePixelPerfect = !!i3979[13]
  i3978.enabled = !!i3979[14]
  return i3978
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3980 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3981 = data
  i3980.m_UiScaleMode = i3981[0]
  i3980.m_ReferencePixelsPerUnit = i3981[1]
  i3980.m_ScaleFactor = i3981[2]
  i3980.m_ReferenceResolution = new pc.Vec2( i3981[3], i3981[4] )
  i3980.m_ScreenMatchMode = i3981[5]
  i3980.m_MatchWidthOrHeight = i3981[6]
  i3980.m_PhysicalUnit = i3981[7]
  i3980.m_FallbackScreenDPI = i3981[8]
  i3980.m_DefaultSpriteDPI = i3981[9]
  i3980.m_DynamicPixelsPerUnit = i3981[10]
  i3980.m_PresetInfoIsWorld = !!i3981[11]
  return i3980
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3982 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3983 = data
  i3982.m_IgnoreReversedGraphics = !!i3983[0]
  i3982.m_BlockingObjects = i3983[1]
  i3982.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3983[2] )
  return i3982
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3984 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3985 = data
  i3984.m_hasFontAssetChanged = !!i3985[0]
  request.r(i3985[1], i3985[2], 0, i3984, 'm_baseMaterial')
  i3984.m_maskOffset = new pc.Vec4( i3985[3], i3985[4], i3985[5], i3985[6] )
  i3984.m_text = i3985[7]
  i3984.m_isRightToLeft = !!i3985[8]
  request.r(i3985[9], i3985[10], 0, i3984, 'm_fontAsset')
  request.r(i3985[11], i3985[12], 0, i3984, 'm_sharedMaterial')
  var i3987 = i3985[13]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 2) {
  request.r(i3987[i + 0], i3987[i + 1], 2, i3986, '')
  }
  i3984.m_fontSharedMaterials = i3986
  request.r(i3985[14], i3985[15], 0, i3984, 'm_fontMaterial')
  var i3989 = i3985[16]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 2) {
  request.r(i3989[i + 0], i3989[i + 1], 2, i3988, '')
  }
  i3984.m_fontMaterials = i3988
  i3984.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3985[17], i3985[18], i3985[19], i3985[20])
  i3984.m_fontColor = new pc.Color(i3985[21], i3985[22], i3985[23], i3985[24])
  i3984.m_enableVertexGradient = !!i3985[25]
  i3984.m_colorMode = i3985[26]
  i3984.m_fontColorGradient = request.d('TMPro.VertexGradient', i3985[27], i3984.m_fontColorGradient)
  request.r(i3985[28], i3985[29], 0, i3984, 'm_fontColorGradientPreset')
  request.r(i3985[30], i3985[31], 0, i3984, 'm_spriteAsset')
  i3984.m_tintAllSprites = !!i3985[32]
  request.r(i3985[33], i3985[34], 0, i3984, 'm_StyleSheet')
  i3984.m_TextStyleHashCode = i3985[35]
  i3984.m_overrideHtmlColors = !!i3985[36]
  i3984.m_faceColor = UnityEngine.Color32.ConstructColor(i3985[37], i3985[38], i3985[39], i3985[40])
  i3984.m_fontSize = i3985[41]
  i3984.m_fontSizeBase = i3985[42]
  i3984.m_fontWeight = i3985[43]
  i3984.m_enableAutoSizing = !!i3985[44]
  i3984.m_fontSizeMin = i3985[45]
  i3984.m_fontSizeMax = i3985[46]
  i3984.m_fontStyle = i3985[47]
  i3984.m_HorizontalAlignment = i3985[48]
  i3984.m_VerticalAlignment = i3985[49]
  i3984.m_textAlignment = i3985[50]
  i3984.m_characterSpacing = i3985[51]
  i3984.m_wordSpacing = i3985[52]
  i3984.m_lineSpacing = i3985[53]
  i3984.m_lineSpacingMax = i3985[54]
  i3984.m_paragraphSpacing = i3985[55]
  i3984.m_charWidthMaxAdj = i3985[56]
  i3984.m_TextWrappingMode = i3985[57]
  i3984.m_wordWrappingRatios = i3985[58]
  i3984.m_overflowMode = i3985[59]
  request.r(i3985[60], i3985[61], 0, i3984, 'm_linkedTextComponent')
  request.r(i3985[62], i3985[63], 0, i3984, 'parentLinkedComponent')
  i3984.m_enableKerning = !!i3985[64]
  var i3991 = i3985[65]
  var i3990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.add(i3991[i + 0]);
  }
  i3984.m_ActiveFontFeatures = i3990
  i3984.m_enableExtraPadding = !!i3985[66]
  i3984.checkPaddingRequired = !!i3985[67]
  i3984.m_isRichText = !!i3985[68]
  i3984.m_parseCtrlCharacters = !!i3985[69]
  i3984.m_isOrthographic = !!i3985[70]
  i3984.m_isCullingEnabled = !!i3985[71]
  i3984.m_horizontalMapping = i3985[72]
  i3984.m_verticalMapping = i3985[73]
  i3984.m_uvLineOffset = i3985[74]
  i3984.m_geometrySortingOrder = i3985[75]
  i3984.m_IsTextObjectScaleStatic = !!i3985[76]
  i3984.m_VertexBufferAutoSizeReduction = !!i3985[77]
  i3984.m_useMaxVisibleDescender = !!i3985[78]
  i3984.m_pageToDisplay = i3985[79]
  i3984.m_margin = new pc.Vec4( i3985[80], i3985[81], i3985[82], i3985[83] )
  i3984.m_isUsingLegacyAnimationComponent = !!i3985[84]
  i3984.m_isVolumetricText = !!i3985[85]
  request.r(i3985[86], i3985[87], 0, i3984, 'm_Material')
  i3984.m_EmojiFallbackSupport = !!i3985[88]
  i3984.m_Maskable = !!i3985[89]
  i3984.m_Color = new pc.Color(i3985[90], i3985[91], i3985[92], i3985[93])
  i3984.m_RaycastTarget = !!i3985[94]
  i3984.m_RaycastPadding = new pc.Vec4( i3985[95], i3985[96], i3985[97], i3985[98] )
  return i3984
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.VertexGradient' )
  var i3993 = data
  i3992.topLeft = new pc.Color(i3993[0], i3993[1], i3993[2], i3993[3])
  i3992.topRight = new pc.Color(i3993[4], i3993[5], i3993[6], i3993[7])
  i3992.bottomLeft = new pc.Color(i3993[8], i3993[9], i3993[10], i3993[11])
  i3992.bottomRight = new pc.Color(i3993[12], i3993[13], i3993[14], i3993[15])
  return i3992
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3996 = root || request.c( 'UnityEngine.UI.Button' )
  var i3997 = data
  i3996.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3997[0], i3996.m_OnClick)
  i3996.m_Navigation = request.d('UnityEngine.UI.Navigation', i3997[1], i3996.m_Navigation)
  i3996.m_Transition = i3997[2]
  i3996.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3997[3], i3996.m_Colors)
  i3996.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3997[4], i3996.m_SpriteState)
  i3996.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3997[5], i3996.m_AnimationTriggers)
  i3996.m_Interactable = !!i3997[6]
  request.r(i3997[7], i3997[8], 0, i3996, 'm_TargetGraphic')
  return i3996
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3998 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3999 = data
  i3998.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3999[0], i3998.m_PersistentCalls)
  return i3998
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4000 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4001 = data
  i4000.m_Mode = i4001[0]
  i4000.m_WrapAround = !!i4001[1]
  request.r(i4001[2], i4001[3], 0, i4000, 'm_SelectOnUp')
  request.r(i4001[4], i4001[5], 0, i4000, 'm_SelectOnDown')
  request.r(i4001[6], i4001[7], 0, i4000, 'm_SelectOnLeft')
  request.r(i4001[8], i4001[9], 0, i4000, 'm_SelectOnRight')
  return i4000
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4002 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4003 = data
  i4002.m_NormalColor = new pc.Color(i4003[0], i4003[1], i4003[2], i4003[3])
  i4002.m_HighlightedColor = new pc.Color(i4003[4], i4003[5], i4003[6], i4003[7])
  i4002.m_PressedColor = new pc.Color(i4003[8], i4003[9], i4003[10], i4003[11])
  i4002.m_SelectedColor = new pc.Color(i4003[12], i4003[13], i4003[14], i4003[15])
  i4002.m_DisabledColor = new pc.Color(i4003[16], i4003[17], i4003[18], i4003[19])
  i4002.m_ColorMultiplier = i4003[20]
  i4002.m_FadeDuration = i4003[21]
  return i4002
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4004 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4005 = data
  request.r(i4005[0], i4005[1], 0, i4004, 'm_HighlightedSprite')
  request.r(i4005[2], i4005[3], 0, i4004, 'm_PressedSprite')
  request.r(i4005[4], i4005[5], 0, i4004, 'm_SelectedSprite')
  request.r(i4005[6], i4005[7], 0, i4004, 'm_DisabledSprite')
  return i4004
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4006 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4007 = data
  i4006.m_NormalTrigger = i4007[0]
  i4006.m_HighlightedTrigger = i4007[1]
  i4006.m_PressedTrigger = i4007[2]
  i4006.m_SelectedTrigger = i4007[3]
  i4006.m_DisabledTrigger = i4007[4]
  return i4006
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i4008 = root || request.c( 'Ply_Pool' )
  var i4009 = data
  var i4011 = i4009[0]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( request.d('Ply_Pool+PoolAmount', i4011[i + 0]) );
  }
  i4008.poolAmounts = i4010
  request.r(i4009[1], i4009[2], 0, i4008, 'poolHolder')
  return i4008
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i4014 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i4015 = data
  i4014.type = i4015[0]
  i4014.amount = i4015[1]
  request.r(i4015[2], i4015[3], 0, i4014, 'gameUnit')
  return i4014
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4016 = root || request.c( 'Ply_SoundManager' )
  var i4017 = data
  var i4019 = i4017[0]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( request.d('Ply_SoundManager+FxAudio', i4019[i + 0]) );
  }
  i4016.fxAudios = i4018
  var i4021 = i4017[1]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 2) {
  request.r(i4021[i + 0], i4021[i + 1], 2, i4020, '')
  }
  i4016.audioClips = i4020
  request.r(i4017[2], i4017[3], 0, i4016, 'sound')
  return i4016
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i4024 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i4025 = data
  i4024.fxType = i4025[0]
  request.r(i4025[1], i4025[2], 0, i4024, 'audioClip')
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4029 = data
  request.r(i4029[0], i4029[1], 0, i4028, 'clip')
  request.r(i4029[2], i4029[3], 0, i4028, 'outputAudioMixerGroup')
  i4028.playOnAwake = !!i4029[4]
  i4028.loop = !!i4029[5]
  i4028.time = i4029[6]
  i4028.volume = i4029[7]
  i4028.pitch = i4029[8]
  i4028.enabled = !!i4029[9]
  return i4028
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4030 = root || request.c( 'GameManager' )
  var i4031 = data
  i4030.isPlaying = !!i4031[0]
  i4030.isTutorial = !!i4031[1]
  i4030.isGotoStore = !!i4031[2]
  i4030.isLoseGame = !!i4031[3]
  i4030.countMove = i4031[4]
  i4030.currentLayer = i4031[5]
  request.r(i4031[6], i4031[7], 0, i4030, 'trashCan')
  request.r(i4031[8], i4031[9], 0, i4030, 'step1')
  request.r(i4031[10], i4031[11], 0, i4030, 'paperBox')
  return i4030
}

Deserializers["UIManager"] = function (request, data, root) {
  var i4032 = root || request.c( 'UIManager' )
  var i4033 = data
  request.r(i4033[0], i4033[1], 0, i4032, 'winUI')
  request.r(i4033[2], i4033[3], 0, i4032, 'loseUI')
  request.r(i4033[4], i4033[5], 0, i4032, 'tutorial')
  request.r(i4033[6], i4033[7], 0, i4032, 'verticalUI')
  request.r(i4033[8], i4033[9], 0, i4032, 'horizontalUI')
  request.r(i4033[10], i4033[11], 0, i4032, 'downloadBtn')
  request.r(i4033[12], i4033[13], 0, i4032, 'horizontalDownloadBtn')
  request.r(i4033[14], i4033[15], 0, i4032, 'textAnim')
  i4032.isGoogleBuild = !!i4033[16]
  i4032.screenWidth = i4033[17]
  i4032.screenHeight = i4033[18]
  i4032.scaleHeightOnWidth = i4033[19]
  i4032.isVertical = !!i4033[20]
  i4032.isScreenVertical = !!i4033[21]
  request.r(i4033[22], i4033[23], 0, i4032, 'cam')
  i4032.verticalUIHeightOnWidthRatio = i4033[24]
  i4032.scaleCameraOnValidate = !!i4033[25]
  i4032.screenVerticalHeightOnWidthRatio = i4033[26]
  i4032.useContinuousScaling = !!i4033[27]
  i4032.baseOrthographicSize = i4033[28]
  i4032.baseAspect = i4033[29]
  i4032.landscapeSizeRatio = i4033[30]
  i4032.defaultPortraitSizeRatio = i4033[31]
  var i4035 = i4033[32]
  var i4034 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.add(request.d('ScreenScaleStep', i4035[i + 0]));
  }
  i4032.discreteScaleSteps = i4034
  i4032.usePerspectiveCamera = !!i4033[33]
  request.r(i4033[34], i4033[35], 0, i4032, 'perspectiveFocus')
  i4032.perspectiveFocusDistance = i4033[36]
  i4032.perspectivePadding = i4033[37]
  i4032.fitRendererBounds = !!i4033[38]
  request.r(i4033[39], i4033[40], 0, i4032, 'boundsRoot')
  var i4037 = i4033[41]
  var i4036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i4037.length; i += 2) {
  request.r(i4037[i + 0], i4037[i + 1], 1, i4036, '')
  }
  i4032.boundsRenderers = i4036
  return i4032
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i4040 = root || request.c( 'ScreenScaleStep' )
  var i4041 = data
  i4040.heightOnWidthRatio = i4041[0]
  i4040.orthographicSize = i4041[1]
  return i4040
}

Deserializers["InputManager"] = function (request, data, root) {
  var i4044 = root || request.c( 'InputManager' )
  var i4045 = data
  i4044.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4045[0] )
  i4044.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i4045[1] )
  i4044.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i4045[2] )
  i4044.isDragging = !!i4045[3]
  return i4044
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i4046 = root || request.c( 'HandTutManager' )
  var i4047 = data
  var i4049 = i4047[0]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i4049.length; i += 2) {
  request.r(i4049[i + 0], i4049[i + 1], 1, i4048, '')
  }
  i4046.items = i4048
  request.r(i4047[1], i4047[2], 0, i4046, 'knife')
  request.r(i4047[3], i4047[4], 0, i4046, 'knife2')
  request.r(i4047[5], i4047[6], 0, i4046, 'salt')
  request.r(i4047[7], i4047[8], 0, i4046, 'handTutObject')
  request.r(i4047[9], i4047[10], 0, i4046, 'tapToCookObject')
  request.r(i4047[11], i4047[12], 0, i4046, 'oilItem')
  request.r(i4047[13], i4047[14], 0, i4046, 'stoveToggleEvent')
  request.r(i4047[15], i4047[16], 0, i4046, 'waterToggleEvent')
  request.r(i4047[17], i4047[18], 0, i4046, 'sinkBlock')
  var i4051 = i4047[19]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i4051.length; i += 2) {
  request.r(i4051[i + 0], i4051[i + 1], 1, i4050, '')
  }
  i4046.itemsInWater = i4050
  i4046.noDelayItemCount = i4047[20]
  i4046.breakHeartNoDelayThreshold = i4047[21]
  i4046.shortIdleDelay = i4047[22]
  i4046.maxHandTutShowCount = i4047[23]
  i4046.showSinkWaterTutorialOnStart = !!i4047[24]
  i4046.waitForBowlIntro = !!i4047[25]
  i4046.idleDelay = i4047[26]
  i4046.firstHandTutDelay = i4047[27]
  i4046.phaseHandTutDelay = i4047[28]
  i4046.moveDuration = i4047[29]
  i4046.dragFadeDuration = i4047[30]
  i4046.clickScaleDuration = i4047[31]
  i4046.waitAtEndDuration = i4047[32]
  i4046.handZPosition = i4047[33]
  i4046.clickScaleMultiplier = i4047[34]
  i4046.moveEase = i4047[35]
  return i4046
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i4056 = root || request.c( 'SortChildByZPos' )
  var i4057 = data
  request.r(i4057[0], i4057[1], 0, i4056, 'transformToSort')
  var i4059 = i4057[2]
  var i4058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4059.length; i += 2) {
  request.r(i4059[i + 0], i4059[i + 1], 1, i4058, '')
  }
  i4056.childrenToSort = i4058
  i4056.zOffset = i4057[3]
  i4056.baseZ = i4057[4]
  return i4056
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i4062 = root || request.c( 'PhaseManager' )
  var i4063 = data
  var i4065 = i4063[0]
  var i4064 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.add(request.d('PhaseData', i4065[i + 0]));
  }
  i4062.phases = i4064
  i4062.transitionType = i4063[1]
  i4062.transitionDuration = i4063[2]
  i4062.delayBeforeNextPhase = i4063[3]
  i4062.offScreenLeftX = i4063[4]
  i4062.offScreenRightX = i4063[5]
  i4062.offScreenBottomY = i4063[6]
  i4062.offScreenTopY = i4063[7]
  i4062.centerScreenX = i4063[8]
  request.r(i4063[9], i4063[10], 0, i4062, 'phaseTransitionObject')
  i4062.phaseTransitionObjectDuration = i4063[11]
  i4062.currentPhaseIndex = i4063[12]
  i4062.currentStepCount = i4063[13]
  return i4062
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i4068 = root || request.c( 'PhaseData' )
  var i4069 = data
  request.r(i4069[0], i4069[1], 0, i4068, 'phaseObject')
  i4068.totalSteps = i4069[2]
  i4068.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i4069[3], i4068.onPhaseReady)
  return i4068
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i4070 = root || request.c( 'ItemTypeDoneManager' )
  var i4071 = data
  var i4073 = i4071[0]
  var i4072 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i4073[i + 0]));
  }
  i4070.itemTypeGroups = i4072
  return i4070
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i4076 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i4077 = data
  i4076.itemType = i4077[0]
  var i4079 = i4077[1]
  var i4078 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i4079.length; i += 2) {
  request.r(i4079[i + 0], i4079[i + 1], 1, i4078, '')
  }
  i4076.items = i4078
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4081 = data
  i4080.aspect = i4081[0]
  i4080.orthographic = !!i4081[1]
  i4080.orthographicSize = i4081[2]
  i4080.backgroundColor = new pc.Color(i4081[3], i4081[4], i4081[5], i4081[6])
  i4080.nearClipPlane = i4081[7]
  i4080.farClipPlane = i4081[8]
  i4080.fieldOfView = i4081[9]
  i4080.depth = i4081[10]
  i4080.clearFlags = i4081[11]
  i4080.cullingMask = i4081[12]
  i4080.rect = i4081[13]
  request.r(i4081[14], i4081[15], 0, i4080, 'targetTexture')
  i4080.usePhysicalProperties = !!i4081[16]
  i4080.focalLength = i4081[17]
  i4080.sensorSize = new pc.Vec2( i4081[18], i4081[19] )
  i4080.lensShift = new pc.Vec2( i4081[20], i4081[21] )
  i4080.gateFit = i4081[22]
  i4080.commandBufferCount = i4081[23]
  i4080.cameraType = i4081[24]
  i4080.enabled = !!i4081[25]
  return i4080
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4082 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4083 = data
  request.r(i4083[0], i4083[1], 0, i4082, 'm_FirstSelected')
  i4082.m_sendNavigationEvents = !!i4083[2]
  i4082.m_DragThreshold = i4083[3]
  return i4082
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4084 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4085 = data
  i4084.m_HorizontalAxis = i4085[0]
  i4084.m_VerticalAxis = i4085[1]
  i4084.m_SubmitButton = i4085[2]
  i4084.m_CancelButton = i4085[3]
  i4084.m_InputActionsPerSecond = i4085[4]
  i4084.m_RepeatDelay = i4085[5]
  i4084.m_ForceModuleActive = !!i4085[6]
  i4084.m_SendPointerHoverToParent = !!i4085[7]
  return i4084
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i4086 = root || request.c( 'Ply_ToggleEvent' )
  var i4087 = data
  i4086.isOn = !!i4087[0]
  i4086.applyStateOnEnable = !!i4087[1]
  i4086.applyStateOnClick = !!i4087[2]
  request.r(i4087[3], i4087[4], 0, i4086, 'targetObject')
  i4086.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i4087[5], i4086.onTurnOn)
  i4086.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i4087[6], i4086.onTurnOff)
  return i4086
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i4088 = root || request.c( 'SinkBlock' )
  var i4089 = data
  request.r(i4089[0], i4089[1], 0, i4088, 'sink')
  i4088.startsInside = !!i4089[2]
  i4088.insideTargetType = i4089[3]
  request.r(i4089[4], i4089[5], 0, i4088, 'insideDefaultTarget')
  i4088.outsideTargetType = i4089[6]
  request.r(i4089[7], i4089[8], 0, i4088, 'outsideDefaultTarget')
  i4088.isDone = !!i4089[9]
  i4088.onProcess = !!i4089[10]
  i4088.requireMatchingTargetTypeForHandTut = !!i4089[11]
  request.r(i4089[12], i4089[13], 0, i4088, 'itemDraggable')
  request.r(i4089[14], i4089[15], 0, i4088, 'itemClickable')
  request.r(i4089[16], i4089[17], 0, i4088, 'itemStirring')
  request.r(i4089[18], i4089[19], 0, i4088, 'itemKnifeSpriteMaskCutter')
  request.r(i4089[20], i4089[21], 0, i4088, 'itemSpriteMaskPainter')
  request.r(i4089[22], i4089[23], 0, i4088, 'itemDragSpriteMaskPainter')
  request.r(i4089[24], i4089[25], 0, i4088, 'itemMoveToTarget')
  request.r(i4089[26], i4089[27], 0, i4088, 'animator')
  i4088.itemType = i4089[28]
  request.r(i4089[29], i4089[30], 0, i4088, 'spriteRenderer')
  i4088.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4089[31], i4088.onKnifeIn)
  i4088.heartEffectScale = i4089[32]
  i4088.breakHeartEffectScale = i4089[33]
  i4088.blinkEffectScale = i4089[34]
  i4088.mergeEffectScale = i4089[35]
  i4088.playMoveToTargetFinishSound = !!i4089[36]
  i4088.moveToTargetFinishFxType = i4089[37]
  i4088.fxSpawnZPos = i4089[38]
  request.r(i4089[39], i4089[40], 0, i4088, 'tf')
  return i4088
}

Deserializers["Sink"] = function (request, data, root) {
  var i4090 = root || request.c( 'Sink' )
  var i4091 = data
  i4090.isClose = !!i4091[0]
  i4090.isWaterDrop = !!i4091[1]
  i4090.isWaterIn = !!i4091[2]
  request.r(i4091[3], i4091[4], 0, i4090, 'waterSplashPos')
  request.r(i4091[5], i4091[6], 0, i4090, 'faucetAnimator')
  request.r(i4091[7], i4091[8], 0, i4090, 'basinAnimator')
  request.r(i4091[9], i4091[10], 0, i4090, 'waterDrop')
  request.r(i4091[11], i4091[12], 0, i4090, 'waterIn')
  request.r(i4091[13], i4091[14], 0, i4090, 'basinWaterRenderer')
  i4090.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i4091[15], i4091[16], i4091[17], i4091[18])
  i4090.fullWaterRect = UnityEngine.Rect.MinMaxRect(i4091[19], i4091[20], i4091[21], i4091[22])
  i4090.waterRiseDuration = i4091[23]
  i4090.waterFallDuration = i4091[24]
  i4090.waterRiseEase = i4091[25]
  i4090.waterFallEase = i4091[26]
  i4090.drawWaterRects = !!i4091[27]
  i4090.emptyRectColor = new pc.Color(i4091[28], i4091[29], i4091[30], i4091[31])
  i4090.fullRectColor = new pc.Color(i4091[32], i4091[33], i4091[34], i4091[35])
  request.r(i4091[36], i4091[37], 0, i4090, 'waterDropTransform')
  i4090.emptyWaterDropPoint = new pc.Vec3( i4091[38], i4091[39], i4091[40] )
  i4090.fullWaterDropPoint = new pc.Vec3( i4091[41], i4091[42], i4091[43] )
  i4090.drawWaterDropPoints = !!i4091[44]
  i4090.waterDropPointRadius = i4091[45]
  i4090.emptyWaterDropPointColor = new pc.Color(i4091[46], i4091[47], i4091[48], i4091[49])
  i4090.fullWaterDropPointColor = new pc.Color(i4091[50], i4091[51], i4091[52], i4091[53])
  var i4093 = i4091[54]
  var i4092 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i4093.length; i += 2) {
  request.r(i4093[i + 0], i4093[i + 1], 1, i4092, '')
  }
  i4090.inWaterItems = i4092
  i4090.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i4091[55], i4090.onWaterIn)
  i4090.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i4091[56], i4090.onNoWaterIn)
  i4090.isDone = !!i4091[57]
  i4090.onProcess = !!i4091[58]
  i4090.requireMatchingTargetTypeForHandTut = !!i4091[59]
  request.r(i4091[60], i4091[61], 0, i4090, 'itemDraggable')
  request.r(i4091[62], i4091[63], 0, i4090, 'itemClickable')
  request.r(i4091[64], i4091[65], 0, i4090, 'itemStirring')
  request.r(i4091[66], i4091[67], 0, i4090, 'itemKnifeSpriteMaskCutter')
  request.r(i4091[68], i4091[69], 0, i4090, 'itemSpriteMaskPainter')
  request.r(i4091[70], i4091[71], 0, i4090, 'itemDragSpriteMaskPainter')
  request.r(i4091[72], i4091[73], 0, i4090, 'itemMoveToTarget')
  request.r(i4091[74], i4091[75], 0, i4090, 'animator')
  i4090.itemType = i4091[76]
  request.r(i4091[77], i4091[78], 0, i4090, 'spriteRenderer')
  i4090.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4091[79], i4090.onKnifeIn)
  i4090.heartEffectScale = i4091[80]
  i4090.breakHeartEffectScale = i4091[81]
  i4090.blinkEffectScale = i4091[82]
  i4090.mergeEffectScale = i4091[83]
  i4090.playMoveToTargetFinishSound = !!i4091[84]
  i4090.moveToTargetFinishFxType = i4091[85]
  i4090.fxSpawnZPos = i4091[86]
  request.r(i4091[87], i4091[88], 0, i4090, 'tf')
  i4090.waterState = i4091[89]
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4095 = data
  i4094.center = new pc.Vec3( i4095[0], i4095[1], i4095[2] )
  i4094.size = new pc.Vec3( i4095[3], i4095[4], i4095[5] )
  i4094.enabled = !!i4095[6]
  i4094.isTrigger = !!i4095[7]
  request.r(i4095[8], i4095[9], 0, i4094, 'material')
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i4097 = data
  i4096.frontSortingLayerID = i4097[0]
  i4096.frontSortingOrder = i4097[1]
  i4096.backSortingLayerID = i4097[2]
  i4096.backSortingOrder = i4097[3]
  i4096.alphaCutoff = i4097[4]
  request.r(i4097[5], i4097[6], 0, i4096, 'sprite')
  i4096.tileMode = i4097[7]
  i4096.isCustomRangeActive = !!i4097[8]
  i4096.spriteSortPoint = i4097[9]
  i4096.enabled = !!i4097[10]
  request.r(i4097[11], i4097[12], 0, i4096, 'sharedMaterial')
  var i4099 = i4097[13]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 2) {
  request.r(i4099[i + 0], i4099[i + 1], 2, i4098, '')
  }
  i4096.sharedMaterials = i4098
  i4096.receiveShadows = !!i4097[14]
  i4096.shadowCastingMode = i4097[15]
  i4096.sortingLayerID = i4097[16]
  i4096.sortingOrder = i4097[17]
  i4096.lightmapIndex = i4097[18]
  i4096.lightmapSceneIndex = i4097[19]
  i4096.lightmapScaleOffset = new pc.Vec4( i4097[20], i4097[21], i4097[22], i4097[23] )
  i4096.lightProbeUsage = i4097[24]
  i4096.reflectionProbeUsage = i4097[25]
  return i4096
}

Deserializers["Item"] = function (request, data, root) {
  var i4100 = root || request.c( 'Item' )
  var i4101 = data
  i4100.isDone = !!i4101[0]
  i4100.onProcess = !!i4101[1]
  i4100.requireMatchingTargetTypeForHandTut = !!i4101[2]
  request.r(i4101[3], i4101[4], 0, i4100, 'itemDraggable')
  request.r(i4101[5], i4101[6], 0, i4100, 'itemClickable')
  request.r(i4101[7], i4101[8], 0, i4100, 'itemStirring')
  request.r(i4101[9], i4101[10], 0, i4100, 'itemKnifeSpriteMaskCutter')
  request.r(i4101[11], i4101[12], 0, i4100, 'itemSpriteMaskPainter')
  request.r(i4101[13], i4101[14], 0, i4100, 'itemDragSpriteMaskPainter')
  request.r(i4101[15], i4101[16], 0, i4100, 'itemMoveToTarget')
  request.r(i4101[17], i4101[18], 0, i4100, 'animator')
  i4100.itemType = i4101[19]
  request.r(i4101[20], i4101[21], 0, i4100, 'spriteRenderer')
  i4100.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4101[22], i4100.onKnifeIn)
  i4100.heartEffectScale = i4101[23]
  i4100.breakHeartEffectScale = i4101[24]
  i4100.blinkEffectScale = i4101[25]
  i4100.mergeEffectScale = i4101[26]
  i4100.playMoveToTargetFinishSound = !!i4101[27]
  i4100.moveToTargetFinishFxType = i4101[28]
  i4100.fxSpawnZPos = i4101[29]
  request.r(i4101[30], i4101[31], 0, i4100, 'tf')
  return i4100
}

Deserializers["PaperBox"] = function (request, data, root) {
  var i4102 = root || request.c( 'PaperBox' )
  var i4103 = data
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i4105 = data
  i4104.center = new pc.Vec3( i4105[0], i4105[1], i4105[2] )
  i4104.radius = i4105[3]
  i4104.height = i4105[4]
  i4104.direction = i4105[5]
  i4104.enabled = !!i4105[6]
  i4104.isTrigger = !!i4105[7]
  request.r(i4105[8], i4105[9], 0, i4104, 'material')
  return i4104
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i4106 = root || request.c( 'ItemClickable' )
  var i4107 = data
  i4106.requiredClicks = i4107[0]
  i4106.infiniteClick = !!i4107[1]
  i4106.canClick = !!i4107[2]
  i4106.disableAfterClick = !!i4107[3]
  i4106.onClick = request.d('UnityEngine.Events.UnityEvent', i4107[4], i4106.onClick)
  var i4109 = i4107[5]
  var i4108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.add(request.d('UnityEngine.Events.UnityEvent', i4109[i + 0]));
  }
  i4106.sequentialOnClicks = i4108
  i4106.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i4107[6], i4106.onClickComplete)
  return i4106
}

Deserializers["TrashCan"] = function (request, data, root) {
  var i4112 = root || request.c( 'TrashCan' )
  var i4113 = data
  i4112.isOpen = !!i4113[0]
  i4112.isDone = !!i4113[1]
  i4112.onProcess = !!i4113[2]
  i4112.requireMatchingTargetTypeForHandTut = !!i4113[3]
  request.r(i4113[4], i4113[5], 0, i4112, 'itemDraggable')
  request.r(i4113[6], i4113[7], 0, i4112, 'itemClickable')
  request.r(i4113[8], i4113[9], 0, i4112, 'itemStirring')
  request.r(i4113[10], i4113[11], 0, i4112, 'itemKnifeSpriteMaskCutter')
  request.r(i4113[12], i4113[13], 0, i4112, 'itemSpriteMaskPainter')
  request.r(i4113[14], i4113[15], 0, i4112, 'itemDragSpriteMaskPainter')
  request.r(i4113[16], i4113[17], 0, i4112, 'itemMoveToTarget')
  request.r(i4113[18], i4113[19], 0, i4112, 'animator')
  i4112.itemType = i4113[20]
  request.r(i4113[21], i4113[22], 0, i4112, 'spriteRenderer')
  i4112.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4113[23], i4112.onKnifeIn)
  i4112.heartEffectScale = i4113[24]
  i4112.breakHeartEffectScale = i4113[25]
  i4112.blinkEffectScale = i4113[26]
  i4112.mergeEffectScale = i4113[27]
  i4112.playMoveToTargetFinishSound = !!i4113[28]
  i4112.moveToTargetFinishFxType = i4113[29]
  i4112.fxSpawnZPos = i4113[30]
  request.r(i4113[31], i4113[32], 0, i4112, 'tf')
  return i4112
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i4114 = root || request.c( 'CuttingBoard' )
  var i4115 = data
  i4114.punchScale = new pc.Vec3( i4115[0], i4115[1], i4115[2] )
  i4114.punchDuration = i4115[3]
  i4114.isDone = !!i4115[4]
  i4114.onProcess = !!i4115[5]
  i4114.requireMatchingTargetTypeForHandTut = !!i4115[6]
  request.r(i4115[7], i4115[8], 0, i4114, 'itemDraggable')
  request.r(i4115[9], i4115[10], 0, i4114, 'itemClickable')
  request.r(i4115[11], i4115[12], 0, i4114, 'itemStirring')
  request.r(i4115[13], i4115[14], 0, i4114, 'itemKnifeSpriteMaskCutter')
  request.r(i4115[15], i4115[16], 0, i4114, 'itemSpriteMaskPainter')
  request.r(i4115[17], i4115[18], 0, i4114, 'itemDragSpriteMaskPainter')
  request.r(i4115[19], i4115[20], 0, i4114, 'itemMoveToTarget')
  request.r(i4115[21], i4115[22], 0, i4114, 'animator')
  i4114.itemType = i4115[23]
  request.r(i4115[24], i4115[25], 0, i4114, 'spriteRenderer')
  i4114.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4115[26], i4114.onKnifeIn)
  i4114.heartEffectScale = i4115[27]
  i4114.breakHeartEffectScale = i4115[28]
  i4114.blinkEffectScale = i4115[29]
  i4114.mergeEffectScale = i4115[30]
  i4114.playMoveToTargetFinishSound = !!i4115[31]
  i4114.moveToTargetFinishFxType = i4115[32]
  i4114.fxSpawnZPos = i4115[33]
  request.r(i4115[34], i4115[35], 0, i4114, 'tf')
  return i4114
}

Deserializers["Pan"] = function (request, data, root) {
  var i4116 = root || request.c( 'Pan' )
  var i4117 = data
  request.r(i4117[0], i4117[1], 0, i4116, 'fryingFX')
  i4116.isOilIn = !!i4117[2]
  i4116.isTurnOnStove = !!i4117[3]
  i4116.stoveShakeDelay = i4117[4]
  i4116.stoveShakeDuration = i4117[5]
  i4116.stoveShakeStrength = i4117[6]
  i4116.stoveShakeVibrato = i4117[7]
  i4116.isDone = !!i4117[8]
  i4116.onProcess = !!i4117[9]
  i4116.requireMatchingTargetTypeForHandTut = !!i4117[10]
  request.r(i4117[11], i4117[12], 0, i4116, 'itemDraggable')
  request.r(i4117[13], i4117[14], 0, i4116, 'itemClickable')
  request.r(i4117[15], i4117[16], 0, i4116, 'itemStirring')
  request.r(i4117[17], i4117[18], 0, i4116, 'itemKnifeSpriteMaskCutter')
  request.r(i4117[19], i4117[20], 0, i4116, 'itemSpriteMaskPainter')
  request.r(i4117[21], i4117[22], 0, i4116, 'itemDragSpriteMaskPainter')
  request.r(i4117[23], i4117[24], 0, i4116, 'itemMoveToTarget')
  request.r(i4117[25], i4117[26], 0, i4116, 'animator')
  i4116.itemType = i4117[27]
  request.r(i4117[28], i4117[29], 0, i4116, 'spriteRenderer')
  i4116.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4117[30], i4116.onKnifeIn)
  i4116.heartEffectScale = i4117[31]
  i4116.breakHeartEffectScale = i4117[32]
  i4116.blinkEffectScale = i4117[33]
  i4116.mergeEffectScale = i4117[34]
  i4116.playMoveToTargetFinishSound = !!i4117[35]
  i4116.moveToTargetFinishFxType = i4117[36]
  i4116.fxSpawnZPos = i4117[37]
  request.r(i4117[38], i4117[39], 0, i4116, 'tf')
  return i4116
}

Deserializers["FishOnPan"] = function (request, data, root) {
  var i4118 = root || request.c( 'FishOnPan' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, 'clockTimerPrefab')
  request.r(i4119[2], i4119[3], 0, i4118, 'clockSpawnPoint')
  i4118.cookDuration = i4119[4]
  i4118.readyZ = i4119[5]
  i4118.isDone = !!i4119[6]
  i4118.onProcess = !!i4119[7]
  i4118.requireMatchingTargetTypeForHandTut = !!i4119[8]
  request.r(i4119[9], i4119[10], 0, i4118, 'itemDraggable')
  request.r(i4119[11], i4119[12], 0, i4118, 'itemClickable')
  request.r(i4119[13], i4119[14], 0, i4118, 'itemStirring')
  request.r(i4119[15], i4119[16], 0, i4118, 'itemKnifeSpriteMaskCutter')
  request.r(i4119[17], i4119[18], 0, i4118, 'itemSpriteMaskPainter')
  request.r(i4119[19], i4119[20], 0, i4118, 'itemDragSpriteMaskPainter')
  request.r(i4119[21], i4119[22], 0, i4118, 'itemMoveToTarget')
  request.r(i4119[23], i4119[24], 0, i4118, 'animator')
  i4118.itemType = i4119[25]
  request.r(i4119[26], i4119[27], 0, i4118, 'spriteRenderer')
  i4118.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4119[28], i4118.onKnifeIn)
  i4118.heartEffectScale = i4119[29]
  i4118.breakHeartEffectScale = i4119[30]
  i4118.blinkEffectScale = i4119[31]
  i4118.mergeEffectScale = i4119[32]
  i4118.playMoveToTargetFinishSound = !!i4119[33]
  i4118.moveToTargetFinishFxType = i4119[34]
  i4118.fxSpawnZPos = i4119[35]
  request.r(i4119[36], i4119[37], 0, i4118, 'tf')
  return i4118
}

Deserializers["Knife"] = function (request, data, root) {
  var i4120 = root || request.c( 'Knife' )
  var i4121 = data
  request.r(i4121[0], i4121[1], 0, i4120, 'knifeIdle')
  request.r(i4121[2], i4121[3], 0, i4120, 'knifeOnDrag')
  i4120.knifeOnDragRotationOffset = new pc.Vec3( i4121[4], i4121[5], i4121[6] )
  i4120.knifeOnDragRotateDuration = i4121[7]
  i4120.knifeOnDragRotateEase = i4121[8]
  i4120.isDone = !!i4121[9]
  i4120.onProcess = !!i4121[10]
  i4120.requireMatchingTargetTypeForHandTut = !!i4121[11]
  request.r(i4121[12], i4121[13], 0, i4120, 'itemDraggable')
  request.r(i4121[14], i4121[15], 0, i4120, 'itemClickable')
  request.r(i4121[16], i4121[17], 0, i4120, 'itemStirring')
  request.r(i4121[18], i4121[19], 0, i4120, 'itemKnifeSpriteMaskCutter')
  request.r(i4121[20], i4121[21], 0, i4120, 'itemSpriteMaskPainter')
  request.r(i4121[22], i4121[23], 0, i4120, 'itemDragSpriteMaskPainter')
  request.r(i4121[24], i4121[25], 0, i4120, 'itemMoveToTarget')
  request.r(i4121[26], i4121[27], 0, i4120, 'animator')
  i4120.itemType = i4121[28]
  request.r(i4121[29], i4121[30], 0, i4120, 'spriteRenderer')
  i4120.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4121[31], i4120.onKnifeIn)
  i4120.heartEffectScale = i4121[32]
  i4120.breakHeartEffectScale = i4121[33]
  i4120.blinkEffectScale = i4121[34]
  i4120.mergeEffectScale = i4121[35]
  i4120.playMoveToTargetFinishSound = !!i4121[36]
  i4120.moveToTargetFinishFxType = i4121[37]
  i4120.fxSpawnZPos = i4121[38]
  request.r(i4121[39], i4121[40], 0, i4120, 'tf')
  return i4120
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i4122 = root || request.c( 'ItemDragChildRotator' )
  var i4123 = data
  request.r(i4123[0], i4123[1], 0, i4122, 'rotateTarget')
  i4122.dragEulerAngles = new pc.Vec3( i4123[2], i4123[3], i4123[4] )
  i4122.useLocalRotation = !!i4123[5]
  i4122.rotateRelative = !!i4123[6]
  i4122.rotateDuration = i4123[7]
  i4122.rotateEase = i4123[8]
  i4122.rotateMode = i4123[9]
  return i4122
}

Deserializers["Spartula"] = function (request, data, root) {
  var i4124 = root || request.c( 'Spartula' )
  var i4125 = data
  request.r(i4125[0], i4125[1], 0, i4124, 'carriedItem')
  request.r(i4125[2], i4125[3], 0, i4124, 'fishPoint')
  i4124.catchDuration = i4125[4]
  i4124.raycastDistance = i4125[5]
  i4124.itemLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4125[6] )
  i4124.isDone = !!i4125[7]
  i4124.onProcess = !!i4125[8]
  i4124.requireMatchingTargetTypeForHandTut = !!i4125[9]
  request.r(i4125[10], i4125[11], 0, i4124, 'itemDraggable')
  request.r(i4125[12], i4125[13], 0, i4124, 'itemClickable')
  request.r(i4125[14], i4125[15], 0, i4124, 'itemStirring')
  request.r(i4125[16], i4125[17], 0, i4124, 'itemKnifeSpriteMaskCutter')
  request.r(i4125[18], i4125[19], 0, i4124, 'itemSpriteMaskPainter')
  request.r(i4125[20], i4125[21], 0, i4124, 'itemDragSpriteMaskPainter')
  request.r(i4125[22], i4125[23], 0, i4124, 'itemMoveToTarget')
  request.r(i4125[24], i4125[25], 0, i4124, 'animator')
  i4124.itemType = i4125[26]
  request.r(i4125[27], i4125[28], 0, i4124, 'spriteRenderer')
  i4124.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4125[29], i4124.onKnifeIn)
  i4124.heartEffectScale = i4125[30]
  i4124.breakHeartEffectScale = i4125[31]
  i4124.blinkEffectScale = i4125[32]
  i4124.mergeEffectScale = i4125[33]
  i4124.playMoveToTargetFinishSound = !!i4125[34]
  i4124.moveToTargetFinishFxType = i4125[35]
  i4124.fxSpawnZPos = i4125[36]
  request.r(i4125[37], i4125[38], 0, i4124, 'tf')
  return i4124
}

Deserializers["Fish"] = function (request, data, root) {
  var i4126 = root || request.c( 'Fish' )
  var i4127 = data
  request.r(i4127[0], i4127[1], 0, i4126, 'lastPlate')
  request.r(i4127[2], i4127[3], 0, i4126, 'fishIntestine')
  request.r(i4127[4], i4127[5], 0, i4126, 'fishBranchial')
  request.r(i4127[6], i4127[7], 0, i4126, 'panPos')
  request.r(i4127[8], i4127[9], 0, i4126, 'fishOnPan')
  request.r(i4127[10], i4127[11], 0, i4126, 'oilTop')
  request.r(i4127[12], i4127[13], 0, i4126, 'salt')
  request.r(i4127[14], i4127[15], 0, i4126, 'waterTarget')
  request.r(i4127[16], i4127[17], 0, i4126, 'cuttingBoardTarget')
  request.r(i4127[18], i4127[19], 0, i4126, 'plateTarget')
  var i4129 = i4127[20]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 2) {
  request.r(i4129[i + 0], i4129[i + 1], 2, i4128, '')
  }
  i4126.childObject = i4128
  var i4131 = i4127[21]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 2) {
  request.r(i4131[i + 0], i4131[i + 1], 2, i4130, '')
  }
  i4126.trashObj = i4130
  request.r(i4127[22], i4127[23], 0, i4126, 'knife')
  request.r(i4127[24], i4127[25], 0, i4126, 'waterFx')
  i4126.scaleOnDragFromWater = !!i4127[26]
  i4126.dragFromWaterScale = new pc.Vec3( i4127[27], i4127[28], i4127[29] )
  i4126.dragFromWaterScaleDuration = i4127[30]
  request.r(i4127[31], i4127[32], 0, i4126, 'ply_TimerEvent')
  request.r(i4127[33], i4127[34], 0, i4126, 'ply_BobEffect')
  request.r(i4127[35], i4127[36], 0, i4126, 'collider1')
  request.r(i4127[37], i4127[38], 0, i4126, 'sink')
  i4126.isInWater = !!i4127[39]
  i4126.isOnCuttingBoard = !!i4127[40]
  i4126.isOnPlate = !!i4127[41]
  i4126.isClean = !!i4127[42]
  i4126.isCutDone = !!i4127[43]
  i4126.cuttingBoardColliderRadiusMultiplier = i4127[44]
  i4126.jumpToPlatePower = i4127[45]
  i4126.jumpToPlateDuration = i4127[46]
  i4126.jumpToPlateAfterCutDone = !!i4127[47]
  request.r(i4127[48], i4127[49], 0, i4126, 'plateFoodShadow')
  i4126.platePunchScale = new pc.Vec3( i4127[50], i4127[51], i4127[52] )
  i4126.platePunchDuration = i4127[53]
  i4126.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i4127[54], i4126.onMoveToCuttingBoardComplete)
  i4126.isDone = !!i4127[55]
  i4126.onProcess = !!i4127[56]
  i4126.requireMatchingTargetTypeForHandTut = !!i4127[57]
  request.r(i4127[58], i4127[59], 0, i4126, 'itemDraggable')
  request.r(i4127[60], i4127[61], 0, i4126, 'itemClickable')
  request.r(i4127[62], i4127[63], 0, i4126, 'itemStirring')
  request.r(i4127[64], i4127[65], 0, i4126, 'itemKnifeSpriteMaskCutter')
  request.r(i4127[66], i4127[67], 0, i4126, 'itemSpriteMaskPainter')
  request.r(i4127[68], i4127[69], 0, i4126, 'itemDragSpriteMaskPainter')
  request.r(i4127[70], i4127[71], 0, i4126, 'itemMoveToTarget')
  request.r(i4127[72], i4127[73], 0, i4126, 'animator')
  i4126.itemType = i4127[74]
  request.r(i4127[75], i4127[76], 0, i4126, 'spriteRenderer')
  i4126.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4127[77], i4126.onKnifeIn)
  i4126.heartEffectScale = i4127[78]
  i4126.breakHeartEffectScale = i4127[79]
  i4126.blinkEffectScale = i4127[80]
  i4126.mergeEffectScale = i4127[81]
  i4126.playMoveToTargetFinishSound = !!i4127[82]
  i4126.moveToTargetFinishFxType = i4127[83]
  i4126.fxSpawnZPos = i4127[84]
  request.r(i4127[85], i4127[86], 0, i4126, 'tf')
  return i4126
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i4132 = root || request.c( 'Ply_BobEffect' )
  var i4133 = data
  i4132.playOnEnable = !!i4133[0]
  i4132.useLocalMove = !!i4133[1]
  i4132.bobOffset = new pc.Vec3( i4133[2], i4133[3], i4133[4] )
  i4132.duration = i4133[5]
  i4132.ease = i4133[6]
  return i4132
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i4134 = root || request.c( 'Ply_TimerEvent' )
  var i4135 = data
  i4134.duration = i4135[0]
  i4134.playOnEnable = !!i4135[1]
  i4134.ignoreTimeScale = !!i4135[2]
  i4134.autoDisableOnComplete = !!i4135[3]
  i4134.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i4135[4], i4134.onTimerStart)
  i4134.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i4135[5], i4134.onTimerComplete)
  i4134.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i4135[6], i4134.onTimerStop)
  return i4134
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i4136 = root || request.c( 'InWaterItem' )
  var i4137 = data
  request.r(i4137[0], i4137[1], 0, i4136, 'waterTarget')
  request.r(i4137[2], i4137[3], 0, i4136, 'cuttingBoardTarget')
  request.r(i4137[4], i4137[5], 0, i4136, 'plateTarget')
  var i4139 = i4137[6]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 2) {
  request.r(i4139[i + 0], i4139[i + 1], 2, i4138, '')
  }
  i4136.childObject = i4138
  var i4141 = i4137[7]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 2) {
  request.r(i4141[i + 0], i4141[i + 1], 2, i4140, '')
  }
  i4136.trashObj = i4140
  request.r(i4137[8], i4137[9], 0, i4136, 'knife')
  request.r(i4137[10], i4137[11], 0, i4136, 'waterFx')
  i4136.scaleOnDragFromWater = !!i4137[12]
  i4136.dragFromWaterScale = new pc.Vec3( i4137[13], i4137[14], i4137[15] )
  i4136.dragFromWaterScaleDuration = i4137[16]
  request.r(i4137[17], i4137[18], 0, i4136, 'ply_TimerEvent')
  request.r(i4137[19], i4137[20], 0, i4136, 'ply_BobEffect')
  request.r(i4137[21], i4137[22], 0, i4136, 'collider1')
  request.r(i4137[23], i4137[24], 0, i4136, 'sink')
  i4136.isInWater = !!i4137[25]
  i4136.isOnCuttingBoard = !!i4137[26]
  i4136.isOnPlate = !!i4137[27]
  i4136.isClean = !!i4137[28]
  i4136.isCutDone = !!i4137[29]
  i4136.cuttingBoardColliderRadiusMultiplier = i4137[30]
  i4136.jumpToPlatePower = i4137[31]
  i4136.jumpToPlateDuration = i4137[32]
  i4136.jumpToPlateAfterCutDone = !!i4137[33]
  request.r(i4137[34], i4137[35], 0, i4136, 'plateFoodShadow')
  i4136.platePunchScale = new pc.Vec3( i4137[36], i4137[37], i4137[38] )
  i4136.platePunchDuration = i4137[39]
  i4136.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i4137[40], i4136.onMoveToCuttingBoardComplete)
  i4136.isDone = !!i4137[41]
  i4136.onProcess = !!i4137[42]
  i4136.requireMatchingTargetTypeForHandTut = !!i4137[43]
  request.r(i4137[44], i4137[45], 0, i4136, 'itemDraggable')
  request.r(i4137[46], i4137[47], 0, i4136, 'itemClickable')
  request.r(i4137[48], i4137[49], 0, i4136, 'itemStirring')
  request.r(i4137[50], i4137[51], 0, i4136, 'itemKnifeSpriteMaskCutter')
  request.r(i4137[52], i4137[53], 0, i4136, 'itemSpriteMaskPainter')
  request.r(i4137[54], i4137[55], 0, i4136, 'itemDragSpriteMaskPainter')
  request.r(i4137[56], i4137[57], 0, i4136, 'itemMoveToTarget')
  request.r(i4137[58], i4137[59], 0, i4136, 'animator')
  i4136.itemType = i4137[60]
  request.r(i4137[61], i4137[62], 0, i4136, 'spriteRenderer')
  i4136.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i4137[63], i4136.onKnifeIn)
  i4136.heartEffectScale = i4137[64]
  i4136.breakHeartEffectScale = i4137[65]
  i4136.blinkEffectScale = i4137[66]
  i4136.mergeEffectScale = i4137[67]
  i4136.playMoveToTargetFinishSound = !!i4137[68]
  i4136.moveToTargetFinishFxType = i4137[69]
  i4136.fxSpawnZPos = i4137[70]
  request.r(i4137[71], i4137[72], 0, i4136, 'tf')
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4143 = data
  i4142.ambientIntensity = i4143[0]
  i4142.reflectionIntensity = i4143[1]
  i4142.ambientMode = i4143[2]
  i4142.ambientLight = new pc.Color(i4143[3], i4143[4], i4143[5], i4143[6])
  i4142.ambientSkyColor = new pc.Color(i4143[7], i4143[8], i4143[9], i4143[10])
  i4142.ambientGroundColor = new pc.Color(i4143[11], i4143[12], i4143[13], i4143[14])
  i4142.ambientEquatorColor = new pc.Color(i4143[15], i4143[16], i4143[17], i4143[18])
  i4142.fogColor = new pc.Color(i4143[19], i4143[20], i4143[21], i4143[22])
  i4142.fogEndDistance = i4143[23]
  i4142.fogStartDistance = i4143[24]
  i4142.fogDensity = i4143[25]
  i4142.fog = !!i4143[26]
  request.r(i4143[27], i4143[28], 0, i4142, 'skybox')
  i4142.fogMode = i4143[29]
  var i4145 = i4143[30]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4145[i + 0]) );
  }
  i4142.lightmaps = i4144
  i4142.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4143[31], i4142.lightProbes)
  i4142.lightmapsMode = i4143[32]
  i4142.mixedBakeMode = i4143[33]
  i4142.environmentLightingMode = i4143[34]
  i4142.ambientProbe = new pc.SphericalHarmonicsL2(i4143[35])
  i4142.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4143[36])
  i4142.useReferenceAmbientProbe = !!i4143[37]
  request.r(i4143[38], i4143[39], 0, i4142, 'customReflection')
  request.r(i4143[40], i4143[41], 0, i4142, 'defaultReflection')
  i4142.defaultReflectionMode = i4143[42]
  i4142.defaultReflectionResolution = i4143[43]
  i4142.sunLightObjectId = i4143[44]
  i4142.pixelLightCount = i4143[45]
  i4142.defaultReflectionHDR = !!i4143[46]
  i4142.hasLightDataAsset = !!i4143[47]
  i4142.hasManualGenerate = !!i4143[48]
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4149 = data
  request.r(i4149[0], i4149[1], 0, i4148, 'lightmapColor')
  request.r(i4149[2], i4149[3], 0, i4148, 'lightmapDirection')
  request.r(i4149[4], i4149[5], 0, i4148, 'shadowMask')
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4150 = root || new UnityEngine.LightProbes()
  var i4151 = data
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4159 = data
  var i4161 = i4159[0]
  var i4160 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4161[i + 0]));
  }
  i4158.ShaderCompilationErrors = i4160
  i4158.name = i4159[1]
  i4158.guid = i4159[2]
  var i4163 = i4159[3]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( i4163[i + 0] );
  }
  i4158.shaderDefinedKeywords = i4162
  var i4165 = i4159[4]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4165[i + 0]) );
  }
  i4158.passes = i4164
  var i4167 = i4159[5]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4167[i + 0]) );
  }
  i4158.usePasses = i4166
  var i4169 = i4159[6]
  var i4168 = []
  for(var i = 0; i < i4169.length; i += 1) {
    i4168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4169[i + 0]) );
  }
  i4158.defaultParameterValues = i4168
  request.r(i4159[7], i4159[8], 0, i4158, 'unityFallbackShader')
  i4158.readDepth = !!i4159[9]
  i4158.hasDepthOnlyPass = !!i4159[10]
  i4158.isCreatedByShaderGraph = !!i4159[11]
  i4158.disableBatching = !!i4159[12]
  i4158.compiled = !!i4159[13]
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4173 = data
  i4172.shaderName = i4173[0]
  i4172.errorMessage = i4173[1]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4178 = root || new pc.UnityShaderPass()
  var i4179 = data
  i4178.id = i4179[0]
  i4178.subShaderIndex = i4179[1]
  i4178.name = i4179[2]
  i4178.passType = i4179[3]
  i4178.grabPassTextureName = i4179[4]
  i4178.usePass = !!i4179[5]
  i4178.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[6], i4178.zTest)
  i4178.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[7], i4178.zWrite)
  i4178.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[8], i4178.culling)
  i4178.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4179[9], i4178.blending)
  i4178.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4179[10], i4178.alphaBlending)
  i4178.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[11], i4178.colorWriteMask)
  i4178.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[12], i4178.offsetUnits)
  i4178.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[13], i4178.offsetFactor)
  i4178.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[14], i4178.stencilRef)
  i4178.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[15], i4178.stencilReadMask)
  i4178.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4179[16], i4178.stencilWriteMask)
  i4178.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4179[17], i4178.stencilOp)
  i4178.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4179[18], i4178.stencilOpFront)
  i4178.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4179[19], i4178.stencilOpBack)
  var i4181 = i4179[20]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4181[i + 0]) );
  }
  i4178.tags = i4180
  var i4183 = i4179[21]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( i4183[i + 0] );
  }
  i4178.passDefinedKeywords = i4182
  var i4185 = i4179[22]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4185[i + 0]) );
  }
  i4178.passDefinedKeywordGroups = i4184
  var i4187 = i4179[23]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4187[i + 0]) );
  }
  i4178.variants = i4186
  var i4189 = i4179[24]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4189[i + 0]) );
  }
  i4178.excludedVariants = i4188
  i4178.hasDepthReader = !!i4179[25]
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4191 = data
  i4190.val = i4191[0]
  i4190.name = i4191[1]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4193 = data
  i4192.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4193[0], i4192.src)
  i4192.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4193[1], i4192.dst)
  i4192.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4193[2], i4192.op)
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4195 = data
  i4194.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4195[0], i4194.pass)
  i4194.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4195[1], i4194.fail)
  i4194.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4195[2], i4194.zFail)
  i4194.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4195[3], i4194.comp)
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4199 = data
  i4198.name = i4199[0]
  i4198.value = i4199[1]
  return i4198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4203 = data
  var i4205 = i4203[0]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( i4205[i + 0] );
  }
  i4202.keywords = i4204
  i4202.hasDiscard = !!i4203[1]
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4209 = data
  i4208.passId = i4209[0]
  i4208.subShaderIndex = i4209[1]
  var i4211 = i4209[2]
  var i4210 = []
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.push( i4211[i + 0] );
  }
  i4208.keywords = i4210
  i4208.vertexProgram = i4209[3]
  i4208.fragmentProgram = i4209[4]
  i4208.exportedForWebGl2 = !!i4209[5]
  i4208.readDepth = !!i4209[6]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4215 = data
  request.r(i4215[0], i4215[1], 0, i4214, 'shader')
  i4214.pass = i4215[2]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4219 = data
  i4218.name = i4219[0]
  i4218.type = i4219[1]
  i4218.value = new pc.Vec4( i4219[2], i4219[3], i4219[4], i4219[5] )
  i4218.textureValue = i4219[6]
  i4218.shaderPropertyFlag = i4219[7]
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4221 = data
  i4220.name = i4221[0]
  request.r(i4221[1], i4221[2], 0, i4220, 'texture')
  i4220.aabb = i4221[3]
  i4220.vertices = i4221[4]
  i4220.triangles = i4221[5]
  i4220.textureRect = UnityEngine.Rect.MinMaxRect(i4221[6], i4221[7], i4221[8], i4221[9])
  i4220.packedRect = UnityEngine.Rect.MinMaxRect(i4221[10], i4221[11], i4221[12], i4221[13])
  i4220.border = new pc.Vec4( i4221[14], i4221[15], i4221[16], i4221[17] )
  i4220.transparency = i4221[18]
  i4220.bounds = i4221[19]
  i4220.pixelsPerUnit = i4221[20]
  i4220.textureWidth = i4221[21]
  i4220.textureHeight = i4221[22]
  i4220.nativeSize = new pc.Vec2( i4221[23], i4221[24] )
  i4220.pivot = new pc.Vec2( i4221[25], i4221[26] )
  i4220.textureRectOffset = new pc.Vec2( i4221[27], i4221[28] )
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4223 = data
  i4222.name = i4223[0]
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4225 = data
  i4224.name = i4225[0]
  i4224.wrapMode = i4225[1]
  i4224.isLooping = !!i4225[2]
  i4224.length = i4225[3]
  var i4227 = i4225[4]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4227[i + 0]) );
  }
  i4224.curves = i4226
  var i4229 = i4225[5]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4229[i + 0]) );
  }
  i4224.events = i4228
  i4224.halfPrecision = !!i4225[6]
  i4224._frameRate = i4225[7]
  i4224.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4225[8], i4224.localBounds)
  i4224.hasMuscleCurves = !!i4225[9]
  var i4231 = i4225[10]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.push( i4231[i + 0] );
  }
  i4224.clipMuscleConstant = i4230
  i4224.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4225[11], i4224.clipBindingConstant)
  return i4224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4235 = data
  i4234.path = i4235[0]
  i4234.hash = i4235[1]
  i4234.componentType = i4235[2]
  i4234.property = i4235[3]
  i4234.keys = i4235[4]
  var i4237 = i4235[5]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4237[i + 0]) );
  }
  i4234.objectReferenceKeys = i4236
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4241 = data
  i4240.time = i4241[0]
  request.r(i4241[1], i4241[2], 0, i4240, 'value')
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4245 = data
  i4244.functionName = i4245[0]
  i4244.floatParameter = i4245[1]
  i4244.intParameter = i4245[2]
  i4244.stringParameter = i4245[3]
  request.r(i4245[4], i4245[5], 0, i4244, 'objectReferenceParameter')
  i4244.time = i4245[6]
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4247 = data
  i4246.center = new pc.Vec3( i4247[0], i4247[1], i4247[2] )
  i4246.extends = new pc.Vec3( i4247[3], i4247[4], i4247[5] )
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4251 = data
  var i4253 = i4251[0]
  var i4252 = []
  for(var i = 0; i < i4253.length; i += 1) {
    i4252.push( i4253[i + 0] );
  }
  i4250.genericBindings = i4252
  var i4255 = i4251[1]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( i4255[i + 0] );
  }
  i4250.pptrCurveMapping = i4254
  return i4250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4257 = data
  i4256.name = i4257[0]
  var i4259 = i4257[1]
  var i4258 = []
  for(var i = 0; i < i4259.length; i += 1) {
    i4258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4259[i + 0]) );
  }
  i4256.layers = i4258
  var i4261 = i4257[2]
  var i4260 = []
  for(var i = 0; i < i4261.length; i += 1) {
    i4260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4261[i + 0]) );
  }
  i4256.parameters = i4260
  i4256.animationClips = i4257[3]
  i4256.avatarUnsupported = i4257[4]
  return i4256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4265 = data
  i4264.name = i4265[0]
  i4264.defaultWeight = i4265[1]
  i4264.blendingMode = i4265[2]
  i4264.avatarMask = i4265[3]
  i4264.syncedLayerIndex = i4265[4]
  i4264.syncedLayerAffectsTiming = !!i4265[5]
  i4264.syncedLayers = i4265[6]
  i4264.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4265[7], i4264.stateMachine)
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4267 = data
  i4266.id = i4267[0]
  i4266.name = i4267[1]
  i4266.path = i4267[2]
  var i4269 = i4267[3]
  var i4268 = []
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4269[i + 0]) );
  }
  i4266.states = i4268
  var i4271 = i4267[4]
  var i4270 = []
  for(var i = 0; i < i4271.length; i += 1) {
    i4270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4271[i + 0]) );
  }
  i4266.machines = i4270
  var i4273 = i4267[5]
  var i4272 = []
  for(var i = 0; i < i4273.length; i += 1) {
    i4272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4273[i + 0]) );
  }
  i4266.entryStateTransitions = i4272
  var i4275 = i4267[6]
  var i4274 = []
  for(var i = 0; i < i4275.length; i += 1) {
    i4274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4275[i + 0]) );
  }
  i4266.exitStateTransitions = i4274
  var i4277 = i4267[7]
  var i4276 = []
  for(var i = 0; i < i4277.length; i += 1) {
    i4276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4277[i + 0]) );
  }
  i4266.anyStateTransitions = i4276
  i4266.defaultStateId = i4267[8]
  return i4266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4281 = data
  i4280.id = i4281[0]
  i4280.name = i4281[1]
  i4280.cycleOffset = i4281[2]
  i4280.cycleOffsetParameter = i4281[3]
  i4280.cycleOffsetParameterActive = !!i4281[4]
  i4280.mirror = !!i4281[5]
  i4280.mirrorParameter = i4281[6]
  i4280.mirrorParameterActive = !!i4281[7]
  i4280.motionId = i4281[8]
  i4280.nameHash = i4281[9]
  i4280.fullPathHash = i4281[10]
  i4280.speed = i4281[11]
  i4280.speedParameter = i4281[12]
  i4280.speedParameterActive = !!i4281[13]
  i4280.tag = i4281[14]
  i4280.tagHash = i4281[15]
  i4280.writeDefaultValues = !!i4281[16]
  var i4283 = i4281[17]
  var i4282 = []
  for(var i = 0; i < i4283.length; i += 2) {
  request.r(i4283[i + 0], i4283[i + 1], 2, i4282, '')
  }
  i4280.behaviours = i4282
  var i4285 = i4281[18]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4285[i + 0]) );
  }
  i4280.transitions = i4284
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4291 = data
  i4290.fullPath = i4291[0]
  i4290.canTransitionToSelf = !!i4291[1]
  i4290.duration = i4291[2]
  i4290.exitTime = i4291[3]
  i4290.hasExitTime = !!i4291[4]
  i4290.hasFixedDuration = !!i4291[5]
  i4290.interruptionSource = i4291[6]
  i4290.offset = i4291[7]
  i4290.orderedInterruption = !!i4291[8]
  i4290.destinationStateId = i4291[9]
  i4290.isExit = !!i4291[10]
  i4290.mute = !!i4291[11]
  i4290.solo = !!i4291[12]
  var i4293 = i4291[13]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4293[i + 0]) );
  }
  i4290.conditions = i4292
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4299 = data
  i4298.destinationStateId = i4299[0]
  i4298.isExit = !!i4299[1]
  i4298.mute = !!i4299[2]
  i4298.solo = !!i4299[3]
  var i4301 = i4299[4]
  var i4300 = []
  for(var i = 0; i < i4301.length; i += 1) {
    i4300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4301[i + 0]) );
  }
  i4298.conditions = i4300
  return i4298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4305 = data
  i4304.defaultBool = !!i4305[0]
  i4304.defaultFloat = i4305[1]
  i4304.defaultInt = i4305[2]
  i4304.name = i4305[3]
  i4304.nameHash = i4305[4]
  i4304.type = i4305[5]
  return i4304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4309 = data
  i4308.mode = i4309[0]
  i4308.parameter = i4309[1]
  i4308.threshold = i4309[2]
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4311 = data
  i4310.name = i4311[0]
  i4310.bytes64 = i4311[1]
  i4310.data = i4311[2]
  return i4310
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4312 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4313 = data
  i4312.normalStyle = i4313[0]
  i4312.normalSpacingOffset = i4313[1]
  i4312.boldStyle = i4313[2]
  i4312.boldSpacing = i4313[3]
  i4312.italicStyle = i4313[4]
  i4312.tabSize = i4313[5]
  request.r(i4313[6], i4313[7], 0, i4312, 'atlas')
  i4312.m_SourceFontFileGUID = i4313[8]
  i4312.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4313[9], i4312.m_CreationSettings)
  request.r(i4313[10], i4313[11], 0, i4312, 'm_SourceFontFile')
  i4312.m_SourceFontFilePath = i4313[12]
  i4312.m_AtlasPopulationMode = i4313[13]
  i4312.InternalDynamicOS = !!i4313[14]
  var i4315 = i4313[15]
  var i4314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4315.length; i += 1) {
    i4314.add(request.d('UnityEngine.TextCore.Glyph', i4315[i + 0]));
  }
  i4312.m_GlyphTable = i4314
  var i4317 = i4313[16]
  var i4316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4317.length; i += 1) {
    i4316.add(request.d('TMPro.TMP_Character', i4317[i + 0]));
  }
  i4312.m_CharacterTable = i4316
  var i4319 = i4313[17]
  var i4318 = []
  for(var i = 0; i < i4319.length; i += 2) {
  request.r(i4319[i + 0], i4319[i + 1], 2, i4318, '')
  }
  i4312.m_AtlasTextures = i4318
  i4312.m_AtlasTextureIndex = i4313[18]
  i4312.m_IsMultiAtlasTexturesEnabled = !!i4313[19]
  i4312.m_GetFontFeatures = !!i4313[20]
  i4312.m_ClearDynamicDataOnBuild = !!i4313[21]
  i4312.m_AtlasWidth = i4313[22]
  i4312.m_AtlasHeight = i4313[23]
  i4312.m_AtlasPadding = i4313[24]
  i4312.m_AtlasRenderMode = i4313[25]
  var i4321 = i4313[26]
  var i4320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.add(request.d('UnityEngine.TextCore.GlyphRect', i4321[i + 0]));
  }
  i4312.m_UsedGlyphRects = i4320
  var i4323 = i4313[27]
  var i4322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.add(request.d('UnityEngine.TextCore.GlyphRect', i4323[i + 0]));
  }
  i4312.m_FreeGlyphRects = i4322
  i4312.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4313[28], i4312.m_FontFeatureTable)
  i4312.m_ShouldReimportFontFeatures = !!i4313[29]
  var i4325 = i4313[30]
  var i4324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4325.length; i += 2) {
  request.r(i4325[i + 0], i4325[i + 1], 1, i4324, '')
  }
  i4312.m_FallbackFontAssetTable = i4324
  var i4327 = i4313[31]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 1) {
    i4326.push( request.d('TMPro.TMP_FontWeightPair', i4327[i + 0]) );
  }
  i4312.m_FontWeightTable = i4326
  var i4329 = i4313[32]
  var i4328 = []
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.push( request.d('TMPro.TMP_FontWeightPair', i4329[i + 0]) );
  }
  i4312.fontWeights = i4328
  i4312.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4313[33], i4312.m_fontInfo)
  var i4331 = i4313[34]
  var i4330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.add(request.d('TMPro.TMP_Glyph', i4331[i + 0]));
  }
  i4312.m_glyphInfoList = i4330
  i4312.m_KerningTable = request.d('TMPro.KerningTable', i4313[35], i4312.m_KerningTable)
  var i4333 = i4313[36]
  var i4332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4333.length; i += 2) {
  request.r(i4333[i + 0], i4333[i + 1], 1, i4332, '')
  }
  i4312.fallbackFontAssets = i4332
  i4312.m_Version = i4313[37]
  i4312.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4313[38], i4312.m_FaceInfo)
  request.r(i4313[39], i4313[40], 0, i4312, 'm_Material')
  return i4312
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4334 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4335 = data
  i4334.sourceFontFileName = i4335[0]
  i4334.sourceFontFileGUID = i4335[1]
  i4334.faceIndex = i4335[2]
  i4334.pointSizeSamplingMode = i4335[3]
  i4334.pointSize = i4335[4]
  i4334.padding = i4335[5]
  i4334.paddingMode = i4335[6]
  i4334.packingMode = i4335[7]
  i4334.atlasWidth = i4335[8]
  i4334.atlasHeight = i4335[9]
  i4334.characterSetSelectionMode = i4335[10]
  i4334.characterSequence = i4335[11]
  i4334.referencedFontAssetGUID = i4335[12]
  i4334.referencedTextAssetGUID = i4335[13]
  i4334.fontStyle = i4335[14]
  i4334.fontStyleModifier = i4335[15]
  i4334.renderMode = i4335[16]
  i4334.includeFontFeatures = !!i4335[17]
  return i4334
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4338 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4339 = data
  i4338.m_Index = i4339[0]
  i4338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4339[1], i4338.m_Metrics)
  i4338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4339[2], i4338.m_GlyphRect)
  i4338.m_Scale = i4339[3]
  i4338.m_AtlasIndex = i4339[4]
  i4338.m_ClassDefinitionType = i4339[5]
  return i4338
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4340 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4341 = data
  i4340.m_Width = i4341[0]
  i4340.m_Height = i4341[1]
  i4340.m_HorizontalBearingX = i4341[2]
  i4340.m_HorizontalBearingY = i4341[3]
  i4340.m_HorizontalAdvance = i4341[4]
  return i4340
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4342 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4343 = data
  i4342.m_X = i4343[0]
  i4342.m_Y = i4343[1]
  i4342.m_Width = i4343[2]
  i4342.m_Height = i4343[3]
  return i4342
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4346 = root || request.c( 'TMPro.TMP_Character' )
  var i4347 = data
  i4346.m_ElementType = i4347[0]
  i4346.m_Unicode = i4347[1]
  i4346.m_GlyphIndex = i4347[2]
  i4346.m_Scale = i4347[3]
  return i4346
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4352 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4353 = data
  var i4355 = i4353[0]
  var i4354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4355.length; i += 1) {
    i4354.add(request.d('TMPro.MultipleSubstitutionRecord', i4355[i + 0]));
  }
  i4352.m_MultipleSubstitutionRecords = i4354
  var i4357 = i4353[1]
  var i4356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4357.length; i += 1) {
    i4356.add(request.d('TMPro.LigatureSubstitutionRecord', i4357[i + 0]));
  }
  i4352.m_LigatureSubstitutionRecords = i4356
  var i4359 = i4353[2]
  var i4358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4359.length; i += 1) {
    i4358.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4359[i + 0]));
  }
  i4352.m_GlyphPairAdjustmentRecords = i4358
  var i4361 = i4353[3]
  var i4360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4361.length; i += 1) {
    i4360.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4361[i + 0]));
  }
  i4352.m_MarkToBaseAdjustmentRecords = i4360
  var i4363 = i4353[4]
  var i4362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4363.length; i += 1) {
    i4362.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4363[i + 0]));
  }
  i4352.m_MarkToMarkAdjustmentRecords = i4362
  return i4352
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4366 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4367 = data
  i4366.m_TargetGlyphID = i4367[0]
  i4366.m_SubstituteGlyphIDs = i4367[1]
  return i4366
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4370 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4371 = data
  i4370.m_ComponentGlyphIDs = i4371[0]
  i4370.m_LigatureGlyphID = i4371[1]
  return i4370
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4374 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4375 = data
  i4374.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4375[0], i4374.m_FirstAdjustmentRecord)
  i4374.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4375[1], i4374.m_SecondAdjustmentRecord)
  i4374.m_FeatureLookupFlags = i4375[2]
  return i4374
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4378 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4379 = data
  i4378.m_BaseGlyphID = i4379[0]
  i4378.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4379[1], i4378.m_BaseGlyphAnchorPoint)
  i4378.m_MarkGlyphID = i4379[2]
  i4378.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4379[3], i4378.m_MarkPositionAdjustment)
  return i4378
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4382 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4383 = data
  i4382.m_BaseMarkGlyphID = i4383[0]
  i4382.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4383[1], i4382.m_BaseMarkGlyphAnchorPoint)
  i4382.m_CombiningMarkGlyphID = i4383[2]
  i4382.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4383[3], i4382.m_CombiningMarkPositionAdjustment)
  return i4382
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4388 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4389 = data
  request.r(i4389[0], i4389[1], 0, i4388, 'regularTypeface')
  request.r(i4389[2], i4389[3], 0, i4388, 'italicTypeface')
  return i4388
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4390 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4391 = data
  i4390.Name = i4391[0]
  i4390.PointSize = i4391[1]
  i4390.Scale = i4391[2]
  i4390.CharacterCount = i4391[3]
  i4390.LineHeight = i4391[4]
  i4390.Baseline = i4391[5]
  i4390.Ascender = i4391[6]
  i4390.CapHeight = i4391[7]
  i4390.Descender = i4391[8]
  i4390.CenterLine = i4391[9]
  i4390.SuperscriptOffset = i4391[10]
  i4390.SubscriptOffset = i4391[11]
  i4390.SubSize = i4391[12]
  i4390.Underline = i4391[13]
  i4390.UnderlineThickness = i4391[14]
  i4390.strikethrough = i4391[15]
  i4390.strikethroughThickness = i4391[16]
  i4390.TabWidth = i4391[17]
  i4390.Padding = i4391[18]
  i4390.AtlasWidth = i4391[19]
  i4390.AtlasHeight = i4391[20]
  return i4390
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4394 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4395 = data
  i4394.id = i4395[0]
  i4394.x = i4395[1]
  i4394.y = i4395[2]
  i4394.width = i4395[3]
  i4394.height = i4395[4]
  i4394.xOffset = i4395[5]
  i4394.yOffset = i4395[6]
  i4394.xAdvance = i4395[7]
  i4394.scale = i4395[8]
  return i4394
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4396 = root || request.c( 'TMPro.KerningTable' )
  var i4397 = data
  var i4399 = i4397[0]
  var i4398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4399.length; i += 1) {
    i4398.add(request.d('TMPro.KerningPair', i4399[i + 0]));
  }
  i4396.kerningPairs = i4398
  return i4396
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4402 = root || request.c( 'TMPro.KerningPair' )
  var i4403 = data
  i4402.xOffset = i4403[0]
  i4402.m_FirstGlyph = i4403[1]
  i4402.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4403[2], i4402.m_FirstGlyphAdjustments)
  i4402.m_SecondGlyph = i4403[3]
  i4402.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4403[4], i4402.m_SecondGlyphAdjustments)
  i4402.m_IgnoreSpacingAdjustments = !!i4403[5]
  return i4402
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4404 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4405 = data
  i4404.m_FaceIndex = i4405[0]
  i4404.m_FamilyName = i4405[1]
  i4404.m_StyleName = i4405[2]
  i4404.m_PointSize = i4405[3]
  i4404.m_Scale = i4405[4]
  i4404.m_UnitsPerEM = i4405[5]
  i4404.m_LineHeight = i4405[6]
  i4404.m_AscentLine = i4405[7]
  i4404.m_CapLine = i4405[8]
  i4404.m_MeanLine = i4405[9]
  i4404.m_Baseline = i4405[10]
  i4404.m_DescentLine = i4405[11]
  i4404.m_SuperscriptOffset = i4405[12]
  i4404.m_SuperscriptSize = i4405[13]
  i4404.m_SubscriptOffset = i4405[14]
  i4404.m_SubscriptSize = i4405[15]
  i4404.m_UnderlineOffset = i4405[16]
  i4404.m_UnderlineThickness = i4405[17]
  i4404.m_StrikethroughOffset = i4405[18]
  i4404.m_StrikethroughThickness = i4405[19]
  i4404.m_TabWidth = i4405[20]
  return i4404
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4406 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4407 = data
  i4406.useSafeMode = !!i4407[0]
  i4406.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4407[1], i4406.safeModeOptions)
  i4406.timeScale = i4407[2]
  i4406.unscaledTimeScale = i4407[3]
  i4406.useSmoothDeltaTime = !!i4407[4]
  i4406.maxSmoothUnscaledTime = i4407[5]
  i4406.rewindCallbackMode = i4407[6]
  i4406.showUnityEditorReport = !!i4407[7]
  i4406.logBehaviour = i4407[8]
  i4406.drawGizmos = !!i4407[9]
  i4406.defaultRecyclable = !!i4407[10]
  i4406.defaultAutoPlay = i4407[11]
  i4406.defaultUpdateType = i4407[12]
  i4406.defaultTimeScaleIndependent = !!i4407[13]
  i4406.defaultEaseType = i4407[14]
  i4406.defaultEaseOvershootOrAmplitude = i4407[15]
  i4406.defaultEasePeriod = i4407[16]
  i4406.defaultAutoKill = !!i4407[17]
  i4406.defaultLoopType = i4407[18]
  i4406.debugMode = !!i4407[19]
  i4406.debugStoreTargetId = !!i4407[20]
  i4406.showPreviewPanel = !!i4407[21]
  i4406.storeSettingsLocation = i4407[22]
  i4406.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4407[23], i4406.modules)
  i4406.createASMDEF = !!i4407[24]
  i4406.showPlayingTweens = !!i4407[25]
  i4406.showPausedTweens = !!i4407[26]
  return i4406
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4408 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4409 = data
  i4408.logBehaviour = i4409[0]
  i4408.nestedTweenFailureBehaviour = i4409[1]
  return i4408
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4411 = data
  i4410.showPanel = !!i4411[0]
  i4410.audioEnabled = !!i4411[1]
  i4410.physicsEnabled = !!i4411[2]
  i4410.physics2DEnabled = !!i4411[3]
  i4410.spriteEnabled = !!i4411[4]
  i4410.uiEnabled = !!i4411[5]
  i4410.uiToolkitEnabled = !!i4411[6]
  i4410.textMeshProEnabled = !!i4411[7]
  i4410.tk2DEnabled = !!i4411[8]
  i4410.deAudioEnabled = !!i4411[9]
  i4410.deUnityExtendedEnabled = !!i4411[10]
  i4410.epoOutlineEnabled = !!i4411[11]
  return i4410
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4412 = root || request.c( 'TMPro.TMP_Settings' )
  var i4413 = data
  i4412.assetVersion = i4413[0]
  i4412.m_TextWrappingMode = i4413[1]
  i4412.m_enableKerning = !!i4413[2]
  var i4415 = i4413[3]
  var i4414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4415.length; i += 1) {
    i4414.add(i4415[i + 0]);
  }
  i4412.m_ActiveFontFeatures = i4414
  i4412.m_enableExtraPadding = !!i4413[4]
  i4412.m_enableTintAllSprites = !!i4413[5]
  i4412.m_enableParseEscapeCharacters = !!i4413[6]
  i4412.m_EnableRaycastTarget = !!i4413[7]
  i4412.m_GetFontFeaturesAtRuntime = !!i4413[8]
  i4412.m_missingGlyphCharacter = i4413[9]
  i4412.m_ClearDynamicDataOnBuild = !!i4413[10]
  i4412.m_warningsDisabled = !!i4413[11]
  request.r(i4413[12], i4413[13], 0, i4412, 'm_defaultFontAsset')
  i4412.m_defaultFontAssetPath = i4413[14]
  i4412.m_defaultFontSize = i4413[15]
  i4412.m_defaultAutoSizeMinRatio = i4413[16]
  i4412.m_defaultAutoSizeMaxRatio = i4413[17]
  i4412.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4413[18], i4413[19] )
  i4412.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4413[20], i4413[21] )
  i4412.m_autoSizeTextContainer = !!i4413[22]
  i4412.m_IsTextObjectScaleStatic = !!i4413[23]
  var i4417 = i4413[24]
  var i4416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4417.length; i += 2) {
  request.r(i4417[i + 0], i4417[i + 1], 1, i4416, '')
  }
  i4412.m_fallbackFontAssets = i4416
  i4412.m_matchMaterialPreset = !!i4413[25]
  i4412.m_HideSubTextObjects = !!i4413[26]
  request.r(i4413[27], i4413[28], 0, i4412, 'm_defaultSpriteAsset')
  i4412.m_defaultSpriteAssetPath = i4413[29]
  i4412.m_enableEmojiSupport = !!i4413[30]
  i4412.m_MissingCharacterSpriteUnicode = i4413[31]
  var i4419 = i4413[32]
  var i4418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4419.length; i += 2) {
  request.r(i4419[i + 0], i4419[i + 1], 1, i4418, '')
  }
  i4412.m_EmojiFallbackTextAssets = i4418
  i4412.m_defaultColorGradientPresetsPath = i4413[33]
  request.r(i4413[34], i4413[35], 0, i4412, 'm_defaultStyleSheet')
  i4412.m_StyleSheetsResourcePath = i4413[36]
  request.r(i4413[37], i4413[38], 0, i4412, 'm_leadingCharacters')
  request.r(i4413[39], i4413[40], 0, i4412, 'm_followingCharacters')
  i4412.m_UseModernHangulLineBreakingRules = !!i4413[41]
  return i4412
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4422 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4423 = data
  request.r(i4423[0], i4423[1], 0, i4422, 'spriteSheet')
  var i4425 = i4423[2]
  var i4424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4425.length; i += 1) {
    i4424.add(request.d('TMPro.TMP_Sprite', i4425[i + 0]));
  }
  i4422.spriteInfoList = i4424
  var i4427 = i4423[3]
  var i4426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4427.length; i += 2) {
  request.r(i4427[i + 0], i4427[i + 1], 1, i4426, '')
  }
  i4422.fallbackSpriteAssets = i4426
  var i4429 = i4423[4]
  var i4428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4429.length; i += 1) {
    i4428.add(request.d('TMPro.TMP_SpriteCharacter', i4429[i + 0]));
  }
  i4422.m_SpriteCharacterTable = i4428
  var i4431 = i4423[5]
  var i4430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4431.length; i += 1) {
    i4430.add(request.d('TMPro.TMP_SpriteGlyph', i4431[i + 0]));
  }
  i4422.m_GlyphTable = i4430
  i4422.m_Version = i4423[6]
  i4422.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4423[7], i4422.m_FaceInfo)
  request.r(i4423[8], i4423[9], 0, i4422, 'm_Material')
  return i4422
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4434 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4435 = data
  i4434.name = i4435[0]
  i4434.hashCode = i4435[1]
  i4434.unicode = i4435[2]
  i4434.pivot = new pc.Vec2( i4435[3], i4435[4] )
  request.r(i4435[5], i4435[6], 0, i4434, 'sprite')
  i4434.id = i4435[7]
  i4434.x = i4435[8]
  i4434.y = i4435[9]
  i4434.width = i4435[10]
  i4434.height = i4435[11]
  i4434.xOffset = i4435[12]
  i4434.yOffset = i4435[13]
  i4434.xAdvance = i4435[14]
  i4434.scale = i4435[15]
  return i4434
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4440 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4441 = data
  i4440.m_Name = i4441[0]
  i4440.m_ElementType = i4441[1]
  i4440.m_Unicode = i4441[2]
  i4440.m_GlyphIndex = i4441[3]
  i4440.m_Scale = i4441[4]
  return i4440
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4444 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4445 = data
  request.r(i4445[0], i4445[1], 0, i4444, 'sprite')
  i4444.m_Index = i4445[2]
  i4444.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4445[3], i4444.m_Metrics)
  i4444.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4445[4], i4444.m_GlyphRect)
  i4444.m_Scale = i4445[5]
  i4444.m_AtlasIndex = i4445[6]
  i4444.m_ClassDefinitionType = i4445[7]
  return i4444
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4446 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4447 = data
  var i4449 = i4447[0]
  var i4448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.add(request.d('TMPro.TMP_Style', i4449[i + 0]));
  }
  i4446.m_StyleList = i4448
  return i4446
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4452 = root || request.c( 'TMPro.TMP_Style' )
  var i4453 = data
  i4452.m_Name = i4453[0]
  i4452.m_HashCode = i4453[1]
  i4452.m_OpeningDefinition = i4453[2]
  i4452.m_ClosingDefinition = i4453[3]
  i4452.m_OpeningTagArray = i4453[4]
  i4452.m_ClosingTagArray = i4453[5]
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4455 = data
  var i4457 = i4455[0]
  var i4456 = []
  for(var i = 0; i < i4457.length; i += 1) {
    i4456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4457[i + 0]) );
  }
  i4454.files = i4456
  i4454.componentToPrefabIds = i4455[1]
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4461 = data
  i4460.path = i4461[0]
  request.r(i4461[1], i4461[2], 0, i4460, 'unityObject')
  return i4460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4463 = data
  var i4465 = i4463[0]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4465[i + 0]) );
  }
  i4462.scriptsExecutionOrder = i4464
  var i4467 = i4463[1]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4467[i + 0]) );
  }
  i4462.sortingLayers = i4466
  var i4469 = i4463[2]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4469[i + 0]) );
  }
  i4462.cullingLayers = i4468
  i4462.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4463[3], i4462.timeSettings)
  i4462.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4463[4], i4462.physicsSettings)
  i4462.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4463[5], i4462.physics2DSettings)
  i4462.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4463[6], i4462.qualitySettings)
  i4462.enableRealtimeShadows = !!i4463[7]
  i4462.enableAutoInstancing = !!i4463[8]
  i4462.enableStaticBatching = !!i4463[9]
  i4462.enableDynamicBatching = !!i4463[10]
  i4462.lightmapEncodingQuality = i4463[11]
  i4462.desiredColorSpace = i4463[12]
  var i4471 = i4463[13]
  var i4470 = []
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.push( i4471[i + 0] );
  }
  i4462.allTags = i4470
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4475 = data
  i4474.name = i4475[0]
  i4474.value = i4475[1]
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4479 = data
  i4478.id = i4479[0]
  i4478.name = i4479[1]
  i4478.value = i4479[2]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4483 = data
  i4482.id = i4483[0]
  i4482.name = i4483[1]
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4485 = data
  i4484.fixedDeltaTime = i4485[0]
  i4484.maximumDeltaTime = i4485[1]
  i4484.timeScale = i4485[2]
  i4484.maximumParticleTimestep = i4485[3]
  return i4484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4487 = data
  i4486.gravity = new pc.Vec3( i4487[0], i4487[1], i4487[2] )
  i4486.defaultSolverIterations = i4487[3]
  i4486.bounceThreshold = i4487[4]
  i4486.autoSyncTransforms = !!i4487[5]
  i4486.autoSimulation = !!i4487[6]
  var i4489 = i4487[7]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4489[i + 0]) );
  }
  i4486.collisionMatrix = i4488
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4493 = data
  i4492.enabled = !!i4493[0]
  i4492.layerId = i4493[1]
  i4492.otherLayerId = i4493[2]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4495 = data
  request.r(i4495[0], i4495[1], 0, i4494, 'material')
  i4494.gravity = new pc.Vec2( i4495[2], i4495[3] )
  i4494.positionIterations = i4495[4]
  i4494.velocityIterations = i4495[5]
  i4494.velocityThreshold = i4495[6]
  i4494.maxLinearCorrection = i4495[7]
  i4494.maxAngularCorrection = i4495[8]
  i4494.maxTranslationSpeed = i4495[9]
  i4494.maxRotationSpeed = i4495[10]
  i4494.baumgarteScale = i4495[11]
  i4494.baumgarteTOIScale = i4495[12]
  i4494.timeToSleep = i4495[13]
  i4494.linearSleepTolerance = i4495[14]
  i4494.angularSleepTolerance = i4495[15]
  i4494.defaultContactOffset = i4495[16]
  i4494.autoSimulation = !!i4495[17]
  i4494.queriesHitTriggers = !!i4495[18]
  i4494.queriesStartInColliders = !!i4495[19]
  i4494.callbacksOnDisable = !!i4495[20]
  i4494.reuseCollisionCallbacks = !!i4495[21]
  i4494.autoSyncTransforms = !!i4495[22]
  var i4497 = i4495[23]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 1) {
    i4496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4497[i + 0]) );
  }
  i4494.collisionMatrix = i4496
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4501 = data
  i4500.enabled = !!i4501[0]
  i4500.layerId = i4501[1]
  i4500.otherLayerId = i4501[2]
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4503 = data
  var i4505 = i4503[0]
  var i4504 = []
  for(var i = 0; i < i4505.length; i += 1) {
    i4504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4505[i + 0]) );
  }
  i4502.qualityLevels = i4504
  var i4507 = i4503[1]
  var i4506 = []
  for(var i = 0; i < i4507.length; i += 1) {
    i4506.push( i4507[i + 0] );
  }
  i4502.names = i4506
  i4502.shadows = i4503[2]
  i4502.anisotropicFiltering = i4503[3]
  i4502.antiAliasing = i4503[4]
  i4502.lodBias = i4503[5]
  i4502.shadowCascades = i4503[6]
  i4502.shadowDistance = i4503[7]
  i4502.shadowmaskMode = i4503[8]
  i4502.shadowProjection = i4503[9]
  i4502.shadowResolution = i4503[10]
  i4502.softParticles = !!i4503[11]
  i4502.softVegetation = !!i4503[12]
  i4502.activeColorSpace = i4503[13]
  i4502.desiredColorSpace = i4503[14]
  i4502.masterTextureLimit = i4503[15]
  i4502.maxQueuedFrames = i4503[16]
  i4502.particleRaycastBudget = i4503[17]
  i4502.pixelLightCount = i4503[18]
  i4502.realtimeReflectionProbes = !!i4503[19]
  i4502.shadowCascade2Split = i4503[20]
  i4502.shadowCascade4Split = new pc.Vec3( i4503[21], i4503[22], i4503[23] )
  i4502.streamingMipmapsActive = !!i4503[24]
  i4502.vSyncCount = i4503[25]
  i4502.asyncUploadBufferSize = i4503[26]
  i4502.asyncUploadTimeSlice = i4503[27]
  i4502.billboardsFaceCameraPosition = !!i4503[28]
  i4502.shadowNearPlaneOffset = i4503[29]
  i4502.streamingMipmapsMemoryBudget = i4503[30]
  i4502.maximumLODLevel = i4503[31]
  i4502.streamingMipmapsAddAllCameras = !!i4503[32]
  i4502.streamingMipmapsMaxLevelReduction = i4503[33]
  i4502.streamingMipmapsRenderersPerFrame = i4503[34]
  i4502.resolutionScalingFixedDPIFactor = i4503[35]
  i4502.streamingMipmapsMaxFileIORequests = i4503[36]
  i4502.currentQualityLevel = i4503[37]
  return i4502
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4510 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4511 = data
  i4510.m_GlyphIndex = i4511[0]
  i4510.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4511[1], i4510.m_GlyphValueRecord)
  return i4510
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4512 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4513 = data
  i4512.m_XCoordinate = i4513[0]
  i4512.m_YCoordinate = i4513[1]
  return i4512
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4514 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4515 = data
  i4514.m_XPositionAdjustment = i4515[0]
  i4514.m_YPositionAdjustment = i4515[1]
  return i4514
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4516 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4517 = data
  i4516.xPlacement = i4517[0]
  i4516.yPlacement = i4517[1]
  i4516.xAdvance = i4517[2]
  i4516.yAdvance = i4517[3]
  return i4516
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4518 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4519 = data
  i4518.m_XPlacement = i4519[0]
  i4518.m_YPlacement = i4519[1]
  i4518.m_XAdvance = i4519[2]
  i4518.m_YAdvance = i4519[3]
  return i4518
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

Deserializers.buildID = "b44ab327-1452-4a88-bfdc-7b86d4623bcb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

