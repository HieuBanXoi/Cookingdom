var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4858 = root || request.c( 'UnityEngine.JointSpring' )
  var i4859 = data
  i4858.spring = i4859[0]
  i4858.damper = i4859[1]
  i4858.targetPosition = i4859[2]
  return i4858
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4860 = root || request.c( 'UnityEngine.JointMotor' )
  var i4861 = data
  i4860.m_TargetVelocity = i4861[0]
  i4860.m_Force = i4861[1]
  i4860.m_FreeSpin = i4861[2]
  return i4860
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4862 = root || request.c( 'UnityEngine.JointLimits' )
  var i4863 = data
  i4862.m_Min = i4863[0]
  i4862.m_Max = i4863[1]
  i4862.m_Bounciness = i4863[2]
  i4862.m_BounceMinVelocity = i4863[3]
  i4862.m_ContactDistance = i4863[4]
  i4862.minBounce = i4863[5]
  i4862.maxBounce = i4863[6]
  return i4862
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4864 = root || request.c( 'UnityEngine.JointDrive' )
  var i4865 = data
  i4864.m_PositionSpring = i4865[0]
  i4864.m_PositionDamper = i4865[1]
  i4864.m_MaximumForce = i4865[2]
  i4864.m_UseAcceleration = i4865[3]
  return i4864
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4866 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4867 = data
  i4866.m_Spring = i4867[0]
  i4866.m_Damper = i4867[1]
  return i4866
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4868 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4869 = data
  i4868.m_Limit = i4869[0]
  i4868.m_Bounciness = i4869[1]
  i4868.m_ContactDistance = i4869[2]
  return i4868
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4870 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4871 = data
  i4870.m_ExtremumSlip = i4871[0]
  i4870.m_ExtremumValue = i4871[1]
  i4870.m_AsymptoteSlip = i4871[2]
  i4870.m_AsymptoteValue = i4871[3]
  i4870.m_Stiffness = i4871[4]
  return i4870
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4872 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4873 = data
  i4872.m_LowerAngle = i4873[0]
  i4872.m_UpperAngle = i4873[1]
  return i4872
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4874 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4875 = data
  i4874.m_MotorSpeed = i4875[0]
  i4874.m_MaximumMotorTorque = i4875[1]
  return i4874
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4876 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4877 = data
  i4876.m_DampingRatio = i4877[0]
  i4876.m_Frequency = i4877[1]
  i4876.m_Angle = i4877[2]
  return i4876
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4878 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4879 = data
  i4878.m_LowerTranslation = i4879[0]
  i4878.m_UpperTranslation = i4879[1]
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4880 = root || new pc.UnityMaterial()
  var i4881 = data
  i4880.name = i4881[0]
  request.r(i4881[1], i4881[2], 0, i4880, 'shader')
  i4880.renderQueue = i4881[3]
  i4880.enableInstancing = !!i4881[4]
  var i4883 = i4881[5]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 1) {
    i4882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4883[i + 0]) );
  }
  i4880.floatParameters = i4882
  var i4885 = i4881[6]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4885[i + 0]) );
  }
  i4880.colorParameters = i4884
  var i4887 = i4881[7]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4887[i + 0]) );
  }
  i4880.vectorParameters = i4886
  var i4889 = i4881[8]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4889[i + 0]) );
  }
  i4880.textureParameters = i4888
  var i4891 = i4881[9]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 1) {
    i4890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4891[i + 0]) );
  }
  i4880.materialFlags = i4890
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4895 = data
  i4894.name = i4895[0]
  i4894.value = i4895[1]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4899 = data
  i4898.name = i4899[0]
  i4898.value = new pc.Color(i4899[1], i4899[2], i4899[3], i4899[4])
  return i4898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4903 = data
  i4902.name = i4903[0]
  i4902.value = new pc.Vec4( i4903[1], i4903[2], i4903[3], i4903[4] )
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4907 = data
  i4906.name = i4907[0]
  request.r(i4907[1], i4907[2], 0, i4906, 'value')
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4911 = data
  i4910.name = i4911[0]
  i4910.enabled = !!i4911[1]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4913 = data
  i4912.name = i4913[0]
  i4912.width = i4913[1]
  i4912.height = i4913[2]
  i4912.mipmapCount = i4913[3]
  i4912.anisoLevel = i4913[4]
  i4912.filterMode = i4913[5]
  i4912.hdr = !!i4913[6]
  i4912.format = i4913[7]
  i4912.wrapMode = i4913[8]
  i4912.alphaIsTransparency = !!i4913[9]
  i4912.alphaSource = i4913[10]
  i4912.graphicsFormat = i4913[11]
  i4912.sRGBTexture = !!i4913[12]
  i4912.desiredColorSpace = i4913[13]
  i4912.wrapU = i4913[14]
  i4912.wrapV = i4913[15]
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4915 = data
  i4914.position = new pc.Vec3( i4915[0], i4915[1], i4915[2] )
  i4914.scale = new pc.Vec3( i4915[3], i4915[4], i4915[5] )
  i4914.rotation = new pc.Quat(i4915[6], i4915[7], i4915[8], i4915[9])
  return i4914
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i4916 = root || request.c( 'HeartEffect' )
  var i4917 = data
  i4916.defaultLifeTime = i4917[0]
  request.r(i4917[1], i4917[2], 0, i4916, 'tf')
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4919 = data
  i4918.color = new pc.Color(i4919[0], i4919[1], i4919[2], i4919[3])
  request.r(i4919[4], i4919[5], 0, i4918, 'sprite')
  i4918.flipX = !!i4919[6]
  i4918.flipY = !!i4919[7]
  i4918.drawMode = i4919[8]
  i4918.size = new pc.Vec2( i4919[9], i4919[10] )
  i4918.tileMode = i4919[11]
  i4918.adaptiveModeThreshold = i4919[12]
  i4918.maskInteraction = i4919[13]
  i4918.spriteSortPoint = i4919[14]
  i4918.enabled = !!i4919[15]
  request.r(i4919[16], i4919[17], 0, i4918, 'sharedMaterial')
  var i4921 = i4919[18]
  var i4920 = []
  for(var i = 0; i < i4921.length; i += 2) {
  request.r(i4921[i + 0], i4921[i + 1], 2, i4920, '')
  }
  i4918.sharedMaterials = i4920
  i4918.receiveShadows = !!i4919[19]
  i4918.shadowCastingMode = i4919[20]
  i4918.sortingLayerID = i4919[21]
  i4918.sortingOrder = i4919[22]
  i4918.lightmapIndex = i4919[23]
  i4918.lightmapSceneIndex = i4919[24]
  i4918.lightmapScaleOffset = new pc.Vec4( i4919[25], i4919[26], i4919[27], i4919[28] )
  i4918.lightProbeUsage = i4919[29]
  i4918.reflectionProbeUsage = i4919[30]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4925 = data
  i4924.name = i4925[0]
  i4924.tagId = i4925[1]
  i4924.enabled = !!i4925[2]
  i4924.isStatic = !!i4925[3]
  i4924.layer = i4925[4]
  return i4924
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i4926 = root || request.c( 'HeartBreakEffect' )
  var i4927 = data
  i4926.defaultLifeTime = i4927[0]
  request.r(i4927[1], i4927[2], 0, i4926, 'tf')
  return i4926
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i4928 = root || request.c( 'BlinkEffect' )
  var i4929 = data
  request.r(i4929[0], i4929[1], 0, i4928, 'tf')
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'mesh')
  i4930.meshCount = i4931[2]
  i4930.activeVertexStreamsCount = i4931[3]
  i4930.alignment = i4931[4]
  i4930.renderMode = i4931[5]
  i4930.sortMode = i4931[6]
  i4930.lengthScale = i4931[7]
  i4930.velocityScale = i4931[8]
  i4930.cameraVelocityScale = i4931[9]
  i4930.normalDirection = i4931[10]
  i4930.sortingFudge = i4931[11]
  i4930.minParticleSize = i4931[12]
  i4930.maxParticleSize = i4931[13]
  i4930.pivot = new pc.Vec3( i4931[14], i4931[15], i4931[16] )
  request.r(i4931[17], i4931[18], 0, i4930, 'trailMaterial')
  i4930.applyActiveColorSpace = !!i4931[19]
  i4930.enabled = !!i4931[20]
  request.r(i4931[21], i4931[22], 0, i4930, 'sharedMaterial')
  var i4933 = i4931[23]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 2) {
  request.r(i4933[i + 0], i4933[i + 1], 2, i4932, '')
  }
  i4930.sharedMaterials = i4932
  i4930.receiveShadows = !!i4931[24]
  i4930.shadowCastingMode = i4931[25]
  i4930.sortingLayerID = i4931[26]
  i4930.sortingOrder = i4931[27]
  i4930.lightmapIndex = i4931[28]
  i4930.lightmapSceneIndex = i4931[29]
  i4930.lightmapScaleOffset = new pc.Vec4( i4931[30], i4931[31], i4931[32], i4931[33] )
  i4930.lightProbeUsage = i4931[34]
  i4930.reflectionProbeUsage = i4931[35]
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4935 = data
  i4934.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4935[0], i4934.main)
  i4934.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4935[1], i4934.colorBySpeed)
  i4934.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4935[2], i4934.colorOverLifetime)
  i4934.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4935[3], i4934.emission)
  i4934.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4935[4], i4934.rotationBySpeed)
  i4934.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4935[5], i4934.rotationOverLifetime)
  i4934.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4935[6], i4934.shape)
  i4934.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4935[7], i4934.sizeBySpeed)
  i4934.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4935[8], i4934.sizeOverLifetime)
  i4934.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4935[9], i4934.textureSheetAnimation)
  i4934.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4935[10], i4934.velocityOverLifetime)
  i4934.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4935[11], i4934.noise)
  i4934.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4935[12], i4934.inheritVelocity)
  i4934.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4935[13], i4934.forceOverLifetime)
  i4934.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4935[14], i4934.limitVelocityOverLifetime)
  i4934.useAutoRandomSeed = !!i4935[15]
  i4934.randomSeed = i4935[16]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4936 = root || new pc.ParticleSystemMain()
  var i4937 = data
  i4936.duration = i4937[0]
  i4936.loop = !!i4937[1]
  i4936.prewarm = !!i4937[2]
  i4936.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[3], i4936.startDelay)
  i4936.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[4], i4936.startLifetime)
  i4936.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[5], i4936.startSpeed)
  i4936.startSize3D = !!i4937[6]
  i4936.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[7], i4936.startSizeX)
  i4936.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[8], i4936.startSizeY)
  i4936.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[9], i4936.startSizeZ)
  i4936.startRotation3D = !!i4937[10]
  i4936.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[11], i4936.startRotationX)
  i4936.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[12], i4936.startRotationY)
  i4936.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[13], i4936.startRotationZ)
  i4936.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4937[14], i4936.startColor)
  i4936.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4937[15], i4936.gravityModifier)
  i4936.simulationSpace = i4937[16]
  request.r(i4937[17], i4937[18], 0, i4936, 'customSimulationSpace')
  i4936.simulationSpeed = i4937[19]
  i4936.useUnscaledTime = !!i4937[20]
  i4936.scalingMode = i4937[21]
  i4936.playOnAwake = !!i4937[22]
  i4936.maxParticles = i4937[23]
  i4936.emitterVelocityMode = i4937[24]
  i4936.stopAction = i4937[25]
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4938 = root || new pc.MinMaxCurve()
  var i4939 = data
  i4938.mode = i4939[0]
  i4938.curveMin = new pc.AnimationCurve( { keys_flow: i4939[1] } )
  i4938.curveMax = new pc.AnimationCurve( { keys_flow: i4939[2] } )
  i4938.curveMultiplier = i4939[3]
  i4938.constantMin = i4939[4]
  i4938.constantMax = i4939[5]
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4940 = root || new pc.MinMaxGradient()
  var i4941 = data
  i4940.mode = i4941[0]
  i4940.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4941[1], i4940.gradientMin)
  i4940.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4941[2], i4940.gradientMax)
  i4940.colorMin = new pc.Color(i4941[3], i4941[4], i4941[5], i4941[6])
  i4940.colorMax = new pc.Color(i4941[7], i4941[8], i4941[9], i4941[10])
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4943 = data
  i4942.mode = i4943[0]
  var i4945 = i4943[1]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4945[i + 0]) );
  }
  i4942.colorKeys = i4944
  var i4947 = i4943[2]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4947[i + 0]) );
  }
  i4942.alphaKeys = i4946
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4948 = root || new pc.ParticleSystemColorBySpeed()
  var i4949 = data
  i4948.enabled = !!i4949[0]
  i4948.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4949[1], i4948.color)
  i4948.range = new pc.Vec2( i4949[2], i4949[3] )
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4953 = data
  i4952.color = new pc.Color(i4953[0], i4953[1], i4953[2], i4953[3])
  i4952.time = i4953[4]
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4957 = data
  i4956.alpha = i4957[0]
  i4956.time = i4957[1]
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4958 = root || new pc.ParticleSystemColorOverLifetime()
  var i4959 = data
  i4958.enabled = !!i4959[0]
  i4958.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4959[1], i4958.color)
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4960 = root || new pc.ParticleSystemEmitter()
  var i4961 = data
  i4960.enabled = !!i4961[0]
  i4960.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4961[1], i4960.rateOverTime)
  i4960.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4961[2], i4960.rateOverDistance)
  var i4963 = i4961[3]
  var i4962 = []
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4963[i + 0]) );
  }
  i4960.bursts = i4962
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4966 = root || new pc.ParticleSystemBurst()
  var i4967 = data
  i4966.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4967[0], i4966.count)
  i4966.cycleCount = i4967[1]
  i4966.minCount = i4967[2]
  i4966.maxCount = i4967[3]
  i4966.repeatInterval = i4967[4]
  i4966.time = i4967[5]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4968 = root || new pc.ParticleSystemRotationBySpeed()
  var i4969 = data
  i4968.enabled = !!i4969[0]
  i4968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[1], i4968.x)
  i4968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[2], i4968.y)
  i4968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[3], i4968.z)
  i4968.separateAxes = !!i4969[4]
  i4968.range = new pc.Vec2( i4969[5], i4969[6] )
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4970 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4971 = data
  i4970.enabled = !!i4971[0]
  i4970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[1], i4970.x)
  i4970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[2], i4970.y)
  i4970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[3], i4970.z)
  i4970.separateAxes = !!i4971[4]
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4972 = root || new pc.ParticleSystemShape()
  var i4973 = data
  i4972.enabled = !!i4973[0]
  i4972.shapeType = i4973[1]
  i4972.randomDirectionAmount = i4973[2]
  i4972.sphericalDirectionAmount = i4973[3]
  i4972.randomPositionAmount = i4973[4]
  i4972.alignToDirection = !!i4973[5]
  i4972.radius = i4973[6]
  i4972.radiusMode = i4973[7]
  i4972.radiusSpread = i4973[8]
  i4972.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4973[9], i4972.radiusSpeed)
  i4972.radiusThickness = i4973[10]
  i4972.angle = i4973[11]
  i4972.length = i4973[12]
  i4972.boxThickness = new pc.Vec3( i4973[13], i4973[14], i4973[15] )
  i4972.meshShapeType = i4973[16]
  request.r(i4973[17], i4973[18], 0, i4972, 'mesh')
  request.r(i4973[19], i4973[20], 0, i4972, 'meshRenderer')
  request.r(i4973[21], i4973[22], 0, i4972, 'skinnedMeshRenderer')
  i4972.useMeshMaterialIndex = !!i4973[23]
  i4972.meshMaterialIndex = i4973[24]
  i4972.useMeshColors = !!i4973[25]
  i4972.normalOffset = i4973[26]
  i4972.arc = i4973[27]
  i4972.arcMode = i4973[28]
  i4972.arcSpread = i4973[29]
  i4972.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4973[30], i4972.arcSpeed)
  i4972.donutRadius = i4973[31]
  i4972.position = new pc.Vec3( i4973[32], i4973[33], i4973[34] )
  i4972.rotation = new pc.Vec3( i4973[35], i4973[36], i4973[37] )
  i4972.scale = new pc.Vec3( i4973[38], i4973[39], i4973[40] )
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4974 = root || new pc.ParticleSystemSizeBySpeed()
  var i4975 = data
  i4974.enabled = !!i4975[0]
  i4974.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4975[1], i4974.x)
  i4974.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4975[2], i4974.y)
  i4974.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4975[3], i4974.z)
  i4974.separateAxes = !!i4975[4]
  i4974.range = new pc.Vec2( i4975[5], i4975[6] )
  return i4974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4976 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4977 = data
  i4976.enabled = !!i4977[0]
  i4976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4977[1], i4976.x)
  i4976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4977[2], i4976.y)
  i4976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4977[3], i4976.z)
  i4976.separateAxes = !!i4977[4]
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4978 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4979 = data
  i4978.enabled = !!i4979[0]
  i4978.mode = i4979[1]
  i4978.animation = i4979[2]
  i4978.numTilesX = i4979[3]
  i4978.numTilesY = i4979[4]
  i4978.useRandomRow = !!i4979[5]
  i4978.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[6], i4978.frameOverTime)
  i4978.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[7], i4978.startFrame)
  i4978.cycleCount = i4979[8]
  i4978.rowIndex = i4979[9]
  i4978.flipU = i4979[10]
  i4978.flipV = i4979[11]
  i4978.spriteCount = i4979[12]
  var i4981 = i4979[13]
  var i4980 = []
  for(var i = 0; i < i4981.length; i += 2) {
  request.r(i4981[i + 0], i4981[i + 1], 2, i4980, '')
  }
  i4978.sprites = i4980
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4984 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4985 = data
  i4984.enabled = !!i4985[0]
  i4984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[1], i4984.x)
  i4984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[2], i4984.y)
  i4984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[3], i4984.z)
  i4984.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[4], i4984.radial)
  i4984.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[5], i4984.speedModifier)
  i4984.space = i4985[6]
  i4984.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[7], i4984.orbitalX)
  i4984.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[8], i4984.orbitalY)
  i4984.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[9], i4984.orbitalZ)
  i4984.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[10], i4984.orbitalOffsetX)
  i4984.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[11], i4984.orbitalOffsetY)
  i4984.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[12], i4984.orbitalOffsetZ)
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4986 = root || new pc.ParticleSystemNoise()
  var i4987 = data
  i4986.enabled = !!i4987[0]
  i4986.separateAxes = !!i4987[1]
  i4986.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[2], i4986.strengthX)
  i4986.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[3], i4986.strengthY)
  i4986.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[4], i4986.strengthZ)
  i4986.frequency = i4987[5]
  i4986.damping = !!i4987[6]
  i4986.octaveCount = i4987[7]
  i4986.octaveMultiplier = i4987[8]
  i4986.octaveScale = i4987[9]
  i4986.quality = i4987[10]
  i4986.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[11], i4986.scrollSpeed)
  i4986.scrollSpeedMultiplier = i4987[12]
  i4986.remapEnabled = !!i4987[13]
  i4986.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[14], i4986.remapX)
  i4986.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[15], i4986.remapY)
  i4986.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[16], i4986.remapZ)
  i4986.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[17], i4986.positionAmount)
  i4986.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[18], i4986.rotationAmount)
  i4986.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[19], i4986.sizeAmount)
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4988 = root || new pc.ParticleSystemInheritVelocity()
  var i4989 = data
  i4988.enabled = !!i4989[0]
  i4988.mode = i4989[1]
  i4988.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[2], i4988.curve)
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4990 = root || new pc.ParticleSystemForceOverLifetime()
  var i4991 = data
  i4990.enabled = !!i4991[0]
  i4990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4991[1], i4990.x)
  i4990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4991[2], i4990.y)
  i4990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4991[3], i4990.z)
  i4990.space = i4991[4]
  i4990.randomized = !!i4991[5]
  return i4990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4992 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4993 = data
  i4992.enabled = !!i4993[0]
  i4992.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4993[1], i4992.limit)
  i4992.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4993[2], i4992.limitX)
  i4992.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4993[3], i4992.limitY)
  i4992.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4993[4], i4992.limitZ)
  i4992.dampen = i4993[5]
  i4992.separateAxes = !!i4993[6]
  i4992.space = i4993[7]
  i4992.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4993[8], i4992.drag)
  i4992.multiplyDragByParticleSize = !!i4993[9]
  i4992.multiplyDragByParticleVelocity = !!i4993[10]
  return i4992
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i4994 = root || request.c( 'StarExploreFX' )
  var i4995 = data
  request.r(i4995[0], i4995[1], 0, i4994, 'tf')
  return i4994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4997 = data
  i4996.pivot = new pc.Vec2( i4997[0], i4997[1] )
  i4996.anchorMin = new pc.Vec2( i4997[2], i4997[3] )
  i4996.anchorMax = new pc.Vec2( i4997[4], i4997[5] )
  i4996.sizeDelta = new pc.Vec2( i4997[6], i4997[7] )
  i4996.anchoredPosition3D = new pc.Vec3( i4997[8], i4997[9], i4997[10] )
  i4996.rotation = new pc.Quat(i4997[11], i4997[12], i4997[13], i4997[14])
  i4996.scale = new pc.Vec3( i4997[15], i4997[16], i4997[17] )
  return i4996
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i4998 = root || request.c( 'ClockTimer' )
  var i4999 = data
  request.r(i4999[0], i4999[1], 0, i4998, 'fillImage')
  request.r(i4999[2], i4999[3], 0, i4998, 'tf')
  i4998.spawnZoomDuration = i4999[4]
  i4998.despawnZoomDuration = i4999[5]
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5001 = data
  i5000.cullTransparentMesh = !!i5001[0]
  return i5000
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.UI.Image' )
  var i5003 = data
  request.r(i5003[0], i5003[1], 0, i5002, 'm_Sprite')
  i5002.m_Type = i5003[2]
  i5002.m_PreserveAspect = !!i5003[3]
  i5002.m_FillCenter = !!i5003[4]
  i5002.m_FillMethod = i5003[5]
  i5002.m_FillAmount = i5003[6]
  i5002.m_FillClockwise = !!i5003[7]
  i5002.m_FillOrigin = i5003[8]
  i5002.m_UseSpriteMesh = !!i5003[9]
  i5002.m_PixelsPerUnitMultiplier = i5003[10]
  request.r(i5003[11], i5003[12], 0, i5002, 'm_Material')
  i5002.m_Maskable = !!i5003[13]
  i5002.m_Color = new pc.Color(i5003[14], i5003[15], i5003[16], i5003[17])
  i5002.m_RaycastTarget = !!i5003[18]
  i5002.m_RaycastPadding = new pc.Vec4( i5003[19], i5003[20], i5003[21], i5003[22] )
  return i5002
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i5004 = root || request.c( 'WaterSplash' )
  var i5005 = data
  request.r(i5005[0], i5005[1], 0, i5004, 'tf')
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5007 = data
  i5006.center = new pc.Vec3( i5007[0], i5007[1], i5007[2] )
  i5006.radius = i5007[3]
  i5006.enabled = !!i5007[4]
  i5006.isTrigger = !!i5007[5]
  request.r(i5007[6], i5007[7], 0, i5006, 'material')
  return i5006
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i5008 = root || request.c( 'ItemDraggable' )
  var i5009 = data
  i5008.isDraggable = !!i5009[0]
  request.r(i5009[1], i5009[2], 0, i5008, 'returnTransform')
  i5008.setParentToReturnTransform = !!i5009[3]
  i5008.returnToStartOnDragFailed = !!i5009[4]
  i5008.returnToExactReturnTransformPosition = !!i5009[5]
  i5008.targetItemType = i5009[6]
  request.r(i5009[7], i5009[8], 0, i5008, 'item')
  i5008.checkState = !!i5009[9]
  request.r(i5009[10], i5009[11], 0, i5008, 'shadowObject')
  i5008.playReturnToStartFinishSound = !!i5009[12]
  i5008.returnToStartFinishFxType = i5009[13]
  i5008.spawnBreakHeartOnDropFail = !!i5009[14]
  i5008.playBeginDragSound = !!i5009[15]
  i5008.beginDragFxType = i5009[16]
  i5008.liftOffset = i5009[17]
  i5008.dragScaleMultiplier = i5009[18]
  i5008.dragScaleDuration = i5009[19]
  i5008.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i5009[20], i5008.onBeginDrag)
  i5008.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i5009[21], i5008.onDropSuccess)
  i5008.onDropFail = request.d('UnityEngine.Events.UnityEvent', i5009[22], i5008.onDropFail)
  i5008.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i5009[23], i5008.onReturnToStartComplete)
  return i5008
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.Events.UnityEvent' )
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

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i5022 = root || request.c( 'ItemMoveToTarget' )
  var i5023 = data
  request.r(i5023[0], i5023[1], 0, i5022, 'defaultTarget')
  i5022.duration = i5023[2]
  i5022.useAnimationCurve = !!i5023[3]
  i5022.moveCurve = new pc.AnimationCurve( { keys_flow: i5023[4] } )
  i5022.easeType = i5023[5]
  i5022.moveType = i5023[6]
  i5022.jumpPower = i5023[7]
  i5022.numJumps = i5023[8]
  i5022.rotate360DuringJump = !!i5023[9]
  i5022.flipRotate = !!i5023[10]
  i5022.angleRotate = i5023[11]
  i5022.scaleOnMove = !!i5023[12]
  i5022.endScaleMultiplier = i5023[13]
  i5022.setParentToTarget = !!i5023[14]
  i5022.onComplete = request.d('UnityEngine.Events.UnityEvent', i5023[15], i5022.onComplete)
  i5022.lockInputWhileMoving = !!i5023[16]
  i5022.resetParentBeforeMove = !!i5023[17]
  return i5022
}

