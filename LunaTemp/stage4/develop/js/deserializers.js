var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.JointSpring' )
  var i2095 = data
  i2094.spring = i2095[0]
  i2094.damper = i2095[1]
  i2094.targetPosition = i2095[2]
  return i2094
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.JointMotor' )
  var i2097 = data
  i2096.m_TargetVelocity = i2097[0]
  i2096.m_Force = i2097[1]
  i2096.m_FreeSpin = i2097[2]
  return i2096
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.JointLimits' )
  var i2099 = data
  i2098.m_Min = i2099[0]
  i2098.m_Max = i2099[1]
  i2098.m_Bounciness = i2099[2]
  i2098.m_BounceMinVelocity = i2099[3]
  i2098.m_ContactDistance = i2099[4]
  i2098.minBounce = i2099[5]
  i2098.maxBounce = i2099[6]
  return i2098
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.JointDrive' )
  var i2101 = data
  i2100.m_PositionSpring = i2101[0]
  i2100.m_PositionDamper = i2101[1]
  i2100.m_MaximumForce = i2101[2]
  i2100.m_UseAcceleration = i2101[3]
  return i2100
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2103 = data
  i2102.m_Spring = i2103[0]
  i2102.m_Damper = i2103[1]
  return i2102
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2105 = data
  i2104.m_Limit = i2105[0]
  i2104.m_Bounciness = i2105[1]
  i2104.m_ContactDistance = i2105[2]
  return i2104
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2107 = data
  i2106.m_ExtremumSlip = i2107[0]
  i2106.m_ExtremumValue = i2107[1]
  i2106.m_AsymptoteSlip = i2107[2]
  i2106.m_AsymptoteValue = i2107[3]
  i2106.m_Stiffness = i2107[4]
  return i2106
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2109 = data
  i2108.m_LowerAngle = i2109[0]
  i2108.m_UpperAngle = i2109[1]
  return i2108
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2111 = data
  i2110.m_MotorSpeed = i2111[0]
  i2110.m_MaximumMotorTorque = i2111[1]
  return i2110
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2113 = data
  i2112.m_DampingRatio = i2113[0]
  i2112.m_Frequency = i2113[1]
  i2112.m_Angle = i2113[2]
  return i2112
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2115 = data
  i2114.m_LowerTranslation = i2115[0]
  i2114.m_UpperTranslation = i2115[1]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2116 = root || new pc.UnityMaterial()
  var i2117 = data
  i2116.name = i2117[0]
  request.r(i2117[1], i2117[2], 0, i2116, 'shader')
  i2116.renderQueue = i2117[3]
  i2116.enableInstancing = !!i2117[4]
  var i2119 = i2117[5]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2119[i + 0]) );
  }
  i2116.floatParameters = i2118
  var i2121 = i2117[6]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2121[i + 0]) );
  }
  i2116.colorParameters = i2120
  var i2123 = i2117[7]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2123[i + 0]) );
  }
  i2116.vectorParameters = i2122
  var i2125 = i2117[8]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2125[i + 0]) );
  }
  i2116.textureParameters = i2124
  var i2127 = i2117[9]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2127[i + 0]) );
  }
  i2116.materialFlags = i2126
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.value = i2131[1]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.value = new pc.Color(i2135[1], i2135[2], i2135[3], i2135[4])
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.value = new pc.Vec4( i2139[1], i2139[2], i2139[3], i2139[4] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2143 = data
  i2142.name = i2143[0]
  request.r(i2143[1], i2143[2], 0, i2142, 'value')
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.enabled = !!i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.width = i2149[1]
  i2148.height = i2149[2]
  i2148.mipmapCount = i2149[3]
  i2148.anisoLevel = i2149[4]
  i2148.filterMode = i2149[5]
  i2148.hdr = !!i2149[6]
  i2148.format = i2149[7]
  i2148.wrapMode = i2149[8]
  i2148.alphaIsTransparency = !!i2149[9]
  i2148.alphaSource = i2149[10]
  i2148.graphicsFormat = i2149[11]
  i2148.sRGBTexture = !!i2149[12]
  i2148.desiredColorSpace = i2149[13]
  i2148.wrapU = i2149[14]
  i2148.wrapV = i2149[15]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2151 = data
  i2150.position = new pc.Vec3( i2151[0], i2151[1], i2151[2] )
  i2150.scale = new pc.Vec3( i2151[3], i2151[4], i2151[5] )
  i2150.rotation = new pc.Quat(i2151[6], i2151[7], i2151[8], i2151[9])
  return i2150
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2152 = root || request.c( 'HeartEffect' )
  var i2153 = data
  i2152.defaultLifeTime = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'tf')
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2155 = data
  i2154.color = new pc.Color(i2155[0], i2155[1], i2155[2], i2155[3])
  request.r(i2155[4], i2155[5], 0, i2154, 'sprite')
  i2154.flipX = !!i2155[6]
  i2154.flipY = !!i2155[7]
  i2154.drawMode = i2155[8]
  i2154.size = new pc.Vec2( i2155[9], i2155[10] )
  i2154.tileMode = i2155[11]
  i2154.adaptiveModeThreshold = i2155[12]
  i2154.maskInteraction = i2155[13]
  i2154.spriteSortPoint = i2155[14]
  i2154.enabled = !!i2155[15]
  request.r(i2155[16], i2155[17], 0, i2154, 'sharedMaterial')
  var i2157 = i2155[18]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2154.sharedMaterials = i2156
  i2154.receiveShadows = !!i2155[19]
  i2154.shadowCastingMode = i2155[20]
  i2154.sortingLayerID = i2155[21]
  i2154.sortingOrder = i2155[22]
  i2154.lightmapIndex = i2155[23]
  i2154.lightmapSceneIndex = i2155[24]
  i2154.lightmapScaleOffset = new pc.Vec4( i2155[25], i2155[26], i2155[27], i2155[28] )
  i2154.lightProbeUsage = i2155[29]
  i2154.reflectionProbeUsage = i2155[30]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.tagId = i2161[1]
  i2160.enabled = !!i2161[2]
  i2160.isStatic = !!i2161[3]
  i2160.layer = i2161[4]
  return i2160
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2162 = root || request.c( 'HeartBreakEffect' )
  var i2163 = data
  i2162.defaultLifeTime = i2163[0]
  request.r(i2163[1], i2163[2], 0, i2162, 'tf')
  return i2162
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2164 = root || request.c( 'BlinkEffect' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'tf')
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'mesh')
  i2166.meshCount = i2167[2]
  i2166.activeVertexStreamsCount = i2167[3]
  i2166.alignment = i2167[4]
  i2166.renderMode = i2167[5]
  i2166.sortMode = i2167[6]
  i2166.lengthScale = i2167[7]
  i2166.velocityScale = i2167[8]
  i2166.cameraVelocityScale = i2167[9]
  i2166.normalDirection = i2167[10]
  i2166.sortingFudge = i2167[11]
  i2166.minParticleSize = i2167[12]
  i2166.maxParticleSize = i2167[13]
  i2166.pivot = new pc.Vec3( i2167[14], i2167[15], i2167[16] )
  request.r(i2167[17], i2167[18], 0, i2166, 'trailMaterial')
  i2166.applyActiveColorSpace = !!i2167[19]
  i2166.enabled = !!i2167[20]
  request.r(i2167[21], i2167[22], 0, i2166, 'sharedMaterial')
  var i2169 = i2167[23]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 2, i2168, '')
  }
  i2166.sharedMaterials = i2168
  i2166.receiveShadows = !!i2167[24]
  i2166.shadowCastingMode = i2167[25]
  i2166.sortingLayerID = i2167[26]
  i2166.sortingOrder = i2167[27]
  i2166.lightmapIndex = i2167[28]
  i2166.lightmapSceneIndex = i2167[29]
  i2166.lightmapScaleOffset = new pc.Vec4( i2167[30], i2167[31], i2167[32], i2167[33] )
  i2166.lightProbeUsage = i2167[34]
  i2166.reflectionProbeUsage = i2167[35]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2171 = data
  i2170.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2171[0], i2170.main)
  i2170.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2171[1], i2170.colorBySpeed)
  i2170.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2171[2], i2170.colorOverLifetime)
  i2170.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2171[3], i2170.emission)
  i2170.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2171[4], i2170.rotationBySpeed)
  i2170.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2171[5], i2170.rotationOverLifetime)
  i2170.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2171[6], i2170.shape)
  i2170.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2171[7], i2170.sizeBySpeed)
  i2170.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2171[8], i2170.sizeOverLifetime)
  i2170.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2171[9], i2170.textureSheetAnimation)
  i2170.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2171[10], i2170.velocityOverLifetime)
  i2170.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2171[11], i2170.noise)
  i2170.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2171[12], i2170.inheritVelocity)
  i2170.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2171[13], i2170.forceOverLifetime)
  i2170.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2171[14], i2170.limitVelocityOverLifetime)
  i2170.useAutoRandomSeed = !!i2171[15]
  i2170.randomSeed = i2171[16]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemMain()
  var i2173 = data
  i2172.duration = i2173[0]
  i2172.loop = !!i2173[1]
  i2172.prewarm = !!i2173[2]
  i2172.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[3], i2172.startDelay)
  i2172.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[4], i2172.startLifetime)
  i2172.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[5], i2172.startSpeed)
  i2172.startSize3D = !!i2173[6]
  i2172.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[7], i2172.startSizeX)
  i2172.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[8], i2172.startSizeY)
  i2172.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[9], i2172.startSizeZ)
  i2172.startRotation3D = !!i2173[10]
  i2172.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[11], i2172.startRotationX)
  i2172.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[12], i2172.startRotationY)
  i2172.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[13], i2172.startRotationZ)
  i2172.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2173[14], i2172.startColor)
  i2172.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[15], i2172.gravityModifier)
  i2172.simulationSpace = i2173[16]
  request.r(i2173[17], i2173[18], 0, i2172, 'customSimulationSpace')
  i2172.simulationSpeed = i2173[19]
  i2172.useUnscaledTime = !!i2173[20]
  i2172.scalingMode = i2173[21]
  i2172.playOnAwake = !!i2173[22]
  i2172.maxParticles = i2173[23]
  i2172.emitterVelocityMode = i2173[24]
  i2172.stopAction = i2173[25]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2174 = root || new pc.MinMaxCurve()
  var i2175 = data
  i2174.mode = i2175[0]
  i2174.curveMin = new pc.AnimationCurve( { keys_flow: i2175[1] } )
  i2174.curveMax = new pc.AnimationCurve( { keys_flow: i2175[2] } )
  i2174.curveMultiplier = i2175[3]
  i2174.constantMin = i2175[4]
  i2174.constantMax = i2175[5]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2176 = root || new pc.MinMaxGradient()
  var i2177 = data
  i2176.mode = i2177[0]
  i2176.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2177[1], i2176.gradientMin)
  i2176.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2177[2], i2176.gradientMax)
  i2176.colorMin = new pc.Color(i2177[3], i2177[4], i2177[5], i2177[6])
  i2176.colorMax = new pc.Color(i2177[7], i2177[8], i2177[9], i2177[10])
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2179 = data
  i2178.mode = i2179[0]
  var i2181 = i2179[1]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2181[i + 0]) );
  }
  i2178.colorKeys = i2180
  var i2183 = i2179[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2183[i + 0]) );
  }
  i2178.alphaKeys = i2182
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemColorBySpeed()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2185[1], i2184.color)
  i2184.range = new pc.Vec2( i2185[2], i2185[3] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2189 = data
  i2188.color = new pc.Color(i2189[0], i2189[1], i2189[2], i2189[3])
  i2188.time = i2189[4]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2193 = data
  i2192.alpha = i2193[0]
  i2192.time = i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemColorOverLifetime()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2195[1], i2194.color)
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemEmitter()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.rateOverTime)
  i2196.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.rateOverDistance)
  var i2199 = i2197[3]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2199[i + 0]) );
  }
  i2196.bursts = i2198
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemBurst()
  var i2203 = data
  i2202.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[0], i2202.count)
  i2202.cycleCount = i2203[1]
  i2202.minCount = i2203[2]
  i2202.maxCount = i2203[3]
  i2202.repeatInterval = i2203[4]
  i2202.time = i2203[5]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemRotationBySpeed()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.x)
  i2204.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.y)
  i2204.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.z)
  i2204.separateAxes = !!i2205[4]
  i2204.range = new pc.Vec2( i2205[5], i2205[6] )
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.x)
  i2206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.y)
  i2206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[3], i2206.z)
  i2206.separateAxes = !!i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemShape()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.shapeType = i2209[1]
  i2208.randomDirectionAmount = i2209[2]
  i2208.sphericalDirectionAmount = i2209[3]
  i2208.randomPositionAmount = i2209[4]
  i2208.alignToDirection = !!i2209[5]
  i2208.radius = i2209[6]
  i2208.radiusMode = i2209[7]
  i2208.radiusSpread = i2209[8]
  i2208.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[9], i2208.radiusSpeed)
  i2208.radiusThickness = i2209[10]
  i2208.angle = i2209[11]
  i2208.length = i2209[12]
  i2208.boxThickness = new pc.Vec3( i2209[13], i2209[14], i2209[15] )
  i2208.meshShapeType = i2209[16]
  request.r(i2209[17], i2209[18], 0, i2208, 'mesh')
  request.r(i2209[19], i2209[20], 0, i2208, 'meshRenderer')
  request.r(i2209[21], i2209[22], 0, i2208, 'skinnedMeshRenderer')
  i2208.useMeshMaterialIndex = !!i2209[23]
  i2208.meshMaterialIndex = i2209[24]
  i2208.useMeshColors = !!i2209[25]
  i2208.normalOffset = i2209[26]
  i2208.arc = i2209[27]
  i2208.arcMode = i2209[28]
  i2208.arcSpread = i2209[29]
  i2208.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[30], i2208.arcSpeed)
  i2208.donutRadius = i2209[31]
  i2208.position = new pc.Vec3( i2209[32], i2209[33], i2209[34] )
  i2208.rotation = new pc.Vec3( i2209[35], i2209[36], i2209[37] )
  i2208.scale = new pc.Vec3( i2209[38], i2209[39], i2209[40] )
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemSizeBySpeed()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[1], i2210.x)
  i2210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.y)
  i2210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.z)
  i2210.separateAxes = !!i2211[4]
  i2210.range = new pc.Vec2( i2211[5], i2211[6] )
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[1], i2212.x)
  i2212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.y)
  i2212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.z)
  i2212.separateAxes = !!i2213[4]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.mode = i2215[1]
  i2214.animation = i2215[2]
  i2214.numTilesX = i2215[3]
  i2214.numTilesY = i2215[4]
  i2214.useRandomRow = !!i2215[5]
  i2214.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[6], i2214.frameOverTime)
  i2214.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[7], i2214.startFrame)
  i2214.cycleCount = i2215[8]
  i2214.rowIndex = i2215[9]
  i2214.flipU = i2215[10]
  i2214.flipV = i2215[11]
  i2214.spriteCount = i2215[12]
  var i2217 = i2215[13]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2214.sprites = i2216
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[1], i2220.x)
  i2220.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[2], i2220.y)
  i2220.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[3], i2220.z)
  i2220.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[4], i2220.radial)
  i2220.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[5], i2220.speedModifier)
  i2220.space = i2221[6]
  i2220.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[7], i2220.orbitalX)
  i2220.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[8], i2220.orbitalY)
  i2220.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[9], i2220.orbitalZ)
  i2220.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[10], i2220.orbitalOffsetX)
  i2220.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[11], i2220.orbitalOffsetY)
  i2220.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[12], i2220.orbitalOffsetZ)
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2222 = root || new pc.ParticleSystemNoise()
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.separateAxes = !!i2223[1]
  i2222.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[2], i2222.strengthX)
  i2222.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[3], i2222.strengthY)
  i2222.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[4], i2222.strengthZ)
  i2222.frequency = i2223[5]
  i2222.damping = !!i2223[6]
  i2222.octaveCount = i2223[7]
  i2222.octaveMultiplier = i2223[8]
  i2222.octaveScale = i2223[9]
  i2222.quality = i2223[10]
  i2222.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[11], i2222.scrollSpeed)
  i2222.scrollSpeedMultiplier = i2223[12]
  i2222.remapEnabled = !!i2223[13]
  i2222.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[14], i2222.remapX)
  i2222.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[15], i2222.remapY)
  i2222.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[16], i2222.remapZ)
  i2222.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[17], i2222.positionAmount)
  i2222.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[18], i2222.rotationAmount)
  i2222.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[19], i2222.sizeAmount)
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemInheritVelocity()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.mode = i2225[1]
  i2224.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[2], i2224.curve)
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemForceOverLifetime()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[1], i2226.x)
  i2226.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.y)
  i2226.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.z)
  i2226.space = i2227[4]
  i2226.randomized = !!i2227[5]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2228 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2229 = data
  i2228.enabled = !!i2229[0]
  i2228.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[1], i2228.limit)
  i2228.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[2], i2228.limitX)
  i2228.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[3], i2228.limitY)
  i2228.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[4], i2228.limitZ)
  i2228.dampen = i2229[5]
  i2228.separateAxes = !!i2229[6]
  i2228.space = i2229[7]
  i2228.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[8], i2228.drag)
  i2228.multiplyDragByParticleSize = !!i2229[9]
  i2228.multiplyDragByParticleVelocity = !!i2229[10]
  return i2228
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2230 = root || request.c( 'StarExploreFX' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'tf')
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2233 = data
  i2232.pivot = new pc.Vec2( i2233[0], i2233[1] )
  i2232.anchorMin = new pc.Vec2( i2233[2], i2233[3] )
  i2232.anchorMax = new pc.Vec2( i2233[4], i2233[5] )
  i2232.sizeDelta = new pc.Vec2( i2233[6], i2233[7] )
  i2232.anchoredPosition3D = new pc.Vec3( i2233[8], i2233[9], i2233[10] )
  i2232.rotation = new pc.Quat(i2233[11], i2233[12], i2233[13], i2233[14])
  i2232.scale = new pc.Vec3( i2233[15], i2233[16], i2233[17] )
  return i2232
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2234 = root || request.c( 'ClockTimer' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'fillImage')
  request.r(i2235[2], i2235[3], 0, i2234, 'tf')
  i2234.spawnZoomDuration = i2235[4]
  i2234.despawnZoomDuration = i2235[5]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2237 = data
  i2236.cullTransparentMesh = !!i2237[0]
  return i2236
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.Image' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'm_Sprite')
  i2238.m_Type = i2239[2]
  i2238.m_PreserveAspect = !!i2239[3]
  i2238.m_FillCenter = !!i2239[4]
  i2238.m_FillMethod = i2239[5]
  i2238.m_FillAmount = i2239[6]
  i2238.m_FillClockwise = !!i2239[7]
  i2238.m_FillOrigin = i2239[8]
  i2238.m_UseSpriteMesh = !!i2239[9]
  i2238.m_PixelsPerUnitMultiplier = i2239[10]
  request.r(i2239[11], i2239[12], 0, i2238, 'm_Material')
  i2238.m_Maskable = !!i2239[13]
  i2238.m_Color = new pc.Color(i2239[14], i2239[15], i2239[16], i2239[17])
  i2238.m_RaycastTarget = !!i2239[18]
  i2238.m_RaycastPadding = new pc.Vec4( i2239[19], i2239[20], i2239[21], i2239[22] )
  return i2238
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2240 = root || request.c( 'WaterSplash' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'tf')
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2243 = data
  i2242.center = new pc.Vec3( i2243[0], i2243[1], i2243[2] )
  i2242.radius = i2243[3]
  i2242.enabled = !!i2243[4]
  i2242.isTrigger = !!i2243[5]
  request.r(i2243[6], i2243[7], 0, i2242, 'material')
  return i2242
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2244 = root || request.c( 'ItemDraggable' )
  var i2245 = data
  i2244.isDraggable = !!i2245[0]
  request.r(i2245[1], i2245[2], 0, i2244, 'returnTransform')
  i2244.setParentToReturnTransform = !!i2245[3]
  i2244.returnToStartOnDragFailed = !!i2245[4]
  i2244.returnToExactReturnTransformPosition = !!i2245[5]
  i2244.cacheStartPosWhenStart = !!i2245[6]
  i2244.targetItemType = i2245[7]
  request.r(i2245[8], i2245[9], 0, i2244, 'item')
  i2244.checkState = !!i2245[10]
  request.r(i2245[11], i2245[12], 0, i2244, 'shadowObject')
  i2244.playReturnToStartFinishSound = !!i2245[13]
  i2244.returnToStartFinishFxType = i2245[14]
  i2244.spawnBreakHeartOnDropFail = !!i2245[15]
  i2244.playBeginDragSound = !!i2245[16]
  i2244.beginDragFxType = i2245[17]
  i2244.liftOffset = i2245[18]
  i2244.dragScaleMultiplier = i2245[19]
  i2244.dragScaleDuration = i2245[20]
  i2244.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2245[21], i2244.onBeginDrag)
  i2244.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2245[22], i2244.onDropSuccess)
  i2244.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2245[23], i2244.onDropFail)
  i2244.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2245[24], i2244.onReturnToStartComplete)
  return i2244
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2247 = data
  i2246.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2247[0], i2246.m_PersistentCalls)
  return i2246
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2249 = data
  var i2251 = i2249[0]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.add(request.d('UnityEngine.Events.PersistentCall', i2251[i + 0]));
  }
  i2248.m_Calls = i2250
  return i2248
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'm_Target')
  i2254.m_TargetAssemblyTypeName = i2255[2]
  i2254.m_MethodName = i2255[3]
  i2254.m_Mode = i2255[4]
  i2254.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2255[5], i2254.m_Arguments)
  i2254.m_CallState = i2255[6]
  return i2254
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_ObjectArgument')
  i2256.m_ObjectArgumentAssemblyTypeName = i2257[2]
  i2256.m_IntArgument = i2257[3]
  i2256.m_FloatArgument = i2257[4]
  i2256.m_StringArgument = i2257[5]
  i2256.m_BoolArgument = !!i2257[6]
  return i2256
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2258 = root || request.c( 'ItemMoveToTarget' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'defaultTarget')
  i2258.duration = i2259[2]
  i2258.useAnimationCurve = !!i2259[3]
  i2258.moveCurve = new pc.AnimationCurve( { keys_flow: i2259[4] } )
  i2258.easeType = i2259[5]
  i2258.moveType = i2259[6]
  i2258.jumpPower = i2259[7]
  i2258.numJumps = i2259[8]
  i2258.rotate360DuringJump = !!i2259[9]
  i2258.flipRotate = !!i2259[10]
  i2258.angleRotate = i2259[11]
  i2258.scaleOnMove = !!i2259[12]
  i2258.endScaleMultiplier = i2259[13]
  i2258.setParentToTarget = !!i2259[14]
  i2258.onComplete = request.d('UnityEngine.Events.UnityEvent', i2259[15], i2258.onComplete)
  i2258.lockInputWhileMoving = !!i2259[16]
  i2258.resetParentBeforeMove = !!i2259[17]
  return i2258
}

