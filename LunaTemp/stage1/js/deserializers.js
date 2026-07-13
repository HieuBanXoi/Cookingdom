var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6246 = root || request.c( 'UnityEngine.JointSpring' )
  var i6247 = data
  i6246.spring = i6247[0]
  i6246.damper = i6247[1]
  i6246.targetPosition = i6247[2]
  return i6246
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6248 = root || request.c( 'UnityEngine.JointMotor' )
  var i6249 = data
  i6248.m_TargetVelocity = i6249[0]
  i6248.m_Force = i6249[1]
  i6248.m_FreeSpin = i6249[2]
  return i6248
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6250 = root || request.c( 'UnityEngine.JointLimits' )
  var i6251 = data
  i6250.m_Min = i6251[0]
  i6250.m_Max = i6251[1]
  i6250.m_Bounciness = i6251[2]
  i6250.m_BounceMinVelocity = i6251[3]
  i6250.m_ContactDistance = i6251[4]
  i6250.minBounce = i6251[5]
  i6250.maxBounce = i6251[6]
  return i6250
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6252 = root || request.c( 'UnityEngine.JointDrive' )
  var i6253 = data
  i6252.m_PositionSpring = i6253[0]
  i6252.m_PositionDamper = i6253[1]
  i6252.m_MaximumForce = i6253[2]
  i6252.m_UseAcceleration = i6253[3]
  return i6252
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6254 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6255 = data
  i6254.m_Spring = i6255[0]
  i6254.m_Damper = i6255[1]
  return i6254
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6256 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6257 = data
  i6256.m_Limit = i6257[0]
  i6256.m_Bounciness = i6257[1]
  i6256.m_ContactDistance = i6257[2]
  return i6256
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6258 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6259 = data
  i6258.m_ExtremumSlip = i6259[0]
  i6258.m_ExtremumValue = i6259[1]
  i6258.m_AsymptoteSlip = i6259[2]
  i6258.m_AsymptoteValue = i6259[3]
  i6258.m_Stiffness = i6259[4]
  return i6258
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6260 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6261 = data
  i6260.m_LowerAngle = i6261[0]
  i6260.m_UpperAngle = i6261[1]
  return i6260
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6262 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6263 = data
  i6262.m_MotorSpeed = i6263[0]
  i6262.m_MaximumMotorTorque = i6263[1]
  return i6262
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6264 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6265 = data
  i6264.m_DampingRatio = i6265[0]
  i6264.m_Frequency = i6265[1]
  i6264.m_Angle = i6265[2]
  return i6264
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6266 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6267 = data
  i6266.m_LowerTranslation = i6267[0]
  i6266.m_UpperTranslation = i6267[1]
  return i6266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6268 = root || new pc.UnityMaterial()
  var i6269 = data
  i6268.name = i6269[0]
  request.r(i6269[1], i6269[2], 0, i6268, 'shader')
  i6268.renderQueue = i6269[3]
  i6268.enableInstancing = !!i6269[4]
  var i6271 = i6269[5]
  var i6270 = []
  for(var i = 0; i < i6271.length; i += 1) {
    i6270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6271[i + 0]) );
  }
  i6268.floatParameters = i6270
  var i6273 = i6269[6]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 1) {
    i6272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6273[i + 0]) );
  }
  i6268.colorParameters = i6272
  var i6275 = i6269[7]
  var i6274 = []
  for(var i = 0; i < i6275.length; i += 1) {
    i6274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6275[i + 0]) );
  }
  i6268.vectorParameters = i6274
  var i6277 = i6269[8]
  var i6276 = []
  for(var i = 0; i < i6277.length; i += 1) {
    i6276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6277[i + 0]) );
  }
  i6268.textureParameters = i6276
  var i6279 = i6269[9]
  var i6278 = []
  for(var i = 0; i < i6279.length; i += 1) {
    i6278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6279[i + 0]) );
  }
  i6268.materialFlags = i6278
  return i6268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6283 = data
  i6282.name = i6283[0]
  i6282.value = i6283[1]
  return i6282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6287 = data
  i6286.name = i6287[0]
  i6286.value = new pc.Color(i6287[1], i6287[2], i6287[3], i6287[4])
  return i6286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6291 = data
  i6290.name = i6291[0]
  i6290.value = new pc.Vec4( i6291[1], i6291[2], i6291[3], i6291[4] )
  return i6290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6295 = data
  i6294.name = i6295[0]
  request.r(i6295[1], i6295[2], 0, i6294, 'value')
  return i6294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6299 = data
  i6298.name = i6299[0]
  i6298.enabled = !!i6299[1]
  return i6298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6301 = data
  i6300.name = i6301[0]
  i6300.width = i6301[1]
  i6300.height = i6301[2]
  i6300.mipmapCount = i6301[3]
  i6300.anisoLevel = i6301[4]
  i6300.filterMode = i6301[5]
  i6300.hdr = !!i6301[6]
  i6300.format = i6301[7]
  i6300.wrapMode = i6301[8]
  i6300.alphaIsTransparency = !!i6301[9]
  i6300.alphaSource = i6301[10]
  i6300.graphicsFormat = i6301[11]
  i6300.sRGBTexture = !!i6301[12]
  i6300.desiredColorSpace = i6301[13]
  i6300.wrapU = i6301[14]
  i6300.wrapV = i6301[15]
  return i6300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6303 = data
  i6302.position = new pc.Vec3( i6303[0], i6303[1], i6303[2] )
  i6302.scale = new pc.Vec3( i6303[3], i6303[4], i6303[5] )
  i6302.rotation = new pc.Quat(i6303[6], i6303[7], i6303[8], i6303[9])
  return i6302
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i6304 = root || request.c( 'HeartEffect' )
  var i6305 = data
  i6304.defaultLifeTime = i6305[0]
  request.r(i6305[1], i6305[2], 0, i6304, 'tf')
  return i6304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6307 = data
  i6306.color = new pc.Color(i6307[0], i6307[1], i6307[2], i6307[3])
  request.r(i6307[4], i6307[5], 0, i6306, 'sprite')
  i6306.flipX = !!i6307[6]
  i6306.flipY = !!i6307[7]
  i6306.drawMode = i6307[8]
  i6306.size = new pc.Vec2( i6307[9], i6307[10] )
  i6306.tileMode = i6307[11]
  i6306.adaptiveModeThreshold = i6307[12]
  i6306.maskInteraction = i6307[13]
  i6306.spriteSortPoint = i6307[14]
  i6306.enabled = !!i6307[15]
  request.r(i6307[16], i6307[17], 0, i6306, 'sharedMaterial')
  var i6309 = i6307[18]
  var i6308 = []
  for(var i = 0; i < i6309.length; i += 2) {
  request.r(i6309[i + 0], i6309[i + 1], 2, i6308, '')
  }
  i6306.sharedMaterials = i6308
  i6306.receiveShadows = !!i6307[19]
  i6306.shadowCastingMode = i6307[20]
  i6306.sortingLayerID = i6307[21]
  i6306.sortingOrder = i6307[22]
  i6306.lightmapIndex = i6307[23]
  i6306.lightmapSceneIndex = i6307[24]
  i6306.lightmapScaleOffset = new pc.Vec4( i6307[25], i6307[26], i6307[27], i6307[28] )
  i6306.lightProbeUsage = i6307[29]
  i6306.reflectionProbeUsage = i6307[30]
  return i6306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6313 = data
  i6312.name = i6313[0]
  i6312.tagId = i6313[1]
  i6312.enabled = !!i6313[2]
  i6312.isStatic = !!i6313[3]
  i6312.layer = i6313[4]
  return i6312
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i6314 = root || request.c( 'HeartBreakEffect' )
  var i6315 = data
  i6314.defaultLifeTime = i6315[0]
  request.r(i6315[1], i6315[2], 0, i6314, 'tf')
  return i6314
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i6316 = root || request.c( 'BlinkEffect' )
  var i6317 = data
  request.r(i6317[0], i6317[1], 0, i6316, 'tf')
  return i6316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6319 = data
  request.r(i6319[0], i6319[1], 0, i6318, 'mesh')
  i6318.meshCount = i6319[2]
  i6318.activeVertexStreamsCount = i6319[3]
  i6318.alignment = i6319[4]
  i6318.renderMode = i6319[5]
  i6318.sortMode = i6319[6]
  i6318.lengthScale = i6319[7]
  i6318.velocityScale = i6319[8]
  i6318.cameraVelocityScale = i6319[9]
  i6318.normalDirection = i6319[10]
  i6318.sortingFudge = i6319[11]
  i6318.minParticleSize = i6319[12]
  i6318.maxParticleSize = i6319[13]
  i6318.pivot = new pc.Vec3( i6319[14], i6319[15], i6319[16] )
  request.r(i6319[17], i6319[18], 0, i6318, 'trailMaterial')
  i6318.applyActiveColorSpace = !!i6319[19]
  i6318.enabled = !!i6319[20]
  request.r(i6319[21], i6319[22], 0, i6318, 'sharedMaterial')
  var i6321 = i6319[23]
  var i6320 = []
  for(var i = 0; i < i6321.length; i += 2) {
  request.r(i6321[i + 0], i6321[i + 1], 2, i6320, '')
  }
  i6318.sharedMaterials = i6320
  i6318.receiveShadows = !!i6319[24]
  i6318.shadowCastingMode = i6319[25]
  i6318.sortingLayerID = i6319[26]
  i6318.sortingOrder = i6319[27]
  i6318.lightmapIndex = i6319[28]
  i6318.lightmapSceneIndex = i6319[29]
  i6318.lightmapScaleOffset = new pc.Vec4( i6319[30], i6319[31], i6319[32], i6319[33] )
  i6318.lightProbeUsage = i6319[34]
  i6318.reflectionProbeUsage = i6319[35]
  return i6318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6323 = data
  i6322.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6323[0], i6322.main)
  i6322.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6323[1], i6322.colorBySpeed)
  i6322.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6323[2], i6322.colorOverLifetime)
  i6322.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6323[3], i6322.emission)
  i6322.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6323[4], i6322.rotationBySpeed)
  i6322.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6323[5], i6322.rotationOverLifetime)
  i6322.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6323[6], i6322.shape)
  i6322.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6323[7], i6322.sizeBySpeed)
  i6322.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6323[8], i6322.sizeOverLifetime)
  i6322.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6323[9], i6322.textureSheetAnimation)
  i6322.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6323[10], i6322.velocityOverLifetime)
  i6322.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6323[11], i6322.noise)
  i6322.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6323[12], i6322.inheritVelocity)
  i6322.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6323[13], i6322.forceOverLifetime)
  i6322.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6323[14], i6322.limitVelocityOverLifetime)
  i6322.useAutoRandomSeed = !!i6323[15]
  i6322.randomSeed = i6323[16]
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6324 = root || new pc.ParticleSystemMain()
  var i6325 = data
  i6324.duration = i6325[0]
  i6324.loop = !!i6325[1]
  i6324.prewarm = !!i6325[2]
  i6324.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[3], i6324.startDelay)
  i6324.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[4], i6324.startLifetime)
  i6324.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[5], i6324.startSpeed)
  i6324.startSize3D = !!i6325[6]
  i6324.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[7], i6324.startSizeX)
  i6324.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[8], i6324.startSizeY)
  i6324.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[9], i6324.startSizeZ)
  i6324.startRotation3D = !!i6325[10]
  i6324.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[11], i6324.startRotationX)
  i6324.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[12], i6324.startRotationY)
  i6324.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[13], i6324.startRotationZ)
  i6324.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6325[14], i6324.startColor)
  i6324.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6325[15], i6324.gravityModifier)
  i6324.simulationSpace = i6325[16]
  request.r(i6325[17], i6325[18], 0, i6324, 'customSimulationSpace')
  i6324.simulationSpeed = i6325[19]
  i6324.useUnscaledTime = !!i6325[20]
  i6324.scalingMode = i6325[21]
  i6324.playOnAwake = !!i6325[22]
  i6324.maxParticles = i6325[23]
  i6324.emitterVelocityMode = i6325[24]
  i6324.stopAction = i6325[25]
  return i6324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6326 = root || new pc.MinMaxCurve()
  var i6327 = data
  i6326.mode = i6327[0]
  i6326.curveMin = new pc.AnimationCurve( { keys_flow: i6327[1] } )
  i6326.curveMax = new pc.AnimationCurve( { keys_flow: i6327[2] } )
  i6326.curveMultiplier = i6327[3]
  i6326.constantMin = i6327[4]
  i6326.constantMax = i6327[5]
  return i6326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6328 = root || new pc.MinMaxGradient()
  var i6329 = data
  i6328.mode = i6329[0]
  i6328.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6329[1], i6328.gradientMin)
  i6328.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6329[2], i6328.gradientMax)
  i6328.colorMin = new pc.Color(i6329[3], i6329[4], i6329[5], i6329[6])
  i6328.colorMax = new pc.Color(i6329[7], i6329[8], i6329[9], i6329[10])
  return i6328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6331 = data
  i6330.mode = i6331[0]
  var i6333 = i6331[1]
  var i6332 = []
  for(var i = 0; i < i6333.length; i += 1) {
    i6332.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6333[i + 0]) );
  }
  i6330.colorKeys = i6332
  var i6335 = i6331[2]
  var i6334 = []
  for(var i = 0; i < i6335.length; i += 1) {
    i6334.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6335[i + 0]) );
  }
  i6330.alphaKeys = i6334
  return i6330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6336 = root || new pc.ParticleSystemColorBySpeed()
  var i6337 = data
  i6336.enabled = !!i6337[0]
  i6336.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6337[1], i6336.color)
  i6336.range = new pc.Vec2( i6337[2], i6337[3] )
  return i6336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6341 = data
  i6340.color = new pc.Color(i6341[0], i6341[1], i6341[2], i6341[3])
  i6340.time = i6341[4]
  return i6340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6345 = data
  i6344.alpha = i6345[0]
  i6344.time = i6345[1]
  return i6344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6346 = root || new pc.ParticleSystemColorOverLifetime()
  var i6347 = data
  i6346.enabled = !!i6347[0]
  i6346.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6347[1], i6346.color)
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6348 = root || new pc.ParticleSystemEmitter()
  var i6349 = data
  i6348.enabled = !!i6349[0]
  i6348.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[1], i6348.rateOverTime)
  i6348.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[2], i6348.rateOverDistance)
  var i6351 = i6349[3]
  var i6350 = []
  for(var i = 0; i < i6351.length; i += 1) {
    i6350.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6351[i + 0]) );
  }
  i6348.bursts = i6350
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6354 = root || new pc.ParticleSystemBurst()
  var i6355 = data
  i6354.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6355[0], i6354.count)
  i6354.cycleCount = i6355[1]
  i6354.minCount = i6355[2]
  i6354.maxCount = i6355[3]
  i6354.repeatInterval = i6355[4]
  i6354.time = i6355[5]
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6356 = root || new pc.ParticleSystemRotationBySpeed()
  var i6357 = data
  i6356.enabled = !!i6357[0]
  i6356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[1], i6356.x)
  i6356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[2], i6356.y)
  i6356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[3], i6356.z)
  i6356.separateAxes = !!i6357[4]
  i6356.range = new pc.Vec2( i6357[5], i6357[6] )
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6358 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6359 = data
  i6358.enabled = !!i6359[0]
  i6358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6359[1], i6358.x)
  i6358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6359[2], i6358.y)
  i6358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6359[3], i6358.z)
  i6358.separateAxes = !!i6359[4]
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6360 = root || new pc.ParticleSystemShape()
  var i6361 = data
  i6360.enabled = !!i6361[0]
  i6360.shapeType = i6361[1]
  i6360.randomDirectionAmount = i6361[2]
  i6360.sphericalDirectionAmount = i6361[3]
  i6360.randomPositionAmount = i6361[4]
  i6360.alignToDirection = !!i6361[5]
  i6360.radius = i6361[6]
  i6360.radiusMode = i6361[7]
  i6360.radiusSpread = i6361[8]
  i6360.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6361[9], i6360.radiusSpeed)
  i6360.radiusThickness = i6361[10]
  i6360.angle = i6361[11]
  i6360.length = i6361[12]
  i6360.boxThickness = new pc.Vec3( i6361[13], i6361[14], i6361[15] )
  i6360.meshShapeType = i6361[16]
  request.r(i6361[17], i6361[18], 0, i6360, 'mesh')
  request.r(i6361[19], i6361[20], 0, i6360, 'meshRenderer')
  request.r(i6361[21], i6361[22], 0, i6360, 'skinnedMeshRenderer')
  i6360.useMeshMaterialIndex = !!i6361[23]
  i6360.meshMaterialIndex = i6361[24]
  i6360.useMeshColors = !!i6361[25]
  i6360.normalOffset = i6361[26]
  i6360.arc = i6361[27]
  i6360.arcMode = i6361[28]
  i6360.arcSpread = i6361[29]
  i6360.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6361[30], i6360.arcSpeed)
  i6360.donutRadius = i6361[31]
  i6360.position = new pc.Vec3( i6361[32], i6361[33], i6361[34] )
  i6360.rotation = new pc.Vec3( i6361[35], i6361[36], i6361[37] )
  i6360.scale = new pc.Vec3( i6361[38], i6361[39], i6361[40] )
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6362 = root || new pc.ParticleSystemSizeBySpeed()
  var i6363 = data
  i6362.enabled = !!i6363[0]
  i6362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6363[1], i6362.x)
  i6362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6363[2], i6362.y)
  i6362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6363[3], i6362.z)
  i6362.separateAxes = !!i6363[4]
  i6362.range = new pc.Vec2( i6363[5], i6363[6] )
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6364 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6365 = data
  i6364.enabled = !!i6365[0]
  i6364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[1], i6364.x)
  i6364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[2], i6364.y)
  i6364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[3], i6364.z)
  i6364.separateAxes = !!i6365[4]
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6366 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6367 = data
  i6366.enabled = !!i6367[0]
  i6366.mode = i6367[1]
  i6366.animation = i6367[2]
  i6366.numTilesX = i6367[3]
  i6366.numTilesY = i6367[4]
  i6366.useRandomRow = !!i6367[5]
  i6366.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[6], i6366.frameOverTime)
  i6366.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[7], i6366.startFrame)
  i6366.cycleCount = i6367[8]
  i6366.rowIndex = i6367[9]
  i6366.flipU = i6367[10]
  i6366.flipV = i6367[11]
  i6366.spriteCount = i6367[12]
  var i6369 = i6367[13]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 2) {
  request.r(i6369[i + 0], i6369[i + 1], 2, i6368, '')
  }
  i6366.sprites = i6368
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6372 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6373 = data
  i6372.enabled = !!i6373[0]
  i6372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[1], i6372.x)
  i6372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[2], i6372.y)
  i6372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[3], i6372.z)
  i6372.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[4], i6372.radial)
  i6372.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[5], i6372.speedModifier)
  i6372.space = i6373[6]
  i6372.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[7], i6372.orbitalX)
  i6372.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[8], i6372.orbitalY)
  i6372.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[9], i6372.orbitalZ)
  i6372.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[10], i6372.orbitalOffsetX)
  i6372.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[11], i6372.orbitalOffsetY)
  i6372.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[12], i6372.orbitalOffsetZ)
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6374 = root || new pc.ParticleSystemNoise()
  var i6375 = data
  i6374.enabled = !!i6375[0]
  i6374.separateAxes = !!i6375[1]
  i6374.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[2], i6374.strengthX)
  i6374.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[3], i6374.strengthY)
  i6374.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[4], i6374.strengthZ)
  i6374.frequency = i6375[5]
  i6374.damping = !!i6375[6]
  i6374.octaveCount = i6375[7]
  i6374.octaveMultiplier = i6375[8]
  i6374.octaveScale = i6375[9]
  i6374.quality = i6375[10]
  i6374.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[11], i6374.scrollSpeed)
  i6374.scrollSpeedMultiplier = i6375[12]
  i6374.remapEnabled = !!i6375[13]
  i6374.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[14], i6374.remapX)
  i6374.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[15], i6374.remapY)
  i6374.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[16], i6374.remapZ)
  i6374.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[17], i6374.positionAmount)
  i6374.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[18], i6374.rotationAmount)
  i6374.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6375[19], i6374.sizeAmount)
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6376 = root || new pc.ParticleSystemInheritVelocity()
  var i6377 = data
  i6376.enabled = !!i6377[0]
  i6376.mode = i6377[1]
  i6376.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6377[2], i6376.curve)
  return i6376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6378 = root || new pc.ParticleSystemForceOverLifetime()
  var i6379 = data
  i6378.enabled = !!i6379[0]
  i6378.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6379[1], i6378.x)
  i6378.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6379[2], i6378.y)
  i6378.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6379[3], i6378.z)
  i6378.space = i6379[4]
  i6378.randomized = !!i6379[5]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6380 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6381 = data
  i6380.enabled = !!i6381[0]
  i6380.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[1], i6380.limit)
  i6380.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[2], i6380.limitX)
  i6380.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[3], i6380.limitY)
  i6380.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[4], i6380.limitZ)
  i6380.dampen = i6381[5]
  i6380.separateAxes = !!i6381[6]
  i6380.space = i6381[7]
  i6380.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[8], i6380.drag)
  i6380.multiplyDragByParticleSize = !!i6381[9]
  i6380.multiplyDragByParticleVelocity = !!i6381[10]
  return i6380
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i6382 = root || request.c( 'StarExploreFX' )
  var i6383 = data
  request.r(i6383[0], i6383[1], 0, i6382, 'tf')
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6385 = data
  i6384.pivot = new pc.Vec2( i6385[0], i6385[1] )
  i6384.anchorMin = new pc.Vec2( i6385[2], i6385[3] )
  i6384.anchorMax = new pc.Vec2( i6385[4], i6385[5] )
  i6384.sizeDelta = new pc.Vec2( i6385[6], i6385[7] )
  i6384.anchoredPosition3D = new pc.Vec3( i6385[8], i6385[9], i6385[10] )
  i6384.rotation = new pc.Quat(i6385[11], i6385[12], i6385[13], i6385[14])
  i6384.scale = new pc.Vec3( i6385[15], i6385[16], i6385[17] )
  return i6384
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i6386 = root || request.c( 'ClockTimer' )
  var i6387 = data
  request.r(i6387[0], i6387[1], 0, i6386, 'fillImage')
  request.r(i6387[2], i6387[3], 0, i6386, 'tf')
  i6386.spawnZoomDuration = i6387[4]
  i6386.despawnZoomDuration = i6387[5]
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6389 = data
  i6388.cullTransparentMesh = !!i6389[0]
  return i6388
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6390 = root || request.c( 'UnityEngine.UI.Image' )
  var i6391 = data
  request.r(i6391[0], i6391[1], 0, i6390, 'm_Sprite')
  i6390.m_Type = i6391[2]
  i6390.m_PreserveAspect = !!i6391[3]
  i6390.m_FillCenter = !!i6391[4]
  i6390.m_FillMethod = i6391[5]
  i6390.m_FillAmount = i6391[6]
  i6390.m_FillClockwise = !!i6391[7]
  i6390.m_FillOrigin = i6391[8]
  i6390.m_UseSpriteMesh = !!i6391[9]
  i6390.m_PixelsPerUnitMultiplier = i6391[10]
  request.r(i6391[11], i6391[12], 0, i6390, 'm_Material')
  i6390.m_Maskable = !!i6391[13]
  i6390.m_Color = new pc.Color(i6391[14], i6391[15], i6391[16], i6391[17])
  i6390.m_RaycastTarget = !!i6391[18]
  i6390.m_RaycastPadding = new pc.Vec4( i6391[19], i6391[20], i6391[21], i6391[22] )
  return i6390
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i6392 = root || request.c( 'WaterSplash' )
  var i6393 = data
  request.r(i6393[0], i6393[1], 0, i6392, 'tf')
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i6395 = data
  i6394.center = new pc.Vec3( i6395[0], i6395[1], i6395[2] )
  i6394.radius = i6395[3]
  i6394.enabled = !!i6395[4]
  i6394.isTrigger = !!i6395[5]
  request.r(i6395[6], i6395[7], 0, i6394, 'material')
  return i6394
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i6396 = root || request.c( 'ItemDraggable' )
  var i6397 = data
  i6396.isDraggable = !!i6397[0]
  request.r(i6397[1], i6397[2], 0, i6396, 'returnTransform')
  i6396.setParentToReturnTransform = !!i6397[3]
  i6396.returnToStartOnDragFailed = !!i6397[4]
  i6396.returnToExactReturnTransformPosition = !!i6397[5]
  i6396.targetItemType = i6397[6]
  request.r(i6397[7], i6397[8], 0, i6396, 'item')
  i6396.checkState = !!i6397[9]
  request.r(i6397[10], i6397[11], 0, i6396, 'shadowObject')
  i6396.playReturnToStartFinishSound = !!i6397[12]
  i6396.returnToStartFinishFxType = i6397[13]
  i6396.spawnBreakHeartOnDropFail = !!i6397[14]
  i6396.playBeginDragSound = !!i6397[15]
  i6396.beginDragFxType = i6397[16]
  i6396.liftOffset = i6397[17]
  i6396.dragScaleMultiplier = i6397[18]
  i6396.dragScaleDuration = i6397[19]
  i6396.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i6397[20], i6396.onBeginDrag)
  i6396.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i6397[21], i6396.onDropSuccess)
  i6396.onDropFail = request.d('UnityEngine.Events.UnityEvent', i6397[22], i6396.onDropFail)
  i6396.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i6397[23], i6396.onReturnToStartComplete)
  return i6396
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6398 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6399 = data
  i6398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6399[0], i6398.m_PersistentCalls)
  return i6398
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6400 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6401 = data
  var i6403 = i6401[0]
  var i6402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.add(request.d('UnityEngine.Events.PersistentCall', i6403[i + 0]));
  }
  i6400.m_Calls = i6402
  return i6400
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6406 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6407 = data
  request.r(i6407[0], i6407[1], 0, i6406, 'm_Target')
  i6406.m_TargetAssemblyTypeName = i6407[2]
  i6406.m_MethodName = i6407[3]
  i6406.m_Mode = i6407[4]
  i6406.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6407[5], i6406.m_Arguments)
  i6406.m_CallState = i6407[6]
  return i6406
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6408 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6409 = data
  request.r(i6409[0], i6409[1], 0, i6408, 'm_ObjectArgument')
  i6408.m_ObjectArgumentAssemblyTypeName = i6409[2]
  i6408.m_IntArgument = i6409[3]
  i6408.m_FloatArgument = i6409[4]
  i6408.m_StringArgument = i6409[5]
  i6408.m_BoolArgument = !!i6409[6]
  return i6408
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i6410 = root || request.c( 'ItemMoveToTarget' )
  var i6411 = data
  request.r(i6411[0], i6411[1], 0, i6410, 'defaultTarget')
  i6410.duration = i6411[2]
  i6410.useAnimationCurve = !!i6411[3]
  i6410.moveCurve = new pc.AnimationCurve( { keys_flow: i6411[4] } )
  i6410.easeType = i6411[5]
  i6410.moveType = i6411[6]
  i6410.jumpPower = i6411[7]
  i6410.numJumps = i6411[8]
  i6410.rotate360DuringJump = !!i6411[9]
  i6410.flipRotate = !!i6411[10]
  i6410.angleRotate = i6411[11]
  i6410.scaleOnMove = !!i6411[12]
  i6410.endScaleMultiplier = i6411[13]
  i6410.setParentToTarget = !!i6411[14]
  i6410.onComplete = request.d('UnityEngine.Events.UnityEvent', i6411[15], i6410.onComplete)
  i6410.lockInputWhileMoving = !!i6411[16]
  i6410.resetParentBeforeMove = !!i6411[17]
  return i6410
}