Deserializers["Paper"] = function (request, data, root) {
  var i5024 = root || request.c( 'Paper' )
  var i5025 = data
  i5024.isUse = !!i5025[0]
  request.r(i5025[1], i5025[2], 0, i5024, 'paper')
  request.r(i5025[3], i5025[4], 0, i5024, 'paperTrash')
  request.r(i5025[5], i5025[6], 0, i5024, 'itemDragRaycastTarget')
  request.r(i5025[7], i5025[8], 0, i5024, 'curentCollider')
  i5024.isDone = !!i5025[9]
  i5024.onProcess = !!i5025[10]
  i5024.requireMatchingTargetTypeForHandTut = !!i5025[11]
  request.r(i5025[12], i5025[13], 0, i5024, 'itemDraggable')
  request.r(i5025[14], i5025[15], 0, i5024, 'itemClickable')
  request.r(i5025[16], i5025[17], 0, i5024, 'itemStirring')
  request.r(i5025[18], i5025[19], 0, i5024, 'itemKnifeSpriteMaskCutter')
  request.r(i5025[20], i5025[21], 0, i5024, 'itemSpriteMaskPainter')
  request.r(i5025[22], i5025[23], 0, i5024, 'itemDragSpriteMaskPainter')
  request.r(i5025[24], i5025[25], 0, i5024, 'itemMoveToTarget')
  request.r(i5025[26], i5025[27], 0, i5024, 'animator')
  i5024.itemType = i5025[28]
  request.r(i5025[29], i5025[30], 0, i5024, 'spriteRenderer')
  i5024.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5025[31], i5024.onKnifeIn)
  request.r(i5025[32], i5025[33], 0, i5024, 'knifePos')
  i5024.heartEffectScale = i5025[34]
  i5024.breakHeartEffectScale = i5025[35]
  i5024.blinkEffectScale = i5025[36]
  i5024.mergeEffectScale = i5025[37]
  i5024.playMoveToTargetFinishSound = !!i5025[38]
  i5024.moveToTargetFinishFxType = i5025[39]
  i5024.fxSpawnZPos = i5025[40]
  request.r(i5025[41], i5025[42], 0, i5024, 'tf')
  return i5024
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i5026 = root || request.c( 'ItemDragRaycastTarget' )
  var i5027 = data
  i5026.targetToFind = i5027[0]
  i5026.targetItemTypeWhenHit = i5027[1]
  i5026.targetItemTypeOnDropFail = i5027[2]
  request.r(i5027[3], i5027[4], 0, i5026, 'raycastPoint')
  i5026.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5027[5] )
  i5026.rayDistance = i5027[6]
  i5026.updateMoveDefaultTarget = !!i5027[7]
  i5026.invokeOnlyWhenTargetChanged = !!i5027[8]
  i5026.targetChangeEnabled = !!i5027[9]
  i5026.restoreTargetOnDropFail = !!i5027[10]
  i5026.resetCurrentTargetOnNoHit = !!i5027[11]
  i5026.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i5027[12], i5026.onTargetFound)
  i5026.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i5027[13], i5026.onTargetFoundWithItem)
  return i5026
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i5028 = root || request.c( 'ItemRaycastTargetEvent' )
  var i5029 = data
  i5028.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5029[0], i5028.m_PersistentCalls)
  return i5028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5031 = data
  request.r(i5031[0], i5031[1], 0, i5030, 'animatorController')
  request.r(i5031[2], i5031[3], 0, i5030, 'avatar')
  i5030.updateMode = i5031[4]
  i5030.hasTransformHierarchy = !!i5031[5]
  i5030.applyRootMotion = !!i5031[6]
  var i5033 = i5031[7]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 2, i5032, '')
  }
  i5030.humanBones = i5032
  i5030.enabled = !!i5031[8]
  return i5030
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i5036 = root || request.c( 'ItemSound' )
  var i5037 = data
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5039 = data
  i5038.name = i5039[0]
  i5038.index = i5039[1]
  i5038.startup = !!i5039[2]
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5041 = data
  i5040.planeDistance = i5041[0]
  i5040.referencePixelsPerUnit = i5041[1]
  i5040.isFallbackOverlay = !!i5041[2]
  i5040.renderMode = i5041[3]
  i5040.renderOrder = i5041[4]
  i5040.sortingLayerName = i5041[5]
  i5040.sortingOrder = i5041[6]
  i5040.scaleFactor = i5041[7]
  request.r(i5041[8], i5041[9], 0, i5040, 'worldCamera')
  i5040.overrideSorting = !!i5041[10]
  i5040.pixelPerfect = !!i5041[11]
  i5040.targetDisplay = i5041[12]
  i5040.overridePixelPerfect = !!i5041[13]
  i5040.enabled = !!i5041[14]
  return i5040
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5042 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5043 = data
  i5042.m_UiScaleMode = i5043[0]
  i5042.m_ReferencePixelsPerUnit = i5043[1]
  i5042.m_ScaleFactor = i5043[2]
  i5042.m_ReferenceResolution = new pc.Vec2( i5043[3], i5043[4] )
  i5042.m_ScreenMatchMode = i5043[5]
  i5042.m_MatchWidthOrHeight = i5043[6]
  i5042.m_PhysicalUnit = i5043[7]
  i5042.m_FallbackScreenDPI = i5043[8]
  i5042.m_DefaultSpriteDPI = i5043[9]
  i5042.m_DynamicPixelsPerUnit = i5043[10]
  i5042.m_PresetInfoIsWorld = !!i5043[11]
  return i5042
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5044 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5045 = data
  i5044.m_IgnoreReversedGraphics = !!i5045[0]
  i5044.m_BlockingObjects = i5045[1]
  i5044.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5045[2] )
  return i5044
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5046 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5047 = data
  i5046.m_hasFontAssetChanged = !!i5047[0]
  request.r(i5047[1], i5047[2], 0, i5046, 'm_baseMaterial')
  i5046.m_maskOffset = new pc.Vec4( i5047[3], i5047[4], i5047[5], i5047[6] )
  i5046.m_text = i5047[7]
  i5046.m_isRightToLeft = !!i5047[8]
  request.r(i5047[9], i5047[10], 0, i5046, 'm_fontAsset')
  request.r(i5047[11], i5047[12], 0, i5046, 'm_sharedMaterial')
  var i5049 = i5047[13]
  var i5048 = []
  for(var i = 0; i < i5049.length; i += 2) {
  request.r(i5049[i + 0], i5049[i + 1], 2, i5048, '')
  }
  i5046.m_fontSharedMaterials = i5048
  request.r(i5047[14], i5047[15], 0, i5046, 'm_fontMaterial')
  var i5051 = i5047[16]
  var i5050 = []
  for(var i = 0; i < i5051.length; i += 2) {
  request.r(i5051[i + 0], i5051[i + 1], 2, i5050, '')
  }
  i5046.m_fontMaterials = i5050
  i5046.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5047[17], i5047[18], i5047[19], i5047[20])
  i5046.m_fontColor = new pc.Color(i5047[21], i5047[22], i5047[23], i5047[24])
  i5046.m_enableVertexGradient = !!i5047[25]
  i5046.m_colorMode = i5047[26]
  i5046.m_fontColorGradient = request.d('TMPro.VertexGradient', i5047[27], i5046.m_fontColorGradient)
  request.r(i5047[28], i5047[29], 0, i5046, 'm_fontColorGradientPreset')
  request.r(i5047[30], i5047[31], 0, i5046, 'm_spriteAsset')
  i5046.m_tintAllSprites = !!i5047[32]
  request.r(i5047[33], i5047[34], 0, i5046, 'm_StyleSheet')
  i5046.m_TextStyleHashCode = i5047[35]
  i5046.m_overrideHtmlColors = !!i5047[36]
  i5046.m_faceColor = UnityEngine.Color32.ConstructColor(i5047[37], i5047[38], i5047[39], i5047[40])
  i5046.m_fontSize = i5047[41]
  i5046.m_fontSizeBase = i5047[42]
  i5046.m_fontWeight = i5047[43]
  i5046.m_enableAutoSizing = !!i5047[44]
  i5046.m_fontSizeMin = i5047[45]
  i5046.m_fontSizeMax = i5047[46]
  i5046.m_fontStyle = i5047[47]
  i5046.m_HorizontalAlignment = i5047[48]
  i5046.m_VerticalAlignment = i5047[49]
  i5046.m_textAlignment = i5047[50]
  i5046.m_characterSpacing = i5047[51]
  i5046.m_wordSpacing = i5047[52]
  i5046.m_lineSpacing = i5047[53]
  i5046.m_lineSpacingMax = i5047[54]
  i5046.m_paragraphSpacing = i5047[55]
  i5046.m_charWidthMaxAdj = i5047[56]
  i5046.m_TextWrappingMode = i5047[57]
  i5046.m_wordWrappingRatios = i5047[58]
  i5046.m_overflowMode = i5047[59]
  request.r(i5047[60], i5047[61], 0, i5046, 'm_linkedTextComponent')
  request.r(i5047[62], i5047[63], 0, i5046, 'parentLinkedComponent')
  i5046.m_enableKerning = !!i5047[64]
  var i5053 = i5047[65]
  var i5052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5053.length; i += 1) {
    i5052.add(i5053[i + 0]);
  }
  i5046.m_ActiveFontFeatures = i5052
  i5046.m_enableExtraPadding = !!i5047[66]
  i5046.checkPaddingRequired = !!i5047[67]
  i5046.m_isRichText = !!i5047[68]
  i5046.m_parseCtrlCharacters = !!i5047[69]
  i5046.m_isOrthographic = !!i5047[70]
  i5046.m_isCullingEnabled = !!i5047[71]
  i5046.m_horizontalMapping = i5047[72]
  i5046.m_verticalMapping = i5047[73]
  i5046.m_uvLineOffset = i5047[74]
  i5046.m_geometrySortingOrder = i5047[75]
  i5046.m_IsTextObjectScaleStatic = !!i5047[76]
  i5046.m_VertexBufferAutoSizeReduction = !!i5047[77]
  i5046.m_useMaxVisibleDescender = !!i5047[78]
  i5046.m_pageToDisplay = i5047[79]
  i5046.m_margin = new pc.Vec4( i5047[80], i5047[81], i5047[82], i5047[83] )
  i5046.m_isUsingLegacyAnimationComponent = !!i5047[84]
  i5046.m_isVolumetricText = !!i5047[85]
  request.r(i5047[86], i5047[87], 0, i5046, 'm_Material')
  i5046.m_EmojiFallbackSupport = !!i5047[88]
  i5046.m_Maskable = !!i5047[89]
  i5046.m_Color = new pc.Color(i5047[90], i5047[91], i5047[92], i5047[93])
  i5046.m_RaycastTarget = !!i5047[94]
  i5046.m_RaycastPadding = new pc.Vec4( i5047[95], i5047[96], i5047[97], i5047[98] )
  return i5046
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5054 = root || request.c( 'TMPro.VertexGradient' )
  var i5055 = data
  i5054.topLeft = new pc.Color(i5055[0], i5055[1], i5055[2], i5055[3])
  i5054.topRight = new pc.Color(i5055[4], i5055[5], i5055[6], i5055[7])
  i5054.bottomLeft = new pc.Color(i5055[8], i5055[9], i5055[10], i5055[11])
  i5054.bottomRight = new pc.Color(i5055[12], i5055[13], i5055[14], i5055[15])
  return i5054
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5058 = root || request.c( 'UnityEngine.UI.Button' )
  var i5059 = data
  i5058.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5059[0], i5058.m_OnClick)
  i5058.m_Navigation = request.d('UnityEngine.UI.Navigation', i5059[1], i5058.m_Navigation)
  i5058.m_Transition = i5059[2]
  i5058.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5059[3], i5058.m_Colors)
  i5058.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5059[4], i5058.m_SpriteState)
  i5058.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5059[5], i5058.m_AnimationTriggers)
  i5058.m_Interactable = !!i5059[6]
  request.r(i5059[7], i5059[8], 0, i5058, 'm_TargetGraphic')
  return i5058
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5060 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5061 = data
  i5060.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5061[0], i5060.m_PersistentCalls)
  return i5060
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5062 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5063 = data
  i5062.m_Mode = i5063[0]
  i5062.m_WrapAround = !!i5063[1]
  request.r(i5063[2], i5063[3], 0, i5062, 'm_SelectOnUp')
  request.r(i5063[4], i5063[5], 0, i5062, 'm_SelectOnDown')
  request.r(i5063[6], i5063[7], 0, i5062, 'm_SelectOnLeft')
  request.r(i5063[8], i5063[9], 0, i5062, 'm_SelectOnRight')
  return i5062
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5064 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5065 = data
  i5064.m_NormalColor = new pc.Color(i5065[0], i5065[1], i5065[2], i5065[3])
  i5064.m_HighlightedColor = new pc.Color(i5065[4], i5065[5], i5065[6], i5065[7])
  i5064.m_PressedColor = new pc.Color(i5065[8], i5065[9], i5065[10], i5065[11])
  i5064.m_SelectedColor = new pc.Color(i5065[12], i5065[13], i5065[14], i5065[15])
  i5064.m_DisabledColor = new pc.Color(i5065[16], i5065[17], i5065[18], i5065[19])
  i5064.m_ColorMultiplier = i5065[20]
  i5064.m_FadeDuration = i5065[21]
  return i5064
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5066 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5067 = data
  request.r(i5067[0], i5067[1], 0, i5066, 'm_HighlightedSprite')
  request.r(i5067[2], i5067[3], 0, i5066, 'm_PressedSprite')
  request.r(i5067[4], i5067[5], 0, i5066, 'm_SelectedSprite')
  request.r(i5067[6], i5067[7], 0, i5066, 'm_DisabledSprite')
  return i5066
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5068 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5069 = data
  i5068.m_NormalTrigger = i5069[0]
  i5068.m_HighlightedTrigger = i5069[1]
  i5068.m_PressedTrigger = i5069[2]
  i5068.m_SelectedTrigger = i5069[3]
  i5068.m_DisabledTrigger = i5069[4]
  return i5068
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i5070 = root || request.c( 'UnityEngine.UI.Slider' )
  var i5071 = data
  request.r(i5071[0], i5071[1], 0, i5070, 'm_FillRect')
  request.r(i5071[2], i5071[3], 0, i5070, 'm_HandleRect')
  i5070.m_Direction = i5071[4]
  i5070.m_MinValue = i5071[5]
  i5070.m_MaxValue = i5071[6]
  i5070.m_WholeNumbers = !!i5071[7]
  i5070.m_Value = i5071[8]
  i5070.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i5071[9], i5070.m_OnValueChanged)
  i5070.m_Navigation = request.d('UnityEngine.UI.Navigation', i5071[10], i5070.m_Navigation)
  i5070.m_Transition = i5071[11]
  i5070.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5071[12], i5070.m_Colors)
  i5070.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5071[13], i5070.m_SpriteState)
  i5070.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5071[14], i5070.m_AnimationTriggers)
  i5070.m_Interactable = !!i5071[15]
  request.r(i5071[16], i5071[17], 0, i5070, 'm_TargetGraphic')
  return i5070
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i5072 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i5073 = data
  i5072.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5073[0], i5072.m_PersistentCalls)
  return i5072
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i5074 = root || request.c( 'ProgressSlider' )
  var i5075 = data
  request.r(i5075[0], i5075[1], 0, i5074, 'progressSlider')
  i5074.maxProgressItems = i5075[2]
  i5074.startProgressItems = i5075[3]
  request.r(i5075[4], i5075[5], 0, i5074, 'progressText')
  return i5074
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5076 = root || request.c( 'Ply_Pool' )
  var i5077 = data
  var i5079 = i5077[0]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( request.d('Ply_Pool+PoolAmount', i5079[i + 0]) );
  }
  i5076.poolAmounts = i5078
  request.r(i5077[1], i5077[2], 0, i5076, 'poolHolder')
  return i5076
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5082 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5083 = data
  i5082.type = i5083[0]
  i5082.amount = i5083[1]
  request.r(i5083[2], i5083[3], 0, i5082, 'gameUnit')
  return i5082
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5084 = root || request.c( 'Ply_SoundManager' )
  var i5085 = data
  var i5087 = i5085[0]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.push( request.d('Ply_SoundManager+FxAudio', i5087[i + 0]) );
  }
  i5084.fxAudios = i5086
  var i5089 = i5085[1]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 2) {
  request.r(i5089[i + 0], i5089[i + 1], 2, i5088, '')
  }
  i5084.audioClips = i5088
  request.r(i5085[2], i5085[3], 0, i5084, 'sound')
  return i5084
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i5092 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i5093 = data
  i5092.fxType = i5093[0]
  request.r(i5093[1], i5093[2], 0, i5092, 'audioClip')
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5097 = data
  request.r(i5097[0], i5097[1], 0, i5096, 'clip')
  request.r(i5097[2], i5097[3], 0, i5096, 'outputAudioMixerGroup')
  i5096.playOnAwake = !!i5097[4]
  i5096.loop = !!i5097[5]
  i5096.time = i5097[6]
  i5096.volume = i5097[7]
  i5096.pitch = i5097[8]
  i5096.enabled = !!i5097[9]
  return i5096
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5098 = root || request.c( 'GameManager' )
  var i5099 = data
  i5098.isPlaying = !!i5099[0]
  i5098.isTutorial = !!i5099[1]
  i5098.isGotoStore = !!i5099[2]
  i5098.isLoseGame = !!i5099[3]
  i5098.countMove = i5099[4]
  i5098.currentLayer = i5099[5]
  request.r(i5099[6], i5099[7], 0, i5098, 'trashCan')
  request.r(i5099[8], i5099[9], 0, i5098, 'step1')
  request.r(i5099[10], i5099[11], 0, i5098, 'paperBox')
  return i5098
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5100 = root || request.c( 'UIManager' )
  var i5101 = data
  request.r(i5101[0], i5101[1], 0, i5100, 'winUI')
  request.r(i5101[2], i5101[3], 0, i5100, 'loseUI')
  request.r(i5101[4], i5101[5], 0, i5100, 'tutorial')
  request.r(i5101[6], i5101[7], 0, i5100, 'verticalUI')
  request.r(i5101[8], i5101[9], 0, i5100, 'horizontalUI')
  request.r(i5101[10], i5101[11], 0, i5100, 'downloadBtn')
  request.r(i5101[12], i5101[13], 0, i5100, 'horizontalDownloadBtn')
  request.r(i5101[14], i5101[15], 0, i5100, 'textAnim')
  i5100.isGoogleBuild = !!i5101[16]
  i5100.screenWidth = i5101[17]
  i5100.screenHeight = i5101[18]
  i5100.scaleHeightOnWidth = i5101[19]
  i5100.isVertical = !!i5101[20]
  i5100.isScreenVertical = !!i5101[21]
  request.r(i5101[22], i5101[23], 0, i5100, 'cam')
  i5100.verticalUIHeightOnWidthRatio = i5101[24]
  i5100.scaleCameraOnValidate = !!i5101[25]
  i5100.screenVerticalHeightOnWidthRatio = i5101[26]
  i5100.useContinuousScaling = !!i5101[27]
  i5100.baseOrthographicSize = i5101[28]
  i5100.baseAspect = i5101[29]
  i5100.landscapeSizeRatio = i5101[30]
  i5100.defaultPortraitSizeRatio = i5101[31]
  var i5103 = i5101[32]
  var i5102 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.add(request.d('ScreenScaleStep', i5103[i + 0]));
  }
  i5100.discreteScaleSteps = i5102
  i5100.usePerspectiveCamera = !!i5101[33]
  request.r(i5101[34], i5101[35], 0, i5100, 'perspectiveFocus')
  i5100.perspectiveFocusDistance = i5101[36]
  i5100.perspectivePadding = i5101[37]
  i5100.fitRendererBounds = !!i5101[38]
  request.r(i5101[39], i5101[40], 0, i5100, 'boundsRoot')
  var i5105 = i5101[41]
  var i5104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5105.length; i += 2) {
  request.r(i5105[i + 0], i5105[i + 1], 1, i5104, '')
  }
  i5100.boundsRenderers = i5104
  return i5100
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5108 = root || request.c( 'ScreenScaleStep' )
  var i5109 = data
  i5108.heightOnWidthRatio = i5109[0]
  i5108.orthographicSize = i5109[1]
  return i5108
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5112 = root || request.c( 'InputManager' )
  var i5113 = data
  i5112.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5113[0] )
  i5112.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5113[1] )
  i5112.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5113[2] )
  i5112.isDragging = !!i5113[3]
  return i5112
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i5114 = root || request.c( 'HandTutManager' )
  var i5115 = data
  var i5117 = i5115[0]
  var i5116 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5117.length; i += 2) {
  request.r(i5117[i + 0], i5117[i + 1], 1, i5116, '')
  }
  i5114.items = i5116
  request.r(i5115[1], i5115[2], 0, i5114, 'knife')
  request.r(i5115[3], i5115[4], 0, i5114, 'knife2')
  request.r(i5115[5], i5115[6], 0, i5114, 'handTutObject')
  request.r(i5115[7], i5115[8], 0, i5114, 'tapToCookObject')
  request.r(i5115[9], i5115[10], 0, i5114, 'oilItem')
  request.r(i5115[11], i5115[12], 0, i5114, 'stoveToggleEvent')
  request.r(i5115[13], i5115[14], 0, i5114, 'waterToggleEvent')
  request.r(i5115[15], i5115[16], 0, i5114, 'sinkBlock')
  var i5119 = i5115[17]
  var i5118 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i5119.length; i += 2) {
  request.r(i5119[i + 0], i5119[i + 1], 1, i5118, '')
  }
  i5114.itemsInWater = i5118
  i5114.noDelayItemCount = i5115[18]
  i5114.breakHeartNoDelayThreshold = i5115[19]
  i5114.shortIdleDelay = i5115[20]
  i5114.maxHandTutShowCount = i5115[21]
  i5114.showSinkWaterTutorialOnStart = !!i5115[22]
  i5114.waitForBowlIntro = !!i5115[23]
  i5114.idleDelay = i5115[24]
  i5114.firstHandTutDelay = i5115[25]
  i5114.phaseHandTutDelay = i5115[26]
  i5114.moveDuration = i5115[27]
  i5114.dragFadeDuration = i5115[28]
  i5114.clickScaleDuration = i5115[29]
  i5114.waitAtEndDuration = i5115[30]
  i5114.handZPosition = i5115[31]
  i5114.clickScaleMultiplier = i5115[32]
  i5114.moveEase = i5115[33]
  return i5114
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i5124 = root || request.c( 'SortChildByZPos' )
  var i5125 = data
  request.r(i5125[0], i5125[1], 0, i5124, 'transformToSort')
  var i5127 = i5125[2]
  var i5126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5127.length; i += 2) {
  request.r(i5127[i + 0], i5127[i + 1], 1, i5126, '')
  }
  i5124.childrenToSort = i5126
  i5124.zOffset = i5125[3]
  i5124.baseZ = i5125[4]
  return i5124
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i5130 = root || request.c( 'PhaseManager' )
  var i5131 = data
  var i5133 = i5131[0]
  var i5132 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.add(request.d('PhaseData', i5133[i + 0]));
  }
  i5130.phases = i5132
  i5130.transitionType = i5131[1]
  i5130.transitionDuration = i5131[2]
  i5130.delayBeforeNextPhase = i5131[3]
  i5130.offScreenLeftX = i5131[4]
  i5130.offScreenRightX = i5131[5]
  i5130.offScreenBottomY = i5131[6]
  i5130.offScreenTopY = i5131[7]
  i5130.centerScreenX = i5131[8]
  request.r(i5131[9], i5131[10], 0, i5130, 'phaseTransitionObject')
  i5130.phaseTransitionObjectDuration = i5131[11]
  i5130.currentPhaseIndex = i5131[12]
  i5130.currentStepCount = i5131[13]
  i5130.isECPopup = !!i5131[14]
  return i5130
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i5136 = root || request.c( 'PhaseData' )
  var i5137 = data
  request.r(i5137[0], i5137[1], 0, i5136, 'phaseObject')
  i5136.totalSteps = i5137[2]
  i5136.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i5137[3], i5136.onPhaseReady)
  return i5136
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i5138 = root || request.c( 'ItemTypeDoneManager' )
  var i5139 = data
  var i5141 = i5139[0]
  var i5140 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i5141[i + 0]));
  }
  i5138.itemTypeGroups = i5140
  return i5138
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i5144 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i5145 = data
  i5144.itemType = i5145[0]
  var i5147 = i5145[1]
  var i5146 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5147.length; i += 2) {
  request.r(i5147[i + 0], i5147[i + 1], 1, i5146, '')
  }
  i5144.items = i5146
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5149 = data
  i5148.aspect = i5149[0]
  i5148.orthographic = !!i5149[1]
  i5148.orthographicSize = i5149[2]
  i5148.backgroundColor = new pc.Color(i5149[3], i5149[4], i5149[5], i5149[6])
  i5148.nearClipPlane = i5149[7]
  i5148.farClipPlane = i5149[8]
  i5148.fieldOfView = i5149[9]
  i5148.depth = i5149[10]
  i5148.clearFlags = i5149[11]
  i5148.cullingMask = i5149[12]
  i5148.rect = i5149[13]
  request.r(i5149[14], i5149[15], 0, i5148, 'targetTexture')
  i5148.usePhysicalProperties = !!i5149[16]
  i5148.focalLength = i5149[17]
  i5148.sensorSize = new pc.Vec2( i5149[18], i5149[19] )
  i5148.lensShift = new pc.Vec2( i5149[20], i5149[21] )
  i5148.gateFit = i5149[22]
  i5148.commandBufferCount = i5149[23]
  i5148.cameraType = i5149[24]
  i5148.enabled = !!i5149[25]
  return i5148
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5150 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5151 = data
  request.r(i5151[0], i5151[1], 0, i5150, 'm_FirstSelected')
  i5150.m_sendNavigationEvents = !!i5151[2]
  i5150.m_DragThreshold = i5151[3]
  return i5150
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5152 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5153 = data
  i5152.m_HorizontalAxis = i5153[0]
  i5152.m_VerticalAxis = i5153[1]
  i5152.m_SubmitButton = i5153[2]
  i5152.m_CancelButton = i5153[3]
  i5152.m_InputActionsPerSecond = i5153[4]
  i5152.m_RepeatDelay = i5153[5]
  i5152.m_ForceModuleActive = !!i5153[6]
  i5152.m_SendPointerHoverToParent = !!i5153[7]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5155 = data
  i5154.center = new pc.Vec3( i5155[0], i5155[1], i5155[2] )
  i5154.radius = i5155[3]
  i5154.height = i5155[4]
  i5154.direction = i5155[5]
  i5154.enabled = !!i5155[6]
  i5154.isTrigger = !!i5155[7]
  request.r(i5155[8], i5155[9], 0, i5154, 'material')
  return i5154
}