Deserializers["Paper"] = function (request, data, root) {
  var i2260 = root || request.c( 'Paper' )
  var i2261 = data
  i2260.isUse = !!i2261[0]
  request.r(i2261[1], i2261[2], 0, i2260, 'paper')
  request.r(i2261[3], i2261[4], 0, i2260, 'paperTrash')
  request.r(i2261[5], i2261[6], 0, i2260, 'itemDragRaycastTarget')
  request.r(i2261[7], i2261[8], 0, i2260, 'curentCollider')
  i2260.isDone = !!i2261[9]
  i2260.onProcess = !!i2261[10]
  i2260.requireMatchingTargetTypeForHandTut = !!i2261[11]
  request.r(i2261[12], i2261[13], 0, i2260, 'itemDraggable')
  request.r(i2261[14], i2261[15], 0, i2260, 'itemClickable')
  request.r(i2261[16], i2261[17], 0, i2260, 'itemStirring')
  request.r(i2261[18], i2261[19], 0, i2260, 'itemKnifeSpriteMaskCutter')
  request.r(i2261[20], i2261[21], 0, i2260, 'itemSpriteMaskPainter')
  request.r(i2261[22], i2261[23], 0, i2260, 'itemDragSpriteMaskPainter')
  request.r(i2261[24], i2261[25], 0, i2260, 'itemMoveToTarget')
  request.r(i2261[26], i2261[27], 0, i2260, 'animator')
  i2260.itemType = i2261[28]
  request.r(i2261[29], i2261[30], 0, i2260, 'spriteRenderer')
  i2260.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2261[31], i2260.onKnifeIn)
  request.r(i2261[32], i2261[33], 0, i2260, 'knifePos')
  i2260.heartEffectScale = i2261[34]
  i2260.breakHeartEffectScale = i2261[35]
  i2260.blinkEffectScale = i2261[36]
  i2260.mergeEffectScale = i2261[37]
  i2260.playMoveToTargetFinishSound = !!i2261[38]
  i2260.moveToTargetFinishFxType = i2261[39]
  i2260.fxSpawnZPos = i2261[40]
  request.r(i2261[41], i2261[42], 0, i2260, 'tf')
  return i2260
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2262 = root || request.c( 'ItemDragRaycastTarget' )
  var i2263 = data
  i2262.targetToFind = i2263[0]
  i2262.targetItemTypeWhenHit = i2263[1]
  i2262.targetItemTypeOnDropFail = i2263[2]
  request.r(i2263[3], i2263[4], 0, i2262, 'raycastPoint')
  i2262.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2263[5] )
  i2262.rayDistance = i2263[6]
  i2262.updateMoveDefaultTarget = !!i2263[7]
  i2262.invokeOnlyWhenTargetChanged = !!i2263[8]
  i2262.targetChangeEnabled = !!i2263[9]
  i2262.restoreTargetOnDropFail = !!i2263[10]
  i2262.resetCurrentTargetOnNoHit = !!i2263[11]
  i2262.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2263[12], i2262.onTargetFound)
  i2262.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2263[13], i2262.onTargetFoundWithItem)
  return i2262
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2264 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2265 = data
  i2264.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2265[0], i2264.m_PersistentCalls)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'animatorController')
  request.r(i2267[2], i2267[3], 0, i2266, 'avatar')
  i2266.updateMode = i2267[4]
  i2266.hasTransformHierarchy = !!i2267[5]
  i2266.applyRootMotion = !!i2267[6]
  var i2269 = i2267[7]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 2, i2268, '')
  }
  i2266.humanBones = i2268
  i2266.enabled = !!i2267[8]
  return i2266
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2272 = root || request.c( 'ItemSound' )
  var i2273 = data
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.index = i2275[1]
  i2274.startup = !!i2275[2]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2277 = data
  i2276.planeDistance = i2277[0]
  i2276.referencePixelsPerUnit = i2277[1]
  i2276.isFallbackOverlay = !!i2277[2]
  i2276.renderMode = i2277[3]
  i2276.renderOrder = i2277[4]
  i2276.sortingLayerName = i2277[5]
  i2276.sortingOrder = i2277[6]
  i2276.scaleFactor = i2277[7]
  request.r(i2277[8], i2277[9], 0, i2276, 'worldCamera')
  i2276.overrideSorting = !!i2277[10]
  i2276.pixelPerfect = !!i2277[11]
  i2276.targetDisplay = i2277[12]
  i2276.overridePixelPerfect = !!i2277[13]
  i2276.enabled = !!i2277[14]
  return i2276
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2279 = data
  i2278.m_UiScaleMode = i2279[0]
  i2278.m_ReferencePixelsPerUnit = i2279[1]
  i2278.m_ScaleFactor = i2279[2]
  i2278.m_ReferenceResolution = new pc.Vec2( i2279[3], i2279[4] )
  i2278.m_ScreenMatchMode = i2279[5]
  i2278.m_MatchWidthOrHeight = i2279[6]
  i2278.m_PhysicalUnit = i2279[7]
  i2278.m_FallbackScreenDPI = i2279[8]
  i2278.m_DefaultSpriteDPI = i2279[9]
  i2278.m_DynamicPixelsPerUnit = i2279[10]
  i2278.m_PresetInfoIsWorld = !!i2279[11]
  return i2278
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2281 = data
  i2280.m_IgnoreReversedGraphics = !!i2281[0]
  i2280.m_BlockingObjects = i2281[1]
  i2280.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2281[2] )
  return i2280
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2283 = data
  i2282.m_hasFontAssetChanged = !!i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'm_baseMaterial')
  i2282.m_maskOffset = new pc.Vec4( i2283[3], i2283[4], i2283[5], i2283[6] )
  i2282.m_text = i2283[7]
  i2282.m_isRightToLeft = !!i2283[8]
  request.r(i2283[9], i2283[10], 0, i2282, 'm_fontAsset')
  request.r(i2283[11], i2283[12], 0, i2282, 'm_sharedMaterial')
  var i2285 = i2283[13]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2282.m_fontSharedMaterials = i2284
  request.r(i2283[14], i2283[15], 0, i2282, 'm_fontMaterial')
  var i2287 = i2283[16]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2282.m_fontMaterials = i2286
  i2282.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2283[17], i2283[18], i2283[19], i2283[20])
  i2282.m_fontColor = new pc.Color(i2283[21], i2283[22], i2283[23], i2283[24])
  i2282.m_enableVertexGradient = !!i2283[25]
  i2282.m_colorMode = i2283[26]
  i2282.m_fontColorGradient = request.d('TMPro.VertexGradient', i2283[27], i2282.m_fontColorGradient)
  request.r(i2283[28], i2283[29], 0, i2282, 'm_fontColorGradientPreset')
  request.r(i2283[30], i2283[31], 0, i2282, 'm_spriteAsset')
  i2282.m_tintAllSprites = !!i2283[32]
  request.r(i2283[33], i2283[34], 0, i2282, 'm_StyleSheet')
  i2282.m_TextStyleHashCode = i2283[35]
  i2282.m_overrideHtmlColors = !!i2283[36]
  i2282.m_faceColor = UnityEngine.Color32.ConstructColor(i2283[37], i2283[38], i2283[39], i2283[40])
  i2282.m_fontSize = i2283[41]
  i2282.m_fontSizeBase = i2283[42]
  i2282.m_fontWeight = i2283[43]
  i2282.m_enableAutoSizing = !!i2283[44]
  i2282.m_fontSizeMin = i2283[45]
  i2282.m_fontSizeMax = i2283[46]
  i2282.m_fontStyle = i2283[47]
  i2282.m_HorizontalAlignment = i2283[48]
  i2282.m_VerticalAlignment = i2283[49]
  i2282.m_textAlignment = i2283[50]
  i2282.m_characterSpacing = i2283[51]
  i2282.m_wordSpacing = i2283[52]
  i2282.m_lineSpacing = i2283[53]
  i2282.m_lineSpacingMax = i2283[54]
  i2282.m_paragraphSpacing = i2283[55]
  i2282.m_charWidthMaxAdj = i2283[56]
  i2282.m_TextWrappingMode = i2283[57]
  i2282.m_wordWrappingRatios = i2283[58]
  i2282.m_overflowMode = i2283[59]
  request.r(i2283[60], i2283[61], 0, i2282, 'm_linkedTextComponent')
  request.r(i2283[62], i2283[63], 0, i2282, 'parentLinkedComponent')
  i2282.m_enableKerning = !!i2283[64]
  var i2289 = i2283[65]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(i2289[i + 0]);
  }
  i2282.m_ActiveFontFeatures = i2288
  i2282.m_enableExtraPadding = !!i2283[66]
  i2282.checkPaddingRequired = !!i2283[67]
  i2282.m_isRichText = !!i2283[68]
  i2282.m_parseCtrlCharacters = !!i2283[69]
  i2282.m_isOrthographic = !!i2283[70]
  i2282.m_isCullingEnabled = !!i2283[71]
  i2282.m_horizontalMapping = i2283[72]
  i2282.m_verticalMapping = i2283[73]
  i2282.m_uvLineOffset = i2283[74]
  i2282.m_geometrySortingOrder = i2283[75]
  i2282.m_IsTextObjectScaleStatic = !!i2283[76]
  i2282.m_VertexBufferAutoSizeReduction = !!i2283[77]
  i2282.m_useMaxVisibleDescender = !!i2283[78]
  i2282.m_pageToDisplay = i2283[79]
  i2282.m_margin = new pc.Vec4( i2283[80], i2283[81], i2283[82], i2283[83] )
  i2282.m_isUsingLegacyAnimationComponent = !!i2283[84]
  i2282.m_isVolumetricText = !!i2283[85]
  request.r(i2283[86], i2283[87], 0, i2282, 'm_Material')
  i2282.m_EmojiFallbackSupport = !!i2283[88]
  i2282.m_Maskable = !!i2283[89]
  i2282.m_Color = new pc.Color(i2283[90], i2283[91], i2283[92], i2283[93])
  i2282.m_RaycastTarget = !!i2283[94]
  i2282.m_RaycastPadding = new pc.Vec4( i2283[95], i2283[96], i2283[97], i2283[98] )
  return i2282
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.VertexGradient' )
  var i2291 = data
  i2290.topLeft = new pc.Color(i2291[0], i2291[1], i2291[2], i2291[3])
  i2290.topRight = new pc.Color(i2291[4], i2291[5], i2291[6], i2291[7])
  i2290.bottomLeft = new pc.Color(i2291[8], i2291[9], i2291[10], i2291[11])
  i2290.bottomRight = new pc.Color(i2291[12], i2291[13], i2291[14], i2291[15])
  return i2290
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Button' )
  var i2295 = data
  i2294.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2295[0], i2294.m_OnClick)
  i2294.m_Navigation = request.d('UnityEngine.UI.Navigation', i2295[1], i2294.m_Navigation)
  i2294.m_Transition = i2295[2]
  i2294.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2295[3], i2294.m_Colors)
  i2294.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2295[4], i2294.m_SpriteState)
  i2294.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2295[5], i2294.m_AnimationTriggers)
  i2294.m_Interactable = !!i2295[6]
  request.r(i2295[7], i2295[8], 0, i2294, 'm_TargetGraphic')
  return i2294
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2297 = data
  i2296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2297[0], i2296.m_PersistentCalls)
  return i2296
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2299 = data
  i2298.m_Mode = i2299[0]
  i2298.m_WrapAround = !!i2299[1]
  request.r(i2299[2], i2299[3], 0, i2298, 'm_SelectOnUp')
  request.r(i2299[4], i2299[5], 0, i2298, 'm_SelectOnDown')
  request.r(i2299[6], i2299[7], 0, i2298, 'm_SelectOnLeft')
  request.r(i2299[8], i2299[9], 0, i2298, 'm_SelectOnRight')
  return i2298
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2301 = data
  i2300.m_NormalColor = new pc.Color(i2301[0], i2301[1], i2301[2], i2301[3])
  i2300.m_HighlightedColor = new pc.Color(i2301[4], i2301[5], i2301[6], i2301[7])
  i2300.m_PressedColor = new pc.Color(i2301[8], i2301[9], i2301[10], i2301[11])
  i2300.m_SelectedColor = new pc.Color(i2301[12], i2301[13], i2301[14], i2301[15])
  i2300.m_DisabledColor = new pc.Color(i2301[16], i2301[17], i2301[18], i2301[19])
  i2300.m_ColorMultiplier = i2301[20]
  i2300.m_FadeDuration = i2301[21]
  return i2300
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'm_HighlightedSprite')
  request.r(i2303[2], i2303[3], 0, i2302, 'm_PressedSprite')
  request.r(i2303[4], i2303[5], 0, i2302, 'm_SelectedSprite')
  request.r(i2303[6], i2303[7], 0, i2302, 'm_DisabledSprite')
  return i2302
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2305 = data
  i2304.m_NormalTrigger = i2305[0]
  i2304.m_HighlightedTrigger = i2305[1]
  i2304.m_PressedTrigger = i2305[2]
  i2304.m_SelectedTrigger = i2305[3]
  i2304.m_DisabledTrigger = i2305[4]
  return i2304
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'm_FillRect')
  request.r(i2307[2], i2307[3], 0, i2306, 'm_HandleRect')
  i2306.m_Direction = i2307[4]
  i2306.m_MinValue = i2307[5]
  i2306.m_MaxValue = i2307[6]
  i2306.m_WholeNumbers = !!i2307[7]
  i2306.m_Value = i2307[8]
  i2306.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2307[9], i2306.m_OnValueChanged)
  i2306.m_Navigation = request.d('UnityEngine.UI.Navigation', i2307[10], i2306.m_Navigation)
  i2306.m_Transition = i2307[11]
  i2306.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2307[12], i2306.m_Colors)
  i2306.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2307[13], i2306.m_SpriteState)
  i2306.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2307[14], i2306.m_AnimationTriggers)
  i2306.m_Interactable = !!i2307[15]
  request.r(i2307[16], i2307[17], 0, i2306, 'm_TargetGraphic')
  return i2306
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2309 = data
  i2308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2309[0], i2308.m_PersistentCalls)
  return i2308
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i2310 = root || request.c( 'ProgressSlider' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'progressSlider')
  i2310.maxProgressItems = i2311[2]
  i2310.startProgressItems = i2311[3]
  request.r(i2311[4], i2311[5], 0, i2310, 'progressText')
  return i2310
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2312 = root || request.c( 'Ply_Pool' )
  var i2313 = data
  var i2315 = i2313[0]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Ply_Pool+PoolAmount', i2315[i + 0]) );
  }
  i2312.poolAmounts = i2314
  request.r(i2313[1], i2313[2], 0, i2312, 'poolHolder')
  return i2312
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2318 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2319 = data
  i2318.type = i2319[0]
  i2318.amount = i2319[1]
  request.r(i2319[2], i2319[3], 0, i2318, 'gameUnit')
  return i2318
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2320 = root || request.c( 'Ply_SoundManager' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Ply_SoundManager+FxAudio', i2323[i + 0]) );
  }
  i2320.fxAudios = i2322
  request.r(i2321[1], i2321[2], 0, i2320, 'sound')
  return i2320
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2326 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2327 = data
  i2326.fxType = i2327[0]
  request.r(i2327[1], i2327[2], 0, i2326, 'audioClip')
  i2326.volume = i2327[3]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'clip')
  request.r(i2329[2], i2329[3], 0, i2328, 'outputAudioMixerGroup')
  i2328.playOnAwake = !!i2329[4]
  i2328.loop = !!i2329[5]
  i2328.time = i2329[6]
  i2328.volume = i2329[7]
  i2328.pitch = i2329[8]
  i2328.enabled = !!i2329[9]
  return i2328
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2330 = root || request.c( 'GameManager' )
  var i2331 = data
  i2330.isPlaying = !!i2331[0]
  i2330.isTutorial = !!i2331[1]
  i2330.isGotoStore = !!i2331[2]
  i2330.isLoseGame = !!i2331[3]
  i2330.countMove = i2331[4]
  i2330.currentLayer = i2331[5]
  request.r(i2331[6], i2331[7], 0, i2330, 'trashCan')
  request.r(i2331[8], i2331[9], 0, i2330, 'step1')
  request.r(i2331[10], i2331[11], 0, i2330, 'paperBox')
  return i2330
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2332 = root || request.c( 'UIManager' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'winUI')
  request.r(i2333[2], i2333[3], 0, i2332, 'loseUI')
  request.r(i2333[4], i2333[5], 0, i2332, 'tutorial')
  request.r(i2333[6], i2333[7], 0, i2332, 'verticalUI')
  request.r(i2333[8], i2333[9], 0, i2332, 'horizontalUI')
  request.r(i2333[10], i2333[11], 0, i2332, 'downloadBtn')
  request.r(i2333[12], i2333[13], 0, i2332, 'horizontalDownloadBtn')
  request.r(i2333[14], i2333[15], 0, i2332, 'textAnim')
  i2332.isGoogleBuild = !!i2333[16]
  i2332.screenWidth = i2333[17]
  i2332.screenHeight = i2333[18]
  i2332.scaleHeightOnWidth = i2333[19]
  i2332.isVertical = !!i2333[20]
  i2332.isScreenVertical = !!i2333[21]
  request.r(i2333[22], i2333[23], 0, i2332, 'cam')
  i2332.verticalUIHeightOnWidthRatio = i2333[24]
  i2332.scaleCameraOnValidate = !!i2333[25]
  i2332.screenVerticalHeightOnWidthRatio = i2333[26]
  i2332.useContinuousScaling = !!i2333[27]
  i2332.baseOrthographicSize = i2333[28]
  i2332.baseAspect = i2333[29]
  i2332.landscapeSizeRatio = i2333[30]
  i2332.defaultPortraitSizeRatio = i2333[31]
  var i2335 = i2333[32]
  var i2334 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.add(request.d('ScreenScaleStep', i2335[i + 0]));
  }
  i2332.discreteScaleSteps = i2334
  i2332.usePerspectiveCamera = !!i2333[33]
  request.r(i2333[34], i2333[35], 0, i2332, 'perspectiveFocus')
  i2332.perspectiveFocusDistance = i2333[36]
  i2332.perspectivePadding = i2333[37]
  i2332.fitRendererBounds = !!i2333[38]
  request.r(i2333[39], i2333[40], 0, i2332, 'boundsRoot')
  var i2337 = i2333[41]
  var i2336 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 1, i2336, '')
  }
  i2332.boundsRenderers = i2336
  return i2332
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2340 = root || request.c( 'ScreenScaleStep' )
  var i2341 = data
  i2340.heightOnWidthRatio = i2341[0]
  i2340.orthographicSize = i2341[1]
  return i2340
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2344 = root || request.c( 'InputManager' )
  var i2345 = data
  i2344.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2345[0] )
  i2344.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2345[1] )
  i2344.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2345[2] )
  i2344.isDragging = !!i2345[3]
  return i2344
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2346 = root || request.c( 'HandTutManager' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 1, i2348, '')
  }
  i2346.items = i2348
  request.r(i2347[1], i2347[2], 0, i2346, 'knife')
  request.r(i2347[3], i2347[4], 0, i2346, 'knife2')
  request.r(i2347[5], i2347[6], 0, i2346, 'handTutObject')
  request.r(i2347[7], i2347[8], 0, i2346, 'tapToCookObject')
  request.r(i2347[9], i2347[10], 0, i2346, 'oilItem')
  request.r(i2347[11], i2347[12], 0, i2346, 'stoveToggleEvent')
  request.r(i2347[13], i2347[14], 0, i2346, 'waterToggleEvent')
  request.r(i2347[15], i2347[16], 0, i2346, 'sinkBlock')
  var i2351 = i2347[17]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 1, i2350, '')
  }
  i2346.itemsInWater = i2350
  i2346.noDelayItemCount = i2347[18]
  i2346.breakHeartNoDelayThreshold = i2347[19]
  i2346.shortIdleDelay = i2347[20]
  i2346.maxHandTutShowCount = i2347[21]
  i2346.showSinkWaterTutorialOnStart = !!i2347[22]
  i2346.waitForBowlIntro = !!i2347[23]
  i2346.idleDelay = i2347[24]
  i2346.firstHandTutDelay = i2347[25]
  i2346.phaseHandTutDelay = i2347[26]
  i2346.moveDuration = i2347[27]
  i2346.dragFadeDuration = i2347[28]
  i2346.clickScaleDuration = i2347[29]
  i2346.waitAtEndDuration = i2347[30]
  i2346.handZPosition = i2347[31]
  i2346.clickScaleMultiplier = i2347[32]
  i2346.moveEase = i2347[33]
  i2346.currentDelayHandtut = i2347[34]
  i2346.isBreakingHeartNoDelay = !!i2347[35]
  i2346.tutoredItemCount = i2347[36]
  return i2346
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2356 = root || request.c( 'PhaseManager' )
  var i2357 = data
  var i2359 = i2357[0]
  var i2358 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.add(request.d('PhaseData', i2359[i + 0]));
  }
  i2356.phases = i2358
  i2356.transitionType = i2357[1]
  i2356.transitionDuration = i2357[2]
  i2356.delayBeforeNextPhase = i2357[3]
  i2356.offScreenLeftX = i2357[4]
  i2356.offScreenRightX = i2357[5]
  i2356.offScreenBottomY = i2357[6]
  i2356.offScreenTopY = i2357[7]
  i2356.centerScreenX = i2357[8]
  request.r(i2357[9], i2357[10], 0, i2356, 'phaseTransitionObject')
  i2356.phaseTransitionObjectDuration = i2357[11]
  i2356.currentPhaseIndex = i2357[12]
  i2356.currentStepCount = i2357[13]
  i2356.isECPopup = !!i2357[14]
  return i2356
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2362 = root || request.c( 'PhaseData' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'phaseObject')
  i2362.totalSteps = i2363[2]
  i2362.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2363[3], i2362.onPhaseReady)
  return i2362
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2364 = root || request.c( 'ItemTypeDoneManager' )
  var i2365 = data
  var i2367 = i2365[0]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2367[i + 0]));
  }
  i2364.itemTypeGroups = i2366
  return i2364
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2370 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2371 = data
  i2370.itemType = i2371[0]
  var i2373 = i2371[1]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 1, i2372, '')
  }
  i2370.items = i2372
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2375 = data
  i2374.aspect = i2375[0]
  i2374.orthographic = !!i2375[1]
  i2374.orthographicSize = i2375[2]
  i2374.backgroundColor = new pc.Color(i2375[3], i2375[4], i2375[5], i2375[6])
  i2374.nearClipPlane = i2375[7]
  i2374.farClipPlane = i2375[8]
  i2374.fieldOfView = i2375[9]
  i2374.depth = i2375[10]
  i2374.clearFlags = i2375[11]
  i2374.cullingMask = i2375[12]
  i2374.rect = i2375[13]
  request.r(i2375[14], i2375[15], 0, i2374, 'targetTexture')
  i2374.usePhysicalProperties = !!i2375[16]
  i2374.focalLength = i2375[17]
  i2374.sensorSize = new pc.Vec2( i2375[18], i2375[19] )
  i2374.lensShift = new pc.Vec2( i2375[20], i2375[21] )
  i2374.gateFit = i2375[22]
  i2374.commandBufferCount = i2375[23]
  i2374.cameraType = i2375[24]
  i2374.enabled = !!i2375[25]
  return i2374
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'm_FirstSelected')
  i2376.m_sendNavigationEvents = !!i2377[2]
  i2376.m_DragThreshold = i2377[3]
  return i2376
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2379 = data
  i2378.m_HorizontalAxis = i2379[0]
  i2378.m_VerticalAxis = i2379[1]
  i2378.m_SubmitButton = i2379[2]
  i2378.m_CancelButton = i2379[3]
  i2378.m_InputActionsPerSecond = i2379[4]
  i2378.m_RepeatDelay = i2379[5]
  i2378.m_ForceModuleActive = !!i2379[6]
  i2378.m_SendPointerHoverToParent = !!i2379[7]
  return i2378
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2380 = root || request.c( 'ItemClickable' )
  var i2381 = data
  i2380.requiredClicks = i2381[0]
  i2380.infiniteClick = !!i2381[1]
  i2380.canClick = !!i2381[2]
  i2380.disableAfterClick = !!i2381[3]
  i2380.onClick = request.d('UnityEngine.Events.UnityEvent', i2381[4], i2380.onClick)
  var i2383 = i2381[5]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.add(request.d('UnityEngine.Events.UnityEvent', i2383[i + 0]));
  }
  i2380.sequentialOnClicks = i2382
  i2380.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2381[6], i2380.onClickComplete)
  return i2380
}

