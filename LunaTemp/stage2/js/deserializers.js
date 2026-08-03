var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointSpring' )
  var i2047 = data
  i2046.spring = i2047[0]
  i2046.damper = i2047[1]
  i2046.targetPosition = i2047[2]
  return i2046
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointMotor' )
  var i2049 = data
  i2048.m_TargetVelocity = i2049[0]
  i2048.m_Force = i2049[1]
  i2048.m_FreeSpin = i2049[2]
  return i2048
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointLimits' )
  var i2051 = data
  i2050.m_Min = i2051[0]
  i2050.m_Max = i2051[1]
  i2050.m_Bounciness = i2051[2]
  i2050.m_BounceMinVelocity = i2051[3]
  i2050.m_ContactDistance = i2051[4]
  i2050.minBounce = i2051[5]
  i2050.maxBounce = i2051[6]
  return i2050
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointDrive' )
  var i2053 = data
  i2052.m_PositionSpring = i2053[0]
  i2052.m_PositionDamper = i2053[1]
  i2052.m_MaximumForce = i2053[2]
  i2052.m_UseAcceleration = i2053[3]
  return i2052
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2055 = data
  i2054.m_Spring = i2055[0]
  i2054.m_Damper = i2055[1]
  return i2054
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2057 = data
  i2056.m_Limit = i2057[0]
  i2056.m_Bounciness = i2057[1]
  i2056.m_ContactDistance = i2057[2]
  return i2056
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2059 = data
  i2058.m_ExtremumSlip = i2059[0]
  i2058.m_ExtremumValue = i2059[1]
  i2058.m_AsymptoteSlip = i2059[2]
  i2058.m_AsymptoteValue = i2059[3]
  i2058.m_Stiffness = i2059[4]
  return i2058
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2061 = data
  i2060.m_LowerAngle = i2061[0]
  i2060.m_UpperAngle = i2061[1]
  return i2060
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2063 = data
  i2062.m_MotorSpeed = i2063[0]
  i2062.m_MaximumMotorTorque = i2063[1]
  return i2062
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2065 = data
  i2064.m_DampingRatio = i2065[0]
  i2064.m_Frequency = i2065[1]
  i2064.m_Angle = i2065[2]
  return i2064
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2067 = data
  i2066.m_LowerTranslation = i2067[0]
  i2066.m_UpperTranslation = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2068 = root || new pc.UnityMaterial()
  var i2069 = data
  i2068.name = i2069[0]
  request.r(i2069[1], i2069[2], 0, i2068, 'shader')
  i2068.renderQueue = i2069[3]
  i2068.enableInstancing = !!i2069[4]
  var i2071 = i2069[5]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2071[i + 0]) );
  }
  i2068.floatParameters = i2070
  var i2073 = i2069[6]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2073[i + 0]) );
  }
  i2068.colorParameters = i2072
  var i2075 = i2069[7]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2075[i + 0]) );
  }
  i2068.vectorParameters = i2074
  var i2077 = i2069[8]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2077[i + 0]) );
  }
  i2068.textureParameters = i2076
  var i2079 = i2069[9]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2079[i + 0]) );
  }
  i2068.materialFlags = i2078
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.value = i2083[1]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.value = new pc.Color(i2087[1], i2087[2], i2087[3], i2087[4])
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.value = new pc.Vec4( i2091[1], i2091[2], i2091[3], i2091[4] )
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2095 = data
  i2094.name = i2095[0]
  request.r(i2095[1], i2095[2], 0, i2094, 'value')
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.enabled = !!i2099[1]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2101 = data
  i2100.name = i2101[0]
  i2100.width = i2101[1]
  i2100.height = i2101[2]
  i2100.mipmapCount = i2101[3]
  i2100.anisoLevel = i2101[4]
  i2100.filterMode = i2101[5]
  i2100.hdr = !!i2101[6]
  i2100.format = i2101[7]
  i2100.wrapMode = i2101[8]
  i2100.alphaIsTransparency = !!i2101[9]
  i2100.alphaSource = i2101[10]
  i2100.graphicsFormat = i2101[11]
  i2100.sRGBTexture = !!i2101[12]
  i2100.desiredColorSpace = i2101[13]
  i2100.wrapU = i2101[14]
  i2100.wrapV = i2101[15]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2103 = data
  i2102.position = new pc.Vec3( i2103[0], i2103[1], i2103[2] )
  i2102.scale = new pc.Vec3( i2103[3], i2103[4], i2103[5] )
  i2102.rotation = new pc.Quat(i2103[6], i2103[7], i2103[8], i2103[9])
  return i2102
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2104 = root || request.c( 'HeartEffect' )
  var i2105 = data
  i2104.defaultLifeTime = i2105[0]
  request.r(i2105[1], i2105[2], 0, i2104, 'tf')
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2107 = data
  i2106.color = new pc.Color(i2107[0], i2107[1], i2107[2], i2107[3])
  request.r(i2107[4], i2107[5], 0, i2106, 'sprite')
  i2106.flipX = !!i2107[6]
  i2106.flipY = !!i2107[7]
  i2106.drawMode = i2107[8]
  i2106.size = new pc.Vec2( i2107[9], i2107[10] )
  i2106.tileMode = i2107[11]
  i2106.adaptiveModeThreshold = i2107[12]
  i2106.maskInteraction = i2107[13]
  i2106.spriteSortPoint = i2107[14]
  i2106.enabled = !!i2107[15]
  request.r(i2107[16], i2107[17], 0, i2106, 'sharedMaterial')
  var i2109 = i2107[18]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106.sharedMaterials = i2108
  i2106.receiveShadows = !!i2107[19]
  i2106.shadowCastingMode = i2107[20]
  i2106.sortingLayerID = i2107[21]
  i2106.sortingOrder = i2107[22]
  i2106.lightmapIndex = i2107[23]
  i2106.lightmapSceneIndex = i2107[24]
  i2106.lightmapScaleOffset = new pc.Vec4( i2107[25], i2107[26], i2107[27], i2107[28] )
  i2106.lightProbeUsage = i2107[29]
  i2106.reflectionProbeUsage = i2107[30]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2113 = data
  i2112.name = i2113[0]
  i2112.tagId = i2113[1]
  i2112.enabled = !!i2113[2]
  i2112.isStatic = !!i2113[3]
  i2112.layer = i2113[4]
  return i2112
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2114 = root || request.c( 'HeartBreakEffect' )
  var i2115 = data
  i2114.defaultLifeTime = i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'tf')
  return i2114
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2116 = root || request.c( 'BlinkEffect' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'tf')
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'mesh')
  i2118.meshCount = i2119[2]
  i2118.activeVertexStreamsCount = i2119[3]
  i2118.alignment = i2119[4]
  i2118.renderMode = i2119[5]
  i2118.sortMode = i2119[6]
  i2118.lengthScale = i2119[7]
  i2118.velocityScale = i2119[8]
  i2118.cameraVelocityScale = i2119[9]
  i2118.normalDirection = i2119[10]
  i2118.sortingFudge = i2119[11]
  i2118.minParticleSize = i2119[12]
  i2118.maxParticleSize = i2119[13]
  i2118.pivot = new pc.Vec3( i2119[14], i2119[15], i2119[16] )
  request.r(i2119[17], i2119[18], 0, i2118, 'trailMaterial')
  i2118.applyActiveColorSpace = !!i2119[19]
  i2118.enabled = !!i2119[20]
  request.r(i2119[21], i2119[22], 0, i2118, 'sharedMaterial')
  var i2121 = i2119[23]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 2, i2120, '')
  }
  i2118.sharedMaterials = i2120
  i2118.receiveShadows = !!i2119[24]
  i2118.shadowCastingMode = i2119[25]
  i2118.sortingLayerID = i2119[26]
  i2118.sortingOrder = i2119[27]
  i2118.lightmapIndex = i2119[28]
  i2118.lightmapSceneIndex = i2119[29]
  i2118.lightmapScaleOffset = new pc.Vec4( i2119[30], i2119[31], i2119[32], i2119[33] )
  i2118.lightProbeUsage = i2119[34]
  i2118.reflectionProbeUsage = i2119[35]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2123 = data
  i2122.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2123[0], i2122.main)
  i2122.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2123[1], i2122.colorBySpeed)
  i2122.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2123[2], i2122.colorOverLifetime)
  i2122.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2123[3], i2122.emission)
  i2122.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2123[4], i2122.rotationBySpeed)
  i2122.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2123[5], i2122.rotationOverLifetime)
  i2122.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2123[6], i2122.shape)
  i2122.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2123[7], i2122.sizeBySpeed)
  i2122.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2123[8], i2122.sizeOverLifetime)
  i2122.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2123[9], i2122.textureSheetAnimation)
  i2122.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2123[10], i2122.velocityOverLifetime)
  i2122.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2123[11], i2122.noise)
  i2122.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2123[12], i2122.inheritVelocity)
  i2122.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2123[13], i2122.forceOverLifetime)
  i2122.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2123[14], i2122.limitVelocityOverLifetime)
  i2122.useAutoRandomSeed = !!i2123[15]
  i2122.randomSeed = i2123[16]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2124 = root || new pc.ParticleSystemMain()
  var i2125 = data
  i2124.duration = i2125[0]
  i2124.loop = !!i2125[1]
  i2124.prewarm = !!i2125[2]
  i2124.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[3], i2124.startDelay)
  i2124.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[4], i2124.startLifetime)
  i2124.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[5], i2124.startSpeed)
  i2124.startSize3D = !!i2125[6]
  i2124.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[7], i2124.startSizeX)
  i2124.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[8], i2124.startSizeY)
  i2124.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[9], i2124.startSizeZ)
  i2124.startRotation3D = !!i2125[10]
  i2124.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[11], i2124.startRotationX)
  i2124.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[12], i2124.startRotationY)
  i2124.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[13], i2124.startRotationZ)
  i2124.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2125[14], i2124.startColor)
  i2124.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[15], i2124.gravityModifier)
  i2124.simulationSpace = i2125[16]
  request.r(i2125[17], i2125[18], 0, i2124, 'customSimulationSpace')
  i2124.simulationSpeed = i2125[19]
  i2124.useUnscaledTime = !!i2125[20]
  i2124.scalingMode = i2125[21]
  i2124.playOnAwake = !!i2125[22]
  i2124.maxParticles = i2125[23]
  i2124.emitterVelocityMode = i2125[24]
  i2124.stopAction = i2125[25]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2126 = root || new pc.MinMaxCurve()
  var i2127 = data
  i2126.mode = i2127[0]
  i2126.curveMin = new pc.AnimationCurve( { keys_flow: i2127[1] } )
  i2126.curveMax = new pc.AnimationCurve( { keys_flow: i2127[2] } )
  i2126.curveMultiplier = i2127[3]
  i2126.constantMin = i2127[4]
  i2126.constantMax = i2127[5]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2128 = root || new pc.MinMaxGradient()
  var i2129 = data
  i2128.mode = i2129[0]
  i2128.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2129[1], i2128.gradientMin)
  i2128.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2129[2], i2128.gradientMax)
  i2128.colorMin = new pc.Color(i2129[3], i2129[4], i2129[5], i2129[6])
  i2128.colorMax = new pc.Color(i2129[7], i2129[8], i2129[9], i2129[10])
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2131 = data
  i2130.mode = i2131[0]
  var i2133 = i2131[1]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2133[i + 0]) );
  }
  i2130.colorKeys = i2132
  var i2135 = i2131[2]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2135[i + 0]) );
  }
  i2130.alphaKeys = i2134
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2136 = root || new pc.ParticleSystemColorBySpeed()
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2137[1], i2136.color)
  i2136.range = new pc.Vec2( i2137[2], i2137[3] )
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2141 = data
  i2140.color = new pc.Color(i2141[0], i2141[1], i2141[2], i2141[3])
  i2140.time = i2141[4]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2145 = data
  i2144.alpha = i2145[0]
  i2144.time = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2146 = root || new pc.ParticleSystemColorOverLifetime()
  var i2147 = data
  i2146.enabled = !!i2147[0]
  i2146.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2147[1], i2146.color)
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemEmitter()
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[1], i2148.rateOverTime)
  i2148.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[2], i2148.rateOverDistance)
  var i2151 = i2149[3]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2151[i + 0]) );
  }
  i2148.bursts = i2150
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2154 = root || new pc.ParticleSystemBurst()
  var i2155 = data
  i2154.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[0], i2154.count)
  i2154.cycleCount = i2155[1]
  i2154.minCount = i2155[2]
  i2154.maxCount = i2155[3]
  i2154.repeatInterval = i2155[4]
  i2154.time = i2155[5]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2156 = root || new pc.ParticleSystemRotationBySpeed()
  var i2157 = data
  i2156.enabled = !!i2157[0]
  i2156.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[1], i2156.x)
  i2156.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[2], i2156.y)
  i2156.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[3], i2156.z)
  i2156.separateAxes = !!i2157[4]
  i2156.range = new pc.Vec2( i2157[5], i2157[6] )
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2158 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2159 = data
  i2158.enabled = !!i2159[0]
  i2158.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[1], i2158.x)
  i2158.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[2], i2158.y)
  i2158.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[3], i2158.z)
  i2158.separateAxes = !!i2159[4]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemShape()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.shapeType = i2161[1]
  i2160.randomDirectionAmount = i2161[2]
  i2160.sphericalDirectionAmount = i2161[3]
  i2160.randomPositionAmount = i2161[4]
  i2160.alignToDirection = !!i2161[5]
  i2160.radius = i2161[6]
  i2160.radiusMode = i2161[7]
  i2160.radiusSpread = i2161[8]
  i2160.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[9], i2160.radiusSpeed)
  i2160.radiusThickness = i2161[10]
  i2160.angle = i2161[11]
  i2160.length = i2161[12]
  i2160.boxThickness = new pc.Vec3( i2161[13], i2161[14], i2161[15] )
  i2160.meshShapeType = i2161[16]
  request.r(i2161[17], i2161[18], 0, i2160, 'mesh')
  request.r(i2161[19], i2161[20], 0, i2160, 'meshRenderer')
  request.r(i2161[21], i2161[22], 0, i2160, 'skinnedMeshRenderer')
  i2160.useMeshMaterialIndex = !!i2161[23]
  i2160.meshMaterialIndex = i2161[24]
  i2160.useMeshColors = !!i2161[25]
  i2160.normalOffset = i2161[26]
  i2160.arc = i2161[27]
  i2160.arcMode = i2161[28]
  i2160.arcSpread = i2161[29]
  i2160.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[30], i2160.arcSpeed)
  i2160.donutRadius = i2161[31]
  i2160.position = new pc.Vec3( i2161[32], i2161[33], i2161[34] )
  i2160.rotation = new pc.Vec3( i2161[35], i2161[36], i2161[37] )
  i2160.scale = new pc.Vec3( i2161[38], i2161[39], i2161[40] )
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2162 = root || new pc.ParticleSystemSizeBySpeed()
  var i2163 = data
  i2162.enabled = !!i2163[0]
  i2162.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[1], i2162.x)
  i2162.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[2], i2162.y)
  i2162.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[3], i2162.z)
  i2162.separateAxes = !!i2163[4]
  i2162.range = new pc.Vec2( i2163[5], i2163[6] )
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2164 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2165 = data
  i2164.enabled = !!i2165[0]
  i2164.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[1], i2164.x)
  i2164.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[2], i2164.y)
  i2164.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[3], i2164.z)
  i2164.separateAxes = !!i2165[4]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2166 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2167 = data
  i2166.enabled = !!i2167[0]
  i2166.mode = i2167[1]
  i2166.animation = i2167[2]
  i2166.numTilesX = i2167[3]
  i2166.numTilesY = i2167[4]
  i2166.useRandomRow = !!i2167[5]
  i2166.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[6], i2166.frameOverTime)
  i2166.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[7], i2166.startFrame)
  i2166.cycleCount = i2167[8]
  i2166.rowIndex = i2167[9]
  i2166.flipU = i2167[10]
  i2166.flipV = i2167[11]
  i2166.spriteCount = i2167[12]
  var i2169 = i2167[13]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 2, i2168, '')
  }
  i2166.sprites = i2168
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[1], i2172.x)
  i2172.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[2], i2172.y)
  i2172.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[3], i2172.z)
  i2172.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[4], i2172.radial)
  i2172.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[5], i2172.speedModifier)
  i2172.space = i2173[6]
  i2172.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[7], i2172.orbitalX)
  i2172.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[8], i2172.orbitalY)
  i2172.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[9], i2172.orbitalZ)
  i2172.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[10], i2172.orbitalOffsetX)
  i2172.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[11], i2172.orbitalOffsetY)
  i2172.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[12], i2172.orbitalOffsetZ)
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemNoise()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.separateAxes = !!i2175[1]
  i2174.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[2], i2174.strengthX)
  i2174.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[3], i2174.strengthY)
  i2174.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[4], i2174.strengthZ)
  i2174.frequency = i2175[5]
  i2174.damping = !!i2175[6]
  i2174.octaveCount = i2175[7]
  i2174.octaveMultiplier = i2175[8]
  i2174.octaveScale = i2175[9]
  i2174.quality = i2175[10]
  i2174.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[11], i2174.scrollSpeed)
  i2174.scrollSpeedMultiplier = i2175[12]
  i2174.remapEnabled = !!i2175[13]
  i2174.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[14], i2174.remapX)
  i2174.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[15], i2174.remapY)
  i2174.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[16], i2174.remapZ)
  i2174.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[17], i2174.positionAmount)
  i2174.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[18], i2174.rotationAmount)
  i2174.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[19], i2174.sizeAmount)
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemInheritVelocity()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.mode = i2177[1]
  i2176.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[2], i2176.curve)
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemForceOverLifetime()
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[1], i2178.x)
  i2178.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[2], i2178.y)
  i2178.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[3], i2178.z)
  i2178.space = i2179[4]
  i2178.randomized = !!i2179[5]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[1], i2180.limit)
  i2180.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[2], i2180.limitX)
  i2180.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[3], i2180.limitY)
  i2180.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[4], i2180.limitZ)
  i2180.dampen = i2181[5]
  i2180.separateAxes = !!i2181[6]
  i2180.space = i2181[7]
  i2180.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[8], i2180.drag)
  i2180.multiplyDragByParticleSize = !!i2181[9]
  i2180.multiplyDragByParticleVelocity = !!i2181[10]
  return i2180
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2182 = root || request.c( 'StarExploreFX' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'tf')
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2185 = data
  i2184.pivot = new pc.Vec2( i2185[0], i2185[1] )
  i2184.anchorMin = new pc.Vec2( i2185[2], i2185[3] )
  i2184.anchorMax = new pc.Vec2( i2185[4], i2185[5] )
  i2184.sizeDelta = new pc.Vec2( i2185[6], i2185[7] )
  i2184.anchoredPosition3D = new pc.Vec3( i2185[8], i2185[9], i2185[10] )
  i2184.rotation = new pc.Quat(i2185[11], i2185[12], i2185[13], i2185[14])
  i2184.scale = new pc.Vec3( i2185[15], i2185[16], i2185[17] )
  return i2184
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2186 = root || request.c( 'ClockTimer' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'fillImage')
  request.r(i2187[2], i2187[3], 0, i2186, 'tf')
  i2186.spawnZoomDuration = i2187[4]
  i2186.despawnZoomDuration = i2187[5]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2189 = data
  i2188.cullTransparentMesh = !!i2189[0]
  return i2188
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.UI.Image' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'm_Sprite')
  i2190.m_Type = i2191[2]
  i2190.m_PreserveAspect = !!i2191[3]
  i2190.m_FillCenter = !!i2191[4]
  i2190.m_FillMethod = i2191[5]
  i2190.m_FillAmount = i2191[6]
  i2190.m_FillClockwise = !!i2191[7]
  i2190.m_FillOrigin = i2191[8]
  i2190.m_UseSpriteMesh = !!i2191[9]
  i2190.m_PixelsPerUnitMultiplier = i2191[10]
  request.r(i2191[11], i2191[12], 0, i2190, 'm_Material')
  i2190.m_Maskable = !!i2191[13]
  i2190.m_Color = new pc.Color(i2191[14], i2191[15], i2191[16], i2191[17])
  i2190.m_RaycastTarget = !!i2191[18]
  i2190.m_RaycastPadding = new pc.Vec4( i2191[19], i2191[20], i2191[21], i2191[22] )
  return i2190
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2192 = root || request.c( 'WaterSplash' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'tf')
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2195 = data
  i2194.center = new pc.Vec3( i2195[0], i2195[1], i2195[2] )
  i2194.radius = i2195[3]
  i2194.enabled = !!i2195[4]
  i2194.isTrigger = !!i2195[5]
  request.r(i2195[6], i2195[7], 0, i2194, 'material')
  return i2194
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2196 = root || request.c( 'ItemDraggable' )
  var i2197 = data
  i2196.isDraggable = !!i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'returnTransform')
  i2196.setParentToReturnTransform = !!i2197[3]
  i2196.returnToStartOnDragFailed = !!i2197[4]
  i2196.returnToExactReturnTransformPosition = !!i2197[5]
  i2196.cacheStartPosWhenStart = !!i2197[6]
  i2196.targetItemType = i2197[7]
  request.r(i2197[8], i2197[9], 0, i2196, 'item')
  i2196.checkState = !!i2197[10]
  request.r(i2197[11], i2197[12], 0, i2196, 'shadowObject')
  i2196.playReturnToStartFinishSound = !!i2197[13]
  i2196.returnToStartFinishFxType = i2197[14]
  i2196.spawnBreakHeartOnDropFail = !!i2197[15]
  i2196.playBeginDragSound = !!i2197[16]
  i2196.beginDragFxType = i2197[17]
  i2196.liftOffset = i2197[18]
  i2196.dragScaleMultiplier = i2197[19]
  i2196.dragScaleDuration = i2197[20]
  i2196.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2197[21], i2196.onBeginDrag)
  i2196.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2197[22], i2196.onDropSuccess)
  i2196.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2197[23], i2196.onDropFail)
  i2196.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2197[24], i2196.onReturnToStartComplete)
  return i2196
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2199 = data
  i2198.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2199[0], i2198.m_PersistentCalls)
  return i2198
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(request.d('UnityEngine.Events.PersistentCall', i2203[i + 0]));
  }
  i2200.m_Calls = i2202
  return i2200
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'm_Target')
  i2206.m_TargetAssemblyTypeName = i2207[2]
  i2206.m_MethodName = i2207[3]
  i2206.m_Mode = i2207[4]
  i2206.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2207[5], i2206.m_Arguments)
  i2206.m_CallState = i2207[6]
  return i2206
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'm_ObjectArgument')
  i2208.m_ObjectArgumentAssemblyTypeName = i2209[2]
  i2208.m_IntArgument = i2209[3]
  i2208.m_FloatArgument = i2209[4]
  i2208.m_StringArgument = i2209[5]
  i2208.m_BoolArgument = !!i2209[6]
  return i2208
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2210 = root || request.c( 'ItemMoveToTarget' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'defaultTarget')
  i2210.duration = i2211[2]
  i2210.useAnimationCurve = !!i2211[3]
  i2210.moveCurve = new pc.AnimationCurve( { keys_flow: i2211[4] } )
  i2210.easeType = i2211[5]
  i2210.moveType = i2211[6]
  i2210.jumpPower = i2211[7]
  i2210.numJumps = i2211[8]
  i2210.rotate360DuringJump = !!i2211[9]
  i2210.flipRotate = !!i2211[10]
  i2210.angleRotate = i2211[11]
  i2210.scaleOnMove = !!i2211[12]
  i2210.endScaleMultiplier = i2211[13]
  i2210.setParentToTarget = !!i2211[14]
  i2210.onComplete = request.d('UnityEngine.Events.UnityEvent', i2211[15], i2210.onComplete)
  i2210.lockInputWhileMoving = !!i2211[16]
  i2210.resetParentBeforeMove = !!i2211[17]
  return i2210
}