Deserializers["Paper"] = function (request, data, root) {
  var i6412 = root || request.c( 'Paper' )
  var i6413 = data
  i6412.isUse = !!i6413[0]
  request.r(i6413[1], i6413[2], 0, i6412, 'paper')
  request.r(i6413[3], i6413[4], 0, i6412, 'paperTrash')
  request.r(i6413[5], i6413[6], 0, i6412, 'itemDragRaycastTarget')
  request.r(i6413[7], i6413[8], 0, i6412, 'curentCollider')
  i6412.isDone = !!i6413[9]
  i6412.onProcess = !!i6413[10]
  i6412.requireMatchingTargetTypeForHandTut = !!i6413[11]
  request.r(i6413[12], i6413[13], 0, i6412, 'itemDraggable')
  request.r(i6413[14], i6413[15], 0, i6412, 'itemClickable')
  request.r(i6413[16], i6413[17], 0, i6412, 'itemStirring')
  request.r(i6413[18], i6413[19], 0, i6412, 'itemKnifeSpriteMaskCutter')
  request.r(i6413[20], i6413[21], 0, i6412, 'itemSpriteMaskPainter')
  request.r(i6413[22], i6413[23], 0, i6412, 'itemDragSpriteMaskPainter')
  request.r(i6413[24], i6413[25], 0, i6412, 'itemMoveToTarget')
  request.r(i6413[26], i6413[27], 0, i6412, 'animator')
  i6412.itemType = i6413[28]
  request.r(i6413[29], i6413[30], 0, i6412, 'spriteRenderer')
  i6412.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6413[31], i6412.onKnifeIn)
  request.r(i6413[32], i6413[33], 0, i6412, 'knifePos')
  i6412.heartEffectScale = i6413[34]
  i6412.breakHeartEffectScale = i6413[35]
  i6412.blinkEffectScale = i6413[36]
  i6412.mergeEffectScale = i6413[37]
  i6412.playMoveToTargetFinishSound = !!i6413[38]
  i6412.moveToTargetFinishFxType = i6413[39]
  i6412.fxSpawnZPos = i6413[40]
  request.r(i6413[41], i6413[42], 0, i6412, 'tf')
  return i6412
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i6414 = root || request.c( 'ItemDragRaycastTarget' )
  var i6415 = data
  i6414.targetToFind = i6415[0]
  i6414.targetItemTypeWhenHit = i6415[1]
  i6414.targetItemTypeOnDropFail = i6415[2]
  request.r(i6415[3], i6415[4], 0, i6414, 'raycastPoint')
  i6414.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6415[5] )
  i6414.rayDistance = i6415[6]
  i6414.updateMoveDefaultTarget = !!i6415[7]
  i6414.invokeOnlyWhenTargetChanged = !!i6415[8]
  i6414.targetChangeEnabled = !!i6415[9]
  i6414.restoreTargetOnDropFail = !!i6415[10]
  i6414.resetCurrentTargetOnNoHit = !!i6415[11]
  i6414.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i6415[12], i6414.onTargetFound)
  i6414.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i6415[13], i6414.onTargetFoundWithItem)
  return i6414
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i6416 = root || request.c( 'ItemRaycastTargetEvent' )
  var i6417 = data
  i6416.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6417[0], i6416.m_PersistentCalls)
  return i6416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6419 = data
  request.r(i6419[0], i6419[1], 0, i6418, 'animatorController')
  request.r(i6419[2], i6419[3], 0, i6418, 'avatar')
  i6418.updateMode = i6419[4]
  i6418.hasTransformHierarchy = !!i6419[5]
  i6418.applyRootMotion = !!i6419[6]
  var i6421 = i6419[7]
  var i6420 = []
  for(var i = 0; i < i6421.length; i += 2) {
  request.r(i6421[i + 0], i6421[i + 1], 2, i6420, '')
  }
  i6418.humanBones = i6420
  i6418.enabled = !!i6419[8]
  return i6418
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i6424 = root || request.c( 'ItemSound' )
  var i6425 = data
  return i6424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6427 = data
  i6426.name = i6427[0]
  i6426.index = i6427[1]
  i6426.startup = !!i6427[2]
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6429 = data
  i6428.planeDistance = i6429[0]
  i6428.referencePixelsPerUnit = i6429[1]
  i6428.isFallbackOverlay = !!i6429[2]
  i6428.renderMode = i6429[3]
  i6428.renderOrder = i6429[4]
  i6428.sortingLayerName = i6429[5]
  i6428.sortingOrder = i6429[6]
  i6428.scaleFactor = i6429[7]
  request.r(i6429[8], i6429[9], 0, i6428, 'worldCamera')
  i6428.overrideSorting = !!i6429[10]
  i6428.pixelPerfect = !!i6429[11]
  i6428.targetDisplay = i6429[12]
  i6428.overridePixelPerfect = !!i6429[13]
  i6428.enabled = !!i6429[14]
  return i6428
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6430 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6431 = data
  i6430.m_UiScaleMode = i6431[0]
  i6430.m_ReferencePixelsPerUnit = i6431[1]
  i6430.m_ScaleFactor = i6431[2]
  i6430.m_ReferenceResolution = new pc.Vec2( i6431[3], i6431[4] )
  i6430.m_ScreenMatchMode = i6431[5]
  i6430.m_MatchWidthOrHeight = i6431[6]
  i6430.m_PhysicalUnit = i6431[7]
  i6430.m_FallbackScreenDPI = i6431[8]
  i6430.m_DefaultSpriteDPI = i6431[9]
  i6430.m_DynamicPixelsPerUnit = i6431[10]
  i6430.m_PresetInfoIsWorld = !!i6431[11]
  return i6430
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6432 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6433 = data
  i6432.m_IgnoreReversedGraphics = !!i6433[0]
  i6432.m_BlockingObjects = i6433[1]
  i6432.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6433[2] )
  return i6432
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6434 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6435 = data
  i6434.m_hasFontAssetChanged = !!i6435[0]
  request.r(i6435[1], i6435[2], 0, i6434, 'm_baseMaterial')
  i6434.m_maskOffset = new pc.Vec4( i6435[3], i6435[4], i6435[5], i6435[6] )
  i6434.m_text = i6435[7]
  i6434.m_isRightToLeft = !!i6435[8]
  request.r(i6435[9], i6435[10], 0, i6434, 'm_fontAsset')
  request.r(i6435[11], i6435[12], 0, i6434, 'm_sharedMaterial')
  var i6437 = i6435[13]
  var i6436 = []
  for(var i = 0; i < i6437.length; i += 2) {
  request.r(i6437[i + 0], i6437[i + 1], 2, i6436, '')
  }
  i6434.m_fontSharedMaterials = i6436
  request.r(i6435[14], i6435[15], 0, i6434, 'm_fontMaterial')
  var i6439 = i6435[16]
  var i6438 = []
  for(var i = 0; i < i6439.length; i += 2) {
  request.r(i6439[i + 0], i6439[i + 1], 2, i6438, '')
  }
  i6434.m_fontMaterials = i6438
  i6434.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6435[17], i6435[18], i6435[19], i6435[20])
  i6434.m_fontColor = new pc.Color(i6435[21], i6435[22], i6435[23], i6435[24])
  i6434.m_enableVertexGradient = !!i6435[25]
  i6434.m_colorMode = i6435[26]
  i6434.m_fontColorGradient = request.d('TMPro.VertexGradient', i6435[27], i6434.m_fontColorGradient)
  request.r(i6435[28], i6435[29], 0, i6434, 'm_fontColorGradientPreset')
  request.r(i6435[30], i6435[31], 0, i6434, 'm_spriteAsset')
  i6434.m_tintAllSprites = !!i6435[32]
  request.r(i6435[33], i6435[34], 0, i6434, 'm_StyleSheet')
  i6434.m_TextStyleHashCode = i6435[35]
  i6434.m_overrideHtmlColors = !!i6435[36]
  i6434.m_faceColor = UnityEngine.Color32.ConstructColor(i6435[37], i6435[38], i6435[39], i6435[40])
  i6434.m_fontSize = i6435[41]
  i6434.m_fontSizeBase = i6435[42]
  i6434.m_fontWeight = i6435[43]
  i6434.m_enableAutoSizing = !!i6435[44]
  i6434.m_fontSizeMin = i6435[45]
  i6434.m_fontSizeMax = i6435[46]
  i6434.m_fontStyle = i6435[47]
  i6434.m_HorizontalAlignment = i6435[48]
  i6434.m_VerticalAlignment = i6435[49]
  i6434.m_textAlignment = i6435[50]
  i6434.m_characterSpacing = i6435[51]
  i6434.m_wordSpacing = i6435[52]
  i6434.m_lineSpacing = i6435[53]
  i6434.m_lineSpacingMax = i6435[54]
  i6434.m_paragraphSpacing = i6435[55]
  i6434.m_charWidthMaxAdj = i6435[56]
  i6434.m_TextWrappingMode = i6435[57]
  i6434.m_wordWrappingRatios = i6435[58]
  i6434.m_overflowMode = i6435[59]
  request.r(i6435[60], i6435[61], 0, i6434, 'm_linkedTextComponent')
  request.r(i6435[62], i6435[63], 0, i6434, 'parentLinkedComponent')
  i6434.m_enableKerning = !!i6435[64]
  var i6441 = i6435[65]
  var i6440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6441.length; i += 1) {
    i6440.add(i6441[i + 0]);
  }
  i6434.m_ActiveFontFeatures = i6440
  i6434.m_enableExtraPadding = !!i6435[66]
  i6434.checkPaddingRequired = !!i6435[67]
  i6434.m_isRichText = !!i6435[68]
  i6434.m_parseCtrlCharacters = !!i6435[69]
  i6434.m_isOrthographic = !!i6435[70]
  i6434.m_isCullingEnabled = !!i6435[71]
  i6434.m_horizontalMapping = i6435[72]
  i6434.m_verticalMapping = i6435[73]
  i6434.m_uvLineOffset = i6435[74]
  i6434.m_geometrySortingOrder = i6435[75]
  i6434.m_IsTextObjectScaleStatic = !!i6435[76]
  i6434.m_VertexBufferAutoSizeReduction = !!i6435[77]
  i6434.m_useMaxVisibleDescender = !!i6435[78]
  i6434.m_pageToDisplay = i6435[79]
  i6434.m_margin = new pc.Vec4( i6435[80], i6435[81], i6435[82], i6435[83] )
  i6434.m_isUsingLegacyAnimationComponent = !!i6435[84]
  i6434.m_isVolumetricText = !!i6435[85]
  request.r(i6435[86], i6435[87], 0, i6434, 'm_Material')
  i6434.m_EmojiFallbackSupport = !!i6435[88]
  i6434.m_Maskable = !!i6435[89]
  i6434.m_Color = new pc.Color(i6435[90], i6435[91], i6435[92], i6435[93])
  i6434.m_RaycastTarget = !!i6435[94]
  i6434.m_RaycastPadding = new pc.Vec4( i6435[95], i6435[96], i6435[97], i6435[98] )
  return i6434
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6442 = root || request.c( 'TMPro.VertexGradient' )
  var i6443 = data
  i6442.topLeft = new pc.Color(i6443[0], i6443[1], i6443[2], i6443[3])
  i6442.topRight = new pc.Color(i6443[4], i6443[5], i6443[6], i6443[7])
  i6442.bottomLeft = new pc.Color(i6443[8], i6443[9], i6443[10], i6443[11])
  i6442.bottomRight = new pc.Color(i6443[12], i6443[13], i6443[14], i6443[15])
  return i6442
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6446 = root || request.c( 'UnityEngine.UI.Button' )
  var i6447 = data
  i6446.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6447[0], i6446.m_OnClick)
  i6446.m_Navigation = request.d('UnityEngine.UI.Navigation', i6447[1], i6446.m_Navigation)
  i6446.m_Transition = i6447[2]
  i6446.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6447[3], i6446.m_Colors)
  i6446.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6447[4], i6446.m_SpriteState)
  i6446.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6447[5], i6446.m_AnimationTriggers)
  i6446.m_Interactable = !!i6447[6]
  request.r(i6447[7], i6447[8], 0, i6446, 'm_TargetGraphic')
  return i6446
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6448 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6449 = data
  i6448.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6449[0], i6448.m_PersistentCalls)
  return i6448
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6450 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6451 = data
  i6450.m_Mode = i6451[0]
  i6450.m_WrapAround = !!i6451[1]
  request.r(i6451[2], i6451[3], 0, i6450, 'm_SelectOnUp')
  request.r(i6451[4], i6451[5], 0, i6450, 'm_SelectOnDown')
  request.r(i6451[6], i6451[7], 0, i6450, 'm_SelectOnLeft')
  request.r(i6451[8], i6451[9], 0, i6450, 'm_SelectOnRight')
  return i6450
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6453 = data
  i6452.m_NormalColor = new pc.Color(i6453[0], i6453[1], i6453[2], i6453[3])
  i6452.m_HighlightedColor = new pc.Color(i6453[4], i6453[5], i6453[6], i6453[7])
  i6452.m_PressedColor = new pc.Color(i6453[8], i6453[9], i6453[10], i6453[11])
  i6452.m_SelectedColor = new pc.Color(i6453[12], i6453[13], i6453[14], i6453[15])
  i6452.m_DisabledColor = new pc.Color(i6453[16], i6453[17], i6453[18], i6453[19])
  i6452.m_ColorMultiplier = i6453[20]
  i6452.m_FadeDuration = i6453[21]
  return i6452
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6454 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6455 = data
  request.r(i6455[0], i6455[1], 0, i6454, 'm_HighlightedSprite')
  request.r(i6455[2], i6455[3], 0, i6454, 'm_PressedSprite')
  request.r(i6455[4], i6455[5], 0, i6454, 'm_SelectedSprite')
  request.r(i6455[6], i6455[7], 0, i6454, 'm_DisabledSprite')
  return i6454
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6457 = data
  i6456.m_NormalTrigger = i6457[0]
  i6456.m_HighlightedTrigger = i6457[1]
  i6456.m_PressedTrigger = i6457[2]
  i6456.m_SelectedTrigger = i6457[3]
  i6456.m_DisabledTrigger = i6457[4]
  return i6456
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6459 = data
  request.r(i6459[0], i6459[1], 0, i6458, 'm_FillRect')
  request.r(i6459[2], i6459[3], 0, i6458, 'm_HandleRect')
  i6458.m_Direction = i6459[4]
  i6458.m_MinValue = i6459[5]
  i6458.m_MaxValue = i6459[6]
  i6458.m_WholeNumbers = !!i6459[7]
  i6458.m_Value = i6459[8]
  i6458.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6459[9], i6458.m_OnValueChanged)
  i6458.m_Navigation = request.d('UnityEngine.UI.Navigation', i6459[10], i6458.m_Navigation)
  i6458.m_Transition = i6459[11]
  i6458.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6459[12], i6458.m_Colors)
  i6458.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6459[13], i6458.m_SpriteState)
  i6458.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6459[14], i6458.m_AnimationTriggers)
  i6458.m_Interactable = !!i6459[15]
  request.r(i6459[16], i6459[17], 0, i6458, 'm_TargetGraphic')
  return i6458
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6460 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6461 = data
  i6460.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6461[0], i6460.m_PersistentCalls)
  return i6460
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i6462 = root || request.c( 'ProgressSlider' )
  var i6463 = data
  request.r(i6463[0], i6463[1], 0, i6462, 'progressSlider')
  i6462.maxProgressItems = i6463[2]
  i6462.startProgressItems = i6463[3]
  request.r(i6463[4], i6463[5], 0, i6462, 'progressText')
  return i6462
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i6464 = root || request.c( 'Ply_Pool' )
  var i6465 = data
  var i6467 = i6465[0]
  var i6466 = []
  for(var i = 0; i < i6467.length; i += 1) {
    i6466.push( request.d('Ply_Pool+PoolAmount', i6467[i + 0]) );
  }
  i6464.poolAmounts = i6466
  request.r(i6465[1], i6465[2], 0, i6464, 'poolHolder')
  return i6464
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i6470 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i6471 = data
  i6470.type = i6471[0]
  i6470.amount = i6471[1]
  request.r(i6471[2], i6471[3], 0, i6470, 'gameUnit')
  return i6470
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6472 = root || request.c( 'Ply_SoundManager' )
  var i6473 = data
  var i6475 = i6473[0]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 1) {
    i6474.push( request.d('Ply_SoundManager+FxAudio', i6475[i + 0]) );
  }
  i6472.fxAudios = i6474
  var i6477 = i6473[1]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 2) {
  request.r(i6477[i + 0], i6477[i + 1], 2, i6476, '')
  }
  i6472.audioClips = i6476
  request.r(i6473[2], i6473[3], 0, i6472, 'sound')
  return i6472
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i6480 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i6481 = data
  i6480.fxType = i6481[0]
  request.r(i6481[1], i6481[2], 0, i6480, 'audioClip')
  return i6480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6485 = data
  request.r(i6485[0], i6485[1], 0, i6484, 'clip')
  request.r(i6485[2], i6485[3], 0, i6484, 'outputAudioMixerGroup')
  i6484.playOnAwake = !!i6485[4]
  i6484.loop = !!i6485[5]
  i6484.time = i6485[6]
  i6484.volume = i6485[7]
  i6484.pitch = i6485[8]
  i6484.enabled = !!i6485[9]
  return i6484
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6486 = root || request.c( 'GameManager' )
  var i6487 = data
  i6486.isPlaying = !!i6487[0]
  i6486.isTutorial = !!i6487[1]
  i6486.isGotoStore = !!i6487[2]
  i6486.isLoseGame = !!i6487[3]
  i6486.countMove = i6487[4]
  i6486.currentLayer = i6487[5]
  request.r(i6487[6], i6487[7], 0, i6486, 'trashCan')
  request.r(i6487[8], i6487[9], 0, i6486, 'step1')
  request.r(i6487[10], i6487[11], 0, i6486, 'paperBox')
  return i6486
}