Deserializers["Item"] = function (request, data, root) {
  var i2386 = root || request.c( 'Item' )
  var i2387 = data
  i2386.isDone = !!i2387[0]
  i2386.onProcess = !!i2387[1]
  i2386.requireMatchingTargetTypeForHandTut = !!i2387[2]
  request.r(i2387[3], i2387[4], 0, i2386, 'itemDraggable')
  request.r(i2387[5], i2387[6], 0, i2386, 'itemClickable')
  request.r(i2387[7], i2387[8], 0, i2386, 'itemStirring')
  request.r(i2387[9], i2387[10], 0, i2386, 'itemKnifeSpriteMaskCutter')
  request.r(i2387[11], i2387[12], 0, i2386, 'itemSpriteMaskPainter')
  request.r(i2387[13], i2387[14], 0, i2386, 'itemDragSpriteMaskPainter')
  request.r(i2387[15], i2387[16], 0, i2386, 'itemMoveToTarget')
  request.r(i2387[17], i2387[18], 0, i2386, 'animator')
  i2386.itemType = i2387[19]
  request.r(i2387[20], i2387[21], 0, i2386, 'spriteRenderer')
  i2386.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2387[22], i2386.onKnifeIn)
  request.r(i2387[23], i2387[24], 0, i2386, 'knifePos')
  i2386.heartEffectScale = i2387[25]
  i2386.breakHeartEffectScale = i2387[26]
  i2386.blinkEffectScale = i2387[27]
  i2386.mergeEffectScale = i2387[28]
  i2386.playMoveToTargetFinishSound = !!i2387[29]
  i2386.moveToTargetFinishFxType = i2387[30]
  i2386.fxSpawnZPos = i2387[31]
  request.r(i2387[32], i2387[33], 0, i2386, 'tf')
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2389 = data
  i2388.center = new pc.Vec3( i2389[0], i2389[1], i2389[2] )
  i2388.radius = i2389[3]
  i2388.height = i2389[4]
  i2388.direction = i2389[5]
  i2388.enabled = !!i2389[6]
  i2388.isTrigger = !!i2389[7]
  request.r(i2389[8], i2389[9], 0, i2388, 'material')
  return i2388
}