Deserializers["Paper"] = function (request, data, root) {
  var i2212 = root || request.c( 'Paper' )
  var i2213 = data
  i2212.isUse = !!i2213[0]
  request.r(i2213[1], i2213[2], 0, i2212, 'paper')
  request.r(i2213[3], i2213[4], 0, i2212, 'paperTrash')
  request.r(i2213[5], i2213[6], 0, i2212, 'itemDragRaycastTarget')
  request.r(i2213[7], i2213[8], 0, i2212, 'curentCollider')
  i2212.isDone = !!i2213[9]
  i2212.onProcess = !!i2213[10]
  i2212.requireMatchingTargetTypeForHandTut = !!i2213[11]
  request.r(i2213[12], i2213[13], 0, i2212, 'itemDraggable')
  request.r(i2213[14], i2213[15], 0, i2212, 'itemClickable')
  request.r(i2213[16], i2213[17], 0, i2212, 'itemStirring')
  request.r(i2213[18], i2213[19], 0, i2212, 'itemKnifeSpriteMaskCutter')
  request.r(i2213[20], i2213[21], 0, i2212, 'itemSpriteMaskPainter')
  request.r(i2213[22], i2213[23], 0, i2212, 'itemDragSpriteMaskPainter')
  request.r(i2213[24], i2213[25], 0, i2212, 'itemMoveToTarget')
  request.r(i2213[26], i2213[27], 0, i2212, 'animator')
  i2212.itemType = i2213[28]
  request.r(i2213[29], i2213[30], 0, i2212, 'spriteRenderer')
  i2212.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2213[31], i2212.onKnifeIn)
  request.r(i2213[32], i2213[33], 0, i2212, 'knifePos')
  i2212.heartEffectScale = i2213[34]
  i2212.breakHeartEffectScale = i2213[35]
  i2212.blinkEffectScale = i2213[36]
  i2212.mergeEffectScale = i2213[37]
  i2212.playMoveToTargetFinishSound = !!i2213[38]
  i2212.moveToTargetFinishFxType = i2213[39]
  i2212.fxSpawnZPos = i2213[40]
  request.r(i2213[41], i2213[42], 0, i2212, 'tf')
  return i2212
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2214 = root || request.c( 'ItemDragRaycastTarget' )
  var i2215 = data
  i2214.targetToFind = i2215[0]
  i2214.targetItemTypeWhenHit = i2215[1]
  i2214.targetItemTypeOnDropFail = i2215[2]
  request.r(i2215[3], i2215[4], 0, i2214, 'raycastPoint')
  i2214.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2215[5] )
  i2214.rayDistance = i2215[6]
  i2214.updateMoveDefaultTarget = !!i2215[7]
  i2214.invokeOnlyWhenTargetChanged = !!i2215[8]
  i2214.targetChangeEnabled = !!i2215[9]
  i2214.restoreTargetOnDropFail = !!i2215[10]
  i2214.resetCurrentTargetOnNoHit = !!i2215[11]
  i2214.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2215[12], i2214.onTargetFound)
  i2214.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2215[13], i2214.onTargetFoundWithItem)
  return i2214
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2216 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2217 = data
  i2216.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2217[0], i2216.m_PersistentCalls)
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'animatorController')
  request.r(i2219[2], i2219[3], 0, i2218, 'avatar')
  i2218.updateMode = i2219[4]
  i2218.hasTransformHierarchy = !!i2219[5]
  i2218.applyRootMotion = !!i2219[6]
  var i2221 = i2219[7]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2218.humanBones = i2220
  i2218.enabled = !!i2219[8]
  return i2218
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2224 = root || request.c( 'ItemSound' )
  var i2225 = data
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.index = i2227[1]
  i2226.startup = !!i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2229 = data
  i2228.planeDistance = i2229[0]
  i2228.referencePixelsPerUnit = i2229[1]
  i2228.isFallbackOverlay = !!i2229[2]
  i2228.renderMode = i2229[3]
  i2228.renderOrder = i2229[4]
  i2228.sortingLayerName = i2229[5]
  i2228.sortingOrder = i2229[6]
  i2228.scaleFactor = i2229[7]
  request.r(i2229[8], i2229[9], 0, i2228, 'worldCamera')
  i2228.overrideSorting = !!i2229[10]
  i2228.pixelPerfect = !!i2229[11]
  i2228.targetDisplay = i2229[12]
  i2228.overridePixelPerfect = !!i2229[13]
  i2228.enabled = !!i2229[14]
  return i2228
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2231 = data
  i2230.m_UiScaleMode = i2231[0]
  i2230.m_ReferencePixelsPerUnit = i2231[1]
  i2230.m_ScaleFactor = i2231[2]
  i2230.m_ReferenceResolution = new pc.Vec2( i2231[3], i2231[4] )
  i2230.m_ScreenMatchMode = i2231[5]
  i2230.m_MatchWidthOrHeight = i2231[6]
  i2230.m_PhysicalUnit = i2231[7]
  i2230.m_FallbackScreenDPI = i2231[8]
  i2230.m_DefaultSpriteDPI = i2231[9]
  i2230.m_DynamicPixelsPerUnit = i2231[10]
  i2230.m_PresetInfoIsWorld = !!i2231[11]
  return i2230
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2233 = data
  i2232.m_IgnoreReversedGraphics = !!i2233[0]
  i2232.m_BlockingObjects = i2233[1]
  i2232.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2233[2] )
  return i2232
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2234 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2235 = data
  i2234.m_hasFontAssetChanged = !!i2235[0]
  request.r(i2235[1], i2235[2], 0, i2234, 'm_baseMaterial')
  i2234.m_maskOffset = new pc.Vec4( i2235[3], i2235[4], i2235[5], i2235[6] )
  i2234.m_text = i2235[7]
  i2234.m_isRightToLeft = !!i2235[8]
  request.r(i2235[9], i2235[10], 0, i2234, 'm_fontAsset')
  request.r(i2235[11], i2235[12], 0, i2234, 'm_sharedMaterial')
  var i2237 = i2235[13]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2234.m_fontSharedMaterials = i2236
  request.r(i2235[14], i2235[15], 0, i2234, 'm_fontMaterial')
  var i2239 = i2235[16]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2234.m_fontMaterials = i2238
  i2234.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2235[17], i2235[18], i2235[19], i2235[20])
  i2234.m_fontColor = new pc.Color(i2235[21], i2235[22], i2235[23], i2235[24])
  i2234.m_enableVertexGradient = !!i2235[25]
  i2234.m_colorMode = i2235[26]
  i2234.m_fontColorGradient = request.d('TMPro.VertexGradient', i2235[27], i2234.m_fontColorGradient)
  request.r(i2235[28], i2235[29], 0, i2234, 'm_fontColorGradientPreset')
  request.r(i2235[30], i2235[31], 0, i2234, 'm_spriteAsset')
  i2234.m_tintAllSprites = !!i2235[32]
  request.r(i2235[33], i2235[34], 0, i2234, 'm_StyleSheet')
  i2234.m_TextStyleHashCode = i2235[35]
  i2234.m_overrideHtmlColors = !!i2235[36]
  i2234.m_faceColor = UnityEngine.Color32.ConstructColor(i2235[37], i2235[38], i2235[39], i2235[40])
  i2234.m_fontSize = i2235[41]
  i2234.m_fontSizeBase = i2235[42]
  i2234.m_fontWeight = i2235[43]
  i2234.m_enableAutoSizing = !!i2235[44]
  i2234.m_fontSizeMin = i2235[45]
  i2234.m_fontSizeMax = i2235[46]
  i2234.m_fontStyle = i2235[47]
  i2234.m_HorizontalAlignment = i2235[48]
  i2234.m_VerticalAlignment = i2235[49]
  i2234.m_textAlignment = i2235[50]
  i2234.m_characterSpacing = i2235[51]
  i2234.m_wordSpacing = i2235[52]
  i2234.m_lineSpacing = i2235[53]
  i2234.m_lineSpacingMax = i2235[54]
  i2234.m_paragraphSpacing = i2235[55]
  i2234.m_charWidthMaxAdj = i2235[56]
  i2234.m_TextWrappingMode = i2235[57]
  i2234.m_wordWrappingRatios = i2235[58]
  i2234.m_overflowMode = i2235[59]
  request.r(i2235[60], i2235[61], 0, i2234, 'm_linkedTextComponent')
  request.r(i2235[62], i2235[63], 0, i2234, 'parentLinkedComponent')
  i2234.m_enableKerning = !!i2235[64]
  var i2241 = i2235[65]
  var i2240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.add(i2241[i + 0]);
  }
  i2234.m_ActiveFontFeatures = i2240
  i2234.m_enableExtraPadding = !!i2235[66]
  i2234.checkPaddingRequired = !!i2235[67]
  i2234.m_isRichText = !!i2235[68]
  i2234.m_parseCtrlCharacters = !!i2235[69]
  i2234.m_isOrthographic = !!i2235[70]
  i2234.m_isCullingEnabled = !!i2235[71]
  i2234.m_horizontalMapping = i2235[72]
  i2234.m_verticalMapping = i2235[73]
  i2234.m_uvLineOffset = i2235[74]
  i2234.m_geometrySortingOrder = i2235[75]
  i2234.m_IsTextObjectScaleStatic = !!i2235[76]
  i2234.m_VertexBufferAutoSizeReduction = !!i2235[77]
  i2234.m_useMaxVisibleDescender = !!i2235[78]
  i2234.m_pageToDisplay = i2235[79]
  i2234.m_margin = new pc.Vec4( i2235[80], i2235[81], i2235[82], i2235[83] )
  i2234.m_isUsingLegacyAnimationComponent = !!i2235[84]
  i2234.m_isVolumetricText = !!i2235[85]
  request.r(i2235[86], i2235[87], 0, i2234, 'm_Material')
  i2234.m_EmojiFallbackSupport = !!i2235[88]
  i2234.m_Maskable = !!i2235[89]
  i2234.m_Color = new pc.Color(i2235[90], i2235[91], i2235[92], i2235[93])
  i2234.m_RaycastTarget = !!i2235[94]
  i2234.m_RaycastPadding = new pc.Vec4( i2235[95], i2235[96], i2235[97], i2235[98] )
  return i2234
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2242 = root || request.c( 'TMPro.VertexGradient' )
  var i2243 = data
  i2242.topLeft = new pc.Color(i2243[0], i2243[1], i2243[2], i2243[3])
  i2242.topRight = new pc.Color(i2243[4], i2243[5], i2243[6], i2243[7])
  i2242.bottomLeft = new pc.Color(i2243[8], i2243[9], i2243[10], i2243[11])
  i2242.bottomRight = new pc.Color(i2243[12], i2243[13], i2243[14], i2243[15])
  return i2242
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.UI.Button' )
  var i2247 = data
  i2246.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2247[0], i2246.m_OnClick)
  i2246.m_Navigation = request.d('UnityEngine.UI.Navigation', i2247[1], i2246.m_Navigation)
  i2246.m_Transition = i2247[2]
  i2246.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2247[3], i2246.m_Colors)
  i2246.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2247[4], i2246.m_SpriteState)
  i2246.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2247[5], i2246.m_AnimationTriggers)
  i2246.m_Interactable = !!i2247[6]
  request.r(i2247[7], i2247[8], 0, i2246, 'm_TargetGraphic')
  return i2246
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2249 = data
  i2248.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2249[0], i2248.m_PersistentCalls)
  return i2248
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2251 = data
  i2250.m_Mode = i2251[0]
  i2250.m_WrapAround = !!i2251[1]
  request.r(i2251[2], i2251[3], 0, i2250, 'm_SelectOnUp')
  request.r(i2251[4], i2251[5], 0, i2250, 'm_SelectOnDown')
  request.r(i2251[6], i2251[7], 0, i2250, 'm_SelectOnLeft')
  request.r(i2251[8], i2251[9], 0, i2250, 'm_SelectOnRight')
  return i2250
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2253 = data
  i2252.m_NormalColor = new pc.Color(i2253[0], i2253[1], i2253[2], i2253[3])
  i2252.m_HighlightedColor = new pc.Color(i2253[4], i2253[5], i2253[6], i2253[7])
  i2252.m_PressedColor = new pc.Color(i2253[8], i2253[9], i2253[10], i2253[11])
  i2252.m_SelectedColor = new pc.Color(i2253[12], i2253[13], i2253[14], i2253[15])
  i2252.m_DisabledColor = new pc.Color(i2253[16], i2253[17], i2253[18], i2253[19])
  i2252.m_ColorMultiplier = i2253[20]
  i2252.m_FadeDuration = i2253[21]
  return i2252
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'm_HighlightedSprite')
  request.r(i2255[2], i2255[3], 0, i2254, 'm_PressedSprite')
  request.r(i2255[4], i2255[5], 0, i2254, 'm_SelectedSprite')
  request.r(i2255[6], i2255[7], 0, i2254, 'm_DisabledSprite')
  return i2254
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2257 = data
  i2256.m_NormalTrigger = i2257[0]
  i2256.m_HighlightedTrigger = i2257[1]
  i2256.m_PressedTrigger = i2257[2]
  i2256.m_SelectedTrigger = i2257[3]
  i2256.m_DisabledTrigger = i2257[4]
  return i2256
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'm_FillRect')
  request.r(i2259[2], i2259[3], 0, i2258, 'm_HandleRect')
  i2258.m_Direction = i2259[4]
  i2258.m_MinValue = i2259[5]
  i2258.m_MaxValue = i2259[6]
  i2258.m_WholeNumbers = !!i2259[7]
  i2258.m_Value = i2259[8]
  i2258.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2259[9], i2258.m_OnValueChanged)
  i2258.m_Navigation = request.d('UnityEngine.UI.Navigation', i2259[10], i2258.m_Navigation)
  i2258.m_Transition = i2259[11]
  i2258.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2259[12], i2258.m_Colors)
  i2258.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2259[13], i2258.m_SpriteState)
  i2258.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2259[14], i2258.m_AnimationTriggers)
  i2258.m_Interactable = !!i2259[15]
  request.r(i2259[16], i2259[17], 0, i2258, 'm_TargetGraphic')
  return i2258
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2261 = data
  i2260.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2261[0], i2260.m_PersistentCalls)
  return i2260
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i2262 = root || request.c( 'ProgressSlider' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'progressSlider')
  i2262.maxProgressItems = i2263[2]
  i2262.startProgressItems = i2263[3]
  request.r(i2263[4], i2263[5], 0, i2262, 'progressText')
  return i2262
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2264 = root || request.c( 'Ply_Pool' )
  var i2265 = data
  var i2267 = i2265[0]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Ply_Pool+PoolAmount', i2267[i + 0]) );
  }
  i2264.poolAmounts = i2266
  request.r(i2265[1], i2265[2], 0, i2264, 'poolHolder')
  return i2264
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2270 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2271 = data
  i2270.type = i2271[0]
  i2270.amount = i2271[1]
  request.r(i2271[2], i2271[3], 0, i2270, 'gameUnit')
  return i2270
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2272 = root || request.c( 'Ply_SoundManager' )
  var i2273 = data
  var i2275 = i2273[0]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Ply_SoundManager+FxAudio', i2275[i + 0]) );
  }
  i2272.fxAudios = i2274
  request.r(i2273[1], i2273[2], 0, i2272, 'sound')
  return i2272
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2278 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2279 = data
  i2278.fxType = i2279[0]
  request.r(i2279[1], i2279[2], 0, i2278, 'audioClip')
  i2278.volume = i2279[3]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'clip')
  request.r(i2281[2], i2281[3], 0, i2280, 'outputAudioMixerGroup')
  i2280.playOnAwake = !!i2281[4]
  i2280.loop = !!i2281[5]
  i2280.time = i2281[6]
  i2280.volume = i2281[7]
  i2280.pitch = i2281[8]
  i2280.enabled = !!i2281[9]
  return i2280
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2282 = root || request.c( 'GameManager' )
  var i2283 = data
  i2282.isPlaying = !!i2283[0]
  i2282.isTutorial = !!i2283[1]
  i2282.isGotoStore = !!i2283[2]
  i2282.isLoseGame = !!i2283[3]
  i2282.countMove = i2283[4]
  i2282.currentLayer = i2283[5]
  request.r(i2283[6], i2283[7], 0, i2282, 'trashCan')
  request.r(i2283[8], i2283[9], 0, i2282, 'clockTimerPrefab')
  request.r(i2283[10], i2283[11], 0, i2282, 'paperBox')
  return i2282
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2284 = root || request.c( 'UIManager' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'winUI')
  request.r(i2285[2], i2285[3], 0, i2284, 'loseUI')
  request.r(i2285[4], i2285[5], 0, i2284, 'tutorial')
  request.r(i2285[6], i2285[7], 0, i2284, 'verticalUI')
  request.r(i2285[8], i2285[9], 0, i2284, 'horizontalUI')
  request.r(i2285[10], i2285[11], 0, i2284, 'downloadBtn')
  request.r(i2285[12], i2285[13], 0, i2284, 'horizontalDownloadBtn')
  request.r(i2285[14], i2285[15], 0, i2284, 'textAnim')
  i2284.isGoogleBuild = !!i2285[16]
  i2284.screenWidth = i2285[17]
  i2284.screenHeight = i2285[18]
  i2284.scaleHeightOnWidth = i2285[19]
  i2284.isVertical = !!i2285[20]
  i2284.isScreenVertical = !!i2285[21]
  request.r(i2285[22], i2285[23], 0, i2284, 'cam')
  i2284.verticalUIHeightOnWidthRatio = i2285[24]
  i2284.scaleCameraOnValidate = !!i2285[25]
  i2284.screenVerticalHeightOnWidthRatio = i2285[26]
  i2284.useContinuousScaling = !!i2285[27]
  i2284.baseOrthographicSize = i2285[28]
  i2284.baseAspect = i2285[29]
  i2284.landscapeSizeRatio = i2285[30]
  i2284.defaultPortraitSizeRatio = i2285[31]
  var i2287 = i2285[32]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.add(request.d('ScreenScaleStep', i2287[i + 0]));
  }
  i2284.discreteScaleSteps = i2286
  i2284.usePerspectiveCamera = !!i2285[33]
  request.r(i2285[34], i2285[35], 0, i2284, 'perspectiveFocus')
  i2284.perspectiveFocusDistance = i2285[36]
  i2284.perspectivePadding = i2285[37]
  i2284.fitRendererBounds = !!i2285[38]
  request.r(i2285[39], i2285[40], 0, i2284, 'boundsRoot')
  var i2289 = i2285[41]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 1, i2288, '')
  }
  i2284.boundsRenderers = i2288
  return i2284
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2292 = root || request.c( 'ScreenScaleStep' )
  var i2293 = data
  i2292.heightOnWidthRatio = i2293[0]
  i2292.orthographicSize = i2293[1]
  return i2292
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2296 = root || request.c( 'InputManager' )
  var i2297 = data
  i2296.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2297[0] )
  i2296.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2297[1] )
  i2296.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2297[2] )
  i2296.isDragging = !!i2297[3]
  return i2296
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2298 = root || request.c( 'HandTutManager' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 1, i2300, '')
  }
  i2298.items = i2300
  request.r(i2299[1], i2299[2], 0, i2298, 'knife')
  request.r(i2299[3], i2299[4], 0, i2298, 'knife2')
  request.r(i2299[5], i2299[6], 0, i2298, 'handTutObject')
  request.r(i2299[7], i2299[8], 0, i2298, 'tapToCookObject')
  request.r(i2299[9], i2299[10], 0, i2298, 'oilItem')
  request.r(i2299[11], i2299[12], 0, i2298, 'stoveToggleEvent')
  request.r(i2299[13], i2299[14], 0, i2298, 'waterToggleEvent')
  request.r(i2299[15], i2299[16], 0, i2298, 'sinkBlock')
  var i2303 = i2299[17]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2298.itemsInWater = i2302
  i2298.noDelayItemCount = i2299[18]
  i2298.noDelayInList = !!i2299[19]
  i2298.breakHeartNoDelayThreshold = i2299[20]
  i2298.shortIdleDelay = i2299[21]
  i2298.maxHandTutShowCount = i2299[22]
  i2298.showSinkWaterTutorialOnStart = !!i2299[23]
  i2298.waitForBowlIntro = !!i2299[24]
  i2298.idleDelay = i2299[25]
  i2298.firstHandTutDelay = i2299[26]
  i2298.phaseHandTutDelay = i2299[27]
  i2298.moveDuration = i2299[28]
  i2298.dragFadeDuration = i2299[29]
  i2298.clickScaleDuration = i2299[30]
  i2298.waitAtEndDuration = i2299[31]
  i2298.handZPosition = i2299[32]
  i2298.clickScaleMultiplier = i2299[33]
  i2298.moveEase = i2299[34]
  i2298.currentDelayHandtut = i2299[35]
  i2298.isBreakingHeartNoDelay = !!i2299[36]
  i2298.tutoredItemCount = i2299[37]
  return i2298
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2308 = root || request.c( 'PhaseManager' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('PhaseData', i2311[i + 0]));
  }
  i2308.phases = i2310
  i2308.transitionType = i2309[1]
  i2308.transitionDuration = i2309[2]
  i2308.delayBeforeNextPhase = i2309[3]
  i2308.offScreenLeftX = i2309[4]
  i2308.offScreenRightX = i2309[5]
  i2308.offScreenBottomY = i2309[6]
  i2308.offScreenTopY = i2309[7]
  i2308.centerScreenX = i2309[8]
  request.r(i2309[9], i2309[10], 0, i2308, 'phaseTransitionObject')
  i2308.phaseTransitionObjectDuration = i2309[11]
  i2308.currentPhaseIndex = i2309[12]
  i2308.currentStepCount = i2309[13]
  i2308.isECPopup = !!i2309[14]
  return i2308
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2314 = root || request.c( 'PhaseData' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'phaseObject')
  i2314.totalSteps = i2315[2]
  i2314.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2315[3], i2314.onPhaseReady)
  return i2314
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2316 = root || request.c( 'ItemTypeDoneManager' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2319[i + 0]));
  }
  i2316.itemTypeGroups = i2318
  return i2316
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2322 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2323 = data
  i2322.itemType = i2323[0]
  var i2325 = i2323[1]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 1, i2324, '')
  }
  i2322.items = i2324
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2327 = data
  i2326.aspect = i2327[0]
  i2326.orthographic = !!i2327[1]
  i2326.orthographicSize = i2327[2]
  i2326.backgroundColor = new pc.Color(i2327[3], i2327[4], i2327[5], i2327[6])
  i2326.nearClipPlane = i2327[7]
  i2326.farClipPlane = i2327[8]
  i2326.fieldOfView = i2327[9]
  i2326.depth = i2327[10]
  i2326.clearFlags = i2327[11]
  i2326.cullingMask = i2327[12]
  i2326.rect = i2327[13]
  request.r(i2327[14], i2327[15], 0, i2326, 'targetTexture')
  i2326.usePhysicalProperties = !!i2327[16]
  i2326.focalLength = i2327[17]
  i2326.sensorSize = new pc.Vec2( i2327[18], i2327[19] )
  i2326.lensShift = new pc.Vec2( i2327[20], i2327[21] )
  i2326.gateFit = i2327[22]
  i2326.commandBufferCount = i2327[23]
  i2326.cameraType = i2327[24]
  i2326.enabled = !!i2327[25]
  return i2326
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_FirstSelected')
  i2328.m_sendNavigationEvents = !!i2329[2]
  i2328.m_DragThreshold = i2329[3]
  return i2328
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2331 = data
  i2330.m_HorizontalAxis = i2331[0]
  i2330.m_VerticalAxis = i2331[1]
  i2330.m_SubmitButton = i2331[2]
  i2330.m_CancelButton = i2331[3]
  i2330.m_InputActionsPerSecond = i2331[4]
  i2330.m_RepeatDelay = i2331[5]
  i2330.m_ForceModuleActive = !!i2331[6]
  i2330.m_SendPointerHoverToParent = !!i2331[7]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2333 = data
  i2332.center = new pc.Vec3( i2333[0], i2333[1], i2333[2] )
  i2332.radius = i2333[3]
  i2332.height = i2333[4]
  i2332.direction = i2333[5]
  i2332.enabled = !!i2333[6]
  i2332.isTrigger = !!i2333[7]
  request.r(i2333[8], i2333[9], 0, i2332, 'material')
  return i2332
}

