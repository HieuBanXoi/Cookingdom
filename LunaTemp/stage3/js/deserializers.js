var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  i2076.m_UseAcceleration = i2077[3]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2092 = root || new pc.UnityMaterial()
  var i2093 = data
  i2092.name = i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'shader')
  i2092.renderQueue = i2093[3]
  i2092.enableInstancing = !!i2093[4]
  var i2095 = i2093[5]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2095[i + 0]) );
  }
  i2092.floatParameters = i2094
  var i2097 = i2093[6]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2097[i + 0]) );
  }
  i2092.colorParameters = i2096
  var i2099 = i2093[7]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2099[i + 0]) );
  }
  i2092.vectorParameters = i2098
  var i2101 = i2093[8]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2101[i + 0]) );
  }
  i2092.textureParameters = i2100
  var i2103 = i2093[9]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2103[i + 0]) );
  }
  i2092.materialFlags = i2102
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.value = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.value = new pc.Color(i2111[1], i2111[2], i2111[3], i2111[4])
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.value = new pc.Vec4( i2115[1], i2115[2], i2115[3], i2115[4] )
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, 'value')
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.enabled = !!i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.width = i2125[1]
  i2124.height = i2125[2]
  i2124.mipmapCount = i2125[3]
  i2124.anisoLevel = i2125[4]
  i2124.filterMode = i2125[5]
  i2124.hdr = !!i2125[6]
  i2124.format = i2125[7]
  i2124.wrapMode = i2125[8]
  i2124.alphaIsTransparency = !!i2125[9]
  i2124.alphaSource = i2125[10]
  i2124.graphicsFormat = i2125[11]
  i2124.sRGBTexture = !!i2125[12]
  i2124.desiredColorSpace = i2125[13]
  i2124.wrapU = i2125[14]
  i2124.wrapV = i2125[15]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2127 = data
  i2126.position = new pc.Vec3( i2127[0], i2127[1], i2127[2] )
  i2126.scale = new pc.Vec3( i2127[3], i2127[4], i2127[5] )
  i2126.rotation = new pc.Quat(i2127[6], i2127[7], i2127[8], i2127[9])
  return i2126
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2128 = root || request.c( 'HeartEffect' )
  var i2129 = data
  i2128.defaultLifeTime = i2129[0]
  request.r(i2129[1], i2129[2], 0, i2128, 'tf')
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2131 = data
  i2130.color = new pc.Color(i2131[0], i2131[1], i2131[2], i2131[3])
  request.r(i2131[4], i2131[5], 0, i2130, 'sprite')
  i2130.flipX = !!i2131[6]
  i2130.flipY = !!i2131[7]
  i2130.drawMode = i2131[8]
  i2130.size = new pc.Vec2( i2131[9], i2131[10] )
  i2130.tileMode = i2131[11]
  i2130.adaptiveModeThreshold = i2131[12]
  i2130.maskInteraction = i2131[13]
  i2130.spriteSortPoint = i2131[14]
  i2130.enabled = !!i2131[15]
  request.r(i2131[16], i2131[17], 0, i2130, 'sharedMaterial')
  var i2133 = i2131[18]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.sharedMaterials = i2132
  i2130.receiveShadows = !!i2131[19]
  i2130.shadowCastingMode = i2131[20]
  i2130.sortingLayerID = i2131[21]
  i2130.sortingOrder = i2131[22]
  i2130.lightmapIndex = i2131[23]
  i2130.lightmapSceneIndex = i2131[24]
  i2130.lightmapScaleOffset = new pc.Vec4( i2131[25], i2131[26], i2131[27], i2131[28] )
  i2130.lightProbeUsage = i2131[29]
  i2130.reflectionProbeUsage = i2131[30]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.tagId = i2137[1]
  i2136.enabled = !!i2137[2]
  i2136.isStatic = !!i2137[3]
  i2136.layer = i2137[4]
  return i2136
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2138 = root || request.c( 'HeartBreakEffect' )
  var i2139 = data
  i2138.defaultLifeTime = i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'tf')
  return i2138
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2140 = root || request.c( 'BlinkEffect' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'tf')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'mesh')
  i2142.meshCount = i2143[2]
  i2142.activeVertexStreamsCount = i2143[3]
  i2142.alignment = i2143[4]
  i2142.renderMode = i2143[5]
  i2142.sortMode = i2143[6]
  i2142.lengthScale = i2143[7]
  i2142.velocityScale = i2143[8]
  i2142.cameraVelocityScale = i2143[9]
  i2142.normalDirection = i2143[10]
  i2142.sortingFudge = i2143[11]
  i2142.minParticleSize = i2143[12]
  i2142.maxParticleSize = i2143[13]
  i2142.pivot = new pc.Vec3( i2143[14], i2143[15], i2143[16] )
  request.r(i2143[17], i2143[18], 0, i2142, 'trailMaterial')
  i2142.applyActiveColorSpace = !!i2143[19]
  i2142.enabled = !!i2143[20]
  request.r(i2143[21], i2143[22], 0, i2142, 'sharedMaterial')
  var i2145 = i2143[23]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.sharedMaterials = i2144
  i2142.receiveShadows = !!i2143[24]
  i2142.shadowCastingMode = i2143[25]
  i2142.sortingLayerID = i2143[26]
  i2142.sortingOrder = i2143[27]
  i2142.lightmapIndex = i2143[28]
  i2142.lightmapSceneIndex = i2143[29]
  i2142.lightmapScaleOffset = new pc.Vec4( i2143[30], i2143[31], i2143[32], i2143[33] )
  i2142.lightProbeUsage = i2143[34]
  i2142.reflectionProbeUsage = i2143[35]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2147 = data
  i2146.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2147[0], i2146.main)
  i2146.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2147[1], i2146.colorBySpeed)
  i2146.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2147[2], i2146.colorOverLifetime)
  i2146.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2147[3], i2146.emission)
  i2146.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2147[4], i2146.rotationBySpeed)
  i2146.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2147[5], i2146.rotationOverLifetime)
  i2146.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2147[6], i2146.shape)
  i2146.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2147[7], i2146.sizeBySpeed)
  i2146.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2147[8], i2146.sizeOverLifetime)
  i2146.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2147[9], i2146.textureSheetAnimation)
  i2146.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2147[10], i2146.velocityOverLifetime)
  i2146.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2147[11], i2146.noise)
  i2146.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2147[12], i2146.inheritVelocity)
  i2146.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2147[13], i2146.forceOverLifetime)
  i2146.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2147[14], i2146.limitVelocityOverLifetime)
  i2146.useAutoRandomSeed = !!i2147[15]
  i2146.randomSeed = i2147[16]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemMain()
  var i2149 = data
  i2148.duration = i2149[0]
  i2148.loop = !!i2149[1]
  i2148.prewarm = !!i2149[2]
  i2148.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[3], i2148.startDelay)
  i2148.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[4], i2148.startLifetime)
  i2148.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[5], i2148.startSpeed)
  i2148.startSize3D = !!i2149[6]
  i2148.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[7], i2148.startSizeX)
  i2148.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[8], i2148.startSizeY)
  i2148.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[9], i2148.startSizeZ)
  i2148.startRotation3D = !!i2149[10]
  i2148.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[11], i2148.startRotationX)
  i2148.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[12], i2148.startRotationY)
  i2148.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[13], i2148.startRotationZ)
  i2148.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2149[14], i2148.startColor)
  i2148.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[15], i2148.gravityModifier)
  i2148.simulationSpace = i2149[16]
  request.r(i2149[17], i2149[18], 0, i2148, 'customSimulationSpace')
  i2148.simulationSpeed = i2149[19]
  i2148.useUnscaledTime = !!i2149[20]
  i2148.scalingMode = i2149[21]
  i2148.playOnAwake = !!i2149[22]
  i2148.maxParticles = i2149[23]
  i2148.emitterVelocityMode = i2149[24]
  i2148.stopAction = i2149[25]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2150 = root || new pc.MinMaxCurve()
  var i2151 = data
  i2150.mode = i2151[0]
  i2150.curveMin = new pc.AnimationCurve( { keys_flow: i2151[1] } )
  i2150.curveMax = new pc.AnimationCurve( { keys_flow: i2151[2] } )
  i2150.curveMultiplier = i2151[3]
  i2150.constantMin = i2151[4]
  i2150.constantMax = i2151[5]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2152 = root || new pc.MinMaxGradient()
  var i2153 = data
  i2152.mode = i2153[0]
  i2152.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2153[1], i2152.gradientMin)
  i2152.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2153[2], i2152.gradientMax)
  i2152.colorMin = new pc.Color(i2153[3], i2153[4], i2153[5], i2153[6])
  i2152.colorMax = new pc.Color(i2153[7], i2153[8], i2153[9], i2153[10])
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2155 = data
  i2154.mode = i2155[0]
  var i2157 = i2155[1]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2157[i + 0]) );
  }
  i2154.colorKeys = i2156
  var i2159 = i2155[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2159[i + 0]) );
  }
  i2154.alphaKeys = i2158
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemColorBySpeed()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2161[1], i2160.color)
  i2160.range = new pc.Vec2( i2161[2], i2161[3] )
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2165 = data
  i2164.color = new pc.Color(i2165[0], i2165[1], i2165[2], i2165[3])
  i2164.time = i2165[4]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2169 = data
  i2168.alpha = i2169[0]
  i2168.time = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemColorOverLifetime()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2171[1], i2170.color)
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemEmitter()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[1], i2172.rateOverTime)
  i2172.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[2], i2172.rateOverDistance)
  var i2175 = i2173[3]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2175[i + 0]) );
  }
  i2172.bursts = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemBurst()
  var i2179 = data
  i2178.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[0], i2178.count)
  i2178.cycleCount = i2179[1]
  i2178.minCount = i2179[2]
  i2178.maxCount = i2179[3]
  i2178.repeatInterval = i2179[4]
  i2178.time = i2179[5]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemRotationBySpeed()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[1], i2180.x)
  i2180.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[2], i2180.y)
  i2180.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[3], i2180.z)
  i2180.separateAxes = !!i2181[4]
  i2180.range = new pc.Vec2( i2181[5], i2181[6] )
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[1], i2182.x)
  i2182.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[2], i2182.y)
  i2182.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[3], i2182.z)
  i2182.separateAxes = !!i2183[4]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemShape()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.shapeType = i2185[1]
  i2184.randomDirectionAmount = i2185[2]
  i2184.sphericalDirectionAmount = i2185[3]
  i2184.randomPositionAmount = i2185[4]
  i2184.alignToDirection = !!i2185[5]
  i2184.radius = i2185[6]
  i2184.radiusMode = i2185[7]
  i2184.radiusSpread = i2185[8]
  i2184.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[9], i2184.radiusSpeed)
  i2184.radiusThickness = i2185[10]
  i2184.angle = i2185[11]
  i2184.length = i2185[12]
  i2184.boxThickness = new pc.Vec3( i2185[13], i2185[14], i2185[15] )
  i2184.meshShapeType = i2185[16]
  request.r(i2185[17], i2185[18], 0, i2184, 'mesh')
  request.r(i2185[19], i2185[20], 0, i2184, 'meshRenderer')
  request.r(i2185[21], i2185[22], 0, i2184, 'skinnedMeshRenderer')
  i2184.useMeshMaterialIndex = !!i2185[23]
  i2184.meshMaterialIndex = i2185[24]
  i2184.useMeshColors = !!i2185[25]
  i2184.normalOffset = i2185[26]
  i2184.arc = i2185[27]
  i2184.arcMode = i2185[28]
  i2184.arcSpread = i2185[29]
  i2184.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[30], i2184.arcSpeed)
  i2184.donutRadius = i2185[31]
  i2184.position = new pc.Vec3( i2185[32], i2185[33], i2185[34] )
  i2184.rotation = new pc.Vec3( i2185[35], i2185[36], i2185[37] )
  i2184.scale = new pc.Vec3( i2185[38], i2185[39], i2185[40] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemSizeBySpeed()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.separateAxes = !!i2187[4]
  i2186.range = new pc.Vec2( i2187[5], i2187[6] )
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[1], i2188.x)
  i2188.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[2], i2188.y)
  i2188.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[3], i2188.z)
  i2188.separateAxes = !!i2189[4]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.mode = i2191[1]
  i2190.animation = i2191[2]
  i2190.numTilesX = i2191[3]
  i2190.numTilesY = i2191[4]
  i2190.useRandomRow = !!i2191[5]
  i2190.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[6], i2190.frameOverTime)
  i2190.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[7], i2190.startFrame)
  i2190.cycleCount = i2191[8]
  i2190.rowIndex = i2191[9]
  i2190.flipU = i2191[10]
  i2190.flipV = i2191[11]
  i2190.spriteCount = i2191[12]
  var i2193 = i2191[13]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2190.sprites = i2192
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.x)
  i2196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.y)
  i2196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[3], i2196.z)
  i2196.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[4], i2196.radial)
  i2196.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[5], i2196.speedModifier)
  i2196.space = i2197[6]
  i2196.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[7], i2196.orbitalX)
  i2196.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[8], i2196.orbitalY)
  i2196.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[9], i2196.orbitalZ)
  i2196.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[10], i2196.orbitalOffsetX)
  i2196.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[11], i2196.orbitalOffsetY)
  i2196.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[12], i2196.orbitalOffsetZ)
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemNoise()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.separateAxes = !!i2199[1]
  i2198.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.strengthX)
  i2198.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[3], i2198.strengthY)
  i2198.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[4], i2198.strengthZ)
  i2198.frequency = i2199[5]
  i2198.damping = !!i2199[6]
  i2198.octaveCount = i2199[7]
  i2198.octaveMultiplier = i2199[8]
  i2198.octaveScale = i2199[9]
  i2198.quality = i2199[10]
  i2198.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[11], i2198.scrollSpeed)
  i2198.scrollSpeedMultiplier = i2199[12]
  i2198.remapEnabled = !!i2199[13]
  i2198.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[14], i2198.remapX)
  i2198.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[15], i2198.remapY)
  i2198.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[16], i2198.remapZ)
  i2198.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[17], i2198.positionAmount)
  i2198.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[18], i2198.rotationAmount)
  i2198.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[19], i2198.sizeAmount)
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemInheritVelocity()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.mode = i2201[1]
  i2200.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.curve)
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemForceOverLifetime()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.x)
  i2202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.y)
  i2202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.z)
  i2202.space = i2203[4]
  i2202.randomized = !!i2203[5]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.limit)
  i2204.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.limitX)
  i2204.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.limitY)
  i2204.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[4], i2204.limitZ)
  i2204.dampen = i2205[5]
  i2204.separateAxes = !!i2205[6]
  i2204.space = i2205[7]
  i2204.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[8], i2204.drag)
  i2204.multiplyDragByParticleSize = !!i2205[9]
  i2204.multiplyDragByParticleVelocity = !!i2205[10]
  return i2204
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2206 = root || request.c( 'StarExploreFX' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'tf')
  return i2206
}

