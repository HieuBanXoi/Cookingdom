var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4830 = root || request.c( 'UnityEngine.JointSpring' )
  var i4831 = data
  i4830.spring = i4831[0]
  i4830.damper = i4831[1]
  i4830.targetPosition = i4831[2]
  return i4830
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4832 = root || request.c( 'UnityEngine.JointMotor' )
  var i4833 = data
  i4832.m_TargetVelocity = i4833[0]
  i4832.m_Force = i4833[1]
  i4832.m_FreeSpin = i4833[2]
  return i4832
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4834 = root || request.c( 'UnityEngine.JointLimits' )
  var i4835 = data
  i4834.m_Min = i4835[0]
  i4834.m_Max = i4835[1]
  i4834.m_Bounciness = i4835[2]
  i4834.m_BounceMinVelocity = i4835[3]
  i4834.m_ContactDistance = i4835[4]
  i4834.minBounce = i4835[5]
  i4834.maxBounce = i4835[6]
  return i4834
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.JointDrive' )
  var i4837 = data
  i4836.m_PositionSpring = i4837[0]
  i4836.m_PositionDamper = i4837[1]
  i4836.m_MaximumForce = i4837[2]
  i4836.m_UseAcceleration = i4837[3]
  return i4836
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4839 = data
  i4838.m_Spring = i4839[0]
  i4838.m_Damper = i4839[1]
  return i4838
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4840 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4841 = data
  i4840.m_Limit = i4841[0]
  i4840.m_Bounciness = i4841[1]
  i4840.m_ContactDistance = i4841[2]
  return i4840
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4842 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4843 = data
  i4842.m_ExtremumSlip = i4843[0]
  i4842.m_ExtremumValue = i4843[1]
  i4842.m_AsymptoteSlip = i4843[2]
  i4842.m_AsymptoteValue = i4843[3]
  i4842.m_Stiffness = i4843[4]
  return i4842
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4845 = data
  i4844.m_LowerAngle = i4845[0]
  i4844.m_UpperAngle = i4845[1]
  return i4844
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4846 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4847 = data
  i4846.m_MotorSpeed = i4847[0]
  i4846.m_MaximumMotorTorque = i4847[1]
  return i4846
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4848 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4849 = data
  i4848.m_DampingRatio = i4849[0]
  i4848.m_Frequency = i4849[1]
  i4848.m_Angle = i4849[2]
  return i4848
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4850 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4851 = data
  i4850.m_LowerTranslation = i4851[0]
  i4850.m_UpperTranslation = i4851[1]
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4852 = root || new pc.UnityMaterial()
  var i4853 = data
  i4852.name = i4853[0]
  request.r(i4853[1], i4853[2], 0, i4852, 'shader')
  i4852.renderQueue = i4853[3]
  i4852.enableInstancing = !!i4853[4]
  var i4855 = i4853[5]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 1) {
    i4854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4855[i + 0]) );
  }
  i4852.floatParameters = i4854
  var i4857 = i4853[6]
  var i4856 = []
  for(var i = 0; i < i4857.length; i += 1) {
    i4856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4857[i + 0]) );
  }
  i4852.colorParameters = i4856
  var i4859 = i4853[7]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 1) {
    i4858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4859[i + 0]) );
  }
  i4852.vectorParameters = i4858
  var i4861 = i4853[8]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4861[i + 0]) );
  }
  i4852.textureParameters = i4860
  var i4863 = i4853[9]
  var i4862 = []
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4863[i + 0]) );
  }
  i4852.materialFlags = i4862
  return i4852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4867 = data
  i4866.name = i4867[0]
  i4866.value = i4867[1]
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4871 = data
  i4870.name = i4871[0]
  i4870.value = new pc.Color(i4871[1], i4871[2], i4871[3], i4871[4])
  return i4870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4875 = data
  i4874.name = i4875[0]
  i4874.value = new pc.Vec4( i4875[1], i4875[2], i4875[3], i4875[4] )
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4879 = data
  i4878.name = i4879[0]
  request.r(i4879[1], i4879[2], 0, i4878, 'value')
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4883 = data
  i4882.name = i4883[0]
  i4882.enabled = !!i4883[1]
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4885 = data
  i4884.name = i4885[0]
  i4884.width = i4885[1]
  i4884.height = i4885[2]
  i4884.mipmapCount = i4885[3]
  i4884.anisoLevel = i4885[4]
  i4884.filterMode = i4885[5]
  i4884.hdr = !!i4885[6]
  i4884.format = i4885[7]
  i4884.wrapMode = i4885[8]
  i4884.alphaIsTransparency = !!i4885[9]
  i4884.alphaSource = i4885[10]
  i4884.graphicsFormat = i4885[11]
  i4884.sRGBTexture = !!i4885[12]
  i4884.desiredColorSpace = i4885[13]
  i4884.wrapU = i4885[14]
  i4884.wrapV = i4885[15]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4887 = data
  i4886.position = new pc.Vec3( i4887[0], i4887[1], i4887[2] )
  i4886.scale = new pc.Vec3( i4887[3], i4887[4], i4887[5] )
  i4886.rotation = new pc.Quat(i4887[6], i4887[7], i4887[8], i4887[9])
  return i4886
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i4888 = root || request.c( 'HeartEffect' )
  var i4889 = data
  i4888.defaultLifeTime = i4889[0]
  request.r(i4889[1], i4889[2], 0, i4888, 'tf')
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4891 = data
  i4890.color = new pc.Color(i4891[0], i4891[1], i4891[2], i4891[3])
  request.r(i4891[4], i4891[5], 0, i4890, 'sprite')
  i4890.flipX = !!i4891[6]
  i4890.flipY = !!i4891[7]
  i4890.drawMode = i4891[8]
  i4890.size = new pc.Vec2( i4891[9], i4891[10] )
  i4890.tileMode = i4891[11]
  i4890.adaptiveModeThreshold = i4891[12]
  i4890.maskInteraction = i4891[13]
  i4890.spriteSortPoint = i4891[14]
  i4890.enabled = !!i4891[15]
  request.r(i4891[16], i4891[17], 0, i4890, 'sharedMaterial')
  var i4893 = i4891[18]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 2) {
  request.r(i4893[i + 0], i4893[i + 1], 2, i4892, '')
  }
  i4890.sharedMaterials = i4892
  i4890.receiveShadows = !!i4891[19]
  i4890.shadowCastingMode = i4891[20]
  i4890.sortingLayerID = i4891[21]
  i4890.sortingOrder = i4891[22]
  i4890.lightmapIndex = i4891[23]
  i4890.lightmapSceneIndex = i4891[24]
  i4890.lightmapScaleOffset = new pc.Vec4( i4891[25], i4891[26], i4891[27], i4891[28] )
  i4890.lightProbeUsage = i4891[29]
  i4890.reflectionProbeUsage = i4891[30]
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4897 = data
  i4896.name = i4897[0]
  i4896.tagId = i4897[1]
  i4896.enabled = !!i4897[2]
  i4896.isStatic = !!i4897[3]
  i4896.layer = i4897[4]
  return i4896
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i4898 = root || request.c( 'HeartBreakEffect' )
  var i4899 = data
  i4898.defaultLifeTime = i4899[0]
  request.r(i4899[1], i4899[2], 0, i4898, 'tf')
  return i4898
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i4900 = root || request.c( 'BlinkEffect' )
  var i4901 = data
  request.r(i4901[0], i4901[1], 0, i4900, 'tf')
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4903 = data
  request.r(i4903[0], i4903[1], 0, i4902, 'mesh')
  i4902.meshCount = i4903[2]
  i4902.activeVertexStreamsCount = i4903[3]
  i4902.alignment = i4903[4]
  i4902.renderMode = i4903[5]
  i4902.sortMode = i4903[6]
  i4902.lengthScale = i4903[7]
  i4902.velocityScale = i4903[8]
  i4902.cameraVelocityScale = i4903[9]
  i4902.normalDirection = i4903[10]
  i4902.sortingFudge = i4903[11]
  i4902.minParticleSize = i4903[12]
  i4902.maxParticleSize = i4903[13]
  i4902.pivot = new pc.Vec3( i4903[14], i4903[15], i4903[16] )
  request.r(i4903[17], i4903[18], 0, i4902, 'trailMaterial')
  i4902.applyActiveColorSpace = !!i4903[19]
  i4902.enabled = !!i4903[20]
  request.r(i4903[21], i4903[22], 0, i4902, 'sharedMaterial')
  var i4905 = i4903[23]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 2) {
  request.r(i4905[i + 0], i4905[i + 1], 2, i4904, '')
  }
  i4902.sharedMaterials = i4904
  i4902.receiveShadows = !!i4903[24]
  i4902.shadowCastingMode = i4903[25]
  i4902.sortingLayerID = i4903[26]
  i4902.sortingOrder = i4903[27]
  i4902.lightmapIndex = i4903[28]
  i4902.lightmapSceneIndex = i4903[29]
  i4902.lightmapScaleOffset = new pc.Vec4( i4903[30], i4903[31], i4903[32], i4903[33] )
  i4902.lightProbeUsage = i4903[34]
  i4902.reflectionProbeUsage = i4903[35]
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4907 = data
  i4906.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4907[0], i4906.main)
  i4906.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4907[1], i4906.colorBySpeed)
  i4906.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4907[2], i4906.colorOverLifetime)
  i4906.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4907[3], i4906.emission)
  i4906.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4907[4], i4906.rotationBySpeed)
  i4906.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4907[5], i4906.rotationOverLifetime)
  i4906.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4907[6], i4906.shape)
  i4906.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4907[7], i4906.sizeBySpeed)
  i4906.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4907[8], i4906.sizeOverLifetime)
  i4906.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4907[9], i4906.textureSheetAnimation)
  i4906.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4907[10], i4906.velocityOverLifetime)
  i4906.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4907[11], i4906.noise)
  i4906.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4907[12], i4906.inheritVelocity)
  i4906.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4907[13], i4906.forceOverLifetime)
  i4906.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4907[14], i4906.limitVelocityOverLifetime)
  i4906.useAutoRandomSeed = !!i4907[15]
  i4906.randomSeed = i4907[16]
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4908 = root || new pc.ParticleSystemMain()
  var i4909 = data
  i4908.duration = i4909[0]
  i4908.loop = !!i4909[1]
  i4908.prewarm = !!i4909[2]
  i4908.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[3], i4908.startDelay)
  i4908.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[4], i4908.startLifetime)
  i4908.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[5], i4908.startSpeed)
  i4908.startSize3D = !!i4909[6]
  i4908.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[7], i4908.startSizeX)
  i4908.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[8], i4908.startSizeY)
  i4908.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[9], i4908.startSizeZ)
  i4908.startRotation3D = !!i4909[10]
  i4908.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[11], i4908.startRotationX)
  i4908.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[12], i4908.startRotationY)
  i4908.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[13], i4908.startRotationZ)
  i4908.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4909[14], i4908.startColor)
  i4908.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4909[15], i4908.gravityModifier)
  i4908.simulationSpace = i4909[16]
  request.r(i4909[17], i4909[18], 0, i4908, 'customSimulationSpace')
  i4908.simulationSpeed = i4909[19]
  i4908.useUnscaledTime = !!i4909[20]
  i4908.scalingMode = i4909[21]
  i4908.playOnAwake = !!i4909[22]
  i4908.maxParticles = i4909[23]
  i4908.emitterVelocityMode = i4909[24]
  i4908.stopAction = i4909[25]
  return i4908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4910 = root || new pc.MinMaxCurve()
  var i4911 = data
  i4910.mode = i4911[0]
  i4910.curveMin = new pc.AnimationCurve( { keys_flow: i4911[1] } )
  i4910.curveMax = new pc.AnimationCurve( { keys_flow: i4911[2] } )
  i4910.curveMultiplier = i4911[3]
  i4910.constantMin = i4911[4]
  i4910.constantMax = i4911[5]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4912 = root || new pc.MinMaxGradient()
  var i4913 = data
  i4912.mode = i4913[0]
  i4912.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4913[1], i4912.gradientMin)
  i4912.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4913[2], i4912.gradientMax)
  i4912.colorMin = new pc.Color(i4913[3], i4913[4], i4913[5], i4913[6])
  i4912.colorMax = new pc.Color(i4913[7], i4913[8], i4913[9], i4913[10])
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4915 = data
  i4914.mode = i4915[0]
  var i4917 = i4915[1]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 1) {
    i4916.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4917[i + 0]) );
  }
  i4914.colorKeys = i4916
  var i4919 = i4915[2]
  var i4918 = []
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4919[i + 0]) );
  }
  i4914.alphaKeys = i4918
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4920 = root || new pc.ParticleSystemColorBySpeed()
  var i4921 = data
  i4920.enabled = !!i4921[0]
  i4920.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4921[1], i4920.color)
  i4920.range = new pc.Vec2( i4921[2], i4921[3] )
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4925 = data
  i4924.color = new pc.Color(i4925[0], i4925[1], i4925[2], i4925[3])
  i4924.time = i4925[4]
  return i4924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4929 = data
  i4928.alpha = i4929[0]
  i4928.time = i4929[1]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4930 = root || new pc.ParticleSystemColorOverLifetime()
  var i4931 = data
  i4930.enabled = !!i4931[0]
  i4930.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4931[1], i4930.color)
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4932 = root || new pc.ParticleSystemEmitter()
  var i4933 = data
  i4932.enabled = !!i4933[0]
  i4932.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4933[1], i4932.rateOverTime)
  i4932.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4933[2], i4932.rateOverDistance)
  var i4935 = i4933[3]
  var i4934 = []
  for(var i = 0; i < i4935.length; i += 1) {
    i4934.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4935[i + 0]) );
  }
  i4932.bursts = i4934
  return i4932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4938 = root || new pc.ParticleSystemBurst()
  var i4939 = data
  i4938.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4939[0], i4938.count)
  i4938.cycleCount = i4939[1]
  i4938.minCount = i4939[2]
  i4938.maxCount = i4939[3]
  i4938.repeatInterval = i4939[4]
  i4938.time = i4939[5]
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4940 = root || new pc.ParticleSystemRotationBySpeed()
  var i4941 = data
  i4940.enabled = !!i4941[0]
  i4940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4941[1], i4940.x)
  i4940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4941[2], i4940.y)
  i4940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4941[3], i4940.z)
  i4940.separateAxes = !!i4941[4]
  i4940.range = new pc.Vec2( i4941[5], i4941[6] )
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4942 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4943 = data
  i4942.enabled = !!i4943[0]
  i4942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4943[1], i4942.x)
  i4942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4943[2], i4942.y)
  i4942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4943[3], i4942.z)
  i4942.separateAxes = !!i4943[4]
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4944 = root || new pc.ParticleSystemShape()
  var i4945 = data
  i4944.enabled = !!i4945[0]
  i4944.shapeType = i4945[1]
  i4944.randomDirectionAmount = i4945[2]
  i4944.sphericalDirectionAmount = i4945[3]
  i4944.randomPositionAmount = i4945[4]
  i4944.alignToDirection = !!i4945[5]
  i4944.radius = i4945[6]
  i4944.radiusMode = i4945[7]
  i4944.radiusSpread = i4945[8]
  i4944.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4945[9], i4944.radiusSpeed)
  i4944.radiusThickness = i4945[10]
  i4944.angle = i4945[11]
  i4944.length = i4945[12]
  i4944.boxThickness = new pc.Vec3( i4945[13], i4945[14], i4945[15] )
  i4944.meshShapeType = i4945[16]
  request.r(i4945[17], i4945[18], 0, i4944, 'mesh')
  request.r(i4945[19], i4945[20], 0, i4944, 'meshRenderer')
  request.r(i4945[21], i4945[22], 0, i4944, 'skinnedMeshRenderer')
  i4944.useMeshMaterialIndex = !!i4945[23]
  i4944.meshMaterialIndex = i4945[24]
  i4944.useMeshColors = !!i4945[25]
  i4944.normalOffset = i4945[26]
  i4944.arc = i4945[27]
  i4944.arcMode = i4945[28]
  i4944.arcSpread = i4945[29]
  i4944.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4945[30], i4944.arcSpeed)
  i4944.donutRadius = i4945[31]
  i4944.position = new pc.Vec3( i4945[32], i4945[33], i4945[34] )
  i4944.rotation = new pc.Vec3( i4945[35], i4945[36], i4945[37] )
  i4944.scale = new pc.Vec3( i4945[38], i4945[39], i4945[40] )
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4946 = root || new pc.ParticleSystemSizeBySpeed()
  var i4947 = data
  i4946.enabled = !!i4947[0]
  i4946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[1], i4946.x)
  i4946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[2], i4946.y)
  i4946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[3], i4946.z)
  i4946.separateAxes = !!i4947[4]
  i4946.range = new pc.Vec2( i4947[5], i4947[6] )
  return i4946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4948 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4949 = data
  i4948.enabled = !!i4949[0]
  i4948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[1], i4948.x)
  i4948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[2], i4948.y)
  i4948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[3], i4948.z)
  i4948.separateAxes = !!i4949[4]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4950 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4951 = data
  i4950.enabled = !!i4951[0]
  i4950.mode = i4951[1]
  i4950.animation = i4951[2]
  i4950.numTilesX = i4951[3]
  i4950.numTilesY = i4951[4]
  i4950.useRandomRow = !!i4951[5]
  i4950.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4951[6], i4950.frameOverTime)
  i4950.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4951[7], i4950.startFrame)
  i4950.cycleCount = i4951[8]
  i4950.rowIndex = i4951[9]
  i4950.flipU = i4951[10]
  i4950.flipV = i4951[11]
  i4950.spriteCount = i4951[12]
  var i4953 = i4951[13]
  var i4952 = []
  for(var i = 0; i < i4953.length; i += 2) {
  request.r(i4953[i + 0], i4953[i + 1], 2, i4952, '')
  }
  i4950.sprites = i4952
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4956 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4957 = data
  i4956.enabled = !!i4957[0]
  i4956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[1], i4956.x)
  i4956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[2], i4956.y)
  i4956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[3], i4956.z)
  i4956.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[4], i4956.radial)
  i4956.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[5], i4956.speedModifier)
  i4956.space = i4957[6]
  i4956.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[7], i4956.orbitalX)
  i4956.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[8], i4956.orbitalY)
  i4956.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[9], i4956.orbitalZ)
  i4956.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[10], i4956.orbitalOffsetX)
  i4956.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[11], i4956.orbitalOffsetY)
  i4956.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[12], i4956.orbitalOffsetZ)
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4958 = root || new pc.ParticleSystemNoise()
  var i4959 = data
  i4958.enabled = !!i4959[0]
  i4958.separateAxes = !!i4959[1]
  i4958.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[2], i4958.strengthX)
  i4958.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[3], i4958.strengthY)
  i4958.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[4], i4958.strengthZ)
  i4958.frequency = i4959[5]
  i4958.damping = !!i4959[6]
  i4958.octaveCount = i4959[7]
  i4958.octaveMultiplier = i4959[8]
  i4958.octaveScale = i4959[9]
  i4958.quality = i4959[10]
  i4958.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[11], i4958.scrollSpeed)
  i4958.scrollSpeedMultiplier = i4959[12]
  i4958.remapEnabled = !!i4959[13]
  i4958.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[14], i4958.remapX)
  i4958.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[15], i4958.remapY)
  i4958.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[16], i4958.remapZ)
  i4958.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[17], i4958.positionAmount)
  i4958.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[18], i4958.rotationAmount)
  i4958.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4959[19], i4958.sizeAmount)
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4960 = root || new pc.ParticleSystemInheritVelocity()
  var i4961 = data
  i4960.enabled = !!i4961[0]
  i4960.mode = i4961[1]
  i4960.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4961[2], i4960.curve)
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4962 = root || new pc.ParticleSystemForceOverLifetime()
  var i4963 = data
  i4962.enabled = !!i4963[0]
  i4962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[1], i4962.x)
  i4962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[2], i4962.y)
  i4962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[3], i4962.z)
  i4962.space = i4963[4]
  i4962.randomized = !!i4963[5]
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4964 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4965 = data
  i4964.enabled = !!i4965[0]
  i4964.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[1], i4964.limit)
  i4964.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[2], i4964.limitX)
  i4964.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[3], i4964.limitY)
  i4964.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[4], i4964.limitZ)
  i4964.dampen = i4965[5]
  i4964.separateAxes = !!i4965[6]
  i4964.space = i4965[7]
  i4964.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[8], i4964.drag)
  i4964.multiplyDragByParticleSize = !!i4965[9]
  i4964.multiplyDragByParticleVelocity = !!i4965[10]
  return i4964
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i4966 = root || request.c( 'StarExploreFX' )
  var i4967 = data
  request.r(i4967[0], i4967[1], 0, i4966, 'tf')
  return i4966
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i4968 = root || request.c( 'ProgressBar' )
  var i4969 = data
  request.r(i4969[0], i4969[1], 0, i4968, 'fillTransform')
  request.r(i4969[2], i4969[3], 0, i4968, 'tf')
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4971 = data
  i4970.pivot = new pc.Vec2( i4971[0], i4971[1] )
  i4970.anchorMin = new pc.Vec2( i4971[2], i4971[3] )
  i4970.anchorMax = new pc.Vec2( i4971[4], i4971[5] )
  i4970.sizeDelta = new pc.Vec2( i4971[6], i4971[7] )
  i4970.anchoredPosition3D = new pc.Vec3( i4971[8], i4971[9], i4971[10] )
  i4970.rotation = new pc.Quat(i4971[11], i4971[12], i4971[13], i4971[14])
  i4970.scale = new pc.Vec3( i4971[15], i4971[16], i4971[17] )
  return i4970
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i4972 = root || request.c( 'ClockTimer' )
  var i4973 = data
  request.r(i4973[0], i4973[1], 0, i4972, 'fillImage')
  request.r(i4973[2], i4973[3], 0, i4972, 'tf')
  i4972.spawnZoomDuration = i4973[4]
  i4972.despawnZoomDuration = i4973[5]
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4975 = data
  i4974.cullTransparentMesh = !!i4975[0]
  return i4974
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4976 = root || request.c( 'UnityEngine.UI.Image' )
  var i4977 = data
  request.r(i4977[0], i4977[1], 0, i4976, 'm_Sprite')
  i4976.m_Type = i4977[2]
  i4976.m_PreserveAspect = !!i4977[3]
  i4976.m_FillCenter = !!i4977[4]
  i4976.m_FillMethod = i4977[5]
  i4976.m_FillAmount = i4977[6]
  i4976.m_FillClockwise = !!i4977[7]
  i4976.m_FillOrigin = i4977[8]
  i4976.m_UseSpriteMesh = !!i4977[9]
  i4976.m_PixelsPerUnitMultiplier = i4977[10]
  request.r(i4977[11], i4977[12], 0, i4976, 'm_Material')
  i4976.m_Maskable = !!i4977[13]
  i4976.m_Color = new pc.Color(i4977[14], i4977[15], i4977[16], i4977[17])
  i4976.m_RaycastTarget = !!i4977[18]
  i4976.m_RaycastPadding = new pc.Vec4( i4977[19], i4977[20], i4977[21], i4977[22] )
  return i4976
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i4978 = root || request.c( 'FlourSmoke' )
  var i4979 = data
  request.r(i4979[0], i4979[1], 0, i4978, 'tf')
  return i4978
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i4980 = root || request.c( 'WaterSplash' )
  var i4981 = data
  request.r(i4981[0], i4981[1], 0, i4980, 'tf')
  return i4980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4983 = data
  i4982.name = i4983[0]
  i4982.index = i4983[1]
  i4982.startup = !!i4983[2]
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4985 = data
  i4984.planeDistance = i4985[0]
  i4984.referencePixelsPerUnit = i4985[1]
  i4984.isFallbackOverlay = !!i4985[2]
  i4984.renderMode = i4985[3]
  i4984.renderOrder = i4985[4]
  i4984.sortingLayerName = i4985[5]
  i4984.sortingOrder = i4985[6]
  i4984.scaleFactor = i4985[7]
  request.r(i4985[8], i4985[9], 0, i4984, 'worldCamera')
  i4984.overrideSorting = !!i4985[10]
  i4984.pixelPerfect = !!i4985[11]
  i4984.targetDisplay = i4985[12]
  i4984.overridePixelPerfect = !!i4985[13]
  i4984.enabled = !!i4985[14]
  return i4984
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4986 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4987 = data
  i4986.m_UiScaleMode = i4987[0]
  i4986.m_ReferencePixelsPerUnit = i4987[1]
  i4986.m_ScaleFactor = i4987[2]
  i4986.m_ReferenceResolution = new pc.Vec2( i4987[3], i4987[4] )
  i4986.m_ScreenMatchMode = i4987[5]
  i4986.m_MatchWidthOrHeight = i4987[6]
  i4986.m_PhysicalUnit = i4987[7]
  i4986.m_FallbackScreenDPI = i4987[8]
  i4986.m_DefaultSpriteDPI = i4987[9]
  i4986.m_DynamicPixelsPerUnit = i4987[10]
  i4986.m_PresetInfoIsWorld = !!i4987[11]
  return i4986
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4988 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4989 = data
  i4988.m_IgnoreReversedGraphics = !!i4989[0]
  i4988.m_BlockingObjects = i4989[1]
  i4988.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4989[2] )
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4991 = data
  request.r(i4991[0], i4991[1], 0, i4990, 'animatorController')
  request.r(i4991[2], i4991[3], 0, i4990, 'avatar')
  i4990.updateMode = i4991[4]
  i4990.hasTransformHierarchy = !!i4991[5]
  i4990.applyRootMotion = !!i4991[6]
  var i4993 = i4991[7]
  var i4992 = []
  for(var i = 0; i < i4993.length; i += 2) {
  request.r(i4993[i + 0], i4993[i + 1], 2, i4992, '')
  }
  i4990.humanBones = i4992
  i4990.enabled = !!i4991[8]
  return i4990
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4996 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4997 = data
  i4996.m_hasFontAssetChanged = !!i4997[0]
  request.r(i4997[1], i4997[2], 0, i4996, 'm_baseMaterial')
  i4996.m_maskOffset = new pc.Vec4( i4997[3], i4997[4], i4997[5], i4997[6] )
  i4996.m_text = i4997[7]
  i4996.m_isRightToLeft = !!i4997[8]
  request.r(i4997[9], i4997[10], 0, i4996, 'm_fontAsset')
  request.r(i4997[11], i4997[12], 0, i4996, 'm_sharedMaterial')
  var i4999 = i4997[13]
  var i4998 = []
  for(var i = 0; i < i4999.length; i += 2) {
  request.r(i4999[i + 0], i4999[i + 1], 2, i4998, '')
  }
  i4996.m_fontSharedMaterials = i4998
  request.r(i4997[14], i4997[15], 0, i4996, 'm_fontMaterial')
  var i5001 = i4997[16]
  var i5000 = []
  for(var i = 0; i < i5001.length; i += 2) {
  request.r(i5001[i + 0], i5001[i + 1], 2, i5000, '')
  }
  i4996.m_fontMaterials = i5000
  i4996.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4997[17], i4997[18], i4997[19], i4997[20])
  i4996.m_fontColor = new pc.Color(i4997[21], i4997[22], i4997[23], i4997[24])
  i4996.m_enableVertexGradient = !!i4997[25]
  i4996.m_colorMode = i4997[26]
  i4996.m_fontColorGradient = request.d('TMPro.VertexGradient', i4997[27], i4996.m_fontColorGradient)
  request.r(i4997[28], i4997[29], 0, i4996, 'm_fontColorGradientPreset')
  request.r(i4997[30], i4997[31], 0, i4996, 'm_spriteAsset')
  i4996.m_tintAllSprites = !!i4997[32]
  request.r(i4997[33], i4997[34], 0, i4996, 'm_StyleSheet')
  i4996.m_TextStyleHashCode = i4997[35]
  i4996.m_overrideHtmlColors = !!i4997[36]
  i4996.m_faceColor = UnityEngine.Color32.ConstructColor(i4997[37], i4997[38], i4997[39], i4997[40])
  i4996.m_fontSize = i4997[41]
  i4996.m_fontSizeBase = i4997[42]
  i4996.m_fontWeight = i4997[43]
  i4996.m_enableAutoSizing = !!i4997[44]
  i4996.m_fontSizeMin = i4997[45]
  i4996.m_fontSizeMax = i4997[46]
  i4996.m_fontStyle = i4997[47]
  i4996.m_HorizontalAlignment = i4997[48]
  i4996.m_VerticalAlignment = i4997[49]
  i4996.m_textAlignment = i4997[50]
  i4996.m_characterSpacing = i4997[51]
  i4996.m_wordSpacing = i4997[52]
  i4996.m_lineSpacing = i4997[53]
  i4996.m_lineSpacingMax = i4997[54]
  i4996.m_paragraphSpacing = i4997[55]
  i4996.m_charWidthMaxAdj = i4997[56]
  i4996.m_TextWrappingMode = i4997[57]
  i4996.m_wordWrappingRatios = i4997[58]
  i4996.m_overflowMode = i4997[59]
  request.r(i4997[60], i4997[61], 0, i4996, 'm_linkedTextComponent')
  request.r(i4997[62], i4997[63], 0, i4996, 'parentLinkedComponent')
  i4996.m_enableKerning = !!i4997[64]
  var i5003 = i4997[65]
  var i5002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5003.length; i += 1) {
    i5002.add(i5003[i + 0]);
  }
  i4996.m_ActiveFontFeatures = i5002
  i4996.m_enableExtraPadding = !!i4997[66]
  i4996.checkPaddingRequired = !!i4997[67]
  i4996.m_isRichText = !!i4997[68]
  i4996.m_parseCtrlCharacters = !!i4997[69]
  i4996.m_isOrthographic = !!i4997[70]
  i4996.m_isCullingEnabled = !!i4997[71]
  i4996.m_horizontalMapping = i4997[72]
  i4996.m_verticalMapping = i4997[73]
  i4996.m_uvLineOffset = i4997[74]
  i4996.m_geometrySortingOrder = i4997[75]
  i4996.m_IsTextObjectScaleStatic = !!i4997[76]
  i4996.m_VertexBufferAutoSizeReduction = !!i4997[77]
  i4996.m_useMaxVisibleDescender = !!i4997[78]
  i4996.m_pageToDisplay = i4997[79]
  i4996.m_margin = new pc.Vec4( i4997[80], i4997[81], i4997[82], i4997[83] )
  i4996.m_isUsingLegacyAnimationComponent = !!i4997[84]
  i4996.m_isVolumetricText = !!i4997[85]
  request.r(i4997[86], i4997[87], 0, i4996, 'm_Material')
  i4996.m_EmojiFallbackSupport = !!i4997[88]
  i4996.m_Maskable = !!i4997[89]
  i4996.m_Color = new pc.Color(i4997[90], i4997[91], i4997[92], i4997[93])
  i4996.m_RaycastTarget = !!i4997[94]
  i4996.m_RaycastPadding = new pc.Vec4( i4997[95], i4997[96], i4997[97], i4997[98] )
  return i4996
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5004 = root || request.c( 'TMPro.VertexGradient' )
  var i5005 = data
  i5004.topLeft = new pc.Color(i5005[0], i5005[1], i5005[2], i5005[3])
  i5004.topRight = new pc.Color(i5005[4], i5005[5], i5005[6], i5005[7])
  i5004.bottomLeft = new pc.Color(i5005[8], i5005[9], i5005[10], i5005[11])
  i5004.bottomRight = new pc.Color(i5005[12], i5005[13], i5005[14], i5005[15])
  return i5004
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.UI.Button' )
  var i5009 = data
  i5008.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5009[0], i5008.m_OnClick)
  i5008.m_Navigation = request.d('UnityEngine.UI.Navigation', i5009[1], i5008.m_Navigation)
  i5008.m_Transition = i5009[2]
  i5008.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5009[3], i5008.m_Colors)
  i5008.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5009[4], i5008.m_SpriteState)
  i5008.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5009[5], i5008.m_AnimationTriggers)
  i5008.m_Interactable = !!i5009[6]
  request.r(i5009[7], i5009[8], 0, i5008, 'm_TargetGraphic')
  return i5008
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5011 = data
  i5010.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5011[0], i5010.m_PersistentCalls)
  return i5010
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5013 = data
  var i5015 = i5013[0]
  var i5014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5015.length; i += 1) {
    i5014.add(request.d('UnityEngine.Events.PersistentCall', i5015[i + 0]));
  }
  i5012.m_Calls = i5014
  return i5012
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5019 = data
  request.r(i5019[0], i5019[1], 0, i5018, 'm_Target')
  i5018.m_TargetAssemblyTypeName = i5019[2]
  i5018.m_MethodName = i5019[3]
  i5018.m_Mode = i5019[4]
  i5018.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5019[5], i5018.m_Arguments)
  i5018.m_CallState = i5019[6]
  return i5018
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5020 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5021 = data
  request.r(i5021[0], i5021[1], 0, i5020, 'm_ObjectArgument')
  i5020.m_ObjectArgumentAssemblyTypeName = i5021[2]
  i5020.m_IntArgument = i5021[3]
  i5020.m_FloatArgument = i5021[4]
  i5020.m_StringArgument = i5021[5]
  i5020.m_BoolArgument = !!i5021[6]
  return i5020
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5022 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5023 = data
  i5022.m_Mode = i5023[0]
  i5022.m_WrapAround = !!i5023[1]
  request.r(i5023[2], i5023[3], 0, i5022, 'm_SelectOnUp')
  request.r(i5023[4], i5023[5], 0, i5022, 'm_SelectOnDown')
  request.r(i5023[6], i5023[7], 0, i5022, 'm_SelectOnLeft')
  request.r(i5023[8], i5023[9], 0, i5022, 'm_SelectOnRight')
  return i5022
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5024 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5025 = data
  i5024.m_NormalColor = new pc.Color(i5025[0], i5025[1], i5025[2], i5025[3])
  i5024.m_HighlightedColor = new pc.Color(i5025[4], i5025[5], i5025[6], i5025[7])
  i5024.m_PressedColor = new pc.Color(i5025[8], i5025[9], i5025[10], i5025[11])
  i5024.m_SelectedColor = new pc.Color(i5025[12], i5025[13], i5025[14], i5025[15])
  i5024.m_DisabledColor = new pc.Color(i5025[16], i5025[17], i5025[18], i5025[19])
  i5024.m_ColorMultiplier = i5025[20]
  i5024.m_FadeDuration = i5025[21]
  return i5024
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5026 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5027 = data
  request.r(i5027[0], i5027[1], 0, i5026, 'm_HighlightedSprite')
  request.r(i5027[2], i5027[3], 0, i5026, 'm_PressedSprite')
  request.r(i5027[4], i5027[5], 0, i5026, 'm_SelectedSprite')
  request.r(i5027[6], i5027[7], 0, i5026, 'm_DisabledSprite')
  return i5026
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5028 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5029 = data
  i5028.m_NormalTrigger = i5029[0]
  i5028.m_HighlightedTrigger = i5029[1]
  i5028.m_PressedTrigger = i5029[2]
  i5028.m_SelectedTrigger = i5029[3]
  i5028.m_DisabledTrigger = i5029[4]
  return i5028
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5030 = root || request.c( 'Ply_Pool' )
  var i5031 = data
  var i5033 = i5031[0]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 1) {
    i5032.push( request.d('Ply_Pool+PoolAmount', i5033[i + 0]) );
  }
  i5030.poolAmounts = i5032
  request.r(i5031[1], i5031[2], 0, i5030, 'poolHolder')
  return i5030
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5036 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5037 = data
  i5036.type = i5037[0]
  i5036.amount = i5037[1]
  request.r(i5037[2], i5037[3], 0, i5036, 'gameUnit')
  return i5036
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5038 = root || request.c( 'Ply_SoundManager' )
  var i5039 = data
  var i5041 = i5039[0]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Ply_SoundManager+FxAudio', i5041[i + 0]) );
  }
  i5038.fxAudios = i5040
  var i5043 = i5039[1]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 2) {
  request.r(i5043[i + 0], i5043[i + 1], 2, i5042, '')
  }
  i5038.audioClips = i5042
  request.r(i5039[2], i5039[3], 0, i5038, 'sound')
  return i5038
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i5046 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i5047 = data
  i5046.fxType = i5047[0]
  request.r(i5047[1], i5047[2], 0, i5046, 'audioClip')
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, 'clip')
  request.r(i5051[2], i5051[3], 0, i5050, 'outputAudioMixerGroup')
  i5050.playOnAwake = !!i5051[4]
  i5050.loop = !!i5051[5]
  i5050.time = i5051[6]
  i5050.volume = i5051[7]
  i5050.pitch = i5051[8]
  i5050.enabled = !!i5051[9]
  return i5050
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5052 = root || request.c( 'GameManager' )
  var i5053 = data
  i5052.isPlaying = !!i5053[0]
  i5052.isTutorial = !!i5053[1]
  i5052.isGotoStore = !!i5053[2]
  i5052.isLoseGame = !!i5053[3]
  i5052.countMove = i5053[4]
  i5052.currentLayer = i5053[5]
  return i5052
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5054 = root || request.c( 'UIManager' )
  var i5055 = data
  request.r(i5055[0], i5055[1], 0, i5054, 'winUI')
  request.r(i5055[2], i5055[3], 0, i5054, 'loseUI')
  request.r(i5055[4], i5055[5], 0, i5054, 'tutorial')
  request.r(i5055[6], i5055[7], 0, i5054, 'verticalUI')
  request.r(i5055[8], i5055[9], 0, i5054, 'horizontalUI')
  request.r(i5055[10], i5055[11], 0, i5054, 'downloadBtn')
  i5054.screenWidth = i5055[12]
  i5054.screenHeight = i5055[13]
  i5054.scaleHeightOnWidth = i5055[14]
  i5054.isVertical = !!i5055[15]
  request.r(i5055[16], i5055[17], 0, i5054, 'cam')
  i5054.verticalUIHeightOnWidthRatio = i5055[18]
  i5054.scaleCameraOnValidate = !!i5055[19]
  i5054.useContinuousScaling = !!i5055[20]
  i5054.baseOrthographicSize = i5055[21]
  i5054.baseAspect = i5055[22]
  i5054.landscapeSizeRatio = i5055[23]
  i5054.defaultPortraitSizeRatio = i5055[24]
  var i5057 = i5055[25]
  var i5056 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5057.length; i += 1) {
    i5056.add(request.d('ScreenScaleStep', i5057[i + 0]));
  }
  i5054.discreteScaleSteps = i5056
  i5054.usePerspectiveCamera = !!i5055[26]
  request.r(i5055[27], i5055[28], 0, i5054, 'perspectiveFocus')
  i5054.perspectiveFocusDistance = i5055[29]
  i5054.perspectivePadding = i5055[30]
  i5054.fitRendererBounds = !!i5055[31]
  request.r(i5055[32], i5055[33], 0, i5054, 'boundsRoot')
  var i5059 = i5055[34]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5059.length; i += 2) {
  request.r(i5059[i + 0], i5059[i + 1], 1, i5058, '')
  }
  i5054.boundsRenderers = i5058
  return i5054
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5062 = root || request.c( 'ScreenScaleStep' )
  var i5063 = data
  i5062.heightOnWidthRatio = i5063[0]
  i5062.orthographicSize = i5063[1]
  return i5062
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5066 = root || request.c( 'InputManager' )
  var i5067 = data
  i5066.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5067[0] )
  i5066.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5067[1] )
  i5066.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5067[2] )
  i5066.isDragging = !!i5067[3]
  return i5066
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i5068 = root || request.c( 'HandTutManager' )
  var i5069 = data
  var i5071 = i5069[0]
  var i5070 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5071.length; i += 2) {
  request.r(i5071[i + 0], i5071[i + 1], 1, i5070, '')
  }
  i5068.items = i5070
  request.r(i5069[1], i5069[2], 0, i5068, 'knife')
  request.r(i5069[3], i5069[4], 0, i5068, 'peeler')
  request.r(i5069[5], i5069[6], 0, i5068, 'handTutObject')
  request.r(i5069[7], i5069[8], 0, i5068, 'tapToCookObject')
  request.r(i5069[9], i5069[10], 0, i5068, 'oilItem')
  request.r(i5069[11], i5069[12], 0, i5068, 'stoveToggleEvent')
  request.r(i5069[13], i5069[14], 0, i5068, 'waterToggleEvent')
  request.r(i5069[15], i5069[16], 0, i5068, 'sinkBlock')
  var i5073 = i5069[17]
  var i5072 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i5073.length; i += 2) {
  request.r(i5073[i + 0], i5073[i + 1], 1, i5072, '')
  }
  i5068.itemsInWater = i5072
  i5068.noDelayItemCount = i5069[18]
  i5068.breakHeartNoDelayThreshold = i5069[19]
  i5068.showSinkWaterTutorialOnStart = !!i5069[20]
  i5068.waitForBowlIntro = !!i5069[21]
  i5068.idleDelay = i5069[22]
  i5068.moveDuration = i5069[23]
  i5068.dragFadeDuration = i5069[24]
  i5068.clickScaleDuration = i5069[25]
  i5068.waitAtEndDuration = i5069[26]
  i5068.handZPosition = i5069[27]
  i5068.clickScaleMultiplier = i5069[28]
  i5068.moveEase = i5069[29]
  return i5068
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i5078 = root || request.c( 'SortChildByZPos' )
  var i5079 = data
  request.r(i5079[0], i5079[1], 0, i5078, 'transformToSort')
  var i5081 = i5079[2]
  var i5080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5081.length; i += 2) {
  request.r(i5081[i + 0], i5081[i + 1], 1, i5080, '')
  }
  i5078.childrenToSort = i5080
  i5078.zOffset = i5079[3]
  i5078.baseZ = i5079[4]
  return i5078
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i5084 = root || request.c( 'PhaseManager' )
  var i5085 = data
  var i5087 = i5085[0]
  var i5086 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.add(request.d('PhaseData', i5087[i + 0]));
  }
  i5084.phases = i5086
  i5084.transitionDuration = i5085[1]
  i5084.delayBeforeNextPhase = i5085[2]
  i5084.offScreenLeftX = i5085[3]
  i5084.offScreenRightX = i5085[4]
  i5084.centerScreenX = i5085[5]
  request.r(i5085[6], i5085[7], 0, i5084, 'phaseTransitionObject')
  i5084.phaseTransitionObjectDuration = i5085[8]
  i5084.currentPhaseIndex = i5085[9]
  i5084.currentStepCount = i5085[10]
  return i5084
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i5090 = root || request.c( 'PhaseData' )
  var i5091 = data
  request.r(i5091[0], i5091[1], 0, i5090, 'phaseObject')
  i5090.totalSteps = i5091[2]
  i5090.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i5091[3], i5090.onPhaseReady)
  return i5090
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5092 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5093 = data
  i5092.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5093[0], i5092.m_PersistentCalls)
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5095 = data
  i5094.aspect = i5095[0]
  i5094.orthographic = !!i5095[1]
  i5094.orthographicSize = i5095[2]
  i5094.backgroundColor = new pc.Color(i5095[3], i5095[4], i5095[5], i5095[6])
  i5094.nearClipPlane = i5095[7]
  i5094.farClipPlane = i5095[8]
  i5094.fieldOfView = i5095[9]
  i5094.depth = i5095[10]
  i5094.clearFlags = i5095[11]
  i5094.cullingMask = i5095[12]
  i5094.rect = i5095[13]
  request.r(i5095[14], i5095[15], 0, i5094, 'targetTexture')
  i5094.usePhysicalProperties = !!i5095[16]
  i5094.focalLength = i5095[17]
  i5094.sensorSize = new pc.Vec2( i5095[18], i5095[19] )
  i5094.lensShift = new pc.Vec2( i5095[20], i5095[21] )
  i5094.gateFit = i5095[22]
  i5094.commandBufferCount = i5095[23]
  i5094.cameraType = i5095[24]
  i5094.enabled = !!i5095[25]
  return i5094
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5097 = data
  request.r(i5097[0], i5097[1], 0, i5096, 'm_FirstSelected')
  i5096.m_sendNavigationEvents = !!i5097[2]
  i5096.m_DragThreshold = i5097[3]
  return i5096
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5098 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5099 = data
  i5098.m_HorizontalAxis = i5099[0]
  i5098.m_VerticalAxis = i5099[1]
  i5098.m_SubmitButton = i5099[2]
  i5098.m_CancelButton = i5099[3]
  i5098.m_InputActionsPerSecond = i5099[4]
  i5098.m_RepeatDelay = i5099[5]
  i5098.m_ForceModuleActive = !!i5099[6]
  i5098.m_SendPointerHoverToParent = !!i5099[7]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5101 = data
  i5100.center = new pc.Vec3( i5101[0], i5101[1], i5101[2] )
  i5100.radius = i5101[3]
  i5100.enabled = !!i5101[4]
  i5100.isTrigger = !!i5101[5]
  request.r(i5101[6], i5101[7], 0, i5100, 'material')
  return i5100
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i5102 = root || request.c( 'Ply_ToggleEvent' )
  var i5103 = data
  i5102.isOn = !!i5103[0]
  i5102.applyStateOnEnable = !!i5103[1]
  i5102.applyStateOnClick = !!i5103[2]
  request.r(i5103[3], i5103[4], 0, i5102, 'targetObject')
  i5102.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i5103[5], i5102.onTurnOn)
  i5102.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i5103[6], i5102.onTurnOff)
  return i5102
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i5104 = root || request.c( 'SinkBlock' )
  var i5105 = data
  request.r(i5105[0], i5105[1], 0, i5104, 'sink')
  i5104.startsInside = !!i5105[2]
  i5104.insideTargetType = i5105[3]
  request.r(i5105[4], i5105[5], 0, i5104, 'insideDefaultTarget')
  i5104.outsideTargetType = i5105[6]
  request.r(i5105[7], i5105[8], 0, i5104, 'outsideDefaultTarget')
  i5104.isDone = !!i5105[9]
  i5104.onProcess = !!i5105[10]
  request.r(i5105[11], i5105[12], 0, i5104, 'itemDraggable')
  request.r(i5105[13], i5105[14], 0, i5104, 'itemClickable')
  request.r(i5105[15], i5105[16], 0, i5104, 'itemStirring')
  request.r(i5105[17], i5105[18], 0, i5104, 'itemKnifeSpriteMaskCutter')
  request.r(i5105[19], i5105[20], 0, i5104, 'itemSpriteMaskPainter')
  request.r(i5105[21], i5105[22], 0, i5104, 'itemMoveToTarget')
  request.r(i5105[23], i5105[24], 0, i5104, 'animator')
  i5104.itemType = i5105[25]
  request.r(i5105[26], i5105[27], 0, i5104, 'spriteRenderer')
  i5104.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5105[28], i5104.onKnifeIn)
  i5104.heartEffectScale = i5105[29]
  i5104.breakHeartEffectScale = i5105[30]
  i5104.blinkEffectScale = i5105[31]
  i5104.mergeEffectScale = i5105[32]
  i5104.playMoveToTargetFinishSound = !!i5105[33]
  i5104.moveToTargetFinishFxType = i5105[34]
  return i5104
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i5106 = root || request.c( 'ItemDraggable' )
  var i5107 = data
  i5106.isDraggable = !!i5107[0]
  request.r(i5107[1], i5107[2], 0, i5106, 'returnTransform')
  i5106.setParentToReturnTransform = !!i5107[3]
  i5106.returnToExactReturnTransformPosition = !!i5107[4]
  i5106.targetItemType = i5107[5]
  request.r(i5107[6], i5107[7], 0, i5106, 'item')
  i5106.checkState = !!i5107[8]
  request.r(i5107[9], i5107[10], 0, i5106, 'shadowObject')
  i5106.playReturnToStartFinishSound = !!i5107[11]
  i5106.returnToStartFinishFxType = i5107[12]
  i5106.spawnBreakHeartOnDropFail = !!i5107[13]
  i5106.playBeginDragSound = !!i5107[14]
  i5106.beginDragFxType = i5107[15]
  i5106.liftOffset = i5107[16]
  i5106.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i5107[17], i5106.onBeginDrag)
  i5106.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i5107[18], i5106.onDropSuccess)
  i5106.onDropFail = request.d('UnityEngine.Events.UnityEvent', i5107[19], i5106.onDropFail)
  return i5106
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i5108 = root || request.c( 'ItemMoveToTarget' )
  var i5109 = data
  request.r(i5109[0], i5109[1], 0, i5108, 'defaultTarget')
  i5108.duration = i5109[2]
  i5108.easeType = i5109[3]
  i5108.moveType = i5109[4]
  i5108.jumpPower = i5109[5]
  i5108.numJumps = i5109[6]
  i5108.rotate360DuringJump = !!i5109[7]
  i5108.flipRotate = !!i5109[8]
  i5108.angleRotate = i5109[9]
  i5108.setParentToTarget = !!i5109[10]
  i5108.onComplete = request.d('UnityEngine.Events.UnityEvent', i5109[11], i5108.onComplete)
  i5108.lockInputWhileMoving = !!i5109[12]
  i5108.resetParentBeforeMove = !!i5109[13]
  return i5108
}