Deserializers["Item"] = function (request, data, root) {
  var i2334 = root || request.c( 'Item' )
  var i2335 = data
  i2334.isDone = !!i2335[0]
  i2334.onProcess = !!i2335[1]
  i2334.requireMatchingTargetTypeForHandTut = !!i2335[2]
  request.r(i2335[3], i2335[4], 0, i2334, 'itemDraggable')
  request.r(i2335[5], i2335[6], 0, i2334, 'itemClickable')
  request.r(i2335[7], i2335[8], 0, i2334, 'itemStirring')
  request.r(i2335[9], i2335[10], 0, i2334, 'itemKnifeSpriteMaskCutter')
  request.r(i2335[11], i2335[12], 0, i2334, 'itemSpriteMaskPainter')
  request.r(i2335[13], i2335[14], 0, i2334, 'itemDragSpriteMaskPainter')
  request.r(i2335[15], i2335[16], 0, i2334, 'itemMoveToTarget')
  request.r(i2335[17], i2335[18], 0, i2334, 'animator')
  i2334.itemType = i2335[19]
  request.r(i2335[20], i2335[21], 0, i2334, 'spriteRenderer')
  i2334.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2335[22], i2334.onKnifeIn)
  request.r(i2335[23], i2335[24], 0, i2334, 'knifePos')
  i2334.heartEffectScale = i2335[25]
  i2334.breakHeartEffectScale = i2335[26]
  i2334.blinkEffectScale = i2335[27]
  i2334.mergeEffectScale = i2335[28]
  i2334.playMoveToTargetFinishSound = !!i2335[29]
  i2334.moveToTargetFinishFxType = i2335[30]
  i2334.fxSpawnZPos = i2335[31]
  request.r(i2335[32], i2335[33], 0, i2334, 'tf')
  return i2334
}