Deserializers["ProgressBar"] = function (request, data, root) {
  var i2208 = root || request.c( 'ProgressBar' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'fillTransform')
  request.r(i2209[2], i2209[3], 0, i2208, 'tf')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2211 = data
  i2210.pivot = new pc.Vec2( i2211[0], i2211[1] )
  i2210.anchorMin = new pc.Vec2( i2211[2], i2211[3] )
  i2210.anchorMax = new pc.Vec2( i2211[4], i2211[5] )
  i2210.sizeDelta = new pc.Vec2( i2211[6], i2211[7] )
  i2210.anchoredPosition3D = new pc.Vec3( i2211[8], i2211[9], i2211[10] )
  i2210.rotation = new pc.Quat(i2211[11], i2211[12], i2211[13], i2211[14])
  i2210.scale = new pc.Vec3( i2211[15], i2211[16], i2211[17] )
  return i2210
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2212 = root || request.c( 'ClockTimer' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'fillImage')
  request.r(i2213[2], i2213[3], 0, i2212, 'tf')
  i2212.spawnZoomDuration = i2213[4]
  i2212.despawnZoomDuration = i2213[5]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2215 = data
  i2214.cullTransparentMesh = !!i2215[0]
  return i2214
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.UI.Image' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'm_Sprite')
  i2216.m_Type = i2217[2]
  i2216.m_PreserveAspect = !!i2217[3]
  i2216.m_FillCenter = !!i2217[4]
  i2216.m_FillMethod = i2217[5]
  i2216.m_FillAmount = i2217[6]
  i2216.m_FillClockwise = !!i2217[7]
  i2216.m_FillOrigin = i2217[8]
  i2216.m_UseSpriteMesh = !!i2217[9]
  i2216.m_PixelsPerUnitMultiplier = i2217[10]
  request.r(i2217[11], i2217[12], 0, i2216, 'm_Material')
  i2216.m_Maskable = !!i2217[13]
  i2216.m_Color = new pc.Color(i2217[14], i2217[15], i2217[16], i2217[17])
  i2216.m_RaycastTarget = !!i2217[18]
  i2216.m_RaycastPadding = new pc.Vec4( i2217[19], i2217[20], i2217[21], i2217[22] )
  return i2216
}