Deserializers["Sink"] = function (request, data, root) {
  var i5110 = root || request.c( 'Sink' )
  var i5111 = data
  i5110.isClose = !!i5111[0]
  i5110.isWaterDrop = !!i5111[1]
  i5110.isWaterIn = !!i5111[2]
  request.r(i5111[3], i5111[4], 0, i5110, 'waterSplashPos')
  request.r(i5111[5], i5111[6], 0, i5110, 'faucetAnimator')
  request.r(i5111[7], i5111[8], 0, i5110, 'basinAnimator')
  request.r(i5111[9], i5111[10], 0, i5110, 'waterDrop')
  request.r(i5111[11], i5111[12], 0, i5110, 'waterIn')
  request.r(i5111[13], i5111[14], 0, i5110, 'basinWaterRenderer')
  i5110.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i5111[15], i5111[16], i5111[17], i5111[18])
  i5110.fullWaterRect = UnityEngine.Rect.MinMaxRect(i5111[19], i5111[20], i5111[21], i5111[22])
  i5110.waterRiseDuration = i5111[23]
  i5110.waterFallDuration = i5111[24]
  i5110.waterRiseEase = i5111[25]
  i5110.waterFallEase = i5111[26]
  i5110.drawWaterRects = !!i5111[27]
  i5110.emptyRectColor = new pc.Color(i5111[28], i5111[29], i5111[30], i5111[31])
  i5110.fullRectColor = new pc.Color(i5111[32], i5111[33], i5111[34], i5111[35])
  request.r(i5111[36], i5111[37], 0, i5110, 'waterDropTransform')
  i5110.emptyWaterDropPoint = new pc.Vec3( i5111[38], i5111[39], i5111[40] )
  i5110.fullWaterDropPoint = new pc.Vec3( i5111[41], i5111[42], i5111[43] )
  i5110.drawWaterDropPoints = !!i5111[44]
  i5110.waterDropPointRadius = i5111[45]
  i5110.emptyWaterDropPointColor = new pc.Color(i5111[46], i5111[47], i5111[48], i5111[49])
  i5110.fullWaterDropPointColor = new pc.Color(i5111[50], i5111[51], i5111[52], i5111[53])
  var i5113 = i5111[54]
  var i5112 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i5113.length; i += 2) {
  request.r(i5113[i + 0], i5113[i + 1], 1, i5112, '')
  }
  i5110.inWaterItems = i5112
  i5110.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i5111[55], i5110.onWaterIn)
  i5110.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i5111[56], i5110.onNoWaterIn)
  i5110.isDone = !!i5111[57]
  i5110.onProcess = !!i5111[58]
  request.r(i5111[59], i5111[60], 0, i5110, 'itemDraggable')
  request.r(i5111[61], i5111[62], 0, i5110, 'itemClickable')
  request.r(i5111[63], i5111[64], 0, i5110, 'itemStirring')
  request.r(i5111[65], i5111[66], 0, i5110, 'itemKnifeSpriteMaskCutter')
  request.r(i5111[67], i5111[68], 0, i5110, 'itemSpriteMaskPainter')
  request.r(i5111[69], i5111[70], 0, i5110, 'itemMoveToTarget')
  request.r(i5111[71], i5111[72], 0, i5110, 'animator')
  i5110.itemType = i5111[73]
  request.r(i5111[74], i5111[75], 0, i5110, 'spriteRenderer')
  i5110.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5111[76], i5110.onKnifeIn)
  i5110.heartEffectScale = i5111[77]
  i5110.breakHeartEffectScale = i5111[78]
  i5110.blinkEffectScale = i5111[79]
  i5110.mergeEffectScale = i5111[80]
  i5110.playMoveToTargetFinishSound = !!i5111[81]
  i5110.moveToTargetFinishFxType = i5111[82]
  i5110.waterState = i5111[83]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5115 = data
  i5114.center = new pc.Vec3( i5115[0], i5115[1], i5115[2] )
  i5114.size = new pc.Vec3( i5115[3], i5115[4], i5115[5] )
  i5114.enabled = !!i5115[6]
  i5114.isTrigger = !!i5115[7]
  request.r(i5115[8], i5115[9], 0, i5114, 'material')
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5117 = data
  i5116.frontSortingLayerID = i5117[0]
  i5116.frontSortingOrder = i5117[1]
  i5116.backSortingLayerID = i5117[2]
  i5116.backSortingOrder = i5117[3]
  i5116.alphaCutoff = i5117[4]
  request.r(i5117[5], i5117[6], 0, i5116, 'sprite')
  i5116.tileMode = i5117[7]
  i5116.isCustomRangeActive = !!i5117[8]
  i5116.spriteSortPoint = i5117[9]
  i5116.enabled = !!i5117[10]
  request.r(i5117[11], i5117[12], 0, i5116, 'sharedMaterial')
  var i5119 = i5117[13]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 2) {
  request.r(i5119[i + 0], i5119[i + 1], 2, i5118, '')
  }
  i5116.sharedMaterials = i5118
  i5116.receiveShadows = !!i5117[14]
  i5116.shadowCastingMode = i5117[15]
  i5116.sortingLayerID = i5117[16]
  i5116.sortingOrder = i5117[17]
  i5116.lightmapIndex = i5117[18]
  i5116.lightmapSceneIndex = i5117[19]
  i5116.lightmapScaleOffset = new pc.Vec4( i5117[20], i5117[21], i5117[22], i5117[23] )
  i5116.lightProbeUsage = i5117[24]
  i5116.reflectionProbeUsage = i5117[25]
  return i5116
}