Deserializers["ItemToTarget"] = function (request, data, root) {
  var i2336 = root || request.c( 'ItemToTarget' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'targetPosition')
  request.r(i2337[2], i2337[3], 0, i2336, 'targetItem')
  i2336.targetItemAnimationName = i2337[4]
  i2336.turnOnAnimWhenArrive = !!i2337[5]
  i2336.animWhenArriveName = i2337[6]
  i2336.disableItemWhenDrop = !!i2337[7]
  i2336.itemDoneWhenArrive = !!i2337[8]
  request.r(i2337[9], i2337[10], 0, i2336, 'waittingPoint')
  request.r(i2337[11], i2337[12], 0, i2336, 'targetPoint')
  request.r(i2337[13], i2337[14], 0, i2336, 'transformConveyor')
  i2336.isDone = !!i2337[15]
  i2336.onProcess = !!i2337[16]
  i2336.requireMatchingTargetTypeForHandTut = !!i2337[17]
  request.r(i2337[18], i2337[19], 0, i2336, 'itemDraggable')
  request.r(i2337[20], i2337[21], 0, i2336, 'itemClickable')
  request.r(i2337[22], i2337[23], 0, i2336, 'itemStirring')
  request.r(i2337[24], i2337[25], 0, i2336, 'itemKnifeSpriteMaskCutter')
  request.r(i2337[26], i2337[27], 0, i2336, 'itemSpriteMaskPainter')
  request.r(i2337[28], i2337[29], 0, i2336, 'itemDragSpriteMaskPainter')
  request.r(i2337[30], i2337[31], 0, i2336, 'itemMoveToTarget')
  request.r(i2337[32], i2337[33], 0, i2336, 'animator')
  i2336.itemType = i2337[34]
  request.r(i2337[35], i2337[36], 0, i2336, 'spriteRenderer')
  i2336.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2337[37], i2336.onKnifeIn)
  request.r(i2337[38], i2337[39], 0, i2336, 'knifePos')
  i2336.heartEffectScale = i2337[40]
  i2336.breakHeartEffectScale = i2337[41]
  i2336.blinkEffectScale = i2337[42]
  i2336.mergeEffectScale = i2337[43]
  i2336.playMoveToTargetFinishSound = !!i2337[44]
  i2336.moveToTargetFinishFxType = i2337[45]
  i2336.fxSpawnZPos = i2337[46]
  request.r(i2337[47], i2337[48], 0, i2336, 'tf')
  return i2336
}