Deserializers["FlourSmoke"] = function (request, data, root) {
  var i2218 = root || request.c( 'FlourSmoke' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'tf')
  return i2218
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2220 = root || request.c( 'WaterSplash' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'tf')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2223 = data
  i2222.name = i2223[0]
  i2222.index = i2223[1]
  i2222.startup = !!i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2225 = data
  i2224.planeDistance = i2225[0]
  i2224.referencePixelsPerUnit = i2225[1]
  i2224.isFallbackOverlay = !!i2225[2]
  i2224.renderMode = i2225[3]
  i2224.renderOrder = i2225[4]
  i2224.sortingLayerName = i2225[5]
  i2224.sortingOrder = i2225[6]
  i2224.scaleFactor = i2225[7]
  request.r(i2225[8], i2225[9], 0, i2224, 'worldCamera')
  i2224.overrideSorting = !!i2225[10]
  i2224.pixelPerfect = !!i2225[11]
  i2224.targetDisplay = i2225[12]
  i2224.overridePixelPerfect = !!i2225[13]
  i2224.enabled = !!i2225[14]
  return i2224
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2227 = data
  i2226.m_UiScaleMode = i2227[0]
  i2226.m_ReferencePixelsPerUnit = i2227[1]
  i2226.m_ScaleFactor = i2227[2]
  i2226.m_ReferenceResolution = new pc.Vec2( i2227[3], i2227[4] )
  i2226.m_ScreenMatchMode = i2227[5]
  i2226.m_MatchWidthOrHeight = i2227[6]
  i2226.m_PhysicalUnit = i2227[7]
  i2226.m_FallbackScreenDPI = i2227[8]
  i2226.m_DefaultSpriteDPI = i2227[9]
  i2226.m_DynamicPixelsPerUnit = i2227[10]
  i2226.m_PresetInfoIsWorld = !!i2227[11]
  return i2226
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2229 = data
  i2228.m_IgnoreReversedGraphics = !!i2229[0]
  i2228.m_BlockingObjects = i2229[1]
  i2228.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2229[2] )
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'animatorController')
  request.r(i2231[2], i2231[3], 0, i2230, 'avatar')
  i2230.updateMode = i2231[4]
  i2230.hasTransformHierarchy = !!i2231[5]
  i2230.applyRootMotion = !!i2231[6]
  var i2233 = i2231[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.humanBones = i2232
  i2230.enabled = !!i2231[8]
  return i2230
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2236 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2237 = data
  i2236.m_hasFontAssetChanged = !!i2237[0]
  request.r(i2237[1], i2237[2], 0, i2236, 'm_baseMaterial')
  i2236.m_maskOffset = new pc.Vec4( i2237[3], i2237[4], i2237[5], i2237[6] )
  i2236.m_text = i2237[7]
  i2236.m_isRightToLeft = !!i2237[8]
  request.r(i2237[9], i2237[10], 0, i2236, 'm_fontAsset')
  request.r(i2237[11], i2237[12], 0, i2236, 'm_sharedMaterial')
  var i2239 = i2237[13]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2236.m_fontSharedMaterials = i2238
  request.r(i2237[14], i2237[15], 0, i2236, 'm_fontMaterial')
  var i2241 = i2237[16]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 2) {
  request.r(i2241[i + 0], i2241[i + 1], 2, i2240, '')
  }
  i2236.m_fontMaterials = i2240
  i2236.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2237[17], i2237[18], i2237[19], i2237[20])
  i2236.m_fontColor = new pc.Color(i2237[21], i2237[22], i2237[23], i2237[24])
  i2236.m_enableVertexGradient = !!i2237[25]
  i2236.m_colorMode = i2237[26]
  i2236.m_fontColorGradient = request.d('TMPro.VertexGradient', i2237[27], i2236.m_fontColorGradient)
  request.r(i2237[28], i2237[29], 0, i2236, 'm_fontColorGradientPreset')
  request.r(i2237[30], i2237[31], 0, i2236, 'm_spriteAsset')
  i2236.m_tintAllSprites = !!i2237[32]
  request.r(i2237[33], i2237[34], 0, i2236, 'm_StyleSheet')
  i2236.m_TextStyleHashCode = i2237[35]
  i2236.m_overrideHtmlColors = !!i2237[36]
  i2236.m_faceColor = UnityEngine.Color32.ConstructColor(i2237[37], i2237[38], i2237[39], i2237[40])
  i2236.m_fontSize = i2237[41]
  i2236.m_fontSizeBase = i2237[42]
  i2236.m_fontWeight = i2237[43]
  i2236.m_enableAutoSizing = !!i2237[44]
  i2236.m_fontSizeMin = i2237[45]
  i2236.m_fontSizeMax = i2237[46]
  i2236.m_fontStyle = i2237[47]
  i2236.m_HorizontalAlignment = i2237[48]
  i2236.m_VerticalAlignment = i2237[49]
  i2236.m_textAlignment = i2237[50]
  i2236.m_characterSpacing = i2237[51]
  i2236.m_wordSpacing = i2237[52]
  i2236.m_lineSpacing = i2237[53]
  i2236.m_lineSpacingMax = i2237[54]
  i2236.m_paragraphSpacing = i2237[55]
  i2236.m_charWidthMaxAdj = i2237[56]
  i2236.m_TextWrappingMode = i2237[57]
  i2236.m_wordWrappingRatios = i2237[58]
  i2236.m_overflowMode = i2237[59]
  request.r(i2237[60], i2237[61], 0, i2236, 'm_linkedTextComponent')
  request.r(i2237[62], i2237[63], 0, i2236, 'parentLinkedComponent')
  i2236.m_enableKerning = !!i2237[64]
  var i2243 = i2237[65]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.add(i2243[i + 0]);
  }
  i2236.m_ActiveFontFeatures = i2242
  i2236.m_enableExtraPadding = !!i2237[66]
  i2236.checkPaddingRequired = !!i2237[67]
  i2236.m_isRichText = !!i2237[68]
  i2236.m_parseCtrlCharacters = !!i2237[69]
  i2236.m_isOrthographic = !!i2237[70]
  i2236.m_isCullingEnabled = !!i2237[71]
  i2236.m_horizontalMapping = i2237[72]
  i2236.m_verticalMapping = i2237[73]
  i2236.m_uvLineOffset = i2237[74]
  i2236.m_geometrySortingOrder = i2237[75]
  i2236.m_IsTextObjectScaleStatic = !!i2237[76]
  i2236.m_VertexBufferAutoSizeReduction = !!i2237[77]
  i2236.m_useMaxVisibleDescender = !!i2237[78]
  i2236.m_pageToDisplay = i2237[79]
  i2236.m_margin = new pc.Vec4( i2237[80], i2237[81], i2237[82], i2237[83] )
  i2236.m_isUsingLegacyAnimationComponent = !!i2237[84]
  i2236.m_isVolumetricText = !!i2237[85]
  request.r(i2237[86], i2237[87], 0, i2236, 'm_Material')
  i2236.m_EmojiFallbackSupport = !!i2237[88]
  i2236.m_Maskable = !!i2237[89]
  i2236.m_Color = new pc.Color(i2237[90], i2237[91], i2237[92], i2237[93])
  i2236.m_RaycastTarget = !!i2237[94]
  i2236.m_RaycastPadding = new pc.Vec4( i2237[95], i2237[96], i2237[97], i2237[98] )
  return i2236
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.VertexGradient' )
  var i2245 = data
  i2244.topLeft = new pc.Color(i2245[0], i2245[1], i2245[2], i2245[3])
  i2244.topRight = new pc.Color(i2245[4], i2245[5], i2245[6], i2245[7])
  i2244.bottomLeft = new pc.Color(i2245[8], i2245[9], i2245[10], i2245[11])
  i2244.bottomRight = new pc.Color(i2245[12], i2245[13], i2245[14], i2245[15])
  return i2244
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.UI.Button' )
  var i2249 = data
  i2248.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2249[0], i2248.m_OnClick)
  i2248.m_Navigation = request.d('UnityEngine.UI.Navigation', i2249[1], i2248.m_Navigation)
  i2248.m_Transition = i2249[2]
  i2248.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2249[3], i2248.m_Colors)
  i2248.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2249[4], i2248.m_SpriteState)
  i2248.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2249[5], i2248.m_AnimationTriggers)
  i2248.m_Interactable = !!i2249[6]
  request.r(i2249[7], i2249[8], 0, i2248, 'm_TargetGraphic')
  return i2248
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2251 = data
  i2250.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2251[0], i2250.m_PersistentCalls)
  return i2250
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('UnityEngine.Events.PersistentCall', i2255[i + 0]));
  }
  i2252.m_Calls = i2254
  return i2252
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'm_Target')
  i2258.m_TargetAssemblyTypeName = i2259[2]
  i2258.m_MethodName = i2259[3]
  i2258.m_Mode = i2259[4]
  i2258.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2259[5], i2258.m_Arguments)
  i2258.m_CallState = i2259[6]
  return i2258
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'm_ObjectArgument')
  i2260.m_ObjectArgumentAssemblyTypeName = i2261[2]
  i2260.m_IntArgument = i2261[3]
  i2260.m_FloatArgument = i2261[4]
  i2260.m_StringArgument = i2261[5]
  i2260.m_BoolArgument = !!i2261[6]
  return i2260
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2263 = data
  i2262.m_Mode = i2263[0]
  i2262.m_WrapAround = !!i2263[1]
  request.r(i2263[2], i2263[3], 0, i2262, 'm_SelectOnUp')
  request.r(i2263[4], i2263[5], 0, i2262, 'm_SelectOnDown')
  request.r(i2263[6], i2263[7], 0, i2262, 'm_SelectOnLeft')
  request.r(i2263[8], i2263[9], 0, i2262, 'm_SelectOnRight')
  return i2262
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2265 = data
  i2264.m_NormalColor = new pc.Color(i2265[0], i2265[1], i2265[2], i2265[3])
  i2264.m_HighlightedColor = new pc.Color(i2265[4], i2265[5], i2265[6], i2265[7])
  i2264.m_PressedColor = new pc.Color(i2265[8], i2265[9], i2265[10], i2265[11])
  i2264.m_SelectedColor = new pc.Color(i2265[12], i2265[13], i2265[14], i2265[15])
  i2264.m_DisabledColor = new pc.Color(i2265[16], i2265[17], i2265[18], i2265[19])
  i2264.m_ColorMultiplier = i2265[20]
  i2264.m_FadeDuration = i2265[21]
  return i2264
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'm_HighlightedSprite')
  request.r(i2267[2], i2267[3], 0, i2266, 'm_PressedSprite')
  request.r(i2267[4], i2267[5], 0, i2266, 'm_SelectedSprite')
  request.r(i2267[6], i2267[7], 0, i2266, 'm_DisabledSprite')
  return i2266
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2269 = data
  i2268.m_NormalTrigger = i2269[0]
  i2268.m_HighlightedTrigger = i2269[1]
  i2268.m_PressedTrigger = i2269[2]
  i2268.m_SelectedTrigger = i2269[3]
  i2268.m_DisabledTrigger = i2269[4]
  return i2268
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2270 = root || request.c( 'Ply_Pool' )
  var i2271 = data
  var i2273 = i2271[0]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Ply_Pool+PoolAmount', i2273[i + 0]) );
  }
  i2270.poolAmounts = i2272
  request.r(i2271[1], i2271[2], 0, i2270, 'poolHolder')
  return i2270
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2276 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2277 = data
  i2276.type = i2277[0]
  i2276.amount = i2277[1]
  request.r(i2277[2], i2277[3], 0, i2276, 'gameUnit')
  return i2276
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2278 = root || request.c( 'Ply_SoundManager' )
  var i2279 = data
  var i2281 = i2279[0]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Ply_SoundManager+FxAudio', i2281[i + 0]) );
  }
  i2278.fxAudios = i2280
  var i2283 = i2279[1]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 2) {
  request.r(i2283[i + 0], i2283[i + 1], 2, i2282, '')
  }
  i2278.audioClips = i2282
  request.r(i2279[2], i2279[3], 0, i2278, 'sound')
  return i2278
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2286 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2287 = data
  i2286.fxType = i2287[0]
  request.r(i2287[1], i2287[2], 0, i2286, 'audioClip')
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'clip')
  request.r(i2291[2], i2291[3], 0, i2290, 'outputAudioMixerGroup')
  i2290.playOnAwake = !!i2291[4]
  i2290.loop = !!i2291[5]
  i2290.time = i2291[6]
  i2290.volume = i2291[7]
  i2290.pitch = i2291[8]
  i2290.enabled = !!i2291[9]
  return i2290
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2292 = root || request.c( 'GameManager' )
  var i2293 = data
  i2292.isPlaying = !!i2293[0]
  i2292.isTutorial = !!i2293[1]
  i2292.isGotoStore = !!i2293[2]
  i2292.isLoseGame = !!i2293[3]
  i2292.countMove = i2293[4]
  i2292.currentLayer = i2293[5]
  return i2292
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2294 = root || request.c( 'UIManager' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'winUI')
  request.r(i2295[2], i2295[3], 0, i2294, 'loseUI')
  request.r(i2295[4], i2295[5], 0, i2294, 'tutorial')
  request.r(i2295[6], i2295[7], 0, i2294, 'verticalUI')
  request.r(i2295[8], i2295[9], 0, i2294, 'horizontalUI')
  request.r(i2295[10], i2295[11], 0, i2294, 'downloadBtn')
  request.r(i2295[12], i2295[13], 0, i2294, 'horizontalDownloadBtn')
  i2294.isGoogleBuild = !!i2295[14]
  i2294.screenWidth = i2295[15]
  i2294.screenHeight = i2295[16]
  i2294.scaleHeightOnWidth = i2295[17]
  i2294.isVertical = !!i2295[18]
  i2294.isScreenVertical = !!i2295[19]
  request.r(i2295[20], i2295[21], 0, i2294, 'cam')
  i2294.verticalUIHeightOnWidthRatio = i2295[22]
  i2294.scaleCameraOnValidate = !!i2295[23]
  i2294.screenVerticalHeightOnWidthRatio = i2295[24]
  i2294.useContinuousScaling = !!i2295[25]
  i2294.baseOrthographicSize = i2295[26]
  i2294.baseAspect = i2295[27]
  i2294.landscapeSizeRatio = i2295[28]
  i2294.defaultPortraitSizeRatio = i2295[29]
  var i2297 = i2295[30]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.add(request.d('ScreenScaleStep', i2297[i + 0]));
  }
  i2294.discreteScaleSteps = i2296
  i2294.usePerspectiveCamera = !!i2295[31]
  request.r(i2295[32], i2295[33], 0, i2294, 'perspectiveFocus')
  i2294.perspectiveFocusDistance = i2295[34]
  i2294.perspectivePadding = i2295[35]
  i2294.fitRendererBounds = !!i2295[36]
  request.r(i2295[37], i2295[38], 0, i2294, 'boundsRoot')
  var i2299 = i2295[39]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 1, i2298, '')
  }
  i2294.boundsRenderers = i2298
  return i2294
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2302 = root || request.c( 'ScreenScaleStep' )
  var i2303 = data
  i2302.heightOnWidthRatio = i2303[0]
  i2302.orthographicSize = i2303[1]
  return i2302
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2306 = root || request.c( 'InputManager' )
  var i2307 = data
  i2306.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2307[0] )
  i2306.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2307[1] )
  i2306.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2307[2] )
  i2306.isDragging = !!i2307[3]
  return i2306
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2308 = root || request.c( 'HandTutManager' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 1, i2310, '')
  }
  i2308.items = i2310
  request.r(i2309[1], i2309[2], 0, i2308, 'knife')
  request.r(i2309[3], i2309[4], 0, i2308, 'peeler')
  request.r(i2309[5], i2309[6], 0, i2308, 'handTutObject')
  request.r(i2309[7], i2309[8], 0, i2308, 'tapToCookObject')
  request.r(i2309[9], i2309[10], 0, i2308, 'oilItem')
  request.r(i2309[11], i2309[12], 0, i2308, 'stoveToggleEvent')
  request.r(i2309[13], i2309[14], 0, i2308, 'waterToggleEvent')
  request.r(i2309[15], i2309[16], 0, i2308, 'sinkBlock')
  var i2313 = i2309[17]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 1, i2312, '')
  }
  i2308.itemsInWater = i2312
  i2308.noDelayItemCount = i2309[18]
  i2308.breakHeartNoDelayThreshold = i2309[19]
  i2308.showSinkWaterTutorialOnStart = !!i2309[20]
  i2308.waitForBowlIntro = !!i2309[21]
  i2308.idleDelay = i2309[22]
  i2308.moveDuration = i2309[23]
  i2308.dragFadeDuration = i2309[24]
  i2308.clickScaleDuration = i2309[25]
  i2308.waitAtEndDuration = i2309[26]
  i2308.handZPosition = i2309[27]
  i2308.clickScaleMultiplier = i2309[28]
  i2308.moveEase = i2309[29]
  return i2308
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2318 = root || request.c( 'SortChildByZPos' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'transformToSort')
  var i2321 = i2319[2]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 1, i2320, '')
  }
  i2318.childrenToSort = i2320
  i2318.zOffset = i2319[3]
  i2318.baseZ = i2319[4]
  return i2318
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2324 = root || request.c( 'PhaseManager' )
  var i2325 = data
  var i2327 = i2325[0]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.add(request.d('PhaseData', i2327[i + 0]));
  }
  i2324.phases = i2326
  i2324.transitionDuration = i2325[1]
  i2324.delayBeforeNextPhase = i2325[2]
  i2324.offScreenLeftX = i2325[3]
  i2324.offScreenRightX = i2325[4]
  i2324.centerScreenX = i2325[5]
  request.r(i2325[6], i2325[7], 0, i2324, 'phaseTransitionObject')
  i2324.phaseTransitionObjectDuration = i2325[8]
  i2324.currentPhaseIndex = i2325[9]
  i2324.currentStepCount = i2325[10]
  return i2324
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2330 = root || request.c( 'PhaseData' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'phaseObject')
  i2330.totalSteps = i2331[2]
  i2330.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2331[3], i2330.onPhaseReady)
  return i2330
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2333 = data
  i2332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2333[0], i2332.m_PersistentCalls)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2335 = data
  i2334.aspect = i2335[0]
  i2334.orthographic = !!i2335[1]
  i2334.orthographicSize = i2335[2]
  i2334.backgroundColor = new pc.Color(i2335[3], i2335[4], i2335[5], i2335[6])
  i2334.nearClipPlane = i2335[7]
  i2334.farClipPlane = i2335[8]
  i2334.fieldOfView = i2335[9]
  i2334.depth = i2335[10]
  i2334.clearFlags = i2335[11]
  i2334.cullingMask = i2335[12]
  i2334.rect = i2335[13]
  request.r(i2335[14], i2335[15], 0, i2334, 'targetTexture')
  i2334.usePhysicalProperties = !!i2335[16]
  i2334.focalLength = i2335[17]
  i2334.sensorSize = new pc.Vec2( i2335[18], i2335[19] )
  i2334.lensShift = new pc.Vec2( i2335[20], i2335[21] )
  i2334.gateFit = i2335[22]
  i2334.commandBufferCount = i2335[23]
  i2334.cameraType = i2335[24]
  i2334.enabled = !!i2335[25]
  return i2334
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'm_FirstSelected')
  i2336.m_sendNavigationEvents = !!i2337[2]
  i2336.m_DragThreshold = i2337[3]
  return i2336
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2339 = data
  i2338.m_HorizontalAxis = i2339[0]
  i2338.m_VerticalAxis = i2339[1]
  i2338.m_SubmitButton = i2339[2]
  i2338.m_CancelButton = i2339[3]
  i2338.m_InputActionsPerSecond = i2339[4]
  i2338.m_RepeatDelay = i2339[5]
  i2338.m_ForceModuleActive = !!i2339[6]
  i2338.m_SendPointerHoverToParent = !!i2339[7]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2341 = data
  i2340.center = new pc.Vec3( i2341[0], i2341[1], i2341[2] )
  i2340.radius = i2341[3]
  i2340.enabled = !!i2341[4]
  i2340.isTrigger = !!i2341[5]
  request.r(i2341[6], i2341[7], 0, i2340, 'material')
  return i2340
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i2342 = root || request.c( 'Ply_ToggleEvent' )
  var i2343 = data
  i2342.isOn = !!i2343[0]
  i2342.applyStateOnEnable = !!i2343[1]
  i2342.applyStateOnClick = !!i2343[2]
  request.r(i2343[3], i2343[4], 0, i2342, 'targetObject')
  i2342.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i2343[5], i2342.onTurnOn)
  i2342.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i2343[6], i2342.onTurnOff)
  return i2342
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i2344 = root || request.c( 'SinkBlock' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'sink')
  i2344.startsInside = !!i2345[2]
  i2344.insideTargetType = i2345[3]
  request.r(i2345[4], i2345[5], 0, i2344, 'insideDefaultTarget')
  i2344.outsideTargetType = i2345[6]
  request.r(i2345[7], i2345[8], 0, i2344, 'outsideDefaultTarget')
  i2344.isDone = !!i2345[9]
  i2344.onProcess = !!i2345[10]
  request.r(i2345[11], i2345[12], 0, i2344, 'itemDraggable')
  request.r(i2345[13], i2345[14], 0, i2344, 'itemClickable')
  request.r(i2345[15], i2345[16], 0, i2344, 'itemStirring')
  request.r(i2345[17], i2345[18], 0, i2344, 'itemKnifeSpriteMaskCutter')
  request.r(i2345[19], i2345[20], 0, i2344, 'itemSpriteMaskPainter')
  request.r(i2345[21], i2345[22], 0, i2344, 'itemMoveToTarget')
  request.r(i2345[23], i2345[24], 0, i2344, 'animator')
  i2344.itemType = i2345[25]
  request.r(i2345[26], i2345[27], 0, i2344, 'spriteRenderer')
  i2344.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2345[28], i2344.onKnifeIn)
  i2344.heartEffectScale = i2345[29]
  i2344.breakHeartEffectScale = i2345[30]
  i2344.blinkEffectScale = i2345[31]
  i2344.mergeEffectScale = i2345[32]
  i2344.playMoveToTargetFinishSound = !!i2345[33]
  i2344.moveToTargetFinishFxType = i2345[34]
  return i2344
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2346 = root || request.c( 'ItemDraggable' )
  var i2347 = data
  i2346.isDraggable = !!i2347[0]
  request.r(i2347[1], i2347[2], 0, i2346, 'returnTransform')
  i2346.setParentToReturnTransform = !!i2347[3]
  i2346.returnToExactReturnTransformPosition = !!i2347[4]
  i2346.targetItemType = i2347[5]
  request.r(i2347[6], i2347[7], 0, i2346, 'item')
  i2346.checkState = !!i2347[8]
  request.r(i2347[9], i2347[10], 0, i2346, 'shadowObject')
  i2346.playReturnToStartFinishSound = !!i2347[11]
  i2346.returnToStartFinishFxType = i2347[12]
  i2346.spawnBreakHeartOnDropFail = !!i2347[13]
  i2346.playBeginDragSound = !!i2347[14]
  i2346.beginDragFxType = i2347[15]
  i2346.liftOffset = i2347[16]
  i2346.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2347[17], i2346.onBeginDrag)
  i2346.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2347[18], i2346.onDropSuccess)
  i2346.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2347[19], i2346.onDropFail)
  return i2346
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2348 = root || request.c( 'ItemMoveToTarget' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'defaultTarget')
  i2348.duration = i2349[2]
  i2348.easeType = i2349[3]
  i2348.moveType = i2349[4]
  i2348.jumpPower = i2349[5]
  i2348.numJumps = i2349[6]
  i2348.rotate360DuringJump = !!i2349[7]
  i2348.flipRotate = !!i2349[8]
  i2348.angleRotate = i2349[9]
  i2348.setParentToTarget = !!i2349[10]
  i2348.onComplete = request.d('UnityEngine.Events.UnityEvent', i2349[11], i2348.onComplete)
  i2348.lockInputWhileMoving = !!i2349[12]
  i2348.resetParentBeforeMove = !!i2349[13]
  return i2348
}