Deserializers["Item"] = function (request, data, root) {
  var i5120 = root || request.c( 'Item' )
  var i5121 = data
  i5120.isDone = !!i5121[0]
  i5120.onProcess = !!i5121[1]
  request.r(i5121[2], i5121[3], 0, i5120, 'itemDraggable')
  request.r(i5121[4], i5121[5], 0, i5120, 'itemClickable')
  request.r(i5121[6], i5121[7], 0, i5120, 'itemStirring')
  request.r(i5121[8], i5121[9], 0, i5120, 'itemKnifeSpriteMaskCutter')
  request.r(i5121[10], i5121[11], 0, i5120, 'itemSpriteMaskPainter')
  request.r(i5121[12], i5121[13], 0, i5120, 'itemMoveToTarget')
  request.r(i5121[14], i5121[15], 0, i5120, 'animator')
  i5120.itemType = i5121[16]
  request.r(i5121[17], i5121[18], 0, i5120, 'spriteRenderer')
  i5120.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5121[19], i5120.onKnifeIn)
  i5120.heartEffectScale = i5121[20]
  i5120.breakHeartEffectScale = i5121[21]
  i5120.blinkEffectScale = i5121[22]
  i5120.mergeEffectScale = i5121[23]
  i5120.playMoveToTargetFinishSound = !!i5121[24]
  i5120.moveToTargetFinishFxType = i5121[25]
  return i5120
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i5122 = root || request.c( 'Ply_BobEffect' )
  var i5123 = data
  i5122.playOnEnable = !!i5123[0]
  i5122.useLocalMove = !!i5123[1]
  i5122.bobOffset = new pc.Vec3( i5123[2], i5123[3], i5123[4] )
  i5122.duration = i5123[5]
  i5122.ease = i5123[6]
  return i5122
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i5124 = root || request.c( 'Ply_TimerEvent' )
  var i5125 = data
  i5124.duration = i5125[0]
  i5124.playOnEnable = !!i5125[1]
  i5124.ignoreTimeScale = !!i5125[2]
  i5124.autoDisableOnComplete = !!i5125[3]
  i5124.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i5125[4], i5124.onTimerStart)
  i5124.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i5125[5], i5124.onTimerComplete)
  i5124.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i5125[6], i5124.onTimerStop)
  return i5124
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i5126 = root || request.c( 'InWaterItem' )
  var i5127 = data
  request.r(i5127[0], i5127[1], 0, i5126, 'waterTarget')
  request.r(i5127[2], i5127[3], 0, i5126, 'cuttingBoardTarget')
  request.r(i5127[4], i5127[5], 0, i5126, 'plateTarget')
  var i5129 = i5127[6]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 2) {
  request.r(i5129[i + 0], i5129[i + 1], 2, i5128, '')
  }
  i5126.childObject = i5128
  request.r(i5127[7], i5127[8], 0, i5126, 'ply_TimerEvent')
  request.r(i5127[9], i5127[10], 0, i5126, 'ply_BobEffect')
  request.r(i5127[11], i5127[12], 0, i5126, 'collider1')
  request.r(i5127[13], i5127[14], 0, i5126, 'sink')
  i5126.isInWater = !!i5127[15]
  i5126.isOnCuttingBoard = !!i5127[16]
  i5126.isOnPlate = !!i5127[17]
  i5126.isClean = !!i5127[18]
  i5126.isCutDone = !!i5127[19]
  i5126.cuttingBoardColliderRadiusMultiplier = i5127[20]
  i5126.jumpToPlatePower = i5127[21]
  i5126.jumpToPlateDuration = i5127[22]
  i5126.jumpToPlateAfterCutDone = !!i5127[23]
  request.r(i5127[24], i5127[25], 0, i5126, 'plateFoodShadow')
  i5126.platePunchScale = new pc.Vec3( i5127[26], i5127[27], i5127[28] )
  i5126.platePunchDuration = i5127[29]
  i5126.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i5127[30], i5126.onMoveToCuttingBoardComplete)
  i5126.isDone = !!i5127[31]
  i5126.onProcess = !!i5127[32]
  request.r(i5127[33], i5127[34], 0, i5126, 'itemDraggable')
  request.r(i5127[35], i5127[36], 0, i5126, 'itemClickable')
  request.r(i5127[37], i5127[38], 0, i5126, 'itemStirring')
  request.r(i5127[39], i5127[40], 0, i5126, 'itemKnifeSpriteMaskCutter')
  request.r(i5127[41], i5127[42], 0, i5126, 'itemSpriteMaskPainter')
  request.r(i5127[43], i5127[44], 0, i5126, 'itemMoveToTarget')
  request.r(i5127[45], i5127[46], 0, i5126, 'animator')
  i5126.itemType = i5127[47]
  request.r(i5127[48], i5127[49], 0, i5126, 'spriteRenderer')
  i5126.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5127[50], i5126.onKnifeIn)
  i5126.heartEffectScale = i5127[51]
  i5126.breakHeartEffectScale = i5127[52]
  i5126.blinkEffectScale = i5127[53]
  i5126.mergeEffectScale = i5127[54]
  i5126.playMoveToTargetFinishSound = !!i5127[55]
  i5126.moveToTargetFinishFxType = i5127[56]
  return i5126
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i5130 = root || request.c( 'ItemClickable' )
  var i5131 = data
  i5130.requiredClicks = i5131[0]
  i5130.infiniteClick = !!i5131[1]
  i5130.canClick = !!i5131[2]
  i5130.disableAfterClick = !!i5131[3]
  i5130.onClick = request.d('UnityEngine.Events.UnityEvent', i5131[4], i5130.onClick)
  var i5133 = i5131[5]
  var i5132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.add(request.d('UnityEngine.Events.UnityEvent', i5133[i + 0]));
  }
  i5130.sequentialOnClicks = i5132
  i5130.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i5131[6], i5130.onClickComplete)
  return i5130
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i5136 = root || request.c( 'CuttingBoard' )
  var i5137 = data
  i5136.punchScale = new pc.Vec3( i5137[0], i5137[1], i5137[2] )
  i5136.punchDuration = i5137[3]
  i5136.isDone = !!i5137[4]
  i5136.onProcess = !!i5137[5]
  request.r(i5137[6], i5137[7], 0, i5136, 'itemDraggable')
  request.r(i5137[8], i5137[9], 0, i5136, 'itemClickable')
  request.r(i5137[10], i5137[11], 0, i5136, 'itemStirring')
  request.r(i5137[12], i5137[13], 0, i5136, 'itemKnifeSpriteMaskCutter')
  request.r(i5137[14], i5137[15], 0, i5136, 'itemSpriteMaskPainter')
  request.r(i5137[16], i5137[17], 0, i5136, 'itemMoveToTarget')
  request.r(i5137[18], i5137[19], 0, i5136, 'animator')
  i5136.itemType = i5137[20]
  request.r(i5137[21], i5137[22], 0, i5136, 'spriteRenderer')
  i5136.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5137[23], i5136.onKnifeIn)
  i5136.heartEffectScale = i5137[24]
  i5136.breakHeartEffectScale = i5137[25]
  i5136.blinkEffectScale = i5137[26]
  i5136.mergeEffectScale = i5137[27]
  i5136.playMoveToTargetFinishSound = !!i5137[28]
  i5136.moveToTargetFinishFxType = i5137[29]
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5139 = data
  i5138.center = new pc.Vec3( i5139[0], i5139[1], i5139[2] )
  i5138.radius = i5139[3]
  i5138.height = i5139[4]
  i5138.direction = i5139[5]
  i5138.enabled = !!i5139[6]
  i5138.isTrigger = !!i5139[7]
  request.r(i5139[8], i5139[9], 0, i5138, 'material')
  return i5138
}