Deserializers["Item"] = function (request, data, root) {
  var i5156 = root || request.c( 'Item' )
  var i5157 = data
  i5156.isDone = !!i5157[0]
  i5156.onProcess = !!i5157[1]
  i5156.requireMatchingTargetTypeForHandTut = !!i5157[2]
  request.r(i5157[3], i5157[4], 0, i5156, 'itemDraggable')
  request.r(i5157[5], i5157[6], 0, i5156, 'itemClickable')
  request.r(i5157[7], i5157[8], 0, i5156, 'itemStirring')
  request.r(i5157[9], i5157[10], 0, i5156, 'itemKnifeSpriteMaskCutter')
  request.r(i5157[11], i5157[12], 0, i5156, 'itemSpriteMaskPainter')
  request.r(i5157[13], i5157[14], 0, i5156, 'itemDragSpriteMaskPainter')
  request.r(i5157[15], i5157[16], 0, i5156, 'itemMoveToTarget')
  request.r(i5157[17], i5157[18], 0, i5156, 'animator')
  i5156.itemType = i5157[19]
  request.r(i5157[20], i5157[21], 0, i5156, 'spriteRenderer')
  i5156.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5157[22], i5156.onKnifeIn)
  request.r(i5157[23], i5157[24], 0, i5156, 'knifePos')
  i5156.heartEffectScale = i5157[25]
  i5156.breakHeartEffectScale = i5157[26]
  i5156.blinkEffectScale = i5157[27]
  i5156.mergeEffectScale = i5157[28]
  i5156.playMoveToTargetFinishSound = !!i5157[29]
  i5156.moveToTargetFinishFxType = i5157[30]
  i5156.fxSpawnZPos = i5157[31]
  request.r(i5157[32], i5157[33], 0, i5156, 'tf')
  return i5156
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i5158 = root || request.c( 'ItemStirring' )
  var i5159 = data
  i5158.stirRadius = i5159[0]
  request.r(i5159[1], i5159[2], 0, i5158, 'stirrerTransform')
  request.r(i5159[3], i5159[4], 0, i5158, 'centerPoint')
  i5158.movementMode = i5159[5]
  i5158.lineLength = i5159[6]
  i5158.lineDirection = new pc.Vec3( i5159[7], i5159[8], i5159[9] )
  i5158.flipScaleYByLineDragDirection = !!i5159[10]
  request.r(i5159[11], i5159[12], 0, i5158, 'flipScaleTarget')
  request.r(i5159[13], i5159[14], 0, i5158, 'targetAnimator')
  i5158.targetStateName = i5159[15]
  i5158.targetLayer = i5159[16]
  i5158.stoppedSpeed = i5159[17]
  i5158.minDragDistanceToAnimate = i5159[18]
  i5158.dragSpeedMultiplier = i5159[19]
  i5158.minAnimatorSpeed = i5159[20]
  i5158.maxAnimatorSpeed = i5159[21]
  i5158.speedBlendDuration = i5159[22]
  i5158.completeNormalizedTime = i5159[23]
  i5158.resetAnimationOnFirstBegin = !!i5159[24]
  var i5161 = i5159[25]
  var i5160 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i5161.length; i += 1) {
    i5160.add(request.d('StirMilestone', i5161[i + 0]));
  }
  i5158.milestones = i5160
  i5158.spawnProgressBarOnStir = !!i5159[26]
  request.r(i5159[27], i5159[28], 0, i5158, 'spawnProgressBarPoint')
  i5158.rollingSoundCooldown = i5159[29]
  i5158.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i5159[30], i5158.onStirBegin)
  i5158.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i5159[31], i5158.onStirComplete)
  return i5158
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i5164 = root || request.c( 'StirMilestone' )
  var i5165 = data
  i5164.distanceThreshold = i5165[0]
  i5164.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i5165[1], i5164.onMilestoneReached)
  i5164.isReached = !!i5165[2]
  return i5164
}