Deserializers["Sink"] = function (request, data, root) {
  var i2350 = root || request.c( 'Sink' )
  var i2351 = data
  i2350.isClose = !!i2351[0]
  i2350.isWaterDrop = !!i2351[1]
  i2350.isWaterIn = !!i2351[2]
  request.r(i2351[3], i2351[4], 0, i2350, 'waterSplashPos')
  request.r(i2351[5], i2351[6], 0, i2350, 'faucetAnimator')
  request.r(i2351[7], i2351[8], 0, i2350, 'basinAnimator')
  request.r(i2351[9], i2351[10], 0, i2350, 'waterDrop')
  request.r(i2351[11], i2351[12], 0, i2350, 'waterIn')
  request.r(i2351[13], i2351[14], 0, i2350, 'basinWaterRenderer')
  i2350.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i2351[15], i2351[16], i2351[17], i2351[18])
  i2350.fullWaterRect = UnityEngine.Rect.MinMaxRect(i2351[19], i2351[20], i2351[21], i2351[22])
  i2350.waterRiseDuration = i2351[23]
  i2350.waterFallDuration = i2351[24]
  i2350.waterRiseEase = i2351[25]
  i2350.waterFallEase = i2351[26]
  i2350.drawWaterRects = !!i2351[27]
  i2350.emptyRectColor = new pc.Color(i2351[28], i2351[29], i2351[30], i2351[31])
  i2350.fullRectColor = new pc.Color(i2351[32], i2351[33], i2351[34], i2351[35])
  request.r(i2351[36], i2351[37], 0, i2350, 'waterDropTransform')
  i2350.emptyWaterDropPoint = new pc.Vec3( i2351[38], i2351[39], i2351[40] )
  i2350.fullWaterDropPoint = new pc.Vec3( i2351[41], i2351[42], i2351[43] )
  i2350.drawWaterDropPoints = !!i2351[44]
  i2350.waterDropPointRadius = i2351[45]
  i2350.emptyWaterDropPointColor = new pc.Color(i2351[46], i2351[47], i2351[48], i2351[49])
  i2350.fullWaterDropPointColor = new pc.Color(i2351[50], i2351[51], i2351[52], i2351[53])
  var i2353 = i2351[54]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 1, i2352, '')
  }
  i2350.inWaterItems = i2352
  i2350.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i2351[55], i2350.onWaterIn)
  i2350.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i2351[56], i2350.onNoWaterIn)
  i2350.isDone = !!i2351[57]
  i2350.onProcess = !!i2351[58]
  request.r(i2351[59], i2351[60], 0, i2350, 'itemDraggable')
  request.r(i2351[61], i2351[62], 0, i2350, 'itemClickable')
  request.r(i2351[63], i2351[64], 0, i2350, 'itemStirring')
  request.r(i2351[65], i2351[66], 0, i2350, 'itemKnifeSpriteMaskCutter')
  request.r(i2351[67], i2351[68], 0, i2350, 'itemSpriteMaskPainter')
  request.r(i2351[69], i2351[70], 0, i2350, 'itemMoveToTarget')
  request.r(i2351[71], i2351[72], 0, i2350, 'animator')
  i2350.itemType = i2351[73]
  request.r(i2351[74], i2351[75], 0, i2350, 'spriteRenderer')
  i2350.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2351[76], i2350.onKnifeIn)
  i2350.heartEffectScale = i2351[77]
  i2350.breakHeartEffectScale = i2351[78]
  i2350.blinkEffectScale = i2351[79]
  i2350.mergeEffectScale = i2351[80]
  i2350.playMoveToTargetFinishSound = !!i2351[81]
  i2350.moveToTargetFinishFxType = i2351[82]
  i2350.waterState = i2351[83]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2355 = data
  i2354.center = new pc.Vec3( i2355[0], i2355[1], i2355[2] )
  i2354.size = new pc.Vec3( i2355[3], i2355[4], i2355[5] )
  i2354.enabled = !!i2355[6]
  i2354.isTrigger = !!i2355[7]
  request.r(i2355[8], i2355[9], 0, i2354, 'material')
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2357 = data
  i2356.frontSortingLayerID = i2357[0]
  i2356.frontSortingOrder = i2357[1]
  i2356.backSortingLayerID = i2357[2]
  i2356.backSortingOrder = i2357[3]
  i2356.alphaCutoff = i2357[4]
  request.r(i2357[5], i2357[6], 0, i2356, 'sprite')
  i2356.tileMode = i2357[7]
  i2356.isCustomRangeActive = !!i2357[8]
  i2356.spriteSortPoint = i2357[9]
  i2356.enabled = !!i2357[10]
  request.r(i2357[11], i2357[12], 0, i2356, 'sharedMaterial')
  var i2359 = i2357[13]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 2) {
  request.r(i2359[i + 0], i2359[i + 1], 2, i2358, '')
  }
  i2356.sharedMaterials = i2358
  i2356.receiveShadows = !!i2357[14]
  i2356.shadowCastingMode = i2357[15]
  i2356.sortingLayerID = i2357[16]
  i2356.sortingOrder = i2357[17]
  i2356.lightmapIndex = i2357[18]
  i2356.lightmapSceneIndex = i2357[19]
  i2356.lightmapScaleOffset = new pc.Vec4( i2357[20], i2357[21], i2357[22], i2357[23] )
  i2356.lightProbeUsage = i2357[24]
  i2356.reflectionProbeUsage = i2357[25]
  return i2356
}