Deserializers["RongBien"] = function (request, data, root) {
  var i2338 = root || request.c( 'RongBien' )
  var i2339 = data
  i2338.foodCount = i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'sushiDone')
  i2338.isDone = !!i2339[3]
  i2338.onProcess = !!i2339[4]
  i2338.requireMatchingTargetTypeForHandTut = !!i2339[5]
  request.r(i2339[6], i2339[7], 0, i2338, 'itemDraggable')
  request.r(i2339[8], i2339[9], 0, i2338, 'itemClickable')
  request.r(i2339[10], i2339[11], 0, i2338, 'itemStirring')
  request.r(i2339[12], i2339[13], 0, i2338, 'itemKnifeSpriteMaskCutter')
  request.r(i2339[14], i2339[15], 0, i2338, 'itemSpriteMaskPainter')
  request.r(i2339[16], i2339[17], 0, i2338, 'itemDragSpriteMaskPainter')
  request.r(i2339[18], i2339[19], 0, i2338, 'itemMoveToTarget')
  request.r(i2339[20], i2339[21], 0, i2338, 'animator')
  i2338.itemType = i2339[22]
  request.r(i2339[23], i2339[24], 0, i2338, 'spriteRenderer')
  i2338.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2339[25], i2338.onKnifeIn)
  request.r(i2339[26], i2339[27], 0, i2338, 'knifePos')
  i2338.heartEffectScale = i2339[28]
  i2338.breakHeartEffectScale = i2339[29]
  i2338.blinkEffectScale = i2339[30]
  i2338.mergeEffectScale = i2339[31]
  i2338.playMoveToTargetFinishSound = !!i2339[32]
  i2338.moveToTargetFinishFxType = i2339[33]
  i2338.fxSpawnZPos = i2339[34]
  request.r(i2339[35], i2339[36], 0, i2338, 'tf')
  return i2338
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2340 = root || request.c( 'ItemClickable' )
  var i2341 = data
  i2340.requiredClicks = i2341[0]
  i2340.infiniteClick = !!i2341[1]
  i2340.canClick = !!i2341[2]
  i2340.disableAfterClick = !!i2341[3]
  i2340.onClick = request.d('UnityEngine.Events.UnityEvent', i2341[4], i2340.onClick)
  var i2343 = i2341[5]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(request.d('UnityEngine.Events.UnityEvent', i2343[i + 0]));
  }
  i2340.sequentialOnClicks = i2342
  i2340.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2341[6], i2340.onClickComplete)
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2347 = data
  i2346.frontSortingLayerID = i2347[0]
  i2346.frontSortingOrder = i2347[1]
  i2346.backSortingLayerID = i2347[2]
  i2346.backSortingOrder = i2347[3]
  i2346.alphaCutoff = i2347[4]
  request.r(i2347[5], i2347[6], 0, i2346, 'sprite')
  i2346.tileMode = i2347[7]
  i2346.isCustomRangeActive = !!i2347[8]
  i2346.spriteSortPoint = i2347[9]
  i2346.enabled = !!i2347[10]
  request.r(i2347[11], i2347[12], 0, i2346, 'sharedMaterial')
  var i2349 = i2347[13]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 2, i2348, '')
  }
  i2346.sharedMaterials = i2348
  i2346.receiveShadows = !!i2347[14]
  i2346.shadowCastingMode = i2347[15]
  i2346.sortingLayerID = i2347[16]
  i2346.sortingOrder = i2347[17]
  i2346.lightmapIndex = i2347[18]
  i2346.lightmapSceneIndex = i2347[19]
  i2346.lightmapScaleOffset = new pc.Vec4( i2347[20], i2347[21], i2347[22], i2347[23] )
  i2346.lightProbeUsage = i2347[24]
  i2346.reflectionProbeUsage = i2347[25]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2351 = data
  i2350.ambientIntensity = i2351[0]
  i2350.reflectionIntensity = i2351[1]
  i2350.ambientMode = i2351[2]
  i2350.ambientLight = new pc.Color(i2351[3], i2351[4], i2351[5], i2351[6])
  i2350.ambientSkyColor = new pc.Color(i2351[7], i2351[8], i2351[9], i2351[10])
  i2350.ambientGroundColor = new pc.Color(i2351[11], i2351[12], i2351[13], i2351[14])
  i2350.ambientEquatorColor = new pc.Color(i2351[15], i2351[16], i2351[17], i2351[18])
  i2350.fogColor = new pc.Color(i2351[19], i2351[20], i2351[21], i2351[22])
  i2350.fogEndDistance = i2351[23]
  i2350.fogStartDistance = i2351[24]
  i2350.fogDensity = i2351[25]
  i2350.fog = !!i2351[26]
  request.r(i2351[27], i2351[28], 0, i2350, 'skybox')
  i2350.fogMode = i2351[29]
  var i2353 = i2351[30]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2353[i + 0]) );
  }
  i2350.lightmaps = i2352
  i2350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2351[31], i2350.lightProbes)
  i2350.lightmapsMode = i2351[32]
  i2350.mixedBakeMode = i2351[33]
  i2350.environmentLightingMode = i2351[34]
  i2350.ambientProbe = new pc.SphericalHarmonicsL2(i2351[35])
  i2350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2351[36])
  i2350.useReferenceAmbientProbe = !!i2351[37]
  request.r(i2351[38], i2351[39], 0, i2350, 'customReflection')
  request.r(i2351[40], i2351[41], 0, i2350, 'defaultReflection')
  i2350.defaultReflectionMode = i2351[42]
  i2350.defaultReflectionResolution = i2351[43]
  i2350.sunLightObjectId = i2351[44]
  i2350.pixelLightCount = i2351[45]
  i2350.defaultReflectionHDR = !!i2351[46]
  i2350.hasLightDataAsset = !!i2351[47]
  i2350.hasManualGenerate = !!i2351[48]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'lightmapColor')
  request.r(i2357[2], i2357[3], 0, i2356, 'lightmapDirection')
  request.r(i2357[4], i2357[5], 0, i2356, 'shadowMask')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2358 = root || new UnityEngine.LightProbes()
  var i2359 = data
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2367 = data
  var i2369 = i2367[0]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2369[i + 0]));
  }
  i2366.ShaderCompilationErrors = i2368
  i2366.name = i2367[1]
  i2366.guid = i2367[2]
  var i2371 = i2367[3]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( i2371[i + 0] );
  }
  i2366.shaderDefinedKeywords = i2370
  var i2373 = i2367[4]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2373[i + 0]) );
  }
  i2366.passes = i2372
  var i2375 = i2367[5]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2375[i + 0]) );
  }
  i2366.usePasses = i2374
  var i2377 = i2367[6]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2377[i + 0]) );
  }
  i2366.defaultParameterValues = i2376
  request.r(i2367[7], i2367[8], 0, i2366, 'unityFallbackShader')
  i2366.readDepth = !!i2367[9]
  i2366.hasDepthOnlyPass = !!i2367[10]
  i2366.isCreatedByShaderGraph = !!i2367[11]
  i2366.disableBatching = !!i2367[12]
  i2366.compiled = !!i2367[13]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2381 = data
  i2380.shaderName = i2381[0]
  i2380.errorMessage = i2381[1]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2386 = root || new pc.UnityShaderPass()
  var i2387 = data
  i2386.id = i2387[0]
  i2386.subShaderIndex = i2387[1]
  i2386.name = i2387[2]
  i2386.passType = i2387[3]
  i2386.grabPassTextureName = i2387[4]
  i2386.usePass = !!i2387[5]
  i2386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[6], i2386.zTest)
  i2386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[7], i2386.zWrite)
  i2386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[8], i2386.culling)
  i2386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2387[9], i2386.blending)
  i2386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2387[10], i2386.alphaBlending)
  i2386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[11], i2386.colorWriteMask)
  i2386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[12], i2386.offsetUnits)
  i2386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[13], i2386.offsetFactor)
  i2386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[14], i2386.stencilRef)
  i2386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[15], i2386.stencilReadMask)
  i2386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[16], i2386.stencilWriteMask)
  i2386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2387[17], i2386.stencilOp)
  i2386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2387[18], i2386.stencilOpFront)
  i2386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2387[19], i2386.stencilOpBack)
  var i2389 = i2387[20]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2389[i + 0]) );
  }
  i2386.tags = i2388
  var i2391 = i2387[21]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( i2391[i + 0] );
  }
  i2386.passDefinedKeywords = i2390
  var i2393 = i2387[22]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2393[i + 0]) );
  }
  i2386.passDefinedKeywordGroups = i2392
  var i2395 = i2387[23]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2395[i + 0]) );
  }
  i2386.variants = i2394
  var i2397 = i2387[24]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2397[i + 0]) );
  }
  i2386.excludedVariants = i2396
  i2386.hasDepthReader = !!i2387[25]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2399 = data
  i2398.val = i2399[0]
  i2398.name = i2399[1]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2401 = data
  i2400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2401[0], i2400.src)
  i2400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2401[1], i2400.dst)
  i2400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2401[2], i2400.op)
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2403 = data
  i2402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2403[0], i2402.pass)
  i2402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2403[1], i2402.fail)
  i2402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2403[2], i2402.zFail)
  i2402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2403[3], i2402.comp)
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.value = i2407[1]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( i2413[i + 0] );
  }
  i2410.keywords = i2412
  i2410.hasDiscard = !!i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2417 = data
  i2416.passId = i2417[0]
  i2416.subShaderIndex = i2417[1]
  var i2419 = i2417[2]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( i2419[i + 0] );
  }
  i2416.keywords = i2418
  i2416.vertexProgram = i2417[3]
  i2416.fragmentProgram = i2417[4]
  i2416.exportedForWebGl2 = !!i2417[5]
  i2416.readDepth = !!i2417[6]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'shader')
  i2422.pass = i2423[2]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.type = i2427[1]
  i2426.value = new pc.Vec4( i2427[2], i2427[3], i2427[4], i2427[5] )
  i2426.textureValue = i2427[6]
  i2426.shaderPropertyFlag = i2427[7]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2429 = data
  i2428.name = i2429[0]
  request.r(i2429[1], i2429[2], 0, i2428, 'texture')
  i2428.aabb = i2429[3]
  i2428.vertices = i2429[4]
  i2428.triangles = i2429[5]
  i2428.textureRect = UnityEngine.Rect.MinMaxRect(i2429[6], i2429[7], i2429[8], i2429[9])
  i2428.packedRect = UnityEngine.Rect.MinMaxRect(i2429[10], i2429[11], i2429[12], i2429[13])
  i2428.border = new pc.Vec4( i2429[14], i2429[15], i2429[16], i2429[17] )
  i2428.transparency = i2429[18]
  i2428.bounds = i2429[19]
  i2428.pixelsPerUnit = i2429[20]
  i2428.textureWidth = i2429[21]
  i2428.textureHeight = i2429[22]
  i2428.nativeSize = new pc.Vec2( i2429[23], i2429[24] )
  i2428.pivot = new pc.Vec2( i2429[25], i2429[26] )
  i2428.textureRectOffset = new pc.Vec2( i2429[27], i2429[28] )
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2431 = data
  i2430.name = i2431[0]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2433 = data
  i2432.name = i2433[0]
  i2432.wrapMode = i2433[1]
  i2432.isLooping = !!i2433[2]
  i2432.length = i2433[3]
  var i2435 = i2433[4]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2435[i + 0]) );
  }
  i2432.curves = i2434
  var i2437 = i2433[5]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2437[i + 0]) );
  }
  i2432.events = i2436
  i2432.halfPrecision = !!i2433[6]
  i2432._frameRate = i2433[7]
  i2432.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2433[8], i2432.localBounds)
  i2432.hasMuscleCurves = !!i2433[9]
  var i2439 = i2433[10]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2432.clipMuscleConstant = i2438
  i2432.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2433[11], i2432.clipBindingConstant)
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2443 = data
  i2442.path = i2443[0]
  i2442.hash = i2443[1]
  i2442.componentType = i2443[2]
  i2442.property = i2443[3]
  i2442.keys = i2443[4]
  var i2445 = i2443[5]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2445[i + 0]) );
  }
  i2442.objectReferenceKeys = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2449 = data
  i2448.time = i2449[0]
  request.r(i2449[1], i2449[2], 0, i2448, 'value')
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2453 = data
  i2452.functionName = i2453[0]
  i2452.floatParameter = i2453[1]
  i2452.intParameter = i2453[2]
  i2452.stringParameter = i2453[3]
  request.r(i2453[4], i2453[5], 0, i2452, 'objectReferenceParameter')
  i2452.time = i2453[6]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2455 = data
  i2454.center = new pc.Vec3( i2455[0], i2455[1], i2455[2] )
  i2454.extends = new pc.Vec3( i2455[3], i2455[4], i2455[5] )
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2459 = data
  var i2461 = i2459[0]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2458.genericBindings = i2460
  var i2463 = i2459[1]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2458.pptrCurveMapping = i2462
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2465 = data
  i2464.name = i2465[0]
  var i2467 = i2465[1]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2467[i + 0]) );
  }
  i2464.layers = i2466
  var i2469 = i2465[2]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2469[i + 0]) );
  }
  i2464.parameters = i2468
  i2464.animationClips = i2465[3]
  i2464.avatarUnsupported = i2465[4]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.defaultWeight = i2473[1]
  i2472.blendingMode = i2473[2]
  i2472.avatarMask = i2473[3]
  i2472.syncedLayerIndex = i2473[4]
  i2472.syncedLayerAffectsTiming = !!i2473[5]
  i2472.syncedLayers = i2473[6]
  i2472.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2473[7], i2472.stateMachine)
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2475 = data
  i2474.id = i2475[0]
  i2474.name = i2475[1]
  i2474.path = i2475[2]
  var i2477 = i2475[3]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2477[i + 0]) );
  }
  i2474.states = i2476
  var i2479 = i2475[4]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2479[i + 0]) );
  }
  i2474.machines = i2478
  var i2481 = i2475[5]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2481[i + 0]) );
  }
  i2474.entryStateTransitions = i2480
  var i2483 = i2475[6]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2483[i + 0]) );
  }
  i2474.exitStateTransitions = i2482
  var i2485 = i2475[7]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2485[i + 0]) );
  }
  i2474.anyStateTransitions = i2484
  i2474.defaultStateId = i2475[8]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2489 = data
  i2488.id = i2489[0]
  i2488.name = i2489[1]
  i2488.cycleOffset = i2489[2]
  i2488.cycleOffsetParameter = i2489[3]
  i2488.cycleOffsetParameterActive = !!i2489[4]
  i2488.mirror = !!i2489[5]
  i2488.mirrorParameter = i2489[6]
  i2488.mirrorParameterActive = !!i2489[7]
  i2488.motionId = i2489[8]
  i2488.nameHash = i2489[9]
  i2488.fullPathHash = i2489[10]
  i2488.speed = i2489[11]
  i2488.speedParameter = i2489[12]
  i2488.speedParameterActive = !!i2489[13]
  i2488.tag = i2489[14]
  i2488.tagHash = i2489[15]
  i2488.writeDefaultValues = !!i2489[16]
  var i2491 = i2489[17]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 2, i2490, '')
  }
  i2488.behaviours = i2490
  var i2493 = i2489[18]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2493[i + 0]) );
  }
  i2488.transitions = i2492
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2499 = data
  i2498.fullPath = i2499[0]
  i2498.canTransitionToSelf = !!i2499[1]
  i2498.duration = i2499[2]
  i2498.exitTime = i2499[3]
  i2498.hasExitTime = !!i2499[4]
  i2498.hasFixedDuration = !!i2499[5]
  i2498.interruptionSource = i2499[6]
  i2498.offset = i2499[7]
  i2498.orderedInterruption = !!i2499[8]
  i2498.destinationStateId = i2499[9]
  i2498.isExit = !!i2499[10]
  i2498.mute = !!i2499[11]
  i2498.solo = !!i2499[12]
  var i2501 = i2499[13]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2501[i + 0]) );
  }
  i2498.conditions = i2500
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2507 = data
  i2506.destinationStateId = i2507[0]
  i2506.isExit = !!i2507[1]
  i2506.mute = !!i2507[2]
  i2506.solo = !!i2507[3]
  var i2509 = i2507[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2509[i + 0]) );
  }
  i2506.conditions = i2508
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2513 = data
  i2512.defaultBool = !!i2513[0]
  i2512.defaultFloat = i2513[1]
  i2512.defaultInt = i2513[2]
  i2512.name = i2513[3]
  i2512.nameHash = i2513[4]
  i2512.type = i2513[5]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2517 = data
  i2516.mode = i2517[0]
  i2516.parameter = i2517[1]
  i2516.threshold = i2517[2]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2519 = data
  i2518.name = i2519[0]
  i2518.bytes64 = i2519[1]
  i2518.data = i2519[2]
  return i2518
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2521 = data
  i2520.normalStyle = i2521[0]
  i2520.normalSpacingOffset = i2521[1]
  i2520.boldStyle = i2521[2]
  i2520.boldSpacing = i2521[3]
  i2520.italicStyle = i2521[4]
  i2520.tabSize = i2521[5]
  request.r(i2521[6], i2521[7], 0, i2520, 'atlas')
  i2520.m_SourceFontFileGUID = i2521[8]
  i2520.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2521[9], i2520.m_CreationSettings)
  request.r(i2521[10], i2521[11], 0, i2520, 'm_SourceFontFile')
  i2520.m_SourceFontFilePath = i2521[12]
  i2520.m_AtlasPopulationMode = i2521[13]
  i2520.InternalDynamicOS = !!i2521[14]
  var i2523 = i2521[15]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('UnityEngine.TextCore.Glyph', i2523[i + 0]));
  }
  i2520.m_GlyphTable = i2522
  var i2525 = i2521[16]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('TMPro.TMP_Character', i2525[i + 0]));
  }
  i2520.m_CharacterTable = i2524
  var i2527 = i2521[17]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2520.m_AtlasTextures = i2526
  i2520.m_AtlasTextureIndex = i2521[18]
  i2520.m_IsMultiAtlasTexturesEnabled = !!i2521[19]
  i2520.m_GetFontFeatures = !!i2521[20]
  i2520.m_ClearDynamicDataOnBuild = !!i2521[21]
  i2520.m_AtlasWidth = i2521[22]
  i2520.m_AtlasHeight = i2521[23]
  i2520.m_AtlasPadding = i2521[24]
  i2520.m_AtlasRenderMode = i2521[25]
  var i2529 = i2521[26]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(request.d('UnityEngine.TextCore.GlyphRect', i2529[i + 0]));
  }
  i2520.m_UsedGlyphRects = i2528
  var i2531 = i2521[27]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.add(request.d('UnityEngine.TextCore.GlyphRect', i2531[i + 0]));
  }
  i2520.m_FreeGlyphRects = i2530
  i2520.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2521[28], i2520.m_FontFeatureTable)
  i2520.m_ShouldReimportFontFeatures = !!i2521[29]
  var i2533 = i2521[30]
  var i2532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 1, i2532, '')
  }
  i2520.m_FallbackFontAssetTable = i2532
  var i2535 = i2521[31]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('TMPro.TMP_FontWeightPair', i2535[i + 0]) );
  }
  i2520.m_FontWeightTable = i2534
  var i2537 = i2521[32]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('TMPro.TMP_FontWeightPair', i2537[i + 0]) );
  }
  i2520.fontWeights = i2536
  i2520.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2521[33], i2520.m_fontInfo)
  var i2539 = i2521[34]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.add(request.d('TMPro.TMP_Glyph', i2539[i + 0]));
  }
  i2520.m_glyphInfoList = i2538
  i2520.m_KerningTable = request.d('TMPro.KerningTable', i2521[35], i2520.m_KerningTable)
  var i2541 = i2521[36]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 1, i2540, '')
  }
  i2520.fallbackFontAssets = i2540
  i2520.m_Version = i2521[37]
  i2520.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2521[38], i2520.m_FaceInfo)
  request.r(i2521[39], i2521[40], 0, i2520, 'm_Material')
  return i2520
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2543 = data
  i2542.sourceFontFileName = i2543[0]
  i2542.sourceFontFileGUID = i2543[1]
  i2542.faceIndex = i2543[2]
  i2542.pointSizeSamplingMode = i2543[3]
  i2542.pointSize = i2543[4]
  i2542.padding = i2543[5]
  i2542.paddingMode = i2543[6]
  i2542.packingMode = i2543[7]
  i2542.atlasWidth = i2543[8]
  i2542.atlasHeight = i2543[9]
  i2542.characterSetSelectionMode = i2543[10]
  i2542.characterSequence = i2543[11]
  i2542.referencedFontAssetGUID = i2543[12]
  i2542.referencedTextAssetGUID = i2543[13]
  i2542.fontStyle = i2543[14]
  i2542.fontStyleModifier = i2543[15]
  i2542.renderMode = i2543[16]
  i2542.includeFontFeatures = !!i2543[17]
  return i2542
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2547 = data
  i2546.m_Index = i2547[0]
  i2546.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2547[1], i2546.m_Metrics)
  i2546.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2547[2], i2546.m_GlyphRect)
  i2546.m_Scale = i2547[3]
  i2546.m_AtlasIndex = i2547[4]
  i2546.m_ClassDefinitionType = i2547[5]
  return i2546
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2548 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2549 = data
  i2548.m_Width = i2549[0]
  i2548.m_Height = i2549[1]
  i2548.m_HorizontalBearingX = i2549[2]
  i2548.m_HorizontalBearingY = i2549[3]
  i2548.m_HorizontalAdvance = i2549[4]
  return i2548
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2551 = data
  i2550.m_X = i2551[0]
  i2550.m_Y = i2551[1]
  i2550.m_Width = i2551[2]
  i2550.m_Height = i2551[3]
  return i2550
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2554 = root || request.c( 'TMPro.TMP_Character' )
  var i2555 = data
  i2554.m_ElementType = i2555[0]
  i2554.m_Unicode = i2555[1]
  i2554.m_GlyphIndex = i2555[2]
  i2554.m_Scale = i2555[3]
  return i2554
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2560 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.add(request.d('TMPro.MultipleSubstitutionRecord', i2563[i + 0]));
  }
  i2560.m_MultipleSubstitutionRecords = i2562
  var i2565 = i2561[1]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('TMPro.LigatureSubstitutionRecord', i2565[i + 0]));
  }
  i2560.m_LigatureSubstitutionRecords = i2564
  var i2567 = i2561[2]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2567[i + 0]));
  }
  i2560.m_GlyphPairAdjustmentRecords = i2566
  var i2569 = i2561[3]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2569[i + 0]));
  }
  i2560.m_MarkToBaseAdjustmentRecords = i2568
  var i2571 = i2561[4]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2571[i + 0]));
  }
  i2560.m_MarkToMarkAdjustmentRecords = i2570
  return i2560
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2575 = data
  i2574.m_TargetGlyphID = i2575[0]
  i2574.m_SubstituteGlyphIDs = i2575[1]
  return i2574
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2579 = data
  i2578.m_ComponentGlyphIDs = i2579[0]
  i2578.m_LigatureGlyphID = i2579[1]
  return i2578
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2583 = data
  i2582.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2583[0], i2582.m_FirstAdjustmentRecord)
  i2582.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2583[1], i2582.m_SecondAdjustmentRecord)
  i2582.m_FeatureLookupFlags = i2583[2]
  return i2582
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2587 = data
  i2586.m_BaseGlyphID = i2587[0]
  i2586.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2587[1], i2586.m_BaseGlyphAnchorPoint)
  i2586.m_MarkGlyphID = i2587[2]
  i2586.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2587[3], i2586.m_MarkPositionAdjustment)
  return i2586
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2591 = data
  i2590.m_BaseMarkGlyphID = i2591[0]
  i2590.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2591[1], i2590.m_BaseMarkGlyphAnchorPoint)
  i2590.m_CombiningMarkGlyphID = i2591[2]
  i2590.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2591[3], i2590.m_CombiningMarkPositionAdjustment)
  return i2590
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'regularTypeface')
  request.r(i2597[2], i2597[3], 0, i2596, 'italicTypeface')
  return i2596
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2598 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2599 = data
  i2598.Name = i2599[0]
  i2598.PointSize = i2599[1]
  i2598.Scale = i2599[2]
  i2598.CharacterCount = i2599[3]
  i2598.LineHeight = i2599[4]
  i2598.Baseline = i2599[5]
  i2598.Ascender = i2599[6]
  i2598.CapHeight = i2599[7]
  i2598.Descender = i2599[8]
  i2598.CenterLine = i2599[9]
  i2598.SuperscriptOffset = i2599[10]
  i2598.SubscriptOffset = i2599[11]
  i2598.SubSize = i2599[12]
  i2598.Underline = i2599[13]
  i2598.UnderlineThickness = i2599[14]
  i2598.strikethrough = i2599[15]
  i2598.strikethroughThickness = i2599[16]
  i2598.TabWidth = i2599[17]
  i2598.Padding = i2599[18]
  i2598.AtlasWidth = i2599[19]
  i2598.AtlasHeight = i2599[20]
  return i2598
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2603 = data
  i2602.id = i2603[0]
  i2602.x = i2603[1]
  i2602.y = i2603[2]
  i2602.width = i2603[3]
  i2602.height = i2603[4]
  i2602.xOffset = i2603[5]
  i2602.yOffset = i2603[6]
  i2602.xAdvance = i2603[7]
  i2602.scale = i2603[8]
  return i2602
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2604 = root || request.c( 'TMPro.KerningTable' )
  var i2605 = data
  var i2607 = i2605[0]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.add(request.d('TMPro.KerningPair', i2607[i + 0]));
  }
  i2604.kerningPairs = i2606
  return i2604
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2610 = root || request.c( 'TMPro.KerningPair' )
  var i2611 = data
  i2610.xOffset = i2611[0]
  i2610.m_FirstGlyph = i2611[1]
  i2610.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2611[2], i2610.m_FirstGlyphAdjustments)
  i2610.m_SecondGlyph = i2611[3]
  i2610.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2611[4], i2610.m_SecondGlyphAdjustments)
  i2610.m_IgnoreSpacingAdjustments = !!i2611[5]
  return i2610
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2613 = data
  i2612.m_FaceIndex = i2613[0]
  i2612.m_FamilyName = i2613[1]
  i2612.m_StyleName = i2613[2]
  i2612.m_PointSize = i2613[3]
  i2612.m_Scale = i2613[4]
  i2612.m_UnitsPerEM = i2613[5]
  i2612.m_LineHeight = i2613[6]
  i2612.m_AscentLine = i2613[7]
  i2612.m_CapLine = i2613[8]
  i2612.m_MeanLine = i2613[9]
  i2612.m_Baseline = i2613[10]
  i2612.m_DescentLine = i2613[11]
  i2612.m_SuperscriptOffset = i2613[12]
  i2612.m_SuperscriptSize = i2613[13]
  i2612.m_SubscriptOffset = i2613[14]
  i2612.m_SubscriptSize = i2613[15]
  i2612.m_UnderlineOffset = i2613[16]
  i2612.m_UnderlineThickness = i2613[17]
  i2612.m_StrikethroughOffset = i2613[18]
  i2612.m_StrikethroughThickness = i2613[19]
  i2612.m_TabWidth = i2613[20]
  return i2612
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2615 = data
  i2614.useSafeMode = !!i2615[0]
  i2614.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2615[1], i2614.safeModeOptions)
  i2614.timeScale = i2615[2]
  i2614.unscaledTimeScale = i2615[3]
  i2614.useSmoothDeltaTime = !!i2615[4]
  i2614.maxSmoothUnscaledTime = i2615[5]
  i2614.rewindCallbackMode = i2615[6]
  i2614.showUnityEditorReport = !!i2615[7]
  i2614.logBehaviour = i2615[8]
  i2614.drawGizmos = !!i2615[9]
  i2614.defaultRecyclable = !!i2615[10]
  i2614.defaultAutoPlay = i2615[11]
  i2614.defaultUpdateType = i2615[12]
  i2614.defaultTimeScaleIndependent = !!i2615[13]
  i2614.defaultEaseType = i2615[14]
  i2614.defaultEaseOvershootOrAmplitude = i2615[15]
  i2614.defaultEasePeriod = i2615[16]
  i2614.defaultAutoKill = !!i2615[17]
  i2614.defaultLoopType = i2615[18]
  i2614.debugMode = !!i2615[19]
  i2614.debugStoreTargetId = !!i2615[20]
  i2614.showPreviewPanel = !!i2615[21]
  i2614.storeSettingsLocation = i2615[22]
  i2614.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2615[23], i2614.modules)
  i2614.createASMDEF = !!i2615[24]
  i2614.showPlayingTweens = !!i2615[25]
  i2614.showPausedTweens = !!i2615[26]
  return i2614
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2617 = data
  i2616.logBehaviour = i2617[0]
  i2616.nestedTweenFailureBehaviour = i2617[1]
  return i2616
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2618 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2619 = data
  i2618.showPanel = !!i2619[0]
  i2618.audioEnabled = !!i2619[1]
  i2618.physicsEnabled = !!i2619[2]
  i2618.physics2DEnabled = !!i2619[3]
  i2618.spriteEnabled = !!i2619[4]
  i2618.uiEnabled = !!i2619[5]
  i2618.uiToolkitEnabled = !!i2619[6]
  i2618.textMeshProEnabled = !!i2619[7]
  i2618.tk2DEnabled = !!i2619[8]
  i2618.deAudioEnabled = !!i2619[9]
  i2618.deUnityExtendedEnabled = !!i2619[10]
  i2618.epoOutlineEnabled = !!i2619[11]
  return i2618
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_Settings' )
  var i2621 = data
  i2620.assetVersion = i2621[0]
  i2620.m_TextWrappingMode = i2621[1]
  i2620.m_enableKerning = !!i2621[2]
  var i2623 = i2621[3]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.add(i2623[i + 0]);
  }
  i2620.m_ActiveFontFeatures = i2622
  i2620.m_enableExtraPadding = !!i2621[4]
  i2620.m_enableTintAllSprites = !!i2621[5]
  i2620.m_enableParseEscapeCharacters = !!i2621[6]
  i2620.m_EnableRaycastTarget = !!i2621[7]
  i2620.m_GetFontFeaturesAtRuntime = !!i2621[8]
  i2620.m_missingGlyphCharacter = i2621[9]
  i2620.m_ClearDynamicDataOnBuild = !!i2621[10]
  i2620.m_warningsDisabled = !!i2621[11]
  request.r(i2621[12], i2621[13], 0, i2620, 'm_defaultFontAsset')
  i2620.m_defaultFontAssetPath = i2621[14]
  i2620.m_defaultFontSize = i2621[15]
  i2620.m_defaultAutoSizeMinRatio = i2621[16]
  i2620.m_defaultAutoSizeMaxRatio = i2621[17]
  i2620.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2621[18], i2621[19] )
  i2620.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2621[20], i2621[21] )
  i2620.m_autoSizeTextContainer = !!i2621[22]
  i2620.m_IsTextObjectScaleStatic = !!i2621[23]
  var i2625 = i2621[24]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 1, i2624, '')
  }
  i2620.m_fallbackFontAssets = i2624
  i2620.m_matchMaterialPreset = !!i2621[25]
  i2620.m_HideSubTextObjects = !!i2621[26]
  request.r(i2621[27], i2621[28], 0, i2620, 'm_defaultSpriteAsset')
  i2620.m_defaultSpriteAssetPath = i2621[29]
  i2620.m_enableEmojiSupport = !!i2621[30]
  i2620.m_MissingCharacterSpriteUnicode = i2621[31]
  var i2627 = i2621[32]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 1, i2626, '')
  }
  i2620.m_EmojiFallbackTextAssets = i2626
  i2620.m_defaultColorGradientPresetsPath = i2621[33]
  request.r(i2621[34], i2621[35], 0, i2620, 'm_defaultStyleSheet')
  i2620.m_StyleSheetsResourcePath = i2621[36]
  request.r(i2621[37], i2621[38], 0, i2620, 'm_leadingCharacters')
  request.r(i2621[39], i2621[40], 0, i2620, 'm_followingCharacters')
  i2620.m_UseModernHangulLineBreakingRules = !!i2621[41]
  return i2620
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'spriteSheet')
  var i2633 = i2631[2]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('TMPro.TMP_Sprite', i2633[i + 0]));
  }
  i2630.spriteInfoList = i2632
  var i2635 = i2631[3]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 1, i2634, '')
  }
  i2630.fallbackSpriteAssets = i2634
  var i2637 = i2631[4]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('TMPro.TMP_SpriteCharacter', i2637[i + 0]));
  }
  i2630.m_SpriteCharacterTable = i2636
  var i2639 = i2631[5]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('TMPro.TMP_SpriteGlyph', i2639[i + 0]));
  }
  i2630.m_GlyphTable = i2638
  i2630.m_Version = i2631[6]
  i2630.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2631[7], i2630.m_FaceInfo)
  request.r(i2631[8], i2631[9], 0, i2630, 'm_Material')
  return i2630
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2643 = data
  i2642.name = i2643[0]
  i2642.hashCode = i2643[1]
  i2642.unicode = i2643[2]
  i2642.pivot = new pc.Vec2( i2643[3], i2643[4] )
  request.r(i2643[5], i2643[6], 0, i2642, 'sprite')
  i2642.id = i2643[7]
  i2642.x = i2643[8]
  i2642.y = i2643[9]
  i2642.width = i2643[10]
  i2642.height = i2643[11]
  i2642.xOffset = i2643[12]
  i2642.yOffset = i2643[13]
  i2642.xAdvance = i2643[14]
  i2642.scale = i2643[15]
  return i2642
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2649 = data
  i2648.m_Name = i2649[0]
  i2648.m_ElementType = i2649[1]
  i2648.m_Unicode = i2649[2]
  i2648.m_GlyphIndex = i2649[3]
  i2648.m_Scale = i2649[4]
  return i2648
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'sprite')
  i2652.m_Index = i2653[2]
  i2652.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2653[3], i2652.m_Metrics)
  i2652.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2653[4], i2652.m_GlyphRect)
  i2652.m_Scale = i2653[5]
  i2652.m_AtlasIndex = i2653[6]
  i2652.m_ClassDefinitionType = i2653[7]
  return i2652
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2655 = data
  var i2657 = i2655[0]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('TMPro.TMP_Style', i2657[i + 0]));
  }
  i2654.m_StyleList = i2656
  return i2654
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_Style' )
  var i2661 = data
  i2660.m_Name = i2661[0]
  i2660.m_HashCode = i2661[1]
  i2660.m_OpeningDefinition = i2661[2]
  i2660.m_ClosingDefinition = i2661[3]
  i2660.m_OpeningTagArray = i2661[4]
  i2660.m_ClosingTagArray = i2661[5]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2663 = data
  var i2665 = i2663[0]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2665[i + 0]) );
  }
  i2662.files = i2664
  i2662.componentToPrefabIds = i2663[1]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2669 = data
  i2668.path = i2669[0]
  request.r(i2669[1], i2669[2], 0, i2668, 'unityObject')
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2671 = data
  var i2673 = i2671[0]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2673[i + 0]) );
  }
  i2670.scriptsExecutionOrder = i2672
  var i2675 = i2671[1]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2675[i + 0]) );
  }
  i2670.sortingLayers = i2674
  var i2677 = i2671[2]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2677[i + 0]) );
  }
  i2670.cullingLayers = i2676
  i2670.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2671[3], i2670.timeSettings)
  i2670.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2671[4], i2670.physicsSettings)
  i2670.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2671[5], i2670.physics2DSettings)
  i2670.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2671[6], i2670.qualitySettings)
  i2670.enableRealtimeShadows = !!i2671[7]
  i2670.enableAutoInstancing = !!i2671[8]
  i2670.enableStaticBatching = !!i2671[9]
  i2670.enableDynamicBatching = !!i2671[10]
  i2670.lightmapEncodingQuality = i2671[11]
  i2670.desiredColorSpace = i2671[12]
  var i2679 = i2671[13]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( i2679[i + 0] );
  }
  i2670.allTags = i2678
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2683 = data
  i2682.name = i2683[0]
  i2682.value = i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2687 = data
  i2686.id = i2687[0]
  i2686.name = i2687[1]
  i2686.value = i2687[2]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2691 = data
  i2690.id = i2691[0]
  i2690.name = i2691[1]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2693 = data
  i2692.fixedDeltaTime = i2693[0]
  i2692.maximumDeltaTime = i2693[1]
  i2692.timeScale = i2693[2]
  i2692.maximumParticleTimestep = i2693[3]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2695 = data
  i2694.gravity = new pc.Vec3( i2695[0], i2695[1], i2695[2] )
  i2694.defaultSolverIterations = i2695[3]
  i2694.bounceThreshold = i2695[4]
  i2694.autoSyncTransforms = !!i2695[5]
  i2694.autoSimulation = !!i2695[6]
  var i2697 = i2695[7]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2697[i + 0]) );
  }
  i2694.collisionMatrix = i2696
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2701 = data
  i2700.enabled = !!i2701[0]
  i2700.layerId = i2701[1]
  i2700.otherLayerId = i2701[2]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'material')
  i2702.gravity = new pc.Vec2( i2703[2], i2703[3] )
  i2702.positionIterations = i2703[4]
  i2702.velocityIterations = i2703[5]
  i2702.velocityThreshold = i2703[6]
  i2702.maxLinearCorrection = i2703[7]
  i2702.maxAngularCorrection = i2703[8]
  i2702.maxTranslationSpeed = i2703[9]
  i2702.maxRotationSpeed = i2703[10]
  i2702.baumgarteScale = i2703[11]
  i2702.baumgarteTOIScale = i2703[12]
  i2702.timeToSleep = i2703[13]
  i2702.linearSleepTolerance = i2703[14]
  i2702.angularSleepTolerance = i2703[15]
  i2702.defaultContactOffset = i2703[16]
  i2702.autoSimulation = !!i2703[17]
  i2702.queriesHitTriggers = !!i2703[18]
  i2702.queriesStartInColliders = !!i2703[19]
  i2702.callbacksOnDisable = !!i2703[20]
  i2702.reuseCollisionCallbacks = !!i2703[21]
  i2702.autoSyncTransforms = !!i2703[22]
  var i2705 = i2703[23]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2705[i + 0]) );
  }
  i2702.collisionMatrix = i2704
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2709 = data
  i2708.enabled = !!i2709[0]
  i2708.layerId = i2709[1]
  i2708.otherLayerId = i2709[2]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2711 = data
  var i2713 = i2711[0]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2713[i + 0]) );
  }
  i2710.qualityLevels = i2712
  var i2715 = i2711[1]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2710.names = i2714
  i2710.shadows = i2711[2]
  i2710.anisotropicFiltering = i2711[3]
  i2710.antiAliasing = i2711[4]
  i2710.lodBias = i2711[5]
  i2710.shadowCascades = i2711[6]
  i2710.shadowDistance = i2711[7]
  i2710.shadowmaskMode = i2711[8]
  i2710.shadowProjection = i2711[9]
  i2710.shadowResolution = i2711[10]
  i2710.softParticles = !!i2711[11]
  i2710.softVegetation = !!i2711[12]
  i2710.activeColorSpace = i2711[13]
  i2710.desiredColorSpace = i2711[14]
  i2710.masterTextureLimit = i2711[15]
  i2710.maxQueuedFrames = i2711[16]
  i2710.particleRaycastBudget = i2711[17]
  i2710.pixelLightCount = i2711[18]
  i2710.realtimeReflectionProbes = !!i2711[19]
  i2710.shadowCascade2Split = i2711[20]
  i2710.shadowCascade4Split = new pc.Vec3( i2711[21], i2711[22], i2711[23] )
  i2710.streamingMipmapsActive = !!i2711[24]
  i2710.vSyncCount = i2711[25]
  i2710.asyncUploadBufferSize = i2711[26]
  i2710.asyncUploadTimeSlice = i2711[27]
  i2710.billboardsFaceCameraPosition = !!i2711[28]
  i2710.shadowNearPlaneOffset = i2711[29]
  i2710.streamingMipmapsMemoryBudget = i2711[30]
  i2710.maximumLODLevel = i2711[31]
  i2710.streamingMipmapsAddAllCameras = !!i2711[32]
  i2710.streamingMipmapsMaxLevelReduction = i2711[33]
  i2710.streamingMipmapsRenderersPerFrame = i2711[34]
  i2710.resolutionScalingFixedDPIFactor = i2711[35]
  i2710.streamingMipmapsMaxFileIORequests = i2711[36]
  i2710.currentQualityLevel = i2711[37]
  return i2710
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2719 = data
  i2718.m_GlyphIndex = i2719[0]
  i2718.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2719[1], i2718.m_GlyphValueRecord)
  return i2718
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2721 = data
  i2720.m_XCoordinate = i2721[0]
  i2720.m_YCoordinate = i2721[1]
  return i2720
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2723 = data
  i2722.m_XPositionAdjustment = i2723[0]
  i2722.m_YPositionAdjustment = i2723[1]
  return i2722
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2725 = data
  i2724.xPlacement = i2725[0]
  i2724.yPlacement = i2725[1]
  i2724.xAdvance = i2725[2]
  i2724.yAdvance = i2725[3]
  return i2724
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2726 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2727 = data
  i2726.m_XPlacement = i2727[0]
  i2726.m_YPlacement = i2727[1]
  i2726.m_XAdvance = i2727[2]
  i2726.m_YAdvance = i2727[3]
  return i2726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[28],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[28],"94":[95],"96":[97],"98":[97],"27":[13],"99":[56],"100":[20],"55":[101],"102":[20],"20":[101],"24":[20],"103":[20],"104":[101],"105":[101],"106":[101],"107":[13],"108":[16,13],"109":[95],"110":[16,13],"111":[25,95],"112":[95],"113":[95,114],"115":[73],"116":[80],"117":[118],"119":[120],"121":[5],"122":[28],"123":[124],"125":[13],"126":[95,13],"32":[13,16],"127":[13],"128":[16,13],"129":[95],"130":[16,13],"131":[13],"132":[133],"134":[133],"135":[133],"136":[13],"137":[13],"30":[27],"15":[16,13],"138":[13],"29":[27],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[16,13],"149":[13],"150":[13],"151":[13],"36":[13],"152":[16,13],"153":[13],"154":[52],"155":[52],"53":[52],"156":[52],"157":[28],"158":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","ItemToTarget","RongBien","Item","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CapsuleCollider","ItemClickable","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","OilBrush","UnityEngine.Collider","ItemDragChildRotator","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "60.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v66_sushi";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1764";

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

Deserializers.buildID = "09231413-bafc-4e18-9616-7c20616c207b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