Deserializers["UIManager"] = function (request, data, root) {
  var i6488 = root || request.c( 'UIManager' )
  var i6489 = data
  request.r(i6489[0], i6489[1], 0, i6488, 'winUI')
  request.r(i6489[2], i6489[3], 0, i6488, 'loseUI')
  request.r(i6489[4], i6489[5], 0, i6488, 'tutorial')
  request.r(i6489[6], i6489[7], 0, i6488, 'verticalUI')
  request.r(i6489[8], i6489[9], 0, i6488, 'horizontalUI')
  request.r(i6489[10], i6489[11], 0, i6488, 'downloadBtn')
  request.r(i6489[12], i6489[13], 0, i6488, 'horizontalDownloadBtn')
  request.r(i6489[14], i6489[15], 0, i6488, 'textAnim')
  i6488.isGoogleBuild = !!i6489[16]
  i6488.screenWidth = i6489[17]
  i6488.screenHeight = i6489[18]
  i6488.scaleHeightOnWidth = i6489[19]
  i6488.isVertical = !!i6489[20]
  i6488.isScreenVertical = !!i6489[21]
  request.r(i6489[22], i6489[23], 0, i6488, 'cam')
  i6488.verticalUIHeightOnWidthRatio = i6489[24]
  i6488.scaleCameraOnValidate = !!i6489[25]
  i6488.screenVerticalHeightOnWidthRatio = i6489[26]
  i6488.useContinuousScaling = !!i6489[27]
  i6488.baseOrthographicSize = i6489[28]
  i6488.baseAspect = i6489[29]
  i6488.landscapeSizeRatio = i6489[30]
  i6488.defaultPortraitSizeRatio = i6489[31]
  var i6491 = i6489[32]
  var i6490 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.add(request.d('ScreenScaleStep', i6491[i + 0]));
  }
  i6488.discreteScaleSteps = i6490
  i6488.usePerspectiveCamera = !!i6489[33]
  request.r(i6489[34], i6489[35], 0, i6488, 'perspectiveFocus')
  i6488.perspectiveFocusDistance = i6489[36]
  i6488.perspectivePadding = i6489[37]
  i6488.fitRendererBounds = !!i6489[38]
  request.r(i6489[39], i6489[40], 0, i6488, 'boundsRoot')
  var i6493 = i6489[41]
  var i6492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i6493.length; i += 2) {
  request.r(i6493[i + 0], i6493[i + 1], 1, i6492, '')
  }
  i6488.boundsRenderers = i6492
  return i6488
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i6496 = root || request.c( 'ScreenScaleStep' )
  var i6497 = data
  i6496.heightOnWidthRatio = i6497[0]
  i6496.orthographicSize = i6497[1]
  return i6496
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6500 = root || request.c( 'InputManager' )
  var i6501 = data
  i6500.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6501[0] )
  i6500.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i6501[1] )
  i6500.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i6501[2] )
  i6500.isDragging = !!i6501[3]
  return i6500
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i6502 = root || request.c( 'HandTutManager' )
  var i6503 = data
  var i6505 = i6503[0]
  var i6504 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i6505.length; i += 2) {
  request.r(i6505[i + 0], i6505[i + 1], 1, i6504, '')
  }
  i6502.items = i6504
  request.r(i6503[1], i6503[2], 0, i6502, 'knife')
  request.r(i6503[3], i6503[4], 0, i6502, 'knife2')
  request.r(i6503[5], i6503[6], 0, i6502, 'handTutObject')
  request.r(i6503[7], i6503[8], 0, i6502, 'tapToCookObject')
  request.r(i6503[9], i6503[10], 0, i6502, 'oilItem')
  request.r(i6503[11], i6503[12], 0, i6502, 'stoveToggleEvent')
  request.r(i6503[13], i6503[14], 0, i6502, 'waterToggleEvent')
  request.r(i6503[15], i6503[16], 0, i6502, 'sinkBlock')
  var i6507 = i6503[17]
  var i6506 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i6507.length; i += 2) {
  request.r(i6507[i + 0], i6507[i + 1], 1, i6506, '')
  }
  i6502.itemsInWater = i6506
  i6502.noDelayItemCount = i6503[18]
  i6502.breakHeartNoDelayThreshold = i6503[19]
  i6502.shortIdleDelay = i6503[20]
  i6502.maxHandTutShowCount = i6503[21]
  i6502.showSinkWaterTutorialOnStart = !!i6503[22]
  i6502.waitForBowlIntro = !!i6503[23]
  i6502.idleDelay = i6503[24]
  i6502.firstHandTutDelay = i6503[25]
  i6502.phaseHandTutDelay = i6503[26]
  i6502.moveDuration = i6503[27]
  i6502.dragFadeDuration = i6503[28]
  i6502.clickScaleDuration = i6503[29]
  i6502.waitAtEndDuration = i6503[30]
  i6502.handZPosition = i6503[31]
  i6502.clickScaleMultiplier = i6503[32]
  i6502.moveEase = i6503[33]
  return i6502
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i6512 = root || request.c( 'SortChildByZPos' )
  var i6513 = data
  request.r(i6513[0], i6513[1], 0, i6512, 'transformToSort')
  var i6515 = i6513[2]
  var i6514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6515.length; i += 2) {
  request.r(i6515[i + 0], i6515[i + 1], 1, i6514, '')
  }
  i6512.childrenToSort = i6514
  i6512.zOffset = i6513[3]
  i6512.baseZ = i6513[4]
  return i6512
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i6518 = root || request.c( 'PhaseManager' )
  var i6519 = data
  var i6521 = i6519[0]
  var i6520 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i6521.length; i += 1) {
    i6520.add(request.d('PhaseData', i6521[i + 0]));
  }
  i6518.phases = i6520
  i6518.transitionType = i6519[1]
  i6518.transitionDuration = i6519[2]
  i6518.delayBeforeNextPhase = i6519[3]
  i6518.offScreenLeftX = i6519[4]
  i6518.offScreenRightX = i6519[5]
  i6518.offScreenBottomY = i6519[6]
  i6518.offScreenTopY = i6519[7]
  i6518.centerScreenX = i6519[8]
  request.r(i6519[9], i6519[10], 0, i6518, 'phaseTransitionObject')
  i6518.phaseTransitionObjectDuration = i6519[11]
  i6518.currentPhaseIndex = i6519[12]
  i6518.currentStepCount = i6519[13]
  i6518.isECPopup = !!i6519[14]
  return i6518
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i6524 = root || request.c( 'PhaseData' )
  var i6525 = data
  request.r(i6525[0], i6525[1], 0, i6524, 'phaseObject')
  i6524.totalSteps = i6525[2]
  i6524.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i6525[3], i6524.onPhaseReady)
  return i6524
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i6526 = root || request.c( 'ItemTypeDoneManager' )
  var i6527 = data
  var i6529 = i6527[0]
  var i6528 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i6529[i + 0]));
  }
  i6526.itemTypeGroups = i6528
  return i6526
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i6532 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i6533 = data
  i6532.itemType = i6533[0]
  var i6535 = i6533[1]
  var i6534 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i6535.length; i += 2) {
  request.r(i6535[i + 0], i6535[i + 1], 1, i6534, '')
  }
  i6532.items = i6534
  return i6532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6537 = data
  i6536.aspect = i6537[0]
  i6536.orthographic = !!i6537[1]
  i6536.orthographicSize = i6537[2]
  i6536.backgroundColor = new pc.Color(i6537[3], i6537[4], i6537[5], i6537[6])
  i6536.nearClipPlane = i6537[7]
  i6536.farClipPlane = i6537[8]
  i6536.fieldOfView = i6537[9]
  i6536.depth = i6537[10]
  i6536.clearFlags = i6537[11]
  i6536.cullingMask = i6537[12]
  i6536.rect = i6537[13]
  request.r(i6537[14], i6537[15], 0, i6536, 'targetTexture')
  i6536.usePhysicalProperties = !!i6537[16]
  i6536.focalLength = i6537[17]
  i6536.sensorSize = new pc.Vec2( i6537[18], i6537[19] )
  i6536.lensShift = new pc.Vec2( i6537[20], i6537[21] )
  i6536.gateFit = i6537[22]
  i6536.commandBufferCount = i6537[23]
  i6536.cameraType = i6537[24]
  i6536.enabled = !!i6537[25]
  return i6536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6539 = data
  request.r(i6539[0], i6539[1], 0, i6538, 'm_FirstSelected')
  i6538.m_sendNavigationEvents = !!i6539[2]
  i6538.m_DragThreshold = i6539[3]
  return i6538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6541 = data
  i6540.m_HorizontalAxis = i6541[0]
  i6540.m_VerticalAxis = i6541[1]
  i6540.m_SubmitButton = i6541[2]
  i6540.m_CancelButton = i6541[3]
  i6540.m_InputActionsPerSecond = i6541[4]
  i6540.m_RepeatDelay = i6541[5]
  i6540.m_ForceModuleActive = !!i6541[6]
  i6540.m_SendPointerHoverToParent = !!i6541[7]
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i6543 = data
  i6542.center = new pc.Vec3( i6543[0], i6543[1], i6543[2] )
  i6542.radius = i6543[3]
  i6542.height = i6543[4]
  i6542.direction = i6543[5]
  i6542.enabled = !!i6543[6]
  i6542.isTrigger = !!i6543[7]
  request.r(i6543[8], i6543[9], 0, i6542, 'material')
  return i6542
}