Deserializers["Item"] = function (request, data, root) {
  var i2360 = root || request.c( 'Item' )
  var i2361 = data
  i2360.isDone = !!i2361[0]
  i2360.onProcess = !!i2361[1]
  request.r(i2361[2], i2361[3], 0, i2360, 'itemDraggable')
  request.r(i2361[4], i2361[5], 0, i2360, 'itemClickable')
  request.r(i2361[6], i2361[7], 0, i2360, 'itemStirring')
  request.r(i2361[8], i2361[9], 0, i2360, 'itemKnifeSpriteMaskCutter')
  request.r(i2361[10], i2361[11], 0, i2360, 'itemSpriteMaskPainter')
  request.r(i2361[12], i2361[13], 0, i2360, 'itemMoveToTarget')
  request.r(i2361[14], i2361[15], 0, i2360, 'animator')
  i2360.itemType = i2361[16]
  request.r(i2361[17], i2361[18], 0, i2360, 'spriteRenderer')
  i2360.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2361[19], i2360.onKnifeIn)
  i2360.heartEffectScale = i2361[20]
  i2360.breakHeartEffectScale = i2361[21]
  i2360.blinkEffectScale = i2361[22]
  i2360.mergeEffectScale = i2361[23]
  i2360.playMoveToTargetFinishSound = !!i2361[24]
  i2360.moveToTargetFinishFxType = i2361[25]
  return i2360
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i2362 = root || request.c( 'Ply_BobEffect' )
  var i2363 = data
  i2362.playOnEnable = !!i2363[0]
  i2362.useLocalMove = !!i2363[1]
  i2362.bobOffset = new pc.Vec3( i2363[2], i2363[3], i2363[4] )
  i2362.duration = i2363[5]
  i2362.ease = i2363[6]
  return i2362
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i2364 = root || request.c( 'Ply_TimerEvent' )
  var i2365 = data
  i2364.duration = i2365[0]
  i2364.playOnEnable = !!i2365[1]
  i2364.ignoreTimeScale = !!i2365[2]
  i2364.autoDisableOnComplete = !!i2365[3]
  i2364.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i2365[4], i2364.onTimerStart)
  i2364.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i2365[5], i2364.onTimerComplete)
  i2364.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i2365[6], i2364.onTimerStop)
  return i2364
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i2366 = root || request.c( 'InWaterItem' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'waterTarget')
  request.r(i2367[2], i2367[3], 0, i2366, 'cuttingBoardTarget')
  request.r(i2367[4], i2367[5], 0, i2366, 'plateTarget')
  var i2369 = i2367[6]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 2, i2368, '')
  }
  i2366.childObject = i2368
  request.r(i2367[7], i2367[8], 0, i2366, 'ply_TimerEvent')
  request.r(i2367[9], i2367[10], 0, i2366, 'ply_BobEffect')
  request.r(i2367[11], i2367[12], 0, i2366, 'collider1')
  request.r(i2367[13], i2367[14], 0, i2366, 'sink')
  i2366.isInWater = !!i2367[15]
  i2366.isOnCuttingBoard = !!i2367[16]
  i2366.isOnPlate = !!i2367[17]
  i2366.isClean = !!i2367[18]
  i2366.isCutDone = !!i2367[19]
  i2366.cuttingBoardColliderRadiusMultiplier = i2367[20]
  i2366.jumpToPlatePower = i2367[21]
  i2366.jumpToPlateDuration = i2367[22]
  i2366.jumpToPlateAfterCutDone = !!i2367[23]
  request.r(i2367[24], i2367[25], 0, i2366, 'plateFoodShadow')
  i2366.platePunchScale = new pc.Vec3( i2367[26], i2367[27], i2367[28] )
  i2366.platePunchDuration = i2367[29]
  i2366.onMoveToCuttingBoardComplete = request.d('UnityEngine.Events.UnityEvent', i2367[30], i2366.onMoveToCuttingBoardComplete)
  i2366.isDone = !!i2367[31]
  i2366.onProcess = !!i2367[32]
  request.r(i2367[33], i2367[34], 0, i2366, 'itemDraggable')
  request.r(i2367[35], i2367[36], 0, i2366, 'itemClickable')
  request.r(i2367[37], i2367[38], 0, i2366, 'itemStirring')
  request.r(i2367[39], i2367[40], 0, i2366, 'itemKnifeSpriteMaskCutter')
  request.r(i2367[41], i2367[42], 0, i2366, 'itemSpriteMaskPainter')
  request.r(i2367[43], i2367[44], 0, i2366, 'itemMoveToTarget')
  request.r(i2367[45], i2367[46], 0, i2366, 'animator')
  i2366.itemType = i2367[47]
  request.r(i2367[48], i2367[49], 0, i2366, 'spriteRenderer')
  i2366.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2367[50], i2366.onKnifeIn)
  i2366.heartEffectScale = i2367[51]
  i2366.breakHeartEffectScale = i2367[52]
  i2366.blinkEffectScale = i2367[53]
  i2366.mergeEffectScale = i2367[54]
  i2366.playMoveToTargetFinishSound = !!i2367[55]
  i2366.moveToTargetFinishFxType = i2367[56]
  return i2366
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2370 = root || request.c( 'ItemClickable' )
  var i2371 = data
  i2370.requiredClicks = i2371[0]
  i2370.infiniteClick = !!i2371[1]
  i2370.canClick = !!i2371[2]
  i2370.disableAfterClick = !!i2371[3]
  i2370.onClick = request.d('UnityEngine.Events.UnityEvent', i2371[4], i2370.onClick)
  var i2373 = i2371[5]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.add(request.d('UnityEngine.Events.UnityEvent', i2373[i + 0]));
  }
  i2370.sequentialOnClicks = i2372
  i2370.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2371[6], i2370.onClickComplete)
  return i2370
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i2376 = root || request.c( 'CuttingBoard' )
  var i2377 = data
  i2376.punchScale = new pc.Vec3( i2377[0], i2377[1], i2377[2] )
  i2376.punchDuration = i2377[3]
  i2376.isDone = !!i2377[4]
  i2376.onProcess = !!i2377[5]
  request.r(i2377[6], i2377[7], 0, i2376, 'itemDraggable')
  request.r(i2377[8], i2377[9], 0, i2376, 'itemClickable')
  request.r(i2377[10], i2377[11], 0, i2376, 'itemStirring')
  request.r(i2377[12], i2377[13], 0, i2376, 'itemKnifeSpriteMaskCutter')
  request.r(i2377[14], i2377[15], 0, i2376, 'itemSpriteMaskPainter')
  request.r(i2377[16], i2377[17], 0, i2376, 'itemMoveToTarget')
  request.r(i2377[18], i2377[19], 0, i2376, 'animator')
  i2376.itemType = i2377[20]
  request.r(i2377[21], i2377[22], 0, i2376, 'spriteRenderer')
  i2376.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2377[23], i2376.onKnifeIn)
  i2376.heartEffectScale = i2377[24]
  i2376.breakHeartEffectScale = i2377[25]
  i2376.blinkEffectScale = i2377[26]
  i2376.mergeEffectScale = i2377[27]
  i2376.playMoveToTargetFinishSound = !!i2377[28]
  i2376.moveToTargetFinishFxType = i2377[29]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2379 = data
  i2378.center = new pc.Vec3( i2379[0], i2379[1], i2379[2] )
  i2378.radius = i2379[3]
  i2378.height = i2379[4]
  i2378.direction = i2379[5]
  i2378.enabled = !!i2379[6]
  i2378.isTrigger = !!i2379[7]
  request.r(i2379[8], i2379[9], 0, i2378, 'material')
  return i2378
}