Deserializers["Pan"] = function (request, data, root) {
  var i2390 = root || request.c( 'Pan' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'fryingFX')
  i2390.isOilIn = !!i2391[2]
  i2390.isTurnOnStove = !!i2391[3]
  request.r(i2391[4], i2391[5], 0, i2390, 'stoveBtn')
  request.r(i2391[6], i2391[7], 0, i2390, 'spartula')
  i2390.stoveShakeDelay = i2391[8]
  i2390.stoveShakeDuration = i2391[9]
  var i2393 = i2391[10]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.plates = i2392
  i2390.plateCount = i2391[11]
  request.r(i2391[12], i2391[13], 0, i2390, 'waterPot')
  var i2395 = i2391[14]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2390.otherPot = i2394
  i2390.otherPotCount = i2391[15]
  i2390.isDone = !!i2391[16]
  i2390.onProcess = !!i2391[17]
  i2390.requireMatchingTargetTypeForHandTut = !!i2391[18]
  request.r(i2391[19], i2391[20], 0, i2390, 'itemDraggable')
  request.r(i2391[21], i2391[22], 0, i2390, 'itemClickable')
  request.r(i2391[23], i2391[24], 0, i2390, 'itemStirring')
  request.r(i2391[25], i2391[26], 0, i2390, 'itemKnifeSpriteMaskCutter')
  request.r(i2391[27], i2391[28], 0, i2390, 'itemSpriteMaskPainter')
  request.r(i2391[29], i2391[30], 0, i2390, 'itemDragSpriteMaskPainter')
  request.r(i2391[31], i2391[32], 0, i2390, 'itemMoveToTarget')
  request.r(i2391[33], i2391[34], 0, i2390, 'animator')
  i2390.itemType = i2391[35]
  request.r(i2391[36], i2391[37], 0, i2390, 'spriteRenderer')
  i2390.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2391[38], i2390.onKnifeIn)
  request.r(i2391[39], i2391[40], 0, i2390, 'knifePos')
  i2390.heartEffectScale = i2391[41]
  i2390.breakHeartEffectScale = i2391[42]
  i2390.blinkEffectScale = i2391[43]
  i2390.mergeEffectScale = i2391[44]
  i2390.playMoveToTargetFinishSound = !!i2391[45]
  i2390.moveToTargetFinishFxType = i2391[46]
  i2390.fxSpawnZPos = i2391[47]
  request.r(i2391[48], i2391[49], 0, i2390, 'tf')
  return i2390
}