Deserializers["Item"] = function (request, data, root) {
  var i6544 = root || request.c( 'Item' )
  var i6545 = data
  i6544.isDone = !!i6545[0]
  i6544.onProcess = !!i6545[1]
  i6544.requireMatchingTargetTypeForHandTut = !!i6545[2]
  request.r(i6545[3], i6545[4], 0, i6544, 'itemDraggable')
  request.r(i6545[5], i6545[6], 0, i6544, 'itemClickable')
  request.r(i6545[7], i6545[8], 0, i6544, 'itemStirring')
  request.r(i6545[9], i6545[10], 0, i6544, 'itemKnifeSpriteMaskCutter')
  request.r(i6545[11], i6545[12], 0, i6544, 'itemSpriteMaskPainter')
  request.r(i6545[13], i6545[14], 0, i6544, 'itemDragSpriteMaskPainter')
  request.r(i6545[15], i6545[16], 0, i6544, 'itemMoveToTarget')
  request.r(i6545[17], i6545[18], 0, i6544, 'animator')
  i6544.itemType = i6545[19]
  request.r(i6545[20], i6545[21], 0, i6544, 'spriteRenderer')
  i6544.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6545[22], i6544.onKnifeIn)
  request.r(i6545[23], i6545[24], 0, i6544, 'knifePos')
  i6544.heartEffectScale = i6545[25]
  i6544.breakHeartEffectScale = i6545[26]
  i6544.blinkEffectScale = i6545[27]
  i6544.mergeEffectScale = i6545[28]
  i6544.playMoveToTargetFinishSound = !!i6545[29]
  i6544.moveToTargetFinishFxType = i6545[30]
  i6544.fxSpawnZPos = i6545[31]
  request.r(i6545[32], i6545[33], 0, i6544, 'tf')
  return i6544
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i6546 = root || request.c( 'ItemStirring' )
  var i6547 = data
  i6546.stirRadius = i6547[0]
  request.r(i6547[1], i6547[2], 0, i6546, 'stirrerTransform')
  request.r(i6547[3], i6547[4], 0, i6546, 'centerPoint')
  i6546.movementMode = i6547[5]
  i6546.lineLength = i6547[6]
  i6546.lineDirection = new pc.Vec3( i6547[7], i6547[8], i6547[9] )
  i6546.flipScaleYByLineDragDirection = !!i6547[10]
  request.r(i6547[11], i6547[12], 0, i6546, 'flipScaleTarget')
  request.r(i6547[13], i6547[14], 0, i6546, 'targetAnimator')
  i6546.targetStateName = i6547[15]
  i6546.targetLayer = i6547[16]
  i6546.stoppedSpeed = i6547[17]
  i6546.minDragDistanceToAnimate = i6547[18]
  i6546.dragSpeedMultiplier = i6547[19]
  i6546.minAnimatorSpeed = i6547[20]
  i6546.maxAnimatorSpeed = i6547[21]
  i6546.speedBlendDuration = i6547[22]
  i6546.completeNormalizedTime = i6547[23]
  i6546.resetAnimationOnFirstBegin = !!i6547[24]
  var i6549 = i6547[25]
  var i6548 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.add(request.d('StirMilestone', i6549[i + 0]));
  }
  i6546.milestones = i6548
  i6546.spawnProgressBarOnStir = !!i6547[26]
  request.r(i6547[27], i6547[28], 0, i6546, 'spawnProgressBarPoint')
  i6546.rollingSoundCooldown = i6547[29]
  i6546.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i6547[30], i6546.onStirBegin)
  i6546.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i6547[31], i6546.onStirComplete)
  return i6546
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i6552 = root || request.c( 'StirMilestone' )
  var i6553 = data
  i6552.distanceThreshold = i6553[0]
  i6552.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i6553[1], i6552.onMilestoneReached)
  i6552.isReached = !!i6553[2]
  return i6552
}