Deserializers["Knife"] = function (request, data, root) {
  var i2380 = root || request.c( 'Knife' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'knifeIdle')
  request.r(i2381[2], i2381[3], 0, i2380, 'knifeOnDrag')
  i2380.knifeOnDragRotationOffset = new pc.Vec3( i2381[4], i2381[5], i2381[6] )
  i2380.knifeOnDragRotateDuration = i2381[7]
  i2380.knifeOnDragRotateEase = i2381[8]
  i2380.isDone = !!i2381[9]
  i2380.onProcess = !!i2381[10]
  request.r(i2381[11], i2381[12], 0, i2380, 'itemDraggable')
  request.r(i2381[13], i2381[14], 0, i2380, 'itemClickable')
  request.r(i2381[15], i2381[16], 0, i2380, 'itemStirring')
  request.r(i2381[17], i2381[18], 0, i2380, 'itemKnifeSpriteMaskCutter')
  request.r(i2381[19], i2381[20], 0, i2380, 'itemSpriteMaskPainter')
  request.r(i2381[21], i2381[22], 0, i2380, 'itemMoveToTarget')
  request.r(i2381[23], i2381[24], 0, i2380, 'animator')
  i2380.itemType = i2381[25]
  request.r(i2381[26], i2381[27], 0, i2380, 'spriteRenderer')
  i2380.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2381[28], i2380.onKnifeIn)
  i2380.heartEffectScale = i2381[29]
  i2380.breakHeartEffectScale = i2381[30]
  i2380.blinkEffectScale = i2381[31]
  i2380.mergeEffectScale = i2381[32]
  i2380.playMoveToTargetFinishSound = !!i2381[33]
  i2380.moveToTargetFinishFxType = i2381[34]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2383 = data
  i2382.ambientIntensity = i2383[0]
  i2382.reflectionIntensity = i2383[1]
  i2382.ambientMode = i2383[2]
  i2382.ambientLight = new pc.Color(i2383[3], i2383[4], i2383[5], i2383[6])
  i2382.ambientSkyColor = new pc.Color(i2383[7], i2383[8], i2383[9], i2383[10])
  i2382.ambientGroundColor = new pc.Color(i2383[11], i2383[12], i2383[13], i2383[14])
  i2382.ambientEquatorColor = new pc.Color(i2383[15], i2383[16], i2383[17], i2383[18])
  i2382.fogColor = new pc.Color(i2383[19], i2383[20], i2383[21], i2383[22])
  i2382.fogEndDistance = i2383[23]
  i2382.fogStartDistance = i2383[24]
  i2382.fogDensity = i2383[25]
  i2382.fog = !!i2383[26]
  request.r(i2383[27], i2383[28], 0, i2382, 'skybox')
  i2382.fogMode = i2383[29]
  var i2385 = i2383[30]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2385[i + 0]) );
  }
  i2382.lightmaps = i2384
  i2382.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2383[31], i2382.lightProbes)
  i2382.lightmapsMode = i2383[32]
  i2382.mixedBakeMode = i2383[33]
  i2382.environmentLightingMode = i2383[34]
  i2382.ambientProbe = new pc.SphericalHarmonicsL2(i2383[35])
  i2382.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2383[36])
  i2382.useReferenceAmbientProbe = !!i2383[37]
  request.r(i2383[38], i2383[39], 0, i2382, 'customReflection')
  request.r(i2383[40], i2383[41], 0, i2382, 'defaultReflection')
  i2382.defaultReflectionMode = i2383[42]
  i2382.defaultReflectionResolution = i2383[43]
  i2382.sunLightObjectId = i2383[44]
  i2382.pixelLightCount = i2383[45]
  i2382.defaultReflectionHDR = !!i2383[46]
  i2382.hasLightDataAsset = !!i2383[47]
  i2382.hasManualGenerate = !!i2383[48]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'lightmapColor')
  request.r(i2389[2], i2389[3], 0, i2388, 'lightmapDirection')
  request.r(i2389[4], i2389[5], 0, i2388, 'shadowMask')
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2390 = root || new UnityEngine.LightProbes()
  var i2391 = data
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2401[i + 0]));
  }
  i2398.ShaderCompilationErrors = i2400
  i2398.name = i2399[1]
  i2398.guid = i2399[2]
  var i2403 = i2399[3]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2398.shaderDefinedKeywords = i2402
  var i2405 = i2399[4]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2405[i + 0]) );
  }
  i2398.passes = i2404
  var i2407 = i2399[5]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2407[i + 0]) );
  }
  i2398.usePasses = i2406
  var i2409 = i2399[6]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2409[i + 0]) );
  }
  i2398.defaultParameterValues = i2408
  request.r(i2399[7], i2399[8], 0, i2398, 'unityFallbackShader')
  i2398.readDepth = !!i2399[9]
  i2398.hasDepthOnlyPass = !!i2399[10]
  i2398.isCreatedByShaderGraph = !!i2399[11]
  i2398.disableBatching = !!i2399[12]
  i2398.compiled = !!i2399[13]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2413 = data
  i2412.shaderName = i2413[0]
  i2412.errorMessage = i2413[1]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2418 = root || new pc.UnityShaderPass()
  var i2419 = data
  i2418.id = i2419[0]
  i2418.subShaderIndex = i2419[1]
  i2418.name = i2419[2]
  i2418.passType = i2419[3]
  i2418.grabPassTextureName = i2419[4]
  i2418.usePass = !!i2419[5]
  i2418.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[6], i2418.zTest)
  i2418.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[7], i2418.zWrite)
  i2418.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[8], i2418.culling)
  i2418.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2419[9], i2418.blending)
  i2418.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2419[10], i2418.alphaBlending)
  i2418.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[11], i2418.colorWriteMask)
  i2418.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[12], i2418.offsetUnits)
  i2418.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[13], i2418.offsetFactor)
  i2418.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[14], i2418.stencilRef)
  i2418.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[15], i2418.stencilReadMask)
  i2418.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[16], i2418.stencilWriteMask)
  i2418.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[17], i2418.stencilOp)
  i2418.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[18], i2418.stencilOpFront)
  i2418.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[19], i2418.stencilOpBack)
  var i2421 = i2419[20]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2421[i + 0]) );
  }
  i2418.tags = i2420
  var i2423 = i2419[21]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2418.passDefinedKeywords = i2422
  var i2425 = i2419[22]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2425[i + 0]) );
  }
  i2418.passDefinedKeywordGroups = i2424
  var i2427 = i2419[23]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2427[i + 0]) );
  }
  i2418.variants = i2426
  var i2429 = i2419[24]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2429[i + 0]) );
  }
  i2418.excludedVariants = i2428
  i2418.hasDepthReader = !!i2419[25]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2431 = data
  i2430.val = i2431[0]
  i2430.name = i2431[1]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2433 = data
  i2432.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[0], i2432.src)
  i2432.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[1], i2432.dst)
  i2432.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[2], i2432.op)
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2435 = data
  i2434.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[0], i2434.pass)
  i2434.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[1], i2434.fail)
  i2434.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[2], i2434.zFail)
  i2434.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[3], i2434.comp)
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.value = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( i2445[i + 0] );
  }
  i2442.keywords = i2444
  i2442.hasDiscard = !!i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2449 = data
  i2448.passId = i2449[0]
  i2448.subShaderIndex = i2449[1]
  var i2451 = i2449[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2448.keywords = i2450
  i2448.vertexProgram = i2449[3]
  i2448.fragmentProgram = i2449[4]
  i2448.exportedForWebGl2 = !!i2449[5]
  i2448.readDepth = !!i2449[6]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'shader')
  i2454.pass = i2455[2]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2459 = data
  i2458.name = i2459[0]
  i2458.type = i2459[1]
  i2458.value = new pc.Vec4( i2459[2], i2459[3], i2459[4], i2459[5] )
  i2458.textureValue = i2459[6]
  i2458.shaderPropertyFlag = i2459[7]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2461 = data
  i2460.name = i2461[0]
  request.r(i2461[1], i2461[2], 0, i2460, 'texture')
  i2460.aabb = i2461[3]
  i2460.vertices = i2461[4]
  i2460.triangles = i2461[5]
  i2460.textureRect = UnityEngine.Rect.MinMaxRect(i2461[6], i2461[7], i2461[8], i2461[9])
  i2460.packedRect = UnityEngine.Rect.MinMaxRect(i2461[10], i2461[11], i2461[12], i2461[13])
  i2460.border = new pc.Vec4( i2461[14], i2461[15], i2461[16], i2461[17] )
  i2460.transparency = i2461[18]
  i2460.bounds = i2461[19]
  i2460.pixelsPerUnit = i2461[20]
  i2460.textureWidth = i2461[21]
  i2460.textureHeight = i2461[22]
  i2460.nativeSize = new pc.Vec2( i2461[23], i2461[24] )
  i2460.pivot = new pc.Vec2( i2461[25], i2461[26] )
  i2460.textureRectOffset = new pc.Vec2( i2461[27], i2461[28] )
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2463 = data
  i2462.name = i2463[0]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.wrapMode = i2465[1]
  i2464.isLooping = !!i2465[2]
  i2464.length = i2465[3]
  var i2467 = i2465[4]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2467[i + 0]) );
  }
  i2464.curves = i2466
  var i2469 = i2465[5]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2469[i + 0]) );
  }
  i2464.events = i2468
  i2464.halfPrecision = !!i2465[6]
  i2464._frameRate = i2465[7]
  i2464.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2465[8], i2464.localBounds)
  i2464.hasMuscleCurves = !!i2465[9]
  var i2471 = i2465[10]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( i2471[i + 0] );
  }
  i2464.clipMuscleConstant = i2470
  i2464.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2465[11], i2464.clipBindingConstant)
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2475 = data
  i2474.path = i2475[0]
  i2474.hash = i2475[1]
  i2474.componentType = i2475[2]
  i2474.property = i2475[3]
  i2474.keys = i2475[4]
  var i2477 = i2475[5]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2477[i + 0]) );
  }
  i2474.objectReferenceKeys = i2476
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2481 = data
  i2480.time = i2481[0]
  request.r(i2481[1], i2481[2], 0, i2480, 'value')
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2485 = data
  i2484.functionName = i2485[0]
  i2484.floatParameter = i2485[1]
  i2484.intParameter = i2485[2]
  i2484.stringParameter = i2485[3]
  request.r(i2485[4], i2485[5], 0, i2484, 'objectReferenceParameter')
  i2484.time = i2485[6]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2487 = data
  i2486.center = new pc.Vec3( i2487[0], i2487[1], i2487[2] )
  i2486.extends = new pc.Vec3( i2487[3], i2487[4], i2487[5] )
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( i2493[i + 0] );
  }
  i2490.genericBindings = i2492
  var i2495 = i2491[1]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2490.pptrCurveMapping = i2494
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2497 = data
  i2496.name = i2497[0]
  var i2499 = i2497[1]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2499[i + 0]) );
  }
  i2496.layers = i2498
  var i2501 = i2497[2]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2501[i + 0]) );
  }
  i2496.parameters = i2500
  i2496.animationClips = i2497[3]
  i2496.avatarUnsupported = i2497[4]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2505 = data
  i2504.name = i2505[0]
  i2504.defaultWeight = i2505[1]
  i2504.blendingMode = i2505[2]
  i2504.avatarMask = i2505[3]
  i2504.syncedLayerIndex = i2505[4]
  i2504.syncedLayerAffectsTiming = !!i2505[5]
  i2504.syncedLayers = i2505[6]
  i2504.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2505[7], i2504.stateMachine)
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2507 = data
  i2506.id = i2507[0]
  i2506.name = i2507[1]
  i2506.path = i2507[2]
  var i2509 = i2507[3]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2509[i + 0]) );
  }
  i2506.states = i2508
  var i2511 = i2507[4]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2511[i + 0]) );
  }
  i2506.machines = i2510
  var i2513 = i2507[5]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2513[i + 0]) );
  }
  i2506.entryStateTransitions = i2512
  var i2515 = i2507[6]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2515[i + 0]) );
  }
  i2506.exitStateTransitions = i2514
  var i2517 = i2507[7]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2517[i + 0]) );
  }
  i2506.anyStateTransitions = i2516
  i2506.defaultStateId = i2507[8]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2521 = data
  i2520.id = i2521[0]
  i2520.name = i2521[1]
  i2520.cycleOffset = i2521[2]
  i2520.cycleOffsetParameter = i2521[3]
  i2520.cycleOffsetParameterActive = !!i2521[4]
  i2520.mirror = !!i2521[5]
  i2520.mirrorParameter = i2521[6]
  i2520.mirrorParameterActive = !!i2521[7]
  i2520.motionId = i2521[8]
  i2520.nameHash = i2521[9]
  i2520.fullPathHash = i2521[10]
  i2520.speed = i2521[11]
  i2520.speedParameter = i2521[12]
  i2520.speedParameterActive = !!i2521[13]
  i2520.tag = i2521[14]
  i2520.tagHash = i2521[15]
  i2520.writeDefaultValues = !!i2521[16]
  var i2523 = i2521[17]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2520.behaviours = i2522
  var i2525 = i2521[18]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2525[i + 0]) );
  }
  i2520.transitions = i2524
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2531 = data
  i2530.fullPath = i2531[0]
  i2530.canTransitionToSelf = !!i2531[1]
  i2530.duration = i2531[2]
  i2530.exitTime = i2531[3]
  i2530.hasExitTime = !!i2531[4]
  i2530.hasFixedDuration = !!i2531[5]
  i2530.interruptionSource = i2531[6]
  i2530.offset = i2531[7]
  i2530.orderedInterruption = !!i2531[8]
  i2530.destinationStateId = i2531[9]
  i2530.isExit = !!i2531[10]
  i2530.mute = !!i2531[11]
  i2530.solo = !!i2531[12]
  var i2533 = i2531[13]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2533[i + 0]) );
  }
  i2530.conditions = i2532
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2539 = data
  i2538.destinationStateId = i2539[0]
  i2538.isExit = !!i2539[1]
  i2538.mute = !!i2539[2]
  i2538.solo = !!i2539[3]
  var i2541 = i2539[4]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2541[i + 0]) );
  }
  i2538.conditions = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2545 = data
  i2544.defaultBool = !!i2545[0]
  i2544.defaultFloat = i2545[1]
  i2544.defaultInt = i2545[2]
  i2544.name = i2545[3]
  i2544.nameHash = i2545[4]
  i2544.type = i2545[5]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2549 = data
  i2548.mode = i2549[0]
  i2548.parameter = i2549[1]
  i2548.threshold = i2549[2]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.bytes64 = i2551[1]
  i2550.data = i2551[2]
  return i2550
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2553 = data
  i2552.normalStyle = i2553[0]
  i2552.normalSpacingOffset = i2553[1]
  i2552.boldStyle = i2553[2]
  i2552.boldSpacing = i2553[3]
  i2552.italicStyle = i2553[4]
  i2552.tabSize = i2553[5]
  request.r(i2553[6], i2553[7], 0, i2552, 'atlas')
  i2552.m_SourceFontFileGUID = i2553[8]
  i2552.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2553[9], i2552.m_CreationSettings)
  request.r(i2553[10], i2553[11], 0, i2552, 'm_SourceFontFile')
  i2552.m_SourceFontFilePath = i2553[12]
  i2552.m_AtlasPopulationMode = i2553[13]
  i2552.InternalDynamicOS = !!i2553[14]
  var i2555 = i2553[15]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.add(request.d('UnityEngine.TextCore.Glyph', i2555[i + 0]));
  }
  i2552.m_GlyphTable = i2554
  var i2557 = i2553[16]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.add(request.d('TMPro.TMP_Character', i2557[i + 0]));
  }
  i2552.m_CharacterTable = i2556
  var i2559 = i2553[17]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 2, i2558, '')
  }
  i2552.m_AtlasTextures = i2558
  i2552.m_AtlasTextureIndex = i2553[18]
  i2552.m_IsMultiAtlasTexturesEnabled = !!i2553[19]
  i2552.m_GetFontFeatures = !!i2553[20]
  i2552.m_ClearDynamicDataOnBuild = !!i2553[21]
  i2552.m_AtlasWidth = i2553[22]
  i2552.m_AtlasHeight = i2553[23]
  i2552.m_AtlasPadding = i2553[24]
  i2552.m_AtlasRenderMode = i2553[25]
  var i2561 = i2553[26]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('UnityEngine.TextCore.GlyphRect', i2561[i + 0]));
  }
  i2552.m_UsedGlyphRects = i2560
  var i2563 = i2553[27]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.add(request.d('UnityEngine.TextCore.GlyphRect', i2563[i + 0]));
  }
  i2552.m_FreeGlyphRects = i2562
  i2552.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2553[28], i2552.m_FontFeatureTable)
  i2552.m_ShouldReimportFontFeatures = !!i2553[29]
  var i2565 = i2553[30]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 1, i2564, '')
  }
  i2552.m_FallbackFontAssetTable = i2564
  var i2567 = i2553[31]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('TMPro.TMP_FontWeightPair', i2567[i + 0]) );
  }
  i2552.m_FontWeightTable = i2566
  var i2569 = i2553[32]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('TMPro.TMP_FontWeightPair', i2569[i + 0]) );
  }
  i2552.fontWeights = i2568
  i2552.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2553[33], i2552.m_fontInfo)
  var i2571 = i2553[34]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('TMPro.TMP_Glyph', i2571[i + 0]));
  }
  i2552.m_glyphInfoList = i2570
  i2552.m_KerningTable = request.d('TMPro.KerningTable', i2553[35], i2552.m_KerningTable)
  var i2573 = i2553[36]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2552.fallbackFontAssets = i2572
  i2552.m_Version = i2553[37]
  i2552.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2553[38], i2552.m_FaceInfo)
  request.r(i2553[39], i2553[40], 0, i2552, 'm_Material')
  return i2552
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2575 = data
  i2574.sourceFontFileName = i2575[0]
  i2574.sourceFontFileGUID = i2575[1]
  i2574.faceIndex = i2575[2]
  i2574.pointSizeSamplingMode = i2575[3]
  i2574.pointSize = i2575[4]
  i2574.padding = i2575[5]
  i2574.paddingMode = i2575[6]
  i2574.packingMode = i2575[7]
  i2574.atlasWidth = i2575[8]
  i2574.atlasHeight = i2575[9]
  i2574.characterSetSelectionMode = i2575[10]
  i2574.characterSequence = i2575[11]
  i2574.referencedFontAssetGUID = i2575[12]
  i2574.referencedTextAssetGUID = i2575[13]
  i2574.fontStyle = i2575[14]
  i2574.fontStyleModifier = i2575[15]
  i2574.renderMode = i2575[16]
  i2574.includeFontFeatures = !!i2575[17]
  return i2574
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2579 = data
  i2578.m_Index = i2579[0]
  i2578.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2579[1], i2578.m_Metrics)
  i2578.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2579[2], i2578.m_GlyphRect)
  i2578.m_Scale = i2579[3]
  i2578.m_AtlasIndex = i2579[4]
  i2578.m_ClassDefinitionType = i2579[5]
  return i2578
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2581 = data
  i2580.m_Width = i2581[0]
  i2580.m_Height = i2581[1]
  i2580.m_HorizontalBearingX = i2581[2]
  i2580.m_HorizontalBearingY = i2581[3]
  i2580.m_HorizontalAdvance = i2581[4]
  return i2580
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2583 = data
  i2582.m_X = i2583[0]
  i2582.m_Y = i2583[1]
  i2582.m_Width = i2583[2]
  i2582.m_Height = i2583[3]
  return i2582
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.TMP_Character' )
  var i2587 = data
  i2586.m_ElementType = i2587[0]
  i2586.m_Unicode = i2587[1]
  i2586.m_GlyphIndex = i2587[2]
  i2586.m_Scale = i2587[3]
  return i2586
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2593 = data
  var i2595 = i2593[0]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('TMPro.MultipleSubstitutionRecord', i2595[i + 0]));
  }
  i2592.m_MultipleSubstitutionRecords = i2594
  var i2597 = i2593[1]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.LigatureSubstitutionRecord', i2597[i + 0]));
  }
  i2592.m_LigatureSubstitutionRecords = i2596
  var i2599 = i2593[2]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2599[i + 0]));
  }
  i2592.m_GlyphPairAdjustmentRecords = i2598
  var i2601 = i2593[3]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2601[i + 0]));
  }
  i2592.m_MarkToBaseAdjustmentRecords = i2600
  var i2603 = i2593[4]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2603[i + 0]));
  }
  i2592.m_MarkToMarkAdjustmentRecords = i2602
  return i2592
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2607 = data
  i2606.m_TargetGlyphID = i2607[0]
  i2606.m_SubstituteGlyphIDs = i2607[1]
  return i2606
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2610 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2611 = data
  i2610.m_ComponentGlyphIDs = i2611[0]
  i2610.m_LigatureGlyphID = i2611[1]
  return i2610
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2615 = data
  i2614.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2615[0], i2614.m_FirstAdjustmentRecord)
  i2614.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2615[1], i2614.m_SecondAdjustmentRecord)
  i2614.m_FeatureLookupFlags = i2615[2]
  return i2614
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2619 = data
  i2618.m_BaseGlyphID = i2619[0]
  i2618.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2619[1], i2618.m_BaseGlyphAnchorPoint)
  i2618.m_MarkGlyphID = i2619[2]
  i2618.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2619[3], i2618.m_MarkPositionAdjustment)
  return i2618
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2623 = data
  i2622.m_BaseMarkGlyphID = i2623[0]
  i2622.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2623[1], i2622.m_BaseMarkGlyphAnchorPoint)
  i2622.m_CombiningMarkGlyphID = i2623[2]
  i2622.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2623[3], i2622.m_CombiningMarkPositionAdjustment)
  return i2622
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2629 = data
  request.r(i2629[0], i2629[1], 0, i2628, 'regularTypeface')
  request.r(i2629[2], i2629[3], 0, i2628, 'italicTypeface')
  return i2628
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2631 = data
  i2630.Name = i2631[0]
  i2630.PointSize = i2631[1]
  i2630.Scale = i2631[2]
  i2630.CharacterCount = i2631[3]
  i2630.LineHeight = i2631[4]
  i2630.Baseline = i2631[5]
  i2630.Ascender = i2631[6]
  i2630.CapHeight = i2631[7]
  i2630.Descender = i2631[8]
  i2630.CenterLine = i2631[9]
  i2630.SuperscriptOffset = i2631[10]
  i2630.SubscriptOffset = i2631[11]
  i2630.SubSize = i2631[12]
  i2630.Underline = i2631[13]
  i2630.UnderlineThickness = i2631[14]
  i2630.strikethrough = i2631[15]
  i2630.strikethroughThickness = i2631[16]
  i2630.TabWidth = i2631[17]
  i2630.Padding = i2631[18]
  i2630.AtlasWidth = i2631[19]
  i2630.AtlasHeight = i2631[20]
  return i2630
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2635 = data
  i2634.id = i2635[0]
  i2634.x = i2635[1]
  i2634.y = i2635[2]
  i2634.width = i2635[3]
  i2634.height = i2635[4]
  i2634.xOffset = i2635[5]
  i2634.yOffset = i2635[6]
  i2634.xAdvance = i2635[7]
  i2634.scale = i2635[8]
  return i2634
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2636 = root || request.c( 'TMPro.KerningTable' )
  var i2637 = data
  var i2639 = i2637[0]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('TMPro.KerningPair', i2639[i + 0]));
  }
  i2636.kerningPairs = i2638
  return i2636
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.KerningPair' )
  var i2643 = data
  i2642.xOffset = i2643[0]
  i2642.m_FirstGlyph = i2643[1]
  i2642.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2643[2], i2642.m_FirstGlyphAdjustments)
  i2642.m_SecondGlyph = i2643[3]
  i2642.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2643[4], i2642.m_SecondGlyphAdjustments)
  i2642.m_IgnoreSpacingAdjustments = !!i2643[5]
  return i2642
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2645 = data
  i2644.m_FaceIndex = i2645[0]
  i2644.m_FamilyName = i2645[1]
  i2644.m_StyleName = i2645[2]
  i2644.m_PointSize = i2645[3]
  i2644.m_Scale = i2645[4]
  i2644.m_UnitsPerEM = i2645[5]
  i2644.m_LineHeight = i2645[6]
  i2644.m_AscentLine = i2645[7]
  i2644.m_CapLine = i2645[8]
  i2644.m_MeanLine = i2645[9]
  i2644.m_Baseline = i2645[10]
  i2644.m_DescentLine = i2645[11]
  i2644.m_SuperscriptOffset = i2645[12]
  i2644.m_SuperscriptSize = i2645[13]
  i2644.m_SubscriptOffset = i2645[14]
  i2644.m_SubscriptSize = i2645[15]
  i2644.m_UnderlineOffset = i2645[16]
  i2644.m_UnderlineThickness = i2645[17]
  i2644.m_StrikethroughOffset = i2645[18]
  i2644.m_StrikethroughThickness = i2645[19]
  i2644.m_TabWidth = i2645[20]
  return i2644
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2646 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2647 = data
  i2646.useSafeMode = !!i2647[0]
  i2646.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2647[1], i2646.safeModeOptions)
  i2646.timeScale = i2647[2]
  i2646.unscaledTimeScale = i2647[3]
  i2646.useSmoothDeltaTime = !!i2647[4]
  i2646.maxSmoothUnscaledTime = i2647[5]
  i2646.rewindCallbackMode = i2647[6]
  i2646.showUnityEditorReport = !!i2647[7]
  i2646.logBehaviour = i2647[8]
  i2646.drawGizmos = !!i2647[9]
  i2646.defaultRecyclable = !!i2647[10]
  i2646.defaultAutoPlay = i2647[11]
  i2646.defaultUpdateType = i2647[12]
  i2646.defaultTimeScaleIndependent = !!i2647[13]
  i2646.defaultEaseType = i2647[14]
  i2646.defaultEaseOvershootOrAmplitude = i2647[15]
  i2646.defaultEasePeriod = i2647[16]
  i2646.defaultAutoKill = !!i2647[17]
  i2646.defaultLoopType = i2647[18]
  i2646.debugMode = !!i2647[19]
  i2646.debugStoreTargetId = !!i2647[20]
  i2646.showPreviewPanel = !!i2647[21]
  i2646.storeSettingsLocation = i2647[22]
  i2646.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2647[23], i2646.modules)
  i2646.createASMDEF = !!i2647[24]
  i2646.showPlayingTweens = !!i2647[25]
  i2646.showPausedTweens = !!i2647[26]
  return i2646
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2648 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2649 = data
  i2648.logBehaviour = i2649[0]
  i2648.nestedTweenFailureBehaviour = i2649[1]
  return i2648
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2650 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2651 = data
  i2650.showPanel = !!i2651[0]
  i2650.audioEnabled = !!i2651[1]
  i2650.physicsEnabled = !!i2651[2]
  i2650.physics2DEnabled = !!i2651[3]
  i2650.spriteEnabled = !!i2651[4]
  i2650.uiEnabled = !!i2651[5]
  i2650.uiToolkitEnabled = !!i2651[6]
  i2650.textMeshProEnabled = !!i2651[7]
  i2650.tk2DEnabled = !!i2651[8]
  i2650.deAudioEnabled = !!i2651[9]
  i2650.deUnityExtendedEnabled = !!i2651[10]
  i2650.epoOutlineEnabled = !!i2651[11]
  return i2650
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.TMP_Settings' )
  var i2653 = data
  i2652.assetVersion = i2653[0]
  i2652.m_TextWrappingMode = i2653[1]
  i2652.m_enableKerning = !!i2653[2]
  var i2655 = i2653[3]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(i2655[i + 0]);
  }
  i2652.m_ActiveFontFeatures = i2654
  i2652.m_enableExtraPadding = !!i2653[4]
  i2652.m_enableTintAllSprites = !!i2653[5]
  i2652.m_enableParseEscapeCharacters = !!i2653[6]
  i2652.m_EnableRaycastTarget = !!i2653[7]
  i2652.m_GetFontFeaturesAtRuntime = !!i2653[8]
  i2652.m_missingGlyphCharacter = i2653[9]
  i2652.m_ClearDynamicDataOnBuild = !!i2653[10]
  i2652.m_warningsDisabled = !!i2653[11]
  request.r(i2653[12], i2653[13], 0, i2652, 'm_defaultFontAsset')
  i2652.m_defaultFontAssetPath = i2653[14]
  i2652.m_defaultFontSize = i2653[15]
  i2652.m_defaultAutoSizeMinRatio = i2653[16]
  i2652.m_defaultAutoSizeMaxRatio = i2653[17]
  i2652.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2653[18], i2653[19] )
  i2652.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2653[20], i2653[21] )
  i2652.m_autoSizeTextContainer = !!i2653[22]
  i2652.m_IsTextObjectScaleStatic = !!i2653[23]
  var i2657 = i2653[24]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 1, i2656, '')
  }
  i2652.m_fallbackFontAssets = i2656
  i2652.m_matchMaterialPreset = !!i2653[25]
  i2652.m_HideSubTextObjects = !!i2653[26]
  request.r(i2653[27], i2653[28], 0, i2652, 'm_defaultSpriteAsset')
  i2652.m_defaultSpriteAssetPath = i2653[29]
  i2652.m_enableEmojiSupport = !!i2653[30]
  i2652.m_MissingCharacterSpriteUnicode = i2653[31]
  var i2659 = i2653[32]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 1, i2658, '')
  }
  i2652.m_EmojiFallbackTextAssets = i2658
  i2652.m_defaultColorGradientPresetsPath = i2653[33]
  request.r(i2653[34], i2653[35], 0, i2652, 'm_defaultStyleSheet')
  i2652.m_StyleSheetsResourcePath = i2653[36]
  request.r(i2653[37], i2653[38], 0, i2652, 'm_leadingCharacters')
  request.r(i2653[39], i2653[40], 0, i2652, 'm_followingCharacters')
  i2652.m_UseModernHangulLineBreakingRules = !!i2653[41]
  return i2652
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'spriteSheet')
  var i2665 = i2663[2]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.add(request.d('TMPro.TMP_Sprite', i2665[i + 0]));
  }
  i2662.spriteInfoList = i2664
  var i2667 = i2663[3]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 1, i2666, '')
  }
  i2662.fallbackSpriteAssets = i2666
  var i2669 = i2663[4]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.TMP_SpriteCharacter', i2669[i + 0]));
  }
  i2662.m_SpriteCharacterTable = i2668
  var i2671 = i2663[5]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('TMPro.TMP_SpriteGlyph', i2671[i + 0]));
  }
  i2662.m_GlyphTable = i2670
  i2662.m_Version = i2663[6]
  i2662.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2663[7], i2662.m_FaceInfo)
  request.r(i2663[8], i2663[9], 0, i2662, 'm_Material')
  return i2662
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.hashCode = i2675[1]
  i2674.unicode = i2675[2]
  i2674.pivot = new pc.Vec2( i2675[3], i2675[4] )
  request.r(i2675[5], i2675[6], 0, i2674, 'sprite')
  i2674.id = i2675[7]
  i2674.x = i2675[8]
  i2674.y = i2675[9]
  i2674.width = i2675[10]
  i2674.height = i2675[11]
  i2674.xOffset = i2675[12]
  i2674.yOffset = i2675[13]
  i2674.xAdvance = i2675[14]
  i2674.scale = i2675[15]
  return i2674
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2681 = data
  i2680.m_Name = i2681[0]
  i2680.m_ElementType = i2681[1]
  i2680.m_Unicode = i2681[2]
  i2680.m_GlyphIndex = i2681[3]
  i2680.m_Scale = i2681[4]
  return i2680
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2685 = data
  request.r(i2685[0], i2685[1], 0, i2684, 'sprite')
  i2684.m_Index = i2685[2]
  i2684.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2685[3], i2684.m_Metrics)
  i2684.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2685[4], i2684.m_GlyphRect)
  i2684.m_Scale = i2685[5]
  i2684.m_AtlasIndex = i2685[6]
  i2684.m_ClassDefinitionType = i2685[7]
  return i2684
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2687 = data
  var i2689 = i2687[0]
  var i2688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.add(request.d('TMPro.TMP_Style', i2689[i + 0]));
  }
  i2686.m_StyleList = i2688
  return i2686
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.TMP_Style' )
  var i2693 = data
  i2692.m_Name = i2693[0]
  i2692.m_HashCode = i2693[1]
  i2692.m_OpeningDefinition = i2693[2]
  i2692.m_ClosingDefinition = i2693[3]
  i2692.m_OpeningTagArray = i2693[4]
  i2692.m_ClosingTagArray = i2693[5]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2695 = data
  var i2697 = i2695[0]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2697[i + 0]) );
  }
  i2694.files = i2696
  i2694.componentToPrefabIds = i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2701 = data
  i2700.path = i2701[0]
  request.r(i2701[1], i2701[2], 0, i2700, 'unityObject')
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2703 = data
  var i2705 = i2703[0]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2705[i + 0]) );
  }
  i2702.scriptsExecutionOrder = i2704
  var i2707 = i2703[1]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2707[i + 0]) );
  }
  i2702.sortingLayers = i2706
  var i2709 = i2703[2]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2709[i + 0]) );
  }
  i2702.cullingLayers = i2708
  i2702.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2703[3], i2702.timeSettings)
  i2702.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2703[4], i2702.physicsSettings)
  i2702.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2703[5], i2702.physics2DSettings)
  i2702.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2703[6], i2702.qualitySettings)
  i2702.enableRealtimeShadows = !!i2703[7]
  i2702.enableAutoInstancing = !!i2703[8]
  i2702.enableStaticBatching = !!i2703[9]
  i2702.enableDynamicBatching = !!i2703[10]
  i2702.lightmapEncodingQuality = i2703[11]
  i2702.desiredColorSpace = i2703[12]
  var i2711 = i2703[13]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( i2711[i + 0] );
  }
  i2702.allTags = i2710
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2715 = data
  i2714.name = i2715[0]
  i2714.value = i2715[1]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2719 = data
  i2718.id = i2719[0]
  i2718.name = i2719[1]
  i2718.value = i2719[2]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2723 = data
  i2722.id = i2723[0]
  i2722.name = i2723[1]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2725 = data
  i2724.fixedDeltaTime = i2725[0]
  i2724.maximumDeltaTime = i2725[1]
  i2724.timeScale = i2725[2]
  i2724.maximumParticleTimestep = i2725[3]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2727 = data
  i2726.gravity = new pc.Vec3( i2727[0], i2727[1], i2727[2] )
  i2726.defaultSolverIterations = i2727[3]
  i2726.bounceThreshold = i2727[4]
  i2726.autoSyncTransforms = !!i2727[5]
  i2726.autoSimulation = !!i2727[6]
  var i2729 = i2727[7]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2729[i + 0]) );
  }
  i2726.collisionMatrix = i2728
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2733 = data
  i2732.enabled = !!i2733[0]
  i2732.layerId = i2733[1]
  i2732.otherLayerId = i2733[2]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'material')
  i2734.gravity = new pc.Vec2( i2735[2], i2735[3] )
  i2734.positionIterations = i2735[4]
  i2734.velocityIterations = i2735[5]
  i2734.velocityThreshold = i2735[6]
  i2734.maxLinearCorrection = i2735[7]
  i2734.maxAngularCorrection = i2735[8]
  i2734.maxTranslationSpeed = i2735[9]
  i2734.maxRotationSpeed = i2735[10]
  i2734.baumgarteScale = i2735[11]
  i2734.baumgarteTOIScale = i2735[12]
  i2734.timeToSleep = i2735[13]
  i2734.linearSleepTolerance = i2735[14]
  i2734.angularSleepTolerance = i2735[15]
  i2734.defaultContactOffset = i2735[16]
  i2734.autoSimulation = !!i2735[17]
  i2734.queriesHitTriggers = !!i2735[18]
  i2734.queriesStartInColliders = !!i2735[19]
  i2734.callbacksOnDisable = !!i2735[20]
  i2734.reuseCollisionCallbacks = !!i2735[21]
  i2734.autoSyncTransforms = !!i2735[22]
  var i2737 = i2735[23]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2737[i + 0]) );
  }
  i2734.collisionMatrix = i2736
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2741 = data
  i2740.enabled = !!i2741[0]
  i2740.layerId = i2741[1]
  i2740.otherLayerId = i2741[2]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2745[i + 0]) );
  }
  i2742.qualityLevels = i2744
  var i2747 = i2743[1]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2742.names = i2746
  i2742.shadows = i2743[2]
  i2742.anisotropicFiltering = i2743[3]
  i2742.antiAliasing = i2743[4]
  i2742.lodBias = i2743[5]
  i2742.shadowCascades = i2743[6]
  i2742.shadowDistance = i2743[7]
  i2742.shadowmaskMode = i2743[8]
  i2742.shadowProjection = i2743[9]
  i2742.shadowResolution = i2743[10]
  i2742.softParticles = !!i2743[11]
  i2742.softVegetation = !!i2743[12]
  i2742.activeColorSpace = i2743[13]
  i2742.desiredColorSpace = i2743[14]
  i2742.masterTextureLimit = i2743[15]
  i2742.maxQueuedFrames = i2743[16]
  i2742.particleRaycastBudget = i2743[17]
  i2742.pixelLightCount = i2743[18]
  i2742.realtimeReflectionProbes = !!i2743[19]
  i2742.shadowCascade2Split = i2743[20]
  i2742.shadowCascade4Split = new pc.Vec3( i2743[21], i2743[22], i2743[23] )
  i2742.streamingMipmapsActive = !!i2743[24]
  i2742.vSyncCount = i2743[25]
  i2742.asyncUploadBufferSize = i2743[26]
  i2742.asyncUploadTimeSlice = i2743[27]
  i2742.billboardsFaceCameraPosition = !!i2743[28]
  i2742.shadowNearPlaneOffset = i2743[29]
  i2742.streamingMipmapsMemoryBudget = i2743[30]
  i2742.maximumLODLevel = i2743[31]
  i2742.streamingMipmapsAddAllCameras = !!i2743[32]
  i2742.streamingMipmapsMaxLevelReduction = i2743[33]
  i2742.streamingMipmapsRenderersPerFrame = i2743[34]
  i2742.resolutionScalingFixedDPIFactor = i2743[35]
  i2742.streamingMipmapsMaxFileIORequests = i2743[36]
  i2742.currentQualityLevel = i2743[37]
  return i2742
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2751 = data
  i2750.m_GlyphIndex = i2751[0]
  i2750.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2751[1], i2750.m_GlyphValueRecord)
  return i2750
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2752 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2753 = data
  i2752.m_XCoordinate = i2753[0]
  i2752.m_YCoordinate = i2753[1]
  return i2752
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2755 = data
  i2754.m_XPositionAdjustment = i2755[0]
  i2754.m_YPositionAdjustment = i2755[1]
  return i2754
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2757 = data
  i2756.xPlacement = i2757[0]
  i2756.yPlacement = i2757[1]
  i2756.xAdvance = i2757[2]
  i2756.yAdvance = i2757[3]
  return i2756
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2759 = data
  i2758.m_XPlacement = i2759[0]
  i2758.m_YPlacement = i2759[1]
  i2758.m_XAdvance = i2759[2]
  i2758.m_YAdvance = i2759[3]
  return i2758
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[22],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[22],"98":[99],"100":[101],"102":[101],"21":[14],"58":[103],"52":[103],"104":[103],"105":[103],"106":[103],"107":[14],"108":[17,14],"109":[99],"110":[17,14],"111":[25,99],"112":[99],"113":[99,114],"115":[77],"116":[84],"117":[118],"119":[120],"121":[5],"122":[22],"123":[124],"125":[48],"126":[21],"127":[14],"128":[99,14],"27":[14,17],"129":[14],"130":[17,14],"131":[99],"132":[17,14],"133":[14],"134":[135],"136":[135],"137":[135],"138":[14],"139":[14],"24":[21],"16":[17,14],"140":[14],"23":[21],"141":[14],"142":[14],"143":[14],"144":[14],"145":[14],"146":[14],"147":[14],"148":[14],"149":[14],"150":[17,14],"151":[14],"152":[14],"153":[14],"154":[14],"155":[17,14],"156":[14],"157":[48],"158":[48],"49":[48],"159":[48],"160":[22],"161":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","ProgressBar","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","FlourSmoke","WaterSplash","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","HandTutManager","Knife","InWaterItem","Item","Ply_ToggleEvent","SinkBlock","SortChildByZPos","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Sink","ItemDraggable","ItemMoveToTarget","UnityEngine.BoxCollider","UnityEngine.SpriteMask","Ply_BobEffect","Ply_TimerEvent","ItemClickable","CuttingBoard","UnityEngine.CapsuleCollider","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "13.8";

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

Deserializers.buildID = "279f6284-9865-438d-bf67-146a32d35f95";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