Deserializers["Spartula"] = function (request, data, root) {
  var i5166 = root || request.c( 'Spartula' )
  var i5167 = data
  i5166.isDone = !!i5167[0]
  i5166.onProcess = !!i5167[1]
  i5166.requireMatchingTargetTypeForHandTut = !!i5167[2]
  request.r(i5167[3], i5167[4], 0, i5166, 'itemDraggable')
  request.r(i5167[5], i5167[6], 0, i5166, 'itemClickable')
  request.r(i5167[7], i5167[8], 0, i5166, 'itemStirring')
  request.r(i5167[9], i5167[10], 0, i5166, 'itemKnifeSpriteMaskCutter')
  request.r(i5167[11], i5167[12], 0, i5166, 'itemSpriteMaskPainter')
  request.r(i5167[13], i5167[14], 0, i5166, 'itemDragSpriteMaskPainter')
  request.r(i5167[15], i5167[16], 0, i5166, 'itemMoveToTarget')
  request.r(i5167[17], i5167[18], 0, i5166, 'animator')
  i5166.itemType = i5167[19]
  request.r(i5167[20], i5167[21], 0, i5166, 'spriteRenderer')
  i5166.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5167[22], i5166.onKnifeIn)
  request.r(i5167[23], i5167[24], 0, i5166, 'knifePos')
  i5166.heartEffectScale = i5167[25]
  i5166.breakHeartEffectScale = i5167[26]
  i5166.blinkEffectScale = i5167[27]
  i5166.mergeEffectScale = i5167[28]
  i5166.playMoveToTargetFinishSound = !!i5167[29]
  i5166.moveToTargetFinishFxType = i5167[30]
  i5166.fxSpawnZPos = i5167[31]
  request.r(i5167[32], i5167[33], 0, i5166, 'tf')
  return i5166
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i5168 = root || request.c( 'ItemDragChildRotator' )
  var i5169 = data
  request.r(i5169[0], i5169[1], 0, i5168, 'rotateTarget')
  i5168.dragEulerAngles = new pc.Vec3( i5169[2], i5169[3], i5169[4] )
  i5168.useLocalRotation = !!i5169[5]
  i5168.rotateRelative = !!i5169[6]
  i5168.rotateDuration = i5169[7]
  i5168.rotateEase = i5169[8]
  i5168.rotateMode = i5169[9]
  return i5168
}