Deserializers["Knife"] = function (request, data, root) {
  var i5140 = root || request.c( 'Knife' )
  var i5141 = data
  request.r(i5141[0], i5141[1], 0, i5140, 'knifeIdle')
  request.r(i5141[2], i5141[3], 0, i5140, 'knifeOnDrag')
  i5140.knifeOnDragRotationOffset = new pc.Vec3( i5141[4], i5141[5], i5141[6] )
  i5140.knifeOnDragRotateDuration = i5141[7]
  i5140.knifeOnDragRotateEase = i5141[8]
  i5140.isDone = !!i5141[9]
  i5140.onProcess = !!i5141[10]
  request.r(i5141[11], i5141[12], 0, i5140, 'itemDraggable')
  request.r(i5141[13], i5141[14], 0, i5140, 'itemClickable')
  request.r(i5141[15], i5141[16], 0, i5140, 'itemStirring')
  request.r(i5141[17], i5141[18], 0, i5140, 'itemKnifeSpriteMaskCutter')
  request.r(i5141[19], i5141[20], 0, i5140, 'itemSpriteMaskPainter')
  request.r(i5141[21], i5141[22], 0, i5140, 'itemMoveToTarget')
  request.r(i5141[23], i5141[24], 0, i5140, 'animator')
  i5140.itemType = i5141[25]
  request.r(i5141[26], i5141[27], 0, i5140, 'spriteRenderer')
  i5140.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5141[28], i5140.onKnifeIn)
  i5140.heartEffectScale = i5141[29]
  i5140.breakHeartEffectScale = i5141[30]
  i5140.blinkEffectScale = i5141[31]
  i5140.mergeEffectScale = i5141[32]
  i5140.playMoveToTargetFinishSound = !!i5141[33]
  i5140.moveToTargetFinishFxType = i5141[34]
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5143 = data
  i5142.ambientIntensity = i5143[0]
  i5142.reflectionIntensity = i5143[1]
  i5142.ambientMode = i5143[2]
  i5142.ambientLight = new pc.Color(i5143[3], i5143[4], i5143[5], i5143[6])
  i5142.ambientSkyColor = new pc.Color(i5143[7], i5143[8], i5143[9], i5143[10])
  i5142.ambientGroundColor = new pc.Color(i5143[11], i5143[12], i5143[13], i5143[14])
  i5142.ambientEquatorColor = new pc.Color(i5143[15], i5143[16], i5143[17], i5143[18])
  i5142.fogColor = new pc.Color(i5143[19], i5143[20], i5143[21], i5143[22])
  i5142.fogEndDistance = i5143[23]
  i5142.fogStartDistance = i5143[24]
  i5142.fogDensity = i5143[25]
  i5142.fog = !!i5143[26]
  request.r(i5143[27], i5143[28], 0, i5142, 'skybox')
  i5142.fogMode = i5143[29]
  var i5145 = i5143[30]
  var i5144 = []
  for(var i = 0; i < i5145.length; i += 1) {
    i5144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5145[i + 0]) );
  }
  i5142.lightmaps = i5144
  i5142.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5143[31], i5142.lightProbes)
  i5142.lightmapsMode = i5143[32]
  i5142.mixedBakeMode = i5143[33]
  i5142.environmentLightingMode = i5143[34]
  i5142.ambientProbe = new pc.SphericalHarmonicsL2(i5143[35])
  i5142.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5143[36])
  i5142.useReferenceAmbientProbe = !!i5143[37]
  request.r(i5143[38], i5143[39], 0, i5142, 'customReflection')
  request.r(i5143[40], i5143[41], 0, i5142, 'defaultReflection')
  i5142.defaultReflectionMode = i5143[42]
  i5142.defaultReflectionResolution = i5143[43]
  i5142.sunLightObjectId = i5143[44]
  i5142.pixelLightCount = i5143[45]
  i5142.defaultReflectionHDR = !!i5143[46]
  i5142.hasLightDataAsset = !!i5143[47]
  i5142.hasManualGenerate = !!i5143[48]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5149 = data
  request.r(i5149[0], i5149[1], 0, i5148, 'lightmapColor')
  request.r(i5149[2], i5149[3], 0, i5148, 'lightmapDirection')
  request.r(i5149[4], i5149[5], 0, i5148, 'shadowMask')
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5150 = root || new UnityEngine.LightProbes()
  var i5151 = data
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5159 = data
  var i5161 = i5159[0]
  var i5160 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5161.length; i += 1) {
    i5160.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5161[i + 0]));
  }
  i5158.ShaderCompilationErrors = i5160
  i5158.name = i5159[1]
  i5158.guid = i5159[2]
  var i5163 = i5159[3]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.push( i5163[i + 0] );
  }
  i5158.shaderDefinedKeywords = i5162
  var i5165 = i5159[4]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5165[i + 0]) );
  }
  i5158.passes = i5164
  var i5167 = i5159[5]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 1) {
    i5166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5167[i + 0]) );
  }
  i5158.usePasses = i5166
  var i5169 = i5159[6]
  var i5168 = []
  for(var i = 0; i < i5169.length; i += 1) {
    i5168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5169[i + 0]) );
  }
  i5158.defaultParameterValues = i5168
  request.r(i5159[7], i5159[8], 0, i5158, 'unityFallbackShader')
  i5158.readDepth = !!i5159[9]
  i5158.hasDepthOnlyPass = !!i5159[10]
  i5158.isCreatedByShaderGraph = !!i5159[11]
  i5158.disableBatching = !!i5159[12]
  i5158.compiled = !!i5159[13]
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5173 = data
  i5172.shaderName = i5173[0]
  i5172.errorMessage = i5173[1]
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5178 = root || new pc.UnityShaderPass()
  var i5179 = data
  i5178.id = i5179[0]
  i5178.subShaderIndex = i5179[1]
  i5178.name = i5179[2]
  i5178.passType = i5179[3]
  i5178.grabPassTextureName = i5179[4]
  i5178.usePass = !!i5179[5]
  i5178.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[6], i5178.zTest)
  i5178.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[7], i5178.zWrite)
  i5178.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[8], i5178.culling)
  i5178.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5179[9], i5178.blending)
  i5178.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5179[10], i5178.alphaBlending)
  i5178.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[11], i5178.colorWriteMask)
  i5178.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[12], i5178.offsetUnits)
  i5178.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[13], i5178.offsetFactor)
  i5178.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[14], i5178.stencilRef)
  i5178.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[15], i5178.stencilReadMask)
  i5178.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5179[16], i5178.stencilWriteMask)
  i5178.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5179[17], i5178.stencilOp)
  i5178.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5179[18], i5178.stencilOpFront)
  i5178.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5179[19], i5178.stencilOpBack)
  var i5181 = i5179[20]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5181[i + 0]) );
  }
  i5178.tags = i5180
  var i5183 = i5179[21]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( i5183[i + 0] );
  }
  i5178.passDefinedKeywords = i5182
  var i5185 = i5179[22]
  var i5184 = []
  for(var i = 0; i < i5185.length; i += 1) {
    i5184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5185[i + 0]) );
  }
  i5178.passDefinedKeywordGroups = i5184
  var i5187 = i5179[23]
  var i5186 = []
  for(var i = 0; i < i5187.length; i += 1) {
    i5186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5187[i + 0]) );
  }
  i5178.variants = i5186
  var i5189 = i5179[24]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 1) {
    i5188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5189[i + 0]) );
  }
  i5178.excludedVariants = i5188
  i5178.hasDepthReader = !!i5179[25]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5191 = data
  i5190.val = i5191[0]
  i5190.name = i5191[1]
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5193 = data
  i5192.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5193[0], i5192.src)
  i5192.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5193[1], i5192.dst)
  i5192.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5193[2], i5192.op)
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5195 = data
  i5194.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5195[0], i5194.pass)
  i5194.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5195[1], i5194.fail)
  i5194.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5195[2], i5194.zFail)
  i5194.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5195[3], i5194.comp)
  return i5194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5199 = data
  i5198.name = i5199[0]
  i5198.value = i5199[1]
  return i5198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5203 = data
  var i5205 = i5203[0]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( i5205[i + 0] );
  }
  i5202.keywords = i5204
  i5202.hasDiscard = !!i5203[1]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5209 = data
  i5208.passId = i5209[0]
  i5208.subShaderIndex = i5209[1]
  var i5211 = i5209[2]
  var i5210 = []
  for(var i = 0; i < i5211.length; i += 1) {
    i5210.push( i5211[i + 0] );
  }
  i5208.keywords = i5210
  i5208.vertexProgram = i5209[3]
  i5208.fragmentProgram = i5209[4]
  i5208.exportedForWebGl2 = !!i5209[5]
  i5208.readDepth = !!i5209[6]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'shader')
  i5214.pass = i5215[2]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5219 = data
  i5218.name = i5219[0]
  i5218.type = i5219[1]
  i5218.value = new pc.Vec4( i5219[2], i5219[3], i5219[4], i5219[5] )
  i5218.textureValue = i5219[6]
  i5218.shaderPropertyFlag = i5219[7]
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5221 = data
  i5220.name = i5221[0]
  request.r(i5221[1], i5221[2], 0, i5220, 'texture')
  i5220.aabb = i5221[3]
  i5220.vertices = i5221[4]
  i5220.triangles = i5221[5]
  i5220.textureRect = UnityEngine.Rect.MinMaxRect(i5221[6], i5221[7], i5221[8], i5221[9])
  i5220.packedRect = UnityEngine.Rect.MinMaxRect(i5221[10], i5221[11], i5221[12], i5221[13])
  i5220.border = new pc.Vec4( i5221[14], i5221[15], i5221[16], i5221[17] )
  i5220.transparency = i5221[18]
  i5220.bounds = i5221[19]
  i5220.pixelsPerUnit = i5221[20]
  i5220.textureWidth = i5221[21]
  i5220.textureHeight = i5221[22]
  i5220.nativeSize = new pc.Vec2( i5221[23], i5221[24] )
  i5220.pivot = new pc.Vec2( i5221[25], i5221[26] )
  i5220.textureRectOffset = new pc.Vec2( i5221[27], i5221[28] )
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5223 = data
  i5222.name = i5223[0]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5225 = data
  i5224.name = i5225[0]
  i5224.wrapMode = i5225[1]
  i5224.isLooping = !!i5225[2]
  i5224.length = i5225[3]
  var i5227 = i5225[4]
  var i5226 = []
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5227[i + 0]) );
  }
  i5224.curves = i5226
  var i5229 = i5225[5]
  var i5228 = []
  for(var i = 0; i < i5229.length; i += 1) {
    i5228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5229[i + 0]) );
  }
  i5224.events = i5228
  i5224.halfPrecision = !!i5225[6]
  i5224._frameRate = i5225[7]
  i5224.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5225[8], i5224.localBounds)
  i5224.hasMuscleCurves = !!i5225[9]
  var i5231 = i5225[10]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.push( i5231[i + 0] );
  }
  i5224.clipMuscleConstant = i5230
  i5224.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5225[11], i5224.clipBindingConstant)
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5235 = data
  i5234.path = i5235[0]
  i5234.hash = i5235[1]
  i5234.componentType = i5235[2]
  i5234.property = i5235[3]
  i5234.keys = i5235[4]
  var i5237 = i5235[5]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5237[i + 0]) );
  }
  i5234.objectReferenceKeys = i5236
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5241 = data
  i5240.time = i5241[0]
  request.r(i5241[1], i5241[2], 0, i5240, 'value')
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5245 = data
  i5244.functionName = i5245[0]
  i5244.floatParameter = i5245[1]
  i5244.intParameter = i5245[2]
  i5244.stringParameter = i5245[3]
  request.r(i5245[4], i5245[5], 0, i5244, 'objectReferenceParameter')
  i5244.time = i5245[6]
  return i5244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5247 = data
  i5246.center = new pc.Vec3( i5247[0], i5247[1], i5247[2] )
  i5246.extends = new pc.Vec3( i5247[3], i5247[4], i5247[5] )
  return i5246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5251 = data
  var i5253 = i5251[0]
  var i5252 = []
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.push( i5253[i + 0] );
  }
  i5250.genericBindings = i5252
  var i5255 = i5251[1]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.push( i5255[i + 0] );
  }
  i5250.pptrCurveMapping = i5254
  return i5250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5257 = data
  i5256.name = i5257[0]
  var i5259 = i5257[1]
  var i5258 = []
  for(var i = 0; i < i5259.length; i += 1) {
    i5258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5259[i + 0]) );
  }
  i5256.layers = i5258
  var i5261 = i5257[2]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5261[i + 0]) );
  }
  i5256.parameters = i5260
  i5256.animationClips = i5257[3]
  i5256.avatarUnsupported = i5257[4]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5265 = data
  i5264.name = i5265[0]
  i5264.defaultWeight = i5265[1]
  i5264.blendingMode = i5265[2]
  i5264.avatarMask = i5265[3]
  i5264.syncedLayerIndex = i5265[4]
  i5264.syncedLayerAffectsTiming = !!i5265[5]
  i5264.syncedLayers = i5265[6]
  i5264.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5265[7], i5264.stateMachine)
  return i5264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5267 = data
  i5266.id = i5267[0]
  i5266.name = i5267[1]
  i5266.path = i5267[2]
  var i5269 = i5267[3]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5269[i + 0]) );
  }
  i5266.states = i5268
  var i5271 = i5267[4]
  var i5270 = []
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5271[i + 0]) );
  }
  i5266.machines = i5270
  var i5273 = i5267[5]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 1) {
    i5272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5273[i + 0]) );
  }
  i5266.entryStateTransitions = i5272
  var i5275 = i5267[6]
  var i5274 = []
  for(var i = 0; i < i5275.length; i += 1) {
    i5274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5275[i + 0]) );
  }
  i5266.exitStateTransitions = i5274
  var i5277 = i5267[7]
  var i5276 = []
  for(var i = 0; i < i5277.length; i += 1) {
    i5276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5277[i + 0]) );
  }
  i5266.anyStateTransitions = i5276
  i5266.defaultStateId = i5267[8]
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5281 = data
  i5280.id = i5281[0]
  i5280.name = i5281[1]
  i5280.cycleOffset = i5281[2]
  i5280.cycleOffsetParameter = i5281[3]
  i5280.cycleOffsetParameterActive = !!i5281[4]
  i5280.mirror = !!i5281[5]
  i5280.mirrorParameter = i5281[6]
  i5280.mirrorParameterActive = !!i5281[7]
  i5280.motionId = i5281[8]
  i5280.nameHash = i5281[9]
  i5280.fullPathHash = i5281[10]
  i5280.speed = i5281[11]
  i5280.speedParameter = i5281[12]
  i5280.speedParameterActive = !!i5281[13]
  i5280.tag = i5281[14]
  i5280.tagHash = i5281[15]
  i5280.writeDefaultValues = !!i5281[16]
  var i5283 = i5281[17]
  var i5282 = []
  for(var i = 0; i < i5283.length; i += 2) {
  request.r(i5283[i + 0], i5283[i + 1], 2, i5282, '')
  }
  i5280.behaviours = i5282
  var i5285 = i5281[18]
  var i5284 = []
  for(var i = 0; i < i5285.length; i += 1) {
    i5284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5285[i + 0]) );
  }
  i5280.transitions = i5284
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5291 = data
  i5290.fullPath = i5291[0]
  i5290.canTransitionToSelf = !!i5291[1]
  i5290.duration = i5291[2]
  i5290.exitTime = i5291[3]
  i5290.hasExitTime = !!i5291[4]
  i5290.hasFixedDuration = !!i5291[5]
  i5290.interruptionSource = i5291[6]
  i5290.offset = i5291[7]
  i5290.orderedInterruption = !!i5291[8]
  i5290.destinationStateId = i5291[9]
  i5290.isExit = !!i5291[10]
  i5290.mute = !!i5291[11]
  i5290.solo = !!i5291[12]
  var i5293 = i5291[13]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5293[i + 0]) );
  }
  i5290.conditions = i5292
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5299 = data
  i5298.destinationStateId = i5299[0]
  i5298.isExit = !!i5299[1]
  i5298.mute = !!i5299[2]
  i5298.solo = !!i5299[3]
  var i5301 = i5299[4]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5301[i + 0]) );
  }
  i5298.conditions = i5300
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5305 = data
  i5304.defaultBool = !!i5305[0]
  i5304.defaultFloat = i5305[1]
  i5304.defaultInt = i5305[2]
  i5304.name = i5305[3]
  i5304.nameHash = i5305[4]
  i5304.type = i5305[5]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5309 = data
  i5308.mode = i5309[0]
  i5308.parameter = i5309[1]
  i5308.threshold = i5309[2]
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5311 = data
  i5310.name = i5311[0]
  i5310.bytes64 = i5311[1]
  i5310.data = i5311[2]
  return i5310
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5312 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5313 = data
  i5312.normalStyle = i5313[0]
  i5312.normalSpacingOffset = i5313[1]
  i5312.boldStyle = i5313[2]
  i5312.boldSpacing = i5313[3]
  i5312.italicStyle = i5313[4]
  i5312.tabSize = i5313[5]
  request.r(i5313[6], i5313[7], 0, i5312, 'atlas')
  i5312.m_SourceFontFileGUID = i5313[8]
  i5312.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5313[9], i5312.m_CreationSettings)
  request.r(i5313[10], i5313[11], 0, i5312, 'm_SourceFontFile')
  i5312.m_SourceFontFilePath = i5313[12]
  i5312.m_AtlasPopulationMode = i5313[13]
  i5312.InternalDynamicOS = !!i5313[14]
  var i5315 = i5313[15]
  var i5314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.add(request.d('UnityEngine.TextCore.Glyph', i5315[i + 0]));
  }
  i5312.m_GlyphTable = i5314
  var i5317 = i5313[16]
  var i5316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.add(request.d('TMPro.TMP_Character', i5317[i + 0]));
  }
  i5312.m_CharacterTable = i5316
  var i5319 = i5313[17]
  var i5318 = []
  for(var i = 0; i < i5319.length; i += 2) {
  request.r(i5319[i + 0], i5319[i + 1], 2, i5318, '')
  }
  i5312.m_AtlasTextures = i5318
  i5312.m_AtlasTextureIndex = i5313[18]
  i5312.m_IsMultiAtlasTexturesEnabled = !!i5313[19]
  i5312.m_GetFontFeatures = !!i5313[20]
  i5312.m_ClearDynamicDataOnBuild = !!i5313[21]
  i5312.m_AtlasWidth = i5313[22]
  i5312.m_AtlasHeight = i5313[23]
  i5312.m_AtlasPadding = i5313[24]
  i5312.m_AtlasRenderMode = i5313[25]
  var i5321 = i5313[26]
  var i5320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.add(request.d('UnityEngine.TextCore.GlyphRect', i5321[i + 0]));
  }
  i5312.m_UsedGlyphRects = i5320
  var i5323 = i5313[27]
  var i5322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.add(request.d('UnityEngine.TextCore.GlyphRect', i5323[i + 0]));
  }
  i5312.m_FreeGlyphRects = i5322
  i5312.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5313[28], i5312.m_FontFeatureTable)
  i5312.m_ShouldReimportFontFeatures = !!i5313[29]
  var i5325 = i5313[30]
  var i5324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5325.length; i += 2) {
  request.r(i5325[i + 0], i5325[i + 1], 1, i5324, '')
  }
  i5312.m_FallbackFontAssetTable = i5324
  var i5327 = i5313[31]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('TMPro.TMP_FontWeightPair', i5327[i + 0]) );
  }
  i5312.m_FontWeightTable = i5326
  var i5329 = i5313[32]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('TMPro.TMP_FontWeightPair', i5329[i + 0]) );
  }
  i5312.fontWeights = i5328
  i5312.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5313[33], i5312.m_fontInfo)
  var i5331 = i5313[34]
  var i5330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.add(request.d('TMPro.TMP_Glyph', i5331[i + 0]));
  }
  i5312.m_glyphInfoList = i5330
  i5312.m_KerningTable = request.d('TMPro.KerningTable', i5313[35], i5312.m_KerningTable)
  var i5333 = i5313[36]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5333.length; i += 2) {
  request.r(i5333[i + 0], i5333[i + 1], 1, i5332, '')
  }
  i5312.fallbackFontAssets = i5332
  i5312.m_Version = i5313[37]
  i5312.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5313[38], i5312.m_FaceInfo)
  request.r(i5313[39], i5313[40], 0, i5312, 'm_Material')
  return i5312
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5334 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5335 = data
  i5334.sourceFontFileName = i5335[0]
  i5334.sourceFontFileGUID = i5335[1]
  i5334.faceIndex = i5335[2]
  i5334.pointSizeSamplingMode = i5335[3]
  i5334.pointSize = i5335[4]
  i5334.padding = i5335[5]
  i5334.paddingMode = i5335[6]
  i5334.packingMode = i5335[7]
  i5334.atlasWidth = i5335[8]
  i5334.atlasHeight = i5335[9]
  i5334.characterSetSelectionMode = i5335[10]
  i5334.characterSequence = i5335[11]
  i5334.referencedFontAssetGUID = i5335[12]
  i5334.referencedTextAssetGUID = i5335[13]
  i5334.fontStyle = i5335[14]
  i5334.fontStyleModifier = i5335[15]
  i5334.renderMode = i5335[16]
  i5334.includeFontFeatures = !!i5335[17]
  return i5334
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5338 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5339 = data
  i5338.m_Index = i5339[0]
  i5338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5339[1], i5338.m_Metrics)
  i5338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5339[2], i5338.m_GlyphRect)
  i5338.m_Scale = i5339[3]
  i5338.m_AtlasIndex = i5339[4]
  i5338.m_ClassDefinitionType = i5339[5]
  return i5338
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5340 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5341 = data
  i5340.m_Width = i5341[0]
  i5340.m_Height = i5341[1]
  i5340.m_HorizontalBearingX = i5341[2]
  i5340.m_HorizontalBearingY = i5341[3]
  i5340.m_HorizontalAdvance = i5341[4]
  return i5340
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5342 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5343 = data
  i5342.m_X = i5343[0]
  i5342.m_Y = i5343[1]
  i5342.m_Width = i5343[2]
  i5342.m_Height = i5343[3]
  return i5342
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5346 = root || request.c( 'TMPro.TMP_Character' )
  var i5347 = data
  i5346.m_ElementType = i5347[0]
  i5346.m_Unicode = i5347[1]
  i5346.m_GlyphIndex = i5347[2]
  i5346.m_Scale = i5347[3]
  return i5346
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5352 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5353 = data
  var i5355 = i5353[0]
  var i5354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.add(request.d('TMPro.MultipleSubstitutionRecord', i5355[i + 0]));
  }
  i5352.m_MultipleSubstitutionRecords = i5354
  var i5357 = i5353[1]
  var i5356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5357.length; i += 1) {
    i5356.add(request.d('TMPro.LigatureSubstitutionRecord', i5357[i + 0]));
  }
  i5352.m_LigatureSubstitutionRecords = i5356
  var i5359 = i5353[2]
  var i5358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5359.length; i += 1) {
    i5358.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5359[i + 0]));
  }
  i5352.m_GlyphPairAdjustmentRecords = i5358
  var i5361 = i5353[3]
  var i5360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5361[i + 0]));
  }
  i5352.m_MarkToBaseAdjustmentRecords = i5360
  var i5363 = i5353[4]
  var i5362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5363.length; i += 1) {
    i5362.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5363[i + 0]));
  }
  i5352.m_MarkToMarkAdjustmentRecords = i5362
  return i5352
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5366 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5367 = data
  i5366.m_TargetGlyphID = i5367[0]
  i5366.m_SubstituteGlyphIDs = i5367[1]
  return i5366
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5370 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5371 = data
  i5370.m_ComponentGlyphIDs = i5371[0]
  i5370.m_LigatureGlyphID = i5371[1]
  return i5370
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5374 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5375 = data
  i5374.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5375[0], i5374.m_FirstAdjustmentRecord)
  i5374.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5375[1], i5374.m_SecondAdjustmentRecord)
  i5374.m_FeatureLookupFlags = i5375[2]
  return i5374
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5378 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5379 = data
  i5378.m_BaseGlyphID = i5379[0]
  i5378.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5379[1], i5378.m_BaseGlyphAnchorPoint)
  i5378.m_MarkGlyphID = i5379[2]
  i5378.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5379[3], i5378.m_MarkPositionAdjustment)
  return i5378
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5382 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5383 = data
  i5382.m_BaseMarkGlyphID = i5383[0]
  i5382.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5383[1], i5382.m_BaseMarkGlyphAnchorPoint)
  i5382.m_CombiningMarkGlyphID = i5383[2]
  i5382.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5383[3], i5382.m_CombiningMarkPositionAdjustment)
  return i5382
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5388 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5389 = data
  request.r(i5389[0], i5389[1], 0, i5388, 'regularTypeface')
  request.r(i5389[2], i5389[3], 0, i5388, 'italicTypeface')
  return i5388
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5390 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5391 = data
  i5390.Name = i5391[0]
  i5390.PointSize = i5391[1]
  i5390.Scale = i5391[2]
  i5390.CharacterCount = i5391[3]
  i5390.LineHeight = i5391[4]
  i5390.Baseline = i5391[5]
  i5390.Ascender = i5391[6]
  i5390.CapHeight = i5391[7]
  i5390.Descender = i5391[8]
  i5390.CenterLine = i5391[9]
  i5390.SuperscriptOffset = i5391[10]
  i5390.SubscriptOffset = i5391[11]
  i5390.SubSize = i5391[12]
  i5390.Underline = i5391[13]
  i5390.UnderlineThickness = i5391[14]
  i5390.strikethrough = i5391[15]
  i5390.strikethroughThickness = i5391[16]
  i5390.TabWidth = i5391[17]
  i5390.Padding = i5391[18]
  i5390.AtlasWidth = i5391[19]
  i5390.AtlasHeight = i5391[20]
  return i5390
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5394 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5395 = data
  i5394.id = i5395[0]
  i5394.x = i5395[1]
  i5394.y = i5395[2]
  i5394.width = i5395[3]
  i5394.height = i5395[4]
  i5394.xOffset = i5395[5]
  i5394.yOffset = i5395[6]
  i5394.xAdvance = i5395[7]
  i5394.scale = i5395[8]
  return i5394
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5396 = root || request.c( 'TMPro.KerningTable' )
  var i5397 = data
  var i5399 = i5397[0]
  var i5398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.add(request.d('TMPro.KerningPair', i5399[i + 0]));
  }
  i5396.kerningPairs = i5398
  return i5396
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5402 = root || request.c( 'TMPro.KerningPair' )
  var i5403 = data
  i5402.xOffset = i5403[0]
  i5402.m_FirstGlyph = i5403[1]
  i5402.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5403[2], i5402.m_FirstGlyphAdjustments)
  i5402.m_SecondGlyph = i5403[3]
  i5402.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5403[4], i5402.m_SecondGlyphAdjustments)
  i5402.m_IgnoreSpacingAdjustments = !!i5403[5]
  return i5402
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5404 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5405 = data
  i5404.m_FaceIndex = i5405[0]
  i5404.m_FamilyName = i5405[1]
  i5404.m_StyleName = i5405[2]
  i5404.m_PointSize = i5405[3]
  i5404.m_Scale = i5405[4]
  i5404.m_UnitsPerEM = i5405[5]
  i5404.m_LineHeight = i5405[6]
  i5404.m_AscentLine = i5405[7]
  i5404.m_CapLine = i5405[8]
  i5404.m_MeanLine = i5405[9]
  i5404.m_Baseline = i5405[10]
  i5404.m_DescentLine = i5405[11]
  i5404.m_SuperscriptOffset = i5405[12]
  i5404.m_SuperscriptSize = i5405[13]
  i5404.m_SubscriptOffset = i5405[14]
  i5404.m_SubscriptSize = i5405[15]
  i5404.m_UnderlineOffset = i5405[16]
  i5404.m_UnderlineThickness = i5405[17]
  i5404.m_StrikethroughOffset = i5405[18]
  i5404.m_StrikethroughThickness = i5405[19]
  i5404.m_TabWidth = i5405[20]
  return i5404
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5406 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5407 = data
  i5406.useSafeMode = !!i5407[0]
  i5406.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5407[1], i5406.safeModeOptions)
  i5406.timeScale = i5407[2]
  i5406.unscaledTimeScale = i5407[3]
  i5406.useSmoothDeltaTime = !!i5407[4]
  i5406.maxSmoothUnscaledTime = i5407[5]
  i5406.rewindCallbackMode = i5407[6]
  i5406.showUnityEditorReport = !!i5407[7]
  i5406.logBehaviour = i5407[8]
  i5406.drawGizmos = !!i5407[9]
  i5406.defaultRecyclable = !!i5407[10]
  i5406.defaultAutoPlay = i5407[11]
  i5406.defaultUpdateType = i5407[12]
  i5406.defaultTimeScaleIndependent = !!i5407[13]
  i5406.defaultEaseType = i5407[14]
  i5406.defaultEaseOvershootOrAmplitude = i5407[15]
  i5406.defaultEasePeriod = i5407[16]
  i5406.defaultAutoKill = !!i5407[17]
  i5406.defaultLoopType = i5407[18]
  i5406.debugMode = !!i5407[19]
  i5406.debugStoreTargetId = !!i5407[20]
  i5406.showPreviewPanel = !!i5407[21]
  i5406.storeSettingsLocation = i5407[22]
  i5406.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5407[23], i5406.modules)
  i5406.createASMDEF = !!i5407[24]
  i5406.showPlayingTweens = !!i5407[25]
  i5406.showPausedTweens = !!i5407[26]
  return i5406
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5408 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5409 = data
  i5408.logBehaviour = i5409[0]
  i5408.nestedTweenFailureBehaviour = i5409[1]
  return i5408
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5411 = data
  i5410.showPanel = !!i5411[0]
  i5410.audioEnabled = !!i5411[1]
  i5410.physicsEnabled = !!i5411[2]
  i5410.physics2DEnabled = !!i5411[3]
  i5410.spriteEnabled = !!i5411[4]
  i5410.uiEnabled = !!i5411[5]
  i5410.uiToolkitEnabled = !!i5411[6]
  i5410.textMeshProEnabled = !!i5411[7]
  i5410.tk2DEnabled = !!i5411[8]
  i5410.deAudioEnabled = !!i5411[9]
  i5410.deUnityExtendedEnabled = !!i5411[10]
  i5410.epoOutlineEnabled = !!i5411[11]
  return i5410
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5412 = root || request.c( 'TMPro.TMP_Settings' )
  var i5413 = data
  i5412.assetVersion = i5413[0]
  i5412.m_TextWrappingMode = i5413[1]
  i5412.m_enableKerning = !!i5413[2]
  var i5415 = i5413[3]
  var i5414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.add(i5415[i + 0]);
  }
  i5412.m_ActiveFontFeatures = i5414
  i5412.m_enableExtraPadding = !!i5413[4]
  i5412.m_enableTintAllSprites = !!i5413[5]
  i5412.m_enableParseEscapeCharacters = !!i5413[6]
  i5412.m_EnableRaycastTarget = !!i5413[7]
  i5412.m_GetFontFeaturesAtRuntime = !!i5413[8]
  i5412.m_missingGlyphCharacter = i5413[9]
  i5412.m_ClearDynamicDataOnBuild = !!i5413[10]
  i5412.m_warningsDisabled = !!i5413[11]
  request.r(i5413[12], i5413[13], 0, i5412, 'm_defaultFontAsset')
  i5412.m_defaultFontAssetPath = i5413[14]
  i5412.m_defaultFontSize = i5413[15]
  i5412.m_defaultAutoSizeMinRatio = i5413[16]
  i5412.m_defaultAutoSizeMaxRatio = i5413[17]
  i5412.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5413[18], i5413[19] )
  i5412.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5413[20], i5413[21] )
  i5412.m_autoSizeTextContainer = !!i5413[22]
  i5412.m_IsTextObjectScaleStatic = !!i5413[23]
  var i5417 = i5413[24]
  var i5416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5417.length; i += 2) {
  request.r(i5417[i + 0], i5417[i + 1], 1, i5416, '')
  }
  i5412.m_fallbackFontAssets = i5416
  i5412.m_matchMaterialPreset = !!i5413[25]
  i5412.m_HideSubTextObjects = !!i5413[26]
  request.r(i5413[27], i5413[28], 0, i5412, 'm_defaultSpriteAsset')
  i5412.m_defaultSpriteAssetPath = i5413[29]
  i5412.m_enableEmojiSupport = !!i5413[30]
  i5412.m_MissingCharacterSpriteUnicode = i5413[31]
  var i5419 = i5413[32]
  var i5418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5419.length; i += 2) {
  request.r(i5419[i + 0], i5419[i + 1], 1, i5418, '')
  }
  i5412.m_EmojiFallbackTextAssets = i5418
  i5412.m_defaultColorGradientPresetsPath = i5413[33]
  request.r(i5413[34], i5413[35], 0, i5412, 'm_defaultStyleSheet')
  i5412.m_StyleSheetsResourcePath = i5413[36]
  request.r(i5413[37], i5413[38], 0, i5412, 'm_leadingCharacters')
  request.r(i5413[39], i5413[40], 0, i5412, 'm_followingCharacters')
  i5412.m_UseModernHangulLineBreakingRules = !!i5413[41]
  return i5412
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5422 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5423 = data
  request.r(i5423[0], i5423[1], 0, i5422, 'spriteSheet')
  var i5425 = i5423[2]
  var i5424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.add(request.d('TMPro.TMP_Sprite', i5425[i + 0]));
  }
  i5422.spriteInfoList = i5424
  var i5427 = i5423[3]
  var i5426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5427.length; i += 2) {
  request.r(i5427[i + 0], i5427[i + 1], 1, i5426, '')
  }
  i5422.fallbackSpriteAssets = i5426
  var i5429 = i5423[4]
  var i5428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5429.length; i += 1) {
    i5428.add(request.d('TMPro.TMP_SpriteCharacter', i5429[i + 0]));
  }
  i5422.m_SpriteCharacterTable = i5428
  var i5431 = i5423[5]
  var i5430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.add(request.d('TMPro.TMP_SpriteGlyph', i5431[i + 0]));
  }
  i5422.m_GlyphTable = i5430
  i5422.m_Version = i5423[6]
  i5422.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5423[7], i5422.m_FaceInfo)
  request.r(i5423[8], i5423[9], 0, i5422, 'm_Material')
  return i5422
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5434 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5435 = data
  i5434.name = i5435[0]
  i5434.hashCode = i5435[1]
  i5434.unicode = i5435[2]
  i5434.pivot = new pc.Vec2( i5435[3], i5435[4] )
  request.r(i5435[5], i5435[6], 0, i5434, 'sprite')
  i5434.id = i5435[7]
  i5434.x = i5435[8]
  i5434.y = i5435[9]
  i5434.width = i5435[10]
  i5434.height = i5435[11]
  i5434.xOffset = i5435[12]
  i5434.yOffset = i5435[13]
  i5434.xAdvance = i5435[14]
  i5434.scale = i5435[15]
  return i5434
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5440 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5441 = data
  i5440.m_Name = i5441[0]
  i5440.m_ElementType = i5441[1]
  i5440.m_Unicode = i5441[2]
  i5440.m_GlyphIndex = i5441[3]
  i5440.m_Scale = i5441[4]
  return i5440
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5444 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5445 = data
  request.r(i5445[0], i5445[1], 0, i5444, 'sprite')
  i5444.m_Index = i5445[2]
  i5444.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5445[3], i5444.m_Metrics)
  i5444.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5445[4], i5444.m_GlyphRect)
  i5444.m_Scale = i5445[5]
  i5444.m_AtlasIndex = i5445[6]
  i5444.m_ClassDefinitionType = i5445[7]
  return i5444
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5446 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5447 = data
  var i5449 = i5447[0]
  var i5448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5449.length; i += 1) {
    i5448.add(request.d('TMPro.TMP_Style', i5449[i + 0]));
  }
  i5446.m_StyleList = i5448
  return i5446
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5452 = root || request.c( 'TMPro.TMP_Style' )
  var i5453 = data
  i5452.m_Name = i5453[0]
  i5452.m_HashCode = i5453[1]
  i5452.m_OpeningDefinition = i5453[2]
  i5452.m_ClosingDefinition = i5453[3]
  i5452.m_OpeningTagArray = i5453[4]
  i5452.m_ClosingTagArray = i5453[5]
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5455 = data
  var i5457 = i5455[0]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5457[i + 0]) );
  }
  i5454.files = i5456
  i5454.componentToPrefabIds = i5455[1]
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5461 = data
  i5460.path = i5461[0]
  request.r(i5461[1], i5461[2], 0, i5460, 'unityObject')
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5463 = data
  var i5465 = i5463[0]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 1) {
    i5464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5465[i + 0]) );
  }
  i5462.scriptsExecutionOrder = i5464
  var i5467 = i5463[1]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 1) {
    i5466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5467[i + 0]) );
  }
  i5462.sortingLayers = i5466
  var i5469 = i5463[2]
  var i5468 = []
  for(var i = 0; i < i5469.length; i += 1) {
    i5468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5469[i + 0]) );
  }
  i5462.cullingLayers = i5468
  i5462.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5463[3], i5462.timeSettings)
  i5462.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5463[4], i5462.physicsSettings)
  i5462.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5463[5], i5462.physics2DSettings)
  i5462.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5463[6], i5462.qualitySettings)
  i5462.enableRealtimeShadows = !!i5463[7]
  i5462.enableAutoInstancing = !!i5463[8]
  i5462.enableStaticBatching = !!i5463[9]
  i5462.enableDynamicBatching = !!i5463[10]
  i5462.lightmapEncodingQuality = i5463[11]
  i5462.desiredColorSpace = i5463[12]
  var i5471 = i5463[13]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.push( i5471[i + 0] );
  }
  i5462.allTags = i5470
  return i5462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5475 = data
  i5474.name = i5475[0]
  i5474.value = i5475[1]
  return i5474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5479 = data
  i5478.id = i5479[0]
  i5478.name = i5479[1]
  i5478.value = i5479[2]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5483 = data
  i5482.id = i5483[0]
  i5482.name = i5483[1]
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5485 = data
  i5484.fixedDeltaTime = i5485[0]
  i5484.maximumDeltaTime = i5485[1]
  i5484.timeScale = i5485[2]
  i5484.maximumParticleTimestep = i5485[3]
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5487 = data
  i5486.gravity = new pc.Vec3( i5487[0], i5487[1], i5487[2] )
  i5486.defaultSolverIterations = i5487[3]
  i5486.bounceThreshold = i5487[4]
  i5486.autoSyncTransforms = !!i5487[5]
  i5486.autoSimulation = !!i5487[6]
  var i5489 = i5487[7]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5489[i + 0]) );
  }
  i5486.collisionMatrix = i5488
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5493 = data
  i5492.enabled = !!i5493[0]
  i5492.layerId = i5493[1]
  i5492.otherLayerId = i5493[2]
  return i5492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5495 = data
  request.r(i5495[0], i5495[1], 0, i5494, 'material')
  i5494.gravity = new pc.Vec2( i5495[2], i5495[3] )
  i5494.positionIterations = i5495[4]
  i5494.velocityIterations = i5495[5]
  i5494.velocityThreshold = i5495[6]
  i5494.maxLinearCorrection = i5495[7]
  i5494.maxAngularCorrection = i5495[8]
  i5494.maxTranslationSpeed = i5495[9]
  i5494.maxRotationSpeed = i5495[10]
  i5494.baumgarteScale = i5495[11]
  i5494.baumgarteTOIScale = i5495[12]
  i5494.timeToSleep = i5495[13]
  i5494.linearSleepTolerance = i5495[14]
  i5494.angularSleepTolerance = i5495[15]
  i5494.defaultContactOffset = i5495[16]
  i5494.autoSimulation = !!i5495[17]
  i5494.queriesHitTriggers = !!i5495[18]
  i5494.queriesStartInColliders = !!i5495[19]
  i5494.callbacksOnDisable = !!i5495[20]
  i5494.reuseCollisionCallbacks = !!i5495[21]
  i5494.autoSyncTransforms = !!i5495[22]
  var i5497 = i5495[23]
  var i5496 = []
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5497[i + 0]) );
  }
  i5494.collisionMatrix = i5496
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5501 = data
  i5500.enabled = !!i5501[0]
  i5500.layerId = i5501[1]
  i5500.otherLayerId = i5501[2]
  return i5500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5503 = data
  var i5505 = i5503[0]
  var i5504 = []
  for(var i = 0; i < i5505.length; i += 1) {
    i5504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5505[i + 0]) );
  }
  i5502.qualityLevels = i5504
  var i5507 = i5503[1]
  var i5506 = []
  for(var i = 0; i < i5507.length; i += 1) {
    i5506.push( i5507[i + 0] );
  }
  i5502.names = i5506
  i5502.shadows = i5503[2]
  i5502.anisotropicFiltering = i5503[3]
  i5502.antiAliasing = i5503[4]
  i5502.lodBias = i5503[5]
  i5502.shadowCascades = i5503[6]
  i5502.shadowDistance = i5503[7]
  i5502.shadowmaskMode = i5503[8]
  i5502.shadowProjection = i5503[9]
  i5502.shadowResolution = i5503[10]
  i5502.softParticles = !!i5503[11]
  i5502.softVegetation = !!i5503[12]
  i5502.activeColorSpace = i5503[13]
  i5502.desiredColorSpace = i5503[14]
  i5502.masterTextureLimit = i5503[15]
  i5502.maxQueuedFrames = i5503[16]
  i5502.particleRaycastBudget = i5503[17]
  i5502.pixelLightCount = i5503[18]
  i5502.realtimeReflectionProbes = !!i5503[19]
  i5502.shadowCascade2Split = i5503[20]
  i5502.shadowCascade4Split = new pc.Vec3( i5503[21], i5503[22], i5503[23] )
  i5502.streamingMipmapsActive = !!i5503[24]
  i5502.vSyncCount = i5503[25]
  i5502.asyncUploadBufferSize = i5503[26]
  i5502.asyncUploadTimeSlice = i5503[27]
  i5502.billboardsFaceCameraPosition = !!i5503[28]
  i5502.shadowNearPlaneOffset = i5503[29]
  i5502.streamingMipmapsMemoryBudget = i5503[30]
  i5502.maximumLODLevel = i5503[31]
  i5502.streamingMipmapsAddAllCameras = !!i5503[32]
  i5502.streamingMipmapsMaxLevelReduction = i5503[33]
  i5502.streamingMipmapsRenderersPerFrame = i5503[34]
  i5502.resolutionScalingFixedDPIFactor = i5503[35]
  i5502.streamingMipmapsMaxFileIORequests = i5503[36]
  i5502.currentQualityLevel = i5503[37]
  return i5502
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5510 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5511 = data
  i5510.m_GlyphIndex = i5511[0]
  i5510.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5511[1], i5510.m_GlyphValueRecord)
  return i5510
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5512 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5513 = data
  i5512.m_XCoordinate = i5513[0]
  i5512.m_YCoordinate = i5513[1]
  return i5512
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5514 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5515 = data
  i5514.m_XPositionAdjustment = i5515[0]
  i5514.m_YPositionAdjustment = i5515[1]
  return i5514
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5516 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5517 = data
  i5516.xPlacement = i5517[0]
  i5516.yPlacement = i5517[1]
  i5516.xAdvance = i5517[2]
  i5516.yAdvance = i5517[3]
  return i5516
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5518 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5519 = data
  i5518.m_XPlacement = i5519[0]
  i5518.m_YPlacement = i5519[1]
  i5518.m_XAdvance = i5519[2]
  i5518.m_YAdvance = i5519[3]
  return i5518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[22],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[22],"98":[99],"100":[101],"102":[101],"21":[14],"58":[103],"52":[103],"104":[103],"105":[103],"106":[103],"107":[14],"108":[17,14],"109":[99],"110":[17,14],"111":[25,99],"112":[99],"113":[99,114],"115":[77],"116":[84],"117":[118],"119":[120],"121":[5],"122":[22],"123":[124],"125":[48],"126":[21],"127":[14],"128":[99,14],"27":[14,17],"129":[14],"130":[17,14],"131":[99],"132":[17,14],"133":[14],"134":[135],"136":[135],"137":[135],"138":[14],"139":[14],"24":[21],"16":[17,14],"140":[14],"23":[21],"141":[14],"142":[14],"143":[14],"144":[14],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[17,14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[17,14],"156":[14],"157":[48],"158":[48],"49":[48],"159":[48],"160":[22],"161":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","Knife","InWaterItem","Item","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Sink","ItemDraggable","ItemMoveToTarget","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Ply_BobEffect","Ply_TimerEvent","ItemClickable","CuttingBoard","UnityEngine.CapsuleCollider","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "12.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v58_StuffedPotatoCasserole";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4910";

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

Deserializers.buildID = "5e4d31ac-4add-41c6-8b94-ff1da1c84d01";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