Deserializers["Spartula"] = function (request, data, root) {
  var i6554 = root || request.c( 'Spartula' )
  var i6555 = data
  i6554.isDone = !!i6555[0]
  i6554.onProcess = !!i6555[1]
  i6554.requireMatchingTargetTypeForHandTut = !!i6555[2]
  request.r(i6555[3], i6555[4], 0, i6554, 'itemDraggable')
  request.r(i6555[5], i6555[6], 0, i6554, 'itemClickable')
  request.r(i6555[7], i6555[8], 0, i6554, 'itemStirring')
  request.r(i6555[9], i6555[10], 0, i6554, 'itemKnifeSpriteMaskCutter')
  request.r(i6555[11], i6555[12], 0, i6554, 'itemSpriteMaskPainter')
  request.r(i6555[13], i6555[14], 0, i6554, 'itemDragSpriteMaskPainter')
  request.r(i6555[15], i6555[16], 0, i6554, 'itemMoveToTarget')
  request.r(i6555[17], i6555[18], 0, i6554, 'animator')
  i6554.itemType = i6555[19]
  request.r(i6555[20], i6555[21], 0, i6554, 'spriteRenderer')
  i6554.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6555[22], i6554.onKnifeIn)
  request.r(i6555[23], i6555[24], 0, i6554, 'knifePos')
  i6554.heartEffectScale = i6555[25]
  i6554.breakHeartEffectScale = i6555[26]
  i6554.blinkEffectScale = i6555[27]
  i6554.mergeEffectScale = i6555[28]
  i6554.playMoveToTargetFinishSound = !!i6555[29]
  i6554.moveToTargetFinishFxType = i6555[30]
  i6554.fxSpawnZPos = i6555[31]
  request.r(i6555[32], i6555[33], 0, i6554, 'tf')
  return i6554
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i6556 = root || request.c( 'ItemDragChildRotator' )
  var i6557 = data
  request.r(i6557[0], i6557[1], 0, i6556, 'rotateTarget')
  i6556.dragEulerAngles = new pc.Vec3( i6557[2], i6557[3], i6557[4] )
  i6556.useLocalRotation = !!i6557[5]
  i6556.rotateRelative = !!i6557[6]
  i6556.rotateDuration = i6557[7]
  i6556.rotateEase = i6557[8]
  i6556.rotateMode = i6557[9]
  return i6556
}