Deserializers["Pan"] = function (request, data, root) {
  var i5170 = root || request.c( 'Pan' )
  var i5171 = data
  request.r(i5171[0], i5171[1], 0, i5170, 'fryingFX')
  i5170.isOilIn = !!i5171[2]
  i5170.isTurnOnStove = !!i5171[3]
  request.r(i5171[4], i5171[5], 0, i5170, 'stoveBtn')
  request.r(i5171[6], i5171[7], 0, i5170, 'spartula')
  i5170.stoveShakeDelay = i5171[8]
  i5170.stoveShakeDuration = i5171[9]
  i5170.vegeOn = i5171[10]
  request.r(i5171[11], i5171[12], 0, i5170, 'salt')
  request.r(i5171[13], i5171[14], 0, i5170, 'chillie')
  request.r(i5171[15], i5171[16], 0, i5170, 'meat')
  request.r(i5171[17], i5171[18], 0, i5170, 'cream')
  request.r(i5171[19], i5171[20], 0, i5170, 'noodle')
  request.r(i5171[21], i5171[22], 0, i5170, 'lastBowl')
  i5170.isDone = !!i5171[23]
  i5170.onProcess = !!i5171[24]
  i5170.requireMatchingTargetTypeForHandTut = !!i5171[25]
  request.r(i5171[26], i5171[27], 0, i5170, 'itemDraggable')
  request.r(i5171[28], i5171[29], 0, i5170, 'itemClickable')
  request.r(i5171[30], i5171[31], 0, i5170, 'itemStirring')
  request.r(i5171[32], i5171[33], 0, i5170, 'itemKnifeSpriteMaskCutter')
  request.r(i5171[34], i5171[35], 0, i5170, 'itemSpriteMaskPainter')
  request.r(i5171[36], i5171[37], 0, i5170, 'itemDragSpriteMaskPainter')
  request.r(i5171[38], i5171[39], 0, i5170, 'itemMoveToTarget')
  request.r(i5171[40], i5171[41], 0, i5170, 'animator')
  i5170.itemType = i5171[42]
  request.r(i5171[43], i5171[44], 0, i5170, 'spriteRenderer')
  i5170.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i5171[45], i5170.onKnifeIn)
  request.r(i5171[46], i5171[47], 0, i5170, 'knifePos')
  i5170.heartEffectScale = i5171[48]
  i5170.breakHeartEffectScale = i5171[49]
  i5170.blinkEffectScale = i5171[50]
  i5170.mergeEffectScale = i5171[51]
  i5170.playMoveToTargetFinishSound = !!i5171[52]
  i5170.moveToTargetFinishFxType = i5171[53]
  i5170.fxSpawnZPos = i5171[54]
  request.r(i5171[55], i5171[56], 0, i5170, 'tf')
  return i5170
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i5172 = root || request.c( 'Ply_ToggleEvent' )
  var i5173 = data
  i5172.isOn = !!i5173[0]
  i5172.applyStateOnEnable = !!i5173[1]
  i5172.applyStateOnClick = !!i5173[2]
  request.r(i5173[3], i5173[4], 0, i5172, 'targetObject')
  i5172.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i5173[5], i5172.onTurnOn)
  i5172.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i5173[6], i5172.onTurnOff)
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5175 = data
  i5174.ambientIntensity = i5175[0]
  i5174.reflectionIntensity = i5175[1]
  i5174.ambientMode = i5175[2]
  i5174.ambientLight = new pc.Color(i5175[3], i5175[4], i5175[5], i5175[6])
  i5174.ambientSkyColor = new pc.Color(i5175[7], i5175[8], i5175[9], i5175[10])
  i5174.ambientGroundColor = new pc.Color(i5175[11], i5175[12], i5175[13], i5175[14])
  i5174.ambientEquatorColor = new pc.Color(i5175[15], i5175[16], i5175[17], i5175[18])
  i5174.fogColor = new pc.Color(i5175[19], i5175[20], i5175[21], i5175[22])
  i5174.fogEndDistance = i5175[23]
  i5174.fogStartDistance = i5175[24]
  i5174.fogDensity = i5175[25]
  i5174.fog = !!i5175[26]
  request.r(i5175[27], i5175[28], 0, i5174, 'skybox')
  i5174.fogMode = i5175[29]
  var i5177 = i5175[30]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5177[i + 0]) );
  }
  i5174.lightmaps = i5176
  i5174.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5175[31], i5174.lightProbes)
  i5174.lightmapsMode = i5175[32]
  i5174.mixedBakeMode = i5175[33]
  i5174.environmentLightingMode = i5175[34]
  i5174.ambientProbe = new pc.SphericalHarmonicsL2(i5175[35])
  i5174.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5175[36])
  i5174.useReferenceAmbientProbe = !!i5175[37]
  request.r(i5175[38], i5175[39], 0, i5174, 'customReflection')
  request.r(i5175[40], i5175[41], 0, i5174, 'defaultReflection')
  i5174.defaultReflectionMode = i5175[42]
  i5174.defaultReflectionResolution = i5175[43]
  i5174.sunLightObjectId = i5175[44]
  i5174.pixelLightCount = i5175[45]
  i5174.defaultReflectionHDR = !!i5175[46]
  i5174.hasLightDataAsset = !!i5175[47]
  i5174.hasManualGenerate = !!i5175[48]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5181 = data
  request.r(i5181[0], i5181[1], 0, i5180, 'lightmapColor')
  request.r(i5181[2], i5181[3], 0, i5180, 'lightmapDirection')
  request.r(i5181[4], i5181[5], 0, i5180, 'shadowMask')
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5182 = root || new UnityEngine.LightProbes()
  var i5183 = data
  return i5182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5191 = data
  var i5193 = i5191[0]
  var i5192 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5193[i + 0]));
  }
  i5190.ShaderCompilationErrors = i5192
  i5190.name = i5191[1]
  i5190.guid = i5191[2]
  var i5195 = i5191[3]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.push( i5195[i + 0] );
  }
  i5190.shaderDefinedKeywords = i5194
  var i5197 = i5191[4]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 1) {
    i5196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5197[i + 0]) );
  }
  i5190.passes = i5196
  var i5199 = i5191[5]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5199[i + 0]) );
  }
  i5190.usePasses = i5198
  var i5201 = i5191[6]
  var i5200 = []
  for(var i = 0; i < i5201.length; i += 1) {
    i5200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5201[i + 0]) );
  }
  i5190.defaultParameterValues = i5200
  request.r(i5191[7], i5191[8], 0, i5190, 'unityFallbackShader')
  i5190.readDepth = !!i5191[9]
  i5190.hasDepthOnlyPass = !!i5191[10]
  i5190.isCreatedByShaderGraph = !!i5191[11]
  i5190.disableBatching = !!i5191[12]
  i5190.compiled = !!i5191[13]
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5205 = data
  i5204.shaderName = i5205[0]
  i5204.errorMessage = i5205[1]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5210 = root || new pc.UnityShaderPass()
  var i5211 = data
  i5210.id = i5211[0]
  i5210.subShaderIndex = i5211[1]
  i5210.name = i5211[2]
  i5210.passType = i5211[3]
  i5210.grabPassTextureName = i5211[4]
  i5210.usePass = !!i5211[5]
  i5210.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[6], i5210.zTest)
  i5210.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[7], i5210.zWrite)
  i5210.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[8], i5210.culling)
  i5210.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5211[9], i5210.blending)
  i5210.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5211[10], i5210.alphaBlending)
  i5210.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[11], i5210.colorWriteMask)
  i5210.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[12], i5210.offsetUnits)
  i5210.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[13], i5210.offsetFactor)
  i5210.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[14], i5210.stencilRef)
  i5210.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[15], i5210.stencilReadMask)
  i5210.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5211[16], i5210.stencilWriteMask)
  i5210.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5211[17], i5210.stencilOp)
  i5210.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5211[18], i5210.stencilOpFront)
  i5210.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5211[19], i5210.stencilOpBack)
  var i5213 = i5211[20]
  var i5212 = []
  for(var i = 0; i < i5213.length; i += 1) {
    i5212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5213[i + 0]) );
  }
  i5210.tags = i5212
  var i5215 = i5211[21]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 1) {
    i5214.push( i5215[i + 0] );
  }
  i5210.passDefinedKeywords = i5214
  var i5217 = i5211[22]
  var i5216 = []
  for(var i = 0; i < i5217.length; i += 1) {
    i5216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5217[i + 0]) );
  }
  i5210.passDefinedKeywordGroups = i5216
  var i5219 = i5211[23]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5219[i + 0]) );
  }
  i5210.variants = i5218
  var i5221 = i5211[24]
  var i5220 = []
  for(var i = 0; i < i5221.length; i += 1) {
    i5220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5221[i + 0]) );
  }
  i5210.excludedVariants = i5220
  i5210.hasDepthReader = !!i5211[25]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5223 = data
  i5222.val = i5223[0]
  i5222.name = i5223[1]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5225 = data
  i5224.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5225[0], i5224.src)
  i5224.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5225[1], i5224.dst)
  i5224.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5225[2], i5224.op)
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5227 = data
  i5226.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[0], i5226.pass)
  i5226.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[1], i5226.fail)
  i5226.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[2], i5226.zFail)
  i5226.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[3], i5226.comp)
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5231 = data
  i5230.name = i5231[0]
  i5230.value = i5231[1]
  return i5230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5235 = data
  var i5237 = i5235[0]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.push( i5237[i + 0] );
  }
  i5234.keywords = i5236
  i5234.hasDiscard = !!i5235[1]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5241 = data
  i5240.passId = i5241[0]
  i5240.subShaderIndex = i5241[1]
  var i5243 = i5241[2]
  var i5242 = []
  for(var i = 0; i < i5243.length; i += 1) {
    i5242.push( i5243[i + 0] );
  }
  i5240.keywords = i5242
  i5240.vertexProgram = i5241[3]
  i5240.fragmentProgram = i5241[4]
  i5240.exportedForWebGl2 = !!i5241[5]
  i5240.readDepth = !!i5241[6]
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5247 = data
  request.r(i5247[0], i5247[1], 0, i5246, 'shader')
  i5246.pass = i5247[2]
  return i5246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5251 = data
  i5250.name = i5251[0]
  i5250.type = i5251[1]
  i5250.value = new pc.Vec4( i5251[2], i5251[3], i5251[4], i5251[5] )
  i5250.textureValue = i5251[6]
  i5250.shaderPropertyFlag = i5251[7]
  return i5250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5253 = data
  i5252.name = i5253[0]
  request.r(i5253[1], i5253[2], 0, i5252, 'texture')
  i5252.aabb = i5253[3]
  i5252.vertices = i5253[4]
  i5252.triangles = i5253[5]
  i5252.textureRect = UnityEngine.Rect.MinMaxRect(i5253[6], i5253[7], i5253[8], i5253[9])
  i5252.packedRect = UnityEngine.Rect.MinMaxRect(i5253[10], i5253[11], i5253[12], i5253[13])
  i5252.border = new pc.Vec4( i5253[14], i5253[15], i5253[16], i5253[17] )
  i5252.transparency = i5253[18]
  i5252.bounds = i5253[19]
  i5252.pixelsPerUnit = i5253[20]
  i5252.textureWidth = i5253[21]
  i5252.textureHeight = i5253[22]
  i5252.nativeSize = new pc.Vec2( i5253[23], i5253[24] )
  i5252.pivot = new pc.Vec2( i5253[25], i5253[26] )
  i5252.textureRectOffset = new pc.Vec2( i5253[27], i5253[28] )
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5255 = data
  i5254.name = i5255[0]
  return i5254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5257 = data
  i5256.name = i5257[0]
  i5256.wrapMode = i5257[1]
  i5256.isLooping = !!i5257[2]
  i5256.length = i5257[3]
  var i5259 = i5257[4]
  var i5258 = []
  for(var i = 0; i < i5259.length; i += 1) {
    i5258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5259[i + 0]) );
  }
  i5256.curves = i5258
  var i5261 = i5257[5]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5261[i + 0]) );
  }
  i5256.events = i5260
  i5256.halfPrecision = !!i5257[6]
  i5256._frameRate = i5257[7]
  i5256.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5257[8], i5256.localBounds)
  i5256.hasMuscleCurves = !!i5257[9]
  var i5263 = i5257[10]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( i5263[i + 0] );
  }
  i5256.clipMuscleConstant = i5262
  i5256.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5257[11], i5256.clipBindingConstant)
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5267 = data
  i5266.path = i5267[0]
  i5266.hash = i5267[1]
  i5266.componentType = i5267[2]
  i5266.property = i5267[3]
  i5266.keys = i5267[4]
  var i5269 = i5267[5]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5269[i + 0]) );
  }
  i5266.objectReferenceKeys = i5268
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5273 = data
  i5272.time = i5273[0]
  request.r(i5273[1], i5273[2], 0, i5272, 'value')
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5277 = data
  i5276.functionName = i5277[0]
  i5276.floatParameter = i5277[1]
  i5276.intParameter = i5277[2]
  i5276.stringParameter = i5277[3]
  request.r(i5277[4], i5277[5], 0, i5276, 'objectReferenceParameter')
  i5276.time = i5277[6]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5279 = data
  i5278.center = new pc.Vec3( i5279[0], i5279[1], i5279[2] )
  i5278.extends = new pc.Vec3( i5279[3], i5279[4], i5279[5] )
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5283 = data
  var i5285 = i5283[0]
  var i5284 = []
  for(var i = 0; i < i5285.length; i += 1) {
    i5284.push( i5285[i + 0] );
  }
  i5282.genericBindings = i5284
  var i5287 = i5283[1]
  var i5286 = []
  for(var i = 0; i < i5287.length; i += 1) {
    i5286.push( i5287[i + 0] );
  }
  i5282.pptrCurveMapping = i5286
  return i5282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5289 = data
  i5288.name = i5289[0]
  var i5291 = i5289[1]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5291[i + 0]) );
  }
  i5288.layers = i5290
  var i5293 = i5289[2]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5293[i + 0]) );
  }
  i5288.parameters = i5292
  i5288.animationClips = i5289[3]
  i5288.avatarUnsupported = i5289[4]
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5297 = data
  i5296.name = i5297[0]
  i5296.defaultWeight = i5297[1]
  i5296.blendingMode = i5297[2]
  i5296.avatarMask = i5297[3]
  i5296.syncedLayerIndex = i5297[4]
  i5296.syncedLayerAffectsTiming = !!i5297[5]
  i5296.syncedLayers = i5297[6]
  i5296.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5297[7], i5296.stateMachine)
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5299 = data
  i5298.id = i5299[0]
  i5298.name = i5299[1]
  i5298.path = i5299[2]
  var i5301 = i5299[3]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5301[i + 0]) );
  }
  i5298.states = i5300
  var i5303 = i5299[4]
  var i5302 = []
  for(var i = 0; i < i5303.length; i += 1) {
    i5302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5303[i + 0]) );
  }
  i5298.machines = i5302
  var i5305 = i5299[5]
  var i5304 = []
  for(var i = 0; i < i5305.length; i += 1) {
    i5304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5305[i + 0]) );
  }
  i5298.entryStateTransitions = i5304
  var i5307 = i5299[6]
  var i5306 = []
  for(var i = 0; i < i5307.length; i += 1) {
    i5306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5307[i + 0]) );
  }
  i5298.exitStateTransitions = i5306
  var i5309 = i5299[7]
  var i5308 = []
  for(var i = 0; i < i5309.length; i += 1) {
    i5308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5309[i + 0]) );
  }
  i5298.anyStateTransitions = i5308
  i5298.defaultStateId = i5299[8]
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5313 = data
  i5312.id = i5313[0]
  i5312.name = i5313[1]
  i5312.cycleOffset = i5313[2]
  i5312.cycleOffsetParameter = i5313[3]
  i5312.cycleOffsetParameterActive = !!i5313[4]
  i5312.mirror = !!i5313[5]
  i5312.mirrorParameter = i5313[6]
  i5312.mirrorParameterActive = !!i5313[7]
  i5312.motionId = i5313[8]
  i5312.nameHash = i5313[9]
  i5312.fullPathHash = i5313[10]
  i5312.speed = i5313[11]
  i5312.speedParameter = i5313[12]
  i5312.speedParameterActive = !!i5313[13]
  i5312.tag = i5313[14]
  i5312.tagHash = i5313[15]
  i5312.writeDefaultValues = !!i5313[16]
  var i5315 = i5313[17]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 2) {
  request.r(i5315[i + 0], i5315[i + 1], 2, i5314, '')
  }
  i5312.behaviours = i5314
  var i5317 = i5313[18]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5317[i + 0]) );
  }
  i5312.transitions = i5316
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5323 = data
  i5322.fullPath = i5323[0]
  i5322.canTransitionToSelf = !!i5323[1]
  i5322.duration = i5323[2]
  i5322.exitTime = i5323[3]
  i5322.hasExitTime = !!i5323[4]
  i5322.hasFixedDuration = !!i5323[5]
  i5322.interruptionSource = i5323[6]
  i5322.offset = i5323[7]
  i5322.orderedInterruption = !!i5323[8]
  i5322.destinationStateId = i5323[9]
  i5322.isExit = !!i5323[10]
  i5322.mute = !!i5323[11]
  i5322.solo = !!i5323[12]
  var i5325 = i5323[13]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5325[i + 0]) );
  }
  i5322.conditions = i5324
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5331 = data
  i5330.destinationStateId = i5331[0]
  i5330.isExit = !!i5331[1]
  i5330.mute = !!i5331[2]
  i5330.solo = !!i5331[3]
  var i5333 = i5331[4]
  var i5332 = []
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5333[i + 0]) );
  }
  i5330.conditions = i5332
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5337 = data
  i5336.defaultBool = !!i5337[0]
  i5336.defaultFloat = i5337[1]
  i5336.defaultInt = i5337[2]
  i5336.name = i5337[3]
  i5336.nameHash = i5337[4]
  i5336.type = i5337[5]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5341 = data
  i5340.mode = i5341[0]
  i5340.parameter = i5341[1]
  i5340.threshold = i5341[2]
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5343 = data
  i5342.name = i5343[0]
  i5342.bytes64 = i5343[1]
  i5342.data = i5343[2]
  return i5342
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5344 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5345 = data
  i5344.normalStyle = i5345[0]
  i5344.normalSpacingOffset = i5345[1]
  i5344.boldStyle = i5345[2]
  i5344.boldSpacing = i5345[3]
  i5344.italicStyle = i5345[4]
  i5344.tabSize = i5345[5]
  request.r(i5345[6], i5345[7], 0, i5344, 'atlas')
  i5344.m_SourceFontFileGUID = i5345[8]
  i5344.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5345[9], i5344.m_CreationSettings)
  request.r(i5345[10], i5345[11], 0, i5344, 'm_SourceFontFile')
  i5344.m_SourceFontFilePath = i5345[12]
  i5344.m_AtlasPopulationMode = i5345[13]
  i5344.InternalDynamicOS = !!i5345[14]
  var i5347 = i5345[15]
  var i5346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.add(request.d('UnityEngine.TextCore.Glyph', i5347[i + 0]));
  }
  i5344.m_GlyphTable = i5346
  var i5349 = i5345[16]
  var i5348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5349.length; i += 1) {
    i5348.add(request.d('TMPro.TMP_Character', i5349[i + 0]));
  }
  i5344.m_CharacterTable = i5348
  var i5351 = i5345[17]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 2) {
  request.r(i5351[i + 0], i5351[i + 1], 2, i5350, '')
  }
  i5344.m_AtlasTextures = i5350
  i5344.m_AtlasTextureIndex = i5345[18]
  i5344.m_IsMultiAtlasTexturesEnabled = !!i5345[19]
  i5344.m_GetFontFeatures = !!i5345[20]
  i5344.m_ClearDynamicDataOnBuild = !!i5345[21]
  i5344.m_AtlasWidth = i5345[22]
  i5344.m_AtlasHeight = i5345[23]
  i5344.m_AtlasPadding = i5345[24]
  i5344.m_AtlasRenderMode = i5345[25]
  var i5353 = i5345[26]
  var i5352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.add(request.d('UnityEngine.TextCore.GlyphRect', i5353[i + 0]));
  }
  i5344.m_UsedGlyphRects = i5352
  var i5355 = i5345[27]
  var i5354 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.add(request.d('UnityEngine.TextCore.GlyphRect', i5355[i + 0]));
  }
  i5344.m_FreeGlyphRects = i5354
  i5344.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5345[28], i5344.m_FontFeatureTable)
  i5344.m_ShouldReimportFontFeatures = !!i5345[29]
  var i5357 = i5345[30]
  var i5356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5357.length; i += 2) {
  request.r(i5357[i + 0], i5357[i + 1], 1, i5356, '')
  }
  i5344.m_FallbackFontAssetTable = i5356
  var i5359 = i5345[31]
  var i5358 = []
  for(var i = 0; i < i5359.length; i += 1) {
    i5358.push( request.d('TMPro.TMP_FontWeightPair', i5359[i + 0]) );
  }
  i5344.m_FontWeightTable = i5358
  var i5361 = i5345[32]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.push( request.d('TMPro.TMP_FontWeightPair', i5361[i + 0]) );
  }
  i5344.fontWeights = i5360
  i5344.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5345[33], i5344.m_fontInfo)
  var i5363 = i5345[34]
  var i5362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5363.length; i += 1) {
    i5362.add(request.d('TMPro.TMP_Glyph', i5363[i + 0]));
  }
  i5344.m_glyphInfoList = i5362
  i5344.m_KerningTable = request.d('TMPro.KerningTable', i5345[35], i5344.m_KerningTable)
  var i5365 = i5345[36]
  var i5364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5365.length; i += 2) {
  request.r(i5365[i + 0], i5365[i + 1], 1, i5364, '')
  }
  i5344.fallbackFontAssets = i5364
  i5344.m_Version = i5345[37]
  i5344.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5345[38], i5344.m_FaceInfo)
  request.r(i5345[39], i5345[40], 0, i5344, 'm_Material')
  return i5344
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5366 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5367 = data
  i5366.sourceFontFileName = i5367[0]
  i5366.sourceFontFileGUID = i5367[1]
  i5366.faceIndex = i5367[2]
  i5366.pointSizeSamplingMode = i5367[3]
  i5366.pointSize = i5367[4]
  i5366.padding = i5367[5]
  i5366.paddingMode = i5367[6]
  i5366.packingMode = i5367[7]
  i5366.atlasWidth = i5367[8]
  i5366.atlasHeight = i5367[9]
  i5366.characterSetSelectionMode = i5367[10]
  i5366.characterSequence = i5367[11]
  i5366.referencedFontAssetGUID = i5367[12]
  i5366.referencedTextAssetGUID = i5367[13]
  i5366.fontStyle = i5367[14]
  i5366.fontStyleModifier = i5367[15]
  i5366.renderMode = i5367[16]
  i5366.includeFontFeatures = !!i5367[17]
  return i5366
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5370 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5371 = data
  i5370.m_Index = i5371[0]
  i5370.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5371[1], i5370.m_Metrics)
  i5370.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5371[2], i5370.m_GlyphRect)
  i5370.m_Scale = i5371[3]
  i5370.m_AtlasIndex = i5371[4]
  i5370.m_ClassDefinitionType = i5371[5]
  return i5370
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5372 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5373 = data
  i5372.m_Width = i5373[0]
  i5372.m_Height = i5373[1]
  i5372.m_HorizontalBearingX = i5373[2]
  i5372.m_HorizontalBearingY = i5373[3]
  i5372.m_HorizontalAdvance = i5373[4]
  return i5372
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5374 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5375 = data
  i5374.m_X = i5375[0]
  i5374.m_Y = i5375[1]
  i5374.m_Width = i5375[2]
  i5374.m_Height = i5375[3]
  return i5374
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5378 = root || request.c( 'TMPro.TMP_Character' )
  var i5379 = data
  i5378.m_ElementType = i5379[0]
  i5378.m_Unicode = i5379[1]
  i5378.m_GlyphIndex = i5379[2]
  i5378.m_Scale = i5379[3]
  return i5378
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5384 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5385 = data
  var i5387 = i5385[0]
  var i5386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5387.length; i += 1) {
    i5386.add(request.d('TMPro.MultipleSubstitutionRecord', i5387[i + 0]));
  }
  i5384.m_MultipleSubstitutionRecords = i5386
  var i5389 = i5385[1]
  var i5388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.add(request.d('TMPro.LigatureSubstitutionRecord', i5389[i + 0]));
  }
  i5384.m_LigatureSubstitutionRecords = i5388
  var i5391 = i5385[2]
  var i5390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5391[i + 0]));
  }
  i5384.m_GlyphPairAdjustmentRecords = i5390
  var i5393 = i5385[3]
  var i5392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5393[i + 0]));
  }
  i5384.m_MarkToBaseAdjustmentRecords = i5392
  var i5395 = i5385[4]
  var i5394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5395.length; i += 1) {
    i5394.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5395[i + 0]));
  }
  i5384.m_MarkToMarkAdjustmentRecords = i5394
  return i5384
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5398 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5399 = data
  i5398.m_TargetGlyphID = i5399[0]
  i5398.m_SubstituteGlyphIDs = i5399[1]
  return i5398
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5402 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5403 = data
  i5402.m_ComponentGlyphIDs = i5403[0]
  i5402.m_LigatureGlyphID = i5403[1]
  return i5402
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5406 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5407 = data
  i5406.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5407[0], i5406.m_FirstAdjustmentRecord)
  i5406.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5407[1], i5406.m_SecondAdjustmentRecord)
  i5406.m_FeatureLookupFlags = i5407[2]
  return i5406
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5410 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5411 = data
  i5410.m_BaseGlyphID = i5411[0]
  i5410.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5411[1], i5410.m_BaseGlyphAnchorPoint)
  i5410.m_MarkGlyphID = i5411[2]
  i5410.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5411[3], i5410.m_MarkPositionAdjustment)
  return i5410
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5414 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5415 = data
  i5414.m_BaseMarkGlyphID = i5415[0]
  i5414.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5415[1], i5414.m_BaseMarkGlyphAnchorPoint)
  i5414.m_CombiningMarkGlyphID = i5415[2]
  i5414.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5415[3], i5414.m_CombiningMarkPositionAdjustment)
  return i5414
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5420 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5421 = data
  request.r(i5421[0], i5421[1], 0, i5420, 'regularTypeface')
  request.r(i5421[2], i5421[3], 0, i5420, 'italicTypeface')
  return i5420
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5422 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5423 = data
  i5422.Name = i5423[0]
  i5422.PointSize = i5423[1]
  i5422.Scale = i5423[2]
  i5422.CharacterCount = i5423[3]
  i5422.LineHeight = i5423[4]
  i5422.Baseline = i5423[5]
  i5422.Ascender = i5423[6]
  i5422.CapHeight = i5423[7]
  i5422.Descender = i5423[8]
  i5422.CenterLine = i5423[9]
  i5422.SuperscriptOffset = i5423[10]
  i5422.SubscriptOffset = i5423[11]
  i5422.SubSize = i5423[12]
  i5422.Underline = i5423[13]
  i5422.UnderlineThickness = i5423[14]
  i5422.strikethrough = i5423[15]
  i5422.strikethroughThickness = i5423[16]
  i5422.TabWidth = i5423[17]
  i5422.Padding = i5423[18]
  i5422.AtlasWidth = i5423[19]
  i5422.AtlasHeight = i5423[20]
  return i5422
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5426 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5427 = data
  i5426.id = i5427[0]
  i5426.x = i5427[1]
  i5426.y = i5427[2]
  i5426.width = i5427[3]
  i5426.height = i5427[4]
  i5426.xOffset = i5427[5]
  i5426.yOffset = i5427[6]
  i5426.xAdvance = i5427[7]
  i5426.scale = i5427[8]
  return i5426
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5428 = root || request.c( 'TMPro.KerningTable' )
  var i5429 = data
  var i5431 = i5429[0]
  var i5430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.add(request.d('TMPro.KerningPair', i5431[i + 0]));
  }
  i5428.kerningPairs = i5430
  return i5428
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5434 = root || request.c( 'TMPro.KerningPair' )
  var i5435 = data
  i5434.xOffset = i5435[0]
  i5434.m_FirstGlyph = i5435[1]
  i5434.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5435[2], i5434.m_FirstGlyphAdjustments)
  i5434.m_SecondGlyph = i5435[3]
  i5434.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5435[4], i5434.m_SecondGlyphAdjustments)
  i5434.m_IgnoreSpacingAdjustments = !!i5435[5]
  return i5434
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5436 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5437 = data
  i5436.m_FaceIndex = i5437[0]
  i5436.m_FamilyName = i5437[1]
  i5436.m_StyleName = i5437[2]
  i5436.m_PointSize = i5437[3]
  i5436.m_Scale = i5437[4]
  i5436.m_UnitsPerEM = i5437[5]
  i5436.m_LineHeight = i5437[6]
  i5436.m_AscentLine = i5437[7]
  i5436.m_CapLine = i5437[8]
  i5436.m_MeanLine = i5437[9]
  i5436.m_Baseline = i5437[10]
  i5436.m_DescentLine = i5437[11]
  i5436.m_SuperscriptOffset = i5437[12]
  i5436.m_SuperscriptSize = i5437[13]
  i5436.m_SubscriptOffset = i5437[14]
  i5436.m_SubscriptSize = i5437[15]
  i5436.m_UnderlineOffset = i5437[16]
  i5436.m_UnderlineThickness = i5437[17]
  i5436.m_StrikethroughOffset = i5437[18]
  i5436.m_StrikethroughThickness = i5437[19]
  i5436.m_TabWidth = i5437[20]
  return i5436
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5439 = data
  i5438.useSafeMode = !!i5439[0]
  i5438.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5439[1], i5438.safeModeOptions)
  i5438.timeScale = i5439[2]
  i5438.unscaledTimeScale = i5439[3]
  i5438.useSmoothDeltaTime = !!i5439[4]
  i5438.maxSmoothUnscaledTime = i5439[5]
  i5438.rewindCallbackMode = i5439[6]
  i5438.showUnityEditorReport = !!i5439[7]
  i5438.logBehaviour = i5439[8]
  i5438.drawGizmos = !!i5439[9]
  i5438.defaultRecyclable = !!i5439[10]
  i5438.defaultAutoPlay = i5439[11]
  i5438.defaultUpdateType = i5439[12]
  i5438.defaultTimeScaleIndependent = !!i5439[13]
  i5438.defaultEaseType = i5439[14]
  i5438.defaultEaseOvershootOrAmplitude = i5439[15]
  i5438.defaultEasePeriod = i5439[16]
  i5438.defaultAutoKill = !!i5439[17]
  i5438.defaultLoopType = i5439[18]
  i5438.debugMode = !!i5439[19]
  i5438.debugStoreTargetId = !!i5439[20]
  i5438.showPreviewPanel = !!i5439[21]
  i5438.storeSettingsLocation = i5439[22]
  i5438.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5439[23], i5438.modules)
  i5438.createASMDEF = !!i5439[24]
  i5438.showPlayingTweens = !!i5439[25]
  i5438.showPausedTweens = !!i5439[26]
  return i5438
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5440 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5441 = data
  i5440.logBehaviour = i5441[0]
  i5440.nestedTweenFailureBehaviour = i5441[1]
  return i5440
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5443 = data
  i5442.showPanel = !!i5443[0]
  i5442.audioEnabled = !!i5443[1]
  i5442.physicsEnabled = !!i5443[2]
  i5442.physics2DEnabled = !!i5443[3]
  i5442.spriteEnabled = !!i5443[4]
  i5442.uiEnabled = !!i5443[5]
  i5442.uiToolkitEnabled = !!i5443[6]
  i5442.textMeshProEnabled = !!i5443[7]
  i5442.tk2DEnabled = !!i5443[8]
  i5442.deAudioEnabled = !!i5443[9]
  i5442.deUnityExtendedEnabled = !!i5443[10]
  i5442.epoOutlineEnabled = !!i5443[11]
  return i5442
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5444 = root || request.c( 'TMPro.TMP_Settings' )
  var i5445 = data
  i5444.assetVersion = i5445[0]
  i5444.m_TextWrappingMode = i5445[1]
  i5444.m_enableKerning = !!i5445[2]
  var i5447 = i5445[3]
  var i5446 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5447.length; i += 1) {
    i5446.add(i5447[i + 0]);
  }
  i5444.m_ActiveFontFeatures = i5446
  i5444.m_enableExtraPadding = !!i5445[4]
  i5444.m_enableTintAllSprites = !!i5445[5]
  i5444.m_enableParseEscapeCharacters = !!i5445[6]
  i5444.m_EnableRaycastTarget = !!i5445[7]
  i5444.m_GetFontFeaturesAtRuntime = !!i5445[8]
  i5444.m_missingGlyphCharacter = i5445[9]
  i5444.m_ClearDynamicDataOnBuild = !!i5445[10]
  i5444.m_warningsDisabled = !!i5445[11]
  request.r(i5445[12], i5445[13], 0, i5444, 'm_defaultFontAsset')
  i5444.m_defaultFontAssetPath = i5445[14]
  i5444.m_defaultFontSize = i5445[15]
  i5444.m_defaultAutoSizeMinRatio = i5445[16]
  i5444.m_defaultAutoSizeMaxRatio = i5445[17]
  i5444.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5445[18], i5445[19] )
  i5444.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5445[20], i5445[21] )
  i5444.m_autoSizeTextContainer = !!i5445[22]
  i5444.m_IsTextObjectScaleStatic = !!i5445[23]
  var i5449 = i5445[24]
  var i5448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5449.length; i += 2) {
  request.r(i5449[i + 0], i5449[i + 1], 1, i5448, '')
  }
  i5444.m_fallbackFontAssets = i5448
  i5444.m_matchMaterialPreset = !!i5445[25]
  i5444.m_HideSubTextObjects = !!i5445[26]
  request.r(i5445[27], i5445[28], 0, i5444, 'm_defaultSpriteAsset')
  i5444.m_defaultSpriteAssetPath = i5445[29]
  i5444.m_enableEmojiSupport = !!i5445[30]
  i5444.m_MissingCharacterSpriteUnicode = i5445[31]
  var i5451 = i5445[32]
  var i5450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5451.length; i += 2) {
  request.r(i5451[i + 0], i5451[i + 1], 1, i5450, '')
  }
  i5444.m_EmojiFallbackTextAssets = i5450
  i5444.m_defaultColorGradientPresetsPath = i5445[33]
  request.r(i5445[34], i5445[35], 0, i5444, 'm_defaultStyleSheet')
  i5444.m_StyleSheetsResourcePath = i5445[36]
  request.r(i5445[37], i5445[38], 0, i5444, 'm_leadingCharacters')
  request.r(i5445[39], i5445[40], 0, i5444, 'm_followingCharacters')
  i5444.m_UseModernHangulLineBreakingRules = !!i5445[41]
  return i5444
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5454 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5455 = data
  request.r(i5455[0], i5455[1], 0, i5454, 'spriteSheet')
  var i5457 = i5455[2]
  var i5456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.add(request.d('TMPro.TMP_Sprite', i5457[i + 0]));
  }
  i5454.spriteInfoList = i5456
  var i5459 = i5455[3]
  var i5458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5459.length; i += 2) {
  request.r(i5459[i + 0], i5459[i + 1], 1, i5458, '')
  }
  i5454.fallbackSpriteAssets = i5458
  var i5461 = i5455[4]
  var i5460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5461.length; i += 1) {
    i5460.add(request.d('TMPro.TMP_SpriteCharacter', i5461[i + 0]));
  }
  i5454.m_SpriteCharacterTable = i5460
  var i5463 = i5455[5]
  var i5462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.add(request.d('TMPro.TMP_SpriteGlyph', i5463[i + 0]));
  }
  i5454.m_GlyphTable = i5462
  i5454.m_Version = i5455[6]
  i5454.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5455[7], i5454.m_FaceInfo)
  request.r(i5455[8], i5455[9], 0, i5454, 'm_Material')
  return i5454
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5466 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5467 = data
  i5466.name = i5467[0]
  i5466.hashCode = i5467[1]
  i5466.unicode = i5467[2]
  i5466.pivot = new pc.Vec2( i5467[3], i5467[4] )
  request.r(i5467[5], i5467[6], 0, i5466, 'sprite')
  i5466.id = i5467[7]
  i5466.x = i5467[8]
  i5466.y = i5467[9]
  i5466.width = i5467[10]
  i5466.height = i5467[11]
  i5466.xOffset = i5467[12]
  i5466.yOffset = i5467[13]
  i5466.xAdvance = i5467[14]
  i5466.scale = i5467[15]
  return i5466
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5472 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5473 = data
  i5472.m_Name = i5473[0]
  i5472.m_ElementType = i5473[1]
  i5472.m_Unicode = i5473[2]
  i5472.m_GlyphIndex = i5473[3]
  i5472.m_Scale = i5473[4]
  return i5472
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5476 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5477 = data
  request.r(i5477[0], i5477[1], 0, i5476, 'sprite')
  i5476.m_Index = i5477[2]
  i5476.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5477[3], i5476.m_Metrics)
  i5476.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5477[4], i5476.m_GlyphRect)
  i5476.m_Scale = i5477[5]
  i5476.m_AtlasIndex = i5477[6]
  i5476.m_ClassDefinitionType = i5477[7]
  return i5476
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5478 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5479 = data
  var i5481 = i5479[0]
  var i5480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5481.length; i += 1) {
    i5480.add(request.d('TMPro.TMP_Style', i5481[i + 0]));
  }
  i5478.m_StyleList = i5480
  return i5478
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5484 = root || request.c( 'TMPro.TMP_Style' )
  var i5485 = data
  i5484.m_Name = i5485[0]
  i5484.m_HashCode = i5485[1]
  i5484.m_OpeningDefinition = i5485[2]
  i5484.m_ClosingDefinition = i5485[3]
  i5484.m_OpeningTagArray = i5485[4]
  i5484.m_ClosingTagArray = i5485[5]
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5487 = data
  var i5489 = i5487[0]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5489[i + 0]) );
  }
  i5486.files = i5488
  i5486.componentToPrefabIds = i5487[1]
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5493 = data
  i5492.path = i5493[0]
  request.r(i5493[1], i5493[2], 0, i5492, 'unityObject')
  return i5492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5495 = data
  var i5497 = i5495[0]
  var i5496 = []
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5497[i + 0]) );
  }
  i5494.scriptsExecutionOrder = i5496
  var i5499 = i5495[1]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5499[i + 0]) );
  }
  i5494.sortingLayers = i5498
  var i5501 = i5495[2]
  var i5500 = []
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5501[i + 0]) );
  }
  i5494.cullingLayers = i5500
  i5494.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5495[3], i5494.timeSettings)
  i5494.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5495[4], i5494.physicsSettings)
  i5494.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5495[5], i5494.physics2DSettings)
  i5494.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5495[6], i5494.qualitySettings)
  i5494.enableRealtimeShadows = !!i5495[7]
  i5494.enableAutoInstancing = !!i5495[8]
  i5494.enableStaticBatching = !!i5495[9]
  i5494.enableDynamicBatching = !!i5495[10]
  i5494.lightmapEncodingQuality = i5495[11]
  i5494.desiredColorSpace = i5495[12]
  var i5503 = i5495[13]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 1) {
    i5502.push( i5503[i + 0] );
  }
  i5494.allTags = i5502
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5507 = data
  i5506.name = i5507[0]
  i5506.value = i5507[1]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5511 = data
  i5510.id = i5511[0]
  i5510.name = i5511[1]
  i5510.value = i5511[2]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5515 = data
  i5514.id = i5515[0]
  i5514.name = i5515[1]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5517 = data
  i5516.fixedDeltaTime = i5517[0]
  i5516.maximumDeltaTime = i5517[1]
  i5516.timeScale = i5517[2]
  i5516.maximumParticleTimestep = i5517[3]
  return i5516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5519 = data
  i5518.gravity = new pc.Vec3( i5519[0], i5519[1], i5519[2] )
  i5518.defaultSolverIterations = i5519[3]
  i5518.bounceThreshold = i5519[4]
  i5518.autoSyncTransforms = !!i5519[5]
  i5518.autoSimulation = !!i5519[6]
  var i5521 = i5519[7]
  var i5520 = []
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5521[i + 0]) );
  }
  i5518.collisionMatrix = i5520
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5525 = data
  i5524.enabled = !!i5525[0]
  i5524.layerId = i5525[1]
  i5524.otherLayerId = i5525[2]
  return i5524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5527 = data
  request.r(i5527[0], i5527[1], 0, i5526, 'material')
  i5526.gravity = new pc.Vec2( i5527[2], i5527[3] )
  i5526.positionIterations = i5527[4]
  i5526.velocityIterations = i5527[5]
  i5526.velocityThreshold = i5527[6]
  i5526.maxLinearCorrection = i5527[7]
  i5526.maxAngularCorrection = i5527[8]
  i5526.maxTranslationSpeed = i5527[9]
  i5526.maxRotationSpeed = i5527[10]
  i5526.baumgarteScale = i5527[11]
  i5526.baumgarteTOIScale = i5527[12]
  i5526.timeToSleep = i5527[13]
  i5526.linearSleepTolerance = i5527[14]
  i5526.angularSleepTolerance = i5527[15]
  i5526.defaultContactOffset = i5527[16]
  i5526.autoSimulation = !!i5527[17]
  i5526.queriesHitTriggers = !!i5527[18]
  i5526.queriesStartInColliders = !!i5527[19]
  i5526.callbacksOnDisable = !!i5527[20]
  i5526.reuseCollisionCallbacks = !!i5527[21]
  i5526.autoSyncTransforms = !!i5527[22]
  var i5529 = i5527[23]
  var i5528 = []
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5529[i + 0]) );
  }
  i5526.collisionMatrix = i5528
  return i5526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5533 = data
  i5532.enabled = !!i5533[0]
  i5532.layerId = i5533[1]
  i5532.otherLayerId = i5533[2]
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5535 = data
  var i5537 = i5535[0]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5537[i + 0]) );
  }
  i5534.qualityLevels = i5536
  var i5539 = i5535[1]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.push( i5539[i + 0] );
  }
  i5534.names = i5538
  i5534.shadows = i5535[2]
  i5534.anisotropicFiltering = i5535[3]
  i5534.antiAliasing = i5535[4]
  i5534.lodBias = i5535[5]
  i5534.shadowCascades = i5535[6]
  i5534.shadowDistance = i5535[7]
  i5534.shadowmaskMode = i5535[8]
  i5534.shadowProjection = i5535[9]
  i5534.shadowResolution = i5535[10]
  i5534.softParticles = !!i5535[11]
  i5534.softVegetation = !!i5535[12]
  i5534.activeColorSpace = i5535[13]
  i5534.desiredColorSpace = i5535[14]
  i5534.masterTextureLimit = i5535[15]
  i5534.maxQueuedFrames = i5535[16]
  i5534.particleRaycastBudget = i5535[17]
  i5534.pixelLightCount = i5535[18]
  i5534.realtimeReflectionProbes = !!i5535[19]
  i5534.shadowCascade2Split = i5535[20]
  i5534.shadowCascade4Split = new pc.Vec3( i5535[21], i5535[22], i5535[23] )
  i5534.streamingMipmapsActive = !!i5535[24]
  i5534.vSyncCount = i5535[25]
  i5534.asyncUploadBufferSize = i5535[26]
  i5534.asyncUploadTimeSlice = i5535[27]
  i5534.billboardsFaceCameraPosition = !!i5535[28]
  i5534.shadowNearPlaneOffset = i5535[29]
  i5534.streamingMipmapsMemoryBudget = i5535[30]
  i5534.maximumLODLevel = i5535[31]
  i5534.streamingMipmapsAddAllCameras = !!i5535[32]
  i5534.streamingMipmapsMaxLevelReduction = i5535[33]
  i5534.streamingMipmapsRenderersPerFrame = i5535[34]
  i5534.resolutionScalingFixedDPIFactor = i5535[35]
  i5534.streamingMipmapsMaxFileIORequests = i5535[36]
  i5534.currentQualityLevel = i5535[37]
  return i5534
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5542 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5543 = data
  i5542.m_GlyphIndex = i5543[0]
  i5542.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5543[1], i5542.m_GlyphValueRecord)
  return i5542
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5544 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5545 = data
  i5544.m_XCoordinate = i5545[0]
  i5544.m_YCoordinate = i5545[1]
  return i5544
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5546 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5547 = data
  i5546.m_XPositionAdjustment = i5547[0]
  i5546.m_YPositionAdjustment = i5547[1]
  return i5546
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5548 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5549 = data
  i5548.xPlacement = i5549[0]
  i5548.yPlacement = i5549[1]
  i5548.xAdvance = i5549[2]
  i5548.yAdvance = i5549[3]
  return i5548
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5550 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5551 = data
  i5550.m_XPlacement = i5551[0]
  i5550.m_YPlacement = i5551[1]
  i5550.m_XAdvance = i5551[2]
  i5550.m_YAdvance = i5551[3]
  return i5550
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[28],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[28],"96":[97],"98":[99],"100":[99],"27":[13],"101":[102],"103":[20],"104":[105],"58":[20],"20":[105],"24":[20],"106":[20],"107":[105],"108":[105],"57":[105],"109":[13],"110":[16,13],"111":[97],"112":[16,13],"113":[25,97],"114":[97],"115":[97,116],"117":[75],"118":[82],"119":[120],"121":[122],"123":[5],"124":[28],"125":[126],"127":[13],"128":[97,13],"32":[13,16],"129":[13],"130":[16,13],"131":[97],"132":[16,13],"133":[13],"134":[135],"136":[135],"137":[135],"138":[13],"139":[13],"30":[27],"15":[16,13],"140":[13],"29":[27],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[13],"150":[16,13],"151":[13],"152":[13],"153":[13],"36":[13],"154":[16,13],"155":[13],"156":[54],"157":[54],"55":[54],"158":[54],"159":[28],"160":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Item","Spartula","Pan","Ply_ToggleEvent","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","ItemClickable","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "38.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v62_Spaghetti_TurkeySauce";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5018";

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

Deserializers.buildID = "8a542582-2045-49c2-a5d5-edb6486d60a6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