Deserializers["Spartula"] = function (request, data, root) {
  var i2398 = root || request.c( 'Spartula' )
  var i2399 = data
  i2398.isStir1 = !!i2399[0]
  i2398.isDone = !!i2399[1]
  i2398.onProcess = !!i2399[2]
  i2398.requireMatchingTargetTypeForHandTut = !!i2399[3]
  request.r(i2399[4], i2399[5], 0, i2398, 'itemDraggable')
  request.r(i2399[6], i2399[7], 0, i2398, 'itemClickable')
  request.r(i2399[8], i2399[9], 0, i2398, 'itemStirring')
  request.r(i2399[10], i2399[11], 0, i2398, 'itemKnifeSpriteMaskCutter')
  request.r(i2399[12], i2399[13], 0, i2398, 'itemSpriteMaskPainter')
  request.r(i2399[14], i2399[15], 0, i2398, 'itemDragSpriteMaskPainter')
  request.r(i2399[16], i2399[17], 0, i2398, 'itemMoveToTarget')
  request.r(i2399[18], i2399[19], 0, i2398, 'animator')
  i2398.itemType = i2399[20]
  request.r(i2399[21], i2399[22], 0, i2398, 'spriteRenderer')
  i2398.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2399[23], i2398.onKnifeIn)
  request.r(i2399[24], i2399[25], 0, i2398, 'knifePos')
  i2398.heartEffectScale = i2399[26]
  i2398.breakHeartEffectScale = i2399[27]
  i2398.blinkEffectScale = i2399[28]
  i2398.mergeEffectScale = i2399[29]
  i2398.playMoveToTargetFinishSound = !!i2399[30]
  i2398.moveToTargetFinishFxType = i2399[31]
  i2398.fxSpawnZPos = i2399[32]
  request.r(i2399[33], i2399[34], 0, i2398, 'tf')
  return i2398
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i2400 = root || request.c( 'ItemStirring' )
  var i2401 = data
  i2400.stirRadius = i2401[0]
  request.r(i2401[1], i2401[2], 0, i2400, 'stirrerTransform')
  request.r(i2401[3], i2401[4], 0, i2400, 'centerPoint')
  i2400.movementMode = i2401[5]
  i2400.lineLength = i2401[6]
  i2400.lineDirection = new pc.Vec3( i2401[7], i2401[8], i2401[9] )
  i2400.flipScaleYByLineDragDirection = !!i2401[10]
  request.r(i2401[11], i2401[12], 0, i2400, 'flipScaleTarget')
  request.r(i2401[13], i2401[14], 0, i2400, 'targetAnimator')
  i2400.targetStateName = i2401[15]
  i2400.targetLayer = i2401[16]
  i2400.stoppedSpeed = i2401[17]
  i2400.minDragDistanceToAnimate = i2401[18]
  i2400.dragSpeedMultiplier = i2401[19]
  i2400.minAnimatorSpeed = i2401[20]
  i2400.maxAnimatorSpeed = i2401[21]
  i2400.speedBlendDuration = i2401[22]
  i2400.completeNormalizedTime = i2401[23]
  i2400.resetAnimationOnFirstBegin = !!i2401[24]
  var i2403 = i2401[25]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('StirMilestone', i2403[i + 0]));
  }
  i2400.milestones = i2402
  i2400.spawnProgressBarOnStir = !!i2401[26]
  request.r(i2401[27], i2401[28], 0, i2400, 'spawnProgressBarPoint')
  i2400.rollingSoundCooldown = i2401[29]
  i2400.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i2401[30], i2400.onStirBegin)
  i2400.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i2401[31], i2400.onStirComplete)
  return i2400
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i2406 = root || request.c( 'StirMilestone' )
  var i2407 = data
  i2406.distanceThreshold = i2407[0]
  i2406.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i2407[1], i2406.onMilestoneReached)
  i2406.isReached = !!i2407[2]
  return i2406
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2408 = root || request.c( 'ItemDragChildRotator' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'rotateTarget')
  i2408.dragEulerAngles = new pc.Vec3( i2409[2], i2409[3], i2409[4] )
  i2408.useLocalRotation = !!i2409[5]
  i2408.rotateRelative = !!i2409[6]
  i2408.rotateDuration = i2409[7]
  i2408.rotateEase = i2409[8]
  i2408.rotateMode = i2409[9]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2411 = data
  i2410.frontSortingLayerID = i2411[0]
  i2410.frontSortingOrder = i2411[1]
  i2410.backSortingLayerID = i2411[2]
  i2410.backSortingOrder = i2411[3]
  i2410.alphaCutoff = i2411[4]
  request.r(i2411[5], i2411[6], 0, i2410, 'sprite')
  i2410.tileMode = i2411[7]
  i2410.isCustomRangeActive = !!i2411[8]
  i2410.spriteSortPoint = i2411[9]
  i2410.enabled = !!i2411[10]
  request.r(i2411[11], i2411[12], 0, i2410, 'sharedMaterial')
  var i2413 = i2411[13]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2410.sharedMaterials = i2412
  i2410.receiveShadows = !!i2411[14]
  i2410.shadowCastingMode = i2411[15]
  i2410.sortingLayerID = i2411[16]
  i2410.sortingOrder = i2411[17]
  i2410.lightmapIndex = i2411[18]
  i2410.lightmapSceneIndex = i2411[19]
  i2410.lightmapScaleOffset = new pc.Vec4( i2411[20], i2411[21], i2411[22], i2411[23] )
  i2410.lightProbeUsage = i2411[24]
  i2410.reflectionProbeUsage = i2411[25]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2415 = data
  i2414.ambientIntensity = i2415[0]
  i2414.reflectionIntensity = i2415[1]
  i2414.ambientMode = i2415[2]
  i2414.ambientLight = new pc.Color(i2415[3], i2415[4], i2415[5], i2415[6])
  i2414.ambientSkyColor = new pc.Color(i2415[7], i2415[8], i2415[9], i2415[10])
  i2414.ambientGroundColor = new pc.Color(i2415[11], i2415[12], i2415[13], i2415[14])
  i2414.ambientEquatorColor = new pc.Color(i2415[15], i2415[16], i2415[17], i2415[18])
  i2414.fogColor = new pc.Color(i2415[19], i2415[20], i2415[21], i2415[22])
  i2414.fogEndDistance = i2415[23]
  i2414.fogStartDistance = i2415[24]
  i2414.fogDensity = i2415[25]
  i2414.fog = !!i2415[26]
  request.r(i2415[27], i2415[28], 0, i2414, 'skybox')
  i2414.fogMode = i2415[29]
  var i2417 = i2415[30]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2417[i + 0]) );
  }
  i2414.lightmaps = i2416
  i2414.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2415[31], i2414.lightProbes)
  i2414.lightmapsMode = i2415[32]
  i2414.mixedBakeMode = i2415[33]
  i2414.environmentLightingMode = i2415[34]
  i2414.ambientProbe = new pc.SphericalHarmonicsL2(i2415[35])
  i2414.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2415[36])
  i2414.useReferenceAmbientProbe = !!i2415[37]
  request.r(i2415[38], i2415[39], 0, i2414, 'customReflection')
  request.r(i2415[40], i2415[41], 0, i2414, 'defaultReflection')
  i2414.defaultReflectionMode = i2415[42]
  i2414.defaultReflectionResolution = i2415[43]
  i2414.sunLightObjectId = i2415[44]
  i2414.pixelLightCount = i2415[45]
  i2414.defaultReflectionHDR = !!i2415[46]
  i2414.hasLightDataAsset = !!i2415[47]
  i2414.hasManualGenerate = !!i2415[48]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'lightmapColor')
  request.r(i2421[2], i2421[3], 0, i2420, 'lightmapDirection')
  request.r(i2421[4], i2421[5], 0, i2420, 'shadowMask')
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2422 = root || new UnityEngine.LightProbes()
  var i2423 = data
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2433[i + 0]));
  }
  i2430.ShaderCompilationErrors = i2432
  i2430.name = i2431[1]
  i2430.guid = i2431[2]
  var i2435 = i2431[3]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2430.shaderDefinedKeywords = i2434
  var i2437 = i2431[4]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2437[i + 0]) );
  }
  i2430.passes = i2436
  var i2439 = i2431[5]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2439[i + 0]) );
  }
  i2430.usePasses = i2438
  var i2441 = i2431[6]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2441[i + 0]) );
  }
  i2430.defaultParameterValues = i2440
  request.r(i2431[7], i2431[8], 0, i2430, 'unityFallbackShader')
  i2430.readDepth = !!i2431[9]
  i2430.hasDepthOnlyPass = !!i2431[10]
  i2430.isCreatedByShaderGraph = !!i2431[11]
  i2430.disableBatching = !!i2431[12]
  i2430.compiled = !!i2431[13]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2445 = data
  i2444.shaderName = i2445[0]
  i2444.errorMessage = i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2450 = root || new pc.UnityShaderPass()
  var i2451 = data
  i2450.id = i2451[0]
  i2450.subShaderIndex = i2451[1]
  i2450.name = i2451[2]
  i2450.passType = i2451[3]
  i2450.grabPassTextureName = i2451[4]
  i2450.usePass = !!i2451[5]
  i2450.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[6], i2450.zTest)
  i2450.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[7], i2450.zWrite)
  i2450.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[8], i2450.culling)
  i2450.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2451[9], i2450.blending)
  i2450.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2451[10], i2450.alphaBlending)
  i2450.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[11], i2450.colorWriteMask)
  i2450.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[12], i2450.offsetUnits)
  i2450.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[13], i2450.offsetFactor)
  i2450.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[14], i2450.stencilRef)
  i2450.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[15], i2450.stencilReadMask)
  i2450.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[16], i2450.stencilWriteMask)
  i2450.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[17], i2450.stencilOp)
  i2450.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[18], i2450.stencilOpFront)
  i2450.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[19], i2450.stencilOpBack)
  var i2453 = i2451[20]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2453[i + 0]) );
  }
  i2450.tags = i2452
  var i2455 = i2451[21]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( i2455[i + 0] );
  }
  i2450.passDefinedKeywords = i2454
  var i2457 = i2451[22]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2457[i + 0]) );
  }
  i2450.passDefinedKeywordGroups = i2456
  var i2459 = i2451[23]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2459[i + 0]) );
  }
  i2450.variants = i2458
  var i2461 = i2451[24]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2461[i + 0]) );
  }
  i2450.excludedVariants = i2460
  i2450.hasDepthReader = !!i2451[25]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2463 = data
  i2462.val = i2463[0]
  i2462.name = i2463[1]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2465 = data
  i2464.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[0], i2464.src)
  i2464.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[1], i2464.dst)
  i2464.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[2], i2464.op)
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2467 = data
  i2466.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[0], i2466.pass)
  i2466.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[1], i2466.fail)
  i2466.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[2], i2466.zFail)
  i2466.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[3], i2466.comp)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.value = i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( i2477[i + 0] );
  }
  i2474.keywords = i2476
  i2474.hasDiscard = !!i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2481 = data
  i2480.passId = i2481[0]
  i2480.subShaderIndex = i2481[1]
  var i2483 = i2481[2]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.keywords = i2482
  i2480.vertexProgram = i2481[3]
  i2480.fragmentProgram = i2481[4]
  i2480.exportedForWebGl2 = !!i2481[5]
  i2480.readDepth = !!i2481[6]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'shader')
  i2486.pass = i2487[2]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2491 = data
  i2490.name = i2491[0]
  i2490.type = i2491[1]
  i2490.value = new pc.Vec4( i2491[2], i2491[3], i2491[4], i2491[5] )
  i2490.textureValue = i2491[6]
  i2490.shaderPropertyFlag = i2491[7]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2493 = data
  i2492.name = i2493[0]
  request.r(i2493[1], i2493[2], 0, i2492, 'texture')
  i2492.aabb = i2493[3]
  i2492.vertices = i2493[4]
  i2492.triangles = i2493[5]
  i2492.textureRect = UnityEngine.Rect.MinMaxRect(i2493[6], i2493[7], i2493[8], i2493[9])
  i2492.packedRect = UnityEngine.Rect.MinMaxRect(i2493[10], i2493[11], i2493[12], i2493[13])
  i2492.border = new pc.Vec4( i2493[14], i2493[15], i2493[16], i2493[17] )
  i2492.transparency = i2493[18]
  i2492.bounds = i2493[19]
  i2492.pixelsPerUnit = i2493[20]
  i2492.textureWidth = i2493[21]
  i2492.textureHeight = i2493[22]
  i2492.nativeSize = new pc.Vec2( i2493[23], i2493[24] )
  i2492.pivot = new pc.Vec2( i2493[25], i2493[26] )
  i2492.textureRectOffset = new pc.Vec2( i2493[27], i2493[28] )
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2495 = data
  i2494.name = i2495[0]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2497 = data
  i2496.name = i2497[0]
  i2496.wrapMode = i2497[1]
  i2496.isLooping = !!i2497[2]
  i2496.length = i2497[3]
  var i2499 = i2497[4]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2499[i + 0]) );
  }
  i2496.curves = i2498
  var i2501 = i2497[5]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2501[i + 0]) );
  }
  i2496.events = i2500
  i2496.halfPrecision = !!i2497[6]
  i2496._frameRate = i2497[7]
  i2496.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2497[8], i2496.localBounds)
  i2496.hasMuscleCurves = !!i2497[9]
  var i2503 = i2497[10]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( i2503[i + 0] );
  }
  i2496.clipMuscleConstant = i2502
  i2496.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2497[11], i2496.clipBindingConstant)
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2507 = data
  i2506.path = i2507[0]
  i2506.hash = i2507[1]
  i2506.componentType = i2507[2]
  i2506.property = i2507[3]
  i2506.keys = i2507[4]
  var i2509 = i2507[5]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2509[i + 0]) );
  }
  i2506.objectReferenceKeys = i2508
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2513 = data
  i2512.time = i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'value')
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2517 = data
  i2516.functionName = i2517[0]
  i2516.floatParameter = i2517[1]
  i2516.intParameter = i2517[2]
  i2516.stringParameter = i2517[3]
  request.r(i2517[4], i2517[5], 0, i2516, 'objectReferenceParameter')
  i2516.time = i2517[6]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2519 = data
  i2518.center = new pc.Vec3( i2519[0], i2519[1], i2519[2] )
  i2518.extends = new pc.Vec3( i2519[3], i2519[4], i2519[5] )
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2523 = data
  var i2525 = i2523[0]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( i2525[i + 0] );
  }
  i2522.genericBindings = i2524
  var i2527 = i2523[1]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2522.pptrCurveMapping = i2526
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2529 = data
  i2528.name = i2529[0]
  var i2531 = i2529[1]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2531[i + 0]) );
  }
  i2528.layers = i2530
  var i2533 = i2529[2]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2533[i + 0]) );
  }
  i2528.parameters = i2532
  i2528.animationClips = i2529[3]
  i2528.avatarUnsupported = i2529[4]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.defaultWeight = i2537[1]
  i2536.blendingMode = i2537[2]
  i2536.avatarMask = i2537[3]
  i2536.syncedLayerIndex = i2537[4]
  i2536.syncedLayerAffectsTiming = !!i2537[5]
  i2536.syncedLayers = i2537[6]
  i2536.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2537[7], i2536.stateMachine)
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2539 = data
  i2538.id = i2539[0]
  i2538.name = i2539[1]
  i2538.path = i2539[2]
  var i2541 = i2539[3]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2541[i + 0]) );
  }
  i2538.states = i2540
  var i2543 = i2539[4]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2543[i + 0]) );
  }
  i2538.machines = i2542
  var i2545 = i2539[5]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2545[i + 0]) );
  }
  i2538.entryStateTransitions = i2544
  var i2547 = i2539[6]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2547[i + 0]) );
  }
  i2538.exitStateTransitions = i2546
  var i2549 = i2539[7]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2549[i + 0]) );
  }
  i2538.anyStateTransitions = i2548
  i2538.defaultStateId = i2539[8]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2553 = data
  i2552.id = i2553[0]
  i2552.name = i2553[1]
  i2552.cycleOffset = i2553[2]
  i2552.cycleOffsetParameter = i2553[3]
  i2552.cycleOffsetParameterActive = !!i2553[4]
  i2552.mirror = !!i2553[5]
  i2552.mirrorParameter = i2553[6]
  i2552.mirrorParameterActive = !!i2553[7]
  i2552.motionId = i2553[8]
  i2552.nameHash = i2553[9]
  i2552.fullPathHash = i2553[10]
  i2552.speed = i2553[11]
  i2552.speedParameter = i2553[12]
  i2552.speedParameterActive = !!i2553[13]
  i2552.tag = i2553[14]
  i2552.tagHash = i2553[15]
  i2552.writeDefaultValues = !!i2553[16]
  var i2555 = i2553[17]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2552.behaviours = i2554
  var i2557 = i2553[18]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2557[i + 0]) );
  }
  i2552.transitions = i2556
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2563 = data
  i2562.fullPath = i2563[0]
  i2562.canTransitionToSelf = !!i2563[1]
  i2562.duration = i2563[2]
  i2562.exitTime = i2563[3]
  i2562.hasExitTime = !!i2563[4]
  i2562.hasFixedDuration = !!i2563[5]
  i2562.interruptionSource = i2563[6]
  i2562.offset = i2563[7]
  i2562.orderedInterruption = !!i2563[8]
  i2562.destinationStateId = i2563[9]
  i2562.isExit = !!i2563[10]
  i2562.mute = !!i2563[11]
  i2562.solo = !!i2563[12]
  var i2565 = i2563[13]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2565[i + 0]) );
  }
  i2562.conditions = i2564
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2571 = data
  i2570.destinationStateId = i2571[0]
  i2570.isExit = !!i2571[1]
  i2570.mute = !!i2571[2]
  i2570.solo = !!i2571[3]
  var i2573 = i2571[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2573[i + 0]) );
  }
  i2570.conditions = i2572
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2577 = data
  i2576.defaultBool = !!i2577[0]
  i2576.defaultFloat = i2577[1]
  i2576.defaultInt = i2577[2]
  i2576.name = i2577[3]
  i2576.nameHash = i2577[4]
  i2576.type = i2577[5]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2581 = data
  i2580.mode = i2581[0]
  i2580.parameter = i2581[1]
  i2580.threshold = i2581[2]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2583 = data
  i2582.name = i2583[0]
  i2582.bytes64 = i2583[1]
  i2582.data = i2583[2]
  return i2582
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2585 = data
  i2584.normalStyle = i2585[0]
  i2584.normalSpacingOffset = i2585[1]
  i2584.boldStyle = i2585[2]
  i2584.boldSpacing = i2585[3]
  i2584.italicStyle = i2585[4]
  i2584.tabSize = i2585[5]
  request.r(i2585[6], i2585[7], 0, i2584, 'atlas')
  i2584.m_SourceFontFileGUID = i2585[8]
  i2584.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2585[9], i2584.m_CreationSettings)
  request.r(i2585[10], i2585[11], 0, i2584, 'm_SourceFontFile')
  i2584.m_SourceFontFilePath = i2585[12]
  i2584.m_AtlasPopulationMode = i2585[13]
  i2584.InternalDynamicOS = !!i2585[14]
  var i2587 = i2585[15]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.add(request.d('UnityEngine.TextCore.Glyph', i2587[i + 0]));
  }
  i2584.m_GlyphTable = i2586
  var i2589 = i2585[16]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('TMPro.TMP_Character', i2589[i + 0]));
  }
  i2584.m_CharacterTable = i2588
  var i2591 = i2585[17]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 2) {
  request.r(i2591[i + 0], i2591[i + 1], 2, i2590, '')
  }
  i2584.m_AtlasTextures = i2590
  i2584.m_AtlasTextureIndex = i2585[18]
  i2584.m_IsMultiAtlasTexturesEnabled = !!i2585[19]
  i2584.m_GetFontFeatures = !!i2585[20]
  i2584.m_ClearDynamicDataOnBuild = !!i2585[21]
  i2584.m_AtlasWidth = i2585[22]
  i2584.m_AtlasHeight = i2585[23]
  i2584.m_AtlasPadding = i2585[24]
  i2584.m_AtlasRenderMode = i2585[25]
  var i2593 = i2585[26]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.add(request.d('UnityEngine.TextCore.GlyphRect', i2593[i + 0]));
  }
  i2584.m_UsedGlyphRects = i2592
  var i2595 = i2585[27]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('UnityEngine.TextCore.GlyphRect', i2595[i + 0]));
  }
  i2584.m_FreeGlyphRects = i2594
  i2584.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2585[28], i2584.m_FontFeatureTable)
  i2584.m_ShouldReimportFontFeatures = !!i2585[29]
  var i2597 = i2585[30]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 1, i2596, '')
  }
  i2584.m_FallbackFontAssetTable = i2596
  var i2599 = i2585[31]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('TMPro.TMP_FontWeightPair', i2599[i + 0]) );
  }
  i2584.m_FontWeightTable = i2598
  var i2601 = i2585[32]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('TMPro.TMP_FontWeightPair', i2601[i + 0]) );
  }
  i2584.fontWeights = i2600
  i2584.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2585[33], i2584.m_fontInfo)
  var i2603 = i2585[34]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.TMP_Glyph', i2603[i + 0]));
  }
  i2584.m_glyphInfoList = i2602
  i2584.m_KerningTable = request.d('TMPro.KerningTable', i2585[35], i2584.m_KerningTable)
  var i2605 = i2585[36]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2605.length; i += 2) {
  request.r(i2605[i + 0], i2605[i + 1], 1, i2604, '')
  }
  i2584.fallbackFontAssets = i2604
  i2584.m_Version = i2585[37]
  i2584.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2585[38], i2584.m_FaceInfo)
  request.r(i2585[39], i2585[40], 0, i2584, 'm_Material')
  return i2584
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2607 = data
  i2606.sourceFontFileName = i2607[0]
  i2606.sourceFontFileGUID = i2607[1]
  i2606.faceIndex = i2607[2]
  i2606.pointSizeSamplingMode = i2607[3]
  i2606.pointSize = i2607[4]
  i2606.padding = i2607[5]
  i2606.paddingMode = i2607[6]
  i2606.packingMode = i2607[7]
  i2606.atlasWidth = i2607[8]
  i2606.atlasHeight = i2607[9]
  i2606.characterSetSelectionMode = i2607[10]
  i2606.characterSequence = i2607[11]
  i2606.referencedFontAssetGUID = i2607[12]
  i2606.referencedTextAssetGUID = i2607[13]
  i2606.fontStyle = i2607[14]
  i2606.fontStyleModifier = i2607[15]
  i2606.renderMode = i2607[16]
  i2606.includeFontFeatures = !!i2607[17]
  return i2606
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2611 = data
  i2610.m_Index = i2611[0]
  i2610.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2611[1], i2610.m_Metrics)
  i2610.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2611[2], i2610.m_GlyphRect)
  i2610.m_Scale = i2611[3]
  i2610.m_AtlasIndex = i2611[4]
  i2610.m_ClassDefinitionType = i2611[5]
  return i2610
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2613 = data
  i2612.m_Width = i2613[0]
  i2612.m_Height = i2613[1]
  i2612.m_HorizontalBearingX = i2613[2]
  i2612.m_HorizontalBearingY = i2613[3]
  i2612.m_HorizontalAdvance = i2613[4]
  return i2612
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2615 = data
  i2614.m_X = i2615[0]
  i2614.m_Y = i2615[1]
  i2614.m_Width = i2615[2]
  i2614.m_Height = i2615[3]
  return i2614
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.TMP_Character' )
  var i2619 = data
  i2618.m_ElementType = i2619[0]
  i2618.m_Unicode = i2619[1]
  i2618.m_GlyphIndex = i2619[2]
  i2618.m_Scale = i2619[3]
  return i2618
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2625 = data
  var i2627 = i2625[0]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.add(request.d('TMPro.MultipleSubstitutionRecord', i2627[i + 0]));
  }
  i2624.m_MultipleSubstitutionRecords = i2626
  var i2629 = i2625[1]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.LigatureSubstitutionRecord', i2629[i + 0]));
  }
  i2624.m_LigatureSubstitutionRecords = i2628
  var i2631 = i2625[2]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2631[i + 0]));
  }
  i2624.m_GlyphPairAdjustmentRecords = i2630
  var i2633 = i2625[3]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2633[i + 0]));
  }
  i2624.m_MarkToBaseAdjustmentRecords = i2632
  var i2635 = i2625[4]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2635[i + 0]));
  }
  i2624.m_MarkToMarkAdjustmentRecords = i2634
  return i2624
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2639 = data
  i2638.m_TargetGlyphID = i2639[0]
  i2638.m_SubstituteGlyphIDs = i2639[1]
  return i2638
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2643 = data
  i2642.m_ComponentGlyphIDs = i2643[0]
  i2642.m_LigatureGlyphID = i2643[1]
  return i2642
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2647 = data
  i2646.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2647[0], i2646.m_FirstAdjustmentRecord)
  i2646.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2647[1], i2646.m_SecondAdjustmentRecord)
  i2646.m_FeatureLookupFlags = i2647[2]
  return i2646
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2651 = data
  i2650.m_BaseGlyphID = i2651[0]
  i2650.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2651[1], i2650.m_BaseGlyphAnchorPoint)
  i2650.m_MarkGlyphID = i2651[2]
  i2650.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2651[3], i2650.m_MarkPositionAdjustment)
  return i2650
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2655 = data
  i2654.m_BaseMarkGlyphID = i2655[0]
  i2654.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2655[1], i2654.m_BaseMarkGlyphAnchorPoint)
  i2654.m_CombiningMarkGlyphID = i2655[2]
  i2654.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2655[3], i2654.m_CombiningMarkPositionAdjustment)
  return i2654
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, 'regularTypeface')
  request.r(i2661[2], i2661[3], 0, i2660, 'italicTypeface')
  return i2660
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2663 = data
  i2662.Name = i2663[0]
  i2662.PointSize = i2663[1]
  i2662.Scale = i2663[2]
  i2662.CharacterCount = i2663[3]
  i2662.LineHeight = i2663[4]
  i2662.Baseline = i2663[5]
  i2662.Ascender = i2663[6]
  i2662.CapHeight = i2663[7]
  i2662.Descender = i2663[8]
  i2662.CenterLine = i2663[9]
  i2662.SuperscriptOffset = i2663[10]
  i2662.SubscriptOffset = i2663[11]
  i2662.SubSize = i2663[12]
  i2662.Underline = i2663[13]
  i2662.UnderlineThickness = i2663[14]
  i2662.strikethrough = i2663[15]
  i2662.strikethroughThickness = i2663[16]
  i2662.TabWidth = i2663[17]
  i2662.Padding = i2663[18]
  i2662.AtlasWidth = i2663[19]
  i2662.AtlasHeight = i2663[20]
  return i2662
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2667 = data
  i2666.id = i2667[0]
  i2666.x = i2667[1]
  i2666.y = i2667[2]
  i2666.width = i2667[3]
  i2666.height = i2667[4]
  i2666.xOffset = i2667[5]
  i2666.yOffset = i2667[6]
  i2666.xAdvance = i2667[7]
  i2666.scale = i2667[8]
  return i2666
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.KerningTable' )
  var i2669 = data
  var i2671 = i2669[0]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('TMPro.KerningPair', i2671[i + 0]));
  }
  i2668.kerningPairs = i2670
  return i2668
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.KerningPair' )
  var i2675 = data
  i2674.xOffset = i2675[0]
  i2674.m_FirstGlyph = i2675[1]
  i2674.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2675[2], i2674.m_FirstGlyphAdjustments)
  i2674.m_SecondGlyph = i2675[3]
  i2674.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2675[4], i2674.m_SecondGlyphAdjustments)
  i2674.m_IgnoreSpacingAdjustments = !!i2675[5]
  return i2674
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2677 = data
  i2676.m_FaceIndex = i2677[0]
  i2676.m_FamilyName = i2677[1]
  i2676.m_StyleName = i2677[2]
  i2676.m_PointSize = i2677[3]
  i2676.m_Scale = i2677[4]
  i2676.m_UnitsPerEM = i2677[5]
  i2676.m_LineHeight = i2677[6]
  i2676.m_AscentLine = i2677[7]
  i2676.m_CapLine = i2677[8]
  i2676.m_MeanLine = i2677[9]
  i2676.m_Baseline = i2677[10]
  i2676.m_DescentLine = i2677[11]
  i2676.m_SuperscriptOffset = i2677[12]
  i2676.m_SuperscriptSize = i2677[13]
  i2676.m_SubscriptOffset = i2677[14]
  i2676.m_SubscriptSize = i2677[15]
  i2676.m_UnderlineOffset = i2677[16]
  i2676.m_UnderlineThickness = i2677[17]
  i2676.m_StrikethroughOffset = i2677[18]
  i2676.m_StrikethroughThickness = i2677[19]
  i2676.m_TabWidth = i2677[20]
  return i2676
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2678 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2679 = data
  i2678.useSafeMode = !!i2679[0]
  i2678.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2679[1], i2678.safeModeOptions)
  i2678.timeScale = i2679[2]
  i2678.unscaledTimeScale = i2679[3]
  i2678.useSmoothDeltaTime = !!i2679[4]
  i2678.maxSmoothUnscaledTime = i2679[5]
  i2678.rewindCallbackMode = i2679[6]
  i2678.showUnityEditorReport = !!i2679[7]
  i2678.logBehaviour = i2679[8]
  i2678.drawGizmos = !!i2679[9]
  i2678.defaultRecyclable = !!i2679[10]
  i2678.defaultAutoPlay = i2679[11]
  i2678.defaultUpdateType = i2679[12]
  i2678.defaultTimeScaleIndependent = !!i2679[13]
  i2678.defaultEaseType = i2679[14]
  i2678.defaultEaseOvershootOrAmplitude = i2679[15]
  i2678.defaultEasePeriod = i2679[16]
  i2678.defaultAutoKill = !!i2679[17]
  i2678.defaultLoopType = i2679[18]
  i2678.debugMode = !!i2679[19]
  i2678.debugStoreTargetId = !!i2679[20]
  i2678.showPreviewPanel = !!i2679[21]
  i2678.storeSettingsLocation = i2679[22]
  i2678.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2679[23], i2678.modules)
  i2678.createASMDEF = !!i2679[24]
  i2678.showPlayingTweens = !!i2679[25]
  i2678.showPausedTweens = !!i2679[26]
  return i2678
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2681 = data
  i2680.logBehaviour = i2681[0]
  i2680.nestedTweenFailureBehaviour = i2681[1]
  return i2680
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2682 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2683 = data
  i2682.showPanel = !!i2683[0]
  i2682.audioEnabled = !!i2683[1]
  i2682.physicsEnabled = !!i2683[2]
  i2682.physics2DEnabled = !!i2683[3]
  i2682.spriteEnabled = !!i2683[4]
  i2682.uiEnabled = !!i2683[5]
  i2682.uiToolkitEnabled = !!i2683[6]
  i2682.textMeshProEnabled = !!i2683[7]
  i2682.tk2DEnabled = !!i2683[8]
  i2682.deAudioEnabled = !!i2683[9]
  i2682.deUnityExtendedEnabled = !!i2683[10]
  i2682.epoOutlineEnabled = !!i2683[11]
  return i2682
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_Settings' )
  var i2685 = data
  i2684.assetVersion = i2685[0]
  i2684.m_TextWrappingMode = i2685[1]
  i2684.m_enableKerning = !!i2685[2]
  var i2687 = i2685[3]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(i2687[i + 0]);
  }
  i2684.m_ActiveFontFeatures = i2686
  i2684.m_enableExtraPadding = !!i2685[4]
  i2684.m_enableTintAllSprites = !!i2685[5]
  i2684.m_enableParseEscapeCharacters = !!i2685[6]
  i2684.m_EnableRaycastTarget = !!i2685[7]
  i2684.m_GetFontFeaturesAtRuntime = !!i2685[8]
  i2684.m_missingGlyphCharacter = i2685[9]
  i2684.m_ClearDynamicDataOnBuild = !!i2685[10]
  i2684.m_warningsDisabled = !!i2685[11]
  request.r(i2685[12], i2685[13], 0, i2684, 'm_defaultFontAsset')
  i2684.m_defaultFontAssetPath = i2685[14]
  i2684.m_defaultFontSize = i2685[15]
  i2684.m_defaultAutoSizeMinRatio = i2685[16]
  i2684.m_defaultAutoSizeMaxRatio = i2685[17]
  i2684.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2685[18], i2685[19] )
  i2684.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2685[20], i2685[21] )
  i2684.m_autoSizeTextContainer = !!i2685[22]
  i2684.m_IsTextObjectScaleStatic = !!i2685[23]
  var i2689 = i2685[24]
  var i2688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2689.length; i += 2) {
  request.r(i2689[i + 0], i2689[i + 1], 1, i2688, '')
  }
  i2684.m_fallbackFontAssets = i2688
  i2684.m_matchMaterialPreset = !!i2685[25]
  i2684.m_HideSubTextObjects = !!i2685[26]
  request.r(i2685[27], i2685[28], 0, i2684, 'm_defaultSpriteAsset')
  i2684.m_defaultSpriteAssetPath = i2685[29]
  i2684.m_enableEmojiSupport = !!i2685[30]
  i2684.m_MissingCharacterSpriteUnicode = i2685[31]
  var i2691 = i2685[32]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 1, i2690, '')
  }
  i2684.m_EmojiFallbackTextAssets = i2690
  i2684.m_defaultColorGradientPresetsPath = i2685[33]
  request.r(i2685[34], i2685[35], 0, i2684, 'm_defaultStyleSheet')
  i2684.m_StyleSheetsResourcePath = i2685[36]
  request.r(i2685[37], i2685[38], 0, i2684, 'm_leadingCharacters')
  request.r(i2685[39], i2685[40], 0, i2684, 'm_followingCharacters')
  i2684.m_UseModernHangulLineBreakingRules = !!i2685[41]
  return i2684
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2695 = data
  request.r(i2695[0], i2695[1], 0, i2694, 'spriteSheet')
  var i2697 = i2695[2]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('TMPro.TMP_Sprite', i2697[i + 0]));
  }
  i2694.spriteInfoList = i2696
  var i2699 = i2695[3]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2699.length; i += 2) {
  request.r(i2699[i + 0], i2699[i + 1], 1, i2698, '')
  }
  i2694.fallbackSpriteAssets = i2698
  var i2701 = i2695[4]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('TMPro.TMP_SpriteCharacter', i2701[i + 0]));
  }
  i2694.m_SpriteCharacterTable = i2700
  var i2703 = i2695[5]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('TMPro.TMP_SpriteGlyph', i2703[i + 0]));
  }
  i2694.m_GlyphTable = i2702
  i2694.m_Version = i2695[6]
  i2694.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2695[7], i2694.m_FaceInfo)
  request.r(i2695[8], i2695[9], 0, i2694, 'm_Material')
  return i2694
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2707 = data
  i2706.name = i2707[0]
  i2706.hashCode = i2707[1]
  i2706.unicode = i2707[2]
  i2706.pivot = new pc.Vec2( i2707[3], i2707[4] )
  request.r(i2707[5], i2707[6], 0, i2706, 'sprite')
  i2706.id = i2707[7]
  i2706.x = i2707[8]
  i2706.y = i2707[9]
  i2706.width = i2707[10]
  i2706.height = i2707[11]
  i2706.xOffset = i2707[12]
  i2706.yOffset = i2707[13]
  i2706.xAdvance = i2707[14]
  i2706.scale = i2707[15]
  return i2706
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2712 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2713 = data
  i2712.m_Name = i2713[0]
  i2712.m_ElementType = i2713[1]
  i2712.m_Unicode = i2713[2]
  i2712.m_GlyphIndex = i2713[3]
  i2712.m_Scale = i2713[4]
  return i2712
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'sprite')
  i2716.m_Index = i2717[2]
  i2716.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2717[3], i2716.m_Metrics)
  i2716.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2717[4], i2716.m_GlyphRect)
  i2716.m_Scale = i2717[5]
  i2716.m_AtlasIndex = i2717[6]
  i2716.m_ClassDefinitionType = i2717[7]
  return i2716
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2718 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2719 = data
  var i2721 = i2719[0]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(request.d('TMPro.TMP_Style', i2721[i + 0]));
  }
  i2718.m_StyleList = i2720
  return i2718
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_Style' )
  var i2725 = data
  i2724.m_Name = i2725[0]
  i2724.m_HashCode = i2725[1]
  i2724.m_OpeningDefinition = i2725[2]
  i2724.m_ClosingDefinition = i2725[3]
  i2724.m_OpeningTagArray = i2725[4]
  i2724.m_ClosingTagArray = i2725[5]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2729[i + 0]) );
  }
  i2726.files = i2728
  i2726.componentToPrefabIds = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2733 = data
  i2732.path = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'unityObject')
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2735 = data
  var i2737 = i2735[0]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2737[i + 0]) );
  }
  i2734.scriptsExecutionOrder = i2736
  var i2739 = i2735[1]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2739[i + 0]) );
  }
  i2734.sortingLayers = i2738
  var i2741 = i2735[2]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2741[i + 0]) );
  }
  i2734.cullingLayers = i2740
  i2734.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2735[3], i2734.timeSettings)
  i2734.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2735[4], i2734.physicsSettings)
  i2734.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2735[5], i2734.physics2DSettings)
  i2734.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2735[6], i2734.qualitySettings)
  i2734.enableRealtimeShadows = !!i2735[7]
  i2734.enableAutoInstancing = !!i2735[8]
  i2734.enableStaticBatching = !!i2735[9]
  i2734.enableDynamicBatching = !!i2735[10]
  i2734.lightmapEncodingQuality = i2735[11]
  i2734.desiredColorSpace = i2735[12]
  var i2743 = i2735[13]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( i2743[i + 0] );
  }
  i2734.allTags = i2742
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.value = i2747[1]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2751 = data
  i2750.id = i2751[0]
  i2750.name = i2751[1]
  i2750.value = i2751[2]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2755 = data
  i2754.id = i2755[0]
  i2754.name = i2755[1]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2757 = data
  i2756.fixedDeltaTime = i2757[0]
  i2756.maximumDeltaTime = i2757[1]
  i2756.timeScale = i2757[2]
  i2756.maximumParticleTimestep = i2757[3]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2759 = data
  i2758.gravity = new pc.Vec3( i2759[0], i2759[1], i2759[2] )
  i2758.defaultSolverIterations = i2759[3]
  i2758.bounceThreshold = i2759[4]
  i2758.autoSyncTransforms = !!i2759[5]
  i2758.autoSimulation = !!i2759[6]
  var i2761 = i2759[7]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2761[i + 0]) );
  }
  i2758.collisionMatrix = i2760
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2765 = data
  i2764.enabled = !!i2765[0]
  i2764.layerId = i2765[1]
  i2764.otherLayerId = i2765[2]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'material')
  i2766.gravity = new pc.Vec2( i2767[2], i2767[3] )
  i2766.positionIterations = i2767[4]
  i2766.velocityIterations = i2767[5]
  i2766.velocityThreshold = i2767[6]
  i2766.maxLinearCorrection = i2767[7]
  i2766.maxAngularCorrection = i2767[8]
  i2766.maxTranslationSpeed = i2767[9]
  i2766.maxRotationSpeed = i2767[10]
  i2766.baumgarteScale = i2767[11]
  i2766.baumgarteTOIScale = i2767[12]
  i2766.timeToSleep = i2767[13]
  i2766.linearSleepTolerance = i2767[14]
  i2766.angularSleepTolerance = i2767[15]
  i2766.defaultContactOffset = i2767[16]
  i2766.autoSimulation = !!i2767[17]
  i2766.queriesHitTriggers = !!i2767[18]
  i2766.queriesStartInColliders = !!i2767[19]
  i2766.callbacksOnDisable = !!i2767[20]
  i2766.reuseCollisionCallbacks = !!i2767[21]
  i2766.autoSyncTransforms = !!i2767[22]
  var i2769 = i2767[23]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2769[i + 0]) );
  }
  i2766.collisionMatrix = i2768
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2773 = data
  i2772.enabled = !!i2773[0]
  i2772.layerId = i2773[1]
  i2772.otherLayerId = i2773[2]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2777[i + 0]) );
  }
  i2774.qualityLevels = i2776
  var i2779 = i2775[1]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( i2779[i + 0] );
  }
  i2774.names = i2778
  i2774.shadows = i2775[2]
  i2774.anisotropicFiltering = i2775[3]
  i2774.antiAliasing = i2775[4]
  i2774.lodBias = i2775[5]
  i2774.shadowCascades = i2775[6]
  i2774.shadowDistance = i2775[7]
  i2774.shadowmaskMode = i2775[8]
  i2774.shadowProjection = i2775[9]
  i2774.shadowResolution = i2775[10]
  i2774.softParticles = !!i2775[11]
  i2774.softVegetation = !!i2775[12]
  i2774.activeColorSpace = i2775[13]
  i2774.desiredColorSpace = i2775[14]
  i2774.masterTextureLimit = i2775[15]
  i2774.maxQueuedFrames = i2775[16]
  i2774.particleRaycastBudget = i2775[17]
  i2774.pixelLightCount = i2775[18]
  i2774.realtimeReflectionProbes = !!i2775[19]
  i2774.shadowCascade2Split = i2775[20]
  i2774.shadowCascade4Split = new pc.Vec3( i2775[21], i2775[22], i2775[23] )
  i2774.streamingMipmapsActive = !!i2775[24]
  i2774.vSyncCount = i2775[25]
  i2774.asyncUploadBufferSize = i2775[26]
  i2774.asyncUploadTimeSlice = i2775[27]
  i2774.billboardsFaceCameraPosition = !!i2775[28]
  i2774.shadowNearPlaneOffset = i2775[29]
  i2774.streamingMipmapsMemoryBudget = i2775[30]
  i2774.maximumLODLevel = i2775[31]
  i2774.streamingMipmapsAddAllCameras = !!i2775[32]
  i2774.streamingMipmapsMaxLevelReduction = i2775[33]
  i2774.streamingMipmapsRenderersPerFrame = i2775[34]
  i2774.resolutionScalingFixedDPIFactor = i2775[35]
  i2774.streamingMipmapsMaxFileIORequests = i2775[36]
  i2774.currentQualityLevel = i2775[37]
  return i2774
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2783 = data
  i2782.m_GlyphIndex = i2783[0]
  i2782.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2783[1], i2782.m_GlyphValueRecord)
  return i2782
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2785 = data
  i2784.m_XCoordinate = i2785[0]
  i2784.m_YCoordinate = i2785[1]
  return i2784
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2787 = data
  i2786.m_XPositionAdjustment = i2787[0]
  i2786.m_YPositionAdjustment = i2787[1]
  return i2786
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2789 = data
  i2788.xPlacement = i2789[0]
  i2788.yPlacement = i2789[1]
  i2788.xAdvance = i2789[2]
  i2788.yAdvance = i2789[3]
  return i2788
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2791 = data
  i2790.m_XPlacement = i2791[0]
  i2790.m_YPlacement = i2791[1]
  i2790.m_XAdvance = i2791[2]
  i2790.m_YAdvance = i2791[3]
  return i2790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[28],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[28],"96":[97],"98":[99],"100":[99],"27":[13],"101":[58],"102":[20],"54":[103],"57":[20],"20":[103],"24":[20],"104":[20],"105":[103],"106":[103],"56":[103],"107":[13],"108":[16,13],"109":[97],"110":[16,13],"111":[25,97],"112":[97],"113":[97,114],"115":[75],"116":[82],"117":[118],"119":[120],"121":[5],"122":[28],"123":[124],"125":[13],"126":[97,13],"32":[13,16],"127":[13],"128":[16,13],"129":[97],"130":[16,13],"131":[13],"132":[133],"134":[133],"135":[133],"136":[13],"137":[13],"30":[27],"15":[16,13],"138":[13],"29":[27],"139":[13],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[16,13],"149":[13],"150":[13],"151":[13],"36":[13],"152":[16,13],"153":[13],"154":[52],"155":[52],"53":[52],"156":[52],"157":[28],"158":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Pan","Item","Spartula","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ItemClickable","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","OilBrush","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "42.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v65_StyleBurrito";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5014";

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

Deserializers.buildID = "e042f7f5-4c28-4b59-ad54-0cb6042b0f74";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