Deserializers["Pan"] = function (request, data, root) {
  var i6558 = root || request.c( 'Pan' )
  var i6559 = data
  request.r(i6559[0], i6559[1], 0, i6558, 'fryingFX')
  i6558.isOilIn = !!i6559[2]
  i6558.isTurnOnStove = !!i6559[3]
  request.r(i6559[4], i6559[5], 0, i6558, 'stoveBtn')
  request.r(i6559[6], i6559[7], 0, i6558, 'spartula')
  i6558.stoveShakeDelay = i6559[8]
  i6558.stoveShakeDuration = i6559[9]
  i6558.vegeOn = i6559[10]
  request.r(i6559[11], i6559[12], 0, i6558, 'salt')
  request.r(i6559[13], i6559[14], 0, i6558, 'chillie')
  request.r(i6559[15], i6559[16], 0, i6558, 'meat')
  request.r(i6559[17], i6559[18], 0, i6558, 'cream')
  request.r(i6559[19], i6559[20], 0, i6558, 'noodle')
  request.r(i6559[21], i6559[22], 0, i6558, 'lastBowl')
  i6558.isDone = !!i6559[23]
  i6558.onProcess = !!i6559[24]
  i6558.requireMatchingTargetTypeForHandTut = !!i6559[25]
  request.r(i6559[26], i6559[27], 0, i6558, 'itemDraggable')
  request.r(i6559[28], i6559[29], 0, i6558, 'itemClickable')
  request.r(i6559[30], i6559[31], 0, i6558, 'itemStirring')
  request.r(i6559[32], i6559[33], 0, i6558, 'itemKnifeSpriteMaskCutter')
  request.r(i6559[34], i6559[35], 0, i6558, 'itemSpriteMaskPainter')
  request.r(i6559[36], i6559[37], 0, i6558, 'itemDragSpriteMaskPainter')
  request.r(i6559[38], i6559[39], 0, i6558, 'itemMoveToTarget')
  request.r(i6559[40], i6559[41], 0, i6558, 'animator')
  i6558.itemType = i6559[42]
  request.r(i6559[43], i6559[44], 0, i6558, 'spriteRenderer')
  i6558.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i6559[45], i6558.onKnifeIn)
  request.r(i6559[46], i6559[47], 0, i6558, 'knifePos')
  i6558.heartEffectScale = i6559[48]
  i6558.breakHeartEffectScale = i6559[49]
  i6558.blinkEffectScale = i6559[50]
  i6558.mergeEffectScale = i6559[51]
  i6558.playMoveToTargetFinishSound = !!i6559[52]
  i6558.moveToTargetFinishFxType = i6559[53]
  i6558.fxSpawnZPos = i6559[54]
  request.r(i6559[55], i6559[56], 0, i6558, 'tf')
  return i6558
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i6560 = root || request.c( 'Ply_ToggleEvent' )
  var i6561 = data
  i6560.isOn = !!i6561[0]
  i6560.applyStateOnEnable = !!i6561[1]
  i6560.applyStateOnClick = !!i6561[2]
  request.r(i6561[3], i6561[4], 0, i6560, 'targetObject')
  i6560.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i6561[5], i6560.onTurnOn)
  i6560.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i6561[6], i6560.onTurnOff)
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6563 = data
  i6562.ambientIntensity = i6563[0]
  i6562.reflectionIntensity = i6563[1]
  i6562.ambientMode = i6563[2]
  i6562.ambientLight = new pc.Color(i6563[3], i6563[4], i6563[5], i6563[6])
  i6562.ambientSkyColor = new pc.Color(i6563[7], i6563[8], i6563[9], i6563[10])
  i6562.ambientGroundColor = new pc.Color(i6563[11], i6563[12], i6563[13], i6563[14])
  i6562.ambientEquatorColor = new pc.Color(i6563[15], i6563[16], i6563[17], i6563[18])
  i6562.fogColor = new pc.Color(i6563[19], i6563[20], i6563[21], i6563[22])
  i6562.fogEndDistance = i6563[23]
  i6562.fogStartDistance = i6563[24]
  i6562.fogDensity = i6563[25]
  i6562.fog = !!i6563[26]
  request.r(i6563[27], i6563[28], 0, i6562, 'skybox')
  i6562.fogMode = i6563[29]
  var i6565 = i6563[30]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6565[i + 0]) );
  }
  i6562.lightmaps = i6564
  i6562.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6563[31], i6562.lightProbes)
  i6562.lightmapsMode = i6563[32]
  i6562.mixedBakeMode = i6563[33]
  i6562.environmentLightingMode = i6563[34]
  i6562.ambientProbe = new pc.SphericalHarmonicsL2(i6563[35])
  i6562.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6563[36])
  i6562.useReferenceAmbientProbe = !!i6563[37]
  request.r(i6563[38], i6563[39], 0, i6562, 'customReflection')
  request.r(i6563[40], i6563[41], 0, i6562, 'defaultReflection')
  i6562.defaultReflectionMode = i6563[42]
  i6562.defaultReflectionResolution = i6563[43]
  i6562.sunLightObjectId = i6563[44]
  i6562.pixelLightCount = i6563[45]
  i6562.defaultReflectionHDR = !!i6563[46]
  i6562.hasLightDataAsset = !!i6563[47]
  i6562.hasManualGenerate = !!i6563[48]
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6569 = data
  request.r(i6569[0], i6569[1], 0, i6568, 'lightmapColor')
  request.r(i6569[2], i6569[3], 0, i6568, 'lightmapDirection')
  request.r(i6569[4], i6569[5], 0, i6568, 'shadowMask')
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6570 = root || new UnityEngine.LightProbes()
  var i6571 = data
  return i6570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6579 = data
  var i6581 = i6579[0]
  var i6580 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6581.length; i += 1) {
    i6580.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6581[i + 0]));
  }
  i6578.ShaderCompilationErrors = i6580
  i6578.name = i6579[1]
  i6578.guid = i6579[2]
  var i6583 = i6579[3]
  var i6582 = []
  for(var i = 0; i < i6583.length; i += 1) {
    i6582.push( i6583[i + 0] );
  }
  i6578.shaderDefinedKeywords = i6582
  var i6585 = i6579[4]
  var i6584 = []
  for(var i = 0; i < i6585.length; i += 1) {
    i6584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6585[i + 0]) );
  }
  i6578.passes = i6584
  var i6587 = i6579[5]
  var i6586 = []
  for(var i = 0; i < i6587.length; i += 1) {
    i6586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6587[i + 0]) );
  }
  i6578.usePasses = i6586
  var i6589 = i6579[6]
  var i6588 = []
  for(var i = 0; i < i6589.length; i += 1) {
    i6588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6589[i + 0]) );
  }
  i6578.defaultParameterValues = i6588
  request.r(i6579[7], i6579[8], 0, i6578, 'unityFallbackShader')
  i6578.readDepth = !!i6579[9]
  i6578.hasDepthOnlyPass = !!i6579[10]
  i6578.isCreatedByShaderGraph = !!i6579[11]
  i6578.disableBatching = !!i6579[12]
  i6578.compiled = !!i6579[13]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6593 = data
  i6592.shaderName = i6593[0]
  i6592.errorMessage = i6593[1]
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6598 = root || new pc.UnityShaderPass()
  var i6599 = data
  i6598.id = i6599[0]
  i6598.subShaderIndex = i6599[1]
  i6598.name = i6599[2]
  i6598.passType = i6599[3]
  i6598.grabPassTextureName = i6599[4]
  i6598.usePass = !!i6599[5]
  i6598.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[6], i6598.zTest)
  i6598.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[7], i6598.zWrite)
  i6598.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[8], i6598.culling)
  i6598.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6599[9], i6598.blending)
  i6598.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6599[10], i6598.alphaBlending)
  i6598.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[11], i6598.colorWriteMask)
  i6598.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[12], i6598.offsetUnits)
  i6598.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[13], i6598.offsetFactor)
  i6598.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[14], i6598.stencilRef)
  i6598.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[15], i6598.stencilReadMask)
  i6598.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6599[16], i6598.stencilWriteMask)
  i6598.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6599[17], i6598.stencilOp)
  i6598.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6599[18], i6598.stencilOpFront)
  i6598.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6599[19], i6598.stencilOpBack)
  var i6601 = i6599[20]
  var i6600 = []
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6601[i + 0]) );
  }
  i6598.tags = i6600
  var i6603 = i6599[21]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( i6603[i + 0] );
  }
  i6598.passDefinedKeywords = i6602
  var i6605 = i6599[22]
  var i6604 = []
  for(var i = 0; i < i6605.length; i += 1) {
    i6604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6605[i + 0]) );
  }
  i6598.passDefinedKeywordGroups = i6604
  var i6607 = i6599[23]
  var i6606 = []
  for(var i = 0; i < i6607.length; i += 1) {
    i6606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6607[i + 0]) );
  }
  i6598.variants = i6606
  var i6609 = i6599[24]
  var i6608 = []
  for(var i = 0; i < i6609.length; i += 1) {
    i6608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6609[i + 0]) );
  }
  i6598.excludedVariants = i6608
  i6598.hasDepthReader = !!i6599[25]
  return i6598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6611 = data
  i6610.val = i6611[0]
  i6610.name = i6611[1]
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6613 = data
  i6612.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6613[0], i6612.src)
  i6612.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6613[1], i6612.dst)
  i6612.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6613[2], i6612.op)
  return i6612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6615 = data
  i6614.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6615[0], i6614.pass)
  i6614.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6615[1], i6614.fail)
  i6614.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6615[2], i6614.zFail)
  i6614.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6615[3], i6614.comp)
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6619 = data
  i6618.name = i6619[0]
  i6618.value = i6619[1]
  return i6618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6623 = data
  var i6625 = i6623[0]
  var i6624 = []
  for(var i = 0; i < i6625.length; i += 1) {
    i6624.push( i6625[i + 0] );
  }
  i6622.keywords = i6624
  i6622.hasDiscard = !!i6623[1]
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6629 = data
  i6628.passId = i6629[0]
  i6628.subShaderIndex = i6629[1]
  var i6631 = i6629[2]
  var i6630 = []
  for(var i = 0; i < i6631.length; i += 1) {
    i6630.push( i6631[i + 0] );
  }
  i6628.keywords = i6630
  i6628.vertexProgram = i6629[3]
  i6628.fragmentProgram = i6629[4]
  i6628.exportedForWebGl2 = !!i6629[5]
  i6628.readDepth = !!i6629[6]
  return i6628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6635 = data
  request.r(i6635[0], i6635[1], 0, i6634, 'shader')
  i6634.pass = i6635[2]
  return i6634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6639 = data
  i6638.name = i6639[0]
  i6638.type = i6639[1]
  i6638.value = new pc.Vec4( i6639[2], i6639[3], i6639[4], i6639[5] )
  i6638.textureValue = i6639[6]
  i6638.shaderPropertyFlag = i6639[7]
  return i6638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6641 = data
  i6640.name = i6641[0]
  request.r(i6641[1], i6641[2], 0, i6640, 'texture')
  i6640.aabb = i6641[3]
  i6640.vertices = i6641[4]
  i6640.triangles = i6641[5]
  i6640.textureRect = UnityEngine.Rect.MinMaxRect(i6641[6], i6641[7], i6641[8], i6641[9])
  i6640.packedRect = UnityEngine.Rect.MinMaxRect(i6641[10], i6641[11], i6641[12], i6641[13])
  i6640.border = new pc.Vec4( i6641[14], i6641[15], i6641[16], i6641[17] )
  i6640.transparency = i6641[18]
  i6640.bounds = i6641[19]
  i6640.pixelsPerUnit = i6641[20]
  i6640.textureWidth = i6641[21]
  i6640.textureHeight = i6641[22]
  i6640.nativeSize = new pc.Vec2( i6641[23], i6641[24] )
  i6640.pivot = new pc.Vec2( i6641[25], i6641[26] )
  i6640.textureRectOffset = new pc.Vec2( i6641[27], i6641[28] )
  return i6640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6643 = data
  i6642.name = i6643[0]
  return i6642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6645 = data
  i6644.name = i6645[0]
  i6644.wrapMode = i6645[1]
  i6644.isLooping = !!i6645[2]
  i6644.length = i6645[3]
  var i6647 = i6645[4]
  var i6646 = []
  for(var i = 0; i < i6647.length; i += 1) {
    i6646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6647[i + 0]) );
  }
  i6644.curves = i6646
  var i6649 = i6645[5]
  var i6648 = []
  for(var i = 0; i < i6649.length; i += 1) {
    i6648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6649[i + 0]) );
  }
  i6644.events = i6648
  i6644.halfPrecision = !!i6645[6]
  i6644._frameRate = i6645[7]
  i6644.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6645[8], i6644.localBounds)
  i6644.hasMuscleCurves = !!i6645[9]
  var i6651 = i6645[10]
  var i6650 = []
  for(var i = 0; i < i6651.length; i += 1) {
    i6650.push( i6651[i + 0] );
  }
  i6644.clipMuscleConstant = i6650
  i6644.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6645[11], i6644.clipBindingConstant)
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6655 = data
  i6654.path = i6655[0]
  i6654.hash = i6655[1]
  i6654.componentType = i6655[2]
  i6654.property = i6655[3]
  i6654.keys = i6655[4]
  var i6657 = i6655[5]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6657[i + 0]) );
  }
  i6654.objectReferenceKeys = i6656
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6661 = data
  i6660.time = i6661[0]
  request.r(i6661[1], i6661[2], 0, i6660, 'value')
  return i6660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6665 = data
  i6664.functionName = i6665[0]
  i6664.floatParameter = i6665[1]
  i6664.intParameter = i6665[2]
  i6664.stringParameter = i6665[3]
  request.r(i6665[4], i6665[5], 0, i6664, 'objectReferenceParameter')
  i6664.time = i6665[6]
  return i6664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6667 = data
  i6666.center = new pc.Vec3( i6667[0], i6667[1], i6667[2] )
  i6666.extends = new pc.Vec3( i6667[3], i6667[4], i6667[5] )
  return i6666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6671 = data
  var i6673 = i6671[0]
  var i6672 = []
  for(var i = 0; i < i6673.length; i += 1) {
    i6672.push( i6673[i + 0] );
  }
  i6670.genericBindings = i6672
  var i6675 = i6671[1]
  var i6674 = []
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.push( i6675[i + 0] );
  }
  i6670.pptrCurveMapping = i6674
  return i6670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6677 = data
  i6676.name = i6677[0]
  var i6679 = i6677[1]
  var i6678 = []
  for(var i = 0; i < i6679.length; i += 1) {
    i6678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6679[i + 0]) );
  }
  i6676.layers = i6678
  var i6681 = i6677[2]
  var i6680 = []
  for(var i = 0; i < i6681.length; i += 1) {
    i6680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6681[i + 0]) );
  }
  i6676.parameters = i6680
  i6676.animationClips = i6677[3]
  i6676.avatarUnsupported = i6677[4]
  return i6676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6685 = data
  i6684.name = i6685[0]
  i6684.defaultWeight = i6685[1]
  i6684.blendingMode = i6685[2]
  i6684.avatarMask = i6685[3]
  i6684.syncedLayerIndex = i6685[4]
  i6684.syncedLayerAffectsTiming = !!i6685[5]
  i6684.syncedLayers = i6685[6]
  i6684.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6685[7], i6684.stateMachine)
  return i6684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6687 = data
  i6686.id = i6687[0]
  i6686.name = i6687[1]
  i6686.path = i6687[2]
  var i6689 = i6687[3]
  var i6688 = []
  for(var i = 0; i < i6689.length; i += 1) {
    i6688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6689[i + 0]) );
  }
  i6686.states = i6688
  var i6691 = i6687[4]
  var i6690 = []
  for(var i = 0; i < i6691.length; i += 1) {
    i6690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6691[i + 0]) );
  }
  i6686.machines = i6690
  var i6693 = i6687[5]
  var i6692 = []
  for(var i = 0; i < i6693.length; i += 1) {
    i6692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6693[i + 0]) );
  }
  i6686.entryStateTransitions = i6692
  var i6695 = i6687[6]
  var i6694 = []
  for(var i = 0; i < i6695.length; i += 1) {
    i6694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6695[i + 0]) );
  }
  i6686.exitStateTransitions = i6694
  var i6697 = i6687[7]
  var i6696 = []
  for(var i = 0; i < i6697.length; i += 1) {
    i6696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6697[i + 0]) );
  }
  i6686.anyStateTransitions = i6696
  i6686.defaultStateId = i6687[8]
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6701 = data
  i6700.id = i6701[0]
  i6700.name = i6701[1]
  i6700.cycleOffset = i6701[2]
  i6700.cycleOffsetParameter = i6701[3]
  i6700.cycleOffsetParameterActive = !!i6701[4]
  i6700.mirror = !!i6701[5]
  i6700.mirrorParameter = i6701[6]
  i6700.mirrorParameterActive = !!i6701[7]
  i6700.motionId = i6701[8]
  i6700.nameHash = i6701[9]
  i6700.fullPathHash = i6701[10]
  i6700.speed = i6701[11]
  i6700.speedParameter = i6701[12]
  i6700.speedParameterActive = !!i6701[13]
  i6700.tag = i6701[14]
  i6700.tagHash = i6701[15]
  i6700.writeDefaultValues = !!i6701[16]
  var i6703 = i6701[17]
  var i6702 = []
  for(var i = 0; i < i6703.length; i += 2) {
  request.r(i6703[i + 0], i6703[i + 1], 2, i6702, '')
  }
  i6700.behaviours = i6702
  var i6705 = i6701[18]
  var i6704 = []
  for(var i = 0; i < i6705.length; i += 1) {
    i6704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6705[i + 0]) );
  }
  i6700.transitions = i6704
  return i6700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6711 = data
  i6710.fullPath = i6711[0]
  i6710.canTransitionToSelf = !!i6711[1]
  i6710.duration = i6711[2]
  i6710.exitTime = i6711[3]
  i6710.hasExitTime = !!i6711[4]
  i6710.hasFixedDuration = !!i6711[5]
  i6710.interruptionSource = i6711[6]
  i6710.offset = i6711[7]
  i6710.orderedInterruption = !!i6711[8]
  i6710.destinationStateId = i6711[9]
  i6710.isExit = !!i6711[10]
  i6710.mute = !!i6711[11]
  i6710.solo = !!i6711[12]
  var i6713 = i6711[13]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6713[i + 0]) );
  }
  i6710.conditions = i6712
  return i6710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6719 = data
  i6718.destinationStateId = i6719[0]
  i6718.isExit = !!i6719[1]
  i6718.mute = !!i6719[2]
  i6718.solo = !!i6719[3]
  var i6721 = i6719[4]
  var i6720 = []
  for(var i = 0; i < i6721.length; i += 1) {
    i6720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6721[i + 0]) );
  }
  i6718.conditions = i6720
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6725 = data
  i6724.defaultBool = !!i6725[0]
  i6724.defaultFloat = i6725[1]
  i6724.defaultInt = i6725[2]
  i6724.name = i6725[3]
  i6724.nameHash = i6725[4]
  i6724.type = i6725[5]
  return i6724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6729 = data
  i6728.mode = i6729[0]
  i6728.parameter = i6729[1]
  i6728.threshold = i6729[2]
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6731 = data
  i6730.name = i6731[0]
  i6730.bytes64 = i6731[1]
  i6730.data = i6731[2]
  return i6730
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6732 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6733 = data
  i6732.normalStyle = i6733[0]
  i6732.normalSpacingOffset = i6733[1]
  i6732.boldStyle = i6733[2]
  i6732.boldSpacing = i6733[3]
  i6732.italicStyle = i6733[4]
  i6732.tabSize = i6733[5]
  request.r(i6733[6], i6733[7], 0, i6732, 'atlas')
  i6732.m_SourceFontFileGUID = i6733[8]
  i6732.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6733[9], i6732.m_CreationSettings)
  request.r(i6733[10], i6733[11], 0, i6732, 'm_SourceFontFile')
  i6732.m_SourceFontFilePath = i6733[12]
  i6732.m_AtlasPopulationMode = i6733[13]
  i6732.InternalDynamicOS = !!i6733[14]
  var i6735 = i6733[15]
  var i6734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6735.length; i += 1) {
    i6734.add(request.d('UnityEngine.TextCore.Glyph', i6735[i + 0]));
  }
  i6732.m_GlyphTable = i6734
  var i6737 = i6733[16]
  var i6736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6737.length; i += 1) {
    i6736.add(request.d('TMPro.TMP_Character', i6737[i + 0]));
  }
  i6732.m_CharacterTable = i6736
  var i6739 = i6733[17]
  var i6738 = []
  for(var i = 0; i < i6739.length; i += 2) {
  request.r(i6739[i + 0], i6739[i + 1], 2, i6738, '')
  }
  i6732.m_AtlasTextures = i6738
  i6732.m_AtlasTextureIndex = i6733[18]
  i6732.m_IsMultiAtlasTexturesEnabled = !!i6733[19]
  i6732.m_GetFontFeatures = !!i6733[20]
  i6732.m_ClearDynamicDataOnBuild = !!i6733[21]
  i6732.m_AtlasWidth = i6733[22]
  i6732.m_AtlasHeight = i6733[23]
  i6732.m_AtlasPadding = i6733[24]
  i6732.m_AtlasRenderMode = i6733[25]
  var i6741 = i6733[26]
  var i6740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6741.length; i += 1) {
    i6740.add(request.d('UnityEngine.TextCore.GlyphRect', i6741[i + 0]));
  }
  i6732.m_UsedGlyphRects = i6740
  var i6743 = i6733[27]
  var i6742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6743.length; i += 1) {
    i6742.add(request.d('UnityEngine.TextCore.GlyphRect', i6743[i + 0]));
  }
  i6732.m_FreeGlyphRects = i6742
  i6732.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6733[28], i6732.m_FontFeatureTable)
  i6732.m_ShouldReimportFontFeatures = !!i6733[29]
  var i6745 = i6733[30]
  var i6744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6745.length; i += 2) {
  request.r(i6745[i + 0], i6745[i + 1], 1, i6744, '')
  }
  i6732.m_FallbackFontAssetTable = i6744
  var i6747 = i6733[31]
  var i6746 = []
  for(var i = 0; i < i6747.length; i += 1) {
    i6746.push( request.d('TMPro.TMP_FontWeightPair', i6747[i + 0]) );
  }
  i6732.m_FontWeightTable = i6746
  var i6749 = i6733[32]
  var i6748 = []
  for(var i = 0; i < i6749.length; i += 1) {
    i6748.push( request.d('TMPro.TMP_FontWeightPair', i6749[i + 0]) );
  }
  i6732.fontWeights = i6748
  i6732.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6733[33], i6732.m_fontInfo)
  var i6751 = i6733[34]
  var i6750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6751.length; i += 1) {
    i6750.add(request.d('TMPro.TMP_Glyph', i6751[i + 0]));
  }
  i6732.m_glyphInfoList = i6750
  i6732.m_KerningTable = request.d('TMPro.KerningTable', i6733[35], i6732.m_KerningTable)
  var i6753 = i6733[36]
  var i6752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6753.length; i += 2) {
  request.r(i6753[i + 0], i6753[i + 1], 1, i6752, '')
  }
  i6732.fallbackFontAssets = i6752
  i6732.m_Version = i6733[37]
  i6732.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6733[38], i6732.m_FaceInfo)
  request.r(i6733[39], i6733[40], 0, i6732, 'm_Material')
  return i6732
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6754 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6755 = data
  i6754.sourceFontFileName = i6755[0]
  i6754.sourceFontFileGUID = i6755[1]
  i6754.faceIndex = i6755[2]
  i6754.pointSizeSamplingMode = i6755[3]
  i6754.pointSize = i6755[4]
  i6754.padding = i6755[5]
  i6754.paddingMode = i6755[6]
  i6754.packingMode = i6755[7]
  i6754.atlasWidth = i6755[8]
  i6754.atlasHeight = i6755[9]
  i6754.characterSetSelectionMode = i6755[10]
  i6754.characterSequence = i6755[11]
  i6754.referencedFontAssetGUID = i6755[12]
  i6754.referencedTextAssetGUID = i6755[13]
  i6754.fontStyle = i6755[14]
  i6754.fontStyleModifier = i6755[15]
  i6754.renderMode = i6755[16]
  i6754.includeFontFeatures = !!i6755[17]
  return i6754
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6758 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6759 = data
  i6758.m_Index = i6759[0]
  i6758.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6759[1], i6758.m_Metrics)
  i6758.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6759[2], i6758.m_GlyphRect)
  i6758.m_Scale = i6759[3]
  i6758.m_AtlasIndex = i6759[4]
  i6758.m_ClassDefinitionType = i6759[5]
  return i6758
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6760 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6761 = data
  i6760.m_Width = i6761[0]
  i6760.m_Height = i6761[1]
  i6760.m_HorizontalBearingX = i6761[2]
  i6760.m_HorizontalBearingY = i6761[3]
  i6760.m_HorizontalAdvance = i6761[4]
  return i6760
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6762 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6763 = data
  i6762.m_X = i6763[0]
  i6762.m_Y = i6763[1]
  i6762.m_Width = i6763[2]
  i6762.m_Height = i6763[3]
  return i6762
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6766 = root || request.c( 'TMPro.TMP_Character' )
  var i6767 = data
  i6766.m_ElementType = i6767[0]
  i6766.m_Unicode = i6767[1]
  i6766.m_GlyphIndex = i6767[2]
  i6766.m_Scale = i6767[3]
  return i6766
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6772 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6773 = data
  var i6775 = i6773[0]
  var i6774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6775.length; i += 1) {
    i6774.add(request.d('TMPro.MultipleSubstitutionRecord', i6775[i + 0]));
  }
  i6772.m_MultipleSubstitutionRecords = i6774
  var i6777 = i6773[1]
  var i6776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6777.length; i += 1) {
    i6776.add(request.d('TMPro.LigatureSubstitutionRecord', i6777[i + 0]));
  }
  i6772.m_LigatureSubstitutionRecords = i6776
  var i6779 = i6773[2]
  var i6778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6779.length; i += 1) {
    i6778.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6779[i + 0]));
  }
  i6772.m_GlyphPairAdjustmentRecords = i6778
  var i6781 = i6773[3]
  var i6780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6781.length; i += 1) {
    i6780.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6781[i + 0]));
  }
  i6772.m_MarkToBaseAdjustmentRecords = i6780
  var i6783 = i6773[4]
  var i6782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6783.length; i += 1) {
    i6782.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6783[i + 0]));
  }
  i6772.m_MarkToMarkAdjustmentRecords = i6782
  return i6772
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6786 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6787 = data
  i6786.m_TargetGlyphID = i6787[0]
  i6786.m_SubstituteGlyphIDs = i6787[1]
  return i6786
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6790 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6791 = data
  i6790.m_ComponentGlyphIDs = i6791[0]
  i6790.m_LigatureGlyphID = i6791[1]
  return i6790
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6794 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6795 = data
  i6794.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6795[0], i6794.m_FirstAdjustmentRecord)
  i6794.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6795[1], i6794.m_SecondAdjustmentRecord)
  i6794.m_FeatureLookupFlags = i6795[2]
  return i6794
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i6798 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i6799 = data
  i6798.m_BaseGlyphID = i6799[0]
  i6798.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6799[1], i6798.m_BaseGlyphAnchorPoint)
  i6798.m_MarkGlyphID = i6799[2]
  i6798.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6799[3], i6798.m_MarkPositionAdjustment)
  return i6798
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i6802 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i6803 = data
  i6802.m_BaseMarkGlyphID = i6803[0]
  i6802.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6803[1], i6802.m_BaseMarkGlyphAnchorPoint)
  i6802.m_CombiningMarkGlyphID = i6803[2]
  i6802.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6803[3], i6802.m_CombiningMarkPositionAdjustment)
  return i6802
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6808 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6809 = data
  request.r(i6809[0], i6809[1], 0, i6808, 'regularTypeface')
  request.r(i6809[2], i6809[3], 0, i6808, 'italicTypeface')
  return i6808
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6810 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6811 = data
  i6810.Name = i6811[0]
  i6810.PointSize = i6811[1]
  i6810.Scale = i6811[2]
  i6810.CharacterCount = i6811[3]
  i6810.LineHeight = i6811[4]
  i6810.Baseline = i6811[5]
  i6810.Ascender = i6811[6]
  i6810.CapHeight = i6811[7]
  i6810.Descender = i6811[8]
  i6810.CenterLine = i6811[9]
  i6810.SuperscriptOffset = i6811[10]
  i6810.SubscriptOffset = i6811[11]
  i6810.SubSize = i6811[12]
  i6810.Underline = i6811[13]
  i6810.UnderlineThickness = i6811[14]
  i6810.strikethrough = i6811[15]
  i6810.strikethroughThickness = i6811[16]
  i6810.TabWidth = i6811[17]
  i6810.Padding = i6811[18]
  i6810.AtlasWidth = i6811[19]
  i6810.AtlasHeight = i6811[20]
  return i6810
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6814 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6815 = data
  i6814.id = i6815[0]
  i6814.x = i6815[1]
  i6814.y = i6815[2]
  i6814.width = i6815[3]
  i6814.height = i6815[4]
  i6814.xOffset = i6815[5]
  i6814.yOffset = i6815[6]
  i6814.xAdvance = i6815[7]
  i6814.scale = i6815[8]
  return i6814
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6816 = root || request.c( 'TMPro.KerningTable' )
  var i6817 = data
  var i6819 = i6817[0]
  var i6818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6819.length; i += 1) {
    i6818.add(request.d('TMPro.KerningPair', i6819[i + 0]));
  }
  i6816.kerningPairs = i6818
  return i6816
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6822 = root || request.c( 'TMPro.KerningPair' )
  var i6823 = data
  i6822.xOffset = i6823[0]
  i6822.m_FirstGlyph = i6823[1]
  i6822.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6823[2], i6822.m_FirstGlyphAdjustments)
  i6822.m_SecondGlyph = i6823[3]
  i6822.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6823[4], i6822.m_SecondGlyphAdjustments)
  i6822.m_IgnoreSpacingAdjustments = !!i6823[5]
  return i6822
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6824 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6825 = data
  i6824.m_FaceIndex = i6825[0]
  i6824.m_FamilyName = i6825[1]
  i6824.m_StyleName = i6825[2]
  i6824.m_PointSize = i6825[3]
  i6824.m_Scale = i6825[4]
  i6824.m_UnitsPerEM = i6825[5]
  i6824.m_LineHeight = i6825[6]
  i6824.m_AscentLine = i6825[7]
  i6824.m_CapLine = i6825[8]
  i6824.m_MeanLine = i6825[9]
  i6824.m_Baseline = i6825[10]
  i6824.m_DescentLine = i6825[11]
  i6824.m_SuperscriptOffset = i6825[12]
  i6824.m_SuperscriptSize = i6825[13]
  i6824.m_SubscriptOffset = i6825[14]
  i6824.m_SubscriptSize = i6825[15]
  i6824.m_UnderlineOffset = i6825[16]
  i6824.m_UnderlineThickness = i6825[17]
  i6824.m_StrikethroughOffset = i6825[18]
  i6824.m_StrikethroughThickness = i6825[19]
  i6824.m_TabWidth = i6825[20]
  return i6824
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6827 = data
  i6826.useSafeMode = !!i6827[0]
  i6826.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6827[1], i6826.safeModeOptions)
  i6826.timeScale = i6827[2]
  i6826.unscaledTimeScale = i6827[3]
  i6826.useSmoothDeltaTime = !!i6827[4]
  i6826.maxSmoothUnscaledTime = i6827[5]
  i6826.rewindCallbackMode = i6827[6]
  i6826.showUnityEditorReport = !!i6827[7]
  i6826.logBehaviour = i6827[8]
  i6826.drawGizmos = !!i6827[9]
  i6826.defaultRecyclable = !!i6827[10]
  i6826.defaultAutoPlay = i6827[11]
  i6826.defaultUpdateType = i6827[12]
  i6826.defaultTimeScaleIndependent = !!i6827[13]
  i6826.defaultEaseType = i6827[14]
  i6826.defaultEaseOvershootOrAmplitude = i6827[15]
  i6826.defaultEasePeriod = i6827[16]
  i6826.defaultAutoKill = !!i6827[17]
  i6826.defaultLoopType = i6827[18]
  i6826.debugMode = !!i6827[19]
  i6826.debugStoreTargetId = !!i6827[20]
  i6826.showPreviewPanel = !!i6827[21]
  i6826.storeSettingsLocation = i6827[22]
  i6826.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6827[23], i6826.modules)
  i6826.createASMDEF = !!i6827[24]
  i6826.showPlayingTweens = !!i6827[25]
  i6826.showPausedTweens = !!i6827[26]
  return i6826
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6829 = data
  i6828.logBehaviour = i6829[0]
  i6828.nestedTweenFailureBehaviour = i6829[1]
  return i6828
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6831 = data
  i6830.showPanel = !!i6831[0]
  i6830.audioEnabled = !!i6831[1]
  i6830.physicsEnabled = !!i6831[2]
  i6830.physics2DEnabled = !!i6831[3]
  i6830.spriteEnabled = !!i6831[4]
  i6830.uiEnabled = !!i6831[5]
  i6830.uiToolkitEnabled = !!i6831[6]
  i6830.textMeshProEnabled = !!i6831[7]
  i6830.tk2DEnabled = !!i6831[8]
  i6830.deAudioEnabled = !!i6831[9]
  i6830.deUnityExtendedEnabled = !!i6831[10]
  i6830.epoOutlineEnabled = !!i6831[11]
  return i6830
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6832 = root || request.c( 'TMPro.TMP_Settings' )
  var i6833 = data
  i6832.assetVersion = i6833[0]
  i6832.m_TextWrappingMode = i6833[1]
  i6832.m_enableKerning = !!i6833[2]
  var i6835 = i6833[3]
  var i6834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6835.length; i += 1) {
    i6834.add(i6835[i + 0]);
  }
  i6832.m_ActiveFontFeatures = i6834
  i6832.m_enableExtraPadding = !!i6833[4]
  i6832.m_enableTintAllSprites = !!i6833[5]
  i6832.m_enableParseEscapeCharacters = !!i6833[6]
  i6832.m_EnableRaycastTarget = !!i6833[7]
  i6832.m_GetFontFeaturesAtRuntime = !!i6833[8]
  i6832.m_missingGlyphCharacter = i6833[9]
  i6832.m_ClearDynamicDataOnBuild = !!i6833[10]
  i6832.m_warningsDisabled = !!i6833[11]
  request.r(i6833[12], i6833[13], 0, i6832, 'm_defaultFontAsset')
  i6832.m_defaultFontAssetPath = i6833[14]
  i6832.m_defaultFontSize = i6833[15]
  i6832.m_defaultAutoSizeMinRatio = i6833[16]
  i6832.m_defaultAutoSizeMaxRatio = i6833[17]
  i6832.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6833[18], i6833[19] )
  i6832.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6833[20], i6833[21] )
  i6832.m_autoSizeTextContainer = !!i6833[22]
  i6832.m_IsTextObjectScaleStatic = !!i6833[23]
  var i6837 = i6833[24]
  var i6836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6837.length; i += 2) {
  request.r(i6837[i + 0], i6837[i + 1], 1, i6836, '')
  }
  i6832.m_fallbackFontAssets = i6836
  i6832.m_matchMaterialPreset = !!i6833[25]
  i6832.m_HideSubTextObjects = !!i6833[26]
  request.r(i6833[27], i6833[28], 0, i6832, 'm_defaultSpriteAsset')
  i6832.m_defaultSpriteAssetPath = i6833[29]
  i6832.m_enableEmojiSupport = !!i6833[30]
  i6832.m_MissingCharacterSpriteUnicode = i6833[31]
  var i6839 = i6833[32]
  var i6838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6839.length; i += 2) {
  request.r(i6839[i + 0], i6839[i + 1], 1, i6838, '')
  }
  i6832.m_EmojiFallbackTextAssets = i6838
  i6832.m_defaultColorGradientPresetsPath = i6833[33]
  request.r(i6833[34], i6833[35], 0, i6832, 'm_defaultStyleSheet')
  i6832.m_StyleSheetsResourcePath = i6833[36]
  request.r(i6833[37], i6833[38], 0, i6832, 'm_leadingCharacters')
  request.r(i6833[39], i6833[40], 0, i6832, 'm_followingCharacters')
  i6832.m_UseModernHangulLineBreakingRules = !!i6833[41]
  return i6832
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6842 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6843 = data
  request.r(i6843[0], i6843[1], 0, i6842, 'spriteSheet')
  var i6845 = i6843[2]
  var i6844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6845.length; i += 1) {
    i6844.add(request.d('TMPro.TMP_Sprite', i6845[i + 0]));
  }
  i6842.spriteInfoList = i6844
  var i6847 = i6843[3]
  var i6846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6847.length; i += 2) {
  request.r(i6847[i + 0], i6847[i + 1], 1, i6846, '')
  }
  i6842.fallbackSpriteAssets = i6846
  var i6849 = i6843[4]
  var i6848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6849.length; i += 1) {
    i6848.add(request.d('TMPro.TMP_SpriteCharacter', i6849[i + 0]));
  }
  i6842.m_SpriteCharacterTable = i6848
  var i6851 = i6843[5]
  var i6850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6851.length; i += 1) {
    i6850.add(request.d('TMPro.TMP_SpriteGlyph', i6851[i + 0]));
  }
  i6842.m_GlyphTable = i6850
  i6842.m_Version = i6843[6]
  i6842.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6843[7], i6842.m_FaceInfo)
  request.r(i6843[8], i6843[9], 0, i6842, 'm_Material')
  return i6842
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6854 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6855 = data
  i6854.name = i6855[0]
  i6854.hashCode = i6855[1]
  i6854.unicode = i6855[2]
  i6854.pivot = new pc.Vec2( i6855[3], i6855[4] )
  request.r(i6855[5], i6855[6], 0, i6854, 'sprite')
  i6854.id = i6855[7]
  i6854.x = i6855[8]
  i6854.y = i6855[9]
  i6854.width = i6855[10]
  i6854.height = i6855[11]
  i6854.xOffset = i6855[12]
  i6854.yOffset = i6855[13]
  i6854.xAdvance = i6855[14]
  i6854.scale = i6855[15]
  return i6854
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6860 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6861 = data
  i6860.m_Name = i6861[0]
  i6860.m_ElementType = i6861[1]
  i6860.m_Unicode = i6861[2]
  i6860.m_GlyphIndex = i6861[3]
  i6860.m_Scale = i6861[4]
  return i6860
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6864 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6865 = data
  request.r(i6865[0], i6865[1], 0, i6864, 'sprite')
  i6864.m_Index = i6865[2]
  i6864.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6865[3], i6864.m_Metrics)
  i6864.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6865[4], i6864.m_GlyphRect)
  i6864.m_Scale = i6865[5]
  i6864.m_AtlasIndex = i6865[6]
  i6864.m_ClassDefinitionType = i6865[7]
  return i6864
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6866 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6867 = data
  var i6869 = i6867[0]
  var i6868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.add(request.d('TMPro.TMP_Style', i6869[i + 0]));
  }
  i6866.m_StyleList = i6868
  return i6866
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6872 = root || request.c( 'TMPro.TMP_Style' )
  var i6873 = data
  i6872.m_Name = i6873[0]
  i6872.m_HashCode = i6873[1]
  i6872.m_OpeningDefinition = i6873[2]
  i6872.m_ClosingDefinition = i6873[3]
  i6872.m_OpeningTagArray = i6873[4]
  i6872.m_ClosingTagArray = i6873[5]
  return i6872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6875 = data
  var i6877 = i6875[0]
  var i6876 = []
  for(var i = 0; i < i6877.length; i += 1) {
    i6876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6877[i + 0]) );
  }
  i6874.files = i6876
  i6874.componentToPrefabIds = i6875[1]
  return i6874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6881 = data
  i6880.path = i6881[0]
  request.r(i6881[1], i6881[2], 0, i6880, 'unityObject')
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6883 = data
  var i6885 = i6883[0]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6885[i + 0]) );
  }
  i6882.scriptsExecutionOrder = i6884
  var i6887 = i6883[1]
  var i6886 = []
  for(var i = 0; i < i6887.length; i += 1) {
    i6886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6887[i + 0]) );
  }
  i6882.sortingLayers = i6886
  var i6889 = i6883[2]
  var i6888 = []
  for(var i = 0; i < i6889.length; i += 1) {
    i6888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6889[i + 0]) );
  }
  i6882.cullingLayers = i6888
  i6882.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6883[3], i6882.timeSettings)
  i6882.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6883[4], i6882.physicsSettings)
  i6882.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6883[5], i6882.physics2DSettings)
  i6882.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6883[6], i6882.qualitySettings)
  i6882.enableRealtimeShadows = !!i6883[7]
  i6882.enableAutoInstancing = !!i6883[8]
  i6882.enableStaticBatching = !!i6883[9]
  i6882.enableDynamicBatching = !!i6883[10]
  i6882.lightmapEncodingQuality = i6883[11]
  i6882.desiredColorSpace = i6883[12]
  var i6891 = i6883[13]
  var i6890 = []
  for(var i = 0; i < i6891.length; i += 1) {
    i6890.push( i6891[i + 0] );
  }
  i6882.allTags = i6890
  return i6882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6895 = data
  i6894.name = i6895[0]
  i6894.value = i6895[1]
  return i6894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6899 = data
  i6898.id = i6899[0]
  i6898.name = i6899[1]
  i6898.value = i6899[2]
  return i6898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6903 = data
  i6902.id = i6903[0]
  i6902.name = i6903[1]
  return i6902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6905 = data
  i6904.fixedDeltaTime = i6905[0]
  i6904.maximumDeltaTime = i6905[1]
  i6904.timeScale = i6905[2]
  i6904.maximumParticleTimestep = i6905[3]
  return i6904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6907 = data
  i6906.gravity = new pc.Vec3( i6907[0], i6907[1], i6907[2] )
  i6906.defaultSolverIterations = i6907[3]
  i6906.bounceThreshold = i6907[4]
  i6906.autoSyncTransforms = !!i6907[5]
  i6906.autoSimulation = !!i6907[6]
  var i6909 = i6907[7]
  var i6908 = []
  for(var i = 0; i < i6909.length; i += 1) {
    i6908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6909[i + 0]) );
  }
  i6906.collisionMatrix = i6908
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6913 = data
  i6912.enabled = !!i6913[0]
  i6912.layerId = i6913[1]
  i6912.otherLayerId = i6913[2]
  return i6912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6915 = data
  request.r(i6915[0], i6915[1], 0, i6914, 'material')
  i6914.gravity = new pc.Vec2( i6915[2], i6915[3] )
  i6914.positionIterations = i6915[4]
  i6914.velocityIterations = i6915[5]
  i6914.velocityThreshold = i6915[6]
  i6914.maxLinearCorrection = i6915[7]
  i6914.maxAngularCorrection = i6915[8]
  i6914.maxTranslationSpeed = i6915[9]
  i6914.maxRotationSpeed = i6915[10]
  i6914.baumgarteScale = i6915[11]
  i6914.baumgarteTOIScale = i6915[12]
  i6914.timeToSleep = i6915[13]
  i6914.linearSleepTolerance = i6915[14]
  i6914.angularSleepTolerance = i6915[15]
  i6914.defaultContactOffset = i6915[16]
  i6914.autoSimulation = !!i6915[17]
  i6914.queriesHitTriggers = !!i6915[18]
  i6914.queriesStartInColliders = !!i6915[19]
  i6914.callbacksOnDisable = !!i6915[20]
  i6914.reuseCollisionCallbacks = !!i6915[21]
  i6914.autoSyncTransforms = !!i6915[22]
  var i6917 = i6915[23]
  var i6916 = []
  for(var i = 0; i < i6917.length; i += 1) {
    i6916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6917[i + 0]) );
  }
  i6914.collisionMatrix = i6916
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6921 = data
  i6920.enabled = !!i6921[0]
  i6920.layerId = i6921[1]
  i6920.otherLayerId = i6921[2]
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6923 = data
  var i6925 = i6923[0]
  var i6924 = []
  for(var i = 0; i < i6925.length; i += 1) {
    i6924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6925[i + 0]) );
  }
  i6922.qualityLevels = i6924
  var i6927 = i6923[1]
  var i6926 = []
  for(var i = 0; i < i6927.length; i += 1) {
    i6926.push( i6927[i + 0] );
  }
  i6922.names = i6926
  i6922.shadows = i6923[2]
  i6922.anisotropicFiltering = i6923[3]
  i6922.antiAliasing = i6923[4]
  i6922.lodBias = i6923[5]
  i6922.shadowCascades = i6923[6]
  i6922.shadowDistance = i6923[7]
  i6922.shadowmaskMode = i6923[8]
  i6922.shadowProjection = i6923[9]
  i6922.shadowResolution = i6923[10]
  i6922.softParticles = !!i6923[11]
  i6922.softVegetation = !!i6923[12]
  i6922.activeColorSpace = i6923[13]
  i6922.desiredColorSpace = i6923[14]
  i6922.masterTextureLimit = i6923[15]
  i6922.maxQueuedFrames = i6923[16]
  i6922.particleRaycastBudget = i6923[17]
  i6922.pixelLightCount = i6923[18]
  i6922.realtimeReflectionProbes = !!i6923[19]
  i6922.shadowCascade2Split = i6923[20]
  i6922.shadowCascade4Split = new pc.Vec3( i6923[21], i6923[22], i6923[23] )
  i6922.streamingMipmapsActive = !!i6923[24]
  i6922.vSyncCount = i6923[25]
  i6922.asyncUploadBufferSize = i6923[26]
  i6922.asyncUploadTimeSlice = i6923[27]
  i6922.billboardsFaceCameraPosition = !!i6923[28]
  i6922.shadowNearPlaneOffset = i6923[29]
  i6922.streamingMipmapsMemoryBudget = i6923[30]
  i6922.maximumLODLevel = i6923[31]
  i6922.streamingMipmapsAddAllCameras = !!i6923[32]
  i6922.streamingMipmapsMaxLevelReduction = i6923[33]
  i6922.streamingMipmapsRenderersPerFrame = i6923[34]
  i6922.resolutionScalingFixedDPIFactor = i6923[35]
  i6922.streamingMipmapsMaxFileIORequests = i6923[36]
  i6922.currentQualityLevel = i6923[37]
  return i6922
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6930 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i6931 = data
  i6930.m_GlyphIndex = i6931[0]
  i6930.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i6931[1], i6930.m_GlyphValueRecord)
  return i6930
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6932 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6933 = data
  i6932.m_XCoordinate = i6933[0]
  i6932.m_YCoordinate = i6933[1]
  return i6932
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6934 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6935 = data
  i6934.m_XPositionAdjustment = i6935[0]
  i6934.m_YPositionAdjustment = i6935[1]
  return i6934
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6936 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6937 = data
  i6936.xPlacement = i6937[0]
  i6936.yPlacement = i6937[1]
  i6936.xAdvance = i6937[2]
  i6936.yAdvance = i6937[3]
  return i6936
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i6938 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i6939 = data
  i6938.m_XPlacement = i6939[0]
  i6938.m_YPlacement = i6939[1]
  i6938.m_XAdvance = i6939[2]
  i6938.m_YAdvance = i6939[3]
  return i6938
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5017";

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

Deserializers.buildID = "ca5e9d06-b18b-417c-9746-7175bddce707";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

